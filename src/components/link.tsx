import React, { FunctionComponent } from 'react'
import Link, { LinkProps } from 'next/link'

const assetPrefix = process.env.PATH_PREFIX as string

/**
 * Builds the correct value to be used for the 'as' argument to the Next router.
 * @param href the route to potentially be prepended.
 */
export function buildBrowserPath(href: string): string {
  return href.startsWith('/') ? assetPrefix + href : assetPrefix + '/' + href
}

/**
 * In order to support a site-wide path prefix (e.g. GitHub Pages), all usages of
 * Next's `<Link />` need to support the `as` prop. This is tedious, so wrap the
 * component and apply the `as` logic in one place.
 */
const NextJsLink: FunctionComponent<LinkProps> = ({ href, ...rest }) => {
  const path = typeof href === 'object' ? href.pathname! : href

  return <Link href={href} as={buildBrowserPath(path)} {...rest} />
}

export default NextJsLink
