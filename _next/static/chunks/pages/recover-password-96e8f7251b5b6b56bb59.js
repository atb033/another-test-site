(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{1288:function(e,r,t){"use strict";var n=t(5893),a=(t(7294),t(1664));r.Z=function(e){var r=e.pageTitle,t=e.homePageUrl,o=e.homePageText,s=e.activePageText,c=e.imgClass;return(0,n.jsx)("div",{className:"page-title-area ".concat(c),children:(0,n.jsx)("div",{className:"d-table",children:(0,n.jsx)("div",{className:"d-table-cell",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"page-title-content",children:[(0,n.jsx)("h2",{children:r}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a.default,{href:t,children:(0,n.jsx)("a",{children:o})})}),(0,n.jsx)("li",{className:"active",children:s})]})]})})})})})}},6071:function(e,r,t){"use strict";var n=t(3848),a=t(9448);r.default=void 0;var o=a(t(7294)),s=t(1689),c=t(2441),l=t(5749),i={};function u(e,r,t,n){if(e&&(0,s.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[r+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var r=!1!==e.prefetch,t=(0,c.useRouter)(),a=t&&t.pathname||"/",f=o.default.useMemo((function(){var r=(0,s.resolveHref)(a,e.href,!0),t=n(r,2),o=t[0],c=t[1];return{href:o,as:e.as?(0,s.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,h=f.as,v=e.children,m=e.replace,p=e.shallow,x=e.scroll,j=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=o.Children.only(v),g=y&&"object"===typeof y&&y.ref,b=(0,l.useIntersection)({rootMargin:"200px"}),w=n(b,2),N=w[0],E=w[1],O=o.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,o.useEffect)((function(){var e=E&&r&&(0,s.isLocalURL)(d),n="undefined"!==typeof j?j:t&&t.locale,a=i[d+"%"+h+(n?"%"+n:"")];e&&!a&&u(t,d,h,{locale:n})}),[h,d,E,j,r,t]);var P={ref:O,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),r[a?"replace":"push"](t,n,{shallow:o,locale:l,scroll:c}))}(e,t,d,h,m,p,x,j)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(t,d,h,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var _="undefined"!==typeof j?j:t&&t.locale,C=t&&t.isLocaleDomain&&(0,s.getDomainLocale)(h,_,t&&t.locales,t&&t.domainLocales);P.href=C||(0,s.addBasePath)((0,s.addLocale)(h,_,t&&t.defaultLocale))}return o.default.cloneElement(y,P)};r.default=f},5749:function(e,r,t){"use strict";var n=t(3848);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!s,l=(0,a.useRef)(),i=(0,a.useState)(!1),u=n(i,2),f=u[0],d=u[1],h=(0,a.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),t||f||e&&e.tagName&&(l.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=c.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return c.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,o=n.observer,s=n.elements;return s.set(e,r),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[h,f]};var a=t(7294),o=t(8391),s="undefined"!==typeof IntersectionObserver;var c=new Map},6681:function(e,r,t){"use strict";t.r(r);var n=t(5893),a=(t(7294),t(8805)),o=t(1288),s=t(4261),c=t(6918),l=t(1664);r.default=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{}),(0,n.jsx)(o.Z,{pageTitle:"Recover Password!",homePageUrl:"/",homePageText:"Home",activePageText:"Recover Password!",imgClass:"bg-3"}),(0,n.jsx)("div",{className:"user-area-all-style recover-password-area ptb-100",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-12",children:(0,n.jsxs)("div",{className:"contact-form-action",children:[(0,n.jsxs)("div",{className:"form-heading text-center",children:[(0,n.jsx)("h3",{className:"form-title",children:"Reset Password!"}),(0,n.jsxs)("p",{className:"reset-desc",children:["Enter the email of your account to reset the password. Then you will receive a link to email to reset the password. If you have any issue about reset password ",(0,n.jsx)(l.default,{href:"/contact",children:(0,n.jsx)("a",{children:"Contact Us."})})]})]}),(0,n.jsx)("form",{method:"post",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)("input",{className:"form-control",type:"text",name:"name",placeholder:"Enter Email Address"})})}),(0,n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:(0,n.jsx)(l.default,{href:"/sign-in",children:(0,n.jsx)("a",{className:"now-log-in font-q",children:"Sign In your account"})})}),(0,n.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:(0,n.jsxs)("p",{className:"now-register",children:["Not a member? ",(0,n.jsx)(l.default,{href:"/sign-up",children:(0,n.jsx)("a",{className:"font-q",children:"Sign Up"})})]})}),(0,n.jsx)("div",{className:"col-12",children:(0,n.jsx)("button",{className:"default-btn btn-two",type:"submit",children:"Reset Password"})})]})})]})})})})}),(0,n.jsx)(s.Z,{}),(0,n.jsx)(c.Z,{})]})}},4689:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recover-password",function(){return t(6681)}])},1664:function(e,r,t){e.exports=t(6071)},6265:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:function(){return n}})},8347:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(r,{Z:function(){return n}})},9227:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!r||t.length!==r);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}}(e,r)||function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{Z:function(){return a}})},1163:function(e,r,t){e.exports=t(2441)}},function(e){e.O(0,[9774,4597,3532],(function(){return r=4689,e(e.s=r);var r}));var r=e.O();_N_E=r}]);