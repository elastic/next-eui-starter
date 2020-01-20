import * as routeMatcher from 'next/dist/next-server/lib/router/utils/route-matcher'

const pathPrefix = process.env.PATH_PREFIX as string

/**
 * This is a hack.
 *
 * Right now, Next doesn't work well when you try to combine an assetPrefix,
 * static site generation and dynamic routing. This may well be resolved
 * by introducing a `basePath` option, but for now, monkey-patch the router
 * to remove any `assetPrefix` (which is called a `pathPrefix` here) before
 * forwarding on a route matcher to the original router.
 *
 * If you're not using static site generation (SSG), or using SSG but without
 * dynamic routes, then you don't need this and can safely remove it.
 *
 * @see https://github.com/zeit/next.js/pull/9988
 */
export function patchRouter() {
  // @ts-ignore
  if (!routeMatcher._patched) {
    // @ts-ignore
    routeMatcher._patched = true
    // @ts-ignore
    routeMatcher._getRouteMatcher = routeMatcher.getRouteMatcher
    // @ts-ignore
    routeMatcher.getRouteMatcher = function getPatchedRouteMatcher(routeRegex) {
      // @ts-ignore
      const originalMatcher = routeMatcher._getRouteMatcher(routeRegex)

      return function patchedRouteMatcher(route: string) {
        if (route.indexOf(pathPrefix) === 0) {
          route = route.substr(pathPrefix.length)
        }

        return originalMatcher(route)
      }
    }
  }
}
