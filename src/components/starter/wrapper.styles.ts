import { css } from '@emotion/react';

export const wrapperStyles = euiTheme => ({
  content: css`
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    margin: 0 auto;
    padding-right: ${euiTheme.size.base};
    padding-bottom: ${euiTheme.size.xxl};
    padding-left: ${euiTheme.size.base};
  `,
});
