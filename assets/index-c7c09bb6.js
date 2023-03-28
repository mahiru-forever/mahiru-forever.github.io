(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function $e(){}const wf=r=>r;function Be(r,e){for(const t in e)r[t]=e[t];return r}function Tf(r){return r()}function ec(){return Object.create(null)}function Ft(r){r.forEach(Tf)}function wt(r){return typeof r=="function"}function lt(r,e){return r!=r?e==e:r!==e||r&&typeof r=="object"||typeof r=="function"}function Mh(r){return Object.keys(r).length===0}function Cl(r,...e){if(r==null)return $e;const t=r.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ef(r){let e;return Cl(r,t=>e=t)(),e}function an(r,e,t){r.$$.on_destroy.push(Cl(e,t))}function ar(r,e,t,n){if(r){const i=Af(r,e,t,n);return r[0](i)}}function Af(r,e,t,n){return r[1]&&n?Be(t.ctx.slice(),r[1](n(e))):t.ctx}function or(r,e,t,n){if(r[2]&&n){const i=r[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function lr(r,e,t,n,i,s){if(i){const o=Af(e,t,n,s);r.p(o,i)}}function cr(r){if(r.ctx.length>32){const e=[],t=r.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function os(r){const e={};for(const t in r)t[0]!=="$"&&(e[t]=r[t]);return e}function _n(r,e){const t={};e=new Set(e);for(const n in r)!e.has(n)&&n[0]!=="$"&&(t[n]=r[n]);return t}function $b(r){return r??""}function wh(r,e,t){return r.set(t),e}function tt(r){return r&&wt(r.destroy)?r.destroy:$e}function tc(r){const e=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[r,"px"]}const Cf=typeof window<"u";let Th=Cf?()=>window.performance.now():()=>Date.now(),Ll=Cf?r=>requestAnimationFrame(r):$e;const Br=new Set;function Lf(r){Br.forEach(e=>{e.c(r)||(Br.delete(e),e.f())}),Br.size!==0&&Ll(Lf)}function Eh(r){let e;return Br.size===0&&Ll(Lf),{promise:new Promise(t=>{Br.add(e={c:r,f:t})}),abort(){Br.delete(e)}}}function ge(r,e){r.appendChild(e)}function Rf(r){if(!r)return document;const e=r.getRootNode?r.getRootNode():r.ownerDocument;return e&&e.host?e:r.ownerDocument}function Ah(r){const e=_e("style");return Ch(Rf(r),e),e.sheet}function Ch(r,e){return ge(r.head||r,e),e.sheet}function ye(r,e,t){r.insertBefore(e,t||null)}function xe(r){r.parentNode&&r.parentNode.removeChild(r)}function Df(r,e){for(let t=0;t<r.length;t+=1)r[t]&&r[t].d(e)}function _e(r){return document.createElement(r)}function Wn(r){return document.createTextNode(r)}function Ne(){return Wn(" ")}function yn(){return Wn("")}function ht(r,e,t,n){return r.addEventListener(e,t,n),()=>r.removeEventListener(e,t,n)}function Lh(r){return function(e){return e.preventDefault(),r.call(this,e)}}function Rh(r){return function(e){return e.stopPropagation(),r.call(this,e)}}function me(r,e,t){t==null?r.removeAttribute(e):r.getAttribute(e)!==t&&r.setAttribute(e,t)}function St(r,e){const t=Object.getOwnPropertyDescriptors(r.__proto__);for(const n in e)e[n]==null?r.removeAttribute(n):n==="style"?r.style.cssText=e[n]:n==="__value"?r.value=r[n]=e[n]:t[n]&&t[n].set?r[n]=e[n]:me(r,n,e[n])}function Dh(r,e){Object.keys(e).forEach(t=>{Ph(r,t,e[t])})}function Ph(r,e,t){e in r?r[e]=typeof r[e]=="boolean"&&t===""?!0:t:me(r,e,t)}function Oa(r){return/-/.test(r)?Dh:St}function Ih(r){return Array.from(r.childNodes)}function jr(r,e){e=""+e,r.wholeText!==e&&(r.data=e)}function eS(r,e,t,n){t===null?r.style.removeProperty(e):r.style.setProperty(e,t,n?"important":"")}function Vn(r,e,t){r.classList[t?"add":"remove"](e)}function Pf(r,e,{bubbles:t=!1,cancelable:n=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(r,t,n,e),i}function Yr(r,e){return new r(e)}const Fa=new Map;let Na=0;function Oh(r){let e=5381,t=r.length;for(;t--;)e=(e<<5)-e^r.charCodeAt(t);return e>>>0}function Fh(r,e){const t={stylesheet:Ah(e),rules:{}};return Fa.set(r,t),t}function nc(r,e,t,n,i,s,o,a=0){const l=16.666/n;let c=`{
`;for(let p=0;p<=1;p+=l){const _=e+(t-e)*s(p);c+=p*100+`%{${o(_,1-_)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,f=`__svelte_${Oh(u)}_${a}`,d=Rf(r),{stylesheet:m,rules:g}=Fa.get(d)||Fh(d,r);g[f]||(g[f]=!0,m.insertRule(`@keyframes ${f} ${u}`,m.cssRules.length));const h=r.style.animation||"";return r.style.animation=`${h?`${h}, `:""}${f} ${n}ms linear ${i}ms 1 both`,Na+=1,f}function Nh(r,e){const t=(r.style.animation||"").split(", "),n=t.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=t.length-n.length;i&&(r.style.animation=n.join(", "),Na-=i,Na||zh())}function zh(){Ll(()=>{Na||(Fa.forEach(r=>{const{ownerNode:e}=r.stylesheet;e&&xe(e)}),Fa.clear())})}let Os;function Ls(r){Os=r}function bn(){if(!Os)throw new Error("Function called outside component initialization");return Os}function On(r){bn().$$.on_mount.push(r)}function Uh(r){bn().$$.after_update.push(r)}function If(r){bn().$$.on_destroy.push(r)}function Of(){const r=bn();return(e,t,{cancelable:n=!1}={})=>{const i=r.$$.callbacks[e];if(i){const s=Pf(e,t,{cancelable:n});return i.slice().forEach(o=>{o.call(r,s)}),!s.defaultPrevented}return!0}}function za(r,e){return bn().$$.context.set(r,e),e}function Fs(r){return bn().$$.context.get(r)}function tl(r,e){const t=r.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Or=[],_t=[];let Vr=[];const nl=[],Ff=Promise.resolve();let il=!1;function Nf(){il||(il=!0,Ff.then(zf))}function Ka(){return Nf(),Ff}function on(r){Vr.push(r)}function kh(r){nl.push(r)}const oo=new Set;let _r=0;function zf(){if(_r!==0)return;const r=Os;do{try{for(;_r<Or.length;){const e=Or[_r];_r++,Ls(e),Bh(e.$$)}}catch(e){throw Or.length=0,_r=0,e}for(Ls(null),Or.length=0,_r=0;_t.length;)_t.pop()();for(let e=0;e<Vr.length;e+=1){const t=Vr[e];oo.has(t)||(oo.add(t),t())}Vr.length=0}while(Or.length);for(;nl.length;)nl.pop()();il=!1,oo.clear(),Ls(r)}function Bh(r){if(r.fragment!==null){r.update(),Ft(r.before_update);const e=r.dirty;r.dirty=[-1],r.fragment&&r.fragment.p(r.ctx,e),r.after_update.forEach(on)}}function Vh(r){const e=[],t=[];Vr.forEach(n=>r.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),Vr=e}let ps;function Gh(){return ps||(ps=Promise.resolve(),ps.then(()=>{ps=null})),ps}function lo(r,e,t){r.dispatchEvent(Pf(`${e?"intro":"outro"}${t}`))}const Ea=new Set;let ui;function ft(){ui={r:0,c:[],p:ui}}function dt(){ui.r||Ft(ui.c),ui=ui.p}function le(r,e){r&&r.i&&(Ea.delete(r),r.i(e))}function pe(r,e,t,n){if(r&&r.o){if(Ea.has(r))return;Ea.add(r),ui.c.push(()=>{Ea.delete(r),n&&(t&&r.d(1),n())}),r.o(e)}else n&&n()}const Hh={duration:0};function xt(r,e,t,n){const i={direction:"both"};let s=e(r,t,i),o=n?0:1,a=null,l=null,c=null;function u(){c&&Nh(r,c)}function f(m,g){const h=m.b-o;return g*=Math.abs(h),{a:o,b:m.b,d:h,duration:g,start:m.start,end:m.start+g,group:m.group}}function d(m){const{delay:g=0,duration:h=300,easing:p=wf,tick:_=$e,css:v}=s||Hh,w={start:Th()+g,b:m};m||(w.group=ui,ui.r+=1),a||l?l=w:(v&&(u(),c=nc(r,o,m,h,g,p,v)),m&&_(0,1),a=f(w,h),on(()=>lo(r,m,"start")),Eh(x=>{if(l&&x>l.start&&(a=f(l,h),l=null,lo(r,a.b,"start"),v&&(u(),c=nc(r,o,a.b,a.duration,0,p,s.css))),a){if(x>=a.end)_(o=a.b,1-o),lo(r,a.b,"end"),l||(a.b?u():--a.group.r||Ft(a.group.c)),a=null;else if(x>=a.start){const M=x-a.start;o=a.a+a.d*p(M/a.duration),_(o,1-o)}}return!!(a||l)}))}return{run(m){wt(s)?Gh().then(()=>{s=s(i),d(m)}):d(m)},end(){u(),a=l=null}}}function Wh(r,e){pe(r,1,1,()=>{e.delete(r.key)})}function Xh(r,e,t,n,i,s,o,a,l,c,u,f){let d=r.length,m=s.length,g=d;const h={};for(;g--;)h[r[g].key]=g;const p=[],_=new Map,v=new Map,w=[];for(g=m;g--;){const S=f(i,s,g),y=t(S);let T=o.get(y);T?n&&w.push(()=>T.p(S,e)):(T=c(y,S),T.c()),_.set(y,p[g]=T),y in h&&v.set(y,Math.abs(g-h[y]))}const x=new Set,M=new Set;function b(S){le(S,1),S.m(a,u),o.set(S.key,S),u=S.first,m--}for(;d&&m;){const S=p[m-1],y=r[d-1],T=S.key,I=y.key;S===y?(u=S.first,d--,m--):_.has(I)?!o.has(T)||x.has(T)?b(S):M.has(I)?d--:v.get(T)>v.get(I)?(M.add(T),b(S)):(x.add(I),d--):(l(y,o),d--)}for(;d--;){const S=r[d];_.has(S.key)||l(S,o)}for(;m;)b(p[m-1]);return Ft(w),p}function Dt(r,e){const t={},n={},i={$$scope:1};let s=r.length;for(;s--;){const o=r[s],a=e[s];if(a){for(const l in o)l in a||(n[l]=1);for(const l in a)i[l]||(t[l]=a[l],i[l]=1);r[s]=a}else for(const l in o)i[l]=1}for(const o in n)o in t||(t[o]=void 0);return t}function tr(r){return typeof r=="object"&&r!==null?r:{}}function qh(r,e,t){const n=r.$$.props[e];n!==void 0&&(r.$$.bound[n]=t,t(r.$$.ctx[n]))}function pt(r){r&&r.c()}function at(r,e,t,n){const{fragment:i,after_update:s}=r.$$;i&&i.m(e,t),n||on(()=>{const o=r.$$.on_mount.map(Tf).filter(wt);r.$$.on_destroy?r.$$.on_destroy.push(...o):Ft(o),r.$$.on_mount=[]}),s.forEach(on)}function ot(r,e){const t=r.$$;t.fragment!==null&&(Vh(t.after_update),Ft(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function jh(r,e){r.$$.dirty[0]===-1&&(Or.push(r),Nf(),r.$$.dirty.fill(0)),r.$$.dirty[e/31|0]|=1<<e%31}function Nt(r,e,t,n,i,s,o,a=[-1]){const l=Os;Ls(r);const c=r.$$={fragment:null,ctx:[],props:s,update:$e,not_equal:i,bound:ec(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ec(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(r,e.props||{},(f,d,...m)=>{const g=m.length?m[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&jh(r,f)),d}):[],c.update(),u=!0,Ft(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Ih(e.target);c.fragment&&c.fragment.l(f),f.forEach(xe)}else c.fragment&&c.fragment.c();e.intro&&le(r.$$.fragment),at(r,e.target,e.anchor,e.customElement),zf()}Ls(l)}class zt{$destroy(){ot(this,1),this.$destroy=$e}$on(e,t){if(!wt(t))return $e;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!Mh(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ms(r){if(!r)throw Error("Parameter args is required");if(!r.component==!r.asyncComponent)throw Error("One and only one of component and asyncComponent is required");if(r.component&&(r.asyncComponent=()=>Promise.resolve(r.component)),typeof r.asyncComponent!="function")throw Error("Parameter asyncComponent must be a function");if(r.conditions){Array.isArray(r.conditions)||(r.conditions=[r.conditions]);for(let t=0;t<r.conditions.length;t++)if(!r.conditions[t]||typeof r.conditions[t]!="function")throw Error("Invalid parameter conditions["+t+"]")}return r.loadingComponent&&(r.asyncComponent.loading=r.loadingComponent,r.asyncComponent.loadingParams=r.loadingParams||void 0),{component:r.asyncComponent,userData:r.userData,conditions:r.conditions&&r.conditions.length?r.conditions:void 0,props:r.props&&Object.keys(r.props).length?r.props:{},_sveltesparouter:!0}}const vr=[];function Uf(r,e){return{subscribe:qs(r,e).subscribe}}function qs(r,e=$e){let t;const n=new Set;function i(a){if(lt(r,a)&&(r=a,t)){const l=!vr.length;for(const c of n)c[1](),vr.push(c,r);if(l){for(let c=0;c<vr.length;c+=2)vr[c][0](vr[c+1]);vr.length=0}}}function s(a){i(a(r))}function o(a,l=$e){const c=[a,l];return n.add(c),n.size===1&&(t=e(i)||$e),a(r),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function kf(r,e,t){const n=!Array.isArray(r),i=n?[r]:r,s=e.length<2;return Uf(t,o=>{let a=!1;const l=[];let c=0,u=$e;const f=()=>{if(c)return;u();const m=e(n?l[0]:l,o);s?o(m):u=wt(m)?m:$e},d=i.map((m,g)=>Cl(m,h=>{l[g]=h,c&=~(1<<g),a&&f()},()=>{c|=1<<g}));return a=!0,f(),function(){Ft(d),u(),a=!1}})}function Yh(r,e){if(r instanceof RegExp)return{keys:!1,pattern:r};var t,n,i,s,o=[],a="",l=r.split("/");for(l[0]||l.shift();i=l.shift();)t=i[0],t==="*"?(o.push("wild"),a+="/(.*)"):t===":"?(n=i.indexOf("?",1),s=i.indexOf(".",1),o.push(i.substring(1,~n?n:~s?s:i.length)),a+=~n&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~n?"?":"")+"\\"+i.substring(s))):a+="/"+i;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function Kh(r){let e,t,n;const i=[r[2]];var s=r[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Be(l,i[c]);return{props:l}}return s&&(e=Yr(s,o()),e.$on("routeEvent",r[7])),{c(){e&&pt(e.$$.fragment),t=yn()},m(a,l){e&&at(e,a,l),ye(a,t,l),n=!0},p(a,l){const c=l&4?Dt(i,[tr(a[2])]):{};if(l&1&&s!==(s=a[0])){if(e){ft();const u=e;pe(u.$$.fragment,1,0,()=>{ot(u,1)}),dt()}s?(e=Yr(s,o()),e.$on("routeEvent",a[7]),pt(e.$$.fragment),le(e.$$.fragment,1),at(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){n||(e&&le(e.$$.fragment,a),n=!0)},o(a){e&&pe(e.$$.fragment,a),n=!1},d(a){a&&xe(t),e&&ot(e,a)}}}function Zh(r){let e,t,n;const i=[{params:r[1]},r[2]];var s=r[0];function o(a){let l={};for(let c=0;c<i.length;c+=1)l=Be(l,i[c]);return{props:l}}return s&&(e=Yr(s,o()),e.$on("routeEvent",r[6])),{c(){e&&pt(e.$$.fragment),t=yn()},m(a,l){e&&at(e,a,l),ye(a,t,l),n=!0},p(a,l){const c=l&6?Dt(i,[l&2&&{params:a[1]},l&4&&tr(a[2])]):{};if(l&1&&s!==(s=a[0])){if(e){ft();const u=e;pe(u.$$.fragment,1,0,()=>{ot(u,1)}),dt()}s?(e=Yr(s,o()),e.$on("routeEvent",a[6]),pt(e.$$.fragment),le(e.$$.fragment,1),at(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){n||(e&&le(e.$$.fragment,a),n=!0)},o(a){e&&pe(e.$$.fragment,a),n=!1},d(a){a&&xe(t),e&&ot(e,a)}}}function Jh(r){let e,t,n,i;const s=[Zh,Kh],o=[];function a(l,c){return l[1]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=yn()},m(l,c){o[e].m(l,c),ye(l,n,c),i=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(ft(),pe(o[u],1,1,()=>{o[u]=null}),dt(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),le(t,1),t.m(n.parentNode,n))},i(l){i||(le(t),i=!0)},o(l){pe(t),i=!1},d(l){o[e].d(l),l&&xe(n)}}}function ic(){const r=window.location.href.indexOf("#/");let e=r>-1?window.location.href.substr(r+1):"/";const t=e.indexOf("?");let n="";return t>-1&&(n=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:n}}const Rl=Uf(null,function(e){e(ic());const t=()=>{e(ic())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}}),Qh=kf(Rl,r=>r.location);kf(Rl,r=>r.querystring);const rc=qs(void 0);async function $h(r){if(!r||r.length<1||r.charAt(0)!="/"&&r.indexOf("#/")!==0)throw Error("Invalid parameter location");await Ka();const e=(r.charAt(0)=="#"?"":"#")+r;try{const t={...history.state};delete t.__svelte_spa_router_scrollX,delete t.__svelte_spa_router_scrollY,window.history.replaceState(t,void 0,e)}catch{console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}function Ms(r,e){if(e=ac(e),!r||!r.tagName||r.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return sc(r,e),{update(t){t=ac(t),sc(r,t)}}}function ep(r){r?window.scrollTo(r.__svelte_spa_router_scrollX,r.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function sc(r,e){let t=e.href||r.getAttribute("href");if(t&&t.charAt(0)=="/")t="#"+t;else if(!t||t.length<2||t.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+t);r.setAttribute("href",t),r.addEventListener("click",n=>{n.preventDefault(),e.disabled||tp(n.currentTarget.getAttribute("href"))})}function ac(r){return r&&typeof r=="string"?{href:r}:r||{}}function tp(r){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=r}function np(r,e,t){let{routes:n={}}=e,{prefix:i=""}=e,{restoreScrollState:s=!1}=e;class o{constructor(M,b){if(!b||typeof b!="function"&&(typeof b!="object"||b._sveltesparouter!==!0))throw Error("Invalid component object");if(!M||typeof M=="string"&&(M.length<1||M.charAt(0)!="/"&&M.charAt(0)!="*")||typeof M=="object"&&!(M instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:S,keys:y}=Yh(M);this.path=M,typeof b=="object"&&b._sveltesparouter===!0?(this.component=b.component,this.conditions=b.conditions||[],this.userData=b.userData,this.props=b.props||{}):(this.component=()=>Promise.resolve(b),this.conditions=[],this.props={}),this._pattern=S,this._keys=y}match(M){if(i){if(typeof i=="string")if(M.startsWith(i))M=M.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const T=M.match(i);if(T&&T[0])M=M.substr(T[0].length)||"/";else return null}}const b=this._pattern.exec(M);if(b===null)return null;if(this._keys===!1)return b;const S={};let y=0;for(;y<this._keys.length;){try{S[this._keys[y]]=decodeURIComponent(b[y+1]||"")||null}catch{S[this._keys[y]]=null}y++}return S}async checkConditions(M){for(let b=0;b<this.conditions.length;b++)if(!await this.conditions[b](M))return!1;return!0}}const a=[];n instanceof Map?n.forEach((x,M)=>{a.push(new o(M,x))}):Object.keys(n).forEach(x=>{a.push(new o(x,n[x]))});let l=null,c=null,u={};const f=Of();async function d(x,M){await Ka(),f(x,M)}let m=null,g=null;s&&(g=x=>{x.state&&(x.state.__svelte_spa_router_scrollY||x.state.__svelte_spa_router_scrollX)?m=x.state:m=null},window.addEventListener("popstate",g),Uh(()=>{ep(m)}));let h=null,p=null;const _=Rl.subscribe(async x=>{h=x;let M=0;for(;M<a.length;){const b=a[M].match(x.location);if(!b){M++;continue}const S={route:a[M].path,location:x.location,querystring:x.querystring,userData:a[M].userData,params:b&&typeof b=="object"&&Object.keys(b).length?b:null};if(!await a[M].checkConditions(S)){t(0,l=null),p=null,d("conditionsFailed",S);return}d("routeLoading",Object.assign({},S));const y=a[M].component;if(p!=y){y.loading?(t(0,l=y.loading),p=y,t(1,c=y.loadingParams),t(2,u={}),d("routeLoaded",Object.assign({},S,{component:l,name:l.name,params:c}))):(t(0,l=null),p=null);const T=await y();if(x!=h)return;t(0,l=T&&T.default||T),p=y}b&&typeof b=="object"&&Object.keys(b).length?t(1,c=b):t(1,c=null),t(2,u=a[M].props),d("routeLoaded",Object.assign({},S,{component:l,name:l.name,params:c})).then(()=>{rc.set(c)});return}t(0,l=null),p=null,rc.set(void 0)});If(()=>{_(),g&&window.removeEventListener("popstate",g)});function v(x){tl.call(this,r,x)}function w(x){tl.call(this,r,x)}return r.$$set=x=>{"routes"in x&&t(3,n=x.routes),"prefix"in x&&t(4,i=x.prefix),"restoreScrollState"in x&&t(5,s=x.restoreScrollState)},r.$$.update=()=>{r.$$.dirty&32&&(history.scrollRestoration=s?"manual":"auto")},[l,c,u,n,i,s,v,w]}class ip extends zt{constructor(e){super(),Nt(this,e,np,Jh,lt,{routes:3,prefix:4,restoreScrollState:5})}}function rp(r){const e=r-1;return e*e*e+1}function oc(r){return--r*r*r*r*r+1}function Ot(r,{delay:e=0,duration:t=400,easing:n=wf}={}){const i=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:n,css:s=>`opacity: ${s*i}`}}function lc(r,{delay:e=0,duration:t=400,easing:n=rp,x:i=0,y:s=0,opacity:o=0}={}){const a=getComputedStyle(r),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o),[f,d]=tc(i),[m,g]=tc(s);return{delay:e,duration:t,easing:n,css:(h,p)=>`
			transform: ${c} translate(${(1-h)*f}${d}, ${(1-h)*m}${g});
			opacity: ${l-u*p}`}}function sp(r){let e;return{c(){e=_e("div"),e.textContent="404です",me(e,"class","page-404 svelte-1chuduv")},m(t,n){ye(t,e,n)},p:$e,i:$e,o:$e,d(t){t&&xe(e)}}}let Bf=class extends zt{constructor(e){super(),Nt(this,e,null,sp,lt,{})}};const ap=()=>{$h("/")},op=r=>r.replace(/^\//,"").split("/");function nS(r,e){var n,i;const t={};return(i=(n=Object.keys(e))==null?void 0:n.forEach)==null||i.call(n,s=>{const o=e[s];t[[r,s].join("")]=o}),{...t,[`${r}/*`]:Bf}}const Xn=qs(0);function cc(r){let e,t,n,i,s,o,a,l,c,u,f,d,m,g,h,p,_=r[0]!==""&&uc();return{c(){e=_e("div"),t=_e("div"),n=Ne(),i=_e("div"),_&&_.c(),s=Ne(),o=_e("a"),o.textContent="个人经历",a=Ne(),l=_e("a"),l.textContent="学习",c=Ne(),u=_e("a"),u.textContent="兴趣爱好",f=Ne(),d=_e("a"),d.textContent="个人规划",me(t,"class","avatar svelte-ouviy1"),me(t,"role","presentation"),me(o,"href","/biog"),me(o,"class","nav-item svelte-ouviy1"),Vn(o,"active",r[0]==="biog"),me(l,"href","/knowlage"),me(l,"class","nav-item svelte-ouviy1"),Vn(l,"active",r[0]==="knowlage"),me(u,"href","/nijigen"),me(u,"class","nav-item svelte-ouviy1"),Vn(u,"active",r[0]==="nijigen"),me(d,"href","/okr"),me(d,"class","nav-item svelte-ouviy1"),Vn(d,"active",r[0]==="okr"),me(i,"class","tabs svelte-ouviy1"),me(e,"class","nav svelte-ouviy1")},m(v,w){ye(v,e,w),ge(e,t),ge(e,n),ge(e,i),_&&_.m(i,null),ge(i,s),ge(i,o),ge(i,a),ge(i,l),ge(i,c),ge(i,u),ge(i,f),ge(i,d),g=!0,h||(p=[ht(t,"click",ap),tt(Ms.call(null,o)),tt(Ms.call(null,l)),tt(Ms.call(null,u)),tt(Ms.call(null,d))],h=!0)},p(v,w){r=v,r[0]!==""?_||(_=uc(),_.c(),_.m(i,s)):_&&(_.d(1),_=null),(!g||w&1)&&Vn(o,"active",r[0]==="biog"),(!g||w&1)&&Vn(l,"active",r[0]==="knowlage"),(!g||w&1)&&Vn(u,"active",r[0]==="nijigen"),(!g||w&1)&&Vn(d,"active",r[0]==="okr")},i(v){g||(on(()=>{g&&(m||(m=xt(e,lc,{delay:300,duration:1e3,x:0,y:-70,opacity:.5,easing:oc},!0)),m.run(1))}),g=!0)},o(v){m||(m=xt(e,lc,{delay:300,duration:1e3,x:0,y:-70,opacity:.5,easing:oc},!1)),m.run(0),g=!1},d(v){v&&xe(e),_&&_.d(),v&&m&&m.end(),h=!1,Ft(p)}}}function uc(r){let e,t,n;return{c(){e=_e("a"),e.textContent="Home",me(e,"href","/"),me(e,"class","nav-item svelte-ouviy1")},m(i,s){ye(i,e,s),t||(n=tt(Ms.call(null,e)),t=!0)},d(i){i&&xe(e),t=!1,n()}}}function lp(r){let e,t,n=r[1]&&cc(r);return{c(){n&&n.c(),e=yn()},m(i,s){n&&n.m(i,s),ye(i,e,s),t=!0},p(i,[s]){i[1]?n?(n.p(i,s),s&2&&le(n,1)):(n=cc(i),n.c(),le(n,1),n.m(e.parentNode,e)):n&&(ft(),pe(n,1,1,()=>{n=null}),dt())},i(i){t||(le(n),t=!0)},o(i){pe(n),t=!1},d(i){n&&n.d(i),i&&xe(e)}}}function cp(r,e,t){let n,i;an(r,Xn,o=>t(2,i=o));let s="";return Qh.subscribe(o=>{const[a]=op(o);t(0,s=a)}),r.$$.update=()=>{r.$$.dirty&5&&t(1,n=s||i!==0)},[s,n,i]}class up extends zt{constructor(e){super(),Nt(this,e,cp,lp,lt,{})}}const fp="modulepreload",dp=function(r){return"/"+r},fc={},gs=function(e,t,n){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=dp(s),s in fc)return;fc[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":fp,o||(c.as="script",c.crossOrigin=""),c.href=s,document.head.appendChild(c),o)return new Promise((u,f)=>{c.addEventListener("load",u),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="142",hp=0,dc=1,pp=2,Vf=1,mp=2,ws=3,Ns=0,Rn=1,Kr=2,gp=1,Ei=0,Gr=1,hc=2,pc=3,mc=4,_p=5,Fr=100,vp=101,xp=102,gc=103,_c=104,yp=200,bp=201,Sp=202,Mp=203,Gf=204,Hf=205,wp=206,Tp=207,Ep=208,Ap=209,Cp=210,Lp=0,Rp=1,Dp=2,rl=3,Pp=4,Ip=5,Op=6,Fp=7,Wf=0,Np=1,zp=2,di=0,Up=1,kp=2,Bp=3,Vp=4,Gp=5,Xf=300,Zr=301,Jr=302,sl=303,al=304,Za=306,ol=1e3,Cn=1001,ll=1002,Wt=1003,vc=1004,xc=1005,dn=1006,Hp=1007,Ja=1008,nr=1009,Wp=1010,Xp=1011,qf=1012,qp=1013,Wi=1014,Xi=1015,zs=1016,jp=1017,Yp=1018,Hr=1020,Kp=1021,Zp=1022,qn=1023,Jp=1024,Qp=1025,Ki=1026,Qr=1027,$p=1028,em=1029,tm=1030,nm=1031,im=1033,co=33776,uo=33777,fo=33778,ho=33779,yc=35840,bc=35841,Sc=35842,Mc=35843,rm=36196,wc=37492,Tc=37496,Ec=37808,Ac=37809,Cc=37810,Lc=37811,Rc=37812,Dc=37813,Pc=37814,Ic=37815,Oc=37816,Fc=37817,Nc=37818,zc=37819,Uc=37820,kc=37821,Bc=36492,ir=3e3,Je=3001,sm=3200,am=3201,om=0,lm=1,si="srgb",qi="srgb-linear",po=7680,cm=519,Vc=35044,Gc="300 es",cl=1035;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mo=Math.PI/180,Hc=180/Math.PI;function js(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function nn(r,e,t){return Math.max(e,Math.min(t,r))}function um(r,e){return(r%e+e)%e}function go(r,e,t){return(1-t)*r+t*e}function Wc(r){return(r&r-1)===0&&r!==0}function ul(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],h=i[0],p=i[3],_=i[6],v=i[1],w=i[4],x=i[7],M=i[2],b=i[5],S=i[8];return s[0]=o*h+a*v+l*M,s[3]=o*p+a*w+l*b,s[6]=o*_+a*x+l*S,s[1]=c*h+u*v+f*M,s[4]=c*p+u*w+f*b,s[7]=c*_+u*x+f*S,s[2]=d*h+m*v+g*M,s[5]=d*p+m*w+g*b,s[8]=d*_+m*x+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*f+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=f*h,e[1]=(i*c-u*n)*h,e[2]=(a*n-i*o)*h,e[3]=d*h,e[4]=(u*t-i*l)*h,e[5]=(i*s-a*t)*h,e[6]=m*h,e[7]=(n*l-c*t)*h,e[8]=(o*t-n*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*s+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*s+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function jf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Aa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const _o={[si]:{[qi]:Zi},[qi]:{[si]:Aa}},Sn={legacyMode:!0,get workingColorSpace(){return qi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(_o[e]&&_o[e][t]!==void 0){const n=_o[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={r:0,g:0,b:0},Mn={h:0,s:0,l:0},ea={h:0,s:0,l:0};function vo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function ta(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Sn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qi){return this.r=e,this.g=t,this.b=n,Sn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qi){if(e=um(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=vo(o,s,e+1/3),this.g=vo(o,s,e),this.b=vo(o,s,e-1/3)}return Sn.toWorkingColorSpace(this,i),this}setStyle(e,t=si){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Sn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Sn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Sn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Sn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=si){const n=Yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Sn.fromWorkingColorSpace(ta(this,ct),e),nn(ct.r*255,0,255)<<16^nn(ct.g*255,0,255)<<8^nn(ct.b*255,0,255)<<0}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qi){Sn.fromWorkingColorSpace(ta(this,ct),t);const n=ct.r,i=ct.g,s=ct.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=qi){return Sn.fromWorkingColorSpace(ta(this,ct),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=si){return Sn.fromWorkingColorSpace(ta(this,ct),e),e!==si?`color(${e} ${ct.r} ${ct.g} ${ct.b})`:`rgb(${ct.r*255|0},${ct.g*255|0},${ct.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Mn),Mn.h+=e,Mn.s+=t,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(ea);const n=go(Mn.h,ea.h,t),i=go(Mn.s,ea.s,t),s=go(Mn.l,ea.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=Yf;let xr;class Kf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=Us("canvas")),xr.width=e.width,xr.height=e.height;const n=xr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zf{constructor(e=null){this.isSource=!0,this.uuid=js(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(xo(i[o].image)):s.push(xo(i[o]))}else s=xo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function xo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fm=0;class vn extends ls{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,n=Cn,i=Cn,s=dn,o=Ja,a=qn,l=nr,c=1,u=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=js(),this.name="",this.source=new Zf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ol:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ol:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Xf;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],h=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(m+1)/2,M=(_+1)/2,b=(u+d)/4,S=(f+h)/4,y=(g+p)/4;return w>x&&w>M?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=S/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=y/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=S/s,i=y/s),this.set(n,i,s,t),this}let v=Math.sqrt((p-g)*(p-g)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-h)/v,this.z=(d-u)/v,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rr extends ls{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:dn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jf extends vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dm extends vn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=h;return}if(f!==h||l!==d||c!==m||u!==g){let p=1-a;const _=l*d+c*m+u*g+f*h,v=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const M=Math.sqrt(w),b=Math.atan2(M,_*v);p=Math.sin(p*b)/M,a=Math.sin(a*b)/M}const x=a*v;if(l=l*p+d*x,c=c*p+m*x,u=u*p+g*x,f=f*p+h*x,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-a*m,e[t+2]=c*g+u*m+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Xc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new k,Xc=new Ys;class Ks{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Fi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fi)}else n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox),bo.applyMatrix4(e.matrixWorld),this.union(bo);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),na.subVectors(this.max,_s),yr.subVectors(e.a,_s),br.subVectors(e.b,_s),Sr.subVectors(e.c,_s),gi.subVectors(br,yr),_i.subVectors(Sr,br),Ni.subVectors(yr,Sr);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Ni.z,Ni.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Ni.z,0,-Ni.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Ni.y,Ni.x,0];return!So(t,yr,br,Sr,na)||(t=[1,0,0,0,1,0,0,0,1],!So(t,yr,br,Sr,na))?!1:(ia.crossVectors(gi,_i),t=[ia.x,ia.y,ia.z],So(t,yr,br,Sr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new k,new k,new k,new k,new k,new k,new k,new k],Fi=new k,bo=new Ks,yr=new k,br=new k,Sr=new k,gi=new k,_i=new k,Ni=new k,_s=new k,na=new k,ia=new k,zi=new k;function So(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){zi.fromArray(r,s);const a=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),u=n.dot(zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hm=new Ks,qc=new k,ra=new k,Mo=new k;class Pl{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Mo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?ra.set(0,0,1).multiplyScalar(e.radius):ra.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(qc.copy(e.center).add(ra)),this.expandByPoint(qc.copy(e.center).sub(ra)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new k,wo=new k,sa=new k,vi=new k,To=new k,aa=new k,Eo=new k;class pm{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.direction).multiplyScalar(t).add(this.origin),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wo.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(wo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(sa),a=vi.dot(this.direction),l=-vi.dot(sa),c=vi.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const h=1/u;f*=h,d*=h,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(sa).multiplyScalar(d).add(wo),m}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,s){To.subVectors(t,e),aa.subVectors(n,e),Eo.crossVectors(To,aa);let o=this.direction.dot(Eo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(aa.crossVectors(vi,aa));if(l<0)return null;const c=a*this.direction.dot(To.cross(vi));if(c<0||l+c>o)return null;const u=-a*vi.dot(Eo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,s,o,a,l,c,u,f,d,m,g,h,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=h,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,h=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-h*c,t[9]=-a*l,t[2]=h-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d+h*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=h+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d-h*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=h-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,h=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+h,t[1]=l*f,t[5]=h*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,h=a*c;t[0]=l*u,t[4]=h-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,h=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+h,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),xi.crossVectors(n,Qt),xi.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),xi.crossVectors(n,Qt)),xi.normalize(),oa.crossVectors(Qt,xi),i[0]=xi.x,i[4]=oa.x,i[8]=Qt.x,i[1]=xi.y,i[5]=oa.y,i[9]=Qt.y,i[2]=xi.z,i[6]=oa.z,i[10]=Qt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],h=n[6],p=n[10],_=n[14],v=n[3],w=n[7],x=n[11],M=n[15],b=i[0],S=i[4],y=i[8],T=i[12],I=i[1],O=i[5],j=i[9],Y=i[13],F=i[2],U=i[6],L=i[10],R=i[14],D=i[3],N=i[7],V=i[11],Q=i[15];return s[0]=o*b+a*I+l*F+c*D,s[4]=o*S+a*O+l*U+c*N,s[8]=o*y+a*j+l*L+c*V,s[12]=o*T+a*Y+l*R+c*Q,s[1]=u*b+f*I+d*F+m*D,s[5]=u*S+f*O+d*U+m*N,s[9]=u*y+f*j+d*L+m*V,s[13]=u*T+f*Y+d*R+m*Q,s[2]=g*b+h*I+p*F+_*D,s[6]=g*S+h*O+p*U+_*N,s[10]=g*y+h*j+p*L+_*V,s[14]=g*T+h*Y+p*R+_*Q,s[3]=v*b+w*I+x*F+M*D,s[7]=v*S+w*O+x*U+M*N,s[11]=v*y+w*j+x*L+M*V,s[15]=v*T+w*Y+x*R+M*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],h=e[7],p=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*d+n*c*d+i*a*m-n*l*m)+h*(+t*l*m-t*c*d+s*o*d-i*o*m+i*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*d+i*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],h=e[13],p=e[14],_=e[15],v=f*p*c-h*d*c+h*l*m-a*p*m-f*l*_+a*d*_,w=g*d*c-u*p*c-g*l*m+o*p*m+u*l*_-o*d*_,x=u*h*c-g*f*c+g*a*m-o*h*m-u*a*_+o*f*_,M=g*f*l-u*h*l-g*a*d+o*h*d+u*a*p-o*f*p,b=t*v+n*w+i*x+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return e[0]=v*S,e[1]=(h*d*s-f*p*s-h*i*m+n*p*m+f*i*_-n*d*_)*S,e[2]=(a*p*s-h*l*s+h*i*c-n*p*c-a*i*_+n*l*_)*S,e[3]=(f*l*s-a*d*s-f*i*c+n*d*c+a*i*m-n*l*m)*S,e[4]=w*S,e[5]=(u*p*s-g*d*s+g*i*m-t*p*m-u*i*_+t*d*_)*S,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*_-t*l*_)*S,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*m+t*l*m)*S,e[8]=x*S,e[9]=(g*f*s-u*h*s-g*n*m+t*h*m+u*n*_-t*f*_)*S,e[10]=(o*h*s-g*a*s+g*n*c-t*h*c-o*n*_+t*a*_)*S,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*m-t*a*m)*S,e[12]=M*S,e[13]=(u*h*i-g*f*i+g*n*d-t*h*d-u*n*p+t*f*p)*S,e[14]=(g*a*i-o*h*i-g*n*l+t*h*l+o*n*p-t*a*p)*S,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,g=s*f,h=o*u,p=o*f,_=a*f,v=l*c,w=l*u,x=l*f,M=n.x,b=n.y,S=n.z;return i[0]=(1-(h+_))*M,i[1]=(m+x)*M,i[2]=(g-w)*M,i[3]=0,i[4]=(m-x)*b,i[5]=(1-(d+_))*b,i[6]=(p+v)*b,i[7]=0,i[8]=(g+w)*S,i[9]=(p-v)*S,i[10]=(1-(d+h))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Mr.set(i[0],i[1],i[2]).length();const o=Mr.set(i[4],i[5],i[6]).length(),a=Mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const c=1/s,u=1/o,f=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,d=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mr=new k,wn=new Tt,mm=new k(0,0,0),gm=new k(1,1,1),xi=new k,oa=new k,Qt=new k,jc=new Tt,Yc=new Ys;class Zs{constructor(e=0,t=0,n=0,i=Zs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yc.setFromEuler(this),this.setFromQuaternion(Yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Zs.DefaultOrder="XYZ";Zs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _m=0;const Kc=new k,wr=new Ys,ni=new Tt,la=new k,vs=new k,vm=new k,xm=new Ys,Zc=new k(1,0,0),Jc=new k(0,1,0),Qc=new k(0,0,1),ym={type:"added"},$c={type:"removed"};class Pn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DefaultUp.clone();const e=new k,t=new Zs,n=new Ys,i=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new hn}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Pn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Zc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?la.copy(e):la.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(vs,la,this.up):ni.lookAt(la,vs,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),wr.setFromRotationMatrix(ni),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ym)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($c)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent($c)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,xm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Pn.DefaultUp=new k(0,1,0);Pn.DefaultMatrixAutoUpdate=!0;const Tn=new k,ii=new k,Ao=new k,ri=new k,Tr=new k,Er=new k,eu=new k,Co=new k,Lo=new k,Ro=new k;class ci{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Tn.subVectors(i,t),ii.subVectors(n,t),Ao.subVectors(e,t);const o=Tn.dot(Tn),a=Tn.dot(ii),l=Tn.dot(Ao),c=ii.dot(ii),u=ii.dot(Ao),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri),ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,ri),l.set(0,0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),ii.subVectors(e,t),Tn.cross(ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Tn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ci.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Tr.subVectors(i,n),Er.subVectors(s,n),Co.subVectors(e,n);const l=Tr.dot(Co),c=Er.dot(Co);if(l<=0&&c<=0)return t.copy(n);Lo.subVectors(e,i);const u=Tr.dot(Lo),f=Er.dot(Lo);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Tr,o);Ro.subVectors(e,s);const m=Tr.dot(Ro),g=Er.dot(Ro);if(g>=0&&m<=g)return t.copy(s);const h=m*c-l*g;if(h<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Er,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return eu.subVectors(s,i),a=(f-u)/(f-u+(m-g)),t.copy(i).addScaledVector(eu,a);const _=1/(p+h+d);return o=h*_,a=d*_,t.copy(n).addScaledVector(Tr,o).addScaledVector(Er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bm=0;class Qa extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Gr,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gf,this.blendDst=Hf,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===gp;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Ns&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $f extends Qa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new k,ca=new Ge;class Yn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Vc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new qe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Ge),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new k),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new vt),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ed extends Yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class td extends Yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ji extends Yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Sm=0;const cn=new Tt,Do=new Pn,Ar=new k,$t=new Ks,xs=new Ks,mt=new k;class ur extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?td:ed)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new hn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ji(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors($t.min,xs.min),$t.expandByPoint(mt),mt.addVectors($t.max,xs.max),$t.expandByPoint(mt)):($t.expandByPoint(xs.min),$t.expandByPoint(xs.max))}$t.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)mt.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),mt.add(Ar)),i=Math.max(i,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let I=0;I<a;I++)c[I]=new k,u[I]=new k;const f=new k,d=new k,m=new k,g=new Ge,h=new Ge,p=new Ge,_=new k,v=new k;function w(I,O,j){f.fromArray(i,I*3),d.fromArray(i,O*3),m.fromArray(i,j*3),g.fromArray(o,I*2),h.fromArray(o,O*2),p.fromArray(o,j*2),d.sub(f),m.sub(f),h.sub(g),p.sub(g);const Y=1/(h.x*p.y-p.x*h.y);isFinite(Y)&&(_.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(Y),v.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(Y),c[I].add(_),c[O].add(_),c[j].add(_),u[I].add(v),u[O].add(v),u[j].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let I=0,O=x.length;I<O;++I){const j=x[I],Y=j.start,F=j.count;for(let U=Y,L=Y+F;U<L;U+=3)w(n[U+0],n[U+1],n[U+2])}const M=new k,b=new k,S=new k,y=new k;function T(I){S.fromArray(s,I*3),y.copy(S);const O=c[I];M.copy(O),M.sub(S.multiplyScalar(S.dot(O))).normalize(),b.crossVectors(y,O);const Y=b.dot(u[I])<0?-1:1;l[I*4]=M.x,l[I*4+1]=M.y,l[I*4+2]=M.z,l[I*4+3]=Y}for(let I=0,O=x.length;I<O;++I){const j=x[I],Y=j.start,F=j.count;for(let U=Y,L=Y+F;U<L;U+=3)T(n[U+0]),T(n[U+1]),T(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let f=0,d=c;f<u;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new Yn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new Tt,Cr=new pm,Po=new Pl,yi=new k,bi=new k,Si=new k,Io=new k,Oo=new k,Fo=new k,ua=new k,fa=new k,da=new k,ha=new Ge,pa=new Ge,ma=new Ge,No=new k,ga=new k;class fi extends Pn{constructor(e=new ur,t=new $f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),e.ray.intersectsSphere(Po)===!1)||(tu.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(tu),n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let h=0,p=m.length;h<p;h++){const _=m[h],v=i[_.materialIndex],w=Math.max(_.start,g.start),x=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=w,b=x;M<b;M+=3){const S=a.getX(M),y=a.getX(M+1),T=a.getX(M+2);o=_a(this,v,e,Cr,l,c,u,f,d,S,y,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const h=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=h,v=p;_<v;_+=3){const w=a.getX(_),x=a.getX(_+1),M=a.getX(_+2);o=_a(this,i,e,Cr,l,c,u,f,d,w,x,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let h=0,p=m.length;h<p;h++){const _=m[h],v=i[_.materialIndex],w=Math.max(_.start,g.start),x=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=w,b=x;M<b;M+=3){const S=M,y=M+1,T=M+2;o=_a(this,v,e,Cr,l,c,u,f,d,S,y,T),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const h=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=h,v=p;_<v;_+=3){const w=_,x=_+1,M=_+2;o=_a(this,i,e,Cr,l,c,u,f,d,w,x,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Mm(r,e,t,n,i,s,o,a){let l;if(e.side===Rn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side!==Kr,a),l===null)return null;ga.copy(a),ga.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:r}}function _a(r,e,t,n,i,s,o,a,l,c,u,f){yi.fromBufferAttribute(i,c),bi.fromBufferAttribute(i,u),Si.fromBufferAttribute(i,f);const d=r.morphTargetInfluences;if(s&&d){ua.set(0,0,0),fa.set(0,0,0),da.set(0,0,0);for(let g=0,h=s.length;g<h;g++){const p=d[g],_=s[g];p!==0&&(Io.fromBufferAttribute(_,c),Oo.fromBufferAttribute(_,u),Fo.fromBufferAttribute(_,f),o?(ua.addScaledVector(Io,p),fa.addScaledVector(Oo,p),da.addScaledVector(Fo,p)):(ua.addScaledVector(Io.sub(yi),p),fa.addScaledVector(Oo.sub(bi),p),da.addScaledVector(Fo.sub(Si),p)))}yi.add(ua),bi.add(fa),Si.add(da)}r.isSkinnedMesh&&(r.boneTransform(c,yi),r.boneTransform(u,bi),r.boneTransform(f,Si));const m=Mm(r,e,t,n,yi,bi,Si,No);if(m){a&&(ha.fromBufferAttribute(a,c),pa.fromBufferAttribute(a,u),ma.fromBufferAttribute(a,f),m.uv=ci.getUV(No,yi,bi,Si,ha,pa,ma,new Ge)),l&&(ha.fromBufferAttribute(l,c),pa.fromBufferAttribute(l,u),ma.fromBufferAttribute(l,f),m.uv2=ci.getUV(No,yi,bi,Si,ha,pa,ma,new Ge));const g={a:c,b:u,c:f,normal:new k,materialIndex:0};ci.getNormal(yi,bi,Si,g.normal),m.face=g}return m}class Js extends ur{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ji(c,3)),this.setAttribute("normal",new Ji(u,3)),this.setAttribute("uv",new Ji(f,2));function g(h,p,_,v,w,x,M,b,S,y,T){const I=x/S,O=M/y,j=x/2,Y=M/2,F=b/2,U=S+1,L=y+1;let R=0,D=0;const N=new k;for(let V=0;V<L;V++){const Q=V*O-Y;for(let Z=0;Z<U;Z++){const ee=Z*I-j;N[h]=ee*v,N[p]=Q*w,N[_]=F,c.push(N.x,N.y,N.z),N[h]=0,N[p]=0,N[_]=b>0?1:-1,u.push(N.x,N.y,N.z),f.push(Z/S),f.push(1-V/y),R+=1}}for(let V=0;V<y;V++)for(let Q=0;Q<S;Q++){const Z=d+Q+U*V,ee=d+Q+U*(V+1),ne=d+(Q+1)+U*(V+1),fe=d+(Q+1)+U*V;l.push(Z,ee,fe),l.push(ee,ne,fe),D+=6}a.addGroup(m,D,T),m+=D,d+=R}}static fromJSON(e){return new Js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $r(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(r){const e={};for(let t=0;t<r.length;t++){const n=$r(r[t]);for(const i in n)e[i]=n[i]}return e}const wm={clone:$r,merge:Lt};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends Qa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Tm,this.fragmentShader=Em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$r(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nd extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends nd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=90,Rr=1;class Am extends Pn{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new An(Lr,Rr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new k(1,0,0)),this.add(i);const s=new An(Lr,Rr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new k(-1,0,0)),this.add(s);const o=new An(Lr,Rr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new k(0,1,0)),this.add(o);const a=new An(Lr,Rr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new k(0,-1,0)),this.add(a);const l=new An(Lr,Rr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(0,0,1)),this.add(l);const c=new An(Lr,Rr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new k(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=di,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class id extends vn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cm extends rr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new id(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Js(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:$r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Ei});s.uniforms.tEquirect.value=t;const o=new fi(i,s),a=t.minFilter;return t.minFilter===Ja&&(t.minFilter=dn),new Am(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const zo=new k,Lm=new k,Rm=new hn;class Bi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=zo.subVectors(n,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(zo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rm.getNormalMatrix(e),i=this.coplanarPoint(zo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new Pl,va=new k;class rd{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,s=new Bi,o=new Bi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],g=n[10],h=n[11],p=n[12],_=n[13],v=n[14],w=n[15];return t[0].setComponents(a-i,f-l,h-d,w-p).normalize(),t[1].setComponents(a+i,f+l,h+d,w+p).normalize(),t[2].setComponents(a+s,f+c,h+m,w+_).normalize(),t[3].setComponents(a-s,f-c,h-m,w-_).normalize(),t[4].setComponents(a-o,f-u,h-g,w-v).normalize(),t[5].setComponents(a+o,f+u,h+g,w+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(va.x=i.normal.x>0?e.max.x:e.min.x,va.y=i.normal.y>0?e.max.y:e.min.y,va.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Dm(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;r.bindBuffer(f,c),m.count===-1?r.bufferSubData(f,0,d):(t?r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class $a extends ur{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,d=t/l,m=[],g=[],h=[],p=[];for(let _=0;_<u;_++){const v=_*d-o;for(let w=0;w<c;w++){const x=w*f-s;g.push(x,-v,0),h.push(0,0,1),p.push(w/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const w=v+c*_,x=v+c*(_+1),M=v+1+c*(_+1),b=v+1+c*_;m.push(w,x,b),m.push(x,M,b)}this.setIndex(m),this.setAttribute("position",new Ji(g,3)),this.setAttribute("normal",new Ji(h,3)),this.setAttribute("uv",new Ji(p,2))}static fromJSON(e){return new $a(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um="vec3 transformed = vec3( position );",km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Vm=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$m=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",sg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,gg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Eg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ag=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Xg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,n_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,c_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,f_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,p_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,y_=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,b_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,S_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,M_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,w_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,T_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,E_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,A_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,C_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,I_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,F_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,k_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,V_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,K_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Q_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,s0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Re={alphamap_fragment:Pm,alphamap_pars_fragment:Im,alphatest_fragment:Om,alphatest_pars_fragment:Fm,aomap_fragment:Nm,aomap_pars_fragment:zm,begin_vertex:Um,beginnormal_vertex:km,bsdfs:Bm,iridescence_fragment:Vm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:qm,color_fragment:jm,color_pars_fragment:Ym,color_pars_vertex:Km,color_vertex:Zm,common:Jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:$m,displacementmap_pars_vertex:eg,displacementmap_vertex:tg,emissivemap_fragment:ng,emissivemap_pars_fragment:ig,encodings_fragment:rg,encodings_pars_fragment:sg,envmap_fragment:ag,envmap_common_pars_fragment:og,envmap_pars_fragment:lg,envmap_pars_vertex:cg,envmap_physical_pars_fragment:yg,envmap_vertex:ug,fog_vertex:fg,fog_pars_vertex:dg,fog_fragment:hg,fog_pars_fragment:pg,gradientmap_pars_fragment:mg,lightmap_fragment:gg,lightmap_pars_fragment:_g,lights_lambert_vertex:vg,lights_pars_begin:xg,lights_toon_fragment:bg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Mg,lights_phong_pars_fragment:wg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Eg,lights_fragment_begin:Ag,lights_fragment_maps:Cg,lights_fragment_end:Lg,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Ig,map_fragment:Og,map_pars_fragment:Fg,map_particle_fragment:Ng,map_particle_pars_fragment:zg,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:kg,morphcolor_vertex:Bg,morphnormal_vertex:Vg,morphtarget_pars_vertex:Gg,morphtarget_vertex:Hg,normal_fragment_begin:Wg,normal_fragment_maps:Xg,normal_pars_fragment:qg,normal_pars_vertex:jg,normal_vertex:Yg,normalmap_pars_fragment:Kg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:$g,output_fragment:e_,packing:t_,premultiplied_alpha_fragment:n_,project_vertex:i_,dithering_fragment:r_,dithering_pars_fragment:s_,roughnessmap_fragment:a_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:l_,shadowmap_pars_vertex:c_,shadowmap_vertex:u_,shadowmask_pars_fragment:f_,skinbase_vertex:d_,skinning_pars_vertex:h_,skinning_vertex:p_,skinnormal_vertex:m_,specularmap_fragment:g_,specularmap_pars_fragment:__,tonemapping_fragment:v_,tonemapping_pars_fragment:x_,transmission_fragment:y_,transmission_pars_fragment:b_,uv_pars_fragment:S_,uv_pars_vertex:M_,uv_vertex:w_,uv2_pars_fragment:T_,uv2_pars_vertex:E_,uv2_vertex:A_,worldpos_vertex:C_,background_vert:L_,background_frag:R_,cube_vert:D_,cube_frag:P_,depth_vert:I_,depth_frag:O_,distanceRGBA_vert:F_,distanceRGBA_frag:N_,equirect_vert:z_,equirect_frag:U_,linedashed_vert:k_,linedashed_frag:B_,meshbasic_vert:V_,meshbasic_frag:G_,meshlambert_vert:H_,meshlambert_frag:W_,meshmatcap_vert:X_,meshmatcap_frag:q_,meshnormal_vert:j_,meshnormal_frag:Y_,meshphong_vert:K_,meshphong_frag:Z_,meshphysical_vert:J_,meshphysical_frag:Q_,meshtoon_vert:$_,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:r0,sprite_vert:s0,sprite_frag:a0},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},Gn={basic:{uniforms:Lt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Lt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Lt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Lt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Lt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Lt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Lt([oe.points,oe.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Lt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Lt([oe.common,oe.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Lt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Lt([oe.sprite,oe.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:Lt([oe.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Lt([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Lt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Gn.physical={uniforms:Lt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function o0(r,e,t,n,i,s){const o=new qe(0);let a=i===!0?0:1,l,c,u=null,f=0,d=null;function m(h,p){let _=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const w=r.xr,x=w.getSession&&w.getSession();x&&x.environmentBlendMode==="additive"&&(v=null),v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Za)?(c===void 0&&(c=new fi(new Js(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:$r(Gn.cube.uniforms),vertexShader:Gn.cube.vertexShader,fragmentShader:Gn.cube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new fi(new $a(2,2),new Li({name:"BackgroundMaterial",uniforms:$r(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function g(h,p){t.buffers.color.setClear(h.r,h.g,h.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(h,p=1){o.set(h),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,g(o,a)},render:m}}function l0(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(F,U,L,R,D){let N=!1;if(o){const V=h(R,L,U);c!==V&&(c=V,m(c.object)),N=_(F,R,L,D),N&&v(F,R,L,D)}else{const V=U.wireframe===!0;(c.geometry!==R.id||c.program!==L.id||c.wireframe!==V)&&(c.geometry=R.id,c.program=L.id,c.wireframe=V,N=!0)}D!==null&&t.update(D,34963),(N||u)&&(u=!1,y(F,U,L,R),D!==null&&r.bindBuffer(34963,t.get(D).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(F){return n.isWebGL2?r.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?r.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function h(F,U,L){const R=L.wireframe===!0;let D=a[F.id];D===void 0&&(D={},a[F.id]=D);let N=D[U.id];N===void 0&&(N={},D[U.id]=N);let V=N[R];return V===void 0&&(V=p(d()),N[R]=V),V}function p(F){const U=[],L=[],R=[];for(let D=0;D<i;D++)U[D]=0,L[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:L,attributeDivisors:R,object:F,attributes:{},index:null}}function _(F,U,L,R){const D=c.attributes,N=U.attributes;let V=0;const Q=L.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const ne=D[Z];let fe=N[Z];if(fe===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),ne===void 0||ne.attribute!==fe||fe&&ne.data!==fe.data)return!0;V++}return c.attributesNum!==V||c.index!==R}function v(F,U,L,R){const D={},N=U.attributes;let V=0;const Q=L.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let ne=N[Z];ne===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));const fe={};fe.attribute=ne,ne&&ne.data&&(fe.data=ne.data),D[Z]=fe,V++}c.attributes=D,c.attributesNum=V,c.index=R}function w(){const F=c.newAttributes;for(let U=0,L=F.length;U<L;U++)F[U]=0}function x(F){M(F,0)}function M(F,U){const L=c.newAttributes,R=c.enabledAttributes,D=c.attributeDivisors;L[F]=1,R[F]===0&&(r.enableVertexAttribArray(F),R[F]=1),D[F]!==U&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,U),D[F]=U)}function b(){const F=c.newAttributes,U=c.enabledAttributes;for(let L=0,R=U.length;L<R;L++)U[L]!==F[L]&&(r.disableVertexAttribArray(L),U[L]=0)}function S(F,U,L,R,D,N){n.isWebGL2===!0&&(L===5124||L===5125)?r.vertexAttribIPointer(F,U,L,D,N):r.vertexAttribPointer(F,U,L,R,D,N)}function y(F,U,L,R){if(n.isWebGL2===!1&&(F.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const D=R.attributes,N=L.getAttributes(),V=U.defaultAttributeValues;for(const Q in N){const Z=N[Q];if(Z.location>=0){let ee=D[Q];if(ee===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){const ne=ee.normalized,fe=ee.itemSize,X=t.get(ee);if(X===void 0)continue;const Ke=X.buffer,J=X.type,W=X.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ie=ee.data,Ve=ie.stride,De=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)M(Z.location+Se,ie.meshPerAttribute);F.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Se=0;Se<Z.locationSize;Se++)x(Z.location+Se);r.bindBuffer(34962,Ke);for(let Se=0;Se<Z.locationSize;Se++)S(Z.location+Se,fe/Z.locationSize,J,ne,Ve*W,(De+fe/Z.locationSize*Se)*W)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<Z.locationSize;ie++)M(Z.location+ie,ee.meshPerAttribute);F.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<Z.locationSize;ie++)x(Z.location+ie);r.bindBuffer(34962,Ke);for(let ie=0;ie<Z.locationSize;ie++)S(Z.location+ie,fe/Z.locationSize,J,ne,fe*W,fe/Z.locationSize*ie*W)}}else if(V!==void 0){const ne=V[Q];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(Z.location,ne);break;case 3:r.vertexAttrib3fv(Z.location,ne);break;case 4:r.vertexAttrib4fv(Z.location,ne);break;default:r.vertexAttrib1fv(Z.location,ne)}}}}b()}function T(){j();for(const F in a){const U=a[F];for(const L in U){const R=U[L];for(const D in R)g(R[D].object),delete R[D];delete U[L]}delete a[F]}}function I(F){if(a[F.id]===void 0)return;const U=a[F.id];for(const L in U){const R=U[L];for(const D in R)g(R[D].object),delete R[D];delete U[L]}delete a[F.id]}function O(F){for(const U in a){const L=a[U];if(L[F.id]===void 0)continue;const R=L[F.id];for(const D in R)g(R[D].object),delete R[D];delete L[F.id]}}function j(){Y(),u=!0,c!==l&&(c=l,m(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:Y,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:b}}function c0(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function u0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),h=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),v=r.getParameter(36349),w=d>0,x=o||e.has("OES_texture_float"),M=w&&x,b=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:b}}function f0(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Bi,a=new hn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const g=f.length!==0||d||n!==0||i;return i=d,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,m){const g=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:n,w=v*4;let x=_.clippingState||null;l.value=x,x=u(g,d,w,m);for(let M=0;M!==w;++M)x[M]=t[M];_.clippingState=x,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,g){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,g!==!0||p===null){const _=m+h*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<_)&&(p=new Float32Array(_));for(let w=0,x=m;w!==h;++w,x+=4)o.copy(f[w]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function d0(r){let e=new WeakMap;function t(o,a){return a===sl?o.mapping=Zr:a===al&&(o.mapping=Jr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sl||a===al)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cm(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ad extends nd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=4,nu=[.125,.215,.35,.446,.526,.582],Hi=20,Uo=new ad,iu=new qe;let ko=null;const Vi=(1+Math.sqrt(5))/2,Pr=1/Vi,ru=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Vi,Pr),new k(0,Vi,-Pr),new k(Pr,0,Vi),new k(-Pr,0,Vi),new k(Vi,Pr,0),new k(-Vi,Pr,0)];class su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ko=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ko),e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ko=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:zs,format:qn,encoding:ir,depthBuffer:!1},i=au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h0(s)),this._blurMaterial=p0(s,e,t)}return i}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,n,i){const a=new An(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(iu),u.toneMapping=di,u.autoClear=!1;const m=new $f({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new fi(new Js,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(iu),h=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;xa(i,v*w,_>2?w:0,w,w),u.setRenderTarget(i),h&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Zr||e.mapping===Jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new fi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;xa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Uo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=ru[(i-1)%ru.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new fi(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Hi-1),h=s/g,p=isFinite(s)?1+Math.floor(u*h):Hi;p>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const _=[];let v=0;for(let S=0;S<Hi;++S){const y=S/h,T=Math.exp(-y*y/2);_.push(T),S===0?v+=T:S<p&&(v+=2*T)}for(let S=0;S<_.length;S++)_[S]=_[S]/v;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const x=this._sizeLods[i],M=3*x*(i>w-Nr?i-w+Nr:0),b=4*(this._cubeSize-x);xa(t,M,b,3*x,2*x),l.setRenderTarget(t),l.render(f,Uo)}}function h0(r){const e=[],t=[],n=[];let i=r;const s=r-Nr+1+nu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Nr?l=nu[o-r+Nr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,h=3,p=2,_=1,v=new Float32Array(h*g*m),w=new Float32Array(p*g*m),x=new Float32Array(_*g*m);for(let b=0;b<m;b++){const S=b%3*2/3-1,y=b>2?0:-1,T=[S,y,0,S+2/3,y,0,S+2/3,y+1,0,S,y,0,S+2/3,y+1,0,S,y+1,0];v.set(T,h*g*b),w.set(d,p*g*b);const I=[b,b,b,b,b,b];x.set(I,_*g*b)}const M=new ur;M.setAttribute("position",new Yn(v,h)),M.setAttribute("uv",new Yn(w,p)),M.setAttribute("faceIndex",new Yn(x,_)),e.push(M),i>Nr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function au(r,e,t){const n=new rr(r,e,t);return n.texture.mapping=Za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xa(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function p0(r,e,t){const n=new Float32Array(Hi),i=new k(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ou(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function lu(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m0(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===sl||l===al,u=l===Zr||l===Jr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new su(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new su(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function g0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(r,e,t,n){const i={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const m=f.morphAttributes;for(const g in m){const h=m[g];for(let p=0,_=h.length;p<_;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let h=0;if(m!==null){const v=m.array;h=m.version;for(let w=0,x=v.length;w<x;w+=3){const M=v[w+0],b=v[w+1],S=v[w+2];d.push(M,b,b,S,S,M)}}else{const v=g.array;h=g.version;for(let w=0,x=v.length/3-1;w<x;w+=3){const M=w+0,b=w+1,S=w+2;d.push(M,b,b,S,S,M)}}const p=new(jf(d)?td:ed)(d,1);p.version=h;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function v0(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function f(d,m,g){if(g===0)return;let h,p;if(i)h=r,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function x0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function y0(r,e){return r[0]-e[0]}function b0(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Bo(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function S0(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new vt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==h){let U=function(){Y.dispose(),s.delete(u),u.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();const w=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],y=u.morphAttributes.color||[];let T=0;w===!0&&(T=1),x===!0&&(T=2),M===!0&&(T=3);let I=u.attributes.position.count*T,O=1;I>e.maxTextureSize&&(O=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const j=new Float32Array(I*O*4*h),Y=new Jf(j,I,O,h);Y.type=Xi,Y.needsUpdate=!0;const F=T*4;for(let L=0;L<h;L++){const R=b[L],D=S[L],N=y[L],V=I*O*4*L;for(let Q=0;Q<R.count;Q++){const Z=Q*F;w===!0&&(o.fromBufferAttribute(R,Q),R.normalized===!0&&Bo(o,R),j[V+Z+0]=o.x,j[V+Z+1]=o.y,j[V+Z+2]=o.z,j[V+Z+3]=0),x===!0&&(o.fromBufferAttribute(D,Q),D.normalized===!0&&Bo(o,D),j[V+Z+4]=o.x,j[V+Z+5]=o.y,j[V+Z+6]=o.z,j[V+Z+7]=0),M===!0&&(o.fromBufferAttribute(N,Q),N.normalized===!0&&Bo(o,N),j[V+Z+8]=o.x,j[V+Z+9]=o.y,j[V+Z+10]=o.z,j[V+Z+11]=N.itemSize===4?o.w:1)}}p={count:h,texture:Y,size:new Ge(I,O)},s.set(u,p),u.addEventListener("dispose",U)}let _=0;for(let w=0;w<m.length;w++)_+=m[w];const v=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",v),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==g){h=[];for(let x=0;x<g;x++)h[x]=[x,0];n[u.id]=h}for(let x=0;x<g;x++){const M=h[x];M[0]=x,M[1]=m[x]}h.sort(b0);for(let x=0;x<8;x++)x<g&&h[x][1]?(a[x][0]=h[x][0],a[x][1]=h[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(y0);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const M=a[x],b=M[0],S=M[1];b!==Number.MAX_SAFE_INTEGER&&S?(p&&u.getAttribute("morphTarget"+x)!==p[b]&&u.setAttribute("morphTarget"+x,p[b]),_&&u.getAttribute("morphNormal"+x)!==_[b]&&u.setAttribute("morphNormal"+x,_[b]),i[x]=S,v+=S):(p&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),_&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const w=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function M0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const od=new vn,ld=new Jf,cd=new dm,ud=new id,cu=[],uu=[],fu=new Float32Array(16),du=new Float32Array(9),hu=new Float32Array(4);function cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=cu[i];if(s===void 0&&(s=new Float32Array(i),cu[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function eo(r,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function w0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function T0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Gt(t,e)}}function E0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Gt(t,e)}}function A0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Gt(t,e)}}function C0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;hu.set(n),r.uniformMatrix2fv(this.addr,!1,hu),Gt(t,n)}}function L0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;du.set(n),r.uniformMatrix3fv(this.addr,!1,du),Gt(t,n)}}function R0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;fu.set(n),r.uniformMatrix4fv(this.addr,!1,fu),Gt(t,n)}}function D0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function P0(r,e){const t=this.cache;Vt(t,e)||(r.uniform2iv(this.addr,e),Gt(t,e))}function I0(r,e){const t=this.cache;Vt(t,e)||(r.uniform3iv(this.addr,e),Gt(t,e))}function O0(r,e){const t=this.cache;Vt(t,e)||(r.uniform4iv(this.addr,e),Gt(t,e))}function F0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function N0(r,e){const t=this.cache;Vt(t,e)||(r.uniform2uiv(this.addr,e),Gt(t,e))}function z0(r,e){const t=this.cache;Vt(t,e)||(r.uniform3uiv(this.addr,e),Gt(t,e))}function U0(r,e){const t=this.cache;Vt(t,e)||(r.uniform4uiv(this.addr,e),Gt(t,e))}function k0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||od,i)}function B0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cd,i)}function V0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ud,i)}function G0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ld,i)}function H0(r){switch(r){case 5126:return w0;case 35664:return T0;case 35665:return E0;case 35666:return A0;case 35674:return C0;case 35675:return L0;case 35676:return R0;case 5124:case 35670:return D0;case 35667:case 35671:return P0;case 35668:case 35672:return I0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return N0;case 36295:return z0;case 36296:return U0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function W0(r,e){r.uniform1fv(this.addr,e)}function X0(r,e){const t=cs(e,this.size,2);r.uniform2fv(this.addr,t)}function q0(r,e){const t=cs(e,this.size,3);r.uniform3fv(this.addr,t)}function j0(r,e){const t=cs(e,this.size,4);r.uniform4fv(this.addr,t)}function Y0(r,e){const t=cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function K0(r,e){const t=cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Z0(r,e){const t=cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function J0(r,e){r.uniform1iv(this.addr,e)}function Q0(r,e){r.uniform2iv(this.addr,e)}function $0(r,e){r.uniform3iv(this.addr,e)}function ev(r,e){r.uniform4iv(this.addr,e)}function tv(r,e){r.uniform1uiv(this.addr,e)}function nv(r,e){r.uniform2uiv(this.addr,e)}function iv(r,e){r.uniform3uiv(this.addr,e)}function rv(r,e){r.uniform4uiv(this.addr,e)}function sv(r,e,t){const n=e.length,i=eo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||od,i[s])}function av(r,e,t){const n=e.length,i=eo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||cd,i[s])}function ov(r,e,t){const n=e.length,i=eo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ud,i[s])}function lv(r,e,t){const n=e.length,i=eo(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||ld,i[s])}function cv(r){switch(r){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return j0;case 35674:return Y0;case 35675:return K0;case 35676:return Z0;case 5124:case 35670:return J0;case 35667:case 35671:return Q0;case 35668:case 35672:return $0;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return ov;case 36289:case 36303:case 36311:case 36292:return lv}}class uv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=H0(t.type)}}class fv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=cv(t.type)}}class dv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function pu(r,e){r.seq.push(e),r.map[e.id]=e}function hv(r,e,t){const n=r.name,i=n.length;for(Vo.lastIndex=0;;){const s=Vo.exec(n),o=Vo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){pu(t,c===void 0?new uv(a,r,e):new fv(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new dv(a),pu(t,f)),t=f}}}class Ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);hv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function mu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let pv=0;function mv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function gv(r){switch(r){case ir:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function gu(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+mv(r.getShaderSource(e),o)}else return i}function _v(r,e){const t=gv(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vv(r,e){let t;switch(e){case Up:t="Linear";break;case kp:t="Reinhard";break;case Bp:t="OptimizedCineon";break;case Vp:t="ACESFilmic";break;case Gp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xv(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function yv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bv(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Ts(r){return r!==""}function _u(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(r){return r.replace(Sv,Mv)}function Mv(r,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return fl(t)}const wv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(r){return r.replace(Tv,fd).replace(wv,Ev)}function Ev(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),fd(r,e,t,n)}function fd(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function yu(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Av(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ws&&(e="SHADOWMAP_TYPE_VSM"),e}function Cv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Rv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case Np:e="ENVMAP_BLENDING_MIX";break;case zp:e="ENVMAP_BLENDING_ADD";break}return e}function Dv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Pv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Av(t),c=Cv(t),u=Lv(t),f=Rv(t),d=Dv(t),m=t.isWebGL2?"":xv(t),g=yv(s),h=i.createProgram();let p,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ts).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ts).join(`
`),_.length>0&&(_+=`
`)):(p=[yu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),_=[m,yu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Re.tonemapping_pars_fragment:"",t.toneMapping!==di?vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,_v("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=fl(o),o=_u(o,t),o=vu(o,t),a=fl(a),a=_u(a,t),a=vu(a,t),o=xu(o),a=xu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=v+p+o,x=v+_+a,M=mu(i,35633,w),b=mu(i,35632,x);if(i.attachShader(h,M),i.attachShader(h,b),t.index0AttributeName!==void 0?i.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(h,0,"position"),i.linkProgram(h),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(h).trim(),I=i.getShaderInfoLog(M).trim(),O=i.getShaderInfoLog(b).trim();let j=!0,Y=!0;if(i.getProgramParameter(h,35714)===!1){j=!1;const F=gu(i,M,"vertex"),U=gu(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(h,35715)+`

Program Info Log: `+T+`
`+F+`
`+U)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||O==="")&&(Y=!1);Y&&(this.diagnostics={runnable:j,programLog:T,vertexShader:{log:I,prefix:p},fragmentShader:{log:O,prefix:_}})}i.deleteShader(M),i.deleteShader(b);let S;this.getUniforms=function(){return S===void 0&&(S=new Ca(i,h)),S};let y;return this.getAttributes=function(){return y===void 0&&(y=bv(i,h)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=b,this}let Iv=0;class Ov{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Fv(e);t.set(e,n)}return t.get(e)}}class Fv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Nv(r,e,t,n,i,s,o){const a=new Qf,l=new Ov,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y,T,I,O,j){const Y=O.fog,F=j.geometry,U=y.isMeshStandardMaterial?O.environment:null,L=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),R=L&&L.mapping===Za?L.image.height:null,D=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=N!==void 0?N.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let Z,ee,ne,fe;if(D){const Ve=Gn[D];Z=Ve.vertexShader,ee=Ve.fragmentShader}else Z=y.vertexShader,ee=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),fe=l.getFragmentShaderID(y);const X=r.getRenderTarget(),Ke=y.alphaTest>0,J=y.clearcoat>0,W=y.iridescence>0;return{isWebGL2:u,shaderID:D,shaderName:y.type,vertexShader:Z,fragmentShader:ee,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:d,outputEncoding:X===null?r.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:ir,map:!!y.map,matcap:!!y.matcap,envMap:!!L,envMapMode:L&&L.mapping,envMapCubeUVHeight:R,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===lm,tangentSpaceNormalMap:y.normalMapType===om,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Je,clearcoat:J,clearcoatMap:J&&!!y.clearcoatMap,clearcoatRoughnessMap:J&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!y.clearcoatNormalMap,iridescence:W,iridescenceMap:W&&!!y.iridescenceMap,iridescenceThicknessMap:W&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Gr,alphaMap:!!y.alphaMap,alphaTest:Ke,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!F.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!Y,useFog:y.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:di,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kr,flipSided:y.side===Rn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(_(T,y),v(T,y),T.push(r.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function _(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),y.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),y.push(a.mask)}function w(y){const T=g[y.type];let I;if(T){const O=Gn[T];I=wm.clone(O.uniforms)}else I=y.uniforms;return I}function x(y,T){let I;for(let O=0,j=c.length;O<j;O++){const Y=c[O];if(Y.cacheKey===T){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new Pv(r,T,y,s),c.push(I)),I}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function b(y){l.remove(y)}function S(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:w,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:S}}function zv(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Uv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Su(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,g,h,p){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:h,group:p},r[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=h,_.group=p),e++,_}function a(f,d,m,g,h,p){const _=o(f,d,m,g,h,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,d,m,g,h,p){const _=o(f,d,m,g,h,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,d){t.length>1&&t.sort(f||Uv),n.length>1&&n.sort(d||bu),i.length>1&&i.sort(d||bu)}function u(){for(let f=e,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function kv(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new Su,r.set(n,[s])):i>=r.get(n).length?(s=new Su,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Bv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new qe};break;case"SpotLight":t={position:new k,direction:new k,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new k,halfWidth:new k,halfHeight:new k};break}return r[e.id]=t,t}}}function Vv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Gv=0;function Hv(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Wv(r,e){const t=new Bv,n=Vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new k);const s=new k,o=new Tt,a=new Tt;function l(u,f){let d=0,m=0,g=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,p=0,_=0,v=0,w=0,x=0,M=0,b=0;u.sort(Hv);const S=f!==!0?Math.PI:1;for(let T=0,I=u.length;T<I;T++){const O=u[T],j=O.color,Y=O.intensity,F=O.distance,U=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=j.r*Y*S,m+=j.g*Y*S,g+=j.b*Y*S;else if(O.isLightProbe)for(let L=0;L<9;L++)i.probe[L].addScaledVector(O.sh.coefficients[L],Y);else if(O.isDirectionalLight){const L=t.get(O);if(L.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const R=O.shadow,D=n.get(O);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,i.directionalShadow[h]=D,i.directionalShadowMap[h]=U,i.directionalShadowMatrix[h]=O.shadow.matrix,x++}i.directional[h]=L,h++}else if(O.isSpotLight){const L=t.get(O);if(L.position.setFromMatrixPosition(O.matrixWorld),L.color.copy(j).multiplyScalar(Y*S),L.distance=F,L.coneCos=Math.cos(O.angle),L.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),L.decay=O.decay,O.castShadow){const R=O.shadow,D=n.get(O);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=U,i.spotShadowMatrix[_]=O.shadow.matrix,b++}i.spot[_]=L,_++}else if(O.isRectAreaLight){const L=t.get(O);L.color.copy(j).multiplyScalar(Y),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),i.rectArea[v]=L,v++}else if(O.isPointLight){const L=t.get(O);if(L.color.copy(O.color).multiplyScalar(O.intensity*S),L.distance=O.distance,L.decay=O.decay,O.castShadow){const R=O.shadow,D=n.get(O);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,D.shadowCameraNear=R.camera.near,D.shadowCameraFar=R.camera.far,i.pointShadow[p]=D,i.pointShadowMap[p]=U,i.pointShadowMatrix[p]=O.shadow.matrix,M++}i.point[p]=L,p++}else if(O.isHemisphereLight){const L=t.get(O);L.skyColor.copy(O.color).multiplyScalar(Y*S),L.groundColor.copy(O.groundColor).multiplyScalar(Y*S),i.hemi[w]=L,w++}}v>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const y=i.hash;(y.directionalLength!==h||y.pointLength!==p||y.spotLength!==_||y.rectAreaLength!==v||y.hemiLength!==w||y.numDirectionalShadows!==x||y.numPointShadows!==M||y.numSpotShadows!==b)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=v,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=b,y.directionalLength=h,y.pointLength=p,y.spotLength=_,y.rectAreaLength=v,y.hemiLength=w,y.numDirectionalShadows=x,y.numPointShadows=M,y.numSpotShadows=b,i.version=Gv++)}function c(u,f){let d=0,m=0,g=0,h=0,p=0;const _=f.matrixWorldInverse;for(let v=0,w=u.length;v<w;v++){const x=u[v];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),d++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const M=i.rectArea[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(x.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(x.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(_),m++}else if(x.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Mu(r,e){const t=new Wv(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Xv(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new Mu(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new Mu(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class qv extends Qa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jv extends Qa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zv(r,e,t){let n=new rd;const i=new Ge,s=new Ge,o=new vt,a=new qv({depthPacking:am}),l=new jv,c={},u=t.maxTextureSize,f={0:Rn,1:Ns,2:Kr},d=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Yv,fragmentShader:Kv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ur;g.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new fi(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vf,this.render=function(x,M,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ei),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let O=0,j=x.length;O<j;O++){const Y=x[O],F=Y.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const U=F.getFrameExtents();if(i.multiply(U),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/U.x),i.x=s.x*U.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/U.y),i.y=s.y*U.y,F.mapSize.y=s.y)),F.map===null){const R=this.type!==ws?{minFilter:Wt,magFilter:Wt}:{};F.map=new rr(i.x,i.y,R),F.map.texture.name=Y.name+".shadowMap",F.camera.updateProjectionMatrix()}r.setRenderTarget(F.map),r.clear();const L=F.getViewportCount();for(let R=0;R<L;R++){const D=F.getViewport(R);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),I.viewport(o),F.updateMatrices(Y,R),n=F.getFrustum(),w(M,b,F.camera,Y,this.type)}F.isPointLightShadow!==!0&&this.type===ws&&_(F,b),F.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(S,y,T)};function _(x,M){const b=e.update(h);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new rr(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(M,null,b,d,h,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(M,null,b,m,h,null)}function v(x,M,b,S,y,T){let I=null;const O=b.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(O!==void 0?I=O:I=b.isPointLight===!0?l:a,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const j=I.uuid,Y=M.uuid;let F=c[j];F===void 0&&(F={},c[j]=F);let U=F[Y];U===void 0&&(U=I.clone(),F[Y]=U),I=U}return I.visible=M.visible,I.wireframe=M.wireframe,T===ws?I.side=M.shadowSide!==null?M.shadowSide:M.side:I.side=M.shadowSide!==null?M.shadowSide:f[M.side],I.alphaMap=M.alphaMap,I.alphaTest=M.alphaTest,I.clipShadows=M.clipShadows,I.clippingPlanes=M.clippingPlanes,I.clipIntersection=M.clipIntersection,I.displacementMap=M.displacementMap,I.displacementScale=M.displacementScale,I.displacementBias=M.displacementBias,I.wireframeLinewidth=M.wireframeLinewidth,I.linewidth=M.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(b.matrixWorld),I.nearDistance=S,I.farDistance=y),I}function w(x,M,b,S,y){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===ws)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,x.matrixWorld);const O=e.update(x),j=x.material;if(Array.isArray(j)){const Y=O.groups;for(let F=0,U=Y.length;F<U;F++){const L=Y[F],R=j[L.materialIndex];if(R&&R.visible){const D=v(x,R,S,b.near,b.far,y);r.renderBufferDirect(b,null,O,D,x,L)}}}else if(j.visible){const Y=v(x,j,S,b.near,b.far,y);r.renderBufferDirect(b,null,O,Y,x,null)}}const I=x.children;for(let O=0,j=I.length;O<j;O++)w(I[O],M,b,S,y)}}function Jv(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new vt;let se=null;const be=new vt(0,0,0,0);return{setMask:function(de){se!==de&&!P&&(r.colorMask(de,de,de,de),se=de)},setLocked:function(de){P=de},setClear:function(de,we,te,Te,ze){ze===!0&&(de*=Te,we*=Te,te*=Te),ae.set(de,we,te,Te),be.equals(ae)===!1&&(r.clearColor(de,we,te,Te),be.copy(ae))},reset:function(){P=!1,se=null,be.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,se=null,be=null;return{setTest:function(de){de?fe(2929):X(2929)},setMask:function(de){ae!==de&&!P&&(r.depthMask(de),ae=de)},setFunc:function(de){if(se!==de){if(de)switch(de){case Lp:r.depthFunc(512);break;case Rp:r.depthFunc(519);break;case Dp:r.depthFunc(513);break;case rl:r.depthFunc(515);break;case Pp:r.depthFunc(514);break;case Ip:r.depthFunc(518);break;case Op:r.depthFunc(516);break;case Fp:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);se=de}},setLocked:function(de){P=de},setClear:function(de){be!==de&&(r.clearDepth(de),be=de)},reset:function(){P=!1,ae=null,se=null,be=null}}}function o(){let P=!1,ae=null,se=null,be=null,de=null,we=null,te=null,Te=null,ze=null;return{setTest:function(Ue){P||(Ue?fe(2960):X(2960))},setMask:function(Ue){ae!==Ue&&!P&&(r.stencilMask(Ue),ae=Ue)},setFunc:function(Ue,Ut,zn){(se!==Ue||be!==Ut||de!==zn)&&(r.stencilFunc(Ue,Ut,zn),se=Ue,be=Ut,de=zn)},setOp:function(Ue,Ut,zn){(we!==Ue||te!==Ut||Te!==zn)&&(r.stencilOp(Ue,Ut,zn),we=Ue,te=Ut,Te=zn)},setLocked:function(Ue){P=Ue},setClear:function(Ue){ze!==Ue&&(r.clearStencil(Ue),ze=Ue)},reset:function(){P=!1,ae=null,se=null,be=null,de=null,we=null,te=null,Te=null,ze=null}}}const a=new i,l=new s,c=new o;let u={},f={},d=new WeakMap,m=[],g=null,h=!1,p=null,_=null,v=null,w=null,x=null,M=null,b=null,S=!1,y=null,T=null,I=null,O=null,j=null;const Y=r.getParameter(35661);let F=!1,U=0;const L=r.getParameter(7938);L.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(L)[1]),F=U>=1):L.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),F=U>=2);let R=null,D={};const N=r.getParameter(3088),V=r.getParameter(2978),Q=new vt().fromArray(N),Z=new vt().fromArray(V);function ee(P,ae,se){const be=new Uint8Array(4),de=r.createTexture();r.bindTexture(P,de),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let we=0;we<se;we++)r.texImage2D(ae+we,0,6408,1,1,0,6408,5121,be);return de}const ne={};ne[3553]=ee(3553,3553,1),ne[34067]=ee(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(2929),l.setFunc(rl),At(!1),Ht(dc),fe(2884),De(Ei);function fe(P){u[P]!==!0&&(r.enable(P),u[P]=!0)}function X(P){u[P]!==!1&&(r.disable(P),u[P]=!1)}function Ke(P,ae){return f[P]!==ae?(r.bindFramebuffer(P,ae),f[P]=ae,n&&(P===36009&&(f[36160]=ae),P===36160&&(f[36009]=ae)),!0):!1}function J(P,ae){let se=m,be=!1;if(P)if(se=d.get(ae),se===void 0&&(se=[],d.set(ae,se)),P.isWebGLMultipleRenderTargets){const de=P.texture;if(se.length!==de.length||se[0]!==36064){for(let we=0,te=de.length;we<te;we++)se[we]=36064+we;se.length=de.length,be=!0}}else se[0]!==36064&&(se[0]=36064,be=!0);else se[0]!==1029&&(se[0]=1029,be=!0);be&&(t.isWebGL2?r.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function W(P){return g!==P?(r.useProgram(P),g=P,!0):!1}const ie={[Fr]:32774,[vp]:32778,[xp]:32779};if(n)ie[gc]=32775,ie[_c]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ie[gc]=P.MIN_EXT,ie[_c]=P.MAX_EXT)}const Ve={[yp]:0,[bp]:1,[Sp]:768,[Gf]:770,[Cp]:776,[Ep]:774,[wp]:772,[Mp]:769,[Hf]:771,[Ap]:775,[Tp]:773};function De(P,ae,se,be,de,we,te,Te){if(P===Ei){h===!0&&(X(3042),h=!1);return}if(h===!1&&(fe(3042),h=!0),P!==_p){if(P!==p||Te!==S){if((_!==Fr||x!==Fr)&&(r.blendEquation(32774),_=Fr,x=Fr),Te)switch(P){case Gr:r.blendFuncSeparate(1,771,1,771);break;case hc:r.blendFunc(1,1);break;case pc:r.blendFuncSeparate(0,769,0,1);break;case mc:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gr:r.blendFuncSeparate(770,771,1,771);break;case hc:r.blendFunc(770,1);break;case pc:r.blendFuncSeparate(0,769,0,1);break;case mc:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,w=null,M=null,b=null,p=P,S=Te}return}de=de||ae,we=we||se,te=te||be,(ae!==_||de!==x)&&(r.blendEquationSeparate(ie[ae],ie[de]),_=ae,x=de),(se!==v||be!==w||we!==M||te!==b)&&(r.blendFuncSeparate(Ve[se],Ve[be],Ve[we],Ve[te]),v=se,w=be,M=we,b=te),p=P,S=null}function Se(P,ae){P.side===Kr?X(2884):fe(2884);let se=P.side===Rn;ae&&(se=!se),At(se),P.blending===Gr&&P.transparent===!1?De(Ei):De(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const be=P.stencilWrite;c.setTest(be),be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Nn(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?fe(32926):X(32926)}function At(P){y!==P&&(P?r.frontFace(2304):r.frontFace(2305),y=P)}function Ht(P){P!==hp?(fe(2884),P!==T&&(P===dc?r.cullFace(1029):P===pp?r.cullFace(1028):r.cullFace(1032))):X(2884),T=P}function Jt(P){P!==I&&(F&&r.lineWidth(P),I=P)}function Nn(P,ae,se){P?(fe(32823),(O!==ae||j!==se)&&(r.polygonOffset(ae,se),O=ae,j=se)):X(32823)}function bt(P){P?fe(3089):X(3089)}function He(P){P===void 0&&(P=33984+Y-1),R!==P&&(r.activeTexture(P),R=P)}function Qn(P,ae){R===null&&He();let se=D[R];se===void 0&&(se={type:void 0,texture:void 0},D[R]=se),(se.type!==P||se.texture!==ae)&&(r.bindTexture(P,ae||ne[P]),se.type=P,se.texture=ae)}function $n(){const P=D[R];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function C(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(P){Q.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function he(P){Z.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function ue(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},R=null,D={},f={},d=new WeakMap,m=[],g=null,h=!1,p=null,_=null,v=null,w=null,x=null,M=null,b=null,S=!1,y=null,T=null,I=null,O=null,j=null,Q.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:fe,disable:X,bindFramebuffer:Ke,drawBuffers:J,useProgram:W,setBlending:De,setMaterial:Se,setFlipSided:At,setCullFace:Ht,setLineWidth:Jt,setPolygonOffset:Nn,setScissorTest:bt,activeTexture:He,bindTexture:Qn,unbindTexture:$n,compressedTexImage2D:C,texImage2D:Ee,texImage3D:H,texStorage2D:re,texStorage3D:ce,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:$,scissor:ve,viewport:he,reset:ue}}function Qv(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return _?new OffscreenCanvas(C,E):Us("canvas")}function w(C,E,q,$){let re=1;if((C.width>$||C.height>$)&&(re=$/Math.max(C.width,C.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ce=E?ul:Math.floor,Ee=ce(re*C.width),H=ce(re*C.height);h===void 0&&(h=v(Ee,H));const ve=q?v(Ee,H):h;return ve.width=Ee,ve.height=H,ve.getContext("2d").drawImage(C,0,0,Ee,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ee+"x"+H+")."),ve}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return Wc(C.width)&&Wc(C.height)}function M(C){return a?!1:C.wrapS!==Cn||C.wrapT!==Cn||C.minFilter!==Wt&&C.minFilter!==dn}function b(C,E){return C.generateMipmaps&&E&&C.minFilter!==Wt&&C.minFilter!==dn}function S(C){r.generateMipmap(C)}function y(C,E,q,$,re=!1){if(a===!1)return E;if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce=E;return E===6403&&(q===5126&&(ce=33326),q===5131&&(ce=33325),q===5121&&(ce=33321)),E===33319&&(q===5126&&(ce=33328),q===5131&&(ce=33327),q===5121&&(ce=33323)),E===6408&&(q===5126&&(ce=34836),q===5131&&(ce=34842),q===5121&&(ce=$===Je&&re===!1?35907:32856),q===32819&&(ce=32854),q===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function T(C,E,q){return b(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Wt&&C.minFilter!==dn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function I(C){return C===Wt||C===vc||C===xc?9728:9729}function O(C){const E=C.target;E.removeEventListener("dispose",O),Y(E),E.isVideoTexture&&g.delete(E)}function j(C){const E=C.target;E.removeEventListener("dispose",j),U(E)}function Y(C){const E=n.get(C);if(E.__webglInit===void 0)return;const q=C.source,$=p.get(q);if($){const re=$[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(C),Object.keys($).length===0&&p.delete(q)}n.remove(C)}function F(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const q=C.source,$=p.get(q);delete $[E.__cacheKey],o.memory.textures--}function U(C){const E=C.texture,q=n.get(C),$=n.get(E);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)r.deleteFramebuffer(q.__webglFramebuffer[re]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[re]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,ce=E.length;re<ce;re++){const Ee=n.get(E[re]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(E[re])}n.remove(E),n.remove(C)}let L=0;function R(){L=0}function D(){const C=L;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),L+=1,C}function N(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.encoding),E.join()}function V(C,E){const q=n.get(C);if(C.isVideoTexture&&Qn(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,C,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,q.__webglTexture)}function Q(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){J(q,C,E);return}t.activeTexture(33984+E),t.bindTexture(35866,q.__webglTexture)}function Z(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){J(q,C,E);return}t.activeTexture(33984+E),t.bindTexture(32879,q.__webglTexture)}function ee(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){W(q,C,E);return}t.activeTexture(33984+E),t.bindTexture(34067,q.__webglTexture)}const ne={[ol]:10497,[Cn]:33071,[ll]:33648},fe={[Wt]:9728,[vc]:9984,[xc]:9986,[dn]:9729,[Hp]:9985,[Ja]:9987};function X(C,E,q){if(q?(r.texParameteri(C,10242,ne[E.wrapS]),r.texParameteri(C,10243,ne[E.wrapT]),(C===32879||C===35866)&&r.texParameteri(C,32882,ne[E.wrapR]),r.texParameteri(C,10240,fe[E.magFilter]),r.texParameteri(C,10241,fe[E.minFilter])):(r.texParameteri(C,10242,33071),r.texParameteri(C,10243,33071),(C===32879||C===35866)&&r.texParameteri(C,32882,33071),(E.wrapS!==Cn||E.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(C,10240,I(E.magFilter)),r.texParameteri(C,10241,I(E.minFilter)),E.minFilter!==Wt&&E.minFilter!==dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(E.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===zs&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(r.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Ke(C,E){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",O));const $=E.source;let re=p.get($);re===void 0&&(re={},p.set($,re));const ce=N(E);if(ce!==C.__cacheKey){re[ce]===void 0&&(re[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[ce].usedTimes++;const Ee=re[C.__cacheKey];Ee!==void 0&&(re[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&F(E)),C.__cacheKey=ce,C.__webglTexture=re[ce].texture}return q}function J(C,E,q){let $=3553;E.isDataArrayTexture&&($=35866),E.isData3DTexture&&($=32879);const re=Ke(C,E),ce=E.source;if(t.activeTexture(33984+q),t.bindTexture($,C.__webglTexture),ce.version!==ce.__currentVersion||re===!0){r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const Ee=M(E)&&x(E.image)===!1;let H=w(E.image,Ee,!1,u);H=$n(E,H);const ve=x(H)||a,he=s.convert(E.format,E.encoding);let ue=s.convert(E.type),P=y(E.internalFormat,he,ue,E.encoding,E.isVideoTexture);X($,E,ve);let ae;const se=E.mipmaps,be=a&&E.isVideoTexture!==!0,de=ce.__currentVersion===void 0||re===!0,we=T(E,H,ve);if(E.isDepthTexture)P=6402,a?E.type===Xi?P=36012:E.type===Wi?P=33190:E.type===Hr?P=35056:P=33189:E.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ki&&P===6402&&E.type!==qf&&E.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Wi,ue=s.convert(E.type)),E.format===Qr&&P===6402&&(P=34041,E.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Hr,ue=s.convert(E.type))),de&&(be?t.texStorage2D(3553,1,P,H.width,H.height):t.texImage2D(3553,0,P,H.width,H.height,0,he,ue,null));else if(E.isDataTexture)if(se.length>0&&ve){be&&de&&t.texStorage2D(3553,we,P,se[0].width,se[0].height);for(let te=0,Te=se.length;te<Te;te++)ae=se[te],be?t.texSubImage2D(3553,te,0,0,ae.width,ae.height,he,ue,ae.data):t.texImage2D(3553,te,P,ae.width,ae.height,0,he,ue,ae.data);E.generateMipmaps=!1}else be?(de&&t.texStorage2D(3553,we,P,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,he,ue,H.data)):t.texImage2D(3553,0,P,H.width,H.height,0,he,ue,H.data);else if(E.isCompressedTexture){be&&de&&t.texStorage2D(3553,we,P,se[0].width,se[0].height);for(let te=0,Te=se.length;te<Te;te++)ae=se[te],E.format!==qn?he!==null?be?t.compressedTexSubImage2D(3553,te,0,0,ae.width,ae.height,he,ae.data):t.compressedTexImage2D(3553,te,P,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(3553,te,0,0,ae.width,ae.height,he,ue,ae.data):t.texImage2D(3553,te,P,ae.width,ae.height,0,he,ue,ae.data)}else if(E.isDataArrayTexture)be?(de&&t.texStorage3D(35866,we,P,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,he,ue,H.data)):t.texImage3D(35866,0,P,H.width,H.height,H.depth,0,he,ue,H.data);else if(E.isData3DTexture)be?(de&&t.texStorage3D(32879,we,P,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,he,ue,H.data)):t.texImage3D(32879,0,P,H.width,H.height,H.depth,0,he,ue,H.data);else if(E.isFramebufferTexture){if(de)if(be)t.texStorage2D(3553,we,P,H.width,H.height);else{let te=H.width,Te=H.height;for(let ze=0;ze<we;ze++)t.texImage2D(3553,ze,P,te,Te,0,he,ue,null),te>>=1,Te>>=1}}else if(se.length>0&&ve){be&&de&&t.texStorage2D(3553,we,P,se[0].width,se[0].height);for(let te=0,Te=se.length;te<Te;te++)ae=se[te],be?t.texSubImage2D(3553,te,0,0,he,ue,ae):t.texImage2D(3553,te,P,he,ue,ae);E.generateMipmaps=!1}else be?(de&&t.texStorage2D(3553,we,P,H.width,H.height),t.texSubImage2D(3553,0,0,0,he,ue,H)):t.texImage2D(3553,0,P,he,ue,H);b(E,ve)&&S($),ce.__currentVersion=ce.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function W(C,E,q){if(E.image.length!==6)return;const $=Ke(C,E),re=E.source;if(t.activeTexture(33984+q),t.bindTexture(34067,C.__webglTexture),re.version!==re.__currentVersion||$===!0){r.pixelStorei(37440,E.flipY),r.pixelStorei(37441,E.premultiplyAlpha),r.pixelStorei(3317,E.unpackAlignment),r.pixelStorei(37443,0);const ce=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,H=[];for(let te=0;te<6;te++)!ce&&!Ee?H[te]=w(E.image[te],!1,!0,c):H[te]=Ee?E.image[te].image:E.image[te],H[te]=$n(E,H[te]);const ve=H[0],he=x(ve)||a,ue=s.convert(E.format,E.encoding),P=s.convert(E.type),ae=y(E.internalFormat,ue,P,E.encoding),se=a&&E.isVideoTexture!==!0,be=re.__currentVersion===void 0||$===!0;let de=T(E,ve,he);X(34067,E,he);let we;if(ce){se&&be&&t.texStorage2D(34067,de,ae,ve.width,ve.height);for(let te=0;te<6;te++){we=H[te].mipmaps;for(let Te=0;Te<we.length;Te++){const ze=we[Te];E.format!==qn?ue!==null?se?t.compressedTexSubImage2D(34069+te,Te,0,0,ze.width,ze.height,ue,ze.data):t.compressedTexImage2D(34069+te,Te,ae,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?t.texSubImage2D(34069+te,Te,0,0,ze.width,ze.height,ue,P,ze.data):t.texImage2D(34069+te,Te,ae,ze.width,ze.height,0,ue,P,ze.data)}}}else{we=E.mipmaps,se&&be&&(we.length>0&&de++,t.texStorage2D(34067,de,ae,H[0].width,H[0].height));for(let te=0;te<6;te++)if(Ee){se?t.texSubImage2D(34069+te,0,0,0,H[te].width,H[te].height,ue,P,H[te].data):t.texImage2D(34069+te,0,ae,H[te].width,H[te].height,0,ue,P,H[te].data);for(let Te=0;Te<we.length;Te++){const Ue=we[Te].image[te].image;se?t.texSubImage2D(34069+te,Te+1,0,0,Ue.width,Ue.height,ue,P,Ue.data):t.texImage2D(34069+te,Te+1,ae,Ue.width,Ue.height,0,ue,P,Ue.data)}}else{se?t.texSubImage2D(34069+te,0,0,0,ue,P,H[te]):t.texImage2D(34069+te,0,ae,ue,P,H[te]);for(let Te=0;Te<we.length;Te++){const ze=we[Te];se?t.texSubImage2D(34069+te,Te+1,0,0,ue,P,ze.image[te]):t.texImage2D(34069+te,Te+1,ae,ue,P,ze.image[te])}}}b(E,he)&&S(34067),re.__currentVersion=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ie(C,E,q,$,re){const ce=s.convert(q.format,q.encoding),Ee=s.convert(q.type),H=y(q.internalFormat,ce,Ee,q.encoding);n.get(E).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,H,E.width,E.height,E.depth,0,ce,Ee,null):t.texImage2D(re,0,H,E.width,E.height,0,ce,Ee,null)),t.bindFramebuffer(36160,C),He(E)?d.framebufferTexture2DMultisampleEXT(36160,$,re,n.get(q).__webglTexture,0,bt(E)):r.framebufferTexture2D(36160,$,re,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(C,E,q){if(r.bindRenderbuffer(36161,C),E.depthBuffer&&!E.stencilBuffer){let $=33189;if(q||He(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===Xi?$=36012:re.type===Wi&&($=33190));const ce=bt(E);He(E)?d.renderbufferStorageMultisampleEXT(36161,ce,$,E.width,E.height):r.renderbufferStorageMultisample(36161,ce,$,E.width,E.height)}else r.renderbufferStorage(36161,$,E.width,E.height);r.framebufferRenderbuffer(36160,36096,36161,C)}else if(E.depthBuffer&&E.stencilBuffer){const $=bt(E);q&&He(E)===!1?r.renderbufferStorageMultisample(36161,$,35056,E.width,E.height):He(E)?d.renderbufferStorageMultisampleEXT(36161,$,35056,E.width,E.height):r.renderbufferStorage(36161,34041,E.width,E.height),r.framebufferRenderbuffer(36160,33306,36161,C)}else{const $=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<$.length;re++){const ce=$[re],Ee=s.convert(ce.format,ce.encoding),H=s.convert(ce.type),ve=y(ce.internalFormat,Ee,H,ce.encoding),he=bt(E);q&&He(E)===!1?r.renderbufferStorageMultisample(36161,he,ve,E.width,E.height):He(E)?d.renderbufferStorageMultisampleEXT(36161,he,ve,E.width,E.height):r.renderbufferStorage(36161,ve,E.width,E.height)}}r.bindRenderbuffer(36161,null)}function De(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const $=n.get(E.depthTexture).__webglTexture,re=bt(E);if(E.depthTexture.format===Ki)He(E)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,re):r.framebufferTexture2D(36160,36096,3553,$,0);else if(E.depthTexture.format===Qr)He(E)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,re):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function Se(C){const E=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");De(E.__webglFramebuffer,C)}else if(q){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]=r.createRenderbuffer(),Ve(E.__webglDepthbuffer[$],C,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),Ve(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function At(C,E,q){const $=n.get(C);E!==void 0&&ie($.__webglFramebuffer,C,C.texture,36064,3553),q!==void 0&&Se(C)}function Ht(C){const E=C.texture,q=n.get(C),$=n.get(E);C.addEventListener("dispose",j),C.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=E.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,ce=C.isWebGLMultipleRenderTargets===!0,Ee=x(C)||a;if(re){q.__webglFramebuffer=[];for(let H=0;H<6;H++)q.__webglFramebuffer[H]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const H=C.texture;for(let ve=0,he=H.length;ve<he;ve++){const ue=n.get(H[ve]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&He(C)===!1){const H=ce?E:[E];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let ve=0;ve<H.length;ve++){const he=H[ve];q.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(36161,q.__webglColorRenderbuffer[ve]);const ue=s.convert(he.format,he.encoding),P=s.convert(he.type),ae=y(he.internalFormat,ue,P,he.encoding),se=bt(C);r.renderbufferStorageMultisample(36161,se,ae,C.width,C.height),r.framebufferRenderbuffer(36160,36064+ve,36161,q.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(36161,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,$.__webglTexture),X(34067,E,Ee);for(let H=0;H<6;H++)ie(q.__webglFramebuffer[H],C,E,36064,34069+H);b(E,Ee)&&S(34067),t.unbindTexture()}else if(ce){const H=C.texture;for(let ve=0,he=H.length;ve<he;ve++){const ue=H[ve],P=n.get(ue);t.bindTexture(3553,P.__webglTexture),X(3553,ue,Ee),ie(q.__webglFramebuffer,C,ue,36064+ve,3553),b(ue,Ee)&&S(3553)}t.unbindTexture()}else{let H=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?H=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(H,$.__webglTexture),X(H,E,Ee),ie(q.__webglFramebuffer,C,E,36064,H),b(E,Ee)&&S(H),t.unbindTexture()}C.depthBuffer&&Se(C)}function Jt(C){const E=x(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let $=0,re=q.length;$<re;$++){const ce=q[$];if(b(ce,E)){const Ee=C.isWebGLCubeRenderTarget?34067:3553,H=n.get(ce).__webglTexture;t.bindTexture(Ee,H),S(Ee),t.unbindTexture()}}}function Nn(C){if(a&&C.samples>0&&He(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,$=C.height;let re=16384;const ce=[],Ee=C.stencilBuffer?33306:36096,H=n.get(C),ve=C.isWebGLMultipleRenderTargets===!0;if(ve)for(let he=0;he<E.length;he++)t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,H.__webglFramebuffer),r.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,H.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,H.__webglFramebuffer);for(let he=0;he<E.length;he++){ce.push(36064+he),C.depthBuffer&&ce.push(Ee);const ue=H.__ignoreDepthValues!==void 0?H.__ignoreDepthValues:!1;if(ue===!1&&(C.depthBuffer&&(re|=256),C.stencilBuffer&&(re|=1024)),ve&&r.framebufferRenderbuffer(36008,36064,36161,H.__webglColorRenderbuffer[he]),ue===!0&&(r.invalidateFramebuffer(36008,[Ee]),r.invalidateFramebuffer(36009,[Ee])),ve){const P=n.get(E[he]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,P,0)}r.blitFramebuffer(0,0,q,$,0,0,q,$,re,9728),m&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ve)for(let he=0;he<E.length;he++){t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+he,36161,H.__webglColorRenderbuffer[he]);const ue=n.get(E[he]).__webglTexture;t.bindFramebuffer(36160,H.__webglFramebuffer),r.framebufferTexture2D(36009,36064+he,3553,ue,0)}t.bindFramebuffer(36009,H.__webglMultisampledFramebuffer)}}function bt(C){return Math.min(f,C.samples)}function He(C){const E=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qn(C){const E=o.render.frame;g.get(C)!==E&&(g.set(C,E),C.update())}function $n(C,E){const q=C.encoding,$=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===cl||q!==ir&&(q===Je?a===!1?e.has("EXT_sRGB")===!0&&$===qn?(C.format=cl,C.minFilter=dn,C.generateMipmaps=!1):E=Kf.sRGBToLinear(E):($!==qn||re!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),E}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=V,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=At,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Nn,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=He}function $v(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===nr)return 5121;if(s===jp)return 32819;if(s===Yp)return 32820;if(s===Wp)return 5120;if(s===Xp)return 5122;if(s===qf)return 5123;if(s===qp)return 5124;if(s===Wi)return 5125;if(s===Xi)return 5126;if(s===zs)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Kp)return 6406;if(s===qn)return 6408;if(s===Jp)return 6409;if(s===Qp)return 6410;if(s===Ki)return 6402;if(s===Qr)return 34041;if(s===$p)return 6403;if(s===Zp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===cl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===em)return 36244;if(s===tm)return 33319;if(s===nm)return 33320;if(s===im)return 36249;if(s===co||s===uo||s===fo||s===ho)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===co)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===co)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ho)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yc||s===bc||s===Sc||s===Mc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wc||s===Tc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wc)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Tc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ec||s===Ac||s===Cc||s===Lc||s===Rc||s===Dc||s===Pc||s===Ic||s===Oc||s===Fc||s===Nc||s===zc||s===Uc||s===kc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ec)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ac)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Cc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Rc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ic)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kc)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Bc)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Hr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ex extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ya extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tx={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n);if(c.joints[h.jointName]===void 0){const v=new ya;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[h.jointName]=v,c.add(v)}const _=c.joints[h.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class nx extends vn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:Ki,u!==Ki&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ki&&(n=Wi),n===void 0&&u===Qr&&(n=Hr),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1}}class ix extends ls{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const g=t.getContextAttributes();let h=null,p=null;const _=[],v=[],w=new An;w.layers.enable(1),w.viewport=new vt;const x=new An;x.layers.enable(2),x.viewport=new vt;const M=[w,x],b=new ex;b.layers.enable(1),b.layers.enable(2);let S=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=_[N];return V===void 0&&(V=new Go,_[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=_[N];return V===void 0&&(V=new Go,_[N]=V),V.getGripSpace()},this.getHand=function(N){let V=_[N];return V===void 0&&(V=new Go,_[N]=V),V.getHandSpace()};function T(N){const V=v.indexOf(N.inputSource);if(V===-1)return;const Q=_[V];Q!==void 0&&Q.dispatchEvent({type:N.type,data:N.inputSource})}function I(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",O);for(let N=0;N<_.length;N++){const V=v[N];V!==null&&(v[N]=null,_[N].disconnect(V))}S=null,y=null,e.setRenderTarget(h),d=null,f=null,u=null,i=null,p=null,D.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(h=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",I),i.addEventListener("inputsourceschange",O),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:d}),p=new rr(d.framebufferWidth,d.framebufferHeight,{format:qn,type:nr,encoding:e.outputEncoding})}else{let V=null,Q=null,Z=null;g.depth&&(Z=g.stencil?35056:33190,V=g.stencil?Qr:Ki,Q=g.stencil?Hr:Wi);const ee={colorFormat:32856,depthFormat:Z,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ee),i.updateRenderState({layers:[f]}),p=new rr(f.textureWidth,f.textureHeight,{format:qn,type:nr,depthTexture:new nx(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ne=e.properties.get(p);ne.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),D.setContext(i),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(N){for(let V=0;V<N.removed.length;V++){const Q=N.removed[V],Z=v.indexOf(Q);Z>=0&&(v[Z]=null,_[Z].dispatchEvent({type:"disconnected",data:Q}))}for(let V=0;V<N.added.length;V++){const Q=N.added[V];let Z=v.indexOf(Q);if(Z===-1){for(let ne=0;ne<_.length;ne++)if(ne>=v.length){v.push(Q),Z=ne;break}else if(v[ne]===null){v[ne]=Q,Z=ne;break}if(Z===-1)break}const ee=_[Z];ee&&ee.dispatchEvent({type:"connected",data:Q})}}const j=new k,Y=new k;function F(N,V,Q){j.setFromMatrixPosition(V.matrixWorld),Y.setFromMatrixPosition(Q.matrixWorld);const Z=j.distanceTo(Y),ee=V.projectionMatrix.elements,ne=Q.projectionMatrix.elements,fe=ee[14]/(ee[10]-1),X=ee[14]/(ee[10]+1),Ke=(ee[9]+1)/ee[5],J=(ee[9]-1)/ee[5],W=(ee[8]-1)/ee[0],ie=(ne[8]+1)/ne[0],Ve=fe*W,De=fe*ie,Se=Z/(-W+ie),At=Se*-W;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(At),N.translateZ(Se),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ht=fe+Se,Jt=X+Se,Nn=Ve-At,bt=De+(Z-At),He=Ke*X/Jt*Ht,Qn=J*X/Jt*Ht;N.projectionMatrix.makePerspective(Nn,bt,He,Qn,Ht,Jt)}function U(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;b.near=x.near=w.near=N.near,b.far=x.far=w.far=N.far,(S!==b.near||y!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),S=b.near,y=b.far);const V=N.parent,Q=b.cameras;U(b,V);for(let ee=0;ee<Q.length;ee++)U(Q[ee],V);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),N.position.copy(b.position),N.quaternion.copy(b.quaternion),N.scale.copy(b.scale),N.matrix.copy(b.matrix),N.matrixWorld.copy(b.matrixWorld);const Z=N.children;for(let ee=0,ne=Z.length;ee<ne;ee++)Z[ee].updateMatrixWorld(!0);Q.length===2?F(b,w,x):b.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(N){f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)};let L=null;function R(N,V){if(c=V.getViewerPose(l||o),m=V,c!==null){const Q=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Z=!1;Q.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let ee=0;ee<Q.length;ee++){const ne=Q[ee];let fe=null;if(d!==null)fe=d.getViewport(ne);else{const Ke=u.getViewSubImage(f,ne);fe=Ke.viewport,ee===0&&(e.setRenderTargetTextures(p,Ke.colorTexture,f.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(p))}let X=M[ee];X===void 0&&(X=new An,X.layers.enable(ee),X.viewport=new vt,M[ee]=X),X.matrix.fromArray(ne.transform.matrix),X.projectionMatrix.fromArray(ne.projectionMatrix),X.viewport.set(fe.x,fe.y,fe.width,fe.height),ee===0&&b.matrix.copy(X.matrix),Z===!0&&b.cameras.push(X)}}for(let Q=0;Q<_.length;Q++){const Z=v[Q],ee=_[Q];Z!==null&&ee!==void 0&&ee.update(Z,V,l||o)}L&&L(N,V),m=null}const D=new sd;D.setAnimationLoop(R),this.setAnimationLoop=function(N){L=N},this.dispose=function(){}}}function rx(r,e){function t(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,_,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(h,p):p.isMeshToonMaterial?(i(h,p),u(h,p)):p.isMeshPhongMaterial?(i(h,p),c(h,p)):p.isMeshStandardMaterial?(i(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,w)):p.isMeshMatcapMaterial?(i(h,p),m(h,p)):p.isMeshDepthMaterial?i(h,p):p.isMeshDistanceMaterial?(i(h,p),g(h,p)):p.isMeshNormalMaterial?i(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,_,v):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===Rn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===Rn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(h.envMap.value=_,h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const x=r.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),h.uv2Transform.value.copy(w.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,_,v){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*_,h.scale.value=v*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),h.uvTransform.value.copy(w.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,_){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Rn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function sx(){const r=Us("canvas");return r.style.display="block",r}function dd(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:sx(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ir,this.physicallyCorrectLights=!1,this.toneMapping=di,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let p=!1,_=0,v=0,w=null,x=-1,M=null;const b=new vt,S=new vt;let y=null,T=e.width,I=e.height,O=1,j=null,Y=null;const F=new vt(0,0,T,I),U=new vt(0,0,T,I);let L=!1;const R=new rd;let D=!1,N=!1,V=null;const Q=new Tt,Z=new Ge,ee=new k,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return w===null?O:1}let X=t;function Ke(A,z){for(let G=0;G<A.length;G++){const B=A[G],K=e.getContext(B,z);if(K!==null)return K}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",se,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&z.shift(),X=Ke(z,A),X===null)throw Ke(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,W,ie,Ve,De,Se,At,Ht,Jt,Nn,bt,He,Qn,$n,C,E,q,$,re,ce,Ee,H,ve;function he(){J=new g0(X),W=new u0(X,J,r),J.init(W),H=new $v(X,J,W),ie=new Jv(X,J,W),Ve=new x0,De=new zv,Se=new Qv(X,J,ie,De,W,H,Ve),At=new d0(h),Ht=new m0(h),Jt=new Dm(X,W),ve=new l0(X,J,Jt,W),Nn=new _0(X,Jt,Ve,ve),bt=new M0(X,Nn,Jt,Ve),re=new S0(X,W,Se),E=new f0(De),He=new Nv(h,At,Ht,J,W,ve,E),Qn=new rx(h,De),$n=new kv,C=new Xv(J,W),$=new o0(h,At,ie,bt,u,o),q=new Zv(h,bt,W),ce=new c0(X,J,Ve,W),Ee=new v0(X,J,Ve,W),Ve.programs=He.programs,h.capabilities=W,h.extensions=J,h.properties=De,h.renderLists=$n,h.shadowMap=q,h.state=ie,h.info=Ve}he();const ue=new ix(h,X);this.xr=ue,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(T,I,!1))},this.getSize=function(A){return A.set(T,I)},this.setSize=function(A,z,G){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,I=z,e.width=Math.floor(A*O),e.height=Math.floor(z*O),G!==!1&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(T*O,I*O).floor()},this.setDrawingBufferSize=function(A,z,G){T=A,I=z,O=G,e.width=Math.floor(A*G),e.height=Math.floor(z*G),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,z,G,B){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,z,G,B),ie.viewport(b.copy(F).multiplyScalar(O).floor())},this.getScissor=function(A){return A.copy(U)},this.setScissor=function(A,z,G,B){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,z,G,B),ie.scissor(S.copy(U).multiplyScalar(O).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(A){ie.setScissorTest(L=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,z=!0,G=!0){let B=0;A&&(B|=16384),z&&(B|=256),G&&(B|=1024),X.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",se,!1),$n.dispose(),C.dispose(),De.dispose(),At.dispose(),Ht.dispose(),bt.dispose(),ve.dispose(),He.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",ze),ue.removeEventListener("sessionend",Ue),V&&(V.dispose(),V=null),Ut.stop()};function P(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=Ve.autoReset,z=q.enabled,G=q.autoUpdate,B=q.needsUpdate,K=q.type;he(),Ve.autoReset=A,q.enabled=z,q.autoUpdate=G,q.needsUpdate=B,q.type=K}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){const z=A.target;z.removeEventListener("dispose",be),de(z)}function de(A){we(A),De.remove(A)}function we(A){const z=De.get(A).programs;z!==void 0&&(z.forEach(function(G){He.releaseProgram(G)}),A.isShaderMaterial&&He.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,G,B,K,Me){z===null&&(z=ne);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Le=yh(A,z,G,B,K);ie.setMaterial(B,Ae);let Ce=G.index;const ke=G.attributes.position;if(Ce===null){if(ke===void 0||ke.count===0)return}else if(Ce.count===0)return;let Ie=1;B.wireframe===!0&&(Ce=Nn.getWireframeAttribute(G),Ie=2),ve.setup(K,B,Le,G,Ce);let Oe,Ze=ce;Ce!==null&&(Oe=Jt.get(Ce),Ze=Ee,Ze.setIndex(Oe));const Oi=Ce!==null?Ce.count:ke.count,pr=G.drawRange.start*Ie,mr=G.drawRange.count*Ie,Un=Me!==null?Me.start*Ie:0,Fe=Me!==null?Me.count*Ie:1/0,gr=Math.max(pr,Un),nt=Math.min(Oi,pr+mr,Un+Fe)-1,kn=Math.max(0,nt-gr+1);if(kn!==0){if(K.isMesh)B.wireframe===!0?(ie.setLineWidth(B.wireframeLinewidth*fe()),Ze.setMode(1)):Ze.setMode(4);else if(K.isLine){let mi=B.linewidth;mi===void 0&&(mi=1),ie.setLineWidth(mi*fe()),K.isLineSegments?Ze.setMode(1):K.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else K.isPoints?Ze.setMode(0):K.isSprite&&Ze.setMode(4);if(K.isInstancedMesh)Ze.renderInstances(gr,kn,K.count);else if(G.isInstancedBufferGeometry){const mi=Math.min(G.instanceCount,G._maxInstanceCount);Ze.renderInstances(gr,kn,mi)}else Ze.render(gr,kn)}},this.compile=function(A,z){d=C.get(A),d.init(),g.push(d),A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(h.physicallyCorrectLights),A.traverse(function(G){const B=G.material;if(B)if(Array.isArray(B))for(let K=0;K<B.length;K++){const Me=B[K];ro(Me,A,G)}else ro(B,A,G)}),g.pop(),d=null};let te=null;function Te(A){te&&te(A)}function ze(){Ut.stop()}function Ue(){Ut.start()}const Ut=new sd;Ut.setAnimationLoop(Te),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(A){te=A,ue.setAnimationLoop(A),A===null?Ut.stop():Ut.start()},ue.addEventListener("sessionstart",ze),ue.addEventListener("sessionend",Ue),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(z),z=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(h,A,z,w),d=C.get(A,g.length),d.init(),g.push(d),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),R.setFromProjectionMatrix(Q),N=this.localClippingEnabled,D=E.init(this.clippingPlanes,N,z),f=$n.get(A,m.length),f.init(),m.push(f),zn(A,z,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(j,Y),D===!0&&E.beginShadows();const G=d.state.shadowsArray;if(q.render(G,A,z),D===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,A),d.setupLights(h.physicallyCorrectLights),z.isArrayCamera){const B=z.cameras;for(let K=0,Me=B.length;K<Me;K++){const Ae=B[K];Ql(f,A,Ae,Ae.viewport)}}else Ql(f,A,z);w!==null&&(Se.updateMultisampleRenderTarget(w),Se.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(h,A,z),ve.resetDefaultState(),x=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function zn(A,z,G,B){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||R.intersectsSprite(A)){B&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Ae=bt.update(A),Le=A.material;Le.visible&&f.push(A,Ae,Le,G,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ve.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ve.render.frame),!A.frustumCulled||R.intersectsObject(A))){B&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Ae=bt.update(A),Le=A.material;if(Array.isArray(Le)){const Ce=Ae.groups;for(let ke=0,Ie=Ce.length;ke<Ie;ke++){const Oe=Ce[ke],Ze=Le[Oe.materialIndex];Ze&&Ze.visible&&f.push(A,Ae,Ze,G,ee.z,Oe)}}else Le.visible&&f.push(A,Ae,Le,G,ee.z,null)}}const Me=A.children;for(let Ae=0,Le=Me.length;Ae<Le;Ae++)zn(Me[Ae],z,G,B)}function Ql(A,z,G,B){const K=A.opaque,Me=A.transmissive,Ae=A.transparent;d.setupLightsView(G),Me.length>0&&vh(K,z,G),B&&ie.viewport(b.copy(B)),K.length>0&&$s(K,z,G),Me.length>0&&$s(Me,z,G),Ae.length>0&&$s(Ae,z,G),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function vh(A,z,G){const B=W.isWebGL2;V===null&&(V=new rr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?zs:nr,minFilter:Ja,samples:B&&s===!0?4:0})),h.getDrawingBufferSize(Z),B?V.setSize(Z.x,Z.y):V.setSize(ul(Z.x),ul(Z.y));const K=h.getRenderTarget();h.setRenderTarget(V),h.clear();const Me=h.toneMapping;h.toneMapping=di,$s(A,z,G),h.toneMapping=Me,Se.updateMultisampleRenderTarget(V),Se.updateRenderTargetMipmap(V),h.setRenderTarget(K)}function $s(A,z,G){const B=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Me=A.length;K<Me;K++){const Ae=A[K],Le=Ae.object,Ce=Ae.geometry,ke=B===null?Ae.material:B,Ie=Ae.group;Le.layers.test(G.layers)&&xh(Le,z,G,Ce,ke,Ie)}}function xh(A,z,G,B,K,Me){A.onBeforeRender(h,z,G,B,K,Me),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(h,z,G,B,A,Me),K.transparent===!0&&K.side===Kr?(K.side=Rn,K.needsUpdate=!0,h.renderBufferDirect(G,z,B,K,A,Me),K.side=Ns,K.needsUpdate=!0,h.renderBufferDirect(G,z,B,K,A,Me),K.side=Kr):h.renderBufferDirect(G,z,B,K,A,Me),A.onAfterRender(h,z,G,B,K,Me)}function ro(A,z,G){z.isScene!==!0&&(z=ne);const B=De.get(A),K=d.state.lights,Me=d.state.shadowsArray,Ae=K.state.version,Le=He.getParameters(A,K.state,Me,z,G),Ce=He.getProgramCacheKey(Le);let ke=B.programs;B.environment=A.isMeshStandardMaterial?z.environment:null,B.fog=z.fog,B.envMap=(A.isMeshStandardMaterial?Ht:At).get(A.envMap||B.environment),ke===void 0&&(A.addEventListener("dispose",be),ke=new Map,B.programs=ke);let Ie=ke.get(Ce);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===Ae)return $l(A,Le),Ie}else Le.uniforms=He.getUniforms(A),A.onBuild(G,Le,h),A.onBeforeCompile(Le,h),Ie=He.acquireProgram(Le,Ce),ke.set(Ce,Ie),B.uniforms=Le.uniforms;const Oe=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=E.uniform),$l(A,Le),B.needsLights=Sh(A),B.lightsStateVersion=Ae,B.needsLights&&(Oe.ambientLightColor.value=K.state.ambient,Oe.lightProbe.value=K.state.probe,Oe.directionalLights.value=K.state.directional,Oe.directionalLightShadows.value=K.state.directionalShadow,Oe.spotLights.value=K.state.spot,Oe.spotLightShadows.value=K.state.spotShadow,Oe.rectAreaLights.value=K.state.rectArea,Oe.ltc_1.value=K.state.rectAreaLTC1,Oe.ltc_2.value=K.state.rectAreaLTC2,Oe.pointLights.value=K.state.point,Oe.pointLightShadows.value=K.state.pointShadow,Oe.hemisphereLights.value=K.state.hemi,Oe.directionalShadowMap.value=K.state.directionalShadowMap,Oe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Oe.spotShadowMap.value=K.state.spotShadowMap,Oe.spotShadowMatrix.value=K.state.spotShadowMatrix,Oe.pointShadowMap.value=K.state.pointShadowMap,Oe.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ze=Ie.getUniforms(),Oi=Ca.seqWithValue(Ze.seq,Oe);return B.currentProgram=Ie,B.uniformsList=Oi,Ie}function $l(A,z){const G=De.get(A);G.outputEncoding=z.outputEncoding,G.instancing=z.instancing,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function yh(A,z,G,B,K){z.isScene!==!0&&(z=ne),Se.resetTextureUnits();const Me=z.fog,Ae=B.isMeshStandardMaterial?z.environment:null,Le=w===null?h.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:ir,Ce=(B.isMeshStandardMaterial?Ht:At).get(B.envMap||Ae),ke=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!B.normalMap&&!!G.attributes.tangent,Oe=!!G.morphAttributes.position,Ze=!!G.morphAttributes.normal,Oi=!!G.morphAttributes.color,pr=B.toneMapped?h.toneMapping:di,mr=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Un=mr!==void 0?mr.length:0,Fe=De.get(B),gr=d.state.lights;if(D===!0&&(N===!0||A!==M)){const Bn=A===M&&B.id===x;E.setState(B,A,Bn)}let nt=!1;B.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==gr.state.version||Fe.outputEncoding!==Le||K.isInstancedMesh&&Fe.instancing===!1||!K.isInstancedMesh&&Fe.instancing===!0||K.isSkinnedMesh&&Fe.skinning===!1||!K.isSkinnedMesh&&Fe.skinning===!0||Fe.envMap!==Ce||B.fog===!0&&Fe.fog!==Me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==E.numPlanes||Fe.numIntersection!==E.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Ie||Fe.morphTargets!==Oe||Fe.morphNormals!==Ze||Fe.morphColors!==Oi||Fe.toneMapping!==pr||W.isWebGL2===!0&&Fe.morphTargetsCount!==Un)&&(nt=!0):(nt=!0,Fe.__version=B.version);let kn=Fe.currentProgram;nt===!0&&(kn=ro(B,z,K));let mi=!1,ds=!1,so=!1;const kt=kn.getUniforms(),hs=Fe.uniforms;if(ie.useProgram(kn.program)&&(mi=!0,ds=!0,so=!0),B.id!==x&&(x=B.id,ds=!0),mi||M!==A){if(kt.setValue(X,"projectionMatrix",A.projectionMatrix),W.logarithmicDepthBuffer&&kt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,ds=!0,so=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Bn=kt.map.cameraPosition;Bn!==void 0&&Bn.setValue(X,ee.setFromMatrixPosition(A.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&kt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||K.isSkinnedMesh)&&kt.setValue(X,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){kt.setOptional(X,K,"bindMatrix"),kt.setOptional(X,K,"bindMatrixInverse");const Bn=K.skeleton;Bn&&(W.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),kt.setValue(X,"boneTexture",Bn.boneTexture,Se),kt.setValue(X,"boneTextureSize",Bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ao=G.morphAttributes;return(ao.position!==void 0||ao.normal!==void 0||ao.color!==void 0&&W.isWebGL2===!0)&&re.update(K,G,B,kn),(ds||Fe.receiveShadow!==K.receiveShadow)&&(Fe.receiveShadow=K.receiveShadow,kt.setValue(X,"receiveShadow",K.receiveShadow)),ds&&(kt.setValue(X,"toneMappingExposure",h.toneMappingExposure),Fe.needsLights&&bh(hs,so),Me&&B.fog===!0&&Qn.refreshFogUniforms(hs,Me),Qn.refreshMaterialUniforms(hs,B,O,I,V),Ca.upload(X,Fe.uniformsList,hs,Se)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ca.upload(X,Fe.uniformsList,hs,Se),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&kt.setValue(X,"center",K.center),kt.setValue(X,"modelViewMatrix",K.modelViewMatrix),kt.setValue(X,"normalMatrix",K.normalMatrix),kt.setValue(X,"modelMatrix",K.matrixWorld),kn}function bh(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Sh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,G){De.get(A.texture).__webglTexture=z,De.get(A.depthTexture).__webglTexture=G;const B=De.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=G===void 0,B.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const G=De.get(A);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,G=0){w=A,_=z,v=G;let B=!0;if(A){const Ce=De.get(A);Ce.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(36160,null),B=!1):Ce.__webglFramebuffer===void 0?Se.setupRenderTarget(A):Ce.__hasExternalTextures&&Se.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture)}let K=null,Me=!1,Ae=!1;if(A){const Ce=A.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Ae=!0);const ke=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=ke[z],Me=!0):W.isWebGL2&&A.samples>0&&Se.useMultisampledRTT(A)===!1?K=De.get(A).__webglMultisampledFramebuffer:K=ke,b.copy(A.viewport),S.copy(A.scissor),y=A.scissorTest}else b.copy(F).multiplyScalar(O).floor(),S.copy(U).multiplyScalar(O).floor(),y=L;if(ie.bindFramebuffer(36160,K)&&W.drawBuffers&&B&&ie.drawBuffers(A,K),ie.viewport(b),ie.scissor(S),ie.setScissorTest(y),Me){const Ce=De.get(A.texture);X.framebufferTexture2D(36160,36064,34069+z,Ce.__webglTexture,G)}else if(Ae){const Ce=De.get(A.texture),ke=z||0;X.framebufferTextureLayer(36160,36064,Ce.__webglTexture,G||0,ke)}x=-1},this.readRenderTargetPixels=function(A,z,G,B,K,Me,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){ie.bindFramebuffer(36160,Le);try{const Ce=A.texture,ke=Ce.format,Ie=Ce.type;if(ke!==qn&&H.convert(ke)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===zs&&(J.has("EXT_color_buffer_half_float")||W.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ie!==nr&&H.convert(Ie)!==X.getParameter(35738)&&!(Ie===Xi&&(W.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-B&&G>=0&&G<=A.height-K&&X.readPixels(z,G,B,K,H.convert(ke),H.convert(Ie),Me)}finally{const Ce=w!==null?De.get(w).__webglFramebuffer:null;ie.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(A,z,G=0){const B=Math.pow(2,-G),K=Math.floor(z.image.width*B),Me=Math.floor(z.image.height*B);Se.setTexture2D(z,0),X.copyTexSubImage2D(3553,G,0,0,A.x,A.y,K,Me),ie.unbindTexture()},this.copyTextureToTexture=function(A,z,G,B=0){const K=z.image.width,Me=z.image.height,Ae=H.convert(G.format),Le=H.convert(G.type);Se.setTexture2D(G,0),X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment),z.isDataTexture?X.texSubImage2D(3553,B,A.x,A.y,K,Me,Ae,Le,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(3553,B,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Ae,z.mipmaps[0].data):X.texSubImage2D(3553,B,A.x,A.y,Ae,Le,z.image),B===0&&G.generateMipmaps&&X.generateMipmap(3553),ie.unbindTexture()},this.copyTextureToTexture3D=function(A,z,G,B,K=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=A.max.x-A.min.x+1,Ae=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Ce=H.convert(B.format),ke=H.convert(B.type);let Ie;if(B.isData3DTexture)Se.setTexture3D(B,0),Ie=32879;else if(B.isDataArrayTexture)Se.setTexture2DArray(B,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,B.flipY),X.pixelStorei(37441,B.premultiplyAlpha),X.pixelStorei(3317,B.unpackAlignment);const Oe=X.getParameter(3314),Ze=X.getParameter(32878),Oi=X.getParameter(3316),pr=X.getParameter(3315),mr=X.getParameter(32877),Un=G.isCompressedTexture?G.mipmaps[0]:G.image;X.pixelStorei(3314,Un.width),X.pixelStorei(32878,Un.height),X.pixelStorei(3316,A.min.x),X.pixelStorei(3315,A.min.y),X.pixelStorei(32877,A.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D(Ie,K,z.x,z.y,z.z,Me,Ae,Le,Ce,ke,Un.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ie,K,z.x,z.y,z.z,Me,Ae,Le,Ce,Un.data)):X.texSubImage3D(Ie,K,z.x,z.y,z.z,Me,Ae,Le,Ce,ke,Un),X.pixelStorei(3314,Oe),X.pixelStorei(32878,Ze),X.pixelStorei(3316,Oi),X.pixelStorei(3315,pr),X.pixelStorei(32877,mr),K===0&&B.generateMipmaps&&X.generateMipmap(Ie),ie.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Se.setTextureCube(A,0):A.isData3DTexture?Se.setTexture3D(A,0):A.isDataArrayTexture?Se.setTexture2DArray(A,0):Se.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){_=0,v=0,w=null,ie.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ax extends dd{}ax.prototype.isWebGL1Renderer=!0;class ox extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}const wu={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class hd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const lx=new hd;class pd{constructor(e){this.manager=e!==void 0?e:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class cx extends pd{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wu.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Us("img");function l(){u(),wu.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ux extends pd{constructor(e){super(e)}load(e,t,n,i){const s=new vn,o=new cx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);var dl=function(r,e){return dl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},dl(r,e)};function Fn(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");dl(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Bt=function(){return Bt=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Bt.apply(this,arguments)};function Es(r){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fx(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var n=t.call(r),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var us=function(){function r(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Tu={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function dx(r){return!!r.document&&typeof r.document.createElement=="function"}function hx(r,e){if(dx(r)&&e in Tu){var t=r.document.createElement("div"),n=Tu[e],i=n.standard,s=n.prefixed,o=i in t.style;return o?i:s}return e}/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var en={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},En={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},ys={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var px=function(r){Fn(e,r);function e(t){var n=r.call(this,Bt(Bt({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return en},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return En},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(en.INDETERMINATE_CLASS),this.adapter.addClass(en.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,s;if(!t.determinate)try{for(var o=Es(n),a=o.next();!a.done;a=o.next()){var l=a.value;l.contentRect&&t.calculateAndSetDimensions(l.contentRect.width)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(en.INDETERMINATE_CLASS),this.adapter.setAttribute(En.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(En.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(En.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(en.INDETERMINATE_CLASS),this.adapter.removeAttribute(En.ARIA_VALUENOW),this.adapter.removeAttribute(En.ARIA_VALUEMAX),this.adapter.removeAttribute(En.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(En.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(en.CLOSED_CLASS),this.adapter.removeClass(en.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(En.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(en.CLOSED_CLASS),this.adapter.setAttribute(En.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(en.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(en.CLOSED_CLASS)&&this.adapter.addClass(en.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(en.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(en.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",i=typeof window<"u"?hx(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(En.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*ys.PRIMARY_HALF,i=t*ys.PRIMARY_FULL,s=t*ys.SECONDARY_QUARTER,o=t*ys.SECONDARY_HALF,a=t*ys.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-s+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-a+"px"),this.restartAnimation()},e}(us);function gt(r){return Object.entries(r).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function La(r,e,t,n={bubbles:!0},i=!1){if(typeof Event<"u"&&r){const s=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(r==null||r.dispatchEvent(s),i&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));r==null||r.dispatchEvent(o),o.defaultPrevented&&s.preventDefault()}return s}}function Ri(r,e){let t=Object.getOwnPropertyNames(r);const n={};for(let i=0;i<t.length;i++){const s=t[i],o=s.indexOf("$");o!==-1&&e.indexOf(s.substring(0,o+1))!==-1||e.indexOf(s)===-1&&(n[s]=r[s])}return n}const Eu=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,mx=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function fs(r){let e,t=[];r.$on=(i,s)=>{let o=i,a=()=>{};return e?a=e(o,s):t.push([o,s]),o.match(Eu)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),()=>{a()}};function n(i){tl(r,i)}return i=>{const s=[],o={};e=(a,l)=>{let c=a,u=l,f=!1;const d=c.match(Eu),m=c.match(mx),g=d||m;if(c.match(/^SMUI:\w+:/)){const _=c.split(":");let v="";for(let w=0;w<_.length;w++)v+=w===_.length-1?":"+_[w]:_[w].split("-").map(x=>x.slice(0,1).toUpperCase()+x.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${v.split("$")[0]}.`),c=v}if(g){const _=c.split(d?":":"$");c=_[0];const v=_.slice(1).reduce((w,x)=>(w[x]=!0,w),{});v.passive&&(f=f||{},f.passive=!0),v.nonpassive&&(f=f||{},f.passive=!1),v.capture&&(f=f||{},f.capture=!0),v.once&&(f=f||{},f.once=!0),v.preventDefault&&(u=Lh(u)),v.stopPropagation&&(u=Rh(u))}const h=ht(i,c,u,f),p=()=>{h();const _=s.indexOf(p);_>-1&&s.splice(_,1)};return s.push(p),c in o||(o[c]=ht(i,c,n)),p};for(let a=0;a<t.length;a++)e(t[a][0],t[a][1]);return{destroy:()=>{for(let a=0;a<s.length;a++)s[a]();for(let a of Object.entries(o))a[1]()}}}}function qt(r,e){let t=Object.getOwnPropertyNames(r);const n={};for(let i=0;i<t.length;i++){const s=t[i];s.substring(0,e.length)===e&&(n[s.substring(e.length)]=r[s])}return n}function Kn(r,e){let t=[];if(e)for(let n=0;n<e.length;n++){const i=e[n],s=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?t.push(s(r,i[1])):t.push(s(r))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let i=0;i<n.length;i++){const s=t[i];if(s&&s.update){const o=n[i];Array.isArray(o)&&o.length>1?s.update(o[1]):s.update()}}},destroy(){for(let n=0;n<t.length;n++){const i=t[n];i&&i.destroy&&i.destroy()}}}}function gx(r){let e,t,n,i,s,o,a,l,c,u,f,d,m,g,h,p,_,v,w,x,M=[{class:m=gt({[r[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":r[3],"mdc-linear-progress--closed":r[4],"mdc-data-table__linear-progress":r[14]==="data-table",...r[8]})},{style:g=Object.entries(r[10]).map(Lu).concat([r[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":h=0},{"aria-valuemax":p=1},{"aria-valuenow":_=r[3]?void 0:r[5]},r[9],r[16]],b={};for(let S=0;S<M.length;S+=1)b=Be(b,M[S]);return{c(){e=_e("div"),t=_e("div"),n=_e("div"),s=Ne(),o=_e("div"),a=Ne(),l=_e("div"),c=_e("span"),f=Ne(),d=_e("div"),d.innerHTML='<span class="mdc-linear-progress__bar-inner"></span>',me(n,"class","mdc-linear-progress__buffer-bar"),me(n,"style",i=Object.entries(r[11]).map(Au).join(" ")),me(o,"class","mdc-linear-progress__buffer-dots"),me(t,"class","mdc-linear-progress__buffer"),me(c,"class","mdc-linear-progress__bar-inner"),me(l,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),me(l,"style",u=Object.entries(r[12]).map(Cu).join(" ")),me(d,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),St(e,b)},m(S,y){ye(S,e,y),ge(e,t),ge(t,n),ge(t,s),ge(t,o),ge(e,a),ge(e,l),ge(l,c),ge(e,f),ge(e,d),r[19](e),w||(x=[tt(v=Kn.call(null,e,r[0])),tt(r[13].call(null,e)),ht(e,"transitionend",r[20])],w=!0)},p(S,[y]){y&2048&&i!==(i=Object.entries(S[11]).map(Au).join(" "))&&me(n,"style",i),y&4096&&u!==(u=Object.entries(S[12]).map(Cu).join(" "))&&me(l,"style",u),St(e,b=Dt(M,[y&282&&m!==(m=gt({[S[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":S[3],"mdc-linear-progress--closed":S[4],"mdc-data-table__linear-progress":S[14]==="data-table",...S[8]}))&&{class:m},y&1028&&g!==(g=Object.entries(S[10]).map(Lu).concat([S[2]]).join(" "))&&{style:g},{role:"progressbar"},{"aria-valuemin":h},{"aria-valuemax":p},y&40&&_!==(_=S[3]?void 0:S[5])&&{"aria-valuenow":_},y&512&&S[9],y&65536&&S[16]])),v&&wt(v.update)&&y&1&&v.update.call(null,S[0])},i:$e,o:$e,d(S){S&&xe(e),r[19](null),w=!1,Ft(x)}}}const Au=([r,e])=>`${r}: ${e};`,Cu=([r,e])=>`${r}: ${e};`,Lu=([r,e])=>`${r}: ${e};`;function _x(r,e,t){const n=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let i=_n(e,n),s;const o=fs(bn());let{use:a=[]}=e,{class:l=""}=e,{style:c=""}=e,{indeterminate:u=!1}=e,{closed:f=!1}=e,{progress:d=0}=e,{buffer:m=void 0}=e,g,h,p={},_={},v={},w={},x={},M=Fs("SMUI:linear-progress:context"),b=Fs("SMUI:linear-progress:closed");an(r,b,D=>t(21,s=D)),On(()=>(t(6,h=new px({addClass:y,forceLayout:()=>{U().getBoundingClientRect()},setBufferBarStyle:Y,setPrimaryBarStyle:F,hasClass:S,removeAttribute:O,removeClass:T,setAttribute:I,setStyle:j,attachResizeObserver:D=>{const N=window.ResizeObserver;if(N){const V=new N(D);return V.observe(U()),V}return null},getWidth:()=>U().offsetWidth})),h.init(),()=>{h.destroy()}));function S(D){return D in p?p[D]:U().classList.contains(D)}function y(D){p[D]||t(8,p[D]=!0,p)}function T(D){(!(D in p)||p[D])&&t(8,p[D]=!1,p)}function I(D,N){_[D]!==N&&t(9,_[D]=N,_)}function O(D){(!(D in _)||_[D]!=null)&&t(9,_[D]=void 0,_)}function j(D,N){v[D]!=N&&(N===""||N==null?(delete v[D],t(10,v)):t(10,v[D]=N,v))}function Y(D,N){w[D]!=N&&(N===""||N==null?(delete w[D],t(11,w)):t(11,w[D]=N,w))}function F(D,N){x[D]!=N&&(N===""||N==null?(delete x[D],t(12,x)):t(12,x[D]=N,x))}function U(){return g}function L(D){_t[D?"unshift":"push"](()=>{g=D,t(7,g)})}const R=()=>h&&h.handleTransitionEnd();return r.$$set=D=>{e=Be(Be({},e),os(D)),t(16,i=_n(e,n)),"use"in D&&t(0,a=D.use),"class"in D&&t(1,l=D.class),"style"in D&&t(2,c=D.style),"indeterminate"in D&&t(3,u=D.indeterminate),"closed"in D&&t(4,f=D.closed),"progress"in D&&t(5,d=D.progress),"buffer"in D&&t(17,m=D.buffer)},r.$$.update=()=>{r.$$.dirty&16&&b&&wh(b,s=f,s),r.$$.dirty&72&&h&&h.isDeterminate()!==!u&&h.setDeterminate(!u),r.$$.dirty&96&&h&&h.getProgress()!==d&&h.setProgress(d),r.$$.dirty&131136&&h&&(m==null?h.setBuffer(1):h.setBuffer(m)),r.$$.dirty&80&&h&&(f?h.close():h.open())},[a,l,c,u,f,d,h,g,p,_,v,w,x,o,M,b,i,m,U,L,R]}class vx extends zt{constructor(e){super(),Nt(this,e,_x,gx,lt,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}const Ua=[{bg:"/home/bg1.png",depth:"/home/bg1_depth.jpg"},{bg:"/home/bg2.png",depth:"/home/bg2_depth.jpg"},{bg:"/home/bg3.png",depth:"/home/bg3_depth.jpg"},{bg:"/home/bg4.jpeg",depth:"/home/bg4_depth.jpg"},{bg:"/home/bg5.png",depth:"/home/bg5_depth.jpg"}],xx=1.5,Et=800,In=qs(!0),Ra=["前端","后端","其他"],Ru={[Ra[0]]:[{tab:"基础"},{skill:"HTML5/CSS3",score:"100%"},{skill:"Less/Sass/Stylus",score:"100%"},{skill:"JavaScript",score:"100%"},{skill:"TypeScript",score:"100%"},{skill:"Node",score:"100%"},{tab:"框架"},{skill:"Vue&相关技术栈",score:"100%"},{skill:"Svelte&相关技术栈",score:"85%"},{skill:"React&相关技术栈",score:"70%"},{skill:"Solid",score:"70%"},{skill:"Egg.js",score:"100%"},{skill:"Koa.js",score:"100%"},{tab:"小程序"},{skill:"MINA",score:"100%"},{skill:"mpVue",score:"100%"},{tab:"其他"},{skill:"webpack",score:"95%"},{skill:"vite",score:"95%"},{skill:"git",score:"100%"},{skill:"monorepo",score:"100%"},{skill:"npm/yarn/pnpm",score:"100%"}],[Ra[1]]:[{tab:"开发语言"},{skill:"Golang",score:"70%"},{skill:"PHP",score:"50%"},{tab:"其他"},{skill:"Redis",score:"70%"},{skill:"Mysql",score:"70%"}],[Ra[2]]:[{skill:"Photoshop",score:"60%"}]};function yx(r){let e,t,n,i,s,o,a,l,c,u,f,d,m,g,h;return{c(){e=_e("div"),t=_e("div"),t.textContent="欢迎来到mahiru-forever的个人空间",n=Ne(),i=_e("div"),s=_e("div"),s.textContent="Skill",o=Ne(),a=_e("div"),a.textContent="Experience",l=Ne(),c=_e("div"),c.textContent="Hobby",u=Ne(),f=_e("div"),f.textContent="Contact",me(t,"class","title svelte-soauan"),me(s,"class","know svelte-soauan"),me(s,"role","presentation"),me(a,"class","know svelte-soauan"),me(a,"role","presentation"),me(c,"class","know svelte-soauan"),me(c,"role","presentation"),me(f,"class","know svelte-soauan"),me(f,"role","presentation"),me(i,"class","know-more svelte-soauan"),me(e,"class","page page_1 svelte-soauan")},m(p,_){ye(p,e,_),ge(e,t),ge(e,n),ge(e,i),ge(i,s),ge(i,o),ge(i,a),ge(i,l),ge(i,c),ge(i,u),ge(i,f),m=!0,g||(h=[ht(s,"click",r[4]),ht(a,"click",r[5]),ht(c,"click",r[6]),ht(f,"click",r[7])],g=!0)},p(p,[_]){r=p},i(p){m||(on(()=>{m&&(d||(d=xt(e,Ot,{delay:r[0],duration:Et},!0)),d.run(1))}),m=!0)},o(p){d||(d=xt(e,Ot,{delay:r[0],duration:Et},!1)),d.run(0),m=!1},d(p){p&&xe(e),p&&d&&d.end(),g=!1,Ft(h)}}}function bx(r,e,t){let n,i,s;an(r,In,f=>t(2,i=f)),an(r,Xn,f=>t(3,s=f));const o=Of();On(()=>{In.set(!1)});const a=()=>o("jump",1),l=()=>o("jump",2),c=()=>o("jump",3),u=()=>o("jump",4);return r.$$.update=()=>{r.$$.dirty&12&&t(0,n=s===0?i?0:Et:0)},[n,o,i,s,a,l,c,u]}class Sx extends zt{constructor(e){super(),Nt(this,e,bx,yx,lt,{})}}/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Mx(r){return r===void 0&&(r=window),wx(r)?{passive:!0}:!1}function wx(r){r===void 0&&(r=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};r.document.addEventListener("test",n,t),r.document.removeEventListener("test",n,t)}catch{e=!1}return e}const Tx=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Mx},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ex(r,e){if(r.closest)return r.closest(e);for(var t=r;t;){if(md(t,e))return t;t=t.parentElement}return null}function md(r,e){var t=r.matches||r.webkitMatchesSelector||r.msMatchesSelector;return t.call(r,e)}function Ax(r){var e=r;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const gd=Object.freeze(Object.defineProperty({__proto__:null,closest:Ex,estimateScrollWidth:Ax,matches:md},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Cx={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Lx={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},Du={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},ba;function Rx(r,e){e===void 0&&(e=!1);var t=r.CSS,n=ba;if(typeof ba=="boolean"&&!e)return ba;var i=t&&typeof t.supports=="function";if(!i)return!1;var s=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=s||o,e||(ba=n),n}function Dx(r,e,t){if(!r)return{x:0,y:0};var n=e.x,i=e.y,s=n+t.left,o=i+t.top,a,l;if(r.type==="touchstart"){var c=r;a=c.changedTouches[0].pageX-s,l=c.changedTouches[0].pageY-o}else{var u=r;a=u.pageX-s,l=u.pageY-o}return{x:a,y:l}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pu=["touchstart","pointerdown","mousedown","keydown"],Iu=["touchend","pointerup","mouseup","contextmenu"],Sa=[],Px=function(r){Fn(e,r);function e(t){var n=r.call(this,Bt(Bt({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return Cx},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Lx},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Du},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,s=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(s),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,s=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(s),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var s=Es(Pu),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var s=Es(Iu),o=s.next();!o.done;o=s.next()){var a=o.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=Es(Pu),s=i.next();!s.done;s=i.next()){var o=s.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=Es(Iu),s=i.next();!s.done;s=i.next()){var o=s.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(s){s.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[s],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var s=this.previousActivationEvent,o=s&&t!==void 0&&s.type!==t.type;if(!o){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var a=t!==void 0&&Sa.length>0&&Sa.some(function(l){return n.adapter.containsEventTarget(l)});if(a){this.resetActivationState();return}t!==void 0&&(Sa.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Sa=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,s=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,a=o.FG_DEACTIVATION,l=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var u="",f="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),m=d.startPoint,g=d.endPoint;u=m.x+"px, "+m.y+"px",f=g.x+"px, "+g.y+"px"}this.adapter.updateCssVariable(i,u),this.adapter.updateCssVariable(s,f),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,s;i?s=Dx(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):s={x:this.frame.width/2,y:this.frame.height/2},s={x:s.x-this.initialSize/2,y:s.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:s,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,s=i.hasDeactivationUXRun,o=i.isActivated,a=s||!o;a&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},Du.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=Bt({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var s=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&s%2!==0?this.initialSize=s-1:this.initialSize=s,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,s=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(s,this.unboundedCoords.top+"px"))},e}(us);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ix={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Ox={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var oi=function(r){Fn(e,r);function e(t){return r.call(this,Bt(Bt({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return Ix},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ox},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(us);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Fx=function(r){Fn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(oi.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(oi.cssClasses.ACTIVE)},e}(oi);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ou=function(r){Fn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(oi.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,s=t.left-n.left;this.adapter.addClass(oi.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+s+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(oi.cssClasses.NO_TRANSITION),this.adapter.addClass(oi.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(oi.cssClasses.ACTIVE)},e}(oi);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ma={ACTIVE:"mdc-tab--active"},bs={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Nx=function(r){Fn(e,r);function e(t){var n=r.call(this,Bt(Bt({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Ma},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return bs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(Ma.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(Ma.ACTIVE),this.adapter.setAttr(bs.ARIA_SELECTED,"true"),this.adapter.setAttr(bs.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(Ma.ACTIVE),this.adapter.setAttr(bs.ARIA_SELECTED,"false"),this.adapter.setAttr(bs.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),s=this.adapter.getContentOffsetLeft();return{contentLeft:n+s,contentRight:n+s+i,rootLeft:n,rootRight:n+t}},e}(us);const{applyPassive:wa}=Tx,{matches:zx}=gd;function Fu(r,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:i=!1,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u=g=>r.classList.add(g),removeClass:f=g=>r.classList.remove(g),addStyle:d=(g,h)=>r.style.setProperty(g,h),initPromise:m=Promise.resolve()}={}){let g,h=Fs("SMUI:addLayoutListener"),p,_=o,v=l,w=c;function x(){t?(u("mdc-ripple-surface"),s==="primary"?(u("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")):s==="secondary"?(f("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):(f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary"))):(f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),g&&_!==o&&(_=o,o?g.activate():o===!1&&g.deactivate()),e&&!g?(g=new Px({addClass:u,browserSupportsCssVars:()=>Rx(window),computeBoundingRect:()=>(a||r).getBoundingClientRect(),containsEventTarget:b=>r.contains(b),deregisterDocumentInteractionHandler:(b,S)=>document.documentElement.removeEventListener(b,S,wa()),deregisterInteractionHandler:(b,S)=>(l||r).removeEventListener(b,S,wa()),deregisterResizeHandler:b=>window.removeEventListener("resize",b),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??zx(c||r,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(b,S)=>document.documentElement.addEventListener(b,S,wa()),registerInteractionHandler:(b,S)=>(l||r).addEventListener(b,S,wa()),registerResizeHandler:b=>window.addEventListener("resize",b),removeClass:f,updateCssVariable:d}),m.then(()=>{g&&(g.init(),g.setUnbounded(n))})):g&&!e&&m.then(()=>{g&&(g.destroy(),g=void 0)}),g&&(v!==l||w!==c)&&(v=l,w=c,g.destroy(),requestAnimationFrame(()=>{g&&(g.init(),g.setUnbounded(n))})),!e&&n&&u("mdc-ripple-upgraded--unbounded")}x(),h&&(p=h(M));function M(){g&&g.layout()}return{update(b){({ripple:e,surface:t,unbounded:n,disabled:i,color:s,active:o,rippleElement:a,eventTarget:l,activeTarget:c,addClass:u,removeClass:f,addStyle:d,initPromise:m}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:S=>r.classList.add(S),removeClass:S=>r.classList.remove(S),addStyle:(S,y)=>r.style.setProperty(S,y),initPromise:Promise.resolve()},b)),x()},destroy(){g&&(g.destroy(),g=void 0,f("mdc-ripple-surface"),f("smui-ripple-surface--primary"),f("smui-ripple-surface--secondary")),p&&p()}}}function Ux(r){let e=r[1],t,n,i=r[1]&&Ho(r);return{c(){i&&i.c(),t=yn()},m(s,o){i&&i.m(s,o),ye(s,t,o),n=!0},p(s,o){s[1]?e?lt(e,s[1])?(i.d(1),i=Ho(s),e=s[1],i.c(),i.m(t.parentNode,t)):i.p(s,o):(i=Ho(s),e=s[1],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=s[1])},i(s){n||(le(i),n=!0)},o(s){pe(i),n=!1},d(s){s&&xe(t),i&&i.d(s)}}}function kx(r){let e=r[1],t,n=r[1]&&Wo(r);return{c(){n&&n.c(),t=yn()},m(i,s){n&&n.m(i,s),ye(i,t,s)},p(i,s){i[1]?e?lt(e,i[1])?(n.d(1),n=Wo(i),e=i[1],n.c(),n.m(t.parentNode,t)):n.p(i,s):(n=Wo(i),e=i[1],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=i[1])},i:$e,o:$e,d(i){i&&xe(t),n&&n.d(i)}}}function Ho(r){let e,t,n,i,s;const o=r[8].default,a=ar(o,r,r[7],null);let l=[r[5]],c={};for(let u=0;u<l.length;u+=1)c=Be(c,l[u]);return{c(){e=_e(r[1]),a&&a.c(),Oa(r[1])(e,c)},m(u,f){ye(u,e,f),a&&a.m(e,null),r[10](e),n=!0,i||(s=[tt(t=Kn.call(null,e,r[0])),tt(r[4].call(null,e))],i=!0)},p(u,f){a&&a.p&&(!n||f&128)&&lr(a,o,u,u[7],n?or(o,u[7],f,null):cr(u[7]),null),Oa(u[1])(e,c=Dt(l,[f&32&&u[5]])),t&&wt(t.update)&&f&1&&t.update.call(null,u[0])},i(u){n||(le(a,u),n=!0)},o(u){pe(a,u),n=!1},d(u){u&&xe(e),a&&a.d(u),r[10](null),i=!1,Ft(s)}}}function Wo(r){let e,t,n,i,s=[r[5]],o={};for(let a=0;a<s.length;a+=1)o=Be(o,s[a]);return{c(){e=_e(r[1]),Oa(r[1])(e,o)},m(a,l){ye(a,e,l),r[9](e),n||(i=[tt(t=Kn.call(null,e,r[0])),tt(r[4].call(null,e))],n=!0)},p(a,l){Oa(a[1])(e,o=Dt(s,[l&32&&a[5]])),t&&wt(t.update)&&l&1&&t.update.call(null,a[0])},d(a){a&&xe(e),r[9](null),n=!1,Ft(i)}}}function Bx(r){let e,t,n,i;const s=[kx,Ux],o=[];function a(l,c){return l[3]?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=yn()},m(l,c){o[e].m(l,c),ye(l,n,c),i=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(ft(),pe(o[u],1,1,()=>{o[u]=null}),dt(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),le(t,1),t.m(n.parentNode,n))},i(l){i||(le(t),i=!0)},o(l){pe(t),i=!1},d(l){o[e].d(l),l&&xe(n)}}}function Vx(r,e,t){let n;const i=["use","tag","getElement"];let s=_n(e,i),{$$slots:o={},$$scope:a}=e,{use:l=[]}=e,{tag:c}=e;const u=fs(bn());let f;function d(){return f}function m(h){_t[h?"unshift":"push"](()=>{f=h,t(2,f)})}function g(h){_t[h?"unshift":"push"](()=>{f=h,t(2,f)})}return r.$$set=h=>{e=Be(Be({},e),os(h)),t(5,s=_n(e,i)),"use"in h&&t(0,l=h.use),"tag"in h&&t(1,c=h.tag),"$$scope"in h&&t(7,a=h.$$scope)},r.$$.update=()=>{r.$$.dirty&2&&t(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(c)>-1)},[l,c,f,n,u,s,d,a,o,m,g]}class Nu extends zt{constructor(e){super(),Nt(this,e,Vx,Bx,lt,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function Gx(r){let e,t,n,i,s,o,a,l,c,u,f;const d=r[21].default,m=ar(d,r,r[20],null);let g=[{class:n=gt({[r[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":r[3]==="underline","mdc-tab-indicator__content--icon":r[3]==="icon"})},{style:i=Object.entries(r[10]).map(zu).join(" ")},{"aria-hidden":s=r[3]==="icon"?"true":void 0},qt(r[12],"content$")],h={};for(let v=0;v<g.length;v+=1)h=Be(h,g[v]);let p=[{class:a=gt({[r[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":r[0],"mdc-tab-indicator--fade":r[4]==="fade",...r[9]})},Ri(r[12],["content$"])],_={};for(let v=0;v<p.length;v+=1)_=Be(_,p[v]);return{c(){e=_e("span"),t=_e("span"),m&&m.c(),St(t,h),St(e,_)},m(v,w){ye(v,e,w),ge(e,t),m&&m.m(t,null),r[22](t),r[23](e),c=!0,u||(f=[tt(o=Kn.call(null,t,r[5])),tt(l=Kn.call(null,e,r[1])),tt(r[11].call(null,e))],u=!0)},p(v,[w]){m&&m.p&&(!c||w&1048576)&&lr(m,d,v,v[20],c?or(d,v[20],w,null):cr(v[20]),null),St(t,h=Dt(g,[(!c||w&72&&n!==(n=gt({[v[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":v[3]==="underline","mdc-tab-indicator__content--icon":v[3]==="icon"})))&&{class:n},(!c||w&1024&&i!==(i=Object.entries(v[10]).map(zu).join(" ")))&&{style:i},(!c||w&8&&s!==(s=v[3]==="icon"?"true":void 0))&&{"aria-hidden":s},w&4096&&qt(v[12],"content$")])),o&&wt(o.update)&&w&32&&o.update.call(null,v[5]),St(e,_=Dt(p,[(!c||w&533&&a!==(a=gt({[v[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":v[0],"mdc-tab-indicator--fade":v[4]==="fade",...v[9]})))&&{class:a},w&4096&&Ri(v[12],["content$"])])),l&&wt(l.update)&&w&2&&l.update.call(null,v[1])},i(v){c||(le(m,v),c=!0)},o(v){pe(m,v),c=!1},d(v){v&&xe(e),m&&m.d(v),r[22](null),r[23](null),u=!1,Ft(f)}}}const zu=([r,e])=>`${r}: ${e};`;function Hx(r,e,t){const n=["use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"];let i=_n(e,n),{$$slots:s={},$$scope:o}=e;const a=fs(bn());let{use:l=[]}=e,{class:c=""}=e,{active:u=!1}=e,{type:f="underline"}=e,{transition:d="slide"}=e,{content$use:m=[]}=e,{content$class:g=""}=e,h,p,_,v={},w={},x=[],M=d;On(()=>(t(17,p=b()),p.init(),()=>{p.destroy()}));function b(){const R={fade:Fx,slide:Ou}[d]||Ou;return new R({addClass:(...D)=>S(()=>y(...D)),removeClass:(...D)=>S(()=>T(...D)),computeContentClientRect:Y,setContentStyleProperty:(...D)=>S(()=>I(...D))})}function S(R){x.length?x[x.length-1].push(R):R()}function y(R){v[R]||t(9,v[R]=!0,v)}function T(R){(!(R in v)||v[R])&&t(9,v[R]=!1,v)}function I(R,D){w[R]!=D&&(D===""||D==null?(delete w[R],t(10,w),t(19,M),t(4,d),t(17,p)):t(10,w[R]=D,w))}function O(R){t(0,u=!0),p.activate(R)}function j(){t(0,u=!1),p.deactivate()}function Y(){return x.push([]),t(18,x),_.getBoundingClientRect()}function F(){return h}function U(R){_t[R?"unshift":"push"](()=>{_=R,t(8,_)})}function L(R){_t[R?"unshift":"push"](()=>{h=R,t(7,h)})}return r.$$set=R=>{e=Be(Be({},e),os(R)),t(12,i=_n(e,n)),"use"in R&&t(1,l=R.use),"class"in R&&t(2,c=R.class),"active"in R&&t(0,u=R.active),"type"in R&&t(3,f=R.type),"transition"in R&&t(4,d=R.transition),"content$use"in R&&t(5,m=R.content$use),"content$class"in R&&t(6,g=R.content$class),"$$scope"in R&&t(20,o=R.$$scope)},r.$$.update=()=>{r.$$.dirty&655376&&M!==d&&(t(19,M=d),p&&p.destroy(),t(9,v={}),t(10,w={}),t(17,p=b()),p.init()),r.$$.dirty&262144&&x.length&&requestAnimationFrame(()=>{var R;const D=(R=x.shift())!==null&&R!==void 0?R:[];t(18,x);for(const N of D)N()})},[u,l,c,f,d,m,g,h,_,v,w,a,i,O,j,Y,F,p,x,M,o,s,U,L]}class _d extends zt{constructor(e){super(),Nt(this,e,Hx,Gx,lt,{use:1,class:2,active:0,type:3,transition:4,content$use:5,content$class:6,activate:13,deactivate:14,computeContentClientRect:15,getElement:16})}get activate(){return this.$$.ctx[13]}get deactivate(){return this.$$.ctx[14]}get computeContentClientRect(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}const Wx=r=>({}),Uu=r=>({}),Xx=r=>({}),ku=r=>({});function Bu(r){let e,t;const n=[{active:r[18]},qt(r[25],"tabIndicator$")];let i={$$slots:{default:[qx]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=Be(i,n[s]);return e=new _d({props:i}),r[33](e),{c(){pt(e.$$.fragment)},m(s,o){at(e,s,o),t=!0},p(s,o){const a=o[0]&33816576?Dt(n,[o[0]&262144&&{active:s[18]},o[0]&33554432&&tr(qt(s[25],"tabIndicator$"))]):{};o[1]&64&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(le(e.$$.fragment,s),t=!0)},o(s){pe(e.$$.fragment,s),t=!1},d(s){r[33](null),ot(e,s)}}}function qx(r){let e;const t=r[32]["tab-indicator"],n=ar(t,r,r[37],ku);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&64)&&lr(n,t,i,i[37],e?or(t,i[37],s,Xx):cr(i[37]),ku)},i(i){e||(le(n,i),e=!0)},o(i){pe(n,i),e=!1},d(i){n&&n.d(i)}}}function Vu(r){let e,t;const n=[{active:r[18]},qt(r[25],"tabIndicator$")];let i={$$slots:{default:[jx]},$$scope:{ctx:r}};for(let s=0;s<n.length;s+=1)i=Be(i,n[s]);return e=new _d({props:i}),r[35](e),{c(){pt(e.$$.fragment)},m(s,o){at(e,s,o),t=!0},p(s,o){const a=o[0]&33816576?Dt(n,[o[0]&262144&&{active:s[18]},o[0]&33554432&&tr(qt(s[25],"tabIndicator$"))]):{};o[1]&64&&(a.$$scope={dirty:o,ctx:s}),e.$set(a)},i(s){t||(le(e.$$.fragment,s),t=!0)},o(s){pe(e.$$.fragment,s),t=!1},d(s){r[35](null),ot(e,s)}}}function jx(r){let e;const t=r[32]["tab-indicator"],n=ar(t,r,r[37],Uu);return{c(){n&&n.c()},m(i,s){n&&n.m(i,s),e=!0},p(i,s){n&&n.p&&(!e||s[1]&64)&&lr(n,t,i,i[37],e?or(t,i[37],s,Wx):cr(i[37]),Uu)},i(i){e||(le(n,i),e=!0)},o(i){pe(n,i),e=!1},d(i){n&&n.d(i)}}}function Yx(r){let e,t,n,i,s,o,a,l,c,u;const f=r[32].default,d=ar(f,r,r[37],null);let m=r[6]&&Bu(r),g=[{class:n=gt({[r[9]]:!0,"mdc-tab__content":!0})},qt(r[25],"content$")],h={};for(let _=0;_<g.length;_+=1)h=Be(h,g[_]);let p=!r[6]&&Vu(r);return{c(){e=_e("span"),d&&d.c(),t=Ne(),m&&m.c(),s=Ne(),p&&p.c(),o=Ne(),a=_e("span"),St(e,h),me(a,"class","mdc-tab__ripple")},m(_,v){ye(_,e,v),d&&d.m(e,null),ge(e,t),m&&m.m(e,null),r[34](e),ye(_,s,v),p&&p.m(_,v),ye(_,o,v),ye(_,a,v),l=!0,c||(u=tt(i=Kn.call(null,e,r[8])),c=!0)},p(_,v){d&&d.p&&(!l||v[1]&64)&&lr(d,f,_,_[37],l?or(f,_[37],v,null):cr(_[37]),null),_[6]?m?(m.p(_,v),v[0]&64&&le(m,1)):(m=Bu(_),m.c(),le(m,1),m.m(e,null)):m&&(ft(),pe(m,1,1,()=>{m=null}),dt()),St(e,h=Dt(g,[(!l||v[0]&512&&n!==(n=gt({[_[9]]:!0,"mdc-tab__content":!0})))&&{class:n},v[0]&33554432&&qt(_[25],"content$")])),i&&wt(i.update)&&v[0]&256&&i.update.call(null,_[8]),_[6]?p&&(ft(),pe(p,1,1,()=>{p=null}),dt()):p?(p.p(_,v),v[0]&64&&le(p,1)):(p=Vu(_),p.c(),le(p,1),p.m(o.parentNode,o))},i(_){l||(le(d,_),le(m),le(p),l=!0)},o(_){pe(d,_),pe(m),pe(p),l=!1},d(_){_&&xe(e),d&&d.d(_),m&&m.d(),r[34](null),_&&xe(s),p&&p.d(_),_&&xe(o),_&&xe(a),c=!1,u()}}}function Kx(r){let e,t,n;const i=[{tag:r[11]},{use:[[Fu,{ripple:r[3],unbounded:!1,addClass:r[21],removeClass:r[22],addStyle:r[23]}],r[20],...r[0]]},{class:gt({[r[1]]:!0,"mdc-tab":!0,"mdc-tab--active":r[18],"mdc-tab--stacked":r[4],"mdc-tab--min-width":r[5],...r[15]})},{style:Object.entries(r[16]).map(Gu).concat([r[2]]).join(" ")},{role:"tab"},{"aria-selected":r[18]?"true":"false"},{tabindex:r[18]||r[19]?"0":"-1"},{href:r[7]},r[17],Ri(r[25],["content$","tabIndicator$"])];var s=r[10];function o(a){let l={$$slots:{default:[Yx]},$$scope:{ctx:a}};for(let c=0;c<i.length;c+=1)l=Be(l,i[c]);return{props:l}}return s&&(e=Yr(s,o(r)),r[36](e),e.$on("click",r[24])),{c(){e&&pt(e.$$.fragment),t=yn()},m(a,l){e&&at(e,a,l),ye(a,t,l),n=!0},p(a,l){const c=l[0]&50301119?Dt(i,[l[0]&2048&&{tag:a[11]},l[0]&15728649&&{use:[[Fu,{ripple:a[3],unbounded:!1,addClass:a[21],removeClass:a[22],addStyle:a[23]}],a[20],...a[0]]},l[0]&294962&&{class:gt({[a[1]]:!0,"mdc-tab":!0,"mdc-tab--active":a[18],"mdc-tab--stacked":a[4],"mdc-tab--min-width":a[5],...a[15]})},l[0]&65540&&{style:Object.entries(a[16]).map(Gu).concat([a[2]]).join(" ")},i[4],l[0]&262144&&{"aria-selected":a[18]?"true":"false"},l[0]&786432&&{tabindex:a[18]||a[19]?"0":"-1"},l[0]&128&&{href:a[7]},l[0]&131072&&tr(a[17]),l[0]&33554432&&tr(Ri(a[25],["content$","tabIndicator$"]))]):{};if(l[0]&33841984|l[1]&64&&(c.$$scope={dirty:l,ctx:a}),l[0]&1024&&s!==(s=a[10])){if(e){ft();const u=e;pe(u.$$.fragment,1,0,()=>{ot(u,1)}),dt()}s?(e=Yr(s,o(a)),a[36](e),e.$on("click",a[24]),pt(e.$$.fragment),le(e.$$.fragment,1),at(e,t.parentNode,t)):e=null}else s&&e.$set(c)},i(a){n||(e&&le(e.$$.fragment,a),n=!0)},o(a){e&&pe(e.$$.fragment,a),n=!1},d(a){r[36](null),a&&xe(t),e&&ot(e,a)}}}const Gu=([r,e])=>`${r}: ${e};`;function Zx(r,e,t){const n=["use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","activate","deactivate","focus","getElement"];let i=_n(e,n),{$$slots:s={},$$scope:o}=e;const a=fs(bn());let{use:l=[]}=e,{class:c=""}=e,{style:u=""}=e,{tab:f}=e,{ripple:d=!0}=e,{stacked:m=!1}=e,{minWidth:g=!1}=e,{indicatorSpanOnlyContent:h=!1}=e,{href:p=void 0}=e,{content$use:_=[]}=e,{content$class:v=""}=e,w,x,M,b,S={},y={},T={},I=Fs("SMUI:tab:focusOnActivate"),O=f===Fs("SMUI:tab:initialActive"),j=!1,{component:Y=Nu}=e,{tag:F=Y===Nu?p==null?"button":"a":void 0}=e;if(za("SMUI:label:context","tab"),za("SMUI:icon:context","tab"),!f)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");On(()=>{t(31,x=new Nx({setAttr:N,addClass:L,removeClass:R,hasClass:U,activateIndicator:ie=>b.activate(ie),deactivateIndicator:()=>b.deactivate(),notifyInteracted:()=>La(ne(),"SMUITab:interacted",{tabId:f},void 0,!0),getOffsetLeft:()=>ne().offsetLeft,getOffsetWidth:()=>ne().offsetWidth,getContentOffsetLeft:()=>M.offsetLeft,getContentOffsetWidth:()=>M.offsetWidth,focus:ee}));const W={tabId:f,get element(){return ne()},get active(){return O},forceAccessible(ie){t(19,j=ie)},computeIndicatorClientRect:()=>b.computeContentClientRect(),computeDimensions:()=>x.computeDimensions(),focus:ee,activate:Q,deactivate:Z};return La(ne(),"SMUITab:mount",W),x.init(),()=>{La(ne(),"SMUITab:unmount",W),x.destroy()}});function U(W){return W in S?S[W]:ne().classList.contains(W)}function L(W){S[W]||t(15,S[W]=!0,S)}function R(W){(!(W in S)||S[W])&&t(15,S[W]=!1,S)}function D(W,ie){y[W]!=ie&&(ie===""||ie==null?(delete y[W],t(16,y)):t(16,y[W]=ie,y))}function N(W,ie){T[W]!==ie&&t(17,T[W]=ie,T)}function V(W){!W.defaultPrevented&&x&&x.handleClick()}function Q(W,ie){t(18,O=!0),ie&&x.setFocusOnActivate(!1),x.activate(W),ie&&x.setFocusOnActivate(I)}function Z(){t(18,O=!1),x.deactivate()}function ee(){ne().focus()}function ne(){return w.getElement()}function fe(W){_t[W?"unshift":"push"](()=>{b=W,t(14,b)})}function X(W){_t[W?"unshift":"push"](()=>{M=W,t(13,M)})}function Ke(W){_t[W?"unshift":"push"](()=>{b=W,t(14,b)})}function J(W){_t[W?"unshift":"push"](()=>{w=W,t(12,w)})}return r.$$set=W=>{e=Be(Be({},e),os(W)),t(25,i=_n(e,n)),"use"in W&&t(0,l=W.use),"class"in W&&t(1,c=W.class),"style"in W&&t(2,u=W.style),"tab"in W&&t(26,f=W.tab),"ripple"in W&&t(3,d=W.ripple),"stacked"in W&&t(4,m=W.stacked),"minWidth"in W&&t(5,g=W.minWidth),"indicatorSpanOnlyContent"in W&&t(6,h=W.indicatorSpanOnlyContent),"href"in W&&t(7,p=W.href),"content$use"in W&&t(8,_=W.content$use),"content$class"in W&&t(9,v=W.content$class),"component"in W&&t(10,Y=W.component),"tag"in W&&t(11,F=W.tag),"$$scope"in W&&t(37,o=W.$$scope)},r.$$.update=()=>{r.$$.dirty[1]&1&&x&&x.setFocusOnActivate(I)},[l,c,u,d,m,g,h,p,_,v,Y,F,w,M,b,S,y,T,O,j,a,L,R,D,V,i,f,Q,Z,ee,ne,x,s,fe,X,Ke,J,o]}class Jx extends zt{constructor(e){super(),Nt(this,e,Zx,Kx,lt,{use:0,class:1,style:2,tab:26,ripple:3,stacked:4,minWidth:5,indicatorSpanOnlyContent:6,href:7,content$use:8,content$class:9,component:10,tag:11,activate:27,deactivate:28,focus:29,getElement:30},null,[-1,-1])}get activate(){return this.$$.ctx[27]}get deactivate(){return this.$$.ctx[28]}get focus(){return this.$$.ctx[29]}get getElement(){return this.$$.ctx[30]}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vd={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},Qx={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ol=function(){function r(e){this.adapter=e}return r}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $x=function(r){Fn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),s=this.clampScrollValue(n.right-t);return{finalScrollPosition:s,scrollDelta:s-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}(Ol);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ey=function(r){Fn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}(Ol);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ty=function(r){Fn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}(Ol);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ny=function(r){Fn(e,r);function e(t){var n=r.call(this,Bt(Bt({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return vd},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Qx},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],s=fx(i.split(","),6);s[0],s[1],s[2],s[3];var o=s[4];return s[5],parseFloat(o)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),s=i-n;this.animate({finalScrollPosition:i,scrollDelta:s})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,s=this.clampScrollValue(i),o=s-n;return{finalScrollPosition:s,scrollDelta:o}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new ey(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),s=this.adapter.computeScrollContentClientRect(),o=Math.round(s.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),o===n?new ty(this.adapter):new $x(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(us);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Xo;function iy(r,e){if(e===void 0&&(e=!0),e&&typeof Xo<"u")return Xo;var t=r.createElement("div");t.classList.add(vd.SCROLL_TEST),r.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return r.body.removeChild(t),e&&(Xo=n),n}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var rt={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Ln={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var fr=new Set;fr.add(rt.ARROW_LEFT_KEY);fr.add(rt.ARROW_RIGHT_KEY);fr.add(rt.END_KEY);fr.add(rt.HOME_KEY);fr.add(rt.ENTER_KEY);fr.add(rt.SPACE_KEY);var dr=new Map;dr.set(Ln.ARROW_LEFT_KEYCODE,rt.ARROW_LEFT_KEY);dr.set(Ln.ARROW_RIGHT_KEYCODE,rt.ARROW_RIGHT_KEY);dr.set(Ln.END_KEYCODE,rt.END_KEY);dr.set(Ln.HOME_KEYCODE,rt.HOME_KEY);dr.set(Ln.ENTER_KEYCODE,rt.ENTER_KEY);dr.set(Ln.SPACE_KEYCODE,rt.SPACE_KEY);var ry=function(r){Fn(e,r);function e(t){var n=r.call(this,Bt(Bt({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ln},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0)if(this.isActivationKey(n)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var s=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(s);else{var i=this.determineTargetFromKey(s,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),s=this.adapter.getTabListLength()-1,o=n===rt.END_KEY,a=n===rt.ARROW_LEFT_KEY&&!i||n===rt.ARROW_RIGHT_KEY&&i,l=n===rt.ARROW_RIGHT_KEY&&!i||n===rt.ARROW_LEFT_KEY&&i,c=t;return o?c=s:a?c-=1:l?c+=1:c=0,c<0?c=s:c>s&&(c=0),c},e.prototype.calculateScrollIncrement=function(t,n,i,s){var o=this.adapter.getTabDimensionsAtIndex(n),a=o.contentLeft-i-s,l=o.contentRight-i,c=l-Ln.EXTRA_SCROLL_AMOUNT,u=a+Ln.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(c,0):Math.max(u,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,s,o){var a=this.adapter.getTabDimensionsAtIndex(n),l=o-a.contentLeft-i,c=o-a.contentRight-i-s,u=c+Ln.EXTRA_SCROLL_AMOUNT,f=l-Ln.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(u,0):Math.min(f,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,s){var o=n.rootLeft-i,a=n.rootRight-i-s,l=o+a,c=o<0||l<0,u=a>0||l>0;return c?t-1:u?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,s,o){var a=o-n.rootLeft-s-i,l=o-n.rootRight-i,c=a+l,u=a>0||c>0,f=l<0||c<0;return u?t+1:f?t-1:-1},e.prototype.getKeyFromEvent=function(t){return fr.has(t.key)?t.key:dr.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===rt.SPACE_KEY||t===rt.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),s=this.adapter.getTabDimensionsAtIndex(t),o=this.findAdjacentTabIndexClosestToEdge(t,s,n,i);if(this.indexIsInRange(o)){var a=this.calculateScrollIncrement(t,o,n,i);this.adapter.incrementScroll(a)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),s=this.adapter.getTabDimensionsAtIndex(t),o=this.adapter.getScrollContentWidth(),a=this.findAdjacentTabIndexClosestToEdgeRTL(t,s,n,i,o);if(this.indexIsInRange(a)){var l=this.calculateScrollIncrementRTL(t,a,n,i,o);this.adapter.incrementScroll(l)}},e}(us);function sy(r){let e,t,n,i,s,o,a,l,c,u,f,d,m,g;const h=r[23].default,p=ar(h,r,r[22],null);let _=[{class:i=gt({[r[6]]:!0,"mdc-tab-scroller__scroll-content":!0})},{style:s=Object.entries(r[14]).map(Hu).join(" ")},qt(r[16],"scrollContent$")],v={};for(let S=0;S<_.length;S+=1)v=Be(v,_[S]);let w=[{class:a=gt({[r[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...r[12]})},{style:l=Object.entries(r[13]).map(Wu).join(" ")},qt(r[16],"scrollArea$")],x={};for(let S=0;S<w.length;S+=1)x=Be(x,w[S]);let M=[{class:u=gt({[r[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":r[2]==="start","mdc-tab-scroller--align-end":r[2]==="end","mdc-tab-scroller--align-center":r[2]==="center",...r[11]})},Ri(r[16],["scrollArea$","scrollContent$"])],b={};for(let S=0;S<M.length;S+=1)b=Be(b,M[S]);return{c(){e=_e("div"),t=_e("div"),n=_e("div"),p&&p.c(),St(n,v),St(t,x),St(e,b)},m(S,y){ye(S,e,y),ge(e,t),ge(t,n),p&&p.m(n,null),r[24](n),r[26](t),r[32](e),d=!0,m||(g=[tt(o=Kn.call(null,n,r[5])),ht(n,"transitionend",r[25]),tt(c=Kn.call(null,t,r[3])),ht(t,"wheel",r[27],{passive:!0}),ht(t,"touchstart",r[28],{passive:!0}),ht(t,"pointerdown",r[29]),ht(t,"mousedown",r[30]),ht(t,"keydown",r[31]),tt(f=Kn.call(null,e,r[0])),tt(r[15].call(null,e))],m=!0)},p(S,y){p&&p.p&&(!d||y[0]&4194304)&&lr(p,h,S,S[22],d?or(h,S[22],y,null):cr(S[22]),null),St(n,v=Dt(_,[(!d||y[0]&64&&i!==(i=gt({[S[6]]:!0,"mdc-tab-scroller__scroll-content":!0})))&&{class:i},(!d||y[0]&16384&&s!==(s=Object.entries(S[14]).map(Hu).join(" ")))&&{style:s},y[0]&65536&&qt(S[16],"scrollContent$")])),o&&wt(o.update)&&y[0]&32&&o.update.call(null,S[5]),St(t,x=Dt(w,[(!d||y[0]&4112&&a!==(a=gt({[S[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...S[12]})))&&{class:a},(!d||y[0]&8192&&l!==(l=Object.entries(S[13]).map(Wu).join(" ")))&&{style:l},y[0]&65536&&qt(S[16],"scrollArea$")])),c&&wt(c.update)&&y[0]&8&&c.update.call(null,S[3]),St(e,b=Dt(M,[(!d||y[0]&2054&&u!==(u=gt({[S[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":S[2]==="start","mdc-tab-scroller--align-end":S[2]==="end","mdc-tab-scroller--align-center":S[2]==="center",...S[11]})))&&{class:u},y[0]&65536&&Ri(S[16],["scrollArea$","scrollContent$"])])),f&&wt(f.update)&&y[0]&1&&f.update.call(null,S[0])},i(S){d||(le(p,S),d=!0)},o(S){pe(p,S),d=!1},d(S){S&&xe(e),p&&p.d(S),r[24](null),r[26](null),r[32](null),m=!1,Ft(g)}}}const Hu=([r,e])=>`${r}: ${e};`,Wu=([r,e])=>`${r}: ${e};`;function ay(r,e,t){const n=["use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"];let i=_n(e,n),{$$slots:s={},$$scope:o}=e;const{matches:a}=gd,l=fs(bn());let{use:c=[]}=e,{class:u=""}=e,{align:f=void 0}=e,{scrollArea$use:d=[]}=e,{scrollArea$class:m=""}=e,{scrollContent$use:g=[]}=e,{scrollContent$class:h=""}=e,p,_,v,w,x={},M={},b={},S={};On(()=>(t(8,_=new ny({eventTargetMatchesSelector:(J,W)=>a(J,W),addClass:y,removeClass:T,addScrollAreaClass:I,setScrollAreaStyleProperty:O,setScrollContentStyleProperty:j,getScrollContentStyleValue:Y,setScrollAreaScrollLeft:J=>t(9,v.scrollLeft=J,v),getScrollAreaScrollLeft:()=>v.scrollLeft,getScrollContentOffsetWidth:()=>w.offsetWidth,getScrollAreaOffsetWidth:()=>v.offsetWidth,computeScrollAreaClientRect:()=>v.getBoundingClientRect(),computeScrollContentClientRect:()=>w.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>iy(document)})),_.init(),()=>{_.destroy()}));function y(J){x[J]||t(11,x[J]=!0,x)}function T(J){(!(J in x)||x[J])&&t(11,x[J]=!1,x)}function I(J){M[J]||t(12,M[J]=!0,M)}function O(J,W){b[J]!=W&&(W===""||W==null?(delete b[J],t(13,b)):t(13,b[J]=W,b))}function j(J,W){S[J]!=W&&(W===""||W==null?(delete S[J],t(14,S)):t(14,S[J]=W,S))}function Y(J){return J in S?S[J]:getComputedStyle(w).getPropertyValue(J)}function F(){return _.getScrollPosition()}function U(){return w.offsetWidth}function L(J){_.incrementScroll(J)}function R(J){_.scrollTo(J)}function D(){return p}function N(J){_t[J?"unshift":"push"](()=>{w=J,t(10,w)})}const V=J=>_&&_.handleTransitionEnd(J);function Q(J){_t[J?"unshift":"push"](()=>{v=J,t(9,v)})}const Z=()=>_&&_.handleInteraction(),ee=()=>_&&_.handleInteraction(),ne=()=>_&&_.handleInteraction(),fe=()=>_&&_.handleInteraction(),X=()=>_&&_.handleInteraction();function Ke(J){_t[J?"unshift":"push"](()=>{p=J,t(7,p)})}return r.$$set=J=>{e=Be(Be({},e),os(J)),t(16,i=_n(e,n)),"use"in J&&t(0,c=J.use),"class"in J&&t(1,u=J.class),"align"in J&&t(2,f=J.align),"scrollArea$use"in J&&t(3,d=J.scrollArea$use),"scrollArea$class"in J&&t(4,m=J.scrollArea$class),"scrollContent$use"in J&&t(5,g=J.scrollContent$use),"scrollContent$class"in J&&t(6,h=J.scrollContent$class),"$$scope"in J&&t(22,o=J.$$scope)},[c,u,f,d,m,g,h,p,_,v,w,x,M,b,S,l,i,F,U,L,R,D,o,s,N,V,Q,Z,ee,ne,fe,X,Ke]}class oy extends zt{constructor(e){super(),Nt(this,e,ay,sy,lt,{use:0,class:1,align:2,scrollArea$use:3,scrollArea$class:4,scrollContent$use:5,scrollContent$class:6,getScrollPosition:17,getScrollContentWidth:18,incrementScroll:19,scrollTo:20,getElement:21},null,[-1,-1])}get getScrollPosition(){return this.$$.ctx[17]}get getScrollContentWidth(){return this.$$.ctx[18]}get incrementScroll(){return this.$$.ctx[19]}get scrollTo(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}}function Xu(r,e,t){const n=r.slice();return n[28]=e[t],n}const ly=r=>({tab:r&4}),qu=r=>({tab:r[28]});function ju(r,e){let t,n;const i=e[20].default,s=ar(i,e,e[23],qu);return{key:r,first:null,c(){t=yn(),s&&s.c(),this.first=t},m(o,a){ye(o,t,a),s&&s.m(o,a),n=!0},p(o,a){e=o,s&&s.p&&(!n||a&8388612)&&lr(s,i,e,e[23],n?or(i,e[23],a,ly):cr(e[23]),qu)},i(o){n||(le(s,o),n=!0)},o(o){pe(s,o),n=!1},d(o){o&&xe(t),s&&s.d(o)}}}function cy(r){let e=[],t=new Map,n,i,s=r[2];const o=a=>a[3](a[28]);for(let a=0;a<s.length;a+=1){let l=Xu(r,s,a),c=o(l);t.set(c,e[a]=ju(c,l))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=yn()},m(a,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(a,l);ye(a,n,l),i=!0},p(a,l){l&8388620&&(s=a[2],ft(),e=Xh(e,l,o,1,a,s,t,n.parentNode,Wh,ju,n,Xu),dt())},i(a){if(!i){for(let l=0;l<s.length;l+=1)le(e[l]);i=!0}},o(a){for(let l=0;l<e.length;l+=1)pe(e[l]);i=!1},d(a){for(let l=0;l<e.length;l+=1)e[l].d(a);a&&xe(n)}}}function uy(r){let e,t,n,i,s,o,a;const l=[qt(r[10],"tabScroller$")];let c={$$slots:{default:[cy]},$$scope:{ctx:r}};for(let d=0;d<l.length;d+=1)c=Be(c,l[d]);t=new oy({props:c}),r[21](t);let u=[{class:n=gt({[r[1]]:!0,"mdc-tab-bar":!0})},{role:"tablist"},Ri(r[10],["tabScroller$"])],f={};for(let d=0;d<u.length;d+=1)f=Be(f,u[d]);return{c(){e=_e("div"),pt(t.$$.fragment),St(e,f)},m(d,m){ye(d,e,m),at(t,e,null),r[22](e),s=!0,o||(a=[tt(i=Kn.call(null,e,r[0])),tt(r[7].call(null,e)),ht(e,"SMUITab:mount",r[8]),ht(e,"SMUITab:unmount",r[9]),ht(e,"SMUITab:interacted",function(){wt(r[4]&&r[4].handleTabInteraction.bind(r[4]))&&(r[4]&&r[4].handleTabInteraction.bind(r[4])).apply(this,arguments)}),ht(e,"keydown",function(){wt(r[4]&&r[4].handleKeyDown.bind(r[4]))&&(r[4]&&r[4].handleKeyDown.bind(r[4])).apply(this,arguments)})],o=!0)},p(d,[m]){r=d;const g=m&1024?Dt(l,[tr(qt(r[10],"tabScroller$"))]):{};m&8388612&&(g.$$scope={dirty:m,ctx:r}),t.$set(g),St(e,f=Dt(u,[(!s||m&2&&n!==(n=gt({[r[1]]:!0,"mdc-tab-bar":!0})))&&{class:n},{role:"tablist"},m&1024&&Ri(r[10],["tabScroller$"])])),i&&wt(i.update)&&m&1&&i.update.call(null,r[0])},i(d){s||(le(t.$$.fragment,d),s=!0)},o(d){pe(t.$$.fragment,d),s=!1},d(d){d&&xe(e),r[21](null),ot(t),r[22](null),o=!1,Ft(a)}}}function fy(r,e,t){const n=["use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","scrollIntoView","getElement"];let i=_n(e,n),{$$slots:s={},$$scope:o}=e;const a=fs(bn());let{use:l=[]}=e,{class:c=""}=e,{tabs:u=[]}=e,{key:f=L=>L}=e,{focusOnActivate:d=!0}=e,{focusOnProgrammatic:m=!1}=e,{useAutomaticActivation:g=!0}=e,{active:h=void 0}=e,p,_,v,w=u.indexOf(h),x={},M=new WeakMap,b=!1;za("SMUI:tab:focusOnActivate",d),za("SMUI:tab:initialActive",h),On(()=>(t(4,_=new ry({scrollTo:L=>v.scrollTo(L),incrementScroll:L=>v.incrementScroll(L),getScrollPosition:()=>v.getScrollPosition(),getScrollContentWidth:()=>v.getScrollContentWidth(),getOffsetWidth:()=>Y().offsetWidth,isRTL:()=>getComputedStyle(Y()).getPropertyValue("direction")==="rtl",setActiveTab:L=>{t(11,h=u[L]),t(17,w=L),_.activateTab(L)},activateTabAtIndex:(L,R)=>{var D;return(D=T(u[L]))===null||D===void 0?void 0:D.activate(R,b)},deactivateTabAtIndex:L=>{var R;return(R=T(u[L]))===null||R===void 0?void 0:R.deactivate()},focusTabAtIndex:L=>{var R;return(R=T(u[L]))===null||R===void 0?void 0:R.focus()},getTabIndicatorClientRectAtIndex:L=>{var R,D;return(D=(R=T(u[L]))===null||R===void 0?void 0:R.computeIndicatorClientRect())!==null&&D!==void 0?D:new DOMRect},getTabDimensionsAtIndex:L=>{var R,D;return(D=(R=T(u[L]))===null||R===void 0?void 0:R.computeDimensions())!==null&&D!==void 0?D:{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var L;for(let R=0;R<u.length;R++)if(!((L=T(u[R]))===null||L===void 0)&&L.active)return R;return-1},getFocusedTabIndex:()=>{const L=u.map(D=>{var N;return(N=T(D))===null||N===void 0?void 0:N.element}),R=document.activeElement;return L.indexOf(R)},getIndexOfTabById:L=>u.indexOf(L),getTabListLength:()=>u.length,notifyTabActivated:L=>La(Y(),"SMUITabBar:activated",{index:L},void 0,!0)})),_.init(),()=>{_.destroy()}));function S(L){const R=L.detail;I(R.tabId,R)}function y(L){const R=L.detail;O(R.tabId)}function T(L){return L instanceof Object?M.get(L):x[L]}function I(L,R){L instanceof Object?(M.set(L,R),t(19,M)):(t(18,x[L]=R,x),t(18,x))}function O(L){L instanceof Object?(M.delete(L),t(19,M)):(delete x[L],t(18,x))}function j(L){_.scrollIntoView(L)}function Y(){return p}function F(L){_t[L?"unshift":"push"](()=>{v=L,t(6,v)})}function U(L){_t[L?"unshift":"push"](()=>{p=L,t(5,p)})}return r.$$set=L=>{e=Be(Be({},e),os(L)),t(10,i=_n(e,n)),"use"in L&&t(0,l=L.use),"class"in L&&t(1,c=L.class),"tabs"in L&&t(2,u=L.tabs),"key"in L&&t(3,f=L.key),"focusOnActivate"in L&&t(12,d=L.focusOnActivate),"focusOnProgrammatic"in L&&t(13,m=L.focusOnProgrammatic),"useAutomaticActivation"in L&&t(14,g=L.useAutomaticActivation),"active"in L&&t(11,h=L.active),"$$scope"in L&&t(23,o=L.$$scope)},r.$$.update=()=>{if(r.$$.dirty&141332&&h!==u[w]&&(t(17,w=u.indexOf(h)),_&&(b=!m,_.activateTab(w),b=!1)),r.$$.dirty&917508&&u.length){const L=u[0]instanceof Object?M.get(u[0]):x[u[0]];L&&L.forceAccessible(w===-1)}r.$$.dirty&16400&&_&&_.setUseAutomaticActivation(g)},[l,c,u,f,_,p,v,a,S,y,i,h,d,m,g,j,Y,w,x,M,s,F,U,o]}class dy extends zt{constructor(e){super(),Nt(this,e,fy,uy,lt,{use:0,class:1,tabs:2,key:3,focusOnActivate:12,focusOnProgrammatic:13,useAutomaticActivation:14,active:11,scrollIntoView:15,getElement:16})}get scrollIntoView(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}function Yu(r,e,t){const n=r.slice();return n[9]=e[t],n[11]=t,n}function hy(r){let e,t=r[12]+"",n;return{c(){e=_e("span"),n=Wn(t),me(e,"class","tab-label svelte-th5214")},m(i,s){ye(i,e,s),ge(e,n)},p(i,s){s&4096&&t!==(t=i[12]+"")&&jr(n,t)},d(i){i&&xe(e)}}}function py(r){let e,t;return e=new Jx({props:{class:"home_p2-tab",tab:r[12],minWidth:!0,$$slots:{default:[hy]},$$scope:{ctx:r}}}),e.$on("click",r[4]),{c(){pt(e.$$.fragment)},m(n,i){at(e,n,i),t=!0},p(n,i){const s={};i&4096&&(s.tab=n[12]),i&12288&&(s.$$scope={dirty:i,ctx:n}),e.$set(s)},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){pe(e.$$.fragment,n),t=!1},d(n){ot(e,n)}}}function my(r){let e,t,n=r[9].skill+"",i,s,o,a=r[9].score+"",l,c,u,f;return{c(){e=_e("div"),t=_e("div"),i=Wn(n),s=Ne(),o=_e("div"),l=Wn(a),c=Ne(),me(t,"class","skill-name svelte-th5214"),me(o,"class","skill-score svelte-th5214"),me(e,"class","skills-list-item svelte-th5214")},m(d,m){ye(d,e,m),ge(e,t),ge(t,i),ge(e,s),ge(e,o),ge(o,l),ge(e,c),f=!0},p(d,m){(!f||m&2)&&n!==(n=d[9].skill+"")&&jr(i,n),(!f||m&2)&&a!==(a=d[9].score+"")&&jr(l,a)},i(d){f||(on(()=>{f&&(u||(u=xt(e,Ot,{delay:50,duration:50*r[11]},!0)),u.run(1))}),f=!0)},o(d){u||(u=xt(e,Ot,{delay:50,duration:50*r[11]},!1)),u.run(0),f=!1},d(d){d&&xe(e),d&&u&&u.end()}}}function gy(r){let e,t,n=r[9].tab+"",i,s,o,a;return{c(){e=_e("div"),t=_e("div"),i=Wn(n),s=Ne(),me(t,"class","skill-tab"),me(e,"class","skills-list-tab svelte-th5214")},m(l,c){ye(l,e,c),ge(e,t),ge(t,i),ge(e,s),a=!0},p(l,c){(!a||c&2)&&n!==(n=l[9].tab+"")&&jr(i,n)},i(l){a||(on(()=>{a&&(o||(o=xt(e,Ot,{delay:50,duration:50*r[11]},!0)),o.run(1))}),a=!0)},o(l){o||(o=xt(e,Ot,{delay:50,duration:50*r[11]},!1)),o.run(0),a=!1},d(l){l&&xe(e),l&&o&&o.end()}}}function Ku(r){let e,t,n,i;const s=[gy,my],o=[];function a(l,c){return l[9].tab?0:1}return e=a(r),t=o[e]=s[e](r),{c(){t.c(),n=yn()},m(l,c){o[e].m(l,c),ye(l,n,c),i=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(ft(),pe(o[u],1,1,()=>{o[u]=null}),dt(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),le(t,1),t.m(n.parentNode,n))},i(l){i||(le(t),i=!0)},o(l){pe(t),i=!1},d(l){o[e].d(l),l&&xe(n)}}}function Zu(r){let e,t,n=r[1],i=[];for(let o=0;o<n.length;o+=1)i[o]=Ku(Yu(r,n,o));const s=o=>pe(i[o],1,1,()=>{i[o]=null});return{c(){e=_e("div");for(let o=0;o<i.length;o+=1)i[o].c();me(e,"class","skills-list svelte-th5214")},m(o,a){ye(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t=!0},p(o,a){if(a&2){n=o[1];let l;for(l=0;l<n.length;l+=1){const c=Yu(o,n,l);i[l]?(i[l].p(c,a),le(i[l],1)):(i[l]=Ku(c),i[l].c(),le(i[l],1),i[l].m(e,null))}for(ft(),l=n.length;l<i.length;l+=1)s(l);dt()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)le(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)pe(i[a]);t=!1},d(o){o&&xe(e),Df(i,o)}}}function _y(r){let e,t,n,i,s=r[1],o,a;function l(f){r[7](f)}let c={class:"home_p2-tabbar",tabs:r[3],$$slots:{default:[py,({tab:f})=>({12:f}),({tab:f})=>f?4096:0]},$$scope:{ctx:r}};r[0]!==void 0&&(c.active=r[0]),t=new dy({props:c}),_t.push(()=>qh(t,"active",l));let u=Zu(r);return{c(){e=_e("div"),pt(t.$$.fragment),i=Ne(),u.c(),me(e,"class","page page_1 svelte-th5214")},m(f,d){ye(f,e,d),at(t,e,null),ge(e,i),u.m(e,null),a=!0},p(f,[d]){r=f;const m={};d&12288&&(m.$$scope={dirty:d,ctx:r}),!n&&d&1&&(n=!0,m.active=r[0],kh(()=>n=!1)),t.$set(m),d&2&&lt(s,s=r[1])?(ft(),pe(u,1,1,$e),dt(),u=Zu(r),u.c(),le(u,1),u.m(e,null)):u.p(r,d)},i(f){a||(le(t.$$.fragment,f),le(u),on(()=>{a&&(o||(o=xt(e,Ot,{delay:r[2],duration:Et},!0)),o.run(1))}),a=!0)},o(f){pe(t.$$.fragment,f),pe(u),o||(o=xt(e,Ot,{delay:r[2],duration:Et},!1)),o.run(0),a=!1},d(f){f&&xe(e),ot(t),u.d(f),f&&o&&o.end()}}}function vy(r,e,t){let n,i,s;an(r,In,d=>t(5,i=d)),an(r,Xn,d=>t(6,s=d));const o=Ra;let a=o[0],l=Ru[a],c=null;const u=()=>{const d=a;setTimeout(()=>{if(d!==a){const m=l.length;t(1,l=[]),c&&(clearTimeout(c),c=null),c=setTimeout(()=>{t(1,l=Ru[a])},m*50)}},20)};On(()=>{In.set(!1)});function f(d){a=d,t(0,a)}return r.$$.update=()=>{r.$$.dirty&96&&t(2,n=s===1?i?0:Et:0)},[a,l,n,o,u,i,s,f]}class xy extends zt{constructor(e){super(),Nt(this,e,vy,_y,lt,{})}}function yy(r){let e,t,n;return{c(){e=_e("div"),e.innerHTML='<div class="title svelte-1fokusu">欢迎来到mahiru-forever的个人空间333</div>',me(e,"class","page page_1 svelte-1fokusu")},m(i,s){ye(i,e,s),n=!0},p(i,[s]){r=i},i(i){n||(on(()=>{n&&(t||(t=xt(e,Ot,{delay:r[0],duration:Et},!0)),t.run(1))}),n=!0)},o(i){t||(t=xt(e,Ot,{delay:r[0],duration:Et},!1)),t.run(0),n=!1},d(i){i&&xe(e),i&&t&&t.end()}}}function by(r,e,t){let n,i,s;return an(r,In,o=>t(1,i=o)),an(r,Xn,o=>t(2,s=o)),On(()=>{In.set(!1)}),r.$$.update=()=>{r.$$.dirty&6&&t(0,n=s===2?i?0:Et:0)},[n,i,s]}class Sy extends zt{constructor(e){super(),Nt(this,e,by,yy,lt,{})}}function My(r){let e,t,n;return{c(){e=_e("div"),e.innerHTML='<div class="title svelte-1fokusu">欢迎来到mahiru-forever的个人空间444</div>',me(e,"class","page page_1 svelte-1fokusu")},m(i,s){ye(i,e,s),n=!0},p(i,[s]){r=i},i(i){n||(on(()=>{n&&(t||(t=xt(e,Ot,{delay:r[0],duration:Et},!0)),t.run(1))}),n=!0)},o(i){t||(t=xt(e,Ot,{delay:r[0],duration:Et},!1)),t.run(0),n=!1},d(i){i&&xe(e),i&&t&&t.end()}}}function wy(r,e,t){let n,i,s;return an(r,In,o=>t(1,i=o)),an(r,Xn,o=>t(2,s=o)),On(()=>{In.set(!1)}),r.$$.update=()=>{r.$$.dirty&6&&t(0,n=s===3?i?0:Et:0)},[n,i,s]}class Ty extends zt{constructor(e){super(),Nt(this,e,wy,My,lt,{})}}function Ey(r){let e,t,n;return{c(){e=_e("div"),e.innerHTML='<div class="title svelte-1fokusu">欢迎来到mahiru-forever的个人空间555</div>',me(e,"class","page page_1 svelte-1fokusu")},m(i,s){ye(i,e,s),n=!0},p(i,[s]){r=i},i(i){n||(on(()=>{n&&(t||(t=xt(e,Ot,{delay:r[0],duration:Et},!0)),t.run(1))}),n=!0)},o(i){t||(t=xt(e,Ot,{delay:r[0],duration:Et},!1)),t.run(0),n=!1},d(i){i&&xe(e),i&&t&&t.end()}}}function Ay(r,e,t){let n,i,s;return an(r,In,o=>t(1,i=o)),an(r,Xn,o=>t(2,s=o)),On(()=>{In.set(!1)}),r.$$.update=()=>{r.$$.dirty&6&&t(0,n=s===4?i?0:Et:0)},[n,i,s]}class Cy extends zt{constructor(e){super(),Nt(this,e,Ay,Ey,lt,{})}}const Ly=(r,e,t)=>new Li({uniforms:{uTime:{value:0},uTexture:{value:r},uDepthTexture:{value:e},uMouse:{value:t}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D uTexture;
      uniform sampler2D uDepthTexture;
      uniform vec2 uMouse;
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        vec4 color = texture2D(uTexture, vUv);
        vec4 depth = texture2D(uDepthTexture, vUv);
        float depthValue = depth.r;
        float x = vUv.x + (uMouse.x+sin(uTime))*0.01*depthValue;
        float y = vUv.y + (uMouse.y+cos(uTime))*0.01*depthValue;
        vec4 newColor = texture2D(uTexture, vec2(x, y));
        gl_FragColor = newColor;
      }
    `});function ai(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},es={duration:.5,overwrite:!1,delay:0},Fl,Pt,st,pn=1e8,Xe=1/pn,hl=Math.PI*2,Ry=hl/4,Dy=0,yd=Math.sqrt,Py=Math.cos,Iy=Math.sin,yt=function(e){return typeof e=="string"},Qe=function(e){return typeof e=="function"},hi=function(e){return typeof e=="number"},Nl=function(e){return typeof e>"u"},Jn=function(e){return typeof e=="object"},jt=function(e){return e!==!1},zl=function(){return typeof window<"u"},Ta=function(e){return Qe(e)||yt(e)},bd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},It=Array.isArray,pl=/(?:-?\.?\d|\.)+/gi,Sd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Md=/[+-]=-?[.\d]+/,wd=/[^,'"\[\]\s]+/gi,Oy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,fn,ml,Ul,ln={},ka={},Td,Ed=function(e){return(ka=sr(e,ln))&&Zt},kl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ba=function(e,t){return!t&&console.warn(e)},Ad=function(e,t){return e&&(ln[e]=t)&&ka&&(ka[e]=t)||ln},ks=function(){return 0},Fy={suppressEvents:!0,isStart:!0,kill:!1},Da={suppressEvents:!0,kill:!1},Ny={suppressEvents:!0},Bl={},Ai=[],gl={},Cd,tn={},jo={},Ju=30,Pa=[],Vl="",Gl=function(e){var t=e[0],n,i;if(Jn(t)||Qe(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Pa.length;i--&&!Pa[i].targetTest(t););n=Pa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Qd(e[i],n)))||e.splice(i,1);return e},Qi=function(e){return e._gsap||Gl(mn(e))[0]._gsap},Ld=function(e,t,n){return(n=e[t])&&Qe(n)?e[t]():Nl(n)&&e.getAttribute&&e.getAttribute(t)||n},Yt=function(e,t){return(e=e.split(",")).forEach(t)||e},et=function(e){return Math.round(e*1e5)/1e5||0},Mt=function(e){return Math.round(e*1e7)/1e7||0},Wr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},zy=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Va=function(){var e=Ai.length,t=Ai.slice(0),n,i;for(gl={},Ai.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Rd=function(e,t,n,i){Ai.length&&!Pt&&Va(),e.render(t,n,i||Pt&&t<0&&(e._initted||e._startAt)),Ai.length&&!Pt&&Va()},Dd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wd).length<2?t:yt(e)?e.trim():e},Pd=function(e){return e},xn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Uy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},sr=function(e,t){for(var n in t)e[n]=t[n];return e},Qu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Jn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ga=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Rs=function(e){var t=e.parent||je,n=e.keyframes?Uy(It(e.keyframes)):xn;if(jt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ky=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Id=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},to=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Di=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},$i=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},By=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_l=function(e,t,n,i){return e._startAt&&(Pt?e._startAt.revert(Da):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Vy=function r(e){return!e||e._ts&&r(e.parent)},$u=function(e){return e._repeat?ts(e._tTime,e=e.duration()+e._rDelay)*e:0},ts=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ha=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},no=function(e){return e._end=Mt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Xe)||0))},io=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),no(e),n._dirty||$i(n,e)),e},Od=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Ha(e.rawTime(),t),(!t._dur||Qs(0,t.totalDuration(),n)-t._tTime>Xe)&&t.render(n,!0)),$i(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Xe}},Hn=function(e,t,n,i){return t.parent&&Di(t),t._start=Mt((hi(n)?n:n||e!==je?un(e,n,t):e._time)+t._delay),t._end=Mt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Id(e,t,"_first","_last",e._sort?"_start":0),vl(t)||(e._recent=t),i||Od(e,t),e._ts<0&&io(e,e._tTime),e},Fd=function(e,t){return(ln.ScrollTrigger||kl("scrollTrigger",t))&&ln.ScrollTrigger.create(t,e)},Nd=function(e,t,n,i,s){if(Wl(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cd!==rn.frame)return Ai.push(e),e._lazy=[s,i],1},Gy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},vl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Hy=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&Gy(e)&&!(!e._initted&&vl(e))||(e._ts<0||e._dp._ts<0)&&!vl(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Qs(0,e._tDur,t),u=ts(l,a),e._yoyo&&u&1&&(o=1-o),u!==ts(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Pt||i||e._zTime===Xe||!t&&e._zTime){if(!e._initted&&Nd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Xe:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&_l(e,t,n,!0),e._onUpdate&&!n&&gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Di(e,1),!n&&!Pt&&(gn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Wy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ns=function(e,t,n,i){var s=e._repeat,o=Mt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Mt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&io(e,e._tTime=e._tDur*a),e.parent&&no(e),n||$i(e.parent,e),e},ef=function(e){return e instanceof Xt?$i(e):ns(e,e._dur)},Xy={_start:0,endTime:ks,totalDuration:ks},un=function r(e,t,n){var i=e.labels,s=e._recent||Xy,o=e.duration()>=pn?s.endTime(!1):e._dur,a,l,c;return yt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(It(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ds=function(e,t,n){var i=hi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=jt(l.vars.inherit)&&l.parent;o.immediateRender=jt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ut(t[0],o,t[s+1])},Ii=function(e,t){return e||e===0?t(e):t},Qs=function(e,t,n){return n<e?e:n>t?t:n},Rt=function(e,t){return!yt(e)||!(t=Oy.exec(e))?"":t[1]},qy=function(e,t,n){return Ii(n,function(i){return Qs(e,t,i)})},xl=[].slice,zd=function(e,t){return e&&Jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Jn(e[0]))&&!e.nodeType&&e!==fn},jy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return yt(i)&&!t||zd(i,1)?(s=n).push.apply(s,mn(i)):n.push(i)})||n},mn=function(e,t,n){return st&&!t&&st.selector?st.selector(e):yt(e)&&!n&&(ml||!is())?xl.call((t||Ul).querySelectorAll(e),0):It(e)?jy(e,n):zd(e)?xl.call(e,0):e?[e]:[]},yl=function(e){return e=mn(e)[0]||Ba("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mn(t,n.querySelectorAll?n:n===e?Ba("Invalid scope")||Ul.createElement("div"):e)}},Ud=function(e){return e.sort(function(){return .5-Math.random()})},kd=function(e){if(Qe(e))return e;var t=Jn(e)?e:{each:e},n=er(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return yt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(d,m,g){var h=(g||t).length,p=o[h],_,v,w,x,M,b,S,y,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,pn])[1],!T){for(S=-pn;S<(S=g[T++].getBoundingClientRect().left)&&T<h;);T--}for(p=o[h]=[],_=l?Math.min(T,h)*u-.5:i%T,v=T===pn?0:l?h*f/T-.5:i/T|0,S=0,y=pn,b=0;b<h;b++)w=b%T-_,x=v-(b/T|0),p[b]=M=c?Math.abs(c==="y"?x:w):yd(w*w+x*x),M>S&&(S=M),M<y&&(y=M);i==="random"&&Ud(p),p.max=S-y,p.min=y,p.v=h=(parseFloat(t.amount)||parseFloat(t.each)*(T>h?h-1:c?c==="y"?h/T:T:Math.max(T,h/T))||0)*(i==="edges"?-1:1),p.b=h<0?s-h:s,p.u=Rt(t.amount||t.each)||0,n=n&&h<0?Kd(n):n}return h=(p[d]-p.min)/p.max||0,Mt(p.b+(n?n(h):h)*p.v)+p.u}},bl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Mt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(hi(n)?0:Rt(n))}},Bd=function(e,t){var n=It(e),i,s;return!n&&Jn(e)&&(i=n=e.radius||pn,e.values?(e=mn(e.values),(s=!hi(e[0]))&&(i*=i)):e=bl(e.increment)),Ii(t,n?Qe(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pn,u=0,f=e.length,d,m;f--;)s?(d=e[f].x-a,m=e[f].y-l,d=d*d+m*m):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:o,s||u===o||hi(o)?u:u+Rt(o)}:bl(e))},Vd=function(e,t,n,i){return Ii(It(e)?!t:n===!0?!!(n=0):!i,function(){return It(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Yy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Ky=function(e,t){return function(n){return e(parseFloat(n))+(t||Rt(n))}},Zy=function(e,t,n){return Hd(e,t,0,1,n)},Gd=function(e,t,n){return Ii(n,function(i){return e[~~t(i)]})},Jy=function r(e,t,n){var i=t-e;return It(e)?Gd(e,r(0,e.length),t):Ii(n,function(s){return(i+(s-e)%i)%i+e})},Qy=function r(e,t,n){var i=t-e,s=i*2;return It(e)?Gd(e,r(0,e.length-1),t):Ii(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Bs=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?wd:pl),n+=e.substr(t,i-t)+Vd(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Hd=function(e,t,n,i,s){var o=t-e,a=i-n;return Ii(s,function(l){return n+((l-e)/o*a||0)})},$y=function r(e,t,n,i){var s=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!s){var o=yt(e),a={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(It(e)&&!It(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var h=Math.min(d,~~g);return u[h](g-h)},n=t}else i||(e=sr(It(e)?[]:{},e));if(!u){for(l in t)Hl.call(a,e,l,"get",t[l]);s=function(g){return jl(g,a)||(o?e.p:e)}}}return Ii(n,s)},tf=function(e,t,n){var i=e.labels,s=pn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},gn=function(e,t,n){var i=e.vars,s=i[t],o=st,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ai.length&&Va(),a&&(st=a),u=l?s.apply(c,l):s.call(c),st=o,u},As=function(e){return Di(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Pt),e.progress()<1&&gn(e,"onInterrupt"),e},Ur,Wd=[],Xd=function(e){if(!zl()){Wd.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Qe(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ks,render:jl,add:Hl,kill:mb,modifier:pb,rawVars:0},o={targetTest:0,get:0,getSetter:ql,aliases:{},register:0};if(is(),e!==i){if(tn[t])return;xn(i,xn(Ga(e,s),o)),sr(i.prototype,sr(s,Ga(e,o))),tn[i.prop=t]=i,e.targetTest&&(Pa.push(i),Bl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ad(t,i),e.register&&e.register(Zt,i,Kt)},We=255,Cs={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},Yo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*We+.5|0},qd=function(e,t,n){var i=e?hi(e)?[e>>16,e>>8&We,e&We]:0:Cs.black,s,o,a,l,c,u,f,d,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cs[e])i=Cs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&We,i&We,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&We,e&We]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(pl),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Yo(l+1/3,s,o),i[1]=Yo(l,s,o),i[2]=Yo(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Sd),n&&i.length<4&&(i[3]=1),i}else i=e.match(pl)||Cs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/We,o=i[1]/We,a=i[2]/We,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(m=f-d,c=u>.5?m/(2-f-d):m/(f+d),l=f===s?(o-a)/m+(o<a?6:0):f===o?(a-s)/m+2:(s-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jd=function(e){var t=[],n=[],i=-1;return e.split(Ci).forEach(function(s){var o=s.match(zr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},nf=function(e,t,n){var i="",s=(e+i).match(Ci),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=qd(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=jd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ci,"1").split(zr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ci),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Ci=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),eb=/hsl[a]?\(/,Yd=function(e){var t=e.join(" "),n;if(Ci.lastIndex=0,Ci.test(t))return n=eb.test(t),e[1]=nf(e[1],n),e[0]=nf(e[0],n,jd(e[1])),!0},Vs,rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,d,m,g=function h(p){var _=r()-i,v=p===!0,w,x,M,b;if(_>e&&(n+=_-t),i+=_,M=i-n,w=M-o,(w>0||v)&&(b=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,o+=w+(w>=s?4:s-w),x=1),v||(l=c(h)),x)for(m=0;m<a.length;m++)a[m](M,d,b,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Td&&(!ml&&zl()&&(fn=ml=window,Ul=fn.document||{},ln.gsap=Zt,(fn.gsapVersions||(fn.gsapVersions=[])).push(Zt.version),Ed(ka||fn.GreenSockGlobals||!fn.gsap&&fn||{}),u=fn.requestAnimationFrame,Wd.forEach(Xd)),l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},Vs=1,g(2))},sleep:function(){(u?fn.cancelAnimationFrame:clearTimeout)(l),Vs=0,c=ks},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,_,v){var w=_?function(x,M,b,S){p(x,M,b,S),f.remove(w)}:p;return f.remove(p),a[v?"unshift":"push"](w),is(),w},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},f}(),is=function(){return!Vs&&rn.wake()},Pe={},tb=/^[\d.\-M][\d.\-,\s]/,nb=/["']/g,ib=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(nb,"").trim():+c,i=l.substr(a+1).trim();return t},rb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},sb=function(e){var t=(e+"").split("("),n=Pe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ib(t[1])]:rb(e).split(",").map(Dd)):Pe._CE&&tb.test(e)?Pe._CE("",e):n},Kd=function(e){return function(t){return 1-e(1-t)}},Zd=function r(e,t){for(var n=e._first,i;n;)n instanceof Xt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},er=function(e,t){return e&&(Qe(e)?e:Pe[e]||sb(e))||t},hr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Yt(e,function(a){Pe[a]=ln[a]=s,Pe[o=a.toLowerCase()]=n;for(var l in s)Pe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Pe[a+"."+l]=s[l]}),s},Jd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ko=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/hl*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Iy((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Jd(a);return s=hl/s,l.config=function(c,u){return r(e,c,u)},l},Zo=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Jd(n);return i.config=function(s){return r(e,s)},i};Yt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;hr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Pe.Linear.easeNone=Pe.none=Pe.Linear.easeIn;hr("Elastic",Ko("in"),Ko("out"),Ko());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};hr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});hr("Circ",function(r){return-(yd(1-r*r)-1)});hr("Sine",function(r){return r===1?1:-Py(r*Ry)+1});hr("Back",Zo("in"),Zo("out"),Zo());Pe.SteppedEase=Pe.steps=ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Xe;return function(a){return((i*Qs(0,o,a)|0)+s)*n}}};es.ease=Pe["quad.out"];Yt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vl+=r+","+r+"Params,"});var Qd=function(e,t){this.id=Dy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ld,this.set=t?t.getSetter:ql},rs=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ns(this,+t.duration,1,1),this.data=t.data,st&&(this._ctx=st,st.data.push(this)),Vs||rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(io(this,n),!s._dp||s.parent||Od(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Hn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Xe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$u(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$u(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ts(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ha(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Xe?0:this._rts,this.totalTime(Qs(-Math.abs(this._delay),this._tDur,i),!0),no(this),By(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Hn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(jt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ha(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Ny);var i=Pt;return Pt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Pt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ef(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ef(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(un(this,n),jt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,jt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Xe)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Qe(n)?n:Pd,a=function(){var c=i.then;i.then=null,Qe(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){As(this)},r}();xn(rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var Xt=function(r){xd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=jt(n.sortChildren),je&&Hn(n.parent||je,ai(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Fd(ai(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Ds(0,arguments,this),this},t.from=function(i,s,o){return Ds(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Ds(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Rs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ut(i,s,un(this,o),1),this},t.call=function(i,s,o){return Hn(this,ut.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ut(i,o,un(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,Rs(o).immediateRender=jt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,Rs(a).immediateRender=jt(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Mt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,m,g,h,p,_,v,w,x,M,b,S;if(this!==je&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),d=u,x=this._start,w=this._ts,_=!w,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(d=Mt(u%p),u===l?(h=this._repeat,d=c):(h=~~(u/p),h&&h===u/p&&(d=c,h--),d>c&&(d=c)),M=ts(this._tTime,p),!a&&this._tTime&&M!==h&&this._tTime-M*p-this._dur<=0&&(M=h),b&&h&1&&(d=c-d,S=1),h!==M&&!this._lock){var y=b&&M&1,T=y===(b&&h&1);if(h<M&&(y=!y),a=y?0:c,this._lock=1,this.render(a||(S?0:Mt(h*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&gn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Zd(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Wy(this,Mt(a),Mt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!h&&(gn(this,"onStart"),this._tTime!==u))return this;if(d>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,o),d!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-Xe);break}}m=g}else{m=this._last;for(var I=i<0?i:d;m;){if(g=m._prev,(m._act||I<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,s,o);if(m.render(m._ts>0?(I-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(I-m._start)*m._ts,s,o||Pt&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=I?-Xe:Xe);break}}m=g}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Xe)._zTime=d>=a?1:-1,this._ts))return this._start=x,no(this),this.render(i,s,o);this._onUpdate&&!s&&gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Di(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(hi(s)||(s=un(this,s,i)),!(i instanceof rs)){if(It(i))return i.forEach(function(a){return o.add(a,s)}),this;if(yt(i))return this.addLabel(i,s);if(Qe(i))i=ut.delayedCall(0,i);else return this}return this!==i?Hn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-pn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ut?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return yt(i)?this.removeLabel(i):Qe(i)?this.killTweensOf(i):(to(this,i),i===this._recent&&(this._recent=this._last),$i(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mt(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=un(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=ut.delayedCall(0,s||ks,o);return a.data="isPause",this._hasPause=1,Hn(this,a,un(this,i))},t.removePause=function(i){var s=this._first;for(i=un(this,i);s;)s._start===i&&s.data==="isPause"&&Di(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Mi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=mn(i),l=this._first,c=hi(s),u;l;)l instanceof ut?zy(l._targets,a)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=un(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,m,g=ut.to(o,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Xe,onStart:function(){if(o.pause(),!m){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ns(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,xn({startAt:{time:un(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),tf(this,un(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),tf(this,un(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Xe)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return $i(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$i(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=pn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Hn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ns(o,o===je&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(je._ts&&(Rd(je,Ha(i,je)),Cd=rn.frame),rn.frame>=Ju){Ju+=sn.autoSleep||120;var s=je._first;if((!s||!s._ts)&&sn.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},e}(rs);xn(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});var ab=function(e,t,n,i,s,o,a){var l=new Kt(this._pt,e,t,0,1,rh,null,s),c=0,u=0,f,d,m,g,h,p,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Bs(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(qo)||[];f=qo.exec(i);)g=f[0],h=i.substring(c,f.index),m?m=(m+1)%5:h.substr(-5)==="rgba("&&(m=1),g!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:h||u===1?h:",",s:p,c:g.charAt(1)==="="?Wr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=qo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Md.test(i)||_)&&(l.e=0),this._pt=l,l},Hl=function(e,t,n,i,s,o,a,l,c,u){Qe(i)&&(i=i(s||0,e,o));var f=e[t],d=n!=="get"?n:Qe(f)?c?e[t.indexOf("set")||!Qe(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=Qe(f)?c?fb:nh:Xl,g;if(yt(i)&&(~i.indexOf("random(")&&(i=Bs(i)),i.charAt(1)==="="&&(g=Wr(d,i)+(Rt(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Sl)return!isNaN(d*i)&&i!==""?(g=new Kt(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?hb:ih,0,m),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&kl(t,i),ab.call(this,e,t,d,i,m,l||sn.stringFilter,c))},ob=function(e,t,n,i,s){if(Qe(e)&&(e=Ps(e,s,t,n,i)),!Jn(e)||e.style&&e.nodeType||It(e)||bd(e))return yt(e)?Ps(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Ps(e[a],s,t,n,i);return o},$d=function(e,t,n,i,s,o){var a,l,c,u;if(tn[e]&&(a=new tn[e]).init(s,a.rawVars?t[e]:ob(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Kt(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ur))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Mi,Sl,Wl=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,d=i.runBackwards,m=i.yoyoEase,g=i.keyframes,h=i.autoRevert,p=e._dur,_=e._startAt,v=e._targets,w=e.parent,x=w&&w.data==="nested"?w.vars.targets:v,M=e._overwrite==="auto"&&!Fl,b=e.timeline,S,y,T,I,O,j,Y,F,U,L,R,D,N;if(b&&(!g||!s)&&(s="none"),e._ease=er(s,es.ease),e._yEase=m?Kd(er(m===!0?s:m,es.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!b&&!!i.runBackwards,!b||g&&!i.stagger){if(F=v[0]?Qi(v[0]).harness:0,D=F&&i[F.prop],S=Ga(i,Bl),_&&(_._zTime<0&&_.progress(1),t<0&&d&&a&&!h?_.render(-1,!0):_.revert(d&&p?Da:Fy),_._lazy=0),o){if(Di(e._startAt=ut.set(v,xn({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!_&&jt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt||!a&&!h)&&e._startAt.revert(Da),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&p&&!_){if(t&&(a=!1),T=xn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&jt(l),immediateRender:a,stagger:0,parent:w},S),D&&(T[F.prop]=D),Di(e._startAt=ut.set(v,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Pt?e._startAt.revert(Da):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Xe,Xe);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&jt(l)||l&&!p,y=0;y<v.length;y++){if(O=v[y],Y=O._gsap||Gl(v)[y]._gsap,e._ptLookup[y]=L={},gl[Y.id]&&Ai.length&&Va(),R=x===v?y:x.indexOf(O),F&&(U=new F).init(O,D||S,e,R,x)!==!1&&(e._pt=I=new Kt(e._pt,O,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(V){L[V]=I}),U.priority&&(j=1)),!F||D)for(T in S)tn[T]&&(U=$d(T,S,e,R,O,x))?U.priority&&(j=1):L[T]=I=Hl.call(e,O,T,"get",S[T],R,x,0,i.stringFilter);e._op&&e._op[y]&&e.kill(O,e._op[y]),M&&e._pt&&(Mi=e,je.killTweensOf(O,L,e.globalTime(t)),N=!e.parent,Mi=0),e._pt&&l&&(gl[Y.id]=1)}j&&sh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,g&&t<=0&&b.render(pn,!0,!0)},lb=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(c=f[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Sl=1,e.vars[t]="+=0",Wl(e,a),Sl=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=et(n)+Rt(u.e)),u.b&&(u.b=c.s+Rt(u.b))},cb=function(e,t){var n=e[0]?Qi(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=sr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ub=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(It(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ps=function(e,t,n,i,s){return Qe(e)?e.call(t,n,i,s):yt(e)&&~e.indexOf("random(")?Bs(e):e},eh=Vl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",th={};Yt(eh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return th[r]=1});var ut=function(r){xd(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Rs(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,h=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,v=i.parent||je,w=(It(n)||bd(n)?hi(n[0]):"length"in i)?[n]:mn(n),x,M,b,S,y,T,I,O;if(a._targets=w.length?Gl(w):Ba("GSAP target "+n+" not found. https://greensock.com",!sn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||d||Ta(c)||Ta(u)){if(i=a.vars,x=a.timeline=new Xt({data:"nested",defaults:h||{},targets:v&&v.data==="nested"?v.vars.targets:w}),x.kill(),x.parent=x._dp=ai(a),x._start=0,d||Ta(c)||Ta(u)){if(S=w.length,I=d&&kd(d),Jn(d))for(y in d)~eh.indexOf(y)&&(O||(O={}),O[y]=d[y]);for(M=0;M<S;M++)b=Ga(i,th),b.stagger=0,_&&(b.yoyoEase=_),O&&sr(b,O),T=w[M],b.duration=+Ps(c,ai(a),M,T,w),b.delay=(+Ps(u,ai(a),M,T,w)||0)-a._delay,!d&&S===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),x.to(T,b,I?I(M,T,w):0),x._ease=Pe.none;x.duration()?c=u=0:a.timeline=0}else if(g){Rs(xn(x.vars.defaults,{ease:"none"})),x._ease=er(g.ease||i.ease||"none");var j=0,Y,F,U;if(It(g))g.forEach(function(L){return x.to(w,L,">")}),x.duration();else{b={};for(y in g)y==="ease"||y==="easeEach"||ub(y,g[y],b,g.easeEach);for(y in b)for(Y=b[y].sort(function(L,R){return L.t-R.t}),j=0,M=0;M<Y.length;M++)F=Y[M],U={ease:F.e,duration:(F.t-(M?Y[M-1].t:0))/100*c},U[y]=F.v,x.to(w,U,j),j+=U.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return m===!0&&!Fl&&(Mi=ai(a),je.killTweensOf(w),Mi=0),Hn(v,ai(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===Mt(v._time)&&jt(f)&&Vy(ai(a))&&v.data!=="nested")&&(a._tTime=-Xe,a.render(Math.max(0,-u)||0)),p&&Fd(ai(a),p),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Xe&&!u?l:i<Xe?0:i,d,m,g,h,p,_,v,w,x;if(!c)Hy(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=f,w=this.timeline,this._repeat){if(h=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(h*100+i,s,o);if(d=Mt(f%h),f===l?(g=this._repeat,d=c):(g=~~(f/h),g&&g===f/h&&(d=c,g--),d>c&&(d=c)),_=this._yoyo&&g&1,_&&(x=this._yEase,d=c-d),p=ts(this._tTime,h),d===a&&!o&&this._initted)return this._tTime=f,this;g!==p&&(w&&this._yEase&&Zd(w,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Mt(h*g),!0).invalidate()._lock=0))}if(!this._initted){if(Nd(this,u?i:d,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!g&&(gn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;w&&w.render(i<0?i:!d&&_?-Xe:w._dur*w._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&_l(this,i,s,o),gn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&gn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&_l(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Di(this,1),!s&&!(u&&!a)&&(f||a||_)&&(gn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){Vs||rn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wl(this,l),c=this._ease(l/this._dur),lb(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(io(this,0),this.parent||Id(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?As(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mi&&Mi.vars.overwrite!==!0)._first||As(this),this.parent&&o!==this.timeline.totalDuration()&&ns(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?mn(i):a,c=this._ptLookup,u=this._pt,f,d,m,g,h,p,_;if((!s||s==="all")&&ky(a,l))return s==="all"&&(this._pt=0),As(this);for(f=this._op=this._op||[],s!=="all"&&(yt(s)&&(h={},Yt(s,function(v){return h[v]=1}),s=h),s=cb(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],s==="all"?(f[_]=s,g=d,m={}):(m=f[_]=f[_]||{},g=s);for(h in g)p=d&&d[h],p&&((!("kill"in p.d)||p.d.kill(h)===!0)&&to(this,p,"_pt"),delete d[h]),m!=="all"&&(m[h]=1)}return this._initted&&!this._pt&&u&&As(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ds(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Ds(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return je.killTweensOf(i,s,o)},e}(rs);xn(ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yt("staggerTo,staggerFrom,staggerFromTo",function(r){ut[r]=function(){var e=new Xt,t=xl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Xl=function(e,t,n){return e[t]=n},nh=function(e,t,n){return e[t](n)},fb=function(e,t,n,i){return e[t](i.fp,n)},db=function(e,t,n){return e.setAttribute(t,n)},ql=function(e,t){return Qe(e[t])?nh:Nl(e[t])&&e.setAttribute?db:Xl},ih=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},hb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},jl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pb=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},mb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?to(this,t,"_pt"):t.dep||(n=1),t=i;return!n},gb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},sh=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Kt=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ih,this.d=l||this,this.set=c||Xl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=gb,this.m=n,this.mt=s,this.tween=i},r}();Yt(Vl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Bl[r]=1});ln.TweenMax=ln.TweenLite=ut;ln.TimelineLite=ln.TimelineMax=Xt;je=new Xt({sortChildren:!1,defaults:es,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=Yd;var ss=[],Ia={},_b=[],rf=0,Jo=function(e){return(Ia[e]||_b).map(function(t){return t()})},Ml=function(){var e=Date.now(),t=[];e-rf>2&&(Jo("matchMediaInit"),ss.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=fn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Jo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),rf=e,Jo("matchMedia"))},ah=function(){function r(t,n){this.selector=n&&yl(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Qe(n)&&(s=i,i=n,n=Qe);var o=this,a=function(){var c=st,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=yl(s)),st=o,f=i.apply(o,arguments),Qe(f)&&o._r.push(f),st=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Qe?a(o):n?o[n]=a:a},e.ignore=function(n){var i=st;st=null,n(this),st=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof rs)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=ss.indexOf(this);~a&&ss.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),vb=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Jn(n)||(n={matches:n});var o=new ah(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=fn.matchMedia(n[c]),l&&(ss.indexOf(o)<0&&ss.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ml):l.addEventListener("change",Ml)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Wa={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Xd(i)})},timeline:function(e){return new Xt(e)},getTweensOf:function(e,t){return je.getTweensOf(e,t)},getProperty:function(e,t,n,i){yt(e)&&(e=mn(e)[0]);var s=Qi(e||{}).get,o=n?Pd:Dd;return n==="native"&&(n=""),e&&(t?o((tn[t]&&tn[t].get||s)(e,t,n,i)):function(a,l,c){return o((tn[a]&&tn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=mn(e),e.length>1){var i=e.map(function(u){return Zt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=tn[t],a=Qi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Ur._pt=0,f.init(e,n?u+n:u,Ur,0,[e]),f.render(1,f),Ur._pt&&jl(1,Ur)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Zt.to(e,sr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return je.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=er(e.ease,es.ease)),Qu(es,e||{})},config:function(e){return Qu(sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!tn[a]&&!ln[a]&&Ba(t+" effect requires "+a+" plugin.")}),jo[t]=function(a,l,c){return n(mn(a),xn(l||{},s),c)},o&&(Xt.prototype[t]=function(a,l,c){return this.add(jo[t](a,Jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Pe[e]=er(t)},parseEase:function(e,t){return arguments.length?er(e,t):Pe},getById:function(e){return je.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Xt(e),i,s;for(n.smoothChildTiming=jt(e.smoothChildTiming),je.remove(n),n._dp=0,n._time=n._tTime=je._time,i=je._first;i;)s=i._next,(t||!(!i._dur&&i instanceof ut&&i.vars.onComplete===i._targets[0]))&&Hn(n,i,i._start-i._delay),i=s;return Hn(je,n,0),n},context:function(e,t){return e?new ah(e,t):st},matchMedia:function(e){return new vb(e)},matchMediaRefresh:function(){return ss.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ml()},addEventListener:function(e,t){var n=Ia[e]||(Ia[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ia[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Jy,wrapYoyo:Qy,distribute:kd,random:Vd,snap:Bd,normalize:Zy,getUnit:Rt,clamp:qy,splitColor:qd,toArray:mn,selector:yl,mapRange:Hd,pipe:Yy,unitize:Ky,interpolate:$y,shuffle:Ud},install:Ed,effects:jo,ticker:rn,updateRoot:Xt.updateRoot,plugins:tn,globalTimeline:je,core:{PropTween:Kt,globals:Ad,Tween:ut,Timeline:Xt,Animation:rs,getCache:Qi,_removeLinkedListItem:to,reverting:function(){return Pt},context:function(e){return e&&st&&(st.data.push(e),e._ctx=st),st},suppressOverwrites:function(e){return Fl=e}}};Yt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Wa[r]=ut[r]});rn.add(Xt.updateRoot);Ur=Wa.to({},{duration:0});var xb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yb=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=xb(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Qo=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(yt(s)&&(l={},Yt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}yb(a,s)}}}},Zt=Wa.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Pt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qo("roundProps",bl),Qo("modifiers"),Qo("snap",Bd))||Wa;ut.version=Xt.version=Zt.version="3.11.5";Td=1;zl()&&is();Pe.Power0;Pe.Power1;Pe.Power2;Pe.Power3;Pe.Power4;Pe.Linear;Pe.Quad;Pe.Cubic;Pe.Quart;Pe.Quint;Pe.Strong;Pe.Elastic;Pe.Back;Pe.SteppedEase;Pe.Bounce;Pe.Sine;Pe.Expo;Pe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sf,wi,Xr,Yl,ji,af,Kl,bb=function(){return typeof window<"u"},pi={},Gi=180/Math.PI,qr=Math.PI/180,Ir=Math.atan2,of=1e8,Zl=/([A-Z])/g,Sb=/(left|right|width|margin|padding|x)/i,Mb=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Eb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},oh=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Ab=function(e,t,n){return e.style[t]=n},Cb=function(e,t,n){return e.style.setProperty(t,n)},Lb=function(e,t,n){return e._gsap[t]=n},Rb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Db=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Pb=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ye="transform",Dn=Ye+"Origin",Ib=function r(e,t){var n=this,i=this.target,s=i.style;if(e in pi){if(this.tfm=this.tfm||{},e!=="transform")e=jn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=li(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:li(i,e);else return jn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ye)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=Ye}(s||t)&&this.props.push(e,t,s[e])},ch=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ob=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Zl,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Kl(),(!s||!s.isStart)&&!n[Ye]&&(ch(n),i.uncache=1)}},uh=function(e,t){var n={target:e,props:[],revert:Ob,save:Ib};return e._gsap||Zt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},fh,Tl=function(e,t){var n=wi.createElementNS?wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wi.createElement(e);return n.style?n:wi.createElement(e)},Zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Zl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,as(t)||t,1)||""},lf="O,Moz,ms,Ms,Webkit".split(","),as=function(e,t,n){var i=t||ji,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(lf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?lf[o]:"")+e},El=function(){bb()&&window.document&&(sf=window,wi=sf.document,Xr=wi.documentElement,ji=Tl("div")||{style:{}},Tl("div"),Ye=as(Ye),Dn=Ye+"Origin",ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fh=!!as("perspective"),Kl=Zt.core.reverting,Yl=1)},$o=function r(e){var t=Tl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Xr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Xr.removeChild(t),this.style.cssText=s,o},cf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},dh=function(e){var t;try{t=e.getBBox()}catch{t=$o.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===$o||(t=$o.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+cf(e,["x","cx","x1"])||0,y:+cf(e,["y","cy","y1"])||0,width:0,height:0}:t},hh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&dh(e))},Gs=function(e,t){if(t){var n=e.style;t in pi&&t!==Dn&&(t=Ye),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Zl,"-$1").toLowerCase())):n.removeAttribute(t)}},Ti=function(e,t,n,i,s,o){var a=new Kt(e._pt,t,n,0,1,o?lh:oh);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},uf={deg:1,rad:1,turn:1},Fb={grid:1,flex:1},Pi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ji.style,l=Sb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",m=i==="%",g,h,p,_;return i===o||!s||uf[i]||uf[o]?s:(o!=="px"&&!d&&(s=r(e,t,n,"px")),_=e.getCTM&&hh(e),(m||o==="%")&&(pi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],et(m?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(d?o:i),h=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(h=(e.ownerSVGElement||{}).parentNode),(!h||h===wi||!h.appendChild)&&(h=wi.body),p=h._gsap,p&&m&&p.width&&l&&p.time===rn.time&&!p.uncache?et(s/p.width*f):((m||o==="%")&&!Fb[Zn(h,"display")]&&(a.position=Zn(e,"position")),h===e&&(a.position="static"),h.appendChild(ji),g=ji[u],h.removeChild(ji),a.position="absolute",l&&m&&(p=Qi(h),p.time=rn.time,p.width=h[u]),et(d?g*s/f:g&&s?f/g*s:0))))},li=function(e,t,n,i){var s;return Yl||El(),t in jn&&t!=="transform"&&(t=jn[t],~t.indexOf(",")&&(t=t.split(",")[0])),pi[t]&&t!=="transform"?(s=Ws(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:qa(Zn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Xa[t]&&Xa[t](e,t,n)||Zn(e,t)||Ld(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Pi(e,t,s,n)+n:s},Nb=function(e,t,n,i){if(!n||n==="none"){var s=as(t,e,1),o=s&&Zn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var a=new Kt(this._pt,e.style,t,0,1,rh),l=0,c=0,u,f,d,m,g,h,p,_,v,w,x,M;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Zn(e,t)||i,e.style[t]=n),u=[n,i],Yd(u),n=u[0],i=u[1],d=n.match(zr)||[],M=i.match(zr)||[],M.length){for(;f=zr.exec(i);)p=f[0],v=i.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(h=d[c++]||"")&&(m=parseFloat(h)||0,x=h.substr((m+"").length),p.charAt(1)==="="&&(p=Wr(m,p)+x),_=parseFloat(p),w=p.substr((_+"").length),l=zr.lastIndex-w.length,w||(w=w||sn.units[t]||x,l===i.length&&(i+=w,a.e+=w)),x!==w&&(m=Pi(e,t,h,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?lh:oh;return Md.test(i)&&(a.e=0),this._pt=a,a},ff={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ff[n]||n,t[1]=ff[i]||i,t.join(" ")},Ub=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pi[a]&&(l=1,a=a==="transformOrigin"?Dn:Ye),Gs(n,a);l&&(Gs(n,Ye),o&&(o.svg&&n.removeAttribute("transform"),Ws(n,1),o.uncache=1,ch(i)))}},Xa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Kt(e._pt,t,n,0,0,Ub);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Hs=[1,0,0,1,0,0],ph={},mh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},df=function(e){var t=Zn(e,Ye);return mh(t)?Hs:t.substr(7).match(Sd).map(et)},Jl=function(e,t){var n=e._gsap||Qi(e),i=e.style,s=df(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hs:s):(s===Hs&&!e.offsetParent&&e!==Xr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Xr.appendChild(e)),s=df(e),l?i.display=l:Gs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Xr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Al=function(e,t,n,i,s,o){var a=e._gsap,l=s||Jl(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,m=l[0],g=l[1],h=l[2],p=l[3],_=l[4],v=l[5],w=t.split(" "),x=parseFloat(w[0])||0,M=parseFloat(w[1])||0,b,S,y,T;n?l!==Hs&&(S=m*p-g*h)&&(y=x*(p/S)+M*(-h/S)+(h*v-p*_)/S,T=x*(-g/S)+M*(m/S)-(m*v-g*_)/S,x=y,M=T):(b=dh(e),x=b.x+(~w[0].indexOf("%")?x/100*b.width:x),M=b.y+(~(w[1]||w[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&a.smooth?(_=x-c,v=M-u,a.xOffset=f+(_*m+v*h)-_,a.yOffset=d+(_*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Dn]="0px 0px",o&&(Ti(o,a,"xOrigin",c,x),Ti(o,a,"yOrigin",u,M),Ti(o,a,"xOffset",f,a.xOffset),Ti(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+M)},Ws=function(e,t){var n=e._gsap||new Qd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Zn(e,Dn)||"0",u,f,d,m,g,h,p,_,v,w,x,M,b,S,y,T,I,O,j,Y,F,U,L,R,D,N,V,Q,Z,ee,ne,fe;return u=f=d=h=p=_=v=w=x=0,m=g=1,n.svg=!!(e.getCTM&&hh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ye]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ye]!=="none"?l[Ye]:"")),i.scale=i.rotate=i.translate="none"),S=Jl(e,n.svg),n.svg&&(n.uncache?(D=e.getBBox(),c=n.xOrigin-D.x+"px "+(n.yOrigin-D.y)+"px",R=""):R=!t&&e.getAttribute("data-svg-origin"),Al(e,R||c,!!R||n.originIsAbsolute,n.smooth!==!1,S)),M=n.xOrigin||0,b=n.yOrigin||0,S!==Hs&&(O=S[0],j=S[1],Y=S[2],F=S[3],u=U=S[4],f=L=S[5],S.length===6?(m=Math.sqrt(O*O+j*j),g=Math.sqrt(F*F+Y*Y),h=O||j?Ir(j,O)*Gi:0,v=Y||F?Ir(Y,F)*Gi+h:0,v&&(g*=Math.abs(Math.cos(v*qr))),n.svg&&(u-=M-(M*O+b*Y),f-=b-(M*j+b*F))):(fe=S[6],ee=S[7],V=S[8],Q=S[9],Z=S[10],ne=S[11],u=S[12],f=S[13],d=S[14],y=Ir(fe,Z),p=y*Gi,y&&(T=Math.cos(-y),I=Math.sin(-y),R=U*T+V*I,D=L*T+Q*I,N=fe*T+Z*I,V=U*-I+V*T,Q=L*-I+Q*T,Z=fe*-I+Z*T,ne=ee*-I+ne*T,U=R,L=D,fe=N),y=Ir(-Y,Z),_=y*Gi,y&&(T=Math.cos(-y),I=Math.sin(-y),R=O*T-V*I,D=j*T-Q*I,N=Y*T-Z*I,ne=F*I+ne*T,O=R,j=D,Y=N),y=Ir(j,O),h=y*Gi,y&&(T=Math.cos(y),I=Math.sin(y),R=O*T+j*I,D=U*T+L*I,j=j*T-O*I,L=L*T-U*I,O=R,U=D),p&&Math.abs(p)+Math.abs(h)>359.9&&(p=h=0,_=180-_),m=et(Math.sqrt(O*O+j*j+Y*Y)),g=et(Math.sqrt(L*L+fe*fe)),y=Ir(U,L),v=Math.abs(y)>2e-4?y*Gi:0,x=ne?1/(ne<0?-ne:ne):0),n.svg&&(R=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!mh(Zn(e,Ye)),R&&e.setAttribute("transform",R))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(m*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=et(m),n.scaleY=et(g),n.rotation=et(h)+a,n.rotationX=et(p)+a,n.rotationY=et(_)+a,n.skewX=v+a,n.skewY=w+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Dn]=qa(c)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?Bb:fh?gh:kb,n.uncache=0,n},qa=function(e){return(e=e.split(" "))[0]+" "+e[1]},el=function(e,t,n){var i=Rt(t);return et(parseFloat(t)+parseFloat(Pi(e,"x",n+"px",i)))+i},kb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gh(e,t)},Ui="0deg",Ss="0px",ki=") ",gh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,h=n.scaleY,p=n.transformPerspective,_=n.force3D,v=n.target,w=n.zOrigin,x="",M=_==="auto"&&e&&e!==1||_===!0;if(w&&(f!==Ui||u!==Ui)){var b=parseFloat(u)*qr,S=Math.sin(b),y=Math.cos(b),T;b=parseFloat(f)*qr,T=Math.cos(b),o=el(v,o,S*T*-w),a=el(v,a,-Math.sin(b)*-w),l=el(v,l,y*T*-w+w)}p!==Ss&&(x+="perspective("+p+ki),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(M||o!==Ss||a!==Ss||l!==Ss)&&(x+=l!==Ss||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ki),c!==Ui&&(x+="rotate("+c+ki),u!==Ui&&(x+="rotateY("+u+ki),f!==Ui&&(x+="rotateX("+f+ki),(d!==Ui||m!==Ui)&&(x+="skew("+d+", "+m+ki),(g!==1||h!==1)&&(x+="scale("+g+", "+h+ki),v.style[Ye]=x||"translate(0, 0)"},Bb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,h=n.yOrigin,p=n.xOffset,_=n.yOffset,v=n.forceCSS,w=parseFloat(o),x=parseFloat(a),M,b,S,y,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qr,c*=qr,M=Math.cos(l)*f,b=Math.sin(l)*f,S=Math.sin(l-c)*-d,y=Math.cos(l-c)*d,c&&(u*=qr,T=Math.tan(c-u),T=Math.sqrt(1+T*T),S*=T,y*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),M*=T,b*=T)),M=et(M),b=et(b),S=et(S),y=et(y)):(M=f,y=d,b=S=0),(w&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(w=Pi(m,"x",o,"px"),x=Pi(m,"y",a,"px")),(g||h||p||_)&&(w=et(w+g-(g*M+h*S)+p),x=et(x+h-(g*b+h*y)+_)),(i||s)&&(T=m.getBBox(),w=et(w+i/100*T.width),x=et(x+s/100*T.height)),T="matrix("+M+","+b+","+S+","+y+","+w+","+x+")",m.setAttribute("transform",T),v&&(m.style[Ye]=T)},Vb=function(e,t,n,i,s){var o=360,a=yt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Gi:1),c=l-i,u=i+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*of)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*of)%o-~~(c/o)*o)),e._pt=d=new Kt(e._pt,t,n,i,c,wb),d.e=u,d.u="deg",e._props.push(n),d},hf=function(e,t){for(var n in t)e[n]=t[n];return e},Gb=function(e,t,n){var i=hf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,d,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ye]=t,a=Ws(n,1),Gs(n,Ye),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ye],o[Ye]=t,a=Ws(n,1),o[Ye]=c);for(l in pi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(m=Rt(c),g=Rt(u),f=m!==g?Pi(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Kt(e._pt,a,l,f,d-f,wl),e._pt.u=g||0,e._props.push(l));hf(a,i)};Yt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Xa[e>1?"border"+r:r]=function(a,l,c,u,f){var d,m;if(arguments.length<4)return d=o.map(function(g){return li(a,g,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},o.forEach(function(g,h){return m[g]=d[h]=d[h]||d[(h-1)/2|0]}),a.init(l,m,f)}});var _h={name:"css",register:El,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,d,m,g,h,p,_,v,w,x,M,b,S,y;Yl||El(),this.styles=this.styles||uh(e),y=this.styles.props,this.tween=n;for(h in t)if(h!=="autoRound"&&(u=t[h],!(tn[h]&&$d(h,t,n,i,e,s)))){if(m=typeof u,g=Xa[h],m==="function"&&(u=u.call(n,i,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Bs(u)),g)g(this,e,h,u,n)&&(S=1);else if(h.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(h)+"").trim(),u+="",Ci.lastIndex=0,Ci.test(c)||(p=Rt(c),_=Rt(u)),_?p!==_&&(c=Pi(e,h,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,i,s,0,0,h),o.push(h),y.push(h,0,a[h]);else if(m!=="undefined"){if(l&&h in l?(c=typeof l[h]=="function"?l[h].call(n,i,e,s):l[h],yt(c)&&~c.indexOf("random(")&&(c=Bs(c)),Rt(c+"")||(c+=sn.units[h]||Rt(li(e,h))||""),(c+"").charAt(1)==="="&&(c=li(e,h))):c=li(e,h),d=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),h in jn&&(h==="autoAlpha"&&(d===1&&li(e,"visibility")==="hidden"&&f&&(d=0),y.push("visibility",0,a.visibility),Ti(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),h!=="scale"&&h!=="transform"&&(h=jn[h],~h.indexOf(",")&&(h=h.split(",")[0]))),w=h in pi,w){if(this.styles.save(h),x||(M=e._gsap,M.renderTransform&&!t.parseTransform||Ws(e,t.parseTransform),b=t.smoothOrigin!==!1&&M.smooth,x=this._pt=new Kt(this._pt,a,Ye,0,1,M.renderTransform,M,0,-1),x.dep=1),h==="scale")this._pt=new Kt(this._pt,M,"scaleY",M.scaleY,(v?Wr(M.scaleY,v+f):f)-M.scaleY||0,wl),this._pt.u=0,o.push("scaleY",h),h+="X";else if(h==="transformOrigin"){y.push(Dn,0,a[Dn]),u=zb(u),M.svg?Al(e,u,0,b,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Ti(this,M,"zOrigin",M.zOrigin,_),Ti(this,a,h,qa(c),qa(u)));continue}else if(h==="svgOrigin"){Al(e,u,1,b,0,this);continue}else if(h in ph){Vb(this,M,h,d,v?Wr(d,v+u):u);continue}else if(h==="smoothOrigin"){Ti(this,M,"smooth",M.smooth,u);continue}else if(h==="force3D"){M[h]=u;continue}else if(h==="transform"){Gb(this,u,e);continue}}else h in a||(h=as(h)||h);if(w||(f||f===0)&&(d||d===0)&&!Mb.test(u)&&h in a)p=(c+"").substr((d+"").length),f||(f=0),_=Rt(u)||(h in sn.units?sn.units[h]:p),p!==_&&(d=Pi(e,h,c,_)),this._pt=new Kt(this._pt,w?M:a,h,d,(v?Wr(d,v+f):f)-d,!w&&(_==="px"||h==="zIndex")&&t.autoRound!==!1?Eb:wl),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Tb);else if(h in a)Nb.call(this,e,h,c,v?v+u:u);else if(h in e)this.add(e,h,c||e[h],v?v+u:u,i,s);else if(h!=="parseTransform"){kl(h,u);continue}w||(h in a?y.push(h,0,a[h]):y.push(h,1,c||e[h])),o.push(h)}}S&&sh(this)},render:function(e,t){if(t.tween._time||!Kl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:li,aliases:jn,getSetter:function(e,t,n){var i=jn[t];return i&&i.indexOf(",")<0&&(t=i),t in pi&&t!==Dn&&(e._gsap.x||li(e,"x"))?n&&af===n?t==="scale"?Rb:Lb:(af=n||{})&&(t==="scale"?Db:Pb):e.style&&!Nl(e.style[t])?Ab:~t.indexOf("-")?Cb:ql(e,t)},core:{_removeProperty:Gs,_getMatrix:Jl}};Zt.utils.checkPrefix=as;Zt.core.getStyleSaver=uh;(function(r,e,t,n){var i=Yt(r+","+e+","+t,function(s){pi[s]=1});Yt(e,function(s){sn.units[s]="deg",ph[s]=1}),jn[i[13]]=r+","+e,Yt(n,function(s){var o=s.split(":");jn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){sn.units[r]="px"});Zt.registerPlugin(_h);var Yi=Zt.registerPlugin(_h)||Zt;Yi.core.Tween;let Xs=!1;const Is=qs([]),Hb=()=>{if(Xs)return;const[r,e]=Ef(Is);console.log(r,e),r&&e&&(Xs=!0,Yi.to(r.position,kr(window.innerHeight,()=>Ya(r))),Yi.to(e.position,kr(0,ja)))},Wb=r=>({mouseMoveEvent:e=>{const t=r.mouseMoveEvent();t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1},wheelEvent:async e=>{if(Xs||!r.wheelEvent(e))return;await Ka();const[n,i]=Ef(Is);n&&i&&(Xs=!0,e.deltaY>0?(Yi.to(n.position,kr(window.innerHeight,()=>Ya(n))),Yi.to(i.position,kr(0,ja))):(Yi.to(i.position,kr(0,()=>Ya(n))),Yi.to(n.position,kr(-window.innerHeight,ja))))},resizeEvent:()=>{const{camera:e,renderer:t}=r.resizeEvent();e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)}});function ja(){Xs=!1}function Ya(r){r.position.set(0,-9999,0)}function kr(r,e=()=>{}){return{duration:xx,x:0,y:r,z:0,repeat:0,ease:"power2.inOut",onComplete:ja}}const Xb=r=>{const e={onLoad:function(){r("success")},onProgress:function(t,n,i){const s=(n/i*100).toFixed(2);r("pending",{value:s,num:n,total:i})},onError:function(t){console.log("图片加载出现错误"),console.log(t),r("fail",t)}};return new hd(e.onLoad,e.onProgress,e.onError)};function pf(r,e,t){const n=r.slice();return n[22]=e[t],n[24]=t,n}function mf(r){let e,t,n,i,s,o,a,l,c,u,f;return o=new vx({props:{class:"home_linear-progress",progress:Number(r[3])/100,buffer:Math.min((r[4]+1)/r[5],1)}}),{c(){e=_e("div"),t=_e("div"),n=Wn("资源正在加载中"),i=Wn(r[2]),s=Ne(),pt(o.$$.fragment),a=Ne(),l=_e("div"),c=Wn(r[3]),u=Wn("%"),me(t,"class","loading-text svelte-1xcbzqc"),me(l,"class","loading-text svelte-1xcbzqc"),me(e,"class","loading svelte-1xcbzqc")},m(d,m){ye(d,e,m),ge(e,t),ge(t,n),ge(t,i),ge(e,s),at(o,e,null),ge(e,a),ge(e,l),ge(l,c),ge(l,u),f=!0},p(d,m){(!f||m&4)&&jr(i,d[2]);const g={};m&8&&(g.progress=Number(d[3])/100),m&48&&(g.buffer=Math.min((d[4]+1)/d[5],1)),o.$set(g),(!f||m&8)&&jr(c,d[3])},i(d){f||(le(o.$$.fragment,d),f=!0)},o(d){pe(o.$$.fragment,d),f=!1},d(d){d&&xe(e),ot(o)}}}function gf(r){let e,t,n;function i(){return r[11](r[24])}return{c(){e=_e("li"),me(e,"class","anchor-item svelte-1xcbzqc"),me(e,"role","presentation"),Vn(e,"active",r[6]===r[24])},m(s,o){ye(s,e,o),t||(n=ht(e,"click",i),t=!0)},p(s,o){r=s,o&64&&Vn(e,"active",r[6]===r[24])},d(s){s&&xe(e),t=!1,n()}}}function _f(r){let e,t,n;return{c(){e=_e("div"),me(e,"class","tip svelte-1xcbzqc")},m(i,s){ye(i,e,s),n=!0},p(i,s){},i(i){n||(on(()=>{n&&(t||(t=xt(e,Ot,{duration:Et},!0)),t.run(1))}),n=!0)},o(i){t||(t=xt(e,Ot,{duration:Et},!1)),t.run(0),n=!1},d(i){i&&xe(e),i&&t&&t.end()}}}function vf(r){let e,t;return e=new Sx({}),e.$on("jump",r[8]),{c(){pt(e.$$.fragment)},m(n,i){at(e,n,i),t=!0},p:$e,i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){pe(e.$$.fragment,n),t=!1},d(n){ot(e,n)}}}function xf(r){let e,t;return e=new xy({}),{c(){pt(e.$$.fragment)},m(n,i){at(e,n,i),t=!0},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){pe(e.$$.fragment,n),t=!1},d(n){ot(e,n)}}}function yf(r){let e,t;return e=new Sy({}),{c(){pt(e.$$.fragment)},m(n,i){at(e,n,i),t=!0},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){pe(e.$$.fragment,n),t=!1},d(n){ot(e,n)}}}function bf(r){let e,t;return e=new Ty({}),{c(){pt(e.$$.fragment)},m(n,i){at(e,n,i),t=!0},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){pe(e.$$.fragment,n),t=!1},d(n){ot(e,n)}}}function Sf(r){let e,t;return e=new Cy({}),{c(){pt(e.$$.fragment)},m(n,i){at(e,n,i),t=!0},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){pe(e.$$.fragment,n),t=!1},d(n){ot(e,n)}}}function qb(r){let e,t,n,i,s,o,a,l,c,u,f,d,m=r[1]&&mf(r),g=Ua,h=[];for(let b=0;b<g.length;b+=1)h[b]=gf(pf(r,g,b));let p=r[7]&&_f(),_=r[6]===0&&vf(r),v=r[6]===1&&xf(),w=r[6]===2&&yf(),x=r[6]===3&&bf(),M=r[6]===4&&Sf();return{c(){m&&m.c(),e=Ne(),t=_e("div"),n=Ne(),i=_e("ul");for(let b=0;b<h.length;b+=1)h[b].c();s=Ne(),p&&p.c(),o=Ne(),_&&_.c(),a=Ne(),v&&v.c(),l=Ne(),w&&w.c(),c=Ne(),x&&x.c(),u=Ne(),M&&M.c(),f=yn(),me(t,"class","container"),me(i,"class","anchor svelte-1xcbzqc")},m(b,S){m&&m.m(b,S),ye(b,e,S),ye(b,t,S),r[10](t),ye(b,n,S),ye(b,i,S);for(let y=0;y<h.length;y+=1)h[y]&&h[y].m(i,null);ye(b,s,S),p&&p.m(b,S),ye(b,o,S),_&&_.m(b,S),ye(b,a,S),v&&v.m(b,S),ye(b,l,S),w&&w.m(b,S),ye(b,c,S),x&&x.m(b,S),ye(b,u,S),M&&M.m(b,S),ye(b,f,S),d=!0},p(b,[S]){if(b[1]?m?(m.p(b,S),S&2&&le(m,1)):(m=mf(b),m.c(),le(m,1),m.m(e.parentNode,e)):m&&(ft(),pe(m,1,1,()=>{m=null}),dt()),S&320){g=Ua;let y;for(y=0;y<g.length;y+=1){const T=pf(b,g,y);h[y]?h[y].p(T,S):(h[y]=gf(T),h[y].c(),h[y].m(i,null))}for(;y<h.length;y+=1)h[y].d(1);h.length=g.length}b[7]?p?(p.p(b,S),S&128&&le(p,1)):(p=_f(),p.c(),le(p,1),p.m(o.parentNode,o)):p&&(ft(),pe(p,1,1,()=>{p=null}),dt()),b[6]===0?_?(_.p(b,S),S&64&&le(_,1)):(_=vf(b),_.c(),le(_,1),_.m(a.parentNode,a)):_&&(ft(),pe(_,1,1,()=>{_=null}),dt()),b[6]===1?v?S&64&&le(v,1):(v=xf(),v.c(),le(v,1),v.m(l.parentNode,l)):v&&(ft(),pe(v,1,1,()=>{v=null}),dt()),b[6]===2?w?S&64&&le(w,1):(w=yf(),w.c(),le(w,1),w.m(c.parentNode,c)):w&&(ft(),pe(w,1,1,()=>{w=null}),dt()),b[6]===3?x?S&64&&le(x,1):(x=bf(),x.c(),le(x,1),x.m(u.parentNode,u)):x&&(ft(),pe(x,1,1,()=>{x=null}),dt()),b[6]===4?M?S&64&&le(M,1):(M=Sf(),M.c(),le(M,1),M.m(f.parentNode,f)):M&&(ft(),pe(M,1,1,()=>{M=null}),dt())},i(b){d||(le(m),le(p),le(_),le(v),le(w),le(x),le(M),d=!0)},o(b){pe(m),pe(p),pe(_),pe(v),pe(w),pe(x),pe(M),d=!1},d(b){m&&m.d(b),b&&xe(e),b&&xe(t),r[10](null),b&&xe(n),b&&xe(i),Df(h,b),b&&xe(s),p&&p.d(b),b&&xe(o),_&&_.d(b),b&&xe(a),v&&v.d(b),b&&xe(l),w&&w.d(b),b&&xe(c),x&&x.d(b),b&&xe(u),M&&M.d(b),b&&xe(f)}}}function jb(r,e,t){let n,i;an(r,Xn,T=>t(9,i=T));let s,o=!0,a="",l="0.00",c,u=0,f=1,d=0;const m=new ox,g=new ad(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,1,1e3);g.aspect=window.innerWidth/window.innerHeight,g.position.set(0,0,5),m.add(g);const h=new dd({antialias:!0});h.setSize(window.innerWidth,window.innerHeight);const p=new Ge,_=Xb((T,I)=>{switch(T){case"pending":t(3,l=I.value),t(5,f=I.total),t(4,u=I.num);break;case"fail":alert("加载失败，请稍后重试~~");break}}),v=new ux(_),x=Ua.map(T=>{const{bg:I,depth:O}=T;return{page:v.load(I),depth:v.load(O)}}).map((T,I)=>{const{page:O,depth:j}=T,Y=new $a(window.innerWidth,window.innerHeight),F=Ly(O,j,p),U=new fi(Y,F);return m.add(U),I!==d&&Ya(U),U});requestAnimationFrame(function T(){const I=x[d].material;I.uniforms.uMouse.value=p,I.uniforms.uTime.value=performance.now()/1e3,h.render(m,g),requestAnimationFrame(T)});const M=Wb({mouseMoveEvent:()=>p,resizeEvent:()=>({camera:g,renderer:h}),wheelEvent:T=>{if(o)return!1;const I=x.length-1;if(T.deltaY>0){if(d===I)return!1;const O=x[d],j=x[d+1];j.position.set(0,-window.innerHeight,0),Is.set([O,j]),t(6,d++,d)}else{if(d===0)return!1;x[d],x[d-1].position.set(0,window.innerHeight,0),Is.set([x[d],x[d-1]]),t(6,d--,d)}return Xn.set(d),!0}}),b=async T=>{if(T===d)return;Xn.set(T),In.set(!1),await Ka();const I=x[d],O=x[T.detail];O.position.set(0,-window.innerHeight,0),Is.set([I,O]),t(6,d=T.detail),Hb()};On(()=>{Xn.set(d),s.appendChild(h.domElement),window.addEventListener("mousemove",M.mouseMoveEvent),window.addEventListener("wheel",M.wheelEvent),window.addEventListener("resize",M.resizeEvent),c=setInterval(()=>{Math.floor(Number(l))===100&&setTimeout(()=>{t(1,o=!1),clearInterval(c)},150),a.length===3?t(2,a="."):t(2,a+=".")},300)}),If(()=>{window.removeEventListener("mousemove",M.mouseMoveEvent),window.removeEventListener("wheel",M.wheelEvent),window.removeEventListener("resize",M.resizeEvent),clearInterval(c)});function S(T){_t[T?"unshift":"push"](()=>{s=T,t(0,s)})}const y=T=>{b({detail:T})};return r.$$.update=()=>{r.$$.dirty&512&&t(7,n=i!==Ua.length-1)},[s,o,a,l,u,f,d,n,b,i,S,y]}class Yb extends zt{constructor(e){super(),Nt(this,e,jb,qb,lt,{})}}const Kb={"/":Yb,"/biog":ms({asyncComponent:()=>gs(()=>import("./demo-174f660f.js"),[])}),"/knowlage":ms({asyncComponent:()=>gs(()=>import("./demo-947fe10b.js"),[])}),"/nijigen":ms({asyncComponent:()=>gs(()=>import("./Index-e12d0773.js"),["assets/Index-e12d0773.js","assets/Gap-b123d2f9.js"])}),"/nijigen/*":ms({asyncComponent:()=>gs(()=>import("./BaseRouter-da156a0a.js"),["assets/BaseRouter-da156a0a.js","assets/Gap-b123d2f9.js"])}),"/okr":ms({asyncComponent:()=>gs(()=>import("./demo-749fddbc.js"),[])}),"*":Bf};function Zb(r){let e,t,n,i,s;return t=new up({}),i=new ip({props:{routes:Kb}}),{c(){e=_e("main"),pt(t.$$.fragment),n=Ne(),pt(i.$$.fragment)},m(o,a){ye(o,e,a),at(t,e,null),ge(e,n),at(i,e,null),s=!0},p:$e,i(o){s||(le(t.$$.fragment,o),le(i.$$.fragment,o),s=!0)},o(o){pe(t.$$.fragment,o),pe(i.$$.fragment,o),s=!1},d(o){o&&xe(e),ot(t),ot(i)}}}class Jb extends zt{constructor(e){super(),Nt(this,e,null,Zb,lt,{})}}const Mf=["˃̣̣̥⌓˂̣̣̥","(ఠ్ఠ ˓̭ ఠ్ఠ)","( ≖⃙⃚᷄ ⍘ ≖⃙⃚᷅ )","( ´◔ ‸◔`)","(=ฅರ﹏ರ)ฅ","(つ﹏⊂)","๐·°(৹˃ᗝ˂৹)°·๐","(•͈˽•͈)","(シ_ _)シ!","↖(▔^▔)↗","(_´-ㅅ-`)_ "],Qb=()=>{const r=Math.floor(Math.random()*Mf.length);return Mf[r]};document.title=`切利哦的空间 ${Qb()}`;new Jb({target:document.getElementById("app")});export{us as $,Be as A,os as B,Nu as C,_t as D,ar as E,lr as F,cr as G,or as H,Fu as I,za as J,La as K,me as L,Wn as M,ge as N,jr as O,On as P,$b as Q,ip as R,zt as S,St as T,tt as U,Kn as V,wt as W,Ft as X,Fn as Y,Bt as Z,gs as _,ye as a,If as a0,Ne as b,pt as c,xe as d,_e as e,pe as f,ot as g,nS as h,Nt as i,eS as j,gt as k,Yr as l,at as m,$e as n,yn as o,Dt as p,tr as q,ft as r,lt as s,le as t,dt as u,_n as v,ms as w,fs as x,bn as y,Fs as z};
