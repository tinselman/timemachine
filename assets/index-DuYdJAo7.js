var nd=Object.defineProperty;var id=(s,t,e)=>t in s?nd(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var P=(s,t,e)=>id(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="186",sd=0,Oc=1,rd=2,uo=1,od=2,sr=3,Hi=0,ln=1,Vn=2,li=0,ar=1,$a=2,kc=3,Bc=4,ad=5,ys=100,ld=101,cd=102,hd=103,ud=104,fd=200,dd=201,pd=202,md=203,Ou=204,ku=205,gd=206,xd=207,vd=208,_d=209,Md=210,yd=211,Sd=212,wd=213,bd=214,Ka=0,Za=1,Ja=2,pr=3,Qa=4,ja=5,tl=6,el=7,ql=0,Ed=1,Td=2,qn=0,Bu=1,Hu=2,Gu=3,Vu=4,Wu=5,Xu=6,Yl=7,qu=300,Gi=301,Cs=302,jo=303,ta=304,Wo=306,nl=1e3,ai=1001,il=1002,He=1003,Ad=1004,Ar=1005,Ge=1006,ea=1007,Ci=1008,an=1009,Yu=1010,$u=1011,mr=1012,$l=1013,Yn=1014,Dn=1015,bn=1016,Kl=1017,Zl=1018,gr=1020,Ku=35902,Zu=35899,Ju=1021,Qu=1022,pn=1023,ui=1026,ki=1027,Xo=1028,Jl=1029,Vi=1030,Ql=1031,jl=1033,fo=33776,po=33777,mo=33778,go=33779,sl=35840,rl=35841,ol=35842,al=35843,ll=36196,cl=37492,hl=37496,ul=37488,fl=37489,yo=37490,dl=37491,pl=37808,ml=37809,gl=37810,xl=37811,vl=37812,_l=37813,Ml=37814,yl=37815,Sl=37816,wl=37817,bl=37818,El=37819,Tl=37820,Al=37821,Rl=36492,Cl=36494,Ll=36495,Pl=36283,Il=36284,So=36285,Dl=36286,Rd=3200,Ul=0,Cd=1,Ai="",Ue="srgb",wo="srgb-linear",bo="linear",pe="srgb",na=7680,Ld=519,Pd=512,Id=513,Dd=514,tc=515,Ud=516,Nd=517,ec=518,Fd=519,ju=35044,Hc="300 es",Wn=2e3,xr=2001;function zd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function vr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Od(){const s=vr("canvas");return s.style.display="block",s}const Gc={};function Eo(...s){const t="THREE."+s.shift();console.log(t,...s)}function tf(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qt(...s){s=tf(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ae(...s){s=tf(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function As(...s){const t=s.join(" ");t in Gc||(Gc[t]=!0,qt(...s))}function kd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Bd={[Ka]:Za,[Ja]:tl,[Qa]:el,[pr]:ja,[Za]:Ka,[tl]:Ja,[el]:Qa,[ja]:pr};class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const lr=Math.PI/180,_r=180/Math.PI;function ci(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function nc(s,t){return(s%t+t)%t}function Hd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Gd(s,t,e){return s!==t?(e-s)/(t-s):0}function cr(s,t,e){return(1-e)*s+e*t}function Vd(s,t,e,n){return cr(s,t,1-Math.exp(-e*n))}function Wd(s,t=1){return t-Math.abs(nc(s,t*2)-t)}function Xd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function qd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Yd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function $d(s,t){return s+Math.random()*(t-s)}function Kd(s){return s*(.5-Math.random())}function Zd(s){s!==void 0&&(Vc=s);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Jd(s){return s*lr}function Qd(s){return s*_r}function jd(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function tp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ep(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function np(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*h,a*c);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function In(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Xe={DEG2RAD:lr,RAD2DEG:_r,generateUUID:ci,clamp:ie,euclideanModulo:nc,mapLinear:Hd,inverseLerp:Gd,lerp:cr,damp:Vd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:$d,randFloatSpread:Kd,seededRandom:Zd,degToRad:Jd,radToDeg:Qd,isPowerOfTwo:jd,ceilPowerOfTwo:tp,floorPowerOfTwo:ep,setQuaternionFromProperEuler:np,normalize:me,denormalize:In},wc=class wc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wc.prototype.isVector2=!0;let Bt=wc;class ve{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+x*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bc=class bc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ia.copy(this).projectOnVector(t),this.sub(ia)}reflect(t){return this.sub(ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bc.prototype.isVector3=!0;let U=bc;const ia=new U,Wc=new ve,Ec=class Ec{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],E=i[4],v=i[7],S=i[2],b=i[5],A=i[8];return r[0]=o*x+a*M+l*S,r[3]=o*g+a*E+l*b,r[6]=o*p+a*v+l*A,r[1]=c*x+h*M+u*S,r[4]=c*g+h*E+u*b,r[7]=c*p+h*v+u*A,r[2]=d*x+f*M+m*S,r[5]=d*g+f*E+m*b,r[8]=d*p+f*v+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sa.makeScale(t,e)),this}rotate(t){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ec.prototype.isMatrix3=!0;let Kt=Ec;const sa=new Kt,Xc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ip(){const s={enabled:!0,workingColorSpace:wo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ai?bo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wo]:{primaries:t,whitePoint:n,transfer:bo,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),s}const oe=ip();function hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ji;class sp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=vr("canvas")),Ji.width=t.width,Ji.height=t.height;const i=Ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rp=0;class ic{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ra(i[o].image)):r.push(ra(i[o]))}else r=ra(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ra(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let op=0;const oa=new U;class qe extends Xi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=ai,i=ai,r=Ge,o=Ci,a=pn,l=an,c=qe.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=ci(),this.name="",this.source=new ic(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nl:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case il:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nl:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case il:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=qu;qe.DEFAULT_ANISOTROPY=1;const Tc=class Tc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(f+1)/2,S=(p+1)/2,b=(h+d)/4,A=(u+x)/4,_=(m+g)/4;return E>v&&E>S?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=b/n,r=A/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=_/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tc.prototype.isVector4=!0;let _e=Tc;class ap extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new qe(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ic(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends ap{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ef extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lp extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Vo=class Vo{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,m,x,g)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d+x*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cp,t,hp)}lookAt(t,e,n){const i=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),mi.crossVectors(n,cn),mi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),mi.crossVectors(n,cn)),mi.normalize(),Rr.crossVectors(cn,mi),i[0]=mi.x,i[4]=Rr.x,i[8]=cn.x,i[1]=mi.y,i[5]=Rr.y,i[9]=cn.y,i[2]=mi.z,i[6]=Rr.z,i[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],E=n[7],v=n[11],S=n[15],b=i[0],A=i[4],_=i[8],y=i[12],C=i[1],L=i[5],D=i[9],F=i[13],H=i[2],O=i[6],Z=i[10],q=i[14],j=i[3],G=i[7],K=i[11],it=i[15];return r[0]=o*b+a*C+l*H+c*j,r[4]=o*A+a*L+l*O+c*G,r[8]=o*_+a*D+l*Z+c*K,r[12]=o*y+a*F+l*q+c*it,r[1]=h*b+u*C+d*H+f*j,r[5]=h*A+u*L+d*O+f*G,r[9]=h*_+u*D+d*Z+f*K,r[13]=h*y+u*F+d*q+f*it,r[2]=m*b+x*C+g*H+p*j,r[6]=m*A+x*L+g*O+p*G,r[10]=m*_+x*D+g*Z+p*K,r[14]=m*y+x*F+g*q+p*it,r[3]=M*b+E*C+v*H+S*j,r[7]=M*A+E*L+v*O+S*G,r[11]=M*_+E*D+v*Z+S*K,r[15]=M*y+E*F+v*q+S*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15],M=l*f-c*d,E=a*f-c*u,v=a*d-l*u,S=o*f-c*h,b=o*d-l*h,A=o*u-a*h;return e*(x*M-g*E+p*v)-n*(m*M-g*S+p*b)+i*(m*E-x*S+p*A)-r*(m*v-x*b+g*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=e*a-n*o,E=e*l-i*o,v=e*c-r*o,S=n*l-i*a,b=n*c-r*a,A=i*c-r*l,_=h*x-u*m,y=h*g-d*m,C=h*p-f*m,L=u*g-d*x,D=u*p-f*x,F=d*p-f*g,H=M*F-E*D+v*L+S*C-b*y+A*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return t[0]=(a*F-l*D+c*L)*O,t[1]=(i*D-n*F-r*L)*O,t[2]=(x*A-g*b+p*S)*O,t[3]=(d*b-u*A-f*S)*O,t[4]=(l*C-o*F-c*y)*O,t[5]=(e*F-i*C+r*y)*O,t[6]=(g*v-m*A-p*E)*O,t[7]=(h*A-d*v+f*E)*O,t[8]=(o*D-a*C+c*_)*O,t[9]=(n*C-e*D-r*_)*O,t[10]=(m*b-x*v+p*M)*O,t[11]=(u*v-h*b-f*M)*O,t[12]=(a*y-o*L-l*_)*O,t[13]=(e*L-n*y+i*_)*O,t[14]=(x*E-m*S-g*M)*O,t[15]=(h*S-u*E+d*M)*O,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=l*c,E=l*h,v=l*u,S=n.x,b=n.y,A=n.z;return i[0]=(1-(x+p))*S,i[1]=(f+v)*S,i[2]=(m-E)*S,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(d+p))*b,i[6]=(g+M)*b,i[7]=0,i[8]=(m+E)*A,i[9]=(g-M)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Qi.set(i[0],i[1],i[2]).length();const a=Qi.set(i[4],i[5],i[6]).length(),l=Qi.set(i[8],i[9],i[10]).length();r<0&&(o=-o),An.copy(this);const c=1/o,h=1/a,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Wn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Wn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===xr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Wn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Wn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===xr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Vo.prototype.isMatrix4=!0;let Jt=Vo;const Qi=new U,An=new Jt,cp=new U(0,0,0),hp=new U(1,1,1),mi=new U,Rr=new U,cn=new U,Yc=new Jt,$c=new ve;class En{constructor(t=0,e=0,n=0,i=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class sc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let up=0;const Kc=new U,ji=new ve,$n=new Jt,Cr=new U,Fs=new U,fp=new U,dp=new ve,Zc=new U(1,0,0),Jc=new U(0,1,0),Qc=new U(0,0,1),jc={type:"added"},pp={type:"removed"},ts={type:"childadded",child:null},aa={type:"childremoved",child:null};class Ne extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new U,e=new En,n=new ve,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Kt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Zc,t)}rotateY(t){return this.rotateOnAxis(Jc,t)}rotateZ(t){return this.rotateOnAxis(Qc,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zc,t)}translateY(t){return this.translateOnAxis(Jc,t)}translateZ(t){return this.translateOnAxis(Qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cr.copy(t):Cr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Fs,Cr,this.up):$n.lookAt(Cr,Fs,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ji.setFromRotationMatrix($n),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),ts.child=t,this.dispatchEvent(ts),ts.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pp),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,fp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new U(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class De extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mp={type:"move"};class la{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function ca(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=nc(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ca(o,r,t+1/3),this.g=ca(o,r,t),this.b=ca(o,r,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=nf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return oe.workingToColorSpace(Ke.copy(this),t),Math.round(ie(Ke.r*255,0,255))*65536+Math.round(ie(Ke.g*255,0,255))*256+Math.round(ie(Ke.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,r=Ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ue){oe.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Lr);const n=cr(gi.h,Lr.h,e),i=cr(gi.s,Lr.s,e),r=cr(gi.l,Lr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new kt;kt.NAMES=nf;class rc extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Rn=new U,Kn=new U,ha=new U,Zn=new U,es=new U,ns=new U,th=new U,ua=new U,fa=new U,da=new U,pa=new _e,ma=new _e,ga=new _e;class Mn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Rn.subVectors(t,e),i.cross(Rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Rn.subVectors(i,e),Kn.subVectors(n,e),ha.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(Kn),l=Rn.dot(ha),c=Kn.dot(Kn),h=Kn.dot(ha),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return pa.setScalar(0),ma.setScalar(0),ga.setScalar(0),pa.fromBufferAttribute(t,e),ma.fromBufferAttribute(t,n),ga.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(pa,r.x),o.addScaledVector(ma,r.y),o.addScaledVector(ga,r.z),o}static isFrontFacing(t,e,n,i){return Rn.subVectors(n,e),Kn.subVectors(t,e),Rn.cross(Kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Rn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;es.subVectors(i,n),ns.subVectors(r,n),ua.subVectors(t,n);const l=es.dot(ua),c=ns.dot(ua);if(l<=0&&c<=0)return e.copy(n);fa.subVectors(t,i);const h=es.dot(fa),u=ns.dot(fa);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(es,o);da.subVectors(t,r);const f=es.dot(da),m=ns.dot(da);if(m>=0&&f<=m)return e.copy(r);const x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ns,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return th.subVectors(r,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(th,a);const p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class qi{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Ir.subVectors(this.max,zs),is.subVectors(t.a,zs),ss.subVectors(t.b,zs),rs.subVectors(t.c,zs),xi.subVectors(ss,is),vi.subVectors(rs,ss),Ii.subVectors(is,rs);let e=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Ii.z,Ii.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Ii.z,0,-Ii.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Ii.y,Ii.x,0];return!xa(e,is,ss,rs,Ir)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,is,ss,rs,Ir))?!1:(Dr.crossVectors(xi,vi),e=[Dr.x,Dr.y,Dr.z],xa(e,is,ss,rs,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Jn=[new U,new U,new U,new U,new U,new U,new U,new U],Cn=new U,Pr=new qi,is=new U,ss=new U,rs=new U,xi=new U,vi=new U,Ii=new U,zs=new U,Ir=new U,Dr=new U,Di=new U;function xa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Di.fromArray(s,r);const a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ri=gp();function gp(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function xp(s){Math.abs(s)>65504&&qt("DataUtils.toHalfFloat(): Value out of range."),s=ie(s,-65504,65504),ri.floatView[0]=s;const t=ri.uint32View[0],e=t>>23&511;return ri.baseTable[e]+((t&8388607)>>ri.shiftTable[e])}function vp(s){const t=s>>10;return ri.uint32View[0]=ri.mantissaTable[ri.offsetTable[t]+(s&1023)]+ri.exponentTable[t],ri.floatView[0]}class _p{static toHalfFloat(t){return xp(t)}static fromHalfFloat(t){return vp(t)}}const Ie=new U,Ur=new Bt;let Mp=0;class Sn extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ju,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ur.fromBufferAttribute(this,e),Ur.applyMatrix3(t),this.setXY(e,Ur.x,Ur.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class sf extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class rf extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const yp=new qi,Os=new U,va=new U;class Yi{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);const e=Os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Os,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(va)),this.expandByPoint(Os.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Sp=0;const gn=new Jt,_a=new Ne,os=new U,hn=new qi,ks=new qi,Oe=new U;class Ae extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zd(t)?rf:sf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(hn.min,ks.min),hn.expandByPoint(Oe),Oe.addVectors(hn.max,ks.max),hn.expandByPoint(Oe)):(hn.expandByPoint(ks.min),hn.expandByPoint(ks.max))}hn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(os.fromBufferAttribute(t,c),Oe.add(os)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new U,l[_]=new U;const c=new U,h=new U,u=new U,d=new Bt,f=new Bt,m=new Bt,x=new U,g=new U;function p(_,y,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,C),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),a[_].add(x),a[y].add(x),a[C].add(x),l[_].add(g),l[y].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,y=M.length;_<y;++_){const C=M[_],L=C.start,D=C.count;for(let F=L,H=L+D;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new U,v=new U,S=new U,b=new U;function A(_){S.fromBufferAttribute(i,_),b.copy(S);const y=a[_];E.copy(y),E.sub(S.multiplyScalar(S.dot(y))).normalize(),v.crossVectors(b,y);const L=v.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,y=M.length;_<y;++_){const C=M[_],L=C.start,D=C.count;for(let F=L,H=L+D;F<H;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Sn(d,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ju,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Je=new U;class To{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new To(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ma=new U,bp=new U,Ep=new Kt;class ni{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ma.subVectors(n,e).cross(bp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Ma),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ep.getNormalMatrix(t),i=this.coplanarPoint(Ma).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Tp=0;class $i extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=ar,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ou,this.blendDst=ku,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ld,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ni().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class of extends $i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const Bs=new U,ls=new U,cs=new U,hs=new Bt,Hs=new Bt,af=new Jt,Nr=new U,Gs=new U,Fr=new U,eh=new Bt,ya=new Bt,nh=new Bt;class Ap extends Ne{constructor(t=new of){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wp(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new To(n,3,0,!1)),as.setAttribute("uv",new To(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new Bt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ae('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),af.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;zr(Nr.set(-.5,-.5,0),cs,o,ls,i,r),zr(Gs.set(.5,-.5,0),cs,o,ls,i,r),zr(Fr.set(.5,.5,0),cs,o,ls,i,r),eh.set(0,0),ya.set(1,0),nh.set(1,1);let a=t.ray.intersectTriangle(Nr,Gs,Fr,!1,Bs);if(a===null&&(zr(Gs.set(-.5,.5,0),cs,o,ls,i,r),ya.set(0,1),a=t.ray.intersectTriangle(Nr,Fr,Gs,!1,Bs),a===null))return;const l=t.ray.origin.distanceTo(Bs);l<t.near||l>t.far||e.push({distance:l,point:Bs.clone(),uv:Mn.getInterpolation(Bs,Nr,Gs,Fr,eh,ya,nh,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zr(s,t,e,n,i,r){hs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Hs.x=r*hs.x-i*hs.y,Hs.y=i*hs.x+r*hs.y):Hs.copy(hs),s.copy(t),s.x+=Hs.x,s.y+=Hs.y,s.applyMatrix4(af)}const Qn=new U,Sa=new U,Or=new U,kr=new U;class oc{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Sa.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),kr.copy(this.origin).sub(Sa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Or),a=kr.dot(this.direction),l=-kr.dot(Or),c=kr.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sa).addScaledVector(Or,d),f}intersectSphere(t,e){if(t.radius<0)return null;Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,E=n.z-o.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(h);let A,_,y,C,L,D,F,H,O,Z,q,j;if(v>=S&&v>=b?(y=l,D=u,O=m,j=p,l>=0?(A=c,_=h,C=d,L=f,F=x,H=g,Z=M,q=E):(A=h,_=c,C=f,L=d,F=g,H=x,Z=E,q=M)):S>=b?(y=c,D=d,O=x,j=M,c>=0?(A=h,_=l,C=f,L=u,F=g,H=m,Z=E,q=p):(A=l,_=h,C=u,L=f,F=m,H=g,Z=p,q=E)):(y=h,D=f,O=g,j=E,h>=0?(A=l,_=c,C=u,L=d,F=m,H=x,Z=p,q=M):(A=c,_=l,C=d,L=u,F=x,H=m,Z=M,q=p)),y===0)return null;const G=A/y,K=_/y,it=1/y,ut=C-G*D,N=L-K*D,X=F-G*O,k=H-K*O,B=Z-G*j,R=q-K*j,I=B*k-R*X,V=ut*R-N*B,Q=X*N-k*ut;if(i){if(I<0||V<0||Q<0)return null}else if((I<0||V<0||Q<0)&&(I>0||V>0||Q>0))return null;const nt=I+V+Q;if(nt===0)return null;const dt=it*(I*D+V*O+Q*j);return(nt>0?dt<0:dt>0)?null:this.at(dt/nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ih=new Jt,Ui=new oc,Br=new Yi,sh=new U,Hr=new U,Gr=new U,Vr=new U,wa=new U,Wr=new U,rh=new U,Xr=new U;class be extends Ne{constructor(t=new Ae,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(wa.fromBufferAttribute(u,t),o?Wr.addScaledVector(wa,h):Wr.addScaledVector(wa.sub(e),h))}e.add(Wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(Br.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Br,sh)===null||Ui.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,S=E;v<S;v+=3){const b=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);i=qr(this,p,t,n,c,h,u,b,A,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const M=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);i=qr(this,o,t,n,c,h,u,M,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,S=E;v<S;v+=3){const b=v,A=v+1,_=v+2;i=qr(this,p,t,n,c,h,u,b,A,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){const M=g,E=g+1,v=g+2;i=qr(this,o,t,n,c,h,u,M,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Rp(s,t,e,n,i,r,o,a){let l;if(t.side===ln?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Hi,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Xr);return c<e.near||c>e.far?null:{distance:c,point:Xr.clone(),object:s}}function qr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Hr),s.getVertexPosition(l,Gr),s.getVertexPosition(c,Vr);const h=Rp(s,t,e,n,Hr,Gr,Vr,rh);if(h){const u=new U;Mn.getBarycoord(rh,Hr,Gr,Vr,u),i&&(h.uv=Mn.getInterpolatedAttribute(i,a,l,c,u,new Bt)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,l,c,u,new Bt)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Mn.getNormal(Hr,Gr,Vr,d.normal),h.face=d,h.barycoord=u}return h}class Ls extends qe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=He,h=He,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oh extends Sn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const us=new Jt,ah=new Jt,Yr=[],lh=new qi,Cp=new Jt,Vs=new be,Ws=new Yi;class xo extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),lh.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(lh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Ws.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),ah.multiplyMatrices(n,us),Vs.matrixWorld=ah,Vs.raycast(t,Yr);for(let o=0,a=Yr.length;o<a;o++){const l=Yr[o];l.instanceId=r,l.object=this,e.push(l)}Yr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new oh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ls(new Float32Array(i*this.count),i,this.count,Xo,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ni=new Yi,Lp=new Bt(.5,.5),$r=new U;class ac{constructor(t=new ni,e=new ni,n=new ni,i=new ni,r=new ni,o=new ni){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],E=r[13],v=r[14],S=r[15];if(i[0].setComponents(c-o,f-h,p-m,S-M).normalize(),i[1].setComponents(c+o,f+h,p+m,S+M).normalize(),i[2].setComponents(c+a,f+u,p+x,S+E).normalize(),i[3].setComponents(c-a,f-u,p-x,S-E).normalize(),n)i[4].setComponents(l,d,g,v).normalize(),i[5].setComponents(c-l,f-d,p-g,S-v).normalize();else if(i[4].setComponents(c-l,f-d,p-g,S-v).normalize(),e===Wn)i[5].setComponents(c+l,f+d,p+g,S+v).normalize();else if(e===xr)i[5].setComponents(l,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);const e=Lp.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if($r.x=i.normal.x>0?t.max.x:t.min.x,$r.y=i.normal.y>0?t.max.y:t.min.y,$r.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint($r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lf extends $i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ao=new U,Ro=new U,ch=new Jt,Xs=new oc,Kr=new Yi,ba=new U,hh=new U;class Pp extends Ne{constructor(t=new Ae,e=new lf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ao.fromBufferAttribute(e,i-1),Ro.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ao.distanceTo(Ro);t.setAttribute("lineDistance",new Yt(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;ch.copy(i).invert(),Xs.copy(t.ray).applyMatrix4(ch);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=h.getX(x),M=h.getX(x+1),E=Zr(this,t,Xs,l,p,M,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(f),p=Zr(this,t,Xs,l,x,g,m-1);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=c){const p=Zr(this,t,Xs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=Zr(this,t,Xs,l,m-1,f,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Ao.fromBufferAttribute(a,i),Ro.fromBufferAttribute(a,r),e.distanceSqToSegment(Ao,Ro,ba,hh)>n)return;ba.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ba);if(!(c<t.near||c>t.far))return{distance:c,point:hh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const uh=new U,fh=new U;class Ip extends Pp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)uh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uh.distanceTo(fh);t.setAttribute("lineDistance",new Yt(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cf extends qe{constructor(t=[],e=Gi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class br extends qe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mr extends qe{constructor(t,e,n=Yn,i,r,o,a=He,l=He,c,h=ui,u=1){if(h!==ui&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ic(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Dp extends Mr{constructor(t,e=Yn,n=Gi,i,r,o=He,a=He,l,c=ui){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hf extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class wn extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function m(x,g,p,M,E,v,S,b,A,_,y){const C=v/A,L=S/_,D=v/2,F=S/2,H=b/2,O=A+1,Z=_+1;let q=0,j=0;const G=new U;for(let K=0;K<Z;K++){const it=K*L-F;for(let ut=0;ut<O;ut++){const N=ut*C-D;G[x]=N*M,G[g]=it*E,G[p]=H,c.push(G.x,G.y,G.z),G[x]=0,G[g]=0,G[p]=b>0?1:-1,h.push(G.x,G.y,G.z),u.push(ut/A),u.push(1-K/_),q+=1}}for(let K=0;K<_;K++)for(let it=0;it<A;it++){const ut=d+it+O*K,N=d+it+O*(K+1),X=d+(it+1)+O*(K+1),k=d+(it+1)+O*K;l.push(ut,N,k),l.push(N,X,k),j+=6}a.addGroup(f,j,y),f+=j,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class hr extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new U,h=new Bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Un extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*d-o;for(let E=0;E<c;E++){const v=E*u-r;m.push(v,-M,0),x.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const E=M+c*p,v=M+c*(p+1),S=M+1+c*(p+1),b=M+1+c*p;f.push(E,v,b),f.push(v,S,b)}this.setIndex(f),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.width,t.height,t.widthSegments,t.heightSegments)}}function Ps(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(dh(i))i.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(dh(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function je(s){const t={};for(let e=0;e<s.length;e++){const n=Ps(s[e]);for(const i in n)t[i]=n[i]}return t}function dh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Up(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Np={clone:Ps,merge:je};var Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ve extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=Up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Op extends Ve{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Co extends $i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ql,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class kp extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bp extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ea={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(ph(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!ph(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ph(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Hp{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Gp=new Hp;class lc{constructor(t){this.manager=t!==void 0?t:Gp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}lc.DEFAULT_MATERIAL_NAME="__DEFAULT";const fs=new WeakMap;class Vp extends lc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ea.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=fs.get(o);u===void 0&&(u=[],fs.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=vr("img");function l(){h(),e&&e(this);const u=fs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}fs.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Ea.remove(`image:${t}`);const d=fs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}fs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ea.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Nl extends lc{constructor(t){super(t)}load(t,e,n,i){const r=new qe,o=new Vp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ff extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Wp extends ff{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ta=new Jt,mh=new U,gh=new U;class Xp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ta,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===xr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jr=new U,Qr=new ve,zn=new U;class df extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jr,Qr,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Qr,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jr,Qr,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,Qr,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _i=new U,xh=new Bt,vh=new Bt;class en extends df{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,xh,vh),e.subVectors(vh,xh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class qo extends df{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class qp extends Xp{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yp extends ff{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new qp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ds=-90,ps=1;class $p extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new en(ds,ps,t,e);i.layers=this.layers,this.add(i);const r=new en(ds,ps,t,e);r.layers=this.layers,this.add(r);const o=new en(ds,ps,t,e);o.layers=this.layers,this.add(o);const a=new en(ds,ps,t,e);a.layers=this.layers,this.add(a);const l=new en(ds,ps,t,e);l.layers=this.layers,this.add(l);const c=new en(ds,ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kp extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const _h=new Jt;class Lo{constructor(t,e,n=0,i=1/0){this.ray=new oc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _h.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_h),this}intersectObject(t,e=!0,n=[]){return Fl(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Fl(t[i],this,n,e);return n.sort(Mh),n}}function Mh(s,t){return s.distance-t.distance}function Fl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Fl(r[o],t,e,!0)}}const Ac=class Ac{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Ac.prototype.isMatrix2=!0;let yh=Ac;function Sh(s,t,e,n){const i=Zp(n);switch(e){case Ju:return s*t;case Xo:return s*t/i.components*i.byteLength;case Jl:return s*t/i.components*i.byteLength;case Vi:return s*t*2/i.components*i.byteLength;case Ql:return s*t*2/i.components*i.byteLength;case Qu:return s*t*3/i.components*i.byteLength;case pn:return s*t*4/i.components*i.byteLength;case jl:return s*t*4/i.components*i.byteLength;case fo:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case mo:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rl:case al:return Math.max(s,16)*Math.max(t,8)/4;case sl:case ol:return Math.max(s,8)*Math.max(t,8)/2;case ll:case cl:case ul:case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hl:case yo:case dl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case vl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Tl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Cl:case Ll:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Pl:case Il:return Math.ceil(s/4)*Math.ceil(t/4)*8;case So:case Dl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zp(s){switch(s){case an:case Yu:return{byteLength:1,components:1};case mr:case $u:case bn:return{byteLength:2,components:1};case Kl:case Zl:return{byteLength:2,components:4};case Yn:case $l:case Dn:return{byteLength:4,components:1};case Ku:case Zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Jp(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,am=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,um=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,wm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Wm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Km=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,e0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,og=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
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
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,xg=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,yg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Eg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
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
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:Qp,alphahash_pars_fragment:jp,alphamap_fragment:tm,alphamap_pars_fragment:em,alphatest_fragment:nm,alphatest_pars_fragment:im,aomap_fragment:sm,aomap_pars_fragment:rm,batching_pars_vertex:om,batching_vertex:am,begin_vertex:lm,beginnormal_vertex:cm,bsdfs:hm,iridescence_fragment:um,bumpmap_pars_fragment:fm,clipping_planes_fragment:dm,clipping_planes_pars_fragment:pm,clipping_planes_pars_vertex:mm,clipping_planes_vertex:gm,color_fragment:xm,color_pars_fragment:vm,color_pars_vertex:_m,color_vertex:Mm,common:ym,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:wm,displacementmap_pars_vertex:bm,displacementmap_vertex:Em,emissivemap_fragment:Tm,emissivemap_pars_fragment:Am,colorspace_fragment:Rm,colorspace_pars_fragment:Cm,envmap_fragment:Lm,envmap_common_pars_fragment:Pm,envmap_pars_fragment:Im,envmap_pars_vertex:Dm,envmap_physical_pars_fragment:Wm,envmap_vertex:Um,fog_vertex:Nm,fog_pars_vertex:Fm,fog_fragment:zm,fog_pars_fragment:Om,gradientmap_pars_fragment:km,lightmap_pars_fragment:Bm,lights_lambert_fragment:Hm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Vm,lights_toon_fragment:Xm,lights_toon_pars_fragment:qm,lights_phong_fragment:Ym,lights_phong_pars_fragment:$m,lights_physical_fragment:Km,lights_physical_pars_fragment:Zm,lights_fragment_begin:Jm,lights_fragment_maps:Qm,lights_fragment_end:jm,lightprobes_pars_fragment:t0,logdepthbuf_fragment:e0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:o0,map_particle_fragment:a0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:f0,morphnormal_vertex:d0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:x0,normal_pars_fragment:v0,normal_pars_vertex:_0,normal_vertex:M0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:w0,clearcoat_pars_fragment:b0,iridescence_pars_fragment:E0,opaque_fragment:T0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:L0,dithering_pars_fragment:P0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:N0,shadowmap_vertex:F0,shadowmask_pars_fragment:z0,skinbase_vertex:O0,skinning_pars_vertex:k0,skinning_vertex:B0,skinnormal_vertex:H0,specularmap_fragment:G0,specularmap_pars_fragment:V0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:$0,uv_pars_vertex:K0,uv_vertex:Z0,worldpos_vertex:J0,background_vert:Q0,background_frag:j0,backgroundCube_vert:tg,backgroundCube_frag:eg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distance_vert:og,distance_frag:ag,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:fg,meshbasic_frag:dg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:xg,meshnormal_vert:vg,meshnormal_frag:_g,meshphong_vert:Mg,meshphong_frag:yg,meshphysical_vert:Sg,meshphysical_frag:wg,meshtoon_vert:bg,meshtoon_frag:Eg,points_vert:Tg,points_frag:Ag,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Lg,sprite_frag:Pg},wt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Hn={basic:{uniforms:je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:je([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:je([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:je([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:je([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:je([wt.points,wt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:je([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:je([wt.common,wt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:je([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:je([wt.sprite,wt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:je([wt.common,wt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:je([wt.lights,wt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Hn.physical={uniforms:je([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const jr={r:0,b:0,g:0},Ig=new Jt,mf=new Kt;mf.set(-1,0,0,0,1,0,0,0,1);function Dg(s,t,e,n,i,r){const o=new kt(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const v=M.backgroundBlurriness>0;E=t.get(E,v)}return E}function m(M){let E=!1;const v=f(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),E=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,E){const v=f(E);v&&(v.isCubeTexture||v.mapping===Wo)?(c===void 0&&(c=new be(new wn(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Ps(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(mf),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new be(new Un(2,2),new Ve({name:"BackgroundMaterial",uniforms:Ps(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(jr,uf(s)),e.buffers.color.setClear(jr.r,jr.g,jr.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Ug(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(L,D,F,H,O){let Z=!1;const q=u(L,H,F,D);r!==q&&(r=q,c(r.object)),Z=f(L,H,F,O),Z&&m(L,H,F,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(L,D,F,H),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function u(L,D,F,H){const O=H.wireframe===!0;let Z=n[D.id];Z===void 0&&(Z={},n[D.id]=Z);const q=L.isInstancedMesh===!0?L.id:0;let j=Z[q];j===void 0&&(j={},Z[q]=j);let G=j[F.id];G===void 0&&(G={},j[F.id]=G);let K=G[O];return K===void 0&&(K=d(l()),G[O]=K),K}function d(L){const D=[],F=[],H=[];for(let O=0;O<e;O++)D[O]=0,F[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:H,object:L,attributes:{},index:null}}function f(L,D,F,H){const O=r.attributes,Z=D.attributes;let q=0;const j=F.getAttributes();for(const G in j)if(j[G].location>=0){const it=O[G];let ut=Z[G];if(ut===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ut=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ut=L.instanceColor)),it===void 0||it.attribute!==ut||ut&&it.data!==ut.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function m(L,D,F,H){const O={},Z=D.attributes;let q=0;const j=F.getAttributes();for(const G in j)if(j[G].location>=0){let it=Z[G];it===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));const ut={};ut.attribute=it,it&&it.data&&(ut.data=it.data),O[G]=ut,q++}r.attributes=O,r.attributesNum=q,r.index=H}function x(){const L=r.newAttributes;for(let D=0,F=L.length;D<F;D++)L[D]=0}function g(L){p(L,0)}function p(L,D){const F=r.newAttributes,H=r.enabledAttributes,O=r.attributeDivisors;F[L]=1,H[L]===0&&(s.enableVertexAttribArray(L),H[L]=1),O[L]!==D&&(s.vertexAttribDivisor(L,D),O[L]=D)}function M(){const L=r.newAttributes,D=r.enabledAttributes;for(let F=0,H=D.length;F<H;F++)D[F]!==L[F]&&(s.disableVertexAttribArray(F),D[F]=0)}function E(L,D,F,H,O,Z,q){q===!0?s.vertexAttribIPointer(L,D,F,O,Z):s.vertexAttribPointer(L,D,F,H,O,Z)}function v(L,D,F,H){x();const O=H.attributes,Z=F.getAttributes(),q=D.defaultAttributeValues;for(const j in Z){const G=Z[j];if(G.location>=0){let K=O[j];if(K===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){const it=K.normalized,ut=K.itemSize,N=t.get(K);if(N===void 0)continue;const X=N.buffer,k=N.type,B=N.bytesPerElement,R=k===s.INT||k===s.UNSIGNED_INT||K.gpuType===$l;if(K.isInterleavedBufferAttribute){const I=K.data,V=I.stride,Q=K.offset;if(I.isInstancedInterleavedBuffer){for(let nt=0;nt<G.locationSize;nt++)p(G.location+nt,I.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let nt=0;nt<G.locationSize;nt++)g(G.location+nt);s.bindBuffer(s.ARRAY_BUFFER,X);for(let nt=0;nt<G.locationSize;nt++)E(G.location+nt,ut/G.locationSize,k,it,V*B,(Q+ut/G.locationSize*nt)*B,R)}else{if(K.isInstancedBufferAttribute){for(let I=0;I<G.locationSize;I++)p(G.location+I,K.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let I=0;I<G.locationSize;I++)g(G.location+I);s.bindBuffer(s.ARRAY_BUFFER,X);for(let I=0;I<G.locationSize;I++)E(G.location+I,ut/G.locationSize,k,it,ut*B,ut/G.locationSize*I*B,R)}}else if(q!==void 0){const it=q[j];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(G.location,it);break;case 3:s.vertexAttrib3fv(G.location,it);break;case 4:s.vertexAttrib4fv(G.location,it);break;default:s.vertexAttrib1fv(G.location,it)}}}}M()}function S(){y();for(const L in n){const D=n[L];for(const F in D){const H=D[F];for(const O in H){const Z=H[O];for(const q in Z)h(Z[q].object),delete Z[q];delete H[O]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const F in D){const H=D[F];for(const O in H){const Z=H[O];for(const q in Z)h(Z[q].object),delete Z[q];delete H[O]}}delete n[L.id]}function A(L){for(const D in n){const F=n[D];for(const H in F){const O=F[H];if(O[L.id]===void 0)continue;const Z=O[L.id];for(const q in Z)h(Z[q].object),delete Z[q];delete O[L.id]}}}function _(L){for(const D in n){const F=n[D],H=L.isInstancedMesh===!0?L.id:0,O=F[H];if(O!==void 0){for(const Z in O){const q=O[Z];for(const j in q)h(q[j].object),delete q[j];delete O[Z]}delete F[H],Object.keys(F).length===0&&delete n[D]}}}function y(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:y,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Ng(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==pn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==an&&A!==Dn&&!_&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:S,samples:b}}function zg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ni,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,E=M*4;let v=p.clippingState||null;l.value=v,v=h(m,d,E,f);for(let S=0;S!==E;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=f;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const ws=4,Og=6,kg=20,Bg=256,qs=new qo,wh=new kt;let Aa=null,Ra=0,Ca=0,La=!1;const Hg=new U,Fi=new U;class bh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Hg}=r;Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=La,t.scissorTest=!1,ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:bn,format:pn,colorSpace:wo,depthBuffer:!1},i=Eh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gg(r)),this._blurMaterial=Wg(r,t,e),this._ggxMaterial=Vg(r,t,e)}return i}_compileMaterial(t){const e=new be(new Ae,t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,n,i,r){const l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(wh),u.toneMapping=qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new be(new wn,new Xn({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(wh),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const S=this._cubeSize;ms(i,v*S,E>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gi||t.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ms(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-ws?n-m+ws:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,ms(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(a,qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,ms(t,g,p,3*x,2*x),i.setRenderTarget(t),i.render(a,qs)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-ws?i-this._lodMax+ws:0),d=4*(this._cubeSize-h);ms(e,u,d,3*h,2*h),o.setRenderTarget(e),o.render(l,qs)}}function Gg(s){const t=[],e=[];let n=s;const i=s-ws+1+Og;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){const M=p%3*2/3-1,E=p>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(v,f*d*p);for(let S=0;S<d;S++){const b=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?Fi.set(1,A,b):p===1?Fi.set(-b,1,-A):p===2?Fi.set(-b,A,1):p===3?Fi.set(-1,A,-b):p===4?Fi.set(-b,-1,A):Fi.set(b,A,-1),Fi.toArray(x,(p*d+S)*f)}}const g=new Ae;g.setAttribute("position",new Sn(m,f)),g.setAttribute("outputDirection",new Sn(x,f)),e.push(new be(g,null)),n>ws&&n--}return{lodMeshes:e,sizeLods:t}}function Eh(s,t,e){const n=new yn(s,t,e);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Vg(s,t,e){return new Ve({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Wg(s,t,e){return new Ve({name:"SphericalGaussianBlur",defines:{SAMPLES:kg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Yo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Th(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Ah(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function Yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gf extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new wn(5,5,5),r=new Ve({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:li});r.uniforms.tEquirect.value=e;const o=new be(i,r),a=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Ge),new $p(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function Xg(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===jo||f===ta)if(t.has(d)){const m=t.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const x=new gf(m.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,m=f===jo||f===ta,x=f===Gi||f===Cs;if(m||x){let g=e.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new bh(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return m&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new bh(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,f){return f===jo?d.mapping=Gi:f===ta&&(d.mapping=Cs),d}function l(d){let f=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function qg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&As("WebGLRenderer: "+n+" extension not supported."),i}}}function Yg(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(m===void 0)return;if(f!==null){const M=f.array;x=f.version;for(let E=0,v=M.length;E<v;E+=3){const S=M[E+0],b=M[E+1],A=M[E+2];d.push(S,b,b,A,A,S)}}else{const M=m.array;x=m.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const S=E+0,b=E+1,A=E+2;d.push(S,b,b,A,A,S)}}const g=new(m.count>=65535?rf:sf)(d,1);g.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function $g(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let g=0;g<f;g++)x+=d[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Kg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zg(s,t,e){const n=new WeakMap,i=new _e;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let S=a.attributes.position.count*v,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*b*4*u),_=new ef(A,S,b,u);_.type=Dn,_.needsUpdate=!0;const y=v*4;for(let L=0;L<u;L++){const D=p[L],F=M[L],H=E[L],O=S*b*4*L;for(let Z=0;Z<D.count;Z++){const q=Z*y;m===!0&&(i.fromBufferAttribute(D,Z),A[O+q+0]=i.x,A[O+q+1]=i.y,A[O+q+2]=i.z,A[O+q+3]=0),x===!0&&(i.fromBufferAttribute(F,Z),A[O+q+4]=i.x,A[O+q+5]=i.y,A[O+q+6]=i.z,A[O+q+7]=0),g===!0&&(i.fromBufferAttribute(H,Z),A[O+q+8]=i.x,A[O+q+9]=i.y,A[O+q+10]=i.z,A[O+q+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new Bt(S,b)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Jg(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Qg={[Bu]:"LINEAR_TONE_MAPPING",[Hu]:"REINHARD_TONE_MAPPING",[Gu]:"CINEON_TONE_MAPPING",[Vu]:"ACES_FILMIC_TONE_MAPPING",[Xu]:"AGX_TONE_MAPPING",[Yl]:"NEUTRAL_TONE_MAPPING",[Wu]:"CUSTOM_TONE_MAPPING"};function jg(s,t,e,n,i,r){const o=new yn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ae;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const h=new Op({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new be(c,h),d=new qo(-1,1,1,-1,0,1);let f=null,m=null,x=!1,g,p=null,M=[],E=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<M.length;b++){const A=M[b];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;const S=o.width,b=o.height;M.length>0&&a===null&&(a=new yn(S,b,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new yn(S,b,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const _=M[A];_.setSize&&_.setSize(S,b)}},this.begin=function(v,S){if(x||v.toneMapping===qn&&M.length===0)return!1;if(p=S,S!==null){const b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return E===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=qn,!0},this.hasRenderPass=function(){return E},this.end=function(v,S){v.toneMapping=g,x=!0;let b=o,A=a;for(let _=0;_<M.length;_++){const y=M[_];y.enabled!==!1&&(y.render(v,A,b,S),y.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},oe.getTransfer(f)===pe&&(h.defines.SRGB_TRANSFER="");const _=Qg[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const xf=new qe,zl=new Mr(1,1),vf=new ef,_f=new lp,Mf=new cf,Rh=[],Ch=[],Lh=new Float32Array(16),Ph=new Float32Array(9),Ih=new Float32Array(4);function Us(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Rh[i];if(r===void 0&&(r=new Float32Array(i),Rh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function $o(s,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function tx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function ex(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function nx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function ix(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function sx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Ih.set(n),s.uniformMatrix2fv(this.addr,!1,Ih),ze(e,n)}}function rx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Ph.set(n),s.uniformMatrix3fv(this.addr,!1,Ph),ze(e,n)}}function ox(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Lh.set(n),s.uniformMatrix4fv(this.addr,!1,Lh),ze(e,n)}}function ax(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function lx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function cx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function hx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function ux(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function fx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function dx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function px(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function mx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zl.compareFunction=e.isReversedDepthBuffer()?ec:tc,r=zl):r=xf,e.setTexture2D(t||r,i)}function gx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_f,i)}function xx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Mf,i)}function vx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vf,i)}function _x(s){switch(s){case 5126:return tx;case 35664:return ex;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return lx;case 35668:case 35672:return cx;case 35669:case 35673:return hx;case 5125:return ux;case 36294:return fx;case 36295:return dx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return vx}}function Mx(s,t){s.uniform1fv(this.addr,t)}function yx(s,t){const e=Us(t,this.size,2);s.uniform2fv(this.addr,e)}function Sx(s,t){const e=Us(t,this.size,3);s.uniform3fv(this.addr,e)}function wx(s,t){const e=Us(t,this.size,4);s.uniform4fv(this.addr,e)}function bx(s,t){const e=Us(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ex(s,t){const e=Us(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tx(s,t){const e=Us(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ax(s,t){s.uniform1iv(this.addr,t)}function Rx(s,t){s.uniform2iv(this.addr,t)}function Cx(s,t){s.uniform3iv(this.addr,t)}function Lx(s,t){s.uniform4iv(this.addr,t)}function Px(s,t){s.uniform1uiv(this.addr,t)}function Ix(s,t){s.uniform2uiv(this.addr,t)}function Dx(s,t){s.uniform3uiv(this.addr,t)}function Ux(s,t){s.uniform4uiv(this.addr,t)}function Nx(s,t,e){const n=this.cache,i=t.length,r=$o(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=zl:o=xf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Fx(s,t,e){const n=this.cache,i=t.length,r=$o(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||_f,r[o])}function zx(s,t,e){const n=this.cache,i=t.length,r=$o(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Mf,r[o])}function Ox(s,t,e){const n=this.cache,i=t.length,r=$o(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||vf,r[o])}function kx(s){switch(s){case 5126:return Mx;case 35664:return yx;case 35665:return Sx;case 35666:return wx;case 35674:return bx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Lx;case 5125:return Px;case 36294:return Ix;case 36295:return Dx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Ox}}class Bx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_x(e.type)}}class Hx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kx(e.type)}}class Gx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function Dh(s,t){s.seq.push(t),s.map[t.id]=t}function Vx(s,t,e){const n=s.name,i=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),o=Pa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Dh(e,c===void 0?new Bx(a,s,t):new Hx(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Gx(a),Dh(e,u)),e=u}}}class vo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Vx(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Uh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Wx=37297;let Xx=0;function qx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Nh=new Kt;function Yx(s){oe._getMatrix(Nh,oe.workingColorSpace,s);const t=`mat3( ${Nh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case bo:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Fh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+qx(s.getShaderSource(t),a)}else return r}function $x(s,t){const e=Yx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Kx={[Bu]:"Linear",[Hu]:"Reinhard",[Gu]:"Cineon",[Vu]:"ACESFilmic",[Xu]:"AgX",[Yl]:"Neutral",[Wu]:"Custom"};function Zx(s,t){const e=Kx[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const to=new U;function Jx(){oe.getLuminanceCoefficients(to);const s=to.x.toFixed(4),t=to.y.toFixed(4),e=to.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function jx(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tv(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function rr(s){return s!==""}function zh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(s){return s.replace(ev,iv)}const nv=new Map;function iv(s,t){let e=te[t];if(e===void 0){const n=nv.get(t);if(n!==void 0)e=te[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ol(e)}const sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kh(s){return s.replace(sv,rv)}function rv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ov={[uo]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function av(s){return ov[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lv={[Gi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function cv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":lv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const hv={[Cs]:"ENVMAP_MODE_REFRACTION"};function uv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fv={[ql]:"ENVMAP_BLENDING_MULTIPLY",[Ed]:"ENVMAP_BLENDING_MIX",[Td]:"ENVMAP_BLENDING_ADD"};function dv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":fv[s.combine]||"ENVMAP_BLENDING_NONE"}function pv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=av(e),c=cv(e),h=uv(e),u=dv(e),d=pv(e),f=Qx(e),m=jx(r),x=i.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(rr).join(`
`),p.length>0&&(p+=`
`)):(g=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),p=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?te.tonemapping_pars_fragment:"",e.toneMapping!==qn?Zx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,$x("linearToOutputTexel",e.outputColorSpace),Jx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rr).join(`
`)),o=Ol(o),o=zh(o,e),o=Oh(o,e),a=Ol(a),a=zh(a,e),a=Oh(a,e),o=kh(o),a=kh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+g+o,v=M+p+a,S=Uh(i,i.VERTEX_SHADER,E),b=Uh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,S),i.attachShader(x,b),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(L){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(S)||"",H=i.getShaderInfoLog(b)||"",O=D.trim(),Z=F.trim(),q=H.trim();let j=!0,G=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,b);else{const K=Fh(i,S,"vertex"),it=Fh(i,b,"fragment");ae("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+K+`
`+it)}else O!==""?qt("WebGLProgram: Program Info Log:",O):(Z===""||q==="")&&(G=!1);G&&(L.diagnostics={runnable:j,programLog:O,vertexShader:{log:Z,prefix:g},fragmentShader:{log:q,prefix:p}})}i.deleteShader(S),i.deleteShader(b),_=new vo(i,x),y=tv(i,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,Wx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}let gv=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vv(t),e.set(t,n)),n}}class vv{constructor(t){this.id=gv++,this.code=t,this.usedTimes=0}}function _v(s){return s===Vi||s===yo||s===So}function Mv(s,t,e,n,i,r){const o=new sc,a=new xv,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,y,C,L,D,F){const H=L.fog,O=D.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=t.get(_.envMap||Z,q),G=j&&j.mapping===Wo?j.image.height:null,K=f[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const it=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ut=it!==void 0?it.length:0;let N=0;O.morphAttributes.position!==void 0&&(N=1),O.morphAttributes.normal!==void 0&&(N=2),O.morphAttributes.color!==void 0&&(N=3);let X,k,B,R;if(K){const ye=Hn[K];X=ye.vertexShader,k=ye.fragmentShader}else{X=_.vertexShader,k=_.fragmentShader;const ye=a.getVertexShaderStage(_),fe=a.getFragmentShaderStage(_);a.update(_,ye,fe),B=ye.id,R=fe.id}const I=s.getRenderTarget(),V=s.state.buffers.depth.getReversed(),Q=D.isInstancedMesh===!0,nt=D.isBatchedMesh===!0,dt=!!_.map,gt=!!_.matcap,bt=!!j,zt=!!_.aoMap,Ot=!!_.lightMap,Wt=!!_.bumpMap&&_.wireframe===!1,le=!!_.normalMap,Ee=!!_.displacementMap,rt=!!_.emissiveMap,pt=!!_.metalnessMap,Pt=!!_.roughnessMap,W=_.anisotropy>0,he=_.clearcoat>0,ue=_.dispersion>0,z=_.retroreflectivity>0,w=_.iridescence>0,J=_.sheen>0,st=_.transmission>0,at=W&&!!_.anisotropyMap,mt=he&&!!_.clearcoatMap,xt=he&&!!_.clearcoatNormalMap,lt=he&&!!_.clearcoatRoughnessMap,ht=w&&!!_.iridescenceMap,vt=w&&!!_.iridescenceThicknessMap,Ht=J&&!!_.sheenColorMap,St=J&&!!_.sheenRoughnessMap,_t=!!_.specularMap,Gt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,Qt=st&&!!_.transmissionMap,$=st&&!!_.thicknessMap,Mt=!!_.gradientMap,ct=!!_.alphaMap,yt=_.alphaTest>0,At=!!_.alphaHash,ft=!!_.extensions;let Vt=qn;_.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const Nt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:k,defines:_.defines,customVertexShaderID:B,customFragmentShaderID:R,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:nt,batchingColor:nt&&D._colorsTexture!==null,instancing:Q,instancingColor:Q&&D.instanceColor!==null,instancingMorph:Q&&D.morphTexture!==null,outputColorSpace:I===null?s.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:dt,matcap:gt,envMap:bt,envMapMode:bt&&j.mapping,envMapCubeUVHeight:G,aoMap:zt,lightMap:Ot,bumpMap:Wt,normalMap:le,displacementMap:Ee,emissiveMap:rt,normalMapObjectSpace:le&&_.normalMapType===Cd,normalMapTangentSpace:le&&_.normalMapType===Ul,packedNormalMap:le&&_.normalMapType===Ul&&_v(_.normalMap.format),metalnessMap:pt,roughnessMap:Pt,anisotropy:W,anisotropyMap:at,clearcoat:he,clearcoatMap:mt,clearcoatNormalMap:xt,clearcoatRoughnessMap:lt,dispersion:ue,retroreflection:z,iridescence:w,iridescenceMap:ht,iridescenceThicknessMap:vt,sheen:J,sheenColorMap:Ht,sheenRoughnessMap:St,specularMap:_t,specularColorMap:Gt,specularIntensityMap:Xt,transmission:st,transmissionMap:Qt,thicknessMap:$,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===ar&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:yt,alphaHash:At,combine:_.combine,mapUv:dt&&m(_.map.channel),aoMapUv:zt&&m(_.aoMap.channel),lightMapUv:Ot&&m(_.lightMap.channel),bumpMapUv:Wt&&m(_.bumpMap.channel),normalMapUv:le&&m(_.normalMap.channel),displacementMapUv:Ee&&m(_.displacementMap.channel),emissiveMapUv:rt&&m(_.emissiveMap.channel),metalnessMapUv:pt&&m(_.metalnessMap.channel),roughnessMapUv:Pt&&m(_.roughnessMap.channel),anisotropyMapUv:at&&m(_.anisotropyMap.channel),clearcoatMapUv:mt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:xt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(_.sheenRoughnessMap.channel),specularMapUv:_t&&m(_.specularMap.channel),specularColorMapUv:Gt&&m(_.specularColorMap.channel),specularIntensityMapUv:Xt&&m(_.specularIntensityMap.channel),transmissionMapUv:Qt&&m(_.transmissionMap.channel),thicknessMapUv:$&&m(_.thicknessMap.channel),alphaMapUv:ct&&m(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(le||W),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(dt||ct),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:V,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:N,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:dt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:rt&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vn,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ft&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&_.extensions.multiDraw===!0||nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(y,_),M(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const y=f[_.type];let C;if(y){const L=Hn[y];C=Np.clone(L.uniforms)}else C=_.uniforms;return C}function v(_,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new mv(s,y,_,i),c.push(C),h.set(y,C)),C}function S(_){if(--_.usedTimes===0){const y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:A}}function yv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Sv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Hh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Gh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,m,x,g,p){let M=s[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},s[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=p),t++,M}function l(d,f,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);const E=a(d,f,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(d,f,m,x,g,p){const M=a(d,f,m,x,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||Sv),n.length>1&&n.sort(f||Hh),i.length>1&&i.sort(f||Hh)}function u(){for(let d=t,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function wv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Gh,s.set(n,[o])):i>=r.length?(o=new Gh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function bv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Ev(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Tv=0;function Av(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Rv(s){const t=new bv,e=Ev(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,r=new Jt,o=new Jt;function a(c){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,M=0,E=0,v=0,S=0,b=0,A=0,_=0,y=0,C=0;c.sort(Av);for(let D=0,F=c.length;D<F;D++){const H=c[D],O=H.color,Z=H.intensity,q=H.distance;let j=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Vi?j=H.shadow.map.texture:j=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)h+=O.r*Z,u+=O.g*Z,d+=O.b*Z;else if(H.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(H.sh.coefficients[G],Z);C++}else if(H.isSunLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,it=e.get(H);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=it,n.sunShadowMap[m]=j;const ut=K.getViewportCount();for(let N=0;N<ut;N++)n.sunShadowMatrix[x+N]=K.getMatrix(N),n.sunShadowCascade[x+N]=K._cascadeData[N];x+=ut,m++}n.sun[f]=G,f++}else if(H.isDirectionalLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,it=e.get(H);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,n.directionalShadow[g]=it,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=H.shadow.matrix,S++}n.directional[g]=G,g++}else if(H.isSpotLight){const G=t.get(H);G.position.setFromMatrixPosition(H.matrixWorld),G.color.copy(O).multiplyScalar(Z),G.distance=q,G.coneCos=Math.cos(H.angle),G.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),G.decay=H.decay,n.spot[M]=G;const K=H.shadow;if(H.map&&(n.spotLightMap[_]=H.map,_++,K.updateMatrices(H),H.castShadow&&y++),n.spotLightMatrix[M]=K.matrix,H.castShadow){const it=e.get(H);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,n.spotShadow[M]=it,n.spotShadowMap[M]=j,A++}M++}else if(H.isRectAreaLight){const G=t.get(H);G.color.copy(O).multiplyScalar(Z),G.halfWidth.set(H.width*.5,0,0),G.halfHeight.set(0,H.height*.5,0),n.rectArea[E]=G,E++}else if(H.isPointLight){const G=t.get(H);if(G.color.copy(H.color).multiplyScalar(H.intensity),G.distance=H.distance,G.decay=H.decay,H.castShadow){const K=H.shadow,it=e.get(H);it.shadowIntensity=K.intensity,it.shadowBias=K.bias,it.shadowNormalBias=K.normalBias,it.shadowRadius=K.radius,it.shadowMapSize=K.mapSize,it.shadowCameraNear=K.camera.near,it.shadowCameraFar=K.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=H.shadow.matrix,b++}n.point[p]=G,p++}else if(H.isHemisphereLight){const G=t.get(H);G.skyColor.copy(H.color).multiplyScalar(Z),G.groundColor.copy(H.groundColor).multiplyScalar(Z),n.hemi[v]=G,v++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=C,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=C,n.version=Tv++)}function l(c,h){let u=0,d=0,f=0,m=0,x=0,g=0;const p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const v=c[M];if(v.isSunLight){const S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),u++}else if(v.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(v.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Vh(s){const t=new Rv(s),e=[],n=[],i=[];function r(d){u.camera=d,e.length=0,n.length=0,i.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){i.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Cv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Vh(s),t.set(i,[a])):r>=o.length?(a=new Vh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Iv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Dv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Wh=new Jt,Ys=new U,Ia=new U;function Uv(s,t,e){let n=new ac;const i=new Bt,r=new Bt,o=new _e,a=new kp,l=new Bp,c={},h=e.maxTextureSize,u={[Hi]:ln,[ln]:Hi,[Vn]:Vn},d=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:Lv,fragmentShader:Pv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ae;m.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new be(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let p=this.type;this.render=function(b,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===od&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=uo);const y=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(li),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const F=p!==this.type;F&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(O=>O.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,O=b.length;H<O;H++){const Z=b[H],q=Z.shadow;if(q===void 0){qt("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const j=q.getFrameExtents();i.multiply(j),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,q.mapSize.y=r.y));const G=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=G,q.map===null||F===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===sr){if(Z.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new yn(i.x,i.y,{format:Vi,type:bn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Mr(i.x,i.y,Dn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=ui,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=He,q.map.depthTexture.magFilter=He}else Z.isPointLight?(q.map=new gf(i.x),q.map.depthTexture=new Dp(i.x,Yn)):(q.map=new yn(i.x,i.y),q.map.depthTexture=new Mr(i.x,i.y,Yn)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=ui,this.type===uo?(q.map.depthTexture.compareFunction=G?ec:tc,q.map.depthTexture.minFilter=Ge,q.map.depthTexture.magFilter=Ge):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=He,q.map.depthTexture.magFilter=He);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==i.x||q.map.height!==i.y)&&q.map.setSize(i.x,i.y);const K=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,_);for(let it=0;it<K;it++){const ut=q.getCamera(it);if(Z.isPointLight){const N=q.camera,X=q.matrix,k=Z.distance||N.far;k!==N.far&&(N.far=k,N.updateProjectionMatrix()),Ys.setFromMatrixPosition(Z.matrixWorld),N.position.copy(Ys),Ia.copy(N.position),Ia.add(Iv[it]),N.up.copy(Dv[it]),N.lookAt(Ia),N.updateMatrixWorld(),X.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Wh.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Wh,N.coordinateSystem,N.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,it),s.clear();else{it===0&&(s.setRenderTarget(q.map),s.clear());const N=q.getViewport(it);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),D.viewport(o)}n=q.getFrustum(it),v(A,_,ut,Z,this.type)}q.isPointLightShadow!==!0&&this.type===sr&&M(q,_),q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(y,C,L)};function M(b,A){const _=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new yn(i.x,i.y,{format:Vi,type:bn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,_,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,_,f,x,null)}function E(b,A,_,y){let C=null;const L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=C.uuid,F=A.uuid;let H=c[D];H===void 0&&(H={},c[D]=H);let O=H[F];O===void 0&&(O=C.clone(),H[F]=O,A.addEventListener("dispose",S)),C=O}if(C.visible=A.visible,C.wireframe=A.wireframe,y===sr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:u[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=s.properties.get(C);D.light=_}return C}function v(b,A,_,y,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===sr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const F=t.update(b),H=b.material;if(Array.isArray(H)){const O=F.groups;for(let Z=0,q=O.length;Z<q;Z++){const j=O[Z],G=H[j.materialIndex];if(G&&G.visible){const K=E(b,G,y,C);b.onBeforeShadow(s,b,A,_,F,K,j),s.renderBufferDirect(_,null,F,K,b,j),b.onAfterShadow(s,b,A,_,F,K,j)}}}else if(H.visible){const O=E(b,H,y,C);b.onBeforeShadow(s,b,A,_,F,O,null),s.renderBufferDirect(_,null,F,O,b,null),b.onAfterShadow(s,b,A,_,F,O,null)}}const D=b.children;for(let F=0,H=D.length;F<H;F++)v(D[F],A,_,y,C)}function S(b){b.target.removeEventListener("dispose",S);for(const _ in c){const y=c[_],C=b.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}function Nv(s,t){function e(){let $=!1;const Mt=new _e;let ct=null;const yt=new _e(0,0,0,0);return{setMask:function(At){ct!==At&&!$&&(s.colorMask(At,At,At,At),ct=At)},setLocked:function(At){$=At},setClear:function(At,ft,Vt,Nt,ye){ye===!0&&(At*=Nt,ft*=Nt,Vt*=Nt),Mt.set(At,ft,Vt,Nt),yt.equals(Mt)===!1&&(s.clearColor(At,ft,Vt,Nt),yt.copy(Mt))},reset:function(){$=!1,ct=null,yt.set(-1,0,0,0)}}}function n(){let $=!1,Mt=!1,ct=null,yt=null,At=null;return{setReversed:function(ft){if(Mt!==ft){const Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ft;const Nt=At;At=null,this.setClear(Nt)}},getReversed:function(){return Mt},setTest:function(ft){ft?I(s.DEPTH_TEST):V(s.DEPTH_TEST)},setMask:function(ft){ct!==ft&&!$&&(s.depthMask(ft),ct=ft)},setFunc:function(ft){if(Mt&&(ft=Bd[ft]),yt!==ft){switch(ft){case Ka:s.depthFunc(s.NEVER);break;case Za:s.depthFunc(s.ALWAYS);break;case Ja:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case Qa:s.depthFunc(s.EQUAL);break;case ja:s.depthFunc(s.GEQUAL);break;case tl:s.depthFunc(s.GREATER);break;case el:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=ft}},setLocked:function(ft){$=ft},setClear:function(ft){At!==ft&&(At=ft,Mt&&(ft=1-ft),s.clearDepth(ft))},reset:function(){$=!1,ct=null,yt=null,At=null,Mt=!1}}}function i(){let $=!1,Mt=null,ct=null,yt=null,At=null,ft=null,Vt=null,Nt=null,ye=null;return{setTest:function(fe){$||(fe?I(s.STENCIL_TEST):V(s.STENCIL_TEST))},setMask:function(fe){Mt!==fe&&!$&&(s.stencilMask(fe),Mt=fe)},setFunc:function(fe,Tn,Nn){(ct!==fe||yt!==Tn||At!==Nn)&&(s.stencilFunc(fe,Tn,Nn),ct=fe,yt=Tn,At=Nn)},setOp:function(fe,Tn,Nn){(ft!==fe||Vt!==Tn||Nt!==Nn)&&(s.stencilOp(fe,Tn,Nn),ft=fe,Vt=Tn,Nt=Nn)},setLocked:function(fe){$=fe},setClear:function(fe){ye!==fe&&(s.clearStencil(fe),ye=fe)},reset:function(){$=!1,Mt=null,ct=null,yt=null,At=null,ft=null,Vt=null,Nt=null,ye=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,v=null,S=null,b=null,A=null,_=new kt(0,0,0),y=0,C=!1,L=null,D=null,F=null,H=null,O=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=j>=2);let K=null,it={};const ut=s.getParameter(s.SCISSOR_BOX),N=s.getParameter(s.VIEWPORT),X=new _e().fromArray(ut),k=new _e().fromArray(N);function B($,Mt,ct,yt){const At=new Uint8Array(4),ft=s.createTexture();s.bindTexture($,ft),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<ct;Vt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Mt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Mt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return ft}const R={};R[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),R[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),R[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(s.DEPTH_TEST),o.setFunc(pr),Wt(!1),le(Oc),I(s.CULL_FACE),zt(li);function I($){h[$]!==!0&&(s.enable($),h[$]=!0)}function V($){h[$]!==!1&&(s.disable($),h[$]=!1)}function Q($,Mt){return d[$]!==Mt?(s.bindFramebuffer($,Mt),d[$]=Mt,$===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=Mt),$===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=Mt),!0):!1}function nt($,Mt){let ct=m,yt=!1;if($){ct=f.get(Mt),ct===void 0&&(ct=[],f.set(Mt,ct));const At=$.textures;if(ct.length!==At.length||ct[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Vt=At.length;ft<Vt;ft++)ct[ft]=s.COLOR_ATTACHMENT0+ft;ct.length=At.length,yt=!0}}else ct[0]!==s.BACK&&(ct[0]=s.BACK,yt=!0);yt&&s.drawBuffers(ct)}function dt($){return x!==$?(s.useProgram($),x=$,!0):!1}const gt={[ys]:s.FUNC_ADD,[ld]:s.FUNC_SUBTRACT,[cd]:s.FUNC_REVERSE_SUBTRACT};gt[hd]=s.MIN,gt[ud]=s.MAX;const bt={[fd]:s.ZERO,[dd]:s.ONE,[pd]:s.SRC_COLOR,[Ou]:s.SRC_ALPHA,[Md]:s.SRC_ALPHA_SATURATE,[vd]:s.DST_COLOR,[gd]:s.DST_ALPHA,[md]:s.ONE_MINUS_SRC_COLOR,[ku]:s.ONE_MINUS_SRC_ALPHA,[_d]:s.ONE_MINUS_DST_COLOR,[xd]:s.ONE_MINUS_DST_ALPHA,[yd]:s.CONSTANT_COLOR,[Sd]:s.ONE_MINUS_CONSTANT_COLOR,[wd]:s.CONSTANT_ALPHA,[bd]:s.ONE_MINUS_CONSTANT_ALPHA};function zt($,Mt,ct,yt,At,ft,Vt,Nt,ye,fe){if($===li){g===!0&&(V(s.BLEND),g=!1);return}if(g===!1&&(I(s.BLEND),g=!0),$!==ad){if($!==p||fe!==C){if((M!==ys||S!==ys)&&(s.blendEquation(s.FUNC_ADD),M=ys,S=ys),fe)switch($){case ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $a:s.blendFunc(s.ONE,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ae("WebGLState: Invalid blending: ",$);break}else switch($){case ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $a:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kc:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",$);break}E=null,v=null,b=null,A=null,_.set(0,0,0),y=0,p=$,C=fe}return}At=At||Mt,ft=ft||ct,Vt=Vt||yt,(Mt!==M||At!==S)&&(s.blendEquationSeparate(gt[Mt],gt[At]),M=Mt,S=At),(ct!==E||yt!==v||ft!==b||Vt!==A)&&(s.blendFuncSeparate(bt[ct],bt[yt],bt[ft],bt[Vt]),E=ct,v=yt,b=ft,A=Vt),(Nt.equals(_)===!1||ye!==y)&&(s.blendColor(Nt.r,Nt.g,Nt.b,ye),_.copy(Nt),y=ye),p=$,C=!1}function Ot($,Mt){$.side===Vn?V(s.CULL_FACE):I(s.CULL_FACE);let ct=$.side===ln;Mt&&(ct=!ct),Wt(ct),$.blending===ar&&$.transparent===!1?zt(li):zt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);const yt=$.stencilWrite;a.setTest(yt),yt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),rt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?I(s.SAMPLE_ALPHA_TO_COVERAGE):V(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt($){L!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),L=$)}function le($){$!==sd?(I(s.CULL_FACE),$!==D&&($===Oc?s.cullFace(s.BACK):$===rd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):V(s.CULL_FACE),D=$}function Ee($){$!==F&&(q&&s.lineWidth($),F=$)}function rt($,Mt,ct){$?(I(s.POLYGON_OFFSET_FILL),(H!==Mt||O!==ct)&&(H=Mt,O=ct,o.getReversed()&&(Mt=-Mt),s.polygonOffset(Mt,ct))):V(s.POLYGON_OFFSET_FILL)}function pt($){$?I(s.SCISSOR_TEST):V(s.SCISSOR_TEST)}function Pt($){$===void 0&&($=s.TEXTURE0+Z-1),K!==$&&(s.activeTexture($),K=$)}function W($,Mt,ct){ct===void 0&&(K===null?ct=s.TEXTURE0+Z-1:ct=K);let yt=it[ct];yt===void 0&&(yt={type:void 0,texture:void 0},it[ct]=yt),(yt.type!==$||yt.texture!==Mt)&&(K!==ct&&(s.activeTexture(ct),K=ct),s.bindTexture($,Mt||R[$]),yt.type=$,yt.texture=Mt)}function he(){const $=it[K];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function ue(){try{s.compressedTexImage2D(...arguments)}catch($){ae("WebGLState:",$)}}function z(){try{s.compressedTexImage3D(...arguments)}catch($){ae("WebGLState:",$)}}function w(){try{s.texSubImage2D(...arguments)}catch($){ae("WebGLState:",$)}}function J(){try{s.texSubImage3D(...arguments)}catch($){ae("WebGLState:",$)}}function st(){try{s.compressedTexSubImage2D(...arguments)}catch($){ae("WebGLState:",$)}}function at(){try{s.compressedTexSubImage3D(...arguments)}catch($){ae("WebGLState:",$)}}function mt(){try{s.texStorage2D(...arguments)}catch($){ae("WebGLState:",$)}}function xt(){try{s.texStorage3D(...arguments)}catch($){ae("WebGLState:",$)}}function lt(){try{s.texImage2D(...arguments)}catch($){ae("WebGLState:",$)}}function ht(){try{s.texImage3D(...arguments)}catch($){ae("WebGLState:",$)}}function vt($){return u[$]!==void 0?u[$]:s.getParameter($)}function Ht($,Mt){u[$]!==Mt&&(s.pixelStorei($,Mt),u[$]=Mt)}function St($){X.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),X.copy($))}function _t($){k.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),k.copy($))}function Gt($,Mt){let ct=c.get(Mt);ct===void 0&&(ct=new WeakMap,c.set(Mt,ct));let yt=ct.get($);yt===void 0&&(yt=s.getUniformBlockIndex(Mt,$.name),ct.set($,yt))}function Xt($,Mt){const yt=c.get(Mt).get($);l.get(Mt)!==yt&&(s.uniformBlockBinding(Mt,yt,$.__bindingPointIndex),l.set(Mt,yt))}function Qt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,it={},d={},f=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,v=null,S=null,b=null,A=null,_=new kt(0,0,0),y=0,C=!1,L=null,D=null,F=null,H=null,O=null,X.set(0,0,s.canvas.width,s.canvas.height),k.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:I,disable:V,bindFramebuffer:Q,drawBuffers:nt,useProgram:dt,setBlending:zt,setMaterial:Ot,setFlipSided:Wt,setCullFace:le,setLineWidth:Ee,setPolygonOffset:rt,setScissorTest:pt,activeTexture:Pt,bindTexture:W,unbindTexture:he,compressedTexImage2D:ue,compressedTexImage3D:z,texImage2D:lt,texImage3D:ht,pixelStorei:Ht,getParameter:vt,updateUBOMapping:Gt,uniformBlockBinding:Xt,texStorage2D:mt,texStorage3D:xt,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:st,compressedTexSubImage3D:at,scissor:St,viewport:_t,reset:Qt}}function Fv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,u=new Set;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(z,w){return m?new OffscreenCanvas(z,w):vr("canvas")}function g(z,w,J){let st=1;const at=ue(z);if((at.width>J||at.height>J)&&(st=J/Math.max(at.width,at.height)),st<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const mt=Math.floor(st*at.width),xt=Math.floor(st*at.height);d===void 0&&(d=x(mt,xt));const lt=w?x(mt,xt):d;return lt.width=mt,lt.height=xt,lt.getContext("2d").drawImage(z,0,0,mt,xt),qt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+mt+"x"+xt+")."),lt}else return"data"in z&&qt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),z;return z}function p(z){return z.generateMipmaps}function M(z){s.generateMipmap(z)}function E(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(z,w,J,st,at,mt=!1){if(z!==null){if(s[z]!==void 0)return s[z];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let xt;st&&(xt=t.get("EXT_texture_norm16"),xt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=w;if(w===s.RED&&(J===s.FLOAT&&(lt=s.R32F),J===s.HALF_FLOAT&&(lt=s.R16F),J===s.UNSIGNED_BYTE&&(lt=s.R8),J===s.UNSIGNED_SHORT&&xt&&(lt=xt.R16_EXT),J===s.SHORT&&xt&&(lt=xt.R16_SNORM_EXT)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(lt=s.R8UI),J===s.UNSIGNED_SHORT&&(lt=s.R16UI),J===s.UNSIGNED_INT&&(lt=s.R32UI),J===s.BYTE&&(lt=s.R8I),J===s.SHORT&&(lt=s.R16I),J===s.INT&&(lt=s.R32I)),w===s.RG&&(J===s.FLOAT&&(lt=s.RG32F),J===s.HALF_FLOAT&&(lt=s.RG16F),J===s.UNSIGNED_BYTE&&(lt=s.RG8),J===s.UNSIGNED_SHORT&&xt&&(lt=xt.RG16_EXT),J===s.SHORT&&xt&&(lt=xt.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(lt=s.RG8UI),J===s.UNSIGNED_SHORT&&(lt=s.RG16UI),J===s.UNSIGNED_INT&&(lt=s.RG32UI),J===s.BYTE&&(lt=s.RG8I),J===s.SHORT&&(lt=s.RG16I),J===s.INT&&(lt=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(lt=s.RGB8UI),J===s.UNSIGNED_SHORT&&(lt=s.RGB16UI),J===s.UNSIGNED_INT&&(lt=s.RGB32UI),J===s.BYTE&&(lt=s.RGB8I),J===s.SHORT&&(lt=s.RGB16I),J===s.INT&&(lt=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(lt=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(lt=s.RGBA16UI),J===s.UNSIGNED_INT&&(lt=s.RGBA32UI),J===s.BYTE&&(lt=s.RGBA8I),J===s.SHORT&&(lt=s.RGBA16I),J===s.INT&&(lt=s.RGBA32I)),w===s.RGB&&(J===s.UNSIGNED_SHORT&&xt&&(lt=xt.RGB16_EXT),J===s.SHORT&&xt&&(lt=xt.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(lt=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(lt=s.R11F_G11F_B10F)),w===s.RGBA){const ht=mt?bo:oe.getTransfer(at);J===s.FLOAT&&(lt=s.RGBA32F),J===s.HALF_FLOAT&&(lt=s.RGBA16F),J===s.UNSIGNED_BYTE&&(lt=ht===pe?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&xt&&(lt=xt.RGBA16_EXT),J===s.SHORT&&xt&&(lt=xt.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function S(z,w){let J;return z?w===null||w===Yn||w===gr?J=s.DEPTH24_STENCIL8:w===Dn?J=s.DEPTH32F_STENCIL8:w===mr&&(J=s.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Yn||w===gr?J=s.DEPTH_COMPONENT24:w===Dn?J=s.DEPTH_COMPONENT32F:w===mr&&(J=s.DEPTH_COMPONENT16),J}function b(z,w){return p(z)===!0||z.isFramebufferTexture&&z.minFilter!==He&&z.minFilter!==Ge?Math.log2(Math.max(w.width,w.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?w.mipmaps.length:1}function A(z){const w=z.target;w.removeEventListener("dispose",A),y(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function _(z){const w=z.target;w.removeEventListener("dispose",_),L(w)}function y(z){const w=n.get(z);if(w.__webglInit===void 0)return;const J=z.source,st=f.get(J);if(st){const at=st[w.__cacheKey];at.usedTimes--,at.usedTimes===0&&C(z),Object.keys(st).length===0&&f.delete(J)}n.remove(z)}function C(z){const w=n.get(z);s.deleteTexture(w.__webglTexture);const J=z.source,st=f.get(J);delete st[w.__cacheKey],o.memory.textures--}function L(z){const w=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(w.__webglFramebuffer[st]))for(let at=0;at<w.__webglFramebuffer[st].length;at++)s.deleteFramebuffer(w.__webglFramebuffer[st][at]);else s.deleteFramebuffer(w.__webglFramebuffer[st]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[st])}else{if(Array.isArray(w.__webglFramebuffer))for(let st=0;st<w.__webglFramebuffer.length;st++)s.deleteFramebuffer(w.__webglFramebuffer[st]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let st=0;st<w.__webglColorRenderbuffer.length;st++)w.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[st]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=z.textures;for(let st=0,at=J.length;st<at;st++){const mt=n.get(J[st]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(J[st])}n.remove(z)}let D=0;function F(){D=0}function H(){return D}function O(z){D=z}function Z(){const z=D;return z>=i.maxTextures&&qt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,z}function q(z){const w=[];return w.push(z.wrapS),w.push(z.wrapT),w.push(z.wrapR||0),w.push(z.magFilter),w.push(z.minFilter),w.push(z.anisotropy),w.push(z.internalFormat),w.push(z.format),w.push(z.type),w.push(z.generateMipmaps),w.push(z.premultiplyAlpha),w.push(z.flipY),w.push(z.unpackAlignment),w.push(z.colorSpace),w.join()}function j(z,w){const J=n.get(z);if(z.isVideoTexture&&W(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&J.__version!==z.version){const st=z.image;if(st===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(J,z,w);return}}else z.isExternalTexture&&(J.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function G(z,w){const J=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&J.__version!==z.version){V(J,z,w);return}else z.isExternalTexture&&(J.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function K(z,w){const J=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&J.__version!==z.version){V(J,z,w);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function it(z,w){const J=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&J.__version!==z.version){Q(J,z,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const ut={[nl]:s.REPEAT,[ai]:s.CLAMP_TO_EDGE,[il]:s.MIRRORED_REPEAT},N={[He]:s.NEAREST,[Ad]:s.NEAREST_MIPMAP_NEAREST,[Ar]:s.NEAREST_MIPMAP_LINEAR,[Ge]:s.LINEAR,[ea]:s.LINEAR_MIPMAP_NEAREST,[Ci]:s.LINEAR_MIPMAP_LINEAR},X={[Pd]:s.NEVER,[Fd]:s.ALWAYS,[Id]:s.LESS,[tc]:s.LEQUAL,[Dd]:s.EQUAL,[ec]:s.GEQUAL,[Ud]:s.GREATER,[Nd]:s.NOTEQUAL};function k(z,w){if(w.type===Dn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ge||w.magFilter===ea||w.magFilter===Ar||w.magFilter===Ci||w.minFilter===Ge||w.minFilter===ea||w.minFilter===Ar||w.minFilter===Ci)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,ut[w.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,ut[w.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,ut[w.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,N[w.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,X[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===He||w.minFilter!==Ar&&w.minFilter!==Ci||w.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function B(z,w){let J=!1;z.__webglInit===void 0&&(z.__webglInit=!0,w.addEventListener("dispose",A));const st=w.source;let at=f.get(st);at===void 0&&(at={},f.set(st,at));const mt=q(w);if(mt!==z.__cacheKey){at[mt]===void 0&&(at[mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),at[mt].usedTimes++;const xt=at[z.__cacheKey];xt!==void 0&&(at[z.__cacheKey].usedTimes--,xt.usedTimes===0&&C(w)),z.__cacheKey=mt,z.__webglTexture=at[mt].texture}return J}function R(z,w,J){return Math.floor(Math.floor(z/J)/w)}function I(z,w,J,st){const mt=z.updateRanges;if(mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,J,st,w.data);else{mt.sort((Ht,St)=>Ht.start-St.start);let xt=0;for(let Ht=1;Ht<mt.length;Ht++){const St=mt[xt],_t=mt[Ht],Gt=St.start+St.count,Xt=R(_t.start,w.width,4),Qt=R(St.start,w.width,4);_t.start<=Gt+1&&Xt===Qt&&R(_t.start+_t.count-1,w.width,4)===Xt?St.count=Math.max(St.count,_t.start+_t.count-St.start):(++xt,mt[xt]=_t)}mt.length=xt+1;const lt=e.getParameter(s.UNPACK_ROW_LENGTH),ht=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Ht=0,St=mt.length;Ht<St;Ht++){const _t=mt[Ht],Gt=Math.floor(_t.start/4),Xt=Math.ceil(_t.count/4),Qt=Gt%w.width,$=Math.floor(Gt/w.width),Mt=Xt,ct=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(s.UNPACK_SKIP_ROWS,$),e.texSubImage2D(s.TEXTURE_2D,0,Qt,$,Mt,ct,J,st,w.data)}z.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,lt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function V(z,w,J){let st=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(st=s.TEXTURE_3D);const at=B(z,w),mt=w.source;e.bindTexture(st,z.__webglTexture,s.TEXTURE0+J);const xt=n.get(mt);if(mt.version!==xt.__version||at===!0){if(e.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ct=oe.getPrimaries(oe.workingColorSpace),yt=w.colorSpace===Ai?null:oe.getPrimaries(w.colorSpace),At=w.colorSpace===Ai||ct===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let ht=g(w.image,!1,i.maxTextureSize);ht=he(w,ht);const vt=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type);let St=v(w.internalFormat,vt,Ht,w.normalized,w.colorSpace,w.isVideoTexture);k(st,w);let _t;const Gt=w.mipmaps,Xt=w.isVideoTexture!==!0,Qt=xt.__version===void 0||at===!0,$=mt.dataReady,Mt=b(w,ht);if(w.isDepthTexture)St=S(w.format===ki,w.type),Qt&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,St,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,St,ht.width,ht.height,0,vt,Ht,null));else if(w.isDataTexture)if(Gt.length>0){Xt&&Qt&&e.texStorage2D(s.TEXTURE_2D,Mt,St,Gt[0].width,Gt[0].height);for(let ct=0,yt=Gt.length;ct<yt;ct++)_t=Gt[ct],Xt?$&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,_t.width,_t.height,vt,Ht,_t.data):e.texImage2D(s.TEXTURE_2D,ct,St,_t.width,_t.height,0,vt,Ht,_t.data);w.generateMipmaps=!1}else Xt?(Qt&&e.texStorage2D(s.TEXTURE_2D,Mt,St,ht.width,ht.height),$&&I(w,ht,vt,Ht)):e.texImage2D(s.TEXTURE_2D,0,St,ht.width,ht.height,0,vt,Ht,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xt&&Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,St,Gt[0].width,Gt[0].height,ht.depth);for(let ct=0,yt=Gt.length;ct<yt;ct++)if(_t=Gt[ct],w.format!==pn)if(vt!==null)if(Xt){if($)if(w.layerUpdates.size>0){const At=Sh(_t.width,_t.height,w.format,w.type);for(const ft of w.layerUpdates){const Vt=_t.data.subarray(ft*At/_t.data.BYTES_PER_ELEMENT,(ft+1)*At/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,ft,_t.width,_t.height,1,vt,Vt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,ht.depth,vt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,St,_t.width,_t.height,ht.depth,0,_t.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?$&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,_t.width,_t.height,ht.depth,vt,Ht,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,St,_t.width,_t.height,ht.depth,0,vt,Ht,_t.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Xt&&Qt&&e.texStorage2D(s.TEXTURE_2D,Mt,St,Gt[0].width,Gt[0].height);for(let ct=0,yt=Gt.length;ct<yt;ct++)_t=Gt[ct],w.format!==pn?vt!==null?Xt?$&&e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,St,_t.width,_t.height,0,_t.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?$&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,_t.width,_t.height,vt,Ht,_t.data):e.texImage2D(s.TEXTURE_2D,ct,St,_t.width,_t.height,0,vt,Ht,_t.data)}else if(w.isDataArrayTexture)if(Xt){if(Qt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Mt,St,ht.width,ht.height,ht.depth),$)if(w.layerUpdates.size>0){const ct=Sh(ht.width,ht.height,w.format,w.type);for(const yt of w.layerUpdates){const At=ht.data.subarray(yt*ct/ht.data.BYTES_PER_ELEMENT,(yt+1)*ct/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,ht.width,ht.height,1,vt,Ht,At)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,vt,Ht,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,St,ht.width,ht.height,ht.depth,0,vt,Ht,ht.data);else if(w.isData3DTexture)Xt?(Qt&&e.texStorage3D(s.TEXTURE_3D,Mt,St,ht.width,ht.height,ht.depth),$&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,vt,Ht,ht.data)):e.texImage3D(s.TEXTURE_3D,0,St,ht.width,ht.height,ht.depth,0,vt,Ht,ht.data);else if(w.isFramebufferTexture){if(Qt)if(Xt)e.texStorage2D(s.TEXTURE_2D,Mt,St,ht.width,ht.height);else{let ct=ht.width,yt=ht.height;for(let At=0;At<Mt;At++)e.texImage2D(s.TEXTURE_2D,At,St,ct,yt,0,vt,Ht,null),ct>>=1,yt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const ct=s.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),ht.parentNode!==ct){ct.appendChild(ht),u.add(w),ct.onpaint=yt=>{const At=yt.changedElements;for(const ft of u)At.includes(ft.image)&&(ft.needsUpdate=!0)},ct.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ht);else{const At=s.RGBA,ft=s.RGBA,Vt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,At,ft,Vt,ht)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Xt&&Qt){const ct=ue(Gt[0]);e.texStorage2D(s.TEXTURE_2D,Mt,St,ct.width,ct.height)}for(let ct=0,yt=Gt.length;ct<yt;ct++)_t=Gt[ct],Xt?$&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,vt,Ht,_t):e.texImage2D(s.TEXTURE_2D,ct,St,vt,Ht,_t);w.generateMipmaps=!1}else if(Xt){if(Qt){const ct=ue(ht);e.texStorage2D(s.TEXTURE_2D,Mt,St,ct.width,ct.height)}$&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Ht,ht)}else e.texImage2D(s.TEXTURE_2D,0,St,vt,Ht,ht);p(w)&&M(st),xt.__version=mt.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function Q(z,w,J){if(w.image.length!==6)return;const st=B(z,w),at=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+J);const mt=n.get(at);if(at.version!==mt.__version||st===!0){e.activeTexture(s.TEXTURE0+J);const xt=oe.getPrimaries(oe.workingColorSpace),lt=w.colorSpace===Ai?null:oe.getPrimaries(w.colorSpace),ht=w.colorSpace===Ai||xt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const vt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ht=w.image[0]&&w.image[0].isDataTexture,St=[];for(let ft=0;ft<6;ft++)!vt&&!Ht?St[ft]=g(w.image[ft],!0,i.maxCubemapSize):St[ft]=Ht?w.image[ft].image:w.image[ft],St[ft]=he(w,St[ft]);const _t=St[0],Gt=r.convert(w.format,w.colorSpace),Xt=r.convert(w.type),Qt=v(w.internalFormat,Gt,Xt,w.normalized,w.colorSpace),$=w.isVideoTexture!==!0,Mt=mt.__version===void 0||st===!0,ct=at.dataReady;let yt=b(w,_t);k(s.TEXTURE_CUBE_MAP,w);let At;if(vt){$&&Mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Qt,_t.width,_t.height);for(let ft=0;ft<6;ft++){At=St[ft].mipmaps;for(let Vt=0;Vt<At.length;Vt++){const Nt=At[Vt];w.format!==pn?Gt!==null?$?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,Nt.width,Nt.height,Gt,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,Qt,Nt.width,Nt.height,0,Nt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,Nt.width,Nt.height,Gt,Xt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,Qt,Nt.width,Nt.height,0,Gt,Xt,Nt.data)}}}else{if(At=w.mipmaps,$&&Mt){At.length>0&&yt++;const ft=ue(St[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,yt,Qt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Ht){$?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,St[ft].width,St[ft].height,Gt,Xt,St[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Qt,St[ft].width,St[ft].height,0,Gt,Xt,St[ft].data);for(let Vt=0;Vt<At.length;Vt++){const ye=At[Vt].image[ft].image;$?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,ye.width,ye.height,Gt,Xt,ye.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,Qt,ye.width,ye.height,0,Gt,Xt,ye.data)}}else{$?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Gt,Xt,St[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Qt,Gt,Xt,St[ft]);for(let Vt=0;Vt<At.length;Vt++){const Nt=At[Vt];$?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,Gt,Xt,Nt.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,Qt,Gt,Xt,Nt.image[ft])}}}p(w)&&M(s.TEXTURE_CUBE_MAP),mt.__version=at.version,w.onUpdate&&w.onUpdate(w)}z.__version=w.version}function nt(z,w,J,st,at,mt){const xt=r.convert(J.format,J.colorSpace),lt=r.convert(J.type),ht=v(J.internalFormat,xt,lt,J.normalized,J.colorSpace),vt=n.get(w),Ht=n.get(J);if(Ht.__renderTarget=w,!vt.__hasExternalTextures){const St=Math.max(1,w.width>>mt),_t=Math.max(1,w.height>>mt);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,mt,ht,St,_t,w.depth,0,xt,lt,null):e.texImage2D(at,mt,ht,St,_t,0,xt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,z),Pt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,at,Ht.__webglTexture,0,pt(w)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,at,Ht.__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(z,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,z),w.depthBuffer){const st=w.depthTexture,at=st&&st.isDepthTexture?st.type:null,mt=S(w.stencilBuffer,at),xt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(w),mt,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(w),mt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,mt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,z)}else{const st=w.textures;for(let at=0;at<st.length;at++){const mt=st[at],xt=r.convert(mt.format,mt.colorSpace),lt=r.convert(mt.type),ht=v(mt.internalFormat,xt,lt,mt.normalized,mt.colorSpace);Pt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt(w),ht,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt(w),ht,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ht,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function gt(z,w,J){const st=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,z),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=n.get(w.depthTexture);if(at.__renderTarget=w,(!at.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),st){if(at.__webglInit===void 0&&(at.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),at.__webglTexture===void 0){at.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),k(s.TEXTURE_CUBE_MAP,w.depthTexture);const vt=r.convert(w.depthTexture.format),Ht=r.convert(w.depthTexture.type);let St;w.depthTexture.format===ui?St=s.DEPTH_COMPONENT24:w.depthTexture.format===ki&&(St=s.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,St,w.width,w.height,0,vt,Ht,null)}}else j(w.depthTexture,0);const mt=at.__webglTexture,xt=pt(w),lt=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,ht=w.depthTexture.format===ki?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ui)Pt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,lt,mt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,ht,lt,mt,0);else if(w.depthTexture.format===ki)Pt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,lt,mt,0,xt):s.framebufferTexture2D(s.FRAMEBUFFER,ht,lt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(z){const w=n.get(z),J=z.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==z.depthTexture){const st=z.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),st){const at=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,st.removeEventListener("dispose",at)};st.addEventListener("dispose",at),w.__depthDisposeCallback=at}w.__boundDepthTexture=st}if(z.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let st=0;st<6;st++)gt(w.__webglFramebuffer[st],z,st);else{const st=z.texture.mipmaps;st&&st.length>0?gt(w.__webglFramebuffer[0],z,0):gt(w.__webglFramebuffer,z,0)}else if(J){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]===void 0)w.__webglDepthbuffer[st]=s.createRenderbuffer(),dt(w.__webglDepthbuffer[st],z,!1);else{const at=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,mt)}}else{const st=z.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),dt(w.__webglDepthbuffer,z,!1);else{const at=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,mt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(z,w,J){const st=n.get(z);w!==void 0&&nt(st.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&bt(z)}function Ot(z){const w=z.texture,J=n.get(z),st=n.get(w);z.addEventListener("dispose",_);const at=z.textures,mt=z.isWebGLCubeRenderTarget===!0,xt=at.length>1;if(xt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=w.version,o.memory.textures++),mt){J.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[lt]=[];for(let ht=0;ht<w.mipmaps.length;ht++)J.__webglFramebuffer[lt][ht]=s.createFramebuffer()}else J.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let lt=0;lt<w.mipmaps.length;lt++)J.__webglFramebuffer[lt]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(xt)for(let lt=0,ht=at.length;lt<ht;lt++){const vt=n.get(at[lt]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(z.samples>0&&Pt(z)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let lt=0;lt<at.length;lt++){const ht=at[lt];J.__webglColorRenderbuffer[lt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[lt]);const vt=r.convert(ht.format,ht.colorSpace),Ht=r.convert(ht.type),St=v(ht.internalFormat,vt,Ht,ht.normalized,ht.colorSpace,z.isXRRenderTarget===!0),_t=pt(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,St,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,J.__webglColorRenderbuffer[lt])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(J.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),k(s.TEXTURE_CUBE_MAP,w);for(let lt=0;lt<6;lt++)if(w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)nt(J.__webglFramebuffer[lt][ht],z,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ht);else nt(J.__webglFramebuffer[lt],z,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(w)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let lt=0,ht=at.length;lt<ht;lt++){const vt=at[lt],Ht=n.get(vt);let St=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(St=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(St,Ht.__webglTexture),k(St,vt),nt(J.__webglFramebuffer,z,vt,s.COLOR_ATTACHMENT0+lt,St,0),p(vt)&&M(St)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(lt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,st.__webglTexture),k(lt,w),w.mipmaps&&w.mipmaps.length>0)for(let ht=0;ht<w.mipmaps.length;ht++)nt(J.__webglFramebuffer[ht],z,w,s.COLOR_ATTACHMENT0,lt,ht);else nt(J.__webglFramebuffer,z,w,s.COLOR_ATTACHMENT0,lt,0);p(w)&&M(lt),e.unbindTexture()}z.depthBuffer&&bt(z)}function Wt(z){const w=z.textures;for(let J=0,st=w.length;J<st;J++){const at=w[J];if(p(at)){const mt=E(z),xt=n.get(at).__webglTexture;e.bindTexture(mt,xt),M(mt),e.unbindTexture()}}}const le=[],Ee=[];function rt(z){if(z.samples>0){if(Pt(z)===!1){const w=z.textures,J=z.width,st=z.height;let at=s.COLOR_BUFFER_BIT;const mt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(z),lt=w.length>1;if(lt)for(let vt=0;vt<w.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const ht=z.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let vt=0;vt<w.length;vt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),lt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);const Ht=n.get(w[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ht,0)}s.blitFramebuffer(0,0,J,st,0,0,J,st,at,s.NEAREST),l===!0&&(le.length=0,Ee.length=0,le.push(s.COLOR_ATTACHMENT0+vt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(le.push(mt),Ee.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),lt)for(let vt=0;vt<w.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);const Ht=n.get(w[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){const w=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function pt(z){return Math.min(i.maxSamples,z.samples)}function Pt(z){const w=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function W(z){const w=o.render.frame;h.get(z)!==w&&(h.set(z,w),z.update())}function he(z,w){const J=z.colorSpace,st=z.format,at=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||J!==wo&&J!==Ai&&(oe.getTransfer(J)===pe?(st!==pn||at!==an)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",J)),w}function ue(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=F,this.getTextureUnits=H,this.setTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=it,this.rebindTextures=zt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function zv(s,t){function e(n,i=Ai){let r;const o=oe.getTransfer(i);if(n===an)return s.UNSIGNED_BYTE;if(n===Kl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yu)return s.BYTE;if(n===$u)return s.SHORT;if(n===mr)return s.UNSIGNED_SHORT;if(n===$l)return s.INT;if(n===Yn)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===bn)return s.HALF_FLOAT;if(n===Ju)return s.ALPHA;if(n===Qu)return s.RGB;if(n===pn)return s.RGBA;if(n===ui)return s.DEPTH_COMPONENT;if(n===ki)return s.DEPTH_STENCIL;if(n===Xo)return s.RED;if(n===Jl)return s.RED_INTEGER;if(n===Vi)return s.RG;if(n===Ql)return s.RG_INTEGER;if(n===jl)return s.RGBA_INTEGER;if(n===fo||n===po||n===mo||n===go)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===hl||n===ul||n===fl||n===yo||n===dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ul)return r.COMPRESSED_R11_EAC;if(n===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===yo)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===xl||n===vl||n===_l||n===Ml||n===yl||n===Sl||n===wl||n===bl||n===El||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Ll)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Il||n===So||n===Dl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===So)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new hf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ve({vertexShader:Ov,fragmentShader:kv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hv extends Xi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Bv,p={},M=e.getContextAttributes();let E=null,v=null;const S=[],b=[],A=new Bt;let _=null,y=null;const C=new en;C.viewport=new _e;const L=new en;L.viewport=new _e;const D=[C,L],F=new Kp;let H=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let I=S[R];return I===void 0&&(I=new la,S[R]=I),I.getTargetRaySpace()},this.getControllerGrip=function(R){let I=S[R];return I===void 0&&(I=new la,S[R]=I),I.getGripSpace()},this.getHand=function(R){let I=S[R];return I===void 0&&(I=new la,S[R]=I),I.getHandSpace()};function Z(R){const I=b.indexOf(R.inputSource);if(I===-1)return;const V=S[I];V!==void 0&&(V.update(R.inputSource,R.frame,c||o),V.dispatchEvent({type:R.type,data:R.inputSource}))}function q(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",j);for(let R=0;R<S.length;R++){const I=b[R];I!==null&&(b[R]=null,S[R].disconnect(I))}H=null,O=null,g.reset();for(const R in p)delete p[R];if(t.setRenderTarget(E),f=null,d=null,u=null,i=null,v=null,B.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),y!==null){const R=y.camera;R.fov=y.fov,R.zoom=y.zoom,R.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,Q=null,nt=null;M.depth&&(nt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=M.stencil?ki:ui,Q=M.stencil?gr:Yn);const dt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new yn(d.textureWidth,d.textureHeight,{format:pn,type:an,depthTexture:new Mr(d.textureWidth,d.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const V={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,V),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new yn(f.framebufferWidth,f.framebufferHeight,{format:pn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),B.setContext(i),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(R){for(let I=0;I<R.removed.length;I++){const V=R.removed[I],Q=b.indexOf(V);Q>=0&&(b[Q]=null,S[Q].disconnect(V))}for(let I=0;I<R.added.length;I++){const V=R.added[I];let Q=b.indexOf(V);if(Q===-1){for(let dt=0;dt<S.length;dt++)if(dt>=b.length){b.push(V),Q=dt;break}else if(b[dt]===null){b[dt]=V,Q=dt;break}if(Q===-1)break}const nt=S[Q];nt&&nt.connect(V)}}const G=new U,K=new U;function it(R,I,V){G.setFromMatrixPosition(I.matrixWorld),K.setFromMatrixPosition(V.matrixWorld);const Q=G.distanceTo(K),nt=I.projectionMatrix.elements,dt=V.projectionMatrix.elements,gt=nt[14]/(nt[10]-1),bt=nt[14]/(nt[10]+1),zt=(nt[9]+1)/nt[5],Ot=(nt[9]-1)/nt[5],Wt=(nt[8]-1)/nt[0],le=(dt[8]+1)/dt[0],Ee=gt*Wt,rt=gt*le,pt=Q/(-Wt+le),Pt=pt*-Wt;if(I.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Pt),R.translateZ(pt),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),nt[10]===-1)R.projectionMatrix.copy(I.projectionMatrix),R.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{const W=gt+pt,he=bt+pt,ue=Ee-Pt,z=rt+(Q-Pt),w=zt*bt/he*W,J=Ot*bt/he*W;R.projectionMatrix.makePerspective(ue,z,w,J,W,he),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function ut(R,I){I===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(I.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;let I=R.near,V=R.far;g.texture!==null&&(g.depthNear>0&&(I=g.depthNear),g.depthFar>0&&(V=g.depthFar)),F.near=L.near=C.near=I,F.far=L.far=C.far=V,(H!==F.near||O!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,O=F.far),F.layers.mask=R.layers.mask|6,C.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Q=R.parent,nt=F.cameras;ut(F,Q);for(let dt=0;dt<nt.length;dt++)ut(nt[dt],Q);nt.length===2?it(F,C,L):F.projectionMatrix.copy(C.projectionMatrix),y===null&&R.isPerspectiveCamera&&(y={camera:R,fov:R.fov,zoom:R.zoom}),N(R,F,Q)};function N(R,I,V){V===null?R.matrix.copy(I.matrixWorld):(R.matrix.copy(V.matrixWorld),R.matrix.invert(),R.matrix.multiply(I.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(I.projectionMatrix),R.projectionMatrixInverse.copy(I.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=_r*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(R){l=R,d!==null&&(d.fixedFoveation=R),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=R)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(R){return p[R]};let X=null;function k(R,I){if(h=I.getViewerPose(c||o),m=I,h!==null){const V=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Q=!1;V.length!==F.cameras.length&&(F.cameras.length=0,Q=!0);for(let bt=0;bt<V.length;bt++){const zt=V[bt];let Ot=null;if(f!==null)Ot=f.getViewport(zt);else{const le=u.getViewSubImage(d,zt);Ot=le.viewport,bt===0&&(t.setRenderTargetTextures(v,le.colorTexture,le.depthStencilTexture),t.setRenderTarget(v))}let Wt=D[bt];Wt===void 0&&(Wt=new en,Wt.layers.enable(bt),Wt.viewport=new _e,D[bt]=Wt),Wt.matrix.fromArray(zt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(zt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),bt===0&&(F.matrix.copy(Wt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Q===!0&&F.cameras.push(Wt)}const nt=i.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const bt=u.getDepthInformation(V[0]);bt&&bt.isValid&&bt.texture&&g.init(bt,i.renderState)}if(nt&&nt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let bt=0;bt<V.length;bt++){const zt=V[bt].camera;if(zt){let Ot=p[zt];Ot||(Ot=new hf,p[zt]=Ot);const Wt=u.getCameraImage(zt);Ot.sourceTexture=Wt}}}}for(let V=0;V<S.length;V++){const Q=b[V],nt=S[V];Q!==null&&nt!==void 0&&nt.update(Q,I,c||o)}X&&X(R,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),m=null}const B=new pf;B.setAnimationLoop(k),this.setAnimationLoop=function(R){X=R},this.dispose=function(){}}}const Gv=new Jt,yf=new Kt;yf.set(-1,0,0,0,1,0,0,0,1);function Vv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,uf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ln&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ln&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",M));const A=S.program;n.updateUBOMapping(v,A);const _=t.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){const S=u();v.__bindingPointIndex=S;const b=s.createBuffer(),A=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const S=i[v.id],b=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,y=b.length;_<y;_++){const C=b[_];if(Array.isArray(C))for(let L=0,D=C.length;L<D;L++)f(C[L],_,L,A);else f(C,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,S,b,A){if(x(v,S,b,A)===!0){const _=v.__offset,y=v.value;if(Array.isArray(y)){let C=0;for(let L=0;L<y.length;L++){const D=y[L],F=p(D);m(D,v.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function m(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function x(v,S,b,A){const _=v.value,y=S+"_"+b;if(A[y]===void 0)return typeof _=="number"||typeof _=="boolean"?A[y]=_:ArrayBuffer.isView(_)?A[y]=_.slice():A[y]=_.clone(),!0;{const C=A[y];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(v){const S=v.uniforms;let b=0;const A=16;for(let y=0,C=S.length;y<C;y++){const L=Array.isArray(S[y])?S[y]:[S[y]];for(let D=0,F=L.length;D<F;D++){const H=L[D],O=Array.isArray(H.value)?H.value:[H.value];for(let Z=0,q=O.length;Z<q;Z++){const j=O[Z],G=p(j),K=b%A,it=K%G.boundary,ut=K+it;b+=it,ut!==0&&A-ut<G.storage&&(b+=A-ut),H.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=G.storage}}}const _=b%A;return _>0&&(b+=A-_),v.__size=b,v.__cache={},this}function p(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){const S=v.target;S.removeEventListener("dispose",M);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function E(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:E}}const Xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function qv(){return On===null&&(On=new Ls(Xv,16,16,Vi,bn),On.name="DFG_LUT",On.minFilter=Ge,On.magFilter=Ge,On.wrapS=ai,On.wrapT=ai,On.generateMipmaps=!1,On.needsUpdate=!0),On}class Yv{constructor(t={}){const{canvas:e=Od(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=an}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=f,g=new Set([jl,Ql,Jl]),p=new Set([an,Yn,mr,gr,Kl,Zl]),M=new Uint32Array(4),E=new Int32Array(4),v=new U;let S=null,b=null;const A=[],_=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,D=null,F=null,H=null,O=null;this._outputColorSpace=Ue;let Z=0,q=0,j=null,G=-1,K=null;const it=new _e,ut=new _e;let N=null;const X=new kt(0);let k=0,B=e.width,R=e.height,I=1,V=null,Q=null;const nt=new _e(0,0,B,R),dt=new _e(0,0,B,R);let gt=!1;const bt=new ac;let zt=!1,Ot=!1;const Wt=new Jt,le=new U,Ee=new _e,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Pt(){return j===null?I:1}let W=n;function he(T,Y){return e.getContext(T,Y)}let ue,z,w,J,st,at,mt,xt,lt,ht,vt,Ht,St,_t,Gt,Xt,Qt,$,Mt,ct,yt,At,ft;try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xl}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Tn,!1),W===null){const Y="webgl2";if(W=he(Y,T),W===null)throw he(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(T){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),ae("WebGLRenderer: "+T.message),T}function Vt(){ue=new qg(W),ue.init(),yt=new zv(W,ue),z=new Fg(W,ue,t,yt),w=new Nv(W,ue),z.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),F=W.createFramebuffer(),H=W.createFramebuffer(),O=W.createFramebuffer(),J=new Kg(W),st=new yv,at=new Fv(W,ue,w,st,z,yt,J),mt=new Xg(C),xt=new Jp(W),At=new Ug(W,xt),lt=new Yg(W,xt,J,At),ht=new Jg(W,lt,xt,At,J),$=new Zg(W,z,at),Gt=new zg(st),vt=new Mv(C,mt,ue,z,At,Gt),Ht=new Vv(C,st),St=new wv,_t=new Cv(ue),Qt=new Dg(C,mt,w,ht,m,l),Xt=new Uv(C,ht,z),ft=new Wv(W,J,z,w),Mt=new Ng(W,ue,J),ct=new $g(W,ue,J),J.programs=vt.programs,C.capabilities=z,C.extensions=ue,C.properties=st,C.renderLists=St,C.shadowMap=Xt,C.state=w,C.info=J}x!==an&&(y=new jg(x,e.width,e.height,a,i,r));const Nt=new Hv(C,W);this.xr=Nt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize(B,R,!1))},this.getSize=function(T){return T.set(B,R)},this.setSize=function(T,Y,ot=!0){if(Nt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,R=Y,e.width=Math.floor(T*I),e.height=Math.floor(Y*I),ot===!0&&(e.style.width=T+"px",e.style.height=Y+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,T,Y)},this.getDrawingBufferSize=function(T){return T.set(B*I,R*I).floor()},this.setDrawingBufferSize=function(T,Y,ot){B=T,R=Y,I=ot,e.width=Math.floor(T*ot),e.height=Math.floor(Y*ot),this.setViewport(0,0,T,Y)},this.setEffects=function(T){if(x===an){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Y=0;Y<T.length;Y++)if(T[Y].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(it)},this.getViewport=function(T){return T.copy(nt)},this.setViewport=function(T,Y,ot,tt){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,Y,ot,tt),w.viewport(it.copy(nt).multiplyScalar(I).round())},this.getScissor=function(T){return T.copy(dt)},this.setScissor=function(T,Y,ot,tt){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,Y,ot,tt),w.scissor(ut.copy(dt).multiplyScalar(I).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){w.setScissorTest(gt=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(T=!0,Y=!0,ot=!0){let tt=0;if(T){let et=!1;if(j!==null){const Tt=j.texture.format;et=g.has(Tt)}if(et){const Tt=j.texture.type,Lt=p.has(Tt),Et=Qt.getClearColor(),It=Qt.getClearAlpha(),Ft=Et.r,jt=Et.g,ne=Et.b;Lt?(M[0]=Ft,M[1]=jt,M[2]=ne,M[3]=It,W.clearBufferuiv(W.COLOR,0,M)):(E[0]=Ft,E[1]=jt,E[2]=ne,E[3]=It,W.clearBufferiv(W.COLOR,0,E))}else tt|=W.COLOR_BUFFER_BIT}Y&&(tt|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(tt|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&W.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Tn,!1),Qt.dispose(),St.dispose(),_t.dispose(),st.dispose(),mt.dispose(),ht.dispose(),At.dispose(),ft.dispose(),vt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Cc),Nt.removeEventListener("sessionend",Lc),Pi.stop()};function ye(T){T.preventDefault(),Eo("WebGLRenderer: Context Lost."),L=!0}function fe(){Eo("WebGLRenderer: Context Restored."),L=!1;const T=J.autoReset,Y=Xt.enabled,ot=Xt.autoUpdate,tt=Xt.needsUpdate,et=Xt.type;Vt(),J.autoReset=T,Xt.enabled=Y,Xt.autoUpdate=ot,Xt.needsUpdate=tt,Xt.type=et}function Tn(T){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Nn(T){const Y=T.target;Y.removeEventListener("dispose",Nn),Kf(Y)}function Kf(T){Zf(T),st.remove(T)}function Zf(T){const Y=st.get(T).programs;Y!==void 0&&(Y.forEach(function(ot){vt.releaseProgram(ot)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,Y,ot,tt,et,Tt){Y===null&&(Y=rt);const Lt=et.isMesh&&et.matrixWorld.determinantAffine()<0,Et=jf(T,Y,ot,tt,et);w.setMaterial(tt,Lt);let It=ot.index,Ft=1;if(tt.wireframe===!0){if(It=lt.getWireframeAttribute(ot),It===void 0)return;Ft=2}const jt=ot.drawRange,ne=ot.attributes.position;let Dt=jt.start*Ft,de=(jt.start+jt.count)*Ft;Tt!==null&&(Dt=Math.max(Dt,Tt.start*Ft),de=Math.min(de,(Tt.start+Tt.count)*Ft)),It!==null?(Dt=Math.max(Dt,0),de=Math.min(de,It.count)):ne!=null&&(Dt=Math.max(Dt,0),de=Math.min(de,ne.count));const Pe=de-Dt;if(Pe<0||Pe===1/0)return;At.setup(et,tt,Et,ot,It);let we,Me=Mt;if(It!==null&&(we=xt.get(It),Me=ct,Me.setIndex(we)),et.isMesh)tt.wireframe===!0?(w.setLineWidth(tt.wireframeLinewidth*Pt()),Me.setMode(W.LINES)):Me.setMode(W.TRIANGLES);else if(et.isLine){let Ye=tt.linewidth;Ye===void 0&&(Ye=1),w.setLineWidth(Ye*Pt()),et.isLineSegments?Me.setMode(W.LINES):et.isLineLoop?Me.setMode(W.LINE_LOOP):Me.setMode(W.LINE_STRIP)}else et.isPoints?Me.setMode(W.POINTS):et.isSprite&&Me.setMode(W.TRIANGLES);if(et.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Me.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const Ye=et._multiDrawStarts,Ct=et._multiDrawCounts,Ze=et._multiDrawCount,ce=It?xt.get(It).bytesPerElement:1,mn=st.get(tt).currentProgram.getUniforms();for(let Fn=0;Fn<Ze;Fn++)mn.setValue(W,"_gl_DrawID",Fn),Me.render(Ye[Fn]/ce,Ct[Fn])}else if(et.isInstancedMesh)Me.renderInstances(Dt,Pe,et.count);else if(ot.isInstancedBufferGeometry){const Ye=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ct=Math.min(ot.instanceCount,Ye);Me.renderInstances(Dt,Pe,Ct)}else Me.render(Dt,Pe)};function Rc(T,Y,ot,tt){D!==null&&T.isNodeMaterial&&D.setObject(tt,T),zt===!0&&Gt.setState(T,ot,!1),T.transparent===!0&&T.side===Vn&&T.forceSinglePass===!1?(T.side=ln,T.needsUpdate=!0,Tr(T,Y,tt),T.side=Hi,T.needsUpdate=!0,Tr(T,Y,tt),T.side=Vn):Tr(T,Y,tt)}this.compile=function(T,Y,ot=null){ot===null&&(ot=T),D!==null&&D.renderStart(T,Y,ot),b=_t.get(ot),b.init(Y),_.push(b),ot.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(b.pushLight(et),et.castShadow&&b.pushShadow(et))}),T!==ot&&T.traverseVisible(function(et){et.isLight&&et.layers.test(Y.layers)&&(b.pushLight(et),et.castShadow&&b.pushShadow(et))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Ot=this.localClippingEnabled,zt=Gt.init(this.clippingPlanes,Ot),zt===!0&&Gt.setGlobalState(this.clippingPlanes,Y),D!==null&&Xt.render(b.state.shadowsArray,ot,Y);const tt=new Set;return T.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Tt=et.material;if(Tt)if(Array.isArray(Tt))for(let Lt=0;Lt<Tt.length;Lt++){const Et=Tt[Lt];Rc(Et,ot,Y,et),tt.add(Et)}else Rc(Tt,ot,Y,et),tt.add(Tt)}),b=_.pop(),D!==null&&D.renderEnd(),tt},this.compileAsync=function(T,Y,ot=null){const tt=this.compile(T,Y,ot);return new Promise(et=>{function Tt(){if(tt.forEach(function(Lt){const It=st.get(Lt).currentProgram;(It===void 0||It.isReady())&&tt.delete(Lt)}),tt.size===0){et(T);return}setTimeout(Tt,10)}ue.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Jo=null;function Jf(T){Jo&&Jo(T)}function Cc(){Pi.stop()}function Lc(){Pi.start()}const Pi=new pf;Pi.setAnimationLoop(Jf),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(T){Jo=T,Nt.setAnimationLoop(T),T===null?Pi.stop():Pi.start()},Nt.addEventListener("sessionstart",Cc),Nt.addEventListener("sessionend",Lc),this.render=function(T,Y){if(Y!==void 0&&Y.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,Y);const ot=Nt.enabled===!0&&Nt.isPresenting===!0,tt=y!==null&&(j===null||ot)&&y.begin(C,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Y),Y=Nt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,Y,j),b=_t.get(T,_.length),b.init(Y),b.state.textureUnits=at.getTextureUnits(),_.push(b),Wt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),bt.setFromProjectionMatrix(Wt,Wn,Y.reversedDepth),Ot=this.localClippingEnabled,zt=Gt.init(this.clippingPlanes,Ot),S=St.get(T,A.length),S.init(),A.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){const Lt=C.xr.getDepthSensingMesh();Lt!==null&&Qo(Lt,Y,-1/0,C.sortObjects)}Qo(T,Y,0,C.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),C.sortObjects===!0&&S.sort(V,Q),pt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,pt&&Qt.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Gt.beginShadows();const et=b.state.shadowsArray;if(Xt.render(et,T,Y),zt===!0&&Gt.endShadows(),(tt&&y.hasRenderPass())===!1){const Lt=S.opaque,Et=S.transmissive;if(b.setupLights(),Y.isArrayCamera){const It=Y.cameras;if(Et.length>0)for(let Ft=0,jt=It.length;Ft<jt;Ft++){const ne=It[Ft];Ic(Lt,Et,T,ne)}pt&&Qt.render(T);for(let Ft=0,jt=It.length;Ft<jt;Ft++){const ne=It[Ft];Pc(S,T,ne,ne.viewport)}}else Et.length>0&&Ic(Lt,Et,T,Y),pt&&Qt.render(T),Pc(S,T,Y)}j!==null&&q===0&&(at.updateMultisampleRenderTarget(j),at.updateRenderTargetMipmap(j)),tt&&y.end(C),T.isScene===!0&&T.onAfterRender(C,T,Y),At.resetDefaultState(),G=-1,K=null,_.pop(),_.length>0?(b=_[_.length-1],at.setTextureUnits(b.state.textureUnits),zt===!0&&Gt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,D!==null&&D.renderEnd()};function Qo(T,Y,ot,tt){if(T.visible===!1)return;if(T.layers.test(Y.layers)){if(T.isGroup)ot=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Y);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(bt)){tt&&Ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Wt);const Lt=ht.update(T),Et=T.material;Et.visible&&S.push(T,Lt,Et,ot,Ee.z,null,Y)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(bt))){const Lt=ht.update(T),Et=T.material;if(tt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ee.copy(T.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ee.copy(Lt.boundingSphere.center)),Ee.applyMatrix4(T.matrixWorld).applyMatrix4(Wt)),Array.isArray(Et)){const It=Lt.groups;for(let Ft=0,jt=It.length;Ft<jt;Ft++){const ne=It[Ft],Dt=Et[ne.materialIndex];Dt&&Dt.visible&&S.push(T,Lt,Dt,ot,Ee.z,ne,Y)}}else Et.visible&&S.push(T,Lt,Et,ot,Ee.z,null,Y)}}const Tt=T.children;for(let Lt=0,Et=Tt.length;Lt<Et;Lt++)Qo(Tt[Lt],Y,ot,tt)}function Pc(T,Y,ot,tt){const{opaque:et,transmissive:Tt,transparent:Lt}=T;b.setupLightsView(ot),zt===!0&&Gt.setGlobalState(C.clippingPlanes,ot),tt&&w.viewport(it.copy(tt)),et.length>0&&Er(et,Y,ot),Tt.length>0&&Er(Tt,Y,ot),Lt.length>0&&Er(Lt,Y,ot),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Ic(T,Y,ot,tt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[tt.id]===void 0){const Dt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[tt.id]=new yn(1,1,{generateMipmaps:!0,type:Dt?bn:an,minFilter:Ci,samples:Math.max(4,z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const Tt=b.state.transmissionRenderTarget[tt.id],Lt=tt.viewport||it;Tt.setSize(Lt.z*C.transmissionResolutionScale,Lt.w*C.transmissionResolutionScale);const Et=C.getRenderTarget(),It=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(X),k=C.getClearAlpha(),k<1&&C.setClearColor(16777215,.5),C.clear(),pt&&Qt.render(ot);const jt=C.toneMapping;C.toneMapping=qn;const ne=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),b.setupLightsView(tt),zt===!0&&Gt.setGlobalState(C.clippingPlanes,tt),Er(T,ot,tt),at.updateMultisampleRenderTarget(Tt),at.updateRenderTargetMipmap(Tt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let de=0,Pe=Y.length;de<Pe;de++){const we=Y[de],{object:Me,geometry:Ye,material:Ct,group:Ze}=we;if(Ct.side===Vn&&Me.layers.test(tt.layers)){const ce=Ct.side;Ct.side=ln,Ct.needsUpdate=!0,Dc(Me,ot,tt,Ye,Ct,Ze),Ct.side=ce,Ct.needsUpdate=!0,Dt=!0}}Dt===!0&&(at.updateMultisampleRenderTarget(Tt),at.updateRenderTargetMipmap(Tt))}C.setRenderTarget(Et,It,Ft),C.setClearColor(X,k),ne!==void 0&&(tt.viewport=ne),C.toneMapping=jt}function Er(T,Y,ot){const tt=Y.isScene===!0?Y.overrideMaterial:null;for(let et=0,Tt=T.length;et<Tt;et++){const Lt=T[et],{object:Et,geometry:It,group:Ft}=Lt;let jt=Lt.material;jt.allowOverride===!0&&tt!==null&&(jt=tt),Et.layers.test(ot.layers)&&Dc(Et,Y,ot,It,jt,Ft)}}function Dc(T,Y,ot,tt,et,Tt){D!==null&&et.isNodeMaterial&&D.setObject(T,et),T.onBeforeRender(C,Y,ot,tt,et,Tt),T.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),et.onBeforeRender(C,Y,ot,tt,T,Tt),et.transparent===!0&&et.side===Vn&&et.forceSinglePass===!1?(et.side=ln,et.needsUpdate=!0,C.renderBufferDirect(ot,Y,tt,et,T,Tt),et.side=Hi,et.needsUpdate=!0,C.renderBufferDirect(ot,Y,tt,et,T,Tt),et.side=Vn):C.renderBufferDirect(ot,Y,tt,et,T,Tt),T.onAfterRender(C,Y,ot,tt,et,Tt)}function Tr(T,Y,ot){Y.isScene!==!0&&(Y=rt);const tt=st.get(T),et=b.state.lights,Tt=b.state.shadowsArray,Lt=et.state.version,Et=vt.getParameters(T,et.state,Tt,Y,ot,b.state.lightProbeGridArray),It=vt.getProgramCacheKey(Et);let Ft=tt.programs;tt.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Y.environment:null,tt.fog=Y.fog;const jt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;tt.envMap=mt.get(T.envMap||tt.environment,jt),tt.envMapRotation=tt.environment!==null&&T.envMap===null?Y.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",Nn),Ft=new Map,tt.programs=Ft);let ne=Ft.get(It);if(ne!==void 0){if(tt.currentProgram===ne&&tt.lightsStateVersion===Lt)return Nc(T,Et),ne}else Et.uniforms=vt.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,ot,Et),T.onBeforeCompile(Et,C),ne=vt.acquireProgram(Et,It),Ft.set(It,ne),tt.uniforms=Et.uniforms;const Dt=tt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Dt.clippingPlanes=Gt.uniform),Nc(T,Et),tt.needsLights=ed(T),tt.lightsStateVersion=Lt,tt.needsLights&&(Dt.ambientLightColor.value=et.state.ambient,Dt.lightProbe.value=et.state.probe,Dt.sunLights.value=et.state.sun,Dt.sunLightShadows.value=et.state.sunShadow,Dt.directionalLights.value=et.state.directional,Dt.directionalLightShadows.value=et.state.directionalShadow,Dt.spotLights.value=et.state.spot,Dt.spotLightShadows.value=et.state.spotShadow,Dt.rectAreaLights.value=et.state.rectArea,Dt.ltc_1.value=et.state.rectAreaLTC1,Dt.ltc_2.value=et.state.rectAreaLTC2,Dt.pointLights.value=et.state.point,Dt.pointLightShadows.value=et.state.pointShadow,Dt.hemisphereLights.value=et.state.hemi,Dt.sunShadowMatrix.value=et.state.sunShadowMatrix,Dt.sunShadowCascade.value=et.state.sunShadowCascade,Dt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Dt.spotLightMatrix.value=et.state.spotLightMatrix,Dt.spotLightMap.value=et.state.spotLightMap,Dt.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.lightProbeGrid=b.state.lightProbeGridArray.length>0,tt.currentProgram=ne,tt.uniformsList=null,ne}function Uc(T){if(T.uniformsList===null){const Y=T.currentProgram.getUniforms();T.uniformsList=vo.seqWithValue(Y.seq,T.uniforms)}return T.uniformsList}function Nc(T,Y){const ot=st.get(T);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function Qf(T,Y){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(Y.matrixWorld);for(let ot=0,tt=T.length;ot<tt;ot++){const et=T[ot];if(et.texture!==null&&et.boundingBox.containsPoint(v))return et}return null}function jf(T,Y,ot,tt,et){Y.isScene!==!0&&(Y=rt),at.resetTextureUnits();const Tt=Y.fog,Lt=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?Y.environment:null,Et=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:oe.workingColorSpace,It=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Ft=mt.get(tt.envMap||Lt,It),jt=tt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ne=!!ot.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Dt=!!ot.morphAttributes.position,de=!!ot.morphAttributes.normal,Pe=!!ot.morphAttributes.color;let we=qn;tt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(we=C.toneMapping);const Me=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ye=Me!==void 0?Me.length:0,Ct=st.get(tt),Ze=b.state.lights;if(zt===!0&&(Ot===!0||T!==K)){const Se=T===K&&tt.id===G;Gt.setState(tt,T,Se)}let ce=!1;tt.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ze.state.version||Ct.outputColorSpace!==Et||et.isBatchedMesh&&Ct.batching===!1||!et.isBatchedMesh&&Ct.batching===!0||et.isBatchedMesh&&Ct.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Ct.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Ct.instancing===!1||!et.isInstancedMesh&&Ct.instancing===!0||et.isSkinnedMesh&&Ct.skinning===!1||!et.isSkinnedMesh&&Ct.skinning===!0||et.isInstancedMesh&&Ct.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Ct.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Ct.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Ct.instancingMorph===!1&&et.morphTexture!==null||Ct.envMap!==Ft||tt.fog===!0&&Ct.fog!==Tt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Gt.numPlanes||Ct.numIntersection!==Gt.numIntersection)||Ct.vertexAlphas!==jt||Ct.vertexTangents!==ne||Ct.morphTargets!==Dt||Ct.morphNormals!==de||Ct.morphColors!==Pe||Ct.toneMapping!==we||Ct.morphTargetsCount!==Ye||!!Ct.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Ct.__version=tt.version);let mn=Ct.currentProgram;ce===!0&&(mn=Tr(tt,Y,et),D&&tt.isNodeMaterial&&D.onUpdateProgram(tt,mn,Ct));let Fn=!1,fi=!1,Ki=!1;const ge=mn.getUniforms(),Ce=Ct.uniforms;if(w.useProgram(mn.program)&&(Fn=!0,fi=!0,Ki=!0),tt.id!==G&&(G=tt.id,fi=!0),Ct.needsLights){const Se=Qf(b.state.lightProbeGridArray,et);Ct.lightProbeGrid!==Se&&(Ct.lightProbeGrid=Se,fi=!0)}if(Fn||K!==T){w.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(W,"projectionMatrix",T.projectionMatrix),ge.setValue(W,"viewMatrix",T.matrixWorldInverse);const pi=ge.map.cameraPosition;pi!==void 0&&pi.setValue(W,le.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&ge.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ge.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,fi=!0,Ki=!0)}if(Ct.needsLights&&(Ze.state.sunShadowMap.length>0&&ge.setValue(W,"sunShadowMap",Ze.state.sunShadowMap,at),Ze.state.directionalShadowMap.length>0&&ge.setValue(W,"directionalShadowMap",Ze.state.directionalShadowMap,at),Ze.state.spotShadowMap.length>0&&ge.setValue(W,"spotShadowMap",Ze.state.spotShadowMap,at),Ze.state.pointShadowMap.length>0&&ge.setValue(W,"pointShadowMap",Ze.state.pointShadowMap,at)),et.isSkinnedMesh){ge.setOptional(W,et,"bindMatrix"),ge.setOptional(W,et,"bindMatrixInverse");const Se=et.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ge.setValue(W,"boneTexture",Se.boneTexture,at))}et.isBatchedMesh&&(ge.setOptional(W,et,"batchingTexture"),ge.setValue(W,"batchingTexture",et._matricesTexture,at),ge.setOptional(W,et,"batchingIdTexture"),ge.setValue(W,"batchingIdTexture",et._indirectTexture,at),ge.setOptional(W,et,"batchingColorTexture"),et._colorsTexture!==null&&ge.setValue(W,"batchingColorTexture",et._colorsTexture,at));const di=ot.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&$.update(et,ot,mn),(fi||Ct.receiveShadow!==et.receiveShadow)&&(Ct.receiveShadow=et.receiveShadow,ge.setValue(W,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&Y.environment!==null&&(Ce.envMapIntensity.value=Y.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=qv()),fi){if(ge.setValue(W,"toneMappingExposure",C.toneMappingExposure),Ct.needsLights&&td(Ce,Ki),Tt&&tt.fog===!0&&Ht.refreshFogUniforms(Ce,Tt),Ht.refreshMaterialUniforms(Ce,tt,I,R,b.state.transmissionRenderTarget[T.id]),Ct.needsLights&&Ct.lightProbeGrid){const Se=Ct.lightProbeGrid;Ce.probesSH.value=Se.texture,Ce.probesMin.value.copy(Se.boundingBox.min),Ce.probesMax.value.copy(Se.boundingBox.max),Ce.probesResolution.value.copy(Se.resolution)}vo.upload(W,Uc(Ct),Ce,at)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(vo.upload(W,Uc(Ct),Ce,at),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ge.setValue(W,"center",et.center),ge.setValue(W,"modelViewMatrix",et.modelViewMatrix),ge.setValue(W,"normalMatrix",et.normalMatrix),ge.setValue(W,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){const Se=tt.uniformsGroups;for(let pi=0,Zi=Se.length;pi<Zi;pi++){const zc=Se[pi];ft.update(zc,mn),ft.bind(zc,mn)}}return mn}function td(T,Y){T.ambientLightColor.needsUpdate=Y,T.lightProbe.needsUpdate=Y,T.sunLights.needsUpdate=Y,T.sunLightShadows.needsUpdate=Y,T.directionalLights.needsUpdate=Y,T.directionalLightShadows.needsUpdate=Y,T.pointLights.needsUpdate=Y,T.pointLightShadows.needsUpdate=Y,T.spotLights.needsUpdate=Y,T.spotLightShadows.needsUpdate=Y,T.rectAreaLights.needsUpdate=Y,T.hemisphereLights.needsUpdate=Y}function ed(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,Y,ot){const tt=st.get(T);tt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),st.get(T.texture).__webglTexture=Y,st.get(T.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:ot,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Y){const ot=st.get(T);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(T,Y=0,ot=0){j=T,Z=Y,q=ot;let tt=null,et=!1,Tt=!1;if(T){const Et=st.get(T);if(Et.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(W.FRAMEBUFFER,Et.__webglFramebuffer),it.copy(T.viewport),ut.copy(T.scissor),N=T.scissorTest,w.viewport(it),w.scissor(ut),w.setScissorTest(N),G=-1;return}else if(Et.__webglFramebuffer===void 0)at.setupRenderTarget(T);else if(Et.__hasExternalTextures)at.rebindTextures(T,st.get(T.texture).__webglTexture,st.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const jt=T.depthTexture;if(Et.__boundDepthTexture!==jt){if(jt!==null&&st.has(jt)&&(T.width!==jt.image.width||T.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(T)}}const It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Tt=!0);const Ft=st.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[Y])?tt=Ft[Y][ot]:tt=Ft[Y],et=!0):T.samples>0&&at.useMultisampledRTT(T)===!1?tt=st.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?tt=Ft[ot]:tt=Ft,it.copy(T.viewport),ut.copy(T.scissor),N=T.scissorTest}else it.copy(nt).multiplyScalar(I).floor(),ut.copy(dt).multiplyScalar(I).floor(),N=gt;if(ot!==0&&(tt=F),w.bindFramebuffer(W.FRAMEBUFFER,tt)&&w.drawBuffers(T,tt),w.viewport(it),w.scissor(ut),w.setScissorTest(N),et){const Et=st.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Et.__webglTexture,ot)}else if(Tt){const Et=Y;for(let It=0;It<T.textures.length;It++){const Ft=st.get(T.textures[It]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+It,Ft.__webglTexture,ot,Et)}}else if(T!==null&&ot!==0){const Et=st.get(T.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Et.__webglTexture,ot)}G=-1};function Fc(T){const Y=st.get(T);return(Y.__readFormat!==T.format||Y.__readType!==T.type)&&(Y.__readFormat=T.format,Y.__readType=T.type,Y.__formatReadable=z.textureFormatReadable(T.format),Y.__typeReadable=z.textureTypeReadable(T.type)),Y}this.readRenderTargetPixels=function(T,Y,ot,tt,et,Tt,Lt,Et=0){if(!(T&&T.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It){w.bindFramebuffer(W.FRAMEBUFFER,It);try{const Ft=T.textures[Et],jt=Ft.format,ne=Ft.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Et);const Dt=Fc(Ft);if(Dt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Dt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=T.width-tt&&ot>=0&&ot<=T.height-et&&W.readPixels(Y,ot,tt,et,yt.convert(jt),yt.convert(ne),Tt)}finally{const Ft=j!==null?st.get(j).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,Y,ot,tt,et,Tt,Lt,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Lt!==void 0&&(It=It[Lt]),It)if(Y>=0&&Y<=T.width-tt&&ot>=0&&ot<=T.height-et){w.bindFramebuffer(W.FRAMEBUFFER,It);const Ft=T.textures[Et],jt=Ft.format,ne=Ft.type;T.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Et);const Dt=Fc(Ft);if(Dt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Dt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,de),W.bufferData(W.PIXEL_PACK_BUFFER,Tt.byteLength,W.STREAM_READ),W.readPixels(Y,ot,tt,et,yt.convert(jt),yt.convert(ne),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const Pe=j!==null?st.get(j).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,Pe);const we=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await kd(W,we,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,de),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Tt),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(de),W.deleteSync(we),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Y=null,ot=0){const tt=Math.pow(2,-ot),et=Math.floor(T.image.width*tt),Tt=Math.floor(T.image.height*tt),Lt=Y!==null?Y.x:0,Et=Y!==null?Y.y:0;at.setTexture2D(T,0),W.copyTexSubImage2D(W.TEXTURE_2D,ot,0,0,Lt,Et,et,Tt),w.unbindTexture()},this.copyTextureToTexture=function(T,Y,ot=null,tt=null,et=0,Tt=0){let Lt,Et,It,Ft,jt,ne,Dt,de,Pe;const we=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(ot!==null)Lt=ot.max.x-ot.min.x,Et=ot.max.y-ot.min.y,It=ot.isBox3?ot.max.z-ot.min.z:1,Ft=ot.min.x,jt=ot.min.y,ne=ot.isBox3?ot.min.z:0;else{const Ce=Math.pow(2,-et);Lt=Math.floor(we.width*Ce),Et=Math.floor(we.height*Ce),T.isDataArrayTexture?It=we.depth:T.isData3DTexture?It=Math.floor(we.depth*Ce):It=1,Ft=0,jt=0,ne=0}tt!==null?(Dt=tt.x,de=tt.y,Pe=tt.z):(Dt=0,de=0,Pe=0);const Me=yt.convert(Y.format),Ye=yt.convert(Y.type);let Ct;Y.isData3DTexture?(at.setTexture3D(Y,0),Ct=W.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(at.setTexture2DArray(Y,0),Ct=W.TEXTURE_2D_ARRAY):(at.setTexture2D(Y,0),Ct=W.TEXTURE_2D),w.activeTexture(W.TEXTURE0),w.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),w.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),w.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ze=w.getParameter(W.UNPACK_ROW_LENGTH),ce=w.getParameter(W.UNPACK_IMAGE_HEIGHT),mn=w.getParameter(W.UNPACK_SKIP_PIXELS),Fn=w.getParameter(W.UNPACK_SKIP_ROWS),fi=w.getParameter(W.UNPACK_SKIP_IMAGES);w.pixelStorei(W.UNPACK_ROW_LENGTH,we.width),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,we.height),w.pixelStorei(W.UNPACK_SKIP_PIXELS,Ft),w.pixelStorei(W.UNPACK_SKIP_ROWS,jt),w.pixelStorei(W.UNPACK_SKIP_IMAGES,ne);const Ki=T.isDataArrayTexture||T.isData3DTexture,ge=Y.isDataArrayTexture||Y.isData3DTexture;if(T.isDepthTexture){const Ce=st.get(T),di=st.get(Y),Se=st.get(Ce.__renderTarget),pi=st.get(di.__renderTarget);w.bindFramebuffer(W.READ_FRAMEBUFFER,Se.__webglFramebuffer),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Zi=0;Zi<It;Zi++)Ki&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(T).__webglTexture,et,ne+Zi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,st.get(Y).__webglTexture,Tt,Pe+Zi)),W.blitFramebuffer(Ft,jt,Lt,Et,Dt,de,Lt,Et,W.DEPTH_BUFFER_BIT,W.NEAREST);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(et!==0||T.isRenderTargetTexture||st.has(T)){const Ce=st.get(T),di=st.get(Y);w.bindFramebuffer(W.READ_FRAMEBUFFER,H),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,O);for(let Se=0;Se<It;Se++)Ki?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ce.__webglTexture,et,ne+Se):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ce.__webglTexture,et),ge?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,di.__webglTexture,Tt,Pe+Se):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,di.__webglTexture,Tt),et!==0?W.blitFramebuffer(Ft,jt,Lt,Et,Dt,de,Lt,Et,W.COLOR_BUFFER_BIT,W.NEAREST):ge?W.copyTexSubImage3D(Ct,Tt,Dt,de,Pe+Se,Ft,jt,Lt,Et):W.copyTexSubImage2D(Ct,Tt,Dt,de,Ft,jt,Lt,Et);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?W.texSubImage3D(Ct,Tt,Dt,de,Pe,Lt,Et,It,Me,Ye,we.data):Y.isCompressedArrayTexture?W.compressedTexSubImage3D(Ct,Tt,Dt,de,Pe,Lt,Et,It,Me,we.data):W.texSubImage3D(Ct,Tt,Dt,de,Pe,Lt,Et,It,Me,Ye,we):T.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Tt,Dt,de,Lt,Et,Me,Ye,we.data):T.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Tt,Dt,de,we.width,we.height,Me,we.data):W.texSubImage2D(W.TEXTURE_2D,Tt,Dt,de,Lt,Et,Me,Ye,we);w.pixelStorei(W.UNPACK_ROW_LENGTH,Ze),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ce),w.pixelStorei(W.UNPACK_SKIP_PIXELS,mn),w.pixelStorei(W.UNPACK_SKIP_ROWS,Fn),w.pixelStorei(W.UNPACK_SKIP_IMAGES,fi),Tt===0&&Y.generateMipmaps&&W.generateMipmap(Ct),w.unbindTexture()},this.initRenderTarget=function(T){st.get(T).__webglFramebuffer===void 0&&at.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?at.setTextureCube(T,0):T.isData3DTexture?at.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?at.setTexture2DArray(T,0):at.setTexture2D(T,0),w.unbindTexture()},this.resetState=function(){Z=0,q=0,j=null,w.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const Sf="#f7f7f7",nn=.0254,cc={canvas:.038,panel:.022,paper:.012,digital:.012},Po={face:.75*nn,depth:1.5*nn,mat:3*nn,lip:.25*nn,bevel:.125*nn},$v={black:"#161616",white:"#efeee9"},Kv={white:"#f4f2ec",black:"#1c1c1c"},Zv="#faf9f4",Io={strip:.25*nn,depth:2*nn,gap:.25*nn,below:.25*nn},Jv="#e3cba2",Qv="#111111";function hc(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const uc=s=>!!s&&s.style==="float";function jv(s){const t=hc(s),e=t?uc(t)?2*(Io.gap+Io.strip):2*(Po.mat+Po.face):0;return[s.w*nn+e,s.h*nn+e]}const t_=s=>{const t=hc(s);return t?uc(t)?Io.depth:Po.depth:cc[s.kind]};async function e_(){const s={},t=async o=>{const a=await fetch(`data/${o}.json?${Date.now()}`,{cache:"no-store"});if(!a.ok)throw new Error(`data/${o}.json: ${a.status}`);return s[o]=a.headers.get("x-rev")??"",a.json()},[e,n,i,r]=await Promise.all([t("catalogue"),t("layout"),t("images"),t("machines")]);return n.machines??(n.machines=[]),{catalogue:e,layout:n,images:i,machines:r,revs:s}}const n_=(s,t)=>`${s}:${t}`,Da=(s,t,e)=>s.paint[n_(t,e)]??s.defaultPaint;function Do(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,r=Math.round(i*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const Uo=s=>s.title.trim()||"Untitled",Xh=.004;function i_(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const o=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:o,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const s_=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,qh=(s,t,e,n)=>s.some(i=>i.id!==n&&s_(i.rect,t,e));function Yh(s,t,e){let n=[[s,t]];for(const[i,r]of e){const o=[];for(const[a,l]of n){if(r<=a||i>=l){o.push([a,l]);continue}i>a&&o.push([a,i]),r<l&&o.push([r,l])}n=o}return n.filter(([i,r])=>r-i>.05)}function r_(s){var f;const t=i_(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,r=s.doorHeight,o={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=m=>{const x=s.doors.filter(g=>g.wall===m).map(g=>[Math.min(g.a,g.b),Math.max(g.a,g.b)]);return m==="S"&&x.push([o.a,o.b]),x},l=[],c=[];for(const m of t){for(const g of m.sides){const p=m.rect,M=m.axis==="x"?g>0?p.z1:p.z0:g>0?p.x1:p.x0,E=m.axis==="x"?[0,g]:[g,0],v=[E[1],-E[0]],S=[];for(const y of t){if(y===m)continue;const C=y.rect,L=m.axis==="x"?C.z0:C.x0,D=m.axis==="x"?C.z1:C.x1;if(!(g>0?L<=M+Xh&&D>=M+.01:D>=M-Xh&&L<=M-.01))continue;const H=m.axis==="x"?C.x0:C.z0,O=m.axis==="x"?C.x1:C.z1;S.push([H,O])}const b=m.outer?m.a0:Math.max(m.a0,m.axis==="x"?n.x0:n.z0),A=m.outer?m.a1:Math.min(m.a1,m.axis==="x"?n.x1:n.z1),_=a(m.id);for(const[y,C]of Yh(b,A,S)){const L=D=>{const F=m.axis==="x"?D:M+E[0]*.02,H=m.axis==="x"?M+E[1]*.02:D;return qh(t,F,H,m.id)};l.push({key:`${m.id}:${g}:${y.toFixed(3)}`,wall:m.id,side:g,axis:m.axis,plane:M,u0:y,u1:C,n:E,right:v,cornerA:L(y-.02),cornerB:L(C+.02),freeA:!m.outer&&!L(y-.02)&&Math.abs(y-m.a0)<1e-6,freeB:!m.outer&&!L(C+.02)&&Math.abs(C-m.a1)<1e-6,outer:m.outer,t:m.t,doors:_.map(([D,F])=>[Math.max(D,y),Math.min(F,C)]).filter(([D,F])=>F-D>.01),color:((f=(s.paintAt??[]).find(D=>D.wall===m.id&&D.side===g&&D.u>=y-1e-6&&D.u<=C+1e-6))==null?void 0:f.color)??Da(s,m.id,g)})}}if(m.outer)continue;const x=Da(s,m.id,1);for(const g of[m.a0,m.a1]){const p=g===m.a0?-1:1,M=m.axis==="x"?g+p*.02:(m.rect.x0+m.rect.x1)/2,E=m.axis==="x"?(m.rect.z0+m.rect.z1)/2:g+p*.02;qh(t,M,E,m.id)||(m.axis==="x"?c.push(Mi(g,m.rect.z0,g,m.rect.z1,[p,0,0],i,x)):c.push(Mi(m.rect.x0,g,m.rect.x1,g,[0,0,p],i,x)))}for(const[g,p]of a(m.id)){const M=m.rect;m.axis==="x"?(c.push(Mi(g,M.z0,g,M.z1,[1,0,0],r,x)),c.push(Mi(p,M.z0,p,M.z1,[-1,0,0],r,x)),c.push(Ua(g,p,M.z0,M.z1,"x",r,x))):(c.push(Mi(M.x0,g,M.x1,g,[0,0,1],r,x)),c.push(Mi(M.x0,p,M.x1,p,[0,0,-1],r,x)),c.push(Ua(g,p,M.x0,M.x1,"z",r,x)))}}const h=.04,u=Da(s,"S",-1);c.push(Mi(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,u)),c.push(Mi(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,u)),c.push(Ua(o.a,o.b,e.z1,e.z1+h,"x",r,u));const d=[];for(const m of t){const x=m.rect,g=m.axis==="x"?[x.x0,x.x1]:[x.z0,x.z1];for(const[p,M]of Yh(g[0],g[1],a(m.id)))d.push(m.axis==="x"?{x0:p,x1:M,z0:x.z0,z1:x.z1}:{x0:x.x0,x1:x.x1,z0:p,z1:M})}return{inner:n,H:i,doorH:r,walls:t,faces:l,extra:c,solids:d,entrance:o,ceilColor:s.ceilingPaint??Sf,ceilAt:s.ceilingAt??[]}}function Mi(s,t,e,n,i,r,o){const a=e-s,l=n-t,c=a*i[2]-l*i[0],[h,u]=c>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],r,u[1]],[h[0],r,h[1]]],n:i,color:o}}function Ua(s,t,e,n,i,r,o){const a=(c,h)=>i==="x"?[c,r,h]:[h,r,c];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const Li=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],fc=s=>s.axis==="x"?s.right[0]:s.right[1];function Wi(s,t,e,n,i,r=0){const o=n-t,a=i-e;for(const l of s){let c=0,h=1;const u=(d,f)=>{if(Math.abs(d)<1e-12)return f>=0;const m=f/d;if(d<0){if(m>h)return!1;m>c&&(c=m)}else{if(m<c)return!1;m<h&&(h=m)}return!0};if(u(-o,t-l.x0)&&u(o,l.x1-t)&&u(-a,e-l.z0)&&u(a,l.z1-e)&&h-c>1e-4&&h>r&&c<1-r)return!0}return!1}function o_(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*i).fill(-2);for(const c of s.walls){const h=c.rect,u=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),d=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),f=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),m=Math.min(i-1,Math.floor((h.z1+r-e.z0)/t));for(let x=f;x<=m;x++)for(let g=u;g<=d;g++)o[x*n+g]=-1}let a=0;const l=[];for(let c=0;c<n*i;c++)if(o[c]===-2){for(o[c]=a,l.push(c);l.length;){const h=l.pop(),u=h%n,d=(h-u)/n;u>0&&o[h-1]===-2&&(o[h-1]=a,l.push(h-1)),u<n-1&&o[h+1]===-2&&(o[h+1]=a,l.push(h+1)),d>0&&o[h-n]===-2&&(o[h-n]=a,l.push(h-n)),d<i-1&&o[h+n]===-2&&(o[h+n]=a,l.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:o,rooms:a}}function a_(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function l_(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=a_(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const bs=.125,ur=.086,$h=.12,No=1e3,Fo='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',fr=140,zo=62,wf=46;let $s=null;function c_(s){$s??($s=document.createElement("canvas").getContext("2d")),$s.font=`300 ${fr}px ${Fo}`;const t=$s.measureText(s.title).width;$s.font=`400 ${zo}px ${Fo}`;const e=s.sub?$s.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/No,h:(fr+(s.sub?wf+zo:0)+30)/No}}const kl=.03,h_=.35,Kh=1.1;function u_(s,t){if(s.text){const n=c_(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?jv(e):[.3,.3]}function f_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function d_(s,t,e,n,i,r){const o=s.u0+i/2+kl,a=s.u1-i/2-kl,l=o>a?(s.u0+s.u1)/2:Math.max(o,Math.min(a,e)),c=r/2+.05,h=t-.12-r/2,u=c>h?t/2:Math.max(c,Math.min(h,n));return{u:l,y:u}}function p_(s,t,e,n,i){const r=fc(s),o=t*r,a=r>0?s.u1:-s.u0;let l=o+n/2+$h+bs/2;l+bs/2>a-kl&&(l=o-n/2-$h-bs/2);const c=Math.max(.2+ur/2,e-i/2+ur/2);return{pos:Li(s,l*r,c),w:bs,h:ur}}function m_(s,t,e){const n=[],i=[];for(const l of s.hang){if(!l.text&&(!e.has(l.id)||e.get(l.id).off))continue;const c=f_(t,l);if(!c){n.push(l);continue}const[h,u]=u_(l,e),d=d_(c,t.H,l.u,l.y,h,u);l.u=+d.u.toFixed(4),l.y=+d.y.toFixed(4);const f=l.text?void 0:e.get(l.id);i.push({id:l.id,work:f,text:l.text,place:l,face:c,pos:Li(c,d.u,d.y),w:h,h:u,depth:f?t_(f):.001,label:f?p_(c,d.u,d.y,h,u):null,over:!1})}const r=l=>l.face.axis==="x"?l.pos[0]:l.pos[2];for(let l=0;l<i.length;l++){const c=i[l];for(const[h,u]of c.face.doors)r(c)+c.w/2>h&&r(c)-c.w/2<u&&c.pos[1]-c.h/2<t.doorH&&(c.over=!0);for(let h=l+1;h<i.length;h++){const u=i[h];if(u.face!==c.face)continue;const d=Math.abs(r(c)-r(u))<(c.w+u.w)/2-.005,f=Math.abs(c.pos[1]-u.pos[1])<(c.h+u.h)/2-.005;d&&f&&(c.over=!0,u.over=!0)}}const o=[],a=new Map;for(const l of i)a.has(l.face)||a.set(l.face,[]),a.get(l.face).push(l);for(const[l,c]of a){const h=c.map((x,g)=>g),u=x=>h[x]===x?x:h[x]=u(h[x]);for(let x=0;x<c.length;x++)for(let g=x+1;g<c.length;g++){const p=c[x],M=c[g];if(p.text||M.text)continue;const E=Math.abs(r(p)-r(M))-(p.w+M.w)/2,v=Math.abs(p.pos[1]-M.pos[1])-(p.h+M.h)/2;Math.max(E,v)<h_&&(h[u(x)]=u(g))}const d=new Map;c.forEach((x,g)=>{const p=u(g);d.has(p)||d.set(p,[]),d.get(p).push(x)});const f=[l.n[0],0,l.n[1]],m=[l.right[0],0,l.right[1]];for(const x of d.values()){const g=Math.min(...x.map(b=>r(b)-b.w/2)),p=Math.max(...x.map(b=>r(b)+b.w/2)),M=Math.min(...x.map(b=>b.pos[1]-b.h/2)),E=Math.max(...x.map(b=>b.pos[1]+b.h/2)),v=Li(l,(g+p)/2,(M+E)/2),S={w:p-g,h:E-M};o.push({face:l,centre:v,normal:f,right:m,w:S.w,h:S.h,items:x,lamp:g_(v,f,m,S,x,t)})}}return{placed:o,items:i,homeless:n}}function g_(s,t,e,n,i,r){const o=r.H-.03;let a=Kh;for(let M=.2;M<=Kh+.25;M+=.05)if(Wi(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[s[0]+t[0]*a,o,s[2]+t[2]*a],c=i.reduce((M,E)=>M+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],d=Math.hypot(u[0],u[1],u[2]),f=[u[0]/d,u[1]/d,u[2]/d];let m=0;for(const[M,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-l[0],s[1]+E*n.h/2-l[1],s[2]+e[2]*M*n.w/2-l[2]],S=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*f[0]+v[1]*f[1]+v[2]*f[2])/S)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,g=[-u[0]/d,-u[1]/d,-u[2]/d],p=g[0]*t[0]+g[2]*t[2];return{p:l,d:f,cOuter:Math.cos(x),cInner:Math.cos(m),i:d*d/Math.max(.2,p)}}const x_=1.45,bf=.07,Ef=.07,Tf=.125,v_=.086,Af=.12,__=1.3,Rf=.16,Zh=1e3,Jh='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',Qh=140,jh=62,M_=46,y_=1.6;let Ks=null;function Cf(s){Ks??(Ks=document.createElement("canvas").getContext("2d")),Ks.font=`300 ${Qh}px ${Jh}`;const t=Ks.measureText(s.title).width;Ks.font=`400 ${jh}px ${Jh}`;const e=s.sub?Ks.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/Zh,h:(Qh+(s.sub?M_+jh:0)+30)/Zh,colW:[],colH:[]}}const S_=6400;function w_(s){return s.map(t=>({title:Uo(t),detail:[t.medium,Do(t),t.year].filter(Boolean).join(", ")}))}const b_=s=>(150+w_(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/S_,tu=.45,eu=.25,Na=.4,nu=.12,iu=1.1,Bl=s=>[s.w*nn,s.h*nn];function Lf(s,t){const e=[],n=[];for(const o of s){const a=o.map(l=>t.get(l)).filter(Boolean);e.push(Math.max(0,...a.map(l=>Bl(l)[0]))),n.push(a.reduce((l,c)=>l+Bl(c)[1],0)+Ef*Math.max(0,a.length-1))}const i=e.reduce((o,a)=>o+a,0)+bf*Math.max(0,s.length-1),r=Math.max(0,...n);return{w:i,h:r,colW:e,colH:n}}const E_=s=>s.cols.reduce((t,e)=>t+e.length,0),T_=s=>E_(s)>1?Rf:Tf,A_=(s,t)=>s.text?Cf(s.text).w:Lf(s.cols,t).w+Af+T_(s);function R_(s){const t=[];let e=s.u0+(s.cornerA?tu:eu);const n=s.u1-(s.cornerB?tu:eu);for(const[i,r]of[...s.doors].sort((o,a)=>o[0]-a[0]))i-Na-e>.3&&t.push([e,i-Na]),e=Math.max(e,r+Na);return n-e>.3&&t.push([e,n]),t}function C_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function L_(s,t,e){const n=new Map,i=[];for(const o of s.hang){if(!o.text&&(o.cols=o.cols.map(l=>l.filter(c=>e.has(c))).filter(l=>l.length),!o.cols.length))continue;const a=C_(t,o);if(!a){i.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const l=R_(o);if(!l.length){i.push(...a);continue}const c=l.map(()=>[]);for(const u of a){let d=0,f=1/0;l.forEach(([m,x],g)=>{const p=u.u<m?m-u.u:u.u>x?u.u-x:0;p<f&&(f=p,d=g)}),c[d].push(u)}const h=fc(o);l.forEach(([u,d],f)=>{const m=c[f].sort((b,A)=>(b.u-A.u)*h);if(!m.length)return;const x=m.map(b=>A_(b,e)),g=d-u,p=x.reduce((b,A)=>b+A,0);let M=(g-p)/(m.length+1);const E=M<nu;E&&(M=nu);const v=p+M*(m.length+1);let S=(h>0?u:-d)+(g-v)/2+M;m.forEach((b,A)=>{const _=b.text?Cf(b.text):Lf(b.cols,e),C=(S+_.w/2)*h;b.u=+C.toFixed(4),r.push(P_(b,o,C,_,e,t,E)),S+=x[A]+M})})}return{placed:r,homeless:i}}function P_(s,t,e,n,i,r,o){const a=fc(t),l=[t.n[0],0,t.n[1]],c=[t.right[0],0,t.right[1]];let h=s.text?y_:x_;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const u=[];let d=-n.w/2;s.cols.forEach((E,v)=>{const S=n.colW[v],b=n.colH[v];let A=h+b/2;for(const _ of E){const y=i.get(_),[C,L]=Bl(y),D=d+S/2;u.push({work:y,pos:Li(t,e+D*a,A-L/2),w:C,h:L,depth:cc[y.kind]}),A-=L+Ef}d+=S+bf});const f=s.cols.flat().map(E=>i.get(E)),m=f.length>1?Rf:Tf,x=f.length>1?b_(f):v_,g=e+(n.w/2+Af+m/2)*a,p=Math.min(__,h+n.h/2-x/2),M=Li(t,e,h);return{def:s,face:t,centre:M,normal:l,right:c,w:n.w,h:n.h,items:u,label:{pos:Li(t,g,Math.max(p,.3+x/2)),w:m,h:x,works:f},lamp:I_(M,l,c,n,u,r),over:o,text:s.text}}function I_(s,t,e,n,i,r){const o=r.H-.03;let a=iu;for(let M=.2;M<=iu+.25;M+=.05)if(Wi(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[s[0]+t[0]*a,o,s[2]+t[2]*a],c=i.reduce((M,E)=>M+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],d=Math.hypot(u[0],u[1],u[2]),f=[u[0]/d,u[1]/d,u[2]/d];let m=0;for(const[M,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-l[0],s[1]+E*n.h/2-l[1],s[2]+e[2]*M*n.w/2-l[2]],S=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*f[0]+v[1]*f[1]+v[2]*f[2])/S)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,g=[-u[0]/d,-u[1]/d,-u[2]/d],p=g[0]*t[0]+g[2]*t[2];return{p:l,d:f,cOuter:Math.cos(x),cInner:Math.cos(m),i:d*d/Math.max(.2,p)}}function D_(s,t,e){if(s.version===2||!s.hang.some(o=>"cols"in o))return!1;const{placed:n}=L_(s,t,e),i=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&i.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const l of o.items)i.push({id:l.work.id,wall:a.wall,side:a.side,u:r(a,l.pos),y:+l.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const U_=["b","c","s","t","sh","hl"],Pf=s=>!s||U_.every(t=>!s[t]);function If(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const su=s=>Math.min(1,Math.max(0,s));function N_(s,t){let e=Math.pow(s,t.gamma);e=su(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return su(e+t.sh*.25*n+t.hl*.25*i)}const F_=`
  uniform float uAdj; uniform vec3 uWarm; uniform float uGamma; uniform float uContrast; uniform float uShadows; uniform float uHigh; uniform float uSat;
  vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
  vec3 toLinear(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
  vec3 adjust(vec3 lin) {
    if (uAdj < 0.5) return lin;
    vec3 s = clamp(toSRGB(lin) * uWarm, 0.0, 1.0);
    s = pow(s, vec3(uGamma));
    s = clamp(0.5 + (s - 0.5) * uContrast, 0.0, 1.0);
    vec3 ws = s * (1.0 - s) * (1.0 - s) * 6.75, wh = s * s * (1.0 - s) * 6.75;
    s = clamp(s + uShadows * 0.25 * ws + uHigh * 0.25 * wh, 0.0, 1.0);
    float y = dot(s, vec3(0.2126, 0.7152, 0.0722));
    return toLinear(clamp(mix(vec3(y), s, uSat), 0.0, 1.0));
  }`;function z_(s){const t=If(s);return{uAdj:{value:Pf(s)?0:1},uWarm:{value:new U(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let yi=null;const ru="http://www.w3.org/2000/svg";function O_(s,t){if(Pf(t))return"";yi||(yi=document.createElementNS(ru,"svg"),yi.setAttribute("width","0"),yi.setAttribute("height","0"),yi.style.position="absolute",document.body.append(yi));const e=`adj-${s}`;let n=yi.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(ru,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),yi.append(n));const i=If(t),[r,,o]=i.warm,a=[.2126,.7152,.0722],l=i.sat,c=Array.from({length:65},(u,d)=>N_(d/64,i).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(d=>((1-l)*a[d]+(u===d?l:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${o} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${c}"/><feFuncG type="table" tableValues="${c}"/><feFuncB type="table" tableValues="${c}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const Bi=1.62,k_=12,B_=6.5,H_=2,G_=1.7,Si=1.15,ou=.0022,V_=2.6,W_=4.6,un=.3;class X_{constructor(t){P(this,"pos",new U(6.6,Bi,10.2));P(this,"vel",new U);P(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));P(this,"pitch",.05);P(this,"yawVel",0);P(this,"pitchVel",0);P(this,"keys",new Set);P(this,"taps",new Map);P(this,"frozen",!1);P(this,"holdLook",!1);P(this,"freeLook",!1);P(this,"glide",new Bt);P(this,"spin",0);P(this,"goal",null);P(this,"moved",!1);P(this,"solids",[]);P(this,"obstacles",[]);P(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("message",e=>{var i;const n=(i=e.data)==null?void 0:i.rmiKey;!n||!/^https:\/\/(www\.)?robynmiller\.net$/.test(e.origin)||(n.type==="down"?this.keys.add(n.code):this.keys.delete(n.code))}),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{this.frozen||(document.pointerLockElement===this.canvas?this.holdLook:!this.freeLook)||(this.yaw-=e.movementX*ou,this.pitch=Math.max(-Si,Math.min(Si,this.pitch-e.movementY*ou)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}drag(t,e){this.pos.x+=t,this.pos.z+=e,this.collide(),this.moved=!0,this.goal=null}turnBy(t,e){this.yaw+=t,this.pitch=Math.max(-Si,Math.min(Si,this.pitch+e)),this.moved=!0,this.goal=null}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*H_-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*G_-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>Si||this.pitch<-Si)&&(this.pitch=Math.max(-Si,Math.min(Si,this.pitch)),this.pitchVel=0);let r=0,o=0;e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1),(r||o||n||i)&&(this.moved=!0);let a=0,l=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?W_:V_,u=Math.hypot(r,o),d=Math.sin(this.yaw),f=Math.cos(this.yaw);a=(-d*r+f*o)/u*h,l=(-f*r-d*o)/u*h}const c=1-Math.exp(-(r||o?k_:B_)*t);if(this.vel.x+=(a-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const d=this.pos.x-(h+this.vel.x*t),f=this.pos.z-(u+this.vel.z*t),m=Math.hypot(d,f);if(m>1e-9){const x=d/m,g=f/m,p=this.vel.x*x+this.vel.z*g;p<0&&(this.vel.x-=x*p,this.vel.z-=g*p)}}this.frozen||this.coast(t)}coast(t){const e=this.goal;if(e){const n=e.x-this.pos.x,i=e.z-this.pos.z,r=Math.hypot(n,i),o=1-Math.exp(-2.6*t),a=Math.min(r,Math.max(r*o,Math.min(r,.9*t)));if(r>1e-4){const l=this.pos.x,c=this.pos.z;this.pos.x+=n/r*a,this.pos.z+=i/r*a,this.collide(),Math.hypot(this.pos.x-l,this.pos.z-c)<a*.2&&(this.goal=null)}e.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw))*o),e.pitch!==void 0&&(this.pitch+=(e.pitch-this.pitch)*o),r<.02&&(e.yaw===void 0||Math.abs(Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,i=this.pos.z;this.pos.x+=this.glide.x*t,this.pos.z+=this.glide.y*t,this.collide();const r=(this.pos.x-n)/Math.max(t,1e-6),o=(this.pos.z-i)/Math.max(t,1e-6);this.glide.set(r,o).multiplyScalar(Math.exp(-2.4*t)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*t,this.spin*=Math.exp(-3.2*t)):this.spin=0}collide(){const t=this.pos;for(let e=0;e<2;e++)for(const n of this.solids){const i=Math.max(n.x0,Math.min(t.x,n.x1)),r=Math.max(n.z0,Math.min(t.z,n.z1)),o=t.x-i,a=t.z-r,l=o*o+a*a;if(!(l>=un*un))if(l>1e-12){const c=Math.sqrt(l);t.x+=o/c*(un-c),t.z+=a/c*(un-c)}else{const c=[t.x-n.x0+un,n.x1-t.x+un,t.z-n.z0+un,n.z1-t.z+un],h=Math.min(...c);h===c[0]?t.x=n.x0-un:h===c[1]?t.x=n.x1+un:h===c[2]?t.z=n.z0-un:t.z=n.z1+un}}for(const e of this.obstacles){const n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i),o=un*.7+e.r;r<o&&r>1e-6&&(t.x=e.x+n/r*o,t.z=e.z+i/r*o)}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const dc=.0254,Hl=.72,pc=.7,sn=2*dc,q_=6*dc,Y_=.15,ke=Bi,Ln=-pc/2,Pn=pc/2,Ei=Ln+q_,mc=ke+Ei,or=s=>mc-s,_n=s=>mc-s-Y_*Math.SQRT2,Fa=or(Pn),Is=.46,Ds=.3,Oo=.018,ko=-.06,au={w:Is-.07,h:Ds-.08},lu={w:Is,h:Ds},$_=.47,K_=.5,cu=.7,yr=new U(0,1,1).normalize(),Df=new U(0,1,-1).normalize(),Uf={value:0};function Z_(s,t,e){const n=new Map(t.map(r=>[r.id,r])),i=[];for(const r of s.machines??[]){const o=n.get(r.id);if(!o||o.off)continue;const a=Xe.degToRad(r.rot),l=new Jt().makeRotationY(a).setPosition(r.x,0,r.z),c=[Math.sin(a),0,Math.cos(a)],h=new Kt().setFromMatrix4(l),u=new U(0,_n(ko),ko).addScaledVector(yr,.004).applyMatrix4(l),d=yr.clone().applyMatrix3(h),f=Df.clone().applyMatrix3(h),m=new U(1,0,0).applyMatrix3(h);i.push({machine:o,spot:r,matrix:l,front:c,screen:{c:u,n:d,up:f,right:m,w:Is,h:Ds},lamp:J_(r,c,u,e)})}return i}function J_(s,t,e,n){const i=[s.x+t[0]*cu,n-.03,s.z+t[2]*cu],r=new U(e.x-i[0],e.y-i[1],e.z-i[2]),o=r.length();r.divideScalar(o);const a=Math.atan2(.62,o),l=a+Xe.degToRad(11);return{p:i,d:[r.x,r.y,r.z],cOuter:Math.cos(l),cInner:Math.cos(a),i:K_*o*o}}const wi=new kt("#efeee9"),Zs=new kt("#3a3a3a");function Q_(){const s=[],t=[],e=[],n=[],i=[],r=g=>new U(g[0],g[1],g[2]),o=(g,p,M,E)=>{const v=new U().crossVectors(r(g[1]).sub(r(g[0])),r(g[2]).sub(r(g[0]))).normalize();v.dot(r(p))<0&&(g=[...g].reverse(),v.negate());const S=s.length/3;for(const b of g)s.push(b[0],b[1],b[2]),t.push(v.x,v.y,v.z),e.push(M.r,M.g,M.b),n.push(E);for(let b=1;b<g.length-1;b++)i.push(S,S+b,S+b+1)},a=-Hl/2,l=Hl/2,c=a+sn,h=l-sn,u=(g,p)=>[g,or(p),p];o([[a,0,Ln],[l,0,Ln],[l,ke,Ln],[a,ke,Ln]],[0,0,-1],wi,0),o([[a,0,Pn],[l,0,Pn],[l,Fa,Pn],[a,Fa,Pn]],[0,0,1],wi,0),o([[a,ke,Ln],[l,ke,Ln],[l,ke,Ei],[a,ke,Ei]],[0,1,0],wi,0);for(const[g,p]of[[a,-1],[l,1]])o([[g,0,Ln],[g,0,Pn],[g,Fa,Pn],[g,ke,Ei],[g,ke,Ln]],[p,0,0],wi,0);const d=Ei+sn,f=Pn-sn;o([u(a,f),u(l,f),u(l,Pn),u(a,Pn)],[0,1,1],wi,0),o([u(a,Ei),u(l,Ei),u(l,d),u(a,d)],[0,1,1],wi,0),o([u(a,d),u(c,d),u(c,f),u(a,f)],[0,1,1],wi,0),o([u(h,d),u(l,d),u(l,f),u(h,f)],[0,1,1],wi,0);const m=Ln+sn;o([[c,_n(f),f],[h,_n(f),f],[h,or(f),f],[c,or(f),f]],[0,0,-1],Zs,1),o([[c,_n(m),m],[h,_n(m),m],[h,ke-sn,m],[c,ke-sn,m]],[0,0,1],Zs,1),o([[c,ke-sn,m],[h,ke-sn,m],[h,ke-sn,d],[c,ke-sn,d]],[0,-1,0],Zs,1);for(const[g,p]of[[c,1],[h,-1]])o([[g,_n(m),m],[g,_n(f),f],[g,or(f),f],[g,ke-sn,d],[g,ke-sn,m]],[p,0,0],Zs,1);o([[c,_n(m),m],[h,_n(m),m],[h,_n(f),f],[c,_n(f),f]],[0,1,1],Zs,1);const x=new Ae;return x.setAttribute("position",new Yt(s,3)),x.setAttribute("normal",new Yt(t,3)),x.setAttribute("aCol",new Yt(e,3)),x.setAttribute("aInner",new Yt(n,1)),x.setIndex(i),x}let hu=null;const gc=`
  #define KW ${(Hl/2).toFixed(5)}
  #define KD ${(pc/2).toFixed(5)}
  #define KH ${ke.toFixed(5)}
  #define KT ${sn.toFixed(5)}
  #define KZB ${Ln.toFixed(5)}
  #define KZF ${Pn.toFixed(5)}
  #define KZC ${Ei.toFixed(5)}
  #define KK ${mc.toFixed(5)}
`;function j_(s,t,e,n){return new Ve({uniforms:{uLP:{value:s},uLD:{value:t},uLC:{value:new Bt(e.cOuter,e.cInner)},uLI:{value:e.i},uAmb:{value:Ko},uLCol:{value:Ns},uSC:{value:n},uSN:{value:yr.clone()}},vertexShader:`
      attribute vec3 aCol; attribute float aInner;
      varying vec3 vP; varying vec3 vN; varying vec3 vWN; varying vec3 vCol; varying float vInner;
      void main() {
        vP = position; vN = normal; vWN = normalize(mat3(modelMatrix) * normal); vCol = aCol; vInner = aInner;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${gc}
      uniform vec3 uLP; uniform vec3 uLD; uniform vec2 uLC; uniform float uLI; uniform float uAmb; uniform vec3 uLCol;
      uniform vec3 uSC; uniform vec3 uSN;
      varying vec3 vP; varying vec3 vN; varying vec3 vWN; varying vec3 vCol; varying float vInner;
      void main() {
        vec3 n = normalize(vN);
        vec3 L = uLP - vP;
        float d2 = dot(L, L);
        vec3 l = L * inversesqrt(d2);
        float spot = smoothstep(uLC.x, uLC.y, dot(-l, uLD));
        float lit = 1.0;
        if (vInner > 0.5) {
          // inside: lit only where the way to the lamp goes out through the opening
          float fa = vP.y + vP.z - KK, fb = uLP.y + uLP.z - KK;
          if (fb <= 0.0 || fa >= fb) lit = 0.0;
          else {
            vec3 q = vP + (uLP - vP) * (-fa / (fb - fa));
            float e = 0.004;
            lit = smoothstep(-e, e, min(min(q.x - (-KW + KT), (KW - KT) - q.x), min(q.z - (KZC + KT), (KZF - KT) - q.z)));
          }
        }
        float direct = uLI * spot * max(dot(n, l), 0.0) / d2 * lit;
        // the room's light, leaning a little one way so each face takes its own shade
        float amb = uAmb * (0.9 + 0.12 * dot(normalize(vWN.xz + 1e-4), vec2(0.45, 0.893)) * (1.0 - abs(vWN.y)) + 0.1 * vWN.y);
        float ao = 1.0 - 0.45 * exp(-vP.y / 0.07);
        if (vInner > 0.5) {
          float depth = (KK - vP.y - vP.z) * 0.7071;       // how far down into the hollow
          ao *= 1.0 - 0.55 * smoothstep(0.0, 0.16, depth);
        }
        // the monitor's glow, on the inside of the hollow
        vec3 S = uSC - vP;
        float s2 = dot(S, S);
        vec3 sd = S * inversesqrt(s2);
        float glow = vInner > 0.5 ? 0.010 * max(dot(n, sd), 0.0) * max(dot(uSN, -sd), 0.0) / (s2 + 0.03) : 0.0;
        vec3 light = uLCol * direct + vec3(amb * ao) + vec3(0.85, 0.92, 1.0) * glow;
        gl_FragColor = vec4(vCol * light, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function tM(s,t=!1){return new Ve({uniforms:{uLP:{value:new U(...s)},uGW:{value:Is/(Is+2*Oo)},uGH:{value:Ds/(Ds+2*Oo)},uHaze:{value:t?0:.006}},vertexShader:`
      varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main() {
        vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform vec3 uLP; uniform float uGW; uniform float uGH; uniform float uHaze;
      varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main() {
        vec2 c = abs(vUv - 0.5) * 2.0;
        float glass = step(c.x, uGW) * step(c.y, uGH);
        vec3 V = normalize(cameraPosition - vW), n = normalize(vN);
        vec3 l = normalize(uLP - vW);
        vec3 R = reflect(-V, n);
        float F = 0.04 + 0.96 * pow(1.0 - max(dot(V, n), 0.0), 5.0);
        // glass: nearly black, a faint glow in the middle, the lamp's hot spot, and the dark room in it
        vec2 g = vec2(c.x / uGW, c.y / uGH);
        float haze = uHaze * (1.0 - smoothstep(0.0, 1.2, length(g)));
        vec3 col = vec3(0.0035, 0.0042, 0.005) + vec3(0.8, 0.9, 1.0) * haze;
        // (the lens is small: a small, sharp highlight)
        float hl = max(dot(R, l), 0.0);
        col += vec3(1.0, 0.96, 0.9) * (pow(hl, 12000.0) * 0.5 + pow(hl, 1500.0) * 0.04) + vec3(F * 0.02);
        // the bezel: matte black plastic
        vec3 bez = vec3(0.007) * (0.6 + 0.4 * max(dot(n, l), 0.0));
        gl_FragColor = vec4(mix(bez, col, glass), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}const eM={A:[[[0,0],[0,4],[2,6],[4,4],[4,0]],[[0,2],[4,2]]],B:[[[0,0],[0,6],[3,6],[4,5],[4,4],[3,3],[0,3]],[[3,3],[4,2],[4,1],[3,0],[0,0]]],C:[[[4,0],[0,0],[0,6],[4,6]]],D:[[[0,0],[0,6],[2,6],[4,4],[4,2],[2,0],[0,0]]],E:[[[4,0],[0,0],[0,6],[4,6]],[[0,3],[3,3]]],F:[[[0,0],[0,6],[4,6]],[[0,3],[3,3]]],G:[[[2,2],[4,2],[4,0],[0,0],[0,6],[4,6],[4,4]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[0,0],[4,0]],[[2,0],[2,6]],[[0,6],[4,6]]],J:[[[0,2],[2,0],[4,0],[4,6]]],K:[[[0,0],[0,6]],[[4,6],[0,3],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,4],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],O:[[[0,0],[0,6],[4,6],[4,0],[0,0]]],P:[[[0,0],[0,6],[4,6],[4,3],[0,3]]],Q:[[[0,0],[0,6],[4,6],[4,2],[2,0],[0,0]],[[2,2],[4,0]]],R:[[[0,0],[0,6],[4,6],[4,3],[0,3]],[[1,3],[4,0]]],S:[[[4,6],[0,6],[0,3],[4,3],[4,0],[0,0]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],U:[[[0,6],[0,0],[4,0],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[0,0],[2,2],[4,0],[4,6]]],X:[[[0,0],[4,6]],[[0,6],[4,0]]],Y:[[[0,6],[2,4],[4,6]],[[2,4],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],0:[[[0,0],[0,6],[4,6],[4,0],[0,0]]],1:[[[1,5],[2,6],[2,0]],[[1,0],[3,0]]],2:[[[0,6],[4,6],[4,3],[0,3],[0,0],[4,0]]],3:[[[0,0],[4,0],[4,6],[0,6]],[[0,3],[4,3]]],4:[[[0,6],[0,3],[4,3]],[[4,6],[4,0]]],5:[[[4,6],[0,6],[0,3],[4,3],[4,0],[0,0]]],6:[[[4,6],[0,6],[0,0],[4,0],[4,3],[0,3]]],7:[[[0,6],[4,6],[4,0]]],8:[[[0,0],[4,0],[4,6],[0,6],[0,0]],[[0,3],[4,3]]],9:[[[4,3],[0,3],[0,6],[4,6],[4,0],[0,0]]],"-":[[[1,3],[3,3]]],".":[[[2,0],[2,.35]]],",":[[[2,.5],[1.4,-1]]],"'":[[[2,6],[2,4.6]]],":":[[[2,1],[2,1.35]],[[2,4],[2,4.35]]],"/":[[[0,0],[4,6]]],"!":[[[2,6],[2,1.6]],[[2,0],[2,.35]]],"?":[[[0,4],[0,6],[4,6],[4,3],[2,3],[2,1.6]],[[2,0],[2,.35]]],"&":[[[4,0],[1,4],[1,6],[3,6],[3,5],[0,2],[0,0],[2,0],[4,2]]],"~":[[[0,3],[1,4],[3,2],[4,3]]],"→":[[[0,3],[4,3]],[[2.6,4.4],[4,3],[2.6,1.6]]],"–":[[[1,3],[3,3]]],"—":[[[0,3],[4,3]]]},za=6,uu=10;function nM(s){const t=s.toUpperCase().trim();if(/[|\n]/.test(t))return t.split(/\s*[|\n]\s*/).filter(Boolean);if(t.length<=11||!t.includes(" "))return[t];let e=[t],n=1/0;const i=t.split(/\s+/);for(let r=1;r<i.length;r++){const o=i.slice(0,r).join(" "),a=i.slice(r).join(" "),l=Math.max(o.length,a.length);l<n&&(n=l,e=[o,a])}return e}function iM(s,t,e){const n=nM(s),i=Math.max(...n.map(l=>l.length*za-2),1),r=n.length*6+(n.length-1)*(uu-6),o=Math.min(t/i,e/r,.07/6),a=[];return n.forEach((l,c)=>{const h=(l.length*za-2)*o,u=r*o/2-c*uu*o;[...l].forEach((d,f)=>{const m=eM[d];if(!m)return;const x=-h/2+f*za*o,g=u-6*o;for(const p of m)for(let M=0;M<p.length-1;M++){const E=p[M],v=p[M+1];a.push([x+E[0]*o,g+E[1]*o,x+v[0]*o,g+v[1]*o])}})}),{segs:a,u:o}}function sM(s){const t=[],e=[],n=[],i=[],r=[];s.forEach((l,c)=>{const h=t.length/2;for(const[u,d]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(l[0],l[1]),e.push(l[2],l[3]),n.push(u,d),i.push(c*7.31+.5);r.push(h,h+1,h+2,h,h+2,h+3)});const o=new Ae,a=[];for(let l=0;l<t.length/2;l++)a.push((t[2*l]+e[2*l])/2,(t[2*l+1]+e[2*l+1])/2,0);return o.setAttribute("position",new Yt(a,3)),o.setAttribute("aA",new Yt(t,2)),o.setAttribute("aB",new Yt(e,2)),o.setAttribute("aCorner",new Yt(n,2)),o.setAttribute("aSeed",new Yt(i,1)),o.setIndex(r),o.boundingSphere=new Yi(new U,.4),o}function rM(s,t,e){return new Ve({uniforms:{uTime:Uf,uSeed:{value:t},uOn:e,uBeam:{value:Math.max(7e-4,s*.085)},uHalo:{value:Math.max(.0022,s*.3)},uExt:{value:Math.max(.009,s*1.3)},uJit:{value:s*.07},uMis:{value:s*.12},uWob:{value:s*.06}},transparent:!0,depthWrite:!1,blending:$a,toneMapped:!1,vertexShader:`
      attribute vec2 aA; attribute vec2 aB; attribute vec2 aCorner; attribute float aSeed;
      uniform float uTime; uniform float uSeed; uniform float uExt; uniform float uJit; uniform float uMis; uniform float uWob;
      varying vec2 vP; varying vec2 vA; varying vec2 vB; varying float vBright;
      float h1(float n) { return fract(sin(n * 12.9898 + uSeed * 78.233) * 43758.5453); }
      vec2 h2(float n) { return vec2(h1(n), h1(n + 17.17)) - 0.5; }
      void main() {
        float t = uTime + uSeed * 3.7;
        float fr = floor(t * 30.0);
        // now and then the picture shakes, for a moment
        float g = floor(t * 1.3);
        float glitch = step(0.93, h1(g * 3.1)) * (1.0 - smoothstep(0.0, 0.18, fract(t * 1.3) / 1.3));
        float jit = uJit * (1.0 + 5.0 * glitch);
        vec2 A = aA, B = aB;
        // the ends of strokes miss a little, and drift
        vec2 mis = h2(aSeed) * uMis + vec2(sin(t * 0.37 + aSeed), cos(t * 0.29 + aSeed * 1.3)) * uMis * 0.35;
        A += mis + h2(aSeed * 1.7 + fr) * jit;
        B += mis * 0.6 + h2(aSeed * 2.3 + fr + 0.5) * jit;
        // the deflection wanders: a slow ripple across the lines
        A.x += (sin(t * 1.9 + A.y * 47.0) + 0.6 * sin(t * 0.61 + A.y * 13.0)) * uWob;
        B.x += (sin(t * 1.9 + B.y * 47.0) + 0.6 * sin(t * 0.61 + B.y * 13.0)) * uWob;
        A.y += sin(t * 1.3 + A.x * 31.0) * uWob * 0.5;
        B.y += sin(t * 1.3 + B.x * 31.0) * uWob * 0.5;
        vec2 d = B - A;
        float L = length(d);
        vec2 dir = L > 1e-6 ? d / L : vec2(1.0, 0.0);
        vec2 nrm = vec2(-dir.y, dir.x);
        vec2 P = (aCorner.x < 0.0 ? A : B) + dir * aCorner.x * uExt + nrm * aCorner.y * uExt;
        vP = P; vA = A; vB = B;
        // brightness: a flicker at the refresh, a slow breathing, each stroke a little its own
        vBright = (0.86 + 0.14 * h1(fr * 0.37 + aSeed * 0.01)) * (0.93 + 0.07 * sin(t * 2.3)) * (0.9 + 0.2 * h1(aSeed * 3.3));
        gl_Position = projectionMatrix * modelViewMatrix * vec4(P, 0.0, 1.0);
      }`,fragmentShader:`
      uniform float uBeam; uniform float uHalo; uniform float uExt; uniform float uOn;
      varying vec2 vP; varying vec2 vA; varying vec2 vB; varying float vBright;
      void main() {
        vec2 ab = vB - vA, ap = vP - vA;
        float h = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-9), 0.0, 1.0);
        float d = length(ap - ab * h);
        float core = exp(-(d * d) / (uBeam * uBeam));
        // the glow round the line dies away before the edge of its quad
        float halo = (0.20 * exp(-d / uHalo) + 0.035 * exp(-d / (uHalo * 2.5))) * (1.0 - smoothstep(0.45 * uExt, uExt, d));
        float dwell = 0.45 * (exp(-dot(vP - vA, vP - vA) / (uBeam * uBeam * 1.8)) + exp(-dot(vP - vB, vP - vB) / (uBeam * uBeam * 1.8)));
        float I = (core * 1.25 + halo + dwell) * vBright * uOn;
        gl_FragColor = vec4(vec3(0.90, 0.95, 1.0) * I, 1.0);
        #include <colorspace_fragment>
      }`})}const eo=4*dc,oM=-.16,fu=.2,aM=.62;let gs=null;function lM(){if(gs)return gs;const s=document.createElement("canvas");s.width=s.height=512;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#fbec7a"),e.addColorStop(.62,"#f9e66c"),e.addColorStop(1,"#efd85a"),t.fillStyle=e,t.fillRect(0,0,512,512),t.fillStyle="rgba(255,255,255,0.10)",t.fillRect(0,0,512,92),t.fillStyle="#1f1d2b",t.textAlign="center",t.textBaseline="alphabetic";const n=(i,r,o,a,l)=>{t.save(),t.translate(o,a),t.rotate(l),t.font=`${r}px "Caveat Brush", "Marker Felt", "Comic Sans MS", cursive`,t.fillText(i,0,0),t.restore()};return n("OUT",196,250,205,-.04),n("of",136,268,312,.04),n("ORDER",168,250,448,-.03),gs=new br(s),gs.colorSpace=Ue,gs.anisotropy=8,gs}function cM(s,t,e,n){const i=eo/2,r=i-eo*aM,o=g=>{const p=r-g;return[g+p-p*Math.cos(fu),p*Math.sin(fu)]},a=[],l=[],c=[];[i,r,r-(r+i)/2,-i].forEach((g,p)=>{const[M,E]=g>=r?[g,0]:o(g);for(const v of[-i,i])a.push(v,M,.0012+E),l.push((v+i)/eo,(g+i)/eo);if(p){const v=p*2;c.push(v-2,v-1,v+1,v-2,v+1,v)}});const u=new Ae;u.setAttribute("position",new Yt(a,3)),u.setAttribute("uv",new Yt(l,2)),u.setIndex(c),u.computeVertexNormals();const d=new Jt().makeTranslation(-.035,.012,0).multiply(new Jt().makeRotationZ(oM)),f=new Ve({uniforms:{uMap:{value:lM()},uLP:{value:s},uLD:{value:t},uLC:{value:new Bt(e.cOuter,e.cInner)},uLI:{value:e.i},uAmb:{value:Ko},uLCol:{value:Ns}},side:Vn,vertexShader:`
      uniform mat4 uFrame;
      varying vec3 vP; varying vec3 vN; varying vec2 vUv;
      void main() {
        // (the machine's frame: the mesh sits in it, so modelMatrix's parent part is the machine's)
        vP = (uFrame * vec4(position, 1.0)).xyz; vN = normalize(mat3(uFrame) * normal); vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${gc}
      uniform sampler2D uMap; uniform vec3 uLP; uniform vec3 uLD; uniform vec2 uLC; uniform float uLI; uniform float uAmb; uniform vec3 uLCol;
      varying vec3 vP; varying vec3 vN; varying vec2 vUv;
      void main() {
        vec3 L = uLP - vP; float d2 = dot(L, L); vec3 l = L * inversesqrt(d2);
        float spot = smoothstep(uLC.x, uLC.y, dot(-l, uLD));
        // lit only through the opening, like the rest of the hollow
        float fa = vP.y + vP.z - KK, fb = uLP.y + uLP.z - KK, lit = 0.0;
        if (fb > 0.0 && fa < fb) { vec3 q = vP + (uLP - vP) * (-fa / (fb - fa)); float e = 0.004;
          lit = smoothstep(-e, e, min(min(q.x - (-KW + KT), (KW - KT) - q.x), min(q.z - (KZC + KT), (KZF - KT) - q.z))); }
        vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
        float direct = uLI * spot * max(dot(n, l), 0.0) / d2 * lit;
        vec3 c = texture2D(uMap, vUv).rgb;
        gl_FragColor = vec4(c * (uLCol * direct * 1.2 + vec3(uAmb * 1.1)), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),m=n.clone().multiply(new Jt().makeTranslation(0,0,4e-4)).multiply(d);f.uniforms.uFrame={value:m};const x=new be(u,f);return x.matrixAutoUpdate=!1,x.matrix.copy(m),{mesh:x,dispose(){u.dispose(),f.dispose()}}}function hM(s){hu??(hu=Q_());const t=new De;t.matrixAutoUpdate=!1,t.matrix.copy(s.matrix);const e=s.matrix.clone().invert(),n=new Kt().setFromMatrix4(e),i=new U(...s.lamp.p).applyMatrix4(e),r=new U(...s.lamp.d).applyMatrix3(n),o=new U(0,_n(ko),ko),a=j_(i,r,s.lamp,o),l=new be(hu,a),c=new Jt().makeBasis(new U(1,0,0),Df,yr).setPosition(o.clone().addScaledVector(yr,.004)),h=!!s.machine.outOfOrder,u=tM(s.lamp.p,h),d=new Un(Is+2*Oo,Ds+2*Oo),f=new be(d,u);f.matrixAutoUpdate=!1,f.matrix.copy(c);const{segs:m,u:x}=iM(s.machine.name,au.w,au.h),g=sM(m);let p=0;for(const A of s.machine.id)p=(p*31+A.charCodeAt(0))%997;const M={value:h?0:1},E=rM(x,p/997,M),v=new be(g,E);v.matrixAutoUpdate=!1,v.matrix.copy(c).multiply(new Jt().makeTranslation(0,0,8e-4)),v.renderOrder=2,t.add(l,f,v);const S=[l,f,v];let b=null;h&&(b=cM(i,r,s.lamp,c),t.add(b.mesh),S.push(b.mesh)),t.updateMatrixWorld(!0);for(const A of S)A.userData.machine=s.machine.id;return{placed:s,group:t,meshes:S,textOn:M,dispose(){a.dispose(),u.dispose(),d.dispose(),g.dispose(),E.dispose(),b==null||b.dispose()}}}const _o=16;function uM(s){const t=(e,n)=>{const i=e.slice(0,_o);for(;i.length<_o;)i.push(n());return i};return{n:Math.min(_o,s.length),lp:t(s.map(e=>new U(...e.lamp.p)),()=>new U),ld:t(s.map(e=>new U(...e.lamp.d)),()=>new U(0,-1,0)),lc:t(s.map(e=>new Bt(e.lamp.cOuter,e.lamp.cInner)),()=>new Bt(1,1)),li:t(s.map(e=>e.lamp.i),()=>0),box:t(s.map(e=>{const n=Xe.degToRad(e.spot.rot);return new _e(e.spot.x,e.spot.z,Math.cos(n),Math.sin(n))}),()=>new _e(0,0,1,0))}}const fM=s=>({uMN:{value:s.n},uMLP:{value:s.lp},uMLD:{value:s.ld},uMLC:{value:s.lc},uMLI:{value:s.li},uMB:{value:s.box}}),dM=`
  #define MAXM ${_o}
  #define LENS 0.06
  ${gc}
  uniform int uMN;
  uniform vec3 uMLP[MAXM]; uniform vec3 uMLD[MAXM]; uniform vec2 uMLC[MAXM]; uniform float uMLI[MAXM]; uniform vec4 uMB[MAXM];
  vec3 toKiosk(int j, vec3 p) { vec2 d = p.xz - uMB[j].xy; float c = uMB[j].z, s = uMB[j].w; return vec3(d.x * c - d.y * s, p.y, d.x * s + d.y * c); }
  float kioskBlock(int j, vec3 p, vec3 L) {
    vec3 a = toKiosk(j, p), b = toKiosk(j, L), d = b - a;
    float lo = 0.0, hi = 1.0;
    vec3 mn = vec3(-KW, 0.0, KZB), mx = vec3(KW, KH, KZF);
    for (int i = 0; i < 3; i++) {
      float ai = a[i], di = d[i];
      if (abs(di) < 1e-6) { if (ai < mn[i] || ai > mx[i]) return 0.0; }
      else { float t0 = (mn[i] - ai) / di, t1 = (mx[i] - ai) / di; lo = max(lo, min(t0, t1)); hi = min(hi, max(t0, t1)); }
    }
    float fa = a.y + a.z - KK, fd = d.y + d.z;
    if (abs(fd) < 1e-6) { if (fa > 0.0) return 0.0; }
    else { float t = -fa / fd; if (fd > 0.0) hi = min(hi, t); else lo = max(lo, t); }
    return (hi - lo) * length(d);
  }
  float machineLight(vec3 p, vec3 n) {
    float e = 0.0;
    for (int k = 0; k < MAXM; k++) {
      if (k >= uMN) break;
      vec3 L = uMLP[k] - p;
      float d2 = dot(L, L);
      vec3 l = L * inversesqrt(d2);
      float spot = smoothstep(uMLC[k].x, uMLC[k].y, dot(-l, uMLD[k]));
      if (spot <= 0.0) continue;
      // the lamp's lens is a few centimetres across: the shadow's edge softens with distance
      float v = 0.0;
      for (int q = 0; q < 4; q++) {
        vec3 lp = uMLP[k] + vec3(q == 0 ? -LENS : q == 1 ? LENS : 0.0, 0.0, q == 2 ? -LENS : q == 3 ? LENS : 0.0);
        float vq = 1.0;
        for (int j = 0; j < MAXM; j++) {
          if (j >= uMN) break;
          vq *= 1.0 - smoothstep(0.0, 0.01, kioskBlock(j, p + n * 0.003, lp));
        }
        v += 0.25 * vq;
      }
      e += uMLI[k] * spot * max(dot(n, l), 0.0) / d2 * v;
    }
    return e;
  }
  float machineAO(vec3 p) {
    float ao = 1.0;
    for (int j = 0; j < MAXM; j++) {
      if (j >= uMN) break;
      vec3 a = toKiosk(j, p);
      float dd = length(max(abs(a.xz) - vec2(KW, KD), 0.0));
      ao *= 1.0 - 0.6 * exp(-dd / 0.07) - 0.15 * exp(-dd / 0.35);
    }
    return ao;
  }
`,ii=16,Ss=48,Ns=new kt(1,.965,.915),Ko=.06,pM=.3,Nf=.05,xc=4,mM=.6,Ff=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,vc=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,zf=`
varying vec3 vW;
varying vec3 vN;
varying vec2 vUv;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`,_c=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,Mc=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),Of=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),kf=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function du(s,t,e,n,i){const r=(o,a,l)=>{const c=o.slice(0,a);for(;c.length<a;)c.push(l());return c};return new Ve({uniforms:{uN:{value:Math.min(s.lamps.length,ii)},uLP:{value:r(s.lamps.map(o=>o.p),ii,()=>new U)},uLD:{value:r(s.lamps.map(o=>o.d),ii,()=>new U(0,-1,0))},uLC:{value:r(s.lamps.map(o=>o.c),ii,()=>new Bt(1,1))},uLI:{value:r(s.lamps.map(o=>o.i),ii,()=>0)},uB:{value:Math.min(s.boxes.length,Ss)},uBC:{value:r(s.boxes.map(o=>o.c),Ss,()=>new U(0,-99,0))},uBS:{value:r(s.boxes.map(o=>o.s),Ss,()=>new U)},uBL:{value:r(s.boxes.map(o=>o.lamp),Ss,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:Ko},uBounceK:{value:xc},uLampK:{value:pM},uCeilK:{value:Nf},...Of(i),uLCol:{value:Ns},...Mc(n)},vertexShader:zf,fragmentShader:`
      #define MAXL ${ii}
      #define MAXB ${Ss}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${kf}
      ${vc}
      ${Ff}
      float occ(float d) { return 1.0 - 0.40 * exp(-max(d, 0.0) / 0.30); }
      // rounded corners and coves gather far less shadow than sharp ones
      float occSoft(float d) { return 1.0 - 0.16 * exp(-max(d, 0.0) / 0.30); }

      // 1 = lit, 0 = in the shadow box j throws from its own lamp
      float boxShadow(int j, vec3 p, out float contact) {
        contact = 1.0;
        vec3 q = p - uBC[j];
        if (abs(dot(q, uFN)) > 0.004) return 1.0;
        vec2 P = vec2(dot(q, uFR), q.y);
        vec2 hs = uBS[j].xy;
        contact = 1.0 - 0.30 * exp(-length(max(abs(P) - hs, 0.0)) / 0.010);
        int k = int(uBL[j] + 0.5);
        vec3 lq = uLP[k] - uBC[j];
        vec2 Lw = vec2(dot(lq, uFR), lq.y);
        float lz = dot(lq, uFN);
        if (lz <= uBS[j].z + 0.01) return 1.0;
        float s = lz / (lz - uBS[j].z);
        vec2 dl = P - Lw;
        float lo = 1.0 / s, hi = 1.0;
        for (int a = 0; a < 2; a++) {
          float dla = a == 0 ? dl.x : dl.y;
          float La = a == 0 ? Lw.x : Lw.y;
          float h = a == 0 ? hs.x : hs.y;
          if (abs(dla) < 1e-5) {
            if (La < -h || La > h) return 1.0;
          } else {
            float t0 = (-h - La) / dla, t1 = (h - La) / dla;
            lo = max(lo, min(t0, t1));
            hi = min(hi, max(t0, t1));
          }
        }
        float slack = (hi - lo) * length(dl);
        return 1.0 - smoothstep(-0.003, 0.003, slack);
      }

      void main() {
        vec3 n = normalize(vN);
        float sh[MAXL];
        for (int k = 0; k < MAXL; k++) sh[k] = 1.0;
        float contact = 1.0;
        for (int j = 0; j < MAXB; j++) {
          if (j >= uB) break;
          float c;
          float s = boxShadow(j, vW, c);
          contact *= c;
          int k = int(uBL[j] + 0.5);
          sh[k] *= s;
        }
        float direct = 0.0;
        for (int k = 0; k < MAXL; k++) {
          if (k >= uN) break;
          vec3 L = uLP[k] - vW;
          float d2 = dot(L, L);
          vec3 l = L * inversesqrt(d2);
          float spot = smoothstep(uLC[k].x, uLC[k].y, dot(-l, uLD[k]));
          if (spot > 0.0) direct += uLI[k] * spot * max(dot(n, l), 0.0) / d2 * sh[k];
        }
        float ao = occ(vW.y) * occSoft(uH - vW.y);
        float u = uAxisX > 0.5 ? vW.x : vW.z;
        if (uCA > 0.5) ao *= occSoft(u - uU0);
        if (uCB > 0.5) ao *= occSoft(uU1 - u);
        vec3 bounce = bakedLight(vW.xz + n.xz * 0.25);
        // the room's light leans a little one way, so each wall and every curve takes its own shade;
        // a cove turning to face down takes on the ceiling's brightness, and runs into it seamlessly;
        // the wall's paint stops halfway round the cove, where a painter would cut in the ceiling white
        // (only up in the cove: a doorway's head keeps the wall's paint); the ceiling's colour is
        // the one over this room, looked up a little way out from the wall
        float up = clamp(-n.y, 0.0, 1.0);
        vec3 ceil = ceilingAt(vW.xz + n.xz * 0.1);
        vec3 paint = mix(uAlb, ceil, smoothstep(0.68, 0.74, up) * step(uH - 0.35, vW.y));
        float amb = uAmb * (0.95 + 0.07 * dot(n.xz, vec2(0.45, 0.893)));
        float lum = max(dot(paint, vec3(0.299, 0.587, 0.114)), 0.5);
        amb = mix(amb, uCeilK * dot(ceil, vec3(0.299, 0.587, 0.114)) / lum, up);
        vec3 lightIn = uLCol * direct * uLampK * contact + (vec3(amb) + uBounceK * bounce) * ao * contact;
        vec2 t = abs(n.x) > 0.5 ? vW.zy : vW.xy;
        float grain = 1.0 + 0.018 * (vnoise(t * 41.0) - 0.5) + 0.012 * (fbm(t * 1.7) - 0.5);
        vec3 alb = paint * grain;
        if (vW.y < 0.015) alb *= 0.25;
        gl_FragColor = vec4(alb * lightIn, 1.0);
        ${_c}
      }`})}function gM(s,t){return new Ve({uniforms:{uAmb:{value:Nf},uBounceK:{value:xc},...Of(t),...Mc(s)},vertexShader:zf,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${vc}
      ${kf}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${_c}
      }`})}function xM(s,t,e,n){return new Ve({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:Ko},uBounceK:{value:xc},uSpillK:{value:mM},uLCol:{value:Ns},...Mc(e),...fM(n)},vertexShader:`
      uniform mat4 uTexMat;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = vec3(0.0, 1.0, 0.0); vUv = uv;
        vR = uTexMat * w;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uRefl;
      uniform float uAmb; uniform float uBounceK; uniform float uSpillK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec4 vR;
      ${vc}
      ${Ff}
      ${dM}
      const vec2 DISC[8] = vec2[8](vec2(-0.613, 0.617), vec2(0.170, -0.040), vec2(-0.299, -0.792),
        vec2(0.645, 0.493), vec2(-0.651, -0.072), vec2(0.421, -0.581), vec2(-0.033, 0.977), vec2(0.928, -0.156));
      void main() {
        vec2 xz = vW.xz;
        float m = 0.55 * fbm(xz * 0.45) + 0.30 * fbm(xz * 2.6 + 5.0) + 0.15 * vnoise(xz * 23.0);
        vec3 alb = mix(vec3(0.30, 0.298, 0.292), vec3(0.47, 0.465, 0.455), m);
        float speck = step(0.93, vnoise(xz * 140.0));
        alb = mix(alb, alb * 1.35, speck * 0.5);
        vec2 g = abs(fract(xz / 2.1 + 0.5) - 0.5) * 2.1;
        float joint = min(g.x, g.y);
        alb *= mix(0.55, 1.0, smoothstep(0.0015, 0.0045, joint));
        float ao = bakedAO(xz) * machineAO(vW);
        vec3 base = alb * (vec3(uAmb) * ao + (uBounceK * bakedLight(xz) + vec3(uSpillK * bakedSpill(xz))) * mix(1.0, ao, 0.5)
                           + uLCol * machineLight(vW, vec3(0.0, 1.0, 0.0)) * mix(1.0, ao, 0.4));
        vec2 ruv = vR.xy / vR.w;
        vec2 wob = (vec2(fbm(xz * 7.0 + 3.1), fbm(xz * 7.0 - 7.3)) - 0.5) * 0.010;
        vec3 V = normalize(cameraPosition - vW);
        float dist = length(cameraPosition - vW);
        float blur = 0.0035 + 0.006 * smoothstep(1.0, 8.0, dist);
        // the reflection, blurred over what is really there (empty sky is alpha 0 and left out);
        // nothing at all there: the white outside
        vec4 acc = vec4(0.0);
        for (int k = 0; k < 8; k++) { vec4 t = texture2D(uRefl, ruv + wob + DISC[k] * blur); acc += vec4(t.rgb * t.a, t.a); }
        // (the wobble can carry every sample past a wall's foot: then the point itself, unwobbled)
        vec4 t0 = texture2D(uRefl, ruv);
        vec3 rc = acc.a > 0.04 ? acc.rgb / acc.a : t0.a > 0.02 ? t0.rgb / t0.a : vec3(1.0);
        float F = 0.045 + 0.955 * pow(1.0 - max(V.y, 0.0), 5.0);
        float gloss = 0.80 * mix(1.0, 0.75, m);
        vec3 col = base * (1.0 - F * gloss) + rc * F * gloss;
        gl_FragColor = vec4(col, 1.0);
        ${_c}
      }`})}function pu(s,t,e,n){return new Ve({uniforms:{uMap:{value:s},...z_(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new kt(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Ns}},toneMapped:!1,vertexShader:`
      attribute float aSide; attribute vec3 aCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      void main() {
        vec4 w = modelMatrix * vec4(position, 1.0);
        vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vUv = uv; vSide = aSide; vCol = aCol;
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform sampler2D uMap;
      uniform vec3 uLP; uniform vec3 uLD; uniform vec2 uLC; uniform float uLI;
      uniform vec3 uSide; uniform float uSideMode; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying float vSide; varying vec3 vCol;
      ${F_}
      void main() {
        vec3 n = normalize(vN);
        vec3 L = uLP - vW;
        float d2 = dot(L, L);
        vec3 l = L * inversesqrt(d2);
        float spot = smoothstep(uLC.x, uLC.y, dot(-l, uLD));
        float e = uLI * spot * max(dot(n, l), 0.0) / d2;
        vec3 c = adjust(texture2D(uMap, vUv).rgb);        // the photo, with its colour corrections
        if (vSide > 0.5 && uSideMode > 0.5) c = uSide;
        if (vSide > 1.5) c = vCol;                         // a frame, its mat and the mat's cut edge
        // light on the front is ~1 at the centre; mix a touch of the lamp's warmth in. A frame's sides,
        // turned from the lamp, still get the room's light (wood there isn't black)
        float amb = vSide > 1.5 ? mix(0.24, 0.07, clamp(e, 0.0, 1.0)) : 0.07;
        vec3 lit = c * (amb + 0.95 * e * mix(vec3(1.0), uLCol, 0.35));
        gl_FragColor = vec4(lit, 1.0);
        #include <colorspace_fragment>
      }`})}const Js=.05,Qs=.2;function vM(s,t,e){const n=s.inner,i=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(i/Js)+1,a=Math.ceil(r/Js)+1,l=new Uint8Array(o*a),c=s.solids;for(let E=0;E<a;E++){const v=n.z0+E*Js;for(let S=0;S<o;S++){const b=n.x0+S*Js;let A=1;for(const _ of c){const y=Math.max(_.x0-b,0,b-_.x1),C=Math.max(_.z0-v,0,v-_.z1),L=y*y+C*C;L>1.44||(A*=1-.42*Math.exp(-Math.sqrt(L)/.28))}l[E*o+S]=Math.round(Math.max(0,Math.min(1,A))*255)}}const h=Math.ceil(i/Qs)+1,u=Math.ceil(r/Qs)+1,d=new Float32Array(h*u*4),f=Ns,m=t.map(E=>{const v=new kt(E.face.color),b=(E.w+.5)*(E.h+1)*.7*.55;return{c:[E.centre[0]+E.normal[0]*.05,1.2,E.centre[2]+E.normal[2]*.05],n:E.normal,rgb:[v.r*f.r*b,v.g*f.g*b,v.b*f.b*b],lamp:E.lamp}});for(let E=0;E<u;E++){const v=n.z0+E*Qs;for(let S=0;S<h;S++){const b=n.x0+S*Qs;let A=0,_=0,y=0,C=0;for(const D of m){const F=b-D.c[0],H=v-D.c[2],O=F*F+H*H;if(O>64)continue;const Z=F*D.n[0]+H*D.n[2];if(Z>.02){const X=Math.max(O+D.c[1]*D.c[1],.3),k=Math.sqrt(X),B=Z/k*(D.c[1]/k)/(Math.PI*X);B>5e-4&&!Wi(s.solids,D.c[0],D.c[2],b,v)&&(A+=D.rgb[0]*B,_+=D.rgb[1]*B,y+=D.rgb[2]*B)}const q=D.lamp,j=b-q.p[0],G=-q.p[1],K=v-q.p[2],it=j*j+G*G+K*K,ut=Math.sqrt(it),N=(j*q.d[0]+G*q.d[1]+K*q.d[2])/ut;if(N>q.cOuter){const X=Math.min(1,(N-q.cOuter)/(q.cInner-q.cOuter)),k=X*X*(3-2*X),B=q.i*k*(q.p[1]/ut)/it;B>.002&&!Wi(s.solids,q.p[0],q.p[2],b,v)&&(C+=B)}}const L=(E*h+S)*4;d[L]=A,d[L+1]=_,d[L+2]=y,d[L+3]=C}}e==null||e.ao.dispose(),e==null||e.light.dispose();const x=new Ls(l,o,a,Xo,an);x.magFilter=x.minFilter=Ge,x.needsUpdate=!0;const g=new Uint16Array(d.length);for(let E=0;E<d.length;E++)g[E]=_p.toHalfFloat(d[E]);const p=new Ls(g,h,u,pn,bn);p.magFilter=p.minFilter=Ge,p.needsUpdate=!0;const M=(E,v,S)=>new _e(1/(E*v),1/(E*S),.5/v,.5/S);return{ao:x,light:p,origin:new Bt(n.x0,n.z0),aoXf:M(Js,o,a),lightXf:M(Qs,h,u)}}const Be=.15,We=8,si=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],jn=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],no=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],mu=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],gu=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],_M=[0,1,0];class Bf{constructor(){P(this,"pos",[]);P(this,"nor",[]);P(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),i=mu(no(t[2],t[0]),no(t[3],t[1])),r=si(si(e[0],e[1]),si(e[2],e[3]));gu(i,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));gu(mu(no(t[1],t[0]),no(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new Ae;return t.setAttribute("position",new Yt(this.pos,3)),t.setAttribute("normal",new Yt(this.nor,3)),t.setAttribute("uv",new Yt(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const Hf=(s,t)=>s?Be:Math.max(0,Math.min(Be,t/2-.002));function MM(s,t,e){const n=new Bf,i=[s.n[0],0,s.n[1]],r=s.axis==="x"?[1,0,0]:[0,0,1],o=(_,y,C)=>{const L=Li(s,_,C);return[L[0]+i[0]*y,C,L[2]+i[2]*y]},a=Hf(s.outer,s.t),l=t-Be,c=Math.min(e,l),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",d=s.u0+(h==="in"?Be:h==="free"?a:0),f=s.u1-(u==="in"?Be:u==="free"?a:0);if(f-d<.01)return n;const m=(_,y,C,L)=>{y-_<1e-4||L-C<1e-4||n.quad([o(_,0,C),o(y,0,C),o(y,0,L),o(_,0,L)],[i,i,i,i])},x=[...s.doors].sort((_,y)=>_[0]-y[0]);if(!x.length)m(d,f,0,l);else{let _=d;for(const[y,C]of x)m(_,Math.min(f,y-a),0,c),_=Math.max(_,C+a);m(_,f,0,c),m(d,f,c,l)}const g=(_,y,C,L)=>{if(a<.01)return;const D=F=>si(jn(i,Math.cos(F)),jn(y,Math.sin(F)));for(let F=0;F<We;F++){const H=F/We*Math.PI/2,O=(F+1)/We*Math.PI/2,Z=(q,j)=>si(o(_,-a,j),jn(D(q),a));n.quad([Z(H,C),Z(O,C),Z(O,L),Z(H,L)],[D(H),D(O),D(O),D(H)])}},p=_=>[-_[0],-_[1],-_[2]];for(const[_,y]of x)_-s.u0>a+.01&&g(_-a,r,0,c),s.u1-y>a+.01&&g(y+a,p(r),0,c);h==="free"&&g(s.u0+a,p(r),0,t),u==="free"&&g(s.u1-a,r,0,t);const M=(_,y)=>{const C=si(si(o(_,0,0),jn(i,Be)),jn(y,Be)),L=F=>si(jn(i,Math.cos(F)),jn(y,Math.sin(F))),D=Math.PI/4;for(let F=0;F<We/2;F++){const H=F/(We/2)*D,O=(F+1)/(We/2)*D,Z=(q,j)=>[C[0]-Be*L(q)[0],j,C[2]-Be*L(q)[2]];n.quad([Z(H,0),Z(O,0),Z(O,l),Z(H,l)],[L(H),L(O),L(O),L(H)]);for(let q=0;q<We;q++){const j=q/We*Math.PI/2,G=(q+1)/We*Math.PI/2,K=(ut,N)=>{const X=L(ut);return[C[0]-Be*Math.cos(N)*X[0],l+Be*Math.sin(N),C[2]-Be*Math.cos(N)*X[2]]},it=(ut,N)=>{const X=L(ut);return[Math.cos(N)*X[0],-Math.sin(N),Math.cos(N)*X[2]]};n.quad([K(H,j),K(O,j),K(O,G),K(H,G)],[it(H,j),it(O,j),it(O,G),it(H,G)])}}};h==="in"&&M(s.u0,r),u==="in"&&M(s.u1,p(r));const E=h==="in"?s.u0+Be:d,v=u==="in"?s.u1-Be:f,S=(_,y)=>o(_,Be-Be*Math.cos(y),l+Be*Math.sin(y)),b=_=>si(jn(i,Math.cos(_)),jn(_M,-Math.sin(_)));for(let _=0;_<We;_++){const y=_/We*Math.PI/2,C=(_+1)/We*Math.PI/2;n.quad([S(E,y),S(v,y),S(v,C),S(E,C)],[b(y),b(y),b(C),b(C)])}const A=(_,y)=>{const C=o(_,0,t);for(let L=0;L<We;L++){const D=L/We*Math.PI/2,F=(L+1)/We*Math.PI/2;n.tri([C,S(_,D),S(_,F)],y)}};return h!=="in"&&A(E,p(r)),u!=="in"&&A(v,r),n}function yM(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new Bf),e.get(a)),i=s.H,r=Math.min(s.doorH,i-Be),o=a=>{var l,c;return((l=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:l.color)??((c=s.faces.find(h=>h.wall===a))==null?void 0:c.color)??"#f2f1ee"};for(const a of s.walls){const l=a.id==="S";if(a.outer&&!l)continue;const c=n(o(a.id)),h=(E,v,S)=>a.axis==="x"?[E,S,v]:[v,S,E],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[d,f]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],m=Hf(a.outer,a.t),x=l?[{c:d,s:-1}]:[{c:d,s:-1},{c:f,s:1}],g=d+m,p=l?d+t:f-m,M=l?[[s.entrance.a,s.entrance.b]]:s.faces.filter(E=>E.wall===a.id).flatMap(E=>E.doors).filter((E,v,S)=>S.findIndex(b=>Math.abs(b[0]-E[0])<1e-6)===v);for(const[E,v]of M){const S=(_,y)=>{p-g>.001&&c.quad([h(_,g,0),h(_,p,0),h(_,p,r),h(_,g,r)],[y,y,y,y])};S(E,u),S(v,[-u[0],0,-u[2]]);const b=[0,-1,0],A=l?d+t:f;c.quad([h(E,d,r),h(v,d,r),h(v,A,r),h(E,A,r)],[b,b,b,b]);for(const{c:_,s:y}of x)for(const[C,L]of[[E,1],[v,-1]]){if(m<.01)continue;const D=C-L*m,F=_-y*m,H=h(C,_,r);for(let O=0;O<We;O++){const Z=q=>{const j=q/We*Math.PI/2;return h(D+L*m*Math.sin(j),F+y*m*Math.cos(j),r)};c.tri([H,Z(O),Z(O+1)],b)}}}if(!a.outer)for(const E of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(S,b)=>{f-m-(d+m)>.001&&c.quad([h(S,d+m,0),h(S,f-m,0),h(S,f-m,i),h(S,d+m,i)],[b,b,b,b])};E.freeA&&v(E.u0,[-u[0],0,-u[2]]),E.freeB&&v(E.u1,u)}}return e}const xu=new kt(1,1,1),Gf=.2,Gl=2;function SM(s,t,e,n){const i=new De;s.background=xu,s.fog=null;const r=n.outline,o=r.t-Gf,a=r.x0-r.t,l=r.x1+r.t,c=r.z0-r.t,h=r.z1+r.t,u=n.ceiling,d=n.doorHeight,f=u+1.4,m=n.entrance.x-n.entrance.w/2,x=n.entrance.x+n.entrance.w/2,g=n.entrance.x,p=new Xn({color:xu,toneMapped:!1}),M=(_,y,C,L,D,F)=>{const H=new be(new wn(L,D,F),p);return H.position.set(_,y,C),H.userData.outside=!0,H.layers.set(Gl),i.add(H),H},E=-.5,v=f,S=(E+v)/2,b=v-E;M((a+m)/2,S,h-o/2,m-a,b,o),M((x+l)/2,S,h-o/2,l-x,b,o),M(g,(d+v)/2,h-o/2,x-m,v-d,o),M((a+l)/2,S,c+o/2,l-a,b,o),M(a+o/2,S,(c+h)/2,o,b,h-c-2*o),M(l-o/2,S,(c+h)/2,o,b,h-c-2*o),M((a+l)/2,(u+v)/2+.05,(c+h)/2,l-a-.02,v-u-.1,h-c-.02);const A=new be(new Un(400,400).rotateX(-Math.PI/2),p);return A.position.y=-.002,A.layers.set(Gl),i.add(A),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var L;const y=_;y.geometry&&y.geometry.dispose();const C=Array.isArray(y.material)?y.material:y.material?[y.material]:[];for(const D of C)(L=D.map)==null||L.dispose(),D.dispose()})}}}class vu{constructor(){P(this,"pos",[]);P(this,"nor",[]);P(this,"uv",[]);P(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new Ae;return t.setAttribute("position",new Yt(this.pos,3)),t.setAttribute("normal",new Yt(this.nor,3)),t.setAttribute("uv",new Yt(this.uv,2)),t.setIndex(this.idx),t}}const Sr=s=>new U(s[0],s[1],s[2]),Vf=s=>({p:Sr(s.p),d:Sr(s.d),c:new Bt(s.cOuter,s.cInner),i:s.i});function wM(s,t,e,n=[]){const i=t.filter(h=>h.face===s),r=i.map(h=>h.lamp),o=[],a=[],l=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let h=0;h<=l;h++){const u=s.u0+(s.u1-s.u0)*h/l;for(const d of[.4,1.4,2.4])a.push(Li(s,u,d))}for(const h of[...t.filter(u=>u.face!==s).map(u=>u.lamp),...n]){const u=a[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let f=1/0;for(const m of a){const x=m[0]-h.p[0],g=m[1]-h.p[1],p=m[2]-h.p[2],M=Math.hypot(x,g,p);M>7||(x*h.d[0]+g*h.d[1]+p*h.d[2])/M<=h.cOuter||Wi(e.solids,h.p[0],h.p[2],m[0]+s.n[0]*.03,m[2]+s.n[1]*.03)||(f=Math.min(f,M))}f<1/0&&o.push({L:h,d:f})}o.sort((h,u)=>h.d-u.d);for(const h of o){if(r.length>=ii)break;r.push(h.L)}const c=[];return i.forEach((h,u)=>{if(!(u>=ii))for(const d of h.items)c.length>=Ss||d.text||c.push({c:Sr(d.pos),s:new U(d.w/2,d.h/2,d.depth),lamp:u})}),{lamps:r.slice(0,ii).map(Vf),boxes:c,normal:new U(s.n[0],0,s.n[1]),right:new U(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const bM={lamps:[],boxes:[],normal:new U(0,0,1),right:new U(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function _u(s,t,e,n=[0,1,0,1]){const[i,r,o,a]=n,l=[],c=[],h=[],u=[],d=[],f=(b,A,_,y)=>{const C=l.length/3;b.forEach((L,D)=>{l.push(...L),c.push(...A),h.push(..._[D]),u.push(y)}),d.push(C,C+1,C+2,C,C+2,C+3)},m=s/2,x=t/2,g=.004,p=i+g,M=r-g,E=o+g,v=a-g;f([[-m,-x,e],[m,-x,e],[m,x,e],[-m,x,e]],[0,0,1],[[i,o],[r,o],[r,a],[i,a]],0),f([[-m,x,e],[m,x,e],[m,x,0],[-m,x,0]],[0,1,0],[[i,v],[r,v],[r,v],[i,v]],1),f([[-m,-x,0],[m,-x,0],[m,-x,e],[-m,-x,e]],[0,-1,0],[[i,E],[r,E],[r,E],[i,E]],1),f([[-m,-x,0],[-m,-x,e],[-m,x,e],[-m,x,0]],[-1,0,0],[[p,o],[p,o],[p,a],[p,a]],1),f([[m,-x,e],[m,-x,0],[m,x,0],[m,x,e]],[1,0,0],[[M,o],[M,o],[M,a],[M,a]],1);const S=new Ae;return S.setAttribute("position",new Yt(l,3)),S.setAttribute("normal",new Yt(c,3)),S.setAttribute("uv",new Yt(h,2)),S.setAttribute("aSide",new Yt(u,1)),S.setIndex(d),S}function EM(s,t,e,n=[0,1,0,1]){const{face:i,depth:r,mat:o,lip:a,bevel:l}=Po,c=s/2,h=t/2,u=c+o+i,d=h+o+i,f=c+o,m=h+o,x=c+l,g=h+l,p=r-a,M=p-l,E=new kt($v[e.color]),v=new kt(Kv[e.mat]),S=new kt(Zv),b=[],A=[],_=[],y=[],C=[],L=[],D=G=>new U(G[0],G[1],G[2]),F=(G,K,it,ut=[[0,0],[0,0],[0,0],[0,0]])=>{const N=new U().crossVectors(D(G[1]).sub(D(G[0])),D(G[3]).sub(D(G[0]))).normalize();N.dot(D(K))<0&&(G=[G[0],G[3],G[2],G[1]],ut=[ut[0],ut[3],ut[2],ut[1]],N.negate());const X=b.length/3;G.forEach((k,B)=>{b.push(...k),A.push(N.x,N.y,N.z),_.push(...ut[B]),y.push(it?2:0),C.push(...it?[it.r,it.g,it.b]:[0,0,0])}),L.push(X,X+1,X+2,X,X+2,X+3)};F([[-u,m,r],[u,m,r],[u,d,r],[-u,d,r]],[0,0,1],E),F([[-u,-d,r],[u,-d,r],[u,-m,r],[-u,-m,r]],[0,0,1],E),F([[-u,-m,r],[-f,-m,r],[-f,m,r],[-u,m,r]],[0,0,1],E),F([[f,-m,r],[u,-m,r],[u,m,r],[f,m,r]],[0,0,1],E),F([[-u,d,0],[u,d,0],[u,d,r],[-u,d,r]],[0,1,0],E),F([[-u,-d,0],[u,-d,0],[u,-d,r],[-u,-d,r]],[0,-1,0],E),F([[-u,-d,0],[-u,d,0],[-u,d,r],[-u,-d,r]],[-1,0,0],E),F([[u,-d,0],[u,d,0],[u,d,r],[u,-d,r]],[1,0,0],E),F([[-f,m,p],[f,m,p],[f,m,r],[-f,m,r]],[0,-1,0],E),F([[-f,-m,p],[f,-m,p],[f,-m,r],[-f,-m,r]],[0,1,0],E),F([[-f,-m,p],[-f,m,p],[-f,m,r],[-f,-m,r]],[1,0,0],E),F([[f,-m,p],[f,m,p],[f,m,r],[f,-m,r]],[-1,0,0],E),F([[-f,g,p],[f,g,p],[f,m,p],[-f,m,p]],[0,0,1],v),F([[-f,-m,p],[f,-m,p],[f,-g,p],[-f,-g,p]],[0,0,1],v),F([[-f,-g,p],[-x,-g,p],[-x,g,p],[-f,g,p]],[0,0,1],v),F([[x,-g,p],[f,-g,p],[f,g,p],[x,g,p]],[0,0,1],v),F([[-x,g,p],[x,g,p],[c,h,M],[-c,h,M]],[0,-1,1],S),F([[-x,-g,p],[x,-g,p],[c,-h,M],[-c,-h,M]],[0,1,1],S),F([[-x,-g,p],[-x,g,p],[-c,h,M],[-c,-h,M]],[1,0,1],S),F([[x,-g,p],[x,g,p],[c,h,M],[c,-h,M]],[-1,0,1],S);const[H,O,Z,q]=n;F([[-c,-h,M],[c,-h,M],[c,h,M],[-c,h,M]],[0,0,1],null,[[H,Z],[O,Z],[O,q],[H,q]]);const j=new Ae;return j.setAttribute("position",new Yt(b,3)),j.setAttribute("normal",new Yt(A,3)),j.setAttribute("uv",new Yt(_,2)),j.setAttribute("aSide",new Yt(y,1)),j.setAttribute("aCol",new Yt(C,3)),j.setIndex(L),j}function TM(s,t,e,n=[0,1,0,1]){const{strip:i,depth:r,gap:o,below:a}=Io,l=s/2,c=t/2,h=l+o,u=c+o,d=h+i,f=u+i,m=r-a,x=Math.max(.004,m-e),g=new kt(Jv),p=new kt(Qv),M=[],E=[],v=[],S=[],b=[],A=[],_=K=>new U(K[0],K[1],K[2]),y=(K,it,ut,N,X=[[0,0],[0,0],[0,0],[0,0]])=>{const k=new U().crossVectors(_(K[1]).sub(_(K[0])),_(K[3]).sub(_(K[0]))).normalize();k.dot(_(it))<0&&(K=[K[0],K[3],K[2],K[1]],X=[X[0],X[3],X[2],X[1]],k.negate());const B=M.length/3;K.forEach((R,I)=>{M.push(...R),E.push(k.x,k.y,k.z),v.push(...X[I]),S.push(ut),b.push(...N?[N.r,N.g,N.b]:[0,0,0])}),A.push(B,B+1,B+2,B,B+2,B+3)};y([[-d,u,r],[d,u,r],[d,f,r],[-d,f,r]],[0,0,1],2,g),y([[-d,-f,r],[d,-f,r],[d,-u,r],[-d,-u,r]],[0,0,1],2,g),y([[-d,-u,r],[-h,-u,r],[-h,u,r],[-d,u,r]],[0,0,1],2,g),y([[h,-u,r],[d,-u,r],[d,u,r],[h,u,r]],[0,0,1],2,g),y([[-d,f,0],[d,f,0],[d,f,r],[-d,f,r]],[0,1,0],2,g),y([[-d,-f,0],[d,-f,0],[d,-f,r],[-d,-f,r]],[0,-1,0],2,g),y([[-d,-f,0],[-d,f,0],[-d,f,r],[-d,-f,r]],[-1,0,0],2,g),y([[d,-f,0],[d,f,0],[d,f,r],[d,-f,r]],[1,0,0],2,g),y([[-h,u,0],[h,u,0],[h,u,r],[-h,u,r]],[0,-1,0],2,p),y([[-h,-u,0],[h,-u,0],[h,-u,r],[-h,-u,r]],[0,1,0],2,p),y([[-h,-u,0],[-h,u,0],[-h,u,r],[-h,-u,r]],[1,0,0],2,p),y([[h,-u,0],[h,u,0],[h,u,r],[h,-u,r]],[-1,0,0],2,p),y([[-h,c,x],[h,c,x],[h,u,x],[-h,u,x]],[0,0,1],2,p),y([[-h,-u,x],[h,-u,x],[h,-c,x],[-h,-c,x]],[0,0,1],2,p),y([[-h,-c,x],[-l,-c,x],[-l,c,x],[-h,c,x]],[0,0,1],2,p),y([[l,-c,x],[h,-c,x],[h,c,x],[l,c,x]],[0,0,1],2,p);const[C,L,D,F]=n,H=.004,O=C+H,Z=L-H,q=D+H,j=F-H;y([[-l,-c,m],[l,-c,m],[l,c,m],[-l,c,m]],[0,0,1],0,null,[[C,D],[L,D],[L,F],[C,F]]),y([[-l,c,m],[l,c,m],[l,c,x],[-l,c,x]],[0,1,0],1,null,[[C,j],[L,j],[L,j],[C,j]]),y([[-l,-c,x],[l,-c,x],[l,-c,m],[-l,-c,m]],[0,-1,0],1,null,[[C,q],[L,q],[L,q],[C,q]]),y([[-l,-c,x],[-l,-c,m],[-l,c,m],[-l,c,x]],[-1,0,0],1,null,[[O,D],[O,D],[O,F],[O,F]]),y([[l,-c,m],[l,-c,x],[l,c,x],[l,c,m]],[1,0,0],1,null,[[Z,D],[Z,D],[Z,F],[Z,F]]);const G=new Ae;return G.setAttribute("position",new Yt(M,3)),G.setAttribute("normal",new Yt(E,3)),G.setAttribute("uv",new Yt(v,2)),G.setAttribute("aSide",new Yt(S,1)),G.setAttribute("aCol",new Yt(b,3)),G.setIndex(A),G}function AM(s,t,e,n){const[i,r,o,a]=n??[0,0,1,1];let l=i,c=o,h=1-a,u=1-r;if(!e)return[l,c,h,u];const d=s/t,f=e[0]*(o-i)/(e[1]*(a-r));if(f>d){const m=d/f,x=(l+c)/2,g=(c-l)*m/2;l=x-g,c=x+g}else{const m=f/d,x=(h+u)/2,g=(u-h)*m/2;h=x-g,u=x+g}return[l,c,h,u]}const Oa=(s,t,e,n)=>{const i=new Jt().makeBasis(Sr(e),new U(0,1,0),Sr(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class RM{constructor(t,e){P(this,"map",new Map);P(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${Uo(t)}|${t.medium}|${Do(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*ur/bs),r=Wf(1024,i),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,i),o.fillStyle="#121212";const a=70;let l=160;const c=[[`italic 500 84px ${this.font}`,Uo(t)]];for(const h of[t.medium,Do(t),t.year])h&&c.push([`400 62px ${this.font}`,h]);for(const[h,u]of c)o.font=h,l=CM(o,u,a,l,1024-2*a,h.startsWith("italic")?92:74),l+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new br(e()),n.colorSpace=Ue,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const Wf=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function CM(s,t,e,n,i,r){let o="";for(const a of t.split(" ")){const l=o?o+" "+a:a;s.measureText(l).width>i&&o?(s.fillText(o,e,n),n+=r,o=a):o=l}return s.fillText(o,e,n),n+r}const LM=s=>{const t=new kt(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function PM(s,t,e,n){const i=Wf(Math.ceil(t*No),Math.ceil(e*No)),r=i.getContext("2d");r.fillStyle=LM(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${fr}px ${Fo}`,r.fillText(s.title,8,fr*.8),s.sub&&(r.font=`400 ${zo}px ${Fo}`,r.fillText(s.sub,10,fr+wf+zo*.8));const o=new br(i);return o.colorSpace=Ue,o.anisotropy=8,o}function IM(s){const t=o_(s),e=l_(s,t).map(c=>new kt(c)),n=Int32Array.from(t.id),i=t.nx*t.nz;let r=[];for(let c=0;c<i;c++)n[c]>=0&&r.push(c);for(;r.length;){const c=[];for(const h of r){const u=h%t.nx;for(const d of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])d>=0&&d<i&&n[d]<0&&(n[d]=n[h],c.push(d))}r=c}const o=new Uint8Array(i*4),a=new kt(Sf);for(let c=0;c<i;c++){const h=e[n[c]]??a;o[c*4]=Math.round(h.r*255),o[c*4+1]=Math.round(h.g*255),o[c*4+2]=Math.round(h.b*255),o[c*4+3]=255}const l=new Ls(o,t.nx,t.nz,pn);return l.magFilter=l.minFilter=He,l.needsUpdate=!0,{tex:l,origin:new Bt(t.x0,t.z0),scale:new Bt(1/(t.nx*t.c),1/(t.nz*t.c))}}function DM(s,t,e,n,i,r,o,a,l=[]){const c=new De,h=s.H,u=IM(s),d=[],f=[],m=[u.tex],x=(L,D)=>{f.push(L),d.push(D);const F=new be(L,D);return c.add(F),F},g=[];for(const L of s.faces){const D=MM(L,h,s.doorH);if(D.empty)continue;const F=x(D.geometry(),du(wM(L,t,s,l.map(H=>H.lamp)),new kt(L.color),h,e,u));F.userData.face=L,g.push(F)}for(const[L,D]of yM(s,Gf))D.empty||x(D.geometry(),du(bM,new kt(L),h,e,u));const p=s.inner,M=s.entrance,E=new vu;E.add([[p.x0,0,p.z1],[p.x1,0,p.z1],[p.x1,0,p.z0],[p.x0,0,p.z0]],[0,1,0]),E.add([[M.a,0,M.z+.4],[M.b,0,M.z+.4],[M.b,0,M.z],[M.a,0,M.z]],[0,1,0]),x(E.geometry(),xM(o,a,e,uM(l))).layers.set(1);const S=new vu;S.add([[p.x0,h,p.z0],[p.x1,h,p.z0],[p.x1,h,p.z1],[p.x0,h,p.z1]],[0,-1,0]),x(S.geometry(),gM(e,u));const b=[...t.map(L=>L.lamp.p),...l.map(L=>L.lamp.p)],A=b.length;if(A){const L=new hr(.068,28).rotateX(Math.PI/2).translate(0,h-.0015,0),D=new hr(.05,24).rotateX(Math.PI/2).translate(0,h-.0025,0),F=new hr(.026,20).rotateX(Math.PI/2).translate(0,h-.0035,0),H=new Xn({color:14276820,toneMapped:!1}),O=new Xn({color:11842479,toneMapped:!1}),Z=new Xn({color:16777215,toneMapped:!1});f.push(L,D,F),d.push(H,O,Z);const q=new xo(L,H,A),j=new xo(D,O,A),G=new xo(F,Z,A),K=new Jt;b.forEach((it,ut)=>{K.makeTranslation(it[0],0,it[2]),q.setMatrixAt(ut,K),j.setMatrixAt(ut,K),G.setMatrixAt(ut,K)}),c.add(q,j,G)}const _=[],y=[];r.begin();for(const L of t){const D=Vf(L.lamp);for(const F of L.items){if(F.text){const X=PM(F.text,F.w,F.h,F.face.color);m.push(X);const k=x(new Un(F.w,F.h),new Xn({map:X,transparent:!0,depthWrite:!1,toneMapped:!1}));Oa(k,L.normal,L.right,[F.pos[0]+L.normal[0]*.002,F.pos[1],F.pos[2]+L.normal[2]*.002]),k.userData.title=F.id;continue}const H=F.work,O=H.kind==="paper"||H.kind==="digital"?new kt().setRGB(.92,.91,.88):null,Z=pu(n(H.id),D,O,H.adjust),q=hc(H),j=H.w*nn,G=H.h*nn,K=AM(j,G,i(H.id),H.crop),it=q?uc(q)?TM(j,G,cc[H.kind],K):EM(j,G,q,K):_u(F.w,F.h,F.depth,K),ut=x(it,Z);Oa(ut,L.normal,L.right,F.pos),ut.userData.work=H.id;const N={work:H,placed:L,mesh:ut,mat:Z,w:F.w,h:F.h,label:null};if(_.push(N),F.label){const X=x(_u(bs,ur,.003),pu(r.single(H),D,new kt(.95,.95,.93)));Oa(X,L.normal,L.right,F.label.pos),X.userData.work=H.id,X.userData.label=!0,y.push(X),N.label=X}}}r.end();const C=l.map(L=>hM(L));for(const L of C)c.add(L.group);return{group:c,pictures:_,labels:y,faceMeshes:g,machines:C,dispose(){for(const L of C)L.dispose();for(const L of f)L.dispose();for(const L of d)L.dispose();for(const L of m)L.dispose();c.traverse(L=>{const D=L;D.isInstancedMesh&&D.dispose()})}}}const dr=class dr{constructor(t,e,n,i,r,o){P(this,"cat",new Map);P(this,"arch");P(this,"placed",[]);P(this,"items",[]);P(this,"machines",[]);P(this,"migrated",!1);P(this,"interior",null);P(this,"outside",null);P(this,"sharp",new Map);P(this,"small",new Map);P(this,"baked");P(this,"labels");P(this,"outsideKey","");P(this,"blank",new Ls(new Uint8Array([128,128,128,255]),1,1));P(this,"onRebuilt",()=>{});P(this,"prepTex",t=>(t.colorSpace=Ue,t.anisotropy=this.aniso,t.minFilter=Ci,t));P(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);P(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=r,this.aniso=o,this.labels=new RM(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new Nl;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(dr.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new Nl().loadAsync(`${dr.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var a;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(l=>[l.id,l])),this.arch=r_(t),D_(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=m_(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(l=>!i.includes(l))),this.placed=e,this.items=n,this.machines=Z_(t,this.data.machines,this.arch.H),this.baked=vM(this.arch,e,this.baked);const r=this.interior;this.interior=DM(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat,this.machines),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose());const o=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);o!==this.outsideKey&&((a=this.outside)==null||a.dispose(),this.outside=SM(this.scene,this.font,this.aniso,t),this.outsideKey=o),this.onRebuilt(i)}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};P(dr,"url",(t,e)=>`art/${t}-${e}.jpg`);let Es=dr;class UM{constructor(t,e){P(this,"target");P(this,"texMat",new Jt);P(this,"cam",new en);P(this,"plane",new ni);P(this,"clip",new _e);P(this,"q",new _e);P(this,"n",new U(0,1,0));P(this,"p0",new U(0,0,0));P(this,"camPos",new U);P(this,"rot",new Jt);P(this,"look",new U);P(this,"view",new U);P(this,"tgt",new U);this.target=new yn(t,e,{type:bn,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const r=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+r[8])/r[0],this.q.y=(Math.sign(this.clip.y)+r[9])/r[5],this.q.z=-1,this.q.w=(1+r[10])/r[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),r[2]=this.clip.x,r[6]=this.clip.y,r[10]=this.clip.z+1,r[14]=this.clip.w;const o=t.getRenderTarget(),a=e.background,l=t.getClearColor(new kt),c=t.getClearAlpha();e.background=null,t.setClearColor(0,0),t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(o),t.setClearColor(l,c),e.background=a}}let Vl=null;function Mu(s){return Vl?(parent.postMessage(s,Vl),!0):!1}addEventListener("message",s=>{var t;(t=s.data)!=null&&t.rmiContactHost&&/^https:\/\/(www\.)?robynmiller\.net$/.test(s.origin)&&(Vl=s.origin)});parent!==window&&parent.postMessage({rmiHello:!0},"*");class NM{constructor(){P(this,"el");P(this,"tools");P(this,"low");P(this,"high");P(this,"cap");P(this,"frame");P(this,"open",!1);P(this,"busy",!1);P(this,"work",null);P(this,"px",[1,1]);P(this,"crop",[0,0,1,1]);P(this,"onClose",()=>{});P(this,"onShow",()=>{});P(this,"reserveRight",0);P(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(O_(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${yu(Uo(t))}</i>`],n=[t.medium,Do(t),t.year].filter(Boolean).map(i=>yu(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,r,o,a]=this.crop,l=this.px[0]*(o-i),c=this.px[1]*(a-r),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,d=Math.min(1,h/l,u/c),f=Math.round(l*d),m=Math.round(c*d);this.frame.style.width=`${f}px`,this.frame.style.height=`${m}px`;const x=f/(o-i),g=m/(a-r);for(const p of[this.low,this.high])Object.assign(p.style,{width:`${x}px`,height:`${g}px`,left:`${-i*x}px`,top:`${-r*g}px`})}}const yu=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),FM=s=>({kind:"work",id:s.work.id,centre:s.mesh.position,normal:s.placed.normal,size:Math.max(s.w,s.h),reach:Math.min(6,Math.max(2.6,1.8+2.4*Math.max(s.w,s.h))),meshes:s.label?[s.mesh,s.label]:[s.mesh]}),zM=.62,ka=5,OM=.18;class kM{constructor(t=!0){P(this,"pic",null);P(this,"lit",null);P(this,"dark",0);P(this,"veil");P(this,"vScene",new rc);P(this,"vCam",new qo(-1,1,1,-1,0,1));P(this,"hintEl");P(this,"hinted",null);P(this,"hintDone",!1);P(this,"v",new U);P(this,"f",new U);this.veil=new be(new Un(2,2),new Xn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}update(t,e,n,i,r){let o=null,a=1/0,l=1/0;if(r){const u=e.getWorldPosition(this.v),d=e.getWorldDirection(this.f);for(const f of n){const m=f.centre,x=f.normal,g=m.x-u.x,p=m.y-u.y,M=m.z-u.z,E=Math.hypot(g,p,M);if(E>f.reach||x[0]*-g+x[2]*-M<=0)continue;const v=Math.acos(Math.min(1,(g*d.x+p*d.y+M*d.z)/E)),S=Math.atan2(f.size*.5,E)+.17;if(v>S||Wi(i,u.x,u.z,m.x+x[0]*.05,m.z+x[2]*.05))continue;const b=v/S;b<a&&(a=b,o=f),this.pic&&f.id===this.pic.id&&f.kind===this.pic.kind&&(l=b)}this.pic&&l<a+.15&&(o=n.find(f=>f.id===this.pic.id&&f.kind===this.pic.kind)??o)}this.pic=o,o&&(this.lit=o);let c=0;if(o){const u=o.centre.distanceTo(e.getWorldPosition(this.v)),d=o.reach,f=d*.4,m=Math.min(1,Math.max(0,(d-u)/(d-f)));c=zM*m*m*(3-2*m)}this.dark+=(c-this.dark)*(1-Math.exp(-t/OM)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&o.kind==="work"&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=i.meshes;for(const l of r)l.layers.enable(ka);const o=n.layers.mask,a=e.background;n.layers.set(ka),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const l of r)l.layers.disable(ka);t.autoClear=!0}}const xs=46,BM=1.35,HM=.85,GM=1.15,io={along:1.15,side:.5,pitch:-.3,ang:.42},so={along:1.35,side:.65,pitch:-.16,ang:.62},VM=2.2,WM=3.4,Su=2.35,XM=900,wu=.012,Ba=s=>(s=Math.min(1,Math.max(0,s)),s*s*s*(s*(s*6-15)+10));class qM{constructor(){P(this,"state","walk");P(this,"machine",null);P(this,"covering",!1);P(this,"onBack",()=>{});P(this,"layer");P(this,"bar");P(this,"name");P(this,"frame",null);P(this,"loadedAt",0);P(this,"url","");P(this,"tube",{on:!1,t:9});P(this,"want",!1);P(this,"t",0);P(this,"from",{pos:new U,quat:new ve});P(this,"to",{pos:new U,quat:new ve});P(this,"look",{pos:new U,quat:new ve});P(this,"v",new U);P(this,"quad",null);P(this,"crt",{sy:0,sx:1,bright:1,show:!1});this.layer=document.createElement("div"),this.layer.id="monitor",this.bar=document.createElement("div"),this.bar.id="travel-bar";const t=document.createElement("button");t.className="tr-back",t.textContent="←  Back to the Time Machines";const e=n=>{n.preventDefault(),this.state==="there"&&(t.blur(),this.onBack(),this.back())};t.addEventListener("mousedown",e),t.addEventListener("click",e),this.name=document.createElement("span"),this.name.className="tr-name",this.bar.append(t,this.name),document.body.append(this.layer,this.bar),addEventListener("keydown",n=>{n.code==="Escape"&&this.state==="there"&&(n.preventDefault(),this.onBack(),this.back())})}get travelling(){return this.state!=="walk"}get ready(){return this.state==="walk"&&!!this.machine&&this.tube.on&&this.tube.t>.35}onMap(t,e){const n=this.quad;if(!n||!this.ready)return!1;let i=0;for(let r=0;r<4;r++){const[o,a]=n[r],[l,c]=n[(r+1)%4],h=(l-o)*(e-a)-(c-a)*(t-o);if(!(Math.abs(h)<1e-9)){if(!i)i=Math.sign(h);else if(Math.sign(h)!==i)return!1}}return!0}update(t,e,n,i){if(this.machine&&!i.includes(this.machine)){const r=i.find(o=>o.placed.machine.id===this.machine.placed.machine.id&&o.placed.machine.url===this.url);r&&this.state==="walk"?this.machine=r:this.state==="walk"&&this.unload()}this.state==="walk"?this.walking(e,n,i):this.travel(t,e,n),this.tubeStep(t),this.place(e),this.state==="walk"&&this.frame&&document.activeElement===this.frame&&this.frame.blur()}stance(t,e,n){const i=t.placed.spot,r=t.placed.front,o=n.pos.x-i.x,a=n.pos.z-i.z,l=o*r[0]+a*r[2],c=Math.abs(o*r[2]-a*r[0]),h=e.getWorldDirection(this.v),u=t.placed.screen.c,d=u.x-e.position.x,f=u.y-e.position.y,m=u.z-e.position.z,x=Math.acos(Math.min(1,(d*h.x+f*h.y+m*h.z)/Math.hypot(d,f,m)));return{along:l,side:c,ang:x,pitch:n.pitch}}walking(t,e,n){let i=null,r=VM;for(const o of n){if(o.placed.machine.outOfOrder)continue;const a=this.stance(o,t,e);a.along>.2&&a.along<r&&a.side<1&&(r=a.along,i=o)}if(i&&i!==this.machine&&!this.tube.on&&this.load(i),this.machine){const o=this.stance(this.machine,t,e);if((o.along>WM||o.along<.2||o.side>1.4)&&!this.tube.on&&this.tube.t>.4){this.unload();return}const a=this.want?!(o.along>so.along||o.side>so.side||o.pitch>so.pitch||o.ang>so.ang):o.along<io.along&&o.side<io.side&&o.pitch<io.pitch&&o.ang<io.ang;this.want=a;const l=this.loadedAt>0&&performance.now()-this.loadedAt>XM;a&&l&&!this.tube.on&&(this.tube={on:!0,t:0}),!a&&this.tube.on&&(this.tube={on:!1,t:0})}}load(t){this.unload(),this.machine=t,this.loadedAt=0;const e=document.createElement("iframe");e.className="tr-app",e.title=t.placed.machine.name,e.allow="fullscreen; autoplay",e.tabIndex=-1,e.addEventListener("load",()=>{this.frame===e&&(this.loadedAt=performance.now())}),e.src=this.url=t.placed.machine.url,this.frame=e,this.layer.append(e),this.sizeFrame()}unload(){var t;this.machine&&(this.machine.textOn.value=1),(t=this.frame)==null||t.remove(),this.frame=null,this.machine=null,this.url="",this.loadedAt=0,this.want=!1,this.tube={on:!1,t:9}}sizeFrame(){this.frame&&(this.frame.style.width=`${innerWidth}px`,this.frame.style.height=`${innerHeight-xs}px`)}tubeStep(t){const e=this.tube;e.t+=t;const n=this.machine,i=this.crt;if(!n){i.show=!1;return}const r=e.t;if(e.on){if(n.textOn.value=r<.05?.3:r<.09?1.1:0,r<.1){i.show=!1;return}const o=Math.min(1,(r-.1)/.16);i.show=!0,i.sx=1,i.sy=.012+.988*(1-Math.pow(1-o,3));const a=r<.3?2.2-1.2*o:r<.36?.35:r<.42?1.15:r<.47?.6:r<.55?1.05:r<.6?.82:1;i.bright=a}else{if(r>.3){i.show=!1,n.textOn.value=Math.min(1,(r-.3)/.25)*(r<.4?.5:1);return}n.textOn.value=0,i.show=r<.24;const o=Math.min(1,r/.12),a=Math.min(1,Math.max(0,(r-.12)/.1));i.sy=Math.max(.006,1-o),i.sx=1-.97*a,i.bright=1+1.6*o}}rect(t=1,e=1){const n=this.machine.placed.screen,i=innerWidth/Math.max(1,innerHeight-xs),r=lu.w-2*wu,o=lu.h-2*wu;let a=r,l=r/i;l>o&&(l=o,a=o*i),a*=t,l*=e;const c=(h,u)=>n.c.clone().addScaledVector(n.right,h).addScaledVector(n.up,u).addScaledVector(n.n,.0015);return{corners:[c(-a/2,l/2),c(a/2,l/2),c(a/2,-l/2),c(-a/2,-l/2)],w:a,h:l}}place(t){const e=this.frame;if(!e)return;const n=this.crt;if(this.state==="there"){e.style.transform=`translate(0px, ${xs}px)`,e.style.visibility="visible",e.style.opacity="1",e.style.filter="";return}const i=n.show||this.state==="in"||this.state==="back";if(this.quad=null,!i){e.style.visibility="hidden",e.style.opacity="0";return}e.style.visibility="visible";const{corners:r}=this.rect(this.state==="walk"||this.state==="step"?n.sx:1,this.state==="walk"||this.state==="step"?n.sy:1),o=innerWidth,a=innerHeight,l=[];for(const h of r){const u=h.clone().project(t);if(u.z>1||u.z<-1){e.style.opacity="0";return}l.push([(u.x+1)/2*o,(1-u.y)/2*a])}e.style.transform=YM(o,a-xs,l),e.style.opacity="1",this.state==="walk"&&(this.quad=l);const c=this.state==="walk"||this.state==="step"?n.bright:1;e.style.filter=Math.abs(c-1)>.01?`brightness(${c.toFixed(2)})`:""}enter(t,e){if(!this.ready||!this.machine)return!1;e.frozen=!0,this.look.pos.copy(t.position),this.look.quat.copy(t.quaternion),this.from.pos.copy(t.position),this.from.quat.copy(t.quaternion);const n=this.machine.placed.screen,{h:i}=this.rect(),r=Math.tan(Xe.degToRad(t.fov/2)),o=innerHeight,a=i*o/(2*r*(o-xs)),l=xs/2/o*2*a*r;return this.to.pos.copy(n.c).addScaledVector(n.n,a+.0015).addScaledVector(n.up,l),this.to.quat.setFromRotationMatrix(new Jt().makeBasis(n.right,n.up,n.n)),this.t=0,this.state="in",this.name.textContent=this.machine.placed.machine.name.replace(/\s*[|\n]\s*/g," "),document.body.classList.add("traveling"),document.pointerLockElement&&document.exitPointerLock(),!0}back(){var t,e,n;this.state==="there"&&(this.state="back",this.covering=!1,this.t=0,this.bar.classList.remove("on"),(t=this.frame)==null||t.blur(),(e=this.frame)==null||e.classList.remove("live"),(n=this.frame)==null||n.setAttribute("inert",""),this.from.pos.copy(this.to.pos),this.from.quat.copy(this.to.quat))}travel(t,e,n){var r,o;const i=(a,l,c)=>{e.position.lerpVectors(a.pos,l.pos,c),e.quaternion.slerpQuaternions(a.quat,l.quat,c),e.updateMatrixWorld()};if(this.state==="in")this.t+=t/BM,i(this.from,this.to,Ba(this.t)),this.t>=1&&(this.state="there",this.covering=!0,this.bar.classList.add("on"),(r=this.frame)==null||r.classList.add("live"),(o=this.frame)==null||o.focus());else if(this.state==="there")i(this.to,this.to,1);else if(this.state==="back")this.t+=t/HM,i(this.from,this.look,Ba(this.t)),this.t>=1&&this.stepBack(n);else if(this.state==="step"){this.t+=t/GM;const a=Ba(this.t),l={pos:e.position.clone(),quat:e.quaternion.clone()};i(this.look,l,a),this.t>=1&&(this.state="walk",n.frozen=!1,document.body.classList.remove("traveling"),this.unload())}}stepBack(t){this.state="step",this.t=0,this.tube={on:!1,t:0},this.want=!1;const e=this.machine.placed,n=e.front;t.frozen=!0,t.pos.set(e.spot.x+n[0]*Su,Bi,e.spot.z+n[2]*Su),t.yaw=Math.atan2(n[0],n[2]),t.pitch=-.1,t.vel.set(0,0,0),t.glide.set(0,0),t.spin=0,t.goal=null,t.collide()}pushBack(t,e){this.state!=="walk"||!this.machine||(this.look.pos.copy(t.position),this.look.quat.copy(t.quaternion),this.stepBack(e))}resize(){this.sizeFrame()}}function YM(s,t,e){const[[n,i],[r,o],[a,l],[c,h]]=e,u=r-a,d=c-a,f=o-l,m=h-l,x=n-r+a-c,g=i-o+l-h,p=u*m-d*f,M=(x*m-d*g)/p,E=(u*g-x*f)/p,v=r-n+M*r,S=c-n+E*c,b=n,A=o-i+M*o,_=h-i+E*h,y=i;return`matrix3d(${[v/s,A/s,0,M/s,S/t,_/t,0,E/t,0,0,1,0,b,y,0,1].map(L=>+L.toFixed(10)).join(",")})`}const $M=4.5,KM=380,ZM=10,JM=1.7;class QM{constructor(t,e,n,i,r,o){P(this,"ndc",new Bt);P(this,"ray",new Lo);P(this,"d",null);P(this,"trail",[]);P(this,"fingers",new Map);P(this,"two",null);P(this,"waitAll",!1);this.canvas=t,this.camera=e,this.player=n,this.pick=i,this.tap=r,this.enabled=o,t.addEventListener("pointerdown",a=>this.start(a)),t.addEventListener("pointermove",a=>this.move(a)),t.addEventListener("pointerup",a=>this.end(a)),t.addEventListener("pointercancel",a=>this.lift(a.pointerId)),t.addEventListener("lostpointercapture",a=>this.lift(a.pointerId)),t.addEventListener("touchstart",a=>a.preventDefault(),{passive:!1})}lift(t){var e;this.fingers.delete(t),((e=this.d)==null?void 0:e.id)===t&&(this.d=null),this.two&&(this.two.a===t||this.two.b===t)&&(this.two=null,this.waitAll=this.fingers.size>0),this.fingers.size||(this.waitAll=!1)}ndcAt(t,e){const n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1)}at(t){return this.ndcAt(t.clientX,t.clientY)}floorAt(t){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(t,this.camera);const e=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const i=-e.y/n.y;return i>30?null:new U(e.x+n.x*i,0,e.z+n.z*i)}start(t){var a;if(t.pointerType!=="touch"||!this.enabled())return;t.preventDefault(),(a=getSelection())==null||a.removeAllRanges();for(const l of[...this.fingers.keys()])this.canvas.hasPointerCapture(l)||this.lift(l);if(this.canvas.setPointerCapture(t.pointerId),this.fingers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null,this.trail=[],this.fingers.size===2){this.d=null;const[[l,c],[h,u]]=[...this.fingers.entries()],d=(c.x+u.x)/2,f=(c.y+u.y)/2;this.two={a:l,b:h,p0:this.floorAt(this.ndcAt(d,f)),mx:d,my:f,dist:Math.max(1,Math.hypot(c.x-u.x,c.y-u.y))};return}if(this.fingers.size>2||this.waitAll)return;const e=this.at(t),n=this.pick(e),i=this.floorAt(e),r=!!i&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(i)-.05),o=r||(n.kind==="wall"||n.kind==="machine")&&(n.dist??99)<=$M?1:.6;this.d={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),mode:r?"ground":"turn",grip:o,p0:r?i:null,moved:!1,lx:t.clientX,ly:t.clientY}}move(t){const e=this.fingers.get(t.pointerId);if(!e)return;t.preventDefault(),e.x=t.clientX,e.y=t.clientY;const n=performance.now(),i=this.two;if(i){const l=this.fingers.get(i.a),c=this.fingers.get(i.b);if(!l||!c)return;const h=(l.x+c.x)/2,u=(l.y+c.y)/2,d=Math.max(1,Math.hypot(l.x-c.x,l.y-c.y)),f=this.player.pos.x,m=this.player.pos.z;let x=0,g=0;if(i.p0){const E=this.floorAt(this.ndcAt(h,u));E&&(x=i.p0.x-E.x,g=i.p0.z-E.z)}else{const E=4/(this.canvas.clientHeight||800),v=Math.sin(this.player.yaw),S=Math.cos(this.player.yaw),b=h-i.mx,A=u-i.my;x=(-b*S+-A*v)*E,g=(b*v+-A*S)*E}const p=Math.log(d/i.dist)/Math.LN2*JM;x+=-Math.sin(this.player.yaw)*p,g+=-Math.cos(this.player.yaw)*p;const M=Math.hypot(x,g);for(M>1.2&&(x*=1.2/M,g*=1.2/M),M>1e-5&&this.player.drag(x,g),i.mx=h,i.my=u,i.dist=d,i.p0&&(i.p0=this.floorAt(this.ndcAt(h,u))??i.p0),this.trail.push({t:n,dx:this.player.pos.x-f,dz:this.player.pos.z-m,dyaw:0});this.trail.length&&n-this.trail[0].t>120;)this.trail.shift();return}const r=this.d;if(!r||t.pointerId!==r.id)return;!r.moved&&Math.hypot(t.clientX-r.x,t.clientY-r.y)>ZM&&(r.moved=!0);const o=t.clientX-r.lx,a=t.clientY-r.ly;if(r.lx=t.clientX,r.ly=t.clientY,!!r.moved){if(r.mode==="ground"&&r.p0){const l=this.floorAt(this.at(t));if(!l)return;let c=r.p0.x-l.x,h=r.p0.z-l.z;const u=Math.hypot(c,h);u>1.2&&(c*=1.2/u,h*=1.2/u);const d=this.player.pos.x,f=this.player.pos.z;this.player.drag(c,h),this.trail.push({t:n,dx:this.player.pos.x-d,dz:this.player.pos.z-f,dyaw:0})}else{const l=Xe.degToRad(this.camera.fov)/this.canvas.clientHeight*r.grip;this.player.turnBy(o*l,a*l),this.trail.push({t:n,dx:0,dz:0,dyaw:o*l})}for(;this.trail.length&&n-this.trail[0].t>120;)this.trail.shift()}}end(t){const e=this.two&&(this.two.a===t.pointerId||this.two.b===t.pointerId),n=this.d;this.lift(t.pointerId);const i=performance.now();if(e){this.fling("ground",i);return}if(!(!n||t.pointerId!==n.id)){if(!n.moved&&i-n.t<KM){this.tap(this.pick(this.at(t)),t.clientX,t.clientY);return}this.fling(n.mode,i)}}fling(t,e){const n=this.trail.filter(l=>e-l.t<120);if(this.trail=[],!n.length||e-n[n.length-1].t>70)return;const i=Math.max(.03,(e-n[0].t)/1e3+1/60);let r=0,o=0,a=0;for(const l of n)r+=l.dx,o+=l.dz,a+=l.dyaw;t==="ground"?(this.player.glide.set(r/i,o/i),this.player.glide.length()>7&&this.player.glide.setLength(7)):this.player.spin=Xe.clamp(a/i,-7,7)}}function bu(s,t){const n=document.createElement("canvas");n.width=n.height=32*t;const i=n.getContext("2d");i.scale(t,t);const r=32/2,o=8,a=2.5,l=(c,h)=>{i.strokeStyle=h,i.lineWidth=c,i.lineCap="round",i.beginPath(),i.moveTo(r-o,r),i.lineTo(r-a,r),i.moveTo(r+a,r),i.lineTo(r+o,r),i.moveTo(r,r-o),i.lineTo(r,r-a),i.moveTo(r,r+a),i.lineTo(r,r+o),i.stroke(),s&&(i.beginPath(),i.arc(r,r,11.5,0,Math.PI*2),i.stroke())};return l(3.4,"rgba(0,0,0,0.55)"),l(1.5,"#fff"),n.toDataURL("image/png")}const ro=s=>`-webkit-image-set(url(${bu(s,1)}) 1x, url(${bu(s,2)}) 2x)`,jM="var(--cross)",ty="var(--cross-on)",xn={x:innerWidth/2,y:innerHeight/2};function ey(){const s=document.documentElement.style;s.setProperty("--cross",`${ro(!1)} 16 16, crosshair`),s.setProperty("--cross-on",`${ro(!0)} 16 16, pointer`);const t=document.createElement("div");t.id="crosshair";const e=ro(!1),n=ro(!0);document.body.append(t);let i="";return(r,o=!1,a,l)=>{t.classList.toggle("on",r);const c=o?n:e;c!==i&&(t.style.backgroundImage=c,i=c),t.style.transform=r&&a!==void 0&&l!==void 0?`translate(${a-innerWidth/2}px, ${l-innerHeight/2}px)`:""}}const ny=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],iy=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],Xf=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],wr=.12,yc=[58,44,40],Ha=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},sy=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function Zo(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,r=s[n],o=s[n+1];return[0,1,2].map(a=>sy(Ha(r[a])+(Ha(o[a])-Ha(r[a]))*i))}function Bo([s,t,e]){const n=s/255,i=t/255,r=e/255,o=Math.max(n,i,r),a=Math.min(n,i,r),l=(o+a)/2,c=o-a;if(!c)return[0,0,l];const h=l>.5?c/(2-o-a):c/(o+a);let u;return o===n?u=(i-r)/c+(i<r?6:0):o===i?u=(r-n)/c+2:u=(n-i)/c+4,[u*60,h,l]}function ry(s,t,e){if(s=(s%360+360)%360,t<=0){const c=Math.round(e*255);return[c,c,c]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o=0,a=0,l=0;return s<60?(o=n,a=i):s<120?(o=i,a=n):s<180?(a=n,l=i):s<240?(a=i,l=n):s<300?(o=i,l=n):(o=n,l=i),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((l+r)*255)]}function oy(s,t){const[e,n,i]=Bo(s);return n<.02?s:ry(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const Sc=s=>Zo(ny,s.skin),ay=s=>Zo(iy,s.mouthColor),ly=s=>Zo(Xf,(s.cheeks-wr)/(1-wr)),cy=s=>{const t=Math.max(0,Math.min(1,s.cheeks/wr));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=Zo(Xf,t/16);s.push(`rgb(${e},${n},${i}) ${((wr+t/16*(1-wr))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const hy={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:Bo(yc)[0]/360,hat:"none"},$t=16,Zt=16,ee=16,js=[26,32,42],Eu=[236,240,246],fn=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Rt={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:yc,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},ti=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),Tu=2.2,uy=18,fy=6,Au=.55;function dy(s){const t=Tu*Math.pow(uy/Tu,Math.max(0,Math.min(1,s))),e=$t/2,n=Zt/2,i=ee/2;return(r,o,a)=>{const l=Math.abs(r+.5-e)/e,c=Math.abs(o+.5-n)/n,h=l**t+c**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=ee-fy){const d=h<=Au?1:((1-h)/(1-Au))**(1/t);return u<=d}return h+u**t<=1}}function py(s){const t=Sc(s),e=dy(s.shape),n=new Map,i=(N,X,k)=>`${N},${X},${k}`;let r=null;const o=new Set,a=new Set;let l;const c=(N,X,k,B)=>{const R=i(N,X,k);n.set(R,l?{x:N,y:X,z:k,c:B,part:l}:{x:N,y:X,z:k,c:B}),r&&r.add(R)},h=(N,X,k,B)=>{const R=i(N,X,k);n.set(R,{x:N,y:X,z:k,c:B}),o.delete(R),a.delete(R)},u=(N,X,k)=>n.has(i(N,X,k));for(let N=0;N<$t;N++)for(let X=0;X<Zt;X++)for(let k=0;k<ee;k++)e(N,X,k)&&c(N,X,k,t);const d=(N,X)=>{for(let k=Zt-1;k>=0;k--)if(u(N,k,X))return k;return-1},f=(N,X)=>{for(let k=ee-1;k>=0;k--)if(u(N,X,k))return k;return-1},m=(N,X,k)=>{if(N<0||N>=$t||X<0||X>=Zt)return;const B=f(N,X);B>=0&&c(N,X,B,k)},x=$t/2,g=1+ti(s.eyeSize,3),p=1+ti(s.eyeSize,3),M=Math.max(1,6-g),E=1+ti(s.eyeSpacing,M-1),v=8+ti(s.eyeHeight,4)-2-Math.floor((p-1)/2),S=v+p-1,b=[[x-E-g,x-E-1],[x+E,x+E+g-1]],A=g>=3&&p>=3;for(const[N,X]of b)for(let k=N;k<=X;k++)for(let B=v;B<=S;B++){const R=!!(A&&k>N&&k<X&&B>v&&B<S);l=A&&!R?"eye":"pupil",m(k,B,A?R?js:Eu:js)}l=void 0,r=o;const _=ti(s.browWeight,3),y=S+2+(ti(s.browHeight,4)-2);if(_>0){l="brow";for(const[N,X]of b)for(let k=N-1;k<=X+1;k++)for(let B=0;B<_;B++)m(k,y+B,Rt.hair);l=void 0}r=null;const C=ti(s.noseLength,8),L=5+(ti(s.noseHeight,6)-3);if(C>0){const N=fn(t,.9);l="nose";for(let X=x-1;X<=x;X++)for(let k=L;k<=L+1;k++){const B=f(X,k);if(!(B<0))for(let R=1;R<=C;R++)c(X,k,B+R,N)}l=void 0}const D=2*ti(s.mouthWidth,4),F=3;if(D>0){const N=ay(s),X=D>=6?2:1;l="mouth";for(let k=x-D/2;k<=x+D/2-1;k++)for(let B=F;B<F+X;B++)m(k,B,N);l=void 0}const H=cy(s);if(H>0){const N=ly(s),X=(I,V)=>I[0]===V[0]&&I[1]===V[1]&&I[2]===V[2],k=v-1,B=F+(D>=6?2:1),R=Math.max(B+.5,k-.5);for(const[I,V]of b){const Q=V<x,nt=(I+V)/2,dt=nt+.35*((Q?x-1.5:x+.5)-nt);for(let gt=Math.floor(dt-2);gt<=Math.ceil(dt+2);gt++)if(!(Q?gt>x-2:gt<x+1))for(let bt=B;bt<=k;bt++){const zt=1-((gt-dt)/1.9)**2-((bt-R)/1.3)**2;if(zt<=0)continue;const Ot=f(gt,bt),Wt=Ot>=0?n.get(i(gt,bt,Ot)):void 0;if(!Wt||Wt.part||!X(Wt.c,t))continue;const le=H*.72*Math.pow(zt,.8),Ee=[0,1,2].map(rt=>Math.round(t[rt]+(N[rt]-t[rt])*le));n.set(i(gt,bt,Ot),{x:gt,y:bt,z:Ot,c:Ee,blend:t})}}}const O=(N,X=1)=>{for(let k=0;k<$t;k++)for(let B=0;B<ee;B++){const R=d(k,B);if(!(R<0))for(let I=1;I<=X;I++)c(k,R+I,B,N)}},Z=(N,X,k)=>{const B=Math.ceil(X)+1;for(let R=x-B;R<x+B;R++)for(let I=x-B;I<x+B;I++)Math.hypot(R+.5-x,I+.5-x)<=X&&c(R,N,I,k)},q=(N,X,k,B)=>{for(let R=N;R<=X;R++)for(let I=0;I<$t;I++)for(let V=0;V<ee;V++)Math.hypot(I+.5-x,V+.5-x)<=k&&c(I,R,V,B)},j=(N,X,k,B,R)=>{const I=Math.ceil(B)+1;for(let V=Math.floor(N-I);V<=N+I;V++)for(let Q=Math.floor(X-I);Q<=X+I;Q++)for(let nt=Math.floor(k-I);nt<=k+I;nt++)Math.hypot(V+.5-N,Q+.5-X,nt+.5-k)<=B&&c(V,Q,nt,R)},G=(N,X,k,B=1)=>{for(let R=N;R<=X;R++)for(let I=0;I<$t;I++){const V=f(I,R);V>=0&&c(I,R,V+B,k)}};switch(r=a,s.hat){case"birthday":{for(let N=0;N<9;N++)q(Zt+N,Zt+N,5.4-N*.62,N%2?Rt.partyAlt:Rt.party);j(x,Zt+9.5,x,1.6,Eu);break}case"mickey":{const N=d(x,x)+2;for(const X of[-.5,$t+.5])j(X,N,x,4.2,js);break}case"tophat":{Z(Zt,8.6,Rt.felt),q(Zt+1,Zt+10,5,Rt.felt),q(Zt+3,Zt+4,5.05,Rt.band);break}case"gangster":{Z(Zt,9.6,Rt.felt),q(Zt+1,Zt+5,5,Rt.felt),q(Zt+1,Zt+2,5.05,Rt.band);break}case"goggles":{G(v,S,Rt.brass);for(const[N,X]of b)for(let k=N;k<=X;k++)for(let B=v;B<=S;B++){const R=f(k,B);R>=0&&c(k,B,R+1,Rt.glass)}break}case"pilot":{O(Rt.leather,2),G(Zt-4,Zt-3,Rt.brass);for(let N=Zt-4;N>=4;N--)for(const X of[0,1,$t-2,$t-1])for(let k=0;k<ee;k++)u(X,N,k)&&c(X,N,k,Rt.leather);break}case"model":{Z(Zt,12.5,Rt.partyAlt),q(Zt+1,Zt+2,4.4,Rt.partyAlt);break}case"curls":{let N=7;const X=()=>(N=(N*1103515245+12345)%2147483648)/2147483648;for(let k=-2;k<$t+2;k++)for(let B=-2;B<ee+2;B++){const R=d(Math.max(0,Math.min($t-1,k)),Math.max(0,Math.min(ee-1,B)));R<0||(X()<.6&&c(k,R+1,B,Rt.hair),X()<.34&&c(k,R+2,B,Rt.hair),X()<.14&&c(k,R+3,B,Rt.hair))}break}case"bob":{O(Rt.hair,2);for(let N=S+1;N<Zt;N++)for(let X=0;X<$t;X++)for(let k=0;k<ee;k++)(X<=1||X>=$t-2||k<=1)&&u(X,N,k)&&c(X,N,k,Rt.hair);break}case"pigtails":{O(Rt.hair,2);for(const N of[-1.5,$t+1.5])j(N,Zt-5,x,3.4,Rt.hair);break}case"crown":{const N=Rt.gold,X=fn(N,1.15),k=Rt.band,B=(V,Q)=>{const nt=Math.hypot(V+.5-x,Q+.5-x);return nt>=5.1&&nt<=6.9};let R=0;for(let V=0;V<$t;V++)for(let Q=0;Q<ee;Q++)B(V,Q)&&(R=Math.max(R,d(V,Q)+3));for(let V=0;V<$t;V++)for(let Q=0;Q<ee;Q++){if(!B(V,Q))continue;const nt=d(V,Q);if(!(nt<0))for(let dt=nt+1;dt<=R;dt++)c(V,dt,Q,dt===R?X:N)}const I=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[V,Q]of I){const nt=Math.hypot(V+1-x,Q+1-x);for(let dt=V;dt<=V+1;dt++)for(let gt=Q;gt<=Q+1;gt++){const bt=Math.hypot(dt+.5-x,gt+.5-x)>nt;for(let zt=1;zt<=(bt?5:3);zt++)c(dt,R+zt,gt,bt&&zt===5?X:N)}}for(let V=x-1;V<=x;V++)for(let Q=R+2;Q<=R+3;Q++)for(let nt=14;nt<=15;nt++)c(V,Q,nt,k);break}case"beanie":{const N=Rt.red,X=Rt.cream,k=Math.max(S+1,Zt-6),B=Math.min(k+2,Zt-1),R=[];for(let I=k;I<=B;I++)for(let V=-1;V<=$t;V++)for(let Q=-1;Q<=ee;Q++)u(V,I,Q)?c(V,I,Q,X):(u(V-1,I,Q)||u(V+1,I,Q)||u(V,I,Q-1)||u(V,I,Q+1))&&R.push([V,I,Q]);for(const[I,V,Q]of R)c(I,V,Q,X);for(let I=B+1;I<Zt;I++)for(let V=0;V<$t;V++)for(let Q=0;Q<ee;Q++)u(V,I,Q)&&c(V,I,Q,I===B+1?fn(N,.82):N);for(let I=0;I<$t;I++)for(let V=0;V<ee;V++){const Q=d(I,V);Q<=B||(c(I,Q+1,V,N),c(I,Q+2,V,N))}j(x,d(x,x)+4.5,x,1.9,X);break}case"cowboy":{let N=0;for(let X=0;X<$t;X++)for(let k=0;k<ee;k++)N=Math.max(N,d(X,k)+1);for(let X=0;X<$t;X++)for(let k=0;k<ee;k++){const B=d(X,k);if(!(B<0||Math.hypot(X+.5-x,k+.5-x)>5))for(let R=B+1;R<N;R++)c(X,R,k,Rt.leather)}for(let X=x-11;X<x+11;X++)for(let k=x-11;k<x+11;k++){const B=Math.abs(X+.5-x);if(Math.hypot(B,k+.5-x)>10.7)continue;const R=B>7.5?2:B>5.5?1:0;for(let I=0;I<=R;I++)c(X,N+I,k,Rt.leather)}for(let X=0;X<$t;X++)for(let k=0;k<ee;k++){const B=Math.abs(X+.5-x);if(Math.hypot(B,k+.5-x)>5)continue;const R=B<1?2:B<2?1:0;for(let I=N+1;I<=N+7-R;I++)c(X,I,k,Rt.leather);R>0&&c(X,N+7-R,k,fn(Rt.leather,.8))}q(N+1,N+2,5.05,Rt.felt);break}case"wizard":{const N=Rt.plum,X=fn(N,.82),k=d(x,x)+1;for(let V=x-6;V<x+6;V++)for(let Q=x-6;Q<x+6;Q++){if(Math.hypot(V+.5-x,Q+.5-x)>5.2)continue;const nt=d(V,Q);if(!(nt<0))for(let dt=nt+1;dt<=k;dt++)c(V,dt,Q,N)}const B=11;for(let V=x-12;V<x+12;V++)for(let Q=x-12;Q<x+12;Q++){const nt=Math.hypot(V+.5-x,Q+.5-x);if(nt<=5.2||nt>B)continue;const dt=V>=0&&V<$t&&Q>=0&&Q<ee?d(V,Q):-1;c(V,Math.max(k-Math.max(0,Math.round(nt)-8),dt+1,S+2),Q,X)}const R=13;for(let V=0;V<=R;V++){const Q=V/R,nt=5-4.1*Q,dt=x-6.5*Q*Q;for(let gt=x-6;gt<x+6;gt++)for(let bt=-2;bt<ee;bt++)Math.hypot(gt+.5-x,bt+.5-dt)<=nt&&c(gt,k+V,bt,N)}const I=(V,Q)=>{for(let nt=x-Q;nt<x+Q;nt++){const dt=f(nt,V);dt>=0&&c(nt,V,dt,Rt.gold)}};I(k+3,1),I(k+4,2),I(k+5,1),I(k+8,1),I(k+11,1);break}case"halo":{let N=-1;for(let V=0;V<$t;V++)for(let Q=0;Q<ee;Q++)N=Math.max(N,d(V,Q));const X=N+3,k=fn(Rt.gold,1.15),B=4.9,R=6.7,I=Math.ceil(R)+1;for(let V=x-I;V<x+I;V++)for(let Q=x-I;Q<x+I;Q++){const nt=Math.hypot(V+.5-x,Q+.5-x);nt<B||nt>R||c(V,X,Q,Q>=x?k:Rt.gold)}break}case"headphones":{const N=Math.min(S+1,10),X=x-2,k=x+1;for(let B=0;B<$t;B++)for(let R=X;R<=k;R++){const I=d(B,R);I<0||(c(B,I+1,R,Rt.steel),c(B,I+2,R,Rt.steel))}for(let B=N+3;B<Zt;B++)for(const R of[0,$t-1])for(let I=X;I<=k;I++)u(R,B,I)&&c(R,B,I,Rt.steel);for(let B=0;B<3;B++)for(let R=N-4;R<=N+3;R++)for(let I=x-4;I<=x+3;I++)Math.hypot(R+.5-N,I+.5-x)>3.6||(c(-B,R,I,js),c($t-1+B,R,I,js));for(let B=N-2;B<=N+1;B++)for(let R=x-2;R<=x+1;R++)Math.hypot(B+.5-N,R+.5-x)<=1.6&&(c(-2,B,R,Rt.steel),c($t+1,B,R,Rt.steel));break}case"viking":{const N=fn(Rt.steel,.78),X=Math.max(S+2,Zt-5);for(let R=X;R<Zt;R++)for(let I=0;I<$t;I++)for(let V=0;V<ee;V++)u(I,R,V)&&c(I,R,V,R===X?N:Rt.steel);for(let R=0;R<$t;R++)for(let I=0;I<ee;I++){const V=d(R,I);V<X||(c(R,V+1,I,Rt.steel),c(R,V+2,I,Rt.steel))}const k=Math.max(S+1,X-1);for(let R=k;R<=Zt;R++)for(let I=x-1;I<=x;I++){const V=f(I,R);V>=0&&c(I,R,V+1,N)}const B=Math.max(d(5,x)-4,S+4);for(const R of[-1,1])for(let I=0;I<=18;I++){const V=I/18,Q=V*2.05,nt=x+R*(6.2+6*Math.sin(Q));j(nt,B+8.4-8.4*Math.cos(Q),x,2.6-1.6*V,Rt.cream)}break}case"flowers":{const N=Math.max(S+1,Math.min(S+3,Zt-4)),X=Rt.leaf,k=fn(Rt.leaf,.82),B=(nt,dt)=>Math.floor(x+nt*dt),R=[[0,1],[.87,.5],[.87,-.5],[0,-1]],I=[];for(const[nt,dt]of R){let gt=2;for(;gt<12&&u(B(nt,gt),N,B(dt,gt));)gt+=.5;I.push(gt)}const V=[];for(let nt=N;nt<=N+1;nt++)for(let dt=0;dt<$t;dt++)for(let gt=0;gt<ee;gt++){if(!u(dt,nt,gt))continue;let bt=!1;for(let zt=-1;zt<=1;zt++)for(let Ot=-1;Ot<=1;Ot++)u(dt+zt,nt,gt+Ot)||(bt=!0,V.push([dt+zt,nt,gt+Ot]));bt&&V.push([dt,nt,gt])}for(const[nt,dt,gt]of V)c(nt,dt,gt,dt===N?k:X);const Q=[Rt.red,Rt.gold,Rt.cream];for(let nt=0;nt<R.length;nt++){const[dt,gt]=R[nt],bt=Math.round(x+dt*(I[nt]+1)),zt=Math.round(x+gt*(I[nt]+1)),Ot=Q[nt%Q.length];j(bt,N+1.5,zt,1.5,Ot),dt>0&&j(2*x-bt,N+1.5,zt,1.5,Ot)}break}case"afro":{const k=d(x,x),B=Math.max(S+2,Zt-3);for(let R=x-10;R<x+10;R++)for(let I=x-10;I<x+10;I++){const V=Math.abs(R+.5-x),Q=Math.abs(I+.5-x),nt=(V*V+Q*Q)/(10*10),dt=d(R,I);if(nt>1&&dt<0)continue;const gt=nt>1?0:7.5*Math.sqrt(1-nt),zt=I>=ee-6?Math.max(S+1,B-Math.max(0,V-4.5)):S+1,Ot=dt>=0?zt:Math.max(zt,Math.ceil(k+.5-gt)),Wt=nt>1?dt:Math.max(dt,Math.floor(k-.5+gt));for(let le=Ot;le<=Wt;le++)c(R,le,I,le<zt+2?fn(Rt.hair,.8):Rt.hair)}break}case"mohawk":{const N=Rt.hair,X=fn(t,.74);for(let B=0;B<$t;B++)for(let R=0;R<ee;R++){const I=d(B,R);if(!(I<0))for(let V=S+2;V<=I;V++)u(B,V,R)&&h(B,V,R,X)}const k=d(x,x);for(let B=1;B<ee-1;B++){if(d(x,B)<k-4)continue;const I=(B-1)/(ee-3),V=2+Math.round(4*Math.sin(Math.PI*I));for(const Q of[x-1,x])for(let nt=d(Q,B)+1;nt<=d(Q,B)+V;nt++)c(Q,nt,B,N)}break}case"ponytail":{const N=Rt.hair,X=Math.max(d(x-1,2),d(x,2))-2;for(let k=0;k<$t;k++)for(let B=0;B<ee;B++){const R=d(k,B);R>S&&c(k,R,B,N)}O(N,2);for(let k=S+1;k<Zt;k++)for(let B=0;B<$t;B++)for(let R=0;R<ee;R++)(B<=1||B>=$t-2||R<=3)&&u(B,k,R)&&c(B,k,R,N);for(let k=3;k<=S;k++){const B=6-Math.max(0,Math.min(3,S-k));for(let R=x-B;R<x+B;R++)for(let I=0;I<=2;I++)u(R,k,I)&&c(R,k,I,N)}for(let k=0;k<=14;k++){const B=k/14;j(x,X-10*B*B,1.5-4.4*Math.sqrt(B),2.7-1.3*B,N)}j(x,X-.5,-.6,2.1,Rt.band);break}case"longhair":{const N=Rt.hair,X=ee-5,k=2;O(N,2);for(let B=0;B<Zt;B++)for(let R=0;R<$t;R++)for(let I=0;I<ee;I++){if(!u(R,B,I))continue;const V=I>=X,Q=R<k||R>=$t-k;V&&!Q||V&&Q&&B>=v&&B<=S||c(R,B,I,N)}for(let B=Math.max(Zt-3,S+2);B<Zt;B++)for(let R=0;R<$t;R++)for(let I=X;I<ee;I++)u(R,B,I)&&c(R,B,I,N);for(let B=0;B<$t;B++)for(let R=0;R<ee;R++){if(!(B<k||B>=$t-k||R<k)||d(B,R)<0)continue;let V=0;for(;!u(B,V,R);)V++;for(let Q=V-1;Q>=V-3;Q--)c(B,Q,R,N)}break}case"buzz":{const N=Rt.hair,X=fn(Rt.hair,1.75),k=Math.min(Zt-2,Math.max(S+3,Zt-3));for(let B=0;B<$t;B++)for(let R=0;R<ee;R++){const I=d(B,R);if(I<0)continue;const V=Math.abs(B+.5-x),nt=R>=ee-6?V<5.5?0:V<6.5?1:2:3,dt=Math.max(S+1,Math.min(k-nt,I-1));for(let gt=dt;gt<=I;gt++)u(B,gt,R)&&c(B,gt,R,gt<k?X:N)}break}case"bun":{const N=fn(Rt.hair,.74),X=S+2;for(let R=0;R<$t;R++)for(let I=0;I<ee;I++){const V=d(R,I);if(V<X)continue;const Q=I<=5?5:I<=9?3:2;for(let nt=V;nt>V-Q&&nt>=X;nt--)u(R,nt,I)&&c(R,nt,I,Rt.hair);c(R,V+1,I,Rt.hair)}const k=4.5,B=d(x,4);j(x,B+3,k,3.1,Rt.hair);for(let R=x-4;R<x+4;R++)for(let I=1;I<=8;I++)if(Math.hypot(R+.5-x,I+.5-k)<=2.6)for(let V=B+1;V<=B+2;V++)c(R,V,I,N);break}case"braids":{O(Rt.hair,2);for(let k=S+1;k<Zt;k++)for(let B=0;B<$t;B++)for(let R=0;R<ee;R++)(B<=1||B>=$t-2||R<=1)&&u(B,k,R)&&c(B,k,R,Rt.hair);const N=fn(Rt.hair,1.3),X=-5;for(const k of[-1,$t]){const B=Math.max(0,Math.min($t-1,k)),R=Math.min(d(B,6),Zt-4);if(!(R<0)){for(let I=X;I<=R;I++){const V=I<=X+3,Q=I<=X+1;let nt=(I%4+4)%4<2?Rt.hair:N;Q&&(nt=Rt.band);for(let dt=-1;dt<=1;dt++)for(let gt=-1;gt<=1;gt++)(!V||Math.abs(dt)+Math.abs(gt)<2)&&c(k+dt,I,6+gt,nt)}j(k+.5,X-2,6.5,1.9,Rt.band)}}break}}r=null;const K=.18,it=.25;let ut=-1;if(a.size){const N=new Map;let X=0,k=0;for(const I of a){const V=n.get(I);if(!V)continue;k++;const Q=`${V.c[0]},${V.c[1]},${V.c[2]}`,nt=N.get(Q);nt?nt.n++:N.set(Q,{n:1,c:V.c,chroma:(Math.max(...V.c)-Math.min(...V.c))/255}),N.get(Q).chroma>=K&&X++}const B=k>0&&X/k<it;let R=null;for(const I of N.values())!B&&I.chroma<K||(!R||I.n>R.n)&&(R=I);R&&(ut=Bo(R.c)[0])}else o.size&&(ut=Bo(yc)[0]);if(ut>=0){const N=s.hairColor*360-ut;if(Math.abs(N)>.5)for(const X of[...a,...o]){const k=n.get(X);k&&(k.c=oy(k.c,N))}}return{voxels:[...n.values()],anchor:ut}}function my(s){return py(s).voxels}const gy=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],Ga=.42,oo=new kt,Ru=(s,t,e)=>(oo.setRGB(s/255,t/255,e/255,Ue),[oo.r,oo.g,oo.b]);function xy(s,t){const e=new Map;for(const y of s)e.set(`${y.x},${y.y},${y.z}`,y);const n=(y,C,L)=>e.get(`${y},${C},${L}`),i=(y,C)=>y[0]===C[0]&&y[1]===C[1]&&y[2]===C[2],r=(y,C)=>i(y.c,C.c)||!!y.blend&&(!!C.blend||i(y.blend,C.c))||!!C.blend&&i(C.blend,y.c);let o=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,u=-1/0;for(const y of s)y.x<o&&(o=y.x),y.y<a&&(a=y.y),y.z<l&&(l=y.z),y.x>c&&(c=y.x),y.y>h&&(h=y.y),y.z>u&&(u=y.z);const d=t?t[0]:(o+c)/2,f=t?t[1]:(a+h)/2,m=t?t[2]:(l+u)/2,x=[],g=[],p=[],M=[],E=[],v=new Set;for(const y of s){const C=y.x-d,L=y.y-f,D=y.z-m,F=Ru(y.c[0],y.c[1],y.c[2]),H=Ru(y.c[0]*Ga,y.c[1]*Ga,y.c[2]*Ga);for(const{n:O,t1:Z,t2:q}of gy){if(n(y.x+O[0],y.y+O[1],y.z+O[2]))continue;const j=(N,X)=>[C+O[0]/2+Z[0]*N+q[0]*X,L+O[1]/2+Z[1]*N+q[1]*X,D+O[2]/2+Z[2]*N+q[2]*X],G=j(-.5,-.5),K=j(.5,-.5),it=j(.5,.5),ut=j(-.5,.5);for(const N of[G,K,it,G,it,ut])x.push(N[0],N[1],N[2]),g.push(O[0],O[1],O[2]),p.push(F[0],F[1],F[2]);for(const[N,X,k]of[[Z,q,1],[Z,q,-1],[q,Z,1],[q,Z,-1]]){const B=n(y.x+N[0]*k,y.y+N[1]*k,y.z+N[2]*k);if(B&&r(B,y)&&!n(y.x+N[0]*k+O[0],y.y+N[1]*k+O[1],y.z+N[2]*k+O[2]))continue;const R=bt=>[C+O[0]/2+N[0]*k/2+X[0]*bt/2,L+O[1]/2+N[1]*k/2+X[1]*bt/2,D+O[2]/2+N[2]*k/2+X[2]*bt/2],I=R(1),V=R(-1),Q=I.map(bt=>bt.toFixed(2)).join(),nt=V.map(bt=>bt.toFixed(2)).join(),dt=Q<nt?`${Q}|${nt}`:`${nt}|${Q}`;if(v.has(dt))continue;v.add(dt);const gt=.006;M.push(I[0]+O[0]*gt,I[1]+O[1]*gt,I[2]+O[2]*gt,V[0]+O[0]*gt,V[1]+O[1]*gt,V[2]+O[2]*gt),E.push(H[0],H[1],H[2],H[0],H[1],H[2])}}}const S=new Ae;S.setAttribute("position",new Yt(x,3)),S.setAttribute("normal",new Yt(g,3)),S.setAttribute("color",new Yt(p,3));const b=new Ae;b.setAttribute("position",new Yt(M,3)),b.setAttribute("color",new Yt(E,3));const A=[(c-o)/2+.5,(h-a)/2+.5,(u-l)/2+.5],_=Math.max(A[0],A[1],A[2])*1.15;return{faces:S,edges:b,radius:_}}const qf=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],se=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),vy={calm:{...se("lid",.1),smile:.08},pleased:{...se("lid",.2),...se("low",.3),...se("raise",.1),smile:.65},happy:{...se("raise",.35),...se("arch",.25),...se("low",.42),smile:.9,open:.16},joy:{...se("raise",.85),...se("arch",.4),...se("low",.55),smile:1,open:.6,roll:.06},surprised:{...se("raise",1.5),...se("arch",.45),...se("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...se("lid",.2),skew:.42},sad:{...se("inner",.95),...se("raise",-.1),...se("lid",.36),...se("tilt",-.5),smile:-.75,nod:.08},bored:{...se("lid",.5),...se("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...se("lid",.72),...se("tilt",-.25),...se("raise",-.2),...se("inner",.2),smile:-.05,nod:.18},yawn:{...se("lid",1),...se("raise",.75),...se("inner",.3),open:1,round:.55,nod:-.14},asleep:{...se("lid",1.05),...se("raise",-.12),...se("inner",.12),smile:.05,open:.06},excited:{...se("raise",.9),...se("inner",-.1),...se("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...se("raise",.85),...se("arch",.3),...se("lid",.04),roll:.12,smile:.25}},_y={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},Cu=()=>Object.fromEntries(qf.map(s=>[s,s==="pupil"?1:0])),My=s=>new kt().setRGB(s[0]/255,s[1]/255,s[2]/255,Ue);class yy{constructor(t){P(this,"head",new De);P(this,"solid",[]);P(this,"drop");P(this,"roll",0);P(this,"nod",0);P(this,"own",[]);P(this,"brows",[]);P(this,"eyes",[]);P(this,"mouth",[]);P(this,"seam",0);P(this,"lipH",.5);P(this,"browLo",0);P(this,"browHi",0);P(this,"d",Cu());P(this,"mood","calm");P(this,"feeling",null);P(this,"feelFor",0);P(this,"blinkIn",1.5);P(this,"blinkT",-1);P(this,"blinkLen",.13);P(this,"glance",new Bt);P(this,"glanceIn",1);P(this,"micro",new Bt);P(this,"microIn",.5);P(this,"talkT",0);P(this,"syl",0);P(this,"sylLen",.16);P(this,"sylAmp",0);P(this,"sylRound",0);P(this,"pause",0);P(this,"beat",0);P(this,"wasTalking",!1);P(this,"lookX",0);P(this,"lookY",0);const e=my(t);let n=1/0,i=1/0,r=1/0,o=-1/0,a=-1/0,l=-1/0;for(const G of e)n=Math.min(n,G.x),o=Math.max(o,G.x),i=Math.min(i,G.y),a=Math.max(a,G.y),r=Math.min(r,G.z),l=Math.max(l,G.z);const c=(n+o)/2,h=(i+a)/2,u=(r+l)/2;this.drop=(h-(Zt-1)/2)/16;const d=Sc(t),f=8,m=G=>G<f?0:1,x=[!1,!1];for(const G of e)G.part==="eye"&&(x[m(G.x)]=!0);const g=[236,240,246],p=e.map(G=>G.part==="brow"||G.part==="mouth"?{...G,c:d,part:void 0}:G.part==="pupil"&&x[m(G.x)]?{...G,c:g}:G),{faces:M,edges:E}=xy(p,[c,h,u]),v=new Co({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),S=new lf({vertexColors:!0});this.own.push(M,E,v,S);const b=new be(M,v);this.head.add(b,new Ip(E,S)),this.solid.push(b);const A=new wn(1,1,1);this.own.push(A);const _=new Map,y=G=>{const K=G.join();let it=_.get(K);return it||(it=new Co({color:My(G)}),_.set(K,it),this.own.push(it)),it},C=G=>{const K=new be(A,y(G));return this.head.add(K),this.solid.push(K),K},L=G=>G.z-u+.5,D=e.filter(G=>G.part==="brow");for(const G of[0,1]){const K=D.filter(B=>m(B.x)===G);if(!K.length)continue;const it=K.map(B=>B.x),ut=Math.min(...it),N=Math.max(...it),X=(ut+N)/2,k=Math.max(.5,(N-ut)/2);for(const B of K){const R=G===0?(X-B.x)/k:(B.x-X)/k;this.brows.push({m:C(B.c),x:B.x-c,y:B.y-h,z:L(B),xn:R,side:G})}}const F=e.filter(G=>G.part==="eye"||G.part==="pupil"),H=d.map(G=>Math.round(G*.88));let O=-1/0;for(const G of[0,1]){const K=F.filter(Ot=>m(Ot.x)===G);if(!K.length)continue;const it=K.map(Ot=>Ot.x),ut=K.map(Ot=>Ot.y),N=Math.min(...it),X=Math.max(...it),k=Math.min(...ut),B=Math.max(...ut);O=Math.max(O,B);const R=Math.max(...K.map(L)),I=(N+X)/2-c,V=(k+B)/2-h,Q=X-N+1,nt=B-k+1;let dt=null;const gt=Math.max(1,Q-2),bt=Math.max(1,nt-2);if(x[G]){const Ot=K.find(Wt=>Wt.part==="pupil").c;dt=C(Ot),dt.scale.set(gt,bt,.05)}const zt=[];for(let Ot=N;Ot<=X;Ot++){const Wt=Q>1?G===0?(Ot-N)/(Q-1):(X-Ot)/(Q-1):.5;zt.push({x:Ot-c,k:Wt,up:C(H),low:C(H)})}this.eyes.push({side:G,y0:k-h-.5,y1:B-h+.5,z:R,cx:I,cy:V,pupil:dt,pw:gt,ph:bt,reach:(Q-gt)/2,cols:zt})}const Z=e.filter(G=>G.part==="mouth");if(Z.length){const G=[...new Set(Z.map(R=>R.x))].sort((R,I)=>R-I),K=Z.map(R=>R.y),it=Math.min(...K),ut=Math.max(...K),N=ut-it+1;this.seam=N>=2?(it+ut)/2-h:it-h,this.lipH=N>=2?1:.5;const X=(G[0]+G[G.length-1])/2,k=Math.max(.5,(G[G.length-1]-G[0])/2),B=Z[0].c;for(const R of G){const I=Math.max(...Z.filter(V=>V.x===R).map(L));this.mouth.push({x:R-c,z:I,xn:(R-X)/k,top:C(B),bot:C(B),inside:C([46,22,28])})}}const q=this.brows.map(G=>G.y),j=Math.max(...e.filter(G=>G.c[0]===d[0]&&G.c[1]===d[1]&&G.c[2]===d[2]).map(G=>G.y));this.browLo=O===-1/0?-2:O-h+.85-(q.length?Math.min(...q):0),this.browHi=j-h-.8-(q.length?Math.max(...q):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...Cu(),...vy[r]};if(i!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const f=n.toLowerCase();".!?".includes(f)?(this.pause=.22,this.sylAmp=0):",;:".includes(f)?(this.pause=.1,this.sylAmp=.1):f===" "?this.sylAmp=.15:"aeiouy".includes(f)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(f)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,d=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);o.open=Math.max(o.open*.6,d),o.round=Math.max(o.round,this.sylRound*d),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=_y[r]??8;for(const u of qf){const d=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(o[u]-this.d[u])*Math.min(1,t*d)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let l=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;l=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let c=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));c=e.x/u*1.6,h=e.y/u*1.6}r==="thinking"&&(c=.7,h=.6),this.lookX+=(Xe.clamp(c+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(Xe.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(l)}apply(t=0){const e=this.d,n=r=>e[r],i=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=Xe.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+i/2),r.m.scale.set(1.001,1,i)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const l of r.cols){const c=Xe.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(l.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*l.k-1)),u=t>.5?0:Xe.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(l.up,l.x,r.y1+.08,-(c+(c>.01?.08:0)),r.z),this.lid(l.low,l.x,r.y0-.08,u+(u>.01?.08:0),r.z)}if(r.pupil){const l=Xe.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*l,r.ph*l,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,l=Xe.clamp(e.round,0,1),c=Math.max(0,e.open)*(1-.55*o*o)*(1-l*.75*o*o)*2.4,h=1-l*.35*Math.max(0,Math.abs(o)-.5)*2,u=this.seam+a;r.top.position.set(r.x,u+this.lipH/2,r.z+.01+i/2),r.top.scale.set(h,this.lipH,i),r.bot.position.set(r.x,u-c-this.lipH/2,r.z+.01+i/2),r.bot.scale.set(h,this.lipH,i),r.inside.visible=c>.02,r.inside.position.set(r.x,u-c/2,r.z+.005+i/4),r.inside.scale.set(h*.98,Math.max(.001,c),i/2)}}lid(t,e,n,i,r){const o=Math.abs(i);t.visible=o>.01,t.visible&&(t.position.set(e,n+i/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}function Sy(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ae;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Lu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);const m=Lu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Lu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Sn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){const x=h.getComponent(d,m);a.setComponent(d+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const Te=22,Yf=.6,Qe=Math.PI*2,Le=(s,t,e)=>s<t?t:s>e?e:s,Bn=s=>s<0?0:s>1?1:s,Ut=(s,t,e)=>s+(t-s)*e,re=s=>{const t=Bn(s);return t*t*(3-2*t)},wy=s=>{const t=Bn(s);return t*t*t*(t*(t*6-15)+10)},vs=s=>s-Math.floor(s),vn=s=>Math.atan2(Math.sin(s),Math.cos(s)),$f=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),oi=-.06,on=.11,tn=.19;class by{constructor(t){P(this,"xs",[]);P(this,"zs",[]);P(this,"cum",[]);P(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(i-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const r=e[i-1],o=e[i],a=e[i+1],l=Math.hypot(o.x-r.x,o.z-r.z),c=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/l,u=(o.z-r.z)/l,d=(a.x-o.x)/c,f=(a.z-o.z)/c;if(h*d+u*f>.999){n(o.x,o.z);continue}const m=Math.min(.42,l*.5,c*.5),x=o.x-h*m,g=o.z-u*m,p=o.x+d*m,M=o.z+f*m;for(let E=0;E<=8;E++){const v=E/8,S=1-v;n(S*S*x+2*S*v*o.x+v*v*p,S*S*g+2*S*v*o.z+v*v*M)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],r=i>0?Bn((t-this.cum[n])/i):0;return e.x=Ut(this.xs[n],this.xs[n+1],r),e.z=Ut(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(Le(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const ao=.05,lo=.12;class Ey{constructor(t,e){P(this,"L");P(this,"thigh");P(this,"shin");P(this,"footH",.06);P(this,"hipX",.17);P(this,"armLen");P(this,"legless");P(this,"pos",new U);P(this,"yaw",0);P(this,"lean",0);P(this,"roll",0);P(this,"twist",0);P(this,"swayRoll",0);P(this,"squash",0);P(this,"stretch",0);P(this,"feet");P(this,"arms");P(this,"onPuff",null);P(this,"onPrint",null);P(this,"airborne",!1);P(this,"rest","stand");P(this,"breath",0);P(this,"asleep",!1);P(this,"headDrop",0);P(this,"hipDrop",0);P(this,"scratch",null);P(this,"scratchIn",5);P(this,"world");P(this,"base",new U);P(this,"vy",0);P(this,"qv",0);P(this,"qRest",0);P(this,"leanV",0);P(this,"leanRest",0);P(this,"sv",0);P(this,"stretchRest",0);P(this,"speed",0);P(this,"accel",0);P(this,"lastSpeed",0);P(this,"wantYaw",null);P(this,"trip",null);P(this,"pending",null);P(this,"act",null);P(this,"phase",0);P(this,"running",0);P(this,"clockOn",!1);P(this,"gRef",0);P(this,"held",!1);P(this,"wallSide",0);P(this,"sway",0);P(this,"swayV",0);P(this,"shift",0);P(this,"shiftIn",3);P(this,"clock",0);P(this,"tapT",-1);P(this,"seq",null);P(this,"queued",[]);P(this,"restYaw",null);P(this,"anchor",{x:0,z:0,g:0,yaw:0});P(this,"t1",new U);P(this,"t2",new U);P(this,"t3",new U);P(this,"e1",new En);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=o=>({side:o,mode:"ground",sole:new U,yaw:0,pitch:0,from:new U,to:new U,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new U,kneeOut:0,sy:0,ankle:new U,q:new ve,toe:0});this.feet=[i(-1),i(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*Te*e):t==="run"?Math.sqrt(.45*Te*e):Math.min(9,Math.sqrt(1.15*Te*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(Te*e)),i=Le(2*n**.3*e,.35*e,2.6*e),r=Math.max(i,t/this.boundFreq);return Ut(i,r,this.running)}get duty(){return Ut(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n,i="stroll"){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n,stride:i},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const r={x:this.base.x,z:this.base.z},o=this.legless?[{kind:"path",pts:[r,...t]}]:this.split(r,t);this.trip={gait:e,stride:i,legs:o,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=i.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=i.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const r=this.world.groundAt(n,i),o=this.thigh+this.shin,a=Math.cos(t),l=Math.sin(t),c=(u,d)=>Math.abs(this.world.groundAt(n+a*u+l*d,i-l*u+a*d)-r)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!c(-.45,u)||!c(.45,u))return!1;if(!c(-.45,h)||!c(.45,h)||!c(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=o*.95+.35;u+=.3)if(!c(-.3,u)||!c(.3,u))return!1;if(!c(-.7,-.5)||!c(.7,-.5)||!c(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let d=.5;d<=o*.92+.35;d+=.3)if(!c(.25+Math.sin(u)*d,Math.cos(u)*d))return!1;for(const[u,d]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!c(u,d))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const l=this.world.groundAt(a.x,a.z),c=l-o,h=c>this.stepUpMax()?c>this.jumpUpMax()?"climb":"jump":-c>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},d=h==="climb"?c>this.L?0:.12:h==="jump"?.14:.12;i.push({x:r.x+u.x*d,z:r.z+u.z*d}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:l}),i=[{x:a.x,z:a.z}]}else i.push(a);r=a,o=l}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new by(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let r=0;r<=i.total+ao;r+=ao)i.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new U(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(i.x,i.z)),o){const l={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},c={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new U(l.x+c.x*h*.3+i.x*.14,e.hb+.01,l.z+c.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand"?this.stepRest(t):this.asleep?this.breath=vs(this.breath+t/3.6):this.act?this.stepAct(t):e&&e.path?this.legless?this.stepHopper(t,e):this.stepWalk(t,e):this.stepStand(t),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?4.5:e.gait==="run"?4:3,a=r?4.5:e.gait==="run"?5:4.5,l=n.total-e.s;let c=Math.min(i,Math.sqrt(2*a*.7*Math.max(0,l-.03))),h=1/0;this.held=!1;for(const b of this.feet)b.mode==="ground"&&(h=Math.min(h,b.sole.y));if(h<1/0){const b=Math.sin(this.yaw),A=Math.cos(this.yaw),_=this.world.groundAt(this.base.x,this.base.z);for(let y=0;y<=.8;y+=.05){const C=this.world.groundAt(this.base.x+b*y,this.base.z+A*y);if(C>Math.max(h,_)+.2){C<=h+this.stepUpMax()+.05&&(c=Math.min(c,Math.sqrt(2*a*2*Math.max(0,y-.18))),this.held=y<.45);break}}}const u=Math.abs(vn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));c*=Bn((1.6-u)/1.1);const d=Le((c-this.speed)*3,-a*1.6,o);this.accel+=(d-this.accel)*Math.min(1,t*5),this.speed=Math.max(0,this.speed+this.accel*t),l<=.01&&(this.speed=0,this.accel=0);const f=this.gaitSpeed("walk"),m=this.gaitSpeed("bound"),x=Bn((this.speed-f*1.05)/(m*.85-f*1.05));this.running+=(x-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const g=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),p=Ut(4.5,8,this.running)*t;this.yaw+=Le(vn(g-this.yaw),-p,p);const M=f/this.strideAt(f),E=Math.max(M*Ut(.75,1.5,re((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),v=this.duty,S=this.running>.45;if(this.clockOn){this.phase+=E*t;for(let b=0;b<2;b++){const A=this.feet[b],_=vs(this.phase-b*.5);_<v?A.mode==="swing"&&A.clocked&&this.touchDown(A,S?1:.55):(A.mode!=="swing"&&(this.liftOff(A,!0,0),this.feet.every(y=>y.mode!=="ground")&&(this.qv+=1.6*this.running)),A.s=(_-v)/(1-v),A.s<.7&&this.aimSwing(A,e,(1-_)/E,v/2/E)),this.footPitch(A,_,v,S)}}if(this.airborne=this.clockOn&&this.feet.every(b=>b.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,l<=.01){if(this.clockOn){for(const A of this.feet)A.mode!=="swing"||!A.clocked||(A.clocked=!1,A.dur=Math.max(.08,(1-A.s)*((1-v)/E)),A.s=0,A.from.set(A.ankle.x,A.ankle.y-this.footH,A.ankle.z),A.fromYaw=A.yaw,A.apex=Math.max(A.from.y,A.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(A=>A.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,S?"run":"walk",E,v,e.stride)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+i),this.held?.55:0)),l=r.at(a,this.t1),c=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(vn(c-this.yaw))>1.2?this.yaw:c;this.neutral(t,l,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,Ut(.06+.1*this.legW,.12+.2*this.legW,this.running)*(e.stride==="strut"?1.5:1))}neutral(t,e,n,i){const r=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*r,i.z=e.z-Math.sin(n)*r,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),r=Le(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),l=this.world.groundAt(t.x+n*(tn+.01),t.z+i*(tn+.01)),c=this.world.groundAt(t.x+n*r,t.z+i*r),h=this.world.groundAt(t.x+n*(oi-.02),t.z+i*(oi-.02));if(l>a+.05||c>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*Le(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;i=Math.max(i,this.world.groundAt(Ut(t.from.x,t.to.x,o),Ut(t.from.z,t.to.z,o)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const r=e/n;i?t.pitch=r<.5?0:-.85*re((r-.5)/.5):t.pitch=r<.12?.22*(1-re(r/.12)):r<.6?0:-.7*re((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?Ut(-.7,-.8,r/.3):r<.82?Ut(-.8,0,re((r-.3)/.52)):(i?-.05:.22)*re((r-.82)/.18)}}bodyOver(t,e,n,i,r="stroll"){let o=this.shift;const a=r==="strut"?1:0,l=e!=="stand"&&this.clockOn,c=l?Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))):0;let h=0;if(l)o=-(Ut(Ut(.95,1.2,a),.1,this.running)*(this.hipX+.015)*c)*Math.cos(Qe*(this.phase-i/2)),h=Ut(Ut(.09,.15,a),.04,this.running)*c*Math.sin(Qe*(this.phase-i/2));else{const E=this.feet.filter(v=>v.mode==="ground");E.length===1&&(o=E[0].side*this.hipX*.85)}o+=this.wallNudge();const u=e==="stand"?40:150;this.swayV+=(u*(o-this.sway)-2*Math.sqrt(u)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.twist+=(h-this.twist)*Math.min(1,t*12),this.swayRoll+=((l?-.13*this.sway/Math.max(.1,this.hipX+.015):0)-this.swayRoll)*Math.min(1,t*10),this.pos.x=this.base.x+Math.cos(this.yaw)*this.sway,this.pos.z=this.base.z-Math.sin(this.yaw)*this.sway;const d=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(d+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const f=this.reachTop();let m=f.soft-.012*this.legW;if(e!=="stand"){let E=-1/0,v=!1;for(const S of this.feet)S.mode==="ground"&&(E=Math.max(E,S.sole.y));for(const S of this.feet)S.mode==="swing"&&S.to.y>E+.2&&(v=!0);E>-1/0&&!v&&(m=Math.min(m,E+this.footH+(this.thigh+this.shin)*.955+.5))}if(l&&this.running<.45){const E=Ut(.045,.085,a)*this.legW*c*(1-this.running/.45),v=vs(this.phase*2);m-=E*(.5-.5*Math.cos(Qe*(v-i)))}let x=m;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const E=.5/n,v=i/n,S=Math.max(0,E-v),b=Te*S*v/Qe,A=this.speed*v/2,_=(this.thigh+this.shin)*.985,y=this.gRef+this.footH+Math.sqrt(Math.max(.25*_*_,_*_-A*A))+.5,C=vs(this.phase*2),L=v/E;let D;if(C<L)D=y-b*Math.sin(Math.PI*(C/L));else{const F=(C-L)*E;D=y+Te*S/2*F-Te/2*F*F}x=Ut(m,D,re((this.running-.45)/.25))}e==="stand"&&(x-=.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const E of this.feet){if(E.mode!=="ground")continue;const v=this.kneeAt(E,this.t2),S=Math.sin(E.yaw)*.06,b=Math.cos(E.yaw)*.06;(this.world.solidAt(v.x,v.y,v.z)||this.world.solidAt(v.x+S,v.y-.06,v.z+b))&&(x=Math.max(x,f.hard))}const g=e==="run"?Qe*7:Qe*4.2,p=e==="run"?.9:.72;this.vy+=(g*g*(x-this.pos.y)-2*p*g*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>f.hard&&(this.pos.y=f.hard,this.vy>0&&(this.vy=0));const M=d+this.footH+.45*this.legW+.5;this.pos.y<M&&(this.pos.y=M,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=t.pitch,o=r>0?oi:r<0?on:0,a=-o,l=this.footH,c=Math.cos(r),h=Math.sin(r),u=o+a*c-l*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+l*c,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,l=t.ankle.x-r,c=t.ankle.y-o,h=t.ankle.z-a,u=Math.hypot(l,c,h)||1e-6,d=this.thigh,f=this.shin,m=Le(u,Math.abs(d-f)+.001,d+f-1e-4),x=l/u,g=c/u,p=h/u,M=Le((d*d+m*m-f*f)/(2*d*m),-1,1),E=Math.sqrt(1-M*M),v=t.kneeOut,S=n*t.side,b=-i*t.side;let A=Math.sin(t.yaw)*(1-v*1.3)+S*(.12+1.2*v),_=$f(-c,this.legW),y=Math.cos(t.yaw)*(1-v*1.3)+b*(.12+1.2*v);const C=A*x+_*g+y*p;A-=x*C,_-=g*C,y-=p*C;const L=Math.hypot(A,_,y)||1;return e.set(r+d*(M*x+E*A/L),o+d*(M*g+E*_/L),a+d*(M*p+E*y/L))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const l=this.kneeAt(t,this.t2);return this.world.solidAt(l.x,l.y,l.z)||this.world.solidAt(l.x+n,l.y-.07,l.z+i)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,l=Math.cos(this.yaw)*o,c=(g,p)=>this.world.solidAt(g,n,p)||this.world.solidAt(g,i,p),h=g=>c(this.base.x+t*r*g,this.base.z+e*r*g),u=g=>c(this.base.x+t*r*g+a,this.base.z+e*r*g+l),d=h(1),f=h(-1),m=d||u(1)&&!f,x=f||u(-1)&&!d;return this.wallSide=m&&!x?-1:x&&!m?1:0,m&&!x?.22:x&&!m?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(l,c)=>{const h=this.pos.x+e*l.side*this.hipX,u=this.pos.z-n*l.side*this.hipX,d=c.x-h,f=c.z-u,m=t*t-d*d-f*f;return c.y+this.footH+(m>0?Math.sqrt(m):0)+.5};let r=1/0;for(const l of this.feet)l.mode==="ground"&&(r=Math.min(r,i(l,this.plantedAnkle(l,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const l of this.feet){if(l.mode!=="swing")continue;const c=i(l,l.to),h=re((l.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?c+.3*(1-h):Ut(o,c,h))),l.s>.88&&(r=Math.min(r,c+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&(this.yaw+=Le(vn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&this.feet.every(i=>i.mode==="ground")){let i=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.base,this.yaw,this.t2),l=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(vn(this.yaw-o.yaw))*.35;l>r&&(r=l,i=o)}if(i&&r>.09+.03*this.legW){const o=i;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.base,this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*Qe*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,Ut(-n*.97,-n*.55,re(t)),Ut(0,.1*n,re(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,l)=>new U(o,a,l),n=this.thigh+this.shin,i=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,i,0),e(r,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=lo/2,a=tn-.02,l=a+.07,c=Math.asin(Le((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(c+.19),l),u=Math.asin(Le((h-o)/this.thigh,-1,1)),d=this.thigh*Math.cos(u),f=d-this.shin*Math.cos(c),m=this.hipX+.03,x=-.08,g=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(x,0,0))),p=this.fromPivot(g,x,0,[e(-m,a,f),e(m,a,f)],[-Math.PI/2,-Math.PI/2],[null,null],1),M=2*Math.max(.12,this.armLen/2-.05)*.92,E=p.head.y-.08-.04;return M*M-E*E>.35*.35&&(p.hands=[this.palm(p.head,x,0,0,-.12,.92),this.palm(p.head,x,0,1,.12,.92)]),p}case"lie":{const a=Math.PI/2,l=e(-.25,.5+lo,0),c=this.onGround(l,0,a,1,.62,.84,i+.2),h=new ve().setFromEuler(this.e1.set(0,0,a)),d=this.hipOf(l,h,1,1).lerp(c,Math.min(.45,.55/n));return d.y+=lo/2+.03,{head:l,lean:0,roll:a,ankles:[this.onGround(l,0,a,0,.85,.84,i+.04),c],feet:[-.35,-.35],hands:[this.palm(l,0,a,0,-.3,.8,.05),d],hips:1}}}}restOn(t,e){const n=new ve().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,r,o,a){const l=new ve().setFromEuler(this.e1.set(e,0,n)),c=this.hipOf(t,l,i,1),h=o*(this.thigh+this.shin),u=c.y-a,d=Math.sqrt(Math.max(0,h*h-u*u));return new U(c.x+Math.sin(r)*d,Math.max(a,c.y-h),c.z+Math.cos(r)*d)}palm(t,e,n,i,r,o,a=.04){const l=new ve().setFromEuler(this.e1.set(e,0,n)),c=this.arms[i].side,h=t.clone().add(new U(c*(.5+lo/2),-.08,0).applyQuaternion(l)),u=2*Math.max(.12,this.armLen/2-.05)*o,d=h.y-a,f=Math.sqrt(Math.max(0,u*u-d*d));return new U(h.x+Math.sin(r)*f,a,h.z+Math.cos(r)*f)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(vn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new U(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,r,o,a=0){return{head:t.clone().add(new U(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:r,hands:o,hips:a}}kneelDown(){var x,g;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(i),a=.14*e,l=r.y+.03*e,c=.12*t,h=Math.sqrt(2*Te*(l-(r.y-a))),u=c+h/Te+Math.sqrt(2*(l-o.y)/Te),d=u+.12*t,f=[],m=[];for(let p=0;;p=Math.min(d,p+1/40)){if(p<=c){const M=re(p/c);f.push(this.fromPivot(new U(0,r.y-a*M,0),.08*M,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(p<u){const M=p-c,E=M/(u-c),v=re(E),S=new U(0,r.y-a+h*M-.5*Te*M*M,o.z*v),b=[0,1].map(y=>n.ankles[y].clone().lerp(i.ankles[y],v)),A=Ut(0,i.feet[0],v),_=E>.5?[((x=i.hands[0])==null?void 0:x.clone())??null,((g=i.hands[1])==null?void 0:g.clone())??null]:[null,null];f.push(this.fromPivot(S,Ut(.08,i.lean,v),0,b,[A,A],_,v))}else f.push(i);if(m.push(p/d),p>=d)break}return{keys:f,at:m,dur:d,t:0,to:"kneel",thud:u/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:c/d,pushDone:!1}}flopDown(){var E,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),r=this.pivotOf(n),o=(S,b)=>new ve().setFromEuler(this.e1.set(S,0,b)),a=o(e.lean,e.roll),l=o(n.lean,n.roll),c=[0,1].map(S=>e.ankles[S].clone().sub(this.hipOf(e.head,a,S,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(S=>n.ankles[S].clone().sub(this.hipOf(n.head,l,S,1)).applyQuaternion(l.clone().invert())),u=e.lean+.14,d=Math.max(i.y,r.y)+.2,f=.14*t,m=Math.sqrt(2*Te*(d-i.y)),x=f+m/Te+Math.sqrt(2*(d-r.y)/Te),g=x+.2*t,p=[],M=[];for(let S=0;;S=Math.min(g,S+1/40)){if(S<=f){const b=re(S/f);p.push(this.fromPivot(i.clone(),Ut(e.lean,u,b),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((E=e.hands[0])==null?void 0:E.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(S<x){const b=S-f,A=b/(x-f),_=re(A),y=new U(Ut(i.x,r.x,_),i.y+m*b-.5*Te*b*b,Ut(i.z,r.z,_)),C=Ut(u,n.lean,_),L=Ut(0,n.roll,_),D=o(C,L),F=y.clone().add(new U(0,.5,0).applyQuaternion(D)),H=[0,1].map(q=>{const j=Ut(c[q].length(),h[q].length(),_),G=c[q].clone().normalize().lerp(h[q].clone().normalize(),_).normalize().multiplyScalar(j).applyQuaternion(D),K=this.hipOf(F,D,q,1).add(G);return K.y=Math.max(K.y,this.footH+.02),K}),O=[0,1].map(q=>Ut(e.feet[q],n.feet[q],_)),Z=[0,1].map(q=>{const j=e.hands[q],G=n.hands[q];return j&&G?j.clone().lerp(G,_):G&&A>.5?G.clone():null});p.push(this.fromPivot(y,C,L,H,O,Z,1))}else p.push(n);if(M.push(S/g),S>=g)break}return{keys:p,at:M,dur:g,t:0,to:"lie",thud:x/g,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:f/g,pushDone:!1}}springUp(t){var b,A;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),r=this.pose("stand"),o=this.pivotOf(i),a=this.pivotOf(r),l=.12*n,c=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*Te*(c-o.y)),d=h+u/Te+Math.sqrt(2*(c-(a.y-l))/Te),f=d+.16*e,m=t==="kneel"?i.lean+.15:i.lean,x=t==="lie"?i.roll-.35:i.roll,g=new ve().setFromEuler(this.e1.set(i.lean,0,i.roll)),p=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,g,_,i.hips))),M=new U(a.x,a.y-l,a.z),E=[0,1].map(_=>r.ankles[_].clone().sub(M.clone().add(new U(this.feet[_].side*this.hipX,0,0)))),v=[],S=[];for(let _=0;;_=Math.min(f,_+1/40)){if(_<=h){const y=re(_/h);v.push(this.fromPivot(o.clone(),Ut(i.lean,m,y),Ut(i.roll,x,y),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((b=i.hands[0])==null?void 0:b.clone())??null,((A=i.hands[1])==null?void 0:A.clone())??null],i.hips))}else if(_<d){const y=_-h,C=y/(d-h),L=new U(Ut(o.x,a.x,re(C)),o.y+u*y-.5*Te*y*y,Ut(o.z,a.z,re(C))),D=Ut(m,0,re(C)),F=Ut(x,0,re(Math.min(1,C*1.4))),H=new ve().setFromEuler(this.e1.set(D,0,F)),O=L.clone().add(new U(0,.5,0).applyQuaternion(H)),Z=re(Math.min(1,C*1.3)),q=Ut(i.hips,0,Z),j=[0,1].map(ut=>{const N=Ut(p[ut].length(),E[ut].length(),C)-.08*n*Math.sin(Math.PI*C),X=p[ut].clone().normalize().lerp(E[ut].clone().normalize(),Z).normalize(),k=this.hipOf(O,H,ut,q).addScaledVector(X,N);return k.y=Math.max(k.y,this.footH+.02),k}),G=[0,1].map(ut=>Ut(i.feet[ut],0,re(C))),K=O.y-.08<this.armLen*.92,it=[0,1].map(ut=>K&&i.hands[ut]&&i.hands[ut].y<.15?i.hands[ut].clone():null);v.push(this.fromPivot(L,D,F,j,G,it,q))}else{const y=re((_-d)/(f-d));v.push(this.fromPivot(new U(a.x,Ut(a.y-l,a.y,y),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(S.push(_/f),_>=f)break}return{keys:v,at:S,dur:f,t:0,to:"stand",thud:d/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/f,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=Bn(e.t/e.dur),l=e.linear?a:re(a);let c=0;for(;c<e.at.length-2&&l>e.at[c+1];)c++;const h=Bn((l-e.at[c])/(e.at[c+1]-e.at[c]));if(n=this.mix(e.keys[c],e.keys[c+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=vs(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(Qe*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*r:0,i&&this.rest==="lie"&&(n.head.y+=.012*r),i&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,r=e.dur-n-i;e.w=e.t<n?re(e.t/n):e.t>e.dur-i?re((e.dur-e.t)/i):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(Qe*(e.kind==="chin"?4.5:5.5)*o)*re(o/.15)*re((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(g,p)=>g&&p?g.clone().lerp(p,n):n<.5?g?g.clone():null:p?p.clone():null,r=Ut(t.lean,e.lean,n),o=Ut(t.roll,e.roll,n),a=(g,p)=>new ve().setFromEuler(this.e1.set(g,0,p)),l=a(t.lean,t.roll),c=a(e.lean,e.roll),h=a(r,o),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(r,o));const d=Ut(t.hips,e.hips,n),f=[0,1].map(g=>{const p=t.ankles[g].clone().sub(this.hipOf(t.head,l,g,t.hips)),M=e.ankles[g].clone().sub(this.hipOf(e.head,c,g,e.hips)),E=Ut(p.length(),M.length(),n),v=Ut(t.ankles[g].y,e.ankles[g].y,n),S=this.hipOf(u,h,g,d),b=Ut(p.x,M.x,n),A=Ut(p.z,M.z,n),_=Math.hypot(b,A),y=S.y-v,C=Math.sqrt(Math.max(0,E*E-y*y)),L=new U(S.x,Math.max(v,S.y-E),S.z);return _>1e-4&&(L.x+=b/_*C,L.z+=A/_*C),L.y=Math.max(L.y,this.footH+.02),L}),m=g=>{const p=t.hands[g],M=e.hands[g];if(!p||!M)return i(p,M);const E=Math.atan2(p.x-t.head.x,p.z-t.head.z),v=Math.atan2(M.x-e.head.x,M.z-e.head.z),S=E+vn(v-E)*n,b=Ut(Math.hypot(p.x-t.head.x,p.z-t.head.z),Math.hypot(M.x-e.head.x,M.z-e.head.z),n);return new U(u.x+Math.sin(S)*b,Ut(p.y,M.y,n),u.z+Math.cos(S)*b)},x=[m(0),m(1)];return x.forEach((g,p)=>{g&&(this.outsideBody(g,u,h,this.arms[p].side),g.y=Math.max(g.y,.03))}),{head:u,lean:r,roll:o,ankles:f,feet:[Ut(t.feet[0],e.feet[0],n),Ut(t.feet[1],e.feet[1],n)],hands:x,hips:d}}outsideBody(t,e,n,i){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,l=-1,c=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const d=o-u*r.getComponent(h)-(h===0&&u===i?.25:0);d<a&&(a=d,l=h,c=u)}l<0||(r.setComponent(l,c*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const r=this.feet[n].side;return t.clone().add(new U(r*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(a,l)=>l.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,l)=>{a.mode="free",r(t.ankles[l],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new ve().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new ve().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[l])),a.toe=t.feet[l]<-.9?-1.1*re((-t.feet[l]-.9)/.5):t.feet[l]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,l)=>{const c=t.hands[l];c&&(a.reach=r(c,new U),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive,t.stride)}}envAt(t,e,n=.25,i=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/ao));a<=Math.min(r.length-1,Math.ceil((e+i)/ao));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var c;const n=e.path,i=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=Le(Math.min(i,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=Le(vn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=vs(this.phase),l=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,l+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(c=e.onArrive)==null||c.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,i,new U);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*Qe*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=re(n/.15)*(1-re((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+wy((n-.12)/.74)*Qe,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*Bn(n/.45)):0,r=n>.4?Math.sin(Math.PI*Bn((n-.4)/.6)):0;this.qRest=.08*i-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=vn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive,n.stride)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=re(e.t/i);this.vy=0,this.pos.y=Ut(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=Le(vn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=re(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=Ut(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),l=Math.sqrt(2*a/Te),c=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/Te);this.vy=Te*l,e.air=l+c,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=Te*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=Le(vn(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*Bn(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*Ut(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=Le(this.vy*.022,-.14,.18);const l=this.world.groundAt(e.to.x,e.to.z),c=this.standY(l);if(e.t>=e.air||this.vy<0&&this.pos.y<=c&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,c,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,d)=>{var f;u.mode="ground",u.sole.copy(e.feet[d]).setY(this.world.groundAt(e.feet[d].x,e.feet[d].z)),u.yaw=e.yawTo,(f=this.onPrint)==null||f.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,l,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const r=new U((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new U(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=Qe*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=Le(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const l=o?Ut(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,c=Qe*2.4,h=.5;if(this.leanV+=(c*c*(l+this.leanRest-this.lean)-2*h*c*this.leanV-(o?3.5*Le(a,-12,12):0))*t,this.lean=Le(this.lean+this.leanV*t,-.6,.7),this.roll=Le(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const f=this.running,m=Ut(.3,1,f)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const x of this.arms)x.tp=(x.side===-1?1:-1)*m*Math.cos(Qe*(this.phase-.04)),x.to=x.side===this.wallSide?.03:Ut(.07,.2,f),x.te=Ut(.24,1.55,f)+Math.max(0,-x.tp)*.35}else if(!this.act)for(const f of this.arms)f.tp=.02,f.to=.07,f.te=.16;const u=Qe*2.3,d=.42;for(const f of this.arms)f.vp+=(u*u*(f.tp-f.pitch)-2*d*u*f.vp)*t,f.vo+=(u*u*(f.to-f.out)-2*d*u*f.vo)*t,f.ve+=(u*u*(f.te-f.elbow)-2*d*u*f.ve)*t,f.pitch+=f.vp*t,f.out+=f.vo*t,f.elbow=Math.max(0,f.elbow+f.ve*t),f.reach||(f.reachW=Math.max(0,f.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const r=i.s,o=re(r),a=Ut(i.from.x,i.to.x,o),l=Ut(i.from.z,i.to.z,o),c=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=Ut(i.from.y,i.to.y,re((r-.15)/.75))+c*Math.pow(Math.sin(Math.PI*r),1.3),u=i.to.x-i.from.x,d=i.to.z-i.from.z,f=Math.hypot(u,d)||1,m=u/f,x=d/f,g=Math.min(tn+.08+.35*(1-r),(1-o)*f+tn+.04);let p=-1/0;for(let A=0;A<=4;A++){const _=oi-.04+(g-oi+.04)*(A/4);p=Math.max(p,this.world.groundAt(a+m*_,l+x*_))}const M=p+.07*(1-re((r-.82)/.18)),E=Math.max(h,r>.97?i.to.y:M);i.sy=E>i.sy?E:i.sy+(E-i.sy)*Math.min(1,t*30),r<.02&&(i.sy=Math.max(E,i.from.y)),i.ankle.set(a,i.sy+this.footH,l),i.yaw=i.fromYaw+vn(i.toYaw-i.fromYaw)*o,this.kneeClear(i,t);const v=Math.sin(i.yaw),S=Math.cos(i.yaw),b=i.ankle.y;for(let A=0;A<8;A++){const _=i.ankle.y-this.footH*.5,y=this.kneeAt(i,this.t2),C=y.x+v*.07,L=y.z+S*.07,D=(this.world.solidAt(y.x,y.y,y.z)||this.world.solidAt(C,y.y-.07,L))&&this.world.groundAt(C,L)<y.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*tn,_,i.ankle.z+S*tn)&&!D||i.ankle.y-b>.45)break;i.ankle.y+=.06}i.toe=Ut(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*r),re(r/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let r=0;r<2;r++){const o=this.kneeAt(i,this.t3),a=(o.x-i.ankle.x)*Math.sin(i.yaw)+(o.z-i.ankle.z)*Math.cos(i.yaw),l=Math.atan2(a,o.y-i.ankle.y),c=Yf-.05-l;if(i.pitch<=c)break;i.pitch=c,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const r=i.side*(this.hipX+i.rel.x),o=i.rel.z;i.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+i.rel.y,this.pos.z-n*r+e*o),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const d=i.ankle.x+a*c*tn,f=i.ankle.y-this.footH+h*tn,m=i.ankle.z+l*c*tn;if(!this.world.solidAt(d,f,m)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=l*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const r=i.pitch,o=Math.cos(r),a=Math.sin(r),l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=i.ankle.x+l*o*on,u=i.ankle.z+c*o*on,d=i.ankle.y-this.footH*o+on*a,f=(this.world.groundAt(h+l*(tn-on),u+c*(tn-on))+.005-d)/(tn-on);f>-1&&(i.toe=Math.min(i.toe,r-Math.asin(Le(f,-1,1))))}}}}const Va=5,Ty=4935768,Pu=.3,Ay=14;function Ry(){const s=new Un(.11,on-oi-.01).rotateX(-Math.PI/2).translate(0,0,(on+oi)/2-.005),t=new Un(.11,tn-on-.02).rotateX(-Math.PI/2).translate(0,0,(tn+on)/2+.01),e=Sy([s,t]);return s.dispose(),t.dispose(),e}const Iu=72,Cy=2.6;let tr=null;function Ly(){if(tr)return tr;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),tr=new br(s),tr.colorSpace=Ue,tr}class Py{constructor(){P(this,"group",new De);P(this,"puffs",[]);P(this,"dust");P(this,"zeds",[]);P(this,"prints",[]);P(this,"printGeo",Ry());P(this,"own",[]);P(this,"m",new Jt);P(this,"q",new ve);P(this,"s",new U);const t=new wn(1,1,1),e=new Co({color:15987958});this.dust=new xo(t,e,Iu),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new Xn({color:Ty,transparent:!0,opacity:Pu,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new be(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>Va+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=Iu&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new En(Math.random(),Math.random(),Math.random())})}z(t){const e=new of({map:Ly(),transparent:!0,depthWrite:!1,opacity:0}),n=new Ap(e);this.group.add(n),this.zeds.push({s:n,age:0,life:Cy,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const r=i.age/i.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(o,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,r)=>{i.age+=t;const o=n-1-r,a=o<Va?1:Math.max(0,1-(o-Va+1)/3),l=1-Math.min(1,Math.max(0,(i.age-Ay)/3)),c=Pu*a*l;return i.mat.opacity+=(c-i.mat.opacity)*Math.min(1,t*5),c<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const r=i.age/i.life;return r>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*r+.06*Math.sin(r*7)),i.y0+.75*r,i.z0),i.s.scale.setScalar(.14+.2*r),i.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const Ti=.12,er={thick:.07,long:.15,wide:.135},Du=2.6,Iy=2.9,nr=2.5,co={back:-.55,fwd:2.1,inward:-.22,out:1},_s={up:-Yf,down:.95,side:.3,twist:.35},Wa={flex:1.55,side:.45,turn:1.6},Re=(s,t,e)=>s<t?t:s>e?e:s,Xa=(s,t,e)=>s+(t-s)*e;function ho(s,t,e,n){const i=new wn(Ti,s-t,Ti).translate(0,(s+t)/2,0);return n.push(i),new be(i,e)}function qa(s,t,e){return e.push(s),new be(s,t)}const dn=new U,rn=new U,Gn=new U,Ho=new Jt;function Go(s,t,e){return rn.copy(s).negate().normalize(),Gn.copy(t).addScaledVector(rn,-t.dot(rn)),Gn.lengthSq()<1e-8&&Gn.set(1,0,0).cross(rn),Gn.normalize(),dn.crossVectors(rn,Gn),Ho.makeBasis(dn,rn,Gn),e.setFromRotationMatrix(Ho)}const Ts=new U,kn=new U,Ri=new U,Mo=new U,Wl=new U,Uu=new ve;function zi(s,t,e,n,i,r,o,a=Math.PI){Ts.subVectors(t,s);const l=Ts.length(),c=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=Re(l,Math.max(Math.abs(e-n)+.001,c),e+n-1e-4);l<1e-6?kn.set(0,-1,0):kn.copy(Ts).divideScalar(l);const u=Re((e*e+h*h-n*n)/(2*e*h),-1,1),d=Math.sqrt(1-u*u);Ri.copy(i).addScaledVector(kn,-i.dot(kn)),Ri.lengthSq()<1e-8&&Ri.set(0,0,1).addScaledVector(kn,-kn.z),Ri.normalize(),Mo.copy(s).addScaledVector(kn,e*u).addScaledVector(Ri,e*d),Wl.copy(s).addScaledVector(kn,h),Go(Ts.subVectors(Mo,s),i,r),Go(Wl.sub(Mo),i,Uu),o.copy(r).invert().multiply(Uu)}const bi=new En,Dy=new U;function Nu(s,t,e,n,i="XYZ"){bi.setFromQuaternion(s,i);const r=Re(bi.x,t[0],t[1]),o=Re(bi.y,e[0],e[1]),a=Re(bi.z,n[0],n[1]);(r!==bi.x||o!==bi.y||a!==bi.z)&&s.setFromEuler(bi.set(r,o,a,i))}class Uy{constructor(t,e,n){P(this,"root",new De);P(this,"fx",new Py);P(this,"motion");P(this,"placed",!1);P(this,"face");P(this,"world");P(this,"pelvis",new De);P(this,"turn",new De);P(this,"squash",new De);P(this,"legs",[]);P(this,"arms",[]);P(this,"solid",[]);P(this,"own",[]);P(this,"look",null);P(this,"targets",[null,null]);P(this,"talkCh",null);P(this,"clock",0);P(this,"lastBreath",0);P(this,"showing",null);P(this,"yawLook",0);P(this,"pitchLook",0);P(this,"a2");P(this,"v1",new U);P(this,"v2",new U);P(this,"v3",new U);P(this,"v4",new U);P(this,"v5",new U);P(this,"qa",new ve);P(this,"qb",new ve);P(this,"qc",new ve);P(this,"qd",new ve);P(this,"qm",new Jt);P(this,"headCap",0);P(this,"scratchSeen",null);P(this,"sc1",new U);P(this,"sc2",new U);P(this,"sc3",new U);P(this,"qf",new ve);P(this,"pts",[0,1,2,3,4].map(()=>new U));P(this,"kg",[0,1,2,3,4,5].map(()=>new U));this.world=n,this.motion=new Ey(e,n),this.motion.onPuff=(l,c,h)=>this.fx.puff(l,c,h),this.motion.onPrint=(l,c)=>this.fx.print(l,c),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new yy(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,r,o]=Sc(t),a=new kt().setRGB(i/255,r/255,o/255,Ue);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new Co({color:t});this.own.push(n);const i=Ti/2;if(!e.legless)for(const o of[-1,1]){const a=new De,l=new De,c=new De,h=new De;a.position.set(o*e.hipX,0,0);const u=ho(0,-e.thigh,n,this.own);a.add(u),l.position.y=-e.thigh;const d=ho(i,-e.shin-i,n,this.own);l.add(d),c.position.y=-e.shin;const f=qa(new wn(Ti,e.footH,on-oi).translate(0,-e.footH/2,(on+oi)/2),n,this.own);h.position.set(0,-e.footH,on);const m=qa(new wn(Ti,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(m),c.add(f,h),l.add(c),a.add(l),this.pelvis.add(a),this.legs.push({hip:a,knee:l,ankle:c,toes:h,side:o}),this.solid.push(u,d,f,m)}const r=this.a2;for(const o of[-1,1]){const a=new De,l=new De,c=new De,h=ho(i,-r,n,this.own);a.add(h),l.position.y=-r;const u=ho(i,-r-i,n,this.own);l.add(u),c.position.y=-r;const d=qa(new wn(er.thick,er.long,er.wide).translate(0,-.15/2-.02,0),n,this.own);c.add(d),l.add(c),a.add(l),this.turn.add(a);const f=()=>new ve;this.arms.push({shoulder:a,elbow:l,wrist:c,side:o,aimW:0,fk:[f(),f()],ik:[f(),f()],push:0,pushTo:new U,pushE:0,pushETo:new U,pushN:new U,flatW:0,palm:new U,palmDir:new U(0,0,1)}),this.solid.push(h,u,d)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new U){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new U){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n,i="stroll"){this.motion.travel(t,e,n,i)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new U).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,e.twist,e.roll+e.swayRoll);for(const f of this.legs)f.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(Re(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(Re(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(f=>f.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=Xa(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=Xa(this.face.roll,Re(this.face.roll,-.03,.03),this.headCap),a=1-Re(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const l=1+e.squash,c=1+e.stretch,h=l/Math.sqrt(c),u=c/Math.sqrt(l),d=1/(Math.sqrt(l)*Math.sqrt(c));this.squash.scale.set(d,h,u);for(const f of this.arms)f.shoulder.position.set(f.side*(.5*d+Ti/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-r&&i.y<1+e-r&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const r=t.parent,o=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let l=-1,c=0;const h=e(),u=this.v3;for(let x=0;x<h.length;x++){const g=this.squash.worldToLocal(this.v4.copy(h[x]));if(!(Math.abs(g.x)<.5+n&&g.y>.02-o&&g.y<1+n-o&&Math.abs(g.z)<.5+n))continue;const p=[[.5+n-g.x,1,0,0],[g.x+.5+n,-1,0,0],[.5+n-g.z,0,0,1],[g.z+.5+n,0,0,-1],[1+n-o-g.y,0,1,0]];i&&p.push([g.y+o,0,-1,0]);let M=null;for(const E of p)!i&&this.v2.set(E[1],E[2],E[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!M||E[0]<M[0])&&(M=E);M&&M[0]>c&&(c=M[0],l=x,u.set(M[1],M[2],M[3]))}if(l<0)return;u.transformDirection(this.squash.matrixWorld);const d=r.worldToLocal(this.v1.copy(h[l])),f=this.v2.copy(u).transformDirection(this.qm.copy(r.matrixWorld).invert()),m=Ri.subVectors(d,t.position).cross(f);if(m.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(m.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),l=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),c=Math.atan2(l.x,l.z),h=i.side>0?Re(c,-.2,.7):Re(c,-.7,.2);if(h!==c){const b=Math.hypot(l.x,l.z);l.x=Math.sin(h)*b,l.z=Math.cos(h)*b}let u=o.q;if(o.mode!=="free"&&Math.abs(c-h)>_s.twist*.85){const b=c-h-Math.sign(c-h)*_s.twist*.85;u=this.qf.setFromAxisAngle(Gn.set(0,1,0),-b).multiply(o.q)}const d=o.kneeOut,f=this.v2.copy(l).multiplyScalar(1-d*1.3).add(dn.set(i.side*(.12+1.2*d),$f(-a.y,t.L),0)),m=Dy.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const b=Re(Math.abs(t.roll)/(Math.PI/2),0,1);f.set(0,0,Xa(.6,1,b)).addScaledVector(m,1-.85*b);const A=Re(-a.z/.25,0,1);f.z+=1.6*A,f.addScaledVector(m,-.9*A)}const x=o.mode==="free"?Iy:Du;zi(i.hip.position,a,t.thigh,t.shin,f,i.hip.quaternion,i.knee.quaternion,x),o.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,m.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,m.add(dn.set(i.side*.3,0,0)),x);const g=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),p=Math.atan2(g.z,-g.y),M=Math.asin(Re(g.x*i.side,-1,1)),E=Re(p,co.back,co.fwd),v=Re(M,o.mode==="free"?-.45:co.inward,co.out);if(E!==p||v!==M){const b=rn.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(E),Math.cos(v)*Math.sin(E));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(g,b))}o.mode==="free"&&this.kneeOverGround(i,a,x),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const S=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(S.invert()).multiply(u),Nu(i.ankle.quaternion,[_s.up,_s.down],[-.35,_s.twist],[-.3,_s.side]),i.toes.rotation.set(Re(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,r=Du){const o=this.motion,a=t.hip.position,l=this.v5.copy(e),c=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(c.y<=n)return;const h=this.v3.subVectors(l,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const d=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(c,a))),f=this.v1.subVectors(c,d),m=f.length();if(m<1e-4)return;f.divideScalar(m);const x=this.v4.crossVectors(h,f).normalize();x.dot(i)<0&&x.negate();let g=Math.PI/2;for(let M=1;M<=18;M++){const E=M/18*(Math.PI/2);if(d.y+m*(Math.cos(E)*f.y+Math.sin(E)*x.y)<=n){g=E;break}}const p=f.multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g));zi(a,l,o.thigh,o.shin,p,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const i=this.motion,[r,o,a,l,c,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+Ti/2)return;const u=t.hip.position,d=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);c.subVectors(e,u);const f=c.length();if(f<1e-4)return;c.divideScalar(f),o.copy(u).addScaledVector(c,c.dot(a.subVectors(d,u))),a.subVectors(d,o);const m=a.length();if(m<1e-4)return;a.divideScalar(m),l.crossVectors(c,a).normalize(),l.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&l.negate();let x=-1;for(let p=1;p<=24&&x<0;p++){const M=p/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,m*Math.cos(M)).addScaledVector(l,m*Math.sin(M))),h.y>=this.world.groundAt(h.x,h.z)+Ti/2&&(x=M)}if(x<0)return;const g=h.copy(a).multiplyScalar(Math.cos(x)).addScaledVector(l,Math.sin(x));zi(u,e,i.thigh,i.shin,g,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,r=n+i,o=f=>this.turn.worldToLocal(this.v1.copy(f)).x<0?0:1,a=[null,null],[l,c]=this.targets;if(l&&(a[o(l)]=l),c){const f=o(c);a[f]?Math.abs(this.turn.worldToLocal(this.v1.copy(c)).x)<.8?a[1-f]=c:Math.floor(this.clock/2.6)%2===1&&(a[f]=c):a[f]=c}this.showing=l&&a.includes(l)?a.includes(c)&&Math.floor(this.clock/2.6)%2===1?c:l:c;const h=e.idle,d=e.feet.some(f=>f.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((f,m)=>{const x=e.arms[m],g=this.v2.set(f.side*.5,-.35,-1);if(d){g.set(0,1,0).applyQuaternion(d);const y=this.v3.set(0,.5,0).sub(f.shoulder.position).normalize();g.dot(y)>.3&&g.set(0,1,0),g.multiplyScalar(.45).add(rn.set(0,0,-1))}f.fk[0].setFromEuler(new En(x.pitch,0,f.side*Math.max(.04,x.out))),f.fk[1].setFromAxisAngle(dn.set(1,0,0),-Re(x.elbow,0,nr));let p=0,M=!1;const E=x.reach??(h?a[m]:null);if(E){const y=f.shoulder.position;if(x.reach&&x.flat){M=!0;const C=f.shoulder.getWorldPosition(this.v3),L=f.elbow.getWorldPosition(Mo);f.palm.copy(E);const D=Ts.set(E.x-C.x,0,E.z-C.z);D.lengthSq()>1e-6&&D.normalize();const F=kn.set(E.x-L.x,0,E.z-L.z).addScaledVector(D,.25);F.lengthSq()<1e-4&&F.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),F.normalize(),f.palmDir.lerp(F,f.flatW<.05?1:Math.min(1,t*10)).normalize();const H=this.v1.copy(E).add(rn.set(0,er.thick/2+.01,0)).addScaledVector(f.palmDir,-.095),O=this.turn.worldToLocal(H);zi(y,O,n,i,g,f.ik[0],f.ik[1],nr)}else{const C=this.turn.worldToLocal(this.v1.copy(E));if(x.reach||E===c){if(E===c){const L=f.shoulder.getWorldPosition(Wl),D=Ts.set(Re(L.x,c.x-.5,c.x+.5),Re(L.y,c.y-.5,c.y+.5),Re(L.z,c.z-.5,c.z+.5));D.addScaledVector(kn.subVectors(L,D).normalize(),.06),this.turn.worldToLocal(C.copy(D))}C.distanceTo(y)<=r*.98||x.reach?zi(y,C,n,i,g,f.ik[0],f.ik[1],nr):this.pointAlong(f,C)}else this.pointAlong(f,C)}p=x.reach?x.reachW:1}const v=e.scratch;if(v&&v.side===m&&v.w>0&&x.reach){const y=f.shoulder.position,C=e.headDrop,L=this.turn.worldToLocal(this.sc1.copy(x.reach).add(rn.set(0,er.thick/2+.01,0)).addScaledVector(f.palmDir,-.095)),D=v.kind==="chin"?this.sc2.set(f.side*(.14+.03*v.wiggle),-C-.15,.62):this.sc2.set(f.side*.4,1.14-C,-.04+.05*v.wiggle);let F=L;if(v.kind==="chin")F=L.lerp(D,v.w);else{const H=this.sc3.set(f.side*.9,1.25-C,.1),O=v.w,Z=1-O;F=L.multiplyScalar(Z*Z).addScaledVector(H,2*O*Z).addScaledVector(D,O*O)}g.lerp(v.kind==="chin"?dn.set(f.side,-.3,.1):dn.set(f.side,.35,-.15),v.w),zi(y,F,n,i,g,f.ik[0],f.ik[1],nr),M=v.w<.05,p=1}f.aimW+=((E?p:0)-f.aimW)*Math.min(1,t*(x.reach?30:7)),f.flatW+=((M?1:0)-f.flatW)*Math.min(1,t*12),f.shoulder.quaternion.slerpQuaternions(f.fk[0],f.ik[0],f.aimW),f.elbow.quaternion.slerpQuaternions(f.fk[1],f.ik[1],f.aimW),f.shoulder.updateMatrixWorld(!0);const S=this.pushOut(f.elbow.getWorldPosition(this.v1),.09,f.shoulder.getWorldPosition(this.v3));if(f.pushE=S?1:0,S&&f.pushETo.copy(S),f.pushE>0){const y=this.turn.worldToLocal(this.v1.copy(f.pushETo)).sub(f.shoulder.position);Go(y,g,this.qa),f.shoulder.quaternion.slerp(this.qa,f.pushE)}f.shoulder.updateMatrixWorld(!0);const b=f.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),A=M?null:this.pushOut(b,.13,f.shoulder.getWorldPosition(this.v3));if(A?(f.pushTo.copy(A),f.pushN.subVectors(A,b).normalize(),f.push=1):f.push=0,f.push>0){const y=this.turn.worldToLocal(this.v3.copy(f.pushTo).add(f.pushN)).sub(this.turn.worldToLocal(this.v1.copy(f.pushTo)));y.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const C=this.turn.worldToLocal(this.v1.copy(f.pushTo));zi(f.shoulder.position,C,n,i,y,this.qa,this.qb,nr),f.shoulder.quaternion.slerp(this.qa,f.push),f.elbow.quaternion.slerp(this.qb,f.push)}f.aimW>.5&&this.elbowClear(f),this.outOfBody(f.shoulder,()=>this.armPoints(f,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(dn.set(1,0,0),Re(-.1-.05*x.vp,-.35,.35));if(f.flatW>.01){f.elbow.updateMatrixWorld(!0);const y=f.elbow.getWorldQuaternion(this.qb);dn.set(0,this.v3.set(1,0,0).applyQuaternion(y).y<0?-1:1,0),rn.copy(f.palmDir).negate(),Gn.crossVectors(dn,rn).normalize(),rn.crossVectors(Gn,dn).normalize(),Ho.makeBasis(dn,rn,Gn);const C=this.qc.setFromRotationMatrix(Ho),L=y.invert().multiply(C);Nu(L,[-.45,Wa.side],[-1.6,Wa.turn],[-1.55,Wa.flex],"YZX"),f.wrist.quaternion.slerpQuaternions(_,L,f.flatW)}else f.wrist.quaternion.copy(f.aimW>.5?f.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(l=>this.inHead(l,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(i,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=Ri.crossVectors(r,o).x*t.side>=0?1:-1;for(let l=0;l<12;l++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const c=t.elbow.getWorldPosition(this.v3);if(c.y<this.world.groundAt(c.x,c.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=Ri.subVectors(e,t.shoulder.position);Go(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(dn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,l=1/0;for(const[c,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+c,r+h,o+u))continue;const d=c?(i+c*.5-t.x)*c:h?r+.5-t.y:(o+u*.5-t.z)*u,f=n?c*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,m=d-Math.max(0,f)*.8;m<l&&(l=m,a=new U(t.x+c*(d+e),t.y+h*(d+e),t.z+u*(d+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,l)=>a.ankle.getWorldPosition(new U).distanceTo(t.feet[l].ankle));let n=0,i=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new U);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),i+=o.filter(l=>this.inHead(l,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),i+=o.filter(l=>this.inHead(l,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const Ny="Welcome to Robyn Miller's Exhibit of Time Machines! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",Fy="Welcome to Robyn Miller's Exhibit of Time Machines! I'm your host. Getting around is easy—drag the floor to move, and drag the walls to look around.",zy="Click anywhere to look around.",Oy="Click anywhere to carry on.",ky="That's it! In you go. I'll wait out here.",By=["Welcome back to the present!","You're back! What year was it in there?","Back already? Time flies. Especially in there.","Oh good, you're back. I kept the present warm for you."],Hy="You are currently one of {x} people in the gallery.",Gy="Things are quiet. You are the only person in the gallery.",Vy=["You may think that I'm not an appropriate host for an art gallery? Hm. Well maybe you're not an appropriate guest for our gallery!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Take your time. The paintings aren't going anywhere. Neither am I.","Robyn painted every one of these. I just stand near them looking important.","Click on a painting to see it up close. I recommend it. I've seen them all up close. Very close.","Some people walk through a gallery in five minutes. Some take five hours. I've timed them.","Do you see the faces? I see faces everywhere. Even in the floor.","Between you and me, that one over there looked at me funny this morning.","Shh. The paintings are thinking.","I polished this floor myself. With my feet.","Every gallery needs a host. This one got me. Lucky gallery.","Art is long and I am short.","Stand back a little. Some paintings like their space.","I'm not allowed to touch the paintings. I'm barely allowed to touch the walls.","That one's my favourite. They're all my favourite.","Is it just me, or did that painting blink?","The lights in here are very flattering. To the paintings. And to me.","I've been told I have an excellent eye for art. I have two, actually.","Feel free to linger. Lingering is encouraged here.","If anyone asks, I'm security.","You can tell a lot from a face. Mine says 'party'.","There's no gift shop. I asked.","If you get lost, follow the walls. That's what I do.","Look closer. Then look from farther away. Then closer again. That's the trick.","Quiet in here, isn't it? I like it that way. Mostly.","Paintings get lonely if nobody looks at them. I made that up. But still.","Mind the doorways. They're bigger than they look. Or I'm smaller.","All the walls in here are white. I campaigned for polka dots. I lost.","Hm. You have good taste. I can tell by the way you stand.","This is the part where I say something profound. ... I'll get back to you.","I've counted the paintings twice. I got two different answers.","If you need me, I'll be right behind you. Always. Right behind you.","Sometimes I sit and stare at one for an hour. It doesn't mind.","Do you think they can see us? I think they can see us.","Not to brag, but I've been in every room of this gallery. Several times. Today.","Art is best enjoyed slowly. Like soup.","I'm told I add a certain something to the place. Nobody has said what.","Go ahead and stare. That's what they're for.","What do you think that one is about? I have a theory, but it's mostly about sandwiches.","I used to be just a block. Now I'm a block with legs. That's progress.","Every time someone visits, I feel taller. I'm not, though.","Close your eyes. Now open them. See? Still art.","Please don't lick the paintings. I'm not saying you would. I'm just saying.","I like this room. I like the other rooms too. I'm very agreeable.","That's a nice one. I'd hang it in my house, if I had a house. Or walls.","Some galleries have audio guides. You have me. You're welcome.","Ah, I was hoping you'd come this way.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","Do you paint? You have a painter's way of squinting.","If these walls could talk... well, they'd probably just say 'white'.","Look at that brushwork! I think. I'm not entirely sure what brushwork is.","Did you see the little card next to each one? I read them all. Twice.","No hurry. I'm on gallery time.","The floor reflects the paintings. So technically you're seeing everything twice. You're welcome again.","I can't decide if that one is smiling or frowning. Maybe both. Like me before breakfast.","If you like one, stand in front of it a little longer. It'll like you back.","Some visitors talk to the paintings. I don't judge. I talk to them too.","I'm a professional. I've hosted at least one visitor before. Possibly two.","The best spot in the house is wherever you happen to be standing.","Squint a little. Go on. See how the colours move? That's free. No extra charge.","I tried painting once. It painted me back.","Don't mind me. I'm just here for the ambience. I am the ambience.",'Did you know the word "gallery" means a long room? I looked it up. I had time.',"If you hear snoring later, that wasn't me.","I'd tell you which one is the most famous, but they'd all get jealous.","This one was hung at exactly the right height. I checked with my hat.","You walk very gracefully. For a visitor.","Every painting here is somebody. Even the ones that look like nobody.","I like to think the paintings look forward to visitors. I know I do."],Wy=["Yes? Can I help you?","Hey! The machines are inside, not out here.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a vacuum tube.","Me? I'm not part of the exhibition. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was thinking about 1906.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],Xy=["Hm? Oh! I wasn't asleep. I was resting my eyes.","I'm up! I'm up!","Was I snoring? I don't snore. That was the ventilation.","Huh? Who? Oh. You. Welcome back."],qy=["Lovely, isn't it?","Up close they get even stranger. In the best way.","Good choice.","That's one of my favourites. Don't tell the others.","I always see something new in that one."],Yy=["Oh! Someone else just came in. There are {x} of you now.","Another visitor! That makes {x} of you."],$y=["Somebody just left. Now there are {x} of you."],Ky=["Somebody just left. It's just you and me now."];function Oi(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const xe=.2,Zy=Math.sqrt(9.81/(22*xe)),Jy={...hy,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},ir=(s,t,e,n=new U)=>n.set(s/xe,t/xe-.5,e/xe),Fu=(s,t=new U)=>t.set(s.x*xe,(s.y+.5)*xe,s.z*xe);class Qy{constructor(t,e,n,i=!1){P(this,"scene",new rc);P(this,"cam",new en);P(this,"mcam",new en);P(this,"shadow");P(this,"rig");P(this,"count",null);P(this,"onEnter",()=>{});P(this,"onLeave",()=>{});P(this,"el");P(this,"textEl");P(this,"bubble",null);P(this,"onKey",()=>{});P(this,"hidden",!1);P(this,"wasLocked",!1);P(this,"queue",[]);P(this,"used",new Set);P(this,"grid",null);P(this,"stage","waiting");P(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});P(this,"inside",!1);P(this,"been",!1);P(this,"wasInside",!1);P(this,"wasOut",!0);P(this,"quiet",0);P(this,"resting","no");P(this,"soughtRest",!1);P(this,"idleIn",6);P(this,"remarkIn",45);P(this,"followIn",0);P(this,"glanceIn",2);P(this,"glanceAt",null);P(this,"dest",null);P(this,"last",{x:0,z:0,yaw:0,pitch:0});P(this,"countSaid",0);P(this,"lastCrowd",-999);P(this,"clock",0);P(this,"standH",0);P(this,"v1",new U);P(this,"v2",new U);P(this,"scaleM",new Jt().makeScale(xe,xe,xe));this.gallery=t,this.player=e,this.main=n,this.touch=i;const r={groundAt:(d,f)=>this.wallAt(d*xe,f*xe)?this.gallery.arch.H/xe:-.5,solidAt:(d,f,m)=>{const x=(f+.5)*xe;return x<0?!0:x<this.gallery.arch.H&&this.wallAt(d*xe,m*xe)}};this.rig=new Uy(Jy,3,r),this.scene.add(this.rig.root,this.rig.fx.group),this.scene.add(new Wp(16777215,13815492,1.9));const o=new Yp(16777215,1.5);o.position.set(.4,1,.7),this.scene.add(o.target),this.scene.add(o);const a=document.createElement("canvas");a.width=a.height=64;const l=a.getContext("2d"),c=l.createRadialGradient(32,32,0,32,32,32);c.addColorStop(0,"rgba(0,0,0,0.62)"),c.addColorStop(.55,"rgba(0,0,0,0.3)"),c.addColorStop(1,"rgba(0,0,0,0)"),l.fillStyle=c,l.fillRect(0,0,64,64);const h=new br(a);this.shadow=new be(new Un(1.5,1.2),new Xn({map:h,transparent:!0,depthWrite:!1,toneMapped:!1,color:0})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.shadow.layers.set(1),this.scene.add(this.shadow),this.cam.layers.enable(1),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble";const u=document.createElement("div");u.className="hb",this.textEl=document.createElement("span"),u.append(this.textEl),this.el.append(u),this.textEl.addEventListener("click",d=>{var m;const f=(m=d.target.closest(".hk"))==null?void 0:m.dataset.k;f&&(d.preventDefault(),d.stopPropagation(),this.onKey(f),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*xe,z:this.rig.pos.z*xe}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/xe,t.z/xe,0),this.dest=null}gridFor(){if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,l=e.z0,c=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),u=new Uint8Array(c*h);for(let d=0;d<h;d++)for(let f=0;f<c;f++){const m=a+(f+.5)*n,x=l+(d+.5)*n,g=m>e.x0+i&&m<e.x1-i&&x>e.z0+i&&x<e.z1-i,p=x>e.z1+r+i,M=m>t.entrance.a+i&&m<t.entrance.b-i&&x>e.z1-i-.01&&x<e.z1+r+i+.01;!g&&!p&&!M||t.solids.some(E=>m>E.x0-i&&m<E.x1+i&&x>E.z0-i&&x<E.z1+i)||(u[d*c+f]=1)}return this.grid={arch:t,x0:a,z0:l,nx:c,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return i>=0&&r>=0&&i<n.nx&&r<n.nz&&n.free[r*n.nx+i]===1}clear(t,e,n,i){const r=Math.hypot(n-t,i-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(i-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,r=(v,S)=>[Math.floor((v-n.x0)/n.c),Math.floor((S-n.z0)/n.c)];let[o,a]=r(i.x,i.z);const[l,c]=r(t,e),h=(v,S)=>v>=0&&S>=0&&v<n.nx&&S<n.nz&&n.free[S*n.nx+v]===1;if(!h(l,c))return null;if(!h(o,a)){let v=null,S=1/0;for(let b=-4;b<=4;b++)for(let A=-4;A<=4;A++)h(o+A,a+b)&&A*A+b*b<S&&(S=A*A+b*b,v=[o+A,a+b]);if(!v)return null;[o,a]=v}const u=n.nx*n.nz,d=new Float32Array(u).fill(1/0),f=new Int32Array(u).fill(-1),m=(v,S)=>{const b=Math.abs(v-l),A=Math.abs(S-c);return Math.max(b,A)+.414*Math.min(b,A)},x=[[m(o,a),a*n.nx+o]];d[a*n.nx+o]=0;const g=c*n.nx+l;for(;x.length;){let v=0;for(let _=1;_<x.length;_++)x[_][0]<x[v][0]&&(v=_);const[,S]=x.splice(v,1)[0];if(S===g)break;const b=S%n.nx,A=Math.floor(S/n.nx);for(const[_,y]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const C=b+_,L=A+y;if(!h(C,L)||_&&y&&(!h(b+_,A)||!h(b,A+y)))continue;const D=L*n.nx+C,F=d[S]+(_&&y?1.414:1);F<d[D]&&(d[D]=F,f[D]=S,x.push([F+m(C,L),D]))}}if(!isFinite(d[g]))return null;const p=[];for(let v=g;v!==-1;v=f[v])p.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});p[p.length-1]={x:t,z:e};const M=[i];let E=0;for(;E<p.length-1;){let v=p.length-1;const S=M[M.length-1];for(;v>E+1&&!this.clear(S.x,S.z,p[v].x,p[v].z);)v--;M.push(p[v]),E=v}return M}goTo(t,e,n){const i=this.route(t,e);if(!i||i.length<2)return!1;let r=0;for(let l=1;l<i.length;l++)r+=Math.hypot(i[l].x-i[l-1].x,i[l].z-i[l-1].z);if(r<.25)return!1;const o=r>3.2?"bound":r>1.6?"run":"walk",a=n??(Math.random()<.3?"strut":"stroll");return this.rig.travel(i.slice(1).map(l=>({x:l.x/xe,z:l.z/xe})),o,()=>{this.dest=null},a),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Wi(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(){const t=this.player.pos,e=this.at;if(this.goodSpot(e.x,e.z)&&!this.dest)return;const n=-Math.sin(this.player.yaw),i=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),o=-Math.sin(this.player.yaw),a=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let l=null,c=1/0;if(a.forEach(([u,d],f)=>{const m=t.x+n*u+r*d,x=t.z+i*u+o*d;if(!this.freeAt(m,x)||!this.seen(m,x))return;const g=Math.hypot(m-e.x,x-e.z)+f*.15;g<c&&(c=g,l={x:m,z:x})}),!l)return;const h=l;this.dest&&Math.hypot(this.dest.x-h.x,this.dest.z-h.z)<.8||this.goTo(h.x,h.z)}say(t,e){this.inside||(this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e))}start(t,e){if(this.inside){this.queue=[];return}if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?Gy:Hy),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),i=n.map(r=>Ya(r)?"o":r).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.grow(this.bubble,i.length),this.el.classList.remove("pop"),this.el.offsetWidth,this.el.classList.add("pop"),this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){if(this.bubble=null,this.el.classList.contains("on")&&!this.hidden&&!this.el.classList.contains("away")){const e=this.el.cloneNode(!0);e.className="host-bubble-ghost"+(this.el.classList.contains("free")?" free":""),e.style.visibility="",document.body.append(e),setTimeout(()=>e.remove(),1300)}this.el.classList.remove("on","pop");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const r=Ya(i)?1:i.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(Ya(i)){const l=document.createElement("button");l.className="hk",l.dataset.k=i,l.tabIndex=-1,l.title=t1[i],l.textContent=jy[i],this.textEl.append(l)}else{const l=i.slice(o-n,a-n),c=this.textEl.lastChild;c&&c.nodeType===Node.TEXT_NODE?c.appendData(l):this.textEl.append(l)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(Oi(Wy,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(Oi(qy,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(Oi(Yy,this.used),"excited"):this.say(t<=1?Ky[0]:Oi($y,this.used),"curious"))}hit(t){const e=new Lo(ir(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/xe);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=Fu(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(Oi(Xy,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){this.clock+=t;const e=this.player,n=this.rig,i=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=i.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.been=!0,this.queue=[],this.bubble&&this.endBubble());const a=e.pos.z>o.z1+.3;a&&!this.wasOut&&this.been&&(this.onLeave(),this.queue=[],this.wake(),this.say(Oi(By,this.used),"happy"),this.rig.perform("wave")),this.wasInside=this.inside,this.wasOut=a,!this.been&&!this.inside&&this.invite();const l=e.locked;this.wasLocked&&!l&&!this.hidden&&!this.bubble&&!this.inside&&this.say(Oy,"pleased"),this.wasLocked=l,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const c=this.bubble;c&&(c.shown=Math.min(c.text.length,c.shown+t*34),c.until===1/0&&(c.until=this.clock+Math.max(3,1.2+c.text.split(/\s+/).length/3.6)),this.clock>c.until&&this.endBubble());const h=!!c&&c.shown<c.text.length;n.talk(h?c.text[Math.max(0,Math.ceil(c.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=ir(this.main.position.x,this.main.position.y,this.main.position.z,new U);if(this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(Oi(Vy,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),this.stage==="company"||this.stage==="waiting"){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const d=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),f=n.roomAt(n.pos.x,n.pos.z,d);if(!(f!=null&&f.lie)&&!this.soughtRest){this.soughtRest=!0;const m=this.restSpot(d);if(m&&this.goTo(m.x,m.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",d)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(this.touch?Fy:Ny,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;(this.touch?t.moved:n)&&!e.lockedAt&&(e.lockedAt=this.clock),this.touch&&!e.lockedAt&&(e.lookSaid=e.nudgedClick=!0),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(zy,"pleased"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(ky,"excited"),this.rig.perform("wave");return}}after(t){this.rig.update(t*Zy);const e=this.rig.pos,n=-.5,i=Math.max(0,e.y-this.standH);(!this.standH||!this.rig.busy()&&this.rig.resting==="stand")&&(this.standH=this.standH?this.standH+(e.y-this.standH)*.02:e.y),this.shadow.position.set(0,n-e.y+.03,0);const r=Math.max(.35,1-i/1.6);this.shadow.scale.set(r,r,1),this.shadow.material.opacity=.5*r*(this.rig.resting==="lie"?1.25:1),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*i,l=e.z+Math.sin(o)*i;if(!(!this.freeAt(a,l)||!this.seen(a,l))&&(n=this.rig.roomAt(a/xe,l/xe,t))!=null&&n.lie)return{x:a,z:l}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,i=ir(o.centre[0],o.centre[1],o.centre[2]))}return i??t.clone()}place(){const t=this.main;if(ir(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/xe)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/xe,this.cam.far=t.far/xe,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Fu(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*i;const a=e.z>1||!this.visible(30);r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(i-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("away",a)}}renderMirror(t,e){const n=this.mcam;ir(e.position.x,e.position.y,e.position.z,n.position),n.quaternion.copy(e.quaternion),n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix).multiply(this.scaleM),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),t.autoClear=!1,t.render(this.scene,n),t.autoClear=!0}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const Ya=s=>s==="W"||s==="LEFT"||s==="RIGHT",jy={W:"W",LEFT:"←",RIGHT:"→"},t1={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right"};var zu;class e1{constructor(t){P(this,"count",null);P(this,"onCount",()=>{});P(this,"id",(((zu=crypto.randomUUID)==null?void 0:zu.call(crypto))??String(Math.random()).slice(2)).slice(0,36));P(this,"inside",!1);P(this,"timer",0);P(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const ei=new URLSearchParams(location.search),n1=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Ms=(matchMedia("(hover: none) and (pointer: coarse)").matches||n1)&&!ei.has("desk")||ei.has("touch");i1().catch(s=>{console.error(s),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on"),fetch(`data/machines.json?${Date.now()}`).then(t=>t.json()).then(t=>{const e=document.getElementById("mobile-list");for(const n of t){if(n.off||n.outOfOrder)continue;const i=document.createElement("li"),r=document.createElement("a");r.href=n.url,r.target="_top",r.textContent=n.name.replace(/\s*[|\n]\s*/g," "),i.append(r),e.append(i)}}).catch(()=>{})});async function i1(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([e_(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"','40px "Caveat Brush"'].map(rt=>document.fonts.load(rt))),new Promise(rt=>setTimeout(rt,2500))])]),e=new Yv({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,Ms?1.5:2);e.setPixelRatio(i),e.setClearColor(16777215,1),e.setSize(innerWidth,innerHeight),e.toneMapping=Yl,e.toneMappingExposure=1;const r=e.domElement;r.tabIndex=-1,r.style.outline="none";const o=ey();document.getElementById("stage").appendChild(r);const a=e.capabilities.getMaxAnisotropy(),l=new rc,c=new en(62,innerWidth/innerHeight,.05,900);c.layers.enable(1),c.layers.enable(Gl);const h=new UM(1,1),u=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),c.aspect=innerWidth/innerHeight,c.fov=c.aspect<1?Xe.radToDeg(2*Math.atan(Math.tan(Xe.degToRad(31))*Math.min(1.45,.82/c.aspect))):62,c.updateProjectionMatrix();const rt=e.getDrawingBufferSize(new Bt);h.setSize(Math.round(rt.x/2),Math.round(rt.y/2))};u(),addEventListener("resize",u);const d=new Es(t,l,e,h,s,a);await d.loadSmall();const f=new X_(r),m=t.layout,x=m.entrance;f.pos.set(x.x+2.4,Bi,m.outline.z1+m.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const g=ei.get("at");if(g&&!g.startsWith("machine:")){const[rt,pt,Pt,W]=g.split(",").map(Number);f.pos.set(rt,Bi,pt),f.yaw=Xe.degToRad(Pt||0),f.pitch=Xe.degToRad(W||0)}ei.get("hud");const p=document.getElementById("dot");p.style.display="none";const M=new kM(!1),E=new Lo;E.far=14,E.layers.enableAll();let v=[];const S=()=>{v=[],d.interior.group.traverse(rt=>{rt.isMesh&&!rt.isInstancedMesh&&v.push(rt)}),d.outside.group.traverse(rt=>{rt.isMesh&&rt.userData.outside&&v.push(rt)})},b=()=>{E.setFromCamera(new Bt(0,0),c);const rt=E.intersectObjects(v,!1)[0];if(!rt)return{kind:"none"};const pt=rt.object.userData;return pt.machine?{kind:"machine",machine:pt.machine,point:rt.point,dist:rt.distance}:pt.label?{kind:"label",work:pt.work,point:rt.point,dist:rt.distance}:pt.work?{kind:"work",work:pt.work,point:rt.point,dist:rt.distance}:pt.face?{kind:"face",face:pt.face,point:rt.point,dist:rt.distance}:{kind:"none",point:rt.point,dist:rt.distance}},A=new Nl,_=new Set;let y=1;const C=rt=>{let pt=99;for(const Pt of d.interior.pictures)Pt.work.id===rt&&(pt=Math.min(pt,Math.hypot(Pt.mesh.position.x-f.pos.x,Pt.mesh.position.z-f.pos.z)));return pt};function L(){y=0;for(const[rt,pt]of d.sharp)if(!(C(rt)<=14)){d.sharp.delete(rt);for(const Pt of d.interior.pictures)Pt.work.id===rt&&(Pt.mat.uniforms.uMap.value=d.texture(rt));pt.dispose()}for(const rt of d.interior.pictures){const pt=rt.work.id;d.sharp.has(pt)||C(pt)>7.5||(y++,!(_.has(pt)||_.size>=4)&&(_.add(pt),A.loadAsync(Es.url(pt,"m")).then(Pt=>{_.delete(pt),d.sharp.set(pt,d.prepTex(Pt));for(const W of d.interior.pictures)W.work.id===pt&&(W.mat.uniforms.uMap.value=Pt)}).catch(()=>_.delete(pt))))}}const D=new NM;let F=!0;const H=rt=>{const pt=d.cat.get(rt);pt&&(F=f.locked,f.frozen=!0,D.show(pt,t.images[rt],Es.url(rt,d.sharp.has(rt)?"m":"s"),Es.url(rt,"l")),M.opened())};D.onClose=()=>{f.frozen=!1,N.looked()};const O=new qM;addEventListener("resize",()=>O.resize());const Z=()=>{if(!(Ms||document.body.classList.contains("ed-page"))){try{r.focus({preventScroll:!0})}catch{}try{window.focus()}catch{}f.freeLook=!0,r.style.cursor="none",r.requestPointerLock()}};O.onBack=()=>Z(),addEventListener("keydown",rt=>{rt.code==="Escape"&&(f.freeLook=!1)});const q=rt=>{const pt=rt.front,Pt=.82;return{x:rt.spot.x+pt[0]*Pt,z:rt.spot.z+pt[2]*Pt,yaw:Math.atan2(pt[0],pt[2]),pitch:Math.atan2(rt.screen.c.y-Bi,Pt-.04)}},j=rt=>{const pt=d.machines.find(W=>W.machine.id===rt);if(!pt)return;const Pt=q(pt);f.pos.set(Pt.x,Bi,Pt.z),f.yaw=Pt.yaw,f.pitch=Pt.pitch,f.collide()};let G=[];const K=rt=>H(rt.id);let it=0;const ut={gallery:d,player:f,camera:c,renderer:e,canvas:r,viewer:D,scene:l,monitor:O,aim:b,openWork:H,dot:p};d.onRebuilt=()=>{f.solids=d.arch.solids;const rt=t.layout.outline;f.world={x0:rt.x0-30,x1:rt.x1+30,z0:rt.z0-30,z1:rt.z1+30},f.collide(),S(),G=d.interior.pictures.map(FM),it=0},d.rebuild();const N=new Qy(d,f,c,Ms),X=new e1((ei.get("count"),void 0));X.onCount=rt=>N.setCount(rt),ei.get("count")&&(N.count=+ei.get("count"));const k=(()=>{const rt=document.createElement("div");rt.id="leaving",document.body.append(rt);let pt=0;const Pt=()=>{if(Mu({rmiLeave:!0}))return;const W=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(W)?(history.back(),setTimeout(()=>{location.href=W},1500)):rt.classList.remove("on")};return{start(){clearTimeout(pt),rt.classList.add("on"),pt=window.setTimeout(Pt,1900)},cancel(){clearTimeout(pt),rt.classList.remove("on")},now(){clearTimeout(pt),rt.classList.add("on"),pt=window.setTimeout(()=>{if(Mu({rmiLeave:!0}))return;const W=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(W)?(history.back(),setTimeout(()=>{location.href=W},1500)):(window.top??window).location.href="https://www.robynmiller.net/"},700)}}})();let B=!1;const R=()=>{if(B)return;B=!0;const rt=document.createElement("div");rt.id="mobile-note",rt.setAttribute("role","dialog"),rt.innerHTML='<div class="mn-card"><p>Time Machines have not been tuned for Mobile Interface.</p><div class="mn-buttons"><button class="mn-go">Continue</button><button class="mn-back">Return to Website</button></div></div>',document.body.append(rt),f.frozen=!0,f.glide.set(0,0),f.spin=0,f.goal=null,requestAnimationFrame(()=>rt.classList.add("on"));const pt=()=>{rt.classList.remove("on"),f.frozen=!1,setTimeout(()=>rt.remove(),300)};rt.querySelector(".mn-go").addEventListener("click",pt),rt.querySelector(".mn-back").addEventListener("click",()=>{pt(),f.frozen=!0,k.now()})};N.onEnter=()=>{X.enter(),k.cancel(),Ms&&R()},N.onKey=rt=>{f.tap(rt==="W"?"KeyW":rt==="LEFT"?"ArrowLeft":"ArrowRight",rt==="W"?.3:.4),f.locked||r.requestPointerLock()},N.onLeave=()=>{X.exit(),k.start()};const I=new Lo;I.far=12;let V=null,Q=-1e9;const nt=rt=>{if(rt.button!==0&&rt.button!==2||performance.now()-Q<900||O.travelling)return;if(D.open){D.hide();return}if(O.ready&&!document.body.classList.contains("ed-page")){const Pt=f.locked?xn.x:rt.clientX,W=f.locked?xn.y:rt.clientY;O.onMap(Pt,W)?(M.clear(),f.freeLook=!1,O.enter(c,f)):(O.pushBack(c,f),f.locked||Z());return}if(!f.locked){if(M.pic){K(M.pic);return}r.requestPointerLock();return}if(I.setFromCamera(new Bt(0,0),c),N.hit(I)){N.poke();return}if(M.pic){K(M.pic);return}const pt=b();(pt.kind==="work"||pt.kind==="label")&&H(pt.work)};r.addEventListener("mousedown",nt),addEventListener("pointerdown",rt=>{rt.pointerType==="touch"&&(Q=performance.now())},!0);const dt=rt=>{E.setFromCamera(rt,c);const pt=E.intersectObjects(v,!1)[0];if(!pt)return{kind:"none"};const Pt=pt.object.userData,W={point:pt.point,dist:pt.distance};return Pt.machine?{kind:"machine",machine:Pt.machine,...W}:Pt.face?{kind:"wall",...W}:pt.point.y<.02?{kind:"floor",...W}:{kind:"other",...W}};new QM(r,c,f,dt,(rt,pt,Pt)=>{if(!O.travelling){if(O.ready&&rt.kind!=="machine"){O.pushBack(c,f);return}if(rt.kind==="machine"&&rt.machine){if(O.ready&&O.onMap(pt,Pt)){M.clear(),O.enter(c,f);return}if(O.ready){O.pushBack(c,f);return}const W=d.machines.find(he=>he.machine.id===rt.machine);if(W){const he=q(W);f.goal={x:he.x,z:he.z,yaw:he.yaw,pitch:he.pitch}}}else if(rt.kind==="floor"&&rt.point){const W=rt.point.x-f.pos.x,he=rt.point.z-f.pos.z,ue=Math.hypot(W,he),z=Math.max(0,ue-.5)/Math.max(ue,1e-6);f.goal={x:f.pos.x+W*z,z:f.pos.z+he*z}}}},()=>!D.open&&!O.travelling&&!document.body.classList.contains("ed-page")),document.addEventListener("selectstart",rt=>{var Pt;const pt=rt.target instanceof Element?rt.target:(Pt=rt.target)==null?void 0:Pt.parentElement;pt!=null&&pt.closest("input, textarea, select, [contenteditable]")||rt.preventDefault()}),addEventListener("mouseup",rt=>V==null?void 0:V.release(rt)),D.relock=()=>F&&!document.body.classList.contains("ed-page"),D.el.addEventListener("mousedown",rt=>{D.busy||rt.target.closest(".view-tools")||(rt.preventDefault(),D.hide(),!D.open&&!f.locked&&D.relock()&&r.requestPointerLock())}),document.addEventListener("contextmenu",rt=>{rt.target.closest("input, textarea, select")||rt.preventDefault()}),addEventListener("keydown",rt=>{var Pt,W;if((W=(Pt=rt.target).closest)!=null&&W.call(Pt,"input, textarea, select, button"))return;const pt=rt.code==="Enter"||rt.code==="Space";if(D.open){(pt||rt.code==="Escape")&&!D.busy&&(rt.preventDefault(),D.hide());return}if(!O.travelling){if(pt&&O.ready&&!document.body.classList.contains("ed-page")){rt.preventDefault(),O.enter(c,f);return}pt&&M.pic&&!document.body.classList.contains("ed-page")&&(rt.preventDefault(),K(M.pic))}}),document.addEventListener("pointerlockchange",()=>{!f.locked&&D.open&&D.hide()});const gt=ei.get("open");gt!==null&&H(gt.padStart(2,"0")),g!=null&&g.startsWith("machine:")&&j(g.slice(8));let bt=performance.now(),zt=!1;addEventListener("mousemove",rt=>{if(f.locked){if(!f.holdLook)return;xn.x=Math.max(2,Math.min(innerWidth-2,xn.x+rt.movementX)),xn.y=Math.max(2,Math.min(innerHeight-2,xn.y+rt.movementY));return}r.style.cursor=f.freeLook?"none":O.ready&&O.onMap(rt.clientX,rt.clientY)?ty:jM});let Ot=0,Wt=0;const le=ei.get("near")==="1";function Ee(){const rt=performance.now(),pt=Math.min((rt-bt)/1e3,.05);bt=rt,pt>.024?Wt+=pt:Wt=Math.max(0,Wt-pt*.5),Wt>1.5&&i>1&&(i=Math.max(1,i-.25),Wt=0,u()),f.update(pt),f.apply(c),c.updateMatrixWorld(),O.update(pt,c,f,d.interior.machines);const Pt=O.ready&&f.locked&&!Ms;Pt&&!zt&&(xn.x=innerWidth/2,xn.y=innerHeight/2),zt=Pt,f.holdLook=Pt,f.locked&&f.freeLook&&(f.freeLook=!1),Uf.value+=pt;const W=document.body.classList.contains("ed-page");N.hide(W||D.open||O.travelling),N.update(pt),f.obstacles=[N.obstacle,...d.machines.map(he=>({x:he.spot.x,z:he.spot.z,r:$_}))],(it-=pt)<=0&&(it=.3,L()),W||D.open||O.travelling?M.clear():M.update(pt,c,G,d.arch.solids,!0),O.covering||(h.render(e,l,c),e.render(l,c),W||N.render(e),W||M.render(e,l,c));{const he=(f.locked||f.freeLook)&&!W&&!D.open&&!O.travelling&&!Ms;Pt?o(he,O.onMap(xn.x,xn.y),xn.x,xn.y):o(he)}Ot++,!window.__gReady&&Ot>3&&(!le||y===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(Ee)}requestAnimationFrame(Ee);try{document.hasFocus()||window.focus()}catch{}window.__g={...ut,data:t,editor:V,host:N,presence:X,focus:M,standAt:j}}
