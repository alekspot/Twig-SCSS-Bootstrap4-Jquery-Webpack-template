!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="./",e(e.s=6)}([function(t,n,e){(function(n){var e;e=function(){"use strict";var t=function(t){var n=t.id,e=t.viewBox,o=t.content;this.id=n,this.viewBox=e,this.content=o};function e(t,n){return t(n={exports:{}},n.exports),n.exports}t.prototype.stringify=function(){return this.content},t.prototype.toString=function(){return this.stringify()},t.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(n){return delete t[n]}))},"undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self;var o=e((function(t,n){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function n(n,e){var r;return e&&!0===e.clone&&t(n)?o((r=n,Array.isArray(r)?[]:{}),n,e):n}function e(e,r,i){var u=e.slice();return r.forEach((function(r,a){void 0===u[a]?u[a]=n(r,i):t(r)?u[a]=o(e[a],r,i):-1===e.indexOf(r)&&u.push(n(r,i))})),u}function o(r,i,u){var a=Array.isArray(i),s=(u||{arrayMerge:e}).arrayMerge||e;return a?Array.isArray(r)?s(r,i,u):n(i,u):function(e,r,i){var u={};return t(e)&&Object.keys(e).forEach((function(t){u[t]=n(e[t],i)})),Object.keys(r).forEach((function(a){t(r[a])&&e[a]?u[a]=o(e[a],r[a],i):u[a]=n(r[a],i)})),u}(r,i,u)}return o.all=function(t,n){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,e){return o(t,e,n)}))},o}()})),r=e((function(t,n){n.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=n.default})),i=r.svg,u=r.xlink,a={};a[i.name]=i.uri,a[u.name]=u.uri;var s=function(t,n){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(n){return n+'="'+t[n].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(o(a,n||{}))+">"+t+"</svg>"};return function(t){function n(){t.apply(this,arguments)}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var e={isMounted:{}};return e.isMounted.get=function(){return!!this.node},n.createFromExistingNode=function(t){return new n({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},n.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},n.prototype.mount=function(t){if(this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,e=this.render();return this.node=e,n.appendChild(e),e},n.prototype.render=function(){var t=this.stringify();return function(t){var n=!!document.importNode,e=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return n?document.importNode(e,!0):e}(s(t)).childNodes[0]},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(n.prototype,e),n}(t)},t.exports=e()}).call(this,e(2))},function(t,n,e){(function(n){var e;e=function(){"use strict";function t(t,n){return t(n={exports:{}},n.exports),n.exports}"undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self;var e=t((function(t,n){t.exports=function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function n(n,e){var r;return e&&!0===e.clone&&t(n)?o((r=n,Array.isArray(r)?[]:{}),n,e):n}function e(e,r,i){var u=e.slice();return r.forEach((function(r,a){void 0===u[a]?u[a]=n(r,i):t(r)?u[a]=o(e[a],r,i):-1===e.indexOf(r)&&u.push(n(r,i))})),u}function o(r,i,u){var a=Array.isArray(i),s=(u||{arrayMerge:e}).arrayMerge||e;return a?Array.isArray(r)?s(r,i,u):n(i,u):function(e,r,i){var u={};return t(e)&&Object.keys(e).forEach((function(t){u[t]=n(e[t],i)})),Object.keys(r).forEach((function(a){t(r[a])&&e[a]?u[a]=o(e[a],r[a],i):u[a]=n(r[a],i)})),u}(r,i,u)}return o.all=function(t,n){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce((function(t,e){return o(t,e,n)}))},o}()})),o=t((function(t,n){n.default={svg:{name:"xmlns",uri:"http://www.w3.org/2000/svg"},xlink:{name:"xmlns:xlink",uri:"http://www.w3.org/1999/xlink"}},t.exports=n.default})),r=o.svg,i=o.xlink,u={};u[r.name]=r.uri,u[i.name]=i.uri;var a,s=function(t,n){return void 0===t&&(t=""),"<svg "+function(t){return Object.keys(t).map((function(n){return n+'="'+t[n].toString().replace(/"/g,"&quot;")+'"'})).join(" ")}(e(u,n||{}))+">"+t+"</svg>"},c=o.svg,f=o.xlink,d={attrs:(a={style:["position: absolute","width: 0","height: 0"].join("; ")},a[c.name]=c.uri,a[f.name]=f.uri,a)},l=function(t){this.config=e(d,t||{}),this.symbols=[]};l.prototype.add=function(t){var n=this.symbols,e=this.find(t.id);return e?(n[n.indexOf(e)]=t,!1):(n.push(t),!0)},l.prototype.remove=function(t){var n=this.symbols,e=this.find(t);return!!e&&(n.splice(n.indexOf(e),1),e.destroy(),!0)},l.prototype.find=function(t){return this.symbols.filter((function(n){return n.id===t}))[0]||null},l.prototype.has=function(t){return null!==this.find(t)},l.prototype.stringify=function(){var t=this.config.attrs,n=this.symbols.map((function(t){return t.stringify()})).join("");return s(n,t)},l.prototype.toString=function(){return this.stringify()},l.prototype.destroy=function(){this.symbols.forEach((function(t){return t.destroy()}))};var p=function(t){var n=t.id,e=t.viewBox,o=t.content;this.id=n,this.viewBox=e,this.content=o};p.prototype.stringify=function(){return this.content},p.prototype.toString=function(){return this.stringify()},p.prototype.destroy=function(){var t=this;["id","viewBox","content"].forEach((function(n){return delete t[n]}))};var h=function(t){var n=!!document.importNode,e=(new DOMParser).parseFromString(t,"image/svg+xml").documentElement;return n?document.importNode(e,!0):e},y=function(t){function n(){t.apply(this,arguments)}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var e={isMounted:{}};return e.isMounted.get=function(){return!!this.node},n.createFromExistingNode=function(t){return new n({id:t.getAttribute("id"),viewBox:t.getAttribute("viewBox"),content:t.outerHTML})},n.prototype.destroy=function(){this.isMounted&&this.unmount(),t.prototype.destroy.call(this)},n.prototype.mount=function(t){if(this.isMounted)return this.node;var n="string"==typeof t?document.querySelector(t):t,e=this.render();return this.node=e,n.appendChild(e),e},n.prototype.render=function(){var t=this.stringify();return h(s(t)).childNodes[0]},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},Object.defineProperties(n.prototype,e),n}(p),m={autoConfigure:!0,mountTo:"body",syncUrlsWithBaseTag:!1,listenLocationChangeEvent:!0,locationChangeEvent:"locationChange",locationChangeAngularEmitter:!1,usagesToUpdate:"use[*|href]",moveGradientsOutsideSymbol:!1},g=function(t){return Array.prototype.slice.call(t,0)},v={isChrome:function(){return/chrome/i.test(navigator.userAgent)},isFirefox:function(){return/firefox/i.test(navigator.userAgent)},isIE:function(){return/msie/i.test(navigator.userAgent)||/trident/i.test(navigator.userAgent)},isEdge:function(){return/edge/i.test(navigator.userAgent)}},w=function(t){var n=[];return g(t.querySelectorAll("style")).forEach((function(t){t.textContent+="",n.push(t)})),n},b=function(t){return(t||window.location.href).split("#")[0]},x=function(t){angular.module("ng").run(["$rootScope",function(n){n.$on("$locationChangeSuccess",(function(n,e,o){var r,i,u;r=t,i={oldUrl:o,newUrl:e},(u=document.createEvent("CustomEvent")).initCustomEvent(r,!1,!1,i),window.dispatchEvent(u)}))}])},_=function(t,n){return void 0===n&&(n="linearGradient, radialGradient, pattern"),g(t.querySelectorAll("symbol")).forEach((function(t){g(t.querySelectorAll(n)).forEach((function(n){t.parentNode.insertBefore(n,t)}))})),t},E=o.xlink.uri,O="xlink:href",S=/[{}|\\\^\[\]`"<>]/g;function M(t){return t.replace(S,(function(t){return"%"+t[0].charCodeAt(0).toString(16).toUpperCase()}))}var A,j=["clipPath","colorProfile","src","cursor","fill","filter","marker","markerStart","markerMid","markerEnd","mask","stroke","style"],C=j.map((function(t){return"["+t+"]"})).join(","),N=function(t,n,e,o){var r=M(e),i=M(o);(function(t,n){return g(t).reduce((function(t,e){if(!e.attributes)return t;var o=g(e.attributes),r=n?o.filter(n):o;return t.concat(r)}),[])})(t.querySelectorAll(C),(function(t){var n=t.localName,e=t.value;return-1!==j.indexOf(n)&&-1!==e.indexOf("url("+r)})).forEach((function(t){return t.value=t.value.replace(new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),i)})),function(t,n,e){g(t).forEach((function(t){var o=t.getAttribute(O);if(o&&0===o.indexOf(n)){var r=o.replace(n,e);t.setAttributeNS(E,O,r)}}))}(n,r,i)},T={MOUNT:"mount",SYMBOL_MOUNT:"symbol_mount"},B=function(t){function n(n){var o=this;void 0===n&&(n={}),t.call(this,e(m,n));var r,i=(r=r||Object.create(null),{on:function(t,n){(r[t]||(r[t]=[])).push(n)},off:function(t,n){r[t]&&r[t].splice(r[t].indexOf(n)>>>0,1)},emit:function(t,n){(r[t]||[]).map((function(t){t(n)})),(r["*"]||[]).map((function(e){e(t,n)}))}});this._emitter=i,this.node=null;var u=this.config;if(u.autoConfigure&&this._autoConfigure(n),u.syncUrlsWithBaseTag){var a=document.getElementsByTagName("base")[0].getAttribute("href");i.on(T.MOUNT,(function(){return o.updateUrls("#",a)}))}var s=this._handleLocationChange.bind(this);this._handleLocationChange=s,u.listenLocationChangeEvent&&window.addEventListener(u.locationChangeEvent,s),u.locationChangeAngularEmitter&&x(u.locationChangeEvent),i.on(T.MOUNT,(function(t){u.moveGradientsOutsideSymbol&&_(t)})),i.on(T.SYMBOL_MOUNT,(function(t){u.moveGradientsOutsideSymbol&&_(t.parentNode),(v.isIE()||v.isEdge())&&w(t)}))}t&&(n.__proto__=t),n.prototype=Object.create(t&&t.prototype),n.prototype.constructor=n;var o={isMounted:{}};return o.isMounted.get=function(){return!!this.node},n.prototype._autoConfigure=function(t){var n=this.config;void 0===t.syncUrlsWithBaseTag&&(n.syncUrlsWithBaseTag=void 0!==document.getElementsByTagName("base")[0]),void 0===t.locationChangeAngularEmitter&&(n.locationChangeAngularEmitter="angular"in window),void 0===t.moveGradientsOutsideSymbol&&(n.moveGradientsOutsideSymbol=v.isFirefox())},n.prototype._handleLocationChange=function(t){var n=t.detail,e=n.oldUrl,o=n.newUrl;this.updateUrls(e,o)},n.prototype.add=function(n){var e=t.prototype.add.call(this,n);return this.isMounted&&e&&(n.mount(this.node),this._emitter.emit(T.SYMBOL_MOUNT,n.node)),e},n.prototype.attach=function(t){var n=this,e=this;if(e.isMounted)return e.node;var o="string"==typeof t?document.querySelector(t):t;return e.node=o,this.symbols.forEach((function(t){t.mount(e.node),n._emitter.emit(T.SYMBOL_MOUNT,t.node)})),g(o.querySelectorAll("symbol")).forEach((function(t){var n=y.createFromExistingNode(t);n.node=t,e.add(n)})),this._emitter.emit(T.MOUNT,o),o},n.prototype.destroy=function(){var t=this.config,n=this.symbols,e=this._emitter;n.forEach((function(t){return t.destroy()})),e.off("*"),window.removeEventListener(t.locationChangeEvent,this._handleLocationChange),this.isMounted&&this.unmount()},n.prototype.mount=function(t,n){if(void 0===t&&(t=this.config.mountTo),void 0===n&&(n=!1),this.isMounted)return this.node;var e="string"==typeof t?document.querySelector(t):t,o=this.render();return this.node=o,n&&e.childNodes[0]?e.insertBefore(o,e.childNodes[0]):e.appendChild(o),this._emitter.emit(T.MOUNT,o),o},n.prototype.render=function(){return h(this.stringify())},n.prototype.unmount=function(){this.node.parentNode.removeChild(this.node)},n.prototype.updateUrls=function(t,n){if(!this.isMounted)return!1;var e=document.querySelectorAll(this.config.usagesToUpdate);return N(this.node,e,b(t)+"#",b(n)+"#"),!0},Object.defineProperties(n.prototype,o),n}(l),k=t((function(t){var n,e,o,r,i;t.exports=(e=[],o=document,r=o.documentElement.doScroll,(i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState))||o.addEventListener("DOMContentLoaded",n=function(){for(o.removeEventListener("DOMContentLoaded",n),i=1;n=e.shift();)n()}),function(t){i?setTimeout(t,0):e.push(t)})}));window.__SVG_SPRITE__?A=window.__SVG_SPRITE__:(A=new B({attrs:{id:"__SVG_SPRITE_NODE__"}}),window.__SVG_SPRITE__=A);var U=function(){var t=document.getElementById("__SVG_SPRITE_NODE__");t?A.attach(t):A.mount(document.body,!0)};return document.body?U():k(U),A},t.exports=e()}).call(this,e(2))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(1),u=e.n(i),a=new r.a({id:"icon-notifications",use:"icon-notifications-usage",viewBox:"0 0 23.597 24.988",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.597 24.988" id="icon-notifications"><defs><style>#icon-notifications .cls-1{fill:none;stroke:#707172;stroke-miterlimit:10}</style></defs><g id="icon-notifications_Group_455" data-name="Group 455" transform="translate(-1563.051 -15.796)"><path id="icon-notifications_Path_604" d="M1576.057 47.4h-.952v-7.146a4.624 4.624 0 00-4.624-4.624 4.624 4.624 0 00-4.624 4.624V47.4h-.94a1.366 1.366 0 00-1.366 1.366 1.366 1.366 0 001.366 1.366h11.14a1.366 1.366 0 001.366-1.366 1.366 1.366 0 00-1.366-1.366z" class="cls-1" data-name="Path 604" transform="translate(0 -13.211)" /><circle id="icon-notifications_Ellipse_329" cx="1.261" cy="1.261" r="1.261" class="cls-1" data-name="Ellipse 329" transform="translate(1569.226 37.762)" /><circle id="icon-notifications_Ellipse_330" cx="7.134" cy="7.134" r="7.134" data-name="Ellipse 330" transform="translate(1572.381 15.796)" fill="#124ca0" /><text id="icon-notifications__23" data-name="23" transform="translate(1573.999 26.145)" fill="#fff" font-size="10" font-family="Roboto-Regular,Roboto"><tspan x="0" y="0">23</tspan></text></g></symbol>'});u.a.add(a)},function(t,n,e){"use strict";var o=e(0),r=e.n(o),i=e(1),u=e.n(i),a=new r.a({id:"icon-important",use:"icon-important-usage",viewBox:"0 0 33.93 33.93",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.93 33.93" id="icon-important"><g data-name="Group 304"><g data-name="Group 302"><path d="M16.965 33.93A16.965 16.965 0 1133.93 16.965 16.984 16.984 0 0116.965 33.93zm0-32.3a15.334 15.334 0 1015.334 15.334A15.353 15.353 0 0016.965 1.631z" class="cls-2" data-name="Path 614" /></g><g data-name="Group 303"><path d="M16.013 25.888a1.234 1.234 0 01.333-.873 1.18 1.18 0 01.9-.356 1.209 1.209 0 01.913.356 1.222 1.222 0 01.339.873 1.142 1.142 0 01-.339.841 1.221 1.221 0 01-.913.344 1.191 1.191 0 01-.9-.344 1.152 1.152 0 01-.333-.841zm1.976-5.059h-1.674l-.09-15.832h1.869z" class="cls-2" data-name="Path 615" /></g></g></symbol>'});u.a.add(a)},function(t,n,e){"use strict";e.r(n);e(3),e(7),e(8),e(4),e(5)},function(t,n){console.log("header код сработал")},function(t,n){console.log("footer код сработал")}]);