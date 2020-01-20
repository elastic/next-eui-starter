webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/lib/routing.ts":
/*!****************************!*\
  !*** ./src/lib/routing.ts ***!
  \****************************/
/*! exports provided: patchRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchRouter", function() { return patchRouter; });
/* harmony import */ var next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/next-server/lib/router/utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
/* harmony import */ var next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0__);

var pathPrefix = "";
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

function patchRouter() {
  // @ts-ignore
  if (!next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0__["_patched"]) {
    // @ts-ignore
    next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0__["_patched"] = true; // @ts-ignore

    next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0__["_getRouteMatcher"] = next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0__["getRouteMatcher"]; // @ts-ignore

    next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0__["getRouteMatcher"] = function getPatchedRouteMatcher(routeRegex) {
      // @ts-ignore
      var originalMatcher = next_dist_next_server_lib_router_utils_route_matcher__WEBPACK_IMPORTED_MODULE_0__["_getRouteMatcher"](routeRegex);

      return function patchedRouteMatcher(route) {
        if (route.indexOf(pathPrefix) === 0) {
          route = route.substr(pathPrefix.length);
        }

        return originalMatcher(route);
      };
    };
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.234ecf5ba74418e71b18.hot-update.js.map