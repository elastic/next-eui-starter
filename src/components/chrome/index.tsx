import React, { FunctionComponent, useRef } from 'react';
import { useRouter } from 'next/router';

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHorizontalRule,
  EuiIcon,
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiShowFor,
} from '@elastic/eui';

import { buildBrowserPath } from '../link';
import { buildTopLinks } from '../navigation_links/top_links';
import { buildSolutionLinks } from '../navigation_links/solution_links';
import { buildExploreLinks } from '../navigation_links/explore_links';
import { buildAdminLinks } from '../navigation_links/admin_links';

import { Breadcrumbs } from './breadcrumbs';
import SwitchTheme from './switch_theme';

import styles from './chrome.module.scss';

const Logo: FunctionComponent<{ onClick: () => void }> = ({ onClick }) => (
  <EuiHeaderLogo
    iconType="logoElastic"
    onClick={onClick}
    aria-label="Goes to home"
  />
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
  // This is an EuiNavDrawer, which isn't a TypeScript module yet
  const navDrawerRef = useRef<EuiNavDrawer>(null);

  const router = useRouter();

  // In this example app, all the side navigation links go to a placeholder
  // page. That's why the `push` call here points at the catch-all route - the
  // Next.js router doesn't infer the catch-all, we have to link to it
  // explicitly.
  const buildOnClick = (path: string) => () =>
    router.push('/my-app/[slug]', buildBrowserPath(path));

  return (
    <>
      <EuiHeader className={styles.chrHeader}>
        <EuiHeaderSection grow={false}>
          <EuiShowFor sizes={['xs', 's']}>
            <EuiHeaderSectionItem border="right">
              <MenuTrigger onClick={() => navDrawerRef.current!.toggleOpen()} />
            </EuiHeaderSectionItem>
          </EuiShowFor>

          <EuiHeaderSectionItem border="right">
            <Logo onClick={() => router.push('/', buildBrowserPath('/'))} />
          </EuiHeaderSectionItem>

          <EuiHeaderSectionItem border="right">
            {/* <HeaderSpacesMenu /> */}
          </EuiHeaderSectionItem>
        </EuiHeaderSection>

        <Breadcrumbs />

        <EuiHeaderSection side="right">
          <EuiHeaderSectionItem className={styles.chrHeaderSectionItem}>
            <SwitchTheme />
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
      <EuiNavDrawer ref={navDrawerRef}>
        <EuiNavDrawerGroup listItems={buildTopLinks(buildOnClick)} />
        <EuiHorizontalRule margin="none" />

        <EuiNavDrawerGroup listItems={buildExploreLinks(buildOnClick)} />
        <EuiHorizontalRule margin="none" />

        <EuiNavDrawerGroup listItems={buildSolutionLinks(buildOnClick)} />
        <EuiHorizontalRule margin="none" />

        <EuiNavDrawerGroup listItems={buildAdminLinks(buildOnClick)} />
      </EuiNavDrawer>
      <div className={styles.chrWrap}>{children}</div>
    </>
  );
};

export default Chrome;
