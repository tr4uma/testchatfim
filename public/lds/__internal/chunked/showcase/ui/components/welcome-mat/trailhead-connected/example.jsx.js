var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/welcome-mat/trailhead-connected/example.jsx.js"]=function(e){function t(t){for(var r,l,c=t[0],i=t[1],s=t[2],f=0,p=[];f<c.length;f++)l=c[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={165:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var c=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;return a.push([687,0]),n()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},687:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return x})),n.d(t,"examples",(function(){return P}));var r=n(0),o=n.n(r),a=n(64),l=n(2),c=n.n(l),i=n(1),s=n.n(i),u=n(12),f=n(170),p=n(38);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(l,e);var t,n,r,a=y(l);function l(){return d(this,l),a.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.complete,n=e.total,r=e.labelId,a=t/n*100,l=100===a,i=l?o.a.createElement("p",null,"Cha-ching! You earned the badge."):o.a.createElement("p",null,t,"/",n," units completed");return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{id:r,className:"slds-welcome-mat__info-title"},"The Lightning Experience is here!"),o.a.createElement("p",{className:"slds-welcome-mat__info-description slds-text-longform"},"Welcome to Lightning Experience, the modern, beautiful user experience from Salesforce. With a sales-and service-centric mindset, we focused on reinventing the desktop environment to better support your business processes."),o.a.createElement("div",{className:c()("slds-welcome-mat__info-progress",{"slds-welcome-mat__info-progress_complete":l})},o.a.createElement("div",{className:"slds-welcome-mat__info-badge-container"},o.a.createElement("img",{className:"slds-welcome-mat__info-badge",src:"/assets/images/welcome-mat/trailhead_badge@2x.png",width:"50",height:"50",alt:""}),o.a.createElement(f.ActionIcon,{title:"Completed",assistiveText:"Completed",className:"slds-welcome-mat__icon-check slds-icon_xx-small",symbol:"check"})),o.a.createElement("p",null,o.a.createElement("strong",null,"Lightning Explorer")),i),l?o.a.createElement(u.Button,{isBrand:!0},"View on your Trailblazer Profile"):o.a.createElement(p.a,{value:a,className:"slds-progress-bar_circular"}))}}])&&b(t.prototype,n),r&&b(t,r),l}(o.a.Component);g.propTypes={complete:s.a.number.isRequired,total:s.a.number.isRequired,labelId:s.a.string.isRequired},g.defaultProps={complete:0,total:5,labelId:"welcome-mat-label-1"};var w=g,E=n(43),S=n(22),O=[];a.a.defaultProps.tiles.forEach((function(e){O.push(Object.assign({},e,{completed:!0}))}));var x=E.a,j=o.a.createElement(S.Backdrop,null,o.a.createElement(a.a,{content:function(e){var t=e.complete,n=e.total,r=e.labelId;return o.a.createElement(w,{complete:t,total:n,labelId:r})}})),P=(t.default=j,[{id:"default",label:"Default (Trailhead)",demoStyles:E.e,element:j},{id:"trailhead-complete",label:"Trailhead Complete",demoStyles:E.e,element:o.a.createElement(S.Backdrop,null,o.a.createElement(a.a,{tiles:O,content:function(e){var t=e.complete,n=e.total,r=e.labelId;return o.a.createElement(w,{complete:t,total:n,labelId:r})}}))}])}});