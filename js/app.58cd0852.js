(function(e){function t(t){for(var r,i,a=t[0],u=t[1],s=t[2],l=0,d=[];l<a.length;l++)i=a[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function i(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"35f9e773"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=i(e);var s=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/rainforest-slides/",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"339f":function(e,t,n){"use strict";n("c361")},a8a1:function(e,t,n){},c361:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["e"])("Home"),i=Object(r["e"])(" | "),a=Object(r["e"])("About");function u(e,t){var n=Object(r["u"])("router-link"),u=Object(r["u"])("router-view");return Object(r["o"])(),Object(r["d"])(r["a"],null,[Object(r["f"])("div",o,[Object(r["f"])(n,{to:"/"},{default:Object(r["z"])((function(){return[c]})),_:1}),i,Object(r["f"])(n,{to:"/about"},{default:Object(r["z"])((function(){return[a]})),_:1})]),Object(r["f"])(u)],64)}n("339f");const s={};s.render=u;var l=s,f=n("9483");Object(f["a"])("".concat("/rainforest-slides/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var d=n("6c02"),p=Object(r["A"])("data-v-ea934178");Object(r["r"])("data-v-ea934178");var b={class:"home"};Object(r["p"])();var O=p((function(e,t,n,o,c,i){var a=Object(r["u"])("SlidesViewer");return Object(r["o"])(),Object(r["d"])("div",b,[Object(r["f"])(a,{src:e.exampleSlideUrl},null,8,["src"])])})),v={class:"reveal"},j={class:"slides"},m=Object(r["f"])("section",null,"Single Horizontal Slide",-1),h=Object(r["f"])("section",null,"Vertical Slide 1",-1);function g(e,t,n,o,c,i){return Object(r["o"])(),Object(r["d"])("div",v,[Object(r["f"])("div",j,[m,Object(r["f"])("section",null,[h,Object(r["f"])("section",null,Object(r["w"])(e.markdown),1)]),Object(r["f"])("section",{innerHTML:e.markdown},null,8,["innerHTML"])])])}var w,y=n("5530"),k=n("5502"),_=(n("96cf"),n("1da1")),S=n("ade3");(function(e){e["SET_MARKDOWN"]="SET_MARKDOWN"})(w||(w={}));var A=Object(k["a"])({state:{markdown:""},mutations:Object(S["a"])({},w.SET_MARKDOWN,(function(e,t){e.markdown=t})),actions:{fetchMarkdown:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,fetch(n,{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:if(o=e.sent,!o.ok){e.next=9;break}return e.next=7,o.text();case 7:c=e.sent,r(w.SET_MARKDOWN,c);case 9:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},modules:{}}),M=n("3f9c"),E=n("c997"),x=n.n(E),P=n("0e54"),T=n.n(P),N={name:"slides viewer",props:{src:String},computed:Object(y["a"])({},Object(k["c"])({markdown:function(e){return T()(e.markdown)}})),created:function(){this.fetchMarkdown(this.src)},mounted:function(){M["a"].initialize({plugins:[x.a]}).then((function(){return console.log("Reveal Initialized")}))},methods:Object(y["a"])({},Object(k["b"])(["fetchMarkdown"]))};n("cc49");N.render=g;var R=N,L=Object(r["g"])({name:"Home",setup:function(){var e,t=Object(r["t"])(null!==(e=Object({NODE_ENV:"production",BASE_URL:"/rainforest-slides/"}).VUE_APP_EXAMPLE_MARKDOWN_URL)&&void 0!==e?e:"");return{exampleSlideUrl:t}},components:{SlidesViewer:R}});n("e2d9");L.render=O,L.__scopeId="data-v-ea934178";var D=L,H=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],z=Object(d["a"])({history:Object(d["b"])(),routes:H}),K=z;Object(r["c"])(l).use(A).use(K).mount("#app")},e2d9:function(e,t,n){"use strict";n("a8a1")}});
//# sourceMappingURL=app.58cd0852.js.map