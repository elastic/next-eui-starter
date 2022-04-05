import { css } from '@emotion/react';

export const textSkeletonStyles = euiTheme => ({
  title: css`
    display: flex;
    height: ${euiTheme.size.l};
    flex: 1;
    max-width: 50%;
    margin-bottom: ${euiTheme.size.base};
    background: ${euiTheme.colors.lightShade};
    border-radius: ${euiTheme.border.radius.small};
  `,
  text: css`
    display: flex;
    height: ${euiTheme.size.m};
    margin-bottom: ${euiTheme.size.base};
    background: ${euiTheme.colors.lightShade};
    border-radius: ${euiTheme.border.radius.small};

    &:last-of-type {
      max-width: 50%;
    }
  `,
});
