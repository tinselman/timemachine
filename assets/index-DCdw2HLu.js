var cd=Object.defineProperty;var hd=(s,t,e)=>t in s?cd(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var I=(s,t,e)=>hd(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="186",ud=0,Xc=1,fd=2,Mo=1,dd=2,cr=3,Vi=0,un=1,Yn=2,ui=0,fr=1,el=2,qc=3,Yc=4,pd=5,bs=100,md=101,gd=102,xd=103,vd=104,_d=200,Md=201,yd=202,Sd=203,Xu=204,qu=205,wd=206,bd=207,Ed=208,Td=209,Ad=210,Rd=211,Cd=212,Ld=213,Pd=214,nl=0,il=1,sl=2,Mr=3,rl=4,ol=5,al=6,ll=7,jl=0,Id=1,Dd=2,Zn=0,Yu=1,$u=2,Ku=3,Zu=4,Ju=5,Qu=6,tc=7,ju=300,Wi=301,Is=302,oa=303,aa=304,Qo=306,cl=1e3,hi=1001,hl=1002,Ve=1003,Ud=1004,Nr=1005,We=1006,la=1007,Ii=1008,hn=1009,tf=1010,ef=1011,yr=1012,ec=1013,Jn=1014,Nn=1015,An=1016,nc=1017,ic=1018,Sr=1020,nf=35902,sf=35899,rf=1021,of=1022,xn=1023,pi=1026,Gi=1027,jo=1028,sc=1029,Xi=1030,rc=1031,oc=1033,yo=33776,So=33777,wo=33778,bo=33779,ul=35840,fl=35841,dl=35842,pl=35843,ml=36196,gl=37492,xl=37496,vl=37488,_l=37489,Lo=37490,Ml=37491,yl=37808,Sl=37809,wl=37810,bl=37811,El=37812,Tl=37813,Al=37814,Rl=37815,Cl=37816,Ll=37817,Pl=37818,Il=37819,Dl=37820,Ul=37821,Nl=36492,Fl=36494,zl=36495,Ol=36283,kl=36284,Po=36285,Bl=36286,Nd=3200,Hl=0,Fd=1,Li="",Ue="srgb",Io="srgb-linear",Do="linear",fe="srgb",ca=7680,zd=519,Od=512,kd=513,Bd=514,ac=515,Hd=516,Gd=517,lc=518,Vd=519,af=35044,$c="300 es",$n=2e3,wr=2001;function Wd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xd(){const s=br("canvas");return s.style.display="block",s}const Kc={};function Uo(...s){const t="THREE."+s.shift();console.log(t,...s)}function lf(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Vt(...s){s=lf(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function le(...s){s=lf(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ls(...s){const t=s.join(" ");t in Kc||(Kc[t]=!0,Vt(...s))}function qd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Yd={[nl]:il,[sl]:al,[rl]:ll,[Mr]:ol,[il]:nl,[al]:sl,[ll]:rl,[ol]:Mr};class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const dr=Math.PI/180,Er=180/Math.PI;function fi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[s&255]+Ke[s>>8&255]+Ke[s>>16&255]+Ke[s>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ne(s,t,e){return Math.max(t,Math.min(e,s))}function cc(s,t){return(s%t+t)%t}function $d(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kd(s,t,e){return s!==t?(e-s)/(t-s):0}function pr(s,t,e){return(1-e)*s+e*t}function Zd(s,t,e,n){return pr(s,t,1-Math.exp(-e*n))}function Jd(s,t=1){return t-Math.abs(cc(s,t*2)-t)}function Qd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function jd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function tp(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ep(s,t){return s+Math.random()*(t-s)}function np(s){return s*(.5-Math.random())}function ip(s){s!==void 0&&(Zc=s);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function sp(s){return s*dr}function rp(s){return s*Er}function op(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ap(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cp(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),f=r((t-n)/2),d=o((t-n)/2),u=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*f,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*f,a*l);break;case"ZXZ":s.set(c*f,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*u,a*l);break;case"YXY":s.set(c*u,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*u,a*h,a*l);break;default:Vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function de(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ge={DEG2RAD:dr,RAD2DEG:Er,generateUUID:fi,clamp:ne,euclideanModulo:cc,mapLinear:$d,inverseLerp:Kd,lerp:pr,damp:Zd,pingpong:Jd,smoothstep:Qd,smootherstep:jd,randInt:tp,randFloat:ep,randFloatSpread:np,seededRandom:ip,degToRad:sp,radToDeg:rp,isPowerOfTwo:op,ceilPowerOfTwo:ap,floorPowerOfTwo:lp,setQuaternionFromProperEuler:cp,normalize:de,denormalize:Un},Dc=class Dc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dc.prototype.isVector2=!0;let Nt=Dc;class ge{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3],d=r[o+0],u=r[o+1],m=r[o+2],x=r[o+3];if(f!==x||c!==d||l!==u||h!==m){let g=c*d+l*u+h*m+f*x;g<0&&(d=-d,u=-u,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,c=c*p+d*a,l=l*p+u*a,h=h*p+m*a,f=f*p+x*a}else{c=c*p+d*a,l=l*p+u*a,h=h*p+m*a,f=f*p+x*a;const M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[o],d=r[o+1],u=r[o+2],m=r[o+3];return t[e]=a*m+h*f+c*u-l*d,t[e+1]=c*m+h*d+l*f-a*u,t[e+2]=l*m+h*u+a*d-c*f,t[e+3]=h*m-a*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(r/2),d=c(n/2),u=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*u*m,this._y=l*u*f-d*h*m,this._z=l*h*m+d*u*f,this._w=l*h*f-d*u*m;break;case"YXZ":this._x=d*h*f+l*u*m,this._y=l*u*f-d*h*m,this._z=l*h*m-d*u*f,this._w=l*h*f+d*u*m;break;case"ZXY":this._x=d*h*f-l*u*m,this._y=l*u*f+d*h*m,this._z=l*h*m+d*u*f,this._w=l*h*f-d*u*m;break;case"ZYX":this._x=d*h*f-l*u*m,this._y=l*u*f+d*h*m,this._z=l*h*m-d*u*f,this._w=l*h*f+d*u*m;break;case"YZX":this._x=d*h*f+l*u*m,this._y=l*u*f+d*h*m,this._z=l*h*m-d*u*f,this._w=l*h*f-d*u*m;break;case"XZY":this._x=d*h*f-l*u*m,this._y=l*u*f-d*h*m,this._z=l*h*m+d*u*f,this._w=l*h*f+d*u*m;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+a+f;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(h-c)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+l)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(r-l)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(c+h)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(o-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uc=class Uc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=i+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uc.prototype.isVector3=!0;let U=Uc;const ha=new U,Jc=new ge,Nc=class Nc{constructor(t,e,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],E=i[4],v=i[7],S=i[2],b=i[5],A=i[8];return r[0]=o*x+a*M+c*S,r[3]=o*g+a*E+c*b,r[6]=o*p+a*v+c*A,r[1]=l*x+h*M+f*S,r[4]=l*g+h*E+f*b,r[7]=l*p+h*v+f*A,r[2]=d*x+u*M+m*S,r[5]=d*g+u*E+m*b,r[8]=d*p+u*v+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,d=a*c-h*r,u=l*r-o*c,m=e*f+n*d+i*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=f*x,t[1]=(i*l-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*c)*x,t[5]=(i*r-a*e)*x,t[6]=u*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ua.makeScale(t,e)),this}rotate(t){return Ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return Ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Nc.prototype.isMatrix3=!0;let Yt=Nc;const ua=new Yt,Qc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hp(){const s={enabled:!0,workingColorSpace:Io,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?Do:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Io]:{primaries:t,whitePoint:n,transfer:Do,toXYZ:Qc,fromXYZ:jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Qc,fromXYZ:jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),s}const oe=hp();function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class up{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{es===void 0&&(es=br("canvas")),es.width=t.width,es.height=t.height;const i=es.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=es}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fp=0;class hc{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fa(i[o].image)):r.push(fa(i[o]))}else r=fa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function fa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?up.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let dp=0;const da=new U;class Ye extends Yi{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=hi,i=hi,r=We,o=Ii,a=xn,c=hn,l=Ye.DEFAULT_ANISOTROPY,h=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=fi(),this.name="",this.source=new hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(da).x}get height(){return this.source.getSize(da).y}get depth(){return this.source.getSize(da).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ju)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cl:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cl:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=ju;Ye.DEFAULT_ANISOTROPY=1;const Fc=class Fc{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,v=(u+1)/2,S=(p+1)/2,b=(h+d)/4,A=(f+x)/4,_=(m+g)/4;return E>v&&E>S?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=b/n,r=A/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=_/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=_/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-x)/M,this.z=(d-h)/M,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fc.prototype.isVector4=!0;let xe=Fc;class pp extends Yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Ye(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new hc(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends pp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class cf extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Jo=class Jo{constructor(t,e,n,i,r,o,a,c,l,h,f,d,u,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,f,d,u,m,x,g)}set(t,e,n,i,r,o,a,c,l,h,f,d,u,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/ns.setFromMatrixColumn(t,0).length(),r=1/ns.setFromMatrixColumn(t,1).length(),o=1/ns.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*h,u=o*f,m=a*h,x=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+m*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=m+u*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,u=c*f,m=l*h,x=l*f;e[0]=d+x*a,e[4]=m*a-u,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=u*a-m,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,u=c*f,m=l*h,x=l*f;e[0]=d-x*a,e[4]=-o*f,e[8]=m+u*a,e[1]=u+m*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,u=o*f,m=a*h,x=a*f;e[0]=c*h,e[4]=m*l-u,e[8]=d*l+x,e[1]=c*f,e[5]=x*l+d,e[9]=u*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,u=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=x-d*f,e[8]=m*f+u,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=u*f+m,e[10]=d-x*f}else if(t.order==="XZY"){const d=o*c,u=o*l,m=a*c,x=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+x,e[5]=o*h,e[9]=u*f-m,e[2]=m*f-u,e[6]=a*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,xp)}lookAt(t,e,n){const i=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),vi.crossVectors(n,fn),vi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),vi.crossVectors(n,fn)),vi.normalize(),Fr.crossVectors(fn,vi),i[0]=vi.x,i[4]=Fr.x,i[8]=fn.x,i[1]=vi.y,i[5]=Fr.y,i[9]=fn.y,i[2]=vi.z,i[6]=Fr.z,i[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],E=n[7],v=n[11],S=n[15],b=i[0],A=i[4],_=i[8],y=i[12],C=i[1],L=i[5],D=i[9],z=i[13],G=i[2],F=i[6],Q=i[10],Y=i[14],tt=i[3],V=i[7],Z=i[11],ot=i[15];return r[0]=o*b+a*C+c*G+l*tt,r[4]=o*A+a*L+c*F+l*V,r[8]=o*_+a*D+c*Q+l*Z,r[12]=o*y+a*z+c*Y+l*ot,r[1]=h*b+f*C+d*G+u*tt,r[5]=h*A+f*L+d*F+u*V,r[9]=h*_+f*D+d*Q+u*Z,r[13]=h*y+f*z+d*Y+u*ot,r[2]=m*b+x*C+g*G+p*tt,r[6]=m*A+x*L+g*F+p*V,r[10]=m*_+x*D+g*Q+p*Z,r[14]=m*y+x*z+g*Y+p*ot,r[3]=M*b+E*C+v*G+S*tt,r[7]=M*A+E*L+v*F+S*V,r[11]=M*_+E*D+v*Q+S*Z,r[15]=M*y+E*z+v*Y+S*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],m=t[3],x=t[7],g=t[11],p=t[15],M=c*u-l*d,E=a*u-l*f,v=a*d-c*f,S=o*u-l*h,b=o*d-c*h,A=o*f-a*h;return e*(x*M-g*E+p*v)-n*(m*M-g*S+p*b)+i*(m*E-x*S+p*A)-r*(m*v-x*b+g*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+i*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=e*a-n*o,E=e*c-i*o,v=e*l-r*o,S=n*c-i*a,b=n*l-r*a,A=i*l-r*c,_=h*x-f*m,y=h*g-d*m,C=h*p-u*m,L=f*g-d*x,D=f*p-u*x,z=d*p-u*g,G=M*z-E*D+v*L+S*C-b*y+A*_;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return t[0]=(a*z-c*D+l*L)*F,t[1]=(i*D-n*z-r*L)*F,t[2]=(x*A-g*b+p*S)*F,t[3]=(d*b-f*A-u*S)*F,t[4]=(c*C-o*z-l*y)*F,t[5]=(e*z-i*C+r*y)*F,t[6]=(g*v-m*A-p*E)*F,t[7]=(h*A-d*v+u*E)*F,t[8]=(o*D-a*C+l*_)*F,t[9]=(n*C-e*D-r*_)*F,t[10]=(m*b-x*v+p*M)*F,t[11]=(f*v-h*b-u*M)*F,t[12]=(a*y-o*L-c*_)*F,t[13]=(e*L-n*y+i*_)*F,t[14]=(x*E-m*S-g*M)*F,t[15]=(h*S-f*E+d*M)*F,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,d=r*l,u=r*h,m=r*f,x=o*h,g=o*f,p=a*f,M=c*l,E=c*h,v=c*f,S=n.x,b=n.y,A=n.z;return i[0]=(1-(x+p))*S,i[1]=(u+v)*S,i[2]=(m-E)*S,i[3]=0,i[4]=(u-v)*b,i[5]=(1-(d+p))*b,i[6]=(g+M)*b,i[7]=0,i[8]=(m+E)*A,i[9]=(g-M)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ns.set(i[0],i[1],i[2]).length();const a=ns.set(i[4],i[5],i[6]).length(),c=ns.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Cn.copy(this);const l=1/o,h=1/a,f=1/c;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=f,Cn.elements[9]*=f,Cn.elements[10]*=f,e.setFromRotationMatrix(Cn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,o,a=$n,c=!1){const l=this.elements,h=2*r/(e-t),f=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===$n)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===wr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=$n,c=!1){const l=this.elements,h=2/(e-t),f=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i);let m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===$n)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===wr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Jo.prototype.isMatrix4=!0;let Kt=Jo;const ns=new U,Cn=new Kt,gp=new U(0,0,0),xp=new U(1,1,1),vi=new U,Fr=new U,fn=new U,th=new Kt,eh=new ge;class Rn{constructor(t=0,e=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],f=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return th.makeRotationFromQuaternion(t),this.setFromRotationMatrix(th,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eh.setFromEuler(this),this.setFromQuaternion(eh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vp=0;const nh=new U,is=new ge,Qn=new Kt,zr=new U,Hs=new U,_p=new U,Mp=new ge,ih=new U(1,0,0),sh=new U(0,1,0),rh=new U(0,0,1),oh={type:"added"},yp={type:"removed"},ss={type:"childadded",child:null},pa={type:"childremoved",child:null};class Ne extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new U,e=new Rn,n=new ge,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Yt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,e){return is.setFromAxisAngle(t,e),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(ih,t)}rotateY(t){return this.rotateOnAxis(sh,t)}rotateZ(t){return this.rotateOnAxis(rh,t)}translateOnAxis(t,e){return nh.copy(t).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ih,t)}translateY(t){return this.translateOnAxis(sh,t)}translateZ(t){return this.translateOnAxis(rh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Hs,zr,this.up):Qn.lookAt(zr,Hs,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),is.setFromRotationMatrix(Qn),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(oh),ss.child=t,this.dispatchEvent(ss),ss.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(oh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,_p),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new U(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class De extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sp={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,m=.005;l.inputState.pinching&&d>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Or={h:0,s:0,l:0};function ga(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=cc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ga(o,r,t+1/3),this.g=ga(o,r,t),this.b=ga(o,r,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return oe.workingToColorSpace(Ze.copy(this),t),Math.round(ne(Ze.r*255,0,255))*65536+Math.round(ne(Ze.g*255,0,255))*256+Math.round(ne(Ze.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,i=Ze.g,r=Ze.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ue){oe.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,i=Ze.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Or);const n=pr(_i.h,Or.h,e),i=pr(_i.s,Or.s,e),r=pr(_i.l,Or.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Bt;Bt.NAMES=hf;class fc extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ln=new U,jn=new U,xa=new U,ti=new U,rs=new U,os=new U,ah=new U,va=new U,_a=new U,Ma=new U,ya=new xe,Sa=new xe,wa=new xe;class wn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ln.subVectors(i,e),jn.subVectors(n,e),xa.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(jn),c=Ln.dot(xa),l=jn.dot(jn),h=jn.dot(xa),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,u=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-u-m,m,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(o,ti.y),c.addScaledVector(a,ti.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ya.setScalar(0),Sa.setScalar(0),wa.setScalar(0),ya.fromBufferAttribute(t,e),Sa.fromBufferAttribute(t,n),wa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(Sa,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),jn.subVectors(t,e),Ln.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Ln.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;rs.subVectors(i,n),os.subVectors(r,n),va.subVectors(t,n);const c=rs.dot(va),l=os.dot(va);if(c<=0&&l<=0)return e.copy(n);_a.subVectors(t,i);const h=rs.dot(_a),f=os.dot(_a);if(h>=0&&f<=h)return e.copy(i);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(rs,o);Ma.subVectors(t,r);const u=rs.dot(Ma),m=os.dot(Ma);if(m>=0&&u<=m)return e.copy(r);const x=u*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(os,a);const g=h*m-u*f;if(g<=0&&f-h>=0&&u-m>=0)return ah.subVectors(r,i),a=(f-h)/(f-h+(u-m)),e.copy(i).addScaledVector(ah,a);const p=1/(g+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(rs,o).addScaledVector(os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $i{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Br.subVectors(this.max,Gs),as.subVectors(t.a,Gs),ls.subVectors(t.b,Gs),cs.subVectors(t.c,Gs),Mi.subVectors(ls,as),yi.subVectors(cs,ls),Ui.subVectors(as,cs);let e=[0,-Mi.z,Mi.y,0,-yi.z,yi.y,0,-Ui.z,Ui.y,Mi.z,0,-Mi.x,yi.z,0,-yi.x,Ui.z,0,-Ui.x,-Mi.y,Mi.x,0,-yi.y,yi.x,0,-Ui.y,Ui.x,0];return!ba(e,as,ls,cs,Br)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,as,ls,cs,Br))?!1:(Hr.crossVectors(Mi,yi),e=[Hr.x,Hr.y,Hr.z],ba(e,as,ls,cs,Br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ei=[new U,new U,new U,new U,new U,new U,new U,new U],Pn=new U,kr=new $i,as=new U,ls=new U,cs=new U,Mi=new U,yi=new U,Ui=new U,Gs=new U,Br=new U,Hr=new U,Ni=new U;function ba(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ni.fromArray(s,r);const a=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),c=t.dot(Ni),l=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const li=wp();function wp(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function bp(s){Math.abs(s)>65504&&Vt("DataUtils.toHalfFloat(): Value out of range."),s=ne(s,-65504,65504),li.floatView[0]=s;const t=li.uint32View[0],e=t>>23&511;return li.baseTable[e]+((t&8388607)>>li.shiftTable[e])}function Ep(s){const t=s>>10;return li.uint32View[0]=li.mantissaTable[li.offsetTable[t]+(s&1023)]+li.exponentTable[t],li.floatView[0]}class Tp{static toHalfFloat(t){return bp(t)}static fromHalfFloat(t){return Ep(t)}}const Ie=new U,Gr=new Nt;let Ap=0;class En extends Yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Un(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Un(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Un(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class uf extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ff extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Wt extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Rp=new $i,Vs=new U,Ea=new U;class Ki{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Rp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);const e=Vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Ea)),this.expandByPoint(Vs.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Cp=0;const Mn=new Kt,Ta=new Ne,hs=new U,dn=new $i,Ws=new $i,Oe=new U;class Te extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wd(t)?ff:uf)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(dn.min,Ws.min),dn.expandByPoint(Oe),Oe.addVectors(dn.max,Ws.max),dn.expandByPoint(Oe)):(dn.expandByPoint(Ws.min),dn.expandByPoint(Ws.max))}dn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Oe.fromBufferAttribute(a,l),c&&(hs.fromBufferAttribute(t,l),Oe.add(hs)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new U,c[_]=new U;const l=new U,h=new U,f=new U,d=new Nt,u=new Nt,m=new Nt,x=new U,g=new U;function p(_,y,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,C),d.fromBufferAttribute(r,_),u.fromBufferAttribute(r,y),m.fromBufferAttribute(r,C),h.sub(l),f.sub(l),u.sub(d),m.sub(d);const L=1/(u.x*m.y-m.x*u.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(L),g.copy(f).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(L),a[_].add(x),a[y].add(x),a[C].add(x),c[_].add(g),c[y].add(g),c[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,y=M.length;_<y;++_){const C=M[_],L=C.start,D=C.count;for(let z=L,G=L+D;z<G;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new U,v=new U,S=new U,b=new U;function A(_){S.fromBufferAttribute(i,_),b.copy(S);const y=a[_];E.copy(y),E.sub(S.multiplyScalar(S.dot(y))).normalize(),v.crossVectors(b,y);const L=v.dot(c[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,y=M.length;_<y;++_){const C=M[_],L=C.start,D=C.count;for(let z=L,G=L+D;z<G;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let d=0,u=t.count;d<u;d+=3){const m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h);let u=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[u++]}return new En(d,h,f)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const d=l[h],u=t(d,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=af,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const tn=new U;class No{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),i=de(i,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new No(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Aa=new U,Pp=new U,Ip=new Yt;class Wn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Aa.subVectors(n,e).cross(Pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ip.getNormalMatrix(t),i=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Dp=0;class Zi extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=fr,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xu,this.blendDst=qu,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class df extends Zi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let us;const Xs=new U,fs=new U,ds=new U,ps=new Nt,qs=new Nt,pf=new Kt,Vr=new U,Ys=new U,Wr=new U,lh=new Nt,Ra=new Nt,ch=new Nt;class Up extends Ne{constructor(t=new df){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lp(e,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new No(n,3,0,!1)),us.setAttribute("uv",new No(n,2,3,!1))}this.geometry=us,this.material=t,this.center=new Nt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fs.setFromMatrixScale(this.matrixWorld),pf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fs.multiplyScalar(-ds.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Xr(Vr.set(-.5,-.5,0),ds,o,fs,i,r),Xr(Ys.set(.5,-.5,0),ds,o,fs,i,r),Xr(Wr.set(.5,.5,0),ds,o,fs,i,r),lh.set(0,0),Ra.set(1,0),ch.set(1,1);let a=t.ray.intersectTriangle(Vr,Ys,Wr,!1,Xs);if(a===null&&(Xr(Ys.set(-.5,.5,0),ds,o,fs,i,r),Ra.set(0,1),a=t.ray.intersectTriangle(Vr,Wr,Ys,!1,Xs),a===null))return;const c=t.ray.origin.distanceTo(Xs);c<t.near||c>t.far||e.push({distance:c,point:Xs.clone(),uv:wn.getInterpolation(Xs,Vr,Ys,Wr,lh,Ra,ch,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Xr(s,t,e,n,i,r){ps.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(qs.x=r*ps.x-i*ps.y,qs.y=i*ps.x+r*ps.y):qs.copy(ps),s.copy(t),s.x+=qs.x,s.y+=qs.y,s.applyMatrix4(pf)}const ni=new U,Ca=new U,qr=new U,Yr=new U;class dc{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ca.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Yr.copy(this.origin).sub(Ca);const r=t.distanceTo(e)*.5,o=-this.direction.dot(qr),a=Yr.dot(this.direction),c=-Yr.dot(qr),l=Yr.lengthSq(),h=Math.abs(1-o*o);let f,d,u,m;if(h>0)if(f=o*c-a,d=o*a-c,m=r*h,f>=0)if(d>=-m)if(d<=m){const x=1/h;f*=x,d*=x,u=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;else d<=-m?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=m?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ca).addScaledVector(qr,d),u}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=t.x-o.x,d=t.y-o.y,u=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,E=n.z-o.z,v=Math.abs(c),S=Math.abs(l),b=Math.abs(h);let A,_,y,C,L,D,z,G,F,Q,Y,tt;if(v>=S&&v>=b?(y=c,D=f,F=m,tt=p,c>=0?(A=l,_=h,C=d,L=u,z=x,G=g,Q=M,Y=E):(A=h,_=l,C=u,L=d,z=g,G=x,Q=E,Y=M)):S>=b?(y=l,D=d,F=x,tt=M,l>=0?(A=h,_=c,C=u,L=f,z=g,G=m,Q=E,Y=p):(A=c,_=h,C=f,L=u,z=m,G=g,Q=p,Y=E)):(y=h,D=u,F=g,tt=E,h>=0?(A=c,_=l,C=f,L=d,z=m,G=x,Q=p,Y=M):(A=l,_=c,C=d,L=f,z=x,G=m,Q=M,Y=p)),y===0)return null;const V=A/y,Z=_/y,ot=1/y,pt=C-V*D,N=L-Z*D,X=z-V*F,k=G-Z*F,H=Q-V*tt,R=Y-Z*tt,P=H*k-R*X,W=pt*R-N*H,j=X*N-k*pt;if(i){if(P<0||W<0||j<0)return null}else if((P<0||W<0||j<0)&&(P>0||W>0||j>0))return null;const it=P+W+j;if(it===0)return null;const mt=ot*(P*D+W*F+j*tt);return(it>0?mt<0:mt>0)?null:this.at(mt/it,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kn extends Zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hh=new Kt,Fi=new dc,$r=new Ki,uh=new U,Kr=new U,Zr=new U,Jr=new U,La=new U,Qr=new U,fh=new U,jr=new U;class we extends Ne{constructor(t=new Te,e=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(La.fromBufferAttribute(f,t),o?Qr.addScaledVector(La,h):Qr.addScaledVector(La.sub(e),h))}e.add(Qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!($r.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere($r,uh)===null||Fi.origin.distanceToSquared(uh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],M=Math.max(g.start,u.start),E=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let v=M,S=E;v<S;v+=3){const b=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);i=to(this,p,t,n,l,h,f,b,A,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let g=m,p=x;g<p;g+=3){const M=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);i=to(this,o,t,n,l,h,f,M,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){const g=d[m],p=o[g.materialIndex],M=Math.max(g.start,u.start),E=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let v=M,S=E;v<S;v+=3){const b=v,A=v+1,_=v+2;i=to(this,p,t,n,l,h,f,b,A,_),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let g=m,p=x;g<p;g+=3){const M=g,E=g+1,v=g+2;i=to(this,o,t,n,l,h,f,M,E,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Np(s,t,e,n,i,r,o,a){let c;if(t.side===un?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Vi,a),c===null)return null;jr.copy(a),jr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(jr);return l<e.near||l>e.far?null:{distance:l,point:jr.clone(),object:s}}function to(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Kr),s.getVertexPosition(c,Zr),s.getVertexPosition(l,Jr);const h=Np(s,t,e,n,Kr,Zr,Jr,fh);if(h){const f=new U;wn.getBarycoord(fh,Kr,Zr,Jr,f),i&&(h.uv=wn.getInterpolatedAttribute(i,a,c,l,f,new Nt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,c,l,f,new Nt)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,c,l,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new U,materialIndex:0};wn.getNormal(Kr,Zr,Jr,d.normal),h.face=d,h.barycoord=f}return h}class Ds extends Ye{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ve,h=Ve,f,d){super(null,o,a,c,l,h,i,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dh extends En{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ms=new Kt,ph=new Kt,eo=[],mh=new $i,Fp=new Kt,$s=new we,Ks=new Ki;class Eo extends we{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),mh.copy(t.boundingBox).applyMatrix4(ms),this.boundingBox.union(mh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ms),Ks.copy(t.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(Ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(n),t.ray.intersectsSphere(Ks)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ms),ph.multiplyMatrices(n,ms),$s.matrixWorld=ph,$s.raycast(t,eo);for(let o=0,a=eo.length;o<a;o++){const c=eo[o];c.instanceId=r,c.object=this,e.push(c)}eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ds(new Float32Array(i*this.count),i,this.count,jo,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zi=new Ki,zp=new Nt(.5,.5),no=new U;class pc{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,r=new Wn,o=new Wn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],E=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-o,u-h,p-m,S-M).normalize(),i[1].setComponents(l+o,u+h,p+m,S+M).normalize(),i[2].setComponents(l+a,u+f,p+x,S+E).normalize(),i[3].setComponents(l-a,u-f,p-x,S-E).normalize(),n)i[4].setComponents(c,d,g,v).normalize(),i[5].setComponents(l-c,u-d,p-g,S-v).normalize();else if(i[4].setComponents(l-c,u-d,p-g,S-v).normalize(),e===$n)i[5].setComponents(l+c,u+d,p+g,S+v).normalize();else if(e===wr)i[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);const e=zp.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(no.x=i.normal.x>0?t.max.x:t.min.x,no.y=i.normal.y>0?t.max.y:t.min.y,no.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mf extends Zi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fo=new U,zo=new U,gh=new Kt,Zs=new dc,io=new Ki,Pa=new U,xh=new U;class Op extends Ne{constructor(t=new Te,e=new mf){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Fo.fromBufferAttribute(e,i-1),zo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fo.distanceTo(zo);t.setAttribute("lineDistance",new Wt(n,1))}else Vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=r,t.ray.intersectsSphere(io)===!1)return;gh.copy(i).invert(),Zs.copy(t.ray).applyMatrix4(gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=u,g=m-1;x<g;x+=l){const p=h.getX(x),M=h.getX(x+1),E=so(this,t,Zs,c,p,M,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(u),p=so(this,t,Zs,c,x,g,m-1);p&&e.push(p)}}else{const u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=u,g=m-1;x<g;x+=l){const p=so(this,t,Zs,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=so(this,t,Zs,c,m-1,u,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function so(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Fo.fromBufferAttribute(a,i),zo.fromBufferAttribute(a,r),e.distanceSqToSegment(Fo,zo,Pa,xh)>n)return;Pa.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Pa);if(!(l<t.near||l>t.far))return{distance:l,point:xh.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const vh=new U,_h=new U;class kp extends Op{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)vh.fromBufferAttribute(e,i),_h.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vh.distanceTo(_h);t.setAttribute("lineDistance",new Wt(n,1))}else Vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gf extends Ye{constructor(t=[],e=Wi,n,i,r,o,a,c,l,h){super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lr extends Ye{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tr extends Ye{constructor(t,e,n=Jn,i,r,o,a=Ve,c=Ve,l,h=pi,f=1){if(h!==pi&&h!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Bp extends Tr{constructor(t,e=Jn,n=Wi,i,r,o=Ve,a=Ve,c,l=pi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xf extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Tn extends Te{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let d=0,u=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(f,2));function m(x,g,p,M,E,v,S,b,A,_,y){const C=v/A,L=S/_,D=v/2,z=S/2,G=b/2,F=A+1,Q=_+1;let Y=0,tt=0;const V=new U;for(let Z=0;Z<Q;Z++){const ot=Z*L-z;for(let pt=0;pt<F;pt++){const N=pt*C-D;V[x]=N*M,V[g]=ot*E,V[p]=G,l.push(V.x,V.y,V.z),V[x]=0,V[g]=0,V[p]=b>0?1:-1,h.push(V.x,V.y,V.z),f.push(pt/A),f.push(1-Z/_),Y+=1}}for(let Z=0;Z<_;Z++)for(let ot=0;ot<A;ot++){const pt=d+ot+F*Z,N=d+ot+F*(Z+1),X=d+(ot+1)+F*(Z+1),k=d+(ot+1)+F*Z;c.push(pt,N,k),c.push(N,X,k),tt+=6}a.addGroup(u,tt,y),u+=tt,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class mr extends Te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new U,h=new Nt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const u=n+f/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fn extends Te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=t/a,d=e/c,u=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*d-o;for(let E=0;E<l;E++){const v=E*f-r;m.push(v,-M,0),x.push(0,0,1),g.push(E/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const E=M+l*p,v=M+l*(p+1),S=M+1+l*(p+1),b=M+1+l*p;u.push(E,v,b),u.push(v,S,b)}this.setIndex(u),this.setAttribute("position",new Wt(m,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.width,t.height,t.widthSegments,t.heightSegments)}}function Us(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Mh(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Mh(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function nn(s){const t={};for(let e=0;e<s.length;e++){const n=Us(s[e]);for(const i in n)t[i]=n[i]}return t}function Mh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Hp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function vf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Gp={clone:Us,merge:nn};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xe extends Zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Xp extends Xe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Oo extends Zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=jl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qp extends Zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yp extends Zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ia={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(yh(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!yh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function yh(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class $p{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){const u=l[f],m=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Kp=new $p;class mc{constructor(t){this.manager=t!==void 0?t:Kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}mc.DEFAULT_MATERIAL_NAME="__DEFAULT";const gs=new WeakMap;class Zp extends mc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ia.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=gs.get(o);f===void 0&&(f=[],gs.set(o,f)),f.push({onLoad:e,onError:i})}return o}const a=br("img");function c(){h(),e&&e(this);const f=gs.get(this)||[];for(let d=0;d<f.length;d++){const u=f[d];u.onLoad&&u.onLoad(this)}gs.delete(this),r.manager.itemEnd(t)}function l(f){h(),i&&i(f),Ia.remove(`image:${t}`);const d=gs.get(this)||[];for(let u=0;u<d.length;u++){const m=d[u];m.onError&&m.onError(f)}gs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ia.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Gl extends mc{constructor(t){super(t)}load(t,e,n,i){const r=new Ye,o=new Zp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class _f extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Jp extends _f{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Da=new Kt,Sh=new U,wh=new U;class Qp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Da.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Da,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===wr||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Da)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ro=new U,oo=new ge,kn=new U;class Mf extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ro,oo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ro,oo,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ro,oo,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Si=new U,bh=new Nt,Eh=new Nt;class rn extends Mf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,bh,Eh),e.subVectors(Eh,bh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ta extends Mf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jp extends Qp{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tm extends _f{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new jp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const xs=-90,vs=1;class em extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(xs,vs,t,e);i.layers=this.layers,this.add(i);const r=new rn(xs,vs,t,e);r.layers=this.layers,this.add(r);const o=new rn(xs,vs,t,e);o.layers=this.layers,this.add(o);const a=new rn(xs,vs,t,e);a.layers=this.layers,this.add(a);const c=new rn(xs,vs,t,e);c.layers=this.layers,this.add(c);const l=new rn(xs,vs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class nm extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Th=new Kt;class gr{constructor(t,e,n=0,i=1/0){this.ray=new dc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(Ah),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Vl(t[i],this,n,e);return n.sort(Ah),n}}function Ah(s,t){return s.distance-t.distance}function Vl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Vl(r[o],t,e,!0)}}const zc=class zc{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};zc.prototype.isMatrix2=!0;let Rh=zc;function Ch(s,t,e,n){const i=im(n);switch(e){case rf:return s*t;case jo:return s*t/i.components*i.byteLength;case sc:return s*t/i.components*i.byteLength;case Xi:return s*t*2/i.components*i.byteLength;case rc:return s*t*2/i.components*i.byteLength;case of:return s*t*3/i.components*i.byteLength;case xn:return s*t*4/i.components*i.byteLength;case oc:return s*t*4/i.components*i.byteLength;case yo:case So:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wo:case bo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fl:case pl:return Math.max(s,16)*Math.max(t,8)/4;case ul:case dl:return Math.max(s,8)*Math.max(t,8)/2;case ml:case gl:case vl:case _l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xl:case Lo:case Ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Fl:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ol:case kl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Po:case Bl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function im(s){switch(s){case hn:case tf:return{byteLength:1,components:1};case yr:case ef:case An:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Jn:case ec:case Nn:return{byteLength:4,components:1};case nf:case sf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yf(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function sm(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const h=c.array,f=c.updateRanges;if(s.bindBuffer(l,a),f.length===0)s.bufferSubData(l,0,h);else{f.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<f.length;u++){const m=f[d],x=f[u];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,m=f.length;u<m;u++){const x=f[u];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rm=`#define PI 3.141592653589793
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
} // validated`,Cm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n0=`PhysicalMaterial material;
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
#endif`,i0=`uniform sampler2D dfgLUT;
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
}`,s0=`
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
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
#endif`,o0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,l0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,p0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,m0=`#if defined( USE_POINTS_UV )
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
#endif`,g0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,b0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,R0=`#ifdef USE_NORMALMAP
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
#endif`,C0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,k0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W0=`float getShadowMask() {
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
}`,X0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q0=`#ifdef USE_SKINNING
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
#endif`,Y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ug=`#include <common>
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
}`,fg=`#if DEPTH_PACKING == 3200
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
}`,dg=`#define DISTANCE
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
}`,pg=`#define DISTANCE
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
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
}`,vg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,yg=`#define LAMBERT
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
}`,Sg=`#define LAMBERT
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
}`,wg=`#define MATCAP
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
}`,bg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,Tg=`#define NORMAL
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
}`,Ag=`#define PHONG
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
}`,Rg=`#define PHONG
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
}`,Cg=`#define STANDARD
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
}`,Lg=`#define STANDARD
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
}`,Pg=`#define TOON
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
}`,Ig=`#define TOON
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
}`,Dg=`uniform float size;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Ng=`#include <common>
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
}`,Fg=`uniform vec3 color;
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
}`,zg=`uniform float rotation;
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
}`,Og=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:rm,alphahash_pars_fragment:om,alphamap_fragment:am,alphamap_pars_fragment:lm,alphatest_fragment:cm,alphatest_pars_fragment:hm,aomap_fragment:um,aomap_pars_fragment:fm,batching_pars_vertex:dm,batching_vertex:pm,begin_vertex:mm,beginnormal_vertex:gm,bsdfs:xm,iridescence_fragment:vm,bumpmap_pars_fragment:_m,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:wm,color_fragment:bm,color_pars_fragment:Em,color_pars_vertex:Tm,color_vertex:Am,common:Rm,cube_uv_reflection_fragment:Cm,defaultnormal_vertex:Lm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Im,emissivemap_fragment:Dm,emissivemap_pars_fragment:Um,colorspace_fragment:Nm,colorspace_pars_fragment:Fm,envmap_fragment:zm,envmap_common_pars_fragment:Om,envmap_pars_fragment:km,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Jm,envmap_vertex:Hm,fog_vertex:Gm,fog_pars_vertex:Vm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:$m,lights_lambert_pars_fragment:Km,lights_pars_begin:Zm,lights_toon_fragment:Qm,lights_toon_pars_fragment:jm,lights_phong_fragment:t0,lights_phong_pars_fragment:e0,lights_physical_fragment:n0,lights_physical_pars_fragment:i0,lights_fragment_begin:s0,lights_fragment_maps:r0,lights_fragment_end:o0,lightprobes_pars_fragment:a0,logdepthbuf_fragment:l0,logdepthbuf_pars_fragment:c0,logdepthbuf_pars_vertex:h0,logdepthbuf_vertex:u0,map_fragment:f0,map_pars_fragment:d0,map_particle_fragment:p0,map_particle_pars_fragment:m0,metalnessmap_fragment:g0,metalnessmap_pars_fragment:x0,morphinstance_vertex:v0,morphcolor_vertex:_0,morphnormal_vertex:M0,morphtarget_pars_vertex:y0,morphtarget_vertex:S0,normal_fragment_begin:w0,normal_fragment_maps:b0,normal_pars_fragment:E0,normal_pars_vertex:T0,normal_vertex:A0,normalmap_pars_fragment:R0,clearcoat_normal_fragment_begin:C0,clearcoat_normal_fragment_maps:L0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:I0,opaque_fragment:D0,packing:U0,premultiplied_alpha_fragment:N0,project_vertex:F0,dithering_fragment:z0,dithering_pars_fragment:O0,roughnessmap_fragment:k0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:H0,shadowmap_pars_vertex:G0,shadowmap_vertex:V0,shadowmask_pars_fragment:W0,skinbase_vertex:X0,skinning_pars_vertex:q0,skinning_vertex:Y0,skinnormal_vertex:$0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:Q0,transmission_fragment:j0,transmission_pars_fragment:tg,uv_pars_fragment:eg,uv_pars_vertex:ng,uv_vertex:ig,worldpos_vertex:sg,background_vert:rg,background_frag:og,backgroundCube_vert:ag,backgroundCube_frag:lg,cube_vert:cg,cube_frag:hg,depth_vert:ug,depth_frag:fg,distance_vert:dg,distance_frag:pg,equirect_vert:mg,equirect_frag:gg,linedashed_vert:xg,linedashed_frag:vg,meshbasic_vert:_g,meshbasic_frag:Mg,meshlambert_vert:yg,meshlambert_frag:Sg,meshmatcap_vert:wg,meshmatcap_frag:bg,meshnormal_vert:Eg,meshnormal_frag:Tg,meshphong_vert:Ag,meshphong_frag:Rg,meshphysical_vert:Cg,meshphysical_frag:Lg,meshtoon_vert:Pg,meshtoon_frag:Ig,points_vert:Dg,points_frag:Ug,shadow_vert:Ng,shadow_frag:Fg,sprite_vert:zg,sprite_frag:Og},Et={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Xn={basic:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:nn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:nn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:nn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:nn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:nn([Et.points,Et.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:nn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:nn([Et.common,Et.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:nn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:nn([Et.sprite,Et.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:nn([Et.common,Et.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:nn([Et.lights,Et.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Xn.physical={uniforms:nn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const ao={r:0,b:0,g:0},kg=new Kt,Sf=new Yt;Sf.set(-1,0,0,0,1,0,0,0,1);function Bg(s,t,e,n,i,r){const o=new Bt(0);let a=i===!0?0:1,c,l,h=null,f=0,d=null;function u(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const v=M.backgroundBlurriness>0;E=t.get(E,v)}return E}function m(M){let E=!1;const v=u(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),E=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(M,E){const v=u(E);v&&(v.isCubeTexture||v.mapping===Qo)?(l===void 0&&(l=new we(new Tn(1,1,1),new Xe({name:"BackgroundCubeMaterial",uniforms:Us(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(kg.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sf),l.material.toneMapped=oe.getTransfer(v.colorSpace)!==fe,(h!==v||f!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new we(new Fn(2,2),new Xe({name:"BackgroundMaterial",uniforms:Us(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,E){M.getRGB(ao,vf(s)),e.buffers.color.setClear(ao.r,ao.g,ao.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Hg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(L,D,z,G,F){let Q=!1;const Y=f(L,G,z,D);r!==Y&&(r=Y,l(r.object)),Q=u(L,G,z,F),Q&&m(L,G,z,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(L,D,z,G),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function f(L,D,z,G){const F=G.wireframe===!0;let Q=n[D.id];Q===void 0&&(Q={},n[D.id]=Q);const Y=L.isInstancedMesh===!0?L.id:0;let tt=Q[Y];tt===void 0&&(tt={},Q[Y]=tt);let V=tt[z.id];V===void 0&&(V={},tt[z.id]=V);let Z=V[F];return Z===void 0&&(Z=d(c()),V[F]=Z),Z}function d(L){const D=[],z=[],G=[];for(let F=0;F<e;F++)D[F]=0,z[F]=0,G[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:G,object:L,attributes:{},index:null}}function u(L,D,z,G){const F=r.attributes,Q=D.attributes;let Y=0;const tt=z.getAttributes();for(const V in tt)if(tt[V].location>=0){const ot=F[V];let pt=Q[V];if(pt===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),ot===void 0||ot.attribute!==pt||pt&&ot.data!==pt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==G}function m(L,D,z,G){const F={},Q=D.attributes;let Y=0;const tt=z.getAttributes();for(const V in tt)if(tt[V].location>=0){let ot=Q[V];ot===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(ot=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(ot=L.instanceColor));const pt={};pt.attribute=ot,ot&&ot.data&&(pt.data=ot.data),F[V]=pt,Y++}r.attributes=F,r.attributesNum=Y,r.index=G}function x(){const L=r.newAttributes;for(let D=0,z=L.length;D<z;D++)L[D]=0}function g(L){p(L,0)}function p(L,D){const z=r.newAttributes,G=r.enabledAttributes,F=r.attributeDivisors;z[L]=1,G[L]===0&&(s.enableVertexAttribArray(L),G[L]=1),F[L]!==D&&(s.vertexAttribDivisor(L,D),F[L]=D)}function M(){const L=r.newAttributes,D=r.enabledAttributes;for(let z=0,G=D.length;z<G;z++)D[z]!==L[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function E(L,D,z,G,F,Q,Y){Y===!0?s.vertexAttribIPointer(L,D,z,F,Q):s.vertexAttribPointer(L,D,z,G,F,Q)}function v(L,D,z,G){x();const F=G.attributes,Q=z.getAttributes(),Y=D.defaultAttributeValues;for(const tt in Q){const V=Q[tt];if(V.location>=0){let Z=F[tt];if(Z===void 0&&(tt==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),tt==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const ot=Z.normalized,pt=Z.itemSize,N=t.get(Z);if(N===void 0)continue;const X=N.buffer,k=N.type,H=N.bytesPerElement,R=k===s.INT||k===s.UNSIGNED_INT||Z.gpuType===ec;if(Z.isInterleavedBufferAttribute){const P=Z.data,W=P.stride,j=Z.offset;if(P.isInstancedInterleavedBuffer){for(let it=0;it<V.locationSize;it++)p(V.location+it,P.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let it=0;it<V.locationSize;it++)g(V.location+it);s.bindBuffer(s.ARRAY_BUFFER,X);for(let it=0;it<V.locationSize;it++)E(V.location+it,pt/V.locationSize,k,ot,W*H,(j+pt/V.locationSize*it)*H,R)}else{if(Z.isInstancedBufferAttribute){for(let P=0;P<V.locationSize;P++)p(V.location+P,Z.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let P=0;P<V.locationSize;P++)g(V.location+P);s.bindBuffer(s.ARRAY_BUFFER,X);for(let P=0;P<V.locationSize;P++)E(V.location+P,pt/V.locationSize,k,ot,pt*H,pt/V.locationSize*P*H,R)}}else if(Y!==void 0){const ot=Y[tt];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(V.location,ot);break;case 3:s.vertexAttrib3fv(V.location,ot);break;case 4:s.vertexAttrib4fv(V.location,ot);break;default:s.vertexAttrib1fv(V.location,ot)}}}}M()}function S(){y();for(const L in n){const D=n[L];for(const z in D){const G=D[z];for(const F in G){const Q=G[F];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete G[F]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const z in D){const G=D[z];for(const F in G){const Q=G[F];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete G[F]}}delete n[L.id]}function A(L){for(const D in n){const z=n[D];for(const G in z){const F=z[G];if(F[L.id]===void 0)continue;const Q=F[L.id];for(const Y in Q)h(Q[Y].object),delete Q[Y];delete F[L.id]}}}function _(L){for(const D in n){const z=n[D],G=L.isInstancedMesh===!0?L.id:0,F=z[G];if(F!==void 0){for(const Q in F){const Y=F[Q];for(const tt in Y)h(Y[tt].object),delete Y[tt];delete F[Q]}delete z[G],Object.keys(z).length===0&&delete n[D]}}}function y(){C(),o=!0,r!==i&&(r=i,l(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:y,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function Gg(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Vg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==xn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hn&&A!==Nn&&!_&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Vt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),S=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:S,samples:b}}function Wg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Wn,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const u=f.length!==0||d||n!==0||i;return i=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){const m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const M=r?0:n,E=M*4;let v=p.clippingState||null;c.value=v,v=h(m,d,E,u);for(let S=0;S!==E;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,m){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const p=u+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=u;E!==x;++E,v+=4)o.copy(f[E]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const Ts=4,Xg=6,qg=20,Yg=256,Js=new ta,Lh=new Bt;let Ua=null,Na=0,Fa=0,za=!1;const $g=new U,Oi=new U;class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=$g}=r;Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=za,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:An,format:xn,colorSpace:Io,depthBuffer:!1},i=Ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kg(r)),this._blurMaterial=Jg(r,t,e),this._ggxMaterial=Zg(r,t,e)}return i}_compileMaterial(t){const e=new we(new Te,t);this._renderer.compile(e,Js)}_sceneToCubeUV(t,e,n,i,r){const c=new rn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(Lh),f.toneMapping=Zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new Tn,new Kn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(Lh),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):v===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const S=this._cubeSize;_s(i,v*S,E>2?S:0,S,S),f.setRenderTarget(i),p&&f.render(x,c),f.render(t,c)}f.toneMapping=u,f.autoClear=d,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Wi||t.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;_s(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Js)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),d=l*1.25,u=f*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Ts?n-m+Ts:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=u,c.mipInt.value=m-e,_s(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(a,Js),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,_s(t,g,p,3*x,2*x),i.setRenderTarget(t),i.render(a,Js)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],f=3*h*(i>this._lodMax-Ts?i-this._lodMax+Ts:0),d=4*(this._cubeSize-h);_s(e,f,d,3*h,2*h),o.setRenderTarget(e),o.render(c,Js)}}function Kg(s){const t=[],e=[];let n=s;const i=s-Ts+1+Xg;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,d=6,u=3,m=new Float32Array(u*d*f),x=new Float32Array(u*d*f);for(let p=0;p<f;p++){const M=p%3*2/3-1,E=p>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(v,u*d*p);for(let S=0;S<d;S++){const b=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?Oi.set(1,A,b):p===1?Oi.set(-b,1,-A):p===2?Oi.set(-b,A,1):p===3?Oi.set(-1,A,-b):p===4?Oi.set(-b,-1,A):Oi.set(b,A,-1),Oi.toArray(x,(p*d+S)*u)}}const g=new Te;g.setAttribute("position",new En(m,u)),g.setAttribute("outputDirection",new En(x,u)),e.push(new we(g,null)),n>Ts&&n--}return{lodMeshes:e,sizeLods:t}}function Ih(s,t,e){const n=new bn(s,t,e);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Zg(s,t,e){return new Xe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ea(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Jg(s,t,e){return new Xe({name:"SphericalGaussianBlur",defines:{SAMPLES:qg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ea(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Dh(){return new Xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Uh(){return new Xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class wf extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tn(5,5,5),r=new Xe({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:ui});r.uniforms.tEquirect.value=e;const o=new we(i,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=We),new em(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function Qg(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,u=!1){return d==null?null:u?o(d):r(d)}function r(d){if(d&&d.isTexture){const u=d.mapping;if(u===oa||u===aa)if(t.has(d)){const m=t.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const x=new wf(m.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",l),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const u=d.mapping,m=u===oa||u===aa,x=u===Wi||u===Is;if(m||x){let g=e.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Ph(s)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return m&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new Ph(s)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function a(d,u){return u===oa?d.mapping=Wi:u===aa&&(d.mapping=Is),d}function c(d){let u=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&u++;return u===m}function l(d){const u=d.target;u.removeEventListener("dispose",l);const m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(d){const u=d.target;u.removeEventListener("dispose",h);const m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function jg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ls("WebGLRenderer: "+n+" extension not supported."),i}}}function tx(s,t,e,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const u=r.get(d);u&&(t.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const u in d)t.update(d[u],s.ARRAY_BUFFER)}function l(f){const d=[],u=f.index,m=f.attributes.position;let x=0;if(m===void 0)return;if(u!==null){const M=u.array;x=u.version;for(let E=0,v=M.length;E<v;E+=3){const S=M[E+0],b=M[E+1],A=M[E+2];d.push(S,b,b,A,A,S)}}else{const M=m.array;x=m.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const S=E+0,b=E+1,A=E+2;d.push(S,b,b,A,A,S)}}const g=new(m.count>=65535?ff:uf)(d,1);g.version=x;const p=r.get(f);p&&t.remove(p),r.set(f,g)}function h(f){const d=r.get(f);if(d){const u=f.index;u!==null&&d.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function ex(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,u){u!==0&&(s.drawElementsInstanced(n,d,r,f*o,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let x=0;for(let g=0;g<u;g++)x+=d[g];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function nx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ix(s,t,e){const n=new WeakMap,i=new xe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var u=C;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let S=a.attributes.position.count*v,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*b*4*f),_=new cf(A,S,b,f);_.type=Nn,_.needsUpdate=!0;const y=v*4;for(let L=0;L<f;L++){const D=p[L],z=M[L],G=E[L],F=S*b*4*L;for(let Q=0;Q<D.count;Q++){const Y=Q*y;m===!0&&(i.fromBufferAttribute(D,Q),A[F+Y+0]=i.x,A[F+Y+1]=i.y,A[F+Y+2]=i.z,A[F+Y+3]=0),x===!0&&(i.fromBufferAttribute(z,Q),A[F+Y+4]=i.x,A[F+Y+5]=i.y,A[F+Y+6]=i.z,A[F+Y+7]=0),g===!0&&(i.fromBufferAttribute(G,Q),A[F+Y+8]=i.x,A[F+Y+9]=i.y,A[F+Y+10]=i.z,A[F+Y+11]=G.itemSize===4?i.w:1)}}d={count:f,texture:_,size:new Nt(S,b)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function sx(s,t,e,n,i){let r=new WeakMap;function o(l){const h=i.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const rx={[Yu]:"LINEAR_TONE_MAPPING",[$u]:"REINHARD_TONE_MAPPING",[Ku]:"CINEON_TONE_MAPPING",[Zu]:"ACES_FILMIC_TONE_MAPPING",[Qu]:"AGX_TONE_MAPPING",[tc]:"NEUTRAL_TONE_MAPPING",[Ju]:"CUSTOM_TONE_MAPPING"};function ox(s,t,e,n,i,r){const o=new bn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Te;l.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const h=new Xp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new we(l,h),d=new ta(-1,1,1,-1,0,1);let u=null,m=null,x=!1,g,p=null,M=[],E=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),c!==null&&c.setSize(v,S);for(let b=0;b<M.length;b++){const A=M[b];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;const S=o.width,b=o.height;M.length>0&&a===null&&(a=new bn(S,b,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new bn(S,b,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const _=M[A];_.setSize&&_.setSize(S,b)}},this.begin=function(v,S){if(x||v.toneMapping===Zn&&M.length===0)return!1;if(p=S,S!==null){const b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return E===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Zn,!0},this.hasRenderPass=function(){return E},this.end=function(v,S){v.toneMapping=g,x=!0;let b=o,A=a;for(let _=0;_<M.length;_++){const y=M[_];y.enabled!==!1&&(y.render(v,A,b,S),y.needsSwap!==!1&&(b=A,A=A===a?c:a))}if(u!==v.outputColorSpace||m!==v.toneMapping){u=v.outputColorSpace,m=v.toneMapping,h.defines={},oe.getTransfer(u)===fe&&(h.defines.SRGB_TRANSFER="");const _=rx[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(f,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const bf=new Ye,Wl=new Tr(1,1),Ef=new cf,Tf=new mp,Af=new gf,Nh=[],Fh=[],zh=new Float32Array(16),Oh=new Float32Array(9),kh=new Float32Array(4);function zs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Nh[i];if(r===void 0&&(r=new Float32Array(i),Nh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function na(s,t){let e=Fh[t];e===void 0&&(e=new Int32Array(t),Fh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ax(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function lx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function cx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function hx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function ux(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;kh.set(n),s.uniformMatrix2fv(this.addr,!1,kh),ze(e,n)}}function fx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;Oh.set(n),s.uniformMatrix3fv(this.addr,!1,Oh),ze(e,n)}}function dx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Fe(e,n))return;zh.set(n),s.uniformMatrix4fv(this.addr,!1,zh),ze(e,n)}}function px(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function mx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function gx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function xx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function vx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function _x(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function Mx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function yx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function Sx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Wl.compareFunction=e.isReversedDepthBuffer()?lc:ac,r=Wl):r=bf,e.setTexture2D(t||r,i)}function wx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Tf,i)}function bx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Af,i)}function Ex(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ef,i)}function Tx(s){switch(s){case 5126:return ax;case 35664:return lx;case 35665:return cx;case 35666:return hx;case 35674:return ux;case 35675:return fx;case 35676:return dx;case 5124:case 35670:return px;case 35667:case 35671:return mx;case 35668:case 35672:return gx;case 35669:case 35673:return xx;case 5125:return vx;case 36294:return _x;case 36295:return Mx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Ex}}function Ax(s,t){s.uniform1fv(this.addr,t)}function Rx(s,t){const e=zs(t,this.size,2);s.uniform2fv(this.addr,e)}function Cx(s,t){const e=zs(t,this.size,3);s.uniform3fv(this.addr,e)}function Lx(s,t){const e=zs(t,this.size,4);s.uniform4fv(this.addr,e)}function Px(s,t){const e=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ix(s,t){const e=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Dx(s,t){const e=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ux(s,t){s.uniform1iv(this.addr,t)}function Nx(s,t){s.uniform2iv(this.addr,t)}function Fx(s,t){s.uniform3iv(this.addr,t)}function zx(s,t){s.uniform4iv(this.addr,t)}function Ox(s,t){s.uniform1uiv(this.addr,t)}function kx(s,t){s.uniform2uiv(this.addr,t)}function Bx(s,t){s.uniform3uiv(this.addr,t)}function Hx(s,t){s.uniform4uiv(this.addr,t)}function Gx(s,t,e){const n=this.cache,i=t.length,r=na(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Wl:o=bf;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function Vx(s,t,e){const n=this.cache,i=t.length,r=na(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Tf,r[o])}function Wx(s,t,e){const n=this.cache,i=t.length,r=na(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Af,r[o])}function Xx(s,t,e){const n=this.cache,i=t.length,r=na(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ef,r[o])}function qx(s){switch(s){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Lx;case 35674:return Px;case 35675:return Ix;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Nx;case 35668:case 35672:return Fx;case 35669:case 35673:return zx;case 5125:return Ox;case 36294:return kx;case 36295:return Bx;case 36296:return Hx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}class Yx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tx(e.type)}}class $x{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qx(e.type)}}class Kx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function Bh(s,t){s.seq.push(t),s.map[t.id]=t}function Zx(s,t,e){const n=s.name,i=n.length;for(Oa.lastIndex=0;;){const r=Oa.exec(n),o=Oa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Bh(e,l===void 0?new Yx(a,s,t):new $x(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new Kx(a),Bh(e,f)),e=f}}}class To{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Zx(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Hh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Jx=37297;let Qx=0;function jx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gh=new Yt;function tv(s){oe._getMatrix(Gh,oe.workingColorSpace,s);const t=`mat3( ${Gh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(s)){case Do:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Vh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+jx(s.getShaderSource(t),a)}else return r}function ev(s,t){const e=tv(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const nv={[Yu]:"Linear",[$u]:"Reinhard",[Ku]:"Cineon",[Zu]:"ACESFilmic",[Qu]:"AgX",[tc]:"Neutral",[Ju]:"Custom"};function iv(s,t){const e=nv[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const lo=new U;function sv(){oe.getLuminanceCoefficients(lo);const s=lo.x.toFixed(4),t=lo.y.toFixed(4),e=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function ov(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function av(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function hr(s){return s!==""}function Wh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(s){return s.replace(lv,hv)}const cv=new Map;function hv(s,t){let e=Jt[t];if(e===void 0){const n=cv.get(t);if(n!==void 0)e=Jt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xl(e)}const uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(s){return s.replace(uv,fv)}function fv(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const dv={[Mo]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function pv(s){return dv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mv={[Wi]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};function gv(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":mv[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const xv={[Is]:"ENVMAP_MODE_REFRACTION"};function vv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":xv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _v={[jl]:"ENVMAP_BLENDING_MULTIPLY",[Id]:"ENVMAP_BLENDING_MIX",[Dd]:"ENVMAP_BLENDING_ADD"};function Mv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_v[s.combine]||"ENVMAP_BLENDING_NONE"}function yv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=pv(e),l=gv(e),h=vv(e),f=Mv(e),d=yv(e),u=rv(e),m=ov(r),x=i.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(g=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?iv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,ev("linearToOutputTexel",e.outputColorSpace),sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),o=Xl(o),o=Wh(o,e),o=Xh(o,e),a=Xl(a),a=Wh(a,e),a=Xh(a,e),o=qh(o),a=qh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===$c?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+g+o,v=M+p+a,S=Hh(i,i.VERTEX_SHADER,E),b=Hh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,S),i.attachShader(x,b),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(L){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(x)||"",z=i.getShaderInfoLog(S)||"",G=i.getShaderInfoLog(b)||"",F=D.trim(),Q=z.trim(),Y=G.trim();let tt=!0,V=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,S,b);else{const Z=Vh(i,S,"vertex"),ot=Vh(i,b,"fragment");le("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+Z+`
`+ot)}else F!==""?Vt("WebGLProgram: Program Info Log:",F):(Q===""||Y==="")&&(V=!1);V&&(L.diagnostics={runnable:tt,programLog:F,vertexShader:{log:Q,prefix:g},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(S),i.deleteShader(b),_=new To(i,x),y=av(i,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,Jx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}let wv=0;class bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ev(t),e.set(t,n)),n}}class Ev{constructor(t){this.id=wv++,this.code=t,this.usedTimes=0}}function Tv(s){return s===Xi||s===Lo||s===Po}function Av(s,t,e,n,i,r){const o=new uc,a=new bv,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,y,C,L,D,z){const G=L.fog,F=D.geometry,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,tt=t.get(_.envMap||Q,Y),V=tt&&tt.mapping===Qo?tt.image.height:null,Z=u[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Vt("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ot=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,pt=ot!==void 0?ot.length:0;let N=0;F.morphAttributes.position!==void 0&&(N=1),F.morphAttributes.normal!==void 0&&(N=2),F.morphAttributes.color!==void 0&&(N=3);let X,k,H,R;if(Z){const te=Xn[Z];X=te.vertexShader,k=te.fragmentShader}else{X=_.vertexShader,k=_.fragmentShader;const te=a.getVertexShaderStage(_),Qt=a.getFragmentShaderStage(_);a.update(_,te,Qt),H=te.id,R=Qt.id}const P=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),j=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,mt=!!_.map,_t=!!_.matcap,bt=!!tt,Ht=!!_.aoMap,Gt=!!_.lightMap,Xt=!!_.bumpMap&&_.wireframe===!1,ae=!!_.normalMap,Me=!!_.displacementMap,Le=!!_.emissiveMap,ye=!!_.metalnessMap,he=!!_.roughnessMap,K=_.anisotropy>0,be=_.clearcoat>0,re=_.dispersion>0,O=_.retroreflectivity>0,w=_.iridescence>0,J=_.sheen>0,st=_.transmission>0,ht=K&&!!_.anisotropyMap,vt=be&&!!_.clearcoatMap,yt=be&&!!_.clearcoatNormalMap,ut=be&&!!_.clearcoatRoughnessMap,dt=w&&!!_.iridescenceMap,St=w&&!!_.iridescenceThicknessMap,Ot=J&&!!_.sheenColorMap,Mt=J&&!!_.sheenRoughnessMap,wt=!!_.specularMap,Ft=!!_.specularColorMap,q=!!_.specularIntensityMap,at=st&&!!_.transmissionMap,B=st&&!!_.thicknessMap,ct=!!_.gradientMap,rt=!!_.alphaMap,gt=_.alphaTest>0,xt=!!_.alphaHash,ft=!!_.extensions;let Pt=Zn;_.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=s.toneMapping);const Tt={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:k,defines:_.defines,customVertexShaderID:H,customFragmentShaderID:R,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:j,instancingColor:j&&D.instanceColor!==null,instancingMorph:j&&D.morphTexture!==null,outputColorSpace:P===null?s.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:mt,matcap:_t,envMap:bt,envMapMode:bt&&tt.mapping,envMapCubeUVHeight:V,aoMap:Ht,lightMap:Gt,bumpMap:Xt,normalMap:ae,displacementMap:Me,emissiveMap:Le,normalMapObjectSpace:ae&&_.normalMapType===Fd,normalMapTangentSpace:ae&&_.normalMapType===Hl,packedNormalMap:ae&&_.normalMapType===Hl&&Tv(_.normalMap.format),metalnessMap:ye,roughnessMap:he,anisotropy:K,anisotropyMap:ht,clearcoat:be,clearcoatMap:vt,clearcoatNormalMap:yt,clearcoatRoughnessMap:ut,dispersion:re,retroreflection:O,iridescence:w,iridescenceMap:dt,iridescenceThicknessMap:St,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:wt,specularColorMap:Ft,specularIntensityMap:q,transmission:st,transmissionMap:at,thicknessMap:B,gradientMap:ct,opaque:_.transparent===!1&&_.blending===fr&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:gt,alphaHash:xt,combine:_.combine,mapUv:mt&&m(_.map.channel),aoMapUv:Ht&&m(_.aoMap.channel),lightMapUv:Gt&&m(_.lightMap.channel),bumpMapUv:Xt&&m(_.bumpMap.channel),normalMapUv:ae&&m(_.normalMap.channel),displacementMapUv:Me&&m(_.displacementMap.channel),emissiveMapUv:Le&&m(_.emissiveMap.channel),metalnessMapUv:ye&&m(_.metalnessMap.channel),roughnessMapUv:he&&m(_.roughnessMap.channel),anisotropyMapUv:ht&&m(_.anisotropyMap.channel),clearcoatMapUv:vt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:yt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:St&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&m(_.sheenRoughnessMap.channel),specularMapUv:wt&&m(_.specularMap.channel),specularColorMapUv:Ft&&m(_.specularColorMap.channel),specularIntensityMapUv:q&&m(_.specularIntensityMap.channel),transmissionMapUv:at&&m(_.transmissionMap.channel),thicknessMapUv:B&&m(_.thicknessMap.channel),alphaMapUv:rt&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ae||K),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(mt||rt),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&ae===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:W,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:N,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pt,decodeVideoTexture:mt&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Le&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Yn,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ft&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&_.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function g(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(y,_),M(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function p(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function M(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const y=u[_.type];let C;if(y){const L=Xn[y];C=Gp.clone(L.uniforms)}else C=_.uniforms;return C}function v(_,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new Sv(s,y,_,i),l.push(C),h.set(y,C)),C}function S(_){if(--_.usedTimes===0){const y=l.indexOf(_);l[y]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:l,dispose:A}}function Rv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Cv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function $h(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Kh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function a(d,u,m,x,g,p){let M=s[t];return M===void 0?(M={id:d.id,object:d,geometry:u,material:m,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:g,group:p},s[t]=M):(M.id=d.id,M.object=d,M.geometry=u,M.material=m,M.materialVariant=o(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=g,M.group=p),t++,M}function c(d,u,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);const E=a(d,u,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):e.push(E)}function l(d,u,m,x,g,p){const M=a(d,u,m,x,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?i.unshift(M):e.unshift(M)}function h(d,u){e.length>1&&e.sort(d||Cv),n.length>1&&n.sort(u||$h),i.length>1&&i.sort(u||$h)}function f(){for(let d=t,u=s.length;d<u;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:h}}function Lv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Kh,s.set(n,[o])):i>=r.length?(o=new Kh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Pv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Bt};break;case"SpotLight":e={position:new U,direction:new U,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Iv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dv=0;function Uv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Nv(s){const t=new Pv,e=Iv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const i=new U,r=new Kt,o=new Kt;function a(l){let h=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,m=0,x=0,g=0,p=0,M=0,E=0,v=0,S=0,b=0,A=0,_=0,y=0,C=0;l.sort(Uv);for(let D=0,z=l.length;D<z;D++){const G=l[D],F=G.color,Q=G.intensity,Y=G.distance;let tt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Xi?tt=G.shadow.map.texture:tt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)h+=F.r*Q,f+=F.g*Q,d+=F.b*Q;else if(G.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(G.sh.coefficients[V],Q);C++}else if(G.isSunLight){const V=t.get(G);if(V.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,ot=e.get(G);ot.shadowIntensity=Z.intensity,ot.shadowBias=Z.bias,ot.shadowNormalBias=Z.normalBias,ot.shadowRadius=Z.radius,ot.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[m]=ot,n.sunShadowMap[m]=tt;const pt=Z.getViewportCount();for(let N=0;N<pt;N++)n.sunShadowMatrix[x+N]=Z.getMatrix(N),n.sunShadowCascade[x+N]=Z._cascadeData[N];x+=pt,m++}n.sun[u]=V,u++}else if(G.isDirectionalLight){const V=t.get(G);if(V.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,ot=e.get(G);ot.shadowIntensity=Z.intensity,ot.shadowBias=Z.bias,ot.shadowNormalBias=Z.normalBias,ot.shadowRadius=Z.radius,ot.shadowMapSize=Z.mapSize,n.directionalShadow[g]=ot,n.directionalShadowMap[g]=tt,n.directionalShadowMatrix[g]=G.shadow.matrix,S++}n.directional[g]=V,g++}else if(G.isSpotLight){const V=t.get(G);V.position.setFromMatrixPosition(G.matrixWorld),V.color.copy(F).multiplyScalar(Q),V.distance=Y,V.coneCos=Math.cos(G.angle),V.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),V.decay=G.decay,n.spot[M]=V;const Z=G.shadow;if(G.map&&(n.spotLightMap[_]=G.map,_++,Z.updateMatrices(G),G.castShadow&&y++),n.spotLightMatrix[M]=Z.matrix,G.castShadow){const ot=e.get(G);ot.shadowIntensity=Z.intensity,ot.shadowBias=Z.bias,ot.shadowNormalBias=Z.normalBias,ot.shadowRadius=Z.radius,ot.shadowMapSize=Z.mapSize,n.spotShadow[M]=ot,n.spotShadowMap[M]=tt,A++}M++}else if(G.isRectAreaLight){const V=t.get(G);V.color.copy(F).multiplyScalar(Q),V.halfWidth.set(G.width*.5,0,0),V.halfHeight.set(0,G.height*.5,0),n.rectArea[E]=V,E++}else if(G.isPointLight){const V=t.get(G);if(V.color.copy(G.color).multiplyScalar(G.intensity),V.distance=G.distance,V.decay=G.decay,G.castShadow){const Z=G.shadow,ot=e.get(G);ot.shadowIntensity=Z.intensity,ot.shadowBias=Z.bias,ot.shadowNormalBias=Z.normalBias,ot.shadowRadius=Z.radius,ot.shadowMapSize=Z.mapSize,ot.shadowCameraNear=Z.camera.near,ot.shadowCameraFar=Z.camera.far,n.pointShadow[p]=ot,n.pointShadowMap[p]=tt,n.pointShadowMatrix[p]=G.shadow.matrix,b++}n.point[p]=V,p++}else if(G.isHemisphereLight){const V=t.get(G);V.skyColor.copy(G.color).multiplyScalar(Q),V.groundColor.copy(G.groundColor).multiplyScalar(Q),n.hemi[v]=V,v++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.sunLength!==u||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==v||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=C,L.sunLength=u,L.directionalLength=g,L.pointLength=p,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=v,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=_,L.numLightProbes=C,n.version=Dv++)}function c(l,h){let f=0,d=0,u=0,m=0,x=0,g=0;const p=h.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){const v=l[M];if(v.isSunLight){const S=n.sun[f];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),f++}else if(v.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(v.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Zh(s){const t=new Nv(s),e=[],n=[],i=[];function r(d){f.camera=d,e.length=0,n.length=0,i.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function c(d){i.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Fv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Zh(s),t.set(i,[a])):r>=o.length?(a=new Zh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`,kv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Bv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Jh=new Kt,Qs=new U,ka=new U;function Hv(s,t,e){let n=new pc;const i=new Nt,r=new Nt,o=new xe,a=new qp,c=new Yp,l={},h=e.maxTextureSize,f={[Vi]:un,[un]:Vi,[Yn]:Yn},d=new Xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:zv,fragmentShader:Ov}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const m=new Te;m.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new we(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mo;let p=this.type;this.render=function(b,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===dd&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mo);const y=s.getRenderTarget(),C=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ui),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=p!==this.type;z&&A.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(F=>F.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,F=b.length;G<F;G++){const Q=b[G],Y=Q.shadow;if(Y===void 0){Vt("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const tt=Y.getFrameExtents();i.multiply(tt),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,Y.mapSize.y=r.y));const V=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=V,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===cr){if(Q.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new bn(i.x,i.y,{format:Xi,type:An,minFilter:We,magFilter:We,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new Tr(i.x,i.y,Nn),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=pi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ve,Y.map.depthTexture.magFilter=Ve}else Q.isPointLight?(Y.map=new wf(i.x),Y.map.depthTexture=new Bp(i.x,Jn)):(Y.map=new bn(i.x,i.y),Y.map.depthTexture=new Tr(i.x,i.y,Jn)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=pi,this.type===Mo?(Y.map.depthTexture.compareFunction=V?lc:ac,Y.map.depthTexture.minFilter=We,Y.map.depthTexture.magFilter=We):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ve,Y.map.depthTexture.magFilter=Ve);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);const Z=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,_);for(let ot=0;ot<Z;ot++){const pt=Y.getCamera(ot);if(Q.isPointLight){const N=Y.camera,X=Y.matrix,k=Q.distance||N.far;k!==N.far&&(N.far=k,N.updateProjectionMatrix()),Qs.setFromMatrixPosition(Q.matrixWorld),N.position.copy(Qs),ka.copy(N.position),ka.add(kv[ot]),N.up.copy(Bv[ot]),N.lookAt(ka),N.updateMatrixWorld(),X.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Jh.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Jh,N.coordinateSystem,N.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,ot),s.clear();else{ot===0&&(s.setRenderTarget(Y.map),s.clear());const N=Y.getViewport(ot);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),D.viewport(o)}n=Y.getFrustum(ot),v(A,_,pt,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===cr&&M(Y,_),Y.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(y,C,L)};function M(b,A){const _=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,u.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),b.mapPass===null?b.mapPass=new bn(i.x,i.y,{format:Xi,type:An}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,_,d,x,null),u.uniforms.shadow_pass.value=b.mapPass.texture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,_,u,x,null)}function E(b,A,_,y){let C=null;const L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=C.uuid,z=A.uuid;let G=l[D];G===void 0&&(G={},l[D]=G);let F=G[z];F===void 0&&(F=C.clone(),G[z]=F,A.addEventListener("dispose",S)),C=F}if(C.visible=A.visible,C.wireframe=A.wireframe,y===cr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=s.properties.get(C);D.light=_}return C}function v(b,A,_,y,C){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===cr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const z=t.update(b),G=b.material;if(Array.isArray(G)){const F=z.groups;for(let Q=0,Y=F.length;Q<Y;Q++){const tt=F[Q],V=G[tt.materialIndex];if(V&&V.visible){const Z=E(b,V,y,C);b.onBeforeShadow(s,b,A,_,z,Z,tt),s.renderBufferDirect(_,null,z,Z,b,tt),b.onAfterShadow(s,b,A,_,z,Z,tt)}}}else if(G.visible){const F=E(b,G,y,C);b.onBeforeShadow(s,b,A,_,z,F,null),s.renderBufferDirect(_,null,z,F,b,null),b.onAfterShadow(s,b,A,_,z,F,null)}}const D=b.children;for(let z=0,G=D.length;z<G;z++)v(D[z],A,_,y,C)}function S(b){b.target.removeEventListener("dispose",S);for(const _ in l){const y=l[_],C=b.target.uuid;C in y&&(y[C].dispose(),delete y[C])}}}function Gv(s,t){function e(){let B=!1;const ct=new xe;let rt=null;const gt=new xe(0,0,0,0);return{setMask:function(xt){rt!==xt&&!B&&(s.colorMask(xt,xt,xt,xt),rt=xt)},setLocked:function(xt){B=xt},setClear:function(xt,ft,Pt,Tt,te){te===!0&&(xt*=Tt,ft*=Tt,Pt*=Tt),ct.set(xt,ft,Pt,Tt),gt.equals(ct)===!1&&(s.clearColor(xt,ft,Pt,Tt),gt.copy(ct))},reset:function(){B=!1,rt=null,gt.set(-1,0,0,0)}}}function n(){let B=!1,ct=!1,rt=null,gt=null,xt=null;return{setReversed:function(ft){if(ct!==ft){const Pt=t.get("EXT_clip_control");ft?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),ct=ft;const Tt=xt;xt=null,this.setClear(Tt)}},getReversed:function(){return ct},setTest:function(ft){ft?P(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(ft){rt!==ft&&!B&&(s.depthMask(ft),rt=ft)},setFunc:function(ft){if(ct&&(ft=Yd[ft]),gt!==ft){switch(ft){case nl:s.depthFunc(s.NEVER);break;case il:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case Mr:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case ol:s.depthFunc(s.GEQUAL);break;case al:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=ft}},setLocked:function(ft){B=ft},setClear:function(ft){xt!==ft&&(xt=ft,ct&&(ft=1-ft),s.clearDepth(ft))},reset:function(){B=!1,rt=null,gt=null,xt=null,ct=!1}}}function i(){let B=!1,ct=null,rt=null,gt=null,xt=null,ft=null,Pt=null,Tt=null,te=null;return{setTest:function(Qt){B||(Qt?P(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!B&&(s.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,Je,Qe){(rt!==Qt||gt!==Je||xt!==Qe)&&(s.stencilFunc(Qt,Je,Qe),rt=Qt,gt=Je,xt=Qe)},setOp:function(Qt,Je,Qe){(ft!==Qt||Pt!==Je||Tt!==Qe)&&(s.stencilOp(Qt,Je,Qe),ft=Qt,Pt=Je,Tt=Qe)},setLocked:function(Qt){B=Qt},setClear:function(Qt){te!==Qt&&(s.clearStencil(Qt),te=Qt)},reset:function(){B=!1,ct=null,rt=null,gt=null,xt=null,ft=null,Pt=null,Tt=null,te=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},f={},d={},u=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,v=null,S=null,b=null,A=null,_=new Bt(0,0,0),y=0,C=!1,L=null,D=null,z=null,G=null,F=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,tt=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=tt>=2);let Z=null,ot={};const pt=s.getParameter(s.SCISSOR_BOX),N=s.getParameter(s.VIEWPORT),X=new xe().fromArray(pt),k=new xe().fromArray(N);function H(B,ct,rt,gt){const xt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(B,ft),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Pt=0;Pt<rt;Pt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(ct+Pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return ft}const R={};R[s.TEXTURE_2D]=H(s.TEXTURE_2D,s.TEXTURE_2D,1),R[s.TEXTURE_CUBE_MAP]=H(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[s.TEXTURE_2D_ARRAY]=H(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),R[s.TEXTURE_3D]=H(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(s.DEPTH_TEST),o.setFunc(Mr),Xt(!1),ae(Xc),P(s.CULL_FACE),Ht(ui);function P(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function W(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function j(B,ct){return d[B]!==ct?(s.bindFramebuffer(B,ct),d[B]=ct,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ct),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function it(B,ct){let rt=m,gt=!1;if(B){rt=u.get(ct),rt===void 0&&(rt=[],u.set(ct,rt));const xt=B.textures;if(rt.length!==xt.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Pt=xt.length;ft<Pt;ft++)rt[ft]=s.COLOR_ATTACHMENT0+ft;rt.length=xt.length,gt=!0}}else rt[0]!==s.BACK&&(rt[0]=s.BACK,gt=!0);gt&&s.drawBuffers(rt)}function mt(B){return x!==B?(s.useProgram(B),x=B,!0):!1}const _t={[bs]:s.FUNC_ADD,[md]:s.FUNC_SUBTRACT,[gd]:s.FUNC_REVERSE_SUBTRACT};_t[xd]=s.MIN,_t[vd]=s.MAX;const bt={[_d]:s.ZERO,[Md]:s.ONE,[yd]:s.SRC_COLOR,[Xu]:s.SRC_ALPHA,[Ad]:s.SRC_ALPHA_SATURATE,[Ed]:s.DST_COLOR,[wd]:s.DST_ALPHA,[Sd]:s.ONE_MINUS_SRC_COLOR,[qu]:s.ONE_MINUS_SRC_ALPHA,[Td]:s.ONE_MINUS_DST_COLOR,[bd]:s.ONE_MINUS_DST_ALPHA,[Rd]:s.CONSTANT_COLOR,[Cd]:s.ONE_MINUS_CONSTANT_COLOR,[Ld]:s.CONSTANT_ALPHA,[Pd]:s.ONE_MINUS_CONSTANT_ALPHA};function Ht(B,ct,rt,gt,xt,ft,Pt,Tt,te,Qt){if(B===ui){g===!0&&(W(s.BLEND),g=!1);return}if(g===!1&&(P(s.BLEND),g=!0),B!==pd){if(B!==p||Qt!==C){if((M!==bs||S!==bs)&&(s.blendEquation(s.FUNC_ADD),M=bs,S=bs),Qt)switch(B){case fr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case el:s.blendFunc(s.ONE,s.ONE);break;case qc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:le("WebGLState: Invalid blending: ",B);break}else switch(B){case fr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case el:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case qc:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",B);break}E=null,v=null,b=null,A=null,_.set(0,0,0),y=0,p=B,C=Qt}return}xt=xt||ct,ft=ft||rt,Pt=Pt||gt,(ct!==M||xt!==S)&&(s.blendEquationSeparate(_t[ct],_t[xt]),M=ct,S=xt),(rt!==E||gt!==v||ft!==b||Pt!==A)&&(s.blendFuncSeparate(bt[rt],bt[gt],bt[ft],bt[Pt]),E=rt,v=gt,b=ft,A=Pt),(Tt.equals(_)===!1||te!==y)&&(s.blendColor(Tt.r,Tt.g,Tt.b,te),_.copy(Tt),y=te),p=B,C=!1}function Gt(B,ct){B.side===Yn?W(s.CULL_FACE):P(s.CULL_FACE);let rt=B.side===un;ct&&(rt=!rt),Xt(rt),B.blending===fr&&B.transparent===!1?Ht(ui):Ht(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const gt=B.stencilWrite;a.setTest(gt),gt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Le(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?P(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(B){L!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),L=B)}function ae(B){B!==ud?(P(s.CULL_FACE),B!==D&&(B===Xc?s.cullFace(s.BACK):B===fd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),D=B}function Me(B){B!==z&&(Y&&s.lineWidth(B),z=B)}function Le(B,ct,rt){B?(P(s.POLYGON_OFFSET_FILL),(G!==ct||F!==rt)&&(G=ct,F=rt,o.getReversed()&&(ct=-ct),s.polygonOffset(ct,rt))):W(s.POLYGON_OFFSET_FILL)}function ye(B){B?P(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function he(B){B===void 0&&(B=s.TEXTURE0+Q-1),Z!==B&&(s.activeTexture(B),Z=B)}function K(B,ct,rt){rt===void 0&&(Z===null?rt=s.TEXTURE0+Q-1:rt=Z);let gt=ot[rt];gt===void 0&&(gt={type:void 0,texture:void 0},ot[rt]=gt),(gt.type!==B||gt.texture!==ct)&&(Z!==rt&&(s.activeTexture(rt),Z=rt),s.bindTexture(B,ct||R[B]),gt.type=B,gt.texture=ct)}function be(){const B=ot[Z];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function re(){try{s.compressedTexImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function w(){try{s.texSubImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function J(){try{s.texSubImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function st(){try{s.compressedTexSubImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function ht(){try{s.compressedTexSubImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function vt(){try{s.texStorage2D(...arguments)}catch(B){le("WebGLState:",B)}}function yt(){try{s.texStorage3D(...arguments)}catch(B){le("WebGLState:",B)}}function ut(){try{s.texImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function dt(){try{s.texImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function St(B){return f[B]!==void 0?f[B]:s.getParameter(B)}function Ot(B,ct){f[B]!==ct&&(s.pixelStorei(B,ct),f[B]=ct)}function Mt(B){X.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),X.copy(B))}function wt(B){k.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),k.copy(B))}function Ft(B,ct){let rt=l.get(ct);rt===void 0&&(rt=new WeakMap,l.set(ct,rt));let gt=rt.get(B);gt===void 0&&(gt=s.getUniformBlockIndex(ct,B.name),rt.set(B,gt))}function q(B,ct){const gt=l.get(ct).get(B);c.get(ct)!==gt&&(s.uniformBlockBinding(ct,gt,B.__bindingPointIndex),c.set(ct,gt))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},Z=null,ot={},d={},u=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,v=null,S=null,b=null,A=null,_=new Bt(0,0,0),y=0,C=!1,L=null,D=null,z=null,G=null,F=null,X.set(0,0,s.canvas.width,s.canvas.height),k.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:W,bindFramebuffer:j,drawBuffers:it,useProgram:mt,setBlending:Ht,setMaterial:Gt,setFlipSided:Xt,setCullFace:ae,setLineWidth:Me,setPolygonOffset:Le,setScissorTest:ye,activeTexture:he,bindTexture:K,unbindTexture:be,compressedTexImage2D:re,compressedTexImage3D:O,texImage2D:ut,texImage3D:dt,pixelStorei:Ot,getParameter:St,updateUBOMapping:Ft,uniformBlockBinding:q,texStorage2D:vt,texStorage3D:yt,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:st,compressedTexSubImage3D:ht,scissor:Mt,viewport:wt,reset:at}}function Vv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,f=new Set;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,w){return m?new OffscreenCanvas(O,w):br("canvas")}function g(O,w,J){let st=1;const ht=re(O);if((ht.width>J||ht.height>J)&&(st=J/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const vt=Math.floor(st*ht.width),yt=Math.floor(st*ht.height);d===void 0&&(d=x(vt,yt));const ut=w?x(vt,yt):d;return ut.width=vt,ut.height=yt,ut.getContext("2d").drawImage(O,0,0,vt,yt),Vt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+vt+"x"+yt+")."),ut}else return"data"in O&&Vt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),O;return O}function p(O){return O.generateMipmaps}function M(O){s.generateMipmap(O)}function E(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(O,w,J,st,ht,vt=!1){if(O!==null){if(s[O]!==void 0)return s[O];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let yt;st&&(yt=t.get("EXT_texture_norm16"),yt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=w;if(w===s.RED&&(J===s.FLOAT&&(ut=s.R32F),J===s.HALF_FLOAT&&(ut=s.R16F),J===s.UNSIGNED_BYTE&&(ut=s.R8),J===s.UNSIGNED_SHORT&&yt&&(ut=yt.R16_EXT),J===s.SHORT&&yt&&(ut=yt.R16_SNORM_EXT)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ut=s.R8UI),J===s.UNSIGNED_SHORT&&(ut=s.R16UI),J===s.UNSIGNED_INT&&(ut=s.R32UI),J===s.BYTE&&(ut=s.R8I),J===s.SHORT&&(ut=s.R16I),J===s.INT&&(ut=s.R32I)),w===s.RG&&(J===s.FLOAT&&(ut=s.RG32F),J===s.HALF_FLOAT&&(ut=s.RG16F),J===s.UNSIGNED_BYTE&&(ut=s.RG8),J===s.UNSIGNED_SHORT&&yt&&(ut=yt.RG16_EXT),J===s.SHORT&&yt&&(ut=yt.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ut=s.RG8UI),J===s.UNSIGNED_SHORT&&(ut=s.RG16UI),J===s.UNSIGNED_INT&&(ut=s.RG32UI),J===s.BYTE&&(ut=s.RG8I),J===s.SHORT&&(ut=s.RG16I),J===s.INT&&(ut=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),J===s.UNSIGNED_INT&&(ut=s.RGB32UI),J===s.BYTE&&(ut=s.RGB8I),J===s.SHORT&&(ut=s.RGB16I),J===s.INT&&(ut=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),J===s.UNSIGNED_INT&&(ut=s.RGBA32UI),J===s.BYTE&&(ut=s.RGBA8I),J===s.SHORT&&(ut=s.RGBA16I),J===s.INT&&(ut=s.RGBA32I)),w===s.RGB&&(J===s.UNSIGNED_SHORT&&yt&&(ut=yt.RGB16_EXT),J===s.SHORT&&yt&&(ut=yt.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ut=s.R11F_G11F_B10F)),w===s.RGBA){const dt=vt?Do:oe.getTransfer(ht);J===s.FLOAT&&(ut=s.RGBA32F),J===s.HALF_FLOAT&&(ut=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ut=dt===fe?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&yt&&(ut=yt.RGBA16_EXT),J===s.SHORT&&yt&&(ut=yt.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function S(O,w){let J;return O?w===null||w===Jn||w===Sr?J=s.DEPTH24_STENCIL8:w===Nn?J=s.DEPTH32F_STENCIL8:w===yr&&(J=s.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Jn||w===Sr?J=s.DEPTH_COMPONENT24:w===Nn?J=s.DEPTH_COMPONENT32F:w===yr&&(J=s.DEPTH_COMPONENT16),J}function b(O,w){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ve&&O.minFilter!==We?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function A(O){const w=O.target;w.removeEventListener("dispose",A),y(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function _(O){const w=O.target;w.removeEventListener("dispose",_),L(w)}function y(O){const w=n.get(O);if(w.__webglInit===void 0)return;const J=O.source,st=u.get(J);if(st){const ht=st[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&C(O),Object.keys(st).length===0&&u.delete(J)}n.remove(O)}function C(O){const w=n.get(O);s.deleteTexture(w.__webglTexture);const J=O.source,st=u.get(J);delete st[w.__cacheKey],o.memory.textures--}function L(O){const w=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(w.__webglFramebuffer[st]))for(let ht=0;ht<w.__webglFramebuffer[st].length;ht++)s.deleteFramebuffer(w.__webglFramebuffer[st][ht]);else s.deleteFramebuffer(w.__webglFramebuffer[st]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[st])}else{if(Array.isArray(w.__webglFramebuffer))for(let st=0;st<w.__webglFramebuffer.length;st++)s.deleteFramebuffer(w.__webglFramebuffer[st]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let st=0;st<w.__webglColorRenderbuffer.length;st++)w.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[st]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=O.textures;for(let st=0,ht=J.length;st<ht;st++){const vt=n.get(J[st]);vt.__webglTexture&&(s.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(J[st])}n.remove(O)}let D=0;function z(){D=0}function G(){return D}function F(O){D=O}function Q(){const O=D;return O>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,O}function Y(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function tt(O,w){const J=n.get(O);if(O.isVideoTexture&&K(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&J.__version!==O.version){const st=O.image;if(st===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(J,O,w);return}}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function V(O,w){const J=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){W(J,O,w);return}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function Z(O,w){const J=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){W(J,O,w);return}e.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function ot(O,w){const J=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&J.__version!==O.version){j(J,O,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const pt={[cl]:s.REPEAT,[hi]:s.CLAMP_TO_EDGE,[hl]:s.MIRRORED_REPEAT},N={[Ve]:s.NEAREST,[Ud]:s.NEAREST_MIPMAP_NEAREST,[Nr]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[la]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},X={[Od]:s.NEVER,[Vd]:s.ALWAYS,[kd]:s.LESS,[ac]:s.LEQUAL,[Bd]:s.EQUAL,[lc]:s.GEQUAL,[Hd]:s.GREATER,[Gd]:s.NOTEQUAL};function k(O,w){if(w.type===Nn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===We||w.magFilter===la||w.magFilter===Nr||w.magFilter===Ii||w.minFilter===We||w.minFilter===la||w.minFilter===Nr||w.minFilter===Ii)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,pt[w.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,pt[w.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,pt[w.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,N[w.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,X[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ve||w.minFilter!==Nr&&w.minFilter!==Ii||w.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function H(O,w){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",A));const st=w.source;let ht=u.get(st);ht===void 0&&(ht={},u.set(st,ht));const vt=Y(w);if(vt!==O.__cacheKey){ht[vt]===void 0&&(ht[vt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ht[vt].usedTimes++;const yt=ht[O.__cacheKey];yt!==void 0&&(ht[O.__cacheKey].usedTimes--,yt.usedTimes===0&&C(w)),O.__cacheKey=vt,O.__webglTexture=ht[vt].texture}return J}function R(O,w,J){return Math.floor(Math.floor(O/J)/w)}function P(O,w,J,st){const vt=O.updateRanges;if(vt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,J,st,w.data);else{vt.sort((Ot,Mt)=>Ot.start-Mt.start);let yt=0;for(let Ot=1;Ot<vt.length;Ot++){const Mt=vt[yt],wt=vt[Ot],Ft=Mt.start+Mt.count,q=R(wt.start,w.width,4),at=R(Mt.start,w.width,4);wt.start<=Ft+1&&q===at&&R(wt.start+wt.count-1,w.width,4)===q?Mt.count=Math.max(Mt.count,wt.start+wt.count-Mt.start):(++yt,vt[yt]=wt)}vt.length=yt+1;const ut=e.getParameter(s.UNPACK_ROW_LENGTH),dt=e.getParameter(s.UNPACK_SKIP_PIXELS),St=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Ot=0,Mt=vt.length;Ot<Mt;Ot++){const wt=vt[Ot],Ft=Math.floor(wt.start/4),q=Math.ceil(wt.count/4),at=Ft%w.width,B=Math.floor(Ft/w.width),ct=q,rt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,at),e.pixelStorei(s.UNPACK_SKIP_ROWS,B),e.texSubImage2D(s.TEXTURE_2D,0,at,B,ct,rt,J,st,w.data)}O.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,ut),e.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function W(O,w,J){let st=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(st=s.TEXTURE_3D);const ht=H(O,w),vt=w.source;e.bindTexture(st,O.__webglTexture,s.TEXTURE0+J);const yt=n.get(vt);if(vt.version!==yt.__version||ht===!0){if(e.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const rt=oe.getPrimaries(oe.workingColorSpace),gt=w.colorSpace===Li?null:oe.getPrimaries(w.colorSpace),xt=w.colorSpace===Li||rt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let dt=g(w.image,!1,i.maxTextureSize);dt=be(w,dt);const St=r.convert(w.format,w.colorSpace),Ot=r.convert(w.type);let Mt=v(w.internalFormat,St,Ot,w.normalized,w.colorSpace,w.isVideoTexture);k(st,w);let wt;const Ft=w.mipmaps,q=w.isVideoTexture!==!0,at=yt.__version===void 0||ht===!0,B=vt.dataReady,ct=b(w,dt);if(w.isDepthTexture)Mt=S(w.format===Gi,w.type),at&&(q?e.texStorage2D(s.TEXTURE_2D,1,Mt,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,Mt,dt.width,dt.height,0,St,Ot,null));else if(w.isDataTexture)if(Ft.length>0){q&&at&&e.texStorage2D(s.TEXTURE_2D,ct,Mt,Ft[0].width,Ft[0].height);for(let rt=0,gt=Ft.length;rt<gt;rt++)wt=Ft[rt],q?B&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,wt.width,wt.height,St,Ot,wt.data):e.texImage2D(s.TEXTURE_2D,rt,Mt,wt.width,wt.height,0,St,Ot,wt.data);w.generateMipmaps=!1}else q?(at&&e.texStorage2D(s.TEXTURE_2D,ct,Mt,dt.width,dt.height),B&&P(w,dt,St,Ot)):e.texImage2D(s.TEXTURE_2D,0,Mt,dt.width,dt.height,0,St,Ot,dt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){q&&at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Mt,Ft[0].width,Ft[0].height,dt.depth);for(let rt=0,gt=Ft.length;rt<gt;rt++)if(wt=Ft[rt],w.format!==xn)if(St!==null)if(q){if(B)if(w.layerUpdates.size>0){const xt=Ch(wt.width,wt.height,w.format,w.type);for(const ft of w.layerUpdates){const Pt=wt.data.subarray(ft*xt/wt.data.BYTES_PER_ELEMENT,(ft+1)*xt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,ft,wt.width,wt.height,1,St,Pt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,wt.width,wt.height,dt.depth,St,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,Mt,wt.width,wt.height,dt.depth,0,wt.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,wt.width,wt.height,dt.depth,St,Ot,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,Mt,wt.width,wt.height,dt.depth,0,St,Ot,wt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{q&&at&&e.texStorage2D(s.TEXTURE_2D,ct,Mt,Ft[0].width,Ft[0].height);for(let rt=0,gt=Ft.length;rt<gt;rt++)wt=Ft[rt],w.format!==xn?St!==null?q?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,Mt,wt.width,wt.height,0,wt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?B&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,wt.width,wt.height,St,Ot,wt.data):e.texImage2D(s.TEXTURE_2D,rt,Mt,wt.width,wt.height,0,St,Ot,wt.data)}else if(w.isDataArrayTexture)if(q){if(at&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Mt,dt.width,dt.height,dt.depth),B)if(w.layerUpdates.size>0){const rt=Ch(dt.width,dt.height,w.format,w.type);for(const gt of w.layerUpdates){const xt=dt.data.subarray(gt*rt/dt.data.BYTES_PER_ELEMENT,(gt+1)*rt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,dt.width,dt.height,1,St,Ot,xt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,St,Ot,dt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,dt.width,dt.height,dt.depth,0,St,Ot,dt.data);else if(w.isData3DTexture)q?(at&&e.texStorage3D(s.TEXTURE_3D,ct,Mt,dt.width,dt.height,dt.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,St,Ot,dt.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,dt.width,dt.height,dt.depth,0,St,Ot,dt.data);else if(w.isFramebufferTexture){if(at)if(q)e.texStorage2D(s.TEXTURE_2D,ct,Mt,dt.width,dt.height);else{let rt=dt.width,gt=dt.height;for(let xt=0;xt<ct;xt++)e.texImage2D(s.TEXTURE_2D,xt,Mt,rt,gt,0,St,Ot,null),rt>>=1,gt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const rt=s.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),dt.parentNode!==rt){rt.appendChild(dt),f.add(w),rt.onpaint=gt=>{const xt=gt.changedElements;for(const ft of f)xt.includes(ft.image)&&(ft.needsUpdate=!0)},rt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,dt);else{const xt=s.RGBA,ft=s.RGBA,Pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,xt,ft,Pt,dt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(q&&at){const rt=re(Ft[0]);e.texStorage2D(s.TEXTURE_2D,ct,Mt,rt.width,rt.height)}for(let rt=0,gt=Ft.length;rt<gt;rt++)wt=Ft[rt],q?B&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,St,Ot,wt):e.texImage2D(s.TEXTURE_2D,rt,Mt,St,Ot,wt);w.generateMipmaps=!1}else if(q){if(at){const rt=re(dt);e.texStorage2D(s.TEXTURE_2D,ct,Mt,rt.width,rt.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Ot,dt)}else e.texImage2D(s.TEXTURE_2D,0,Mt,St,Ot,dt);p(w)&&M(st),yt.__version=vt.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function j(O,w,J){if(w.image.length!==6)return;const st=H(O,w),ht=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+J);const vt=n.get(ht);if(ht.version!==vt.__version||st===!0){e.activeTexture(s.TEXTURE0+J);const yt=oe.getPrimaries(oe.workingColorSpace),ut=w.colorSpace===Li?null:oe.getPrimaries(w.colorSpace),dt=w.colorSpace===Li||yt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const St=w.isCompressedTexture||w.image[0].isCompressedTexture,Ot=w.image[0]&&w.image[0].isDataTexture,Mt=[];for(let ft=0;ft<6;ft++)!St&&!Ot?Mt[ft]=g(w.image[ft],!0,i.maxCubemapSize):Mt[ft]=Ot?w.image[ft].image:w.image[ft],Mt[ft]=be(w,Mt[ft]);const wt=Mt[0],Ft=r.convert(w.format,w.colorSpace),q=r.convert(w.type),at=v(w.internalFormat,Ft,q,w.normalized,w.colorSpace),B=w.isVideoTexture!==!0,ct=vt.__version===void 0||st===!0,rt=ht.dataReady;let gt=b(w,wt);k(s.TEXTURE_CUBE_MAP,w);let xt;if(St){B&&ct&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,at,wt.width,wt.height);for(let ft=0;ft<6;ft++){xt=Mt[ft].mipmaps;for(let Pt=0;Pt<xt.length;Pt++){const Tt=xt[Pt];w.format!==xn?Ft!==null?B?rt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,Tt.width,Tt.height,Ft,Tt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,at,Tt.width,Tt.height,0,Tt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,0,0,Tt.width,Tt.height,Ft,q,Tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt,at,Tt.width,Tt.height,0,Ft,q,Tt.data)}}}else{if(xt=w.mipmaps,B&&ct){xt.length>0&&gt++;const ft=re(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,at,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Ot){B?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Mt[ft].width,Mt[ft].height,Ft,q,Mt[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,Mt[ft].width,Mt[ft].height,0,Ft,q,Mt[ft].data);for(let Pt=0;Pt<xt.length;Pt++){const te=xt[Pt].image[ft].image;B?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,te.width,te.height,Ft,q,te.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,at,te.width,te.height,0,Ft,q,te.data)}}else{B?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ft,q,Mt[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,at,Ft,q,Mt[ft]);for(let Pt=0;Pt<xt.length;Pt++){const Tt=xt[Pt];B?rt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,0,0,Ft,q,Tt.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt+1,at,Ft,q,Tt.image[ft])}}}p(w)&&M(s.TEXTURE_CUBE_MAP),vt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function it(O,w,J,st,ht,vt){const yt=r.convert(J.format,J.colorSpace),ut=r.convert(J.type),dt=v(J.internalFormat,yt,ut,J.normalized,J.colorSpace),St=n.get(w),Ot=n.get(J);if(Ot.__renderTarget=w,!St.__hasExternalTextures){const Mt=Math.max(1,w.width>>vt),wt=Math.max(1,w.height>>vt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,vt,dt,Mt,wt,w.depth,0,yt,ut,null):e.texImage2D(ht,vt,dt,Mt,wt,0,yt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,O),he(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,ht,Ot.__webglTexture,0,ye(w)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,ht,Ot.__webglTexture,vt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(O,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,O),w.depthBuffer){const st=w.depthTexture,ht=st&&st.isDepthTexture?st.type:null,vt=S(w.stencilBuffer,ht),yt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;he(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(w),vt,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(w),vt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,vt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,O)}else{const st=w.textures;for(let ht=0;ht<st.length;ht++){const vt=st[ht],yt=r.convert(vt.format,vt.colorSpace),ut=r.convert(vt.type),dt=v(vt.internalFormat,yt,ut,vt.normalized,vt.colorSpace);he(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye(w),dt,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,ye(w),dt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,dt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(O,w,J){const st=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=n.get(w.depthTexture);if(ht.__renderTarget=w,(!ht.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),st){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),ht.__webglTexture===void 0){ht.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),k(s.TEXTURE_CUBE_MAP,w.depthTexture);const St=r.convert(w.depthTexture.format),Ot=r.convert(w.depthTexture.type);let Mt;w.depthTexture.format===pi?Mt=s.DEPTH_COMPONENT24:w.depthTexture.format===Gi&&(Mt=s.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Mt,w.width,w.height,0,St,Ot,null)}}else tt(w.depthTexture,0);const vt=ht.__webglTexture,yt=ye(w),ut=st?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,dt=w.depthTexture.format===Gi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===pi)he(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,ut,vt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,dt,ut,vt,0);else if(w.depthTexture.format===Gi)he(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,ut,vt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,dt,ut,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(O){const w=n.get(O),J=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const st=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),st){const ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=st}if(O.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let st=0;st<6;st++)_t(w.__webglFramebuffer[st],O,st);else{const st=O.texture.mipmaps;st&&st.length>0?_t(w.__webglFramebuffer[0],O,0):_t(w.__webglFramebuffer,O,0)}else if(J){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]===void 0)w.__webglDepthbuffer[st]=s.createRenderbuffer(),mt(w.__webglDepthbuffer[st],O,!1);else{const ht=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,vt)}}else{const st=O.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),mt(w.__webglDepthbuffer,O,!1);else{const ht=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,vt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,vt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(O,w,J){const st=n.get(O);w!==void 0&&it(st.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&bt(O)}function Gt(O){const w=O.texture,J=n.get(O),st=n.get(w);O.addEventListener("dispose",_);const ht=O.textures,vt=O.isWebGLCubeRenderTarget===!0,yt=ht.length>1;if(yt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=w.version,o.memory.textures++),vt){J.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[ut]=[];for(let dt=0;dt<w.mipmaps.length;dt++)J.__webglFramebuffer[ut][dt]=s.createFramebuffer()}else J.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let ut=0;ut<w.mipmaps.length;ut++)J.__webglFramebuffer[ut]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(yt)for(let ut=0,dt=ht.length;ut<dt;ut++){const St=n.get(ht[ut]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(O.samples>0&&he(O)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ut=0;ut<ht.length;ut++){const dt=ht[ut];J.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ut]);const St=r.convert(dt.format,dt.colorSpace),Ot=r.convert(dt.type),Mt=v(dt.internalFormat,St,Ot,dt.normalized,dt.colorSpace,O.isXRRenderTarget===!0),wt=ye(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,Mt,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,J.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),mt(J.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(vt){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),k(s.TEXTURE_CUBE_MAP,w);for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)it(J.__webglFramebuffer[ut][dt],O,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,dt);else it(J.__webglFramebuffer[ut],O,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);p(w)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ut=0,dt=ht.length;ut<dt;ut++){const St=ht[ut],Ot=n.get(St);let Mt=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ot.__webglTexture),k(Mt,St),it(J.__webglFramebuffer,O,St,s.COLOR_ATTACHMENT0+ut,Mt,0),p(St)&&M(Mt)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ut=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,st.__webglTexture),k(ut,w),w.mipmaps&&w.mipmaps.length>0)for(let dt=0;dt<w.mipmaps.length;dt++)it(J.__webglFramebuffer[dt],O,w,s.COLOR_ATTACHMENT0,ut,dt);else it(J.__webglFramebuffer,O,w,s.COLOR_ATTACHMENT0,ut,0);p(w)&&M(ut),e.unbindTexture()}O.depthBuffer&&bt(O)}function Xt(O){const w=O.textures;for(let J=0,st=w.length;J<st;J++){const ht=w[J];if(p(ht)){const vt=E(O),yt=n.get(ht).__webglTexture;e.bindTexture(vt,yt),M(vt),e.unbindTexture()}}}const ae=[],Me=[];function Le(O){if(O.samples>0){if(he(O)===!1){const w=O.textures,J=O.width,st=O.height;let ht=s.COLOR_BUFFER_BIT;const vt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(O),ut=w.length>1;if(ut)for(let St=0;St<w.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const dt=O.texture.mipmaps;dt&&dt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<w.length;St++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Ot=n.get(w[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,J,st,0,0,J,st,ht,s.NEAREST),c===!0&&(ae.length=0,Me.length=0,ae.push(s.COLOR_ATTACHMENT0+St),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ae.push(vt),Me.push(vt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Me)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let St=0;St<w.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Ot=n.get(w[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){const w=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ye(O){return Math.min(i.maxSamples,O.samples)}function he(O){const w=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function K(O){const w=o.render.frame;h.get(O)!==w&&(h.set(O,w),O.update())}function be(O,w){const J=O.colorSpace,st=O.format,ht=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==Io&&J!==Li&&(oe.getTransfer(J)===fe?(st!==xn||ht!==hn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",J)),w}function re(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=z,this.getTextureUnits=G,this.setTextureUnits=F,this.setTexture2D=tt,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=ot,this.rebindTextures=Ht,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wv(s,t){function e(n,i=Li){let r;const o=oe.getTransfer(i);if(n===hn)return s.UNSIGNED_BYTE;if(n===nc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===tf)return s.BYTE;if(n===ef)return s.SHORT;if(n===yr)return s.UNSIGNED_SHORT;if(n===ec)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===rf)return s.ALPHA;if(n===of)return s.RGB;if(n===xn)return s.RGBA;if(n===pi)return s.DEPTH_COMPONENT;if(n===Gi)return s.DEPTH_STENCIL;if(n===jo)return s.RED;if(n===sc)return s.RED_INTEGER;if(n===Xi)return s.RG;if(n===rc)return s.RG_INTEGER;if(n===oc)return s.RGBA_INTEGER;if(n===yo||n===So||n===wo||n===bo)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===fl||n===dl||n===pl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===gl||n===xl||n===vl||n===_l||n===Lo||n===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ml||n===gl)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===vl)return r.COMPRESSED_R11_EAC;if(n===_l)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lo)return r.COMPRESSED_RG11_EAC;if(n===Ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yl||n===Sl||n===wl||n===bl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Ll||n===Pl||n===Il||n===Dl||n===Ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===El)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dl)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Fl||n===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nl)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ol||n===kl||n===Po||n===Bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Po)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`;class Yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new xf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xe({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends Yi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Yv,p={},M=e.getContextAttributes();let E=null,v=null;const S=[],b=[],A=new Nt;let _=null,y=null;const C=new rn;C.viewport=new xe;const L=new rn;L.viewport=new xe;const D=[C,L],z=new nm;let G=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let P=S[R];return P===void 0&&(P=new ma,S[R]=P),P.getTargetRaySpace()},this.getControllerGrip=function(R){let P=S[R];return P===void 0&&(P=new ma,S[R]=P),P.getGripSpace()},this.getHand=function(R){let P=S[R];return P===void 0&&(P=new ma,S[R]=P),P.getHandSpace()};function Q(R){const P=b.indexOf(R.inputSource);if(P===-1)return;const W=S[P];W!==void 0&&(W.update(R.inputSource,R.frame,l||o),W.dispatchEvent({type:R.type,data:R.inputSource}))}function Y(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",tt);for(let R=0;R<S.length;R++){const P=b[R];P!==null&&(b[R]=null,S[R].disconnect(P))}G=null,F=null,g.reset();for(const R in p)delete p[R];if(t.setRenderTarget(E),u=null,d=null,f=null,i=null,v=null,H.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),y!==null){const R=y.camera;R.fov=y.fov,R.zoom=y.zoom,R.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(R){if(i=R,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",tt),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,j=null,it=null;M.depth&&(it=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=M.stencil?Gi:pi,j=M.stencil?Sr:Jn);const mt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new bn(d.textureWidth,d.textureHeight,{format:xn,type:hn,depthTexture:new Tr(d.textureWidth,d.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const W={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,W),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new bn(u.framebufferWidth,u.framebufferHeight,{format:xn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(R){for(let P=0;P<R.removed.length;P++){const W=R.removed[P],j=b.indexOf(W);j>=0&&(b[j]=null,S[j].disconnect(W))}for(let P=0;P<R.added.length;P++){const W=R.added[P];let j=b.indexOf(W);if(j===-1){for(let mt=0;mt<S.length;mt++)if(mt>=b.length){b.push(W),j=mt;break}else if(b[mt]===null){b[mt]=W,j=mt;break}if(j===-1)break}const it=S[j];it&&it.connect(W)}}const V=new U,Z=new U;function ot(R,P,W){V.setFromMatrixPosition(P.matrixWorld),Z.setFromMatrixPosition(W.matrixWorld);const j=V.distanceTo(Z),it=P.projectionMatrix.elements,mt=W.projectionMatrix.elements,_t=it[14]/(it[10]-1),bt=it[14]/(it[10]+1),Ht=(it[9]+1)/it[5],Gt=(it[9]-1)/it[5],Xt=(it[8]-1)/it[0],ae=(mt[8]+1)/mt[0],Me=_t*Xt,Le=_t*ae,ye=j/(-Xt+ae),he=ye*-Xt;if(P.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(he),R.translateZ(ye),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),it[10]===-1)R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const K=_t+ye,be=bt+ye,re=Me-he,O=Le+(j-he),w=Ht*bt/be*K,J=Gt*bt/be*K;R.projectionMatrix.makePerspective(re,O,w,J,K,be),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function pt(R,P){P===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(P.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(i===null)return;let P=R.near,W=R.far;g.texture!==null&&(g.depthNear>0&&(P=g.depthNear),g.depthFar>0&&(W=g.depthFar)),z.near=L.near=C.near=P,z.far=L.far=C.far=W,(G!==z.near||F!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,F=z.far),z.layers.mask=R.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const j=R.parent,it=z.cameras;pt(z,j);for(let mt=0;mt<it.length;mt++)pt(it[mt],j);it.length===2?ot(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),y===null&&R.isPerspectiveCamera&&(y={camera:R,fov:R.fov,zoom:R.zoom}),N(R,z,j)};function N(R,P,W){W===null?R.matrix.copy(P.matrixWorld):(R.matrix.copy(W.matrixWorld),R.matrix.invert(),R.matrix.multiply(P.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Er*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(R){c=R,d!==null&&(d.fixedFoveation=R),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=R)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(R){return p[R]};let X=null;function k(R,P){if(h=P.getViewerPose(l||o),m=P,h!==null){const W=h.views;u!==null&&(t.setRenderTargetFramebuffer(v,u.framebuffer),t.setRenderTarget(v));let j=!1;W.length!==z.cameras.length&&(z.cameras.length=0,j=!0);for(let bt=0;bt<W.length;bt++){const Ht=W[bt];let Gt=null;if(u!==null)Gt=u.getViewport(Ht);else{const ae=f.getViewSubImage(d,Ht);Gt=ae.viewport,bt===0&&(t.setRenderTargetTextures(v,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(v))}let Xt=D[bt];Xt===void 0&&(Xt=new rn,Xt.layers.enable(bt),Xt.viewport=new xe,D[bt]=Xt),Xt.matrix.fromArray(Ht.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ht.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),bt===0&&(z.matrix.copy(Xt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),j===!0&&z.cameras.push(Xt)}const it=i.enabledFeatures;if(it&&it.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const bt=f.getDepthInformation(W[0]);bt&&bt.isValid&&bt.texture&&g.init(bt,i.renderState)}if(it&&it.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let bt=0;bt<W.length;bt++){const Ht=W[bt].camera;if(Ht){let Gt=p[Ht];Gt||(Gt=new xf,p[Ht]=Gt);const Xt=f.getCameraImage(Ht);Gt.sourceTexture=Xt}}}}for(let W=0;W<S.length;W++){const j=b[W],it=S[W];j!==null&&it!==void 0&&it.update(j,P,l||o)}X&&X(R,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),m=null}const H=new yf;H.setAnimationLoop(k),this.setAnimationLoop=function(R){X=R},this.dispose=function(){}}}const Kv=new Kt,Rf=new Yt;Rf.set(-1,0,0,0,1,0,0,0,1);function Zv(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,vf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,E):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===un&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===un&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){const b=S.program;n.uniformBlockBinding(v,b)}function l(v,S){let b=i[v.id];b===void 0&&(g(v),b=h(v),i[v.id]=b,v.addEventListener("dispose",M));const A=S.program;n.updateUBOMapping(v,A);const _=t.render.frame;r[v.id]!==_&&(d(v),r[v.id]=_)}function h(v){const S=f();v.__bindingPointIndex=S;const b=s.createBuffer(),A=v.__size,_=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const S=i[v.id],b=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let _=0,y=b.length;_<y;_++){const C=b[_];if(Array.isArray(C))for(let L=0,D=C.length;L<D;L++)u(C[L],_,L,A);else u(C,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,S,b,A){if(x(v,S,b,A)===!0){const _=v.__offset,y=v.value;if(Array.isArray(y)){let C=0;for(let L=0;L<y.length;L++){const D=y[L],z=p(D);m(D,v.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,v.__data)}}function m(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function x(v,S,b,A){const _=v.value,y=S+"_"+b;if(A[y]===void 0)return typeof _=="number"||typeof _=="boolean"?A[y]=_:ArrayBuffer.isView(_)?A[y]=_.slice():A[y]=_.clone(),!0;{const C=A[y];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[y]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(v){const S=v.uniforms;let b=0;const A=16;for(let y=0,C=S.length;y<C;y++){const L=Array.isArray(S[y])?S[y]:[S[y]];for(let D=0,z=L.length;D<z;D++){const G=L[D],F=Array.isArray(G.value)?G.value:[G.value];for(let Q=0,Y=F.length;Q<Y;Q++){const tt=F[Q],V=p(tt),Z=b%A,ot=Z%V.boundary,pt=Z+ot;b+=ot,pt!==0&&A-pt<V.storage&&(b+=A-pt),G.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=V.storage}}}const _=b%A;return _>0&&(b+=A-_),v.__size=b,v.__cache={},this}function p(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){const S=v.target;S.removeEventListener("dispose",M);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function E(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:E}}const Qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function jv(){return Bn===null&&(Bn=new Ds(Qv,16,16,Xi,An),Bn.name="DFG_LUT",Bn.minFilter=We,Bn.magFilter=We,Bn.wrapS=hi,Bn.wrapT=hi,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class t_{constructor(t={}){const{canvas:e=Xd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=hn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=u,g=new Set([oc,rc,sc]),p=new Set([hn,Jn,yr,Sr,nc,ic]),M=new Uint32Array(4),E=new Int32Array(4),v=new U;let S=null,b=null;const A=[],_=[];let y=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,D=null,z=null,G=null,F=null;this._outputColorSpace=Ue;let Q=0,Y=0,tt=null,V=-1,Z=null;const ot=new xe,pt=new xe;let N=null;const X=new Bt(0);let k=0,H=e.width,R=e.height,P=1,W=null,j=null;const it=new xe(0,0,H,R),mt=new xe(0,0,H,R);let _t=!1;const bt=new pc;let Ht=!1,Gt=!1;const Xt=new Kt,ae=new U,Me=new xe,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function he(){return tt===null?P:1}let K=n;function be(T,$){return e.getContext(T,$)}let re,O,w,J,st,ht,vt,yt,ut,dt,St,Ot,Mt,wt,Ft,q,at,B,ct,rt,gt,xt,ft;try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ql}`),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",Qt,!1),e.addEventListener("webglcontextcreationerror",Je,!1),K===null){const $="webgl2";if(K=be($,T),K===null)throw be($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pt()}catch(T){throw e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),le("WebGLRenderer: "+T.message),T}function Pt(){re=new jg(K),re.init(),gt=new Wv(K,re),O=new Vg(K,re,t,gt),w=new Gv(K,re),O.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),z=K.createFramebuffer(),G=K.createFramebuffer(),F=K.createFramebuffer(),J=new nx(K),st=new Rv,ht=new Vv(K,re,w,st,O,gt,J),vt=new Qg(C),yt=new sm(K),xt=new Hg(K,yt),ut=new tx(K,yt,J,xt),dt=new sx(K,ut,yt,xt,J),B=new ix(K,O,ht),Ft=new Wg(st),St=new Av(C,vt,re,O,xt,Ft),Ot=new Zv(C,st),Mt=new Lv,wt=new Fv(re),at=new Bg(C,vt,w,dt,m,c),q=new Hv(C,dt,O),ft=new Jv(K,J,O,w),ct=new Gg(K,re,J),rt=new ex(K,re,J),J.programs=St.programs,C.capabilities=O,C.extensions=re,C.properties=st,C.renderLists=Mt,C.shadowMap=q,C.state=w,C.info=J}x!==hn&&(y=new ox(x,e.width,e.height,a,i,r));const Tt=new $v(C,K);this.xr=Tt,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(H,R,!1))},this.getSize=function(T){return T.set(H,R)},this.setSize=function(T,$,lt=!0){if(Tt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,R=$,e.width=Math.floor(T*P),e.height=Math.floor($*P),lt===!0&&(e.style.width=T+"px",e.style.height=$+"px"),y!==null&&y.setSize(e.width,e.height),this.setViewport(0,0,T,$)},this.getDrawingBufferSize=function(T){return T.set(H*P,R*P).floor()},this.setDrawingBufferSize=function(T,$,lt){H=T,R=$,P=lt,e.width=Math.floor(T*lt),e.height=Math.floor($*lt),this.setViewport(0,0,T,$)},this.setEffects=function(T){if(x===hn){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let $=0;$<T.length;$++)if(T[$].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ot)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,$,lt,et){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,$,lt,et),w.viewport(ot.copy(it).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(mt)},this.setScissor=function(T,$,lt,et){T.isVector4?mt.set(T.x,T.y,T.z,T.w):mt.set(T,$,lt,et),w.scissor(pt.copy(mt).multiplyScalar(P).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(T){w.setScissorTest(_t=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(T=!0,$=!0,lt=!0){let et=0;if(T){let nt=!1;if(tt!==null){const Rt=tt.texture.format;nt=g.has(Rt)}if(nt){const Rt=tt.texture.type,It=p.has(Rt),At=at.getClearColor(),Dt=at.getClearAlpha(),kt=At.r,Zt=At.g,ee=At.b;It?(M[0]=kt,M[1]=Zt,M[2]=ee,M[3]=Dt,K.clearBufferuiv(K.COLOR,0,M)):(E[0]=kt,E[1]=Zt,E[2]=ee,E[3]=Dt,K.clearBufferiv(K.COLOR,0,E))}else et|=K.COLOR_BUFFER_BIT}$&&(et|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(et|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&K.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",Qt,!1),e.removeEventListener("webglcontextcreationerror",Je,!1),at.dispose(),Mt.dispose(),wt.dispose(),st.dispose(),vt.dispose(),dt.dispose(),xt.dispose(),ft.dispose(),St.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Qi),Tt.removeEventListener("sessionend",Bs),zn.stop()};function te(T){T.preventDefault(),Uo("WebGLRenderer: Context Lost."),L=!0}function Qt(){Uo("WebGLRenderer: Context Restored."),L=!1;const T=J.autoReset,$=q.enabled,lt=q.autoUpdate,et=q.needsUpdate,nt=q.type;Pt(),J.autoReset=T,q.enabled=$,q.autoUpdate=lt,q.needsUpdate=et,q.type=nt}function Je(T){le("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qe(T){const $=T.target;$.removeEventListener("dispose",Qe),Pr($)}function Pr(T){Ir(T),st.remove(T)}function Ir(T){const $=st.get(T).programs;$!==void 0&&($.forEach(function(lt){St.releaseProgram(lt)}),T.isShaderMaterial&&St.releaseShaderCache(T))}this.renderBufferDirect=function(T,$,lt,et,nt,Rt){$===null&&($=Le);const It=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,At=od(T,$,lt,et,nt);w.setMaterial(et,It);let Dt=lt.index,kt=1;if(et.wireframe===!0){if(Dt=ut.getWireframeAttribute(lt),Dt===void 0)return;kt=2}const Zt=lt.drawRange,ee=lt.attributes.position;let Ut=Zt.start*kt,ue=(Zt.start+Zt.count)*kt;Rt!==null&&(Ut=Math.max(Ut,Rt.start*kt),ue=Math.min(ue,(Rt.start+Rt.count)*kt)),Dt!==null?(Ut=Math.max(Ut,0),ue=Math.min(ue,Dt.count)):ee!=null&&(Ut=Math.max(Ut,0),ue=Math.min(ue,ee.count));const Pe=ue-Ut;if(Pe<0||Pe===1/0)return;xt.setup(nt,et,At,lt,Dt);let Se,ve=ct;if(Dt!==null&&(Se=yt.get(Dt),ve=rt,ve.setIndex(Se)),nt.isMesh)et.wireframe===!0?(w.setLineWidth(et.wireframeLinewidth*he()),ve.setMode(K.LINES)):ve.setMode(K.TRIANGLES);else if(nt.isLine){let $e=et.linewidth;$e===void 0&&($e=1),w.setLineWidth($e*he()),nt.isLineSegments?ve.setMode(K.LINES):nt.isLineLoop?ve.setMode(K.LINE_LOOP):ve.setMode(K.LINE_STRIP)}else nt.isPoints?ve.setMode(K.POINTS):nt.isSprite&&ve.setMode(K.TRIANGLES);if(nt.isBatchedMesh)if(re.get("WEBGL_multi_draw"))ve.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const $e=nt._multiDrawStarts,Lt=nt._multiDrawCounts,je=nt._multiDrawCount,ce=Dt?yt.get(Dt).bytesPerElement:1,_n=st.get(et).currentProgram.getUniforms();for(let On=0;On<je;On++)_n.setValue(K,"_gl_DrawID",On),ve.render($e[On]/ce,Lt[On])}else if(nt.isInstancedMesh)ve.renderInstances(Ut,Pe,nt.count);else if(lt.isInstancedBufferGeometry){const $e=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Lt=Math.min(lt.instanceCount,$e);ve.renderInstances(Ut,Pe,Lt)}else ve.render(Ut,Pe)};function ks(T,$,lt,et){D!==null&&T.isNodeMaterial&&D.setObject(et,T),Ht===!0&&Ft.setState(T,lt,!1),T.transparent===!0&&T.side===Yn&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,Ur(T,$,et),T.side=Vi,T.needsUpdate=!0,Ur(T,$,et),T.side=Yn):Ur(T,$,et)}this.compile=function(T,$,lt=null){lt===null&&(lt=T),D!==null&&D.renderStart(T,$,lt),b=wt.get(lt),b.init($),_.push(b),lt.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),T!==lt&&T.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Gt=this.localClippingEnabled,Ht=Ft.init(this.clippingPlanes,Gt),Ht===!0&&Ft.setGlobalState(this.clippingPlanes,$),D!==null&&q.render(b.state.shadowsArray,lt,$);const et=new Set;return T.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Rt=nt.material;if(Rt)if(Array.isArray(Rt))for(let It=0;It<Rt.length;It++){const At=Rt[It];ks(At,lt,$,nt),et.add(At)}else ks(Rt,lt,$,nt),et.add(Rt)}),b=_.pop(),D!==null&&D.renderEnd(),et},this.compileAsync=function(T,$,lt=null){const et=this.compile(T,$,lt);return new Promise(nt=>{function Rt(){if(et.forEach(function(It){const Dt=st.get(It).currentProgram;(Dt===void 0||Dt.isReady())&&et.delete(It)}),et.size===0){nt(T);return}setTimeout(Rt,10)}re.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Ji=null;function vn(T){Ji&&Ji(T)}function Qi(){zn.stop()}function Bs(){zn.start()}const zn=new yf;zn.setAnimationLoop(vn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(T){Ji=T,Tt.setAnimationLoop(T),T===null?zn.stop():zn.start()},Tt.addEventListener("sessionstart",Qi),Tt.addEventListener("sessionend",Bs),this.render=function(T,$){if($!==void 0&&$.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,$);const lt=Tt.enabled===!0&&Tt.isPresenting===!0,et=y!==null&&(tt===null||lt)&&y.begin(C,tt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera($),$=Tt.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,$,tt),b=wt.get(T,_.length),b.init($),b.state.textureUnits=ht.getTextureUnits(),_.push(b),Xt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),bt.setFromProjectionMatrix(Xt,$n,$.reversedDepth),Gt=this.localClippingEnabled,Ht=Ft.init(this.clippingPlanes,Gt),S=Mt.get(T,A.length),S.init(),A.push(S),Tt.enabled===!0&&Tt.isPresenting===!0){const It=C.xr.getDepthSensingMesh();It!==null&&ra(It,$,-1/0,C.sortObjects)}ra(T,$,0,C.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),C.sortObjects===!0&&S.sort(W,j),ye=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,ye&&at.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ht===!0&&Ft.beginShadows();const nt=b.state.shadowsArray;if(q.render(nt,T,$),Ht===!0&&Ft.endShadows(),(et&&y.hasRenderPass())===!1){const It=S.opaque,At=S.transmissive;if(b.setupLights(),$.isArrayCamera){const Dt=$.cameras;if(At.length>0)for(let kt=0,Zt=Dt.length;kt<Zt;kt++){const ee=Dt[kt];kc(It,At,T,ee)}ye&&at.render(T);for(let kt=0,Zt=Dt.length;kt<Zt;kt++){const ee=Dt[kt];Oc(S,T,ee,ee.viewport)}}else At.length>0&&kc(It,At,T,$),ye&&at.render(T),Oc(S,T,$)}tt!==null&&Y===0&&(ht.updateMultisampleRenderTarget(tt),ht.updateRenderTargetMipmap(tt)),et&&y.end(C),T.isScene===!0&&T.onAfterRender(C,T,$),xt.resetDefaultState(),V=-1,Z=null,_.pop(),_.length>0?(b=_[_.length-1],ht.setTextureUnits(b.state.textureUnits),Ht===!0&&Ft.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,D!==null&&D.renderEnd()};function ra(T,$,lt,et){if(T.visible===!1)return;if(T.layers.test($.layers)){if(T.isGroup)lt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update($);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(bt)){et&&Me.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Xt);const It=dt.update(T),At=T.material;At.visible&&S.push(T,It,At,lt,Me.z,null,$)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(bt))){const It=dt.update(T),At=T.material;if(et&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Me.copy(T.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Me.copy(It.boundingSphere.center)),Me.applyMatrix4(T.matrixWorld).applyMatrix4(Xt)),Array.isArray(At)){const Dt=It.groups;for(let kt=0,Zt=Dt.length;kt<Zt;kt++){const ee=Dt[kt],Ut=At[ee.materialIndex];Ut&&Ut.visible&&S.push(T,It,Ut,lt,Me.z,ee,$)}}else At.visible&&S.push(T,It,At,lt,Me.z,null,$)}}const Rt=T.children;for(let It=0,At=Rt.length;It<At;It++)ra(Rt[It],$,lt,et)}function Oc(T,$,lt,et){const{opaque:nt,transmissive:Rt,transparent:It}=T;b.setupLightsView(lt),Ht===!0&&Ft.setGlobalState(C.clippingPlanes,lt),et&&w.viewport(ot.copy(et)),nt.length>0&&Dr(nt,$,lt),Rt.length>0&&Dr(Rt,$,lt),It.length>0&&Dr(It,$,lt),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function kc(T,$,lt,et){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[et.id]===void 0){const Ut=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[et.id]=new bn(1,1,{generateMipmaps:!0,type:Ut?An:hn,minFilter:Ii,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}const Rt=b.state.transmissionRenderTarget[et.id],It=et.viewport||ot;Rt.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);const At=C.getRenderTarget(),Dt=C.getActiveCubeFace(),kt=C.getActiveMipmapLevel();C.setRenderTarget(Rt),C.getClearColor(X),k=C.getClearAlpha(),k<1&&C.setClearColor(16777215,.5),C.clear(),ye&&at.render(lt);const Zt=C.toneMapping;C.toneMapping=Zn;const ee=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),b.setupLightsView(et),Ht===!0&&Ft.setGlobalState(C.clippingPlanes,et),Dr(T,lt,et),ht.updateMultisampleRenderTarget(Rt),ht.updateRenderTargetMipmap(Rt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ue=0,Pe=$.length;ue<Pe;ue++){const Se=$[ue],{object:ve,geometry:$e,material:Lt,group:je}=Se;if(Lt.side===Yn&&ve.layers.test(et.layers)){const ce=Lt.side;Lt.side=un,Lt.needsUpdate=!0,Bc(ve,lt,et,$e,Lt,je),Lt.side=ce,Lt.needsUpdate=!0,Ut=!0}}Ut===!0&&(ht.updateMultisampleRenderTarget(Rt),ht.updateRenderTargetMipmap(Rt))}C.setRenderTarget(At,Dt,kt),C.setClearColor(X,k),ee!==void 0&&(et.viewport=ee),C.toneMapping=Zt}function Dr(T,$,lt){const et=$.isScene===!0?$.overrideMaterial:null;for(let nt=0,Rt=T.length;nt<Rt;nt++){const It=T[nt],{object:At,geometry:Dt,group:kt}=It;let Zt=It.material;Zt.allowOverride===!0&&et!==null&&(Zt=et),At.layers.test(lt.layers)&&Bc(At,$,lt,Dt,Zt,kt)}}function Bc(T,$,lt,et,nt,Rt){D!==null&&nt.isNodeMaterial&&D.setObject(T,nt),T.onBeforeRender(C,$,lt,et,nt,Rt),T.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),nt.onBeforeRender(C,$,lt,et,T,Rt),nt.transparent===!0&&nt.side===Yn&&nt.forceSinglePass===!1?(nt.side=un,nt.needsUpdate=!0,C.renderBufferDirect(lt,$,et,nt,T,Rt),nt.side=Vi,nt.needsUpdate=!0,C.renderBufferDirect(lt,$,et,nt,T,Rt),nt.side=Yn):C.renderBufferDirect(lt,$,et,nt,T,Rt),T.onAfterRender(C,$,lt,et,nt,Rt)}function Ur(T,$,lt){$.isScene!==!0&&($=Le);const et=st.get(T),nt=b.state.lights,Rt=b.state.shadowsArray,It=nt.state.version,At=St.getParameters(T,nt.state,Rt,$,lt,b.state.lightProbeGridArray),Dt=St.getProgramCacheKey(At);let kt=et.programs;et.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?$.environment:null,et.fog=$.fog;const Zt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;et.envMap=vt.get(T.envMap||et.environment,Zt),et.envMapRotation=et.environment!==null&&T.envMap===null?$.environmentRotation:T.envMapRotation,kt===void 0&&(T.addEventListener("dispose",Qe),kt=new Map,et.programs=kt);let ee=kt.get(Dt);if(ee!==void 0){if(et.currentProgram===ee&&et.lightsStateVersion===It)return Gc(T,At),ee}else At.uniforms=St.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,lt,At),T.onBeforeCompile(At,C),ee=St.acquireProgram(At,Dt),kt.set(Dt,ee),et.uniforms=At.uniforms;const Ut=et.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ut.clippingPlanes=Ft.uniform),Gc(T,At),et.needsLights=ld(T),et.lightsStateVersion=It,et.needsLights&&(Ut.ambientLightColor.value=nt.state.ambient,Ut.lightProbe.value=nt.state.probe,Ut.sunLights.value=nt.state.sun,Ut.sunLightShadows.value=nt.state.sunShadow,Ut.directionalLights.value=nt.state.directional,Ut.directionalLightShadows.value=nt.state.directionalShadow,Ut.spotLights.value=nt.state.spot,Ut.spotLightShadows.value=nt.state.spotShadow,Ut.rectAreaLights.value=nt.state.rectArea,Ut.ltc_1.value=nt.state.rectAreaLTC1,Ut.ltc_2.value=nt.state.rectAreaLTC2,Ut.pointLights.value=nt.state.point,Ut.pointLightShadows.value=nt.state.pointShadow,Ut.hemisphereLights.value=nt.state.hemi,Ut.sunShadowMatrix.value=nt.state.sunShadowMatrix,Ut.sunShadowCascade.value=nt.state.sunShadowCascade,Ut.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ut.spotLightMatrix.value=nt.state.spotLightMatrix,Ut.spotLightMap.value=nt.state.spotLightMap,Ut.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=b.state.lightProbeGridArray.length>0,et.currentProgram=ee,et.uniformsList=null,ee}function Hc(T){if(T.uniformsList===null){const $=T.currentProgram.getUniforms();T.uniformsList=To.seqWithValue($.seq,T.uniforms)}return T.uniformsList}function Gc(T,$){const lt=st.get(T);lt.outputColorSpace=$.outputColorSpace,lt.batching=$.batching,lt.batchingColor=$.batchingColor,lt.instancing=$.instancing,lt.instancingColor=$.instancingColor,lt.instancingMorph=$.instancingMorph,lt.skinning=$.skinning,lt.morphTargets=$.morphTargets,lt.morphNormals=$.morphNormals,lt.morphColors=$.morphColors,lt.morphTargetsCount=$.morphTargetsCount,lt.numClippingPlanes=$.numClippingPlanes,lt.numIntersection=$.numClipIntersection,lt.vertexAlphas=$.vertexAlphas,lt.vertexTangents=$.vertexTangents,lt.toneMapping=$.toneMapping}function rd(T,$){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition($.matrixWorld);for(let lt=0,et=T.length;lt<et;lt++){const nt=T[lt];if(nt.texture!==null&&nt.boundingBox.containsPoint(v))return nt}return null}function od(T,$,lt,et,nt){$.isScene!==!0&&($=Le),ht.resetTextureUnits();const Rt=$.fog,It=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?$.environment:null,At=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:oe.workingColorSpace,Dt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,kt=vt.get(et.envMap||It,Dt),Zt=et.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ee=!!lt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ut=!!lt.morphAttributes.position,ue=!!lt.morphAttributes.normal,Pe=!!lt.morphAttributes.color;let Se=Zn;et.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Se=C.toneMapping);const ve=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,$e=ve!==void 0?ve.length:0,Lt=st.get(et),je=b.state.lights;if(Ht===!0&&(Gt===!0||T!==Z)){const _e=T===Z&&et.id===V;Ft.setState(et,T,_e)}let ce=!1;et.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==je.state.version||Lt.outputColorSpace!==At||nt.isBatchedMesh&&Lt.batching===!1||!nt.isBatchedMesh&&Lt.batching===!0||nt.isBatchedMesh&&Lt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Lt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Lt.instancing===!1||!nt.isInstancedMesh&&Lt.instancing===!0||nt.isSkinnedMesh&&Lt.skinning===!1||!nt.isSkinnedMesh&&Lt.skinning===!0||nt.isInstancedMesh&&Lt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Lt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Lt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Lt.instancingMorph===!1&&nt.morphTexture!==null||Lt.envMap!==kt||et.fog===!0&&Lt.fog!==Rt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Ft.numPlanes||Lt.numIntersection!==Ft.numIntersection)||Lt.vertexAlphas!==Zt||Lt.vertexTangents!==ee||Lt.morphTargets!==Ut||Lt.morphNormals!==ue||Lt.morphColors!==Pe||Lt.toneMapping!==Se||Lt.morphTargetsCount!==$e||!!Lt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Lt.__version=et.version);let _n=Lt.currentProgram;ce===!0&&(_n=Ur(et,$,nt),D&&et.isNodeMaterial&&D.onUpdateProgram(et,_n,Lt));let On=!1,mi=!1,ji=!1;const pe=_n.getUniforms(),Re=Lt.uniforms;if(w.useProgram(_n.program)&&(On=!0,mi=!0,ji=!0),et.id!==V&&(V=et.id,mi=!0),Lt.needsLights){const _e=rd(b.state.lightProbeGridArray,nt);Lt.lightProbeGrid!==_e&&(Lt.lightProbeGrid=_e,mi=!0)}if(On||Z!==T){w.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pe.setValue(K,"projectionMatrix",T.projectionMatrix),pe.setValue(K,"viewMatrix",T.matrixWorldInverse);const xi=pe.map.cameraPosition;xi!==void 0&&xi.setValue(K,ae.setFromMatrixPosition(T.matrixWorld)),O.logarithmicDepthBuffer&&pe.setValue(K,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&pe.setValue(K,"isOrthographic",T.isOrthographicCamera===!0),Z!==T&&(Z=T,mi=!0,ji=!0)}if(Lt.needsLights&&(je.state.sunShadowMap.length>0&&pe.setValue(K,"sunShadowMap",je.state.sunShadowMap,ht),je.state.directionalShadowMap.length>0&&pe.setValue(K,"directionalShadowMap",je.state.directionalShadowMap,ht),je.state.spotShadowMap.length>0&&pe.setValue(K,"spotShadowMap",je.state.spotShadowMap,ht),je.state.pointShadowMap.length>0&&pe.setValue(K,"pointShadowMap",je.state.pointShadowMap,ht)),nt.isSkinnedMesh){pe.setOptional(K,nt,"bindMatrix"),pe.setOptional(K,nt,"bindMatrixInverse");const _e=nt.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),pe.setValue(K,"boneTexture",_e.boneTexture,ht))}nt.isBatchedMesh&&(pe.setOptional(K,nt,"batchingTexture"),pe.setValue(K,"batchingTexture",nt._matricesTexture,ht),pe.setOptional(K,nt,"batchingIdTexture"),pe.setValue(K,"batchingIdTexture",nt._indirectTexture,ht),pe.setOptional(K,nt,"batchingColorTexture"),nt._colorsTexture!==null&&pe.setValue(K,"batchingColorTexture",nt._colorsTexture,ht));const gi=lt.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&B.update(nt,lt,_n),(mi||Lt.receiveShadow!==nt.receiveShadow)&&(Lt.receiveShadow=nt.receiveShadow,pe.setValue(K,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&$.environment!==null&&(Re.envMapIntensity.value=$.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=jv()),mi){if(pe.setValue(K,"toneMappingExposure",C.toneMappingExposure),Lt.needsLights&&ad(Re,ji),Rt&&et.fog===!0&&Ot.refreshFogUniforms(Re,Rt),Ot.refreshMaterialUniforms(Re,et,P,R,b.state.transmissionRenderTarget[T.id]),Lt.needsLights&&Lt.lightProbeGrid){const _e=Lt.lightProbeGrid;Re.probesSH.value=_e.texture,Re.probesMin.value.copy(_e.boundingBox.min),Re.probesMax.value.copy(_e.boundingBox.max),Re.probesResolution.value.copy(_e.resolution)}To.upload(K,Hc(Lt),Re,ht)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(To.upload(K,Hc(Lt),Re,ht),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&pe.setValue(K,"center",nt.center),pe.setValue(K,"modelViewMatrix",nt.modelViewMatrix),pe.setValue(K,"normalMatrix",nt.normalMatrix),pe.setValue(K,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const _e=et.uniformsGroups;for(let xi=0,ts=_e.length;xi<ts;xi++){const Wc=_e[xi];ft.update(Wc,_n),ft.bind(Wc,_n)}}return _n}function ad(T,$){T.ambientLightColor.needsUpdate=$,T.lightProbe.needsUpdate=$,T.sunLights.needsUpdate=$,T.sunLightShadows.needsUpdate=$,T.directionalLights.needsUpdate=$,T.directionalLightShadows.needsUpdate=$,T.pointLights.needsUpdate=$,T.pointLightShadows.needsUpdate=$,T.spotLights.needsUpdate=$,T.spotLightShadows.needsUpdate=$,T.rectAreaLights.needsUpdate=$,T.hemisphereLights.needsUpdate=$}function ld(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(T,$,lt){const et=st.get(T);et.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),st.get(T.texture).__webglTexture=$,st.get(T.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:lt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,$){const lt=st.get(T);lt.__webglFramebuffer=$,lt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(T,$=0,lt=0){tt=T,Q=$,Y=lt;let et=null,nt=!1,Rt=!1;if(T){const At=st.get(T);if(At.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(K.FRAMEBUFFER,At.__webglFramebuffer),ot.copy(T.viewport),pt.copy(T.scissor),N=T.scissorTest,w.viewport(ot),w.scissor(pt),w.setScissorTest(N),V=-1;return}else if(At.__webglFramebuffer===void 0)ht.setupRenderTarget(T);else if(At.__hasExternalTextures)ht.rebindTextures(T,st.get(T.texture).__webglTexture,st.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Zt=T.depthTexture;if(At.__boundDepthTexture!==Zt){if(Zt!==null&&st.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(T)}}const Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Rt=!0);const kt=st.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(kt[$])?et=kt[$][lt]:et=kt[$],nt=!0):T.samples>0&&ht.useMultisampledRTT(T)===!1?et=st.get(T).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[lt]:et=kt,ot.copy(T.viewport),pt.copy(T.scissor),N=T.scissorTest}else ot.copy(it).multiplyScalar(P).floor(),pt.copy(mt).multiplyScalar(P).floor(),N=_t;if(lt!==0&&(et=z),w.bindFramebuffer(K.FRAMEBUFFER,et)&&w.drawBuffers(T,et),w.viewport(ot),w.scissor(pt),w.setScissorTest(N),nt){const At=st.get(T.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+$,At.__webglTexture,lt)}else if(Rt){const At=$;for(let Dt=0;Dt<T.textures.length;Dt++){const kt=st.get(T.textures[Dt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Dt,kt.__webglTexture,lt,At)}}else if(T!==null&&lt!==0){const At=st.get(T.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,At.__webglTexture,lt)}V=-1};function Vc(T){const $=st.get(T);return($.__readFormat!==T.format||$.__readType!==T.type)&&($.__readFormat=T.format,$.__readType=T.type,$.__formatReadable=O.textureFormatReadable(T.format),$.__typeReadable=O.textureTypeReadable(T.type)),$}this.readRenderTargetPixels=function(T,$,lt,et,nt,Rt,It,At=0){if(!(T&&T.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){w.bindFramebuffer(K.FRAMEBUFFER,Dt);try{const kt=T.textures[At],Zt=kt.format,ee=kt.type;T.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+At);const Ut=Vc(kt);if(Ut.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=T.width-et&&lt>=0&&lt<=T.height-nt&&K.readPixels($,lt,et,nt,gt.convert(Zt),gt.convert(ee),Rt)}finally{const kt=tt!==null?st.get(tt).__webglFramebuffer:null;w.bindFramebuffer(K.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(T,$,lt,et,nt,Rt,It,At=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=st.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if($>=0&&$<=T.width-et&&lt>=0&&lt<=T.height-nt){w.bindFramebuffer(K.FRAMEBUFFER,Dt);const kt=T.textures[At],Zt=kt.format,ee=kt.type;T.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+At);const Ut=Vc(kt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,ue),K.bufferData(K.PIXEL_PACK_BUFFER,Rt.byteLength,K.STREAM_READ),K.readPixels($,lt,et,nt,gt.convert(Zt),gt.convert(ee),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Pe=tt!==null?st.get(tt).__webglFramebuffer:null;w.bindFramebuffer(K.FRAMEBUFFER,Pe);const Se=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await qd(K,Se,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,ue),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Rt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(ue),K.deleteSync(Se),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,$=null,lt=0){const et=Math.pow(2,-lt),nt=Math.floor(T.image.width*et),Rt=Math.floor(T.image.height*et),It=$!==null?$.x:0,At=$!==null?$.y:0;ht.setTexture2D(T,0),K.copyTexSubImage2D(K.TEXTURE_2D,lt,0,0,It,At,nt,Rt),w.unbindTexture()},this.copyTextureToTexture=function(T,$,lt=null,et=null,nt=0,Rt=0){let It,At,Dt,kt,Zt,ee,Ut,ue,Pe;const Se=T.isCompressedTexture?T.mipmaps[Rt]:T.image;if(lt!==null)It=lt.max.x-lt.min.x,At=lt.max.y-lt.min.y,Dt=lt.isBox3?lt.max.z-lt.min.z:1,kt=lt.min.x,Zt=lt.min.y,ee=lt.isBox3?lt.min.z:0;else{const Re=Math.pow(2,-nt);It=Math.floor(Se.width*Re),At=Math.floor(Se.height*Re),T.isDataArrayTexture?Dt=Se.depth:T.isData3DTexture?Dt=Math.floor(Se.depth*Re):Dt=1,kt=0,Zt=0,ee=0}et!==null?(Ut=et.x,ue=et.y,Pe=et.z):(Ut=0,ue=0,Pe=0);const ve=gt.convert($.format),$e=gt.convert($.type);let Lt;$.isData3DTexture?(ht.setTexture3D($,0),Lt=K.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ht.setTexture2DArray($,0),Lt=K.TEXTURE_2D_ARRAY):(ht.setTexture2D($,0),Lt=K.TEXTURE_2D),w.activeTexture(K.TEXTURE0),w.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,$.flipY),w.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),w.pixelStorei(K.UNPACK_ALIGNMENT,$.unpackAlignment);const je=w.getParameter(K.UNPACK_ROW_LENGTH),ce=w.getParameter(K.UNPACK_IMAGE_HEIGHT),_n=w.getParameter(K.UNPACK_SKIP_PIXELS),On=w.getParameter(K.UNPACK_SKIP_ROWS),mi=w.getParameter(K.UNPACK_SKIP_IMAGES);w.pixelStorei(K.UNPACK_ROW_LENGTH,Se.width),w.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Se.height),w.pixelStorei(K.UNPACK_SKIP_PIXELS,kt),w.pixelStorei(K.UNPACK_SKIP_ROWS,Zt),w.pixelStorei(K.UNPACK_SKIP_IMAGES,ee);const ji=T.isDataArrayTexture||T.isData3DTexture,pe=$.isDataArrayTexture||$.isData3DTexture;if(T.isDepthTexture){const Re=st.get(T),gi=st.get($),_e=st.get(Re.__renderTarget),xi=st.get(gi.__renderTarget);w.bindFramebuffer(K.READ_FRAMEBUFFER,_e.__webglFramebuffer),w.bindFramebuffer(K.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let ts=0;ts<Dt;ts++)ji&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,st.get(T).__webglTexture,nt,ee+ts),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,st.get($).__webglTexture,Rt,Pe+ts)),K.blitFramebuffer(kt,Zt,It,At,Ut,ue,It,At,K.DEPTH_BUFFER_BIT,K.NEAREST);w.bindFramebuffer(K.READ_FRAMEBUFFER,null),w.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(nt!==0||T.isRenderTargetTexture||st.has(T)){const Re=st.get(T),gi=st.get($);w.bindFramebuffer(K.READ_FRAMEBUFFER,G),w.bindFramebuffer(K.DRAW_FRAMEBUFFER,F);for(let _e=0;_e<Dt;_e++)ji?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Re.__webglTexture,nt,ee+_e):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Re.__webglTexture,nt),pe?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,gi.__webglTexture,Rt,Pe+_e):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,gi.__webglTexture,Rt),nt!==0?K.blitFramebuffer(kt,Zt,It,At,Ut,ue,It,At,K.COLOR_BUFFER_BIT,K.NEAREST):pe?K.copyTexSubImage3D(Lt,Rt,Ut,ue,Pe+_e,kt,Zt,It,At):K.copyTexSubImage2D(Lt,Rt,Ut,ue,kt,Zt,It,At);w.bindFramebuffer(K.READ_FRAMEBUFFER,null),w.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else pe?T.isDataTexture||T.isData3DTexture?K.texSubImage3D(Lt,Rt,Ut,ue,Pe,It,At,Dt,ve,$e,Se.data):$.isCompressedArrayTexture?K.compressedTexSubImage3D(Lt,Rt,Ut,ue,Pe,It,At,Dt,ve,Se.data):K.texSubImage3D(Lt,Rt,Ut,ue,Pe,It,At,Dt,ve,$e,Se):T.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,Rt,Ut,ue,It,At,ve,$e,Se.data):T.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,Rt,Ut,ue,Se.width,Se.height,ve,Se.data):K.texSubImage2D(K.TEXTURE_2D,Rt,Ut,ue,It,At,ve,$e,Se);w.pixelStorei(K.UNPACK_ROW_LENGTH,je),w.pixelStorei(K.UNPACK_IMAGE_HEIGHT,ce),w.pixelStorei(K.UNPACK_SKIP_PIXELS,_n),w.pixelStorei(K.UNPACK_SKIP_ROWS,On),w.pixelStorei(K.UNPACK_SKIP_IMAGES,mi),Rt===0&&$.generateMipmaps&&K.generateMipmap(Lt),w.unbindTexture()},this.initRenderTarget=function(T){st.get(T).__webglFramebuffer===void 0&&ht.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ht.setTextureCube(T,0):T.isData3DTexture?ht.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ht.setTexture2DArray(T,0):ht.setTexture2D(T,0),w.unbindTexture()},this.resetState=function(){Q=0,Y=0,tt=null,w.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const Cf="#f7f7f7",on=.0254,gc={canvas:.038,panel:.022,paper:.012,digital:.012},ko={face:.75*on,depth:1.5*on,mat:3*on,lip:.25*on,bevel:.125*on},e_={black:"#161616",white:"#efeee9"},n_={white:"#f4f2ec",black:"#1c1c1c"},i_="#faf9f4",Bo={strip:.25*on,depth:2*on,gap:.25*on,below:.25*on},s_="#e3cba2",r_="#111111";function xc(s){const t=s.frame??{on:s.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const vc=s=>!!s&&s.style==="float";function o_(s){const t=xc(s),e=t?vc(t)?2*(Bo.gap+Bo.strip):2*(ko.mat+ko.face):0;return[s.w*on+e,s.h*on+e]}const a_=s=>{const t=xc(s);return t?vc(t)?Bo.depth:ko.depth:gc[s.kind]};async function l_(){const s={},t=async o=>{const a=await fetch(`data/${o}.json?${Date.now()}`,{cache:"no-store"});if(!a.ok)throw new Error(`data/${o}.json: ${a.status}`);return s[o]=a.headers.get("x-rev")??"",a.json()},[e,n,i,r]=await Promise.all([t("catalogue"),t("layout"),t("images"),t("machines")]);return n.machines??(n.machines=[]),{catalogue:e,layout:n,images:i,machines:r,revs:s}}const c_=(s,t)=>`${s}:${t}`,Ba=(s,t,e)=>s.paint[c_(t,e)]??s.defaultPaint;function Ho(s){if(s.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),i=e-n,r=Math.round(i*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(s.w)}″ × ${t(s.h)}″`}const Go=s=>s.title.trim()||"Untitled",Qh=.004;function h_(s){const t=s.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const i of s.walls)if(Math.abs(i.z1-i.z0)<1e-6){const o=Math.min(i.x0,i.x1),a=Math.max(i.x0,i.x1);n.push({id:i.id,outer:!1,axis:"x",t:i.t,rect:{x0:o,x1:a,z0:i.z0-i.t/2,z1:i.z0+i.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(i.z0,i.z1),a=Math.max(i.z0,i.z1);n.push({id:i.id,outer:!1,axis:"z",t:i.t,rect:{x0:i.x0-i.t/2,x1:i.x0+i.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const u_=(s,t,e)=>t>s.x0+1e-6&&t<s.x1-1e-6&&e>s.z0+1e-6&&e<s.z1-1e-6,jh=(s,t,e,n)=>s.some(i=>i.id!==n&&u_(i.rect,t,e));function tu(s,t,e){let n=[[s,t]];for(const[i,r]of e){const o=[];for(const[a,c]of n){if(r<=a||i>=c){o.push([a,c]);continue}i>a&&o.push([a,i]),r<c&&o.push([r,c])}n=o}return n.filter(([i,r])=>r-i>.05)}function f_(s){var u;const t=h_(s),e=s.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},i=s.ceiling,r=s.doorHeight,o={a:s.entrance.x-s.entrance.w/2,b:s.entrance.x+s.entrance.w/2,z:e.z1},a=m=>{const x=s.doors.filter(g=>g.wall===m).map(g=>[Math.min(g.a,g.b),Math.max(g.a,g.b)]);return m==="S"&&x.push([o.a,o.b]),x},c=[],l=[];for(const m of t){for(const g of m.sides){const p=m.rect,M=m.axis==="x"?g>0?p.z1:p.z0:g>0?p.x1:p.x0,E=m.axis==="x"?[0,g]:[g,0],v=[E[1],-E[0]],S=[];for(const y of t){if(y===m)continue;const C=y.rect,L=m.axis==="x"?C.z0:C.x0,D=m.axis==="x"?C.z1:C.x1;if(!(g>0?L<=M+Qh&&D>=M+.01:D>=M-Qh&&L<=M-.01))continue;const G=m.axis==="x"?C.x0:C.z0,F=m.axis==="x"?C.x1:C.z1;S.push([G,F])}const b=m.outer?m.a0:Math.max(m.a0,m.axis==="x"?n.x0:n.z0),A=m.outer?m.a1:Math.min(m.a1,m.axis==="x"?n.x1:n.z1),_=a(m.id);for(const[y,C]of tu(b,A,S)){const L=D=>{const z=m.axis==="x"?D:M+E[0]*.02,G=m.axis==="x"?M+E[1]*.02:D;return jh(t,z,G,m.id)};c.push({key:`${m.id}:${g}:${y.toFixed(3)}`,wall:m.id,side:g,axis:m.axis,plane:M,u0:y,u1:C,n:E,right:v,cornerA:L(y-.02),cornerB:L(C+.02),freeA:!m.outer&&!L(y-.02)&&Math.abs(y-m.a0)<1e-6,freeB:!m.outer&&!L(C+.02)&&Math.abs(C-m.a1)<1e-6,outer:m.outer,t:m.t,doors:_.map(([D,z])=>[Math.max(D,y),Math.min(z,C)]).filter(([D,z])=>z-D>.01),color:((u=(s.paintAt??[]).find(D=>D.wall===m.id&&D.side===g&&D.u>=y-1e-6&&D.u<=C+1e-6))==null?void 0:u.color)??Ba(s,m.id,g)})}}if(m.outer)continue;const x=Ba(s,m.id,1);for(const g of[m.a0,m.a1]){const p=g===m.a0?-1:1,M=m.axis==="x"?g+p*.02:(m.rect.x0+m.rect.x1)/2,E=m.axis==="x"?(m.rect.z0+m.rect.z1)/2:g+p*.02;jh(t,M,E,m.id)||(m.axis==="x"?l.push(wi(g,m.rect.z0,g,m.rect.z1,[p,0,0],i,x)):l.push(wi(m.rect.x0,g,m.rect.x1,g,[0,0,p],i,x)))}for(const[g,p]of a(m.id)){const M=m.rect;m.axis==="x"?(l.push(wi(g,M.z0,g,M.z1,[1,0,0],r,x)),l.push(wi(p,M.z0,p,M.z1,[-1,0,0],r,x)),l.push(Ha(g,p,M.z0,M.z1,"x",r,x))):(l.push(wi(M.x0,g,M.x1,g,[0,0,1],r,x)),l.push(wi(M.x0,p,M.x1,p,[0,0,-1],r,x)),l.push(Ha(g,p,M.x0,M.x1,"z",r,x)))}}const h=.04,f=Ba(s,"S",-1);l.push(wi(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,f)),l.push(wi(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,f)),l.push(Ha(o.a,o.b,e.z1,e.z1+h,"x",r,f));const d=[];for(const m of t){const x=m.rect,g=m.axis==="x"?[x.x0,x.x1]:[x.z0,x.z1];for(const[p,M]of tu(g[0],g[1],a(m.id)))d.push(m.axis==="x"?{x0:p,x1:M,z0:x.z0,z1:x.z1}:{x0:x.x0,x1:x.x1,z0:p,z1:M})}return{inner:n,H:i,doorH:r,walls:t,faces:c,extra:l,solids:d,entrance:o,ceilColor:s.ceilingPaint??Cf,ceilAt:s.ceilingAt??[]}}function wi(s,t,e,n,i,r,o){const a=e-s,c=n-t,l=a*i[2]-c*i[0],[h,f]=l>0?[[s,t],[e,n]]:[[e,n],[s,t]];return{p:[[h[0],0,h[1]],[f[0],0,f[1]],[f[0],r,f[1]],[h[0],r,h[1]]],n:i,color:o}}function Ha(s,t,e,n,i,r,o){const a=(l,h)=>i==="x"?[l,r,h]:[h,r,l];return{p:i==="x"?[a(s,e),a(t,e),a(t,n),a(s,n)]:[a(s,e),a(s,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const Di=(s,t,e)=>s.axis==="x"?[t,e,s.plane]:[s.plane,e,t],_c=s=>s.axis==="x"?s.right[0]:s.right[1];function qi(s,t,e,n,i,r=0){const o=n-t,a=i-e;for(const c of s){let l=0,h=1;const f=(d,u)=>{if(Math.abs(d)<1e-12)return u>=0;const m=u/d;if(d<0){if(m>h)return!1;m>l&&(l=m)}else{if(m<l)return!1;m<h&&(h=m)}return!0};if(f(-o,t-c.x0)&&f(o,c.x1-t)&&f(-a,e-c.z0)&&f(a,c.z1-e)&&h-l>1e-4&&h>r&&l<1-r)return!0}return!1}function d_(s,t=.1){const e=s.inner,n=Math.ceil((e.x1-e.x0)/t),i=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*i).fill(-2);for(const l of s.walls){const h=l.rect,f=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),d=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),u=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),m=Math.min(i-1,Math.floor((h.z1+r-e.z0)/t));for(let x=u;x<=m;x++)for(let g=f;g<=d;g++)o[x*n+g]=-1}let a=0;const c=[];for(let l=0;l<n*i;l++)if(o[l]===-2){for(o[l]=a,c.push(l);c.length;){const h=c.pop(),f=h%n,d=(h-f)/n;f>0&&o[h-1]===-2&&(o[h-1]=a,c.push(h-1)),f<n-1&&o[h+1]===-2&&(o[h+1]=a,c.push(h+1)),d>0&&o[h-n]===-2&&(o[h-n]=a,c.push(h-n)),d<i-1&&o[h+n]===-2&&(o[h+n]=a,c.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:i,id:o,rooms:a}}function p_(s,t,e){const n=Math.floor((t-s.x0)/s.c),i=Math.floor((e-s.z0)/s.c);return n<0||i<0||n>=s.nx||i>=s.nz?-1:s.id[i*s.nx+n]}function m_(s,t){const e=new Array(t.rooms).fill(s.ceilColor);for(const n of s.ceilAt){const i=p_(t,n.x,n.z);i>=0&&(e[i]=n.color)}return e}const As=.125,xr=.086,eu=.12,Vo=1e3,Wo='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',vr=140,Xo=62,Lf=46;let js=null;function g_(s){js??(js=document.createElement("canvas").getContext("2d")),js.font=`300 ${vr}px ${Wo}`;const t=js.measureText(s.title).width;js.font=`400 ${Xo}px ${Wo}`;const e=s.sub?js.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/Vo,h:(vr+(s.sub?Lf+Xo:0)+30)/Vo}}const ql=.03,x_=.35,nu=1.1;function v_(s,t){if(s.text){const n=g_(s.text);return[n.w,n.h]}const e=t.get(s.id);return e?o_(e):[.3,.3]}function __(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function M_(s,t,e,n,i,r){const o=s.u0+i/2+ql,a=s.u1-i/2-ql,c=o>a?(s.u0+s.u1)/2:Math.max(o,Math.min(a,e)),l=r/2+.05,h=t-.12-r/2,f=l>h?t/2:Math.max(l,Math.min(h,n));return{u:c,y:f}}function y_(s,t,e,n,i){const r=_c(s),o=t*r,a=r>0?s.u1:-s.u0;let c=o+n/2+eu+As/2;c+As/2>a-ql&&(c=o-n/2-eu-As/2);const l=Math.max(.2+xr/2,e-i/2+xr/2);return{pos:Di(s,c*r,l),w:As,h:xr}}function S_(s,t,e){const n=[],i=[];for(const c of s.hang){if(!c.text&&(!e.has(c.id)||e.get(c.id).off))continue;const l=__(t,c);if(!l){n.push(c);continue}const[h,f]=v_(c,e),d=M_(l,t.H,c.u,c.y,h,f);c.u=+d.u.toFixed(4),c.y=+d.y.toFixed(4);const u=c.text?void 0:e.get(c.id);i.push({id:c.id,work:u,text:c.text,place:c,face:l,pos:Di(l,d.u,d.y),w:h,h:f,depth:u?a_(u):.001,label:u?y_(l,d.u,d.y,h,f):null,over:!1})}const r=c=>c.face.axis==="x"?c.pos[0]:c.pos[2];for(let c=0;c<i.length;c++){const l=i[c];for(const[h,f]of l.face.doors)r(l)+l.w/2>h&&r(l)-l.w/2<f&&l.pos[1]-l.h/2<t.doorH&&(l.over=!0);for(let h=c+1;h<i.length;h++){const f=i[h];if(f.face!==l.face)continue;const d=Math.abs(r(l)-r(f))<(l.w+f.w)/2-.005,u=Math.abs(l.pos[1]-f.pos[1])<(l.h+f.h)/2-.005;d&&u&&(l.over=!0,f.over=!0)}}const o=[],a=new Map;for(const c of i)a.has(c.face)||a.set(c.face,[]),a.get(c.face).push(c);for(const[c,l]of a){const h=l.map((x,g)=>g),f=x=>h[x]===x?x:h[x]=f(h[x]);for(let x=0;x<l.length;x++)for(let g=x+1;g<l.length;g++){const p=l[x],M=l[g];if(p.text||M.text)continue;const E=Math.abs(r(p)-r(M))-(p.w+M.w)/2,v=Math.abs(p.pos[1]-M.pos[1])-(p.h+M.h)/2;Math.max(E,v)<x_&&(h[f(x)]=f(g))}const d=new Map;l.forEach((x,g)=>{const p=f(g);d.has(p)||d.set(p,[]),d.get(p).push(x)});const u=[c.n[0],0,c.n[1]],m=[c.right[0],0,c.right[1]];for(const x of d.values()){const g=Math.min(...x.map(b=>r(b)-b.w/2)),p=Math.max(...x.map(b=>r(b)+b.w/2)),M=Math.min(...x.map(b=>b.pos[1]-b.h/2)),E=Math.max(...x.map(b=>b.pos[1]+b.h/2)),v=Di(c,(g+p)/2,(M+E)/2),S={w:p-g,h:E-M};o.push({face:c,centre:v,normal:u,right:m,w:S.w,h:S.h,items:x,lamp:w_(v,u,m,S,x,t)})}}return{placed:o,items:i,homeless:n}}function w_(s,t,e,n,i,r){const o=r.H-.03;let a=nu;for(let M=.2;M<=nu+.25;M+=.05)if(qi(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const c=[s[0]+t[0]*a,o,s[2]+t[2]*a],l=i.reduce((M,E)=>M+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*l,s[1],s[2]+t[2]*l],f=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],d=Math.hypot(f[0],f[1],f[2]),u=[f[0]/d,f[1]/d,f[2]/d];let m=0;for(const[M,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-c[0],s[1]+E*n.h/2-c[1],s[2]+e[2]*M*n.w/2-c[2]],S=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*u[0]+v[1]*u[1]+v[2]*u[2])/S)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,g=[-f[0]/d,-f[1]/d,-f[2]/d],p=g[0]*t[0]+g[2]*t[2];return{p:c,d:u,cOuter:Math.cos(x),cInner:Math.cos(m),i:d*d/Math.max(.2,p)}}const b_=1.45,Pf=.07,If=.07,Df=.125,E_=.086,Uf=.12,T_=1.3,Nf=.16,iu=1e3,su='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',ru=140,ou=62,A_=46,R_=1.6;let tr=null;function Ff(s){tr??(tr=document.createElement("canvas").getContext("2d")),tr.font=`300 ${ru}px ${su}`;const t=tr.measureText(s.title).width;tr.font=`400 ${ou}px ${su}`;const e=s.sub?tr.measureText(s.sub).width:0;return{w:(Math.max(t,e)+24)/iu,h:(ru+(s.sub?A_+ou:0)+30)/iu,colW:[],colH:[]}}const C_=6400;function L_(s){return s.map(t=>({title:Go(t),detail:[t.medium,Ho(t),t.year].filter(Boolean).join(", ")}))}const P_=s=>(150+L_(s).reduce((t,e)=>t+92+(e.detail?58:0),0))/C_,au=.45,lu=.25,Ga=.4,cu=.12,hu=1.1,Yl=s=>[s.w*on,s.h*on];function zf(s,t){const e=[],n=[];for(const o of s){const a=o.map(c=>t.get(c)).filter(Boolean);e.push(Math.max(0,...a.map(c=>Yl(c)[0]))),n.push(a.reduce((c,l)=>c+Yl(l)[1],0)+If*Math.max(0,a.length-1))}const i=e.reduce((o,a)=>o+a,0)+Pf*Math.max(0,s.length-1),r=Math.max(0,...n);return{w:i,h:r,colW:e,colH:n}}const I_=s=>s.cols.reduce((t,e)=>t+e.length,0),D_=s=>I_(s)>1?Nf:Df,U_=(s,t)=>s.text?Ff(s.text).w:zf(s.cols,t).w+Uf+D_(s);function N_(s){const t=[];let e=s.u0+(s.cornerA?au:lu);const n=s.u1-(s.cornerB?au:lu);for(const[i,r]of[...s.doors].sort((o,a)=>o[0]-a[0]))i-Ga-e>.3&&t.push([e,i-Ga]),e=Math.max(e,r+Ga);return n-e>.3&&t.push([e,n]),t}function F_(s,t){let e=null,n=1/0;for(const i of s.faces){if(i.wall!==t.wall||i.side!==t.side)continue;const r=t.u<i.u0?i.u0-t.u:t.u>i.u1?t.u-i.u1:0;r<n&&(n=r,e=i)}return e}function z_(s,t,e){const n=new Map,i=[];for(const o of s.hang){if(!o.text&&(o.cols=o.cols.map(c=>c.filter(l=>e.has(l))).filter(c=>c.length),!o.cols.length))continue;const a=F_(t,o);if(!a){i.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const c=N_(o);if(!c.length){i.push(...a);continue}const l=c.map(()=>[]);for(const f of a){let d=0,u=1/0;c.forEach(([m,x],g)=>{const p=f.u<m?m-f.u:f.u>x?f.u-x:0;p<u&&(u=p,d=g)}),l[d].push(f)}const h=_c(o);c.forEach(([f,d],u)=>{const m=l[u].sort((b,A)=>(b.u-A.u)*h);if(!m.length)return;const x=m.map(b=>U_(b,e)),g=d-f,p=x.reduce((b,A)=>b+A,0);let M=(g-p)/(m.length+1);const E=M<cu;E&&(M=cu);const v=p+M*(m.length+1);let S=(h>0?f:-d)+(g-v)/2+M;m.forEach((b,A)=>{const _=b.text?Ff(b.text):zf(b.cols,e),C=(S+_.w/2)*h;b.u=+C.toFixed(4),r.push(O_(b,o,C,_,e,t,E)),S+=x[A]+M})})}return{placed:r,homeless:i}}function O_(s,t,e,n,i,r,o){const a=_c(t),c=[t.n[0],0,t.n[1]],l=[t.right[0],0,t.right[1]];let h=s.text?R_:b_;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const f=[];let d=-n.w/2;s.cols.forEach((E,v)=>{const S=n.colW[v],b=n.colH[v];let A=h+b/2;for(const _ of E){const y=i.get(_),[C,L]=Yl(y),D=d+S/2;f.push({work:y,pos:Di(t,e+D*a,A-L/2),w:C,h:L,depth:gc[y.kind]}),A-=L+If}d+=S+Pf});const u=s.cols.flat().map(E=>i.get(E)),m=u.length>1?Nf:Df,x=u.length>1?P_(u):E_,g=e+(n.w/2+Uf+m/2)*a,p=Math.min(T_,h+n.h/2-x/2),M=Di(t,e,h);return{def:s,face:t,centre:M,normal:c,right:l,w:n.w,h:n.h,items:f,label:{pos:Di(t,g,Math.max(p,.3+x/2)),w:m,h:x,works:u},lamp:k_(M,c,l,n,f,r),over:o,text:s.text}}function k_(s,t,e,n,i,r){const o=r.H-.03;let a=hu;for(let M=.2;M<=hu+.25;M+=.05)if(qi(r.solids,s[0]+t[0]*.02,s[2]+t[2]*.02,s[0]+t[0]*M,s[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const c=[s[0]+t[0]*a,o,s[2]+t[2]*a],l=i.reduce((M,E)=>M+E.depth,0)/Math.max(1,i.length),h=[s[0]+t[0]*l,s[1],s[2]+t[2]*l],f=[h[0]-c[0],h[1]-c[1],h[2]-c[2]],d=Math.hypot(f[0],f[1],f[2]),u=[f[0]/d,f[1]/d,f[2]/d];let m=0;for(const[M,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[s[0]+e[0]*M*n.w/2-c[0],s[1]+E*n.h/2-c[1],s[2]+e[2]*M*n.w/2-c[2]],S=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*u[0]+v[1]*u[1]+v[2]*u[2])/S)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,g=[-f[0]/d,-f[1]/d,-f[2]/d],p=g[0]*t[0]+g[2]*t[2];return{p:c,d:u,cOuter:Math.cos(x),cInner:Math.cos(m),i:d*d/Math.max(.2,p)}}function B_(s,t,e){if(s.version===2||!s.hang.some(o=>"cols"in o))return!1;const{placed:n}=z_(s,t,e),i=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&i.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const c of o.items)i.push({id:c.work.id,wall:a.wall,side:a.side,u:r(a,c.pos),y:+c.pos[1].toFixed(4)})}return s.hang=i,s.version=2,!0}const H_=["b","c","s","t","sh","hl"],Of=s=>!s||H_.every(t=>!s[t]);function kf(s){const t=e=>(s==null?void 0:s[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const uu=s=>Math.min(1,Math.max(0,s));function G_(s,t){let e=Math.pow(s,t.gamma);e=uu(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,i=e*e*(1-e)*6.75;return uu(e+t.sh*.25*n+t.hl*.25*i)}const V_=`
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
  }`;function W_(s){const t=kf(s);return{uAdj:{value:Of(s)?0:1},uWarm:{value:new U(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let bi=null;const fu="http://www.w3.org/2000/svg";function X_(s,t){if(Of(t))return"";bi||(bi=document.createElementNS(fu,"svg"),bi.setAttribute("width","0"),bi.setAttribute("height","0"),bi.style.position="absolute",document.body.append(bi));const e=`adj-${s}`;let n=bi.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(fu,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),bi.append(n));const i=kf(t),[r,,o]=i.warm,a=[.2126,.7152,.0722],c=i.sat,l=Array.from({length:65},(f,d)=>G_(d/64,i).toFixed(4)).join(" "),h=[0,1,2].map(f=>[0,1,2].map(d=>((1-c)*a[d]+(f===d?c:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${o} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${l}"/><feFuncG type="table" tableValues="${l}"/><feFuncB type="table" tableValues="${l}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const Gn=1.62,q_=12,Y_=6.5,$_=2,K_=1.7,Ei=1.15,du=.0022,Z_=2.6,J_=4.6,pn=.3;class Q_{constructor(t){I(this,"pos",new U(6.6,Gn,10.2));I(this,"vel",new U);I(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));I(this,"pitch",.05);I(this,"yawVel",0);I(this,"pitchVel",0);I(this,"keys",new Set);I(this,"taps",new Map);I(this,"frozen",!1);I(this,"holdLook",!1);I(this,"freeLook",!1);I(this,"glide",new Nt);I(this,"spin",0);I(this,"goal",null);I(this,"moved",!1);I(this,"solids",[]);I(this,"obstacles",[]);I(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=t,addEventListener("keydown",e=>{var n,i;e.metaKey||e.ctrlKey||e.altKey||(i=(n=e.target).closest)!=null&&i.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("message",e=>{var i;const n=(i=e.data)==null?void 0:i.rmiKey;!n||!/^https:\/\/(www\.)?robynmiller\.net$/.test(e.origin)||(n.type==="down"?this.keys.add(n.code):this.keys.delete(n.code))}),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{this.frozen||(document.pointerLockElement===this.canvas?this.holdLook:!this.freeLook)||(this.yaw-=e.movementX*du,this.pitch=Math.max(-Ei,Math.min(Ei,this.pitch-e.movementY*du)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}drag(t,e){this.pos.x+=t,this.pos.z+=e,this.collide(),this.moved=!0,this.goal=null}turnBy(t,e){this.yaw+=t,this.pitch=Math.max(-Ei,Math.min(Ei,this.pitch+e)),this.moved=!0,this.goal=null}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,f]of this.taps)f-t<=0?this.taps.delete(h):this.taps.set(h,f-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*$_-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let i=0;e.has("ArrowUp")&&(i+=1),e.has("ArrowDown")&&(i-=1),this.pitchVel+=(i*K_-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>Ei||this.pitch<-Ei)&&(this.pitch=Math.max(-Ei,Math.min(Ei,this.pitch)),this.pitchVel=0);let r=0,o=0;e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1),(r||o||n||i)&&(this.moved=!0);let a=0,c=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?J_:Z_,f=Math.hypot(r,o),d=Math.sin(this.yaw),u=Math.cos(this.yaw);a=(-d*r+u*o)/f*h,c=(-u*r-d*o)/f*h}const l=1-Math.exp(-(r||o?q_:Y_)*t);if(this.vel.x+=(a-this.vel.x)*l,this.vel.z+=(c-this.vel.z)*l,this.vel.lengthSq()>1e-8){const h=this.pos.x,f=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const d=this.pos.x-(h+this.vel.x*t),u=this.pos.z-(f+this.vel.z*t),m=Math.hypot(d,u);if(m>1e-9){const x=d/m,g=u/m,p=this.vel.x*x+this.vel.z*g;p<0&&(this.vel.x-=x*p,this.vel.z-=g*p)}}this.frozen||this.coast(t)}coast(t){const e=this.goal;if(e){const n=e.x-this.pos.x,i=e.z-this.pos.z,r=Math.hypot(n,i),o=1-Math.exp(-2.6*t),a=Math.min(r,Math.max(r*o,Math.min(r,.9*t)));if(r>1e-4){const c=this.pos.x,l=this.pos.z;this.pos.x+=n/r*a,this.pos.z+=i/r*a,this.collide(),Math.hypot(this.pos.x-c,this.pos.z-l)<a*.2&&(this.goal=null)}e.yaw!==void 0&&(this.yaw+=Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw))*o),e.pitch!==void 0&&(this.pitch+=(e.pitch-this.pitch)*o),r<.02&&(e.yaw===void 0||Math.abs(Math.atan2(Math.sin(e.yaw-this.yaw),Math.cos(e.yaw-this.yaw)))<.01)&&(this.goal=null);return}if(this.glide.lengthSq()>1e-6){const n=this.pos.x,i=this.pos.z;this.pos.x+=this.glide.x*t,this.pos.z+=this.glide.y*t,this.collide();const r=(this.pos.x-n)/Math.max(t,1e-6),o=(this.pos.z-i)/Math.max(t,1e-6);this.glide.set(r,o).multiplyScalar(Math.exp(-2.4*t)),this.glide.lengthSq()<4e-4&&this.glide.set(0,0)}Math.abs(this.spin)>.001?(this.yaw+=this.spin*t,this.spin*=Math.exp(-3.2*t)):this.spin=0}collide(){const t=this.pos;for(let e=0;e<2;e++)for(const n of this.solids){const i=Math.max(n.x0,Math.min(t.x,n.x1)),r=Math.max(n.z0,Math.min(t.z,n.z1)),o=t.x-i,a=t.z-r,c=o*o+a*a;if(!(c>=pn*pn))if(c>1e-12){const l=Math.sqrt(c);t.x+=o/l*(pn-l),t.z+=a/l*(pn-l)}else{const l=[t.x-n.x0+pn,n.x1-t.x+pn,t.z-n.z0+pn,n.z1-t.z+pn],h=Math.min(...l);h===l[0]?t.x=n.x0-pn:h===l[1]?t.x=n.x1+pn:h===l[2]?t.z=n.z0-pn:t.z=n.z1+pn}}for(const e of this.obstacles){const n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i),o=pn*.7+e.r;r<o&&r>1e-6&&(t.x=e.x+n/r*o,t.z=e.z+i/r*o)}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const Mc=.0254,$l=.72,yc=.7,an=2*Mc,j_=6*Mc,tM=.15,Be=Gn,In=-yc/2,Dn=yc/2,Ri=In+j_,Sc=Be+Ri,ur=s=>Sc-s,Sn=s=>Sc-s-tM*Math.SQRT2,Va=ur(Dn),Ns=.46,Fs=.3,qo=.018,Yo=-.06,pu={w:Ns-.07,h:Fs-.08},mu={w:Ns,h:Fs},eM=.47,nM=.5,gu=.7,Ar=new U(0,1,1).normalize(),Bf=new U(0,1,-1).normalize(),Hf={value:0};function iM(s,t,e){const n=new Map(t.map(r=>[r.id,r])),i=[];for(const r of s.machines??[]){const o=n.get(r.id);if(!o||o.off)continue;const a=Ge.degToRad(r.rot),c=new Kt().makeRotationY(a).setPosition(r.x,0,r.z),l=[Math.sin(a),0,Math.cos(a)],h=new Yt().setFromMatrix4(c),f=new U(0,Sn(Yo),Yo).addScaledVector(Ar,.004).applyMatrix4(c),d=Ar.clone().applyMatrix3(h),u=Bf.clone().applyMatrix3(h),m=new U(1,0,0).applyMatrix3(h);i.push({machine:o,spot:r,matrix:c,front:l,screen:{c:f,n:d,up:u,right:m,w:Ns,h:Fs},lamp:sM(r,l,f,e)})}return i}function sM(s,t,e,n){const i=[s.x+t[0]*gu,n-.03,s.z+t[2]*gu],r=new U(e.x-i[0],e.y-i[1],e.z-i[2]),o=r.length();r.divideScalar(o);const a=Math.atan2(.62,o),c=a+Ge.degToRad(11);return{p:i,d:[r.x,r.y,r.z],cOuter:Math.cos(c),cInner:Math.cos(a),i:nM*o*o}}const Ti=new Bt("#efeee9"),er=new Bt("#3a3a3a");function rM(){const s=[],t=[],e=[],n=[],i=[],r=g=>new U(g[0],g[1],g[2]),o=(g,p,M,E)=>{const v=new U().crossVectors(r(g[1]).sub(r(g[0])),r(g[2]).sub(r(g[0]))).normalize();v.dot(r(p))<0&&(g=[...g].reverse(),v.negate());const S=s.length/3;for(const b of g)s.push(b[0],b[1],b[2]),t.push(v.x,v.y,v.z),e.push(M.r,M.g,M.b),n.push(E);for(let b=1;b<g.length-1;b++)i.push(S,S+b,S+b+1)},a=-$l/2,c=$l/2,l=a+an,h=c-an,f=(g,p)=>[g,ur(p),p];o([[a,0,In],[c,0,In],[c,Be,In],[a,Be,In]],[0,0,-1],Ti,0),o([[a,0,Dn],[c,0,Dn],[c,Va,Dn],[a,Va,Dn]],[0,0,1],Ti,0),o([[a,Be,In],[c,Be,In],[c,Be,Ri],[a,Be,Ri]],[0,1,0],Ti,0);for(const[g,p]of[[a,-1],[c,1]])o([[g,0,In],[g,0,Dn],[g,Va,Dn],[g,Be,Ri],[g,Be,In]],[p,0,0],Ti,0);const d=Ri+an,u=Dn-an;o([f(a,u),f(c,u),f(c,Dn),f(a,Dn)],[0,1,1],Ti,0),o([f(a,Ri),f(c,Ri),f(c,d),f(a,d)],[0,1,1],Ti,0),o([f(a,d),f(l,d),f(l,u),f(a,u)],[0,1,1],Ti,0),o([f(h,d),f(c,d),f(c,u),f(h,u)],[0,1,1],Ti,0);const m=In+an;o([[l,Sn(u),u],[h,Sn(u),u],[h,ur(u),u],[l,ur(u),u]],[0,0,-1],er,1),o([[l,Sn(m),m],[h,Sn(m),m],[h,Be-an,m],[l,Be-an,m]],[0,0,1],er,1),o([[l,Be-an,m],[h,Be-an,m],[h,Be-an,d],[l,Be-an,d]],[0,-1,0],er,1);for(const[g,p]of[[l,1],[h,-1]])o([[g,Sn(m),m],[g,Sn(u),u],[g,ur(u),u],[g,Be-an,d],[g,Be-an,m]],[p,0,0],er,1);o([[l,Sn(m),m],[h,Sn(m),m],[h,Sn(u),u],[l,Sn(u),u]],[0,1,1],er,1);const x=new Te;return x.setAttribute("position",new Wt(s,3)),x.setAttribute("normal",new Wt(t,3)),x.setAttribute("aCol",new Wt(e,3)),x.setAttribute("aInner",new Wt(n,1)),x.setIndex(i),x}let xu=null;const wc=`
  #define KW ${($l/2).toFixed(5)}
  #define KD ${(yc/2).toFixed(5)}
  #define KH ${Be.toFixed(5)}
  #define KT ${an.toFixed(5)}
  #define KZB ${In.toFixed(5)}
  #define KZF ${Dn.toFixed(5)}
  #define KZC ${Ri.toFixed(5)}
  #define KK ${Sc.toFixed(5)}
`;function oM(s,t,e,n){return new Xe({uniforms:{uLP:{value:s},uLD:{value:t},uLC:{value:new Nt(e.cOuter,e.cInner)},uLI:{value:e.i},uAmb:{value:ia},uLCol:{value:Os},uSC:{value:n},uSN:{value:Ar.clone()}},vertexShader:`
      attribute vec3 aCol; attribute float aInner;
      varying vec3 vP; varying vec3 vN; varying vec3 vWN; varying vec3 vCol; varying float vInner;
      void main() {
        vP = position; vN = normal; vWN = normalize(mat3(modelMatrix) * normal); vCol = aCol; vInner = aInner;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${wc}
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
      }`})}function aM(s,t=!1){return new Xe({uniforms:{uLP:{value:new U(...s)},uGW:{value:Ns/(Ns+2*qo)},uGH:{value:Fs/(Fs+2*qo)},uHaze:{value:t?0:.006}},vertexShader:`
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
      }`})}const lM={A:[[[0,0],[0,4],[2,6],[4,4],[4,0]],[[0,2],[4,2]]],B:[[[0,0],[0,6],[3,6],[4,5],[4,4],[3,3],[0,3]],[[3,3],[4,2],[4,1],[3,0],[0,0]]],C:[[[4,0],[0,0],[0,6],[4,6]]],D:[[[0,0],[0,6],[2,6],[4,4],[4,2],[2,0],[0,0]]],E:[[[4,0],[0,0],[0,6],[4,6]],[[0,3],[3,3]]],F:[[[0,0],[0,6],[4,6]],[[0,3],[3,3]]],G:[[[2,2],[4,2],[4,0],[0,0],[0,6],[4,6],[4,4]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[0,0],[4,0]],[[2,0],[2,6]],[[0,6],[4,6]]],J:[[[0,2],[2,0],[4,0],[4,6]]],K:[[[0,0],[0,6]],[[4,6],[0,3],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,4],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],O:[[[0,0],[0,6],[4,6],[4,0],[0,0]]],P:[[[0,0],[0,6],[4,6],[4,3],[0,3]]],Q:[[[0,0],[0,6],[4,6],[4,2],[2,0],[0,0]],[[2,2],[4,0]]],R:[[[0,0],[0,6],[4,6],[4,3],[0,3]],[[1,3],[4,0]]],S:[[[4,6],[0,6],[0,3],[4,3],[4,0],[0,0]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],U:[[[0,6],[0,0],[4,0],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[0,0],[2,2],[4,0],[4,6]]],X:[[[0,0],[4,6]],[[0,6],[4,0]]],Y:[[[0,6],[2,4],[4,6]],[[2,4],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],0:[[[0,0],[0,6],[4,6],[4,0],[0,0]]],1:[[[1,5],[2,6],[2,0]],[[1,0],[3,0]]],2:[[[0,6],[4,6],[4,3],[0,3],[0,0],[4,0]]],3:[[[0,0],[4,0],[4,6],[0,6]],[[0,3],[4,3]]],4:[[[0,6],[0,3],[4,3]],[[4,6],[4,0]]],5:[[[4,6],[0,6],[0,3],[4,3],[4,0],[0,0]]],6:[[[4,6],[0,6],[0,0],[4,0],[4,3],[0,3]]],7:[[[0,6],[4,6],[4,0]]],8:[[[0,0],[4,0],[4,6],[0,6],[0,0]],[[0,3],[4,3]]],9:[[[4,3],[0,3],[0,6],[4,6],[4,0],[0,0]]],"-":[[[1,3],[3,3]]],".":[[[2,0],[2,.35]]],",":[[[2,.5],[1.4,-1]]],"'":[[[2,6],[2,4.6]]],":":[[[2,1],[2,1.35]],[[2,4],[2,4.35]]],"/":[[[0,0],[4,6]]],"!":[[[2,6],[2,1.6]],[[2,0],[2,.35]]],"?":[[[0,4],[0,6],[4,6],[4,3],[2,3],[2,1.6]],[[2,0],[2,.35]]],"&":[[[4,0],[1,4],[1,6],[3,6],[3,5],[0,2],[0,0],[2,0],[4,2]]],"~":[[[0,3],[1,4],[3,2],[4,3]]],"→":[[[0,3],[4,3]],[[2.6,4.4],[4,3],[2.6,1.6]]],"–":[[[1,3],[3,3]]],"—":[[[0,3],[4,3]]]},Wa=6,vu=10;function cM(s){const t=s.toUpperCase().trim();if(/[|\n]/.test(t))return t.split(/\s*[|\n]\s*/).filter(Boolean);if(t.length<=11||!t.includes(" "))return[t];let e=[t],n=1/0;const i=t.split(/\s+/);for(let r=1;r<i.length;r++){const o=i.slice(0,r).join(" "),a=i.slice(r).join(" "),c=Math.max(o.length,a.length);c<n&&(n=c,e=[o,a])}return e}function hM(s,t,e){const n=cM(s),i=Math.max(...n.map(c=>c.length*Wa-2),1),r=n.length*6+(n.length-1)*(vu-6),o=Math.min(t/i,e/r,.07/6),a=[];return n.forEach((c,l)=>{const h=(c.length*Wa-2)*o,f=r*o/2-l*vu*o;[...c].forEach((d,u)=>{const m=lM[d];if(!m)return;const x=-h/2+u*Wa*o,g=f-6*o;for(const p of m)for(let M=0;M<p.length-1;M++){const E=p[M],v=p[M+1];a.push([x+E[0]*o,g+E[1]*o,x+v[0]*o,g+v[1]*o])}})}),{segs:a,u:o}}function uM(s){const t=[],e=[],n=[],i=[],r=[];s.forEach((c,l)=>{const h=t.length/2;for(const[f,d]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(c[0],c[1]),e.push(c[2],c[3]),n.push(f,d),i.push(l*7.31+.5);r.push(h,h+1,h+2,h,h+2,h+3)});const o=new Te,a=[];for(let c=0;c<t.length/2;c++)a.push((t[2*c]+e[2*c])/2,(t[2*c+1]+e[2*c+1])/2,0);return o.setAttribute("position",new Wt(a,3)),o.setAttribute("aA",new Wt(t,2)),o.setAttribute("aB",new Wt(e,2)),o.setAttribute("aCorner",new Wt(n,2)),o.setAttribute("aSeed",new Wt(i,1)),o.setIndex(r),o.boundingSphere=new Ki(new U,.4),o}function fM(s,t,e){return new Xe({uniforms:{uTime:Hf,uSeed:{value:t},uOn:e,uBeam:{value:Math.max(7e-4,s*.085)},uHalo:{value:Math.max(.0022,s*.3)},uExt:{value:Math.max(.009,s*1.3)},uJit:{value:s*.07},uMis:{value:s*.12},uWob:{value:s*.06}},transparent:!0,depthWrite:!1,blending:el,toneMapped:!1,vertexShader:`
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
      }`})}const co=4*Mc,dM=-.16,_u=.2,pM=.62;let Ms=null;function mM(){if(Ms)return Ms;const s=document.createElement("canvas");s.width=s.height=512;const t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#fbec7a"),e.addColorStop(.62,"#f9e66c"),e.addColorStop(1,"#efd85a"),t.fillStyle=e,t.fillRect(0,0,512,512),t.fillStyle="rgba(255,255,255,0.10)",t.fillRect(0,0,512,92),t.fillStyle="#1f1d2b",t.textAlign="center",t.textBaseline="alphabetic";const n=(i,r,o,a,c)=>{t.save(),t.translate(o,a),t.rotate(c),t.font=`${r}px "Caveat Brush", "Marker Felt", "Comic Sans MS", cursive`,t.fillText(i,0,0),t.restore()};return n("OUT",196,250,205,-.04),n("of",136,268,312,.04),n("ORDER",168,250,448,-.03),Ms=new Lr(s),Ms.colorSpace=Ue,Ms.anisotropy=8,Ms}function gM(s,t,e,n){const i=co/2,r=i-co*pM,o=g=>{const p=r-g;return[g+p-p*Math.cos(_u),p*Math.sin(_u)]},a=[],c=[],l=[];[i,r,r-(r+i)/2,-i].forEach((g,p)=>{const[M,E]=g>=r?[g,0]:o(g);for(const v of[-i,i])a.push(v,M,.0012+E),c.push((v+i)/co,(g+i)/co);if(p){const v=p*2;l.push(v-2,v-1,v+1,v-2,v+1,v)}});const f=new Te;f.setAttribute("position",new Wt(a,3)),f.setAttribute("uv",new Wt(c,2)),f.setIndex(l),f.computeVertexNormals();const d=new Kt().makeTranslation(-.035,.012,0).multiply(new Kt().makeRotationZ(dM)),u=new Xe({uniforms:{uMap:{value:mM()},uLP:{value:s},uLD:{value:t},uLC:{value:new Nt(e.cOuter,e.cInner)},uLI:{value:e.i},uAmb:{value:ia},uLCol:{value:Os}},side:Yn,vertexShader:`
      uniform mat4 uFrame;
      varying vec3 vP; varying vec3 vN; varying vec2 vUv;
      void main() {
        // (the machine's frame: the mesh sits in it, so modelMatrix's parent part is the machine's)
        vP = (uFrame * vec4(position, 1.0)).xyz; vN = normalize(mat3(uFrame) * normal); vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${wc}
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
      }`}),m=n.clone().multiply(new Kt().makeTranslation(0,0,4e-4)).multiply(d);u.uniforms.uFrame={value:m};const x=new we(f,u);return x.matrixAutoUpdate=!1,x.matrix.copy(m),{mesh:x,dispose(){f.dispose(),u.dispose()}}}function xM(s){xu??(xu=rM());const t=new De;t.matrixAutoUpdate=!1,t.matrix.copy(s.matrix);const e=s.matrix.clone().invert(),n=new Yt().setFromMatrix4(e),i=new U(...s.lamp.p).applyMatrix4(e),r=new U(...s.lamp.d).applyMatrix3(n),o=new U(0,Sn(Yo),Yo),a=oM(i,r,s.lamp,o),c=new we(xu,a),l=new Kt().makeBasis(new U(1,0,0),Bf,Ar).setPosition(o.clone().addScaledVector(Ar,.004)),h=!!s.machine.outOfOrder,f=aM(s.lamp.p,h),d=new Fn(Ns+2*qo,Fs+2*qo),u=new we(d,f);u.matrixAutoUpdate=!1,u.matrix.copy(l);const{segs:m,u:x}=hM(s.machine.name,pu.w,pu.h),g=uM(m);let p=0;for(const A of s.machine.id)p=(p*31+A.charCodeAt(0))%997;const M={value:h?0:1},E=fM(x,p/997,M),v=new we(g,E);v.matrixAutoUpdate=!1,v.matrix.copy(l).multiply(new Kt().makeTranslation(0,0,8e-4)),v.renderOrder=2,t.add(c,u,v);const S=[c,u,v];let b=null;h&&(b=gM(i,r,s.lamp,l),t.add(b.mesh),S.push(b.mesh)),t.updateMatrixWorld(!0);for(const A of S)A.userData.machine=s.machine.id;return{placed:s,group:t,meshes:S,textOn:M,dispose(){a.dispose(),f.dispose(),d.dispose(),g.dispose(),E.dispose(),b==null||b.dispose()}}}const Ao=16;function vM(s){const t=(e,n)=>{const i=e.slice(0,Ao);for(;i.length<Ao;)i.push(n());return i};return{n:Math.min(Ao,s.length),lp:t(s.map(e=>new U(...e.lamp.p)),()=>new U),ld:t(s.map(e=>new U(...e.lamp.d)),()=>new U(0,-1,0)),lc:t(s.map(e=>new Nt(e.lamp.cOuter,e.lamp.cInner)),()=>new Nt(1,1)),li:t(s.map(e=>e.lamp.i),()=>0),box:t(s.map(e=>{const n=Ge.degToRad(e.spot.rot);return new xe(e.spot.x,e.spot.z,Math.cos(n),Math.sin(n))}),()=>new xe(0,0,1,0))}}const _M=s=>({uMN:{value:s.n},uMLP:{value:s.lp},uMLD:{value:s.ld},uMLC:{value:s.lc},uMLI:{value:s.li},uMB:{value:s.box}}),MM=`
  #define MAXM ${Ao}
  #define LENS 0.06
  ${wc}
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
`,oi=16,Es=48,Os=new Bt(1,.965,.915),ia=.06,yM=.3,Gf=.05,bc=4,SM=.6,Vf=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,Ec=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,Wf=`
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
`,Tc=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,Ac=s=>({uAO:{value:s.ao},uLT:{value:s.light},uBO:{value:s.origin},uAoXf:{value:s.aoXf},uLtXf:{value:s.lightXf}}),Xf=s=>({uCeilTex:{value:s.tex},uCeilO:{value:s.origin},uCeilS:{value:s.scale}}),qf=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function Mu(s,t,e,n,i){const r=(o,a,c)=>{const l=o.slice(0,a);for(;l.length<a;)l.push(c());return l};return new Xe({uniforms:{uN:{value:Math.min(s.lamps.length,oi)},uLP:{value:r(s.lamps.map(o=>o.p),oi,()=>new U)},uLD:{value:r(s.lamps.map(o=>o.d),oi,()=>new U(0,-1,0))},uLC:{value:r(s.lamps.map(o=>o.c),oi,()=>new Nt(1,1))},uLI:{value:r(s.lamps.map(o=>o.i),oi,()=>0)},uB:{value:Math.min(s.boxes.length,Es)},uBC:{value:r(s.boxes.map(o=>o.c),Es,()=>new U(0,-99,0))},uBS:{value:r(s.boxes.map(o=>o.s),Es,()=>new U)},uBL:{value:r(s.boxes.map(o=>o.lamp),Es,()=>0)},uFN:{value:s.normal},uFR:{value:s.right},uAxisX:{value:s.axisX?1:0},uU0:{value:s.u0},uU1:{value:s.u1},uCA:{value:s.cornerA?1:0},uCB:{value:s.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:ia},uBounceK:{value:bc},uLampK:{value:yM},uCeilK:{value:Gf},...Xf(i),uLCol:{value:Os},...Ac(n)},vertexShader:Wf,fragmentShader:`
      #define MAXL ${oi}
      #define MAXB ${Es}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${qf}
      ${Ec}
      ${Vf}
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
        ${Tc}
      }`})}function wM(s,t){return new Xe({uniforms:{uAmb:{value:Gf},uBounceK:{value:bc},...Xf(t),...Ac(s)},vertexShader:Wf,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Ec}
      ${qf}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${Tc}
      }`})}function bM(s,t,e,n){return new Xe({uniforms:{uRefl:{value:s},uTexMat:{value:t},uAmb:{value:ia},uBounceK:{value:bc},uSpillK:{value:SM},uLCol:{value:Os},...Ac(e),..._M(n)},vertexShader:`
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
      ${Ec}
      ${Vf}
      ${MM}
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
        ${Tc}
      }`})}function yu(s,t,e,n){return new Xe({uniforms:{uMap:{value:s},...W_(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new Bt(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:Os}},toneMapped:!1,vertexShader:`
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
      ${V_}
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
      }`})}const nr=.05,ir=.2;function EM(s,t,e){const n=s.inner,i=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(i/nr)+1,a=Math.ceil(r/nr)+1,c=new Uint8Array(o*a),l=s.solids;for(let E=0;E<a;E++){const v=n.z0+E*nr;for(let S=0;S<o;S++){const b=n.x0+S*nr;let A=1;for(const _ of l){const y=Math.max(_.x0-b,0,b-_.x1),C=Math.max(_.z0-v,0,v-_.z1),L=y*y+C*C;L>1.44||(A*=1-.42*Math.exp(-Math.sqrt(L)/.28))}c[E*o+S]=Math.round(Math.max(0,Math.min(1,A))*255)}}const h=Math.ceil(i/ir)+1,f=Math.ceil(r/ir)+1,d=new Float32Array(h*f*4),u=Os,m=t.map(E=>{const v=new Bt(E.face.color),b=(E.w+.5)*(E.h+1)*.7*.55;return{c:[E.centre[0]+E.normal[0]*.05,1.2,E.centre[2]+E.normal[2]*.05],n:E.normal,rgb:[v.r*u.r*b,v.g*u.g*b,v.b*u.b*b],lamp:E.lamp}});for(let E=0;E<f;E++){const v=n.z0+E*ir;for(let S=0;S<h;S++){const b=n.x0+S*ir;let A=0,_=0,y=0,C=0;for(const D of m){const z=b-D.c[0],G=v-D.c[2],F=z*z+G*G;if(F>64)continue;const Q=z*D.n[0]+G*D.n[2];if(Q>.02){const X=Math.max(F+D.c[1]*D.c[1],.3),k=Math.sqrt(X),H=Q/k*(D.c[1]/k)/(Math.PI*X);H>5e-4&&!qi(s.solids,D.c[0],D.c[2],b,v)&&(A+=D.rgb[0]*H,_+=D.rgb[1]*H,y+=D.rgb[2]*H)}const Y=D.lamp,tt=b-Y.p[0],V=-Y.p[1],Z=v-Y.p[2],ot=tt*tt+V*V+Z*Z,pt=Math.sqrt(ot),N=(tt*Y.d[0]+V*Y.d[1]+Z*Y.d[2])/pt;if(N>Y.cOuter){const X=Math.min(1,(N-Y.cOuter)/(Y.cInner-Y.cOuter)),k=X*X*(3-2*X),H=Y.i*k*(Y.p[1]/pt)/ot;H>.002&&!qi(s.solids,Y.p[0],Y.p[2],b,v)&&(C+=H)}}const L=(E*h+S)*4;d[L]=A,d[L+1]=_,d[L+2]=y,d[L+3]=C}}e==null||e.ao.dispose(),e==null||e.light.dispose();const x=new Ds(c,o,a,jo,hn);x.magFilter=x.minFilter=We,x.needsUpdate=!0;const g=new Uint16Array(d.length);for(let E=0;E<d.length;E++)g[E]=Tp.toHalfFloat(d[E]);const p=new Ds(g,h,f,xn,An);p.magFilter=p.minFilter=We,p.needsUpdate=!0;const M=(E,v,S)=>new xe(1/(E*v),1/(E*S),.5/v,.5/S);return{ao:x,light:p,origin:new Nt(n.x0,n.z0),aoXf:M(nr,o,a),lightXf:M(ir,h,f)}}const He=.15,qe=8,ai=(s,t)=>[s[0]+t[0],s[1]+t[1],s[2]+t[2]],ii=(s,t)=>[s[0]*t,s[1]*t,s[2]*t],ho=(s,t)=>[s[0]-t[0],s[1]-t[1],s[2]-t[2]],Su=(s,t)=>[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],wu=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],TM=[0,1,0];class Yf{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),i=Su(ho(t[2],t[0]),ho(t[3],t[1])),r=ai(ai(e[0],e[1]),ai(e[2],e[3]));wu(i,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(i=>this.v(i,e));wu(Su(ho(t[1],t[0]),ho(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new Te;return t.setAttribute("position",new Wt(this.pos,3)),t.setAttribute("normal",new Wt(this.nor,3)),t.setAttribute("uv",new Wt(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const $f=(s,t)=>s?He:Math.max(0,Math.min(He,t/2-.002));function AM(s,t,e){const n=new Yf,i=[s.n[0],0,s.n[1]],r=s.axis==="x"?[1,0,0]:[0,0,1],o=(_,y,C)=>{const L=Di(s,_,C);return[L[0]+i[0]*y,C,L[2]+i[2]*y]},a=$f(s.outer,s.t),c=t-He,l=Math.min(e,c),h=s.cornerA?"in":s.freeA?"free":"flat",f=s.cornerB?"in":s.freeB?"free":"flat",d=s.u0+(h==="in"?He:h==="free"?a:0),u=s.u1-(f==="in"?He:f==="free"?a:0);if(u-d<.01)return n;const m=(_,y,C,L)=>{y-_<1e-4||L-C<1e-4||n.quad([o(_,0,C),o(y,0,C),o(y,0,L),o(_,0,L)],[i,i,i,i])},x=[...s.doors].sort((_,y)=>_[0]-y[0]);if(!x.length)m(d,u,0,c);else{let _=d;for(const[y,C]of x)m(_,Math.min(u,y-a),0,l),_=Math.max(_,C+a);m(_,u,0,l),m(d,u,l,c)}const g=(_,y,C,L)=>{if(a<.01)return;const D=z=>ai(ii(i,Math.cos(z)),ii(y,Math.sin(z)));for(let z=0;z<qe;z++){const G=z/qe*Math.PI/2,F=(z+1)/qe*Math.PI/2,Q=(Y,tt)=>ai(o(_,-a,tt),ii(D(Y),a));n.quad([Q(G,C),Q(F,C),Q(F,L),Q(G,L)],[D(G),D(F),D(F),D(G)])}},p=_=>[-_[0],-_[1],-_[2]];for(const[_,y]of x)_-s.u0>a+.01&&g(_-a,r,0,l),s.u1-y>a+.01&&g(y+a,p(r),0,l);h==="free"&&g(s.u0+a,p(r),0,t),f==="free"&&g(s.u1-a,r,0,t);const M=(_,y)=>{const C=ai(ai(o(_,0,0),ii(i,He)),ii(y,He)),L=z=>ai(ii(i,Math.cos(z)),ii(y,Math.sin(z))),D=Math.PI/4;for(let z=0;z<qe/2;z++){const G=z/(qe/2)*D,F=(z+1)/(qe/2)*D,Q=(Y,tt)=>[C[0]-He*L(Y)[0],tt,C[2]-He*L(Y)[2]];n.quad([Q(G,0),Q(F,0),Q(F,c),Q(G,c)],[L(G),L(F),L(F),L(G)]);for(let Y=0;Y<qe;Y++){const tt=Y/qe*Math.PI/2,V=(Y+1)/qe*Math.PI/2,Z=(pt,N)=>{const X=L(pt);return[C[0]-He*Math.cos(N)*X[0],c+He*Math.sin(N),C[2]-He*Math.cos(N)*X[2]]},ot=(pt,N)=>{const X=L(pt);return[Math.cos(N)*X[0],-Math.sin(N),Math.cos(N)*X[2]]};n.quad([Z(G,tt),Z(F,tt),Z(F,V),Z(G,V)],[ot(G,tt),ot(F,tt),ot(F,V),ot(G,V)])}}};h==="in"&&M(s.u0,r),f==="in"&&M(s.u1,p(r));const E=h==="in"?s.u0+He:d,v=f==="in"?s.u1-He:u,S=(_,y)=>o(_,He-He*Math.cos(y),c+He*Math.sin(y)),b=_=>ai(ii(i,Math.cos(_)),ii(TM,-Math.sin(_)));for(let _=0;_<qe;_++){const y=_/qe*Math.PI/2,C=(_+1)/qe*Math.PI/2;n.quad([S(E,y),S(v,y),S(v,C),S(E,C)],[b(y),b(y),b(C),b(C)])}const A=(_,y)=>{const C=o(_,0,t);for(let L=0;L<qe;L++){const D=L/qe*Math.PI/2,z=(L+1)/qe*Math.PI/2;n.tri([C,S(_,D),S(_,z)],y)}};return h!=="in"&&A(E,p(r)),f!=="in"&&A(v,r),n}function RM(s,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new Yf),e.get(a)),i=s.H,r=Math.min(s.doorH,i-He),o=a=>{var c,l;return((c=s.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:c.color)??((l=s.faces.find(h=>h.wall===a))==null?void 0:l.color)??"#f2f1ee"};for(const a of s.walls){const c=a.id==="S";if(a.outer&&!c)continue;const l=n(o(a.id)),h=(E,v,S)=>a.axis==="x"?[E,S,v]:[v,S,E],f=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[d,u]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],m=$f(a.outer,a.t),x=c?[{c:d,s:-1}]:[{c:d,s:-1},{c:u,s:1}],g=d+m,p=c?d+t:u-m,M=c?[[s.entrance.a,s.entrance.b]]:s.faces.filter(E=>E.wall===a.id).flatMap(E=>E.doors).filter((E,v,S)=>S.findIndex(b=>Math.abs(b[0]-E[0])<1e-6)===v);for(const[E,v]of M){const S=(_,y)=>{p-g>.001&&l.quad([h(_,g,0),h(_,p,0),h(_,p,r),h(_,g,r)],[y,y,y,y])};S(E,f),S(v,[-f[0],0,-f[2]]);const b=[0,-1,0],A=c?d+t:u;l.quad([h(E,d,r),h(v,d,r),h(v,A,r),h(E,A,r)],[b,b,b,b]);for(const{c:_,s:y}of x)for(const[C,L]of[[E,1],[v,-1]]){if(m<.01)continue;const D=C-L*m,z=_-y*m,G=h(C,_,r);for(let F=0;F<qe;F++){const Q=Y=>{const tt=Y/qe*Math.PI/2;return h(D+L*m*Math.sin(tt),z+y*m*Math.cos(tt),r)};l.tri([G,Q(F),Q(F+1)],b)}}}if(!a.outer)for(const E of s.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(S,b)=>{u-m-(d+m)>.001&&l.quad([h(S,d+m,0),h(S,u-m,0),h(S,u-m,i),h(S,d+m,i)],[b,b,b,b])};E.freeA&&v(E.u0,[-f[0],0,-f[2]]),E.freeB&&v(E.u1,f)}}return e}const bu=new Bt(1,1,1),Kf=.2,Kl=2;function CM(s,t,e,n){const i=new De;s.background=bu,s.fog=null;const r=n.outline,o=r.t-Kf,a=r.x0-r.t,c=r.x1+r.t,l=r.z0-r.t,h=r.z1+r.t,f=n.ceiling,d=n.doorHeight,u=f+1.4,m=n.entrance.x-n.entrance.w/2,x=n.entrance.x+n.entrance.w/2,g=n.entrance.x,p=new Kn({color:bu,toneMapped:!1}),M=(_,y,C,L,D,z)=>{const G=new we(new Tn(L,D,z),p);return G.position.set(_,y,C),G.userData.outside=!0,G.layers.set(Kl),i.add(G),G},E=-.5,v=u,S=(E+v)/2,b=v-E;M((a+m)/2,S,h-o/2,m-a,b,o),M((x+c)/2,S,h-o/2,c-x,b,o),M(g,(d+v)/2,h-o/2,x-m,v-d,o),M((a+c)/2,S,l+o/2,c-a,b,o),M(a+o/2,S,(l+h)/2,o,b,h-l-2*o),M(c-o/2,S,(l+h)/2,o,b,h-l-2*o),M((a+c)/2,(f+v)/2+.05,(l+h)/2,c-a-.02,v-f-.1,h-l-.02);const A=new we(new Fn(400,400).rotateX(-Math.PI/2),p);return A.position.y=-.002,A.layers.set(Kl),i.add(A),s.add(i),{group:i,dispose(){s.remove(i),i.traverse(_=>{var L;const y=_;y.geometry&&y.geometry.dispose();const C=Array.isArray(y.material)?y.material:y.material?[y.material]:[];for(const D of C)(L=D.map)==null||L.dispose(),D.dispose()})}}}class Eu{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"uv",[]);I(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const i of t)this.pos.push(i[0],i[1],i[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new Te;return t.setAttribute("position",new Wt(this.pos,3)),t.setAttribute("normal",new Wt(this.nor,3)),t.setAttribute("uv",new Wt(this.uv,2)),t.setIndex(this.idx),t}}const Rr=s=>new U(s[0],s[1],s[2]),Zf=s=>({p:Rr(s.p),d:Rr(s.d),c:new Nt(s.cOuter,s.cInner),i:s.i});function LM(s,t,e,n=[]){const i=t.filter(h=>h.face===s),r=i.map(h=>h.lamp),o=[],a=[],c=Math.min(40,Math.max(2,Math.ceil((s.u1-s.u0)/.5)));for(let h=0;h<=c;h++){const f=s.u0+(s.u1-s.u0)*h/c;for(const d of[.4,1.4,2.4])a.push(Di(s,f,d))}for(const h of[...t.filter(f=>f.face!==s).map(f=>f.lamp),...n]){const f=a[0];if((h.p[0]-f[0])*s.n[0]+(h.p[2]-f[2])*s.n[1]<.1)continue;let u=1/0;for(const m of a){const x=m[0]-h.p[0],g=m[1]-h.p[1],p=m[2]-h.p[2],M=Math.hypot(x,g,p);M>7||(x*h.d[0]+g*h.d[1]+p*h.d[2])/M<=h.cOuter||qi(e.solids,h.p[0],h.p[2],m[0]+s.n[0]*.03,m[2]+s.n[1]*.03)||(u=Math.min(u,M))}u<1/0&&o.push({L:h,d:u})}o.sort((h,f)=>h.d-f.d);for(const h of o){if(r.length>=oi)break;r.push(h.L)}const l=[];return i.forEach((h,f)=>{if(!(f>=oi))for(const d of h.items)l.length>=Es||d.text||l.push({c:Rr(d.pos),s:new U(d.w/2,d.h/2,d.depth),lamp:f})}),{lamps:r.slice(0,oi).map(Zf),boxes:l,normal:new U(s.n[0],0,s.n[1]),right:new U(s.right[0],0,s.right[1]),axisX:s.axis==="x",u0:s.u0,u1:s.u1,cornerA:s.cornerA,cornerB:s.cornerB}}const PM={lamps:[],boxes:[],normal:new U(0,0,1),right:new U(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function Tu(s,t,e,n=[0,1,0,1]){const[i,r,o,a]=n,c=[],l=[],h=[],f=[],d=[],u=(b,A,_,y)=>{const C=c.length/3;b.forEach((L,D)=>{c.push(...L),l.push(...A),h.push(..._[D]),f.push(y)}),d.push(C,C+1,C+2,C,C+2,C+3)},m=s/2,x=t/2,g=.004,p=i+g,M=r-g,E=o+g,v=a-g;u([[-m,-x,e],[m,-x,e],[m,x,e],[-m,x,e]],[0,0,1],[[i,o],[r,o],[r,a],[i,a]],0),u([[-m,x,e],[m,x,e],[m,x,0],[-m,x,0]],[0,1,0],[[i,v],[r,v],[r,v],[i,v]],1),u([[-m,-x,0],[m,-x,0],[m,-x,e],[-m,-x,e]],[0,-1,0],[[i,E],[r,E],[r,E],[i,E]],1),u([[-m,-x,0],[-m,-x,e],[-m,x,e],[-m,x,0]],[-1,0,0],[[p,o],[p,o],[p,a],[p,a]],1),u([[m,-x,e],[m,-x,0],[m,x,0],[m,x,e]],[1,0,0],[[M,o],[M,o],[M,a],[M,a]],1);const S=new Te;return S.setAttribute("position",new Wt(c,3)),S.setAttribute("normal",new Wt(l,3)),S.setAttribute("uv",new Wt(h,2)),S.setAttribute("aSide",new Wt(f,1)),S.setIndex(d),S}function IM(s,t,e,n=[0,1,0,1]){const{face:i,depth:r,mat:o,lip:a,bevel:c}=ko,l=s/2,h=t/2,f=l+o+i,d=h+o+i,u=l+o,m=h+o,x=l+c,g=h+c,p=r-a,M=p-c,E=new Bt(e_[e.color]),v=new Bt(n_[e.mat]),S=new Bt(i_),b=[],A=[],_=[],y=[],C=[],L=[],D=V=>new U(V[0],V[1],V[2]),z=(V,Z,ot,pt=[[0,0],[0,0],[0,0],[0,0]])=>{const N=new U().crossVectors(D(V[1]).sub(D(V[0])),D(V[3]).sub(D(V[0]))).normalize();N.dot(D(Z))<0&&(V=[V[0],V[3],V[2],V[1]],pt=[pt[0],pt[3],pt[2],pt[1]],N.negate());const X=b.length/3;V.forEach((k,H)=>{b.push(...k),A.push(N.x,N.y,N.z),_.push(...pt[H]),y.push(ot?2:0),C.push(...ot?[ot.r,ot.g,ot.b]:[0,0,0])}),L.push(X,X+1,X+2,X,X+2,X+3)};z([[-f,m,r],[f,m,r],[f,d,r],[-f,d,r]],[0,0,1],E),z([[-f,-d,r],[f,-d,r],[f,-m,r],[-f,-m,r]],[0,0,1],E),z([[-f,-m,r],[-u,-m,r],[-u,m,r],[-f,m,r]],[0,0,1],E),z([[u,-m,r],[f,-m,r],[f,m,r],[u,m,r]],[0,0,1],E),z([[-f,d,0],[f,d,0],[f,d,r],[-f,d,r]],[0,1,0],E),z([[-f,-d,0],[f,-d,0],[f,-d,r],[-f,-d,r]],[0,-1,0],E),z([[-f,-d,0],[-f,d,0],[-f,d,r],[-f,-d,r]],[-1,0,0],E),z([[f,-d,0],[f,d,0],[f,d,r],[f,-d,r]],[1,0,0],E),z([[-u,m,p],[u,m,p],[u,m,r],[-u,m,r]],[0,-1,0],E),z([[-u,-m,p],[u,-m,p],[u,-m,r],[-u,-m,r]],[0,1,0],E),z([[-u,-m,p],[-u,m,p],[-u,m,r],[-u,-m,r]],[1,0,0],E),z([[u,-m,p],[u,m,p],[u,m,r],[u,-m,r]],[-1,0,0],E),z([[-u,g,p],[u,g,p],[u,m,p],[-u,m,p]],[0,0,1],v),z([[-u,-m,p],[u,-m,p],[u,-g,p],[-u,-g,p]],[0,0,1],v),z([[-u,-g,p],[-x,-g,p],[-x,g,p],[-u,g,p]],[0,0,1],v),z([[x,-g,p],[u,-g,p],[u,g,p],[x,g,p]],[0,0,1],v),z([[-x,g,p],[x,g,p],[l,h,M],[-l,h,M]],[0,-1,1],S),z([[-x,-g,p],[x,-g,p],[l,-h,M],[-l,-h,M]],[0,1,1],S),z([[-x,-g,p],[-x,g,p],[-l,h,M],[-l,-h,M]],[1,0,1],S),z([[x,-g,p],[x,g,p],[l,h,M],[l,-h,M]],[-1,0,1],S);const[G,F,Q,Y]=n;z([[-l,-h,M],[l,-h,M],[l,h,M],[-l,h,M]],[0,0,1],null,[[G,Q],[F,Q],[F,Y],[G,Y]]);const tt=new Te;return tt.setAttribute("position",new Wt(b,3)),tt.setAttribute("normal",new Wt(A,3)),tt.setAttribute("uv",new Wt(_,2)),tt.setAttribute("aSide",new Wt(y,1)),tt.setAttribute("aCol",new Wt(C,3)),tt.setIndex(L),tt}function DM(s,t,e,n=[0,1,0,1]){const{strip:i,depth:r,gap:o,below:a}=Bo,c=s/2,l=t/2,h=c+o,f=l+o,d=h+i,u=f+i,m=r-a,x=Math.max(.004,m-e),g=new Bt(s_),p=new Bt(r_),M=[],E=[],v=[],S=[],b=[],A=[],_=Z=>new U(Z[0],Z[1],Z[2]),y=(Z,ot,pt,N,X=[[0,0],[0,0],[0,0],[0,0]])=>{const k=new U().crossVectors(_(Z[1]).sub(_(Z[0])),_(Z[3]).sub(_(Z[0]))).normalize();k.dot(_(ot))<0&&(Z=[Z[0],Z[3],Z[2],Z[1]],X=[X[0],X[3],X[2],X[1]],k.negate());const H=M.length/3;Z.forEach((R,P)=>{M.push(...R),E.push(k.x,k.y,k.z),v.push(...X[P]),S.push(pt),b.push(...N?[N.r,N.g,N.b]:[0,0,0])}),A.push(H,H+1,H+2,H,H+2,H+3)};y([[-d,f,r],[d,f,r],[d,u,r],[-d,u,r]],[0,0,1],2,g),y([[-d,-u,r],[d,-u,r],[d,-f,r],[-d,-f,r]],[0,0,1],2,g),y([[-d,-f,r],[-h,-f,r],[-h,f,r],[-d,f,r]],[0,0,1],2,g),y([[h,-f,r],[d,-f,r],[d,f,r],[h,f,r]],[0,0,1],2,g),y([[-d,u,0],[d,u,0],[d,u,r],[-d,u,r]],[0,1,0],2,g),y([[-d,-u,0],[d,-u,0],[d,-u,r],[-d,-u,r]],[0,-1,0],2,g),y([[-d,-u,0],[-d,u,0],[-d,u,r],[-d,-u,r]],[-1,0,0],2,g),y([[d,-u,0],[d,u,0],[d,u,r],[d,-u,r]],[1,0,0],2,g),y([[-h,f,0],[h,f,0],[h,f,r],[-h,f,r]],[0,-1,0],2,p),y([[-h,-f,0],[h,-f,0],[h,-f,r],[-h,-f,r]],[0,1,0],2,p),y([[-h,-f,0],[-h,f,0],[-h,f,r],[-h,-f,r]],[1,0,0],2,p),y([[h,-f,0],[h,f,0],[h,f,r],[h,-f,r]],[-1,0,0],2,p),y([[-h,l,x],[h,l,x],[h,f,x],[-h,f,x]],[0,0,1],2,p),y([[-h,-f,x],[h,-f,x],[h,-l,x],[-h,-l,x]],[0,0,1],2,p),y([[-h,-l,x],[-c,-l,x],[-c,l,x],[-h,l,x]],[0,0,1],2,p),y([[c,-l,x],[h,-l,x],[h,l,x],[c,l,x]],[0,0,1],2,p);const[C,L,D,z]=n,G=.004,F=C+G,Q=L-G,Y=D+G,tt=z-G;y([[-c,-l,m],[c,-l,m],[c,l,m],[-c,l,m]],[0,0,1],0,null,[[C,D],[L,D],[L,z],[C,z]]),y([[-c,l,m],[c,l,m],[c,l,x],[-c,l,x]],[0,1,0],1,null,[[C,tt],[L,tt],[L,tt],[C,tt]]),y([[-c,-l,x],[c,-l,x],[c,-l,m],[-c,-l,m]],[0,-1,0],1,null,[[C,Y],[L,Y],[L,Y],[C,Y]]),y([[-c,-l,x],[-c,-l,m],[-c,l,m],[-c,l,x]],[-1,0,0],1,null,[[F,D],[F,D],[F,z],[F,z]]),y([[c,-l,m],[c,-l,x],[c,l,x],[c,l,m]],[1,0,0],1,null,[[Q,D],[Q,D],[Q,z],[Q,z]]);const V=new Te;return V.setAttribute("position",new Wt(M,3)),V.setAttribute("normal",new Wt(E,3)),V.setAttribute("uv",new Wt(v,2)),V.setAttribute("aSide",new Wt(S,1)),V.setAttribute("aCol",new Wt(b,3)),V.setIndex(A),V}function UM(s,t,e,n){const[i,r,o,a]=n??[0,0,1,1];let c=i,l=o,h=1-a,f=1-r;if(!e)return[c,l,h,f];const d=s/t,u=e[0]*(o-i)/(e[1]*(a-r));if(u>d){const m=d/u,x=(c+l)/2,g=(l-c)*m/2;c=x-g,l=x+g}else{const m=u/d,x=(h+f)/2,g=(f-h)*m/2;h=x-g,f=x+g}return[c,l,h,f]}const Xa=(s,t,e,n)=>{const i=new Kt().makeBasis(Rr(e),new U(0,1,0),Rr(t));s.quaternion.setFromRotationMatrix(i),s.position.set(n[0],n[1],n[2])};class NM{constructor(t,e){I(this,"map",new Map);I(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${Go(t)}|${t.medium}|${Ho(t)}|${t.year}`;return this.get(e,()=>{const i=Math.round(1024*xr/As),r=Jf(1024,i),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,i),o.fillStyle="#121212";const a=70;let c=160;const l=[[`italic 500 84px ${this.font}`,Go(t)]];for(const h of[t.medium,Ho(t),t.year])h&&l.push([`400 62px ${this.font}`,h]);for(const[h,f]of l)o.font=h,c=FM(o,f,a,c,1024-2*a,h.startsWith("italic")?92:74),c+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new Lr(e()),n.colorSpace=Ue,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const Jf=(s,t)=>{const e=document.createElement("canvas");return e.width=s,e.height=t,e};function FM(s,t,e,n,i,r){let o="";for(const a of t.split(" ")){const c=o?o+" "+a:a;s.measureText(c).width>i&&o?(s.fillText(o,e,n),n+=r,o=a):o=c}return s.fillText(o,e,n),n+r}const zM=s=>{const t=new Bt(s);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function OM(s,t,e,n){const i=Jf(Math.ceil(t*Vo),Math.ceil(e*Vo)),r=i.getContext("2d");r.fillStyle=zM(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${vr}px ${Wo}`,r.fillText(s.title,8,vr*.8),s.sub&&(r.font=`400 ${Xo}px ${Wo}`,r.fillText(s.sub,10,vr+Lf+Xo*.8));const o=new Lr(i);return o.colorSpace=Ue,o.anisotropy=8,o}function kM(s){const t=d_(s),e=m_(s,t).map(l=>new Bt(l)),n=Int32Array.from(t.id),i=t.nx*t.nz;let r=[];for(let l=0;l<i;l++)n[l]>=0&&r.push(l);for(;r.length;){const l=[];for(const h of r){const f=h%t.nx;for(const d of[f>0?h-1:-1,f<t.nx-1?h+1:-1,h-t.nx,h+t.nx])d>=0&&d<i&&n[d]<0&&(n[d]=n[h],l.push(d))}r=l}const o=new Uint8Array(i*4),a=new Bt(Cf);for(let l=0;l<i;l++){const h=e[n[l]]??a;o[l*4]=Math.round(h.r*255),o[l*4+1]=Math.round(h.g*255),o[l*4+2]=Math.round(h.b*255),o[l*4+3]=255}const c=new Ds(o,t.nx,t.nz,xn);return c.magFilter=c.minFilter=Ve,c.needsUpdate=!0,{tex:c,origin:new Nt(t.x0,t.z0),scale:new Nt(1/(t.nx*t.c),1/(t.nz*t.c))}}function BM(s,t,e,n,i,r,o,a,c=[]){const l=new De,h=s.H,f=kM(s),d=[],u=[],m=[f.tex],x=(L,D)=>{u.push(L),d.push(D);const z=new we(L,D);return l.add(z),z},g=[];for(const L of s.faces){const D=AM(L,h,s.doorH);if(D.empty)continue;const z=x(D.geometry(),Mu(LM(L,t,s,c.map(G=>G.lamp)),new Bt(L.color),h,e,f));z.userData.face=L,g.push(z)}for(const[L,D]of RM(s,Kf))D.empty||x(D.geometry(),Mu(PM,new Bt(L),h,e,f));const p=s.inner,M=s.entrance,E=new Eu;E.add([[p.x0,0,p.z1],[p.x1,0,p.z1],[p.x1,0,p.z0],[p.x0,0,p.z0]],[0,1,0]),E.add([[M.a,0,M.z+.4],[M.b,0,M.z+.4],[M.b,0,M.z],[M.a,0,M.z]],[0,1,0]),x(E.geometry(),bM(o,a,e,vM(c))).layers.set(1);const S=new Eu;S.add([[p.x0,h,p.z0],[p.x1,h,p.z0],[p.x1,h,p.z1],[p.x0,h,p.z1]],[0,-1,0]),x(S.geometry(),wM(e,f));const b=[...t.map(L=>L.lamp.p),...c.map(L=>L.lamp.p)],A=b.length;if(A){const L=new mr(.068,28).rotateX(Math.PI/2).translate(0,h-.0015,0),D=new mr(.05,24).rotateX(Math.PI/2).translate(0,h-.0025,0),z=new mr(.026,20).rotateX(Math.PI/2).translate(0,h-.0035,0),G=new Kn({color:14276820,toneMapped:!1}),F=new Kn({color:11842479,toneMapped:!1}),Q=new Kn({color:16777215,toneMapped:!1});u.push(L,D,z),d.push(G,F,Q);const Y=new Eo(L,G,A),tt=new Eo(D,F,A),V=new Eo(z,Q,A),Z=new Kt;b.forEach((ot,pt)=>{Z.makeTranslation(ot[0],0,ot[2]),Y.setMatrixAt(pt,Z),tt.setMatrixAt(pt,Z),V.setMatrixAt(pt,Z)}),l.add(Y,tt,V)}const _=[],y=[];r.begin();for(const L of t){const D=Zf(L.lamp);for(const z of L.items){if(z.text){const X=OM(z.text,z.w,z.h,z.face.color);m.push(X);const k=x(new Fn(z.w,z.h),new Kn({map:X,transparent:!0,depthWrite:!1,toneMapped:!1}));Xa(k,L.normal,L.right,[z.pos[0]+L.normal[0]*.002,z.pos[1],z.pos[2]+L.normal[2]*.002]),k.userData.title=z.id;continue}const G=z.work,F=G.kind==="paper"||G.kind==="digital"?new Bt().setRGB(.92,.91,.88):null,Q=yu(n(G.id),D,F,G.adjust),Y=xc(G),tt=G.w*on,V=G.h*on,Z=UM(tt,V,i(G.id),G.crop),ot=Y?vc(Y)?DM(tt,V,gc[G.kind],Z):IM(tt,V,Y,Z):Tu(z.w,z.h,z.depth,Z),pt=x(ot,Q);Xa(pt,L.normal,L.right,z.pos),pt.userData.work=G.id;const N={work:G,placed:L,mesh:pt,mat:Q,w:z.w,h:z.h,label:null};if(_.push(N),z.label){const X=x(Tu(As,xr,.003),yu(r.single(G),D,new Bt(.95,.95,.93)));Xa(X,L.normal,L.right,z.label.pos),X.userData.work=G.id,X.userData.label=!0,y.push(X),N.label=X}}}r.end();const C=c.map(L=>xM(L));for(const L of C)l.add(L.group);return{group:l,pictures:_,labels:y,faceMeshes:g,machines:C,dispose(){for(const L of C)L.dispose();for(const L of u)L.dispose();for(const L of d)L.dispose();for(const L of m)L.dispose();l.traverse(L=>{const D=L;D.isInstancedMesh&&D.dispose()})}}}const _r=class _r{constructor(t,e,n,i,r,o){I(this,"cat",new Map);I(this,"arch");I(this,"placed",[]);I(this,"items",[]);I(this,"machines",[]);I(this,"migrated",!1);I(this,"interior",null);I(this,"outside",null);I(this,"sharp",new Map);I(this,"small",new Map);I(this,"baked");I(this,"labels");I(this,"outsideKey","");I(this,"blank",new Ds(new Uint8Array([128,128,128,255]),1,1));I(this,"onRebuilt",()=>{});I(this,"prepTex",t=>(t.colorSpace=Ue,t.anisotropy=this.aniso,t.minFilter=Ii,t));I(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);I(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=i,this.font=r,this.aniso=o,this.labels=new NM(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new Gl;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(_r.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new Gl().loadAsync(`${_r.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var a;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(c=>[c.id,c])),this.arch=f_(t),B_(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:i}=S_(t,this.arch,this.cat);i.length&&(t.hang=t.hang.filter(c=>!i.includes(c))),this.placed=e,this.items=n,this.machines=iM(t,this.data.machines,this.arch.H),this.baked=EM(this.arch,e,this.baked);const r=this.interior;this.interior=BM(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat,this.machines),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose());const o=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);o!==this.outsideKey&&((a=this.outside)==null||a.dispose(),this.outside=CM(this.scene,this.font,this.aniso,t),this.outsideKey=o),this.onRebuilt(i)}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};I(_r,"url",(t,e)=>`art/${t}-${e}.jpg`);let Rs=_r;class HM{constructor(t,e){I(this,"target");I(this,"texMat",new Kt);I(this,"cam",new rn);I(this,"plane",new Wn);I(this,"clip",new xe);I(this,"q",new xe);I(this,"n",new U(0,1,0));I(this,"p0",new U(0,0,0));I(this,"camPos",new U);I(this,"rot",new Kt);I(this,"look",new U);I(this,"view",new U);I(this,"tgt",new U);this.target=new bn(t,e,{type:An,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const i=this.cam;i.position.copy(this.view),i.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),i.lookAt(this.tgt),i.far=n.far,i.near=n.near,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(i.projectionMatrix).multiply(i.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(i.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const r=i.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+r[8])/r[0],this.q.y=(Math.sign(this.clip.y)+r[9])/r[5],this.q.z=-1,this.q.w=(1+r[10])/r[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),r[2]=this.clip.x,r[6]=this.clip.y,r[10]=this.clip.z+1,r[14]=this.clip.w;const o=t.getRenderTarget(),a=e.background,c=t.getClearColor(new Bt),l=t.getClearAlpha();e.background=null,t.setClearColor(0,0),t.setRenderTarget(this.target),t.clear(),t.render(e,i),t.setRenderTarget(o),t.setClearColor(c,l),e.background=a}}let Zl=null;function Au(s){return Zl?(parent.postMessage(s,Zl),!0):!1}addEventListener("message",s=>{var t;(t=s.data)!=null&&t.rmiContactHost&&/^https:\/\/(www\.)?robynmiller\.net$/.test(s.origin)&&(Zl=s.origin)});parent!==window&&parent.postMessage({rmiHello:!0},"*");class GM{constructor(){I(this,"el");I(this,"tools");I(this,"low");I(this,"high");I(this,"cap");I(this,"frame");I(this,"open",!1);I(this,"busy",!1);I(this,"work",null);I(this,"px",[1,1]);I(this,"crop",[0,0,1,1]);I(this,"onClose",()=>{});I(this,"onShow",()=>{});I(this,"reserveRight",0);I(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,i){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=i,this.caption(),this.setFilter(X_(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${Ru(Go(t))}</i>`],n=[t.medium,Ho(t),t.year].filter(Boolean).map(i=>Ru(i));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[i,r,o,a]=this.crop,c=this.px[0]*(o-i),l=this.px[1]*(a-r),h=innerWidth-2*28-this.reserveRight,f=innerHeight-2*28-64-n,d=Math.min(1,h/c,f/l),u=Math.round(c*d),m=Math.round(l*d);this.frame.style.width=`${u}px`,this.frame.style.height=`${m}px`;const x=u/(o-i),g=m/(a-r);for(const p of[this.low,this.high])Object.assign(p.style,{width:`${x}px`,height:`${g}px`,left:`${-i*x}px`,top:`${-r*g}px`})}}const Ru=s=>s.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),VM=s=>({kind:"work",id:s.work.id,centre:s.mesh.position,normal:s.placed.normal,size:Math.max(s.w,s.h),reach:Math.min(6,Math.max(2.6,1.8+2.4*Math.max(s.w,s.h))),meshes:s.label?[s.mesh,s.label]:[s.mesh]}),WM=.62,qa=5,XM=.18;class qM{constructor(t=!0){I(this,"pic",null);I(this,"lit",null);I(this,"dark",0);I(this,"veil");I(this,"vScene",new fc);I(this,"vCam",new ta(-1,1,1,-1,0,1));I(this,"hintEl");I(this,"hinted",null);I(this,"hintDone",!1);I(this,"v",new U);I(this,"f",new U);this.veil=new we(new Fn(2,2),new Kn({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}update(t,e,n,i,r){let o=null,a=1/0,c=1/0;if(r){const f=e.getWorldPosition(this.v),d=e.getWorldDirection(this.f);for(const u of n){const m=u.centre,x=u.normal,g=m.x-f.x,p=m.y-f.y,M=m.z-f.z,E=Math.hypot(g,p,M);if(E>u.reach||x[0]*-g+x[2]*-M<=0)continue;const v=Math.acos(Math.min(1,(g*d.x+p*d.y+M*d.z)/E)),S=Math.atan2(u.size*.5,E)+.17;if(v>S||qi(i,f.x,f.z,m.x+x[0]*.05,m.z+x[2]*.05))continue;const b=v/S;b<a&&(a=b,o=u),this.pic&&u.id===this.pic.id&&u.kind===this.pic.kind&&(c=b)}this.pic&&c<a+.15&&(o=n.find(u=>u.id===this.pic.id&&u.kind===this.pic.kind)??o)}this.pic=o,o&&(this.lit=o);let l=0;if(o){const f=o.centre.distanceTo(e.getWorldPosition(this.v)),d=o.reach,u=d*.4,m=Math.min(1,Math.max(0,(d-f)/(d-u)));l=WM*m*m*(3-2*m)}this.dark+=(l-this.dark)*(1-Math.exp(-t/XM)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&o.kind==="work"&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const i=this.lit;if(!i||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=i.meshes;for(const c of r)c.layers.enable(qa);const o=n.layers.mask,a=e.background;n.layers.set(qa),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const c of r)c.layers.disable(qa);t.autoClear=!0}}const ys=46,YM=1.35,$M=.85,KM=1.15,uo={along:1.15,side:.5,pitch:-.3,ang:.42},fo={along:1.35,side:.65,pitch:-.16,ang:.62},ZM=2.2,JM=3.4,Cu=2.35,QM=900,Lu=.012,Ya=s=>(s=Math.min(1,Math.max(0,s)),s*s*s*(s*(s*6-15)+10));class jM{constructor(){I(this,"state","walk");I(this,"machine",null);I(this,"covering",!1);I(this,"onBack",()=>{});I(this,"layer");I(this,"bar");I(this,"name");I(this,"frame",null);I(this,"loadedAt",0);I(this,"url","");I(this,"tube",{on:!1,t:9});I(this,"want",!1);I(this,"t",0);I(this,"from",{pos:new U,quat:new ge});I(this,"to",{pos:new U,quat:new ge});I(this,"look",{pos:new U,quat:new ge});I(this,"v",new U);I(this,"quad",null);I(this,"crt",{sy:0,sx:1,bright:1,show:!1});this.layer=document.createElement("div"),this.layer.id="monitor",this.bar=document.createElement("div"),this.bar.id="travel-bar";const t=document.createElement("button");t.className="tr-back",t.textContent="←  Back to the Time Machines";const e=n=>{n.preventDefault(),this.state==="there"&&(t.blur(),this.onBack(),this.back())};t.addEventListener("mousedown",e),t.addEventListener("click",e),this.name=document.createElement("span"),this.name.className="tr-name",this.bar.append(t,this.name),document.body.append(this.layer,this.bar),addEventListener("keydown",n=>{n.code==="Escape"&&this.state==="there"&&(n.preventDefault(),this.onBack(),this.back())})}get travelling(){return this.state!=="walk"}get ready(){return this.state==="walk"&&!!this.machine&&this.tube.on&&this.tube.t>.35}onMap(t,e){const n=this.quad;if(!n||!this.ready)return!1;let i=0;for(let r=0;r<4;r++){const[o,a]=n[r],[c,l]=n[(r+1)%4],h=(c-o)*(e-a)-(l-a)*(t-o);if(!(Math.abs(h)<1e-9)){if(!i)i=Math.sign(h);else if(Math.sign(h)!==i)return!1}}return!0}update(t,e,n,i){if(this.machine&&!i.includes(this.machine)){const r=i.find(o=>o.placed.machine.id===this.machine.placed.machine.id&&o.placed.machine.url===this.url);r&&this.state==="walk"?this.machine=r:this.state==="walk"&&this.unload()}this.state==="walk"?this.walking(e,n,i):this.travel(t,e,n),this.tubeStep(t),this.place(e),this.state==="walk"&&this.frame&&document.activeElement===this.frame&&this.frame.blur()}stance(t,e,n){const i=t.placed.spot,r=t.placed.front,o=n.pos.x-i.x,a=n.pos.z-i.z,c=o*r[0]+a*r[2],l=Math.abs(o*r[2]-a*r[0]),h=e.getWorldDirection(this.v),f=t.placed.screen.c,d=f.x-e.position.x,u=f.y-e.position.y,m=f.z-e.position.z,x=Math.acos(Math.min(1,(d*h.x+u*h.y+m*h.z)/Math.hypot(d,u,m)));return{along:c,side:l,ang:x,pitch:n.pitch}}walking(t,e,n){let i=null,r=ZM;for(const o of n){if(o.placed.machine.outOfOrder)continue;const a=this.stance(o,t,e);a.along>.2&&a.along<r&&a.side<1&&(r=a.along,i=o)}if(i&&i!==this.machine&&!this.tube.on&&this.load(i),this.machine){const o=this.stance(this.machine,t,e);if((o.along>JM||o.along<.2||o.side>1.4)&&!this.tube.on&&this.tube.t>.4){this.unload();return}const a=this.want?!(o.along>fo.along||o.side>fo.side||o.pitch>fo.pitch||o.ang>fo.ang):o.along<uo.along&&o.side<uo.side&&o.pitch<uo.pitch&&o.ang<uo.ang;this.want=a;const c=this.loadedAt>0&&performance.now()-this.loadedAt>QM;a&&c&&!this.tube.on&&(this.tube={on:!0,t:0}),!a&&this.tube.on&&(this.tube={on:!1,t:0})}}load(t){this.unload(),this.machine=t,this.loadedAt=0;const e=document.createElement("iframe");e.className="tr-app",e.title=t.placed.machine.name,e.allow="fullscreen; autoplay",e.tabIndex=-1,e.addEventListener("load",()=>{this.frame===e&&(this.loadedAt=performance.now())}),e.src=this.url=t.placed.machine.url,this.frame=e,this.layer.append(e),this.sizeFrame()}unload(){var t;this.machine&&(this.machine.textOn.value=1),(t=this.frame)==null||t.remove(),this.frame=null,this.machine=null,this.url="",this.loadedAt=0,this.want=!1,this.tube={on:!1,t:9}}sizeFrame(){this.frame&&(this.frame.style.width=`${innerWidth}px`,this.frame.style.height=`${innerHeight-ys}px`)}tubeStep(t){const e=this.tube;e.t+=t;const n=this.machine,i=this.crt;if(!n){i.show=!1;return}const r=e.t;if(e.on){if(n.textOn.value=r<.05?.3:r<.09?1.1:0,r<.1){i.show=!1;return}const o=Math.min(1,(r-.1)/.16);i.show=!0,i.sx=1,i.sy=.012+.988*(1-Math.pow(1-o,3));const a=r<.3?2.2-1.2*o:r<.36?.35:r<.42?1.15:r<.47?.6:r<.55?1.05:r<.6?.82:1;i.bright=a}else{if(r>.3){i.show=!1,n.textOn.value=Math.min(1,(r-.3)/.25)*(r<.4?.5:1);return}n.textOn.value=0,i.show=r<.24;const o=Math.min(1,r/.12),a=Math.min(1,Math.max(0,(r-.12)/.1));i.sy=Math.max(.006,1-o),i.sx=1-.97*a,i.bright=1+1.6*o}}rect(t=1,e=1){const n=this.machine.placed.screen,i=innerWidth/Math.max(1,innerHeight-ys),r=mu.w-2*Lu,o=mu.h-2*Lu;let a=r,c=r/i;c>o&&(c=o,a=o*i),a*=t,c*=e;const l=(h,f)=>n.c.clone().addScaledVector(n.right,h).addScaledVector(n.up,f).addScaledVector(n.n,.0015);return{corners:[l(-a/2,c/2),l(a/2,c/2),l(a/2,-c/2),l(-a/2,-c/2)],w:a,h:c}}place(t){const e=this.frame;if(!e)return;const n=this.crt;if(this.state==="there"){e.style.transform=`translate(0px, ${ys}px)`,e.style.visibility="visible",e.style.opacity="1",e.style.filter="";return}const i=n.show||this.state==="in"||this.state==="back";if(this.quad=null,!i){e.style.visibility="hidden",e.style.opacity="0";return}e.style.visibility="visible";const{corners:r}=this.rect(this.state==="walk"||this.state==="step"?n.sx:1,this.state==="walk"||this.state==="step"?n.sy:1),o=innerWidth,a=innerHeight,c=[];for(const h of r){const f=h.clone().project(t);if(f.z>1||f.z<-1){e.style.opacity="0";return}c.push([(f.x+1)/2*o,(1-f.y)/2*a])}e.style.transform=ty(o,a-ys,c),e.style.opacity="1",this.state==="walk"&&(this.quad=c);const l=this.state==="walk"||this.state==="step"?n.bright:1;e.style.filter=Math.abs(l-1)>.01?`brightness(${l.toFixed(2)})`:""}enter(t,e){if(!this.ready||!this.machine)return!1;e.frozen=!0,this.look.pos.copy(t.position),this.look.quat.copy(t.quaternion),this.from.pos.copy(t.position),this.from.quat.copy(t.quaternion);const n=this.machine.placed.screen,{h:i}=this.rect(),r=Math.tan(Ge.degToRad(t.fov/2)),o=innerHeight,a=i*o/(2*r*(o-ys)),c=ys/2/o*2*a*r;return this.to.pos.copy(n.c).addScaledVector(n.n,a+.0015).addScaledVector(n.up,c),this.to.quat.setFromRotationMatrix(new Kt().makeBasis(n.right,n.up,n.n)),this.t=0,this.state="in",this.name.textContent=this.machine.placed.machine.name.replace(/\s*[|\n]\s*/g," "),document.body.classList.add("traveling"),document.pointerLockElement&&document.exitPointerLock(),!0}back(){var t,e,n;this.state==="there"&&(this.state="back",this.covering=!1,this.t=0,this.bar.classList.remove("on"),(t=this.frame)==null||t.blur(),(e=this.frame)==null||e.classList.remove("live"),(n=this.frame)==null||n.setAttribute("inert",""),this.from.pos.copy(this.to.pos),this.from.quat.copy(this.to.quat))}travel(t,e,n){var r,o;const i=(a,c,l)=>{e.position.lerpVectors(a.pos,c.pos,l),e.quaternion.slerpQuaternions(a.quat,c.quat,l),e.updateMatrixWorld()};if(this.state==="in")this.t+=t/YM,i(this.from,this.to,Ya(this.t)),this.t>=1&&(this.state="there",this.covering=!0,this.bar.classList.add("on"),(r=this.frame)==null||r.classList.add("live"),(o=this.frame)==null||o.focus());else if(this.state==="there")i(this.to,this.to,1);else if(this.state==="back")this.t+=t/$M,i(this.from,this.look,Ya(this.t)),this.t>=1&&this.stepBack(n);else if(this.state==="step"){this.t+=t/KM;const a=Ya(this.t),c={pos:e.position.clone(),quat:e.quaternion.clone()};i(this.look,c,a),this.t>=1&&(this.state="walk",n.frozen=!1,document.body.classList.remove("traveling"),this.unload())}}stepBack(t){this.state="step",this.t=0,this.tube={on:!1,t:0},this.want=!1;const e=this.machine.placed,n=e.front;t.frozen=!0,t.pos.set(e.spot.x+n[0]*Cu,Gn,e.spot.z+n[2]*Cu),t.yaw=Math.atan2(n[0],n[2]),t.pitch=-.1,t.vel.set(0,0,0),t.glide.set(0,0),t.spin=0,t.goal=null,t.collide()}pushBack(t,e){this.state!=="walk"||!this.machine||(this.look.pos.copy(t.position),this.look.quat.copy(t.quaternion),this.stepBack(e))}resize(){this.sizeFrame()}}function ty(s,t,e){const[[n,i],[r,o],[a,c],[l,h]]=e,f=r-a,d=l-a,u=o-c,m=h-c,x=n-r+a-l,g=i-o+c-h,p=f*m-d*u,M=(x*m-d*g)/p,E=(f*g-x*u)/p,v=r-n+M*r,S=l-n+E*l,b=n,A=o-i+M*o,_=h-i+E*h,y=i;return`matrix3d(${[v/s,A/s,0,M/s,S/t,_/t,0,E/t,0,0,1,0,b,y,0,1].map(L=>+L.toFixed(10)).join(",")})`}const ey=4.5,ny=380,iy=10,sy=1.7;class ry{constructor(t,e,n,i,r,o){I(this,"ndc",new Nt);I(this,"ray",new gr);I(this,"d",null);I(this,"trail",[]);I(this,"fingers",new Map);I(this,"two",null);I(this,"waitAll",!1);this.canvas=t,this.camera=e,this.player=n,this.pick=i,this.tap=r,this.enabled=o,t.addEventListener("pointerdown",a=>this.start(a)),t.addEventListener("pointermove",a=>this.move(a)),t.addEventListener("pointerup",a=>this.end(a)),t.addEventListener("pointercancel",a=>this.lift(a.pointerId)),t.addEventListener("lostpointercapture",a=>this.lift(a.pointerId)),t.addEventListener("touchstart",a=>a.preventDefault(),{passive:!1})}lift(t){var e;this.fingers.delete(t),((e=this.d)==null?void 0:e.id)===t&&(this.d=null),this.two&&(this.two.a===t||this.two.b===t)&&(this.two=null,this.waitAll=this.fingers.size>0),this.fingers.size||(this.waitAll=!1)}ndcAt(t,e){const n=this.canvas.getBoundingClientRect();return this.ndc.set((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1)}at(t){return this.ndcAt(t.clientX,t.clientY)}floorAt(t){this.player.apply(this.camera),this.camera.updateMatrixWorld(),this.ray.setFromCamera(t,this.camera);const e=this.ray.ray.origin,n=this.ray.ray.direction;if(n.y>-.03)return null;const i=-e.y/n.y;return i>30?null:new U(e.x+n.x*i,0,e.z+n.z*i)}start(t){var a;if(t.pointerType!=="touch"||!this.enabled())return;t.preventDefault(),(a=getSelection())==null||a.removeAllRanges();for(const c of[...this.fingers.keys()])this.canvas.hasPointerCapture(c)||this.lift(c);if(this.canvas.setPointerCapture(t.pointerId),this.fingers.set(t.pointerId,{x:t.clientX,y:t.clientY}),this.player.glide.set(0,0),this.player.spin=0,this.player.goal=null,this.trail=[],this.fingers.size===2){this.d=null;const[[c,l],[h,f]]=[...this.fingers.entries()],d=(l.x+f.x)/2,u=(l.y+f.y)/2;this.two={a:c,b:h,p0:this.floorAt(this.ndcAt(d,u)),mx:d,my:u,dist:Math.max(1,Math.hypot(l.x-f.x,l.y-f.y))};return}if(this.fingers.size>2||this.waitAll)return;const e=this.at(t),n=this.pick(e),i=this.floorAt(e),r=!!i&&(n.kind==="floor"||n.kind==="none"||(n.dist??1/0)>this.camera.position.distanceTo(i)-.05),o=r||(n.kind==="wall"||n.kind==="machine")&&(n.dist??99)<=ey?1:.6;this.d={id:t.pointerId,x:t.clientX,y:t.clientY,t:performance.now(),mode:r?"ground":"turn",grip:o,p0:r?i:null,moved:!1,lx:t.clientX,ly:t.clientY}}move(t){const e=this.fingers.get(t.pointerId);if(!e)return;t.preventDefault(),e.x=t.clientX,e.y=t.clientY;const n=performance.now(),i=this.two;if(i){const c=this.fingers.get(i.a),l=this.fingers.get(i.b);if(!c||!l)return;const h=(c.x+l.x)/2,f=(c.y+l.y)/2,d=Math.max(1,Math.hypot(c.x-l.x,c.y-l.y)),u=this.player.pos.x,m=this.player.pos.z;let x=0,g=0;if(i.p0){const E=this.floorAt(this.ndcAt(h,f));E&&(x=i.p0.x-E.x,g=i.p0.z-E.z)}else{const E=4/(this.canvas.clientHeight||800),v=Math.sin(this.player.yaw),S=Math.cos(this.player.yaw),b=h-i.mx,A=f-i.my;x=(-b*S+-A*v)*E,g=(b*v+-A*S)*E}const p=Math.log(d/i.dist)/Math.LN2*sy;x+=-Math.sin(this.player.yaw)*p,g+=-Math.cos(this.player.yaw)*p;const M=Math.hypot(x,g);for(M>1.2&&(x*=1.2/M,g*=1.2/M),M>1e-5&&this.player.drag(x,g),i.mx=h,i.my=f,i.dist=d,i.p0&&(i.p0=this.floorAt(this.ndcAt(h,f))??i.p0),this.trail.push({t:n,dx:this.player.pos.x-u,dz:this.player.pos.z-m,dyaw:0});this.trail.length&&n-this.trail[0].t>120;)this.trail.shift();return}const r=this.d;if(!r||t.pointerId!==r.id)return;!r.moved&&Math.hypot(t.clientX-r.x,t.clientY-r.y)>iy&&(r.moved=!0);const o=t.clientX-r.lx,a=t.clientY-r.ly;if(r.lx=t.clientX,r.ly=t.clientY,!!r.moved){if(r.mode==="ground"&&r.p0){const c=this.floorAt(this.at(t));if(!c)return;let l=r.p0.x-c.x,h=r.p0.z-c.z;const f=Math.hypot(l,h);f>1.2&&(l*=1.2/f,h*=1.2/f);const d=this.player.pos.x,u=this.player.pos.z;this.player.drag(l,h),this.trail.push({t:n,dx:this.player.pos.x-d,dz:this.player.pos.z-u,dyaw:0})}else{const c=Ge.degToRad(this.camera.fov)/this.canvas.clientHeight*r.grip;this.player.turnBy(o*c,a*c),this.trail.push({t:n,dx:0,dz:0,dyaw:o*c})}for(;this.trail.length&&n-this.trail[0].t>120;)this.trail.shift()}}end(t){const e=this.two&&(this.two.a===t.pointerId||this.two.b===t.pointerId),n=this.d;this.lift(t.pointerId);const i=performance.now();if(e){this.fling("ground",i);return}if(!(!n||t.pointerId!==n.id)){if(!n.moved&&i-n.t<ny){this.tap(this.pick(this.at(t)),t.clientX,t.clientY);return}this.fling(n.mode,i)}}fling(t,e){const n=this.trail.filter(c=>e-c.t<120);if(this.trail=[],!n.length||e-n[n.length-1].t>70)return;const i=Math.max(.03,(e-n[0].t)/1e3+1/60);let r=0,o=0,a=0;for(const c of n)r+=c.dx,o+=c.dz,a+=c.dyaw;t==="ground"?(this.player.glide.set(r/i,o/i),this.player.glide.length()>7&&this.player.glide.setLength(7)):this.player.spin=Ge.clamp(a/i,-7,7)}}function Pu(s,t){const n=document.createElement("canvas");n.width=n.height=32*t;const i=n.getContext("2d");i.scale(t,t);const r=32/2,o=8,a=2.5,c=(l,h)=>{i.strokeStyle=h,i.lineWidth=l,i.lineCap="round",i.beginPath(),i.moveTo(r-o,r),i.lineTo(r-a,r),i.moveTo(r+a,r),i.lineTo(r+o,r),i.moveTo(r,r-o),i.lineTo(r,r-a),i.moveTo(r,r+a),i.lineTo(r,r+o),i.stroke(),s&&(i.beginPath(),i.arc(r,r,11.5,0,Math.PI*2),i.stroke())};return c(3.4,"rgba(0,0,0,0.55)"),c(1.5,"#fff"),n.toDataURL("image/png")}const po=s=>`-webkit-image-set(url(${Pu(s,1)}) 1x, url(${Pu(s,2)}) 2x)`,oy="var(--cross)",ay="var(--cross-on)",ke={x:innerWidth/2,y:innerHeight/2};function ly(){const s=document.documentElement.style;s.setProperty("--cross",`${po(!1)} 16 16, crosshair`),s.setProperty("--cross-on",`${po(!0)} 16 16, pointer`);const t=document.createElement("div");t.id="crosshair";const e=po(!1),n=po(!0);document.body.append(t);let i="";return(r,o=!1,a,c)=>{t.classList.toggle("on",r);const l=o?n:e;l!==i&&(t.style.backgroundImage=l,i=l),t.style.transform=r&&a!==void 0&&c!==void 0?`translate(${a-innerWidth/2}px, ${c-innerHeight/2}px)`:""}}const cy=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],hy=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],Qf=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],Cr=.12,Rc=[58,44,40],$a=s=>{const t=s/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},uy=s=>{const t=s<=.0031308?s*12.92:1.055*s**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function sa(s,t){const e=Math.max(0,Math.min(1,t))*(s.length-1),n=Math.min(s.length-2,Math.floor(e)),i=e-n,r=s[n],o=s[n+1];return[0,1,2].map(a=>uy($a(r[a])+($a(o[a])-$a(r[a]))*i))}function $o([s,t,e]){const n=s/255,i=t/255,r=e/255,o=Math.max(n,i,r),a=Math.min(n,i,r),c=(o+a)/2,l=o-a;if(!l)return[0,0,c];const h=c>.5?l/(2-o-a):l/(o+a);let f;return o===n?f=(i-r)/l+(i<r?6:0):o===i?f=(r-n)/l+2:f=(n-i)/l+4,[f*60,h,c]}function fy(s,t,e){if(s=(s%360+360)%360,t<=0){const l=Math.round(e*255);return[l,l,l]}const n=(1-Math.abs(2*e-1))*t,i=n*(1-Math.abs(s/60%2-1)),r=e-n/2;let o=0,a=0,c=0;return s<60?(o=n,a=i):s<120?(o=i,a=n):s<180?(a=n,c=i):s<240?(a=i,c=n):s<300?(o=i,c=n):(o=n,c=i),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((c+r)*255)]}function dy(s,t){const[e,n,i]=$o(s);return n<.02?s:fy(e+t,n,i)}(()=>{const s=[];for(let t=0;t<=24;t++)s.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${s.join(", ")})`})();const Cc=s=>sa(cy,s.skin),py=s=>sa(hy,s.mouthColor),my=s=>sa(Qf,(s.cheeks-Cr)/(1-Cr)),gy=s=>{const t=Math.max(0,Math.min(1,s.cheeks/Cr));return t*t*(3-2*t)};(()=>{const s=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,i]=sa(Qf,t/16);s.push(`rgb(${e},${n},${i}) ${((Cr+t/16*(1-Cr))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${s.join(", ")})`})();const xy={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:$o(Rc)[0]/360,hat:"none"},qt=16,$t=16,jt=16,sr=[26,32,42],Iu=[236,240,246],mn=(s,t)=>[Math.max(0,Math.min(255,Math.round(s[0]*t))),Math.max(0,Math.min(255,Math.round(s[1]*t))),Math.max(0,Math.min(255,Math.round(s[2]*t)))],Ct={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:Rc,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},si=(s,t)=>Math.round(Math.max(0,Math.min(1,s))*t),Du=2.2,vy=18,_y=6,Uu=.55;function My(s){const t=Du*Math.pow(vy/Du,Math.max(0,Math.min(1,s))),e=qt/2,n=$t/2,i=jt/2;return(r,o,a)=>{const c=Math.abs(r+.5-e)/e,l=Math.abs(o+.5-n)/n,h=c**t+l**t;if(h>1)return!1;const f=Math.abs(a+.5-i)/i;if(a>=jt-_y){const d=h<=Uu?1:((1-h)/(1-Uu))**(1/t);return f<=d}return h+f**t<=1}}function yy(s){const t=Cc(s),e=My(s.shape),n=new Map,i=(N,X,k)=>`${N},${X},${k}`;let r=null;const o=new Set,a=new Set;let c;const l=(N,X,k,H)=>{const R=i(N,X,k);n.set(R,c?{x:N,y:X,z:k,c:H,part:c}:{x:N,y:X,z:k,c:H}),r&&r.add(R)},h=(N,X,k,H)=>{const R=i(N,X,k);n.set(R,{x:N,y:X,z:k,c:H}),o.delete(R),a.delete(R)},f=(N,X,k)=>n.has(i(N,X,k));for(let N=0;N<qt;N++)for(let X=0;X<$t;X++)for(let k=0;k<jt;k++)e(N,X,k)&&l(N,X,k,t);const d=(N,X)=>{for(let k=$t-1;k>=0;k--)if(f(N,k,X))return k;return-1},u=(N,X)=>{for(let k=jt-1;k>=0;k--)if(f(N,X,k))return k;return-1},m=(N,X,k)=>{if(N<0||N>=qt||X<0||X>=$t)return;const H=u(N,X);H>=0&&l(N,X,H,k)},x=qt/2,g=1+si(s.eyeSize,3),p=1+si(s.eyeSize,3),M=Math.max(1,6-g),E=1+si(s.eyeSpacing,M-1),v=8+si(s.eyeHeight,4)-2-Math.floor((p-1)/2),S=v+p-1,b=[[x-E-g,x-E-1],[x+E,x+E+g-1]],A=g>=3&&p>=3;for(const[N,X]of b)for(let k=N;k<=X;k++)for(let H=v;H<=S;H++){const R=!!(A&&k>N&&k<X&&H>v&&H<S);c=A&&!R?"eye":"pupil",m(k,H,A?R?sr:Iu:sr)}c=void 0,r=o;const _=si(s.browWeight,3),y=S+2+(si(s.browHeight,4)-2);if(_>0){c="brow";for(const[N,X]of b)for(let k=N-1;k<=X+1;k++)for(let H=0;H<_;H++)m(k,y+H,Ct.hair);c=void 0}r=null;const C=si(s.noseLength,8),L=5+(si(s.noseHeight,6)-3);if(C>0){const N=mn(t,.9);c="nose";for(let X=x-1;X<=x;X++)for(let k=L;k<=L+1;k++){const H=u(X,k);if(!(H<0))for(let R=1;R<=C;R++)l(X,k,H+R,N)}c=void 0}const D=2*si(s.mouthWidth,4),z=3;if(D>0){const N=py(s),X=D>=6?2:1;c="mouth";for(let k=x-D/2;k<=x+D/2-1;k++)for(let H=z;H<z+X;H++)m(k,H,N);c=void 0}const G=gy(s);if(G>0){const N=my(s),X=(P,W)=>P[0]===W[0]&&P[1]===W[1]&&P[2]===W[2],k=v-1,H=z+(D>=6?2:1),R=Math.max(H+.5,k-.5);for(const[P,W]of b){const j=W<x,it=(P+W)/2,mt=it+.35*((j?x-1.5:x+.5)-it);for(let _t=Math.floor(mt-2);_t<=Math.ceil(mt+2);_t++)if(!(j?_t>x-2:_t<x+1))for(let bt=H;bt<=k;bt++){const Ht=1-((_t-mt)/1.9)**2-((bt-R)/1.3)**2;if(Ht<=0)continue;const Gt=u(_t,bt),Xt=Gt>=0?n.get(i(_t,bt,Gt)):void 0;if(!Xt||Xt.part||!X(Xt.c,t))continue;const ae=G*.72*Math.pow(Ht,.8),Me=[0,1,2].map(Le=>Math.round(t[Le]+(N[Le]-t[Le])*ae));n.set(i(_t,bt,Gt),{x:_t,y:bt,z:Gt,c:Me,blend:t})}}}const F=(N,X=1)=>{for(let k=0;k<qt;k++)for(let H=0;H<jt;H++){const R=d(k,H);if(!(R<0))for(let P=1;P<=X;P++)l(k,R+P,H,N)}},Q=(N,X,k)=>{const H=Math.ceil(X)+1;for(let R=x-H;R<x+H;R++)for(let P=x-H;P<x+H;P++)Math.hypot(R+.5-x,P+.5-x)<=X&&l(R,N,P,k)},Y=(N,X,k,H)=>{for(let R=N;R<=X;R++)for(let P=0;P<qt;P++)for(let W=0;W<jt;W++)Math.hypot(P+.5-x,W+.5-x)<=k&&l(P,R,W,H)},tt=(N,X,k,H,R)=>{const P=Math.ceil(H)+1;for(let W=Math.floor(N-P);W<=N+P;W++)for(let j=Math.floor(X-P);j<=X+P;j++)for(let it=Math.floor(k-P);it<=k+P;it++)Math.hypot(W+.5-N,j+.5-X,it+.5-k)<=H&&l(W,j,it,R)},V=(N,X,k,H=1)=>{for(let R=N;R<=X;R++)for(let P=0;P<qt;P++){const W=u(P,R);W>=0&&l(P,R,W+H,k)}};switch(r=a,s.hat){case"birthday":{for(let N=0;N<9;N++)Y($t+N,$t+N,5.4-N*.62,N%2?Ct.partyAlt:Ct.party);tt(x,$t+9.5,x,1.6,Iu);break}case"mickey":{const N=d(x,x)+2;for(const X of[-.5,qt+.5])tt(X,N,x,4.2,sr);break}case"tophat":{Q($t,8.6,Ct.felt),Y($t+1,$t+10,5,Ct.felt),Y($t+3,$t+4,5.05,Ct.band);break}case"gangster":{Q($t,9.6,Ct.felt),Y($t+1,$t+5,5,Ct.felt),Y($t+1,$t+2,5.05,Ct.band);break}case"goggles":{V(v,S,Ct.brass);for(const[N,X]of b)for(let k=N;k<=X;k++)for(let H=v;H<=S;H++){const R=u(k,H);R>=0&&l(k,H,R+1,Ct.glass)}break}case"pilot":{F(Ct.leather,2),V($t-4,$t-3,Ct.brass);for(let N=$t-4;N>=4;N--)for(const X of[0,1,qt-2,qt-1])for(let k=0;k<jt;k++)f(X,N,k)&&l(X,N,k,Ct.leather);break}case"model":{Q($t,12.5,Ct.partyAlt),Y($t+1,$t+2,4.4,Ct.partyAlt);break}case"curls":{let N=7;const X=()=>(N=(N*1103515245+12345)%2147483648)/2147483648;for(let k=-2;k<qt+2;k++)for(let H=-2;H<jt+2;H++){const R=d(Math.max(0,Math.min(qt-1,k)),Math.max(0,Math.min(jt-1,H)));R<0||(X()<.6&&l(k,R+1,H,Ct.hair),X()<.34&&l(k,R+2,H,Ct.hair),X()<.14&&l(k,R+3,H,Ct.hair))}break}case"bob":{F(Ct.hair,2);for(let N=S+1;N<$t;N++)for(let X=0;X<qt;X++)for(let k=0;k<jt;k++)(X<=1||X>=qt-2||k<=1)&&f(X,N,k)&&l(X,N,k,Ct.hair);break}case"pigtails":{F(Ct.hair,2);for(const N of[-1.5,qt+1.5])tt(N,$t-5,x,3.4,Ct.hair);break}case"crown":{const N=Ct.gold,X=mn(N,1.15),k=Ct.band,H=(W,j)=>{const it=Math.hypot(W+.5-x,j+.5-x);return it>=5.1&&it<=6.9};let R=0;for(let W=0;W<qt;W++)for(let j=0;j<jt;j++)H(W,j)&&(R=Math.max(R,d(W,j)+3));for(let W=0;W<qt;W++)for(let j=0;j<jt;j++){if(!H(W,j))continue;const it=d(W,j);if(!(it<0))for(let mt=it+1;mt<=R;mt++)l(W,mt,j,mt===R?X:N)}const P=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[W,j]of P){const it=Math.hypot(W+1-x,j+1-x);for(let mt=W;mt<=W+1;mt++)for(let _t=j;_t<=j+1;_t++){const bt=Math.hypot(mt+.5-x,_t+.5-x)>it;for(let Ht=1;Ht<=(bt?5:3);Ht++)l(mt,R+Ht,_t,bt&&Ht===5?X:N)}}for(let W=x-1;W<=x;W++)for(let j=R+2;j<=R+3;j++)for(let it=14;it<=15;it++)l(W,j,it,k);break}case"beanie":{const N=Ct.red,X=Ct.cream,k=Math.max(S+1,$t-6),H=Math.min(k+2,$t-1),R=[];for(let P=k;P<=H;P++)for(let W=-1;W<=qt;W++)for(let j=-1;j<=jt;j++)f(W,P,j)?l(W,P,j,X):(f(W-1,P,j)||f(W+1,P,j)||f(W,P,j-1)||f(W,P,j+1))&&R.push([W,P,j]);for(const[P,W,j]of R)l(P,W,j,X);for(let P=H+1;P<$t;P++)for(let W=0;W<qt;W++)for(let j=0;j<jt;j++)f(W,P,j)&&l(W,P,j,P===H+1?mn(N,.82):N);for(let P=0;P<qt;P++)for(let W=0;W<jt;W++){const j=d(P,W);j<=H||(l(P,j+1,W,N),l(P,j+2,W,N))}tt(x,d(x,x)+4.5,x,1.9,X);break}case"cowboy":{let N=0;for(let X=0;X<qt;X++)for(let k=0;k<jt;k++)N=Math.max(N,d(X,k)+1);for(let X=0;X<qt;X++)for(let k=0;k<jt;k++){const H=d(X,k);if(!(H<0||Math.hypot(X+.5-x,k+.5-x)>5))for(let R=H+1;R<N;R++)l(X,R,k,Ct.leather)}for(let X=x-11;X<x+11;X++)for(let k=x-11;k<x+11;k++){const H=Math.abs(X+.5-x);if(Math.hypot(H,k+.5-x)>10.7)continue;const R=H>7.5?2:H>5.5?1:0;for(let P=0;P<=R;P++)l(X,N+P,k,Ct.leather)}for(let X=0;X<qt;X++)for(let k=0;k<jt;k++){const H=Math.abs(X+.5-x);if(Math.hypot(H,k+.5-x)>5)continue;const R=H<1?2:H<2?1:0;for(let P=N+1;P<=N+7-R;P++)l(X,P,k,Ct.leather);R>0&&l(X,N+7-R,k,mn(Ct.leather,.8))}Y(N+1,N+2,5.05,Ct.felt);break}case"wizard":{const N=Ct.plum,X=mn(N,.82),k=d(x,x)+1;for(let W=x-6;W<x+6;W++)for(let j=x-6;j<x+6;j++){if(Math.hypot(W+.5-x,j+.5-x)>5.2)continue;const it=d(W,j);if(!(it<0))for(let mt=it+1;mt<=k;mt++)l(W,mt,j,N)}const H=11;for(let W=x-12;W<x+12;W++)for(let j=x-12;j<x+12;j++){const it=Math.hypot(W+.5-x,j+.5-x);if(it<=5.2||it>H)continue;const mt=W>=0&&W<qt&&j>=0&&j<jt?d(W,j):-1;l(W,Math.max(k-Math.max(0,Math.round(it)-8),mt+1,S+2),j,X)}const R=13;for(let W=0;W<=R;W++){const j=W/R,it=5-4.1*j,mt=x-6.5*j*j;for(let _t=x-6;_t<x+6;_t++)for(let bt=-2;bt<jt;bt++)Math.hypot(_t+.5-x,bt+.5-mt)<=it&&l(_t,k+W,bt,N)}const P=(W,j)=>{for(let it=x-j;it<x+j;it++){const mt=u(it,W);mt>=0&&l(it,W,mt,Ct.gold)}};P(k+3,1),P(k+4,2),P(k+5,1),P(k+8,1),P(k+11,1);break}case"halo":{let N=-1;for(let W=0;W<qt;W++)for(let j=0;j<jt;j++)N=Math.max(N,d(W,j));const X=N+3,k=mn(Ct.gold,1.15),H=4.9,R=6.7,P=Math.ceil(R)+1;for(let W=x-P;W<x+P;W++)for(let j=x-P;j<x+P;j++){const it=Math.hypot(W+.5-x,j+.5-x);it<H||it>R||l(W,X,j,j>=x?k:Ct.gold)}break}case"headphones":{const N=Math.min(S+1,10),X=x-2,k=x+1;for(let H=0;H<qt;H++)for(let R=X;R<=k;R++){const P=d(H,R);P<0||(l(H,P+1,R,Ct.steel),l(H,P+2,R,Ct.steel))}for(let H=N+3;H<$t;H++)for(const R of[0,qt-1])for(let P=X;P<=k;P++)f(R,H,P)&&l(R,H,P,Ct.steel);for(let H=0;H<3;H++)for(let R=N-4;R<=N+3;R++)for(let P=x-4;P<=x+3;P++)Math.hypot(R+.5-N,P+.5-x)>3.6||(l(-H,R,P,sr),l(qt-1+H,R,P,sr));for(let H=N-2;H<=N+1;H++)for(let R=x-2;R<=x+1;R++)Math.hypot(H+.5-N,R+.5-x)<=1.6&&(l(-2,H,R,Ct.steel),l(qt+1,H,R,Ct.steel));break}case"viking":{const N=mn(Ct.steel,.78),X=Math.max(S+2,$t-5);for(let R=X;R<$t;R++)for(let P=0;P<qt;P++)for(let W=0;W<jt;W++)f(P,R,W)&&l(P,R,W,R===X?N:Ct.steel);for(let R=0;R<qt;R++)for(let P=0;P<jt;P++){const W=d(R,P);W<X||(l(R,W+1,P,Ct.steel),l(R,W+2,P,Ct.steel))}const k=Math.max(S+1,X-1);for(let R=k;R<=$t;R++)for(let P=x-1;P<=x;P++){const W=u(P,R);W>=0&&l(P,R,W+1,N)}const H=Math.max(d(5,x)-4,S+4);for(const R of[-1,1])for(let P=0;P<=18;P++){const W=P/18,j=W*2.05,it=x+R*(6.2+6*Math.sin(j));tt(it,H+8.4-8.4*Math.cos(j),x,2.6-1.6*W,Ct.cream)}break}case"flowers":{const N=Math.max(S+1,Math.min(S+3,$t-4)),X=Ct.leaf,k=mn(Ct.leaf,.82),H=(it,mt)=>Math.floor(x+it*mt),R=[[0,1],[.87,.5],[.87,-.5],[0,-1]],P=[];for(const[it,mt]of R){let _t=2;for(;_t<12&&f(H(it,_t),N,H(mt,_t));)_t+=.5;P.push(_t)}const W=[];for(let it=N;it<=N+1;it++)for(let mt=0;mt<qt;mt++)for(let _t=0;_t<jt;_t++){if(!f(mt,it,_t))continue;let bt=!1;for(let Ht=-1;Ht<=1;Ht++)for(let Gt=-1;Gt<=1;Gt++)f(mt+Ht,it,_t+Gt)||(bt=!0,W.push([mt+Ht,it,_t+Gt]));bt&&W.push([mt,it,_t])}for(const[it,mt,_t]of W)l(it,mt,_t,mt===N?k:X);const j=[Ct.red,Ct.gold,Ct.cream];for(let it=0;it<R.length;it++){const[mt,_t]=R[it],bt=Math.round(x+mt*(P[it]+1)),Ht=Math.round(x+_t*(P[it]+1)),Gt=j[it%j.length];tt(bt,N+1.5,Ht,1.5,Gt),mt>0&&tt(2*x-bt,N+1.5,Ht,1.5,Gt)}break}case"afro":{const k=d(x,x),H=Math.max(S+2,$t-3);for(let R=x-10;R<x+10;R++)for(let P=x-10;P<x+10;P++){const W=Math.abs(R+.5-x),j=Math.abs(P+.5-x),it=(W*W+j*j)/(10*10),mt=d(R,P);if(it>1&&mt<0)continue;const _t=it>1?0:7.5*Math.sqrt(1-it),Ht=P>=jt-6?Math.max(S+1,H-Math.max(0,W-4.5)):S+1,Gt=mt>=0?Ht:Math.max(Ht,Math.ceil(k+.5-_t)),Xt=it>1?mt:Math.max(mt,Math.floor(k-.5+_t));for(let ae=Gt;ae<=Xt;ae++)l(R,ae,P,ae<Ht+2?mn(Ct.hair,.8):Ct.hair)}break}case"mohawk":{const N=Ct.hair,X=mn(t,.74);for(let H=0;H<qt;H++)for(let R=0;R<jt;R++){const P=d(H,R);if(!(P<0))for(let W=S+2;W<=P;W++)f(H,W,R)&&h(H,W,R,X)}const k=d(x,x);for(let H=1;H<jt-1;H++){if(d(x,H)<k-4)continue;const P=(H-1)/(jt-3),W=2+Math.round(4*Math.sin(Math.PI*P));for(const j of[x-1,x])for(let it=d(j,H)+1;it<=d(j,H)+W;it++)l(j,it,H,N)}break}case"ponytail":{const N=Ct.hair,X=Math.max(d(x-1,2),d(x,2))-2;for(let k=0;k<qt;k++)for(let H=0;H<jt;H++){const R=d(k,H);R>S&&l(k,R,H,N)}F(N,2);for(let k=S+1;k<$t;k++)for(let H=0;H<qt;H++)for(let R=0;R<jt;R++)(H<=1||H>=qt-2||R<=3)&&f(H,k,R)&&l(H,k,R,N);for(let k=3;k<=S;k++){const H=6-Math.max(0,Math.min(3,S-k));for(let R=x-H;R<x+H;R++)for(let P=0;P<=2;P++)f(R,k,P)&&l(R,k,P,N)}for(let k=0;k<=14;k++){const H=k/14;tt(x,X-10*H*H,1.5-4.4*Math.sqrt(H),2.7-1.3*H,N)}tt(x,X-.5,-.6,2.1,Ct.band);break}case"longhair":{const N=Ct.hair,X=jt-5,k=2;F(N,2);for(let H=0;H<$t;H++)for(let R=0;R<qt;R++)for(let P=0;P<jt;P++){if(!f(R,H,P))continue;const W=P>=X,j=R<k||R>=qt-k;W&&!j||W&&j&&H>=v&&H<=S||l(R,H,P,N)}for(let H=Math.max($t-3,S+2);H<$t;H++)for(let R=0;R<qt;R++)for(let P=X;P<jt;P++)f(R,H,P)&&l(R,H,P,N);for(let H=0;H<qt;H++)for(let R=0;R<jt;R++){if(!(H<k||H>=qt-k||R<k)||d(H,R)<0)continue;let W=0;for(;!f(H,W,R);)W++;for(let j=W-1;j>=W-3;j--)l(H,j,R,N)}break}case"buzz":{const N=Ct.hair,X=mn(Ct.hair,1.75),k=Math.min($t-2,Math.max(S+3,$t-3));for(let H=0;H<qt;H++)for(let R=0;R<jt;R++){const P=d(H,R);if(P<0)continue;const W=Math.abs(H+.5-x),it=R>=jt-6?W<5.5?0:W<6.5?1:2:3,mt=Math.max(S+1,Math.min(k-it,P-1));for(let _t=mt;_t<=P;_t++)f(H,_t,R)&&l(H,_t,R,_t<k?X:N)}break}case"bun":{const N=mn(Ct.hair,.74),X=S+2;for(let R=0;R<qt;R++)for(let P=0;P<jt;P++){const W=d(R,P);if(W<X)continue;const j=P<=5?5:P<=9?3:2;for(let it=W;it>W-j&&it>=X;it--)f(R,it,P)&&l(R,it,P,Ct.hair);l(R,W+1,P,Ct.hair)}const k=4.5,H=d(x,4);tt(x,H+3,k,3.1,Ct.hair);for(let R=x-4;R<x+4;R++)for(let P=1;P<=8;P++)if(Math.hypot(R+.5-x,P+.5-k)<=2.6)for(let W=H+1;W<=H+2;W++)l(R,W,P,N);break}case"braids":{F(Ct.hair,2);for(let k=S+1;k<$t;k++)for(let H=0;H<qt;H++)for(let R=0;R<jt;R++)(H<=1||H>=qt-2||R<=1)&&f(H,k,R)&&l(H,k,R,Ct.hair);const N=mn(Ct.hair,1.3),X=-5;for(const k of[-1,qt]){const H=Math.max(0,Math.min(qt-1,k)),R=Math.min(d(H,6),$t-4);if(!(R<0)){for(let P=X;P<=R;P++){const W=P<=X+3,j=P<=X+1;let it=(P%4+4)%4<2?Ct.hair:N;j&&(it=Ct.band);for(let mt=-1;mt<=1;mt++)for(let _t=-1;_t<=1;_t++)(!W||Math.abs(mt)+Math.abs(_t)<2)&&l(k+mt,P,6+_t,it)}tt(k+.5,X-2,6.5,1.9,Ct.band)}}break}}r=null;const Z=.18,ot=.25;let pt=-1;if(a.size){const N=new Map;let X=0,k=0;for(const P of a){const W=n.get(P);if(!W)continue;k++;const j=`${W.c[0]},${W.c[1]},${W.c[2]}`,it=N.get(j);it?it.n++:N.set(j,{n:1,c:W.c,chroma:(Math.max(...W.c)-Math.min(...W.c))/255}),N.get(j).chroma>=Z&&X++}const H=k>0&&X/k<ot;let R=null;for(const P of N.values())!H&&P.chroma<Z||(!R||P.n>R.n)&&(R=P);R&&(pt=$o(R.c)[0])}else o.size&&(pt=$o(Rc)[0]);if(pt>=0){const N=s.hairColor*360-pt;if(Math.abs(N)>.5)for(const X of[...a,...o]){const k=n.get(X);k&&(k.c=dy(k.c,N))}}return{voxels:[...n.values()],anchor:pt}}function Sy(s){return yy(s).voxels}const wy=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],Ka=.42,mo=new Bt,Nu=(s,t,e)=>(mo.setRGB(s/255,t/255,e/255,Ue),[mo.r,mo.g,mo.b]);function by(s,t){const e=new Map;for(const y of s)e.set(`${y.x},${y.y},${y.z}`,y);const n=(y,C,L)=>e.get(`${y},${C},${L}`),i=(y,C)=>y[0]===C[0]&&y[1]===C[1]&&y[2]===C[2],r=(y,C)=>i(y.c,C.c)||!!y.blend&&(!!C.blend||i(y.blend,C.c))||!!C.blend&&i(C.blend,y.c);let o=1/0,a=1/0,c=1/0,l=-1/0,h=-1/0,f=-1/0;for(const y of s)y.x<o&&(o=y.x),y.y<a&&(a=y.y),y.z<c&&(c=y.z),y.x>l&&(l=y.x),y.y>h&&(h=y.y),y.z>f&&(f=y.z);const d=t?t[0]:(o+l)/2,u=t?t[1]:(a+h)/2,m=t?t[2]:(c+f)/2,x=[],g=[],p=[],M=[],E=[],v=new Set;for(const y of s){const C=y.x-d,L=y.y-u,D=y.z-m,z=Nu(y.c[0],y.c[1],y.c[2]),G=Nu(y.c[0]*Ka,y.c[1]*Ka,y.c[2]*Ka);for(const{n:F,t1:Q,t2:Y}of wy){if(n(y.x+F[0],y.y+F[1],y.z+F[2]))continue;const tt=(N,X)=>[C+F[0]/2+Q[0]*N+Y[0]*X,L+F[1]/2+Q[1]*N+Y[1]*X,D+F[2]/2+Q[2]*N+Y[2]*X],V=tt(-.5,-.5),Z=tt(.5,-.5),ot=tt(.5,.5),pt=tt(-.5,.5);for(const N of[V,Z,ot,V,ot,pt])x.push(N[0],N[1],N[2]),g.push(F[0],F[1],F[2]),p.push(z[0],z[1],z[2]);for(const[N,X,k]of[[Q,Y,1],[Q,Y,-1],[Y,Q,1],[Y,Q,-1]]){const H=n(y.x+N[0]*k,y.y+N[1]*k,y.z+N[2]*k);if(H&&r(H,y)&&!n(y.x+N[0]*k+F[0],y.y+N[1]*k+F[1],y.z+N[2]*k+F[2]))continue;const R=bt=>[C+F[0]/2+N[0]*k/2+X[0]*bt/2,L+F[1]/2+N[1]*k/2+X[1]*bt/2,D+F[2]/2+N[2]*k/2+X[2]*bt/2],P=R(1),W=R(-1),j=P.map(bt=>bt.toFixed(2)).join(),it=W.map(bt=>bt.toFixed(2)).join(),mt=j<it?`${j}|${it}`:`${it}|${j}`;if(v.has(mt))continue;v.add(mt);const _t=.006;M.push(P[0]+F[0]*_t,P[1]+F[1]*_t,P[2]+F[2]*_t,W[0]+F[0]*_t,W[1]+F[1]*_t,W[2]+F[2]*_t),E.push(G[0],G[1],G[2],G[0],G[1],G[2])}}}const S=new Te;S.setAttribute("position",new Wt(x,3)),S.setAttribute("normal",new Wt(g,3)),S.setAttribute("color",new Wt(p,3));const b=new Te;b.setAttribute("position",new Wt(M,3)),b.setAttribute("color",new Wt(E,3));const A=[(l-o)/2+.5,(h-a)/2+.5,(f-c)/2+.5],_=Math.max(A[0],A[1],A[2])*1.15;return{faces:S,edges:b,radius:_}}const jf=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],ie=(s,t)=>({[s+"0"]:t,[s+"1"]:t}),Ey={calm:{...ie("lid",.1),smile:.08},pleased:{...ie("lid",.2),...ie("low",.3),...ie("raise",.1),smile:.65},happy:{...ie("raise",.35),...ie("arch",.25),...ie("low",.42),smile:.9,open:.16},joy:{...ie("raise",.85),...ie("arch",.4),...ie("low",.55),smile:1,open:.6,roll:.06},surprised:{...ie("raise",1.5),...ie("arch",.45),...ie("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...ie("lid",.2),skew:.42},sad:{...ie("inner",.95),...ie("raise",-.1),...ie("lid",.36),...ie("tilt",-.5),smile:-.75,nod:.08},bored:{...ie("lid",.5),...ie("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...ie("lid",.72),...ie("tilt",-.25),...ie("raise",-.2),...ie("inner",.2),smile:-.05,nod:.18},yawn:{...ie("lid",1),...ie("raise",.75),...ie("inner",.3),open:1,round:.55,nod:-.14},asleep:{...ie("lid",1.05),...ie("raise",-.12),...ie("inner",.12),smile:.05,open:.06},excited:{...ie("raise",.9),...ie("inner",-.1),...ie("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...ie("raise",.85),...ie("arch",.3),...ie("lid",.04),roll:.12,smile:.25}},Ty={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},Fu=()=>Object.fromEntries(jf.map(s=>[s,s==="pupil"?1:0])),Ay=s=>new Bt().setRGB(s[0]/255,s[1]/255,s[2]/255,Ue);class Ry{constructor(t){I(this,"head",new De);I(this,"solid",[]);I(this,"drop");I(this,"roll",0);I(this,"nod",0);I(this,"own",[]);I(this,"brows",[]);I(this,"eyes",[]);I(this,"mouth",[]);I(this,"seam",0);I(this,"lipH",.5);I(this,"browLo",0);I(this,"browHi",0);I(this,"d",Fu());I(this,"mood","calm");I(this,"feeling",null);I(this,"feelFor",0);I(this,"blinkIn",1.5);I(this,"blinkT",-1);I(this,"blinkLen",.13);I(this,"glance",new Nt);I(this,"glanceIn",1);I(this,"micro",new Nt);I(this,"microIn",.5);I(this,"talkT",0);I(this,"syl",0);I(this,"sylLen",.16);I(this,"sylAmp",0);I(this,"sylRound",0);I(this,"pause",0);I(this,"beat",0);I(this,"wasTalking",!1);I(this,"lookX",0);I(this,"lookY",0);const e=Sy(t);let n=1/0,i=1/0,r=1/0,o=-1/0,a=-1/0,c=-1/0;for(const V of e)n=Math.min(n,V.x),o=Math.max(o,V.x),i=Math.min(i,V.y),a=Math.max(a,V.y),r=Math.min(r,V.z),c=Math.max(c,V.z);const l=(n+o)/2,h=(i+a)/2,f=(r+c)/2;this.drop=(h-($t-1)/2)/16;const d=Cc(t),u=8,m=V=>V<u?0:1,x=[!1,!1];for(const V of e)V.part==="eye"&&(x[m(V.x)]=!0);const g=[236,240,246],p=e.map(V=>V.part==="brow"||V.part==="mouth"?{...V,c:d,part:void 0}:V.part==="pupil"&&x[m(V.x)]?{...V,c:g}:V),{faces:M,edges:E}=by(p,[l,h,f]),v=new Oo({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),S=new mf({vertexColors:!0});this.own.push(M,E,v,S);const b=new we(M,v);this.head.add(b,new kp(E,S)),this.solid.push(b);const A=new Tn(1,1,1);this.own.push(A);const _=new Map,y=V=>{const Z=V.join();let ot=_.get(Z);return ot||(ot=new Oo({color:Ay(V)}),_.set(Z,ot),this.own.push(ot)),ot},C=V=>{const Z=new we(A,y(V));return this.head.add(Z),this.solid.push(Z),Z},L=V=>V.z-f+.5,D=e.filter(V=>V.part==="brow");for(const V of[0,1]){const Z=D.filter(H=>m(H.x)===V);if(!Z.length)continue;const ot=Z.map(H=>H.x),pt=Math.min(...ot),N=Math.max(...ot),X=(pt+N)/2,k=Math.max(.5,(N-pt)/2);for(const H of Z){const R=V===0?(X-H.x)/k:(H.x-X)/k;this.brows.push({m:C(H.c),x:H.x-l,y:H.y-h,z:L(H),xn:R,side:V})}}const z=e.filter(V=>V.part==="eye"||V.part==="pupil"),G=d.map(V=>Math.round(V*.88));let F=-1/0;for(const V of[0,1]){const Z=z.filter(Gt=>m(Gt.x)===V);if(!Z.length)continue;const ot=Z.map(Gt=>Gt.x),pt=Z.map(Gt=>Gt.y),N=Math.min(...ot),X=Math.max(...ot),k=Math.min(...pt),H=Math.max(...pt);F=Math.max(F,H);const R=Math.max(...Z.map(L)),P=(N+X)/2-l,W=(k+H)/2-h,j=X-N+1,it=H-k+1;let mt=null;const _t=Math.max(1,j-2),bt=Math.max(1,it-2);if(x[V]){const Gt=Z.find(Xt=>Xt.part==="pupil").c;mt=C(Gt),mt.scale.set(_t,bt,.05)}const Ht=[];for(let Gt=N;Gt<=X;Gt++){const Xt=j>1?V===0?(Gt-N)/(j-1):(X-Gt)/(j-1):.5;Ht.push({x:Gt-l,k:Xt,up:C(G),low:C(G)})}this.eyes.push({side:V,y0:k-h-.5,y1:H-h+.5,z:R,cx:P,cy:W,pupil:mt,pw:_t,ph:bt,reach:(j-_t)/2,cols:Ht})}const Q=e.filter(V=>V.part==="mouth");if(Q.length){const V=[...new Set(Q.map(R=>R.x))].sort((R,P)=>R-P),Z=Q.map(R=>R.y),ot=Math.min(...Z),pt=Math.max(...Z),N=pt-ot+1;this.seam=N>=2?(ot+pt)/2-h:ot-h,this.lipH=N>=2?1:.5;const X=(V[0]+V[V.length-1])/2,k=Math.max(.5,(V[V.length-1]-V[0])/2),H=Q[0].c;for(const R of V){const P=Math.max(...Q.filter(W=>W.x===R).map(L));this.mouth.push({x:R-l,z:P,xn:(R-X)/k,top:C(H),bot:C(H),inside:C([46,22,28])})}}const Y=this.brows.map(V=>V.y),tt=Math.max(...e.filter(V=>V.c[0]===d[0]&&V.c[1]===d[1]&&V.c[2]===d[2]).map(V=>V.y));this.browLo=F===-1/0?-2:F-h+.85-(Y.length?Math.min(...Y):0),this.browHi=tt-h-.8-(Y.length?Math.max(...Y):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,i=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...Fu(),...Ey[r]};if(i!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(i-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const u=n.toLowerCase();".!?".includes(u)?(this.pause=.22,this.sylAmp=0):",;:".includes(u)?(this.pause=.1,this.sylAmp=.1):u===" "?this.sylAmp=.15:"aeiouy".includes(u)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(u)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const f=1-this.syl/this.sylLen,d=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*f),.65);o.open=Math.max(o.open*.6,d),o.round=Math.max(o.round,this.sylRound*d),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=Ty[r]??8;for(const f of jf){const d=f==="open"||f==="round"?30:f.startsWith("raise")?Math.max(a,12):a;this.d[f]+=(o[f]-this.d[f])*Math.min(1,t*d)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let c=0;if(this.blinkT>=0){this.blinkT+=t;const f=this.blinkT/this.blinkLen;c=f<.4?f/.4:f<.55?1:1-(f-.55)/.45,f>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let l=this.glance.x,h=this.glance.y;if(e){const f=Math.max(.4,Math.abs(e.z));l=e.x/f*1.6,h=e.y/f*1.6}r==="thinking"&&(l=.7,h=.6),this.lookX+=(Ge.clamp(l+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(Ge.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(c)}apply(t=0){const e=this.d,n=r=>e[r],i=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=Ge.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+i/2),r.m.scale.set(1.001,1,i)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const c of r.cols){const l=Ge.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(c.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*c.k-1)),f=t>.5?0:Ge.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(c.up,c.x,r.y1+.08,-(l+(l>.01?.08:0)),r.z),this.lid(c.low,c.x,r.y0-.08,f+(f>.01?.08:0),r.z)}if(r.pupil){const c=Ge.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*c,r.ph*c,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,c=Ge.clamp(e.round,0,1),l=Math.max(0,e.open)*(1-.55*o*o)*(1-c*.75*o*o)*2.4,h=1-c*.35*Math.max(0,Math.abs(o)-.5)*2,f=this.seam+a;r.top.position.set(r.x,f+this.lipH/2,r.z+.01+i/2),r.top.scale.set(h,this.lipH,i),r.bot.position.set(r.x,f-l-this.lipH/2,r.z+.01+i/2),r.bot.scale.set(h,this.lipH,i),r.inside.visible=l>.02,r.inside.position.set(r.x,f-l/2,r.z+.005+i/4),r.inside.scale.set(h*.98,Math.max(.001,l),i/2)}}lid(t,e,n,i,r){const o=Math.abs(i);t.visible=o>.01,t.visible&&(t.position.set(e,n+i/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}function Cy(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Te;let l=0;for(let h=0;h<s.length;++h){const f=s[h];let d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const u in f.morphAttributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[u]===void 0&&(o[u]=[]),o[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(e){let h=0;const f=[];for(let d=0;d<s.length;++d){const u=s[d].index;for(let m=0;m<u.count;++m)f.push(u.getX(m)+h);h+=s[d].attributes.position.count}c.setIndex(f)}for(const h in r){const f=zu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){const u=[];for(let x=0;x<o[h].length;++x)u.push(o[h][x][d]);const m=zu(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function zu(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new En(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let d=0,u=h.count;d<u;d++)for(let m=0;m<e;m++){const x=h.getComponent(d,m);a.setComponent(d+f,m,x)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const Ee=22,td=.6,en=Math.PI*2,Ce=(s,t,e)=>s<t?t:s>e?e:s,Vn=s=>s<0?0:s>1?1:s,zt=(s,t,e)=>s+(t-s)*e,se=s=>{const t=Vn(s);return t*t*(3-2*t)},Ly=s=>{const t=Vn(s);return t*t*t*(t*(t*6-15)+10)},Ss=s=>s-Math.floor(s),yn=s=>Math.atan2(Math.sin(s),Math.cos(s)),ed=(s,t)=>.05+.4*Math.max(0,1-s/(.55*t)),ci=-.06,cn=.11,sn=.19;class Py{constructor(t){I(this,"xs",[]);I(this,"zs",[]);I(this,"cum",[]);I(this,"total",0);const e=[];for(const i of t)(!e.length||Math.hypot(i.x-e[e.length-1].x,i.z-e[e.length-1].z)>1e-4)&&e.push(i);const n=(i,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(i-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(i),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let i=1;i<e.length-1;i++){const r=e[i-1],o=e[i],a=e[i+1],c=Math.hypot(o.x-r.x,o.z-r.z),l=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/c,f=(o.z-r.z)/c,d=(a.x-o.x)/l,u=(a.z-o.z)/l;if(h*d+f*u>.999){n(o.x,o.z);continue}const m=Math.min(.42,c*.5,l*.5),x=o.x-h*m,g=o.z-f*m,p=o.x+d*m,M=o.z+u*m;for(let E=0;E<=8;E++){const v=E/8,S=1-v;n(S*S*x+2*S*v*o.x+v*v*p,S*S*g+2*S*v*o.z+v*v*M)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,i=e.length-1;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),i=this.cum[n+1]-this.cum[n],r=i>0?Vn((t-this.cum[n])/i):0;return e.x=zt(this.xs[n],this.xs[n+1],r),e.z=zt(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(Ce(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const go=.05,xo=.12;class Iy{constructor(t,e){I(this,"L");I(this,"thigh");I(this,"shin");I(this,"footH",.06);I(this,"hipX",.17);I(this,"armLen");I(this,"legless");I(this,"pos",new U);I(this,"yaw",0);I(this,"lean",0);I(this,"roll",0);I(this,"twist",0);I(this,"swayRoll",0);I(this,"squash",0);I(this,"stretch",0);I(this,"feet");I(this,"arms");I(this,"onPuff",null);I(this,"onPrint",null);I(this,"airborne",!1);I(this,"rest","stand");I(this,"breath",0);I(this,"asleep",!1);I(this,"headDrop",0);I(this,"hipDrop",0);I(this,"scratch",null);I(this,"scratchIn",5);I(this,"world");I(this,"base",new U);I(this,"vy",0);I(this,"qv",0);I(this,"qRest",0);I(this,"leanV",0);I(this,"leanRest",0);I(this,"sv",0);I(this,"stretchRest",0);I(this,"speed",0);I(this,"accel",0);I(this,"lastSpeed",0);I(this,"wantYaw",null);I(this,"trip",null);I(this,"pending",null);I(this,"act",null);I(this,"phase",0);I(this,"running",0);I(this,"clockOn",!1);I(this,"gRef",0);I(this,"held",!1);I(this,"wallSide",0);I(this,"sway",0);I(this,"swayV",0);I(this,"shift",0);I(this,"shiftIn",3);I(this,"clock",0);I(this,"tapT",-1);I(this,"seq",null);I(this,"queued",[]);I(this,"restYaw",null);I(this,"anchor",{x:0,z:0,g:0,yaw:0});I(this,"t1",new U);I(this,"t2",new U);I(this,"t3",new U);I(this,"e1",new Rn);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const i=o=>({side:o,mode:"ground",sole:new U,yaw:0,pitch:0,from:new U,to:new U,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new U,kneeOut:0,sy:0,ankle:new U,q:new ge,toe:0});this.feet=[i(-1),i(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*Ee*e):t==="run"?Math.sqrt(.45*Ee*e):Math.min(9,Math.sqrt(1.15*Ee*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(Ee*e)),i=Ce(2*n**.3*e,.35*e,2.6*e),r=Math.max(i,t/this.boundFreq);return zt(i,r,this.running)}get duty(){return zt(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const i of this.feet)this.neutral(i,this.base,n,i.sole),i.mode="ground",i.yaw=n,i.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n,i="stroll"){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n,stride:i},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const r={x:this.base.x,z:this.base.z},o=this.legless?[{kind:"path",pts:[r,...t]}]:this.split(r,t);this.trip={gait:e,stride:i,legs:o,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const i=[];return t==="lie"&&n==="stand"?i.push("kneel","lie"):t==="kneel"&&n==="lie"?i.push("stand","kneel"):i.push(t),this.queued.push(...i),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const i=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=i.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=i.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,i=this.base.z){const r=this.world.groundAt(n,i),o=this.thigh+this.shin,a=Math.cos(t),c=Math.sin(t),l=(f,d)=>Math.abs(this.world.groundAt(n+a*f+c*d,i-c*f+a*d)-r)<.25,h=this.thigh+.4;for(let f=.3;f<h;f+=.3)if(!l(-.45,f)||!l(.45,f))return!1;if(!l(-.45,h)||!l(.45,h)||!l(0,-.45))return!1;if(!e)return!0;for(let f=.3;f<=o*.95+.35;f+=.3)if(!l(-.3,f)||!l(.3,f))return!1;if(!l(-.7,-.5)||!l(.7,-.5)||!l(0,-.6))return!1;for(let f=.1;f<=1.05;f+=.16)for(let d=.5;d<=o*.92+.35;d+=.3)if(!l(.25+Math.sin(f)*d,Math.cos(f)*d))return!1;for(const[f,d]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!l(f,d))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let i=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const c=this.world.groundAt(a.x,a.z),l=c-o,h=l>this.stepUpMax()?l>this.jumpUpMax()?"climb":"jump":-l>this.stepDownMax()?"drop":null;if(h){const f={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},d=h==="climb"?l>this.L?0:.12:h==="jump"?.14:.12;i.push({x:r.x+f.x*d,z:r.z+f.z*d}),n.push({kind:"path",pts:i}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:c}),i=[{x:a.x,z:a.z}]}else i.push(a);r=a,o=c}return i.length>1&&n.push({kind:"path",pts:i}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const i=new Py(e.pts);if(t.path=i,t.s=0,this.legless){t.ground=[];for(let r=0;r<=i.total+go;r+=go)i.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(i.yawAt(.05))}else{t.path=null,this.clockOn=!1;const i={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new U(e.b.x-i.x*.05,this.standY(e.hb),e.b.z-i.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(i.x,i.z)),o){const c={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},l={x:i.z,z:-i.x};this.act.jump.grip=[-1,1].map(h=>new U(c.x+l.x*h*.3+i.x*.14,e.hb+.01,c.z+l.z*h*.3+i.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),i=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=i(this.feet[0])<=i(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let i=0;i<n;i++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand"?this.stepRest(t):this.asleep?this.breath=Ss(this.breath+t/3.6):this.act?this.stepAct(t):e&&e.path?this.legless?this.stepHopper(t,e):this.stepWalk(t,e):this.stepStand(t),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,i=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?4.5:e.gait==="run"?4:3,a=r?4.5:e.gait==="run"?5:4.5,c=n.total-e.s;let l=Math.min(i,Math.sqrt(2*a*.7*Math.max(0,c-.03))),h=1/0;this.held=!1;for(const b of this.feet)b.mode==="ground"&&(h=Math.min(h,b.sole.y));if(h<1/0){const b=Math.sin(this.yaw),A=Math.cos(this.yaw),_=this.world.groundAt(this.base.x,this.base.z);for(let y=0;y<=.8;y+=.05){const C=this.world.groundAt(this.base.x+b*y,this.base.z+A*y);if(C>Math.max(h,_)+.2){C<=h+this.stepUpMax()+.05&&(l=Math.min(l,Math.sqrt(2*a*2*Math.max(0,y-.18))),this.held=y<.45);break}}}const f=Math.abs(yn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));l*=Vn((1.6-f)/1.1);const d=Ce((l-this.speed)*3,-a*1.6,o);this.accel+=(d-this.accel)*Math.min(1,t*5),this.speed=Math.max(0,this.speed+this.accel*t),c<=.01&&(this.speed=0,this.accel=0);const u=this.gaitSpeed("walk"),m=this.gaitSpeed("bound"),x=Vn((this.speed-u*1.05)/(m*.85-u*1.05));this.running+=(x-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const g=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),p=zt(4.5,8,this.running)*t;this.yaw+=Ce(yn(g-this.yaw),-p,p);const M=u/this.strideAt(u),E=Math.max(M*zt(.75,1.5,se((f-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),v=this.duty,S=this.running>.45;if(this.clockOn){this.phase+=E*t;for(let b=0;b<2;b++){const A=this.feet[b],_=Ss(this.phase-b*.5);_<v?A.mode==="swing"&&A.clocked&&this.touchDown(A,S?1:.55):(A.mode!=="swing"&&(this.liftOff(A,!0,0),this.feet.every(y=>y.mode!=="ground")&&(this.qv+=1.6*this.running)),A.s=(_-v)/(1-v),A.s<.7&&this.aimSwing(A,e,(1-_)/E,v/2/E)),this.footPitch(A,_,v,S)}}if(this.airborne=this.clockOn&&this.feet.every(b=>b.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,c<=.01){if(this.clockOn){for(const A of this.feet)A.mode!=="swing"||!A.clocked||(A.clocked=!1,A.dur=Math.max(.08,(1-A.s)*((1-v)/E)),A.s=0,A.from.set(A.ankle.x,A.ankle.y-this.footH,A.ankle.z),A.fromYaw=A.yaw,A.apex=Math.max(A.from.y,A.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(A=>A.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,S?"run":"walk",E,v,e.stride)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,i){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+i),this.held?.55:0)),c=r.at(a,this.t1),l=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(yn(l-this.yaw))>1.2?this.yaw:l;this.neutral(t,c,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,zt(.06+.1*this.legW,.12+.2*this.legW,this.running)*(e.stride==="strut"?1.5:1))}neutral(t,e,n,i){const r=(this.hipX+.015)*t.side;return i.x=e.x+Math.cos(n)*r,i.z=e.z-Math.sin(n)*r,i.y=this.world.groundAt(i.x,i.z),i}safeFoot(t,e){const n=Math.sin(e),i=Math.cos(e),r=Ce(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),c=this.world.groundAt(t.x+n*(sn+.01),t.z+i*(sn+.01)),l=this.world.groundAt(t.x+n*r,t.z+i*r),h=this.world.groundAt(t.x+n*(ci-.02),t.z+i*(ci-.02));if(c>a+.05||l>a+.25)t.x-=n*.06,t.z-=i*.06;else if(h<a-.05)t.x+=n*.05,t.z+=i*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*Ce(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let i=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;i=Math.max(i,this.world.groundAt(zt(t.from.x,t.to.x,o),zt(t.from.z,t.to.z,o)))}t.apex=i+n}footPitch(t,e,n,i){if(t.mode==="ground"){const r=e/n;i?t.pitch=r<.5?0:-.85*se((r-.5)/.5):t.pitch=r<.12?.22*(1-se(r/.12)):r<.6?0:-.7*se((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?zt(-.7,-.8,r/.3):r<.82?zt(-.8,0,se((r-.3)/.52)):(i?-.05:.22)*se((r-.82)/.18)}}bodyOver(t,e,n,i,r="stroll"){let o=this.shift;const a=r==="strut"?1:0,c=e!=="stand"&&this.clockOn,l=c?Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))):0;let h=0;if(c)o=-(zt(zt(.95,1.2,a),.1,this.running)*(this.hipX+.015)*l)*Math.cos(en*(this.phase-i/2)),h=zt(zt(.09,.15,a),.04,this.running)*l*Math.sin(en*(this.phase-i/2));else{const E=this.feet.filter(v=>v.mode==="ground");E.length===1&&(o=E[0].side*this.hipX*.85)}o+=this.wallNudge();const f=e==="stand"?40:150;this.swayV+=(f*(o-this.sway)-2*Math.sqrt(f)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.twist+=(h-this.twist)*Math.min(1,t*12),this.swayRoll+=((c?-.13*this.sway/Math.max(.1,this.hipX+.015):0)-this.swayRoll)*Math.min(1,t*10),this.pos.x=this.base.x+Math.cos(this.yaw)*this.sway,this.pos.z=this.base.z-Math.sin(this.yaw)*this.sway;const d=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(d+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const u=this.reachTop();let m=u.soft-.012*this.legW;if(e!=="stand"){let E=-1/0,v=!1;for(const S of this.feet)S.mode==="ground"&&(E=Math.max(E,S.sole.y));for(const S of this.feet)S.mode==="swing"&&S.to.y>E+.2&&(v=!0);E>-1/0&&!v&&(m=Math.min(m,E+this.footH+(this.thigh+this.shin)*.955+.5))}if(c&&this.running<.45){const E=zt(.045,.085,a)*this.legW*l*(1-this.running/.45),v=Ss(this.phase*2);m-=E*(.5-.5*Math.cos(en*(v-i)))}let x=m;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const E=.5/n,v=i/n,S=Math.max(0,E-v),b=Ee*S*v/en,A=this.speed*v/2,_=(this.thigh+this.shin)*.985,y=this.gRef+this.footH+Math.sqrt(Math.max(.25*_*_,_*_-A*A))+.5,C=Ss(this.phase*2),L=v/E;let D;if(C<L)D=y-b*Math.sin(Math.PI*(C/L));else{const z=(C-L)*E;D=y+Ee*S/2*z-Ee/2*z*z}x=zt(m,D,se((this.running-.45)/.25))}e==="stand"&&(x-=.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const E of this.feet){if(E.mode!=="ground")continue;const v=this.kneeAt(E,this.t2),S=Math.sin(E.yaw)*.06,b=Math.cos(E.yaw)*.06;(this.world.solidAt(v.x,v.y,v.z)||this.world.solidAt(v.x+S,v.y-.06,v.z+b))&&(x=Math.max(x,u.hard))}const g=e==="run"?en*7:en*4.2,p=e==="run"?.9:.72;this.vy+=(g*g*(x-this.pos.y)-2*p*g*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>u.hard&&(this.pos.y=u.hard,this.vy>0&&(this.vy=0));const M=d+this.footH+.45*this.legW+.5;this.pos.y<M&&(this.pos.y=M,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),i=Math.cos(t.yaw),r=t.pitch,o=r>0?ci:r<0?cn:0,a=-o,c=this.footH,l=Math.cos(r),h=Math.sin(r),f=o+a*l-c*h;return e.set(t.sole.x+n*f,t.sole.y+a*h+c*l,t.sole.z+i*f)}kneeAt(t,e){const n=Math.cos(this.yaw),i=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-i*t.side*this.hipX,c=t.ankle.x-r,l=t.ankle.y-o,h=t.ankle.z-a,f=Math.hypot(c,l,h)||1e-6,d=this.thigh,u=this.shin,m=Ce(f,Math.abs(d-u)+.001,d+u-1e-4),x=c/f,g=l/f,p=h/f,M=Ce((d*d+m*m-u*u)/(2*d*m),-1,1),E=Math.sqrt(1-M*M),v=t.kneeOut,S=n*t.side,b=-i*t.side;let A=Math.sin(t.yaw)*(1-v*1.3)+S*(.12+1.2*v),_=ed(-l,this.legW),y=Math.cos(t.yaw)*(1-v*1.3)+b*(.12+1.2*v);const C=A*x+_*g+y*p;A-=x*C,_-=g*C,y-=p*C;const L=Math.hypot(A,_,y)||1;return e.set(r+d*(M*x+E*A/L),o+d*(M*g+E*_/L),a+d*(M*p+E*y/L))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,i=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const c=this.kneeAt(t,this.t2);return this.world.solidAt(c.x,c.y,c.z)||this.world.solidAt(c.x+n,c.y-.07,c.z+i)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,i=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,c=Math.cos(this.yaw)*o,l=(g,p)=>this.world.solidAt(g,n,p)||this.world.solidAt(g,i,p),h=g=>l(this.base.x+t*r*g,this.base.z+e*r*g),f=g=>l(this.base.x+t*r*g+a,this.base.z+e*r*g+c),d=h(1),u=h(-1),m=d||f(1)&&!u,x=u||f(-1)&&!d;return this.wallSide=m&&!x?-1:x&&!m?1:0,m&&!x?.22:x&&!m?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),i=(c,l)=>{const h=this.pos.x+e*c.side*this.hipX,f=this.pos.z-n*c.side*this.hipX,d=l.x-h,u=l.z-f,m=t*t-d*d-u*u;return l.y+this.footH+(m>0?Math.sqrt(m):0)+.5};let r=1/0;for(const c of this.feet)c.mode==="ground"&&(r=Math.min(r,i(c,this.plantedAnkle(c,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const c of this.feet){if(c.mode!=="swing")continue;const l=i(c,c.to),h=se((c.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?l+.3*(1-h):zt(o,l,h))),c.s>.88&&(r=Math.min(r,l+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const i=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;i!==null&&(this.yaw+=Ce(yn(i-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const i of this.feet)i.mode!=="swing"||i.clocked||(n=!0,i.s=Math.min(1,i.s+t/i.dur),i.pitch=Math.sin(Math.PI*i.s)*-.45,i.s>=1&&this.touchDown(i,.35));if(!n&&!this.legless&&this.feet.every(i=>i.mode==="ground")){let i=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.base,this.yaw,this.t2),c=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(yn(this.yaw-o.yaw))*.35;c>r&&(r=c,i=o)}if(i&&r>.09+.03*this.legW){const o=i;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.base,this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const i of this.feet)i.mode==="ground"&&(i.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*en*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,zt(-n*.97,-n*.55,se(t)),zt(0,.1*n,se(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,c)=>new U(o,a,c),n=this.thigh+this.shin,i=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,i+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,i,0),e(r,i,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=xo/2,a=sn-.02,c=a+.07,l=Math.asin(Ce((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(l+.19),c),f=Math.asin(Ce((h-o)/this.thigh,-1,1)),d=this.thigh*Math.cos(f),u=d-this.shin*Math.cos(l),m=this.hipX+.03,x=-.08,g=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(x,0,0))),p=this.fromPivot(g,x,0,[e(-m,a,u),e(m,a,u)],[-Math.PI/2,-Math.PI/2],[null,null],1),M=2*Math.max(.12,this.armLen/2-.05)*.92,E=p.head.y-.08-.04;return M*M-E*E>.35*.35&&(p.hands=[this.palm(p.head,x,0,0,-.12,.92),this.palm(p.head,x,0,1,.12,.92)]),p}case"lie":{const a=Math.PI/2,c=e(-.25,.5+xo,0),l=this.onGround(c,0,a,1,.62,.84,i+.2),h=new ge().setFromEuler(this.e1.set(0,0,a)),d=this.hipOf(c,h,1,1).lerp(l,Math.min(.45,.55/n));return d.y+=xo/2+.03,{head:c,lean:0,roll:a,ankles:[this.onGround(c,0,a,0,.85,.84,i+.04),l],feet:[-.35,-.35],hands:[this.palm(c,0,a,0,-.3,.8,.05),d],hips:1}}}}restOn(t,e){const n=new ge().setFromEuler(this.e1.set(t,0,e));let i=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])i=Math.min(i,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-i}onGround(t,e,n,i,r,o,a){const c=new ge().setFromEuler(this.e1.set(e,0,n)),l=this.hipOf(t,c,i,1),h=o*(this.thigh+this.shin),f=l.y-a,d=Math.sqrt(Math.max(0,h*h-f*f));return new U(l.x+Math.sin(r)*d,Math.max(a,l.y-h),l.z+Math.cos(r)*d)}palm(t,e,n,i,r,o,a=.04){const c=new ge().setFromEuler(this.e1.set(e,0,n)),l=this.arms[i].side,h=t.clone().add(new U(l*(.5+xo/2),-.08,0).applyQuaternion(c)),f=2*Math.max(.12,this.armLen/2-.05)*o,d=h.y-a,u=Math.sqrt(Math.max(0,f*f-d*d));return new U(h.x+Math.sin(r)*u,a,h.z+Math.cos(r)*u)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(yn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new U(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,i,r,o,a=0){return{head:t.clone().add(new U(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:i,feet:r,hands:o,hips:a}}kneelDown(){var x,g;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),i=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(i),a=.14*e,c=r.y+.03*e,l=.12*t,h=Math.sqrt(2*Ee*(c-(r.y-a))),f=l+h/Ee+Math.sqrt(2*(c-o.y)/Ee),d=f+.12*t,u=[],m=[];for(let p=0;;p=Math.min(d,p+1/40)){if(p<=l){const M=se(p/l);u.push(this.fromPivot(new U(0,r.y-a*M,0),.08*M,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(p<f){const M=p-l,E=M/(f-l),v=se(E),S=new U(0,r.y-a+h*M-.5*Ee*M*M,o.z*v),b=[0,1].map(y=>n.ankles[y].clone().lerp(i.ankles[y],v)),A=zt(0,i.feet[0],v),_=E>.5?[((x=i.hands[0])==null?void 0:x.clone())??null,((g=i.hands[1])==null?void 0:g.clone())??null]:[null,null];u.push(this.fromPivot(S,zt(.08,i.lean,v),0,b,[A,A],_,v))}else u.push(i);if(m.push(p/d),p>=d)break}return{keys:u,at:m,dur:d,t:0,to:"kneel",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:l/d,pushDone:!1}}flopDown(){var E,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),i=this.pivotOf(e),r=this.pivotOf(n),o=(S,b)=>new ge().setFromEuler(this.e1.set(S,0,b)),a=o(e.lean,e.roll),c=o(n.lean,n.roll),l=[0,1].map(S=>e.ankles[S].clone().sub(this.hipOf(e.head,a,S,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(S=>n.ankles[S].clone().sub(this.hipOf(n.head,c,S,1)).applyQuaternion(c.clone().invert())),f=e.lean+.14,d=Math.max(i.y,r.y)+.2,u=.14*t,m=Math.sqrt(2*Ee*(d-i.y)),x=u+m/Ee+Math.sqrt(2*(d-r.y)/Ee),g=x+.2*t,p=[],M=[];for(let S=0;;S=Math.min(g,S+1/40)){if(S<=u){const b=se(S/u);p.push(this.fromPivot(i.clone(),zt(e.lean,f,b),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((E=e.hands[0])==null?void 0:E.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(S<x){const b=S-u,A=b/(x-u),_=se(A),y=new U(zt(i.x,r.x,_),i.y+m*b-.5*Ee*b*b,zt(i.z,r.z,_)),C=zt(f,n.lean,_),L=zt(0,n.roll,_),D=o(C,L),z=y.clone().add(new U(0,.5,0).applyQuaternion(D)),G=[0,1].map(Y=>{const tt=zt(l[Y].length(),h[Y].length(),_),V=l[Y].clone().normalize().lerp(h[Y].clone().normalize(),_).normalize().multiplyScalar(tt).applyQuaternion(D),Z=this.hipOf(z,D,Y,1).add(V);return Z.y=Math.max(Z.y,this.footH+.02),Z}),F=[0,1].map(Y=>zt(e.feet[Y],n.feet[Y],_)),Q=[0,1].map(Y=>{const tt=e.hands[Y],V=n.hands[Y];return tt&&V?tt.clone().lerp(V,_):V&&A>.5?V.clone():null});p.push(this.fromPivot(y,C,L,G,F,Q,1))}else p.push(n);if(M.push(S/g),S>=g)break}return{keys:p,at:M,dur:g,t:0,to:"lie",thud:x/g,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:u/g,pushDone:!1}}springUp(t){var b,A;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,i=this.pose(t),r=this.pose("stand"),o=this.pivotOf(i),a=this.pivotOf(r),c=.12*n,l=a.y+.05*n,h=(t==="lie"?.16:.1)*e,f=Math.sqrt(2*Ee*(l-o.y)),d=h+f/Ee+Math.sqrt(2*(l-(a.y-c))/Ee),u=d+.16*e,m=t==="kneel"?i.lean+.15:i.lean,x=t==="lie"?i.roll-.35:i.roll,g=new ge().setFromEuler(this.e1.set(i.lean,0,i.roll)),p=[0,1].map(_=>i.ankles[_].clone().sub(this.hipOf(i.head,g,_,i.hips))),M=new U(a.x,a.y-c,a.z),E=[0,1].map(_=>r.ankles[_].clone().sub(M.clone().add(new U(this.feet[_].side*this.hipX,0,0)))),v=[],S=[];for(let _=0;;_=Math.min(u,_+1/40)){if(_<=h){const y=se(_/h);v.push(this.fromPivot(o.clone(),zt(i.lean,m,y),zt(i.roll,x,y),[i.ankles[0].clone(),i.ankles[1].clone()],[i.feet[0],i.feet[1]],[((b=i.hands[0])==null?void 0:b.clone())??null,((A=i.hands[1])==null?void 0:A.clone())??null],i.hips))}else if(_<d){const y=_-h,C=y/(d-h),L=new U(zt(o.x,a.x,se(C)),o.y+f*y-.5*Ee*y*y,zt(o.z,a.z,se(C))),D=zt(m,0,se(C)),z=zt(x,0,se(Math.min(1,C*1.4))),G=new ge().setFromEuler(this.e1.set(D,0,z)),F=L.clone().add(new U(0,.5,0).applyQuaternion(G)),Q=se(Math.min(1,C*1.3)),Y=zt(i.hips,0,Q),tt=[0,1].map(pt=>{const N=zt(p[pt].length(),E[pt].length(),C)-.08*n*Math.sin(Math.PI*C),X=p[pt].clone().normalize().lerp(E[pt].clone().normalize(),Q).normalize(),k=this.hipOf(F,G,pt,Y).addScaledVector(X,N);return k.y=Math.max(k.y,this.footH+.02),k}),V=[0,1].map(pt=>zt(i.feet[pt],0,se(C))),Z=F.y-.08<this.armLen*.92,ot=[0,1].map(pt=>Z&&i.hands[pt]&&i.hands[pt].y<.15?i.hands[pt].clone():null);v.push(this.fromPivot(L,D,z,tt,V,ot,Y))}else{const y=se((_-d)/(u-d));v.push(this.fromPivot(new U(a.x,zt(a.y-c,a.y,y),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(S.push(_/u),_>=u)break}return{keys:v,at:S,dur:u,t:0,to:"stand",thud:d/u,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/u,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=Vn(e.t/e.dur),c=e.linear?a:se(a);let l=0;for(;l<e.at.length-2&&c>e.at[l+1];)l++;const h=Vn((c-e.at[l])/(e.at[l+1]-e.at[l]));if(n=this.mix(e.keys[l],e.keys[l+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let f=0;f<3;f++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const f of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(f.ankle.x,this.anchor.g,f.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const i=!e&&this.rest!=="stand";i&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=Ss(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(en*this.breath);if(this.qRest=i?(this.rest==="lie"?.035:.045)*r:0,i&&this.rest==="lie"&&(n.head.y+=.012*r),i&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,i=n,r=e.dur-n-i;e.w=e.t<n?se(e.t/n):e.t>e.dur-i?se((e.dur-e.t)/i):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(en*(e.kind==="chin"?4.5:5.5)*o)*se(o/.15)*se((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const i=(g,p)=>g&&p?g.clone().lerp(p,n):n<.5?g?g.clone():null:p?p.clone():null,r=zt(t.lean,e.lean,n),o=zt(t.roll,e.roll,n),a=(g,p)=>new ge().setFromEuler(this.e1.set(g,0,p)),c=a(t.lean,t.roll),l=a(e.lean,e.roll),h=a(r,o),f=t.head.clone().lerp(e.head,n);f.y=Math.max(f.y,this.restOn(r,o));const d=zt(t.hips,e.hips,n),u=[0,1].map(g=>{const p=t.ankles[g].clone().sub(this.hipOf(t.head,c,g,t.hips)),M=e.ankles[g].clone().sub(this.hipOf(e.head,l,g,e.hips)),E=zt(p.length(),M.length(),n),v=zt(t.ankles[g].y,e.ankles[g].y,n),S=this.hipOf(f,h,g,d),b=zt(p.x,M.x,n),A=zt(p.z,M.z,n),_=Math.hypot(b,A),y=S.y-v,C=Math.sqrt(Math.max(0,E*E-y*y)),L=new U(S.x,Math.max(v,S.y-E),S.z);return _>1e-4&&(L.x+=b/_*C,L.z+=A/_*C),L.y=Math.max(L.y,this.footH+.02),L}),m=g=>{const p=t.hands[g],M=e.hands[g];if(!p||!M)return i(p,M);const E=Math.atan2(p.x-t.head.x,p.z-t.head.z),v=Math.atan2(M.x-e.head.x,M.z-e.head.z),S=E+yn(v-E)*n,b=zt(Math.hypot(p.x-t.head.x,p.z-t.head.z),Math.hypot(M.x-e.head.x,M.z-e.head.z),n);return new U(f.x+Math.sin(S)*b,zt(p.y,M.y,n),f.z+Math.cos(S)*b)},x=[m(0),m(1)];return x.forEach((g,p)=>{g&&(this.outsideBody(g,f,h,this.arms[p].side),g.y=Math.max(g.y,.03))}),{head:f,lean:r,roll:o,ankles:u,feet:[zt(t.feet[0],e.feet[0],n),zt(t.feet[1],e.feet[1],n)],hands:x,hips:d}}outsideBody(t,e,n,i){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,c=-1,l=0;for(let h=0;h<3;h++)for(const f of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,f).applyQuaternion(n).y<-.6)continue;const d=o-f*r.getComponent(h)-(h===0&&f===i?.25:0);d<a&&(a=d,c=h,l=f)}c<0||(r.setComponent(c,l*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,i=0){const r=this.feet[n].side;return t.clone().add(new U(r*this.hipX,-.5-i*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),i=Math.sin(e.yaw),r=(a,c)=>c.set(e.x+n*a.x+i*a.z,e.g+a.y,e.z-i*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,c)=>{a.mode="free",r(t.ankles[c],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new ge().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new ge().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[c])),a.toe=t.feet[c]<-.9?-1.1*se((-t.feet[c]-.9)/.5):t.feet[c]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,c)=>{const l=t.hands[c];l&&(a.reach=r(l,new U),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive,t.stride)}}envAt(t,e,n=.25,i=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/go));a<=Math.min(r.length-1,Math.ceil((e+i)/go));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var l;const n=e.path,i=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=Ce(Math.min(i,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=Ce(yn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=Ss(this.phase),c=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,c+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(l=e.onArrive)==null||l.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,i){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,i,new U);return this.safeFoot(a,i),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:i,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const i of this.arms)i.tp=.02,i.to=.07,i.te=.16;if(e.jump){const i=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),i&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const i=this.arms[0];i.tp=-2.55,i.to=.42,i.te=.55+.42*Math.sin(e.t*en*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const i=se(n/.15)*(1-se((n-.86)/.14));this.oneLegPose(i),this.yaw=e.yaw0+Ly((n-.12)/.74)*en,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*i+.08,.25)}else if(e.kind==="sigh"){const i=n<.45?Math.sin(Math.PI*Vn(n/.45)):0,r=n>.4?Math.sin(Math.PI*Vn((n-.4)/.6)):0;this.qRest=.08*i-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=yn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive,n.stride)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,i=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=se(e.t/i);this.vy=0,this.pos.y=zt(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=Ce(yn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=i&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=se(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=zt(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),c=Math.sqrt(2*a/Ee),l=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/Ee);this.vy=Ee*c,e.air=c+l,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=Ee*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=Ce(yn(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*Vn(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*zt(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,f)=>{h.reach=e.grip[f],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=Ce(this.vy*.022,-.14,.18);const c=this.world.groundAt(e.to.x,e.to.z),l=this.standY(c);if(e.t>=e.air||this.vy<0&&this.pos.y<=l&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,l,e.to.z),e.phase="land",e.t=0,this.feet.forEach((f,d)=>{var u;f.mode="ground",f.sole.copy(e.feet[d]).setY(this.world.groundAt(e.feet[d].x,e.feet[d].z)),f.yaw=e.yawTo,(u=this.onPrint)==null||u.call(this,f.sole,f.yaw),f.pitch=0,f.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let f=0;f<(h>4?5:2);f++)this.puffAt(this.pos.x,c,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,i){if(!this.onPuff)return;const r=new U((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new U(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,i)}armsTo(t,e,n){for(const i of this.arms)i.tp=t,i.to=e,i.te=n}stepSprings(t){const e=en*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=Ce(this.squash+this.qv*t,-.45,.45);const i=220;if(this.sv+=(i*(this.stretchRest-this.stretch)-2*Math.sqrt(i)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const c=o?zt(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,l=en*2.4,h=.5;if(this.leanV+=(l*l*(c+this.leanRest-this.lean)-2*h*l*this.leanV-(o?3.5*Ce(a,-12,12):0))*t,this.lean=Ce(this.lean+this.leanV*t,-.6,.7),this.roll=Ce(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const u=this.running,m=zt(.3,1,u)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const x of this.arms)x.tp=(x.side===-1?1:-1)*m*Math.cos(en*(this.phase-.04)),x.to=x.side===this.wallSide?.03:zt(.07,.2,u),x.te=zt(.24,1.55,u)+Math.max(0,-x.tp)*.35}else if(!this.act)for(const u of this.arms)u.tp=.02,u.to=.07,u.te=.16;const f=en*2.3,d=.42;for(const u of this.arms)u.vp+=(f*f*(u.tp-u.pitch)-2*d*f*u.vp)*t,u.vo+=(f*f*(u.to-u.out)-2*d*f*u.vo)*t,u.ve+=(f*f*(u.te-u.elbow)-2*d*f*u.ve)*t,u.pitch+=u.vp*t,u.out+=u.vo*t,u.elbow=Math.max(0,u.elbow+u.ve*t),u.reach||(u.reachW=Math.max(0,u.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const i of this.feet){if(i.mode==="swing"){const r=i.s,o=se(r),a=zt(i.from.x,i.to.x,o),c=zt(i.from.z,i.to.z,o),l=Math.max(.04,i.apex-Math.max(i.from.y,i.to.y)),h=zt(i.from.y,i.to.y,se((r-.15)/.75))+l*Math.pow(Math.sin(Math.PI*r),1.3),f=i.to.x-i.from.x,d=i.to.z-i.from.z,u=Math.hypot(f,d)||1,m=f/u,x=d/u,g=Math.min(sn+.08+.35*(1-r),(1-o)*u+sn+.04);let p=-1/0;for(let A=0;A<=4;A++){const _=ci-.04+(g-ci+.04)*(A/4);p=Math.max(p,this.world.groundAt(a+m*_,c+x*_))}const M=p+.07*(1-se((r-.82)/.18)),E=Math.max(h,r>.97?i.to.y:M);i.sy=E>i.sy?E:i.sy+(E-i.sy)*Math.min(1,t*30),r<.02&&(i.sy=Math.max(E,i.from.y)),i.ankle.set(a,i.sy+this.footH,c),i.yaw=i.fromYaw+yn(i.toYaw-i.fromYaw)*o,this.kneeClear(i,t);const v=Math.sin(i.yaw),S=Math.cos(i.yaw),b=i.ankle.y;for(let A=0;A<8;A++){const _=i.ankle.y-this.footH*.5,y=this.kneeAt(i,this.t2),C=y.x+v*.07,L=y.z+S*.07,D=(this.world.solidAt(y.x,y.y,y.z)||this.world.solidAt(C,y.y-.07,L))&&this.world.groundAt(C,L)<y.y+.4;if(!this.world.solidAt(i.ankle.x,_,i.ankle.z)&&!this.world.solidAt(i.ankle.x+v*sn,_,i.ankle.z+S*sn)&&!D||i.ankle.y-b>.45)break;i.ankle.y+=.06}i.toe=zt(i.pitch<0?i.pitch:0,.28*Math.sin(Math.PI*r),se(r/.35))}else if(i.mode==="ground"){this.plantedAnkle(i,i.ankle),this.kneeClear(i,t);for(let r=0;r<2;r++){const o=this.kneeAt(i,this.t3),a=(o.x-i.ankle.x)*Math.sin(i.yaw)+(o.z-i.ankle.z)*Math.cos(i.yaw),c=Math.atan2(a,o.y-i.ankle.y),l=td-.05-c;if(i.pitch<=l)break;i.pitch=l,this.plantedAnkle(i,i.ankle)}i.toe=i.pitch<0?i.pitch:0}else if(i.mode==="body"){const r=i.side*(this.hipX+i.rel.x),o=i.rel.z;i.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+i.rel.y,this.pos.z-n*r+e*o),i.ankle.y=Math.max(i.ankle.y,this.world.groundAt(i.ankle.x,i.ankle.z)+this.footH+.01),i.yaw=this.yaw,i.toe=.2;const a=Math.sin(this.yaw),c=Math.cos(this.yaw),l=Math.cos(i.pitch),h=Math.sin(i.pitch);for(let f=0;f<8;f++){const d=i.ankle.x+a*l*sn,u=i.ankle.y-this.footH+h*sn,m=i.ankle.z+c*l*sn;if(!this.world.solidAt(d,u,m)&&!this.world.solidAt(i.ankle.x,i.ankle.y-this.footH,i.ankle.z))break;i.ankle.x-=a*.05,i.ankle.z-=c*.05}}if(i.mode!=="free"){i.q.setFromEuler(this.e1.set(-i.pitch,i.yaw,0,"YXZ"));const r=i.pitch,o=Math.cos(r),a=Math.sin(r),c=Math.sin(i.yaw),l=Math.cos(i.yaw),h=i.ankle.x+c*o*cn,f=i.ankle.z+l*o*cn,d=i.ankle.y-this.footH*o+cn*a,u=(this.world.groundAt(h+c*(sn-cn),f+l*(sn-cn))+.005-d)/(sn-cn);u>-1&&(i.toe=Math.min(i.toe,r-Math.asin(Ce(u,-1,1))))}}}}const Za=5,Dy=4935768,Ou=.3,Uy=14;function Ny(){const s=new Fn(.11,cn-ci-.01).rotateX(-Math.PI/2).translate(0,0,(cn+ci)/2-.005),t=new Fn(.11,sn-cn-.02).rotateX(-Math.PI/2).translate(0,0,(sn+cn)/2+.01),e=Cy([s,t]);return s.dispose(),t.dispose(),e}const ku=72,Fy=2.6;let rr=null;function zy(){if(rr)return rr;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),rr=new Lr(s),rr.colorSpace=Ue,rr}class Oy{constructor(){I(this,"group",new De);I(this,"puffs",[]);I(this,"dust");I(this,"zeds",[]);I(this,"prints",[]);I(this,"printGeo",Ny());I(this,"own",[]);I(this,"m",new Kt);I(this,"q",new ge);I(this,"s",new U);const t=new Tn(1,1,1),e=new Oo({color:15987958});this.dust=new Eo(t,e,ku),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new Kn({color:Dy,transparent:!0,opacity:Ou,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),i=new we(this.printGeo,n);if(i.position.set(t.x,t.y+.004,t.z),i.rotation.y=e,i.renderOrder=1,this.group.add(i),this.prints.push({m:i,mat:n,age:0}),this.prints.length>Za+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=ku&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new Rn(Math.random(),Math.random(),Math.random())})}z(t){const e=new df({map:zy(),transparent:!0,depthWrite:!1,opacity:0}),n=new Up(e);this.group.add(n),this.zeds.push({s:n,age:0,life:Fy,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(i=>(i.age+=t)<i.life);for(const i of this.puffs){i.v.multiplyScalar(Math.exp(-3.2*t)),i.v.y-=.6*t,i.p.addScaledVector(i.v,t);const r=i.age/i.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,i.size*Math.pow(o,.8))),i.spin.x+=t*1.5,this.q.setFromEuler(i.spin),this.m.compose(i.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((i,r)=>{i.age+=t;const o=n-1-r,a=o<Za?1:Math.max(0,1-(o-Za+1)/3),c=1-Math.min(1,Math.max(0,(i.age-Uy)/3)),l=Ou*a*c;return i.mat.opacity+=(l-i.mat.opacity)*Math.min(1,t*5),l<=0&&i.mat.opacity<.005?(i.m.removeFromParent(),i.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(i=>{i.age+=t;const r=i.age/i.life;return r>=1?(i.s.removeFromParent(),i.s.material.dispose(),!1):(i.s.position.set(i.x0+i.drift*(.25*r+.06*Math.sin(r*7)),i.y0+.75*r,i.z0),i.s.scale.setScalar(.14+.2*r),i.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const Ci=.12,or={thick:.07,long:.15,wide:.135},Bu=2.6,ky=2.9,ar=2.5,vo={back:-.55,fwd:2.1,inward:-.22,out:1},ws={up:-td,down:.95,side:.3,twist:.35},Ja={flex:1.55,side:.45,turn:1.6},Ae=(s,t,e)=>s<t?t:s>e?e:s,Qa=(s,t,e)=>s+(t-s)*e;function _o(s,t,e,n){const i=new Tn(Ci,s-t,Ci).translate(0,(s+t)/2,0);return n.push(i),new we(i,e)}function ja(s,t,e){return e.push(s),new we(s,t)}const gn=new U,ln=new U,qn=new U,Ko=new Kt;function Zo(s,t,e){return ln.copy(s).negate().normalize(),qn.copy(t).addScaledVector(ln,-t.dot(ln)),qn.lengthSq()<1e-8&&qn.set(1,0,0).cross(ln),qn.normalize(),gn.crossVectors(ln,qn),Ko.makeBasis(gn,ln,qn),e.setFromRotationMatrix(Ko)}const Cs=new U,Hn=new U,Pi=new U,Ro=new U,Jl=new U,Hu=new ge;function ki(s,t,e,n,i,r,o,a=Math.PI){Cs.subVectors(t,s);const c=Cs.length(),l=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=Ae(c,Math.max(Math.abs(e-n)+.001,l),e+n-1e-4);c<1e-6?Hn.set(0,-1,0):Hn.copy(Cs).divideScalar(c);const f=Ae((e*e+h*h-n*n)/(2*e*h),-1,1),d=Math.sqrt(1-f*f);Pi.copy(i).addScaledVector(Hn,-i.dot(Hn)),Pi.lengthSq()<1e-8&&Pi.set(0,0,1).addScaledVector(Hn,-Hn.z),Pi.normalize(),Ro.copy(s).addScaledVector(Hn,e*f).addScaledVector(Pi,e*d),Jl.copy(s).addScaledVector(Hn,h),Zo(Cs.subVectors(Ro,s),i,r),Zo(Jl.sub(Ro),i,Hu),o.copy(r).invert().multiply(Hu)}const Ai=new Rn,By=new U;function Gu(s,t,e,n,i="XYZ"){Ai.setFromQuaternion(s,i);const r=Ae(Ai.x,t[0],t[1]),o=Ae(Ai.y,e[0],e[1]),a=Ae(Ai.z,n[0],n[1]);(r!==Ai.x||o!==Ai.y||a!==Ai.z)&&s.setFromEuler(Ai.set(r,o,a,i))}class Hy{constructor(t,e,n){I(this,"root",new De);I(this,"fx",new Oy);I(this,"motion");I(this,"placed",!1);I(this,"face");I(this,"world");I(this,"pelvis",new De);I(this,"turn",new De);I(this,"squash",new De);I(this,"legs",[]);I(this,"arms",[]);I(this,"solid",[]);I(this,"own",[]);I(this,"look",null);I(this,"targets",[null,null]);I(this,"talkCh",null);I(this,"clock",0);I(this,"lastBreath",0);I(this,"showing",null);I(this,"yawLook",0);I(this,"pitchLook",0);I(this,"a2");I(this,"v1",new U);I(this,"v2",new U);I(this,"v3",new U);I(this,"v4",new U);I(this,"v5",new U);I(this,"qa",new ge);I(this,"qb",new ge);I(this,"qc",new ge);I(this,"qd",new ge);I(this,"qm",new Kt);I(this,"headCap",0);I(this,"scratchSeen",null);I(this,"sc1",new U);I(this,"sc2",new U);I(this,"sc3",new U);I(this,"qf",new ge);I(this,"pts",[0,1,2,3,4].map(()=>new U));I(this,"kg",[0,1,2,3,4,5].map(()=>new U));this.world=n,this.motion=new Iy(e,n),this.motion.onPuff=(c,l,h)=>this.fx.puff(c,l,h),this.motion.onPrint=(c,l)=>this.fx.print(c,l),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new Ry(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[i,r,o]=Cc(t),a=new Bt().setRGB(i/255,r/255,o/255,Ue);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new Oo({color:t});this.own.push(n);const i=Ci/2;if(!e.legless)for(const o of[-1,1]){const a=new De,c=new De,l=new De,h=new De;a.position.set(o*e.hipX,0,0);const f=_o(0,-e.thigh,n,this.own);a.add(f),c.position.y=-e.thigh;const d=_o(i,-e.shin-i,n,this.own);c.add(d),l.position.y=-e.shin;const u=ja(new Tn(Ci,e.footH,cn-ci).translate(0,-e.footH/2,(cn+ci)/2),n,this.own);h.position.set(0,-e.footH,cn);const m=ja(new Tn(Ci,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(m),l.add(u,h),c.add(l),a.add(c),this.pelvis.add(a),this.legs.push({hip:a,knee:c,ankle:l,toes:h,side:o}),this.solid.push(f,d,u,m)}const r=this.a2;for(const o of[-1,1]){const a=new De,c=new De,l=new De,h=_o(i,-r,n,this.own);a.add(h),c.position.y=-r;const f=_o(i,-r-i,n,this.own);c.add(f),l.position.y=-r;const d=ja(new Tn(or.thick,or.long,or.wide).translate(0,-.15/2-.02,0),n,this.own);l.add(d),c.add(l),a.add(c),this.turn.add(a);const u=()=>new ge;this.arms.push({shoulder:a,elbow:c,wrist:l,side:o,aimW:0,fk:[u(),u()],ik:[u(),u()],push:0,pushTo:new U,pushE:0,pushETo:new U,pushN:new U,flatW:0,palm:new U,palmDir:new U(0,0,1)}),this.solid.push(h,f,d)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new U){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new U){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n,i="stroll"){this.motion.travel(t,e,n,i)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new U).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,e.twist,e.roll+e.swayRoll);for(const u of this.legs)u.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let i=null;this.look?(i=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(Ae(Math.atan2(i.x,i.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(Ae(-Math.atan2(i.y,Math.hypot(i.x,i.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,i?i.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(u=>u.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=Qa(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=Qa(this.face.roll,Ae(this.face.roll,-.03,.03),this.headCap),a=1-Ae(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const c=1+e.squash,l=1+e.stretch,h=c/Math.sqrt(l),f=l/Math.sqrt(c),d=1/(Math.sqrt(c)*Math.sqrt(l));this.squash.scale.set(d,h,f);for(const u of this.arms)u.shoulder.position.set(u.side*(.5*d+Ci/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const i=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(i.x)<.5+e&&i.y>.02-r&&i.y<1+e-r&&Math.abs(i.z)<.5+e}outOfBody(t,e,n,i){const r=t.parent,o=i?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let c=-1,l=0;const h=e(),f=this.v3;for(let x=0;x<h.length;x++){const g=this.squash.worldToLocal(this.v4.copy(h[x]));if(!(Math.abs(g.x)<.5+n&&g.y>.02-o&&g.y<1+n-o&&Math.abs(g.z)<.5+n))continue;const p=[[.5+n-g.x,1,0,0],[g.x+.5+n,-1,0,0],[.5+n-g.z,0,0,1],[g.z+.5+n,0,0,-1],[1+n-o-g.y,0,1,0]];i&&p.push([g.y+o,0,-1,0]);let M=null;for(const E of p)!i&&this.v2.set(E[1],E[2],E[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!M||E[0]<M[0])&&(M=E);M&&M[0]>l&&(l=M[0],c=x,f.set(M[1],M[2],M[3]))}if(c<0)return;f.transformDirection(this.squash.matrixWorld);const d=r.worldToLocal(this.v1.copy(h[c])),u=this.v2.copy(f).transformDirection(this.qm.copy(r.matrixWorld).invert()),m=Pi.subVectors(d,t.position).cross(u);if(m.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(m.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((i,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),c=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),l=Math.atan2(c.x,c.z),h=i.side>0?Ae(l,-.2,.7):Ae(l,-.7,.2);if(h!==l){const b=Math.hypot(c.x,c.z);c.x=Math.sin(h)*b,c.z=Math.cos(h)*b}let f=o.q;if(o.mode!=="free"&&Math.abs(l-h)>ws.twist*.85){const b=l-h-Math.sign(l-h)*ws.twist*.85;f=this.qf.setFromAxisAngle(qn.set(0,1,0),-b).multiply(o.q)}const d=o.kneeOut,u=this.v2.copy(c).multiplyScalar(1-d*1.3).add(gn.set(i.side*(.12+1.2*d),ed(-a.y,t.L),0)),m=By.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const b=Ae(Math.abs(t.roll)/(Math.PI/2),0,1);u.set(0,0,Qa(.6,1,b)).addScaledVector(m,1-.85*b);const A=Ae(-a.z/.25,0,1);u.z+=1.6*A,u.addScaledVector(m,-.9*A)}const x=o.mode==="free"?ky:Bu;ki(i.hip.position,a,t.thigh,t.shin,u,i.hip.quaternion,i.knee.quaternion,x),o.mode!=="free"?this.kneeBelowHip(i,a,i.hip.position.y-.1,m.set(i.side,0,0)):this.kneeBelowHip(i,a,i.hip.position.y+.02,m.add(gn.set(i.side*.3,0,0)),x);const g=this.v3.set(0,-1,0).applyQuaternion(i.hip.quaternion),p=Math.atan2(g.z,-g.y),M=Math.asin(Ae(g.x*i.side,-1,1)),E=Ae(p,vo.back,vo.fwd),v=Ae(M,o.mode==="free"?-.45:vo.inward,vo.out);if(E!==p||v!==M){const b=ln.set(i.side*Math.sin(v),-Math.cos(v)*Math.cos(E),Math.cos(v)*Math.sin(E));i.hip.quaternion.premultiply(this.qb.setFromUnitVectors(g,b))}o.mode==="free"&&this.kneeOverGround(i,a,x),this.outOfBody(i.hip,()=>this.legPoints(i,this.pts),.075,!0);const S=this.qb.copy(e).multiply(i.hip.quaternion).multiply(i.knee.quaternion);i.ankle.quaternion.copy(S.invert()).multiply(f),Gu(i.ankle.quaternion,[ws.up,ws.down],[-.35,ws.twist],[-.3,ws.side]),i.toes.rotation.set(Ae(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,i,r=Bu){const o=this.motion,a=t.hip.position,c=this.v5.copy(e),l=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(l.y<=n)return;const h=this.v3.subVectors(c,a),f=h.length();if(f<1e-4)return;h.divideScalar(f);const d=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(l,a))),u=this.v1.subVectors(l,d),m=u.length();if(m<1e-4)return;u.divideScalar(m);const x=this.v4.crossVectors(h,u).normalize();x.dot(i)<0&&x.negate();let g=Math.PI/2;for(let M=1;M<=18;M++){const E=M/18*(Math.PI/2);if(d.y+m*(Math.cos(E)*u.y+Math.sin(E)*x.y)<=n){g=E;break}}const p=u.multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g));ki(a,c,o.thigh,o.shin,p,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const i=this.motion,[r,o,a,c,l,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+Ci/2)return;const f=t.hip.position,d=h.set(0,-i.thigh,0).applyQuaternion(t.hip.quaternion).add(f);l.subVectors(e,f);const u=l.length();if(u<1e-4)return;l.divideScalar(u),o.copy(f).addScaledVector(l,l.dot(a.subVectors(d,f))),a.subVectors(d,o);const m=a.length();if(m<1e-4)return;a.divideScalar(m),c.crossVectors(l,a).normalize(),c.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&c.negate();let x=-1;for(let p=1;p<=24&&x<0;p++){const M=p/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,m*Math.cos(M)).addScaledVector(c,m*Math.sin(M))),h.y>=this.world.groundAt(h.x,h.z)+Ci/2&&(x=M)}if(x<0)return;const g=h.copy(a).multiplyScalar(Math.cos(x)).addScaledVector(c,Math.sin(x));ki(f,e,i.thigh,i.shin,g,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,i=this.a2,r=n+i,o=u=>this.turn.worldToLocal(this.v1.copy(u)).x<0?0:1,a=[null,null],[c,l]=this.targets;if(c&&(a[o(c)]=c),l){const u=o(l);a[u]?Math.abs(this.turn.worldToLocal(this.v1.copy(l)).x)<.8?a[1-u]=l:Math.floor(this.clock/2.6)%2===1&&(a[u]=l):a[u]=l}this.showing=c&&a.includes(c)?a.includes(l)&&Math.floor(this.clock/2.6)%2===1?l:c:l;const h=e.idle,d=e.feet.some(u=>u.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((u,m)=>{const x=e.arms[m],g=this.v2.set(u.side*.5,-.35,-1);if(d){g.set(0,1,0).applyQuaternion(d);const y=this.v3.set(0,.5,0).sub(u.shoulder.position).normalize();g.dot(y)>.3&&g.set(0,1,0),g.multiplyScalar(.45).add(ln.set(0,0,-1))}u.fk[0].setFromEuler(new Rn(x.pitch,0,u.side*Math.max(.04,x.out))),u.fk[1].setFromAxisAngle(gn.set(1,0,0),-Ae(x.elbow,0,ar));let p=0,M=!1;const E=x.reach??(h?a[m]:null);if(E){const y=u.shoulder.position;if(x.reach&&x.flat){M=!0;const C=u.shoulder.getWorldPosition(this.v3),L=u.elbow.getWorldPosition(Ro);u.palm.copy(E);const D=Cs.set(E.x-C.x,0,E.z-C.z);D.lengthSq()>1e-6&&D.normalize();const z=Hn.set(E.x-L.x,0,E.z-L.z).addScaledVector(D,.25);z.lengthSq()<1e-4&&z.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),z.normalize(),u.palmDir.lerp(z,u.flatW<.05?1:Math.min(1,t*10)).normalize();const G=this.v1.copy(E).add(ln.set(0,or.thick/2+.01,0)).addScaledVector(u.palmDir,-.095),F=this.turn.worldToLocal(G);ki(y,F,n,i,g,u.ik[0],u.ik[1],ar)}else{const C=this.turn.worldToLocal(this.v1.copy(E));if(x.reach||E===l){if(E===l){const L=u.shoulder.getWorldPosition(Jl),D=Cs.set(Ae(L.x,l.x-.5,l.x+.5),Ae(L.y,l.y-.5,l.y+.5),Ae(L.z,l.z-.5,l.z+.5));D.addScaledVector(Hn.subVectors(L,D).normalize(),.06),this.turn.worldToLocal(C.copy(D))}C.distanceTo(y)<=r*.98||x.reach?ki(y,C,n,i,g,u.ik[0],u.ik[1],ar):this.pointAlong(u,C)}else this.pointAlong(u,C)}p=x.reach?x.reachW:1}const v=e.scratch;if(v&&v.side===m&&v.w>0&&x.reach){const y=u.shoulder.position,C=e.headDrop,L=this.turn.worldToLocal(this.sc1.copy(x.reach).add(ln.set(0,or.thick/2+.01,0)).addScaledVector(u.palmDir,-.095)),D=v.kind==="chin"?this.sc2.set(u.side*(.14+.03*v.wiggle),-C-.15,.62):this.sc2.set(u.side*.4,1.14-C,-.04+.05*v.wiggle);let z=L;if(v.kind==="chin")z=L.lerp(D,v.w);else{const G=this.sc3.set(u.side*.9,1.25-C,.1),F=v.w,Q=1-F;z=L.multiplyScalar(Q*Q).addScaledVector(G,2*F*Q).addScaledVector(D,F*F)}g.lerp(v.kind==="chin"?gn.set(u.side,-.3,.1):gn.set(u.side,.35,-.15),v.w),ki(y,z,n,i,g,u.ik[0],u.ik[1],ar),M=v.w<.05,p=1}u.aimW+=((E?p:0)-u.aimW)*Math.min(1,t*(x.reach?30:7)),u.flatW+=((M?1:0)-u.flatW)*Math.min(1,t*12),u.shoulder.quaternion.slerpQuaternions(u.fk[0],u.ik[0],u.aimW),u.elbow.quaternion.slerpQuaternions(u.fk[1],u.ik[1],u.aimW),u.shoulder.updateMatrixWorld(!0);const S=this.pushOut(u.elbow.getWorldPosition(this.v1),.09,u.shoulder.getWorldPosition(this.v3));if(u.pushE=S?1:0,S&&u.pushETo.copy(S),u.pushE>0){const y=this.turn.worldToLocal(this.v1.copy(u.pushETo)).sub(u.shoulder.position);Zo(y,g,this.qa),u.shoulder.quaternion.slerp(this.qa,u.pushE)}u.shoulder.updateMatrixWorld(!0);const b=u.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),A=M?null:this.pushOut(b,.13,u.shoulder.getWorldPosition(this.v3));if(A?(u.pushTo.copy(A),u.pushN.subVectors(A,b).normalize(),u.push=1):u.push=0,u.push>0){const y=this.turn.worldToLocal(this.v3.copy(u.pushTo).add(u.pushN)).sub(this.turn.worldToLocal(this.v1.copy(u.pushTo)));y.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const C=this.turn.worldToLocal(this.v1.copy(u.pushTo));ki(u.shoulder.position,C,n,i,y,this.qa,this.qb,ar),u.shoulder.quaternion.slerp(this.qa,u.push),u.elbow.quaternion.slerp(this.qb,u.push)}u.aimW>.5&&this.elbowClear(u),this.outOfBody(u.shoulder,()=>this.armPoints(u,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(gn.set(1,0,0),Ae(-.1-.05*x.vp,-.35,.35));if(u.flatW>.01){u.elbow.updateMatrixWorld(!0);const y=u.elbow.getWorldQuaternion(this.qb);gn.set(0,this.v3.set(1,0,0).applyQuaternion(y).y<0?-1:1,0),ln.copy(u.palmDir).negate(),qn.crossVectors(gn,ln).normalize(),ln.crossVectors(qn,gn).normalize(),Ko.makeBasis(gn,ln,qn);const C=this.qc.setFromRotationMatrix(Ko),L=y.invert().multiply(C);Gu(L,[-.45,Ja.side],[-1.6,Ja.turn],[-1.55,Ja.flex],"YZX"),u.wrist.quaternion.slerpQuaternions(_,L,u.flatW)}else u.wrist.quaternion.copy(u.aimW>.5?u.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(c=>this.inHead(c,.01,!0));if(!e())return;const n=t.shoulder.position,i=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(i,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=Pi.crossVectors(r,o).x*t.side>=0?1:-1;for(let c=0;c<12;c++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const l=t.elbow.getWorldPosition(this.v3);if(l.y<this.world.groundAt(l.x,l.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=Pi.subVectors(e,t.shoulder.position);Zo(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(gn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const i=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,c=1/0;for(const[l,h,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(i+l,r+h,o+f))continue;const d=l?(i+l*.5-t.x)*l:h?r+.5-t.y:(o+f*.5-t.z)*f,u=n?l*(n.x-t.x)+h*(n.y-t.y)+f*(n.z-t.z):0,m=d-Math.max(0,u)*.8;m<c&&(c=m,a=new U(t.x+l*(d+e),t.y+h*(d+e),t.z+f*(d+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,c)=>a.ankle.getWorldPosition(new U).distanceTo(t.feet[c].ankle));let n=0,i=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new U);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),i+=o.filter(c=>this.inHead(c,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),i+=o.filter(c=>this.inHead(c,0)).length;return{footErr:e,inside:n,self:i,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const Gy="Welcome to Robyn Miller's Exhibit of Time Machines! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",Vy="Welcome to Robyn Miller's Exhibit of Time Machines! I'm your host. Getting around is easy—drag the floor to move, and drag the walls to look around.",Wy="Click anywhere to look around.",Xy="Click anywhere to carry on.",qy="That's it! In you go. I'll wait out here.",Yy=["Welcome back to the present!","You're back! What year was it in there?","Back already? Time flies. Especially in there.","Oh good, you're back. I kept the present warm for you."],$y="You are currently one of {x} people in the gallery.",Ky="Things are quiet. You are the only person in the gallery.",Zy=["You may think that I'm not an appropriate host for an art gallery? Hm. Well maybe you're not an appropriate guest for our gallery!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Take your time. The paintings aren't going anywhere. Neither am I.","Robyn painted every one of these. I just stand near them looking important.","Click on a painting to see it up close. I recommend it. I've seen them all up close. Very close.","Some people walk through a gallery in five minutes. Some take five hours. I've timed them.","Do you see the faces? I see faces everywhere. Even in the floor.","Between you and me, that one over there looked at me funny this morning.","Shh. The paintings are thinking.","I polished this floor myself. With my feet.","Every gallery needs a host. This one got me. Lucky gallery.","Art is long and I am short.","Stand back a little. Some paintings like their space.","I'm not allowed to touch the paintings. I'm barely allowed to touch the walls.","That one's my favourite. They're all my favourite.","Is it just me, or did that painting blink?","The lights in here are very flattering. To the paintings. And to me.","I've been told I have an excellent eye for art. I have two, actually.","Feel free to linger. Lingering is encouraged here.","If anyone asks, I'm security.","You can tell a lot from a face. Mine says 'party'.","There's no gift shop. I asked.","If you get lost, follow the walls. That's what I do.","Look closer. Then look from farther away. Then closer again. That's the trick.","Quiet in here, isn't it? I like it that way. Mostly.","Paintings get lonely if nobody looks at them. I made that up. But still.","Mind the doorways. They're bigger than they look. Or I'm smaller.","All the walls in here are white. I campaigned for polka dots. I lost.","Hm. You have good taste. I can tell by the way you stand.","This is the part where I say something profound. ... I'll get back to you.","I've counted the paintings twice. I got two different answers.","If you need me, I'll be right behind you. Always. Right behind you.","Sometimes I sit and stare at one for an hour. It doesn't mind.","Do you think they can see us? I think they can see us.","Not to brag, but I've been in every room of this gallery. Several times. Today.","Art is best enjoyed slowly. Like soup.","I'm told I add a certain something to the place. Nobody has said what.","Go ahead and stare. That's what they're for.","What do you think that one is about? I have a theory, but it's mostly about sandwiches.","I used to be just a block. Now I'm a block with legs. That's progress.","Every time someone visits, I feel taller. I'm not, though.","Close your eyes. Now open them. See? Still art.","Please don't lick the paintings. I'm not saying you would. I'm just saying.","I like this room. I like the other rooms too. I'm very agreeable.","That's a nice one. I'd hang it in my house, if I had a house. Or walls.","Some galleries have audio guides. You have me. You're welcome.","Ah, I was hoping you'd come this way.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","Do you paint? You have a painter's way of squinting.","If these walls could talk... well, they'd probably just say 'white'.","Look at that brushwork! I think. I'm not entirely sure what brushwork is.","Did you see the little card next to each one? I read them all. Twice.","No hurry. I'm on gallery time.","The floor reflects the paintings. So technically you're seeing everything twice. You're welcome again.","I can't decide if that one is smiling or frowning. Maybe both. Like me before breakfast.","If you like one, stand in front of it a little longer. It'll like you back.","Some visitors talk to the paintings. I don't judge. I talk to them too.","I'm a professional. I've hosted at least one visitor before. Possibly two.","The best spot in the house is wherever you happen to be standing.","Squint a little. Go on. See how the colours move? That's free. No extra charge.","I tried painting once. It painted me back.","Don't mind me. I'm just here for the ambience. I am the ambience.",'Did you know the word "gallery" means a long room? I looked it up. I had time.',"If you hear snoring later, that wasn't me.","I'd tell you which one is the most famous, but they'd all get jealous.","This one was hung at exactly the right height. I checked with my hat.","You walk very gracefully. For a visitor.","Every painting here is somebody. Even the ones that look like nobody.","I like to think the paintings look forward to visitors. I know I do."],Jy=["Yes? Can I help you?","Hey! The machines are inside, not out here.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a vacuum tube.","Me? I'm not part of the exhibition. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was thinking about 1906.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],Qy=["Hm? Oh! I wasn't asleep. I was resting my eyes.","I'm up! I'm up!","Was I snoring? I don't snore. That was the ventilation.","Huh? Who? Oh. You. Welcome back."],jy=["Lovely, isn't it?","Up close they get even stranger. In the best way.","Good choice.","That's one of my favourites. Don't tell the others.","I always see something new in that one."],t1=["Oh! Someone else just came in. There are {x} of you now.","Another visitor! That makes {x} of you."],e1=["Somebody just left. Now there are {x} of you."],n1=["Somebody just left. It's just you and me now."];function Bi(s,t){let e=s.filter(i=>!t.has(i));if(!e.length){for(const i of s)t.delete(i);e=s}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const me=.2,i1=Math.sqrt(9.81/(22*me)),s1={...xy,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},lr=(s,t,e,n=new U)=>n.set(s/me,t/me-.5,e/me),Vu=(s,t=new U)=>t.set(s.x*me,(s.y+.5)*me,s.z*me);class r1{constructor(t,e,n,i=!1){I(this,"scene",new fc);I(this,"cam",new rn);I(this,"mcam",new rn);I(this,"shadow");I(this,"rig");I(this,"count",null);I(this,"onEnter",()=>{});I(this,"onLeave",()=>{});I(this,"el");I(this,"textEl");I(this,"bubble",null);I(this,"onKey",()=>{});I(this,"hidden",!1);I(this,"wasLocked",!1);I(this,"queue",[]);I(this,"used",new Set);I(this,"grid",null);I(this,"stage","waiting");I(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});I(this,"inside",!1);I(this,"been",!1);I(this,"wasInside",!1);I(this,"wasOut",!0);I(this,"quiet",0);I(this,"resting","no");I(this,"soughtRest",!1);I(this,"idleIn",6);I(this,"remarkIn",45);I(this,"followIn",0);I(this,"glanceIn",2);I(this,"glanceAt",null);I(this,"dest",null);I(this,"last",{x:0,z:0,yaw:0,pitch:0});I(this,"countSaid",0);I(this,"lastCrowd",-999);I(this,"clock",0);I(this,"standH",0);I(this,"v1",new U);I(this,"v2",new U);I(this,"scaleM",new Kt().makeScale(me,me,me));this.gallery=t,this.player=e,this.main=n,this.touch=i;const r={groundAt:(d,u)=>this.wallAt(d*me,u*me)?this.gallery.arch.H/me:-.5,solidAt:(d,u,m)=>{const x=(u+.5)*me;return x<0?!0:x<this.gallery.arch.H&&this.wallAt(d*me,m*me)}};this.rig=new Hy(s1,3,r),this.scene.add(this.rig.root,this.rig.fx.group),this.scene.add(new Jp(16777215,13815492,1.9));const o=new tm(16777215,1.5);o.position.set(.4,1,.7),this.scene.add(o.target),this.scene.add(o);const a=document.createElement("canvas");a.width=a.height=64;const c=a.getContext("2d"),l=c.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(0,0,0,0.62)"),l.addColorStop(.55,"rgba(0,0,0,0.3)"),l.addColorStop(1,"rgba(0,0,0,0)"),c.fillStyle=l,c.fillRect(0,0,64,64);const h=new Lr(a);this.shadow=new we(new Fn(1.5,1.2),new Kn({map:h,transparent:!0,depthWrite:!1,toneMapped:!1,color:0})),this.shadow.rotation.x=-Math.PI/2,this.shadow.renderOrder=-1,this.shadow.layers.set(1),this.scene.add(this.shadow),this.cam.layers.enable(1),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble";const f=document.createElement("div");f.className="hb",this.textEl=document.createElement("span"),f.append(this.textEl),this.el.append(f),this.textEl.addEventListener("click",d=>{var m;const u=(m=d.target.closest(".hk"))==null?void 0:m.dataset.k;u&&(d.preventDefault(),d.stopPropagation(),this.onKey(u),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*me,z:this.rig.pos.z*me}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/me,t.z/me,0),this.dest=null}gridFor(){if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,i=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,c=e.z0,l=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),f=new Uint8Array(l*h);for(let d=0;d<h;d++)for(let u=0;u<l;u++){const m=a+(u+.5)*n,x=c+(d+.5)*n,g=m>e.x0+i&&m<e.x1-i&&x>e.z0+i&&x<e.z1-i,p=x>e.z1+r+i,M=m>t.entrance.a+i&&m<t.entrance.b-i&&x>e.z1-i-.01&&x<e.z1+r+i+.01;!g&&!p&&!M||t.solids.some(E=>m>E.x0-i&&m<E.x1+i&&x>E.z0-i&&x<E.z1+i)||(f[d*l+u]=1)}return this.grid={arch:t,x0:a,z0:c,nx:l,nz:h,c:n,free:f},this.grid}freeAt(t,e){const n=this.gridFor(),i=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return i>=0&&r>=0&&i<n.nx&&r<n.nz&&n.free[r*n.nx+i]===1}clear(t,e,n,i){const r=Math.hypot(n-t,i-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(i-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),i=this.at,r=(v,S)=>[Math.floor((v-n.x0)/n.c),Math.floor((S-n.z0)/n.c)];let[o,a]=r(i.x,i.z);const[c,l]=r(t,e),h=(v,S)=>v>=0&&S>=0&&v<n.nx&&S<n.nz&&n.free[S*n.nx+v]===1;if(!h(c,l))return null;if(!h(o,a)){let v=null,S=1/0;for(let b=-4;b<=4;b++)for(let A=-4;A<=4;A++)h(o+A,a+b)&&A*A+b*b<S&&(S=A*A+b*b,v=[o+A,a+b]);if(!v)return null;[o,a]=v}const f=n.nx*n.nz,d=new Float32Array(f).fill(1/0),u=new Int32Array(f).fill(-1),m=(v,S)=>{const b=Math.abs(v-c),A=Math.abs(S-l);return Math.max(b,A)+.414*Math.min(b,A)},x=[[m(o,a),a*n.nx+o]];d[a*n.nx+o]=0;const g=l*n.nx+c;for(;x.length;){let v=0;for(let _=1;_<x.length;_++)x[_][0]<x[v][0]&&(v=_);const[,S]=x.splice(v,1)[0];if(S===g)break;const b=S%n.nx,A=Math.floor(S/n.nx);for(const[_,y]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const C=b+_,L=A+y;if(!h(C,L)||_&&y&&(!h(b+_,A)||!h(b,A+y)))continue;const D=L*n.nx+C,z=d[S]+(_&&y?1.414:1);z<d[D]&&(d[D]=z,u[D]=S,x.push([z+m(C,L),D]))}}if(!isFinite(d[g]))return null;const p=[];for(let v=g;v!==-1;v=u[v])p.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});p[p.length-1]={x:t,z:e};const M=[i];let E=0;for(;E<p.length-1;){let v=p.length-1;const S=M[M.length-1];for(;v>E+1&&!this.clear(S.x,S.z,p[v].x,p[v].z);)v--;M.push(p[v]),E=v}return M}goTo(t,e,n){const i=this.route(t,e);if(!i||i.length<2)return!1;let r=0;for(let c=1;c<i.length;c++)r+=Math.hypot(i[c].x-i[c-1].x,i[c].z-i[c-1].z);if(r<.25)return!1;const o=r>3.2?"bound":r>1.6?"run":"walk",a=n??(Math.random()<.3?"strut":"stroll");return this.rig.travel(i.slice(1).map(c=>({x:c.x/me,z:c.z/me})),o,()=>{this.dest=null},a),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!qi(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,i=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(i,1e-6);return i>.75&&i<3.4&&a>-.2&&this.seen(t,e)}follow(){const t=this.player.pos,e=this.at;if(this.goodSpot(e.x,e.z)&&!this.dest)return;const n=-Math.sin(this.player.yaw),i=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),o=-Math.sin(this.player.yaw),a=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let c=null,l=1/0;if(a.forEach(([f,d],u)=>{const m=t.x+n*f+r*d,x=t.z+i*f+o*d;if(!this.freeAt(m,x)||!this.seen(m,x))return;const g=Math.hypot(m-e.x,x-e.z)+u*.15;g<l&&(l=g,c={x:m,z:x})}),!c)return;const h=c;this.dest&&Math.hypot(this.dest.x-h.x,this.dest.z-h.z)<.8||this.goTo(h.x,h.z)}say(t,e){this.inside||(this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e))}start(t,e){if(this.inside){this.queue=[];return}if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?Ky:$y),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),i=n.map(r=>tl(r)?"o":r).join("");this.bubble={text:i,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.grow(this.bubble,i.length),this.el.classList.remove("pop"),this.el.offsetWidth,this.el.classList.add("pop"),this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){if(this.bubble=null,this.el.classList.contains("on")&&!this.hidden&&!this.el.classList.contains("away")){const e=this.el.cloneNode(!0);e.className="host-bubble-ghost"+(this.el.classList.contains("free")?" free":""),e.style.visibility="",document.body.append(e),setTimeout(()=>e.remove(),1300)}this.el.classList.remove("on","pop");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const i of t.segs){const r=tl(i)?1:i.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(tl(i)){const c=document.createElement("button");c.className="hk",c.dataset.k=i,c.tabIndex=-1,c.title=a1[i],c.textContent=o1[i],this.textEl.append(c)}else{const c=i.slice(o-n,a-n),l=this.textEl.lastChild;l&&l.nodeType===Node.TEXT_NODE?l.appendData(c):this.textEl.append(c)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(Bi(Jy,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(Bi(jy,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(Bi(t1,this.used),"excited"):this.say(t<=1?n1[0]:Bi(e1,this.used),"curious"))}hit(t){const e=new gr(lr(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/me);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const i=Vu(this.rig.headCentre(this.v1),this.v2).project(this.main);return i.z<1&&Math.abs(i.x)<.95&&Math.abs(i.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(Bi(Qy,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){this.clock+=t;const e=this.player,n=this.rig,i=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=i.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.been=!0,this.queue=[],this.bubble&&this.endBubble());const a=e.pos.z>o.z1+.3;a&&!this.wasOut&&this.been&&(this.onLeave(),this.queue=[],this.wake(),this.say(Bi(Yy,this.used),"happy"),this.rig.perform("wave")),this.wasInside=this.inside,this.wasOut=a,!this.been&&!this.inside&&this.invite();const c=e.locked;this.wasLocked&&!c&&!this.hidden&&!this.bubble&&!this.inside&&this.say(Xy,"pleased"),this.wasLocked=c,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const l=this.bubble;l&&(l.shown=Math.min(l.text.length,l.shown+t*34),l.until===1/0&&(l.until=this.clock+Math.max(3,1.2+l.text.split(/\s+/).length/3.6)),this.clock>l.until&&this.endBubble());const h=!!l&&l.shown<l.text.length;n.talk(h?l.text[Math.max(0,Math.ceil(l.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const f=lr(this.main.position.x,this.main.position.y,this.main.position.z,new U);if(this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(Bi(Zy,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(f)),n.lookAt(this.resting==="asleep"?null:h?f:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(f.x-n.pos.x,f.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?f:null);else if(n.turnTo(Math.atan2(f.x-n.pos.x,f.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(f)),n.lookAt(h?f:this.glanceAt),this.stage==="company"||this.stage==="waiting"){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const d=Math.atan2(f.x-n.pos.x,f.z-n.pos.z),u=n.roomAt(n.pos.x,n.pos.z,d);if(!(u!=null&&u.lie)&&!this.soughtRest){this.soughtRest=!0;const m=this.restSpot(d);if(m&&this.goTo(m.x,m.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",d)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(this.touch?Vy:Gy,"happy")),!e.hello))return;const i=!this.bubble&&!this.queue.length;(this.touch?t.moved:n)&&!e.lockedAt&&(e.lockedAt=this.clock),this.touch&&!e.lockedAt&&(e.lookSaid=e.nudgedClick=!0),!n&&!e.lockedAt&&!e.lookSaid&&i&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(Wy,"pleased"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(qy,"excited"),this.rig.perform("wave");return}}after(t){this.rig.update(t*i1);const e=this.rig.pos,n=-.5,i=Math.max(0,e.y-this.standH);(!this.standH||!this.rig.busy()&&this.rig.resting==="stand")&&(this.standH=this.standH?this.standH+(e.y-this.standH)*.02:e.y),this.shadow.position.set(0,n-e.y+.03,0);const r=Math.max(.35,1-i/1.6);this.shadow.scale.set(r,r,1),this.shadow.material.opacity=.5*r*(this.rig.resting==="lie"?1.25:1),this.place()}restSpot(t){var n;const e=this.at;for(let i=.4;i<=2.4;i+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*i,c=e.z+Math.sin(o)*i;if(!(!this.freeAt(a,c)||!this.seen(a,c))&&(n=this.rig.roomAt(a/me,c/me,t))!=null&&n.lie)return{x:a,z:c}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let i=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,i=lr(o.centre[0],o.centre[1],o.centre[2]))}return i??t.clone()}place(){const t=this.main;if(lr(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/me)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/me,this.cam.far=t.far/me,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Vu(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,i=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*i;const a=e.z>1||!this.visible(30);r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(i-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("away",a)}}renderMirror(t,e){const n=this.mcam;lr(e.position.x,e.position.y,e.position.z,n.position),n.quaternion.copy(e.quaternion),n.updateMatrixWorld(),n.projectionMatrix.copy(e.projectionMatrix).multiply(this.scaleM),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),t.autoClear=!1,t.render(this.scene,n),t.autoClear=!0}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const tl=s=>s==="W"||s==="LEFT"||s==="RIGHT",o1={W:"W",LEFT:"←",RIGHT:"→"},a1={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right"};var Wu;class l1{constructor(t){I(this,"count",null);I(this,"onCount",()=>{});I(this,"id",(((Wu=crypto.randomUUID)==null?void 0:Wu.call(crypto))??String(Math.random()).slice(2)).slice(0,36));I(this,"inside",!1);I(this,"timer",0);I(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const c1=1e4;let nd=performance.now(),Lc=!0,Pc=window.top===window&&!document.hasFocus(),Co=[];function id(){if(nd=performance.now(),!Co.length)return;const s=Co;Co=[];for(const t of s)t()}const Ic=()=>{Pc=!1,id()},sd={capture:!0,passive:!0};addEventListener("pointermove",s=>{s.pointerType==="mouse"&&(Lc=!0),Ic()},sd);for(const s of["pointerdown","keydown","wheel","touchstart","focus","resize"])addEventListener(s,Ic,sd);addEventListener("message",id);document.addEventListener("mouseout",s=>{s.relatedTarget||(Lc=!1)});addEventListener("blur",()=>{if(Pc=!0,document.pointerLockElement)try{document.exitPointerLock()}catch{}});document.addEventListener("visibilitychange",()=>{document.hidden||Ic()});const h1=()=>(Pc||!Lc)&&performance.now()-nd>c1;function u1(s){return h1()?(Co.push(s),!0):!1}const ri=new URLSearchParams(location.search),f1=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Hi=(matchMedia("(hover: none) and (pointer: coarse)").matches||f1)&&!ri.has("desk")||ri.has("touch");d1().catch(s=>{console.error(s),document.getElementById("cover").classList.add("gone"),document.getElementById("mobile").classList.add("on"),fetch(`data/machines.json?${Date.now()}`).then(t=>t.json()).then(t=>{const e=document.getElementById("mobile-list");for(const n of t){if(n.off||n.outOfOrder)continue;const i=document.createElement("li"),r=document.createElement("a");r.href=n.url,r.target="_top",r.textContent=n.name.replace(/\s*[|\n]\s*/g," "),i.append(r),e.append(i)}}).catch(()=>{})});async function d1(){const s='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([l_(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"','40px "Caveat Brush"'].map(q=>document.fonts.load(q))),new Promise(q=>setTimeout(q,2500))])]),e=new t_({antialias:!0,powerPreference:"high-performance"});let i=Math.min(devicePixelRatio||1,Hi?1.5:2);e.setPixelRatio(i),e.setClearColor(16777215,1),e.setSize(innerWidth,innerHeight),e.toneMapping=tc,e.toneMappingExposure=1;const r=e.domElement;r.tabIndex=-1,r.style.outline="none";const o=ly();document.getElementById("stage").appendChild(r);const a=e.capabilities.getMaxAnisotropy(),c=new fc,l=new rn(62,innerWidth/innerHeight,.05,900);l.layers.enable(1),l.layers.enable(Kl);const h=new HM(1,1),f=()=>{e.setPixelRatio(i),e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.fov=l.aspect<1?Ge.radToDeg(2*Math.atan(Math.tan(Ge.degToRad(31))*Math.min(1.45,.82/l.aspect))):62,l.updateProjectionMatrix();const q=e.getDrawingBufferSize(new Nt);h.setSize(Math.round(q.x/2),Math.round(q.y/2))};f(),addEventListener("resize",f);const d=new Rs(t,c,e,h,s,a);await d.loadSmall();const u=new Q_(r),m=t.layout,x=m.entrance;u.pos.set(x.x+2.4,Gn,m.outline.z1+m.outline.t+9.8),u.yaw=Math.atan2(2.4,9.8),u.pitch=.05;const g=ri.get("at");if(g&&!g.startsWith("machine:")){const[q,at,B,ct]=g.split(",").map(Number);u.pos.set(q,Gn,at),u.yaw=Ge.degToRad(B||0),u.pitch=Ge.degToRad(ct||0)}ri.get("hud");const p=document.getElementById("dot");p.style.display="none";const M=new qM(!1),E=new gr;E.far=14,E.layers.enableAll();let v=[];const S=()=>{v=[],d.interior.group.traverse(q=>{q.isMesh&&!q.isInstancedMesh&&v.push(q)}),d.outside.group.traverse(q=>{q.isMesh&&q.userData.outside&&v.push(q)})},b=()=>{E.setFromCamera(new Nt(0,0),l);const q=E.intersectObjects(v,!1)[0];if(!q)return{kind:"none"};const at=q.object.userData;return at.machine?{kind:"machine",machine:at.machine,point:q.point,dist:q.distance}:at.label?{kind:"label",work:at.work,point:q.point,dist:q.distance}:at.work?{kind:"work",work:at.work,point:q.point,dist:q.distance}:at.face?{kind:"face",face:at.face,point:q.point,dist:q.distance}:{kind:"none",point:q.point,dist:q.distance}},A=new Gl,_=new Set;let y=1;const C=q=>{let at=99;for(const B of d.interior.pictures)B.work.id===q&&(at=Math.min(at,Math.hypot(B.mesh.position.x-u.pos.x,B.mesh.position.z-u.pos.z)));return at};function L(){y=0;for(const[q,at]of d.sharp)if(!(C(q)<=14)){d.sharp.delete(q);for(const B of d.interior.pictures)B.work.id===q&&(B.mat.uniforms.uMap.value=d.texture(q));at.dispose()}for(const q of d.interior.pictures){const at=q.work.id;d.sharp.has(at)||C(at)>7.5||(y++,!(_.has(at)||_.size>=4)&&(_.add(at),A.loadAsync(Rs.url(at,"m")).then(B=>{_.delete(at),d.sharp.set(at,d.prepTex(B));for(const ct of d.interior.pictures)ct.work.id===at&&(ct.mat.uniforms.uMap.value=B)}).catch(()=>_.delete(at))))}}const D=new GM;let z=!0;const G=q=>{const at=d.cat.get(q);at&&(z=u.locked,u.frozen=!0,D.show(at,t.images[q],Rs.url(q,d.sharp.has(q)?"m":"s"),Rs.url(q,"l")),M.opened())};D.onClose=()=>{u.frozen=!1,N.looked()};const F=new jM;addEventListener("resize",()=>F.resize());const Q=()=>{if(!(Hi||document.body.classList.contains("ed-page"))){try{r.focus({preventScroll:!0})}catch{}try{window.focus()}catch{}u.freeLook=!0,r.style.cursor="none",r.requestPointerLock()}};F.onBack=()=>Q(),addEventListener("keydown",q=>{q.code==="Escape"&&(u.freeLook=!1)});const Y=q=>{const at=q.front,B=.82;return{x:q.spot.x+at[0]*B,z:q.spot.z+at[2]*B,yaw:Math.atan2(at[0],at[2]),pitch:Math.atan2(q.screen.c.y-Gn,B-.04)}},tt=q=>{const at=d.machines.find(ct=>ct.machine.id===q);if(!at)return;const B=Y(at);u.pos.set(B.x,Gn,B.z),u.yaw=B.yaw,u.pitch=B.pitch,u.collide()};let V=[];const Z=q=>G(q.id);let ot=0;const pt={gallery:d,player:u,camera:l,renderer:e,canvas:r,viewer:D,scene:c,monitor:F,aim:b,openWork:G,dot:p};d.onRebuilt=()=>{u.solids=d.arch.solids;const q=t.layout.outline;u.world={x0:q.x0-30,x1:q.x1+30,z0:q.z0-30,z1:q.z1+30},u.collide(),S(),V=d.interior.pictures.map(VM),ot=0},d.rebuild();const N=new r1(d,u,l,Hi),X=new l1((ri.get("count"),void 0));X.onCount=q=>N.setCount(q),ri.get("count")&&(N.count=+ri.get("count"));const k=(()=>{const q=document.createElement("div");q.id="leaving",document.body.append(q);let at=0;const B=()=>{if(Au({rmiLeave:!0}))return;const ct=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(ct)?(history.back(),setTimeout(()=>{location.href=ct},1500)):q.classList.remove("on")};return{start(){clearTimeout(at),q.classList.remove("fast"),q.classList.add("on"),at=window.setTimeout(B,1900)},cancel(){clearTimeout(at),q.classList.remove("on","fast")},woosh(ct){clearTimeout(at),q.classList.add("fast"),at=window.setTimeout(()=>{q.classList.add("on"),at=window.setTimeout(B,ct*500+250)},ct*500)},now(){clearTimeout(at),q.classList.add("on"),at=window.setTimeout(()=>{if(Au({rmiLeave:!0}))return;const ct=document.referrer;/^https:\/\/(www\.)?robynmiller\.net\//.test(ct)?(history.back(),setTimeout(()=>{location.href=ct},1500)):(window.top??window).location.href="https://www.robynmiller.net/"},700)}}})();let H=!1;const R=()=>{if(H)return;H=!0;const q=document.createElement("div");q.id="mobile-note",q.setAttribute("role","dialog"),q.innerHTML='<div class="mn-card"><p>Time Machines have not been tuned for Mobile Interface.</p><div class="mn-buttons"><button class="mn-go">Continue</button><button class="mn-back">Return to Website</button></div></div>',document.body.append(q),u.frozen=!0,u.glide.set(0,0),u.spin=0,u.goal=null,requestAnimationFrame(()=>q.classList.add("on"));const at=()=>{q.classList.remove("on"),u.frozen=!1,setTimeout(()=>q.remove(),300)};q.querySelector(".mn-go").addEventListener("click",at),q.querySelector(".mn-back").addEventListener("click",()=>{at(),u.frozen=!0,k.now()})};N.onEnter=()=>{X.enter(),k.cancel(),Hi&&R()},N.onKey=q=>{u.tap(q==="W"?"KeyW":q==="LEFT"?"ArrowLeft":"ArrowRight",q==="W"?.3:.4),u.locked||r.requestPointerLock()},N.onLeave=()=>{he.on||(X.exit(),k.start())};const P=(q,at)=>{const B=r.getBoundingClientRect();return new Nt((q-B.left)/B.width*2-1,-((at-B.top)/B.height)*2+1)},W=new gr;W.layers.enableAll();const j=new Wn,it=new U,mt=new U,_t=new U(0,0,1),bt=new U,Ht=Ge.degToRad(30),Gt=.07,Xt=()=>{const q=t.layout,at=q.outline,B=q.entrance,ct=u.pos;if(!(ct.x>at.x0&&ct.x<at.x1&&ct.z>at.z0&&ct.z<at.z1))return!1;const rt=at.z1-ct.z;if(rt<.3)return!1;const gt=Math.max(0,Math.abs(ct.x-B.x)-B.w/2);return Math.atan2(Math.abs(ct.x-B.x),rt)<=Ht||gt*at.t/rt<=Gt*B.w},ae=q=>{const at=t.layout,B=at.outline,ct=at.entrance;u.apply(l),l.updateMatrixWorld(),W.setFromCamera(q,l),W.far=1/0;const rt=W.ray;if(!rt.intersectPlane(j.set(_t,-B.z1),it)||!rt.intersectPlane(j.set(_t,-(B.z1+B.t)),mt)||rt.origin.distanceTo(it)>=rt.origin.distanceTo(mt))return!1;const gt=ft=>ft.x>ct.x-ct.w/2&&ft.x<ct.x+ct.w/2&&ft.y>0&&ft.y<at.doorHeight;if(!gt(it)||!gt(mt))return!1;W.far=rt.origin.distanceTo(mt);const xt=W.intersectObjects(v,!1)[0];return!xt||xt.distance>W.far-.02},Me=q=>Xt()&&ae(q),Le=q=>q<.5?4*q*q*q:1-Math.pow(-2*q+2,3)/2,ye=q=>1-Math.pow(1-q,2.6),he=(()=>{let q=-1,at=1,B=62,ct=0,rt=0,gt=[1,1];const xt=[new U,new U,new U];return{get on(){return q>=0},start(ft){if(q>=0)return;const Pt=t.layout,Tt=Pt.entrance,te=Pt.outline,Qt=Math.max(Tt.x-Tt.w/2+.45,Math.min(Tt.x+Tt.w/2-.45,ft));xt[0].set(u.pos.x,Gn,u.pos.z),xt[1].set(Qt,Gn,te.z1-.7),xt[2].set(Tt.x,Gn,te.z1+te.t+2.4),gt=[xt[0].distanceTo(xt[1]),xt[1].distanceTo(xt[2])],at=Math.max(.75,Math.min(1.3,.6+.032*(gt[0]+gt[1]))),q=0,B=l.fov,ct=u.yaw,rt=u.pitch,u.frozen=!0,u.vel.set(0,0,0),u.glide.set(0,0),u.spin=0,u.goal=null,u.keys.clear(),X.exit(),k.woosh(at)},update(ft){if(q<0)return;q=Math.min(at,q+ft);const Pt=ye(q/at),Tt=Pt*(gt[0]+gt[1]);Tt<gt[0]?u.pos.lerpVectors(xt[0],xt[1],Tt/Math.max(gt[0],1e-6)):u.pos.lerpVectors(xt[1],xt[2],(Tt-gt[0])/Math.max(gt[1],1e-6));const te=Math.atan2(-(xt[2].x-u.pos.x),-(xt[2].z-u.pos.z)),Qt=Le(Math.min(1,q/(at*.45)));u.yaw=ct+Math.atan2(Math.sin(te-ct),Math.cos(te-ct))*Qt,u.pitch=rt*(1-Qt),l.fov=B*(1+.14*Math.sin(Math.PI*Math.pow(q/at,.6))),l.updateProjectionMatrix(),q>=at&&(q=-1,l.fov=B,l.updateProjectionMatrix(),window.setTimeout(()=>{u.frozen=D.open},700))}}})(),K=q=>he.on||!Me(q)?!1:(he.start(it.x),!0),be=document.createElement("div");be.id="exit-label",be.innerHTML="<span>EXIT</span>",document.body.append(be);const re={x:-1,y:-1};addEventListener("mousemove",q=>{!u.locked&&!u.freeLook&&(re.x=q.clientX,re.y=q.clientY)});let O=0;const w=(q,at)=>{if((O-=q)>0)return;O=.08;let B=!1,ct=F.ready&&u.locked?ke.x:innerWidth/2,rt=F.ready&&u.locked?ke.y:innerHeight/2;if(!Hi&&!at&&!D.open&&!he.on&&!F.travelling){if(u.locked||u.freeLook)B=Me(F.ready&&u.locked?P(ke.x,ke.y):new Nt(0,0));else if(re.x>=0){const vn=r.getBoundingClientRect();ct=re.x,rt=re.y,B=Me(new Nt((ct-vn.left)/vn.width*2-1,-((rt-vn.top)/vn.height)*2+1))}}if(be.classList.toggle("on",B),document.body.classList.toggle("exit-on",B),!B)return;const gt=t.layout,xt=gt.outline,ft=gt.entrance,Pt=r.getBoundingClientRect();let Tt=1/0,te=-1/0,Qt=1/0,Je=-1/0;for(const[vn,Qi]of[[ft.x-ft.w/2,0],[ft.x+ft.w/2,0],[ft.x-ft.w/2,gt.doorHeight],[ft.x+ft.w/2,gt.doorHeight]]){bt.set(vn,Qi,xt.z1+xt.t).project(l);const Bs=Pt.left+(bt.x+1)/2*Pt.width,zn=Pt.top+(1-bt.y)/2*Pt.height;Tt=Math.min(Tt,Bs),te=Math.max(te,Bs),Qt=Math.min(Qt,zn),Je=Math.max(Je,zn)}const Qe=be.offsetWidth/2||20,Pr=8,Ir=Math.max(Tt+Qe,Math.min(te-Qe,ct)),ks=vn=>vn+Pr<Je&&vn-Pr>Qt&&[-Qe*.8,0,Qe*.8].every(Qi=>ae(P(Ir+Qi,vn))),Ji=ks(rt+21)?rt+21:ks(rt-21)?rt-21:null;if(Ji===null){be.classList.remove("on"),document.body.classList.remove("exit-on");return}be.style.transform=`translate(${Math.round(Ir)}px, ${Math.round(Ji)}px)`},J=new gr;J.far=12;let st=null,ht=-1e9;const vt=q=>{if(q.button!==0&&q.button!==2||performance.now()-ht<900||F.travelling||he.on)return;if(D.open){D.hide();return}if(!document.body.classList.contains("ed-page")){const B=u.locked?F.ready?P(ke.x,ke.y):new Nt(0,0):P(q.clientX,q.clientY);if(K(B))return}if(F.ready&&!document.body.classList.contains("ed-page")){const B=u.locked?ke.x:q.clientX,ct=u.locked?ke.y:q.clientY;F.onMap(B,ct)?(M.clear(),u.freeLook=!1,F.enter(l,u)):(F.pushBack(l,u),u.locked||Q());return}if(!u.locked){if(M.pic){Z(M.pic);return}r.requestPointerLock();return}if(J.setFromCamera(new Nt(0,0),l),N.hit(J)){N.poke();return}if(M.pic){Z(M.pic);return}const at=b();(at.kind==="work"||at.kind==="label")&&G(at.work)};r.addEventListener("mousedown",vt),addEventListener("pointerdown",q=>{q.pointerType==="touch"&&(ht=performance.now())},!0);const yt=q=>{E.setFromCamera(q,l);const at=E.intersectObjects(v,!1)[0];if(!at)return{kind:"none"};const B=at.object.userData,ct={point:at.point,dist:at.distance};return B.machine?{kind:"machine",machine:B.machine,...ct}:B.face?{kind:"wall",...ct}:at.point.y<.02?{kind:"floor",...ct}:{kind:"other",...ct}};new ry(r,l,u,yt,(q,at,B)=>{if(!F.travelling&&!(he.on||K(P(at,B)))){if(F.ready&&q.kind!=="machine"){F.pushBack(l,u);return}if(q.kind==="machine"&&q.machine){if(F.ready&&F.onMap(at,B)){M.clear(),F.enter(l,u);return}if(F.ready){F.pushBack(l,u);return}const ct=d.machines.find(rt=>rt.machine.id===q.machine);if(ct){const rt=Y(ct);u.goal={x:rt.x,z:rt.z,yaw:rt.yaw,pitch:rt.pitch}}}else if(q.kind==="floor"&&q.point){const ct=q.point.x-u.pos.x,rt=q.point.z-u.pos.z,gt=Math.hypot(ct,rt),xt=Math.max(0,gt-.5)/Math.max(gt,1e-6);u.goal={x:u.pos.x+ct*xt,z:u.pos.z+rt*xt}}}},()=>!D.open&&!F.travelling&&!document.body.classList.contains("ed-page")),document.addEventListener("selectstart",q=>{var B;const at=q.target instanceof Element?q.target:(B=q.target)==null?void 0:B.parentElement;at!=null&&at.closest("input, textarea, select, [contenteditable]")||q.preventDefault()}),addEventListener("mouseup",q=>st==null?void 0:st.release(q)),D.relock=()=>z&&!document.body.classList.contains("ed-page"),D.el.addEventListener("mousedown",q=>{D.busy||q.target.closest(".view-tools")||(q.preventDefault(),D.hide(),!D.open&&!u.locked&&D.relock()&&r.requestPointerLock())}),document.addEventListener("contextmenu",q=>{q.target.closest("input, textarea, select")||q.preventDefault()}),addEventListener("keydown",q=>{var B,ct;if((ct=(B=q.target).closest)!=null&&ct.call(B,"input, textarea, select, button"))return;const at=q.code==="Enter"||q.code==="Space";if(D.open){(at||q.code==="Escape")&&!D.busy&&(q.preventDefault(),D.hide());return}if(!F.travelling){if(at&&F.ready&&!document.body.classList.contains("ed-page")){q.preventDefault(),F.enter(l,u);return}at&&M.pic&&!document.body.classList.contains("ed-page")&&(q.preventDefault(),Z(M.pic))}}),document.addEventListener("pointerlockchange",()=>{!u.locked&&D.open&&D.hide()});const ut=ri.get("open");ut!==null&&G(ut.padStart(2,"0")),g!=null&&g.startsWith("machine:")&&tt(g.slice(8));let dt=performance.now(),St=!1;addEventListener("mousemove",q=>{if(u.locked){if(!u.holdLook)return;ke.x=Math.max(2,Math.min(innerWidth-2,ke.x+q.movementX)),ke.y=Math.max(2,Math.min(innerHeight-2,ke.y+q.movementY));return}r.style.cursor=u.freeLook?"none":F.ready&&F.onMap(q.clientX,q.clientY)?ay:oy});let Ot=0,Mt=0;const wt=ri.get("near")==="1";function Ft(){if(window.__gReady&&u1(()=>{dt=performance.now(),requestAnimationFrame(Ft)}))return;const q=performance.now(),at=Math.min((q-dt)/1e3,.05);dt=q,at>.024?Mt+=at:Mt=Math.max(0,Mt-at*.5),Mt>1.5&&i>1&&(i=Math.max(1,i-.25),Mt=0,f()),u.update(at),he.update(at),u.apply(l),l.updateMatrixWorld(),F.update(at,l,u,d.interior.machines);const B=F.ready&&u.locked&&!Hi;B&&!St&&(ke.x=innerWidth/2,ke.y=innerHeight/2),St=B,u.holdLook=B,u.locked&&u.freeLook&&(u.freeLook=!1),Hf.value+=at;const ct=document.body.classList.contains("ed-page");N.hide(ct||D.open||F.travelling),N.update(at),u.obstacles=[N.obstacle,...d.machines.map(rt=>({x:rt.spot.x,z:rt.spot.z,r:eM}))],(ot-=at)<=0&&(ot=.3,L()),ct||D.open||F.travelling?M.clear():M.update(at,l,V,d.arch.solids,!0),F.covering||(h.render(e,c,l),e.render(c,l),ct||N.render(e),ct||M.render(e,c,l));{const rt=(u.locked||u.freeLook)&&!ct&&!D.open&&!F.travelling&&!Hi&&!he.on;B?o(rt,F.onMap(ke.x,ke.y),ke.x,ke.y):o(rt)}w(at,ct),Ot++,!window.__gReady&&Ot>3&&(!wt||y===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(Ft)}requestAnimationFrame(Ft);try{document.hasFocus()||window.focus()}catch{}window.__g={...pt,data:t,editor:st,host:N,presence:X,focus:M,standAt:tt,onDoor:Me,woosh:he}}
