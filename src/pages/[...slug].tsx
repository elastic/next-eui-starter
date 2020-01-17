import React, { FunctionComponent } from 'react'
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
import Link from '../components/link'
import { useRouter } from 'next/router'

const CatchAll: FunctionComponent = () => {
  const router = useRouter()

  const slug: string[] = (router.query.slug || []) as string[]

  const path = slug.join('/')

  return (
    <EuiPage restrictWidth>
      <EuiPageBody>
        <EuiPageHeader>
          <EuiPageHeaderSection>
            <EuiTitle size='l'>
              <h1>Placeholder page for {path}</h1>
            </EuiTitle>
          </EuiPageHeaderSection>
          <EuiPageHeaderSection>Page abilities</EuiPageHeaderSection>
        </EuiPageHeader>
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Placeholder title for {path}</h2>
              </EuiTitle>
            </EuiPageContentHeaderSection>
            <EuiPageContentHeaderSection>Content abilities</EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            <p>This is the catch-all component for routes without their own dedicated page.</p>

            <EuiSpacer />

            <Link href='/'>
              <a>Go to Home</a>
            </Link>
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  )
}

export default CatchAll
