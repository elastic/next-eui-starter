/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-use-before-define,@typescript-eslint/no-empty-function,prefer-template */
const crypto = require('crypto');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const iniparser = require('iniparser');

const withBundleAnalyzer = require('@next/bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { IgnorePlugin } = require('webpack');

/**
 * If you are deploying your site under a directory other than `/` e.g.
 * GitHub pages, then you have to tell Next where the files will be served.
 * We don't need this during local development, because everything is
 * available under `/`.
 */
const usePathPrefix = process.env.PATH_PREFIX === 'true';

const pathPrefix = usePathPrefix ? derivePathPrefix() : '';

const themeConfig = buildThemeConfig();

const nextConfig = {
  compiler: {
    emotion: true,
  },
  /** Disable the `X-Powered-By: Next.js` response header. */
  poweredByHeader: false,

  /**
   * When set to something other than '', this field instructs Next to
   * expect all paths to have a specific directory prefix. This fact is
   * transparent to (almost all of) the rest of the application.
   */
  basePath: pathPrefix,

  images: {
    loader: 'custom',
  },

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
      config.externals = config.externals.map(eachExternal => {
        if (typeof eachExternal !== 'function') {
          return eachExternal;
        }

        return (context, callback) => {
          if (context.request.indexOf('@elastic/eui') > -1) {
            return callback();
          }

          return eachExternal(context, callback);
        };
      });

      // Mock HTMLElement on the server-side
      const definePluginId = config.plugins.findIndex(
        p => p.constructor.name === 'DefinePlugin'
      );

      config.plugins[definePluginId].definitions = {
        ...config.plugins[definePluginId].definitions,
        HTMLElement: function () {},
      };
    }

    // Copy theme CSS files into `public`
    config.plugins.push(
      new CopyWebpackPlugin({ patterns: themeConfig.copyConfig }),

      // Moment ships with a large number of locales. Exclude them, leaving
      // just the default English locale. If you need other locales, see:
      // https://create-react-app.dev/docs/troubleshooting/#momentjs-locales-are-missing
      new IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      })
    );

    config.resolve.mainFields = ['module', 'main'];

    return config;
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
})(nextConfig);

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
      `public`,
      `themes`,
      `${basename}.${hashFile(each)}.min.css`
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

/**
 * This starter assumes that if `usePathPrefix` is true, then you're serving the site
 * on GitHub pages. If that isn't the case, then you can simply replace the call to
 * this function with whatever is the correct path prefix.
 *
 * The implementation attempts to derive a path prefix for serving up a static site by
 * looking at the following in order.
 *
 *    1. The git config for "origin"
 *    2. The `name` field in `package.json`
 *
 * Really, the first should be sufficient and correct for a GitHub Pages site, because the
 * repository name is what will be used to serve the site.
 */
function derivePathPrefix() {
  const gitConfigPath = path.join(__dirname, '.git', 'config');

  if (fs.existsSync(gitConfigPath)) {
    const gitConfig = iniparser.parseSync(gitConfigPath);

    if (gitConfig['remote "origin"'] != null) {
      const originUrl = gitConfig['remote "origin"'].url;

      // eslint-disable-next-line prettier/prettier
      return '/' + originUrl.split('/').pop().replace(/\.git$/, '');
    }
  }

  const packageJsonPath = path.join(__dirname, 'package.json');

  if (fs.existsSync(packageJsonPath)) {
    const { name: packageName } = require(packageJsonPath);
    // Strip out any username / namespace part. This works even if there is
    // no username in the package name.
    return '/' + packageName.split('/').pop();
  }

  throw new Error(
    "Can't derive path prefix, as neither .git/config nor package.json exists"
  );
}
