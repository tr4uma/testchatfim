var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/form-element/base/example.jsx.js"]=function(e){function t(t){for(var n,i,c=t[0],r=t[1],u=t[2],b=0,s=[];b<c.length;b++)i=c[b],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&s.push(l[i][0]),l[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(d&&d(t);s.length;)s.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,c=1;c<a.length;c++){var r=a[c];0!==l[r]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},l={85:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=r;return o.push([633,0]),a()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},633:function(e,t,a){"use strict";a.r(t),a.d(t,"states",(function(){return s})),a.d(t,"examples",(function(){return p}));var n=a(0),l=a.n(n),o=a(5),i=a(11),c=a(41),r=a(25),u=a(28),d="Form Element Label",b="error-message-unique-id";t.default=[{id:"default",label:"".concat("Base"," - Default"),context:"".concat("Base"),element:l.a.createElement(o.b,{labelContent:d,inputId:"input-unique-id-01"},l.a.createElement(i.a,{id:"input-unique-id-01"}))}];var s=[{id:"required",label:"".concat("Base"," - Required"),context:"".concat("Base"),element:l.a.createElement(o.b,{labelContent:d,inputId:"input-unique-id-02",isRequired:!0},l.a.createElement(i.a,{id:"input-unique-id-02",required:!0}))},{id:"error",label:"".concat("Base"," - Error"),context:"".concat("Base"),element:l.a.createElement(o.b,{labelContent:d,inputId:"input-unique-id-03",errorId:b,isRequired:!0,hasError:!0,inlineMessage:"This field is required"},l.a.createElement(i.a,{id:"input-unique-id-03",required:!0,"aria-describedby":b}))},{id:"checkbox-required",label:"".concat("Base"," - Checkbox - Required"),context:"".concat("Base"),element:l.a.createElement(o.b,null,l.a.createElement(r.Checkbox,{label:"Checkbox Label",isRequired:!0}))},{id:"checkbox-required-help-text",label:"".concat("Base"," - Checkbox - Required (help text icon)"),context:"".concat("Base"),element:l.a.createElement(o.b,null,l.a.createElement(r.Checkbox,{label:"Checkbox Label",isRequired:!0,hasTooltip:!0}))},{id:"checkbox-group-required",label:"".concat("Base"," - Checkbox Group (Required)"),context:"".concat("Base"),element:l.a.createElement(o.a,{label:"Form Element Legend",isRequired:!0},l.a.createElement(r.Checkbox,{label:"Checkbox Label"}),l.a.createElement(r.Checkbox,{label:"Checkbox Label"}))},{id:"checkbox-group-required-help-text",label:"".concat("Base"," - Checkbox Group (Required with help text icon)"),context:"".concat("Base"),element:l.a.createElement(o.a,{id:"fieldset-with-help-text",label:"Form Element Legend",isRequired:!0,hasTooltip:!0},l.a.createElement(r.Checkbox,{label:"Checkbox Label"}),l.a.createElement(r.Checkbox,{label:"Checkbox Label"}))},{id:"radio-group-required",label:"".concat("Base"," - Radio Group (Required)"),context:"".concat("Base"),element:l.a.createElement(o.a,{label:"Form Element Label",isRequired:!0},l.a.createElement(u.Radio,{checked:!0,label:"Radio Label One"}),l.a.createElement(u.Radio,{label:"Radio Label Two"}))},{id:"radio-group-required-help-text",label:"".concat("Base"," - Radio Group (Required with help text icon)"),context:"".concat("Base"),element:l.a.createElement(o.a,{id:"fieldset-with-help-text",label:"Form Element Label",isRequired:!0,hasTooltip:!0},l.a.createElement(u.Radio,{checked:!0,label:"Radio Label One"}),l.a.createElement(u.Radio,{label:"Radio Label Two"}))},{id:"required-tooltip-help",label:"".concat("Base"," - Tooltip Help (Required)"),context:"".concat("Base"),demoStyles:"padding-top: 3rem; position: relative",storybookStyles:!0,element:l.a.createElement(o.b,{labelContent:d,inputId:"input-unique-id-04",hasTooltip:!0,showTooltip:!0,isRequired:!0},l.a.createElement(i.a,{id:"input-unique-id-04",required:!0}))}],p=[{id:"input",label:"".concat("Base"," - Input"),context:"".concat("Base"),element:l.a.createElement(o.b,{labelContent:d,inputId:"input-unique-id-05"},l.a.createElement(i.a,{id:"input-unique-id-05"}))},{id:"textarea",label:"".concat("Base"," - Textarea"),context:"".concat("Base"),element:l.a.createElement(o.b,{labelContent:d,inputId:"input-unique-id-06"},l.a.createElement(c.Textarea,{id:"input-unique-id-06"}))},{id:"checkbox",label:"".concat("Base"," - Checkbox"),context:"".concat("Base"),element:l.a.createElement(o.b,null,l.a.createElement(r.Checkbox,{label:"Checkbox Label"}))},{id:"checkbox-group",label:"".concat("Base"," - Checkbox Group"),context:"".concat("Base"),element:l.a.createElement(o.a,{label:"Form Element Legend"},l.a.createElement(r.Checkbox,{label:"Checkbox Label"}),l.a.createElement(r.Checkbox,{label:"Checkbox Label"}))},{id:"radio-group",label:"".concat("Base"," - Radio Group"),context:"".concat("Base"),element:l.a.createElement(o.a,{label:"Form Element Label"},l.a.createElement(u.Radio,{checked:!0,label:"Radio Label One"}),l.a.createElement(u.Radio,{label:"Radio Label Two"}))},{id:"inline-help",label:"".concat("Base"," - Inline Help"),context:"".concat("Base"),element:l.a.createElement(o.b,{labelContent:d,inputId:"input-unique-id-07",inlineMessage:"ex: (415)111-2222"},l.a.createElement(i.a,{id:"input-unique-id-07"}))},{id:"tooltip-help",label:"".concat("Base"," - Tooltip Help"),context:"".concat("Base"),demoStyles:"padding-top: 3px; position: relative",storybookStyles:!0,element:l.a.createElement(o.b,{labelContent:d,inputId:"input-unique-id-08",hasTooltip:!0,showTooltip:!0},l.a.createElement(i.a,{id:"input-unique-id-08"}))}]}});