"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9341],{9613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,b=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9600:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var n=r(5443),o=r(3010),i=(r(9496),r(9613)),a=["components"],l={title:"Clipboard"},c=void 0,p={unversionedId:"ox_lib/Interface/Client/clipboard",id:"ox_lib/Interface/Client/clipboard",title:"Clipboard",description:"lib.setClipboard",source:"@site/docs/ox_lib/Interface/Client/clipboard.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/clipboard.md",tags:[],version:"current",lastUpdatedAt:1661298920,formattedLastUpdatedAt:"8/23/2022",frontMatter:{title:"Clipboard"},sidebar:"ox_lib",previous:{title:"Alert Dialog",permalink:"/docs/ox_lib/Interface/Client/alert"},next:{title:"Context Menu",permalink:"/docs/ox_lib/Interface/Client/context"}},u={},s=[{value:"lib.setClipboard",id:"libsetclipboard",level:3}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"libsetclipboard"},"lib.setClipboard"),(0,i.kt)("p",null,"Sets the player's clipboard to the specified string value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- value: string\n\nlib.setClipboard(value)\n")))}d.isMDXComponent=!0}}]);