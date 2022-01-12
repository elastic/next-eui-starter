import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';
import createCache from '@emotion/cache';

import {
  EuiSideNav,
  EuiHeaderLogo,
  EuiPage,
  EuiPageSideBar,
  EuiPageBody,
  EuiErrorBoundary,
  EuiFlexGroup,
  EuiFlexItem,
  EuiProvider,
} from '@elastic/eui';

import { useProvider } from '../provider';

import { buildTopLinks } from '../navigation_links/top_links';
import { buildSolutionLinks } from '../navigation_links/solution_links';
import { buildExploreLinks } from '../navigation_links/explore_links';
import { buildAdminLinks } from '../navigation_links/admin_links';

import ThemeSwitcher from './theme_switcher';

import styles from './chrome.module.scss';
import Link from 'next/link';

/**
 * This component render the logo, title and theme icon at the top of
 * the application navigation.
 * @param onClick the action to take when the user clicks the icon or name
 */
const AppLogo: FunctionComponent<{ onClick: () => void }> = ({ onClick }) => (
  <EuiFlexGroup
    responsive={false}
    alignItems="center"
    gutterSize="xs"
    className={styles.guideIdentity}>
    <EuiFlexItem grow={false}>
      <EuiHeaderLogo
        iconType="logoElastic"
        onClick={onClick}
        aria-label="Goes to home"
      />
    </EuiFlexItem>

    <EuiFlexItem>
      <Link href="/">
        <a>
          <strong>Elastic UI</strong>
        </a>
      </Link>
    </EuiFlexItem>

    <EuiFlexItem grow={false} style={{ marginRight: 8 }}>
      <ThemeSwitcher />
    </EuiFlexItem>
  </EuiFlexGroup>
);

/**
 * Renders the UI that surrounds the page content.
 */
const Chrome: FunctionComponent = ({ children }) => {
  const router = useRouter();
  const { colorMode } = useProvider();

  /**
   * This `@emotion/cache` instance is used to insert the global styles
   * into the correct location in `<head>`. Otherwise they would be
   * inserted after the static CSS files, resulting in style clashes.
   * Only necessary until EUI has converted all components to CSS-in-JS:
   * https://github.com/elastic/eui/issues/3912
   */
  const emotionCache = createCache({
    key: 'eui-styles',
    container:
      typeof document !== 'undefined'
        ? document.querySelector('meta[name="eui-styles-global"]')
        : null,
  });

  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  // In this example app, all the side navigation links go to a placeholder
  // page. That's why the `push` call here points at the catch-all route - the
  // Next.js router doesn't infer the catch-all, we have to link to it
  // explicitly.
  const buildOnClick = (path: string) => () => {
    setIsSideNavOpenOnMobile(false);
    return router.push('/my-app/[slug]', path);
  };

  const sideNav = [
    ...buildTopLinks(buildOnClick),
    ...buildSolutionLinks(buildOnClick),
    ...buildExploreLinks(buildOnClick),
    ...buildAdminLinks(buildOnClick),
  ];

  return (
    <EuiProvider colorMode={colorMode} cache={emotionCache}>
      <EuiPage restrictWidth={1240} className={styles.guidePage}>
        <EuiPageBody>
          <EuiPageSideBar className={styles.guideSideNav}>
            <AppLogo
              onClick={() => {
                setIsSideNavOpenOnMobile(false);
                router.push('/');
              }}
            />
            <EuiErrorBoundary>
              <EuiSideNav
                className={styles.guideSideNav__content}
                mobileTitle="Navigate"
                toggleOpenOnMobile={toggleOpenOnMobile}
                isOpenOnMobile={isSideNavOpenOnMobile}
                items={sideNav}
              />
            </EuiErrorBoundary>
          </EuiPageSideBar>

          <div className={styles.guidePageContent}>{children}</div>
        </EuiPageBody>
      </EuiPage>
    </EuiProvider>
  );
};

export default Chrome;
