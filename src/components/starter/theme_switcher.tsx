import { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import { EuiButtonIcon, EuiToolTip, useEuiTheme } from '@elastic/eui';
import { useTheme } from '../theme';

/**
 * Current theme is set in localStorage
 * so that it persists between visits.
 */
const ThemeSwitcher: FunctionComponent = () => {
  const { colorMode, setColorMode } = useTheme();
  const isDarkTheme = colorMode === 'dark';

  const handleChangeTheme = (newTheme: string) => {
    setColorMode(newTheme);
  };

  const lightOrDark = isDarkTheme ? 'light' : 'dark';
  const { euiTheme } = useEuiTheme();
  const IconRotator = isDarkTheme ? '-270deg' : '0deg';

  return (
    <EuiToolTip content={`Change theme to ${lightOrDark}`} key="theme-switch">
      <EuiButtonIcon
        css={css`
          rotate: ${IconRotator};
          transition: all ${euiTheme.animation.extraSlow}
            ${euiTheme.animation.bounce};
          transform-origin: 50% 50%;
        `}
        color="text"
        iconType={isDarkTheme ? 'sun' : 'moon'}
        aria-label="Change theme"
        onClick={() => handleChangeTheme(lightOrDark)}></EuiButtonIcon>
    </EuiToolTip>
  );
};

export default ThemeSwitcher;
