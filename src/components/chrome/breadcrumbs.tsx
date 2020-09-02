import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { EuiBreadcrumb, EuiHeaderBreadcrumbs } from '@elastic/eui';

function segmentToName(segment: string): string {
  if (!segment) {
    return segment;
  }

  const withSpaces = segment.replace(/-/g, ' ');

  return withSpaces[0].toUpperCase() + withSpaces.slice(1);
}

/**
 * This component demonstrates a very simple use of the Next router to
 * render a breadcrumb. It's not particularly useful, but gives an idea.
 *
 * One deficiency of this component is that it you'll end up with different
 * content between server and client when rendering e.g a 404 page, because
 * the server sees the path as `/404`, whereas the client sees the path as
 * whatever was requested. There doesn't seem to be much I can do about
 * that at the moment.
 */
export const Breadcrumbs: FunctionComponent = () => {
  const router = useRouter();

  // We don't use router.pathname as it gives the path on disk, which could
  // be e.g. `/my-app/[slug]`.  Make sure to remove any URL fragment too.
  const pathname = router.asPath.replace(/#.*/, '');

  const pathSegments = pathname.split('/');

  const breadcrumbs: EuiBreadcrumb[] = [];

  const breadcrumbContext: string[] = [];

  for (const segment of pathSegments) {
    const breadcrumbPath = breadcrumbContext.concat(segment).join('/');

    breadcrumbs.push({
      text: segmentToName(segment),
      onClick: () => router.push(breadcrumbPath),
    });

    breadcrumbContext.push(segment);
  }

  return <EuiHeaderBreadcrumbs breadcrumbs={breadcrumbs} />;
};
