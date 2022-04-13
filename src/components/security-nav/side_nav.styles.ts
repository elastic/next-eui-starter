import { css } from '@emotion/react';

const primaryBackground = 'rgba(0, 119, 204, 0.1)';
export const sideNavStyles = euiTheme => ({
  sideNavItem: css`
    .euiListGroupItem__label {
      width: 100%;
    }
    &.euiListGroupItem-isClickable:hover {
      background-color: ${primaryBackground};
    }
    &.euiListGroupItem-isActive {
      background-color: ${primaryBackground};
    }
    &.euiListGroupItem-isActive.euiListGroupItem--primary {
      .euiListGroupItem__button {
        color: #0071c2;
      }
    }
  `,
  title: css`
    margin-bottom: ${euiTheme.size.m};
    padding: ${euiTheme.size.s};

    .euiAvatar {
      margin-right: ${euiTheme.size.base};
      box-shadow: 0 0.7px 1.4px rgb(0 0 0 / 7%), 0 1.9px 4px rgb(0 0 0 / 5%),
        0 4.5px 10px rgb(0 0 0 / 5%);
    }
  `,
});
