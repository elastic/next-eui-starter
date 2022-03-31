import { FunctionComponent } from 'react';
import { EuiButtonIcon } from '@elastic/eui';
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

  return (
    <EuiButtonIcon
      color="ghost"
      iconType={isDarkTheme ? 'sun' : 'moon'}
      aria-label="Change theme"
      onClick={() =>
        handleChangeTheme(isDarkTheme ? 'light' : 'dark')
      }></EuiButtonIcon>
  );
};

export default ThemeSwitcher;
