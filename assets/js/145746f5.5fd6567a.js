"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[691],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(m,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(c,o(o({ref:e},s),{},{components:a})):n.createElement(c,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30536:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>i,contentTitle:()=>m,metadata:()=>p,toc:()=>s,default:()=>u});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",slug:"../maintain-polkadot-parameters"},m=void 0,p={unversionedId:"maintain/maintain-polkadot-parameters",id:"maintain/maintain-polkadot-parameters",title:"Polkadot Parameters",description:"A description about fundamental Polkadot parameters.",source:"@site/../docs/maintain/maintain-polkadot-parameters.md",sourceDirName:"maintain",slug:"/maintain-polkadot-parameters",permalink:"/docs/maintain-polkadot-parameters",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-polkadot-parameters.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1634966829,formattedLastUpdatedAt:"10/23/2021",frontMatter:{id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",slug:"../maintain-polkadot-parameters"},sidebar:"docs",previous:{title:"Network Maintainers",permalink:"/docs/maintain-index"},next:{title:"Set up a Full Node",permalink:"/docs/maintain-sync"}},s=[{value:"Periods of common actions and attributes",id:"periods-of-common-actions-and-attributes",children:[],level:3},{value:"Governance",id:"governance",children:[],level:3},{value:"Staking, Validating, and Nominating",id:"staking-validating-and-nominating",children:[],level:3},{value:"Treasury",id:"treasury",children:[],level:3},{value:"Precision",id:"precision",children:[],level:3}],d={toc:s};function u(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Many of these parameter values can be updated via on-chain governance. If you require absolute\ncertainty of these parameter values, it is recommended you directly check the constants by looking\nat the ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"chain state")," and/or\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"storage"),"."),(0,l.kt)("h3",{id:"periods-of-common-actions-and-attributes"},"Periods of common actions and attributes"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE: Polkadot generally runs at ","\xbc","th the speed of Kusama, except in the time slot duration\nitself. See ",(0,l.kt)("a",{parentName:"em",href:"../general/kusama/kusama-parameters"},"Kusama Parameters")," for more details on how Polkadot's parameters\ndiffer from Kusama's.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.kt)("li",{parentName:"ul"},"Epoch: 4 hours (2_400 slots x 6 seconds)"),(0,l.kt)("li",{parentName:"ul"},"Session: 4 hours (Session and Epoch lengths are the same)"),(0,l.kt)("li",{parentName:"ul"},"Era: 24 hours (6 sessions per Era, 2_400 slots x 6 epochs x 6 seconds)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slot"),(0,l.kt)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Epoch"),(0,l.kt)("td",{parentName:"tr",align:null},"4 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"2_400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Session"),(0,l.kt)("td",{parentName:"tr",align:null},"4 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"2_400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Era"),(0,l.kt)("td",{parentName:"tr",align:null},"24 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400")))),(0,l.kt)("p",null,"*",(0,l.kt)("em",{parentName:"p"},"A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without\na block in the chain. Thus, the times given are ",(0,l.kt)("em",{parentName:"em"},"estimates"),". See ",(0,l.kt)("a",{parentName:"em",href:"/docs/learn-consensus"},"Consensus")," for\nmore details.")),(0,l.kt)("h3",{id:"governance"},"Governance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Democracy"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Launch period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can select which proposal to hold a referendum on, i.e., every week, the highest-weighted proposal will be selected to have a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Council"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of a council member's term until the next election round.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The council's voting period for motions.")))),(0,l.kt)("p",null,"The Polkadot Council consists of up to 13 members and up to 20 runners up."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Technical committee"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cool-off period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The time a veto from the technical committee lasts before the proposal can be submitted again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emergency voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"3 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"1_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The voting period after the technical committee expedites voting.")))),(0,l.kt)("h3",{id:"staking-validating-and-nominating"},"Staking, Validating, and Nominating"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/108"},"Motion #108")," proposed new nomination limits to the Polkadot network, offering a temporary solution to increase the stability and security of the network. Note that this motion ",(0,l.kt)("strong",{parentName:"p"},"does not")," increase the maximum nominator count (22_500). This motion got enacted as a referendum and the value of the minimum nominator bond is updated from 80 DOTs to 120 DOTs. As most of these parameters can be updated via on-chain governance, please check the latest parameters on\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"chain state")," (selected state query -> staking -> minimumNominatorBond and maxNominatorsCount)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to Phragm\xe9n's method.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.')))),(0,l.kt)("h3",{id:"treasury"},"Treasury"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Treasury"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.kt)("td",{parentName:"tr",align:null},"24 days"),(0,l.kt)("td",{parentName:"tr",align:null},"345_600"),(0,l.kt)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.kt)("p",null,"Burn percentage is currently ",(0,l.kt)("inlineCode",{parentName:"p"},"1.00%"),"."),(0,l.kt)("h3",{id:"precision"},"Precision"),(0,l.kt)("p",null,"DOT have 10 decimals of precision. In other words, 10 ","*","*"," 10 (10_000_000_000 or ten billion)\nPlancks make up a DOT."),(0,l.kt)("p",null,"The denomination of DOT was changed from 12 decimals of precision at block #1",(0,l.kt)("em",{parentName:"p"},"248_328 in an event\nknown as ","_","Denomination Day"),". See ",(0,l.kt)("a",{parentName:"p",href:"/docs/redenomination"},"Redenomination")," for details."))}u.isMDXComponent=!0}}]);