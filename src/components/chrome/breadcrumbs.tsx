import React, { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import { Breadcrumb, EuiHeaderBreadcrumbs } from '@elastic/eui'

const assetPrefix = process.env.PATH_PREFIX as string

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

  // router.pathname gives the path on disk, which could be e.g. `/[...slug]`
  // We also don't want URL fragments to confuse the path -> title lookup.
  const pathname = router.asPath.replace(/#.*/, '')

  const breadcrumbs: Breadcrumb[] = [
    {
      text: pathToBreadcrumb[pathname] || pathname.replace(/^\//, ''),
      href: pathname.replace(new RegExp('^' + assetPrefix + '/?'), ''),
      onClick: (e: React.MouseEvent) => {
        e.preventDefault()

        router.push(router.pathname)
      },
      'data-test-subj': 'breadcrumbsAnimals',
      className: 'customClass',
    },
  ]

  return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />
}
