!function(e){function t(t){for(var r,c,i=t[0],l=t[1],u=t[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(p&&p(t);d.length;)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=l;o.push([19,1]),n()}({19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),i=n(11),l=n(16),u=n(4),p=n(2);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(){var e=m(["\n  margin-top: 10px;\n"]);return d=function(){return e},e}function s(){var e=m(["\n  display: inline;\n  margin-right: 10px;\n  padding-bottom: 10px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);return s=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b=Object(p.a)(),v=Object(i.a)("div")(s()),h=Object(i.a)("div")(d()),y=function(e){return a.a.createElement(l.a,f({style:{textDecoration:"none"},activeStyle:{fontWeight:"bold",borderBottom:"3px solid white"}},e))},g=function(){return a.a.createElement("div",{"data-testid":"Home"},"Home")},E=function(){return a.a.createElement("div",{"data-testid":"MicroUiApp1"},"Micro UI App 1")},O=function(){return a.a.createElement("div",{"data-testid":"MicroUiApp2"},"Micro UI App 2")};c.a.render(a.a.createElement((function(){return a.a.createElement(u.b,{history:b},a.a.createElement("div",null,a.a.createElement("h1",null,"Micro UI Main Container"),a.a.createElement(v,null,a.a.createElement(y,{exact:!0,to:"/"},"Home")),a.a.createElement(v,null,a.a.createElement(y,{to:"/app1"},"Micro UI App 1")),a.a.createElement(v,null,a.a.createElement(y,{to:"/app2"},"Micro UI App 2"))),a.a.createElement(h,null,a.a.createElement(u.c,null,a.a.createElement(u.a,{exact:!0,path:"/",component:g}),a.a.createElement(u.a,{path:"/app1",component:E}),a.a.createElement(u.a,{path:"/app2",component:O}))))}),null),document.getElementById("app"))}});