import { css } from '@emotion/react';

export const kibanaLayoutStyles = () => ({
  wrapper: css`
    padding-top: 96px; // two top navs
    max-height: calc(100vh - 96px);
  `,
});
