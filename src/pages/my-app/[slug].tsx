import React, { FunctionComponent } from 'react';
import { EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';
import Link from 'next/link';
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
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <EuiTitle size="l">
        <h1>Placeholder page for {finalPathSegment}</h1>
      </EuiTitle>

      <EuiSpacer />

      <EuiText>
        <p>
          This is the catch-all component for routes without their own dedicated
          page.
        </p>
      </EuiText>

      <EuiSpacer />

      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </>
  );
};

export default CatchAll;
