import { FunctionComponent } from 'react';
import { css, keyframes } from '@emotion/react';
import {
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiToolTip,
  useEuiTheme,
} from '@elastic/eui';
import { useTheme } from '../theme';
import { themeSwitcherStyles } from './theme_switcher.styles';

/**
 * Current theme is set in localStorage
 * so that it persists between visits.
 */

const rotate = keyframes`
   0% {
     transform: rotate(0);
   }
   100% {
     transform: rotate(360deg);
   }
 `;

const ThemeSwitcher: FunctionComponent = () => {
  const { colorMode, setColorMode } = useTheme();
  const isDarkTheme = colorMode === 'dark';

  const handleChangeTheme = (newTheme: string) => {
    setColorMode(newTheme);
  };

  const lightOrDark = isDarkTheme ? 'light' : 'dark';
  const { euiTheme } = useEuiTheme();

  const styles = themeSwitcherStyles(euiTheme);

  return (
    <EuiToolTip content={`Change theme to ${lightOrDark}`} key="theme-switch">
      <EuiHeaderSectionItemButton
        aria-label="Change theme"
        onClick={() => handleChangeTheme(lightOrDark)}>
        <EuiIcon
          type={isDarkTheme ? 'sun' : 'moon'}
          aria-hidden="true"
          css={styles.animation}
        />
      </EuiHeaderSectionItemButton>
    </EuiToolTip>
  );
};
export default ThemeSwitcher;
