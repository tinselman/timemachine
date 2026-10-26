var Qf=Object.defineProperty;var jf=(s,t,e)=>t in s?Qf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var I=(s,t,e)=>jf(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gl="186",td=0,Nc=1,ed=2,ao=1,nd=2,er=3,Bi=0,an=1,Hn=2,ai=0,sr=1,Xa=2,Fc=3,zc=4,id=5,_s=100,sd=101,rd=102,od=103,ad=104,ld=200,cd=201,hd=202,ud=203,Uu=204,Nu=205,fd=206,dd=207,pd=208,md=209,gd=210,xd=211,_d=212,vd=213,Md=214,qa=0,Ya=1,$a=2,ur=3,Ka=4,Za=5,Ja=6,Qa=7,Vl=0,yd=1,Sd=2,Vn=0,Fu=1,zu=2,Ou=3,ku=4,Bu=5,Hu=6,Wl=7,Gu=300,Hi=301,Ts=302,Zo=303,Jo=304,Bo=306,ja=1e3,ri=1001,tl=1002,Be=1003,wd=1004,wr=1005,He=1006,Qo=1007,Ri=1008,on=1009,Vu=1010,Wu=1011,fr=1012,Xl=1013,Wn=1014,In=1015,wn=1016,ql=1017,Yl=1018,dr=1020,Xu=35902,qu=35899,Yu=1021,$u=1022,pn=1023,hi=1026,Oi=1027,Ho=1028,$l=1029,Gi=1030,Kl=1031,Zl=1033,lo=33776,co=33777,ho=33778,uo=33779,el=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,ll=37488,cl=37489,xo=37490,hl=37491,ul=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,vl=37816,Ml=37817,yl=37818,Sl=37819,wl=37820,bl=37821,El=36492,Tl=36494,Al=36495,Rl=36283,Cl=36284,_o=36285,Ll=36286,bd=3200,Pl=0,Ed=1,Ti="",De="srgb",vo="srgb-linear",Mo="linear",he="srgb",jo=7680,Td=519,Ad=512,Rd=513,Cd=514,Jl=515,Ld=516,Pd=517,Ql=518,Id=519,Ku=35044,Oc="300 es",Gn=2e3,pr=2001;function Dd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ud(){const s=mr("canvas");return s.style.display="block",s}const kc={};function yo(...s){const t="THREE."+s.shift();console.log(t,...s)}function Zu(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Wt(...s){s=Zu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function re(...s){s=Zu(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function bs(...s){const t=s.join(" ");t in kc||(kc[t]=!0,Wt(...s))}function Nd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Fd={[qa]:Ya,[$a]:Ja,[Ka]:Qa,[ur]:Za,[Ya]:qa,[Ja]:$a,[Qa]:Ka,[Za]:ur};class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const rr=Math.PI/180,gr=180/Math.PI;function li(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[s&255]+$e[s>>8&255]+$e[s>>16&255]+$e[s>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ee(s,t,e){return Math.max(t,Math.min(e,s))}function jl(s,t){return(s%t+t)%t}function zd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Od(s,t,e){return s!==t?(e-s)/(t-s):0}function or(s,t,e){return(1-e)*s+e*t}function kd(s,t,e,n){return or(s,t,1-Math.exp(-e*n))}function Bd(s,t=1){return t-Math.abs(jl(s,t*2)-t)}function Hd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Gd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Vd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Wd(s,t){return s+Math.random()*(t-s)}function Xd(s){return s*(.5-Math.random())}function qd(s){s!==void 0&&(Bc=s);let t=Bc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yd(s){return s*rr}function $d(s){return s*gr}function Kd(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Zd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qd(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*h,a*c);break;default:Wt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const We={DEG2RAD:rr,RAD2DEG:gr,generateUUID:li,clamp:ee,euclideanModulo:jl,mapLinear:zd,inverseLerp:Od,lerp:or,damp:kd,pingpong:Bd,smoothstep:Hd,smootherstep:Gd,randInt:Vd,randFloat:Wd,randFloatSpread:Xd,seededRandom:qd,degToRad:Yd,radToDeg:$d,isPowerOfTwo:Kd,ceilPowerOfTwo:Zd,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Qd,normalize:ue,denormalize:Pn},Mc=class Mc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mc.prototype.isVector2=!0;let Ot=Mc;class de{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yc=class yc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ta.copy(this).projectOnVector(t),this.sub(ta)}reflect(t){return this.sub(ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yc.prototype.isVector3=!0;let D=yc;const ta=new D,Hc=new de,Sc=class Sc{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],E=i[4],v=i[7],y=i[2],w=i[5],L=i[8];return r[0]=o*x+a*M+l*y,r[3]=o*g+a*E+l*w,r[6]=o*p+a*v+l*L,r[1]=c*x+h*M+u*y,r[4]=c*g+h*E+u*w,r[7]=c*p+h*v+u*L,r[2]=f*x+d*M+m*y,r[5]=f*g+d*E+m*w,r[8]=f*p+d*v+m*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ea.makeScale(t,e)),this}rotate(t){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ea.makeRotation(-t)),this}translate(t,e){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Sc.prototype.isMatrix3=!0;let Yt=Sc;const ea=new Yt,Gc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){const s={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(i.r=ci(i.r),i.g=ci(i.g),i.b=ci(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Mo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[vo]:{primaries:t,whitePoint:n,transfer:Mo,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),s}const se=jd();function ci(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zi;class tp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=mr("canvas")),Zi.width=t.width,Zi.height=t.height;const i=Zi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ep=0;class tc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(na(i[o].image)):r.push(na(i[o]))}else r=na(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function na(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}let np=0;const ia=new D;class Xe extends Wi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=ri,i=ri,r=He,o=Ri,a=pn,l=on,c=Xe.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=li(),this.name="",this.source=new tc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ia).x}get height(){return this.source.getSize(ia).y}get depth(){return this.source.getSize(ia).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ja:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ja:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Gu;Xe.DEFAULT_ANISOTROPY=1;const wc=class wc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(d+1)/2,y=(p+1)/2,w=(h+f)/4,L=(u+x)/4,_=(m+g)/4;return E>v&&E>y?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=w/n,r=L/n):v>y?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=_/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=L/r,i=_/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ee(this.x,t.x,e.x),this.y=ee(this.y,t.y,e.y),this.z=ee(this.z,t.z,e.z),this.w=ee(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ee(this.x,t,e),this.y=ee(this.y,t,e),this.z=ee(this.z,t,e),this.w=ee(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ee(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wc.prototype.isVector4=!0;let pe=wc;class ip extends Wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Xe(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new tc(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends ip{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ju extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sp extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ko=class ko{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,m,x,g)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ko().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rp,t,op)}lookAt(t,e,n){const i=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),pi.crossVectors(n,ln),pi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),pi.crossVectors(n,ln)),pi.normalize(),br.crossVectors(ln,pi),i[0]=pi.x,i[4]=br.x,i[8]=ln.x,i[1]=pi.y,i[5]=br.y,i[9]=ln.y,i[2]=pi.z,i[6]=br.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],E=n[7],v=n[11],y=n[15],w=i[0],L=i[4],_=i[8],S=i[12],C=i[1],A=i[5],U=i[9],F=i[13],N=i[2],G=i[6],Z=i[10],X=i[14],tt=i[3],H=i[7],K=i[11],et=i[15];return r[0]=o*w+a*C+l*N+c*tt,r[4]=o*L+a*A+l*G+c*H,r[8]=o*_+a*U+l*Z+c*K,r[12]=o*S+a*F+l*X+c*et,r[1]=h*w+u*C+f*N+d*tt,r[5]=h*L+u*A+f*G+d*H,r[9]=h*_+u*U+f*Z+d*K,r[13]=h*S+u*F+f*X+d*et,r[2]=m*w+x*C+g*N+p*tt,r[6]=m*L+x*A+g*G+p*H,r[10]=m*_+x*U+g*Z+p*K,r[14]=m*S+x*F+g*X+p*et,r[3]=M*w+E*C+v*N+y*tt,r[7]=M*L+E*A+v*G+y*H,r[11]=M*_+E*U+v*Z+y*K,r[15]=M*S+E*F+v*X+y*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],M=l*d-c*f,E=a*d-c*u,v=a*f-l*u,y=o*d-c*h,w=o*f-l*h,L=o*u-a*h;return e*(x*M-g*E+p*v)-n*(m*M-g*y+p*w)+i*(m*E-x*y+p*L)-r*(m*v-x*w+g*L)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=e*a-n*o,E=e*l-i*o,v=e*c-r*o,y=n*l-i*a,w=n*c-r*a,L=i*c-r*l,_=h*x-u*m,S=h*g-f*m,C=h*p-d*m,A=u*g-f*x,U=u*p-d*x,F=f*p-d*g,N=M*F-E*U+v*A+y*C-w*S+L*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/N;return t[0]=(a*F-l*U+c*A)*G,t[1]=(i*U-n*F-r*A)*G,t[2]=(x*L-g*w+p*y)*G,t[3]=(f*w-u*L-d*y)*G,t[4]=(l*C-o*F-c*S)*G,t[5]=(e*F-i*C+r*S)*G,t[6]=(g*v-m*L-p*E)*G,t[7]=(h*L-f*v+d*E)*G,t[8]=(o*U-a*C+c*_)*G,t[9]=(n*C-e*U-r*_)*G,t[10]=(m*w-x*v+p*M)*G,t[11]=(u*v-h*w-d*M)*G,t[12]=(a*S-o*A-l*_)*G,t[13]=(e*A-n*S+i*_)*G,t[14]=(x*E-m*y-g*M)*G,t[15]=(h*y-u*E+f*M)*G,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=l*c,E=l*h,v=l*u,y=n.x,w=n.y,L=n.z;return i[0]=(1-(x+p))*y,i[1]=(d+v)*y,i[2]=(m-E)*y,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+p))*w,i[6]=(g+M)*w,i[7]=0,i[8]=(m+E)*L,i[9]=(g-M)*L,i[10]=(1-(f+x))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ji.set(i[0],i[1],i[2]).length();const a=Ji.set(i[4],i[5],i[6]).length(),l=Ji.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Tn.copy(this);const c=1/o,h=1/a,u=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Gn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Gn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===pr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Gn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Gn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===pr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ko.prototype.isMatrix4=!0;let Zt=ko;const Ji=new D,Tn=new Zt,rp=new D(0,0,0),op=new D(1,1,1),pi=new D,br=new D,ln=new D,Wc=new Zt,Xc=new de;class bn{constructor(t=0,e=0,n=0,i=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ap=0;const qc=new D,Qi=new de,qn=new Zt,Er=new D,Ds=new D,lp=new D,cp=new de,Yc=new D(1,0,0),$c=new D(0,1,0),Kc=new D(0,0,1),Zc={type:"added"},hp={type:"removed"},ji={type:"childadded",child:null},sa={type:"childremoved",child:null};class Ue extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new D,e=new bn,n=new de,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Yt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Ds,Er,this.up):qn.lookAt(Er,Ds,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(qn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zc),ji.child=t,this.dispatchEvent(ji),ji.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(hp),sa.child=t,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zc),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,t,lp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,cp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.DEFAULT_UP=new D(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ie extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const up={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(up)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function oa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=jl(t,1),e=ee(e,0,1),n=ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=oa(o,r,t+1/3),this.g=oa(o,r,t),this.b=oa(o,r,t-1/3)}return se.colorSpaceToWorking(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=Qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return se.workingToColorSpace(Ke.copy(this),t),Math.round(ee(Ke.r*255,0,255))*65536+Math.round(ee(Ke.g*255,0,255))*256+Math.round(ee(Ke.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,r=Ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=De){se.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(Tr);const n=or(mi.h,Tr.h,e),i=or(mi.s,Tr.s,e),r=or(mi.l,Tr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new zt;zt.NAMES=Qu;class nc extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const An=new D,Yn=new D,aa=new D,$n=new D,ts=new D,es=new D,Jc=new D,la=new D,ca=new D,ha=new D,ua=new pe,fa=new pe,da=new pe;class vn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),An.subVectors(t,e),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){An.subVectors(i,e),Yn.subVectors(n,e),aa.subVectors(t,e);const o=An.dot(An),a=An.dot(Yn),l=An.dot(aa),c=Yn.dot(Yn),h=Yn.dot(aa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ua.setScalar(0),fa.setScalar(0),da.setScalar(0),ua.fromBufferAttribute(t,e),fa.fromBufferAttribute(t,n),da.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ua,r.x),o.addScaledVector(fa,r.y),o.addScaledVector(da,r.z),o}static isFrontFacing(t,e,n,i){return An.subVectors(n,e),Yn.subVectors(t,e),An.cross(Yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),An.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ts.subVectors(i,n),es.subVectors(r,n),la.subVectors(t,n);const l=ts.dot(la),c=es.dot(la);if(l<=0&&c<=0)return e.copy(n);ca.subVectors(t,i);const h=ts.dot(ca),u=es.dot(ca);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ts,o);ha.subVectors(t,r);const d=ts.dot(ha),m=es.dot(ha);if(m>=0&&d<=m)return e.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(es,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Jc.subVectors(r,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(Jc,a);const p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Xi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Us),Rr.subVectors(this.max,Us),ns.subVectors(t.a,Us),is.subVectors(t.b,Us),ss.subVectors(t.c,Us),gi.subVectors(is,ns),xi.subVectors(ss,is),Pi.subVectors(ns,ss);let e=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Pi.z,Pi.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Pi.z,0,-Pi.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Pi.y,Pi.x,0];return!pa(e,ns,is,ss,Rr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,ns,is,ss,Rr))?!1:(Cr.crossVectors(gi,xi),e=[Cr.x,Cr.y,Cr.z],pa(e,ns,is,ss,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,Ar=new Xi,ns=new D,is=new D,ss=new D,gi=new D,xi=new D,Pi=new D,Us=new D,Rr=new D,Cr=new D,Ii=new D;function pa(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ii.fromArray(s,r);const a=i.x*Math.abs(Ii.x)+i.y*Math.abs(Ii.y)+i.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ii=fp();function fp(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function dp(s){Math.abs(s)>65504&&Wt("DataUtils.toHalfFloat(): Value out of range."),s=ee(s,-65504,65504),ii.floatView[0]=s;const t=ii.uint32View[0],e=t>>23&511;return ii.baseTable[e]+((t&8388607)>>ii.shiftTable[e])}function pp(s){const t=s>>10;return ii.uint32View[0]=ii.mantissaTable[ii.offsetTable[t]+(s&1023)]+ii.exponentTable[t],ii.floatView[0]}class mp{static toHalfFloat(t){return dp(t)}static fromHalfFloat(t){return pp(t)}}const Pe=new D,Lr=new Ot;let gp=0;class yn extends Wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ku,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class ju extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tf extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const xp=new Xi,Ns=new D,ma=new D;class qi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);const e=Ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(ma)),this.expandByPoint(Ns.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _p=0;const gn=new Zt,ga=new Ue,rs=new D,cn=new Xi,Fs=new Xi,ze=new D;class be extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?tf:ju)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(cn.min,Fs.min),cn.expandByPoint(ze),ze.addVectors(cn.max,Fs.max),cn.expandByPoint(ze)):(cn.expandByPoint(Fs.min),cn.expandByPoint(Fs.max))}cn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),ze.add(rs)),i=Math.max(i,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new D,l[_]=new D;const c=new D,h=new D,u=new D,f=new Ot,d=new Ot,m=new Ot,x=new D,g=new D;function p(_,S,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(A),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(A),a[_].add(x),a[S].add(x),a[C].add(x),l[_].add(g),l[S].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,S=M.length;_<S;++_){const C=M[_],A=C.start,U=C.count;for(let F=A,N=A+U;F<N;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const E=new D,v=new D,y=new D,w=new D;function L(_){y.fromBufferAttribute(i,_),w.copy(y);const S=a[_];E.copy(S),E.sub(y.multiplyScalar(y.dot(S))).normalize(),v.crossVectors(w,S);const A=v.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,A)}for(let _=0,S=M.length;_<S;++_){const C=M[_],A=C.start,U=C.count;for(let F=A,N=A+U;F<N;F+=3)L(t.getX(F+0)),L(t.getX(F+1)),L(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new yn(f,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ku,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Je=new D;class So{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),i=ue(i,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new yn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new So(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xa=new D,Mp=new D,yp=new Yt;class ti{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=xa.subVectors(n,e).cross(Mp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yp.getNormalMatrix(t),i=this.coplanarPoint(xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Sp=0;class Yi extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=li(),this.name="",this.type="Material",this.blending=sr,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Nu,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ti().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ef extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let os;const zs=new D,as=new D,ls=new D,cs=new Ot,Os=new Ot,nf=new Zt,Pr=new D,ks=new D,Ir=new D,Qc=new Ot,_a=new Ot,jc=new Ot;class wp extends Ue{constructor(t=new ef){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vp(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new So(n,3,0,!1)),os.setAttribute("uv",new So(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new Ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),nf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Dr(Pr.set(-.5,-.5,0),ls,o,as,i,r),Dr(ks.set(.5,-.5,0),ls,o,as,i,r),Dr(Ir.set(.5,.5,0),ls,o,as,i,r),Qc.set(0,0),_a.set(1,0),jc.set(1,1);let a=t.ray.intersectTriangle(Pr,ks,Ir,!1,zs);if(a===null&&(Dr(ks.set(-.5,.5,0),ls,o,as,i,r),_a.set(0,1),a=t.ray.intersectTriangle(Pr,Ir,ks,!1,zs),a===null))return;const l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:vn.getInterpolation(zs,Pr,ks,Ir,Qc,_a,jc,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Dr(s,t,e,n,i,r){cs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Os.x=r*cs.x-i*cs.y,Os.y=i*cs.x+r*cs.y):Os.copy(cs),s.copy(t),s.x+=Os.x,s.y+=Os.y,s.applyMatrix4(nf)}const Zn=new D,va=new D,Ur=new D,Nr=new D;class ic{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){va.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Nr.copy(this.origin).sub(va);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ur),a=Nr.dot(this.direction),l=-Nr.dot(Ur),c=Nr.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(va).addScaledVector(Ur,f),d}intersectSphere(t,e){if(t.radius<0)return null;Zn.subVectors(t.center,this.origin);const n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,E=n.z-o.z,v=Math.abs(l),y=Math.abs(c),w=Math.abs(h);let L,_,S,C,A,U,F,N,G,Z,X,tt;if(v>=y&&v>=w?(S=l,U=u,G=m,tt=p,l>=0?(L=c,_=h,C=f,A=d,F=x,N=g,Z=M,X=E):(L=h,_=c,C=d,A=f,F=g,N=x,Z=E,X=M)):y>=w?(S=c,U=f,G=x,tt=M,c>=0?(L=h,_=l,C=d,A=u,F=g,N=m,Z=E,X=p):(L=l,_=h,C=u,A=d,F=m,N=g,Z=p,X=E)):(S=h,U=d,G=g,tt=E,h>=0?(L=l,_=c,C=u,A=f,F=m,N=x,Z=p,X=M):(L=c,_=l,C=f,A=u,F=x,N=m,Z=M,X=p)),S===0)return null;const H=L/S,K=_/S,et=1/S,ft=C-H*U,k=A-K*U,W=F-H*G,O=N-K*G,B=Z-H*tt,R=X-K*tt,P=B*O-R*W,V=ft*R-k*B,j=W*k-O*ft;if(i){if(P<0||V<0||j<0)return null}else if((P<0||V<0||j<0)&&(P>0||V>0||j>0))return null;const st=P+V+j;if(st===0)return null;const dt=et*(P*U+V*G+j*tt);return(st>0?dt<0:dt>0)?null:this.at(dt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oi extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const th=new Zt,Di=new ic,Fr=new qi,eh=new D,zr=new D,Or=new D,kr=new D,Ma=new D,Br=new D,nh=new D,Hr=new D;class Me extends Ue{constructor(t=new be,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ma.fromBufferAttribute(u,t),o?Br.addScaledVector(Ma,h):Br.addScaledVector(Ma.sub(e),h))}e.add(Br)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(Fr.containsPoint(Di.origin)===!1&&(Di.intersectSphere(Fr,eh)===null||Di.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(r).invert(),Di.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,y=E;v<y;v+=3){const w=a.getX(v),L=a.getX(v+1),_=a.getX(v+2);i=Gr(this,p,t,n,c,h,u,w,L,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);i=Gr(this,o,t,n,c,h,u,M,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,y=E;v<y;v+=3){const w=v,L=v+1,_=v+2;i=Gr(this,p,t,n,c,h,u,w,L,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,E=g+1,v=g+2;i=Gr(this,o,t,n,c,h,u,M,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function bp(s,t,e,n,i,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Bi,a),l===null)return null;Hr.copy(a),Hr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Hr);return c<e.near||c>e.far?null:{distance:c,point:Hr.clone(),object:s}}function Gr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,zr),s.getVertexPosition(l,Or),s.getVertexPosition(c,kr);const h=bp(s,t,e,n,zr,Or,kr,nh);if(h){const u=new D;vn.getBarycoord(nh,zr,Or,kr,u),i&&(h.uv=vn.getInterpolatedAttribute(i,a,l,c,u,new Ot)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,u,new Ot)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};vn.getNormal(zr,Or,kr,f.normal),h.face=f,h.barycoord=u}return h}class As extends Xe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Be,h=Be,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ih extends yn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new Zt,sh=new Zt,Vr=[],rh=new Xi,Ep=new Zt,Bs=new Me,Hs=new qi;class fo extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ih(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ep)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),rh.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(rh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Hs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hs),sh.multiplyMatrices(n,hs),Bs.matrixWorld=sh,Bs.raycast(t,Vr);for(let o=0,a=Vr.length;o<a;o++){const l=Vr[o];l.instanceId=r,l.object=this,e.push(l)}Vr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ih(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new As(new Float32Array(i*this.count),i,this.count,Ho,In));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ui=new qi,Tp=new Ot(.5,.5),Wr=new D;class sc{constructor(t=new ti,e=new ti,n=new ti,i=new ti,r=new ti,o=new ti){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],E=r[13],v=r[14],y=r[15];if(i[0].setComponents(c-o,d-h,p-m,y-M).normalize(),i[1].setComponents(c+o,d+h,p+m,y+M).normalize(),i[2].setComponents(c+a,d+u,p+x,y+E).normalize(),i[3].setComponents(c-a,d-u,p-x,y-E).normalize(),n)i[4].setComponents(l,f,g,v).normalize(),i[5].setComponents(c-l,d-f,p-g,y-v).normalize();else if(i[4].setComponents(c-l,d-f,p-g,y-v).normalize(),e===Gn)i[5].setComponents(c+l,d+f,p+g,y+v).normalize();else if(e===pr)i[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);const e=Tp.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Wr.x=i.normal.x>0?t.max.x:t.min.x,Wr.y=i.normal.y>0?t.max.y:t.min.y,Wr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sf extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wo=new D,bo=new D,oh=new Zt,Gs=new ic,Xr=new qi,ya=new D,ah=new D;class Ap extends Ue{constructor(t=new be,e=new sf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)wo.fromBufferAttribute(e,i-1),bo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=wo.distanceTo(bo);t.setAttribute("lineDistance",new Xt(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(i),Xr.radius+=r,t.ray.intersectsSphere(Xr)===!1)return;oh.copy(i).invert(),Gs.copy(t.ray).applyMatrix4(oh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=h.getX(x),M=h.getX(x+1),E=qr(this,t,Gs,l,p,M,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(d),p=qr(this,t,Gs,l,x,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=qr(this,t,Gs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=qr(this,t,Gs,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qr(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(wo.fromBufferAttribute(a,i),bo.fromBufferAttribute(a,r),e.distanceSqToSegment(wo,bo,ya,ah)>n)return;ya.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ya);if(!(c<t.near||c>t.far))return{distance:c,point:ah.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const lh=new D,ch=new D;class Rp extends Ap{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)lh.fromBufferAttribute(e,i),ch.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lh.distanceTo(ch);t.setAttribute("lineDistance",new Xt(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rf extends Xe{constructor(t=[],e=Hi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Go extends Xe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xr extends Xe{constructor(t,e,n=Wn,i,r,o,a=Be,l=Be,c,h=hi,u=1){if(h!==hi&&h!==Oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Cp extends xr{constructor(t,e=Wn,n=Hi,i,r,o=Be,a=Be,l,c=hi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class of extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sn extends be{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function m(x,g,p,M,E,v,y,w,L,_,S){const C=v/L,A=y/_,U=v/2,F=y/2,N=w/2,G=L+1,Z=_+1;let X=0,tt=0;const H=new D;for(let K=0;K<Z;K++){const et=K*A-F;for(let ft=0;ft<G;ft++){const k=ft*C-U;H[x]=k*M,H[g]=et*E,H[p]=N,c.push(H.x,H.y,H.z),H[x]=0,H[g]=0,H[p]=w>0?1:-1,h.push(H.x,H.y,H.z),u.push(ft/L),u.push(1-K/_),X+=1}}for(let K=0;K<_;K++)for(let et=0;et<L;et++){const ft=f+et+G*K,k=f+et+G*(K+1),W=f+(et+1)+G*(K+1),O=f+(et+1)+G*K;l.push(ft,k,O),l.push(k,W,O),tt+=6}a.addGroup(d,tt,S),d+=tt,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ar extends be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new Ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xn extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*f-o;for(let E=0;E<c;E++){const v=E*u-r;m.push(v,-M,0),x.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const E=M+c*p,v=M+c*(p+1),y=M+1+c*(p+1),w=M+1+c*p;d.push(E,v,w),d.push(v,y,w)}this.setIndex(d),this.setAttribute("position",new Xt(m,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.width,t.height,t.widthSegments,t.heightSegments)}}function Rs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(hh(i))i.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(hh(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Qe(s){const t={};for(let e=0;e<s.length;e++){const n=Rs(s[e]);for(const i in n)t[i]=n[i]}return t}function hh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Lp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function af(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Pp={clone:Rs,merge:Qe};var Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=Lp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Zt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Up extends Ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Eo extends Yi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Np extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fp extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Sa={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(uh(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!uh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function uh(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class zp{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Op=new zp;class rc{constructor(t){this.manager=t!==void 0?t:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}rc.DEFAULT_MATERIAL_NAME="__DEFAULT";const us=new WeakMap;class kp extends rc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Sa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=us.get(o);u===void 0&&(u=[],us.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=mr("img");function l(){h(),e&&e(this);const u=us.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}us.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),Sa.remove(`image:${t}`);const f=us.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}us.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Sa.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Il extends rc{constructor(t){super(t)}load(t,e,n,i){const r=new Xe,o=new kp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class lf extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Bp extends lf{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const wa=new Zt,fh=new D,dh=new D;class Hp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sc,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;fh.setFromMatrixPosition(t.matrixWorld),e.position.copy(fh),dh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(wa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===pr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yr=new D,$r=new de,Nn=new D;class cf extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yr,$r,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,$r,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Yr,$r,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,$r,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _i=new D,ph=new Ot,mh=new Ot;class rn extends cf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Vo extends cf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gp extends Hp{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vp extends lf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Gp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const fs=-90,ds=1;class Wp extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(fs,ds,t,e);i.layers=this.layers,this.add(i);const r=new rn(fs,ds,t,e);r.layers=this.layers,this.add(r);const o=new rn(fs,ds,t,e);o.layers=this.layers,this.add(o);const a=new rn(fs,ds,t,e);a.layers=this.layers,this.add(a);const l=new rn(fs,ds,t,e);l.layers=this.layers,this.add(l);const c=new rn(fs,ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xp extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const gh=new Zt;class To{constructor(t,e,n=0,i=1/0){this.ray=new ic(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,n=[]){return Dl(t,this,n,e),n.sort(xh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Dl(t[i],this,n,e);return n.sort(xh),n}}function xh(s,t){return s.distance-t.distance}function Dl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Dl(r[o],t,e,!0)}}const bc=class bc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};bc.prototype.isMatrix2=!0;let _h=bc;function vh(s,t,e,n){const i=qp(n);switch(e){case Yu:return s*t;case Ho:return s*t/i.components*i.byteLength;case $l:return s*t/i.components*i.byteLength;case Gi:return s*t*2/i.components*i.byteLength;case Kl:return s*t*2/i.components*i.byteLength;case $u:return s*t*3/i.components*i.byteLength;case pn:return s*t*4/i.components*i.byteLength;case Zl:return s*t*4/i.components*i.byteLength;case lo:case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ho:case uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nl:case sl:return Math.max(s,16)*Math.max(t,8)/4;case el:case il:return Math.max(s,8)*Math.max(t,8)/2;case rl:case ol:case ll:case cl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case al:case xo:case hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case dl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case pl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ml:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case gl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case El:case Tl:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _o:case Ll:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(s){switch(s){case on:case Vu:return{byteLength:1,components:1};case fr:case Wu:case wn:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case Wn:case Xl:case In:return{byteLength:4,components:1};case Xu:case qu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gl}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Yp(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
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
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,lm=`#ifdef USE_BUMPMAP
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
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
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
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Bm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#endif`,qm=`uniform sampler2D dfgLUT;
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
}`,Ym=`
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
#endif`,$m=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s0=`#if defined( USE_POINTS_UV )
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
#endif`,r0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
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
#endif`,u0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,x0=`#ifdef USE_NORMALMAP
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
#endif`,_0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D0=`float getShadowMask() {
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
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
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
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`uniform float scale;
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,vg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,yg=`#define TOON
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
}`,Sg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Eg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:$p,alphahash_pars_fragment:Kp,alphamap_fragment:Zp,alphamap_pars_fragment:Jp,alphatest_fragment:Qp,alphatest_pars_fragment:jp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:fm,color_fragment:dm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:xm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:vm,displacementmap_pars_vertex:Mm,displacementmap_vertex:ym,emissivemap_fragment:Sm,emissivemap_pars_fragment:wm,colorspace_fragment:bm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:Am,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:Bm,envmap_vertex:Lm,fog_vertex:Pm,fog_pars_vertex:Im,fog_fragment:Dm,fog_pars_fragment:Um,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Fm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:Om,lights_pars_begin:km,lights_toon_fragment:Hm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:$m,lights_fragment_end:Km,lightprobes_pars_fragment:Zm,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:t0,map_fragment:e0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:s0,metalnessmap_fragment:r0,metalnessmap_pars_fragment:o0,morphinstance_vertex:a0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:h0,morphtarget_vertex:u0,normal_fragment_begin:f0,normal_fragment_maps:d0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:x0,clearcoat_normal_fragment_begin:_0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:M0,iridescence_pars_fragment:y0,opaque_fragment:S0,packing:w0,premultiplied_alpha_fragment:b0,project_vertex:E0,dithering_fragment:T0,dithering_pars_fragment:A0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:P0,shadowmap_vertex:I0,shadowmask_pars_fragment:D0,skinbase_vertex:U0,skinning_pars_vertex:N0,skinning_vertex:F0,skinnormal_vertex:z0,specularmap_fragment:O0,specularmap_pars_fragment:k0,tonemapping_fragment:B0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:V0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:$0,background_frag:K0,backgroundCube_vert:Z0,backgroundCube_frag:J0,cube_vert:Q0,cube_frag:j0,depth_vert:tg,depth_frag:eg,distance_vert:ng,distance_frag:ig,equirect_vert:sg,equirect_frag:rg,linedashed_vert:og,linedashed_frag:ag,meshbasic_vert:lg,meshbasic_frag:cg,meshlambert_vert:hg,meshlambert_frag:ug,meshmatcap_vert:fg,meshmatcap_frag:dg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:xg,meshphysical_vert:_g,meshphysical_frag:vg,meshtoon_vert:Mg,meshtoon_frag:yg,points_vert:Sg,points_frag:wg,shadow_vert:bg,shadow_frag:Eg,sprite_vert:Tg,sprite_frag:Ag},bt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},kn={basic:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Qe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Qe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Qe([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Qe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Qe([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Qe([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Qe([bt.common,bt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Qe([bt.lights,bt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};kn.physical={uniforms:Qe([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Kr={r:0,b:0,g:0},Rg=new Zt,uf=new Yt;uf.set(-1,0,0,0,1,0,0,0,1);function Cg(s,t,e,n,i,r){const o=new zt(0);let a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const v=M.backgroundBlurriness>0;E=t.get(E,v)}return E}function m(M){let E=!1;const v=d(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),E=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,E){const v=d(E);v&&(v.isCubeTexture||v.mapping===Bo)?(c===void 0&&(c=new Me(new Sn(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Rs(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uf),c.material.toneMapped=se.getTransfer(v.colorSpace)!==he,(h!==v||u!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Me(new Xn(2,2),new Ge({name:"BackgroundMaterial",uniforms:Rs(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=se.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(Kr,af(s)),e.buffers.color.setClear(Kr.r,Kr.g,Kr.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Lg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(A,U,F,N,G){let Z=!1;const X=u(A,N,F,U);r!==X&&(r=X,c(r.object)),Z=d(A,N,F,G),Z&&m(A,N,F,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(A,U,F,N),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(A){return s.bindVertexArray(A)}function h(A){return s.deleteVertexArray(A)}function u(A,U,F,N){const G=N.wireframe===!0;let Z=n[U.id];Z===void 0&&(Z={},n[U.id]=Z);const X=A.isInstancedMesh===!0?A.id:0;let tt=Z[X];tt===void 0&&(tt={},Z[X]=tt);let H=tt[F.id];H===void 0&&(H={},tt[F.id]=H);let K=H[G];return K===void 0&&(K=f(l()),H[G]=K),K}function f(A){const U=[],F=[],N=[];for(let G=0;G<e;G++)U[G]=0,F[G]=0,N[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:N,object:A,attributes:{},index:null}}function d(A,U,F,N){const G=r.attributes,Z=U.attributes;let X=0;const tt=F.getAttributes();for(const H in tt)if(tt[H].location>=0){const et=G[H];let ft=Z[H];if(ft===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(ft=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(ft=A.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function m(A,U,F,N){const G={},Z=U.attributes;let X=0;const tt=F.getAttributes();for(const H in tt)if(tt[H].location>=0){let et=Z[H];et===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(et=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(et=A.instanceColor));const ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),G[H]=ft,X++}r.attributes=G,r.attributesNum=X,r.index=N}function x(){const A=r.newAttributes;for(let U=0,F=A.length;U<F;U++)A[U]=0}function g(A){p(A,0)}function p(A,U){const F=r.newAttributes,N=r.enabledAttributes,G=r.attributeDivisors;F[A]=1,N[A]===0&&(s.enableVertexAttribArray(A),N[A]=1),G[A]!==U&&(s.vertexAttribDivisor(A,U),G[A]=U)}function M(){const A=r.newAttributes,U=r.enabledAttributes;for(let F=0,N=U.length;F<N;F++)U[F]!==A[F]&&(s.disableVertexAttribArray(F),U[F]=0)}function E(A,U,F,N,G,Z,X){X===!0?s.vertexAttribIPointer(A,U,F,G,Z):s.vertexAttribPointer(A,U,F,N,G,Z)}function v(A,U,F,N){x();const G=N.attributes,Z=F.getAttributes(),X=U.defaultAttributeValues;for(const tt in Z){const H=Z[tt];if(H.location>=0){let K=G[tt];if(K===void 0&&(tt==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),tt==="instanceColor"&&A.instanceColor&&(K=A.instanceColor)),K!==void 0){const et=K.normalized,ft=K.itemSize,k=t.get(K);if(k===void 0)continue;const W=k.buffer,O=k.type,B=k.bytesPerElement,R=O===s.INT||O===s.UNSIGNED_INT||K.gpuType===Xl;if(K.isInterleavedBufferAttribute){const P=K.data,V=P.stride,j=K.offset;if(P.isInstancedInterleavedBuffer){for(let st=0;st<H.locationSize;st++)p(H.location+st,P.meshPerAttribute);A.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let st=0;st<H.locationSize;st++)g(H.location+st);s.bindBuffer(s.ARRAY_BUFFER,W);for(let st=0;st<H.locationSize;st++)E(H.location+st,ft/H.locationSize,O,et,V*B,(j+ft/H.locationSize*st)*B,R)}else{if(K.isInstancedBufferAttribute){for(let P=0;P<H.locationSize;P++)p(H.location+P,K.meshPerAttribute);A.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let P=0;P<H.locationSize;P++)g(H.location+P);s.bindBuffer(s.ARRAY_BUFFER,W);for(let P=0;P<H.locationSize;P++)E(H.location+P,ft/H.locationSize,O,et,ft*B,ft/H.locationSize*P*B,R)}}else if(X!==void 0){const et=X[tt];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(H.location,et);break;case 3:s.vertexAttrib3fv(H.location,et);break;case 4:s.vertexAttrib4fv(H.location,et);break;default:s.vertexAttrib1fv(H.location,et)}}}}M()}function y(){S();for(const A in n){const U=n[A];for(const F in U){const N=U[F];for(const G in N){const Z=N[G];for(const X in Z)h(Z[X].object),delete Z[X];delete N[G]}}delete n[A]}}function w(A){if(n[A.id]===void 0)return;const U=n[A.id];for(const F in U){const N=U[F];for(const G in N){const Z=N[G];for(const X in Z)h(Z[X].object),delete Z[X];delete N[G]}}delete n[A.id]}function L(A){for(const U in n){const F=n[U];for(const N in F){const G=F[N];if(G[A.id]===void 0)continue;const Z=G[A.id];for(const X in Z)h(Z[X].object),delete Z[X];delete G[A.id]}}}function _(A){for(const U in n){const F=n[U],N=A.isInstancedMesh===!0?A.id:0,G=F[N];if(G!==void 0){for(const Z in G){const X=G[Z];for(const tt in X)h(X[tt].object),delete X[tt];delete G[Z]}delete F[N],Object.keys(F).length===0&&delete n[U]}}}function S(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:S,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Pg(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ig(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==pn&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const _=L===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==on&&L!==In&&!_&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:y,samples:w}}function Dg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ti,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,E=M*4;let v=p.clippingState||null;l.value=v,v=h(m,f,E,d);for(let y=0;y!==E;++y)v[y]=e[y];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=d;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const Ms=4,Ug=6,Ng=20,Fg=256,Vs=new Vo,Mh=new zt;let ba=null,Ea=0,Ta=0,Aa=!1;const zg=new D,Ni=new D;class yh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=zg}=r;ba=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Ea,Ta),this._renderer.xr.enabled=Aa,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:wn,format:pn,colorSpace:vo,depthBuffer:!1},i=Sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Og(r)),this._blurMaterial=Bg(r,t,e),this._ggxMaterial=kg(r,t,e)}return i}_compileMaterial(t){const e=new Me(new be,t);this._renderer.compile(e,Vs)}_sceneToCubeUV(t,e,n,i,r){const l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Mh),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new Sn,new oi({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(Mh),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const y=this._cubeSize;ps(i,v*y,E>2?y:0,y,y),u.setRenderTarget(i),p&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hi||t.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Ms?n-m+Ms:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,ps(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(a,Vs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,ps(t,g,p,3*x,2*x),i.setRenderTarget(t),i.render(a,Vs)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],u=3*h*(i>this._lodMax-Ms?i-this._lodMax+Ms:0),f=4*(this._cubeSize-h);ps(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Vs)}}function Og(s){const t=[],e=[];let n=s;const i=s-Ms+1+Ug;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let p=0;p<u;p++){const M=p%3*2/3-1,E=p>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(v,d*f*p);for(let y=0;y<f;y++){const w=h[y*2]*2-1,L=h[y*2+1]*2-1;p===0?Ni.set(1,L,w):p===1?Ni.set(-w,1,-L):p===2?Ni.set(-w,L,1):p===3?Ni.set(-1,L,-w):p===4?Ni.set(-w,-1,L):Ni.set(w,L,-1),Ni.toArray(x,(p*f+y)*d)}}const g=new be;g.setAttribute("position",new yn(m,d)),g.setAttribute("outputDirection",new yn(x,d)),e.push(new Me(g,null)),n>Ms&&n--}return{lodMeshes:e,sizeLods:t}}function Sh(s,t,e){const n=new Mn(s,t,e);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function kg(s,t,e){return new Ge({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Bg(s,t,e){return new Ge({name:"SphericalGaussianBlur",defines:{SAMPLES:Ng,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function wh(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function bh(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Wo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ff extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sn(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ai});r.uniforms.tEquirect.value=e;const o=new Me(i,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=He),new Wp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function Hg(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Zo||d===Jo)if(t.has(f)){const m=t.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const x=new ff(m.height);return x.fromEquirectangularTexture(s,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,m=d===Zo||d===Jo,x=d===Hi||d===Ts;if(m||x){let g=e.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new yh(s)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const M=f.image;return m&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new yh(s)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Zo?f.mapping=Hi:d===Jo&&(f.mapping=Ts),f}function l(f){let d=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Gg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&bs("WebGLRenderer: "+n+" extension not supported."),i}}}function Vg(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(m===void 0)return;if(d!==null){const M=d.array;x=d.version;for(let E=0,v=M.length;E<v;E+=3){const y=M[E+0],w=M[E+1],L=M[E+2];f.push(y,w,w,L,L,y)}}else{const M=m.array;x=m.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const y=E+0,w=E+1,L=E+2;f.push(y,w,w,L,L,y)}}const g=new(m.count>=65535?tf:ju)(f,1);g.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Wg(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Xg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qg(s,t,e){const n=new WeakMap,i=new pe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var d=C;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const L=new Float32Array(y*w*4*u),_=new Ju(L,y,w,u);_.type=In,_.needsUpdate=!0;const S=v*4;for(let A=0;A<u;A++){const U=p[A],F=M[A],N=E[A],G=y*w*4*A;for(let Z=0;Z<U.count;Z++){const X=Z*S;m===!0&&(i.fromBufferAttribute(U,Z),L[G+X+0]=i.x,L[G+X+1]=i.y,L[G+X+2]=i.z,L[G+X+3]=0),x===!0&&(i.fromBufferAttribute(F,Z),L[G+X+4]=i.x,L[G+X+5]=i.y,L[G+X+6]=i.z,L[G+X+7]=0),g===!0&&(i.fromBufferAttribute(N,Z),L[G+X+8]=i.x,L[G+X+9]=i.y,L[G+X+10]=i.z,L[G+X+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:_,size:new Ot(y,w)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Yg(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const $g={[Fu]:"LINEAR_TONE_MAPPING",[zu]:"REINHARD_TONE_MAPPING",[Ou]:"CINEON_TONE_MAPPING",[ku]:"ACES_FILMIC_TONE_MAPPING",[Hu]:"AGX_TONE_MAPPING",[Wl]:"NEUTRAL_TONE_MAPPING",[Bu]:"CUSTOM_TONE_MAPPING"};function Kg(s,t,e,n,i,r){const o=new Mn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new be;c.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Xt([0,2,0,0,2,0],2));const h=new Up({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Me(c,h),f=new Vo(-1,1,1,-1,0,1);let d=null,m=null,x=!1,g,p=null,M=[],E=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),l!==null&&l.setSize(v,y);for(let w=0;w<M.length;w++){const L=M[w];L.setSize&&L.setSize(v,y)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;const y=o.width,w=o.height;M.length>0&&a===null&&(a=new Mn(y,w,{type:wn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(y,w,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<M.length;L++){const _=M[L];_.setSize&&_.setSize(y,w)}},this.begin=function(v,y){if(x||v.toneMapping===Vn&&M.length===0)return!1;if(p=y,y!==null){const w=y.width,L=y.height;(o.width!==w||o.height!==L)&&this.setSize(w,L)}return E===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Vn,!0},this.hasRenderPass=function(){return E},this.end=function(v,y){v.toneMapping=g,x=!0;let w=o,L=a;for(let _=0;_<M.length;_++){const S=M[_];S.enabled!==!1&&(S.render(v,L,w,y),S.needsSwap!==!1&&(w=L,L=L===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},se.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");const _=$g[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(u,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const df=new Xe,Ul=new xr(1,1),pf=new Ju,mf=new sp,gf=new rf,Eh=[],Th=[],Ah=new Float32Array(16),Rh=new Float32Array(9),Ch=new Float32Array(4);function Ps(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Eh[i];if(r===void 0&&(r=new Float32Array(i),Eh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ne(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Fe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xo(s,t){let e=Th[t];e===void 0&&(e=new Int32Array(t),Th[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Zg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2fv(this.addr,t),Fe(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;s.uniform3fv(this.addr,t),Fe(e,t)}}function jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4fv(this.addr,t),Fe(e,t)}}function tx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ch.set(n),s.uniformMatrix2fv(this.addr,!1,Ch),Fe(e,n)}}function ex(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Rh.set(n),s.uniformMatrix3fv(this.addr,!1,Rh),Fe(e,n)}}function nx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Ah.set(n),s.uniformMatrix4fv(this.addr,!1,Ah),Fe(e,n)}}function ix(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2iv(this.addr,t),Fe(e,t)}}function rx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3iv(this.addr,t),Fe(e,t)}}function ox(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4iv(this.addr,t),Fe(e,t)}}function ax(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function lx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;s.uniform2uiv(this.addr,t),Fe(e,t)}}function cx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;s.uniform3uiv(this.addr,t),Fe(e,t)}}function hx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;s.uniform4uiv(this.addr,t),Fe(e,t)}}function ux(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ul.compareFunction=e.isReversedDepthBuffer()?Ql:Jl,r=Ul):r=df,e.setTexture2D(t||r,i)}function fx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mf,i)}function dx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gf,i)}function px(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pf,i)}function mx(s){switch(s){case 5126:return Zg;case 35664:return Jg;case 35665:return Qg;case 35666:return jg;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return fx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return px}}function gx(s,t){s.uniform1fv(this.addr,t)}function xx(s,t){const e=Ps(t,this.size,2);s.uniform2fv(this.addr,e)}function _x(s,t){const e=Ps(t,this.size,3);s.uniform3fv(this.addr,e)}function vx(s,t){const e=Ps(t,this.size,4);s.uniform4fv(this.addr,e)}function Mx(s,t){const e=Ps(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function yx(s,t){const e=Ps(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sx(s,t){const e=Ps(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wx(s,t){s.uniform1iv(this.addr,t)}function bx(s,t){s.uniform2iv(this.addr,t)}function Ex(s,t){s.uniform3iv(this.addr,t)}function Tx(s,t){s.uniform4iv(this.addr,t)}function Ax(s,t){s.uniform1uiv(this.addr,t)}function Rx(s,t){s.uniform2uiv(this.addr,t)}function Cx(s,t){s.uniform3uiv(this.addr,t)}function Lx(s,t){s.uniform4uiv(this.addr,t)}function Px(s,t,e){const n=this.cache,i=t.length,r=Xo(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ul:o=df;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Ix(s,t,e){const n=this.cache,i=t.length,r=Xo(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||mf,r[o])}function Dx(s,t,e){const n=this.cache,i=t.length,r=Xo(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||gf,r[o])}function Ux(s,t,e){const n=this.cache,i=t.length,r=Xo(e,i);Ne(n,r)||(s.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||pf,r[o])}function Nx(s){switch(s){case 5126:return gx;case 35664:return xx;case 35665:return _x;case 35666:return vx;case 35674:return Mx;case 35675:return yx;case 35676:return Sx;case 5124:case 35670:return wx;case 35667:case 35671:return bx;case 35668:case 35672:return Ex;case 35669:case 35673:return Tx;case 5125:return Ax;case 36294:return Rx;case 36295:return Cx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Ux}}class Fx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mx(e.type)}}class zx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nx(e.type)}}class Ox{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Lh(s,t){s.seq.push(t),s.map[t.id]=t}function kx(s,t,e){const n=s.name,i=n.length;for(Ra.lastIndex=0;;){const r=Ra.exec(n),o=Ra.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lh(e,c===void 0?new Fx(a,s,t):new zx(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ox(a),Lh(e,u)),e=u}}}class po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);kx(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ph(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Bx=37297;let Hx=0;function Gx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ih=new Yt;function Vx(s){se._getMatrix(Ih,se.workingColorSpace,s);const t=`mat3( ${Ih.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(s)){case Mo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Dh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Gx(s.getShaderSource(t),a)}else return r}function Wx(s,t){const e=Vx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Xx={[Fu]:"Linear",[zu]:"Reinhard",[Ou]:"Cineon",[ku]:"ACESFilmic",[Hu]:"AgX",[Wl]:"Neutral",[Bu]:"Custom"};function qx(s,t){const e=Xx[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zr=new D;function Yx(){se.getLuminanceCoefficients(Zr);const s=Zr.x.toFixed(4),t=Zr.y.toFixed(4),e=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(nr).join(`
`)}function Kx(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function nr(s){return s!==""}function Uh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(s){return s.replace(Jx,jx)}const Qx=new Map;function jx(s,t){let e=Qt[t];if(e===void 0){const n=Qx.get(t);if(n!==void 0)e=Qt[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nl(e)}const t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fh(s){return s.replace(t_,e_)}function e_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function zh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const n_={[ao]:"SHADOWMAP_TYPE_PCF",[er]:"SHADOWMAP_TYPE_VSM"};function i_(s){return n_[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const s_={[Hi]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[Bo]:"ENVMAP_TYPE_CUBE_UV"};function r_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":s_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const o_={[Ts]:"ENVMAP_MODE_REFRACTION"};function a_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":o_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const l_={[Vl]:"ENVMAP_BLENDING_MULTIPLY",[yd]:"ENVMAP_BLENDING_MIX",[Sd]:"ENVMAP_BLENDING_ADD"};function c_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":l_[s.combine]||"ENVMAP_BLENDING_NONE"}function h_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function u_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=i_(e),c=r_(e),h=a_(e),u=c_(e),f=h_(e),d=$x(e),m=Kx(r),x=i.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(nr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(nr).join(`
`),p.length>0&&(p+=`
`)):(g=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),p=[zh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Wx("linearToOutputTexel",e.outputColorSpace),Yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(nr).join(`
`)),o=Nl(o),o=Uh(o,e),o=Nh(o,e),a=Nl(a),a=Uh(a,e),a=Nh(a,e),o=Fh(o),a=Fh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Oc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+g+o,v=M+p+a,y=Ph(i,i.VERTEX_SHADER,E),w=Ph(i,i.FRAGMENT_SHADER,v);i.attachShader(x,y),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function L(A){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(y)||"",N=i.getShaderInfoLog(w)||"",G=U.trim(),Z=F.trim(),X=N.trim();let tt=!0,H=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,y,w);else{const K=Dh(i,y,"vertex"),et=Dh(i,w,"fragment");re("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+K+`
`+et)}else G!==""?Wt("WebGLProgram: Program Info Log:",G):(Z===""||X==="")&&(H=!1);H&&(A.diagnostics={runnable:tt,programLog:G,vertexShader:{log:Z,prefix:g},fragmentShader:{log:X,prefix:p}})}i.deleteShader(y),i.deleteShader(w),_=new po(i,x),S=Zx(i,x)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,Bx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=w,this}let f_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new p_(t),e.set(t,n)),n}}class p_{constructor(t){this.id=f_++,this.code=t,this.usedTimes=0}}function m_(s){return s===Gi||s===xo||s===_o}function g_(s,t,e,n,i,r){const o=new ec,a=new d_,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,S,C,A,U,F){const N=A.fog,G=U.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,tt=t.get(_.envMap||Z,X),H=tt&&tt.mapping===Bo?tt.image.height:null,K=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const et=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=et!==void 0?et.length:0;let k=0;G.morphAttributes.position!==void 0&&(k=1),G.morphAttributes.normal!==void 0&&(k=2),G.morphAttributes.color!==void 0&&(k=3);let W,O,B,R;if(K){const ge=kn[K];W=ge.vertexShader,O=ge.fragmentShader}else{W=_.vertexShader,O=_.fragmentShader;const ge=a.getVertexShaderStage(_),ae=a.getFragmentShaderStage(_);a.update(_,ge,ae),B=ge.id,R=ae.id}const P=s.getRenderTarget(),V=s.state.buffers.depth.getReversed(),j=U.isInstancedMesh===!0,st=U.isBatchedMesh===!0,dt=!!_.map,xt=!!_.matcap,Et=!!tt,Q=!!_.aoMap,lt=!!_.lightMap,mt=!!_.bumpMap&&_.wireframe===!1,It=!!_.normalMap,ye=!!_.displacementMap,Te=!!_.emissiveMap,Se=!!_.metalnessMap,Ce=!!_.roughnessMap,$=_.anisotropy>0,qe=_.clearcoat>0,ce=_.dispersion>0,z=_.retroreflectivity>0,b=_.iridescence>0,J=_.sheen>0,rt=_.transmission>0,at=$&&!!_.anisotropyMap,gt=qe&&!!_.clearcoatMap,_t=qe&&!!_.clearcoatNormalMap,ct=qe&&!!_.clearcoatRoughnessMap,ut=b&&!!_.iridescenceMap,vt=b&&!!_.iridescenceThicknessMap,kt=J&&!!_.sheenColorMap,wt=J&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,Bt=!!_.specularColorMap,Vt=!!_.specularIntensityMap,Kt=rt&&!!_.transmissionMap,Y=rt&&!!_.thicknessMap,yt=!!_.gradientMap,ht=!!_.alphaMap,St=_.alphaTest>0,Rt=!!_.alphaHash,pt=!!_.extensions;let Gt=Vn;_.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Gt=s.toneMapping);const Nt={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:W,fragmentShader:O,defines:_.defines,customVertexShaderID:B,customFragmentShaderID:R,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:st,batchingColor:st&&U._colorsTexture!==null,instancing:j,instancingColor:j&&U.instanceColor!==null,instancingMorph:j&&U.morphTexture!==null,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:dt,matcap:xt,envMap:Et,envMapMode:Et&&tt.mapping,envMapCubeUVHeight:H,aoMap:Q,lightMap:lt,bumpMap:mt,normalMap:It,displacementMap:ye,emissiveMap:Te,normalMapObjectSpace:It&&_.normalMapType===Ed,normalMapTangentSpace:It&&_.normalMapType===Pl,packedNormalMap:It&&_.normalMapType===Pl&&m_(_.normalMap.format),metalnessMap:Se,roughnessMap:Ce,anisotropy:$,anisotropyMap:at,clearcoat:qe,clearcoatMap:gt,clearcoatNormalMap:_t,clearcoatRoughnessMap:ct,dispersion:ce,retroreflection:z,iridescence:b,iridescenceMap:ut,iridescenceThicknessMap:vt,sheen:J,sheenColorMap:kt,sheenRoughnessMap:wt,specularMap:Mt,specularColorMap:Bt,specularIntensityMap:Vt,transmission:rt,transmissionMap:Kt,thicknessMap:Y,gradientMap:yt,opaque:_.transparent===!1&&_.blending===sr&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:St,alphaHash:Rt,combine:_.combine,mapUv:dt&&m(_.map.channel),aoMapUv:Q&&m(_.aoMap.channel),lightMapUv:lt&&m(_.lightMap.channel),bumpMapUv:mt&&m(_.bumpMap.channel),normalMapUv:It&&m(_.normalMap.channel),displacementMapUv:ye&&m(_.displacementMap.channel),emissiveMapUv:Te&&m(_.emissiveMap.channel),metalnessMapUv:Se&&m(_.metalnessMap.channel),roughnessMapUv:Ce&&m(_.roughnessMap.channel),anisotropyMapUv:at&&m(_.anisotropyMap.channel),clearcoatMapUv:gt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:wt&&m(_.sheenRoughnessMap.channel),specularMapUv:Mt&&m(_.specularMap.channel),specularColorMapUv:Bt&&m(_.specularColorMap.channel),specularIntensityMapUv:Vt&&m(_.specularIntensityMap.channel),transmissionMapUv:Kt&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:ht&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(It||$),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(dt||ht),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&It===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:V,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:k,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gt,decodeVideoTexture:dt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Te&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hn,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Nt.vertexUv1s=l.has(1),Nt.vertexUv2s=l.has(2),Nt.vertexUv3s=l.has(3),l.clear(),Nt}function g(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(S,_),M(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const S=d[_.type];let C;if(S){const A=kn[S];C=Pp.clone(A.uniforms)}else C=_.uniforms;return C}function v(_,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new u_(s,S,_,i),c.push(C),h.set(S,C)),C}function y(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:L}}function x_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function __(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Oh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function kh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let M=s[t];return M===void 0?(M={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},s[t]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=m,M.materialVariant=o(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=g,M.group=p),t++,M}function l(f,d,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);const E=a(f,d,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function c(f,d,m,x,g,p){const M=a(f,d,m,x,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):e.unshift(M)}function h(f,d){e.length>1&&e.sort(f||__),n.length>1&&n.sort(d||Oh),i.length>1&&i.sort(d||Oh)}function u(){for(let f=t,d=s.length;f<d;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function v_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new kh,s.set(n,[o])):i>=r.length?(o=new kh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function M_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new zt};break;case"SpotLight":e={position:new D,direction:new D,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function y_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let S_=0;function w_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function b_(s){const t=new M_,e=y_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new Zt,o=new Zt;function a(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,E=0,v=0,y=0,w=0,L=0,_=0,S=0,C=0;c.sort(w_);for(let U=0,F=c.length;U<F;U++){const N=c[U],G=N.color,Z=N.intensity,X=N.distance;let tt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Gi?tt=N.shadow.map.texture:tt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=G.r*Z,u+=G.g*Z,f+=G.b*Z;else if(N.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(N.sh.coefficients[H],Z);C++}else if(N.isSunLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,et=e.get(N);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=et,n.sunShadowMap[m]=tt;const ft=K.getViewportCount();for(let k=0;k<ft;k++)n.sunShadowMatrix[x+k]=K.getMatrix(k),n.sunShadowCascade[x+k]=K._cascadeData[k];x+=ft,m++}n.sun[d]=H,d++}else if(N.isDirectionalLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,et=e.get(N);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.directionalShadow[g]=et,n.directionalShadowMap[g]=tt,n.directionalShadowMatrix[g]=N.shadow.matrix,y++}n.directional[g]=H,g++}else if(N.isSpotLight){const H=t.get(N);H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(G).multiplyScalar(Z),H.distance=X,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,n.spot[M]=H;const K=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,K.updateMatrices(N),N.castShadow&&S++),n.spotLightMatrix[M]=K.matrix,N.castShadow){const et=e.get(N);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,n.spotShadow[M]=et,n.spotShadowMap[M]=tt,L++}M++}else if(N.isRectAreaLight){const H=t.get(N);H.color.copy(G).multiplyScalar(Z),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=H,E++}else if(N.isPointLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity),H.distance=N.distance,H.decay=N.decay,N.castShadow){const K=N.shadow,et=e.get(N);et.shadowIntensity=K.intensity,et.shadowBias=K.bias,et.shadowNormalBias=K.normalBias,et.shadowRadius=K.radius,et.shadowMapSize=K.mapSize,et.shadowCameraNear=K.camera.near,et.shadowCameraFar=K.camera.far,n.pointShadow[p]=et,n.pointShadowMap[p]=tt,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=H,p++}else if(N.isHemisphereLight){const H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(Z),H.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[v]=H,v++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.sunLength!==d||A.directionalLength!==g||A.pointLength!==p||A.spotLength!==M||A.rectAreaLength!==E||A.hemiLength!==v||A.numSunShadows!==m||A.numDirectionalShadows!==y||A.numPointShadows!==w||A.numSpotShadows!==L||A.numSpotMaps!==_||A.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,A.sunLength=d,A.directionalLength=g,A.pointLength=p,A.spotLength=M,A.rectAreaLength=E,A.hemiLength=v,A.numSunShadows=m,A.numDirectionalShadows=y,A.numPointShadows=w,A.numSpotShadows=L,A.numSpotMaps=_,A.numLightProbes=C,n.version=S_++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=0;const p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const v=c[M];if(v.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),u++}else if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(v.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Bh(s){const t=new b_(s),e=[],n=[],i=[];function r(f){u.camera=f,e.length=0,n.length=0,i.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function E_(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Bh(s),t.set(i,[a])):r>=o.length?(a=new Bh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`,R_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],C_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Hh=new Zt,Ws=new D,Ca=new D;function L_(s,t,e){let n=new sc;const i=new Ot,r=new Ot,o=new pe,a=new Np,l=new Fp,c={},h=e.maxTextureSize,u={[Bi]:an,[an]:Bi,[Hn]:Hn},f=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new be;m.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Me(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let p=this.type;this.render=function(w,L,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===nd&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ao);const S=s.getRenderTarget(),C=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=p!==this.type;F&&L.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(G=>G.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,G=w.length;N<G;N++){const Z=w[N],X=Z.shadow;if(X===void 0){Wt("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const tt=X.getFrameExtents();i.multiply(tt),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,X.mapSize.y=r.y));const H=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=H,X.map===null||F===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===er){if(Z.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Mn(i.x,i.y,{format:Gi,type:wn,minFilter:He,magFilter:He,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new xr(i.x,i.y,In),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=hi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Be,X.map.depthTexture.magFilter=Be}else Z.isPointLight?(X.map=new ff(i.x),X.map.depthTexture=new Cp(i.x,Wn)):(X.map=new Mn(i.x,i.y),X.map.depthTexture=new xr(i.x,i.y,Wn)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=hi,this.type===ao?(X.map.depthTexture.compareFunction=H?Ql:Jl,X.map.depthTexture.minFilter=He,X.map.depthTexture.magFilter=He):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Be,X.map.depthTexture.magFilter=Be);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);const K=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Z.isPointLight!==!0&&X.updateMatrices(Z,_);for(let et=0;et<K;et++){const ft=X.getCamera(et);if(Z.isPointLight){const k=X.camera,W=X.matrix,O=Z.distance||k.far;O!==k.far&&(k.far=O,k.updateProjectionMatrix()),Ws.setFromMatrixPosition(Z.matrixWorld),k.position.copy(Ws),Ca.copy(k.position),Ca.add(R_[et]),k.up.copy(C_[et]),k.lookAt(Ca),k.updateMatrixWorld(),W.makeTranslation(-Ws.x,-Ws.y,-Ws.z),Hh.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Hh,k.coordinateSystem,k.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,et),s.clear();else{et===0&&(s.setRenderTarget(X.map),s.clear());const k=X.getViewport(et);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),U.viewport(o)}n=X.getFrustum(et),v(L,_,ft,Z,this.type)}X.isPointLightShadow!==!0&&this.type===er&&M(X,_),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,C,A)};function M(w,L){const _=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Mn(i.x,i.y,{format:Gi,type:wn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(L,null,_,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(L,null,_,d,x,null)}function E(w,L,_,S){let C=null;const A=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)C=A;else if(C=_.isPointLight===!0?l:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=C.uuid,F=L.uuid;let N=c[U];N===void 0&&(N={},c[U]=N);let G=N[F];G===void 0&&(G=C.clone(),N[F]=G,L.addEventListener("dispose",y)),C=G}if(C.visible=L.visible,C.wireframe=L.wireframe,S===er?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:u[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=s.properties.get(C);U.light=_}return C}function v(w,L,_,S,C){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===er)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const F=t.update(w),N=w.material;if(Array.isArray(N)){const G=F.groups;for(let Z=0,X=G.length;Z<X;Z++){const tt=G[Z],H=N[tt.materialIndex];if(H&&H.visible){const K=E(w,H,S,C);w.onBeforeShadow(s,w,L,_,F,K,tt),s.renderBufferDirect(_,null,F,K,w,tt),w.onAfterShadow(s,w,L,_,F,K,tt)}}}else if(N.visible){const G=E(w,N,S,C);w.onBeforeShadow(s,w,L,_,F,G,null),s.renderBufferDirect(_,null,F,G,w,null),w.onAfterShadow(s,w,L,_,F,G,null)}}const U=w.children;for(let F=0,N=U.length;F<N;F++)v(U[F],L,_,S,C)}function y(w){w.target.removeEventListener("dispose",y);for(const _ in c){const S=c[_],C=w.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function P_(s,t){function e(){let Y=!1;const yt=new pe;let ht=null;const St=new pe(0,0,0,0);return{setMask:function(Rt){ht!==Rt&&!Y&&(s.colorMask(Rt,Rt,Rt,Rt),ht=Rt)},setLocked:function(Rt){Y=Rt},setClear:function(Rt,pt,Gt,Nt,ge){ge===!0&&(Rt*=Nt,pt*=Nt,Gt*=Nt),yt.set(Rt,pt,Gt,Nt),St.equals(yt)===!1&&(s.clearColor(Rt,pt,Gt,Nt),St.copy(yt))},reset:function(){Y=!1,ht=null,St.set(-1,0,0,0)}}}function n(){let Y=!1,yt=!1,ht=null,St=null,Rt=null;return{setReversed:function(pt){if(yt!==pt){const Gt=t.get("EXT_clip_control");pt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),yt=pt;const Nt=Rt;Rt=null,this.setClear(Nt)}},getReversed:function(){return yt},setTest:function(pt){pt?P(s.DEPTH_TEST):V(s.DEPTH_TEST)},setMask:function(pt){ht!==pt&&!Y&&(s.depthMask(pt),ht=pt)},setFunc:function(pt){if(yt&&(pt=Fd[pt]),St!==pt){switch(pt){case qa:s.depthFunc(s.NEVER);break;case Ya:s.depthFunc(s.ALWAYS);break;case $a:s.depthFunc(s.LESS);break;case ur:s.depthFunc(s.LEQUAL);break;case Ka:s.depthFunc(s.EQUAL);break;case Za:s.depthFunc(s.GEQUAL);break;case Ja:s.depthFunc(s.GREATER);break;case Qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}St=pt}},setLocked:function(pt){Y=pt},setClear:function(pt){Rt!==pt&&(Rt=pt,yt&&(pt=1-pt),s.clearDepth(pt))},reset:function(){Y=!1,ht=null,St=null,Rt=null,yt=!1}}}function i(){let Y=!1,yt=null,ht=null,St=null,Rt=null,pt=null,Gt=null,Nt=null,ge=null;return{setTest:function(ae){Y||(ae?P(s.STENCIL_TEST):V(s.STENCIL_TEST))},setMask:function(ae){yt!==ae&&!Y&&(s.stencilMask(ae),yt=ae)},setFunc:function(ae,En,Dn){(ht!==ae||St!==En||Rt!==Dn)&&(s.stencilFunc(ae,En,Dn),ht=ae,St=En,Rt=Dn)},setOp:function(ae,En,Dn){(pt!==ae||Gt!==En||Nt!==Dn)&&(s.stencilOp(ae,En,Dn),pt=ae,Gt=En,Nt=Dn)},setLocked:function(ae){Y=ae},setClear:function(ae){ge!==ae&&(s.clearStencil(ae),ge=ae)},reset:function(){Y=!1,yt=null,ht=null,St=null,Rt=null,pt=null,Gt=null,Nt=null,ge=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,v=null,y=null,w=null,L=null,_=new zt(0,0,0),S=0,C=!1,A=null,U=null,F=null,N=null,G=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,tt=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=tt>=2);let K=null,et={};const ft=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),W=new pe().fromArray(ft),O=new pe().fromArray(k);function B(Y,yt,ht,St){const Rt=new Uint8Array(4),pt=s.createTexture();s.bindTexture(Y,pt),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<ht;Gt++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(yt,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,Rt):s.texImage2D(yt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Rt);return pt}const R={};R[s.TEXTURE_2D]=B(s.TEXTURE_2D,s.TEXTURE_2D,1),R[s.TEXTURE_CUBE_MAP]=B(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[s.TEXTURE_2D_ARRAY]=B(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),R[s.TEXTURE_3D]=B(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(s.DEPTH_TEST),o.setFunc(ur),mt(!1),It(Nc),P(s.CULL_FACE),Q(ai);function P(Y){h[Y]!==!0&&(s.enable(Y),h[Y]=!0)}function V(Y){h[Y]!==!1&&(s.disable(Y),h[Y]=!1)}function j(Y,yt){return f[Y]!==yt?(s.bindFramebuffer(Y,yt),f[Y]=yt,Y===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=yt),Y===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=yt),!0):!1}function st(Y,yt){let ht=m,St=!1;if(Y){ht=d.get(yt),ht===void 0&&(ht=[],d.set(yt,ht));const Rt=Y.textures;if(ht.length!==Rt.length||ht[0]!==s.COLOR_ATTACHMENT0){for(let pt=0,Gt=Rt.length;pt<Gt;pt++)ht[pt]=s.COLOR_ATTACHMENT0+pt;ht.length=Rt.length,St=!0}}else ht[0]!==s.BACK&&(ht[0]=s.BACK,St=!0);St&&s.drawBuffers(ht)}function dt(Y){return x!==Y?(s.useProgram(Y),x=Y,!0):!1}const xt={[_s]:s.FUNC_ADD,[sd]:s.FUNC_SUBTRACT,[rd]:s.FUNC_REVERSE_SUBTRACT};xt[od]=s.MIN,xt[ad]=s.MAX;const Et={[ld]:s.ZERO,[cd]:s.ONE,[hd]:s.SRC_COLOR,[Uu]:s.SRC_ALPHA,[gd]:s.SRC_ALPHA_SATURATE,[pd]:s.DST_COLOR,[fd]:s.DST_ALPHA,[ud]:s.ONE_MINUS_SRC_COLOR,[Nu]:s.ONE_MINUS_SRC_ALPHA,[md]:s.ONE_MINUS_DST_COLOR,[dd]:s.ONE_MINUS_DST_ALPHA,[xd]:s.CONSTANT_COLOR,[_d]:s.ONE_MINUS_CONSTANT_COLOR,[vd]:s.CONSTANT_ALPHA,[Md]:s.ONE_MINUS_CONSTANT_ALPHA};function Q(Y,yt,ht,St,Rt,pt,Gt,Nt,ge,ae){if(Y===ai){g===!0&&(V(s.BLEND),g=!1);return}if(g===!1&&(P(s.BLEND),g=!0),Y!==id){if(Y!==p||ae!==C){if((M!==_s||y!==_s)&&(s.blendEquation(s.FUNC_ADD),M=_s,y=_s),ae)switch(Y){case sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xa:s.blendFunc(s.ONE,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:re("WebGLState: Invalid blending: ",Y);break}else switch(Y){case sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fc:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",Y);break}E=null,v=null,w=null,L=null,_.set(0,0,0),S=0,p=Y,C=ae}return}Rt=Rt||yt,pt=pt||ht,Gt=Gt||St,(yt!==M||Rt!==y)&&(s.blendEquationSeparate(xt[yt],xt[Rt]),M=yt,y=Rt),(ht!==E||St!==v||pt!==w||Gt!==L)&&(s.blendFuncSeparate(Et[ht],Et[St],Et[pt],Et[Gt]),E=ht,v=St,w=pt,L=Gt),(Nt.equals(_)===!1||ge!==S)&&(s.blendColor(Nt.r,Nt.g,Nt.b,ge),_.copy(Nt),S=ge),p=Y,C=!1}function lt(Y,yt){Y.side===Hn?V(s.CULL_FACE):P(s.CULL_FACE);let ht=Y.side===an;yt&&(ht=!ht),mt(ht),Y.blending===sr&&Y.transparent===!1?Q(ai):Q(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const St=Y.stencilWrite;a.setTest(St),St&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Te(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?P(s.SAMPLE_ALPHA_TO_COVERAGE):V(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(Y){A!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),A=Y)}function It(Y){Y!==td?(P(s.CULL_FACE),Y!==U&&(Y===Nc?s.cullFace(s.BACK):Y===ed?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):V(s.CULL_FACE),U=Y}function ye(Y){Y!==F&&(X&&s.lineWidth(Y),F=Y)}function Te(Y,yt,ht){Y?(P(s.POLYGON_OFFSET_FILL),(N!==yt||G!==ht)&&(N=yt,G=ht,o.getReversed()&&(yt=-yt),s.polygonOffset(yt,ht))):V(s.POLYGON_OFFSET_FILL)}function Se(Y){Y?P(s.SCISSOR_TEST):V(s.SCISSOR_TEST)}function Ce(Y){Y===void 0&&(Y=s.TEXTURE0+Z-1),K!==Y&&(s.activeTexture(Y),K=Y)}function $(Y,yt,ht){ht===void 0&&(K===null?ht=s.TEXTURE0+Z-1:ht=K);let St=et[ht];St===void 0&&(St={type:void 0,texture:void 0},et[ht]=St),(St.type!==Y||St.texture!==yt)&&(K!==ht&&(s.activeTexture(ht),K=ht),s.bindTexture(Y,yt||R[Y]),St.type=Y,St.texture=yt)}function qe(){const Y=et[K];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ce(){try{s.compressedTexImage2D(...arguments)}catch(Y){re("WebGLState:",Y)}}function z(){try{s.compressedTexImage3D(...arguments)}catch(Y){re("WebGLState:",Y)}}function b(){try{s.texSubImage2D(...arguments)}catch(Y){re("WebGLState:",Y)}}function J(){try{s.texSubImage3D(...arguments)}catch(Y){re("WebGLState:",Y)}}function rt(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){re("WebGLState:",Y)}}function at(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){re("WebGLState:",Y)}}function gt(){try{s.texStorage2D(...arguments)}catch(Y){re("WebGLState:",Y)}}function _t(){try{s.texStorage3D(...arguments)}catch(Y){re("WebGLState:",Y)}}function ct(){try{s.texImage2D(...arguments)}catch(Y){re("WebGLState:",Y)}}function ut(){try{s.texImage3D(...arguments)}catch(Y){re("WebGLState:",Y)}}function vt(Y){return u[Y]!==void 0?u[Y]:s.getParameter(Y)}function kt(Y,yt){u[Y]!==yt&&(s.pixelStorei(Y,yt),u[Y]=yt)}function wt(Y){W.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),W.copy(Y))}function Mt(Y){O.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),O.copy(Y))}function Bt(Y,yt){let ht=c.get(yt);ht===void 0&&(ht=new WeakMap,c.set(yt,ht));let St=ht.get(Y);St===void 0&&(St=s.getUniformBlockIndex(yt,Y.name),ht.set(Y,St))}function Vt(Y,yt){const St=c.get(yt).get(Y);l.get(yt)!==St&&(s.uniformBlockBinding(yt,St,Y.__bindingPointIndex),l.set(yt,St))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},K=null,et={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,v=null,y=null,w=null,L=null,_=new zt(0,0,0),S=0,C=!1,A=null,U=null,F=null,N=null,G=null,W.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:V,bindFramebuffer:j,drawBuffers:st,useProgram:dt,setBlending:Q,setMaterial:lt,setFlipSided:mt,setCullFace:It,setLineWidth:ye,setPolygonOffset:Te,setScissorTest:Se,activeTexture:Ce,bindTexture:$,unbindTexture:qe,compressedTexImage2D:ce,compressedTexImage3D:z,texImage2D:ct,texImage3D:ut,pixelStorei:kt,getParameter:vt,updateUBOMapping:Bt,uniformBlockBinding:Vt,texStorage2D:gt,texStorage3D:_t,texSubImage2D:b,texSubImage3D:J,compressedTexSubImage2D:rt,compressedTexSubImage3D:at,scissor:wt,viewport:Mt,reset:Kt}}function I_(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(z,b){return m?new OffscreenCanvas(z,b):mr("canvas")}function g(z,b,J){let rt=1;const at=ce(z);if((at.width>J||at.height>J)&&(rt=J/Math.max(at.width,at.height)),rt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const gt=Math.floor(rt*at.width),_t=Math.floor(rt*at.height);f===void 0&&(f=x(gt,_t));const ct=b?x(gt,_t):f;return ct.width=gt,ct.height=_t,ct.getContext("2d").drawImage(z,0,0,gt,_t),Wt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+gt+"x"+_t+")."),ct}else return"data"in z&&Wt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),z;return z}function p(z){return z.generateMipmaps}function M(z){s.generateMipmap(z)}function E(z){return z.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?s.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(z,b,J,rt,at,gt=!1){if(z!==null){if(s[z]!==void 0)return s[z];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let _t;rt&&(_t=t.get("EXT_texture_norm16"),_t||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=b;if(b===s.RED&&(J===s.FLOAT&&(ct=s.R32F),J===s.HALF_FLOAT&&(ct=s.R16F),J===s.UNSIGNED_BYTE&&(ct=s.R8),J===s.UNSIGNED_SHORT&&_t&&(ct=_t.R16_EXT),J===s.SHORT&&_t&&(ct=_t.R16_SNORM_EXT)),b===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ct=s.R8UI),J===s.UNSIGNED_SHORT&&(ct=s.R16UI),J===s.UNSIGNED_INT&&(ct=s.R32UI),J===s.BYTE&&(ct=s.R8I),J===s.SHORT&&(ct=s.R16I),J===s.INT&&(ct=s.R32I)),b===s.RG&&(J===s.FLOAT&&(ct=s.RG32F),J===s.HALF_FLOAT&&(ct=s.RG16F),J===s.UNSIGNED_BYTE&&(ct=s.RG8),J===s.UNSIGNED_SHORT&&_t&&(ct=_t.RG16_EXT),J===s.SHORT&&_t&&(ct=_t.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ct=s.RG8UI),J===s.UNSIGNED_SHORT&&(ct=s.RG16UI),J===s.UNSIGNED_INT&&(ct=s.RG32UI),J===s.BYTE&&(ct=s.RG8I),J===s.SHORT&&(ct=s.RG16I),J===s.INT&&(ct=s.RG32I)),b===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),J===s.UNSIGNED_INT&&(ct=s.RGB32UI),J===s.BYTE&&(ct=s.RGB8I),J===s.SHORT&&(ct=s.RGB16I),J===s.INT&&(ct=s.RGB32I)),b===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),J===s.UNSIGNED_INT&&(ct=s.RGBA32UI),J===s.BYTE&&(ct=s.RGBA8I),J===s.SHORT&&(ct=s.RGBA16I),J===s.INT&&(ct=s.RGBA32I)),b===s.RGB&&(J===s.UNSIGNED_SHORT&&_t&&(ct=_t.RGB16_EXT),J===s.SHORT&&_t&&(ct=_t.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ct=s.R11F_G11F_B10F)),b===s.RGBA){const ut=gt?Mo:se.getTransfer(at);J===s.FLOAT&&(ct=s.RGBA32F),J===s.HALF_FLOAT&&(ct=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ct=ut===he?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&_t&&(ct=_t.RGBA16_EXT),J===s.SHORT&&_t&&(ct=_t.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function y(z,b){let J;return z?b===null||b===Wn||b===dr?J=s.DEPTH24_STENCIL8:b===In?J=s.DEPTH32F_STENCIL8:b===fr&&(J=s.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wn||b===dr?J=s.DEPTH_COMPONENT24:b===In?J=s.DEPTH_COMPONENT32F:b===fr&&(J=s.DEPTH_COMPONENT16),J}function w(z,b){return p(z)===!0||z.isFramebufferTexture&&z.minFilter!==Be&&z.minFilter!==He?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function L(z){const b=z.target;b.removeEventListener("dispose",L),S(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function _(z){const b=z.target;b.removeEventListener("dispose",_),A(b)}function S(z){const b=n.get(z);if(b.__webglInit===void 0)return;const J=z.source,rt=d.get(J);if(rt){const at=rt[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&C(z),Object.keys(rt).length===0&&d.delete(J)}n.remove(z)}function C(z){const b=n.get(z);s.deleteTexture(b.__webglTexture);const J=z.source,rt=d.get(J);delete rt[b.__cacheKey],o.memory.textures--}function A(z){const b=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(b.__webglFramebuffer[rt]))for(let at=0;at<b.__webglFramebuffer[rt].length;at++)s.deleteFramebuffer(b.__webglFramebuffer[rt][at]);else s.deleteFramebuffer(b.__webglFramebuffer[rt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[rt])}else{if(Array.isArray(b.__webglFramebuffer))for(let rt=0;rt<b.__webglFramebuffer.length;rt++)s.deleteFramebuffer(b.__webglFramebuffer[rt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let rt=0;rt<b.__webglColorRenderbuffer.length;rt++)b.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[rt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const J=z.textures;for(let rt=0,at=J.length;rt<at;rt++){const gt=n.get(J[rt]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(J[rt])}n.remove(z)}let U=0;function F(){U=0}function N(){return U}function G(z){U=z}function Z(){const z=U;return z>=i.maxTextures&&Wt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,z}function X(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function tt(z,b){const J=n.get(z);if(z.isVideoTexture&&$(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&J.__version!==z.version){const rt=z.image;if(rt===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(J,z,b);return}}else z.isExternalTexture&&(J.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+b)}function H(z,b){const J=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&J.__version!==z.version){V(J,z,b);return}else z.isExternalTexture&&(J.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+b)}function K(z,b){const J=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&J.__version!==z.version){V(J,z,b);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+b)}function et(z,b){const J=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&J.__version!==z.version){j(J,z,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+b)}const ft={[ja]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[tl]:s.MIRRORED_REPEAT},k={[Be]:s.NEAREST,[wd]:s.NEAREST_MIPMAP_NEAREST,[wr]:s.NEAREST_MIPMAP_LINEAR,[He]:s.LINEAR,[Qo]:s.LINEAR_MIPMAP_NEAREST,[Ri]:s.LINEAR_MIPMAP_LINEAR},W={[Ad]:s.NEVER,[Id]:s.ALWAYS,[Rd]:s.LESS,[Jl]:s.LEQUAL,[Cd]:s.EQUAL,[Ql]:s.GEQUAL,[Ld]:s.GREATER,[Pd]:s.NOTEQUAL};function O(z,b){if(b.type===In&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===He||b.magFilter===Qo||b.magFilter===wr||b.magFilter===Ri||b.minFilter===He||b.minFilter===Qo||b.minFilter===wr||b.minFilter===Ri)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(z,s.TEXTURE_WRAP_S,ft[b.wrapS]),s.texParameteri(z,s.TEXTURE_WRAP_T,ft[b.wrapT]),(z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY)&&s.texParameteri(z,s.TEXTURE_WRAP_R,ft[b.wrapR]),s.texParameteri(z,s.TEXTURE_MAG_FILTER,k[b.magFilter]),s.texParameteri(z,s.TEXTURE_MIN_FILTER,k[b.minFilter]),b.compareFunction&&(s.texParameteri(z,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(z,s.TEXTURE_COMPARE_FUNC,W[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Be||b.minFilter!==wr&&b.minFilter!==Ri||b.type===In&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(z,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function B(z,b){let J=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",L));const rt=b.source;let at=d.get(rt);at===void 0&&(at={},d.set(rt,at));const gt=X(b);if(gt!==z.__cacheKey){at[gt]===void 0&&(at[gt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),at[gt].usedTimes++;const _t=at[z.__cacheKey];_t!==void 0&&(at[z.__cacheKey].usedTimes--,_t.usedTimes===0&&C(b)),z.__cacheKey=gt,z.__webglTexture=at[gt].texture}return J}function R(z,b,J){return Math.floor(Math.floor(z/J)/b)}function P(z,b,J,rt){const gt=z.updateRanges;if(gt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,J,rt,b.data);else{gt.sort((kt,wt)=>kt.start-wt.start);let _t=0;for(let kt=1;kt<gt.length;kt++){const wt=gt[_t],Mt=gt[kt],Bt=wt.start+wt.count,Vt=R(Mt.start,b.width,4),Kt=R(wt.start,b.width,4);Mt.start<=Bt+1&&Vt===Kt&&R(Mt.start+Mt.count-1,b.width,4)===Vt?wt.count=Math.max(wt.count,Mt.start+Mt.count-wt.start):(++_t,gt[_t]=Mt)}gt.length=_t+1;const ct=e.getParameter(s.UNPACK_ROW_LENGTH),ut=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let kt=0,wt=gt.length;kt<wt;kt++){const Mt=gt[kt],Bt=Math.floor(Mt.start/4),Vt=Math.ceil(Mt.count/4),Kt=Bt%b.width,Y=Math.floor(Bt/b.width),yt=Vt,ht=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(s.TEXTURE_2D,0,Kt,Y,yt,ht,J,rt,b.data)}z.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ct),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function V(z,b,J){let rt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=s.TEXTURE_3D);const at=B(z,b),gt=b.source;e.bindTexture(rt,z.__webglTexture,s.TEXTURE0+J);const _t=n.get(gt);if(gt.version!==_t.__version||at===!0){if(e.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ht=se.getPrimaries(se.workingColorSpace),St=b.colorSpace===Ti?null:se.getPrimaries(b.colorSpace),Rt=b.colorSpace===Ti||ht===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let ut=g(b.image,!1,i.maxTextureSize);ut=qe(b,ut);const vt=r.convert(b.format,b.colorSpace),kt=r.convert(b.type);let wt=v(b.internalFormat,vt,kt,b.normalized,b.colorSpace,b.isVideoTexture);O(rt,b);let Mt;const Bt=b.mipmaps,Vt=b.isVideoTexture!==!0,Kt=_t.__version===void 0||at===!0,Y=gt.dataReady,yt=w(b,ut);if(b.isDepthTexture)wt=y(b.format===Oi,b.type),Kt&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,wt,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,wt,ut.width,ut.height,0,vt,kt,null));else if(b.isDataTexture)if(Bt.length>0){Vt&&Kt&&e.texStorage2D(s.TEXTURE_2D,yt,wt,Bt[0].width,Bt[0].height);for(let ht=0,St=Bt.length;ht<St;ht++)Mt=Bt[ht],Vt?Y&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,vt,kt,Mt.data):e.texImage2D(s.TEXTURE_2D,ht,wt,Mt.width,Mt.height,0,vt,kt,Mt.data);b.generateMipmaps=!1}else Vt?(Kt&&e.texStorage2D(s.TEXTURE_2D,yt,wt,ut.width,ut.height),Y&&P(b,ut,vt,kt)):e.texImage2D(s.TEXTURE_2D,0,wt,ut.width,ut.height,0,vt,kt,ut.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,wt,Bt[0].width,Bt[0].height,ut.depth);for(let ht=0,St=Bt.length;ht<St;ht++)if(Mt=Bt[ht],b.format!==pn)if(vt!==null)if(Vt){if(Y)if(b.layerUpdates.size>0){const Rt=vh(Mt.width,Mt.height,b.format,b.type);for(const pt of b.layerUpdates){const Gt=Mt.data.subarray(pt*Rt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*Rt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,pt,Mt.width,Mt.height,1,vt,Gt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,ut.depth,vt,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,wt,Mt.width,Mt.height,ut.depth,0,Mt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?Y&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,ut.depth,vt,kt,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,wt,Mt.width,Mt.height,ut.depth,0,vt,kt,Mt.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Vt&&Kt&&e.texStorage2D(s.TEXTURE_2D,yt,wt,Bt[0].width,Bt[0].height);for(let ht=0,St=Bt.length;ht<St;ht++)Mt=Bt[ht],b.format!==pn?vt!==null?Vt?Y&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,wt,Mt.width,Mt.height,0,Mt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?Y&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,vt,kt,Mt.data):e.texImage2D(s.TEXTURE_2D,ht,wt,Mt.width,Mt.height,0,vt,kt,Mt.data)}else if(b.isDataArrayTexture)if(Vt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,wt,ut.width,ut.height,ut.depth),Y)if(b.layerUpdates.size>0){const ht=vh(ut.width,ut.height,b.format,b.type);for(const St of b.layerUpdates){const Rt=ut.data.subarray(St*ht/ut.data.BYTES_PER_ELEMENT,(St+1)*ht/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,St,ut.width,ut.height,1,vt,kt,Rt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,vt,kt,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,ut.width,ut.height,ut.depth,0,vt,kt,ut.data);else if(b.isData3DTexture)Vt?(Kt&&e.texStorage3D(s.TEXTURE_3D,yt,wt,ut.width,ut.height,ut.depth),Y&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,vt,kt,ut.data)):e.texImage3D(s.TEXTURE_3D,0,wt,ut.width,ut.height,ut.depth,0,vt,kt,ut.data);else if(b.isFramebufferTexture){if(Kt)if(Vt)e.texStorage2D(s.TEXTURE_2D,yt,wt,ut.width,ut.height);else{let ht=ut.width,St=ut.height;for(let Rt=0;Rt<yt;Rt++)e.texImage2D(s.TEXTURE_2D,Rt,wt,ht,St,0,vt,kt,null),ht>>=1,St>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const ht=s.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ut.parentNode!==ht){ht.appendChild(ut),u.add(b),ht.onpaint=St=>{const Rt=St.changedElements;for(const pt of u)Rt.includes(pt.image)&&(pt.needsUpdate=!0)},ht.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ut);else{const Rt=s.RGBA,pt=s.RGBA,Gt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Rt,pt,Gt,ut)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Vt&&Kt){const ht=ce(Bt[0]);e.texStorage2D(s.TEXTURE_2D,yt,wt,ht.width,ht.height)}for(let ht=0,St=Bt.length;ht<St;ht++)Mt=Bt[ht],Vt?Y&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,vt,kt,Mt):e.texImage2D(s.TEXTURE_2D,ht,wt,vt,kt,Mt);b.generateMipmaps=!1}else if(Vt){if(Kt){const ht=ce(ut);e.texStorage2D(s.TEXTURE_2D,yt,wt,ht.width,ht.height)}Y&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,kt,ut)}else e.texImage2D(s.TEXTURE_2D,0,wt,vt,kt,ut);p(b)&&M(rt),_t.__version=gt.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function j(z,b,J){if(b.image.length!==6)return;const rt=B(z,b),at=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+J);const gt=n.get(at);if(at.version!==gt.__version||rt===!0){e.activeTexture(s.TEXTURE0+J);const _t=se.getPrimaries(se.workingColorSpace),ct=b.colorSpace===Ti?null:se.getPrimaries(b.colorSpace),ut=b.colorSpace===Ti||_t===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const vt=b.isCompressedTexture||b.image[0].isCompressedTexture,kt=b.image[0]&&b.image[0].isDataTexture,wt=[];for(let pt=0;pt<6;pt++)!vt&&!kt?wt[pt]=g(b.image[pt],!0,i.maxCubemapSize):wt[pt]=kt?b.image[pt].image:b.image[pt],wt[pt]=qe(b,wt[pt]);const Mt=wt[0],Bt=r.convert(b.format,b.colorSpace),Vt=r.convert(b.type),Kt=v(b.internalFormat,Bt,Vt,b.normalized,b.colorSpace),Y=b.isVideoTexture!==!0,yt=gt.__version===void 0||rt===!0,ht=at.dataReady;let St=w(b,Mt);O(s.TEXTURE_CUBE_MAP,b);let Rt;if(vt){Y&&yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Kt,Mt.width,Mt.height);for(let pt=0;pt<6;pt++){Rt=wt[pt].mipmaps;for(let Gt=0;Gt<Rt.length;Gt++){const Nt=Rt[Gt];b.format!==pn?Bt!==null?Y?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Gt,0,0,Nt.width,Nt.height,Bt,Nt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Gt,Kt,Nt.width,Nt.height,0,Nt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Gt,0,0,Nt.width,Nt.height,Bt,Vt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Gt,Kt,Nt.width,Nt.height,0,Bt,Vt,Nt.data)}}}else{if(Rt=b.mipmaps,Y&&yt){Rt.length>0&&St++;const pt=ce(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,St,Kt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(kt){Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,wt[pt].width,wt[pt].height,Bt,Vt,wt[pt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,wt[pt].width,wt[pt].height,0,Bt,Vt,wt[pt].data);for(let Gt=0;Gt<Rt.length;Gt++){const ge=Rt[Gt].image[pt].image;Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Gt+1,0,0,ge.width,ge.height,Bt,Vt,ge.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Gt+1,Kt,ge.width,ge.height,0,Bt,Vt,ge.data)}}else{Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Bt,Vt,wt[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,Bt,Vt,wt[pt]);for(let Gt=0;Gt<Rt.length;Gt++){const Nt=Rt[Gt];Y?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Gt+1,0,0,Bt,Vt,Nt.image[pt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Gt+1,Kt,Bt,Vt,Nt.image[pt])}}}p(b)&&M(s.TEXTURE_CUBE_MAP),gt.__version=at.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function st(z,b,J,rt,at,gt){const _t=r.convert(J.format,J.colorSpace),ct=r.convert(J.type),ut=v(J.internalFormat,_t,ct,J.normalized,J.colorSpace),vt=n.get(b),kt=n.get(J);if(kt.__renderTarget=b,!vt.__hasExternalTextures){const wt=Math.max(1,b.width>>gt),Mt=Math.max(1,b.height>>gt);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,gt,ut,wt,Mt,b.depth,0,_t,ct,null):e.texImage2D(at,gt,ut,wt,Mt,0,_t,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,z),Ce(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,at,kt.__webglTexture,0,Se(b)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,at,kt.__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(z,b,J){if(s.bindRenderbuffer(s.RENDERBUFFER,z),b.depthBuffer){const rt=b.depthTexture,at=rt&&rt.isDepthTexture?rt.type:null,gt=y(b.stencilBuffer,at),_t=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ce(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se(b),gt,b.width,b.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se(b),gt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,gt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,z)}else{const rt=b.textures;for(let at=0;at<rt.length;at++){const gt=rt[at],_t=r.convert(gt.format,gt.colorSpace),ct=r.convert(gt.type),ut=v(gt.internalFormat,_t,ct,gt.normalized,gt.colorSpace);Ce(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se(b),ut,b.width,b.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Se(b),ut,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ut,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(z,b,J){const rt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=n.get(b.depthTexture);if(at.__renderTarget=b,(!at.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),rt){if(at.__webglInit===void 0&&(at.__webglInit=!0,b.depthTexture.addEventListener("dispose",L)),at.__webglTexture===void 0){at.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,at.__webglTexture),O(s.TEXTURE_CUBE_MAP,b.depthTexture);const vt=r.convert(b.depthTexture.format),kt=r.convert(b.depthTexture.type);let wt;b.depthTexture.format===hi?wt=s.DEPTH_COMPONENT24:b.depthTexture.format===Oi&&(wt=s.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,wt,b.width,b.height,0,vt,kt,null)}}else tt(b.depthTexture,0);const gt=at.__webglTexture,_t=Se(b),ct=rt?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,ut=b.depthTexture.format===Oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===hi)Ce(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,ct,gt,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,ut,ct,gt,0);else if(b.depthTexture.format===Oi)Ce(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,ct,gt,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,ut,ct,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Et(z){const b=n.get(z),J=z.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==z.depthTexture){const rt=z.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){const at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",at)};rt.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=rt}if(z.depthTexture&&!b.__autoAllocateDepthBuffer)if(J)for(let rt=0;rt<6;rt++)xt(b.__webglFramebuffer[rt],z,rt);else{const rt=z.texture.mipmaps;rt&&rt.length>0?xt(b.__webglFramebuffer[0],z,0):xt(b.__webglFramebuffer,z,0)}else if(J){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=s.createRenderbuffer(),dt(b.__webglDepthbuffer[rt],z,!1);else{const at=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,gt)}}else{const rt=z.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),dt(b.__webglDepthbuffer,z,!1);else{const at=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,gt),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,gt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(z,b,J){const rt=n.get(z);b!==void 0&&st(rt.__webglFramebuffer,z,z.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Et(z)}function lt(z){const b=z.texture,J=n.get(z),rt=n.get(b);z.addEventListener("dispose",_);const at=z.textures,gt=z.isWebGLCubeRenderTarget===!0,_t=at.length>1;if(_t||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=b.version,o.memory.textures++),gt){J.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer[ct]=[];for(let ut=0;ut<b.mipmaps.length;ut++)J.__webglFramebuffer[ct][ut]=s.createFramebuffer()}else J.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){J.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)J.__webglFramebuffer[ct]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(_t)for(let ct=0,ut=at.length;ct<ut;ct++){const vt=n.get(at[ct]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(z.samples>0&&Ce(z)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ct=0;ct<at.length;ct++){const ut=at[ct];J.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ct]);const vt=r.convert(ut.format,ut.colorSpace),kt=r.convert(ut.type),wt=v(ut.internalFormat,vt,kt,ut.normalized,ut.colorSpace,z.isXRRenderTarget===!0),Mt=Se(z);s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,wt,z.width,z.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,J.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),z.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(J.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),O(s.TEXTURE_CUBE_MAP,b);for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let ut=0;ut<b.mipmaps.length;ut++)st(J.__webglFramebuffer[ct][ut],z,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ut);else st(J.__webglFramebuffer[ct],z,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(b)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ct=0,ut=at.length;ct<ut;ct++){const vt=at[ct],kt=n.get(vt);let wt=s.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(wt=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(wt,kt.__webglTexture),O(wt,vt),st(J.__webglFramebuffer,z,vt,s.COLOR_ATTACHMENT0+ct,wt,0),p(vt)&&M(wt)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ct=z.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,rt.__webglTexture),O(ct,b),b.mipmaps&&b.mipmaps.length>0)for(let ut=0;ut<b.mipmaps.length;ut++)st(J.__webglFramebuffer[ut],z,b,s.COLOR_ATTACHMENT0,ct,ut);else st(J.__webglFramebuffer,z,b,s.COLOR_ATTACHMENT0,ct,0);p(b)&&M(ct),e.unbindTexture()}z.depthBuffer&&Et(z)}function mt(z){const b=z.textures;for(let J=0,rt=b.length;J<rt;J++){const at=b[J];if(p(at)){const gt=E(z),_t=n.get(at).__webglTexture;e.bindTexture(gt,_t),M(gt),e.unbindTexture()}}}const It=[],ye=[];function Te(z){if(z.samples>0){if(Ce(z)===!1){const b=z.textures,J=z.width,rt=z.height;let at=s.COLOR_BUFFER_BIT;const gt=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(z),ct=b.length>1;if(ct)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const ut=z.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[vt]);const kt=n.get(b[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,kt,0)}s.blitFramebuffer(0,0,J,rt,0,0,J,rt,at,s.NEAREST),l===!0&&(It.length=0,ye.length=0,It.push(s.COLOR_ATTACHMENT0+vt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(It.push(gt),ye.push(gt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,_t.__webglColorRenderbuffer[vt]);const kt=n.get(b[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,kt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){const b=z.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Se(z){return Math.min(i.maxSamples,z.samples)}function Ce(z){const b=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $(z){const b=o.render.frame;h.get(z)!==b&&(h.set(z,b),z.update())}function qe(z,b){const J=z.colorSpace,rt=z.format,at=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||J!==vo&&J!==Ti&&(se.getTransfer(J)===he?(rt!==pn||at!==on)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",J)),b}function ce(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=F,this.getTextureUnits=N,this.setTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=et,this.rebindTextures=Q,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function D_(s,t){function e(n,i=Ti){let r;const o=se.getTransfer(i);if(n===on)return s.UNSIGNED_BYTE;if(n===ql)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Yl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===qu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return s.BYTE;if(n===Wu)return s.SHORT;if(n===fr)return s.UNSIGNED_SHORT;if(n===Xl)return s.INT;if(n===Wn)return s.UNSIGNED_INT;if(n===In)return s.FLOAT;if(n===wn)return s.HALF_FLOAT;if(n===Yu)return s.ALPHA;if(n===$u)return s.RGB;if(n===pn)return s.RGBA;if(n===hi)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Ho)return s.RED;if(n===$l)return s.RED_INTEGER;if(n===Gi)return s.RG;if(n===Kl)return s.RG_INTEGER;if(n===Zl)return s.RGBA_INTEGER;if(n===lo||n===co||n===ho||n===uo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ho)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===ol||n===al||n===ll||n===cl||n===xo||n===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===ol)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ll)return r.COMPRESSED_R11_EAC;if(n===cl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return r.COMPRESSED_RG11_EAC;if(n===hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===Ml||n===yl||n===Sl||n===wl||n===bl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===Tl||n===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===El)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===Cl||n===_o||n===Ll)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,N_=`
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

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new of(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ge({vertexShader:U_,fragmentShader:N_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends Wi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new F_,p={},M=e.getContextAttributes();let E=null,v=null;const y=[],w=[],L=new Ot;let _=null,S=null;const C=new rn;C.viewport=new pe;const A=new rn;A.viewport=new pe;const U=[C,A],F=new Xp;let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let P=y[R];return P===void 0&&(P=new ra,y[R]=P),P.getTargetRaySpace()},this.getControllerGrip=function(R){let P=y[R];return P===void 0&&(P=new ra,y[R]=P),P.getGripSpace()},this.getHand=function(R){let P=y[R];return P===void 0&&(P=new ra,y[R]=P),P.getHandSpace()};function Z(R){const P=w.indexOf(R.inputSource);if(P===-1)return;const V=y[P];V!==void 0&&(V.update(R.inputSource,R.frame,c||o),V.dispatchEvent({type:R.type,data:R.inputSource}))}function X(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",tt);for(let R=0;R<y.length;R++){const P=w[R];P!==null&&(w[R]=null,y[R].disconnect(P))}N=null,G=null,g.reset();for(const R in p)delete p[R];if(t.setRenderTarget(E),d=null,f=null,u=null,i=null,v=null,B.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(L.width,L.height,!1),S!==null){const R=S.camera;R.fov=S.fov,R.zoom=S.zoom,R.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",tt),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,j=null,st=null;M.depth&&(st=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=M.stencil?Oi:hi,j=M.stencil?dr:Wn);const dt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(dt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Mn(f.textureWidth,f.textureHeight,{format:pn,type:on,depthTexture:new xr(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const V={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,V),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Mn(d.framebufferWidth,d.framebufferHeight,{format:pn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),B.setContext(i),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(R){for(let P=0;P<R.removed.length;P++){const V=R.removed[P],j=w.indexOf(V);j>=0&&(w[j]=null,y[j].disconnect(V))}for(let P=0;P<R.added.length;P++){const V=R.added[P];let j=w.indexOf(V);if(j===-1){for(let dt=0;dt<y.length;dt++)if(dt>=w.length){w.push(V),j=dt;break}else if(w[dt]===null){w[dt]=V,j=dt;break}if(j===-1)break}const st=y[j];st&&st.connect(V)}}const H=new D,K=new D;function et(R,P,V){H.setFromMatrixPosition(P.matrixWorld),K.setFromMatrixPosition(V.matrixWorld);const j=H.distanceTo(K),st=P.projectionMatrix.elements,dt=V.projectionMatrix.elements,xt=st[14]/(st[10]-1),Et=st[14]/(st[10]+1),Q=(st[9]+1)/st[5],lt=(st[9]-1)/st[5],mt=(st[8]-1)/st[0],It=(dt[8]+1)/dt[0],ye=xt*mt,Te=xt*It,Se=j/(-mt+It),Ce=Se*-mt;if(P.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Ce),R.translateZ(Se),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),st[10]===-1)R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const $=xt+Se,qe=Et+Se,ce=ye-Ce,z=Te+(j-Ce),b=Q*Et/qe*$,J=lt*Et/qe*$;R.projectionMatrix.makePerspective(ce,z,b,J,$,qe),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function ft(R,P){P===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(P.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;let P=R.near,V=R.far;g.texture!==null&&(g.depthNear>0&&(P=g.depthNear),g.depthFar>0&&(V=g.depthFar)),F.near=A.near=C.near=P,F.far=A.far=C.far=V,(N!==F.near||G!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,G=F.far),F.layers.mask=R.layers.mask|6,C.layers.mask=F.layers.mask&-5,A.layers.mask=F.layers.mask&-3;const j=R.parent,st=F.cameras;ft(F,j);for(let dt=0;dt<st.length;dt++)ft(st[dt],j);st.length===2?et(F,C,A):F.projectionMatrix.copy(C.projectionMatrix),S===null&&R.isPerspectiveCamera&&(S={camera:R,fov:R.fov,zoom:R.zoom}),k(R,F,j)};function k(R,P,V){V===null?R.matrix.copy(P.matrixWorld):(R.matrix.copy(V.matrixWorld),R.matrix.invert(),R.matrix.multiply(P.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=gr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(R){l=R,f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(R){return p[R]};let W=null;function O(R,P){if(h=P.getViewerPose(c||o),m=P,h!==null){const V=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let j=!1;V.length!==F.cameras.length&&(F.cameras.length=0,j=!0);for(let Et=0;Et<V.length;Et++){const Q=V[Et];let lt=null;if(d!==null)lt=d.getViewport(Q);else{const It=u.getViewSubImage(f,Q);lt=It.viewport,Et===0&&(t.setRenderTargetTextures(v,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(v))}let mt=U[Et];mt===void 0&&(mt=new rn,mt.layers.enable(Et),mt.viewport=new pe,U[Et]=mt),mt.matrix.fromArray(Q.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Q.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(lt.x,lt.y,lt.width,lt.height),Et===0&&(F.matrix.copy(mt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),j===!0&&F.cameras.push(mt)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Et=u.getDepthInformation(V[0]);Et&&Et.isValid&&Et.texture&&g.init(Et,i.renderState)}if(st&&st.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Et=0;Et<V.length;Et++){const Q=V[Et].camera;if(Q){let lt=p[Q];lt||(lt=new of,p[Q]=lt);const mt=u.getCameraImage(Q);lt.sourceTexture=mt}}}}for(let V=0;V<y.length;V++){const j=w[V],st=y[V];j!==null&&st!==void 0&&st.update(j,P,c||o)}W&&W(R,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),m=null}const B=new hf;B.setAnimationLoop(O),this.setAnimationLoop=function(R){W=R},this.dispose=function(){}}}const O_=new Zt,xf=new Yt;xf.set(-1,0,0,0,1,0,0,0,1);function k_(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,af(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===an&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===an&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(xf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B_(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const w=y.program;n.uniformBlockBinding(v,w)}function c(v,y){let w=i[v.id];w===void 0&&(g(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",M));const L=y.program;n.updateUBOMapping(v,L);const _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){const y=u();v.__bindingPointIndex=y;const w=s.createBuffer(),L=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,L,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=i[v.id],w=v.uniforms,L=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let _=0,S=w.length;_<S;_++){const C=w[_];if(Array.isArray(C))for(let A=0,U=C.length;A<U;A++)d(C[A],_,A,L);else d(C,_,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,y,w,L){if(x(v,y,w,L)===!0){const _=v.__offset,S=v.value;if(Array.isArray(S)){let C=0;for(let A=0;A<S.length;A++){const U=S[A],F=p(U);m(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function m(v,y,w){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,w)}function x(v,y,w,L){const _=v.value,S=y+"_"+w;if(L[S]===void 0)return typeof _=="number"||typeof _=="boolean"?L[S]=_:ArrayBuffer.isView(_)?L[S]=_.slice():L[S]=_.clone(),!0;{const C=L[S];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return L[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(v){const y=v.uniforms;let w=0;const L=16;for(let S=0,C=y.length;S<C;S++){const A=Array.isArray(y[S])?y[S]:[y[S]];for(let U=0,F=A.length;U<F;U++){const N=A[U],G=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,X=G.length;Z<X;Z++){const tt=G[Z],H=p(tt),K=w%L,et=K%H.boundary,ft=K+et;w+=et,ft!==0&&L-ft<H.storage&&(w+=L-ft),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=H.storage}}}const _=w%L;return _>0&&(w+=L-_),v.__size=w,v.__cache={},this}function p(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){const y=v.target;y.removeEventListener("dispose",M);const w=o.indexOf(y.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function E(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:E}}const H_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function G_(){return Fn===null&&(Fn=new As(H_,16,16,Gi,wn),Fn.name="DFG_LUT",Fn.minFilter=He,Fn.magFilter=He,Fn.wrapS=ri,Fn.wrapT=ri,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class V_{constructor(t={}){const{canvas:e=Ud(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=on}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=d,g=new Set([Zl,Kl,$l]),p=new Set([on,Wn,fr,dr,ql,Yl]),M=new Uint32Array(4),E=new Int32Array(4),v=new D;let y=null,w=null;const L=[],_=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let A=!1,U=null,F=null,N=null,G=null;this._outputColorSpace=De;let Z=0,X=0,tt=null,H=-1,K=null;const et=new pe,ft=new pe;let k=null;const W=new zt(0);let O=0,B=e.width,R=e.height,P=1,V=null,j=null;const st=new pe(0,0,B,R),dt=new pe(0,0,B,R);let xt=!1;const Et=new sc;let Q=!1,lt=!1;const mt=new Zt,It=new D,ye=new pe,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Ce(){return tt===null?P:1}let $=n;function qe(T,q){return e.getContext(T,q)}let ce,z,b,J,rt,at,gt,_t,ct,ut,vt,kt,wt,Mt,Bt,Vt,Kt,Y,yt,ht,St,Rt,pt;try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gl}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",En,!1),$===null){const q="webgl2";if($=qe(q,T),$===null)throw qe(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(T){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",En,!1),re("WebGLRenderer: "+T.message),T}function Gt(){ce=new Gg($),ce.init(),St=new D_($,ce),z=new Ig($,ce,t,St),b=new P_($,ce),z.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),F=$.createFramebuffer(),N=$.createFramebuffer(),G=$.createFramebuffer(),J=new Xg($),rt=new x_,at=new I_($,ce,b,rt,z,St,J),gt=new Hg(C),_t=new Yp($),Rt=new Lg($,_t),ct=new Vg($,_t,J,Rt),ut=new Yg($,ct,_t,Rt,J),Y=new qg($,z,at),Bt=new Dg(rt),vt=new g_(C,gt,ce,z,Rt,Bt),kt=new k_(C,rt),wt=new v_,Mt=new E_(ce),Kt=new Cg(C,gt,b,ut,m,l),Vt=new L_(C,ut,z),pt=new B_($,J,z,b),yt=new Pg($,ce,J),ht=new Wg($,ce,J),J.programs=vt.programs,C.capabilities=z,C.extensions=ce,C.properties=rt,C.renderLists=wt,C.shadowMap=Vt,C.state=b,C.info=J}x!==on&&(S=new Kg(x,e.width,e.height,a,i,r));const Nt=new z_(C,$);this.xr=Nt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(B,R,!1))},this.getSize=function(T){return T.set(B,R)},this.setSize=function(T,q,ot=!0){if(Nt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,R=q,e.width=Math.floor(T*P),e.height=Math.floor(q*P),ot===!0&&(e.style.width=T+"px",e.style.height=q+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(B*P,R*P).floor()},this.setDrawingBufferSize=function(T,q,ot){B=T,R=q,P=ot,e.width=Math.floor(T*ot),e.height=Math.floor(q*ot),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(x===on){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(et)},this.getViewport=function(T){return T.copy(st)},this.setViewport=function(T,q,ot,nt){T.isVector4?st.set(T.x,T.y,T.z,T.w):st.set(T,q,ot,nt),b.viewport(et.copy(st).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(dt)},this.setScissor=function(T,q,ot,nt){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,q,ot,nt),b.scissor(ft.copy(dt).multiplyScalar(P).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(T){b.setScissorTest(xt=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,ot=!0){let nt=0;if(T){let it=!1;if(tt!==null){const At=tt.texture.format;it=g.has(At)}if(it){const At=tt.texture.type,Pt=p.has(At),Tt=Kt.getClearColor(),Dt=Kt.getClearAlpha(),Ft=Tt.r,Jt=Tt.g,te=Tt.b;Pt?(M[0]=Ft,M[1]=Jt,M[2]=te,M[3]=Dt,$.clearBufferuiv($.COLOR,0,M)):(E[0]=Ft,E[1]=Jt,E[2]=te,E[3]=Dt,$.clearBufferiv($.COLOR,0,E))}else nt|=$.COLOR_BUFFER_BIT}q&&(nt|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(nt|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&$.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Kt.dispose(),wt.dispose(),Mt.dispose(),rt.dispose(),gt.dispose(),ut.dispose(),Rt.dispose(),pt.dispose(),vt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Tc),Nt.removeEventListener("sessionend",Ac),Li.stop()};function ge(T){T.preventDefault(),yo("WebGLRenderer: Context Lost."),A=!0}function ae(){yo("WebGLRenderer: Context Restored."),A=!1;const T=J.autoReset,q=Vt.enabled,ot=Vt.autoUpdate,nt=Vt.needsUpdate,it=Vt.type;Gt(),J.autoReset=T,Vt.enabled=q,Vt.autoUpdate=ot,Vt.needsUpdate=nt,Vt.type=it}function En(T){re("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dn(T){const q=T.target;q.removeEventListener("dispose",Dn),Xf(q)}function Xf(T){qf(T),rt.remove(T)}function qf(T){const q=rt.get(T).programs;q!==void 0&&(q.forEach(function(ot){vt.releaseProgram(ot)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,ot,nt,it,At){q===null&&(q=Te);const Pt=it.isMesh&&it.matrixWorld.determinantAffine()<0,Tt=Kf(T,q,ot,nt,it);b.setMaterial(nt,Pt);let Dt=ot.index,Ft=1;if(nt.wireframe===!0){if(Dt=ct.getWireframeAttribute(ot),Dt===void 0)return;Ft=2}const Jt=ot.drawRange,te=ot.attributes.position;let Ut=Jt.start*Ft,le=(Jt.start+Jt.count)*Ft;At!==null&&(Ut=Math.max(Ut,At.start*Ft),le=Math.min(le,(At.start+At.count)*Ft)),Dt!==null?(Ut=Math.max(Ut,0),le=Math.min(le,Dt.count)):te!=null&&(Ut=Math.max(Ut,0),le=Math.min(le,te.count));const Le=le-Ut;if(Le<0||Le===1/0)return;Rt.setup(it,nt,Tt,ot,Dt);let _e,me=yt;if(Dt!==null&&(_e=_t.get(Dt),me=ht,me.setIndex(_e)),it.isMesh)nt.wireframe===!0?(b.setLineWidth(nt.wireframeLinewidth*Ce()),me.setMode($.LINES)):me.setMode($.TRIANGLES);else if(it.isLine){let Ye=nt.linewidth;Ye===void 0&&(Ye=1),b.setLineWidth(Ye*Ce()),it.isLineSegments?me.setMode($.LINES):it.isLineLoop?me.setMode($.LINE_LOOP):me.setMode($.LINE_STRIP)}else it.isPoints?me.setMode($.POINTS):it.isSprite&&me.setMode($.TRIANGLES);if(it.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))me.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Ye=it._multiDrawStarts,Lt=it._multiDrawCounts,Ze=it._multiDrawCount,oe=Dt?_t.get(Dt).bytesPerElement:1,mn=rt.get(nt).currentProgram.getUniforms();for(let Un=0;Un<Ze;Un++)mn.setValue($,"_gl_DrawID",Un),me.render(Ye[Un]/oe,Lt[Un])}else if(it.isInstancedMesh)me.renderInstances(Ut,Le,it.count);else if(ot.isInstancedBufferGeometry){const Ye=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Lt=Math.min(ot.instanceCount,Ye);me.renderInstances(Ut,Le,Lt)}else me.render(Ut,Le)};function Ec(T,q,ot,nt){U!==null&&T.isNodeMaterial&&U.setObject(nt,T),Q===!0&&Bt.setState(T,ot,!1),T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,Sr(T,q,nt),T.side=Bi,T.needsUpdate=!0,Sr(T,q,nt),T.side=Hn):Sr(T,q,nt)}this.compile=function(T,q,ot=null){ot===null&&(ot=T),U!==null&&U.renderStart(T,q,ot),w=Mt.get(ot),w.init(q),_.push(w),ot.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(w.pushLight(it),it.castShadow&&w.pushShadow(it))}),T!==ot&&T.traverseVisible(function(it){it.isLight&&it.layers.test(q.layers)&&(w.pushLight(it),it.castShadow&&w.pushShadow(it))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),lt=this.localClippingEnabled,Q=Bt.init(this.clippingPlanes,lt),Q===!0&&Bt.setGlobalState(this.clippingPlanes,q),U!==null&&Vt.render(w.state.shadowsArray,ot,q);const nt=new Set;return T.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const At=it.material;if(At)if(Array.isArray(At))for(let Pt=0;Pt<At.length;Pt++){const Tt=At[Pt];Ec(Tt,ot,q,it),nt.add(Tt)}else Ec(At,ot,q,it),nt.add(At)}),w=_.pop(),U!==null&&U.renderEnd(),nt},this.compileAsync=function(T,q,ot=null){const nt=this.compile(T,q,ot);return new Promise(it=>{function At(){if(nt.forEach(function(Pt){const Dt=rt.get(Pt).currentProgram;(Dt===void 0||Dt.isReady())&&nt.delete(Pt)}),nt.size===0){it(T);return}setTimeout(At,10)}ce.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let $o=null;function Yf(T){$o&&$o(T)}function Tc(){Li.stop()}function Ac(){Li.start()}const Li=new hf;Li.setAnimationLoop(Yf),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(T){$o=T,Nt.setAnimationLoop(T),T===null?Li.stop():Li.start()},Nt.addEventListener("sessionstart",Tc),Nt.addEventListener("sessionend",Ac),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;U!==null&&U.renderStart(T,q);const ot=Nt.enabled===!0&&Nt.isPresenting===!0,nt=S!==null&&(tt===null||ot)&&S.begin(C,tt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(q),q=Nt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,q,tt),w=Mt.get(T,_.length),w.init(q),w.state.textureUnits=at.getTextureUnits(),_.push(w),mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Et.setFromProjectionMatrix(mt,Gn,q.reversedDepth),lt=this.localClippingEnabled,Q=Bt.init(this.clippingPlanes,lt),y=wt.get(T,L.length),y.init(),L.push(y),Nt.enabled===!0&&Nt.isPresenting===!0){const Pt=C.xr.getDepthSensingMesh();Pt!==null&&Ko(Pt,q,-1/0,C.sortObjects)}Ko(T,q,0,C.sortObjects),y.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&y.sort(V,j),Se=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Se&&Kt.addToRenderList(y,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Q===!0&&Bt.beginShadows();const it=w.state.shadowsArray;if(Vt.render(it,T,q),Q===!0&&Bt.endShadows(),(nt&&S.hasRenderPass())===!1){const Pt=y.opaque,Tt=y.transmissive;if(w.setupLights(),q.isArrayCamera){const Dt=q.cameras;if(Tt.length>0)for(let Ft=0,Jt=Dt.length;Ft<Jt;Ft++){const te=Dt[Ft];Cc(Pt,Tt,T,te)}Se&&Kt.render(T);for(let Ft=0,Jt=Dt.length;Ft<Jt;Ft++){const te=Dt[Ft];Rc(y,T,te,te.viewport)}}else Tt.length>0&&Cc(Pt,Tt,T,q),Se&&Kt.render(T),Rc(y,T,q)}tt!==null&&X===0&&(at.updateMultisampleRenderTarget(tt),at.updateRenderTargetMipmap(tt)),nt&&S.end(C),T.isScene===!0&&T.onAfterRender(C,T,q),Rt.resetDefaultState(),H=-1,K=null,_.pop(),_.length>0?(w=_[_.length-1],at.setTextureUnits(w.state.textureUnits),Q===!0&&Bt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,L.pop(),L.length>0?y=L[L.length-1]:y=null,U!==null&&U.renderEnd()};function Ko(T,q,ot,nt){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)ot=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Et)){nt&&ye.setFromMatrixPosition(T.matrixWorld).applyMatrix4(mt);const Pt=ut.update(T),Tt=T.material;Tt.visible&&y.push(T,Pt,Tt,ot,ye.z,null,q)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Et))){const Pt=ut.update(T),Tt=T.material;if(nt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ye.copy(T.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ye.copy(Pt.boundingSphere.center)),ye.applyMatrix4(T.matrixWorld).applyMatrix4(mt)),Array.isArray(Tt)){const Dt=Pt.groups;for(let Ft=0,Jt=Dt.length;Ft<Jt;Ft++){const te=Dt[Ft],Ut=Tt[te.materialIndex];Ut&&Ut.visible&&y.push(T,Pt,Ut,ot,ye.z,te,q)}}else Tt.visible&&y.push(T,Pt,Tt,ot,ye.z,null,q)}}const At=T.children;for(let Pt=0,Tt=At.length;Pt<Tt;Pt++)Ko(At[Pt],q,ot,nt)}function Rc(T,q,ot,nt){const{opaque:it,transmissive:At,transparent:Pt}=T;w.setupLightsView(ot),Q===!0&&Bt.setGlobalState(C.clippingPlanes,ot),nt&&b.viewport(et.copy(nt)),it.length>0&&yr(it,q,ot),At.length>0&&yr(At,q,ot),Pt.length>0&&yr(Pt,q,ot),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Cc(T,q,ot,nt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[nt.id]===void 0){const Ut=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[nt.id]=new Mn(1,1,{generateMipmaps:!0,type:Ut?wn:on,minFilter:Ri,samples:Math.max(4,z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}const At=w.state.transmissionRenderTarget[nt.id],Pt=nt.viewport||et;At.setSize(Pt.z*C.transmissionResolutionScale,Pt.w*C.transmissionResolutionScale);const Tt=C.getRenderTarget(),Dt=C.getActiveCubeFace(),Ft=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor(W),O=C.getClearAlpha(),O<1&&C.setClearColor(16777215,.5),C.clear(),Se&&Kt.render(ot);const Jt=C.toneMapping;C.toneMapping=Vn;const te=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),w.setupLightsView(nt),Q===!0&&Bt.setGlobalState(C.clippingPlanes,nt),yr(T,ot,nt),at.updateMultisampleRenderTarget(At),at.updateRenderTargetMipmap(At),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let le=0,Le=q.length;le<Le;le++){const _e=q[le],{object:me,geometry:Ye,material:Lt,group:Ze}=_e;if(Lt.side===Hn&&me.layers.test(nt.layers)){const oe=Lt.side;Lt.side=an,Lt.needsUpdate=!0,Lc(me,ot,nt,Ye,Lt,Ze),Lt.side=oe,Lt.needsUpdate=!0,Ut=!0}}Ut===!0&&(at.updateMultisampleRenderTarget(At),at.updateRenderTargetMipmap(At))}C.setRenderTarget(Tt,Dt,Ft),C.setClearColor(W,O),te!==void 0&&(nt.viewport=te),C.toneMapping=Jt}function yr(T,q,ot){const nt=q.isScene===!0?q.overrideMaterial:null;for(let it=0,At=T.length;it<At;it++){const Pt=T[it],{object:Tt,geometry:Dt,group:Ft}=Pt;let Jt=Pt.material;Jt.allowOverride===!0&&nt!==null&&(Jt=nt),Tt.layers.test(ot.layers)&&Lc(Tt,q,ot,Dt,Jt,Ft)}}function Lc(T,q,ot,nt,it,At){U!==null&&it.isNodeMaterial&&U.setObject(T,it),T.onBeforeRender(C,q,ot,nt,it,At),T.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),it.onBeforeRender(C,q,ot,nt,T,At),it.transparent===!0&&it.side===Hn&&it.forceSinglePass===!1?(it.side=an,it.needsUpdate=!0,C.renderBufferDirect(ot,q,nt,it,T,At),it.side=Bi,it.needsUpdate=!0,C.renderBufferDirect(ot,q,nt,it,T,At),it.side=Hn):C.renderBufferDirect(ot,q,nt,it,T,At),T.onAfterRender(C,q,ot,nt,it,At)}function Sr(T,q,ot){q.isScene!==!0&&(q=Te);const nt=rt.get(T),it=w.state.lights,At=w.state.shadowsArray,Pt=it.state.version,Tt=vt.getParameters(T,it.state,At,q,ot,w.state.lightProbeGridArray),Dt=vt.getProgramCacheKey(Tt);let Ft=nt.programs;nt.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,nt.fog=q.fog;const Jt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;nt.envMap=gt.get(T.envMap||nt.environment,Jt),nt.envMapRotation=nt.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",Dn),Ft=new Map,nt.programs=Ft);let te=Ft.get(Dt);if(te!==void 0){if(nt.currentProgram===te&&nt.lightsStateVersion===Pt)return Ic(T,Tt),te}else Tt.uniforms=vt.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,ot,Tt),T.onBeforeCompile(Tt,C),te=vt.acquireProgram(Tt,Dt),Ft.set(Dt,te),nt.uniforms=Tt.uniforms;const Ut=nt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=Bt.uniform),Ic(T,Tt),nt.needsLights=Jf(T),nt.lightsStateVersion=Pt,nt.needsLights&&(Ut.ambientLightColor.value=it.state.ambient,Ut.lightProbe.value=it.state.probe,Ut.sunLights.value=it.state.sun,Ut.sunLightShadows.value=it.state.sunShadow,Ut.directionalLights.value=it.state.directional,Ut.directionalLightShadows.value=it.state.directionalShadow,Ut.spotLights.value=it.state.spot,Ut.spotLightShadows.value=it.state.spotShadow,Ut.rectAreaLights.value=it.state.rectArea,Ut.ltc_1.value=it.state.rectAreaLTC1,Ut.ltc_2.value=it.state.rectAreaLTC2,Ut.pointLights.value=it.state.point,Ut.pointLightShadows.value=it.state.pointShadow,Ut.hemisphereLights.value=it.state.hemi,Ut.sunShadowMatrix.value=it.state.sunShadowMatrix,Ut.sunShadowCascade.value=it.state.sunShadowCascade,Ut.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Ut.spotLightMatrix.value=it.state.spotLightMatrix,Ut.spotLightMap.value=it.state.spotLightMap,Ut.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=w.state.lightProbeGridArray.length>0,nt.currentProgram=te,nt.uniformsList=null,te}function Pc(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=po.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function Ic(T,q){const ot=rt.get(T);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function $f(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let ot=0,nt=T.length;ot<nt;ot++){const it=T[ot];if(it.texture!==null&&it.boundingBox.containsPoint(v))return it}return null}function Kf(T,q,ot,nt,it){q.isScene!==!0&&(q=Te),at.resetTextureUnits();const At=q.fog,Pt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?q.environment:null,Tt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:se.workingColorSpace,Dt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,Ft=gt.get(nt.envMap||Pt,Dt),Jt=nt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,te=!!ot.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Ut=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Le=!!ot.morphAttributes.color;let _e=Vn;nt.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(_e=C.toneMapping);const me=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Ye=me!==void 0?me.length:0,Lt=rt.get(nt),Ze=w.state.lights;if(Q===!0&&(lt===!0||T!==K)){const xe=T===K&&nt.id===H;Bt.setState(nt,T,xe)}let oe=!1;nt.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ze.state.version||Lt.outputColorSpace!==Tt||it.isBatchedMesh&&Lt.batching===!1||!it.isBatchedMesh&&Lt.batching===!0||it.isBatchedMesh&&Lt.batchingColor===!0&&it._colorsTexture===null||it.isBatchedMesh&&Lt.batchingColor===!1&&it._colorsTexture!==null||it.isInstancedMesh&&Lt.instancing===!1||!it.isInstancedMesh&&Lt.instancing===!0||it.isSkinnedMesh&&Lt.skinning===!1||!it.isSkinnedMesh&&Lt.skinning===!0||it.isInstancedMesh&&Lt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Lt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Lt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Lt.instancingMorph===!1&&it.morphTexture!==null||Lt.envMap!==Ft||nt.fog===!0&&Lt.fog!==At||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Bt.numPlanes||Lt.numIntersection!==Bt.numIntersection)||Lt.vertexAlphas!==Jt||Lt.vertexTangents!==te||Lt.morphTargets!==Ut||Lt.morphNormals!==le||Lt.morphColors!==Le||Lt.toneMapping!==_e||Lt.morphTargetsCount!==Ye||!!Lt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Lt.__version=nt.version);let mn=Lt.currentProgram;oe===!0&&(mn=Sr(nt,q,it),U&&nt.isNodeMaterial&&U.onUpdateProgram(nt,mn,Lt));let Un=!1,ui=!1,$i=!1;const fe=mn.getUniforms(),Ae=Lt.uniforms;if(b.useProgram(mn.program)&&(Un=!0,ui=!0,$i=!0),nt.id!==H&&(H=nt.id,ui=!0),Lt.needsLights){const xe=$f(w.state.lightProbeGridArray,it);Lt.lightProbeGrid!==xe&&(Lt.lightProbeGrid=xe,ui=!0)}if(Un||K!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),fe.setValue($,"projectionMatrix",T.projectionMatrix),fe.setValue($,"viewMatrix",T.matrixWorldInverse);const di=fe.map.cameraPosition;di!==void 0&&di.setValue($,It.setFromMatrixPosition(T.matrixWorld)),z.logarithmicDepthBuffer&&fe.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&fe.setValue($,"isOrthographic",T.isOrthographicCamera===!0),K!==T&&(K=T,ui=!0,$i=!0)}if(Lt.needsLights&&(Ze.state.sunShadowMap.length>0&&fe.setValue($,"sunShadowMap",Ze.state.sunShadowMap,at),Ze.state.directionalShadowMap.length>0&&fe.setValue($,"directionalShadowMap",Ze.state.directionalShadowMap,at),Ze.state.spotShadowMap.length>0&&fe.setValue($,"spotShadowMap",Ze.state.spotShadowMap,at),Ze.state.pointShadowMap.length>0&&fe.setValue($,"pointShadowMap",Ze.state.pointShadowMap,at)),it.isSkinnedMesh){fe.setOptional($,it,"bindMatrix"),fe.setOptional($,it,"bindMatrixInverse");const xe=it.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),fe.setValue($,"boneTexture",xe.boneTexture,at))}it.isBatchedMesh&&(fe.setOptional($,it,"batchingTexture"),fe.setValue($,"batchingTexture",it._matricesTexture,at),fe.setOptional($,it,"batchingIdTexture"),fe.setValue($,"batchingIdTexture",it._indirectTexture,at),fe.setOptional($,it,"batchingColorTexture"),it._colorsTexture!==null&&fe.setValue($,"batchingColorTexture",it._colorsTexture,at));const fi=ot.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Y.update(it,ot,mn),(ui||Lt.receiveShadow!==it.receiveShadow)&&(Lt.receiveShadow=it.receiveShadow,fe.setValue($,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&q.environment!==null&&(Ae.envMapIntensity.value=q.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=G_()),ui){if(fe.setValue($,"toneMappingExposure",C.toneMappingExposure),Lt.needsLights&&Zf(Ae,$i),At&&nt.fog===!0&&kt.refreshFogUniforms(Ae,At),kt.refreshMaterialUniforms(Ae,nt,P,R,w.state.transmissionRenderTarget[T.id]),Lt.needsLights&&Lt.lightProbeGrid){const xe=Lt.lightProbeGrid;Ae.probesSH.value=xe.texture,Ae.probesMin.value.copy(xe.boundingBox.min),Ae.probesMax.value.copy(xe.boundingBox.max),Ae.probesResolution.value.copy(xe.resolution)}po.upload($,Pc(Lt),Ae,at)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(po.upload($,Pc(Lt),Ae,at),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&fe.setValue($,"center",it.center),fe.setValue($,"modelViewMatrix",it.modelViewMatrix),fe.setValue($,"normalMatrix",it.normalMatrix),fe.setValue($,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const xe=nt.uniformsGroups;for(let di=0,Ki=xe.length;di<Ki;di++){const Uc=xe[di];pt.update(Uc,mn),pt.bind(Uc,mn)}}return mn}function Zf(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.sunLights.needsUpdate=q,T.sunLightShadows.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Jf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(T,q,ot){const nt=rt.get(T);nt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),rt.get(T.texture).__webglTexture=q,rt.get(T.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:ot,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const ot=rt.get(T);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,ot=0){tt=T,Z=q,X=ot;let nt=null,it=!1,At=!1;if(T){const Tt=rt.get(T);if(Tt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer($.FRAMEBUFFER,Tt.__webglFramebuffer),et.copy(T.viewport),ft.copy(T.scissor),k=T.scissorTest,b.viewport(et),b.scissor(ft),b.setScissorTest(k),H=-1;return}else if(Tt.__webglFramebuffer===void 0)at.setupRenderTarget(T);else if(Tt.__hasExternalTextures)at.rebindTextures(T,rt.get(T.texture).__webglTexture,rt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Jt=T.depthTexture;if(Tt.__boundDepthTexture!==Jt){if(Jt!==null&&rt.has(Jt)&&(T.width!==Jt.image.width||T.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(T)}}const Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(At=!0);const Ft=rt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[q])?nt=Ft[q][ot]:nt=Ft[q],it=!0):T.samples>0&&at.useMultisampledRTT(T)===!1?nt=rt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?nt=Ft[ot]:nt=Ft,et.copy(T.viewport),ft.copy(T.scissor),k=T.scissorTest}else et.copy(st).multiplyScalar(P).floor(),ft.copy(dt).multiplyScalar(P).floor(),k=xt;if(ot!==0&&(nt=F),b.bindFramebuffer($.FRAMEBUFFER,nt)&&b.drawBuffers(T,nt),b.viewport(et),b.scissor(ft),b.setScissorTest(k),it){const Tt=rt.get(T.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+q,Tt.__webglTexture,ot)}else if(At){const Tt=q;for(let Dt=0;Dt<T.textures.length;Dt++){const Ft=rt.get(T.textures[Dt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Dt,Ft.__webglTexture,ot,Tt)}}else if(T!==null&&ot!==0){const Tt=rt.get(T.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Tt.__webglTexture,ot)}H=-1};function Dc(T){const q=rt.get(T);return(q.__readFormat!==T.format||q.__readType!==T.type)&&(q.__readFormat=T.format,q.__readType=T.type,q.__formatReadable=z.textureFormatReadable(T.format),q.__typeReadable=z.textureTypeReadable(T.type)),q}this.readRenderTargetPixels=function(T,q,ot,nt,it,At,Pt,Tt=0){if(!(T&&T.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt){b.bindFramebuffer($.FRAMEBUFFER,Dt);try{const Ft=T.textures[Tt],Jt=Ft.format,te=Ft.type;T.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Tt);const Ut=Dc(Ft);if(Ut.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-nt&&ot>=0&&ot<=T.height-it&&$.readPixels(q,ot,nt,it,St.convert(Jt),St.convert(te),At)}finally{const Ft=tt!==null?rt.get(tt).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,q,ot,nt,it,At,Pt,Tt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pt!==void 0&&(Dt=Dt[Pt]),Dt)if(q>=0&&q<=T.width-nt&&ot>=0&&ot<=T.height-it){b.bindFramebuffer($.FRAMEBUFFER,Dt);const Ft=T.textures[Tt],Jt=Ft.format,te=Ft.type;T.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Tt);const Ut=Dc(Ft);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,le),$.bufferData($.PIXEL_PACK_BUFFER,At.byteLength,$.STREAM_READ),$.readPixels(q,ot,nt,it,St.convert(Jt),St.convert(te),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const Le=tt!==null?rt.get(tt).__webglFramebuffer:null;b.bindFramebuffer($.FRAMEBUFFER,Le);const _e=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await Nd($,_e,4),$.bindBuffer($.PIXEL_PACK_BUFFER,le),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,At),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(le),$.deleteSync(_e),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,ot=0){const nt=Math.pow(2,-ot),it=Math.floor(T.image.width*nt),At=Math.floor(T.image.height*nt),Pt=q!==null?q.x:0,Tt=q!==null?q.y:0;at.setTexture2D(T,0),$.copyTexSubImage2D($.TEXTURE_2D,ot,0,0,Pt,Tt,it,At),b.unbindTexture()},this.copyTextureToTexture=function(T,q,ot=null,nt=null,it=0,At=0){let Pt,Tt,Dt,Ft,Jt,te,Ut,le,Le;const _e=T.isCompressedTexture?T.mipmaps[At]:T.image;if(ot!==null)Pt=ot.max.x-ot.min.x,Tt=ot.max.y-ot.min.y,Dt=ot.isBox3?ot.max.z-ot.min.z:1,Ft=ot.min.x,Jt=ot.min.y,te=ot.isBox3?ot.min.z:0;else{const Ae=Math.pow(2,-it);Pt=Math.floor(_e.width*Ae),Tt=Math.floor(_e.height*Ae),T.isDataArrayTexture?Dt=_e.depth:T.isData3DTexture?Dt=Math.floor(_e.depth*Ae):Dt=1,Ft=0,Jt=0,te=0}nt!==null?(Ut=nt.x,le=nt.y,Le=nt.z):(Ut=0,le=0,Le=0);const me=St.convert(q.format),Ye=St.convert(q.type);let Lt;q.isData3DTexture?(at.setTexture3D(q,0),Lt=$.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(at.setTexture2DArray(q,0),Lt=$.TEXTURE_2D_ARRAY):(at.setTexture2D(q,0),Lt=$.TEXTURE_2D),b.activeTexture($.TEXTURE0),b.pixelStorei($.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei($.UNPACK_ALIGNMENT,q.unpackAlignment);const Ze=b.getParameter($.UNPACK_ROW_LENGTH),oe=b.getParameter($.UNPACK_IMAGE_HEIGHT),mn=b.getParameter($.UNPACK_SKIP_PIXELS),Un=b.getParameter($.UNPACK_SKIP_ROWS),ui=b.getParameter($.UNPACK_SKIP_IMAGES);b.pixelStorei($.UNPACK_ROW_LENGTH,_e.width),b.pixelStorei($.UNPACK_IMAGE_HEIGHT,_e.height),b.pixelStorei($.UNPACK_SKIP_PIXELS,Ft),b.pixelStorei($.UNPACK_SKIP_ROWS,Jt),b.pixelStorei($.UNPACK_SKIP_IMAGES,te);const $i=T.isDataArrayTexture||T.isData3DTexture,fe=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const Ae=rt.get(T),fi=rt.get(q),xe=rt.get(Ae.__renderTarget),di=rt.get(fi.__renderTarget);b.bindFramebuffer($.READ_FRAMEBUFFER,xe.__webglFramebuffer),b.bindFramebuffer($.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let Ki=0;Ki<Dt;Ki++)$i&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.get(T).__webglTexture,it,te+Ki),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,At,Le+Ki)),$.blitFramebuffer(Ft,Jt,Pt,Tt,Ut,le,Pt,Tt,$.DEPTH_BUFFER_BIT,$.NEAREST);b.bindFramebuffer($.READ_FRAMEBUFFER,null),b.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(it!==0||T.isRenderTargetTexture||rt.has(T)){const Ae=rt.get(T),fi=rt.get(q);b.bindFramebuffer($.READ_FRAMEBUFFER,N),b.bindFramebuffer($.DRAW_FRAMEBUFFER,G);for(let xe=0;xe<Dt;xe++)$i?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ae.__webglTexture,it,te+xe):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ae.__webglTexture,it),fe?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,fi.__webglTexture,At,Le+xe):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,fi.__webglTexture,At),it!==0?$.blitFramebuffer(Ft,Jt,Pt,Tt,Ut,le,Pt,Tt,$.COLOR_BUFFER_BIT,$.NEAREST):fe?$.copyTexSubImage3D(Lt,At,Ut,le,Le+xe,Ft,Jt,Pt,Tt):$.copyTexSubImage2D(Lt,At,Ut,le,Ft,Jt,Pt,Tt);b.bindFramebuffer($.READ_FRAMEBUFFER,null),b.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else fe?T.isDataTexture||T.isData3DTexture?$.texSubImage3D(Lt,At,Ut,le,Le,Pt,Tt,Dt,me,Ye,_e.data):q.isCompressedArrayTexture?$.compressedTexSubImage3D(Lt,At,Ut,le,Le,Pt,Tt,Dt,me,_e.data):$.texSubImage3D(Lt,At,Ut,le,Le,Pt,Tt,Dt,me,Ye,_e):T.isDataTexture?$.texSubImage2D($.TEXTURE_2D,At,Ut,le,Pt,Tt,me,Ye,_e.data):T.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,At,Ut,le,_e.width,_e.height,me,_e.data):$.texSubImage2D($.TEXTURE_2D,At,Ut,le,Pt,Tt,me,Ye,_e);b.pixelStorei($.UNPACK_ROW_LENGTH,Ze),b.pixelStorei($.UNPACK_IMAGE_HEIGHT,oe),b.pixelStorei($.UNPACK_SKIP_PIXELS,mn),b.pixelStorei($.UNPACK_SKIP_ROWS,Un),b.pixelStorei($.UNPACK_SKIP_IMAGES,ui),At===0&&q.generateMipmaps&&$.generateMipmap(Lt),b.unbindTexture()},this.initRenderTarget=function(T){rt.get(T).__webglFramebuffer===void 0&&at.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?at.setTextureCube(T,0):T.isData3DTexture?at.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?at.setTexture2DArray(T,0):at.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){Z=0,X=0,tt=null,b.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const _f="#f7f7f7",tn=.0254,oc={canvas:.038,panel:.022,paper:.012,digital:.012},Ao={face:.75*tn,depth:1.5*tn,mat:3*tn,lip:.25*tn,bevel:.125*tn},W_={black:"#161616",white:"#efeee9"},X_={white:"#f4f2ec",black:"#1c1c1c"},q_="#faf9f4",Ro={strip:.25*tn,depth:2*tn,gap:.25*tn,below:.25*tn},Y_="#e3cba2",$_="#111111";function ac(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const lc=s=>!!s&&s.style==="float";function K_(s){const t=ac(s),e=t?lc(t)?2*(Ro.gap+Ro.strip):2*(Ao.mat+Ao.face):0;return[s.w*tn+e,s.h*tn+e]}const Z_=s=>{const t=ac(s);return t?lc(t)?Ro.depth:Ao.depth:oc[s.kind]};async function J_(){const s={},t=async o=>{const a=await fetch(`data/${o}.json?${Date.now()}`,{cache:"no-store"});if(!a.ok)throw new Error(`data/${o}.json: ${a.status}`);return s[o]=a.headers.get("x-rev")??"",a.json()},[e,n,i,r]=await Promise.all([t("catalogue"),t("layout"),t("images"),t("machines")]);return n.machines??(n.machines=[]),{catalogue:e,layout:n,images:i,machines:r,revs:s}}const Q_=(s,t)=>`${s}:${t}`,La=(s,t,e)=>s.paint[Q_(t,e)]??s.defaultPaint;function Co(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,r=Math.round(i*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const Lo=s=>s.title.trim()||"Untitled",Gh=.004;function j_(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const o=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:o,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const tv=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,Vh=(s,t,e,n)=>s.some(i=>i.id!==n&&tv(i.rect,t,e));function Wh(s,t,e){let n=[[s,t]];for(const[i,r]of e){const o=[];for(const[a,l]of n){if(r<=a||i>=l){o.push([a,l]);continue}i>a&&o.push([a,i]),r<l&&o.push([r,l])}n=o}return n.filter(([i,r])=>r-i>.05)}function ev(s){var d;const t=j_(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,r=s.doorHeight,o={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=m=>{const x=s.doors.filter(g=>g.wall===m).map(g=>[Math.min(g.a,g.b),Math.max(g.a,g.b)]);return m==="S"&&x.push([o.a,o.b]),x},l=[],c=[];for(const m of t){for(const g of m.sides){const p=m.rect,M=m.axis==="x"?g>0?p.z1:p.z0:g>0?p.x1:p.x0,E=m.axis==="x"?[0,g]:[g,0],v=[E[1],-E[0]],y=[];for(const S of t){if(S===m)continue;const C=S.rect,A=m.axis==="x"?C.z0:C.x0,U=m.axis==="x"?C.z1:C.x1;if(!(g>0?A<=M+Gh&&U>=M+.01:U>=M-Gh&&A<=M-.01))continue;const N=m.axis==="x"?C.x0:C.z0,G=m.axis==="x"?C.x1:C.z1;y.push([N,G])}const w=m.outer?m.a0:Math.max(m.a0,m.axis==="x"?n.x0:n.z0),L=m.outer?m.a1:Math.min(m.a1,m.axis==="x"?n.x1:n.z1),_=a(m.id);for(const[S,C]of Wh(w,L,y)){const A=U=>{const F=m.axis==="x"?U:M+E[0]*.02,N=m.axis==="x"?M+E[1]*.02:U;return Vh(t,F,N,m.id)};l.push({key:`${m.id}:${g}:${S.toFixed(3)}`,wall:m.id,side:g,axis:m.axis,plane:M,u0:S,u1:C,n:E,right:v,cornerA:A(S-.02),cornerB:A(C+.02),freeA:!m.outer&&!A(S-.02)&&Math.abs(S-m.a0)<1e-6,freeB:!m.outer&&!A(C+.02)&&Math.abs(C-m.a1)<1e-6,outer:m.outer,t:m.t,doors:_.map(([U,F])=>[Math.max(U,S),Math.min(F,C)]).filter(([U,F])=>F-U>.01),color:((d=(s.paintAt??[]).find(U=>U.wall===m.id&&U.side===g&&U.u>=S-1e-6&&U.u<=C+1e-6))==null?void 0:d.color)??La(s,m.id,g)})}}if(m.outer)continue;const x=La(s,m.id,1);for(const g of[m.a0,m.a1]){const p=g===m.a0?-1:1,M=m.axis==="x"?g+p*.02:(m.rect.x0+m.rect.x1)/2,E=m.axis==="x"?(m.rect.z0+m.rect.z1)/2:g+p*.02;Vh(t,M,E,m.id)||(m.axis==="x"?c.push(vi(g,m.rect.z0,g,m.rect.z1,[p,0,0],i,x)):c.push(vi(m.rect.x0,g,m.rect.x1,g,[0,0,p],i,x)))}for(const[g,p]of a(m.id)){const M=m.rect;m.axis==="x"?(c.push(vi(g,M.z0,g,M.z1,[1,0,0],r,x)),c.push(vi(p,M.z0,p,M.z1,[-1,0,0],r,x)),c.push(Pa(g,p,M.z0,M.z1,"x",r,x))):(c.push(vi(M.x0,g,M.x1,g,[0,0,1],r,x)),c.push(vi(M.x0,p,M.x1,p,[0,0,-1],r,x)),c.push(Pa(g,p,M.x0,M.x1,"z",r,x)))}}const h=.04,u=La(s,"S",-1);c.push(vi(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,u)),c.push(vi(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,u)),c.push(Pa(o.a,o.b,e.z1,e.z1+h,"x",r,u));const f=[];for(const m of t){const x=m.rect,g=m.axis==="x"?[x.x0,x.x1]:[x.z0,x.z1];for(const[p,M]of Wh(g[0],g[1],a(m.id)))f.push(m.axis==="x"?{x0:p,x1:M,z0:x.z0,z1:x.z1}:{x0:x.x0,x1:x.x1,z0:p,z1:M})}return{inner:n,H:i,doorH:r,walls:t,faces:l,extra:c,solids:f,entrance:o,ceilColor:s.ceilingPaint??_f,ceilAt:s.ceilingAt??[]}}function vi(s,t,e,n,i,r,o){const a=e-s,l=n-t,c=a*i[2]-l*i[0],[h,u]=c>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],r,u[1]],[h[0],r,h[1]]],n:i,color:o}}function Pa(s,t,e,n,i,r,o){const a=(c,h)=>i==="x"?[c,r,h]:[h,r,c];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const Ci=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],cc=s=>s.axis==="x"?s.right[0]:s.right[1];function Vi(s,t,e,n,i,r=0){const o=n-t,a=i-e;for(const l of s){let c=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const m=d/f;if(f<0){if(m>h)return!1;m>c&&(c=m)}else{if(m<c)return!1;m<h&&(h=m)}return!0};if(u(-o,t-l.x0)&&u(o,l.x1-t)&&u(-a,e-l.z0)&&u(a,l.z1-e)&&h-c>1e-4&&h>r&&c<1-r)return!0}return!1}function nv(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*i).fill(-2);for(const c of s.walls){const h=c.rect,u=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),m=Math.min(i-1,Math.floor((h.z1+r-e.z0)/t));for(let x=d;x<=m;x++)for(let g=u;g<=f;g++)o[x*n+g]=-1}let a=0;const l=[];for(let c=0;c<n*i;c++)if(o[c]===-2){for(o[c]=a,l.push(c);l.length;){const h=l.pop(),u=h%n,f=(h-u)/n;u>0&&o[h-1]===-2&&(o[h-1]=a,l.push(h-1)),u<n-1&&o[h+1]===-2&&(o[h+1]=a,l.push(h+1)),f>0&&o[h-n]===-2&&(o[h-n]=a,l.push(h-n)),f<i-1&&o[h+n]===-2&&(o[h+n]=a,l.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:o,rooms:a}}function iv(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function sv(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=iv(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const ys=.125,lr=.086,Xh=.12,Po=1e3,Io='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',cr=140,Do=62,vf=46;let Xs=null;function rv(s){Xs??(Xs=document.createElement("canvas").getContext("2d")),Xs.font=`300 ${cr}px ${Io}`;const t=Xs.measureText(s.title).width;Xs.font=`400 ${Do}px ${Io}`;const e=s.sub?Xs.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/Po,h:(cr+(s.sub?vf+Do:0)+30)/Po}}const Fl=.03,ov=.35,qh=1.1;function av(s,t){if(s.text){const n=rv(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?K_(e):[.3,.3]}function lv(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function cv(s,t,e,n,i,r){const o=s.u0+i/2+Fl,a=s.u1-i/2-Fl,l=o>a?(s.u0+s.u1)/2:Math.max(o,Math.min(a,e)),c=r/2+.05,h=t-.12-r/2,u=c>h?t/2:Math.max(c,Math.min(h,n));return{u:l,y:u}}function hv(s,t,e,n,i){const r=cc(s),o=t*r,a=r>0?s.u1:-s.u0;let l=o+n/2+Xh+ys/2;l+ys/2>a-Fl&&(l=o-n/2-Xh-ys/2);const c=Math.max(.2+lr/2,e-i/2+lr/2);return{pos:Ci(s,l*r,c),w:ys,h:lr}}function uv(s,t,e){const n=[],i=[];for(const l of s.hang){if(!l.text&&(!e.has(l.id)||e.get(l.id).off))continue;const c=lv(t,l);if(!c){n.push(l);continue}const[h,u]=av(l,e),f=cv(c,t.H,l.u,l.y,h,u);l.u=+f.u.toFixed(4),l.y=+f.y.toFixed(4);const d=l.text?void 0:e.get(l.id);i.push({id:l.id,work:d,text:l.text,place:l,face:c,pos:Ci(c,f.u,f.y),w:h,h:u,depth:d?Z_(d):.001,label:d?hv(c,f.u,f.y,h,u):null,over:!1})}const r=l=>l.face.axis==="x"?l.pos[0]:l.pos[2];for(let l=0;l<i.length;l++){const c=i[l];for(const[h,u]of c.face.doors)r(c)+c.w/2>h&&r(c)-c.w/2<u&&c.pos[1]-c.h/2<t.doorH&&(c.over=!0);for(let h=l+1;h<i.length;h++){const u=i[h];if(u.face!==c.face)continue;const f=Math.abs(r(c)-r(u))<(c.w+u.w)/2-.005,d=Math.abs(c.pos[1]-u.pos[1])<(c.h+u.h)/2-.005;f&&d&&(c.over=!0,u.over=!0)}}const o=[],a=new Map;for(const l of i)a.has(l.face)||a.set(l.face,[]),a.get(l.face).push(l);for(const[l,c]of a){const h=c.map((x,g)=>g),u=x=>h[x]===x?x:h[x]=u(h[x]);for(let x=0;x<c.length;x++)for(let g=x+1;g<c.length;g++){const p=c[x],M=c[g];if(p.text||M.text)continue;const E=Math.abs(r(p)-r(M))-(p.w+M.w)/2,v=Math.abs(p.pos[1]-M.pos[1])-(p.h+M.h)/2;Math.max(E,v)<ov&&(h[u(x)]=u(g))}const f=new Map;c.forEach((x,g)=>{const p=u(g);f.has(p)||f.set(p,[]),f.get(p).push(x)});const d=[l.n[0],0,l.n[1]],m=[l.right[0],0,l.right[1]];for(const x of f.values()){const g=Math.min(...x.map(w=>r(w)-w.w/2)),p=Math.max(...x.map(w=>r(w)+w.w/2)),M=Math.min(...x.map(w=>w.pos[1]-w.h/2)),E=Math.max(...x.map(w=>w.pos[1]+w.h/2)),v=Ci(l,(g+p)/2,(M+E)/2),y={w:p-g,h:E-M};o.push({face:l,centre:v,normal:d,right:m,w:y.w,h:y.h,items:x,lamp:fv(v,d,m,y,x,t)})}}return{placed:o,items:i,homeless:n}}function fv(s,t,e,n,i,r){const o=r.H-.03;let a=qh;for(let M=.2;M<=qh+.25;M+=.05)if(Vi(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[s[0]+t[0]*a,o,s[2]+t[2]*a],c=i.reduce((M,E)=>M+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let m=0;for(const[M,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-l[0],s[1]+E*n.h/2-l[1],s[2]+e[2]*M*n.w/2-l[2]],y=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,g=[-u[0]/f,-u[1]/f,-u[2]/f],p=g[0]*t[0]+g[2]*t[2];return{p:l,d,cOuter:Math.cos(x),cInner:Math.cos(m),i:f*f/Math.max(.2,p)}}const dv=1.45,Mf=.07,yf=.07,Sf=.125,pv=.086,wf=.12,mv=1.3,bf=.16,Yh=1e3,$h='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',Kh=140,Zh=62,gv=46,xv=1.6;let qs=null;function Ef(s){qs??(qs=document.createElement("canvas").getContext("2d")),qs.font=`300 ${Kh}px ${$h}`;const t=qs.measureText(s.title).width;qs.font=`400 ${Zh}px ${$h}`;const e=s.sub?qs.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/Yh,h:(Kh+(s.sub?gv+Zh:0)+30)/Yh,colW:[],colH:[]}}const _v=6400;function vv(s){return s.map(t=>({title:Lo(t),detail:[t.medium,Co(t),t.year].filter(Boolean).join(", ")}))}const Mv=s=>(150+vv(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/_v,Jh=.45,Qh=.25,Ia=.4,jh=.12,tu=1.1,zl=s=>[s.w*tn,s.h*tn];function Tf(s,t){const e=[],n=[];for(const o of s){const a=o.map(l=>t.get(l)).filter(Boolean);e.push(Math.max(0,...a.map(l=>zl(l)[0]))),n.push(a.reduce((l,c)=>l+zl(c)[1],0)+yf*Math.max(0,a.length-1))}const i=e.reduce((o,a)=>o+a,0)+Mf*Math.max(0,s.length-1),r=Math.max(0,...n);return{w:i,h:r,colW:e,colH:n}}const yv=s=>s.cols.reduce((t,e)=>t+e.length,0),Sv=s=>yv(s)>1?bf:Sf,wv=(s,t)=>s.text?Ef(s.text).w:Tf(s.cols,t).w+wf+Sv(s);function bv(s){const t=[];let e=s.u0+(s.cornerA?Jh:Qh);const n=s.u1-(s.cornerB?Jh:Qh);for(const[i,r]of[...s.doors].sort((o,a)=>o[0]-a[0]))i-Ia-e>.3&&t.push([e,i-Ia]),e=Math.max(e,r+Ia);return n-e>.3&&t.push([e,n]),t}function Ev(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function Tv(s,t,e){const n=new Map,i=[];for(const o of s.hang){if(!o.text&&(o.cols=o.cols.map(l=>l.filter(c=>e.has(c))).filter(l=>l.length),!o.cols.length))continue;const a=Ev(t,o);if(!a){i.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const l=bv(o);if(!l.length){i.push(...a);continue}const c=l.map(()=>[]);for(const u of a){let f=0,d=1/0;l.forEach(([m,x],g)=>{const p=u.u<m?m-u.u:u.u>x?u.u-x:0;p<d&&(d=p,f=g)}),c[f].push(u)}const h=cc(o);l.forEach(([u,f],d)=>{const m=c[d].sort((w,L)=>(w.u-L.u)*h);if(!m.length)return;const x=m.map(w=>wv(w,e)),g=f-u,p=x.reduce((w,L)=>w+L,0);let M=(g-p)/(m.length+1);const E=M<jh;E&&(M=jh);const v=p+M*(m.length+1);let y=(h>0?u:-f)+(g-v)/2+M;m.forEach((w,L)=>{const _=w.text?Ef(w.text):Tf(w.cols,e),C=(y+_.w/2)*h;w.u=+C.toFixed(4),r.push(Av(w,o,C,_,e,t,E)),y+=x[L]+M})})}return{placed:r,homeless:i}}function Av(s,t,e,n,i,r,o){const a=cc(t),l=[t.n[0],0,t.n[1]],c=[t.right[0],0,t.right[1]];let h=s.text?xv:dv;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const u=[];let f=-n.w/2;s.cols.forEach((E,v)=>{const y=n.colW[v],w=n.colH[v];let L=h+w/2;for(const _ of E){const S=i.get(_),[C,A]=zl(S),U=f+y/2;u.push({work:S,pos:Ci(t,e+U*a,L-A/2),w:C,h:A,depth:oc[S.kind]}),L-=A+yf}f+=y+Mf});const d=s.cols.flat().map(E=>i.get(E)),m=d.length>1?bf:Sf,x=d.length>1?Mv(d):pv,g=e+(n.w/2+wf+m/2)*a,p=Math.min(mv,h+n.h/2-x/2),M=Ci(t,e,h);return{def:s,face:t,centre:M,normal:l,right:c,w:n.w,h:n.h,items:u,label:{pos:Ci(t,g,Math.max(p,.3+x/2)),w:m,h:x,works:d},lamp:Rv(M,l,c,n,u,r),over:o,text:s.text}}function Rv(s,t,e,n,i,r){const o=r.H-.03;let a=tu;for(let M=.2;M<=tu+.25;M+=.05)if(Vi(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[s[0]+t[0]*a,o,s[2]+t[2]*a],c=i.reduce((M,E)=>M+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*c,s[1],s[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let m=0;for(const[M,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-l[0],s[1]+E*n.h/2-l[1],s[2]+e[2]*M*n.w/2-l[2]],y=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,g=[-u[0]/f,-u[1]/f,-u[2]/f],p=g[0]*t[0]+g[2]*t[2];return{p:l,d,cOuter:Math.cos(x),cInner:Math.cos(m),i:f*f/Math.max(.2,p)}}function Cv(s,t,e){if(s.version===2||!s.hang.some(o=>"cols"in o))return!1;const{placed:n}=Tv(s,t,e),i=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&i.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const l of o.items)i.push({id:l.work.id,wall:a.wall,side:a.side,u:r(a,l.pos),y:+l.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const Lv=["b","c","s","t","sh","hl"],Af=s=>!s||Lv.every(t=>!s[t]);function Rf(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const eu=s=>Math.min(1,Math.max(0,s));function Pv(s,t){let e=Math.pow(s,t.gamma);e=eu(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return eu(e+t.sh*.25*n+t.hl*.25*i)}const Iv=`
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
  }`;function Dv(s){const t=Rf(s);return{uAdj:{value:Af(s)?0:1},uWarm:{value:new D(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let Mi=null;const nu="http://www.w3.org/2000/svg";function Uv(s,t){if(Af(t))return"";Mi||(Mi=document.createElementNS(nu,"svg"),Mi.setAttribute("width","0"),Mi.setAttribute("height","0"),Mi.style.position="absolute",document.body.append(Mi));const e=`adj-${s}`;let n=Mi.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(nu,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),Mi.append(n));const i=Rf(t),[r,,o]=i.warm,a=[.2126,.7152,.0722],l=i.sat,c=Array.from({length:65},(u,f)=>Pv(f/64,i).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(f=>((1-l)*a[f]+(u===f?l:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${o} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${c}"/><feFuncG type="table" tableValues="${c}"/><feFuncB type="table" tableValues="${c}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const ki=1.62,Nv=12,Fv=6.5,zv=2,Ov=1.7,yi=1.15,iu=.0022,kv=2.6,Bv=4.6,hn=.3;class Hv{constructor(t){I(this,"pos",new D(6.6,ki,10.2));I(this,"vel",new D);I(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));I(this,"pitch",.05);I(this,"yawVel",0);I(this,"pitchVel",0);I(this,"keys",new Set);I(this,"taps",new Map);I(this,"frozen",!1);I(this,"glide",new Ot);I(this,"spin",0);I(this,"goal",null);I(this,"moved",!1);I(this,"solids",[]);I(this,"obstacles",[]);I(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("message",e=>{var i;const n=(i=e.data)==null?void 0:i.rmiKey;!n||!/^https:\/\/(www\.)?robynmiller\.net$/.test(e.origin)||(n.type==="down"?this.keys.add(n.code):this.keys.delete(n.code))}),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||(this.yaw-=e.movementX*iu,this.pitch=Math.max(-yi,Math.min(yi,this.pitch-e.movementY*iu)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}drag(t,e){this.pos.x+=t,this.pos.z+=e,this.collide(),this.moved=!0,this.goal=null}turnBy(t,e){this.yaw+=t,this.pitch=Math.max(-yi,Math.min(yi,this.pitch+e)),this.moved=!0,this.goal=null}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*zv-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*Ov-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>yi||this.pitch<-yi)&&(this.pitch=Math.max(-yi,Math.min(yi,this.pitch)),this.pitchVel=0);let r=0,o=0;e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1),(r||o||n||i)&&(this.moved=!0);let a=0,l=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?Bv:kv,u=Math.hypot(r,o),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*r+d*o)/u*h,l=(-d*r-f*o)/u*h}const c=1-Math.exp(-(r||o?Nv:Fv)*t);if(this.vel.x+=(a-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),m=Math.hypot(f,d);if(m>1e-9){const x=f/m,g=d/m,p=this.vel.x*x+this.vel.z*g;p<0&&(this.vel.x-=x*p,this.vel.z-=g*p)}}this.frozen||this.coast(t)}coast(t){const e=this.goal;if(e){const n=e.x-this.pos.x,i=e.z-this.pos.z,r=Math.hypot(n,i),o=1-Math.exp(-2.6*t),a=Math.min(r,Math.max(r*o,Math.min(r,.9*t)));if(r>1e-4){const l=this.pos.x,c=this.pos.z;this.pos.x+=n/r*a,this.pos.z+=i/r*a,this.collide(),Math.hypot(this.pos.x-l,this.pos.z-c)<a*.2&&(this.goal=null)}e.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw))*o),e.pitch!==void 0&&(this.pitch+=(e.pitch-this.pitch)*o),r<.02&&(e.yaw===void 0||Math.abs(Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,i=this.pos.z;this.pos.x+=this.glide.x*t,this.pos.z+=this.glide.y*t,this.collide();const r=(this.pos.x-n)/Math.max(t,1e-6),o=(this.pos.z-i)/Math.max(t,1e-6);this.glide.set(r,o).multiplyScalar(Math.exp(-2.4*t)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*t,this.spin*=Math.exp(-3.2*t)):this.spin=0}collide(){const t=this.pos;for(let e=0;e<2;e++)for(const n of this.solids){const i=Math.max(n.x0,Math.min(t.x,n.x1)),r=Math.max(n.z0,Math.min(t.z,n.z1)),o=t.x-i,a=t.z-r,l=o*o+a*a;if(!(l>=hn*hn))if(l>1e-12){const c=Math.sqrt(l);t.x+=o/c*(hn-c),t.z+=a/c*(hn-c)}else{const c=[t.x-n.x0+hn,n.x1-t.x+hn,t.z-n.z0+hn,n.z1-t.z+hn],h=Math.min(...c);h===c[0]?t.x=n.x0-hn:h===c[1]?t.x=n.x1+hn:h===c[2]?t.z=n.z0-hn:t.z=n.z1+hn}}for(const e of this.obstacles){const n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i),o=hn*.7+e.r;r<o&&r>1e-6&&(t.x=e.x+n/r*o,t.z=e.z+i/r*o)}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const hc=.0254,Ol=.72,uc=.7,en=2*hc,Gv=6*hc,Vv=.15,Oe=ki,Cn=-uc/2,Ln=uc/2,bi=Cn+Gv,fc=Oe+bi,ir=s=>fc-s,_n=s=>fc-s-Vv*Math.SQRT2,Da=ir(Ln),Cs=.46,Ls=.3,Uo=.018,No=-.06,su={w:Cs-.07,h:Ls-.08},ru={w:Cs,h:Ls},Wv=.47,Xv=.5,ou=.7,_r=new D(0,1,1).normalize(),Cf=new D(0,1,-1).normalize(),Lf={value:0};function qv(s,t,e){const n=new Map(t.map(r=>[r.id,r])),i=[];for(const r of s.machines??[]){const o=n.get(r.id);if(!o||o.off)continue;const a=We.degToRad(r.rot),l=new Zt().makeRotationY(a).setPosition(r.x,0,r.z),c=[Math.sin(a),0,Math.cos(a)],h=new Yt().setFromMatrix4(l),u=new D(0,_n(No),No).addScaledVector(_r,.004).applyMatrix4(l),f=_r.clone().applyMatrix3(h),d=Cf.clone().applyMatrix3(h),m=new D(1,0,0).applyMatrix3(h);i.push({machine:o,spot:r,matrix:l,front:c,screen:{c:u,n:f,up:d,right:m,w:Cs,h:Ls},lamp:Yv(r,c,u,e)})}return i}function Yv(s,t,e,n){const i=[s.x+t[0]*ou,n-.03,s.z+t[2]*ou],r=new D(e.x-i[0],e.y-i[1],e.z-i[2]),o=r.length();r.divideScalar(o);const a=Math.atan2(.62,o),l=a+We.degToRad(11);return{p:i,d:[r.x,r.y,r.z],cOuter:Math.cos(l),cInner:Math.cos(a),i:Xv*o*o}}const Si=new zt("#efeee9"),Ys=new zt("#3a3a3a");function $v(){const s=[],t=[],e=[],n=[],i=[],r=g=>new D(g[0],g[1],g[2]),o=(g,p,M,E)=>{const v=new D().crossVectors(r(g[1]).sub(r(g[0])),r(g[2]).sub(r(g[0]))).normalize();v.dot(r(p))<0&&(g=[...g].reverse(),v.negate());const y=s.length/3;for(const w of g)s.push(w[0],w[1],w[2]),t.push(v.x,v.y,v.z),e.push(M.r,M.g,M.b),n.push(E);for(let w=1;w<g.length-1;w++)i.push(y,y+w,y+w+1)},a=-Ol/2,l=Ol/2,c=a+en,h=l-en,u=(g,p)=>[g,ir(p),p];o([[a,0,Cn],[l,0,Cn],[l,Oe,Cn],[a,Oe,Cn]],[0,0,-1],Si,0),o([[a,0,Ln],[l,0,Ln],[l,Da,Ln],[a,Da,Ln]],[0,0,1],Si,0),o([[a,Oe,Cn],[l,Oe,Cn],[l,Oe,bi],[a,Oe,bi]],[0,1,0],Si,0);for(const[g,p]of[[a,-1],[l,1]])o([[g,0,Cn],[g,0,Ln],[g,Da,Ln],[g,Oe,bi],[g,Oe,Cn]],[p,0,0],Si,0);const f=bi+en,d=Ln-en;o([u(a,d),u(l,d),u(l,Ln),u(a,Ln)],[0,1,1],Si,0),o([u(a,bi),u(l,bi),u(l,f),u(a,f)],[0,1,1],Si,0),o([u(a,f),u(c,f),u(c,d),u(a,d)],[0,1,1],Si,0),o([u(h,f),u(l,f),u(l,d),u(h,d)],[0,1,1],Si,0);const m=Cn+en;o([[c,_n(d),d],[h,_n(d),d],[h,ir(d),d],[c,ir(d),d]],[0,0,-1],Ys,1),o([[c,_n(m),m],[h,_n(m),m],[h,Oe-en,m],[c,Oe-en,m]],[0,0,1],Ys,1),o([[c,Oe-en,m],[h,Oe-en,m],[h,Oe-en,f],[c,Oe-en,f]],[0,-1,0],Ys,1);for(const[g,p]of[[c,1],[h,-1]])o([[g,_n(m),m],[g,_n(d),d],[g,ir(d),d],[g,Oe-en,f],[g,Oe-en,m]],[p,0,0],Ys,1);o([[c,_n(m),m],[h,_n(m),m],[h,_n(d),d],[c,_n(d),d]],[0,1,1],Ys,1);const x=new be;return x.setAttribute("position",new Xt(s,3)),x.setAttribute("normal",new Xt(t,3)),x.setAttribute("aCol",new Xt(e,3)),x.setAttribute("aInner",new Xt(n,1)),x.setIndex(i),x}let au=null;const dc=`
  #define KW ${(Ol/2).toFixed(5)}
  #define KD ${(uc/2).toFixed(5)}
  #define KH ${Oe.toFixed(5)}
  #define KT ${en.toFixed(5)}
  #define KZB ${Cn.toFixed(5)}
  #define KZF ${Ln.toFixed(5)}
  #define KZC ${bi.toFixed(5)}
  #define KK ${fc.toFixed(5)}
`;function Kv(s,t,e,n){return new Ge({uniforms:{uLP:{value:s},uLD:{value:t},uLC:{value:new Ot(e.cOuter,e.cInner)},uLI:{value:e.i},uAmb:{value:qo},uLCol:{value:Is},uSC:{value:n},uSN:{value:_r.clone()}},vertexShader:`
      attribute vec3 aCol; attribute float aInner;
      varying vec3 vP; varying vec3 vN; varying vec3 vWN; varying vec3 vCol; varying float vInner;
      void main() {
        vP = position; vN = normal; vWN = normalize(mat3(modelMatrix) * normal); vCol = aCol; vInner = aInner;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${dc}
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
      }`})}function Zv(s,t=!1){return new Ge({uniforms:{uLP:{value:new D(...s)},uGW:{value:Cs/(Cs+2*Uo)},uGH:{value:Ls/(Ls+2*Uo)},uHaze:{value:t?0:.006}},vertexShader:`
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
      }`})}const Jv={A:[[[0,0],[0,4],[2,6],[4,4],[4,0]],[[0,2],[4,2]]],B:[[[0,0],[0,6],[3,6],[4,5],[4,4],[3,3],[0,3]],[[3,3],[4,2],[4,1],[3,0],[0,0]]],C:[[[4,0],[0,0],[0,6],[4,6]]],D:[[[0,0],[0,6],[2,6],[4,4],[4,2],[2,0],[0,0]]],E:[[[4,0],[0,0],[0,6],[4,6]],[[0,3],[3,3]]],F:[[[0,0],[0,6],[4,6]],[[0,3],[3,3]]],G:[[[2,2],[4,2],[4,0],[0,0],[0,6],[4,6],[4,4]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[0,0],[4,0]],[[2,0],[2,6]],[[0,6],[4,6]]],J:[[[0,2],[2,0],[4,0],[4,6]]],K:[[[0,0],[0,6]],[[4,6],[0,3],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,4],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],O:[[[0,0],[0,6],[4,6],[4,0],[0,0]]],P:[[[0,0],[0,6],[4,6],[4,3],[0,3]]],Q:[[[0,0],[0,6],[4,6],[4,2],[2,0],[0,0]],[[2,2],[4,0]]],R:[[[0,0],[0,6],[4,6],[4,3],[0,3]],[[1,3],[4,0]]],S:[[[4,6],[0,6],[0,3],[4,3],[4,0],[0,0]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],U:[[[0,6],[0,0],[4,0],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[0,0],[2,2],[4,0],[4,6]]],X:[[[0,0],[4,6]],[[0,6],[4,0]]],Y:[[[0,6],[2,4],[4,6]],[[2,4],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],0:[[[0,0],[0,6],[4,6],[4,0],[0,0]]],1:[[[1,5],[2,6],[2,0]],[[1,0],[3,0]]],2:[[[0,6],[4,6],[4,3],[0,3],[0,0],[4,0]]],3:[[[0,0],[4,0],[4,6],[0,6]],[[0,3],[4,3]]],4:[[[0,6],[0,3],[4,3]],[[4,6],[4,0]]],5:[[[4,6],[0,6],[0,3],[4,3],[4,0],[0,0]]],6:[[[4,6],[0,6],[0,0],[4,0],[4,3],[0,3]]],7:[[[0,6],[4,6],[4,0]]],8:[[[0,0],[4,0],[4,6],[0,6],[0,0]],[[0,3],[4,3]]],9:[[[4,3],[0,3],[0,6],[4,6],[4,0],[0,0]]],"-":[[[1,3],[3,3]]],".":[[[2,0],[2,.35]]],",":[[[2,.5],[1.4,-1]]],"'":[[[2,6],[2,4.6]]],":":[[[2,1],[2,1.35]],[[2,4],[2,4.35]]],"/":[[[0,0],[4,6]]],"!":[[[2,6],[2,1.6]],[[2,0],[2,.35]]],"?":[[[0,4],[0,6],[4,6],[4,3],[2,3],[2,1.6]],[[2,0],[2,.35]]],"&":[[[4,0],[1,4],[1,6],[3,6],[3,5],[0,2],[0,0],[2,0],[4,2]]],"~":[[[0,3],[1,4],[3,2],[4,3]]],"→":[[[0,3],[4,3]],[[2.6,4.4],[4,3],[2.6,1.6]]],"–":[[[1,3],[3,3]]],"—":[[[0,3],[4,3]]]},Ua=6,lu=10;function Qv(s){const t=s.toUpperCase().trim();if(/[|\n]/.test(t))return t.split(/\s*[|\n]\s*/).filter(Boolean);if(t.length<=11||!t.includes(" "))return[t];let e=[t],n=1/0;const i=t.split(/\s+/);for(let r=1;r<i.length;r++){const o=i.slice(0,r).join(" "),a=i.slice(r).join(" "),l=Math.max(o.length,a.length);l<n&&(n=l,e=[o,a])}return e}function jv(s,t,e){const n=Qv(s),i=Math.max(...n.map(l=>l.length*Ua-2),1),r=n.length*6+(n.length-1)*(lu-6),o=Math.min(t/i,e/r,.07/6),a=[];return n.forEach((l,c)=>{const h=(l.length*Ua-2)*o,u=r*o/2-c*lu*o;[...l].forEach((f,d)=>{const m=Jv[f];if(!m)return;const x=-h/2+d*Ua*o,g=u-6*o;for(const p of m)for(let M=0;M<p.length-1;M++){const E=p[M],v=p[M+1];a.push([x+E[0]*o,g+E[1]*o,x+v[0]*o,g+v[1]*o])}})}),{segs:a,u:o}}function tM(s){const t=[],e=[],n=[],i=[],r=[];s.forEach((l,c)=>{const h=t.length/2;for(const[u,f]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(l[0],l[1]),e.push(l[2],l[3]),n.push(u,f),i.push(c*7.31+.5);r.push(h,h+1,h+2,h,h+2,h+3)});const o=new be,a=[];for(let l=0;l<t.length/2;l++)a.push((t[2*l]+e[2*l])/2,(t[2*l+1]+e[2*l+1])/2,0);return o.setAttribute("position",new Xt(a,3)),o.setAttribute("aA",new Xt(t,2)),o.setAttribute("aB",new Xt(e,2)),o.setAttribute("aCorner",new Xt(n,2)),o.setAttribute("aSeed",new Xt(i,1)),o.setIndex(r),o.boundingSphere=new qi(new D,.4),o}function eM(s,t,e){return new Ge({uniforms:{uTime:Lf,uSeed:{value:t},uOn:e,uBeam:{value:Math.max(7e-4,s*.085)},uHalo:{value:Math.max(.0022,s*.3)},uExt:{value:Math.max(.009,s*1.3)},uJit:{value:s*.07},uMis:{value:s*.12},uWob:{value:s*.06}},transparent:!0,depthWrite:!1,blending:Xa,toneMapped:!1,vertexShader:`
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
      }`})}const Jr=4*hc,nM=-.16,cu=.2,iM=.62;let ms=null;function sM(){if(ms)return ms;const s=document.createElement("canvas");s.width=s.height=512;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#fbec7a"),e.addColorStop(.62,"#f9e66c"),e.addColorStop(1,"#efd85a"),t.fillStyle=e,t.fillRect(0,0,512,512),t.fillStyle="rgba(255,255,255,0.10)",t.fillRect(0,0,512,92),t.fillStyle="#1f1d2b",t.textAlign="center",t.textBaseline="alphabetic";const n=(i,r,o,a,l)=>{t.save(),t.translate(o,a),t.rotate(l),t.font=`${r}px "Caveat Brush", "Marker Felt", "Comic Sans MS", cursive`,t.fillText(i,0,0),t.restore()};return n("OUT",196,250,205,-.04),n("of",136,268,312,.04),n("ORDER",168,250,448,-.03),ms=new Go(s),ms.colorSpace=De,ms.anisotropy=8,ms}function rM(s,t,e,n){const i=Jr/2,r=i-Jr*iM,o=g=>{const p=r-g;return[g+p-p*Math.cos(cu),p*Math.sin(cu)]},a=[],l=[],c=[];[i,r,r-(r+i)/2,-i].forEach((g,p)=>{const[M,E]=g>=r?[g,0]:o(g);for(const v of[-i,i])a.push(v,M,.0012+E),l.push((v+i)/Jr,(g+i)/Jr);if(p){const v=p*2;c.push(v-2,v-1,v+1,v-2,v+1,v)}});const u=new be;u.setAttribute("position",new Xt(a,3)),u.setAttribute("uv",new Xt(l,2)),u.setIndex(c),u.computeVertexNormals();const f=new Zt().makeTranslation(-.035,.012,0).multiply(new Zt().makeRotationZ(nM)),d=new Ge({uniforms:{uMap:{value:sM()},uLP:{value:s},uLD:{value:t},uLC:{value:new Ot(e.cOuter,e.cInner)},uLI:{value:e.i},uAmb:{value:qo},uLCol:{value:Is}},side:Hn,vertexShader:`
      uniform mat4 uFrame;
      varying vec3 vP; varying vec3 vN; varying vec2 vUv;
      void main() {
        // (the machine's frame: the mesh sits in it, so modelMatrix's parent part is the machine's)
        vP = (uFrame * vec4(position, 1.0)).xyz; vN = normalize(mat3(uFrame) * normal); vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${dc}
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
      }`}),m=n.clone().multiply(new Zt().makeTranslation(0,0,4e-4)).multiply(f);d.uniforms.uFrame={value:m};const x=new Me(u,d);return x.matrixAutoUpdate=!1,x.matrix.copy(m),{mesh:x,dispose(){u.dispose(),d.dispose()}}}function oM(s){au??(au=$v());const t=new Ie;t.matrixAutoUpdate=!1,t.matrix.copy(s.matrix);const e=s.matrix.clone().invert(),n=new Yt().setFromMatrix4(e),i=new D(...s.lamp.p).applyMatrix4(e),r=new D(...s.lamp.d).applyMatrix3(n),o=new D(0,_n(No),No),a=Kv(i,r,s.lamp,o),l=new Me(au,a),c=new Zt().makeBasis(new D(1,0,0),Cf,_r).setPosition(o.clone().addScaledVector(_r,.004)),h=!!s.machine.outOfOrder,u=Zv(s.lamp.p,h),f=new Xn(Cs+2*Uo,Ls+2*Uo),d=new Me(f,u);d.matrixAutoUpdate=!1,d.matrix.copy(c);const{segs:m,u:x}=jv(s.machine.name,su.w,su.h),g=tM(m);let p=0;for(const L of s.machine.id)p=(p*31+L.charCodeAt(0))%997;const M={value:h?0:1},E=eM(x,p/997,M),v=new Me(g,E);v.matrixAutoUpdate=!1,v.matrix.copy(c).multiply(new Zt().makeTranslation(0,0,8e-4)),v.renderOrder=2,t.add(l,d,v);const y=[l,d,v];let w=null;h&&(w=rM(i,r,s.lamp,c),t.add(w.mesh),y.push(w.mesh)),t.updateMatrixWorld(!0);for(const L of y)L.userData.machine=s.machine.id;return{placed:s,group:t,meshes:y,textOn:M,dispose(){a.dispose(),u.dispose(),f.dispose(),g.dispose(),E.dispose(),w==null||w.dispose()}}}const mo=16;function aM(s){const t=(e,n)=>{const i=e.slice(0,mo);for(;i.length<mo;)i.push(n());return i};return{n:Math.min(mo,s.length),lp:t(s.map(e=>new D(...e.lamp.p)),()=>new D),ld:t(s.map(e=>new D(...e.lamp.d)),()=>new D(0,-1,0)),lc:t(s.map(e=>new Ot(e.lamp.cOuter,e.lamp.cInner)),()=>new Ot(1,1)),li:t(s.map(e=>e.lamp.i),()=>0),box:t(s.map(e=>{const n=We.degToRad(e.spot.rot);return new pe(e.spot.x,e.spot.z,Math.cos(n),Math.sin(n))}),()=>new pe(0,0,1,0))}}const lM=s=>({uMN:{value:s.n},uMLP:{value:s.lp},uMLD:{value:s.ld},uMLC:{value:s.lc},uMLI:{value:s.li},uMB:{value:s.box}}),cM=`
  #define MAXM ${mo}
  #define LENS 0.06
  ${dc}
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
`,ei=16,vs=48,Is=new zt(1,.965,.915),qo=.06,hM=.3,Pf=.05,pc=4,uM=.6,If=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,mc=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,Df=`
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
`,gc=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,xc=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),Uf=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),Nf=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function hu(s,t,e,n,i){const r=(o,a,l)=>{const c=o.slice(0,a);for(;c.length<a;)c.push(l());return c};return new Ge({uniforms:{uN:{value:Math.min(s.lamps.length,ei)},uLP:{value:r(s.lamps.map(o=>o.p),ei,()=>new D)},uLD:{value:r(s.lamps.map(o=>o.d),ei,()=>new D(0,-1,0))},uLC:{value:r(s.lamps.map(o=>o.c),ei,()=>new Ot(1,1))},uLI:{value:r(s.lamps.map(o=>o.i),ei,()=>0)},uB:{value:Math.min(s.boxes.length,vs)},uBC:{value:r(s.boxes.map(o=>o.c),vs,()=>new D(0,-99,0))},uBS:{value:r(s.boxes.map(o=>o.s),vs,()=>new D)},uBL:{value:r(s.boxes.map(o=>o.lamp),vs,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:qo},uBounceK:{value:pc},uLampK:{value:hM},uCeilK:{value:Pf},...Uf(i),uLCol:{value:Is},...xc(n)},vertexShader:Df,fragmentShader:`
      #define MAXL ${ei}
      #define MAXB ${vs}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Nf}
      ${mc}
      ${If}
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
        ${gc}
      }`})}function fM(s,t){return new Ge({uniforms:{uAmb:{value:Pf},uBounceK:{value:pc},...Uf(t),...xc(s)},vertexShader:Df,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${mc}
      ${Nf}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${gc}
      }`})}function dM(s,t,e,n){return new Ge({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:qo},uBounceK:{value:pc},uSpillK:{value:uM},uLCol:{value:Is},...xc(e),...lM(n)},vertexShader:`
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
      ${mc}
      ${If}
      ${cM}
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
        ${gc}
      }`})}function uu(s,t,e,n){return new Ge({uniforms:{uMap:{value:s},...Dv(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new zt(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Is}},toneMapped:!1,vertexShader:`
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
      ${Iv}
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
      }`})}const $s=.05,Ks=.2;function pM(s,t,e){const n=s.inner,i=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(i/$s)+1,a=Math.ceil(r/$s)+1,l=new Uint8Array(o*a),c=s.solids;for(let E=0;E<a;E++){const v=n.z0+E*$s;for(let y=0;y<o;y++){const w=n.x0+y*$s;let L=1;for(const _ of c){const S=Math.max(_.x0-w,0,w-_.x1),C=Math.max(_.z0-v,0,v-_.z1),A=S*S+C*C;A>1.44||(L*=1-.42*Math.exp(-Math.sqrt(A)/.28))}l[E*o+y]=Math.round(Math.max(0,Math.min(1,L))*255)}}const h=Math.ceil(i/Ks)+1,u=Math.ceil(r/Ks)+1,f=new Float32Array(h*u*4),d=Is,m=t.map(E=>{const v=new zt(E.face.color),w=(E.w+.5)*(E.h+1)*.7*.55;return{c:[E.centre[0]+E.normal[0]*.05,1.2,E.centre[2]+E.normal[2]*.05],n:E.normal,rgb:[v.r*d.r*w,v.g*d.g*w,v.b*d.b*w],lamp:E.lamp}});for(let E=0;E<u;E++){const v=n.z0+E*Ks;for(let y=0;y<h;y++){const w=n.x0+y*Ks;let L=0,_=0,S=0,C=0;for(const U of m){const F=w-U.c[0],N=v-U.c[2],G=F*F+N*N;if(G>64)continue;const Z=F*U.n[0]+N*U.n[2];if(Z>.02){const W=Math.max(G+U.c[1]*U.c[1],.3),O=Math.sqrt(W),B=Z/O*(U.c[1]/O)/(Math.PI*W);B>5e-4&&!Vi(s.solids,U.c[0],U.c[2],w,v)&&(L+=U.rgb[0]*B,_+=U.rgb[1]*B,S+=U.rgb[2]*B)}const X=U.lamp,tt=w-X.p[0],H=-X.p[1],K=v-X.p[2],et=tt*tt+H*H+K*K,ft=Math.sqrt(et),k=(tt*X.d[0]+H*X.d[1]+K*X.d[2])/ft;if(k>X.cOuter){const W=Math.min(1,(k-X.cOuter)/(X.cInner-X.cOuter)),O=W*W*(3-2*W),B=X.i*O*(X.p[1]/ft)/et;B>.002&&!Vi(s.solids,X.p[0],X.p[2],w,v)&&(C+=B)}}const A=(E*h+y)*4;f[A]=L,f[A+1]=_,f[A+2]=S,f[A+3]=C}}e==null||e.ao.dispose(),e==null||e.light.dispose();const x=new As(l,o,a,Ho,on);x.magFilter=x.minFilter=He,x.needsUpdate=!0;const g=new Uint16Array(f.length);for(let E=0;E<f.length;E++)g[E]=mp.toHalfFloat(f[E]);const p=new As(g,h,u,pn,wn);p.magFilter=p.minFilter=He,p.needsUpdate=!0;const M=(E,v,y)=>new pe(1/(E*v),1/(E*y),.5/v,.5/y);return{ao:x,light:p,origin:new Ot(n.x0,n.z0),aoXf:M($s,o,a),lightXf:M(Ks,h,u)}}const ke=.15,Ve=8,ni=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],Jn=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],Qr=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],fu=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],du=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],mM=[0,1,0];class Ff{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),i=fu(Qr(t[2],t[0]),Qr(t[3],t[1])),r=ni(ni(e[0],e[1]),ni(e[2],e[3]));du(i,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));du(fu(Qr(t[1],t[0]),Qr(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new be;return t.setAttribute("position",new Xt(this.pos,3)),t.setAttribute("normal",new Xt(this.nor,3)),t.setAttribute("uv",new Xt(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const zf=(s,t)=>s?ke:Math.max(0,Math.min(ke,t/2-.002));function gM(s,t,e){const n=new Ff,i=[s.n[0],0,s.n[1]],r=s.axis==="x"?[1,0,0]:[0,0,1],o=(_,S,C)=>{const A=Ci(s,_,C);return[A[0]+i[0]*S,C,A[2]+i[2]*S]},a=zf(s.outer,s.t),l=t-ke,c=Math.min(e,l),h=s.cornerA?"in":s.freeA?"free":"flat",u=s.cornerB?"in":s.freeB?"free":"flat",f=s.u0+(h==="in"?ke:h==="free"?a:0),d=s.u1-(u==="in"?ke:u==="free"?a:0);if(d-f<.01)return n;const m=(_,S,C,A)=>{S-_<1e-4||A-C<1e-4||n.quad([o(_,0,C),o(S,0,C),o(S,0,A),o(_,0,A)],[i,i,i,i])},x=[...s.doors].sort((_,S)=>_[0]-S[0]);if(!x.length)m(f,d,0,l);else{let _=f;for(const[S,C]of x)m(_,Math.min(d,S-a),0,c),_=Math.max(_,C+a);m(_,d,0,c),m(f,d,c,l)}const g=(_,S,C,A)=>{if(a<.01)return;const U=F=>ni(Jn(i,Math.cos(F)),Jn(S,Math.sin(F)));for(let F=0;F<Ve;F++){const N=F/Ve*Math.PI/2,G=(F+1)/Ve*Math.PI/2,Z=(X,tt)=>ni(o(_,-a,tt),Jn(U(X),a));n.quad([Z(N,C),Z(G,C),Z(G,A),Z(N,A)],[U(N),U(G),U(G),U(N)])}},p=_=>[-_[0],-_[1],-_[2]];for(const[_,S]of x)_-s.u0>a+.01&&g(_-a,r,0,c),s.u1-S>a+.01&&g(S+a,p(r),0,c);h==="free"&&g(s.u0+a,p(r),0,t),u==="free"&&g(s.u1-a,r,0,t);const M=(_,S)=>{const C=ni(ni(o(_,0,0),Jn(i,ke)),Jn(S,ke)),A=F=>ni(Jn(i,Math.cos(F)),Jn(S,Math.sin(F))),U=Math.PI/4;for(let F=0;F<Ve/2;F++){const N=F/(Ve/2)*U,G=(F+1)/(Ve/2)*U,Z=(X,tt)=>[C[0]-ke*A(X)[0],tt,C[2]-ke*A(X)[2]];n.quad([Z(N,0),Z(G,0),Z(G,l),Z(N,l)],[A(N),A(G),A(G),A(N)]);for(let X=0;X<Ve;X++){const tt=X/Ve*Math.PI/2,H=(X+1)/Ve*Math.PI/2,K=(ft,k)=>{const W=A(ft);return[C[0]-ke*Math.cos(k)*W[0],l+ke*Math.sin(k),C[2]-ke*Math.cos(k)*W[2]]},et=(ft,k)=>{const W=A(ft);return[Math.cos(k)*W[0],-Math.sin(k),Math.cos(k)*W[2]]};n.quad([K(N,tt),K(G,tt),K(G,H),K(N,H)],[et(N,tt),et(G,tt),et(G,H),et(N,H)])}}};h==="in"&&M(s.u0,r),u==="in"&&M(s.u1,p(r));const E=h==="in"?s.u0+ke:f,v=u==="in"?s.u1-ke:d,y=(_,S)=>o(_,ke-ke*Math.cos(S),l+ke*Math.sin(S)),w=_=>ni(Jn(i,Math.cos(_)),Jn(mM,-Math.sin(_)));for(let _=0;_<Ve;_++){const S=_/Ve*Math.PI/2,C=(_+1)/Ve*Math.PI/2;n.quad([y(E,S),y(v,S),y(v,C),y(E,C)],[w(S),w(S),w(C),w(C)])}const L=(_,S)=>{const C=o(_,0,t);for(let A=0;A<Ve;A++){const U=A/Ve*Math.PI/2,F=(A+1)/Ve*Math.PI/2;n.tri([C,y(_,U),y(_,F)],S)}};return h!=="in"&&L(E,p(r)),u!=="in"&&L(v,r),n}function xM(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new Ff),e.get(a)),i=s.H,r=Math.min(s.doorH,i-ke),o=a=>{var l,c;return((l=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:l.color)??((c=s.faces.find(h=>h.wall===a))==null?void 0:c.color)??"#f2f1ee"};for(const a of s.walls){const l=a.id==="S";if(a.outer&&!l)continue;const c=n(o(a.id)),h=(E,v,y)=>a.axis==="x"?[E,y,v]:[v,y,E],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],m=zf(a.outer,a.t),x=l?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],g=f+m,p=l?f+t:d-m,M=l?[[s.entrance.a,s.entrance.b]]:s.faces.filter(E=>E.wall===a.id).flatMap(E=>E.doors).filter((E,v,y)=>y.findIndex(w=>Math.abs(w[0]-E[0])<1e-6)===v);for(const[E,v]of M){const y=(_,S)=>{p-g>.001&&c.quad([h(_,g,0),h(_,p,0),h(_,p,r),h(_,g,r)],[S,S,S,S])};y(E,u),y(v,[-u[0],0,-u[2]]);const w=[0,-1,0],L=l?f+t:d;c.quad([h(E,f,r),h(v,f,r),h(v,L,r),h(E,L,r)],[w,w,w,w]);for(const{c:_,s:S}of x)for(const[C,A]of[[E,1],[v,-1]]){if(m<.01)continue;const U=C-A*m,F=_-S*m,N=h(C,_,r);for(let G=0;G<Ve;G++){const Z=X=>{const tt=X/Ve*Math.PI/2;return h(U+A*m*Math.sin(tt),F+S*m*Math.cos(tt),r)};c.tri([N,Z(G),Z(G+1)],w)}}}if(!a.outer)for(const E of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(y,w)=>{d-m-(f+m)>.001&&c.quad([h(y,f+m,0),h(y,d-m,0),h(y,d-m,i),h(y,f+m,i)],[w,w,w,w])};E.freeA&&v(E.u0,[-u[0],0,-u[2]]),E.freeB&&v(E.u1,u)}}return e}const pu=new zt(1,1,1),Of=.2,kl=2;function _M(s,t,e,n){const i=new Ie;s.background=pu,s.fog=null;const r=n.outline,o=r.t-Of,a=r.x0-r.t,l=r.x1+r.t,c=r.z0-r.t,h=r.z1+r.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,m=n.entrance.x-n.entrance.w/2,x=n.entrance.x+n.entrance.w/2,g=n.entrance.x,p=new oi({color:pu,toneMapped:!1}),M=(_,S,C,A,U,F)=>{const N=new Me(new Sn(A,U,F),p);return N.position.set(_,S,C),N.userData.outside=!0,N.layers.set(kl),i.add(N),N},E=-.5,v=d,y=(E+v)/2,w=v-E;M((a+m)/2,y,h-o/2,m-a,w,o),M((x+l)/2,y,h-o/2,l-x,w,o),M(g,(f+v)/2,h-o/2,x-m,v-f,o),M((a+l)/2,y,c+o/2,l-a,w,o),M(a+o/2,y,(c+h)/2,o,w,h-c-2*o),M(l-o/2,y,(c+h)/2,o,w,h-c-2*o),M((a+l)/2,(u+v)/2+.05,(c+h)/2,l-a-.02,v-u-.1,h-c-.02);const L=new Me(new Xn(400,400).rotateX(-Math.PI/2),p);return L.position.y=-.002,L.layers.set(kl),i.add(L),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var A;const S=_;S.geometry&&S.geometry.dispose();const C=Array.isArray(S.material)?S.material:S.material?[S.material]:[];for(const U of C)(A=U.map)==null||A.dispose(),U.dispose()})}}}class mu{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"uv",[]);I(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new be;return t.setAttribute("position",new Xt(this.pos,3)),t.setAttribute("normal",new Xt(this.nor,3)),t.setAttribute("uv",new Xt(this.uv,2)),t.setIndex(this.idx),t}}const vr=s=>new D(s[0],s[1],s[2]),kf=s=>({p:vr(s.p),d:vr(s.d),c:new Ot(s.cOuter,s.cInner),i:s.i});function vM(s,t,e,n=[]){const i=t.filter(h=>h.face===s),r=i.map(h=>h.lamp),o=[],a=[],l=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let h=0;h<=l;h++){const u=s.u0+(s.u1-s.u0)*h/l;for(const f of[.4,1.4,2.4])a.push(Ci(s,u,f))}for(const h of[...t.filter(u=>u.face!==s).map(u=>u.lamp),...n]){const u=a[0];if((h.p[0]-u[0])*s.n[0]+(h.p[2]-u[2])*s.n[1]<.1)continue;let d=1/0;for(const m of a){const x=m[0]-h.p[0],g=m[1]-h.p[1],p=m[2]-h.p[2],M=Math.hypot(x,g,p);M>7||(x*h.d[0]+g*h.d[1]+p*h.d[2])/M<=h.cOuter||Vi(e.solids,h.p[0],h.p[2],m[0]+s.n[0]*.03,m[2]+s.n[1]*.03)||(d=Math.min(d,M))}d<1/0&&o.push({L:h,d})}o.sort((h,u)=>h.d-u.d);for(const h of o){if(r.length>=ei)break;r.push(h.L)}const c=[];return i.forEach((h,u)=>{if(!(u>=ei))for(const f of h.items)c.length>=vs||f.text||c.push({c:vr(f.pos),s:new D(f.w/2,f.h/2,f.depth),lamp:u})}),{lamps:r.slice(0,ei).map(kf),boxes:c,normal:new D(s.n[0],0,s.n[1]),right:new D(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const MM={lamps:[],boxes:[],normal:new D(0,0,1),right:new D(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function gu(s,t,e,n=[0,1,0,1]){const[i,r,o,a]=n,l=[],c=[],h=[],u=[],f=[],d=(w,L,_,S)=>{const C=l.length/3;w.forEach((A,U)=>{l.push(...A),c.push(...L),h.push(..._[U]),u.push(S)}),f.push(C,C+1,C+2,C,C+2,C+3)},m=s/2,x=t/2,g=.004,p=i+g,M=r-g,E=o+g,v=a-g;d([[-m,-x,e],[m,-x,e],[m,x,e],[-m,x,e]],[0,0,1],[[i,o],[r,o],[r,a],[i,a]],0),d([[-m,x,e],[m,x,e],[m,x,0],[-m,x,0]],[0,1,0],[[i,v],[r,v],[r,v],[i,v]],1),d([[-m,-x,0],[m,-x,0],[m,-x,e],[-m,-x,e]],[0,-1,0],[[i,E],[r,E],[r,E],[i,E]],1),d([[-m,-x,0],[-m,-x,e],[-m,x,e],[-m,x,0]],[-1,0,0],[[p,o],[p,o],[p,a],[p,a]],1),d([[m,-x,e],[m,-x,0],[m,x,0],[m,x,e]],[1,0,0],[[M,o],[M,o],[M,a],[M,a]],1);const y=new be;return y.setAttribute("position",new Xt(l,3)),y.setAttribute("normal",new Xt(c,3)),y.setAttribute("uv",new Xt(h,2)),y.setAttribute("aSide",new Xt(u,1)),y.setIndex(f),y}function yM(s,t,e,n=[0,1,0,1]){const{face:i,depth:r,mat:o,lip:a,bevel:l}=Ao,c=s/2,h=t/2,u=c+o+i,f=h+o+i,d=c+o,m=h+o,x=c+l,g=h+l,p=r-a,M=p-l,E=new zt(W_[e.color]),v=new zt(X_[e.mat]),y=new zt(q_),w=[],L=[],_=[],S=[],C=[],A=[],U=H=>new D(H[0],H[1],H[2]),F=(H,K,et,ft=[[0,0],[0,0],[0,0],[0,0]])=>{const k=new D().crossVectors(U(H[1]).sub(U(H[0])),U(H[3]).sub(U(H[0]))).normalize();k.dot(U(K))<0&&(H=[H[0],H[3],H[2],H[1]],ft=[ft[0],ft[3],ft[2],ft[1]],k.negate());const W=w.length/3;H.forEach((O,B)=>{w.push(...O),L.push(k.x,k.y,k.z),_.push(...ft[B]),S.push(et?2:0),C.push(...et?[et.r,et.g,et.b]:[0,0,0])}),A.push(W,W+1,W+2,W,W+2,W+3)};F([[-u,m,r],[u,m,r],[u,f,r],[-u,f,r]],[0,0,1],E),F([[-u,-f,r],[u,-f,r],[u,-m,r],[-u,-m,r]],[0,0,1],E),F([[-u,-m,r],[-d,-m,r],[-d,m,r],[-u,m,r]],[0,0,1],E),F([[d,-m,r],[u,-m,r],[u,m,r],[d,m,r]],[0,0,1],E),F([[-u,f,0],[u,f,0],[u,f,r],[-u,f,r]],[0,1,0],E),F([[-u,-f,0],[u,-f,0],[u,-f,r],[-u,-f,r]],[0,-1,0],E),F([[-u,-f,0],[-u,f,0],[-u,f,r],[-u,-f,r]],[-1,0,0],E),F([[u,-f,0],[u,f,0],[u,f,r],[u,-f,r]],[1,0,0],E),F([[-d,m,p],[d,m,p],[d,m,r],[-d,m,r]],[0,-1,0],E),F([[-d,-m,p],[d,-m,p],[d,-m,r],[-d,-m,r]],[0,1,0],E),F([[-d,-m,p],[-d,m,p],[-d,m,r],[-d,-m,r]],[1,0,0],E),F([[d,-m,p],[d,m,p],[d,m,r],[d,-m,r]],[-1,0,0],E),F([[-d,g,p],[d,g,p],[d,m,p],[-d,m,p]],[0,0,1],v),F([[-d,-m,p],[d,-m,p],[d,-g,p],[-d,-g,p]],[0,0,1],v),F([[-d,-g,p],[-x,-g,p],[-x,g,p],[-d,g,p]],[0,0,1],v),F([[x,-g,p],[d,-g,p],[d,g,p],[x,g,p]],[0,0,1],v),F([[-x,g,p],[x,g,p],[c,h,M],[-c,h,M]],[0,-1,1],y),F([[-x,-g,p],[x,-g,p],[c,-h,M],[-c,-h,M]],[0,1,1],y),F([[-x,-g,p],[-x,g,p],[-c,h,M],[-c,-h,M]],[1,0,1],y),F([[x,-g,p],[x,g,p],[c,h,M],[c,-h,M]],[-1,0,1],y);const[N,G,Z,X]=n;F([[-c,-h,M],[c,-h,M],[c,h,M],[-c,h,M]],[0,0,1],null,[[N,Z],[G,Z],[G,X],[N,X]]);const tt=new be;return tt.setAttribute("position",new Xt(w,3)),tt.setAttribute("normal",new Xt(L,3)),tt.setAttribute("uv",new Xt(_,2)),tt.setAttribute("aSide",new Xt(S,1)),tt.setAttribute("aCol",new Xt(C,3)),tt.setIndex(A),tt}function SM(s,t,e,n=[0,1,0,1]){const{strip:i,depth:r,gap:o,below:a}=Ro,l=s/2,c=t/2,h=l+o,u=c+o,f=h+i,d=u+i,m=r-a,x=Math.max(.004,m-e),g=new zt(Y_),p=new zt($_),M=[],E=[],v=[],y=[],w=[],L=[],_=K=>new D(K[0],K[1],K[2]),S=(K,et,ft,k,W=[[0,0],[0,0],[0,0],[0,0]])=>{const O=new D().crossVectors(_(K[1]).sub(_(K[0])),_(K[3]).sub(_(K[0]))).normalize();O.dot(_(et))<0&&(K=[K[0],K[3],K[2],K[1]],W=[W[0],W[3],W[2],W[1]],O.negate());const B=M.length/3;K.forEach((R,P)=>{M.push(...R),E.push(O.x,O.y,O.z),v.push(...W[P]),y.push(ft),w.push(...k?[k.r,k.g,k.b]:[0,0,0])}),L.push(B,B+1,B+2,B,B+2,B+3)};S([[-f,u,r],[f,u,r],[f,d,r],[-f,d,r]],[0,0,1],2,g),S([[-f,-d,r],[f,-d,r],[f,-u,r],[-f,-u,r]],[0,0,1],2,g),S([[-f,-u,r],[-h,-u,r],[-h,u,r],[-f,u,r]],[0,0,1],2,g),S([[h,-u,r],[f,-u,r],[f,u,r],[h,u,r]],[0,0,1],2,g),S([[-f,d,0],[f,d,0],[f,d,r],[-f,d,r]],[0,1,0],2,g),S([[-f,-d,0],[f,-d,0],[f,-d,r],[-f,-d,r]],[0,-1,0],2,g),S([[-f,-d,0],[-f,d,0],[-f,d,r],[-f,-d,r]],[-1,0,0],2,g),S([[f,-d,0],[f,d,0],[f,d,r],[f,-d,r]],[1,0,0],2,g),S([[-h,u,0],[h,u,0],[h,u,r],[-h,u,r]],[0,-1,0],2,p),S([[-h,-u,0],[h,-u,0],[h,-u,r],[-h,-u,r]],[0,1,0],2,p),S([[-h,-u,0],[-h,u,0],[-h,u,r],[-h,-u,r]],[1,0,0],2,p),S([[h,-u,0],[h,u,0],[h,u,r],[h,-u,r]],[-1,0,0],2,p),S([[-h,c,x],[h,c,x],[h,u,x],[-h,u,x]],[0,0,1],2,p),S([[-h,-u,x],[h,-u,x],[h,-c,x],[-h,-c,x]],[0,0,1],2,p),S([[-h,-c,x],[-l,-c,x],[-l,c,x],[-h,c,x]],[0,0,1],2,p),S([[l,-c,x],[h,-c,x],[h,c,x],[l,c,x]],[0,0,1],2,p);const[C,A,U,F]=n,N=.004,G=C+N,Z=A-N,X=U+N,tt=F-N;S([[-l,-c,m],[l,-c,m],[l,c,m],[-l,c,m]],[0,0,1],0,null,[[C,U],[A,U],[A,F],[C,F]]),S([[-l,c,m],[l,c,m],[l,c,x],[-l,c,x]],[0,1,0],1,null,[[C,tt],[A,tt],[A,tt],[C,tt]]),S([[-l,-c,x],[l,-c,x],[l,-c,m],[-l,-c,m]],[0,-1,0],1,null,[[C,X],[A,X],[A,X],[C,X]]),S([[-l,-c,x],[-l,-c,m],[-l,c,m],[-l,c,x]],[-1,0,0],1,null,[[G,U],[G,U],[G,F],[G,F]]),S([[l,-c,m],[l,-c,x],[l,c,x],[l,c,m]],[1,0,0],1,null,[[Z,U],[Z,U],[Z,F],[Z,F]]);const H=new be;return H.setAttribute("position",new Xt(M,3)),H.setAttribute("normal",new Xt(E,3)),H.setAttribute("uv",new Xt(v,2)),H.setAttribute("aSide",new Xt(y,1)),H.setAttribute("aCol",new Xt(w,3)),H.setIndex(L),H}function wM(s,t,e,n){const[i,r,o,a]=n??[0,0,1,1];let l=i,c=o,h=1-a,u=1-r;if(!e)return[l,c,h,u];const f=s/t,d=e[0]*(o-i)/(e[1]*(a-r));if(d>f){const m=f/d,x=(l+c)/2,g=(c-l)*m/2;l=x-g,c=x+g}else{const m=d/f,x=(h+u)/2,g=(u-h)*m/2;h=x-g,u=x+g}return[l,c,h,u]}const Na=(s,t,e,n)=>{const i=new Zt().makeBasis(vr(e),new D(0,1,0),vr(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class bM{constructor(t,e){I(this,"map",new Map);I(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${Lo(t)}|${t.medium}|${Co(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*lr/ys),r=Bf(1024,i),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,i),o.fillStyle="#121212";const a=70;let l=160;const c=[[`italic 500 84px ${this.font}`,Lo(t)]];for(const h of[t.medium,Co(t),t.year])h&&c.push([`400 62px ${this.font}`,h]);for(const[h,u]of c)o.font=h,l=EM(o,u,a,l,1024-2*a,h.startsWith("italic")?92:74),l+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new Go(e()),n.colorSpace=De,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const Bf=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function EM(s,t,e,n,i,r){let o="";for(const a of t.split(" ")){const l=o?o+" "+a:a;s.measureText(l).width>i&&o?(s.fillText(o,e,n),n+=r,o=a):o=l}return s.fillText(o,e,n),n+r}const TM=s=>{const t=new zt(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function AM(s,t,e,n){const i=Bf(Math.ceil(t*Po),Math.ceil(e*Po)),r=i.getContext("2d");r.fillStyle=TM(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${cr}px ${Io}`,r.fillText(s.title,8,cr*.8),s.sub&&(r.font=`400 ${Do}px ${Io}`,r.fillText(s.sub,10,cr+vf+Do*.8));const o=new Go(i);return o.colorSpace=De,o.anisotropy=8,o}function RM(s){const t=nv(s),e=sv(s,t).map(c=>new zt(c)),n=Int32Array.from(t.id),i=t.nx*t.nz;let r=[];for(let c=0;c<i;c++)n[c]>=0&&r.push(c);for(;r.length;){const c=[];for(const h of r){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<i&&n[f]<0&&(n[f]=n[h],c.push(f))}r=c}const o=new Uint8Array(i*4),a=new zt(_f);for(let c=0;c<i;c++){const h=e[n[c]]??a;o[c*4]=Math.round(h.r*255),o[c*4+1]=Math.round(h.g*255),o[c*4+2]=Math.round(h.b*255),o[c*4+3]=255}const l=new As(o,t.nx,t.nz,pn);return l.magFilter=l.minFilter=Be,l.needsUpdate=!0,{tex:l,origin:new Ot(t.x0,t.z0),scale:new Ot(1/(t.nx*t.c),1/(t.nz*t.c))}}function CM(s,t,e,n,i,r,o,a,l=[]){const c=new Ie,h=s.H,u=RM(s),f=[],d=[],m=[u.tex],x=(A,U)=>{d.push(A),f.push(U);const F=new Me(A,U);return c.add(F),F},g=[];for(const A of s.faces){const U=gM(A,h,s.doorH);if(U.empty)continue;const F=x(U.geometry(),hu(vM(A,t,s,l.map(N=>N.lamp)),new zt(A.color),h,e,u));F.userData.face=A,g.push(F)}for(const[A,U]of xM(s,Of))U.empty||x(U.geometry(),hu(MM,new zt(A),h,e,u));const p=s.inner,M=s.entrance,E=new mu;E.add([[p.x0,0,p.z1],[p.x1,0,p.z1],[p.x1,0,p.z0],[p.x0,0,p.z0]],[0,1,0]),E.add([[M.a,0,M.z+.4],[M.b,0,M.z+.4],[M.b,0,M.z],[M.a,0,M.z]],[0,1,0]),x(E.geometry(),dM(o,a,e,aM(l))).layers.set(1);const y=new mu;y.add([[p.x0,h,p.z0],[p.x1,h,p.z0],[p.x1,h,p.z1],[p.x0,h,p.z1]],[0,-1,0]),x(y.geometry(),fM(e,u));const w=[...t.map(A=>A.lamp.p),...l.map(A=>A.lamp.p)],L=w.length;if(L){const A=new ar(.068,28).rotateX(Math.PI/2).translate(0,h-.0015,0),U=new ar(.05,24).rotateX(Math.PI/2).translate(0,h-.0025,0),F=new ar(.026,20).rotateX(Math.PI/2).translate(0,h-.0035,0),N=new oi({color:14276820,toneMapped:!1}),G=new oi({color:11842479,toneMapped:!1}),Z=new oi({color:16777215,toneMapped:!1});d.push(A,U,F),f.push(N,G,Z);const X=new fo(A,N,L),tt=new fo(U,G,L),H=new fo(F,Z,L),K=new Zt;w.forEach((et,ft)=>{K.makeTranslation(et[0],0,et[2]),X.setMatrixAt(ft,K),tt.setMatrixAt(ft,K),H.setMatrixAt(ft,K)}),c.add(X,tt,H)}const _=[],S=[];r.begin();for(const A of t){const U=kf(A.lamp);for(const F of A.items){if(F.text){const W=AM(F.text,F.w,F.h,F.face.color);m.push(W);const O=x(new Xn(F.w,F.h),new oi({map:W,transparent:!0,depthWrite:!1,toneMapped:!1}));Na(O,A.normal,A.right,[F.pos[0]+A.normal[0]*.002,F.pos[1],F.pos[2]+A.normal[2]*.002]),O.userData.title=F.id;continue}const N=F.work,G=N.kind==="paper"||N.kind==="digital"?new zt().setRGB(.92,.91,.88):null,Z=uu(n(N.id),U,G,N.adjust),X=ac(N),tt=N.w*tn,H=N.h*tn,K=wM(tt,H,i(N.id),N.crop),et=X?lc(X)?SM(tt,H,oc[N.kind],K):yM(tt,H,X,K):gu(F.w,F.h,F.depth,K),ft=x(et,Z);Na(ft,A.normal,A.right,F.pos),ft.userData.work=N.id;const k={work:N,placed:A,mesh:ft,mat:Z,w:F.w,h:F.h,label:null};if(_.push(k),F.label){const W=x(gu(ys,lr,.003),uu(r.single(N),U,new zt(.95,.95,.93)));Na(W,A.normal,A.right,F.label.pos),W.userData.work=N.id,W.userData.label=!0,S.push(W),k.label=W}}}r.end();const C=l.map(A=>oM(A));for(const A of C)c.add(A.group);return{group:c,pictures:_,labels:S,faceMeshes:g,machines:C,dispose(){for(const A of C)A.dispose();for(const A of d)A.dispose();for(const A of f)A.dispose();for(const A of m)A.dispose();c.traverse(A=>{const U=A;U.isInstancedMesh&&U.dispose()})}}}const hr=class hr{constructor(t,e,n,i,r,o){I(this,"cat",new Map);I(this,"arch");I(this,"placed",[]);I(this,"items",[]);I(this,"machines",[]);I(this,"migrated",!1);I(this,"interior",null);I(this,"outside",null);I(this,"sharp",new Map);I(this,"small",new Map);I(this,"baked");I(this,"labels");I(this,"outsideKey","");I(this,"blank",new As(new Uint8Array([128,128,128,255]),1,1));I(this,"onRebuilt",()=>{});I(this,"prepTex",t=>(t.colorSpace=De,t.anisotropy=this.aniso,t.minFilter=Ri,t));I(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);I(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=r,this.aniso=o,this.labels=new bM(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new Il;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(hr.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new Il().loadAsync(`${hr.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var a;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(l=>[l.id,l])),this.arch=ev(t),Cv(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=uv(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(l=>!i.includes(l))),this.placed=e,this.items=n,this.machines=qv(t,this.data.machines,this.arch.H),this.baked=pM(this.arch,e,this.baked);const r=this.interior;this.interior=CM(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat,this.machines),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose());const o=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);o!==this.outsideKey&&((a=this.outside)==null||a.dispose(),this.outside=_M(this.scene,this.font,this.aniso,t),this.outsideKey=o),this.onRebuilt(i)}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};I(hr,"url",(t,e)=>`art/${t}-${e}.jpg`);let Ss=hr;class LM{constructor(t,e){I(this,"target");I(this,"texMat",new Zt);I(this,"cam",new rn);I(this,"plane",new ti);I(this,"clip",new pe);I(this,"q",new pe);I(this,"n",new D(0,1,0));I(this,"p0",new D(0,0,0));I(this,"camPos",new D);I(this,"rot",new Zt);I(this,"look",new D);I(this,"view",new D);I(this,"tgt",new D);this.target=new Mn(t,e,{type:wn,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const r=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+r[8])/r[0],this.q.y=(Math.sign(this.clip.y)+r[9])/r[5],this.q.z=-1,this.q.w=(1+r[10])/r[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),r[2]=this.clip.x,r[6]=this.clip.y,r[10]=this.clip.z+1,r[14]=this.clip.w;const o=t.getRenderTarget(),a=e.background,l=t.getClearColor(new zt),c=t.getClearAlpha();e.background=null,t.setClearColor(0,0),t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(o),t.setClearColor(l,c),e.background=a}}let Bl=null;function PM(s){return Bl?(parent.postMessage(s,Bl),!0):!1}addEventListener("message",s=>{var t;(t=s.data)!=null&&t.rmiContactHost&&/^https:\/\/(www\.)?robynmiller\.net$/.test(s.origin)&&(Bl=s.origin)});parent!==window&&parent.postMessage({rmiHello:!0},"*");class IM{constructor(){I(this,"el");I(this,"tools");I(this,"low");I(this,"high");I(this,"cap");I(this,"frame");I(this,"open",!1);I(this,"busy",!1);I(this,"work",null);I(this,"px",[1,1]);I(this,"crop",[0,0,1,1]);I(this,"onClose",()=>{});I(this,"onShow",()=>{});I(this,"reserveRight",0);I(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(Uv(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${xu(Lo(t))}</i>`],n=[t.medium,Co(t),t.year].filter(Boolean).map(i=>xu(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,r,o,a]=this.crop,l=this.px[0]*(o-i),c=this.px[1]*(a-r),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,f=Math.min(1,h/l,u/c),d=Math.round(l*f),m=Math.round(c*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${m}px`;const x=d/(o-i),g=m/(a-r);for(const p of[this.low,this.high])Object.assign(p.style,{width:`${x}px`,height:`${g}px`,left:`${-i*x}px`,top:`${-r*g}px`})}}const xu=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),DM=s=>({kind:"work",id:s.work.id,centre:s.mesh.position,normal:s.placed.normal,size:Math.max(s.w,s.h),reach:Math.min(6,Math.max(2.6,1.8+2.4*Math.max(s.w,s.h))),meshes:s.label?[s.mesh,s.label]:[s.mesh]}),UM=.62,Fa=5,NM=.18;class FM{constructor(t=!0){I(this,"pic",null);I(this,"lit",null);I(this,"dark",0);I(this,"veil");I(this,"vScene",new nc);I(this,"vCam",new Vo(-1,1,1,-1,0,1));I(this,"hintEl");I(this,"hinted",null);I(this,"hintDone",!1);I(this,"v",new D);I(this,"f",new D);this.veil=new Me(new Xn(2,2),new oi({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}update(t,e,n,i,r){let o=null,a=1/0,l=1/0;if(r){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const m=d.centre,x=d.normal,g=m.x-u.x,p=m.y-u.y,M=m.z-u.z,E=Math.hypot(g,p,M);if(E>d.reach||x[0]*-g+x[2]*-M<=0)continue;const v=Math.acos(Math.min(1,(g*f.x+p*f.y+M*f.z)/E)),y=Math.atan2(d.size*.5,E)+.17;if(v>y||Vi(i,u.x,u.z,m.x+x[0]*.05,m.z+x[2]*.05))continue;const w=v/y;w<a&&(a=w,o=d),this.pic&&d.id===this.pic.id&&d.kind===this.pic.kind&&(l=w)}this.pic&&l<a+.15&&(o=n.find(d=>d.id===this.pic.id&&d.kind===this.pic.kind)??o)}this.pic=o,o&&(this.lit=o);let c=0;if(o){const u=o.centre.distanceTo(e.getWorldPosition(this.v)),f=o.reach,d=f*.4,m=Math.min(1,Math.max(0,(f-u)/(f-d)));c=UM*m*m*(3-2*m)}this.dark+=(c-this.dark)*(1-Math.exp(-t/NM)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&o.kind==="work"&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=i.meshes;for(const l of r)l.layers.enable(Fa);const o=n.layers.mask,a=e.background;n.layers.set(Fa),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const l of r)l.layers.disable(Fa);t.autoClear=!0}}const gs=34,zM=1.35,OM=.85,kM=1.15,jr={along:1.15,side:.5,pitch:-.3,ang:.42},to={along:1.35,side:.65,pitch:-.16,ang:.62},BM=2.6,HM=3.4,_u=2.35,GM=900,vu=.012,za=s=>(s=Math.min(1,Math.max(0,s)),s*s*s*(s*(s*6-15)+10));class VM{constructor(){I(this,"state","walk");I(this,"machine",null);I(this,"covering",!1);I(this,"onBack",()=>{});I(this,"layer");I(this,"bar");I(this,"name");I(this,"frame",null);I(this,"loadedAt",0);I(this,"url","");I(this,"tube",{on:!1,t:9});I(this,"want",!1);I(this,"t",0);I(this,"from",{pos:new D,quat:new de});I(this,"to",{pos:new D,quat:new de});I(this,"look",{pos:new D,quat:new de});I(this,"relock",!1);I(this,"v",new D);I(this,"crt",{sy:0,sx:1,bright:1,show:!1});this.layer=document.createElement("div"),this.layer.id="monitor",this.bar=document.createElement("div"),this.bar.id="travel-bar";const t=document.createElement("button");t.className="tr-back",t.textContent="←  Back to the Time Machines",t.addEventListener("click",e=>{e.preventDefault(),t.blur(),this.back()}),this.name=document.createElement("span"),this.name.className="tr-name",this.bar.append(t,this.name),document.body.append(this.layer,this.bar),addEventListener("keydown",e=>{e.code==="Escape"&&this.state==="there"&&(e.preventDefault(),this.back())})}get travelling(){return this.state!=="walk"}get ready(){return this.state==="walk"&&!!this.machine&&this.tube.on&&this.tube.t>.35}update(t,e,n,i){if(this.machine&&!i.includes(this.machine)){const r=i.find(o=>o.placed.machine.id===this.machine.placed.machine.id&&o.placed.machine.url===this.url);r&&this.state==="walk"?this.machine=r:this.state==="walk"&&this.unload()}this.state==="walk"?this.walking(e,n,i):this.travel(t,e,n),this.tubeStep(t),this.place(e),this.state==="walk"&&this.frame&&document.activeElement===this.frame&&this.frame.blur()}stance(t,e,n){const i=t.placed.spot,r=t.placed.front,o=n.pos.x-i.x,a=n.pos.z-i.z,l=o*r[0]+a*r[2],c=Math.abs(o*r[2]-a*r[0]),h=e.getWorldDirection(this.v),u=t.placed.screen.c,f=u.x-e.position.x,d=u.y-e.position.y,m=u.z-e.position.z,x=Math.acos(Math.min(1,(f*h.x+d*h.y+m*h.z)/Math.hypot(f,d,m)));return{along:l,side:c,ang:x,pitch:n.pitch}}walking(t,e,n){let i=null,r=BM;for(const o of n){if(o.placed.machine.outOfOrder)continue;const a=this.stance(o,t,e);a.along>.2&&a.along<r&&a.side<1&&(r=a.along,i=o)}if(i&&i!==this.machine&&!this.tube.on&&this.load(i),this.machine){const o=this.stance(this.machine,t,e);if((o.along>HM||o.along<.2||o.side>1.4)&&!this.tube.on&&this.tube.t>.4){this.unload();return}const a=this.want?!(o.along>to.along||o.side>to.side||o.pitch>to.pitch||o.ang>to.ang):o.along<jr.along&&o.side<jr.side&&o.pitch<jr.pitch&&o.ang<jr.ang;this.want=a;const l=this.loadedAt>0&&performance.now()-this.loadedAt>GM;a&&l&&!this.tube.on&&(this.tube={on:!0,t:0}),!a&&this.tube.on&&(this.tube={on:!1,t:0})}}load(t){this.unload(),this.machine=t,this.loadedAt=0;const e=document.createElement("iframe");e.className="tr-app",e.title=t.placed.machine.name,e.allow="fullscreen; autoplay",e.tabIndex=-1,e.addEventListener("load",()=>{this.frame===e&&(this.loadedAt=performance.now())}),e.src=this.url=t.placed.machine.url,this.frame=e,this.layer.append(e),this.sizeFrame()}unload(){var t;this.machine&&(this.machine.textOn.value=1),(t=this.frame)==null||t.remove(),this.frame=null,this.machine=null,this.url="",this.loadedAt=0,this.want=!1,this.tube={on:!1,t:9}}sizeFrame(){this.frame&&(this.frame.style.width=`${innerWidth}px`,this.frame.style.height=`${innerHeight-gs}px`)}tubeStep(t){const e=this.tube;e.t+=t;const n=this.machine,i=this.crt;if(!n){i.show=!1;return}const r=e.t;if(e.on){if(n.textOn.value=r<.05?.3:r<.09?1.1:0,r<.1){i.show=!1;return}const o=Math.min(1,(r-.1)/.16);i.show=!0,i.sx=1,i.sy=.012+.988*(1-Math.pow(1-o,3));const a=r<.3?2.2-1.2*o:r<.36?.35:r<.42?1.15:r<.47?.6:r<.55?1.05:r<.6?.82:1;i.bright=a}else{if(r>.3){i.show=!1,n.textOn.value=Math.min(1,(r-.3)/.25)*(r<.4?.5:1);return}n.textOn.value=0,i.show=r<.24;const o=Math.min(1,r/.12),a=Math.min(1,Math.max(0,(r-.12)/.1));i.sy=Math.max(.006,1-o),i.sx=1-.97*a,i.bright=1+1.6*o}}rect(t=1,e=1){const n=this.machine.placed.screen,i=innerWidth/Math.max(1,innerHeight-gs),r=ru.w-2*vu,o=ru.h-2*vu;let a=r,l=r/i;l>o&&(l=o,a=o*i),a*=t,l*=e;const c=(h,u)=>n.c.clone().addScaledVector(n.right,h).addScaledVector(n.up,u).addScaledVector(n.n,.0015);return{corners:[c(-a/2,l/2),c(a/2,l/2),c(a/2,-l/2),c(-a/2,-l/2)],w:a,h:l}}place(t){const e=this.frame;if(!e)return;const n=this.crt;if(this.state==="there"){e.style.transform=`translate(0px, ${gs}px)`,e.style.opacity="1",e.style.filter="";return}if(!(n.show||this.state==="in"||this.state==="back")){e.style.opacity="0",e.style.transform="translate(0px, 0px) scale(0.04)";return}const{corners:r}=this.rect(this.state==="walk"||this.state==="step"?n.sx:1,this.state==="walk"||this.state==="step"?n.sy:1),o=innerWidth,a=innerHeight,l=[];for(const h of r){const u=h.clone().project(t);if(u.z>1||u.z<-1){e.style.opacity="0";return}l.push([(u.x+1)/2*o,(1-u.y)/2*a])}e.style.transform=WM(o,a-gs,l),e.style.opacity="1";const c=this.state==="walk"||this.state==="step"?n.bright:1;e.style.filter=Math.abs(c-1)>.01?`brightness(${c.toFixed(2)})`:""}enter(t,e){if(!this.ready||!this.machine)return!1;this.relock=e.locked,e.frozen=!0,this.look.pos.copy(t.position),this.look.quat.copy(t.quaternion),this.from.pos.copy(t.position),this.from.quat.copy(t.quaternion);const n=this.machine.placed.screen,{h:i}=this.rect(),r=Math.tan(We.degToRad(t.fov/2)),o=innerHeight,a=i*o/(2*r*(o-gs)),l=gs/2/o*2*a*r;return this.to.pos.copy(n.c).addScaledVector(n.n,a+.0015).addScaledVector(n.up,l),this.to.quat.setFromRotationMatrix(new Zt().makeBasis(n.right,n.up,n.n)),this.t=0,this.state="in",this.name.textContent=this.machine.placed.machine.name.replace(/\s*[|\n]\s*/g," "),document.body.classList.add("traveling"),document.pointerLockElement&&document.exitPointerLock(),!0}back(){var t,e;this.state==="there"&&(this.state="back",this.covering=!1,this.t=0,this.bar.classList.remove("on"),(t=this.frame)==null||t.blur(),(e=this.frame)==null||e.classList.remove("live"),this.from.pos.copy(this.to.pos),this.from.quat.copy(this.to.quat),this.onBack(this.relock))}travel(t,e,n){var r,o;const i=(a,l,c)=>{e.position.lerpVectors(a.pos,l.pos,c),e.quaternion.slerpQuaternions(a.quat,l.quat,c),e.updateMatrixWorld()};if(this.state==="in")this.t+=t/zM,i(this.from,this.to,za(this.t)),this.t>=1&&(this.state="there",this.covering=!0,this.bar.classList.add("on"),(r=this.frame)==null||r.classList.add("live"),(o=this.frame)==null||o.focus());else if(this.state==="there")i(this.to,this.to,1);else if(this.state==="back"){if(this.t+=t/OM,i(this.from,this.look,za(this.t)),this.t>=1){this.state="step",this.t=0,this.tube={on:!1,t:0},this.want=!1;const a=this.machine.placed,l=a.front;n.pos.set(a.spot.x+l[0]*_u,ki,a.spot.z+l[2]*_u),n.yaw=Math.atan2(l[0],l[2]),n.pitch=-.1,n.vel.set(0,0,0),n.collide()}}else if(this.state==="step"){this.t+=t/kM;const a=za(this.t),l={pos:e.position.clone(),quat:e.quaternion.clone()};i(this.look,l,a),this.t>=1&&(this.state="walk",n.frozen=!1,document.body.classList.remove("traveling"))}}resize(){this.sizeFrame()}}function WM(s,t,e){const[[n,i],[r,o],[a,l],[c,h]]=e,u=r-a,f=c-a,d=o-l,m=h-l,x=n-r+a-c,g=i-o+l-h,p=u*m-f*d,M=(x*m-f*g)/p,E=(u*g-x*d)/p,v=r-n+M*r,y=c-n+E*c,w=n,L=o-i+M*o,_=h-i+E*h,S=i;return`matrix3d(${[v/s,L/s,0,M/s,y/t,_/t,0,E/t,0,0,1,0,w,S,0,1].map(A=>+A.toFixed(10)).join(",")})`}const XM=4.5,qM=380,YM=10,$M=1.7;class KM{constructor(t,e,n,i,r,o){I(this,"ndc",new Ot);I(this,"ray",new To);I(this,"d",null);I(this,"trail",[]);I(this,"fingers",new Map);I(this,"two",null);I(this,"waitAll",!1);this.canvas=t,this.camera=e,this.player=n,this.pick=i,this.tap=r,this.enabled=o,t.addEventListener("pointerdown",a=>this.start(a)),t.addEventListener("pointermove",a=>this.move(a)),t.addEventListener("pointerup",a=>this.end(a)),t.addEventListener("pointercancel",a=>this.lift(a.pointerId)),t.addEventListener("lostpointercapture",a=>this.lift(a.pointerId)),t.addEventListener("touchstart",a=>a.preventDefault(),{passive:!1})}lift(t){var e;this.fingers.delete(t),((e=this.d)==null?void 0:e.id)===t&&(this.d=null),this.two&&(this.two.a===t||this.two.b===t)&&(this.two=null,this.waitAll=this.fingers.size>0),this.fingers.size||(this.waitAll=!1)}ndcAt(t,e){const n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1)}at(t){return this.ndcAt(t.clientX,t.clientY)}floorAt(t){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(t,this.camera);const e=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const i=-e.y/n.y;return i>30?null:new D(e.x+n.x*i,0,e.z+n.z*i)}start(t){var a;if(t.pointerType!=="touch"||!this.enabled())return;t.preventDefault(),(a=getSelection())==null||a.removeAllRanges();for(const l of[...this.fingers.keys()])this.canvas.hasPointerCapture(l)||this.lift(l);if(this.canvas.setPointerCapture(t.pointerId),this.fingers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null,this.trail=[],this.fingers.size===2){this.d=null;const[[l,c],[h,u]]=[...this.fingers.entries()],f=(c.x+u.x)/2,d=(c.y+u.y)/2;this.two={a:l,b:h,p0:this.floorAt(this.ndcAt(f,d)),mx:f,my:d,dist:Math.max(1,Math.hypot(c.x-u.x,c.y-u.y))};return}if(this.fingers.size>2||this.waitAll)return;const e=this.at(t),n=this.pick(e),i=this.floorAt(e),r=!!i&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(i)-.05),o=r||(n.kind==="wall"||n.kind==="machine")&&(n.dist??99)<=XM?1:.6;this.d={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),mode:r?"ground":"turn",grip:o,p0:r?i:null,moved:!1,lx:t.clientX,ly:t.clientY}}move(t){const e=this.fingers.get(t.pointerId);if(!e)return;t.preventDefault(),e.x=t.clientX,e.y=t.clientY;const n=performance.now(),i=this.two;if(i){const l=this.fingers.get(i.a),c=this.fingers.get(i.b);if(!l||!c)return;const h=(l.x+c.x)/2,u=(l.y+c.y)/2,f=Math.max(1,Math.hypot(l.x-c.x,l.y-c.y)),d=this.player.pos.x,m=this.player.pos.z;let x=0,g=0;if(i.p0){const E=this.floorAt(this.ndcAt(h,u));E&&(x=i.p0.x-E.x,g=i.p0.z-E.z)}else{const E=4/(this.canvas.clientHeight||800),v=Math.sin(this.player.yaw),y=Math.cos(this.player.yaw),w=h-i.mx,L=u-i.my;x=(-w*y+-L*v)*E,g=(w*v+-L*y)*E}const p=Math.log(f/i.dist)/Math.LN2*$M;x+=-Math.sin(this.player.yaw)*p,g+=-Math.cos(this.player.yaw)*p;const M=Math.hypot(x,g);for(M>1.2&&(x*=1.2/M,g*=1.2/M),M>1e-5&&this.player.drag(x,g),i.mx=h,i.my=u,i.dist=f,i.p0&&(i.p0=this.floorAt(this.ndcAt(h,u))??i.p0),this.trail.push({t:n,dx:this.player.pos.x-d,dz:this.player.pos.z-m,dyaw:0});this.trail.length&&n-this.trail[0].t>120;)this.trail.shift();return}const r=this.d;if(!r||t.pointerId!==r.id)return;!r.moved&&Math.hypot(t.clientX-r.x,t.clientY-r.y)>YM&&(r.moved=!0);const o=t.clientX-r.lx,a=t.clientY-r.ly;if(r.lx=t.clientX,r.ly=t.clientY,!!r.moved){if(r.mode==="ground"&&r.p0){const l=this.floorAt(this.at(t));if(!l)return;let c=r.p0.x-l.x,h=r.p0.z-l.z;const u=Math.hypot(c,h);u>1.2&&(c*=1.2/u,h*=1.2/u);const f=this.player.pos.x,d=this.player.pos.z;this.player.drag(c,h),this.trail.push({t:n,dx:this.player.pos.x-f,dz:this.player.pos.z-d,dyaw:0})}else{const l=We.degToRad(this.camera.fov)/this.canvas.clientHeight*r.grip;this.player.turnBy(o*l,a*l),this.trail.push({t:n,dx:0,dz:0,dyaw:o*l})}for(;this.trail.length&&n-this.trail[0].t>120;)this.trail.shift()}}end(t){const e=this.two&&(this.two.a===t.pointerId||this.two.b===t.pointerId),n=this.d;this.lift(t.pointerId);const i=performance.now();if(e){this.fling("ground",i);return}if(!(!n||t.pointerId!==n.id)){if(!n.moved&&i-n.t<qM){this.tap(this.pick(this.at(t)));return}this.fling(n.mode,i)}}fling(t,e){const n=this.trail.filter(l=>e-l.t<120);if(this.trail=[],!n.length||e-n[n.length-1].t>70)return;const i=Math.max(.03,(e-n[0].t)/1e3+1/60);let r=0,o=0,a=0;for(const l of n)r+=l.dx,o+=l.dz,a+=l.dyaw;t==="ground"?(this.player.glide.set(r/i,o/i),this.player.glide.length()>7&&this.player.glide.setLength(7)):this.player.spin=We.clamp(a/i,-7,7)}}const ZM=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],JM=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],Hf=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],Mr=.12,_c=[58,44,40],Oa=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},QM=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function Yo(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,r=s[n],o=s[n+1];return[0,1,2].map(a=>QM(Oa(r[a])+(Oa(o[a])-Oa(r[a]))*i))}function Fo([s,t,e]){const n=s/255,i=t/255,r=e/255,o=Math.max(n,i,r),a=Math.min(n,i,r),l=(o+a)/2,c=o-a;if(!c)return[0,0,l];const h=l>.5?c/(2-o-a):c/(o+a);let u;return o===n?u=(i-r)/c+(i<r?6:0):o===i?u=(r-n)/c+2:u=(n-i)/c+4,[u*60,h,l]}function jM(s,t,e){if(s=(s%360+360)%360,t<=0){const c=Math.round(e*255);return[c,c,c]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o=0,a=0,l=0;return s<60?(o=n,a=i):s<120?(o=i,a=n):s<180?(a=n,l=i):s<240?(a=i,l=n):s<300?(o=i,l=n):(o=n,l=i),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((l+r)*255)]}function ty(s,t){const[e,n,i]=Fo(s);return n<.02?s:jM(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const vc=s=>Yo(ZM,s.skin),ey=s=>Yo(JM,s.mouthColor),ny=s=>Yo(Hf,(s.cheeks-Mr)/(1-Mr)),iy=s=>{const t=Math.max(0,Math.min(1,s.cheeks/Mr));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=Yo(Hf,t/16);s.push(`rgb(${e},${n},${i}) ${((Mr+t/16*(1-Mr))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const sy={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:Fo(_c)[0]/360,hat:"none"},qt=16,$t=16,jt=16,Zs=[26,32,42],Mu=[236,240,246],un=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Ct={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:_c,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},Qn=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),yu=2.2,ry=18,oy=6,Su=.55;function ay(s){const t=yu*Math.pow(ry/yu,Math.max(0,Math.min(1,s))),e=qt/2,n=$t/2,i=jt/2;return(r,o,a)=>{const l=Math.abs(r+.5-e)/e,c=Math.abs(o+.5-n)/n,h=l**t+c**t;if(h>1)return!1;const u=Math.abs(a+.5-i)/i;if(a>=jt-oy){const f=h<=Su?1:((1-h)/(1-Su))**(1/t);return u<=f}return h+u**t<=1}}function ly(s){const t=vc(s),e=ay(s.shape),n=new Map,i=(k,W,O)=>`${k},${W},${O}`;let r=null;const o=new Set,a=new Set;let l;const c=(k,W,O,B)=>{const R=i(k,W,O);n.set(R,l?{x:k,y:W,z:O,c:B,part:l}:{x:k,y:W,z:O,c:B}),r&&r.add(R)},h=(k,W,O,B)=>{const R=i(k,W,O);n.set(R,{x:k,y:W,z:O,c:B}),o.delete(R),a.delete(R)},u=(k,W,O)=>n.has(i(k,W,O));for(let k=0;k<qt;k++)for(let W=0;W<$t;W++)for(let O=0;O<jt;O++)e(k,W,O)&&c(k,W,O,t);const f=(k,W)=>{for(let O=$t-1;O>=0;O--)if(u(k,O,W))return O;return-1},d=(k,W)=>{for(let O=jt-1;O>=0;O--)if(u(k,W,O))return O;return-1},m=(k,W,O)=>{if(k<0||k>=qt||W<0||W>=$t)return;const B=d(k,W);B>=0&&c(k,W,B,O)},x=qt/2,g=1+Qn(s.eyeSize,3),p=1+Qn(s.eyeSize,3),M=Math.max(1,6-g),E=1+Qn(s.eyeSpacing,M-1),v=8+Qn(s.eyeHeight,4)-2-Math.floor((p-1)/2),y=v+p-1,w=[[x-E-g,x-E-1],[x+E,x+E+g-1]],L=g>=3&&p>=3;for(const[k,W]of w)for(let O=k;O<=W;O++)for(let B=v;B<=y;B++){const R=!!(L&&O>k&&O<W&&B>v&&B<y);l=L&&!R?"eye":"pupil",m(O,B,L?R?Zs:Mu:Zs)}l=void 0,r=o;const _=Qn(s.browWeight,3),S=y+2+(Qn(s.browHeight,4)-2);if(_>0){l="brow";for(const[k,W]of w)for(let O=k-1;O<=W+1;O++)for(let B=0;B<_;B++)m(O,S+B,Ct.hair);l=void 0}r=null;const C=Qn(s.noseLength,8),A=5+(Qn(s.noseHeight,6)-3);if(C>0){const k=un(t,.9);l="nose";for(let W=x-1;W<=x;W++)for(let O=A;O<=A+1;O++){const B=d(W,O);if(!(B<0))for(let R=1;R<=C;R++)c(W,O,B+R,k)}l=void 0}const U=2*Qn(s.mouthWidth,4),F=3;if(U>0){const k=ey(s),W=U>=6?2:1;l="mouth";for(let O=x-U/2;O<=x+U/2-1;O++)for(let B=F;B<F+W;B++)m(O,B,k);l=void 0}const N=iy(s);if(N>0){const k=ny(s),W=(P,V)=>P[0]===V[0]&&P[1]===V[1]&&P[2]===V[2],O=v-1,B=F+(U>=6?2:1),R=Math.max(B+.5,O-.5);for(const[P,V]of w){const j=V<x,st=(P+V)/2,dt=st+.35*((j?x-1.5:x+.5)-st);for(let xt=Math.floor(dt-2);xt<=Math.ceil(dt+2);xt++)if(!(j?xt>x-2:xt<x+1))for(let Et=B;Et<=O;Et++){const Q=1-((xt-dt)/1.9)**2-((Et-R)/1.3)**2;if(Q<=0)continue;const lt=d(xt,Et),mt=lt>=0?n.get(i(xt,Et,lt)):void 0;if(!mt||mt.part||!W(mt.c,t))continue;const It=N*.72*Math.pow(Q,.8),ye=[0,1,2].map(Te=>Math.round(t[Te]+(k[Te]-t[Te])*It));n.set(i(xt,Et,lt),{x:xt,y:Et,z:lt,c:ye,blend:t})}}}const G=(k,W=1)=>{for(let O=0;O<qt;O++)for(let B=0;B<jt;B++){const R=f(O,B);if(!(R<0))for(let P=1;P<=W;P++)c(O,R+P,B,k)}},Z=(k,W,O)=>{const B=Math.ceil(W)+1;for(let R=x-B;R<x+B;R++)for(let P=x-B;P<x+B;P++)Math.hypot(R+.5-x,P+.5-x)<=W&&c(R,k,P,O)},X=(k,W,O,B)=>{for(let R=k;R<=W;R++)for(let P=0;P<qt;P++)for(let V=0;V<jt;V++)Math.hypot(P+.5-x,V+.5-x)<=O&&c(P,R,V,B)},tt=(k,W,O,B,R)=>{const P=Math.ceil(B)+1;for(let V=Math.floor(k-P);V<=k+P;V++)for(let j=Math.floor(W-P);j<=W+P;j++)for(let st=Math.floor(O-P);st<=O+P;st++)Math.hypot(V+.5-k,j+.5-W,st+.5-O)<=B&&c(V,j,st,R)},H=(k,W,O,B=1)=>{for(let R=k;R<=W;R++)for(let P=0;P<qt;P++){const V=d(P,R);V>=0&&c(P,R,V+B,O)}};switch(r=a,s.hat){case"birthday":{for(let k=0;k<9;k++)X($t+k,$t+k,5.4-k*.62,k%2?Ct.partyAlt:Ct.party);tt(x,$t+9.5,x,1.6,Mu);break}case"mickey":{const k=f(x,x)+2;for(const W of[-.5,qt+.5])tt(W,k,x,4.2,Zs);break}case"tophat":{Z($t,8.6,Ct.felt),X($t+1,$t+10,5,Ct.felt),X($t+3,$t+4,5.05,Ct.band);break}case"gangster":{Z($t,9.6,Ct.felt),X($t+1,$t+5,5,Ct.felt),X($t+1,$t+2,5.05,Ct.band);break}case"goggles":{H(v,y,Ct.brass);for(const[k,W]of w)for(let O=k;O<=W;O++)for(let B=v;B<=y;B++){const R=d(O,B);R>=0&&c(O,B,R+1,Ct.glass)}break}case"pilot":{G(Ct.leather,2),H($t-4,$t-3,Ct.brass);for(let k=$t-4;k>=4;k--)for(const W of[0,1,qt-2,qt-1])for(let O=0;O<jt;O++)u(W,k,O)&&c(W,k,O,Ct.leather);break}case"model":{Z($t,12.5,Ct.partyAlt),X($t+1,$t+2,4.4,Ct.partyAlt);break}case"curls":{let k=7;const W=()=>(k=(k*1103515245+12345)%2147483648)/2147483648;for(let O=-2;O<qt+2;O++)for(let B=-2;B<jt+2;B++){const R=f(Math.max(0,Math.min(qt-1,O)),Math.max(0,Math.min(jt-1,B)));R<0||(W()<.6&&c(O,R+1,B,Ct.hair),W()<.34&&c(O,R+2,B,Ct.hair),W()<.14&&c(O,R+3,B,Ct.hair))}break}case"bob":{G(Ct.hair,2);for(let k=y+1;k<$t;k++)for(let W=0;W<qt;W++)for(let O=0;O<jt;O++)(W<=1||W>=qt-2||O<=1)&&u(W,k,O)&&c(W,k,O,Ct.hair);break}case"pigtails":{G(Ct.hair,2);for(const k of[-1.5,qt+1.5])tt(k,$t-5,x,3.4,Ct.hair);break}case"crown":{const k=Ct.gold,W=un(k,1.15),O=Ct.band,B=(V,j)=>{const st=Math.hypot(V+.5-x,j+.5-x);return st>=5.1&&st<=6.9};let R=0;for(let V=0;V<qt;V++)for(let j=0;j<jt;j++)B(V,j)&&(R=Math.max(R,f(V,j)+3));for(let V=0;V<qt;V++)for(let j=0;j<jt;j++){if(!B(V,j))continue;const st=f(V,j);if(!(st<0))for(let dt=st+1;dt<=R;dt++)c(V,dt,j,dt===R?W:k)}const P=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[V,j]of P){const st=Math.hypot(V+1-x,j+1-x);for(let dt=V;dt<=V+1;dt++)for(let xt=j;xt<=j+1;xt++){const Et=Math.hypot(dt+.5-x,xt+.5-x)>st;for(let Q=1;Q<=(Et?5:3);Q++)c(dt,R+Q,xt,Et&&Q===5?W:k)}}for(let V=x-1;V<=x;V++)for(let j=R+2;j<=R+3;j++)for(let st=14;st<=15;st++)c(V,j,st,O);break}case"beanie":{const k=Ct.red,W=Ct.cream,O=Math.max(y+1,$t-6),B=Math.min(O+2,$t-1),R=[];for(let P=O;P<=B;P++)for(let V=-1;V<=qt;V++)for(let j=-1;j<=jt;j++)u(V,P,j)?c(V,P,j,W):(u(V-1,P,j)||u(V+1,P,j)||u(V,P,j-1)||u(V,P,j+1))&&R.push([V,P,j]);for(const[P,V,j]of R)c(P,V,j,W);for(let P=B+1;P<$t;P++)for(let V=0;V<qt;V++)for(let j=0;j<jt;j++)u(V,P,j)&&c(V,P,j,P===B+1?un(k,.82):k);for(let P=0;P<qt;P++)for(let V=0;V<jt;V++){const j=f(P,V);j<=B||(c(P,j+1,V,k),c(P,j+2,V,k))}tt(x,f(x,x)+4.5,x,1.9,W);break}case"cowboy":{let k=0;for(let W=0;W<qt;W++)for(let O=0;O<jt;O++)k=Math.max(k,f(W,O)+1);for(let W=0;W<qt;W++)for(let O=0;O<jt;O++){const B=f(W,O);if(!(B<0||Math.hypot(W+.5-x,O+.5-x)>5))for(let R=B+1;R<k;R++)c(W,R,O,Ct.leather)}for(let W=x-11;W<x+11;W++)for(let O=x-11;O<x+11;O++){const B=Math.abs(W+.5-x);if(Math.hypot(B,O+.5-x)>10.7)continue;const R=B>7.5?2:B>5.5?1:0;for(let P=0;P<=R;P++)c(W,k+P,O,Ct.leather)}for(let W=0;W<qt;W++)for(let O=0;O<jt;O++){const B=Math.abs(W+.5-x);if(Math.hypot(B,O+.5-x)>5)continue;const R=B<1?2:B<2?1:0;for(let P=k+1;P<=k+7-R;P++)c(W,P,O,Ct.leather);R>0&&c(W,k+7-R,O,un(Ct.leather,.8))}X(k+1,k+2,5.05,Ct.felt);break}case"wizard":{const k=Ct.plum,W=un(k,.82),O=f(x,x)+1;for(let V=x-6;V<x+6;V++)for(let j=x-6;j<x+6;j++){if(Math.hypot(V+.5-x,j+.5-x)>5.2)continue;const st=f(V,j);if(!(st<0))for(let dt=st+1;dt<=O;dt++)c(V,dt,j,k)}const B=11;for(let V=x-12;V<x+12;V++)for(let j=x-12;j<x+12;j++){const st=Math.hypot(V+.5-x,j+.5-x);if(st<=5.2||st>B)continue;const dt=V>=0&&V<qt&&j>=0&&j<jt?f(V,j):-1;c(V,Math.max(O-Math.max(0,Math.round(st)-8),dt+1,y+2),j,W)}const R=13;for(let V=0;V<=R;V++){const j=V/R,st=5-4.1*j,dt=x-6.5*j*j;for(let xt=x-6;xt<x+6;xt++)for(let Et=-2;Et<jt;Et++)Math.hypot(xt+.5-x,Et+.5-dt)<=st&&c(xt,O+V,Et,k)}const P=(V,j)=>{for(let st=x-j;st<x+j;st++){const dt=d(st,V);dt>=0&&c(st,V,dt,Ct.gold)}};P(O+3,1),P(O+4,2),P(O+5,1),P(O+8,1),P(O+11,1);break}case"halo":{let k=-1;for(let V=0;V<qt;V++)for(let j=0;j<jt;j++)k=Math.max(k,f(V,j));const W=k+3,O=un(Ct.gold,1.15),B=4.9,R=6.7,P=Math.ceil(R)+1;for(let V=x-P;V<x+P;V++)for(let j=x-P;j<x+P;j++){const st=Math.hypot(V+.5-x,j+.5-x);st<B||st>R||c(V,W,j,j>=x?O:Ct.gold)}break}case"headphones":{const k=Math.min(y+1,10),W=x-2,O=x+1;for(let B=0;B<qt;B++)for(let R=W;R<=O;R++){const P=f(B,R);P<0||(c(B,P+1,R,Ct.steel),c(B,P+2,R,Ct.steel))}for(let B=k+3;B<$t;B++)for(const R of[0,qt-1])for(let P=W;P<=O;P++)u(R,B,P)&&c(R,B,P,Ct.steel);for(let B=0;B<3;B++)for(let R=k-4;R<=k+3;R++)for(let P=x-4;P<=x+3;P++)Math.hypot(R+.5-k,P+.5-x)>3.6||(c(-B,R,P,Zs),c(qt-1+B,R,P,Zs));for(let B=k-2;B<=k+1;B++)for(let R=x-2;R<=x+1;R++)Math.hypot(B+.5-k,R+.5-x)<=1.6&&(c(-2,B,R,Ct.steel),c(qt+1,B,R,Ct.steel));break}case"viking":{const k=un(Ct.steel,.78),W=Math.max(y+2,$t-5);for(let R=W;R<$t;R++)for(let P=0;P<qt;P++)for(let V=0;V<jt;V++)u(P,R,V)&&c(P,R,V,R===W?k:Ct.steel);for(let R=0;R<qt;R++)for(let P=0;P<jt;P++){const V=f(R,P);V<W||(c(R,V+1,P,Ct.steel),c(R,V+2,P,Ct.steel))}const O=Math.max(y+1,W-1);for(let R=O;R<=$t;R++)for(let P=x-1;P<=x;P++){const V=d(P,R);V>=0&&c(P,R,V+1,k)}const B=Math.max(f(5,x)-4,y+4);for(const R of[-1,1])for(let P=0;P<=18;P++){const V=P/18,j=V*2.05,st=x+R*(6.2+6*Math.sin(j));tt(st,B+8.4-8.4*Math.cos(j),x,2.6-1.6*V,Ct.cream)}break}case"flowers":{const k=Math.max(y+1,Math.min(y+3,$t-4)),W=Ct.leaf,O=un(Ct.leaf,.82),B=(st,dt)=>Math.floor(x+st*dt),R=[[0,1],[.87,.5],[.87,-.5],[0,-1]],P=[];for(const[st,dt]of R){let xt=2;for(;xt<12&&u(B(st,xt),k,B(dt,xt));)xt+=.5;P.push(xt)}const V=[];for(let st=k;st<=k+1;st++)for(let dt=0;dt<qt;dt++)for(let xt=0;xt<jt;xt++){if(!u(dt,st,xt))continue;let Et=!1;for(let Q=-1;Q<=1;Q++)for(let lt=-1;lt<=1;lt++)u(dt+Q,st,xt+lt)||(Et=!0,V.push([dt+Q,st,xt+lt]));Et&&V.push([dt,st,xt])}for(const[st,dt,xt]of V)c(st,dt,xt,dt===k?O:W);const j=[Ct.red,Ct.gold,Ct.cream];for(let st=0;st<R.length;st++){const[dt,xt]=R[st],Et=Math.round(x+dt*(P[st]+1)),Q=Math.round(x+xt*(P[st]+1)),lt=j[st%j.length];tt(Et,k+1.5,Q,1.5,lt),dt>0&&tt(2*x-Et,k+1.5,Q,1.5,lt)}break}case"afro":{const O=f(x,x),B=Math.max(y+2,$t-3);for(let R=x-10;R<x+10;R++)for(let P=x-10;P<x+10;P++){const V=Math.abs(R+.5-x),j=Math.abs(P+.5-x),st=(V*V+j*j)/(10*10),dt=f(R,P);if(st>1&&dt<0)continue;const xt=st>1?0:7.5*Math.sqrt(1-st),Q=P>=jt-6?Math.max(y+1,B-Math.max(0,V-4.5)):y+1,lt=dt>=0?Q:Math.max(Q,Math.ceil(O+.5-xt)),mt=st>1?dt:Math.max(dt,Math.floor(O-.5+xt));for(let It=lt;It<=mt;It++)c(R,It,P,It<Q+2?un(Ct.hair,.8):Ct.hair)}break}case"mohawk":{const k=Ct.hair,W=un(t,.74);for(let B=0;B<qt;B++)for(let R=0;R<jt;R++){const P=f(B,R);if(!(P<0))for(let V=y+2;V<=P;V++)u(B,V,R)&&h(B,V,R,W)}const O=f(x,x);for(let B=1;B<jt-1;B++){if(f(x,B)<O-4)continue;const P=(B-1)/(jt-3),V=2+Math.round(4*Math.sin(Math.PI*P));for(const j of[x-1,x])for(let st=f(j,B)+1;st<=f(j,B)+V;st++)c(j,st,B,k)}break}case"ponytail":{const k=Ct.hair,W=Math.max(f(x-1,2),f(x,2))-2;for(let O=0;O<qt;O++)for(let B=0;B<jt;B++){const R=f(O,B);R>y&&c(O,R,B,k)}G(k,2);for(let O=y+1;O<$t;O++)for(let B=0;B<qt;B++)for(let R=0;R<jt;R++)(B<=1||B>=qt-2||R<=3)&&u(B,O,R)&&c(B,O,R,k);for(let O=3;O<=y;O++){const B=6-Math.max(0,Math.min(3,y-O));for(let R=x-B;R<x+B;R++)for(let P=0;P<=2;P++)u(R,O,P)&&c(R,O,P,k)}for(let O=0;O<=14;O++){const B=O/14;tt(x,W-10*B*B,1.5-4.4*Math.sqrt(B),2.7-1.3*B,k)}tt(x,W-.5,-.6,2.1,Ct.band);break}case"longhair":{const k=Ct.hair,W=jt-5,O=2;G(k,2);for(let B=0;B<$t;B++)for(let R=0;R<qt;R++)for(let P=0;P<jt;P++){if(!u(R,B,P))continue;const V=P>=W,j=R<O||R>=qt-O;V&&!j||V&&j&&B>=v&&B<=y||c(R,B,P,k)}for(let B=Math.max($t-3,y+2);B<$t;B++)for(let R=0;R<qt;R++)for(let P=W;P<jt;P++)u(R,B,P)&&c(R,B,P,k);for(let B=0;B<qt;B++)for(let R=0;R<jt;R++){if(!(B<O||B>=qt-O||R<O)||f(B,R)<0)continue;let V=0;for(;!u(B,V,R);)V++;for(let j=V-1;j>=V-3;j--)c(B,j,R,k)}break}case"buzz":{const k=Ct.hair,W=un(Ct.hair,1.75),O=Math.min($t-2,Math.max(y+3,$t-3));for(let B=0;B<qt;B++)for(let R=0;R<jt;R++){const P=f(B,R);if(P<0)continue;const V=Math.abs(B+.5-x),st=R>=jt-6?V<5.5?0:V<6.5?1:2:3,dt=Math.max(y+1,Math.min(O-st,P-1));for(let xt=dt;xt<=P;xt++)u(B,xt,R)&&c(B,xt,R,xt<O?W:k)}break}case"bun":{const k=un(Ct.hair,.74),W=y+2;for(let R=0;R<qt;R++)for(let P=0;P<jt;P++){const V=f(R,P);if(V<W)continue;const j=P<=5?5:P<=9?3:2;for(let st=V;st>V-j&&st>=W;st--)u(R,st,P)&&c(R,st,P,Ct.hair);c(R,V+1,P,Ct.hair)}const O=4.5,B=f(x,4);tt(x,B+3,O,3.1,Ct.hair);for(let R=x-4;R<x+4;R++)for(let P=1;P<=8;P++)if(Math.hypot(R+.5-x,P+.5-O)<=2.6)for(let V=B+1;V<=B+2;V++)c(R,V,P,k);break}case"braids":{G(Ct.hair,2);for(let O=y+1;O<$t;O++)for(let B=0;B<qt;B++)for(let R=0;R<jt;R++)(B<=1||B>=qt-2||R<=1)&&u(B,O,R)&&c(B,O,R,Ct.hair);const k=un(Ct.hair,1.3),W=-5;for(const O of[-1,qt]){const B=Math.max(0,Math.min(qt-1,O)),R=Math.min(f(B,6),$t-4);if(!(R<0)){for(let P=W;P<=R;P++){const V=P<=W+3,j=P<=W+1;let st=(P%4+4)%4<2?Ct.hair:k;j&&(st=Ct.band);for(let dt=-1;dt<=1;dt++)for(let xt=-1;xt<=1;xt++)(!V||Math.abs(dt)+Math.abs(xt)<2)&&c(O+dt,P,6+xt,st)}tt(O+.5,W-2,6.5,1.9,Ct.band)}}break}}r=null;const K=.18,et=.25;let ft=-1;if(a.size){const k=new Map;let W=0,O=0;for(const P of a){const V=n.get(P);if(!V)continue;O++;const j=`${V.c[0]},${V.c[1]},${V.c[2]}`,st=k.get(j);st?st.n++:k.set(j,{n:1,c:V.c,chroma:(Math.max(...V.c)-Math.min(...V.c))/255}),k.get(j).chroma>=K&&W++}const B=O>0&&W/O<et;let R=null;for(const P of k.values())!B&&P.chroma<K||(!R||P.n>R.n)&&(R=P);R&&(ft=Fo(R.c)[0])}else o.size&&(ft=Fo(_c)[0]);if(ft>=0){const k=s.hairColor*360-ft;if(Math.abs(k)>.5)for(const W of[...a,...o]){const O=n.get(W);O&&(O.c=ty(O.c,k))}}return{voxels:[...n.values()],anchor:ft}}function cy(s){return ly(s).voxels}const hy=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],ka=.42,eo=new zt,wu=(s,t,e)=>(eo.setRGB(s/255,t/255,e/255,De),[eo.r,eo.g,eo.b]);function uy(s,t){const e=new Map;for(const S of s)e.set(`${S.x},${S.y},${S.z}`,S);const n=(S,C,A)=>e.get(`${S},${C},${A}`),i=(S,C)=>S[0]===C[0]&&S[1]===C[1]&&S[2]===C[2],r=(S,C)=>i(S.c,C.c)||!!S.blend&&(!!C.blend||i(S.blend,C.c))||!!C.blend&&i(C.blend,S.c);let o=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,u=-1/0;for(const S of s)S.x<o&&(o=S.x),S.y<a&&(a=S.y),S.z<l&&(l=S.z),S.x>c&&(c=S.x),S.y>h&&(h=S.y),S.z>u&&(u=S.z);const f=t?t[0]:(o+c)/2,d=t?t[1]:(a+h)/2,m=t?t[2]:(l+u)/2,x=[],g=[],p=[],M=[],E=[],v=new Set;for(const S of s){const C=S.x-f,A=S.y-d,U=S.z-m,F=wu(S.c[0],S.c[1],S.c[2]),N=wu(S.c[0]*ka,S.c[1]*ka,S.c[2]*ka);for(const{n:G,t1:Z,t2:X}of hy){if(n(S.x+G[0],S.y+G[1],S.z+G[2]))continue;const tt=(k,W)=>[C+G[0]/2+Z[0]*k+X[0]*W,A+G[1]/2+Z[1]*k+X[1]*W,U+G[2]/2+Z[2]*k+X[2]*W],H=tt(-.5,-.5),K=tt(.5,-.5),et=tt(.5,.5),ft=tt(-.5,.5);for(const k of[H,K,et,H,et,ft])x.push(k[0],k[1],k[2]),g.push(G[0],G[1],G[2]),p.push(F[0],F[1],F[2]);for(const[k,W,O]of[[Z,X,1],[Z,X,-1],[X,Z,1],[X,Z,-1]]){const B=n(S.x+k[0]*O,S.y+k[1]*O,S.z+k[2]*O);if(B&&r(B,S)&&!n(S.x+k[0]*O+G[0],S.y+k[1]*O+G[1],S.z+k[2]*O+G[2]))continue;const R=Et=>[C+G[0]/2+k[0]*O/2+W[0]*Et/2,A+G[1]/2+k[1]*O/2+W[1]*Et/2,U+G[2]/2+k[2]*O/2+W[2]*Et/2],P=R(1),V=R(-1),j=P.map(Et=>Et.toFixed(2)).join(),st=V.map(Et=>Et.toFixed(2)).join(),dt=j<st?`${j}|${st}`:`${st}|${j}`;if(v.has(dt))continue;v.add(dt);const xt=.006;M.push(P[0]+G[0]*xt,P[1]+G[1]*xt,P[2]+G[2]*xt,V[0]+G[0]*xt,V[1]+G[1]*xt,V[2]+G[2]*xt),E.push(N[0],N[1],N[2],N[0],N[1],N[2])}}}const y=new be;y.setAttribute("position",new Xt(x,3)),y.setAttribute("normal",new Xt(g,3)),y.setAttribute("color",new Xt(p,3));const w=new be;w.setAttribute("position",new Xt(M,3)),w.setAttribute("color",new Xt(E,3));const L=[(c-o)/2+.5,(h-a)/2+.5,(u-l)/2+.5],_=Math.max(L[0],L[1],L[2])*1.15;return{faces:y,edges:w,radius:_}}const Gf=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],ne=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),fy={calm:{...ne("lid",.1),smile:.08},pleased:{...ne("lid",.2),...ne("low",.3),...ne("raise",.1),smile:.65},happy:{...ne("raise",.35),...ne("arch",.25),...ne("low",.42),smile:.9,open:.16},joy:{...ne("raise",.85),...ne("arch",.4),...ne("low",.55),smile:1,open:.6,roll:.06},surprised:{...ne("raise",1.5),...ne("arch",.45),...ne("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...ne("lid",.2),skew:.42},sad:{...ne("inner",.95),...ne("raise",-.1),...ne("lid",.36),...ne("tilt",-.5),smile:-.75,nod:.08},bored:{...ne("lid",.5),...ne("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...ne("lid",.72),...ne("tilt",-.25),...ne("raise",-.2),...ne("inner",.2),smile:-.05,nod:.18},yawn:{...ne("lid",1),...ne("raise",.75),...ne("inner",.3),open:1,round:.55,nod:-.14},asleep:{...ne("lid",1.05),...ne("raise",-.12),...ne("inner",.12),smile:.05,open:.06},excited:{...ne("raise",.9),...ne("inner",-.1),...ne("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...ne("raise",.85),...ne("arch",.3),...ne("lid",.04),roll:.12,smile:.25}},dy={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},bu=()=>Object.fromEntries(Gf.map(s=>[s,s==="pupil"?1:0])),py=s=>new zt().setRGB(s[0]/255,s[1]/255,s[2]/255,De);class my{constructor(t){I(this,"head",new Ie);I(this,"solid",[]);I(this,"drop");I(this,"roll",0);I(this,"nod",0);I(this,"own",[]);I(this,"brows",[]);I(this,"eyes",[]);I(this,"mouth",[]);I(this,"seam",0);I(this,"lipH",.5);I(this,"browLo",0);I(this,"browHi",0);I(this,"d",bu());I(this,"mood","calm");I(this,"feeling",null);I(this,"feelFor",0);I(this,"blinkIn",1.5);I(this,"blinkT",-1);I(this,"blinkLen",.13);I(this,"glance",new Ot);I(this,"glanceIn",1);I(this,"micro",new Ot);I(this,"microIn",.5);I(this,"talkT",0);I(this,"syl",0);I(this,"sylLen",.16);I(this,"sylAmp",0);I(this,"sylRound",0);I(this,"pause",0);I(this,"beat",0);I(this,"wasTalking",!1);I(this,"lookX",0);I(this,"lookY",0);const e=cy(t);let n=1/0,i=1/0,r=1/0,o=-1/0,a=-1/0,l=-1/0;for(const H of e)n=Math.min(n,H.x),o=Math.max(o,H.x),i=Math.min(i,H.y),a=Math.max(a,H.y),r=Math.min(r,H.z),l=Math.max(l,H.z);const c=(n+o)/2,h=(i+a)/2,u=(r+l)/2;this.drop=(h-($t-1)/2)/16;const f=vc(t),d=8,m=H=>H<d?0:1,x=[!1,!1];for(const H of e)H.part==="eye"&&(x[m(H.x)]=!0);const g=[236,240,246],p=e.map(H=>H.part==="brow"||H.part==="mouth"?{...H,c:f,part:void 0}:H.part==="pupil"&&x[m(H.x)]?{...H,c:g}:H),{faces:M,edges:E}=uy(p,[c,h,u]),v=new Eo({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),y=new sf({vertexColors:!0});this.own.push(M,E,v,y);const w=new Me(M,v);this.head.add(w,new Rp(E,y)),this.solid.push(w);const L=new Sn(1,1,1);this.own.push(L);const _=new Map,S=H=>{const K=H.join();let et=_.get(K);return et||(et=new Eo({color:py(H)}),_.set(K,et),this.own.push(et)),et},C=H=>{const K=new Me(L,S(H));return this.head.add(K),this.solid.push(K),K},A=H=>H.z-u+.5,U=e.filter(H=>H.part==="brow");for(const H of[0,1]){const K=U.filter(B=>m(B.x)===H);if(!K.length)continue;const et=K.map(B=>B.x),ft=Math.min(...et),k=Math.max(...et),W=(ft+k)/2,O=Math.max(.5,(k-ft)/2);for(const B of K){const R=H===0?(W-B.x)/O:(B.x-W)/O;this.brows.push({m:C(B.c),x:B.x-c,y:B.y-h,z:A(B),xn:R,side:H})}}const F=e.filter(H=>H.part==="eye"||H.part==="pupil"),N=f.map(H=>Math.round(H*.88));let G=-1/0;for(const H of[0,1]){const K=F.filter(lt=>m(lt.x)===H);if(!K.length)continue;const et=K.map(lt=>lt.x),ft=K.map(lt=>lt.y),k=Math.min(...et),W=Math.max(...et),O=Math.min(...ft),B=Math.max(...ft);G=Math.max(G,B);const R=Math.max(...K.map(A)),P=(k+W)/2-c,V=(O+B)/2-h,j=W-k+1,st=B-O+1;let dt=null;const xt=Math.max(1,j-2),Et=Math.max(1,st-2);if(x[H]){const lt=K.find(mt=>mt.part==="pupil").c;dt=C(lt),dt.scale.set(xt,Et,.05)}const Q=[];for(let lt=k;lt<=W;lt++){const mt=j>1?H===0?(lt-k)/(j-1):(W-lt)/(j-1):.5;Q.push({x:lt-c,k:mt,up:C(N),low:C(N)})}this.eyes.push({side:H,y0:O-h-.5,y1:B-h+.5,z:R,cx:P,cy:V,pupil:dt,pw:xt,ph:Et,reach:(j-xt)/2,cols:Q})}const Z=e.filter(H=>H.part==="mouth");if(Z.length){const H=[...new Set(Z.map(R=>R.x))].sort((R,P)=>R-P),K=Z.map(R=>R.y),et=Math.min(...K),ft=Math.max(...K),k=ft-et+1;this.seam=k>=2?(et+ft)/2-h:et-h,this.lipH=k>=2?1:.5;const W=(H[0]+H[H.length-1])/2,O=Math.max(.5,(H[H.length-1]-H[0])/2),B=Z[0].c;for(const R of H){const P=Math.max(...Z.filter(V=>V.x===R).map(A));this.mouth.push({x:R-c,z:P,xn:(R-W)/O,top:C(B),bot:C(B),inside:C([46,22,28])})}}const X=this.brows.map(H=>H.y),tt=Math.max(...e.filter(H=>H.c[0]===f[0]&&H.c[1]===f[1]&&H.c[2]===f[2]).map(H=>H.y));this.browLo=G===-1/0?-2:G-h+.85-(X.length?Math.min(...X):0),this.browHi=tt-h-.8-(X.length?Math.max(...X):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...bu(),...fy[r]};if(i!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);o.open=Math.max(o.open*.6,f),o.round=Math.max(o.round,this.sylRound*f),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=dy[r]??8;for(const u of Gf){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(o[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let l=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;l=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let c=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));c=e.x/u*1.6,h=e.y/u*1.6}r==="thinking"&&(c=.7,h=.6),this.lookX+=(We.clamp(c+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(We.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(l)}apply(t=0){const e=this.d,n=r=>e[r],i=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=We.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+i/2),r.m.scale.set(1.001,1,i)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const l of r.cols){const c=We.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(l.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*l.k-1)),u=t>.5?0:We.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(l.up,l.x,r.y1+.08,-(c+(c>.01?.08:0)),r.z),this.lid(l.low,l.x,r.y0-.08,u+(u>.01?.08:0),r.z)}if(r.pupil){const l=We.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*l,r.ph*l,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,l=We.clamp(e.round,0,1),c=Math.max(0,e.open)*(1-.55*o*o)*(1-l*.75*o*o)*2.4,h=1-l*.35*Math.max(0,Math.abs(o)-.5)*2,u=this.seam+a;r.top.position.set(r.x,u+this.lipH/2,r.z+.01+i/2),r.top.scale.set(h,this.lipH,i),r.bot.position.set(r.x,u-c-this.lipH/2,r.z+.01+i/2),r.bot.scale.set(h,this.lipH,i),r.inside.visible=c>.02,r.inside.position.set(r.x,u-c/2,r.z+.005+i/4),r.inside.scale.set(h*.98,Math.max(.001,c),i/2)}}lid(t,e,n,i,r){const o=Math.abs(i);t.visible=o>.01,t.visible&&(t.position.set(e,n+i/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}function gy(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new be;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Eu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const m=Eu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function Eu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new yn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const we=22,Vf=.6,fn=Math.PI*2,Re=(s,t,e)=>s<t?t:s>e?e:s,On=s=>s<0?0:s>1?1:s,Ht=(s,t,e)=>s+(t-s)*e,ie=s=>{const t=On(s);return t*t*(3-2*t)},xy=s=>{const t=On(s);return t*t*t*(t*(t*6-15)+10)},Js=s=>s-Math.floor(s),xn=s=>Math.atan2(Math.sin(s),Math.cos(s)),Wf=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),si=-.06,sn=.11,je=.19;class _y{constructor(t){I(this,"xs",[]);I(this,"zs",[]);I(this,"cum",[]);I(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(i-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const r=e[i-1],o=e[i],a=e[i+1],l=Math.hypot(o.x-r.x,o.z-r.z),c=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/l,u=(o.z-r.z)/l,f=(a.x-o.x)/c,d=(a.z-o.z)/c;if(h*f+u*d>.999){n(o.x,o.z);continue}const m=Math.min(.42,l*.5,c*.5),x=o.x-h*m,g=o.z-u*m,p=o.x+f*m,M=o.z+d*m;for(let E=0;E<=8;E++){const v=E/8,y=1-v;n(y*y*x+2*y*v*o.x+v*v*p,y*y*g+2*y*v*o.z+v*v*M)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],r=i>0?On((t-this.cum[n])/i):0;return e.x=Ht(this.xs[n],this.xs[n+1],r),e.z=Ht(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(Re(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const no=.05,io=.12;class vy{constructor(t,e){I(this,"L");I(this,"thigh");I(this,"shin");I(this,"footH",.06);I(this,"hipX",.17);I(this,"armLen");I(this,"legless");I(this,"pos",new D);I(this,"yaw",0);I(this,"lean",0);I(this,"roll",0);I(this,"squash",0);I(this,"stretch",0);I(this,"feet");I(this,"arms");I(this,"onPuff",null);I(this,"onPrint",null);I(this,"airborne",!1);I(this,"rest","stand");I(this,"breath",0);I(this,"asleep",!1);I(this,"headDrop",0);I(this,"hipDrop",0);I(this,"scratch",null);I(this,"scratchIn",5);I(this,"world");I(this,"base",new D);I(this,"vy",0);I(this,"qv",0);I(this,"qRest",0);I(this,"leanV",0);I(this,"leanRest",0);I(this,"sv",0);I(this,"stretchRest",0);I(this,"speed",0);I(this,"lastSpeed",0);I(this,"wantYaw",null);I(this,"trip",null);I(this,"pending",null);I(this,"act",null);I(this,"phase",0);I(this,"running",0);I(this,"clockOn",!1);I(this,"gRef",0);I(this,"held",!1);I(this,"wallSide",0);I(this,"sway",0);I(this,"swayV",0);I(this,"shift",0);I(this,"shiftIn",3);I(this,"clock",0);I(this,"tapT",-1);I(this,"seq",null);I(this,"queued",[]);I(this,"restYaw",null);I(this,"anchor",{x:0,z:0,g:0,yaw:0});I(this,"t1",new D);I(this,"t2",new D);I(this,"t3",new D);I(this,"e1",new bn);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=o=>({side:o,mode:"ground",sole:new D,yaw:0,pitch:0,from:new D,to:new D,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new D,kneeOut:0,sy:0,ankle:new D,q:new de,toe:0});this.feet=[i(-1),i(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*we*e):t==="run"?Math.sqrt(.45*we*e):Math.min(9,Math.sqrt(1.15*we*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(we*e)),i=Re(2*n**.3*e,.35*e,2.6*e),r=Math.max(i,t/this.boundFreq);return Ht(i,r,this.running)}get duty(){return Ht(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const i={x:this.base.x,z:this.base.z},r=this.legless?[{kind:"path",pts:[i,...t]}]:this.split(i,t);this.trip={gait:e,legs:r,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=i.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=i.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const r=this.world.groundAt(n,i),o=this.thigh+this.shin,a=Math.cos(t),l=Math.sin(t),c=(u,f)=>Math.abs(this.world.groundAt(n+a*u+l*f,i-l*u+a*f)-r)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!c(-.45,u)||!c(.45,u))return!1;if(!c(-.45,h)||!c(.45,h)||!c(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=o*.95+.35;u+=.3)if(!c(-.3,u)||!c(.3,u))return!1;if(!c(-.7,-.5)||!c(.7,-.5)||!c(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=o*.92+.35;f+=.3)if(!c(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!c(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const l=this.world.groundAt(a.x,a.z),c=l-o,h=c>this.stepUpMax()?c>this.jumpUpMax()?"climb":"jump":-c>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},f=h==="climb"?c>this.L?0:.12:h==="jump"?.14:.12;i.push({x:r.x+u.x*f,z:r.z+u.z*f}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:l}),i=[{x:a.x,z:a.z}]}else i.push(a);r=a,o=l}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new _y(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let r=0;r<=i.total+no;r+=no)i.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new D(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(i.x,i.z)),o){const l={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},c={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new D(l.x+c.x*h*.3+i.x*.14,e.hb+.01,l.z+c.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand"?this.stepRest(t):this.asleep?this.breath=Js(this.breath+t/3.6):this.act?this.stepAct(t):e&&e.path?this.legless?this.stepHopper(t,e):this.stepWalk(t,e):this.stepStand(t),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?6.5:e.gait==="run"?7:5,a=r?5:e.gait==="run"?7:6,l=n.total-e.s;let c=Math.min(i,Math.sqrt(2*a*Math.max(0,l-.01))),h=1/0;this.held=!1;for(const y of this.feet)y.mode==="ground"&&(h=Math.min(h,y.sole.y));if(h<1/0){const y=Math.sin(this.yaw),w=Math.cos(this.yaw),L=this.world.groundAt(this.base.x,this.base.z);for(let _=0;_<=.8;_+=.05){const S=this.world.groundAt(this.base.x+y*_,this.base.z+w*_);if(S>Math.max(h,L)+.2){S<=h+this.stepUpMax()+.05&&(c=Math.min(c,Math.sqrt(2*a*2*Math.max(0,_-.18))),this.held=_<.45);break}}}const u=Math.abs(xn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));c*=On((1.6-u)/1.1),this.speed+=Re(c-this.speed,-a*2*t,o*t),l<=.01&&(this.speed=0);const f=this.gaitSpeed("walk"),d=this.gaitSpeed("bound"),m=On((this.speed-f*1.05)/(d*.85-f*1.05));this.running+=(m-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const x=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),g=Ht(4.5,8,this.running)*t;this.yaw+=Re(xn(x-this.yaw),-g,g);const p=f/this.strideAt(f),M=Math.max(p*Ht(.75,1.5,ie((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),E=this.duty,v=this.running>.45;if(this.clockOn){this.phase+=M*t;for(let y=0;y<2;y++){const w=this.feet[y],L=Js(this.phase-y*.5);L<E?w.mode==="swing"&&w.clocked&&this.touchDown(w,v?1:.55):(w.mode!=="swing"&&(this.liftOff(w,!0,0),this.feet.every(_=>_.mode!=="ground")&&(this.qv+=1.6*this.running)),w.s=(L-E)/(1-E),w.s<.7&&this.aimSwing(w,e,(1-L)/M,E/2/M)),this.footPitch(w,L,E,v)}}if(this.airborne=this.clockOn&&this.feet.every(y=>y.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,l<=.01){if(this.clockOn){for(const w of this.feet)w.mode!=="swing"||!w.clocked||(w.clocked=!1,w.dur=Math.max(.08,(1-w.s)*((1-E)/M)),w.s=0,w.from.set(w.ankle.x,w.ankle.y-this.footH,w.ankle.z),w.fromYaw=w.yaw,w.apex=Math.max(w.from.y,w.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(w=>w.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,v?"run":"walk",M,E)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+i),this.held?.55:0)),l=r.at(a,this.t1),c=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(xn(c-this.yaw))>1.2?this.yaw:c;this.neutral(t,l,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,Ht(.06+.1*this.legW,.12+.2*this.legW,this.running))}neutral(t,e,n,i){const r=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*r,i.z=e.z-Math.sin(n)*r,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),r=Re(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),l=this.world.groundAt(t.x+n*(je+.01),t.z+i*(je+.01)),c=this.world.groundAt(t.x+n*r,t.z+i*r),h=this.world.groundAt(t.x+n*(si-.02),t.z+i*(si-.02));if(l>a+.05||c>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*Re(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;i=Math.max(i,this.world.groundAt(Ht(t.from.x,t.to.x,o),Ht(t.from.z,t.to.z,o)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const r=e/n;i?t.pitch=r<.5?0:-.85*ie((r-.5)/.5):t.pitch=r<.12?.22*(1-ie(r/.12)):r<.6?0:-.7*ie((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?Ht(-.7,-.8,r/.3):r<.82?Ht(-.8,0,ie((r-.3)/.52)):(i?-.05:.22)*ie((r-.82)/.18)}}bodyOver(t,e,n,i){let r=this.shift;if(e!=="stand"&&this.clockOn)r=-(Ht(.03,.01,this.running)*this.legW*Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))))*Math.cos(fn*(this.phase-i/2));else{const m=this.feet.filter(x=>x.mode==="ground");m.length===1&&(r=m[0].side*this.hipX*.85)}r+=this.wallNudge();const o=e==="stand"?40:150;this.swayV+=(o*(r-this.sway)-2*Math.sqrt(o)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.pos.x=this.base.x+Math.cos(this.yaw)*this.sway,this.pos.z=this.base.z-Math.sin(this.yaw)*this.sway;const a=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(a+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const l=this.reachTop();let c=l.soft-.012*this.legW;if(e!=="stand"){let m=-1/0,x=!1;for(const g of this.feet)g.mode==="ground"&&(m=Math.max(m,g.sole.y));for(const g of this.feet)g.mode==="swing"&&g.to.y>m+.2&&(x=!0);m>-1/0&&!x&&(c=Math.min(c,m+this.footH+(this.thigh+this.shin)*.955+.5))}let h=c;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const m=.5/n,x=i/n,g=Math.max(0,m-x),p=we*g*x/fn,M=this.speed*x/2,E=(this.thigh+this.shin)*.985,v=this.gRef+this.footH+Math.sqrt(Math.max(.25*E*E,E*E-M*M))+.5,y=Js(this.phase*2),w=x/m;let L;if(y<w)L=v-p*Math.sin(Math.PI*(y/w));else{const _=(y-w)*m;L=v+we*g/2*_-we/2*_*_}h=Ht(c,L,ie((this.running-.45)/.25))}e==="stand"&&(h-=.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const m of this.feet){if(m.mode!=="ground")continue;const x=this.kneeAt(m,this.t2),g=Math.sin(m.yaw)*.06,p=Math.cos(m.yaw)*.06;(this.world.solidAt(x.x,x.y,x.z)||this.world.solidAt(x.x+g,x.y-.06,x.z+p))&&(h=Math.max(h,l.hard))}const u=e==="run"?fn*7:fn*4.2,f=e==="run"?.9:.72;this.vy+=(u*u*(h-this.pos.y)-2*f*u*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>l.hard&&(this.pos.y=l.hard,this.vy>0&&(this.vy=0));const d=a+this.footH+.45*this.legW+.5;this.pos.y<d&&(this.pos.y=d,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=t.pitch,o=r>0?si:r<0?sn:0,a=-o,l=this.footH,c=Math.cos(r),h=Math.sin(r),u=o+a*c-l*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+l*c,t.sole.z+i*u)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,l=t.ankle.x-r,c=t.ankle.y-o,h=t.ankle.z-a,u=Math.hypot(l,c,h)||1e-6,f=this.thigh,d=this.shin,m=Re(u,Math.abs(f-d)+.001,f+d-1e-4),x=l/u,g=c/u,p=h/u,M=Re((f*f+m*m-d*d)/(2*f*m),-1,1),E=Math.sqrt(1-M*M),v=t.kneeOut,y=n*t.side,w=-i*t.side;let L=Math.sin(t.yaw)*(1-v*1.3)+y*(.12+1.2*v),_=Wf(-c,this.legW),S=Math.cos(t.yaw)*(1-v*1.3)+w*(.12+1.2*v);const C=L*x+_*g+S*p;L-=x*C,_-=g*C,S-=p*C;const A=Math.hypot(L,_,S)||1;return e.set(r+f*(M*x+E*L/A),o+f*(M*g+E*_/A),a+f*(M*p+E*S/A))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const l=this.kneeAt(t,this.t2);return this.world.solidAt(l.x,l.y,l.z)||this.world.solidAt(l.x+n,l.y-.07,l.z+i)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,l=Math.cos(this.yaw)*o,c=(g,p)=>this.world.solidAt(g,n,p)||this.world.solidAt(g,i,p),h=g=>c(this.base.x+t*r*g,this.base.z+e*r*g),u=g=>c(this.base.x+t*r*g+a,this.base.z+e*r*g+l),f=h(1),d=h(-1),m=f||u(1)&&!d,x=d||u(-1)&&!f;return this.wallSide=m&&!x?-1:x&&!m?1:0,m&&!x?.22:x&&!m?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(l,c)=>{const h=this.pos.x+e*l.side*this.hipX,u=this.pos.z-n*l.side*this.hipX,f=c.x-h,d=c.z-u,m=t*t-f*f-d*d;return c.y+this.footH+(m>0?Math.sqrt(m):0)+.5};let r=1/0;for(const l of this.feet)l.mode==="ground"&&(r=Math.min(r,i(l,this.plantedAnkle(l,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const l of this.feet){if(l.mode!=="swing")continue;const c=i(l,l.to),h=ie((l.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?c+.3*(1-h):Ht(o,c,h))),l.s>.88&&(r=Math.min(r,c+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&(this.yaw+=Re(xn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&this.feet.every(i=>i.mode==="ground")){let i=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.base,this.yaw,this.t2),l=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(xn(this.yaw-o.yaw))*.35;l>r&&(r=l,i=o)}if(i&&r>.09+.03*this.legW){const o=i;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.base,this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*fn*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,Ht(-n*.97,-n*.55,ie(t)),Ht(0,.1*n,ie(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,l)=>new D(o,a,l),n=this.thigh+this.shin,i=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,i,0),e(r,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=io/2,a=je-.02,l=a+.07,c=Math.asin(Re((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(c+.19),l),u=Math.asin(Re((h-o)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(c),m=this.hipX+.03,x=-.08,g=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(x,0,0))),p=this.fromPivot(g,x,0,[e(-m,a,d),e(m,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),M=2*Math.max(.12,this.armLen/2-.05)*.92,E=p.head.y-.08-.04;return M*M-E*E>.35*.35&&(p.hands=[this.palm(p.head,x,0,0,-.12,.92),this.palm(p.head,x,0,1,.12,.92)]),p}case"lie":{const a=Math.PI/2,l=e(-.25,.5+io,0),c=this.onGround(l,0,a,1,.62,.84,i+.2),h=new de().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(l,h,1,1).lerp(c,Math.min(.45,.55/n));return f.y+=io/2+.03,{head:l,lean:0,roll:a,ankles:[this.onGround(l,0,a,0,.85,.84,i+.04),c],feet:[-.35,-.35],hands:[this.palm(l,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new de().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,r,o,a){const l=new de().setFromEuler(this.e1.set(e,0,n)),c=this.hipOf(t,l,i,1),h=o*(this.thigh+this.shin),u=c.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new D(c.x+Math.sin(r)*f,Math.max(a,c.y-h),c.z+Math.cos(r)*f)}palm(t,e,n,i,r,o,a=.04){const l=new de().setFromEuler(this.e1.set(e,0,n)),c=this.arms[i].side,h=t.clone().add(new D(c*(.5+io/2),-.08,0).applyQuaternion(l)),u=2*Math.max(.12,this.armLen/2-.05)*o,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new D(h.x+Math.sin(r)*d,a,h.z+Math.cos(r)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(xn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new D(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,r,o,a=0){return{head:t.clone().add(new D(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:r,hands:o,hips:a}}kneelDown(){var x,g;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(i),a=.14*e,l=r.y+.03*e,c=.12*t,h=Math.sqrt(2*we*(l-(r.y-a))),u=c+h/we+Math.sqrt(2*(l-o.y)/we),f=u+.12*t,d=[],m=[];for(let p=0;;p=Math.min(f,p+1/40)){if(p<=c){const M=ie(p/c);d.push(this.fromPivot(new D(0,r.y-a*M,0),.08*M,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(p<u){const M=p-c,E=M/(u-c),v=ie(E),y=new D(0,r.y-a+h*M-.5*we*M*M,o.z*v),w=[0,1].map(S=>n.ankles[S].clone().lerp(i.ankles[S],v)),L=Ht(0,i.feet[0],v),_=E>.5?[((x=i.hands[0])==null?void 0:x.clone())??null,((g=i.hands[1])==null?void 0:g.clone())??null]:[null,null];d.push(this.fromPivot(y,Ht(.08,i.lean,v),0,w,[L,L],_,v))}else d.push(i);if(m.push(p/f),p>=f)break}return{keys:d,at:m,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:c/f,pushDone:!1}}flopDown(){var E,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),r=this.pivotOf(n),o=(y,w)=>new de().setFromEuler(this.e1.set(y,0,w)),a=o(e.lean,e.roll),l=o(n.lean,n.roll),c=[0,1].map(y=>e.ankles[y].clone().sub(this.hipOf(e.head,a,y,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(y=>n.ankles[y].clone().sub(this.hipOf(n.head,l,y,1)).applyQuaternion(l.clone().invert())),u=e.lean+.14,f=Math.max(i.y,r.y)+.2,d=.14*t,m=Math.sqrt(2*we*(f-i.y)),x=d+m/we+Math.sqrt(2*(f-r.y)/we),g=x+.2*t,p=[],M=[];for(let y=0;;y=Math.min(g,y+1/40)){if(y<=d){const w=ie(y/d);p.push(this.fromPivot(i.clone(),Ht(e.lean,u,w),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((E=e.hands[0])==null?void 0:E.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(y<x){const w=y-d,L=w/(x-d),_=ie(L),S=new D(Ht(i.x,r.x,_),i.y+m*w-.5*we*w*w,Ht(i.z,r.z,_)),C=Ht(u,n.lean,_),A=Ht(0,n.roll,_),U=o(C,A),F=S.clone().add(new D(0,.5,0).applyQuaternion(U)),N=[0,1].map(X=>{const tt=Ht(c[X].length(),h[X].length(),_),H=c[X].clone().normalize().lerp(h[X].clone().normalize(),_).normalize().multiplyScalar(tt).applyQuaternion(U),K=this.hipOf(F,U,X,1).add(H);return K.y=Math.max(K.y,this.footH+.02),K}),G=[0,1].map(X=>Ht(e.feet[X],n.feet[X],_)),Z=[0,1].map(X=>{const tt=e.hands[X],H=n.hands[X];return tt&&H?tt.clone().lerp(H,_):H&&L>.5?H.clone():null});p.push(this.fromPivot(S,C,A,N,G,Z,1))}else p.push(n);if(M.push(y/g),y>=g)break}return{keys:p,at:M,dur:g,t:0,to:"lie",thud:x/g,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/g,pushDone:!1}}springUp(t){var w,L;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),r=this.pose("stand"),o=this.pivotOf(i),a=this.pivotOf(r),l=.12*n,c=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*we*(c-o.y)),f=h+u/we+Math.sqrt(2*(c-(a.y-l))/we),d=f+.16*e,m=t==="kneel"?i.lean+.15:i.lean,x=t==="lie"?i.roll-.35:i.roll,g=new de().setFromEuler(this.e1.set(i.lean,0,i.roll)),p=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,g,_,i.hips))),M=new D(a.x,a.y-l,a.z),E=[0,1].map(_=>r.ankles[_].clone().sub(M.clone().add(new D(this.feet[_].side*this.hipX,0,0)))),v=[],y=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const S=ie(_/h);v.push(this.fromPivot(o.clone(),Ht(i.lean,m,S),Ht(i.roll,x,S),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((w=i.hands[0])==null?void 0:w.clone())??null,((L=i.hands[1])==null?void 0:L.clone())??null],i.hips))}else if(_<f){const S=_-h,C=S/(f-h),A=new D(Ht(o.x,a.x,ie(C)),o.y+u*S-.5*we*S*S,Ht(o.z,a.z,ie(C))),U=Ht(m,0,ie(C)),F=Ht(x,0,ie(Math.min(1,C*1.4))),N=new de().setFromEuler(this.e1.set(U,0,F)),G=A.clone().add(new D(0,.5,0).applyQuaternion(N)),Z=ie(Math.min(1,C*1.3)),X=Ht(i.hips,0,Z),tt=[0,1].map(ft=>{const k=Ht(p[ft].length(),E[ft].length(),C)-.08*n*Math.sin(Math.PI*C),W=p[ft].clone().normalize().lerp(E[ft].clone().normalize(),Z).normalize(),O=this.hipOf(G,N,ft,X).addScaledVector(W,k);return O.y=Math.max(O.y,this.footH+.02),O}),H=[0,1].map(ft=>Ht(i.feet[ft],0,ie(C))),K=G.y-.08<this.armLen*.92,et=[0,1].map(ft=>K&&i.hands[ft]&&i.hands[ft].y<.15?i.hands[ft].clone():null);v.push(this.fromPivot(A,U,F,tt,H,et,X))}else{const S=ie((_-f)/(d-f));v.push(this.fromPivot(new D(a.x,Ht(a.y-l,a.y,S),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(y.push(_/d),_>=d)break}return{keys:v,at:y,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=On(e.t/e.dur),l=e.linear?a:ie(a);let c=0;for(;c<e.at.length-2&&l>e.at[c+1];)c++;const h=On((l-e.at[c])/(e.at[c+1]-e.at[c]));if(n=this.mix(e.keys[c],e.keys[c+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=Js(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(fn*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*r:0,i&&this.rest==="lie"&&(n.head.y+=.012*r),i&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,r=e.dur-n-i;e.w=e.t<n?ie(e.t/n):e.t>e.dur-i?ie((e.dur-e.t)/i):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(fn*(e.kind==="chin"?4.5:5.5)*o)*ie(o/.15)*ie((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(g,p)=>g&&p?g.clone().lerp(p,n):n<.5?g?g.clone():null:p?p.clone():null,r=Ht(t.lean,e.lean,n),o=Ht(t.roll,e.roll,n),a=(g,p)=>new de().setFromEuler(this.e1.set(g,0,p)),l=a(t.lean,t.roll),c=a(e.lean,e.roll),h=a(r,o),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(r,o));const f=Ht(t.hips,e.hips,n),d=[0,1].map(g=>{const p=t.ankles[g].clone().sub(this.hipOf(t.head,l,g,t.hips)),M=e.ankles[g].clone().sub(this.hipOf(e.head,c,g,e.hips)),E=Ht(p.length(),M.length(),n),v=Ht(t.ankles[g].y,e.ankles[g].y,n),y=this.hipOf(u,h,g,f),w=Ht(p.x,M.x,n),L=Ht(p.z,M.z,n),_=Math.hypot(w,L),S=y.y-v,C=Math.sqrt(Math.max(0,E*E-S*S)),A=new D(y.x,Math.max(v,y.y-E),y.z);return _>1e-4&&(A.x+=w/_*C,A.z+=L/_*C),A.y=Math.max(A.y,this.footH+.02),A}),m=g=>{const p=t.hands[g],M=e.hands[g];if(!p||!M)return i(p,M);const E=Math.atan2(p.x-t.head.x,p.z-t.head.z),v=Math.atan2(M.x-e.head.x,M.z-e.head.z),y=E+xn(v-E)*n,w=Ht(Math.hypot(p.x-t.head.x,p.z-t.head.z),Math.hypot(M.x-e.head.x,M.z-e.head.z),n);return new D(u.x+Math.sin(y)*w,Ht(p.y,M.y,n),u.z+Math.cos(y)*w)},x=[m(0),m(1)];return x.forEach((g,p)=>{g&&(this.outsideBody(g,u,h,this.arms[p].side),g.y=Math.max(g.y,.03))}),{head:u,lean:r,roll:o,ankles:d,feet:[Ht(t.feet[0],e.feet[0],n),Ht(t.feet[1],e.feet[1],n)],hands:x,hips:f}}outsideBody(t,e,n,i){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,l=-1,c=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=o-u*r.getComponent(h)-(h===0&&u===i?.25:0);f<a&&(a=f,l=h,c=u)}l<0||(r.setComponent(l,c*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const r=this.feet[n].side;return t.clone().add(new D(r*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(a,l)=>l.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,l)=>{a.mode="free",r(t.ankles[l],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new de().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new de().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[l])),a.toe=t.feet[l]<-.9?-1.1*ie((-t.feet[l]-.9)/.5):t.feet[l]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,l)=>{const c=t.hands[l];c&&(a.reach=r(c,new D),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive)}}envAt(t,e,n=.25,i=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/no));a<=Math.min(r.length-1,Math.ceil((e+i)/no));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var c;const n=e.path,i=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=Re(Math.min(i,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=Re(xn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=Js(this.phase),l=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,l+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(c=e.onArrive)==null||c.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,i,new D);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*fn*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=ie(n/.15)*(1-ie((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+xy((n-.12)/.74)*fn,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*On(n/.45)):0,r=n>.4?Math.sin(Math.PI*On((n-.4)/.6)):0;this.qRest=.08*i-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=xn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=ie(e.t/i);this.vy=0,this.pos.y=Ht(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=Re(xn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=ie(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=Ht(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),l=Math.sqrt(2*a/we),c=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/we);this.vy=we*l,e.air=l+c,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=we*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=Re(xn(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*On(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*Ht(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=Re(this.vy*.022,-.14,.18);const l=this.world.groundAt(e.to.x,e.to.z),c=this.standY(l);if(e.t>=e.air||this.vy<0&&this.pos.y<=c&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,c,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,l,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const r=new D((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new D(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=fn*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=Re(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const l=o?Ht(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,c=fn*2.4,h=.5;if(this.leanV+=(c*c*(l+this.leanRest-this.lean)-2*h*c*this.leanV-(o?3.5*Re(a,-12,12):0))*t,this.lean=Re(this.lean+this.leanV*t,-.6,.7),this.roll=Re(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const d=this.running,m=Ht(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const x of this.arms)x.tp=(x.side===-1?1:-1)*m*Math.cos(fn*(this.phase-.04)),x.to=x.side===this.wallSide?.03:Ht(.07,.2,d),x.te=Ht(.24,1.55,d)+Math.max(0,-x.tp)*.35}else if(!this.act)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=fn*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const r=i.s,o=ie(r),a=Ht(i.from.x,i.to.x,o),l=Ht(i.from.z,i.to.z,o),c=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=Ht(i.from.y,i.to.y,ie((r-.15)/.75))+c*Math.pow(Math.sin(Math.PI*r),1.3),u=i.to.x-i.from.x,f=i.to.z-i.from.z,d=Math.hypot(u,f)||1,m=u/d,x=f/d,g=Math.min(je+.08+.35*(1-r),(1-o)*d+je+.04);let p=-1/0;for(let L=0;L<=4;L++){const _=si-.04+(g-si+.04)*(L/4);p=Math.max(p,this.world.groundAt(a+m*_,l+x*_))}const M=p+.07*(1-ie((r-.82)/.18)),E=Math.max(h,r>.97?i.to.y:M);i.sy=E>i.sy?E:i.sy+(E-i.sy)*Math.min(1,t*30),r<.02&&(i.sy=Math.max(E,i.from.y)),i.ankle.set(a,i.sy+this.footH,l),i.yaw=i.fromYaw+xn(i.toYaw-i.fromYaw)*o,this.kneeClear(i,t);const v=Math.sin(i.yaw),y=Math.cos(i.yaw),w=i.ankle.y;for(let L=0;L<8;L++){const _=i.ankle.y-this.footH*.5,S=this.kneeAt(i,this.t2),C=S.x+v*.07,A=S.z+y*.07,U=(this.world.solidAt(S.x,S.y,S.z)||this.world.solidAt(C,S.y-.07,A))&&this.world.groundAt(C,A)<S.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*je,_,i.ankle.z+y*je)&&!U||i.ankle.y-w>.45)break;i.ankle.y+=.06}i.toe=Ht(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*r),ie(r/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let r=0;r<2;r++){const o=this.kneeAt(i,this.t3),a=(o.x-i.ankle.x)*Math.sin(i.yaw)+(o.z-i.ankle.z)*Math.cos(i.yaw),l=Math.atan2(a,o.y-i.ankle.y),c=Vf-.05-l;if(i.pitch<=c)break;i.pitch=c,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const r=i.side*(this.hipX+i.rel.x),o=i.rel.z;i.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+i.rel.y,this.pos.z-n*r+e*o),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let u=0;u<8;u++){const f=i.ankle.x+a*c*je,d=i.ankle.y-this.footH+h*je,m=i.ankle.z+l*c*je;if(!this.world.solidAt(f,d,m)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=l*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const r=i.pitch,o=Math.cos(r),a=Math.sin(r),l=Math.sin(i.yaw),c=Math.cos(i.yaw),h=i.ankle.x+l*o*sn,u=i.ankle.z+c*o*sn,f=i.ankle.y-this.footH*o+sn*a,d=(this.world.groundAt(h+l*(je-sn),u+c*(je-sn))+.005-f)/(je-sn);d>-1&&(i.toe=Math.min(i.toe,r-Math.asin(Re(d,-1,1))))}}}}const Ba=5,My=4935768,Tu=.3,yy=14;function Sy(){const s=new Xn(.11,sn-si-.01).rotateX(-Math.PI/2).translate(0,0,(sn+si)/2-.005),t=new Xn(.11,je-sn-.02).rotateX(-Math.PI/2).translate(0,0,(je+sn)/2+.01),e=gy([s,t]);return s.dispose(),t.dispose(),e}const Au=72,wy=2.6;let Qs=null;function by(){if(Qs)return Qs;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),Qs=new Go(s),Qs.colorSpace=De,Qs}class Ey{constructor(){I(this,"group",new Ie);I(this,"puffs",[]);I(this,"dust");I(this,"zeds",[]);I(this,"prints",[]);I(this,"printGeo",Sy());I(this,"own",[]);I(this,"m",new Zt);I(this,"q",new de);I(this,"s",new D);const t=new Sn(1,1,1),e=new Eo({color:15987958});this.dust=new fo(t,e,Au),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new oi({color:My,transparent:!0,opacity:Tu,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new Me(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>Ba+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=Au&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new bn(Math.random(),Math.random(),Math.random())})}z(t){const e=new ef({map:by(),transparent:!0,depthWrite:!1,opacity:0}),n=new wp(e);this.group.add(n),this.zeds.push({s:n,age:0,life:wy,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const r=i.age/i.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(o,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,r)=>{i.age+=t;const o=n-1-r,a=o<Ba?1:Math.max(0,1-(o-Ba+1)/3),l=1-Math.min(1,Math.max(0,(i.age-yy)/3)),c=Tu*a*l;return i.mat.opacity+=(c-i.mat.opacity)*Math.min(1,t*5),c<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const r=i.age/i.life;return r>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*r+.06*Math.sin(r*7)),i.y0+.75*r,i.z0),i.s.scale.setScalar(.14+.2*r),i.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const Ei=.12,js={thick:.07,long:.15,wide:.135},Ru=2.6,Ty=2.9,tr=2.5,so={back:-.55,fwd:2.1,inward:-.22,out:1},xs={up:-Vf,down:.95,side:.3,twist:.35},Ha={flex:1.55,side:.45,turn:1.6},Ee=(s,t,e)=>s<t?t:s>e?e:s,Ga=(s,t,e)=>s+(t-s)*e;function ro(s,t,e,n){const i=new Sn(Ei,s-t,Ei).translate(0,(s+t)/2,0);return n.push(i),new Me(i,e)}function Va(s,t,e){return e.push(s),new Me(s,t)}const dn=new D,nn=new D,Bn=new D,zo=new Zt;function Oo(s,t,e){return nn.copy(s).negate().normalize(),Bn.copy(t).addScaledVector(nn,-t.dot(nn)),Bn.lengthSq()<1e-8&&Bn.set(1,0,0).cross(nn),Bn.normalize(),dn.crossVectors(nn,Bn),zo.makeBasis(dn,nn,Bn),e.setFromRotationMatrix(zo)}const ws=new D,zn=new D,Ai=new D,go=new D,Hl=new D,Cu=new de;function Fi(s,t,e,n,i,r,o,a=Math.PI){ws.subVectors(t,s);const l=ws.length(),c=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=Ee(l,Math.max(Math.abs(e-n)+.001,c),e+n-1e-4);l<1e-6?zn.set(0,-1,0):zn.copy(ws).divideScalar(l);const u=Ee((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);Ai.copy(i).addScaledVector(zn,-i.dot(zn)),Ai.lengthSq()<1e-8&&Ai.set(0,0,1).addScaledVector(zn,-zn.z),Ai.normalize(),go.copy(s).addScaledVector(zn,e*u).addScaledVector(Ai,e*f),Hl.copy(s).addScaledVector(zn,h),Oo(ws.subVectors(go,s),i,r),Oo(Hl.sub(go),i,Cu),o.copy(r).invert().multiply(Cu)}const wi=new bn,Ay=new D;function Lu(s,t,e,n,i="XYZ"){wi.setFromQuaternion(s,i);const r=Ee(wi.x,t[0],t[1]),o=Ee(wi.y,e[0],e[1]),a=Ee(wi.z,n[0],n[1]);(r!==wi.x||o!==wi.y||a!==wi.z)&&s.setFromEuler(wi.set(r,o,a,i))}class Ry{constructor(t,e,n){I(this,"root",new Ie);I(this,"fx",new Ey);I(this,"motion");I(this,"placed",!1);I(this,"face");I(this,"world");I(this,"pelvis",new Ie);I(this,"turn",new Ie);I(this,"squash",new Ie);I(this,"legs",[]);I(this,"arms",[]);I(this,"solid",[]);I(this,"own",[]);I(this,"look",null);I(this,"targets",[null,null]);I(this,"talkCh",null);I(this,"clock",0);I(this,"lastBreath",0);I(this,"showing",null);I(this,"yawLook",0);I(this,"pitchLook",0);I(this,"a2");I(this,"v1",new D);I(this,"v2",new D);I(this,"v3",new D);I(this,"v4",new D);I(this,"v5",new D);I(this,"qa",new de);I(this,"qb",new de);I(this,"qc",new de);I(this,"qd",new de);I(this,"qm",new Zt);I(this,"headCap",0);I(this,"scratchSeen",null);I(this,"sc1",new D);I(this,"sc2",new D);I(this,"sc3",new D);I(this,"qf",new de);I(this,"pts",[0,1,2,3,4].map(()=>new D));I(this,"kg",[0,1,2,3,4,5].map(()=>new D));this.world=n,this.motion=new vy(e,n),this.motion.onPuff=(l,c,h)=>this.fx.puff(l,c,h),this.motion.onPrint=(l,c)=>this.fx.print(l,c),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new my(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,r,o]=vc(t),a=new zt().setRGB(i/255,r/255,o/255,De);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new Eo({color:t});this.own.push(n);const i=Ei/2;if(!e.legless)for(const o of[-1,1]){const a=new Ie,l=new Ie,c=new Ie,h=new Ie;a.position.set(o*e.hipX,0,0);const u=ro(0,-e.thigh,n,this.own);a.add(u),l.position.y=-e.thigh;const f=ro(i,-e.shin-i,n,this.own);l.add(f),c.position.y=-e.shin;const d=Va(new Sn(Ei,e.footH,sn-si).translate(0,-e.footH/2,(sn+si)/2),n,this.own);h.position.set(0,-e.footH,sn);const m=Va(new Sn(Ei,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(m),c.add(d,h),l.add(c),a.add(l),this.pelvis.add(a),this.legs.push({hip:a,knee:l,ankle:c,toes:h,side:o}),this.solid.push(u,f,d,m)}const r=this.a2;for(const o of[-1,1]){const a=new Ie,l=new Ie,c=new Ie,h=ro(i,-r,n,this.own);a.add(h),l.position.y=-r;const u=ro(i,-r-i,n,this.own);l.add(u),c.position.y=-r;const f=Va(new Sn(js.thick,js.long,js.wide).translate(0,-.15/2-.02,0),n,this.own);c.add(f),l.add(c),a.add(l),this.turn.add(a);const d=()=>new de;this.arms.push({shoulder:a,elbow:l,wrist:c,side:o,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new D,pushE:0,pushETo:new D,pushN:new D,flatW:0,palm:new D,palmDir:new D(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new D){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new D){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n){this.motion.travel(t,e,n)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new D).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,0,e.roll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(Ee(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(Ee(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=Ga(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=Ga(this.face.roll,Ee(this.face.roll,-.03,.03),this.headCap),a=1-Ee(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const l=1+e.squash,c=1+e.stretch,h=l/Math.sqrt(c),u=c/Math.sqrt(l),f=1/(Math.sqrt(l)*Math.sqrt(c));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+Ei/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-r&&i.y<1+e-r&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const r=t.parent,o=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let l=-1,c=0;const h=e(),u=this.v3;for(let x=0;x<h.length;x++){const g=this.squash.worldToLocal(this.v4.copy(h[x]));if(!(Math.abs(g.x)<.5+n&&g.y>.02-o&&g.y<1+n-o&&Math.abs(g.z)<.5+n))continue;const p=[[.5+n-g.x,1,0,0],[g.x+.5+n,-1,0,0],[.5+n-g.z,0,0,1],[g.z+.5+n,0,0,-1],[1+n-o-g.y,0,1,0]];i&&p.push([g.y+o,0,-1,0]);let M=null;for(const E of p)!i&&this.v2.set(E[1],E[2],E[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!M||E[0]<M[0])&&(M=E);M&&M[0]>c&&(c=M[0],l=x,u.set(M[1],M[2],M[3]))}if(l<0)return;u.transformDirection(this.squash.matrixWorld);const f=r.worldToLocal(this.v1.copy(h[l])),d=this.v2.copy(u).transformDirection(this.qm.copy(r.matrixWorld).invert()),m=Ai.subVectors(f,t.position).cross(d);if(m.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(m.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),l=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),c=Math.atan2(l.x,l.z),h=i.side>0?Ee(c,-.2,.7):Ee(c,-.7,.2);if(h!==c){const w=Math.hypot(l.x,l.z);l.x=Math.sin(h)*w,l.z=Math.cos(h)*w}let u=o.q;if(o.mode!=="free"&&Math.abs(c-h)>xs.twist*.85){const w=c-h-Math.sign(c-h)*xs.twist*.85;u=this.qf.setFromAxisAngle(Bn.set(0,1,0),-w).multiply(o.q)}const f=o.kneeOut,d=this.v2.copy(l).multiplyScalar(1-f*1.3).add(dn.set(i.side*(.12+1.2*f),Wf(-a.y,t.L),0)),m=Ay.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const w=Ee(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,Ga(.6,1,w)).addScaledVector(m,1-.85*w);const L=Ee(-a.z/.25,0,1);d.z+=1.6*L,d.addScaledVector(m,-.9*L)}const x=o.mode==="free"?Ty:Ru;Fi(i.hip.position,a,t.thigh,t.shin,d,i.hip.quaternion,i.knee.quaternion,x),o.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,m.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,m.add(dn.set(i.side*.3,0,0)),x);const g=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),p=Math.atan2(g.z,-g.y),M=Math.asin(Ee(g.x*i.side,-1,1)),E=Ee(p,so.back,so.fwd),v=Ee(M,o.mode==="free"?-.45:so.inward,so.out);if(E!==p||v!==M){const w=nn.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(E),Math.cos(v)*Math.sin(E));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(g,w))}o.mode==="free"&&this.kneeOverGround(i,a,x),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const y=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(y.invert()).multiply(u),Lu(i.ankle.quaternion,[xs.up,xs.down],[-.35,xs.twist],[-.3,xs.side]),i.toes.rotation.set(Ee(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,r=Ru){const o=this.motion,a=t.hip.position,l=this.v5.copy(e),c=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(c.y<=n)return;const h=this.v3.subVectors(l,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(c,a))),d=this.v1.subVectors(c,f),m=d.length();if(m<1e-4)return;d.divideScalar(m);const x=this.v4.crossVectors(h,d).normalize();x.dot(i)<0&&x.negate();let g=Math.PI/2;for(let M=1;M<=18;M++){const E=M/18*(Math.PI/2);if(f.y+m*(Math.cos(E)*d.y+Math.sin(E)*x.y)<=n){g=E;break}}const p=d.multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g));Fi(a,l,o.thigh,o.shin,p,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const i=this.motion,[r,o,a,l,c,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+Ei/2)return;const u=t.hip.position,f=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(u);c.subVectors(e,u);const d=c.length();if(d<1e-4)return;c.divideScalar(d),o.copy(u).addScaledVector(c,c.dot(a.subVectors(f,u))),a.subVectors(f,o);const m=a.length();if(m<1e-4)return;a.divideScalar(m),l.crossVectors(c,a).normalize(),l.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&l.negate();let x=-1;for(let p=1;p<=24&&x<0;p++){const M=p/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,m*Math.cos(M)).addScaledVector(l,m*Math.sin(M))),h.y>=this.world.groundAt(h.x,h.z)+Ei/2&&(x=M)}if(x<0)return;const g=h.copy(a).multiplyScalar(Math.cos(x)).addScaledVector(l,Math.sin(x));Fi(u,e,i.thigh,i.shin,g,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,r=n+i,o=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[l,c]=this.targets;if(l&&(a[o(l)]=l),c){const d=o(c);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(c)).x)<.8?a[1-d]=c:Math.floor(this.clock/2.6)%2===1&&(a[d]=c):a[d]=c}this.showing=l&&a.includes(l)?a.includes(c)&&Math.floor(this.clock/2.6)%2===1?c:l:c;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,m)=>{const x=e.arms[m],g=this.v2.set(d.side*.5,-.35,-1);if(f){g.set(0,1,0).applyQuaternion(f);const S=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();g.dot(S)>.3&&g.set(0,1,0),g.multiplyScalar(.45).add(nn.set(0,0,-1))}d.fk[0].setFromEuler(new bn(x.pitch,0,d.side*Math.max(.04,x.out))),d.fk[1].setFromAxisAngle(dn.set(1,0,0),-Ee(x.elbow,0,tr));let p=0,M=!1;const E=x.reach??(h?a[m]:null);if(E){const S=d.shoulder.position;if(x.reach&&x.flat){M=!0;const C=d.shoulder.getWorldPosition(this.v3),A=d.elbow.getWorldPosition(go);d.palm.copy(E);const U=ws.set(E.x-C.x,0,E.z-C.z);U.lengthSq()>1e-6&&U.normalize();const F=zn.set(E.x-A.x,0,E.z-A.z).addScaledVector(U,.25);F.lengthSq()<1e-4&&F.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),F.normalize(),d.palmDir.lerp(F,d.flatW<.05?1:Math.min(1,t*10)).normalize();const N=this.v1.copy(E).add(nn.set(0,js.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),G=this.turn.worldToLocal(N);Fi(S,G,n,i,g,d.ik[0],d.ik[1],tr)}else{const C=this.turn.worldToLocal(this.v1.copy(E));if(x.reach||E===c){if(E===c){const A=d.shoulder.getWorldPosition(Hl),U=ws.set(Ee(A.x,c.x-.5,c.x+.5),Ee(A.y,c.y-.5,c.y+.5),Ee(A.z,c.z-.5,c.z+.5));U.addScaledVector(zn.subVectors(A,U).normalize(),.06),this.turn.worldToLocal(C.copy(U))}C.distanceTo(S)<=r*.98||x.reach?Fi(S,C,n,i,g,d.ik[0],d.ik[1],tr):this.pointAlong(d,C)}else this.pointAlong(d,C)}p=x.reach?x.reachW:1}const v=e.scratch;if(v&&v.side===m&&v.w>0&&x.reach){const S=d.shoulder.position,C=e.headDrop,A=this.turn.worldToLocal(this.sc1.copy(x.reach).add(nn.set(0,js.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),U=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-C-.15,.62):this.sc2.set(d.side*.4,1.14-C,-.04+.05*v.wiggle);let F=A;if(v.kind==="chin")F=A.lerp(U,v.w);else{const N=this.sc3.set(d.side*.9,1.25-C,.1),G=v.w,Z=1-G;F=A.multiplyScalar(Z*Z).addScaledVector(N,2*G*Z).addScaledVector(U,G*G)}g.lerp(v.kind==="chin"?dn.set(d.side,-.3,.1):dn.set(d.side,.35,-.15),v.w),Fi(S,F,n,i,g,d.ik[0],d.ik[1],tr),M=v.w<.05,p=1}d.aimW+=((E?p:0)-d.aimW)*Math.min(1,t*(x.reach?30:7)),d.flatW+=((M?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const y=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=y?1:0,y&&d.pushETo.copy(y),d.pushE>0){const S=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);Oo(S,g,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const w=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),L=M?null:this.pushOut(w,.13,d.shoulder.getWorldPosition(this.v3));if(L?(d.pushTo.copy(L),d.pushN.subVectors(L,w).normalize(),d.push=1):d.push=0,d.push>0){const S=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));S.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const C=this.turn.worldToLocal(this.v1.copy(d.pushTo));Fi(d.shoulder.position,C,n,i,S,this.qa,this.qb,tr),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(dn.set(1,0,0),Ee(-.1-.05*x.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const S=d.elbow.getWorldQuaternion(this.qb);dn.set(0,this.v3.set(1,0,0).applyQuaternion(S).y<0?-1:1,0),nn.copy(d.palmDir).negate(),Bn.crossVectors(dn,nn).normalize(),nn.crossVectors(Bn,dn).normalize(),zo.makeBasis(dn,nn,Bn);const C=this.qc.setFromRotationMatrix(zo),A=S.invert().multiply(C);Lu(A,[-.45,Ha.side],[-1.6,Ha.turn],[-1.55,Ha.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,A,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(l=>this.inHead(l,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(i,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=Ai.crossVectors(r,o).x*t.side>=0?1:-1;for(let l=0;l<12;l++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const c=t.elbow.getWorldPosition(this.v3);if(c.y<this.world.groundAt(c.x,c.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=Ai.subVectors(e,t.shoulder.position);Oo(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(dn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,l=1/0;for(const[c,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+c,r+h,o+u))continue;const f=c?(i+c*.5-t.x)*c:h?r+.5-t.y:(o+u*.5-t.z)*u,d=n?c*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,m=f-Math.max(0,d)*.8;m<l&&(l=m,a=new D(t.x+c*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,l)=>a.ankle.getWorldPosition(new D).distanceTo(t.feet[l].ankle));let n=0,i=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new D);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),i+=o.filter(l=>this.inHead(l,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),i+=o.filter(l=>this.inHead(l,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const Cy="Welcome to Robyn Miller's Exhibit of Time Machines! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",Ly="Welcome to Robyn Miller's Exhibit of Time Machines! I'm your host. Getting around is easy—drag the floor to move, and drag the walls to look around.",Py="Click anywhere to look around.",Iy="Click anywhere to carry on.",Dy="That's it! In you go. I'll wait out here.",Uy=["Welcome back to the present!","You're back! What year was it in there?","Back already? Time flies. Especially in there.","Oh good, you're back. I kept the present warm for you."],Ny="You are currently one of {x} people in the gallery.",Fy="Things are quiet. You are the only person in the gallery.",zy=["You may think that I'm not an appropriate host for an art gallery? Hm. Well maybe you're not an appropriate guest for our gallery!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Take your time. The paintings aren't going anywhere. Neither am I.","Robyn painted every one of these. I just stand near them looking important.","Click on a painting to see it up close. I recommend it. I've seen them all up close. Very close.","Some people walk through a gallery in five minutes. Some take five hours. I've timed them.","Do you see the faces? I see faces everywhere. Even in the floor.","Between you and me, that one over there looked at me funny this morning.","Shh. The paintings are thinking.","I polished this floor myself. With my feet.","Every gallery needs a host. This one got me. Lucky gallery.","Art is long and I am short.","Stand back a little. Some paintings like their space.","I'm not allowed to touch the paintings. I'm barely allowed to touch the walls.","That one's my favourite. They're all my favourite.","Is it just me, or did that painting blink?","The lights in here are very flattering. To the paintings. And to me.","I've been told I have an excellent eye for art. I have two, actually.","Feel free to linger. Lingering is encouraged here.","If anyone asks, I'm security.","You can tell a lot from a face. Mine says 'party'.","There's no gift shop. I asked.","If you get lost, follow the walls. That's what I do.","Look closer. Then look from farther away. Then closer again. That's the trick.","Quiet in here, isn't it? I like it that way. Mostly.","Paintings get lonely if nobody looks at them. I made that up. But still.","Mind the doorways. They're bigger than they look. Or I'm smaller.","All the walls in here are white. I campaigned for polka dots. I lost.","Hm. You have good taste. I can tell by the way you stand.","This is the part where I say something profound. ... I'll get back to you.","I've counted the paintings twice. I got two different answers.","If you need me, I'll be right behind you. Always. Right behind you.","Sometimes I sit and stare at one for an hour. It doesn't mind.","Do you think they can see us? I think they can see us.","Not to brag, but I've been in every room of this gallery. Several times. Today.","Art is best enjoyed slowly. Like soup.","I'm told I add a certain something to the place. Nobody has said what.","Go ahead and stare. That's what they're for.","What do you think that one is about? I have a theory, but it's mostly about sandwiches.","I used to be just a block. Now I'm a block with legs. That's progress.","Every time someone visits, I feel taller. I'm not, though.","Close your eyes. Now open them. See? Still art.","Please don't lick the paintings. I'm not saying you would. I'm just saying.","I like this room. I like the other rooms too. I'm very agreeable.","That's a nice one. I'd hang it in my house, if I had a house. Or walls.","Some galleries have audio guides. You have me. You're welcome.","Ah, I was hoping you'd come this way.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","Do you paint? You have a painter's way of squinting.","If these walls could talk... well, they'd probably just say 'white'.","Look at that brushwork! I think. I'm not entirely sure what brushwork is.","Did you see the little card next to each one? I read them all. Twice.","No hurry. I'm on gallery time.","The floor reflects the paintings. So technically you're seeing everything twice. You're welcome again.","I can't decide if that one is smiling or frowning. Maybe both. Like me before breakfast.","If you like one, stand in front of it a little longer. It'll like you back.","Some visitors talk to the paintings. I don't judge. I talk to them too.","I'm a professional. I've hosted at least one visitor before. Possibly two.","The best spot in the house is wherever you happen to be standing.","Squint a little. Go on. See how the colours move? That's free. No extra charge.","I tried painting once. It painted me back.","Don't mind me. I'm just here for the ambience. I am the ambience.",'Did you know the word "gallery" means a long room? I looked it up. I had time.',"If you hear snoring later, that wasn't me.","I'd tell you which one is the most famous, but they'd all get jealous.","This one was hung at exactly the right height. I checked with my hat.","You walk very gracefully. For a visitor.","Every painting here is somebody. Even the ones that look like nobody.","I like to think the paintings look forward to visitors. I know I do."],Oy=["Yes? Can I help you?","Hey! The machines are inside, not out here.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a vacuum tube.","Me? I'm not part of the exhibition. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was thinking about 1906.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],ky=["Hm? Oh! I wasn't asleep. I was resting my eyes.","I'm up! I'm up!","Was I snoring? I don't snore. That was the ventilation.","Huh? Who? Oh. You. Welcome back."],By=["Lovely, isn't it?","Up close they get even stranger. In the best way.","Good choice.","That's one of my favourites. Don't tell the others.","I always see something new in that one."],Hy=["Oh! Someone else just came in. There are {x} of you now.","Another visitor! That makes {x} of you."],Gy=["Somebody just left. Now there are {x} of you."],Vy=["Somebody just left. It's just you and me now."];function zi(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const ve=.2,Wy=Math.sqrt(9.81/(22*ve)),Xy={...sy,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},oo=(s,t,e,n=new D)=>n.set(s/ve,t/ve-.5,e/ve),Pu=(s,t=new D)=>t.set(s.x*ve,(s.y+.5)*ve,s.z*ve);class qy{constructor(t,e,n,i=!1){I(this,"scene",new nc);I(this,"cam",new rn);I(this,"rig");I(this,"count",null);I(this,"onEnter",()=>{});I(this,"onLeave",()=>{});I(this,"el");I(this,"textEl");I(this,"bubble",null);I(this,"onKey",()=>{});I(this,"hidden",!1);I(this,"wasLocked",!1);I(this,"queue",[]);I(this,"used",new Set);I(this,"grid",null);I(this,"stage","waiting");I(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});I(this,"inside",!1);I(this,"been",!1);I(this,"wasInside",!1);I(this,"wasOut",!0);I(this,"quiet",0);I(this,"resting","no");I(this,"soughtRest",!1);I(this,"idleIn",6);I(this,"remarkIn",45);I(this,"followIn",0);I(this,"glanceIn",2);I(this,"glanceAt",null);I(this,"dest",null);I(this,"last",{x:0,z:0,yaw:0,pitch:0});I(this,"countSaid",0);I(this,"lastCrowd",-999);I(this,"clock",0);I(this,"v1",new D);I(this,"v2",new D);this.gallery=t,this.player=e,this.main=n,this.touch=i;const r={groundAt:(a,l)=>this.wallAt(a*ve,l*ve)?this.gallery.arch.H/ve:-.5,solidAt:(a,l,c)=>{const h=(l+.5)*ve;return h<0?!0:h<this.gallery.arch.H&&this.wallAt(a*ve,c*ve)}};this.rig=new Ry(Xy,3,r),this.scene.add(this.rig.root,this.rig.fx.group),this.scene.add(new Bp(16777215,13815492,1.9));const o=new Vp(16777215,1.5);o.position.set(.4,1,.7),this.scene.add(o),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble",this.textEl=document.createElement("span"),this.el.append(this.textEl),this.textEl.addEventListener("click",a=>{var c;const l=(c=a.target.closest(".hk"))==null?void 0:c.dataset.k;l&&(a.preventDefault(),a.stopPropagation(),this.onKey(l),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*ve,z:this.rig.pos.z*ve}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/ve,t.z/ve,0),this.dest=null}gridFor(){if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,l=e.z0,c=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),u=new Uint8Array(c*h);for(let f=0;f<h;f++)for(let d=0;d<c;d++){const m=a+(d+.5)*n,x=l+(f+.5)*n,g=m>e.x0+i&&m<e.x1-i&&x>e.z0+i&&x<e.z1-i,p=x>e.z1+r+i,M=m>t.entrance.a+i&&m<t.entrance.b-i&&x>e.z1-i-.01&&x<e.z1+r+i+.01;!g&&!p&&!M||t.solids.some(E=>m>E.x0-i&&m<E.x1+i&&x>E.z0-i&&x<E.z1+i)||(u[f*c+d]=1)}return this.grid={arch:t,x0:a,z0:l,nx:c,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return i>=0&&r>=0&&i<n.nx&&r<n.nz&&n.free[r*n.nx+i]===1}clear(t,e,n,i){const r=Math.hypot(n-t,i-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(i-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,r=(v,y)=>[Math.floor((v-n.x0)/n.c),Math.floor((y-n.z0)/n.c)];let[o,a]=r(i.x,i.z);const[l,c]=r(t,e),h=(v,y)=>v>=0&&y>=0&&v<n.nx&&y<n.nz&&n.free[y*n.nx+v]===1;if(!h(l,c))return null;if(!h(o,a)){let v=null,y=1/0;for(let w=-4;w<=4;w++)for(let L=-4;L<=4;L++)h(o+L,a+w)&&L*L+w*w<y&&(y=L*L+w*w,v=[o+L,a+w]);if(!v)return null;[o,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),m=(v,y)=>{const w=Math.abs(v-l),L=Math.abs(y-c);return Math.max(w,L)+.414*Math.min(w,L)},x=[[m(o,a),a*n.nx+o]];f[a*n.nx+o]=0;const g=c*n.nx+l;for(;x.length;){let v=0;for(let _=1;_<x.length;_++)x[_][0]<x[v][0]&&(v=_);const[,y]=x.splice(v,1)[0];if(y===g)break;const w=y%n.nx,L=Math.floor(y/n.nx);for(const[_,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const C=w+_,A=L+S;if(!h(C,A)||_&&S&&(!h(w+_,L)||!h(w,L+S)))continue;const U=A*n.nx+C,F=f[y]+(_&&S?1.414:1);F<f[U]&&(f[U]=F,d[U]=y,x.push([F+m(C,A),U]))}}if(!isFinite(f[g]))return null;const p=[];for(let v=g;v!==-1;v=d[v])p.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});p[p.length-1]={x:t,z:e};const M=[i];let E=0;for(;E<p.length-1;){let v=p.length-1;const y=M[M.length-1];for(;v>E+1&&!this.clear(y.x,y.z,p[v].x,p[v].z);)v--;M.push(p[v]),E=v}return M}goTo(t,e){const n=this.route(t,e);if(!n||n.length<2)return!1;let i=0;for(let o=1;o<n.length;o++)i+=Math.hypot(n[o].x-n[o-1].x,n[o].z-n[o-1].z);if(i<.25)return!1;const r=i>3.2?"bound":i>1.6?"run":"walk";return this.rig.travel(n.slice(1).map(o=>({x:o.x/ve,z:o.z/ve})),r,()=>{this.dest=null}),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Vi(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(){const t=this.player.pos,e=this.at;if(this.goodSpot(e.x,e.z)&&!this.dest)return;const n=-Math.sin(this.player.yaw),i=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),o=-Math.sin(this.player.yaw),a=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let l=null,c=1/0;if(a.forEach(([u,f],d)=>{const m=t.x+n*u+r*f,x=t.z+i*u+o*f;if(!this.freeAt(m,x)||!this.seen(m,x))return;const g=Math.hypot(m-e.x,x-e.z)+d*.15;g<c&&(c=g,l={x:m,z:x})}),!l)return;const h=l;this.dest&&Math.hypot(this.dest.x-h.x,this.dest.z-h.z)<.8||this.goTo(h.x,h.z)}say(t,e){this.inside||(this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e))}start(t,e){if(this.inside){this.queue=[];return}if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?Fy:Ny),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),i=n.map(r=>Wa(r)?"o":r).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){this.bubble=null,this.el.classList.remove("on");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const r=Wa(i)?1:i.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(Wa(i)){const l=document.createElement("button");l.className="hk",l.dataset.k=i,l.tabIndex=-1,l.title=$y[i],l.textContent=Yy[i],this.textEl.append(l)}else{const l=i.slice(o-n,a-n),c=this.textEl.lastChild;c&&c.nodeType===Node.TEXT_NODE?c.appendData(l):this.textEl.append(l)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(zi(Oy,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(zi(By,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(zi(Hy,this.used),"excited"):this.say(t<=1?Vy[0]:zi(Gy,this.used),"curious"))}hit(t){const e=new To(oo(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/ve);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=Pu(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(zi(ky,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){this.clock+=t;const e=this.player,n=this.rig,i=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=i.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.been=!0,this.queue=[],this.bubble&&this.endBubble());const a=e.pos.z>o.z1+.3;a&&!this.wasOut&&this.been&&(this.onLeave(),this.queue=[],this.wake(),this.say(zi(Uy,this.used),"happy"),this.rig.perform("wave")),this.wasInside=this.inside,this.wasOut=a,!this.been&&!this.inside&&this.invite();const l=e.locked;this.wasLocked&&!l&&!this.hidden&&!this.bubble&&!this.inside&&this.say(Iy,"pleased"),this.wasLocked=l,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const c=this.bubble;if(c){c.shown=Math.min(c.text.length,c.shown+t*34);const f=Math.ceil(c.shown);f>c.drawn&&this.grow(c,f),c.until===1/0&&c.shown>=c.text.length&&(c.until=this.clock+Math.max(3.2,c.text.length*.06)),this.clock>c.until&&this.endBubble()}const h=!!c&&c.shown<c.text.length;n.talk(h?c.text[Math.max(0,Math.ceil(c.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=oo(this.main.position.x,this.main.position.y,this.main.position.z,new D);if(this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(zi(zy,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),this.stage==="company"||this.stage==="waiting"){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const f=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),d=n.roomAt(n.pos.x,n.pos.z,f);if(!(d!=null&&d.lie)&&!this.soughtRest){this.soughtRest=!0;const m=this.restSpot(f);if(m&&this.goTo(m.x,m.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",f)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(this.touch?Ly:Cy,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;(this.touch?t.moved:n)&&!e.lockedAt&&(e.lockedAt=this.clock),this.touch&&!e.lockedAt&&(e.lookSaid=e.nudgedClick=!0),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(Py,"pleased"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(Dy,"excited"),this.rig.perform("wave");return}}after(t){this.rig.update(t*Wy),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*i,l=e.z+Math.sin(o)*i;if(!(!this.freeAt(a,l)||!this.seen(a,l))&&(n=this.rig.roomAt(a/ve,l/ve,t))!=null&&n.lie)return{x:a,z:l}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,i=oo(o.centre[0],o.centre[1],o.centre[2]))}return i??t.clone()}place(){const t=this.main;if(oo(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/ve)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/ve,this.cam.far=t.far/ve,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Pu(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*i;const a=e.z>1;a&&(r=n/2,o=i-120),r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(i-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("free",a||!this.visible(30))}}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const Wa=s=>s==="W"||s==="LEFT"||s==="RIGHT",Yy={W:"W",LEFT:"←",RIGHT:"→"},$y={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right"};var Du;class Ky{constructor(t){I(this,"count",null);I(this,"onCount",()=>{});I(this,"id",(((Du=crypto.randomUUID)==null?void 0:Du.call(crypto))??String(Math.random()).slice(2)).slice(0,36));I(this,"inside",!1);I(this,"timer",0);I(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const jn=new URLSearchParams(location.search),Iu=matchMedia("(hover: none) and (pointer: coarse)").matches&&!jn.has("desk")||jn.has("touch");Zy().catch(s=>{console.error(s),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on"),fetch(`data/machines.json?${Date.now()}`).then(t=>t.json()).then(t=>{const e=document.getElementById("mobile-list");for(const n of t){if(n.off||n.outOfOrder)continue;const i=document.createElement("li"),r=document.createElement("a");r.href=n.url,r.target="_top",r.textContent=n.name.replace(/\s*[|\n]\s*/g," "),i.append(r),e.append(i)}}).catch(()=>{})});async function Zy(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([J_(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"','40px "Caveat Brush"'].map(Q=>document.fonts.load(Q))),new Promise(Q=>setTimeout(Q,2500))])]),e=new V_({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,Iu?1.5:2);e.setPixelRatio(i),e.setClearColor(16777215,1),e.setSize(innerWidth,innerHeight),e.toneMapping=Wl,e.toneMappingExposure=1;const r=e.domElement;document.getElementById("stage").appendChild(r);const o=e.capabilities.getMaxAnisotropy(),a=new nc,l=new rn(62,innerWidth/innerHeight,.05,900);l.layers.enable(1),l.layers.enable(kl);const c=new LM(1,1),h=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.fov=l.aspect<1?We.radToDeg(2*Math.atan(Math.tan(We.degToRad(31))*Math.min(1.45,.82/l.aspect))):62,l.updateProjectionMatrix();const Q=e.getDrawingBufferSize(new Ot);c.setSize(Math.round(Q.x/2),Math.round(Q.y/2))};h(),addEventListener("resize",h);const u=new Ss(t,a,e,c,s,o);await u.loadSmall();const f=new Hv(r),d=t.layout,m=d.entrance;f.pos.set(m.x+2.4,ki,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const x=jn.get("at");if(x&&!x.startsWith("machine:")){const[Q,lt,mt,It]=x.split(",").map(Number);f.pos.set(Q,ki,lt),f.yaw=We.degToRad(mt||0),f.pitch=We.degToRad(It||0)}jn.get("hud");const g=document.getElementById("dot");g.style.display="none";const p=new FM(!1),M=new To;M.far=14,M.layers.enableAll();let E=[];const v=()=>{E=[],u.interior.group.traverse(Q=>{Q.isMesh&&!Q.isInstancedMesh&&E.push(Q)}),u.outside.group.traverse(Q=>{Q.isMesh&&Q.userData.outside&&E.push(Q)})},y=()=>{M.setFromCamera(new Ot(0,0),l);const Q=M.intersectObjects(E,!1)[0];if(!Q)return{kind:"none"};const lt=Q.object.userData;return lt.machine?{kind:"machine",machine:lt.machine,point:Q.point,dist:Q.distance}:lt.label?{kind:"label",work:lt.work,point:Q.point,dist:Q.distance}:lt.work?{kind:"work",work:lt.work,point:Q.point,dist:Q.distance}:lt.face?{kind:"face",face:lt.face,point:Q.point,dist:Q.distance}:{kind:"none",point:Q.point,dist:Q.distance}},w=new Il,L=new Set;let _=1;const S=Q=>{let lt=99;for(const mt of u.interior.pictures)mt.work.id===Q&&(lt=Math.min(lt,Math.hypot(mt.mesh.position.x-f.pos.x,mt.mesh.position.z-f.pos.z)));return lt};function C(){_=0;for(const[Q,lt]of u.sharp)if(!(S(Q)<=14)){u.sharp.delete(Q);for(const mt of u.interior.pictures)mt.work.id===Q&&(mt.mat.uniforms.uMap.value=u.texture(Q));lt.dispose()}for(const Q of u.interior.pictures){const lt=Q.work.id;u.sharp.has(lt)||S(lt)>7.5||(_++,!(L.has(lt)||L.size>=4)&&(L.add(lt),w.loadAsync(Ss.url(lt,"m")).then(mt=>{L.delete(lt),u.sharp.set(lt,u.prepTex(mt));for(const It of u.interior.pictures)It.work.id===lt&&(It.mat.uniforms.uMap.value=mt)}).catch(()=>L.delete(lt))))}}const A=new IM;let U=!0;const F=Q=>{const lt=u.cat.get(Q);lt&&(U=f.locked,f.frozen=!0,A.show(lt,t.images[Q],Ss.url(Q,u.sharp.has(Q)?"m":"s"),Ss.url(Q,"l")),p.opened())};A.onClose=()=>{f.frozen=!1,et.looked()};const N=new VM;addEventListener("resize",()=>N.resize()),N.onBack=Q=>{Q&&!document.body.classList.contains("ed-page")&&r.requestPointerLock()};const G=Q=>{const lt=Q.front,mt=.82;return{x:Q.spot.x+lt[0]*mt,z:Q.spot.z+lt[2]*mt,yaw:Math.atan2(lt[0],lt[2]),pitch:Math.atan2(Q.screen.c.y-ki,mt-.04)}},Z=Q=>{const lt=u.machines.find(It=>It.machine.id===Q);if(!lt)return;const mt=G(lt);f.pos.set(mt.x,ki,mt.z),f.yaw=mt.yaw,f.pitch=mt.pitch,f.collide()};let X=[];const tt=Q=>F(Q.id);let H=0;const K={gallery:u,player:f,camera:l,renderer:e,canvas:r,viewer:A,scene:a,monitor:N,aim:y,openWork:F,dot:g};u.onRebuilt=()=>{f.solids=u.arch.solids;const Q=t.layout.outline;f.world={x0:Q.x0-30,x1:Q.x1+30,z0:Q.z0-30,z1:Q.z1+30},f.collide(),v(),X=u.interior.pictures.map(DM),H=0},u.rebuild();const et=new qy(u,f,l,Iu),ft=new Ky((jn.get("count"),void 0));ft.onCount=Q=>et.setCount(Q),jn.get("count")&&(et.count=+jn.get("count"));const k=(()=>{const Q=document.createElement("div");Q.id="leaving",document.body.append(Q);let lt=0;const mt=()=>{if(PM({rmiLeave:!0}))return;const It=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(It)?(history.back(),setTimeout(()=>{location.href=It},1500)):Q.classList.remove("on")};return{start(){clearTimeout(lt),Q.classList.add("on"),lt=window.setTimeout(mt,1900)},cancel(){clearTimeout(lt),Q.classList.remove("on")}}})();et.onEnter=()=>{ft.enter(),k.cancel()},et.onKey=Q=>{f.tap(Q==="W"?"KeyW":Q==="LEFT"?"ArrowLeft":"ArrowRight",Q==="W"?.3:.4),f.locked||r.requestPointerLock()},et.onLeave=()=>{ft.exit(),k.start()};const W=new To;W.far=12;let O=null,B=-1e9;const R=Q=>{if(Q.button!==0&&Q.button!==2||performance.now()-B<900||N.travelling)return;if(A.open){A.hide();return}if(N.ready&&!document.body.classList.contains("ed-page")){p.clear(),N.enter(l,f);return}if(!f.locked){if(p.pic){tt(p.pic);return}r.requestPointerLock();return}if(W.setFromCamera(new Ot(0,0),l),et.hit(W)){et.poke();return}if(p.pic){tt(p.pic);return}const lt=y();(lt.kind==="work"||lt.kind==="label")&&F(lt.work)};r.addEventListener("mousedown",R),addEventListener("pointerdown",Q=>{Q.pointerType==="touch"&&(B=performance.now())},!0);const P=Q=>{M.setFromCamera(Q,l);const lt=M.intersectObjects(E,!1)[0];if(!lt)return{kind:"none"};const mt=lt.object.userData,It={point:lt.point,dist:lt.distance};return mt.machine?{kind:"machine",machine:mt.machine,...It}:mt.face?{kind:"wall",...It}:lt.point.y<.02?{kind:"floor",...It}:{kind:"other",...It}};new KM(r,l,f,P,Q=>{var lt;if(!N.travelling){if(Q.kind==="machine"&&Q.machine){if(N.ready&&((lt=N.machine)==null?void 0:lt.placed.machine.id)===Q.machine){p.clear(),N.enter(l,f);return}const mt=u.machines.find(It=>It.machine.id===Q.machine);if(mt){const It=G(mt);f.goal={x:It.x,z:It.z,yaw:It.yaw,pitch:It.pitch}}}else if(Q.kind==="floor"&&Q.point){const mt=Q.point.x-f.pos.x,It=Q.point.z-f.pos.z,ye=Math.hypot(mt,It),Te=Math.max(0,ye-.5)/Math.max(ye,1e-6);f.goal={x:f.pos.x+mt*Te,z:f.pos.z+It*Te}}}},()=>!A.open&&!N.travelling&&!document.body.classList.contains("ed-page")),document.addEventListener("selectstart",Q=>{var mt;const lt=Q.target instanceof Element?Q.target:(mt=Q.target)==null?void 0:mt.parentElement;lt!=null&&lt.closest("input, textarea, select, [contenteditable]")||Q.preventDefault()}),addEventListener("mouseup",Q=>O==null?void 0:O.release(Q)),A.relock=()=>U&&!document.body.classList.contains("ed-page"),A.el.addEventListener("mousedown",Q=>{A.busy||Q.target.closest(".view-tools")||(Q.preventDefault(),A.hide(),!A.open&&!f.locked&&A.relock()&&r.requestPointerLock())}),document.addEventListener("contextmenu",Q=>{Q.target.closest("input, textarea, select")||Q.preventDefault()}),addEventListener("keydown",Q=>{var mt,It;if((It=(mt=Q.target).closest)!=null&&It.call(mt,"input, textarea, select, button"))return;const lt=Q.code==="Enter"||Q.code==="Space";if(A.open){(lt||Q.code==="Escape")&&!A.busy&&(Q.preventDefault(),A.hide());return}if(!N.travelling){if(lt&&N.ready&&!document.body.classList.contains("ed-page")){Q.preventDefault(),N.enter(l,f);return}lt&&p.pic&&!document.body.classList.contains("ed-page")&&(Q.preventDefault(),tt(p.pic))}}),document.addEventListener("pointerlockchange",()=>{!f.locked&&A.open&&A.hide()});const V=jn.get("open");V!==null&&F(V.padStart(2,"0")),x!=null&&x.startsWith("machine:")&&Z(x.slice(8));let j=performance.now(),st=0,dt=0;const xt=jn.get("near")==="1";function Et(){const Q=performance.now(),lt=Math.min((Q-j)/1e3,.05);j=Q,lt>.024?dt+=lt:dt=Math.max(0,dt-lt*.5),dt>1.5&&i>1&&(i=Math.max(1,i-.25),dt=0,h()),f.update(lt),f.apply(l),l.updateMatrixWorld(),N.update(lt,l,f,u.interior.machines),Lf.value+=lt;const mt=document.body.classList.contains("ed-page");et.hide(mt||A.open||N.travelling),et.update(lt),f.obstacles=[et.obstacle,...u.machines.map(It=>({x:It.spot.x,z:It.spot.z,r:Wv}))],(H-=lt)<=0&&(H=.3,C()),mt||A.open||N.travelling?p.clear():p.update(lt,l,X,u.arch.solids,!0),N.covering||(c.render(e,a,l),e.render(a,l),mt||et.render(e),mt||p.render(e,a,l)),st++,!window.__gReady&&st>3&&(!xt||_===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(Et)}requestAnimationFrame(Et);try{document.hasFocus()||window.focus()}catch{}window.__g={...K,data:t,editor:O,host:et,presence:ft,focus:p,standAt:Z}}
