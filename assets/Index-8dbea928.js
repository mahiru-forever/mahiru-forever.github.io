import{S as b,i as A,s as H,L as m,N as p,I as i,J as _,Q as d,b as x,e as I,f as c,m as l,Z as P}from"./index-0d700fe7.js";import{C as v}from"./ActionIcons-d04a7e35.js";import{A as S,P as q,H as J,C as L}from"./Header-2eda148c.js";import{P as N}from"./PageContainer-038b8436.js";import"./classAdderBuilder-8ef0bfb0.js";import"./Ripple-f1e5159d.js";function Q(o){let e;return{c(){e=P(`当前
    xxx`)},m(s,t){c(s,e,t)},d(s){s&&l(e)}}}function Z(o){let e;return{c(){e=P(`后续想做的事
    xxx`)},m(s,t){c(s,e,t)},d(s){s&&l(e)}}}function j(o){let e,s,t,$;return e=new J({}),t=new L({}),{c(){m(e.$$.fragment),s=x(),m(t.$$.fragment)},m(r,f){p(e,r,f),c(r,s,f),p(t,r,f),$=!0},i(r){$||(i(e.$$.fragment,r),i(t.$$.fragment,r),$=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),$=!1},d(r){d(e,r),r&&l(s),d(t,r)}}}function z(o){let e,s;return e=new q({props:{$$slots:{default:[j]},$$scope:{ctx:o}}}),{c(){m(e.$$.fragment)},m(t,$){p(e,t,$),s=!0},p(t,$){const r={};$&1&&(r.$$scope={dirty:$,ctx:t}),e.$set(r)},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){d(e,t)}}}function B(o){let e,s,t,$,r,f,u,g;return e=new v({props:{class:"okr_card",variant:"outlined",padded:!0,$$slots:{default:[Q]},$$scope:{ctx:o}}}),t=new v({props:{class:"okr_card",variant:"outlined",padded:!0,$$slots:{default:[Z]},$$scope:{ctx:o}}}),u=new S({props:{class:"okr_look-back",$$slots:{default:[z]},$$scope:{ctx:o}}}),{c(){m(e.$$.fragment),s=x(),m(t.$$.fragment),$=x(),r=I("div"),r.textContent="回顾",f=x(),m(u.$$.fragment)},m(n,a){p(e,n,a),c(n,s,a),p(t,n,a),c(n,$,a),c(n,r,a),c(n,f,a),p(u,n,a),g=!0},p(n,a){const w={};a&1&&(w.$$scope={dirty:a,ctx:n}),e.$set(w);const C={};a&1&&(C.$$scope={dirty:a,ctx:n}),t.$set(C);const k={};a&1&&(k.$$scope={dirty:a,ctx:n}),u.$set(k)},i(n){g||(i(e.$$.fragment,n),i(t.$$.fragment,n),i(u.$$.fragment,n),g=!0)},o(n){_(e.$$.fragment,n),_(t.$$.fragment,n),_(u.$$.fragment,n),g=!1},d(n){d(e,n),n&&l(s),d(t,n),n&&l($),n&&l(r),n&&l(f),d(u,n)}}}function D(o){let e,s;return e=new N({props:{$$slots:{default:[B]},$$scope:{ctx:o}}}),{c(){m(e.$$.fragment)},m(t,$){p(e,t,$),s=!0},p(t,[$]){const r={};$&1&&(r.$$scope={dirty:$,ctx:t}),e.$set(r)},i(t){s||(i(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){d(e,t)}}}class R extends b{constructor(e){super(),A(this,e,null,D,H,{})}}export{R as default};
