import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

const assetPrefix = process.env.PATH_PREFIX

interface ThemeConfig {
  publicPaths: Array<{
    id: string
    name: string
    publicPath: string
  }>
}

const themeConfig: ThemeConfig = JSON.parse(process.env.THEME_CONFIG!)

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {themeConfig.publicPaths.map(each => {
            const disabledProps =
              each.id === 'light'
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
