var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/docked-form-footer/base/example.jsx.js"]=function(e){function t(t){for(var o,a,l=t[0],u=t[1],c=t[2],d=0,b=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(i&&i(t);b.length;)b.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,l=1;l<r.length;l++){var u=r[l];0!==n[u]&&(o=!1)}o&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={60:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},s=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var i=u;return s.push([602,0]),r()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},602:function(e,t,r){"use strict";r.r(t),r.d(t,"Context",(function(){return c})),r.d(t,"states",(function(){return i}));var o=r(0),n=r.n(o),s=r(4),a=r(42),l=r(73),u=r(6).d.uniqueId("dialog-heading-id-"),c=function(e){return n.a.createElement("div",{className:"demo-only demo-only_viewport",style:{height:"180px"}},e.children)};t.default=n.a.createElement("div",{className:"slds-docked-form-footer"},n.a.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),n.a.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save"));var i=[{id:"docked-form-footer-with-error",label:"With error(s)",element:n.a.createElement("div",{className:"slds-docked-form-footer"},n.a.createElement(s.b,{assistiveText:"Resolve error",className:"slds-button_icon slds-button_icon-error",iconClassName:"slds-button__icon_large",symbol:"error",title:"Resolve error"}),n.a.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),n.a.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save"))},{id:"docked-form-footer-with-popover",label:"With error popover",element:n.a.createElement("div",{className:"slds-docked-form-footer"},n.a.createElement(s.b,{assistiveText:"Resolve error",className:"slds-button_icon slds-button_icon-error",iconClassName:"slds-button__icon_large",symbol:"error",title:"Resolve error"}),n.a.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),n.a.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save"),n.a.createElement(a.a,{className:"slds-popover_error slds-nubbin_bottom-left",headingId:u,header:n.a.createElement(l.FeedbackHeader,{headingId:u,title:"Resolve error",symbol:"error"}),closeButton:!0,inverse:!0,style:{position:"absolute",bottom:"56px",left:"50%",marginLeft:"62px",transform:"translateX(-50%)"}},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",n.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Learn More"},"Learn More"))))}]}});