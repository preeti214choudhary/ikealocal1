"use strict";!function(){window._uxa=window._uxa||[];var e=window.utag_data?window.utag_data:void 0;try{""!=document.location.search&&(!function(e){for(var a=0;a<e.length;a++){var n=e[a],t=("gclid"!==(r=n.name)?new RegExp(r+"=([a-zA-Z0-9-_]+)"):new RegExp("gclid=([a-zA-Z0-9-_]+)")).exec(document.location.search),i=null!=(o=t)&&void 0!==o[1]&&o[1].toLowerCase();i&&window._uxa.push(["trackDynamicVariable",{key:n.key,value:n.hasOwnProperty("value")?n.value:i}])}var o,r}([{name:"utm_medium",key:"Medium"},{name:"utm_campaign",key:"Campaign"},{name:"utm_source",key:"Source"},{name:"gclid",key:"Gclid",value:"true"}]),window.addEventListener("error",function(e){var a=e&&e.detail?e.detail:{};"error"===a.event_category&&window._uxa.push(["trackDynamicVariable",{key:"error_tracking",value:a.event_action+" - "+a.event_label}])})),e&&function(a){for(var n=0;n<a.length;n++){var t=a[n],i=n,o=i+=1;e.hasOwnProperty(t)&&window._uxa.push(["setCustomVariable",o,t,e[t],3])}}(["page_type","site_level_1","site_level_2","page_name"])}catch(e){console.error(e)}if("undefined"==typeof CS_CONF){window._uxa.push(["setPath",window.location.pathname+window.location.hash.replace("#","?__")]);var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="//t.contentsquare.net/uxa/4b1a51b75a6ea.js",document.getElementsByTagName("head")[0].appendChild(a)}else window._uxa.push(["trackPageview",window.location.pathname+window.location.hash.replace("#","?__")]);window.addEventListener("add_to_cart",function(){window._uxa.push(["trackPageview",window.location.pathname+window.location.hash.replace("#","?__")+"?cs-popin-add-to-bag"])}),window.addEventListener("purchase",function(e){var a=e.detail.params;window._uxa.push(["ecommerce:addTransaction",{id:a.transaction_id,revenue:a.value,shipping:a.shipping,tax:a.tax}]),window._uxa.push(["ecommerce:send"])})}();