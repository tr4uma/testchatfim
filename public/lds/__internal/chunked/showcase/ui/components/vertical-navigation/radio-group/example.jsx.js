var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/vertical-navigation/radio-group/example.jsx.js"]=function(e){function t(t){for(var n,c,l=t[0],u=t[1],d=t[2],s=0,p=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(o&&o(t);p.length;)p.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,l=1;l<a.length;l++){var u=a[l];0!==r[u]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={156:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},i=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var o=u;return i.push([651,0]),a()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},651:function(e,t,a){"use strict";a.r(t),a.d(t,"NavVerticalFieldset",(function(){return u})),a.d(t,"NavVerticalItemRadio",(function(){return d})),a.d(t,"Context",(function(){return o})),a.d(t,"NavVerticalRadioSet",(function(){return s})),a.d(t,"examples",(function(){return p}));var n=a(0),r=a.n(n),i=a(176),c=a(2),l=a.n(c),u=function(e){return r.a.createElement("fieldset",{className:l()("slds-nav-vertical",{"slds-nav-vertical_shade":e.shaded},{"slds-nav-vertical_compact":e.compact})},r.a.createElement("legend",{className:"slds-nav-vertical__title"},"Reports"),e.children)},d=function(e){return r.a.createElement("span",{className:l()("slds-nav-vertical__item",e.className)},r.a.createElement("input",{defaultChecked:e.checked,type:"radio",id:e.id,value:e.id,name:e.name||"unique-id-example"}),r.a.createElement("label",{className:"slds-nav-vertical__action",htmlFor:e.id},r.a.createElement("span",{className:"slds-nav-vertical_radio-faux"},e.children)))},o=function(e){return r.a.createElement("div",{className:"demo-only",style:{width:"320px"}},e.children)},s=function(e){return r.a.createElement(i.NavVerticalSection,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},r.a.createElement(u,null,r.a.createElement(d,{checked:!0,id:"unique-id-01-recent"},"Recent"),r.a.createElement(d,{id:"unique-id-01-created-by-me"},"Created by Me"),r.a.createElement(d,{id:"unique-id-01-private-reports"},"Private Reports"),r.a.createElement(d,{id:"unique-id-01-public-reports"},"Public Reports"),r.a.createElement(d,{id:"unique-id-01-all-reports"},"All Reports")))};t.default=r.a.createElement(s,null);var p=[{id:"compact",label:"Compact",element:r.a.createElement(i.NavVerticalSection,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},r.a.createElement(u,{compact:!0},r.a.createElement(d,{checked:!0,id:"unique-id-02-recent",name:"unique-id-compact"},"Recent"),r.a.createElement(d,{id:"unique-id-02-created-by-me",name:"unique-id-compact"},"Created by Me"),r.a.createElement(d,{id:"unique-id-02-private-reports",name:"unique-id-compact"},"Private Reports"),r.a.createElement(d,{id:"unique-id-02-public-reports",name:"unique-id-compact"},"Public Reports"),r.a.createElement(d,{id:"unique-id-02-all-reports",name:"unique-id-compact"},"All Reports")))},{id:"shade",label:"Shaded Background",element:r.a.createElement("div",{className:"demo-only",style:{backgroundColor:"#FAFAFB"}},r.a.createElement(i.NavVerticalSection,{headerId:"entity-header",title:"Reports",isNavVerticalRadioSet:!0},r.a.createElement(u,{shaded:!0},r.a.createElement(d,{checked:!0,id:"unique-id-03-recent",name:"unique-id-shade"},"Recent"),r.a.createElement(d,{id:"unique-id-03-created-by-me",name:"unique-id-shade"},"Created by Me"),r.a.createElement(d,{id:"unique-id-03-private-reports",name:"unique-id-shade"},"Private Reports"),r.a.createElement(d,{id:"unique-id-03-public-reports",name:"unique-id-shade"},"Public Reports"),r.a.createElement(d,{id:"unique-id-03-all-reports",name:"unique-id-shade"},"All Reports"))))}]}});