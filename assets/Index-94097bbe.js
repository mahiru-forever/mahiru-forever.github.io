import{S as Tn,i as En,s as fn,a as Qe,e as _e,b as Oe,c as ve,d as St,f as we,g as pe,h as nn,l as yt,j as ln,k as zn,n as bi,m as Te,r as Es,o as Bn,p as As,q as pa,t as bn,u as An,v as Cs,w as bh,x as Nt,y as Uu,z as Ai,A as Tt,B as Et,C as Mh,D as _i,E as Xr,F as Yr,G as jr,H as Kr,I as he,J as ge,K as Sl,L as dt,M as er,N as pt,O as ms,P as Lt,Q as mt,R as Rt,T as ma,U as wh,V as Th,W as Eh,X as Ah,Y as Zr,Z as zt,_ as Ir,$ as Ch,a0 as ku,a1 as Bu,a2 as Lh,a3 as yl}from"./index-14914a47.js";import{c as ot,u as vi,f as Ls,S as bl}from"./classAdderBuilder-8c247d05.js";import{_ as Wn,a as Rh,M as Rs,b as Vn,R as Ml,d as oa,c as Dh,p as Ph}from"./Ripple-99c0a595.js";import{p as Ut,e as Mi}from"./prefixFilter-9aa1f37f.js";import{A as Ih,P as Fh,H as Oh,C as Nh}from"./Header-9d2c02b1.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="142",zh=0,wl=1,Uh=2,Vu=1,kh=2,os=3,gs=0,Sn=1,Fr=2,Bh=1,xi=0,Cr=1,Tl=2,El=3,Al=4,Vh=5,Mr=100,Gh=101,Wh=102,Cl=103,Ll=104,Hh=200,qh=201,Xh=202,Yh=203,Gu=204,Wu=205,jh=206,Kh=207,Zh=208,Jh=209,Qh=210,$h=0,ed=1,td=2,Ao=3,nd=4,id=5,rd=6,sd=7,Hu=0,ad=1,od=2,ii=0,ld=1,cd=2,ud=3,fd=4,hd=5,qu=300,Or=301,Nr=302,Co=303,Lo=304,Ea=306,Ro=1e3,vn=1001,Do=1002,Ft=1003,Rl=1004,Dl=1005,tn=1006,dd=1007,Aa=1008,Zi=1009,pd=1010,md=1011,Xu=1012,gd=1013,ki=1014,Bi=1015,_s=1016,_d=1017,vd=1018,Lr=1020,xd=1021,Sd=1022,On=1023,yd=1024,bd=1025,Hi=1026,zr=1027,Md=1028,wd=1029,Td=1030,Ed=1031,Ad=1033,za=33776,Ua=33777,ka=33778,Ba=33779,Pl=35840,Il=35841,Fl=35842,Ol=35843,Cd=36196,Nl=37492,zl=37496,Ul=37808,kl=37809,Bl=37810,Vl=37811,Gl=37812,Wl=37813,Hl=37814,ql=37815,Xl=37816,Yl=37817,jl=37818,Kl=37819,Zl=37820,Jl=37821,Ql=36492,Ji=3e3,Ze=3001,Ld=3200,Rd=3201,Dd=0,Pd=1,Jn="srgb",Vi="srgb-linear",Va=7680,Id=519,$l=35044,ec="300 es",Po=1035;class Jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,tc=180/Math.PI;function Ds(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function jt(s,e,t){return Math.max(e,Math.min(t,s))}function Fd(s,e){return(s%e+e)%e}function Wa(s,e,t){return(1-t)*s+t*e}function nc(s){return(s&s-1)===0&&s!==0}function Io(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rn{constructor(){rn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],d=i[0],p=i[3],g=i[6],v=i[1],b=i[4],S=i[7],M=i[2],w=i[5],y=i[8];return r[0]=a*d+o*v+l*M,r[3]=a*p+o*b+l*w,r[6]=a*g+o*S+l*y,r[1]=c*d+u*v+h*M,r[4]=c*p+u*b+h*w,r[7]=c*g+u*S+h*y,r[2]=f*d+m*v+_*M,r[5]=f*p+m*b+_*w,r[8]=f*g+m*S+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,m=c*r-a*l,_=t*h+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-o*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Yu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ha={[Jn]:{[Vi]:qi},[Vi]:{[Jn]:la}},hn={legacyMode:!0,get workingColorSpace(){return Vi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Ha[e]&&Ha[e][t]!==void 0){const n=Ha[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},dn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function qa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function ks(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class qe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Vi){return this.r=e,this.g=t,this.b=n,hn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Vi){if(e=Fd(e,1),t=jt(t,0,1),n=jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qa(a,r,e+1/3),this.g=qa(a,r,e),this.b=qa(a,r,e-1/3)}return hn.toWorkingColorSpace(this,i),this}setStyle(e,t=Jn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,hn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,hn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,hn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,hn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Jn){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return hn.fromWorkingColorSpace(ks(this,rt),e),jt(rt.r*255,0,255)<<16^jt(rt.g*255,0,255)<<8^jt(rt.b*255,0,255)<<0}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vi){hn.fromWorkingColorSpace(ks(this,rt),t);const n=rt.r,i=rt.g,r=rt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Vi){return hn.fromWorkingColorSpace(ks(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=Jn){return hn.fromWorkingColorSpace(ks(this,rt),e),e!==Jn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(dn),dn.h+=e,dn.s+=t,dn.l+=n,this.setHSL(dn.h,dn.s,dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(Us);const n=Wa(dn.h,Us.h,t),i=Wa(dn.s,Us.s,t),r=Wa(dn.l,Us.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=ju;let lr;class Ku{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=vs("canvas")),lr.width=e.width,lr.height=e.height;const n=lr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Zu{constructor(e=null){this.isSource=!0,this.uuid=Ds(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xa(i[a].image)):r.push(Xa(i[a]))}else r=Xa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Od=0;class cn extends Jr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=vn,i=vn,r=tn,a=Aa,o=On,l=Zi,c=1,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ds(),this.name="",this.source=new Zu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=qu;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(m+1)/2,M=(g+1)/2,w=(u+f)/4,y=(h+d)/4,x=(_+p)/4;return b>S&&b>M?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=w/n,r=y/n):S>M?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=x/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=y/r,i=x/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-_)*(p-_)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-d)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends Jr{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:tn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ju extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nd extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ps{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],_=r[a+2],d=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==_){let p=1-o;const g=l*f+c*m+u*_+h*d,v=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const M=Math.sqrt(b),w=Math.atan2(M,g*v);p=Math.sin(p*w)/M,o=Math.sin(o*w)/M}const S=o*v;if(l=l*p+f*S,c=c*p+m*S,u=u*p+_*S,h=h*p+d*S,p===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-o*m,e[t+2]=c*_+u*m+o*f-l*h,e[t+3]=u*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ic.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,h=l*i+r*n-a*t,f=-r*t-a*n-o*i;return this.x=c*l+f*-r+u*-o-h*-a,this.y=u*l+f*-a+h*-r-c*-o,this.z=h*l+f*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new U,ic=new Ps;class Is{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)Ri.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Ri)}else n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox),ja.applyMatrix4(e.matrixWorld),this.union(ja);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Bs.subVectors(this.max,ts),cr.subVectors(e.a,ts),ur.subVectors(e.b,ts),fr.subVectors(e.c,ts),oi.subVectors(ur,cr),li.subVectors(fr,ur),Di.subVectors(cr,fr);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Di.z,Di.y,oi.z,0,-oi.x,li.z,0,-li.x,Di.z,0,-Di.x,-oi.y,oi.x,0,-li.y,li.x,0,-Di.y,Di.x,0];return!Ka(t,cr,ur,fr,Bs)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,cr,ur,fr,Bs))?!1:(Vs.crossVectors(oi,li),t=[Vs.x,Vs.y,Vs.z],Ka(t,cr,ur,fr,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new U,new U,new U,new U,new U,new U,new U,new U],Ri=new U,ja=new Is,cr=new U,ur=new U,fr=new U,oi=new U,li=new U,Di=new U,ts=new U,Bs=new U,Vs=new U,Pi=new U;function Ka(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pi.fromArray(s,r);const o=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const zd=new Is,rc=new U,Gs=new U,Za=new U;class Qo{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Za.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Gs.set(0,0,1).multiplyScalar(e.radius):Gs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(rc.copy(e.center).add(Gs)),this.expandByPoint(rc.copy(e.center).sub(Gs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new U,Ja=new U,Ws=new U,ci=new U,Qa=new U,Hs=new U,$a=new U;class Ud{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.direction).multiplyScalar(t).add(this.origin),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ja.copy(e).add(t).multiplyScalar(.5),Ws.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ws),o=ci.dot(this.direction),l=-ci.dot(Ws),c=ci.lengthSq(),u=Math.abs(1-a*a);let h,f,m,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Ws).multiplyScalar(f).add(Ja),m}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,r){Qa.subVectors(t,e),Hs.subVectors(n,e),$a.crossVectors(Qa,Hs);let a=this.direction.dot($a),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ci.subVectors(this.origin,e);const l=o*this.direction.dot(Hs.crossVectors(ci,Hs));if(l<0)return null;const c=o*this.direction.dot(Qa.cross(ci));if(c<0||l+c>a)return null;const u=-o*ci.dot($a);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c,u,h,f,m,_,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*h,_=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f+d*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=d+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f-d*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=d-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*h,_=o*u,d=o*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=_*h+m,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=a*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,Bd)}lookAt(e,t,n){const i=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),ui.crossVectors(n,Ht),ui.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),ui.crossVectors(n,Ht)),ui.normalize(),qs.crossVectors(Ht,ui),i[0]=ui.x,i[4]=qs.x,i[8]=Ht.x,i[1]=ui.y,i[5]=qs.y,i[9]=Ht.y,i[2]=ui.z,i[6]=qs.z,i[10]=Ht.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],d=n[6],p=n[10],g=n[14],v=n[3],b=n[7],S=n[11],M=n[15],w=i[0],y=i[4],x=i[8],T=i[12],O=i[1],I=i[5],Y=i[9],j=i[13],F=i[2],k=i[6],L=i[10],R=i[14],D=i[3],N=i[7],V=i[11],Q=i[15];return r[0]=a*w+o*O+l*F+c*D,r[4]=a*y+o*I+l*k+c*N,r[8]=a*x+o*Y+l*L+c*V,r[12]=a*T+o*j+l*R+c*Q,r[1]=u*w+h*O+f*F+m*D,r[5]=u*y+h*I+f*k+m*N,r[9]=u*x+h*Y+f*L+m*V,r[13]=u*T+h*j+f*R+m*Q,r[2]=_*w+d*O+p*F+g*D,r[6]=_*y+d*I+p*k+g*N,r[10]=_*x+d*Y+p*L+g*V,r[14]=_*T+d*j+p*R+g*Q,r[3]=v*w+b*O+S*F+M*D,r[7]=v*y+b*I+S*k+M*N,r[11]=v*x+b*Y+S*L+M*V,r[15]=v*T+b*j+S*R+M*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],d=e[7],p=e[11],g=e[15];return _*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*m-n*l*m)+d*(+t*l*m-t*c*f+r*a*f-i*a*m+i*c*u-r*l*u)+p*(+t*c*h-t*o*m-r*a*h+n*a*m+r*o*u-n*c*u)+g*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],d=e[13],p=e[14],g=e[15],v=h*p*c-d*f*c+d*l*m-o*p*m-h*l*g+o*f*g,b=_*f*c-u*p*c-_*l*m+a*p*m+u*l*g-a*f*g,S=u*d*c-_*h*c+_*o*m-a*d*m-u*o*g+a*h*g,M=_*h*l-u*d*l-_*o*f+a*d*f+u*o*p-a*h*p,w=t*v+n*b+i*S+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return e[0]=v*y,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*g-n*f*g)*y,e[2]=(o*p*r-d*l*r+d*i*c-n*p*c-o*i*g+n*l*g)*y,e[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*m-n*l*m)*y,e[4]=b*y,e[5]=(u*p*r-_*f*r+_*i*m-t*p*m-u*i*g+t*f*g)*y,e[6]=(_*l*r-a*p*r-_*i*c+t*p*c+a*i*g-t*l*g)*y,e[7]=(a*f*r-u*l*r+u*i*c-t*f*c-a*i*m+t*l*m)*y,e[8]=S*y,e[9]=(_*h*r-u*d*r-_*n*m+t*d*m+u*n*g-t*h*g)*y,e[10]=(a*d*r-_*o*r+_*n*c-t*d*c-a*n*g+t*o*g)*y,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*m-t*o*m)*y,e[12]=M*y,e[13]=(u*d*i-_*h*i+_*n*f-t*d*f-u*n*p+t*h*p)*y,e[14]=(_*o*i-a*d*i-_*n*l+t*d*l+a*n*p-t*o*p)*y,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*y,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,m=r*u,_=r*h,d=a*u,p=a*h,g=o*h,v=l*c,b=l*u,S=l*h,M=n.x,w=n.y,y=n.z;return i[0]=(1-(d+g))*M,i[1]=(m+S)*M,i[2]=(_-b)*M,i[3]=0,i[4]=(m-S)*w,i[5]=(1-(f+g))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(_+b)*y,i[9]=(p-v)*y,i[10]=(1-(f+d))*y,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=hr.set(i[0],i[1],i[2]).length();const a=hr.set(i[4],i[5],i[6]).length(),o=hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const c=1/r,u=1/a,h=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),h=(t+e)*l,f=(n+i)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hr=new U,pn=new ht,kd=new U(0,0,0),Bd=new U(1,1,1),ui=new U,qs=new U,Ht=new U,sc=new ht,ac=new Ps;class Fs{constructor(e=0,t=0,n=0,i=Fs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Fs.DefaultOrder="XYZ";Fs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vd=0;const oc=new U,dr=new Ps,jn=new ht,Xs=new U,ns=new U,Gd=new U,Wd=new Ps,lc=new U(1,0,0),cc=new U(0,1,0),uc=new U(0,0,1),Hd={type:"added"},fc={type:"removed"};class Mn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DefaultUp.clone();const e=new U,t=new Fs,n=new Ps,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new rn}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Mn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(ns,Xs,this.up):jn.lookAt(Xs,ns,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),dr.setFromRotationMatrix(jn),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Hd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(fc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,Gd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Mn.DefaultUp=new U(0,1,0);Mn.DefaultMatrixAutoUpdate=!0;const mn=new U,Kn=new U,eo=new U,Zn=new U,pr=new U,mr=new U,hc=new U,to=new U,no=new U,io=new U;class ti{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),Kn.subVectors(n,t),eo.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(Kn),l=mn.dot(eo),c=Kn.dot(Kn),u=Kn.dot(eo),h=a*c-o*o;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Zn),l.set(0,0),l.addScaledVector(r,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Kn.subVectors(e,t),mn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),mn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ti.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;pr.subVectors(i,n),mr.subVectors(r,n),to.subVectors(e,n);const l=pr.dot(to),c=mr.dot(to);if(l<=0&&c<=0)return t.copy(n);no.subVectors(e,i);const u=pr.dot(no),h=mr.dot(no);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(pr,a);io.subVectors(e,r);const m=pr.dot(io),_=mr.dot(io);if(_>=0&&m<=_)return t.copy(r);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(mr,o);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return hc.subVectors(r,i),o=(h-u)/(h-u+(m-_)),t.copy(i).addScaledVector(hc,o);const g=1/(p+d+f);return a=d*g,o=f*g,t.copy(n).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qd=0;class Ca extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Cr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Bh;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==gs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $u extends Ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new U,Ys=new Ve;class Un{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=$l,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new qe),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new Ve),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new U),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new lt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ys.fromBufferAttribute(this,t),Ys.applyMatrix3(e),this.setXY(t,Ys.x,Ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ef extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tf extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xi extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xd=0;const Qt=new ht,ro=new Mn,gr=new U,qt=new Is,is=new Is,at=new U;class tr extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yu(e)?tf:ef)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new rn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(qt.min,is.min),qt.expandByPoint(at),at.addVectors(qt.max,is.max),qt.expandByPoint(at)):(qt.expandByPoint(is.min),qt.expandByPoint(is.max))}qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)at.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(at));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)at.fromBufferAttribute(o,c),l&&(gr.fromBufferAttribute(e,c),at.add(gr)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let O=0;O<o;O++)c[O]=new U,u[O]=new U;const h=new U,f=new U,m=new U,_=new Ve,d=new Ve,p=new Ve,g=new U,v=new U;function b(O,I,Y){h.fromArray(i,O*3),f.fromArray(i,I*3),m.fromArray(i,Y*3),_.fromArray(a,O*2),d.fromArray(a,I*2),p.fromArray(a,Y*2),f.sub(h),m.sub(h),d.sub(_),p.sub(_);const j=1/(d.x*p.y-p.x*d.y);isFinite(j)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(j),v.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(j),c[O].add(g),c[I].add(g),c[Y].add(g),u[O].add(v),u[I].add(v),u[Y].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let O=0,I=S.length;O<I;++O){const Y=S[O],j=Y.start,F=Y.count;for(let k=j,L=j+F;k<L;k+=3)b(n[k+0],n[k+1],n[k+2])}const M=new U,w=new U,y=new U,x=new U;function T(O){y.fromArray(r,O*3),x.copy(y);const I=c[O];M.copy(I),M.sub(y.multiplyScalar(y.dot(I))).normalize(),w.crossVectors(x,I);const j=w.dot(u[O])<0?-1:1;l[O*4]=M.x,l[O*4+1]=M.y,l[O*4+2]=M.z,l[O*4+3]=j}for(let O=0,I=S.length;O<I;++O){const Y=S[O],j=Y.start,F=Y.count;for(let k=j,L=j+F;k<L;k+=3)T(n[k+0]),T(n[k+1]),T(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let h=0,f=c;h<u;h++,f++)a[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*u;for(let g=0;g<u;g++)f[_++]=c[m++]}return new Un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new ht,_r=new Ud,so=new Qo,fi=new U,hi=new U,di=new U,ao=new U,oo=new U,lo=new U,js=new U,Ks=new U,Zs=new U,Js=new Ve,Qs=new Ve,$s=new Ve,co=new U,ea=new U;class ni extends Mn{constructor(e=new tr,t=new $u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),e.ray.intersectsSphere(so)===!1)||(dc.copy(r).invert(),_r.copy(e.ray).applyMatrix4(dc),n.boundingBox!==null&&_r.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,_=n.drawRange;if(o!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const g=m[d],v=i[g.materialIndex],b=Math.max(g.start,_.start),S=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let M=b,w=S;M<w;M+=3){const y=o.getX(M),x=o.getX(M+1),T=o.getX(M+2);a=ta(this,v,e,_r,l,c,u,h,f,y,x,T),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const d=Math.max(0,_.start),p=Math.min(o.count,_.start+_.count);for(let g=d,v=p;g<v;g+=3){const b=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);a=ta(this,i,e,_r,l,c,u,h,f,b,S,M),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const g=m[d],v=i[g.materialIndex],b=Math.max(g.start,_.start),S=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let M=b,w=S;M<w;M+=3){const y=M,x=M+1,T=M+2;a=ta(this,v,e,_r,l,c,u,h,f,y,x,T),a&&(a.faceIndex=Math.floor(M/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const d=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let g=d,v=p;g<v;g+=3){const b=g,S=g+1,M=g+2;a=ta(this,i,e,_r,l,c,u,h,f,b,S,M),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function Yd(s,e,t,n,i,r,a,o){let l;if(e.side===Sn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==Fr,o),l===null)return null;ea.copy(o),ea.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ea);return c<t.near||c>t.far?null:{distance:c,point:ea.clone(),object:s}}function ta(s,e,t,n,i,r,a,o,l,c,u,h){fi.fromBufferAttribute(i,c),hi.fromBufferAttribute(i,u),di.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){js.set(0,0,0),Ks.set(0,0,0),Zs.set(0,0,0);for(let _=0,d=r.length;_<d;_++){const p=f[_],g=r[_];p!==0&&(ao.fromBufferAttribute(g,c),oo.fromBufferAttribute(g,u),lo.fromBufferAttribute(g,h),a?(js.addScaledVector(ao,p),Ks.addScaledVector(oo,p),Zs.addScaledVector(lo,p)):(js.addScaledVector(ao.sub(fi),p),Ks.addScaledVector(oo.sub(hi),p),Zs.addScaledVector(lo.sub(di),p)))}fi.add(js),hi.add(Ks),di.add(Zs)}s.isSkinnedMesh&&(s.boneTransform(c,fi),s.boneTransform(u,hi),s.boneTransform(h,di));const m=Yd(s,e,t,n,fi,hi,di,co);if(m){o&&(Js.fromBufferAttribute(o,c),Qs.fromBufferAttribute(o,u),$s.fromBufferAttribute(o,h),m.uv=ti.getUV(co,fi,hi,di,Js,Qs,$s,new Ve)),l&&(Js.fromBufferAttribute(l,c),Qs.fromBufferAttribute(l,u),$s.fromBufferAttribute(l,h),m.uv2=ti.getUV(co,fi,hi,di,Js,Qs,$s,new Ve));const _={a:c,b:u,c:h,normal:new U,materialIndex:0};ti.getNormal(fi,hi,di,_.normal),m.face=_}return m}class Os extends tr{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xi(c,3)),this.setAttribute("normal",new Xi(u,3)),this.setAttribute("uv",new Xi(h,2));function _(d,p,g,v,b,S,M,w,y,x,T){const O=S/y,I=M/x,Y=S/2,j=M/2,F=w/2,k=y+1,L=x+1;let R=0,D=0;const N=new U;for(let V=0;V<L;V++){const Q=V*I-j;for(let Z=0;Z<k;Z++){const ee=Z*O-Y;N[d]=ee*v,N[p]=Q*b,N[g]=F,c.push(N.x,N.y,N.z),N[d]=0,N[p]=0,N[g]=w>0?1:-1,u.push(N.x,N.y,N.z),h.push(Z/y),h.push(1-V/x),R+=1}}for(let V=0;V<x;V++)for(let Q=0;Q<y;Q++){const Z=f+Q+k*V,ee=f+Q+k*(V+1),ne=f+(Q+1)+k*(V+1),ue=f+(Q+1)+k*V;l.push(Z,ee,ue),l.push(ee,ne,ue),D+=6}o.addGroup(m,D,T),m+=D,f+=R}}static fromJSON(e){return new Os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ur(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(s){const e={};for(let t=0;t<s.length;t++){const n=Ur(s[t]);for(const i in n)e[i]=n[i]}return e}const jd={clone:Ur,merge:xt};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Kd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ur(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nf extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends nf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tc*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vr=90,xr=1;class Jd extends Mn{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new _n(vr,xr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new U(1,0,0)),this.add(i);const r=new _n(vr,xr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new U(-1,0,0)),this.add(r);const a=new _n(vr,xr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new U(0,1,0)),this.add(a);const o=new _n(vr,xr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new U(0,-1,0)),this.add(o);const l=new _n(vr,xr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new U(0,0,1)),this.add(l);const c=new _n(vr,xr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new U(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class rf extends cn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qd extends Qi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new rf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Os(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:xi});r.uniforms.tEquirect.value=t;const a=new ni(i,r),o=t.minFilter;return t.minFilter===Aa&&(t.minFilter=tn),new Jd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const uo=new U,$d=new U,ep=new rn;class Oi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=uo.subVectors(n,t).cross($d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ep.getNormalMatrix(e),i=this.coplanarPoint(uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Qo,na=new U;class sf{constructor(e=new Oi,t=new Oi,n=new Oi,i=new Oi,r=new Oi,a=new Oi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],_=n[10],d=n[11],p=n[12],g=n[13],v=n[14],b=n[15];return t[0].setComponents(o-i,h-l,d-f,b-p).normalize(),t[1].setComponents(o+i,h+l,d+f,b+p).normalize(),t[2].setComponents(o+r,h+c,d+m,b+g).normalize(),t[3].setComponents(o-r,h-c,d-m,b-g).normalize(),t[4].setComponents(o-a,h-u,d-_,b-v).normalize(),t[5].setComponents(o+a,h+u,d+_,b+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(na.x=i.normal.x>0?e.max.x:e.min.x,na.y=i.normal.y>0?e.max.y:e.min.y,na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function af(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function tp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;s.bindBuffer(h,c),m.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class La extends tr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,m=[],_=[],d=[],p=[];for(let g=0;g<u;g++){const v=g*f-a;for(let b=0;b<c;b++){const S=b*h-r;_.push(S,-v,0),d.push(0,0,1),p.push(b/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const b=v+c*g,S=v+c*(g+1),M=v+1+c*(g+1),w=v+1+c*g;m.push(b,S,w),m.push(S,M,w)}this.setIndex(m),this.setAttribute("position",new Xi(_,3)),this.setAttribute("normal",new Xi(d,3)),this.setAttribute("uv",new Xi(p,2))}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp="vec3 transformed = vec3( position );",cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,up=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yp=`#define PI 3.141592653589793
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
}`,bp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Wp=`uniform bool receiveShadow;
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
#endif`,Hp=`#if defined( USE_ENVMAP )
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
#endif`,qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Kp=`PhysicalMaterial material;
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
#endif`,Zp=`struct PhysicalMaterial {
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
}`,Jp=`
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
#endif`,Qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,em=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,im=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,um=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,mm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,Sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,bm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#ifdef USE_SHADOWMAP
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
#endif`,Im=`#ifdef USE_SHADOWMAP
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
#endif`,Fm=`#ifdef USE_SHADOWMAP
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
#endif`,Om=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,qm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ym=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Km=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Zm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Jm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ng=`#include <envmap_common_pars_fragment>
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
}`,ig=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,ag=`#define DISTANCE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cg=`uniform float scale;
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
}`,ug=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,hg=`uniform vec3 diffuse;
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
}`,dg=`#define LAMBERT
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#define MATCAP
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
}`,gg=`#define MATCAP
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
}`,_g=`#define NORMAL
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
}`,vg=`#define NORMAL
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
}`,xg=`#define PHONG
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
}`,Sg=`#define PHONG
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
}`,yg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,wg=`#define TOON
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
}`,Tg=`uniform float size;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Ag=`#include <common>
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
}`,Cg=`uniform vec3 color;
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
}`,Lg=`uniform float rotation;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Re={alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:rp,alphatest_pars_fragment:sp,aomap_fragment:ap,aomap_pars_fragment:op,begin_vertex:lp,beginnormal_vertex:cp,bsdfs:up,iridescence_fragment:fp,bumpmap_pars_fragment:hp,clipping_planes_fragment:dp,clipping_planes_pars_fragment:pp,clipping_planes_pars_vertex:mp,clipping_planes_vertex:gp,color_fragment:_p,color_pars_fragment:vp,color_pars_vertex:xp,color_vertex:Sp,common:yp,cube_uv_reflection_fragment:bp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:wp,displacementmap_vertex:Tp,emissivemap_fragment:Ep,emissivemap_pars_fragment:Ap,encodings_fragment:Cp,encodings_pars_fragment:Lp,envmap_fragment:Rp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Pp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Hp,envmap_vertex:Fp,fog_vertex:Op,fog_pars_vertex:Np,fog_fragment:zp,fog_pars_fragment:Up,gradientmap_pars_fragment:kp,lightmap_fragment:Bp,lightmap_pars_fragment:Vp,lights_lambert_vertex:Gp,lights_pars_begin:Wp,lights_toon_fragment:qp,lights_toon_pars_fragment:Xp,lights_phong_fragment:Yp,lights_phong_pars_fragment:jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:Qp,lights_fragment_end:$p,logdepthbuf_fragment:em,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:nm,logdepthbuf_vertex:im,map_fragment:rm,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:om,metalnessmap_fragment:lm,metalnessmap_pars_fragment:cm,morphcolor_vertex:um,morphnormal_vertex:fm,morphtarget_pars_vertex:hm,morphtarget_vertex:dm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:_m,normal_vertex:vm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:Sm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:bm,iridescence_pars_fragment:Mm,output_fragment:wm,packing:Tm,premultiplied_alpha_fragment:Em,project_vertex:Am,dithering_fragment:Cm,dithering_pars_fragment:Lm,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:Dm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Im,shadowmap_vertex:Fm,shadowmask_pars_fragment:Om,skinbase_vertex:Nm,skinning_pars_vertex:zm,skinning_vertex:Um,skinnormal_vertex:km,specularmap_fragment:Bm,specularmap_pars_fragment:Vm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Wm,transmission_fragment:Hm,transmission_pars_fragment:qm,uv_pars_fragment:Xm,uv_pars_vertex:Ym,uv_vertex:jm,uv2_pars_fragment:Km,uv2_pars_vertex:Zm,uv2_vertex:Jm,worldpos_vertex:Qm,background_vert:$m,background_frag:eg,cube_vert:tg,cube_frag:ng,depth_vert:ig,depth_frag:rg,distanceRGBA_vert:sg,distanceRGBA_frag:ag,equirect_vert:og,equirect_frag:lg,linedashed_vert:cg,linedashed_frag:ug,meshbasic_vert:fg,meshbasic_frag:hg,meshlambert_vert:dg,meshlambert_frag:pg,meshmatcap_vert:mg,meshmatcap_frag:gg,meshnormal_vert:_g,meshnormal_frag:vg,meshphong_vert:xg,meshphong_frag:Sg,meshphysical_vert:yg,meshphysical_frag:bg,meshtoon_vert:Mg,meshtoon_frag:wg,points_vert:Tg,points_frag:Eg,shadow_vert:Ag,shadow_frag:Cg,sprite_vert:Lg,sprite_frag:Rg},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new rn},uv2Transform:{value:new rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}}},In={basic:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:xt([oe.points,oe.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:xt([oe.common,oe.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:xt([oe.sprite,oe.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new rn},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:xt([oe.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:xt([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:xt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};In.physical={uniforms:xt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Dg(s,e,t,n,i,r){const a=new qe(0);let o=i===!0?0:1,l,c,u=null,h=0,f=null;function m(d,p){let g=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const b=s.xr,S=b.getSession&&b.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(a,o):v&&v.isColor&&(_(v,1),g=!0),(s.autoClear||g)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ea)?(c===void 0&&(c=new ni(new Os(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Ur(In.cube.uniforms),vertexShader:In.cube.vertexShader,fragmentShader:In.cube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ni(new La(2,2),new wi({name:"BackgroundMaterial",uniforms:Ur(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function _(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(d,p=1){a.set(d),o=p,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,_(a,o)},render:m}}function Pg(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function h(F,k,L,R,D){let N=!1;if(a){const V=d(R,L,k);c!==V&&(c=V,m(c.object)),N=g(F,R,L,D),N&&v(F,R,L,D)}else{const V=k.wireframe===!0;(c.geometry!==R.id||c.program!==L.id||c.wireframe!==V)&&(c.geometry=R.id,c.program=L.id,c.wireframe=V,N=!0)}D!==null&&t.update(D,34963),(N||u)&&(u=!1,x(F,k,L,R),D!==null&&s.bindBuffer(34963,t.get(D).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function d(F,k,L){const R=L.wireframe===!0;let D=o[F.id];D===void 0&&(D={},o[F.id]=D);let N=D[k.id];N===void 0&&(N={},D[k.id]=N);let V=N[R];return V===void 0&&(V=p(f()),N[R]=V),V}function p(F){const k=[],L=[],R=[];for(let D=0;D<i;D++)k[D]=0,L[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:L,attributeDivisors:R,object:F,attributes:{},index:null}}function g(F,k,L,R){const D=c.attributes,N=k.attributes;let V=0;const Q=L.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const ne=D[Z];let ue=N[Z];if(ue===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;V++}return c.attributesNum!==V||c.index!==R}function v(F,k,L,R){const D={},N=k.attributes;let V=0;const Q=L.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let ne=N[Z];ne===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),D[Z]=ue,V++}c.attributes=D,c.attributesNum=V,c.index=R}function b(){const F=c.newAttributes;for(let k=0,L=F.length;k<L;k++)F[k]=0}function S(F){M(F,0)}function M(F,k){const L=c.newAttributes,R=c.enabledAttributes,D=c.attributeDivisors;L[F]=1,R[F]===0&&(s.enableVertexAttribArray(F),R[F]=1),D[F]!==k&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,k),D[F]=k)}function w(){const F=c.newAttributes,k=c.enabledAttributes;for(let L=0,R=k.length;L<R;L++)k[L]!==F[L]&&(s.disableVertexAttribArray(L),k[L]=0)}function y(F,k,L,R,D,N){n.isWebGL2===!0&&(L===5124||L===5125)?s.vertexAttribIPointer(F,k,L,D,N):s.vertexAttribPointer(F,k,L,R,D,N)}function x(F,k,L,R){if(n.isWebGL2===!1&&(F.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const D=R.attributes,N=L.getAttributes(),V=k.defaultAttributeValues;for(const Q in N){const Z=N[Q];if(Z.location>=0){let ee=D[Q];if(ee===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){const ne=ee.normalized,ue=ee.itemSize,q=t.get(ee);if(q===void 0)continue;const je=q.buffer,J=q.type,H=q.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ie=ee.data,Be=ie.stride,De=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)M(Z.location+Se,ie.meshPerAttribute);F.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Se=0;Se<Z.locationSize;Se++)S(Z.location+Se);s.bindBuffer(34962,je);for(let Se=0;Se<Z.locationSize;Se++)y(Z.location+Se,ue/Z.locationSize,J,ne,Be*H,(De+ue/Z.locationSize*Se)*H)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<Z.locationSize;ie++)M(Z.location+ie,ee.meshPerAttribute);F.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<Z.locationSize;ie++)S(Z.location+ie);s.bindBuffer(34962,je);for(let ie=0;ie<Z.locationSize;ie++)y(Z.location+ie,ue/Z.locationSize,J,ne,ue*H,ue/Z.locationSize*ie*H)}}else if(V!==void 0){const ne=V[Q];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(Z.location,ne);break;case 3:s.vertexAttrib3fv(Z.location,ne);break;case 4:s.vertexAttrib4fv(Z.location,ne);break;default:s.vertexAttrib1fv(Z.location,ne)}}}}w()}function T(){Y();for(const F in o){const k=o[F];for(const L in k){const R=k[L];for(const D in R)_(R[D].object),delete R[D];delete k[L]}delete o[F]}}function O(F){if(o[F.id]===void 0)return;const k=o[F.id];for(const L in k){const R=k[L];for(const D in R)_(R[D].object),delete R[D];delete k[L]}delete o[F.id]}function I(F){for(const k in o){const L=o[k];if(L[F.id]===void 0)continue;const R=L[F.id];for(const D in R)_(R[D].object),delete R[D];delete L[F.id]}}function Y(){j(),u=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:j,dispose:T,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:S,disableUnusedAttributes:w}}function Ig(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Fg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(y){if(y==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),d=s.getParameter(34921),p=s.getParameter(36347),g=s.getParameter(36348),v=s.getParameter(36349),b=f>0,S=a||e.has("OES_texture_float"),M=b&&S,w=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:w}}function Og(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Oi,o=new rn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const _=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const _=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const v=r?0:n,b=v*4;let S=g.clippingState||null;l.value=S,S=u(_,f,b,m);for(let M=0;M!==b;++M)S[M]=t[M];g.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const g=m+d*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let b=0,S=m;b!==d;++b,S+=4)a.copy(h[b]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Ng(s){let e=new WeakMap;function t(a,o){return o===Co?a.mapping=Or:o===Lo&&(a.mapping=Nr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Co||o===Lo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qd(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class of extends nf{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wr=4,pc=[.125,.215,.35,.446,.526,.582],Ui=20,fo=new of,mc=new qe;let ho=null;const Ni=(1+Math.sqrt(5))/2,yr=1/Ni,gc=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ni,yr),new U(0,Ni,-yr),new U(yr,0,Ni),new U(-yr,0,Ni),new U(Ni,yr,0),new U(-Ni,yr,0)];class _c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ho=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho),e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:_s,format:On,encoding:Ji,depthBuffer:!1},i=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zg(r)),this._blurMaterial=Ug(r,e,t)}return i}_compileMaterial(e){const t=new ni(this._lodPlanes[0],e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,i){const o=new _n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(mc),u.toneMapping=ii,u.autoClear=!1;const m=new $u({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new ni(new Os,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(mc),d=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):v===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const b=this._cubeSize;ia(i,v*b,g>2?b:0,b,b),u.setRenderTarget(i),d&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Or||e.mapping===Nr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ni(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=gc[(i-1)%gc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ni(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ui-1),d=r/_,p=isFinite(r)?1+Math.floor(u*d):Ui;p>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ui}`);const g=[];let v=0;for(let y=0;y<Ui;++y){const x=y/d,T=Math.exp(-x*x/2);g.push(T),y===0?v+=T:y<p&&(v+=2*T)}for(let y=0;y<g.length;y++)g[y]=g[y]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const S=this._sizeLods[i],M=3*S*(i>b-wr?i-b+wr:0),w=4*(this._cubeSize-S);ia(t,M,w,3*S,2*S),l.setRenderTarget(t),l.render(h,fo)}}function zg(s){const e=[],t=[],n=[];let i=s;const r=s-wr+1+pc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-wr?l=pc[a-s+wr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,d=3,p=2,g=1,v=new Float32Array(d*_*m),b=new Float32Array(p*_*m),S=new Float32Array(g*_*m);for(let w=0;w<m;w++){const y=w%3*2/3-1,x=w>2?0:-1,T=[y,x,0,y+2/3,x,0,y+2/3,x+1,0,y,x,0,y+2/3,x+1,0,y,x+1,0];v.set(T,d*_*w),b.set(f,p*_*w);const O=[w,w,w,w,w,w];S.set(O,g*_*w)}const M=new tr;M.setAttribute("position",new Un(v,d)),M.setAttribute("uv",new Un(b,p)),M.setAttribute("faceIndex",new Un(S,g)),e.push(M),i>wr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vc(s,e,t){const n=new Qi(s,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ug(s,e,t){const n=new Float32Array(Ui),i=new U(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:$o(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function xc(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Sc(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function $o(){return`

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
	`}function kg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Co||l===Lo,u=l===Or||l===Nr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new _c(s)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new _c(s));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vg(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let d=0;if(m!==null){const v=m.array;d=m.version;for(let b=0,S=v.length;b<S;b+=3){const M=v[b+0],w=v[b+1],y=v[b+2];f.push(M,w,w,y,y,M)}}else{const v=_.array;d=_.version;for(let b=0,S=v.length/3-1;b<S;b+=3){const M=b+0,w=b+1,y=b+2;f.push(M,w,w,y,y,M)}}const p=new(Yu(f)?tf:ef)(f,1);p.version=d;const g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Gg(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,m){s.drawElements(r,m,o,f*l),t.update(m,r,1)}function h(f,m,_){if(_===0)return;let d,p;if(i)d=s,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,o,f*l,_),t.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function Wg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hg(s,e){return s[0]-e[0]}function qg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function po(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Xg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==d){let k=function(){j.dispose(),r.delete(u),u.removeEventListener("dispose",k)};p!==void 0&&p.texture.dispose();const b=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let T=0;b===!0&&(T=1),S===!0&&(T=2),M===!0&&(T=3);let O=u.attributes.position.count*T,I=1;O>e.maxTextureSize&&(I=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const Y=new Float32Array(O*I*4*d),j=new Ju(Y,O,I,d);j.type=Bi,j.needsUpdate=!0;const F=T*4;for(let L=0;L<d;L++){const R=w[L],D=y[L],N=x[L],V=O*I*4*L;for(let Q=0;Q<R.count;Q++){const Z=Q*F;b===!0&&(a.fromBufferAttribute(R,Q),R.normalized===!0&&po(a,R),Y[V+Z+0]=a.x,Y[V+Z+1]=a.y,Y[V+Z+2]=a.z,Y[V+Z+3]=0),S===!0&&(a.fromBufferAttribute(D,Q),D.normalized===!0&&po(a,D),Y[V+Z+4]=a.x,Y[V+Z+5]=a.y,Y[V+Z+6]=a.z,Y[V+Z+7]=0),M===!0&&(a.fromBufferAttribute(N,Q),N.normalized===!0&&po(a,N),Y[V+Z+8]=a.x,Y[V+Z+9]=a.y,Y[V+Z+10]=a.z,Y[V+Z+11]=N.itemSize===4?a.w:1)}}p={count:d,texture:j,size:new Ve(O,I)},r.set(u,p),u.addEventListener("dispose",k)}let g=0;for(let b=0;b<m.length;b++)g+=m[b];const v=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==_){d=[];for(let S=0;S<_;S++)d[S]=[S,0];n[u.id]=d}for(let S=0;S<_;S++){const M=d[S];M[0]=S,M[1]=m[S]}d.sort(qg);for(let S=0;S<8;S++)S<_&&d[S][1]?(o[S][0]=d[S][0],o[S][1]=d[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Hg);const p=u.morphAttributes.position,g=u.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const M=o[S],w=M[0],y=M[1];w!==Number.MAX_SAFE_INTEGER&&y?(p&&u.getAttribute("morphTarget"+S)!==p[w]&&u.setAttribute("morphTarget"+S,p[w]),g&&u.getAttribute("morphNormal"+S)!==g[w]&&u.setAttribute("morphNormal"+S,g[w]),i[S]=y,v+=y):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),g&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const b=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",b),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Yg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const lf=new cn,cf=new Ju,uf=new Nd,ff=new rf,yc=[],bc=[],Mc=new Float32Array(16),wc=new Float32Array(9),Tc=new Float32Array(4);function Qr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=yc[i];if(r===void 0&&(r=new Float32Array(i),yc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ra(s,e){let t=bc[e];t===void 0&&(t=new Int32Array(e),bc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function Zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function Jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function Qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;Tc.set(n),s.uniformMatrix2fv(this.addr,!1,Tc),Pt(t,n)}}function $g(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;wc.set(n),s.uniformMatrix3fv(this.addr,!1,wc),Pt(t,n)}}function e_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Dt(t,n))return;Mc.set(n),s.uniformMatrix4fv(this.addr,!1,Mc),Pt(t,n)}}function t_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n_(s,e){const t=this.cache;Dt(t,e)||(s.uniform2iv(this.addr,e),Pt(t,e))}function i_(s,e){const t=this.cache;Dt(t,e)||(s.uniform3iv(this.addr,e),Pt(t,e))}function r_(s,e){const t=this.cache;Dt(t,e)||(s.uniform4iv(this.addr,e),Pt(t,e))}function s_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function a_(s,e){const t=this.cache;Dt(t,e)||(s.uniform2uiv(this.addr,e),Pt(t,e))}function o_(s,e){const t=this.cache;Dt(t,e)||(s.uniform3uiv(this.addr,e),Pt(t,e))}function l_(s,e){const t=this.cache;Dt(t,e)||(s.uniform4uiv(this.addr,e),Pt(t,e))}function c_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||lf,i)}function u_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uf,i)}function f_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ff,i)}function h_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cf,i)}function d_(s){switch(s){case 5126:return jg;case 35664:return Kg;case 35665:return Zg;case 35666:return Jg;case 35674:return Qg;case 35675:return $g;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return r_;case 5125:return s_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return h_}}function p_(s,e){s.uniform1fv(this.addr,e)}function m_(s,e){const t=Qr(e,this.size,2);s.uniform2fv(this.addr,t)}function g_(s,e){const t=Qr(e,this.size,3);s.uniform3fv(this.addr,t)}function __(s,e){const t=Qr(e,this.size,4);s.uniform4fv(this.addr,t)}function v_(s,e){const t=Qr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function x_(s,e){const t=Qr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function S_(s,e){const t=Qr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function y_(s,e){s.uniform1iv(this.addr,e)}function b_(s,e){s.uniform2iv(this.addr,e)}function M_(s,e){s.uniform3iv(this.addr,e)}function w_(s,e){s.uniform4iv(this.addr,e)}function T_(s,e){s.uniform1uiv(this.addr,e)}function E_(s,e){s.uniform2uiv(this.addr,e)}function A_(s,e){s.uniform3uiv(this.addr,e)}function C_(s,e){s.uniform4uiv(this.addr,e)}function L_(s,e,t){const n=e.length,i=Ra(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||lf,i[r])}function R_(s,e,t){const n=e.length,i=Ra(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||uf,i[r])}function D_(s,e,t){const n=e.length,i=Ra(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||ff,i[r])}function P_(s,e,t){const n=e.length,i=Ra(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||cf,i[r])}function I_(s){switch(s){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return v_;case 35675:return x_;case 35676:return S_;case 5124:case 35670:return y_;case 35667:case 35671:return b_;case 35668:case 35672:return M_;case 35669:case 35673:return w_;case 5125:return T_;case 36294:return E_;case 36295:return A_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return P_}}class F_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=d_(t.type)}}class O_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=I_(t.type)}}class N_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Ec(s,e){s.seq.push(e),s.map[e.id]=e}function z_(s,e,t){const n=s.name,i=n.length;for(mo.lastIndex=0;;){const r=mo.exec(n),a=mo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Ec(t,c===void 0?new F_(o,s,e):new O_(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new N_(o),Ec(t,h)),t=h}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);z_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ac(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let U_=0;function k_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function B_(s){switch(s){case Ji:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Cc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+k_(s.getShaderSource(e),a)}else return i}function V_(s,e){const t=B_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function G_(s,e){let t;switch(e){case ld:t="Linear";break;case cd:t="Reinhard";break;case ud:t="OptimizedCineon";break;case fd:t="ACESFilmic";break;case hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function W_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ls).join(`
`)}function H_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function q_(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ls(s){return s!==""}function Lc(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(s){return s.replace(X_,Y_)}function Y_(s,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Fo(t)}const j_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(s){return s.replace(K_,hf).replace(j_,Z_)}function Z_(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),hf(s,e,t,n)}function hf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function J_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function Q_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Or:case Nr:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Nr:e="ENVMAP_MODE_REFRACTION";break}return e}function e0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hu:e="ENVMAP_BLENDING_MULTIPLY";break;case ad:e="ENVMAP_BLENDING_MIX";break;case od:e="ENVMAP_BLENDING_ADD";break}return e}function t0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function n0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=J_(t),c=Q_(t),u=$_(t),h=e0(t),f=t0(t),m=t.isWebGL2?"":W_(t),_=H_(r),d=i.createProgram();let p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(ls).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(ls).join(`
`),g.length>0&&(g+=`
`)):(p=[Pc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),g=[m,Pc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Re.tonemapping_pars_fragment:"",t.toneMapping!==ii?G_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,V_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=Fo(a),a=Lc(a,t),a=Rc(a,t),o=Fo(o),o=Lc(o,t),o=Rc(o,t),a=Dc(a),o=Dc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=v+p+a,S=v+g+o,M=Ac(i,35633,b),w=Ac(i,35632,S);if(i.attachShader(d,M),i.attachShader(d,w),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),s.debug.checkShaderErrors){const T=i.getProgramInfoLog(d).trim(),O=i.getShaderInfoLog(M).trim(),I=i.getShaderInfoLog(w).trim();let Y=!0,j=!0;if(i.getProgramParameter(d,35714)===!1){Y=!1;const F=Cc(i,M,"vertex"),k=Cc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+F+`
`+k)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(O===""||I==="")&&(j=!1);j&&(this.diagnostics={runnable:Y,programLog:T,vertexShader:{log:O,prefix:p},fragmentShader:{log:I,prefix:g}})}i.deleteShader(M),i.deleteShader(w);let y;this.getUniforms=function(){return y===void 0&&(y=new ca(i,d)),y};let x;return this.getAttributes=function(){return x===void 0&&(x=q_(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=U_++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=w,this}let i0=0;class r0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new s0(e);t.set(e,n)}return t.get(e)}}class s0{constructor(e){this.id=i0++,this.code=e,this.usedTimes=0}}function a0(s,e,t,n,i,r,a){const o=new Qu,l=new r0,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,O,I,Y){const j=I.fog,F=Y.geometry,k=x.isMeshStandardMaterial?I.environment:null,L=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),R=L&&L.mapping===Ea?L.image.height:null,D=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const N=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=N!==void 0?N.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let Z,ee,ne,ue;if(D){const Be=In[D];Z=Be.vertexShader,ee=Be.fragmentShader}else Z=x.vertexShader,ee=x.fragmentShader,l.update(x),ne=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const q=s.getRenderTarget(),je=x.alphaTest>0,J=x.clearcoat>0,H=x.iridescence>0;return{isWebGL2:u,shaderID:D,shaderName:x.type,vertexShader:Z,fragmentShader:ee,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:q===null?s.outputEncoding:q.isXRRenderTarget===!0?q.texture.encoding:Ji,map:!!x.map,matcap:!!x.matcap,envMap:!!L,envMapMode:L&&L.mapping,envMapCubeUVHeight:R,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Pd,tangentSpaceNormalMap:x.normalMapType===Dd,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ze,clearcoat:J,clearcoatMap:J&&!!x.clearcoatMap,clearcoatRoughnessMap:J&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!x.clearcoatNormalMap,iridescence:H,iridescenceMap:H&&!!x.iridescenceMap,iridescenceThicknessMap:H&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Cr,alphaMap:!!x.alphaMap,alphaTest:je,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!j,useFog:x.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:ii,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fr,flipSided:x.side===Sn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)T.push(O),T.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(g(T,x),v(T,x),T.push(s.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),T.fog&&o.enable(33),x.push(o.mask),o.disableAll(),T.useFog&&o.enable(0),T.flatShading&&o.enable(1),T.logarithmicDepthBuffer&&o.enable(2),T.skinning&&o.enable(3),T.morphTargets&&o.enable(4),T.morphNormals&&o.enable(5),T.morphColors&&o.enable(6),T.premultipliedAlpha&&o.enable(7),T.shadowMapEnabled&&o.enable(8),T.physicallyCorrectLights&&o.enable(9),T.doubleSided&&o.enable(10),T.flipSided&&o.enable(11),T.useDepthPacking&&o.enable(12),T.dithering&&o.enable(13),T.specularIntensityMap&&o.enable(14),T.specularColorMap&&o.enable(15),T.transmission&&o.enable(16),T.transmissionMap&&o.enable(17),T.thicknessMap&&o.enable(18),T.sheen&&o.enable(19),T.sheenColorMap&&o.enable(20),T.sheenRoughnessMap&&o.enable(21),T.decodeVideoTexture&&o.enable(22),T.opaque&&o.enable(23),x.push(o.mask)}function b(x){const T=_[x.type];let O;if(T){const I=In[T];O=jd.clone(I.uniforms)}else O=x.uniforms;return O}function S(x,T){let O;for(let I=0,Y=c.length;I<Y;I++){const j=c[I];if(j.cacheKey===T){O=j,++O.usedTimes;break}}return O===void 0&&(O=new n0(s,T,x,r),c.push(O)),O}function M(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function y(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:b,acquireProgram:S,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:y}}function o0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function l0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ic(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Fc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,m,_,d,p){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:d,group:p},s[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=d,g.group=p),e++,g}function o(h,f,m,_,d,p){const g=a(h,f,m,_,d,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(h,f,m,_,d,p){const g=a(h,f,m,_,d,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||l0),n.length>1&&n.sort(f||Ic),i.length>1&&i.sort(f||Ic)}function u(){for(let h=e,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function c0(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new Fc,s.set(n,[r])):i>=s.get(n).length?(r=new Fc,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function u0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new qe};break;case"SpotLight":t={position:new U,direction:new U,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function f0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let h0=0;function d0(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function p0(s,e){const t=new u0,n=f0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,a=new ht,o=new ht;function l(u,h){let f=0,m=0,_=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,p=0,g=0,v=0,b=0,S=0,M=0,w=0;u.sort(d0);const y=h!==!0?Math.PI:1;for(let T=0,O=u.length;T<O;T++){const I=u[T],Y=I.color,j=I.intensity,F=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=Y.r*j*y,m+=Y.g*j*y,_+=Y.b*j*y;else if(I.isLightProbe)for(let L=0;L<9;L++)i.probe[L].addScaledVector(I.sh.coefficients[L],j);else if(I.isDirectionalLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const R=I.shadow,D=n.get(I);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,i.directionalShadow[d]=D,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=L,d++}else if(I.isSpotLight){const L=t.get(I);if(L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(Y).multiplyScalar(j*y),L.distance=F,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,I.castShadow){const R=I.shadow,D=n.get(I);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,i.spotShadow[g]=D,i.spotShadowMap[g]=k,i.spotShadowMatrix[g]=I.shadow.matrix,w++}i.spot[g]=L,g++}else if(I.isRectAreaLight){const L=t.get(I);L.color.copy(Y).multiplyScalar(j),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=L,v++}else if(I.isPointLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*y),L.distance=I.distance,L.decay=I.decay,I.castShadow){const R=I.shadow,D=n.get(I);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,D.shadowCameraNear=R.camera.near,D.shadowCameraFar=R.camera.far,i.pointShadow[p]=D,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=I.shadow.matrix,M++}i.point[p]=L,p++}else if(I.isHemisphereLight){const L=t.get(I);L.skyColor.copy(I.color).multiplyScalar(j*y),L.groundColor.copy(I.groundColor).multiplyScalar(j*y),i.hemi[b]=L,b++}}v>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==g||x.rectAreaLength!==v||x.hemiLength!==b||x.numDirectionalShadows!==S||x.numPointShadows!==M||x.numSpotShadows!==w)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=v,i.point.length=p,i.hemi.length=b,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=w,x.directionalLength=d,x.pointLength=p,x.spotLength=g,x.rectAreaLength=v,x.hemiLength=b,x.numDirectionalShadows=S,x.numPointShadows=M,x.numSpotShadows=w,i.version=h0++)}function c(u,h){let f=0,m=0,_=0,d=0,p=0;const g=h.matrixWorldInverse;for(let v=0,b=u.length;v<b;v++){const S=u[v];if(S.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),f++}else if(S.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),o.identity(),a.copy(S.matrixWorld),a.premultiply(g),o.extractRotation(a),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),d++}else if(S.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function Oc(s,e){const t=new p0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function m0(s,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new Oc(s,e),t.set(r,[o])):a>=t.get(r).length?(o=new Oc(s,e),t.get(r).push(o)):o=t.get(r)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class g0 extends Ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _0 extends Ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const v0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x0=`uniform sampler2D shadow_pass;
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
}`;function S0(s,e,t){let n=new sf;const i=new Ve,r=new Ve,a=new lt,o=new g0({depthPacking:Rd}),l=new _0,c={},u=t.maxTextureSize,h={0:Sn,1:gs,2:Fr},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:v0,fragmentShader:x0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new tr;_.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ni(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vu,this.render=function(S,M,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const y=s.getRenderTarget(),x=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),O=s.state;O.setBlending(xi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let I=0,Y=S.length;I<Y;I++){const j=S[I],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const k=F.getFrameExtents();if(i.multiply(k),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/k.x),i.x=r.x*k.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/k.y),i.y=r.y*k.y,F.mapSize.y=r.y)),F.map===null){const R=this.type!==os?{minFilter:Ft,magFilter:Ft}:{};F.map=new Qi(i.x,i.y,R),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const L=F.getViewportCount();for(let R=0;R<L;R++){const D=F.getViewport(R);a.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),O.viewport(a),F.updateMatrices(j,R),n=F.getFrustum(),b(M,w,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===os&&g(F,w),F.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(y,x,T)};function g(S,M){const w=e.update(d);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Qi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(M,null,w,f,d,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(M,null,w,m,d,null)}function v(S,M,w,y,x,T){let O=null;const I=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0?O=I:O=w.isPointLight===!0?l:o,s.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const Y=O.uuid,j=M.uuid;let F=c[Y];F===void 0&&(F={},c[Y]=F);let k=F[j];k===void 0&&(k=O.clone(),F[j]=k),O=k}return O.visible=M.visible,O.wireframe=M.wireframe,T===os?O.side=M.shadowSide!==null?M.shadowSide:M.side:O.side=M.shadowSide!==null?M.shadowSide:h[M.side],O.alphaMap=M.alphaMap,O.alphaTest=M.alphaTest,O.clipShadows=M.clipShadows,O.clippingPlanes=M.clippingPlanes,O.clipIntersection=M.clipIntersection,O.displacementMap=M.displacementMap,O.displacementScale=M.displacementScale,O.displacementBias=M.displacementBias,O.wireframeLinewidth=M.wireframeLinewidth,O.linewidth=M.linewidth,w.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(w.matrixWorld),O.nearDistance=y,O.farDistance=x),O}function b(S,M,w,y,x){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===os)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const I=e.update(S),Y=S.material;if(Array.isArray(Y)){const j=I.groups;for(let F=0,k=j.length;F<k;F++){const L=j[F],R=Y[L.materialIndex];if(R&&R.visible){const D=v(S,R,y,w.near,w.far,x);s.renderBufferDirect(w,null,I,D,S,L)}}}else if(Y.visible){const j=v(S,Y,y,w.near,w.far,x);s.renderBufferDirect(w,null,I,j,S,null)}}const O=S.children;for(let I=0,Y=O.length;I<Y;I++)b(O[I],M,w,y,x)}}function y0(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new lt;let se=null;const xe=new lt(0,0,0,0);return{setMask:function(fe){se!==fe&&!P&&(s.colorMask(fe,fe,fe,fe),se=fe)},setLocked:function(fe){P=fe},setClear:function(fe,be,te,Me,ze){ze===!0&&(fe*=Me,be*=Me,te*=Me),ae.set(fe,be,te,Me),xe.equals(ae)===!1&&(s.clearColor(fe,be,te,Me),xe.copy(ae))},reset:function(){P=!1,se=null,xe.set(-1,0,0,0)}}}function r(){let P=!1,ae=null,se=null,xe=null;return{setTest:function(fe){fe?ue(2929):q(2929)},setMask:function(fe){ae!==fe&&!P&&(s.depthMask(fe),ae=fe)},setFunc:function(fe){if(se!==fe){if(fe)switch(fe){case $h:s.depthFunc(512);break;case ed:s.depthFunc(519);break;case td:s.depthFunc(513);break;case Ao:s.depthFunc(515);break;case nd:s.depthFunc(514);break;case id:s.depthFunc(518);break;case rd:s.depthFunc(516);break;case sd:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);se=fe}},setLocked:function(fe){P=fe},setClear:function(fe){xe!==fe&&(s.clearDepth(fe),xe=fe)},reset:function(){P=!1,ae=null,se=null,xe=null}}}function a(){let P=!1,ae=null,se=null,xe=null,fe=null,be=null,te=null,Me=null,ze=null;return{setTest:function(Ue){P||(Ue?ue(2960):q(2960))},setMask:function(Ue){ae!==Ue&&!P&&(s.stencilMask(Ue),ae=Ue)},setFunc:function(Ue,At,Ln){(se!==Ue||xe!==At||fe!==Ln)&&(s.stencilFunc(Ue,At,Ln),se=Ue,xe=At,fe=Ln)},setOp:function(Ue,At,Ln){(be!==Ue||te!==At||Me!==Ln)&&(s.stencilOp(Ue,At,Ln),be=Ue,te=At,Me=Ln)},setLocked:function(Ue){P=Ue},setClear:function(Ue){ze!==Ue&&(s.clearStencil(Ue),ze=Ue)},reset:function(){P=!1,ae=null,se=null,xe=null,fe=null,be=null,te=null,Me=null,ze=null}}}const o=new i,l=new r,c=new a;let u={},h={},f=new WeakMap,m=[],_=null,d=!1,p=null,g=null,v=null,b=null,S=null,M=null,w=null,y=!1,x=null,T=null,O=null,I=null,Y=null;const j=s.getParameter(35661);let F=!1,k=0;const L=s.getParameter(7938);L.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(L)[1]),F=k>=1):L.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),F=k>=2);let R=null,D={};const N=s.getParameter(3088),V=s.getParameter(2978),Q=new lt().fromArray(N),Z=new lt().fromArray(V);function ee(P,ae,se){const xe=new Uint8Array(4),fe=s.createTexture();s.bindTexture(P,fe),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let be=0;be<se;be++)s.texImage2D(ae+be,0,6408,1,1,0,6408,5121,xe);return fe}const ne={};ne[3553]=ee(3553,3553,1),ne[34067]=ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(2929),l.setFunc(Ao),_t(!1),It(wl),ue(2884),De(xi);function ue(P){u[P]!==!0&&(s.enable(P),u[P]=!0)}function q(P){u[P]!==!1&&(s.disable(P),u[P]=!1)}function je(P,ae){return h[P]!==ae?(s.bindFramebuffer(P,ae),h[P]=ae,n&&(P===36009&&(h[36160]=ae),P===36160&&(h[36009]=ae)),!0):!1}function J(P,ae){let se=m,xe=!1;if(P)if(se=f.get(ae),se===void 0&&(se=[],f.set(ae,se)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(se.length!==fe.length||se[0]!==36064){for(let be=0,te=fe.length;be<te;be++)se[be]=36064+be;se.length=fe.length,xe=!0}}else se[0]!==36064&&(se[0]=36064,xe=!0);else se[0]!==1029&&(se[0]=1029,xe=!0);xe&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function H(P){return _!==P?(s.useProgram(P),_=P,!0):!1}const ie={[Mr]:32774,[Gh]:32778,[Wh]:32779};if(n)ie[Cl]=32775,ie[Ll]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ie[Cl]=P.MIN_EXT,ie[Ll]=P.MAX_EXT)}const Be={[Hh]:0,[qh]:1,[Xh]:768,[Gu]:770,[Qh]:776,[Zh]:774,[jh]:772,[Yh]:769,[Wu]:771,[Jh]:775,[Kh]:773};function De(P,ae,se,xe,fe,be,te,Me){if(P===xi){d===!0&&(q(3042),d=!1);return}if(d===!1&&(ue(3042),d=!0),P!==Vh){if(P!==p||Me!==y){if((g!==Mr||S!==Mr)&&(s.blendEquation(32774),g=Mr,S=Mr),Me)switch(P){case Cr:s.blendFuncSeparate(1,771,1,771);break;case Tl:s.blendFunc(1,1);break;case El:s.blendFuncSeparate(0,769,0,1);break;case Al:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Cr:s.blendFuncSeparate(770,771,1,771);break;case Tl:s.blendFunc(770,1);break;case El:s.blendFuncSeparate(0,769,0,1);break;case Al:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,b=null,M=null,w=null,p=P,y=Me}return}fe=fe||ae,be=be||se,te=te||xe,(ae!==g||fe!==S)&&(s.blendEquationSeparate(ie[ae],ie[fe]),g=ae,S=fe),(se!==v||xe!==b||be!==M||te!==w)&&(s.blendFuncSeparate(Be[se],Be[xe],Be[be],Be[te]),v=se,b=xe,M=be,w=te),p=P,y=null}function Se(P,ae){P.side===Fr?q(2884):ue(2884);let se=P.side===Sn;ae&&(se=!se),_t(se),P.blending===Cr&&P.transparent===!1?De(xi):De(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const xe=P.stencilWrite;c.setTest(xe),xe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Cn(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(32926):q(32926)}function _t(P){x!==P&&(P?s.frontFace(2304):s.frontFace(2305),x=P)}function It(P){P!==zh?(ue(2884),P!==T&&(P===wl?s.cullFace(1029):P===Uh?s.cullFace(1028):s.cullFace(1032))):q(2884),T=P}function Wt(P){P!==O&&(F&&s.lineWidth(P),O=P)}function Cn(P,ae,se){P?(ue(32823),(I!==ae||Y!==se)&&(s.polygonOffset(ae,se),I=ae,Y=se)):q(32823)}function ut(P){P?ue(3089):q(3089)}function Ge(P){P===void 0&&(P=33984+j-1),R!==P&&(s.activeTexture(P),R=P)}function Hn(P,ae){R===null&&Ge();let se=D[R];se===void 0&&(se={type:void 0,texture:void 0},D[R]=se),(se.type!==P||se.texture!==ae)&&(s.bindTexture(P,ae||ne[P]),se.type=P,se.texture=ae)}function qn(){const P=D[R];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function C(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){Q.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function de(P){Z.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function ce(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},R=null,D={},h={},f=new WeakMap,m=[],_=null,d=!1,p=null,g=null,v=null,b=null,S=null,M=null,w=null,y=!1,x=null,T=null,O=null,I=null,Y=null,Q.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ue,disable:q,bindFramebuffer:je,drawBuffers:J,useProgram:H,setBlending:De,setMaterial:Se,setFlipSided:_t,setCullFace:It,setLineWidth:Wt,setPolygonOffset:Cn,setScissorTest:ut,activeTexture:Ge,bindTexture:Hn,unbindTexture:qn,compressedTexImage2D:C,texImage2D:Ee,texImage3D:W,texStorage2D:re,texStorage3D:le,texSubImage2D:E,texSubImage3D:X,compressedTexSubImage2D:$,scissor:me,viewport:de,reset:ce}}function b0(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return g?new OffscreenCanvas(C,E):vs("canvas")}function b(C,E,X,$){let re=1;if((C.width>$||C.height>$)&&(re=$/Math.max(C.width,C.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=E?Io:Math.floor,Ee=le(re*C.width),W=le(re*C.height);d===void 0&&(d=v(Ee,W));const me=X?v(Ee,W):d;return me.width=Ee,me.height=W,me.getContext("2d").drawImage(C,0,0,Ee,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ee+"x"+W+")."),me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return nc(C.width)&&nc(C.height)}function M(C){return o?!1:C.wrapS!==vn||C.wrapT!==vn||C.minFilter!==Ft&&C.minFilter!==tn}function w(C,E){return C.generateMipmaps&&E&&C.minFilter!==Ft&&C.minFilter!==tn}function y(C){s.generateMipmap(C)}function x(C,E,X,$,re=!1){if(o===!1)return E;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=E;return E===6403&&(X===5126&&(le=33326),X===5131&&(le=33325),X===5121&&(le=33321)),E===33319&&(X===5126&&(le=33328),X===5131&&(le=33327),X===5121&&(le=33323)),E===6408&&(X===5126&&(le=34836),X===5131&&(le=34842),X===5121&&(le=$===Ze&&re===!1?35907:32856),X===32819&&(le=32854),X===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(C,E,X){return w(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==tn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function O(C){return C===Ft||C===Rl||C===Dl?9728:9729}function I(C){const E=C.target;E.removeEventListener("dispose",I),j(E),E.isVideoTexture&&_.delete(E)}function Y(C){const E=C.target;E.removeEventListener("dispose",Y),k(E)}function j(C){const E=n.get(C);if(E.__webglInit===void 0)return;const X=C.source,$=p.get(X);if($){const re=$[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(C),Object.keys($).length===0&&p.delete(X)}n.remove(C)}function F(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const X=C.source,$=p.get(X);delete $[E.__cacheKey],a.memory.textures--}function k(C){const E=C.texture,X=n.get(C),$=n.get(E);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)s.deleteFramebuffer(X.__webglFramebuffer[re]),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[re]);else{if(s.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let re=0;re<X.__webglColorRenderbuffer.length;re++)X.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[re]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,le=E.length;re<le;re++){const Ee=n.get(E[re]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(E[re])}n.remove(E),n.remove(C)}let L=0;function R(){L=0}function D(){const C=L;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),L+=1,C}function N(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.encoding),E.join()}function V(C,E){const X=n.get(C);if(C.isVideoTexture&&Hn(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(X,C,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,X.__webglTexture)}function Q(C,E){const X=n.get(C);if(C.version>0&&X.__version!==C.version){J(X,C,E);return}t.activeTexture(33984+E),t.bindTexture(35866,X.__webglTexture)}function Z(C,E){const X=n.get(C);if(C.version>0&&X.__version!==C.version){J(X,C,E);return}t.activeTexture(33984+E),t.bindTexture(32879,X.__webglTexture)}function ee(C,E){const X=n.get(C);if(C.version>0&&X.__version!==C.version){H(X,C,E);return}t.activeTexture(33984+E),t.bindTexture(34067,X.__webglTexture)}const ne={[Ro]:10497,[vn]:33071,[Do]:33648},ue={[Ft]:9728,[Rl]:9984,[Dl]:9986,[tn]:9729,[dd]:9985,[Aa]:9987};function q(C,E,X){if(X?(s.texParameteri(C,10242,ne[E.wrapS]),s.texParameteri(C,10243,ne[E.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,ne[E.wrapR]),s.texParameteri(C,10240,ue[E.magFilter]),s.texParameteri(C,10241,ue[E.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(E.wrapS!==vn||E.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,O(E.magFilter)),s.texParameteri(C,10241,O(E.minFilter)),E.minFilter!==Ft&&E.minFilter!==tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(E.type===Bi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===_s&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function je(C,E){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",I));const $=E.source;let re=p.get($);re===void 0&&(re={},p.set($,re));const le=N(E);if(le!==C.__cacheKey){re[le]===void 0&&(re[le]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[le].usedTimes++;const Ee=re[C.__cacheKey];Ee!==void 0&&(re[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&F(E)),C.__cacheKey=le,C.__webglTexture=re[le].texture}return X}function J(C,E,X){let $=3553;E.isDataArrayTexture&&($=35866),E.isData3DTexture&&($=32879);const re=je(C,E),le=E.source;if(t.activeTexture(33984+X),t.bindTexture($,C.__webglTexture),le.version!==le.__currentVersion||re===!0){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const Ee=M(E)&&S(E.image)===!1;let W=b(E.image,Ee,!1,u);W=qn(E,W);const me=S(W)||o,de=r.convert(E.format,E.encoding);let ce=r.convert(E.type),P=x(E.internalFormat,de,ce,E.encoding,E.isVideoTexture);q($,E,me);let ae;const se=E.mipmaps,xe=o&&E.isVideoTexture!==!0,fe=le.__currentVersion===void 0||re===!0,be=T(E,W,me);if(E.isDepthTexture)P=6402,o?E.type===Bi?P=36012:E.type===ki?P=33190:E.type===Lr?P=35056:P=33189:E.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Hi&&P===6402&&E.type!==Xu&&E.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ki,ce=r.convert(E.type)),E.format===zr&&P===6402&&(P=34041,E.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Lr,ce=r.convert(E.type))),fe&&(xe?t.texStorage2D(3553,1,P,W.width,W.height):t.texImage2D(3553,0,P,W.width,W.height,0,de,ce,null));else if(E.isDataTexture)if(se.length>0&&me){xe&&fe&&t.texStorage2D(3553,be,P,se[0].width,se[0].height);for(let te=0,Me=se.length;te<Me;te++)ae=se[te],xe?t.texSubImage2D(3553,te,0,0,ae.width,ae.height,de,ce,ae.data):t.texImage2D(3553,te,P,ae.width,ae.height,0,de,ce,ae.data);E.generateMipmaps=!1}else xe?(fe&&t.texStorage2D(3553,be,P,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,de,ce,W.data)):t.texImage2D(3553,0,P,W.width,W.height,0,de,ce,W.data);else if(E.isCompressedTexture){xe&&fe&&t.texStorage2D(3553,be,P,se[0].width,se[0].height);for(let te=0,Me=se.length;te<Me;te++)ae=se[te],E.format!==On?de!==null?xe?t.compressedTexSubImage2D(3553,te,0,0,ae.width,ae.height,de,ae.data):t.compressedTexImage2D(3553,te,P,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage2D(3553,te,0,0,ae.width,ae.height,de,ce,ae.data):t.texImage2D(3553,te,P,ae.width,ae.height,0,de,ce,ae.data)}else if(E.isDataArrayTexture)xe?(fe&&t.texStorage3D(35866,be,P,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,de,ce,W.data)):t.texImage3D(35866,0,P,W.width,W.height,W.depth,0,de,ce,W.data);else if(E.isData3DTexture)xe?(fe&&t.texStorage3D(32879,be,P,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,de,ce,W.data)):t.texImage3D(32879,0,P,W.width,W.height,W.depth,0,de,ce,W.data);else if(E.isFramebufferTexture){if(fe)if(xe)t.texStorage2D(3553,be,P,W.width,W.height);else{let te=W.width,Me=W.height;for(let ze=0;ze<be;ze++)t.texImage2D(3553,ze,P,te,Me,0,de,ce,null),te>>=1,Me>>=1}}else if(se.length>0&&me){xe&&fe&&t.texStorage2D(3553,be,P,se[0].width,se[0].height);for(let te=0,Me=se.length;te<Me;te++)ae=se[te],xe?t.texSubImage2D(3553,te,0,0,de,ce,ae):t.texImage2D(3553,te,P,de,ce,ae);E.generateMipmaps=!1}else xe?(fe&&t.texStorage2D(3553,be,P,W.width,W.height),t.texSubImage2D(3553,0,0,0,de,ce,W)):t.texImage2D(3553,0,P,de,ce,W);w(E,me)&&y($),le.__currentVersion=le.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function H(C,E,X){if(E.image.length!==6)return;const $=je(C,E),re=E.source;if(t.activeTexture(33984+X),t.bindTexture(34067,C.__webglTexture),re.version!==re.__currentVersion||$===!0){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,W=[];for(let te=0;te<6;te++)!le&&!Ee?W[te]=b(E.image[te],!1,!0,c):W[te]=Ee?E.image[te].image:E.image[te],W[te]=qn(E,W[te]);const me=W[0],de=S(me)||o,ce=r.convert(E.format,E.encoding),P=r.convert(E.type),ae=x(E.internalFormat,ce,P,E.encoding),se=o&&E.isVideoTexture!==!0,xe=re.__currentVersion===void 0||$===!0;let fe=T(E,me,de);q(34067,E,de);let be;if(le){se&&xe&&t.texStorage2D(34067,fe,ae,me.width,me.height);for(let te=0;te<6;te++){be=W[te].mipmaps;for(let Me=0;Me<be.length;Me++){const ze=be[Me];E.format!==On?ce!==null?se?t.compressedTexSubImage2D(34069+te,Me,0,0,ze.width,ze.height,ce,ze.data):t.compressedTexImage2D(34069+te,Me,ae,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?t.texSubImage2D(34069+te,Me,0,0,ze.width,ze.height,ce,P,ze.data):t.texImage2D(34069+te,Me,ae,ze.width,ze.height,0,ce,P,ze.data)}}}else{be=E.mipmaps,se&&xe&&(be.length>0&&fe++,t.texStorage2D(34067,fe,ae,W[0].width,W[0].height));for(let te=0;te<6;te++)if(Ee){se?t.texSubImage2D(34069+te,0,0,0,W[te].width,W[te].height,ce,P,W[te].data):t.texImage2D(34069+te,0,ae,W[te].width,W[te].height,0,ce,P,W[te].data);for(let Me=0;Me<be.length;Me++){const Ue=be[Me].image[te].image;se?t.texSubImage2D(34069+te,Me+1,0,0,Ue.width,Ue.height,ce,P,Ue.data):t.texImage2D(34069+te,Me+1,ae,Ue.width,Ue.height,0,ce,P,Ue.data)}}else{se?t.texSubImage2D(34069+te,0,0,0,ce,P,W[te]):t.texImage2D(34069+te,0,ae,ce,P,W[te]);for(let Me=0;Me<be.length;Me++){const ze=be[Me];se?t.texSubImage2D(34069+te,Me+1,0,0,ce,P,ze.image[te]):t.texImage2D(34069+te,Me+1,ae,ce,P,ze.image[te])}}}w(E,de)&&y(34067),re.__currentVersion=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ie(C,E,X,$,re){const le=r.convert(X.format,X.encoding),Ee=r.convert(X.type),W=x(X.internalFormat,le,Ee,X.encoding);n.get(E).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,W,E.width,E.height,E.depth,0,le,Ee,null):t.texImage2D(re,0,W,E.width,E.height,0,le,Ee,null)),t.bindFramebuffer(36160,C),Ge(E)?f.framebufferTexture2DMultisampleEXT(36160,$,re,n.get(X).__webglTexture,0,ut(E)):s.framebufferTexture2D(36160,$,re,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(C,E,X){if(s.bindRenderbuffer(36161,C),E.depthBuffer&&!E.stencilBuffer){let $=33189;if(X||Ge(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===Bi?$=36012:re.type===ki&&($=33190));const le=ut(E);Ge(E)?f.renderbufferStorageMultisampleEXT(36161,le,$,E.width,E.height):s.renderbufferStorageMultisample(36161,le,$,E.width,E.height)}else s.renderbufferStorage(36161,$,E.width,E.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(E.depthBuffer&&E.stencilBuffer){const $=ut(E);X&&Ge(E)===!1?s.renderbufferStorageMultisample(36161,$,35056,E.width,E.height):Ge(E)?f.renderbufferStorageMultisampleEXT(36161,$,35056,E.width,E.height):s.renderbufferStorage(36161,34041,E.width,E.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const $=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<$.length;re++){const le=$[re],Ee=r.convert(le.format,le.encoding),W=r.convert(le.type),me=x(le.internalFormat,Ee,W,le.encoding),de=ut(E);X&&Ge(E)===!1?s.renderbufferStorageMultisample(36161,de,me,E.width,E.height):Ge(E)?f.renderbufferStorageMultisampleEXT(36161,de,me,E.width,E.height):s.renderbufferStorage(36161,me,E.width,E.height)}}s.bindRenderbuffer(36161,null)}function De(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const $=n.get(E.depthTexture).__webglTexture,re=ut(E);if(E.depthTexture.format===Hi)Ge(E)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,re):s.framebufferTexture2D(36160,36096,3553,$,0);else if(E.depthTexture.format===zr)Ge(E)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,re):s.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function Se(C){const E=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");De(E.__webglFramebuffer,C)}else if(X){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]=s.createRenderbuffer(),Be(E.__webglDepthbuffer[$],C,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Be(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function _t(C,E,X){const $=n.get(C);E!==void 0&&ie($.__webglFramebuffer,C,C.texture,36064,3553),X!==void 0&&Se(C)}function It(C){const E=C.texture,X=n.get(C),$=n.get(E);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,a.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,Ee=S(C)||o;if(re){X.__webglFramebuffer=[];for(let W=0;W<6;W++)X.__webglFramebuffer[W]=s.createFramebuffer()}else{if(X.__webglFramebuffer=s.createFramebuffer(),le)if(i.drawBuffers){const W=C.texture;for(let me=0,de=W.length;me<de;me++){const ce=n.get(W[me]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&Ge(C)===!1){const W=le?E:[E];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let me=0;me<W.length;me++){const de=W[me];X.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(36161,X.__webglColorRenderbuffer[me]);const ce=r.convert(de.format,de.encoding),P=r.convert(de.type),ae=x(de.internalFormat,ce,P,de.encoding),se=ut(C);s.renderbufferStorageMultisample(36161,se,ae,C.width,C.height),s.framebufferRenderbuffer(36160,36064+me,36161,X.__webglColorRenderbuffer[me])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,$.__webglTexture),q(34067,E,Ee);for(let W=0;W<6;W++)ie(X.__webglFramebuffer[W],C,E,36064,34069+W);w(E,Ee)&&y(34067),t.unbindTexture()}else if(le){const W=C.texture;for(let me=0,de=W.length;me<de;me++){const ce=W[me],P=n.get(ce);t.bindTexture(3553,P.__webglTexture),q(3553,ce,Ee),ie(X.__webglFramebuffer,C,ce,36064+me,3553),w(ce,Ee)&&y(3553)}t.unbindTexture()}else{let W=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?W=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(W,$.__webglTexture),q(W,E,Ee),ie(X.__webglFramebuffer,C,E,36064,W),w(E,Ee)&&y(W),t.unbindTexture()}C.depthBuffer&&Se(C)}function Wt(C){const E=S(C)||o,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let $=0,re=X.length;$<re;$++){const le=X[$];if(w(le,E)){const Ee=C.isWebGLCubeRenderTarget?34067:3553,W=n.get(le).__webglTexture;t.bindTexture(Ee,W),y(Ee),t.unbindTexture()}}}function Cn(C){if(o&&C.samples>0&&Ge(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,$=C.height;let re=16384;const le=[],Ee=C.stencilBuffer?33306:36096,W=n.get(C),me=C.isWebGLMultipleRenderTargets===!0;if(me)for(let de=0;de<E.length;de++)t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,null),t.bindFramebuffer(36160,W.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,null,0);t.bindFramebuffer(36008,W.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,W.__webglFramebuffer);for(let de=0;de<E.length;de++){le.push(36064+de),C.depthBuffer&&le.push(Ee);const ce=W.__ignoreDepthValues!==void 0?W.__ignoreDepthValues:!1;if(ce===!1&&(C.depthBuffer&&(re|=256),C.stencilBuffer&&(re|=1024)),me&&s.framebufferRenderbuffer(36008,36064,36161,W.__webglColorRenderbuffer[de]),ce===!0&&(s.invalidateFramebuffer(36008,[Ee]),s.invalidateFramebuffer(36009,[Ee])),me){const P=n.get(E[de]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,P,0)}s.blitFramebuffer(0,0,X,$,0,0,X,$,re,9728),m&&s.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),me)for(let de=0;de<E.length;de++){t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+de,36161,W.__webglColorRenderbuffer[de]);const ce=n.get(E[de]).__webglTexture;t.bindFramebuffer(36160,W.__webglFramebuffer),s.framebufferTexture2D(36009,36064+de,3553,ce,0)}t.bindFramebuffer(36009,W.__webglMultisampledFramebuffer)}}function ut(C){return Math.min(h,C.samples)}function Ge(C){const E=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Hn(C){const E=a.render.frame;_.get(C)!==E&&(_.set(C,E),C.update())}function qn(C,E){const X=C.encoding,$=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Po||X!==Ji&&(X===Ze?o===!1?e.has("EXT_sRGB")===!0&&$===On?(C.format=Po,C.minFilter=tn,C.generateMipmaps=!1):E=Ku.sRGBToLinear(E):($!==On||re!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),E}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=V,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=_t,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Cn,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ge}function M0(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===Zi)return 5121;if(r===_d)return 32819;if(r===vd)return 32820;if(r===pd)return 5120;if(r===md)return 5122;if(r===Xu)return 5123;if(r===gd)return 5124;if(r===ki)return 5125;if(r===Bi)return 5126;if(r===_s)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===xd)return 6406;if(r===On)return 6408;if(r===yd)return 6409;if(r===bd)return 6410;if(r===Hi)return 6402;if(r===zr)return 34041;if(r===Md)return 6403;if(r===Sd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Po)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===wd)return 36244;if(r===Td)return 33319;if(r===Ed)return 33320;if(r===Ad)return 36249;if(r===za||r===Ua||r===ka||r===Ba)if(a===Ze)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===za)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ba)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pl||r===Il||r===Fl||r===Ol)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Il)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ol)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Nl||r===zl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Nl)return a===Ze?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===zl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ul||r===kl||r===Bl||r===Vl||r===Gl||r===Wl||r===Hl||r===ql||r===Xl||r===Yl||r===jl||r===Kl||r===Zl||r===Jl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ul)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Gl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Hl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ql)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===jl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jl)return a===Ze?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ql)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ql)return a===Ze?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Lr?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class w0 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ra extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T0={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const v=new ra;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[d.jointName]=v,c.add(v)}const g=c.joints[d.jointName];p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class E0 extends cn{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:Hi,u!==Hi&&u!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hi&&(n=ki),n===void 0&&u===zr&&(n=Lr),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1}}class A0 extends Jr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const _=t.getContextAttributes();let d=null,p=null;const g=[],v=[],b=new _n;b.layers.enable(1),b.viewport=new lt;const S=new _n;S.layers.enable(2),S.viewport=new lt;const M=[b,S],w=new w0;w.layers.enable(1),w.layers.enable(2);let y=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=g[N];return V===void 0&&(V=new go,g[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=g[N];return V===void 0&&(V=new go,g[N]=V),V.getGripSpace()},this.getHand=function(N){let V=g[N];return V===void 0&&(V=new go,g[N]=V),V.getHandSpace()};function T(N){const V=v.indexOf(N.inputSource);if(V===-1)return;const Q=g[V];Q!==void 0&&Q.dispatchEvent({type:N.type,data:N.inputSource})}function O(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",I);for(let N=0;N<g.length;N++){const V=v[N];V!==null&&(v[N]=null,g[N].disconnect(V))}y=null,x=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,D.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",O),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),p=new Qi(f.framebufferWidth,f.framebufferHeight,{format:On,type:Zi,encoding:e.outputEncoding})}else{let V=null,Q=null,Z=null;_.depth&&(Z=_.stencil?35056:33190,V=_.stencil?zr:Hi,Q=_.stencil?Lr:ki);const ee={colorFormat:32856,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ee),i.updateRenderState({layers:[h]}),p=new Qi(h.textureWidth,h.textureHeight,{format:On,type:Zi,depthTexture:new E0(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ne=e.properties.get(p);ne.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),D.setContext(i),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(N){for(let V=0;V<N.removed.length;V++){const Q=N.removed[V],Z=v.indexOf(Q);Z>=0&&(v[Z]=null,g[Z].dispatchEvent({type:"disconnected",data:Q}))}for(let V=0;V<N.added.length;V++){const Q=N.added[V];let Z=v.indexOf(Q);if(Z===-1){for(let ne=0;ne<g.length;ne++)if(ne>=v.length){v.push(Q),Z=ne;break}else if(v[ne]===null){v[ne]=Q,Z=ne;break}if(Z===-1)break}const ee=g[Z];ee&&ee.dispatchEvent({type:"connected",data:Q})}}const Y=new U,j=new U;function F(N,V,Q){Y.setFromMatrixPosition(V.matrixWorld),j.setFromMatrixPosition(Q.matrixWorld);const Z=Y.distanceTo(j),ee=V.projectionMatrix.elements,ne=Q.projectionMatrix.elements,ue=ee[14]/(ee[10]-1),q=ee[14]/(ee[10]+1),je=(ee[9]+1)/ee[5],J=(ee[9]-1)/ee[5],H=(ee[8]-1)/ee[0],ie=(ne[8]+1)/ne[0],Be=ue*H,De=ue*ie,Se=Z/(-H+ie),_t=Se*-H;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(_t),N.translateZ(Se),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const It=ue+Se,Wt=q+Se,Cn=Be-_t,ut=De+(Z-_t),Ge=je*q/Wt*It,Hn=J*q/Wt*It;N.projectionMatrix.makePerspective(Cn,ut,Ge,Hn,It,Wt)}function k(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;w.near=S.near=b.near=N.near,w.far=S.far=b.far=N.far,(y!==w.near||x!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),y=w.near,x=w.far);const V=N.parent,Q=w.cameras;k(w,V);for(let ee=0;ee<Q.length;ee++)k(Q[ee],V);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),N.position.copy(w.position),N.quaternion.copy(w.quaternion),N.scale.copy(w.scale),N.matrix.copy(w.matrix),N.matrixWorld.copy(w.matrixWorld);const Z=N.children;for(let ee=0,ne=Z.length;ee<ne;ee++)Z[ee].updateMatrixWorld(!0);Q.length===2?F(w,b,S):w.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let L=null;function R(N,V){if(c=V.getViewerPose(l||a),m=V,c!==null){const Q=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Z=!1;Q.length!==w.cameras.length&&(w.cameras.length=0,Z=!0);for(let ee=0;ee<Q.length;ee++){const ne=Q[ee];let ue=null;if(f!==null)ue=f.getViewport(ne);else{const je=u.getViewSubImage(h,ne);ue=je.viewport,ee===0&&(e.setRenderTargetTextures(p,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(p))}let q=M[ee];q===void 0&&(q=new _n,q.layers.enable(ee),q.viewport=new lt,M[ee]=q),q.matrix.fromArray(ne.transform.matrix),q.projectionMatrix.fromArray(ne.projectionMatrix),q.viewport.set(ue.x,ue.y,ue.width,ue.height),ee===0&&w.matrix.copy(q.matrix),Z===!0&&w.cameras.push(q)}}for(let Q=0;Q<g.length;Q++){const Z=v[Q],ee=g[Q];Z!==null&&ee!==void 0&&ee.update(Z,V,l||a)}L&&L(N,V),m=null}const D=new af;D.setAnimationLoop(R),this.setAnimationLoop=function(N){L=N},this.dispose=function(){}}}function C0(s,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,g,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,b)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),_(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,g,v):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Sn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Sn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const S=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let b;p.aoMap?b=p.aoMap:p.lightMap&&(b=p.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uv2Transform.value.copy(b.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,g,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=v*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Sn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function L0(){const s=vs("canvas");return s.style.display="block",s}function df(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:L0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ji,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,g=0,v=0,b=null,S=-1,M=null;const w=new lt,y=new lt;let x=null,T=e.width,O=e.height,I=1,Y=null,j=null;const F=new lt(0,0,T,O),k=new lt(0,0,T,O);let L=!1;const R=new sf;let D=!1,N=!1,V=null;const Q=new ht,Z=new Ve,ee=new U,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return b===null?I:1}let q=t;function je(A,z){for(let G=0;G<A.length;G++){const B=A[G],K=e.getContext(B,z);if(K!==null)return K}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jo}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",se,!1),q===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),q=je(z,A),q===null)throw je(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,H,ie,Be,De,Se,_t,It,Wt,Cn,ut,Ge,Hn,qn,C,E,X,$,re,le,Ee,W,me;function de(){J=new Bg(q),H=new Fg(q,J,s),J.init(H),W=new M0(q,J,H),ie=new y0(q,J,H),Be=new Wg,De=new o0,Se=new b0(q,J,ie,De,H,W,Be),_t=new Ng(d),It=new kg(d),Wt=new tp(q,H),me=new Pg(q,J,Wt,H),Cn=new Vg(q,Wt,Be,me),ut=new Yg(q,Cn,Wt,Be),re=new Xg(q,H,Se),E=new Og(De),Ge=new a0(d,_t,It,J,H,me,E),Hn=new C0(d,De),qn=new c0,C=new m0(J,H),$=new Dg(d,_t,ie,ut,u,a),X=new S0(d,ut,H),le=new Ig(q,J,Be,H),Ee=new Gg(q,J,Be,H),Be.programs=Ge.programs,d.capabilities=H,d.extensions=J,d.properties=De,d.renderLists=qn,d.shadowMap=X,d.state=ie,d.info=Be}de();const ce=new A0(d,q);this.xr=ce,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(T,O,!1))},this.getSize=function(A){return A.set(T,O)},this.setSize=function(A,z,G){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,O=z,e.width=Math.floor(A*I),e.height=Math.floor(z*I),G!==!1&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(T*I,O*I).floor()},this.setDrawingBufferSize=function(A,z,G){T=A,O=z,I=G,e.width=Math.floor(A*G),e.height=Math.floor(z*G),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,z,G,B){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,z,G,B),ie.viewport(w.copy(F).multiplyScalar(I).floor())},this.getScissor=function(A){return A.copy(k)},this.setScissor=function(A,z,G,B){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,z,G,B),ie.scissor(y.copy(k).multiplyScalar(I).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(A){ie.setScissorTest(L=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,z=!0,G=!0){let B=0;A&&(B|=16384),z&&(B|=256),G&&(B|=1024),q.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",se,!1),qn.dispose(),C.dispose(),De.dispose(),_t.dispose(),It.dispose(),ut.dispose(),me.dispose(),Ge.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ze),ce.removeEventListener("sessionend",Ue),V&&(V.dispose(),V=null),At.stop()};function P(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=Be.autoReset,z=X.enabled,G=X.autoUpdate,B=X.needsUpdate,K=X.type;de(),Be.autoReset=A,X.enabled=z,X.autoUpdate=G,X.needsUpdate=B,X.type=K}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function xe(A){const z=A.target;z.removeEventListener("dispose",xe),fe(z)}function fe(A){be(A),De.remove(A)}function be(A){const z=De.get(A).programs;z!==void 0&&(z.forEach(function(G){Ge.releaseProgram(G)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,G,B,K,ye){z===null&&(z=ne);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Le=xh(A,z,G,B,K);ie.setMaterial(B,Ae);let Ce=G.index;const ke=G.attributes.position;if(Ce===null){if(ke===void 0||ke.count===0)return}else if(Ce.count===0)return;let Ie=1;B.wireframe===!0&&(Ce=Cn.getWireframeAttribute(G),Ie=2),me.setup(K,B,Le,G,Ce);let Fe,Ke=le;Ce!==null&&(Fe=Wt.get(Ce),Ke=Ee,Ke.setIndex(Fe));const Li=Ce!==null?Ce.count:ke.count,sr=G.drawRange.start*Ie,ar=G.drawRange.count*Ie,Rn=ye!==null?ye.start*Ie:0,Ne=ye!==null?ye.count*Ie:1/0,or=Math.max(sr,Rn),et=Math.min(Li,sr+ar,Rn+Ne)-1,Dn=Math.max(0,et-or+1);if(Dn!==0){if(K.isMesh)B.wireframe===!0?(ie.setLineWidth(B.wireframeLinewidth*ue()),Ke.setMode(1)):Ke.setMode(4);else if(K.isLine){let ai=B.linewidth;ai===void 0&&(ai=1),ie.setLineWidth(ai*ue()),K.isLineSegments?Ke.setMode(1):K.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else K.isPoints?Ke.setMode(0):K.isSprite&&Ke.setMode(4);if(K.isInstancedMesh)Ke.renderInstances(or,Dn,K.count);else if(G.isInstancedBufferGeometry){const ai=Math.min(G.instanceCount,G._maxInstanceCount);Ke.renderInstances(or,Dn,ai)}else Ke.render(or,Dn)}},this.compile=function(A,z){f=C.get(A),f.init(),_.push(f),A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(d.physicallyCorrectLights),A.traverse(function(G){const B=G.material;if(B)if(Array.isArray(B))for(let K=0;K<B.length;K++){const ye=B[K];Fa(ye,A,G)}else Fa(B,A,G)}),_.pop(),f=null};let te=null;function Me(A){te&&te(A)}function ze(){At.stop()}function Ue(){At.start()}const At=new af;At.setAnimationLoop(Me),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(A){te=A,ce.setAnimationLoop(A),A===null?At.stop():At.start()},ce.addEventListener("sessionstart",ze),ce.addEventListener("sessionend",Ue),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,z,b),f=C.get(A,_.length),f.init(),_.push(f),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),R.setFromProjectionMatrix(Q),N=this.localClippingEnabled,D=E.init(this.clippingPlanes,N,z),h=qn.get(A,m.length),h.init(),m.push(h),Ln(A,z,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(Y,j),D===!0&&E.beginShadows();const G=f.state.shadowsArray;if(X.render(G,A,z),D===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(h,A),f.setupLights(d.physicallyCorrectLights),z.isArrayCamera){const B=z.cameras;for(let K=0,ye=B.length;K<ye;K++){const Ae=B[K];vl(h,A,Ae,Ae.viewport)}}else vl(h,A,z);b!==null&&(Se.updateMultisampleRenderTarget(b),Se.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(d,A,z),me.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Ln(A,z,G,B){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||R.intersectsSprite(A)){B&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Ae=ut.update(A),Le=A.material;Le.visible&&h.push(A,Ae,Le,G,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Be.render.frame&&(A.skeleton.update(),A.skeleton.frame=Be.render.frame),!A.frustumCulled||R.intersectsObject(A))){B&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Ae=ut.update(A),Le=A.material;if(Array.isArray(Le)){const Ce=Ae.groups;for(let ke=0,Ie=Ce.length;ke<Ie;ke++){const Fe=Ce[ke],Ke=Le[Fe.materialIndex];Ke&&Ke.visible&&h.push(A,Ae,Ke,G,ee.z,Fe)}}else Le.visible&&h.push(A,Ae,Le,G,ee.z,null)}}const ye=A.children;for(let Ae=0,Le=ye.length;Ae<Le;Ae++)Ln(ye[Ae],z,G,B)}function vl(A,z,G,B){const K=A.opaque,ye=A.transmissive,Ae=A.transparent;f.setupLightsView(G),ye.length>0&&_h(K,z,G),B&&ie.viewport(w.copy(B)),K.length>0&&zs(K,z,G),ye.length>0&&zs(ye,z,G),Ae.length>0&&zs(Ae,z,G),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function _h(A,z,G){const B=H.isWebGL2;V===null&&(V=new Qi(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?_s:Zi,minFilter:Aa,samples:B&&r===!0?4:0})),d.getDrawingBufferSize(Z),B?V.setSize(Z.x,Z.y):V.setSize(Io(Z.x),Io(Z.y));const K=d.getRenderTarget();d.setRenderTarget(V),d.clear();const ye=d.toneMapping;d.toneMapping=ii,zs(A,z,G),d.toneMapping=ye,Se.updateMultisampleRenderTarget(V),Se.updateRenderTargetMipmap(V),d.setRenderTarget(K)}function zs(A,z,G){const B=z.isScene===!0?z.overrideMaterial:null;for(let K=0,ye=A.length;K<ye;K++){const Ae=A[K],Le=Ae.object,Ce=Ae.geometry,ke=B===null?Ae.material:B,Ie=Ae.group;Le.layers.test(G.layers)&&vh(Le,z,G,Ce,ke,Ie)}}function vh(A,z,G,B,K,ye){A.onBeforeRender(d,z,G,B,K,ye),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(d,z,G,B,A,ye),K.transparent===!0&&K.side===Fr?(K.side=Sn,K.needsUpdate=!0,d.renderBufferDirect(G,z,B,K,A,ye),K.side=gs,K.needsUpdate=!0,d.renderBufferDirect(G,z,B,K,A,ye),K.side=Fr):d.renderBufferDirect(G,z,B,K,A,ye),A.onAfterRender(d,z,G,B,K,ye)}function Fa(A,z,G){z.isScene!==!0&&(z=ne);const B=De.get(A),K=f.state.lights,ye=f.state.shadowsArray,Ae=K.state.version,Le=Ge.getParameters(A,K.state,ye,z,G),Ce=Ge.getProgramCacheKey(Le);let ke=B.programs;B.environment=A.isMeshStandardMaterial?z.environment:null,B.fog=z.fog,B.envMap=(A.isMeshStandardMaterial?It:_t).get(A.envMap||B.environment),ke===void 0&&(A.addEventListener("dispose",xe),ke=new Map,B.programs=ke);let Ie=ke.get(Ce);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===Ae)return xl(A,Le),Ie}else Le.uniforms=Ge.getUniforms(A),A.onBuild(G,Le,d),A.onBeforeCompile(Le,d),Ie=Ge.acquireProgram(Le,Ce),ke.set(Ce,Ie),B.uniforms=Le.uniforms;const Fe=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=E.uniform),xl(A,Le),B.needsLights=yh(A),B.lightsStateVersion=Ae,B.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.directionalShadowMap.value=K.state.directionalShadowMap,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotShadowMap.value=K.state.spotShadowMap,Fe.spotShadowMatrix.value=K.state.spotShadowMatrix,Fe.pointShadowMap.value=K.state.pointShadowMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ke=Ie.getUniforms(),Li=ca.seqWithValue(Ke.seq,Fe);return B.currentProgram=Ie,B.uniformsList=Li,Ie}function xl(A,z){const G=De.get(A);G.outputEncoding=z.outputEncoding,G.instancing=z.instancing,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function xh(A,z,G,B,K){z.isScene!==!0&&(z=ne),Se.resetTextureUnits();const ye=z.fog,Ae=B.isMeshStandardMaterial?z.environment:null,Le=b===null?d.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:Ji,Ce=(B.isMeshStandardMaterial?It:_t).get(B.envMap||Ae),ke=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!B.normalMap&&!!G.attributes.tangent,Fe=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,Li=!!G.morphAttributes.color,sr=B.toneMapped?d.toneMapping:ii,ar=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Rn=ar!==void 0?ar.length:0,Ne=De.get(B),or=f.state.lights;if(D===!0&&(N===!0||A!==M)){const Pn=A===M&&B.id===S;E.setState(B,A,Pn)}let et=!1;B.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==or.state.version||Ne.outputEncoding!==Le||K.isInstancedMesh&&Ne.instancing===!1||!K.isInstancedMesh&&Ne.instancing===!0||K.isSkinnedMesh&&Ne.skinning===!1||!K.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Ce||B.fog===!0&&Ne.fog!==ye||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==E.numPlanes||Ne.numIntersection!==E.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Ie||Ne.morphTargets!==Fe||Ne.morphNormals!==Ke||Ne.morphColors!==Li||Ne.toneMapping!==sr||H.isWebGL2===!0&&Ne.morphTargetsCount!==Rn)&&(et=!0):(et=!0,Ne.__version=B.version);let Dn=Ne.currentProgram;et===!0&&(Dn=Fa(B,z,K));let ai=!1,$r=!1,Oa=!1;const Ct=Dn.getUniforms(),es=Ne.uniforms;if(ie.useProgram(Dn.program)&&(ai=!0,$r=!0,Oa=!0),B.id!==S&&(S=B.id,$r=!0),ai||M!==A){if(Ct.setValue(q,"projectionMatrix",A.projectionMatrix),H.logarithmicDepthBuffer&&Ct.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,$r=!0,Oa=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Pn=Ct.map.cameraPosition;Pn!==void 0&&Pn.setValue(q,ee.setFromMatrixPosition(A.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ct.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||K.isSkinnedMesh)&&Ct.setValue(q,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){Ct.setOptional(q,K,"bindMatrix"),Ct.setOptional(q,K,"bindMatrixInverse");const Pn=K.skeleton;Pn&&(H.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),Ct.setValue(q,"boneTexture",Pn.boneTexture,Se),Ct.setValue(q,"boneTextureSize",Pn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Na=G.morphAttributes;return(Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&H.isWebGL2===!0)&&re.update(K,G,B,Dn),($r||Ne.receiveShadow!==K.receiveShadow)&&(Ne.receiveShadow=K.receiveShadow,Ct.setValue(q,"receiveShadow",K.receiveShadow)),$r&&(Ct.setValue(q,"toneMappingExposure",d.toneMappingExposure),Ne.needsLights&&Sh(es,Oa),ye&&B.fog===!0&&Hn.refreshFogUniforms(es,ye),Hn.refreshMaterialUniforms(es,B,I,O,V),ca.upload(q,Ne.uniformsList,es,Se)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ca.upload(q,Ne.uniformsList,es,Se),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ct.setValue(q,"center",K.center),Ct.setValue(q,"modelViewMatrix",K.modelViewMatrix),Ct.setValue(q,"normalMatrix",K.normalMatrix),Ct.setValue(q,"modelMatrix",K.matrixWorld),Dn}function Sh(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function yh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,z,G){De.get(A.texture).__webglTexture=z,De.get(A.depthTexture).__webglTexture=G;const B=De.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=G===void 0,B.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const G=De.get(A);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,G=0){b=A,g=z,v=G;let B=!0;if(A){const Ce=De.get(A);Ce.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(36160,null),B=!1):Ce.__webglFramebuffer===void 0?Se.setupRenderTarget(A):Ce.__hasExternalTextures&&Se.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture)}let K=null,ye=!1,Ae=!1;if(A){const Ce=A.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Ae=!0);const ke=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=ke[z],ye=!0):H.isWebGL2&&A.samples>0&&Se.useMultisampledRTT(A)===!1?K=De.get(A).__webglMultisampledFramebuffer:K=ke,w.copy(A.viewport),y.copy(A.scissor),x=A.scissorTest}else w.copy(F).multiplyScalar(I).floor(),y.copy(k).multiplyScalar(I).floor(),x=L;if(ie.bindFramebuffer(36160,K)&&H.drawBuffers&&B&&ie.drawBuffers(A,K),ie.viewport(w),ie.scissor(y),ie.setScissorTest(x),ye){const Ce=De.get(A.texture);q.framebufferTexture2D(36160,36064,34069+z,Ce.__webglTexture,G)}else if(Ae){const Ce=De.get(A.texture),ke=z||0;q.framebufferTextureLayer(36160,36064,Ce.__webglTexture,G||0,ke)}S=-1},this.readRenderTargetPixels=function(A,z,G,B,K,ye,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){ie.bindFramebuffer(36160,Le);try{const Ce=A.texture,ke=Ce.format,Ie=Ce.type;if(ke!==On&&W.convert(ke)!==q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===_s&&(J.has("EXT_color_buffer_half_float")||H.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ie!==Zi&&W.convert(Ie)!==q.getParameter(35738)&&!(Ie===Bi&&(H.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-B&&G>=0&&G<=A.height-K&&q.readPixels(z,G,B,K,W.convert(ke),W.convert(Ie),ye)}finally{const Ce=b!==null?De.get(b).__webglFramebuffer:null;ie.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(A,z,G=0){const B=Math.pow(2,-G),K=Math.floor(z.image.width*B),ye=Math.floor(z.image.height*B);Se.setTexture2D(z,0),q.copyTexSubImage2D(3553,G,0,0,A.x,A.y,K,ye),ie.unbindTexture()},this.copyTextureToTexture=function(A,z,G,B=0){const K=z.image.width,ye=z.image.height,Ae=W.convert(G.format),Le=W.convert(G.type);Se.setTexture2D(G,0),q.pixelStorei(37440,G.flipY),q.pixelStorei(37441,G.premultiplyAlpha),q.pixelStorei(3317,G.unpackAlignment),z.isDataTexture?q.texSubImage2D(3553,B,A.x,A.y,K,ye,Ae,Le,z.image.data):z.isCompressedTexture?q.compressedTexSubImage2D(3553,B,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Ae,z.mipmaps[0].data):q.texSubImage2D(3553,B,A.x,A.y,Ae,Le,z.image),B===0&&G.generateMipmaps&&q.generateMipmap(3553),ie.unbindTexture()},this.copyTextureToTexture3D=function(A,z,G,B,K=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=A.max.x-A.min.x+1,Ae=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Ce=W.convert(B.format),ke=W.convert(B.type);let Ie;if(B.isData3DTexture)Se.setTexture3D(B,0),Ie=32879;else if(B.isDataArrayTexture)Se.setTexture2DArray(B,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(37440,B.flipY),q.pixelStorei(37441,B.premultiplyAlpha),q.pixelStorei(3317,B.unpackAlignment);const Fe=q.getParameter(3314),Ke=q.getParameter(32878),Li=q.getParameter(3316),sr=q.getParameter(3315),ar=q.getParameter(32877),Rn=G.isCompressedTexture?G.mipmaps[0]:G.image;q.pixelStorei(3314,Rn.width),q.pixelStorei(32878,Rn.height),q.pixelStorei(3316,A.min.x),q.pixelStorei(3315,A.min.y),q.pixelStorei(32877,A.min.z),G.isDataTexture||G.isData3DTexture?q.texSubImage3D(Ie,K,z.x,z.y,z.z,ye,Ae,Le,Ce,ke,Rn.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ie,K,z.x,z.y,z.z,ye,Ae,Le,Ce,Rn.data)):q.texSubImage3D(Ie,K,z.x,z.y,z.z,ye,Ae,Le,Ce,ke,Rn),q.pixelStorei(3314,Fe),q.pixelStorei(32878,Ke),q.pixelStorei(3316,Li),q.pixelStorei(3315,sr),q.pixelStorei(32877,ar),K===0&&B.generateMipmaps&&q.generateMipmap(Ie),ie.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Se.setTextureCube(A,0):A.isData3DTexture?Se.setTexture3D(A,0):A.isDataArrayTexture?Se.setTexture2DArray(A,0):Se.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){g=0,v=0,b=null,ie.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class R0 extends df{}R0.prototype.isWebGL1Renderer=!0;class D0 extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}const Nc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class pf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const P0=new pf;class mf{constructor(e){this.manager=e!==void 0?e:P0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class I0 extends mf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Nc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=vs("img");function l(){u(),Nc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class F0 extends mf{constructor(e){super(e)}load(e,t,n,i){const r=new cn,a=new I0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);/**
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
 */var zc={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function O0(s){return!!s.document&&typeof s.document.createElement=="function"}function N0(s,e){if(O0(s)&&e in zc){var t=s.document.createElement("div"),n=zc[e],i=n.standard,r=n.prefixed,a=i in t.style;return a?i:r}return e}/**
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
 */var Xt={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},gn={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},rs={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
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
 */var z0=function(s){Wn(e,s);function e(t){var n=s.call(this,Vn(Vn({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Xt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return gn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(Xt.INDETERMINATE_CLASS),this.adapter.addClass(Xt.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,r;if(!t.determinate)try{for(var a=Rh(n),o=a.next();!o.done;o=a.next()){var l=o.value;l.contentRect&&t.calculateAndSetDimensions(l.contentRect.width)}}catch(c){i={error:c}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(Xt.INDETERMINATE_CLASS),this.adapter.setAttribute(gn.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(gn.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(gn.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(Xt.INDETERMINATE_CLASS),this.adapter.removeAttribute(gn.ARIA_VALUENOW),this.adapter.removeAttribute(gn.ARIA_VALUEMAX),this.adapter.removeAttribute(gn.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(gn.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(Xt.CLOSED_CLASS),this.adapter.removeClass(Xt.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(gn.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(Xt.CLOSED_CLASS),this.adapter.setAttribute(gn.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(Xt.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(Xt.CLOSED_CLASS)&&this.adapter.addClass(Xt.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){s.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(Xt.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(Xt.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",i=typeof window<"u"?N0(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(gn.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*rs.PRIMARY_HALF,i=t*rs.PRIMARY_FULL,r=t*rs.SECONDARY_QUARTER,a=t*rs.SECONDARY_HALF,o=t*rs.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-o+"px"),this.restartAnimation()},e}(Rs);function U0(s){let e,t,n,i,r,a,o,l,c,u,h,f,m,_,d,p,g,v,b,S,M=[{class:m=ot({[s[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":s[3],"mdc-linear-progress--closed":s[4],"mdc-data-table__linear-progress":s[14]==="data-table",...s[8]})},{style:_=Object.entries(s[10]).map(Bc).concat([s[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":d=0},{"aria-valuemax":p=1},{"aria-valuenow":g=s[3]?void 0:s[5]},s[9],s[16]],w={};for(let y=0;y<M.length;y+=1)w=Qe(w,M[y]);return{c(){e=_e("div"),t=_e("div"),n=_e("div"),r=Oe(),a=_e("div"),o=Oe(),l=_e("div"),c=_e("span"),h=Oe(),f=_e("div"),f.innerHTML='<span class="mdc-linear-progress__bar-inner"></span>',ve(n,"class","mdc-linear-progress__buffer-bar"),ve(n,"style",i=Object.entries(s[11]).map(Uc).join(" ")),ve(a,"class","mdc-linear-progress__buffer-dots"),ve(t,"class","mdc-linear-progress__buffer"),ve(c,"class","mdc-linear-progress__bar-inner"),ve(l,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),ve(l,"style",u=Object.entries(s[12]).map(kc).join(" ")),ve(f,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),St(e,w)},m(y,x){we(y,e,x),pe(e,t),pe(t,n),pe(t,r),pe(t,a),pe(e,o),pe(e,l),pe(l,c),pe(e,h),pe(e,f),s[19](e),b||(S=[nn(v=vi.call(null,e,s[0])),nn(s[13].call(null,e)),yt(e,"transitionend",s[20])],b=!0)},p(y,[x]){x&2048&&i!==(i=Object.entries(y[11]).map(Uc).join(" "))&&ve(n,"style",i),x&4096&&u!==(u=Object.entries(y[12]).map(kc).join(" "))&&ve(l,"style",u),St(e,w=ln(M,[x&282&&m!==(m=ot({[y[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":y[3],"mdc-linear-progress--closed":y[4],"mdc-data-table__linear-progress":y[14]==="data-table",...y[8]}))&&{class:m},x&1028&&_!==(_=Object.entries(y[10]).map(Bc).concat([y[2]]).join(" "))&&{style:_},{role:"progressbar"},{"aria-valuemin":d},{"aria-valuemax":p},x&40&&g!==(g=y[3]?void 0:y[5])&&{"aria-valuenow":g},x&512&&y[9],x&65536&&y[16]])),v&&zn(v.update)&&x&1&&v.update.call(null,y[0])},i:bi,o:bi,d(y){y&&Te(e),s[19](null),b=!1,Es(S)}}}const Uc=([s,e])=>`${s}: ${e};`,kc=([s,e])=>`${s}: ${e};`,Bc=([s,e])=>`${s}: ${e};`;function k0(s,e,t){const n=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let i=Bn(e,n),r;const a=Ls(As());let{use:o=[]}=e,{class:l=""}=e,{style:c=""}=e,{indeterminate:u=!1}=e,{closed:h=!1}=e,{progress:f=0}=e,{buffer:m=void 0}=e,_,d,p={},g={},v={},b={},S={},M=pa("SMUI:linear-progress:context"),w=pa("SMUI:linear-progress:closed");bn(s,w,D=>t(21,r=D)),An(()=>(t(6,d=new z0({addClass:x,forceLayout:()=>{k().getBoundingClientRect()},setBufferBarStyle:j,setPrimaryBarStyle:F,hasClass:y,removeAttribute:I,removeClass:T,setAttribute:O,setStyle:Y,attachResizeObserver:D=>{const N=window.ResizeObserver;if(N){const V=new N(D);return V.observe(k()),V}return null},getWidth:()=>k().offsetWidth})),d.init(),()=>{d.destroy()}));function y(D){return D in p?p[D]:k().classList.contains(D)}function x(D){p[D]||t(8,p[D]=!0,p)}function T(D){(!(D in p)||p[D])&&t(8,p[D]=!1,p)}function O(D,N){g[D]!==N&&t(9,g[D]=N,g)}function I(D){(!(D in g)||g[D]!=null)&&t(9,g[D]=void 0,g)}function Y(D,N){v[D]!=N&&(N===""||N==null?(delete v[D],t(10,v)):t(10,v[D]=N,v))}function j(D,N){b[D]!=N&&(N===""||N==null?(delete b[D],t(11,b)):t(11,b[D]=N,b))}function F(D,N){S[D]!=N&&(N===""||N==null?(delete S[D],t(12,S)):t(12,S[D]=N,S))}function k(){return _}function L(D){Nt[D?"unshift":"push"](()=>{_=D,t(7,_)})}const R=()=>d&&d.handleTransitionEnd();return s.$$set=D=>{e=Qe(Qe({},e),Cs(D)),t(16,i=Bn(e,n)),"use"in D&&t(0,o=D.use),"class"in D&&t(1,l=D.class),"style"in D&&t(2,c=D.style),"indeterminate"in D&&t(3,u=D.indeterminate),"closed"in D&&t(4,h=D.closed),"progress"in D&&t(5,f=D.progress),"buffer"in D&&t(17,m=D.buffer)},s.$$.update=()=>{s.$$.dirty&16&&w&&bh(w,r=h,r),s.$$.dirty&72&&d&&d.isDeterminate()!==!u&&d.setDeterminate(!u),s.$$.dirty&96&&d&&d.getProgress()!==f&&d.setProgress(f),s.$$.dirty&131136&&d&&(m==null?d.setBuffer(1):d.setBuffer(m)),s.$$.dirty&80&&d&&(h?d.close():d.open())},[o,l,c,u,h,f,d,_,p,g,v,b,S,a,M,w,i,m,k,L,R]}class B0 extends Tn{constructor(e){super(),En(this,e,k0,U0,fn,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}const Oo=[{bg:"/home/bg1.png",depth:"/home/bg1_depth.jpg"},{bg:"/home/bg2.png",depth:"/home/bg2_depth.jpg"},{bg:"/home/bg3.png",depth:"/home/bg3_depth.jpg"},{bg:"/home/bg4.jpeg",depth:"/home/bg4_depth.jpg"},{bg:"/home/bg5.png",depth:"/home/bg5_depth.jpg"}],V0=1.5,gt=800,wn=Uu(!0),ua=["前端","后端","其他"],Vc={[ua[0]]:[{tab:"基础"},{skill:"HTML5/CSS3",score:"100%"},{skill:"Less/Sass/Stylus",score:"100%"},{skill:"JavaScript",score:"100%"},{skill:"TypeScript",score:"100%"},{skill:"Node",score:"100%"},{tab:"框架"},{skill:"Vue&相关技术栈",score:"100%"},{skill:"Svelte&相关技术栈",score:"90%"},{skill:"React&相关技术栈",score:"75%"},{skill:"Solid",score:"70%"},{skill:"Egg.js",score:"100%"},{skill:"Koa.js",score:"100%"},{tab:"小程序"},{skill:"MINA",score:"100%"},{skill:"mpVue",score:"100%"},{tab:"其他"},{skill:"webpack",score:"95%"},{skill:"vite",score:"95%"},{skill:"git",score:"100%"},{skill:"monorepo",score:"100%"},{skill:"npm/yarn/pnpm",score:"100%"}],[ua[1]]:[{tab:"开发语言"},{skill:"Golang",score:"80%"},{skill:"PHP",score:"50%"},{tab:"其他"},{skill:"Redis",score:"70%"},{skill:"Mysql",score:"70%"}],[ua[2]]:[{skill:"Photoshop",score:"60%"}]},Gc=[{timeline:"2014.9-2018.7",experience:"苏州大学文正学院",job:"",desc:["专业：物联网工程"]},{timeline:"2018.12-2020.11",experience:"腾讯",job:"web前端工程师",desc:["部门：IEG - WeTest","职能范围：前端开发、node开发、小程序开发、招人及新人培养"]},{timeline:"2020.11-Now",experience:"哔哩哔哩",job:"web前端工程师",desc:["部门：直播","职能范围：前端开发、node开发、服务端开发、招人及新人培养"]},{timeline:"Future",experience:"想学(做)的内容",job:"",desc:["WebGL","blender","日语","围棋"]}],Wc=[{title:"运动",desc:["羽毛球","游泳","乒乓球(属于是又菜又爱玩)"]},{title:"ACG",desc:["包括但不限于：动画、漫画、轻小说、二游、galgame","喜欢的作品：魔法师之夜、fate、空之境界、邻家天使等等","有时候也会看点日剧"]},{title:"未知领域",desc:["爱好各类科普、时事、历史，虽然也记不住多少~~","喜欢的up主有：鬼谷、刘晓非、萌萌战队、Chubbyemu、Linvo等等"]}];function G0(s){let e,t,n,i,r,a,o,l,c,u,h,f,m,_,d;return{c(){e=_e("div"),t=_e("div"),t.textContent="欢迎来到mahiru-forever的个人空间",n=Oe(),i=_e("div"),r=_e("div"),r.textContent="Skill",a=Oe(),o=_e("div"),o.textContent="Experience",l=Oe(),c=_e("div"),c.textContent="Hobby",u=Oe(),h=_e("div"),h.textContent="Contact",ve(t,"class","title svelte-soauan"),ve(r,"class","know svelte-soauan"),ve(r,"role","presentation"),ve(o,"class","know svelte-soauan"),ve(o,"role","presentation"),ve(c,"class","know svelte-soauan"),ve(c,"role","presentation"),ve(h,"class","know svelte-soauan"),ve(h,"role","presentation"),ve(i,"class","know-more svelte-soauan"),ve(e,"class","page page_1 svelte-soauan")},m(p,g){we(p,e,g),pe(e,t),pe(e,n),pe(e,i),pe(i,r),pe(i,a),pe(i,o),pe(i,l),pe(i,c),pe(i,u),pe(i,h),m=!0,_||(d=[yt(r,"click",s[4]),yt(o,"click",s[5]),yt(c,"click",s[6]),yt(h,"click",s[7])],_=!0)},p(p,[g]){s=p},i(p){m||(Ai(()=>{m&&(f||(f=Tt(e,Et,{delay:s[0],duration:gt},!0)),f.run(1))}),m=!0)},o(p){f||(f=Tt(e,Et,{delay:s[0],duration:gt},!1)),f.run(0),m=!1},d(p){p&&Te(e),p&&f&&f.end(),_=!1,Es(d)}}}function W0(s,e,t){let n,i,r;bn(s,wn,h=>t(2,i=h)),bn(s,_i,h=>t(3,r=h));const a=Mh();An(()=>{wn.set(!1)});const o=()=>a("jump",1),l=()=>a("jump",2),c=()=>a("jump",3),u=()=>a("jump",4);return s.$$.update=()=>{s.$$.dirty&12&&t(0,n=r===0?i?0:gt:0)},[n,a,i,r,o,l,c,u]}class H0 extends Tn{constructor(e){super(),En(this,e,W0,G0,fn,{})}}/**
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
 */var q0={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},X0={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var $n=function(s){Wn(e,s);function e(t){return s.call(this,Vn(Vn({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return q0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return X0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(Rs);/**
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
 */var Y0=function(s){Wn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass($n.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass($n.cssClasses.ACTIVE)},e}($n);/**
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
 */var Hc=function(s){Wn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass($n.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,r=t.left-n.left;this.adapter.addClass($n.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass($n.cssClasses.NO_TRANSITION),this.adapter.addClass($n.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass($n.cssClasses.ACTIVE)},e}($n);/**
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
 */var sa={ACTIVE:"mdc-tab--active"},ss={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var j0=function(s){Wn(e,s);function e(t){var n=s.call(this,Vn(Vn({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return sa},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ss},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(sa.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(sa.ACTIVE),this.adapter.setAttr(ss.ARIA_SELECTED,"true"),this.adapter.setAttr(ss.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(sa.ACTIVE),this.adapter.setAttr(ss.ARIA_SELECTED,"false"),this.adapter.setAttr(ss.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:n+r,contentRight:n+r+i,rootLeft:n,rootRight:n+t}},e}(Rs);function K0(s){let e,t,n,i,r,a,o,l,c,u,h;const f=s[21].default,m=Xr(f,s,s[20],null);let _=[{class:n=ot({[s[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":s[3]==="underline","mdc-tab-indicator__content--icon":s[3]==="icon"})},{style:i=Object.entries(s[10]).map(qc).join(" ")},{"aria-hidden":r=s[3]==="icon"?"true":void 0},Ut(s[12],"content$")],d={};for(let v=0;v<_.length;v+=1)d=Qe(d,_[v]);let p=[{class:o=ot({[s[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":s[0],"mdc-tab-indicator--fade":s[4]==="fade",...s[9]})},Mi(s[12],["content$"])],g={};for(let v=0;v<p.length;v+=1)g=Qe(g,p[v]);return{c(){e=_e("span"),t=_e("span"),m&&m.c(),St(t,d),St(e,g)},m(v,b){we(v,e,b),pe(e,t),m&&m.m(t,null),s[22](t),s[23](e),c=!0,u||(h=[nn(a=vi.call(null,t,s[5])),nn(l=vi.call(null,e,s[1])),nn(s[11].call(null,e))],u=!0)},p(v,[b]){m&&m.p&&(!c||b&1048576)&&Yr(m,f,v,v[20],c?Kr(f,v[20],b,null):jr(v[20]),null),St(t,d=ln(_,[(!c||b&72&&n!==(n=ot({[v[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":v[3]==="underline","mdc-tab-indicator__content--icon":v[3]==="icon"})))&&{class:n},(!c||b&1024&&i!==(i=Object.entries(v[10]).map(qc).join(" ")))&&{style:i},(!c||b&8&&r!==(r=v[3]==="icon"?"true":void 0))&&{"aria-hidden":r},b&4096&&Ut(v[12],"content$")])),a&&zn(a.update)&&b&32&&a.update.call(null,v[5]),St(e,g=ln(p,[(!c||b&533&&o!==(o=ot({[v[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":v[0],"mdc-tab-indicator--fade":v[4]==="fade",...v[9]})))&&{class:o},b&4096&&Mi(v[12],["content$"])])),l&&zn(l.update)&&b&2&&l.update.call(null,v[1])},i(v){c||(he(m,v),c=!0)},o(v){ge(m,v),c=!1},d(v){v&&Te(e),m&&m.d(v),s[22](null),s[23](null),u=!1,Es(h)}}}const qc=([s,e])=>`${s}: ${e};`;function Z0(s,e,t){const n=["use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"];let i=Bn(e,n),{$$slots:r={},$$scope:a}=e;const o=Ls(As());let{use:l=[]}=e,{class:c=""}=e,{active:u=!1}=e,{type:h="underline"}=e,{transition:f="slide"}=e,{content$use:m=[]}=e,{content$class:_=""}=e,d,p,g,v={},b={},S=[],M=f;An(()=>(t(17,p=w()),p.init(),()=>{p.destroy()}));function w(){const R={fade:Y0,slide:Hc}[f]||Hc;return new R({addClass:(...D)=>y(()=>x(...D)),removeClass:(...D)=>y(()=>T(...D)),computeContentClientRect:j,setContentStyleProperty:(...D)=>y(()=>O(...D))})}function y(R){S.length?S[S.length-1].push(R):R()}function x(R){v[R]||t(9,v[R]=!0,v)}function T(R){(!(R in v)||v[R])&&t(9,v[R]=!1,v)}function O(R,D){b[R]!=D&&(D===""||D==null?(delete b[R],t(10,b),t(19,M),t(4,f),t(17,p)):t(10,b[R]=D,b))}function I(R){t(0,u=!0),p.activate(R)}function Y(){t(0,u=!1),p.deactivate()}function j(){return S.push([]),t(18,S),g.getBoundingClientRect()}function F(){return d}function k(R){Nt[R?"unshift":"push"](()=>{g=R,t(8,g)})}function L(R){Nt[R?"unshift":"push"](()=>{d=R,t(7,d)})}return s.$$set=R=>{e=Qe(Qe({},e),Cs(R)),t(12,i=Bn(e,n)),"use"in R&&t(1,l=R.use),"class"in R&&t(2,c=R.class),"active"in R&&t(0,u=R.active),"type"in R&&t(3,h=R.type),"transition"in R&&t(4,f=R.transition),"content$use"in R&&t(5,m=R.content$use),"content$class"in R&&t(6,_=R.content$class),"$$scope"in R&&t(20,a=R.$$scope)},s.$$.update=()=>{s.$$.dirty&655376&&M!==f&&(t(19,M=f),p&&p.destroy(),t(9,v={}),t(10,b={}),t(17,p=w()),p.init()),s.$$.dirty&262144&&S.length&&requestAnimationFrame(()=>{var R;const D=(R=S.shift())!==null&&R!==void 0?R:[];t(18,S);for(const N of D)N()})},[u,l,c,h,f,m,_,d,g,v,b,o,i,I,Y,j,F,p,S,M,a,r,k,L]}class gf extends Tn{constructor(e){super(),En(this,e,Z0,K0,fn,{use:1,class:2,active:0,type:3,transition:4,content$use:5,content$class:6,activate:13,deactivate:14,computeContentClientRect:15,getElement:16})}get activate(){return this.$$.ctx[13]}get deactivate(){return this.$$.ctx[14]}get computeContentClientRect(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}const J0=s=>({}),Xc=s=>({}),Q0=s=>({}),Yc=s=>({});function jc(s){let e,t;const n=[{active:s[18]},Ut(s[25],"tabIndicator$")];let i={$$slots:{default:[$0]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Qe(i,n[r]);return e=new gf({props:i}),s[33](e),{c(){dt(e.$$.fragment)},m(r,a){pt(e,r,a),t=!0},p(r,a){const o=a[0]&33816576?ln(n,[a[0]&262144&&{active:r[18]},a[0]&33554432&&ms(Ut(r[25],"tabIndicator$"))]):{};a[1]&64&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(he(e.$$.fragment,r),t=!0)},o(r){ge(e.$$.fragment,r),t=!1},d(r){s[33](null),mt(e,r)}}}function $0(s){let e;const t=s[32]["tab-indicator"],n=Xr(t,s,s[37],Yc);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&64)&&Yr(n,t,i,i[37],e?Kr(t,i[37],r,Q0):jr(i[37]),Yc)},i(i){e||(he(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function Kc(s){let e,t;const n=[{active:s[18]},Ut(s[25],"tabIndicator$")];let i={$$slots:{default:[ev]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Qe(i,n[r]);return e=new gf({props:i}),s[35](e),{c(){dt(e.$$.fragment)},m(r,a){pt(e,r,a),t=!0},p(r,a){const o=a[0]&33816576?ln(n,[a[0]&262144&&{active:r[18]},a[0]&33554432&&ms(Ut(r[25],"tabIndicator$"))]):{};a[1]&64&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(he(e.$$.fragment,r),t=!0)},o(r){ge(e.$$.fragment,r),t=!1},d(r){s[35](null),mt(e,r)}}}function ev(s){let e;const t=s[32]["tab-indicator"],n=Xr(t,s,s[37],Xc);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&64)&&Yr(n,t,i,i[37],e?Kr(t,i[37],r,J0):jr(i[37]),Xc)},i(i){e||(he(n,i),e=!0)},o(i){ge(n,i),e=!1},d(i){n&&n.d(i)}}}function tv(s){let e,t,n,i,r,a,o,l,c,u;const h=s[32].default,f=Xr(h,s,s[37],null);let m=s[6]&&jc(s),_=[{class:n=ot({[s[9]]:!0,"mdc-tab__content":!0})},Ut(s[25],"content$")],d={};for(let g=0;g<_.length;g+=1)d=Qe(d,_[g]);let p=!s[6]&&Kc(s);return{c(){e=_e("span"),f&&f.c(),t=Oe(),m&&m.c(),r=Oe(),p&&p.c(),a=Oe(),o=_e("span"),St(e,d),ve(o,"class","mdc-tab__ripple")},m(g,v){we(g,e,v),f&&f.m(e,null),pe(e,t),m&&m.m(e,null),s[34](e),we(g,r,v),p&&p.m(g,v),we(g,a,v),we(g,o,v),l=!0,c||(u=nn(i=vi.call(null,e,s[8])),c=!0)},p(g,v){f&&f.p&&(!l||v[1]&64)&&Yr(f,h,g,g[37],l?Kr(h,g[37],v,null):jr(g[37]),null),g[6]?m?(m.p(g,v),v[0]&64&&he(m,1)):(m=jc(g),m.c(),he(m,1),m.m(e,null)):m&&(Lt(),ge(m,1,1,()=>{m=null}),Rt()),St(e,d=ln(_,[(!l||v[0]&512&&n!==(n=ot({[g[9]]:!0,"mdc-tab__content":!0})))&&{class:n},v[0]&33554432&&Ut(g[25],"content$")])),i&&zn(i.update)&&v[0]&256&&i.update.call(null,g[8]),g[6]?p&&(Lt(),ge(p,1,1,()=>{p=null}),Rt()):p?(p.p(g,v),v[0]&64&&he(p,1)):(p=Kc(g),p.c(),he(p,1),p.m(a.parentNode,a))},i(g){l||(he(f,g),he(m),he(p),l=!0)},o(g){ge(f,g),ge(m),ge(p),l=!1},d(g){g&&Te(e),f&&f.d(g),m&&m.d(),s[34](null),g&&Te(r),p&&p.d(g),g&&Te(a),g&&Te(o),c=!1,u()}}}function nv(s){let e,t,n;const i=[{tag:s[11]},{use:[[Ml,{ripple:s[3],unbounded:!1,addClass:s[21],removeClass:s[22],addStyle:s[23]}],s[20],...s[0]]},{class:ot({[s[1]]:!0,"mdc-tab":!0,"mdc-tab--active":s[18],"mdc-tab--stacked":s[4],"mdc-tab--min-width":s[5],...s[15]})},{style:Object.entries(s[16]).map(Zc).concat([s[2]]).join(" ")},{role:"tab"},{"aria-selected":s[18]?"true":"false"},{tabindex:s[18]||s[19]?"0":"-1"},{href:s[7]},s[17],Mi(s[25],["content$","tabIndicator$"])];var r=s[10];function a(o){let l={$$slots:{default:[tv]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=Qe(l,i[c]);return{props:l}}return r&&(e=Sl(r,a(s)),s[36](e),e.$on("click",s[24])),{c(){e&&dt(e.$$.fragment),t=er()},m(o,l){e&&pt(e,o,l),we(o,t,l),n=!0},p(o,l){const c=l[0]&50301119?ln(i,[l[0]&2048&&{tag:o[11]},l[0]&15728649&&{use:[[Ml,{ripple:o[3],unbounded:!1,addClass:o[21],removeClass:o[22],addStyle:o[23]}],o[20],...o[0]]},l[0]&294962&&{class:ot({[o[1]]:!0,"mdc-tab":!0,"mdc-tab--active":o[18],"mdc-tab--stacked":o[4],"mdc-tab--min-width":o[5],...o[15]})},l[0]&65540&&{style:Object.entries(o[16]).map(Zc).concat([o[2]]).join(" ")},i[4],l[0]&262144&&{"aria-selected":o[18]?"true":"false"},l[0]&786432&&{tabindex:o[18]||o[19]?"0":"-1"},l[0]&128&&{href:o[7]},l[0]&131072&&ms(o[17]),l[0]&33554432&&ms(Mi(o[25],["content$","tabIndicator$"]))]):{};if(l[0]&33841984|l[1]&64&&(c.$$scope={dirty:l,ctx:o}),l[0]&1024&&r!==(r=o[10])){if(e){Lt();const u=e;ge(u.$$.fragment,1,0,()=>{mt(u,1)}),Rt()}r?(e=Sl(r,a(o)),o[36](e),e.$on("click",o[24]),dt(e.$$.fragment),he(e.$$.fragment,1),pt(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(o){n||(e&&he(e.$$.fragment,o),n=!0)},o(o){e&&ge(e.$$.fragment,o),n=!1},d(o){s[36](null),o&&Te(t),e&&mt(e,o)}}}const Zc=([s,e])=>`${s}: ${e};`;function iv(s,e,t){const n=["use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","activate","deactivate","focus","getElement"];let i=Bn(e,n),{$$slots:r={},$$scope:a}=e;const o=Ls(As());let{use:l=[]}=e,{class:c=""}=e,{style:u=""}=e,{tab:h}=e,{ripple:f=!0}=e,{stacked:m=!1}=e,{minWidth:_=!1}=e,{indicatorSpanOnlyContent:d=!1}=e,{href:p=void 0}=e,{content$use:g=[]}=e,{content$class:v=""}=e,b,S,M,w,y={},x={},T={},O=pa("SMUI:tab:focusOnActivate"),I=h===pa("SMUI:tab:initialActive"),Y=!1,{component:j=bl}=e,{tag:F=j===bl?p==null?"button":"a":void 0}=e;if(ma("SMUI:label:context","tab"),ma("SMUI:icon:context","tab"),!h)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");An(()=>{t(31,S=new j0({setAttr:N,addClass:L,removeClass:R,hasClass:k,activateIndicator:ie=>w.activate(ie),deactivateIndicator:()=>w.deactivate(),notifyInteracted:()=>oa(ne(),"SMUITab:interacted",{tabId:h},void 0,!0),getOffsetLeft:()=>ne().offsetLeft,getOffsetWidth:()=>ne().offsetWidth,getContentOffsetLeft:()=>M.offsetLeft,getContentOffsetWidth:()=>M.offsetWidth,focus:ee}));const H={tabId:h,get element(){return ne()},get active(){return I},forceAccessible(ie){t(19,Y=ie)},computeIndicatorClientRect:()=>w.computeContentClientRect(),computeDimensions:()=>S.computeDimensions(),focus:ee,activate:Q,deactivate:Z};return oa(ne(),"SMUITab:mount",H),S.init(),()=>{oa(ne(),"SMUITab:unmount",H),S.destroy()}});function k(H){return H in y?y[H]:ne().classList.contains(H)}function L(H){y[H]||t(15,y[H]=!0,y)}function R(H){(!(H in y)||y[H])&&t(15,y[H]=!1,y)}function D(H,ie){x[H]!=ie&&(ie===""||ie==null?(delete x[H],t(16,x)):t(16,x[H]=ie,x))}function N(H,ie){T[H]!==ie&&t(17,T[H]=ie,T)}function V(H){!H.defaultPrevented&&S&&S.handleClick()}function Q(H,ie){t(18,I=!0),ie&&S.setFocusOnActivate(!1),S.activate(H),ie&&S.setFocusOnActivate(O)}function Z(){t(18,I=!1),S.deactivate()}function ee(){ne().focus()}function ne(){return b.getElement()}function ue(H){Nt[H?"unshift":"push"](()=>{w=H,t(14,w)})}function q(H){Nt[H?"unshift":"push"](()=>{M=H,t(13,M)})}function je(H){Nt[H?"unshift":"push"](()=>{w=H,t(14,w)})}function J(H){Nt[H?"unshift":"push"](()=>{b=H,t(12,b)})}return s.$$set=H=>{e=Qe(Qe({},e),Cs(H)),t(25,i=Bn(e,n)),"use"in H&&t(0,l=H.use),"class"in H&&t(1,c=H.class),"style"in H&&t(2,u=H.style),"tab"in H&&t(26,h=H.tab),"ripple"in H&&t(3,f=H.ripple),"stacked"in H&&t(4,m=H.stacked),"minWidth"in H&&t(5,_=H.minWidth),"indicatorSpanOnlyContent"in H&&t(6,d=H.indicatorSpanOnlyContent),"href"in H&&t(7,p=H.href),"content$use"in H&&t(8,g=H.content$use),"content$class"in H&&t(9,v=H.content$class),"component"in H&&t(10,j=H.component),"tag"in H&&t(11,F=H.tag),"$$scope"in H&&t(37,a=H.$$scope)},s.$$.update=()=>{s.$$.dirty[1]&1&&S&&S.setFocusOnActivate(O)},[l,c,u,f,m,_,d,p,g,v,j,F,b,M,w,y,x,T,I,Y,o,L,R,D,V,i,h,Q,Z,ee,ne,S,r,ue,q,je,J,a]}class rv extends Tn{constructor(e){super(),En(this,e,iv,nv,fn,{use:0,class:1,style:2,tab:26,ripple:3,stacked:4,minWidth:5,indicatorSpanOnlyContent:6,href:7,content$use:8,content$class:9,component:10,tag:11,activate:27,deactivate:28,focus:29,getElement:30},null,[-1,-1])}get activate(){return this.$$.ctx[27]}get deactivate(){return this.$$.ctx[28]}get focus(){return this.$$.ctx[29]}get getElement(){return this.$$.ctx[30]}}/**
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
 */var _f={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},sv={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var el=function(){function s(e){this.adapter=e}return s}();/**
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
 */var av=function(s){Wn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(n.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}(el);/**
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
 */var ov=function(s){Wn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}(el);/**
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
 */var lv=function(s){Wn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}(el);/**
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
 */var cv=function(s){Wn(e,s);function e(t){var n=s.call(this,Vn(Vn({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return _f},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return sv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],r=Dh(i.split(","),6);r[0],r[1],r[2],r[3];var a=r[4];return r[5],parseFloat(a)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),r=i-n;this.animate({finalScrollPosition:i,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,r=this.clampScrollValue(i),a=r-n;return{finalScrollPosition:r,scrollDelta:a}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new ov(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),a=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),a===n?new lv(this.adapter):new av(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(Rs);/**
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
 */var _o;function uv(s,e){if(e===void 0&&(e=!0),e&&typeof _o<"u")return _o;var t=s.createElement("div");t.classList.add(_f.SCROLL_TEST),s.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return s.body.removeChild(t),e&&(_o=n),n}/**
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
 */var nt={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},xn={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var nr=new Set;nr.add(nt.ARROW_LEFT_KEY);nr.add(nt.ARROW_RIGHT_KEY);nr.add(nt.END_KEY);nr.add(nt.HOME_KEY);nr.add(nt.ENTER_KEY);nr.add(nt.SPACE_KEY);var ir=new Map;ir.set(xn.ARROW_LEFT_KEYCODE,nt.ARROW_LEFT_KEY);ir.set(xn.ARROW_RIGHT_KEYCODE,nt.ARROW_RIGHT_KEY);ir.set(xn.END_KEYCODE,nt.END_KEY);ir.set(xn.HOME_KEYCODE,nt.HOME_KEY);ir.set(xn.ENTER_KEYCODE,nt.ENTER_KEY);ir.set(xn.SPACE_KEYCODE,nt.SPACE_KEY);var fv=function(s){Wn(e,s);function e(t){var n=s.call(this,Vn(Vn({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return xn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0)if(this.isActivationKey(n)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(r);else{var i=this.determineTargetFromKey(r,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),r=this.adapter.getTabListLength()-1,a=n===nt.END_KEY,o=n===nt.ARROW_LEFT_KEY&&!i||n===nt.ARROW_RIGHT_KEY&&i,l=n===nt.ARROW_RIGHT_KEY&&!i||n===nt.ARROW_LEFT_KEY&&i,c=t;return a?c=r:o?c-=1:l?c+=1:c=0,c<0?c=r:c>r&&(c=0),c},e.prototype.calculateScrollIncrement=function(t,n,i,r){var a=this.adapter.getTabDimensionsAtIndex(n),o=a.contentLeft-i-r,l=a.contentRight-i,c=l-xn.EXTRA_SCROLL_AMOUNT,u=o+xn.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(c,0):Math.max(u,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,r,a){var o=this.adapter.getTabDimensionsAtIndex(n),l=a-o.contentLeft-i,c=a-o.contentRight-i-r,u=c+xn.EXTRA_SCROLL_AMOUNT,h=l-xn.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(u,0):Math.min(h,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,r){var a=n.rootLeft-i,o=n.rootRight-i-r,l=a+o,c=a<0||l<0,u=o>0||l>0;return c?t-1:u?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,r,a){var o=a-n.rootLeft-r-i,l=a-n.rootRight-i,c=o+l,u=o>0||c>0,h=l<0||c<0;return u?t+1:h?t-1:-1},e.prototype.getKeyFromEvent=function(t){return nr.has(t.key)?t.key:ir.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===nt.SPACE_KEY||t===nt.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),a=this.findAdjacentTabIndexClosestToEdge(t,r,n,i);if(this.indexIsInRange(a)){var o=this.calculateScrollIncrement(t,a,n,i);this.adapter.incrementScroll(o)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),a=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,n,i,a);if(this.indexIsInRange(o)){var l=this.calculateScrollIncrementRTL(t,o,n,i,a);this.adapter.incrementScroll(l)}},e}(Rs);function hv(s){let e,t,n,i,r,a,o,l,c,u,h,f,m,_;const d=s[23].default,p=Xr(d,s,s[22],null);let g=[{class:i=ot({[s[6]]:!0,"mdc-tab-scroller__scroll-content":!0})},{style:r=Object.entries(s[14]).map(Jc).join(" ")},Ut(s[16],"scrollContent$")],v={};for(let y=0;y<g.length;y+=1)v=Qe(v,g[y]);let b=[{class:o=ot({[s[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...s[12]})},{style:l=Object.entries(s[13]).map(Qc).join(" ")},Ut(s[16],"scrollArea$")],S={};for(let y=0;y<b.length;y+=1)S=Qe(S,b[y]);let M=[{class:u=ot({[s[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":s[2]==="start","mdc-tab-scroller--align-end":s[2]==="end","mdc-tab-scroller--align-center":s[2]==="center",...s[11]})},Mi(s[16],["scrollArea$","scrollContent$"])],w={};for(let y=0;y<M.length;y+=1)w=Qe(w,M[y]);return{c(){e=_e("div"),t=_e("div"),n=_e("div"),p&&p.c(),St(n,v),St(t,S),St(e,w)},m(y,x){we(y,e,x),pe(e,t),pe(t,n),p&&p.m(n,null),s[24](n),s[26](t),s[32](e),f=!0,m||(_=[nn(a=vi.call(null,n,s[5])),yt(n,"transitionend",s[25]),nn(c=vi.call(null,t,s[3])),yt(t,"wheel",s[27],{passive:!0}),yt(t,"touchstart",s[28],{passive:!0}),yt(t,"pointerdown",s[29]),yt(t,"mousedown",s[30]),yt(t,"keydown",s[31]),nn(h=vi.call(null,e,s[0])),nn(s[15].call(null,e))],m=!0)},p(y,x){p&&p.p&&(!f||x[0]&4194304)&&Yr(p,d,y,y[22],f?Kr(d,y[22],x,null):jr(y[22]),null),St(n,v=ln(g,[(!f||x[0]&64&&i!==(i=ot({[y[6]]:!0,"mdc-tab-scroller__scroll-content":!0})))&&{class:i},(!f||x[0]&16384&&r!==(r=Object.entries(y[14]).map(Jc).join(" ")))&&{style:r},x[0]&65536&&Ut(y[16],"scrollContent$")])),a&&zn(a.update)&&x[0]&32&&a.update.call(null,y[5]),St(t,S=ln(b,[(!f||x[0]&4112&&o!==(o=ot({[y[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...y[12]})))&&{class:o},(!f||x[0]&8192&&l!==(l=Object.entries(y[13]).map(Qc).join(" ")))&&{style:l},x[0]&65536&&Ut(y[16],"scrollArea$")])),c&&zn(c.update)&&x[0]&8&&c.update.call(null,y[3]),St(e,w=ln(M,[(!f||x[0]&2054&&u!==(u=ot({[y[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":y[2]==="start","mdc-tab-scroller--align-end":y[2]==="end","mdc-tab-scroller--align-center":y[2]==="center",...y[11]})))&&{class:u},x[0]&65536&&Mi(y[16],["scrollArea$","scrollContent$"])])),h&&zn(h.update)&&x[0]&1&&h.update.call(null,y[0])},i(y){f||(he(p,y),f=!0)},o(y){ge(p,y),f=!1},d(y){y&&Te(e),p&&p.d(y),s[24](null),s[26](null),s[32](null),m=!1,Es(_)}}}const Jc=([s,e])=>`${s}: ${e};`,Qc=([s,e])=>`${s}: ${e};`;function dv(s,e,t){const n=["use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"];let i=Bn(e,n),{$$slots:r={},$$scope:a}=e;const{matches:o}=Ph,l=Ls(As());let{use:c=[]}=e,{class:u=""}=e,{align:h=void 0}=e,{scrollArea$use:f=[]}=e,{scrollArea$class:m=""}=e,{scrollContent$use:_=[]}=e,{scrollContent$class:d=""}=e,p,g,v,b,S={},M={},w={},y={};An(()=>(t(8,g=new cv({eventTargetMatchesSelector:(J,H)=>o(J,H),addClass:x,removeClass:T,addScrollAreaClass:O,setScrollAreaStyleProperty:I,setScrollContentStyleProperty:Y,getScrollContentStyleValue:j,setScrollAreaScrollLeft:J=>t(9,v.scrollLeft=J,v),getScrollAreaScrollLeft:()=>v.scrollLeft,getScrollContentOffsetWidth:()=>b.offsetWidth,getScrollAreaOffsetWidth:()=>v.offsetWidth,computeScrollAreaClientRect:()=>v.getBoundingClientRect(),computeScrollContentClientRect:()=>b.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>uv(document)})),g.init(),()=>{g.destroy()}));function x(J){S[J]||t(11,S[J]=!0,S)}function T(J){(!(J in S)||S[J])&&t(11,S[J]=!1,S)}function O(J){M[J]||t(12,M[J]=!0,M)}function I(J,H){w[J]!=H&&(H===""||H==null?(delete w[J],t(13,w)):t(13,w[J]=H,w))}function Y(J,H){y[J]!=H&&(H===""||H==null?(delete y[J],t(14,y)):t(14,y[J]=H,y))}function j(J){return J in y?y[J]:getComputedStyle(b).getPropertyValue(J)}function F(){return g.getScrollPosition()}function k(){return b.offsetWidth}function L(J){g.incrementScroll(J)}function R(J){g.scrollTo(J)}function D(){return p}function N(J){Nt[J?"unshift":"push"](()=>{b=J,t(10,b)})}const V=J=>g&&g.handleTransitionEnd(J);function Q(J){Nt[J?"unshift":"push"](()=>{v=J,t(9,v)})}const Z=()=>g&&g.handleInteraction(),ee=()=>g&&g.handleInteraction(),ne=()=>g&&g.handleInteraction(),ue=()=>g&&g.handleInteraction(),q=()=>g&&g.handleInteraction();function je(J){Nt[J?"unshift":"push"](()=>{p=J,t(7,p)})}return s.$$set=J=>{e=Qe(Qe({},e),Cs(J)),t(16,i=Bn(e,n)),"use"in J&&t(0,c=J.use),"class"in J&&t(1,u=J.class),"align"in J&&t(2,h=J.align),"scrollArea$use"in J&&t(3,f=J.scrollArea$use),"scrollArea$class"in J&&t(4,m=J.scrollArea$class),"scrollContent$use"in J&&t(5,_=J.scrollContent$use),"scrollContent$class"in J&&t(6,d=J.scrollContent$class),"$$scope"in J&&t(22,a=J.$$scope)},[c,u,h,f,m,_,d,p,g,v,b,S,M,w,y,l,i,F,k,L,R,D,a,r,N,V,Q,Z,ee,ne,ue,q,je]}class pv extends Tn{constructor(e){super(),En(this,e,dv,hv,fn,{use:0,class:1,align:2,scrollArea$use:3,scrollArea$class:4,scrollContent$use:5,scrollContent$class:6,getScrollPosition:17,getScrollContentWidth:18,incrementScroll:19,scrollTo:20,getElement:21},null,[-1,-1])}get getScrollPosition(){return this.$$.ctx[17]}get getScrollContentWidth(){return this.$$.ctx[18]}get incrementScroll(){return this.$$.ctx[19]}get scrollTo(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}}function $c(s,e,t){const n=s.slice();return n[28]=e[t],n}const mv=s=>({tab:s&4}),eu=s=>({tab:s[28]});function tu(s,e){let t,n;const i=e[20].default,r=Xr(i,e,e[23],eu);return{key:s,first:null,c(){t=er(),r&&r.c(),this.first=t},m(a,o){we(a,t,o),r&&r.m(a,o),n=!0},p(a,o){e=a,r&&r.p&&(!n||o&8388612)&&Yr(r,i,e,e[23],n?Kr(i,e[23],o,mv):jr(e[23]),eu)},i(a){n||(he(r,a),n=!0)},o(a){ge(r,a),n=!1},d(a){a&&Te(t),r&&r.d(a)}}}function gv(s){let e=[],t=new Map,n,i,r=s[2];const a=o=>o[3](o[28]);for(let o=0;o<r.length;o+=1){let l=$c(s,r,o),c=a(l);t.set(c,e[o]=tu(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=er()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);we(o,n,l),i=!0},p(o,l){l&8388620&&(r=o[2],Lt(),e=wh(e,l,a,1,o,r,t,n.parentNode,Th,tu,n,$c),Rt())},i(o){if(!i){for(let l=0;l<r.length;l+=1)he(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)ge(e[l]);i=!1},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&Te(n)}}}function _v(s){let e,t,n,i,r,a,o;const l=[Ut(s[10],"tabScroller$")];let c={$$slots:{default:[gv]},$$scope:{ctx:s}};for(let f=0;f<l.length;f+=1)c=Qe(c,l[f]);t=new pv({props:c}),s[21](t);let u=[{class:n=ot({[s[1]]:!0,"mdc-tab-bar":!0})},{role:"tablist"},Mi(s[10],["tabScroller$"])],h={};for(let f=0;f<u.length;f+=1)h=Qe(h,u[f]);return{c(){e=_e("div"),dt(t.$$.fragment),St(e,h)},m(f,m){we(f,e,m),pt(t,e,null),s[22](e),r=!0,a||(o=[nn(i=vi.call(null,e,s[0])),nn(s[7].call(null,e)),yt(e,"SMUITab:mount",s[8]),yt(e,"SMUITab:unmount",s[9]),yt(e,"SMUITab:interacted",function(){zn(s[4]&&s[4].handleTabInteraction.bind(s[4]))&&(s[4]&&s[4].handleTabInteraction.bind(s[4])).apply(this,arguments)}),yt(e,"keydown",function(){zn(s[4]&&s[4].handleKeyDown.bind(s[4]))&&(s[4]&&s[4].handleKeyDown.bind(s[4])).apply(this,arguments)})],a=!0)},p(f,[m]){s=f;const _=m&1024?ln(l,[ms(Ut(s[10],"tabScroller$"))]):{};m&8388612&&(_.$$scope={dirty:m,ctx:s}),t.$set(_),St(e,h=ln(u,[(!r||m&2&&n!==(n=ot({[s[1]]:!0,"mdc-tab-bar":!0})))&&{class:n},{role:"tablist"},m&1024&&Mi(s[10],["tabScroller$"])])),i&&zn(i.update)&&m&1&&i.update.call(null,s[0])},i(f){r||(he(t.$$.fragment,f),r=!0)},o(f){ge(t.$$.fragment,f),r=!1},d(f){f&&Te(e),s[21](null),mt(t),s[22](null),a=!1,Es(o)}}}function vv(s,e,t){const n=["use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","scrollIntoView","getElement"];let i=Bn(e,n),{$$slots:r={},$$scope:a}=e;const o=Ls(As());let{use:l=[]}=e,{class:c=""}=e,{tabs:u=[]}=e,{key:h=L=>L}=e,{focusOnActivate:f=!0}=e,{focusOnProgrammatic:m=!1}=e,{useAutomaticActivation:_=!0}=e,{active:d=void 0}=e,p,g,v,b=u.indexOf(d),S={},M=new WeakMap,w=!1;ma("SMUI:tab:focusOnActivate",f),ma("SMUI:tab:initialActive",d),An(()=>(t(4,g=new fv({scrollTo:L=>v.scrollTo(L),incrementScroll:L=>v.incrementScroll(L),getScrollPosition:()=>v.getScrollPosition(),getScrollContentWidth:()=>v.getScrollContentWidth(),getOffsetWidth:()=>j().offsetWidth,isRTL:()=>getComputedStyle(j()).getPropertyValue("direction")==="rtl",setActiveTab:L=>{t(11,d=u[L]),t(17,b=L),g.activateTab(L)},activateTabAtIndex:(L,R)=>{var D;return(D=T(u[L]))===null||D===void 0?void 0:D.activate(R,w)},deactivateTabAtIndex:L=>{var R;return(R=T(u[L]))===null||R===void 0?void 0:R.deactivate()},focusTabAtIndex:L=>{var R;return(R=T(u[L]))===null||R===void 0?void 0:R.focus()},getTabIndicatorClientRectAtIndex:L=>{var R,D;return(D=(R=T(u[L]))===null||R===void 0?void 0:R.computeIndicatorClientRect())!==null&&D!==void 0?D:new DOMRect},getTabDimensionsAtIndex:L=>{var R,D;return(D=(R=T(u[L]))===null||R===void 0?void 0:R.computeDimensions())!==null&&D!==void 0?D:{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var L;for(let R=0;R<u.length;R++)if(!((L=T(u[R]))===null||L===void 0)&&L.active)return R;return-1},getFocusedTabIndex:()=>{const L=u.map(D=>{var N;return(N=T(D))===null||N===void 0?void 0:N.element}),R=document.activeElement;return L.indexOf(R)},getIndexOfTabById:L=>u.indexOf(L),getTabListLength:()=>u.length,notifyTabActivated:L=>oa(j(),"SMUITabBar:activated",{index:L},void 0,!0)})),g.init(),()=>{g.destroy()}));function y(L){const R=L.detail;O(R.tabId,R)}function x(L){const R=L.detail;I(R.tabId)}function T(L){return L instanceof Object?M.get(L):S[L]}function O(L,R){L instanceof Object?(M.set(L,R),t(19,M)):(t(18,S[L]=R,S),t(18,S))}function I(L){L instanceof Object?(M.delete(L),t(19,M)):(delete S[L],t(18,S))}function Y(L){g.scrollIntoView(L)}function j(){return p}function F(L){Nt[L?"unshift":"push"](()=>{v=L,t(6,v)})}function k(L){Nt[L?"unshift":"push"](()=>{p=L,t(5,p)})}return s.$$set=L=>{e=Qe(Qe({},e),Cs(L)),t(10,i=Bn(e,n)),"use"in L&&t(0,l=L.use),"class"in L&&t(1,c=L.class),"tabs"in L&&t(2,u=L.tabs),"key"in L&&t(3,h=L.key),"focusOnActivate"in L&&t(12,f=L.focusOnActivate),"focusOnProgrammatic"in L&&t(13,m=L.focusOnProgrammatic),"useAutomaticActivation"in L&&t(14,_=L.useAutomaticActivation),"active"in L&&t(11,d=L.active),"$$scope"in L&&t(23,a=L.$$scope)},s.$$.update=()=>{if(s.$$.dirty&141332&&d!==u[b]&&(t(17,b=u.indexOf(d)),g&&(w=!m,g.activateTab(b),w=!1)),s.$$.dirty&917508&&u.length){const L=u[0]instanceof Object?M.get(u[0]):S[u[0]];L&&L.forceAccessible(b===-1)}s.$$.dirty&16400&&g&&g.setUseAutomaticActivation(_)},[l,c,u,h,g,p,v,o,y,x,i,d,f,m,_,Y,j,b,S,M,r,F,k,a]}class xv extends Tn{constructor(e){super(),En(this,e,vv,_v,fn,{use:0,class:1,tabs:2,key:3,focusOnActivate:12,focusOnProgrammatic:13,useAutomaticActivation:14,active:11,scrollIntoView:15,getElement:16})}get scrollIntoView(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}function nu(s,e,t){const n=s.slice();return n[9]=e[t],n[11]=t,n}function Sv(s){let e,t=s[12]+"",n;return{c(){e=_e("span"),n=zt(t),ve(e,"class","tab-label svelte-h4cryy")},m(i,r){we(i,e,r),pe(e,n)},p(i,r){r&4096&&t!==(t=i[12]+"")&&Ir(n,t)},d(i){i&&Te(e)}}}function yv(s){let e,t;return e=new rv({props:{class:"home_p2-tab",tab:s[12],minWidth:!0,$$slots:{default:[Sv]},$$scope:{ctx:s}}}),e.$on("click",s[4]),{c(){dt(e.$$.fragment)},m(n,i){pt(e,n,i),t=!0},p(n,i){const r={};i&4096&&(r.tab=n[12]),i&12288&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(he(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){mt(e,n)}}}function bv(s){let e,t,n=s[9].skill+"",i,r,a,o=s[9].score+"",l,c,u,h;return{c(){e=_e("div"),t=_e("div"),i=zt(n),r=Oe(),a=_e("div"),l=zt(o),c=Oe(),ve(t,"class","skill-name svelte-h4cryy"),ve(a,"class","skill-score svelte-h4cryy"),ve(e,"class","skills-list-item svelte-h4cryy")},m(f,m){we(f,e,m),pe(e,t),pe(t,i),pe(e,r),pe(e,a),pe(a,l),pe(e,c),h=!0},p(f,m){(!h||m&2)&&n!==(n=f[9].skill+"")&&Ir(i,n),(!h||m&2)&&o!==(o=f[9].score+"")&&Ir(l,o)},i(f){h||(Ai(()=>{h&&(u||(u=Tt(e,Et,{delay:50,duration:50*s[11]},!0)),u.run(1))}),h=!0)},o(f){u||(u=Tt(e,Et,{delay:50,duration:50*s[11]},!1)),u.run(0),h=!1},d(f){f&&Te(e),f&&u&&u.end()}}}function Mv(s){let e,t,n=s[9].tab+"",i,r,a,o;return{c(){e=_e("div"),t=_e("div"),i=zt(n),r=Oe(),ve(t,"class","skill-tab"),ve(e,"class","skills-list-tab svelte-h4cryy")},m(l,c){we(l,e,c),pe(e,t),pe(t,i),pe(e,r),o=!0},p(l,c){(!o||c&2)&&n!==(n=l[9].tab+"")&&Ir(i,n)},i(l){o||(Ai(()=>{o&&(a||(a=Tt(e,Et,{delay:50,duration:50*s[11]},!0)),a.run(1))}),o=!0)},o(l){a||(a=Tt(e,Et,{delay:50,duration:50*s[11]},!1)),a.run(0),o=!1},d(l){l&&Te(e),l&&a&&a.end()}}}function iu(s){let e,t,n,i;const r=[Mv,bv],a=[];function o(l,c){return l[9].tab?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=er()},m(l,c){a[e].m(l,c),we(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(Lt(),ge(a[u],1,1,()=>{a[u]=null}),Rt(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),he(t,1),t.m(n.parentNode,n))},i(l){i||(he(t),i=!0)},o(l){ge(t),i=!1},d(l){a[e].d(l),l&&Te(n)}}}function ru(s){let e,t,n=s[1],i=[];for(let a=0;a<n.length;a+=1)i[a]=iu(nu(s,n,a));const r=a=>ge(i[a],1,1,()=>{i[a]=null});return{c(){e=_e("div");for(let a=0;a<i.length;a+=1)i[a].c();ve(e,"class","skills-list svelte-h4cryy")},m(a,o){we(a,e,o);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t=!0},p(a,o){if(o&2){n=a[1];let l;for(l=0;l<n.length;l+=1){const c=nu(a,n,l);i[l]?(i[l].p(c,o),he(i[l],1)):(i[l]=iu(c),i[l].c(),he(i[l],1),i[l].m(e,null))}for(Lt(),l=n.length;l<i.length;l+=1)r(l);Rt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)he(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)ge(i[o]);t=!1},d(a){a&&Te(e),Zr(i,a)}}}function wv(s){let e,t,n,i,r=s[1],a,o;function l(h){s[7](h)}let c={class:"home_p2-tabbar",tabs:s[3],$$slots:{default:[yv,({tab:h})=>({12:h}),({tab:h})=>h?4096:0]},$$scope:{ctx:s}};s[0]!==void 0&&(c.active=s[0]),t=new xv({props:c}),Nt.push(()=>Eh(t,"active",l));let u=ru(s);return{c(){e=_e("div"),dt(t.$$.fragment),i=Oe(),u.c(),ve(e,"class","page page_2 svelte-h4cryy")},m(h,f){we(h,e,f),pt(t,e,null),pe(e,i),u.m(e,null),o=!0},p(h,[f]){s=h;const m={};f&12288&&(m.$$scope={dirty:f,ctx:s}),!n&&f&1&&(n=!0,m.active=s[0],Ah(()=>n=!1)),t.$set(m),f&2&&fn(r,r=s[1])?(Lt(),ge(u,1,1,bi),Rt(),u=ru(s),u.c(),he(u,1),u.m(e,null)):u.p(s,f)},i(h){o||(he(t.$$.fragment,h),he(u),Ai(()=>{o&&(a||(a=Tt(e,Et,{delay:s[2],duration:gt},!0)),a.run(1))}),o=!0)},o(h){ge(t.$$.fragment,h),ge(u),a||(a=Tt(e,Et,{delay:s[2],duration:gt},!1)),a.run(0),o=!1},d(h){h&&Te(e),mt(t),u.d(h),h&&a&&a.end()}}}function Tv(s,e,t){let n,i,r;bn(s,wn,f=>t(5,i=f)),bn(s,_i,f=>t(6,r=f));const a=ua;let o=a[0],l=Vc[o],c=null;const u=()=>{const f=o;setTimeout(()=>{if(f!==o){const m=l.length;t(1,l=[]),c&&(clearTimeout(c),c=null),c=setTimeout(()=>{t(1,l=Vc[o])},m*50)}},20)};An(()=>{wn.set(!1)});function h(f){o=f,t(0,o)}return s.$$.update=()=>{s.$$.dirty&96&&t(2,n=r===1?i?0:gt:0)},[o,l,n,a,u,i,r,h]}class Ev extends Tn{constructor(e){super(),En(this,e,Tv,wv,fn,{})}}function su(s,e,t){const n=s.slice();return n[3]=e[t],n[5]=t,n}function au(s,e,t){const n=s.slice();return n[6]=e[t],n}function Av(s){let e,t=s[3].job+"",n;return{c(){e=_e("div"),n=zt(t),ve(e,"class","sub-job svelte-1c6wvpv")},m(i,r){we(i,e,r),pe(e,n)},p:bi,d(i){i&&Te(e)}}}function ou(s){let e,t=s[6]+"",n;return{c(){e=_e("div"),n=zt(t),ve(e,"class","desc svelte-1c6wvpv")},m(i,r){we(i,e,r),pe(e,n)},p:bi,d(i){i&&Te(e)}}}function lu(s){let e,t,n=s[3].timeline+"",i,r,a,o=s[3].experience+"",l,c,u,h,f,m=s[3].job&&Av(s),_=s[3].desc,d=[];for(let p=0;p<_.length;p+=1)d[p]=ou(au(s,_,p));return{c(){e=_e("div"),t=_e("div"),i=zt(n),r=Oe(),a=_e("div"),l=zt(o),c=Oe(),m&&m.c(),u=Oe(),h=_e("div");for(let p=0;p<d.length;p+=1)d[p].c();f=Oe(),ve(t,"class","sub svelte-1c6wvpv"),ve(a,"class","main svelte-1c6wvpv"),ve(e,"class",Ch(`card card-${s[5]%2===0?"top":"bottom"}`)+" svelte-1c6wvpv")},m(p,g){we(p,e,g),pe(e,t),pe(t,i),pe(e,r),pe(e,a),pe(a,l),pe(e,c),m&&m.m(e,null),pe(e,u),pe(e,h);for(let v=0;v<d.length;v+=1)d[v]&&d[v].m(h,null);pe(e,f)},p(p,g){if(p[3].job&&m.p(p,g),g&0){_=p[3].desc;let v;for(v=0;v<_.length;v+=1){const b=au(p,_,v);d[v]?d[v].p(b,g):(d[v]=ou(b),d[v].c(),d[v].m(h,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=_.length}},d(p){p&&Te(e),m&&m.d(),Zr(d,p)}}}function Cv(s){let e,t,n,i,r=Gc,a=[];for(let o=0;o<r.length;o+=1)a[o]=lu(su(s,r,o));return{c(){e=_e("div"),t=_e("div");for(let o=0;o<a.length;o+=1)a[o].c();ve(t,"class","cards svelte-1c6wvpv"),ve(e,"class","page page_3 svelte-1c6wvpv")},m(o,l){we(o,e,l),pe(e,t);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(t,null);i=!0},p(o,[l]){if(s=o,l&0){r=Gc;let c;for(c=0;c<r.length;c+=1){const u=su(s,r,c);a[c]?a[c].p(u,l):(a[c]=lu(u),a[c].c(),a[c].m(t,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=r.length}},i(o){i||(Ai(()=>{i&&(n||(n=Tt(e,Et,{delay:s[0],duration:gt},!0)),n.run(1))}),i=!0)},o(o){n||(n=Tt(e,Et,{delay:s[0],duration:gt},!1)),n.run(0),i=!1},d(o){o&&Te(e),Zr(a,o),o&&n&&n.end()}}}function Lv(s,e,t){let n,i,r;return bn(s,wn,a=>t(1,i=a)),bn(s,_i,a=>t(2,r=a)),An(()=>{wn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===2?i?0:gt:0)},[n,i,r]}class Rv extends Tn{constructor(e){super(),En(this,e,Lv,Cv,fn,{})}}function cu(s,e,t){const n=s.slice();return n[3]=e[t],n}function uu(s,e,t){const n=s.slice();return n[6]=e[t],n}function Dv(s){let e=s[3].title+"",t;return{c(){t=zt(e)},m(n,i){we(n,t,i)},p:bi,d(n){n&&Te(t)}}}function fu(s){let e,t=s[6]+"",n;return{c(){e=_e("div"),n=zt(t)},m(i,r){we(i,e,r),pe(e,n)},p:bi,d(i){i&&Te(e)}}}function Pv(s){let e,t=s[3].desc,n=[];for(let i=0;i<t.length;i+=1)n[i]=fu(uu(s,t,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=er()},m(i,r){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(i,r);we(i,e,r)},p(i,r){if(r&0){t=i[3].desc;let a;for(a=0;a<t.length;a+=1){const o=uu(i,t,a);n[a]?n[a].p(o,r):(n[a]=fu(o),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){Zr(n,i),i&&Te(e)}}}function Iv(s){let e,t,n,i,r;return e=new Oh({props:{$$slots:{default:[Dv]},$$scope:{ctx:s}}}),n=new Nh({props:{$$slots:{default:[Pv]},$$scope:{ctx:s}}}),{c(){dt(e.$$.fragment),t=Oe(),dt(n.$$.fragment),i=Oe()},m(a,o){pt(e,a,o),we(a,t,o),pt(n,a,o),we(a,i,o),r=!0},p(a,o){const l={};o&512&&(l.$$scope={dirty:o,ctx:a}),e.$set(l);const c={};o&512&&(c.$$scope={dirty:o,ctx:a}),n.$set(c)},i(a){r||(he(e.$$.fragment,a),he(n.$$.fragment,a),r=!0)},o(a){ge(e.$$.fragment,a),ge(n.$$.fragment,a),r=!1},d(a){mt(e,a),a&&Te(t),mt(n,a),a&&Te(i)}}}function hu(s){let e,t;return e=new Fh({props:{$$slots:{default:[Iv]},$$scope:{ctx:s}}}),{c(){dt(e.$$.fragment)},m(n,i){pt(e,n,i),t=!0},p(n,i){const r={};i&512&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(he(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){mt(e,n)}}}function Fv(s){let e,t,n=Wc,i=[];for(let a=0;a<n.length;a+=1)i[a]=hu(cu(s,n,a));const r=a=>ge(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=er()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);we(a,e,o),t=!0},p(a,o){if(o&0){n=Wc;let l;for(l=0;l<n.length;l+=1){const c=cu(a,n,l);i[l]?(i[l].p(c,o),he(i[l],1)):(i[l]=hu(c),i[l].c(),he(i[l],1),i[l].m(e.parentNode,e))}for(Lt(),l=n.length;l<i.length;l+=1)r(l);Rt()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)he(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)ge(i[o]);t=!1},d(a){Zr(i,a),a&&Te(e)}}}function Ov(s){let e,t,n,i,r,a;return i=new Ih({props:{class:"home_p4-accordion",$$slots:{default:[Fv]},$$scope:{ctx:s}}}),{c(){e=_e("div"),t=_e("div"),t.textContent="something of hobby",n=Oe(),dt(i.$$.fragment),ve(t,"class","title svelte-pfgiy3"),ve(e,"class","page page_4 svelte-pfgiy3")},m(o,l){we(o,e,l),pe(e,t),pe(e,n),pt(i,e,null),a=!0},p(o,[l]){s=o;const c={};l&512&&(c.$$scope={dirty:l,ctx:s}),i.$set(c)},i(o){a||(he(i.$$.fragment,o),Ai(()=>{a&&(r||(r=Tt(e,Et,{delay:s[0],duration:gt},!0)),r.run(1))}),a=!0)},o(o){ge(i.$$.fragment,o),r||(r=Tt(e,Et,{delay:s[0],duration:gt},!1)),r.run(0),a=!1},d(o){o&&Te(e),mt(i),o&&r&&r.end()}}}function Nv(s,e,t){let n,i,r;return bn(s,wn,a=>t(1,i=a)),bn(s,_i,a=>t(2,r=a)),An(()=>{wn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===3?i?0:gt:0)},[n,i,r]}class zv extends Tn{constructor(e){super(),En(this,e,Nv,Ov,fn,{})}}function Uv(s){let e,t,n;return{c(){e=_e("div"),e.innerHTML=`<div class="title svelte-1ns72mw">联系方式</div> 
  <div class="methods svelte-1ns72mw"><div class="method svelte-1ns72mw"><svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg> 
      <span class="text svelte-1ns72mw">Github</span> 
      <a class="link svelte-1ns72mw" href="https://github.com/mahiru-forever" target="_blank"></a></div> 
    <div class="method method-wx svelte-1ns72mw"><div class="wx svelte-1ns72mw"></div> 
      <span class="text svelte-1ns72mw">微信</span> 
      <div class="qr-code  svelte-1ns72mw"><div class="wx-code svelte-1ns72mw"></div></div></div> 
    <div class="method method-qq svelte-1ns72mw"><div class="qq svelte-1ns72mw"></div> 
      <span class="text svelte-1ns72mw">QQ</span> 
      <div class="qr-code svelte-1ns72mw"><div class="qq-code svelte-1ns72mw"></div></div></div> 
    <div class="method svelte-1ns72mw"><div class="mail svelte-1ns72mw"></div> 
      <span class="text svelte-1ns72mw">邮箱</span> 
      <a class="link svelte-1ns72mw" href="mailto:13405586521@163.com"></a></div></div>`,ve(e,"class","page page_5 svelte-1ns72mw")},m(i,r){we(i,e,r),n=!0},p(i,[r]){s=i},i(i){n||(Ai(()=>{n&&(t||(t=Tt(e,Et,{delay:s[0],duration:gt},!0)),t.run(1))}),n=!0)},o(i){t||(t=Tt(e,Et,{delay:s[0],duration:gt},!1)),t.run(0),n=!1},d(i){i&&Te(e),i&&t&&t.end()}}}function kv(s,e,t){let n,i,r;return bn(s,wn,a=>t(1,i=a)),bn(s,_i,a=>t(2,r=a)),An(()=>{wn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===4?i?0:gt:0)},[n,i,r]}class Bv extends Tn{constructor(e){super(),En(this,e,kv,Uv,fn,{})}}const Vv=(s,e,t)=>new wi({uniforms:{uTime:{value:0},uTexture:{value:s},uDepthTexture:{value:e},uMouse:{value:t}},vertexShader:`
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
    `});function Qn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function vf(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kr={duration:.5,overwrite:!1,delay:0},tl,Mt,it,sn=1e8,He=1/sn,No=Math.PI*2,Gv=No/4,Wv=0,xf=Math.sqrt,Hv=Math.cos,qv=Math.sin,ct=function(e){return typeof e=="string"},Je=function(e){return typeof e=="function"},ri=function(e){return typeof e=="number"},nl=function(e){return typeof e>"u"},Gn=function(e){return typeof e=="object"},kt=function(e){return e!==!1},il=function(){return typeof window<"u"},aa=function(e){return Je(e)||ct(e)},Sf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wt=Array.isArray,zo=/(?:-?\.?\d|\.)+/gi,yf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Tr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bf=/[+-]=-?[.\d]+/,Mf=/[^,'"\[\]\s]+/gi,Xv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,en,Uo,rl,Jt={},ga={},wf,Tf=function(e){return(ga=$i(e,Jt))&&Gt},sl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_a=function(e,t){return!t&&console.warn(e)},Ef=function(e,t){return e&&(Jt[e]=t)&&ga&&(ga[e]=t)||Jt},xs=function(){return 0},Yv={suppressEvents:!0,isStart:!0,kill:!1},fa={suppressEvents:!0,kill:!1},jv={suppressEvents:!0},al={},Si=[],ko={},Af,Yt={},xo={},du=30,ha=[],ol="",ll=function(e){var t=e[0],n,i;if(Gn(t)||Je(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ha.length;i--&&!ha[i].targetTest(t););n=ha[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Jf(e[i],n)))||e.splice(i,1);return e},Yi=function(e){return e._gsap||ll(an(e))[0]._gsap},Cf=function(e,t,n){return(n=e[t])&&Je(n)?e[t]():nl(n)&&e.getAttribute&&e.getAttribute(t)||n},Bt=function(e,t){return(e=e.split(",")).forEach(t)||e},$e=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},Rr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Kv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},va=function(){var e=Si.length,t=Si.slice(0),n,i;for(ko={},Si.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Lf=function(e,t,n,i){Si.length&&!Mt&&va(),e.render(t,n,i||Mt&&t<0&&(e._initted||e._startAt)),Si.length&&!Mt&&va()},Rf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Mf).length<2?t:ct(e)?e.trim():e},Df=function(e){return e},un=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},$i=function(e,t){for(var n in t)e[n]=t[n];return e},pu=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},xa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},fs=function(e){var t=e.parent||Xe,n=e.keyframes?Zv(wt(e.keyframes)):un;if(kt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Pf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Da=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ti=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ji=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Qv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Bo=function(e,t,n,i){return e._startAt&&(Mt?e._startAt.revert(fa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},$v=function s(e){return!e||e._ts&&s(e.parent)},mu=function(e){return e._repeat?Br(e._tTime,e=e.duration()+e._rDelay)*e:0},Br=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Sa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pa=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||He)||0))},Ia=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pa(e),n._dirty||ji(n,e)),e},If=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Sa(e.rawTime(),t),(!t._dur||Ns(0,t.totalDuration(),n)-t._tTime>He)&&t.render(n,!0)),ji(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-He}},Fn=function(e,t,n,i){return t.parent&&Ti(t),t._start=ft((ri(n)?n:n||e!==Xe?$t(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pf(e,t,"_first","_last",e._sort?"_start":0),Vo(t)||(e._recent=t),i||If(e,t),e._ts<0&&Ia(e,e._tTime),e},Ff=function(e,t){return(Jt.ScrollTrigger||sl("scrollTrigger",t))&&Jt.ScrollTrigger.create(t,e)},Of=function(e,t,n,i,r){if(ul(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Mt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Af!==Kt.frame)return Si.push(e),e._lazy=[r,i],1},ex=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Vo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},tx=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&ex(e)&&!(!e._initted&&Vo(e))||(e._ts<0||e._dp._ts<0)&&!Vo(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=Ns(0,e._tDur,t),u=Br(l,o),e._yoyo&&u&1&&(a=1-a),u!==Br(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Mt||i||e._zTime===He||!t&&e._zTime){if(!e._initted&&Of(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?He:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Bo(e,t,n,!0),e._onUpdate&&!n&&on(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&on(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ti(e,1),!n&&!Mt&&(on(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},nx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Vr=function(e,t,n,i){var r=e._repeat,a=ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:ft(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Ia(e,e._tTime=e._tDur*o),e.parent&&Pa(e),n||ji(e.parent,e),e},gu=function(e){return e instanceof Ot?ji(e):Vr(e,e._dur)},ix={_start:0,endTime:xs,totalDuration:xs},$t=function s(e,t,n){var i=e.labels,r=e._recent||ix,a=e.duration()>=sn?r.endTime(!1):e._dur,o,l,c;return ct(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(wt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},hs=function(e,t,n){var i=ri(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=kt(l.vars.inherit)&&l.parent;a.immediateRender=kt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new st(t[0],a,t[r+1])},Ci=function(e,t){return e||e===0?t(e):t},Ns=function(e,t,n){return n<e?e:n>t?t:n},bt=function(e,t){return!ct(e)||!(t=Xv.exec(e))?"":t[1]},rx=function(e,t,n){return Ci(n,function(i){return Ns(e,t,i)})},Go=[].slice,Nf=function(e,t){return e&&Gn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gn(e[0]))&&!e.nodeType&&e!==en},sx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ct(i)&&!t||Nf(i,1)?(r=n).push.apply(r,an(i)):n.push(i)})||n},an=function(e,t,n){return it&&!t&&it.selector?it.selector(e):ct(e)&&!n&&(Uo||!Gr())?Go.call((t||rl).querySelectorAll(e),0):wt(e)?sx(e,n):Nf(e)?Go.call(e,0):e?[e]:[]},Wo=function(e){return e=an(e)[0]||_a("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return an(t,n.querySelectorAll?n:n===e?_a("Invalid scope")||rl.createElement("div"):e)}},zf=function(e){return e.sort(function(){return .5-Math.random()})},Uf=function(e){if(Je(e))return e;var t=Gn(e)?e:{each:e},n=Ki(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return ct(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,m,_){var d=(_||t).length,p=a[d],g,v,b,S,M,w,y,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,sn])[1],!T){for(y=-sn;y<(y=_[T++].getBoundingClientRect().left)&&T<d;);T--}for(p=a[d]=[],g=l?Math.min(T,d)*u-.5:i%T,v=T===sn?0:l?d*h/T-.5:i/T|0,y=0,x=sn,w=0;w<d;w++)b=w%T-g,S=v-(w/T|0),p[w]=M=c?Math.abs(c==="y"?S:b):xf(b*b+S*S),M>y&&(y=M),M<x&&(x=M);i==="random"&&zf(p),p.max=y-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=bt(t.amount||t.each)||0,n=n&&d<0?jf(n):n}return d=(p[f]-p.min)/p.max||0,ft(p.b+(n?n(d):d)*p.v)+p.u}},Ho=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ri(n)?0:bt(n))}},kf=function(e,t){var n=wt(e),i,r;return!n&&Gn(e)&&(i=n=e.radius||sn,e.values?(e=an(e.values),(r=!ri(e[0]))&&(i*=i)):e=Ho(e.increment)),Ci(t,n?Je(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=sn,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-o,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,r||u===a||ri(a)?u:u+bt(a)}:Ho(e))},Bf=function(e,t,n,i){return Ci(wt(e)?!t:n===!0?!!(n=0):!i,function(){return wt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ax=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},ox=function(e,t){return function(n){return e(parseFloat(n))+(t||bt(n))}},lx=function(e,t,n){return Gf(e,t,0,1,n)},Vf=function(e,t,n){return Ci(n,function(i){return e[~~t(i)]})},cx=function s(e,t,n){var i=t-e;return wt(e)?Vf(e,s(0,e.length),t):Ci(n,function(r){return(i+(r-e)%i)%i+e})},ux=function s(e,t,n){var i=t-e,r=i*2;return wt(e)?Vf(e,s(0,e.length-1),t):Ci(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Ss=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Mf:zo),n+=e.substr(t,i-t)+Bf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Gf=function(e,t,n,i,r){var a=t-e,o=i-n;return Ci(r,function(l){return n+((l-e)/a*o||0)})},fx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=ct(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(wt(e)&&!wt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var d=Math.min(f,~~_);return u[d](_-d)},n=t}else i||(e=$i(wt(e)?[]:{},e));if(!u){for(l in t)cl.call(o,e,l,"get",t[l]);r=function(_){return dl(_,o)||(a?e.p:e)}}}return Ci(n,r)},_u=function(e,t,n){var i=e.labels,r=sn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},on=function(e,t,n){var i=e.vars,r=i[t],a=it,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Si.length&&va(),o&&(it=o),u=l?r.apply(c,l):r.call(c),it=a,u},cs=function(e){return Ti(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mt),e.progress()<1&&on(e,"onInterrupt"),e},Er,Wf=[],Hf=function(e){if(!il()){Wf.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Je(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:xs,render:dl,add:cl,kill:Ax,modifier:Ex,rawVars:0},a={targetTest:0,get:0,getSetter:hl,aliases:{},register:0};if(Gr(),e!==i){if(Yt[t])return;un(i,un(xa(e,r),a)),$i(i.prototype,$i(r,xa(e,a))),Yt[i.prop=t]=i,e.targetTest&&(ha.push(i),al[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ef(t,i),e.register&&e.register(Gt,i,Vt)},We=255,us={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},So=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*We+.5|0},qf=function(e,t,n){var i=e?ri(e)?[e>>16,e>>8&We,e&We]:0:us.black,r,a,o,l,c,u,h,f,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),us[e])i=us[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&We,i&We,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&We,e&We]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(zo),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=So(l+1/3,r,a),i[1]=So(l,r,a),i[2]=So(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(yf),n&&i.length<4&&(i[3]=1),i}else i=e.match(zo)||us.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/We,a=i[1]/We,o=i[2]/We,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(a-o)/m+(a<o?6:0):h===a?(o-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Xf=function(e){var t=[],n=[],i=-1;return e.split(yi).forEach(function(r){var a=r.match(Tr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},vu=function(e,t,n){var i="",r=(e+i).match(yi),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=qf(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Xf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(yi,"1").split(Tr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(yi),h=c.length-1;o<h;o++)i+=c[o]+r[o];return i+c[h]},yi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in us)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),hx=/hsl[a]?\(/,Yf=function(e){var t=e.join(" "),n;if(yi.lastIndex=0,yi.test(t))return n=hx.test(t),e[1]=vu(e[1],n),e[0]=vu(e[0],n,Xf(e[1])),!0},ys,Kt=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,h,f,m,_=function d(p){var g=s()-i,v=p===!0,b,S,M,w;if(g>e&&(n+=g-t),i+=g,M=i-n,b=M-a,(b>0||v)&&(w=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,a+=b+(b>=r?4:r-b),S=1),v||(l=c(d)),S)for(m=0;m<o.length;m++)o[m](M,f,w,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){wf&&(!Uo&&il()&&(en=Uo=window,rl=en.document||{},Jt.gsap=Gt,(en.gsapVersions||(en.gsapVersions=[])).push(Gt.version),Tf(ga||en.GreenSockGlobals||!en.gsap&&en||{}),u=en.requestAnimationFrame,Wf.forEach(Hf)),l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},ys=1,_(2))},sleep:function(){(u?en.cancelAnimationFrame:clearTimeout)(l),ys=0,c=xs},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,g,v){var b=g?function(S,M,w,y){p(S,M,w,y),h.remove(b)}:p;return h.remove(p),o[v?"unshift":"push"](b),Gr(),b},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&m>=g&&m--},_listeners:o},h}(),Gr=function(){return!ys&&Kt.wake()},Pe={},dx=/^[\d.\-M][\d.\-,\s]/,px=/["']/g,mx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(px,"").trim():+c,i=l.substr(o+1).trim();return t},gx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},_x=function(e){var t=(e+"").split("("),n=Pe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[mx(t[1])]:gx(e).split(",").map(Rf)):Pe._CE&&dx.test(e)?Pe._CE("",e):n},jf=function(e){return function(t){return 1-e(1-t)}},Kf=function s(e,t){for(var n=e._first,i;n;)n instanceof Ot?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ki=function(e,t){return e&&(Je(e)?e:Pe[e]||_x(e))||t},rr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Bt(e,function(o){Pe[o]=Jt[o]=r,Pe[a=o.toLowerCase()]=n;for(var l in r)Pe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Pe[o+"."+l]=r[l]}),r},Zf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/No*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*qv((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Zf(o);return r=No/r,l.config=function(c,u){return s(e,c,u)},l},bo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Zf(n);return i.config=function(r){return s(e,r)},i};Bt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;rr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Pe.Linear.easeNone=Pe.none=Pe.Linear.easeIn;rr("Elastic",yo("in"),yo("out"),yo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};rr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);rr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});rr("Circ",function(s){return-(xf(1-s*s)-1)});rr("Sine",function(s){return s===1?1:-Hv(s*Gv)+1});rr("Back",bo("in"),bo("out"),bo());Pe.SteppedEase=Pe.steps=Jt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-He;return function(o){return((i*Ns(0,a,o)|0)+r)*n}}};kr.ease=Pe["quad.out"];Bt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ol+=s+","+s+"Params,"});var Jf=function(e,t){this.id=Wv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Cf,this.set=t?t.getSetter:hl},Wr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vr(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),ys||Kt.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Vr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Gr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,n),!r._dp||r.parent||If(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===He||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+mu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+mu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Br(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-He?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Sa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-He?0:this._rts,this.totalTime(Ns(-Math.abs(this._delay),this._tDur,i),!0),Pa(this),Qv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Gr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==He&&(this._tTime-=He)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Fn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(kt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=jv);var i=Mt;return Mt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime($t(this,n),kt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,kt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-He:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-He,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-He)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=Je(n)?n:Df,o=function(){var c=i.then;i.then=null,Je(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){cs(this)},s}();un(Wr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-He,_prom:0,_ps:!1,_rts:1});var Ot=function(s){vf(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=kt(n.sortChildren),Xe&&Fn(n.parent||Xe,Qn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ff(Qn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return hs(0,arguments,this),this},t.from=function(i,r,a){return hs(1,arguments,this),this},t.fromTo=function(i,r,a,o){return hs(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,fs(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new st(i,r,$t(this,a),1),this},t.call=function(i,r,a){return Fn(this,st.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new st(i,a,$t(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,fs(a).immediateRender=kt(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,h){return o.startAt=a,fs(o).immediateRender=kt(o.immediateRender),this.staggerTo(i,r,o,l,c,u,h)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,_,d,p,g,v,b,S,M,w,y;if(this!==Xe&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,S=this._start,b=this._ts,g=!b,h&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=ft(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),M=Br(this._tTime,p),!o&&this._tTime&&M!==d&&this._tTime-M*p-this._dur<=0&&(M=d),w&&d&1&&(f=c-f,y=1),d!==M&&!this._lock){var x=w&&M&1,T=x===(w&&d&1);if(d<M&&(x=!x),o=x?0:c,this._lock=1,this.render(o||(y?0:ft(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;Kf(this,y)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=nx(this,ft(o),ft(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!r&&!d&&(on(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||f>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!g){v=0,_&&(u+=this._zTime=-He);break}}m=_}else{m=this._last;for(var O=i<0?i:f;m;){if(_=m._prev,(m._act||O<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(O-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(O-m._start)*m._ts,r,a||Mt&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!g){v=0,_&&(u+=this._zTime=O?-He:He);break}}m=_}}if(v&&!r&&(this.pause(),v.render(f>=o?0:-He)._zTime=f>=o?1:-1,this._ts))return this._start=S,Pa(this),this.render(i,r,a);this._onUpdate&&!r&&on(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ti(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(on(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(ri(r)||(r=$t(this,r,i)),!(i instanceof Wr)){if(wt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(ct(i))return this.addLabel(i,r);if(Je(i))i=st.delayedCall(0,i);else return this}return this!==i?Fn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof st?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return ct(i)?this.removeLabel(i):Je(i)?this.killTweensOf(i):(Da(this,i),i===this._recent&&(this._recent=this._last),ji(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Kt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=$t(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=st.delayedCall(0,r||xs,a);return o.data="isPause",this._hasPause=1,Fn(this,o,$t(this,i))},t.removePause=function(i){var r=this._first;for(i=$t(this,i);r;)r._start===i&&r.data==="isPause"&&Ti(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)pi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=an(i),l=this._first,c=ri(r),u;l;)l instanceof st?Kv(l._targets,o)&&(c?(!pi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=$t(a,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,_=st.to(a,un({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||He,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Vr(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,un({startAt:{time:$t(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),_u(this,$t(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),_u(this,$t(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+He)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ji(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ji(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=sn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Fn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;Vr(a,a===Xe&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Xe._ts&&(Lf(Xe,Sa(i,Xe)),Af=Kt.frame),Kt.frame>=du){du+=Zt.autoSleep||120;var r=Xe._first;if((!r||!r._ts)&&Zt.autoSleep&&Kt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Kt.sleep()}}},e}(Wr);un(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var vx=function(e,t,n,i,r,a,o){var l=new Vt(this._pt,e,t,0,1,ih,null,r),c=0,u=0,h,f,m,_,d,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ss(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),f=n.match(vo)||[];h=vo.exec(i);)_=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:_.charAt(1)==="="?Rr(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=vo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(bf.test(i)||g)&&(l.e=0),this._pt=l,l},cl=function(e,t,n,i,r,a,o,l,c,u){Je(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Je(h)?c?e[t.indexOf("set")||!Je(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=Je(h)?c?Mx:th:fl,_;if(ct(i)&&(~i.indexOf("random(")&&(i=Ss(i)),i.charAt(1)==="="&&(_=Rr(f,i)+(bt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||qo)return!isNaN(f*i)&&i!==""?(_=new Vt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Tx:nh,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&sl(t,i),vx.call(this,e,t,f,i,m,l||Zt.stringFilter,c))},xx=function(e,t,n,i,r){if(Je(e)&&(e=ds(e,r,t,n,i)),!Gn(e)||e.style&&e.nodeType||wt(e)||Sf(e))return ct(e)?ds(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=ds(e[o],r,t,n,i);return a},Qf=function(e,t,n,i,r,a){var o,l,c,u;if(Yt[e]&&(o=new Yt[e]).init(r,o.rawVars?t[e]:xx(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Vt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==Er))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},pi,qo,ul=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,_=i.keyframes,d=i.autoRevert,p=e._dur,g=e._startAt,v=e._targets,b=e.parent,S=b&&b.data==="nested"?b.vars.targets:v,M=e._overwrite==="auto"&&!tl,w=e.timeline,y,x,T,O,I,Y,j,F,k,L,R,D,N;if(w&&(!_||!r)&&(r="none"),e._ease=Ki(r,kr.ease),e._yEase=m?jf(Ki(m===!0?r:m,kr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!w&&!!i.runBackwards,!w||_&&!i.stagger){if(F=v[0]?Yi(v[0]).harness:0,D=F&&i[F.prop],y=xa(i,al),g&&(g._zTime<0&&g.progress(1),t<0&&f&&o&&!d?g.render(-1,!0):g.revert(f&&p?fa:Yv),g._lazy=0),a){if(Ti(e._startAt=st.set(v,un({data:"isStart",overwrite:!1,parent:b,immediateRender:!0,lazy:!g&&kt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mt||!o&&!d)&&e._startAt.revert(fa),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!g){if(t&&(o=!1),T=un({overwrite:!1,data:"isFromStart",lazy:o&&!g&&kt(l),immediateRender:o,stagger:0,parent:b},y),D&&(T[F.prop]=D),Ti(e._startAt=st.set(v,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mt?e._startAt.revert(fa):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,He,He);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&kt(l)||l&&!p,x=0;x<v.length;x++){if(I=v[x],j=I._gsap||ll(v)[x]._gsap,e._ptLookup[x]=L={},ko[j.id]&&Si.length&&va(),R=S===v?x:S.indexOf(I),F&&(k=new F).init(I,D||y,e,R,S)!==!1&&(e._pt=O=new Vt(e._pt,I,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(V){L[V]=O}),k.priority&&(Y=1)),!F||D)for(T in y)Yt[T]&&(k=Qf(T,y,e,R,I,S))?k.priority&&(Y=1):L[T]=O=cl.call(e,I,T,"get",y[T],R,S,0,i.stringFilter);e._op&&e._op[x]&&e.kill(I,e._op[x]),M&&e._pt&&(pi=e,Xe.killTweensOf(I,L,e.globalTime(t)),N=!e.parent,pi=0),e._pt&&l&&(ko[j.id]=1)}Y&&rh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,_&&t<=0&&w.render(sn,!0,!0)},Sx=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return qo=1,e.vars[t]="+=0",ul(e,o),qo=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=$e(n)+bt(u.e)),u.b&&(u.b=c.s+bt(u.b))},yx=function(e,t){var n=e[0]?Yi(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=$i({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},bx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(wt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ds=function(e,t,n,i,r){return Je(e)?e.call(t,n,i,r):ct(e)&&~e.indexOf("random(")?Ss(e):e},$f=ol+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",eh={};Bt($f+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return eh[s]=1});var st=function(s){vf(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:fs(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,_=l.keyframes,d=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,v=i.parent||Xe,b=(wt(n)||Sf(n)?ri(n[0]):"length"in i)?[n]:an(n),S,M,w,y,x,T,O,I;if(o._targets=b.length?ll(b):_a("GSAP target "+n+" not found. https://greensock.com",!Zt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||f||aa(c)||aa(u)){if(i=o.vars,S=o.timeline=new Ot({data:"nested",defaults:d||{},targets:v&&v.data==="nested"?v.vars.targets:b}),S.kill(),S.parent=S._dp=Qn(o),S._start=0,f||aa(c)||aa(u)){if(y=b.length,O=f&&Uf(f),Gn(f))for(x in f)~$f.indexOf(x)&&(I||(I={}),I[x]=f[x]);for(M=0;M<y;M++)w=xa(i,eh),w.stagger=0,g&&(w.yoyoEase=g),I&&$i(w,I),T=b[M],w.duration=+ds(c,Qn(o),M,T,b),w.delay=(+ds(u,Qn(o),M,T,b)||0)-o._delay,!f&&y===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(T,w,O?O(M,T,b):0),S._ease=Pe.none;S.duration()?c=u=0:o.timeline=0}else if(_){fs(un(S.vars.defaults,{ease:"none"})),S._ease=Ki(_.ease||i.ease||"none");var Y=0,j,F,k;if(wt(_))_.forEach(function(L){return S.to(b,L,">")}),S.duration();else{w={};for(x in _)x==="ease"||x==="easeEach"||bx(x,_[x],w,_.easeEach);for(x in w)for(j=w[x].sort(function(L,R){return L.t-R.t}),Y=0,M=0;M<j.length;M++)F=j[M],k={ease:F.e,duration:(F.t-(M?j[M-1].t:0))/100*c},k[x]=F.v,S.to(b,k,Y),Y+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return m===!0&&!tl&&(pi=Qn(o),Xe.killTweensOf(b),pi=0),Fn(v,Qn(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===ft(v._time)&&kt(h)&&$v(Qn(o))&&v.data!=="nested")&&(o._tTime=-He,o.render(Math.max(0,-u)||0)),p&&Ff(Qn(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-He&&!u?l:i<He?0:i,f,m,_,d,p,g,v,b,S;if(!c)tx(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,b=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=ft(h%d),h===l?(_=this._repeat,f=c):(_=~~(h/d),_&&_===h/d&&(f=c,_--),f>c&&(f=c)),g=this._yoyo&&_&1,g&&(S=this._yEase,f=c-f),p=Br(this._tTime,d),f===o&&!a&&this._initted)return this._tTime=h,this;_!==p&&(b&&this._yEase&&Kf(b,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(ft(d*_),!0).invalidate()._lock=0))}if(!this._initted){if(Of(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!o&&!r&&!_&&(on(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;b&&b.render(i<0?i:!f&&g?-He:b._dur*b._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Bo(this,i,r,a),on(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&on(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Bo(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ti(this,1),!r&&!(u&&!o)&&(h||o||g)&&(on(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){ys||Kt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ul(this,l),c=this._ease(l/this._dur),Sx(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Ia(this,0),this.parent||Pf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?cs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,pi&&pi.vars.overwrite!==!0)._first||cs(this),this.parent&&a!==this.timeline.totalDuration()&&Vr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?an(i):o,c=this._ptLookup,u=this._pt,h,f,m,_,d,p,g;if((!r||r==="all")&&Jv(o,l))return r==="all"&&(this._pt=0),cs(this);for(h=this._op=this._op||[],r!=="all"&&(ct(r)&&(d={},Bt(r,function(v){return d[v]=1}),r=d),r=yx(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){f=c[g],r==="all"?(h[g]=r,_=f,m={}):(m=h[g]=h[g]||{},_=r);for(d in _)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Da(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&cs(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return hs(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return hs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Xe.killTweensOf(i,r,a)},e}(Wr);un(st.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bt("staggerTo,staggerFrom,staggerFromTo",function(s){st[s]=function(){var e=new Ot,t=Go.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var fl=function(e,t,n){return e[t]=n},th=function(e,t,n){return e[t](n)},Mx=function(e,t,n,i){return e[t](i.fp,n)},wx=function(e,t,n){return e.setAttribute(t,n)},hl=function(e,t){return Je(e[t])?th:nl(e[t])&&e.setAttribute?wx:fl},nh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Tx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ih=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},dl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ex=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Ax=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Da(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Cx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rh=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Vt=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||nh,this.d=l||this,this.set=c||fl,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Cx,this.m=n,this.mt=r,this.tween=i},s}();Bt(ol+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return al[s]=1});Jt.TweenMax=Jt.TweenLite=st;Jt.TimelineLite=Jt.TimelineMax=Ot;Xe=new Ot({sortChildren:!1,defaults:kr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Zt.stringFilter=Yf;var Hr=[],da={},Lx=[],xu=0,Mo=function(e){return(da[e]||Lx).map(function(t){return t()})},Xo=function(){var e=Date.now(),t=[];e-xu>2&&(Mo("matchMediaInit"),Hr.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=en.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Mo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),xu=e,Mo("matchMedia"))},sh=function(){function s(t,n){this.selector=n&&Wo(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Je(n)&&(r=i,i=n,n=Je);var a=this,o=function(){var c=it,u=a.selector,h;return c&&c!==a&&c.data.push(a),r&&(a.selector=Wo(r)),it=a,h=i.apply(a,arguments),Je(h)&&a._r.push(h),it=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Je?o(a):n?a[n]=o:o},e.ignore=function(n){var i=it;it=null,n(this),it=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof st&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Wr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=Hr.indexOf(this);~o&&Hr.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),Rx=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Gn(n)||(n={matches:n});var a=new sh(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=en.matchMedia(n[c]),l&&(Hr.indexOf(a)<0&&Hr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Xo):l.addEventListener("change",Xo)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Hf(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return Xe.getTweensOf(e,t)},getProperty:function(e,t,n,i){ct(e)&&(e=an(e)[0]);var r=Yi(e||{}).get,a=n?Df:Rf;return n==="native"&&(n=""),e&&(t?a((Yt[t]&&Yt[t].get||r)(e,t,n,i)):function(o,l,c){return a((Yt[o]&&Yt[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=an(e),e.length>1){var i=e.map(function(u){return Gt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Yt[t],o=Yi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Er._pt=0,h.init(e,n?u+n:u,Er,0,[e]),h.render(1,h),Er._pt&&dl(1,Er)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Gt.to(e,$i((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Xe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ki(e.ease,kr.ease)),pu(kr,e||{})},config:function(e){return pu(Zt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yt[o]&&!Jt[o]&&_a(t+" effect requires "+o+" plugin.")}),xo[t]=function(o,l,c){return n(an(o),un(l||{},r),c)},a&&(Ot.prototype[t]=function(o,l,c){return this.add(xo[t](o,Gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Pe[e]=Ki(t)},parseEase:function(e,t){return arguments.length?Ki(e,t):Pe},getById:function(e){return Xe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ot(e),i,r;for(n.smoothChildTiming=kt(e.smoothChildTiming),Xe.remove(n),n._dp=0,n._time=n._tTime=Xe._time,i=Xe._first;i;)r=i._next,(t||!(!i._dur&&i instanceof st&&i.vars.onComplete===i._targets[0]))&&Fn(n,i,i._start-i._delay),i=r;return Fn(Xe,n,0),n},context:function(e,t){return e?new sh(e,t):it},matchMedia:function(e){return new Rx(e)},matchMediaRefresh:function(){return Hr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xo()},addEventListener:function(e,t){var n=da[e]||(da[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=da[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:cx,wrapYoyo:ux,distribute:Uf,random:Bf,snap:kf,normalize:lx,getUnit:bt,clamp:rx,splitColor:qf,toArray:an,selector:Wo,mapRange:Gf,pipe:ax,unitize:ox,interpolate:fx,shuffle:zf},install:Tf,effects:xo,ticker:Kt,updateRoot:Ot.updateRoot,plugins:Yt,globalTimeline:Xe,core:{PropTween:Vt,globals:Ef,Tween:st,Timeline:Ot,Animation:Wr,getCache:Yi,_removeLinkedListItem:Da,reverting:function(){return Mt},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return tl=e}}};Bt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ya[s]=st[s]});Kt.add(Ot.updateRoot);Er=ya.to({},{duration:0});var Dx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Px=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Dx(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},wo=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(ct(r)&&(l={},Bt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Px(o,r)}}}},Gt=ya.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Mt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},wo("roundProps",Ho),wo("modifiers"),wo("snap",kf))||ya;st.version=Ot.version=Gt.version="3.11.5";wf=1;il()&&Gr();Pe.Power0;Pe.Power1;Pe.Power2;Pe.Power3;Pe.Power4;Pe.Linear;Pe.Quad;Pe.Cubic;Pe.Quart;Pe.Quint;Pe.Strong;Pe.Elastic;Pe.Back;Pe.SteppedEase;Pe.Bounce;Pe.Sine;Pe.Expo;Pe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Su,mi,Dr,pl,Gi,yu,ml,Ix=function(){return typeof window<"u"},si={},zi=180/Math.PI,Pr=Math.PI/180,br=Math.atan2,bu=1e8,gl=/([A-Z])/g,Fx=/(left|right|width|margin|padding|x)/i,Ox=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ux=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},ah=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},oh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kx=function(e,t,n){return e.style[t]=n},Bx=function(e,t,n){return e.style.setProperty(t,n)},Vx=function(e,t,n){return e._gsap[t]=n},Gx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Wx=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},Hx=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ye="transform",yn=Ye+"Origin",qx=function s(e,t){var n=this,i=this.target,r=i.style;if(e in si){if(this.tfm=this.tfm||{},e!=="transform")e=Nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ei(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ei(i,e);else return Nn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ye)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yn,t,"")),e=Ye}(r||t)&&this.props.push(e,t,r[e])},lh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(gl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ml(),(!r||!r.isStart)&&!n[Ye]&&(lh(n),i.uncache=1)}},ch=function(e,t){var n={target:e,props:[],revert:Xx,save:qx};return e._gsap||Gt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},uh,jo=function(e,t){var n=mi.createElementNS?mi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):mi.createElement(e);return n.style?n:mi.createElement(e)},kn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,qr(t)||t,1)||""},Mu="O,Moz,ms,Ms,Webkit".split(","),qr=function(e,t,n){var i=t||Gi,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Mu[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Mu[a]:"")+e},Ko=function(){Ix()&&window.document&&(Su=window,mi=Su.document,Dr=mi.documentElement,Gi=jo("div")||{style:{}},jo("div"),Ye=qr(Ye),yn=Ye+"Origin",Gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",uh=!!qr("perspective"),ml=Gt.core.reverting,pl=1)},To=function s(e){var t=jo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Dr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Dr.removeChild(t),this.style.cssText=r,a},wu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},fh=function(e){var t;try{t=e.getBBox()}catch{t=To.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===To||(t=To.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+wu(e,["x","cx","x1"])||0,y:+wu(e,["y","cy","y1"])||0,width:0,height:0}:t},hh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fh(e))},bs=function(e,t){if(t){var n=e.style;t in si&&t!==yn&&(t=Ye),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(gl,"-$1").toLowerCase())):n.removeAttribute(t)}},gi=function(e,t,n,i,r,a){var o=new Vt(e._pt,t,n,0,1,a?oh:ah);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Tu={deg:1,rad:1,turn:1},Yx={grid:1,flex:1},Ei=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Gi.style,l=Fx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",_,d,p,g;return i===a||!r||Tu[i]||Tu[a]?r:(a!=="px"&&!f&&(r=s(e,t,n,"px")),g=e.getCTM&&hh(e),(m||a==="%")&&(si[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],$e(m?r/_*h:r/100*_)):(o[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===mi||!d.appendChild)&&(d=mi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Kt.time&&!p.uncache?$e(r/p.width*h):((m||a==="%")&&!Yx[kn(d,"display")]&&(o.position=kn(e,"position")),d===e&&(o.position="static"),d.appendChild(Gi),_=Gi[u],d.removeChild(Gi),o.position="absolute",l&&m&&(p=Yi(d),p.time=Kt.time,p.width=d[u]),$e(f?_*r/h:_&&r?h/_*r:0))))},ei=function(e,t,n,i){var r;return pl||Ko(),t in Nn&&t!=="transform"&&(t=Nn[t],~t.indexOf(",")&&(t=t.split(",")[0])),si[t]&&t!=="transform"?(r=ws(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ma(kn(e,yn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ba[t]&&ba[t](e,t,n)||kn(e,t)||Cf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ei(e,t,r,n)+n:r},jx=function(e,t,n,i){if(!n||n==="none"){var r=qr(t,e,1),a=r&&kn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=kn(e,"borderTopColor"))}var o=new Vt(this._pt,e.style,t,0,1,ih),l=0,c=0,u,h,f,m,_,d,p,g,v,b,S,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=kn(e,t)||i,e.style[t]=n),u=[n,i],Yf(u),n=u[0],i=u[1],f=n.match(Tr)||[],M=i.match(Tr)||[],M.length){for(;h=Tr.exec(i);)p=h[0],v=i.substring(l,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,S=d.substr((m+"").length),p.charAt(1)==="="&&(p=Rr(m,p)+S),g=parseFloat(p),b=p.substr((g+"").length),l=Tr.lastIndex-b.length,b||(b=b||Zt.units[t]||S,l===i.length&&(i+=b,o.e+=b)),S!==b&&(m=Ei(e,t,d,b)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?oh:ah;return bf.test(i)&&(o.e=0),this._pt=o,o},Eu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Eu[n]||n,t[1]=Eu[i]||i,t.join(" ")},Zx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],si[o]&&(l=1,o=o==="transformOrigin"?yn:Ye),bs(n,o);l&&(bs(n,Ye),a&&(a.svg&&n.removeAttribute("transform"),ws(n,1),a.uncache=1,lh(i)))}},ba={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Vt(e._pt,t,n,0,0,Zx);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Ms=[1,0,0,1,0,0],dh={},ph=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Au=function(e){var t=kn(e,Ye);return ph(t)?Ms:t.substr(7).match(yf).map($e)},_l=function(e,t){var n=e._gsap||Yi(e),i=e.style,r=Au(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ms:r):(r===Ms&&!e.offsetParent&&e!==Dr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Dr.appendChild(e)),r=Au(e),l?i.display=l:bs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Dr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Zo=function(e,t,n,i,r,a){var o=e._gsap,l=r||_l(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,m=l[0],_=l[1],d=l[2],p=l[3],g=l[4],v=l[5],b=t.split(" "),S=parseFloat(b[0])||0,M=parseFloat(b[1])||0,w,y,x,T;n?l!==Ms&&(y=m*p-_*d)&&(x=S*(p/y)+M*(-d/y)+(d*v-p*g)/y,T=S*(-_/y)+M*(m/y)-(m*v-_*g)/y,S=x,M=T):(w=fh(e),S=w.x+(~b[0].indexOf("%")?S/100*w.width:S),M=w.y+(~(b[1]||b[0]).indexOf("%")?M/100*w.height:M)),i||i!==!1&&o.smooth?(g=S-c,v=M-u,o.xOffset=h+(g*m+v*d)-g,o.yOffset=f+(g*_+v*p)-v):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=M,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[yn]="0px 0px",a&&(gi(a,o,"xOrigin",c,S),gi(a,o,"yOrigin",u,M),gi(a,o,"xOffset",h,o.xOffset),gi(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+M)},ws=function(e,t){var n=e._gsap||new Jf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=kn(e,yn)||"0",u,h,f,m,_,d,p,g,v,b,S,M,w,y,x,T,O,I,Y,j,F,k,L,R,D,N,V,Q,Z,ee,ne,ue;return u=h=f=d=p=g=v=b=S=0,m=_=1,n.svg=!!(e.getCTM&&hh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ye]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ye]!=="none"?l[Ye]:"")),i.scale=i.rotate=i.translate="none"),y=_l(e,n.svg),n.svg&&(n.uncache?(D=e.getBBox(),c=n.xOrigin-D.x+"px "+(n.yOrigin-D.y)+"px",R=""):R=!t&&e.getAttribute("data-svg-origin"),Zo(e,R||c,!!R||n.originIsAbsolute,n.smooth!==!1,y)),M=n.xOrigin||0,w=n.yOrigin||0,y!==Ms&&(I=y[0],Y=y[1],j=y[2],F=y[3],u=k=y[4],h=L=y[5],y.length===6?(m=Math.sqrt(I*I+Y*Y),_=Math.sqrt(F*F+j*j),d=I||Y?br(Y,I)*zi:0,v=j||F?br(j,F)*zi+d:0,v&&(_*=Math.abs(Math.cos(v*Pr))),n.svg&&(u-=M-(M*I+w*j),h-=w-(M*Y+w*F))):(ue=y[6],ee=y[7],V=y[8],Q=y[9],Z=y[10],ne=y[11],u=y[12],h=y[13],f=y[14],x=br(ue,Z),p=x*zi,x&&(T=Math.cos(-x),O=Math.sin(-x),R=k*T+V*O,D=L*T+Q*O,N=ue*T+Z*O,V=k*-O+V*T,Q=L*-O+Q*T,Z=ue*-O+Z*T,ne=ee*-O+ne*T,k=R,L=D,ue=N),x=br(-j,Z),g=x*zi,x&&(T=Math.cos(-x),O=Math.sin(-x),R=I*T-V*O,D=Y*T-Q*O,N=j*T-Z*O,ne=F*O+ne*T,I=R,Y=D,j=N),x=br(Y,I),d=x*zi,x&&(T=Math.cos(x),O=Math.sin(x),R=I*T+Y*O,D=k*T+L*O,Y=Y*T-I*O,L=L*T-k*O,I=R,k=D),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,g=180-g),m=$e(Math.sqrt(I*I+Y*Y+j*j)),_=$e(Math.sqrt(L*L+ue*ue)),x=br(k,L),v=Math.abs(x)>2e-4?x*zi:0,S=ne?1/(ne<0?-ne:ne):0),n.svg&&(R=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!ph(kn(e,Ye)),R&&e.setAttribute("transform",R))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(m*=-1,v+=d<=0?180:-180,d+=d<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=$e(m),n.scaleY=$e(_),n.rotation=$e(d)+o,n.rotationX=$e(p)+o,n.rotationY=$e(g)+o,n.skewX=v+o,n.skewY=b+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[yn]=Ma(c)),n.xOffset=n.yOffset=0,n.force3D=Zt.force3D,n.renderTransform=n.svg?Qx:uh?mh:Jx,n.uncache=0,n},Ma=function(e){return(e=e.split(" "))[0]+" "+e[1]},Eo=function(e,t,n){var i=bt(t);return $e(parseFloat(t)+parseFloat(Ei(e,"x",n+"px",i)))+i},Jx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mh(e,t)},Ii="0deg",as="0px",Fi=") ",mh=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,_=n.scaleX,d=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,b=n.zOrigin,S="",M=g==="auto"&&e&&e!==1||g===!0;if(b&&(h!==Ii||u!==Ii)){var w=parseFloat(u)*Pr,y=Math.sin(w),x=Math.cos(w),T;w=parseFloat(h)*Pr,T=Math.cos(w),a=Eo(v,a,y*T*-b),o=Eo(v,o,-Math.sin(w)*-b),l=Eo(v,l,x*T*-b+b)}p!==as&&(S+="perspective("+p+Fi),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(M||a!==as||o!==as||l!==as)&&(S+=l!==as||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Fi),c!==Ii&&(S+="rotate("+c+Fi),u!==Ii&&(S+="rotateY("+u+Fi),h!==Ii&&(S+="rotateX("+h+Fi),(f!==Ii||m!==Ii)&&(S+="skew("+f+", "+m+Fi),(_!==1||d!==1)&&(S+="scale("+_+", "+d+Fi),v.style[Ye]=S||"translate(0, 0)"},Qx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,_=n.xOrigin,d=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,b=parseFloat(a),S=parseFloat(o),M,w,y,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Pr,c*=Pr,M=Math.cos(l)*h,w=Math.sin(l)*h,y=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Pr,T=Math.tan(c-u),T=Math.sqrt(1+T*T),y*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),M*=T,w*=T)),M=$e(M),w=$e(w),y=$e(y),x=$e(x)):(M=h,x=f,w=y=0),(b&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(b=Ei(m,"x",a,"px"),S=Ei(m,"y",o,"px")),(_||d||p||g)&&(b=$e(b+_-(_*M+d*y)+p),S=$e(S+d-(_*w+d*x)+g)),(i||r)&&(T=m.getBBox(),b=$e(b+i/100*T.width),S=$e(S+r/100*T.height)),T="matrix("+M+","+w+","+y+","+x+","+b+","+S+")",m.setAttribute("transform",T),v&&(m.style[Ye]=T)},$x=function(e,t,n,i,r){var a=360,o=ct(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?zi:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*bu)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*bu)%a-~~(c/a)*a)),e._pt=f=new Vt(e._pt,t,n,i,c,Nx),f.e=u,f.u="deg",e._props.push(n),f},Cu=function(e,t){for(var n in t)e[n]=t[n];return e},eS=function(e,t,n){var i=Cu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ye]=t,o=ws(n,1),bs(n,Ye),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ye],a[Ye]=t,o=ws(n,1),a[Ye]=c);for(l in si)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(m=bt(c),_=bt(u),h=m!==_?Ei(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Vt(e._pt,o,l,h,f-h,Yo),e._pt.u=_||0,e._props.push(l));Cu(o,i)};Bt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ba[e>1?"border"+s:s]=function(o,l,c,u,h){var f,m;if(arguments.length<4)return f=a.map(function(_){return ei(o,_,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(_,d){return m[_]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,m,h)}});var gh={name:"css",register:Ko,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,m,_,d,p,g,v,b,S,M,w,y,x;pl||Ko(),this.styles=this.styles||ch(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Yt[d]&&Qf(d,t,n,i,e,r)))){if(m=typeof u,_=ba[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Ss(u)),_)_(this,e,d,u,n)&&(y=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",yi.lastIndex=0,yi.test(c)||(p=bt(c),g=bt(u)),g?p!==g&&(c=Ei(e,d,c,g)+g):p&&(u+=p),this.add(o,"setProperty",c,u,i,r,0,0,d),a.push(d),x.push(d,0,o[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],ct(c)&&~c.indexOf("random(")&&(c=Ss(c)),bt(c+"")||(c+=Zt.units[d]||bt(ei(e,d))||""),(c+"").charAt(1)==="="&&(c=ei(e,d))):c=ei(e,d),f=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),d in Nn&&(d==="autoAlpha"&&(f===1&&ei(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,o.visibility),gi(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Nn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),b=d in si,b){if(this.styles.save(d),S||(M=e._gsap,M.renderTransform&&!t.parseTransform||ws(e,t.parseTransform),w=t.smoothOrigin!==!1&&M.smooth,S=this._pt=new Vt(this._pt,o,Ye,0,1,M.renderTransform,M,0,-1),S.dep=1),d==="scale")this._pt=new Vt(this._pt,M,"scaleY",M.scaleY,(v?Rr(M.scaleY,v+h):h)-M.scaleY||0,Yo),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(yn,0,o[yn]),u=Kx(u),M.svg?Zo(e,u,0,w,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&gi(this,M,"zOrigin",M.zOrigin,g),gi(this,o,d,Ma(c),Ma(u)));continue}else if(d==="svgOrigin"){Zo(e,u,1,w,0,this);continue}else if(d in dh){$x(this,M,d,f,v?Rr(f,v+u):u);continue}else if(d==="smoothOrigin"){gi(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){eS(this,u,e);continue}}else d in o||(d=qr(d)||d);if(b||(h||h===0)&&(f||f===0)&&!Ox.test(u)&&d in o)p=(c+"").substr((f+"").length),h||(h=0),g=bt(u)||(d in Zt.units?Zt.units[d]:p),p!==g&&(f=Ei(e,d,c,g)),this._pt=new Vt(this._pt,b?M:o,d,f,(v?Rr(f,v+h):h)-f,!b&&(g==="px"||d==="zIndex")&&t.autoRound!==!1?Ux:Yo),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=zx);else if(d in o)jx.call(this,e,d,c,v?v+u:u);else if(d in e)this.add(e,d,c||e[d],v?v+u:u,i,r);else if(d!=="parseTransform"){sl(d,u);continue}b||(d in o?x.push(d,0,o[d]):x.push(d,1,c||e[d])),a.push(d)}}y&&rh(this)},render:function(e,t){if(t.tween._time||!ml())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ei,aliases:Nn,getSetter:function(e,t,n){var i=Nn[t];return i&&i.indexOf(",")<0&&(t=i),t in si&&t!==yn&&(e._gsap.x||ei(e,"x"))?n&&yu===n?t==="scale"?Gx:Vx:(yu=n||{})&&(t==="scale"?Wx:Hx):e.style&&!nl(e.style[t])?kx:~t.indexOf("-")?Bx:hl(e,t)},core:{_removeProperty:bs,_getMatrix:_l}};Gt.utils.checkPrefix=qr;Gt.core.getStyleSaver=ch;(function(s,e,t,n){var i=Bt(s+","+e+","+t,function(r){si[r]=1});Bt(e,function(r){Zt.units[r]="deg",dh[r]=1}),Nn[i[13]]=s+","+e,Bt(n,function(r){var a=r.split(":");Nn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Zt.units[s]="px"});Gt.registerPlugin(gh);var Wi=Gt.registerPlugin(gh)||Gt;Wi.core.Tween;let Ts=!1;const ps=Uu([]),tS=()=>{if(Ts)return;const[s,e]=ku(ps);console.log(s,e),s&&e&&(Ts=!0,Wi.to(s.position,Ar(window.innerHeight,()=>Ta(s))),Wi.to(e.position,Ar(0,wa)))},nS=s=>({mouseMoveEvent:e=>{const t=s.mouseMoveEvent();t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1},wheelEvent:async e=>{if(Ts||!s.wheelEvent(e))return;await Bu();const[n,i]=ku(ps);n&&i&&(Ts=!0,e.deltaY>0?(Wi.to(n.position,Ar(window.innerHeight,()=>Ta(n))),Wi.to(i.position,Ar(0,wa))):(Wi.to(i.position,Ar(0,()=>Ta(n))),Wi.to(n.position,Ar(-window.innerHeight,wa))))},resizeEvent:()=>{const{camera:e,renderer:t}=s.resizeEvent();e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)}});function wa(){Ts=!1}function Ta(s){s.position.set(0,-9999,0)}function Ar(s,e=()=>{}){return{duration:V0,x:0,y:s,z:0,repeat:0,ease:"power2.inOut",onComplete:wa}}const iS=s=>{const e={onLoad:function(){s("success")},onProgress:function(t,n,i){const r=(n/i*100).toFixed(2);s("pending",{value:r,num:n,total:i})},onError:function(t){console.log("图片加载出现错误"),console.log(t),s("fail",t)}};return new pf(e.onLoad,e.onProgress,e.onError)};function Lu(s,e,t){const n=s.slice();return n[20]=e[t],n[22]=t,n}function Ru(s){let e,t,n,i,r,a,o,l,c,u,h;return a=new B0({props:{class:"home_linear-progress",progress:Number(s[3])/100,buffer:Math.min((s[4]+1)/s[5],1)}}),{c(){e=_e("div"),t=_e("div"),n=zt("资源正在加载中"),i=zt(s[2]),r=Oe(),dt(a.$$.fragment),o=Oe(),l=_e("div"),c=zt(s[3]),u=zt("%"),ve(t,"class","loading-text svelte-1xcbzqc"),ve(l,"class","loading-text svelte-1xcbzqc"),ve(e,"class","loading svelte-1xcbzqc")},m(f,m){we(f,e,m),pe(e,t),pe(t,n),pe(t,i),pe(e,r),pt(a,e,null),pe(e,o),pe(e,l),pe(l,c),pe(l,u),h=!0},p(f,m){(!h||m&4)&&Ir(i,f[2]);const _={};m&8&&(_.progress=Number(f[3])/100),m&48&&(_.buffer=Math.min((f[4]+1)/f[5],1)),a.$set(_),(!h||m&8)&&Ir(c,f[3])},i(f){h||(he(a.$$.fragment,f),h=!0)},o(f){ge(a.$$.fragment,f),h=!1},d(f){f&&Te(e),mt(a)}}}function Du(s){let e,t,n;function i(){return s[9](s[22])}return{c(){e=_e("li"),ve(e,"class","anchor-item svelte-1xcbzqc"),ve(e,"role","presentation"),yl(e,"active",s[6]===s[22])},m(r,a){we(r,e,a),t||(n=yt(e,"click",i),t=!0)},p(r,a){s=r,a&64&&yl(e,"active",s[6]===s[22])},d(r){r&&Te(e),t=!1,n()}}}function Pu(s){let e,t,n;return{c(){e=_e("div"),ve(e,"class","tip svelte-1xcbzqc")},m(i,r){we(i,e,r),n=!0},p(i,r){},i(i){n||(Ai(()=>{n&&(t||(t=Tt(e,Et,{duration:gt},!0)),t.run(1))}),n=!0)},o(i){t||(t=Tt(e,Et,{duration:gt},!1)),t.run(0),n=!1},d(i){i&&Te(e),i&&t&&t.end()}}}function Iu(s){let e,t;return e=new H0({}),e.$on("jump",s[7]),{c(){dt(e.$$.fragment)},m(n,i){pt(e,n,i),t=!0},p:bi,i(n){t||(he(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){mt(e,n)}}}function Fu(s){let e,t;return e=new Ev({}),{c(){dt(e.$$.fragment)},m(n,i){pt(e,n,i),t=!0},i(n){t||(he(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){mt(e,n)}}}function Ou(s){let e,t;return e=new Rv({}),{c(){dt(e.$$.fragment)},m(n,i){pt(e,n,i),t=!0},i(n){t||(he(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){mt(e,n)}}}function Nu(s){let e,t;return e=new zv({}),{c(){dt(e.$$.fragment)},m(n,i){pt(e,n,i),t=!0},i(n){t||(he(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){mt(e,n)}}}function zu(s){let e,t;return e=new Bv({}),{c(){dt(e.$$.fragment)},m(n,i){pt(e,n,i),t=!0},i(n){t||(he(e.$$.fragment,n),t=!0)},o(n){ge(e.$$.fragment,n),t=!1},d(n){mt(e,n)}}}function rS(s){let e,t,n,i,r,a,o,l,c,u,h,f,m=s[1]&&Ru(s),_=Oo,d=[];for(let w=0;w<_.length;w+=1)d[w]=Du(Lu(s,_,w));let p=s[6]!==4&&Pu(),g=s[6]===0&&Iu(s),v=s[6]===1&&Fu(),b=s[6]===2&&Ou(),S=s[6]===3&&Nu(),M=s[6]===4&&zu();return{c(){m&&m.c(),e=Oe(),t=_e("div"),n=Oe(),i=_e("ul");for(let w=0;w<d.length;w+=1)d[w].c();r=Oe(),p&&p.c(),a=Oe(),g&&g.c(),o=Oe(),v&&v.c(),l=Oe(),b&&b.c(),c=Oe(),S&&S.c(),u=Oe(),M&&M.c(),h=er(),ve(t,"class","container"),ve(i,"class","anchor svelte-1xcbzqc")},m(w,y){m&&m.m(w,y),we(w,e,y),we(w,t,y),s[8](t),we(w,n,y),we(w,i,y);for(let x=0;x<d.length;x+=1)d[x]&&d[x].m(i,null);we(w,r,y),p&&p.m(w,y),we(w,a,y),g&&g.m(w,y),we(w,o,y),v&&v.m(w,y),we(w,l,y),b&&b.m(w,y),we(w,c,y),S&&S.m(w,y),we(w,u,y),M&&M.m(w,y),we(w,h,y),f=!0},p(w,[y]){if(w[1]?m?(m.p(w,y),y&2&&he(m,1)):(m=Ru(w),m.c(),he(m,1),m.m(e.parentNode,e)):m&&(Lt(),ge(m,1,1,()=>{m=null}),Rt()),y&192){_=Oo;let x;for(x=0;x<_.length;x+=1){const T=Lu(w,_,x);d[x]?d[x].p(T,y):(d[x]=Du(T),d[x].c(),d[x].m(i,null))}for(;x<d.length;x+=1)d[x].d(1);d.length=_.length}w[6]!==4?p?(p.p(w,y),y&64&&he(p,1)):(p=Pu(),p.c(),he(p,1),p.m(a.parentNode,a)):p&&(Lt(),ge(p,1,1,()=>{p=null}),Rt()),w[6]===0?g?(g.p(w,y),y&64&&he(g,1)):(g=Iu(w),g.c(),he(g,1),g.m(o.parentNode,o)):g&&(Lt(),ge(g,1,1,()=>{g=null}),Rt()),w[6]===1?v?y&64&&he(v,1):(v=Fu(),v.c(),he(v,1),v.m(l.parentNode,l)):v&&(Lt(),ge(v,1,1,()=>{v=null}),Rt()),w[6]===2?b?y&64&&he(b,1):(b=Ou(),b.c(),he(b,1),b.m(c.parentNode,c)):b&&(Lt(),ge(b,1,1,()=>{b=null}),Rt()),w[6]===3?S?y&64&&he(S,1):(S=Nu(),S.c(),he(S,1),S.m(u.parentNode,u)):S&&(Lt(),ge(S,1,1,()=>{S=null}),Rt()),w[6]===4?M?y&64&&he(M,1):(M=zu(),M.c(),he(M,1),M.m(h.parentNode,h)):M&&(Lt(),ge(M,1,1,()=>{M=null}),Rt())},i(w){f||(he(m),he(p),he(g),he(v),he(b),he(S),he(M),f=!0)},o(w){ge(m),ge(p),ge(g),ge(v),ge(b),ge(S),ge(M),f=!1},d(w){m&&m.d(w),w&&Te(e),w&&Te(t),s[8](null),w&&Te(n),w&&Te(i),Zr(d,w),w&&Te(r),p&&p.d(w),w&&Te(a),g&&g.d(w),w&&Te(o),v&&v.d(w),w&&Te(l),b&&b.d(w),w&&Te(c),S&&S.d(w),w&&Te(u),M&&M.d(w),w&&Te(h)}}}function sS(s,e,t){let n,i=!0,r="",a="0.00",o,l=0,c=1,u=0;const h=new D0,f=new of(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,1,1e3);f.aspect=window.innerWidth/window.innerHeight,f.position.set(0,0,5),h.add(f);const m=new df({antialias:!0});m.setSize(window.innerWidth,window.innerHeight);const _=new Ve,d=iS((y,x)=>{switch(y){case"pending":t(3,a=x.value),t(5,c=x.total),t(4,l=x.num);break;case"fail":alert("加载失败，请稍后重试~~");break}}),p=new F0(d),v=Oo.map(y=>{const{bg:x,depth:T}=y;return{page:p.load(x),depth:p.load(T)}}).map((y,x)=>{const{page:T,depth:O}=y,I=new La(window.innerWidth,window.innerHeight),Y=Vv(T,O,_),j=new ni(I,Y);return h.add(j),x!==u&&Ta(j),j});requestAnimationFrame(function y(){const x=v[u].material;x.uniforms.uMouse.value=_,x.uniforms.uTime.value=performance.now()/1e3,m.render(h,f),requestAnimationFrame(y)});const b=nS({mouseMoveEvent:()=>_,resizeEvent:()=>({camera:f,renderer:m}),wheelEvent:y=>{if(i)return!1;const x=v.length-1;if(y.deltaY>0){if(u===x)return!1;const T=v[u],O=v[u+1];O.position.set(0,-window.innerHeight,0),ps.set([T,O]),t(6,u++,u)}else{if(u===0)return!1;v[u],v[u-1].position.set(0,window.innerHeight,0),ps.set([v[u],v[u-1]]),t(6,u--,u)}return _i.set(u),!0}}),S=async y=>{if(y===u)return;_i.set(y),wn.set(!1),await Bu();const x=v[u],T=v[y.detail];T.position.set(0,-window.innerHeight,0),ps.set([x,T]),t(6,u=y.detail),tS()};An(()=>{_i.set(u),n.appendChild(m.domElement),window.addEventListener("mousemove",b.mouseMoveEvent),window.addEventListener("wheel",b.wheelEvent),window.addEventListener("resize",b.resizeEvent),o=setInterval(()=>{Math.floor(Number(a))===100&&setTimeout(()=>{t(1,i=!1),clearInterval(o)},150),r.length===3?t(2,r="."):t(2,r+=".")},300)}),Lh(()=>{window.removeEventListener("mousemove",b.mouseMoveEvent),window.removeEventListener("wheel",b.wheelEvent),window.removeEventListener("resize",b.resizeEvent),clearInterval(o)});function M(y){Nt[y?"unshift":"push"](()=>{n=y,t(0,n)})}return[n,i,r,a,l,c,u,S,M,y=>{S({detail:y})}]}class fS extends Tn{constructor(e){super(),En(this,e,sS,rS,fn,{})}}export{fS as default};
