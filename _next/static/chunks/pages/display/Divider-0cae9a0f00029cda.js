(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[478],{5024:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/display/Divider",function(){return i(3549)}])},3549:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var n=i(7434),r=i(8065),l=i(2435);i(4267);var o=i(4957),s=i(7296);let a=e=>"string"==typeof e,c=e=>"number"==typeof e&&!isNaN(e),d=e=>Array.isArray(e),h=e=>null!==e&&"object"==typeof e,p=e=>void 0===e||"object"==typeof e&&!e,u=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let n=t.map(e=>{if(h(e)||!a(e))return null!=e?e:Object.create(null);let t=Array.from(e.matchAll(/^[a-z-]*:\s*\w+;?/g)).map(e=>{let[t,i]=e.toString().replace(";","").split(":"),n=t.replace(/-(\w)/g,(e,t)=>t.toUpperCase());return[n,i]});return Object.fromEntries(t)});return Object.assign({},...n)},m=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter(Boolean).join(" ")},k=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return c(e)?"".concat(e).concat(t):e.replace(/(\d+).*?/g,(e,i)=>"".concat(i).concat(t))},v=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wisteria",i="".concat(t,"-").concat(e);return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!t.length)return i;let r=t.map(e=>e?a(e)?"".concat(i,"-").concat(e):d(e)?e.map(e=>!!e&&"".concat(i,"-").concat(e)):Object.entries(e).map((e,t)=>t?"".concat(i,"-").concat(e):""):e).flat(1);return m(...r)}}("divider"),y=v(),Z=e=>{let{style:t,dashed:i,children:n,insetSize:r,className:l,textAlign:a="center",variant:d="fullWidth",direction:h="horizontal"}=e;return(0,o.tZ)("div",{role:"separator","data-variant":d,className:m(l,y,v(h,!!n&&["with-children","text-".concat(a)])),style:u(!!i&&{borderStyle:"dashed"},c(r)&&{"--divider-inset-size":k(r)},t),children:p(n)?null:(0,s.l$)(n)?n:(0,o.tZ)("span",{className:v("text"),children:n})})};var x=i(9904),f=i(8838),g=i.n(f);let b=e=>{let{options:t}=e;return(0,o.tZ)("div",{className:"-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 "+g().container,children:(0,o.BX)("table",{className:"w-full border-collapse text-sm",children:[(0,o.tZ)("thead",{children:(0,o.BX)("tr",{className:"border-b py-4 text-left dark:border-neutral-700",children:[(0,o.tZ)("th",{className:"py-2 font-semibold",children:"属性"}),(0,o.tZ)("th",{className:"px-6 py-2 font-semibold",children:"说明"}),(0,o.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"类型"}),(0,o.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"默认值"})]})}),(0,o.tZ)("tbody",{className:"align-baseline text-gray-900 dark:text-gray-100",children:t.map((e,t)=>{let[i,n,r,l]=e;return(0,o.BX)("tr",{className:"border-b border-gray-100 dark:border-neutral-700/50",children:[(0,o.tZ)("td",{className:"py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500",children:i}),(0,o.tZ)("td",{className:"py-2 pl-6 whitespace-pre font-semibold leading-6 text-slate-500 dark:text-slate-400",children:n}),(0,o.tZ)("td",{className:"py-2 pl-6 whitespace-pre font-mono text-xs font-semibold text-violet-600 dark:text-violet-500",children:r}),(0,o.tZ)("td",{className:"py-2 pl-6 whitespace-pre font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400",children:null!=l?l:"-"})]},t)})})]})})};function N(e){let t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",h2:"h2"},(0,l.ah)(),e.components);return(0,n.BX)(n.HY,{children:[(0,n.tZ)(t.h1,{children:"Divider"}),"\n",(0,n.BX)(x.mQ,{items:["水平方向","垂直方向"],children:[(0,n.BX)(x.OK,{children:[(0,n.BX)("div",{class:"flex flex-col gap-4 text-justify",children:[(0,n.tZ)(t.p,{children:"Sunt incididunt non amet in cupidatat voluptate irure aliquip est labore\ndeserunt. Velit dolore exercitation pariatur adipisicing esse minim\noccaecat sunt duis non sit id. Eiusmod ipsum proident reprehenderit\neiusmod magna consectetur nulla sit veniam dolor ea ullamco deserunt in."}),(0,n.tZ)(Z,{variant:"middle",insetSize:32,children:"middle - 32px"}),(0,n.tZ)(t.p,{children:"In tempor et aliqua duis nostrud non id est commodo ad amet reprehenderit\nnon. Commodo incididunt ipsum sit deserunt quis do irure proident tempor\nnostrud adipisicing quis adipisicing aliqua. Lorem labore ea culpa minim\nmagna duis ipsum."}),(0,n.tZ)(Z,{variant:"inset",insetSize:32,children:"inset - 32px"}),(0,n.tZ)(t.p,{children:"Tempor consectetur aliqua ut laboris eu cupidatat sit aliquip labore sit\ncillum id ipsum. Nostrud dolore ea fugiat nisi aute deserunt reprehenderit\ncillum ipsum et ex aliquip."}),(0,n.tZ)(Z,{dashed:!0,variant:"fullWidth",children:"fullWidth - dashed"}),(0,n.tZ)(t.p,{children:"Ipsum anim culpa deserunt adipisicing in magna veniam aliqua in id do\nincididunt. Quis consequat esse dolore Lorem consequat Lorem id. Sint\neiusmod eiusmod irure cupidatat et exercitation minim. Irure dolor laboris\nculpa Lorem cillum velit culpa labore excepteur. Aliqua mollit duis cillum\nproident adipisicing duis sint cupidatat."}),(0,n.tZ)(Z,{textAlign:"left",children:"text left"}),(0,n.tZ)(t.p,{children:"Consectetur anim nisi eu tempor. Amet qui elit occaecat do irure. Sunt\nconsequat adipisicing dolore cillum laboris cillum nisi pariatur enim\ncommodo ad. Velit sit incididunt amet sint enim eiusmod non ullamco\nveniam."}),(0,n.tZ)(Z,{textAlign:"right",children:"text right"}),(0,n.tZ)(t.p,{children:"Irure enim ex ipsum minim sint elit consequat. Mollit dolore laborum\nveniam duis esse qui minim proident enim exercitation sint dolore. Amet\nlabore nostrud ipsum dolor pariatur duis ea reprehenderit. Nostrud anim ad\naliqua dolor non aute."})]}),(0,n.tZ)(t.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,n.BX)(t.code,{"data-language":"tsx","data-theme":"default",children:[(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Divider"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"middle"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"insetSize"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"32"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"children"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"middle - 32px"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:" "}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Divider"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"inset"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"insetSize"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"32"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"children"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"inset - 32px"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:" "}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Divider"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"dashed"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"fullWidth"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"children"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"fullWidth - dashed"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:" "}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Divider"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"textAlign"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"left"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"children"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"text left"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,n.tZ)(t.span,{className:"line",children:" "}),"\n",(0,n.BX)(t.span,{className:"line",children:[(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Divider"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"textAlign"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"right"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-function)"},children:"children"}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"text right"'}),(0,n.tZ)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})]})})]}),(0,n.tZ)(x.OK,{children:(0,n.BX)("div",{class:"flex flex-row justify-center gap-4 text-justify",children:[(0,n.tZ)(t.p,{children:"Ipsum anim culpa deserunt adipisicing in magna veniam aliqua in id do\nincididunt. Quis consequat esse dolore Lorem consequat Lorem id. Sint\neiusmod eiusmod irure cupidatat et exercitation minim.Consectetur ad\ndeserunt labore ut exercitation cupidatat aute amet sunt ad. Consectetur\nLorem aute est laboris Lorem non incididunt mollit tempor minim esse.\nIpsum pariatur sunt cillum amet est adipisicing culpa irure duis excepteur\nnostrud."}),(0,n.tZ)(Z,{dashed:!0,direction:"vertical",textAlign:"left",children:"vertical"}),(0,n.tZ)(t.p,{children:"Dolor enim ut duis in ad sint. Quis duis ea aute sunt labore ipsum esse\nreprehenderit adipisicing. Nisi dolore aliqua magna duis.Nisi sint dolor\nminim proident pariatur minim pariatur aliqua irure mollit dolor. Dolore\nvelit id do laboris exercitation. Ullamco nisi ullamco consectetur ut.\nEsse ullamco qui consequat cillum aliquip excepteur Lorem do sunt\nvoluptate. Amet incididunt exercitation nisi duis laborum consectetur."})]})})]}),"\n",(0,n.tZ)(t.h2,{id:"api",children:"API"}),"\n",(0,n.tZ)(b,{options:[["dashed","分割线采用虚线样式","boolean","-"],["variant","分割线的变体类型","inset | middle | fullWidth","fullWidth"],["direction","水平方向或垂直方向","horizontal | vertical","horizontal"],["textAlign","文字位置，当设置 children 时生效","left | center | right","center"],["insetSize","缩进大小，当 vatiant 不为 fullWidth 时生效","number","16px"],["className","自定义样式类名","string","-"],["style","自定义样式对象","string | JSX.CSSProperties","-"],["children","-","ComponentChild","-"]]})]})}var w=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,n.tZ)(t,{...e,children:(0,n.tZ)(N,{...e})}):N(e)},pageOpts:{filePath:"pages/display/Divider.mdx",route:"/display/Divider",headings:[{depth:1,value:"Divider",id:"divider"},{depth:2,value:"API",id:"api"}],title:"Divider"},pageNextRoute:"/display/Divider"})},8838:function(e){e.exports={container:"styles_container__PD_Iw"}}},function(e){e.O(0,[65,888,179],function(){return e(e.s=5024)}),_N_E=e.O()}]);