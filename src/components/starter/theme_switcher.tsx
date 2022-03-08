import { FunctionComponent } from 'react';
import { EuiButtonIcon, EuiToolTip } from '@elastic/eui';
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

  return (
    <EuiToolTip content={`Change theme to ${lightOrDark}`} key="github">
      <EuiButtonIcon
        color="text"
        iconType={isDarkTheme ? 'sun' : 'moon'}
        onClick={() => handleChangeTheme(lightOrDark)}></EuiButtonIcon>
    </EuiToolTip>
  );
};

export default ThemeSwitcher;
