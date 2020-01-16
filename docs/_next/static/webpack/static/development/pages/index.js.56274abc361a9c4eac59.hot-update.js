webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/link.tsx":
/*!*********************************!*\
  !*** ./src/components/link.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
 * In order to support a site-wide path prefix (e.g. GitHub Pages), all usages of
 * Next's `<Link />` need to support the `as` prop. This is tedious, so wrap the
 * component and apply the `as` logic in one place.
 */

var NextJsLink = function NextJsLink(_ref) {
  var href = _ref.href,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["href"]);

  var path = typeof href === 'object' ? href.pathname : href;
  var asTarget = path.startsWith('/') ? assetPrefix + href : assetPrefix + '/' + href;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    href: href,
    as: asTarget
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NextJsLink);

/***/ })

})
//# sourceMappingURL=index.js.56274abc361a9c4eac59.hot-update.js.map