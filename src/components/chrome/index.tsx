import React, { Component } from 'react'

import moon from './assets/moon.svg'
import sun from './assets/sun.svg'

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

export const ThemeContext = React.createContext('light')

interface State {
  theme: Theme
}

interface EuiNavDrawerStub {
  toggleOpen: () => void
}

/**
 * Renders the UI that surrounds the page content.
 */
class Chrome extends Component<{}, State> {
  static displayName: string

  // This is an EuiNavDrawer, which isn't a TypeScript module yet
  navDrawerRef: EuiNavDrawerStub | null = null

  state: State = {
    theme: setInitialTheme(),
  }

  handleChangeTheme: () => void = () => {
    this.setState(
      prevState => ({
        theme: prevState.theme === 'dark' ? 'light' : 'dark',
      }),
      () => setTheme(this.state.theme)
    )
  }

  renderLogo() {
    return <EuiHeaderLogo iconType="logoElastic" href="/#/chrome/nav-drawer" aria-label="Goes to home" />
  }

  renderMenuTrigger() {
    return (
      <EuiHeaderSectionItemButton aria-label="Open nav" onClick={() => this.navDrawerRef!.toggleOpen()}>
        <EuiIcon type="apps" href="#" size="m" />
      </EuiHeaderSectionItemButton>
    )
  }

  renderBreadcrumbs() {
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

  setNavDrawerRef = (ref: EuiNavDrawerStub) => (this.navDrawerRef = ref)

  render() {
    const themeIcon = this.state.theme === 'light' ? sun : moon

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <EuiHeader className="chrHeader">
          <EuiHeaderSection grow={false}>
            <EuiShowFor sizes={['xs', 's']}>
              <EuiHeaderSectionItem border="right">{this.renderMenuTrigger()}</EuiHeaderSectionItem>
            </EuiShowFor>
            <EuiHeaderSectionItem border="right">{this.renderLogo()}</EuiHeaderSectionItem>
            <EuiHeaderSectionItem border="right">{/* <HeaderSpacesMenu /> */}</EuiHeaderSectionItem>
          </EuiHeaderSection>

          {this.renderBreadcrumbs()}

          <EuiHeaderSection side="right">
            <EuiHeaderSectionItem
              // @ts-ignore
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '11rem',
                justifyContent: 'center',
                paddingLeft: '.5rem',
                paddingRight: '.5rem',
              }}>
              <EuiButton size="s" iconType={themeIcon} onClick={() => this.handleChangeTheme()}>
                Switch Theme
              </EuiButton>
            </EuiHeaderSectionItem>
          </EuiHeaderSection>
        </EuiHeader>
        <EuiNavDrawer ref={this.setNavDrawerRef}>
          <EuiNavDrawerGroup listItems={TopLinks} />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup listItems={ExploreLinks} />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup listItems={SolutionLinks} />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup listItems={AdminLinks} />
        </EuiNavDrawer>
        <div className="chrWrap">{this.props.children}</div>
      </ThemeContext.Provider>
    )
  }
}

export default Chrome
