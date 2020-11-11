import React, { FunctionComponent } from 'react';
import Error, { ErrorProps } from 'next/error';

/**
 * An example of how to render a custom error page. Note that we have a
 * dedicated './404.tsx` page. See:
 *
 * https://nextjs.org/docs/advanced-features/custom-error-page
 */
const ErrorWrapper: FunctionComponent<ErrorProps> = ({ statusCode }) => {
  return <Error statusCode={statusCode} />;
};

// @ts-ignore getInitialProps doesn't exist on FunctionComponent
ErrorWrapper.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorWrapper;
