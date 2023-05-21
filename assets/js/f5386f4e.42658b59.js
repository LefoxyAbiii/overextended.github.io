"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2285],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(2564),a=(n(9496),n(9613));const l={},i="Cron",o={unversionedId:"ox_lib/Cron/Server",id:"ox_lib/Cron/Server",title:"Cron",description:"A Lua implementation of cron, allowing tasks to be scheduled to run periodically at fixed times, dates, and intervals.",source:"@site/docs/ox_lib/Cron/Server.md",sourceDirName:"ox_lib/Cron",slug:"/ox_lib/Cron/Server",permalink:"/docs/ox_lib/Cron/Server",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Cron/Server.md",tags:[],version:"current",lastUpdatedAt:1684705421,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{},sidebar:"ox_lib",previous:{title:"Server",permalink:"/docs/ox_lib/Callback/Lua/Server"},next:{title:"Client",permalink:"/docs/ox_lib/DisableControls/Client"}},s={},p=[{value:"Cron expression",id:"cron-expression",level:2},{value:"<code>*</code> Wildcards",id:"-wildcards",level:3},{value:"<code>,</code> Lists",id:"-lists",level:3},{value:"<code>-</code> Ranges",id:"--ranges",level:3},{value:"<code>/</code> Steps",id:"-steps",level:3},{value:"Functions",id:"functions",level:2},{value:"lib.cron.new",id:"libcronnew",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cron"},"Cron"),(0,a.kt)("p",null,"A Lua implementation of cron, allowing tasks to be scheduled to run periodically at fixed times, dates, and intervals."),(0,a.kt)("h2",{id:"cron-expression"},"Cron expression"),(0,a.kt)("p",null,"A string containing five values separated by white spaces, representing a set of times to execute a task."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Valid values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Minutes"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0-59"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hours"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0-23"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Day of month"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1-31"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Month"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1-12")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"jan-dec"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Day of week"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1-7")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"sun-sat"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Day of the week is set to match ",(0,a.kt)("inlineCode",{parentName:"p"},"os.date")," and starts at 1, unlike the cron-standard which starts at 0."),(0,a.kt)("h3",{id:"-wildcards"},(0,a.kt)("inlineCode",{parentName:"h3"},"*")," Wildcards"),(0,a.kt)("p",null,"Represents all values, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"* * * * *")," will run every minute, or ",(0,a.kt)("inlineCode",{parentName:"p"},"* * * * 1")," will run every minute on Sunday."),(0,a.kt)("h3",{id:"-lists"},(0,a.kt)("inlineCode",{parentName:"h3"},",")," Lists"),(0,a.kt)("p",null,"Commas can be used to create a list of values, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"* * * * sun,mon,tue")," will run every minute on Sunday, Monday, and Tuesday."),(0,a.kt)("h3",{id:"--ranges"},(0,a.kt)("inlineCode",{parentName:"h3"},"-")," Ranges"),(0,a.kt)("p",null,"Dashes define a range of values, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"10-30 * * * *")," will start running the task at the 10th minute, and every minute until the 30th minute."),(0,a.kt)("h3",{id:"-steps"},(0,a.kt)("inlineCode",{parentName:"h3"},"/")," Steps"),(0,a.kt)("p",null,"Slashes can be used for step values, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"* */4 * * *")," will run every 4 hours and is shorthand for ",(0,a.kt)("inlineCode",{parentName:"p"},"* 0,4,8,12,16,20 * * *"),"."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"libcronnew"},"lib.cron.new"),(0,a.kt)("p",null,"Creates a new ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cron"},"cronjob"),", scheduling a task to run at fixed times or intervals.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.cron.new(expression, job, options)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"expression:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"string A cron expression such as ",(0,a.kt)("inlineCode",{parentName:"li"},"* * * * *")," representing minute, hour, day, month, and day of the week"))),(0,a.kt)("li",{parentName:"ul"},"job:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"fun(task: ",(0,a.kt)("inlineCode",{parentName:"li"},"OxTask"),", date: ",(0,a.kt)("inlineCode",{parentName:"li"},"osdate"),")"))),(0,a.kt)("li",{parentName:"ul"},"options?:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"debug?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"returns"),": OxTask"))}c.isMDXComponent=!0}}]);