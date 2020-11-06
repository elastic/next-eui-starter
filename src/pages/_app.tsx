import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { EuiErrorBoundary } from '@elastic/eui';

import './app.scss';

import Chrome from '../components/chrome';

/**
 * Next.js uses the App component to initialize pages. You can override it
 * and control the page initialization. Here use use it to render the
 * `Chrome` component on each page, and apply an error boundary.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      {/* You can override this in other pages - see page-2.tsx for an example */}
      <title>Next.js EUI Starter</title>
    </Head>
    <Chrome>
      <EuiErrorBoundary>
        <Component {...pageProps} />
      </EuiErrorBoundary>
    </Chrome>
  </>
);

export default EuiApp;
