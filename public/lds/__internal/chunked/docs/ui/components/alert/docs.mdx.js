var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/alert/docs.mdx.js"]=function(e){function t(t){for(var n,s,o=t[0],i=t[1],c=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(m&&m(t);f.length;)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={3:0},l=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var m=i;return l.push([683,0]),a()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},683:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return N})),a.d(t,"getContents",(function(){return T}));var n=a(0),r=a.n(n),l=a(4),s=a(2),o=a(25),i=(a(15),a(7)),c=a(11),m=(a(14),a(1)),d=a(37),f=a(3),u=a.n(f),h=a(5),p=a.n(h),b=function(e){var t=e.type,a=e.children,n=e.isLegacy,l=p()("warning"===t&&"slds-alert_warning","error"===t&&"slds-alert_error","offline"===t&&"slds-alert_offline"),s=p()(n&&"slds-theme_alert-texture","info"===t&&n&&"slds-theme_info","warning"===t&&n&&"slds-theme_warning","error"===t&&n&&"slds-theme_error","offline"===t&&n&&"slds-theme_offline");return r.a.createElement("div",{className:p()("slds-notify slds-notify_alert",l,s),role:"alert"},r.a.createElement("span",{className:"slds-assistive-text"},t),a,r.a.createElement("div",{className:"slds-notify__close"},r.a.createElement(i.b,{className:p()("warning"!==t&&"slds-button_icon-inverse"),symbol:"close",assistiveText:"Close",title:"Close",size:"small"})))};b.propTypes={type:u.a.oneOf(["info","warning","error","offline"]),children:u.a.node,isLegacy:u.a.bool},b.defaultProps={type:"info"};var y=b,g=a(89),v=a(82),E=r.a.createElement(y,null,r.a.createElement(c.a,{containerClassName:"slds-m-right_x-small",className:"slds-icon_x-small",assistiveText:!1,symbol:"user"}),r.a.createElement(v.a,{level:"2"},"Logged in as John Smith (johnsmith@acme.com)."," ",r.a.createElement(g.a,null,"Log out"))),_=[{id:"theme-info",label:"Default (Theme Class  - Deprecated)",element:r.a.createElement(y,{isLegacy:!0},r.a.createElement(c.a,{containerClassName:"slds-m-right_x-small",className:"slds-icon_x-small",assistiveText:!1,symbol:"user"}),r.a.createElement(v.a,{level:"2"},"Logged in as John Smith (johnsmith@acme.com)."," ",r.a.createElement(g.a,null,"Log out")))},{id:"warning",label:"Warning",element:r.a.createElement(y,{type:"warning"},r.a.createElement(c.a,{containerClassName:"slds-m-right_x-small",className:"slds-icon_x-small",assistiveText:!1,symbol:"warning"}),r.a.createElement(v.a,{level:"2"},"Your browser is outdated. Your Salesforce experience may be degraded."," ",r.a.createElement(g.a,null,"More Information")))},{id:"theme-warning",label:"Warning (Theme Class  - Deprecated)",element:r.a.createElement(y,{type:"warning",isLegacy:!0},r.a.createElement(c.a,{containerClassName:"slds-m-right_x-small",className:"slds-icon_x-small",assistiveText:!1,symbol:"warning"}),r.a.createElement(v.a,{level:"2"},"Your browser is outdated. Your Salesforce experience may be degraded."," ",r.a.createElement(g.a,null,"More Information")))},{id:"error",label:"Error",element:r.a.createElement(y,{type:"error"},r.a.createElement(c.a,{containerClassName:"slds-m-right_x-small",className:"slds-icon_x-small",assistiveText:!1,symbol:"error"}),r.a.createElement(v.a,{level:"2"},"Your browser is currently not supported. Your Salesforce may be degraded. ",r.a.createElement(g.a,null,"More Information")))},{id:"theme-error",label:"Error (Theme Class  - Deprecated)",element:r.a.createElement(y,{type:"error",isLegacy:!0},r.a.createElement(c.a,{containerClassName:"slds-m-right_x-small",className:"slds-icon_x-small",assistiveText:!1,symbol:"error"}),r.a.createElement(v.a,{level:"2"},"Your browser is currently not supported. Your Salesforce may be degraded. ",r.a.createElement(g.a,null,"More Information")))},{id:"offline",label:"Offline",element:r.a.createElement(y,{type:"offline"},r.a.createElement(c.a,{containerClassName:"slds-m-right_x-small",className:"slds-icon_x-small",assistiveText:!1,symbol:"offline"}),r.a.createElement(v.a,{level:"2"},"You are in offline mode. ",r.a.createElement(g.a,null,"More Information")))},{id:"theme-offline",label:"Offline (Theme Class  - Deprecated)",element:r.a.createElement(y,{type:"offline",isLegacy:!0},r.a.createElement(c.a,{containerClassName:"slds-m-right_x-small",className:"slds-icon_x-small",assistiveText:!1,symbol:"offline"}),r.a.createElement(v.a,{level:"2"},"You are in offline mode. ",r.a.createElement(g.a,null,"More Information")))}],x=l.c.code,O=l.c.h2,w=l.c.h3,j=l.c.h4,S=l.c.p,N=function(){return Object(n.createElement)(l.b,{},Object(n.createElement)("div",{className:"doc lead"},"Alert banners communicate a state that affects the entire system, not just a feature or page. It persists over a session and appears without the user initiating the action."),Object(n.createElement)(s.a,{exampleOnly:!0},Object(m.f)(E)),O({id:"About-Alert"},"About Alert"),w({id:"Accessibility"},"Accessibility"),j({id:"Role"},"Role"),S({},"Alert notifications should contain ",x({},'role="alert"')," on the container to signal to assistive technology that they require the user’s immediate attention."),Object(n.createElement)(o.a,{toggleCode:!1},Object(n.createElement)("div",{className:"slds-notify slds-notify_alert",role:"alert"},"...")),j({id:"Assistive-Text"},"Assistive Text"),S({},"Use a span with the class ",x({},"slds-assistive-text")," to let the user know what type of notification it is."),Object(n.createElement)(o.a,{toggleCode:!1},Object(n.createElement)("span",{className:"slds-assistive-text"},"Info")),O({id:"Base"},"Base"),S({},"Use the info alert when notifying the user of neutral information about the system."),Object(n.createElement)(s.a,null,Object(m.f)(E)),O({id:"Variations"},"Variations"),w({id:"Warning"},"Warning"),S({},"Use the warning variant to warn the user about important system information that deserves caution."),Object(n.createElement)(s.a,null,Object(m.f)(_,"warning")),w({id:"Error"},"Error"),S({},"Use the error variant when you need to alert the user about an error in the system that needs immediate attention."),Object(n.createElement)(s.a,null,Object(m.f)(_,"error")),w({id:"Offline"},"Offline"),S({},"Use the offline alert to let the user know that they are not connected to the internet."),Object(n.createElement)(s.a,null,Object(m.f)(_,"offline")),O({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(n.createElement)(d.a,{name:"alert",type:"component"}))},T=function(){return Object(l.a)(N())}}});