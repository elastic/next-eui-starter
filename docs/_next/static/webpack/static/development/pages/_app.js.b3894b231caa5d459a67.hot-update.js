webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/theme */ "./src/lib/theme.ts");
/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/moon.svg */ "./src/components/chrome/assets/moon.svg");
/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_moon_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sun.svg */ "./src/components/chrome/assets/sun.svg");
/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_sun_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/rory/src/elastic/next-eui-starter/src/components/chrome/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Logo = function Logo() {
  return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderLogo"], {
    iconType: "logoElastic",
    href: "/#/chrome/nav-drawer",
    "aria-label": "Goes to home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
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
      lineNumber: 39
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiIcon"], {
    type: "apps",
    href: "#",
    size: "m",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

var Breadcrumbs = function Breadcrumbs() {
  var breadcrumbs = [{
    text: 'Home',
    href: '#',
    onClick: function onClick(e) {
      e.preventDefault();
      console.log('You clicked home');
    },
    'data-test-subj': 'breadcrumbsAnimals',
    className: 'customClass'
  }];
  return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderBreadcrumbs"], {
    breadcrumbs: breadcrumbs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  });
};
/**
 * Renders the UI that surrounds the page content.
 */


var initialTheme = Object(_lib_theme__WEBPACK_IMPORTED_MODULE_6__["setInitialTheme"])();

var Chrome = function Chrome(_ref2) {
  var children = _ref2.children;
  // This is an EuiNavDrawer, which isn't a TypeScript module yet
  var navDrawerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialTheme),
      theme = _useState[0],
      setThemeInState = _useState[1];

  var handleChangeTheme = function handleChangeTheme() {
    var newTheme = theme === 'dark' ? 'light' : 'dark';
    Object(_lib_theme__WEBPACK_IMPORTED_MODULE_6__["setTheme"])(newTheme);
    setThemeInState(newTheme);
  };

  var themeIcon = theme === 'light' ? _assets_sun_svg__WEBPACK_IMPORTED_MODULE_8___default.a : _assets_moon_svg__WEBPACK_IMPORTED_MODULE_7___default.a;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeader"], {
    className: "chrHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSection"], {
    grow: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiShowFor"], {
    sizes: ['xs', 's'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
    border: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(MenuTrigger, {
    onClick: function onClick() {
      return navDrawerRef.current.toggleOpen();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
    border: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
    border: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })), __jsx(Breadcrumbs, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSection"], {
    side: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHeaderSectionItem"], {
    className: "chrHeaderSectionItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiButton"], {
    size: "s",
    iconType: themeIcon,
    onClick: handleChangeTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Switch Theme")))), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawer"], {
    ref: navDrawerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawerGroup"], {
    listItems: _navigation_links_top_links__WEBPACK_IMPORTED_MODULE_2__["TopLinks"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHorizontalRule"], {
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawerGroup"], {
    listItems: _navigation_links_explore_links__WEBPACK_IMPORTED_MODULE_4__["ExploreLinks"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHorizontalRule"], {
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawerGroup"], {
    listItems: _navigation_links_solution_links__WEBPACK_IMPORTED_MODULE_3__["SolutionLinks"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiHorizontalRule"], {
    margin: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_1__["EuiNavDrawerGroup"], {
    listItems: _navigation_links_admin_links__WEBPACK_IMPORTED_MODULE_5__["AdminLinks"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), __jsx("div", {
    className: "chrWrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Chrome);

/***/ })

})
//# sourceMappingURL=_app.js.b3894b231caa5d459a67.hot-update.js.map