import{S as kt,i as Bt,s as Ot,a as Oe,e as ge,b as Ie,c as _e,d as et,f as xe,g as pe,h as ct,l as Ye,j as Lt,k as Xt,n as Ri,m as Se,r as Fi,o as ht,p as di,q as $i,t as yt,u as vn,v as hi,w as fa,x as ft,y as xs,z as Ni,A as Pt,B as It,C as Rd,D as Ei,E as xn,F as Sn,G as bn,H as yn,I as le,J as he,K as wl,L as pt,M as fr,N as mt,O as Hr,P as xt,Q as gt,R as St,T as er,U as Dd,V as Pd,W as Id,X as Od,Y as rs,Z as Ht,_ as qr,$ as Fd,a0 as Nd,a1 as Yu,a2 as ju,a3 as zd,a4 as Tl}from"./index-90683f8a.js";import{_ as Kn,a as Ud,M as Os,b as Yn,c as Ge,u as Dn,f as pi,R as Lo,d as un,S as El,e as kd,p as Bd,g as el}from"./classAdderBuilder-a356cc47.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="142",Vd=0,Al=1,Gd=2,Ku=1,Wd=2,ms=3,ws=0,Pn=1,Xr=2,Hd=1,Ai=0,kr=1,Cl=2,Ll=3,Rl=4,qd=5,Or=100,Xd=101,Yd=102,Dl=103,Pl=104,jd=200,Kd=201,Zd=202,Jd=203,Zu=204,Ju=205,Qd=206,$d=207,eh=208,th=209,nh=210,ih=0,rh=1,sh=2,Ro=3,ah=4,oh=5,lh=6,ch=7,Qu=0,uh=1,fh=2,ci=0,dh=1,hh=2,ph=3,mh=4,gh=5,$u=300,Yr=301,jr=302,Do=303,Po=304,Ca=306,Io=1e3,Ln=1001,Oo=1002,Gt=1003,Il=1004,Ol=1005,fn=1006,_h=1007,La=1008,or=1009,vh=1010,xh=1011,ef=1012,Sh=1013,ji=1014,Ki=1015,Ts=1016,bh=1017,yh=1018,Br=1020,Mh=1021,wh=1022,Wn=1023,Th=1024,Eh=1025,tr=1026,Kr=1027,Ah=1028,Ch=1029,Lh=1030,Rh=1031,Dh=1033,ka=33776,Ba=33777,Va=33778,Ga=33779,Fl=35840,Nl=35841,zl=35842,Ul=35843,Ph=36196,kl=37492,Bl=37496,Vl=37808,Gl=37809,Wl=37810,Hl=37811,ql=37812,Xl=37813,Yl=37814,jl=37815,Kl=37816,Zl=37817,Jl=37818,Ql=37819,$l=37820,ec=37821,tc=36492,lr=3e3,$e=3001,Ih=3200,Oh=3201,Fh=0,Nh=1,ii="srgb",Zi="srgb-linear",Wa=7680,zh=519,nc=35044,ic="300 es",Fo=1035;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,rc=180/Math.PI;function Fs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[s&255]+Et[s>>8&255]+Et[s>>16&255]+Et[s>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function nn(s,e,t){return Math.max(e,Math.min(t,s))}function Uh(s,e){return(s%e+e)%e}function qa(s,e,t){return(1-t)*s+t*e}function sc(s){return(s&s-1)===0&&s!==0}function No(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dn{constructor(){dn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],_=n[8],p=i[0],h=i[3],g=i[6],v=i[1],y=i[4],b=i[7],w=i[2],M=i[5],S=i[8];return r[0]=a*p+o*v+l*w,r[3]=a*h+o*y+l*M,r[6]=a*g+o*b+l*S,r[1]=c*p+u*v+f*w,r[4]=c*h+u*y+f*M,r[7]=c*g+u*b+f*S,r[2]=d*p+m*v+_*w,r[5]=d*h+m*y+_*M,r[8]=d*g+m*b+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,m=c*r-a*l,_=t*f+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*r-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],a=i[3],o=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*a+n*c,i[6]=t*o+n*u,i[1]=-n*r+t*l,i[4]=-n*a+t*c,i[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function tf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function Es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function da(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Xa={[ii]:{[Zi]:nr},[Zi]:{[ii]:da}},Mn={legacyMode:!0,get workingColorSpace(){return Zi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Xa[e]&&Xa[e][t]!==void 0){const n=Xa[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},wn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function Ya(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Ws(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Zi){return this.r=e,this.g=t,this.b=n,Mn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Zi){if(e=Uh(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ya(a,r,e+1/3),this.g=Ya(a,r,e),this.b=Ya(a,r,e-1/3)}return Mn.toWorkingColorSpace(this,i),this}setStyle(e,t=ii){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Mn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Mn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Mn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Mn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=ii){const n=nf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Mn.fromWorkingColorSpace(Ws(this,ot),e),nn(ot.r*255,0,255)<<16^nn(ot.g*255,0,255)<<8^nn(ot.b*255,0,255)<<0}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zi){Mn.fromWorkingColorSpace(Ws(this,ot),t);const n=ot.r,i=ot.g,r=ot.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Zi){return Mn.fromWorkingColorSpace(Ws(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=ii){return Mn.fromWorkingColorSpace(Ws(this,ot),e),e!==ii?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=n,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Gs);const n=qa(wn.h,Gs.h,t),i=qa(wn.s,Gs.s,t),r=qa(wn.l,Gs.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}je.NAMES=nf;let xr;class rf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=Es("canvas")),xr.width=e.width,xr.height=e.height;const n=xr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=nr(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(nr(t[n]/255)*255):t[n]=nr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class sf{constructor(e=null){this.isSource=!0,this.uuid=Fs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ja(i[a].image)):r.push(ja(i[a]))}else r=ja(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?rf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;class gn extends ss{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=Ln,i=Ln,r=fn,a=La,o=Wn,l=or,c=1,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Fs(),this.name="",this.source=new sf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$u)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Io:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Oo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Io:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Oo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=$u;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],_=l[9],p=l[2],h=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+p)<.1&&Math.abs(_+h)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(m+1)/2,w=(g+1)/2,M=(u+d)/4,S=(f+p)/4,x=(_+h)/4;return y>b&&y>w?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=M/n,r=S/n):b>w?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=M/i,r=x/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=S/r,i=x/r),this.set(n,i,r,t),this}let v=Math.sqrt((h-_)*(h-_)+(f-p)*(f-p)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(h-_)/v,this.y=(f-p)/v,this.z=(d-u)/v,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cr extends ss{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class af extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bh extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=r[a+0],m=r[a+1],_=r[a+2],p=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==d||c!==m||u!==_){let h=1-o;const g=l*d+c*m+u*_+f*p,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const w=Math.sqrt(y),M=Math.atan2(w,g*v);h=Math.sin(h*M)/w,o=Math.sin(o*M)/w}const b=o*v;if(l=l*h+d*b,c=c*h+m*b,u=u*h+_*b,f=f*h+p*b,h===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*m-c*d,e[t+1]=l*_+u*d+c*f-o*m,e[t+2]=c*_+u*m+o*d-l*f,e[t+3]=u*_-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(r/2),d=l(n/2),m=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"YXZ":this._x=d*u*f+c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"ZXY":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f-d*m*_;break;case"ZYX":this._x=d*u*f-c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f+d*m*_;break;case"YZX":this._x=d*u*f+c*m*_,this._y=c*m*f+d*u*_,this._z=c*u*_-d*m*f,this._w=c*u*f-d*m*_;break;case"XZY":this._x=d*u*f-c*m*_,this._y=c*m*f-d*u*_,this._z=c*u*_+d*m*f,this._w=c*u*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ac.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ac.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-r*i,f=l*i+r*n-a*t,d=-r*t-a*n-o*i;return this.x=c*l+d*-r+u*-o-f*-a,this.y=u*l+d*-a+f*-r-c*-o,this.z=f*l+d*-o+c*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new k,ac=new Ns;class zs{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>r&&(r=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<i&&(i=d),u>r&&(r=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,i),this.max.set(r,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,o=r.count;a<o;a++)ki.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox),Za.applyMatrix4(e.matrixWorld),this.union(Za);const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),Hs.subVectors(this.max,cs),Sr.subVectors(e.a,cs),br.subVectors(e.b,cs),yr.subVectors(e.c,cs),gi.subVectors(br,Sr),_i.subVectors(yr,br),Bi.subVectors(Sr,yr);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Bi.z,Bi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Bi.z,0,-Bi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Bi.y,Bi.x,0];return!Ja(t,Sr,br,yr,Hs)||(t=[1,0,0,0,1,0,0,0,1],!Ja(t,Sr,br,yr,Hs))?!1:(qs.crossVectors(gi,_i),t=[qs.x,qs.y,qs.z],Ja(t,Sr,br,yr,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ki.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new k,new k,new k,new k,new k,new k,new k,new k],ki=new k,Za=new zs,Sr=new k,br=new k,yr=new k,gi=new k,_i=new k,Bi=new k,cs=new k,Hs=new k,qs=new k,Vi=new k;function Ja(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Vi.fromArray(s,r);const o=i.x*Math.abs(Vi.x)+i.y*Math.abs(Vi.y)+i.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Vh=new zs,oc=new k,Xs=new k,Qa=new k;class nl{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Qa.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Xs.set(0,0,1).multiplyScalar(e.radius):Xs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(oc.copy(e.center).add(Xs)),this.expandByPoint(oc.copy(e.center).sub(Xs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new k,$a=new k,Ys=new k,vi=new k,eo=new k,js=new k,to=new k;class Gh{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.direction).multiplyScalar(t).add(this.origin),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$a.copy(e).add(t).multiplyScalar(.5),Ys.copy(t).sub(e).normalize(),vi.copy(this.origin).sub($a);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ys),o=vi.dot(this.direction),l=-vi.dot(Ys),c=vi.lengthSq(),u=Math.abs(1-a*a);let f,d,m,_;if(u>0)if(f=a*l-o,d=a*o-l,_=r*u,f>=0)if(d>=-_)if(d<=_){const p=1/u;f*=p,d*=p,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ys).multiplyScalar(d).add($a),m}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,r){eo.subVectors(t,e),js.subVectors(n,e),to.crossVectors(eo,js);let a=this.direction.dot(to),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vi.subVectors(this.origin,e);const l=o*this.direction.dot(js.crossVectors(vi,js));if(l<0)return null;const c=o*this.direction.dot(eo.cross(vi));if(c<0||l+c>a)return null;const u=-o*vi.dot(to);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,a,o,l,c,u,f,d,m,_,p,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=m,g[7]=_,g[11]=p,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Mr.setFromMatrixColumn(e,0).length(),r=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,_=c*u,p=c*f;t[0]=d+p*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=p+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,_=c*u,p=c*f;t[0]=d-p*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=p-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,_=o*u,p=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=d*c+p,t[1]=l*f,t[5]=p*c+d,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=p-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=d-p*f}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+p,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wh,e,Hh)}lookAt(e,t,n){const i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),xi.crossVectors(n,Qt),xi.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),xi.crossVectors(n,Qt)),xi.normalize(),Ks.crossVectors(Qt,xi),i[0]=xi.x,i[4]=Ks.x,i[8]=Qt.x,i[1]=xi.y,i[5]=Ks.y,i[9]=Qt.y,i[2]=xi.z,i[6]=Ks.z,i[10]=Qt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],_=n[2],p=n[6],h=n[10],g=n[14],v=n[3],y=n[7],b=n[11],w=n[15],M=i[0],S=i[4],x=i[8],T=i[12],N=i[1],O=i[5],q=i[9],z=i[13],F=i[2],B=i[6],R=i[10],D=i[14],C=i[3],I=i[7],G=i[11],Q=i[15];return r[0]=a*M+o*N+l*F+c*C,r[4]=a*S+o*O+l*B+c*I,r[8]=a*x+o*q+l*R+c*G,r[12]=a*T+o*z+l*D+c*Q,r[1]=u*M+f*N+d*F+m*C,r[5]=u*S+f*O+d*B+m*I,r[9]=u*x+f*q+d*R+m*G,r[13]=u*T+f*z+d*D+m*Q,r[2]=_*M+p*N+h*F+g*C,r[6]=_*S+p*O+h*B+g*I,r[10]=_*x+p*q+h*R+g*G,r[14]=_*T+p*z+h*D+g*Q,r[3]=v*M+y*N+b*F+w*C,r[7]=v*S+y*O+b*B+w*I,r[11]=v*x+y*q+b*R+w*G,r[15]=v*T+y*z+b*D+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],_=e[3],p=e[7],h=e[11],g=e[15];return _*(+r*l*f-i*c*f-r*o*d+n*c*d+i*o*m-n*l*m)+p*(+t*l*m-t*c*d+r*a*d-i*a*m+i*c*u-r*l*u)+h*(+t*c*f-t*o*m-r*a*f+n*a*m+r*o*u-n*c*u)+g*(-i*o*u-t*l*f+t*o*d+i*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],_=e[12],p=e[13],h=e[14],g=e[15],v=f*h*c-p*d*c+p*l*m-o*h*m-f*l*g+o*d*g,y=_*d*c-u*h*c-_*l*m+a*h*m+u*l*g-a*d*g,b=u*p*c-_*f*c+_*o*m-a*p*m-u*o*g+a*f*g,w=_*f*l-u*p*l-_*o*d+a*p*d+u*o*h-a*f*h,M=t*v+n*y+i*b+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=v*S,e[1]=(p*d*r-f*h*r-p*i*m+n*h*m+f*i*g-n*d*g)*S,e[2]=(o*h*r-p*l*r+p*i*c-n*h*c-o*i*g+n*l*g)*S,e[3]=(f*l*r-o*d*r-f*i*c+n*d*c+o*i*m-n*l*m)*S,e[4]=y*S,e[5]=(u*h*r-_*d*r+_*i*m-t*h*m-u*i*g+t*d*g)*S,e[6]=(_*l*r-a*h*r-_*i*c+t*h*c+a*i*g-t*l*g)*S,e[7]=(a*d*r-u*l*r+u*i*c-t*d*c-a*i*m+t*l*m)*S,e[8]=b*S,e[9]=(_*f*r-u*p*r-_*n*m+t*p*m+u*n*g-t*f*g)*S,e[10]=(a*p*r-_*o*r+_*n*c-t*p*c-a*n*g+t*o*g)*S,e[11]=(u*o*r-a*f*r-u*n*c+t*f*c+a*n*m-t*o*m)*S,e[12]=w*S,e[13]=(u*p*i-_*f*i+_*n*d-t*p*d-u*n*h+t*f*h)*S,e[14]=(_*o*i-a*p*i-_*n*l+t*p*l+a*n*h-t*o*h)*S,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,m=r*u,_=r*f,p=a*u,h=a*f,g=o*f,v=l*c,y=l*u,b=l*f,w=n.x,M=n.y,S=n.z;return i[0]=(1-(p+g))*w,i[1]=(m+b)*w,i[2]=(_-y)*w,i[3]=0,i[4]=(m-b)*M,i[5]=(1-(d+g))*M,i[6]=(h+v)*M,i[7]=0,i[8]=(_+y)*S,i[9]=(h-v)*S,i[10]=(1-(d+p))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Mr.set(i[0],i[1],i[2]).length();const a=Mr.set(i[4],i[5],i[6]).length(),o=Mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const c=1/r,u=1/a,f=1/o;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),d=-(a+r)/(a-r),m=-2*a*r/(a-r);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-r),f=(t+e)*l,d=(n+i)*c,m=(a+r)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mr=new k,Tn=new Mt,Wh=new k(0,0,0),Hh=new k(1,1,1),xi=new k,Ks=new k,Qt=new k,lc=new Mt,cc=new Ns;class Us{constructor(e=0,t=0,n=0,i=Us.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cc.setFromEuler(this),this.setFromQuaternion(cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Us.DefaultOrder="XYZ";Us.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qh=0;const uc=new k,wr=new Ns,ei=new Mt,Zs=new k,us=new k,Xh=new k,Yh=new Ns,fc=new k(1,0,0),dc=new k(0,1,0),hc=new k(0,0,1),jh={type:"added"},pc={type:"removed"};class On extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DefaultUp.clone();const e=new k,t=new Us,n=new Ns,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mt},normalMatrix:{value:new dn}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=On.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(dc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return uc.copy(e).applyQuaternion(this.quaternion),this.position.add(uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(dc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(us,Zs,this.up):ei.lookAt(Zs,us,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),wr.setFromRotationMatrix(ei),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(pc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,Xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}On.DefaultUp=new k(0,1,0);On.DefaultMatrixAutoUpdate=!0;const En=new k,ti=new k,no=new k,ni=new k,Tr=new k,Er=new k,mc=new k,io=new k,ro=new k,so=new k;class oi{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){En.subVectors(i,t),ti.subVectors(n,t),no.subVectors(e,t);const a=En.dot(En),o=En.dot(ti),l=En.dot(no),c=ti.dot(ti),u=ti.dot(no),f=a*c-o*o;if(f===0)return r.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ni),ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ni),l.set(0,0),l.addScaledVector(r,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),ti.subVectors(e,t),En.cross(ti).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),En.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return oi.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Tr.subVectors(i,n),Er.subVectors(r,n),io.subVectors(e,n);const l=Tr.dot(io),c=Er.dot(io);if(l<=0&&c<=0)return t.copy(n);ro.subVectors(e,i);const u=Tr.dot(ro),f=Er.dot(ro);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Tr,a);so.subVectors(e,r);const m=Tr.dot(so),_=Er.dot(so);if(_>=0&&m<=_)return t.copy(r);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Er,o);const h=u*_-m*f;if(h<=0&&f-u>=0&&m-_>=0)return mc.subVectors(r,i),o=(f-u)/(f-u+(m-_)),t.copy(i).addScaledVector(mc,o);const g=1/(h+p+d);return a=p*g,o=d*g,t.copy(n).addScaledVector(Tr,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Kh=0;class Ra extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=kr,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zu,this.blendDst=Ju,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Hd;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==ws&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lf extends Ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new k,Js=new We;class qn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=nc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),a=new je),t[n++]=a.r,t[n++]=a.g,t[n++]=a.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),a=new We),t[n++]=a.x,t[n++]=a.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),a=new k),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let a=e[i];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),a=new dt),t[n++]=a.x,t[n++]=a.y,t[n++]=a.z,t[n++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nc&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class cf extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class uf extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ir extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zh=0;const on=new Mt,ao=new On,Ar=new k,$t=new zs,fs=new zs,ut=new k;class dr extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tf(e)?uf:cf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new dn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return ao.lookAt(e),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ir(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors($t.min,fs.min),$t.expandByPoint(ut),ut.addVectors($t.max,fs.max),$t.expandByPoint(ut)):($t.expandByPoint(fs.min),$t.expandByPoint(fs.max))}$t.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(Ar.fromBufferAttribute(e,c),ut.add(Ar)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<o;N++)c[N]=new k,u[N]=new k;const f=new k,d=new k,m=new k,_=new We,p=new We,h=new We,g=new k,v=new k;function y(N,O,q){f.fromArray(i,N*3),d.fromArray(i,O*3),m.fromArray(i,q*3),_.fromArray(a,N*2),p.fromArray(a,O*2),h.fromArray(a,q*2),d.sub(f),m.sub(f),p.sub(_),h.sub(_);const z=1/(p.x*h.y-h.x*p.y);isFinite(z)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(z),v.copy(m).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(z),c[N].add(g),c[O].add(g),c[q].add(g),u[N].add(v),u[O].add(v),u[q].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let N=0,O=b.length;N<O;++N){const q=b[N],z=q.start,F=q.count;for(let B=z,R=z+F;B<R;B+=3)y(n[B+0],n[B+1],n[B+2])}const w=new k,M=new k,S=new k,x=new k;function T(N){S.fromArray(r,N*3),x.copy(S);const O=c[N];w.copy(O),w.sub(S.multiplyScalar(S.dot(O))).normalize(),M.crossVectors(x,O);const z=M.dot(u[N])<0?-1:1;l[N*4]=w.x,l[N*4+1]=w.y,l[N*4+2]=w.z,l[N*4+3]=z}for(let N=0,O=b.length;N<O;++N){const q=b[N],z=q.start,F=q.count;for(let B=z,R=z+F;B<R;B+=3)T(n[B+0]),T(n[B+1]),T(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,h),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,h),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(i,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const a=n[i].array,o=e.attributes[i],l=o.array,c=o.itemSize*t,u=Math.min(l.length,a.length-c);for(let f=0,d=c;f<u;f++,d++)a[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,h=l.length;p<h;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let g=0;g<u;g++)d[_++]=c[m++]}return new qn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const gc=new Mt,Cr=new Gh,oo=new nl,Si=new k,bi=new k,yi=new k,lo=new k,co=new k,uo=new k,Qs=new k,$s=new k,ea=new k,ta=new We,na=new We,ia=new We,fo=new k,ra=new k;class li extends On{constructor(e=new dr,t=new lf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(r),e.ray.intersectsSphere(oo)===!1)||(gc.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(gc),n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,_=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const g=m[p],v=i[g.materialIndex],y=Math.max(g.start,_.start),b=Math.min(o.count,Math.min(g.start+g.count,_.start+_.count));for(let w=y,M=b;w<M;w+=3){const S=o.getX(w),x=o.getX(w+1),T=o.getX(w+2);a=sa(this,v,e,Cr,l,c,u,f,d,S,x,T),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,_.start),h=Math.min(o.count,_.start+_.count);for(let g=p,v=h;g<v;g+=3){const y=o.getX(g),b=o.getX(g+1),w=o.getX(g+2);a=sa(this,i,e,Cr,l,c,u,f,d,y,b,w),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,h=m.length;p<h;p++){const g=m[p],v=i[g.materialIndex],y=Math.max(g.start,_.start),b=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let w=y,M=b;w<M;w+=3){const S=w,x=w+1,T=w+2;a=sa(this,v,e,Cr,l,c,u,f,d,S,x,T),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let g=p,v=h;g<v;g+=3){const y=g,b=g+1,w=g+2;a=sa(this,i,e,Cr,l,c,u,f,d,y,b,w),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function Jh(s,e,t,n,i,r,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side!==Xr,o),l===null)return null;ra.copy(o),ra.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:s}}function sa(s,e,t,n,i,r,a,o,l,c,u,f){Si.fromBufferAttribute(i,c),bi.fromBufferAttribute(i,u),yi.fromBufferAttribute(i,f);const d=s.morphTargetInfluences;if(r&&d){Qs.set(0,0,0),$s.set(0,0,0),ea.set(0,0,0);for(let _=0,p=r.length;_<p;_++){const h=d[_],g=r[_];h!==0&&(lo.fromBufferAttribute(g,c),co.fromBufferAttribute(g,u),uo.fromBufferAttribute(g,f),a?(Qs.addScaledVector(lo,h),$s.addScaledVector(co,h),ea.addScaledVector(uo,h)):(Qs.addScaledVector(lo.sub(Si),h),$s.addScaledVector(co.sub(bi),h),ea.addScaledVector(uo.sub(yi),h)))}Si.add(Qs),bi.add($s),yi.add(ea)}s.isSkinnedMesh&&(s.boneTransform(c,Si),s.boneTransform(u,bi),s.boneTransform(f,yi));const m=Jh(s,e,t,n,Si,bi,yi,fo);if(m){o&&(ta.fromBufferAttribute(o,c),na.fromBufferAttribute(o,u),ia.fromBufferAttribute(o,f),m.uv=oi.getUV(fo,Si,bi,yi,ta,na,ia,new We)),l&&(ta.fromBufferAttribute(l,c),na.fromBufferAttribute(l,u),ia.fromBufferAttribute(l,f),m.uv2=oi.getUV(fo,Si,bi,yi,ta,na,ia,new We));const _={a:c,b:u,c:f,normal:new k,materialIndex:0};oi.getNormal(Si,bi,yi,_.normal),m.face=_}return m}class ks extends dr{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ir(c,3)),this.setAttribute("normal",new ir(u,3)),this.setAttribute("uv",new ir(f,2));function _(p,h,g,v,y,b,w,M,S,x,T){const N=b/S,O=w/x,q=b/2,z=w/2,F=M/2,B=S+1,R=x+1;let D=0,C=0;const I=new k;for(let G=0;G<R;G++){const Q=G*O-z;for(let Z=0;Z<B;Z++){const ee=Z*N-q;I[p]=ee*v,I[h]=Q*y,I[g]=F,c.push(I.x,I.y,I.z),I[p]=0,I[h]=0,I[g]=M>0?1:-1,u.push(I.x,I.y,I.z),f.push(Z/S),f.push(1-G/x),D+=1}}for(let G=0;G<x;G++)for(let Q=0;Q<S;Q++){const Z=d+Q+B*G,ee=d+Q+B*(G+1),ne=d+(Q+1)+B*(G+1),fe=d+(Q+1)+B*G;l.push(Z,ee,fe),l.push(ee,ne,fe),C+=6}o.addGroup(m,C,T),m+=C,d+=D}}static fromJSON(e){return new ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function At(s){const e={};for(let t=0;t<s.length;t++){const n=Zr(s[t]);for(const i in n)e[i]=n[i]}return e}const Qh={clone:Zr,merge:At};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=$h,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ff extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends ff{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ha*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=90,Rr=1;class tp extends On{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Cn(Lr,Rr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new k(1,0,0)),this.add(i);const r=new Cn(Lr,Rr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new k(-1,0,0)),this.add(r);const a=new Cn(Lr,Rr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new k(0,1,0)),this.add(a);const o=new Cn(Lr,Rr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new k(0,-1,0)),this.add(o);const l=new Cn(Lr,Rr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(0,0,1)),this.add(l);const c=new Cn(Lr,Rr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new k(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=ci,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class df extends gn{constructor(e,t,n,i,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yr,super(e,t,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class np extends cr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new df(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ks(5,5,5),r=new Di({name:"CubemapFromEquirect",uniforms:Zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Ai});r.uniforms.tEquirect.value=t;const a=new li(i,r),o=t.minFilter;return t.minFilter===La&&(t.minFilter=fn),new tp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const ho=new k,ip=new k,rp=new dn;class Hi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ho.subVectors(n,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rp.getNormalMatrix(e),i=this.coplanarPoint(ho).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new nl,aa=new k;class hf{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],_=n[10],p=n[11],h=n[12],g=n[13],v=n[14],y=n[15];return t[0].setComponents(o-i,f-l,p-d,y-h).normalize(),t[1].setComponents(o+i,f+l,p+d,y+h).normalize(),t[2].setComponents(o+r,f+c,p+m,y+g).normalize(),t[3].setComponents(o-r,f-c,p-m,y-g).normalize(),t[4].setComponents(o-a,f-u,p-_,y-v).normalize(),t[5].setComponents(o+a,f+u,p+_,y+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(aa.x=i.normal.x>0?e.max.x:e.min.x,aa.y=i.normal.y>0?e.max.y:e.min.y,aa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pf(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,d=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,f){const d=u.array,m=u.updateRange;s.bindBuffer(f,c),m.count===-1?s.bufferSubData(f,0,d):(t?s.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(r(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Da extends dr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,m=[],_=[],p=[],h=[];for(let g=0;g<u;g++){const v=g*d-a;for(let y=0;y<c;y++){const b=y*f-r;_.push(b,-v,0),p.push(0,0,1),h.push(y/o),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){const y=v+c*g,b=v+c*(g+1),w=v+1+c*(g+1),M=v+1+c*g;m.push(y,b,M),m.push(b,w,M)}this.setIndex(m),this.setAttribute("position",new ir(_,3)),this.setAttribute("normal",new ir(p,3)),this.setAttribute("uv",new ir(h,2))}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}var ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp="vec3 transformed = vec3( position );",hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
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
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Op=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
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
}`,Hp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xp=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Yp=`uniform bool receiveShadow;
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
#endif`,jp=`#if defined( USE_ENVMAP )
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
#endif`,Kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,$p=`PhysicalMaterial material;
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
#endif`,em=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
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
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,xm=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nm=`#ifdef USE_SHADOWMAP
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
#endif`,zm=`#ifdef USE_SHADOWMAP
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
#endif`,Um=`#ifdef USE_SHADOWMAP
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
#endif`,km=`float getShadowMask() {
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
}`,Bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Jm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Qm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$m=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,eg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#include <envmap_common_pars_fragment>
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
}`,og=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
}`,cg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,vg=`uniform vec3 diffuse;
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
}`,xg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,yg=`#define NORMAL
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
}`,Mg=`#define PHONG
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
}`,wg=`#define PHONG
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
}`,Tg=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,Ag=`#define TOON
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
}`,Cg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Pg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Re={alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:up,aomap_pars_fragment:fp,begin_vertex:dp,beginnormal_vertex:hp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:Sp,color_fragment:bp,color_pars_fragment:yp,color_pars_vertex:Mp,color_vertex:wp,common:Tp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Cp,displacementmap_vertex:Lp,emissivemap_fragment:Rp,emissivemap_pars_fragment:Dp,encodings_fragment:Pp,encodings_pars_fragment:Ip,envmap_fragment:Op,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Np,envmap_pars_vertex:zp,envmap_physical_pars_fragment:jp,envmap_vertex:Up,fog_vertex:kp,fog_pars_vertex:Bp,fog_fragment:Vp,fog_pars_fragment:Gp,gradientmap_pars_fragment:Wp,lightmap_fragment:Hp,lightmap_pars_fragment:qp,lights_lambert_vertex:Xp,lights_pars_begin:Yp,lights_toon_fragment:Kp,lights_toon_pars_fragment:Zp,lights_phong_fragment:Jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:$p,lights_physical_pars_fragment:em,lights_fragment_begin:tm,lights_fragment_maps:nm,lights_fragment_end:im,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:om,map_fragment:lm,map_pars_fragment:cm,map_particle_fragment:um,map_particle_pars_fragment:fm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:hm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:_m,normal_fragment_begin:vm,normal_fragment_maps:xm,normal_pars_fragment:Sm,normal_pars_vertex:bm,normal_vertex:ym,normalmap_pars_fragment:Mm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Am,output_fragment:Cm,packing:Lm,premultiplied_alpha_fragment:Rm,project_vertex:Dm,dithering_fragment:Pm,dithering_pars_fragment:Im,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Nm,shadowmap_pars_vertex:zm,shadowmap_vertex:Um,shadowmask_pars_fragment:km,skinbase_vertex:Bm,skinning_pars_vertex:Vm,skinning_vertex:Gm,skinnormal_vertex:Wm,specularmap_fragment:Hm,specularmap_pars_fragment:qm,tonemapping_fragment:Xm,tonemapping_pars_fragment:Ym,transmission_fragment:jm,transmission_pars_fragment:Km,uv_pars_fragment:Zm,uv_pars_vertex:Jm,uv_vertex:Qm,uv2_pars_fragment:$m,uv2_pars_vertex:eg,uv2_vertex:tg,worldpos_vertex:ng,background_vert:ig,background_frag:rg,cube_vert:sg,cube_frag:ag,depth_vert:og,depth_frag:lg,distanceRGBA_vert:cg,distanceRGBA_frag:ug,equirect_vert:fg,equirect_frag:dg,linedashed_vert:hg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:vg,meshmatcap_vert:xg,meshmatcap_frag:Sg,meshnormal_vert:bg,meshnormal_frag:yg,meshphong_vert:Mg,meshphong_frag:wg,meshphysical_vert:Tg,meshphysical_frag:Eg,meshtoon_vert:Ag,meshtoon_frag:Cg,points_vert:Lg,points_frag:Rg,shadow_vert:Dg,shadow_frag:Pg,sprite_vert:Ig,sprite_frag:Og},oe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new dn},uv2Transform:{value:new dn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dn}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dn}}},Vn={basic:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:At([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:At([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:At([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:At([oe.points,oe.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:At([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:At([oe.common,oe.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:At([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:At([oe.sprite,oe.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new dn},t2D:{value:null}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},cube:{uniforms:At([oe.envmap,{opacity:{value:1}}]),vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:At([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:At([oe.lights,oe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};Vn.physical={uniforms:At([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new We(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};function Fg(s,e,t,n,i,r){const a=new je(0);let o=i===!0?0:1,l,c,u=null,f=0,d=null;function m(p,h){let g=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const y=s.xr,b=y.getSession&&y.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?_(a,o):v&&v.isColor&&(_(v,1),g=!0),(s.autoClear||g)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ca)?(c===void 0&&(c=new li(new ks(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Zr(Vn.cube.uniforms),vertexShader:Vn.cube.vertexShader,fragmentShader:Vn.cube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new li(new Da(2,2),new Di({name:"BackgroundMaterial",uniforms:Zr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,r)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),o=h,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,_(a,o)},render:m}}function Ng(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=h(null);let c=l,u=!1;function f(F,B,R,D,C){let I=!1;if(a){const G=p(D,R,B);c!==G&&(c=G,m(c.object)),I=g(F,D,R,C),I&&v(F,D,R,C)}else{const G=B.wireframe===!0;(c.geometry!==D.id||c.program!==R.id||c.wireframe!==G)&&(c.geometry=D.id,c.program=R.id,c.wireframe=G,I=!0)}C!==null&&t.update(C,34963),(I||u)&&(u=!1,x(F,B,R,D),C!==null&&s.bindBuffer(34963,t.get(C).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function p(F,B,R){const D=R.wireframe===!0;let C=o[F.id];C===void 0&&(C={},o[F.id]=C);let I=C[B.id];I===void 0&&(I={},C[B.id]=I);let G=I[D];return G===void 0&&(G=h(d()),I[D]=G),G}function h(F){const B=[],R=[],D=[];for(let C=0;C<i;C++)B[C]=0,R[C]=0,D[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:R,attributeDivisors:D,object:F,attributes:{},index:null}}function g(F,B,R,D){const C=c.attributes,I=B.attributes;let G=0;const Q=R.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const ne=C[Z];let fe=I[Z];if(fe===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(fe=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(fe=F.instanceColor)),ne===void 0||ne.attribute!==fe||fe&&ne.data!==fe.data)return!0;G++}return c.attributesNum!==G||c.index!==D}function v(F,B,R,D){const C={},I=B.attributes;let G=0;const Q=R.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let ne=I[Z];ne===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(ne=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(ne=F.instanceColor));const fe={};fe.attribute=ne,ne&&ne.data&&(fe.data=ne.data),C[Z]=fe,G++}c.attributes=C,c.attributesNum=G,c.index=D}function y(){const F=c.newAttributes;for(let B=0,R=F.length;B<R;B++)F[B]=0}function b(F){w(F,0)}function w(F,B){const R=c.newAttributes,D=c.enabledAttributes,C=c.attributeDivisors;R[F]=1,D[F]===0&&(s.enableVertexAttribArray(F),D[F]=1),C[F]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,B),C[F]=B)}function M(){const F=c.newAttributes,B=c.enabledAttributes;for(let R=0,D=B.length;R<D;R++)B[R]!==F[R]&&(s.disableVertexAttribArray(R),B[R]=0)}function S(F,B,R,D,C,I){n.isWebGL2===!0&&(R===5124||R===5125)?s.vertexAttribIPointer(F,B,R,C,I):s.vertexAttribPointer(F,B,R,D,C,I)}function x(F,B,R,D){if(n.isWebGL2===!1&&(F.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const C=D.attributes,I=R.getAttributes(),G=B.defaultAttributeValues;for(const Q in I){const Z=I[Q];if(Z.location>=0){let ee=C[Q];if(ee===void 0&&(Q==="instanceMatrix"&&F.instanceMatrix&&(ee=F.instanceMatrix),Q==="instanceColor"&&F.instanceColor&&(ee=F.instanceColor)),ee!==void 0){const ne=ee.normalized,fe=ee.itemSize,Y=t.get(ee);if(Y===void 0)continue;const Je=Y.buffer,J=Y.type,X=Y.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ie=ee.data,Ve=ie.stride,De=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)w(Z.location+ye,ie.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ye=0;ye<Z.locationSize;ye++)b(Z.location+ye);s.bindBuffer(34962,Je);for(let ye=0;ye<Z.locationSize;ye++)S(Z.location+ye,fe/Z.locationSize,J,ne,Ve*X,(De+fe/Z.locationSize*ye)*X)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<Z.locationSize;ie++)w(Z.location+ie,ee.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<Z.locationSize;ie++)b(Z.location+ie);s.bindBuffer(34962,Je);for(let ie=0;ie<Z.locationSize;ie++)S(Z.location+ie,fe/Z.locationSize,J,ne,fe*X,fe/Z.locationSize*ie*X)}}else if(G!==void 0){const ne=G[Q];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(Z.location,ne);break;case 3:s.vertexAttrib3fv(Z.location,ne);break;case 4:s.vertexAttrib4fv(Z.location,ne);break;default:s.vertexAttrib1fv(Z.location,ne)}}}}M()}function T(){q();for(const F in o){const B=o[F];for(const R in B){const D=B[R];for(const C in D)_(D[C].object),delete D[C];delete B[R]}delete o[F]}}function N(F){if(o[F.id]===void 0)return;const B=o[F.id];for(const R in B){const D=B[R];for(const C in D)_(D[C].object),delete D[C];delete B[R]}delete o[F.id]}function O(F){for(const B in o){const R=o[B];if(R[F.id]===void 0)continue;const D=R[F.id];for(const C in D)_(D[C].object),delete D[C];delete R[F.id]}}function q(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:N,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:b,disableUnusedAttributes:M}}function zg(s,e,t,n){const i=n.isWebGL2;let r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,f){if(f===0)return;let d,m;if(i)d=s,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](r,c,u,f),t.update(u,r,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Ug(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(S){if(S==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(34930),d=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),p=s.getParameter(34921),h=s.getParameter(36347),g=s.getParameter(36348),v=s.getParameter(36349),y=d>0,b=a||e.has("OES_texture_float"),w=y&&b,M=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:M}}function kg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Hi,o=new dn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const _=f.length!==0||d||n!==0||i;return i=d,t=u(f,m,0),n=f.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(f,d,m){const _=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,g=s.get(f);if(!i||_===null||_.length===0||r&&!h)r?u(null):c();else{const v=r?0:n,y=v*4;let b=g.clippingState||null;l.value=b,b=u(_,d,y,m);for(let w=0;w!==y;++w)b[w]=t[w];g.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,_){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const g=m+p*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(h===null||h.length<g)&&(h=new Float32Array(g));for(let y=0,b=m;y!==p;++y,b+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(h,b),h[b+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Bg(s){let e=new WeakMap;function t(a,o){return o===Do?a.mapping=Yr:o===Po&&(a.mapping=jr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Do||o===Po)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new np(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class mf extends ff{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fr=4,_c=[.125,.215,.35,.446,.526,.582],Yi=20,po=new mf,vc=new je;let mo=null;const qi=(1+Math.sqrt(5))/2,Pr=1/qi,xc=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,qi,Pr),new k(0,qi,-Pr),new k(Pr,0,qi),new k(-Pr,0,qi),new k(qi,Pr,0),new k(-qi,Pr,0)];class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mo),e.scissorTest=!1,oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ts,format:Wn,encoding:lr,depthBuffer:!1},i=bc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vg(r)),this._blurMaterial=Gg(r,e,t)}return i}_compileMaterial(e){const t=new li(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,n,i){const o=new Cn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vc),u.toneMapping=ci,u.autoClear=!1;const m=new lf({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),_=new li(new ks,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(vc),p=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):v===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const y=this._cubeSize;oa(i,v*y,g>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Yr||e.mapping===jr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new li(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=xc[(i-1)%xc.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new li(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yi-1),p=r/_,h=isFinite(r)?1+Math.floor(u*p):Yi;h>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Yi}`);const g=[];let v=0;for(let S=0;S<Yi;++S){const x=S/p,T=Math.exp(-x*x/2);g.push(T),S===0?v+=T:S<h&&(v+=2*T)}for(let S=0;S<g.length;S++)g[S]=g[S]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const b=this._sizeLods[i],w=3*b*(i>y-Fr?i-y+Fr:0),M=4*(this._cubeSize-b);oa(t,w,M,3*b,2*b),l.setRenderTarget(t),l.render(f,po)}}function Vg(s){const e=[],t=[],n=[];let i=s;const r=s-Fr+1+_c.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Fr?l=_c[a-s+Fr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,p=3,h=2,g=1,v=new Float32Array(p*_*m),y=new Float32Array(h*_*m),b=new Float32Array(g*_*m);for(let M=0;M<m;M++){const S=M%3*2/3-1,x=M>2?0:-1,T=[S,x,0,S+2/3,x,0,S+2/3,x+1,0,S,x,0,S+2/3,x+1,0,S,x+1,0];v.set(T,p*_*M),y.set(d,h*_*M);const N=[M,M,M,M,M,M];b.set(N,g*_*M)}const w=new dr;w.setAttribute("position",new qn(v,p)),w.setAttribute("uv",new qn(y,h)),w.setAttribute("faceIndex",new qn(b,g)),e.push(w),i>Fr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bc(s,e,t){const n=new cr(s,e,t);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Gg(s,e,t){const n=new Float32Array(Yi),i=new k(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function yc(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Mc(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function il(){return`

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
	`}function Wg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Do||l===Po,u=l===Yr||l===jr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Sc(s)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Sc(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qg(s,e,t,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const m=f.morphAttributes;for(const _ in m){const p=m[_];for(let h=0,g=p.length;h<g;h++)e.update(p[h],34962)}}function c(f){const d=[],m=f.index,_=f.attributes.position;let p=0;if(m!==null){const v=m.array;p=m.version;for(let y=0,b=v.length;y<b;y+=3){const w=v[y+0],M=v[y+1],S=v[y+2];d.push(w,M,M,S,S,w)}}else{const v=_.array;p=_.version;for(let y=0,b=v.length/3-1;y<b;y+=3){const w=y+0,M=y+1,S=y+2;d.push(w,M,M,S,S,w)}}const h=new(tf(d)?uf:cf)(d,1);h.version=p;const g=r.get(f);g&&e.remove(g),r.set(f,h)}function u(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Xg(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){s.drawElements(r,m,o,d*l),t.update(m,r,1)}function f(d,m,_){if(_===0)return;let p,h;if(i)p=s,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,m,o,d*l,_),t.update(m,r,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Yg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(r/3);break;case 1:t.lines+=o*(r/2);break;case 3:t.lines+=o*(r-1);break;case 2:t.lines+=o*r;break;case 0:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jg(s,e){return s[0]-e[0]}function Kg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function go(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Zg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new dt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=_!==void 0?_.length:0;let h=r.get(u);if(h===void 0||h.count!==p){let B=function(){z.dispose(),r.delete(u),u.removeEventListener("dispose",B)};h!==void 0&&h.texture.dispose();const y=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let T=0;y===!0&&(T=1),b===!0&&(T=2),w===!0&&(T=3);let N=u.attributes.position.count*T,O=1;N>e.maxTextureSize&&(O=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const q=new Float32Array(N*O*4*p),z=new af(q,N,O,p);z.type=Ki,z.needsUpdate=!0;const F=T*4;for(let R=0;R<p;R++){const D=M[R],C=S[R],I=x[R],G=N*O*4*R;for(let Q=0;Q<D.count;Q++){const Z=Q*F;y===!0&&(a.fromBufferAttribute(D,Q),D.normalized===!0&&go(a,D),q[G+Z+0]=a.x,q[G+Z+1]=a.y,q[G+Z+2]=a.z,q[G+Z+3]=0),b===!0&&(a.fromBufferAttribute(C,Q),C.normalized===!0&&go(a,C),q[G+Z+4]=a.x,q[G+Z+5]=a.y,q[G+Z+6]=a.z,q[G+Z+7]=0),w===!0&&(a.fromBufferAttribute(I,Q),I.normalized===!0&&go(a,I),q[G+Z+8]=a.x,q[G+Z+9]=a.y,q[G+Z+10]=a.z,q[G+Z+11]=I.itemSize===4?a.w:1)}}h={count:p,texture:z,size:new We(N,O)},r.set(u,h),u.addEventListener("dispose",B)}let g=0;for(let y=0;y<m.length;y++)g+=m[y];const v=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",m),d.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}else{const _=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==_){p=[];for(let b=0;b<_;b++)p[b]=[b,0];n[u.id]=p}for(let b=0;b<_;b++){const w=p[b];w[0]=b,w[1]=m[b]}p.sort(Kg);for(let b=0;b<8;b++)b<_&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(jg);const h=u.morphAttributes.position,g=u.morphAttributes.normal;let v=0;for(let b=0;b<8;b++){const w=o[b],M=w[0],S=w[1];M!==Number.MAX_SAFE_INTEGER&&S?(h&&u.getAttribute("morphTarget"+b)!==h[M]&&u.setAttribute("morphTarget"+b,h[M]),g&&u.getAttribute("morphNormal"+b)!==g[M]&&u.setAttribute("morphNormal"+b,g[M]),i[b]=S,v+=S):(h&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),g&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),i[b]=0)}const y=u.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Jg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const gf=new gn,_f=new af,vf=new Bh,xf=new df,wc=[],Tc=[],Ec=new Float32Array(16),Ac=new Float32Array(9),Cc=new Float32Array(4);function as(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=wc[i];if(r===void 0&&(r=new Float32Array(i),wc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function zt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Pa(s,e){let t=Tc[e];t===void 0&&(t=new Int32Array(e),Tc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Qg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function e_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function t_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function n_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(zt(t,n))return;Cc.set(n),s.uniformMatrix2fv(this.addr,!1,Cc),Ut(t,n)}}function i_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(zt(t,n))return;Ac.set(n),s.uniformMatrix3fv(this.addr,!1,Ac),Ut(t,n)}}function r_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(zt(t,n))return;Ec.set(n),s.uniformMatrix4fv(this.addr,!1,Ec),Ut(t,n)}}function s_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a_(s,e){const t=this.cache;zt(t,e)||(s.uniform2iv(this.addr,e),Ut(t,e))}function o_(s,e){const t=this.cache;zt(t,e)||(s.uniform3iv(this.addr,e),Ut(t,e))}function l_(s,e){const t=this.cache;zt(t,e)||(s.uniform4iv(this.addr,e),Ut(t,e))}function c_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function u_(s,e){const t=this.cache;zt(t,e)||(s.uniform2uiv(this.addr,e),Ut(t,e))}function f_(s,e){const t=this.cache;zt(t,e)||(s.uniform3uiv(this.addr,e),Ut(t,e))}function d_(s,e){const t=this.cache;zt(t,e)||(s.uniform4uiv(this.addr,e),Ut(t,e))}function h_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||gf,i)}function p_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vf,i)}function m_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xf,i)}function g_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||_f,i)}function __(s){switch(s){case 5126:return Qg;case 35664:return $g;case 35665:return e_;case 35666:return t_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return s_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return u_;case 36295:return f_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function v_(s,e){s.uniform1fv(this.addr,e)}function x_(s,e){const t=as(e,this.size,2);s.uniform2fv(this.addr,t)}function S_(s,e){const t=as(e,this.size,3);s.uniform3fv(this.addr,t)}function b_(s,e){const t=as(e,this.size,4);s.uniform4fv(this.addr,t)}function y_(s,e){const t=as(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function M_(s,e){const t=as(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function w_(s,e){const t=as(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function T_(s,e){s.uniform1iv(this.addr,e)}function E_(s,e){s.uniform2iv(this.addr,e)}function A_(s,e){s.uniform3iv(this.addr,e)}function C_(s,e){s.uniform4iv(this.addr,e)}function L_(s,e){s.uniform1uiv(this.addr,e)}function R_(s,e){s.uniform2uiv(this.addr,e)}function D_(s,e){s.uniform3uiv(this.addr,e)}function P_(s,e){s.uniform4uiv(this.addr,e)}function I_(s,e,t){const n=e.length,i=Pa(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||gf,i[r])}function O_(s,e,t){const n=e.length,i=Pa(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||vf,i[r])}function F_(s,e,t){const n=e.length,i=Pa(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||xf,i[r])}function N_(s,e,t){const n=e.length,i=Pa(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||_f,i[r])}function z_(s){switch(s){case 5126:return v_;case 35664:return x_;case 35665:return S_;case 35666:return b_;case 35674:return y_;case 35675:return M_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return E_;case 35668:case 35672:return A_;case 35669:case 35673:return C_;case 5125:return L_;case 36294:return R_;case 36295:return D_;case 36296:return P_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return N_}}class U_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=__(t.type)}}class k_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=z_(t.type)}}class B_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Lc(s,e){s.seq.push(e),s.map[e.id]=e}function V_(s,e,t){const n=s.name,i=n.length;for(_o.lastIndex=0;;){const r=_o.exec(n),a=_o.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Lc(t,c===void 0?new U_(o,s,e):new k_(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new B_(o),Lc(t,f)),t=f}}}class ha{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);V_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Rc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let G_=0;function W_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function H_(s){switch(s){case lr:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Dc(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+W_(s.getShaderSource(e),a)}else return i}function q_(s,e){const t=H_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function X_(s,e){let t;switch(e){case dh:t="Linear";break;case hh:t="Reinhard";break;case ph:t="OptimizedCineon";break;case mh:t="ACESFilmic";break;case gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Y_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gs).join(`
`)}function j_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function K_(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function gs(s){return s!==""}function Pc(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(s){return s.replace(Z_,J_)}function J_(s,e){const t=Re[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zo(t)}const Q_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,$_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(s){return s.replace($_,Sf).replace(Q_,e0)}function e0(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Sf(s,e,t,n)}function Sf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Wd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ms&&(e="SHADOWMAP_TYPE_VSM"),e}function n0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yr:case jr:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function r0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qu:e="ENVMAP_BLENDING_MULTIPLY";break;case uh:e="ENVMAP_BLENDING_MIX";break;case fh:e="ENVMAP_BLENDING_ADD";break}return e}function s0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function a0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=t0(t),c=n0(t),u=i0(t),f=r0(t),d=s0(t),m=t.isWebGL2?"":Y_(t),_=j_(r),p=i.createProgram();let h,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter(gs).join(`
`),h.length>0&&(h+=`
`),g=[m,_].filter(gs).join(`
`),g.length>0&&(g+=`
`)):(h=[Fc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),g=[m,Fc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?Re.tonemapping_pars_fragment:"",t.toneMapping!==ci?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.encodings_pars_fragment,q_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gs).join(`
`)),a=zo(a),a=Pc(a,t),a=Ic(a,t),o=zo(o),o=Pc(o,t),o=Ic(o,t),a=Oc(a),o=Oc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+h+a,b=v+g+o,w=Rc(i,35633,y),M=Rc(i,35632,b);if(i.attachShader(p,w),i.attachShader(p,M),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(w).trim(),O=i.getShaderInfoLog(M).trim();let q=!0,z=!0;if(i.getProgramParameter(p,35714)===!1){q=!1;const F=Dc(i,w,"vertex"),B=Dc(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+F+`
`+B)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(N===""||O==="")&&(z=!1);z&&(this.diagnostics={runnable:q,programLog:T,vertexShader:{log:N,prefix:h},fragmentShader:{log:O,prefix:g}})}i.deleteShader(w),i.deleteShader(M);let S;this.getUniforms=function(){return S===void 0&&(S=new ha(i,p)),S};let x;return this.getAttributes=function(){return x===void 0&&(x=K_(i,p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=G_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=M,this}let o0=0;class l0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new c0(e);t.set(e,n)}return t.get(e)}}class c0{constructor(e){this.id=o0++,this.code=e,this.usedTimes=0}}function u0(s,e,t,n,i,r,a){const o=new of,l=new l0,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,T,N,O,q){const z=O.fog,F=q.geometry,B=x.isMeshStandardMaterial?O.environment:null,R=(x.isMeshStandardMaterial?t:e).get(x.envMap||B),D=R&&R.mapping===Ca?R.image.height:null,C=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const I=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,G=I!==void 0?I.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let Z,ee,ne,fe;if(C){const Ve=Vn[C];Z=Ve.vertexShader,ee=Ve.fragmentShader}else Z=x.vertexShader,ee=x.fragmentShader,l.update(x),ne=l.getVertexShaderID(x),fe=l.getFragmentShaderID(x);const Y=s.getRenderTarget(),Je=x.alphaTest>0,J=x.clearcoat>0,X=x.iridescence>0;return{isWebGL2:u,shaderID:C,shaderName:x.type,vertexShader:Z,fragmentShader:ee,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:q.isInstancedMesh===!0,instancingColor:q.isInstancedMesh===!0&&q.instanceColor!==null,supportsVertexTextures:d,outputEncoding:Y===null?s.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:lr,map:!!x.map,matcap:!!x.matcap,envMap:!!R,envMapMode:R&&R.mapping,envMapCubeUVHeight:D,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Nh,tangentSpaceNormalMap:x.normalMapType===Fh,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===$e,clearcoat:J,clearcoatMap:J&&!!x.clearcoatMap,clearcoatRoughnessMap:J&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!x.clearcoatNormalMap,iridescence:X,iridescenceMap:X&&!!x.iridescenceMap,iridescenceThicknessMap:X&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===kr,alphaMap:!!x.alphaMap,alphaTest:Je,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!F.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:ci,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xr,flipSided:x.side===Pn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function h(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)T.push(N),T.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(g(T,x),v(T,x),T.push(s.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.map&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.lightMap&&o.enable(7),T.aoMap&&o.enable(8),T.emissiveMap&&o.enable(9),T.bumpMap&&o.enable(10),T.normalMap&&o.enable(11),T.objectSpaceNormalMap&&o.enable(12),T.tangentSpaceNormalMap&&o.enable(13),T.clearcoat&&o.enable(14),T.clearcoatMap&&o.enable(15),T.clearcoatRoughnessMap&&o.enable(16),T.clearcoatNormalMap&&o.enable(17),T.iridescence&&o.enable(18),T.iridescenceMap&&o.enable(19),T.iridescenceThicknessMap&&o.enable(20),T.displacementMap&&o.enable(21),T.specularMap&&o.enable(22),T.roughnessMap&&o.enable(23),T.metalnessMap&&o.enable(24),T.gradientMap&&o.enable(25),T.alphaMap&&o.enable(26),T.alphaTest&&o.enable(27),T.vertexColors&&o.enable(28),T.vertexAlphas&&o.enable(29),T.vertexUvs&&o.enable(30),T.vertexTangents&&o.enable(31),T.uvsVertexOnly&&o.enable(32),T.fog&&o.enable(33),x.push(o.mask),o.disableAll(),T.useFog&&o.enable(0),T.flatShading&&o.enable(1),T.logarithmicDepthBuffer&&o.enable(2),T.skinning&&o.enable(3),T.morphTargets&&o.enable(4),T.morphNormals&&o.enable(5),T.morphColors&&o.enable(6),T.premultipliedAlpha&&o.enable(7),T.shadowMapEnabled&&o.enable(8),T.physicallyCorrectLights&&o.enable(9),T.doubleSided&&o.enable(10),T.flipSided&&o.enable(11),T.useDepthPacking&&o.enable(12),T.dithering&&o.enable(13),T.specularIntensityMap&&o.enable(14),T.specularColorMap&&o.enable(15),T.transmission&&o.enable(16),T.transmissionMap&&o.enable(17),T.thicknessMap&&o.enable(18),T.sheen&&o.enable(19),T.sheenColorMap&&o.enable(20),T.sheenRoughnessMap&&o.enable(21),T.decodeVideoTexture&&o.enable(22),T.opaque&&o.enable(23),x.push(o.mask)}function y(x){const T=_[x.type];let N;if(T){const O=Vn[T];N=Qh.clone(O.uniforms)}else N=x.uniforms;return N}function b(x,T){let N;for(let O=0,q=c.length;O<q;O++){const z=c[O];if(z.cacheKey===T){N=z,++N.usedTimes;break}}return N===void 0&&(N=new a0(s,T,x,r),c.push(N)),N}function w(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function M(x){l.remove(x)}function S(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:S}}function f0(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function d0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Nc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,m,_,p,h){let g=s[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:p,group:h},s[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=_,g.renderOrder=f.renderOrder,g.z=p,g.group=h),e++,g}function o(f,d,m,_,p,h){const g=a(f,d,m,_,p,h);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(f,d,m,_,p,h){const g=a(f,d,m,_,p,h);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(f,d){t.length>1&&t.sort(f||d0),n.length>1&&n.sort(d||Nc),i.length>1&&i.sort(d||Nc)}function u(){for(let f=e,d=s.length;f<d;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function h0(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new zc,s.set(n,[r])):i>=s.get(n).length?(r=new zc,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function p0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new je};break;case"SpotLight":t={position:new k,direction:new k,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function m0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let g0=0;function _0(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function v0(s,e){const t=new p0,n=m0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,a=new Mt,o=new Mt;function l(u,f){let d=0,m=0,_=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,h=0,g=0,v=0,y=0,b=0,w=0,M=0;u.sort(_0);const S=f!==!0?Math.PI:1;for(let T=0,N=u.length;T<N;T++){const O=u[T],q=O.color,z=O.intensity,F=O.distance,B=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)d+=q.r*z*S,m+=q.g*z*S,_+=q.b*z*S;else if(O.isLightProbe)for(let R=0;R<9;R++)i.probe[R].addScaledVector(O.sh.coefficients[R],z);else if(O.isDirectionalLight){const R=t.get(O);if(R.color.copy(O.color).multiplyScalar(O.intensity*S),O.castShadow){const D=O.shadow,C=n.get(O);C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,i.directionalShadow[p]=C,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=O.shadow.matrix,b++}i.directional[p]=R,p++}else if(O.isSpotLight){const R=t.get(O);if(R.position.setFromMatrixPosition(O.matrixWorld),R.color.copy(q).multiplyScalar(z*S),R.distance=F,R.coneCos=Math.cos(O.angle),R.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),R.decay=O.decay,O.castShadow){const D=O.shadow,C=n.get(O);C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,i.spotShadow[g]=C,i.spotShadowMap[g]=B,i.spotShadowMatrix[g]=O.shadow.matrix,M++}i.spot[g]=R,g++}else if(O.isRectAreaLight){const R=t.get(O);R.color.copy(q).multiplyScalar(z),R.halfWidth.set(O.width*.5,0,0),R.halfHeight.set(0,O.height*.5,0),i.rectArea[v]=R,v++}else if(O.isPointLight){const R=t.get(O);if(R.color.copy(O.color).multiplyScalar(O.intensity*S),R.distance=O.distance,R.decay=O.decay,O.castShadow){const D=O.shadow,C=n.get(O);C.shadowBias=D.bias,C.shadowNormalBias=D.normalBias,C.shadowRadius=D.radius,C.shadowMapSize=D.mapSize,C.shadowCameraNear=D.camera.near,C.shadowCameraFar=D.camera.far,i.pointShadow[h]=C,i.pointShadowMap[h]=B,i.pointShadowMatrix[h]=O.shadow.matrix,w++}i.point[h]=R,h++}else if(O.isHemisphereLight){const R=t.get(O);R.skyColor.copy(O.color).multiplyScalar(z*S),R.groundColor.copy(O.groundColor).multiplyScalar(z*S),i.hemi[y]=R,y++}}v>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const x=i.hash;(x.directionalLength!==p||x.pointLength!==h||x.spotLength!==g||x.rectAreaLength!==v||x.hemiLength!==y||x.numDirectionalShadows!==b||x.numPointShadows!==w||x.numSpotShadows!==M)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=v,i.point.length=h,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotShadowMatrix.length=M,x.directionalLength=p,x.pointLength=h,x.spotLength=g,x.rectAreaLength=v,x.hemiLength=y,x.numDirectionalShadows=b,x.numPointShadows=w,x.numSpotShadows=M,i.version=g0++)}function c(u,f){let d=0,m=0,_=0,p=0,h=0;const g=f.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const b=u[v];if(b.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),d++}else if(b.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(g),_++}else if(b.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),o.identity(),a.copy(b.matrixWorld),a.premultiply(g),o.extractRotation(a),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const w=i.hemi[h];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(g),h++}}}return{setup:l,setupView:c,state:i}}function Uc(s,e){const t=new v0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function x0(s,e){let t=new WeakMap;function n(r,a=0){let o;return t.has(r)===!1?(o=new Uc(s,e),t.set(r,[o])):a>=t.get(r).length?(o=new Uc(s,e),t.get(r).push(o)):o=t.get(r)[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class S0 extends Ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ih,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class b0 extends Ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
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
}`;function w0(s,e,t){let n=new hf;const i=new We,r=new We,a=new dt,o=new S0({depthPacking:Oh}),l=new b0,c={},u=t.maxTextureSize,f={0:Pn,1:ws,2:Xr},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:y0,fragmentShader:M0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new dr;_.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new li(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku,this.render=function(b,w,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;const S=s.getRenderTarget(),x=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Ai),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let O=0,q=b.length;O<q;O++){const z=b[O],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const B=F.getFrameExtents();if(i.multiply(B),r.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,F.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,F.mapSize.y=r.y)),F.map===null){const D=this.type!==ms?{minFilter:Gt,magFilter:Gt}:{};F.map=new cr(i.x,i.y,D),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const R=F.getViewportCount();for(let D=0;D<R;D++){const C=F.getViewport(D);a.set(r.x*C.x,r.y*C.y,r.x*C.z,r.y*C.w),N.viewport(a),F.updateMatrices(z,D),n=F.getFrustum(),y(w,M,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===ms&&g(F,M),F.needsUpdate=!1}h.needsUpdate=!1,s.setRenderTarget(S,x,T)};function g(b,w){const M=e.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new cr(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,M,d,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,M,m,p,null)}function v(b,w,M,S,x,T){let N=null;const O=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0?N=O:N=M.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const q=N.uuid,z=w.uuid;let F=c[q];F===void 0&&(F={},c[q]=F);let B=F[z];B===void 0&&(B=N.clone(),F[z]=B),N=B}return N.visible=w.visible,N.wireframe=w.wireframe,T===ms?N.side=w.shadowSide!==null?w.shadowSide:w.side:N.side=w.shadowSide!==null?w.shadowSide:f[w.side],N.alphaMap=w.alphaMap,N.alphaTest=w.alphaTest,N.clipShadows=w.clipShadows,N.clippingPlanes=w.clippingPlanes,N.clipIntersection=w.clipIntersection,N.displacementMap=w.displacementMap,N.displacementScale=w.displacementScale,N.displacementBias=w.displacementBias,N.wireframeLinewidth=w.wireframeLinewidth,N.linewidth=w.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(M.matrixWorld),N.nearDistance=S,N.farDistance=x),N}function y(b,w,M,S,x){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===ms)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const O=e.update(b),q=b.material;if(Array.isArray(q)){const z=O.groups;for(let F=0,B=z.length;F<B;F++){const R=z[F],D=q[R.materialIndex];if(D&&D.visible){const C=v(b,D,S,M.near,M.far,x);s.renderBufferDirect(M,null,O,C,b,R)}}}else if(q.visible){const z=v(b,q,S,M.near,M.far,x);s.renderBufferDirect(M,null,O,z,b,null)}}const N=b.children;for(let O=0,q=N.length;O<q;O++)y(N[O],w,M,S,x)}}function T0(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new dt;let se=null;const be=new dt(0,0,0,0);return{setMask:function(de){se!==de&&!P&&(s.colorMask(de,de,de,de),se=de)},setLocked:function(de){P=de},setClear:function(de,we,te,Te,Ue){Ue===!0&&(de*=Te,we*=Te,te*=Te),ae.set(de,we,te,Te),be.equals(ae)===!1&&(s.clearColor(de,we,te,Te),be.copy(ae))},reset:function(){P=!1,se=null,be.set(-1,0,0,0)}}}function r(){let P=!1,ae=null,se=null,be=null;return{setTest:function(de){de?fe(2929):Y(2929)},setMask:function(de){ae!==de&&!P&&(s.depthMask(de),ae=de)},setFunc:function(de){if(se!==de){if(de)switch(de){case ih:s.depthFunc(512);break;case rh:s.depthFunc(519);break;case sh:s.depthFunc(513);break;case Ro:s.depthFunc(515);break;case ah:s.depthFunc(514);break;case oh:s.depthFunc(518);break;case lh:s.depthFunc(516);break;case ch:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);se=de}},setLocked:function(de){P=de},setClear:function(de){be!==de&&(s.clearDepth(de),be=de)},reset:function(){P=!1,ae=null,se=null,be=null}}}function a(){let P=!1,ae=null,se=null,be=null,de=null,we=null,te=null,Te=null,Ue=null;return{setTest:function(ke){P||(ke?fe(2960):Y(2960))},setMask:function(ke){ae!==ke&&!P&&(s.stencilMask(ke),ae=ke)},setFunc:function(ke,Ft,zn){(se!==ke||be!==Ft||de!==zn)&&(s.stencilFunc(ke,Ft,zn),se=ke,be=Ft,de=zn)},setOp:function(ke,Ft,zn){(we!==ke||te!==Ft||Te!==zn)&&(s.stencilOp(ke,Ft,zn),we=ke,te=Ft,Te=zn)},setLocked:function(ke){P=ke},setClear:function(ke){Ue!==ke&&(s.clearStencil(ke),Ue=ke)},reset:function(){P=!1,ae=null,se=null,be=null,de=null,we=null,te=null,Te=null,Ue=null}}}const o=new i,l=new r,c=new a;let u={},f={},d=new WeakMap,m=[],_=null,p=!1,h=null,g=null,v=null,y=null,b=null,w=null,M=null,S=!1,x=null,T=null,N=null,O=null,q=null;const z=s.getParameter(35661);let F=!1,B=0;const R=s.getParameter(7938);R.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(R)[1]),F=B>=1):R.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),F=B>=2);let D=null,C={};const I=s.getParameter(3088),G=s.getParameter(2978),Q=new dt().fromArray(I),Z=new dt().fromArray(G);function ee(P,ae,se){const be=new Uint8Array(4),de=s.createTexture();s.bindTexture(P,de),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let we=0;we<se;we++)s.texImage2D(ae+we,0,6408,1,1,0,6408,5121,be);return de}const ne={};ne[3553]=ee(3553,3553,1),ne[34067]=ee(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(2929),l.setFunc(Ro),Tt(!1),Vt(Al),fe(2884),De(Ai);function fe(P){u[P]!==!0&&(s.enable(P),u[P]=!0)}function Y(P){u[P]!==!1&&(s.disable(P),u[P]=!1)}function Je(P,ae){return f[P]!==ae?(s.bindFramebuffer(P,ae),f[P]=ae,n&&(P===36009&&(f[36160]=ae),P===36160&&(f[36009]=ae)),!0):!1}function J(P,ae){let se=m,be=!1;if(P)if(se=d.get(ae),se===void 0&&(se=[],d.set(ae,se)),P.isWebGLMultipleRenderTargets){const de=P.texture;if(se.length!==de.length||se[0]!==36064){for(let we=0,te=de.length;we<te;we++)se[we]=36064+we;se.length=de.length,be=!0}}else se[0]!==36064&&(se[0]=36064,be=!0);else se[0]!==1029&&(se[0]=1029,be=!0);be&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function X(P){return _!==P?(s.useProgram(P),_=P,!0):!1}const ie={[Or]:32774,[Xd]:32778,[Yd]:32779};if(n)ie[Dl]=32775,ie[Pl]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ie[Dl]=P.MIN_EXT,ie[Pl]=P.MAX_EXT)}const Ve={[jd]:0,[Kd]:1,[Zd]:768,[Zu]:770,[nh]:776,[eh]:774,[Qd]:772,[Jd]:769,[Ju]:771,[th]:775,[$d]:773};function De(P,ae,se,be,de,we,te,Te){if(P===Ai){p===!0&&(Y(3042),p=!1);return}if(p===!1&&(fe(3042),p=!0),P!==qd){if(P!==h||Te!==S){if((g!==Or||b!==Or)&&(s.blendEquation(32774),g=Or,b=Or),Te)switch(P){case kr:s.blendFuncSeparate(1,771,1,771);break;case Cl:s.blendFunc(1,1);break;case Ll:s.blendFuncSeparate(0,769,0,1);break;case Rl:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case kr:s.blendFuncSeparate(770,771,1,771);break;case Cl:s.blendFunc(770,1);break;case Ll:s.blendFuncSeparate(0,769,0,1);break;case Rl:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,y=null,w=null,M=null,h=P,S=Te}return}de=de||ae,we=we||se,te=te||be,(ae!==g||de!==b)&&(s.blendEquationSeparate(ie[ae],ie[de]),g=ae,b=de),(se!==v||be!==y||we!==w||te!==M)&&(s.blendFuncSeparate(Ve[se],Ve[be],Ve[we],Ve[te]),v=se,y=be,w=we,M=te),h=P,S=null}function ye(P,ae){P.side===Xr?Y(2884):fe(2884);let se=P.side===Pn;ae&&(se=!se),Tt(se),P.blending===kr&&P.transparent===!1?De(Ai):De(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const be=P.stencilWrite;c.setTest(be),be&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Nn(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?fe(32926):Y(32926)}function Tt(P){x!==P&&(P?s.frontFace(2304):s.frontFace(2305),x=P)}function Vt(P){P!==Vd?(fe(2884),P!==T&&(P===Al?s.cullFace(1029):P===Gd?s.cullFace(1028):s.cullFace(1032))):Y(2884),T=P}function Jt(P){P!==N&&(F&&s.lineWidth(P),N=P)}function Nn(P,ae,se){P?(fe(32823),(O!==ae||q!==se)&&(s.polygonOffset(ae,se),O=ae,q=se)):Y(32823)}function vt(P){P?fe(3089):Y(3089)}function He(P){P===void 0&&(P=33984+z-1),D!==P&&(s.activeTexture(P),D=P)}function Zn(P,ae){D===null&&He();let se=C[D];se===void 0&&(se={type:void 0,texture:void 0},C[D]=se),(se.type!==P||se.texture!==ae)&&(s.bindTexture(P,ae||ne[P]),se.type=P,se.texture=ae)}function Jn(){const P=C[D];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function L(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(P){Q.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function me(P){Z.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function ue(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},D=null,C={},f={},d=new WeakMap,m=[],_=null,p=!1,h=null,g=null,v=null,y=null,b=null,w=null,M=null,S=!1,x=null,T=null,N=null,O=null,q=null,Q.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:Y,bindFramebuffer:Je,drawBuffers:J,useProgram:X,setBlending:De,setMaterial:ye,setFlipSided:Tt,setCullFace:Vt,setLineWidth:Jt,setPolygonOffset:Nn,setScissorTest:vt,activeTexture:He,bindTexture:Zn,unbindTexture:Jn,compressedTexImage2D:L,texImage2D:Ee,texImage3D:H,texStorage2D:re,texStorage3D:ce,texSubImage2D:E,texSubImage3D:j,compressedTexSubImage2D:$,scissor:ve,viewport:me,reset:ue}}function E0(s,e,t,n,i,r,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,E){return g?new OffscreenCanvas(L,E):Es("canvas")}function y(L,E,j,$){let re=1;if((L.width>$||L.height>$)&&(re=$/Math.max(L.width,L.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ce=E?No:Math.floor,Ee=ce(re*L.width),H=ce(re*L.height);p===void 0&&(p=v(Ee,H));const ve=j?v(Ee,H):p;return ve.width=Ee,ve.height=H,ve.getContext("2d").drawImage(L,0,0,Ee,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ee+"x"+H+")."),ve}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return sc(L.width)&&sc(L.height)}function w(L){return o?!1:L.wrapS!==Ln||L.wrapT!==Ln||L.minFilter!==Gt&&L.minFilter!==fn}function M(L,E){return L.generateMipmaps&&E&&L.minFilter!==Gt&&L.minFilter!==fn}function S(L){s.generateMipmap(L)}function x(L,E,j,$,re=!1){if(o===!1)return E;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=E;return E===6403&&(j===5126&&(ce=33326),j===5131&&(ce=33325),j===5121&&(ce=33321)),E===33319&&(j===5126&&(ce=33328),j===5131&&(ce=33327),j===5121&&(ce=33323)),E===6408&&(j===5126&&(ce=34836),j===5131&&(ce=34842),j===5121&&(ce=$===$e&&re===!1?35907:32856),j===32819&&(ce=32854),j===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function T(L,E,j){return M(L,j)===!0||L.isFramebufferTexture&&L.minFilter!==Gt&&L.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function N(L){return L===Gt||L===Il||L===Ol?9728:9729}function O(L){const E=L.target;E.removeEventListener("dispose",O),z(E),E.isVideoTexture&&_.delete(E)}function q(L){const E=L.target;E.removeEventListener("dispose",q),B(E)}function z(L){const E=n.get(L);if(E.__webglInit===void 0)return;const j=L.source,$=h.get(j);if($){const re=$[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(L),Object.keys($).length===0&&h.delete(j)}n.remove(L)}function F(L){const E=n.get(L);s.deleteTexture(E.__webglTexture);const j=L.source,$=h.get(j);delete $[E.__cacheKey],a.memory.textures--}function B(L){const E=L.texture,j=n.get(L),$=n.get(E);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)s.deleteFramebuffer(j.__webglFramebuffer[re]),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer[re]);else{if(s.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&s.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&s.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let re=0;re<j.__webglColorRenderbuffer.length;re++)j.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(j.__webglColorRenderbuffer[re]);j.__webglDepthRenderbuffer&&s.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let re=0,ce=E.length;re<ce;re++){const Ee=n.get(E[re]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(E[re])}n.remove(E),n.remove(L)}let R=0;function D(){R=0}function C(){const L=R;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),R+=1,L}function I(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join()}function G(L,E){const j=n.get(L);if(L.isVideoTexture&&Zn(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(j,L,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,j.__webglTexture)}function Q(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){J(j,L,E);return}t.activeTexture(33984+E),t.bindTexture(35866,j.__webglTexture)}function Z(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){J(j,L,E);return}t.activeTexture(33984+E),t.bindTexture(32879,j.__webglTexture)}function ee(L,E){const j=n.get(L);if(L.version>0&&j.__version!==L.version){X(j,L,E);return}t.activeTexture(33984+E),t.bindTexture(34067,j.__webglTexture)}const ne={[Io]:10497,[Ln]:33071,[Oo]:33648},fe={[Gt]:9728,[Il]:9984,[Ol]:9986,[fn]:9729,[_h]:9985,[La]:9987};function Y(L,E,j){if(j?(s.texParameteri(L,10242,ne[E.wrapS]),s.texParameteri(L,10243,ne[E.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,ne[E.wrapR]),s.texParameteri(L,10240,fe[E.magFilter]),s.texParameteri(L,10241,fe[E.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(E.wrapS!==Ln||E.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,N(E.magFilter)),s.texParameteri(L,10241,N(E.minFilter)),E.minFilter!==Gt&&E.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(E.type===Ki&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ts&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Je(L,E){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",O));const $=E.source;let re=h.get($);re===void 0&&(re={},h.set($,re));const ce=I(E);if(ce!==L.__cacheKey){re[ce]===void 0&&(re[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),re[ce].usedTimes++;const Ee=re[L.__cacheKey];Ee!==void 0&&(re[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&F(E)),L.__cacheKey=ce,L.__webglTexture=re[ce].texture}return j}function J(L,E,j){let $=3553;E.isDataArrayTexture&&($=35866),E.isData3DTexture&&($=32879);const re=Je(L,E),ce=E.source;if(t.activeTexture(33984+j),t.bindTexture($,L.__webglTexture),ce.version!==ce.__currentVersion||re===!0){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const Ee=w(E)&&b(E.image)===!1;let H=y(E.image,Ee,!1,u);H=Jn(E,H);const ve=b(H)||o,me=r.convert(E.format,E.encoding);let ue=r.convert(E.type),P=x(E.internalFormat,me,ue,E.encoding,E.isVideoTexture);Y($,E,ve);let ae;const se=E.mipmaps,be=o&&E.isVideoTexture!==!0,de=ce.__currentVersion===void 0||re===!0,we=T(E,H,ve);if(E.isDepthTexture)P=6402,o?E.type===Ki?P=36012:E.type===ji?P=33190:E.type===Br?P=35056:P=33189:E.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===tr&&P===6402&&E.type!==ef&&E.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ji,ue=r.convert(E.type)),E.format===Kr&&P===6402&&(P=34041,E.type!==Br&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Br,ue=r.convert(E.type))),de&&(be?t.texStorage2D(3553,1,P,H.width,H.height):t.texImage2D(3553,0,P,H.width,H.height,0,me,ue,null));else if(E.isDataTexture)if(se.length>0&&ve){be&&de&&t.texStorage2D(3553,we,P,se[0].width,se[0].height);for(let te=0,Te=se.length;te<Te;te++)ae=se[te],be?t.texSubImage2D(3553,te,0,0,ae.width,ae.height,me,ue,ae.data):t.texImage2D(3553,te,P,ae.width,ae.height,0,me,ue,ae.data);E.generateMipmaps=!1}else be?(de&&t.texStorage2D(3553,we,P,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,me,ue,H.data)):t.texImage2D(3553,0,P,H.width,H.height,0,me,ue,H.data);else if(E.isCompressedTexture){be&&de&&t.texStorage2D(3553,we,P,se[0].width,se[0].height);for(let te=0,Te=se.length;te<Te;te++)ae=se[te],E.format!==Wn?me!==null?be?t.compressedTexSubImage2D(3553,te,0,0,ae.width,ae.height,me,ae.data):t.compressedTexImage2D(3553,te,P,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?t.texSubImage2D(3553,te,0,0,ae.width,ae.height,me,ue,ae.data):t.texImage2D(3553,te,P,ae.width,ae.height,0,me,ue,ae.data)}else if(E.isDataArrayTexture)be?(de&&t.texStorage3D(35866,we,P,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,me,ue,H.data)):t.texImage3D(35866,0,P,H.width,H.height,H.depth,0,me,ue,H.data);else if(E.isData3DTexture)be?(de&&t.texStorage3D(32879,we,P,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,me,ue,H.data)):t.texImage3D(32879,0,P,H.width,H.height,H.depth,0,me,ue,H.data);else if(E.isFramebufferTexture){if(de)if(be)t.texStorage2D(3553,we,P,H.width,H.height);else{let te=H.width,Te=H.height;for(let Ue=0;Ue<we;Ue++)t.texImage2D(3553,Ue,P,te,Te,0,me,ue,null),te>>=1,Te>>=1}}else if(se.length>0&&ve){be&&de&&t.texStorage2D(3553,we,P,se[0].width,se[0].height);for(let te=0,Te=se.length;te<Te;te++)ae=se[te],be?t.texSubImage2D(3553,te,0,0,me,ue,ae):t.texImage2D(3553,te,P,me,ue,ae);E.generateMipmaps=!1}else be?(de&&t.texStorage2D(3553,we,P,H.width,H.height),t.texSubImage2D(3553,0,0,0,me,ue,H)):t.texImage2D(3553,0,P,me,ue,H);M(E,ve)&&S($),ce.__currentVersion=ce.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function X(L,E,j){if(E.image.length!==6)return;const $=Je(L,E),re=E.source;if(t.activeTexture(33984+j),t.bindTexture(34067,L.__webglTexture),re.version!==re.__currentVersion||$===!0){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const ce=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,H=[];for(let te=0;te<6;te++)!ce&&!Ee?H[te]=y(E.image[te],!1,!0,c):H[te]=Ee?E.image[te].image:E.image[te],H[te]=Jn(E,H[te]);const ve=H[0],me=b(ve)||o,ue=r.convert(E.format,E.encoding),P=r.convert(E.type),ae=x(E.internalFormat,ue,P,E.encoding),se=o&&E.isVideoTexture!==!0,be=re.__currentVersion===void 0||$===!0;let de=T(E,ve,me);Y(34067,E,me);let we;if(ce){se&&be&&t.texStorage2D(34067,de,ae,ve.width,ve.height);for(let te=0;te<6;te++){we=H[te].mipmaps;for(let Te=0;Te<we.length;Te++){const Ue=we[Te];E.format!==Wn?ue!==null?se?t.compressedTexSubImage2D(34069+te,Te,0,0,Ue.width,Ue.height,ue,Ue.data):t.compressedTexImage2D(34069+te,Te,ae,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?t.texSubImage2D(34069+te,Te,0,0,Ue.width,Ue.height,ue,P,Ue.data):t.texImage2D(34069+te,Te,ae,Ue.width,Ue.height,0,ue,P,Ue.data)}}}else{we=E.mipmaps,se&&be&&(we.length>0&&de++,t.texStorage2D(34067,de,ae,H[0].width,H[0].height));for(let te=0;te<6;te++)if(Ee){se?t.texSubImage2D(34069+te,0,0,0,H[te].width,H[te].height,ue,P,H[te].data):t.texImage2D(34069+te,0,ae,H[te].width,H[te].height,0,ue,P,H[te].data);for(let Te=0;Te<we.length;Te++){const ke=we[Te].image[te].image;se?t.texSubImage2D(34069+te,Te+1,0,0,ke.width,ke.height,ue,P,ke.data):t.texImage2D(34069+te,Te+1,ae,ke.width,ke.height,0,ue,P,ke.data)}}else{se?t.texSubImage2D(34069+te,0,0,0,ue,P,H[te]):t.texImage2D(34069+te,0,ae,ue,P,H[te]);for(let Te=0;Te<we.length;Te++){const Ue=we[Te];se?t.texSubImage2D(34069+te,Te+1,0,0,ue,P,Ue.image[te]):t.texImage2D(34069+te,Te+1,ae,ue,P,Ue.image[te])}}}M(E,me)&&S(34067),re.__currentVersion=re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ie(L,E,j,$,re){const ce=r.convert(j.format,j.encoding),Ee=r.convert(j.type),H=x(j.internalFormat,ce,Ee,j.encoding);n.get(E).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,H,E.width,E.height,E.depth,0,ce,Ee,null):t.texImage2D(re,0,H,E.width,E.height,0,ce,Ee,null)),t.bindFramebuffer(36160,L),He(E)?d.framebufferTexture2DMultisampleEXT(36160,$,re,n.get(j).__webglTexture,0,vt(E)):s.framebufferTexture2D(36160,$,re,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ve(L,E,j){if(s.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let $=33189;if(j||He(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===Ki?$=36012:re.type===ji&&($=33190));const ce=vt(E);He(E)?d.renderbufferStorageMultisampleEXT(36161,ce,$,E.width,E.height):s.renderbufferStorageMultisample(36161,ce,$,E.width,E.height)}else s.renderbufferStorage(36161,$,E.width,E.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){const $=vt(E);j&&He(E)===!1?s.renderbufferStorageMultisample(36161,$,35056,E.width,E.height):He(E)?d.renderbufferStorageMultisampleEXT(36161,$,35056,E.width,E.height):s.renderbufferStorage(36161,34041,E.width,E.height),s.framebufferRenderbuffer(36160,33306,36161,L)}else{const $=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<$.length;re++){const ce=$[re],Ee=r.convert(ce.format,ce.encoding),H=r.convert(ce.type),ve=x(ce.internalFormat,Ee,H,ce.encoding),me=vt(E);j&&He(E)===!1?s.renderbufferStorageMultisample(36161,me,ve,E.width,E.height):He(E)?d.renderbufferStorageMultisampleEXT(36161,me,ve,E.width,E.height):s.renderbufferStorage(36161,ve,E.width,E.height)}}s.bindRenderbuffer(36161,null)}function De(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const $=n.get(E.depthTexture).__webglTexture,re=vt(E);if(E.depthTexture.format===tr)He(E)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,re):s.framebufferTexture2D(36160,36096,3553,$,0);else if(E.depthTexture.format===Kr)He(E)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,re):s.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function ye(L){const E=n.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");De(E.__webglFramebuffer,L)}else if(j){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]=s.createRenderbuffer(),Ve(E.__webglDepthbuffer[$],L,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Ve(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Tt(L,E,j){const $=n.get(L);E!==void 0&&ie($.__webglFramebuffer,L,L.texture,36064,3553),j!==void 0&&ye(L)}function Vt(L){const E=L.texture,j=n.get(L),$=n.get(E);L.addEventListener("dispose",q),L.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,a.memory.textures++);const re=L.isWebGLCubeRenderTarget===!0,ce=L.isWebGLMultipleRenderTargets===!0,Ee=b(L)||o;if(re){j.__webglFramebuffer=[];for(let H=0;H<6;H++)j.__webglFramebuffer[H]=s.createFramebuffer()}else{if(j.__webglFramebuffer=s.createFramebuffer(),ce)if(i.drawBuffers){const H=L.texture;for(let ve=0,me=H.length;ve<me;ve++){const ue=n.get(H[ve]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&He(L)===!1){const H=ce?E:[E];j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let ve=0;ve<H.length;ve++){const me=H[ve];j.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(36161,j.__webglColorRenderbuffer[ve]);const ue=r.convert(me.format,me.encoding),P=r.convert(me.type),ae=x(me.internalFormat,ue,P,me.encoding),se=vt(L);s.renderbufferStorageMultisample(36161,se,ae,L.width,L.height),s.framebufferRenderbuffer(36160,36064+ve,36161,j.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(36161,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Ve(j.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,$.__webglTexture),Y(34067,E,Ee);for(let H=0;H<6;H++)ie(j.__webglFramebuffer[H],L,E,36064,34069+H);M(E,Ee)&&S(34067),t.unbindTexture()}else if(ce){const H=L.texture;for(let ve=0,me=H.length;ve<me;ve++){const ue=H[ve],P=n.get(ue);t.bindTexture(3553,P.__webglTexture),Y(3553,ue,Ee),ie(j.__webglFramebuffer,L,ue,36064+ve,3553),M(ue,Ee)&&S(3553)}t.unbindTexture()}else{let H=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?H=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(H,$.__webglTexture),Y(H,E,Ee),ie(j.__webglFramebuffer,L,E,36064,H),M(E,Ee)&&S(H),t.unbindTexture()}L.depthBuffer&&ye(L)}function Jt(L){const E=b(L)||o,j=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let $=0,re=j.length;$<re;$++){const ce=j[$];if(M(ce,E)){const Ee=L.isWebGLCubeRenderTarget?34067:3553,H=n.get(ce).__webglTexture;t.bindTexture(Ee,H),S(Ee),t.unbindTexture()}}}function Nn(L){if(o&&L.samples>0&&He(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],j=L.width,$=L.height;let re=16384;const ce=[],Ee=L.stencilBuffer?33306:36096,H=n.get(L),ve=L.isWebGLMultipleRenderTargets===!0;if(ve)for(let me=0;me<E.length;me++)t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,H.__webglFramebuffer),s.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,H.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,H.__webglFramebuffer);for(let me=0;me<E.length;me++){ce.push(36064+me),L.depthBuffer&&ce.push(Ee);const ue=H.__ignoreDepthValues!==void 0?H.__ignoreDepthValues:!1;if(ue===!1&&(L.depthBuffer&&(re|=256),L.stencilBuffer&&(re|=1024)),ve&&s.framebufferRenderbuffer(36008,36064,36161,H.__webglColorRenderbuffer[me]),ue===!0&&(s.invalidateFramebuffer(36008,[Ee]),s.invalidateFramebuffer(36009,[Ee])),ve){const P=n.get(E[me]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,P,0)}s.blitFramebuffer(0,0,j,$,0,0,j,$,re,9728),m&&s.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ve)for(let me=0;me<E.length;me++){t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+me,36161,H.__webglColorRenderbuffer[me]);const ue=n.get(E[me]).__webglTexture;t.bindFramebuffer(36160,H.__webglFramebuffer),s.framebufferTexture2D(36009,36064+me,3553,ue,0)}t.bindFramebuffer(36009,H.__webglMultisampledFramebuffer)}}function vt(L){return Math.min(f,L.samples)}function He(L){const E=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Zn(L){const E=a.render.frame;_.get(L)!==E&&(_.set(L,E),L.update())}function Jn(L,E){const j=L.encoding,$=L.format,re=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Fo||j!==lr&&(j===$e?o===!1?e.has("EXT_sRGB")===!0&&$===Wn?(L.format=Fo,L.minFilter=fn,L.generateMipmaps=!1):E=rf.sRGBToLinear(E):($!==Wn||re!==or)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),E}this.allocateTextureUnit=C,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=Tt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Nn,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=He}function A0(s,e,t){const n=t.isWebGL2;function i(r,a=null){let o;if(r===or)return 5121;if(r===bh)return 32819;if(r===yh)return 32820;if(r===vh)return 5120;if(r===xh)return 5122;if(r===ef)return 5123;if(r===Sh)return 5124;if(r===ji)return 5125;if(r===Ki)return 5126;if(r===Ts)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Mh)return 6406;if(r===Wn)return 6408;if(r===Th)return 6409;if(r===Eh)return 6410;if(r===tr)return 6402;if(r===Kr)return 34041;if(r===Ah)return 6403;if(r===wh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Fo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ch)return 36244;if(r===Lh)return 33319;if(r===Rh)return 33320;if(r===Dh)return 36249;if(r===ka||r===Ba||r===Va||r===Ga)if(a===$e)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ka)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ka)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ba)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Va)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ga)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fl||r===Nl||r===zl||r===Ul)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Fl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ul)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ph)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===kl||r===Bl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===kl)return a===$e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Bl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Vl||r===Gl||r===Wl||r===Hl||r===ql||r===Xl||r===Yl||r===jl||r===Kl||r===Zl||r===Jl||r===Ql||r===$l||r===ec)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Vl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ql)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ql)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$l)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ec)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===tc)return a===$e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Br?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class C0 extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class la extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L0={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const v=new la;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[p.jointName]=v,c.add(v)}const g=c.joints[p.jointName];h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}}class R0 extends gn{constructor(e,t,n,i,r,a,o,l,c,u){if(u=u!==void 0?u:tr,u!==tr&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===tr&&(n=ji),n===void 0&&u===Kr&&(n=Br),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1}}class D0 extends ss{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const _=t.getContextAttributes();let p=null,h=null;const g=[],v=[],y=new Cn;y.layers.enable(1),y.viewport=new dt;const b=new Cn;b.layers.enable(2),b.viewport=new dt;const w=[y,b],M=new C0;M.layers.enable(1),M.layers.enable(2);let S=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let G=g[I];return G===void 0&&(G=new vo,g[I]=G),G.getTargetRaySpace()},this.getControllerGrip=function(I){let G=g[I];return G===void 0&&(G=new vo,g[I]=G),G.getGripSpace()},this.getHand=function(I){let G=g[I];return G===void 0&&(G=new vo,g[I]=G),G.getHandSpace()};function T(I){const G=v.indexOf(I.inputSource);if(G===-1)return;const Q=g[G];Q!==void 0&&Q.dispatchEvent({type:I.type,data:I.inputSource})}function N(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",O);for(let I=0;I<g.length;I++){const G=v[I];G!==null&&(v[I]=null,g[I].disconnect(G))}S=null,x=null,e.setRenderTarget(p),d=null,f=null,u=null,i=null,h=null,C.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){o=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",N),i.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,G),i.updateRenderState({baseLayer:d}),h=new cr(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:or,encoding:e.outputEncoding})}else{let G=null,Q=null,Z=null;_.depth&&(Z=_.stencil?35056:33190,G=_.stencil?Kr:tr,Q=_.stencil?Br:ji);const ee={colorFormat:32856,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ee),i.updateRenderState({layers:[f]}),h=new cr(f.textureWidth,f.textureHeight,{format:Wn,type:or,depthTexture:new R0(f.textureWidth,f.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ne=e.properties.get(h);ne.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await i.requestReferenceSpace(o),C.setContext(i),C.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(I){for(let G=0;G<I.removed.length;G++){const Q=I.removed[G],Z=v.indexOf(Q);Z>=0&&(v[Z]=null,g[Z].dispatchEvent({type:"disconnected",data:Q}))}for(let G=0;G<I.added.length;G++){const Q=I.added[G];let Z=v.indexOf(Q);if(Z===-1){for(let ne=0;ne<g.length;ne++)if(ne>=v.length){v.push(Q),Z=ne;break}else if(v[ne]===null){v[ne]=Q,Z=ne;break}if(Z===-1)break}const ee=g[Z];ee&&ee.dispatchEvent({type:"connected",data:Q})}}const q=new k,z=new k;function F(I,G,Q){q.setFromMatrixPosition(G.matrixWorld),z.setFromMatrixPosition(Q.matrixWorld);const Z=q.distanceTo(z),ee=G.projectionMatrix.elements,ne=Q.projectionMatrix.elements,fe=ee[14]/(ee[10]-1),Y=ee[14]/(ee[10]+1),Je=(ee[9]+1)/ee[5],J=(ee[9]-1)/ee[5],X=(ee[8]-1)/ee[0],ie=(ne[8]+1)/ne[0],Ve=fe*X,De=fe*ie,ye=Z/(-X+ie),Tt=ye*-X;G.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Tt),I.translateZ(ye),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Vt=fe+ye,Jt=Y+ye,Nn=Ve-Tt,vt=De+(Z-Tt),He=Je*Y/Jt*Vt,Zn=J*Y/Jt*Vt;I.projectionMatrix.makePerspective(Nn,vt,He,Zn,Vt,Jt)}function B(I,G){G===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(G.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;M.near=b.near=y.near=I.near,M.far=b.far=y.far=I.far,(S!==M.near||x!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,x=M.far);const G=I.parent,Q=M.cameras;B(M,G);for(let ee=0;ee<Q.length;ee++)B(Q[ee],G);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),I.position.copy(M.position),I.quaternion.copy(M.quaternion),I.scale.copy(M.scale),I.matrix.copy(M.matrix),I.matrixWorld.copy(M.matrixWorld);const Z=I.children;for(let ee=0,ne=Z.length;ee<ne;ee++)Z[ee].updateMatrixWorld(!0);Q.length===2?F(M,y,b):M.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(I){f!==null&&(f.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)};let R=null;function D(I,G){if(c=G.getViewerPose(l||a),m=G,c!==null){const Q=c.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let Z=!1;Q.length!==M.cameras.length&&(M.cameras.length=0,Z=!0);for(let ee=0;ee<Q.length;ee++){const ne=Q[ee];let fe=null;if(d!==null)fe=d.getViewport(ne);else{const Je=u.getViewSubImage(f,ne);fe=Je.viewport,ee===0&&(e.setRenderTargetTextures(h,Je.colorTexture,f.ignoreDepthValues?void 0:Je.depthStencilTexture),e.setRenderTarget(h))}let Y=w[ee];Y===void 0&&(Y=new Cn,Y.layers.enable(ee),Y.viewport=new dt,w[ee]=Y),Y.matrix.fromArray(ne.transform.matrix),Y.projectionMatrix.fromArray(ne.projectionMatrix),Y.viewport.set(fe.x,fe.y,fe.width,fe.height),ee===0&&M.matrix.copy(Y.matrix),Z===!0&&M.cameras.push(Y)}}for(let Q=0;Q<g.length;Q++){const Z=v[Q],ee=g[Q];Z!==null&&ee!==void 0&&ee.update(Z,G,l||a)}R&&R(I,G),m=null}const C=new pf;C.setAnimationLoop(D),this.setAnimationLoop=function(I){R=I},this.dispose=function(){}}}function P0(s,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,g,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?i(p,h):h.isMeshToonMaterial?(i(p,h),u(p,h)):h.isMeshPhongMaterial?(i(p,h),c(p,h)):h.isMeshStandardMaterial?(i(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,y)):h.isMeshMatcapMaterial?(i(p,h),m(p,h)):h.isMeshDepthMaterial?i(p,h):h.isMeshDistanceMaterial?(i(p,h),_(p,h)):h.isMeshNormalMaterial?i(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?o(p,h,g,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function i(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Pn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Pn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const b=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*b}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;h.aoMap?y=h.aoMap:h.lightMap&&(y=h.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function o(p,h,g,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*g,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let y;h.map?y=h.map:h.alphaMap&&(y=h.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,g){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Pn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function I0(){const s=Es("canvas");return s.style.display="block",s}function bf(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:I0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,d=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=lr,this.physicallyCorrectLights=!1,this.toneMapping=ci,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,g=0,v=0,y=null,b=-1,w=null;const M=new dt,S=new dt;let x=null,T=e.width,N=e.height,O=1,q=null,z=null;const F=new dt(0,0,T,N),B=new dt(0,0,T,N);let R=!1;const D=new hf;let C=!1,I=!1,G=null;const Q=new Mt,Z=new We,ee=new k,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return y===null?O:1}let Y=t;function Je(A,U){for(let W=0;W<A.length;W++){const V=A[W],K=e.getContext(V,U);if(K!==null)return K}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${tl}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",se,!1),Y===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),Y=Je(U,A),Y===null)throw Je(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,X,ie,Ve,De,ye,Tt,Vt,Jt,Nn,vt,He,Zn,Jn,L,E,j,$,re,ce,Ee,H,ve;function me(){J=new Hg(Y),X=new Ug(Y,J,s),J.init(X),H=new A0(Y,J,X),ie=new T0(Y,J,X),Ve=new Yg,De=new f0,ye=new E0(Y,J,ie,De,X,H,Ve),Tt=new Bg(p),Vt=new Wg(p),Jt=new sp(Y,X),ve=new Ng(Y,J,Jt,X),Nn=new qg(Y,Jt,Ve,ve),vt=new Jg(Y,Nn,Jt,Ve),re=new Zg(Y,X,ye),E=new kg(De),He=new u0(p,Tt,Vt,J,X,ve,E),Zn=new P0(p,De),Jn=new h0,L=new x0(J,X),$=new Fg(p,Tt,ie,vt,u,a),j=new w0(p,vt,X),ce=new zg(Y,J,Ve,X),Ee=new Xg(Y,J,Ve,X),Ve.programs=He.programs,p.capabilities=X,p.extensions=J,p.properties=De,p.renderLists=Jn,p.shadowMap=j,p.state=ie,p.info=Ve}me();const ue=new D0(p,Y);this.xr=ue,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(T,N,!1))},this.getSize=function(A){return A.set(T,N)},this.setSize=function(A,U,W){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,N=U,e.width=Math.floor(A*O),e.height=Math.floor(U*O),W!==!1&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(T*O,N*O).floor()},this.setDrawingBufferSize=function(A,U,W){T=A,N=U,O=W,e.width=Math.floor(A*W),e.height=Math.floor(U*W),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,U,W,V){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,U,W,V),ie.viewport(M.copy(F).multiplyScalar(O).floor())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,U,W,V){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,U,W,V),ie.scissor(S.copy(B).multiplyScalar(O).floor())},this.getScissorTest=function(){return R},this.setScissorTest=function(A){ie.setScissorTest(R=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,U=!0,W=!0){let V=0;A&&(V|=16384),U&&(V|=256),W&&(V|=1024),Y.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",se,!1),Jn.dispose(),L.dispose(),De.dispose(),Tt.dispose(),Vt.dispose(),vt.dispose(),ve.dispose(),He.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ue),ue.removeEventListener("sessionend",ke),G&&(G.dispose(),G=null),Ft.stop()};function P(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const A=Ve.autoReset,U=j.enabled,W=j.autoUpdate,V=j.needsUpdate,K=j.type;me(),Ve.autoReset=A,j.enabled=U,j.autoUpdate=W,j.needsUpdate=V,j.type=K}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function be(A){const U=A.target;U.removeEventListener("dispose",be),de(U)}function de(A){we(A),De.remove(A)}function we(A){const U=De.get(A).programs;U!==void 0&&(U.forEach(function(W){He.releaseProgram(W)}),A.isShaderMaterial&&He.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,W,V,K,Me){U===null&&(U=ne);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Le=Ad(A,U,W,V,K);ie.setMaterial(V,Ae);let Ce=W.index;const Be=W.attributes.position;if(Ce===null){if(Be===void 0||Be.count===0)return}else if(Ce.count===0)return;let Fe=1;V.wireframe===!0&&(Ce=Nn.getWireframeAttribute(W),Fe=2),ve.setup(K,V,Le,W,Ce);let Ne,Qe=ce;Ce!==null&&(Ne=Jt.get(Ce),Qe=Ee,Qe.setIndex(Ne));const Ui=Ce!==null?Ce.count:Be.count,gr=W.drawRange.start*Fe,_r=W.drawRange.count*Fe,Un=Me!==null?Me.start*Fe:0,ze=Me!==null?Me.count*Fe:1/0,vr=Math.max(gr,Un),it=Math.min(Ui,gr+_r,Un+ze)-1,kn=Math.max(0,it-vr+1);if(kn!==0){if(K.isMesh)V.wireframe===!0?(ie.setLineWidth(V.wireframeLinewidth*fe()),Qe.setMode(1)):Qe.setMode(4);else if(K.isLine){let mi=V.linewidth;mi===void 0&&(mi=1),ie.setLineWidth(mi*fe()),K.isLineSegments?Qe.setMode(1):K.isLineLoop?Qe.setMode(2):Qe.setMode(3)}else K.isPoints?Qe.setMode(0):K.isSprite&&Qe.setMode(4);if(K.isInstancedMesh)Qe.renderInstances(vr,kn,K.count);else if(W.isInstancedBufferGeometry){const mi=Math.min(W.instanceCount,W._maxInstanceCount);Qe.renderInstances(vr,kn,mi)}else Qe.render(vr,kn)}},this.compile=function(A,U){d=L.get(A),d.init(),_.push(d),A.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(p.physicallyCorrectLights),A.traverse(function(W){const V=W.material;if(V)if(Array.isArray(V))for(let K=0;K<V.length;K++){const Me=V[K];Na(Me,A,W)}else Na(V,A,W)}),_.pop(),d=null};let te=null;function Te(A){te&&te(A)}function Ue(){Ft.stop()}function ke(){Ft.start()}const Ft=new pf;Ft.setAnimationLoop(Te),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(A){te=A,ue.setAnimationLoop(A),A===null?Ft.stop():Ft.start()},ue.addEventListener("sessionstart",Ue),ue.addEventListener("sessionend",ke),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(U),U=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,U,y),d=L.get(A,_.length),d.init(),_.push(d),Q.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),D.setFromProjectionMatrix(Q),I=this.localClippingEnabled,C=E.init(this.clippingPlanes,I,U),f=Jn.get(A,m.length),f.init(),m.push(f),zn(A,U,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(q,z),C===!0&&E.beginShadows();const W=d.state.shadowsArray;if(j.render(W,A,U),C===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(f,A),d.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const V=U.cameras;for(let K=0,Me=V.length;K<Me;K++){const Ae=V[K];yl(f,A,Ae,Ae.viewport)}}else yl(f,A,U);y!==null&&(ye.updateMultisampleRenderTarget(y),ye.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(p,A,U),ve.resetDefaultState(),b=-1,w=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function zn(A,U,W,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||D.intersectsSprite(A)){V&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Ae=vt.update(A),Le=A.material;Le.visible&&f.push(A,Ae,Le,W,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ve.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ve.render.frame),!A.frustumCulled||D.intersectsObject(A))){V&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Ae=vt.update(A),Le=A.material;if(Array.isArray(Le)){const Ce=Ae.groups;for(let Be=0,Fe=Ce.length;Be<Fe;Be++){const Ne=Ce[Be],Qe=Le[Ne.materialIndex];Qe&&Qe.visible&&f.push(A,Ae,Qe,W,ee.z,Ne)}}else Le.visible&&f.push(A,Ae,Le,W,ee.z,null)}}const Me=A.children;for(let Ae=0,Le=Me.length;Ae<Le;Ae++)zn(Me[Ae],U,W,V)}function yl(A,U,W,V){const K=A.opaque,Me=A.transmissive,Ae=A.transparent;d.setupLightsView(W),Me.length>0&&Td(K,U,W),V&&ie.viewport(M.copy(V)),K.length>0&&Vs(K,U,W),Me.length>0&&Vs(Me,U,W),Ae.length>0&&Vs(Ae,U,W),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Td(A,U,W){const V=X.isWebGL2;G===null&&(G=new cr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ts:or,minFilter:La,samples:V&&r===!0?4:0})),p.getDrawingBufferSize(Z),V?G.setSize(Z.x,Z.y):G.setSize(No(Z.x),No(Z.y));const K=p.getRenderTarget();p.setRenderTarget(G),p.clear();const Me=p.toneMapping;p.toneMapping=ci,Vs(A,U,W),p.toneMapping=Me,ye.updateMultisampleRenderTarget(G),ye.updateRenderTargetMipmap(G),p.setRenderTarget(K)}function Vs(A,U,W){const V=U.isScene===!0?U.overrideMaterial:null;for(let K=0,Me=A.length;K<Me;K++){const Ae=A[K],Le=Ae.object,Ce=Ae.geometry,Be=V===null?Ae.material:V,Fe=Ae.group;Le.layers.test(W.layers)&&Ed(Le,U,W,Ce,Be,Fe)}}function Ed(A,U,W,V,K,Me){A.onBeforeRender(p,U,W,V,K,Me),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(p,U,W,V,A,Me),K.transparent===!0&&K.side===Xr?(K.side=Pn,K.needsUpdate=!0,p.renderBufferDirect(W,U,V,K,A,Me),K.side=ws,K.needsUpdate=!0,p.renderBufferDirect(W,U,V,K,A,Me),K.side=Xr):p.renderBufferDirect(W,U,V,K,A,Me),A.onAfterRender(p,U,W,V,K,Me)}function Na(A,U,W){U.isScene!==!0&&(U=ne);const V=De.get(A),K=d.state.lights,Me=d.state.shadowsArray,Ae=K.state.version,Le=He.getParameters(A,K.state,Me,U,W),Ce=He.getProgramCacheKey(Le);let Be=V.programs;V.environment=A.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(A.isMeshStandardMaterial?Vt:Tt).get(A.envMap||V.environment),Be===void 0&&(A.addEventListener("dispose",be),Be=new Map,V.programs=Be);let Fe=Be.get(Ce);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===Ae)return Ml(A,Le),Fe}else Le.uniforms=He.getUniforms(A),A.onBuild(W,Le,p),A.onBeforeCompile(Le,p),Fe=He.acquireProgram(Le,Ce),Be.set(Ce,Fe),V.uniforms=Le.uniforms;const Ne=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=E.uniform),Ml(A,Le),V.needsLights=Ld(A),V.lightsStateVersion=Ae,V.needsLights&&(Ne.ambientLightColor.value=K.state.ambient,Ne.lightProbe.value=K.state.probe,Ne.directionalLights.value=K.state.directional,Ne.directionalLightShadows.value=K.state.directionalShadow,Ne.spotLights.value=K.state.spot,Ne.spotLightShadows.value=K.state.spotShadow,Ne.rectAreaLights.value=K.state.rectArea,Ne.ltc_1.value=K.state.rectAreaLTC1,Ne.ltc_2.value=K.state.rectAreaLTC2,Ne.pointLights.value=K.state.point,Ne.pointLightShadows.value=K.state.pointShadow,Ne.hemisphereLights.value=K.state.hemi,Ne.directionalShadowMap.value=K.state.directionalShadowMap,Ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ne.spotShadowMap.value=K.state.spotShadowMap,Ne.spotShadowMatrix.value=K.state.spotShadowMatrix,Ne.pointShadowMap.value=K.state.pointShadowMap,Ne.pointShadowMatrix.value=K.state.pointShadowMatrix);const Qe=Fe.getUniforms(),Ui=ha.seqWithValue(Qe.seq,Ne);return V.currentProgram=Fe,V.uniformsList=Ui,Fe}function Ml(A,U){const W=De.get(A);W.outputEncoding=U.outputEncoding,W.instancing=U.instancing,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function Ad(A,U,W,V,K){U.isScene!==!0&&(U=ne),ye.resetTextureUnits();const Me=U.fog,Ae=V.isMeshStandardMaterial?U.environment:null,Le=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:lr,Ce=(V.isMeshStandardMaterial?Vt:Tt).get(V.envMap||Ae),Be=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Fe=!!V.normalMap&&!!W.attributes.tangent,Ne=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,Ui=!!W.morphAttributes.color,gr=V.toneMapped?p.toneMapping:ci,_r=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Un=_r!==void 0?_r.length:0,ze=De.get(V),vr=d.state.lights;if(C===!0&&(I===!0||A!==w)){const Bn=A===w&&V.id===b;E.setState(V,A,Bn)}let it=!1;V.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==vr.state.version||ze.outputEncoding!==Le||K.isInstancedMesh&&ze.instancing===!1||!K.isInstancedMesh&&ze.instancing===!0||K.isSkinnedMesh&&ze.skinning===!1||!K.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ce||V.fog===!0&&ze.fog!==Me||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==E.numPlanes||ze.numIntersection!==E.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Fe||ze.morphTargets!==Ne||ze.morphNormals!==Qe||ze.morphColors!==Ui||ze.toneMapping!==gr||X.isWebGL2===!0&&ze.morphTargetsCount!==Un)&&(it=!0):(it=!0,ze.__version=V.version);let kn=ze.currentProgram;it===!0&&(kn=Na(V,U,K));let mi=!1,os=!1,za=!1;const Nt=kn.getUniforms(),ls=ze.uniforms;if(ie.useProgram(kn.program)&&(mi=!0,os=!0,za=!0),V.id!==b&&(b=V.id,os=!0),mi||w!==A){if(Nt.setValue(Y,"projectionMatrix",A.projectionMatrix),X.logarithmicDepthBuffer&&Nt.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),w!==A&&(w=A,os=!0,za=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Bn=Nt.map.cameraPosition;Bn!==void 0&&Bn.setValue(Y,ee.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Nt.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||K.isSkinnedMesh)&&Nt.setValue(Y,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){Nt.setOptional(Y,K,"bindMatrix"),Nt.setOptional(Y,K,"bindMatrixInverse");const Bn=K.skeleton;Bn&&(X.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),Nt.setValue(Y,"boneTexture",Bn.boneTexture,ye),Nt.setValue(Y,"boneTextureSize",Bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ua=W.morphAttributes;return(Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0&&X.isWebGL2===!0)&&re.update(K,W,V,kn),(os||ze.receiveShadow!==K.receiveShadow)&&(ze.receiveShadow=K.receiveShadow,Nt.setValue(Y,"receiveShadow",K.receiveShadow)),os&&(Nt.setValue(Y,"toneMappingExposure",p.toneMappingExposure),ze.needsLights&&Cd(ls,za),Me&&V.fog===!0&&Zn.refreshFogUniforms(ls,Me),Zn.refreshMaterialUniforms(ls,V,O,N,G),ha.upload(Y,ze.uniformsList,ls,ye)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ha.upload(Y,ze.uniformsList,ls,ye),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Nt.setValue(Y,"center",K.center),Nt.setValue(Y,"modelViewMatrix",K.modelViewMatrix),Nt.setValue(Y,"normalMatrix",K.normalMatrix),Nt.setValue(Y,"modelMatrix",K.matrixWorld),kn}function Cd(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Ld(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,U,W){De.get(A.texture).__webglTexture=U,De.get(A.depthTexture).__webglTexture=W;const V=De.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=W===void 0,V.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const W=De.get(A);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,W=0){y=A,g=U,v=W;let V=!0;if(A){const Ce=De.get(A);Ce.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(36160,null),V=!1):Ce.__webglFramebuffer===void 0?ye.setupRenderTarget(A):Ce.__hasExternalTextures&&ye.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture)}let K=null,Me=!1,Ae=!1;if(A){const Ce=A.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Ae=!0);const Be=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=Be[U],Me=!0):X.isWebGL2&&A.samples>0&&ye.useMultisampledRTT(A)===!1?K=De.get(A).__webglMultisampledFramebuffer:K=Be,M.copy(A.viewport),S.copy(A.scissor),x=A.scissorTest}else M.copy(F).multiplyScalar(O).floor(),S.copy(B).multiplyScalar(O).floor(),x=R;if(ie.bindFramebuffer(36160,K)&&X.drawBuffers&&V&&ie.drawBuffers(A,K),ie.viewport(M),ie.scissor(S),ie.setScissorTest(x),Me){const Ce=De.get(A.texture);Y.framebufferTexture2D(36160,36064,34069+U,Ce.__webglTexture,W)}else if(Ae){const Ce=De.get(A.texture),Be=U||0;Y.framebufferTextureLayer(36160,36064,Ce.__webglTexture,W||0,Be)}b=-1},this.readRenderTargetPixels=function(A,U,W,V,K,Me,Ae){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){ie.bindFramebuffer(36160,Le);try{const Ce=A.texture,Be=Ce.format,Fe=Ce.type;if(Be!==Wn&&H.convert(Be)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Fe===Ts&&(J.has("EXT_color_buffer_half_float")||X.isWebGL2&&J.has("EXT_color_buffer_float"));if(Fe!==or&&H.convert(Fe)!==Y.getParameter(35738)&&!(Fe===Ki&&(X.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&W>=0&&W<=A.height-K&&Y.readPixels(U,W,V,K,H.convert(Be),H.convert(Fe),Me)}finally{const Ce=y!==null?De.get(y).__webglFramebuffer:null;ie.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(A,U,W=0){const V=Math.pow(2,-W),K=Math.floor(U.image.width*V),Me=Math.floor(U.image.height*V);ye.setTexture2D(U,0),Y.copyTexSubImage2D(3553,W,0,0,A.x,A.y,K,Me),ie.unbindTexture()},this.copyTextureToTexture=function(A,U,W,V=0){const K=U.image.width,Me=U.image.height,Ae=H.convert(W.format),Le=H.convert(W.type);ye.setTexture2D(W,0),Y.pixelStorei(37440,W.flipY),Y.pixelStorei(37441,W.premultiplyAlpha),Y.pixelStorei(3317,W.unpackAlignment),U.isDataTexture?Y.texSubImage2D(3553,V,A.x,A.y,K,Me,Ae,Le,U.image.data):U.isCompressedTexture?Y.compressedTexSubImage2D(3553,V,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,Ae,U.mipmaps[0].data):Y.texSubImage2D(3553,V,A.x,A.y,Ae,Le,U.image),V===0&&W.generateMipmaps&&Y.generateMipmap(3553),ie.unbindTexture()},this.copyTextureToTexture3D=function(A,U,W,V,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=A.max.x-A.min.x+1,Ae=A.max.y-A.min.y+1,Le=A.max.z-A.min.z+1,Ce=H.convert(V.format),Be=H.convert(V.type);let Fe;if(V.isData3DTexture)ye.setTexture3D(V,0),Fe=32879;else if(V.isDataArrayTexture)ye.setTexture2DArray(V,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,V.flipY),Y.pixelStorei(37441,V.premultiplyAlpha),Y.pixelStorei(3317,V.unpackAlignment);const Ne=Y.getParameter(3314),Qe=Y.getParameter(32878),Ui=Y.getParameter(3316),gr=Y.getParameter(3315),_r=Y.getParameter(32877),Un=W.isCompressedTexture?W.mipmaps[0]:W.image;Y.pixelStorei(3314,Un.width),Y.pixelStorei(32878,Un.height),Y.pixelStorei(3316,A.min.x),Y.pixelStorei(3315,A.min.y),Y.pixelStorei(32877,A.min.z),W.isDataTexture||W.isData3DTexture?Y.texSubImage3D(Fe,K,U.x,U.y,U.z,Me,Ae,Le,Ce,Be,Un.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Fe,K,U.x,U.y,U.z,Me,Ae,Le,Ce,Un.data)):Y.texSubImage3D(Fe,K,U.x,U.y,U.z,Me,Ae,Le,Ce,Be,Un),Y.pixelStorei(3314,Ne),Y.pixelStorei(32878,Qe),Y.pixelStorei(3316,Ui),Y.pixelStorei(3315,gr),Y.pixelStorei(32877,_r),K===0&&V.generateMipmaps&&Y.generateMipmap(Fe),ie.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ye.setTextureCube(A,0):A.isData3DTexture?ye.setTexture3D(A,0):A.isDataArrayTexture?ye.setTexture2DArray(A,0):ye.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){g=0,v=0,y=null,ie.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class O0 extends bf{}O0.prototype.isWebGL1Renderer=!0;class F0 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}const kc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class yf{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const N0=new yf;class Mf{constructor(e){this.manager=e!==void 0?e:N0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class z0 extends Mf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=kc.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Es("img");function l(){u(),kc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class U0 extends Mf{constructor(e){super(e)}load(e,t,n,i){const r=new gn,a=new z0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);/**
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
 */var Bc={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function k0(s){return!!s.document&&typeof s.document.createElement=="function"}function B0(s,e){if(k0(s)&&e in Bc){var t=s.document.createElement("div"),n=Bc[e],i=n.standard,r=n.prefixed,a=i in t.style;return a?i:r}return e}/**
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
 */var en={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},An={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},ds={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
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
 */var V0=function(s){Kn(e,s);function e(t){var n=s.call(this,Yn(Yn({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return en},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return An},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(en.INDETERMINATE_CLASS),this.adapter.addClass(en.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,r;if(!t.determinate)try{for(var a=Ud(n),o=a.next();!o.done;o=a.next()){var l=o.value;l.contentRect&&t.calculateAndSetDimensions(l.contentRect.width)}}catch(c){i={error:c}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(en.INDETERMINATE_CLASS),this.adapter.setAttribute(An.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(An.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(An.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(en.INDETERMINATE_CLASS),this.adapter.removeAttribute(An.ARIA_VALUENOW),this.adapter.removeAttribute(An.ARIA_VALUEMAX),this.adapter.removeAttribute(An.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(An.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(en.CLOSED_CLASS),this.adapter.removeClass(en.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(An.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(en.CLOSED_CLASS),this.adapter.setAttribute(An.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(en.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(en.CLOSED_CLASS)&&this.adapter.addClass(en.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){s.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(en.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(en.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",i=typeof window<"u"?B0(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(An.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*ds.PRIMARY_HALF,i=t*ds.PRIMARY_FULL,r=t*ds.SECONDARY_QUARTER,a=t*ds.SECONDARY_HALF,o=t*ds.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-o+"px"),this.restartAnimation()},e}(Os);function Pi(s,e){let t=Object.getOwnPropertyNames(s);const n={};for(let i=0;i<t.length;i++){const r=t[i],a=r.indexOf("$");a!==-1&&e.indexOf(r.substring(0,a+1))!==-1||e.indexOf(r)===-1&&(n[r]=s[r])}return n}function qt(s,e){let t=Object.getOwnPropertyNames(s);const n={};for(let i=0;i<t.length;i++){const r=t[i];r.substring(0,e.length)===e&&(n[r.substring(e.length)]=s[r])}return n}function G0(s){let e,t,n,i,r,a,o,l,c,u,f,d,m,_,p,h,g,v,y,b,w=[{class:m=Ge({[s[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":s[3],"mdc-linear-progress--closed":s[4],"mdc-data-table__linear-progress":s[14]==="data-table",...s[8]})},{style:_=Object.entries(s[10]).map(Wc).concat([s[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":p=0},{"aria-valuemax":h=1},{"aria-valuenow":g=s[3]?void 0:s[5]},s[9],s[16]],M={};for(let S=0;S<w.length;S+=1)M=Oe(M,w[S]);return{c(){e=ge("div"),t=ge("div"),n=ge("div"),r=Ie(),a=ge("div"),o=Ie(),l=ge("div"),c=ge("span"),f=Ie(),d=ge("div"),d.innerHTML='<span class="mdc-linear-progress__bar-inner"></span>',_e(n,"class","mdc-linear-progress__buffer-bar"),_e(n,"style",i=Object.entries(s[11]).map(Vc).join(" ")),_e(a,"class","mdc-linear-progress__buffer-dots"),_e(t,"class","mdc-linear-progress__buffer"),_e(c,"class","mdc-linear-progress__bar-inner"),_e(l,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),_e(l,"style",u=Object.entries(s[12]).map(Gc).join(" ")),_e(d,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),et(e,M)},m(S,x){xe(S,e,x),pe(e,t),pe(t,n),pe(t,r),pe(t,a),pe(e,o),pe(e,l),pe(l,c),pe(e,f),pe(e,d),s[19](e),y||(b=[ct(v=Dn.call(null,e,s[0])),ct(s[13].call(null,e)),Ye(e,"transitionend",s[20])],y=!0)},p(S,[x]){x&2048&&i!==(i=Object.entries(S[11]).map(Vc).join(" "))&&_e(n,"style",i),x&4096&&u!==(u=Object.entries(S[12]).map(Gc).join(" "))&&_e(l,"style",u),et(e,M=Lt(w,[x&282&&m!==(m=Ge({[S[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":S[3],"mdc-linear-progress--closed":S[4],"mdc-data-table__linear-progress":S[14]==="data-table",...S[8]}))&&{class:m},x&1028&&_!==(_=Object.entries(S[10]).map(Wc).concat([S[2]]).join(" "))&&{style:_},{role:"progressbar"},{"aria-valuemin":p},{"aria-valuemax":h},x&40&&g!==(g=S[3]?void 0:S[5])&&{"aria-valuenow":g},x&512&&S[9],x&65536&&S[16]])),v&&Xt(v.update)&&x&1&&v.update.call(null,S[0])},i:Ri,o:Ri,d(S){S&&Se(e),s[19](null),y=!1,Fi(b)}}}const Vc=([s,e])=>`${s}: ${e};`,Gc=([s,e])=>`${s}: ${e};`,Wc=([s,e])=>`${s}: ${e};`;function W0(s,e,t){const n=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let i=ht(e,n),r;const a=pi(di());let{use:o=[]}=e,{class:l=""}=e,{style:c=""}=e,{indeterminate:u=!1}=e,{closed:f=!1}=e,{progress:d=0}=e,{buffer:m=void 0}=e,_,p,h={},g={},v={},y={},b={},w=$i("SMUI:linear-progress:context"),M=$i("SMUI:linear-progress:closed");yt(s,M,C=>t(21,r=C)),vn(()=>(t(6,p=new V0({addClass:x,forceLayout:()=>{B().getBoundingClientRect()},setBufferBarStyle:z,setPrimaryBarStyle:F,hasClass:S,removeAttribute:O,removeClass:T,setAttribute:N,setStyle:q,attachResizeObserver:C=>{const I=window.ResizeObserver;if(I){const G=new I(C);return G.observe(B()),G}return null},getWidth:()=>B().offsetWidth})),p.init(),()=>{p.destroy()}));function S(C){return C in h?h[C]:B().classList.contains(C)}function x(C){h[C]||t(8,h[C]=!0,h)}function T(C){(!(C in h)||h[C])&&t(8,h[C]=!1,h)}function N(C,I){g[C]!==I&&t(9,g[C]=I,g)}function O(C){(!(C in g)||g[C]!=null)&&t(9,g[C]=void 0,g)}function q(C,I){v[C]!=I&&(I===""||I==null?(delete v[C],t(10,v)):t(10,v[C]=I,v))}function z(C,I){y[C]!=I&&(I===""||I==null?(delete y[C],t(11,y)):t(11,y[C]=I,y))}function F(C,I){b[C]!=I&&(I===""||I==null?(delete b[C],t(12,b)):t(12,b[C]=I,b))}function B(){return _}function R(C){ft[C?"unshift":"push"](()=>{_=C,t(7,_)})}const D=()=>p&&p.handleTransitionEnd();return s.$$set=C=>{e=Oe(Oe({},e),hi(C)),t(16,i=ht(e,n)),"use"in C&&t(0,o=C.use),"class"in C&&t(1,l=C.class),"style"in C&&t(2,c=C.style),"indeterminate"in C&&t(3,u=C.indeterminate),"closed"in C&&t(4,f=C.closed),"progress"in C&&t(5,d=C.progress),"buffer"in C&&t(17,m=C.buffer)},s.$$.update=()=>{s.$$.dirty&16&&M&&fa(M,r=f,r),s.$$.dirty&72&&p&&p.isDeterminate()!==!u&&p.setDeterminate(!u),s.$$.dirty&96&&p&&p.getProgress()!==d&&p.setProgress(d),s.$$.dirty&131136&&p&&(m==null?p.setBuffer(1):p.setBuffer(m)),s.$$.dirty&80&&p&&(f?p.close():p.open())},[o,l,c,u,f,d,p,_,h,g,v,y,b,a,w,M,i,m,B,R,D]}class H0 extends kt{constructor(e){super(),Bt(this,e,W0,G0,Ot,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}const Uo=[{bg:"/home/bg1.png",depth:"/home/bg1_depth.jpg"},{bg:"/home/bg2.png",depth:"/home/bg2_depth.jpg"},{bg:"/home/bg3.png",depth:"/home/bg3_depth.jpg"},{bg:"/home/bg4.jpeg",depth:"/home/bg4_depth.jpg"},{bg:"/home/bg5.png",depth:"/home/bg5_depth.jpg"}],q0=1.5,wt=800,Fn=xs(!0),pa=["前端","后端","其他"],Hc={[pa[0]]:[{tab:"基础"},{skill:"HTML5/CSS3",score:"100%"},{skill:"Less/Sass/Stylus",score:"100%"},{skill:"JavaScript",score:"100%"},{skill:"TypeScript",score:"100%"},{skill:"Node",score:"100%"},{tab:"框架"},{skill:"Vue&相关技术栈",score:"100%"},{skill:"Svelte&相关技术栈",score:"85%"},{skill:"React&相关技术栈",score:"70%"},{skill:"Solid",score:"70%"},{skill:"Egg.js",score:"100%"},{skill:"Koa.js",score:"100%"},{tab:"小程序"},{skill:"MINA",score:"100%"},{skill:"mpVue",score:"100%"},{tab:"其他"},{skill:"webpack",score:"95%"},{skill:"vite",score:"95%"},{skill:"git",score:"100%"},{skill:"monorepo",score:"100%"},{skill:"npm/yarn/pnpm",score:"100%"}],[pa[1]]:[{tab:"开发语言"},{skill:"Golang",score:"70%"},{skill:"PHP",score:"50%"},{tab:"其他"},{skill:"Redis",score:"70%"},{skill:"Mysql",score:"70%"}],[pa[2]]:[{skill:"Photoshop",score:"60%"}]},qc=[{timeline:"2014.9-2018.7",experience:"苏州大学文正学院",job:"",desc:["专业：物联网工程"]},{timeline:"2018.12-2020.11",experience:"腾讯",job:"web前端工程师",desc:["部门：IEG - WeTest","职能范围：前端开发、node开发、小程序开发、招人及新人培养"]},{timeline:"2020.11-Now",experience:"哔哩哔哩",job:"web前端工程师",desc:["部门：直播","职能范围：前端开发、node开发、服务端开发、招人及新人培养"]},{timeline:"Future",experience:"想学(做)的内容",job:"",desc:["WebGL","blender","日语","围棋"]}],Xc=[{title:"运动",desc:["羽毛球","游泳","乒乓球(属于是又菜又爱玩)"]},{title:"ACG",desc:["包括但不限于：动画、漫画、轻小说、二游、galgame","喜欢的作品：魔法师之夜、fate、空之境界、邻家天使等等","有时候也会看点日剧"]},{title:"未知领域",desc:["爱好各类科普、时事、历史，虽然也记不住多少~~","喜欢的up主有：鬼谷、刘晓非、萌萌战队、Chubbyemu、Linvo等等"]}];function X0(s){let e,t,n,i,r,a,o,l,c,u,f,d,m,_,p;return{c(){e=ge("div"),t=ge("div"),t.textContent="欢迎来到mahiru-forever的个人空间",n=Ie(),i=ge("div"),r=ge("div"),r.textContent="Skill",a=Ie(),o=ge("div"),o.textContent="Experience",l=Ie(),c=ge("div"),c.textContent="Hobby",u=Ie(),f=ge("div"),f.textContent="Contact",_e(t,"class","title svelte-soauan"),_e(r,"class","know svelte-soauan"),_e(r,"role","presentation"),_e(o,"class","know svelte-soauan"),_e(o,"role","presentation"),_e(c,"class","know svelte-soauan"),_e(c,"role","presentation"),_e(f,"class","know svelte-soauan"),_e(f,"role","presentation"),_e(i,"class","know-more svelte-soauan"),_e(e,"class","page page_1 svelte-soauan")},m(h,g){xe(h,e,g),pe(e,t),pe(e,n),pe(e,i),pe(i,r),pe(i,a),pe(i,o),pe(i,l),pe(i,c),pe(i,u),pe(i,f),m=!0,_||(p=[Ye(r,"click",s[4]),Ye(o,"click",s[5]),Ye(c,"click",s[6]),Ye(f,"click",s[7])],_=!0)},p(h,[g]){s=h},i(h){m||(Ni(()=>{m&&(d||(d=Pt(e,It,{delay:s[0],duration:wt},!0)),d.run(1))}),m=!0)},o(h){d||(d=Pt(e,It,{delay:s[0],duration:wt},!1)),d.run(0),m=!1},d(h){h&&Se(e),h&&d&&d.end(),_=!1,Fi(p)}}}function Y0(s,e,t){let n,i,r;yt(s,Fn,f=>t(2,i=f)),yt(s,Ei,f=>t(3,r=f));const a=Rd();vn(()=>{Fn.set(!1)});const o=()=>a("jump",1),l=()=>a("jump",2),c=()=>a("jump",3),u=()=>a("jump",4);return s.$$.update=()=>{s.$$.dirty&12&&t(0,n=r===0?i?0:wt:0)},[n,a,i,r,o,l,c,u]}class j0 extends kt{constructor(e){super(),Bt(this,e,Y0,X0,Ot,{})}}/**
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
 */var K0={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Z0={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var si=function(s){Kn(e,s);function e(t){return s.call(this,Yn(Yn({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return K0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Z0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(Os);/**
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
 */var J0=function(s){Kn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(si.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(si.cssClasses.ACTIVE)},e}(si);/**
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
 */var Yc=function(s){Kn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(si.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,r=t.left-n.left;this.adapter.addClass(si.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(si.cssClasses.NO_TRANSITION),this.adapter.addClass(si.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(si.cssClasses.ACTIVE)},e}(si);/**
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
 */var ca={ACTIVE:"mdc-tab--active"},hs={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var Q0=function(s){Kn(e,s);function e(t){var n=s.call(this,Yn(Yn({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return ca},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return hs},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(ca.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(ca.ACTIVE),this.adapter.setAttr(hs.ARIA_SELECTED,"true"),this.adapter.setAttr(hs.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(ca.ACTIVE),this.adapter.setAttr(hs.ARIA_SELECTED,"false"),this.adapter.setAttr(hs.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:n+r,contentRight:n+r+i,rootLeft:n,rootRight:n+t}},e}(Os);function $0(s){let e,t,n,i,r,a,o,l,c,u,f;const d=s[21].default,m=xn(d,s,s[20],null);let _=[{class:n=Ge({[s[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":s[3]==="underline","mdc-tab-indicator__content--icon":s[3]==="icon"})},{style:i=Object.entries(s[10]).map(jc).join(" ")},{"aria-hidden":r=s[3]==="icon"?"true":void 0},qt(s[12],"content$")],p={};for(let v=0;v<_.length;v+=1)p=Oe(p,_[v]);let h=[{class:o=Ge({[s[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":s[0],"mdc-tab-indicator--fade":s[4]==="fade",...s[9]})},Pi(s[12],["content$"])],g={};for(let v=0;v<h.length;v+=1)g=Oe(g,h[v]);return{c(){e=ge("span"),t=ge("span"),m&&m.c(),et(t,p),et(e,g)},m(v,y){xe(v,e,y),pe(e,t),m&&m.m(t,null),s[22](t),s[23](e),c=!0,u||(f=[ct(a=Dn.call(null,t,s[5])),ct(l=Dn.call(null,e,s[1])),ct(s[11].call(null,e))],u=!0)},p(v,[y]){m&&m.p&&(!c||y&1048576)&&Sn(m,d,v,v[20],c?yn(d,v[20],y,null):bn(v[20]),null),et(t,p=Lt(_,[(!c||y&72&&n!==(n=Ge({[v[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":v[3]==="underline","mdc-tab-indicator__content--icon":v[3]==="icon"})))&&{class:n},(!c||y&1024&&i!==(i=Object.entries(v[10]).map(jc).join(" ")))&&{style:i},(!c||y&8&&r!==(r=v[3]==="icon"?"true":void 0))&&{"aria-hidden":r},y&4096&&qt(v[12],"content$")])),a&&Xt(a.update)&&y&32&&a.update.call(null,v[5]),et(e,g=Lt(h,[(!c||y&533&&o!==(o=Ge({[v[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":v[0],"mdc-tab-indicator--fade":v[4]==="fade",...v[9]})))&&{class:o},y&4096&&Pi(v[12],["content$"])])),l&&Xt(l.update)&&y&2&&l.update.call(null,v[1])},i(v){c||(le(m,v),c=!0)},o(v){he(m,v),c=!1},d(v){v&&Se(e),m&&m.d(v),s[22](null),s[23](null),u=!1,Fi(f)}}}const jc=([s,e])=>`${s}: ${e};`;function ev(s,e,t){const n=["use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"];let i=ht(e,n),{$$slots:r={},$$scope:a}=e;const o=pi(di());let{use:l=[]}=e,{class:c=""}=e,{active:u=!1}=e,{type:f="underline"}=e,{transition:d="slide"}=e,{content$use:m=[]}=e,{content$class:_=""}=e,p,h,g,v={},y={},b=[],w=d;vn(()=>(t(17,h=M()),h.init(),()=>{h.destroy()}));function M(){const D={fade:J0,slide:Yc}[d]||Yc;return new D({addClass:(...C)=>S(()=>x(...C)),removeClass:(...C)=>S(()=>T(...C)),computeContentClientRect:z,setContentStyleProperty:(...C)=>S(()=>N(...C))})}function S(D){b.length?b[b.length-1].push(D):D()}function x(D){v[D]||t(9,v[D]=!0,v)}function T(D){(!(D in v)||v[D])&&t(9,v[D]=!1,v)}function N(D,C){y[D]!=C&&(C===""||C==null?(delete y[D],t(10,y),t(19,w),t(4,d),t(17,h)):t(10,y[D]=C,y))}function O(D){t(0,u=!0),h.activate(D)}function q(){t(0,u=!1),h.deactivate()}function z(){return b.push([]),t(18,b),g.getBoundingClientRect()}function F(){return p}function B(D){ft[D?"unshift":"push"](()=>{g=D,t(8,g)})}function R(D){ft[D?"unshift":"push"](()=>{p=D,t(7,p)})}return s.$$set=D=>{e=Oe(Oe({},e),hi(D)),t(12,i=ht(e,n)),"use"in D&&t(1,l=D.use),"class"in D&&t(2,c=D.class),"active"in D&&t(0,u=D.active),"type"in D&&t(3,f=D.type),"transition"in D&&t(4,d=D.transition),"content$use"in D&&t(5,m=D.content$use),"content$class"in D&&t(6,_=D.content$class),"$$scope"in D&&t(20,a=D.$$scope)},s.$$.update=()=>{s.$$.dirty&655376&&w!==d&&(t(19,w=d),h&&h.destroy(),t(9,v={}),t(10,y={}),t(17,h=M()),h.init()),s.$$.dirty&262144&&b.length&&requestAnimationFrame(()=>{var D;const C=(D=b.shift())!==null&&D!==void 0?D:[];t(18,b);for(const I of C)I()})},[u,l,c,f,d,m,_,p,g,v,y,o,i,O,q,z,F,h,b,w,a,r,B,R]}class wf extends kt{constructor(e){super(),Bt(this,e,ev,$0,Ot,{use:1,class:2,active:0,type:3,transition:4,content$use:5,content$class:6,activate:13,deactivate:14,computeContentClientRect:15,getElement:16})}get activate(){return this.$$.ctx[13]}get deactivate(){return this.$$.ctx[14]}get computeContentClientRect(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}const tv=s=>({}),Kc=s=>({}),nv=s=>({}),Zc=s=>({});function Jc(s){let e,t;const n=[{active:s[18]},qt(s[25],"tabIndicator$")];let i={$$slots:{default:[iv]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Oe(i,n[r]);return e=new wf({props:i}),s[33](e),{c(){pt(e.$$.fragment)},m(r,a){mt(e,r,a),t=!0},p(r,a){const o=a[0]&33816576?Lt(n,[a[0]&262144&&{active:r[18]},a[0]&33554432&&Hr(qt(r[25],"tabIndicator$"))]):{};a[1]&64&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(le(e.$$.fragment,r),t=!0)},o(r){he(e.$$.fragment,r),t=!1},d(r){s[33](null),gt(e,r)}}}function iv(s){let e;const t=s[32]["tab-indicator"],n=xn(t,s,s[37],Zc);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&64)&&Sn(n,t,i,i[37],e?yn(t,i[37],r,nv):bn(i[37]),Zc)},i(i){e||(le(n,i),e=!0)},o(i){he(n,i),e=!1},d(i){n&&n.d(i)}}}function Qc(s){let e,t;const n=[{active:s[18]},qt(s[25],"tabIndicator$")];let i={$$slots:{default:[rv]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Oe(i,n[r]);return e=new wf({props:i}),s[35](e),{c(){pt(e.$$.fragment)},m(r,a){mt(e,r,a),t=!0},p(r,a){const o=a[0]&33816576?Lt(n,[a[0]&262144&&{active:r[18]},a[0]&33554432&&Hr(qt(r[25],"tabIndicator$"))]):{};a[1]&64&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(le(e.$$.fragment,r),t=!0)},o(r){he(e.$$.fragment,r),t=!1},d(r){s[35](null),gt(e,r)}}}function rv(s){let e;const t=s[32]["tab-indicator"],n=xn(t,s,s[37],Kc);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&64)&&Sn(n,t,i,i[37],e?yn(t,i[37],r,tv):bn(i[37]),Kc)},i(i){e||(le(n,i),e=!0)},o(i){he(n,i),e=!1},d(i){n&&n.d(i)}}}function sv(s){let e,t,n,i,r,a,o,l,c,u;const f=s[32].default,d=xn(f,s,s[37],null);let m=s[6]&&Jc(s),_=[{class:n=Ge({[s[9]]:!0,"mdc-tab__content":!0})},qt(s[25],"content$")],p={};for(let g=0;g<_.length;g+=1)p=Oe(p,_[g]);let h=!s[6]&&Qc(s);return{c(){e=ge("span"),d&&d.c(),t=Ie(),m&&m.c(),r=Ie(),h&&h.c(),a=Ie(),o=ge("span"),et(e,p),_e(o,"class","mdc-tab__ripple")},m(g,v){xe(g,e,v),d&&d.m(e,null),pe(e,t),m&&m.m(e,null),s[34](e),xe(g,r,v),h&&h.m(g,v),xe(g,a,v),xe(g,o,v),l=!0,c||(u=ct(i=Dn.call(null,e,s[8])),c=!0)},p(g,v){d&&d.p&&(!l||v[1]&64)&&Sn(d,f,g,g[37],l?yn(f,g[37],v,null):bn(g[37]),null),g[6]?m?(m.p(g,v),v[0]&64&&le(m,1)):(m=Jc(g),m.c(),le(m,1),m.m(e,null)):m&&(xt(),he(m,1,1,()=>{m=null}),St()),et(e,p=Lt(_,[(!l||v[0]&512&&n!==(n=Ge({[g[9]]:!0,"mdc-tab__content":!0})))&&{class:n},v[0]&33554432&&qt(g[25],"content$")])),i&&Xt(i.update)&&v[0]&256&&i.update.call(null,g[8]),g[6]?h&&(xt(),he(h,1,1,()=>{h=null}),St()):h?(h.p(g,v),v[0]&64&&le(h,1)):(h=Qc(g),h.c(),le(h,1),h.m(a.parentNode,a))},i(g){l||(le(d,g),le(m),le(h),l=!0)},o(g){he(d,g),he(m),he(h),l=!1},d(g){g&&Se(e),d&&d.d(g),m&&m.d(),s[34](null),g&&Se(r),h&&h.d(g),g&&Se(a),g&&Se(o),c=!1,u()}}}function av(s){let e,t,n;const i=[{tag:s[11]},{use:[[Lo,{ripple:s[3],unbounded:!1,addClass:s[21],removeClass:s[22],addStyle:s[23]}],s[20],...s[0]]},{class:Ge({[s[1]]:!0,"mdc-tab":!0,"mdc-tab--active":s[18],"mdc-tab--stacked":s[4],"mdc-tab--min-width":s[5],...s[15]})},{style:Object.entries(s[16]).map($c).concat([s[2]]).join(" ")},{role:"tab"},{"aria-selected":s[18]?"true":"false"},{tabindex:s[18]||s[19]?"0":"-1"},{href:s[7]},s[17],Pi(s[25],["content$","tabIndicator$"])];var r=s[10];function a(o){let l={$$slots:{default:[sv]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=Oe(l,i[c]);return{props:l}}return r&&(e=wl(r,a(s)),s[36](e),e.$on("click",s[24])),{c(){e&&pt(e.$$.fragment),t=fr()},m(o,l){e&&mt(e,o,l),xe(o,t,l),n=!0},p(o,l){const c=l[0]&50301119?Lt(i,[l[0]&2048&&{tag:o[11]},l[0]&15728649&&{use:[[Lo,{ripple:o[3],unbounded:!1,addClass:o[21],removeClass:o[22],addStyle:o[23]}],o[20],...o[0]]},l[0]&294962&&{class:Ge({[o[1]]:!0,"mdc-tab":!0,"mdc-tab--active":o[18],"mdc-tab--stacked":o[4],"mdc-tab--min-width":o[5],...o[15]})},l[0]&65540&&{style:Object.entries(o[16]).map($c).concat([o[2]]).join(" ")},i[4],l[0]&262144&&{"aria-selected":o[18]?"true":"false"},l[0]&786432&&{tabindex:o[18]||o[19]?"0":"-1"},l[0]&128&&{href:o[7]},l[0]&131072&&Hr(o[17]),l[0]&33554432&&Hr(Pi(o[25],["content$","tabIndicator$"]))]):{};if(l[0]&33841984|l[1]&64&&(c.$$scope={dirty:l,ctx:o}),l[0]&1024&&r!==(r=o[10])){if(e){xt();const u=e;he(u.$$.fragment,1,0,()=>{gt(u,1)}),St()}r?(e=wl(r,a(o)),o[36](e),e.$on("click",o[24]),pt(e.$$.fragment),le(e.$$.fragment,1),mt(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(o){n||(e&&le(e.$$.fragment,o),n=!0)},o(o){e&&he(e.$$.fragment,o),n=!1},d(o){s[36](null),o&&Se(t),e&&gt(e,o)}}}const $c=([s,e])=>`${s}: ${e};`;function ov(s,e,t){const n=["use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","activate","deactivate","focus","getElement"];let i=ht(e,n),{$$slots:r={},$$scope:a}=e;const o=pi(di());let{use:l=[]}=e,{class:c=""}=e,{style:u=""}=e,{tab:f}=e,{ripple:d=!0}=e,{stacked:m=!1}=e,{minWidth:_=!1}=e,{indicatorSpanOnlyContent:p=!1}=e,{href:h=void 0}=e,{content$use:g=[]}=e,{content$class:v=""}=e,y,b,w,M,S={},x={},T={},N=$i("SMUI:tab:focusOnActivate"),O=f===$i("SMUI:tab:initialActive"),q=!1,{component:z=El}=e,{tag:F=z===El?h==null?"button":"a":void 0}=e;if(er("SMUI:label:context","tab"),er("SMUI:icon:context","tab"),!f)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");vn(()=>{t(31,b=new Q0({setAttr:I,addClass:R,removeClass:D,hasClass:B,activateIndicator:ie=>M.activate(ie),deactivateIndicator:()=>M.deactivate(),notifyInteracted:()=>un(ne(),"SMUITab:interacted",{tabId:f},void 0,!0),getOffsetLeft:()=>ne().offsetLeft,getOffsetWidth:()=>ne().offsetWidth,getContentOffsetLeft:()=>w.offsetLeft,getContentOffsetWidth:()=>w.offsetWidth,focus:ee}));const X={tabId:f,get element(){return ne()},get active(){return O},forceAccessible(ie){t(19,q=ie)},computeIndicatorClientRect:()=>M.computeContentClientRect(),computeDimensions:()=>b.computeDimensions(),focus:ee,activate:Q,deactivate:Z};return un(ne(),"SMUITab:mount",X),b.init(),()=>{un(ne(),"SMUITab:unmount",X),b.destroy()}});function B(X){return X in S?S[X]:ne().classList.contains(X)}function R(X){S[X]||t(15,S[X]=!0,S)}function D(X){(!(X in S)||S[X])&&t(15,S[X]=!1,S)}function C(X,ie){x[X]!=ie&&(ie===""||ie==null?(delete x[X],t(16,x)):t(16,x[X]=ie,x))}function I(X,ie){T[X]!==ie&&t(17,T[X]=ie,T)}function G(X){!X.defaultPrevented&&b&&b.handleClick()}function Q(X,ie){t(18,O=!0),ie&&b.setFocusOnActivate(!1),b.activate(X),ie&&b.setFocusOnActivate(N)}function Z(){t(18,O=!1),b.deactivate()}function ee(){ne().focus()}function ne(){return y.getElement()}function fe(X){ft[X?"unshift":"push"](()=>{M=X,t(14,M)})}function Y(X){ft[X?"unshift":"push"](()=>{w=X,t(13,w)})}function Je(X){ft[X?"unshift":"push"](()=>{M=X,t(14,M)})}function J(X){ft[X?"unshift":"push"](()=>{y=X,t(12,y)})}return s.$$set=X=>{e=Oe(Oe({},e),hi(X)),t(25,i=ht(e,n)),"use"in X&&t(0,l=X.use),"class"in X&&t(1,c=X.class),"style"in X&&t(2,u=X.style),"tab"in X&&t(26,f=X.tab),"ripple"in X&&t(3,d=X.ripple),"stacked"in X&&t(4,m=X.stacked),"minWidth"in X&&t(5,_=X.minWidth),"indicatorSpanOnlyContent"in X&&t(6,p=X.indicatorSpanOnlyContent),"href"in X&&t(7,h=X.href),"content$use"in X&&t(8,g=X.content$use),"content$class"in X&&t(9,v=X.content$class),"component"in X&&t(10,z=X.component),"tag"in X&&t(11,F=X.tag),"$$scope"in X&&t(37,a=X.$$scope)},s.$$.update=()=>{s.$$.dirty[1]&1&&b&&b.setFocusOnActivate(N)},[l,c,u,d,m,_,p,h,g,v,z,F,y,w,M,S,x,T,O,q,o,R,D,C,G,i,f,Q,Z,ee,ne,b,r,fe,Y,Je,J,a]}class lv extends kt{constructor(e){super(),Bt(this,e,ov,av,Ot,{use:0,class:1,style:2,tab:26,ripple:3,stacked:4,minWidth:5,indicatorSpanOnlyContent:6,href:7,content$use:8,content$class:9,component:10,tag:11,activate:27,deactivate:28,focus:29,getElement:30},null,[-1,-1])}get activate(){return this.$$.ctx[27]}get deactivate(){return this.$$.ctx[28]}get focus(){return this.$$.ctx[29]}get getElement(){return this.$$.ctx[30]}}/**
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
 */var Tf={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},cv={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var rl=function(){function s(e){this.adapter=e}return s}();/**
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
 */var uv=function(s){Kn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(n.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}(rl);/**
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
 */var fv=function(s){Kn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}(rl);/**
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
 */var dv=function(s){Kn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}(rl);/**
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
 */var hv=function(s){Kn(e,s);function e(t){var n=s.call(this,Yn(Yn({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Tf},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return cv},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],r=kd(i.split(","),6);r[0],r[1],r[2],r[3];var a=r[4];return r[5],parseFloat(a)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),r=i-n;this.animate({finalScrollPosition:i,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,r=this.clampScrollValue(i),a=r-n;return{finalScrollPosition:r,scrollDelta:a}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new fv(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),a=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),a===n?new dv(this.adapter):new uv(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(Os);/**
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
 */var xo;function pv(s,e){if(e===void 0&&(e=!0),e&&typeof xo<"u")return xo;var t=s.createElement("div");t.classList.add(Tf.SCROLL_TEST),s.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return s.body.removeChild(t),e&&(xo=n),n}/**
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
 */var st={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Rn={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
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
 */var hr=new Set;hr.add(st.ARROW_LEFT_KEY);hr.add(st.ARROW_RIGHT_KEY);hr.add(st.END_KEY);hr.add(st.HOME_KEY);hr.add(st.ENTER_KEY);hr.add(st.SPACE_KEY);var pr=new Map;pr.set(Rn.ARROW_LEFT_KEYCODE,st.ARROW_LEFT_KEY);pr.set(Rn.ARROW_RIGHT_KEYCODE,st.ARROW_RIGHT_KEY);pr.set(Rn.END_KEYCODE,st.END_KEY);pr.set(Rn.HOME_KEYCODE,st.HOME_KEY);pr.set(Rn.ENTER_KEYCODE,st.ENTER_KEY);pr.set(Rn.SPACE_KEYCODE,st.SPACE_KEY);var mv=function(s){Kn(e,s);function e(t){var n=s.call(this,Yn(Yn({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return st},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Rn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0)if(this.isActivationKey(n)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(r);else{var i=this.determineTargetFromKey(r,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),r=this.adapter.getTabListLength()-1,a=n===st.END_KEY,o=n===st.ARROW_LEFT_KEY&&!i||n===st.ARROW_RIGHT_KEY&&i,l=n===st.ARROW_RIGHT_KEY&&!i||n===st.ARROW_LEFT_KEY&&i,c=t;return a?c=r:o?c-=1:l?c+=1:c=0,c<0?c=r:c>r&&(c=0),c},e.prototype.calculateScrollIncrement=function(t,n,i,r){var a=this.adapter.getTabDimensionsAtIndex(n),o=a.contentLeft-i-r,l=a.contentRight-i,c=l-Rn.EXTRA_SCROLL_AMOUNT,u=o+Rn.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(c,0):Math.max(u,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,r,a){var o=this.adapter.getTabDimensionsAtIndex(n),l=a-o.contentLeft-i,c=a-o.contentRight-i-r,u=c+Rn.EXTRA_SCROLL_AMOUNT,f=l-Rn.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(u,0):Math.min(f,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,r){var a=n.rootLeft-i,o=n.rootRight-i-r,l=a+o,c=a<0||l<0,u=o>0||l>0;return c?t-1:u?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,r,a){var o=a-n.rootLeft-r-i,l=a-n.rootRight-i,c=o+l,u=o>0||c>0,f=l<0||c<0;return u?t+1:f?t-1:-1},e.prototype.getKeyFromEvent=function(t){return hr.has(t.key)?t.key:pr.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===st.SPACE_KEY||t===st.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),a=this.findAdjacentTabIndexClosestToEdge(t,r,n,i);if(this.indexIsInRange(a)){var o=this.calculateScrollIncrement(t,a,n,i);this.adapter.incrementScroll(o)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),a=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,n,i,a);if(this.indexIsInRange(o)){var l=this.calculateScrollIncrementRTL(t,o,n,i,a);this.adapter.incrementScroll(l)}},e}(Os);function gv(s){let e,t,n,i,r,a,o,l,c,u,f,d,m,_;const p=s[23].default,h=xn(p,s,s[22],null);let g=[{class:i=Ge({[s[6]]:!0,"mdc-tab-scroller__scroll-content":!0})},{style:r=Object.entries(s[14]).map(eu).join(" ")},qt(s[16],"scrollContent$")],v={};for(let S=0;S<g.length;S+=1)v=Oe(v,g[S]);let y=[{class:o=Ge({[s[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...s[12]})},{style:l=Object.entries(s[13]).map(tu).join(" ")},qt(s[16],"scrollArea$")],b={};for(let S=0;S<y.length;S+=1)b=Oe(b,y[S]);let w=[{class:u=Ge({[s[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":s[2]==="start","mdc-tab-scroller--align-end":s[2]==="end","mdc-tab-scroller--align-center":s[2]==="center",...s[11]})},Pi(s[16],["scrollArea$","scrollContent$"])],M={};for(let S=0;S<w.length;S+=1)M=Oe(M,w[S]);return{c(){e=ge("div"),t=ge("div"),n=ge("div"),h&&h.c(),et(n,v),et(t,b),et(e,M)},m(S,x){xe(S,e,x),pe(e,t),pe(t,n),h&&h.m(n,null),s[24](n),s[26](t),s[32](e),d=!0,m||(_=[ct(a=Dn.call(null,n,s[5])),Ye(n,"transitionend",s[25]),ct(c=Dn.call(null,t,s[3])),Ye(t,"wheel",s[27],{passive:!0}),Ye(t,"touchstart",s[28],{passive:!0}),Ye(t,"pointerdown",s[29]),Ye(t,"mousedown",s[30]),Ye(t,"keydown",s[31]),ct(f=Dn.call(null,e,s[0])),ct(s[15].call(null,e))],m=!0)},p(S,x){h&&h.p&&(!d||x[0]&4194304)&&Sn(h,p,S,S[22],d?yn(p,S[22],x,null):bn(S[22]),null),et(n,v=Lt(g,[(!d||x[0]&64&&i!==(i=Ge({[S[6]]:!0,"mdc-tab-scroller__scroll-content":!0})))&&{class:i},(!d||x[0]&16384&&r!==(r=Object.entries(S[14]).map(eu).join(" ")))&&{style:r},x[0]&65536&&qt(S[16],"scrollContent$")])),a&&Xt(a.update)&&x[0]&32&&a.update.call(null,S[5]),et(t,b=Lt(y,[(!d||x[0]&4112&&o!==(o=Ge({[S[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...S[12]})))&&{class:o},(!d||x[0]&8192&&l!==(l=Object.entries(S[13]).map(tu).join(" ")))&&{style:l},x[0]&65536&&qt(S[16],"scrollArea$")])),c&&Xt(c.update)&&x[0]&8&&c.update.call(null,S[3]),et(e,M=Lt(w,[(!d||x[0]&2054&&u!==(u=Ge({[S[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":S[2]==="start","mdc-tab-scroller--align-end":S[2]==="end","mdc-tab-scroller--align-center":S[2]==="center",...S[11]})))&&{class:u},x[0]&65536&&Pi(S[16],["scrollArea$","scrollContent$"])])),f&&Xt(f.update)&&x[0]&1&&f.update.call(null,S[0])},i(S){d||(le(h,S),d=!0)},o(S){he(h,S),d=!1},d(S){S&&Se(e),h&&h.d(S),s[24](null),s[26](null),s[32](null),m=!1,Fi(_)}}}const eu=([s,e])=>`${s}: ${e};`,tu=([s,e])=>`${s}: ${e};`;function _v(s,e,t){const n=["use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"];let i=ht(e,n),{$$slots:r={},$$scope:a}=e;const{matches:o}=Bd,l=pi(di());let{use:c=[]}=e,{class:u=""}=e,{align:f=void 0}=e,{scrollArea$use:d=[]}=e,{scrollArea$class:m=""}=e,{scrollContent$use:_=[]}=e,{scrollContent$class:p=""}=e,h,g,v,y,b={},w={},M={},S={};vn(()=>(t(8,g=new hv({eventTargetMatchesSelector:(J,X)=>o(J,X),addClass:x,removeClass:T,addScrollAreaClass:N,setScrollAreaStyleProperty:O,setScrollContentStyleProperty:q,getScrollContentStyleValue:z,setScrollAreaScrollLeft:J=>t(9,v.scrollLeft=J,v),getScrollAreaScrollLeft:()=>v.scrollLeft,getScrollContentOffsetWidth:()=>y.offsetWidth,getScrollAreaOffsetWidth:()=>v.offsetWidth,computeScrollAreaClientRect:()=>v.getBoundingClientRect(),computeScrollContentClientRect:()=>y.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>pv(document)})),g.init(),()=>{g.destroy()}));function x(J){b[J]||t(11,b[J]=!0,b)}function T(J){(!(J in b)||b[J])&&t(11,b[J]=!1,b)}function N(J){w[J]||t(12,w[J]=!0,w)}function O(J,X){M[J]!=X&&(X===""||X==null?(delete M[J],t(13,M)):t(13,M[J]=X,M))}function q(J,X){S[J]!=X&&(X===""||X==null?(delete S[J],t(14,S)):t(14,S[J]=X,S))}function z(J){return J in S?S[J]:getComputedStyle(y).getPropertyValue(J)}function F(){return g.getScrollPosition()}function B(){return y.offsetWidth}function R(J){g.incrementScroll(J)}function D(J){g.scrollTo(J)}function C(){return h}function I(J){ft[J?"unshift":"push"](()=>{y=J,t(10,y)})}const G=J=>g&&g.handleTransitionEnd(J);function Q(J){ft[J?"unshift":"push"](()=>{v=J,t(9,v)})}const Z=()=>g&&g.handleInteraction(),ee=()=>g&&g.handleInteraction(),ne=()=>g&&g.handleInteraction(),fe=()=>g&&g.handleInteraction(),Y=()=>g&&g.handleInteraction();function Je(J){ft[J?"unshift":"push"](()=>{h=J,t(7,h)})}return s.$$set=J=>{e=Oe(Oe({},e),hi(J)),t(16,i=ht(e,n)),"use"in J&&t(0,c=J.use),"class"in J&&t(1,u=J.class),"align"in J&&t(2,f=J.align),"scrollArea$use"in J&&t(3,d=J.scrollArea$use),"scrollArea$class"in J&&t(4,m=J.scrollArea$class),"scrollContent$use"in J&&t(5,_=J.scrollContent$use),"scrollContent$class"in J&&t(6,p=J.scrollContent$class),"$$scope"in J&&t(22,a=J.$$scope)},[c,u,f,d,m,_,p,h,g,v,y,b,w,M,S,l,i,F,B,R,D,C,a,r,I,G,Q,Z,ee,ne,fe,Y,Je]}class vv extends kt{constructor(e){super(),Bt(this,e,_v,gv,Ot,{use:0,class:1,align:2,scrollArea$use:3,scrollArea$class:4,scrollContent$use:5,scrollContent$class:6,getScrollPosition:17,getScrollContentWidth:18,incrementScroll:19,scrollTo:20,getElement:21},null,[-1,-1])}get getScrollPosition(){return this.$$.ctx[17]}get getScrollContentWidth(){return this.$$.ctx[18]}get incrementScroll(){return this.$$.ctx[19]}get scrollTo(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}}function nu(s,e,t){const n=s.slice();return n[28]=e[t],n}const xv=s=>({tab:s&4}),iu=s=>({tab:s[28]});function ru(s,e){let t,n;const i=e[20].default,r=xn(i,e,e[23],iu);return{key:s,first:null,c(){t=fr(),r&&r.c(),this.first=t},m(a,o){xe(a,t,o),r&&r.m(a,o),n=!0},p(a,o){e=a,r&&r.p&&(!n||o&8388612)&&Sn(r,i,e,e[23],n?yn(i,e[23],o,xv):bn(e[23]),iu)},i(a){n||(le(r,a),n=!0)},o(a){he(r,a),n=!1},d(a){a&&Se(t),r&&r.d(a)}}}function Sv(s){let e=[],t=new Map,n,i,r=s[2];const a=o=>o[3](o[28]);for(let o=0;o<r.length;o+=1){let l=nu(s,r,o),c=a(l);t.set(c,e[o]=ru(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=fr()},m(o,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(o,l);xe(o,n,l),i=!0},p(o,l){l&8388620&&(r=o[2],xt(),e=Dd(e,l,a,1,o,r,t,n.parentNode,Pd,ru,n,nu),St())},i(o){if(!i){for(let l=0;l<r.length;l+=1)le(e[l]);i=!0}},o(o){for(let l=0;l<e.length;l+=1)he(e[l]);i=!1},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&Se(n)}}}function bv(s){let e,t,n,i,r,a,o;const l=[qt(s[10],"tabScroller$")];let c={$$slots:{default:[Sv]},$$scope:{ctx:s}};for(let d=0;d<l.length;d+=1)c=Oe(c,l[d]);t=new vv({props:c}),s[21](t);let u=[{class:n=Ge({[s[1]]:!0,"mdc-tab-bar":!0})},{role:"tablist"},Pi(s[10],["tabScroller$"])],f={};for(let d=0;d<u.length;d+=1)f=Oe(f,u[d]);return{c(){e=ge("div"),pt(t.$$.fragment),et(e,f)},m(d,m){xe(d,e,m),mt(t,e,null),s[22](e),r=!0,a||(o=[ct(i=Dn.call(null,e,s[0])),ct(s[7].call(null,e)),Ye(e,"SMUITab:mount",s[8]),Ye(e,"SMUITab:unmount",s[9]),Ye(e,"SMUITab:interacted",function(){Xt(s[4]&&s[4].handleTabInteraction.bind(s[4]))&&(s[4]&&s[4].handleTabInteraction.bind(s[4])).apply(this,arguments)}),Ye(e,"keydown",function(){Xt(s[4]&&s[4].handleKeyDown.bind(s[4]))&&(s[4]&&s[4].handleKeyDown.bind(s[4])).apply(this,arguments)})],a=!0)},p(d,[m]){s=d;const _=m&1024?Lt(l,[Hr(qt(s[10],"tabScroller$"))]):{};m&8388612&&(_.$$scope={dirty:m,ctx:s}),t.$set(_),et(e,f=Lt(u,[(!r||m&2&&n!==(n=Ge({[s[1]]:!0,"mdc-tab-bar":!0})))&&{class:n},{role:"tablist"},m&1024&&Pi(s[10],["tabScroller$"])])),i&&Xt(i.update)&&m&1&&i.update.call(null,s[0])},i(d){r||(le(t.$$.fragment,d),r=!0)},o(d){he(t.$$.fragment,d),r=!1},d(d){d&&Se(e),s[21](null),gt(t),s[22](null),a=!1,Fi(o)}}}function yv(s,e,t){const n=["use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","scrollIntoView","getElement"];let i=ht(e,n),{$$slots:r={},$$scope:a}=e;const o=pi(di());let{use:l=[]}=e,{class:c=""}=e,{tabs:u=[]}=e,{key:f=R=>R}=e,{focusOnActivate:d=!0}=e,{focusOnProgrammatic:m=!1}=e,{useAutomaticActivation:_=!0}=e,{active:p=void 0}=e,h,g,v,y=u.indexOf(p),b={},w=new WeakMap,M=!1;er("SMUI:tab:focusOnActivate",d),er("SMUI:tab:initialActive",p),vn(()=>(t(4,g=new mv({scrollTo:R=>v.scrollTo(R),incrementScroll:R=>v.incrementScroll(R),getScrollPosition:()=>v.getScrollPosition(),getScrollContentWidth:()=>v.getScrollContentWidth(),getOffsetWidth:()=>z().offsetWidth,isRTL:()=>getComputedStyle(z()).getPropertyValue("direction")==="rtl",setActiveTab:R=>{t(11,p=u[R]),t(17,y=R),g.activateTab(R)},activateTabAtIndex:(R,D)=>{var C;return(C=T(u[R]))===null||C===void 0?void 0:C.activate(D,M)},deactivateTabAtIndex:R=>{var D;return(D=T(u[R]))===null||D===void 0?void 0:D.deactivate()},focusTabAtIndex:R=>{var D;return(D=T(u[R]))===null||D===void 0?void 0:D.focus()},getTabIndicatorClientRectAtIndex:R=>{var D,C;return(C=(D=T(u[R]))===null||D===void 0?void 0:D.computeIndicatorClientRect())!==null&&C!==void 0?C:new DOMRect},getTabDimensionsAtIndex:R=>{var D,C;return(C=(D=T(u[R]))===null||D===void 0?void 0:D.computeDimensions())!==null&&C!==void 0?C:{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var R;for(let D=0;D<u.length;D++)if(!((R=T(u[D]))===null||R===void 0)&&R.active)return D;return-1},getFocusedTabIndex:()=>{const R=u.map(C=>{var I;return(I=T(C))===null||I===void 0?void 0:I.element}),D=document.activeElement;return R.indexOf(D)},getIndexOfTabById:R=>u.indexOf(R),getTabListLength:()=>u.length,notifyTabActivated:R=>un(z(),"SMUITabBar:activated",{index:R},void 0,!0)})),g.init(),()=>{g.destroy()}));function S(R){const D=R.detail;N(D.tabId,D)}function x(R){const D=R.detail;O(D.tabId)}function T(R){return R instanceof Object?w.get(R):b[R]}function N(R,D){R instanceof Object?(w.set(R,D),t(19,w)):(t(18,b[R]=D,b),t(18,b))}function O(R){R instanceof Object?(w.delete(R),t(19,w)):(delete b[R],t(18,b))}function q(R){g.scrollIntoView(R)}function z(){return h}function F(R){ft[R?"unshift":"push"](()=>{v=R,t(6,v)})}function B(R){ft[R?"unshift":"push"](()=>{h=R,t(5,h)})}return s.$$set=R=>{e=Oe(Oe({},e),hi(R)),t(10,i=ht(e,n)),"use"in R&&t(0,l=R.use),"class"in R&&t(1,c=R.class),"tabs"in R&&t(2,u=R.tabs),"key"in R&&t(3,f=R.key),"focusOnActivate"in R&&t(12,d=R.focusOnActivate),"focusOnProgrammatic"in R&&t(13,m=R.focusOnProgrammatic),"useAutomaticActivation"in R&&t(14,_=R.useAutomaticActivation),"active"in R&&t(11,p=R.active),"$$scope"in R&&t(23,a=R.$$scope)},s.$$.update=()=>{if(s.$$.dirty&141332&&p!==u[y]&&(t(17,y=u.indexOf(p)),g&&(M=!m,g.activateTab(y),M=!1)),s.$$.dirty&917508&&u.length){const R=u[0]instanceof Object?w.get(u[0]):b[u[0]];R&&R.forceAccessible(y===-1)}s.$$.dirty&16400&&g&&g.setUseAutomaticActivation(_)},[l,c,u,f,g,h,v,o,S,x,i,p,d,m,_,q,z,y,b,w,r,F,B,a]}class Mv extends kt{constructor(e){super(),Bt(this,e,yv,bv,Ot,{use:0,class:1,tabs:2,key:3,focusOnActivate:12,focusOnProgrammatic:13,useAutomaticActivation:14,active:11,scrollIntoView:15,getElement:16})}get scrollIntoView(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}function su(s,e,t){const n=s.slice();return n[9]=e[t],n[11]=t,n}function wv(s){let e,t=s[12]+"",n;return{c(){e=ge("span"),n=Ht(t),_e(e,"class","tab-label svelte-h4cryy")},m(i,r){xe(i,e,r),pe(e,n)},p(i,r){r&4096&&t!==(t=i[12]+"")&&qr(n,t)},d(i){i&&Se(e)}}}function Tv(s){let e,t;return e=new lv({props:{class:"home_p2-tab",tab:s[12],minWidth:!0,$$slots:{default:[wv]},$$scope:{ctx:s}}}),e.$on("click",s[4]),{c(){pt(e.$$.fragment)},m(n,i){mt(e,n,i),t=!0},p(n,i){const r={};i&4096&&(r.tab=n[12]),i&12288&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){gt(e,n)}}}function Ev(s){let e,t,n=s[9].skill+"",i,r,a,o=s[9].score+"",l,c,u,f;return{c(){e=ge("div"),t=ge("div"),i=Ht(n),r=Ie(),a=ge("div"),l=Ht(o),c=Ie(),_e(t,"class","skill-name svelte-h4cryy"),_e(a,"class","skill-score svelte-h4cryy"),_e(e,"class","skills-list-item svelte-h4cryy")},m(d,m){xe(d,e,m),pe(e,t),pe(t,i),pe(e,r),pe(e,a),pe(a,l),pe(e,c),f=!0},p(d,m){(!f||m&2)&&n!==(n=d[9].skill+"")&&qr(i,n),(!f||m&2)&&o!==(o=d[9].score+"")&&qr(l,o)},i(d){f||(Ni(()=>{f&&(u||(u=Pt(e,It,{delay:50,duration:50*s[11]},!0)),u.run(1))}),f=!0)},o(d){u||(u=Pt(e,It,{delay:50,duration:50*s[11]},!1)),u.run(0),f=!1},d(d){d&&Se(e),d&&u&&u.end()}}}function Av(s){let e,t,n=s[9].tab+"",i,r,a,o;return{c(){e=ge("div"),t=ge("div"),i=Ht(n),r=Ie(),_e(t,"class","skill-tab"),_e(e,"class","skills-list-tab svelte-h4cryy")},m(l,c){xe(l,e,c),pe(e,t),pe(t,i),pe(e,r),o=!0},p(l,c){(!o||c&2)&&n!==(n=l[9].tab+"")&&qr(i,n)},i(l){o||(Ni(()=>{o&&(a||(a=Pt(e,It,{delay:50,duration:50*s[11]},!0)),a.run(1))}),o=!0)},o(l){a||(a=Pt(e,It,{delay:50,duration:50*s[11]},!1)),a.run(0),o=!1},d(l){l&&Se(e),l&&a&&a.end()}}}function au(s){let e,t,n,i;const r=[Av,Ev],a=[];function o(l,c){return l[9].tab?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=fr()},m(l,c){a[e].m(l,c),xe(l,n,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(xt(),he(a[u],1,1,()=>{a[u]=null}),St(),t=a[e],t?t.p(l,c):(t=a[e]=r[e](l),t.c()),le(t,1),t.m(n.parentNode,n))},i(l){i||(le(t),i=!0)},o(l){he(t),i=!1},d(l){a[e].d(l),l&&Se(n)}}}function ou(s){let e,t,n=s[1],i=[];for(let a=0;a<n.length;a+=1)i[a]=au(su(s,n,a));const r=a=>he(i[a],1,1,()=>{i[a]=null});return{c(){e=ge("div");for(let a=0;a<i.length;a+=1)i[a].c();_e(e,"class","skills-list svelte-h4cryy")},m(a,o){xe(a,e,o);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t=!0},p(a,o){if(o&2){n=a[1];let l;for(l=0;l<n.length;l+=1){const c=su(a,n,l);i[l]?(i[l].p(c,o),le(i[l],1)):(i[l]=au(c),i[l].c(),le(i[l],1),i[l].m(e,null))}for(xt(),l=n.length;l<i.length;l+=1)r(l);St()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)le(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)he(i[o]);t=!1},d(a){a&&Se(e),rs(i,a)}}}function Cv(s){let e,t,n,i,r=s[1],a,o;function l(f){s[7](f)}let c={class:"home_p2-tabbar",tabs:s[3],$$slots:{default:[Tv,({tab:f})=>({12:f}),({tab:f})=>f?4096:0]},$$scope:{ctx:s}};s[0]!==void 0&&(c.active=s[0]),t=new Mv({props:c}),ft.push(()=>Id(t,"active",l));let u=ou(s);return{c(){e=ge("div"),pt(t.$$.fragment),i=Ie(),u.c(),_e(e,"class","page page_2 svelte-h4cryy")},m(f,d){xe(f,e,d),mt(t,e,null),pe(e,i),u.m(e,null),o=!0},p(f,[d]){s=f;const m={};d&12288&&(m.$$scope={dirty:d,ctx:s}),!n&&d&1&&(n=!0,m.active=s[0],Od(()=>n=!1)),t.$set(m),d&2&&Ot(r,r=s[1])?(xt(),he(u,1,1,Ri),St(),u=ou(s),u.c(),le(u,1),u.m(e,null)):u.p(s,d)},i(f){o||(le(t.$$.fragment,f),le(u),Ni(()=>{o&&(a||(a=Pt(e,It,{delay:s[2],duration:wt},!0)),a.run(1))}),o=!0)},o(f){he(t.$$.fragment,f),he(u),a||(a=Pt(e,It,{delay:s[2],duration:wt},!1)),a.run(0),o=!1},d(f){f&&Se(e),gt(t),u.d(f),f&&a&&a.end()}}}function Lv(s,e,t){let n,i,r;yt(s,Fn,d=>t(5,i=d)),yt(s,Ei,d=>t(6,r=d));const a=pa;let o=a[0],l=Hc[o],c=null;const u=()=>{const d=o;setTimeout(()=>{if(d!==o){const m=l.length;t(1,l=[]),c&&(clearTimeout(c),c=null),c=setTimeout(()=>{t(1,l=Hc[o])},m*50)}},20)};vn(()=>{Fn.set(!1)});function f(d){o=d,t(0,o)}return s.$$.update=()=>{s.$$.dirty&96&&t(2,n=r===1?i?0:wt:0)},[o,l,n,a,u,i,r,f]}class Rv extends kt{constructor(e){super(),Bt(this,e,Lv,Cv,Ot,{})}}function lu(s,e,t){const n=s.slice();return n[3]=e[t],n[5]=t,n}function cu(s,e,t){const n=s.slice();return n[6]=e[t],n}function Dv(s){let e,t=s[3].job+"",n;return{c(){e=ge("div"),n=Ht(t),_e(e,"class","sub-job svelte-1c6wvpv")},m(i,r){xe(i,e,r),pe(e,n)},p:Ri,d(i){i&&Se(e)}}}function uu(s){let e,t=s[6]+"",n;return{c(){e=ge("div"),n=Ht(t),_e(e,"class","desc svelte-1c6wvpv")},m(i,r){xe(i,e,r),pe(e,n)},p:Ri,d(i){i&&Se(e)}}}function fu(s){let e,t,n=s[3].timeline+"",i,r,a,o=s[3].experience+"",l,c,u,f,d,m=s[3].job&&Dv(s),_=s[3].desc,p=[];for(let h=0;h<_.length;h+=1)p[h]=uu(cu(s,_,h));return{c(){e=ge("div"),t=ge("div"),i=Ht(n),r=Ie(),a=ge("div"),l=Ht(o),c=Ie(),m&&m.c(),u=Ie(),f=ge("div");for(let h=0;h<p.length;h+=1)p[h].c();d=Ie(),_e(t,"class","sub svelte-1c6wvpv"),_e(a,"class","main svelte-1c6wvpv"),_e(e,"class",Fd(`card card-${s[5]%2===0?"top":"bottom"}`)+" svelte-1c6wvpv")},m(h,g){xe(h,e,g),pe(e,t),pe(t,i),pe(e,r),pe(e,a),pe(a,l),pe(e,c),m&&m.m(e,null),pe(e,u),pe(e,f);for(let v=0;v<p.length;v+=1)p[v]&&p[v].m(f,null);pe(e,d)},p(h,g){if(h[3].job&&m.p(h,g),g&0){_=h[3].desc;let v;for(v=0;v<_.length;v+=1){const y=cu(h,_,v);p[v]?p[v].p(y,g):(p[v]=uu(y),p[v].c(),p[v].m(f,null))}for(;v<p.length;v+=1)p[v].d(1);p.length=_.length}},d(h){h&&Se(e),m&&m.d(),rs(p,h)}}}function Pv(s){let e,t,n,i,r=qc,a=[];for(let o=0;o<r.length;o+=1)a[o]=fu(lu(s,r,o));return{c(){e=ge("div"),t=ge("div");for(let o=0;o<a.length;o+=1)a[o].c();_e(t,"class","cards svelte-1c6wvpv"),_e(e,"class","page page_3 svelte-1c6wvpv")},m(o,l){xe(o,e,l),pe(e,t);for(let c=0;c<a.length;c+=1)a[c]&&a[c].m(t,null);i=!0},p(o,[l]){if(s=o,l&0){r=qc;let c;for(c=0;c<r.length;c+=1){const u=lu(s,r,c);a[c]?a[c].p(u,l):(a[c]=fu(u),a[c].c(),a[c].m(t,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=r.length}},i(o){i||(Ni(()=>{i&&(n||(n=Pt(e,It,{delay:s[0],duration:wt},!0)),n.run(1))}),i=!0)},o(o){n||(n=Pt(e,It,{delay:s[0],duration:wt},!1)),n.run(0),i=!1},d(o){o&&Se(e),rs(a,o),o&&n&&n.end()}}}function Iv(s,e,t){let n,i,r;return yt(s,Fn,a=>t(1,i=a)),yt(s,Ei,a=>t(2,r=a)),vn(()=>{Fn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===2?i?0:wt:0)},[n,i,r]}class Ov extends kt{constructor(e){super(),Bt(this,e,Iv,Pv,Ot,{})}}function Fv(s){let e,t,n,i,r,a;const o=s[13].default,l=xn(o,s,s[12],null);let c=[{class:t=Ge({[s[1]]:!0,"smui-accordion":!0,"smui-accordion--multiple":s[2],"smui-accordion--with-open-dialog":s[4]})},s[10]],u={};for(let f=0;f<c.length;f+=1)u=Oe(u,c[f]);return{c(){e=ge("div"),l&&l.c(),et(e,u)},m(f,d){xe(f,e,d),l&&l.m(e,null),s[14](e),i=!0,r||(a=[ct(n=Dn.call(null,e,s[0])),ct(s[5].call(null,e)),Ye(e,"SMUIAccordionPanel:mount",s[6]),Ye(e,"SMUIAccordionPanel:unmount",s[7]),Ye(e,"SMUIAccordionPanel:activate",s[8]),Ye(e,"SMUIAccordionPanel:opening",s[9]),Ye(e,"SMUIDialog:opening",s[15],!0),Ye(e,"SMUIDialog:closed",s[16],!0)],r=!0)},p(f,[d]){l&&l.p&&(!i||d&4096)&&Sn(l,o,f,f[12],i?yn(o,f[12],d,null):bn(f[12]),null),et(e,u=Lt(c,[(!i||d&22&&t!==(t=Ge({[f[1]]:!0,"smui-accordion":!0,"smui-accordion--multiple":f[2],"smui-accordion--with-open-dialog":f[4]})))&&{class:t},d&1024&&f[10]])),n&&Xt(n.update)&&d&1&&n.update.call(null,f[0])},i(f){i||(le(l,f),i=!0)},o(f){he(l,f),i=!1},d(f){f&&Se(e),l&&l.d(f),s[14](null),r=!1,Fi(a)}}}function Nv(s,e,t){const n=["use","class","multiple","getElement"];let i=ht(e,n),{$$slots:r={},$$scope:a}=e;const o=pi(di());let{use:l=[]}=e,{class:c=""}=e,{multiple:u=!1}=e,f,d=new Set,m=!1;function _(M){const S=M.detail;if(M.stopPropagation(),!u&&S.open){const x=Array.from(d).find(T=>T.open);x&&x.setOpen(!1)}d.add(S)}function p(M){const S=M.detail;d.has(S)&&(M.stopPropagation(),d.delete(S))}function h(M){const{accessor:S}=M.detail;if(d.has(S)){if(!u&&!S.open){const x=Array.from(d).find(T=>T.open);x&&x.setOpen(!1)}S.setOpen(!S.open)}}function g(M){const{accessor:S}=M.detail;d.has(S)&&(u||Array.from(d).filter(T=>T!==S&&T.open).forEach(T=>T.setOpen(!1)))}function v(){return f}function y(M){ft[M?"unshift":"push"](()=>{f=M,t(3,f)})}const b=()=>t(4,m=!0),w=()=>t(4,m=!1);return s.$$set=M=>{e=Oe(Oe({},e),hi(M)),t(10,i=ht(e,n)),"use"in M&&t(0,l=M.use),"class"in M&&t(1,c=M.class),"multiple"in M&&t(2,u=M.multiple),"$$scope"in M&&t(12,a=M.$$scope)},[l,c,u,f,m,o,_,p,h,g,i,v,a,r,y,b,w]}class zv extends kt{constructor(e){super(),Bt(this,e,Nv,Fv,Ot,{use:0,class:1,multiple:2,getElement:11})}get getElement(){return this.$$.ctx[11]}}function Uv(s){let e,t,n,i,r,a;const o=s[12].default,l=xn(o,s,s[11],null);let c=[{class:t=Ge({[s[1]]:!0,"smui-paper":!0,"smui-paper--raised":s[2]==="raised","smui-paper--unelevated":s[2]==="unelevated","smui-paper--outlined":s[2]==="outlined",["smui-paper--elevation-z"+s[5]]:s[5]!==0&&s[2]==="raised","smui-paper--rounded":!s[3],["smui-paper--color-"+s[4]]:s[4]!=="default","smui-paper-transition":s[6]})},s[9]],u={};for(let f=0;f<c.length;f+=1)u=Oe(u,c[f]);return{c(){e=ge("div"),l&&l.c(),et(e,u)},m(f,d){xe(f,e,d),l&&l.m(e,null),s[13](e),i=!0,r||(a=[ct(n=Dn.call(null,e,s[0])),ct(s[8].call(null,e))],r=!0)},p(f,[d]){l&&l.p&&(!i||d&2048)&&Sn(l,o,f,f[11],i?yn(o,f[11],d,null):bn(f[11]),null),et(e,u=Lt(c,[(!i||d&126&&t!==(t=Ge({[f[1]]:!0,"smui-paper":!0,"smui-paper--raised":f[2]==="raised","smui-paper--unelevated":f[2]==="unelevated","smui-paper--outlined":f[2]==="outlined",["smui-paper--elevation-z"+f[5]]:f[5]!==0&&f[2]==="raised","smui-paper--rounded":!f[3],["smui-paper--color-"+f[4]]:f[4]!=="default","smui-paper-transition":f[6]})))&&{class:t},d&512&&f[9]])),n&&Xt(n.update)&&d&1&&n.update.call(null,f[0])},i(f){i||(le(l,f),i=!0)},o(f){he(l,f),i=!1},d(f){f&&Se(e),l&&l.d(f),s[13](null),r=!1,Fi(a)}}}function kv(s,e,t){const n=["use","class","variant","square","color","elevation","transition","getElement"];let i=ht(e,n),{$$slots:r={},$$scope:a}=e;const o=pi(di());let{use:l=[]}=e,{class:c=""}=e,{variant:u="raised"}=e,{square:f=!1}=e,{color:d="default"}=e,{elevation:m=1}=e,{transition:_=!1}=e,p;function h(){return p}function g(v){ft[v?"unshift":"push"](()=>{p=v,t(7,p)})}return s.$$set=v=>{e=Oe(Oe({},e),hi(v)),t(9,i=ht(e,n)),"use"in v&&t(0,l=v.use),"class"in v&&t(1,c=v.class),"variant"in v&&t(2,u=v.variant),"square"in v&&t(3,f=v.square),"color"in v&&t(4,d=v.color),"elevation"in v&&t(5,m=v.elevation),"transition"in v&&t(6,_=v.transition),"$$scope"in v&&t(11,a=v.$$scope)},[l,c,u,f,d,m,_,p,o,i,h,a,r,g]}class Bv extends kt{constructor(e){super(),Bt(this,e,kv,Uv,Ot,{use:0,class:1,variant:2,square:3,color:4,elevation:5,transition:6,getElement:10})}get getElement(){return this.$$.ctx[10]}}const Vv=el({class:"smui-paper__content",tag:"div"});el({class:"smui-paper__title",tag:"h5"});el({class:"smui-paper__subtitle",tag:"h6"});function Gv(s){let e;const t=s[23].default,n=xn(t,s,s[25],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&33554432)&&Sn(n,t,i,i[25],e?yn(t,i[25],r,null):bn(i[25]),null)},i(i){e||(le(n,i),e=!0)},o(i){he(n,i),e=!1},d(i){n&&n.d(i)}}}function Wv(s){let e,t;const n=[{use:s[11]},{class:Ge({[s[1]]:!0,"smui-accordion__panel":!0,"smui-accordion__panel--open":s[0],"smui-accordion__panel--opened":s[10],"smui-accordion__panel--disabled":s[5],"smui-accordion__panel--non-interactive":s[6],"smui-accordion__panel--raised":s[2]==="raised","smui-accordion__panel--extend":s[7],["smui-accordion__panel--elevation-z"+(s[7]&&s[0]?s[8]:s[4])]:s[4]!==0&&s[2]==="raised"||s[8]!==0&&s[2]==="raised"&&s[7]&&s[0]})},{color:s[3]},{variant:s[2]==="raised"?"unelevated":s[2]},s[16]];let i={$$slots:{default:[Gv]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Oe(i,n[r]);return e=new Bv({props:i}),s[24](e),e.$on("SMUIAccordionHeader:activate",s[15]),{c(){pt(e.$$.fragment)},m(r,a){mt(e,r,a),t=!0},p(r,[a]){const o=a&69119?Lt(n,[a&2048&&{use:r[11]},a&1527&&{class:Ge({[r[1]]:!0,"smui-accordion__panel":!0,"smui-accordion__panel--open":r[0],"smui-accordion__panel--opened":r[10],"smui-accordion__panel--disabled":r[5],"smui-accordion__panel--non-interactive":r[6],"smui-accordion__panel--raised":r[2]==="raised","smui-accordion__panel--extend":r[7],["smui-accordion__panel--elevation-z"+(r[7]&&r[0]?r[8]:r[4])]:r[4]!==0&&r[2]==="raised"||r[8]!==0&&r[2]==="raised"&&r[7]&&r[0]})},a&8&&{color:r[3]},a&4&&{variant:r[2]==="raised"?"unelevated":r[2]},a&65536&&Hr(r[16])]):{};a&33554432&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(le(e.$$.fragment,r),t=!0)},o(r){he(e.$$.fragment,r),t=!1},d(r){s[24](null),gt(e,r)}}}function Hv(s,e,t){let n;const i=["use","class","variant","color","elevation","open","disabled","nonInteractive","extend","extendedElevation","isOpen","setOpen","getElement"];let r=ht(e,i),a,o,l,{$$slots:c={},$$scope:u}=e;const f=pi(di());let{use:d=[]}=e,{class:m=""}=e,{variant:_="raised"}=e,{color:p="default"}=e,{elevation:h=1}=e,{open:g=!1}=e,{disabled:v=!1}=e,{nonInteractive:y=!1}=e,{extend:b=!1}=e,{extendedElevation:w=3}=e,M,S,x=g;const T=xs(v);yt(s,T,C=>t(28,l=C)),er("SMUI:accordion:panel:disabled",T);const N=xs(y);yt(s,N,C=>t(27,o=C)),er("SMUI:accordion:panel:nonInteractive",N);const O=xs(g);yt(s,O,C=>t(26,a=C)),er("SMUI:accordion:panel:open",O);let q=g;vn(()=>(t(21,S={get open(){return g},setOpen:B}),Array.from(R().children).forEach(C=>{C.classList.contains("smui-paper__content")&&C.setAttribute("aria-hidden",g?"false":"true")}),un(R(),"SMUIAccordionPanel:mount",S),()=>{un(R(),"SMUIAccordionPanel:unmount",S)}));function z(C){C.stopPropagation(),!(v||y)&&un(R(),"SMUIAccordionPanel:activate",{accessor:S,event:C})}function F(){return g}function B(C){t(0,g=C)}function R(){return M.getElement()}function D(C){ft[C?"unshift":"push"](()=>{M=C,t(9,M)})}return s.$$set=C=>{e=Oe(Oe({},e),hi(C)),t(16,r=ht(e,i)),"use"in C&&t(17,d=C.use),"class"in C&&t(1,m=C.class),"variant"in C&&t(2,_=C.variant),"color"in C&&t(3,p=C.color),"elevation"in C&&t(4,h=C.elevation),"open"in C&&t(0,g=C.open),"disabled"in C&&t(5,v=C.disabled),"nonInteractive"in C&&t(6,y=C.nonInteractive),"extend"in C&&t(7,b=C.extend),"extendedElevation"in C&&t(8,w=C.extendedElevation),"$$scope"in C&&t(25,u=C.$$scope)},s.$$.update=()=>{s.$$.dirty&131072&&t(11,n=[f,...d]),s.$$.dirty&32&&fa(T,l=v,l),s.$$.dirty&64&&fa(N,o=y,o),s.$$.dirty&1&&fa(O,a=g,a),s.$$.dirty&6291457&&q!==g&&(t(22,q=g),Array.from(R().children).forEach(C=>{if(C.classList.contains("smui-paper__content")){const I=C;if(g){I.classList.add("smui-accordion__content--no-transition"),I.classList.add("smui-accordion__content--force-open");const{height:G}=I.getBoundingClientRect();I.classList.remove("smui-accordion__content--force-open"),I.getBoundingClientRect(),I.classList.remove("smui-accordion__content--no-transition"),I.style.height=G+"px",I.addEventListener("transitionend",()=>{I&&(I.style.height=""),t(10,x=g),un(R(),"SMUIAccordionPanel:opened",{accessor:S})},{once:!0})}else I.style.height=I.getBoundingClientRect().height+"px",I.getBoundingClientRect(),requestAnimationFrame(()=>{I&&(I.style.height=""),un(R(),"SMUIAccordionPanel:closed",{accessor:S})}),t(10,x=!1);I.setAttribute("aria-hidden",g?"false":"true")}}),un(R(),g?"SMUIAccordionPanel:opening":"SMUIAccordionPanel:closing",{accessor:S}))},[g,m,_,p,h,v,y,b,w,M,x,n,T,N,O,z,r,d,F,B,R,S,q,c,D,u]}class qv extends kt{constructor(e){super(),Bt(this,e,Hv,Wv,Ot,{use:17,class:1,variant:2,color:3,elevation:4,open:0,disabled:5,nonInteractive:6,extend:7,extendedElevation:8,isOpen:18,setOpen:19,getElement:20})}get isOpen(){return this.$$.ctx[18]}get setOpen(){return this.$$.ctx[19]}get getElement(){return this.$$.ctx[20]}}const Xv=s=>({}),du=s=>({}),Yv=s=>({}),hu=s=>({});function pu(s){let e;return{c(){e=ge("div"),_e(e,"class","smui-accordion__header__ripple")},m(t,n){xe(t,e,n)},d(t){t&&Se(e)}}}function mu(s){let e,t;const n=s[23].description,i=xn(n,s,s[22],hu);return{c(){e=ge("div"),i&&i.c(),_e(e,"class","smui-accordion__header__description")},m(r,a){xe(r,e,a),i&&i.m(e,null),t=!0},p(r,a){i&&i.p&&(!t||a&4194304)&&Sn(i,n,r,r[22],t?yn(n,r[22],a,Yv):bn(r[22]),hu)},i(r){t||(le(i,r),t=!0)},o(r){he(i,r),t=!1},d(r){r&&Se(e),i&&i.d(r)}}}function gu(s){let e,t;const n=s[23].icon,i=xn(n,s,s[22],du);return{c(){e=ge("div"),i&&i.c(),_e(e,"class","smui-accordion__header__icon")},m(r,a){xe(r,e,a),i&&i.m(e,null),t=!0},p(r,a){i&&i.p&&(!t||a&4194304)&&Sn(i,n,r,r[22],t?yn(n,r[22],a,Xv):bn(r[22]),du)},i(r){t||(le(i,r),t=!0)},o(r){he(i,r),t=!1},d(r){r&&Se(e),i&&i.d(r)}}}function jv(s){let e,t,n,i,r,a,o,l,c,u,f,d,m,_,p,h=s[3]&&pu();const g=s[23].default,v=xn(g,s,s[22],null);let y=s[20].description&&mu(s),b=s[20].icon&&gu(s),w=[{class:o=Ge({[s[1]]:!0,"smui-accordion__header":!0,...s[5]})},{style:l=Object.entries(s[6]).map(_u).concat([s[2]]).join(" ")},{role:"button"},{tabindex:c=s[7]?-1:0},{"aria-expanded":u=s[9]?"true":"false"},s[19]],M={};for(let S=0;S<w.length;S+=1)M=Oe(M,w[S]);return{c(){e=ge("div"),h&&h.c(),t=Ie(),n=ge("div"),v&&v.c(),r=Ie(),y&&y.c(),a=Ie(),b&&b.c(),_e(n,"class",i=Ge({"smui-accordion__header__title":!0,"smui-accordion__header__title--with-description":s[20].description})),et(e,M)},m(S,x){xe(S,e,x),h&&h.m(e,null),pe(e,t),pe(e,n),v&&v.m(n,null),pe(e,r),y&&y.m(e,null),pe(e,a),b&&b.m(e,null),s[24](e),m=!0,_||(p=[ct(f=Dn.call(null,e,s[0])),ct(s[10].call(null,e)),ct(d=Lo.call(null,e,{ripple:s[3],unbounded:!1,surface:!s[7],disabled:s[8]||s[7],addClass:s[16],removeClass:s[17],addStyle:s[18]})),Ye(e,"click",s[14]),Ye(e,"keydown",s[15])],_=!0)},p(S,[x]){S[3]?h||(h=pu(),h.c(),h.m(e,t)):h&&(h.d(1),h=null),v&&v.p&&(!m||x&4194304)&&Sn(v,g,S,S[22],m?yn(g,S[22],x,null):bn(S[22]),null),(!m||x&1048576&&i!==(i=Ge({"smui-accordion__header__title":!0,"smui-accordion__header__title--with-description":S[20].description})))&&_e(n,"class",i),S[20].description?y?(y.p(S,x),x&1048576&&le(y,1)):(y=mu(S),y.c(),le(y,1),y.m(e,a)):y&&(xt(),he(y,1,1,()=>{y=null}),St()),S[20].icon?b?(b.p(S,x),x&1048576&&le(b,1)):(b=gu(S),b.c(),le(b,1),b.m(e,null)):b&&(xt(),he(b,1,1,()=>{b=null}),St()),et(e,M=Lt(w,[(!m||x&34&&o!==(o=Ge({[S[1]]:!0,"smui-accordion__header":!0,...S[5]})))&&{class:o},(!m||x&68&&l!==(l=Object.entries(S[6]).map(_u).concat([S[2]]).join(" ")))&&{style:l},{role:"button"},(!m||x&128&&c!==(c=S[7]?-1:0))&&{tabindex:c},(!m||x&512&&u!==(u=S[9]?"true":"false"))&&{"aria-expanded":u},x&524288&&S[19]])),f&&Xt(f.update)&&x&1&&f.update.call(null,S[0]),d&&Xt(d.update)&&x&392&&d.update.call(null,{ripple:S[3],unbounded:!1,surface:!S[7],disabled:S[8]||S[7],addClass:S[16],removeClass:S[17],addStyle:S[18]})},i(S){m||(le(v,S),le(y),le(b),m=!0)},o(S){he(v,S),he(y),he(b),m=!1},d(S){S&&Se(e),h&&h.d(),v&&v.d(S),y&&y.d(),b&&b.d(),s[24](null),_=!1,Fi(p)}}}const _u=([s,e])=>`${s}: ${e};`;function Kv(s,e,t){const n=["use","class","style","ripple","getElement"];let i=ht(e,n),r,a,o,{$$slots:l={},$$scope:c}=e;const u=Nd(l),f=pi(di());let{use:d=[]}=e,{class:m=""}=e,{style:_=""}=e,{ripple:p=!0}=e,h,g={},v={};const y=$i("SMUI:accordion:panel:disabled");yt(s,y,z=>t(8,a=z));const b=$i("SMUI:accordion:panel:nonInteractive");yt(s,b,z=>t(7,r=z));const w=$i("SMUI:accordion:panel:open");yt(s,w,z=>t(9,o=z));function M(z){z=z,z.button===0&&un(O(),"SMUIAccordionHeader:activate",{event:z})}function S(z){z=z,z.key==="Enter"&&un(O(),"SMUIAccordionHeader:activate",{event:z})}function x(z){g[z]||t(5,g[z]=!0,g)}function T(z){(!(z in g)||g[z])&&t(5,g[z]=!1,g)}function N(z,F){v[z]!=F&&(F===""||F==null?(delete v[z],t(6,v)):t(6,v[z]=F,v))}function O(){return h}function q(z){ft[z?"unshift":"push"](()=>{h=z,t(4,h)})}return s.$$set=z=>{e=Oe(Oe({},e),hi(z)),t(19,i=ht(e,n)),"use"in z&&t(0,d=z.use),"class"in z&&t(1,m=z.class),"style"in z&&t(2,_=z.style),"ripple"in z&&t(3,p=z.ripple),"$$scope"in z&&t(22,c=z.$$scope)},[d,m,_,p,h,g,v,r,a,o,f,y,b,w,M,S,x,T,N,i,u,O,c,l,q]}class Zv extends kt{constructor(e){super(),Bt(this,e,Kv,jv,Ot,{use:0,class:1,style:2,ripple:3,getElement:21})}get getElement(){return this.$$.ctx[21]}}function vu(s,e,t){const n=s.slice();return n[3]=e[t],n}function xu(s,e,t){const n=s.slice();return n[6]=e[t],n}function Jv(s){let e=s[3].title+"",t;return{c(){t=Ht(e)},m(n,i){xe(n,t,i)},p:Ri,d(n){n&&Se(t)}}}function Su(s){let e,t=s[6]+"",n;return{c(){e=ge("div"),n=Ht(t)},m(i,r){xe(i,e,r),pe(e,n)},p:Ri,d(i){i&&Se(e)}}}function Qv(s){let e,t=s[3].desc,n=[];for(let i=0;i<t.length;i+=1)n[i]=Su(xu(s,t,i));return{c(){for(let i=0;i<n.length;i+=1)n[i].c();e=fr()},m(i,r){for(let a=0;a<n.length;a+=1)n[a]&&n[a].m(i,r);xe(i,e,r)},p(i,r){if(r&0){t=i[3].desc;let a;for(a=0;a<t.length;a+=1){const o=xu(i,t,a);n[a]?n[a].p(o,r):(n[a]=Su(o),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=t.length}},d(i){rs(n,i),i&&Se(e)}}}function $v(s){let e,t,n,i,r;return e=new Zv({props:{$$slots:{default:[Jv]},$$scope:{ctx:s}}}),n=new Vv({props:{$$slots:{default:[Qv]},$$scope:{ctx:s}}}),{c(){pt(e.$$.fragment),t=Ie(),pt(n.$$.fragment),i=Ie()},m(a,o){mt(e,a,o),xe(a,t,o),mt(n,a,o),xe(a,i,o),r=!0},p(a,o){const l={};o&512&&(l.$$scope={dirty:o,ctx:a}),e.$set(l);const c={};o&512&&(c.$$scope={dirty:o,ctx:a}),n.$set(c)},i(a){r||(le(e.$$.fragment,a),le(n.$$.fragment,a),r=!0)},o(a){he(e.$$.fragment,a),he(n.$$.fragment,a),r=!1},d(a){gt(e,a),a&&Se(t),gt(n,a),a&&Se(i)}}}function bu(s){let e,t;return e=new qv({props:{$$slots:{default:[$v]},$$scope:{ctx:s}}}),{c(){pt(e.$$.fragment)},m(n,i){mt(e,n,i),t=!0},p(n,i){const r={};i&512&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){gt(e,n)}}}function ex(s){let e,t,n=Xc,i=[];for(let a=0;a<n.length;a+=1)i[a]=bu(vu(s,n,a));const r=a=>he(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=fr()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);xe(a,e,o),t=!0},p(a,o){if(o&0){n=Xc;let l;for(l=0;l<n.length;l+=1){const c=vu(a,n,l);i[l]?(i[l].p(c,o),le(i[l],1)):(i[l]=bu(c),i[l].c(),le(i[l],1),i[l].m(e.parentNode,e))}for(xt(),l=n.length;l<i.length;l+=1)r(l);St()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)le(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)he(i[o]);t=!1},d(a){rs(i,a),a&&Se(e)}}}function tx(s){let e,t,n,i,r,a;return i=new zv({props:{class:"home_p4-accordion",$$slots:{default:[ex]},$$scope:{ctx:s}}}),{c(){e=ge("div"),t=ge("div"),t.textContent="something of hobby",n=Ie(),pt(i.$$.fragment),_e(t,"class","title svelte-pfgiy3"),_e(e,"class","page page_4 svelte-pfgiy3")},m(o,l){xe(o,e,l),pe(e,t),pe(e,n),mt(i,e,null),a=!0},p(o,[l]){s=o;const c={};l&512&&(c.$$scope={dirty:l,ctx:s}),i.$set(c)},i(o){a||(le(i.$$.fragment,o),Ni(()=>{a&&(r||(r=Pt(e,It,{delay:s[0],duration:wt},!0)),r.run(1))}),a=!0)},o(o){he(i.$$.fragment,o),r||(r=Pt(e,It,{delay:s[0],duration:wt},!1)),r.run(0),a=!1},d(o){o&&Se(e),gt(i),o&&r&&r.end()}}}function nx(s,e,t){let n,i,r;return yt(s,Fn,a=>t(1,i=a)),yt(s,Ei,a=>t(2,r=a)),vn(()=>{Fn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===3?i?0:wt:0)},[n,i,r]}class ix extends kt{constructor(e){super(),Bt(this,e,nx,tx,Ot,{})}}function rx(s){let e,t,n;return{c(){e=ge("div"),e.innerHTML=`<div class="title svelte-11lnr6a">联系方式</div> 
  <div class="methods svelte-11lnr6a"><div class="method svelte-11lnr6a"><svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg> 
      <span class="text svelte-11lnr6a">Github</span> 
      <a class="link svelte-11lnr6a" href="https://github.com/mahiru-forever" target="_blank"></a></div> 
    <div class="method method-wx svelte-11lnr6a"><div class="wx svelte-11lnr6a"></div> 
      <span class="text svelte-11lnr6a">微信</span> 
      <div class="qr-code  svelte-11lnr6a"><div class="wx-code svelte-11lnr6a"></div></div></div> 
    <div class="method method-qq svelte-11lnr6a"><div class="qq svelte-11lnr6a"></div> 
      <span class="text svelte-11lnr6a">QQ</span> 
      <div class="qr-code svelte-11lnr6a"><div class="qq-code svelte-11lnr6a"></div></div></div> 
    <div class="method svelte-11lnr6a"><div class="mail svelte-11lnr6a"></div> 
      <span class="text svelte-11lnr6a">邮箱</span> 
      <a class="link svelte-11lnr6a" href="mailto:13405586521@163.com"></a></div></div>`,_e(e,"class","page page_5 svelte-11lnr6a")},m(i,r){xe(i,e,r),n=!0},p(i,[r]){s=i},i(i){n||(Ni(()=>{n&&(t||(t=Pt(e,It,{delay:s[0],duration:wt},!0)),t.run(1))}),n=!0)},o(i){t||(t=Pt(e,It,{delay:s[0],duration:wt},!1)),t.run(0),n=!1},d(i){i&&Se(e),i&&t&&t.end()}}}function sx(s,e,t){let n,i,r;return yt(s,Fn,a=>t(1,i=a)),yt(s,Ei,a=>t(2,r=a)),vn(()=>{Fn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===4?i?0:wt:0)},[n,i,r]}class ax extends kt{constructor(e){super(),Bt(this,e,sx,rx,Ot,{})}}const ox=(s,e,t)=>new Di({uniforms:{uTime:{value:0},uTexture:{value:s},uDepthTexture:{value:e},uMouse:{value:t}},vertexShader:`
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
    `});function ri(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ef(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jr={duration:.5,overwrite:!1,delay:0},sl,Rt,at,hn=1e8,Xe=1/hn,ko=Math.PI*2,lx=ko/4,cx=0,Af=Math.sqrt,ux=Math.cos,fx=Math.sin,_t=function(e){return typeof e=="string"},tt=function(e){return typeof e=="function"},ui=function(e){return typeof e=="number"},al=function(e){return typeof e>"u"},jn=function(e){return typeof e=="object"},Yt=function(e){return e!==!1},ol=function(){return typeof window<"u"},ua=function(e){return tt(e)||_t(e)},Cf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dt=Array.isArray,Bo=/(?:-?\.?\d|\.)+/gi,Lf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,So=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rf=/[+-]=-?[.\d]+/,Df=/[^,'"\[\]\s]+/gi,dx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ke,cn,Vo,ll,an={},va={},Pf,If=function(e){return(va=ur(e,an))&&Zt},cl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xa=function(e,t){return!t&&console.warn(e)},Of=function(e,t){return e&&(an[e]=t)&&va&&(va[e]=t)||an},As=function(){return 0},hx={suppressEvents:!0,isStart:!0,kill:!1},ma={suppressEvents:!0,kill:!1},px={suppressEvents:!0},ul={},Ci=[],Go={},Ff,tn={},bo={},yu=30,ga=[],fl="",dl=function(e){var t=e[0],n,i;if(jn(t)||tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ga.length;i--&&!ga[i].targetTest(t););n=ga[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new sd(e[i],n)))||e.splice(i,1);return e},rr=function(e){return e._gsap||dl(pn(e))[0]._gsap},Nf=function(e,t,n){return(n=e[t])&&tt(n)?e[t]():al(n)&&e.getAttribute&&e.getAttribute(t)||n},jt=function(e,t){return(e=e.split(",")).forEach(t)||e},nt=function(e){return Math.round(e*1e5)/1e5||0},bt=function(e){return Math.round(e*1e7)/1e7||0},Vr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},mx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Sa=function(){var e=Ci.length,t=Ci.slice(0),n,i;for(Go={},Ci.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zf=function(e,t,n,i){Ci.length&&!Rt&&Sa(),e.render(t,n,i||Rt&&t<0&&(e._initted||e._startAt)),Ci.length&&!Rt&&Sa()},Uf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Df).length<2?t:_t(e)?e.trim():e},kf=function(e){return e},_n=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},gx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ur=function(e,t){for(var n in t)e[n]=t[n];return e},Mu=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=jn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},ba=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ss=function(e){var t=e.parent||Ke,n=e.keyframes?gx(Dt(e.keyframes)):_n;if(Yt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_x=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Bf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ia=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ii=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},sr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},vx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wo=function(e,t,n,i){return e._startAt&&(Rt?e._startAt.revert(ma):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},xx=function s(e){return!e||e._ts&&s(e.parent)},wu=function(e){return e._repeat?Qr(e._tTime,e=e.duration()+e._rDelay)*e:0},Qr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ya=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Oa=function(e){return e._end=bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Xe)||0))},Fa=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=bt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Oa(e),n._dirty||sr(n,e)),e},Vf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ya(e.rawTime(),t),(!t._dur||Bs(0,t.totalDuration(),n)-t._tTime>Xe)&&t.render(n,!0)),sr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Xe}},Gn=function(e,t,n,i){return t.parent&&Ii(t),t._start=bt((ui(n)?n:n||e!==Ke?ln(e,n,t):e._time)+t._delay),t._end=bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Bf(e,t,"_first","_last",e._sort?"_start":0),Ho(t)||(e._recent=t),i||Vf(e,t),e._ts<0&&Fa(e,e._tTime),e},Gf=function(e,t){return(an.ScrollTrigger||cl("scrollTrigger",t))&&an.ScrollTrigger.create(t,e)},Wf=function(e,t,n,i,r){if(pl(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Rt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ff!==rn.frame)return Ci.push(e),e._lazy=[r,i],1},Sx=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Ho=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bx=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&Sx(e)&&!(!e._initted&&Ho(e))||(e._ts<0||e._dp._ts<0)&&!Ho(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Bs(0,e._tDur,t),u=Qr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Qr(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Rt||i||e._zTime===Xe||!t&&e._zTime){if(!e._initted&&Wf(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Xe:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Wo(e,t,n,!0),e._onUpdate&&!n&&mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ii(e,1),!n&&!Rt&&(mn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$r=function(e,t,n,i){var r=e._repeat,a=bt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:bt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&Fa(e,e._tTime=e._tDur*o),e.parent&&Oa(e),n||sr(e.parent,e),e},Tu=function(e){return e instanceof Wt?sr(e):$r(e,e._dur)},Mx={_start:0,endTime:As,totalDuration:As},ln=function s(e,t,n){var i=e.labels,r=e._recent||Mx,a=e.duration()>=hn?r.endTime(!1):e._dur,o,l,c;return _t(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Dt(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},bs=function(e,t,n){var i=ui(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Yt(l.vars.inherit)&&l.parent;a.immediateRender=Yt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new lt(t[0],a,t[r+1])},zi=function(e,t){return e||e===0?t(e):t},Bs=function(e,t,n){return n<e?e:n>t?t:n},Ct=function(e,t){return!_t(e)||!(t=dx.exec(e))?"":t[1]},wx=function(e,t,n){return zi(n,function(i){return Bs(e,t,i)})},qo=[].slice,Hf=function(e,t){return e&&jn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&jn(e[0]))&&!e.nodeType&&e!==cn},Tx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return _t(i)&&!t||Hf(i,1)?(r=n).push.apply(r,pn(i)):n.push(i)})||n},pn=function(e,t,n){return at&&!t&&at.selector?at.selector(e):_t(e)&&!n&&(Vo||!es())?qo.call((t||ll).querySelectorAll(e),0):Dt(e)?Tx(e,n):Hf(e)?qo.call(e,0):e?[e]:[]},Xo=function(e){return e=pn(e)[0]||xa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pn(t,n.querySelectorAll?n:n===e?xa("Invalid scope")||ll.createElement("div"):e)}},qf=function(e){return e.sort(function(){return .5-Math.random()})},Xf=function(e){if(tt(e))return e;var t=jn(e)?e:{each:e},n=ar(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return _t(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,m,_){var p=(_||t).length,h=a[p],g,v,y,b,w,M,S,x,T;if(!h){if(T=t.grid==="auto"?0:(t.grid||[1,hn])[1],!T){for(S=-hn;S<(S=_[T++].getBoundingClientRect().left)&&T<p;);T--}for(h=a[p]=[],g=l?Math.min(T,p)*u-.5:i%T,v=T===hn?0:l?p*f/T-.5:i/T|0,S=0,x=hn,M=0;M<p;M++)y=M%T-g,b=v-(M/T|0),h[M]=w=c?Math.abs(c==="y"?b:y):Af(y*y+b*b),w>S&&(S=w),w<x&&(x=w);i==="random"&&qf(h),h.max=S-x,h.min=x,h.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(T>p?p-1:c?c==="y"?p/T:T:Math.max(T,p/T))||0)*(i==="edges"?-1:1),h.b=p<0?r-p:r,h.u=Ct(t.amount||t.each)||0,n=n&&p<0?nd(n):n}return p=(h[d]-h.min)/h.max||0,bt(h.b+(n?n(p):p)*h.v)+h.u}},Yo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=bt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ui(n)?0:Ct(n))}},Yf=function(e,t){var n=Dt(e),i,r;return!n&&jn(e)&&(i=n=e.radius||hn,e.values?(e=pn(e.values),(r=!ui(e[0]))&&(i*=i)):e=Yo(e.increment)),zi(t,n?tt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=hn,u=0,f=e.length,d,m;f--;)r?(d=e[f].x-o,m=e[f].y-l,d=d*d+m*m):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,r||u===a||ui(a)?u:u+Ct(a)}:Yo(e))},jf=function(e,t,n,i){return zi(Dt(e)?!t:n===!0?!!(n=0):!i,function(){return Dt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ex=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},Ax=function(e,t){return function(n){return e(parseFloat(n))+(t||Ct(n))}},Cx=function(e,t,n){return Zf(e,t,0,1,n)},Kf=function(e,t,n){return zi(n,function(i){return e[~~t(i)]})},Lx=function s(e,t,n){var i=t-e;return Dt(e)?Kf(e,s(0,e.length),t):zi(n,function(r){return(i+(r-e)%i)%i+e})},Rx=function s(e,t,n){var i=t-e,r=i*2;return Dt(e)?Kf(e,s(0,e.length-1),t):zi(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Cs=function(e){for(var t=0,n="",i,r,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",r=e.substr(i+7,a-i-7).match(o?Df:Bo),n+=e.substr(t,i-t)+jf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Zf=function(e,t,n,i,r){var a=t-e,o=i-n;return zi(r,function(l){return n+((l-e)/a*o||0)})},Dx=function s(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var a=_t(e),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Dt(e)&&!Dt(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(s(e[c-1],e[c]));f--,r=function(_){_*=f;var p=Math.min(d,~~_);return u[p](_-p)},n=t}else i||(e=ur(Dt(e)?[]:{},e));if(!u){for(l in t)hl.call(o,e,l,"get",t[l]);r=function(_){return _l(_,o)||(a?e.p:e)}}}return zi(n,r)},Eu=function(e,t,n){var i=e.labels,r=hn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},mn=function(e,t,n){var i=e.vars,r=i[t],a=at,o=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ci.length&&Sa(),o&&(at=o),u=l?r.apply(c,l):r.call(c),at=a,u},_s=function(e){return Ii(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rt),e.progress()<1&&mn(e,"onInterrupt"),e},zr,Jf=[],Qf=function(e){if(!ol()){Jf.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=tt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:As,render:_l,add:hl,kill:Yx,modifier:Xx,rawVars:0},a={targetTest:0,get:0,getSetter:gl,aliases:{},register:0};if(es(),e!==i){if(tn[t])return;_n(i,_n(ba(e,r),a)),ur(i.prototype,ur(r,ba(e,a))),tn[i.prop=t]=i,e.targetTest&&(ga.push(i),ul[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Of(t,i),e.register&&e.register(Zt,i,Kt)},qe=255,vs={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},yo=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*qe+.5|0},$f=function(e,t,n){var i=e?ui(e)?[e>>16,e>>8&qe,e&qe]:0:vs.black,r,a,o,l,c,u,f,d,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vs[e])i=vs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&qe,i&qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&qe,e&qe]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Bo),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=yo(l+1/3,r,a),i[1]=yo(l,r,a),i[2]=yo(l-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Lf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Bo)||vs.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/qe,a=i[1]/qe,o=i[2]/qe,f=Math.max(r,a,o),d=Math.min(r,a,o),u=(f+d)/2,f===d?l=c=0:(m=f-d,c=u>.5?m/(2-f-d):m/(f+d),l=f===r?(a-o)/m+(a<o?6:0):f===a?(o-r)/m+2:(r-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ed=function(e){var t=[],n=[],i=-1;return e.split(Li).forEach(function(r){var a=r.match(Nr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Au=function(e,t,n){var i="",r=(e+i).match(Li),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!r)return e;if(r=r.map(function(d){return(d=$f(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=ed(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Li,"1").split(Nr),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Li),f=c.length-1;o<f;o++)i+=c[o]+r[o];return i+c[f]},Li=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vs)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),Px=/hsl[a]?\(/,td=function(e){var t=e.join(" "),n;if(Li.lastIndex=0,Li.test(t))return n=Px.test(t),e[1]=Au(e[1],n),e[0]=Au(e[0],n,ed(e[1])),!0},Ls,rn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,u,f,d,m,_=function p(h){var g=s()-i,v=h===!0,y,b,w,M;if(g>e&&(n+=g-t),i+=g,w=i-n,y=w-a,(y>0||v)&&(M=++f.frame,d=w-f.time*1e3,f.time=w=w/1e3,a+=y+(y>=r?4:r-y),b=1),v||(l=c(p)),b)for(m=0;m<o.length;m++)o[m](w,d,M,h)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(h){return d/(1e3/(h||60))},wake:function(){Pf&&(!Vo&&ol()&&(cn=Vo=window,ll=cn.document||{},an.gsap=Zt,(cn.gsapVersions||(cn.gsapVersions=[])).push(Zt.version),If(va||cn.GreenSockGlobals||!cn.gsap&&cn||{}),u=cn.requestAnimationFrame,Jf.forEach(Qf)),l&&f.sleep(),c=u||function(h){return setTimeout(h,a-f.time*1e3+1|0)},Ls=1,_(2))},sleep:function(){(u?cn.cancelAnimationFrame:clearTimeout)(l),Ls=0,c=As},lagSmoothing:function(h,g){e=h||1/0,t=Math.min(g||33,e)},fps:function(h){r=1e3/(h||240),a=f.time*1e3+r},add:function(h,g,v){var y=g?function(b,w,M,S){h(b,w,M,S),f.remove(y)}:h;return f.remove(h),o[v?"unshift":"push"](y),es(),y},remove:function(h,g){~(g=o.indexOf(h))&&o.splice(g,1)&&m>=g&&m--},_listeners:o},f}(),es=function(){return!Ls&&rn.wake()},Pe={},Ix=/^[\d.\-M][\d.\-,\s]/,Ox=/["']/g,Fx=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Ox,"").trim():+c,i=l.substr(o+1).trim();return t},Nx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},zx=function(e){var t=(e+"").split("("),n=Pe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Fx(t[1])]:Nx(e).split(",").map(Uf)):Pe._CE&&Ix.test(e)?Pe._CE("",e):n},nd=function(e){return function(t){return 1-e(1-t)}},id=function s(e,t){for(var n=e._first,i;n;)n instanceof Wt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ar=function(e,t){return e&&(tt(e)?e:Pe[e]||zx(e))||t},mr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return jt(e,function(o){Pe[o]=an[o]=r,Pe[a=o.toLowerCase()]=n;for(var l in r)Pe[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Pe[o+"."+l]=r[l]}),r},rd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Mo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/ko*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*fx((u-a)*r)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:rd(o);return r=ko/r,l.config=function(c,u){return s(e,c,u)},l},wo=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:rd(n);return i.config=function(r){return s(e,r)},i};jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;mr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Pe.Linear.easeNone=Pe.none=Pe.Linear.easeIn;mr("Elastic",Mo("in"),Mo("out"),Mo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};mr("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);mr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});mr("Circ",function(s){return-(Af(1-s*s)-1)});mr("Sine",function(s){return s===1?1:-ux(s*lx)+1});mr("Back",wo("in"),wo("out"),wo());Pe.SteppedEase=Pe.steps=an.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Xe;return function(o){return((i*Bs(0,a,o)|0)+r)*n}}};Jr.ease=Pe["quad.out"];jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return fl+=s+","+s+"Params,"});var sd=function(e,t){this.id=cx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Nf,this.set=t?t.getSetter:gl},ts=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$r(this,+t.duration,1,1),this.data=t.data,at&&(this._ctx=at,at.data.push(this)),Ls||rn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$r(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(es(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Fa(this,n),!r._dp||r.parent||Vf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Xe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+wu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+wu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Qr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Xe?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ya(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Xe?0:this._rts,this.totalTime(Bs(-Math.abs(this._delay),this._tDur,i),!0),Oa(this),vx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Xe&&(this._tTime-=Xe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Gn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ya(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=px);var i=Rt;return Rt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Rt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Tu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Tu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ln(this,n),Yt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Xe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Xe,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Xe)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(r){var a=tt(n)?n:kf,o=function(){var c=i.then;i.then=null,tt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){_s(this)},s}();_n(ts.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Xe,_prom:0,_ps:!1,_rts:1});var Wt=function(s){Ef(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Yt(n.sortChildren),Ke&&Gn(n.parent||Ke,ri(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Gf(ri(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return bs(0,arguments,this),this},t.from=function(i,r,a){return bs(1,arguments,this),this},t.fromTo=function(i,r,a,o){return bs(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,Ss(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new lt(i,r,ln(this,a),1),this},t.call=function(i,r,a){return Gn(this,lt.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,l,c,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new lt(i,a,ln(this,l)),this},t.staggerFrom=function(i,r,a,o,l,c,u){return a.runBackwards=1,Ss(a).immediateRender=Yt(a.immediateRender),this.staggerTo(i,r,a,o,l,c,u)},t.staggerFromTo=function(i,r,a,o,l,c,u,f){return o.startAt=a,Ss(o).immediateRender=Yt(o.immediateRender),this.staggerTo(i,r,o,l,c,u,f)},t.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:bt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,m,_,p,h,g,v,y,b,w,M,S;if(this!==Ke&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,b=this._start,y=this._ts,g=!y,f&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,h=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(h*100+i,r,a);if(d=bt(u%h),u===l?(p=this._repeat,d=c):(p=~~(u/h),p&&p===u/h&&(d=c,p--),d>c&&(d=c)),w=Qr(this._tTime,h),!o&&this._tTime&&w!==p&&this._tTime-w*h-this._dur<=0&&(w=p),M&&p&1&&(d=c-d,S=1),p!==w&&!this._lock){var x=M&&w&1,T=x===(M&&p&1);if(p<w&&(x=!x),o=x?0:c,this._lock=1,this.render(o||(S?0:bt(p*h)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&mn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;id(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=yx(this,bt(o),bt(d)),v&&(u-=d-(d=v._start))),this._tTime=u,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!r&&!p&&(mn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||d>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,r,a),d!==this._time||!this._ts&&!g){v=0,_&&(u+=this._zTime=-Xe);break}}m=_}else{m=this._last;for(var N=i<0?i:d;m;){if(_=m._prev,(m._act||N<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(N-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(N-m._start)*m._ts,r,a||Rt&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!g){v=0,_&&(u+=this._zTime=N?-Xe:Xe);break}}m=_}}if(v&&!r&&(this.pause(),v.render(d>=o?0:-Xe)._zTime=d>=o?1:-1,this._ts))return this._start=b,Oa(this),this.render(i,r,a);this._onUpdate&&!r&&mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ii(this,1),!r&&!(i<0&&!o)&&(u||o||!l)&&(mn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(ui(r)||(r=ln(this,r,i)),!(i instanceof ts)){if(Dt(i))return i.forEach(function(o){return a.add(o,r)}),this;if(_t(i))return this.addLabel(i,r);if(tt(i))i=lt.delayedCall(0,i);else return this}return this!==i?Gn(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-hn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof lt?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return _t(i)?this.removeLabel(i):tt(i)?this.killTweensOf(i):(Ia(this,i),i===this._recent&&(this._recent=this._last),sr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=bt(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ln(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=lt.delayedCall(0,r||As,a);return o.data="isPause",this._hasPause=1,Gn(this,o,ln(this,i))},t.removePause=function(i){var r=this._first;for(i=ln(this,i);r;)r._start===i&&r.data==="isPause"&&Ii(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Mi!==o[l]&&o[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=pn(i),l=this._first,c=ui(r),u;l;)l instanceof lt?mx(l._targets,o)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(u=l.getTweensOf(o,r)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=ln(a,i),l=r,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,m,_=lt.to(a,_n({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Xe,onStart:function(){if(a.pause(),!m){var h=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==h&&$r(_,h,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,f||[])}},r));return d?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,_n({startAt:{time:ln(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Eu(this,ln(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Eu(this,ln(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Xe)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return sr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),sr(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,l=hn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Gn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(r-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;$r(a,a===Ke&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ke._ts&&(zf(Ke,ya(i,Ke)),Ff=rn.frame),rn.frame>=yu){yu+=sn.autoSleep||120;var r=Ke._first;if((!r||!r._ts)&&sn.autoSleep&&rn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||rn.sleep()}}},e}(ts);_n(Wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ux=function(e,t,n,i,r,a,o){var l=new Kt(this._pt,e,t,0,1,fd,null,r),c=0,u=0,f,d,m,_,p,h,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Cs(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),d=n.match(So)||[];f=So.exec(i);)_=f[0],p=i.substring(c,f.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),_!==d[u++]&&(h=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:h,c:_.charAt(1)==="="?Vr(h,_)-h:parseFloat(_)-h,m:m&&m<4?Math.round:0},c=So.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Rf.test(i)||g)&&(l.e=0),this._pt=l,l},hl=function(e,t,n,i,r,a,o,l,c,u){tt(i)&&(i=i(r||0,e,a));var f=e[t],d=n!=="get"?n:tt(f)?c?e[t.indexOf("set")||!tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,m=tt(f)?c?Wx:cd:ml,_;if(_t(i)&&(~i.indexOf("random(")&&(i=Cs(i)),i.charAt(1)==="="&&(_=Vr(d,i)+(Ct(d)||0),(_||_===0)&&(i=_))),!u||d!==i||jo)return!isNaN(d*i)&&i!==""?(_=new Kt(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?qx:ud,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&cl(t,i),Ux.call(this,e,t,d,i,m,l||sn.stringFilter,c))},kx=function(e,t,n,i,r){if(tt(e)&&(e=ys(e,r,t,n,i)),!jn(e)||e.style&&e.nodeType||Dt(e)||Cf(e))return _t(e)?ys(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=ys(e[o],r,t,n,i);return a},ad=function(e,t,n,i,r,a){var o,l,c,u;if(tn[e]&&(o=new tn[e]).init(r,o.rawVars?t[e]:kx(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new Kt(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==zr))for(c=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Mi,jo,pl=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,d=i.runBackwards,m=i.yoyoEase,_=i.keyframes,p=i.autoRevert,h=e._dur,g=e._startAt,v=e._targets,y=e.parent,b=y&&y.data==="nested"?y.vars.targets:v,w=e._overwrite==="auto"&&!sl,M=e.timeline,S,x,T,N,O,q,z,F,B,R,D,C,I;if(M&&(!_||!r)&&(r="none"),e._ease=ar(r,Jr.ease),e._yEase=m?nd(ar(m===!0?r:m,Jr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!M&&!!i.runBackwards,!M||_&&!i.stagger){if(F=v[0]?rr(v[0]).harness:0,C=F&&i[F.prop],S=ba(i,ul),g&&(g._zTime<0&&g.progress(1),t<0&&d&&o&&!p?g.render(-1,!0):g.revert(d&&h?ma:hx),g._lazy=0),a){if(Ii(e._startAt=lt.set(v,_n({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!g&&Yt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rt||!o&&!p)&&e._startAt.revert(ma),o&&h&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&h&&!g){if(t&&(o=!1),T=_n({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Yt(l),immediateRender:o,stagger:0,parent:y},S),C&&(T[F.prop]=C),Ii(e._startAt=lt.set(v,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rt?e._startAt.revert(ma):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Xe,Xe);else if(!t)return}for(e._pt=e._ptCache=0,l=h&&Yt(l)||l&&!h,x=0;x<v.length;x++){if(O=v[x],z=O._gsap||dl(v)[x]._gsap,e._ptLookup[x]=R={},Go[z.id]&&Ci.length&&Sa(),D=b===v?x:b.indexOf(O),F&&(B=new F).init(O,C||S,e,D,b)!==!1&&(e._pt=N=new Kt(e._pt,O,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(G){R[G]=N}),B.priority&&(q=1)),!F||C)for(T in S)tn[T]&&(B=ad(T,S,e,D,O,b))?B.priority&&(q=1):R[T]=N=hl.call(e,O,T,"get",S[T],D,b,0,i.stringFilter);e._op&&e._op[x]&&e.kill(O,e._op[x]),w&&e._pt&&(Mi=e,Ke.killTweensOf(O,R,e.globalTime(t)),I=!e.parent,Mi=0),e._pt&&l&&(Go[z.id]=1)}q&&dd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!I,_&&t<=0&&M.render(hn,!0,!0)},Bx=function(e,t,n,i,r,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(c=f[d][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return jo=1,e.vars[t]="+=0",pl(e,o),jo=0,1;l.push(c)}for(d=l.length;d--;)u=l[d],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=nt(n)+Ct(u.e)),u.b&&(u.b=c.s+Ct(u.b))},Vx=function(e,t){var n=e[0]?rr(e[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return t;r=ur({},t);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},Gx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Dt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ys=function(e,t,n,i,r){return tt(e)?e.call(t,n,i,r):_t(e)&&~e.indexOf("random(")?Cs(e):e},od=fl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ld={};jt(od+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return ld[s]=1});var lt=function(s){Ef(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Ss(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,m=l.overwrite,_=l.keyframes,p=l.defaults,h=l.scrollTrigger,g=l.yoyoEase,v=i.parent||Ke,y=(Dt(n)||Cf(n)?ui(n[0]):"length"in i)?[n]:pn(n),b,w,M,S,x,T,N,O;if(o._targets=y.length?dl(y):xa("GSAP target "+n+" not found. https://greensock.com",!sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||d||ua(c)||ua(u)){if(i=o.vars,b=o.timeline=new Wt({data:"nested",defaults:p||{},targets:v&&v.data==="nested"?v.vars.targets:y}),b.kill(),b.parent=b._dp=ri(o),b._start=0,d||ua(c)||ua(u)){if(S=y.length,N=d&&Xf(d),jn(d))for(x in d)~od.indexOf(x)&&(O||(O={}),O[x]=d[x]);for(w=0;w<S;w++)M=ba(i,ld),M.stagger=0,g&&(M.yoyoEase=g),O&&ur(M,O),T=y[w],M.duration=+ys(c,ri(o),w,T,y),M.delay=(+ys(u,ri(o),w,T,y)||0)-o._delay,!d&&S===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),b.to(T,M,N?N(w,T,y):0),b._ease=Pe.none;b.duration()?c=u=0:o.timeline=0}else if(_){Ss(_n(b.vars.defaults,{ease:"none"})),b._ease=ar(_.ease||i.ease||"none");var q=0,z,F,B;if(Dt(_))_.forEach(function(R){return b.to(y,R,">")}),b.duration();else{M={};for(x in _)x==="ease"||x==="easeEach"||Gx(x,_[x],M,_.easeEach);for(x in M)for(z=M[x].sort(function(R,D){return R.t-D.t}),q=0,w=0;w<z.length;w++)F=z[w],B={ease:F.e,duration:(F.t-(w?z[w-1].t:0))/100*c},B[x]=F.v,b.to(y,B,q),q+=B.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return m===!0&&!sl&&(Mi=ri(o),Ke.killTweensOf(y),Mi=0),Gn(v,ri(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===bt(v._time)&&Yt(f)&&xx(ri(o))&&v.data!=="nested")&&(o._tTime=-Xe,o.render(Math.max(0,-u)||0)),h&&Gf(ri(o),h),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Xe&&!u?l:i<Xe?0:i,d,m,_,p,h,g,v,y,b;if(!c)bx(this,i,r,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(d=f,y=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,r,a);if(d=bt(f%p),f===l?(_=this._repeat,d=c):(_=~~(f/p),_&&_===f/p&&(d=c,_--),d>c&&(d=c)),g=this._yoyo&&_&1,g&&(b=this._yEase,d=c-d),h=Qr(this._tTime,p),d===o&&!a&&this._initted)return this._tTime=f,this;_!==h&&(y&&this._yEase&&id(y,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=a=1,this.render(bt(p*_),!0).invalidate()._lock=0))}if(!this._initted){if(Wf(this,u?i:d,a,r,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(b||this._ease)(d/c),this._from&&(this.ratio=v=1-v),d&&!o&&!r&&!_&&(mn(this,"onStart"),this._tTime!==f))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;y&&y.render(i<0?i:!d&&g?-Xe:y._dur*y._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Wo(this,i,r,a),mn(this,"onUpdate")),this._repeat&&_!==h&&this.vars.onRepeat&&!r&&this.parent&&mn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Wo(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ii(this,1),!r&&!(u&&!o)&&(f||o||g)&&(mn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o){Ls||rn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||pl(this,l),c=this._ease(l/this._dur),Bx(this,i,r,a,o,c,l)?this.resetTo(i,r,a,o):(Fa(this,0),this.parent||Bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?_s(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Mi&&Mi.vars.overwrite!==!0)._first||_s(this),this.parent&&a!==this.timeline.totalDuration()&&$r(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?pn(i):o,c=this._ptLookup,u=this._pt,f,d,m,_,p,h,g;if((!r||r==="all")&&_x(o,l))return r==="all"&&(this._pt=0),_s(this);for(f=this._op=this._op||[],r!=="all"&&(_t(r)&&(p={},jt(r,function(v){return p[v]=1}),r=p),r=Vx(o,r)),g=o.length;g--;)if(~l.indexOf(o[g])){d=c[g],r==="all"?(f[g]=r,_=d,m={}):(m=f[g]=f[g]||{},_=r);for(p in _)h=d&&d[p],h&&((!("kill"in h.d)||h.d.kill(p)===!0)&&Ia(this,h,"_pt"),delete d[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&u&&_s(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return bs(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return bs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Ke.killTweensOf(i,r,a)},e}(ts);_n(lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});jt("staggerTo,staggerFrom,staggerFromTo",function(s){lt[s]=function(){var e=new Wt,t=qo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ml=function(e,t,n){return e[t]=n},cd=function(e,t,n){return e[t](n)},Wx=function(e,t,n,i){return e[t](i.fp,n)},Hx=function(e,t,n){return e.setAttribute(t,n)},gl=function(e,t){return tt(e[t])?cd:al(e[t])&&e.setAttribute?Hx:ml},ud=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},qx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},fd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},_l=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Xx=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},Yx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ia(this,t,"_pt"):t.dep||(n=1),t=i;return!n},jx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},dd=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Kt=function(){function s(t,n,i,r,a,o,l,c,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||ud,this.d=l||this,this.set=c||ml,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=jx,this.m=n,this.mt=r,this.tween=i},s}();jt(fl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return ul[s]=1});an.TweenMax=an.TweenLite=lt;an.TimelineLite=an.TimelineMax=Wt;Ke=new Wt({sortChildren:!1,defaults:Jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=td;var ns=[],_a={},Kx=[],Cu=0,To=function(e){return(_a[e]||Kx).map(function(t){return t()})},Ko=function(){var e=Date.now(),t=[];e-Cu>2&&(To("matchMediaInit"),ns.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=cn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),To("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Cu=e,To("matchMedia"))},hd=function(){function s(t,n){this.selector=n&&Xo(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){tt(n)&&(r=i,i=n,n=tt);var a=this,o=function(){var c=at,u=a.selector,f;return c&&c!==a&&c.data.push(a),r&&(a.selector=Xo(r)),at=a,f=i.apply(a,arguments),tt(f)&&a._r.push(f),at=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===tt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=at;at=null,n(this),at=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof lt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ts)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=ns.indexOf(this);~o&&ns.splice(o,1)}},e.revert=function(n){this.kill(n||{})},s}(),Zx=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){jn(n)||(n={matches:n});var a=new hd(0,r||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=cn.matchMedia(n[c]),l&&(ns.indexOf(a)<0&&ns.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ko):l.addEventListener("change",Ko)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ma={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Qf(i)})},timeline:function(e){return new Wt(e)},getTweensOf:function(e,t){return Ke.getTweensOf(e,t)},getProperty:function(e,t,n,i){_t(e)&&(e=pn(e)[0]);var r=rr(e||{}).get,a=n?kf:Uf;return n==="native"&&(n=""),e&&(t?a((tn[t]&&tn[t].get||r)(e,t,n,i)):function(o,l,c){return a((tn[o]&&tn[o].get||r)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=pn(e),e.length>1){var i=e.map(function(u){return Zt.quickSetter(u,t,n)}),r=i.length;return function(u){for(var f=r;f--;)i[f](u)}}e=e[0]||{};var a=tn[t],o=rr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;zr._pt=0,f.init(e,n?u+n:u,zr,0,[e]),f.render(1,f),zr._pt&&_l(1,zr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Zt.to(e,ur((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return r.resetTo(t,l,c,u)};return a.tween=r,a},isTweening:function(e){return Ke.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ar(e.ease,Jr.ease)),Mu(Jr,e||{})},config:function(e){return Mu(sn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!an[o]&&xa(t+" effect requires "+o+" plugin.")}),bo[t]=function(o,l,c){return n(pn(o),_n(l||{},r),c)},a&&(Wt.prototype[t]=function(o,l,c){return this.add(bo[t](o,jn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Pe[e]=ar(t)},parseEase:function(e,t){return arguments.length?ar(e,t):Pe},getById:function(e){return Ke.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wt(e),i,r;for(n.smoothChildTiming=Yt(e.smoothChildTiming),Ke.remove(n),n._dp=0,n._time=n._tTime=Ke._time,i=Ke._first;i;)r=i._next,(t||!(!i._dur&&i instanceof lt&&i.vars.onComplete===i._targets[0]))&&Gn(n,i,i._start-i._delay),i=r;return Gn(Ke,n,0),n},context:function(e,t){return e?new hd(e,t):at},matchMedia:function(e){return new Zx(e)},matchMediaRefresh:function(){return ns.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ko()},addEventListener:function(e,t){var n=_a[e]||(_a[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_a[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Lx,wrapYoyo:Rx,distribute:Xf,random:jf,snap:Yf,normalize:Cx,getUnit:Ct,clamp:wx,splitColor:$f,toArray:pn,selector:Xo,mapRange:Zf,pipe:Ex,unitize:Ax,interpolate:Dx,shuffle:qf},install:If,effects:bo,ticker:rn,updateRoot:Wt.updateRoot,plugins:tn,globalTimeline:Ke,core:{PropTween:Kt,globals:Of,Tween:lt,Timeline:Wt,Animation:ts,getCache:rr,_removeLinkedListItem:Ia,reverting:function(){return Rt},context:function(e){return e&&at&&(at.data.push(e),e._ctx=at),at},suppressOverwrites:function(e){return sl=e}}};jt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ma[s]=lt[s]});rn.add(Wt.updateRoot);zr=Ma.to({},{duration:0});var Jx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Qx=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=Jx(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},Eo=function(e,t){return{name:e,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(_t(r)&&(l={},jt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Qx(o,r)}}}},Zt=Ma.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Rt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Eo("roundProps",Yo),Eo("modifiers"),Eo("snap",Yf))||Ma;lt.version=Wt.version=Zt.version="3.11.5";Pf=1;ol()&&es();Pe.Power0;Pe.Power1;Pe.Power2;Pe.Power3;Pe.Power4;Pe.Linear;Pe.Quad;Pe.Cubic;Pe.Quart;Pe.Quint;Pe.Strong;Pe.Elastic;Pe.Back;Pe.SteppedEase;Pe.Bounce;Pe.Sine;Pe.Expo;Pe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lu,wi,Gr,vl,Ji,Ru,xl,$x=function(){return typeof window<"u"},fi={},Xi=180/Math.PI,Wr=Math.PI/180,Ir=Math.atan2,Du=1e8,Sl=/([A-Z])/g,e1=/(left|right|width|margin|padding|x)/i,t1=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n1=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i1=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r1=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},pd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},md=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},s1=function(e,t,n){return e.style[t]=n},a1=function(e,t,n){return e.style.setProperty(t,n)},o1=function(e,t,n){return e._gsap[t]=n},l1=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},c1=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},u1=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},Ze="transform",In=Ze+"Origin",f1=function s(e,t){var n=this,i=this.target,r=i.style;if(e in fi){if(this.tfm=this.tfm||{},e!=="transform")e=Hn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ai(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ai(i,e);else return Hn.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ze)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(In,t,"")),e=Ze}(r||t)&&this.props.push(e,t,r[e])},gd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},d1=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Sl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=xl(),(!r||!r.isStart)&&!n[Ze]&&(gd(n),i.uncache=1)}},_d=function(e,t){var n={target:e,props:[],revert:d1,save:f1};return e._gsap||Zt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},vd,Jo=function(e,t){var n=wi.createElementNS?wi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wi.createElement(e);return n.style?n:wi.createElement(e)},Xn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Sl,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,is(t)||t,1)||""},Pu="O,Moz,ms,Ms,Webkit".split(","),is=function(e,t,n){var i=t||Ji,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Pu[a]+e in r););return a<0?null:(a===3?"ms":a>=0?Pu[a]:"")+e},Qo=function(){$x()&&window.document&&(Lu=window,wi=Lu.document,Gr=wi.documentElement,Ji=Jo("div")||{style:{}},Jo("div"),Ze=is(Ze),In=Ze+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vd=!!is("perspective"),xl=Zt.core.reverting,vl=1)},Ao=function s(e){var t=Jo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,a;if(Gr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Gr.removeChild(t),this.style.cssText=r,a},Iu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},xd=function(e){var t;try{t=e.getBBox()}catch{t=Ao.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ao||(t=Ao.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Iu(e,["x","cx","x1"])||0,y:+Iu(e,["y","cy","y1"])||0,width:0,height:0}:t},Sd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&xd(e))},Rs=function(e,t){if(t){var n=e.style;t in fi&&t!==In&&(t=Ze),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Sl,"-$1").toLowerCase())):n.removeAttribute(t)}},Ti=function(e,t,n,i,r,a){var o=new Kt(e._pt,t,n,0,1,a?md:pd);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Ou={deg:1,rad:1,turn:1},h1={grid:1,flex:1},Oi=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=Ji.style,l=e1.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",m=i==="%",_,p,h,g;return i===a||!r||Ou[i]||Ou[a]?r:(a!=="px"&&!d&&(r=s(e,t,n,"px")),g=e.getCTM&&Sd(e),(m||a==="%")&&(fi[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],nt(m?r/_*f:r/100*_)):(o[l?"width":"height"]=f+(d?a:i),p=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===wi||!p.appendChild)&&(p=wi.body),h=p._gsap,h&&m&&h.width&&l&&h.time===rn.time&&!h.uncache?nt(r/h.width*f):((m||a==="%")&&!h1[Xn(p,"display")]&&(o.position=Xn(e,"position")),p===e&&(o.position="static"),p.appendChild(Ji),_=Ji[u],p.removeChild(Ji),o.position="absolute",l&&m&&(h=rr(p),h.time=rn.time,h.width=p[u]),nt(d?_*r/f:_&&r?f/_*r:0))))},ai=function(e,t,n,i){var r;return vl||Qo(),t in Hn&&t!=="transform"&&(t=Hn[t],~t.indexOf(",")&&(t=t.split(",")[0])),fi[t]&&t!=="transform"?(r=Ps(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ta(Xn(e,In))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=wa[t]&&wa[t](e,t,n)||Xn(e,t)||Nf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Oi(e,t,r,n)+n:r},p1=function(e,t,n,i){if(!n||n==="none"){var r=is(t,e,1),a=r&&Xn(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=Xn(e,"borderTopColor"))}var o=new Kt(this._pt,e.style,t,0,1,fd),l=0,c=0,u,f,d,m,_,p,h,g,v,y,b,w;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Xn(e,t)||i,e.style[t]=n),u=[n,i],td(u),n=u[0],i=u[1],d=n.match(Nr)||[],w=i.match(Nr)||[],w.length){for(;f=Nr.exec(i);)h=f[0],v=i.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),h!==(p=d[c++]||"")&&(m=parseFloat(p)||0,b=p.substr((m+"").length),h.charAt(1)==="="&&(h=Vr(m,h)+b),g=parseFloat(h),y=h.substr((g+"").length),l=Nr.lastIndex-y.length,y||(y=y||sn.units[t]||b,l===i.length&&(i+=y,o.e+=y)),b!==y&&(m=Oi(e,t,p,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?md:pd;return Rf.test(i)&&(o.e=0),this._pt=o,o},Fu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},m1=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Fu[n]||n,t[1]=Fu[i]||i,t.join(" ")},g1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],fi[o]&&(l=1,o=o==="transformOrigin"?In:Ze),Rs(n,o);l&&(Rs(n,Ze),a&&(a.svg&&n.removeAttribute("transform"),Ps(n,1),a.uncache=1,gd(i)))}},wa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Kt(e._pt,t,n,0,0,g1);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Ds=[1,0,0,1,0,0],bd={},yd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nu=function(e){var t=Xn(e,Ze);return yd(t)?Ds:t.substr(7).match(Lf).map(nt)},bl=function(e,t){var n=e._gsap||rr(e),i=e.style,r=Nu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ds:r):(r===Ds&&!e.offsetParent&&e!==Gr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Gr.appendChild(e)),r=Nu(e),l?i.display=l:Rs(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Gr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},$o=function(e,t,n,i,r,a){var o=e._gsap,l=r||bl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,m=l[0],_=l[1],p=l[2],h=l[3],g=l[4],v=l[5],y=t.split(" "),b=parseFloat(y[0])||0,w=parseFloat(y[1])||0,M,S,x,T;n?l!==Ds&&(S=m*h-_*p)&&(x=b*(h/S)+w*(-p/S)+(p*v-h*g)/S,T=b*(-_/S)+w*(m/S)-(m*v-_*g)/S,b=x,w=T):(M=xd(e),b=M.x+(~y[0].indexOf("%")?b/100*M.width:b),w=M.y+(~(y[1]||y[0]).indexOf("%")?w/100*M.height:w)),i||i!==!1&&o.smooth?(g=b-c,v=w-u,o.xOffset=f+(g*m+v*p)-g,o.yOffset=d+(g*_+v*h)-v):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[In]="0px 0px",a&&(Ti(a,o,"xOrigin",c,b),Ti(a,o,"yOrigin",u,w),Ti(a,o,"xOffset",f,o.xOffset),Ti(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+w)},Ps=function(e,t){var n=e._gsap||new sd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Xn(e,In)||"0",u,f,d,m,_,p,h,g,v,y,b,w,M,S,x,T,N,O,q,z,F,B,R,D,C,I,G,Q,Z,ee,ne,fe;return u=f=d=p=h=g=v=y=b=0,m=_=1,n.svg=!!(e.getCTM&&Sd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ze]!=="none"?l[Ze]:"")),i.scale=i.rotate=i.translate="none"),S=bl(e,n.svg),n.svg&&(n.uncache?(C=e.getBBox(),c=n.xOrigin-C.x+"px "+(n.yOrigin-C.y)+"px",D=""):D=!t&&e.getAttribute("data-svg-origin"),$o(e,D||c,!!D||n.originIsAbsolute,n.smooth!==!1,S)),w=n.xOrigin||0,M=n.yOrigin||0,S!==Ds&&(O=S[0],q=S[1],z=S[2],F=S[3],u=B=S[4],f=R=S[5],S.length===6?(m=Math.sqrt(O*O+q*q),_=Math.sqrt(F*F+z*z),p=O||q?Ir(q,O)*Xi:0,v=z||F?Ir(z,F)*Xi+p:0,v&&(_*=Math.abs(Math.cos(v*Wr))),n.svg&&(u-=w-(w*O+M*z),f-=M-(w*q+M*F))):(fe=S[6],ee=S[7],G=S[8],Q=S[9],Z=S[10],ne=S[11],u=S[12],f=S[13],d=S[14],x=Ir(fe,Z),h=x*Xi,x&&(T=Math.cos(-x),N=Math.sin(-x),D=B*T+G*N,C=R*T+Q*N,I=fe*T+Z*N,G=B*-N+G*T,Q=R*-N+Q*T,Z=fe*-N+Z*T,ne=ee*-N+ne*T,B=D,R=C,fe=I),x=Ir(-z,Z),g=x*Xi,x&&(T=Math.cos(-x),N=Math.sin(-x),D=O*T-G*N,C=q*T-Q*N,I=z*T-Z*N,ne=F*N+ne*T,O=D,q=C,z=I),x=Ir(q,O),p=x*Xi,x&&(T=Math.cos(x),N=Math.sin(x),D=O*T+q*N,C=B*T+R*N,q=q*T-O*N,R=R*T-B*N,O=D,B=C),h&&Math.abs(h)+Math.abs(p)>359.9&&(h=p=0,g=180-g),m=nt(Math.sqrt(O*O+q*q+z*z)),_=nt(Math.sqrt(R*R+fe*fe)),x=Ir(B,R),v=Math.abs(x)>2e-4?x*Xi:0,b=ne?1/(ne<0?-ne:ne):0),n.svg&&(D=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!yd(Xn(e,Ze)),D&&e.setAttribute("transform",D))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(m*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=nt(m),n.scaleY=nt(_),n.rotation=nt(p)+o,n.rotationX=nt(h)+o,n.rotationY=nt(g)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[In]=Ta(c)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?v1:vd?Md:_1,n.uncache=0,n},Ta=function(e){return(e=e.split(" "))[0]+" "+e[1]},Co=function(e,t,n){var i=Ct(t);return nt(parseFloat(t)+parseFloat(Oi(e,"x",n+"px",i)))+i},_1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Md(e,t)},Gi="0deg",ps="0px",Wi=") ",Md=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,m=n.skewY,_=n.scaleX,p=n.scaleY,h=n.transformPerspective,g=n.force3D,v=n.target,y=n.zOrigin,b="",w=g==="auto"&&e&&e!==1||g===!0;if(y&&(f!==Gi||u!==Gi)){var M=parseFloat(u)*Wr,S=Math.sin(M),x=Math.cos(M),T;M=parseFloat(f)*Wr,T=Math.cos(M),a=Co(v,a,S*T*-y),o=Co(v,o,-Math.sin(M)*-y),l=Co(v,l,x*T*-y+y)}h!==ps&&(b+="perspective("+h+Wi),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(w||a!==ps||o!==ps||l!==ps)&&(b+=l!==ps||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Wi),c!==Gi&&(b+="rotate("+c+Wi),u!==Gi&&(b+="rotateY("+u+Wi),f!==Gi&&(b+="rotateX("+f+Wi),(d!==Gi||m!==Gi)&&(b+="skew("+d+", "+m+Wi),(_!==1||p!==1)&&(b+="scale("+_+", "+p+Wi),v.style[Ze]=b||"translate(0, 0)"},v1=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,m=n.target,_=n.xOrigin,p=n.yOrigin,h=n.xOffset,g=n.yOffset,v=n.forceCSS,y=parseFloat(a),b=parseFloat(o),w,M,S,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Wr,c*=Wr,w=Math.cos(l)*f,M=Math.sin(l)*f,S=Math.sin(l-c)*-d,x=Math.cos(l-c)*d,c&&(u*=Wr,T=Math.tan(c-u),T=Math.sqrt(1+T*T),S*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),w*=T,M*=T)),w=nt(w),M=nt(M),S=nt(S),x=nt(x)):(w=f,x=d,M=S=0),(y&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(y=Oi(m,"x",a,"px"),b=Oi(m,"y",o,"px")),(_||p||h||g)&&(y=nt(y+_-(_*w+p*S)+h),b=nt(b+p-(_*M+p*x)+g)),(i||r)&&(T=m.getBBox(),y=nt(y+i/100*T.width),b=nt(b+r/100*T.height)),T="matrix("+w+","+M+","+S+","+x+","+y+","+b+")",m.setAttribute("transform",T),v&&(m.style[Ze]=T)},x1=function(e,t,n,i,r){var a=360,o=_t(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?Xi:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=r.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Du)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Du)%a-~~(c/a)*a)),e._pt=d=new Kt(e._pt,t,n,i,c,n1),d.e=u,d.u="deg",e._props.push(n),d},zu=function(e,t){for(var n in t)e[n]=t[n];return e},S1=function(e,t,n){var i=zu({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ze]=t,o=Ps(n,1),Rs(n,Ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ze],a[Ze]=t,o=Ps(n,1),a[Ze]=c);for(l in fi)c=i[l],u=o[l],c!==u&&r.indexOf(l)<0&&(m=Ct(c),_=Ct(u),f=m!==_?Oi(n,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new Kt(e._pt,o,l,f,d-f,Zo),e._pt.u=_||0,e._props.push(l));zu(o,i)};jt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});wa[e>1?"border"+s:s]=function(o,l,c,u,f){var d,m;if(arguments.length<4)return d=a.map(function(_){return ai(o,_,c)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(u+"").split(" "),m={},a.forEach(function(_,p){return m[_]=d[p]=d[p]||d[(p-1)/2|0]}),o.init(l,m,f)}});var wd={name:"css",register:Qo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,m,_,p,h,g,v,y,b,w,M,S,x;vl||Qo(),this.styles=this.styles||_d(e),x=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(tn[p]&&ad(p,t,n,i,e,r)))){if(m=typeof u,_=wa[p],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Cs(u)),_)_(this,e,p,u,n)&&(S=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Li.lastIndex=0,Li.test(c)||(h=Ct(c),g=Ct(u)),g?h!==g&&(c=Oi(e,p,c,g)+g):h&&(u+=h),this.add(o,"setProperty",c,u,i,r,0,0,p),a.push(p),x.push(p,0,o[p]);else if(m!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,r):l[p],_t(c)&&~c.indexOf("random(")&&(c=Cs(c)),Ct(c+"")||(c+=sn.units[p]||Ct(ai(e,p))||""),(c+"").charAt(1)==="="&&(c=ai(e,p))):c=ai(e,p),d=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),p in Hn&&(p==="autoAlpha"&&(d===1&&ai(e,"visibility")==="hidden"&&f&&(d=0),x.push("visibility",0,o.visibility),Ti(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=Hn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),y=p in fi,y){if(this.styles.save(p),b||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ps(e,t.parseTransform),M=t.smoothOrigin!==!1&&w.smooth,b=this._pt=new Kt(this._pt,o,Ze,0,1,w.renderTransform,w,0,-1),b.dep=1),p==="scale")this._pt=new Kt(this._pt,w,"scaleY",w.scaleY,(v?Vr(w.scaleY,v+f):f)-w.scaleY||0,Zo),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){x.push(In,0,o[In]),u=m1(u),w.svg?$o(e,u,0,M,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==w.zOrigin&&Ti(this,w,"zOrigin",w.zOrigin,g),Ti(this,o,p,Ta(c),Ta(u)));continue}else if(p==="svgOrigin"){$o(e,u,1,M,0,this);continue}else if(p in bd){x1(this,w,p,d,v?Vr(d,v+u):u);continue}else if(p==="smoothOrigin"){Ti(this,w,"smooth",w.smooth,u);continue}else if(p==="force3D"){w[p]=u;continue}else if(p==="transform"){S1(this,u,e);continue}}else p in o||(p=is(p)||p);if(y||(f||f===0)&&(d||d===0)&&!t1.test(u)&&p in o)h=(c+"").substr((d+"").length),f||(f=0),g=Ct(u)||(p in sn.units?sn.units[p]:h),h!==g&&(d=Oi(e,p,c,g)),this._pt=new Kt(this._pt,y?w:o,p,d,(v?Vr(d,v+f):f)-d,!y&&(g==="px"||p==="zIndex")&&t.autoRound!==!1?r1:Zo),this._pt.u=g||0,h!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=i1);else if(p in o)p1.call(this,e,p,c,v?v+u:u);else if(p in e)this.add(e,p,c||e[p],v?v+u:u,i,r);else if(p!=="parseTransform"){cl(p,u);continue}y||(p in o?x.push(p,0,o[p]):x.push(p,1,c||e[p])),a.push(p)}}S&&dd(this)},render:function(e,t){if(t.tween._time||!xl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ai,aliases:Hn,getSetter:function(e,t,n){var i=Hn[t];return i&&i.indexOf(",")<0&&(t=i),t in fi&&t!==In&&(e._gsap.x||ai(e,"x"))?n&&Ru===n?t==="scale"?l1:o1:(Ru=n||{})&&(t==="scale"?c1:u1):e.style&&!al(e.style[t])?s1:~t.indexOf("-")?a1:gl(e,t)},core:{_removeProperty:Rs,_getMatrix:bl}};Zt.utils.checkPrefix=is;Zt.core.getStyleSaver=_d;(function(s,e,t,n){var i=jt(s+","+e+","+t,function(r){fi[r]=1});jt(e,function(r){sn.units[r]="deg",bd[r]=1}),Hn[i[13]]=s+","+e,jt(n,function(r){var a=r.split(":");Hn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){sn.units[s]="px"});Zt.registerPlugin(wd);var Qi=Zt.registerPlugin(wd)||Zt;Qi.core.Tween;let Is=!1;const Ms=xs([]),b1=()=>{if(Is)return;const[s,e]=Yu(Ms);console.log(s,e),s&&e&&(Is=!0,Qi.to(s.position,Ur(window.innerHeight,()=>Aa(s))),Qi.to(e.position,Ur(0,Ea)))},y1=s=>({mouseMoveEvent:e=>{const t=s.mouseMoveEvent();t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1},wheelEvent:async e=>{if(Is||!s.wheelEvent(e))return;await ju();const[n,i]=Yu(Ms);n&&i&&(Is=!0,e.deltaY>0?(Qi.to(n.position,Ur(window.innerHeight,()=>Aa(n))),Qi.to(i.position,Ur(0,Ea))):(Qi.to(i.position,Ur(0,()=>Aa(n))),Qi.to(n.position,Ur(-window.innerHeight,Ea))))},resizeEvent:()=>{const{camera:e,renderer:t}=s.resizeEvent();e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)}});function Ea(){Is=!1}function Aa(s){s.position.set(0,-9999,0)}function Ur(s,e=()=>{}){return{duration:q0,x:0,y:s,z:0,repeat:0,ease:"power2.inOut",onComplete:Ea}}const M1=s=>{const e={onLoad:function(){s("success")},onProgress:function(t,n,i){const r=(n/i*100).toFixed(2);s("pending",{value:r,num:n,total:i})},onError:function(t){console.log("图片加载出现错误"),console.log(t),s("fail",t)}};return new yf(e.onLoad,e.onProgress,e.onError)};function Uu(s,e,t){const n=s.slice();return n[20]=e[t],n[22]=t,n}function ku(s){let e,t,n,i,r,a,o,l,c,u,f;return a=new H0({props:{class:"home_linear-progress",progress:Number(s[3])/100,buffer:Math.min((s[4]+1)/s[5],1)}}),{c(){e=ge("div"),t=ge("div"),n=Ht("资源正在加载中"),i=Ht(s[2]),r=Ie(),pt(a.$$.fragment),o=Ie(),l=ge("div"),c=Ht(s[3]),u=Ht("%"),_e(t,"class","loading-text svelte-1xcbzqc"),_e(l,"class","loading-text svelte-1xcbzqc"),_e(e,"class","loading svelte-1xcbzqc")},m(d,m){xe(d,e,m),pe(e,t),pe(t,n),pe(t,i),pe(e,r),mt(a,e,null),pe(e,o),pe(e,l),pe(l,c),pe(l,u),f=!0},p(d,m){(!f||m&4)&&qr(i,d[2]);const _={};m&8&&(_.progress=Number(d[3])/100),m&48&&(_.buffer=Math.min((d[4]+1)/d[5],1)),a.$set(_),(!f||m&8)&&qr(c,d[3])},i(d){f||(le(a.$$.fragment,d),f=!0)},o(d){he(a.$$.fragment,d),f=!1},d(d){d&&Se(e),gt(a)}}}function Bu(s){let e,t,n;function i(){return s[9](s[22])}return{c(){e=ge("li"),_e(e,"class","anchor-item svelte-1xcbzqc"),_e(e,"role","presentation"),Tl(e,"active",s[6]===s[22])},m(r,a){xe(r,e,a),t||(n=Ye(e,"click",i),t=!0)},p(r,a){s=r,a&64&&Tl(e,"active",s[6]===s[22])},d(r){r&&Se(e),t=!1,n()}}}function Vu(s){let e,t,n;return{c(){e=ge("div"),_e(e,"class","tip svelte-1xcbzqc")},m(i,r){xe(i,e,r),n=!0},p(i,r){},i(i){n||(Ni(()=>{n&&(t||(t=Pt(e,It,{duration:wt},!0)),t.run(1))}),n=!0)},o(i){t||(t=Pt(e,It,{duration:wt},!1)),t.run(0),n=!1},d(i){i&&Se(e),i&&t&&t.end()}}}function Gu(s){let e,t;return e=new j0({}),e.$on("jump",s[7]),{c(){pt(e.$$.fragment)},m(n,i){mt(e,n,i),t=!0},p:Ri,i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){gt(e,n)}}}function Wu(s){let e,t;return e=new Rv({}),{c(){pt(e.$$.fragment)},m(n,i){mt(e,n,i),t=!0},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){gt(e,n)}}}function Hu(s){let e,t;return e=new Ov({}),{c(){pt(e.$$.fragment)},m(n,i){mt(e,n,i),t=!0},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){gt(e,n)}}}function qu(s){let e,t;return e=new ix({}),{c(){pt(e.$$.fragment)},m(n,i){mt(e,n,i),t=!0},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){gt(e,n)}}}function Xu(s){let e,t;return e=new ax({}),{c(){pt(e.$$.fragment)},m(n,i){mt(e,n,i),t=!0},i(n){t||(le(e.$$.fragment,n),t=!0)},o(n){he(e.$$.fragment,n),t=!1},d(n){gt(e,n)}}}function w1(s){let e,t,n,i,r,a,o,l,c,u,f,d,m=s[1]&&ku(s),_=Uo,p=[];for(let M=0;M<_.length;M+=1)p[M]=Bu(Uu(s,_,M));let h=s[6]!==4&&Vu(),g=s[6]===0&&Gu(s),v=s[6]===1&&Wu(),y=s[6]===2&&Hu(),b=s[6]===3&&qu(),w=s[6]===4&&Xu();return{c(){m&&m.c(),e=Ie(),t=ge("div"),n=Ie(),i=ge("ul");for(let M=0;M<p.length;M+=1)p[M].c();r=Ie(),h&&h.c(),a=Ie(),g&&g.c(),o=Ie(),v&&v.c(),l=Ie(),y&&y.c(),c=Ie(),b&&b.c(),u=Ie(),w&&w.c(),f=fr(),_e(t,"class","container"),_e(i,"class","anchor svelte-1xcbzqc")},m(M,S){m&&m.m(M,S),xe(M,e,S),xe(M,t,S),s[8](t),xe(M,n,S),xe(M,i,S);for(let x=0;x<p.length;x+=1)p[x]&&p[x].m(i,null);xe(M,r,S),h&&h.m(M,S),xe(M,a,S),g&&g.m(M,S),xe(M,o,S),v&&v.m(M,S),xe(M,l,S),y&&y.m(M,S),xe(M,c,S),b&&b.m(M,S),xe(M,u,S),w&&w.m(M,S),xe(M,f,S),d=!0},p(M,[S]){if(M[1]?m?(m.p(M,S),S&2&&le(m,1)):(m=ku(M),m.c(),le(m,1),m.m(e.parentNode,e)):m&&(xt(),he(m,1,1,()=>{m=null}),St()),S&192){_=Uo;let x;for(x=0;x<_.length;x+=1){const T=Uu(M,_,x);p[x]?p[x].p(T,S):(p[x]=Bu(T),p[x].c(),p[x].m(i,null))}for(;x<p.length;x+=1)p[x].d(1);p.length=_.length}M[6]!==4?h?(h.p(M,S),S&64&&le(h,1)):(h=Vu(),h.c(),le(h,1),h.m(a.parentNode,a)):h&&(xt(),he(h,1,1,()=>{h=null}),St()),M[6]===0?g?(g.p(M,S),S&64&&le(g,1)):(g=Gu(M),g.c(),le(g,1),g.m(o.parentNode,o)):g&&(xt(),he(g,1,1,()=>{g=null}),St()),M[6]===1?v?S&64&&le(v,1):(v=Wu(),v.c(),le(v,1),v.m(l.parentNode,l)):v&&(xt(),he(v,1,1,()=>{v=null}),St()),M[6]===2?y?S&64&&le(y,1):(y=Hu(),y.c(),le(y,1),y.m(c.parentNode,c)):y&&(xt(),he(y,1,1,()=>{y=null}),St()),M[6]===3?b?S&64&&le(b,1):(b=qu(),b.c(),le(b,1),b.m(u.parentNode,u)):b&&(xt(),he(b,1,1,()=>{b=null}),St()),M[6]===4?w?S&64&&le(w,1):(w=Xu(),w.c(),le(w,1),w.m(f.parentNode,f)):w&&(xt(),he(w,1,1,()=>{w=null}),St())},i(M){d||(le(m),le(h),le(g),le(v),le(y),le(b),le(w),d=!0)},o(M){he(m),he(h),he(g),he(v),he(y),he(b),he(w),d=!1},d(M){m&&m.d(M),M&&Se(e),M&&Se(t),s[8](null),M&&Se(n),M&&Se(i),rs(p,M),M&&Se(r),h&&h.d(M),M&&Se(a),g&&g.d(M),M&&Se(o),v&&v.d(M),M&&Se(l),y&&y.d(M),M&&Se(c),b&&b.d(M),M&&Se(u),w&&w.d(M),M&&Se(f)}}}function T1(s,e,t){let n,i=!0,r="",a="0.00",o,l=0,c=1,u=0;const f=new F0,d=new mf(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,1,1e3);d.aspect=window.innerWidth/window.innerHeight,d.position.set(0,0,5),f.add(d);const m=new bf({antialias:!0});m.setSize(window.innerWidth,window.innerHeight);const _=new We,p=M1((S,x)=>{switch(S){case"pending":t(3,a=x.value),t(5,c=x.total),t(4,l=x.num);break;case"fail":alert("加载失败，请稍后重试~~");break}}),h=new U0(p),v=Uo.map(S=>{const{bg:x,depth:T}=S;return{page:h.load(x),depth:h.load(T)}}).map((S,x)=>{const{page:T,depth:N}=S,O=new Da(window.innerWidth,window.innerHeight),q=ox(T,N,_),z=new li(O,q);return f.add(z),x!==u&&Aa(z),z});requestAnimationFrame(function S(){const x=v[u].material;x.uniforms.uMouse.value=_,x.uniforms.uTime.value=performance.now()/1e3,m.render(f,d),requestAnimationFrame(S)});const y=y1({mouseMoveEvent:()=>_,resizeEvent:()=>({camera:d,renderer:m}),wheelEvent:S=>{if(i)return!1;const x=v.length-1;if(S.deltaY>0){if(u===x)return!1;const T=v[u],N=v[u+1];N.position.set(0,-window.innerHeight,0),Ms.set([T,N]),t(6,u++,u)}else{if(u===0)return!1;v[u],v[u-1].position.set(0,window.innerHeight,0),Ms.set([v[u],v[u-1]]),t(6,u--,u)}return Ei.set(u),!0}}),b=async S=>{if(S===u)return;Ei.set(S),Fn.set(!1),await ju();const x=v[u],T=v[S.detail];T.position.set(0,-window.innerHeight,0),Ms.set([x,T]),t(6,u=S.detail),b1()};vn(()=>{Ei.set(u),n.appendChild(m.domElement),window.addEventListener("mousemove",y.mouseMoveEvent),window.addEventListener("wheel",y.wheelEvent),window.addEventListener("resize",y.resizeEvent),o=setInterval(()=>{Math.floor(Number(a))===100&&setTimeout(()=>{t(1,i=!1),clearInterval(o)},150),r.length===3?t(2,r="."):t(2,r+=".")},300)}),zd(()=>{window.removeEventListener("mousemove",y.mouseMoveEvent),window.removeEventListener("wheel",y.wheelEvent),window.removeEventListener("resize",y.resizeEvent),clearInterval(o)});function w(S){ft[S?"unshift":"push"](()=>{n=S,t(0,n)})}return[n,i,r,a,l,c,u,b,w,S=>{b({detail:S})}]}class C1 extends kt{constructor(e){super(),Bt(this,e,T1,w1,Ot,{})}}export{C1 as default};
