import React, { FunctionComponent } from 'react'
import Link from '../components/link'

import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiSpacer,
  EuiTitle,
} from '@elastic/eui'

const SecondPage: FunctionComponent = () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size='l'>
            <h1>Second Page title</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
        <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Content title</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
          <EuiPageContentHeaderSection>Content abilities</EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <Link href='/'>
            <a>Go to Home</a>
          </Link>

          <EuiSpacer />

          <Link href='/my-app/[slug]' as='/my-app/stack-monitoring'>
            <a>Go to Stack Monitoring</a>
          </Link>
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
)

export default SecondPage
