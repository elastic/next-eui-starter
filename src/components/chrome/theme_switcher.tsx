import React, { FunctionComponent, useState } from 'react';
import {
  EuiButtonIcon,
  EuiContextMenuItem,
  EuiContextMenuPanel,
  EuiPopover,
  EuiPopoverTitle,
} from '@elastic/eui';

import { setInitialTheme, setTheme, themeConfig } from '../../lib/theme';

const initialTheme = setInitialTheme();

/**
 * Renders a dropdown menu for selecting the current theme. The selection
 * is set in localStorage, so that it persists between visits.
 */
const ThemeSwitcher: FunctionComponent = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [theme, setThemeInState] = useState(initialTheme);

  const handleChangeTheme = (newTheme: string) => {
    setPopoverOpen(false);
    setTheme(newTheme);
    setThemeInState(newTheme);
  };

  const items = themeConfig.availableThemes.map(each => (
    <EuiContextMenuItem
      key={each.id}
      icon={each.id === theme ? 'check' : 'empty'}
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
      <EuiPopoverTitle>Theme options</EuiPopoverTitle>
      <EuiContextMenuPanel items={items} />
    </EuiPopover>
  );
};

export default ThemeSwitcher;
