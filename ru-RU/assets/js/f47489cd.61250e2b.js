"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11611:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,assets:()=>d,toc:()=>c,default:()=>h});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades",description:"Learn about how runtime upgrades work on Polkadot.",slug:"../learn-runtime-upgrades"},s="Runtime Upgrades",u={unversionedId:"learn/learn-runtime-upgrades",id:"learn/learn-runtime-upgrades",title:"Runtime Upgrades",description:"Learn about how runtime upgrades work on Polkadot.",source:"@site/../docs/learn/learn-runtime-upgrades.md",sourceDirName:"learn",slug:"/learn-runtime-upgrades",permalink:"/ru-RU/docs/learn-runtime-upgrades",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-runtime-upgrades.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1634966829,formattedLastUpdatedAt:"23.10.2021",frontMatter:{id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades",description:"Learn about how runtime upgrades work on Polkadot.",slug:"../learn-runtime-upgrades"},sidebar:"docs",previous:{title:"How to use W3F Registrar",permalink:"/ru-RU/docs/learn-registrar"},next:{title:"Parachains",permalink:"/ru-RU/docs/learn-parachains"}},d={},c=[{value:"Forkless Upgrades",id:"forkless-upgrades",level:2},{value:"New Client Releases",id:"new-client-releases",level:2},{value:"Runtime Upgrades for Various Users",id:"runtime-upgrades-for-various-users",level:2},{value:"For Infrastructure Providers",id:"for-infrastructure-providers",level:3},{value:"For Nominators",id:"for-nominators",level:3},{value:"Monitoring Changes",id:"monitoring-changes",level:2}],p={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runtime-upgrades"},"Runtime Upgrades"),(0,o.kt)("p",null,"Runtime upgrades allow Polkadot to change the logic of the chain, without the need for a hard fork."),(0,o.kt)("h2",{id:"forkless-upgrades"},"Forkless Upgrades"),(0,o.kt)("p",null,'You may have come across the term "hard fork" before in the blockchain space. A ',(0,o.kt)("strong",{parentName:"p"},"hard fork")," occurs\nwhen a blockchain's logic changes such that nodes that do not include the new changes will not be\nable to remain in consensus with nodes that do. Such changes are backward incompatible. Hard forks\ncan be political due to the nature of the upgrades, as well as logistically onerous due to the\nnumber (potentially thousands) of nodes in the network that need to upgrade their software."),(0,o.kt)("p",null,'Rather than encode the runtime (a chain\'s "business logic") in the nodes, Polkadot nodes contain a\nWebAssembly ',(0,o.kt)("a",{parentName:"p",href:"learn-polkadot-host"},"execution host"),". They maintain consensus on a very low level and\nwell-established instruction set. The Polkadot runtime is stored on the Polkadot blockchain itself."),(0,o.kt)("p",null,"As such, Polkadot can upgrade its runtime by upgrading the logic stored on-chain, and removes the\ncoordination challenge of requiring thousands of node operators to upgrade in advance of a given\nblock number. Polkadot stakeholders propose and approve upgrades through the\n",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-governance"},"on-chain governance")," system, which also enacts them autonomously."),(0,o.kt)("h2",{id:"new-client-releases"},"New ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/paritytech/polkadot/releases"},"Client Releases")),(0,o.kt)("p",null,"The existing runtime logic is followed to update the ",(0,o.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-wasm"},"Wasm")," runtime stored on the\nblockchain to a new version. The upgrade is then included in the blockchain itself, meaning that all\nthe nodes on the network execute it. Generally, there is no need to upgrade your nodes manually\nbefore the runtime upgrade as they will automatically start to follow the new logic of the chain.\nNodes only need to be updated when the runtime requires new host functions or there is a change in\nnetworking or consensus."),(0,o.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou don't think you can submit a transaction before the upgrade, it is better to wait and construct\nit after the upgrade takes place."),(0,o.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading promptly, especially for high priority or critical\nreleases."),(0,o.kt)("h2",{id:"runtime-upgrades-for-various-users"},"Runtime Upgrades for Various Users"),(0,o.kt)("h3",{id:"for-infrastructure-providers"},"For Infrastructure Providers"),(0,o.kt)("p",null,"Infrastructure services include but are not limited to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ru-RU/docs/maintain-guides-how-to-upgrade"},"Validators")),(0,o.kt)("li",{parentName:"ul"},"API services"),(0,o.kt)("li",{parentName:"ul"},"Node-as-a-Service (NaaS)"),(0,o.kt)("li",{parentName:"ul"},"General infrastructure management (e.g. block explorers, custodians)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ru-RU/docs/build-wallets"},"Wallets"))),(0,o.kt)("p",null,"For validators, keeping in sync with the network is key. At times, upgrades will require validators\nto upgrade their clients within a specific time frame, for example if a release includes breaking\nchanges to networking. It is essential to check the release notes, starting with the upgrade\npriority and acting accordingly."),(0,o.kt)("p",null,"General infrastructure providers, aside from following the Polkadot releases and upgrading in a\ntimely manner, should monitor changes to runtime events and auxiliary tooling, such as the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar"),"."),(0,o.kt)("p",null,"Transactions constructed for runtime ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," will not work for runtimes ",(0,o.kt)("inlineCode",{parentName:"p"},">n"),". If a runtime upgrade\noccurs before broadcasting a previously constructed transaction, you will need to reconstruct it with\nthe appropriate runtime version and corresponding metadata."),(0,o.kt)("h3",{id:"for-nominators"},"For ",(0,o.kt)("a",{parentName:"h3",href:"/ru-RU/docs/maintain-guides-how-to-nominate-polkadot"},"Nominators")),(0,o.kt)("p",null,"Runtime upgrades don't require any actions by a nominator, though it is always encouraged to keep\nup-to-date and participate with the latest runtime upgrade motions and releases, while keeping an\neye on how the nodes on the network are reacting to a new upgrade."),(0,o.kt)("h2",{id:"monitoring-changes"},"Monitoring Changes"),(0,o.kt)("p",null,"You can monitor the chain for upcoming upgrades. The client release notes include the hashes of any\nproposals related to any on-chain upgrades for easy matching. Monitor the chain for:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"democracy(Started)")," events and log ",(0,o.kt)("inlineCode",{parentName:"li"},"index")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"blockNumber"),". This event indicates that a\nreferendum has started (although does not mean that it is a runtime upgrade). Get the referendum\ninfo","*","; it should have a status of ",(0,o.kt)("inlineCode",{parentName:"li"},"Ongoing"),". Find the ending block number (",(0,o.kt)("inlineCode",{parentName:"li"},"end"),") and the\nenactment ",(0,o.kt)("inlineCode",{parentName:"li"},"delay")," (delay). If the referendum passes, it will execute on block number ",(0,o.kt)("inlineCode",{parentName:"li"},"end +\ndelay"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"democracy(Passed)"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"democracy(NotPassed)"),", or, ",(0,o.kt)("inlineCode",{parentName:"li"},"democracy(Cancelled)")," events citing the index.\nIf ",(0,o.kt)("inlineCode",{parentName:"li"},"Passed"),", you need to look at the ",(0,o.kt)("inlineCode",{parentName:"li"},"scheduler(Scheduled)")," event in the same block for the\nenactment block."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"democracy(PreimageNoted)")," events with the same hash as the ",(0,o.kt)("inlineCode",{parentName:"li"},"ReferendumInfoOf(index)")," item. This\nmay be up to the last block before execution, but it will not work if this is missing."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"democracy(Executed)")," events for actual execution. In the case of a runtime upgrade, there will\nalso be a ",(0,o.kt)("inlineCode",{parentName:"li"},"system(CodeUpdated)")," event.")),(0,o.kt)("p",null,"You can also monitor ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/"},"Polkassembly")," for discussions on on-chain\nproposals and referenda."),(0,o.kt)("p",null,"*"," E.g. via ",(0,o.kt)("inlineCode",{parentName:"p"},"pallets/democracy/storage/ReferendumInfoOf?key1=index&at=blockNumber")," on Sidecar."))}h.isMDXComponent=!0}}]);