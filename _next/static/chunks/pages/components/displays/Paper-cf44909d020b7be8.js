(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{1421:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/displays/Paper",function(){return r(9231)}])},9552:function(e,t,r){"use strict";r.d(t,{x:function(){return l}});var n=r(4957);let l=e=>{var t,r,l;let{size:i=64,...o}=e,s=null!==(t=o.style)&&void 0!==t?t:{};return(0,n.tZ)("div",{...o,className:["bg-violet-500 dark:text-white text-black font-bold text-base rounded-md cursor-pointer flex items-center justify-center",o.className].join(" "),style:{...s,width:null!==(r=o.width)&&void 0!==r?r:i,height:null!==(l=o.height)&&void 0!==l?l:i}})}},5872:function(e,t,r){"use strict";r.d(t,{S:function(){return l}});var n=r(4957);let l=e=>{var t;let{label:r,children:l,line:i="dashed",...o}=e;return(0,n.BX)("fieldset",{...o,class:"rounded-lg p-4 border my-4",style:{borderStyle:i,...null!==(t=o.style)&&void 0!==t?t:{}},children:[(0,n.tZ)("legend",{hidden:!r,class:"px-2 font-bold italic",children:r}),(0,n.tZ)("div",{class:"flex justify-center gap-6",style:{width:"100%"},children:l})]})}},2379:function(e,t,r){"use strict";r.d(t,{G:function(){return d}});var n=r(4957),l=r(7296),i=r(9612),o=r(4180),s=r.n(o);let a=["typedef","property","description","defaultValue"],c=e=>{let{children:t,className:r=""}=e,l=(0,i.Ye)(()=>{let e=r.split(" ").map(e=>e.split("-")[0]);return["py-2","pl-6","text-xs","leading-6","font-mono","font-semibold"].filter(t=>!e.includes(t.split("-")[0])).concat(r)},[r]);return(0,n.tZ)("td",{class:l.join(" "),dangerouslySetInnerHTML:{__html:t}})},h=e=>{let{typedef:t,property:r,description:l,defaultValue:o}=(0,i.Ye)(()=>Object.assign(Object.fromEntries(a.map(e=>[e,"-"])),Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return a.includes(t)}).map(e=>{let[t,r]=e;return[t,r.trim()]}))),[e]);return(0,n.BX)("tr",{className:"border-b border-gray-100 dark:border-neutral-700/50",children:[(0,n.tZ)(c,{className:"text-violet-500 pl-0",children:r}),(0,n.tZ)(c,{className:"text-slate-500",children:l}),(0,n.tZ)(c,{className:"text-violet-500",children:t}),(0,n.tZ)(c,{className:"text-slate-500",children:o})]})},d=e=>{let{list:t}=e;return(0,n.tZ)("div",{className:"-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 "+s().container,children:(0,n.BX)("table",{className:"w-full border-collapse text-sm",children:[(0,n.tZ)("thead",{children:(0,n.BX)("tr",{className:"border-b py-4 text-left dark:border-neutral-700",children:[(0,n.tZ)("th",{className:"py-2 font-semibold",children:"属性"}),(0,n.tZ)("th",{className:"px-6 py-2 font-semibold",children:"说明"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"类型"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"默认值"})]})}),(0,n.tZ)("tbody",{className:"align-baseline text-gray-900 dark:text-gray-100",children:t.map((e,t)=>(0,l.az)(h,{...e,key:t}))})]})})}},1719:function(e,t,r){"use strict";r.d(t,{Ec:function(){return s},XK:function(){return o},zj:function(){return i}});var n=r(362);let l=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),l=1;l<t;l++)r[l-1]=arguments[l];return r.map(t=>t?(0,n.HD)(t)?"".concat(e,"-").concat(t):(0,n.kJ)(t)?t.map(t=>!!t&&"".concat(e,"-").concat(t)):Object.entries(t).map(t=>{let[r,n]=t;return n?"".concat(e,"-").concat(r):""}):t).flat(1)},i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")},o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wisteria",r="".concat(t,"-").concat(e);return[r,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i(...l(r,...t))}]},s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let l=t.map(e=>{if(!(0,n.HD)(e))return(0,n.Kn)(e)?Object.fromEntries(Object.entries(e).filter(e=>{let[,t]=e;return!!t})):Object.create(null);let t=Array.from(e.matchAll(/^[a-z-]*:\s*\w+;?/g)).map(e=>{let[t,r]=e.toString().replace(";","").split(":"),n=t.replace(/-(\w)/g,(e,t)=>t.toUpperCase());return[n,r]});return Object.fromEntries(t)});return Object.assign({},...l)}},2423:function(e,t,r){"use strict";r.d(t,{ZT:function(){return l},xj:function(){return i}});var n=r(362);let l=()=>{},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return(0,n.hj)(e)?"".concat(e).concat(t):e}},489:function(e,t,r){"use strict";r.d(t,{i:function(){return d}});var n=r(4957),l=r(7296),i=r(4684),o=r(1719),s=r(362),a=r(2423);let[c,h]=(0,o.XK)("divider"),d=(0,i.forwardRef)((e,t)=>{let{dashed:r,children:i,insetSize:d,textAlign:p="center",variant:k="fullWidth",direction:v="horizontal",...y}=e;return(0,n.tZ)("div",{ref:t,role:"separator","data-variant":k,className:(0,o.zj)(c,y.className,h(v,!!i&&["with-children","text-".concat(p)])),style:(0,o.Ec)(!!r&&{borderStyle:"dashed"},(0,s.hj)(d)&&{"--divider-inset-size":(0,a.xj)(d)},y.style),children:(0,s.Rw)(i)?null:(0,l.l$)(i)?i:(0,n.tZ)("span",{className:h("text"),children:i})})})},2029:function(e,t,r){"use strict";r.d(t,{T:function(){return p}});var n=r(4957),l=r(489),i=r(9612),o=r(4684),s=r(7296),a=r(1719),c=r(362);let[h,d]=(0,a.XK)("space"),p=(0,o.forwardRef)((e,t)=>{let{wrap:r,split:o,children:p,size:k=6,align:v="center",direction:y="horizontal",...Z}=e,u=(0,s.bR)(p),[x,f]=(0,i.Ye)(()=>(0,c.kJ)(k)?k:[k,k],[k]);return(0,n.tZ)("div",{...Z,ref:t,style:(0,a.Ec)(Z.style,{rowGap:x,columnGap:f}),className:(0,a.zj)(h,Z.className,d(v,y,{wrap:r})),children:u.map((e,t)=>{let r=t!==u.length-1,i=r&&o;if(i&&(0,c.jn)(i)){let e="vertical"===y;i=(0,n.tZ)(l.i,{direction:e?"horizontal":"vertical"})}return(0,n.BX)(s.HY,{children:[(0,n.tZ)("div",{className:d("item"),children:e}),i]},t)})})})},9231:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(7434),l=r(8065),i=r(2435);r(4267);var o=r(2029),s=r(4957),a=r(4684),c=r(1719),h=r(2423);let[d,p]=(0,c.XK)("paper"),k=(0,a.forwardRef)((e,t)=>{let{corner:r=6,elevation:n=1,variant:l="elevation",...i}=e;return(0,s.tZ)("div",{...i,ref:t,style:(0,c.Ec)(i.style,{width:i.width,height:i.height,borderRadius:r&&(0,h.xj)(r)}),className:(0,c.zj)(i.className,d,p(l,{["elevation-".concat(n)]:"elevation"===l})),children:i.children})});r(9904);var v=r(5872),y=r(9552),Z=r(2379);function u(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",span:"span",h2:"h2",h3:"h3",p:"p"},(0,i.ah)(),e.components);return(0,n.BX)(n.HY,{children:[(0,n.tZ)(t.h1,{children:"Paper"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.tZ)(t.code,{"data-language":"tsx","data-theme":"default",children:(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { Paper } "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'wisteria-ui'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,n.tZ)(t.h2,{id:"用法",children:"用法"}),"\n",(0,n.tZ)(t.h3,{id:"variant",children:"Variant"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Paper"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"outlined"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Box"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"width"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"180"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"height"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"80"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}>Outlined</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Box"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Paper"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:" "}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Paper"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"elevation"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"elevation"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}>"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Box"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"width"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"180"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"height"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"80"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}>Elevation</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Box"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Paper"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.tZ)(v.S,{label:"预览",children:(0,n.BX)(o.T,{size:24,children:[(0,n.tZ)(k,{variant:"outlined",corner:12,children:(0,n.tZ)(y.x,{width:180,height:80,className:"bg-transparent",children:(0,n.tZ)(t.p,{children:"Outlined"})})}),(0,n.tZ)(k,{variant:"elevation",elevation:3,corner:12,children:(0,n.tZ)(y.x,{width:180,height:80,className:"bg-transparent",children:(0,n.tZ)(t.p,{children:"Elevation"})})})]})}),"\n",(0,n.tZ)(t.h3,{id:"elevation",children:"Elevation"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Array"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:".from"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"({ length"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"6"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" (_"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" index) "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" index)"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:".map"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(elevation "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Paper"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"elevation"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{elevation}>"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Box"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"width"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"180"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"height"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"80"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"bg-transparent"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      {"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`elevation-"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"elevation"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Box"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Paper"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"));"})})]})}),"\n",(0,n.tZ)(v.S,{label:"预览",children:(0,n.tZ)(o.T,{wrap:!0,size:24,children:Array.from({length:6},(e,t)=>t).map(e=>(0,n.tZ)(k,{elevation:e,children:(0,n.tZ)(y.x,{width:180,height:80,className:"bg-transparent",children:"elevation-".concat(e)})}))})}),"\n",(0,n.tZ)(t.h3,{id:"corner",children:"Corner"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Paper"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"corner"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"999px"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"elevation"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}>"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Box"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">Corner - Full</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Box"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Paper"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.tZ)(v.S,{label:"预览",children:(0,n.BX)(o.T,{size:24,children:[(0,n.tZ)(k,{corner:"0",elevation:3,children:(0,n.tZ)(y.x,{width:180,height:80,className:"bg-transparent",children:(0,n.tZ)(t.p,{children:"Corner - None"})})}),(0,n.tZ)(k,{corner:"16px",elevation:3,children:(0,n.tZ)(y.x,{width:180,height:80,className:"bg-transparent",children:(0,n.tZ)(t.p,{children:"Corner - 16px"})})}),(0,n.tZ)(k,{corner:"999px",elevation:3,children:(0,n.tZ)(y.x,{width:180,height:80,className:"bg-transparent",children:(0,n.tZ)(t.p,{children:"Corner - Full"})})})]})}),"\n",(0,n.tZ)(t.h2,{id:"api",children:"API"}),"\n",(0,n.tZ)(Z.G,{list:[{property:"width",description:"指定容器宽度",typedef:"number | string"},{property:"height",description:"指定容器高度",typedef:"number | string"},{property:"corner",description:"指定圆角大小",typedef:"number | string"},{property:"elevation",description:"指定阴影层级，0～5",typedef:"number",defaultValue:"1"},{property:"variant",description:"变体类型",typedef:"elevation | outlined",defaultValue:"elevation"}]})]})}var x=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.tZ)(t,{...e,children:(0,n.tZ)(u,{...e})}):u(e)},pageOpts:{filePath:"pages/components/displays/Paper.mdx",route:"/components/displays/Paper",headings:[{depth:1,value:"Paper",id:"paper"},{depth:2,value:"用法",id:"用法"},{depth:3,value:"Variant",id:"variant"},{depth:3,value:"Elevation",id:"elevation"},{depth:3,value:"Corner",id:"corner"},{depth:2,value:"API",id:"api"}],title:"Paper"},pageNextRoute:"/components/displays/Paper"})},4180:function(e){e.exports={container:"styles_container__unOV2"}}},function(e){e.O(0,[65,888,179],function(){return e(e.s=1421)}),_N_E=e.O()}]);