import { css } from '@emotion/react';

export const headerStyles = euiTheme => ({
  logo: css`
    display: inline-flex;
    flex-wrap: wrap;
    gap: ${euiTheme.size.m};
  `,
});
