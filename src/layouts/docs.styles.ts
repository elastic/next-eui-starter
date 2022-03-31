import { css } from '@emotion/react';

export const docsLayout = () => ({
  wrapper: css`
    margin-top: 48px; // top nav
    min-height: calc(100vh - 48px);
    display: flex;
  `,
});
