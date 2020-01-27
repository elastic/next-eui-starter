import React, { FunctionComponent } from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui';
import Link from '../../components/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

/**
 * A simple page that is rendered for all "app" pages. The filename is
 * interpreted by Next and the "slug" part of the route name made available
 * through `router` (although we don't actually use it here).
 */
const CatchAll: FunctionComponent = () => {
  const router = useRouter();

  const finalPathSegment = router.asPath.split('/').pop() ?? '';

  let title = 'Next.js EUI Starter';
  if (finalPathSegment[0] !== '[') {
    title = `${finalPathSegment} - ${title}`;
  }

  return (
    <EuiPage restrictWidth>
      <Head>
        <title>{title}</title>
      </Head>
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size="l">
              <h1>Placeholder page for {finalPathSegment}</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
        </EuiPageHeader>

        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Placeholder title for {finalPathSegment}</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
            <EuiPageContentHeaderSection>
              Content abilities
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>

          <EuiPageContentBody>
            <p>
              This is the catch-all component for routes without their own
              dedicated page.
            </p>

            <EuiSpacer />

            <Link href="/">
              <a>Go to Home</a>
            </Link>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};

export default CatchAll;
