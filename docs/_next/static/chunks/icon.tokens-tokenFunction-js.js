(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.tokens-tokenFunction-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenFunction.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenFunction.js ***!
  \*************************************************************************************/
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



var EuiIconTokenFunction = function EuiIconTokenFunction(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M11.266 4.15V5.63a2.41 2.41 0 00-.859-.145c-.692 0-1.065.346-1.177 1.043l-.11.625h1.828v1.44H8.921l-.204 1.115C8.455 11.325 7.517 12 5.9 12c-.469 0-.882-.061-1.166-.167v-1.495c.273.117.591.178.903.178.659 0 1.01-.29 1.127-1.015l.157-.91H5.247V7.152h1.837l.188-.842C7.534 4.714 8.432 4 10.19 4c.39 0 .853.067 1.076.15z"
  }));
};

var icon = EuiIconTokenFunction;
EuiIconTokenFunction.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenFunction"
};

/***/ })

}]);
//# sourceMappingURL=icon.tokens-tokenFunction-js.js.map