import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import { EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';

const SecondPage: FunctionComponent = () => (
  <>
    <Head>
      <title>My App - Next.js EUI Starter</title>
    </Head>

    <EuiTitle size="l">
      <h1>My App&apos;s index page</h1>
    </EuiTitle>

    <EuiSpacer />

    <EuiText>
      <p>
        This is just an index page. Nothing special. Try clicking a link from
        the menu, which demonstrates dynamic routing.
      </p>
    </EuiText>
  </>
);

export default SecondPage;
