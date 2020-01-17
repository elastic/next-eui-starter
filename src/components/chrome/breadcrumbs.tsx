import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb, EuiHeaderBreadcrumbs } from '@elastic/eui'

/**
 * This component demonstrates a very simple use of the Next router to
 * render a breadcrumb. It's not particularly useful, but gives an idea.
 */
export const Breadcrumbs: FunctionComponent = () => {
  const router = useRouter()

  const pathToBreadcrumb: { [path: string]: string } = {
    '/': 'Home',
    '/page-2': 'Page 2',
  }

  const pathname = router.pathname

  if (!pathToBreadcrumb.hasOwnProperty(pathname)) {
    return null
  }

  const breadcrumbs: Breadcrumb[] = [
    {
      text: pathToBreadcrumb[pathname],
      href: pathname,
      onClick: (e: React.MouseEvent) => {
        e.preventDefault()

        const assetPrefix = process.env.PATH_PREFIX as string
        const asTarget = pathname.startsWith('/') ? assetPrefix + pathname : assetPrefix + '/' + pathname

        router.push(router.pathname, asTarget)
      },
      'data-test-subj': 'breadcrumbsAnimals',
      className: 'customClass',
    },
  ]

  return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />
}
