/* eslint-disable @typescript-eslint/no-var-requires */
// …Some others imports before
const path = require('path')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const nextConfig = {
  poweredByHeader: false,

  webpack(config, { isServer }) {
    // Allows to prevent crashes on server with EUi
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

      // Mock HTMLElement, window and localStorage server-side
      const definePluginId = config.plugins.findIndex(p => p.constructor.name === 'DefinePlugin')
      config.plugins[definePluginId].definitions = {
        ...config.plugins[definePluginId].definitions,
        HTMLElement: function() {},

        window: function() {},

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

    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'node_modules/@elastic/eui/dist/eui_theme_light.min.css'),
          to: path.join(__dirname, 'public/themes/eui_theme_light.min.css'),
        },
        {
          from: path.join(__dirname, 'node_modules/@elastic/eui/dist/eui_theme_dark.min.css'),
          to: path.join(__dirname, 'public/themes/eui_theme_dark.min.css'),
        },
      ])
    )

    return config
  },
}

module.exports = withImages(withSass(nextConfig))
