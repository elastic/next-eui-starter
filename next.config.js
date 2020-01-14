/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-use-before-define,@typescript-eslint/no-empty-function */
const crypto = require('crypto')
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// If you are deploying your site under a directory other than `/` e.g.
// GitHub pages, then you have to tell Next where the files will be served.
// We don't need this during local development, because everything is
// available under `/`.
const usePathPrefix = process.env.PATH_PREFIX === 'true'

// Change this to be the name of your repository. GitHub will serve your
// site under this path.
const pathPrefix = usePathPrefix ? '/next-eui-starter' : ''

const themeConfig = buildThemeConfig()

const nextConfig = {
  poweredByHeader: false,

  assetPrefix: pathPrefix,

  env: {
    PATH_PREFIX: pathPrefix,
    THEME_CONFIG: JSON.stringify(themeConfig),
  },

  webpack(config, { isServer }) {
    // EUI uses some libraries and features that don't work outside of a
    // browser by default. We need to configure the build so that these
    // features are either ignored or replaced with stubs.
    if (isServer) {
      config.externals = config.externals.map(fn => {
        return (context, request, callback) => {
          if (request.indexOf('@elastic/eui') > -1 || request.indexOf('react-ace') > -1) {
            return callback()
          }

          return fn(context, request, callback)
        }
      })

      // Mock react-ace server-side
      config.module.rules.push({
        test: /react-ace/,
        use: 'null-loader',
      })

      // Mock HTMLElement, window and localStorage on the server-side
      const definePluginId = config.plugins.findIndex(p => p.constructor.name === 'DefinePlugin')

      config.plugins[definePluginId].definitions = {
        ...config.plugins[definePluginId].definitions,
        HTMLElement: function() {},

        window: function() {},

        // This definition allows localStorage to be called, but it stores
        // nothing.
        localStorage: {
          getItem: function() {
            return null
          },

          setItem: function() {
            return
          },
        },
      }
    }

    config.plugins.push(new CopyWebpackPlugin(themeConfig.copyConfig))

    return config
  },
}

module.exports = withImages(withSass(nextConfig))

/**
 * Find all EUI themes and construct a CopyWebpackPlugin config for each.
 * When copying the files, inject a hash into the filename so that when
 * themes are updated, any caches will be refreshed.
 */
function buildThemeConfig() {
  const themeFiles = glob.sync(path.join(__dirname, 'node_modules', '@elastic', 'eui', 'dist', 'eui_theme_*.min.css'))

  const themeConfig = {
    publicPaths: [],
    copyConfig: [],
  }

  for (const each of themeFiles) {
    const basename = path.basename(each, '.min.css')

    const themeId = basename.replace(/^eui_theme_/, '')

    const themeName = themeId[0].toUpperCase() + themeId.slice(1).replace(/_/g, ' ')

    const publicPath = `themes/${basename}.${hashFile(each)}.min.css`
    const toPath = path.join(__dirname, `public/themes/${basename}.${hashFile(each)}.min.css`)

    themeConfig.publicPaths.push({
      id: themeId,
      name: themeName,
      publicPath,
    })

    themeConfig.copyConfig.push({
      from: each,
      to: toPath,
    })
  }

  return themeConfig
}

/**
 * Given a file, calculate a hash and return the first portion. The number
 * of characters is truncated to match how Webpack generates hashes.
 *
 * @param {string} filePath the absolute path to the file to hash.
 */
function hashFile(filePath) {
  const hash = crypto.createHash(`sha256`)
  const fileData = fs.readFileSync(filePath)
  hash.update(fileData)
  const fullHash = hash.digest(`hex`)

  // Use a hash length that matches what Webpack does
  return fullHash.substr(0, 20)
}
