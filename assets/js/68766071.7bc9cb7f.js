"use strict";(self.webpackChunkfbt_guide=self.webpackChunkfbt_guide||[]).push([[614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=a,m=d["".concat(u,".").concat(h)]||d[h]||s[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="Incubator",l={unversionedId:"incubator",id:"incubator",title:"Incubator",description:"What you'll need",source:"@site/docs/incubator.md",sourceDirName:".",slug:"/incubator",permalink:"/fbt_guide/docs/incubator",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Heater",permalink:"/fbt_guide/docs/heater"}},u={},c=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"1. Remove the Arduino",id:"1-remove-the-arduino",level:3},{value:"2. Upload firmware to the Arduino",id:"2-upload-firmware-to-the-arduino",level:3},{value:"3. Re-assemble the housing",id:"3-re-assemble-the-housing",level:3}],p={toc:c},d="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"incubator"},"Incubator"),(0,a.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE")),(0,a.kt)("li",{parentName:"ul"},"USB-A to USB-B 2.0"),(0,a.kt)("li",{parentName:"ul"},"Heat Gun or Hot Air Dryer"),(0,a.kt)("li",{parentName:"ul"},"Hot Glue Gun")),(0,a.kt)("h3",{id:"1-remove-the-arduino"},"1. Remove the Arduino"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the top cover and remove the device from the lid with a Heat Gun or a Hot Air Dryer."),(0,a.kt)("li",{parentName:"ul"},"Turn the device upside down."),(0,a.kt)("li",{parentName:"ul"},"Use a Heat Gun or a Hot Air Dryer to heat up the glue surrounding the fan."),(0,a.kt)("li",{parentName:"ul"},"Gently remove the fan from its location while leaving the cord connected."),(0,a.kt)("li",{parentName:"ul"},"Take the Arduino from the green PCB.")),(0,a.kt)("h3",{id:"2-upload-firmware-to-the-arduino"},"2. Upload firmware to the Arduino"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From Arduino IDE, open the sketch called ",(0,a.kt)("strong",{parentName:"li"},"Incubator.ino")),(0,a.kt)("li",{parentName:"ul"},"Refer to the ",(0,a.kt)("a",{parentName:"li",href:"intro#upload"},(0,a.kt)("strong",{parentName:"a"},"How to upload a sketch"))," for instructions.")),(0,a.kt)("h3",{id:"3-re-assemble-the-housing"},"3. Re-assemble the housing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reattach the Arduino (ensure that all pin legs are connected)."),(0,a.kt)("li",{parentName:"ul"},"Glue back the fan in its original position (with the blowing side facing out)."),(0,a.kt)("li",{parentName:"ul"},"Place the device back on the lid and seal the gap with the Hot Glue Gun.")))}s.isMDXComponent=!0}}]);