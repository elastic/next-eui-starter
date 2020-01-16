import React, { FunctionComponent } from 'react'
import Link, { LinkProps } from 'next/link'

const assetPrefix = process.env.PATH_PREFIX as string

/**
 * In order to support a site-wide path prefix (e.g. GitHub Pages), all usages of
 * Next's `<Link />` need to support the `as` prop. This is tedious, so wrap the
 * component and apply the `as` logic in one place.
 */
const NextJsLink: FunctionComponent<LinkProps> = ({ href, ...rest }) => {
  const path = typeof href === 'object' ? href.pathname! : href
  const asTarget = path.startsWith('/') ? assetPrefix + href : assetPrefix + '/' + href

  return <Link href={href} as={asTarget} {...rest} />
}

export default NextJsLink
