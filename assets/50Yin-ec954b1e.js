import{S as ee,i as te,s as ne,E as Ce,k as H,A as D,e as v,T as ue,a as _,U as fe,V as Ye,F as ke,G as Ee,H as Le,p as Ie,W as qe,t as C,f as k,d as m,X as Ge,v as J,x as Be,y as Te,J as x,B as ye,D as Se,Y as He,Z as ce,$ as Je,I as de,l as _e,c as L,o as ae,m as I,q as w,r as Ke,g as B,u as We,z as me,a0 as Xe,C as be,K as ge,b as F,L as V,M as Y,N as Re,O as Me}from"./index-c7c09bb6.js";import{C as Ze,a as Qe}from"./ActionIcons-2a73afc1.js";function we(a){let e,n,i,u,l,r;const t=a[8].default,s=Ce(t,a,a[7],null);let c=[{class:n=H({[a[1]]:!0,"mdc-card__actions":!0,"mdc-card__actions--full-bleed":a[2]})},a[5]],d={};for(let f=0;f<c.length;f+=1)d=D(d,c[f]);return{c(){e=v("div"),s&&s.c(),ue(e,d)},m(f,b){_(f,e,b),s&&s.m(e,null),a[9](e),u=!0,l||(r=[fe(i=Ye.call(null,e,a[0])),fe(a[4].call(null,e))],l=!0)},p(f,[b]){s&&s.p&&(!u||b&128)&&ke(s,t,f,f[7],u?Le(t,f[7],b,null):Ee(f[7]),null),ue(e,d=Ie(c,[(!u||b&6&&n!==(n=H({[f[1]]:!0,"mdc-card__actions":!0,"mdc-card__actions--full-bleed":f[2]})))&&{class:n},b&32&&f[5]])),i&&qe(i.update)&&b&1&&i.update.call(null,f[0])},i(f){u||(C(s,f),u=!0)},o(f){k(s,f),u=!1},d(f){f&&m(e),s&&s.d(f),a[9](null),l=!1,Ge(r)}}}function $e(a,e,n){const i=["use","class","fullBleed","getElement"];let u=J(e,i),{$$slots:l={},$$scope:r}=e;const t=Be(Te());let{use:s=[]}=e,{class:c=""}=e,{fullBleed:d=!1}=e,f;x("SMUI:button:context","card:action"),x("SMUI:icon-button:context","card:action");function b(){return f}function R(g){Se[g?"unshift":"push"](()=>{f=g,n(3,f)})}return a.$$set=g=>{e=D(D({},e),ye(g)),n(5,u=J(e,i)),"use"in g&&n(0,s=g.use),"class"in g&&n(1,c=g.class),"fullBleed"in g&&n(2,d=g.fullBleed),"$$scope"in g&&n(7,r=g.$$scope)},[s,c,d,f,t,u,b,r,l,R]}class xe extends ee{constructor(e){super(),te(this,e,$e,we,ne,{use:0,class:1,fullBleed:2,getElement:6})}get getElement(){return this.$$.ctx[6]}}/**
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
 */var G={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},E={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
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
 */var et=function(a){He(e,a);function e(n){var i=a.call(this,ce(ce({},e.defaultAdapter),n))||this;return i.hasToggledAriaLabel=!1,i}return Object.defineProperty(e,"cssClasses",{get:function(){return G},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var n=this.adapter.getAttr(E.DATA_ARIA_LABEL_ON),i=this.adapter.getAttr(E.DATA_ARIA_LABEL_OFF);if(n&&i){if(this.adapter.getAttr(E.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(E.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(G.ICON_BUTTON_ON)},e.prototype.toggle=function(n){if(n===void 0&&(n=!this.isOn()),n?this.adapter.addClass(G.ICON_BUTTON_ON):this.adapter.removeClass(G.ICON_BUTTON_ON),this.hasToggledAriaLabel){var i=n?this.adapter.getAttr(E.DATA_ARIA_LABEL_ON):this.adapter.getAttr(E.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(E.ARIA_LABEL,i||"")}else this.adapter.setAttr(E.ARIA_PRESSED,""+n)},e}(Je);function he(a){let e;return{c(){e=v("div"),V(e,"class","mdc-icon-button__touch")},m(n,i){_(n,e,i)},d(n){n&&m(e)}}}function tt(a){let e,n,i,u;const l=a[33].default,r=Ce(l,a,a[37],null);let t=a[8]&&he();return{c(){e=v("div"),n=F(),r&&r.c(),t&&t.c(),i=ae(),V(e,"class","mdc-icon-button__ripple")},m(s,c){_(s,e,c),_(s,n,c),r&&r.m(s,c),t&&t.m(s,c),_(s,i,c),u=!0},p(s,c){r&&r.p&&(!u||c[1]&64)&&ke(r,l,s,s[37],u?Le(l,s[37],c,null):Ee(s[37]),null),s[8]?t||(t=he(),t.c(),t.m(i.parentNode,i)):t&&(t.d(1),t=null)},i(s){u||(C(r,s),u=!0)},o(s){k(r,s),u=!1},d(s){s&&m(e),s&&m(n),r&&r.d(s),t&&t.d(s),s&&m(i)}}}function nt(a){let e,n,i;const u=[{tag:a[14]},{use:[[de,{ripple:a[4],unbounded:!0,color:a[5],disabled:!!a[29].disabled,addClass:a[26],removeClass:a[27],addStyle:a[28]}],a[22],...a[1]]},{class:H({[a[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!a[23](a[0])&&a[0],"mdc-icon-button--touch":a[8],"mdc-icon-button--display-flex":a[9],"smui-icon-button--size-button":a[10]==="button","smui-icon-button--size-mini":a[10]==="mini","mdc-icon-button--reduced-size":a[10]==="mini"||a[10]==="button","mdc-card__action":a[24]==="card:action","mdc-card__action--icon":a[24]==="card:action","mdc-top-app-bar__navigation-icon":a[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":a[24]==="top-app-bar:action","mdc-snackbar__dismiss":a[24]==="snackbar:actions","mdc-data-table__pagination-button":a[24]==="data-table:pagination","mdc-data-table__sort-icon-button":a[24]==="data-table:sortable-header-cell","mdc-dialog__close":(a[24]==="dialog:header"||a[24]==="dialog:sheet")&&a[12]==="close",...a[18]})},{style:Object.entries(a[19]).map(pe).concat([a[3]]).join(" ")},{"aria-pressed":a[23](a[0])?null:a[0]?"true":"false"},{"aria-label":a[0]?a[6]:a[7]},{"data-aria-label-on":a[6]},{"data-aria-label-off":a[7]},{"aria-describedby":a[25]},{href:a[11]},a[21],a[20],a[29]];var l=a[13];function r(t){let s={$$slots:{default:[tt]},$$scope:{ctx:t}};for(let c=0;c<u.length;c+=1)s=D(s,u[c]);return{props:s}}return l&&(e=_e(l,r(a)),a[34](e),e.$on("click",a[35]),e.$on("click",a[36])),{c(){e&&L(e.$$.fragment),n=ae()},m(t,s){e&&I(e,t,s),_(t,n,s),i=!0},p(t,s){const c=s[0]&1073504255?Ie(u,[s[0]&16384&&{tag:t[14]},s[0]&1010827314&&{use:[[de,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[29].disabled,addClass:t[26],removeClass:t[27],addStyle:t[28]}],t[22],...t[1]]},s[0]&25433861&&{class:H({[t[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!t[23](t[0])&&t[0],"mdc-icon-button--touch":t[8],"mdc-icon-button--display-flex":t[9],"smui-icon-button--size-button":t[10]==="button","smui-icon-button--size-mini":t[10]==="mini","mdc-icon-button--reduced-size":t[10]==="mini"||t[10]==="button","mdc-card__action":t[24]==="card:action","mdc-card__action--icon":t[24]==="card:action","mdc-top-app-bar__navigation-icon":t[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[24]==="top-app-bar:action","mdc-snackbar__dismiss":t[24]==="snackbar:actions","mdc-data-table__pagination-button":t[24]==="data-table:pagination","mdc-data-table__sort-icon-button":t[24]==="data-table:sortable-header-cell","mdc-dialog__close":(t[24]==="dialog:header"||t[24]==="dialog:sheet")&&t[12]==="close",...t[18]})},s[0]&524296&&{style:Object.entries(t[19]).map(pe).concat([t[3]]).join(" ")},s[0]&8388609&&{"aria-pressed":t[23](t[0])?null:t[0]?"true":"false"},s[0]&193&&{"aria-label":t[0]?t[6]:t[7]},s[0]&64&&{"data-aria-label-on":t[6]},s[0]&128&&{"data-aria-label-off":t[7]},s[0]&33554432&&{"aria-describedby":t[25]},s[0]&2048&&{href:t[11]},s[0]&2097152&&w(t[21]),s[0]&1048576&&w(t[20]),s[0]&536870912&&w(t[29])]):{};if(s[0]&256|s[1]&64&&(c.$$scope={dirty:s,ctx:t}),s[0]&8192&&l!==(l=t[13])){if(e){Ke();const d=e;k(d.$$.fragment,1,0,()=>{B(d,1)}),We()}l?(e=_e(l,r(t)),t[34](e),e.$on("click",t[35]),e.$on("click",t[36]),L(e.$$.fragment),C(e.$$.fragment,1),I(e,n.parentNode,n)):e=null}else l&&e.$set(c)},i(t){i||(e&&C(e.$$.fragment,t),i=!0)},o(t){e&&k(e.$$.fragment,t),i=!1},d(t){a[34](null),t&&m(n),e&&B(e,t)}}}const pe=([a,e])=>`${a}: ${e};`;function at(a,e,n){let i;const u=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","tag","getElement"];let l=J(e,u),{$$slots:r={},$$scope:t}=e;const s=Be(Te());let c=()=>{};function d(o){return o===c}let{use:f=[]}=e,{class:b=""}=e,{style:R=""}=e,{ripple:g=!0}=e,{color:K=void 0}=e,{toggle:T=!1}=e,{pressed:h=c}=e,{ariaLabelOn:z=void 0}=e,{ariaLabelOff:M=void 0}=e,{touch:q=!1}=e,{displayFlex:se=!0}=e,{size:le="normal"}=e,{href:W=void 0}=e,{action:U=void 0}=e,P,p,A={},N={},y={},j=me("SMUI:icon-button:context"),Ne=me("SMUI:icon-button:aria-describedby"),{component:X=be}=e,{tag:ie=X===be?W==null?"button":"a":void 0}=e,Z=l.disabled;x("SMUI:icon:context","icon-button");let Q=null;Xe(()=>{p&&p.destroy()});function De(o){return o in A?A[o]:S().classList.contains(o)}function oe(o){A[o]||n(18,A[o]=!0,A)}function re(o){(!(o in A)||A[o])&&n(18,A[o]=!1,A)}function Fe(o,O){N[o]!=O&&(O===""||O==null?(delete N[o],n(19,N)):n(19,N[o]=O,N))}function ve(o){var O;return o in y?(O=y[o])!==null&&O!==void 0?O:null:S().getAttribute(o)}function ze(o,O){y[o]!==O&&n(20,y[o]=O,y)}function Ue(o){n(0,h=o.isOn)}function S(){return P.getElement()}function Pe(o){Se[o?"unshift":"push"](()=>{P=o,n(16,P)})}const je=()=>p&&p.handleClick(),Ve=()=>j==="top-app-bar:navigation"&&ge(S(),"SMUITopAppBarIconButton:nav");return a.$$set=o=>{e=D(D({},e),ye(o)),n(29,l=J(e,u)),"use"in o&&n(1,f=o.use),"class"in o&&n(2,b=o.class),"style"in o&&n(3,R=o.style),"ripple"in o&&n(4,g=o.ripple),"color"in o&&n(5,K=o.color),"toggle"in o&&n(30,T=o.toggle),"pressed"in o&&n(0,h=o.pressed),"ariaLabelOn"in o&&n(6,z=o.ariaLabelOn),"ariaLabelOff"in o&&n(7,M=o.ariaLabelOff),"touch"in o&&n(8,q=o.touch),"displayFlex"in o&&n(9,se=o.displayFlex),"size"in o&&n(10,le=o.size),"href"in o&&n(11,W=o.href),"action"in o&&n(12,U=o.action),"component"in o&&n(13,X=o.component),"tag"in o&&n(14,ie=o.tag),"$$scope"in o&&n(37,t=o.$$scope)},a.$$.update=()=>{if(a.$$.dirty[0]&4096&&n(21,i=(()=>{if(j==="data-table:pagination")switch(U){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return j==="dialog:header"||j==="dialog:sheet"?{"data-mdc-dialog-action":U}:{action:U}})()),Z!==l.disabled){const o=S();"blur"in o&&o.blur(),n(31,Z=l.disabled)}a.$$.dirty[0]&1073938432|a.$$.dirty[1]&2&&P&&S()&&T!==Q&&(T&&!p?(n(17,p=new et({addClass:oe,hasClass:De,notifyChange:o=>{Ue(o),ge(S(),"SMUIIconButtonToggle:change",o,void 0,!0)},removeClass:re,getAttr:ve,setAttr:ze})),p.init()):!T&&p&&(p.destroy(),n(17,p=void 0),n(18,A={}),n(20,y={})),n(32,Q=T)),a.$$.dirty[0]&131073&&p&&!d(h)&&p.isOn()!==h&&p.toggle(h)},[h,f,b,R,g,K,z,M,q,se,le,W,U,X,ie,S,P,p,A,N,y,i,s,d,j,Ne,oe,re,Fe,l,T,Z,Q,r,Pe,je,Ve,t]}class $ extends ee{constructor(e){super(),te(this,e,at,nt,ne,{use:1,class:2,style:3,ripple:4,color:5,toggle:30,pressed:0,ariaLabelOn:6,ariaLabelOff:7,touch:8,displayFlex:9,size:10,href:11,action:12,component:13,tag:14,getElement:15},null,[-1,-1])}get getElement(){return this.$$.ctx[15]}}const st=["あ","い","う","え","お","か","き","く","け","こ","さ","し","う","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"],lt=["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ","ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ","モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ","ヲ","ン"],Ae=["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho","ma","mi","mu","me","mo","ye","yu","yo","ra","ri","ru","re","ro","wa","wo","n"];function Oe(a){let e,n=a[1].read+"",i;return{c(){e=v("div"),i=Y(n),V(e,"class","read svelte-odb26y")},m(u,l){_(u,e,l),Re(e,i)},p(u,l){l&2&&n!==(n=u[1].read+"")&&Me(i,n)},d(u){u&&m(e)}}}function it(a){let e,n=a[1].write+"",i,u,l,r=a[0]&&Oe(a);return{c(){e=v("div"),i=Y(n),u=F(),r&&r.c(),l=ae(),V(e,"class","write svelte-odb26y")},m(t,s){_(t,e,s),Re(e,i),_(t,u,s),r&&r.m(t,s),_(t,l,s)},p(t,s){s&2&&n!==(n=t[1].write+"")&&Me(i,n),t[0]?r?r.p(t,s):(r=Oe(t),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null)},d(t){t&&m(e),t&&m(u),r&&r.d(t),t&&m(l)}}}function ot(a){let e;return{c(){e=Y("arrow_forward")},m(n,i){_(n,e,i)},d(n){n&&m(e)}}}function rt(a){let e;return{c(){e=Y("close")},m(n,i){_(n,e,i)},d(n){n&&m(e)}}}function ut(a){let e;return{c(){e=Y("check")},m(n,i){_(n,e,i)},d(n){n&&m(e)}}}function ft(a){let e,n,i,u,l,r;return e=new $({props:{class:"material-icons y50_arrow",title:"next",$$slots:{default:[ot]},$$scope:{ctx:a}}}),e.$on("click",a[3]),i=new $({props:{class:"material-icons y50_close",title:"close",$$slots:{default:[rt]},$$scope:{ctx:a}}}),i.$on("click",a[4]),l=new $({props:{class:"material-icons y50_check",title:"check",$$slots:{default:[ut]},$$scope:{ctx:a}}}),l.$on("click",a[5]),{c(){L(e.$$.fragment),n=F(),L(i.$$.fragment),u=F(),L(l.$$.fragment)},m(t,s){I(e,t,s),_(t,n,s),I(i,t,s),_(t,u,s),I(l,t,s),r=!0},p(t,s){const c={};s&16384&&(c.$$scope={dirty:s,ctx:t}),e.$set(c);const d={};s&16384&&(d.$$scope={dirty:s,ctx:t}),i.$set(d);const f={};s&16384&&(f.$$scope={dirty:s,ctx:t}),l.$set(f)},i(t){r||(C(e.$$.fragment,t),C(i.$$.fragment,t),C(l.$$.fragment,t),r=!0)},o(t){k(e.$$.fragment,t),k(i.$$.fragment,t),k(l.$$.fragment,t),r=!1},d(t){B(e,t),t&&m(n),B(i,t),t&&m(u),B(l,t)}}}function ct(a){let e,n,i,u;return e=new Qe({props:{class:"y50_content",$$slots:{default:[it]},$$scope:{ctx:a}}}),i=new xe({props:{class:"y50_actions",$$slots:{default:[ft]},$$scope:{ctx:a}}}),{c(){L(e.$$.fragment),n=F(),L(i.$$.fragment)},m(l,r){I(e,l,r),_(l,n,r),I(i,l,r),u=!0},p(l,r){const t={};r&16387&&(t.$$scope={dirty:r,ctx:l}),e.$set(t);const s={};r&16385&&(s.$$scope={dirty:r,ctx:l}),i.$set(s)},i(l){u||(C(e.$$.fragment,l),C(i.$$.fragment,l),u=!0)},o(l){k(e.$$.fragment,l),k(i.$$.fragment,l),u=!1},d(l){B(e,l),l&&m(n),B(i,l)}}}function dt(a){let e,n,i,u;return i=new Ze({props:{class:"y50_card",$$slots:{default:[ct]},$$scope:{ctx:a}}}),{c(){e=v("div"),e.textContent="50音小工具",n=F(),L(i.$$.fragment),V(e,"class","title svelte-odb26y")},m(l,r){_(l,e,r),_(l,n,r),I(i,l,r),u=!0},p(l,[r]){const t={};r&16387&&(t.$$scope={dirty:r,ctx:l}),i.$set(t)},i(l){u||(C(i.$$.fragment,l),u=!0)},o(l){k(i.$$.fragment,l),u=!1},d(l){l&&m(e),l&&m(n),B(i,l)}}}function _t(a,e,n){const i=[],u=[];let l=!1,r=0,t={write:"",read:""},s=!1;f(st,Ae),f(lt,Ae),d();const c=(h=!1)=>{if(!l&&n(0,l=!0))return;n(0,l=!1),h?s&&u.splice(u.findIndex(M=>M.write===t.write),1):u.push(t),Math.random()*(1+u.length/100)>.85?R():b()};function d(){r=i.length,b()}function f(h,z){h.forEach((M,q)=>{i.push({write:M,read:z[q]})})}function b(){const h=Math.ceil(Math.random()*r);n(1,t=i[h]),s=!1}function R(){if(u.length===0)return b();const h=Math.ceil(Math.random()*u.length);n(1,t=u[h]),s=!0}return[l,t,c,()=>n(0,l=!0),()=>c(),()=>c(!0)]}class gt extends ee{constructor(e){super(),te(this,e,_t,dt,ne,{})}}export{gt as default};
