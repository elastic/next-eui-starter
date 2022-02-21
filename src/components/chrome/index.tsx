import React, { FunctionComponent, useState } from 'react';

import {
  EuiPageTemplate,
  EuiProvider,
  EuiSideNav,
  htmlIdGenerator,
} from '@elastic/eui';

import { useProvider } from '../provider';

import CollapsibleNav from './collapsible_nav';

import { css } from '@emotion/react';

/**
 * Renders the UI that surrounds the page content.
 */
const Chrome: FunctionComponent = ({ children }) => {
  const { colorMode } = useProvider();

  return (
    <EuiProvider colorMode={colorMode}>
      <div
        css={css`
          padding-top: 96px; // top nav
          max-height: calc(100vh - 96px);
        `}>
        <CollapsibleNav />
        {children}
      </div>
    </EuiProvider>
  );
};

export default Chrome;
