import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { EuiButton } from '@elastic/eui'

const MyComponent: FunctionComponent = () => (
  <Link href="page-2">
    <EuiButton>Go to page 2</EuiButton>
  </Link>
)

export default MyComponent
