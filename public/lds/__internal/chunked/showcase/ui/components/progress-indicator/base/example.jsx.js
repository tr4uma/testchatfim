var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/progress-indicator/base/example.jsx.js"]=function(e){function t(t){for(var l,s,c=t[0],o=t[1],d=t[2],m=0,u=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(i&&i(t);u.length;)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(l=!1)}l&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var l={},r={127:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},n=[];function s(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=l,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)s.d(a,l,function(t){return e[t]}.bind(null,l));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var i=o;return n.push([615,0]),a()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},615:function(e,t,a){"use strict";a.r(t),a.d(t,"Progress",(function(){return m})),a.d(t,"Step",(function(){return u})),a.d(t,"states",(function(){return p})),a.d(t,"examples",(function(){return b}));var l=a(0),r=a.n(l),n=a(2),s=a.n(n),c=a(4),o=a(63),d=a(22),i=a(38),m=function(e){return r.a.createElement("div",{className:s()("slds-progress",e.className)},r.a.createElement("ol",{className:"slds-progress__list"},e.children),r.a.createElement(i.a,{className:"slds-progress-bar_x-small",value:e.value}))},u=function(e){return r.a.createElement("li",{className:s()("slds-progress__item",e.className,e.active?"slds-is-active":null,e.done?"slds-is-completed":null,e.error?"slds-has-error":null)},e.done&&!e.error?r.a.createElement(c.b,{className:"slds-progress__marker slds-progress__marker_icon",symbol:"success","aria-describedby":e["aria-describedby"],assistiveText:e.done?e.children+" - Completed":null,title:e.done?e.children+" - Completed":null}):e.error?r.a.createElement(c.b,{className:"slds-progress__marker slds-progress__marker_icon",symbol:"error","aria-describedby":e["aria-describedby"],assistiveText:e.error?e.children+" - Error":null,title:e.error?e.children+" - Error":null}):r.a.createElement("button",{className:"slds-button slds-progress__marker","aria-describedby":e["aria-describedby"]},r.a.createElement("span",{className:"slds-assistive-text"},e.children," ",e.active?"- Active":null)))};t.default=r.a.createElement("div",{className:"demo-only",style:{padding:"1rem"}},r.a.createElement(m,{value:"0"},r.a.createElement(u,{active:!0},"Step 1"),r.a.createElement(u,null,"Step 2"),r.a.createElement(u,null,"Step 3"),r.a.createElement(u,null,"Step 4"),r.a.createElement(u,null,"Step 5")));var p=[{id:"next-step",label:"Next Step",element:r.a.createElement("div",{className:"demo-only",style:{padding:"1rem"}},r.a.createElement(m,{value:"25"},r.a.createElement(u,{done:!0},"Step 1"),r.a.createElement(u,{active:!0},"Step 2"),r.a.createElement(u,null,"Step 3"),r.a.createElement(u,null,"Step 4"),r.a.createElement(u,null,"Step 5")))},{id:"has-error",label:"Step - Error",element:r.a.createElement("div",{className:"demo-only",style:{padding:"1rem"}},r.a.createElement(m,{value:"25"},r.a.createElement(u,{done:!0},"Step 1"),r.a.createElement(u,{error:!0},"Step 2"),r.a.createElement(u,null,"Step 3"),r.a.createElement(u,null,"Step 4"),r.a.createElement(u,null,"Step 5")))},{id:"tooltip",label:"Tooltip",element:r.a.createElement("div",{className:"demo-only",style:{padding:"3rem 1rem 0"}},r.a.createElement(m,{value:"50"},r.a.createElement(u,{done:!0},"Step 1"),r.a.createElement(u,{done:!0},"Step 2"),r.a.createElement(u,{active:!0,"aria-describedby":"step-3-tooltip"},"Step 3"),r.a.createElement(u,null,"Step 4"),r.a.createElement(u,null,"Step 5")),r.a.createElement(o.Tooltip,{className:"slds-nubbin_bottom",id:"step-3-tooltip",style:{position:"absolute",top:"0px",left:"calc(50% + 7px)",transform:"translateX(-50%)"}},"Verify Email"))}],b=[{id:"modal",label:"In a modal",element:r.a.createElement("div",{className:"demo-only",style:{height:"640px"}},r.a.createElement(d.Backdrop,null,r.a.createElement(d.Modal,{className:"slds-modal_large","aria-labelledby":"header43"},r.a.createElement(d.ModalHeader,null,r.a.createElement("h1",{id:"header43",className:"slds-text-heading_medium"},"Modal header")),r.a.createElement(d.ModalContent,{className:"slds-grow slds-p-around_medium"}),r.a.createElement(d.ModalFooter,{className:"slds-grid slds-grid_align-spread"},r.a.createElement("button",{className:"slds-button slds-button_neutral","aria-label":"Cancel and close"},"Cancel"),r.a.createElement(m,{className:"slds-progress_shade",value:"25"},r.a.createElement(u,{done:!0},"Step 1"),r.a.createElement(u,{active:!0},"Step 2"),r.a.createElement(u,null,"Step 3"),r.a.createElement(u,null,"Step 4"),r.a.createElement(u,null,"Step 5")),r.a.createElement("button",{className:"slds-button slds-button_brand"},"Save")))))},{id:"shade",label:"On a gray background",element:r.a.createElement("div",{className:"demo-only",style:{background:"#F3F2F2",padding:"1rem"}},r.a.createElement(m,{className:"slds-progress_shade",value:"25"},r.a.createElement(u,{done:!0},"Step 1"),r.a.createElement(u,{active:!0},"Step 2"),r.a.createElement(u,null,"Step 3"),r.a.createElement(u,null,"Step 4"),r.a.createElement(u,null,"Step 5")))}]}});