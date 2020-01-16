import React, { FunctionComponent, useRef, useState } from 'react'

import {
  EuiButton,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiIcon,
  // @ts-ignore
  EuiNavDrawerGroup,
  // @ts-ignore
  EuiNavDrawer,
  EuiHorizontalRule,
  EuiShowFor,
  Breadcrumb,
} from '@elastic/eui'

import { TopLinks } from '../navigation_links/top_links'
import { SolutionLinks } from '../navigation_links/solution_links'
import { ExploreLinks } from '../navigation_links/explore_links'
import { AdminLinks } from '../navigation_links/admin_links'
import { setInitialTheme, setTheme, Theme } from '../../lib/theme'

import moon from './assets/moon.svg'
import sun from './assets/sun.svg'

import './_index.scss';

interface EuiNavDrawerStub {
  toggleOpen: () => void
}

const Logo: FunctionComponent = () => (
  <EuiHeaderLogo iconType='logoElastic' href='/#/chrome/nav-drawer' aria-label='Goes to home' />
)

const MenuTrigger: FunctionComponent<{ onClick: () => void }> = ({ onClick }) => (
  <EuiHeaderSectionItemButton aria-label='Open nav' onClick={onClick}>
    <EuiIcon type='apps' href='#' size='m' />
  </EuiHeaderSectionItemButton>
)

const Breadcrumbs: FunctionComponent = () => {
  const breadcrumbs: Breadcrumb[] = [
    {
      text: 'Home',
      href: '#',
      onClick: (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log('You clicked home')
      },
      'data-test-subj': 'breadcrumbsAnimals',
      className: 'customClass',
    },
  ]

  return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />
}

/**
 * Renders the UI that surrounds the page content.
 */
const initialTheme = setInitialTheme()

const Chrome: FunctionComponent = ({ children }) => {
  // This is an EuiNavDrawer, which isn't a TypeScript module yet
  const navDrawerRef = useRef<EuiNavDrawerStub>(null)

  const [theme, setThemeInState] = useState<Theme>(initialTheme)

  const handleChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
    setThemeInState(newTheme)
  }

  const themeIcon = theme === 'light' ? sun : moon

  return (
    <>
      <EuiHeader className='chrHeader'>
        <EuiHeaderSection grow={false}>
          <EuiShowFor sizes={['xs', 's']}>
            <EuiHeaderSectionItem border='right'>
              <MenuTrigger onClick={() => navDrawerRef.current!.toggleOpen()} />
            </EuiHeaderSectionItem>
          </EuiShowFor>

          <EuiHeaderSectionItem border='right'>
            <Logo />
          </EuiHeaderSectionItem>

          <EuiHeaderSectionItem border='right'>{/* <HeaderSpacesMenu /> */}</EuiHeaderSectionItem>
        </EuiHeaderSection>

        <Breadcrumbs />

        <EuiHeaderSection side='right'>
          <EuiHeaderSectionItem className='chrHeaderSectionItem'>
            <EuiButton size='s' iconType={themeIcon} onClick={handleChangeTheme}>
              Switch Theme
            </EuiButton>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>
      <EuiNavDrawer ref={navDrawerRef}>
        <EuiNavDrawerGroup listItems={TopLinks} />
        <EuiHorizontalRule margin='none' />

        <EuiNavDrawerGroup listItems={ExploreLinks} />
        <EuiHorizontalRule margin='none' />

        <EuiNavDrawerGroup listItems={SolutionLinks} />
        <EuiHorizontalRule margin='none' />

        <EuiNavDrawerGroup listItems={AdminLinks} />
      </EuiNavDrawer>
      <div className='chrWrap'>{children}</div>
    </>
  )
}

export default Chrome
