var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/form-element/compound/example.jsx.js"]=function(e){function t(t){for(var n,i,r=t[0],s=t[1],c=t[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&m.push(l[i][0]),l[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(d&&d(t);m.length;)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==l[s]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},l={86:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=s;return o.push([669,0]),a()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},669:function(e,t,a){"use strict";a.r(t),a.d(t,"states",(function(){return u})),a.d(t,"examples",(function(){return m}));var n=a(0),l=a.n(n),o=a(27),i=a(1),r=a.n(i),s=a(5),c=a(11),d=function(e){var t=e.hasTooltip,a=e.isRequired;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{hasCompoundFields:!0,hasTooltip:t,isRequired:a,isDeprecated:!0,label:"Location"},l.a.createElement("div",{className:"slds-form-element__group"},l.a.createElement("div",{className:"slds-form-element__row"},l.a.createElement(s.b,{formElementClassName:"slds-size_1-of-2",labelContent:"Latitude",inputId:"input-10"},l.a.createElement(c.a,{id:"input-10"})),l.a.createElement(s.b,{formElementClassName:"slds-size_1-of-2",labelContent:"Longitude",inputId:"input-11"},l.a.createElement(c.a,{id:"input-11"}))))),l.a.createElement(s.a,{hasCompoundFields:!0,label:"Shipping Address",isAddress:!0,isDeprecated:!0},l.a.createElement("div",{className:"slds-form-element__group"},l.a.createElement("div",{className:"slds-form-element__row"},l.a.createElement(s.b,{formElementClassName:"slds-size_1-of-1",labelContent:"Shipping Street",inputId:"input-12"},l.a.createElement(c.a,{id:"input-12"}))),l.a.createElement("div",{className:"slds-form-element__row"},l.a.createElement(s.b,{formElementClassName:"slds-size_4-of-6",labelContent:"Shipping City",inputId:"input-13"},l.a.createElement(c.a,{id:"input-13"})),l.a.createElement(s.b,{formElementClassName:"slds-size_2-of-6",labelContent:"Shipping State/Province",inputId:"input-14"},l.a.createElement(c.a,{id:"input-14",defaultValue:"MT"}))),l.a.createElement("div",{className:"slds-form-element__row"},l.a.createElement(s.b,{formElementClassName:"slds-size_4-of-6",labelContent:"Shipping Zip/Postal Code",inputId:"input-15"},l.a.createElement(c.a,{id:"input-15"})),l.a.createElement(s.b,{formElementClassName:"slds-size_2-of-6",labelContent:"Shipping Country",inputId:"input-16"},l.a.createElement(c.a,{id:"input-16",defaultValue:"Canada"}))))))};d.propTypes={hasTooltip:r.a.bool,isRequired:r.a.bool};t.default=[{id:"compound-default",label:"".concat("Compound"," - Default"),context:"".concat("Compound"),element:l.a.createElement(o.a,{labelContent:"Location"},l.a.createElement(o.b,null,l.a.createElement("div",{className:"slds-size_1-of-2"},l.a.createElement(s.b,{labelContent:"Latitude",inputId:"input-01"},l.a.createElement(c.a,{id:"input-01"}))),l.a.createElement("div",{className:"slds-size_1-of-2"},l.a.createElement(s.b,{labelContent:"Longitude",inputId:"input-02"},l.a.createElement(c.a,{id:"input-02"})))))}];var u=[{id:"required",label:"".concat("Compound"," - Required"),context:"".concat("Compound"),element:l.a.createElement(o.a,{labelContent:"Location",isRequired:!0},l.a.createElement(o.b,null,l.a.createElement("div",{className:"slds-size_1-of-2"},l.a.createElement(s.b,{labelContent:"Latitude",inputId:"input-03"},l.a.createElement(c.a,{id:"input-03"}))),l.a.createElement("div",{className:"slds-size_1-of-2"},l.a.createElement(s.b,{labelContent:"Longitude",inputId:"input-04"},l.a.createElement(c.a,{id:"input-04"})))))},{id:"help-text",label:"".concat("Compound"," - Help text icon with tooltip"),context:"".concat("Compound"),element:l.a.createElement(o.a,{labelContent:"Location",hasTooltip:!0},l.a.createElement(o.b,null,l.a.createElement("div",{className:"slds-size_1-of-2"},l.a.createElement(s.b,{labelContent:"Latitude",inputId:"input-05"},l.a.createElement(c.a,{id:"input-05"}))),l.a.createElement("div",{className:"slds-size_1-of-2"},l.a.createElement(s.b,{labelContent:"Longitude",inputId:"input-06"},l.a.createElement(c.a,{id:"input-06"})))))},{id:"has-error",label:"".concat("Compound"," - Error"),context:"".concat("Compound"),element:l.a.createElement(o.a,{labelContent:"Location",isRequired:!0},l.a.createElement(o.b,null,l.a.createElement("div",{className:"slds-size_1-of-2"},l.a.createElement(s.b,{labelContent:"Latitude",inputId:"input-07",isRequired:!0,hasError:!0,errorId:"error-message-unique-id",inlineMessage:"This field is required"},l.a.createElement(c.a,{id:"input-07",required:!0,"aria-describedby":"error-message-unique-id"}))),l.a.createElement("div",{className:"slds-size_1-of-2"},l.a.createElement(s.b,{labelContent:"Longitude",inputId:"input-08"},l.a.createElement(c.a,{id:"input-08"})))))},{id:"compound-field-required",label:"".concat("Compound"," - Form Layout (Required)"),context:"".concat("Compound"),element:l.a.createElement(d,null)},{id:"compound-field-required-tooltip-help",label:"".concat("Compound"," - Form Layout (Required with Tooltip Help)"),context:"".concat("Compound"),element:l.a.createElement(d,null)}],m=[{id:"deprecated-stacked",label:"Deprecated - Compound form element",context:"Deprecated",element:l.a.createElement(s.a,{label:"Location",hasCompoundFields:!0,isDeprecated:!0},l.a.createElement("div",{className:"slds-form-element__group"},l.a.createElement("div",{className:"slds-form-element__row"},l.a.createElement(s.b,{formElementClassName:"slds-size_1-of-2",labelContent:"Longitude",inputId:"location-longitude-01"},l.a.createElement(c.a,{id:"location-longitude-01",defaultValue:"10.283"})),l.a.createElement(s.b,{formElementClassName:"slds-size_1-of-2",labelContent:"Latitude",inputId:"location-latitude-02"},l.a.createElement(c.a,{id:"location-latitude-02",defaultValue:"54.293"})))))},{id:"compound-field",label:"".concat("Compound"," - Form Layout"),context:"".concat("Compound"),element:l.a.createElement(d,null)}]}});