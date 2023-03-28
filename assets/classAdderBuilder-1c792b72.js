import{l as Z,aa as Se,ab as Ce,ac as De,q as ae,S as re,i as se,s as k,M as P,f as M,P as oe,J as C,R as ue,I as D,m as F,o as z,p as le,a as R,v as ce,x as X,n as J,E as de,e as fe,ad as B,h as j,F as pe,G as me,H as he,j as V,k as ve,r as ge,K,L as Q,N as x,O as N,Q as T,T as Re,a3 as Me}from"./index-911ad0d2.js";var W=function(a,e){return W=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])},W(a,e)};function Fe(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");W(a,e);function t(){this.constructor=a}a.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var H=function(){return H=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},H.apply(this,arguments)};function L(a){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&a[e],n=0;if(t)return t.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ye(a,e){var t=typeof Symbol=="function"&&a[Symbol.iterator];if(!t)return a;var n=t.call(a),i,r=[],o;try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return r}/**
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
 */var He=function(){function a(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();function Y(a){return Object.entries(a).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function $e(a,e,t,n={bubbles:!0},i=!1){if(typeof Event<"u"&&a){const r=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(a==null||a.dispatchEvent(r),i&&e.startsWith("SMUI")){const o=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));a==null||a.dispatchEvent(o),o.defaultPrevented&&r.preventDefault()}return r}}const $=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,Le=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function ye(a){let e,t=[];a.$on=(i,r)=>{let o=i,s=()=>{};return e?s=e(o,r):t.push([o,r]),o.match($)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',o),()=>{s()}};function n(i){Se(a,i)}return i=>{const r=[],o={};e=(s,u)=>{let l=s,c=u,d=!1;const _=l.match($),b=l.match(Le),f=_||b;if(l.match(/^SMUI:\w+:/)){const v=l.split(":");let g="";for(let A=0;A<v.length;A++)g+=A===v.length-1?":"+v[A]:v[A].split("-").map(p=>p.slice(0,1).toUpperCase()+p.slice(1)).join("");console.warn(`The event ${l.split("$")[0]} has been renamed to ${g.split("$")[0]}.`),l=g}if(f){const v=l.split(_?":":"$");l=v[0];const g=v.slice(1).reduce((A,p)=>(A[p]=!0,A),{});g.passive&&(d=d||{},d.passive=!0),g.nonpassive&&(d=d||{},d.passive=!1),g.capture&&(d=d||{},d.capture=!0),g.once&&(d=d||{},d.once=!0),g.preventDefault&&(c=Ce(c)),g.stopPropagation&&(c=De(c))}const m=Z(i,l,c,d),w=()=>{m();const v=r.indexOf(w);v>-1&&r.splice(v,1)};return r.push(w),l in o||(o[l]=Z(i,l,n)),w};for(let s=0;s<t.length;s++)e(t[s][0],t[s][1]);return{destroy:()=>{for(let s=0;s<r.length;s++)r[s]();for(let s of Object.entries(o))s[1]()}}}}function be(a,e){let t=[];if(e)for(let n=0;n<e.length;n++){const i=e[n],r=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?t.push(r(a,i[1])):t.push(r(a))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let i=0;i<n.length;i++){const r=t[i];if(r&&r.update){const o=n[i];Array.isArray(o)&&o.length>1?r.update(o[1]):r.update()}}},destroy(){for(let n=0;n<t.length;n++){const i=t[n];i&&i.destroy&&i.destroy()}}}}/**
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
 */function Ue(a){return a===void 0&&(a=window),Oe(a)?{passive:!0}:!1}function Oe(a){a===void 0&&(a=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};a.document.addEventListener("test",n,t),a.document.removeEventListener("test",n,t)}catch{e=!1}return e}const Ge=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:Ue},Symbol.toStringTag,{value:"Module"}));/**
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
 */function ze(a,e){if(a.closest)return a.closest(e);for(var t=a;t;){if(_e(t,e))return t;t=t.parentElement}return null}function _e(a,e){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,e)}function Be(a){var e=a;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const je=Object.freeze(Object.defineProperty({__proto__:null,closest:ze,estimateScrollWidth:Be,matches:_e},Symbol.toStringTag,{value:"Module"}));/**
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
 */var ke={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Pe={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ee={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},U;function Ie(a,e){e===void 0&&(e=!1);var t=a.CSS,n=U;if(typeof U=="boolean"&&!e)return U;var i=t&&typeof t.supports=="function";if(!i)return!1;var r=t.supports("--css-vars","yes"),o=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=r||o,e||(U=n),n}function Ee(a,e,t){if(!a)return{x:0,y:0};var n=e.x,i=e.y,r=n+t.left,o=i+t.top,s,u;if(a.type==="touchstart"){var l=a;s=l.changedTouches[0].pageX-r,u=l.changedTouches[0].pageY-o}else{var c=a;s=c.pageX-r,u=c.pageY-o}return{x:s,y:u}}/**
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
 */var te=["touchstart","pointerdown","mousedown","keydown"],ne=["touchend","pointerup","mouseup","contextmenu"],O=[],qe=function(a){Fe(e,a);function e(t){var n=a.call(this,H(H({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(i){n.activateImpl(i)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return ke},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Pe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ee},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,i;if(t){try{for(var r=L(te),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerInteractionHandler(s,this.activateHandler)}}catch(u){n={error:u}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,i;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=L(ne),o=r.next();!o.done;o=r.next()){var s=o.value;this.adapter.registerDocumentInteractionHandler(s,this.deactivateHandler)}}catch(u){n={error:u}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var i=L(te),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=L(ne),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(s){t={error:s}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,i=Object.keys(n);i.forEach(function(r){r.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[r],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent,o=r&&t!==void 0&&r.type!==t.type;if(!o){i.isActivated=!0,i.isProgrammatic=t===void 0,i.activationEvent=t,i.wasActivatedByPointer=i.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var s=t!==void 0&&O.length>0&&O.some(function(u){return n.adapter.containsEventTarget(u)});if(s){this.resetActivationState();return}t!==void 0&&(O.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){O=[],!i.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(i.wasElementMadeActive=n.checkElementMadeActive(t),i.wasElementMadeActive&&n.animateActivation()),i.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,s=o.FG_DEACTIVATION,u=o.FG_ACTIVATION,l=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",d="";if(!this.adapter.isUnbounded()){var _=this.getFgTranslationCoordinates(),b=_.startPoint,f=_.endPoint;c=b.x+"px, "+b.y+"px",d=f.x+"px, "+f.y+"px"}this.adapter.updateCssVariable(i,c),this.adapter.updateCssVariable(r,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(u),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},l)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,i=t.wasActivatedByPointer,r;i?r=Ee(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):r={x:this.frame.width/2,y:this.frame.height/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2};var o={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:r,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState,r=i.hasDeactivationUXRun,o=i.isActivated,s=r||!o;s&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},ee.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(n.isActivated){var i=H({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(i)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,i=t.wasElementMadeActive;(n||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),i=function(){var o=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return o+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:i();var r=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!==0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,i=t.VAR_LEFT,r=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords.top+"px"))},e}(He);const{applyPassive:G}=Ge,{matches:Xe}=je;function et(a,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:i=!1,color:r,active:o,rippleElement:s,eventTarget:u,activeTarget:l,addClass:c=f=>a.classList.add(f),removeClass:d=f=>a.classList.remove(f),addStyle:_=(f,m)=>a.style.setProperty(f,m),initPromise:b=Promise.resolve()}={}){let f,m=ae("SMUI:addLayoutListener"),w,v=o,g=u,A=l;function p(){t?(c("mdc-ripple-surface"),r==="primary"?(c("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")):r==="secondary"?(d("smui-ripple-surface--primary"),c("smui-ripple-surface--secondary")):(d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary"))):(d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),f&&v!==o&&(v=o,o?f.activate():o===!1&&f.deactivate()),e&&!f?(f=new qe({addClass:c,browserSupportsCssVars:()=>Ie(window),computeBoundingRect:()=>(s||a).getBoundingClientRect(),containsEventTarget:h=>a.contains(h),deregisterDocumentInteractionHandler:(h,y)=>document.documentElement.removeEventListener(h,y,G()),deregisterInteractionHandler:(h,y)=>(u||a).removeEventListener(h,y,G()),deregisterResizeHandler:h=>window.removeEventListener("resize",h),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>o??Xe(l||a,":active"),isSurfaceDisabled:()=>!!i,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(h,y)=>document.documentElement.addEventListener(h,y,G()),registerInteractionHandler:(h,y)=>(u||a).addEventListener(h,y,G()),registerResizeHandler:h=>window.addEventListener("resize",h),removeClass:d,updateCssVariable:_}),b.then(()=>{f&&(f.init(),f.setUnbounded(n))})):f&&!e&&b.then(()=>{f&&(f.destroy(),f=void 0)}),f&&(g!==u||A!==l)&&(g=u,A=l,f.destroy(),requestAnimationFrame(()=>{f&&(f.init(),f.setUnbounded(n))})),!e&&n&&c("mdc-ripple-upgraded--unbounded")}p(),m&&(w=m(I));function I(){f&&f.layout()}return{update(h){({ripple:e,surface:t,unbounded:n,disabled:i,color:r,active:o,rippleElement:s,eventTarget:u,activeTarget:l,addClass:c,removeClass:d,addStyle:_,initPromise:b}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:y=>a.classList.add(y),removeClass:y=>a.classList.remove(y),addStyle:(y,we)=>a.style.setProperty(y,we),initPromise:Promise.resolve()},h)),p()},destroy(){f&&(f.destroy(),f=void 0,d("mdc-ripple-surface"),d("smui-ripple-surface--primary"),d("smui-ripple-surface--secondary")),w&&w()}}}function We(a){let e=a[1],t,n,i=a[1]&&E(a);return{c(){i&&i.c(),t=P()},m(r,o){i&&i.m(r,o),M(r,t,o),n=!0},p(r,o){r[1]?e?k(e,r[1])?(i.d(1),i=E(r),e=r[1],i.c(),i.m(t.parentNode,t)):i.p(r,o):(i=E(r),e=r[1],i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null,e=r[1])},i(r){n||(D(i),n=!0)},o(r){C(i),n=!1},d(r){r&&F(t),i&&i.d(r)}}}function Ve(a){let e=a[1],t,n=a[1]&&q(a);return{c(){n&&n.c(),t=P()},m(i,r){n&&n.m(i,r),M(i,t,r)},p(i,r){i[1]?e?k(e,i[1])?(n.d(1),n=q(i),e=i[1],n.c(),n.m(t.parentNode,t)):n.p(i,r):(n=q(i),e=i[1],n.c(),n.m(t.parentNode,t)):e&&(n.d(1),n=null,e=i[1])},i:J,o:J,d(i){i&&F(t),n&&n.d(i)}}}function E(a){let e,t,n,i,r;const o=a[8].default,s=de(o,a,a[7],null);let u=[a[5]],l={};for(let c=0;c<u.length;c+=1)l=R(l,u[c]);return{c(){e=fe(a[1]),s&&s.c(),B(a[1])(e,l)},m(c,d){M(c,e,d),s&&s.m(e,null),a[10](e),n=!0,i||(r=[j(t=be.call(null,e,a[0])),j(a[4].call(null,e))],i=!0)},p(c,d){s&&s.p&&(!n||d&128)&&pe(s,o,c,c[7],n?he(o,c[7],d,null):me(c[7]),null),B(c[1])(e,l=V(u,[d&32&&c[5]])),t&&ve(t.update)&&d&1&&t.update.call(null,c[0])},i(c){n||(D(s,c),n=!0)},o(c){C(s,c),n=!1},d(c){c&&F(e),s&&s.d(c),a[10](null),i=!1,ge(r)}}}function q(a){let e,t,n,i,r=[a[5]],o={};for(let s=0;s<r.length;s+=1)o=R(o,r[s]);return{c(){e=fe(a[1]),B(a[1])(e,o)},m(s,u){M(s,e,u),a[9](e),n||(i=[j(t=be.call(null,e,a[0])),j(a[4].call(null,e))],n=!0)},p(s,u){B(s[1])(e,o=V(r,[u&32&&s[5]])),t&&ve(t.update)&&u&1&&t.update.call(null,s[0])},d(s){s&&F(e),a[9](null),n=!1,ge(i)}}}function Ze(a){let e,t,n,i;const r=[Ve,We],o=[];function s(u,l){return u[3]?0:1}return e=s(a),t=o[e]=r[e](a),{c(){t.c(),n=P()},m(u,l){o[e].m(u,l),M(u,n,l),i=!0},p(u,[l]){let c=e;e=s(u),e===c?o[e].p(u,l):(oe(),C(o[c],1,1,()=>{o[c]=null}),ue(),t=o[e],t?t.p(u,l):(t=o[e]=r[e](u),t.c()),D(t,1),t.m(n.parentNode,n))},i(u){i||(D(t),i=!0)},o(u){C(t),i=!1},d(u){o[e].d(u),u&&F(n)}}}function Je(a,e,t){let n;const i=["use","tag","getElement"];let r=z(e,i),{$$slots:o={},$$scope:s}=e,{use:u=[]}=e,{tag:l}=e;const c=ye(le());let d;function _(){return d}function b(m){X[m?"unshift":"push"](()=>{d=m,t(2,d)})}function f(m){X[m?"unshift":"push"](()=>{d=m,t(2,d)})}return a.$$set=m=>{e=R(R({},e),ce(m)),t(5,r=z(e,i)),"use"in m&&t(0,u=m.use),"tag"in m&&t(1,l=m.tag),"$$scope"in m&&t(7,s=m.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&t(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(l)>-1)},[u,l,d,n,c,r,_,s,o,b,f]}class Ae extends re{constructor(e){super(),se(this,e,Je,Ze,k,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function Ke(a){let e;const t=a[11].default,n=de(t,a,a[13],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&8192)&&pe(n,t,i,i[13],e?he(t,i[13],r,null):me(i[13]),null)},i(i){e||(D(n,i),e=!0)},o(i){C(n,i),e=!1},d(i){n&&n.d(i)}}}function Qe(a){let e,t,n;const i=[{tag:a[3]},{use:[a[8],...a[0]]},{class:Y({[a[1]]:!0,[a[6]]:!0,...a[5]})},a[7],a[9]];var r=a[2];function o(s){let u={$$slots:{default:[Ke]},$$scope:{ctx:s}};for(let l=0;l<i.length;l+=1)u=R(u,i[l]);return{props:u}}return r&&(e=K(r,o(a)),a[12](e)),{c(){e&&Q(e.$$.fragment),t=P()},m(s,u){e&&x(e,s,u),M(s,t,u),n=!0},p(s,[u]){const l=u&1003?V(i,[u&8&&{tag:s[3]},u&257&&{use:[s[8],...s[0]]},u&98&&{class:Y({[s[1]]:!0,[s[6]]:!0,...s[5]})},u&128&&N(s[7]),u&512&&N(s[9])]):{};if(u&8192&&(l.$$scope={dirty:u,ctx:s}),u&4&&r!==(r=s[2])){if(e){oe();const c=e;C(c.$$.fragment,1,0,()=>{T(c,1)}),ue()}r?(e=K(r,o(s)),s[12](e),Q(e.$$.fragment),D(e.$$.fragment,1),x(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(s){n||(e&&D(e.$$.fragment,s),n=!0)},o(s){e&&C(e.$$.fragment,s),n=!1},d(s){a[12](null),s&&F(t),e&&T(e,s)}}}const S={component:Ae,tag:"div",class:"",classMap:{},contexts:{},props:{}};function xe(a,e,t){const n=["use","class","component","tag","getElement"];let i=z(e,n),{$$slots:r={},$$scope:o}=e,{use:s=[]}=e,{class:u=""}=e,l;const c=S.class,d={},_=[],b=S.contexts,f=S.props;let{component:m=S.component}=e,{tag:w=m===Ae?S.tag:void 0}=e;Object.entries(S.classMap).forEach(([p,I])=>{const h=ae(I);h&&"subscribe"in h&&_.push(h.subscribe(y=>{t(5,d[p]=y,d)}))});const v=ye(le());for(let p in b)b.hasOwnProperty(p)&&Re(p,b[p]);Me(()=>{for(const p of _)p()});function g(){return l.getElement()}function A(p){X[p?"unshift":"push"](()=>{l=p,t(4,l)})}return a.$$set=p=>{e=R(R({},e),ce(p)),t(9,i=z(e,n)),"use"in p&&t(0,s=p.use),"class"in p&&t(1,u=p.class),"component"in p&&t(2,m=p.component),"tag"in p&&t(3,w=p.tag),"$$scope"in p&&t(13,o=p.$$scope)},[s,u,m,w,l,d,c,f,v,i,g,r,A,o]}class Ne extends re{constructor(e){super(),se(this,e,xe,Qe,k,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const ie=Object.assign({},S);function tt(a){return new Proxy(Ne,{construct:function(e,t){return Object.assign(S,ie,a),new e(...t)},get:function(e,t){return Object.assign(S,ie,a),e[t]}})}export{He as M,et as R,Ae as S,Fe as _,L as a,H as b,Y as c,$e as d,Ye as e,ye as f,tt as g,je as p,be as u};
