!function(u){function e(e){for(var n,t,r=e[0],o=e[1],c=e[2],a=0,i=[];a<r.length;a++)t=r[a],Object.prototype.hasOwnProperty.call(p,t)&&p[t]&&i.push(p[t][0]),p[t]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(u[n]=o[n]);for(m&&m(e);i.length;)i.shift()();return s.push.apply(s,c||[]),d()}function d(){for(var e,n=0;n<s.length;n++){for(var t=s[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==p[c]&&(r=!1)}r&&(s.splice(n--,1),e=l(l.s=t[0]))}return e}var t={},f={3:0},p={3:0},s=[];function l(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return u[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(s){var e=[];f[s]?e.push(f[s]):0!==f[s]&&{2:1,5:1,6:1,10:1,11:1}[s]&&e.push(f[s]=new Promise(function(e,r){for(var n=({1:"vendors~recommendation-carousel~revamp-add-to-cart",2:"add-to-cart",4:"recently-viewed",5:"recommendation-carousel",6:"revamp-add-to-cart",8:"vendors~revamp-add-to-cart"}[s]||s)+"."+{0:"31d6cfe0",1:"31d6cfe0",2:"b2a0e945",4:"31d6cfe0",5:"c7fd3137",6:"776f8fa9",8:"31d6cfe0",9:"31d6cfe0",10:"13ddf20c",11:"2695b5d2"}[s]+".css",o=l.p+n,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var a=(u=t[c]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(a===n||a===o))return e()}var i=document.getElementsByTagName("style");for(c=0;c<i.length;c++){var u;if((a=(u=i[c]).getAttribute("data-href"))===n||a===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,t=new Error("Loading CSS chunk "+s+" failed.\n("+n+")");t.request=n,delete f[s],d.parentNode.removeChild(d),r(t)},d.href=o,document.getElementsByTagName("head")[0].appendChild(d)}).then(function(){f[s]=0}));var t=p[s];if(0!==t)if(t)e.push(t[2]);else{var n=new Promise(function(e,n){t=p[s]=[e,n]});e.push(t[2]=n);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=function(e){return l.p+""+({1:"vendors~recommendation-carousel~revamp-add-to-cart",2:"add-to-cart",4:"recently-viewed",5:"recommendation-carousel",6:"revamp-add-to-cart",8:"vendors~revamp-add-to-cart"}[e]||e)+"."+{0:"530a82e9",1:"05e370e9",2:"ebe4b33e",4:"480dfd92",5:"e8686ca3",6:"549dfa50",8:"0f5e8cf3",9:"1da76632",10:"b349a031",11:"6db863e8"}[e]+".js"}(s);var c=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(a);var n=p[s];if(0!==n){if(n){var t=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+s+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,n[1](c)}p[s]=void 0}};var a=setTimeout(function(){r({type:"timeout",target:o})},12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},l.m=u,l.c=t,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)l.d(t,r,function(e){return n[e]}.bind(null,r));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="recommendations/recently-viewed/index.html",l.oe=function(e){throw console.error(e),e};var n=window.webpackJsonpRecentlyViewed=window.webpackJsonpRecentlyViewed||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var m=r;s.push([24,7]),d()}([,function(e,n,t){"use strict";n.a={addToCart:{enabled:!0,loaded:!1,module:null,onLoad:[]},recentlyViewed:{enabled:!0,loaded:!1,module:null,onLoad:[]},carousel:{enabled:!1,loaded:!1,module:null,onLoad:[]}}},function(e,n,t){"use strict";n.a=function(e){try{window.sendEvent(e)}catch(e){}}},,,function(e,n,t){"use strict";t.d(n,"g",function(){return r}),t.d(n,"e",function(){return o}),t.d(n,"h",function(){return c}),t.d(n,"c",function(){return a}),t.d(n,"b",function(){return i}),t.d(n,"d",function(){return u}),t.d(n,"i",function(){return d}),t.d(n,"a",function(){return s}),t.d(n,"f",function(){return f});var r="similar",o="popular-products",c="style-products",a="easy-pick-products",i="bti-products",u="new-products",d="you-might-like",s="add-to-cart",f="recent-products"},,function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return o}),t.d(n,"e",function(){return c}),t.d(n,"c",function(){return a}),t.d(n,"d",function(){return i});var r={event_category:"pip_page_actions",event_action:"add_to_cart_popup_action",event_label:"add_to_cart_recommendations",transport_type:"beacon",custom:{version:"ikea_rec"}},o={event_category:"recommendations_event",event_action:"rec_ab_test_decision",transport_type:"beacon",custom:{version:"ikea_rec"}},c={event_action:"link_clicks",event_label:"recently_viewed_recommendations",transport_type:"beacon",custom:{version:"ikea_rec"}},a={event_category:"plp_page_actions",event_action:"link_clicks",event_label:"category_recommendations",transport_type:"beacon",custom:{version:"ikea_rec"}},i={name:"view_item_list",transport_type:"beacon"}},,function(e,n,t){"use strict";function r(e){f(e)&&Object(d.a)({event_label:"pip-post-purchase-addon | ".concat(e.composition),name:"add_to_cart",params:{currency:e.currency,items:[{id:e.id,price:e.price,quantity:e.quantity,list_click_position:e.index}]}})}function o(e){l(e)&&Object(d.a)(Object.assign(p.b,{event_label:"product_click | ".concat(e.type),custom:{version:"ikea_rec",item_number_event:e.id,technical_component:"".concat(e.composition),position:e.index}}))}function c(){Object(d.a)(Object.assign(p.b,{event_label:"rec_popup_available",non_interaction:!0,custom:{version:"ikea_rec"}}))}function a(e){h(e)&&Object(d.a)(Object.assign(p.e,{event_category:e.event_category}))}function i(){Object(d.a)(p.c)}function u(e){y(e)&&Object(d.a)({event_category:"pip_page_actions",event_action:"link_clicks",event_label:e.label,transport_type:"beacon",custom:{version:"ikea_rec",product_list_variant:e.configId}})}var d=t(2),s=function(n,r){return function(t){var e=Object.keys(r).reduce(function(e,n){return void 0===t[n]?e.concat(n):e},[]);return!e.length||(console.error("Missing keys in object [".concat(n,"]: ").concat(e)),!1)}},f=s("addToCart",{currency:!0,id:!0,price:!0,quantity:!0,composition:!0,index:!0}),p=t(7),l=s("productClick",{id:!0,composition:!0,type:!0,index:!0}),m=s("addToCart",{composition:!0}),v=function(n){return function(e){m(e)&&Object(d.a)(Object.assign(p.b,{event_label:n,custom:{version:"ikea_rec",technical_component:"".concat(e.composition),dimension55:e.variation}}))}},h=s("recentlyViewedProductClick",{event_category:!0}),y=s("addToCart",{label:!0,configId:!0});n.a={addToCart:r,productClick:o,closePopup:{cancel:v("close_cancel"),cross:v("close_x"),overlay:v("close_overlay")},openPopup:v("open_popup"),cartLink:v("cart_link_click"),popupAvailable:c,recentlyViewedProductClick:a,categoryClick:i,pipRecommendationsLinkClick:u}},function(e,n,t){"use strict";n.a=function(e,n){for(var t=e;t;){if(t.matches&&t.matches(n))return t;t=t.parentNode}return null}},,function(e,n,t){"use strict";function r(e){var n=e.count,t=e.catalog,r=["n=".concat(n)];t&&r.push("categoryId=".concat(t));var o="".concat("https://rec.ingka.com/recommendations/v1/fr-prod/items/popular/","?").concat(r.join("&"));return fetch(o).then(function(e){var n=e.headers.get("x-ikea-rec-config-id")||null;if(e.ok)return[e,n]}).then(function(e){var n=b()(e,2),t=n[0],r=n[1];return t.json().then(function(e){return[e,{configId:r}]})})}function o(e){var n=e.count,t=e.product,r="n=".concat(n),o="".concat("https://rec.ingka.com/recommendations/v1/fr-prod/items/style","https://www.ikea.com/").concat(t,"?").concat(r);return fetch(o).then(function(e){var n=e.headers.get("x-ikea-rec-config-id")||null;if(e.ok)return[e,n]}).then(function(e){var n=b()(e,2),t=n[0],r=n[1];return t.json().then(function(e){return[e.data.recommended,{configId:r}]})})}function c(e){var n=e.count,t="".concat("https://rec.ingka.com/recommendations/v1/fr-prod/items/easypick/","?n=").concat(n);return fetch(t).then(function(e){var n=e.headers.get("x-ikea-rec-config-id")||null;if(e.ok)return[e,n]}).then(function(e){var n=b()(e,2),t=n[0],r=n[1];return t.json().then(function(e){return[e,{configId:r}]})})}function a(e){var n=e.count,t="".concat("https://rec.ingka.com/recommendations/v1/fr-prod/items/new/","?n=").concat(n);return fetch(t).then(function(e){var n=e.headers.get("x-ikea-rec-config-id")||null;if(e.ok)return[e,n]}).then(function(e){var n=b()(e,2),t=n[0],r=n[1];return t.json().then(function(e){return[e,{configId:r}]})})}function i(e){var n=e.count,t="".concat("https://rec.ingka.com/recommendations/v1/fr-prod/items/bti/","?n=").concat(n);return fetch(t).then(function(e){var n=e.headers.get("x-ikea-rec-config-id")||null;if(e.ok)return[e,n]}).then(function(e){var n=b()(e,2),t=n[0],r=n[1];return t.json().then(function(e){return[e,{configId:r}]})})}function u(e){var n=e.count,t=e.product,r="".concat("https://rec.ingka.com/recommendations/v1/fr-prod/items","https://www.ikea.com/").concat(t,"?n=").concat(n,"&filter=allSameCat");return fetch(r).then(function(e){var n=e.headers.get("x-ikea-rec-config-id")||null;if(e.ok)return[e,n]}).then(function(e){var n=b()(e,2),t=n[0],r=n[1];return t.json().then(function(e){return[e,{configId:r}]})})}function d(e){var n=e.count,t=e.product,r="".concat("https://rec.ingka.com/recommendations/v1/fr-prod/items","https://www.ikea.com/").concat(t,"?n=").concat(n);return fetch(r).then(function(e){var n=e.headers.get("x-ikea-rec-config-id")||null;if(e.ok)return[e,n]}).then(function(e){var n=b()(e,2),t=n[0],r=n[1];return t.json().then(function(e){return[e,{configId:r}]})})}var s,f=t(0),p=t.n(f),l=t(4),m=t.n(l),v=t(6),h=t.n(v),y=t(3),b=t.n(y),g=function(e){var n=e.productId;return fetch("https://rec.ingka.com/recommendations/v1/gb-prod/items/addtocart".concat("/"+n)).then(function(e){if(e.ok)return e}).then(function(e){return e.json()})},_=t(10),w=t(9),k=t(5);function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function j(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(t,!0).forEach(function(e){m()(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}function E(e){var a=0<arguments.length&&void 0!==e?e:"unknown_recommendation";return function(e){var n=e.index,t=e.type,r=e.event,o=Object(_.a)(r.target,"a");if(o){var c=o.parentNode.parentNode.dataset.refId;w.a.productClick({id:"s"===c[0]?c.substring(1):c,index:n,type:t,composition:a})}}}var P=function(){var n=h()(p.a.mark(function e(n){var t,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.productId,e.next=3,g({productId:t});case 3:return r=e.sent,e.abrupt("return",r&&r.data&&r.data.recommended.map(function(e){return j({},e,{source:"API"})}));case 5:case"end":return e.stop()}},e)}));return function(e){return n.apply(this,arguments)}}();n.a=(s={},m()(s,k.e,{func:r,analyticsHandler:E("popular")}),m()(s,k.c,{func:c,analyticsHandler:E("easyPickers")}),m()(s,k.d,{func:a,analyticsHandler:E("newProducts")}),m()(s,k.b,{func:i,analyticsHandler:E("btiProducts")}),m()(s,k.h,{func:o,analyticsHandler:E("styleProducts")}),m()(s,k.f,{func:function(e){return{}},analyticsHandler:function(){}}),m()(s,k.g,{func:u,analyticsHandler:function(e,n){var t=e.event,r=n.configId;Object(_.a)(t.target,"a")&&w.a.pipRecommendationsLinkClick({label:"catalogue_recommendations",configId:r})}}),m()(s,k.i,{func:d,analyticsHandler:function(e,n){var t=e.event,r=n.configId;Object(_.a)(t.target,"a")&&w.a.pipRecommendationsLinkClick({label:"general_recommendations",configId:r})}}),m()(s,k.a,{func:P,analyticsHandler:function(){}}),s)},,,function(e,n,t){"use strict";var r=t(4),u=t.n(r),o=t(8),d=t.n(o);function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})),t.push.apply(t,r)}return t}function f(e){return"string"!=typeof e&&console.warn("Product id",e,"is not a string!"),"".concat(e)}function c(n){return function(e){return window.recEvent.subscribe(n,e)}}var p="REC_UPDATE_ADD_RECOMMENDATIONS",l="REC_UPDATE_REMOVE_RECOMMENDATIONS",m="REC_UPDATE_CLEAR_RECOMMENDATIONS",v="REC_UPDATE_SET_HEADER",h="REC_UPDATE_RENAME_ANALYTICS",a=c(p),i=c(l),y=c(m),b=c(h),g=c(v);n.a={addSupport:function(){var e=window.localRecommendations||window.recommendations&&window.recommendations.addToCart||[],n=!1,t=null,r=[],o=[],c={setHeader:function(e){window.recEvent.dispatch([v],e)},clear:function(){n=!0,window.recEvent.dispatch([m],n)},renameAnalyticsLabel:function(e){t=e,window.recEvent.dispatch([h],t)},remove:function(e){Array.isArray(e)?o.push.apply(o,d()(e.map(f))):o.push(f(e)),window.recEvent.dispatch([l],o)},push:function(e){r.push.apply(r,d()(e.map(function(e){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(t,!0).forEach(function(e){u()(n,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})}return n}({},e,{source:"LOCAL"})}))),window.recEvent.dispatch([p],r)}};e&&c.push(e);var a={didInit:!0,addToCart:c};window.recommendations=a,window.localRecommendations=a.addToCart;var i=window.onRecommendationsLoad||[];window.onRecommendationsLoad={push:function(e){try{e("add-to-cart",a)}catch(e){}}},i.forEach(function(e){try{e("add-to-cart",a)}catch(e){}})},onAdd:a,onRemove:i,onClear:y,onAnalyticsRename:b,onSetHeader:g}},function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return r});var r="pip",o=function(){if("undefined"!=typeof utag_data&&void 0!==utag_data.page_type&&"home page"===utag_data.page_type)return"start";var e=new RegExp("^/".concat("gb/en","https://www.ikea.com/(cat|p)/")).exec(window.location.pathname);return null===e||void 0===e[1]?"":"cat"===e[1]?"plp":"p"===e[1]?r:""}},,,,,,,,function(e,n,i){"use strict";i.r(n);function t(u,d,e){var s=e.productId;return function(){var n=c()(f.a.mark(function e(n){var t,r,o,c,a,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.AddToCartContainer,r=_.a[d]&&_.a[d].func)return e.next=5,r({productId:s});e.next=10;break;case 5:o=e.sent,c=document.querySelector("[data-test-target-product-name]"),a=c&&c.innerHTML,(i=document.querySelector(u))&&Object(v.k)(Object(v.h)(t,{productId:s,productName:a,recommendations:o}),i);case 10:case"end":return e.stop()}},e)}));return function(e){return n.apply(this,arguments)}}()}var r=i(0),f=i.n(r),o=i(6),c=i.n(o),a=i(8),u=i.n(a),d=i(13),s=i.n(d),p=i(14),l=i.n(p),m=function(){function e(){s()(this,e),this.subscriptions={},this.history={}}return l()(e,[{key:"getHistory",value:function(e){return this.history[e]||null}},{key:"dispatch",value:function(n,t){if(this.history[n]=[].concat(u()(this.history[n]||[]),[t]),!this.subscriptions[n])return null;this.subscriptions[n].forEach(function(e){e(n,t)})}},{key:"subscribe",value:function(e,n){this.subscriptions[e]?this.subscriptions[e].push(n):this.subscriptions[e]=[n]}}]),e}(),v=i(11),h=i(15),y=i(1),b=i(16),g=function(){var e=c()(f.a.mark(function e(){var n,t,r,o,c,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(b.b)(),t={isPip:"pip"===n,isPlp:"plp"===n},r=!!document.querySelector("div[data-mount-recommendations]")||!!document.querySelector("[data-has-recommendations]"),!t.isPip||!y.a.addToCart.enabled){e.next=17;break}!1,e.next=11;break;case 8:o=e.sent,e.next=14;break;case 11:return e.next=13,i.e(2).then(i.bind(null,104));case 13:o=e.sent;case 14:y.a.addToCart.loaded=!0,y.a.addToCart.module=o,y.a.addToCart.onLoad.forEach(function(e){e(o)});case 17:if(r&&y.a.carousel.enabled)return e.next=20,Promise.all([i.e(0),i.e(1),i.e(5)]).then(i.bind(null,106));e.next=24;break;case 20:c=e.sent,y.a.carousel.loaded=!0,y.a.carousel.module=c,y.a.carousel.onLoad.forEach(function(e){e(c)});case 24:if(y.a.recentlyViewed.enabled)return e.next=27,i.e(4).then(i.bind(null,105));e.next=31;break;case 27:a=e.sent,y.a.recentlyViewed.loaded=!0,y.a.recentlyViewed.module=a,y.a.recentlyViewed.onLoad.forEach(function(e){e(a)});case 31:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=i(12),w=i(5),k=document.querySelector(".js-product-pip[data-product-id]"),O=function(){var n=c()(f.a.mark(function e(n){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.run();case 1:case"end":return e.stop()}},e)}));return function(e){return n.apply(this,arguments)}}(),j=function(){var e=c()(f.a.mark(function e(){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:h.a.addSupport(),y.a.recentlyViewed.onLoad.push(O),k&&(n=k.dataset.productId,".js-sticky-bottom-bar",y.a.addToCart.onLoad.push(t(".js-sticky-bottom-bar",w.a,{productId:n}))),g();case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();window.recEvent=new m,c()(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{window.addEventListener("load",c()(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j();case 1:case"end":return e.stop()}},e)})))}catch(e){console.error(e)}case 1:case"end":return e.stop()}},e)}))()}]);
//# sourceMappingURL=rec.2380469e.js.map