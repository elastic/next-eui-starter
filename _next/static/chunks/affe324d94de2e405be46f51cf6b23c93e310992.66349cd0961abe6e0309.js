(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),i=n("elyg"),l=n("nOHt"),c=n("vNVm"),u={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],l=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):l||a}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,g=e.replace,y=e.shallow,b=e.scroll,h=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=a.Children.only(v),O=m&&"object"===typeof m&&m.ref,x=(0,c.useIntersection)({rootMargin:"200px"}),j=r(x,2),w=j[0],T=j[1],C=a.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,a.useEffect)((function(){var e=T&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof h?h:n&&n.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(n,p,d,{locale:r})}),[d,p,T,h,t,n]);var E={ref:C,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:l}))}(e,n,p,d,g,y,b,h)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),s(n,p,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof h?h:n&&n.locale,A=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(d,N,n&&n.locales,n&&n.domainLocales);E.href=A||(0,i.addBasePath)((0,i.addLocale)(d,N,n&&n.defaultLocale))}return a.default.cloneElement(m,E)};t.default=f},pTXc:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a),l=n("TSYQ"),c=n.n(l),u=n("q1Cv");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={default:"euiTextColor--default",subdued:"euiTextColor--subdued",secondary:"euiTextColor--secondary",accent:"euiTextColor--accent",danger:"euiTextColor--danger",warning:"euiTextColor--warning",ghost:"euiTextColor--ghost"},d=(Object(u.a)(p),function(e){var t=e.children,n=e.color,r=void 0===n?"default":n,a=e.className,i=e.component,l=void 0===i?"span":i,u=f(e,["children","color","className","component"]),d=c()("euiTextColor",p[r],a),v=l;return o.a.createElement(v,s({className:d},u),t)});d.propTypes={className:i.a.string,"aria-label":i.a.string,"data-test-subj":i.a.string,color:i.a.oneOf(["default","subdued","secondary","accent","danger","warning","ghost"]),component:i.a.oneOf(["div","span"])}},q1Cv:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));function r(e){return Object.keys(e)}},vNVm:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,o.useRef)(),u=(0,o.useState)(!1),s=r(u,2),f=s[0],p=s[1],d=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),a=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var l=new Map},yk6V:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n("q1tI"),o=n.n(r),a=n("17x9"),i=n.n(a),l=n("TSYQ"),c=n.n(l),u=n("q1Cv"),s=n("pTXc");function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={left:"euiTextAlign--left",right:"euiTextAlign--right",center:"euiTextAlign--center"},v=(Object(u.a)(d),function(e){var t=e.children,n=e.className,r=e.textAlign,a=void 0===r?"left":r,i=p(e,["children","className","textAlign"]),l=c()("euiTextAlign",d[a],n);return o.a.createElement("div",f({className:l},i),t)});function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}v.propTypes={className:i.a.string,"aria-label":i.a.string,"data-test-subj":i.a.string,textAlign:i.a.oneOf(["left","right","center"])};var b={xs:"euiText--extraSmall",s:"euiText--small",m:"euiText--medium"},h=(Object(u.a)(b),function(e){var t,n=e.size,r=void 0===n?"m":n,a=e.color,i=e.grow,l=void 0===i||i,u=e.textAlign,f=e.children,p=e.className,d=y(e,["size","color","grow","textAlign","children","className"]),h=c()("euiText",b[r],p,{"euiText--constrainedWidth":!l});return a&&(t=o.a.createElement(s.a,{color:a,component:"div"},f)),u&&(t=o.a.createElement(v,{textAlign:u},t||f)),o.a.createElement("div",g({className:h},d),t||f)});h.propTypes={className:i.a.string,"aria-label":i.a.string,"data-test-subj":i.a.string,textAlign:i.a.oneOf(["left","right","center"]),size:i.a.oneOf(["xs","s","m"]),color:i.a.oneOf(["default","subdued","secondary","accent","danger","warning","ghost"]),grow:i.a.bool}}}]);