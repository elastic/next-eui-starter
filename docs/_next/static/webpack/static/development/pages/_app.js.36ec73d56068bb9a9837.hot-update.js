webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/chrome/breadcrumbs.tsx":
/*!***********************************************!*\
  !*** ./src/components/chrome/breadcrumbs.tsx ***!
  \***********************************************/
/*! exports provided: Breadcrumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumbs", function() { return Breadcrumbs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "./node_modules/@elastic/eui/es/index.js");
var _jsxFileName = "/Users/rory/src/elastic/next-eui-starter/src/components/chrome/breadcrumbs.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var assetPrefix = "";
/**
 * This component demonstrates a very simple use of the Next router to
 * render a breadcrumb. It's not particularly useful, but gives an idea.
 */

var Breadcrumbs = function Breadcrumbs() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var pathToBreadcrumb = {
    '/': 'Home',
    '/page-2': 'Page 2'
  }; // router.pathname gives the path on disk, which could be e.g. `/[...slug]`
  // We also don't want URL fragments to confuse the path -> title lookup.

  var pathname = router.asPath.replace(/#.*/, '');
  var breadcrumbs = [{
    text: pathToBreadcrumb[pathname] || pathname.replace(/^\//, ''),
    href: pathname.replace(new RegExp('^' + assetPrefix + '/?'), ''),
    onClick: function onClick(e) {
      e.preventDefault();
      router.push(router.pathname);
    },
    'data-test-subj': 'breadcrumbsAnimals',
    className: 'customClass'
  }];
  return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiHeaderBreadcrumbs"], {
    breadcrumbs: breadcrumbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  });
};

/***/ }),

/***/ "./src/components/chrome/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/chrome/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/eui */ "./node_modules/@elastic/eui/es/index.js");
/* harmony import */ var _navigation_links_top_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation_links/top_links */ "./src/components/navigation_links/top_links.ts");
/* harmony import */ var _navigation_links_solution_links__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navigation_links/solution_links */ "./src/components/navigation_links/solution_links.ts");
/* harmony import */ var _navigation_links_explore_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navigation_links/explore_links */ "./src/components/navigation_links/explore_links.ts");
/* harmony import */ var _navigation_links_admin_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navigation_links/admin_links */ "./src/components/navigation_links/admin_links.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_index.scss */ "./src/components/chrome/_index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumbs */ "./src/components/chrome/breadcrumbs.tsx");
/* harmony import */ var _SwitchTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SwitchTheme */ "./src/components/chrome/SwitchTheme.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../link */ "./src/components/link.tsx");
var _jsxFileName = "/Users/rory/src/elastic/next-eui-starter/src/components/chrome/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Logo = function Logo() {
  return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderLogo"], {
    iconType: "logoElastic",
    href: "/",
    "aria-label": "Goes to home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  });
};

var MenuTrigger = function MenuTrigger(_ref) {
  var onClick = _ref.onClick;
  return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItemButton"], {
    "aria-label": "Open nav",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    type: "apps",
    href: "#",
    size: "m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
};
/**
 * Renders the UI that surrounds the page content.
 */


var Chrome = function Chrome(_ref2) {
  var children = _ref2.children;
  // This is an EuiNavDrawer, which isn't a TypeScript module yet
  var navDrawerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_9__["useRouter"])();

  var buildOnClick = function buildOnClick(path) {
    return function () {
      return router.push(Object(_link__WEBPACK_IMPORTED_MODULE_10__["buildBrowserPath"])(path));
    };
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeader"], {
    className: "chrHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSection"], {
    grow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiShowFor"], {
    sizes: ['xs', 's'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
    border: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(MenuTrigger, {
    onClick: function onClick() {
      return navDrawerRef.current.toggleOpen();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }))), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
    border: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
    border: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx(_breadcrumbs__WEBPACK_IMPORTED_MODULE_7__["Breadcrumbs"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSection"], {
    side: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
    className: "chrHeaderSectionItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_SwitchTheme__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawer"], {
    ref: navDrawerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawerGroup"], {
    listItems: Object(_navigation_links_top_links__WEBPACK_IMPORTED_MODULE_2__["buildTopLinks"])(buildOnClick),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHorizontalRule"], {
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawerGroup"], {
    listItems: Object(_navigation_links_explore_links__WEBPACK_IMPORTED_MODULE_4__["buildExploreLinks"])(buildOnClick),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHorizontalRule"], {
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawerGroup"], {
    listItems: Object(_navigation_links_solution_links__WEBPACK_IMPORTED_MODULE_3__["buildSolutionLinks"])(buildOnClick),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHorizontalRule"], {
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawerGroup"], {
    listItems: Object(_navigation_links_admin_links__WEBPACK_IMPORTED_MODULE_5__["buildAdminLinks"])(buildOnClick),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx("div", {
    className: "chrWrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Chrome);

/***/ }),

/***/ "./src/components/link.tsx":
/*!*********************************!*\
  !*** ./src/components/link.tsx ***!
  \*********************************/
/*! exports provided: buildBrowserPath, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildBrowserPath", function() { return buildBrowserPath; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/rory/src/elastic/next-eui-starter/src/components/link.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var assetPrefix = "";
/**
 * Builds the correct value to be used for the 'as' argument to the Next router.
 * @param href the route to potentially be prepended.
 */

function buildBrowserPath(href) {
  return href.startsWith('/') ? assetPrefix + href : assetPrefix + '/' + href;
}
/**
 * In order to support a site-wide path prefix (e.g. GitHub Pages), all usages of
 * Next's `<Link />` need to support the `as` prop. This is tedious, so wrap the
 * component and apply the `as` logic in one place.
 */

var NextJsLink = function NextJsLink(_ref) {
  var href = _ref.href,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["href"]);

  var path = typeof href === 'object' ? href.pathname : href;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: href,
    as: buildBrowserPath(path)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NextJsLink);

/***/ })

})
//# sourceMappingURL=_app.js.36ec73d56068bb9a9837.hot-update.js.map