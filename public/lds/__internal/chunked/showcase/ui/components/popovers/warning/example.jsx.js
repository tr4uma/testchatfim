var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/popovers/warning/example.jsx.js"]=function(e){function t(t){for(var r,i,l=t[0],s=t[1],u=t[2],c=0,p=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(d&&d(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={124:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var l=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;return a.push([610,0]),n()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},610:function(e,t,n){"use strict";n.r(t),n.d(t,"examples",(function(){return s}));var r=n(0),o=n.n(r),a=n(42),i=n(73),l=n(6).d.uniqueId("dialog-heading-id-");t.default=[{context:"Warning",id:"warning-default",label:"Warning – default",element:o.a.createElement(a.a,{className:"slds-popover_warning slds-nubbin_bottom-left",headingId:l,bodyClassName:"slds-popover_warning__body",header:o.a.createElement(i.FeedbackHeader,{headingId:l,title:"Just a heads up…",symbol:"warning",iconDefault:!0}),closeButton:!0},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Learn More"},"Learn More")))}];var s=[{context:"Warning",id:"with-top-nubbin",label:"Warning With Top Nubbin",element:o.a.createElement(a.a,{className:"slds-popover_warning slds-nubbin_top",bodyClassName:"slds-popover_warning__body",headingId:l,header:o.a.createElement(i.FeedbackHeader,{headingId:l,title:"Just a heads up…",symbol:"warning",iconDefault:!0}),closeButton:!0},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Learn More"},"Learn More")))},{context:"Warning",id:"with-footer",label:"Warning With Footer",element:o.a.createElement(a.a,{className:"slds-popover_warning slds-nubbin_bottom-left",bodyClassName:"slds-popover_warning__body",headingId:l,header:o.a.createElement(i.FeedbackHeader,{headingId:l,title:"Just a heads up…",symbol:"warning",iconDefault:!0}),footer:o.a.createElement(i.FeedbackFooter,null),closeButton:!0},o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Learn More"},"Learn More")))}]}});