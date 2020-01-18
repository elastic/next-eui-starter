import React, { FunctionComponent, useRef } from 'react'

import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiHorizontalRule,
  EuiIcon,
  // @ts-ignore
  EuiNavDrawer,
  // @ts-ignore
  EuiNavDrawerGroup,
  EuiShowFor,
} from '@elastic/eui'

import { TopLinks } from '../navigation_links/top_links'
import { SolutionLinks } from '../navigation_links/solution_links'
import { ExploreLinks } from '../navigation_links/explore_links'
import { AdminLinks } from '../navigation_links/admin_links'

import './_index.scss'
import { Breadcrumbs } from './breadcrumbs'
import SwitchTheme from './SwitchTheme'

interface EuiNavDrawerStub {
  toggleOpen: () => void
}

const Logo: FunctionComponent = () => <EuiHeaderLogo iconType='logoElastic' href='/' aria-label='Goes to home' />

const MenuTrigger: FunctionComponent<{ onClick: () => void }> = ({ onClick }) => (
  <EuiHeaderSectionItemButton aria-label='Open nav' onClick={onClick}>
    <EuiIcon type='apps' href='#' size='m' />
  </EuiHeaderSectionItemButton>
)

/**
 * Renders the UI that surrounds the page content.
 */
const Chrome: FunctionComponent = ({ children }) => {
  // This is an EuiNavDrawer, which isn't a TypeScript module yet
  const navDrawerRef = useRef<EuiNavDrawerStub>(null)

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
            <SwitchTheme />
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
