(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+rcc":function(e,t,a){e.exports={wrapper:"category-item-list-module--wrapper--2l6te",header:"category-item-list-module--header--32CZs",icon:"category-item-list-module--icon--3Y5rx",chevron:"category-item-list-module--chevron--cmaV2",linkBack:"category-item-list-module--linkBack--K051_"}},"2u68":function(e,t,a){e.exports={"btn-small-black":"variants-module--btn-small-black--398fP",btnSmallBlack:"variants-module--btn-small-black--398fP"}},CSOH:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TSYQ"),l=a.n(i),c=a("WaYV"),o=a.n(c);t.a=function(e){var t,a=e.menu,n=e.children,i=e.hideMenuOnMobile;return r.a.createElement("div",{className:l()(o.a.wrapper,"mt-3")},r.a.createElement("nav",{className:l()((t={},t[o.a.hideOnMobile]=i,t))},a),r.a.createElement("div",{className:o.a.main},n))}},Fjk4:function(e,t,a){"use strict";var n=a("+uiX");a.d(t,"a",(function(){return n.b}))},"I+D7":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("TSYQ"),r=a.n(n),i=a("q1tI"),l=a.n(i),c=a("eicg"),o=a("W+yO"),m=a.n(o),s=function(e){var t=e.iconCode,a=e.className,n=e.children;return l.a.createElement("div",{className:r()(a,m.a.headlineWrapper)},l.a.createElement("h1",{className:r()(m.a.headline)},t&&l.a.createElement(c.a,{className:m.a.headlineIcon,code:t}),l.a.createElement("span",null,n)),l.a.createElement("hr",null))}},NsY5:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return I}));var n=a("q1tI"),r=a.n(n),i=a("6Hpx"),l=a("n214"),c=a("I+D7"),o=a("zoQI"),m=a("dT4H"),s=a("jufJ"),u=a("Yal5"),d=a.n(u),b=a("TSYQ"),p=a.n(b),v=function(e){var t=e.title,a=e.description,n=e.link;return r.a.createElement(m.a,{to:n,className:p()("card text-decoration-none",d.a.listItem)},r.a.createElement("h2",{className:"font-weight-medium mb-1"},t),r.a.createElement("div",{className:"d-flex justify-content-between align-items-end"},r.a.createElement("p",{className:"m-0 color-gray"},a),r.a.createElement("div",{className:d.a.buttonWrapper},r.a.createElement(o.a,{text:Object(s.b)("detail"),variant:"outline"}))))},f=a("21qS"),h=a("QoFz"),E=a("Fjk4"),y=a("Z3BO"),g=a("CSOH"),I=(t.default=function(e){var t,a,n,o,m=e.data,u=e.pageContext,d=m.area,b=(null===(t=d.relationships)||void 0===t?void 0:t.situation)||[],p=new Intl.Collator([u.langCode]);return b.sort((function(e,t){return p.compare(e.title,t.title)})),r.a.createElement(f.a,{pageContext:u},r.a.createElement(l.a,{title:d.name,description:Object(s.b)("situations_overview_meta"),pagePath:"/situations"}),r.a.createElement(E.a,{langCode:u.langCode,isBlogPost:!1,isBlogList:!0,title:d.name,description:Object(s.b)("situations_overview_meta"),breadcrumbItems:[{title:Object(s.b)("home"),url:"/"},{title:Object(s.b)("life_situations"),url:Object(s.b)("slug_situations")},d.name]}),r.a.createElement(i.a,null,r.a.createElement("div",{className:"pt-1"},r.a.createElement(h.a,{items:[{title:Object(s.b)("home"),url:"/"},{title:Object(s.b)("life_situations"),url:Object(s.b)("slug_situations")},d.name],variant:"inverse"})),r.a.createElement(g.a,{menu:r.a.createElement(y.b,{data:m.allSituationAreas.nodes}),hideMenuOnMobile:!0},r.a.createElement(c.a,{iconCode:null===(a=m.area)||void 0===a||null===(n=a.relationships)||void 0===n||null===(o=n.icon)||void 0===o?void 0:o.code},d.name),b.map((function(e){var t=e.id,a=e.title,n=e.meta_description,i=e.path;return r.a.createElement(v,{title:a,description:n,key:"area-list-item-"+t,link:null==i?void 0:i.alias})})))))},"4104966069")},QoFz:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("TSYQ"),r=a.n(n),i=a("q1tI"),l=a.n(i),c=a("dT4H"),o=a("pvlE"),m=a.n(o),s=function(e){return r()("breadcrumb",m.a.breadcrumbContainer,{"breadcrumb--inverse":"inverse"===e})},u=function(e){var t=e.items,a=e.variant,n=void 0===a?"normal":a,i=function(e){var a;return r()("breadcrumb__item",m.a.breadcrumbItem,((a={})[m.a.breadcrumbItemActive]=e===t.length-1,a))};return l.a.createElement("nav",{className:"breadcrumbs","aria-label":"breadcrumb"},l.a.createElement("ol",{className:s(n)},t.map((function(e,t){return l.a.createElement("li",{key:"breadcrumb-item-"+t,className:i(t)},function(e){return void 0!==e.title}(e)?l.a.createElement(c.a,{to:e.url,className:"breadcrumb__link",title:e.title}):l.a.createElement("span",{className:"breadcrumb__link"},e))}))))}},"W+yO":function(e,t,a){e.exports={headlineWrapper:"headline-module--headlineWrapper--1KseK",headline:"headline-module--headline--2EZlD",headlineIcon:"headline-module--headlineIcon--3wPWI"}},WaYV:function(e,t,a){e.exports={wrapper:"desktop-left-menu-layout-module--wrapper--2FRhZ",hideOnMobile:"desktop-left-menu-layout-module--hideOnMobile--3x5nP",main:"desktop-left-menu-layout-module--main--2USeX"}},Yal5:function(e,t,a){e.exports={listItem:"measure-list-card-module--listItem--2NERh",buttonWrapper:"measure-list-card-module--buttonWrapper--3V2sV"}},Z3BO:function(e,t,a){"use strict";a.d(t,"c",(function(){return y})),a.d(t,"a",(function(){return I})),a.d(t,"b",(function(){return k}));var n=a("q1tI"),r=a.n(n),i=a("+rcc"),l=a.n(i),c=a("TSYQ"),o=a.n(c),m=a("R99l"),s=a("dT4H"),u=a("j++a"),d=a("rBsq"),b=a.n(d),p=function(e){var t,a=e.name,n=e.path,i=e.iconCode,l=e.isActive;return r.a.createElement(s.a,{to:n,className:o()(b.a.categoryItem,"py-2",(t={},t[b.a.isActive]=l,t))},i&&r.a.createElement(u.a,{className:b.a.categoryItemIcon,code:i}),r.a.createElement("span",{className:b.a.categoryItemTitle},a),r.a.createElement("div",{className:b.a.chevron},r.a.createElement(m.a,{style:{fontSize:18},className:"color-yellow"})))},v=a("jufJ"),f=a("LYUY"),h=Object(f.a)(r.a.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft"),E=a("eicg"),y=function(e){var t=e.items,a=e.title,n=e.titleIconCode,i=e.linkBack,c=Object(v.c)(),o=new Intl.Collator([c]);t.sort((function(e,t){return o.compare(e.name,t.name)}));var m=a.split(" ").reduce((function(e,t,a){return 0===a?e+"<strong>"+t+"</strong>":e+" "+t}),"");return r.a.createElement("div",{className:l.a.wrapper},r.a.createElement("div",{className:l.a.header},r.a.createElement("h2",null,n&&r.a.createElement(E.a,{code:n,className:l.a.icon}),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:m}})),i?r.a.createElement(s.a,{className:l.a.linkBack,to:i.slug},r.a.createElement(h,{style:{fontSize:18},className:l.a.chevron})," ",r.a.createElement("span",null,Object(v.b)("back_to")," ",i.title)):r.a.createElement("hr",null)),t.map((function(e,t){return r.a.createElement(p,Object.assign({key:""+e.iconCode+t},e))})))},g=a("YwZP"),I=function(e){var t=e.data,a=Object(g.useLocation)(),n=t.filter((function(e){return null!==e.relationships.measure})).map((function(e){var t,n=e.id,r=e.name,i=e.path,l=e.relationships;return{id:n,name:r,path:i.alias,iconCode:null===(t=l.icon)||void 0===t?void 0:t.code,isActive:i.alias===a.pathname}}));return r.a.createElement(y,{items:n,title:Object(v.b)("current_measures")})},k=function(e){var t=e.data,a=Object(g.useLocation)(),n=t.filter((function(e){return null!==e.relationships.situation})).map((function(e){var t,n=e.id,r=e.name,i=e.path,l=e.relationships;return{id:n,name:r,path:i.alias,iconCode:null===(t=l.icon)||void 0===t?void 0:t.code,isActive:i.alias===a.pathname}}));return r.a.createElement(y,{items:n,title:Object(v.b)("life_situations")})}},pvlE:function(e,t,a){e.exports={breadcrumbContainer:"breadcrumb-module--breadcrumbContainer--aIVuB",breadcrumbItem:"breadcrumb-module--breadcrumbItem--3jBwP",breadcrumbItemActive:"breadcrumb-module--breadcrumbItemActive--6MwJy"}},rBsq:function(e,t,a){e.exports={categoryItem:"category-item-module--categoryItem--3V8HX",chevron:"category-item-module--chevron--D9HLp",categoryItemIcon:"category-item-module--categoryItemIcon--3wAWD",categoryItemTitle:"category-item-module--categoryItemTitle--ErF2o",isActive:"category-item-module--isActive--3zXaE"}},zoQI:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("zLVn"),r=a("q1tI"),i=a.n(r),l=a("TSYQ"),c=a.n(l),o=a("2u68"),m=a.n(o),s=a("dT4H"),u=function(e){var t=e.className,a=e.variant,r=Object(n.a)(e,["className","variant"]),l=c()(function(e){var t;return c()({btn:"small-black"!==e},{"btn-primary":"contained"===e},{"btn-outline-primary":"outline"===e},{"btn-outline-dark":"outline-black"===e},{"btn-outline-yellow":"outline-yellow"===e},{"btn-yellow":"yellow"===e},{"text-black":"outline-black"===e},{"btn-secondary":"secondary"===e},((t={})[m.a.btnSmallBlack]="small-black"===e,t))}(a),t);if(function(e){return"href"in e}(r)){var o=r.href,u=r.text,d=r.icon,b=Object(n.a)(r,["href","text","icon"]);return i.a.createElement(s.a,Object.assign({dataTestId:"button-link",to:o,className:l},b),u,d)}var p=r,v=p.text,f=p.icon,h=Object(n.a)(p,["text","icon"]);return i.a.createElement("button",Object.assign({type:"button",className:l},h),v,f)}}}]);
//# sourceMappingURL=component---src-templates-situations-list-tsx-a86a68f32ab3b39f1c3c.js.map