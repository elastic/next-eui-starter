import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { defaultTheme, themeConfig } from '../lib/theme'

const assetPrefix = process.env.PATH_PREFIX

/**
 * Customize the default `Document` implementation to inject the available EUI theme files.
 * Only the `light` theme is initially enabled.
 */
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {themeConfig.availableThemes.map(each => {
            const disabledProps =
              each.id === defaultTheme
                ? {}
                : {
                    disabled: true,
                    'aria-disabled': true,
                  }

            return (
              <link
                rel='stylesheet'
                href={`${assetPrefix}/${each.publicPath}`}
                data-name='eui-theme'
                data-theme-name={each.name}
                data-theme={each.id}
                key={each.id}
                {...disabledProps}
              />
            )
          })}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
