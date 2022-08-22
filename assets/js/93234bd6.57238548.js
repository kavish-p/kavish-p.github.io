"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[669],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(7462),o=(t(7294),t(3905));const a={},c="Docker",i={unversionedId:"docker",id:"docker",title:"Docker",description:"Build from Dockerfile",source:"@site/docs/docker.md",sourceDirName:".",slug:"/docker",permalink:"/docker",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hi! \ud83d\udc4b",permalink:"/"},next:{title:"Kubernetes",permalink:"/category/kubernetes"}},l={},u=[{value:"Build from Dockerfile",id:"build-from-dockerfile",level:2},{value:"Tag and Push",id:"tag-and-push",level:2}],p={toc:u};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("h2",{id:"build-from-dockerfile"},"Build from Dockerfile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t test-image .\n")),(0,o.kt)("h2",{id:"tag-and-push"},"Tag and Push"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker tag test-image 10.168.0.62/docker-kavish/test-image:1.0\ndocker push 10.168.0.62/docker-kavish/test-image:1.0\n")))}s.isMDXComponent=!0}}]);