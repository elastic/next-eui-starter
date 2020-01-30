(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.tokens-tokenPackage-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenPackage.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/tokens/tokenPackage.js ***!
  \************************************************************************************/
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



var EuiIconTokenPackage = function EuiIconTokenPackage(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M8.049 3.785l3.852 1.006-4.049 1.103L4 4.791l3.951-1.006a.19.19 0 01.098 0zm.073 2.654l4.545-1.306v5.45l-.131.184-4.414 1.455V6.439zm-4.789 4.145V5.188L7.498 6.41v5.81l-4.034-1.453-.13-.183z"
  }));
};

var icon = EuiIconTokenPackage;
EuiIconTokenPackage.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconTokenPackage"
};

/***/ })

}]);
//# sourceMappingURL=icon.tokens-tokenPackage-js.js.map