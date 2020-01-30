(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.grid-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/grid.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/grid.js ***!
  \*********************************************************************/
/*! exports provided: icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var EuiIconGrid = function EuiIconGrid(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1 5V1h4v4H1zm3-1V2H2v2h2zm2 1V1h4v4H6zm3-1V2H7v2h2zm2 1V1h4v4h-4zm1-1h2V2h-2v2zM1 10V6h4v4H1zm3-1V7H2v2h2zm2 1V6h4v4H6zm3-1V7H7v2h2zm2 1V6h4v4h-4zm3-1V7h-2v2h2zM1 15v-4h4v4H1zm1-1h2v-2H2v2zm4 1v-4h4v4H6zm1-1h2v-2H7v2zm4 1v-4h4v4h-4zm1-1h2v-2h-2v2z"
  }));
};

var icon = EuiIconGrid;
EuiIconGrid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconGrid"
};

/***/ })

}]);
//# sourceMappingURL=icon.grid-js.js.map