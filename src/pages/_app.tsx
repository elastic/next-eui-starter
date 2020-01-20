import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FunctionComponent } from 'react'
import { EuiErrorBoundary } from '@elastic/eui'

import Chrome from '../components/chrome'
import { patchRouter } from '../lib/routing'

patchRouter()

const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <EuiErrorBoundary>
      <Head>
        <title>Next.js EUI Starter</title>
      </Head>
      <Chrome>
        <EuiErrorBoundary>
          <Component {...pageProps} />
        </EuiErrorBoundary>
      </Chrome>
    </EuiErrorBoundary>
  </>
)

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// EuiApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default EuiApp
