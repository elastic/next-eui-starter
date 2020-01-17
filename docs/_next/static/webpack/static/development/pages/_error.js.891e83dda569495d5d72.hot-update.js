webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Frory%2Fsrc%2Felastic%2Fnext-eui-starter%2Fsrc%2Fpages%2F_error.tsx!./":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Frory%2Fsrc%2Felastic%2Fnext-eui-starter%2Fsrc%2Fpages%2F_error.tsx ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx")
      if(true) {
        module.hot.accept(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/_error.tsx */ "./src/pages/_error.tsx")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./src/pages/_error.tsx":
/*!******************************!*\
  !*** ./src/pages/_error.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/link */ "./src/components/link.tsx");
/* harmony import */ var _elastic_eui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/eui */ "./node_modules/@elastic/eui/es/index.js");
var _jsxFileName = "/Users/rory/src/elastic/next-eui-starter/src/pages/_error.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var NotFoundPage = function NotFoundPage() {
  return __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiEmptyPrompt"], {
    iconType: "editorStrike",
    title: __jsx("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Ack! There's nothing here."),
    body: __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "You found a page that doesn't exist.")),
    actions: __jsx(_components_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx(_elastic_eui__WEBPACK_IMPORTED_MODULE_3__["EuiButton"], {
      color: "primary",
      fill: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Go Home")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
};

var ErrorWrapper = function ErrorWrapper(_ref) {
  var statusCode = _ref.statusCode;

  if (statusCode === 404) {
    return __jsx(NotFoundPage, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  }

  return __jsx(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
    statusCode: statusCode,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  });
}; // @ts-ignore getInitialProps doesn't exist on FunctionComponent


ErrorWrapper.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (ErrorWrapper);

/***/ }),

/***/ 1:
/*!****************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Frory%2Fsrc%2Felastic%2Fnext-eui-starter%2Fsrc%2Fpages%2F_error.tsx ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Frory%2Fsrc%2Felastic%2Fnext-eui-starter%2Fsrc%2Fpages%2F_error.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Frory%2Fsrc%2Felastic%2Fnext-eui-starter%2Fsrc%2Fpages%2F_error.tsx!./");


/***/ })

})
//# sourceMappingURL=_error.js.891e83dda569495d5d72.hot-update.js.map