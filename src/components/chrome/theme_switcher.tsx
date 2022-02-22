import { FunctionComponent, useState } from 'react';
import { EuiButtonIcon } from '@elastic/eui';

import { useProvider } from '../provider';

import { setTheme } from '../../lib/theme';

/**
 * Renders a dropdown menu for selecting the current theme. The selection
 * is set in localStorage, so that it persists between visits.
 */
const ThemeSwitcher: FunctionComponent = () => {
  const { setColorMode } = useProvider();
  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleChangeTheme = (newTheme: string) => {
    setDarkTheme(!isDarkTheme);
    setColorMode(newTheme);
    setTheme(newTheme);
  };

  return (
    <EuiButtonIcon
      color="ghost"
      iconType={isDarkTheme ? 'moon' : 'sun'}
      aria-label={`Change theme to ${isDarkTheme ? 'dark' : 'light'}`}
      onClick={() =>
        handleChangeTheme(isDarkTheme ? 'dark' : 'light')
      }></EuiButtonIcon>
  );
};

export default ThemeSwitcher;
