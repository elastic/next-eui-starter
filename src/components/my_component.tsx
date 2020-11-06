import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import NextEuiButton from './next_eui/button';

const MyComponent: FunctionComponent = () => (
  <Link href="/page-2">
    <NextEuiButton>Go to example page 2</NextEuiButton>
  </Link>
);

export default MyComponent;
