"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=o,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},11982:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,assets:()=>h,toc:()=>d,default:()=>p});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={id:"learn-transaction-fees",title:"Transaction Fees",sidebar_label:"Transaction Fees",description:"How transaction fees are calculated and handled.",slug:"../learn-transaction-fees"},l=void 0,c={unversionedId:"learn/learn-transaction-fees",id:"learn/learn-transaction-fees",title:"Transaction Fees",description:"How transaction fees are calculated and handled.",source:"@site/../docs/learn/learn-transaction-fees.md",sourceDirName:"learn",slug:"/learn-transaction-fees",permalink:"/ru-RU/docs/learn-transaction-fees",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-transaction-fees.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1644613532,formattedLastUpdatedAt:"11.02.2022",frontMatter:{id:"learn-transaction-fees",title:"Transaction Fees",sidebar_label:"Transaction Fees",description:"How transaction fees are calculated and handled.",slug:"../learn-transaction-fees"},sidebar:"docs",previous:{title:"How to transfer Balances",permalink:"/ru-RU/docs/learn-balance-transfers"},next:{title:"Polkadot Host (PH)",permalink:"/ru-RU/docs/learn-polkadot-host"}},h={},d=[{value:"Fee Calculation",id:"fee-calculation",level:2},{value:"Block Limits and Transaction Priority",id:"block-limits-and-transaction-priority",level:2},{value:"Fee Adjustment",id:"fee-adjustment",level:2},{value:"Shard Transactions",id:"shard-transactions",level:2},{value:"Other Resource Limitation Strategies",id:"other-resource-limitation-strategies",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Learn More",id:"learn-more",level:2}],u={toc:d};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Several resources in a blockchain network are limited, for example, storage and computation.\nTransaction fees prevent individual users from consuming too many resources. Polkadot uses a\nweight-based fee model as opposed to a gas-metering model. As such, fees are charged prior to\ntransaction execution; once the fee is paid, nodes will execute the transaction."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://w3f-research.readthedocs.io/en/latest/polkadot/overview/2-token-economics.html?highlight=transaction%20fee"},"Web3 Foundation Research"),"\ndesigned the Polkadot fee system with the following objectives:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each Relay Chain block should be processed efficiently to avoid delays in block production."),(0,r.kt)("li",{parentName:"ul"},"The growth rate of the Relay Chain should be bounded."),(0,r.kt)("li",{parentName:"ul"},"Each block should have space for special, high-priority transactions like misconduct reports."),(0,r.kt)("li",{parentName:"ul"},"The system should be able to handle spikes in demand."),(0,r.kt)("li",{parentName:"ul"},"Fees should change slowly so that senders can accurately predict the fee for a given transaction.")),(0,r.kt)("h2",{id:"fee-calculation"},"Fee Calculation"),(0,r.kt)("p",null,"Fees on the Polkadot Relay Chain are calculated based on three parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Weight fee",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Base weight"),(0,r.kt)("li",{parentName:"ul"},"Call(s) weight"))),(0,r.kt)("li",{parentName:"ul"},"A Length fee"),(0,r.kt)("li",{parentName:"ul"},"A Tip (optional).")),(0,r.kt)("p",null,"Weights are a fixed set of numbers used in Substrate-based chains to manage the time it\ntakes to validate a block. Each transaction has a base weight that accounts for the overhead\nof inclusion (e.g. signature verification) and a dispatch weight that\naccounts for the time to execute the transaction. All weights, even the base weight,\nare a measure of time to execute on some standard hardware."),(0,r.kt)("p",null,"The runtime\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/how-to-guides/v3/weights/calculate-fees/"},"converts weight units to balance units"),"\nas part of the fee calculation."),(0,r.kt)("p",null,"The weight fee is the sum of the base weight and the sum of the total weight consumed by\ncall(s). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A transaction can include several calls. For instance, a ",(0,r.kt)("inlineCode",{parentName:"p"},"batch")," can contain ",(0,r.kt)("inlineCode",{parentName:"p"},"bond")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nominate"),",\nand the weight would be one base weight and then the sum of the weights for ",(0,r.kt)("inlineCode",{parentName:"p"},"bond")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nominate"),".")),(0,r.kt)("p",null,"To learn more about the motivation of a weight fee, check out this\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/weight/"},"Substrate doc")," on weights."),(0,r.kt)("p",null,"The length fee is a per-byte fee multiplier for the size of the transaction in bytes."),(0,r.kt)("p",null,"There is also a targeted fee adjustment that serves as a multiplier which tunes the\nfinal fee based on network congestion. This can constitute an adjusted weight fee calculated\nas the targeted fee adjustment times the weight fee."),(0,r.kt)("p",null,"Together, these fees constitute the inclusion fee. The inclusion fee is the\nbase fee plus the length fee plus the adjusted weight fee."),(0,r.kt)("p",null,"The inclusion fee is deducted from the sender's account before transaction execution.\nA portion of the fee will go to the block author, and the remainder will go to the\n",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-treasury"},"Treasury"),". This is 20% and 80%, respectively."),(0,r.kt)("p",null,"Tips are an optional transaction fee that users can add. Tips are not part of the inclusion\nfee and are an incentive to block authors for prioritizing a transaction, and the entire\ntip goes directly to the block author."),(0,r.kt)("h2",{id:"block-limits-and-transaction-priority"},"Block Limits and Transaction Priority"),(0,r.kt)("p",null,"Blocks in Polkadot have both a maximum length (in bytes) and a maximum weight. Block producers will\nfill blocks with transactions up to these limits. A portion of each block - currently 25% - is\nreserved for critical transactions that are related to the chain's operation. Block producers will\nonly fill up to 75% of a block with normal transactions. Some examples of operational transactions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Misbehavior reports"),(0,r.kt)("li",{parentName:"ul"},"Council operations"),(0,r.kt)("li",{parentName:"ul"},"Member operations in an election (e.g. renouncing candidacy)")),(0,r.kt)("p",null,"Block producers prioritize transactions based on each transaction's total fee. Since a portion of\nthe fee will go to the block producer, producers will include the transactions with the highest fees\nto maximize their reward."),(0,r.kt)("h2",{id:"fee-adjustment"},"Fee Adjustment"),(0,r.kt)("p",null,"Transaction volume on blockchains is highly irregular, and therefore transaction fees need a\nmechanism to adjust. However, users should be able to predict transaction fees."),(0,r.kt)("p",null,"Polkadot uses a slow-adjusting fee mechanism with tips to balance these two considerations. In\naddition to block ",(0,r.kt)("em",{parentName:"p"},"limits"),", Polkadot also has a block fullness ",(0,r.kt)("em",{parentName:"p"},"target.")," Fees increase or decrease\nfor the next block based on the fullness of the current block relative to the target. The per-weight\nfee can change up to 30% in a 24 hour period. This rate captures long-term trends in demand, but not\nshort-term spikes. To consider short-term spikes, Polkadot uses tips on top of the length and weight\nfees. Users can optionally add a tip to the fee to give the transaction a higher priority."),(0,r.kt)("h2",{id:"shard-transactions"},"Shard Transactions"),(0,r.kt)("p",null,"The transactions that take place within Polkadot's shards - parachains and parathreads - do not\nincur Relay Chain transaction fees. Users of shard applications do not even need to hold DOT tokens,\nas each shard has its own economic model and may or may not have a token. There are, however,\nsituations where shards themselves make transactions on the Relay Chain."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-parachains"},"Parachains")," have a dedicated slot on the Relay Chain for execution, so their\ncollators do not need to own DOT in order to include blocks. The parachain will make some\ntransactions itself, for example, opening or closing an ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-crosschain"},"XCM")," channel,\nparticipating in an ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-auction"},"auction")," to renew its slot, or upgrading its runtime.\nParachains have their own accounts on the Relay Chain and will need to use those funds to issue\ntransactions on the parachain's behalf."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-parathreads"},"Parathreads")," will also make all the same transactions that a parachain might.\nIn addition, the collators need to participate in an auction every block to progress their chain.\nThe collators will need to have DOT to participate in these auctions."),(0,r.kt)("h2",{id:"other-resource-limitation-strategies"},"Other Resource Limitation Strategies"),(0,r.kt)("p",null,"Transaction weight must be computable prior to execution, and therefore can only represent fixed\nlogic. Some transactions warrant limiting resources with other strategies. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bonds: Some transactions, like voting, may require a bond that will be returned or slashed after\nan on-chain event. In the voting example, returned at the end of the election or slashed if the\nvoter tried anything malicious."),(0,r.kt)("li",{parentName:"ul"},"Deposits: Some transactions, like setting an ",(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-identity"},"identity")," or claiming an index,\nuse storage space indefinitely. These require a deposit that will be returned if the user decides\nto free storage (e.g. clear their IDE)."),(0,r.kt)("li",{parentName:"ul"},"Burns: A transaction may burn funds internally based on its logic. For example, a transaction may\nburn funds from the sender if it creates new storage entries, thus increasing the state size."),(0,r.kt)("li",{parentName:"ul"},"Limits: Some limits are part of the protocol. For example, nominators can only nominate 16\nvalidators. This limits the complexity of ",(0,r.kt)("a",{parentName:"li",href:"/ru-RU/docs/learn-phragmen"},"Phragm\xe9n"),".")),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,'This page only covered transactions that come from normal users. If you look at blocks in a block\nexplorer, though, you may see some "extrinsics" that look different from these transactions. In\nPolkadot (and any chain built on Substrate), an extrinsic is a piece of information that comes from\noutside the chain. Extrinsics fall into three categories:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Signed transactions"),(0,r.kt)("li",{parentName:"ul"},"Unsigned transactions"),(0,r.kt)("li",{parentName:"ul"},"Inherents")),(0,r.kt)("p",null,"This page only covered signed transactions, which is the way that most users will interact with\nPolkadot. Signed transactions come from an account that has funds, and therefore Polkadot can charge\na transaction fee as a way to prevent spam."),(0,r.kt)("p",null,"Unsigned transactions are for special cases where a user needs to submit an extrinsic from a key\npair that does not control funds. For example, when users\n",(0,r.kt)("a",{parentName:"p",href:"https://claims.polkadot.network"},"claim their DOT tokens")," after genesis, their DOT address doesn't\nhave any funds yet, so that uses an unsigned transaction. Validators also submit unsigned\ntransactions in the form of \"heartbeat\" messages to indicate that they are online. These heartbeats\nmust be signed by one of the validator's ",(0,r.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-keys"},"session keys"),". Session keys never control\nfunds. Unsigned transactions are only used in special cases because, since Polkadot cannot charge a\nfee for them, each one needs its own, custom validation logic."),(0,r.kt)("p",null,'Finally, inherents are pieces of information that are not signed or included in the transaction\nqueue. As such, only the block author can add inherents to a block. Inherents are assumed to be\n"true" simply because a sufficiently large number of validators have agreed on them being\nreasonable. For example, Polkadot blocks include a timestamp inherent. There is no way to prove that\na timestamp is true the way one proves the desire to send funds with a signature. Rather, validators\naccept or reject the block based on how reasonable they find the timestamp. In Polkadot, it must be\nwithin some acceptable range of their own system clocks.'),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/overview/2-token-economics.html"},"Web3 Foundation Research")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/v3/concepts/weight/"},"Substrate Weights")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/v3/runtime/weights-and-fees/"},"Substrate Fees")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/v3/concepts/extrinsics/"},"Extrinsics"))))}p.isMDXComponent=!0}}]);