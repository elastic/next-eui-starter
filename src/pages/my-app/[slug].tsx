import React, { FunctionComponent } from 'react';
import { EuiSpacer, EuiText, EuiTitle } from '@elastic/eui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

/**
 * A simple page that is rendered for all "app" pages. The filename is
 * interpreted by Next and the "slug" part of the route name made available
 * through `router` (although we don't actually use the slug in this page).
 */
const CatchAll: FunctionComponent = () => {
  const router = useRouter();

  // `asPath` gives is the path as seen in the browser location bar. The `slug`
  // parameter from this file's name can be found under `router.query.slug`.
  const finalPathSegment = router.asPath.split('/').pop() ?? '';

  const title = `${finalPathSegment} - Next.js EUI Starter`;

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
