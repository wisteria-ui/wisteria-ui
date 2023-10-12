(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[727],{7788:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Provider",function(){return r(2832)}])},2379:function(e,t,r){"use strict";r.d(t,{G:function(){return d}});var n=r(4957),l=r(7296),i=r(9612),o=r(4180),s=r.n(o);let a=["typedef","property","description","defaultValue"],c=e=>{let{children:t,className:r=""}=e,l=(0,i.Ye)(()=>{let e=r.split(" ").map(e=>e.split("-")[0]);return["py-2","pl-6","text-xs","leading-6","font-mono","font-semibold"].filter(t=>!e.includes(t.split("-")[0])).concat(r)},[r]);return(0,n.tZ)("td",{class:l.join(" "),dangerouslySetInnerHTML:{__html:t}})},h=e=>{let{typedef:t,property:r,description:l,defaultValue:o}=(0,i.Ye)(()=>Object.assign(Object.fromEntries(a.map(e=>[e,"-"])),Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return a.includes(t)}).map(e=>{let[t,r]=e;return[t,r.trim()]}))),[e]);return(0,n.BX)("tr",{className:"border-b border-gray-100 dark:border-neutral-700/50",children:[(0,n.tZ)(c,{className:"text-violet-500 pl-0",children:r}),(0,n.tZ)(c,{className:"text-slate-500",children:l}),(0,n.tZ)(c,{className:"text-violet-500",children:t}),(0,n.tZ)(c,{className:"text-slate-500",children:o})]})},d=e=>{let{list:t}=e;return(0,n.tZ)("div",{className:"-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 "+s().container,children:(0,n.BX)("table",{className:"w-full border-collapse text-sm",children:[(0,n.tZ)("thead",{children:(0,n.BX)("tr",{className:"border-b py-4 text-left dark:border-neutral-700",children:[(0,n.tZ)("th",{className:"py-2 font-semibold",children:"属性"}),(0,n.tZ)("th",{className:"px-6 py-2 font-semibold",children:"说明"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"类型"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"默认值"})]})}),(0,n.tZ)("tbody",{className:"align-baseline text-gray-900 dark:text-gray-100",children:t.map((e,t)=>(0,l.az)(h,{...e,key:t}))})]})})}},2832:function(e,t,r){"use strict";r.r(t);var n=r(7434),l=r(8065),i=r(2435);r(4267);var o=r(9904),s=r(2379);function a(e){let t=Object.assign({h1:"h1",pre:"pre",code:"code",span:"span",h2:"h2",h3:"h3",strong:"strong",p:"p",a:"a"},(0,i.ah)(),e.components);return(0,n.BX)(n.HY,{children:[(0,n.tZ)(t.h1,{children:"Provider"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.tZ)(t.code,{"data-language":"tsx","data-theme":"default",children:(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { WisteriaProvider } "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'wisteria-ui'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,n.tZ)(t.h2,{id:"用法",children:"用法"}),"\n",(0,n.tZ)(t.h3,{id:"主题切换",children:"主题切换"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.tZ)(t.code,{"data-language":"tsx","data-theme":"default",children:(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"WisteriaProvider"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"theme"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{{ scheme"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'light'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" }} />"})]})})}),"\n",(0,n.BX)(o.UW,{type:"info",children:["组件库内置 ",(0,n.tZ)(t.strong,{children:"亮色"})," 和 ",(0,n.tZ)(t.strong,{children:"暗色"})," 主题。"]}),"\n",(0,n.tZ)(t.h3,{id:"获取当前主题",children:"获取当前主题"}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" { useTheme } "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'wisteria-ui'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:" "}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"theme"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useTheme"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:" "}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"main"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">App</"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"main"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),"\n",(0,n.tZ)(t.h3,{id:"动态主题",children:"动态主题"}),"\n",(0,n.BX)(o.UW,{type:"info",children:["动态主题切换基于 ",(0,n.tZ)(t.strong,{children:"CSS 变量"})," 实现。"]}),"\n",(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"WisteriaProvider"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"theme"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{{"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    scheme"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'light'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    colors"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      primary"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#6750a4'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      primaryContainer"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#e9ddff'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      secondary"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#625b71'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      secondaryContainer"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#e8def8'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      tertiary"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#7e5260'"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      tertoaryContainer"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#ffd9e3'"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.tZ)(t.span,{className:"line",children:(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  }}"})}),"\n",(0,n.tZ)(t.span,{className:"line",children:(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})}),"\n",(0,n.tZ)(o.UW,{children:(0,n.BX)(t.p,{children:["当前代码仅为示例，更多样式设置请查看 ",(0,n.tZ)(t.strong,{children:"ThemeColors"})," 类型，具体含义可在\n",(0,n.tZ)(t.a,{href:"https://m3.material.io/styles/color/the-color-system/tokens",children:"Material Design"}),"\n文档中查看"]})}),"\n",(0,n.tZ)(t.h2,{id:"api",children:"API"}),"\n",(0,n.tZ)(o.UW,{type:"info",children:(0,n.BX)(t.p,{children:[(0,n.tZ)(t.strong,{children:"theme"})," 为 ",(0,n.tZ)(t.code,{children:"undefined"})," 时，会根据系统主题自动切换主题。"]})}),"\n",(0,n.tZ)(s.G,{list:[{property:"theme.scheme",description:"主题",typedef:"light | dark"},{property:"theme.colors",description:"自定义样式",typedef:"ThemeColors"},{property:"fallback",description:"页面异常时显示",typedef:"VNode"},{property:"onError",description:"页面异常回调",typedef:"Function"}]})]})}t.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.tZ)(t,{...e,children:(0,n.tZ)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/components/Provider.mdx",route:"/components/Provider",headings:[{depth:1,value:"Provider",id:"provider"},{depth:2,value:"用法",id:"用法"},{depth:3,value:"主题切换",id:"主题切换"},{depth:3,value:"获取当前主题",id:"获取当前主题"},{depth:3,value:"动态主题",id:"动态主题"},{depth:2,value:"API",id:"api"}],title:"Provider"},pageNextRoute:"/components/Provider"})},4180:function(e){e.exports={container:"styles_container__unOV2"}}},function(e){e.O(0,[65,888,179],function(){return e(e.s=7788)}),_N_E=e.O()}]);