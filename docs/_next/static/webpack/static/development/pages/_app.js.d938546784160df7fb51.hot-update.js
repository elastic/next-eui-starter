webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/navigation_links/top_links.ts":
/*!******************************************************!*\
  !*** ./src/components/navigation_links/top_links.ts ***!
  \******************************************************/
/*! exports provided: TopLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopLinks", function() { return TopLinks; });
var faveExtraAction = {
  color: 'subdued',
  iconType: 'starEmpty',
  iconSize: 's',
  'aria-label': 'Add to favorites'
};
var TopLinks = [{
  label: 'Recently viewed',
  iconType: 'clock',
  flyoutMenu: {
    title: 'Recent items',
    listItems: [{
      label: 'My dashboard',
      href: '/#/chrome/nav-drawer',
      iconType: 'dashboardApp',
      extraAction: faveExtraAction
    }, {
      label: 'Workpad with title that wraps',
      href: '/#/chrome/nav-drawer',
      iconType: 'canvasApp',
      extraAction: faveExtraAction
    }, {
      label: 'My logs',
      href: '/#/chrome/nav-drawer',
      iconType: 'loggingApp',
      'aria-label': 'This is an alternate aria-label',
      extraAction: faveExtraAction
    }]
  }
}, {
  label: 'Favorites',
  iconType: 'starEmpty',
  flyoutMenu: {
    title: 'Favorite items',
    listItems: [{
      label: 'My workpad',
      href: '/#/chrome/nav-drawer',
      iconType: 'canvasApp',
      extraAction: {
        color: 'subdued',
        iconType: 'starFilled',
        iconSize: 's',
        'aria-label': 'Remove from favorites',
        alwaysShow: true
      }
    }, {
      label: 'My logs',
      href: '/#/chrome/nav-drawer',
      iconType: 'loggingApp',
      extraAction: {
        color: 'subdued',
        iconType: 'starFilled',
        iconSize: 's',
        'aria-label': 'Remove from favorites',
        alwaysShow: true
      }
    }]
  }
}];

/***/ })

})
//# sourceMappingURL=_app.js.d938546784160df7fb51.hot-update.js.map