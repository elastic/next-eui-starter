import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';

import {
  EuiSideNav,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiPage,
  EuiPageSideBar,
  EuiPageBody,
  EuiErrorBoundary,
  EuiButtonIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPopover,
  EuiPopoverTitle,
} from '@elastic/eui';

import { buildTopLinks } from '../navigation_links/top_links';
import { buildSolutionLinks } from '../navigation_links/solution_links';
import { buildExploreLinks } from '../navigation_links/explore_links';
import { buildAdminLinks } from '../navigation_links/admin_links';

import { Breadcrumbs } from './breadcrumbs';
import SwitchTheme from './switch_theme';

import styles from './chrome.module.scss';
import Link from 'next/link';

const Logo: FunctionComponent<{ onClick: () => void }> = ({ onClick }) => (
  <EuiFlexGroup
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
  </EuiFlexGroup>
);

const MenuTrigger: FunctionComponent<{ onClick: () => void }> = ({
  onClick,
}) => (
  <EuiHeaderSectionItemButton aria-label="Open nav" onClick={onClick}>
    <EuiIcon type="apps" href="#" size="m" />
  </EuiHeaderSectionItemButton>
);

/**
 * Renders the UI that surrounds the page content.
 */
const Chrome: FunctionComponent = ({ children }) => {
  const router = useRouter();

  // In this example app, all the side navigation links go to a placeholder
  // page. That's why the `push` call here points at the catch-all route - the
  // Next.js router doesn't infer the catch-all, we have to link to it
  // explicitly.
  const buildOnClick = (path: string) => () =>
    router.push('/my-app/[slug]', path);

  const [isSideNavOpenOnMobile, setIsSideNavOpenOnMobile] = useState(false);

  const toggleOpenOnMobile = () => {
    setIsSideNavOpenOnMobile(!isSideNavOpenOnMobile);
  };

  const sideNav = [
    ...buildTopLinks(buildOnClick),
    ...buildSolutionLinks(buildOnClick),
    ...buildExploreLinks(buildOnClick),
    ...buildAdminLinks(buildOnClick),
  ];

  return (
    <EuiPage restrictWidth={1240} className={styles.guidePage}>
      <EuiPageBody>
        <EuiPageSideBar className={styles.guideSideNav}>
          <Logo onClick={() => router.push('/')} />
          <EuiErrorBoundary>
            <EuiSideNav
              className={styles.guideSideNav__content}
              mobileTitle="Navigate within $APP_NAME"
              toggleOpenOnMobile={toggleOpenOnMobile}
              isOpenOnMobile={isSideNavOpenOnMobile}
              items={sideNav}
            />
          </EuiErrorBoundary>
        </EuiPageSideBar>

        <div className={styles.guidePageContent}>{children}</div>
      </EuiPageBody>
    </EuiPage>
  );
};

export default Chrome;
