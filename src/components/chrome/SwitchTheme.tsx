import React, { FunctionComponent, useState } from 'react'
import { EuiButton, EuiContextMenuItem, EuiContextMenuPanel, EuiPopover } from '@elastic/eui'

import { setInitialTheme, setTheme, themeConfig } from '../../lib/theme'

const initialTheme = setInitialTheme()

const SwitchTheme: FunctionComponent = () => {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [theme, setThemeInState] = useState(initialTheme)

  const handleChangeTheme = (newTheme: string) => {
    setPopoverOpen(false)
    setTheme(newTheme)
    setThemeInState(newTheme)
  }

  const items = themeConfig.availableThemes.map(each => (
    <EuiContextMenuItem
      key={each.id}
      icon={each.id === theme ? 'check' : 'empty'}
      onClick={() => handleChangeTheme(each.id)}>
      {each.name}
    </EuiContextMenuItem>
  ))

  const button = (
    <EuiButton iconType='arrowDown' iconSide='right' onClick={() => setPopoverOpen(!isPopoverOpen)}>
      Switch theme
    </EuiButton>
  )

  return (
    <EuiPopover
      id='contextMenu'
      button={button}
      isOpen={isPopoverOpen}
      closePopover={() => setPopoverOpen(false)}
      panelPaddingSize='none'
      withTitle
      anchorPosition='downLeft'>
      <EuiContextMenuPanel items={items} />
    </EuiPopover>
  )
}

export default SwitchTheme
