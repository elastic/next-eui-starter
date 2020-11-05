import Head from 'next/head';
import React, { FunctionComponent } from 'react';

import {
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from '@elastic/eui';

const SecondPage: FunctionComponent = () => (
  <>
    <Head>
      <title>My App - Next.js EUI Starter</title>
    </Head>

    <EuiPageHeader>
      <EuiPageHeaderSection>
        <EuiTitle size="l">
          <h1>My App&apos;s index page</h1>
        </EuiTitle>
      </EuiPageHeaderSection>
    </EuiPageHeader>
    <EuiPageContent>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle>
            <h2>Content title</h2>
          </EuiTitle>
        </EuiPageContentHeaderSection>
      </EuiPageContentHeader>
      <EuiPageContentBody>
        This is just an index page. Nothing special.
      </EuiPageContentBody>
    </EuiPageContent>
  </>
);

export default SecondPage;
