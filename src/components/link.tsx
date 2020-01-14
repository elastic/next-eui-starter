import React, { FunctionComponent } from 'react'
import NextJsLink, { LinkProps } from 'next/link'

const assetPrefix = process.env.ASSET_PREFIX

const Link: FunctionComponent<LinkProps> = ({ href, ...rest }) => (
  <NextJsLink href={href} as={`${assetPrefix}${href}`} {...rest} />
)

export default Link
