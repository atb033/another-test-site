(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1312],{1288:function(e,n,t){"use strict";var r=t(5893),a=(t(7294),t(1664));n.Z=function(e){var n=e.pageTitle,t=e.homePageUrl,s=e.homePageText,l=e.activePageText,o=e.imgClass;return(0,r.jsx)("div",{className:"page-title-area ".concat(o),children:(0,r.jsx)("div",{className:"d-table",children:(0,r.jsx)("div",{className:"d-table-cell",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h2",{children:n}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(a.default,{href:t,children:(0,r.jsx)("a",{children:s})})}),(0,r.jsx)("li",{className:"active",children:l})]})]})})})})})}},6071:function(e,n,t){"use strict";var r=t(3848),a=t(9448);n.default=void 0;var s=a(t(7294)),l=t(1689),o=t(2441),c=t(5749),i={};function u(e,n,t,r){if(e&&(0,l.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,t=(0,o.useRouter)(),a=t&&t.pathname||"/",d=s.default.useMemo((function(){var n=(0,l.resolveHref)(a,e.href,!0),t=r(n,2),s=t[0],o=t[1];return{href:s,as:e.as?(0,l.resolveHref)(a,e.as):o||s}}),[a,e.href,e.as]),f=d.href,m=d.as,h=e.children,p=e.replace,v=e.shallow,x=e.scroll,j=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var g=s.Children.only(h),b=g&&"object"===typeof g&&g.ref,y=(0,c.useIntersection)({rootMargin:"200px"}),N=r(y,2),w=N[0],E=N[1],O=s.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);(0,s.useEffect)((function(){var e=E&&n&&(0,l.isLocalURL)(f),r="undefined"!==typeof j?j:t&&t.locale,a=i[f+"%"+m+(r?"%"+r:"")];e&&!a&&u(t,f,m,{locale:r})}),[m,f,E,j,n,t]);var L={ref:O,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,s,o,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:s,locale:c,scroll:o}))}(e,t,f,m,p,v,x,j)},onMouseEnter:function(e){(0,l.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(t,f,m,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var I="undefined"!==typeof j?j:t&&t.locale,_=t&&t.isLocaleDomain&&(0,l.getDomainLocale)(m,I,t&&t.locales,t&&t.domainLocales);L.href=_||(0,l.addBasePath)((0,l.addLocale)(m,I,t&&t.defaultLocale))}return s.default.cloneElement(g,L)};n.default=d},5749:function(e,n,t){"use strict";var r=t(3848);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!l,c=(0,a.useRef)(),i=(0,a.useState)(!1),u=r(i,2),d=u[0],f=u[1],m=(0,a.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||d||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=o.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return o.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,s=r.observer,l=r.elements;return l.set(e,n),s.observe(e),function(){l.delete(e),s.unobserve(e),0===l.size&&(s.disconnect(),o.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,a.useEffect)((function(){if(!l&&!d){var e=(0,s.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[d]),[m,d]};var a=t(7294),s=t(8391),l="undefined"!==typeof IntersectionObserver;var o=new Map},3218:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=(t(7294),t(8805)),s=t(1288),l=t(4261),o=t(6918),c=t(1664);n.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(s.Z,{pageTitle:"Sign In",homePageUrl:"/",homePageText:"Home",activePageText:"Sign In",imgClass:"bg-1"}),(0,r.jsx)("div",{className:"user-area-all-style log-in-area ptb-100",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-title",children:[(0,r.jsx)("h2",{children:"Sign In your account!"}),(0,r.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio"})]}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsx)("div",{className:"contact-form-action",children:(0,r.jsx)("form",{method:"post",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,r.jsx)("button",{className:"default-btn",type:"submit",children:"Google"})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,r.jsx)("button",{className:"default-btn",type:"submit",children:"Facebook"})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-12",children:(0,r.jsx)("button",{className:"default-btn",type:"submit",children:"Twitter"})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{className:"form-control",type:"text",name:"name",placeholder:"Username or Email"})})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)("input",{className:"form-control",type:"password",name:"password",placeholder:"Password"})})}),(0,r.jsx)("div",{className:"col-lg-6 col-sm-6 form-condition",children:(0,r.jsxs)("div",{className:"agree-label",children:[(0,r.jsx)("input",{type:"checkbox",id:"chb1"}),(0,r.jsx)("label",{htmlFor:"chb1",children:"Remember Me"})]})}),(0,r.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,r.jsx)(c.default,{href:"/recover-password",children:(0,r.jsx)("a",{className:"forget",children:"Forgot my password?"})})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsx)("button",{className:"default-btn btn-two",type:"submit",children:"Log In Now"})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("p",{className:"account-desc",children:["Not a member? ",(0,r.jsx)(c.default,{href:"/sign-up",children:(0,r.jsx)("a",{children:"Sign Up"})})]})})]})})})}),(0,r.jsx)("div",{className:"col-lg-6",children:(0,r.jsx)("div",{className:"log-in-img"})})]})]})}),(0,r.jsx)(l.Z,{}),(0,r.jsx)(o.Z,{})]})}},4805:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-in",function(){return t(3218)}])},1664:function(e,n,t){e.exports=t(6071)},6265:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},8347:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return r}})},9227:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(c){a=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return a}})},1163:function(e,n,t){e.exports=t(2441)}},function(e){e.O(0,[9774,4597,3532],(function(){return n=4805,e(e.s=n);var n}));var n=e.O();_N_E=n}]);