var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/feeds/docs.mdx.js"]=function(e){function t(t){for(var l,r,i=t[0],c=t[1],m=t[2],o=0,u=[];o<i.length;o++)r=i[o],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(d&&d(t);u.length;)u.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(l=!1)}l&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var l={},s={36:0},n=[];function r(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=l,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(a,l,function(t){return e[t]}.bind(null,l));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var m=0;m<i.length;m++)t(i[m]);var d=c;return n.push([669,0]),a()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},669:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return z})),a.d(t,"getContents",(function(){return I}));var l=a(0),s=a.n(l),n=a(4),r=a(2),i=(a(27),a(41),a(14),a(1)),c=a(7),m=a(48),d=a(99),o=a(5),u=a.n(o),E=function(e){return s.a.createElement("article",{className:u()("slds-comment slds-media slds-hint-parent",e.className)},s.a.createElement("div",{className:"slds-media__figure"},s.a.createElement("a",{href:"#",className:"slds-avatar slds-avatar_circle slds-avatar_medium",onClick:function(e){return e.preventDefault()}},s.a.createElement("img",{alt:"Jenna Davis",src:"/assets/images/avatar2.jpg",title:"Jenna Davis avatar"}))),s.a.createElement("div",{className:"slds-media__body"},e.children))},f=function(e){return s.a.createElement("header",{className:"slds-media slds-media_center"},s.a.createElement("div",{className:"slds-grid slds-grid_align-spread slds-has-flexi-truncate"},s.a.createElement("p",{className:"slds-truncate",title:"Jenna Davis"},s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Jenna Davis")),s.a.createElement(c.b,{className:"slds-button_icon-border slds-button_icon-x-small","aria-haspopup":"true",symbol:"down",assistiveText:"More Options",title:"More Options"})))},p=function(e){return s.a.createElement("div",{className:u()("slds-comment__content slds-text-longform",e.className)},e.children)},h=function(e){return s.a.createElement("footer",null,s.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_right slds-text-body_small"},s.a.createElement("li",{className:"slds-item"},s.a.createElement("button",{className:"slds-button_reset slds-text-color_weak",title:"Like this item","aria-pressed":!!e.liked},e.liked?"Liked":"Like")),e.liked?s.a.createElement("li",{className:"slds-item"},"1 Like"):null,s.a.createElement("li",{className:"slds-item"},"16hr Ago")))},_=a(10),v=function(e){return s.a.createElement("ul",{className:"slds-post__footer-actions-list slds-list_horizontal"},s.a.createElement("li",{className:"slds-col slds-item slds-m-right_medium"},s.a.createElement("button",{title:"Like this item",className:u()("slds-button_reset slds-post__footer-action",e.liked?"slds-is-active":null),"aria-pressed":!!e.liked},s.a.createElement(_.a,{className:"slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle",sprite:"utility",symbol:"like"}),e.liked?"Liked":"Like")),s.a.createElement("li",{className:"slds-col slds-item slds-m-right_medium"},s.a.createElement("button",{title:"Comment on this item",className:"slds-button_reset slds-post__footer-action"},s.a.createElement(_.a,{className:"slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle",sprite:"utility",symbol:"share_post"})," ","Comment")),s.a.createElement("li",{className:"slds-col slds-item slds-m-right_medium"},s.a.createElement("button",{title:"Share this item",className:"slds-button_reset slds-post__footer-action"},s.a.createElement(_.a,{className:"slds-icon slds-icon-text-default slds-icon_x-small slds-align-middle",sprite:"utility",symbol:"share"})," ","Share")))},b=function(e){return s.a.createElement("ul",{className:"slds-post__footer-meta-list slds-list_horizontal slds-has-dividers_right slds-text-title"},e.comments?s.a.createElement("li",{className:"slds-item"},e.comments||"0"," comments"):null,s.a.createElement("li",{className:"slds-item"},"20 shares"),s.a.createElement("li",{className:"slds-item"},"259 views"))},N=function(e){return s.a.createElement("header",{className:"slds-post__header slds-media"},s.a.createElement("div",{className:"slds-media__figure"},s.a.createElement("a",{href:"#",className:"slds-avatar slds-avatar_circle slds-avatar_large",onClick:function(e){return e.preventDefault()}},s.a.createElement("img",{alt:"Jason Rodgers",src:"/assets/images/avatar1.jpg",title:"Jason Rodgers avatar"}))),s.a.createElement("div",{className:"slds-media__body"},s.a.createElement("div",{className:"slds-grid slds-grid_align-spread slds-has-flexi-truncate"},s.a.createElement("p",null,s.a.createElement("a",{href:"#",title:"Jason Rodgers",onClick:function(e){return e.preventDefault()}},"Jason Rogers")," ","—"," ",s.a.createElement("a",{href:"#",title:"Design Systems",onClick:function(e){return e.preventDefault()}},"Design Systems")),s.a.createElement(c.b,{className:"slds-button_icon-border slds-button_icon-x-small","aria-haspopup":"true",symbol:"down",assistiveText:"More Options",title:"More Options"})),s.a.createElement("p",{className:"slds-text-body_small"},s.a.createElement("a",{href:"#",title:"Click for single-item view of this post",className:"slds-text-link_reset",onClick:function(e){return e.preventDefault()}},"5 days Ago"))))},g=function(e){return s.a.createElement("div",{className:u()("slds-post__content slds-text-longform",e.className)},e.children)},y=function(e){return s.a.createElement("footer",{className:u()("slds-post__footer",e.className)},e.children)},k=function(e){return s.a.createElement("article",{className:u()("slds-post",e.className)},e.children)},w=function(e){return s.a.createElement("div",{className:"slds-feed__item-comments"},e.children)},x=function(e){return s.a.createElement("ul",null,i.d.times(e.comments||1,(function(e){return s.a.createElement("li",{key:"comment-".concat(e)},s.a.createElement(E,null,s.a.createElement(f,null),s.a.createElement(p,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement(h,null)))})))},D=s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",title:"Jenna Davis",onClick:function(e){return e.preventDefault()}},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,null)))))),O=[{id:"post-with-liker-bar",label:"Like",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",title:"Jenna Davis",onClick:function(e){return e.preventDefault()}},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(v,{liked:!0}),s.a.createElement(b,{liked:!0}))),s.a.createElement(w,null,s.a.createElement("div",{className:"slds-p-horizontal_medium slds-p-vertical_x-small"},s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"You")," ","liked this post")))))}],j=[{id:"post-attachment-link",label:"Link attachment",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",title:"Jenna Davis",onClick:function(e){return e.preventDefault()}},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement("div",{className:"slds-post__payload"},s.a.createElement(m.a,{articleTitle:"Maui By Air The Best Way Around The Island",articleDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."})),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,null))))))},{id:"post-attachment-files",label:"Files(s) attachment",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",title:"Jenna Davis",onClick:function(e){return e.preventDefault()}},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement("div",{className:"slds-post__payload"},s.a.createElement("ul",{className:"slds-grid slds-grid_pull-padded"},s.a.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3"},s.a.createElement(m.b,{isCard:!0,has16x9Crop:!0,hasTitleCard:!0,symbol:"image",hasImage:!0})),s.a.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3 slds-medium-show"},s.a.createElement(m.b,{isCard:!0,has16x9Crop:!0,hasTitleCard:!0,symbol:"pdf"})),s.a.createElement("li",{className:"slds-p-horizontal_xx-small slds-size_1-of-2 slds-medium-size_1-of-3"},s.a.createElement(m.b,{isCard:!0,has16x9Crop:!0,title:"22+",hasImage:!0,hasOverlay:!0})))),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,null))))))},{id:"post-with-comments",label:"With replies",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",title:"Jenna Davis",onClick:function(e){return e.preventDefault()}},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,{comments:"2"}))),s.a.createElement(w,null,s.a.createElement(x,{comments:"2"}),s.a.createElement(d.a,null)))))},{id:"post-with-overflow",label:"Replies - Overflow Bar",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",title:"Jenna Davis",onClick:function(e){return e.preventDefault()}},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,{comments:"8"}))),s.a.createElement(w,null,s.a.createElement("div",{className:"slds-p-horizontal_medium slds-p-vertical_x-small slds-grid"},s.a.createElement("button",{className:"slds-button_reset slds-text-link"},"More comments"),s.a.createElement("span",{className:"slds-text-body_small slds-col_bump-left"},"1 of 8")),s.a.createElement(x,null),s.a.createElement(d.a,null)))))},{id:"post-with-publisher-active",label:"Replies - Publisher active",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",title:"Jenna Davis",onClick:function(e){return e.preventDefault()}},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,{comments:"8"}))),s.a.createElement(w,null,s.a.createElement("div",{className:"slds-p-horizontal_medium slds-p-vertical_x-small slds-grid"},s.a.createElement("button",{className:"slds-button_reset slds-text-link"},"More comments"),s.a.createElement("span",{className:"slds-text-body_small slds-col_bump-left"},"1 of 8")),s.a.createElement(x,null),s.a.createElement(d.a,{className:"slds-is-active slds-has-focus"})))))},{id:"questions",label:"Question",element:s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("h3",{className:"slds-text-heading_small"},"Barbecue Party Tips For A Truly Amazing Event?"),s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",title:"Jenna Davis",onClick:function(e){return e.preventDefault()}},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,null))))))}],J=s.a.createElement("div",{className:"slds-feed"},s.a.createElement("ul",{className:"slds-feed__list"},s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,null))),s.a.createElement(w,null,s.a.createElement("div",{className:"slds-p-horizontal_medium slds-p-vertical_x-small slds-grid"},s.a.createElement("button",{className:"slds-button_reset slds-text-link"},"More comments"),s.a.createElement("span",{className:"slds-text-body_small slds-col_bump-left"},"1 of 8")),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(E,null,s.a.createElement(f,null),s.a.createElement(p,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),s.a.createElement(h,null)))))),s.a.createElement("li",{className:"slds-feed__item"},s.a.createElement(k,null,s.a.createElement(N,null),s.a.createElement(g,null,s.a.createElement("p",null,"Hey there! Here's the latest demo presentation"," ",s.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()},title:"Jenna Davis"},"@Jenna Davis"),", let me know if there are any changes. I've updated slides 3-8 and slides 16-18 slides with new product shots.")),s.a.createElement(y,null,s.a.createElement(v,null),s.a.createElement(b,null)))))),C=n.c.code,S=n.c.h2,L=n.c.h3,H=n.c.p,z=function(){return Object(l.createElement)(n.b,{},Object(l.createElement)("div",{className:"doc lead"},"A feed consists of a list of recurring elements of similar types. Examples of a feed would be a discussion feed."),Object(l.createElement)(r.a,{exampleOnly:!0},Object(i.f)(O,"post-with-liker-bar")),S({id:"About-Feeds"},"About Feeds"),L({id:"Accessibility"},"Accessibility"),H({},"Most feeds have a media object containing the user's name and avatar image. If both the image and the name link to the same location, add ",C({},'tab-index="-1"')," to the ",C({},"<a>")," element so that assistive technology does not read out duplicate links."),S({id:"Base"},"Base"),Object(l.createElement)(r.a,null,Object(i.f)(J)),S({id:"Post"},"Post"),Object(l.createElement)(r.a,null,Object(i.f)(D)),S({id:"Examples"},"Examples"),L({id:"Link-attachment"},"Link attachment"),Object(l.createElement)(r.a,null,Object(i.f)(j,"post-attachment-link")),L({id:"Files(s)-attachment"},"Files(s) attachment"),Object(l.createElement)(r.a,null,Object(i.f)(j,"post-attachment-files")),L({id:"With-replies"},"With replies"),Object(l.createElement)(r.a,null,Object(i.f)(j,"post-with-comments")),L({id:"Replies-Overflow-Bar"},"Replies - Overflow Bar"),Object(l.createElement)(r.a,null,Object(i.f)(j,"post-with-overflow")),L({id:"Replies-Publisher-active"},"Replies - Publisher active"),Object(l.createElement)(r.a,null,Object(i.f)(j,"post-with-publisher-active")),L({id:"Question"},"Question"),Object(l.createElement)(r.a,null,Object(i.f)(j,"questions")),S({id:"States"},"States"),L({id:"Like"},"Like"),Object(l.createElement)(r.a,null,Object(i.f)(O,"post-with-liker-bar")))},I=function(){return Object(n.a)(z())}}});