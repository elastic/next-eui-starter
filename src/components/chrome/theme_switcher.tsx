import { FunctionComponent, useState } from 'react';
import { EuiButtonIcon } from '@elastic/eui';

import { useProvider } from '../provider';

import { setTheme } from '../../lib/theme';

/**
 * Current theme is set in localStorage
 * so that it persists between visits.
 */
const ThemeSwitcher: FunctionComponent = () => {
  const { colorMode, setColorMode } = useProvider();
  const [isDarkTheme, setDarkTheme] = useState(colorMode === 'dark');

  const handleChangeTheme = (newTheme: string) => {
    setDarkTheme(!isDarkTheme);
    setColorMode(newTheme);
    setTheme(newTheme);
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
