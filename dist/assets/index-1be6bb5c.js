function m2(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function r_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i_={exports:{}},Ud={},s_={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ml=Symbol.for("react.element"),g2=Symbol.for("react.portal"),v2=Symbol.for("react.fragment"),y2=Symbol.for("react.strict_mode"),w2=Symbol.for("react.profiler"),E2=Symbol.for("react.provider"),_2=Symbol.for("react.context"),T2=Symbol.for("react.forward_ref"),S2=Symbol.for("react.suspense"),k2=Symbol.for("react.memo"),I2=Symbol.for("react.lazy"),f0=Symbol.iterator;function b2(t){return t===null||typeof t!="object"?null:(t=f0&&t[f0]||t["@@iterator"],typeof t=="function"?t:null)}var o_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a_=Object.assign,l_={};function Oo(t,e,n){this.props=t,this.context=e,this.refs=l_,this.updater=n||o_}Oo.prototype.isReactComponent={};Oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function u_(){}u_.prototype=Oo.prototype;function gg(t,e,n){this.props=t,this.context=e,this.refs=l_,this.updater=n||o_}var vg=gg.prototype=new u_;vg.constructor=gg;a_(vg,Oo.prototype);vg.isPureReactComponent=!0;var h0=Array.isArray,c_=Object.prototype.hasOwnProperty,yg={current:null},d_={key:!0,ref:!0,__self:!0,__source:!0};function f_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)c_.call(e,r)&&!d_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ml,type:t,key:s,ref:o,props:i,_owner:yg.current}}function x2(t,e){return{$$typeof:Ml,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ml}function C2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var p0=/\/+/g;function lh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C2(""+t.key):e.toString(36)}function mc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ml:case g2:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lh(o,0):r,h0(i)?(n="",t!=null&&(n=t.replace(p0,"$&/")+"/"),mc(i,e,n,"",function(u){return u})):i!=null&&(wg(i)&&(i=x2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(p0,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",h0(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+lh(s,a);o+=mc(s,e,n,l,i)}else if(l=b2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+lh(s,a++),o+=mc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Su(t,e,n){if(t==null)return t;var r=[],i=0;return mc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function R2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ut={current:null},gc={transition:null},N2={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:gc,ReactCurrentOwner:yg};ae.Children={map:Su,forEach:function(t,e,n){Su(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Su(t,function(){e++}),e},toArray:function(t){return Su(t,function(e){return e})||[]},only:function(t){if(!wg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Oo;ae.Fragment=v2;ae.Profiler=w2;ae.PureComponent=gg;ae.StrictMode=y2;ae.Suspense=S2;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N2;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=a_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yg.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)c_.call(e,l)&&!d_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ml,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:_2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:E2,_context:t},t.Consumer=t};ae.createElement=f_;ae.createFactory=function(t){var e=f_.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:T2,render:t}};ae.isValidElement=wg;ae.lazy=function(t){return{$$typeof:I2,_payload:{_status:-1,_result:t},_init:R2}};ae.memo=function(t,e){return{$$typeof:k2,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=gc.transition;gc.transition={};try{t()}finally{gc.transition=e}};ae.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ae.useCallback=function(t,e){return Ut.current.useCallback(t,e)};ae.useContext=function(t){return Ut.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Ut.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Ut.current.useEffect(t,e)};ae.useId=function(){return Ut.current.useId()};ae.useImperativeHandle=function(t,e,n){return Ut.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Ut.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Ut.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Ut.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Ut.current.useReducer(t,e,n)};ae.useRef=function(t){return Ut.current.useRef(t)};ae.useState=function(t){return Ut.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Ut.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Ut.current.useTransition()};ae.version="18.2.0";s_.exports=ae;var _=s_.exports;const q=r_(_),A2=m2({__proto__:null,default:q},[_]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P2=_,D2=Symbol.for("react.element"),O2=Symbol.for("react.fragment"),L2=Object.prototype.hasOwnProperty,M2=P2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$2={key:!0,ref:!0,__self:!0,__source:!0};function h_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)L2.call(e,r)&&!$2.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:D2,type:t,key:s,ref:o,props:i,_owner:M2.current}}Ud.Fragment=O2;Ud.jsx=h_;Ud.jsxs=h_;i_.exports=Ud;var T=i_.exports,wp={},p_={exports:{}},on={},m_={exports:{}},g_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var Z=D.length;D.push(z);e:for(;0<Z;){var ce=Z-1>>>1,Ye=D[ce];if(0<i(Ye,z))D[ce]=z,D[Z]=Ye,Z=ce;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],Z=D.pop();if(Z!==z){D[0]=Z;e:for(var ce=0,Ye=D.length,Es=Ye>>>1;ce<Es;){var Ne=2*(ce+1)-1,er=D[Ne],Dn=Ne+1,_s=D[Dn];if(0>i(er,Z))Dn<Ye&&0>i(_s,er)?(D[ce]=_s,D[Dn]=Z,ce=Dn):(D[ce]=er,D[Ne]=Z,ce=Ne);else if(Dn<Ye&&0>i(_s,Z))D[ce]=_s,D[Dn]=Z,ce=Dn;else break e}}return z}function i(D,z){var Z=D.sortIndex-z.sortIndex;return Z!==0?Z:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,h=!1,g=!1,y=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function v(D){if(y=!1,w(D),!g)if(n(l)!==null)g=!0,ye(S);else{var z=n(u);z!==null&&Ve(v,z.startTime-D)}}function S(D,z){g=!1,y&&(y=!1,m(R),R=-1),h=!0;var Z=f;try{for(w(z),d=n(l);d!==null&&(!(d.expirationTime>z)||D&&!he());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,f=d.priorityLevel;var Ye=ce(d.expirationTime<=z);z=t.unstable_now(),typeof Ye=="function"?d.callback=Ye:d===n(l)&&r(l),w(z)}else r(l);d=n(l)}if(d!==null)var Es=!0;else{var Ne=n(u);Ne!==null&&Ve(v,Ne.startTime-z),Es=!1}return Es}finally{d=null,f=Z,h=!1}}var x=!1,b=null,R=-1,F=5,V=-1;function he(){return!(t.unstable_now()-V<F)}function Q(){if(b!==null){var D=t.unstable_now();V=D;var z=!0;try{z=b(!0,D)}finally{z?je():(x=!1,b=null)}}else x=!1}var je;if(typeof p=="function")je=function(){p(Q)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Be=ze.port2;ze.port1.onmessage=Q,je=function(){Be.postMessage(null)}}else je=function(){E(Q,0)};function ye(D){b=D,x||(x=!0,je())}function Ve(D,z){R=E(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,ye(S))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var Z=f;f=z;try{return D()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Z=f;f=D;try{return z()}finally{f=Z}},t.unstable_scheduleCallback=function(D,z,Z){var ce=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ce+Z:ce):Z=ce,D){case 1:var Ye=-1;break;case 2:Ye=250;break;case 5:Ye=1073741823;break;case 4:Ye=1e4;break;default:Ye=5e3}return Ye=Z+Ye,D={id:c++,callback:z,priorityLevel:D,startTime:Z,expirationTime:Ye,sortIndex:-1},Z>ce?(D.sortIndex=Z,e(u,D),n(l)===null&&D===n(u)&&(y?(m(R),R=-1):y=!0,Ve(v,Z-ce))):(D.sortIndex=Ye,e(l,D),g||h||(g=!0,ye(S))),D},t.unstable_shouldYield=he,t.unstable_wrapCallback=function(D){var z=f;return function(){var Z=f;f=z;try{return D.apply(this,arguments)}finally{f=Z}}}})(g_);m_.exports=g_;var F2=m_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=_,rn=F2;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y_=new Set,Ga={};function ds(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(Ga[t]=e,t=0;t<e.length;t++)y_.add(e[t])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ep=Object.prototype.hasOwnProperty,U2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m0={},g0={};function j2(t){return Ep.call(g0,t)?!0:Ep.call(m0,t)?!1:U2.test(t)?g0[t]=!0:(m0[t]=!0,!1)}function z2(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B2(t,e,n,r){if(e===null||typeof e>"u"||z2(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Et[t]=new jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Et[e]=new jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Et[t]=new jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Et[t]=new jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Et[t]=new jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Et[t]=new jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Et[t]=new jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Et[t]=new jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Et[t]=new jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Eg=/[\-:]([a-z])/g;function _g(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Eg,_g);Et[e]=new jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Eg,_g);Et[e]=new jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Eg,_g);Et[e]=new jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Et[t]=new jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Et.xlinkHref=new jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Et[t]=new jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tg(t,e,n,r){var i=Et.hasOwnProperty(e)?Et[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B2(e,n,i,r)&&(n=null),r||i===null?j2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xr=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ku=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Sg=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),w_=Symbol.for("react.provider"),E_=Symbol.for("react.context"),kg=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Sp=Symbol.for("react.suspense_list"),Ig=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),__=Symbol.for("react.offscreen"),v0=Symbol.iterator;function ea(t){return t===null||typeof t!="object"?null:(t=v0&&t[v0]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,uh;function pa(t){if(uh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uh=e&&e[1]||""}return`
`+uh+t}var ch=!1;function dh(t,e){if(!t||ch)return"";ch=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ch=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function V2(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=dh(t.type,!1),t;case 11:return t=dh(t.type.render,!1),t;case 1:return t=dh(t.type,!0),t;default:return""}}function kp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Rs:return"Portal";case _p:return"Profiler";case Sg:return"StrictMode";case Tp:return"Suspense";case Sp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E_:return(t.displayName||"Context")+".Consumer";case w_:return(t._context.displayName||"Context")+".Provider";case kg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ig:return e=t.displayName||null,e!==null?e:kp(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return kp(t(e))}catch{}}return null}function H2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kp(e);case 8:return e===Sg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function di(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function T_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q2(t){var e=T_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Iu(t){t._valueTracker||(t._valueTracker=q2(t))}function S_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=T_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ip(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function y0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=di(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function k_(t,e){e=e.checked,e!=null&&Tg(t,"checked",e,!1)}function bp(t,e){k_(t,e);var n=di(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xp(t,e.type,n):e.hasOwnProperty("defaultValue")&&xp(t,e.type,di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function w0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xp(t,e,n){(e!=="number"||Uc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Qs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+di(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function E0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(ma(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:di(n)}}function I_(t,e){var n=di(e.value),r=di(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function b_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?b_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bu,x_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bu=bu||document.createElement("div"),bu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W2=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(t){W2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xa[e]=xa[t]})});function C_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xa.hasOwnProperty(t)&&xa[t]?(""+e).trim():e+"px"}function R_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=C_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var K2=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Np(t,e){if(e){if(K2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Ap(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pp=null;function bg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dp=null,Ys=null,Xs=null;function T0(t){if(t=Ul(t)){if(typeof Dp!="function")throw Error(A(280));var e=t.stateNode;e&&(e=Hd(e),Dp(t.stateNode,t.type,e))}}function N_(t){Ys?Xs?Xs.push(t):Xs=[t]:Ys=t}function A_(){if(Ys){var t=Ys,e=Xs;if(Xs=Ys=null,T0(t),e)for(t=0;t<e.length;t++)T0(e[t])}}function P_(t,e){return t(e)}function D_(){}var fh=!1;function O_(t,e,n){if(fh)return t(e,n);fh=!0;try{return P_(t,e,n)}finally{fh=!1,(Ys!==null||Xs!==null)&&(D_(),A_())}}function Ya(t,e){var n=t.stateNode;if(n===null)return null;var r=Hd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var Op=!1;if(pr)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){Op=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{Op=!1}function G2(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ca=!1,jc=null,zc=!1,Lp=null,Q2={onError:function(t){Ca=!0,jc=t}};function Y2(t,e,n,r,i,s,o,a,l){Ca=!1,jc=null,G2.apply(Q2,arguments)}function X2(t,e,n,r,i,s,o,a,l){if(Y2.apply(this,arguments),Ca){if(Ca){var u=jc;Ca=!1,jc=null}else throw Error(A(198));zc||(zc=!0,Lp=u)}}function fs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function L_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S0(t){if(fs(t)!==t)throw Error(A(188))}function J2(t){var e=t.alternate;if(!e){if(e=fs(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return S0(i),t;if(s===r)return S0(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function M_(t){return t=J2(t),t!==null?$_(t):null}function $_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$_(t);if(e!==null)return e;t=t.sibling}return null}var F_=rn.unstable_scheduleCallback,k0=rn.unstable_cancelCallback,Z2=rn.unstable_shouldYield,eC=rn.unstable_requestPaint,Ge=rn.unstable_now,tC=rn.unstable_getCurrentPriorityLevel,xg=rn.unstable_ImmediatePriority,U_=rn.unstable_UserBlockingPriority,Bc=rn.unstable_NormalPriority,nC=rn.unstable_LowPriority,j_=rn.unstable_IdlePriority,jd=null,Vn=null;function rC(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(jd,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:oC,iC=Math.log,sC=Math.LN2;function oC(t){return t>>>=0,t===0?32:31-(iC(t)/sC|0)|0}var xu=64,Cu=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ga(a):(s&=o,s!==0&&(r=ga(s)))}else o=n&~i,o!==0?r=ga(o):s!==0&&(r=ga(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function aC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=aC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Mp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function z_(){var t=xu;return xu<<=1,!(xu&4194240)&&(xu=64),t}function hh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function uC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ge=0;function B_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var V_,Rg,H_,q_,W_,$p=!1,Ru=[],Jr=null,Zr=null,ei=null,Xa=new Map,Ja=new Map,jr=[],cC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function I0(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(e.pointerId)}}function na(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ul(e),e!==null&&Rg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dC(t,e,n,r,i){switch(e){case"focusin":return Jr=na(Jr,t,e,n,r,i),!0;case"dragenter":return Zr=na(Zr,t,e,n,r,i),!0;case"mouseover":return ei=na(ei,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xa.set(s,na(Xa.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ja.set(s,na(Ja.get(s)||null,t,e,n,r,i)),!0}return!1}function K_(t){var e=Ai(t.target);if(e!==null){var n=fs(e);if(n!==null){if(e=n.tag,e===13){if(e=L_(n),e!==null){t.blockedOn=e,W_(t.priority,function(){H_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Pp=r,n.target.dispatchEvent(r),Pp=null}else return e=Ul(n),e!==null&&Rg(e),t.blockedOn=n,!1;e.shift()}return!0}function b0(t,e,n){vc(t)&&n.delete(e)}function fC(){$p=!1,Jr!==null&&vc(Jr)&&(Jr=null),Zr!==null&&vc(Zr)&&(Zr=null),ei!==null&&vc(ei)&&(ei=null),Xa.forEach(b0),Ja.forEach(b0)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,$p||($p=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,fC)))}function Za(t){function e(i){return ra(i,t)}if(0<Ru.length){ra(Ru[0],t);for(var n=1;n<Ru.length;n++){var r=Ru[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jr!==null&&ra(Jr,t),Zr!==null&&ra(Zr,t),ei!==null&&ra(ei,t),Xa.forEach(e),Ja.forEach(e),n=0;n<jr.length;n++)r=jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)K_(n),n.blockedOn===null&&jr.shift()}var Js=xr.ReactCurrentBatchConfig,Hc=!0;function hC(t,e,n,r){var i=ge,s=Js.transition;Js.transition=null;try{ge=1,Ng(t,e,n,r)}finally{ge=i,Js.transition=s}}function pC(t,e,n,r){var i=ge,s=Js.transition;Js.transition=null;try{ge=4,Ng(t,e,n,r)}finally{ge=i,Js.transition=s}}function Ng(t,e,n,r){if(Hc){var i=Fp(t,e,n,r);if(i===null)Sh(t,e,r,qc,n),I0(t,r);else if(dC(i,t,e,n,r))r.stopPropagation();else if(I0(t,r),e&4&&-1<cC.indexOf(t)){for(;i!==null;){var s=Ul(i);if(s!==null&&V_(s),s=Fp(t,e,n,r),s===null&&Sh(t,e,r,qc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Sh(t,e,r,null,n)}}var qc=null;function Fp(t,e,n,r){if(qc=null,t=bg(r),t=Ai(t),t!==null)if(e=fs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=L_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qc=t,null}function G_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tC()){case xg:return 1;case U_:return 4;case Bc:case nC:return 16;case j_:return 536870912;default:return 16}default:return 16}}var Kr=null,Ag=null,yc=null;function Q_(){if(yc)return yc;var t,e=Ag,n=e.length,r,i="value"in Kr?Kr.value:Kr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yc=i.slice(t,1<r?1-r:void 0)}function wc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nu(){return!0}function x0(){return!1}function an(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Nu:x0,this.isPropagationStopped=x0,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Nu)},persist:function(){},isPersistent:Nu}),e}var Lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pg=an(Lo),Fl=$e({},Lo,{view:0,detail:0}),mC=an(Fl),ph,mh,ia,zd=$e({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ia&&(ia&&t.type==="mousemove"?(ph=t.screenX-ia.screenX,mh=t.screenY-ia.screenY):mh=ph=0,ia=t),ph)},movementY:function(t){return"movementY"in t?t.movementY:mh}}),C0=an(zd),gC=$e({},zd,{dataTransfer:0}),vC=an(gC),yC=$e({},Fl,{relatedTarget:0}),gh=an(yC),wC=$e({},Lo,{animationName:0,elapsedTime:0,pseudoElement:0}),EC=an(wC),_C=$e({},Lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TC=an(_C),SC=$e({},Lo,{data:0}),R0=an(SC),kC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=bC[t])?!!e[t]:!1}function Dg(){return xC}var CC=$e({},Fl,{key:function(t){if(t.key){var e=kC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dg,charCode:function(t){return t.type==="keypress"?wc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RC=an(CC),NC=$e({},zd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),N0=an(NC),AC=$e({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dg}),PC=an(AC),DC=$e({},Lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),OC=an(DC),LC=$e({},zd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MC=an(LC),$C=[9,13,27,32],Og=pr&&"CompositionEvent"in window,Ra=null;pr&&"documentMode"in document&&(Ra=document.documentMode);var FC=pr&&"TextEvent"in window&&!Ra,Y_=pr&&(!Og||Ra&&8<Ra&&11>=Ra),A0=String.fromCharCode(32),P0=!1;function X_(t,e){switch(t){case"keyup":return $C.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function UC(t,e){switch(t){case"compositionend":return J_(e);case"keypress":return e.which!==32?null:(P0=!0,A0);case"textInput":return t=e.data,t===A0&&P0?null:t;default:return null}}function jC(t,e){if(As)return t==="compositionend"||!Og&&X_(t,e)?(t=Q_(),yc=Ag=Kr=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y_&&e.locale!=="ko"?null:e.data;default:return null}}var zC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function D0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zC[t.type]:e==="textarea"}function Z_(t,e,n,r){N_(r),e=Wc(e,"onChange"),0<e.length&&(n=new Pg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Na=null,el=null;function BC(t){cT(t,0)}function Bd(t){var e=Os(t);if(S_(e))return t}function VC(t,e){if(t==="change")return e}var eT=!1;if(pr){var vh;if(pr){var yh="oninput"in document;if(!yh){var O0=document.createElement("div");O0.setAttribute("oninput","return;"),yh=typeof O0.oninput=="function"}vh=yh}else vh=!1;eT=vh&&(!document.documentMode||9<document.documentMode)}function L0(){Na&&(Na.detachEvent("onpropertychange",tT),el=Na=null)}function tT(t){if(t.propertyName==="value"&&Bd(el)){var e=[];Z_(e,el,t,bg(t)),O_(BC,e)}}function HC(t,e,n){t==="focusin"?(L0(),Na=e,el=n,Na.attachEvent("onpropertychange",tT)):t==="focusout"&&L0()}function qC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bd(el)}function WC(t,e){if(t==="click")return Bd(e)}function KC(t,e){if(t==="input"||t==="change")return Bd(e)}function GC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:GC;function tl(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ep.call(e,i)||!Rn(t[i],e[i]))return!1}return!0}function M0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $0(t,e){var n=M0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=M0(n)}}function nT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rT(){for(var t=window,e=Uc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uc(t.document)}return e}function Lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QC(t){var e=rT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nT(n.ownerDocument.documentElement,n)){if(r!==null&&Lg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=$0(n,s);var o=$0(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var YC=pr&&"documentMode"in document&&11>=document.documentMode,Ps=null,Up=null,Aa=null,jp=!1;function F0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jp||Ps==null||Ps!==Uc(r)||(r=Ps,"selectionStart"in r&&Lg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Aa&&tl(Aa,r)||(Aa=r,r=Wc(Up,"onSelect"),0<r.length&&(e=new Pg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ps)))}function Au(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:Au("Animation","AnimationEnd"),animationiteration:Au("Animation","AnimationIteration"),animationstart:Au("Animation","AnimationStart"),transitionend:Au("Transition","TransitionEnd")},wh={},iT={};pr&&(iT=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Vd(t){if(wh[t])return wh[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iT)return wh[t]=e[n];return t}var sT=Vd("animationend"),oT=Vd("animationiteration"),aT=Vd("animationstart"),lT=Vd("transitionend"),uT=new Map,U0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(t,e){uT.set(t,e),ds(e,[t])}for(var Eh=0;Eh<U0.length;Eh++){var _h=U0[Eh],XC=_h.toLowerCase(),JC=_h[0].toUpperCase()+_h.slice(1);Ei(XC,"on"+JC)}Ei(sT,"onAnimationEnd");Ei(oT,"onAnimationIteration");Ei(aT,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(lT,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);ds("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ds("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ds("onBeforeInput",["compositionend","keypress","textInput","paste"]);ds("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ds("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZC=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function j0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,X2(r,e,void 0,t),t.currentTarget=null}function cT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;j0(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;j0(i,a,u),s=l}}}if(zc)throw t=Lp,zc=!1,Lp=null,t}function Te(t,e){var n=e[qp];n===void 0&&(n=e[qp]=new Set);var r=t+"__bubble";n.has(r)||(dT(e,t,2,!1),n.add(r))}function Th(t,e,n){var r=0;e&&(r|=4),dT(n,t,r,e)}var Pu="_reactListening"+Math.random().toString(36).slice(2);function nl(t){if(!t[Pu]){t[Pu]=!0,y_.forEach(function(n){n!=="selectionchange"&&(ZC.has(n)||Th(n,!1,t),Th(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pu]||(e[Pu]=!0,Th("selectionchange",!1,e))}}function dT(t,e,n,r){switch(G_(e)){case 1:var i=hC;break;case 4:i=pC;break;default:i=Ng}n=i.bind(null,e,n,t),i=void 0,!Op||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Sh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ai(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}O_(function(){var u=s,c=bg(n),d=[];e:{var f=uT.get(t);if(f!==void 0){var h=Pg,g=t;switch(t){case"keypress":if(wc(n)===0)break e;case"keydown":case"keyup":h=RC;break;case"focusin":g="focus",h=gh;break;case"focusout":g="blur",h=gh;break;case"beforeblur":case"afterblur":h=gh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=C0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=vC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=PC;break;case sT:case oT:case aT:h=EC;break;case lT:h=OC;break;case"scroll":h=mC;break;case"wheel":h=MC;break;case"copy":case"cut":case"paste":h=TC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=N0}var y=(e&4)!==0,E=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,w;p!==null;){w=p;var v=w.stateNode;if(w.tag===5&&v!==null&&(w=v,m!==null&&(v=Ya(p,m),v!=null&&y.push(rl(p,v,w)))),E)break;p=p.return}0<y.length&&(f=new h(f,g,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",f&&n!==Pp&&(g=n.relatedTarget||n.fromElement)&&(Ai(g)||g[mr]))break e;if((h||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?Ai(g):null,g!==null&&(E=fs(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(y=C0,v="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=N0,v="onPointerLeave",m="onPointerEnter",p="pointer"),E=h==null?f:Os(h),w=g==null?f:Os(g),f=new y(v,p+"leave",h,n,c),f.target=E,f.relatedTarget=w,v=null,Ai(c)===u&&(y=new y(m,p+"enter",g,n,c),y.target=w,y.relatedTarget=E,v=y),E=v,h&&g)t:{for(y=h,m=g,p=0,w=y;w;w=Ss(w))p++;for(w=0,v=m;v;v=Ss(v))w++;for(;0<p-w;)y=Ss(y),p--;for(;0<w-p;)m=Ss(m),w--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=Ss(y),m=Ss(m)}y=null}else y=null;h!==null&&z0(d,f,h,y,!1),g!==null&&E!==null&&z0(d,E,g,y,!0)}}e:{if(f=u?Os(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var S=VC;else if(D0(f))if(eT)S=KC;else{S=qC;var x=HC}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=WC);if(S&&(S=S(t,u))){Z_(d,S,n,c);break e}x&&x(t,f,u),t==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&xp(f,"number",f.value)}switch(x=u?Os(u):window,t){case"focusin":(D0(x)||x.contentEditable==="true")&&(Ps=x,Up=u,Aa=null);break;case"focusout":Aa=Up=Ps=null;break;case"mousedown":jp=!0;break;case"contextmenu":case"mouseup":case"dragend":jp=!1,F0(d,n,c);break;case"selectionchange":if(YC)break;case"keydown":case"keyup":F0(d,n,c)}var b;if(Og)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else As?X_(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Y_&&n.locale!=="ko"&&(As||R!=="onCompositionStart"?R==="onCompositionEnd"&&As&&(b=Q_()):(Kr=c,Ag="value"in Kr?Kr.value:Kr.textContent,As=!0)),x=Wc(u,R),0<x.length&&(R=new R0(R,t,null,n,c),d.push({event:R,listeners:x}),b?R.data=b:(b=J_(n),b!==null&&(R.data=b)))),(b=FC?UC(t,n):jC(t,n))&&(u=Wc(u,"onBeforeInput"),0<u.length&&(c=new R0("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}cT(d,e)})}function rl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ya(t,n),s!=null&&r.unshift(rl(t,s,i)),s=Ya(t,e),s!=null&&r.push(rl(t,s,i))),t=t.return}return r}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function z0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ya(n,s),l!=null&&o.unshift(rl(n,l,a))):i||(l=Ya(n,s),l!=null&&o.push(rl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eR=/\r\n?/g,tR=/\u0000|\uFFFD/g;function B0(t){return(typeof t=="string"?t:""+t).replace(eR,`
`).replace(tR,"")}function Du(t,e,n){if(e=B0(e),B0(t)!==e&&n)throw Error(A(425))}function Kc(){}var zp=null,Bp=null;function Vp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hp=typeof setTimeout=="function"?setTimeout:void 0,nR=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,rR=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch(iR)}:Hp;function iR(t){setTimeout(function(){throw t})}function kh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Za(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Za(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function H0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),$n="__reactFiber$"+Mo,il="__reactProps$"+Mo,mr="__reactContainer$"+Mo,qp="__reactEvents$"+Mo,sR="__reactListeners$"+Mo,oR="__reactHandles$"+Mo;function Ai(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mr]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=H0(t);t!==null;){if(n=t[$n])return n;t=H0(t)}return e}t=n,n=t.parentNode}return null}function Ul(t){return t=t[$n]||t[mr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Hd(t){return t[il]||null}var Wp=[],Ls=-1;function _i(t){return{current:t}}function be(t){0>Ls||(t.current=Wp[Ls],Wp[Ls]=null,Ls--)}function Ee(t,e){Ls++,Wp[Ls]=t.current,t.current=e}var fi={},Pt=_i(fi),Kt=_i(!1),Gi=fi;function fo(t,e){var n=t.type.contextTypes;if(!n)return fi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Gt(t){return t=t.childContextTypes,t!=null}function Gc(){be(Kt),be(Pt)}function q0(t,e,n){if(Pt.current!==fi)throw Error(A(168));Ee(Pt,e),Ee(Kt,n)}function fT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,H2(t)||"Unknown",i));return $e({},n,r)}function Qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fi,Gi=Pt.current,Ee(Pt,t),Ee(Kt,Kt.current),!0}function W0(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=fT(t,e,Gi),r.__reactInternalMemoizedMergedChildContext=t,be(Kt),be(Pt),Ee(Pt,t)):be(Kt),Ee(Kt,n)}var rr=null,qd=!1,Ih=!1;function hT(t){rr===null?rr=[t]:rr.push(t)}function aR(t){qd=!0,hT(t)}function Ti(){if(!Ih&&rr!==null){Ih=!0;var t=0,e=ge;try{var n=rr;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rr=null,qd=!1}catch(i){throw rr!==null&&(rr=rr.slice(t+1)),F_(xg,Ti),i}finally{ge=e,Ih=!1}}return null}var Ms=[],$s=0,Yc=null,Xc=0,fn=[],hn=0,Qi=null,ir=1,sr="";function xi(t,e){Ms[$s++]=Xc,Ms[$s++]=Yc,Yc=t,Xc=e}function pT(t,e,n){fn[hn++]=ir,fn[hn++]=sr,fn[hn++]=Qi,Qi=t;var r=ir;t=sr;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ir=1<<32-bn(e)+i|n<<i|r,sr=s+t}else ir=1<<s|n<<i|r,sr=t}function Mg(t){t.return!==null&&(xi(t,1),pT(t,1,0))}function $g(t){for(;t===Yc;)Yc=Ms[--$s],Ms[$s]=null,Xc=Ms[--$s],Ms[$s]=null;for(;t===Qi;)Qi=fn[--hn],fn[hn]=null,sr=fn[--hn],fn[hn]=null,ir=fn[--hn],fn[hn]=null}var nn=null,Zt=null,De=!1,Sn=null;function mT(t,e){var n=mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function K0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nn=t,Zt=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nn=t,Zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qi!==null?{id:ir,overflow:sr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nn=t,Zt=null,!0):!1;default:return!1}}function Kp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gp(t){if(De){var e=Zt;if(e){var n=e;if(!K0(t,e)){if(Kp(t))throw Error(A(418));e=ti(n.nextSibling);var r=nn;e&&K0(t,e)?mT(r,n):(t.flags=t.flags&-4097|2,De=!1,nn=t)}}else{if(Kp(t))throw Error(A(418));t.flags=t.flags&-4097|2,De=!1,nn=t}}}function G0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nn=t}function Ou(t){if(t!==nn)return!1;if(!De)return G0(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vp(t.type,t.memoizedProps)),e&&(e=Zt)){if(Kp(t))throw gT(),Error(A(418));for(;e;)mT(t,e),e=ti(e.nextSibling)}if(G0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Zt=ti(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Zt=null}}else Zt=nn?ti(t.stateNode.nextSibling):null;return!0}function gT(){for(var t=Zt;t;)t=ti(t.nextSibling)}function ho(){Zt=nn=null,De=!1}function Fg(t){Sn===null?Sn=[t]:Sn.push(t)}var lR=xr.ReactCurrentBatchConfig;function En(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Jc=_i(null),Zc=null,Fs=null,Ug=null;function jg(){Ug=Fs=Zc=null}function zg(t){var e=Jc.current;be(Jc),t._currentValue=e}function Qp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zs(t,e){Zc=t,Ug=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(Ug!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(Zc===null)throw Error(A(308));Fs=t,Zc.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Pi=null;function Bg(t){Pi===null?Pi=[t]:Pi.push(t)}function vT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Bg(e)):(n.next=i.next,i.next=n),e.interleaved=n,gr(t,r)}function gr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Vg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ni(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gr(t,n)}return i=r.interleaved,i===null?(e.next=e,Bg(r)):(e.next=i.next,i.next=e),r.interleaved=e,gr(t,n)}function Ec(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cg(t,n)}}function Q0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ed(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,h=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(f=e,h=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(h,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(h,d,f):g,f==null)break e;d=$e({},d,f);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else h={eventTime:h,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=h,l=d):c=c.next=h,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Xi|=o,t.lanes=o,t.memoizedState=d}}function Y0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var wT=new v_.Component().refs;function Yp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wd={isMounted:function(t){return(t=t._reactInternals)?fs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=ii(t),s=dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(xn(e,t,i,r),Ec(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ft(),i=ii(t),s=dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ni(t,s,i),e!==null&&(xn(e,t,i,r),Ec(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ft(),r=ii(t),i=dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=ni(t,i,r),e!==null&&(xn(e,t,r,n),Ec(e,t,r))}};function X0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!tl(n,r)||!tl(i,s):!0}function ET(t,e,n){var r=!1,i=fi,s=e.contextType;return typeof s=="object"&&s!==null?s=vn(s):(i=Gt(e)?Gi:Pt.current,r=e.contextTypes,s=(r=r!=null)?fo(t,i):fi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function J0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wd.enqueueReplaceState(e,e.state,null)}function Xp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=wT,Vg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=vn(s):(s=Gt(e)?Gi:Pt.current,i.context=fo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wd.enqueueReplaceState(i,i.state,null),ed(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===wT&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Lu(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Z0(t){var e=t._init;return e(t._payload)}function _T(t){function e(m,p){if(t){var w=m.deletions;w===null?(m.deletions=[p],m.flags|=16):w.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=si(m,p),m.index=0,m.sibling=null,m}function s(m,p,w){return m.index=w,t?(w=m.alternate,w!==null?(w=w.index,w<p?(m.flags|=2,p):w):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,w,v){return p===null||p.tag!==6?(p=Ph(w,m.mode,v),p.return=m,p):(p=i(p,w),p.return=m,p)}function l(m,p,w,v){var S=w.type;return S===Ns?c(m,p,w.props.children,v,w.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fr&&Z0(S)===p.type)?(v=i(p,w.props),v.ref=sa(m,p,w),v.return=m,v):(v=bc(w.type,w.key,w.props,null,m.mode,v),v.ref=sa(m,p,w),v.return=m,v)}function u(m,p,w,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==w.containerInfo||p.stateNode.implementation!==w.implementation?(p=Dh(w,m.mode,v),p.return=m,p):(p=i(p,w.children||[]),p.return=m,p)}function c(m,p,w,v,S){return p===null||p.tag!==7?(p=zi(w,m.mode,v,S),p.return=m,p):(p=i(p,w),p.return=m,p)}function d(m,p,w){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ph(""+p,m.mode,w),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ku:return w=bc(p.type,p.key,p.props,null,m.mode,w),w.ref=sa(m,null,p),w.return=m,w;case Rs:return p=Dh(p,m.mode,w),p.return=m,p;case Fr:var v=p._init;return d(m,v(p._payload),w)}if(ma(p)||ea(p))return p=zi(p,m.mode,w,null),p.return=m,p;Lu(m,p)}return null}function f(m,p,w,v){var S=p!==null?p.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:a(m,p,""+w,v);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ku:return w.key===S?l(m,p,w,v):null;case Rs:return w.key===S?u(m,p,w,v):null;case Fr:return S=w._init,f(m,p,S(w._payload),v)}if(ma(w)||ea(w))return S!==null?null:c(m,p,w,v,null);Lu(m,w)}return null}function h(m,p,w,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(w)||null,a(p,m,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ku:return m=m.get(v.key===null?w:v.key)||null,l(p,m,v,S);case Rs:return m=m.get(v.key===null?w:v.key)||null,u(p,m,v,S);case Fr:var x=v._init;return h(m,p,w,x(v._payload),S)}if(ma(v)||ea(v))return m=m.get(w)||null,c(p,m,v,S,null);Lu(p,v)}return null}function g(m,p,w,v){for(var S=null,x=null,b=p,R=p=0,F=null;b!==null&&R<w.length;R++){b.index>R?(F=b,b=null):F=b.sibling;var V=f(m,b,w[R],v);if(V===null){b===null&&(b=F);break}t&&b&&V.alternate===null&&e(m,b),p=s(V,p,R),x===null?S=V:x.sibling=V,x=V,b=F}if(R===w.length)return n(m,b),De&&xi(m,R),S;if(b===null){for(;R<w.length;R++)b=d(m,w[R],v),b!==null&&(p=s(b,p,R),x===null?S=b:x.sibling=b,x=b);return De&&xi(m,R),S}for(b=r(m,b);R<w.length;R++)F=h(b,m,R,w[R],v),F!==null&&(t&&F.alternate!==null&&b.delete(F.key===null?R:F.key),p=s(F,p,R),x===null?S=F:x.sibling=F,x=F);return t&&b.forEach(function(he){return e(m,he)}),De&&xi(m,R),S}function y(m,p,w,v){var S=ea(w);if(typeof S!="function")throw Error(A(150));if(w=S.call(w),w==null)throw Error(A(151));for(var x=S=null,b=p,R=p=0,F=null,V=w.next();b!==null&&!V.done;R++,V=w.next()){b.index>R?(F=b,b=null):F=b.sibling;var he=f(m,b,V.value,v);if(he===null){b===null&&(b=F);break}t&&b&&he.alternate===null&&e(m,b),p=s(he,p,R),x===null?S=he:x.sibling=he,x=he,b=F}if(V.done)return n(m,b),De&&xi(m,R),S;if(b===null){for(;!V.done;R++,V=w.next())V=d(m,V.value,v),V!==null&&(p=s(V,p,R),x===null?S=V:x.sibling=V,x=V);return De&&xi(m,R),S}for(b=r(m,b);!V.done;R++,V=w.next())V=h(b,m,R,V.value,v),V!==null&&(t&&V.alternate!==null&&b.delete(V.key===null?R:V.key),p=s(V,p,R),x===null?S=V:x.sibling=V,x=V);return t&&b.forEach(function(Q){return e(m,Q)}),De&&xi(m,R),S}function E(m,p,w,v){if(typeof w=="object"&&w!==null&&w.type===Ns&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case ku:e:{for(var S=w.key,x=p;x!==null;){if(x.key===S){if(S=w.type,S===Ns){if(x.tag===7){n(m,x.sibling),p=i(x,w.props.children),p.return=m,m=p;break e}}else if(x.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Fr&&Z0(S)===x.type){n(m,x.sibling),p=i(x,w.props),p.ref=sa(m,x,w),p.return=m,m=p;break e}n(m,x);break}else e(m,x);x=x.sibling}w.type===Ns?(p=zi(w.props.children,m.mode,v,w.key),p.return=m,m=p):(v=bc(w.type,w.key,w.props,null,m.mode,v),v.ref=sa(m,p,w),v.return=m,m=v)}return o(m);case Rs:e:{for(x=w.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===w.containerInfo&&p.stateNode.implementation===w.implementation){n(m,p.sibling),p=i(p,w.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Dh(w,m.mode,v),p.return=m,m=p}return o(m);case Fr:return x=w._init,E(m,p,x(w._payload),v)}if(ma(w))return g(m,p,w,v);if(ea(w))return y(m,p,w,v);Lu(m,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,w),p.return=m,m=p):(n(m,p),p=Ph(w,m.mode,v),p.return=m,m=p),o(m)):n(m,p)}return E}var po=_T(!0),TT=_T(!1),jl={},Hn=_i(jl),sl=_i(jl),ol=_i(jl);function Di(t){if(t===jl)throw Error(A(174));return t}function Hg(t,e){switch(Ee(ol,e),Ee(sl,t),Ee(Hn,jl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rp(e,t)}be(Hn),Ee(Hn,e)}function mo(){be(Hn),be(sl),be(ol)}function ST(t){Di(ol.current);var e=Di(Hn.current),n=Rp(e,t.type);e!==n&&(Ee(sl,t),Ee(Hn,n))}function qg(t){sl.current===t&&(be(Hn),be(sl))}var Le=_i(0);function td(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bh=[];function Wg(){for(var t=0;t<bh.length;t++)bh[t]._workInProgressVersionPrimary=null;bh.length=0}var _c=xr.ReactCurrentDispatcher,xh=xr.ReactCurrentBatchConfig,Yi=0,Me=null,rt=null,lt=null,nd=!1,Pa=!1,al=0,uR=0;function _t(){throw Error(A(321))}function Kg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function Gg(t,e,n,r,i,s){if(Yi=s,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_c.current=t===null||t.memoizedState===null?hR:pR,t=n(r,i),Pa){s=0;do{if(Pa=!1,al=0,25<=s)throw Error(A(301));s+=1,lt=rt=null,e.updateQueue=null,_c.current=mR,t=n(r,i)}while(Pa)}if(_c.current=rd,e=rt!==null&&rt.next!==null,Yi=0,lt=rt=Me=null,nd=!1,e)throw Error(A(300));return t}function Qg(){var t=al!==0;return al=0,t}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return lt===null?Me.memoizedState=lt=t:lt=lt.next=t,lt}function yn(){if(rt===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=lt===null?Me.memoizedState:lt.next;if(e!==null)lt=e,rt=t;else{if(t===null)throw Error(A(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},lt===null?Me.memoizedState=lt=t:lt=lt.next=t}return lt}function ll(t,e){return typeof e=="function"?e(t):e}function Ch(t){var e=yn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=rt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Yi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Me.lanes|=c,Xi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Me.lanes|=s,Xi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rh(t){var e=yn(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Rn(s,e.memoizedState)||(qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kT(){}function IT(t,e){var n=Me,r=yn(),i=e(),s=!Rn(r.memoizedState,i);if(s&&(r.memoizedState=i,qt=!0),r=r.queue,Yg(CT.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||lt!==null&&lt.memoizedState.tag&1){if(n.flags|=2048,ul(9,xT.bind(null,n,r,i,e),void 0,null),ut===null)throw Error(A(349));Yi&30||bT(n,e,i)}return i}function bT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xT(t,e,n,r){e.value=n,e.getSnapshot=r,RT(e)&&NT(t)}function CT(t,e,n){return n(function(){RT(e)&&NT(t)})}function RT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function NT(t){var e=gr(t,1);e!==null&&xn(e,t,1,-1)}function e1(t){var e=Mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:t},e.queue=t,t=t.dispatch=fR.bind(null,Me,t),[e.memoizedState,t]}function ul(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function AT(){return yn().memoizedState}function Tc(t,e,n,r){var i=Mn();Me.flags|=t,i.memoizedState=ul(1|e,n,void 0,r===void 0?null:r)}function Kd(t,e,n,r){var i=yn();r=r===void 0?null:r;var s=void 0;if(rt!==null){var o=rt.memoizedState;if(s=o.destroy,r!==null&&Kg(r,o.deps)){i.memoizedState=ul(e,n,s,r);return}}Me.flags|=t,i.memoizedState=ul(1|e,n,s,r)}function t1(t,e){return Tc(8390656,8,t,e)}function Yg(t,e){return Kd(2048,8,t,e)}function PT(t,e){return Kd(4,2,t,e)}function DT(t,e){return Kd(4,4,t,e)}function OT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function LT(t,e,n){return n=n!=null?n.concat([t]):null,Kd(4,4,OT.bind(null,e,t),n)}function Xg(){}function MT(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $T(t,e){var n=yn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function FT(t,e,n){return Yi&21?(Rn(n,e)||(n=z_(),Me.lanes|=n,Xi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function cR(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=xh.transition;xh.transition={};try{t(!1),e()}finally{ge=n,xh.transition=r}}function UT(){return yn().memoizedState}function dR(t,e,n){var r=ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jT(t))zT(e,n);else if(n=vT(t,e,n,r),n!==null){var i=Ft();xn(n,t,r,i),BT(n,e,r)}}function fR(t,e,n){var r=ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jT(t))zT(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(i.next=i,Bg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=vT(t,e,i,r),n!==null&&(i=Ft(),xn(n,t,r,i),BT(n,e,r))}}function jT(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function zT(t,e){Pa=nd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function BT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cg(t,n)}}var rd={readContext:vn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},hR={readContext:vn,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:t1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Tc(4194308,4,OT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Tc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Tc(4,2,t,e)},useMemo:function(t,e){var n=Mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dR.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:e1,useDebugValue:Xg,useDeferredValue:function(t){return Mn().memoizedState=t},useTransition:function(){var t=e1(!1),e=t[0];return t=cR.bind(null,t[1]),Mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,i=Mn();if(De){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),ut===null)throw Error(A(349));Yi&30||bT(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,t1(CT.bind(null,r,s,t),[t]),r.flags|=2048,ul(9,xT.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mn(),e=ut.identifierPrefix;if(De){var n=sr,r=ir;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=al++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pR={readContext:vn,useCallback:MT,useContext:vn,useEffect:Yg,useImperativeHandle:LT,useInsertionEffect:PT,useLayoutEffect:DT,useMemo:$T,useReducer:Ch,useRef:AT,useState:function(){return Ch(ll)},useDebugValue:Xg,useDeferredValue:function(t){var e=yn();return FT(e,rt.memoizedState,t)},useTransition:function(){var t=Ch(ll)[0],e=yn().memoizedState;return[t,e]},useMutableSource:kT,useSyncExternalStore:IT,useId:UT,unstable_isNewReconciler:!1},mR={readContext:vn,useCallback:MT,useContext:vn,useEffect:Yg,useImperativeHandle:LT,useInsertionEffect:PT,useLayoutEffect:DT,useMemo:$T,useReducer:Rh,useRef:AT,useState:function(){return Rh(ll)},useDebugValue:Xg,useDeferredValue:function(t){var e=yn();return rt===null?e.memoizedState=t:FT(e,rt.memoizedState,t)},useTransition:function(){var t=Rh(ll)[0],e=yn().memoizedState;return[t,e]},useMutableSource:kT,useSyncExternalStore:IT,useId:UT,unstable_isNewReconciler:!1};function go(t,e){try{var n="",r=e;do n+=V2(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Jp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gR=typeof WeakMap=="function"?WeakMap:Map;function VT(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sd||(sd=!0,lm=r),Jp(t,e)},n}function HT(t,e,n){n=dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Jp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Jp(t,e),typeof r!="function"&&(ri===null?ri=new Set([this]):ri.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function n1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=NR.bind(null,t,e,n),e.then(t,t))}function r1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function i1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,ni(n,e,1))),n.lanes|=1),t)}var vR=xr.ReactCurrentOwner,qt=!1;function Mt(t,e,n,r){e.child=t===null?TT(e,null,n,r):po(e,t.child,n,r)}function s1(t,e,n,r,i){n=n.render;var s=e.ref;return Zs(e,i),r=Gg(t,e,n,r,s,i),n=Qg(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(De&&n&&Mg(e),e.flags|=1,Mt(t,e,r,i),e.child)}function o1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sv(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,qT(t,e,s,r,i)):(t=bc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(o,r)&&t.ref===e.ref)return vr(t,e,i)}return e.flags|=1,t=si(s,r),t.ref=e.ref,t.return=e,e.child=t}function qT(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(tl(s,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,vr(t,e,i)}return Zp(t,e,n,r,i)}function WT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(js,Jt),Jt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(js,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ee(js,Jt),Jt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ee(js,Jt),Jt|=r;return Mt(t,e,i,n),e.child}function KT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zp(t,e,n,r,i){var s=Gt(n)?Gi:Pt.current;return s=fo(e,s),Zs(e,i),n=Gg(t,e,n,r,s,i),r=Qg(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vr(t,e,i)):(De&&r&&Mg(e),e.flags|=1,Mt(t,e,n,i),e.child)}function a1(t,e,n,r,i){if(Gt(n)){var s=!0;Qc(e)}else s=!1;if(Zs(e,i),e.stateNode===null)Sc(t,e),ET(e,n,r),Xp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vn(u):(u=Gt(n)?Gi:Pt.current,u=fo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&J0(e,o,r,u),Ur=!1;var f=e.memoizedState;o.state=f,ed(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Kt.current||Ur?(typeof c=="function"&&(Yp(e,n,c,r),l=e.memoizedState),(a=Ur||X0(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,yT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:En(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vn(l):(l=Gt(n)?Gi:Pt.current,l=fo(e,l));var h=n.getDerivedStateFromProps;(c=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&J0(e,o,r,l),Ur=!1,f=e.memoizedState,o.state=f,ed(e,r,o,i);var g=e.memoizedState;a!==d||f!==g||Kt.current||Ur?(typeof h=="function"&&(Yp(e,n,h,r),g=e.memoizedState),(u=Ur||X0(e,n,u,r,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return em(t,e,n,r,s,i)}function em(t,e,n,r,i,s){KT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&W0(e,n,!1),vr(t,e,s);r=e.stateNode,vR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,null,s),e.child=po(e,null,a,s)):Mt(t,e,a,s),e.memoizedState=r.state,i&&W0(e,n,!0),e.child}function GT(t){var e=t.stateNode;e.pendingContext?q0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&q0(t,e.context,!1),Hg(t,e.containerInfo)}function l1(t,e,n,r,i){return ho(),Fg(i),e.flags|=256,Mt(t,e,n,r),e.child}var tm={dehydrated:null,treeContext:null,retryLane:0};function nm(t){return{baseLanes:t,cachePool:null,transitions:null}}function QT(t,e,n){var r=e.pendingProps,i=Le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ee(Le,i&1),t===null)return Gp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yd(o,r,0,null),t=zi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nm(n),e.memoizedState=tm,t):Jg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return yR(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=si(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=si(a,s):(s=zi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=tm,r}return s=t.child,t=s.sibling,r=si(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jg(t,e){return e=Yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mu(t,e,n,r){return r!==null&&Fg(r),po(e,t.child,null,n),t=Jg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nh(Error(A(422))),Mu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yd({mode:"visible",children:r.children},i,0,null),s=zi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&po(e,t.child,null,o),e.child.memoizedState=nm(o),e.memoizedState=tm,s);if(!(e.mode&1))return Mu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Nh(s,r,void 0),Mu(t,e,o,r)}if(a=(o&t.childLanes)!==0,qt||a){if(r=ut,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gr(t,i),xn(r,t,i,-1))}return iv(),r=Nh(Error(A(421))),Mu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=AR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Zt=ti(i.nextSibling),nn=e,De=!0,Sn=null,t!==null&&(fn[hn++]=ir,fn[hn++]=sr,fn[hn++]=Qi,ir=t.id,sr=t.overflow,Qi=e),e=Jg(e,r.children),e.flags|=4096,e)}function u1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Qp(t.return,e,n)}function Ah(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function YT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Mt(t,e,r.children,n),r=Le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u1(t,n,e);else if(t.tag===19)u1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&td(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ah(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&td(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ah(e,!0,n,null,s);break;case"together":Ah(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=si(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=si(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wR(t,e,n){switch(e.tag){case 3:GT(e),ho();break;case 5:ST(e);break;case 1:Gt(e.type)&&Qc(e);break;case 4:Hg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ee(Jc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Le,Le.current&1),e.flags|=128,null):n&e.child.childLanes?QT(t,e,n):(Ee(Le,Le.current&1),t=vr(t,e,n),t!==null?t.sibling:null);Ee(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return YT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ee(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,WT(t,e,n)}return vr(t,e,n)}var XT,rm,JT,ZT;XT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rm=function(){};JT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Di(Hn.current);var s=null;switch(n){case"input":i=Ip(t,i),r=Ip(t,r),s=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),s=[];break;case"textarea":i=Cp(t,i),r=Cp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Kc)}Np(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ga.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ga.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ZT=function(t,e,n,r){n!==r&&(e.flags|=4)};function oa(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ER(t,e,n){var r=e.pendingProps;switch($g(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Gt(e.type)&&Gc(),Tt(e),null;case 3:return r=e.stateNode,mo(),be(Kt),be(Pt),Wg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ou(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Sn!==null&&(dm(Sn),Sn=null))),rm(t,e),Tt(e),null;case 5:qg(e);var i=Di(ol.current);if(n=e.type,t!==null&&e.stateNode!=null)JT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Tt(e),null}if(t=Di(Hn.current),Ou(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[il]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<va.length;i++)Te(va[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":y0(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":E0(r,s),Te("invalid",r)}Np(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Du(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Du(r.textContent,a,t),i=["children",""+a]):Ga.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Iu(r),w0(r,s,!0);break;case"textarea":Iu(r),_0(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Kc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=b_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[il]=r,XT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ap(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<va.length;i++)Te(va[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":y0(t,r),i=Ip(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Te("invalid",t);break;case"textarea":E0(t,r),i=Cp(t,r),Te("invalid",t);break;default:i=r}Np(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?R_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&x_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qa(t,l):typeof l=="number"&&Qa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Te("scroll",t):l!=null&&Tg(t,s,l,o))}switch(n){case"input":Iu(t),w0(t,r,!1);break;case"textarea":Iu(t),_0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+di(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qs(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Kc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)ZT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Di(ol.current),Di(Hn.current),Ou(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(s=r.nodeValue!==n)&&(t=nn,t!==null))switch(t.tag){case 3:Du(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Du(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return Tt(e),null;case 13:if(be(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Zt!==null&&e.mode&1&&!(e.flags&128))gT(),ho(),e.flags|=98560,s=!1;else if(s=Ou(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[$n]=e}else ho(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),s=!1}else Sn!==null&&(dm(Sn),Sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Le.current&1?it===0&&(it=3):iv())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return mo(),rm(t,e),t===null&&nl(e.stateNode.containerInfo),Tt(e),null;case 10:return zg(e.type._context),Tt(e),null;case 17:return Gt(e.type)&&Gc(),Tt(e),null;case 19:if(be(Le),s=e.memoizedState,s===null)return Tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)oa(s,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=td(t),o!==null){for(e.flags|=128,oa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Le,Le.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ge()>vo&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304)}else{if(!r)if(t=td(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!De)return Tt(e),null}else 2*Ge()-s.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,r=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ge(),e.sibling=null,n=Le.current,Ee(Le,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return rv(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function _R(t,e){switch($g(e),e.tag){case 1:return Gt(e.type)&&Gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return mo(),be(Kt),be(Pt),Wg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qg(e),null;case 13:if(be(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));ho()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Le),null;case 4:return mo(),null;case 10:return zg(e.type._context),null;case 22:case 23:return rv(),null;case 24:return null;default:return null}}var $u=!1,It=!1,TR=typeof WeakSet=="function"?WeakSet:Set,M=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function im(t,e,n){try{n()}catch(r){qe(t,e,r)}}var c1=!1;function SR(t,e){if(zp=Hc,t=rT(),Lg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var h;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bp={focusedElem:t,selectionRange:n},Hc=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,E=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:En(e.type,y),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(v){qe(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return g=c1,c1=!1,g}function Da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&im(e,n,s)}i=i.next}while(i!==r)}}function Gd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function eS(t){var e=t.alternate;e!==null&&(t.alternate=null,eS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[il],delete e[qp],delete e[sR],delete e[oR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tS(t){return t.tag===5||t.tag===3||t.tag===4}function d1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function om(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kc));else if(r!==4&&(t=t.child,t!==null))for(om(t,e,n),t=t.sibling;t!==null;)om(t,e,n),t=t.sibling}function am(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(am(t,e,n),t=t.sibling;t!==null;)am(t,e,n),t=t.sibling}var pt=null,_n=!1;function Lr(t,e,n){for(n=n.child;n!==null;)nS(t,e,n),n=n.sibling}function nS(t,e,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(jd,n)}catch{}switch(n.tag){case 5:It||Us(n,e);case 6:var r=pt,i=_n;pt=null,Lr(t,e,n),pt=r,_n=i,pt!==null&&(_n?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(_n?(t=pt,n=n.stateNode,t.nodeType===8?kh(t.parentNode,n):t.nodeType===1&&kh(t,n),Za(t)):kh(pt,n.stateNode));break;case 4:r=pt,i=_n,pt=n.stateNode.containerInfo,_n=!0,Lr(t,e,n),pt=r,_n=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&im(n,e,o),i=i.next}while(i!==r)}Lr(t,e,n);break;case 1:if(!It&&(Us(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Lr(t,e,n),It=r):Lr(t,e,n);break;default:Lr(t,e,n)}}function f1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TR),e.forEach(function(r){var i=PR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,_n=!1;break e;case 3:pt=a.stateNode.containerInfo,_n=!0;break e;case 4:pt=a.stateNode.containerInfo,_n=!0;break e}a=a.return}if(pt===null)throw Error(A(160));nS(s,o,i),pt=null,_n=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){qe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rS(e,t),e=e.sibling}function rS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Ln(t),r&4){try{Da(3,t,t.return),Gd(3,t)}catch(y){qe(t,t.return,y)}try{Da(5,t,t.return)}catch(y){qe(t,t.return,y)}}break;case 1:wn(e,t),Ln(t),r&512&&n!==null&&Us(n,n.return);break;case 5:if(wn(e,t),Ln(t),r&512&&n!==null&&Us(n,n.return),t.flags&32){var i=t.stateNode;try{Qa(i,"")}catch(y){qe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&k_(i,s),Ap(a,o);var u=Ap(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?R_(i,d):c==="dangerouslySetInnerHTML"?x_(i,d):c==="children"?Qa(i,d):Tg(i,c,d,u)}switch(a){case"input":bp(i,s);break;case"textarea":I_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Qs(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qs(i,!!s.multiple,s.defaultValue,!0):Qs(i,!!s.multiple,s.multiple?[]:"",!1))}i[il]=s}catch(y){qe(t,t.return,y)}}break;case 6:if(wn(e,t),Ln(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){qe(t,t.return,y)}}break;case 3:if(wn(e,t),Ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Za(e.containerInfo)}catch(y){qe(t,t.return,y)}break;case 4:wn(e,t),Ln(t);break;case 13:wn(e,t),Ln(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tv=Ge())),r&4&&f1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(It=(u=It)||c,wn(e,t),It=u):wn(e,t),Ln(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(d=M=c;M!==null;){switch(f=M,h=f.child,f.tag){case 0:case 11:case 14:case 15:Da(4,f,f.return);break;case 1:Us(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){qe(r,n,y)}}break;case 5:Us(f,f.return);break;case 22:if(f.memoizedState!==null){p1(d);continue}}h!==null?(h.return=f,M=h):p1(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=C_("display",o))}catch(y){qe(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){qe(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:wn(e,t),Ln(t),r&4&&f1(t);break;case 21:break;default:wn(e,t),Ln(t)}}function Ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tS(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qa(i,""),r.flags&=-33);var s=d1(t);am(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=d1(t);om(t,a,o);break;default:throw Error(A(161))}}catch(l){qe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kR(t,e,n){M=t,iS(t)}function iS(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$u;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||It;a=$u;var u=It;if($u=o,(It=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?m1(i):l!==null?(l.return=o,M=l):m1(i);for(;s!==null;)M=s,iS(s),s=s.sibling;M=i,$u=a,It=u}h1(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):h1(t)}}function h1(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Gd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Y0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Y0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Za(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}It||e.flags&512&&sm(e)}catch(f){qe(e,e.return,f)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function p1(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function m1(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gd(4,e)}catch(l){qe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){qe(e,i,l)}}var s=e.return;try{sm(e)}catch(l){qe(e,s,l)}break;case 5:var o=e.return;try{sm(e)}catch(l){qe(e,o,l)}}}catch(l){qe(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var IR=Math.ceil,id=xr.ReactCurrentDispatcher,Zg=xr.ReactCurrentOwner,gn=xr.ReactCurrentBatchConfig,ue=0,ut=null,et=null,yt=0,Jt=0,js=_i(0),it=0,cl=null,Xi=0,Qd=0,ev=0,Oa=null,Vt=null,tv=0,vo=1/0,nr=null,sd=!1,lm=null,ri=null,Fu=!1,Gr=null,od=0,La=0,um=null,kc=-1,Ic=0;function Ft(){return ue&6?Ge():kc!==-1?kc:kc=Ge()}function ii(t){return t.mode&1?ue&2&&yt!==0?yt&-yt:lR.transition!==null?(Ic===0&&(Ic=z_()),Ic):(t=ge,t!==0||(t=window.event,t=t===void 0?16:G_(t.type)),t):1}function xn(t,e,n,r){if(50<La)throw La=0,um=null,Error(A(185));$l(t,n,r),(!(ue&2)||t!==ut)&&(t===ut&&(!(ue&2)&&(Qd|=n),it===4&&zr(t,yt)),Qt(t,r),n===1&&ue===0&&!(e.mode&1)&&(vo=Ge()+500,qd&&Ti()))}function Qt(t,e){var n=t.callbackNode;lC(t,e);var r=Vc(t,t===ut?yt:0);if(r===0)n!==null&&k0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&k0(n),e===1)t.tag===0?aR(g1.bind(null,t)):hT(g1.bind(null,t)),rR(function(){!(ue&6)&&Ti()}),n=null;else{switch(B_(r)){case 1:n=xg;break;case 4:n=U_;break;case 16:n=Bc;break;case 536870912:n=j_;break;default:n=Bc}n=fS(n,sS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sS(t,e){if(kc=-1,Ic=0,ue&6)throw Error(A(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var r=Vc(t,t===ut?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ad(t,r);else{e=r;var i=ue;ue|=2;var s=aS();(ut!==t||yt!==e)&&(nr=null,vo=Ge()+500,ji(t,e));do try{CR();break}catch(a){oS(t,a)}while(1);jg(),id.current=s,ue=i,et!==null?e=0:(ut=null,yt=0,e=it)}if(e!==0){if(e===2&&(i=Mp(t),i!==0&&(r=i,e=cm(t,i))),e===1)throw n=cl,ji(t,0),zr(t,r),Qt(t,Ge()),n;if(e===6)zr(t,r);else{if(i=t.current.alternate,!(r&30)&&!bR(i)&&(e=ad(t,r),e===2&&(s=Mp(t),s!==0&&(r=s,e=cm(t,s))),e===1))throw n=cl,ji(t,0),zr(t,r),Qt(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Ci(t,Vt,nr);break;case 3:if(zr(t,r),(r&130023424)===r&&(e=tv+500-Ge(),10<e)){if(Vc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hp(Ci.bind(null,t,Vt,nr),e);break}Ci(t,Vt,nr);break;case 4:if(zr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IR(r/1960))-r,10<r){t.timeoutHandle=Hp(Ci.bind(null,t,Vt,nr),r);break}Ci(t,Vt,nr);break;case 5:Ci(t,Vt,nr);break;default:throw Error(A(329))}}}return Qt(t,Ge()),t.callbackNode===n?sS.bind(null,t):null}function cm(t,e){var n=Oa;return t.current.memoizedState.isDehydrated&&(ji(t,e).flags|=256),t=ad(t,e),t!==2&&(e=Vt,Vt=n,e!==null&&dm(e)),t}function dm(t){Vt===null?Vt=t:Vt.push.apply(Vt,t)}function bR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zr(t,e){for(e&=~ev,e&=~Qd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function g1(t){if(ue&6)throw Error(A(327));eo();var e=Vc(t,0);if(!(e&1))return Qt(t,Ge()),null;var n=ad(t,e);if(t.tag!==0&&n===2){var r=Mp(t);r!==0&&(e=r,n=cm(t,r))}if(n===1)throw n=cl,ji(t,0),zr(t,e),Qt(t,Ge()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ci(t,Vt,nr),Qt(t,Ge()),null}function nv(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(vo=Ge()+500,qd&&Ti())}}function Ji(t){Gr!==null&&Gr.tag===0&&!(ue&6)&&eo();var e=ue;ue|=1;var n=gn.transition,r=ge;try{if(gn.transition=null,ge=1,t)return t()}finally{ge=r,gn.transition=n,ue=e,!(ue&6)&&Ti()}}function rv(){Jt=js.current,be(js)}function ji(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nR(n)),et!==null)for(n=et.return;n!==null;){var r=n;switch($g(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gc();break;case 3:mo(),be(Kt),be(Pt),Wg();break;case 5:qg(r);break;case 4:mo();break;case 13:be(Le);break;case 19:be(Le);break;case 10:zg(r.type._context);break;case 22:case 23:rv()}n=n.return}if(ut=t,et=t=si(t.current,null),yt=Jt=e,it=0,cl=null,ev=Qd=Xi=0,Vt=Oa=null,Pi!==null){for(e=0;e<Pi.length;e++)if(n=Pi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pi=null}return t}function oS(t,e){do{var n=et;try{if(jg(),_c.current=rd,nd){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nd=!1}if(Yi=0,lt=rt=Me=null,Pa=!1,al=0,Zg.current=null,n===null||n.return===null){it=1,cl=e,et=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=r1(o);if(h!==null){h.flags&=-257,i1(h,o,a,s,e),h.mode&1&&n1(s,u,e),e=h,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){n1(s,u,e),iv();break e}l=Error(A(426))}}else if(De&&a.mode&1){var E=r1(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),i1(E,o,a,s,e),Fg(go(l,a));break e}}s=l=go(l,a),it!==4&&(it=2),Oa===null?Oa=[s]:Oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=VT(s,l,e);Q0(s,m);break e;case 1:a=l;var p=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ri===null||!ri.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=HT(s,a,e);Q0(s,v);break e}}s=s.return}while(s!==null)}uS(n)}catch(S){e=S,et===n&&n!==null&&(et=n=n.return);continue}break}while(1)}function aS(){var t=id.current;return id.current=rd,t===null?rd:t}function iv(){(it===0||it===3||it===2)&&(it=4),ut===null||!(Xi&268435455)&&!(Qd&268435455)||zr(ut,yt)}function ad(t,e){var n=ue;ue|=2;var r=aS();(ut!==t||yt!==e)&&(nr=null,ji(t,e));do try{xR();break}catch(i){oS(t,i)}while(1);if(jg(),ue=n,id.current=r,et!==null)throw Error(A(261));return ut=null,yt=0,it}function xR(){for(;et!==null;)lS(et)}function CR(){for(;et!==null&&!Z2();)lS(et)}function lS(t){var e=dS(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?uS(t):et=e,Zg.current=null}function uS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=_R(n,e),n!==null){n.flags&=32767,et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,et=null;return}}else if(n=ER(n,e,Jt),n!==null){et=n;return}if(e=e.sibling,e!==null){et=e;return}et=e=t}while(e!==null);it===0&&(it=5)}function Ci(t,e,n){var r=ge,i=gn.transition;try{gn.transition=null,ge=1,RR(t,e,n,r)}finally{gn.transition=i,ge=r}return null}function RR(t,e,n,r){do eo();while(Gr!==null);if(ue&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uC(t,s),t===ut&&(et=ut=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fu||(Fu=!0,fS(Bc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gn.transition,gn.transition=null;var o=ge;ge=1;var a=ue;ue|=4,Zg.current=null,SR(t,n),rS(n,t),QC(Bp),Hc=!!zp,Bp=zp=null,t.current=n,kR(n),eC(),ue=a,ge=o,gn.transition=s}else t.current=n;if(Fu&&(Fu=!1,Gr=t,od=i),s=t.pendingLanes,s===0&&(ri=null),rC(n.stateNode),Qt(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sd)throw sd=!1,t=lm,lm=null,t;return od&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===um?La++:(La=0,um=t):La=0,Ti(),null}function eo(){if(Gr!==null){var t=B_(od),e=gn.transition,n=ge;try{if(gn.transition=null,ge=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,od=0,ue&6)throw Error(A(331));var i=ue;for(ue|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Da(8,c,s)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var f=c.sibling,h=c.return;if(eS(c),c===u){M=null;break}if(f!==null){f.return=h,M=f;break}M=h}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var E=y.sibling;y.sibling=null,y=E}while(y!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Da(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,M=m;break e}M=s.return}}var p=t.current;for(M=p;M!==null;){o=M;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,M=w;else e:for(o=p;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gd(9,a)}}catch(S){qe(a,a.return,S)}if(a===o){M=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,M=v;break e}M=a.return}}if(ue=i,Ti(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(jd,t)}catch{}r=!0}return r}finally{ge=n,gn.transition=e}}return!1}function v1(t,e,n){e=go(n,e),e=VT(t,e,1),t=ni(t,e,1),e=Ft(),t!==null&&($l(t,1,e),Qt(t,e))}function qe(t,e,n){if(t.tag===3)v1(t,t,n);else for(;e!==null;){if(e.tag===3){v1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ri===null||!ri.has(r))){t=go(n,t),t=HT(e,t,1),e=ni(e,t,1),t=Ft(),e!==null&&($l(e,1,t),Qt(e,t));break}}e=e.return}}function NR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ft(),t.pingedLanes|=t.suspendedLanes&n,ut===t&&(yt&n)===n&&(it===4||it===3&&(yt&130023424)===yt&&500>Ge()-tv?ji(t,0):ev|=n),Qt(t,e)}function cS(t,e){e===0&&(t.mode&1?(e=Cu,Cu<<=1,!(Cu&130023424)&&(Cu=4194304)):e=1);var n=Ft();t=gr(t,e),t!==null&&($l(t,e,n),Qt(t,n))}function AR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cS(t,n)}function PR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),cS(t,n)}var dS;dS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,wR(t,e,n);qt=!!(t.flags&131072)}else qt=!1,De&&e.flags&1048576&&pT(e,Xc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sc(t,e),t=e.pendingProps;var i=fo(e,Pt.current);Zs(e,n),i=Gg(null,e,r,t,i,n);var s=Qg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Gt(r)?(s=!0,Qc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vg(e),i.updater=Wd,e.stateNode=i,i._reactInternals=e,Xp(e,r,t,n),e=em(null,e,r,!0,s,n)):(e.tag=0,De&&s&&Mg(e),Mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=OR(r),t=En(r,t),i){case 0:e=Zp(null,e,r,t,n);break e;case 1:e=a1(null,e,r,t,n);break e;case 11:e=s1(null,e,r,t,n);break e;case 14:e=o1(null,e,r,En(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Zp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),a1(t,e,r,i,n);case 3:e:{if(GT(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,yT(t,e),ed(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=go(Error(A(423)),e),e=l1(t,e,r,n,i);break e}else if(r!==i){i=go(Error(A(424)),e),e=l1(t,e,r,n,i);break e}else for(Zt=ti(e.stateNode.containerInfo.firstChild),nn=e,De=!0,Sn=null,n=TT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ho(),r===i){e=vr(t,e,n);break e}Mt(t,e,r,n)}e=e.child}return e;case 5:return ST(e),t===null&&Gp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Vp(r,i)?o=null:s!==null&&Vp(r,s)&&(e.flags|=32),KT(t,e),Mt(t,e,o,n),e.child;case 6:return t===null&&Gp(e),null;case 13:return QT(t,e,n);case 4:return Hg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=po(e,null,r,n):Mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),s1(t,e,r,i,n);case 7:return Mt(t,e,e.pendingProps,n),e.child;case 8:return Mt(t,e,e.pendingProps.children,n),e.child;case 12:return Mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ee(Jc,r._currentValue),r._currentValue=o,s!==null)if(Rn(s.value,o)){if(s.children===i.children&&!Kt.current){e=vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=dr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zs(e,n),i=vn(i),r=r(i),e.flags|=1,Mt(t,e,r,n),e.child;case 14:return r=e.type,i=En(r,e.pendingProps),i=En(r.type,i),o1(t,e,r,i,n);case 15:return qT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:En(r,i),Sc(t,e),e.tag=1,Gt(r)?(t=!0,Qc(e)):t=!1,Zs(e,n),ET(e,r,i),Xp(e,r,i,n),em(null,e,r,!0,t,n);case 19:return YT(t,e,n);case 22:return WT(t,e,n)}throw Error(A(156,e.tag))};function fS(t,e){return F_(t,e)}function DR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(t,e,n,r){return new DR(t,e,n,r)}function sv(t){return t=t.prototype,!(!t||!t.isReactComponent)}function OR(t){if(typeof t=="function")return sv(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kg)return 11;if(t===Ig)return 14}return 2}function si(t,e){var n=t.alternate;return n===null?(n=mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sv(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return zi(n.children,i,s,e);case Sg:o=8,i|=8;break;case _p:return t=mn(12,n,e,i|2),t.elementType=_p,t.lanes=s,t;case Tp:return t=mn(13,n,e,i),t.elementType=Tp,t.lanes=s,t;case Sp:return t=mn(19,n,e,i),t.elementType=Sp,t.lanes=s,t;case __:return Yd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w_:o=10;break e;case E_:o=9;break e;case kg:o=11;break e;case Ig:o=14;break e;case Fr:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zi(t,e,n,r){return t=mn(7,t,r,e),t.lanes=n,t}function Yd(t,e,n,r){return t=mn(22,t,r,e),t.elementType=__,t.lanes=n,t.stateNode={isHidden:!1},t}function Ph(t,e,n){return t=mn(6,t,null,e),t.lanes=n,t}function Dh(t,e,n){return e=mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hh(0),this.expirationTimes=hh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ov(t,e,n,r,i,s,o,a,l){return t=new LR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vg(s),t}function MR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hS(t){if(!t)return fi;t=t._reactInternals;e:{if(fs(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(Gt(n))return fT(t,n,e)}return e}function pS(t,e,n,r,i,s,o,a,l){return t=ov(n,r,!0,t,i,s,o,a,l),t.context=hS(null),n=t.current,r=Ft(),i=ii(n),s=dr(r,i),s.callback=e??null,ni(n,s,i),t.current.lanes=i,$l(t,i,r),Qt(t,r),t}function Xd(t,e,n,r){var i=e.current,s=Ft(),o=ii(i);return n=hS(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ni(i,e,o),t!==null&&(xn(t,i,o,s),Ec(t,i,o)),o}function ld(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function y1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function av(t,e){y1(t,e),(t=t.alternate)&&y1(t,e)}function $R(){return null}var mS=typeof reportError=="function"?reportError:function(t){console.error(t)};function lv(t){this._internalRoot=t}Jd.prototype.render=lv.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Xd(t,e,null,null)};Jd.prototype.unmount=lv.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ji(function(){Xd(null,t,null,null)}),e[mr]=null}};function Jd(t){this._internalRoot=t}Jd.prototype.unstable_scheduleHydration=function(t){if(t){var e=q_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&K_(t)}};function uv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function w1(){}function FR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ld(o);s.call(u)}}var o=pS(e,r,t,0,null,!1,!1,"",w1);return t._reactRootContainer=o,t[mr]=o.current,nl(t.nodeType===8?t.parentNode:t),Ji(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ld(l);a.call(u)}}var l=ov(t,0,!1,null,null,!1,!1,"",w1);return t._reactRootContainer=l,t[mr]=l.current,nl(t.nodeType===8?t.parentNode:t),Ji(function(){Xd(e,l,n,r)}),l}function ef(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ld(o);a.call(l)}}Xd(e,o,t,i)}else o=FR(n,e,t,i,r);return ld(o)}V_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Cg(e,n|1),Qt(e,Ge()),!(ue&6)&&(vo=Ge()+500,Ti()))}break;case 13:Ji(function(){var r=gr(t,1);if(r!==null){var i=Ft();xn(r,t,1,i)}}),av(t,1)}};Rg=function(t){if(t.tag===13){var e=gr(t,134217728);if(e!==null){var n=Ft();xn(e,t,134217728,n)}av(t,134217728)}};H_=function(t){if(t.tag===13){var e=ii(t),n=gr(t,e);if(n!==null){var r=Ft();xn(n,t,e,r)}av(t,e)}};q_=function(){return ge};W_=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Dp=function(t,e,n){switch(e){case"input":if(bp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hd(r);if(!i)throw Error(A(90));S_(r),bp(r,i)}}}break;case"textarea":I_(t,n);break;case"select":e=n.value,e!=null&&Qs(t,!!n.multiple,e,!1)}};P_=nv;D_=Ji;var UR={usingClientEntryPoint:!1,Events:[Ul,Os,Hd,N_,A_,nv]},aa={findFiberByHostInstance:Ai,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jR={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M_(t),t===null?null:t.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||$R,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uu.isDisabled&&Uu.supportsFiber)try{jd=Uu.inject(jR),Vn=Uu}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UR;on.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uv(e))throw Error(A(200));return MR(t,e,null,n)};on.createRoot=function(t,e){if(!uv(t))throw Error(A(299));var n=!1,r="",i=mS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ov(t,1,!1,null,null,n,!1,r,i),t[mr]=e.current,nl(t.nodeType===8?t.parentNode:t),new lv(e)};on.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=M_(e),t=t===null?null:t.stateNode,t};on.flushSync=function(t){return Ji(t)};on.hydrate=function(t,e,n){if(!Zd(e))throw Error(A(200));return ef(null,t,e,!0,n)};on.hydrateRoot=function(t,e,n){if(!uv(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pS(e,null,t,1,n??null,i,!1,s,o),t[mr]=e.current,nl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jd(e)};on.render=function(t,e,n){if(!Zd(e))throw Error(A(200));return ef(null,t,e,!1,n)};on.unmountComponentAtNode=function(t){if(!Zd(t))throw Error(A(40));return t._reactRootContainer?(Ji(function(){ef(null,null,t,!1,function(){t._reactRootContainer=null,t[mr]=null})}),!0):!1};on.unstable_batchedUpdates=nv;on.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zd(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return ef(t,e,n,!1,r)};on.version="18.2.0-next-9e3b772b8-20220608";function gS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gS)}catch(t){console.error(t)}}gS(),p_.exports=on;var zR=p_.exports,E1=zR;wp.createRoot=E1.createRoot,wp.hydrateRoot=E1.hydrateRoot;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pe(){return Pe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pe.apply(this,arguments)}var Je;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Je||(Je={}));const _1="popstate";function BR(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return dl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zi(i)}return HR(e,n,null,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VR(){return Math.random().toString(36).substr(2,8)}function T1(t,e){return{usr:t.state,key:t.key,idx:e}}function dl(t,e,n,r){return n===void 0&&(n=null),Pe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Cr(e):e,{state:n,key:e&&e.key||r||VR()})}function Zi(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function HR(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Je.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Pe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Je.Pop;let E=c(),m=E==null?null:E-u;u=E,l&&l({action:a,location:y.location,delta:m})}function f(E,m){a=Je.Push;let p=dl(y.location,E,m);n&&n(p,E),u=c()+1;let w=T1(p,u),v=y.createHref(p);try{o.pushState(w,"",v)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(v)}s&&l&&l({action:a,location:y.location,delta:1})}function h(E,m){a=Je.Replace;let p=dl(y.location,E,m);n&&n(p,E),u=c();let w=T1(p,u),v=y.createHref(p);o.replaceState(w,"",v),s&&l&&l({action:a,location:y.location,delta:0})}function g(E){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:Zi(E);return se(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(_1,d),l=E,()=>{i.removeEventListener(_1,d),l=null}},createHref(E){return e(i,E)},createURL:g,encodeLocation(E){let m=g(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:h,go(E){return o.go(E)}};return y}var nt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nt||(nt={}));const qR=new Set(["lazy","caseSensitive","path","id","index","children"]);function WR(t){return t.index===!0}function fm(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(se(i.index!==!0||!i.children,"Cannot specify children on an index route"),se(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),WR(i)){let l=Pe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Pe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=fm(i.children,e,o,r)),l}})}function zs(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Cr(e):e,i=$o(r.pathname||"/",n);if(i==null)return null;let s=vS(t);KR(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=nN(s[a],sN(i));return o}function vS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=fr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),vS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:eN(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of yS(s.path))i(s,o,l)}),e}function yS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=yS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function KR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const GR=/^:\w+$/,QR=3,YR=2,XR=1,JR=10,ZR=-2,S1=t=>t==="*";function eN(t,e){let n=t.split("/"),r=n.length;return n.some(S1)&&(r+=ZR),e&&(r+=YR),n.filter(i=>!S1(i)).reduce((i,s)=>i+(GR.test(s)?QR:s===""?XR:JR),r)}function tN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=rN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:fr([i,c.pathname]),pathnameBase:uN(fr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=fr([i,c.pathnameBase]))}return s}function rN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=iN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=oN(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function iN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),yo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sN(t){try{return decodeURI(t)}catch(e){return yo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function oN(t,e){try{return decodeURIComponent(t)}catch(n){return yo(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function $o(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function aN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Cr(t):t;return{pathname:n?n.startsWith("/")?n:lN(n,e):e,search:cN(r),hash:dN(i)}}function lN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Oh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function tf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Cr(t):(i=Pe({},t),se(!i.pathname||!i.pathname.includes("?"),Oh("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),Oh("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),Oh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=aN(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const fr=t=>t.join("/").replace(/\/\/+/g,"/"),uN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),cN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,dN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class dv{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function wS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ES=["post","put","patch","delete"],fN=new Set(ES),hN=["get",...ES],pN=new Set(hN),mN=new Set([301,302,303,307,308]),gN=new Set([307,308]),Lh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},vN={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ju={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},_S=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yN=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function wN(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;se(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let k=t.detectErrorBoundary;i=I=>({hasErrorBoundary:k(I)})}else i=yN;let s={},o=fm(t.routes,i,void 0,s),a,l=t.basename||"/",u=Pe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,h=null,g=null,y=t.hydrationData!=null,E=zs(o,t.history.location,l),m=null;if(E==null){let k=cn(404,{pathname:t.history.location.pathname}),{matches:I,route:N}=A1(o);E=I,m={[N.id]:k}}let p=!E.some(k=>k.route.lazy)&&(!E.some(k=>k.route.loader)||t.hydrationData!=null),w,v={historyAction:t.history.action,location:t.history.location,matches:E,initialized:p,navigation:Lh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||m,fetchers:new Map,blockers:new Map},S=Je.Pop,x=!1,b,R=!1,F=!1,V=[],he=[],Q=new Map,je=0,ze=-1,Be=new Map,ye=new Set,Ve=new Map,D=new Map,z=new Map,Z=!1;function ce(){return c=t.history.listen(k=>{let{action:I,location:N,delta:U}=k;if(Z){Z=!1;return}yo(z.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ne=l0({currentLocation:v.location,nextLocation:N,historyAction:I});if(ne&&U!=null){Z=!0,t.history.go(U*-1),wu(ne,{state:"blocked",location:N,proceed(){wu(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:N}),t.history.go(U)},reset(){let Y=new Map(v.blockers);Y.set(ne,ju),Ne({blockers:Y})}});return}return Dr(I,N)}),v.initialized||Dr(Je.Pop,v.location),w}function Ye(){c&&c(),d.clear(),b&&b.abort(),v.fetchers.forEach((k,I)=>nh(I)),v.blockers.forEach((k,I)=>a0(I))}function Es(k){return d.add(k),()=>d.delete(k)}function Ne(k){v=Pe({},v,k),d.forEach(I=>I(v))}function er(k,I){var N,U;let ne=v.actionData!=null&&v.navigation.formMethod!=null&&Tn(v.navigation.formMethod)&&v.navigation.state==="loading"&&((N=k.state)==null?void 0:N._isRedirect)!==!0,Y;I.actionData?Object.keys(I.actionData).length>0?Y=I.actionData:Y=null:ne?Y=v.actionData:Y=null;let ee=I.loaderData?N1(v.loaderData,I.loaderData,I.matches||[],I.errors):v.loaderData,X=new Map;z.clear();let H=x===!0||v.navigation.formMethod!=null&&Tn(v.navigation.formMethod)&&((U=k.state)==null?void 0:U._isRedirect)!==!0;a&&(o=a,a=void 0),R||S===Je.Pop||(S===Je.Push?t.history.push(k,k.state):S===Je.Replace&&t.history.replace(k,k.state)),Ne(Pe({},I,{actionData:Y,loaderData:ee,historyAction:S,location:k,initialized:!0,navigation:Lh,revalidation:"idle",restoreScrollPosition:c0(k,I.matches||v.matches),preventScrollReset:H,blockers:X})),S=Je.Pop,x=!1,R=!1,F=!1,V=[],he=[]}async function Dn(k,I){if(typeof k=="number"){t.history.go(k);return}let N=hm(v.location,v.matches,l,u.v7_prependBasename,k,I==null?void 0:I.fromRouteId,I==null?void 0:I.relative),{path:U,submission:ne,error:Y}=k1(u.v7_normalizeFormMethod,!1,N,I),ee=v.location,X=dl(v.location,U,I&&I.state);X=Pe({},X,t.history.encodeLocation(X));let H=I&&I.replace!=null?I.replace:void 0,_e=Je.Push;H===!0?_e=Je.Replace:H===!1||ne!=null&&Tn(ne.formMethod)&&ne.formAction===v.location.pathname+v.location.search&&(_e=Je.Replace);let pe=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,Xt=l0({currentLocation:ee,nextLocation:X,historyAction:_e});if(Xt){wu(Xt,{state:"blocked",location:X,proceed(){wu(Xt,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),Dn(k,I)},reset(){let ot=new Map(v.blockers);ot.set(Xt,ju),Ne({blockers:ot})}});return}return await Dr(_e,X,{submission:ne,pendingError:Y,preventScrollReset:pe,replace:I&&I.replace})}function _s(){if(th(),Ne({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Dr(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Dr(S||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Dr(k,I,N){b&&b.abort(),b=null,S=k,R=(N&&N.startUninterruptedRevalidation)===!0,f2(v.location,v.matches),x=(N&&N.preventScrollReset)===!0;let U=a||o,ne=N&&N.overrideNavigation,Y=zs(U,I,l);if(!Y){let ot=cn(404,{pathname:I.pathname}),{matches:zt,route:On}=A1(U);rh(),er(I,{matches:zt,loaderData:{},errors:{[On.id]:ot}});return}if(v.initialized&&!F&&kN(v.location,I)&&!(N&&N.submission&&Tn(N.submission.formMethod))){er(I,{matches:Y});return}b=new AbortController;let ee=ua(t.history,I,b.signal,N&&N.submission),X,H;if(N&&N.pendingError)H={[Bs(Y).route.id]:N.pendingError};else if(N&&N.submission&&Tn(N.submission.formMethod)){let ot=await s2(ee,I,N.submission,Y,{replace:N.replace});if(ot.shortCircuited)return;X=ot.pendingActionData,H=ot.pendingActionError,ne=zu(I,N.submission),ee=new Request(ee.url,{signal:ee.signal})}let{shortCircuited:_e,loaderData:pe,errors:Xt}=await o2(ee,I,Y,ne,N&&N.submission,N&&N.fetcherSubmission,N&&N.replace,X,H);_e||(b=null,er(I,Pe({matches:Y},X?{actionData:X}:{},{loaderData:pe,errors:Xt})))}async function s2(k,I,N,U,ne){ne===void 0&&(ne={}),th();let Y=RN(I,N);Ne({navigation:Y});let ee,X=mm(U,I);if(!X.route.action&&!X.route.lazy)ee={type:nt.error,error:cn(405,{method:k.method,pathname:I.pathname,routeId:X.route.id})};else if(ee=await la("action",k,X,U,s,i,l),k.signal.aborted)return{shortCircuited:!0};if(to(ee)){let H;return ne&&ne.replace!=null?H=ne.replace:H=ee.location===v.location.pathname+v.location.search,await Xo(v,ee,{submission:N,replace:H}),{shortCircuited:!0}}if(Ma(ee)){let H=Bs(U,X.route.id);return(ne&&ne.replace)!==!0&&(S=Je.Push),{pendingActionData:{},pendingActionError:{[H.route.id]:ee.error}}}if(Oi(ee))throw cn(400,{type:"defer-action"});return{pendingActionData:{[X.route.id]:ee.data}}}async function o2(k,I,N,U,ne,Y,ee,X,H){let _e=U||zu(I,ne),pe=ne||Y||O1(_e),Xt=a||o,[ot,zt]=I1(t.history,v,N,pe,I,F,V,he,Ve,ye,Xt,l,X,H);if(rh(Ae=>!(N&&N.some(un=>un.route.id===Ae))||ot&&ot.some(un=>un.route.id===Ae)),ot.length===0&&zt.length===0){let Ae=s0();return er(I,Pe({matches:N,loaderData:{},errors:H||null},X?{actionData:X}:{},Ae?{fetchers:new Map(v.fetchers)}:{})),{shortCircuited:!0}}if(!R){zt.forEach(un=>{let Ts=v.fetchers.get(un.key),ft=ca(void 0,Ts?Ts.data:void 0);v.fetchers.set(un.key,ft)});let Ae=X||v.actionData;Ne(Pe({navigation:_e},Ae?Object.keys(Ae).length===0?{actionData:null}:{actionData:Ae}:{},zt.length>0?{fetchers:new Map(v.fetchers)}:{}))}ze=++je,zt.forEach(Ae=>{Q.has(Ae.key)&&Or(Ae.key),Ae.controller&&Q.set(Ae.key,Ae.controller)});let On=()=>zt.forEach(Ae=>Or(Ae.key));b&&b.signal.addEventListener("abort",On);let{results:Jo,loaderResults:ih,fetcherResults:Eu}=await r0(v.matches,N,ot,zt,k);if(k.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",On),zt.forEach(Ae=>Q.delete(Ae.key));let tr=P1(Jo);if(tr)return await Xo(v,tr,{replace:ee}),{shortCircuited:!0};let{loaderData:_u,errors:sh}=R1(v,N,ot,ih,H,zt,Eu,D);D.forEach((Ae,un)=>{Ae.subscribe(Ts=>{(Ts||Ae.done)&&D.delete(un)})});let oh=s0(),ah=o0(ze),Tu=oh||ah||zt.length>0;return Pe({loaderData:_u,errors:sh},Tu?{fetchers:new Map(v.fetchers)}:{})}function n0(k){return v.fetchers.get(k)||vN}function a2(k,I,N,U){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Q.has(k)&&Or(k);let ne=a||o,Y=hm(v.location,v.matches,l,u.v7_prependBasename,N,I,U==null?void 0:U.relative),ee=zs(ne,Y,l);if(!ee){yu(k,I,cn(404,{pathname:Y}));return}let{path:X,submission:H,error:_e}=k1(u.v7_normalizeFormMethod,!0,Y,U);if(_e){yu(k,I,_e);return}let pe=mm(ee,X);if(x=(U&&U.preventScrollReset)===!0,H&&Tn(H.formMethod)){l2(k,I,X,pe,ee,H);return}Ve.set(k,{routeId:I,path:X}),u2(k,I,X,pe,ee,H)}async function l2(k,I,N,U,ne,Y){if(th(),Ve.delete(k),!U.route.action&&!U.route.lazy){let ft=cn(405,{method:Y.formMethod,pathname:N,routeId:I});yu(k,I,ft);return}let ee=v.fetchers.get(k),X=NN(Y,ee);v.fetchers.set(k,X),Ne({fetchers:new Map(v.fetchers)});let H=new AbortController,_e=ua(t.history,N,H.signal,Y);Q.set(k,H);let pe=await la("action",_e,U,ne,s,i,l);if(_e.signal.aborted){Q.get(k)===H&&Q.delete(k);return}if(to(pe)){Q.delete(k),ye.add(k);let ft=ca(Y);return v.fetchers.set(k,ft),Ne({fetchers:new Map(v.fetchers)}),Xo(v,pe,{submission:Y,isFetchActionRedirect:!0})}if(Ma(pe)){yu(k,I,pe.error);return}if(Oi(pe))throw cn(400,{type:"defer-action"});let Xt=v.navigation.location||v.location,ot=ua(t.history,Xt,H.signal),zt=a||o,On=v.navigation.state!=="idle"?zs(zt,v.navigation.location,l):v.matches;se(On,"Didn't find any matches after fetcher action");let Jo=++je;Be.set(k,Jo);let ih=ca(Y,pe.data);v.fetchers.set(k,ih);let[Eu,tr]=I1(t.history,v,On,Y,Xt,F,V,he,Ve,ye,zt,l,{[U.route.id]:pe.data},void 0);tr.filter(ft=>ft.key!==k).forEach(ft=>{let Zo=ft.key,d0=v.fetchers.get(Zo),p2=ca(void 0,d0?d0.data:void 0);v.fetchers.set(Zo,p2),Q.has(Zo)&&Or(Zo),ft.controller&&Q.set(Zo,ft.controller)}),Ne({fetchers:new Map(v.fetchers)});let _u=()=>tr.forEach(ft=>Or(ft.key));H.signal.addEventListener("abort",_u);let{results:sh,loaderResults:oh,fetcherResults:ah}=await r0(v.matches,On,Eu,tr,ot);if(H.signal.aborted)return;H.signal.removeEventListener("abort",_u),Be.delete(k),Q.delete(k),tr.forEach(ft=>Q.delete(ft.key));let Tu=P1(sh);if(Tu)return Xo(v,Tu);let{loaderData:Ae,errors:un}=R1(v,v.matches,Eu,oh,void 0,tr,ah,D);if(v.fetchers.has(k)){let ft=xc(pe.data);v.fetchers.set(k,ft)}let Ts=o0(Jo);v.navigation.state==="loading"&&Jo>ze?(se(S,"Expected pending action"),b&&b.abort(),er(v.navigation.location,{matches:On,loaderData:Ae,errors:un,fetchers:new Map(v.fetchers)})):(Ne(Pe({errors:un,loaderData:N1(v.loaderData,Ae,On,un)},Ts||tr.length>0?{fetchers:new Map(v.fetchers)}:{})),F=!1)}async function u2(k,I,N,U,ne,Y){let ee=v.fetchers.get(k),X=ca(Y,ee?ee.data:void 0);v.fetchers.set(k,X),Ne({fetchers:new Map(v.fetchers)});let H=new AbortController,_e=ua(t.history,N,H.signal);Q.set(k,H);let pe=await la("loader",_e,U,ne,s,i,l);if(Oi(pe)&&(pe=await kS(pe,_e.signal,!0)||pe),Q.get(k)===H&&Q.delete(k),_e.signal.aborted)return;if(to(pe)){ye.add(k),await Xo(v,pe);return}if(Ma(pe)){let ot=Bs(v.matches,I);v.fetchers.delete(k),Ne({fetchers:new Map(v.fetchers),errors:{[ot.route.id]:pe.error}});return}se(!Oi(pe),"Unhandled fetcher deferred data");let Xt=xc(pe.data);v.fetchers.set(k,Xt),Ne({fetchers:new Map(v.fetchers)})}async function Xo(k,I,N){let{submission:U,replace:ne,isFetchActionRedirect:Y}=N===void 0?{}:N;I.revalidate&&(F=!0);let ee=dl(k.location,I.location,Pe({_isRedirect:!0},Y?{_isFetchActionRedirect:!0}:{}));if(se(ee,"Expected a location on the redirect navigation"),_S.test(I.location)&&n){let _e=t.history.createURL(I.location),pe=$o(_e.pathname,l)==null;if(e.location.origin!==_e.origin||pe){ne?e.location.replace(I.location):e.location.assign(I.location);return}}b=null;let X=ne===!0?Je.Replace:Je.Push,H=U||O1(k.navigation);if(gN.has(I.status)&&H&&Tn(H.formMethod))await Dr(X,ee,{submission:Pe({},H,{formAction:I.location}),preventScrollReset:x});else if(Y)await Dr(X,ee,{overrideNavigation:zu(ee),fetcherSubmission:H,preventScrollReset:x});else{let _e=zu(ee,H);await Dr(X,ee,{overrideNavigation:_e,preventScrollReset:x})}}async function r0(k,I,N,U,ne){let Y=await Promise.all([...N.map(H=>la("loader",ne,H,I,s,i,l)),...U.map(H=>H.matches&&H.match&&H.controller?la("loader",ua(t.history,H.path,H.controller.signal),H.match,H.matches,s,i,l):{type:nt.error,error:cn(404,{pathname:H.path})})]),ee=Y.slice(0,N.length),X=Y.slice(N.length);return await Promise.all([D1(k,N,ee,ee.map(()=>ne.signal),!1,v.loaderData),D1(k,U.map(H=>H.match),X,U.map(H=>H.controller?H.controller.signal:null),!0)]),{results:Y,loaderResults:ee,fetcherResults:X}}function th(){F=!0,V.push(...rh()),Ve.forEach((k,I)=>{Q.has(I)&&(he.push(I),Or(I))})}function yu(k,I,N){let U=Bs(v.matches,I);nh(k),Ne({errors:{[U.route.id]:N},fetchers:new Map(v.fetchers)})}function nh(k){let I=v.fetchers.get(k);Q.has(k)&&!(I&&I.state==="loading"&&Be.has(k))&&Or(k),Ve.delete(k),Be.delete(k),ye.delete(k),v.fetchers.delete(k)}function Or(k){let I=Q.get(k);se(I,"Expected fetch controller: "+k),I.abort(),Q.delete(k)}function i0(k){for(let I of k){let N=n0(I),U=xc(N.data);v.fetchers.set(I,U)}}function s0(){let k=[],I=!1;for(let N of ye){let U=v.fetchers.get(N);se(U,"Expected fetcher: "+N),U.state==="loading"&&(ye.delete(N),k.push(N),I=!0)}return i0(k),I}function o0(k){let I=[];for(let[N,U]of Be)if(U<k){let ne=v.fetchers.get(N);se(ne,"Expected fetcher: "+N),ne.state==="loading"&&(Or(N),Be.delete(N),I.push(N))}return i0(I),I.length>0}function c2(k,I){let N=v.blockers.get(k)||ju;return z.get(k)!==I&&z.set(k,I),N}function a0(k){v.blockers.delete(k),z.delete(k)}function wu(k,I){let N=v.blockers.get(k)||ju;se(N.state==="unblocked"&&I.state==="blocked"||N.state==="blocked"&&I.state==="blocked"||N.state==="blocked"&&I.state==="proceeding"||N.state==="blocked"&&I.state==="unblocked"||N.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+N.state+" -> "+I.state);let U=new Map(v.blockers);U.set(k,I),Ne({blockers:U})}function l0(k){let{currentLocation:I,nextLocation:N,historyAction:U}=k;if(z.size===0)return;z.size>1&&yo(!1,"A router only supports one blocker at a time");let ne=Array.from(z.entries()),[Y,ee]=ne[ne.length-1],X=v.blockers.get(Y);if(!(X&&X.state==="proceeding")&&ee({currentLocation:I,nextLocation:N,historyAction:U}))return Y}function rh(k){let I=[];return D.forEach((N,U)=>{(!k||k(U))&&(N.cancel(),I.push(U),D.delete(U))}),I}function d2(k,I,N){if(f=k,g=I,h=N||null,!y&&v.navigation===Lh){y=!0;let U=c0(v.location,v.matches);U!=null&&Ne({restoreScrollPosition:U})}return()=>{f=null,g=null,h=null}}function u0(k,I){return h&&h(k,I.map(U=>CN(U,v.loaderData)))||k.key}function f2(k,I){if(f&&g){let N=u0(k,I);f[N]=g()}}function c0(k,I){if(f){let N=u0(k,I),U=f[N];if(typeof U=="number")return U}return null}function h2(k){s={},a=fm(k,i,void 0,s)}return w={get basename(){return l},get state(){return v},get routes(){return o},initialize:ce,subscribe:Es,enableScrollRestoration:d2,navigate:Dn,fetch:a2,revalidate:_s,createHref:k=>t.history.createHref(k),encodeLocation:k=>t.history.encodeLocation(k),getFetcher:n0,deleteFetcher:nh,dispose:Ye,getBlocker:c2,deleteBlocker:a0,_internalFetchControllers:Q,_internalActiveDeferreds:D,_internalSetRoutes:h2},w}function EN(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function hm(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=cv(i||".",tf(a).map(c=>c.pathnameBase),$o(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!fv(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:fr([n,u.pathname])),Zi(u)}function k1(t,e,n,r){if(!r||!EN(r))return{path:n};if(r.formMethod&&!xN(r.formMethod))return{path:n,error:cn(405,{method:r.formMethod})};let i=()=>({path:n,error:cn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=SS(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Tn(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((h,g)=>{let[y,E]=g;return""+h+y+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Tn(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}se(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=pm(r.formData),u=r.formData;else if(r.body instanceof FormData)l=pm(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=C1(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=C1(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Tn(c.formMethod))return{path:n,submission:c};let d=Cr(n);return e&&d.search&&fv(d.search)&&l.append("index",""),d.search="?"+l,{path:Zi(d),submission:c}}function _N(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function I1(t,e,n,r,i,s,o,a,l,u,c,d,f,h){let g=h?Object.values(h)[0]:f?Object.values(f)[0]:void 0,y=t.createURL(e.location),E=t.createURL(i),m=h?Object.keys(h)[0]:void 0,w=_N(n,m).filter((S,x)=>{if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(TN(e.loaderData,e.matches[x],S)||o.some(F=>F===S.route.id))return!0;let b=e.matches[x],R=S;return b1(S,Pe({currentUrl:y,currentParams:b.params,nextUrl:E,nextParams:R.params},r,{actionResult:g,defaultShouldRevalidate:s||y.pathname+y.search===E.pathname+E.search||y.search!==E.search||TS(b,R)}))}),v=[];return l.forEach((S,x)=>{if(!n.some(Q=>Q.route.id===S.routeId))return;let b=zs(c,S.path,d);if(!b){v.push({key:x,routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let R=e.fetchers.get(x),F=R&&R.state!=="idle"&&R.data===void 0&&!u.has(x),V=mm(b,S.path);(a.includes(x)||F||b1(V,Pe({currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:g,defaultShouldRevalidate:s})))&&v.push({key:x,routeId:S.routeId,path:S.path,matches:b,match:V,controller:new AbortController})}),[w,v]}function TN(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function TS(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function b1(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function x1(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];se(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";yo(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!qR.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Pe({},e(i),{lazy:void 0}))}async function la(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=g=>{let y,E=new Promise((m,p)=>y=p);return c=()=>y(),e.signal.addEventListener("abort",c),Promise.race([g({request:e,params:n.params,context:a.requestContext}),E])};try{let g=n.route[t];if(n.route.lazy)if(g)u=(await Promise.all([d(g),x1(n.route,s,i)]))[0];else if(await x1(n.route,s,i),g=n.route[t],g)u=await d(g);else if(t==="action"){let y=new URL(e.url),E=y.pathname+y.search;throw cn(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:nt.data,data:void 0};else if(g)u=await d(g);else{let y=new URL(e.url),E=y.pathname+y.search;throw cn(404,{pathname:E})}se(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(g){l=nt.error,u=g}finally{c&&e.signal.removeEventListener("abort",c)}if(bN(u)){let g=u.status;if(mN.has(g)){let m=u.headers.get("Location");if(se(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!_S.test(m))m=hm(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,m);else if(!a.isStaticRequest){let p=new URL(e.url),w=m.startsWith("//")?new URL(p.protocol+m):new URL(m),v=$o(w.pathname,o)!=null;w.origin===p.origin&&v&&(m=w.pathname+w.search+w.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:nt.redirect,status:g,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||nt.data,response:u};let y,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?y=await u.json():y=await u.text(),l===nt.error?{type:l,error:new dv(g,u.statusText,y),headers:u.headers}:{type:nt.data,data:y,statusCode:u.status,headers:u.headers}}if(l===nt.error)return{type:l,error:u};if(IN(u)){var f,h;return{type:nt.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((h=u.init)==null?void 0:h.headers)&&new Headers(u.init.headers)}}return{type:nt.data,data:u}}function ua(t,e,n,r){let i=t.createURL(SS(e)).toString(),s={signal:n};if(r&&Tn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=pm(r.formData):s.body=r.formData}return new Request(i,s)}function pm(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function C1(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function SN(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(se(!to(c),"Cannot handle redirect results in processLoaderData"),Ma(c)){let h=Bs(t,f),g=c.error;r&&(g=Object.values(r)[0],r=void 0),o=o||{},o[h.route.id]==null&&(o[h.route.id]=g),s[f]=void 0,l||(l=!0,a=wS(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Oi(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function R1(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=SN(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:h}=s[c];se(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let g=o[c];if(!(h&&h.signal.aborted))if(Ma(g)){let y=Bs(t.matches,f==null?void 0:f.route.id);u&&u[y.route.id]||(u=Pe({},u,{[y.route.id]:g.error})),t.fetchers.delete(d)}else if(to(g))se(!1,"Unhandled fetcher revalidation redirect");else if(Oi(g))se(!1,"Unhandled fetcher deferred data");else{let y=xc(g.data);t.fetchers.set(d,y)}}return{loaderData:l,errors:u}}function N1(t,e,n,r){let i=Pe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Bs(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function A1(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function cn(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new dv(t||500,o,new Error(a),!0)}function P1(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(to(n))return n}}function SS(t){let e=typeof t=="string"?Cr(t):t;return Zi(Pe({},e,{hash:""}))}function kN(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Oi(t){return t.type===nt.deferred}function Ma(t){return t.type===nt.error}function to(t){return(t&&t.type)===nt.redirect}function IN(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function bN(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function xN(t){return pN.has(t.toLowerCase())}function Tn(t){return fN.has(t.toLowerCase())}async function D1(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!TS(u,l)&&(s&&s[l.route.id])!==void 0;if(Oi(a)&&(i||c)){let d=r[o];se(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await kS(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function kS(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:nt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:nt.error,error:i}}return{type:nt.data,data:t.deferredData.data}}}function fv(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function CN(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function mm(t,e){let n=typeof e=="string"?Cr(e).search:e.search;if(t[t.length-1].route.index&&fv(n||""))return t[t.length-1];let r=tf(t);return r[r.length-1]}function O1(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function zu(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function RN(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ca(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function NN(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function xc(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ud(){return ud=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ud.apply(this,arguments)}const nf=_.createContext(null),IS=_.createContext(null),Fo=_.createContext(null),rf=_.createContext(null),Rr=_.createContext({outlet:null,matches:[],isDataRoute:!1}),bS=_.createContext(null);function AN(t,e){let{relative:n}=e===void 0?{}:e;zl()||se(!1);let{basename:r,navigator:i}=_.useContext(Fo),{hash:s,pathname:o,search:a}=CS(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:fr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function zl(){return _.useContext(rf)!=null}function sf(){return zl()||se(!1),_.useContext(rf).location}function xS(t){_.useContext(Fo).static||_.useLayoutEffect(t)}function of(){let{isDataRoute:t}=_.useContext(Rr);return t?WN():PN()}function PN(){zl()||se(!1);let t=_.useContext(nf),{basename:e,navigator:n}=_.useContext(Fo),{matches:r}=_.useContext(Rr),{pathname:i}=sf(),s=JSON.stringify(tf(r).map(l=>l.pathnameBase)),o=_.useRef(!1);return xS(()=>{o.current=!0}),_.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=cv(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:fr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const DN=_.createContext(null);function ON(t){let e=_.useContext(Rr).outlet;return e&&_.createElement(DN.Provider,{value:t},e)}function LN(){let{matches:t}=_.useContext(Rr),e=t[t.length-1];return e?e.params:{}}function CS(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=_.useContext(Rr),{pathname:i}=sf(),s=JSON.stringify(tf(r).map(o=>o.pathnameBase));return _.useMemo(()=>cv(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function MN(t,e,n){zl()||se(!1);let{navigator:r}=_.useContext(Fo),{matches:i}=_.useContext(Rr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=sf(),u;if(e){var c;let y=typeof e=="string"?Cr(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||se(!1),u=y}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",h=zs(t,{pathname:f}),g=zN(h&&h.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:fr([a,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:fr([a,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n);return e&&g?_.createElement(rf.Provider,{value:{location:ud({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Je.Pop}},g):g}function $N(){let t=qN(),e=wS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),n?_.createElement("pre",{style:i},n):null,s)}const FN=_.createElement($N,null);class UN extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?_.createElement(Rr.Provider,{value:this.props.routeContext},_.createElement(bS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jN(t){let{routeContext:e,match:n,children:r}=t,i=_.useContext(nf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Rr.Provider,{value:e},r)}function zN(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||se(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||FN);let f=e.concat(s.slice(0,u+1)),h=()=>{let g;return c?g=d:l.route.Component?g=_.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,_.createElement(jN,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?_.createElement(UN,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:h(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):h()},null)}var gm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(gm||(gm={}));var fl;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(fl||(fl={}));function BN(t){let e=_.useContext(nf);return e||se(!1),e}function VN(t){let e=_.useContext(IS);return e||se(!1),e}function HN(t){let e=_.useContext(Rr);return e||se(!1),e}function RS(t){let e=HN(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function qN(){var t;let e=_.useContext(bS),n=VN(fl.UseRouteError),r=RS(fl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function WN(){let{router:t}=BN(gm.UseNavigateStable),e=RS(fl.UseNavigateStable),n=_.useRef(!1);return xS(()=>{n.current=!0}),_.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ud({fromRouteId:e},s)))},[t,e])}const KN="startTransition",L1=A2[KN];function GN(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=_.useState(n.state),{v7_startTransition:o}=r||{},a=_.useCallback(d=>{o&&L1?L1(()=>s(d)):s(d)},[s,o]);_.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=_.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,h)=>n.navigate(d,{state:f,preventScrollReset:h==null?void 0:h.preventScrollReset}),replace:(d,f,h)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:h==null?void 0:h.preventScrollReset})}),[n]),u=n.basename||"/",c=_.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return _.createElement(_.Fragment,null,_.createElement(nf.Provider,{value:c},_.createElement(IS.Provider,{value:i},_.createElement(XN,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l},i.initialized?_.createElement(QN,{routes:n.routes,state:i}):e))),null)}function QN(t){let{routes:e,state:n}=t;return MN(e,void 0,n)}function YN(t){return ON(t.context)}function XN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Je.Pop,navigator:s,static:o=!1}=t;zl()&&se(!1);let a=e.replace(/^\/*/,"/"),l=_.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Cr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:h="default"}=r,g=_.useMemo(()=>{let y=$o(u,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:f,key:h},navigationType:i}},[a,u,c,d,f,h,i]);return g==null?null:_.createElement(Fo.Provider,{value:l},_.createElement(rf.Provider,{children:n,value:g}))}var M1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(M1||(M1={}));new Promise(()=>{});function JN(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:_.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:_.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hl.apply(this,arguments)}function ZN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tA(t,e){return t.button===0&&(!e||e==="_self")&&!eA(t)}const nA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function rA(t,e){return wN({basename:e==null?void 0:e.basename,future:hl({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:BR({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||iA(),routes:t,mapRouteProperties:JN}).initialize()}function iA(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=hl({},e,{errors:sA(e.errors)})),e}function sA(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new dv(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const oA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,or=_.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=ZN(e,nA),{basename:f}=_.useContext(Fo),h,g=!1;if(typeof u=="string"&&aA.test(u)&&(h=u,oA))try{let p=new URL(window.location.href),w=u.startsWith("//")?new URL(p.protocol+u):new URL(u),v=$o(w.pathname,f);w.origin===p.origin&&v!=null?u=v+w.search+w.hash:g=!0}catch{}let y=AN(u,{relative:i}),E=lA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function m(p){r&&r(p),p.defaultPrevented||E(p)}return _.createElement("a",hl({},d,{href:h||y,onClick:g||s?r:m,ref:n,target:l}))});var $1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})($1||($1={}));var F1;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(F1||(F1={}));function lA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=of(),l=sf(),u=CS(t,{relative:o});return _.useCallback(c=>{if(tA(c,n)){c.preventDefault();let d=r!==void 0?r:Zi(l)===Zi(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var uA=Object.defineProperty,cA=(t,e,n)=>e in t?uA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Mh=(t,e,n)=>(cA(t,typeof e!="symbol"?e+"":e,n),n);let dA=class{constructor(){Mh(this,"current",this.detect()),Mh(this,"handoffState","pending"),Mh(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},Bi=new dA,Cn=(t,e)=>{Bi.isServer?_.useEffect(t,e):_.useLayoutEffect(t,e)};function oi(t){let e=_.useRef(t);return Cn(()=>{e.current=t},[t]),e}function fA(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function yr(){let t=[],e={addEventListener(n,r,i,s){return n.addEventListener(r,i,s),e.add(()=>n.removeEventListener(r,i,s))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return e.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return e.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return fA(()=>{r.current&&n[0]()}),e.add(()=>{r.current=!1})},style(n,r,i){let s=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:s})})},group(n){let r=yr();return n(r),this.add(()=>r.dispose())},add(n){return t.push(n),()=>{let r=t.indexOf(n);if(r>=0)for(let i of t.splice(r,1))i()}},dispose(){for(let n of t.splice(0))n()}};return e}function af(){let[t]=_.useState(yr);return _.useEffect(()=>()=>t.dispose(),[t]),t}let we=function(t){let e=oi(t);return q.useCallback((...n)=>e.current(...n),[e])};function hv(){let[t,e]=_.useState(Bi.isHandoffComplete);return t&&Bi.isHandoffComplete===!1&&e(!1),_.useEffect(()=>{t!==!0&&e(!0)},[t]),_.useEffect(()=>Bi.handoff(),[]),t}var U1;let Bl=(U1=q.useId)!=null?U1:function(){let t=hv(),[e,n]=q.useState(t?()=>Bi.nextId():null);return Cn(()=>{e===null&&n(Bi.nextId())},[e]),e!=null?""+e:void 0};function Ct(t,e,...n){if(t in e){let i=e[t];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ct),r}function Vl(t){return Bi.isServer?null:t instanceof Node?t.ownerDocument:t!=null&&t.hasOwnProperty("current")&&t.current instanceof Node?t.current.ownerDocument:document}let vm=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var ym=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t))(ym||{}),hA=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(hA||{}),pA=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(pA||{});function NS(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(vm)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var pv=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(pv||{});function mv(t,e=0){var n;return t===((n=Vl(t))==null?void 0:n.body)?!1:Ct(e,{[0](){return t.matches(vm)},[1](){let r=t;for(;r!==null;){if(r.matches(vm))return!0;r=r.parentElement}return!1}})}function AS(t){let e=Vl(t);yr().nextFrame(()=>{e&&!mv(e.activeElement,0)&&gA(t)})}var mA=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(mA||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function gA(t){t==null||t.focus({preventScroll:!0})}let vA=["textarea","input"].join(",");function yA(t){var e,n;return(n=(e=t==null?void 0:t.matches)==null?void 0:e.call(t,vA))!=null?n:!1}function PS(t,e=n=>n){return t.slice().sort((n,r)=>{let i=e(n),s=e(r);if(i===null||s===null)return 0;let o=i.compareDocumentPosition(s);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function wA(t,e){return EA(NS(),e,{relativeTo:t})}function EA(t,e,{sorted:n=!0,relativeTo:r=null,skipElements:i=[]}={}){let s=Array.isArray(t)?t.length>0?t[0].ownerDocument:document:t.ownerDocument,o=Array.isArray(t)?n?PS(t):t:NS(t);i.length>0&&o.length>1&&(o=o.filter(h=>!i.includes(h))),r=r??s.activeElement;let a=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,o.indexOf(r))-1;if(e&4)return Math.max(0,o.indexOf(r))+1;if(e&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=e&32?{preventScroll:!0}:{},c=0,d=o.length,f;do{if(c>=d||c+d<=0)return 0;let h=l+c;if(e&16)h=(h+d)%d;else{if(h<0)return 3;if(h>=d)return 1}f=o[h],f==null||f.focus(u),c+=a}while(f!==s.activeElement);return e&6&&yA(f)&&f.select(),2}function j1(t,e,n){let r=oi(e);_.useEffect(()=>{function i(s){r.current(s)}return document.addEventListener(t,i,n),()=>document.removeEventListener(t,i,n)},[t,n])}function _A(t,e,n){let r=oi(e);_.useEffect(()=>{function i(s){r.current(s)}return window.addEventListener(t,i,n),()=>window.removeEventListener(t,i,n)},[t,n])}function TA(t,e,n=!0){let r=_.useRef(!1);_.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function i(o,a){if(!r.current||o.defaultPrevented)return;let l=a(o);if(l===null||!l.getRootNode().contains(l))return;let u=function c(d){return typeof d=="function"?c(d()):Array.isArray(d)||d instanceof Set?d:[d]}(t);for(let c of u){if(c===null)continue;let d=c instanceof HTMLElement?c:c.current;if(d!=null&&d.contains(l)||o.composed&&o.composedPath().includes(d))return}return!mv(l,pv.Loose)&&l.tabIndex!==-1&&o.preventDefault(),e(o,l)}let s=_.useRef(null);j1("mousedown",o=>{var a,l;r.current&&(s.current=((l=(a=o.composedPath)==null?void 0:a.call(o))==null?void 0:l[0])||o.target)},!0),j1("click",o=>{s.current&&(i(o,()=>s.current),s.current=null)},!0),_A("blur",o=>i(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function z1(t){var e;if(t.type)return t.type;let n=(e=t.as)!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function DS(t,e){let[n,r]=_.useState(()=>z1(t));return Cn(()=>{r(z1(t))},[t.type,t.as]),Cn(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&r("button")},[n,e]),n}let OS=Symbol();function SA(t,e=!0){return Object.assign(t,{[OS]:e})}function Nr(...t){let e=_.useRef(t);_.useEffect(()=>{e.current=t},[t]);let n=we(r=>{for(let i of e.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return t.every(r=>r==null||(r==null?void 0:r[OS]))?void 0:n}function kA({container:t,accept:e,walk:n,enabled:r=!0}){let i=_.useRef(e),s=_.useRef(n);_.useEffect(()=>{i.current=e,s.current=n},[e,n]),Cn(()=>{if(!t||!r)return;let o=Vl(t);if(!o)return;let a=i.current,l=s.current,u=Object.assign(d=>a(d),{acceptNode:a}),c=o.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,u,!1);for(;c.nextNode();)l(c.currentNode)},[t,r,i,s])}function IA(t){throw new Error("Unexpected object: "+t)}var kn=(t=>(t[t.First=0]="First",t[t.Previous=1]="Previous",t[t.Next=2]="Next",t[t.Last=3]="Last",t[t.Specific=4]="Specific",t[t.Nothing=5]="Nothing",t))(kn||{});function bA(t,e){let n=e.resolveItems();if(n.length<=0)return null;let r=e.resolveActiveIndex(),i=r??-1,s=(()=>{switch(t.focus){case 0:return n.findIndex(o=>!e.resolveDisabled(o));case 1:{let o=n.slice().reverse().findIndex((a,l,u)=>i!==-1&&u.length-l-1>=i?!1:!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 2:return n.findIndex((o,a)=>a<=i?!1:!e.resolveDisabled(o));case 3:{let o=n.slice().reverse().findIndex(a=>!e.resolveDisabled(a));return o===-1?o:n.length-1-o}case 4:return n.findIndex(o=>e.resolveId(o)===t.id);case 5:return null;default:IA(t)}})();return s===-1?r:s}function wm(...t){return t.filter(Boolean).join(" ")}var wo=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(wo||{}),ar=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(ar||{});function Ar({ourProps:t,theirProps:e,slot:n,defaultTag:r,features:i,visible:s=!0,name:o}){let a=LS(e,t);if(s)return Bu(a,n,r,o);let l=i??0;if(l&2){let{static:u=!1,...c}=a;if(u)return Bu(c,n,r,o)}if(l&1){let{unmount:u=!0,...c}=a;return Ct(u?0:1,{[0](){return null},[1](){return Bu({...c,hidden:!0,style:{display:"none"}},n,r,o)}})}return Bu(a,n,r,o)}function Bu(t,e={},n,r){let{as:i=n,children:s,refName:o="ref",...a}=$h(t,["unmount","static"]),l=t.ref!==void 0?{[o]:t.ref}:{},u=typeof s=="function"?s(e):s;"className"in a&&a.className&&typeof a.className=="function"&&(a.className=a.className(e));let c={};if(e){let d=!1,f=[];for(let[h,g]of Object.entries(e))typeof g=="boolean"&&(d=!0),g===!0&&f.push(h);d&&(c["data-headlessui-state"]=f.join(" "))}if(i===_.Fragment&&Object.keys(B1(a)).length>0){if(!_.isValidElement(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let d=u.props,f=typeof(d==null?void 0:d.className)=="function"?(...g)=>wm(d==null?void 0:d.className(...g),a.className):wm(d==null?void 0:d.className,a.className),h=f?{className:f}:{};return _.cloneElement(u,Object.assign({},LS(u.props,B1($h(a,["ref"]))),c,l,xA(u.ref,l.ref),h))}return _.createElement(i,Object.assign({},$h(a,["ref"]),i!==_.Fragment&&l,i!==_.Fragment&&c),u)}function xA(...t){return{ref:t.every(e=>e==null)?void 0:e=>{for(let n of t)n!=null&&(typeof n=="function"?n(e):n.current=e)}}}function LS(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let r of t)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):e[i]=r[i];if(e.disabled||e["aria-disabled"])return Object.assign(e,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(e,{[r](i,...s){let o=n[r];for(let a of o){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;a(i,...s)}}});return e}function Jn(t){var e;return Object.assign(_.forwardRef(t),{displayName:(e=t.displayName)!=null?e:t.name})}function B1(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function $h(t,e=[]){let n=Object.assign({},t);for(let r of e)r in n&&delete n[r];return n}function MS(t){let e=t.parentElement,n=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(n=e),e=e.parentElement;let r=(e==null?void 0:e.getAttribute("disabled"))==="";return r&&CA(n)?!1:r}function CA(t){if(!t)return!1;let e=t.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}let gv=_.createContext(null);gv.displayName="OpenClosedContext";var gt=(t=>(t[t.Open=1]="Open",t[t.Closed=2]="Closed",t[t.Closing=4]="Closing",t[t.Opening=8]="Opening",t))(gt||{});function lf(){return _.useContext(gv)}function vv({value:t,children:e}){return q.createElement(gv.Provider,{value:t},e)}var He=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(He||{});function V1(t){return[t.screenX,t.screenY]}function RA(){let t=_.useRef([-1,-1]);return{wasMoved(e){let n=V1(e);return t.current[0]===n[0]&&t.current[1]===n[1]?!1:(t.current=n,!0)},update(e){t.current=V1(e)}}}function yv(){let t=_.useRef(!1);return Cn(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function NA(...t){return _.useMemo(()=>Vl(...t),[...t])}var H1;let AA=(H1=q.startTransition)!=null?H1:function(t){t()};var PA=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(PA||{}),DA=(t=>(t[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.LinkPanel=4]="LinkPanel",t[t.UnlinkPanel=5]="UnlinkPanel",t))(DA||{});let OA={[0]:t=>({...t,disclosureState:Ct(t.disclosureState,{[0]:1,[1]:0})}),[1]:t=>t.disclosureState===1?t:{...t,disclosureState:1},[4](t){return t.linkedPanel===!0?t:{...t,linkedPanel:!0}},[5](t){return t.linkedPanel===!1?t:{...t,linkedPanel:!1}},[2](t,e){return t.buttonId===e.buttonId?t:{...t,buttonId:e.buttonId}},[3](t,e){return t.panelId===e.panelId?t:{...t,panelId:e.panelId}}},wv=_.createContext(null);wv.displayName="DisclosureContext";function Ev(t){let e=_.useContext(wv);if(e===null){let n=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ev),n}return e}let _v=_.createContext(null);_v.displayName="DisclosureAPIContext";function $S(t){let e=_.useContext(_v);if(e===null){let n=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,$S),n}return e}let Tv=_.createContext(null);Tv.displayName="DisclosurePanelContext";function LA(){return _.useContext(Tv)}function MA(t,e){return Ct(e.type,OA,t,e)}let $A=_.Fragment;function FA(t,e){let{defaultOpen:n=!1,...r}=t,i=_.useRef(null),s=Nr(e,SA(E=>{i.current=E},t.as===void 0||t.as===_.Fragment)),o=_.useRef(null),a=_.useRef(null),l=_.useReducer(MA,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:a,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:c},d]=l,f=we(E=>{d({type:1});let m=Vl(i);if(!m||!c)return;let p=(()=>E?E instanceof HTMLElement?E:E.current instanceof HTMLElement?E.current:m.getElementById(c):m.getElementById(c))();p==null||p.focus()}),h=_.useMemo(()=>({close:f}),[f]),g=_.useMemo(()=>({open:u===0,close:f}),[u,f]),y={ref:s};return q.createElement(wv.Provider,{value:l},q.createElement(_v.Provider,{value:h},q.createElement(vv,{value:Ct(u,{[0]:gt.Open,[1]:gt.Closed})},Ar({ourProps:y,theirProps:r,slot:g,defaultTag:$A,name:"Disclosure"}))))}let UA="button";function jA(t,e){let n=Bl(),{id:r=`headlessui-disclosure-button-${n}`,...i}=t,[s,o]=Ev("Disclosure.Button"),a=LA(),l=a===null?!1:a===s.panelId,u=_.useRef(null),c=Nr(u,e,l?null:s.buttonRef);_.useEffect(()=>{if(!l)return o({type:2,buttonId:r}),()=>{o({type:2,buttonId:null})}},[r,o,l]);let d=we(m=>{var p;if(l){if(s.disclosureState===1)return;switch(m.key){case He.Space:case He.Enter:m.preventDefault(),m.stopPropagation(),o({type:0}),(p=s.buttonRef.current)==null||p.focus();break}}else switch(m.key){case He.Space:case He.Enter:m.preventDefault(),m.stopPropagation(),o({type:0});break}}),f=we(m=>{switch(m.key){case He.Space:m.preventDefault();break}}),h=we(m=>{var p;MS(m.currentTarget)||t.disabled||(l?(o({type:0}),(p=s.buttonRef.current)==null||p.focus()):o({type:0}))}),g=_.useMemo(()=>({open:s.disclosureState===0}),[s]),y=DS(t,u),E=l?{ref:c,type:y,onKeyDown:d,onClick:h}:{ref:c,id:r,type:y,"aria-expanded":t.disabled?void 0:s.disclosureState===0,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:d,onKeyUp:f,onClick:h};return Ar({ourProps:E,theirProps:i,slot:g,defaultTag:UA,name:"Disclosure.Button"})}let zA="div",BA=wo.RenderStrategy|wo.Static;function VA(t,e){let n=Bl(),{id:r=`headlessui-disclosure-panel-${n}`,...i}=t,[s,o]=Ev("Disclosure.Panel"),{close:a}=$S("Disclosure.Panel"),l=Nr(e,s.panelRef,h=>{AA(()=>o({type:h?4:5}))});_.useEffect(()=>(o({type:3,panelId:r}),()=>{o({type:3,panelId:null})}),[r,o]);let u=lf(),c=(()=>u!==null?(u&gt.Open)===gt.Open:s.disclosureState===0)(),d=_.useMemo(()=>({open:s.disclosureState===0,close:a}),[s,a]),f={ref:l,id:r};return q.createElement(Tv.Provider,{value:s.panelId},Ar({ourProps:f,theirProps:i,slot:d,defaultTag:zA,features:BA,visible:c,name:"Disclosure.Panel"}))}let HA=Jn(FA),qA=Jn(jA),WA=Jn(VA),Vu=Object.assign(HA,{Button:qA,Panel:WA}),q1=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function W1(t){var e,n;let r=(e=t.innerText)!=null?e:"",i=t.cloneNode(!0);if(!(i instanceof HTMLElement))return r;let s=!1;for(let a of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))a.remove(),s=!0;let o=s?(n=i.innerText)!=null?n:"":r;return q1.test(o)&&(o=o.replace(q1,"")),o}function KA(t){let e=t.getAttribute("aria-label");if(typeof e=="string")return e.trim();let n=t.getAttribute("aria-labelledby");if(n){let r=n.split(" ").map(i=>{let s=document.getElementById(i);if(s){let o=s.getAttribute("aria-label");return typeof o=="string"?o.trim():W1(s).trim()}return null}).filter(Boolean);if(r.length>0)return r.join(", ")}return W1(t).trim()}function GA(t){let e=_.useRef(""),n=_.useRef("");return we(()=>{let r=t.current;if(!r)return"";let i=r.innerText;if(e.current===i)return n.current;let s=KA(r).trim().toLowerCase();return e.current=i,n.current=s,s})}var QA=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(QA||{}),YA=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(YA||{}),XA=(t=>(t[t.OpenMenu=0]="OpenMenu",t[t.CloseMenu=1]="CloseMenu",t[t.GoToItem=2]="GoToItem",t[t.Search=3]="Search",t[t.ClearSearch=4]="ClearSearch",t[t.RegisterItem=5]="RegisterItem",t[t.UnregisterItem=6]="UnregisterItem",t))(XA||{});function Fh(t,e=n=>n){let n=t.activeItemIndex!==null?t.items[t.activeItemIndex]:null,r=PS(e(t.items.slice()),s=>s.dataRef.current.domRef.current),i=n?r.indexOf(n):null;return i===-1&&(i=null),{items:r,activeItemIndex:i}}let JA={[1](t){return t.menuState===1?t:{...t,activeItemIndex:null,menuState:1}},[0](t){return t.menuState===0?t:{...t,__demoMode:!1,menuState:0}},[2]:(t,e)=>{var n;let r=Fh(t),i=bA(e,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...t,...r,searchQuery:"",activeItemIndex:i,activationTrigger:(n=e.trigger)!=null?n:1}},[3]:(t,e)=>{let n=t.searchQuery!==""?0:1,r=t.searchQuery+e.value.toLowerCase(),i=(t.activeItemIndex!==null?t.items.slice(t.activeItemIndex+n).concat(t.items.slice(0,t.activeItemIndex+n)):t.items).find(o=>{var a;return((a=o.dataRef.current.textValue)==null?void 0:a.startsWith(r))&&!o.dataRef.current.disabled}),s=i?t.items.indexOf(i):-1;return s===-1||s===t.activeItemIndex?{...t,searchQuery:r}:{...t,searchQuery:r,activeItemIndex:s,activationTrigger:1}},[4](t){return t.searchQuery===""?t:{...t,searchQuery:"",searchActiveItemIndex:null}},[5]:(t,e)=>{let n=Fh(t,r=>[...r,{id:e.id,dataRef:e.dataRef}]);return{...t,...n}},[6]:(t,e)=>{let n=Fh(t,r=>{let i=r.findIndex(s=>s.id===e.id);return i!==-1&&r.splice(i,1),r});return{...t,...n,activationTrigger:1}}},Sv=_.createContext(null);Sv.displayName="MenuContext";function uf(t){let e=_.useContext(Sv);if(e===null){let n=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,uf),n}return e}function ZA(t,e){return Ct(e.type,JA,t,e)}let eP=_.Fragment;function tP(t,e){let{__demoMode:n=!1,...r}=t,i=_.useReducer(ZA,{__demoMode:n,menuState:n?0:1,buttonRef:_.createRef(),itemsRef:_.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:s,itemsRef:o,buttonRef:a},l]=i,u=Nr(e);TA([a,o],(h,g)=>{var y;l({type:1}),mv(g,pv.Loose)||(h.preventDefault(),(y=a.current)==null||y.focus())},s===0);let c=we(()=>{l({type:1})}),d=_.useMemo(()=>({open:s===0,close:c}),[s,c]),f={ref:u};return q.createElement(Sv.Provider,{value:i},q.createElement(vv,{value:Ct(s,{[0]:gt.Open,[1]:gt.Closed})},Ar({ourProps:f,theirProps:r,slot:d,defaultTag:eP,name:"Menu"})))}let nP="button";function rP(t,e){var n;let r=Bl(),{id:i=`headlessui-menu-button-${r}`,...s}=t,[o,a]=uf("Menu.Button"),l=Nr(o.buttonRef,e),u=af(),c=we(y=>{switch(y.key){case He.Space:case He.Enter:case He.ArrowDown:y.preventDefault(),y.stopPropagation(),a({type:0}),u.nextFrame(()=>a({type:2,focus:kn.First}));break;case He.ArrowUp:y.preventDefault(),y.stopPropagation(),a({type:0}),u.nextFrame(()=>a({type:2,focus:kn.Last}));break}}),d=we(y=>{switch(y.key){case He.Space:y.preventDefault();break}}),f=we(y=>{if(MS(y.currentTarget))return y.preventDefault();t.disabled||(o.menuState===0?(a({type:1}),u.nextFrame(()=>{var E;return(E=o.buttonRef.current)==null?void 0:E.focus({preventScroll:!0})})):(y.preventDefault(),a({type:0})))}),h=_.useMemo(()=>({open:o.menuState===0}),[o]),g={ref:l,id:i,type:DS(t,o.buttonRef),"aria-haspopup":"menu","aria-controls":(n=o.itemsRef.current)==null?void 0:n.id,"aria-expanded":t.disabled?void 0:o.menuState===0,onKeyDown:c,onKeyUp:d,onClick:f};return Ar({ourProps:g,theirProps:s,slot:h,defaultTag:nP,name:"Menu.Button"})}let iP="div",sP=wo.RenderStrategy|wo.Static;function oP(t,e){var n,r;let i=Bl(),{id:s=`headlessui-menu-items-${i}`,...o}=t,[a,l]=uf("Menu.Items"),u=Nr(a.itemsRef,e),c=NA(a.itemsRef),d=af(),f=lf(),h=(()=>f!==null?(f&gt.Open)===gt.Open:a.menuState===0)();_.useEffect(()=>{let p=a.itemsRef.current;p&&a.menuState===0&&p!==(c==null?void 0:c.activeElement)&&p.focus({preventScroll:!0})},[a.menuState,a.itemsRef,c]),kA({container:a.itemsRef.current,enabled:a.menuState===0,accept(p){return p.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:p.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(p){p.setAttribute("role","none")}});let g=we(p=>{var w,v;switch(d.dispose(),p.key){case He.Space:if(a.searchQuery!=="")return p.preventDefault(),p.stopPropagation(),l({type:3,value:p.key});case He.Enter:if(p.preventDefault(),p.stopPropagation(),l({type:1}),a.activeItemIndex!==null){let{dataRef:S}=a.items[a.activeItemIndex];(v=(w=S.current)==null?void 0:w.domRef.current)==null||v.click()}AS(a.buttonRef.current);break;case He.ArrowDown:return p.preventDefault(),p.stopPropagation(),l({type:2,focus:kn.Next});case He.ArrowUp:return p.preventDefault(),p.stopPropagation(),l({type:2,focus:kn.Previous});case He.Home:case He.PageUp:return p.preventDefault(),p.stopPropagation(),l({type:2,focus:kn.First});case He.End:case He.PageDown:return p.preventDefault(),p.stopPropagation(),l({type:2,focus:kn.Last});case He.Escape:p.preventDefault(),p.stopPropagation(),l({type:1}),yr().nextFrame(()=>{var S;return(S=a.buttonRef.current)==null?void 0:S.focus({preventScroll:!0})});break;case He.Tab:p.preventDefault(),p.stopPropagation(),l({type:1}),yr().nextFrame(()=>{wA(a.buttonRef.current,p.shiftKey?ym.Previous:ym.Next)});break;default:p.key.length===1&&(l({type:3,value:p.key}),d.setTimeout(()=>l({type:4}),350));break}}),y=we(p=>{switch(p.key){case He.Space:p.preventDefault();break}}),E=_.useMemo(()=>({open:a.menuState===0}),[a]),m={"aria-activedescendant":a.activeItemIndex===null||(n=a.items[a.activeItemIndex])==null?void 0:n.id,"aria-labelledby":(r=a.buttonRef.current)==null?void 0:r.id,id:s,onKeyDown:g,onKeyUp:y,role:"menu",tabIndex:0,ref:u};return Ar({ourProps:m,theirProps:o,slot:E,defaultTag:iP,features:sP,visible:h,name:"Menu.Items"})}let aP=_.Fragment;function lP(t,e){let n=Bl(),{id:r=`headlessui-menu-item-${n}`,disabled:i=!1,...s}=t,[o,a]=uf("Menu.Item"),l=o.activeItemIndex!==null?o.items[o.activeItemIndex].id===r:!1,u=_.useRef(null),c=Nr(e,u);Cn(()=>{if(o.__demoMode||o.menuState!==0||!l||o.activationTrigger===0)return;let S=yr();return S.requestAnimationFrame(()=>{var x,b;(b=(x=u.current)==null?void 0:x.scrollIntoView)==null||b.call(x,{block:"nearest"})}),S.dispose},[o.__demoMode,u,l,o.menuState,o.activationTrigger,o.activeItemIndex]);let d=GA(u),f=_.useRef({disabled:i,domRef:u,get textValue(){return d()}});Cn(()=>{f.current.disabled=i},[f,i]),Cn(()=>(a({type:5,id:r,dataRef:f}),()=>a({type:6,id:r})),[f,r]);let h=we(()=>{a({type:1})}),g=we(S=>{if(i)return S.preventDefault();a({type:1}),AS(o.buttonRef.current)}),y=we(()=>{if(i)return a({type:2,focus:kn.Nothing});a({type:2,focus:kn.Specific,id:r})}),E=RA(),m=we(S=>E.update(S)),p=we(S=>{E.wasMoved(S)&&(i||l||a({type:2,focus:kn.Specific,id:r,trigger:0}))}),w=we(S=>{E.wasMoved(S)&&(i||l&&a({type:2,focus:kn.Nothing}))}),v=_.useMemo(()=>({active:l,disabled:i,close:h}),[l,i,h]);return Ar({ourProps:{id:r,ref:c,role:"menuitem",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,disabled:void 0,onClick:g,onFocus:y,onPointerEnter:m,onMouseEnter:m,onPointerMove:p,onMouseMove:p,onPointerLeave:w,onMouseLeave:w},theirProps:s,slot:v,defaultTag:aP,name:"Menu.Item"})}let uP=Jn(tP),cP=Jn(rP),dP=Jn(oP),fP=Jn(lP),Hu=Object.assign(uP,{Button:cP,Items:dP,Item:fP});function hP(t=0){let[e,n]=_.useState(t),r=yv(),i=_.useCallback(l=>{r.current&&n(u=>u|l)},[e,r]),s=_.useCallback(l=>!!(e&l),[e]),o=_.useCallback(l=>{r.current&&n(u=>u&~l)},[n,r]),a=_.useCallback(l=>{r.current&&n(u=>u^l)},[n]);return{flags:e,addFlag:i,hasFlag:s,removeFlag:o,toggleFlag:a}}function pP(t){let e={called:!1};return(...n)=>{if(!e.called)return e.called=!0,t(...n)}}function Uh(t,...e){t&&e.length>0&&t.classList.add(...e)}function jh(t,...e){t&&e.length>0&&t.classList.remove(...e)}function mP(t,e){let n=yr();if(!t)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(t),[s,o]=[r,i].map(l=>{let[u=0]=l.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,d)=>d-c);return u}),a=s+o;if(a!==0){n.group(u=>{u.setTimeout(()=>{e(),u.dispose()},a),u.addEventListener(t,"transitionrun",c=>{c.target===c.currentTarget&&u.dispose()})});let l=n.addEventListener(t,"transitionend",u=>{u.target===u.currentTarget&&(e(),l())})}else e();return n.add(()=>e()),n.dispose}function gP(t,e,n,r){let i=n?"enter":"leave",s=yr(),o=r!==void 0?pP(r):()=>{};i==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let a=Ct(i,{enter:()=>e.enter,leave:()=>e.leave}),l=Ct(i,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),u=Ct(i,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return jh(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),Uh(t,...a,...u),s.nextFrame(()=>{jh(t,...u),Uh(t,...l),mP(t,()=>(jh(t,...a),Uh(t,...e.entered),o()))}),s.dispose}function vP({container:t,direction:e,classes:n,onStart:r,onStop:i}){let s=yv(),o=af(),a=oi(e);Cn(()=>{let l=yr();o.add(l.dispose);let u=t.current;if(u&&a.current!=="idle"&&s.current)return l.dispose(),r.current(a.current),l.add(gP(u,n.current,a.current==="enter",()=>{l.dispose(),i.current(a.current)})),l.dispose},[e])}function bi(t=""){return t.split(" ").filter(e=>e.trim().length>1)}let cf=_.createContext(null);cf.displayName="TransitionContext";var yP=(t=>(t.Visible="visible",t.Hidden="hidden",t))(yP||{});function wP(){let t=_.useContext(cf);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}function EP(){let t=_.useContext(df);if(t===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return t}let df=_.createContext(null);df.displayName="NestingContext";function ff(t){return"children"in t?ff(t.children):t.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function FS(t,e){let n=oi(t),r=_.useRef([]),i=yv(),s=af(),o=we((h,g=ar.Hidden)=>{let y=r.current.findIndex(({el:E})=>E===h);y!==-1&&(Ct(g,{[ar.Unmount](){r.current.splice(y,1)},[ar.Hidden](){r.current[y].state="hidden"}}),s.microTask(()=>{var E;!ff(r)&&i.current&&((E=n.current)==null||E.call(n))}))}),a=we(h=>{let g=r.current.find(({el:y})=>y===h);return g?g.state!=="visible"&&(g.state="visible"):r.current.push({el:h,state:"visible"}),()=>o(h,ar.Unmount)}),l=_.useRef([]),u=_.useRef(Promise.resolve()),c=_.useRef({enter:[],leave:[],idle:[]}),d=we((h,g,y)=>{l.current.splice(0),e&&(e.chains.current[g]=e.chains.current[g].filter(([E])=>E!==h)),e==null||e.chains.current[g].push([h,new Promise(E=>{l.current.push(E)})]),e==null||e.chains.current[g].push([h,new Promise(E=>{Promise.all(c.current[g].map(([m,p])=>p)).then(()=>E())})]),g==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>y(g)):y(g)}),f=we((h,g,y)=>{Promise.all(c.current[g].splice(0).map(([E,m])=>m)).then(()=>{var E;(E=l.current.shift())==null||E()}).then(()=>y(g))});return _.useMemo(()=>({children:r,register:a,unregister:o,onStart:d,onStop:f,wait:u,chains:c}),[a,o,r,d,f,c,u])}function _P(){}let TP=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function K1(t){var e;let n={};for(let r of TP)n[r]=(e=t[r])!=null?e:_P;return n}function SP(t){let e=_.useRef(K1(t));return _.useEffect(()=>{e.current=K1(t)},[t]),e}let kP="div",US=wo.RenderStrategy;function IP(t,e){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:s,enter:o,enterFrom:a,enterTo:l,entered:u,leave:c,leaveFrom:d,leaveTo:f,...h}=t,g=_.useRef(null),y=Nr(g,e),E=h.unmount?ar.Unmount:ar.Hidden,{show:m,appear:p,initial:w}=wP(),[v,S]=_.useState(m?"visible":"hidden"),x=EP(),{register:b,unregister:R}=x,F=_.useRef(null);_.useEffect(()=>b(g),[b,g]),_.useEffect(()=>{if(E===ar.Hidden&&g.current){if(m&&v!=="visible"){S("visible");return}return Ct(v,{hidden:()=>R(g),visible:()=>b(g)})}},[v,g,b,R,m,E]);let V=oi({enter:bi(o),enterFrom:bi(a),enterTo:bi(l),entered:bi(u),leave:bi(c),leaveFrom:bi(d),leaveTo:bi(f)}),he=SP({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:s}),Q=hv();_.useEffect(()=>{if(Q&&v==="visible"&&g.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[g,v,Q]);let je=w&&!p,ze=(()=>!Q||je||F.current===m?"idle":m?"enter":"leave")(),Be=hP(0),ye=we(ce=>Ct(ce,{enter:()=>{Be.addFlag(gt.Opening),he.current.beforeEnter()},leave:()=>{Be.addFlag(gt.Closing),he.current.beforeLeave()},idle:()=>{}})),Ve=we(ce=>Ct(ce,{enter:()=>{Be.removeFlag(gt.Opening),he.current.afterEnter()},leave:()=>{Be.removeFlag(gt.Closing),he.current.afterLeave()},idle:()=>{}})),D=FS(()=>{S("hidden"),R(g)},x);vP({container:g,classes:V,direction:ze,onStart:oi(ce=>{D.onStart(g,ce,ye)}),onStop:oi(ce=>{D.onStop(g,ce,Ve),ce==="leave"&&!ff(D)&&(S("hidden"),R(g))})}),_.useEffect(()=>{je&&(E===ar.Hidden?F.current=null:F.current=m)},[m,je,v]);let z=h,Z={ref:y};return p&&m&&w&&(z={...z,className:wm(h.className,...V.current.enter,...V.current.enterFrom)}),q.createElement(df.Provider,{value:D},q.createElement(vv,{value:Ct(v,{visible:gt.Open,hidden:gt.Closed})|Be.flags},Ar({ourProps:Z,theirProps:z,defaultTag:kP,features:US,visible:v==="visible",name:"Transition.Child"})))}function bP(t,e){let{show:n,appear:r=!1,unmount:i,...s}=t,o=_.useRef(null),a=Nr(o,e);hv();let l=lf();if(n===void 0&&l!==null&&(n=(l&gt.Open)===gt.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,c]=_.useState(n?"visible":"hidden"),d=FS(()=>{c("hidden")}),[f,h]=_.useState(!0),g=_.useRef([n]);Cn(()=>{f!==!1&&g.current[g.current.length-1]!==n&&(g.current.push(n),h(!1))},[g,n]);let y=_.useMemo(()=>({show:n,appear:r,initial:f}),[n,r,f]);_.useEffect(()=>{if(n)c("visible");else if(!ff(d))c("hidden");else{let w=o.current;if(!w)return;let v=w.getBoundingClientRect();v.x===0&&v.y===0&&v.width===0&&v.height===0&&c("hidden")}},[n,d]);let E={unmount:i},m=we(()=>{var w;f&&h(!1),(w=t.beforeEnter)==null||w.call(t)}),p=we(()=>{var w;f&&h(!1),(w=t.beforeLeave)==null||w.call(t)});return q.createElement(df.Provider,{value:d},q.createElement(cf.Provider,{value:y},Ar({ourProps:{...E,as:_.Fragment,children:q.createElement(jS,{ref:a,...E,...s,beforeEnter:m,beforeLeave:p})},theirProps:{},defaultTag:_.Fragment,features:US,visible:u==="visible",name:"Transition"})))}function xP(t,e){let n=_.useContext(cf)!==null,r=lf()!==null;return q.createElement(q.Fragment,null,!n&&r?q.createElement(Em,{ref:e,...t}):q.createElement(jS,{ref:e,...t}))}let Em=Jn(bP),jS=Jn(IP),CP=Jn(xP),RP=Object.assign(Em,{Child:CP,Root:Em});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},BS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,h=u&63;l||(h=64,o||(f=64)),r.push(n[c],n[d],n[f],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new AP;const f=s<<2|a>>4;if(r.push(f),u!==64){const h=a<<4&240|u>>2;if(r.push(h),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PP=function(t){const e=zS(t);return BS.encodeByteArray(e,!0)},cd=function(t){return PP(t).replace(/\./g,"")},VS=function(t){try{return BS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=()=>DP().__FIREBASE_DEFAULTS__,LP=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&VS(t[1]);return e&&JSON.parse(e)},hf=()=>{try{return OP()||LP()||MP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HS=t=>{var e,n;return(n=(e=hf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qS=t=>{const e=HS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WS=()=>{var t;return(t=hf())===null||t===void 0?void 0:t.config},KS=t=>{var e;return(e=hf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cd(JSON.stringify(n)),cd(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function UP(){var t;const e=(t=hf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BP(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function VP(){try{return typeof indexedDB=="object"}catch{return!1}}function HP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=qP,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hl.prototype.create)}}class Hl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?WP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Zn(i,a,r)}}function WP(t,e){return t.replace(KP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KP=/\{\$([^}]+)}/g;function GP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(G1(s)&&G1(o)){if(!dd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function G1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ya(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QP(t,e){const n=new YP(t,e);return n.subscribe.bind(n)}class YP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=zh),i.error===void 0&&(i.error=zh),i.complete===void 0&&(i.complete=zh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(t){return t&&t._delegate?t._delegate:t}class hi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $P;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eD(e))try{this.getOrInitializeService({instanceIdentifier:Ri})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ri){return this.instances.has(e)}getOptions(e=Ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ri){return this.component?this.component.multipleInstances?e:Ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZP(t){return t===Ri?void 0:t}function eD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const nD={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},rD=de.INFO,iD={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},sD=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iD[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kv{constructor(e){this.name=e,this._logLevel=rD,this._logHandler=sD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const oD=(t,e)=>e.some(n=>t instanceof n);let Q1,Y1;function aD(){return Q1||(Q1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lD(){return Y1||(Y1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QS=new WeakMap,_m=new WeakMap,YS=new WeakMap,Bh=new WeakMap,Iv=new WeakMap;function uD(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ai(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QS.set(n,t)}).catch(()=>{}),Iv.set(e,t),e}function cD(t){if(_m.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_m.set(t,e)}let Tm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _m.get(t);if(e==="objectStoreNames")return t.objectStoreNames||YS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ai(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dD(t){Tm=t(Tm)}function fD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vh(this),e,...n);return YS.set(r,e.sort?e.sort():[e]),ai(r)}:lD().includes(t)?function(...e){return t.apply(Vh(this),e),ai(QS.get(this))}:function(...e){return ai(t.apply(Vh(this),e))}}function hD(t){return typeof t=="function"?fD(t):(t instanceof IDBTransaction&&cD(t),oD(t,aD())?new Proxy(t,Tm):t)}function ai(t){if(t instanceof IDBRequest)return uD(t);if(Bh.has(t))return Bh.get(t);const e=hD(t);return e!==t&&(Bh.set(t,e),Iv.set(e,t)),e}const Vh=t=>Iv.get(t);function pD(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ai(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ai(o.result),l.oldVersion,l.newVersion,ai(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const mD=["get","getKey","getAll","getAllKeys","count"],gD=["put","add","delete","clear"],Hh=new Map;function X1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hh.get(e))return Hh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Hh.set(e,s),s}dD(t=>({...t,get:(e,n,r)=>X1(e,n)||t.get(e,n,r),has:(e,n)=>!!X1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sm="@firebase/app",J1="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new kv("@firebase/app"),wD="@firebase/app-compat",ED="@firebase/analytics-compat",_D="@firebase/analytics",TD="@firebase/app-check-compat",SD="@firebase/app-check",kD="@firebase/auth",ID="@firebase/auth-compat",bD="@firebase/database",xD="@firebase/database-compat",CD="@firebase/functions",RD="@firebase/functions-compat",ND="@firebase/installations",AD="@firebase/installations-compat",PD="@firebase/messaging",DD="@firebase/messaging-compat",OD="@firebase/performance",LD="@firebase/performance-compat",MD="@firebase/remote-config",$D="@firebase/remote-config-compat",FD="@firebase/storage",UD="@firebase/storage-compat",jD="@firebase/firestore",zD="@firebase/firestore-compat",BD="firebase",VD="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="[DEFAULT]",HD={[Sm]:"fire-core",[wD]:"fire-core-compat",[_D]:"fire-analytics",[ED]:"fire-analytics-compat",[SD]:"fire-app-check",[TD]:"fire-app-check-compat",[kD]:"fire-auth",[ID]:"fire-auth-compat",[bD]:"fire-rtdb",[xD]:"fire-rtdb-compat",[CD]:"fire-fn",[RD]:"fire-fn-compat",[ND]:"fire-iid",[AD]:"fire-iid-compat",[PD]:"fire-fcm",[DD]:"fire-fcm-compat",[OD]:"fire-perf",[LD]:"fire-perf-compat",[MD]:"fire-rc",[$D]:"fire-rc-compat",[FD]:"fire-gcs",[UD]:"fire-gcs-compat",[jD]:"fire-fst",[zD]:"fire-fst-compat","fire-js":"fire-js",[BD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Map,Im=new Map;function qD(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Im.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;Im.set(e,t);for(const n of fd.values())qD(n,t);return!0}function pf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},li=new Hl("app","Firebase",WD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=VD;function XS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:km,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw li.create("bad-app-name",{appName:String(i)});if(n||(n=WS()),!n)throw li.create("no-options");const s=fd.get(i);if(s){if(dd(n,s.options)&&dd(r,s.config))return s;throw li.create("duplicate-app",{appName:i})}const o=new tD(i);for(const l of Im.values())o.addComponent(l);const a=new KD(n,r,o);return fd.set(i,a),a}function bv(t=km){const e=fd.get(t);if(!e&&t===km&&WS())return XS();if(!e)throw li.create("no-app",{appName:t});return e}function qn(t,e,n){var r;let i=(r=HD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}ts(new hi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD="firebase-heartbeat-database",QD=1,pl="firebase-heartbeat-store";let qh=null;function JS(){return qh||(qh=pD(GD,QD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pl)}}}).catch(t=>{throw li.create("idb-open",{originalErrorMessage:t.message})})),qh}async function YD(t){try{return await(await JS()).transaction(pl).objectStore(pl).get(ZS(t))}catch(e){if(e instanceof Zn)es.warn(e.message);else{const n=li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function Z1(t,e){try{const r=(await JS()).transaction(pl,"readwrite");await r.objectStore(pl).put(e,ZS(t)),await r.done}catch(n){if(n instanceof Zn)es.warn(n.message);else{const r=li.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(r.message)}}}function ZS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=1024,JD=30*24*60*60*1e3;class ZD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ew();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=JD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ew(),{heartbeatsToSend:n,unsentEntries:r}=eO(this._heartbeatsCache.heartbeats),i=cd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ew(){return new Date().toISOString().substring(0,10)}function eO(t,e=XD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VP()?HP().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await YD(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Z1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Z1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tw(t){return cd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){ts(new hi("platform-logger",e=>new vD(e),"PRIVATE")),ts(new hi("heartbeat",e=>new ZD(e),"PRIVATE")),qn(Sm,J1,t),qn(Sm,J1,"esm2017"),qn("fire-js","")}nO("");function xv(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ek(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rO=ek,tk=new Hl("auth","Firebase",ek());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd=new kv("@firebase/auth");function iO(t,...e){hd.logLevel<=de.WARN&&hd.warn(`Auth (${hs}): ${t}`,...e)}function Cc(t,...e){hd.logLevel<=de.ERROR&&hd.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,...e){throw Cv(t,...e)}function Wn(t,...e){return Cv(t,...e)}function sO(t,e,n){const r=Object.assign(Object.assign({},rO()),{[e]:n});return new Hl("auth","Firebase",r).create(e,{appName:t.name})}function Cv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tk.create(t,...e)}function K(t,e,...n){if(!t)throw Cv(e,...n)}function lr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cc(e),new Error(e)}function wr(t,e){t||lr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oO(){return nw()==="http:"||nw()==="https:"}function nw(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oO()||jP()||"connection"in navigator)?navigator.onLine:!0}function lO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,wr(n>e,"Short delay should be less than long delay!"),this.isMobile=FP()||zP()}get(){return aO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t,e){wr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=new Wl(3e4,6e4);function Uo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ps(t,e,n,r,i={}){return rk(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ql(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),nk.fetch()(ik(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function rk(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uO),e);try{const i=new dO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw qu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw qu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw qu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw qu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sO(t,c,u);Nn(t,c)}}catch(i){if(i instanceof Zn)throw i;Nn(t,"network-request-failed",{message:String(i)})}}async function Kl(t,e,n,r,i={}){const s=await ps(t,e,n,r,i);return"mfaPendingCredential"in s&&Nn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ik(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rv(t.config,i):`${t.config.apiScheme}://${i}`}class dO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Wn(this.auth,"network-request-failed")),cO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Wn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fO(t,e){return ps(t,"POST","/v1/accounts:delete",e)}async function hO(t,e){return ps(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pO(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Nv(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$a(Wh(i.auth_time)),issuedAtTime:$a(Wh(i.iat)),expirationTime:$a(Wh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Wh(t){return Number(t)*1e3}function Nv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cc("JWT malformed, contained fewer than 3 sections"),null;try{const i=VS(n);return i?JSON.parse(i):(Cc("Failed to decode base64 JWT payload"),null)}catch(i){return Cc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mO(t){const e=Nv(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&gO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$a(this.lastLoginAt),this.creationTime=$a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Eo(t,hO(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?EO(s.providerUserInfo):[],a=wO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sk(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function yO(t){const e=Oe(t);await pd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function EO(t){return t.map(e=>{var{providerId:n}=e,r=xv(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t,e){const n=await rk(t,{},async()=>{const r=ql({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ik(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nk.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _O(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ml;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ml,this.toJSON())}_performRefresh(){return lr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sk(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Eo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pO(this,e)}reload(){return yO(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Eo(this,fO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:w,emailVerified:v,isAnonymous:S,providerData:x,stsTokenManager:b}=n;K(w&&b,e,"internal-error");const R=ml.fromJSON(this.name,b);K(typeof w=="string",e,"internal-error"),Mr(d,e.name),Mr(f,e.name),K(typeof v=="boolean",e,"internal-error"),K(typeof S=="boolean",e,"internal-error"),Mr(h,e.name),Mr(g,e.name),Mr(y,e.name),Mr(E,e.name),Mr(m,e.name),Mr(p,e.name);const F=new Vi({uid:w,auth:e,email:f,emailVerified:v,displayName:d,isAnonymous:S,photoURL:g,phoneNumber:h,tenantId:y,stsTokenManager:R,createdAt:m,lastLoginAt:p});return x&&Array.isArray(x)&&(F.providerData=x.map(V=>Object.assign({},V))),E&&(F._redirectEventId=E),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new ml;i.updateFromServerResponse(n);const s=new Vi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pd(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=new Map;function ur(t){wr(t instanceof Function,"Expected a class definition");let e=rw.get(t);return e?(wr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rw.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ok.type="NONE";const iw=ok;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t,e,n){return`firebase:${t}:${e}:${n}`}class no{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Rc(this.userKey,i.apiKey,s),this.fullPersistenceKey=Rc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new no(ur(iw),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||ur(iw);const o=Rc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Vi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new no(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new no(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ak(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dk(e))return"Blackberry";if(fk(e))return"Webos";if(Av(e))return"Safari";if((e.includes("chrome/")||lk(e))&&!e.includes("edge/"))return"Chrome";if(ck(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ak(t=Dt()){return/firefox\//i.test(t)}function Av(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lk(t=Dt()){return/crios\//i.test(t)}function uk(t=Dt()){return/iemobile/i.test(t)}function ck(t=Dt()){return/android/i.test(t)}function dk(t=Dt()){return/blackberry/i.test(t)}function fk(t=Dt()){return/webos/i.test(t)}function mf(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TO(t=Dt()){var e;return mf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SO(){return BP()&&document.documentMode===10}function hk(t=Dt()){return mf(t)||ck(t)||fk(t)||dk(t)||/windows phone/i.test(t)||uk(t)}function kO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t,e=[]){let n;switch(t){case"Browser":n=sw(Dt());break;case"Worker":n=`${sw(Dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}async function mk(t,e){return ps(t,"GET","/v2/recaptchaConfig",Uo(t,e))}function ow(t){return t!==void 0&&t.enterprise!==void 0}class gk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vk(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IO().appendChild(r)})}function bO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xO="https://www.google.com/recaptcha/enterprise.js?render=",CO="recaptcha-enterprise",RO="NO_RECAPTCHA";class yk{constructor(e){this.type=CO,this.auth=jo(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{mk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new gk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ow(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(RO)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ow(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vk(xO+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function md(t,e,n,r=!1){const i=new yk(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new aw(this),this.idTokenSubscription=new aw(this),this.beforeStateQueue=new NO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ur(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await no.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ur(e))})}async initializeRecaptchaConfig(){const e=await mk(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new gk(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new yk(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ur(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await no.create(this,[ur(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pk(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jo(t){return Oe(t)}class aw{constructor(e){this.auth=e,this.observer=null,this.addObserver=QP(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t,e){const n=pf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(dd(s,e??{}))return i;Nn(i,"already-initialized")}return n.initialize({options:e})}function DO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ur);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OO(t,e,n){const r=jo(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=wk(e),{host:o,port:a}=LO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MO()}function wk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LO(t){const e=wk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lw(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lw(o)}}}function lw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lr("not implemented")}_getIdTokenResponse(e){return lr("not implemented")}_linkToIdToken(e,n){return lr("not implemented")}_getReauthenticationResolver(e){return lr("not implemented")}}async function $O(t,e){return ps(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(t,e){return Kl(t,"POST","/v1/accounts:signInWithPassword",Uo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(t,e){return Kl(t,"POST","/v1/accounts:signInWithEmailLink",Uo(t,e))}async function UO(t,e){return Kl(t,"POST","/v1/accounts:signInWithEmailLink",Uo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends Pv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await md(e,r,"signInWithPassword");return Kh(e,i)}else return Kh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await md(e,r,"signInWithPassword");return Kh(e,s)}else return Promise.reject(i)});case"emailLink":return FO(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return $O(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UO(e,{idToken:n,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e){return Kl(t,"POST","/v1/accounts:signInWithIdp",Uo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO="http://localhost";class ns extends Pv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xv(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ns(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ro(e,n)}buildRequest(){const e={requestUri:jO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ql(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BO(t){const e=ya(wa(t)).link,n=e?ya(wa(e)).deep_link_id:null,r=ya(wa(t)).deep_link_id;return(r?ya(wa(r)).link:null)||r||n||e||t}class Dv{constructor(e){var n,r,i,s,o,a;const l=ya(wa(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=zO((i=l.mode)!==null&&i!==void 0?i:null);K(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BO(e);try{return new Dv(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,n){return gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dv.parseLink(n);return K(r,"argument-error"),gl._fromEmailAndCode(e,r.code,r.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends Ek{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends Gl{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.FACEBOOK_SIGN_IN_METHOD="facebook.com";Br.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Gl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vr.credential(n,r)}catch{return null}}}Vr.GOOGLE_SIGN_IN_METHOD="google.com";Vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends Gl{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:Hr.PROVIDER_ID,signInMethod:Hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hr.credentialFromTaggedObject(e)}static credentialFromError(e){return Hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hr.credential(e.oauthAccessToken)}catch{return null}}}Hr.GITHUB_SIGN_IN_METHOD="github.com";Hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr extends Gl{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return qr.credential(n,r)}catch{return null}}}qr.TWITTER_SIGN_IN_METHOD="twitter.com";qr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gh(t,e){return Kl(t,"POST","/v1/accounts:signUp",Uo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vi._fromIdTokenResponse(e,r,i),o=uw(r);return new rs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=uw(r);return new rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function uw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends Zn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,gd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new gd(e,n,r,i)}}function _k(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?gd._fromErrorAndOperation(t,s,e,r):s})}async function VO(t,e,n=!1){const r=await Eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Eo(t,_k(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Nv(s.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),rs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e,n=!1){const r="signIn",i=await _k(t,r,e),s=await rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function qO(t,e){return Tk(jo(t),e)}async function WO(t,e,n){var r;const i=jo(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await md(i,s,"signUpPassword");o=Gh(i,u)}else o=Gh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await md(i,s,"signUpPassword");return Gh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await rs._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function KO(t,e,n){return qO(Oe(t),zo.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GO(t,e){return ps(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Eo(r,GO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YO(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function XO(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function JO(t,e,n,r){return Oe(t).onAuthStateChanged(e,n,r)}function ZO(t){return Oe(t).signOut()}const vd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vd,"1"),this.storage.removeItem(vd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(){const t=Dt();return Av(t)||mf(t)}const tL=1e3,nL=10;class kk extends Sk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=eL()&&kO(),this.fallbackToPolling=hk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);SO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kk.type="LOCAL";const rL=kk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik extends Sk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ik.type="SESSION";const bk=Ik;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new gf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await iL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ov("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(){return window}function oL(t){Kn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(){return typeof Kn().WorkerGlobalScope<"u"&&typeof Kn().importScripts=="function"}async function aL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uL(){return xk()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="firebaseLocalStorageDb",cL=1,yd="firebaseLocalStorage",Rk="fbase_key";class Ql{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vf(t,e){return t.transaction([yd],e?"readwrite":"readonly").objectStore(yd)}function dL(){const t=indexedDB.deleteDatabase(Ck);return new Ql(t).toPromise()}function xm(){const t=indexedDB.open(Ck,cL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yd,{keyPath:Rk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yd)?e(r):(r.close(),await dL(),e(await xm()))})})}async function cw(t,e,n){const r=vf(t,!0).put({[Rk]:e,value:n});return new Ql(r).toPromise()}async function fL(t,e){const n=vf(t,!1).get(e),r=await new Ql(n).toPromise();return r===void 0?null:r.value}function dw(t,e){const n=vf(t,!0).delete(e);return new Ql(n).toPromise()}const hL=800,pL=3;class Nk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gf._getInstance(uL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aL(),!this.activeServiceWorker)return;this.sender=new sL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xm();return await cw(e,vd,"1"),await dw(e,vd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vf(i,!1).getAll();return new Ql(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nk.type="LOCAL";const mL=Nk;new Wl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gL(t,e){return e?ur(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv extends Pv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vL(t){return Tk(t.auth,new Lv(t),t.bypassAuthState)}function yL(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),HO(n,new Lv(t),t.bypassAuthState)}async function wL(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),VO(n,new Lv(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vL;case"linkViaPopup":case"linkViaRedirect":return wL;case"reauthViaPopup":case"reauthViaRedirect":return yL;default:Nn(this.auth,"internal-error")}}resolve(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EL=new Wl(2e3,1e4);class Vs extends Ak{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Vs.currentPopupAction&&Vs.currentPopupAction.cancel(),Vs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){wr(this.filter.length===1,"Popup operations only handle one event");const e=Ov();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EL.get())};e()}}Vs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L="pendingRedirect",Nc=new Map;class TL extends Ak{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nc.get(this.auth._key());if(!e){try{const r=await SL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nc.set(this.auth._key(),e)}return this.bypassAuthState||Nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SL(t,e){const n=bL(e),r=IL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kL(t,e){Nc.set(t._key(),e)}function IL(t){return ur(t._redirectPersistence)}function bL(t){return Rc(_L,t.config.apiKey,t.name)}async function xL(t,e,n=!1){const r=jo(t),i=gL(r,e),o=await new TL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=10*60*1e3;class RL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pk(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CL&&this.cachedEventUids.clear(),this.cachedEventUids.has(fw(e))}saveEventToCache(e){this.cachedEventUids.add(fw(e)),this.lastProcessedEventTime=Date.now()}}function fw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pk(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AL(t,e={}){return ps(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DL=/^https?/;async function OL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AL(t);for(const n of e)try{if(LL(n))return}catch{}Nn(t,"unauthorized-domain")}function LL(t){const e=bm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DL.test(n))return!1;if(PL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ML=new Wl(3e4,6e4);function hw(){const t=Kn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $L(t){return new Promise((e,n)=>{var r,i,s;function o(){hw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hw(),n(Wn(t,"network-request-failed"))},timeout:ML.get()})}if(!((i=(r=Kn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Kn().gapi)===null||s===void 0)&&s.load)o();else{const a=bO("iframefcb");return Kn()[a]=()=>{gapi.load?o():n(Wn(t,"network-request-failed"))},vk(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function FL(t){return Ac=Ac||$L(t),Ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UL=new Wl(5e3,15e3),jL="__/auth/iframe",zL="emulator/auth/iframe",BL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HL(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rv(e,zL):`https://${t.config.authDomain}/${jL}`,r={apiKey:e.apiKey,appName:t.name,v:hs},i=VL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ql(r).slice(1)}`}async function qL(t){const e=await FL(t),n=Kn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:HL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Wn(t,"network-request-failed"),a=Kn().setTimeout(()=>{s(o)},UL.get());function l(){Kn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KL=500,GL=600,QL="_blank",YL="http://localhost";class pw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XL(t,e,n,r=KL,i=GL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},WL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Dt().toLowerCase();n&&(a=lk(u)?QL:n),ak(u)&&(e=e||YL,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[h,g])=>`${f}${h}=${g},`,"");if(TO(u)&&a!=="_self")return JL(e||"",a),new pw(null);const d=window.open(e||"",a,c);K(d,t,"popup-blocked");try{d.focus()}catch{}return new pw(d)}function JL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL="__/auth/handler",eM="emulator/auth/handler",tM=encodeURIComponent("fac");async function mw(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:i};if(e instanceof Ek){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Gl){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${tM}=${encodeURIComponent(l)}`:"";return`${nM(t)}?${ql(a).slice(1)}${u}`}function nM({config:t}){return t.emulator?Rv(t,eM):`https://${t.authDomain}/${ZL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="webStorageSupport";class rM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bk,this._completeRedirectFn=xL,this._overrideRedirectResult=kL}async _openPopup(e,n,r,i){var s;wr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await mw(e,n,r,bm(),i);return XL(e,o,Ov())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mw(e,n,r,bm(),i);return oL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qL(e),r=new RL(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qh,{type:Qh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Qh];o!==void 0&&n(!!o),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hk()||Av()||mf()}}const iM=rM;var gw="@firebase/auth",vw="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aM(t){ts(new hi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pk(t)},u=new AO(r,i,s,l);return DO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new hi("auth-internal",e=>{const n=jo(e.getProvider("auth").getImmediate());return(r=>new sM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(gw,vw,oM(t)),qn(gw,vw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=5*60,uM=KS("authIdTokenMaxAge")||lM;let yw=null;const cM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uM)return;const i=n==null?void 0:n.token;yw!==i&&(yw=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dM(t=bv()){const e=pf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PO(t,{popupRedirectResolver:iM,persistence:[mL,rL,bk]}),r=KS("authTokenSyncURL");if(r){const s=cM(r);XO(n,s,()=>s(n.currentUser)),YO(n,o=>s(o))}const i=HS("auth");return i&&OO(n,`http://${i}`),n}aM("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function fM(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function hM(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Hs=function(){return Hs=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Hs.apply(this,arguments)},Dk=function(t){return{loading:t==null,value:t}},pM=function(){return function(t,e){switch(e.type){case"error":return Hs(Hs({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Dk(e.defaultValue);case"value":return Hs(Hs({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},mM=function(t){var e=t?t():void 0,n=_.useReducer(pM(),Dk(e)),r=n[0],i=n[1],s=_.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=_.useCallback(function(l){i({type:"error",error:l})},[]),a=_.useCallback(function(l){i({type:"value",value:l})},[]);return _.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Bo=function(t,e){var n=mM(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return _.useEffect(function(){var l=JO(t,function(u){return fM(void 0,void 0,void 0,function(){var c;return hM(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return d.sent(),[3,4];case 3:return c=d.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]},gM="firebase",vM="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn(gM,vM,"app");var yM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Mv=Mv||{},J=yM||self;function yf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Yl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wM(t){return Object.prototype.hasOwnProperty.call(t,Yh)&&t[Yh]||(t[Yh]=++EM)}var Yh="closure_uid_"+(1e9*Math.random()>>>0),EM=0;function _M(t,e,n){return t.call.apply(t.bind,arguments)}function TM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Rt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Rt=_M:Rt=TM,Rt.apply(null,arguments)}function Wu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Si(){this.s=this.s,this.o=this.o}var SM=0;Si.prototype.s=!1;Si.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),SM!=0)&&wM(this)};Si.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ok=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $v(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ww(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};var kM=function(){if(!J.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{J.addEventListener("test",()=>{},e),J.removeEventListener("test",()=>{},e)}catch{}return t}();function vl(t){return/^[\s\xa0]*$/.test(t)}function wf(){var t=J.navigator;return t&&(t=t.userAgent)?t:""}function Fn(t){return wf().indexOf(t)!=-1}function Fv(t){return Fv[" "](t),t}Fv[" "]=function(){};function IM(t,e){var n=v4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bM=Fn("Opera"),_o=Fn("Trident")||Fn("MSIE"),Lk=Fn("Edge"),Cm=Lk||_o,Mk=Fn("Gecko")&&!(wf().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge"))&&!(Fn("Trident")||Fn("MSIE"))&&!Fn("Edge"),xM=wf().toLowerCase().indexOf("webkit")!=-1&&!Fn("Edge");function $k(){var t=J.document;return t?t.documentMode:void 0}var Rm;e:{var Xh="",Jh=function(){var t=wf();if(Mk)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lk)return/Edge\/([\d\.]+)/.exec(t);if(_o)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xM)return/WebKit\/(\S+)/.exec(t);if(bM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Jh&&(Xh=Jh?Jh[1]:""),_o){var Zh=$k();if(Zh!=null&&Zh>parseFloat(Xh)){Rm=String(Zh);break e}}Rm=Xh}var Nm;if(J.document&&_o){var Ew=$k();Nm=Ew||parseInt(Rm,10)||void 0}else Nm=void 0;var CM=Nm;function yl(t,e){if(Nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mk){e:{try{Fv(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&yl.$.h.call(this)}}dt(yl,Nt);var RM={2:"touch",3:"pen",4:"mouse"};yl.prototype.h=function(){yl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xl="closure_listenable_"+(1e6*Math.random()|0),NM=0;function AM(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++NM,this.fa=this.ia=!1}function Ef(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Uv(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Fk(t){const e={};for(const n in t)e[n]=t[n];return e}const _w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<_w.length;s++)n=_w[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _f(t){this.src=t,this.g={},this.h=0}_f.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Pm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new AM(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Am(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ok(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ef(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var jv="closure_lm_"+(1e6*Math.random()|0),ep={};function jk(t,e,n,r,i){if(r&&r.once)return Bk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)jk(t,e[s],n,r,i);return null}return n=Vv(n),t&&t[Xl]?t.O(e,n,Yl(r)?!!r.capture:!!r,i):zk(t,e,n,!1,r,i)}function zk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Yl(i)?!!i.capture:!!i,a=Bv(t);if(a||(t[jv]=a=new _f(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DM(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Hk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DM(){function t(n){return e.call(t.src,t.listener,n)}const e=OM;return t}function Bk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Bk(t,e[s],n,r,i);return null}return n=Vv(n),t&&t[Xl]?t.P(e,n,Yl(r)?!!r.capture:!!r,i):zk(t,e,n,!0,r,i)}function Vk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Vk(t,e[s],n,r,i);else r=Yl(r)?!!r.capture:!!r,n=Vv(n),t&&t[Xl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Pm(s,n,r,i),-1<n&&(Ef(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bv(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pm(e,n,r,i)),(n=-1<t?e[t]:null)&&zv(n))}function zv(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xl])Am(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Hk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bv(e))?(Am(n,t),n.h==0&&(n.src=null,e[jv]=null)):Ef(t)}}}function Hk(t){return t in ep?ep[t]:ep[t]="on"+t}function OM(t,e){if(t.fa)t=!0;else{e=new yl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&zv(t),t=n.call(r,e)}return t}function Bv(t){return t=t[jv],t instanceof _f?t:null}var tp="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vv(t){return typeof t=="function"?t:(t[tp]||(t[tp]=function(e){return t.handleEvent(e)}),t[tp])}function ct(){Si.call(this),this.i=new _f(this),this.S=this,this.J=null}dt(ct,Si);ct.prototype[Xl]=!0;ct.prototype.removeEventListener=function(t,e,n,r){Vk(this,t,e,n,r)};function wt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Nt(e,t);else if(e instanceof Nt)e.target=e.target||t;else{var i=e;e=new Nt(r,t),Uk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ku(o,r,!0,e)&&i}if(o=e.g=t,i=Ku(o,r,!0,e)&&i,i=Ku(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ku(o,r,!1,e)&&i}ct.prototype.N=function(){if(ct.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ef(n[r]);delete t.g[e],t.h--}}this.J=null};ct.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ct.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ku(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Am(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Hv=J.JSON.stringify;class LM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function MM(){var t=qv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $M{constructor(){this.h=this.g=null}add(e,n){const r=qk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var qk=new LM(()=>new FM,t=>t.reset());class FM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function jM(t){J.setTimeout(()=>{throw t},0)}let wl,El=!1,qv=new $M,Wk=()=>{const t=J.Promise.resolve(void 0);wl=()=>{t.then(zM)}};var zM=()=>{for(var t;t=MM();){try{t.h.call(t.g)}catch(n){jM(n)}var e=qk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}El=!1};function Tf(t,e){ct.call(this),this.h=t||1,this.g=e||J,this.j=Rt(this.qb,this),this.l=Date.now()}dt(Tf,ct);O=Tf.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(Wv(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wv(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Tf.$.N.call(this),Wv(this),delete this.g};function Kv(t,e,n){if(typeof t=="function")n&&(t=Rt(t,n));else if(t&&typeof t.handleEvent=="function")t=Rt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:J.setTimeout(t,e||0)}function Kk(t){t.g=Kv(()=>{t.g=null,t.i&&(t.i=!1,Kk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class BM extends Si{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Kk(this)}N(){super.N(),this.g&&(J.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _l(t){Si.call(this),this.h=t,this.g={}}dt(_l,Si);var Tw=[];function Gk(t,e,n,r){Array.isArray(n)||(n&&(Tw[0]=n.toString()),n=Tw);for(var i=0;i<n.length;i++){var s=jk(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qk(t){Uv(t.g,function(e,n){this.g.hasOwnProperty(n)&&zv(e)},t),t.g={}}_l.prototype.N=function(){_l.$.N.call(this),Qk(this)};_l.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sf(){this.g=!0}Sf.prototype.Ea=function(){this.g=!1};function VM(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function HM(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+WM(t,n)+(r?" "+r:"")})}function qM(t,e){t.info(function(){return"TIMEOUT: "+e})}Sf.prototype.info=function(){};function WM(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Hv(n)}catch{return e}}var ms={},Sw=null;function kf(){return Sw=Sw||new ct}ms.Ta="serverreachability";function Yk(t){Nt.call(this,ms.Ta,t)}dt(Yk,Nt);function Tl(t){const e=kf();wt(e,new Yk(e))}ms.STAT_EVENT="statevent";function Xk(t,e){Nt.call(this,ms.STAT_EVENT,t),this.stat=e}dt(Xk,Nt);function $t(t){const e=kf();wt(e,new Xk(e,t))}ms.Ua="timingevent";function Jk(t,e){Nt.call(this,ms.Ua,t),this.size=e}dt(Jk,Nt);function Jl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return J.setTimeout(function(){t()},e)}var If={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Zk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gv(){}Gv.prototype.h=null;function kw(t){return t.h||(t.h=t.i())}function eI(){}var Zl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qv(){Nt.call(this,"d")}dt(Qv,Nt);function Yv(){Nt.call(this,"c")}dt(Yv,Nt);var Dm;function bf(){}dt(bf,Gv);bf.prototype.g=function(){return new XMLHttpRequest};bf.prototype.i=function(){return{}};Dm=new bf;function eu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new _l(this),this.P=KM,t=Cm?125:void 0,this.V=new Tf(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new tI}function tI(){this.i=null,this.g="",this.h=!1}var KM=45e3,Om={},wd={};O=eu.prototype;O.setTimeout=function(t){this.P=t};function Lm(t,e,n){t.L=1,t.v=Cf(Er(e)),t.s=n,t.S=!0,nI(t,null)}function nI(t,e){t.G=Date.now(),tu(t),t.A=Er(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),cI(n.i,"t",r),t.C=0,n=t.l.J,t.h=new tI,t.g=AI(t.l,n?e:null,!t.s),0<t.O&&(t.M=new BM(Rt(t.Pa,t,t.g),t.O)),Gk(t.U,t.g,"readystatechange",t.nb),e=t.I?Fk(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Tl(),VM(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&Un(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const c=Un(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Cm||this.g&&(this.h.h||this.g.ja()||Cw(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Tl(3):Tl(2)),xf(this);var n=this.g.da();this.ca=n;t:if(rI(this)){var r=Cw(this.g);t="";var i=r.length,s=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Li(this),Fa(this);var o="";break t}this.h.i=new J.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,HM(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vl(a)){var u=a;break t}}u=null}if(n=u)qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mm(this,n);else{this.i=!1,this.o=3,$t(12),Li(this),Fa(this);break e}}this.S?(iI(this,c,o),Cm&&this.i&&c==3&&(Gk(this.U,this.V,"tick",this.mb),this.V.start())):(qs(this.j,this.m,o,null),Mm(this,o)),c==4&&Li(this),this.i&&!this.J&&(c==4?xI(this.l,this):(this.i=!1,tu(this)))}else p4(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,$t(12)):(this.o=0,$t(13)),Li(this),Fa(this)}}}catch{}finally{}};function rI(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function iI(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=GM(t,n),i==wd){e==4&&(t.o=4,$t(14),r=!1),qs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Om){t.o=4,$t(15),qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qs(t.j,t.m,i,null),Mm(t,i);rI(t)&&i!=wd&&i!=Om&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,$t(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ny(e),e.M=!0,$t(11))):(qs(t.j,t.m,n,"[Invalid Chunked Response]"),Li(t),Fa(t))}O.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.C<e.length&&(xf(this),iI(this,t,e),this.i&&t!=4&&tu(this))}};function GM(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?wd:(n=Number(e.substring(n,r)),isNaN(n)?Om:(r+=1,r+n>e.length?wd:(e=e.slice(r,r+n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,Li(this)};function tu(t){t.Y=Date.now()+t.P,sI(t,t.P)}function sI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Jl(Rt(t.lb,t),e)}function xf(t){t.B&&(J.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(qM(this.j,this.A),this.L!=2&&(Tl(),$t(17)),Li(this),this.o=2,Fa(this)):sI(this,this.Y-t)};function Fa(t){t.l.H==0||t.J||xI(t.l,t)}function Li(t){xf(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wv(t.V),Qk(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Mm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$m(n.i,t))){if(!t.K&&$m(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Td(n),Af(n);else break e;ty(n),$t(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Jl(Rt(n.ib,n),6e3));if(1>=hI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Mi(n,11)}else if((t.K||n.g==t)&&Td(n),!vl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const g=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xv(s,s.h),s.h=null))}if(r.F){const y=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,ke(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=NI(r,r.J?r.pa:null,r.Y),o.K){pI(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(xf(a),tu(a)),r.g=o}else II(r);0<n.j.length&&Pf(n)}else u[0]!="stop"&&u[0]!="close"||Mi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Mi(n,7):ey(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Tl(4)}catch{}}function QM(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function YM(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function oI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=YM(t),r=QM(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var aI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XM(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hi){this.h=t.h,Ed(this,t.j),this.s=t.s,this.g=t.g,_d(this,t.m),this.l=t.l;var e=t.i,n=new Sl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Iw(this,n),this.o=t.o}else t&&(e=String(t).match(aI))?(this.h=!1,Ed(this,e[1]||"",!0),this.s=Ea(e[2]||""),this.g=Ea(e[3]||"",!0),_d(this,e[4]),this.l=Ea(e[5]||"",!0),Iw(this,e[6]||"",!0),this.o=Ea(e[7]||"")):(this.h=!1,this.i=new Sl(null,this.h))}Hi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_a(e,bw,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_a(e,bw,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_a(n,n.charAt(0)=="/"?e4:ZM,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_a(n,n4)),t.join("")};function Er(t){return new Hi(t)}function Ed(t,e,n){t.j=n?Ea(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _d(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Iw(t,e,n){e instanceof Sl?(t.i=e,r4(t.i,t.h)):(n||(e=_a(e,t4)),t.i=new Sl(e,t.h))}function ke(t,e,n){t.i.set(e,n)}function Cf(t){return ke(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ea(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _a(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JM),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JM(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var bw=/[#\/\?@]/g,ZM=/[#\?:]/g,e4=/[#\?]/g,t4=/[#\?@]/g,n4=/#/g;function Sl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ki(t){t.g||(t.g=new Map,t.h=0,t.i&&XM(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Sl.prototype;O.add=function(t,e){ki(this),this.i=null,t=Vo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function lI(t,e){ki(t),e=Vo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function uI(t,e){return ki(t),e=Vo(t,e),t.g.has(e)}O.forEach=function(t,e){ki(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){ki(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){ki(this);let e=[];if(typeof t=="string")uI(this,t)&&(e=e.concat(this.g.get(Vo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return ki(this),this.i=null,t=Vo(this,t),uI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cI(t,e,n){lI(t,e),0<n.length&&(t.i=null,t.g.set(Vo(t,e),$v(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Vo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function r4(t,e){e&&!t.j&&(ki(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(lI(this,r),cI(this,i,n))},t)),t.j=e}var i4=class{constructor(t,e){this.g=t,this.map=e}};function dI(t){this.l=t||s4,J.PerformanceNavigationTiming?(t=J.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(J.g&&J.g.Ka&&J.g.Ka()&&J.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var s4=10;function fI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function hI(t){return t.h?1:t.g?t.g.size:0}function $m(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xv(t,e){t.g?t.g.add(e):t.h=e}function pI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}dI.prototype.cancel=function(){if(this.i=mI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $v(t.i)}var o4=class{stringify(t){return J.JSON.stringify(t,void 0)}parse(t){return J.JSON.parse(t,void 0)}};function a4(){this.g=new o4}function l4(t,e,n){const r=n||"";try{oI(t,function(i,s){let o=i;Yl(i)&&(o=Hv(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function u4(t,e){const n=new Sf;if(J.Image){const r=new Image;r.onload=Wu(Gu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wu(Gu,n,r,"TestLoadImage: error",!1,e),r.onabort=Wu(Gu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wu(Gu,n,r,"TestLoadImage: timeout",!1,e),J.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Gu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function nu(t){this.l=t.fc||null,this.j=t.ob||!1}dt(nu,Gv);nu.prototype.g=function(){return new Rf(this.l,this.j)};nu.prototype.i=function(t){return function(){return t}}({});function Rf(t,e){ct.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jv,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Rf,ct);var Jv=0;O=Rf.prototype;O.open=function(t,e){if(this.readyState!=Jv)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,kl(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||J).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ru(this)),this.readyState=Jv};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,kl(this)),this.g&&(this.readyState=3,kl(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof J.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function gI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ru(this):kl(this),this.readyState==3&&gI(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,ru(this))};O.Ya=function(t){this.g&&(this.response=t,ru(this))};O.ka=function(){this.g&&ru(this)};function ru(t){t.readyState=4,t.l=null,t.j=null,t.A=null,kl(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function kl(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Rf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var c4=J.JSON.parse;function Ke(t){ct.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=vI,this.L=this.M=!1}dt(Ke,ct);var vI="",d4=/^https?$/i,f4=["POST","PUT"];O=Ke.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Dm.g(),this.C=this.u?kw(this.u):kw(Dm),this.g.onreadystatechange=Rt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){xw(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=J.FormData&&t instanceof J.FormData,!(0<=Ok(f4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{EI(this),0<this.B&&((this.L=h4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Rt(this.ua,this)):this.A=Kv(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){xw(this,s)}};function h4(t){return _o&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Mv<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function xw(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yI(t),Nf(t)}function yI(t){t.F||(t.F=!0,wt(t,"complete"),wt(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),Nf(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Nf(this,!0)),Ke.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?wI(this):this.kb())};O.kb=function(){wI(this)};function wI(t){if(t.h&&typeof Mv<"u"&&(!t.C[1]||Un(t)!=4||t.da()!=2)){if(t.v&&Un(t)==4)Kv(t.La,0,t);else if(wt(t,"readystatechange"),Un(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(aI)[1]||null;!i&&J.self&&J.self.location&&(i=J.self.location.protocol.slice(0,-1)),r=!d4.test(i?i.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var s=2<Un(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",yI(t)}}finally{Nf(t)}}}}function Nf(t,e){if(t.g){EI(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch{}}}function EI(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(J.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function Un(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),c4(e)}};function Cw(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case vI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function p4(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(vl(t[r]))continue;var n=UM(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}PM(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _I(t){let e="";return Uv(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zv(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_I(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ke(t,e,n))}function da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function TI(t){this.Ga=0,this.j=[],this.l=new Sf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=da("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=da("baseRetryDelayMs",5e3,t),this.hb=da("retryDelaySeedMs",1e4,t),this.eb=da("forwardChannelMaxRetries",2,t),this.xa=da("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new dI(t&&t.concurrentRequestLimit),this.Ja=new a4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=TI.prototype;O.ra=8;O.H=1;function ey(t){if(SI(t),t.H==3){var e=t.W++,n=Er(t.I);if(ke(n,"SID",t.K),ke(n,"RID",e),ke(n,"TYPE","terminate"),iu(t,n),e=new eu(t,t.l,e),e.L=2,e.v=Cf(Er(n)),n=!1,J.navigator&&J.navigator.sendBeacon)try{n=J.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&J.Image&&(new Image().src=e.v,n=!0),n||(e.g=AI(e.l,null),e.g.ha(e.v)),e.G=Date.now(),tu(e)}RI(t)}function Af(t){t.g&&(ny(t),t.g.cancel(),t.g=null)}function SI(t){Af(t),t.u&&(J.clearTimeout(t.u),t.u=null),Td(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&J.clearTimeout(t.m),t.m=null)}function Pf(t){if(!fI(t.i)&&!t.m){t.m=!0;var e=t.Na;wl||Wk(),El||(wl(),El=!0),qv.add(e,t),t.C=0}}function m4(t,e){return hI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Jl(Rt(t.Na,t,e),CI(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new eu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Fk(s),Uk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=kI(this,i,e),n=Er(this.I),ke(n,"RID",t),ke(n,"CVER",22),this.F&&ke(n,"X-HTTP-Session-Id",this.F),iu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(_I(s)))+"&"+e:this.o&&Zv(n,this.o,s)),Xv(this.i,i),this.bb&&ke(n,"TYPE","init"),this.P?(ke(n,"$req",e),ke(n,"SID","null"),i.aa=!0,Lm(i,n,null)):Lm(i,n,e),this.H=2}}else this.H==3&&(t?Rw(this,t):this.j.length==0||fI(this.i)||Rw(this))};function Rw(t,e){var n;e?n=e.m:n=t.W++;const r=Er(t.I);ke(r,"SID",t.K),ke(r,"RID",n),ke(r,"AID",t.V),iu(t,r),t.o&&t.s&&Zv(r,t.o,t.s),n=new eu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=kI(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xv(t.i,n),Lm(n,r,e)}function iu(t,e){t.na&&Uv(t.na,function(n,r){ke(e,r,n)}),t.h&&oI({},function(n,r){ke(e,r,n)})}function kI(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Rt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{l4(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function II(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wl||Wk(),El||(wl(),El=!0),qv.add(e,t),t.A=0}}function ty(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Jl(Rt(t.Ma,t),CI(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,bI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Jl(Rt(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,$t(10),Af(this),bI(this))};function ny(t){t.B!=null&&(J.clearTimeout(t.B),t.B=null)}function bI(t){t.g=new eu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Er(t.wa);ke(e,"RID","rpc"),ke(e,"SID",t.K),ke(e,"AID",t.V),ke(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ke(e,"TO",t.qa),ke(e,"TYPE","xmlhttp"),iu(t,e),t.o&&t.s&&Zv(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Cf(Er(e)),n.s=null,n.S=!0,nI(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Af(this),ty(this),$t(19))};function Td(t){t.v!=null&&(J.clearTimeout(t.v),t.v=null)}function xI(t,e){var n=null;if(t.g==e){Td(t),ny(t),t.g=null;var r=2}else if($m(t.i,e))n=e.F,pI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=kf(),wt(r,new Jk(r,n)),Pf(t)}else II(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&m4(t,e)||r==2&&ty(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Mi(t,5);break;case 4:Mi(t,10);break;case 3:Mi(t,6);break;default:Mi(t,2)}}}function CI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Mi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Rt(t.pb,t);n||(n=new Hi("//www.google.com/images/cleardot.gif"),J.location&&J.location.protocol=="http"||Ed(n,"https"),Cf(n)),u4(n.toString(),r)}else $t(2);t.H=0,t.h&&t.h.za(e),RI(t),SI(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),$t(2)):(this.l.info("Failed to ping google.com"),$t(1))};function RI(t){if(t.H=0,t.ma=[],t.h){const e=mI(t.i);(e.length!=0||t.j.length!=0)&&(ww(t.ma,e),ww(t.ma,t.j),t.i.i.length=0,$v(t.j),t.j.length=0),t.h.ya()}}function NI(t,e,n){var r=n instanceof Hi?Er(n):new Hi(n);if(r.g!="")e&&(r.g=e+"."+r.g),_d(r,r.m);else{var i=J.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hi(null);r&&Ed(s,r),e&&(s.g=e),i&&_d(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ke(r,n,e),ke(r,"VER",t.ra),iu(t,r),r}function AI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ke(new nu({ob:!0})):new Ke(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function PI(){}O=PI.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function Sd(){if(_o&&!(10<=Number(CM)))throw Error("Environmental error: no available transport.")}Sd.prototype.g=function(t,e){return new sn(t,e)};function sn(t,e){ct.call(this),this.g=new TI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!vl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ho(this)}dt(sn,ct);sn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;$t(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=NI(t,null,t.Y),Pf(t)};sn.prototype.close=function(){ey(this.g)};sn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Hv(t),t=n);e.j.push(new i4(e.fb++,t)),e.H==3&&Pf(e)};sn.prototype.N=function(){this.g.h=null,delete this.j,ey(this.g),delete this.g,sn.$.N.call(this)};function DI(t){Qv.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(DI,Qv);function OI(){Yv.call(this),this.status=1}dt(OI,Yv);function Ho(t){this.g=t}dt(Ho,PI);Ho.prototype.Ba=function(){wt(this.g,"a")};Ho.prototype.Aa=function(t){wt(this.g,new DI(t))};Ho.prototype.za=function(t){wt(this.g,new OI)};Ho.prototype.ya=function(){wt(this.g,"b")};function g4(){this.blockSize=-1}function An(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}dt(An,g4);An.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function np(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}An.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)np(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){np(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){np(this,r),i=0;break}}this.h=i,this.i+=e};An.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ve(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var v4={};function ry(t){return-128<=t&&128>t?IM(t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function jn(t){if(isNaN(t)||!isFinite(t))return io;if(0>t)return vt(jn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Fm;return new ve(e,0)}function LI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return vt(LI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=jn(Math.pow(e,8)),r=io,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=jn(Math.pow(e,s)),r=r.R(s).add(jn(o))):(r=r.R(n),r=r.add(jn(o)))}return r}var Fm=4294967296,io=ry(0),Um=ry(1),Nw=ry(16777216);O=ve.prototype;O.ea=function(){if(pn(this))return-vt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Fm+r)*e,e*=Fm}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(cr(this))return"0";if(pn(this))return"-"+vt(this).toString(t);for(var e=jn(Math.pow(t,6)),n=this,r="";;){var i=Id(n,e).g;n=kd(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,cr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function cr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function pn(t){return t.h==-1}O.X=function(t){return t=kd(this,t),pn(t)?-1:cr(t)?0:1};function vt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ve(n,~t.h).add(Um)}O.abs=function(){return pn(this)?vt(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function kd(t,e){return t.add(vt(e))}O.R=function(t){if(cr(this)||cr(t))return io;if(pn(this))return pn(t)?vt(this).R(vt(t)):vt(vt(this).R(t));if(pn(t))return vt(this.R(vt(t)));if(0>this.X(Nw)&&0>t.X(Nw))return jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Qu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Qu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ve(n,0)};function Qu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fa(t,e){this.g=t,this.h=e}function Id(t,e){if(cr(e))throw Error("division by zero");if(cr(t))return new fa(io,io);if(pn(t))return e=Id(vt(t),e),new fa(vt(e.g),vt(e.h));if(pn(e))return e=Id(t,vt(e)),new fa(vt(e.g),e.h);if(30<t.g.length){if(pn(t)||pn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Um,r=e;0>=r.X(t);)n=Aw(n),r=Aw(r);var i=ks(n,1),s=ks(r,1);for(r=ks(r,2),n=ks(n,2);!cr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ks(r,1),n=ks(n,1)}return e=kd(t,i.R(e)),new fa(i,e)}for(i=io;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=jn(n),o=s.R(e);pn(o)||0<o.X(t);)n-=r,s=jn(n),o=s.R(e);cr(s)&&(s=Um),i=i.add(s),t=kd(t,o)}return new fa(i,t)}O.gb=function(t){return Id(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ve(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ve(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ve(n,this.h^t.h)};function Aw(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ve(n,t.h)}function ks(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ve(i,t.h)}Sd.prototype.createWebChannel=Sd.prototype.g;sn.prototype.send=sn.prototype.u;sn.prototype.open=sn.prototype.m;sn.prototype.close=sn.prototype.close;If.NO_ERROR=0;If.TIMEOUT=8;If.HTTP_ERROR=6;Zk.COMPLETE="complete";eI.EventType=Zl;Zl.OPEN="a";Zl.CLOSE="b";Zl.ERROR="c";Zl.MESSAGE="d";ct.prototype.listen=ct.prototype.O;Ke.prototype.listenOnce=Ke.prototype.P;Ke.prototype.getLastError=Ke.prototype.Sa;Ke.prototype.getLastErrorCode=Ke.prototype.Ia;Ke.prototype.getStatus=Ke.prototype.da;Ke.prototype.getResponseJson=Ke.prototype.Wa;Ke.prototype.getResponseText=Ke.prototype.ja;Ke.prototype.send=Ke.prototype.ha;Ke.prototype.setWithCredentials=Ke.prototype.Oa;An.prototype.digest=An.prototype.l;An.prototype.reset=An.prototype.reset;An.prototype.update=An.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=jn;ve.fromString=LI;var y4=function(){return new Sd},w4=function(){return kf()},rp=If,E4=Zk,_4=ms,Pw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},T4=nu,Yu=eI,S4=Ke,k4=An,so=ve;const Dw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}kt.UNAUTHENTICATED=new kt(null),kt.GOOGLE_CREDENTIALS=new kt("google-credentials-uid"),kt.FIRST_PARTY=new kt("first-party-uid"),kt.MOCK_USER=new kt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new kv("@firebase/firestore");function Ow(){return is.logLevel}function B(t,...e){if(is.logLevel<=de.DEBUG){const n=e.map(iy);is.debug(`Firestore (${qo}): ${t}`,...n)}}function _r(t,...e){if(is.logLevel<=de.ERROR){const n=e.map(iy);is.error(`Firestore (${qo}): ${t}`,...n)}}function To(t,...e){if(is.logLevel<=de.WARN){const n=e.map(iy);is.warn(`Firestore (${qo}): ${t}`,...n)}}function iy(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${qo}) INTERNAL ASSERTION FAILED: `+t;throw _r(e),new Error(e)}function Ce(t,e){t||G()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}let I4=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(kt.UNAUTHENTICATED))}shutdown(){}};class b4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let x4=class{constructor(e){this.t=e,this.currentUser=kt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new qi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new MI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new kt(e)}};class C4{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=kt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}let R4=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new C4(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(kt.FIRST_PARTY))}shutdown(){}invalidateToken(){}};class N4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class A4{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ce(typeof n.token=="string"),this.T=n.token,new N4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=P4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function So(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Qe(0,0))}static max(){return new te(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Il.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Il?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Il{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const D4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Il{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return D4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new $(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new $(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Ie.fromString(e))}static fromName(e){return new W(Ie.fromString(e).popFirst(5))}static empty(){return new W(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Ie(e.slice()))}}function O4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new pi(i,W.empty(),e)}function L4(t){return new pi(t.readTime,t.key,-1)}class pi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new pi(te.min(),W.empty(),-1)}static max(){return new pi(te.max(),W.empty(),-1)}}function M4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class F4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function su(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==$4)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ou(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}sy.ct=-1;function Df(t){return t==null}function bd(t){return t===0&&1/t==-1/0}function U4(t){return typeof t=="number"&&Number.isInteger(t)&&!bd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function FI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xu(this.root,e,this.comparator,!0)}}class Xu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??mt.RED,this.left=i??mt.EMPTY,this.right=s??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new mt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return mt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mw(this.data.getIterator())}getIteratorFrom(e){return new Mw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class Mw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new en([])}unionWith(e){let n=new At(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return So(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new UI("Invalid base64 string: "+i):i}}(e);return new Ot(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const j4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mi(t){if(Ce(!!t),typeof t=="string"){let e=0;const n=j4.exec(t);if(Ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Ot.fromBase64String(t):Ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ay(t){const e=t.mapValue.fields.__previous_value__;return oy(e)?ay(e):e}function bl(t){const e=mi(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class xl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?oy(t)?4:B4(t)?9007199254740991:10:G()}function Yn(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bl(t).isEqual(bl(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=mi(r.timestampValue),o=mi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ss(r.bytesValue).isEqual(ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ze(r.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ze(r.integerValue)===Ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ze(r.doubleValue),o=Ze(i.doubleValue);return s===o?bd(s)===bd(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return So(t.arrayValue.values||[],e.arrayValue.values||[],Yn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Lw(s)!==Lw(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Yn(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Cl(t,e){return(t.values||[]).find(n=>Yn(n,e))!==void 0}function ko(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ze(i.integerValue||i.doubleValue),a=Ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return $w(t.timestampValue,e.timestampValue);case 4:return $w(bl(t),bl(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ss(i),a=ss(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=fe(o[l],a[l]);if(u!==0)return u}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=fe(Ze(i.latitude),Ze(s.latitude));return o!==0?o:fe(Ze(i.longitude),Ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ko(o[l],a[l]);if(u)return u}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ju.mapValue&&s===Ju.mapValue)return 0;if(i===Ju.mapValue)return 1;if(s===Ju.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=fe(a[c],u[c]);if(d!==0)return d;const f=ko(o[a[c]],l[u[c]]);if(f!==0)return f}return fe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function $w(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=mi(t),r=mi(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function Io(t){return jm(t)}function jm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=mi(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,W.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=jm(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${jm(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function Fw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function zm(t){return!!t&&"integerValue"in t}function ly(t){return!!t&&"arrayValue"in t}function Uw(t){return!!t&&"nullValue"in t}function jw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pc(t){return!!t&&"mapValue"in t}function Ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function B4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ua(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){gs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(Ua(this.value))}}function jI(t){const e=[];return gs(t.fields,(n,r)=>{const i=new xt([n]);if(Pc(r)){const s=jI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new en(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,te.min(),te.min(),te.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,i){return new bt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new bt(e,2,n,te.min(),te.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,te.min(),te.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n){this.position=e,this.inclusive=n}}function zw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=ko(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function V4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{}class tt extends zI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new q4(e,n,r):n==="array-contains"?new G4(e,r):n==="in"?new Q4(e,r):n==="not-in"?new Y4(e,r):n==="array-contains-any"?new X4(e,r):new tt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new W4(e,r):new K4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ko(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(ko(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pn extends zI{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Pn(e,n)}matches(e){return BI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function BI(t){return t.op==="and"}function VI(t){return H4(t)&&BI(t)}function H4(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function Bm(t){if(t instanceof tt)return t.field.canonicalString()+t.op.toString()+Io(t.value);if(VI(t))return t.filters.map(e=>Bm(e)).join(",");{const e=t.filters.map(n=>Bm(n)).join(",");return`${t.op}(${e})`}}function HI(t,e){return t instanceof tt?function(n,r){return r instanceof tt&&n.op===r.op&&n.field.isEqual(r.field)&&Yn(n.value,r.value)}(t,e):t instanceof Pn?function(n,r){return r instanceof Pn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&HI(s,r.filters[o]),!0):!1}(t,e):void G()}function qI(t){return t instanceof tt?function(e){return`${e.field.canonicalString()} ${e.op} ${Io(e.value)}`}(t):t instanceof Pn?function(e){return e.op.toString()+" {"+e.getFilters().map(qI).join(" ,")+"}"}(t):"Filter"}class q4 extends tt{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class W4 extends tt{constructor(e,n){super(e,"in",n),this.keys=WI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class K4 extends tt{constructor(e,n){super(e,"not-in",n),this.keys=WI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class G4 extends tt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ly(n)&&Cl(n.arrayValue,this.value)}}class Q4 extends tt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cl(this.value.arrayValue,n)}}class Y4 extends tt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cl(this.value.arrayValue,n)}}class X4 extends tt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ly(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Vw(t,e=null,n=[],r=[],i=null,s=null,o=null){return new J4(t,e,n,r,i,s,o)}function uy(t){const e=re(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Df(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),e.dt=n}return e.dt}function cy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!V4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!HI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bw(t.startAt,e.startAt)&&Bw(t.endAt,e.endAt)}function Vm(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function Z4(t,e,n,r,i,s,o,a){return new Wo(t,e,n,r,i,s,o,a)}function dy(t){return new Wo(t)}function Hw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fy(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Of(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function KI(t){return t.collectionGroup!==null}function ao(t){const e=re(t);if(e.wt===null){e.wt=[];const n=Of(e),r=fy(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new oo(n)),e.wt.push(new oo(xt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new oo(xt.keyField(),s))}}}return e.wt}function Tr(t){const e=re(t);if(!e._t)if(e.limitType==="F")e._t=Vw(e.path,e.collectionGroup,ao(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ao(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new oo(s.field,o))}const r=e.endAt?new xd(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xd(e.startAt.position,e.startAt.inclusive):null;e._t=Vw(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function Hm(t,e){e.getFirstInequalityField(),Of(t);const n=t.filters.concat([e]);return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qm(t,e,n){return new Wo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lf(t,e){return cy(Tr(t),Tr(e))&&t.limitType===e.limitType}function GI(t){return`${uy(Tr(t))}|lt:${t.limitType}`}function Wm(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>qI(r)).join(", ")}]`),Df(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),`Target(${n})`}(Tr(t))}; limitType=${t.limitType})`}function Mf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):W.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ao(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=zw(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ao(n),r)||n.endAt&&!function(i,s,o){const a=zw(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ao(n),r))}(t,e)}function e$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QI(t){return(e,n)=>{let r=!1;for(const i of ao(t)){const s=t$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function t$(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ko(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return FI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$=new Fe(W.comparator);function Sr(){return n$}const YI=new Fe(W.comparator);function Ta(...t){let e=YI;for(const n of t)e=e.insert(n.key,n);return e}function XI(t){let e=YI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $i(){return ja()}function JI(){return ja()}function ja(){return new Ko(t=>t.toString(),(t,e)=>t.isEqual(e))}const r$=new Fe(W.comparator),i$=new At(W.comparator);function oe(...t){let e=i$;for(const n of t)e=e.add(n);return e}const s$=new At(fe);function o$(){return s$}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bd(e)?"-0":e}}function eb(t){return{integerValue:""+t}}function a$(t,e){return U4(e)?eb(e):ZI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this._=void 0}}function l$(t,e,n){return t instanceof Cd?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&oy(i)&&(i=ay(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof bo?nb(t,e):t instanceof xo?rb(t,e):function(r,i){const s=tb(r,i),o=qw(s)+qw(r.gt);return zm(s)&&zm(r.gt)?eb(o):ZI(r.serializer,o)}(t,e)}function u$(t,e,n){return t instanceof bo?nb(t,e):t instanceof xo?rb(t,e):n}function tb(t,e){return t instanceof Rd?zm(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Cd extends $f{}class bo extends $f{constructor(e){super(),this.elements=e}}function nb(t,e){const n=ib(e);for(const r of t.elements)n.some(i=>Yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xo extends $f{constructor(e){super(),this.elements=e}}function rb(t,e){let n=ib(e);for(const r of t.elements)n=n.filter(i=>!Yn(i,r));return{arrayValue:{values:n}}}class Rd extends $f{constructor(e,n){super(),this.serializer=e,this.gt=n}}function qw(t){return Ze(t.integerValue||t.doubleValue)}function ib(t){return ly(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n){this.field=e,this.transform=n}}function c$(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof bo&&r instanceof bo||n instanceof xo&&r instanceof xo?So(n.elements,r.elements,Yn):n instanceof Rd&&r instanceof Rd?Yn(n.gt,r.gt):n instanceof Cd&&r instanceof Cd}(t.transform,e.transform)}class d${constructor(e,n){this.version=e,this.transformResults=n}}class Gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gn}static exists(e){return new Gn(void 0,e)}static updateTime(e){return new Gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ff{}function ob(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lb(t.key,Gn.none()):new au(t.key,t.data,Gn.none());{const n=t.data,r=Ht.empty();let i=new At(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ii(t.key,r,new en(i.toArray()),Gn.none())}}function f$(t,e,n){t instanceof au?function(r,i,s){const o=r.value.clone(),a=Kw(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ii?function(r,i,s){if(!Dc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Kw(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(ab(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function za(t,e,n,r){return t instanceof au?function(i,s,o,a){if(!Dc(i.precondition,s))return o;const l=i.value.clone(),u=Gw(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ii?function(i,s,o,a){if(!Dc(i.precondition,s))return o;const l=Gw(i.fieldTransforms,a,s),u=s.data;return u.setAll(ab(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Dc(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function h$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=tb(r.transform,i||null);s!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,s))}return n||null}function Ww(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&So(n,r,(i,s)=>c$(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class au extends Ff{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ii extends Ff{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ab(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Kw(t,e,n){const r=new Map;Ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,u$(o,a,n[i]))}return r}function Gw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,l$(s,o,e))}return r}class lb extends Ff{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p$ extends Ff{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&f$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=za(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=za(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ob(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&So(this.mutations,e.mutations,(n,r)=>Ww(n,r))&&So(this.baseMutations,e.baseMutations,(n,r)=>Ww(n,r))}}class hy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ce(e.mutations.length===r.length);let i=r$;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hy(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,le;function y$(t){switch(t){default:return G();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function ub(t){if(t===void 0)return _r("GRPC error has no .code"),C.UNKNOWN;switch(t){case Xe.OK:return C.OK;case Xe.CANCELLED:return C.CANCELLED;case Xe.UNKNOWN:return C.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return C.INTERNAL;case Xe.UNAVAILABLE:return C.UNAVAILABLE;case Xe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Xe.NOT_FOUND:return C.NOT_FOUND;case Xe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Xe.ABORTED:return C.ABORTED;case Xe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Xe.DATA_LOSS:return C.DATA_LOSS;default:return G()}}(le=Xe||(Xe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Zu}static getOrCreateInstance(){return Zu===null&&(Zu=new py),Zu}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Zu=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w$(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E$=new so([4294967295,4294967295],0);function Qw(t){const e=w$().encode(t),n=new k4;return n.update(e),new Uint8Array(n.digest())}function Yw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new so([n,r],0),new so([i,s],0)]}class my{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Sa(`Invalid padding: ${n}`);if(r<0)throw new Sa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=so.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(so.fromNumber(r)));return i.compare(E$)===1&&(i=new so([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Qw(e),[r,i]=Yw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new my(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Qw(e),[r,i]=Yw(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,lu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Uf(te.min(),i,new Fe(fe),Sr(),oe())}}class lu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lu(r,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class cb{constructor(e,n){this.targetId=e,this.Vt=n}}class db{constructor(e,n,r=Ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xw{constructor(){this.St=0,this.Dt=Zw(),this.Ct=Ot.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=oe(),n=oe(),r=oe();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new lu(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=Zw()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class _${constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Sr(),this.zt=Jw(),this.Wt=new Fe(fe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(Vm(o))if(i===0){const a=new W(o.path);this.Yt(r,a,bt.newNoDocument(a,te.min()))}else Ce(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=py.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,d){var f,h,g,y,E,m;const p={localCacheCount:c,existenceFilterCount:d.count},w=d.unchangedNames;return w&&(p.bloomFilter={applied:u===0,hashCount:(f=w==null?void 0:w.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(y=(g=(h=w==null?void 0:w.bits)===null||h===void 0?void 0:h.bitmap)===null||g===void 0?void 0:g.length)!==null&&y!==void 0?y:0,padding:(m=(E=w==null?void 0:w.bits)===null||E===void 0?void 0:E.padding)!==null&&m!==void 0?m:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ss(s).toUint8Array()}catch(c){if(c instanceof UI)return To("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new my(l,o,a)}catch(c){return To(c instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&Vm(a.target)){const l=new W(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,bt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=oe();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new Uf(e,n,this.Wt,this.jt,r);return this.jt=Sr(),this.zt=Jw(),this.Wt=new Fe(fe),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Xw,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new At(fe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Xw),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Jw(){return new Fe(W.comparator)}function Zw(){return new Fe(W.comparator)}const T$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),S$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),k$=(()=>({and:"AND",or:"OR"}))();class I${constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Km(t,e){return t.useProto3Json||Df(e)?e:{value:e}}function Nd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b$(t,e){return Nd(t,e.toTimestamp())}function Qn(t){return Ce(!!t),te.fromTimestamp(function(e){const n=mi(e);return new Qe(n.seconds,n.nanos)}(t))}function gy(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function hb(t){const e=Ie.fromString(t);return Ce(vb(e)),e}function Gm(t,e){return gy(t.databaseId,e.path)}function ip(t,e){const n=hb(e);if(n.get(1)!==t.databaseId.projectId)throw new $(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(pb(n))}function Qm(t,e){return gy(t.databaseId,e)}function x$(t){const e=hb(t);return e.length===4?Ie.emptyPath():pb(e)}function Ym(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function pb(t){return Ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function eE(t,e,n){return{name:Gm(t,e),fields:n.value.mapValue.fields}}function C$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Ce(u===void 0||typeof u=="string"),Ot.fromBase64String(u||"")):(Ce(u===void 0||u instanceof Uint8Array),Ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:ub(l.code);return new $(u,l.message||"")}(o);n=new db(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ip(t,r.document.name),s=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):te.min(),a=new Ht({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Oc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ip(t,r.document),s=r.readTime?Qn(r.readTime):te.min(),o=bt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ip(t,r.document),s=r.removedTargetIds||[];n=new Oc([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new v$(i,s),a=r.targetId;n=new cb(a,o)}}return n}function R$(t,e){let n;if(e instanceof au)n={update:eE(t,e.key,e.value)};else if(e instanceof lb)n={delete:Gm(t,e.key)};else if(e instanceof Ii)n={update:eE(t,e.key,e.data),updateMask:F$(e.fieldMask)};else{if(!(e instanceof p$))return G();n={verify:Gm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Cd)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof bo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof xo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Rd)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:b$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function N$(t,e){return t&&t.length>0?(Ce(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Qn(r.updateTime):Qn(i);return s.isEqual(te.min())&&(s=Qn(i)),new d$(s,r.transformResults||[])}(n,e))):[]}function A$(t,e){return{documents:[Qm(t,e.path)]}}function P$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return gb(Pn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:bs(c.field),direction:L$(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Km(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function D$(t){let e=x$(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ce(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=mb(c);return d instanceof Pn&&VI(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new oo(xs(d.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Df(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,f=c.values||[];return new xd(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,f=c.values||[];return new xd(f,d)}(n.endAt)),Z4(e,i,o,s,a,"F",l,u)}function O$(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mb(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xs(e.unaryFilter.field);return tt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=xs(e.unaryFilter.field);return tt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xs(e.unaryFilter.field);return tt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xs(e.unaryFilter.field);return tt.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return tt.create(xs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pn.create(e.compositeFilter.filters.map(n=>mb(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function L$(t){return T$[t]}function M$(t){return S$[t]}function $$(t){return k$[t]}function bs(t){return{fieldPath:t.canonicalString()}}function xs(t){return xt.fromServerFormat(t.fieldPath)}function gb(t){return t instanceof tt?function(e){if(e.op==="=="){if(jw(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NAN"}};if(Uw(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jw(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NAN"}};if(Uw(e.value))return{unaryFilter:{field:bs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bs(e.field),op:M$(e.op),value:e.value}}}(t):t instanceof Pn?function(e){const n=e.getFilters().map(r=>gb(r));return n.length===1?n[0]:{compositeFilter:{op:$$(e.op),filters:n}}}(t):G()}function F$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,n,r,i,s=te.min(),o=te.min(),a=Ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U${constructor(e){this.fe=e}}function j$(t){const e=D$({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z${constructor(){this.rn=new B$}addToCollectionParentIndex(e,n){return this.rn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(pi.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(pi.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class B${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new At(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new At(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Co(0)}static Mn(){return new Co(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V${constructor(){this.changes=new Ko(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&za(r.mutation,i,en.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=$i();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ta();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Sr();const o=ja(),a=ja();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ii)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),za(c.mutation,u,c.mutation.getFieldMask(),Qe.now())):o.set(u.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new H$(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ja();let i=new Fe((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||en.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||oe()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=JI();c.forEach(f=>{if(!s.has(f)){const h=ob(n.get(f),r.get(f));h!==null&&d.set(f,h),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve($i());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,oe())).next(c=>({batchId:a,changes:XI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ta();return this.indexManager.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const l=function(u,c){return new Wo(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,bt.newInvalidDocument(u)))});let o=Ta();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&za(u.mutation,l,en.empty(),Qe.now()),Mf(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W${constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return P.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:Qn(r.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:j$(r.bundledQuery),readTime:Qn(r.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(){this.overlays=new Fe(W.comparator),this.ls=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$i();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=$i(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Fe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=$i(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=$i(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new g$(n,r));let s=this.ls.get(n);s===void 0&&(s=oe(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.fs=new At(at.ds),this.ws=new At(at._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new at(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new at(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new W(new Ie([])),r=new at(n,e),i=new at(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new W(new Ie([])),r=new at(n,e),i=new at(n,e+1);let s=oe();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new at(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return W.comparator(e.key,n.key)||fe(e.As,n.As)}static _s(e,n){return fe(e.As,n.As)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new At(at.ds)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new m$(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new at(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),i=new at(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new At(fe);return n.forEach(i=>{const s=new at(i,0),o=new at(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),P.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new at(new W(s),0);let a=new At(fe);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),P.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ce(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return P.forEach(n.mutations,i=>{const s=new at(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new at(n,0),i=this.Rs.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q${constructor(e){this.Ds=e,this.docs=new Fe(W.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Sr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():bt.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Sr();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||M4(L4(c),r)<=0||(i.has(c.key)||Mf(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Cs(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Y$(this)}getSize(e){return P.resolve(this.size)}}class Y$ extends V${constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X${constructor(e){this.persistence=e,this.xs=new Ko(n=>uy(n),cy),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Ns=0,this.ks=new vy,this.targetCount=0,this.Ms=Co.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),P.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Co(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Fn(n),P.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(e,n){this.$s={},this.overlays={},this.Os=new sy(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new X$(this),this.indexManager=new z$,this.remoteDocumentCache=function(r){return new Q$(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new U$(n),this.qs=new W$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new K$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new G$(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new Z$(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return P.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class Z$ extends F4{constructor(e){super(),this.currentSequenceNumber=e}}class yy{constructor(e){this.persistence=e,this.Qs=new vy,this.js=null}static zs(e){return new yy(e)}get Ws(){if(this.js)return this.js;throw G()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),P.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Ws,r=>{const i=W.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return P.or([()=>P.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wy(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Hw(n))return P.resolve(null);let r=Tr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=qm(n,null,"F"),r=Tr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=oe(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,qm(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Hw(n)||i.isEqual(te.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Ow()<=de.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wm(n)),this.Wi(e,o,n,O4(i,-1)))})}ji(e,n){let r=new At(QI(e));return n.forEach((i,s)=>{Mf(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Ow()<=de.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Wm(n)),this.Ui.getDocumentsMatchingQuery(e,n,pi.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Fe(fe),this.Yi=new Ko(s=>uy(s),cy),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new q$(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function nF(t,e,n,r){return new tF(t,e,n,r)}async function yb(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=oe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function rF(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let f=P.resolve();return d.forEach(h=>{f=f.next(()=>u.getEntry(a,h)).next(g=>{const y=l.docVersions.get(h);Ce(y!==null),g.version.compareTo(y)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=oe();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function wb(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function iF(t,e){const n=re(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,d)));let h=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?h=h.withResumeToken(Ot.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):c.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(c.resumeToken,r)),i=i.insert(d,h),function(g,y,E){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,h,c)&&a.push(n.Bs.updateTargetData(s,h))});let l=Sr(),u=oe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(sF(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(te.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(d=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function sF(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Sr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function oF(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aF(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new Qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function Xm(t,e,n){const r=re(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ou(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function tE(t,e,n){const r=re(t);let i=te.min(),s=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=re(a),d=c.Yi.get(u);return d!==void 0?P.resolve(c.Ji.get(d)):c.Bs.getTargetData(l,u)}(r,o,Tr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:oe())).next(a=>(lF(r,e$(e),a),{documents:a,ir:s})))}function lF(t,e,n){let r=t.Xi.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class nE{constructor(){this.activeTargetIds=o$()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uF{constructor(){this.Hr=new nE,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new nE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cF{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec=null;function sp(){return ec===null?ec=268435456+Math.round(2147483648*Math.random()):ec++,"0x"+ec.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dF={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class hF extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=sp(),a=this.To(e,n);B("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(B("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw To("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+qo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=dF[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=sp();return new Promise((o,a)=>{const l=new S4;l.setWithCredentials(!0),l.listenOnce(E4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case rp.NO_ERROR:const c=l.getResponseJson();B(St,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case rp.TIMEOUT:B(St,`RPC '${e}' ${s} timed out`),a(new $(C.DEADLINE_EXCEEDED,"Request time out"));break;case rp.HTTP_ERROR:const d=l.getStatus();if(B(St,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const h=f==null?void 0:f.error;if(h&&h.status&&h.message){const g=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(E)>=0?E:C.UNKNOWN}(h.status);a(new $(g,h.message))}else a(new $(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new $(C.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{B(St,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);B(St,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=sp(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=y4(),a=w4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new T4({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");B(St,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,h=!1;const g=new fF({ro:E=>{h?B(St,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(f||(B(St,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),B(St,`RPC '${e}' stream ${i} sending:`,E),d.send(E))},oo:()=>d.close()}),y=(E,m,p)=>{E.listen(m,w=>{try{p(w)}catch(v){setTimeout(()=>{throw v},0)}})};return y(d,Yu.EventType.OPEN,()=>{h||B(St,`RPC '${e}' stream ${i} transport opened.`)}),y(d,Yu.EventType.CLOSE,()=>{h||(h=!0,B(St,`RPC '${e}' stream ${i} transport closed`),g.wo())}),y(d,Yu.EventType.ERROR,E=>{h||(h=!0,To(St,`RPC '${e}' stream ${i} transport errored:`,E),g.wo(new $(C.UNAVAILABLE,"The operation could not be completed")))}),y(d,Yu.EventType.MESSAGE,E=>{var m;if(!h){const p=E.data[0];Ce(!!p);const w=p,v=w.error||((m=w[0])===null||m===void 0?void 0:m.error);if(v){B(St,`RPC '${e}' stream ${i} received error:`,v);const S=v.status;let x=function(R){const F=Xe[R];if(F!==void 0)return ub(F)}(S),b=v.message;x===void 0&&(x=C.INTERNAL,b="Unknown error status: "+S+" with message "+v.message),h=!0,g.wo(new $(x,b)),d.close()}else B(St,`RPC '${e}' stream ${i} received:`,p),g._o(p)}}),y(a,_4.STAT_EVENT,E=>{E.stat===Pw.PROXY?B(St,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Pw.NOPROXY&&B(St,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function op(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t){return new I$(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Eb(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new $(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pF extends _b{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=C$(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?Qn(s.readTime):te.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=Ym(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=Vm(a)?{documents:A$(i,a)}:{query:P$(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=fb(i,s.resumeToken);const l=Km(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(te.min())>0){o.readTime=Nd(i,s.snapshotVersion.toTimestamp());const l=Km(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=O$(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=Ym(this.serializer),n.removeTarget=e,this.Wo(n)}}class mF extends _b{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=N$(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.cu(r,n)}return Ce(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Ym(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>R$(this.serializer,r))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new $(C.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(C.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(C.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class vF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(_r(n),this.mu=!1):B("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{vs(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=re(a);l.vu.add(4),await uu(l),l.bu.set("Unknown"),l.vu.delete(4),await zf(l)}(this))})}),this.bu=new vF(r,i)}}async function zf(t){if(vs(t))for(const e of t.Ru)await e(!0)}async function uu(t){for(const e of t.Ru)await e(!1)}function Tb(t,e){const n=re(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Ty(n)?_y(n):Go(n).Ko()&&Ey(n,e))}function Sb(t,e){const n=re(t),r=Go(n);n.Au.delete(e),r.Ko()&&kb(n,e),n.Au.size===0&&(r.Ko()?r.jo():vs(n)&&n.bu.set("Unknown"))}function Ey(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Go(t).su(e)}function kb(t,e){t.Vu.qt(e),Go(t).iu(e)}function _y(t){t.Vu=new _$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Go(t).start(),t.bu.gu()}function Ty(t){return vs(t)&&!Go(t).Uo()&&t.Au.size>0}function vs(t){return re(t).vu.size===0}function Ib(t){t.Vu=void 0}async function wF(t){t.Au.forEach((e,n)=>{Ey(t,e)})}async function EF(t,e){Ib(t),Ty(t)?(t.bu.Iu(e),_y(t)):t.bu.set("Unknown")}async function _F(t,e,n){if(t.bu.set("Online"),e instanceof db&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ad(t,r)}else if(e instanceof Oc?t.Vu.Ht(e):e instanceof cb?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(te.min()))try{const r=await wb(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(Ot.EMPTY_BYTE_STRING,u.snapshotVersion)),kb(i,a);const c=new Qr(u.target,a,l,u.sequenceNumber);Ey(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Ad(t,r)}}async function Ad(t,e,n){if(!ou(e))throw e;t.vu.add(1),await uu(t),t.bu.set("Offline"),n||(n=()=>wb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await zf(t)})}function bb(t,e){return e().catch(n=>Ad(t,n,e))}async function Bf(t){const e=re(t),n=gi(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;TF(e);)try{const i=await oF(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,SF(e,i)}catch(i){await Ad(e,i)}xb(e)&&Cb(e)}function TF(t){return vs(t)&&t.Eu.length<10}function SF(t,e){t.Eu.push(e);const n=gi(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function xb(t){return vs(t)&&!gi(t).Uo()&&t.Eu.length>0}function Cb(t){gi(t).start()}async function kF(t){gi(t).hu()}async function IF(t){const e=gi(t);for(const n of t.Eu)e.uu(n.mutations)}async function bF(t,e,n){const r=t.Eu.shift(),i=hy.from(r,e,n);await bb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Bf(t)}async function xF(t,e){e&&gi(t).ou&&await async function(n,r){if(i=r.code,y$(i)&&i!==C.ABORTED){const s=n.Eu.shift();gi(n).Qo(),await bb(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Bf(n)}var i}(t,e),xb(t)&&Cb(t)}async function iE(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=vs(n);n.vu.add(3),await uu(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await zf(n)}async function CF(t,e){const n=re(t);e?(n.vu.delete(2),await zf(n)):e||(n.vu.add(2),await uu(n),n.bu.set("Unknown"))}function Go(t){return t.Su||(t.Su=function(e,n,r){const i=re(e);return i.fu(),new pF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:wF.bind(null,t),ao:EF.bind(null,t),nu:_F.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Ty(t)?_y(t):t.bu.set("Unknown")):(await t.Su.stop(),Ib(t))})),t.Su}function gi(t){return t.Du||(t.Du=function(e,n,r){const i=re(e);return i.fu(),new mF(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:kF.bind(null,t),ao:xF.bind(null,t),au:IF.bind(null,t),cu:bF.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Bf(t)):(await t.Du.stop(),t.Eu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Sy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ky(t,e){if(_r("AsyncQueue",`${e}: ${t}`),ou(t))return new $(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ta(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new lo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new lo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.Cu=new Fe(W.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):G():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ro{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ro(e,n,lo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RF{constructor(){this.Nu=void 0,this.listeners=[]}}class NF{constructor(){this.queries=new Ko(e=>GI(e),Lf),this.onlineState="Unknown",this.ku=new Set}}async function AF(t,e){const n=re(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new RF),i)try{s.Nu=await n.onListen(r)}catch(o){const a=ky(o,`Initialization of query '${Wm(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&Iy(n)}async function PF(t,e){const n=re(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function DF(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&Iy(n)}function OF(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Iy(t){t.ku.forEach(e=>{e.next()})}class LF{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ro(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Ro.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.key=e}}class Nb{constructor(e){this.key=e}}class MF{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=oe(),this.mutatedKeys=oe(),this.tc=QI(e),this.ec=new lo(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new sE,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),h=Mf(this.query,d)?d:null,g=!!f&&this.mutatedKeys.has(f.key),y=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let E=!1;f&&h?f.data.isEqual(h.data)?g!==y&&(r.track({type:3,doc:h}),E=!0):this.rc(f,h)||(r.track({type:2,doc:h}),E=!0,(l&&this.tc(h,l)>0||u&&this.tc(h,u)<0)&&(a=!0)):!f&&h?(r.track({type:0,doc:h}),E=!0):f&&!h&&(r.track({type:1,doc:f}),E=!0,(l||u)&&(a=!0)),E&&(h?(o=o.add(h),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(d,f){const h=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return h(d)-h(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new Ro(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new sE,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=oe(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new Nb(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new Rb(r))}),n}hc(e){this.Yu=e.ir,this.Zu=oe();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Ro.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class $F{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FF{constructor(e){this.key=e,this.fc=!1}}class UF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ko(a=>GI(a),Lf),this._c=new Map,this.mc=new Set,this.gc=new Fe(W.comparator),this.yc=new Map,this.Ic=new vy,this.Tc={},this.Ec=new Map,this.Ac=Co.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function jF(t,e){const n=YF(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await aF(n.localStore,Tr(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await zF(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Tb(n.remoteStore,o)}return i}async function zF(t,e,n,r,i){t.Rc=(d,f,h)=>async function(g,y,E,m){let p=y.view.sc(E);p.zi&&(p=await tE(g.localStore,y.query,!1).then(({documents:S})=>y.view.sc(S,p)));const w=m&&m.targetChanges.get(y.targetId),v=y.view.applyChanges(p,g.isPrimaryClient,w);return aE(g,y.targetId,v.cc),v.snapshot}(t,d,f,h);const s=await tE(t.localStore,e,!0),o=new MF(e,s.ir),a=o.sc(s.documents),l=lu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);aE(t,n,u.cc);const c=new $F(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function BF(t,e){const n=re(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!Lf(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Sb(n.remoteStore,r.targetId),Jm(n,r.targetId)}).catch(su)):(Jm(n,r.targetId),await Xm(n.localStore,r.targetId,!0))}async function VF(t,e,n){const r=XF(t);try{const i=await function(s,o){const a=re(s),l=Qe.now(),u=o.reduce((f,h)=>f.add(h.key),oe());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let h=Sr(),g=oe();return a.Zi.getEntries(f,u).next(y=>{h=y,h.forEach((E,m)=>{m.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,h)).next(y=>{c=y;const E=[];for(const m of o){const p=h$(m,c.get(m.key).overlayedDocument);p!=null&&E.push(new Ii(m.key,p,jI(p.value.mapValue),Gn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,E,o)}).next(y=>{d=y;const E=y.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(f,y.batchId,E)})}).then(()=>({batchId:d.batchId,changes:XI(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new Fe(fe)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await cu(r,i.changes),await Bf(r.remoteStore)}catch(i){const s=ky(i,"Failed to persist write");n.reject(s)}}async function Ab(t,e){const n=re(t);try{const r=await iF(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Ce(o.fc):i.removedDocuments.size>0&&(Ce(o.fc),o.fc=!1))}),await cu(n,r,e)}catch(r){await su(r)}}function oE(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=re(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.Mu(o)&&(l=!0)}),l&&Iy(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function HF(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Fe(W.comparator);o=o.insert(s,bt.newNoDocument(s,te.min()));const a=oe().add(s),l=new Uf(te.min(),new Map,new Fe(fe),o,a);await Ab(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),by(r)}else await Xm(r.localStore,e,!1).then(()=>Jm(r,e,n)).catch(su)}async function qF(t,e){const n=re(t),r=e.batch.batchId;try{const i=await rF(n.localStore,e);Db(n,r,null),Pb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await cu(n,i)}catch(i){await su(i)}}async function WF(t,e,n){const r=re(t);try{const i=await function(s,o){const a=re(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Ce(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Db(r,e,n),Pb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await cu(r,i)}catch(i){await su(i)}}function Pb(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function Db(t,e,n){const r=re(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function Jm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||Ob(t,r)})}function Ob(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Sb(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),by(t))}function aE(t,e,n){for(const r of n)r instanceof Rb?(t.Ic.addReference(r.key,e),KF(t,r)):r instanceof Nb?(B("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Ob(t,r.key)):G()}function KF(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(B("SyncEngine","New document in limbo: "+n),t.mc.add(r),by(t))}function by(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new W(Ie.fromString(e)),r=t.Ac.next();t.yc.set(r,new FF(n)),t.gc=t.gc.insert(n,r),Tb(t.remoteStore,new Qr(Tr(dy(n.path)),r,"TargetPurposeLimboResolution",sy.ct))}}async function cu(t,e,n){const r=re(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=wy.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=re(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>P.forEach(l,d=>P.forEach(d.Fi,f=>u.persistence.referenceDelegate.addReference(c,d.targetId,f)).next(()=>P.forEach(d.Bi,f=>u.persistence.referenceDelegate.removeReference(c,d.targetId,f)))))}catch(c){if(!ou(c))throw c;B("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const f=u.Ji.get(d),h=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(h);u.Ji=u.Ji.insert(d,g)}}}(r.localStore,s))}async function GF(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await yb(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new $(C.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await cu(n,r.er)}}function QF(t,e){const n=re(t),r=n.yc.get(e);if(r&&r.fc)return oe().add(r.key);{let i=oe();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function YF(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ab.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HF.bind(null,e),e.dc.nu=DF.bind(null,e.eventManager),e.dc.Pc=OF.bind(null,e.eventManager),e}function XF(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WF.bind(null,e),e}class lE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=jf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return nF(this.persistence,new eF,e.initialUser,this.serializer)}createPersistence(e){return new J$(yy.zs,this.serializer)}createSharedClientState(e){return new uF}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GF.bind(null,this.syncEngine),await CF(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NF}createDatastore(e){const n=jf(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new hF(i));var i;return function(s,o,a,l){return new gF(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>oE(this.syncEngine,a,0),o=rE.D()?new rE:new cF,new yF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new UF(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);B("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await uu(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e3{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=kt.UNAUTHENTICATED,this.clientId=$I.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ky(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ap(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await yb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await n3(t);B("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>iE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>iE(e.remoteStore,s)),t._onlineComponents=e}function t3(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function n3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await ap(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!t3(n))throw n;To("Error using user provided cache. Falling back to memory cache: "+n),await ap(t,new lE)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await ap(t,new lE);return t._offlineComponents}async function Lb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await uE(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await uE(t,new JF))),t._onlineComponents}function r3(t){return Lb(t).then(e=>e.syncEngine)}async function cE(t){const e=await Lb(t),n=e.eventManager;return n.onListen=jF.bind(null,e.syncEngine),n.onUnlisten=BF.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t,e,n){if(!n)throw new $(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function i3(t,e,n,r){if(e===!0&&r===!0)throw new $(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fE(t){if(!W.isDocumentKey(t))throw new $(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hE(t){if(W.isDocumentKey(t))throw new $(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Wi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vf(t);throw new $(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}i3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mb((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Hf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pE(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new I4;switch(n.type){case"firstParty":return new R4(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=dE.get(e);n&&(B("ComponentProvider","Removing Datastore"),dE.delete(e),n.terminate())}(this),Promise.resolve()}}function s3(t,e,n,r={}){var i;const s=(t=Wi(t,Hf))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&To("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=kt.MOCK_USER;else{a=GS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new $(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new kt(u)}t._authCredentials=new b4(new MI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class ys{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ys(this.firestore,e,this._query)}}class ui extends ys{constructor(e,n,r){super(e,n,dy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new W(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Fb(t,e,...n){if(t=Oe(t),$b("collection","path",e),t instanceof Hf){const r=Ie.fromString(e,...n);return hE(r),new ui(t,null,r)}{if(!(t instanceof Yt||t instanceof ui))throw new $(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return hE(r),new ui(t.firestore,null,r)}}function Rl(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=$I.A()),$b("doc","path",e),t instanceof Hf){const r=Ie.fromString(e,...n);return fE(r),new Yt(t,null,new W(r))}{if(!(t instanceof Yt||t instanceof ui))throw new $(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return fE(r),new Yt(t.firestore,t instanceof ui?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o3{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Eb(this,"async_queue_retry"),this.Xc=()=>{const n=op();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=op();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=op();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new qi;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!ou(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw _r("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Sy.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&G()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}function mE(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Nl extends Hf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new o3,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jb(this),this._firestoreClient.terminate()}}function a3(t,e){const n=typeof t=="object"?t:bv(),r=typeof t=="string"?t:e||"(default)",i=pf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=qS("firestore");s&&s3(i,...s)}return i}function Ub(t){return t._firestoreClient||jb(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jb(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new z4(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Mb(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new e3(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this._byteString=e}static fromBase64String(e){try{return new No(Ot.fromBase64String(e))}catch(n){throw new $(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new No(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l3=/^__.*__$/;class u3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new au(e,this.data,n,this.fieldTransforms)}}class zb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ii(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Wf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Wf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Pd(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Bb(this.ca)&&l3.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class c3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||jf(e)}ya(e,n,r,i=!1){return new Wf({ca:e,methodName:n,ga:r,path:xt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cy(t){const e=t._freezeSettings(),n=jf(t._databaseId);return new c3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function d3(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);Ry("Data must be an object, but it was:",o,r);const a=Hb(r,o);let l,u;if(s.merge)l=new en(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=Zm(e,d,n);if(!o.contains(f))throw new $(C.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Wb(c,f)||c.push(f)}l=new en(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new u3(new Ht(a),l,u)}class Kf extends du{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kf}}function Vb(t,e,n){return new Wf({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class f3 extends du{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=Vb(this,e,!0),r=this.pa.map(s=>ws(s,n)),i=new bo(r);return new sb(e.path,i)}isEqual(e){return this===e}}class h3 extends du{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=Vb(this,e,!0),r=this.pa.map(s=>ws(s,n)),i=new xo(r);return new sb(e.path,i)}isEqual(e){return this===e}}function p3(t,e,n,r){const i=t.ya(1,e,n);Ry("Data must be an object, but it was:",i,r);const s=[],o=Ht.empty();gs(r,(l,u)=>{const c=Ny(e,l,n);u=Oe(u);const d=i.da(c);if(u instanceof Kf)s.push(c);else{const f=ws(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new en(s);return new zb(o,a,i.fieldTransforms)}function m3(t,e,n,r,i,s){const o=t.ya(1,e,n),a=[Zm(e,r,n)],l=[i];if(s.length%2!=0)throw new $(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Zm(e,s[f])),l.push(s[f+1]);const u=[],c=Ht.empty();for(let f=a.length-1;f>=0;--f)if(!Wb(u,a[f])){const h=a[f];let g=l[f];g=Oe(g);const y=o.da(h);if(g instanceof Kf)u.push(h);else{const E=ws(g,y);E!=null&&(u.push(h),c.set(h,E))}}const d=new en(u);return new zb(c,d,o.fieldTransforms)}function g3(t,e,n,r=!1){return ws(n,t.ya(r?4:3,e))}function ws(t,e){if(qb(t=Oe(t)))return Ry("Unsupported field value:",e,t),Hb(t,e);if(t instanceof du)return function(n,r){if(!Bb(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ws(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return a$(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Qe.fromDate(n);return{timestampValue:Nd(r.serializer,i)}}if(n instanceof Qe){const i=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Nd(r.serializer,i)}}if(n instanceof xy)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof No)return{bytesValue:fb(r.serializer,n._byteString)};if(n instanceof Yt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gy(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Vf(n)}`)}(t,e)}function Hb(t,e){const n={};return FI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,(r,i)=>{const s=ws(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function qb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof xy||t instanceof No||t instanceof Yt||t instanceof du)}function Ry(t,e,n){if(!qb(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Vf(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function Zm(t,e,n){if((e=Oe(e))instanceof qf)return e._internalPath;if(typeof e=="string")return Ny(t,e);throw Pd("Field path arguments must be of type string or ",t,!1,void 0,n)}const v3=new RegExp("[~\\*/\\[\\]]");function Ny(t,e,n){if(e.search(v3)>=0)throw Pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qf(...e.split("."))._internalPath}catch{throw Pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new $(C.INVALID_ARGUMENT,a+t+l)}function Wb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new y3(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ay("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class y3 extends Kb{data(){return super.data()}}function Ay(t,e){return typeof e=="string"?Ny(t,e):e instanceof qf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Py{}class Gb extends Py{}function E3(t,e,...n){let r=[];e instanceof Py&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof Oy).length,o=i.filter(a=>a instanceof Dy).length;if(s>1||s>0&&o>0)throw new $(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Dy extends Gb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dy(e,n,r)}_apply(e){const n=this._parse(e);return Qb(e._query,n),new ys(e.firestore,e.converter,Hm(e._query,n))}_parse(e){const n=Cy(e.firestore);return function(i,s,o,a,l,u,c){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new $(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){vE(c,u);const f=[];for(const h of c)f.push(gE(a,i,h));d={arrayValue:{values:f}}}else d=gE(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||vE(c,u),d=g3(o,s,c,u==="in"||u==="not-in");return tt.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Oy extends Py{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Oy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)Qb(s,a),s=Hm(s,a)}(e._query,n),new ys(e.firestore,e.converter,Hm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ly extends Gb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ly(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new $(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new $(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new oo(i,s);return function(a,l){if(fy(a)===null){const u=Of(a);u!==null&&Yb(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new ys(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Wo(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function _3(t,e="asc"){const n=e,r=Ay("orderBy",t);return Ly._create(r,n)}function gE(t,e,n){if(typeof(n=Oe(n))=="string"){if(n==="")throw new $(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KI(e)&&n.indexOf("/")!==-1)throw new $(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!W.isDocumentKey(r))throw new $(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fw(t,new W(r))}if(n instanceof Yt)return Fw(t,n._key);throw new $(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vf(n)}.`)}function vE(t,e){if(!Array.isArray(t)||t.length===0)throw new $(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Qb(t,e){if(e.isInequality()){const r=Of(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new $(C.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=fy(t);s!==null&&Yb(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Yb(t,e,n){if(!n.isEqual(e))throw new $(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class T3{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new xy(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ay(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(bl(e));default:return null}}convertTimestamp(e){const n=mi(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);Ce(vb(r));const i=new xl(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||_r(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S3(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xb extends Kb{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ay("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lc extends Xb{data(e={}){return super.data(e)}}class k3{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ka(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lc(this._firestore,this._userDataWriter,r.key,r,new ka(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Lc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ka(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Lc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ka(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:I3(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function I3(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class Jb extends T3{constructor(e){super(),this.firestore=e}convertBytes(e){return new No(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function Ba(t,e,n,...r){t=Wi(t,Yt);const i=Wi(t.firestore,Nl),s=Cy(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof qf?m3(s,"updateDoc",t._key,e,n,r):p3(s,"updateDoc",t._key,e),Zb(i,[o.toMutation(t._key,Gn.exists(!0))])}function b3(t,e){const n=Wi(t.firestore,Nl),r=Rl(t),i=S3(t.converter,e);return Zb(n,[d3(Cy(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Gn.exists(!1))]).then(()=>r)}function My(t,...e){var n,r,i;t=Oe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||mE(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(mE(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,c;if(t instanceof Yt)u=Wi(t.firestore,Nl),c=dy(t._key.path),l={next:d=>{e[o]&&e[o](x3(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Wi(t,ys);u=Wi(d.firestore,Nl),c=d._query;const f=new Jb(u);l={next:h=>{e[o]&&e[o](new k3(u,f,d,h))},error:e[o+1],complete:e[o+2]},w3(t._query)}return function(d,f,h,g){const y=new ZF(g),E=new LF(f,y,h);return d.asyncQueue.enqueueAndForget(async()=>AF(await cE(d),E)),()=>{y.Dc(),d.asyncQueue.enqueueAndForget(async()=>PF(await cE(d),E))}}(Ub(u),c,a,l)}function Zb(t,e){return function(n,r){const i=new qi;return n.asyncQueue.enqueueAndForget(async()=>VF(await r3(n),r,i)),i.promise}(Ub(t),e)}function x3(t,e,n){const r=n.docs.get(e._key),i=new Jb(t);return new Xb(t,i,e._key,r,new ka(n.hasPendingWrites,n.fromCache),e.converter)}function eg(...t){return new f3("arrayUnion",t)}function ex(...t){return new h3("arrayRemove",t)}(function(t,e=!0){(function(n){qo=n})(hs),ts(new hi("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Nl(new x4(n.getProvider("auth-internal")),new A4(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new $(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xl(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),qn(Dw,"3.13.0",t),qn(Dw,"3.13.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx="firebasestorage.googleapis.com",nx="storageBucket",C3=2*60*1e3,R3=10*60*1e3,N3=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Zn{constructor(e,n,r=0){super(lp(e),`Firebase Storage: ${n} (${lp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function lp(t){return"storage/"+t}function $y(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Re.UNKNOWN,t)}function A3(t){return new Ue(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function P3(t){return new Ue(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function D3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Re.UNAUTHENTICATED,t)}function O3(){return new Ue(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function L3(t){return new Ue(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rx(){return new Ue(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ix(){return new Ue(Re.CANCELED,"User canceled the upload/download.")}function M3(t){return new Ue(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function $3(t){return new Ue(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function F3(){return new Ue(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nx+"' property when initializing the app?")}function sx(){return new Ue(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function U3(){return new Ue(Re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function j3(){return new Ue(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function z3(t){return new Ue(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tg(t){return new Ue(Re.INVALID_ARGUMENT,t)}function ox(){return new Ue(Re.APP_DELETED,"The Firebase app was deleted.")}function B3(t){return new Ue(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Va(t,e){return new Ue(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ha(t){throw new Ue(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tn.makeFromUrl(e,n)}catch{return new tn(e,"")}if(r.path==="")return r;throw $3(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",h=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},y=n===tx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",m=new RegExp(`^https?://${y}/${i}/${E}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:h,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<w.length;v++){const S=w[v],x=S.regex.exec(e);if(x){const b=x[S.indices.bucket];let R=x[S.indices.path];R||(R=""),r=new tn(b,R),S.postModify(r);break}}if(r==null)throw M3(e);return r}}class V3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H3(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,t(h,l())},E)}function f(){s&&clearTimeout(s)}function h(E,...m){if(u){f();return}if(E){f(),c.call(null,E,...m);return}if(l()||o){f(),c.call(null,E,...m);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,d(w)}let g=!1;function y(E){g||(g=!0,f(),!u&&(i!==null?(E||(a=2),clearTimeout(i),d(0)):E||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function q3(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W3(t){return t!==void 0}function K3(t){return typeof t=="function"}function G3(t){return typeof t=="object"&&!Array.isArray(t)}function Gf(t){return typeof t=="string"||t instanceof String}function yE(t){return Fy()&&t instanceof Blob}function Fy(){return typeof Blob<"u"&&!UP()}function wE(t,e,n,r){if(r<e)throw tg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tg(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ax(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ki;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ki||(Ki={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q3{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,g)=>{this.resolve_=h,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new tc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Ki.NO_ERROR,l=s.getStatus();if(!a||lx(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Ki.ABORT;r(!1,new tc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new tc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());W3(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=$y();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ox():ix();o(l)}else{const l=rx();o(l)}};this.canceled_?n(!1,new tc(!1,null,!0)):this.backoffId_=H3(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&q3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Y3(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function X3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function J3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Z3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function e5(t,e,n,r,i,s,o=!0){const a=ax(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return J3(u,e),Y3(u,n),X3(u,s),Z3(u,r),new Q3(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t5(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function n5(...t){const e=t5();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Fy())return new Blob(t);throw new Ue(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function r5(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i5(t){if(typeof atob>"u")throw z3("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class up{constructor(e,n){this.data=e,this.contentType=n||null}}function s5(t,e){switch(t){case zn.RAW:return new up(ux(e));case zn.BASE64:case zn.BASE64URL:return new up(cx(t,e));case zn.DATA_URL:return new up(a5(e),l5(e))}throw $y()}function ux(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function o5(t){let e;try{e=decodeURIComponent(t)}catch{throw Va(zn.DATA_URL,"Malformed data URL.")}return ux(e)}function cx(t,e){switch(t){case zn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Va(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case zn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Va(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=i5(e)}catch(i){throw i.message.includes("polyfill")?i:Va(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class dx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Va(zn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=u5(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function a5(t){const e=new dx(t);return e.base64?cx(zn.BASE64,e.rest):o5(e.rest)}function l5(t){return new dx(t).contentType}function u5(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){let r=0,i="";yE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(yE(this.data_)){const r=this.data_,i=r5(r,e,n);return i===null?null:new Wr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Wr(r,!0)}}static getBlob(...e){if(Fy()){const n=e.map(r=>r instanceof Wr?r.data_:r);return new Wr(n5.apply(null,n))}else{const n=e.map(o=>Gf(o)?s5(zn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Wr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){let e;try{e=JSON.parse(t)}catch{return null}return G3(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function d5(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function hx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f5(t,e){return e}class Lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||f5}}let nc=null;function h5(t){return!Gf(t)||t.length<2?t:hx(t)}function px(){if(nc)return nc;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(s,o){return h5(o)}const n=new Lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Lt("size");return i.xform=r,t.push(i),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),nc=t,nc}function p5(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new tn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function m5(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return p5(r,t),r}function mx(t,e,n){const r=fx(e);return r===null?null:m5(t,r,n)}function g5(t,e,n,r){const i=fx(e);if(i===null||!Gf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),h=fu(f,n,r),g=ax({alt:"media",token:u});return h+g})[0]}function gx(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Qo{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){if(!t)throw $y()}function Uy(t,e){function n(r,i){const s=mx(t,i,e);return hr(s!==null),s}return n}function v5(t,e){function n(r,i){const s=mx(t,i,e);return hr(s!==null),g5(s,i,t.host,t._protocol)}return n}function hu(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=O3():i=D3():n.getStatus()===402?i=P3(t.bucket):n.getStatus()===403?i=L3(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function vx(t){const e=hu(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=A3(t.path)),s.serverResponse=i.serverResponse,s}return n}function y5(t,e,n){const r=e.fullServerUrl(),i=fu(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Qo(i,s,Uy(t,n),o);return a.errorHandler=vx(e),a}function w5(t,e,n){const r=e.fullServerUrl(),i=fu(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Qo(i,s,v5(t,n),o);return a.errorHandler=vx(e),a}function E5(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yx(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=E5(null,e)),r}function _5(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let v=0;v<2;v++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=yx(e,r,i),c=gx(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",h=Wr.getBlob(d,r,f);if(h===null)throw sx();const g={name:u.fullPath},y=fu(s,t.host,t._protocol),E="POST",m=t.maxUploadRetryTime,p=new Qo(y,E,Uy(t,n),m);return p.urlParams=g,p.headers=o,p.body=h.uploadData(),p.errorHandler=hu(e),p}class Dd{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function jy(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{hr(!1)}return hr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function T5(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=yx(e,r,i),a={name:o.fullPath},l=fu(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},d=gx(o,n),f=t.maxUploadRetryTime;function h(y){jy(y);let E;try{E=y.getResponseHeader("X-Goog-Upload-URL")}catch{hr(!1)}return hr(Gf(E)),E}const g=new Qo(l,u,h,f);return g.urlParams=a,g.headers=c,g.body=d,g.errorHandler=hu(e),g}function S5(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=jy(u,["active","final"]);let d=null;try{d=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{hr(!1)}d||hr(!1);const f=Number(d);return hr(!isNaN(f)),new Dd(f,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Qo(n,o,s,a);return l.headers=i,l.errorHandler=hu(e),l}const EE=256*1024;function k5(t,e,n,r,i,s,o,a){const l=new Dd(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw U3();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const d=l.current,f=d+c;let h="";c===0?h="finalize":u===c?h="upload, finalize":h="upload";const g={"X-Goog-Upload-Command":h,"X-Goog-Upload-Offset":`${l.current}`},y=r.slice(d,f);if(y===null)throw sx();function E(v,S){const x=jy(v,["active","final"]),b=l.current+c,R=r.size();let F;return x==="final"?F=Uy(e,s)(v,S):F=null,new Dd(b,R,x==="final",F)}const m="POST",p=e.maxUploadRetryTime,w=new Qo(n,m,E,p);return w.headers=g,w.body=y.uploadData(),w.progressCallback=a||null,w.errorHandler=hu(t),w}const Bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function cp(t){switch(t){case"running":case"pausing":case"canceling":return Bt.RUNNING;case"paused":return Bt.PAUSED;case"success":return Bt.SUCCESS;case"canceled":return Bt.CANCELED;case"error":return Bt.ERROR;default:return Bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I5{constructor(e,n,r){if(K3(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class b5{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ki.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ki.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ki.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ha("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ha("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ha("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ha("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ha("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class x5 extends b5{initXhr(){this.xhr_.responseType="text"}}function Cs(){return new x5}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C5{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=px(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(lx(i.status,[]))if(s)i=rx();else{this.sleepTime=Math.max(this.sleepTime*2,N3),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Re.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=T5(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Cs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=S5(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Cs,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=EE*this._chunkMultiplier,n=new Dd(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=k5(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Cs,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){EE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=y5(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Cs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=_5(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Cs,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ix(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=cp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new I5(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(cp(this._state)){case Bt.SUCCESS:Is(this._resolve.bind(null,this.snapshot))();break;case Bt.CANCELED:case Bt.ERROR:const n=this._reject;Is(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(cp(this._state)){case Bt.RUNNING:case Bt.PAUSED:e.next&&Is(e.next.bind(e,this.snapshot))();break;case Bt.SUCCESS:e.complete&&Is(e.complete.bind(e))();break;case Bt.CANCELED:case Bt.ERROR:e.error&&Is(e.error.bind(e,this._error))();break;default:e.error&&Is(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this._service=e,n instanceof tn?this._location=n:this._location=tn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new as(e,n)}get root(){const e=new tn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return hx(this._location.path)}get storage(){return this._service}get parent(){const e=c5(this._location.path);if(e===null)return null;const n=new tn(this._location.bucket,e);return new as(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw B3(e)}}function R5(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new C5(t,new Wr(e),n)}function N5(t){t._throwIfRoot("getDownloadURL");const e=w5(t.storage,t._location,px());return t.storage.makeRequestWithTokens(e,Cs).then(n=>{if(n===null)throw j3();return n})}function A5(t,e){const n=d5(t._location.path,e),r=new tn(t._location.bucket,n);return new as(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P5(t){return/^[A-Za-z]+:\/\//.test(t)}function D5(t,e){return new as(t,e)}function wx(t,e){if(t instanceof zy){const n=t;if(n._bucket==null)throw F3();const r=new as(n,n._bucket);return e!=null?wx(r,e):r}else return e!==void 0?A5(t,e):t}function O5(t,e){if(e&&P5(e)){if(t instanceof zy)return D5(t,e);throw tg("To use ref(service, url), the first argument must be a Storage instance.")}else return wx(t,e)}function _E(t,e){const n=e==null?void 0:e[nx];return n==null?null:tn.makeFromBucketSpec(n,t)}function L5(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:GS(i,t.app.options.projectId))}class zy{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=C3,this._maxUploadRetryTime=R3,this._requests=new Set,i!=null?this._bucket=tn.makeFromBucketSpec(i,this._host):this._bucket=_E(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tn.makeFromBucketSpec(this._url,e):this._bucket=_E(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){wE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){wE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new as(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new V3(ox());{const o=e5(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const TE="@firebase/storage",SE="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="storage";function M5(t,e,n){return t=Oe(t),R5(t,e,n)}function $5(t){return t=Oe(t),N5(t)}function F5(t,e){return t=Oe(t),O5(t,e)}function U5(t=bv(),e){t=Oe(t);const r=pf(t,Ex).getImmediate({identifier:e}),i=qS("storage");return i&&j5(r,...i),r}function j5(t,e,n,r={}){L5(t,e,n,r)}function z5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new zy(n,r,i,e,hs)}function B5(){ts(new hi(Ex,z5,"PUBLIC").setMultipleInstances(!0)),qn(TE,SE,""),qn(TE,SE,"esm2017")}B5();const V5={apiKey:"AIzaSyBt_SHac02xf14H_g8SjBn48aAKYXc5Fa8",authDomain:"blog-app-9e859.firebaseapp.com",projectId:"blog-app-9e859",storageBucket:"blog-app-9e859.appspot.com",messagingSenderId:"650085424829",appId:"1:650085424829:web:072c65527947b0f75aa1d4"},By=XS(V5),H5=U5(By),Ao=a3(By),Xn=dM(By);function q5({title:t,titleId:e,...n},r){return _.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},n),t?_.createElement("title",{id:e},t):null,_.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const W5=_.forwardRef(q5),K5=W5;function G5({title:t,titleId:e,...n},r){return _.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},n),t?_.createElement("title",{id:e},t):null,_.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"}))}const Q5=_.forwardRef(G5),Y5=Q5;function X5({title:t,titleId:e,...n},r){return _.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":e},n),t?_.createElement("title",{id:e},t):null,_.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}const J5=_.forwardRef(X5),Z5=J5,eU=()=>{const[t]=Bo(Xn),e=[{name:"Home",current:!0}];function n(...r){return r.filter(Boolean).join(" ")}return T.jsx(T.Fragment,{children:T.jsx(Vu,{as:"nav",className:"bg-gray-800",style:{position:"sticky",top:"0"},children:({open:r})=>T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:T.jsxs("div",{className:"relative flex h-16 items-center justify-between",children:[T.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:T.jsxs(Vu.Button,{className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[T.jsx("span",{className:"sr-only",children:"Open main menu"}),r?T.jsx(Z5,{className:"block h-6 w-6","aria-hidden":"true"}):T.jsx(K5,{className:"block h-6 w-6","aria-hidden":"true"})]})}),T.jsxs("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[T.jsxs("div",{className:"flex flex-shrink-0 items-center",children:[T.jsx("img",{className:"block h-8 w-auto lg:hidden",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"}),T.jsx("img",{className:"hidden h-8 w-auto lg:block",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})]}),T.jsx("div",{className:"hidden sm:ml-6 sm:block",children:T.jsx("div",{className:"flex space-x-4",children:e.map(i=>T.jsx(or,{to:"/",href:i.href,className:n(i.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":i.current?"page":void 0,children:i.name},i.name))})})]}),T.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[T.jsxs("button",{type:"button",className:"rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[T.jsx("span",{className:"sr-only",children:"View notifications"}),T.jsxs(or,{to:"/upload",children:[" ",T.jsx(Y5,{className:"h-6 w-6","aria-hidden":"true"})]})]}),T.jsxs(Hu,{as:"div",className:"relative ml-3",children:[T.jsx("div",{children:T.jsxs(Hu.Button,{className:"flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[T.jsx("span",{className:"sr-only",children:"Open user menu"}),t?T.jsx("img",{className:"h-8 w-8 rounded-full",src:"https://cdn.dribbble.com/users/3305260/screenshots/6699083/amazing_4x.png?resize=400x0",alt:""}):T.jsx(or,{to:"/register",style:{color:"white",padding:"5px 18px",borderRadius:"10px",background:"#4F46E5"},children:"Sign In"})]})}),t&&T.jsx(T.Fragment,{children:T.jsx(RP,{as:_.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:T.jsx(Hu.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:T.jsx(Hu.Item,{children:({active:i})=>T.jsx("a",{onClick:()=>{ZO(Xn)},href:"#",className:n(i?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700"),children:"Sign out"})})})})})]})]})]})}),T.jsx(Vu.Panel,{className:"sm:hidden",children:T.jsx("div",{className:"space-y-1 px-2 pb-3 pt-2",children:e.map(i=>T.jsx(or,{to:"/",children:T.jsx(Vu.Button,{as:"a",className:n(i.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block rounded-md px-3 py-2 text-base font-medium"),"aria-current":i.current?"page":void 0,children:i.name},i.name)}))})})]})})})},tU=()=>T.jsxs(T.Fragment,{children:[T.jsx(eU,{}),T.jsx(YN,{})]});function _x(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=_x(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Yr(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=_x(t))&&(r&&(r+=" "),r+=e);return r}const Ha=t=>typeof t=="number"&&!isNaN(t),ls=t=>typeof t=="string",Wt=t=>typeof t=="function",Mc=t=>ls(t)||Wt(t)?t:null,dp=t=>_.isValidElement(t)||ls(t)||Wt(t)||Ha(t);function nU(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Qf(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f}=o;const h=r?`${e}--${l}`:e,g=r?`${n}--${l}`:n,y=_.useRef(0);return _.useLayoutEffect(()=>{const E=d.current,m=h.split(" "),p=w=>{w.target===d.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",p),E.removeEventListener("animationcancel",p),y.current===0&&w.type!=="animationcancel"&&E.classList.remove(...m))};E.classList.add(...m),E.addEventListener("animationend",p),E.addEventListener("animationcancel",p)},[]),_.useEffect(()=>{const E=d.current,m=()=>{E.removeEventListener("animationend",m),i?nU(E,c,s):c()};f||(u?m():(y.current=1,E.className+=` ${g}`,E.addEventListener("animationend",m)))},[f]),q.createElement(q.Fragment,null,a)}}function kE(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const dn={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},rc=t=>{let{theme:e,type:n,...r}=t;return q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},fp={info:function(t){return q.createElement(rc,{...t},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return q.createElement(rc,{...t},q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return q.createElement(rc,{...t},q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return q.createElement(rc,{...t},q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return q.createElement("div",{className:"Toastify__spinner"})}};function rU(t){const[,e]=_.useReducer(h=>h+1,0),[n,r]=_.useState([]),i=_.useRef(null),s=_.useRef(new Map).current,o=h=>n.indexOf(h)!==-1,a=_.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:h=>s.get(h)}).current;function l(h){let{containerId:g}=h;const{limit:y}=a.props;!y||g&&a.containerId!==g||(a.count-=a.queue.length,a.queue=[])}function u(h){r(g=>h==null?[]:g.filter(y=>y!==h))}function c(){const{toastContent:h,toastProps:g,staleId:y}=a.queue.shift();f(h,g,y)}function d(h,g){let{delay:y,staleId:E,...m}=g;if(!dp(h)||function(Q){return!i.current||a.props.enableMultiContainer&&Q.containerId!==a.props.containerId||s.has(Q.toastId)&&Q.updateId==null}(m))return;const{toastId:p,updateId:w,data:v}=m,{props:S}=a,x=()=>u(p),b=w==null;b&&a.count++;const R={...S,style:S.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(m).filter(Q=>{let[je,ze]=Q;return ze!=null})),toastId:p,updateId:w,data:v,closeToast:x,isIn:!1,className:Mc(m.className||S.toastClassName),bodyClassName:Mc(m.bodyClassName||S.bodyClassName),progressClassName:Mc(m.progressClassName||S.progressClassName),autoClose:!m.isLoading&&(F=m.autoClose,V=S.autoClose,F===!1||Ha(F)&&F>0?F:V),deleteToast(){const Q=kE(s.get(p),"removed");s.delete(p),dn.emit(4,Q);const je=a.queue.length;if(a.count=p==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),je>0){const ze=p==null?a.props.limit:1;if(je===1||ze===1)a.displayedToast++,c();else{const Be=ze>je?je:ze;a.displayedToast=Be;for(let ye=0;ye<Be;ye++)c()}}else e()}};var F,V;R.iconOut=function(Q){let{theme:je,type:ze,isLoading:Be,icon:ye}=Q,Ve=null;const D={theme:je,type:ze};return ye===!1||(Wt(ye)?Ve=ye(D):_.isValidElement(ye)?Ve=_.cloneElement(ye,D):ls(ye)||Ha(ye)?Ve=ye:Be?Ve=fp.spinner():(z=>z in fp)(ze)&&(Ve=fp[ze](D))),Ve}(R),Wt(m.onOpen)&&(R.onOpen=m.onOpen),Wt(m.onClose)&&(R.onClose=m.onClose),R.closeButton=S.closeButton,m.closeButton===!1||dp(m.closeButton)?R.closeButton=m.closeButton:m.closeButton===!0&&(R.closeButton=!dp(S.closeButton)||S.closeButton);let he=h;_.isValidElement(h)&&!ls(h.type)?he=_.cloneElement(h,{closeToast:x,toastProps:R,data:v}):Wt(h)&&(he=h({closeToast:x,toastProps:R,data:v})),S.limit&&S.limit>0&&a.count>S.limit&&b?a.queue.push({toastContent:he,toastProps:R,staleId:E}):Ha(y)?setTimeout(()=>{f(he,R,E)},y):f(he,R,E)}function f(h,g,y){const{toastId:E}=g;y&&s.delete(y);const m={content:h,props:g};s.set(E,m),r(p=>[...p,E].filter(w=>w!==y)),dn.emit(4,kE(m,m.props.updateId==null?"added":"updated"))}return _.useEffect(()=>(a.containerId=t.containerId,dn.cancelEmit(3).on(0,d).on(1,h=>i.current&&u(h)).on(5,l).emit(2,a),()=>{s.clear(),dn.emit(3,a)}),[]),_.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(h){const g=new Map,y=Array.from(s.values());return t.newestOnTop&&y.reverse(),y.forEach(E=>{const{position:m}=E.props;g.has(m)||g.set(m,[]),g.get(m).push(E)}),Array.from(g,E=>h(E[0],E[1]))},containerRef:i,isToastActive:o}}function IE(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function bE(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function iU(t){const[e,n]=_.useState(!1),[r,i]=_.useState(!1),s=_.useRef(null),o=_.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=_.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:d,closeOnClick:f}=t;function h(v){if(t.draggable){v.nativeEvent.type==="touchstart"&&v.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",m),document.addEventListener("mouseup",p),document.addEventListener("touchmove",m),document.addEventListener("touchend",p);const S=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=S.getBoundingClientRect(),S.style.transition="",o.x=IE(v.nativeEvent),o.y=bE(v.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=S.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=S.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function g(v){if(o.boundingRect){const{top:S,bottom:x,left:b,right:R}=o.boundingRect;v.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=b&&o.x<=R&&o.y>=S&&o.y<=x?E():y()}}function y(){n(!0)}function E(){n(!1)}function m(v){const S=s.current;o.canDrag&&S&&(o.didMove=!0,e&&E(),o.x=IE(v),o.y=bE(v),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),S.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,S.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function p(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",m),document.removeEventListener("touchend",p);const v=s.current;if(o.canDrag&&o.didMove&&v){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();v.style.transition="transform 0.2s, opacity 0.2s",v.style.transform=`translate${t.draggableDirection}(0)`,v.style.opacity="1"}}_.useEffect(()=>{a.current=t}),_.useEffect(()=>(s.current&&s.current.addEventListener("d",y,{once:!0}),Wt(t.onOpen)&&t.onOpen(_.isValidElement(t.children)&&t.children.props),()=>{const v=a.current;Wt(v.onClose)&&v.onClose(_.isValidElement(v.children)&&v.children.props)}),[]),_.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",y),window.addEventListener("blur",E)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",E))}),[t.pauseOnFocusLoss]);const w={onMouseDown:h,onTouchStart:h,onMouseUp:g,onTouchEnd:g};return l&&u&&(w.onMouseEnter=E,w.onMouseLeave=y),f&&(w.onClick=v=>{d&&d(v),o.canCloseOnClick&&c()}),{playToast:y,pauseToast:E,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:w}}function Tx(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function sU(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:f}=t;const h=s||l&&u===0,g={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:h?0:1};l&&(g.transform=`scaleX(${u})`);const y=Yr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),E=Wt(o)?o({rtl:c,type:i,defaultClassName:y}):Yr(y,o);return q.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:E,style:g,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}})}const oU=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=iU(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:d,transition:f,position:h,className:g,style:y,bodyClassName:E,bodyStyle:m,progressClassName:p,progressStyle:w,updateId:v,role:S,progress:x,rtl:b,toastId:R,deleteToast:F,isIn:V,isLoading:he,iconOut:Q,closeOnClick:je,theme:ze}=t,Be=Yr("Toastify__toast",`Toastify__toast-theme--${ze}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":b},{"Toastify__toast--close-on-click":je}),ye=Wt(g)?g({rtl:b,position:h,type:u,defaultClassName:Be}):Yr(Be,g),Ve=!!x||!a,D={closeToast:d,type:u,theme:ze};let z=null;return s===!1||(z=Wt(s)?s(D):_.isValidElement(s)?_.cloneElement(s,D):Tx(D)),q.createElement(f,{isIn:V,done:F,position:h,preventExitTransition:n,nodeRef:r},q.createElement("div",{id:R,onClick:l,className:ye,...i,style:y,ref:r},q.createElement("div",{...V&&{role:S},className:Wt(E)?E({type:u}):Yr("Toastify__toast-body",E),style:m},Q!=null&&q.createElement("div",{className:Yr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!he})},Q),q.createElement("div",null,o)),z,q.createElement(sU,{...v&&!Ve?{key:`pb-${v}`}:{},rtl:b,theme:ze,delay:a,isRunning:e,isIn:V,closeToast:d,hide:c,type:u,style:w,className:p,controlledProgress:Ve,progress:x||0})))},Yf=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},aU=Qf(Yf("bounce",!0));Qf(Yf("slide",!0));Qf(Yf("zoom"));Qf(Yf("flip"));const Po=_.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=rU(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const d=Yr("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return Wt(s)?s({position:c,rtl:a,defaultClassName:d}):Yr(d,Mc(s))}return _.useEffect(()=>{e&&(e.current=r.current)},[]),q.createElement("div",{ref:r,className:"Toastify",id:l},n((c,d)=>{const f=d.length?{...o}:{...o,pointerEvents:"none"};return q.createElement("div",{className:u(c),style:f,key:`container-${c}`},d.map((h,g)=>{let{content:y,props:E}=h;return q.createElement(oU,{...E,isIn:i(E.toastId),style:{...E.style,"--nth":g+1,"--len":d.length},key:`toast-${E.key}`},y)}))}))});Po.displayName="ToastContainer",Po.defaultProps={position:"top-right",transition:aU,autoClose:5e3,closeButton:Tx,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let hp,Ni=new Map,Ia=[],lU=1;function Sx(){return""+lU++}function uU(t){return t&&(ls(t.toastId)||Ha(t.toastId))?t.toastId:Sx()}function qa(t,e){return Ni.size>0?dn.emit(0,t,e):Ia.push({content:t,options:e}),e.toastId}function Od(t,e){return{...e,type:e&&e.type||t,toastId:uU(e)}}function ic(t){return(e,n)=>qa(e,Od(t,n))}function me(t,e){return qa(t,Od("default",e))}me.loading=(t,e)=>qa(t,Od("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),me.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=ls(i)?me.loading(i,n):me.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null)return void me.dismiss(r);const h={type:c,...a,...n,data:f},g=ls(d)?{render:d}:d;return r?me.update(r,{...h,...g}):me(g.render,{...h,...g}),f},u=Wt(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},me.success=ic("success"),me.info=ic("info"),me.error=ic("error"),me.warning=ic("warning"),me.warn=me.warning,me.dark=(t,e)=>qa(t,Od("default",{theme:"dark",...e})),me.dismiss=t=>{Ni.size>0?dn.emit(1,t):Ia=Ia.filter(e=>t!=null&&e.options.toastId!==t)},me.clearWaitingQueue=function(t){return t===void 0&&(t={}),dn.emit(5,t)},me.isActive=t=>{let e=!1;return Ni.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},me.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=Ni.get(s||hp);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:Sx()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,qa(o,s)}},0)},me.done=t=>{me.update(t,{progress:1})},me.onChange=t=>(dn.on(4,t),()=>{dn.off(4,t)}),me.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},me.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},dn.on(2,t=>{hp=t.containerId||t,Ni.set(hp,t),Ia.forEach(e=>{dn.emit(0,e.content,e.options)}),Ia=[]}).on(3,t=>{Ni.delete(t.containerId||t),Ni.size===0&&dn.off(0).off(1).off(5)});function xE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xE(Object(n),!0).forEach(function(r){st(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ld(t){"@babel/helpers - typeof";return Ld=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ld(t)}function cU(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function CE(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dU(t,e,n){return e&&CE(t.prototype,e),n&&CE(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function st(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vy(t,e){return hU(t)||mU(t,e)||kx(t,e)||vU()}function pu(t){return fU(t)||pU(t)||kx(t)||gU()}function fU(t){if(Array.isArray(t))return ng(t)}function hU(t){if(Array.isArray(t))return t}function pU(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mU(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function kx(t,e){if(t){if(typeof t=="string")return ng(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ng(t,e)}}function ng(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function gU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var RE=function(){},Hy={},Ix={},bx=null,xx={mark:RE,measure:RE};try{typeof window<"u"&&(Hy=window),typeof document<"u"&&(Ix=document),typeof MutationObserver<"u"&&(bx=MutationObserver),typeof performance<"u"&&(xx=performance)}catch{}var yU=Hy.navigator||{},NE=yU.userAgent,AE=NE===void 0?"":NE,vi=Hy,xe=Ix,PE=bx,sc=xx;vi.document;var Pr=!!xe.documentElement&&!!xe.head&&typeof xe.addEventListener=="function"&&typeof xe.createElement=="function",Cx=~AE.indexOf("MSIE")||~AE.indexOf("Trident/"),oc,ac,lc,uc,cc,kr="___FONT_AWESOME___",rg=16,Rx="fa",Nx="svg-inline--fa",us="data-fa-i2svg",ig="data-fa-pseudo-element",wU="data-fa-pseudo-element-pending",qy="data-prefix",Wy="data-icon",DE="fontawesome-i2svg",EU="async",_U=["HTML","HEAD","STYLE","SCRIPT"],Ax=function(){try{return!0}catch{return!1}}(),Se="classic",We="sharp",Ky=[Se,We];function mu(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Se]}})}var Al=mu((oc={},st(oc,Se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),st(oc,We,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),oc)),Pl=mu((ac={},st(ac,Se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),st(ac,We,{solid:"fass",regular:"fasr",light:"fasl"}),ac)),Dl=mu((lc={},st(lc,Se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),st(lc,We,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),lc)),TU=mu((uc={},st(uc,Se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),st(uc,We,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),uc)),SU=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Px="fa-layers-text",kU=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,IU=mu((cc={},st(cc,Se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),st(cc,We,{900:"fass",400:"fasr",300:"fasl"}),cc)),Dx=[1,2,3,4,5,6,7,8,9,10],bU=Dx.concat([11,12,13,14,15,16,17,18,19,20]),xU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ol=new Set;Object.keys(Pl[Se]).map(Ol.add.bind(Ol));Object.keys(Pl[We]).map(Ol.add.bind(Ol));var CU=[].concat(Ky,pu(Ol),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fi.GROUP,Fi.SWAP_OPACITY,Fi.PRIMARY,Fi.SECONDARY]).concat(Dx.map(function(t){return"".concat(t,"x")})).concat(bU.map(function(t){return"w-".concat(t)})),Wa=vi.FontAwesomeConfig||{};function RU(t){var e=xe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function NU(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(xe&&typeof xe.querySelector=="function"){var AU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];AU.forEach(function(t){var e=Vy(t,2),n=e[0],r=e[1],i=NU(RU(n));i!=null&&(Wa[r]=i)})}var Ox={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rx,replacementClass:Nx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wa.familyPrefix&&(Wa.cssPrefix=Wa.familyPrefix);var Do=L(L({},Ox),Wa);Do.autoReplaceSvg||(Do.observeMutations=!1);var j={};Object.keys(Ox).forEach(function(t){Object.defineProperty(j,t,{enumerable:!0,set:function(n){Do[t]=n,Ka.forEach(function(r){return r(j)})},get:function(){return Do[t]}})});Object.defineProperty(j,"familyPrefix",{enumerable:!0,set:function(e){Do.cssPrefix=e,Ka.forEach(function(n){return n(j)})},get:function(){return Do.cssPrefix}});vi.FontAwesomeConfig=j;var Ka=[];function PU(t){return Ka.push(t),function(){Ka.splice(Ka.indexOf(t),1)}}var $r=rg,Bn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function DU(t){if(!(!t||!Pr)){var e=xe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=xe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return xe.head.insertBefore(e,r),t}}var OU="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ll(){for(var t=12,e="";t-- >0;)e+=OU[Math.random()*62|0];return e}function Yo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gy(t){return t.classList?Yo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Lx(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function LU(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Lx(t[n]),'" ')},"").trim()}function Xf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Qy(t){return t.size!==Bn.size||t.x!==Bn.x||t.y!==Bn.y||t.rotate!==Bn.rotate||t.flipX||t.flipY}function MU(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function $U(t){var e=t.transform,n=t.width,r=n===void 0?rg:n,i=t.height,s=i===void 0?rg:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&Cx?l+="translate(".concat(e.x/$r-r/2,"em, ").concat(e.y/$r-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/$r,"em), calc(-50% + ").concat(e.y/$r,"em)) "):l+="translate(".concat(e.x/$r,"em, ").concat(e.y/$r,"em) "),l+="scale(".concat(e.size/$r*(e.flipX?-1:1),", ").concat(e.size/$r*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var FU=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Mx(){var t=Rx,e=Nx,n=j.cssPrefix,r=j.replacementClass,i=FU;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var OE=!1;function pp(){j.autoAddCss&&!OE&&(DU(Mx()),OE=!0)}var UU={mixout:function(){return{dom:{css:Mx,insertCss:pp}}},hooks:function(){return{beforeDOMElementCreation:function(){pp()},beforeI2svg:function(){pp()}}}},Ir=vi||{};Ir[kr]||(Ir[kr]={});Ir[kr].styles||(Ir[kr].styles={});Ir[kr].hooks||(Ir[kr].hooks={});Ir[kr].shims||(Ir[kr].shims=[]);var In=Ir[kr],$x=[],jU=function t(){xe.removeEventListener("DOMContentLoaded",t),Md=1,$x.map(function(e){return e()})},Md=!1;Pr&&(Md=(xe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(xe.readyState),Md||xe.addEventListener("DOMContentLoaded",jU));function zU(t){Pr&&(Md?setTimeout(t,0):$x.push(t))}function gu(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Lx(t):"<".concat(e," ").concat(LU(r),">").concat(s.map(gu).join(""),"</").concat(e,">")}function LE(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var BU=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},mp=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?BU(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function VU(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function sg(t){var e=VU(t);return e.length===1?e[0].toString(16):null}function HU(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ME(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function og(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=ME(e);typeof In.hooks.addPack=="function"&&!i?In.hooks.addPack(t,ME(e)):In.styles[t]=L(L({},In.styles[t]||{}),s),t==="fas"&&og("fa",e)}var dc,fc,hc,Ws=In.styles,qU=In.shims,WU=(dc={},st(dc,Se,Object.values(Dl[Se])),st(dc,We,Object.values(Dl[We])),dc),Yy=null,Fx={},Ux={},jx={},zx={},Bx={},KU=(fc={},st(fc,Se,Object.keys(Al[Se])),st(fc,We,Object.keys(Al[We])),fc);function GU(t){return~CU.indexOf(t)}function QU(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!GU(i)?i:null}var Vx=function(){var e=function(s){return mp(Ws,function(o,a,l){return o[l]=mp(a,s,{}),o},{})};Fx=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Ux=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Bx=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ws||j.autoFetchSvg,r=mp(qU,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});jx=r.names,zx=r.unicodes,Yy=Jf(j.styleDefault,{family:j.familyDefault})};PU(function(t){Yy=Jf(t.styleDefault,{family:j.familyDefault})});Vx();function Xy(t,e){return(Fx[t]||{})[e]}function YU(t,e){return(Ux[t]||{})[e]}function Ui(t,e){return(Bx[t]||{})[e]}function Hx(t){return jx[t]||{prefix:null,iconName:null}}function XU(t){var e=zx[t],n=Xy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function yi(){return Yy}var Jy=function(){return{prefix:null,iconName:null,rest:[]}};function Jf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Se:n,i=Al[r][t],s=Pl[r][t]||Pl[r][i],o=t in In.styles?t:null;return s||o||null}var $E=(hc={},st(hc,Se,Object.keys(Dl[Se])),st(hc,We,Object.keys(Dl[We])),hc);function Zf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},st(e,Se,"".concat(j.cssPrefix,"-").concat(Se)),st(e,We,"".concat(j.cssPrefix,"-").concat(We)),e),o=null,a=Se;(t.includes(s[Se])||t.some(function(u){return $E[Se].includes(u)}))&&(a=Se),(t.includes(s[We])||t.some(function(u){return $E[We].includes(u)}))&&(a=We);var l=t.reduce(function(u,c){var d=QU(j.cssPrefix,c);if(Ws[c]?(c=WU[a].includes(c)?TU[a][c]:c,o=c,u.prefix=c):KU[a].indexOf(c)>-1?(o=c,u.prefix=Jf(c,{family:a})):d?u.iconName=d:c!==j.replacementClass&&c!==s[Se]&&c!==s[We]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?Hx(u.iconName):{},h=Ui(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||h||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Ws.far&&Ws.fas&&!j.autoFetchSvg&&(u.prefix="fas")}return u},Jy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===We&&(Ws.fass||j.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ui(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=yi()||"fas"),l}var JU=function(){function t(){cU(this,t),this.definitions={}}return dU(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=L(L({},n.definitions[a]||{}),o[a]),og(a,o[a]);var l=Dl[Se][a];l&&og(l,o[a]),Vx()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),FE=[],Ks={},uo={},ZU=Object.keys(uo);function e9(t,e){var n=e.mixoutsTo;return FE=t,Ks={},Object.keys(uo).forEach(function(r){ZU.indexOf(r)===-1&&delete uo[r]}),FE.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ld(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Ks[o]||(Ks[o]=[]),Ks[o].push(s[o])})}r.provides&&r.provides(uo)}),n}function ag(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ks[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function cs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Ks[t]||[];i.forEach(function(s){s.apply(null,n)})}function br(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return uo[t]?uo[t].apply(null,e):void 0}function lg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||yi();if(e)return e=Ui(n,e)||e,LE(qx.definitions,n,e)||LE(In.styles,n,e)}var qx=new JU,t9=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,cs("noAuto")},n9={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pr?(cs("beforeI2svg",e),br("pseudoElements2svg",e),br("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,zU(function(){i9({autoReplaceSvgRoot:n}),cs("watch",e)})}},r9={icon:function(e){if(e===null)return null;if(Ld(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ui(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Jf(e[0]);return{prefix:r,iconName:Ui(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(j.cssPrefix,"-"))>-1||e.match(SU))){var i=Zf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||yi(),iconName:Ui(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=yi();return{prefix:s,iconName:Ui(s,e)||e}}}},ln={noAuto:t9,config:j,dom:n9,parse:r9,library:qx,findIconDefinition:lg,toHtml:gu},i9=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?xe:n;(Object.keys(In.styles).length>0||j.autoFetchSvg)&&Pr&&j.autoReplaceSvg&&ln.dom.i2svg({node:r})};function eh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return gu(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Pr){var r=xe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function s9(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Qy(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Xf(L(L({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function o9(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(j.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:L(L({},i),{},{id:o}),children:r}]}]}function Zy(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,h=f===void 0?!1:f,g=r.found?r:n,y=g.width,E=g.height,m=i==="fak",p=[j.replacementClass,s?"".concat(j.cssPrefix,"-").concat(s):""].filter(function(F){return d.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(d.classes).join(" "),w={children:[],attributes:L(L({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(E)})},v=m&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/E*16*.0625,"em")}:{};h&&(w.attributes[us]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||Ll())},children:[l]}),delete w.attributes.title);var S=L(L({},w),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:L(L({},v),d.styles)}),x=r.found&&n.found?br("generateAbstractMask",S)||{children:[],attributes:{}}:br("generateAbstractIcon",S)||{children:[],attributes:{}},b=x.children,R=x.attributes;return S.children=b,S.attributes=R,a?o9(S):s9(S)}function UE(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=L(L(L({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[us]="");var c=L({},o.styles);Qy(i)&&(c.transform=$U({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Xf(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function a9(t){var e=t.content,n=t.title,r=t.extra,i=L(L(L({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Xf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var gp=In.styles;function ug(t){var e=t[0],n=t[1],r=t.slice(4),i=Vy(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(j.cssPrefix,"-").concat(Fi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Fi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(j.cssPrefix,"-").concat(Fi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var l9={found:!1,width:512,height:512};function u9(t,e){!Ax&&!j.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function cg(t,e){var n=e;return e==="fa"&&j.styleDefault!==null&&(e=yi()),new Promise(function(r,i){if(br("missingIconAbstract"),n==="fa"){var s=Hx(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&gp[e]&&gp[e][t]){var o=gp[e][t];return r(ug(o))}u9(t,e),r(L(L({},l9),{},{icon:j.showMissingIcons&&t?br("missingIconAbstract")||{}:{}}))})}var jE=function(){},dg=j.measurePerformance&&sc&&sc.mark&&sc.measure?sc:{mark:jE,measure:jE},ba='FA "6.4.0"',c9=function(e){return dg.mark("".concat(ba," ").concat(e," begins")),function(){return Wx(e)}},Wx=function(e){dg.mark("".concat(ba," ").concat(e," ends")),dg.measure("".concat(ba," ").concat(e),"".concat(ba," ").concat(e," begins"),"".concat(ba," ").concat(e," ends"))},e0={begin:c9,end:Wx},$c=function(){};function zE(t){var e=t.getAttribute?t.getAttribute(us):null;return typeof e=="string"}function d9(t){var e=t.getAttribute?t.getAttribute(qy):null,n=t.getAttribute?t.getAttribute(Wy):null;return e&&n}function f9(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(j.replacementClass)}function h9(){if(j.autoReplaceSvg===!0)return Fc.replace;var t=Fc[j.autoReplaceSvg];return t||Fc.replace}function p9(t){return xe.createElementNS("http://www.w3.org/2000/svg",t)}function m9(t){return xe.createElement(t)}function Kx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?p9:m9:n;if(typeof t=="string")return xe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Kx(o,{ceFn:r}))}),i}function g9(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Fc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Kx(i),n)}),n.getAttribute(us)===null&&j.keepOriginalSource){var r=xe.createComment(g9(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Gy(n).indexOf(j.replacementClass))return Fc.replace(e);var i=new RegExp("".concat(j.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===j.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return gu(a)}).join(`
`);n.setAttribute(us,""),n.innerHTML=o}};function BE(t){t()}function Gx(t,e){var n=typeof e=="function"?e:$c;if(t.length===0)n();else{var r=BE;j.mutateApproach===EU&&(r=vi.requestAnimationFrame||BE),r(function(){var i=h9(),s=e0.begin("mutate");t.map(i),s(),n()})}}var t0=!1;function Qx(){t0=!0}function fg(){t0=!1}var $d=null;function VE(t){if(PE&&j.observeMutations){var e=t.treeCallback,n=e===void 0?$c:e,r=t.nodeCallback,i=r===void 0?$c:r,s=t.pseudoElementsCallback,o=s===void 0?$c:s,a=t.observeMutationsRoot,l=a===void 0?xe:a;$d=new PE(function(u){if(!t0){var c=yi();Yo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!zE(d.addedNodes[0])&&(j.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&j.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&zE(d.target)&&~xU.indexOf(d.attributeName))if(d.attributeName==="class"&&d9(d.target)){var f=Zf(Gy(d.target)),h=f.prefix,g=f.iconName;d.target.setAttribute(qy,h||c),g&&d.target.setAttribute(Wy,g)}else f9(d.target)&&i(d.target)})}}),Pr&&$d.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function v9(){$d&&$d.disconnect()}function y9(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function w9(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Zf(Gy(t));return i.prefix||(i.prefix=yi()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=YU(i.prefix,t.innerText)||Xy(i.prefix,sg(t.innerText))),!i.iconName&&j.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function E9(t){var e=Yo(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return j.autoA11y&&(n?e["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||Ll()):(e["aria-hidden"]="true",e.focusable="false")),e}function _9(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Bn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function HE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=w9(t),r=n.iconName,i=n.prefix,s=n.rest,o=E9(t),a=ag("parseNodeAttributes",{},t),l=e.styleParser?y9(t):[];return L({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Bn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var T9=In.styles;function Yx(t){var e=j.autoReplaceSvg==="nest"?HE(t,{styleParser:!1}):HE(t);return~e.extra.classes.indexOf(Px)?br("generateLayersText",t,e):br("generateSvgReplacementMutation",t,e)}var wi=new Set;Ky.map(function(t){wi.add("fa-".concat(t))});Object.keys(Al[Se]).map(wi.add.bind(wi));Object.keys(Al[We]).map(wi.add.bind(wi));wi=pu(wi);function qE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pr)return Promise.resolve();var n=xe.documentElement.classList,r=function(d){return n.add("".concat(DE,"-").concat(d))},i=function(d){return n.remove("".concat(DE,"-").concat(d))},s=j.autoFetchSvg?wi:Ky.map(function(c){return"fa-".concat(c)}).concat(Object.keys(T9));s.includes("fa")||s.push("fa");var o=[".".concat(Px,":not([").concat(us,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(us,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Yo(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=e0.begin("onTree"),u=a.reduce(function(c,d){try{var f=Yx(d);f&&c.push(f)}catch(h){Ax||h.name==="MissingIcon"&&console.error(h)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){Gx(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function S9(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yx(t).then(function(n){n&&Gx([n],e)})}function k9(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:lg(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:lg(i||{})),t(r,L(L({},n),{},{mask:i}))}}var I9=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Bn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,h=n.titleId,g=h===void 0?null:h,y=n.classes,E=y===void 0?[]:y,m=n.attributes,p=m===void 0?{}:m,w=n.styles,v=w===void 0?{}:w;if(e){var S=e.prefix,x=e.iconName,b=e.icon;return eh(L({type:"icon"},e),function(){return cs("beforeDOMElementCreation",{iconDefinition:e,params:n}),j.autoA11y&&(f?p["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(g||Ll()):(p["aria-hidden"]="true",p.focusable="false")),Zy({icons:{main:ug(b),mask:l?ug(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:x,transform:L(L({},Bn),i),symbol:o,title:f,maskId:c,titleId:g,extra:{attributes:p,styles:v,classes:E}})})}},b9={mixout:function(){return{icon:k9(I9)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qE,n.nodeCallback=S9,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?xe:r,s=n.callback,o=s===void 0?function(){}:s;return qE(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(h,g){Promise.all([cg(i,a),c.iconName?cg(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var E=Vy(y,2),m=E[0],p=E[1];h([n,Zy({icons:{main:m,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Xf(a);l.length>0&&(i.style=l);var u;return Qy(o)&&(u=br("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},x9={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return eh({type:"layer"},function(){cs("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(j.cssPrefix,"-layers")].concat(pu(s)).join(" ")},children:o}]})}}}},C9={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return eh({type:"counter",content:n},function(){return cs("beforeDOMElementCreation",{content:n,params:r}),a9({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(j.cssPrefix,"-layers-counter")].concat(pu(a))}})})}}}},R9={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Bn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,h=f===void 0?{}:f;return eh({type:"text",content:n},function(){return cs("beforeDOMElementCreation",{content:n,params:r}),UE({content:n,transform:L(L({},Bn),s),title:a,extra:{attributes:d,styles:h,classes:["".concat(j.cssPrefix,"-layers-text")].concat(pu(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(Cx){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return j.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,UE({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},N9=new RegExp('"',"ug"),WE=[1105920,1112319];function A9(t){var e=t.replace(N9,""),n=HU(e,0),r=n>=WE[0]&&n<=WE[1],i=e.length===2?e[0]===e[1]:!1;return{value:sg(i?e[0]:e),isSecondary:r||i}}function KE(t,e){var n="".concat(wU).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Yo(t.children),o=s.filter(function(b){return b.getAttribute(ig)===e})[0],a=vi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(kU),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?We:Se,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Pl[f][l[2].toLowerCase()]:IU[f][u],g=A9(d),y=g.value,E=g.isSecondary,m=l[0].startsWith("FontAwesome"),p=Xy(h,y),w=p;if(m){var v=XU(y);v.iconName&&v.prefix&&(p=v.iconName,h=v.prefix)}if(p&&!E&&(!o||o.getAttribute(qy)!==h||o.getAttribute(Wy)!==w)){t.setAttribute(n,w),o&&t.removeChild(o);var S=_9(),x=S.extra;x.attributes[ig]=e,cg(p,h).then(function(b){var R=Zy(L(L({},S),{},{icons:{main:b,mask:Jy()},prefix:h,iconName:w,extra:x,watchable:!0})),F=xe.createElement("svg");e==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=R.map(function(V){return gu(V)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function P9(t){return Promise.all([KE(t,"::before"),KE(t,"::after")])}function D9(t){return t.parentNode!==document.head&&!~_U.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ig)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function GE(t){if(Pr)return new Promise(function(e,n){var r=Yo(t.querySelectorAll("*")).filter(D9).map(P9),i=e0.begin("searchPseudoElements");Qx(),Promise.all(r).then(function(){i(),fg(),e()}).catch(function(){i(),fg(),n()})})}var O9={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=GE,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?xe:r;j.searchPseudoElements&&GE(i)}}},QE=!1,L9={mixout:function(){return{dom:{unwatch:function(){Qx(),QE=!0}}}},hooks:function(){return{bootstrap:function(){VE(ag("mutationObserverCallbacks",{}))},noAuto:function(){v9()},watch:function(n){var r=n.observeMutationsRoot;QE?fg():VE(ag("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},YE=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},M9={mixout:function(){return{parse:{transform:function(n){return YE(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=YE(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},h={outer:a,inner:d,path:f};return{tag:"g",attributes:L({},h.outer),children:[{tag:"g",attributes:L({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:L(L({},r.icon.attributes),h.path)}]}]}}}},vp={x:0,y:0,width:"100%",height:"100%"};function XE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function $9(t){return t.tag==="g"?t.children:[t]}var F9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Zf(i.split(" ").map(function(o){return o.trim()})):Jy();return s.prefix||(s.prefix=yi()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,h=MU({transform:l,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:L(L({},vp),{},{fill:"white"})},y=c.children?{children:c.children.map(XE)}:{},E={tag:"g",attributes:L({},h.inner),children:[XE(L({tag:c.tag,attributes:L(L({},c.attributes),h.path)},y))]},m={tag:"g",attributes:L({},h.outer),children:[E]},p="mask-".concat(a||Ll()),w="clip-".concat(a||Ll()),v={tag:"mask",attributes:L(L({},vp),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:$9(f)},v]};return r.push(S,{tag:"rect",attributes:L({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(p,")")},vp)}),{children:r,attributes:i}}}},U9={provides:function(e){var n=!1;vi.matchMedia&&(n=vi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:L(L({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=L(L({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:L(L({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:L(L({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:L(L({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:L(L({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:L(L({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:L(L({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:L(L({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},j9={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},z9=[UU,b9,x9,C9,R9,O9,L9,M9,F9,U9,j9];e9(z9,{mixoutsTo:ln});ln.noAuto;ln.config;ln.library;ln.dom;var hg=ln.parse;ln.findIconDefinition;ln.toHtml;var B9=ln.icon;ln.layer;ln.text;ln.counter;var Xx={exports:{}},V9="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H9=V9,q9=H9;function Jx(){}function Zx(){}Zx.resetWarningCache=Jx;var W9=function(){function t(r,i,s,o,a,l){if(l!==q9){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Zx,resetWarningCache:Jx};return n.PropTypes=n,n};Xx.exports=W9();var K9=Xx.exports;const ie=r_(K9);function JE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Xr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?JE(Object(n),!0).forEach(function(r){Gs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):JE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Fd(t){"@babel/helpers - typeof";return Fd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fd(t)}function Gs(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G9(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Q9(t,e){if(t==null)return{};var n=G9(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function pg(t){return Y9(t)||X9(t)||J9(t)||Z9()}function Y9(t){if(Array.isArray(t))return mg(t)}function X9(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function J9(t,e){if(t){if(typeof t=="string")return mg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return mg(t,e)}}function mg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Z9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function e6(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,h=t.inverse,g=t.border,y=t.listItem,E=t.flip,m=t.size,p=t.rotation,w=t.pull,v=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":h,"fa-border":g,"fa-li":y,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Gs(e,"fa-".concat(m),typeof m<"u"&&m!==null),Gs(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Gs(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),Gs(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(v).map(function(S){return v[S]?S:null}).filter(function(S){return S})}function t6(t){return t=t-0,t===t}function e2(t){return t6(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var n6=["style"];function r6(t){return t.charAt(0).toUpperCase()+t.slice(1)}function i6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=e2(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[r6(i)]=s:e[i]=s,e},{})}function t2(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return t2(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=i6(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[e2(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=Q9(n,n6);return i.attrs.style=Xr(Xr({},i.attrs.style),o),t.apply(void 0,[e.tag,Xr(Xr({},i.attrs),a)].concat(pg(r)))}var n2=!1;try{n2=!0}catch{}function s6(){if(!n2&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ZE(t){if(t&&Fd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(hg.icon)return hg.icon(t);if(t===null)return null;if(t&&Fd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function yp(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Gs({},t,e):{}}var vu=q.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=ZE(n),c=yp("classes",[].concat(pg(e6(t)),pg(s.split(" ")))),d=yp("transform",typeof t.transform=="string"?hg.transform(t.transform):t.transform),f=yp("mask",ZE(r)),h=B9(u,Xr(Xr(Xr(Xr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!h)return s6("Could not find icon",u),null;var g=h.abstract,y={ref:e};return Object.keys(t).forEach(function(E){vu.defaultProps.hasOwnProperty(E)||(y[E]=t[E])}),o6(g[0],y)});vu.displayName="FontAwesomeIcon";vu.propTypes={beat:ie.bool,border:ie.bool,beatFade:ie.bool,bounce:ie.bool,className:ie.string,fade:ie.bool,flash:ie.bool,mask:ie.oneOfType([ie.object,ie.array,ie.string]),maskId:ie.string,fixedWidth:ie.bool,inverse:ie.bool,flip:ie.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ie.oneOfType([ie.object,ie.array,ie.string]),listItem:ie.bool,pull:ie.oneOf(["right","left"]),pulse:ie.bool,rotation:ie.oneOf([0,90,180,270]),shake:ie.bool,size:ie.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ie.bool,spinPulse:ie.bool,spinReverse:ie.bool,symbol:ie.oneOfType([ie.bool,ie.string]),title:ie.string,titleId:ie.string,transform:ie.oneOfType([ie.string,ie.object]),swapOpacity:ie.bool};vu.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var o6=t2.bind(null,q.createElement);function a6(){const t=of(),[e]=Bo(Xn),[n,r]=_.useState({title:"",description:"",image:null,createdAt:Qe.now().toDate()}),[i,s]=_.useState(0),o=u=>{r({...n,[u.target.name]:u.target.value})},a=u=>{r({...n,image:u.target.files[0]})},l=()=>{if(!n.title||!n.description||!n.image){me.error("Please fill all the fields");return}const u=F5(H5,`/images/${Date.now()}${n.image.name}`),c=M5(u,n.image);c.on("state_changed",d=>{const f=Math.round(d.bytesTransferred/d.totalBytes*100);s(f)},d=>{console.log(d)},()=>{r({title:"",description:"",image:null}),$5(c.snapshot.ref).then(d=>{const f=Fb(Ao,"Articles");b3(f,{title:n.title,description:n.description,imageUrl:d,createdAt:Qe.now().toDate(),createdBy:e.displayName,userId:e.uid,likes:[],comments:[]}).then(()=>{me.success("Article added successfully"),s(0),t("/")}).catch(h=>{me.error("Error adding article")})})})};return T.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen",style:{margin:"30px"},children:[T.jsx("div",{className:"bg-white shadow-md rounded-md p-8 max-w-sm w-full",children:e?T.jsxs(T.Fragment,{children:[T.jsx("h2",{className:"text-xl font-bold mb-6 text-center",children:"Create an article"}),T.jsxs("div",{className:"space-y-4",children:[T.jsxs("div",{children:[T.jsx("label",{htmlFor:"title",className:"block text-sm font-medium text-gray-700",children:"Title"}),T.jsx("input",{type:"text",id:"title",name:"title",value:n.title,onChange:o,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2",placeholder:"Enter your title"})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700",children:"Description"}),T.jsx("textarea",{id:"description",name:"description",value:n.description,onChange:o,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2",placeholder:"Enter your description"})]}),T.jsx("div",{children:T.jsxs("div",{className:"col-span-full",children:[T.jsx("label",{htmlFor:"image",className:"block text-sm font-medium leading-6 text-gray-900",children:"Upload Image"}),T.jsx("div",{className:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10",children:T.jsxs("div",{className:"text-center",children:[T.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-300",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:T.jsx("path",{fillRule:"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z",clipRule:"evenodd"})}),T.jsx("div",{className:"mt-4 flex justify-center text-sm leading-6 text-gray-600",children:T.jsxs("label",{htmlFor:"image",className:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500",children:[T.jsx("span",{children:"Select File"}),T.jsx("input",{type:"file",id:"image",onChange:a,name:"image",accept:"image/*",className:"sr-only"})]})}),T.jsx("span",{className:"text-xs leading-5 text-gray-600",children:"PNG, JPG, GIF up to 10MB"}),T.jsx("span",{className:"ml-2 text-sm text-gray-500",id:"image-label",children:n.image&&n.image.name})]})})]})}),i>0&&T.jsxs("div",{className:"relative pt-1",children:[T.jsx("div",{className:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200",children:T.jsx("div",{style:{width:`${i}%`},className:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"})}),T.jsx("div",{className:"text-center",children:T.jsxs("span",{className:"text-sm font-medium text-gray-500",children:["Uploading Image (",i,"%)"]})})]}),T.jsx("button",{onClick:l,className:"block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Publish"})]})]}):T.jsxs(T.Fragment,{children:[T.jsx("h2",{className:"text-xl font-bold mb-6 text-center",children:T.jsx(or,{to:"/signin",className:"text-indigo-600",children:"Login to create an article"})}),T.jsxs("p",{className:"text-center",children:["Don't have an account?"," ",T.jsx(or,{to:"/register",className:"text-indigo-600",children:"Signup"})]})]})}),T.jsx(Po,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}var l6={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"]};function u6({id:t,likes:e}){const[n]=Bo(Xn),r=Rl(Ao,"Articles",t),i=()=>{e!=null&&e.includes(n.uid)?Ba(r,{likes:ex(n.uid)}).then(()=>{console.log("unliked")}).catch(s=>{console.log(s)}):Ba(r,{likes:eg(n.uid)}).then(()=>{console.log("liked")}).catch(s=>{console.log(s)})};return T.jsx("div",{children:T.jsx(vu,{icon:l6,className:`fa-heart${e!=null&&e.includes(n.uid)?"":"-o"} fa-lg`,style:{cursor:"pointer",color:e!=null&&e.includes(n.uid)?"red":null,backgroundColor:e!=null&&e.includes(n.uid)?"pink":null,borderRadius:e!=null&&e.includes(n.uid)?"50%":null},onClick:i})})}function c6(){const[t,e]=_.useState([]),[n]=Bo(Xn);return _.useEffect(()=>{const r=Fb(Ao,"Articles"),i=E3(r,_3("createdAt","desc"));My(i,s=>{const o=s.docs.map(a=>({id:a.id,...a.data()}));e(o),console.log(o)})},[]),T.jsx("div",{children:t.length===0?T.jsx(T.Fragment,{children:T.jsx("div",{className:"loader"})}):t.map(({id:r,title:i,description:s,imageUrl:o,createdAt:a,createdBy:l,userId:u,likes:c,comments:d})=>T.jsx("div",{className:"border mt-3 p-3 bg-light shadow-md rounded-md",style:{margin:"40px",padding:"10px"},children:T.jsxs("div",{className:"flex flex-col md:flex-row",children:[T.jsx("div",{className:"md:w-1/3",children:T.jsx(or,{to:`/article/${r}`,children:T.jsx("img",{src:o,alt:"title",width:"200px",height:"200px",className:"h-48 md:h-auto w-full object-cover"})})}),T.jsxs("div",{className:"md:w-2/3 md:pl-3",children:[T.jsx("div",{className:"flex justify-between items-center"}),T.jsx("h3",{className:"text-2xl",style:{color:"#570DF8",marginRight:"10px",marginTop:"10px"},children:i}),T.jsx("p",{className:"text-gray-500 mt-2",style:{color:"gray",marginRight:"10px",marginTop:"20px"},children:a.toDate().toDateString()}),T.jsx("p",{className:"mt-4 text-lg leading-relaxed text-gray-700 truncate",style:{color:"gray",marginRight:"10px",marginTop:""},children:s}),T.jsx("div",{style:{marginTop:"20px"},children:T.jsx(or,{to:`/article/${r}`,style:{marginRight:"10px",padding:"7px 30px",borderRadius:"10px",color:"white",background:"#570Df8",outline:"none"},children:"Learn More"})}),T.jsxs("div",{className:"flex justify-end items-center mt-6",children:[n&&T.jsx(u6,{id:r,likes:c}),T.jsx("div",{className:"pe-2",style:{marginLeft:"10px"},children:T.jsxs("p",{children:[c==null?void 0:c.length," likes"]})}),T.jsxs("p",{children:[d==null?void 0:d.length," comments"]})]})]})]})},r))})}function d6(){let t=of();const[e,n]=_.useState(""),[r,i]=_.useState(""),s=async()=>{try{await KO(Xn,e,r),t("/")}catch(o){me(o.code,{type:"error"})}};return T.jsxs("div",{className:"flex items-center justify-center min-h-screen ",style:{margin:"30px",marginTop:"-90px"},children:[T.jsxs("div",{className:"bg-white shadow-md rounded-md p-8 max-w-sm w-full",children:[T.jsx("h1",{className:"text-2xl font-bold mb-6 text-center",children:"Login"}),T.jsxs("div",{className:"space-y-4",children:[T.jsxs("div",{children:[T.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),T.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Enter your email",value:e,onChange:o=>n(o.target.value)})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),T.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Password",value:r,onChange:o=>i(o.target.value)})]}),T.jsx("div",{children:T.jsx("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:s,children:"Login"})})]})]}),T.jsx("div",{children:T.jsx(Po,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})})]})}function f6(){const[t,e]=_.useState(""),[n,r]=_.useState(""),[i,s]=_.useState("");let o=of();const a=async()=>{try{await WO(Xn,t,n),QO(Xn.currentUser,{displayName:i}),o("/")}catch(l){me(l.code,{type:"error"})}};return T.jsxs("div",{className:"flex items-center justify-center min-h-screen ",style:{margin:"30px",marginTop:"-90px"},children:[T.jsxs("div",{className:"bg-white shadow-md rounded-md p-8 max-w-sm w-full",children:[T.jsx("h1",{className:"text-2xl font-bold mb-6 text-center",children:"Register"}),T.jsxs("div",{className:"space-y-4",children:[T.jsxs("div",{children:[T.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),T.jsx("input",{id:"name",name:"name",type:"text",autoComplete:"name",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Enter your name",value:i,onChange:l=>s(l.target.value)})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),T.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Enter your email",value:t,onChange:l=>e(l.target.value)})]}),T.jsxs("div",{children:[T.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),T.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"new-password",required:!0,className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"Password",value:n,onChange:l=>r(l.target.value)})]}),T.jsx("div",{children:T.jsx("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:a,children:"Register"})})]})]}),T.jsx(Po,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}var r2={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},e_=q.createContext&&q.createContext(r2),ci=globalThis&&globalThis.__assign||function(){return ci=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},ci.apply(this,arguments)},h6=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function i2(t){return t&&t.map(function(e,n){return q.createElement(e.tag,ci({key:n},e.attr),i2(e.child))})}function p6(t){return function(e){return q.createElement(m6,ci({attr:ci({},t.attr)},e),i2(t.child))}}function m6(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=h6(t,["attr","size","title"]),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),q.createElement("svg",ci({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ci(ci({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&q.createElement("title",null,s),t.children)};return e_!==void 0?q.createElement(e_.Consumer,null,function(n){return e(n)}):e(r2)}function g6(t){return p6({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(t)}let pc;const v6=new Uint8Array(16);function y6(){if(!pc&&(pc=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!pc))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return pc(v6)}const ht=[];for(let t=0;t<256;++t)ht.push((t+256).toString(16).slice(1));function w6(t,e=0){return(ht[t[e+0]]+ht[t[e+1]]+ht[t[e+2]]+ht[t[e+3]]+"-"+ht[t[e+4]]+ht[t[e+5]]+"-"+ht[t[e+6]]+ht[t[e+7]]+"-"+ht[t[e+8]]+ht[t[e+9]]+"-"+ht[t[e+10]]+ht[t[e+11]]+ht[t[e+12]]+ht[t[e+13]]+ht[t[e+14]]+ht[t[e+15]]).toLowerCase()}const E6=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),t_={randomUUID:E6};function n_(t,e,n){if(t_.randomUUID&&!e&&!t)return t_.randomUUID();t=t||{};const r=t.random||(t.rng||y6)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return w6(r)}function _6({id:t}){const[e,n]=_.useState(""),[r,i]=_.useState([]),[s]=Bo(Xn);_.useState("");const o=Rl(Ao,"Articles",t);_.useEffect(()=>{const u=Rl(Ao,"Articles",t);My(u,c=>{i(c.data().comments)})},[]);const a=u=>{u.key==="Enter"&&(s?Ba(o,{comments:eg({user:s.uid,userName:s.displayName,comment:e,createdAt:new Date,commentId:n_()})}).then(()=>{n("")}):alert("Please sign in to add a comment."))},l=u=>{console.log(u),Ba(o,{comments:ex(u)}).then(c=>{console.log(c)}).catch(c=>{console.log(c)})};return T.jsx("div",{children:T.jsxs("div",{className:"container",children:[!s&&T.jsxs("p",{className:"text-center mt-4",children:["Please"," ",T.jsx(or,{to:"/register",className:"text-purple-500",children:"Sign In"})," ","to write a comment."]}),s&&T.jsxs(T.Fragment,{children:[T.jsx("h1",{children:"Add Comment"}),T.jsxs("div",{className:"flex items-center mt-4",children:[T.jsx("img",{className:"w-10 h-10 rounded-full mr-3",src:s.photoURL||`https://avatars.dicebear.com/api/male/${s.uid}.svg`,alt:"User Avatar"}),T.jsxs("div",{className:"relative flex-1",children:[T.jsx("input",{type:"text",className:"w-full py-3 pl-10 pr-4 rounded-full bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500",value:e,onChange:u=>{n(u.target.value)},placeholder:"Add a comment...",onKeyUp:u=>{a(u)}}),T.jsx("button",{className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-500 focus:outline-none",onClick:()=>{e.trim()!==""?Ba(o,{comments:eg({user:s.uid,userName:s.displayName,comment:e,createdAt:new Date,commentId:n_()})}).then(()=>{n("")}).catch(()=>{alert("Failed to add comment. Please try again later.")}):me("Please write a comment",{type:"error"})},children:T.jsx(g6,{className:"w-6 h-6"})})]})]})]}),r!==null&&r.map(({commentId:u,user:c,comment:d,userName:f,createdAt:h})=>T.jsx("div",{className:"border p-4 mt-4",children:T.jsxs("div",{className:"flex",children:[T.jsx("img",{className:"w-10 h-10 rounded-full mr-4",src:`https://avatars.dicebear.com/api/male/${c}.svg`,alt:"User Avatar"}),T.jsxs("div",{children:[T.jsx("p",{className:"font-bold",children:f}),T.jsx("p",{children:d}),T.jsxs("div",{className:"flex items-center mt-2",children:[T.jsx("p",{className:"text-gray-500 text-sm",children:h.toDate().toLocaleTimeString()}),c===(s==null?void 0:s.uid)&&T.jsx("button",{className:"text-gray-500 hover:text-red-500 ml-4",onClick:()=>l({commentId:u,user:c,comment:d,userName:f,createdAt:h}),children:"Delete"})]})]})]})},u)),T.jsx(Po,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})})}function T6(){const{id:t}=LN(),[e,n]=_.useState(null);return Bo(Xn),_.useEffect(()=>{const r=Rl(Ao,"Articles",t);My(r,i=>{n({...i.data(),id:i.id})})},[]),T.jsx(T.Fragment,{children:e&&T.jsx("section",{class:"text-gray-600 body-font",children:T.jsxs("div",{class:"container mx-auto flex px-5 py-24 md:flex-row flex-col items-center",children:[T.jsxs("div",{class:"lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center",children:[T.jsx("h1",{class:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900",children:e.title}),T.jsx("p",{class:"mb-8 leading-relaxed",children:"Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher."}),T.jsxs("p",{class:"text-sm mt-2 text-gray-500 mb-8 w-full",children:[e.description," "]})]}),T.jsxs("div",{class:"lg:max-w-lg lg:w-full md:w-1/2 w-5/6",children:[T.jsx("img",{class:"object-cover object-center rounded",alt:"hero",width:"1000px",src:e.imageUrl}),T.jsx("div",{style:{marginTop:"20px"},children:T.jsx(_6,{id:e.id})})]})]})})})}const S6=rA([{path:"/",element:T.jsx(tU,{}),children:[{path:"/",element:T.jsx(c6,{})},{path:"/upload",element:T.jsx(a6,{})},{path:"/signin",element:T.jsx(d6,{})},{path:"/register",element:T.jsx(f6,{})},{path:"/article/:id",element:T.jsx(T6,{})}]}]);wp.createRoot(document.getElementById("root")).render(T.jsx(q.StrictMode,{children:T.jsx(GN,{router:S6})}));
