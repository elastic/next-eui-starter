/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-use-before-define,@typescript-eslint/no-empty-function */
const crypto = require('crypto');
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withSass = require('@zeit/next-sass');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { NormalModuleReplacementPlugin } = require('webpack');

/**
 * If you are deploying your site under a directory other than `/` e.g.
 * GitHub pages, then you have to tell Next where the files will be served.
 * We don't need this during local development, because everything is
 * available under `/`.
 */
const usePathPrefix = process.env.PATH_PREFIX === 'true';

/**
 * Change this to be the name of your repository. GitHub will serve your
 * site under this path.
 */
const pathPrefix = usePathPrefix ? '/next-eui-starter' : '';

const themeConfig = buildThemeConfig();

const nextConfig = {
  /** Disable the `X-Powered-By: Next.js` response header. */
  poweredByHeader: false,

  /**
   * Next.js documents this for use hosting assets on a CDN, but we use
   * it to support static HTML exports with a path prefix.
   */
  assetPrefix: pathPrefix,

  /**
   * Set custom `process.env.SOMETHING` values to use in the application.
   * You can do this with Webpack's `DefinePlugin`, but this is more concise.
   * It's also possible to provide values via `publicRuntimeConfig`, but
   * this method is preferred as it can be done statically at build time.
   *
   * @see https://nextjs.org/docs/api-reference/next.config.js/environment-variables
   */
  env: {
    PATH_PREFIX: pathPrefix,
    THEME_CONFIG: JSON.stringify(themeConfig),
  },

  /**
   * Next.js reports TypeScript errors by default. If you don't want to
   * leverage this behavior and prefer something else instead, like your
   * editor's integration, you may want to disable it.
   */
  // typescript: {
  //   ignoreDevErrors: true,
  // },

  /** Customises the build */
  webpack(config, { isServer }) {
    // EUI uses some libraries and features that don't work outside of a
    // browser by default. We need to configure the build so that these
    // features are either ignored or replaced with stub implementations.
    if (isServer) {
      config.externals = config.externals.map(fn => {
        return (context, request, callback) => {
          if (
            request.indexOf('@elastic/eui') > -1 ||
            request.indexOf('react-ace') > -1
          ) {
            return callback();
          }

          return fn(context, request, callback);
        };
      });

      // Replace `react-ace` with an empty module on the server.
      // https://webpack.js.org/loaders/null-loader/
      config.module.rules.push({
        test: /react-ace/,
        use: 'null-loader',
      });

      // Mock HTMLElement, window and localStorage on the server-side
      const definePluginId = config.plugins.findIndex(
        p => p.constructor.name === 'DefinePlugin'
      );

      config.plugins[definePluginId].definitions = {
        ...config.plugins[definePluginId].definitions,
        HTMLElement: function () {},

        window: function () {},

        // This definition allows localStorage to be called, but it stores
        // nothing.
        localStorage: {
          getItem: function () {
            return null;
          },

          setItem: function () {
            return;
          },
        },
      };
    }

    // Copy theme CSS files into `public`
    config.plugins.push(
      new CopyWebpackPlugin(themeConfig.copyConfig),

      // We don't want to load all highlight.js language - provide a mechanism to register just some
      new NormalModuleReplacementPlugin(
        /^highlight\.js$/,
        path.join(__dirname, `src/lib/highlight.ts`)
      )
    );

    return config;
  },

  /**
   * If you want to use dynamic routes with Static HTML Export, then you
   * have to manually define (or in this case, extend) the path map.
   * Otherwise, Next can't generate static pages for each path - everything
   * would work on the client so long as an explicit path was loaded first,
   * but a direct fetch on a dynamic route wouldn't work. If you don't use
   * dynamic routes, then you don't need this function at all.
   *
   * If you can't generate all the possible paths at build time, for
   * example by hard-coding or querying an API, you'll need some kind of
   * server-side redirect, which is outside the scope of this project.
   *
   * @see https://nextjs.org/docs/routing/introduction
   * @see https://nextjs.org/docs/advanced-features/static-html-export
   */
  exportPathMap: async function (defaultPathMap) {
    const dynamicPaths = [
      '/my-dashboard',
      '/workpad',
      '/my-logs',
      '/my-workpad',
      '/my-logs',
      '/apm',
      '/metrics',
      '/logs',
      '/uptime',
      '/maps',
      '/siem',
      '/canvas',
      '/discover',
      '/visualize',
      '/dashboard',
      '/machine-learning',
      '/custom-plugin',
      '/dev-tools',
      '/stack-monitoring',
      '/stack-management',
    ];

    const pathMap = {
      ...defaultPathMap,
    };

    for (const path of dynamicPaths) {
      pathMap[`/my-app${path}`] = { page: '/my-app/[slug]' };
    }

    return pathMap;
  },
};

/**
 * Enhances the Next config with the ability to:
 * - Analyze the webpack bundle
 * - Load images from JavaScript.
 * - Load SCSS files from JavaScript.
 */
module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(withImages(withSass(nextConfig)));

/**
 * Find all EUI themes and construct a theme configuration object.
 *
 * The `copyConfig` key is used to configure CopyWebpackPlugin, which
 * copies the default EUI themes into the `public` directory, injecting a
 * hash into the filename so that when EUI is updated, new copies of the
 * themes will be fetched.
 *
 * The `availableThemes` key is used in the app to includes the themes in
 * the app's `<head>` element, and for theme switching.
 *
 * @return {ThemeConfig}
 */
function buildThemeConfig() {
  const themeFiles = glob.sync(
    path.join(
      __dirname,
      'node_modules',
      '@elastic',
      'eui',
      'dist',
      'eui_theme_*.min.css'
    )
  );

  const themeConfig = {
    availableThemes: [],
    copyConfig: [],
  };

  for (const each of themeFiles) {
    const basename = path.basename(each, '.min.css');

    const themeId = basename.replace(/^eui_theme_/, '');

    const themeName =
      themeId[0].toUpperCase() + themeId.slice(1).replace(/_/g, ' ');

    const publicPath = `themes/${basename}.${hashFile(each)}.min.css`;
    const toPath = path.join(
      __dirname,
      `public/themes/${basename}.${hashFile(each)}.min.css`
    );

    themeConfig.availableThemes.push({
      id: themeId,
      name: themeName,
      publicPath,
    });

    themeConfig.copyConfig.push({
      from: each,
      to: toPath,
    });
  }

  return themeConfig;
}

/**
 * Given a file, calculate a hash and return the first portion. The number
 * of characters is truncated to match how Webpack generates hashes.
 *
 * @param {string} filePath the absolute path to the file to hash.
 * @return string
 */
function hashFile(filePath) {
  const hash = crypto.createHash(`sha256`);
  const fileData = fs.readFileSync(filePath);
  hash.update(fileData);
  const fullHash = hash.digest(`hex`);

  // Use a hash length that matches what Webpack does
  return fullHash.substr(0, 20);
}
