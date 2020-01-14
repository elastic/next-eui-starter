webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/lib/theme.ts":
/*!**************************!*\
  !*** ./src/lib/theme.ts ***!
  \**************************/
/*! exports provided: setTheme, getTheme, setInitialTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInitialTheme", function() { return setInitialTheme; });
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");



/**
 * The functions here are for tracking and setting the current theme.
 * localStorage is used to store the currently preferred them, though
 * that doesn't work on the server, where we just use a default.
 */
var selector = "link[data-name=\"eui-theme\"]";
var defaultTheme = "light";

function getThemes() {
  // @ts-ignore: We need to target the compiler to es6 or higher for NodeListOf<Element> to be iterable
  return Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(document.querySelectorAll(selector));
}

function setTheme(name) {
  localStorage.setItem('theme', name);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(getThemes()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var theme = _step.value;
      theme.disabled = theme.dataset.theme !== name;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
function getTheme() {
  var storedTheme = localStorage.getItem('theme');
  return storedTheme || defaultTheme;
}
function setInitialTheme() {
  if (false) {}

  var theme = getTheme();
  setTheme(theme);
  return theme;
}

/***/ })

})
//# sourceMappingURL=_app.js.991b66b478de89b64b9e.hot-update.js.map