import React, { FunctionComponent, useState } from 'react'
import { EuiButton } from '@elastic/eui'

import { setInitialTheme, setTheme } from '../../lib/theme'
import sun from './assets/sun.svg'
import moon from './assets/moon.svg'

const initialTheme = setInitialTheme()

const SwitchTheme: FunctionComponent = () => {
  const [theme, setThemeInState] = useState(initialTheme)

  const handleChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    setThemeInState(newTheme)
  }

  const themeIcon = theme === 'light' ? sun : moon

  return (
    <EuiButton size='s' iconType={themeIcon} onClick={handleChangeTheme}>
      Switch Theme
    </EuiButton>
  )
}

export default SwitchTheme
