import{S as g,i as F,s as E,e as o,c as r,f as v,g as f,n as _,m,Y as x,Z as B}from"./index-2cabf59a.js";function d(u,s,c){const n=u.slice();return n[1]=s[c],n}function h(u){let s,c=u[1]+"",n;return{c(){s=o("span"),n=B(c)},m(a,e){v(a,s,e),f(s,n)},p:_,d(a){a&&m(s)}}}function A(u){let s,c,n,a=u[0],e=[];for(let l=0;l<a.length;l+=1)e[l]=h(d(u,a,l));return{c(){s=o("div"),c=o("div"),n=o("div");for(let l=0;l<e.length;l+=1)e[l].c();r(n,"class","text svelte-aull91"),r(c,"class","tips svelte-aull91"),r(s,"class","mask svelte-aull91")},m(l,i){v(l,s,i),f(s,c),f(c,n);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(n,null)},p(l,[i]){if(i&1){a=l[0];let t;for(t=0;t<a.length;t+=1){const p=d(l,a,t);e[t]?e[t].p(p,i):(e[t]=h(p),e[t].c(),e[t].m(n,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=a.length}},i:_,o:_,d(l){l&&m(s),x(e,l)}}}function k(u){return[["移","动","端","页","面","还","在","建","设","中","哦","，","请","用","pc","端","访","问","~"]]}class y extends g{constructor(s){super(),F(this,s,k,A,E,{})}}export{y as default};
