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
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handleChangeTheme = (newTheme: string) => {
    setPopoverOpen(false);
    setColorMode(newTheme);
    setTheme(newTheme);
  };

  const items = themeConfig.availableThemes.map(each => (
    <EuiContextMenuItem
      key={each.id}
      icon={each.id === colorMode ? 'check' : 'empty'}
      onClick={() => handleChangeTheme(each.id)}>
      {each.name}
    </EuiContextMenuItem>
  ));

  const button = (
    <EuiButtonIcon
      iconType="gear"
      aria-label="Open theme menu"
      onClick={() => setPopoverOpen(!isPopoverOpen)}>
      Switch theme
    </EuiButtonIcon>
  );

  return (
    <EuiPopover
      id="contextMenu"
      button={button}
      isOpen={isPopoverOpen}
      closePopover={() => setPopoverOpen(false)}
      panelPaddingSize="none"
      anchorPosition="downLeft">
      <EuiPopoverTitle paddingSize="s">Theme options</EuiPopoverTitle>
      <EuiContextMenuPanel items={items} />
    </EuiPopover>
  );
};

export default ThemeSwitcher;
