import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="/themes/eui_theme_light.min.css"
            data-name="eui-theme"
            data-theme="light"
            key="light"
          />
          <link
            rel="stylesheet"
            href="/themes/eui_theme_dark.min.css"
            data-name="eui-theme"
            data-theme="dark"
            key="dark"
            // @ts-ignore this is valid but TS disagrees
            disabled
            aria-disabled
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
