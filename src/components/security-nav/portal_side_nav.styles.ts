import { css } from '@emotion/react';

export const portalSideNavStyles = () => ({
  panel: css`
    position: fixed;
    top: 95px;
    left: 240px;
    height: 100%;
    max-width: 340px;
    width: 100%;
  `,
  portalNavItem: css`
    font-size: 1em;
  `,
});
