"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={"ft:title":"Troubleshooting Configuration Errors in the ISM Endpoint Installer","ft:prettyUrl":"c_installer_troubleshooting"},a=void 0,l={unversionedId:"guides/ism/troubleshooting_configuration_ism_endpoint_installer",id:"guides/ism/troubleshooting_configuration_ism_endpoint_installer",title:"troubleshooting_configuration_ism_endpoint_installer",description:"This table provides guidance for resolving errors you may encounter using the ISM endpoint installer. If an issue persists after attempting the solution, contact Veracode Technical Support.",source:"@site/docs/guides/ism/15_troubleshooting_configuration_ism_endpoint_installer.md",sourceDirName:"guides/ism",slug:"/guides/ism/troubleshooting_configuration_ism_endpoint_installer",permalink:"/vcodcs/docs/guides/ism/troubleshooting_configuration_ism_endpoint_installer",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{"ft:title":"Troubleshooting Configuration Errors in the ISM Endpoint Installer","ft:prettyUrl":"c_installer_troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"ism_endpoint_release_history",permalink:"/vcodcs/docs/guides/ism/ism_endpoint_release_history"},next:{title:"troubleshooting_ism",permalink:"/vcodcs/docs/guides/ism/troubleshooting_ism"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This table provides guidance for resolving errors you may encounter using the ISM endpoint installer. If an issue persists after attempting the solution, contact Veracode Technical Support."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Issue"),(0,o.kt)("th",{parentName:"tr",align:null},"Solution"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Invalid installation folder"),(0,o.kt)("td",{parentName:"tr",align:null},"Verify that the location specified in the Installation Folder field is either an empty folder that you created or a nonexistent folder that the installer creates.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Invalid Java home location"),(0,o.kt)("td",{parentName:"tr",align:null},"Verify that the Java Home field points to a valid Java Runtime Environment ","(","JRE",")"," or Java Development Kit ","(","JDK",")"," and that your machine uses Java version 1.8 or later. Veracode recommends using Oracle Java SE Runtime Environment 8u212.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Proxy settings errors"),(0,o.kt)("td",{parentName:"tr",align:null},"Verify that the proxy server is accessible from the machine running the installer and does not require more authentication in addition to username and password. The installer supports only basic proxy authentication.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Failure to authenticate endpoint key"),(0,o.kt)("td",{parentName:"tr",align:null},"Copy the endpoint key to your clipboard directly from the Veracode Platform. To copy the key, go to the gateway page, click the Actions menu for the endpoint you are installing, and select ",(0,o.kt)("strong",{parentName:"td"},"Copy Endpoint Key"),". ",(0,o.kt)("br",null),(0,o.kt)("br",null),"If you still encounter an error, verify that you have not already installed an endpoint with that key on another machine.")))))}p.isMDXComponent=!0}}]);