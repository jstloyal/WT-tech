if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return r[e]||(c=new Promise(async c=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=c}else importScripts(e),c()})),c.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},c=(c,r)=>{Promise.all(c.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(c)};self.define=(c,s,a)=>{r[c]||(r[c]=Promise.resolve().then(()=>{let r={};const i={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return r;case"module":return i;default:return e(c)}})).then(e=>{const c=a(...e);return r.default||(r.default=c),r})}))}}define("./sw.js",["./workbox-1abddbef"],(function(e){"use strict";e.setCacheNameDetails({prefix:"WTgadgets"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"cf0cceb294465c384c979473ae35efde"},{url:"/css/main.css",revision:"a7846770a23c1b9fc814c2ace4a4ac4c"},{url:"/css/vendor.bcbb6b348ee3dff9fe58_1.css",revision:"d506a9ac9db876b20a68ba958bf84c2e"},{url:"/images/defaultAvatar.365a9381c6d833c9a358812e07f0038c.jpg",revision:"03f50dd47bbc84cd60434efcd534da66"},{url:"/images/defaultBanner.3a4391dad797b7b9172915ef75f3a8de.jpg",revision:"99377810b4b33f974c05e4401b6195ec"},{url:"/images/projectlogo.316f19231e85205757f84394692e215c.png",revision:"c8ce5a45ed3fcc64a971227c6a1193c3"},{url:"/index.html",revision:"fb213c157c5494f554ab8d0bfe3167aa"},{url:"/js/2.0c1c6bf1020b84b96c9e.js",revision:"38300923b06f0470ab5ca228903e42ab"},{url:"/js/3.a9292673d3825bd0a900.js",revision:"3e7ea09d5384a04c4586a824c36152cc"},{url:"/js/main.b0766e4309121dbc8f1b.js",revision:"2f66a38ecafb2d8919f2558af950633f"},{url:"/static/WT-logo.png",revision:"c8ce5a45ed3fcc64a971227c6a1193c3"},{url:"/static/projectlogo.png",revision:"c8ce5a45ed3fcc64a971227c6a1193c3"},{url:"/static/projectlogo1.png",revision:"55b58b27a91a1fde106b35d136842bbb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{allowlist:[/^\/[^\_]+\/?/]})),e.registerRoute(/^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,new e.CacheFirst,"GET"),e.registerRoute(/(?:)/,new e.NetworkFirst,"GET"),e.registerRoute(/.*/,new e.NetworkFirst,"GET")}));
