(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[987],{5109:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/inputs/Radio",function(){return r(8808)}])},8808:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var n=r(7434),l=r(8065),o=r(2435);r(4267),r(5385);var i=r(4957),s=r(9809),a=r(4684),c=r(981);let d=e=>{let{color:t,style:r,children:n,...l}=e;return(0,i.tZ)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",style:(0,c.Ec)({color:t},r),...l,children:n})},h=e=>function(t){return(0,i.tZ)(d,{...t,children:e})},p=h((0,i.tZ)("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"}));h((0,i.BX)(i.HY,{children:[(0,i.tZ)("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"}),(0,i.tZ)("circle",{cx:"12",cy:"12",r:"5",fill:"currentColor"})]})),h((0,i.tZ)("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"})),h((0,i.BX)(i.HY,{children:[(0,i.tZ)("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8z"}),(0,i.tZ)("circle",{cx:"12",cy:"12",r:"5",fill:"currentColor"})]}));let[,k]=(0,c.XK)("radio"),Z=e=>{let{checked:t}=e;return(0,i.BX)("span",{className:k("icon"),children:[(0,i.tZ)(p,{}),(0,i.tZ)(s.r.Zoom,{in:!!t,destoryOnClosed:!1,children:(0,i.tZ)(d,{className:k("icon-mark"),children:(0,i.tZ)("circle",{cx:"12",cy:"12",r:"5",fill:"currentColor"})})})]})},v=(0,a.forwardRef)((e,t)=>{let{disabled:r,checked:n,...l}=e;return(0,i.BX)("span",{className:k("mark"),"aria-checked":!!n,"aria-disabled":!!r,children:[(0,i.tZ)("input",{...l,ref:t,type:"radio",checked:n,disabled:r,className:k("input")}),(0,i.tZ)(Z,{checked:n})]})});var y=r(9612),u=r(7296);let f={},x=(0,u.kr)({state:f,group:!1}),g=()=>(0,y.qp)(x),m=e=>{let{children:t,state:r=f}=e;return(0,i.tZ)(x.Provider,{value:{state:r,group:!0},children:t})};var R=r(4512);let[C,w]=(0,c.XK)("radio"),X=(0,a.forwardRef)((e,t)=>{let{style:r,color:n,children:l,className:o,...s}=e,d=(0,a.useRef)(null),h=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,y.Ye)(()=>t.every(R.Rw)?null:e=>{t.forEach(t=>{(0,R.rK)(t)?t(e):(0,R.Rw)(t)||(t.current=e)})},[t])}(t,d),{group:p,state:k}=g();p&&Object.assign(s,{name:k.name,disabled:!!(s.disabled||k.disabled),checked:(0,R.Rw)(k.value)?void 0:s.value===k.value,defaultChecked:s.value===k.defaultValue});let[Z,u]=function(e){var t;let{value:r,defaultValue:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},[l,o]=(0,y.eJ)(!1),[i,s]=(0,y.eJ)(null!==(t=null!=r?r:n)&&void 0!==t?t:e);(0,y.d4)(()=>{(0,R.Rw)(r)||o(!0)},[r]);let a=l?r:i;return[a,s]}(!1,{value:s.checked,defaultValue:s.defaultChecked});return(0,i.BX)("label",{className:(0,c.zj)(C,o),style:(0,c.Ec)(r,{cursor:s.disabled?"default":"pointer","--wisteria-radio-color":n}),children:[(0,i.tZ)(v,{...s,ref:h,checked:Z,onChange:e=>{var t,r;p?null===(r=k.onChange)||void 0===r||r.call(k,e.target.value):Object.hasOwn(s,"checked")||u(!0),null===(t=s.onChange)||void 0===t||t.call(s,e)}}),!(0,R.Rw)(l)&&(0,i.tZ)("span",{className:w("text",s.disabled&&"text-disabled"),children:l})]})});var B=r(7122);let[b]=(0,c.XK)("radio-group"),N=e=>{let{style:t,className:r,children:n,onChange:l,...o}=e,s=function(e){let t=(0,y.sO)(e);return t.current=e,t}(null!=l?l:B.ZT);return(0,i.tZ)(m,{state:{...o,onChange:s.current},children:(0,i.tZ)("div",{role:"radiogroup",style:t,className:(0,c.zj)(r,b),children:n})})},E=Object.assign(X,{Group:N});E.displayName="WisRadio",N.displayName="WisRadioGroup";var _=r(9904);let O=()=>{let[e,t]=(0,y.eJ)();return(0,i.tZ)("div",{children:(0,i.tZ)(E.Group,{name:"demo",value:e,defaultValue:"A",onChange:e=>t(e),children:(0,i.BX)("div",{class:"flex gap-4",children:[(0,i.tZ)(E,{value:"A",children:"A"}),(0,i.tZ)(E,{value:"B",children:"B"}),(0,i.tZ)(E,{value:"C",children:"C"}),(0,i.tZ)(E,{value:"D",children:"D"})]})})})};var z=r(5872),G=r(2379);function A(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",span:"span",h2:"h2",h3:"h3",p:"p",strong:"strong"},(0,o.ah)(),e.components);return(0,n.BX)(n.HY,{children:[(0,n.tZ)(t.h1,{children:"Radio"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.tZ)(t.code,{"data-language":"tsx","data-theme":"default",children:(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { Radio } "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'wisteria-ui'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,n.tZ)(t.h2,{id:"用法",children:"用法"}),"\n",(0,n.tZ)(t.h3,{id:"基本使用",children:"基本使用"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">单选框</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"disabled"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">禁用</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.BX)(z.S,{label:"Usage",children:[(0,n.tZ)(E,{children:"单选框"}),(0,n.tZ)(E,{disabled:!0,children:"禁用"})]}),"\n",(0,n.tZ)(t.h3,{id:"自定义颜色",children:"自定义颜色"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"checked"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"color"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"red"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">红色</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"checked"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"color"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"orange"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">橙色</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"checked"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"color"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"violet"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">紫罗兰色</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.BX)(z.S,{label:"Color",children:[(0,n.tZ)(E,{checked:!0,color:"red",children:(0,n.tZ)(t.p,{children:"红色"})}),(0,n.tZ)(E,{checked:!0,color:"orange",children:(0,n.tZ)(t.p,{children:"橙色"})}),(0,n.tZ)(E,{checked:!0,color:"violet",children:(0,n.tZ)(t.p,{children:"紫罗兰色"})})]}),"\n",(0,n.tZ)(t.h3,{id:"单选框组",children:"单选框组"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio.Group"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"name"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"demo"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"defaultValue"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"A"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"A"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">A</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"B"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">B</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"C"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">C</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"D"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">D</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Radio.Group"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.tZ)(z.S,{label:"Radio.Group",children:(0,n.tZ)(O,{})}),"\n",(0,n.tZ)(t.h2,{id:"api",children:"API"}),"\n",(0,n.tZ)(_.UW,{type:"info",children:(0,n.BX)(t.p,{children:[(0,n.tZ)(t.strong,{children:"Radio"})," 组件支持原生 ",(0,n.tZ)(t.strong,{children:"HTMLInputElement"})," 属性。"]})}),"\n",(0,n.tZ)(t.h3,{id:"radio",children:"Radio"}),"\n",(0,n.tZ)(G.G,{list:[{property:"color",description:"设置选中颜色",typedef:"string"},{property:"checked",description:"是否选中",typedef:"boolean"},{property:"disabled",description:"是否禁用",typedef:"boolean"},{property:"ref",description:"-",typedef:"Ref<HTMLInputElement>"},{property:"onChange",description:"回调事件",typedef:"(event: TargetedEvent<HTMLInputElement>) => void"}]}),"\n",(0,n.tZ)(t.h3,{id:"radiogroup",children:"Radio.Group"}),"\n",(0,n.tZ)(G.G,{list:[{property:"name",description:"设置表单项名称",typedef:"string"},{property:"disabled",description:"是否禁用",typedef:"boolean"},{property:"value",description:"radio value",typedef:"string | number"},{property:"defaultValue",description:"默认选中项",typedef:"string | number"},{property:"className",description:"样式类名",typedef:"string"},{property:"style",description:"样式",typedef:"CSSProperties"},{property:"onChange",description:"回调事件",typedef:"function"}]})]})}var S=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.tZ)(t,{...e,children:(0,n.tZ)(A,{...e})}):A(e)},pageOpts:{filePath:"pages/components/inputs/Radio.mdx",route:"/components/inputs/Radio",headings:[{depth:1,value:"Radio",id:"radio"},{depth:2,value:"用法",id:"用法"},{depth:3,value:"基本使用",id:"基本使用"},{depth:3,value:"自定义颜色",id:"自定义颜色"},{depth:3,value:"单选框组",id:"单选框组"},{depth:2,value:"API",id:"api"},{depth:3,value:"Radio",id:"radio-1"},{depth:3,value:"Radio.Group",id:"radiogroup"}],title:"Radio"},pageNextRoute:"/components/inputs/Radio"})},5385:function(){}},function(e){e.O(0,[65,990,888,179],function(){return e(e.s=5109)}),_N_E=e.O()}]);