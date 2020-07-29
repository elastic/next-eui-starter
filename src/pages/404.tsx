import React, { Fragment, FunctionComponent } from 'react';
import { EuiButton, EuiEmptyPrompt } from '@elastic/eui';
import Link from 'next/link';

const NotFoundPage: FunctionComponent = () => (
  <EuiEmptyPrompt
    iconType="editorStrike"
    title={<h2>Ack! There&apos;s nothing here.</h2>}
    body={
      <Fragment>
        <p>You found a page that doesn&apos;t exist.</p>
      </Fragment>
    }
    actions={
      <Link href="/">
        <EuiButton color="primary" fill>
          Go Home
        </EuiButton>
      </Link>
    }
  />
);

export default NotFoundPage;
