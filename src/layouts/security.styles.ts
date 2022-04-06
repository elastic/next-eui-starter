import { css } from '@emotion/react';

export const SecurityLayoutStyles = () => ({
  mainWrapper: css`
    padding-top: 96px; // two top navs
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  contentWrapper: css`
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    z-index: 0;
    position: relative;

    .euiPageSideBar {
      background: linear-gradient(
          160deg,
          rgba(211, 218, 230, 0.3) 0,
          rgba(211, 218, 230, 0.3) 32px,
          rgba(255, 0, 0, 0) 0
        ),
        linear-gradient(
          175deg,
          rgba(211, 218, 230, 0.3) 0,
          rgba(211, 218, 230, 0.3) 16px,
          rgba(255, 0, 0, 0) 0
        );
    }
  `,
});
