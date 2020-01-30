(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon.vis_map_coordinate-js"],{

/***/ "./node_modules/@elastic/eui/es/components/icon/assets/vis_map_coordinate.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/eui/es/components/icon/assets/vis_map_coordinate.js ***!
  \***********************************************************************************/
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



var EuiIconVisMapCoordinate = function EuiIconVisMapCoordinate(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.5 15C5.77 15 2 9.97 2 6.595 2 3.507 4.46 1 7.5 1S13 3.507 13 6.595C13 9.97 9.23 15 7.5 15zm0-1c.286 0 1.48-1.044 2.459-2.35C11.219 9.969 12 8.153 12 6.596 12 4.055 9.983 2 7.5 2S3 4.055 3 6.595c0 1.557.78 3.373 2.041 5.056C6.02 12.956 7.214 14 7.5 14zm0-4.996a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  }));
};

var icon = EuiIconVisMapCoordinate;
EuiIconVisMapCoordinate.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EuiIconVisMapCoordinate"
};

/***/ })

}]);
//# sourceMappingURL=icon.vis_map_coordinate-js.js.map