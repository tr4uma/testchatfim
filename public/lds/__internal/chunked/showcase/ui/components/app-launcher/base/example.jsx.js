var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/app-launcher/base/example.jsx.js"]=function(e){function t(t){for(var l,r,i=t[0],o=t[1],c=t[2],p=0,u=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&(e[l]=o[l]);for(d&&d(t);u.length;)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(l=!1)}l&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var l={},s={4:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},n=[];function r(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=l,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(a,l,function(t){return e[t]}.bind(null,l));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=o;return n.push([608,0]),a()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},608:function(e,t,a){"use strict";a.r(t),a.d(t,"Context",(function(){return m})),a.d(t,"AppLauncherModal",(function(){return b})),a.d(t,"AppLauncherTile",(function(){return f})),a.d(t,"itemTiles",(function(){return h})),a.d(t,"searchItemTiles",(function(){return g})),a.d(t,"appTiles",(function(){return y})),a.d(t,"appTilesSearch",(function(){return S})),a.d(t,"appTilesGrabbed",(function(){return E})),a.d(t,"appTilesMoved",(function(){return T})),a.d(t,"appTilesDropped",(function(){return _})),a.d(t,"states",(function(){return x}));var l=a(0),s=a.n(l),n=a(9),r=a(22),i=a(86),o=a(50),c=a(317),d=a(63),p=a(2),u=a.n(p),m=function(e){return s.a.createElement("div",{style:{height:"800px"}},e.children)},b=function(e){return s.a.createElement(r.Modal,{className:"slds-modal_large slds-app-launcher","aria-labelledby":"header43"},s.a.createElement(r.ModalHeader,{className:"slds-grid slds-grid_align-spread slds-grid_vertical-align-center"},s.a.createElement("h2",{id:"header43",className:"slds-text-heading_medium"},"App launcher"),s.a.createElement("div",{className:"slds-app-launcher__header-search"},s.a.createElement("div",{className:"slds-form-element"},s.a.createElement("label",{htmlFor:"app-launcher-search",className:"slds-form-element__label slds-assistive-text"},"Find an app"),s.a.createElement("div",{className:"slds-form-element__control slds-input-has-icon slds-input-has-icon_left"},s.a.createElement(n.a,{className:"slds-input__icon",sprite:"utility",symbol:"search"}),s.a.createElement("input",{type:"search",className:"slds-input",id:"app-launcher-search",placeholder:"Find an app",defaultValue:e.searchTerm})))),s.a.createElement("button",{className:"slds-button slds-button_neutral"},"App Exchange")),s.a.createElement(r.ModalContent,{className:"slds-app-launcher__content slds-p-around_medium"},s.a.createElement(i.Section,{className:"slds-is-open"},s.a.createElement(i.SectionTitle,null,s.a.createElement(i.SectionTitleAction,{isOpen:!0,referenceId:"appsContent"},"All Apps")),s.a.createElement(i.SectionContent,{isOpen:!0,referenceId:"appsContent"},s.a.createElement("div",{className:"slds-assistive-text",id:"drag-live-region","aria-live":"assertive"},e.dragDropLiveRegion),s.a.createElement("ul",{className:"slds-grid slds-grid_pull-padded slds-wrap"},e.appTiles.map((function(e,t){return s.a.createElement("li",{className:"slds-p-horizontal_small slds-size_1-of-1 slds-medium-size_1-of-3",key:t},s.a.createElement(f,{figureClass:e.figureClass,grabbed:e.grabbed,objectInitials:e.initials,label:e.label,description:e.description,hasTooltip:e.hasTooltip,tooltipText:e.tooltipText,index:t}))}))))),s.a.createElement("hr",null),s.a.createElement(i.Section,{className:"slds-is-open"},s.a.createElement(i.SectionTitle,null,s.a.createElement(i.SectionTitleAction,{isOpen:!0,referenceId:"itemsContent"},"All Items")),s.a.createElement(i.SectionContent,{isOpen:!0,referenceId:"itemsContent"},s.a.createElement("ul",{className:"slds-grid slds-wrap"},e.itemTiles.map((function(e,t){return s.a.createElement("li",{className:"slds-col_padded slds-p-vertical_xx-small slds-size_1-of-5",key:t},s.a.createElement("a",{href:"#",className:"slds-truncate",title:e.label,onClick:function(e){return e.preventDefault()}},e.label))})))))))},f=function(e){return s.a.createElement("div",{draggable:!0,className:u()("slds-app-launcher__tile slds-text-link_reset slds-is-draggable",e.className,{"slds-is-grabbed":e.grabbed})},s.a.createElement("div",{className:"slds-app-launcher__tile-figure"},s.a.createElement(o.Avatar,{className:"slds-avatar_large"},s.a.createElement("abbr",{className:u()("slds-avatar__initials",e.figureClass),title:e.label},e.objectInitials)),s.a.createElement("div",{className:"slds-m-top_xxx-small"},s.a.createElement(c.ButtonIconStateful,{"aria-pressed":e.grabbed?"true":"false",assistiveText:"Reorder",selected:e.grabbed,symbol:"rows",title:"Reorder"}))),s.a.createElement("div",{className:"slds-app-launcher__tile-body"},s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},e.label),s.a.createElement("p",null,e.description," ",e.hasTooltip&&s.a.createElement("button",{"aria-describedby":"help-".concat(e.index),className:"slds-button slds-button_reset slds-text-link"},"More")),s.a.createElement(d.Tooltip,{className:u()("slds-nubbin_top-right",{"slds-hide":!e.tooltipText}),id:"help-".concat(e.index),style:{position:"absolute",top:"80px",right:"30px"}},e.tooltipText)))},h=[{label:"Accounts",symbol:"account"},{label:"Announcements",symbol:"announcement"},{label:"Approvals",symbol:"approval"},{label:"Campaigns",symbol:"campaign"},{label:"Cases",symbol:"case"},{label:"Coaching",symbol:"coaching"},{label:"Contacts",symbol:"contact"}],g=[{label:s.a.createElement("span",null,s.a.createElement("mark",null,"Sales")," Invoices"),symbol:"account"},{label:s.a.createElement("span",null,s.a.createElement("mark",null,"Sales")," Objects"),symbol:"announcement"}],y=[{description:"The primary internal Salesforce org. Used to run our online sales business...",hasTooltip:!0,figureClass:"slds-icon-custom-27",grabbed:!1,initials:"SC",label:"Sales Cloud"},{description:"Salesforce Marketing Cloud lets businesses of any size...",hasTooltip:!0,figureClass:"slds-icon-custom-59",grabbed:!1,initials:"MC",label:"Marketing Cloud"},{description:"Community for managing employee benefits and time off.",hasTooltip:!1,figureClass:"slds-icon-custom-10",grabbed:!1,initials:"HR",label:"HR Concierge"},{description:"Manage your finances across multiple financial platforms...",hasTooltip:!0,figureClass:"slds-icon-custom-6",grabbed:!1,initials:"MM",label:"My Money"},{description:"The key to call center and contact center management is more...",hasTooltip:!0,figureClass:"slds-icon-custom-91",grabbed:!1,initials:"CC",label:"Call Center"},{description:"Areas of Focus are used to track customer support for your...",hasTooltip:!0,figureClass:"slds-icon-custom-50",grabbed:!1,initials:"CS",label:"Customer Support Community"}],S=[{description:"The primary internal Salesforce org. Used to run our...",hasTooltip:!0,figureClass:"slds-icon-custom-27",grabbed:!1,initials:"SC",label:s.a.createElement("span",null,s.a.createElement("mark",null,"Sales")," Cloud")}],v=function(e,t,a){var l=e.slice(0);return l.splice(a,0,l.splice(t,1)[0]),l},E=y.slice(0);E[0]=Object.assign({},E[0],{grabbed:!0});var T=v(y,0,2);T[2]=Object.assign({},T[2],{grabbed:!0});var _=v(y,0,3),C=s.a.createElement(r.Backdrop,null,s.a.createElement(b,{appTiles:y,dragDropLiveRegion:"",itemTiles:h}));t.default=C;var x=[{id:"default",label:"Default",demoStyles:"height: 800px;",storybookStyles:!0,element:C},{id:"grabbed",label:"Tile grabbed",demoStyles:"height: 800px;",storybookStyles:!0,element:s.a.createElement(r.Backdrop,null,s.a.createElement(b,{appTiles:E,dragDropLiveRegion:"Sales Cloud: current position 1 of 6. Use the up and down arrows to move this app",grabbed:!0,itemTiles:h}))},{id:"moved",label:"Tile moved in list",demoStyles:"height: 800px;",storybookStyles:!0,element:s.a.createElement(r.Backdrop,null,s.a.createElement(b,{appTiles:T,dragDropLiveRegion:"Sales Cloud: new position 3 of 6.",itemTiles:h}))},{id:"dropped",label:"Tile dropped",demoStyles:"height: 800px;",storybookStyles:!0,element:s.a.createElement(r.Backdrop,null,s.a.createElement(b,{appTiles:_,dragDropLiveRegion:"Sales Cloud: final position 4 of 6.",itemTiles:h}))},{id:"search",label:"Search",demoStyles:"height: 800px;",storybookStyles:!0,element:s.a.createElement(r.Backdrop,null,s.a.createElement(b,{appTiles:S,dragDropLiveRegion:"",itemTiles:g,searchTerm:"sales"}))},{id:"tooltip",label:"Tooltip",demoStyles:"width: 360px; height: 13rem; position: relative; padding: 0;",storybookStyles:!0,element:s.a.createElement(f,{figureClass:"slds-icon-custom-27",objectInitials:"SC",label:"Sales Cloud",description:"The primary internal Salesforce org. Used to run our online sales business...",hasTooltip:!0,tooltipText:"The primary internal Salesforce org. Used to run our online sales business and manage accounts.",index:"x"})}]}});