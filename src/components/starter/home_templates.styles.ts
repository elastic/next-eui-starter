import { css } from '@emotion/react';

export const homeTemplates = euiTheme => ({
  circle1: css`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
  `,
  circle2: css`
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
  `,
  panel: css`
    position: relative;
  `,
  panelInner: css`
    padding: ${euiTheme.size.xxxxl} 0;
  `,
});
