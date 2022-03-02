import { FunctionComponent } from 'react';
import Link from 'next/link';
import NextEuiButton from './next_eui/button';

/**
 * This is just an example of creating a component in one file, and using it
 * in another. This component also demonstrates routing using a button.
 */
const MyComponent: FunctionComponent = () => (
  <Link href="/page-2" passHref>
    <NextEuiButton>Go to example page 2</NextEuiButton>
  </Link>
);

export default MyComponent;
