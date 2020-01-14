webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/chrome/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/chrome/index.tsx ***!
  \*****************************************/
/*! exports provided: ThemeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/moon.svg */ "./src/components/chrome/assets/moon.svg");
/* harmony import */ var _assets_moon_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_moon_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/sun.svg */ "./src/components/chrome/assets/sun.svg");
/* harmony import */ var _assets_sun_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_sun_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @elastic/eui */ "./node_modules/@elastic/eui/es/index.js");
/* harmony import */ var _navigation_links_top_links__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../navigation_links/top_links */ "./src/components/navigation_links/top_links.ts");
/* harmony import */ var _navigation_links_solution_links__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../navigation_links/solution_links */ "./src/components/navigation_links/solution_links.ts");
/* harmony import */ var _navigation_links_explore_links__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../navigation_links/explore_links */ "./src/components/navigation_links/explore_links.ts");
/* harmony import */ var _navigation_links_admin_links__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../navigation_links/admin_links */ "./src/components/navigation_links/admin_links.ts");
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../lib/theme */ "./src/lib/theme.ts");







var _jsxFileName = "/Users/rory/src/elastic/next-eui-starter/src/components/chrome/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var ThemeContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext('light');

/**
 * Renders the UI that surrounds the page content.
 */
var Chrome =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Chrome, _Component);

  function Chrome() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Chrome);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Chrome)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "navDrawerRef", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      theme: Object(_lib_theme__WEBPACK_IMPORTED_MODULE_15__["setInitialTheme"])()
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChangeTheme", function () {
      _this.setState(function (prevState) {
        return {
          theme: prevState.theme === 'dark' ? 'light' : 'dark'
        };
      }, function () {
        return Object(_lib_theme__WEBPACK_IMPORTED_MODULE_15__["setTheme"])(_this.state.theme);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setNavDrawerRef", function (ref) {
      return _this.navDrawerRef = ref;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Chrome, [{
    key: "renderLogo",
    value: function renderLogo() {
      return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderLogo"], {
        iconType: "logoElastic",
        href: "/#/chrome/nav-drawer",
        "aria-label": "Goes to home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      });
    }
  }, {
    key: "renderMenuTrigger",
    value: function renderMenuTrigger() {
      var _this2 = this;

      return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderSectionItemButton"], {
        "aria-label": "Open nav",
        onClick: function onClick() {
          return _this2.navDrawerRef.toggleOpen();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiIcon"], {
        type: "apps",
        href: "#",
        size: "m",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    }
  }, {
    key: "renderBreadcrumbs",
    value: function renderBreadcrumbs() {
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
      return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderBreadcrumbs"], {
        breadcrumbs: breadcrumbs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var themeIcon = this.state.theme === 'light' ? _assets_sun_svg__WEBPACK_IMPORTED_MODULE_9___default.a : _assets_moon_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
      return __jsx(ThemeContext.Provider, {
        value: this.state.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeader"], {
        className: "chrHeader",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderSection"], {
        grow: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiShowFor"], {
        sizes: ['xs', 's'],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderSectionItem"], {
        border: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, this.renderMenuTrigger())), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderSectionItem"], {
        border: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.renderLogo()), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderSectionItem"], {
        border: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), this.renderBreadcrumbs(), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderSection"], {
        side: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHeaderSectionItem"] // @ts-ignore
      , {
        style: {
          display: 'flex',
          alignItems: 'center',
          width: '11rem',
          justifyContent: 'center',
          paddingLeft: '.5rem',
          paddingRight: '.5rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiButton"], {
        size: "s",
        iconType: themeIcon,
        onClick: function onClick() {
          return _this3.handleChangeTheme();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Switch Theme")))), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiNavDrawer"], {
        ref: this.setNavDrawerRef,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiNavDrawerGroup"], {
        listItems: _navigation_links_top_links__WEBPACK_IMPORTED_MODULE_11__["TopLinks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHorizontalRule"], {
        margin: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiNavDrawerGroup"], {
        listItems: _navigation_links_explore_links__WEBPACK_IMPORTED_MODULE_13__["ExploreLinks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHorizontalRule"], {
        margin: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiNavDrawerGroup"], {
        listItems: _navigation_links_solution_links__WEBPACK_IMPORTED_MODULE_12__["SolutionLinks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiHorizontalRule"], {
        margin: "none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }), __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_10__["EuiNavDrawerGroup"], {
        listItems: _navigation_links_admin_links__WEBPACK_IMPORTED_MODULE_14__["AdminLinks"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), __jsx("div", {
        className: "chrWrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return Chrome;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Chrome, "displayName", void 0);

/* harmony default export */ __webpack_exports__["default"] = (Chrome);

/***/ })

})
//# sourceMappingURL=_app.js.7e1747c770c406bb5802.hot-update.js.map