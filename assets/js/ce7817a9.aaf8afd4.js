"use strict";(self.webpackChunkfbt_guide=self.webpackChunkfbt_guide||[]).push([[929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(u,".").concat(d)]||p[d]||h[d]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5167:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},l="Heater",i={unversionedId:"heater",id:"heater",title:"Heater",description:"What you'll need",source:"@site/docs/heater.md",sourceDirName:".",slug:"/heater",permalink:"/fbt_guide/docs/heater",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/fbt_guide/docs/intro"},next:{title:"Incubator",permalink:"/fbt_guide/docs/incubator"}},u={},s=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"1. Open the housing",id:"1-open-the-housing",level:3},{value:"2. Upload firmware to the Arduino",id:"2-upload-firmware-to-the-arduino",level:3},{value:"3. Re-assemble the housing",id:"3-re-assemble-the-housing",level:3}],c={toc:s},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"heater"},"Heater"),(0,a.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"Arduino IDE")),(0,a.kt)("li",{parentName:"ul"},"USB-A to USB-B 2.0"),(0,a.kt)("li",{parentName:"ul"},"Screwdriver")),(0,a.kt)("h3",{id:"1-open-the-housing"},"1. Open the housing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unplug the heater and remove the heating block."),(0,a.kt)("li",{parentName:"ul"},"Unscrew the four screws on two sides of the housing using the screwdriver.")),(0,a.kt)("img",{src:"{baseUrl}/img/heater/unscrew.jpg",width:"450"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the top portion of the housing gently."),(0,a.kt)("li",{parentName:"ul"},"Turn it upside down.")),(0,a.kt)("img",{src:"{baseUrl}/img/heater/remove_cover.jpg",width:"450"}),(0,a.kt)("h3",{id:"2-upload-firmware-to-the-arduino"},"2. Upload firmware to the Arduino"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Take the Arduino from the green PCB.")),(0,a.kt)("img",{src:"{baseUrl}/img/heater/remove_ard.jpg",width:"450"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From Arduino IDE, open the sketch called ",(0,a.kt)("strong",{parentName:"li"},"heater",(0,a.kt)("em",{parentName:"strong"},"v2.9_v2__eng"),".ino")),(0,a.kt)("li",{parentName:"ul"},"Refer to the ",(0,a.kt)("a",{parentName:"li",href:"intro#upload"},(0,a.kt)("strong",{parentName:"a"},"How to upload a sketch"))," for instructions.")),(0,a.kt)("h3",{id:"3-re-assemble-the-housing"},"3. Re-assemble the housing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reattach the Arduino to the PCB (ensure that all pin legs are connected).")),(0,a.kt)("img",{src:"{baseUrl}/img/heater/place_pcb.jpg",width:"450"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Double-check that all cables are securely secured (particularly the display cable)."),(0,a.kt)("li",{parentName:"ul"},"Firmly lay the PCB on the bottom half of the casing and shut it."),(0,a.kt)("li",{parentName:"ul"},"Connect the device to  and check if the device is working properly")),(0,a.kt)("img",{src:"{baseUrl}/img/heater/working_ok.jpg",width:"450"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tighten all of the screws on both sides of the heater.")))}h.isMDXComponent=!0}}]);