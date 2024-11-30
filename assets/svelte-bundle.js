!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,c;function i(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function u(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function a(t,e,n){t.$$.on_destroy.push(u(e,n))}function d(t){return null==t?"":t}function p(t,e,n){return t.set(n),e}function f(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function w(){return v(" ")}function y(){return v("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t){return function(e){return e.preventDefault(),t.call(this,e)}}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function S(t,e){e=""+e,t.data!==e&&(t.data=e)}function q(t,e){t.value=null==e?"":e}function z(t,e,n,o){null==n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function L(t,e,n){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function E(t){c=t}function N(t){(function(){if(!c)throw new Error("Function called outside component initialization");return c})().$$.on_mount.push(t)}const C=[],A=[];let j=[];const O=[],P=Promise.resolve();let T=!1;function D(){T||(T=!0,P.then(B))}function I(t){j.push(t)}function H(t){O.push(t)}const M=new Set;let U=0;function B(){if(0!==U)return;const t=c;do{try{for(;U<C.length;){const t=C[U];U++,E(t),R(t.$$)}}catch(t){throw C.length=0,U=0,t}for(E(null),C.length=0,U=0;A.length;)A.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];M.has(e)||(M.add(e),e())}j.length=0}while(C.length);for(;O.length;)O.pop()();T=!1,M.clear(),E(t)}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const F=new Set;let Y;function K(){Y={r:0,c:[],p:Y}}function V(){Y.r||o(Y.c),Y=Y.p}function X(t,e){t&&t.i&&(F.delete(t),t.i(e))}function W(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),Y.c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function G(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function J(t){t&&t.c()}function Q(t,n,s,l){const{fragment:c,after_update:i}=t.$$;c&&c.m(n,s),l||I((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(I)}function Z(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];j.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),j=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(e,r,s,l,i,u,a,d=[-1]){const p=c;E(e);const f=e.$$={fragment:null,ctx:[],props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||p.$$.root};a&&a(f.root);let h=!1;if(f.ctx=s?s(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),h&&function(t,e){-1===t.$$.dirty[0]&&(C.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!l&&l(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();r.intro&&X(e.$$.fragment),Q(e,r.target,r.anchor,r.customElement),B()}E(p)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const nt=[];function ot(t,e){return{subscribe:rt(t,e).subscribe}}function rt(e,n=t){let o;const r=new Set;function l(t){if(s(e,t)&&(e=t,o)){const t=!nt.length;for(const t of r)t[1](),nt.push(t,e);if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(s,c=t){const i=[s,c];return r.add(i),1===r.size&&(o=n(l)||t),s(e),()=>{r.delete(i),0===r.size&&o&&(o(),o=null)}}}}function st(e,n,s){const l=!Array.isArray(e),c=l?[e]:e,i=n.length<2;return ot(s,(e=>{let s=!1;const a=[];let d=0,p=t;const f=()=>{if(d)return;p();const o=n(l?a[0]:a,e);i?e(o):p=r(o)?o:t},h=c.map(((t,e)=>u(t,(t=>{a[e]=t,d&=~(1<<e),s&&f()}),(()=>{d|=1<<e}))));return s=!0,f(),function(){o(h),p(),s=!1}}))}const lt="https://api.syndikat.golf";async function ct(t,e){const n=[],o=await fetch(`${lt}/products/${e}/${t}`,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}),r=await o.json();return n.push(...r),n}function it(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const ut=ot(null,(function(t){t(it());const e=()=>{t(it())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));st(ut,(t=>t.location));const at=st(ut,(t=>t.querystring));async function dt(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await(D(),P),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}function pt(e){let n,o,r,s;return{c(){n=$("button"),o=v(e[1]),x(n,"class","button--text")},m(t,l){h(t,n,l),f(n,o),r||(s=_(n,"click",k(e[3])),r=!0)},p(t,[e]){2&e&&S(o,t[1])},i:t,o:t,d(t){t&&g(n),r=!1,s()}}}function ft(t,e,n){let{query:o,text:r,cb:s}=e;return t.$$set=t=>{"query"in t&&n(0,o=t.query),"text"in t&&n(1,r=t.text),"cb"in t&&n(2,s=t.cb)},[o,r,s,()=>{n(0,o=r),s()}]}class ht extends et{constructor(t){super(),tt(this,t,ft,pt,s,{query:0,text:1,cb:2})}}function gt(t,e,n){const o=t.slice();return o[1]=e[n],o}function mt(t){let e,n,o,r,s,l,c,u,a,d,p;return{c(){e=$("div"),n=$("a"),o=$("img"),l=w(),c=$("img"),p=w(),i(o.src,r=`/assets/images/logos/${t[1].handle}-light.png`)||x(o,"src",r),x(o,"class","hide-dark svelte-1360ui8"),x(o,"alt",s=`${t[1].name} Logo`),i(c.src,u=`/assets/images/logos/${t[1].handle}-dark.png`)||x(c,"src",u),x(c,"class","hide-light svelte-1360ui8"),x(c,"alt",a=`${t[1].name} Logo`),x(n,"href",d=t[1].url),x(n,"class","svelte-1360ui8"),x(e,"class","supported-shop svelte-1360ui8")},m(t,r){h(t,e,r),f(e,n),f(n,o),f(n,l),f(n,c),f(e,p)},p(t,e){1&e&&!i(o.src,r=`/assets/images/logos/${t[1].handle}-light.png`)&&x(o,"src",r),1&e&&s!==(s=`${t[1].name} Logo`)&&x(o,"alt",s),1&e&&!i(c.src,u=`/assets/images/logos/${t[1].handle}-dark.png`)&&x(c,"src",u),1&e&&a!==(a=`${t[1].name} Logo`)&&x(c,"alt",a),1&e&&d!==(d=t[1].url)&&x(n,"href",d)},d(t){t&&g(e)}}}function $t(t){let e,n=t[1].logo&&mt(t);return{c(){n&&n.c(),e=y()},m(t,o){n&&n.m(t,o),h(t,e,o)},p(t,o){t[1].logo?n?n.p(t,o):(n=mt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&g(e)}}}function bt(e){let n,o=e[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=$t(gt(e,o,t));return{c(){n=$("div");for(let t=0;t<r.length;t+=1)r[t].c();x(n,"class","supported-shops svelte-1360ui8")},m(t,e){h(t,n,e);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(n,null)},p(t,[e]){if(1&e){let s;for(o=t[0],s=0;s<o.length;s+=1){const l=gt(t,o,s);r[s]?r[s].p(l,e):(r[s]=$t(l),r[s].c(),r[s].m(n,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=o.length}},i:t,o:t,d(t){t&&g(n),m(r,t)}}}function vt(t,e,n){let{activeShops:o}=e;return t.$$set=t=>{"activeShops"in t&&n(0,o=t.activeShops)},[o]}class wt extends et{constructor(t){super(),tt(this,t,vt,bt,s,{activeShops:0})}}const yt=[{handle:"chooseyourdisc",name:"Choose Your Disc",disabled:!1,url:"https://www.chooseyourdisc.com/",shipping:{amount:495,info:" – kostenfrei ab 100 €"}},{handle:"insidethecircle",name:"Inside The Circle",disabled:!1,url:"https://www.inside-the-circle.de/",shipping:{amount:420,info:" – kostenfrei ab 100 €"}},{handle:"discwolf",name:"Disc Wolf",disabled:!1,url:"https://www.discwolf.com/",shipping:{amount:390,info:" – kostenfrei ab 49 €"}},{handle:"frisbeeshop",name:"Frisbeeshop.com",disabled:!1,url:"https://www.frisbeeshop.com/",shipping:{amount:595}},{handle:"discgolfstore",name:"Discgolfstore",disabled:!1,url:"https://www.discgolfstore.de/",shipping:{amount:395,info:" – kostenfrei ab 50 €"}},{handle:"crosslap",name:"Crosslap",disabled:!1,url:"https://www.discgolf-shop.de/",shipping:{amount:395,info:" – kostenfrei ab 100 €"}},{handle:"thrownatur",name:"Thrownatur",disabled:!1,url:"https://www.thrownatur-discgolf.de/de/",shipping:{amount:595,info:" – 2,99 € bis 400g"}},{handle:"birdieshop",name:"Birdie Shop",disabled:!1,url:"https://www.birdie-shop.com/",shipping:{amount:595,info:" – kostenfrei ab 75 €"}},{handle:"discgolf4you",name:"Discgolf 4 You",disabled:!1,url:"https://www.discgolf4you.com/",shipping:{amount:890,info:""}},{handle:"hyzerstore",name:"Hyzerstore",disabled:!1,url:"https://www.hyzer-store.de/",shipping:{amount:395,info:""}}];function _t(t,e,n){const o=t.slice();return o[5]=e[n],o}function kt(t){let e,n=Object.values(t[0].flightNumbers),o=[];for(let e=0;e<n.length;e+=1)o[e]=St(_t(t,n,e));return{c(){e=$("ul");for(let t=0;t<o.length;t+=1)o[t].c();x(e,"class","article__flight-numbers svelte-1i3d067")},m(t,n){h(t,e,n);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,null)},p(t,r){if(1&r){let s;for(n=Object.values(t[0].flightNumbers),s=0;s<n.length;s+=1){const l=_t(t,n,s);o[s]?o[s].p(l,r):(o[s]=St(l),o[s].c(),o[s].m(e,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},d(t){t&&g(e),m(o,t)}}}function xt(t){let e,n,o=parseInt(t[5])+"";return{c(){e=$("li"),n=v(o),x(e,"class","svelte-1i3d067")},m(t,o){h(t,e,o),f(e,n)},p(t,e){1&e&&o!==(o=parseInt(t[5])+"")&&S(n,o)},d(t){t&&g(e)}}}function St(t){let e,n=t[5]&&xt(t);return{c(){n&&n.c(),e=y()},m(t,o){n&&n.m(t,o),h(t,e,o)},p(t,o){t[5]?n?n.p(t,o):(n=xt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&g(e)}}}function qt(e){let n,s,l,c,u,a,p,m,b,y,k,q,z,L,E,N,C,A,j,O,P,T,D,I,H,M,U,B,R,F,Y,K,V=e[0].title+"",X=e[2][e[0].stockStatus]+"",W=e[3].format(e[0].price/100)+"",G=e[0].flightNumbers&&kt(e),J=e[1]&&e[1].shipping&&e[1].shipping.amount&&function(e){let n,o;return{c(){n=$("span"),o=$("i"),x(o,"class","ion ion-md-information-circle-outline"),x(n,"class","tooltip svelte-1i3d067"),x(n,"data-tippy-content",`Versand ${e[3].format(e[1].shipping.amount/100)}${e[1].shipping.info}`)},m(t,e){h(t,n,e),f(n,o)},p:t,d(t){t&&g(n)}}}(e);return{c(){n=$("div"),s=$("div"),l=$("div"),c=$("a"),G&&G.c(),u=w(),a=$("img"),y=w(),J&&J.c(),k=w(),q=$("div"),z=$("h2"),L=$("a"),E=v(V),C=w(),A=$("p"),j=$("span"),O=v(X),T=w(),D=$("strong"),I=v(W),H=w(),M=$("img"),B=w(),R=$("img"),i(a.src,p=e[0].image||"/assets/images/image-not-found.jpg")||x(a,"src",p),x(a,"alt",m=e[0].title),x(a,"loading","lazy"),x(a,"width","200"),x(a,"height","200"),x(c,"href",b=e[0].url),x(c,"target","_blank"),x(c,"class","article__image svelte-1i3d067"),x(l,"class","article__head"),x(L,"href",N=e[0].url),x(L,"target","_blank"),x(L,"class","svelte-1i3d067"),x(z,"class","article__title svelte-1i3d067"),x(j,"class",P=d(`inventory status-${e[0].stockStatus}`)+" svelte-1i3d067"),i(M.src,U=`/assets/images/logos/${e[0].store}-light.png`)||x(M,"src",U),x(M,"class","store-logo hide-dark svelte-1i3d067"),x(M,"alt","Store Logo"),i(R.src,F=`/assets/images/logos/${e[0].store}-dark.png`)||x(R,"src",F),x(R,"class","store-logo hide-light svelte-1i3d067"),x(R,"alt","Store Logo"),x(q,"class","article__content"),x(s,"class","article__inner"),x(n,"class","article col col-4 col-d-6 col-t-12")},m(t,o){h(t,n,o),f(n,s),f(s,l),f(l,c),G&&G.m(c,null),f(c,u),f(c,a),f(l,y),J&&J.m(l,null),f(s,k),f(s,q),f(q,z),f(z,L),f(L,E),f(q,C),f(q,A),f(A,j),f(j,O),f(A,T),f(A,D),f(D,I),f(A,H),f(A,M),f(A,B),f(A,R),Y||(K=[_(c,"click",(function(){r(e[4](e[0]))&&e[4](e[0]).apply(this,arguments)})),_(L,"click",(function(){r(e[4](e[0]))&&e[4](e[0]).apply(this,arguments)}))],Y=!0)},p(t,[n]){(e=t)[0].flightNumbers?G?G.p(e,n):(G=kt(e),G.c(),G.m(c,u)):G&&(G.d(1),G=null),1&n&&!i(a.src,p=e[0].image||"/assets/images/image-not-found.jpg")&&x(a,"src",p),1&n&&m!==(m=e[0].title)&&x(a,"alt",m),1&n&&b!==(b=e[0].url)&&x(c,"href",b),e[1]&&e[1].shipping&&e[1].shipping.amount&&J.p(e,n),1&n&&V!==(V=e[0].title+"")&&S(E,V),1&n&&N!==(N=e[0].url)&&x(L,"href",N),1&n&&X!==(X=e[2][e[0].stockStatus]+"")&&S(O,X),1&n&&P!==(P=d(`inventory status-${e[0].stockStatus}`)+" svelte-1i3d067")&&x(j,"class",P),1&n&&W!==(W=e[3].format(e[0].price/100)+"")&&S(I,W),1&n&&!i(M.src,U=`/assets/images/logos/${e[0].store}-light.png`)&&x(M,"src",U),1&n&&!i(R.src,F=`/assets/images/logos/${e[0].store}-dark.png`)&&x(R,"src",F)},i:t,o:t,d(t){t&&g(n),G&&G.d(),J&&J.d(),Y=!1,o(K)}}}function zt(t,e,n){N((async()=>{tippy(".tooltip",{})}));let{product:o}=e;const r=yt.find((t=>t.handle===o.store)),s=new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"});return t.$$set=t=>{"product"in t&&n(0,o=t.product)},[o,r,{available:"Auf Lager",unavailable:"Nicht auf Lager",unknown:"Unbekannt"},s,t=>{window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)},window.plausible("product-click",{props:{product:t.title,store:t.store,price:t.price/100,currency:"EUR",url:t.url}})}]}class Lt extends et{constructor(t){super(),tt(this,t,zt,qt,s,{product:0})}}function Et(t,e,n){const o=t.slice();return o[29]=e[n],o}function Nt(t,e,n){const o=t.slice();return o[26]=e[n],o}function Ct(e){let n,r,s;return{c(){n=$("div"),n.innerHTML='<i class="ion ion-md-close"></i>',x(n,"class","search__close svelte-430zol")},m(t,o){h(t,n,o),r||(s=[_(n,"click",e[15]),_(n,"keydown",e[16])],r=!0)},p:t,d(t){t&&g(n),r=!1,o(s)}}}function At(t){let e;return{c(){e=v("Los geht's!")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function jt(t){let e;return{c(){e=v("Produkte")},m(t,n){h(t,e,n)},d(t){t&&g(e)}}}function Ot(t){let e,n,o,r,s=t[4].length+"";return{c(){e=$("span"),n=v("("),o=v(s),r=v(")"),x(e,"class","product-count svelte-430zol")},m(t,s){h(t,e,s),f(e,n),f(e,o),f(e,r)},p(t,e){16&e[0]&&s!==(s=t[4].length+"")&&S(o,s)},d(t){t&&g(e)}}}function Pt(t){let e,n,o;return{c(){e=b("svg"),n=b("circle"),o=b("circle"),x(n,"class","bg svelte-430zol"),x(o,"class","fg svelte-430zol"),x(e,"width","24"),x(e,"height","24"),x(e,"viewBox","0 0 24 24"),x(e,"class","circular-progress svelte-430zol"),z(e,"--progress",t[3])},m(t,r){h(t,e,r),f(e,n),f(e,o)},p(t,n){8&n[0]&&z(e,"--progress",t[3])},d(t){t&&g(e)}}}function Tt(t){let e,n,o,r;return{c(){e=$("div"),n=v("loading "),o=v(t[6]),r=v(" …"),x(e,"class","currently-fetching svelte-430zol")},m(t,s){h(t,e,s),f(e,n),f(e,o),f(e,r)},p(t,e){64&e[0]&&S(o,t[6])},d(t){t&&g(e)}}}function Dt(t){let e,n,r,s,l,c,i;return{c(){e=$("select"),n=$("option"),n.textContent="Standard",r=$("option"),r.textContent="Verfügbarkeit",s=$("option"),s.textContent="Preis aufsteigend",l=$("option"),l.textContent="Preis absteigend",n.__value="default",n.value=n.__value,r.__value="availability",r.value=r.__value,s.__value="price-ascending",s.value=s.__value,l.__value="price-descending",l.value=l.__value,void 0===t[5]&&I((()=>t[19].call(e)))},m(o,u){h(o,e,u),f(e,n),f(e,r),f(e,s),f(e,l),L(e,t[5],!0),c||(i=[_(e,"change",t[19]),_(e,"change",t[14])],c=!0)},p(t,n){32&n[0]&&L(e,t[5])},d(t){t&&g(e),c=!1,o(i)}}}function It(t){let e,n,o=t[4],r=[];for(let e=0;e<o.length;e+=1)r[e]=Rt(Et(t,o,e));const s=t=>W(r[t],1,1,(()=>{r[t]=null}));let l=null;return o.length||(l=Mt(t)),{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=y(),l&&l.c()},m(t,o){for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,o);h(t,e,o),l&&l.m(t,o),n=!0},p(t,n){if(8342&n[0]){let c;for(o=t[4],c=0;c<o.length;c+=1){const s=Et(t,o,c);r[c]?(r[c].p(s,n),X(r[c],1)):(r[c]=Rt(s),r[c].c(),X(r[c],1),r[c].m(e.parentNode,e))}for(K(),c=o.length;c<r.length;c+=1)s(c);V(),!o.length&&l?l.p(t,n):o.length?l&&(K(),W(l,1,1,(()=>{l=null})),V()):(l=Mt(t),l.c(),X(l,1),l.m(e.parentNode,e))}},i(t){if(!n){for(let t=0;t<o.length;t+=1)X(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)W(r[t]);n=!1},d(t){m(r,t),t&&g(e),l&&l.d(t)}}}function Ht(e){let n,o=Array(6),r=[];for(let t=0;t<o.length;t+=1)r[t]=Ft(Nt(e,o,t));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=y()},m(t,e){for(let n=0;n<r.length;n+=1)r[n]&&r[n].m(t,e);h(t,n,e)},p:t,i:t,o:t,d(t){m(r,t),t&&g(n)}}}function Mt(t){let e,n,o,r;const s=[Bt,Ut],l=[];function c(t,e){return t[2]||!t[1]?0:1}return e=c(t),n=l[e]=s[e](t),{c(){n.c(),o=y()},m(t,n){l[e].m(t,n),h(t,o,n),r=!0},p(t,r){let i=e;e=c(t),e===i?l[e].p(t,r):(K(),W(l[i],1,1,(()=>{l[i]=null})),V(),n=l[e],n?n.p(t,r):(n=l[e]=s[e](t),n.c()),X(n,1),n.m(o.parentNode,o))},i(t){r||(X(n),r=!0)},o(t){W(n),r=!1},d(t){l[e].d(t),t&&g(o)}}}function Ut(e){let n,o,r,s,l,c;return{c(){n=$("div"),o=$("p"),r=v("Keine Produkte für "),s=v(e[1]),l=v(" gefunden."),c=w(),x(n,"class","col")},m(t,e){h(t,n,e),f(n,o),f(o,r),f(o,s),f(o,l),f(n,c)},p(t,e){2&e[0]&&S(s,t[1])},i:t,o:t,d(t){t&&g(n)}}}function Bt(t){let e,n,o,r,s,l,c,i,u,a,d,p,m,b,y,_,k,S,q;function z(e){t[20](e)}let L={text:"Harp",cb:t[13]};function E(e){t[21](e)}void 0!==t[1]&&(L.query=t[1]),r=new ht({props:L}),A.push((()=>G(r,"query",z)));let N={text:"Raider",cb:t[13]};function C(e){t[22](e)}void 0!==t[1]&&(N.query=t[1]),c=new ht({props:N}),A.push((()=>G(c,"query",E)));let j={text:"Destroyer",cb:t[13]};return void 0!==t[1]&&(j.query=t[1]),a=new ht({props:j}),A.push((()=>G(a,"query",C))),_=new wt({props:{activeShops:t[7]}}),{c(){e=$("div"),n=$("p"),o=v("Suche zum Beispiel nach\n            "),J(r.$$.fragment),l=v(",\n            "),J(c.$$.fragment),u=v(" oder\n            "),J(a.$$.fragment),p=v("."),m=w(),b=$("div"),b.innerHTML="<h3>Unterstützte Shops</h3>",y=w(),J(_.$$.fragment),k=w(),S=$("div"),S.innerHTML='<p>Ein Store fehlt in der Liste? Du hast Fragen oder Anregungen? <a href="/contact">Schreib uns über das Kontaktformular\n            </a>.</p> \n        ',x(e,"class","col col-12"),x(b,"class","col col-12"),x(S,"class","col col-12")},m(t,s){h(t,e,s),f(e,n),f(n,o),Q(r,n,null),f(n,l),Q(c,n,null),f(n,u),Q(a,n,null),f(n,p),h(t,m,s),h(t,b,s),h(t,y,s),Q(_,t,s),h(t,k,s),h(t,S,s),q=!0},p(t,e){const n={};!s&&2&e[0]&&(s=!0,n.query=t[1],H((()=>s=!1))),r.$set(n);const o={};!i&&2&e[0]&&(i=!0,o.query=t[1],H((()=>i=!1))),c.$set(o);const l={};!d&&2&e[0]&&(d=!0,l.query=t[1],H((()=>d=!1))),a.$set(l)},i(t){q||(X(r.$$.fragment,t),X(c.$$.fragment,t),X(a.$$.fragment,t),X(_.$$.fragment,t),q=!0)},o(t){W(r.$$.fragment,t),W(c.$$.fragment,t),W(a.$$.fragment,t),W(_.$$.fragment,t),q=!1},d(t){t&&g(e),Z(r),Z(c),Z(a),t&&g(m),t&&g(b),t&&g(y),Z(_,t),t&&g(k),t&&g(S)}}}function Rt(t){let e,n;return e=new Lt({props:{product:t[29]}}),{c(){J(e.$$.fragment)},m(t,o){Q(e,t,o),n=!0},p(t,n){const o={};16&n[0]&&(o.product=t[29]),e.$set(o)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){Z(e,t)}}}function Ft(e){let n;return{c(){n=$("div"),n.innerHTML='<div class="skeleton-image svelte-430zol"></div> \n        <div class="skeleton-text svelte-430zol"></div> \n      ',x(n,"class","skeleton col col-4 col-d-6 col-t-12 svelte-430zol")},m(t,e){h(t,n,e)},p:t,d(t){t&&g(n)}}}function Yt(t){let e,n,r,s,l,c,i,u,a,d,p,m,b,v,y,S,z,L,E,N,C=t[1]&&!t[6]&&Ct(t);function A(t,e){return t[6]||t[4].length?jt:At}let j=A(t),O=j(t);function P(t,e){return t[0]<t[8].length?Pt:t[4].length?Ot:void 0}let T=P(t),D=T&&T(t),I=t[6]&&Tt(t),H=t[4].length&&Dt(t);const M=[Ht,It],U=[];function B(t,e){return t[6]&&t[0]<t[8].length&&0===t[4].length?0:1}return S=B(t),z=U[S]=M[S](t),{c(){e=$("form"),C&&C.c(),n=w(),r=$("label"),r.textContent="Suche nach Produkten",s=w(),l=$("input"),c=w(),i=$("button"),i.innerHTML='<i class="ion ion-md-search"></i>',u=w(),a=$("div"),d=$("h2"),O.c(),p=w(),D&&D.c(),m=w(),I&&I.c(),b=w(),H&&H.c(),v=w(),y=$("div"),z.c(),x(r,"for","js-product-input"),x(r,"class","screen-reader-text"),x(l,"type","text"),x(l,"class","search__text"),x(l,"id","js-product-input"),x(l,"placeholder","Suche eine Scheibe …"),x(i,"type","submit"),x(i,"class","button button--primary"),x(e,"class","search__group svelte-430zol"),x(d,"class","svelte-430zol"),x(a,"class","products-headline svelte-430zol"),x(y,"class","row animate")},m(o,g){h(o,e,g),C&&C.m(e,null),f(e,n),f(e,r),f(e,s),f(e,l),q(l,t[1]),f(e,c),f(e,i),h(o,u,g),h(o,a,g),f(a,d),O.m(d,null),f(d,p),D&&D.m(d,null),f(a,m),I&&I.m(a,null),f(a,b),H&&H.m(a,null),h(o,v,g),h(o,y,g),U[S].m(y,null),L=!0,E||(N=[_(l,"input",t[17]),_(i,"click",k(t[18]))],E=!0)},p(t,o){t[1]&&!t[6]?C?C.p(t,o):(C=Ct(t),C.c(),C.m(e,n)):C&&(C.d(1),C=null),2&o[0]&&l.value!==t[1]&&q(l,t[1]),j!==(j=A(t))&&(O.d(1),O=j(t),O&&(O.c(),O.m(d,p))),T===(T=P(t))&&D?D.p(t,o):(D&&D.d(1),D=T&&T(t),D&&(D.c(),D.m(d,null))),t[6]?I?I.p(t,o):(I=Tt(t),I.c(),I.m(a,b)):I&&(I.d(1),I=null),t[4].length?H?H.p(t,o):(H=Dt(t),H.c(),H.m(a,null)):H&&(H.d(1),H=null);let r=S;S=B(t),S===r?U[S].p(t,o):(K(),W(U[r],1,1,(()=>{U[r]=null})),V(),z=U[S],z?z.p(t,o):(z=U[S]=M[S](t),z.c()),X(z,1),z.m(y,null))},i(t){L||(X(z),L=!0)},o(t){W(z),L=!1},d(t){t&&g(e),C&&C.d(),t&&g(u),t&&g(a),O.d(),D&&D.d(),I&&I.d(),H&&H.d(),t&&g(v),t&&g(y),U[S].d(),E=!1,o(N)}}}function Kt(t,e,n){const o=[...t].sort(((t,n)=>t[e]<n[e]?1:t[e]>=n[e]?-1:0));return n?o.reverse():o}function Vt(t,e,n){let o,r,s,l,c;a(t,at,(t=>n(24,r=t)));const i=yt.filter((t=>!t.disabled)),u=i.map((t=>t.handle)),d=rt([]);a(t,d,(t=>n(4,s=t)));const f=rt("");a(t,f,(t=>n(6,c=t)));let h=[],g=!0,m=u.length;const $=rt(localStorage.sort||"default");a(t,$,(t=>n(5,l=t))),$.subscribe((t=>localStorage.sort=t));let b="";const v=()=>{n(1,b=""),dt("/"),p(d,s=[],s)},w=async()=>{if(!b)return dt("/"),n(2,g=!0),d.set([]);window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)},window.plausible("product-search",{props:{query:b}}),h=[],n(2,g=!1),dt(`/?q=${encodeURIComponent(b)}`),d.set([]),n(0,m=0);for(const t of u){f.set(t);const e=await ct(b,t);d.update((t=>[...t,...e])),n(0,m++,m),h.push(...e),y()}f.set("")},y=()=>p(d,s="price-descending"===l?Kt(s,"price"):"price-ascending"===l?Kt(s,"price",!0):"availability"===l?Kt(s,"stockStatus",!0):h,s);N((async()=>{document.querySelector("#js-product-input").focus(),n(1,b=new URLSearchParams(r).get("q")||""),await w()}));return t.$$.update=()=>{2&t.$$.dirty[0]&&n(1,b=b.toLowerCase()),1&t.$$.dirty[0]&&n(3,o=parseInt(m/u.length*100))},[m,b,g,o,s,l,c,i,u,d,f,$,v,w,y,()=>v(),()=>v(),function(){b=this.value,n(1,b)},()=>w(),function(){l=function(t){const e=t.querySelector(":checked");return e&&e.__value}(this),$.set(l)},function(t){b=t,n(1,b)},function(t){b=t,n(1,b)},function(t){b=t,n(1,b)}]}class Xt extends et{constructor(t){super(),tt(this,t,Vt,Yt,s,{},null,[-1,-1])}}document.querySelector("#product-search-app")&&new Xt({target:document.querySelector("#product-search-app")})}();
//# sourceMappingURL=svelte-bundle.js.map
