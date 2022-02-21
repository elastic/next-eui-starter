import React, { FunctionComponent, useState } from 'react';
import {
  EuiButtonIcon,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiPopover,
  EuiPopoverTitle,
} from '@elastic/eui';

import { useProvider } from '../provider';

import { setTheme, themeConfig } from '../../lib/theme';

/**
 * Renders a dropdown menu for selecting the current theme. The selection
 * is set in localStorage, so that it persists between visits.
 */
const ThemeSwitcher: FunctionComponent = () => {
  const { colorMode, setColorMode } = useProvider();
  const [isDarkTheme, setDarkTheme] = useState(false);

  const handleChangeTheme = (newTheme: string) => {
    setDarkTheme(!isDarkTheme);
    setColorMode(newTheme);
    setTheme(newTheme);
  };

  console.log(themeConfig.availableThemes);

  return (
    <EuiButtonIcon
      color="ghost"
      iconType={isDarkTheme ? 'moon' : 'cloudSunny'}
      aria-label={`Change theme to ${isDarkTheme ? 'dark' : 'light'}`}
      onClick={() =>
        handleChangeTheme(isDarkTheme ? 'dark' : 'light')
      }></EuiButtonIcon>
  );
};

export default ThemeSwitcher;
