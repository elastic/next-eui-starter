webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/next_eui/button.tsx":
/*!********************************************!*\
  !*** ./src/components/next_eui/button.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/eui */ "./node_modules/@elastic/eui/es/index.js");

var _jsxFileName = "/Users/rory/src/elastic/next-eui-starter/src/components/next_eui/button.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/**
 * Next's `<Link/>` component passes a ref to its children, which triggers a warning
 * on EUI buttons. Wrap the button component to pass on the ref, and silence the warning.
 */

var NextEuiButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function (props, ref) {
  return (// @ts-ignore forwardRef's `ref` and the `buttonRef` definitions disagree
    __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_2__["EuiButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      buttonRef: ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), props.children)
  );
});
NextEuiButton.displayName = "NextEuiButton(forwardRef(EuiButton))";
/* harmony default export */ __webpack_exports__["default"] = (NextEuiButton);

/***/ })

})
//# sourceMappingURL=index.js.f1fbc8f023522400ae85.hot-update.js.map