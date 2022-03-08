"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6827],{3905:(a,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>k});var n=e(67294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function s(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t){if(null==a)return{};var e,n,r=function(a,t){if(null==a)return{};var e,n,r={},s=Object.keys(a);for(n=0;n<s.length;n++)e=s[n],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)e=s[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var o=n.createContext({}),c=function(a){var t=n.useContext(o),e=t;return a&&(e="function"==typeof a?a(t):i(i({},t),a)),e},d=function(a){var t=c(a.components);return n.createElement(o.Provider,{value:t},a.children)},u={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(a,t){var e=a.components,r=a.mdxType,s=a.originalType,o=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),g=c(e),k=r,m=g["".concat(o,".").concat(k)]||g[k]||u[k]||s;return e?n.createElement(m,i(i({ref:t},d),{},{components:e})):n.createElement(m,i({ref:t},d))}));function k(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var s=e.length,i=new Array(s);i[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=a,l.mdxType="string"==typeof a?a:r,i[1]=l;for(var c=2;c<s;c++)i[c]=e[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}g.displayName="MDXCreateElement"},81807:(a,t,e)=>{e.r(t),e.d(t,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>c,assets:()=>d,toc:()=>u,default:()=>k});var n=e(87462),r=e(63366),s=(e(67294),e(3905)),i=["components"],l={id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",slug:"../../kusama-getting-started"},o=void 0,c={unversionedId:"general/kusama/kusama-getting-started",id:"general/kusama/kusama-getting-started",title:"Interact with Kusama",description:"Reference point for Kusama content.",source:"@site/../docs/general/kusama/kusama-getting-started.md",sourceDirName:"general/kusama",slug:"/kusama-getting-started",permalink:"/docs/kusama-getting-started",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/kusama/kusama-getting-started.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1644313931,formattedLastUpdatedAt:"2/8/2022",frontMatter:{id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",slug:"../../kusama-getting-started"}},d={},u=[{value:"Polkadot&#39;s Canary Network",id:"polkadots-canary-network",level:3},{value:"Kusama Gifts",id:"kusama-gifts",level:3}],g={toc:u};function k(a){var t=a.components,e=(0,r.Z)(a,i);return(0,s.kt)("wrapper",(0,n.Z)({},g,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"polkadots-canary-network"},"Polkadot's Canary Network"),(0,s.kt)("p",null,"Kusama is a ",(0,s.kt)("em",{parentName:"p"},"canary network")," for Polkadot; an earlier release of the code that is available first and\nholds real economic value. For developers, Kusama is a proving ground for runtime upgrades, on-chain\ngovernance, and parachains."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"No Promises"),"."),(0,s.kt)("p",null,"Kusama is owned by those who hold the Kusama tokens (KSM). There's no central kill switch and\nall changes are made through the protocol's on-chain governance. "),(0,s.kt)("p",null,"Kusama is experimental. "),(0,s.kt)("p",null,"The network is a permissionless and anyone can come along and start using it.\nThose who participated in the Polkadot sale can claim a proportional amount of KSM through\nthe ",(0,s.kt)("a",{parentName:"p",href:"/docs/kusama-claims"},"Kusama Claims process"),"."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"As a KSM holder, you can interact with all the features of the Kusama network such as\nstaking (i.e. validating or nominating), governance, parachain auctions, basic transfers and\neverything else.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Expect Chaos"),"."),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-account-generation"},(0,s.kt)("img",{src:"/img/kusama-guide/Account.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Creating an Account")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-balance-transfers"},(0,s.kt)("img",{src:"/img/kusama-guide/Transfer.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Balance Transfers")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-staking"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Stake.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Staking"))))),(0,s.kt)("br",null),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-parachains"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Parachain.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Parachains")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-bridges"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Bridges.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Bridges")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../maintain-guides-how-to-vote-councillor"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Voting.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Vote for Councilors"))))),(0,s.kt)("br",null),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-treasury#creating-the-proposal"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Proposal.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Make Proposals")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../maintain-guides-how-to-join-council#submit-candidacy"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Council.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Council Candidacy")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-treasury"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Treasury.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Treasury"))))),(0,s.kt)("br",null),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-identity"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Identity.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Set an Identity")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../maintain-guides-how-to-nominate-kusama"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Nominate.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Become a Nominator")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-proxies"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Proxy.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Proxy Accounts"))))),(0,s.kt)("br",null),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../learn-crowdloans/"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Crowdloans.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Participate in Crowdloans")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../maintain-guides-society-kusama"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Kusama-Society.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Join Kappa Sigma Mu")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"../ambassadors"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Ambassadors.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Become an Ambassador"))))),(0,s.kt)("br",null),(0,s.kt)("p",null,"For brand-new learners of Kusama's cousin network, Polkadot, please head over to the\n",(0,s.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/"},"Polkadot Wiki"),"."),(0,s.kt)("h3",{id:"kusama-gifts"},"Kusama Gifts"),(0,s.kt)("img",{align:"right",src:"/img/kusama-gift.png",width:"210",height:"200"}),(0,s.kt)("p",null,"Kusama Gifts provide an easy way to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Onboard friends or family who are curious about blockchain but haven\u2019t made the leap yet."),(0,s.kt)("li",{parentName:"ul"},"Share your love of Kusama and send any amount of KSM."),(0,s.kt)("li",{parentName:"ul"},"Say \u2018thank you\u2019 or send someone tokens when you don\u2019t know their address."),(0,s.kt)("li",{parentName:"ul"},"Get friends and family set up to participate in crowdloans.")),(0,s.kt)("p",null,"Learn more about how you can create and send Kusama Gifts ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/introducing-polkadot-kusama-gifts/"},"here"),"."),(0,s.kt)("p",null,"While Kusama does not support smart contracts natively, building apps on it is still possible\n(e.g. ",(0,s.kt)("a",{parentName:"p",href:"https://rmrk.app"},"RMRK.app"),"). If you're interested in diving deeper into ",(0,s.kt)("em",{parentName:"p"},"proper")," development,\nhowever, check out the ",(0,s.kt)("a",{parentName:"p",href:"/docs/build-index"},"builders guide"),"."))}k.isMDXComponent=!0}}]);