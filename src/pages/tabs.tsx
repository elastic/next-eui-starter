import Head from 'next/head';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';

import {
  EuiSpacer,
  EuiText,
  EuiTitle,
  htmlIdGenerator,
  EuiSideNav,
} from '@elastic/eui';

const Tabs: FunctionComponent = () => {
  const [isSideNavOpenOnMobile, setisSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setisSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const sideNavList = [
    {
      name: 'Root item',
      id: htmlIdGenerator('basicExample')(),
      items: [
        {
          name: 'Item with onClick',
          id: htmlIdGenerator('basicExample')(),
          onClick: () => {},
        },
        {
          name: 'Item with href',
          id: htmlIdGenerator('basicExample')(),
          href: '/#/navigation/side-nav',
        },
        {
          name: 'Selected item',
          id: htmlIdGenerator('basicExample')(),
          onClick: () => {},
          isSelected: true,
        },
        {
          name: 'Disabled item',
          id: htmlIdGenerator('basicExample')(),
          disabled: true,
        },
      ],
    },
  ];

  const sideNav = (
    <EuiSideNav
      aria-label="Basic example"
      mobileTitle="Basic example"
      toggleOpenOnMobile={() => toggleOpenOnMobile()}
      isOpenOnMobile={isSideNavOpenOnMobile}
      style={{ width: 192 }}
      items={sideNavList}
    />
  );
  return (
    <>
      <Head>
        <title>Secondary page title</title>
      </Head>

      <EuiTitle size="l">
        <h1>Second Page title</h1>
      </EuiTitle>

      <EuiText>
        <p>
          This is just an example component that demonstrates adding pages to
          the app.
        </p>
      </EuiText>

      <EuiSpacer />

      <Link href="/">
        <a>Go to Home</a>
      </Link>

      <EuiSpacer />

      <Link href="/my-app/stack-monitoring">
        <a>Go to Stack Monitoring</a>
      </Link>
    </>
  );
};

export default Tabs;
