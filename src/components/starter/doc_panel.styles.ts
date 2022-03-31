import { css } from '@emotion/react';

export const docPanelStyles = euiTheme => ({
  panel: css`
    position: relative;
    min-height: 280px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    font-size: 20px;
  `,
  pattern1: css`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
  `,
  pattern2: css`
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
  `,
  content: css`
    max-width: 800px;
    padding-top: calc(${euiTheme.size.xxl} * 2);
    padding-bottom: calc(${euiTheme.size.xxl} * 2);
  `,
});
