import Head from 'next/head';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import { EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';

const SecondPage: FunctionComponent = () => (
  <>
    <Head>
      <title>Secondary page title</title>
    </Head>

    <EuiTitle size="l">
      <h1>Second Page title</h1>
    </EuiTitle>

    <EuiText>
      <p>
        This is just an example component that demonstrates adding pages to the
        app.
      </p>
    </EuiText>

    <EuiSpacer />

    <Link href="/">
      <a>Go to Home</a>
    </Link>

    <EuiSpacer />

    <Link href="/my-app/stack-monitoring">
      <a>Go to Stack Monitoring</a>
    </Link>
  </>
);

export default SecondPage;
