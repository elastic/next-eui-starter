import React, { FunctionComponent, useState } from 'react';
import { useRouter } from 'next/router';

import {
  EuiSideNav,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiShowFor,
  EuiPage,
  EuiPageSideBar,
  EuiPageBody,
} from '@elastic/eui';

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

  const sideNav = [...buildTopLinks(buildOnClick)];

  return (
    <>
      <EuiHeader className={styles.chrHeader}>
        <EuiHeaderSection grow={false}>
          {/*<EuiShowFor sizes={['xs', 's']}>*/}
          {/*  <EuiHeaderSectionItem border="right">*/}
          {/*    <MenuTrigger onClick={() => setOpen(true)} />*/}
          {/*  </EuiHeaderSectionItem>*/}
          {/*</EuiShowFor>*/}

          <EuiHeaderSectionItem border="right">
            <Logo onClick={() => router.push('/')} />
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
      <EuiPage restrictWidth={true} style={{ marginTop: 40 }}>
        <EuiPageSideBar>
          <EuiSideNav
            mobileTitle="Navigate within $APP_NAME"
            toggleOpenOnMobile={toggleOpenOnMobile}
            isOpenOnMobile={isSideNavOpenOnMobile}
            items={sideNav}
          />
        </EuiPageSideBar>

        <EuiPageBody component="div">
          <div className={styles.chrWrap}>{children}</div>
        </EuiPageBody>
      </EuiPage>
    </>
  );
};

export default Chrome;

/*
        <EuiCollapsibleNavGroup>
          <EuiListGroup listItems={buildTopLinks(buildOnClick)} />
        </EuiCollapsibleNavGroup>

        <EuiCollapsibleNavGroup>
          <EuiListGroup listItems={buildExploreLinks(buildOnClick)} />
        </EuiCollapsibleNavGroup>

        <EuiCollapsibleNavGroup>
          <EuiListGroup listItems={buildSolutionLinks(buildOnClick)} />
        </EuiCollapsibleNavGroup>

        <EuiCollapsibleNavGroup>
          <EuiListGroup listItems={buildAdminLinks(buildOnClick)} />
        </EuiCollapsibleNavGroup>
        */
