var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/data-tables/base/example.jsx.js"]=function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],m=0,d=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(s&&s(t);d.length;)d.shift()();return r.push.apply(r,u||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],a=!0,c=1;c<l.length;c++){var i=l[c];0!==n[i]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=l[0]))}return e}var a={},n={52:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},r=[];function o(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=a,o.d=function(e,t,l){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(o.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(l,a,function(t){return e[t]}.bind(null,a));return l},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;return r.push([623,0]),l()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},623:function(e,t,l){"use strict";l.r(t),l.d(t,"examples",(function(){return o}));var a=l(0),n=l.n(a),r=l(3);t.default=n.a.createElement(r.s,{isBordered:!0,hasCellBuffer:!0,type:"base",ariaLabel:"Example default base table of Opportunities"},n.a.createElement(r.q,null,n.a.createElement(r.g,null)),n.a.createElement(r.o,null,n.a.createElement(r.l,{title:"Cloudhub"}),n.a.createElement(r.l,{title:"Cloudhub + Anypoint Connectors"})));var o=[{id:"data-table-striped-rows",label:"With striped rows",element:n.a.createElement(r.s,{isBordered:!0,isStriped:!0,hasCellBuffer:!0,type:"base",ariaLabel:"Example table of Opportunities with striped rows"},n.a.createElement(r.q,null,n.a.createElement(r.g,null)),n.a.createElement(r.o,null,n.a.createElement(r.l,{title:"Cloudhub"}),n.a.createElement(r.l,{title:"Cloudhub + Anypoint Connectors"}),n.a.createElement(r.l,{title:"Cloudhub"})))},{id:"data-table-no-hover",label:"With no row hovers",element:n.a.createElement(r.s,{isBordered:!0,hasCellBuffer:!0,hasNoRowHover:!0,type:"base",ariaLabel:"Example table of Opportunities with no row hovers"},n.a.createElement(r.q,null,n.a.createElement(r.g,null)),n.a.createElement(r.o,null,n.a.createElement(r.l,{title:"Cloudhub"}),n.a.createElement(r.l,{title:"Cloudhub + Anypoint Connectors"})))},{id:"data-table-vertical-borders",label:"With vertical borders",element:n.a.createElement(r.s,{isBordered:!0,isColBordered:!0,hasCellBuffer:!0,type:"base",ariaLabel:"Example table of Opportunities with vertical borders"},n.a.createElement(r.q,null,n.a.createElement(r.g,null)),n.a.createElement(r.o,null,n.a.createElement(r.l,{title:"Cloudhub"}),n.a.createElement(r.l,{title:"Cloudhub + Anypoint Connectors"})))},{id:"single-column",label:"Single Column",element:n.a.createElement(r.s,{isBordered:!0,hasCellBuffer:!0,type:"base",ariaLabel:"Example table of Opportunities with a single column"},n.a.createElement(r.q,null,n.a.createElement(r.r,null,n.a.createElement(r.c,null,n.a.createElement(r.b,{columnName:"Opportunity Name"})))),n.a.createElement(r.o,null,n.a.createElement(r.p,null,n.a.createElement(r.t,{"data-label":"Opportunity Name",type:"base"},n.a.createElement(r.j,{cellLink:!0,cellText:"Cloudhub"}))),n.a.createElement(r.p,null,n.a.createElement(r.t,{"data-label":"Opportunity Name",type:"base"},n.a.createElement(r.j,{cellLink:!0,cellText:"Cloudhub + Anypoint Connectors"})))))},{id:"no-borders",label:"No borders",element:n.a.createElement(r.s,{isStriped:!0,hasCellBuffer:!0,type:"base",ariaLabel:"Example table of Opportunities with no borders"},n.a.createElement(r.q,null,n.a.createElement(r.g,null)),n.a.createElement(r.o,null,n.a.createElement(r.l,{title:"Cloudhub"}),n.a.createElement(r.l,{title:"Cloudhub + Anypoint Connectors"}),n.a.createElement(r.l,{title:"Cloudhub"})))},{id:"headless",label:"Headless",element:n.a.createElement(r.s,{hasHiddenHeader:!0,isBordered:!0,hasCellBuffer:!0,type:"base",ariaLabel:"Example headless table of Opportunities"},n.a.createElement(r.q,{isHidden:!0},n.a.createElement(r.g,null)),n.a.createElement(r.o,null,n.a.createElement(r.l,{title:"Cloudhub"}),n.a.createElement(r.l,{title:"Cloudhub + Anypoint Connectors"}),n.a.createElement(r.l,{title:"Cloudhub"})))},{id:"headless-no-borders",label:"Headless with no borders",element:n.a.createElement(r.s,{hasHiddenHeader:!0,hasCellBuffer:!0,type:"base",ariaLabel:" Example headless table of Opportunities with no borders "},n.a.createElement(r.q,{isHidden:!0},n.a.createElement(r.g,null)),n.a.createElement(r.o,null,n.a.createElement(r.l,{title:"Cloudhub"}),n.a.createElement(r.l,{title:"Cloudhub + Anypoint Connectors"}),n.a.createElement(r.l,{title:"Cloudhub"})))},{id:"cell-content-truncated",label:"Cell content truncated",demoStyles:"max-width: 600px;",storybookStyles:!0,element:n.a.createElement(r.s,{isBordered:!0,isStriped:!0,hasCellBuffer:!0,isFixedLayout:!0,type:"base",ariaLabel:" Example headless table of Opportunities with cell content truncated "},n.a.createElement(r.q,null,n.a.createElement(r.r,null,n.a.createElement(r.c,null,n.a.createElement(r.b,{columnName:"Typical Column Header"})),n.a.createElement(r.c,null,n.a.createElement(r.b,{columnName:"Truncated, no wrap"})),n.a.createElement(r.c,null,n.a.createElement(r.b,{columnName:"Typical Column Header"})))),n.a.createElement(r.o,null,n.a.createElement(r.p,null,n.a.createElement(r.m,{"data-label":"Typical Column Header"},n.a.createElement(r.j,{cellText:"Typical cell content"})),n.a.createElement(r.t,{"data-label":"Truncated, no wrap",type:"base",hasWrap:!0},n.a.createElement(r.j,{cellText:r.u})),n.a.createElement(r.t,{"data-label":"Typical Column Header",type:"base"},n.a.createElement(r.j,{cellText:"Typical cell content"})))))},{id:"cell-content-wrapped",label:"Cell content wrapped",demoStyles:"max-width: 600px;",storybookStyles:!0,element:n.a.createElement(r.s,{isBordered:!0,isStriped:!0,hasCellBuffer:!0,isFixedLayout:!0,type:"base",ariaLabel:" Example headless table of Opportunities with cell content wrapped "},n.a.createElement(r.q,null,n.a.createElement(r.r,null,n.a.createElement(r.c,null,n.a.createElement(r.b,{columnName:"Typical Column Header"})),n.a.createElement(r.c,null,n.a.createElement(r.b,{columnName:"Wrapped, line clamped"})),n.a.createElement(r.c,null,n.a.createElement(r.b,{columnName:"Typical Column Header"})))),n.a.createElement(r.o,null,n.a.createElement(r.p,null,n.a.createElement(r.m,{"data-label":"Typical Column Header"},n.a.createElement(r.j,{cellText:"Typical cell content"})),n.a.createElement(r.t,{"data-label":"Wrapped, line clamped",type:"base",hasWrap:!0},n.a.createElement(r.j,{cellText:r.u,hasWrap:!0})),n.a.createElement(r.t,{"data-label":"Typical Column Header",type:"base"},n.a.createElement(r.j,{cellText:"Typical cell content"})))))},{id:"data-table-aria-labelledby",label:"Using aria-labelledby instead of aria-label",element:n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{id:"element-with-table-label",className:"slds-text-heading_medium slds-m-bottom_xx-small"},"Example data table of Opportunities"),n.a.createElement("h3",{id:"other-element-with-table-label",className:"slds-text-title slds-m-bottom_small"},"Using ",n.a.createElement("code",null,"aria-labelledby"),", instead of aria-label"),n.a.createElement(r.s,{isBordered:!0,hasCellBuffer:!0,type:"base",ariaLabelledBy:"element-with-table-label other-element-with-table-label"},n.a.createElement(r.q,null,n.a.createElement(r.g,null)),n.a.createElement(r.o,null,n.a.createElement(r.l,{title:"Cloudhub"}),n.a.createElement(r.l,{title:"Cloudhub + Anypoint Connectors"}))))}]}});