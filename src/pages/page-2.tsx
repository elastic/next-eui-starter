import Head from 'next/head';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';

import {
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';

const SecondPage: FunctionComponent = () => (
  <>
    <Head>
      <title>Secondary page title</title>
    </Head>
    <EuiPageHeader>
      <EuiPageHeaderSection>
        <EuiTitle size="l">
          <h1>Second Page title</h1>
        </EuiTitle>
      </EuiPageHeaderSection>
      <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
    </EuiPageHeader>
    <EuiPageContent>
      <EuiPageContentHeader>
        <EuiPageContentHeaderSection>
          <EuiTitle>
            <h2>Content title</h2>
          </EuiTitle>
        </EuiPageContentHeaderSection>
        <EuiPageContentHeaderSection>
          Content abilities
        </EuiPageContentHeaderSection>
      </EuiPageContentHeader>

      <EuiPageContentBody>
        <Link href="/">
          <a>Go to Home</a>
        </Link>

        <EuiSpacer />

        <Link href="/my-app/stack-monitoring">
          <a>Go to Stack Monitoring</a>
        </Link>
      </EuiPageContentBody>
    </EuiPageContent>
  </>
);

export default SecondPage;
