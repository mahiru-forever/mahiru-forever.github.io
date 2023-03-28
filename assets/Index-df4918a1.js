import{S as wn,i as Tn,s as fn,a as Qe,e as Te,b as He,c as we,d as _t,f as Re,g as be,h as tn,l as vt,j as on,k as Nn,n as ha,m as De,r as Ms,o as kn,p as ws,q as da,t as ln,u as En,v as Ts,w as hh,x as It,y as Au,z as Ei,A as bt,B as Mt,C as ti,D as dh,E as Hr,F as Xr,G as qr,H as Yr,I as de,J as Se,K as xl,L as Yt,M as Es,N as jt,O as hs,P as Lt,Q as Kt,R as Rt,T as pa,U as ph,V as mh,W as gh,X as _h,Y as Cu,Z as pi,_ as Dr,$ as Lu,a0 as Ru,a1 as vh,a2 as Sl}from"./index-2cabf59a.js";import{_ as Gn,a as xh,M as As,b as Bn,c as ot,u as vi,f as Cs,R as yl,d as sa,S as bl,e as Sh,p as yh}from"./SmuiElement-9fbb764e.js";/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="142",bh=0,Ml=1,Mh=2,Du=1,wh=2,rs=3,ds=0,Sn=1,Pr=2,Th=1,xi=0,Er=1,wl=2,Tl=3,El=4,Eh=5,yr=100,Ah=101,Ch=102,Al=103,Cl=104,Lh=200,Rh=201,Dh=202,Ph=203,Pu=204,Iu=205,Ih=206,Fh=207,Oh=208,Nh=209,zh=210,Uh=0,kh=1,Bh=2,Ao=3,Vh=4,Gh=5,Wh=6,Hh=7,Fu=0,Xh=1,qh=2,ii=0,Yh=1,jh=2,Kh=3,Zh=4,Jh=5,Ou=300,Ir=301,Fr=302,Co=303,Lo=304,Ea=306,Ro=1e3,vn=1001,Do=1002,Dt=1003,Ll=1004,Rl=1005,en=1006,Qh=1007,Aa=1008,Ki=1009,$h=1010,ed=1011,Nu=1012,td=1013,Ui=1014,ki=1015,ps=1016,nd=1017,id=1018,Ar=1020,rd=1021,sd=1022,Fn=1023,ad=1024,od=1025,Wi=1026,Or=1027,ld=1028,cd=1029,ud=1030,fd=1031,hd=1033,za=33776,Ua=33777,ka=33778,Ba=33779,Dl=35840,Pl=35841,Il=35842,Fl=35843,dd=36196,Ol=37492,Nl=37496,zl=37808,Ul=37809,kl=37810,Bl=37811,Vl=37812,Gl=37813,Wl=37814,Hl=37815,Xl=37816,ql=37817,Yl=37818,jl=37819,Kl=37820,Zl=37821,Jl=36492,Zi=3e3,Ze=3001,pd=3200,md=3201,gd=0,_d=1,Zn="srgb",Bi="srgb-linear",Va=7680,vd=519,Ql=35044,$l="300 es",Po=1035;class jr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,ec=180/Math.PI;function Ls(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[s&255]+mt[s>>8&255]+mt[s>>16&255]+mt[s>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function Ht(s,e,t){return Math.max(e,Math.min(t,s))}function xd(s,e){return(s%e+e)%e}function Wa(s,e,t){return(1-t)*s+t*e}function tc(s){return(s&s-1)===0&&s!==0}function Io(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(){nn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],_=n[8],d=i[0],p=i[3],g=i[6],v=i[1],w=i[4],S=i[7],y=i[2],M=i[5],b=i[8];return r[0]=o*d+a*v+l*y,r[3]=o*p+a*w+l*M,r[6]=o*g+a*S+l*b,r[1]=c*d+u*v+h*y,r[4]=c*p+u*w+h*M,r[7]=c*g+u*S+h*b,r[2]=f*d+m*v+_*y,r[5]=f*p+m*w+_*M,r[8]=f*g+m*S+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,_=t*h+n*f+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(a*n-i*o)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-a*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*a+n*u,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function zu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>65535)return!0;return!1}function ms(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function aa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ha={[Zn]:{[Bi]:Hi},[Bi]:{[Zn]:aa}},hn={legacyMode:!0,get workingColorSpace(){return Bi},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Ha[e]&&Ha[e][t]!==void 0){const n=Ha[e][t];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Uu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},dn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function Xa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function zs(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Bi){return this.r=e,this.g=t,this.b=n,hn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Bi){if(e=xd(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xa(o,r,e+1/3),this.g=Xa(o,r,e),this.b=Xa(o,r,e-1/3)}return hn.toWorkingColorSpace(this,i),this}setStyle(e,t=Zn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,hn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,hn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,u=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,hn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,hn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const n=Uu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return hn.fromWorkingColorSpace(zs(this,rt),e),Ht(rt.r*255,0,255)<<16^Ht(rt.g*255,0,255)<<8^Ht(rt.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bi){hn.fromWorkingColorSpace(zs(this,rt),t);const n=rt.r,i=rt.g,r=rt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Bi){return hn.fromWorkingColorSpace(zs(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=Zn){return hn.fromWorkingColorSpace(zs(this,rt),e),e!==Zn?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(dn),dn.h+=e,dn.s+=t,dn.l+=n,this.setHSL(dn.h,dn.s,dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(Ns);const n=Wa(dn.h,Ns.h,t),i=Wa(dn.s,Ns.s,t),r=Wa(dn.l,Ns.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Xe.NAMES=Uu;let ar;class ku{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ar===void 0&&(ar=ms("canvas")),ar.width=e.width,ar.height=e.height;const n=ar.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ar}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hi(t[n]/255)*255):t[n]=Hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Bu{constructor(e=null){this.isSource=!0,this.uuid=Ls(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qa(i[o].image)):r.push(qa(i[o]))}else r=qa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function qa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sd=0;class cn extends jr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=vn,i=vn,r=en,o=Aa,a=Fn,l=Ki,c=1,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Ls(),this.name="",this.source=new Bu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ro:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Do:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ro:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Do:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Ou;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],d=l[2],p=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(m+1)/2,y=(g+1)/2,M=(u+f)/4,b=(h+d)/4,x=(_+p)/4;return w>S&&w>y?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=M/n,r=b/n):S>y?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=M/i,r=x/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=b/r,i=x/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-_)*(p-_)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-d)/v,this.z=(f-u)/v,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ji extends jr{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vu extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yd extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],m=r[o+1],_=r[o+2],d=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==_){let p=1-a;const g=l*f+c*m+u*_+h*d,v=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const y=Math.sqrt(w),M=Math.atan2(y,g*v);p=Math.sin(p*M)/y,a=Math.sin(a*M)/y}const S=a*v;if(l=l*p+f*S,c=c*p+m*S,u=u*p+_*S,h=h*p+d*S,p===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),m=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-a*i;return this.x=c*l+f*-r+u*-a-h*-o,this.y=u*l+f*-o+h*-r-c*-a,this.z=h*l+f*-a+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new k,nc=new Rs;class Ds{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Li.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Li)}else n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox),ja.applyMatrix4(e.matrixWorld),this.union(ja);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Us.subVectors(this.max,Qr),or.subVectors(e.a,Qr),lr.subVectors(e.b,Qr),cr.subVectors(e.c,Qr),oi.subVectors(lr,or),li.subVectors(cr,lr),Ri.subVectors(or,cr);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Ri.z,Ri.y,oi.z,0,-oi.x,li.z,0,-li.x,Ri.z,0,-Ri.x,-oi.y,oi.x,0,-li.y,li.x,0,-Ri.y,Ri.x,0];return!Ka(t,or,lr,cr,Us)||(t=[1,0,0,0,1,0,0,0,1],!Ka(t,or,lr,cr,Us))?!1:(ks.crossVectors(oi,li),t=[ks.x,ks.y,ks.z],Ka(t,or,lr,cr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Li.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new k,new k,new k,new k,new k,new k,new k,new k],Li=new k,ja=new Ds,or=new k,lr=new k,cr=new k,oi=new k,li=new k,Ri=new k,Qr=new k,Us=new k,ks=new k,Di=new k;function Ka(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=n.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const bd=new Ds,ic=new k,Bs=new k,Za=new k;class Jo{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Za.subVectors(e,this.center);const t=Za.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Za.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Bs.set(0,0,1).multiplyScalar(e.radius):Bs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ic.copy(e.center).add(Bs)),this.expandByPoint(ic.copy(e.center).sub(Bs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new k,Ja=new k,Vs=new k,ci=new k,Qa=new k,Gs=new k,$a=new k;class Md{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.direction).multiplyScalar(t).add(this.origin),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ja.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Vs),a=ci.dot(this.direction),l=-ci.dot(Vs),c=ci.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const d=1/u;h*=d,f*=d,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Vs).multiplyScalar(f).add(Ja),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const n=qn.dot(this.direction),i=qn.dot(qn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,i,r){Qa.subVectors(t,e),Gs.subVectors(n,e),$a.crossVectors(Qa,Gs);let o=this.direction.dot($a),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(Gs.crossVectors(ci,Gs));if(l<0)return null;const c=a*this.direction.dot(Qa.cross(ci));if(c<0||l+c>o)return null;const u=-a*ci.dot($a);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,l,c,u,h,f,m,_,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=m,g[7]=_,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ur.setFromMatrixColumn(e,0).length(),r=1/ur.setFromMatrixColumn(e,1).length(),o=1/ur.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f+d*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,d=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wd,e,Td)}lookAt(e,t,n){const i=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),ui.crossVectors(n,Bt),ui.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),ui.crossVectors(n,Bt)),ui.normalize(),Ws.crossVectors(Bt,ui),i[0]=ui.x,i[4]=Ws.x,i[8]=Bt.x,i[1]=ui.y,i[5]=Ws.y,i[9]=Bt.y,i[2]=ui.z,i[6]=Ws.z,i[10]=Bt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],_=n[2],d=n[6],p=n[10],g=n[14],v=n[3],w=n[7],S=n[11],y=n[15],M=i[0],b=i[4],x=i[8],T=i[12],F=i[1],I=i[5],Y=i[9],j=i[13],O=i[2],U=i[6],L=i[10],R=i[14],D=i[3],N=i[7],V=i[11],Q=i[15];return r[0]=o*M+a*F+l*O+c*D,r[4]=o*b+a*I+l*U+c*N,r[8]=o*x+a*Y+l*L+c*V,r[12]=o*T+a*j+l*R+c*Q,r[1]=u*M+h*F+f*O+m*D,r[5]=u*b+h*I+f*U+m*N,r[9]=u*x+h*Y+f*L+m*V,r[13]=u*T+h*j+f*R+m*Q,r[2]=_*M+d*F+p*O+g*D,r[6]=_*b+d*I+p*U+g*N,r[10]=_*x+d*Y+p*L+g*V,r[14]=_*T+d*j+p*R+g*Q,r[3]=v*M+w*F+S*O+y*D,r[7]=v*b+w*I+S*U+y*N,r[11]=v*x+w*Y+S*L+y*V,r[15]=v*T+w*j+S*R+y*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],d=e[7],p=e[11],g=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*m-n*l*m)+d*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+g*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],d=e[13],p=e[14],g=e[15],v=h*p*c-d*f*c+d*l*m-a*p*m-h*l*g+a*f*g,w=_*f*c-u*p*c-_*l*m+o*p*m+u*l*g-o*f*g,S=u*d*c-_*h*c+_*a*m-o*d*m-u*a*g+o*h*g,y=_*h*l-u*d*l-_*a*f+o*d*f+u*a*p-o*h*p,M=t*v+n*w+i*S+r*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*g-n*f*g)*b,e[2]=(a*p*r-d*l*r+d*i*c-n*p*c-a*i*g+n*l*g)*b,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*m-n*l*m)*b,e[4]=w*b,e[5]=(u*p*r-_*f*r+_*i*m-t*p*m-u*i*g+t*f*g)*b,e[6]=(_*l*r-o*p*r-_*i*c+t*p*c+o*i*g-t*l*g)*b,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*m+t*l*m)*b,e[8]=S*b,e[9]=(_*h*r-u*d*r-_*n*m+t*d*m+u*n*g-t*h*g)*b,e[10]=(o*d*r-_*a*r+_*n*c-t*d*c-o*n*g+t*a*g)*b,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*b,e[12]=y*b,e[13]=(u*d*i-_*h*i+_*n*f-t*d*f-u*n*p+t*h*p)*b,e[14]=(_*a*i-o*d*i-_*n*l+t*d*l+o*n*p-t*a*p)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,_=r*h,d=o*u,p=o*h,g=a*h,v=l*c,w=l*u,S=l*h,y=n.x,M=n.y,b=n.z;return i[0]=(1-(d+g))*y,i[1]=(m+S)*y,i[2]=(_-w)*y,i[3]=0,i[4]=(m-S)*M,i[5]=(1-(f+g))*M,i[6]=(p+v)*M,i[7]=0,i[8]=(_+w)*b,i[9]=(p-v)*b,i[10]=(1-(f+d))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ur.set(i[0],i[1],i[2]).length();const o=ur.set(i[4],i[5],i[6]).length(),a=ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const c=1/r,u=1/o,h=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,m=(o+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ur=new k,pn=new ht,wd=new k(0,0,0),Td=new k(1,1,1),ui=new k,Ws=new k,Bt=new k,rc=new ht,sc=new Rs;class Ps{constructor(e=0,t=0,n=0,i=Ps.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ps.DefaultOrder="XYZ";Ps.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ed=0;const ac=new k,fr=new Rs,Yn=new ht,Hs=new k,$r=new k,Ad=new k,Cd=new Rs,oc=new k(1,0,0),lc=new k(0,1,0),cc=new k(0,0,1),Ld={type:"added"},uc={type:"removed"};class bn extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DefaultUp.clone();const e=new k,t=new Ps,n=new Rs,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new nn}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=bn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt($r,Hs,this.up):Yn.lookAt(Hs,$r,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),fr.setFromRotationMatrix(Yn),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ld)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(uc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,Cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bn.DefaultUp=new k(0,1,0);bn.DefaultMatrixAutoUpdate=!0;const mn=new k,jn=new k,eo=new k,Kn=new k,hr=new k,dr=new k,fc=new k,to=new k,no=new k,io=new k;class ei{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),jn.subVectors(n,t),eo.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(jn),l=mn.dot(eo),c=jn.dot(jn),u=jn.dot(eo),h=o*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Kn),l.set(0,0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),jn.subVectors(e,t),mn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),mn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ei.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;hr.subVectors(i,n),dr.subVectors(r,n),to.subVectors(e,n);const l=hr.dot(to),c=dr.dot(to);if(l<=0&&c<=0)return t.copy(n);no.subVectors(e,i);const u=hr.dot(no),h=dr.dot(no);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(hr,o);io.subVectors(e,r);const m=hr.dot(io),_=dr.dot(io);if(_>=0&&m<=_)return t.copy(r);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(dr,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return fc.subVectors(r,i),a=(h-u)/(h-u+(m-_)),t.copy(i).addScaledVector(fc,a);const g=1/(p+d+f);return o=d*g,a=f*g,t.copy(n).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rd=0;class Ca extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=Er,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Pu,this.blendDst=Iu,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Th;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Er&&(n.blending=this.blending),this.side!==ds&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wu extends Ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new k,Xs=new Be;class zn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ql,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Xe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Be),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new k),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new lt),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xs.fromBufferAttribute(this,t),Xs.applyMatrix3(e),this.setXY(t,Xs.x,Xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ql&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Hu extends zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xu extends zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xi extends zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dd=0;const Jt=new ht,ro=new bn,pr=new k,Vt=new Ds,es=new Ds,at=new k;class $i extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Xu:Hu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nn().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Vt.setFromBufferAttribute(r),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];es.setFromBufferAttribute(a),this.morphTargetsRelative?(at.addVectors(Vt.min,es.min),Vt.expandByPoint(at),at.addVectors(Vt.max,es.max),Vt.expandByPoint(at)):(Vt.expandByPoint(es.min),Vt.expandByPoint(es.max))}Vt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)at.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(at));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)at.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),at.add(pr)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<a;F++)c[F]=new k,u[F]=new k;const h=new k,f=new k,m=new k,_=new Be,d=new Be,p=new Be,g=new k,v=new k;function w(F,I,Y){h.fromArray(i,F*3),f.fromArray(i,I*3),m.fromArray(i,Y*3),_.fromArray(o,F*2),d.fromArray(o,I*2),p.fromArray(o,Y*2),f.sub(h),m.sub(h),d.sub(_),p.sub(_);const j=1/(d.x*p.y-p.x*d.y);isFinite(j)&&(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(j),v.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(j),c[F].add(g),c[I].add(g),c[Y].add(g),u[F].add(v),u[I].add(v),u[Y].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let F=0,I=S.length;F<I;++F){const Y=S[F],j=Y.start,O=Y.count;for(let U=j,L=j+O;U<L;U+=3)w(n[U+0],n[U+1],n[U+2])}const y=new k,M=new k,b=new k,x=new k;function T(F){b.fromArray(r,F*3),x.copy(b);const I=c[F];y.copy(I),y.sub(b.multiplyScalar(b.dot(I))).normalize(),M.crossVectors(x,I);const j=M.dot(u[F])<0?-1:1;l[F*4]=y.x,l[F*4+1]=y.y,l[F*4+2]=y.z,l[F*4+3]=j}for(let F=0,I=S.length;F<I;++F){const Y=S[F],j=Y.start,O=Y.count;for(let U=j,L=j+O;U<L;U+=3)T(n[U+0]),T(n[U+1]),T(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,u=Math.min(l.length,o.length-c);for(let h=0,f=c;h<u;h++,f++)o[f]=l[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let g=0;g<u;g++)f[_++]=c[m++]}return new zn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new ht,mr=new Md,so=new Jo,fi=new k,hi=new k,di=new k,ao=new k,oo=new k,lo=new k,qs=new k,Ys=new k,js=new k,Ks=new Be,Zs=new Be,Js=new Be,co=new k,Qs=new k;class ni extends bn{constructor(e=new $i,t=new Wu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),e.ray.intersectsSphere(so)===!1)||(hc.copy(r).invert(),mr.copy(e.ray).applyMatrix4(hc),n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,_=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const g=m[d],v=i[g.materialIndex],w=Math.max(g.start,_.start),S=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let y=w,M=S;y<M;y+=3){const b=a.getX(y),x=a.getX(y+1),T=a.getX(y+2);o=$s(this,v,e,mr,l,c,u,h,f,b,x,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const d=Math.max(0,_.start),p=Math.min(a.count,_.start+_.count);for(let g=d,v=p;g<v;g+=3){const w=a.getX(g),S=a.getX(g+1),y=a.getX(g+2);o=$s(this,i,e,mr,l,c,u,h,f,w,S,y),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const g=m[d],v=i[g.materialIndex],w=Math.max(g.start,_.start),S=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let y=w,M=S;y<M;y+=3){const b=y,x=y+1,T=y+2;o=$s(this,v,e,mr,l,c,u,h,f,b,x,T),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const d=Math.max(0,_.start),p=Math.min(l.count,_.start+_.count);for(let g=d,v=p;g<v;g+=3){const w=g,S=g+1,y=g+2;o=$s(this,i,e,mr,l,c,u,h,f,w,S,y),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Pd(s,e,t,n,i,r,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side!==Pr,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Qs);return c<t.near||c>t.far?null:{distance:c,point:Qs.clone(),object:s}}function $s(s,e,t,n,i,r,o,a,l,c,u,h){fi.fromBufferAttribute(i,c),hi.fromBufferAttribute(i,u),di.fromBufferAttribute(i,h);const f=s.morphTargetInfluences;if(r&&f){qs.set(0,0,0),Ys.set(0,0,0),js.set(0,0,0);for(let _=0,d=r.length;_<d;_++){const p=f[_],g=r[_];p!==0&&(ao.fromBufferAttribute(g,c),oo.fromBufferAttribute(g,u),lo.fromBufferAttribute(g,h),o?(qs.addScaledVector(ao,p),Ys.addScaledVector(oo,p),js.addScaledVector(lo,p)):(qs.addScaledVector(ao.sub(fi),p),Ys.addScaledVector(oo.sub(hi),p),js.addScaledVector(lo.sub(di),p)))}fi.add(qs),hi.add(Ys),di.add(js)}s.isSkinnedMesh&&(s.boneTransform(c,fi),s.boneTransform(u,hi),s.boneTransform(h,di));const m=Pd(s,e,t,n,fi,hi,di,co);if(m){a&&(Ks.fromBufferAttribute(a,c),Zs.fromBufferAttribute(a,u),Js.fromBufferAttribute(a,h),m.uv=ei.getUV(co,fi,hi,di,Ks,Zs,Js,new Be)),l&&(Ks.fromBufferAttribute(l,c),Zs.fromBufferAttribute(l,u),Js.fromBufferAttribute(l,h),m.uv2=ei.getUV(co,fi,hi,di,Ks,Zs,Js,new Be));const _={a:c,b:u,c:h,normal:new k,materialIndex:0};ei.getNormal(fi,hi,di,_.normal),m.face=_}return m}class Is extends $i{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xi(c,3)),this.setAttribute("normal",new Xi(u,3)),this.setAttribute("uv",new Xi(h,2));function _(d,p,g,v,w,S,y,M,b,x,T){const F=S/b,I=y/x,Y=S/2,j=y/2,O=M/2,U=b+1,L=x+1;let R=0,D=0;const N=new k;for(let V=0;V<L;V++){const Q=V*I-j;for(let Z=0;Z<U;Z++){const ee=Z*F-Y;N[d]=ee*v,N[p]=Q*w,N[g]=O,c.push(N.x,N.y,N.z),N[d]=0,N[p]=0,N[g]=M>0?1:-1,u.push(N.x,N.y,N.z),h.push(Z/b),h.push(1-V/x),R+=1}}for(let V=0;V<x;V++)for(let Q=0;Q<b;Q++){const Z=f+Q+U*V,ee=f+Q+U*(V+1),ne=f+(Q+1)+U*(V+1),ue=f+(Q+1)+U*V;l.push(Z,ee,ue),l.push(ee,ne,ue),D+=6}a.addGroup(m,D,T),m+=D,f+=R}}static fromJSON(e){return new Is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gt(s){const e={};for(let t=0;t<s.length;t++){const n=Nr(s[t]);for(const i in n)e[i]=n[i]}return e}const Id={clone:Nr,merge:gt};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qu extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends qu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ec*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ec*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gr=90,_r=1;class Nd extends bn{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new _n(gr,_r,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new k(1,0,0)),this.add(i);const r=new _n(gr,_r,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new k(-1,0,0)),this.add(r);const o=new _n(gr,_r,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new k(0,1,0)),this.add(o);const a=new _n(gr,_r,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new k(0,-1,0)),this.add(a);const l=new _n(gr,_r,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new k(0,0,1)),this.add(l);const c=new _n(gr,_r,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new k(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ii,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Yu extends cn{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zd extends Ji{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Is(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:xi});r.uniforms.tEquirect.value=t;const o=new ni(i,r),a=t.minFilter;return t.minFilter===Aa&&(t.minFilter=en),new Nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const uo=new k,Ud=new k,kd=new nn;class Fi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=uo.subVectors(n,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kd.getNormalMatrix(e),i=this.coplanarPoint(uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new Jo,ea=new k;class ju{constructor(e=new Fi,t=new Fi,n=new Fi,i=new Fi,r=new Fi,o=new Fi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],_=n[10],d=n[11],p=n[12],g=n[13],v=n[14],w=n[15];return t[0].setComponents(a-i,h-l,d-f,w-p).normalize(),t[1].setComponents(a+i,h+l,d+f,w+p).normalize(),t[2].setComponents(a+r,h+c,d+m,w+g).normalize(),t[3].setComponents(a-r,h-c,d-m,w-g).normalize(),t[4].setComponents(a-o,h-u,d-_,w-v).normalize(),t[5].setComponents(a+o,h+u,d+_,w+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ea.x=i.normal.x>0?e.max.x:e.min.x,ea.y=i.normal.y>0?e.max.y:e.min.y,ea.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ku(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bd(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=s.createBuffer();s.bindBuffer(u,m),s.bufferData(u,h,f),c.onUploadCallback();let _;if(h instanceof Float32Array)_=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(h instanceof Int16Array)_=5122;else if(h instanceof Uint32Array)_=5125;else if(h instanceof Int32Array)_=5124;else if(h instanceof Int8Array)_=5120;else if(h instanceof Uint8Array)_=5121;else if(h instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;s.bindBuffer(h,c),m.count===-1?s.bufferSubData(h,0,f):(t?s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(s.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class La extends $i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],d=[],p=[];for(let g=0;g<u;g++){const v=g*f-o;for(let w=0;w<c;w++){const S=w*h-r;_.push(S,-v,0),d.push(0,0,1),p.push(w/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const w=v+c*g,S=v+c*(g+1),y=v+1+c*(g+1),M=v+1+c*g;m.push(w,S,M),m.push(S,y,M)}this.setIndex(m),this.setAttribute("position",new Xi(_,3)),this.setAttribute("normal",new Xi(d,3)),this.setAttribute("uv",new Xi(p,2))}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd="vec3 transformed = vec3( position );",jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ap=`#define PI 3.141592653589793
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
}`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Cp=`uniform bool receiveShadow;
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
#endif`,Lp=`#if defined( USE_ENVMAP )
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Fp=`PhysicalMaterial material;
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
#endif`,Op=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
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
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,em=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#ifdef USE_SHADOWMAP
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
#endif`,vm=`#ifdef USE_SHADOWMAP
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
#endif`,xm=`#ifdef USE_SHADOWMAP
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
#endif`,Sm=`float getShadowMask() {
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
}`,ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Pm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Im=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Fm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Om=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Nm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#include <envmap_common_pars_fragment>
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
}`,Gm=`#include <common>
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
}`,Wm=`#if DEPTH_PACKING == 3200
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
}`,Hm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jm=`uniform float scale;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Qm=`#define LAMBERT
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
}`,$m=`uniform vec3 diffuse;
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
}`,eg=`#define MATCAP
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
}`,tg=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,ig=`#define NORMAL
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
}`,rg=`#define PHONG
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
}`,sg=`#define PHONG
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
}`,ag=`#define STANDARD
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
}`,og=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,cg=`#define TOON
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
}`,ug=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,pg=`uniform float rotation;
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
}`,mg=`uniform vec3 diffuse;
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
}`,Ce={alphamap_fragment:Vd,alphamap_pars_fragment:Gd,alphatest_fragment:Wd,alphatest_pars_fragment:Hd,aomap_fragment:Xd,aomap_pars_fragment:qd,begin_vertex:Yd,beginnormal_vertex:jd,bsdfs:Kd,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Qd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:ep,clipping_planes_vertex:tp,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:rp,color_vertex:sp,common:ap,cube_uv_reflection_fragment:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:up,emissivemap_fragment:fp,emissivemap_pars_fragment:hp,encodings_fragment:dp,encodings_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Lp,envmap_vertex:xp,fog_vertex:Sp,fog_pars_vertex:yp,fog_fragment:bp,fog_pars_fragment:Mp,gradientmap_pars_fragment:wp,lightmap_fragment:Tp,lightmap_pars_fragment:Ep,lights_lambert_vertex:Ap,lights_pars_begin:Cp,lights_toon_fragment:Rp,lights_toon_pars_fragment:Dp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Ip,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:Np,lights_fragment_maps:zp,lights_fragment_end:Up,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Gp,map_fragment:Wp,map_pars_fragment:Hp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:jp,morphcolor_vertex:Kp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Jp,morphtarget_vertex:Qp,normal_fragment_begin:$p,normal_fragment_maps:em,normal_pars_fragment:tm,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:om,iridescence_pars_fragment:lm,output_fragment:cm,packing:um,premultiplied_alpha_fragment:fm,project_vertex:hm,dithering_fragment:dm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:vm,shadowmap_vertex:xm,shadowmask_pars_fragment:Sm,skinbase_vertex:ym,skinning_pars_vertex:bm,skinning_vertex:Mm,skinnormal_vertex:wm,specularmap_fragment:Tm,specularmap_pars_fragment:Em,tonemapping_fragment:Am,tonemapping_pars_fragment:Cm,transmission_fragment:Lm,transmission_pars_fragment:Rm,uv_pars_fragment:Dm,uv_pars_vertex:Pm,uv_vertex:Im,uv2_pars_fragment:Fm,uv2_pars_vertex:Om,uv2_vertex:Nm,worldpos_vertex:zm,background_vert:Um,background_frag:km,cube_vert:Bm,cube_frag:Vm,depth_vert:Gm,depth_frag:Wm,distanceRGBA_vert:Hm,distanceRGBA_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:jm,linedashed_frag:Km,meshbasic_vert:Zm,meshbasic_frag:Jm,meshlambert_vert:Qm,meshlambert_frag:$m,meshmatcap_vert:eg,meshmatcap_frag:tg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:rg,meshphong_frag:sg,meshphysical_vert:ag,meshphysical_frag:og,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:ug,points_frag:fg,shadow_vert:hg,shadow_frag:dg,sprite_vert:pg,sprite_frag:mg},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new nn},uv2Transform:{value:new nn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nn}}},Pn={basic:{uniforms:gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:gt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:gt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:gt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:gt([oe.points,oe.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:gt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:gt([oe.common,oe.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:gt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:gt([oe.sprite,oe.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new nn},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:gt([oe.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:gt([oe.common,oe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:gt([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Pn.physical={uniforms:gt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function gg(s,e,t,n,i,r){const o=new Xe(0);let a=i===!0?0:1,l,c,u=null,h=0,f=null;function m(d,p){let g=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=e.get(v));const w=s.xr,S=w.getSession&&w.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),g=!0),(s.autoClear||g)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ea)?(c===void 0&&(c=new ni(new Is(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Nr(Pn.cube.uniforms),vertexShader:Pn.cube.vertexShader,fragmentShader:Pn.cube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(u!==v||h!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ni(new La(2,2),new bi({name:"BackgroundMaterial",uniforms:Nr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=s.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function _(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(d,p=1){o.set(d),a=p,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,_(o,a)},render:m}}function _g(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(O,U,L,R,D){let N=!1;if(o){const V=d(R,L,U);c!==V&&(c=V,m(c.object)),N=g(O,R,L,D),N&&v(O,R,L,D)}else{const V=U.wireframe===!0;(c.geometry!==R.id||c.program!==L.id||c.wireframe!==V)&&(c.geometry=R.id,c.program=L.id,c.wireframe=V,N=!0)}D!==null&&t.update(D,34963),(N||u)&&(u=!1,x(O,U,L,R),D!==null&&s.bindBuffer(34963,t.get(D).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function d(O,U,L){const R=L.wireframe===!0;let D=a[O.id];D===void 0&&(D={},a[O.id]=D);let N=D[U.id];N===void 0&&(N={},D[U.id]=N);let V=N[R];return V===void 0&&(V=p(f()),N[R]=V),V}function p(O){const U=[],L=[],R=[];for(let D=0;D<i;D++)U[D]=0,L[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:L,attributeDivisors:R,object:O,attributes:{},index:null}}function g(O,U,L,R){const D=c.attributes,N=U.attributes;let V=0;const Q=L.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const ne=D[Z];let ue=N[Z];if(ue===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;V++}return c.attributesNum!==V||c.index!==R}function v(O,U,L,R){const D={},N=U.attributes;let V=0;const Q=L.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let ne=N[Z];ne===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(ne=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(ne=O.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),D[Z]=ue,V++}c.attributes=D,c.attributesNum=V,c.index=R}function w(){const O=c.newAttributes;for(let U=0,L=O.length;U<L;U++)O[U]=0}function S(O){y(O,0)}function y(O,U){const L=c.newAttributes,R=c.enabledAttributes,D=c.attributeDivisors;L[O]=1,R[O]===0&&(s.enableVertexAttribArray(O),R[O]=1),D[O]!==U&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,U),D[O]=U)}function M(){const O=c.newAttributes,U=c.enabledAttributes;for(let L=0,R=U.length;L<R;L++)U[L]!==O[L]&&(s.disableVertexAttribArray(L),U[L]=0)}function b(O,U,L,R,D,N){n.isWebGL2===!0&&(L===5124||L===5125)?s.vertexAttribIPointer(O,U,L,D,N):s.vertexAttribPointer(O,U,L,R,D,N)}function x(O,U,L,R){if(n.isWebGL2===!1&&(O.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const D=R.attributes,N=L.getAttributes(),V=U.defaultAttributeValues;for(const Q in N){const Z=N[Q];if(Z.location>=0){let ee=D[Q];if(ee===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),ee!==void 0){const ne=ee.normalized,ue=ee.itemSize,X=t.get(ee);if(X===void 0)continue;const je=X.buffer,J=X.type,H=X.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ie=ee.data,ke=ie.stride,Le=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let ge=0;ge<Z.locationSize;ge++)y(Z.location+ge,ie.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ge=0;ge<Z.locationSize;ge++)S(Z.location+ge);s.bindBuffer(34962,je);for(let ge=0;ge<Z.locationSize;ge++)b(Z.location+ge,ue/Z.locationSize,J,ne,ke*H,(Le+ue/Z.locationSize*ge)*H)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<Z.locationSize;ie++)y(Z.location+ie,ee.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<Z.locationSize;ie++)S(Z.location+ie);s.bindBuffer(34962,je);for(let ie=0;ie<Z.locationSize;ie++)b(Z.location+ie,ue/Z.locationSize,J,ne,ue*H,ue/Z.locationSize*ie*H)}}else if(V!==void 0){const ne=V[Q];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(Z.location,ne);break;case 3:s.vertexAttrib3fv(Z.location,ne);break;case 4:s.vertexAttrib4fv(Z.location,ne);break;default:s.vertexAttrib1fv(Z.location,ne)}}}}M()}function T(){Y();for(const O in a){const U=a[O];for(const L in U){const R=U[L];for(const D in R)_(R[D].object),delete R[D];delete U[L]}delete a[O]}}function F(O){if(a[O.id]===void 0)return;const U=a[O.id];for(const L in U){const R=U[L];for(const D in R)_(R[D].object),delete R[D];delete U[L]}delete a[O.id]}function I(O){for(const U in a){const L=a[U];if(L[O.id]===void 0)continue;const R=L[O.id];for(const D in R)_(R[D].object),delete R[D];delete L[O.id]}}function Y(){j(),u=!0,c!==l&&(c=l,m(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:j,dispose:T,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:S,disableUnusedAttributes:M}}function vg(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,u){s.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=s,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function xg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),f=s.getParameter(35660),m=s.getParameter(3379),_=s.getParameter(34076),d=s.getParameter(34921),p=s.getParameter(36347),g=s.getParameter(36348),v=s.getParameter(36349),w=f>0,S=o||e.has("OES_texture_float"),y=w&&S,M=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:w,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:M}}function Sg(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Fi,a=new nn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const _=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,_},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const _=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,g=s.get(h);if(!i||_===null||_.length===0||r&&!p)r?u(null):c();else{const v=r?0:n,w=v*4;let S=g.clippingState||null;l.value=S,S=u(_,f,w,m);for(let y=0;y!==w;++y)S[y]=t[y];g.clippingState=S,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,_){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const g=m+d*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<g)&&(p=new Float32Array(g));for(let w=0,S=m;w!==d;++w,S+=4)o.copy(h[w]).applyMatrix4(v,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function yg(s){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=Ir:a===Lo&&(o.mapping=Fr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Co||a===Lo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zd(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Zu extends qu{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const br=4,dc=[.125,.215,.35,.446,.526,.582],zi=20,fo=new Zu,pc=new Xe;let ho=null;const Oi=(1+Math.sqrt(5))/2,xr=1/Oi,mc=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Oi,xr),new k(0,Oi,-xr),new k(xr,0,Oi),new k(-xr,0,Oi),new k(Oi,xr,0),new k(-Oi,xr,0)];class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ho=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ho),e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ho=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ps,format:Fn,encoding:Zi,depthBuffer:!1},i=_c(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=Mg(r,e,t)}return i}_compileMaterial(e){const t=new ni(this._lodPlanes[0],e);this._renderer.compile(t,fo)}_sceneToCubeUV(e,t,n,i){const a=new _n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(pc),u.toneMapping=ii,u.autoClear=!1;const m=new Wu({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new ni(new Is,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(pc),d=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const w=this._cubeSize;ta(i,v*w,g>2?w:0,w,w),u.setRenderTarget(i),d&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ir||e.mapping===Fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ni(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=mc[(i-1)%mc.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ni(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*zi-1),d=r/_,p=isFinite(r)?1+Math.floor(u*d):zi;p>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const g=[];let v=0;for(let b=0;b<zi;++b){const x=b/d,T=Math.exp(-x*x/2);g.push(T),b===0?v+=T:b<p&&(v+=2*T)}for(let b=0;b<g.length;b++)g[b]=g[b]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-n;const S=this._sizeLods[i],y=3*S*(i>w-br?i-w+br:0),M=4*(this._cubeSize-S);ta(t,y,M,3*S,2*S),l.setRenderTarget(t),l.render(h,fo)}}function bg(s){const e=[],t=[],n=[];let i=s;const r=s-br+1+dc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-br?l=dc[o-s+br-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,d=3,p=2,g=1,v=new Float32Array(d*_*m),w=new Float32Array(p*_*m),S=new Float32Array(g*_*m);for(let M=0;M<m;M++){const b=M%3*2/3-1,x=M>2?0:-1,T=[b,x,0,b+2/3,x,0,b+2/3,x+1,0,b,x,0,b+2/3,x+1,0,b,x+1,0];v.set(T,d*_*M),w.set(f,p*_*M);const F=[M,M,M,M,M,M];S.set(F,g*_*M)}const y=new $i;y.setAttribute("position",new zn(v,d)),y.setAttribute("uv",new zn(w,p)),y.setAttribute("faceIndex",new zn(S,g)),e.push(y),i>br&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _c(s,e,t){const n=new Ji(s,e,t);return n.texture.mapping=Ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Mg(s,e,t){const n=new Float32Array(zi),i=new k(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function vc(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function xc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}function wg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Co||l===Lo,u=l===Ir||l===Fr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new gc(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new gc(s));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Eg(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],34962);const m=h.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,g=d.length;p<g;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let d=0;if(m!==null){const v=m.array;d=m.version;for(let w=0,S=v.length;w<S;w+=3){const y=v[w+0],M=v[w+1],b=v[w+2];f.push(y,M,M,b,b,y)}}else{const v=_.array;d=_.version;for(let w=0,S=v.length/3-1;w<S;w+=3){const y=w+0,M=w+1,b=w+2;f.push(y,M,M,b,b,y)}}const p=new(zu(f)?Xu:Hu)(f,1);p.version=d;const g=r.get(h);g&&e.remove(g),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Ag(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){s.drawElements(r,m,a,f*l),t.update(m,r,1)}function h(f,m,_){if(_===0)return;let d,p;if(i)d=s,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,a,f*l,_),t.update(m,r,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Cg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Lg(s,e){return s[0]-e[0]}function Rg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function po(s,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(t)}function Dg(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==d){let U=function(){j.dispose(),r.delete(u),u.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();const w=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,M=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let T=0;w===!0&&(T=1),S===!0&&(T=2),y===!0&&(T=3);let F=u.attributes.position.count*T,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const Y=new Float32Array(F*I*4*d),j=new Vu(Y,F,I,d);j.type=ki,j.needsUpdate=!0;const O=T*4;for(let L=0;L<d;L++){const R=M[L],D=b[L],N=x[L],V=F*I*4*L;for(let Q=0;Q<R.count;Q++){const Z=Q*O;w===!0&&(o.fromBufferAttribute(R,Q),R.normalized===!0&&po(o,R),Y[V+Z+0]=o.x,Y[V+Z+1]=o.y,Y[V+Z+2]=o.z,Y[V+Z+3]=0),S===!0&&(o.fromBufferAttribute(D,Q),D.normalized===!0&&po(o,D),Y[V+Z+4]=o.x,Y[V+Z+5]=o.y,Y[V+Z+6]=o.z,Y[V+Z+7]=0),y===!0&&(o.fromBufferAttribute(N,Q),N.normalized===!0&&po(o,N),Y[V+Z+8]=o.x,Y[V+Z+9]=o.y,Y[V+Z+10]=o.z,Y[V+Z+11]=N.itemSize===4?o.w:1)}}p={count:d,texture:j,size:new Be(F,I)},r.set(u,p),u.addEventListener("dispose",U)}let g=0;for(let w=0;w<m.length;w++)g+=m[w];const v=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",m),f.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=m===void 0?0:m.length;let d=n[u.id];if(d===void 0||d.length!==_){d=[];for(let S=0;S<_;S++)d[S]=[S,0];n[u.id]=d}for(let S=0;S<_;S++){const y=d[S];y[0]=S,y[1]=m[S]}d.sort(Rg);for(let S=0;S<8;S++)S<_&&d[S][1]?(a[S][0]=d[S][0],a[S][1]=d[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(Lg);const p=u.morphAttributes.position,g=u.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const y=a[S],M=y[0],b=y[1];M!==Number.MAX_SAFE_INTEGER&&b?(p&&u.getAttribute("morphTarget"+S)!==p[M]&&u.setAttribute("morphTarget"+S,p[M]),g&&u.getAttribute("morphNormal"+S)!==g[M]&&u.setAttribute("morphNormal"+S,g[M]),i[S]=b,v+=b):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),g&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const w=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Pg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Ju=new cn,Qu=new Vu,$u=new yd,ef=new Yu,Sc=[],yc=[],bc=new Float32Array(16),Mc=new Float32Array(9),wc=new Float32Array(4);function Kr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Sc[i];if(r===void 0&&(r=new Float32Array(i),Sc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Et(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function At(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ra(s,e){let t=yc[e];t===void 0&&(t=new Int32Array(e),yc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ig(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;s.uniform2fv(this.addr,e),At(t,e)}}function Og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;s.uniform3fv(this.addr,e),At(t,e)}}function Ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;s.uniform4fv(this.addr,e),At(t,e)}}function zg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;wc.set(n),s.uniformMatrix2fv(this.addr,!1,wc),At(t,n)}}function Ug(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Mc.set(n),s.uniformMatrix3fv(this.addr,!1,Mc),At(t,n)}}function kg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;bc.set(n),s.uniformMatrix4fv(this.addr,!1,bc),At(t,n)}}function Bg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Vg(s,e){const t=this.cache;Et(t,e)||(s.uniform2iv(this.addr,e),At(t,e))}function Gg(s,e){const t=this.cache;Et(t,e)||(s.uniform3iv(this.addr,e),At(t,e))}function Wg(s,e){const t=this.cache;Et(t,e)||(s.uniform4iv(this.addr,e),At(t,e))}function Hg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Xg(s,e){const t=this.cache;Et(t,e)||(s.uniform2uiv(this.addr,e),At(t,e))}function qg(s,e){const t=this.cache;Et(t,e)||(s.uniform3uiv(this.addr,e),At(t,e))}function Yg(s,e){const t=this.cache;Et(t,e)||(s.uniform4uiv(this.addr,e),At(t,e))}function jg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ju,i)}function Kg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$u,i)}function Zg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ef,i)}function Jg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qu,i)}function Qg(s){switch(s){case 5126:return Ig;case 35664:return Fg;case 35665:return Og;case 35666:return Ng;case 35674:return zg;case 35675:return Ug;case 35676:return kg;case 5124:case 35670:return Bg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return Hg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function $g(s,e){s.uniform1fv(this.addr,e)}function e_(s,e){const t=Kr(e,this.size,2);s.uniform2fv(this.addr,t)}function t_(s,e){const t=Kr(e,this.size,3);s.uniform3fv(this.addr,t)}function n_(s,e){const t=Kr(e,this.size,4);s.uniform4fv(this.addr,t)}function i_(s,e){const t=Kr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function r_(s,e){const t=Kr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function s_(s,e){const t=Kr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function a_(s,e){s.uniform1iv(this.addr,e)}function o_(s,e){s.uniform2iv(this.addr,e)}function l_(s,e){s.uniform3iv(this.addr,e)}function c_(s,e){s.uniform4iv(this.addr,e)}function u_(s,e){s.uniform1uiv(this.addr,e)}function f_(s,e){s.uniform2uiv(this.addr,e)}function h_(s,e){s.uniform3uiv(this.addr,e)}function d_(s,e){s.uniform4uiv(this.addr,e)}function p_(s,e,t){const n=e.length,i=Ra(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2D(e[r]||Ju,i[r])}function m_(s,e,t){const n=e.length,i=Ra(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||$u,i[r])}function g_(s,e,t){const n=e.length,i=Ra(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTextureCube(e[r]||ef,i[r])}function __(s,e,t){const n=e.length,i=Ra(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||Qu,i[r])}function v_(s){switch(s){case 5126:return $g;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return r_;case 35676:return s_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return u_;case 36294:return f_;case 36295:return h_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}class x_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Qg(t.type)}}class S_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=v_(t.type)}}class y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Tc(s,e){s.seq.push(e),s.map[e.id]=e}function b_(s,e,t){const n=s.name,i=n.length;for(mo.lastIndex=0;;){const r=mo.exec(n),o=mo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Tc(t,c===void 0?new x_(a,s,e):new S_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new y_(a),Tc(t,h)),t=h}}}class oa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);b_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ec(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let M_=0;function w_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function T_(s){switch(s){case Zi:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ac(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+w_(s.getShaderSource(e),o)}else return i}function E_(s,e){const t=T_(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function A_(s,e){let t;switch(e){case Yh:t="Linear";break;case jh:t="Reinhard";break;case Kh:t="OptimizedCineon";break;case Zh:t="ACESFilmic";break;case Jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function C_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function L_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R_(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ss(s){return s!==""}function Cc(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(s){return s.replace(D_,P_)}function P_(s,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Fo(t)}const I_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(s){return s.replace(F_,tf).replace(I_,O_)}function O_(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),tf(s,e,t,n)}function tf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Dc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function N_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rs&&(e="SHADOWMAP_TYPE_VSM"),e}function z_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ir:case Fr:e="ENVMAP_TYPE_CUBE";break;case Ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function k_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Fu:e="ENVMAP_BLENDING_MULTIPLY";break;case Xh:e="ENVMAP_BLENDING_MIX";break;case qh:e="ENVMAP_BLENDING_ADD";break}return e}function B_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function V_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=N_(t),c=z_(t),u=U_(t),h=k_(t),f=B_(t),m=t.isWebGL2?"":C_(t),_=L_(r),d=i.createProgram();let p,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(ss).join(`
`),p.length>0&&(p+=`
`),g=[m,_].filter(ss).join(`
`),g.length>0&&(g+=`
`)):(p=[Dc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),g=[m,Dc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ce.tonemapping_pars_fragment:"",t.toneMapping!==ii?A_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,E_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=Fo(o),o=Cc(o,t),o=Lc(o,t),a=Fo(a),a=Cc(a,t),a=Lc(a,t),o=Rc(o),a=Rc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=v+p+o,S=v+g+a,y=Ec(i,35633,w),M=Ec(i,35632,S);if(i.attachShader(d,y),i.attachShader(d,M),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),s.debug.checkShaderErrors){const T=i.getProgramInfoLog(d).trim(),F=i.getShaderInfoLog(y).trim(),I=i.getShaderInfoLog(M).trim();let Y=!0,j=!0;if(i.getProgramParameter(d,35714)===!1){Y=!1;const O=Ac(i,y,"vertex"),U=Ac(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+T+`
`+O+`
`+U)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(F===""||I==="")&&(j=!1);j&&(this.diagnostics={runnable:Y,programLog:T,vertexShader:{log:F,prefix:p},fragmentShader:{log:I,prefix:g}})}i.deleteShader(y),i.deleteShader(M);let b;this.getUniforms=function(){return b===void 0&&(b=new oa(i,d)),b};let x;return this.getAttributes=function(){return x===void 0&&(x=R_(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=M,this}let G_=0;class W_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new H_(e);t.set(e,n)}return t.get(e)}}class H_{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}}function X_(s,e,t,n,i,r,o){const a=new Gu,l=new W_,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,T,F,I,Y){const j=I.fog,O=Y.geometry,U=x.isMeshStandardMaterial?I.environment:null,L=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),R=L&&L.mapping===Ea?L.image.height:null,D=_[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const N=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,V=N!==void 0?N.length:0;let Q=0;O.morphAttributes.position!==void 0&&(Q=1),O.morphAttributes.normal!==void 0&&(Q=2),O.morphAttributes.color!==void 0&&(Q=3);let Z,ee,ne,ue;if(D){const ke=Pn[D];Z=ke.vertexShader,ee=ke.fragmentShader}else Z=x.vertexShader,ee=x.fragmentShader,l.update(x),ne=l.getVertexShaderID(x),ue=l.getFragmentShaderID(x);const X=s.getRenderTarget(),je=x.alphaTest>0,J=x.clearcoat>0,H=x.iridescence>0;return{isWebGL2:u,shaderID:D,shaderName:x.type,vertexShader:Z,fragmentShader:ee,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:Y.isInstancedMesh===!0,instancingColor:Y.isInstancedMesh===!0&&Y.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?s.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Zi,map:!!x.map,matcap:!!x.matcap,envMap:!!L,envMapMode:L&&L.mapping,envMapCubeUVHeight:R,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===_d,tangentSpaceNormalMap:x.normalMapType===gd,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ze,clearcoat:J,clearcoatMap:J&&!!x.clearcoatMap,clearcoatRoughnessMap:J&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:J&&!!x.clearcoatNormalMap,iridescence:H,iridescenceMap:H&&!!x.iridescenceMap,iridescenceThicknessMap:H&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Er,alphaMap:!!x.alphaMap,alphaTest:je,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!O.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!j,useFog:x.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Q,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:x.toneMapped?s.toneMapping:ii,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pr,flipSided:x.side===Sn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)T.push(F),T.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(g(T,x),v(T,x),T.push(s.outputEncoding)),T.push(x.customProgramCacheKey),T.join()}function g(x,T){x.push(T.precision),x.push(T.outputEncoding),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.combine),x.push(T.vertexUvs),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function v(x,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),x.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),x.push(a.mask)}function w(x){const T=_[x.type];let F;if(T){const I=Pn[T];F=Id.clone(I.uniforms)}else F=x.uniforms;return F}function S(x,T){let F;for(let I=0,Y=c.length;I<Y;I++){const j=c[I];if(j.cacheKey===T){F=j,++F.usedTimes;break}}return F===void 0&&(F=new V_(s,T,x,r),c.push(F)),F}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),x.destroy()}}function M(x){l.remove(x)}function b(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:w,acquireProgram:S,releaseProgram:y,releaseShaderCache:M,programs:c,dispose:b}}function q_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Y_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Pc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ic(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,_,d,p){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:d,group:p},s[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=m,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=d,g.group=p),e++,g}function a(h,f,m,_,d,p){const g=o(h,f,m,_,d,p);m.transmission>0?n.push(g):m.transparent===!0?i.push(g):t.push(g)}function l(h,f,m,_,d,p){const g=o(h,f,m,_,d,p);m.transmission>0?n.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function c(h,f){t.length>1&&t.sort(h||Y_),n.length>1&&n.sort(f||Pc),i.length>1&&i.sort(f||Pc)}function u(){for(let h=e,f=s.length;h<f;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function j_(){let s=new WeakMap;function e(n,i){let r;return s.has(n)===!1?(r=new Ic,s.set(n,[r])):i>=s.get(n).length?(r=new Ic,s.get(n).push(r)):r=s.get(n)[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function K_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Xe};break;case"SpotLight":t={position:new k,direction:new k,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function Z_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let J_=0;function Q_(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function $_(s,e){const t=new K_,n=Z_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,o=new ht,a=new ht;function l(u,h){let f=0,m=0,_=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,p=0,g=0,v=0,w=0,S=0,y=0,M=0;u.sort(Q_);const b=h!==!0?Math.PI:1;for(let T=0,F=u.length;T<F;T++){const I=u[T],Y=I.color,j=I.intensity,O=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=Y.r*j*b,m+=Y.g*j*b,_+=Y.b*j*b;else if(I.isLightProbe)for(let L=0;L<9;L++)i.probe[L].addScaledVector(I.sh.coefficients[L],j);else if(I.isDirectionalLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const R=I.shadow,D=n.get(I);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,i.directionalShadow[d]=D,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=L,d++}else if(I.isSpotLight){const L=t.get(I);if(L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(Y).multiplyScalar(j*b),L.distance=O,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,I.castShadow){const R=I.shadow,D=n.get(I);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,i.spotShadow[g]=D,i.spotShadowMap[g]=U,i.spotShadowMatrix[g]=I.shadow.matrix,M++}i.spot[g]=L,g++}else if(I.isRectAreaLight){const L=t.get(I);L.color.copy(Y).multiplyScalar(j),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),i.rectArea[v]=L,v++}else if(I.isPointLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity*b),L.distance=I.distance,L.decay=I.decay,I.castShadow){const R=I.shadow,D=n.get(I);D.shadowBias=R.bias,D.shadowNormalBias=R.normalBias,D.shadowRadius=R.radius,D.shadowMapSize=R.mapSize,D.shadowCameraNear=R.camera.near,D.shadowCameraFar=R.camera.far,i.pointShadow[p]=D,i.pointShadowMap[p]=U,i.pointShadowMatrix[p]=I.shadow.matrix,y++}i.point[p]=L,p++}else if(I.isHemisphereLight){const L=t.get(I);L.skyColor.copy(I.color).multiplyScalar(j*b),L.groundColor.copy(I.groundColor).multiplyScalar(j*b),i.hemi[w]=L,w++}}v>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=_;const x=i.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==g||x.rectAreaLength!==v||x.hemiLength!==w||x.numDirectionalShadows!==S||x.numPointShadows!==y||x.numSpotShadows!==M)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=v,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=M,x.directionalLength=d,x.pointLength=p,x.spotLength=g,x.rectAreaLength=v,x.hemiLength=w,x.numDirectionalShadows=S,x.numPointShadows=y,x.numSpotShadows=M,i.version=J_++)}function c(u,h){let f=0,m=0,_=0,d=0,p=0;const g=h.matrixWorldInverse;for(let v=0,w=u.length;v<w;v++){const S=u[v];if(S.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(S.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),_++}else if(S.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(S.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(g),m++}else if(S.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:l,setupView:c,state:i}}function Fc(s,e){const t=new $_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function e0(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new Fc(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new Fc(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class t0 extends Ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n0 extends Ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
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
}`;function s0(s,e,t){let n=new ju;const i=new Be,r=new Be,o=new lt,a=new t0({depthPacking:md}),l=new n0,c={},u=t.maxTextureSize,h={0:Sn,1:ds,2:Pr},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:i0,fragmentShader:r0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new $i;_.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ni(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du,this.render=function(S,y,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const b=s.getRenderTarget(),x=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),F=s.state;F.setBlending(xi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let I=0,Y=S.length;I<Y;I++){const j=S[I],O=j.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const U=O.getFrameExtents();if(i.multiply(U),r.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,O.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,O.mapSize.y=r.y)),O.map===null){const R=this.type!==rs?{minFilter:Dt,magFilter:Dt}:{};O.map=new Ji(i.x,i.y,R),O.map.texture.name=j.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const L=O.getViewportCount();for(let R=0;R<L;R++){const D=O.getViewport(R);o.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),F.viewport(o),O.updateMatrices(j,R),n=O.getFrustum(),w(y,M,O.camera,j,this.type)}O.isPointLightShadow!==!0&&this.type===rs&&g(O,M),O.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(b,x,T)};function g(S,y){const M=e.update(d);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ji(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(y,null,M,f,d,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(y,null,M,m,d,null)}function v(S,y,M,b,x,T){let F=null;const I=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0?F=I:F=M.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const Y=F.uuid,j=y.uuid;let O=c[Y];O===void 0&&(O={},c[Y]=O);let U=O[j];U===void 0&&(U=F.clone(),O[j]=U),F=U}return F.visible=y.visible,F.wireframe=y.wireframe,T===rs?F.side=y.shadowSide!==null?y.shadowSide:y.side:F.side=y.shadowSide!==null?y.shadowSide:h[y.side],F.alphaMap=y.alphaMap,F.alphaTest=y.alphaTest,F.clipShadows=y.clipShadows,F.clippingPlanes=y.clippingPlanes,F.clipIntersection=y.clipIntersection,F.displacementMap=y.displacementMap,F.displacementScale=y.displacementScale,F.displacementBias=y.displacementBias,F.wireframeLinewidth=y.wireframeLinewidth,F.linewidth=y.linewidth,M.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(M.matrixWorld),F.nearDistance=b,F.farDistance=x),F}function w(S,y,M,b,x){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===rs)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);const I=e.update(S),Y=S.material;if(Array.isArray(Y)){const j=I.groups;for(let O=0,U=j.length;O<U;O++){const L=j[O],R=Y[L.materialIndex];if(R&&R.visible){const D=v(S,R,b,M.near,M.far,x);s.renderBufferDirect(M,null,I,D,S,L)}}}else if(Y.visible){const j=v(S,Y,b,M.near,M.far,x);s.renderBufferDirect(M,null,I,j,S,null)}}const F=S.children;for(let I=0,Y=F.length;I<Y;I++)w(F[I],y,M,b,x)}}function a0(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new lt;let se=null;const me=new lt(0,0,0,0);return{setMask:function(fe){se!==fe&&!P&&(s.colorMask(fe,fe,fe,fe),se=fe)},setLocked:function(fe){P=fe},setClear:function(fe,ve,te,xe,Ne){Ne===!0&&(fe*=xe,ve*=xe,te*=xe),ae.set(fe,ve,te,xe),me.equals(ae)===!1&&(s.clearColor(fe,ve,te,xe),me.copy(ae))},reset:function(){P=!1,se=null,me.set(-1,0,0,0)}}}function r(){let P=!1,ae=null,se=null,me=null;return{setTest:function(fe){fe?ue(2929):X(2929)},setMask:function(fe){ae!==fe&&!P&&(s.depthMask(fe),ae=fe)},setFunc:function(fe){if(se!==fe){if(fe)switch(fe){case Uh:s.depthFunc(512);break;case kh:s.depthFunc(519);break;case Bh:s.depthFunc(513);break;case Ao:s.depthFunc(515);break;case Vh:s.depthFunc(514);break;case Gh:s.depthFunc(518);break;case Wh:s.depthFunc(516);break;case Hh:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);se=fe}},setLocked:function(fe){P=fe},setClear:function(fe){me!==fe&&(s.clearDepth(fe),me=fe)},reset:function(){P=!1,ae=null,se=null,me=null}}}function o(){let P=!1,ae=null,se=null,me=null,fe=null,ve=null,te=null,xe=null,Ne=null;return{setTest:function(ze){P||(ze?ue(2960):X(2960))},setMask:function(ze){ae!==ze&&!P&&(s.stencilMask(ze),ae=ze)},setFunc:function(ze,wt,Cn){(se!==ze||me!==wt||fe!==Cn)&&(s.stencilFunc(ze,wt,Cn),se=ze,me=wt,fe=Cn)},setOp:function(ze,wt,Cn){(ve!==ze||te!==wt||xe!==Cn)&&(s.stencilOp(ze,wt,Cn),ve=ze,te=wt,xe=Cn)},setLocked:function(ze){P=ze},setClear:function(ze){Ne!==ze&&(s.clearStencil(ze),Ne=ze)},reset:function(){P=!1,ae=null,se=null,me=null,fe=null,ve=null,te=null,xe=null,Ne=null}}}const a=new i,l=new r,c=new o;let u={},h={},f=new WeakMap,m=[],_=null,d=!1,p=null,g=null,v=null,w=null,S=null,y=null,M=null,b=!1,x=null,T=null,F=null,I=null,Y=null;const j=s.getParameter(35661);let O=!1,U=0;const L=s.getParameter(7938);L.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(L)[1]),O=U>=1):L.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),O=U>=2);let R=null,D={};const N=s.getParameter(3088),V=s.getParameter(2978),Q=new lt().fromArray(N),Z=new lt().fromArray(V);function ee(P,ae,se){const me=new Uint8Array(4),fe=s.createTexture();s.bindTexture(P,fe),s.texParameteri(P,10241,9728),s.texParameteri(P,10240,9728);for(let ve=0;ve<se;ve++)s.texImage2D(ae+ve,0,6408,1,1,0,6408,5121,me);return fe}const ne={};ne[3553]=ee(3553,3553,1),ne[34067]=ee(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(2929),l.setFunc(Ao),pt(!1),Ct(Ml),ue(2884),Le(xi);function ue(P){u[P]!==!0&&(s.enable(P),u[P]=!0)}function X(P){u[P]!==!1&&(s.disable(P),u[P]=!1)}function je(P,ae){return h[P]!==ae?(s.bindFramebuffer(P,ae),h[P]=ae,n&&(P===36009&&(h[36160]=ae),P===36160&&(h[36009]=ae)),!0):!1}function J(P,ae){let se=m,me=!1;if(P)if(se=f.get(ae),se===void 0&&(se=[],f.set(ae,se)),P.isWebGLMultipleRenderTargets){const fe=P.texture;if(se.length!==fe.length||se[0]!==36064){for(let ve=0,te=fe.length;ve<te;ve++)se[ve]=36064+ve;se.length=fe.length,me=!0}}else se[0]!==36064&&(se[0]=36064,me=!0);else se[0]!==1029&&(se[0]=1029,me=!0);me&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function H(P){return _!==P?(s.useProgram(P),_=P,!0):!1}const ie={[yr]:32774,[Ah]:32778,[Ch]:32779};if(n)ie[Al]=32775,ie[Cl]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(ie[Al]=P.MIN_EXT,ie[Cl]=P.MAX_EXT)}const ke={[Lh]:0,[Rh]:1,[Dh]:768,[Pu]:770,[zh]:776,[Oh]:774,[Ih]:772,[Ph]:769,[Iu]:771,[Nh]:775,[Fh]:773};function Le(P,ae,se,me,fe,ve,te,xe){if(P===xi){d===!0&&(X(3042),d=!1);return}if(d===!1&&(ue(3042),d=!0),P!==Eh){if(P!==p||xe!==b){if((g!==yr||S!==yr)&&(s.blendEquation(32774),g=yr,S=yr),xe)switch(P){case Er:s.blendFuncSeparate(1,771,1,771);break;case wl:s.blendFunc(1,1);break;case Tl:s.blendFuncSeparate(0,769,0,1);break;case El:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Er:s.blendFuncSeparate(770,771,1,771);break;case wl:s.blendFunc(770,1);break;case Tl:s.blendFuncSeparate(0,769,0,1);break;case El:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,w=null,y=null,M=null,p=P,b=xe}return}fe=fe||ae,ve=ve||se,te=te||me,(ae!==g||fe!==S)&&(s.blendEquationSeparate(ie[ae],ie[fe]),g=ae,S=fe),(se!==v||me!==w||ve!==y||te!==M)&&(s.blendFuncSeparate(ke[se],ke[me],ke[ve],ke[te]),v=se,w=me,y=ve,M=te),p=P,b=null}function ge(P,ae){P.side===Pr?X(2884):ue(2884);let se=P.side===Sn;ae&&(se=!se),pt(se),P.blending===Er&&P.transparent===!1?Le(xi):Le(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const me=P.stencilWrite;c.setTest(me),me&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),An(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ue(32926):X(32926)}function pt(P){x!==P&&(P?s.frontFace(2304):s.frontFace(2305),x=P)}function Ct(P){P!==bh?(ue(2884),P!==T&&(P===Ml?s.cullFace(1029):P===Mh?s.cullFace(1028):s.cullFace(1032))):X(2884),T=P}function kt(P){P!==F&&(O&&s.lineWidth(P),F=P)}function An(P,ae,se){P?(ue(32823),(I!==ae||Y!==se)&&(s.polygonOffset(ae,se),I=ae,Y=se)):X(32823)}function ut(P){P?ue(3089):X(3089)}function Ve(P){P===void 0&&(P=33984+j-1),R!==P&&(s.activeTexture(P),R=P)}function Wn(P,ae){R===null&&Ve();let se=D[R];se===void 0&&(se={type:void 0,texture:void 0},D[R]=se),(se.type!==P||se.texture!==ae)&&(s.bindTexture(P,ae||ne[P]),se.type=P,se.texture=ae)}function Hn(){const P=D[R];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function C(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(P){Q.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function he(P){Z.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function ce(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},R=null,D={},h={},f=new WeakMap,m=[],_=null,d=!1,p=null,g=null,v=null,w=null,S=null,y=null,M=null,b=!1,x=null,T=null,F=null,I=null,Y=null,Q.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ue,disable:X,bindFramebuffer:je,drawBuffers:J,useProgram:H,setBlending:Le,setMaterial:ge,setFlipSided:pt,setCullFace:Ct,setLineWidth:kt,setPolygonOffset:An,setScissorTest:ut,activeTexture:Ve,bindTexture:Wn,unbindTexture:Hn,compressedTexImage2D:C,texImage2D:ye,texImage3D:W,texStorage2D:re,texStorage3D:le,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:$,scissor:pe,viewport:he,reset:ce}}function o0(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return g?new OffscreenCanvas(C,E):ms("canvas")}function w(C,E,q,$){let re=1;if((C.width>$||C.height>$)&&(re=$/Math.max(C.width,C.height)),re<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=E?Io:Math.floor,ye=le(re*C.width),W=le(re*C.height);d===void 0&&(d=v(ye,W));const pe=q?v(ye,W):d;return pe.width=ye,pe.height=W,pe.getContext("2d").drawImage(C,0,0,ye,W),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+W+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function S(C){return tc(C.width)&&tc(C.height)}function y(C){return a?!1:C.wrapS!==vn||C.wrapT!==vn||C.minFilter!==Dt&&C.minFilter!==en}function M(C,E){return C.generateMipmaps&&E&&C.minFilter!==Dt&&C.minFilter!==en}function b(C){s.generateMipmap(C)}function x(C,E,q,$,re=!1){if(a===!1)return E;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=E;return E===6403&&(q===5126&&(le=33326),q===5131&&(le=33325),q===5121&&(le=33321)),E===33319&&(q===5126&&(le=33328),q===5131&&(le=33327),q===5121&&(le=33323)),E===6408&&(q===5126&&(le=34836),q===5131&&(le=34842),q===5121&&(le=$===Ze&&re===!1?35907:32856),q===32819&&(le=32854),q===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function T(C,E,q){return M(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Dt&&C.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function F(C){return C===Dt||C===Ll||C===Rl?9728:9729}function I(C){const E=C.target;E.removeEventListener("dispose",I),j(E),E.isVideoTexture&&_.delete(E)}function Y(C){const E=C.target;E.removeEventListener("dispose",Y),U(E)}function j(C){const E=n.get(C);if(E.__webglInit===void 0)return;const q=C.source,$=p.get(q);if($){const re=$[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&O(C),Object.keys($).length===0&&p.delete(q)}n.remove(C)}function O(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const q=C.source,$=p.get(q);delete $[E.__cacheKey],o.memory.textures--}function U(C){const E=C.texture,q=n.get(C),$=n.get(E);if($.__webglTexture!==void 0&&(s.deleteTexture($.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)s.deleteFramebuffer(q.__webglFramebuffer[re]),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[re]);else{if(s.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let re=0;re<q.__webglColorRenderbuffer.length;re++)q.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[re]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,le=E.length;re<le;re++){const ye=n.get(E[re]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(E[re])}n.remove(E),n.remove(C)}let L=0;function R(){L=0}function D(){const C=L;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),L+=1,C}function N(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.encoding),E.join()}function V(C,E){const q=n.get(C);if(C.isVideoTexture&&Wn(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,C,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,q.__webglTexture)}function Q(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){J(q,C,E);return}t.activeTexture(33984+E),t.bindTexture(35866,q.__webglTexture)}function Z(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){J(q,C,E);return}t.activeTexture(33984+E),t.bindTexture(32879,q.__webglTexture)}function ee(C,E){const q=n.get(C);if(C.version>0&&q.__version!==C.version){H(q,C,E);return}t.activeTexture(33984+E),t.bindTexture(34067,q.__webglTexture)}const ne={[Ro]:10497,[vn]:33071,[Do]:33648},ue={[Dt]:9728,[Ll]:9984,[Rl]:9986,[en]:9729,[Qh]:9985,[Aa]:9987};function X(C,E,q){if(q?(s.texParameteri(C,10242,ne[E.wrapS]),s.texParameteri(C,10243,ne[E.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,ne[E.wrapR]),s.texParameteri(C,10240,ue[E.magFilter]),s.texParameteri(C,10241,ue[E.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(E.wrapS!==vn||E.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,F(E.magFilter)),s.texParameteri(C,10241,F(E.minFilter)),E.minFilter!==Dt&&E.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(E.type===ki&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(C,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function je(C,E){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",I));const $=E.source;let re=p.get($);re===void 0&&(re={},p.set($,re));const le=N(E);if(le!==C.__cacheKey){re[le]===void 0&&(re[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),re[le].usedTimes++;const ye=re[C.__cacheKey];ye!==void 0&&(re[C.__cacheKey].usedTimes--,ye.usedTimes===0&&O(E)),C.__cacheKey=le,C.__webglTexture=re[le].texture}return q}function J(C,E,q){let $=3553;E.isDataArrayTexture&&($=35866),E.isData3DTexture&&($=32879);const re=je(C,E),le=E.source;if(t.activeTexture(33984+q),t.bindTexture($,C.__webglTexture),le.version!==le.__currentVersion||re===!0){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const ye=y(E)&&S(E.image)===!1;let W=w(E.image,ye,!1,u);W=Hn(E,W);const pe=S(W)||a,he=r.convert(E.format,E.encoding);let ce=r.convert(E.type),P=x(E.internalFormat,he,ce,E.encoding,E.isVideoTexture);X($,E,pe);let ae;const se=E.mipmaps,me=a&&E.isVideoTexture!==!0,fe=le.__currentVersion===void 0||re===!0,ve=T(E,W,pe);if(E.isDepthTexture)P=6402,a?E.type===ki?P=36012:E.type===Ui?P=33190:E.type===Ar?P=35056:P=33189:E.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Wi&&P===6402&&E.type!==Nu&&E.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ui,ce=r.convert(E.type)),E.format===Or&&P===6402&&(P=34041,E.type!==Ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ar,ce=r.convert(E.type))),fe&&(me?t.texStorage2D(3553,1,P,W.width,W.height):t.texImage2D(3553,0,P,W.width,W.height,0,he,ce,null));else if(E.isDataTexture)if(se.length>0&&pe){me&&fe&&t.texStorage2D(3553,ve,P,se[0].width,se[0].height);for(let te=0,xe=se.length;te<xe;te++)ae=se[te],me?t.texSubImage2D(3553,te,0,0,ae.width,ae.height,he,ce,ae.data):t.texImage2D(3553,te,P,ae.width,ae.height,0,he,ce,ae.data);E.generateMipmaps=!1}else me?(fe&&t.texStorage2D(3553,ve,P,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,he,ce,W.data)):t.texImage2D(3553,0,P,W.width,W.height,0,he,ce,W.data);else if(E.isCompressedTexture){me&&fe&&t.texStorage2D(3553,ve,P,se[0].width,se[0].height);for(let te=0,xe=se.length;te<xe;te++)ae=se[te],E.format!==Fn?he!==null?me?t.compressedTexSubImage2D(3553,te,0,0,ae.width,ae.height,he,ae.data):t.compressedTexImage2D(3553,te,P,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(3553,te,0,0,ae.width,ae.height,he,ce,ae.data):t.texImage2D(3553,te,P,ae.width,ae.height,0,he,ce,ae.data)}else if(E.isDataArrayTexture)me?(fe&&t.texStorage3D(35866,ve,P,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,he,ce,W.data)):t.texImage3D(35866,0,P,W.width,W.height,W.depth,0,he,ce,W.data);else if(E.isData3DTexture)me?(fe&&t.texStorage3D(32879,ve,P,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,he,ce,W.data)):t.texImage3D(32879,0,P,W.width,W.height,W.depth,0,he,ce,W.data);else if(E.isFramebufferTexture){if(fe)if(me)t.texStorage2D(3553,ve,P,W.width,W.height);else{let te=W.width,xe=W.height;for(let Ne=0;Ne<ve;Ne++)t.texImage2D(3553,Ne,P,te,xe,0,he,ce,null),te>>=1,xe>>=1}}else if(se.length>0&&pe){me&&fe&&t.texStorage2D(3553,ve,P,se[0].width,se[0].height);for(let te=0,xe=se.length;te<xe;te++)ae=se[te],me?t.texSubImage2D(3553,te,0,0,he,ce,ae):t.texImage2D(3553,te,P,he,ce,ae);E.generateMipmaps=!1}else me?(fe&&t.texStorage2D(3553,ve,P,W.width,W.height),t.texSubImage2D(3553,0,0,0,he,ce,W)):t.texImage2D(3553,0,P,he,ce,W);M(E,pe)&&b($),le.__currentVersion=le.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function H(C,E,q){if(E.image.length!==6)return;const $=je(C,E),re=E.source;if(t.activeTexture(33984+q),t.bindTexture(34067,C.__webglTexture),re.version!==re.__currentVersion||$===!0){s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,W=[];for(let te=0;te<6;te++)!le&&!ye?W[te]=w(E.image[te],!1,!0,c):W[te]=ye?E.image[te].image:E.image[te],W[te]=Hn(E,W[te]);const pe=W[0],he=S(pe)||a,ce=r.convert(E.format,E.encoding),P=r.convert(E.type),ae=x(E.internalFormat,ce,P,E.encoding),se=a&&E.isVideoTexture!==!0,me=re.__currentVersion===void 0||$===!0;let fe=T(E,pe,he);X(34067,E,he);let ve;if(le){se&&me&&t.texStorage2D(34067,fe,ae,pe.width,pe.height);for(let te=0;te<6;te++){ve=W[te].mipmaps;for(let xe=0;xe<ve.length;xe++){const Ne=ve[xe];E.format!==Fn?ce!==null?se?t.compressedTexSubImage2D(34069+te,xe,0,0,Ne.width,Ne.height,ce,Ne.data):t.compressedTexImage2D(34069+te,xe,ae,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?t.texSubImage2D(34069+te,xe,0,0,Ne.width,Ne.height,ce,P,Ne.data):t.texImage2D(34069+te,xe,ae,Ne.width,Ne.height,0,ce,P,Ne.data)}}}else{ve=E.mipmaps,se&&me&&(ve.length>0&&fe++,t.texStorage2D(34067,fe,ae,W[0].width,W[0].height));for(let te=0;te<6;te++)if(ye){se?t.texSubImage2D(34069+te,0,0,0,W[te].width,W[te].height,ce,P,W[te].data):t.texImage2D(34069+te,0,ae,W[te].width,W[te].height,0,ce,P,W[te].data);for(let xe=0;xe<ve.length;xe++){const ze=ve[xe].image[te].image;se?t.texSubImage2D(34069+te,xe+1,0,0,ze.width,ze.height,ce,P,ze.data):t.texImage2D(34069+te,xe+1,ae,ze.width,ze.height,0,ce,P,ze.data)}}else{se?t.texSubImage2D(34069+te,0,0,0,ce,P,W[te]):t.texImage2D(34069+te,0,ae,ce,P,W[te]);for(let xe=0;xe<ve.length;xe++){const Ne=ve[xe];se?t.texSubImage2D(34069+te,xe+1,0,0,ce,P,Ne.image[te]):t.texImage2D(34069+te,xe+1,ae,ce,P,Ne.image[te])}}}M(E,he)&&b(34067),re.__currentVersion=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ie(C,E,q,$,re){const le=r.convert(q.format,q.encoding),ye=r.convert(q.type),W=x(q.internalFormat,le,ye,q.encoding);n.get(E).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,W,E.width,E.height,E.depth,0,le,ye,null):t.texImage2D(re,0,W,E.width,E.height,0,le,ye,null)),t.bindFramebuffer(36160,C),Ve(E)?f.framebufferTexture2DMultisampleEXT(36160,$,re,n.get(q).__webglTexture,0,ut(E)):s.framebufferTexture2D(36160,$,re,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(C,E,q){if(s.bindRenderbuffer(36161,C),E.depthBuffer&&!E.stencilBuffer){let $=33189;if(q||Ve(E)){const re=E.depthTexture;re&&re.isDepthTexture&&(re.type===ki?$=36012:re.type===Ui&&($=33190));const le=ut(E);Ve(E)?f.renderbufferStorageMultisampleEXT(36161,le,$,E.width,E.height):s.renderbufferStorageMultisample(36161,le,$,E.width,E.height)}else s.renderbufferStorage(36161,$,E.width,E.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(E.depthBuffer&&E.stencilBuffer){const $=ut(E);q&&Ve(E)===!1?s.renderbufferStorageMultisample(36161,$,35056,E.width,E.height):Ve(E)?f.renderbufferStorageMultisampleEXT(36161,$,35056,E.width,E.height):s.renderbufferStorage(36161,34041,E.width,E.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const $=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let re=0;re<$.length;re++){const le=$[re],ye=r.convert(le.format,le.encoding),W=r.convert(le.type),pe=x(le.internalFormat,ye,W,le.encoding),he=ut(E);q&&Ve(E)===!1?s.renderbufferStorageMultisample(36161,he,pe,E.width,E.height):Ve(E)?f.renderbufferStorageMultisampleEXT(36161,he,pe,E.width,E.height):s.renderbufferStorage(36161,pe,E.width,E.height)}}s.bindRenderbuffer(36161,null)}function Le(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),V(E.depthTexture,0);const $=n.get(E.depthTexture).__webglTexture,re=ut(E);if(E.depthTexture.format===Wi)Ve(E)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,re):s.framebufferTexture2D(36160,36096,3553,$,0);else if(E.depthTexture.format===Or)Ve(E)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,re):s.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function ge(C){const E=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Le(E.__webglFramebuffer,C)}else if(q){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]=s.createRenderbuffer(),ke(E.__webglDepthbuffer[$],C,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),ke(E.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function pt(C,E,q){const $=n.get(C);E!==void 0&&ie($.__webglFramebuffer,C,C.texture,36064,3553),q!==void 0&&ge(C)}function Ct(C){const E=C.texture,q=n.get(C),$=n.get(E);C.addEventListener("dispose",Y),C.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=E.version,o.memory.textures++);const re=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,ye=S(C)||a;if(re){q.__webglFramebuffer=[];for(let W=0;W<6;W++)q.__webglFramebuffer[W]=s.createFramebuffer()}else{if(q.__webglFramebuffer=s.createFramebuffer(),le)if(i.drawBuffers){const W=C.texture;for(let pe=0,he=W.length;pe<he;pe++){const ce=n.get(W[pe]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ve(C)===!1){const W=le?E:[E];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let pe=0;pe<W.length;pe++){const he=W[pe];q.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(36161,q.__webglColorRenderbuffer[pe]);const ce=r.convert(he.format,he.encoding),P=r.convert(he.type),ae=x(he.internalFormat,ce,P,he.encoding),se=ut(C);s.renderbufferStorageMultisample(36161,se,ae,C.width,C.height),s.framebufferRenderbuffer(36160,36064+pe,36161,q.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,$.__webglTexture),X(34067,E,ye);for(let W=0;W<6;W++)ie(q.__webglFramebuffer[W],C,E,36064,34069+W);M(E,ye)&&b(34067),t.unbindTexture()}else if(le){const W=C.texture;for(let pe=0,he=W.length;pe<he;pe++){const ce=W[pe],P=n.get(ce);t.bindTexture(3553,P.__webglTexture),X(3553,ce,ye),ie(q.__webglFramebuffer,C,ce,36064+pe,3553),M(ce,ye)&&b(3553)}t.unbindTexture()}else{let W=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?W=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(W,$.__webglTexture),X(W,E,ye),ie(q.__webglFramebuffer,C,E,36064,W),M(E,ye)&&b(W),t.unbindTexture()}C.depthBuffer&&ge(C)}function kt(C){const E=S(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let $=0,re=q.length;$<re;$++){const le=q[$];if(M(le,E)){const ye=C.isWebGLCubeRenderTarget?34067:3553,W=n.get(le).__webglTexture;t.bindTexture(ye,W),b(ye),t.unbindTexture()}}}function An(C){if(a&&C.samples>0&&Ve(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,$=C.height;let re=16384;const le=[],ye=C.stencilBuffer?33306:36096,W=n.get(C),pe=C.isWebGLMultipleRenderTargets===!0;if(pe)for(let he=0;he<E.length;he++)t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+he,36161,null),t.bindFramebuffer(36160,W.__webglFramebuffer),s.framebufferTexture2D(36009,36064+he,3553,null,0);t.bindFramebuffer(36008,W.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,W.__webglFramebuffer);for(let he=0;he<E.length;he++){le.push(36064+he),C.depthBuffer&&le.push(ye);const ce=W.__ignoreDepthValues!==void 0?W.__ignoreDepthValues:!1;if(ce===!1&&(C.depthBuffer&&(re|=256),C.stencilBuffer&&(re|=1024)),pe&&s.framebufferRenderbuffer(36008,36064,36161,W.__webglColorRenderbuffer[he]),ce===!0&&(s.invalidateFramebuffer(36008,[ye]),s.invalidateFramebuffer(36009,[ye])),pe){const P=n.get(E[he]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,P,0)}s.blitFramebuffer(0,0,q,$,0,0,q,$,re,9728),m&&s.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),pe)for(let he=0;he<E.length;he++){t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+he,36161,W.__webglColorRenderbuffer[he]);const ce=n.get(E[he]).__webglTexture;t.bindFramebuffer(36160,W.__webglFramebuffer),s.framebufferTexture2D(36009,36064+he,3553,ce,0)}t.bindFramebuffer(36009,W.__webglMultisampledFramebuffer)}}function ut(C){return Math.min(h,C.samples)}function Ve(C){const E=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wn(C){const E=o.render.frame;_.get(C)!==E&&(_.set(C,E),C.update())}function Hn(C,E){const q=C.encoding,$=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Po||q!==Zi&&(q===Ze?a===!1?e.has("EXT_sRGB")===!0&&$===Fn?(C.format=Po,C.minFilter=en,C.generateMipmaps=!1):E=ku.sRGBToLinear(E):($!==Fn||re!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),E}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=V,this.setTexture2DArray=Q,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=pt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Ve}function l0(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===Ki)return 5121;if(r===nd)return 32819;if(r===id)return 32820;if(r===$h)return 5120;if(r===ed)return 5122;if(r===Nu)return 5123;if(r===td)return 5124;if(r===Ui)return 5125;if(r===ki)return 5126;if(r===ps)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===rd)return 6406;if(r===Fn)return 6408;if(r===ad)return 6409;if(r===od)return 6410;if(r===Wi)return 6402;if(r===Or)return 34041;if(r===ld)return 6403;if(r===sd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Po)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===cd)return 36244;if(r===ud)return 33319;if(r===fd)return 33320;if(r===hd)return 36249;if(r===za||r===Ua||r===ka||r===Ba)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ua)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ua)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dl||r===Pl||r===Il||r===Fl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Dl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Il)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ol||r===Nl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ol)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Nl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zl||r===Ul||r===kl||r===Bl||r===Vl||r===Gl||r===Wl||r===Hl||r===Xl||r===ql||r===Yl||r===jl||r===Kl||r===Zl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ul)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===kl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ql)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Kl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zl)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Jl)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Ar?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class c0 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class na extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const v=new na;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[d.jointName]=v,c.add(v)}const g=c.joints[d.jointName];p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class f0 extends cn{constructor(e,t,n,i,r,o,a,l,c,u){if(u=u!==void 0?u:Wi,u!==Wi&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wi&&(n=Ui),n===void 0&&u===Or&&(n=Ar),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1}}class h0 extends jr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const _=t.getContextAttributes();let d=null,p=null;const g=[],v=[],w=new _n;w.layers.enable(1),w.viewport=new lt;const S=new _n;S.layers.enable(2),S.viewport=new lt;const y=[w,S],M=new c0;M.layers.enable(1),M.layers.enable(2);let b=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let V=g[N];return V===void 0&&(V=new go,g[N]=V),V.getTargetRaySpace()},this.getControllerGrip=function(N){let V=g[N];return V===void 0&&(V=new go,g[N]=V),V.getGripSpace()},this.getHand=function(N){let V=g[N];return V===void 0&&(V=new go,g[N]=V),V.getHandSpace()};function T(N){const V=v.indexOf(N.inputSource);if(V===-1)return;const Q=g[V];Q!==void 0&&Q.dispatchEvent({type:N.type,data:N.inputSource})}function F(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",I);for(let N=0;N<g.length;N++){const V=v[N];V!==null&&(v[N]=null,g[N].disconnect(V))}b=null,x=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,D.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",F),i.addEventListener("inputsourceschange",I),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),p=new Ji(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:Ki,encoding:e.outputEncoding})}else{let V=null,Q=null,Z=null;_.depth&&(Z=_.stencil?35056:33190,V=_.stencil?Or:Wi,Q=_.stencil?Ar:Ui);const ee={colorFormat:32856,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ee),i.updateRenderState({layers:[h]}),p=new Ji(h.textureWidth,h.textureHeight,{format:Fn,type:Ki,depthTexture:new f0(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ne=e.properties.get(p);ne.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(a),D.setContext(i),D.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(N){for(let V=0;V<N.removed.length;V++){const Q=N.removed[V],Z=v.indexOf(Q);Z>=0&&(v[Z]=null,g[Z].dispatchEvent({type:"disconnected",data:Q}))}for(let V=0;V<N.added.length;V++){const Q=N.added[V];let Z=v.indexOf(Q);if(Z===-1){for(let ne=0;ne<g.length;ne++)if(ne>=v.length){v.push(Q),Z=ne;break}else if(v[ne]===null){v[ne]=Q,Z=ne;break}if(Z===-1)break}const ee=g[Z];ee&&ee.dispatchEvent({type:"connected",data:Q})}}const Y=new k,j=new k;function O(N,V,Q){Y.setFromMatrixPosition(V.matrixWorld),j.setFromMatrixPosition(Q.matrixWorld);const Z=Y.distanceTo(j),ee=V.projectionMatrix.elements,ne=Q.projectionMatrix.elements,ue=ee[14]/(ee[10]-1),X=ee[14]/(ee[10]+1),je=(ee[9]+1)/ee[5],J=(ee[9]-1)/ee[5],H=(ee[8]-1)/ee[0],ie=(ne[8]+1)/ne[0],ke=ue*H,Le=ue*ie,ge=Z/(-H+ie),pt=ge*-H;V.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(pt),N.translateZ(ge),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Ct=ue+ge,kt=X+ge,An=ke-pt,ut=Le+(Z-pt),Ve=je*X/kt*Ct,Wn=J*X/kt*Ct;N.projectionMatrix.makePerspective(An,ut,Ve,Wn,Ct,kt)}function U(N,V){V===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(V.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;M.near=S.near=w.near=N.near,M.far=S.far=w.far=N.far,(b!==M.near||x!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,x=M.far);const V=N.parent,Q=M.cameras;U(M,V);for(let ee=0;ee<Q.length;ee++)U(Q[ee],V);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),N.position.copy(M.position),N.quaternion.copy(M.quaternion),N.scale.copy(M.scale),N.matrix.copy(M.matrix),N.matrixWorld.copy(M.matrixWorld);const Z=N.children;for(let ee=0,ne=Z.length;ee<ne;ee++)Z[ee].updateMatrixWorld(!0);Q.length===2?O(M,w,S):M.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let L=null;function R(N,V){if(c=V.getViewerPose(l||o),m=V,c!==null){const Q=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Z=!1;Q.length!==M.cameras.length&&(M.cameras.length=0,Z=!0);for(let ee=0;ee<Q.length;ee++){const ne=Q[ee];let ue=null;if(f!==null)ue=f.getViewport(ne);else{const je=u.getViewSubImage(h,ne);ue=je.viewport,ee===0&&(e.setRenderTargetTextures(p,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(p))}let X=y[ee];X===void 0&&(X=new _n,X.layers.enable(ee),X.viewport=new lt,y[ee]=X),X.matrix.fromArray(ne.transform.matrix),X.projectionMatrix.fromArray(ne.projectionMatrix),X.viewport.set(ue.x,ue.y,ue.width,ue.height),ee===0&&M.matrix.copy(X.matrix),Z===!0&&M.cameras.push(X)}}for(let Q=0;Q<g.length;Q++){const Z=v[Q],ee=g[Q];Z!==null&&ee!==void 0&&ee.update(Z,V,l||o)}L&&L(N,V),m=null}const D=new Ku;D.setAnimationLoop(R),this.setAnimationLoop=function(N){L=N},this.dispose=function(){}}}function d0(s,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,g,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,w)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),_(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?a(d,p,g,v):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Sn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Sn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(d.envMap.value=g,d.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const S=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let v;p.map?v=p.map:p.specularMap?v=p.specularMap:p.displacementMap?v=p.displacementMap:p.normalMap?v=p.normalMap:p.bumpMap?v=p.bumpMap:p.roughnessMap?v=p.roughnessMap:p.metalnessMap?v=p.metalnessMap:p.alphaMap?v=p.alphaMap:p.emissiveMap?v=p.emissiveMap:p.clearcoatMap?v=p.clearcoatMap:p.clearcoatNormalMap?v=p.clearcoatNormalMap:p.clearcoatRoughnessMap?v=p.clearcoatRoughnessMap:p.iridescenceMap?v=p.iridescenceMap:p.iridescenceThicknessMap?v=p.iridescenceThicknessMap:p.specularIntensityMap?v=p.specularIntensityMap:p.specularColorMap?v=p.specularColorMap:p.transmissionMap?v=p.transmissionMap:p.thicknessMap?v=p.thicknessMap:p.sheenColorMap?v=p.sheenColorMap:p.sheenRoughnessMap&&(v=p.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uv2Transform.value.copy(w.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,g,v){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*g,d.scale.value=v*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),d.uvTransform.value.copy(g.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,g){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Sn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=g.texture,d.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function p0(){const s=ms("canvas");return s.style.display="block",s}function nf(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:p0(),t=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let h=null,f=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zi,this.physicallyCorrectLights=!1,this.toneMapping=ii,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,g=0,v=0,w=null,S=-1,y=null;const M=new lt,b=new lt;let x=null,T=e.width,F=e.height,I=1,Y=null,j=null;const O=new lt(0,0,T,F),U=new lt(0,0,T,F);let L=!1;const R=new ju;let D=!1,N=!1,V=null;const Q=new ht,Z=new Be,ee=new k,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return w===null?I:1}let X=t;function je(A,z){for(let G=0;G<A.length;G++){const B=A[G],K=e.getContext(B,z);if(K!==null)return K}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",P,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",se,!1),X===null){const z=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&z.shift(),X=je(z,A),X===null)throw je(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,H,ie,ke,Le,ge,pt,Ct,kt,An,ut,Ve,Wn,Hn,C,E,q,$,re,le,ye,W,pe;function he(){J=new Tg(X),H=new xg(X,J,s),J.init(H),W=new l0(X,J,H),ie=new a0(X,J,H),ke=new Cg,Le=new q_,ge=new o0(X,J,ie,Le,H,W,ke),pt=new yg(d),Ct=new wg(d),kt=new Bd(X,H),pe=new _g(X,J,kt,H),An=new Eg(X,kt,ke,pe),ut=new Pg(X,An,kt,ke),re=new Dg(X,H,ge),E=new Sg(Le),Ve=new X_(d,pt,Ct,J,H,pe,E),Wn=new d0(d,Le),Hn=new j_,C=new e0(J,H),$=new gg(d,pt,ie,ut,u,o),q=new s0(d,ut,H),le=new vg(X,J,ke,H),ye=new Ag(X,J,ke,H),ke.programs=Ve.programs,d.capabilities=H,d.extensions=J,d.properties=Le,d.renderLists=Hn,d.shadowMap=q,d.state=ie,d.info=ke}he();const ce=new h0(d,X);this.xr=ce,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(A){A!==void 0&&(I=A,this.setSize(T,F,!1))},this.getSize=function(A){return A.set(T,F)},this.setSize=function(A,z,G){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=A,F=z,e.width=Math.floor(A*I),e.height=Math.floor(z*I),G!==!1&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(T*I,F*I).floor()},this.setDrawingBufferSize=function(A,z,G){T=A,F=z,I=G,e.width=Math.floor(A*G),e.height=Math.floor(z*G),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(O)},this.setViewport=function(A,z,G,B){A.isVector4?O.set(A.x,A.y,A.z,A.w):O.set(A,z,G,B),ie.viewport(M.copy(O).multiplyScalar(I).floor())},this.getScissor=function(A){return A.copy(U)},this.setScissor=function(A,z,G,B){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,z,G,B),ie.scissor(b.copy(U).multiplyScalar(I).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(A){ie.setScissorTest(L=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(A=!0,z=!0,G=!0){let B=0;A&&(B|=16384),z&&(B|=256),G&&(B|=1024),X.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",P,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",se,!1),Hn.dispose(),C.dispose(),Le.dispose(),pt.dispose(),Ct.dispose(),ut.dispose(),pe.dispose(),Ve.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ne),ce.removeEventListener("sessionend",ze),V&&(V.dispose(),V=null),wt.stop()};function P(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const A=ke.autoReset,z=q.enabled,G=q.autoUpdate,B=q.needsUpdate,K=q.type;he(),ke.autoReset=A,q.enabled=z,q.autoUpdate=G,q.needsUpdate=B,q.type=K}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){const z=A.target;z.removeEventListener("dispose",me),fe(z)}function fe(A){ve(A),Le.remove(A)}function ve(A){const z=Le.get(A).programs;z!==void 0&&(z.forEach(function(G){Ve.releaseProgram(G)}),A.isShaderMaterial&&Ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,G,B,K,_e){z===null&&(z=ne);const Me=K.isMesh&&K.matrixWorld.determinant()<0,Ae=ch(A,z,G,B,K);ie.setMaterial(B,Me);let Ee=G.index;const Ue=G.attributes.position;if(Ee===null){if(Ue===void 0||Ue.count===0)return}else if(Ee.count===0)return;let Ie=1;B.wireframe===!0&&(Ee=An.getWireframeAttribute(G),Ie=2),pe.setup(K,B,Ae,G,Ee);let Fe,Ke=le;Ee!==null&&(Fe=kt.get(Ee),Ke=ye,Ke.setIndex(Fe));const Ci=Ee!==null?Ee.count:Ue.count,ir=G.drawRange.start*Ie,rr=G.drawRange.count*Ie,Ln=_e!==null?_e.start*Ie:0,Oe=_e!==null?_e.count*Ie:1/0,sr=Math.max(ir,Ln),et=Math.min(Ci,ir+rr,Ln+Oe)-1,Rn=Math.max(0,et-sr+1);if(Rn!==0){if(K.isMesh)B.wireframe===!0?(ie.setLineWidth(B.wireframeLinewidth*ue()),Ke.setMode(1)):Ke.setMode(4);else if(K.isLine){let ai=B.linewidth;ai===void 0&&(ai=1),ie.setLineWidth(ai*ue()),K.isLineSegments?Ke.setMode(1):K.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else K.isPoints?Ke.setMode(0):K.isSprite&&Ke.setMode(4);if(K.isInstancedMesh)Ke.renderInstances(sr,Rn,K.count);else if(G.isInstancedBufferGeometry){const ai=Math.min(G.instanceCount,G._maxInstanceCount);Ke.renderInstances(sr,Rn,ai)}else Ke.render(sr,Rn)}},this.compile=function(A,z){f=C.get(A),f.init(),_.push(f),A.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights(d.physicallyCorrectLights),A.traverse(function(G){const B=G.material;if(B)if(Array.isArray(B))for(let K=0;K<B.length;K++){const _e=B[K];Fa(_e,A,G)}else Fa(B,A,G)}),_.pop(),f=null};let te=null;function xe(A){te&&te(A)}function Ne(){wt.stop()}function ze(){wt.start()}const wt=new Ku;wt.setAnimationLoop(xe),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){te=A,ce.setAnimationLoop(A),A===null?wt.stop():wt.start()},ce.addEventListener("sessionstart",Ne),ce.addEventListener("sessionend",ze),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(d,A,z,w),f=C.get(A,_.length),f.init(),_.push(f),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),R.setFromProjectionMatrix(Q),N=this.localClippingEnabled,D=E.init(this.clippingPlanes,N,z),h=Hn.get(A,m.length),h.init(),m.push(h),Cn(A,z,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(Y,j),D===!0&&E.beginShadows();const G=f.state.shadowsArray;if(q.render(G,A,z),D===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(h,A),f.setupLights(d.physicallyCorrectLights),z.isArrayCamera){const B=z.cameras;for(let K=0,_e=B.length;K<_e;K++){const Me=B[K];_l(h,A,Me,Me.viewport)}}else _l(h,A,z);w!==null&&(ge.updateMultisampleRenderTarget(w),ge.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(d,A,z),pe.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Cn(A,z,G,B){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||R.intersectsSprite(A)){B&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Me=ut.update(A),Ae=A.material;Ae.visible&&h.push(A,Me,Ae,G,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==ke.render.frame&&(A.skeleton.update(),A.skeleton.frame=ke.render.frame),!A.frustumCulled||R.intersectsObject(A))){B&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Me=ut.update(A),Ae=A.material;if(Array.isArray(Ae)){const Ee=Me.groups;for(let Ue=0,Ie=Ee.length;Ue<Ie;Ue++){const Fe=Ee[Ue],Ke=Ae[Fe.materialIndex];Ke&&Ke.visible&&h.push(A,Me,Ke,G,ee.z,Fe)}}else Ae.visible&&h.push(A,Me,Ae,G,ee.z,null)}}const _e=A.children;for(let Me=0,Ae=_e.length;Me<Ae;Me++)Cn(_e[Me],z,G,B)}function _l(A,z,G,B){const K=A.opaque,_e=A.transmissive,Me=A.transparent;f.setupLightsView(G),_e.length>0&&oh(K,z,G),B&&ie.viewport(M.copy(B)),K.length>0&&Os(K,z,G),_e.length>0&&Os(_e,z,G),Me.length>0&&Os(Me,z,G),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function oh(A,z,G){const B=H.isWebGL2;V===null&&(V=new Ji(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?ps:Ki,minFilter:Aa,samples:B&&r===!0?4:0})),d.getDrawingBufferSize(Z),B?V.setSize(Z.x,Z.y):V.setSize(Io(Z.x),Io(Z.y));const K=d.getRenderTarget();d.setRenderTarget(V),d.clear();const _e=d.toneMapping;d.toneMapping=ii,Os(A,z,G),d.toneMapping=_e,ge.updateMultisampleRenderTarget(V),ge.updateRenderTargetMipmap(V),d.setRenderTarget(K)}function Os(A,z,G){const B=z.isScene===!0?z.overrideMaterial:null;for(let K=0,_e=A.length;K<_e;K++){const Me=A[K],Ae=Me.object,Ee=Me.geometry,Ue=B===null?Me.material:B,Ie=Me.group;Ae.layers.test(G.layers)&&lh(Ae,z,G,Ee,Ue,Ie)}}function lh(A,z,G,B,K,_e){A.onBeforeRender(d,z,G,B,K,_e),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(d,z,G,B,A,_e),K.transparent===!0&&K.side===Pr?(K.side=Sn,K.needsUpdate=!0,d.renderBufferDirect(G,z,B,K,A,_e),K.side=ds,K.needsUpdate=!0,d.renderBufferDirect(G,z,B,K,A,_e),K.side=Pr):d.renderBufferDirect(G,z,B,K,A,_e),A.onAfterRender(d,z,G,B,K,_e)}function Fa(A,z,G){z.isScene!==!0&&(z=ne);const B=Le.get(A),K=f.state.lights,_e=f.state.shadowsArray,Me=K.state.version,Ae=Ve.getParameters(A,K.state,_e,z,G),Ee=Ve.getProgramCacheKey(Ae);let Ue=B.programs;B.environment=A.isMeshStandardMaterial?z.environment:null,B.fog=z.fog,B.envMap=(A.isMeshStandardMaterial?Ct:pt).get(A.envMap||B.environment),Ue===void 0&&(A.addEventListener("dispose",me),Ue=new Map,B.programs=Ue);let Ie=Ue.get(Ee);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===Me)return vl(A,Ae),Ie}else Ae.uniforms=Ve.getUniforms(A),A.onBuild(G,Ae,d),A.onBeforeCompile(Ae,d),Ie=Ve.acquireProgram(Ae,Ee),Ue.set(Ee,Ie),B.uniforms=Ae.uniforms;const Fe=B.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=E.uniform),vl(A,Ae),B.needsLights=fh(A),B.lightsStateVersion=Me,B.needsLights&&(Fe.ambientLightColor.value=K.state.ambient,Fe.lightProbe.value=K.state.probe,Fe.directionalLights.value=K.state.directional,Fe.directionalLightShadows.value=K.state.directionalShadow,Fe.spotLights.value=K.state.spot,Fe.spotLightShadows.value=K.state.spotShadow,Fe.rectAreaLights.value=K.state.rectArea,Fe.ltc_1.value=K.state.rectAreaLTC1,Fe.ltc_2.value=K.state.rectAreaLTC2,Fe.pointLights.value=K.state.point,Fe.pointLightShadows.value=K.state.pointShadow,Fe.hemisphereLights.value=K.state.hemi,Fe.directionalShadowMap.value=K.state.directionalShadowMap,Fe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Fe.spotShadowMap.value=K.state.spotShadowMap,Fe.spotShadowMatrix.value=K.state.spotShadowMatrix,Fe.pointShadowMap.value=K.state.pointShadowMap,Fe.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ke=Ie.getUniforms(),Ci=oa.seqWithValue(Ke.seq,Fe);return B.currentProgram=Ie,B.uniformsList=Ci,Ie}function vl(A,z){const G=Le.get(A);G.outputEncoding=z.outputEncoding,G.instancing=z.instancing,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function ch(A,z,G,B,K){z.isScene!==!0&&(z=ne),ge.resetTextureUnits();const _e=z.fog,Me=B.isMeshStandardMaterial?z.environment:null,Ae=w===null?d.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Zi,Ee=(B.isMeshStandardMaterial?Ct:pt).get(B.envMap||Me),Ue=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!B.normalMap&&!!G.attributes.tangent,Fe=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,Ci=!!G.morphAttributes.color,ir=B.toneMapped?d.toneMapping:ii,rr=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ln=rr!==void 0?rr.length:0,Oe=Le.get(B),sr=f.state.lights;if(D===!0&&(N===!0||A!==y)){const Dn=A===y&&B.id===S;E.setState(B,A,Dn)}let et=!1;B.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==sr.state.version||Oe.outputEncoding!==Ae||K.isInstancedMesh&&Oe.instancing===!1||!K.isInstancedMesh&&Oe.instancing===!0||K.isSkinnedMesh&&Oe.skinning===!1||!K.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Ee||B.fog===!0&&Oe.fog!==_e||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==E.numPlanes||Oe.numIntersection!==E.numIntersection)||Oe.vertexAlphas!==Ue||Oe.vertexTangents!==Ie||Oe.morphTargets!==Fe||Oe.morphNormals!==Ke||Oe.morphColors!==Ci||Oe.toneMapping!==ir||H.isWebGL2===!0&&Oe.morphTargetsCount!==Ln)&&(et=!0):(et=!0,Oe.__version=B.version);let Rn=Oe.currentProgram;et===!0&&(Rn=Fa(B,z,K));let ai=!1,Zr=!1,Oa=!1;const Tt=Rn.getUniforms(),Jr=Oe.uniforms;if(ie.useProgram(Rn.program)&&(ai=!0,Zr=!0,Oa=!0),B.id!==S&&(S=B.id,Zr=!0),ai||y!==A){if(Tt.setValue(X,"projectionMatrix",A.projectionMatrix),H.logarithmicDepthBuffer&&Tt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),y!==A&&(y=A,Zr=!0,Oa=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Dn=Tt.map.cameraPosition;Dn!==void 0&&Dn.setValue(X,ee.setFromMatrixPosition(A.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Tt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||K.isSkinnedMesh)&&Tt.setValue(X,"viewMatrix",A.matrixWorldInverse)}if(K.isSkinnedMesh){Tt.setOptional(X,K,"bindMatrix"),Tt.setOptional(X,K,"bindMatrixInverse");const Dn=K.skeleton;Dn&&(H.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),Tt.setValue(X,"boneTexture",Dn.boneTexture,ge),Tt.setValue(X,"boneTextureSize",Dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Na=G.morphAttributes;return(Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&H.isWebGL2===!0)&&re.update(K,G,B,Rn),(Zr||Oe.receiveShadow!==K.receiveShadow)&&(Oe.receiveShadow=K.receiveShadow,Tt.setValue(X,"receiveShadow",K.receiveShadow)),Zr&&(Tt.setValue(X,"toneMappingExposure",d.toneMappingExposure),Oe.needsLights&&uh(Jr,Oa),_e&&B.fog===!0&&Wn.refreshFogUniforms(Jr,_e),Wn.refreshMaterialUniforms(Jr,B,I,F,V),oa.upload(X,Oe.uniformsList,Jr,ge)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(oa.upload(X,Oe.uniformsList,Jr,ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Tt.setValue(X,"center",K.center),Tt.setValue(X,"modelViewMatrix",K.modelViewMatrix),Tt.setValue(X,"normalMatrix",K.normalMatrix),Tt.setValue(X,"modelMatrix",K.matrixWorld),Rn}function uh(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function fh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,z,G){Le.get(A.texture).__webglTexture=z,Le.get(A.depthTexture).__webglTexture=G;const B=Le.get(A);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=G===void 0,B.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const G=Le.get(A);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,G=0){w=A,g=z,v=G;let B=!0;if(A){const Ee=Le.get(A);Ee.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(36160,null),B=!1):Ee.__webglFramebuffer===void 0?ge.setupRenderTarget(A):Ee.__hasExternalTextures&&ge.rebindTextures(A,Le.get(A.texture).__webglTexture,Le.get(A.depthTexture).__webglTexture)}let K=null,_e=!1,Me=!1;if(A){const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture)&&(Me=!0);const Ue=Le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(K=Ue[z],_e=!0):H.isWebGL2&&A.samples>0&&ge.useMultisampledRTT(A)===!1?K=Le.get(A).__webglMultisampledFramebuffer:K=Ue,M.copy(A.viewport),b.copy(A.scissor),x=A.scissorTest}else M.copy(O).multiplyScalar(I).floor(),b.copy(U).multiplyScalar(I).floor(),x=L;if(ie.bindFramebuffer(36160,K)&&H.drawBuffers&&B&&ie.drawBuffers(A,K),ie.viewport(M),ie.scissor(b),ie.setScissorTest(x),_e){const Ee=Le.get(A.texture);X.framebufferTexture2D(36160,36064,34069+z,Ee.__webglTexture,G)}else if(Me){const Ee=Le.get(A.texture),Ue=z||0;X.framebufferTextureLayer(36160,36064,Ee.__webglTexture,G||0,Ue)}S=-1},this.readRenderTargetPixels=function(A,z,G,B,K,_e,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){ie.bindFramebuffer(36160,Ae);try{const Ee=A.texture,Ue=Ee.format,Ie=Ee.type;if(Ue!==Fn&&W.convert(Ue)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===ps&&(J.has("EXT_color_buffer_half_float")||H.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ie!==Ki&&W.convert(Ie)!==X.getParameter(35738)&&!(Ie===ki&&(H.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-B&&G>=0&&G<=A.height-K&&X.readPixels(z,G,B,K,W.convert(Ue),W.convert(Ie),_e)}finally{const Ee=w!==null?Le.get(w).__webglFramebuffer:null;ie.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(A,z,G=0){const B=Math.pow(2,-G),K=Math.floor(z.image.width*B),_e=Math.floor(z.image.height*B);ge.setTexture2D(z,0),X.copyTexSubImage2D(3553,G,0,0,A.x,A.y,K,_e),ie.unbindTexture()},this.copyTextureToTexture=function(A,z,G,B=0){const K=z.image.width,_e=z.image.height,Me=W.convert(G.format),Ae=W.convert(G.type);ge.setTexture2D(G,0),X.pixelStorei(37440,G.flipY),X.pixelStorei(37441,G.premultiplyAlpha),X.pixelStorei(3317,G.unpackAlignment),z.isDataTexture?X.texSubImage2D(3553,B,A.x,A.y,K,_e,Me,Ae,z.image.data):z.isCompressedTexture?X.compressedTexSubImage2D(3553,B,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):X.texSubImage2D(3553,B,A.x,A.y,Me,Ae,z.image),B===0&&G.generateMipmaps&&X.generateMipmap(3553),ie.unbindTexture()},this.copyTextureToTexture3D=function(A,z,G,B,K=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Ee=W.convert(B.format),Ue=W.convert(B.type);let Ie;if(B.isData3DTexture)ge.setTexture3D(B,0),Ie=32879;else if(B.isDataArrayTexture)ge.setTexture2DArray(B,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,B.flipY),X.pixelStorei(37441,B.premultiplyAlpha),X.pixelStorei(3317,B.unpackAlignment);const Fe=X.getParameter(3314),Ke=X.getParameter(32878),Ci=X.getParameter(3316),ir=X.getParameter(3315),rr=X.getParameter(32877),Ln=G.isCompressedTexture?G.mipmaps[0]:G.image;X.pixelStorei(3314,Ln.width),X.pixelStorei(32878,Ln.height),X.pixelStorei(3316,A.min.x),X.pixelStorei(3315,A.min.y),X.pixelStorei(32877,A.min.z),G.isDataTexture||G.isData3DTexture?X.texSubImage3D(Ie,K,z.x,z.y,z.z,_e,Me,Ae,Ee,Ue,Ln.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ie,K,z.x,z.y,z.z,_e,Me,Ae,Ee,Ln.data)):X.texSubImage3D(Ie,K,z.x,z.y,z.z,_e,Me,Ae,Ee,Ue,Ln),X.pixelStorei(3314,Fe),X.pixelStorei(32878,Ke),X.pixelStorei(3316,Ci),X.pixelStorei(3315,ir),X.pixelStorei(32877,rr),K===0&&B.generateMipmaps&&X.generateMipmap(Ie),ie.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ge.setTextureCube(A,0):A.isData3DTexture?ge.setTexture3D(A,0):A.isDataArrayTexture?ge.setTexture2DArray(A,0):ge.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){g=0,v=0,w=null,ie.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class m0 extends nf{}m0.prototype.isWebGL1Renderer=!0;class g0 extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}const Oc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const _0=new rf;class sf{constructor(e){this.manager=e!==void 0?e:_0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class v0 extends sf{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Oc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ms("img");function l(){u(),Oc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class x0 extends sf{constructor(e){super(e)}load(e,t,n,i){const r=new cn,o=new v0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);/**
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
 */var Nc={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function S0(s){return!!s.document&&typeof s.document.createElement=="function"}function y0(s,e){if(S0(s)&&e in Nc){var t=s.document.createElement("div"),n=Nc[e],i=n.standard,r=n.prefixed,o=i in t.style;return o?i:r}return e}/**
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
 */var Gt={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},gn={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},ts={PRIMARY_HALF:.8367142,PRIMARY_FULL:2.00611057,SECONDARY_QUARTER:.37651913,SECONDARY_HALF:.84386165,SECONDARY_FULL:1.60277782};/**
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
 */var b0=function(s){Gn(e,s);function e(t){var n=s.call(this,Bn(Bn({},e.defaultAdapter),t))||this;return n.observer=null,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Gt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return gn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(Gt.INDETERMINATE_CLASS),this.adapter.addClass(Gt.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(n){var i,r;if(!t.determinate)try{for(var o=xh(n),a=o.next();!a.done;a=o.next()){var l=a.value;l.contentRect&&t.calculateAndSetDimensions(l.contentRect.width)}}catch(c){i={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},e.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate){this.adapter.removeClass(Gt.INDETERMINATE_CLASS),this.adapter.setAttribute(gn.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(gn.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(gn.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),this.setBufferBarProgress(this.buffer);return}this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(Gt.INDETERMINATE_CLASS),this.adapter.removeAttribute(gn.ARIA_VALUENOW),this.adapter.removeAttribute(gn.ARIA_VALUEMAX),this.adapter.removeAttribute(gn.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},e.prototype.isDeterminate=function(){return this.determinate},e.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(gn.ARIA_VALUENOW,t.toString()))},e.prototype.getProgress=function(){return this.progress},e.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},e.prototype.getBuffer=function(){return this.buffer},e.prototype.open=function(){this.adapter.removeClass(Gt.CLOSED_CLASS),this.adapter.removeClass(Gt.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(gn.ARIA_HIDDEN)},e.prototype.close=function(){this.adapter.addClass(Gt.CLOSED_CLASS),this.adapter.setAttribute(gn.ARIA_HIDDEN,"true")},e.prototype.isClosed=function(){return this.adapter.hasClass(Gt.CLOSED_CLASS)},e.prototype.handleTransitionEnd=function(){this.adapter.hasClass(Gt.CLOSED_CLASS)&&this.adapter.addClass(Gt.CLOSED_ANIMATION_OFF_CLASS)},e.prototype.destroy=function(){s.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},e.prototype.restartAnimation=function(){this.adapter.removeClass(Gt.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(Gt.ANIMATION_READY_CLASS)},e.prototype.setPrimaryBarProgress=function(t){var n="scaleX("+t+")",i=typeof window<"u"?y0(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(i,n)},e.prototype.setBufferBarProgress=function(t){var n=t*100+"%";this.adapter.setBufferBarStyle(gn.FLEX_BASIS,n)},e.prototype.calculateAndSetDimensions=function(t){var n=t*ts.PRIMARY_HALF,i=t*ts.PRIMARY_FULL,r=t*ts.SECONDARY_QUARTER,o=t*ts.SECONDARY_HALF,a=t*ts.SECONDARY_FULL;this.adapter.setStyle("--mdc-linear-progress-primary-half",n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",a+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-a+"px"),this.restartAnimation()},e}(As);function Mi(s,e){let t=Object.getOwnPropertyNames(s);const n={};for(let i=0;i<t.length;i++){const r=t[i],o=r.indexOf("$");o!==-1&&e.indexOf(r.substring(0,o+1))!==-1||e.indexOf(r)===-1&&(n[r]=s[r])}return n}function Ft(s,e){let t=Object.getOwnPropertyNames(s);const n={};for(let i=0;i<t.length;i++){const r=t[i];r.substring(0,e.length)===e&&(n[r.substring(e.length)]=s[r])}return n}function M0(s){let e,t,n,i,r,o,a,l,c,u,h,f,m,_,d,p,g,v,w,S,y=[{class:m=ot({[s[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":s[3],"mdc-linear-progress--closed":s[4],"mdc-data-table__linear-progress":s[14]==="data-table",...s[8]})},{style:_=Object.entries(s[10]).map(kc).concat([s[2]]).join(" ")},{role:"progressbar"},{"aria-valuemin":d=0},{"aria-valuemax":p=1},{"aria-valuenow":g=s[3]?void 0:s[5]},s[9],s[16]],M={};for(let b=0;b<y.length;b+=1)M=Qe(M,y[b]);return{c(){e=Te("div"),t=Te("div"),n=Te("div"),r=He(),o=Te("div"),a=He(),l=Te("div"),c=Te("span"),h=He(),f=Te("div"),f.innerHTML='<span class="mdc-linear-progress__bar-inner"></span>',we(n,"class","mdc-linear-progress__buffer-bar"),we(n,"style",i=Object.entries(s[11]).map(zc).join(" ")),we(o,"class","mdc-linear-progress__buffer-dots"),we(t,"class","mdc-linear-progress__buffer"),we(c,"class","mdc-linear-progress__bar-inner"),we(l,"class","mdc-linear-progress__bar mdc-linear-progress__primary-bar"),we(l,"style",u=Object.entries(s[12]).map(Uc).join(" ")),we(f,"class","mdc-linear-progress__bar mdc-linear-progress__secondary-bar"),_t(e,M)},m(b,x){Re(b,e,x),be(e,t),be(t,n),be(t,r),be(t,o),be(e,a),be(e,l),be(l,c),be(e,h),be(e,f),s[19](e),w||(S=[tn(v=vi.call(null,e,s[0])),tn(s[13].call(null,e)),vt(e,"transitionend",s[20])],w=!0)},p(b,[x]){x&2048&&i!==(i=Object.entries(b[11]).map(zc).join(" "))&&we(n,"style",i),x&4096&&u!==(u=Object.entries(b[12]).map(Uc).join(" "))&&we(l,"style",u),_t(e,M=on(y,[x&282&&m!==(m=ot({[b[1]]:!0,"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":b[3],"mdc-linear-progress--closed":b[4],"mdc-data-table__linear-progress":b[14]==="data-table",...b[8]}))&&{class:m},x&1028&&_!==(_=Object.entries(b[10]).map(kc).concat([b[2]]).join(" "))&&{style:_},{role:"progressbar"},{"aria-valuemin":d},{"aria-valuemax":p},x&40&&g!==(g=b[3]?void 0:b[5])&&{"aria-valuenow":g},x&512&&b[9],x&65536&&b[16]])),v&&Nn(v.update)&&x&1&&v.update.call(null,b[0])},i:ha,o:ha,d(b){b&&De(e),s[19](null),w=!1,Ms(S)}}}const zc=([s,e])=>`${s}: ${e};`,Uc=([s,e])=>`${s}: ${e};`,kc=([s,e])=>`${s}: ${e};`;function w0(s,e,t){const n=["use","class","style","indeterminate","closed","progress","buffer","getElement"];let i=kn(e,n),r;const o=Cs(ws());let{use:a=[]}=e,{class:l=""}=e,{style:c=""}=e,{indeterminate:u=!1}=e,{closed:h=!1}=e,{progress:f=0}=e,{buffer:m=void 0}=e,_,d,p={},g={},v={},w={},S={},y=da("SMUI:linear-progress:context"),M=da("SMUI:linear-progress:closed");ln(s,M,D=>t(21,r=D)),En(()=>(t(6,d=new b0({addClass:x,forceLayout:()=>{U().getBoundingClientRect()},setBufferBarStyle:j,setPrimaryBarStyle:O,hasClass:b,removeAttribute:I,removeClass:T,setAttribute:F,setStyle:Y,attachResizeObserver:D=>{const N=window.ResizeObserver;if(N){const V=new N(D);return V.observe(U()),V}return null},getWidth:()=>U().offsetWidth})),d.init(),()=>{d.destroy()}));function b(D){return D in p?p[D]:U().classList.contains(D)}function x(D){p[D]||t(8,p[D]=!0,p)}function T(D){(!(D in p)||p[D])&&t(8,p[D]=!1,p)}function F(D,N){g[D]!==N&&t(9,g[D]=N,g)}function I(D){(!(D in g)||g[D]!=null)&&t(9,g[D]=void 0,g)}function Y(D,N){v[D]!=N&&(N===""||N==null?(delete v[D],t(10,v)):t(10,v[D]=N,v))}function j(D,N){w[D]!=N&&(N===""||N==null?(delete w[D],t(11,w)):t(11,w[D]=N,w))}function O(D,N){S[D]!=N&&(N===""||N==null?(delete S[D],t(12,S)):t(12,S[D]=N,S))}function U(){return _}function L(D){It[D?"unshift":"push"](()=>{_=D,t(7,_)})}const R=()=>d&&d.handleTransitionEnd();return s.$$set=D=>{e=Qe(Qe({},e),Ts(D)),t(16,i=kn(e,n)),"use"in D&&t(0,a=D.use),"class"in D&&t(1,l=D.class),"style"in D&&t(2,c=D.style),"indeterminate"in D&&t(3,u=D.indeterminate),"closed"in D&&t(4,h=D.closed),"progress"in D&&t(5,f=D.progress),"buffer"in D&&t(17,m=D.buffer)},s.$$.update=()=>{s.$$.dirty&16&&M&&hh(M,r=h,r),s.$$.dirty&72&&d&&d.isDeterminate()!==!u&&d.setDeterminate(!u),s.$$.dirty&96&&d&&d.getProgress()!==f&&d.setProgress(f),s.$$.dirty&131136&&d&&(m==null?d.setBuffer(1):d.setBuffer(m)),s.$$.dirty&80&&d&&(h?d.close():d.open())},[a,l,c,u,h,f,d,_,p,g,v,w,S,o,y,M,i,m,U,L,R]}class T0 extends wn{constructor(e){super(),Tn(this,e,w0,M0,fn,{use:0,class:1,style:2,indeterminate:3,closed:4,progress:5,buffer:17,getElement:18})}get getElement(){return this.$$.ctx[18]}}const ma=[{bg:"/home/bg1.png",depth:"/home/bg1_depth.jpg"},{bg:"/home/bg2.png",depth:"/home/bg2_depth.jpg"},{bg:"/home/bg3.png",depth:"/home/bg3_depth.jpg"},{bg:"/home/bg4.jpeg",depth:"/home/bg4_depth.jpg"},{bg:"/home/bg5.png",depth:"/home/bg5_depth.jpg"}],E0=1.5,dt=800,Mn=Au(!0),la=["前端","后端","其他"],Bc={[la[0]]:[{tab:"基础"},{skill:"HTML5/CSS3",score:"100%"},{skill:"Less/Sass/Stylus",score:"100%"},{skill:"JavaScript",score:"100%"},{skill:"TypeScript",score:"100%"},{skill:"Node",score:"100%"},{tab:"框架"},{skill:"Vue&相关技术栈",score:"100%"},{skill:"Svelte&相关技术栈",score:"85%"},{skill:"React&相关技术栈",score:"70%"},{skill:"Solid",score:"70%"},{skill:"Egg.js",score:"100%"},{skill:"Koa.js",score:"100%"},{tab:"小程序"},{skill:"MINA",score:"100%"},{skill:"mpVue",score:"100%"},{tab:"其他"},{skill:"webpack",score:"95%"},{skill:"vite",score:"95%"},{skill:"git",score:"100%"},{skill:"monorepo",score:"100%"},{skill:"npm/yarn/pnpm",score:"100%"}],[la[1]]:[{tab:"开发语言"},{skill:"Golang",score:"70%"},{skill:"PHP",score:"50%"},{tab:"其他"},{skill:"Redis",score:"70%"},{skill:"Mysql",score:"70%"}],[la[2]]:[{skill:"Photoshop",score:"60%"}]};function A0(s){let e,t,n,i,r,o,a,l,c,u,h,f,m,_,d;return{c(){e=Te("div"),t=Te("div"),t.textContent="欢迎来到mahiru-forever的个人空间",n=He(),i=Te("div"),r=Te("div"),r.textContent="Skill",o=He(),a=Te("div"),a.textContent="Experience",l=He(),c=Te("div"),c.textContent="Hobby",u=He(),h=Te("div"),h.textContent="Contact",we(t,"class","title svelte-soauan"),we(r,"class","know svelte-soauan"),we(r,"role","presentation"),we(a,"class","know svelte-soauan"),we(a,"role","presentation"),we(c,"class","know svelte-soauan"),we(c,"role","presentation"),we(h,"class","know svelte-soauan"),we(h,"role","presentation"),we(i,"class","know-more svelte-soauan"),we(e,"class","page page_1 svelte-soauan")},m(p,g){Re(p,e,g),be(e,t),be(e,n),be(e,i),be(i,r),be(i,o),be(i,a),be(i,l),be(i,c),be(i,u),be(i,h),m=!0,_||(d=[vt(r,"click",s[4]),vt(a,"click",s[5]),vt(c,"click",s[6]),vt(h,"click",s[7])],_=!0)},p(p,[g]){s=p},i(p){m||(Ei(()=>{m&&(f||(f=bt(e,Mt,{delay:s[0],duration:dt},!0)),f.run(1))}),m=!0)},o(p){f||(f=bt(e,Mt,{delay:s[0],duration:dt},!1)),f.run(0),m=!1},d(p){p&&De(e),p&&f&&f.end(),_=!1,Ms(d)}}}function C0(s,e,t){let n,i,r;ln(s,Mn,h=>t(2,i=h)),ln(s,ti,h=>t(3,r=h));const o=dh();En(()=>{Mn.set(!1)});const a=()=>o("jump",1),l=()=>o("jump",2),c=()=>o("jump",3),u=()=>o("jump",4);return s.$$.update=()=>{s.$$.dirty&12&&t(0,n=r===0?i?0:dt:0)},[n,o,i,r,a,l,c,u]}class L0 extends wn{constructor(e){super(),Tn(this,e,C0,A0,fn,{})}}/**
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
 */var R0={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},D0={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
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
 */var Qn=function(s){Gn(e,s);function e(t){return s.call(this,Bn(Bn({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return R0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return D0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(As);/**
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
 */var P0=function(s){Gn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(Qn.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(Qn.cssClasses.ACTIVE)},e}(Qn);/**
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
 */var Vc=function(s){Gn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.activate=function(t){if(!t){this.adapter.addClass(Qn.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),i=t.width/n.width,r=t.left-n.left;this.adapter.addClass(Qn.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(Qn.cssClasses.NO_TRANSITION),this.adapter.addClass(Qn.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(Qn.cssClasses.ACTIVE)},e}(Qn);/**
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
 */var ia={ACTIVE:"mdc-tab--active"},ns={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
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
 */var I0=function(s){Gn(e,s);function e(t){var n=s.call(this,Bn(Bn({},e.defaultAdapter),t))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return ia},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ns},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(ia.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(ia.ACTIVE),this.adapter.setAttr(ns.ARIA_SELECTED,"true"),this.adapter.setAttr(ns.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(ia.ACTIVE),this.adapter.setAttr(ns.ARIA_SELECTED,"false"),this.adapter.setAttr(ns.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:n+r,contentRight:n+r+i,rootLeft:n,rootRight:n+t}},e}(As);function F0(s){let e,t,n,i,r,o,a,l,c,u,h;const f=s[21].default,m=Hr(f,s,s[20],null);let _=[{class:n=ot({[s[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":s[3]==="underline","mdc-tab-indicator__content--icon":s[3]==="icon"})},{style:i=Object.entries(s[10]).map(Gc).join(" ")},{"aria-hidden":r=s[3]==="icon"?"true":void 0},Ft(s[12],"content$")],d={};for(let v=0;v<_.length;v+=1)d=Qe(d,_[v]);let p=[{class:a=ot({[s[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":s[0],"mdc-tab-indicator--fade":s[4]==="fade",...s[9]})},Mi(s[12],["content$"])],g={};for(let v=0;v<p.length;v+=1)g=Qe(g,p[v]);return{c(){e=Te("span"),t=Te("span"),m&&m.c(),_t(t,d),_t(e,g)},m(v,w){Re(v,e,w),be(e,t),m&&m.m(t,null),s[22](t),s[23](e),c=!0,u||(h=[tn(o=vi.call(null,t,s[5])),tn(l=vi.call(null,e,s[1])),tn(s[11].call(null,e))],u=!0)},p(v,[w]){m&&m.p&&(!c||w&1048576)&&Xr(m,f,v,v[20],c?Yr(f,v[20],w,null):qr(v[20]),null),_t(t,d=on(_,[(!c||w&72&&n!==(n=ot({[v[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":v[3]==="underline","mdc-tab-indicator__content--icon":v[3]==="icon"})))&&{class:n},(!c||w&1024&&i!==(i=Object.entries(v[10]).map(Gc).join(" ")))&&{style:i},(!c||w&8&&r!==(r=v[3]==="icon"?"true":void 0))&&{"aria-hidden":r},w&4096&&Ft(v[12],"content$")])),o&&Nn(o.update)&&w&32&&o.update.call(null,v[5]),_t(e,g=on(p,[(!c||w&533&&a!==(a=ot({[v[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":v[0],"mdc-tab-indicator--fade":v[4]==="fade",...v[9]})))&&{class:a},w&4096&&Mi(v[12],["content$"])])),l&&Nn(l.update)&&w&2&&l.update.call(null,v[1])},i(v){c||(de(m,v),c=!0)},o(v){Se(m,v),c=!1},d(v){v&&De(e),m&&m.d(v),s[22](null),s[23](null),u=!1,Ms(h)}}}const Gc=([s,e])=>`${s}: ${e};`;function O0(s,e,t){const n=["use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"];let i=kn(e,n),{$$slots:r={},$$scope:o}=e;const a=Cs(ws());let{use:l=[]}=e,{class:c=""}=e,{active:u=!1}=e,{type:h="underline"}=e,{transition:f="slide"}=e,{content$use:m=[]}=e,{content$class:_=""}=e,d,p,g,v={},w={},S=[],y=f;En(()=>(t(17,p=M()),p.init(),()=>{p.destroy()}));function M(){const R={fade:P0,slide:Vc}[f]||Vc;return new R({addClass:(...D)=>b(()=>x(...D)),removeClass:(...D)=>b(()=>T(...D)),computeContentClientRect:j,setContentStyleProperty:(...D)=>b(()=>F(...D))})}function b(R){S.length?S[S.length-1].push(R):R()}function x(R){v[R]||t(9,v[R]=!0,v)}function T(R){(!(R in v)||v[R])&&t(9,v[R]=!1,v)}function F(R,D){w[R]!=D&&(D===""||D==null?(delete w[R],t(10,w),t(19,y),t(4,f),t(17,p)):t(10,w[R]=D,w))}function I(R){t(0,u=!0),p.activate(R)}function Y(){t(0,u=!1),p.deactivate()}function j(){return S.push([]),t(18,S),g.getBoundingClientRect()}function O(){return d}function U(R){It[R?"unshift":"push"](()=>{g=R,t(8,g)})}function L(R){It[R?"unshift":"push"](()=>{d=R,t(7,d)})}return s.$$set=R=>{e=Qe(Qe({},e),Ts(R)),t(12,i=kn(e,n)),"use"in R&&t(1,l=R.use),"class"in R&&t(2,c=R.class),"active"in R&&t(0,u=R.active),"type"in R&&t(3,h=R.type),"transition"in R&&t(4,f=R.transition),"content$use"in R&&t(5,m=R.content$use),"content$class"in R&&t(6,_=R.content$class),"$$scope"in R&&t(20,o=R.$$scope)},s.$$.update=()=>{s.$$.dirty&655376&&y!==f&&(t(19,y=f),p&&p.destroy(),t(9,v={}),t(10,w={}),t(17,p=M()),p.init()),s.$$.dirty&262144&&S.length&&requestAnimationFrame(()=>{var R;const D=(R=S.shift())!==null&&R!==void 0?R:[];t(18,S);for(const N of D)N()})},[u,l,c,h,f,m,_,d,g,v,w,a,i,I,Y,j,O,p,S,y,o,r,U,L]}class af extends wn{constructor(e){super(),Tn(this,e,O0,F0,fn,{use:1,class:2,active:0,type:3,transition:4,content$use:5,content$class:6,activate:13,deactivate:14,computeContentClientRect:15,getElement:16})}get activate(){return this.$$.ctx[13]}get deactivate(){return this.$$.ctx[14]}get computeContentClientRect(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}const N0=s=>({}),Wc=s=>({}),z0=s=>({}),Hc=s=>({});function Xc(s){let e,t;const n=[{active:s[18]},Ft(s[25],"tabIndicator$")];let i={$$slots:{default:[U0]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Qe(i,n[r]);return e=new af({props:i}),s[33](e),{c(){Yt(e.$$.fragment)},m(r,o){jt(e,r,o),t=!0},p(r,o){const a=o[0]&33816576?on(n,[o[0]&262144&&{active:r[18]},o[0]&33554432&&hs(Ft(r[25],"tabIndicator$"))]):{};o[1]&64&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(de(e.$$.fragment,r),t=!0)},o(r){Se(e.$$.fragment,r),t=!1},d(r){s[33](null),Kt(e,r)}}}function U0(s){let e;const t=s[32]["tab-indicator"],n=Hr(t,s,s[37],Hc);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&64)&&Xr(n,t,i,i[37],e?Yr(t,i[37],r,z0):qr(i[37]),Hc)},i(i){e||(de(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function qc(s){let e,t;const n=[{active:s[18]},Ft(s[25],"tabIndicator$")];let i={$$slots:{default:[k0]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=Qe(i,n[r]);return e=new af({props:i}),s[35](e),{c(){Yt(e.$$.fragment)},m(r,o){jt(e,r,o),t=!0},p(r,o){const a=o[0]&33816576?on(n,[o[0]&262144&&{active:r[18]},o[0]&33554432&&hs(Ft(r[25],"tabIndicator$"))]):{};o[1]&64&&(a.$$scope={dirty:o,ctx:r}),e.$set(a)},i(r){t||(de(e.$$.fragment,r),t=!0)},o(r){Se(e.$$.fragment,r),t=!1},d(r){s[35](null),Kt(e,r)}}}function k0(s){let e;const t=s[32]["tab-indicator"],n=Hr(t,s,s[37],Wc);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r[1]&64)&&Xr(n,t,i,i[37],e?Yr(t,i[37],r,N0):qr(i[37]),Wc)},i(i){e||(de(n,i),e=!0)},o(i){Se(n,i),e=!1},d(i){n&&n.d(i)}}}function B0(s){let e,t,n,i,r,o,a,l,c,u;const h=s[32].default,f=Hr(h,s,s[37],null);let m=s[6]&&Xc(s),_=[{class:n=ot({[s[9]]:!0,"mdc-tab__content":!0})},Ft(s[25],"content$")],d={};for(let g=0;g<_.length;g+=1)d=Qe(d,_[g]);let p=!s[6]&&qc(s);return{c(){e=Te("span"),f&&f.c(),t=He(),m&&m.c(),r=He(),p&&p.c(),o=He(),a=Te("span"),_t(e,d),we(a,"class","mdc-tab__ripple")},m(g,v){Re(g,e,v),f&&f.m(e,null),be(e,t),m&&m.m(e,null),s[34](e),Re(g,r,v),p&&p.m(g,v),Re(g,o,v),Re(g,a,v),l=!0,c||(u=tn(i=vi.call(null,e,s[8])),c=!0)},p(g,v){f&&f.p&&(!l||v[1]&64)&&Xr(f,h,g,g[37],l?Yr(h,g[37],v,null):qr(g[37]),null),g[6]?m?(m.p(g,v),v[0]&64&&de(m,1)):(m=Xc(g),m.c(),de(m,1),m.m(e,null)):m&&(Lt(),Se(m,1,1,()=>{m=null}),Rt()),_t(e,d=on(_,[(!l||v[0]&512&&n!==(n=ot({[g[9]]:!0,"mdc-tab__content":!0})))&&{class:n},v[0]&33554432&&Ft(g[25],"content$")])),i&&Nn(i.update)&&v[0]&256&&i.update.call(null,g[8]),g[6]?p&&(Lt(),Se(p,1,1,()=>{p=null}),Rt()):p?(p.p(g,v),v[0]&64&&de(p,1)):(p=qc(g),p.c(),de(p,1),p.m(o.parentNode,o))},i(g){l||(de(f,g),de(m),de(p),l=!0)},o(g){Se(f,g),Se(m),Se(p),l=!1},d(g){g&&De(e),f&&f.d(g),m&&m.d(),s[34](null),g&&De(r),p&&p.d(g),g&&De(o),g&&De(a),c=!1,u()}}}function V0(s){let e,t,n;const i=[{tag:s[11]},{use:[[yl,{ripple:s[3],unbounded:!1,addClass:s[21],removeClass:s[22],addStyle:s[23]}],s[20],...s[0]]},{class:ot({[s[1]]:!0,"mdc-tab":!0,"mdc-tab--active":s[18],"mdc-tab--stacked":s[4],"mdc-tab--min-width":s[5],...s[15]})},{style:Object.entries(s[16]).map(Yc).concat([s[2]]).join(" ")},{role:"tab"},{"aria-selected":s[18]?"true":"false"},{tabindex:s[18]||s[19]?"0":"-1"},{href:s[7]},s[17],Mi(s[25],["content$","tabIndicator$"])];var r=s[10];function o(a){let l={$$slots:{default:[B0]},$$scope:{ctx:a}};for(let c=0;c<i.length;c+=1)l=Qe(l,i[c]);return{props:l}}return r&&(e=xl(r,o(s)),s[36](e),e.$on("click",s[24])),{c(){e&&Yt(e.$$.fragment),t=Es()},m(a,l){e&&jt(e,a,l),Re(a,t,l),n=!0},p(a,l){const c=l[0]&50301119?on(i,[l[0]&2048&&{tag:a[11]},l[0]&15728649&&{use:[[yl,{ripple:a[3],unbounded:!1,addClass:a[21],removeClass:a[22],addStyle:a[23]}],a[20],...a[0]]},l[0]&294962&&{class:ot({[a[1]]:!0,"mdc-tab":!0,"mdc-tab--active":a[18],"mdc-tab--stacked":a[4],"mdc-tab--min-width":a[5],...a[15]})},l[0]&65540&&{style:Object.entries(a[16]).map(Yc).concat([a[2]]).join(" ")},i[4],l[0]&262144&&{"aria-selected":a[18]?"true":"false"},l[0]&786432&&{tabindex:a[18]||a[19]?"0":"-1"},l[0]&128&&{href:a[7]},l[0]&131072&&hs(a[17]),l[0]&33554432&&hs(Mi(a[25],["content$","tabIndicator$"]))]):{};if(l[0]&33841984|l[1]&64&&(c.$$scope={dirty:l,ctx:a}),l[0]&1024&&r!==(r=a[10])){if(e){Lt();const u=e;Se(u.$$.fragment,1,0,()=>{Kt(u,1)}),Rt()}r?(e=xl(r,o(a)),a[36](e),e.$on("click",a[24]),Yt(e.$$.fragment),de(e.$$.fragment,1),jt(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){n||(e&&de(e.$$.fragment,a),n=!0)},o(a){e&&Se(e.$$.fragment,a),n=!1},d(a){s[36](null),a&&De(t),e&&Kt(e,a)}}}const Yc=([s,e])=>`${s}: ${e};`;function G0(s,e,t){const n=["use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","activate","deactivate","focus","getElement"];let i=kn(e,n),{$$slots:r={},$$scope:o}=e;const a=Cs(ws());let{use:l=[]}=e,{class:c=""}=e,{style:u=""}=e,{tab:h}=e,{ripple:f=!0}=e,{stacked:m=!1}=e,{minWidth:_=!1}=e,{indicatorSpanOnlyContent:d=!1}=e,{href:p=void 0}=e,{content$use:g=[]}=e,{content$class:v=""}=e,w,S,y,M,b={},x={},T={},F=da("SMUI:tab:focusOnActivate"),I=h===da("SMUI:tab:initialActive"),Y=!1,{component:j=bl}=e,{tag:O=j===bl?p==null?"button":"a":void 0}=e;if(pa("SMUI:label:context","tab"),pa("SMUI:icon:context","tab"),!h)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");En(()=>{t(31,S=new I0({setAttr:N,addClass:L,removeClass:R,hasClass:U,activateIndicator:ie=>M.activate(ie),deactivateIndicator:()=>M.deactivate(),notifyInteracted:()=>sa(ne(),"SMUITab:interacted",{tabId:h},void 0,!0),getOffsetLeft:()=>ne().offsetLeft,getOffsetWidth:()=>ne().offsetWidth,getContentOffsetLeft:()=>y.offsetLeft,getContentOffsetWidth:()=>y.offsetWidth,focus:ee}));const H={tabId:h,get element(){return ne()},get active(){return I},forceAccessible(ie){t(19,Y=ie)},computeIndicatorClientRect:()=>M.computeContentClientRect(),computeDimensions:()=>S.computeDimensions(),focus:ee,activate:Q,deactivate:Z};return sa(ne(),"SMUITab:mount",H),S.init(),()=>{sa(ne(),"SMUITab:unmount",H),S.destroy()}});function U(H){return H in b?b[H]:ne().classList.contains(H)}function L(H){b[H]||t(15,b[H]=!0,b)}function R(H){(!(H in b)||b[H])&&t(15,b[H]=!1,b)}function D(H,ie){x[H]!=ie&&(ie===""||ie==null?(delete x[H],t(16,x)):t(16,x[H]=ie,x))}function N(H,ie){T[H]!==ie&&t(17,T[H]=ie,T)}function V(H){!H.defaultPrevented&&S&&S.handleClick()}function Q(H,ie){t(18,I=!0),ie&&S.setFocusOnActivate(!1),S.activate(H),ie&&S.setFocusOnActivate(F)}function Z(){t(18,I=!1),S.deactivate()}function ee(){ne().focus()}function ne(){return w.getElement()}function ue(H){It[H?"unshift":"push"](()=>{M=H,t(14,M)})}function X(H){It[H?"unshift":"push"](()=>{y=H,t(13,y)})}function je(H){It[H?"unshift":"push"](()=>{M=H,t(14,M)})}function J(H){It[H?"unshift":"push"](()=>{w=H,t(12,w)})}return s.$$set=H=>{e=Qe(Qe({},e),Ts(H)),t(25,i=kn(e,n)),"use"in H&&t(0,l=H.use),"class"in H&&t(1,c=H.class),"style"in H&&t(2,u=H.style),"tab"in H&&t(26,h=H.tab),"ripple"in H&&t(3,f=H.ripple),"stacked"in H&&t(4,m=H.stacked),"minWidth"in H&&t(5,_=H.minWidth),"indicatorSpanOnlyContent"in H&&t(6,d=H.indicatorSpanOnlyContent),"href"in H&&t(7,p=H.href),"content$use"in H&&t(8,g=H.content$use),"content$class"in H&&t(9,v=H.content$class),"component"in H&&t(10,j=H.component),"tag"in H&&t(11,O=H.tag),"$$scope"in H&&t(37,o=H.$$scope)},s.$$.update=()=>{s.$$.dirty[1]&1&&S&&S.setFocusOnActivate(F)},[l,c,u,f,m,_,d,p,g,v,j,O,w,y,M,b,x,T,I,Y,a,L,R,D,V,i,h,Q,Z,ee,ne,S,r,ue,X,je,J,o]}class W0 extends wn{constructor(e){super(),Tn(this,e,G0,V0,fn,{use:0,class:1,style:2,tab:26,ripple:3,stacked:4,minWidth:5,indicatorSpanOnlyContent:6,href:7,content$use:8,content$class:9,component:10,tag:11,activate:27,deactivate:28,focus:29,getElement:30},null,[-1,-1])}get activate(){return this.$$.ctx[27]}get deactivate(){return this.$$.ctx[28]}get focus(){return this.$$.ctx[29]}get getElement(){return this.$$.ctx[30]}}/**
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
 */var of={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},H0={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
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
 */var $o=function(){function s(e){this.adapter=e}return s}();/**
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
 */var X0=function(s){Gn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(n.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e}($o);/**
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
 */var q0=function(s){Gn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.getAnimatingScrollPosition=function(t,n){return t-n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-t,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,t),n.left)},e}($o);/**
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
 */var Y0=function(s){Gn(e,s);function e(){return s!==null&&s.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},e.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},e.prototype.getAnimatingScrollPosition=function(t,n){return t+n},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:t-n,right:0}},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,t),n.left)},e}($o);/**
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
 */var j0=function(s){Gn(e,s);function e(t){var n=s.call(this,Bn(Bn({},e.defaultAdapter),t))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return of},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return H0},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){t!==0&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(t!==0){var n=this.getIncrementScrollOperation(t);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL()){this.scrollToImplRTL(t);return}this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if(t==="none")return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=n[1],r=Sh(i.split(","),6);r[0],r[1],r[2],r[3];var o=r[4];return r[5],parseFloat(o)},e.prototype.clampScrollValue=function(t){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:t-n}},e.prototype.scrollToImpl=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue(t),r=i-n;this.animate({finalScrollPosition:i,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate(n)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=t+n,r=this.clampScrollValue(i),o=r-n;return{finalScrollPosition:r,scrollDelta:o}},e.prototype.animate=function(t){var n=this;t.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new q0(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),o=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),o===n?new Y0(this.adapter):new X0(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(As);/**
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
 */var _o;function K0(s,e){if(e===void 0&&(e=!0),e&&typeof _o<"u")return _o;var t=s.createElement("div");t.classList.add(of.SCROLL_TEST),s.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;return s.body.removeChild(t),e&&(_o=n),n}/**
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
 */var er=new Set;er.add(nt.ARROW_LEFT_KEY);er.add(nt.ARROW_RIGHT_KEY);er.add(nt.END_KEY);er.add(nt.HOME_KEY);er.add(nt.ENTER_KEY);er.add(nt.SPACE_KEY);var tr=new Map;tr.set(xn.ARROW_LEFT_KEYCODE,nt.ARROW_LEFT_KEY);tr.set(xn.ARROW_RIGHT_KEYCODE,nt.ARROW_RIGHT_KEY);tr.set(xn.END_KEYCODE,nt.END_KEY);tr.set(xn.HOME_KEYCODE,nt.HOME_KEY);tr.set(xn.ENTER_KEYCODE,nt.ENTER_KEY);tr.set(xn.SPACE_KEYCODE,nt.SPACE_KEY);var Z0=function(s){Gn(e,s);function e(t){var n=s.call(this,Bn(Bn({},e.defaultAdapter),t))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return xn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(t)||t===n)){var i;n!==-1&&(this.adapter.deactivateTabAtIndex(n),i=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,i),this.scrollIntoView(t),this.adapter.notifyTabActivated(t)}},e.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent(t);if(n!==void 0)if(this.isActivationKey(n)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(r);else{var i=this.determineTargetFromKey(r,n);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){if(this.indexIsInRange(t)){if(t===0){this.adapter.scrollTo(0);return}if(t===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(t);return}this.scrollIntoViewImpl(t)}},e.prototype.determineTargetFromKey=function(t,n){var i=this.isRTL(),r=this.adapter.getTabListLength()-1,o=n===nt.END_KEY,a=n===nt.ARROW_LEFT_KEY&&!i||n===nt.ARROW_RIGHT_KEY&&i,l=n===nt.ARROW_RIGHT_KEY&&!i||n===nt.ARROW_LEFT_KEY&&i,c=t;return o?c=r:a?c-=1:l?c+=1:c=0,c<0?c=r:c>r&&(c=0),c},e.prototype.calculateScrollIncrement=function(t,n,i,r){var o=this.adapter.getTabDimensionsAtIndex(n),a=o.contentLeft-i-r,l=o.contentRight-i,c=l-xn.EXTRA_SCROLL_AMOUNT,u=a+xn.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(c,0):Math.max(u,0)},e.prototype.calculateScrollIncrementRTL=function(t,n,i,r,o){var a=this.adapter.getTabDimensionsAtIndex(n),l=o-a.contentLeft-i,c=o-a.contentRight-i-r,u=c+xn.EXTRA_SCROLL_AMOUNT,h=l-xn.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(u,0):Math.min(h,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,n,i,r){var o=n.rootLeft-i,a=n.rootRight-i-r,l=o+a,c=o<0||l<0,u=a>0||l>0;return c?t-1:u?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,n,i,r,o){var a=o-n.rootLeft-r-i,l=o-n.rootRight-i,c=a+l,u=a>0||c>0,h=l<0||c<0;return u?t+1:h?t-1:-1},e.prototype.getKeyFromEvent=function(t){return er.has(t.key)?t.key:tr.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===nt.SPACE_KEY||t===nt.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.findAdjacentTabIndexClosestToEdge(t,r,n,i);if(this.indexIsInRange(o)){var a=this.calculateScrollIncrement(t,o,n,i);this.adapter.incrementScroll(a)}},e.prototype.scrollIntoViewImplRTL=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.adapter.getScrollContentWidth(),a=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,n,i,o);if(this.indexIsInRange(a)){var l=this.calculateScrollIncrementRTL(t,a,n,i,o);this.adapter.incrementScroll(l)}},e}(As);function J0(s){let e,t,n,i,r,o,a,l,c,u,h,f,m,_;const d=s[23].default,p=Hr(d,s,s[22],null);let g=[{class:i=ot({[s[6]]:!0,"mdc-tab-scroller__scroll-content":!0})},{style:r=Object.entries(s[14]).map(jc).join(" ")},Ft(s[16],"scrollContent$")],v={};for(let b=0;b<g.length;b+=1)v=Qe(v,g[b]);let w=[{class:a=ot({[s[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...s[12]})},{style:l=Object.entries(s[13]).map(Kc).join(" ")},Ft(s[16],"scrollArea$")],S={};for(let b=0;b<w.length;b+=1)S=Qe(S,w[b]);let y=[{class:u=ot({[s[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":s[2]==="start","mdc-tab-scroller--align-end":s[2]==="end","mdc-tab-scroller--align-center":s[2]==="center",...s[11]})},Mi(s[16],["scrollArea$","scrollContent$"])],M={};for(let b=0;b<y.length;b+=1)M=Qe(M,y[b]);return{c(){e=Te("div"),t=Te("div"),n=Te("div"),p&&p.c(),_t(n,v),_t(t,S),_t(e,M)},m(b,x){Re(b,e,x),be(e,t),be(t,n),p&&p.m(n,null),s[24](n),s[26](t),s[32](e),f=!0,m||(_=[tn(o=vi.call(null,n,s[5])),vt(n,"transitionend",s[25]),tn(c=vi.call(null,t,s[3])),vt(t,"wheel",s[27],{passive:!0}),vt(t,"touchstart",s[28],{passive:!0}),vt(t,"pointerdown",s[29]),vt(t,"mousedown",s[30]),vt(t,"keydown",s[31]),tn(h=vi.call(null,e,s[0])),tn(s[15].call(null,e))],m=!0)},p(b,x){p&&p.p&&(!f||x[0]&4194304)&&Xr(p,d,b,b[22],f?Yr(d,b[22],x,null):qr(b[22]),null),_t(n,v=on(g,[(!f||x[0]&64&&i!==(i=ot({[b[6]]:!0,"mdc-tab-scroller__scroll-content":!0})))&&{class:i},(!f||x[0]&16384&&r!==(r=Object.entries(b[14]).map(jc).join(" ")))&&{style:r},x[0]&65536&&Ft(b[16],"scrollContent$")])),o&&Nn(o.update)&&x[0]&32&&o.update.call(null,b[5]),_t(t,S=on(w,[(!f||x[0]&4112&&a!==(a=ot({[b[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...b[12]})))&&{class:a},(!f||x[0]&8192&&l!==(l=Object.entries(b[13]).map(Kc).join(" ")))&&{style:l},x[0]&65536&&Ft(b[16],"scrollArea$")])),c&&Nn(c.update)&&x[0]&8&&c.update.call(null,b[3]),_t(e,M=on(y,[(!f||x[0]&2054&&u!==(u=ot({[b[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":b[2]==="start","mdc-tab-scroller--align-end":b[2]==="end","mdc-tab-scroller--align-center":b[2]==="center",...b[11]})))&&{class:u},x[0]&65536&&Mi(b[16],["scrollArea$","scrollContent$"])])),h&&Nn(h.update)&&x[0]&1&&h.update.call(null,b[0])},i(b){f||(de(p,b),f=!0)},o(b){Se(p,b),f=!1},d(b){b&&De(e),p&&p.d(b),s[24](null),s[26](null),s[32](null),m=!1,Ms(_)}}}const jc=([s,e])=>`${s}: ${e};`,Kc=([s,e])=>`${s}: ${e};`;function Q0(s,e,t){const n=["use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"];let i=kn(e,n),{$$slots:r={},$$scope:o}=e;const{matches:a}=yh,l=Cs(ws());let{use:c=[]}=e,{class:u=""}=e,{align:h=void 0}=e,{scrollArea$use:f=[]}=e,{scrollArea$class:m=""}=e,{scrollContent$use:_=[]}=e,{scrollContent$class:d=""}=e,p,g,v,w,S={},y={},M={},b={};En(()=>(t(8,g=new j0({eventTargetMatchesSelector:(J,H)=>a(J,H),addClass:x,removeClass:T,addScrollAreaClass:F,setScrollAreaStyleProperty:I,setScrollContentStyleProperty:Y,getScrollContentStyleValue:j,setScrollAreaScrollLeft:J=>t(9,v.scrollLeft=J,v),getScrollAreaScrollLeft:()=>v.scrollLeft,getScrollContentOffsetWidth:()=>w.offsetWidth,getScrollAreaOffsetWidth:()=>v.offsetWidth,computeScrollAreaClientRect:()=>v.getBoundingClientRect(),computeScrollContentClientRect:()=>w.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>K0(document)})),g.init(),()=>{g.destroy()}));function x(J){S[J]||t(11,S[J]=!0,S)}function T(J){(!(J in S)||S[J])&&t(11,S[J]=!1,S)}function F(J){y[J]||t(12,y[J]=!0,y)}function I(J,H){M[J]!=H&&(H===""||H==null?(delete M[J],t(13,M)):t(13,M[J]=H,M))}function Y(J,H){b[J]!=H&&(H===""||H==null?(delete b[J],t(14,b)):t(14,b[J]=H,b))}function j(J){return J in b?b[J]:getComputedStyle(w).getPropertyValue(J)}function O(){return g.getScrollPosition()}function U(){return w.offsetWidth}function L(J){g.incrementScroll(J)}function R(J){g.scrollTo(J)}function D(){return p}function N(J){It[J?"unshift":"push"](()=>{w=J,t(10,w)})}const V=J=>g&&g.handleTransitionEnd(J);function Q(J){It[J?"unshift":"push"](()=>{v=J,t(9,v)})}const Z=()=>g&&g.handleInteraction(),ee=()=>g&&g.handleInteraction(),ne=()=>g&&g.handleInteraction(),ue=()=>g&&g.handleInteraction(),X=()=>g&&g.handleInteraction();function je(J){It[J?"unshift":"push"](()=>{p=J,t(7,p)})}return s.$$set=J=>{e=Qe(Qe({},e),Ts(J)),t(16,i=kn(e,n)),"use"in J&&t(0,c=J.use),"class"in J&&t(1,u=J.class),"align"in J&&t(2,h=J.align),"scrollArea$use"in J&&t(3,f=J.scrollArea$use),"scrollArea$class"in J&&t(4,m=J.scrollArea$class),"scrollContent$use"in J&&t(5,_=J.scrollContent$use),"scrollContent$class"in J&&t(6,d=J.scrollContent$class),"$$scope"in J&&t(22,o=J.$$scope)},[c,u,h,f,m,_,d,p,g,v,w,S,y,M,b,l,i,O,U,L,R,D,o,r,N,V,Q,Z,ee,ne,ue,X,je]}class $0 extends wn{constructor(e){super(),Tn(this,e,Q0,J0,fn,{use:0,class:1,align:2,scrollArea$use:3,scrollArea$class:4,scrollContent$use:5,scrollContent$class:6,getScrollPosition:17,getScrollContentWidth:18,incrementScroll:19,scrollTo:20,getElement:21},null,[-1,-1])}get getScrollPosition(){return this.$$.ctx[17]}get getScrollContentWidth(){return this.$$.ctx[18]}get incrementScroll(){return this.$$.ctx[19]}get scrollTo(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}}function Zc(s,e,t){const n=s.slice();return n[28]=e[t],n}const ev=s=>({tab:s&4}),Jc=s=>({tab:s[28]});function Qc(s,e){let t,n;const i=e[20].default,r=Hr(i,e,e[23],Jc);return{key:s,first:null,c(){t=Es(),r&&r.c(),this.first=t},m(o,a){Re(o,t,a),r&&r.m(o,a),n=!0},p(o,a){e=o,r&&r.p&&(!n||a&8388612)&&Xr(r,i,e,e[23],n?Yr(i,e[23],a,ev):qr(e[23]),Jc)},i(o){n||(de(r,o),n=!0)},o(o){Se(r,o),n=!1},d(o){o&&De(t),r&&r.d(o)}}}function tv(s){let e=[],t=new Map,n,i,r=s[2];const o=a=>a[3](a[28]);for(let a=0;a<r.length;a+=1){let l=Zc(s,r,a),c=o(l);t.set(c,e[a]=Qc(c,l))}return{c(){for(let a=0;a<e.length;a+=1)e[a].c();n=Es()},m(a,l){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(a,l);Re(a,n,l),i=!0},p(a,l){l&8388620&&(r=a[2],Lt(),e=ph(e,l,o,1,a,r,t,n.parentNode,mh,Qc,n,Zc),Rt())},i(a){if(!i){for(let l=0;l<r.length;l+=1)de(e[l]);i=!0}},o(a){for(let l=0;l<e.length;l+=1)Se(e[l]);i=!1},d(a){for(let l=0;l<e.length;l+=1)e[l].d(a);a&&De(n)}}}function nv(s){let e,t,n,i,r,o,a;const l=[Ft(s[10],"tabScroller$")];let c={$$slots:{default:[tv]},$$scope:{ctx:s}};for(let f=0;f<l.length;f+=1)c=Qe(c,l[f]);t=new $0({props:c}),s[21](t);let u=[{class:n=ot({[s[1]]:!0,"mdc-tab-bar":!0})},{role:"tablist"},Mi(s[10],["tabScroller$"])],h={};for(let f=0;f<u.length;f+=1)h=Qe(h,u[f]);return{c(){e=Te("div"),Yt(t.$$.fragment),_t(e,h)},m(f,m){Re(f,e,m),jt(t,e,null),s[22](e),r=!0,o||(a=[tn(i=vi.call(null,e,s[0])),tn(s[7].call(null,e)),vt(e,"SMUITab:mount",s[8]),vt(e,"SMUITab:unmount",s[9]),vt(e,"SMUITab:interacted",function(){Nn(s[4]&&s[4].handleTabInteraction.bind(s[4]))&&(s[4]&&s[4].handleTabInteraction.bind(s[4])).apply(this,arguments)}),vt(e,"keydown",function(){Nn(s[4]&&s[4].handleKeyDown.bind(s[4]))&&(s[4]&&s[4].handleKeyDown.bind(s[4])).apply(this,arguments)})],o=!0)},p(f,[m]){s=f;const _=m&1024?on(l,[hs(Ft(s[10],"tabScroller$"))]):{};m&8388612&&(_.$$scope={dirty:m,ctx:s}),t.$set(_),_t(e,h=on(u,[(!r||m&2&&n!==(n=ot({[s[1]]:!0,"mdc-tab-bar":!0})))&&{class:n},{role:"tablist"},m&1024&&Mi(s[10],["tabScroller$"])])),i&&Nn(i.update)&&m&1&&i.update.call(null,s[0])},i(f){r||(de(t.$$.fragment,f),r=!0)},o(f){Se(t.$$.fragment,f),r=!1},d(f){f&&De(e),s[21](null),Kt(t),s[22](null),o=!1,Ms(a)}}}function iv(s,e,t){const n=["use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","scrollIntoView","getElement"];let i=kn(e,n),{$$slots:r={},$$scope:o}=e;const a=Cs(ws());let{use:l=[]}=e,{class:c=""}=e,{tabs:u=[]}=e,{key:h=L=>L}=e,{focusOnActivate:f=!0}=e,{focusOnProgrammatic:m=!1}=e,{useAutomaticActivation:_=!0}=e,{active:d=void 0}=e,p,g,v,w=u.indexOf(d),S={},y=new WeakMap,M=!1;pa("SMUI:tab:focusOnActivate",f),pa("SMUI:tab:initialActive",d),En(()=>(t(4,g=new Z0({scrollTo:L=>v.scrollTo(L),incrementScroll:L=>v.incrementScroll(L),getScrollPosition:()=>v.getScrollPosition(),getScrollContentWidth:()=>v.getScrollContentWidth(),getOffsetWidth:()=>j().offsetWidth,isRTL:()=>getComputedStyle(j()).getPropertyValue("direction")==="rtl",setActiveTab:L=>{t(11,d=u[L]),t(17,w=L),g.activateTab(L)},activateTabAtIndex:(L,R)=>{var D;return(D=T(u[L]))===null||D===void 0?void 0:D.activate(R,M)},deactivateTabAtIndex:L=>{var R;return(R=T(u[L]))===null||R===void 0?void 0:R.deactivate()},focusTabAtIndex:L=>{var R;return(R=T(u[L]))===null||R===void 0?void 0:R.focus()},getTabIndicatorClientRectAtIndex:L=>{var R,D;return(D=(R=T(u[L]))===null||R===void 0?void 0:R.computeIndicatorClientRect())!==null&&D!==void 0?D:new DOMRect},getTabDimensionsAtIndex:L=>{var R,D;return(D=(R=T(u[L]))===null||R===void 0?void 0:R.computeDimensions())!==null&&D!==void 0?D:{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var L;for(let R=0;R<u.length;R++)if(!((L=T(u[R]))===null||L===void 0)&&L.active)return R;return-1},getFocusedTabIndex:()=>{const L=u.map(D=>{var N;return(N=T(D))===null||N===void 0?void 0:N.element}),R=document.activeElement;return L.indexOf(R)},getIndexOfTabById:L=>u.indexOf(L),getTabListLength:()=>u.length,notifyTabActivated:L=>sa(j(),"SMUITabBar:activated",{index:L},void 0,!0)})),g.init(),()=>{g.destroy()}));function b(L){const R=L.detail;F(R.tabId,R)}function x(L){const R=L.detail;I(R.tabId)}function T(L){return L instanceof Object?y.get(L):S[L]}function F(L,R){L instanceof Object?(y.set(L,R),t(19,y)):(t(18,S[L]=R,S),t(18,S))}function I(L){L instanceof Object?(y.delete(L),t(19,y)):(delete S[L],t(18,S))}function Y(L){g.scrollIntoView(L)}function j(){return p}function O(L){It[L?"unshift":"push"](()=>{v=L,t(6,v)})}function U(L){It[L?"unshift":"push"](()=>{p=L,t(5,p)})}return s.$$set=L=>{e=Qe(Qe({},e),Ts(L)),t(10,i=kn(e,n)),"use"in L&&t(0,l=L.use),"class"in L&&t(1,c=L.class),"tabs"in L&&t(2,u=L.tabs),"key"in L&&t(3,h=L.key),"focusOnActivate"in L&&t(12,f=L.focusOnActivate),"focusOnProgrammatic"in L&&t(13,m=L.focusOnProgrammatic),"useAutomaticActivation"in L&&t(14,_=L.useAutomaticActivation),"active"in L&&t(11,d=L.active),"$$scope"in L&&t(23,o=L.$$scope)},s.$$.update=()=>{if(s.$$.dirty&141332&&d!==u[w]&&(t(17,w=u.indexOf(d)),g&&(M=!m,g.activateTab(w),M=!1)),s.$$.dirty&917508&&u.length){const L=u[0]instanceof Object?y.get(u[0]):S[u[0]];L&&L.forceAccessible(w===-1)}s.$$.dirty&16400&&g&&g.setUseAutomaticActivation(_)},[l,c,u,h,g,p,v,a,b,x,i,d,f,m,_,Y,j,w,S,y,r,O,U,o]}class rv extends wn{constructor(e){super(),Tn(this,e,iv,nv,fn,{use:0,class:1,tabs:2,key:3,focusOnActivate:12,focusOnProgrammatic:13,useAutomaticActivation:14,active:11,scrollIntoView:15,getElement:16})}get scrollIntoView(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}function $c(s,e,t){const n=s.slice();return n[9]=e[t],n[11]=t,n}function sv(s){let e,t=s[12]+"",n;return{c(){e=Te("span"),n=pi(t),we(e,"class","tab-label svelte-m73jfl")},m(i,r){Re(i,e,r),be(e,n)},p(i,r){r&4096&&t!==(t=i[12]+"")&&Dr(n,t)},d(i){i&&De(e)}}}function av(s){let e,t;return e=new W0({props:{class:"home_p2-tab",tab:s[12],minWidth:!0,$$slots:{default:[sv]},$$scope:{ctx:s}}}),e.$on("click",s[4]),{c(){Yt(e.$$.fragment)},m(n,i){jt(e,n,i),t=!0},p(n,i){const r={};i&4096&&(r.tab=n[12]),i&12288&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){Kt(e,n)}}}function ov(s){let e,t,n=s[9].skill+"",i,r,o,a=s[9].score+"",l,c,u,h;return{c(){e=Te("div"),t=Te("div"),i=pi(n),r=He(),o=Te("div"),l=pi(a),c=He(),we(t,"class","skill-name svelte-m73jfl"),we(o,"class","skill-score svelte-m73jfl"),we(e,"class","skills-list-item svelte-m73jfl")},m(f,m){Re(f,e,m),be(e,t),be(t,i),be(e,r),be(e,o),be(o,l),be(e,c),h=!0},p(f,m){(!h||m&2)&&n!==(n=f[9].skill+"")&&Dr(i,n),(!h||m&2)&&a!==(a=f[9].score+"")&&Dr(l,a)},i(f){h||(Ei(()=>{h&&(u||(u=bt(e,Mt,{delay:50,duration:50*s[11]},!0)),u.run(1))}),h=!0)},o(f){u||(u=bt(e,Mt,{delay:50,duration:50*s[11]},!1)),u.run(0),h=!1},d(f){f&&De(e),f&&u&&u.end()}}}function lv(s){let e,t,n=s[9].tab+"",i,r,o,a;return{c(){e=Te("div"),t=Te("div"),i=pi(n),r=He(),we(t,"class","skill-tab"),we(e,"class","skills-list-tab svelte-m73jfl")},m(l,c){Re(l,e,c),be(e,t),be(t,i),be(e,r),a=!0},p(l,c){(!a||c&2)&&n!==(n=l[9].tab+"")&&Dr(i,n)},i(l){a||(Ei(()=>{a&&(o||(o=bt(e,Mt,{delay:50,duration:50*s[11]},!0)),o.run(1))}),a=!0)},o(l){o||(o=bt(e,Mt,{delay:50,duration:50*s[11]},!1)),o.run(0),a=!1},d(l){l&&De(e),l&&o&&o.end()}}}function eu(s){let e,t,n,i;const r=[lv,ov],o=[];function a(l,c){return l[9].tab?0:1}return e=a(s),t=o[e]=r[e](s),{c(){t.c(),n=Es()},m(l,c){o[e].m(l,c),Re(l,n,c),i=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(Lt(),Se(o[u],1,1,()=>{o[u]=null}),Rt(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),de(t,1),t.m(n.parentNode,n))},i(l){i||(de(t),i=!0)},o(l){Se(t),i=!1},d(l){o[e].d(l),l&&De(n)}}}function tu(s){let e,t,n=s[1],i=[];for(let o=0;o<n.length;o+=1)i[o]=eu($c(s,n,o));const r=o=>Se(i[o],1,1,()=>{i[o]=null});return{c(){e=Te("div");for(let o=0;o<i.length;o+=1)i[o].c();we(e,"class","skills-list svelte-m73jfl")},m(o,a){Re(o,e,a);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(e,null);t=!0},p(o,a){if(a&2){n=o[1];let l;for(l=0;l<n.length;l+=1){const c=$c(o,n,l);i[l]?(i[l].p(c,a),de(i[l],1)):(i[l]=eu(c),i[l].c(),de(i[l],1),i[l].m(e,null))}for(Lt(),l=n.length;l<i.length;l+=1)r(l);Rt()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)de(i[a]);t=!0}},o(o){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)Se(i[a]);t=!1},d(o){o&&De(e),Cu(i,o)}}}function cv(s){let e,t,n,i,r=s[1],o,a;function l(h){s[7](h)}let c={class:"home_p2-tabbar",tabs:s[3],$$slots:{default:[av,({tab:h})=>({12:h}),({tab:h})=>h?4096:0]},$$scope:{ctx:s}};s[0]!==void 0&&(c.active=s[0]),t=new rv({props:c}),It.push(()=>gh(t,"active",l));let u=tu(s);return{c(){e=Te("div"),Yt(t.$$.fragment),i=He(),u.c(),we(e,"class","page page_1 svelte-m73jfl")},m(h,f){Re(h,e,f),jt(t,e,null),be(e,i),u.m(e,null),a=!0},p(h,[f]){s=h;const m={};f&12288&&(m.$$scope={dirty:f,ctx:s}),!n&&f&1&&(n=!0,m.active=s[0],_h(()=>n=!1)),t.$set(m),f&2&&fn(r,r=s[1])?(Lt(),Se(u,1,1,ha),Rt(),u=tu(s),u.c(),de(u,1),u.m(e,null)):u.p(s,f)},i(h){a||(de(t.$$.fragment,h),de(u),Ei(()=>{a&&(o||(o=bt(e,Mt,{delay:s[2],duration:dt},!0)),o.run(1))}),a=!0)},o(h){Se(t.$$.fragment,h),Se(u),o||(o=bt(e,Mt,{delay:s[2],duration:dt},!1)),o.run(0),a=!1},d(h){h&&De(e),Kt(t),u.d(h),h&&o&&o.end()}}}function uv(s,e,t){let n,i,r;ln(s,Mn,f=>t(5,i=f)),ln(s,ti,f=>t(6,r=f));const o=la;let a=o[0],l=Bc[a],c=null;const u=()=>{const f=a;setTimeout(()=>{if(f!==a){const m=l.length;t(1,l=[]),c&&(clearTimeout(c),c=null),c=setTimeout(()=>{t(1,l=Bc[a])},m*50)}},20)};En(()=>{Mn.set(!1)});function h(f){a=f,t(0,a)}return s.$$.update=()=>{s.$$.dirty&96&&t(2,n=r===1?i?0:dt:0)},[a,l,n,o,u,i,r,h]}class fv extends wn{constructor(e){super(),Tn(this,e,uv,cv,fn,{})}}function hv(s){let e,t,n;return{c(){e=Te("div"),e.innerHTML='<div class="title svelte-1fokusu">欢迎来到mahiru-forever的个人空间333</div>',we(e,"class","page page_1 svelte-1fokusu")},m(i,r){Re(i,e,r),n=!0},p(i,[r]){s=i},i(i){n||(Ei(()=>{n&&(t||(t=bt(e,Mt,{delay:s[0],duration:dt},!0)),t.run(1))}),n=!0)},o(i){t||(t=bt(e,Mt,{delay:s[0],duration:dt},!1)),t.run(0),n=!1},d(i){i&&De(e),i&&t&&t.end()}}}function dv(s,e,t){let n,i,r;return ln(s,Mn,o=>t(1,i=o)),ln(s,ti,o=>t(2,r=o)),En(()=>{Mn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===2?i?0:dt:0)},[n,i,r]}class pv extends wn{constructor(e){super(),Tn(this,e,dv,hv,fn,{})}}function mv(s){let e,t,n;return{c(){e=Te("div"),e.innerHTML='<div class="title svelte-1fokusu">欢迎来到mahiru-forever的个人空间444</div>',we(e,"class","page page_1 svelte-1fokusu")},m(i,r){Re(i,e,r),n=!0},p(i,[r]){s=i},i(i){n||(Ei(()=>{n&&(t||(t=bt(e,Mt,{delay:s[0],duration:dt},!0)),t.run(1))}),n=!0)},o(i){t||(t=bt(e,Mt,{delay:s[0],duration:dt},!1)),t.run(0),n=!1},d(i){i&&De(e),i&&t&&t.end()}}}function gv(s,e,t){let n,i,r;return ln(s,Mn,o=>t(1,i=o)),ln(s,ti,o=>t(2,r=o)),En(()=>{Mn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===3?i?0:dt:0)},[n,i,r]}class _v extends wn{constructor(e){super(),Tn(this,e,gv,mv,fn,{})}}function vv(s){let e,t,n;return{c(){e=Te("div"),e.innerHTML='<div class="title svelte-1fokusu">欢迎来到mahiru-forever的个人空间555</div>',we(e,"class","page page_1 svelte-1fokusu")},m(i,r){Re(i,e,r),n=!0},p(i,[r]){s=i},i(i){n||(Ei(()=>{n&&(t||(t=bt(e,Mt,{delay:s[0],duration:dt},!0)),t.run(1))}),n=!0)},o(i){t||(t=bt(e,Mt,{delay:s[0],duration:dt},!1)),t.run(0),n=!1},d(i){i&&De(e),i&&t&&t.end()}}}function xv(s,e,t){let n,i,r;return ln(s,Mn,o=>t(1,i=o)),ln(s,ti,o=>t(2,r=o)),En(()=>{Mn.set(!1)}),s.$$.update=()=>{s.$$.dirty&6&&t(0,n=r===4?i?0:dt:0)},[n,i,r]}class Sv extends wn{constructor(e){super(),Tn(this,e,xv,vv,fn,{})}}const yv=(s,e,t)=>new bi({uniforms:{uTime:{value:0},uTexture:{value:s},uDepthTexture:{value:e},uMouse:{value:t}},vertexShader:`
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
    `});function Jn(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function lf(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},zr={duration:.5,overwrite:!1,delay:0},el,St,it,rn=1e8,We=1/rn,Oo=Math.PI*2,bv=Oo/4,Mv=0,cf=Math.sqrt,wv=Math.cos,Tv=Math.sin,ct=function(e){return typeof e=="string"},Je=function(e){return typeof e=="function"},ri=function(e){return typeof e=="number"},tl=function(e){return typeof e>"u"},Vn=function(e){return typeof e=="object"},Ot=function(e){return e!==!1},nl=function(){return typeof window<"u"},ra=function(e){return Je(e)||ct(e)},uf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yt=Array.isArray,No=/(?:-?\.?\d|\.)+/gi,ff=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Mr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hf=/[+-]=-?[.\d]+/,df=/[^,'"\[\]\s]+/gi,Ev=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qe,$t,zo,il,Zt={},ga={},pf,mf=function(e){return(ga=Qi(e,Zt))&&Ut},rl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},_a=function(e,t){return!t&&console.warn(e)},gf=function(e,t){return e&&(Zt[e]=t)&&ga&&(ga[e]=t)||Zt},gs=function(){return 0},Av={suppressEvents:!0,isStart:!0,kill:!1},ca={suppressEvents:!0,kill:!1},Cv={suppressEvents:!0},sl={},Si=[],Uo={},_f,Wt={},xo={},nu=30,ua=[],al="",ol=function(e){var t=e[0],n,i;if(Vn(t)||Je(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ua.length;i--&&!ua[i].targetTest(t););n=ua[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Vf(e[i],n)))||e.splice(i,1);return e},qi=function(e){return e._gsap||ol(sn(e))[0]._gsap},vf=function(e,t,n){return(n=e[t])&&Je(n)?e[t]():tl(n)&&e.getAttribute&&e.getAttribute(t)||n},Nt=function(e,t){return(e=e.split(",")).forEach(t)||e},$e=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},Cr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Lv=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},va=function(){var e=Si.length,t=Si.slice(0),n,i;for(Uo={},Si.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xf=function(e,t,n,i){Si.length&&!St&&va(),e.render(t,n,i||St&&t<0&&(e._initted||e._startAt)),Si.length&&!St&&va()},Sf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(df).length<2?t:ct(e)?e.trim():e},yf=function(e){return e},un=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Rv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Qi=function(e,t){for(var n in t)e[n]=t[n];return e},iu=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vn(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},xa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ls=function(e){var t=e.parent||qe,n=e.keyframes?Rv(yt(e.keyframes)):un;if(Ot(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Dv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},bf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Da=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},wi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Yi=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Pv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ko=function(e,t,n,i){return e._startAt&&(St?e._startAt.revert(ca):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Iv=function s(e){return!e||e._ts&&s(e.parent)},ru=function(e){return e._repeat?Ur(e._tTime,e=e.duration()+e._rDelay)*e:0},Ur=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Sa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pa=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||We)||0))},Ia=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pa(e),n._dirty||Yi(n,e)),e},Mf=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Sa(e.rawTime(),t),(!t._dur||Fs(0,t.totalDuration(),n)-t._tTime>We)&&t.render(n,!0)),Yi(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-We}},In=function(e,t,n,i){return t.parent&&wi(t),t._start=ft((ri(n)?n:n||e!==qe?Qt(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bf(e,t,"_first","_last",e._sort?"_start":0),Bo(t)||(e._recent=t),i||Mf(e,t),e._ts<0&&Ia(e,e._tTime),e},wf=function(e,t){return(Zt.ScrollTrigger||rl("scrollTrigger",t))&&Zt.ScrollTrigger.create(t,e)},Tf=function(e,t,n,i,r){if(cl(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!St&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_f!==Xt.frame)return Si.push(e),e._lazy=[r,i],1},Fv=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Bo=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ov=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Fv(e)&&!(!e._initted&&Bo(e))||(e._ts<0||e._dp._ts<0)&&!Bo(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Fs(0,e._tDur,t),u=Ur(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ur(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||St||i||e._zTime===We||!t&&e._zTime){if(!e._initted&&Tf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?We:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ko(e,t,n,!0),e._onUpdate&&!n&&an(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&an(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&wi(e,1),!n&&!St&&(an(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Nv=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},kr=function(e,t,n,i){var r=e._repeat,o=ft(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:ft(o*(r+1)+e._rDelay*r):o,a>0&&!i&&Ia(e,e._tTime=e._tDur*a),e.parent&&Pa(e),n||Yi(e.parent,e),e},su=function(e){return e instanceof Pt?Yi(e):kr(e,e._dur)},zv={_start:0,endTime:gs,totalDuration:gs},Qt=function s(e,t,n){var i=e.labels,r=e._recent||zv,o=e.duration()>=rn?r.endTime(!1):e._dur,a,l,c;return ct(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(yt(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},cs=function(e,t,n){var i=ri(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ot(l.vars.inherit)&&l.parent;o.immediateRender=Ot(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new st(t[0],o,t[r+1])},Ai=function(e,t){return e||e===0?t(e):t},Fs=function(e,t,n){return n<e?e:n>t?t:n},xt=function(e,t){return!ct(e)||!(t=Ev.exec(e))?"":t[1]},Uv=function(e,t,n){return Ai(n,function(i){return Fs(e,t,i)})},Vo=[].slice,Ef=function(e,t){return e&&Vn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vn(e[0]))&&!e.nodeType&&e!==$t},kv=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ct(i)&&!t||Ef(i,1)?(r=n).push.apply(r,sn(i)):n.push(i)})||n},sn=function(e,t,n){return it&&!t&&it.selector?it.selector(e):ct(e)&&!n&&(zo||!Br())?Vo.call((t||il).querySelectorAll(e),0):yt(e)?kv(e,n):Ef(e)?Vo.call(e,0):e?[e]:[]},Go=function(e){return e=sn(e)[0]||_a("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return sn(t,n.querySelectorAll?n:n===e?_a("Invalid scope")||il.createElement("div"):e)}},Af=function(e){return e.sort(function(){return .5-Math.random()})},Cf=function(e){if(Je(e))return e;var t=Vn(e)?e:{each:e},n=ji(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return ct(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,m,_){var d=(_||t).length,p=o[d],g,v,w,S,y,M,b,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,rn])[1],!T){for(b=-rn;b<(b=_[T++].getBoundingClientRect().left)&&T<d;);T--}for(p=o[d]=[],g=l?Math.min(T,d)*u-.5:i%T,v=T===rn?0:l?d*h/T-.5:i/T|0,b=0,x=rn,M=0;M<d;M++)w=M%T-g,S=v-(M/T|0),p[M]=y=c?Math.abs(c==="y"?S:w):cf(w*w+S*S),y>b&&(b=y),y<x&&(x=y);i==="random"&&Af(p),p.max=b-x,p.min=x,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(T>d?d-1:c?c==="y"?d/T:T:Math.max(T,d/T))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=xt(t.amount||t.each)||0,n=n&&d<0?Uf(n):n}return d=(p[f]-p.min)/p.max||0,ft(p.b+(n?n(d):d)*p.v)+p.u}},Wo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ri(n)?0:xt(n))}},Lf=function(e,t){var n=yt(e),i,r;return!n&&Vn(e)&&(i=n=e.radius||rn,e.values?(e=sn(e.values),(r=!ri(e[0]))&&(i*=i)):e=Wo(e.increment)),Ai(t,n?Je(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=rn,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-a,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||ri(o)?u:u+xt(o)}:Wo(e))},Rf=function(e,t,n,i){return Ai(yt(e)?!t:n===!0?!!(n=0):!i,function(){return yt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Bv=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},Vv=function(e,t){return function(n){return e(parseFloat(n))+(t||xt(n))}},Gv=function(e,t,n){return Pf(e,t,0,1,n)},Df=function(e,t,n){return Ai(n,function(i){return e[~~t(i)]})},Wv=function s(e,t,n){var i=t-e;return yt(e)?Df(e,s(0,e.length),t):Ai(n,function(r){return(i+(r-e)%i)%i+e})},Hv=function s(e,t,n){var i=t-e,r=i*2;return yt(e)?Df(e,s(0,e.length-1),t):Ai(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},_s=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?df:No),n+=e.substr(t,i-t)+Rf(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Pf=function(e,t,n,i,r){var o=t-e,a=i-n;return Ai(r,function(l){return n+((l-e)/o*a||0)})},Xv=function s(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var o=ct(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(yt(e)&&!yt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var d=Math.min(f,~~_);return u[d](_-d)},n=t}else i||(e=Qi(yt(e)?[]:{},e));if(!u){for(l in t)ll.call(a,e,l,"get",t[l]);r=function(_){return hl(_,a)||(o?e.p:e)}}}return Ai(n,r)},au=function(e,t,n){var i=e.labels,r=rn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},an=function(e,t,n){var i=e.vars,r=i[t],o=it,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Si.length&&va(),a&&(it=a),u=l?r.apply(c,l):r.call(c),it=o,u},as=function(e){return wi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!St),e.progress()<1&&an(e,"onInterrupt"),e},wr,If=[],Ff=function(e){if(!nl()){If.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Je(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:gs,render:hl,add:ll,kill:ox,modifier:ax,rawVars:0},o={targetTest:0,get:0,getSetter:fl,aliases:{},register:0};if(Br(),e!==i){if(Wt[t])return;un(i,un(xa(e,r),o)),Qi(i.prototype,Qi(r,xa(e,o))),Wt[i.prop=t]=i,e.targetTest&&(ua.push(i),sl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gf(t,i),e.register&&e.register(Ut,i,zt)},Ge=255,os={aqua:[0,Ge,Ge],lime:[0,Ge,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ge],navy:[0,0,128],white:[Ge,Ge,Ge],olive:[128,128,0],yellow:[Ge,Ge,0],orange:[Ge,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ge,0,0],pink:[Ge,192,203],cyan:[0,Ge,Ge],transparent:[Ge,Ge,Ge,0]},So=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ge+.5|0},Of=function(e,t,n){var i=e?ri(e)?[e>>16,e>>8&Ge,e&Ge]:0:os.black,r,o,a,l,c,u,h,f,m,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),os[e])i=os[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ge,i&Ge,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ge,e&Ge]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(No),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=So(l+1/3,r,o),i[1]=So(l,r,o),i[2]=So(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(ff),n&&i.length<4&&(i[3]=1),i}else i=e.match(No)||os.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Ge,o=i[1]/Ge,a=i[2]/Ge,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(o-a)/m+(o<a?6:0):h===o?(a-r)/m+2:(r-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Nf=function(e){var t=[],n=[],i=-1;return e.split(yi).forEach(function(r){var o=r.match(Mr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},ou=function(e,t,n){var i="",r=(e+i).match(yi),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Of(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Nf(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(yi,"1").split(Mr),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(yi),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},yi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in os)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),qv=/hsl[a]?\(/,zf=function(e){var t=e.join(" "),n;if(yi.lastIndex=0,yi.test(t))return n=qv.test(t),e[1]=ou(e[1],n),e[0]=ou(e[0],n,Nf(e[1])),!0},vs,Xt=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,m,_=function d(p){var g=s()-i,v=p===!0,w,S,y,M;if(g>e&&(n+=g-t),i+=g,y=i-n,w=y-o,(w>0||v)&&(M=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,o+=w+(w>=r?4:r-w),S=1),v||(l=c(d)),S)for(m=0;m<a.length;m++)a[m](y,f,M,p)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){pf&&(!zo&&nl()&&($t=zo=window,il=$t.document||{},Zt.gsap=Ut,($t.gsapVersions||($t.gsapVersions=[])).push(Ut.version),mf(ga||$t.GreenSockGlobals||!$t.gsap&&$t||{}),u=$t.requestAnimationFrame,If.forEach(Ff)),l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},vs=1,_(2))},sleep:function(){(u?$t.cancelAnimationFrame:clearTimeout)(l),vs=0,c=gs},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,g,v){var w=g?function(S,y,M,b){p(S,y,M,b),h.remove(w)}:p;return h.remove(p),a[v?"unshift":"push"](w),Br(),w},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&m>=g&&m--},_listeners:a},h}(),Br=function(){return!vs&&Xt.wake()},Pe={},Yv=/^[\d.\-M][\d.\-,\s]/,jv=/["']/g,Kv=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(jv,"").trim():+c,i=l.substr(a+1).trim();return t},Zv=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Jv=function(e){var t=(e+"").split("("),n=Pe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Kv(t[1])]:Zv(e).split(",").map(Sf)):Pe._CE&&Yv.test(e)?Pe._CE("",e):n},Uf=function(e){return function(t){return 1-e(1-t)}},kf=function s(e,t){for(var n=e._first,i;n;)n instanceof Pt?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ji=function(e,t){return e&&(Je(e)?e:Pe[e]||Jv(e))||t},nr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Nt(e,function(a){Pe[a]=Zt[a]=r,Pe[o=a.toLowerCase()]=n;for(var l in r)Pe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Pe[a+"."+l]=r[l]}),r},Bf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},yo=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Oo*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Tv((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Bf(a);return r=Oo/r,l.config=function(c,u){return s(e,c,u)},l},bo=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Bf(n);return i.config=function(r){return s(e,r)},i};Nt("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;nr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Pe.Linear.easeNone=Pe.none=Pe.Linear.easeIn;nr("Elastic",yo("in"),yo("out"),yo());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};nr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);nr("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});nr("Circ",function(s){return-(cf(1-s*s)-1)});nr("Sine",function(s){return s===1?1:-wv(s*bv)+1});nr("Back",bo("in"),bo("out"),bo());Pe.SteppedEase=Pe.steps=Zt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-We;return function(a){return((i*Fs(0,o,a)|0)+r)*n}}};zr.ease=Pe["quad.out"];Nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return al+=s+","+s+"Params,"});var Vf=function(e,t){this.id=Mv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vf,this.set=t?t.getSetter:fl},Vr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,kr(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),vs||Xt.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,kr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Br(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,n),!r._dp||r.parent||Mf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===We||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ru(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ru(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ur(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-We?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Sa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-We?0:this._rts,this.totalTime(Fs(-Math.abs(this._delay),this._tDur,i),!0),Pa(this),Pv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Br(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==We&&(this._tTime-=We)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ot(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Cv);var i=St;return St=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),St=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,su(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,su(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Qt(this,n),Ot(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ot(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-We:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-We,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-We)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=Je(n)?n:yf,a=function(){var c=i.then;i.then=null,Je(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){as(this)},s}();un(Vr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-We,_prom:0,_ps:!1,_rts:1});var Pt=function(s){lf(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Ot(n.sortChildren),qe&&In(n.parent||qe,Jn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&wf(Jn(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return cs(0,arguments,this),this},t.from=function(i,r,o){return cs(1,arguments,this),this},t.fromTo=function(i,r,o,a){return cs(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,ls(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new st(i,r,Qt(this,o),1),this},t.call=function(i,r,o){return In(this,st.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new st(i,o,Qt(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,ls(o).immediateRender=Ot(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,ls(a).immediateRender=Ot(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ft(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,_,d,p,g,v,w,S,y,M,b;if(this!==qe&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,S=this._start,w=this._ts,g=!w,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(M=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=ft(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),y=Ur(this._tTime,p),!a&&this._tTime&&y!==d&&this._tTime-y*p-this._dur<=0&&(y=d),M&&d&1&&(f=c-f,b=1),d!==y&&!this._lock){var x=M&&y&1,T=x===(M&&d&1);if(d<y&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(b?0:ft(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;kf(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Nv(this,ft(a),ft(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&!d&&(an(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(_=m._next,(m._act||f>=m._start)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!g){v=0,_&&(u+=this._zTime=-We);break}}m=_}else{m=this._last;for(var F=i<0?i:f;m;){if(_=m._prev,(m._act||F<=m._end)&&m._ts&&v!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(F-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(F-m._start)*m._ts,r,o||St&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!g){v=0,_&&(u+=this._zTime=F?-We:We);break}}m=_}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-We)._zTime=f>=a?1:-1,this._ts))return this._start=S,Pa(this),this.render(i,r,o);this._onUpdate&&!r&&an(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&wi(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(an(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ri(r)||(r=Qt(this,r,i)),!(i instanceof Vr)){if(yt(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ct(i))return this.addLabel(i,r);if(Je(i))i=st.delayedCall(0,i);else return this}return this!==i?In(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-rn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof st?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return ct(i)?this.removeLabel(i):Je(i)?this.killTweensOf(i):(Da(this,i),i===this._recent&&(this._recent=this._last),Yi(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Xt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Qt(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=st.delayedCall(0,r||gs,o);return a.data="isPause",this._hasPause=1,In(this,a,Qt(this,i))},t.removePause=function(i){var r=this._first;for(i=Qt(this,i);r;)r._start===i&&r.data==="isPause"&&wi(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)mi!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=sn(i),l=this._first,c=ri(r),u;l;)l instanceof st?Lv(l._targets,a)&&(c?(!mi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Qt(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,_=st.to(o,un({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||We,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&kr(_,p,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,un({startAt:{time:Qt(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),au(this,Qt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),au(this,Qt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+We)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Yi(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Yi(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=rn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,In(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;kr(o,o===qe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(qe._ts&&(xf(qe,Sa(i,qe)),_f=Xt.frame),Xt.frame>=nu){nu+=qt.autoSleep||120;var r=qe._first;if((!r||!r._ts)&&qt.autoSleep&&Xt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Xt.sleep()}}},e}(Vr);un(Pt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qv=function(e,t,n,i,r,o,a){var l=new zt(this._pt,e,t,0,1,Yf,null,r),c=0,u=0,h,f,m,_,d,p,g,v;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=_s(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),f=n.match(vo)||[];h=vo.exec(i);)_=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:_.charAt(1)==="="?Cr(p,_)-p:parseFloat(_)-p,m:m&&m<4?Math.round:0},c=vo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(hf.test(i)||g)&&(l.e=0),this._pt=l,l},ll=function(e,t,n,i,r,o,a,l,c,u){Je(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:Je(h)?c?e[t.indexOf("set")||!Je(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=Je(h)?c?ix:Xf:ul,_;if(ct(i)&&(~i.indexOf("random(")&&(i=_s(i)),i.charAt(1)==="="&&(_=Cr(f,i)+(xt(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Ho)return!isNaN(f*i)&&i!==""?(_=new zt(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?sx:qf,0,m),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&rl(t,i),Qv.call(this,e,t,f,i,m,l||qt.stringFilter,c))},$v=function(e,t,n,i,r){if(Je(e)&&(e=us(e,r,t,n,i)),!Vn(e)||e.style&&e.nodeType||yt(e)||uf(e))return ct(e)?us(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=us(e[a],r,t,n,i);return o},Gf=function(e,t,n,i,r,o){var a,l,c,u;if(Wt[e]&&(a=new Wt[e]).init(r,a.rawVars?t[e]:$v(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new zt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==wr))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},mi,Ho,cl=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,_=i.keyframes,d=i.autoRevert,p=e._dur,g=e._startAt,v=e._targets,w=e.parent,S=w&&w.data==="nested"?w.vars.targets:v,y=e._overwrite==="auto"&&!el,M=e.timeline,b,x,T,F,I,Y,j,O,U,L,R,D,N;if(M&&(!_||!r)&&(r="none"),e._ease=ji(r,zr.ease),e._yEase=m?Uf(ji(m===!0?r:m,zr.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!M&&!!i.runBackwards,!M||_&&!i.stagger){if(O=v[0]?qi(v[0]).harness:0,D=O&&i[O.prop],b=xa(i,sl),g&&(g._zTime<0&&g.progress(1),t<0&&f&&a&&!d?g.render(-1,!0):g.revert(f&&p?ca:Av),g._lazy=0),o){if(wi(e._startAt=st.set(v,un({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!g&&Ot(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(St||!a&&!d)&&e._startAt.revert(ca),a&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!g){if(t&&(a=!1),T=un({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Ot(l),immediateRender:a,stagger:0,parent:w},b),D&&(T[O.prop]=D),wi(e._startAt=st.set(v,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(St?e._startAt.revert(ca):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,We,We);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&Ot(l)||l&&!p,x=0;x<v.length;x++){if(I=v[x],j=I._gsap||ol(v)[x]._gsap,e._ptLookup[x]=L={},Uo[j.id]&&Si.length&&va(),R=S===v?x:S.indexOf(I),O&&(U=new O).init(I,D||b,e,R,S)!==!1&&(e._pt=F=new zt(e._pt,I,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(V){L[V]=F}),U.priority&&(Y=1)),!O||D)for(T in b)Wt[T]&&(U=Gf(T,b,e,R,I,S))?U.priority&&(Y=1):L[T]=F=ll.call(e,I,T,"get",b[T],R,S,0,i.stringFilter);e._op&&e._op[x]&&e.kill(I,e._op[x]),y&&e._pt&&(mi=e,qe.killTweensOf(I,L,e.globalTime(t)),N=!e.parent,mi=0),e._pt&&l&&(Uo[j.id]=1)}Y&&jf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,_&&t<=0&&M.render(rn,!0,!0)},ex=function(e,t,n,i,r,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ho=1,e.vars[t]="+=0",cl(e,a),Ho=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=$e(n)+xt(u.e)),u.b&&(u.b=c.s+xt(u.b))},tx=function(e,t){var n=e[0]?qi(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Qi({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},nx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(yt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},us=function(e,t,n,i,r){return Je(e)?e.call(t,n,i,r):ct(e)&&~e.indexOf("random(")?_s(e):e},Wf=al+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hf={};Nt(Wf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Hf[s]=1});var st=function(s){lf(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:ls(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,_=l.keyframes,d=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,v=i.parent||qe,w=(yt(n)||uf(n)?ri(n[0]):"length"in i)?[n]:sn(n),S,y,M,b,x,T,F,I;if(a._targets=w.length?ol(w):_a("GSAP target "+n+" not found. https://greensock.com",!qt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,_||f||ra(c)||ra(u)){if(i=a.vars,S=a.timeline=new Pt({data:"nested",defaults:d||{},targets:v&&v.data==="nested"?v.vars.targets:w}),S.kill(),S.parent=S._dp=Jn(a),S._start=0,f||ra(c)||ra(u)){if(b=w.length,F=f&&Cf(f),Vn(f))for(x in f)~Wf.indexOf(x)&&(I||(I={}),I[x]=f[x]);for(y=0;y<b;y++)M=xa(i,Hf),M.stagger=0,g&&(M.yoyoEase=g),I&&Qi(M,I),T=w[y],M.duration=+us(c,Jn(a),y,T,w),M.delay=(+us(u,Jn(a),y,T,w)||0)-a._delay,!f&&b===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),S.to(T,M,F?F(y,T,w):0),S._ease=Pe.none;S.duration()?c=u=0:a.timeline=0}else if(_){ls(un(S.vars.defaults,{ease:"none"})),S._ease=ji(_.ease||i.ease||"none");var Y=0,j,O,U;if(yt(_))_.forEach(function(L){return S.to(w,L,">")}),S.duration();else{M={};for(x in _)x==="ease"||x==="easeEach"||nx(x,_[x],M,_.easeEach);for(x in M)for(j=M[x].sort(function(L,R){return L.t-R.t}),Y=0,y=0;y<j.length;y++)O=j[y],U={ease:O.e,duration:(O.t-(y?j[y-1].t:0))/100*c},U[x]=O.v,S.to(w,U,Y),Y+=U.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return m===!0&&!el&&(mi=Jn(a),qe.killTweensOf(w),mi=0),In(v,Jn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===ft(v._time)&&Ot(h)&&Iv(Jn(a))&&v.data!=="nested")&&(a._tTime=-We,a.render(Math.max(0,-u)||0)),p&&wf(Jn(a),p),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-We&&!u?l:i<We?0:i,f,m,_,d,p,g,v,w,S;if(!c)Ov(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,w=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,o);if(f=ft(h%d),h===l?(_=this._repeat,f=c):(_=~~(h/d),_&&_===h/d&&(f=c,_--),f>c&&(f=c)),g=this._yoyo&&_&1,g&&(S=this._yEase,f=c-f),p=Ur(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;_!==p&&(w&&this._yEase&&kf(w,g),this.vars.repeatRefresh&&!g&&!this._lock&&(this._lock=o=1,this.render(ft(d*_),!0).invalidate()._lock=0))}if(!this._initted){if(Tf(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(f/c),this._from&&(this.ratio=v=1-v),f&&!a&&!r&&!_&&(an(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(v,m.d),m=m._next;w&&w.render(i<0?i:!f&&g?-We:w._dur*w._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&ko(this,i,r,o),an(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&an(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ko(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&wi(this,1),!r&&!(u&&!a)&&(h||a||g)&&(an(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a){vs||Xt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||cl(this,l),c=this._ease(l/this._dur),ex(this,i,r,o,a,c,l)?this.resetTo(i,r,o,a):(Ia(this,0),this.parent||bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?as(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,mi&&mi.vars.overwrite!==!0)._first||as(this),this.parent&&o!==this.timeline.totalDuration()&&kr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?sn(i):a,c=this._ptLookup,u=this._pt,h,f,m,_,d,p,g;if((!r||r==="all")&&Dv(a,l))return r==="all"&&(this._pt=0),as(this);for(h=this._op=this._op||[],r!=="all"&&(ct(r)&&(d={},Nt(r,function(v){return d[v]=1}),r=d),r=tx(a,r)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],r==="all"?(h[g]=r,_=f,m={}):(m=h[g]=h[g]||{},_=r);for(d in _)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Da(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&as(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return cs(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return cs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return qe.killTweensOf(i,r,o)},e}(Vr);un(st.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Nt("staggerTo,staggerFrom,staggerFromTo",function(s){st[s]=function(){var e=new Pt,t=Vo.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var ul=function(e,t,n){return e[t]=n},Xf=function(e,t,n){return e[t](n)},ix=function(e,t,n,i){return e[t](i.fp,n)},rx=function(e,t,n){return e.setAttribute(t,n)},fl=function(e,t){return Je(e[t])?Xf:tl(e[t])&&e.setAttribute?rx:ul},qf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},sx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Yf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},hl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ax=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},ox=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Da(this,t,"_pt"):t.dep||(n=1),t=i;return!n},lx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},jf=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},zt=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||qf,this.d=l||this,this.set=c||ul,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=lx,this.m=n,this.mt=r,this.tween=i},s}();Nt(al+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return sl[s]=1});Zt.TweenMax=Zt.TweenLite=st;Zt.TimelineLite=Zt.TimelineMax=Pt;qe=new Pt({sortChildren:!1,defaults:zr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});qt.stringFilter=zf;var Gr=[],fa={},cx=[],lu=0,Mo=function(e){return(fa[e]||cx).map(function(t){return t()})},Xo=function(){var e=Date.now(),t=[];e-lu>2&&(Mo("matchMediaInit"),Gr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=$t.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Mo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),lu=e,Mo("matchMedia"))},Kf=function(){function s(t,n){this.selector=n&&Go(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Je(n)&&(r=i,i=n,n=Je);var o=this,a=function(){var c=it,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=Go(r)),it=o,h=i.apply(o,arguments),Je(h)&&o._r.push(h),it=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Je?a(o):n?o[n]=a:a},e.ignore=function(n){var i=it;it=null,n(this),it=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof st&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Vr)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=Gr.indexOf(this);~a&&Gr.splice(a,1)}},e.revert=function(n){this.kill(n||{})},s}(),ux=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(n,i,r){Vn(n)||(n={matches:n});var o=new Kf(0,r||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=$t.matchMedia(n[c]),l&&(Gr.indexOf(o)<0&&Gr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Xo):l.addEventListener("change",Xo)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ff(i)})},timeline:function(e){return new Pt(e)},getTweensOf:function(e,t){return qe.getTweensOf(e,t)},getProperty:function(e,t,n,i){ct(e)&&(e=sn(e)[0]);var r=qi(e||{}).get,o=n?yf:Sf;return n==="native"&&(n=""),e&&(t?o((Wt[t]&&Wt[t].get||r)(e,t,n,i)):function(a,l,c){return o((Wt[a]&&Wt[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=sn(e),e.length>1){var i=e.map(function(u){return Ut.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Wt[t],a=qi(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;wr._pt=0,h.init(e,n?u+n:u,wr,0,[e]),h.render(1,h),wr._pt&&hl(1,wr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Ut.to(e,Qi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return qe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ji(e.ease,zr.ease)),iu(zr,e||{})},config:function(e){return iu(qt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Wt[a]&&!Zt[a]&&_a(t+" effect requires "+a+" plugin.")}),xo[t]=function(a,l,c){return n(sn(a),un(l||{},r),c)},o&&(Pt.prototype[t]=function(a,l,c){return this.add(xo[t](a,Vn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Pe[e]=ji(t)},parseEase:function(e,t){return arguments.length?ji(e,t):Pe},getById:function(e){return qe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Pt(e),i,r;for(n.smoothChildTiming=Ot(e.smoothChildTiming),qe.remove(n),n._dp=0,n._time=n._tTime=qe._time,i=qe._first;i;)r=i._next,(t||!(!i._dur&&i instanceof st&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=r;return In(qe,n,0),n},context:function(e,t){return e?new Kf(e,t):it},matchMedia:function(e){return new ux(e)},matchMediaRefresh:function(){return Gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xo()},addEventListener:function(e,t){var n=fa[e]||(fa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=fa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Wv,wrapYoyo:Hv,distribute:Cf,random:Rf,snap:Lf,normalize:Gv,getUnit:xt,clamp:Uv,splitColor:Of,toArray:sn,selector:Go,mapRange:Pf,pipe:Bv,unitize:Vv,interpolate:Xv,shuffle:Af},install:mf,effects:xo,ticker:Xt,updateRoot:Pt.updateRoot,plugins:Wt,globalTimeline:qe,core:{PropTween:zt,globals:gf,Tween:st,Timeline:Pt,Animation:Vr,getCache:qi,_removeLinkedListItem:Da,reverting:function(){return St},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return el=e}}};Nt("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ya[s]=st[s]});Xt.add(Pt.updateRoot);wr=ya.to({},{duration:0});var fx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},hx=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=fx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},wo=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(ct(r)&&(l={},Nt(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}hx(a,r)}}}},Ut=ya.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)St?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},wo("roundProps",Wo),wo("modifiers"),wo("snap",Lf))||ya;st.version=Pt.version=Ut.version="3.11.5";pf=1;nl()&&Br();Pe.Power0;Pe.Power1;Pe.Power2;Pe.Power3;Pe.Power4;Pe.Linear;Pe.Quad;Pe.Cubic;Pe.Quart;Pe.Quint;Pe.Strong;Pe.Elastic;Pe.Back;Pe.SteppedEase;Pe.Bounce;Pe.Sine;Pe.Expo;Pe.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cu,gi,Lr,dl,Vi,uu,pl,dx=function(){return typeof window<"u"},si={},Ni=180/Math.PI,Rr=Math.PI/180,Sr=Math.atan2,fu=1e8,ml=/([A-Z])/g,px=/(left|right|width|margin|padding|x)/i,mx=/[\s,\(]\S/,On={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qo=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_x=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Zf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Jf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xx=function(e,t,n){return e.style[t]=n},Sx=function(e,t,n){return e.style.setProperty(t,n)},yx=function(e,t,n){return e._gsap[t]=n},bx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Mx=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},wx=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ye="transform",yn=Ye+"Origin",Tx=function s(e,t){var n=this,i=this.target,r=i.style;if(e in si){if(this.tfm=this.tfm||{},e!=="transform")e=On[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=$n(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:$n(i,e);else return On.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(Ye)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yn,t,"")),e=Ye}(r||t)&&this.props.push(e,t,r[e])},Qf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Ex=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(ml,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=pl(),(!r||!r.isStart)&&!n[Ye]&&(Qf(n),i.uncache=1)}},$f=function(e,t){var n={target:e,props:[],revert:Ex,save:Tx};return e._gsap||Ut.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},eh,Yo=function(e,t){var n=gi.createElementNS?gi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gi.createElement(e);return n.style?n:gi.createElement(e)},Un=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(ml,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Wr(t)||t,1)||""},hu="O,Moz,ms,Ms,Webkit".split(","),Wr=function(e,t,n){var i=t||Vi,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(hu[o]+e in r););return o<0?null:(o===3?"ms":o>=0?hu[o]:"")+e},jo=function(){dx()&&window.document&&(cu=window,gi=cu.document,Lr=gi.documentElement,Vi=Yo("div")||{style:{}},Yo("div"),Ye=Wr(Ye),yn=Ye+"Origin",Vi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",eh=!!Wr("perspective"),pl=Ut.core.reverting,dl=1)},To=function s(e){var t=Yo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(Lr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Lr.removeChild(t),this.style.cssText=r,o},du=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},th=function(e){var t;try{t=e.getBBox()}catch{t=To.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===To||(t=To.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+du(e,["x","cx","x1"])||0,y:+du(e,["y","cy","y1"])||0,width:0,height:0}:t},nh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&th(e))},xs=function(e,t){if(t){var n=e.style;t in si&&t!==yn&&(t=Ye),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(ml,"-$1").toLowerCase())):n.removeAttribute(t)}},_i=function(e,t,n,i,r,o){var a=new zt(e._pt,t,n,0,1,o?Jf:Zf);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},pu={deg:1,rad:1,turn:1},Ax={grid:1,flex:1},Ti=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Vi.style,l=px.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",_,d,p,g;return i===o||!r||pu[i]||pu[o]?r:(o!=="px"&&!f&&(r=s(e,t,n,"px")),g=e.getCTM&&nh(e),(m||o==="%")&&(si[t]||~t.indexOf("adius"))?(_=g?e.getBBox()[l?"width":"height"]:e[u],$e(m?r/_*h:r/100*_)):(a[l?"width":"height"]=h+(f?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===gi||!d.appendChild)&&(d=gi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Xt.time&&!p.uncache?$e(r/p.width*h):((m||o==="%")&&!Ax[Un(d,"display")]&&(a.position=Un(e,"position")),d===e&&(a.position="static"),d.appendChild(Vi),_=Vi[u],d.removeChild(Vi),a.position="absolute",l&&m&&(p=qi(d),p.time=Xt.time,p.width=d[u]),$e(f?_*r/h:_&&r?h/_*r:0))))},$n=function(e,t,n,i){var r;return dl||jo(),t in On&&t!=="transform"&&(t=On[t],~t.indexOf(",")&&(t=t.split(",")[0])),si[t]&&t!=="transform"?(r=ys(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Ma(Un(e,yn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ba[t]&&ba[t](e,t,n)||Un(e,t)||vf(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ti(e,t,r,n)+n:r},Cx=function(e,t,n,i){if(!n||n==="none"){var r=Wr(t,e,1),o=r&&Un(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Un(e,"borderTopColor"))}var a=new zt(this._pt,e.style,t,0,1,Yf),l=0,c=0,u,h,f,m,_,d,p,g,v,w,S,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Un(e,t)||i,e.style[t]=n),u=[n,i],zf(u),n=u[0],i=u[1],f=n.match(Mr)||[],y=i.match(Mr)||[],y.length){for(;h=Mr.exec(i);)p=h[0],v=i.substring(l,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,S=d.substr((m+"").length),p.charAt(1)==="="&&(p=Cr(m,p)+S),g=parseFloat(p),w=p.substr((g+"").length),l=Mr.lastIndex-w.length,w||(w=w||qt.units[t]||S,l===i.length&&(i+=w,a.e+=w)),S!==w&&(m=Ti(e,t,d,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:m,c:g-m,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Jf:Zf;return hf.test(i)&&(a.e=0),this._pt=a,a},mu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=mu[n]||n,t[1]=mu[i]||i,t.join(" ")},Rx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],si[a]&&(l=1,a=a==="transformOrigin"?yn:Ye),xs(n,a);l&&(xs(n,Ye),o&&(o.svg&&n.removeAttribute("transform"),ys(n,1),o.uncache=1,Qf(i)))}},ba={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new zt(e._pt,t,n,0,0,Rx);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ss=[1,0,0,1,0,0],ih={},rh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},gu=function(e){var t=Un(e,Ye);return rh(t)?Ss:t.substr(7).match(ff).map($e)},gl=function(e,t){var n=e._gsap||qi(e),i=e.style,r=gu(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ss:r):(r===Ss&&!e.offsetParent&&e!==Lr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Lr.appendChild(e)),r=gu(e),l?i.display=l:xs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Lr.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ko=function(e,t,n,i,r,o){var a=e._gsap,l=r||gl(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,m=l[0],_=l[1],d=l[2],p=l[3],g=l[4],v=l[5],w=t.split(" "),S=parseFloat(w[0])||0,y=parseFloat(w[1])||0,M,b,x,T;n?l!==Ss&&(b=m*p-_*d)&&(x=S*(p/b)+y*(-d/b)+(d*v-p*g)/b,T=S*(-_/b)+y*(m/b)-(m*v-_*g)/b,S=x,y=T):(M=th(e),S=M.x+(~w[0].indexOf("%")?S/100*M.width:S),y=M.y+(~(w[1]||w[0]).indexOf("%")?y/100*M.height:y)),i||i!==!1&&a.smooth?(g=S-c,v=y-u,a.xOffset=h+(g*m+v*d)-g,a.yOffset=f+(g*_+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=y,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[yn]="0px 0px",o&&(_i(o,a,"xOrigin",c,S),_i(o,a,"yOrigin",u,y),_i(o,a,"xOffset",h,a.xOffset),_i(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+y)},ys=function(e,t){var n=e._gsap||new Vf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Un(e,yn)||"0",u,h,f,m,_,d,p,g,v,w,S,y,M,b,x,T,F,I,Y,j,O,U,L,R,D,N,V,Q,Z,ee,ne,ue;return u=h=f=d=p=g=v=w=S=0,m=_=1,n.svg=!!(e.getCTM&&nh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ye]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ye]!=="none"?l[Ye]:"")),i.scale=i.rotate=i.translate="none"),b=gl(e,n.svg),n.svg&&(n.uncache?(D=e.getBBox(),c=n.xOrigin-D.x+"px "+(n.yOrigin-D.y)+"px",R=""):R=!t&&e.getAttribute("data-svg-origin"),Ko(e,R||c,!!R||n.originIsAbsolute,n.smooth!==!1,b)),y=n.xOrigin||0,M=n.yOrigin||0,b!==Ss&&(I=b[0],Y=b[1],j=b[2],O=b[3],u=U=b[4],h=L=b[5],b.length===6?(m=Math.sqrt(I*I+Y*Y),_=Math.sqrt(O*O+j*j),d=I||Y?Sr(Y,I)*Ni:0,v=j||O?Sr(j,O)*Ni+d:0,v&&(_*=Math.abs(Math.cos(v*Rr))),n.svg&&(u-=y-(y*I+M*j),h-=M-(y*Y+M*O))):(ue=b[6],ee=b[7],V=b[8],Q=b[9],Z=b[10],ne=b[11],u=b[12],h=b[13],f=b[14],x=Sr(ue,Z),p=x*Ni,x&&(T=Math.cos(-x),F=Math.sin(-x),R=U*T+V*F,D=L*T+Q*F,N=ue*T+Z*F,V=U*-F+V*T,Q=L*-F+Q*T,Z=ue*-F+Z*T,ne=ee*-F+ne*T,U=R,L=D,ue=N),x=Sr(-j,Z),g=x*Ni,x&&(T=Math.cos(-x),F=Math.sin(-x),R=I*T-V*F,D=Y*T-Q*F,N=j*T-Z*F,ne=O*F+ne*T,I=R,Y=D,j=N),x=Sr(Y,I),d=x*Ni,x&&(T=Math.cos(x),F=Math.sin(x),R=I*T+Y*F,D=U*T+L*F,Y=Y*T-I*F,L=L*T-U*F,I=R,U=D),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,g=180-g),m=$e(Math.sqrt(I*I+Y*Y+j*j)),_=$e(Math.sqrt(L*L+ue*ue)),x=Sr(U,L),v=Math.abs(x)>2e-4?x*Ni:0,S=ne?1/(ne<0?-ne:ne):0),n.svg&&(R=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rh(Un(e,Ye)),R&&e.setAttribute("transform",R))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(m*=-1,v+=d<=0?180:-180,d+=d<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=$e(m),n.scaleY=$e(_),n.rotation=$e(d)+a,n.rotationX=$e(p)+a,n.rotationY=$e(g)+a,n.skewX=v+a,n.skewY=w+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[yn]=Ma(c)),n.xOffset=n.yOffset=0,n.force3D=qt.force3D,n.renderTransform=n.svg?Px:eh?sh:Dx,n.uncache=0,n},Ma=function(e){return(e=e.split(" "))[0]+" "+e[1]},Eo=function(e,t,n){var i=xt(t);return $e(parseFloat(t)+parseFloat(Ti(e,"x",n+"px",i)))+i},Dx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sh(e,t)},Pi="0deg",is="0px",Ii=") ",sh=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,_=n.scaleX,d=n.scaleY,p=n.transformPerspective,g=n.force3D,v=n.target,w=n.zOrigin,S="",y=g==="auto"&&e&&e!==1||g===!0;if(w&&(h!==Pi||u!==Pi)){var M=parseFloat(u)*Rr,b=Math.sin(M),x=Math.cos(M),T;M=parseFloat(h)*Rr,T=Math.cos(M),o=Eo(v,o,b*T*-w),a=Eo(v,a,-Math.sin(M)*-w),l=Eo(v,l,x*T*-w+w)}p!==is&&(S+="perspective("+p+Ii),(i||r)&&(S+="translate("+i+"%, "+r+"%) "),(y||o!==is||a!==is||l!==is)&&(S+=l!==is||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ii),c!==Pi&&(S+="rotate("+c+Ii),u!==Pi&&(S+="rotateY("+u+Ii),h!==Pi&&(S+="rotateX("+h+Ii),(f!==Pi||m!==Pi)&&(S+="skew("+f+", "+m+Ii),(_!==1||d!==1)&&(S+="scale("+_+", "+d+Ii),v.style[Ye]=S||"translate(0, 0)"},Px=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,_=n.xOrigin,d=n.yOrigin,p=n.xOffset,g=n.yOffset,v=n.forceCSS,w=parseFloat(o),S=parseFloat(a),y,M,b,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Rr,c*=Rr,y=Math.cos(l)*h,M=Math.sin(l)*h,b=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=Rr,T=Math.tan(c-u),T=Math.sqrt(1+T*T),b*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,M*=T)),y=$e(y),M=$e(M),b=$e(b),x=$e(x)):(y=h,x=f,M=b=0),(w&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(w=Ti(m,"x",o,"px"),S=Ti(m,"y",a,"px")),(_||d||p||g)&&(w=$e(w+_-(_*y+d*b)+p),S=$e(S+d-(_*M+d*x)+g)),(i||r)&&(T=m.getBBox(),w=$e(w+i/100*T.width),S=$e(S+r/100*T.height)),T="matrix("+y+","+M+","+b+","+x+","+w+","+S+")",m.setAttribute("transform",T),v&&(m.style[Ye]=T)},Ix=function(e,t,n,i,r){var o=360,a=ct(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ni:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*fu)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*fu)%o-~~(c/o)*o)),e._pt=f=new zt(e._pt,t,n,i,c,gx),f.e=u,f.u="deg",e._props.push(n),f},_u=function(e,t){for(var n in t)e[n]=t[n];return e},Fx=function(e,t,n){var i=_u({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,m,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ye]=t,a=ys(n,1),xs(n,Ye),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ye],o[Ye]=t,a=ys(n,1),o[Ye]=c);for(l in si)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(m=xt(c),_=xt(u),h=m!==_?Ti(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new zt(e._pt,a,l,h,f-h,qo),e._pt.u=_||0,e._props.push(l));_u(a,i)};Nt("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});ba[e>1?"border"+s:s]=function(a,l,c,u,h){var f,m;if(arguments.length<4)return f=o.map(function(_){return $n(a,_,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(_,d){return m[_]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,m,h)}});var ah={name:"css",register:jo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,m,_,d,p,g,v,w,S,y,M,b,x;dl||jo(),this.styles=this.styles||$f(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Wt[d]&&Gf(d,t,n,i,e,r)))){if(m=typeof u,_=ba[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=_s(u)),_)_(this,e,d,u,n)&&(b=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",yi.lastIndex=0,yi.test(c)||(p=xt(c),g=xt(u)),g?p!==g&&(c=Ti(e,d,c,g)+g):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,d),o.push(d),x.push(d,0,a[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],ct(c)&&~c.indexOf("random(")&&(c=_s(c)),xt(c+"")||(c+=qt.units[d]||xt($n(e,d))||""),(c+"").charAt(1)==="="&&(c=$n(e,d))):c=$n(e,d),f=parseFloat(c),v=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),d in On&&(d==="autoAlpha"&&(f===1&&$n(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,a.visibility),_i(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=On[d],~d.indexOf(",")&&(d=d.split(",")[0]))),w=d in si,w){if(this.styles.save(d),S||(y=e._gsap,y.renderTransform&&!t.parseTransform||ys(e,t.parseTransform),M=t.smoothOrigin!==!1&&y.smooth,S=this._pt=new zt(this._pt,a,Ye,0,1,y.renderTransform,y,0,-1),S.dep=1),d==="scale")this._pt=new zt(this._pt,y,"scaleY",y.scaleY,(v?Cr(y.scaleY,v+h):h)-y.scaleY||0,qo),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(yn,0,a[yn]),u=Lx(u),y.svg?Ko(e,u,0,M,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==y.zOrigin&&_i(this,y,"zOrigin",y.zOrigin,g),_i(this,a,d,Ma(c),Ma(u)));continue}else if(d==="svgOrigin"){Ko(e,u,1,M,0,this);continue}else if(d in ih){Ix(this,y,d,f,v?Cr(f,v+u):u);continue}else if(d==="smoothOrigin"){_i(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){Fx(this,u,e);continue}}else d in a||(d=Wr(d)||d);if(w||(h||h===0)&&(f||f===0)&&!mx.test(u)&&d in a)p=(c+"").substr((f+"").length),h||(h=0),g=xt(u)||(d in qt.units?qt.units[d]:p),p!==g&&(f=Ti(e,d,c,g)),this._pt=new zt(this._pt,w?y:a,d,f,(v?Cr(f,v+h):h)-f,!w&&(g==="px"||d==="zIndex")&&t.autoRound!==!1?vx:qo),this._pt.u=g||0,p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=_x);else if(d in a)Cx.call(this,e,d,c,v?v+u:u);else if(d in e)this.add(e,d,c||e[d],v?v+u:u,i,r);else if(d!=="parseTransform"){rl(d,u);continue}w||(d in a?x.push(d,0,a[d]):x.push(d,1,c||e[d])),o.push(d)}}b&&jf(this)},render:function(e,t){if(t.tween._time||!pl())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$n,aliases:On,getSetter:function(e,t,n){var i=On[t];return i&&i.indexOf(",")<0&&(t=i),t in si&&t!==yn&&(e._gsap.x||$n(e,"x"))?n&&uu===n?t==="scale"?bx:yx:(uu=n||{})&&(t==="scale"?Mx:wx):e.style&&!tl(e.style[t])?xx:~t.indexOf("-")?Sx:fl(e,t)},core:{_removeProperty:xs,_getMatrix:gl}};Ut.utils.checkPrefix=Wr;Ut.core.getStyleSaver=$f;(function(s,e,t,n){var i=Nt(s+","+e+","+t,function(r){si[r]=1});Nt(e,function(r){qt.units[r]="deg",ih[r]=1}),On[i[13]]=s+","+e,Nt(n,function(r){var o=r.split(":");On[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){qt.units[s]="px"});Ut.registerPlugin(ah);var Gi=Ut.registerPlugin(ah)||Ut;Gi.core.Tween;let bs=!1;const fs=Au([]),Ox=()=>{if(bs)return;const[s,e]=Lu(fs);console.log(s,e),s&&e&&(bs=!0,Gi.to(s.position,Tr(window.innerHeight,()=>Ta(s))),Gi.to(e.position,Tr(0,wa)))},Nx=s=>({mouseMoveEvent:e=>{const t=s.mouseMoveEvent();t.x=e.clientX/window.innerWidth*2-1,t.y=-(e.clientY/window.innerHeight)*2+1},wheelEvent:async e=>{if(bs||!s.wheelEvent(e))return;await Ru();const[n,i]=Lu(fs);n&&i&&(bs=!0,e.deltaY>0?(Gi.to(n.position,Tr(window.innerHeight,()=>Ta(n))),Gi.to(i.position,Tr(0,wa))):(Gi.to(i.position,Tr(0,()=>Ta(n))),Gi.to(n.position,Tr(-window.innerHeight,wa))))},resizeEvent:()=>{const{camera:e,renderer:t}=s.resizeEvent();e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio)}});function wa(){bs=!1}function Ta(s){s.position.set(0,-9999,0)}function Tr(s,e=()=>{}){return{duration:E0,x:0,y:s,z:0,repeat:0,ease:"power2.inOut",onComplete:wa}}const zx=s=>{const e={onLoad:function(){s("success")},onProgress:function(t,n,i){const r=(n/i*100).toFixed(2);s("pending",{value:r,num:n,total:i})},onError:function(t){console.log("图片加载出现错误"),console.log(t),s("fail",t)}};return new rf(e.onLoad,e.onProgress,e.onError)};function vu(s,e,t){const n=s.slice();return n[22]=e[t],n[24]=t,n}function xu(s){let e,t,n,i,r,o,a,l,c,u,h;return o=new T0({props:{class:"home_linear-progress",progress:Number(s[3])/100,buffer:Math.min((s[4]+1)/s[5],1)}}),{c(){e=Te("div"),t=Te("div"),n=pi("资源正在加载中"),i=pi(s[2]),r=He(),Yt(o.$$.fragment),a=He(),l=Te("div"),c=pi(s[3]),u=pi("%"),we(t,"class","loading-text svelte-1xcbzqc"),we(l,"class","loading-text svelte-1xcbzqc"),we(e,"class","loading svelte-1xcbzqc")},m(f,m){Re(f,e,m),be(e,t),be(t,n),be(t,i),be(e,r),jt(o,e,null),be(e,a),be(e,l),be(l,c),be(l,u),h=!0},p(f,m){(!h||m&4)&&Dr(i,f[2]);const _={};m&8&&(_.progress=Number(f[3])/100),m&48&&(_.buffer=Math.min((f[4]+1)/f[5],1)),o.$set(_),(!h||m&8)&&Dr(c,f[3])},i(f){h||(de(o.$$.fragment,f),h=!0)},o(f){Se(o.$$.fragment,f),h=!1},d(f){f&&De(e),Kt(o)}}}function Su(s){let e,t,n;function i(){return s[11](s[24])}return{c(){e=Te("li"),we(e,"class","anchor-item svelte-1xcbzqc"),we(e,"role","presentation"),Sl(e,"active",s[6]===s[24])},m(r,o){Re(r,e,o),t||(n=vt(e,"click",i),t=!0)},p(r,o){s=r,o&64&&Sl(e,"active",s[6]===s[24])},d(r){r&&De(e),t=!1,n()}}}function yu(s){let e,t,n;return{c(){e=Te("div"),we(e,"class","tip svelte-1xcbzqc")},m(i,r){Re(i,e,r),n=!0},p(i,r){},i(i){n||(Ei(()=>{n&&(t||(t=bt(e,Mt,{duration:dt},!0)),t.run(1))}),n=!0)},o(i){t||(t=bt(e,Mt,{duration:dt},!1)),t.run(0),n=!1},d(i){i&&De(e),i&&t&&t.end()}}}function bu(s){let e,t;return e=new L0({}),e.$on("jump",s[8]),{c(){Yt(e.$$.fragment)},m(n,i){jt(e,n,i),t=!0},p:ha,i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){Kt(e,n)}}}function Mu(s){let e,t;return e=new fv({}),{c(){Yt(e.$$.fragment)},m(n,i){jt(e,n,i),t=!0},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){Kt(e,n)}}}function wu(s){let e,t;return e=new pv({}),{c(){Yt(e.$$.fragment)},m(n,i){jt(e,n,i),t=!0},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){Kt(e,n)}}}function Tu(s){let e,t;return e=new _v({}),{c(){Yt(e.$$.fragment)},m(n,i){jt(e,n,i),t=!0},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){Kt(e,n)}}}function Eu(s){let e,t;return e=new Sv({}),{c(){Yt(e.$$.fragment)},m(n,i){jt(e,n,i),t=!0},i(n){t||(de(e.$$.fragment,n),t=!0)},o(n){Se(e.$$.fragment,n),t=!1},d(n){Kt(e,n)}}}function Ux(s){let e,t,n,i,r,o,a,l,c,u,h,f,m=s[1]&&xu(s),_=ma,d=[];for(let M=0;M<_.length;M+=1)d[M]=Su(vu(s,_,M));let p=s[7]&&yu(),g=s[6]===0&&bu(s),v=s[6]===1&&Mu(),w=s[6]===2&&wu(),S=s[6]===3&&Tu(),y=s[6]===4&&Eu();return{c(){m&&m.c(),e=He(),t=Te("div"),n=He(),i=Te("ul");for(let M=0;M<d.length;M+=1)d[M].c();r=He(),p&&p.c(),o=He(),g&&g.c(),a=He(),v&&v.c(),l=He(),w&&w.c(),c=He(),S&&S.c(),u=He(),y&&y.c(),h=Es(),we(t,"class","container"),we(i,"class","anchor svelte-1xcbzqc")},m(M,b){m&&m.m(M,b),Re(M,e,b),Re(M,t,b),s[10](t),Re(M,n,b),Re(M,i,b);for(let x=0;x<d.length;x+=1)d[x]&&d[x].m(i,null);Re(M,r,b),p&&p.m(M,b),Re(M,o,b),g&&g.m(M,b),Re(M,a,b),v&&v.m(M,b),Re(M,l,b),w&&w.m(M,b),Re(M,c,b),S&&S.m(M,b),Re(M,u,b),y&&y.m(M,b),Re(M,h,b),f=!0},p(M,[b]){if(M[1]?m?(m.p(M,b),b&2&&de(m,1)):(m=xu(M),m.c(),de(m,1),m.m(e.parentNode,e)):m&&(Lt(),Se(m,1,1,()=>{m=null}),Rt()),b&320){_=ma;let x;for(x=0;x<_.length;x+=1){const T=vu(M,_,x);d[x]?d[x].p(T,b):(d[x]=Su(T),d[x].c(),d[x].m(i,null))}for(;x<d.length;x+=1)d[x].d(1);d.length=_.length}M[7]?p?(p.p(M,b),b&128&&de(p,1)):(p=yu(),p.c(),de(p,1),p.m(o.parentNode,o)):p&&(Lt(),Se(p,1,1,()=>{p=null}),Rt()),M[6]===0?g?(g.p(M,b),b&64&&de(g,1)):(g=bu(M),g.c(),de(g,1),g.m(a.parentNode,a)):g&&(Lt(),Se(g,1,1,()=>{g=null}),Rt()),M[6]===1?v?b&64&&de(v,1):(v=Mu(),v.c(),de(v,1),v.m(l.parentNode,l)):v&&(Lt(),Se(v,1,1,()=>{v=null}),Rt()),M[6]===2?w?b&64&&de(w,1):(w=wu(),w.c(),de(w,1),w.m(c.parentNode,c)):w&&(Lt(),Se(w,1,1,()=>{w=null}),Rt()),M[6]===3?S?b&64&&de(S,1):(S=Tu(),S.c(),de(S,1),S.m(u.parentNode,u)):S&&(Lt(),Se(S,1,1,()=>{S=null}),Rt()),M[6]===4?y?b&64&&de(y,1):(y=Eu(),y.c(),de(y,1),y.m(h.parentNode,h)):y&&(Lt(),Se(y,1,1,()=>{y=null}),Rt())},i(M){f||(de(m),de(p),de(g),de(v),de(w),de(S),de(y),f=!0)},o(M){Se(m),Se(p),Se(g),Se(v),Se(w),Se(S),Se(y),f=!1},d(M){m&&m.d(M),M&&De(e),M&&De(t),s[10](null),M&&De(n),M&&De(i),Cu(d,M),M&&De(r),p&&p.d(M),M&&De(o),g&&g.d(M),M&&De(a),v&&v.d(M),M&&De(l),w&&w.d(M),M&&De(c),S&&S.d(M),M&&De(u),y&&y.d(M),M&&De(h)}}}function kx(s,e,t){let n,i;ln(s,ti,T=>t(9,i=T));let r,o=!0,a="",l="0.00",c,u=0,h=1,f=0;const m=new g0,_=new Zu(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,1,1e3);_.aspect=window.innerWidth/window.innerHeight,_.position.set(0,0,5),m.add(_);const d=new nf({antialias:!0});d.setSize(window.innerWidth,window.innerHeight);const p=new Be,g=zx((T,F)=>{switch(T){case"pending":t(3,l=F.value),t(5,h=F.total),t(4,u=F.num);break;case"fail":alert("加载失败，请稍后重试~~");break}}),v=new x0(g),S=ma.map(T=>{const{bg:F,depth:I}=T;return{page:v.load(F),depth:v.load(I)}}).map((T,F)=>{const{page:I,depth:Y}=T,j=new La(window.innerWidth,window.innerHeight),O=yv(I,Y,p),U=new ni(j,O);return m.add(U),F!==f&&Ta(U),U});requestAnimationFrame(function T(){const F=S[f].material;F.uniforms.uMouse.value=p,F.uniforms.uTime.value=performance.now()/1e3,d.render(m,_),requestAnimationFrame(T)});const y=Nx({mouseMoveEvent:()=>p,resizeEvent:()=>({camera:_,renderer:d}),wheelEvent:T=>{if(o)return!1;const F=S.length-1;if(T.deltaY>0){if(f===F)return!1;const I=S[f],Y=S[f+1];Y.position.set(0,-window.innerHeight,0),fs.set([I,Y]),t(6,f++,f)}else{if(f===0)return!1;S[f],S[f-1].position.set(0,window.innerHeight,0),fs.set([S[f],S[f-1]]),t(6,f--,f)}return ti.set(f),!0}}),M=async T=>{if(T===f)return;ti.set(T),Mn.set(!1),await Ru();const F=S[f],I=S[T.detail];I.position.set(0,-window.innerHeight,0),fs.set([F,I]),t(6,f=T.detail),Ox()};En(()=>{ti.set(f),r.appendChild(d.domElement),window.addEventListener("mousemove",y.mouseMoveEvent),window.addEventListener("wheel",y.wheelEvent),window.addEventListener("resize",y.resizeEvent),c=setInterval(()=>{Math.floor(Number(l))===100&&setTimeout(()=>{t(1,o=!1),clearInterval(c)},150),a.length===3?t(2,a="."):t(2,a+=".")},300)}),vh(()=>{window.removeEventListener("mousemove",y.mouseMoveEvent),window.removeEventListener("wheel",y.wheelEvent),window.removeEventListener("resize",y.resizeEvent),clearInterval(c)});function b(T){It[T?"unshift":"push"](()=>{r=T,t(0,r)})}const x=T=>{M({detail:T})};return s.$$.update=()=>{s.$$.dirty&512&&t(7,n=i!==ma.length-1)},[r,o,a,l,u,h,f,n,M,i,b,x]}class Gx extends wn{constructor(e){super(),Tn(this,e,kx,Ux,fn,{})}}export{Gx as default};
