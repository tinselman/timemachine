var Gf=Object.defineProperty;var Vf=(i,t,e)=>t in i?Gf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var I=(i,t,e)=>Vf(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="186",Wf=0,Tc=1,Xf=2,eo=1,qf=2,Ks=3,Oi=0,on=1,ni=2,ai=0,Qs=1,Fa=2,Ac=3,Rc=4,Yf=5,ms=100,$f=101,Kf=102,Zf=103,Jf=104,Qf=200,jf=201,td=202,ed=203,Su=204,bu=205,nd=206,id=207,sd=208,rd=209,od=210,ad=211,ld=212,cd=213,hd=214,za=0,Oa=1,ka=2,rr=3,Ba=4,Ha=5,Ga=6,Va=7,Ul=0,ud=1,fd=2,Gn=0,wu=1,Eu=2,Tu=3,Au=4,Ru=5,Cu=6,Nl=7,Lu=300,ki=301,bs=302,Go=303,Vo=304,Uo=306,Wa=1e3,ri=1001,Xa=1002,Be=1003,dd=1004,Mr=1005,He=1006,Wo=1007,Ai=1008,rn=1009,Pu=1010,Iu=1011,or=1012,Fl=1013,Vn=1014,In=1015,bn=1016,zl=1017,Ol=1018,ar=1020,Du=35902,Uu=35899,Nu=1021,Fu=1022,pn=1023,hi=1026,zi=1027,No=1028,kl=1029,Bi=1030,Bl=1031,Hl=1033,no=33776,io=33777,so=33778,ro=33779,qa=35840,Ya=35841,$a=35842,Ka=35843,Za=36196,Ja=37492,Qa=37496,ja=37488,tl=37489,ho=37490,el=37491,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,hl=37816,ul=37817,fl=37818,dl=37819,pl=37820,ml=37821,gl=36492,xl=36494,_l=36495,vl=36283,Ml=36284,uo=36285,yl=36286,pd=3200,Sl=0,md=1,Ei="",Ie="srgb",fo="srgb-linear",po="linear",he="srgb",Xo=7680,gd=519,xd=512,_d=513,vd=514,Gl=515,Md=516,yd=517,Vl=518,Sd=519,zu=35044,Cc="300 es",Hn=2e3,lr=2001;function bd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wd(){const i=cr("canvas");return i.style.display="block",i}const Lc={};function mo(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ou(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=Ou(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=Ou(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ys(...i){const t=i.join(" ");t in Lc||(Lc[t]=!0,Gt(...i))}function Ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Td={[za]:Oa,[ka]:Ga,[Ba]:Va,[rr]:Ha,[Oa]:za,[Ga]:ka,[Va]:Ba,[Ha]:rr};class Gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pc=1234567;const js=Math.PI/180,hr=180/Math.PI;function li(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Wl(i,t){return(i%t+t)%t}function Ad(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rd(i,t,e){return i!==t?(e-i)/(t-i):0}function tr(i,t,e){return(1-e)*i+e*t}function Cd(i,t,e,n){return tr(i,t,1-Math.exp(-e*n))}function Ld(i,t=1){return t-Math.abs(Wl(i,t*2)-t)}function Pd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ud(i,t){return i+Math.random()*(t-i)}function Nd(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(Pc=i);let t=Pc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zd(i){return i*js}function Od(i){return i*hr}function kd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const dn={DEG2RAD:js,RAD2DEG:hr,generateUUID:li,clamp:te,euclideanModulo:Wl,mapLinear:Ad,inverseLerp:Rd,lerp:tr,damp:Cd,pingpong:Ld,smoothstep:Pd,smootherstep:Id,randInt:Dd,randFloat:Ud,randFloatSpread:Nd,seededRandom:Fd,degToRad:zd,radToDeg:Od,isPowerOfTwo:kd,ceilPowerOfTwo:Bd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Gd,normalize:ue,denormalize:Pn},uc=class uc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uc.prototype.isVector2=!0;let Bt=uc;class me{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){const M=Math.acos(g),E=Math.sin(M);p=Math.sin(p*M)/E,a=Math.sin(a*M)/E,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+x*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fc=class fc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fc.prototype.isVector3=!0;let D=fc;const qo=new D,Ic=new me,dc=class dc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],M=s[1],E=s[4],v=s[7],y=s[2],b=s[5],L=s[8];return r[0]=o*x+a*M+l*y,r[3]=o*g+a*E+l*b,r[6]=o*p+a*v+l*L,r[1]=c*x+h*M+u*y,r[4]=c*g+h*E+u*b,r[7]=c*p+h*v+u*L,r[2]=f*x+d*M+m*y,r[5]=f*g+d*E+m*b,r[8]=f*p+d*v+m*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yo.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yo.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dc.prototype.isMatrix3=!0;let qt=dc;const Yo=new qt,Dc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vd(){const i={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fo]:{primaries:t,whitePoint:n,transfer:po,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Dc,fromXYZ:Uc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),i}const ie=Vd();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class Wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$i===void 0&&($i=cr("canvas")),$i.width=t.width,$i.height=t.height;const s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$i}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ci(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ci(e[n]/255)*255):e[n]=ci(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xd=0;class Xl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}let qd=0;const Ko=new D;class Ve extends Gi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=ri,s=ri,r=He,o=Ai,a=pn,l=rn,c=Ve.DEFAULT_ANISOTROPY,h=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=li(),this.name="",this.source=new Xl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Lu;Ve.DEFAULT_ANISOTROPY=1;const pc=class pc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(d+1)/2,y=(p+1)/2,b=(h+f)/4,L=(u+x)/4,_=(m+g)/4;return E>v&&E>y?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=L/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=_/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=L/r,s=_/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pc.prototype.isVector4=!0;let de=pc;class Yd extends Gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ve(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends Yd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ku extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Do=class Do{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Do().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Zd)}lookAt(t,e,n){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),pi.crossVectors(n,an),pi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),pi.crossVectors(n,an)),pi.normalize(),yr.crossVectors(an,pi),s[0]=pi.x,s[4]=yr.x,s[8]=an.x,s[1]=pi.y,s[5]=yr.y,s[9]=an.y,s[2]=pi.z,s[6]=yr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],E=n[7],v=n[11],y=n[15],b=s[0],L=s[4],_=s[8],S=s[12],C=s[1],A=s[5],U=s[9],N=s[13],O=s[2],G=s[6],J=s[10],W=s[14],tt=s[3],H=s[7],$=s[11],st=s[15];return r[0]=o*b+a*C+l*O+c*tt,r[4]=o*L+a*A+l*G+c*H,r[8]=o*_+a*U+l*J+c*$,r[12]=o*S+a*N+l*W+c*st,r[1]=h*b+u*C+f*O+d*tt,r[5]=h*L+u*A+f*G+d*H,r[9]=h*_+u*U+f*J+d*$,r[13]=h*S+u*N+f*W+d*st,r[2]=m*b+x*C+g*O+p*tt,r[6]=m*L+x*A+g*G+p*H,r[10]=m*_+x*U+g*J+p*$,r[14]=m*S+x*N+g*W+p*st,r[3]=M*b+E*C+v*O+y*tt,r[7]=M*L+E*A+v*G+y*H,r[11]=M*_+E*U+v*J+y*$,r[15]=M*S+E*N+v*W+y*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15],M=l*d-c*f,E=a*d-c*u,v=a*f-l*u,y=o*d-c*h,b=o*f-l*h,L=o*u-a*h;return e*(x*M-g*E+p*v)-n*(m*M-g*y+p*b)+s*(m*E-x*y+p*L)-r*(m*v-x*b+g*L)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=e*a-n*o,E=e*l-s*o,v=e*c-r*o,y=n*l-s*a,b=n*c-r*a,L=s*c-r*l,_=h*x-u*m,S=h*g-f*m,C=h*p-d*m,A=u*g-f*x,U=u*p-d*x,N=f*p-d*g,O=M*N-E*U+v*A+y*C-b*S+L*_;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/O;return t[0]=(a*N-l*U+c*A)*G,t[1]=(s*U-n*N-r*A)*G,t[2]=(x*L-g*b+p*y)*G,t[3]=(f*b-u*L-d*y)*G,t[4]=(l*C-o*N-c*S)*G,t[5]=(e*N-s*C+r*S)*G,t[6]=(g*v-m*L-p*E)*G,t[7]=(h*L-f*v+d*E)*G,t[8]=(o*U-a*C+c*_)*G,t[9]=(n*C-e*U-r*_)*G,t[10]=(m*b-x*v+p*M)*G,t[11]=(u*v-h*b-d*M)*G,t[12]=(a*S-o*A-l*_)*G,t[13]=(e*A-n*S+s*_)*G,t[14]=(x*E-m*y-g*M)*G,t[15]=(h*y-u*E+f*M)*G,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,g=o*u,p=a*u,M=l*c,E=l*h,v=l*u,y=n.x,b=n.y,L=n.z;return s[0]=(1-(x+p))*y,s[1]=(d+v)*y,s[2]=(m-E)*y,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+p))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(m+E)*L,s[9]=(g-M)*L,s[10]=(1-(f+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ki.set(s[0],s[1],s[2]).length();const a=Ki.set(s[4],s[5],s[6]).length(),l=Ki.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Tn.copy(this);const c=1/o,h=1/a,u=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,e.setFromRotationMatrix(Tn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Hn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Hn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===lr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Hn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Hn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===lr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Do.prototype.isMatrix4=!0;let Jt=Do;const Ki=new D,Tn=new Jt,Kd=new D(0,0,0),Zd=new D(1,1,1),pi=new D,yr=new D,an=new D,Nc=new Jt,Fc=new me;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jd=0;const zc=new D,Zi=new me,Xn=new Jt,Sr=new D,As=new D,Qd=new D,jd=new me,Oc=new D(1,0,0),kc=new D(0,1,0),Bc=new D(0,0,1),Hc={type:"added"},tp={type:"removed"},Ji={type:"childadded",child:null},Zo={type:"childremoved",child:null};class De extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new D,e=new wn,n=new me,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new qt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Oc,t)}rotateY(t){return this.rotateOnAxis(kc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oc,t)}translateY(t){return this.translateOnAxis(kc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(As,Sr,this.up):Xn.lookAt(Sr,As,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tp),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new D(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pe extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ep={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},br={h:0,s:0,l:0};function Qo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Wl(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qo(o,r,t+1/3),this.g=Qo(o,r,t),this.b=Qo(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ci(t.r),this.g=ci(t.g),this.b=ci(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ie.workingToColorSpace($e.copy(this),t),Math.round(te($e.r*255,0,255))*65536+Math.round(te($e.g*255,0,255))*256+Math.round(te($e.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ie){ie.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(br);const n=tr(mi.h,br.h,e),s=tr(mi.s,br.s,e),r=tr(mi.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new Ut;Ut.NAMES=Bu;class Yl extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const An=new D,qn=new D,jo=new D,Yn=new D,Qi=new D,ji=new D,Gc=new D,ta=new D,ea=new D,na=new D,ia=new de,sa=new de,ra=new de;class vn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),qn.subVectors(n,e),jo.subVectors(t,e);const o=An.dot(An),a=An.dot(qn),l=An.dot(jo),c=qn.dot(qn),h=qn.dot(jo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ia,r.x),o.addScaledVector(sa,r.y),o.addScaledVector(ra,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),qn.subVectors(t,e),An.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),An.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),ji.subVectors(r,n),ta.subVectors(t,n);const l=Qi.dot(ta),c=ji.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,s);const h=Qi.dot(ea),u=ji.dot(ea);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Qi,o);na.subVectors(t,r);const d=Qi.dot(na),m=ji.dot(na);if(m>=0&&d<=m)return e.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ji,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Gc.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(Gc,a);const p=1/(g+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Qi,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Vi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(t.matrixWorld),this.union(wr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),Er.subVectors(this.max,Rs),ts.subVectors(t.a,Rs),es.subVectors(t.b,Rs),ns.subVectors(t.c,Rs),gi.subVectors(es,ts),xi.subVectors(ns,es),Li.subVectors(ts,ns);let e=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-Li.z,Li.y,gi.z,0,-gi.x,xi.z,0,-xi.x,Li.z,0,-Li.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-Li.y,Li.x,0];return!oa(e,ts,es,ns,Er)||(e=[1,0,0,0,1,0,0,0,1],!oa(e,ts,es,ns,Er))?!1:(Tr.crossVectors(gi,xi),e=[Tr.x,Tr.y,Tr.z],oa(e,ts,es,ns,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new D,new D,new D,new D,new D,new D,new D,new D],Rn=new D,wr=new Vi,ts=new D,es=new D,ns=new D,gi=new D,xi=new D,Li=new D,Rs=new D,Er=new D,Tr=new D,Pi=new D;function oa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ii=np();function np(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function ip(i){Math.abs(i)>65504&&Gt("DataUtils.toHalfFloat(): Value out of range."),i=te(i,-65504,65504),ii.floatView[0]=i;const t=ii.uint32View[0],e=t>>23&511;return ii.baseTable[e]+((t&8388607)>>ii.shiftTable[e])}function sp(i){const t=i>>10;return ii.uint32View[0]=ii.mantissaTable[ii.offsetTable[t]+(i&1023)]+ii.exponentTable[t],ii.floatView[0]}class rp{static toHalfFloat(t){return ip(t)}static fromHalfFloat(t){return sp(t)}}const Le=new D,Ar=new Bt;let op=0;class yn extends Gi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:op++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zu,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Hu extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gu extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vt extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const ap=new Vi,Cs=new D,aa=new D;class Wi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);const e=Cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(aa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(aa)),this.expandByPoint(Cs.copy(t.center).sub(aa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let lp=0;const gn=new Jt,la=new De,is=new D,ln=new Vi,Ls=new Vi,ze=new D;class we extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bd(t)?Gu:Hu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ls.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(ln.min,Ls.min),ln.expandByPoint(ze),ze.addVectors(ln.max,Ls.max),ln.expandByPoint(ze)):(ln.expandByPoint(Ls.min),ln.expandByPoint(Ls.max))}ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),ze.add(is)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new D,l[_]=new D;const c=new D,h=new D,u=new D,f=new Bt,d=new Bt,m=new Bt,x=new D,g=new D;function p(_,S,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const A=1/(d.x*m.y-m.x*d.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(A),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(A),a[_].add(x),a[S].add(x),a[C].add(x),l[_].add(g),l[S].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,S=M.length;_<S;++_){const C=M[_],A=C.start,U=C.count;for(let N=A,O=A+U;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const E=new D,v=new D,y=new D,b=new D;function L(_){y.fromBufferAttribute(s,_),b.copy(y);const S=a[_];E.copy(S),E.sub(y.multiplyScalar(y.dot(S))).normalize(),v.crossVectors(b,S);const A=v.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,A)}for(let _=0,S=M.length;_<S;++_){const C=M[_],A=C.start,U=C.count;for(let N=A,O=A+U;N<O;N+=3)L(t.getX(N+0)),L(t.getX(N+1)),L(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new yn(f,h,u)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zu,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=li()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const Ze=new D;class go{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),n=ue(n,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){mo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new yn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ca=new D,hp=new D,up=new qt;class jn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ca.subVectors(n,e).cross(hp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(ca),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||up.getNormalMatrix(t),s=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let fp=0;class Xi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Qs,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=bu,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Bt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vu extends Xi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ss;const Ps=new D,rs=new D,os=new D,as=new Bt,Is=new Bt,Wu=new Jt,Rr=new D,Ds=new D,Cr=new D,Vc=new Bt,ha=new Bt,Wc=new Bt;class dp extends De{constructor(t=new Vu){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new cp(e,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new go(n,3,0,!1)),ss.setAttribute("uv",new go(n,2,3,!1))}this.geometry=ss,this.material=t,this.center=new Bt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&se('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Wu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Lr(Rr.set(-.5,-.5,0),os,o,rs,s,r),Lr(Ds.set(.5,-.5,0),os,o,rs,s,r),Lr(Cr.set(.5,.5,0),os,o,rs,s,r),Vc.set(0,0),ha.set(1,0),Wc.set(1,1);let a=t.ray.intersectTriangle(Rr,Ds,Cr,!1,Ps);if(a===null&&(Lr(Ds.set(-.5,.5,0),os,o,rs,s,r),ha.set(0,1),a=t.ray.intersectTriangle(Rr,Cr,Ds,!1,Ps),a===null))return;const l=t.ray.origin.distanceTo(Ps);l<t.near||l>t.far||e.push({distance:l,point:Ps.clone(),uv:vn.getInterpolation(Ps,Rr,Ds,Cr,Vc,ha,Wc,new Bt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lr(i,t,e,n,s,r){as.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Is.x=r*as.x-s*as.y,Is.y=s*as.x+r*as.y):Is.copy(as),i.copy(t),i.x+=Is.x,i.y+=Is.y,i.applyMatrix4(Wu)}const Kn=new D,ua=new D,Pr=new D,Ir=new D;class $l{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ua.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),Ir.copy(this.origin).sub(ua);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Pr),a=Ir.dot(this.direction),l=-Ir.dot(Pr),c=Ir.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ua).addScaledVector(Pr,f),d}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,m=e.x-o.x,x=e.y-o.y,g=e.z-o.z,p=n.x-o.x,M=n.y-o.y,E=n.z-o.z,v=Math.abs(l),y=Math.abs(c),b=Math.abs(h);let L,_,S,C,A,U,N,O,G,J,W,tt;if(v>=y&&v>=b?(S=l,U=u,G=m,tt=p,l>=0?(L=c,_=h,C=f,A=d,N=x,O=g,J=M,W=E):(L=h,_=c,C=d,A=f,N=g,O=x,J=E,W=M)):y>=b?(S=c,U=f,G=x,tt=M,c>=0?(L=h,_=l,C=d,A=u,N=g,O=m,J=E,W=p):(L=l,_=h,C=u,A=d,N=m,O=g,J=p,W=E)):(S=h,U=d,G=g,tt=E,h>=0?(L=l,_=c,C=u,A=f,N=m,O=x,J=p,W=M):(L=c,_=l,C=f,A=u,N=x,O=m,J=M,W=p)),S===0)return null;const H=L/S,$=_/S,st=1/S,ft=C-H*U,z=A-$*U,X=N-H*G,k=O-$*G,B=J-H*tt,R=W-$*tt,P=B*k-R*X,V=ft*R-z*B,j=X*z-k*ft;if(s){if(P<0||V<0||j<0)return null}else if((P<0||V<0||j<0)&&(P>0||V>0||j>0))return null;const it=P+V+j;if(it===0)return null;const Z=st*(P*U+V*G+j*tt);return(it>0?Z<0:Z>0)?null:this.at(Z/it,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oi extends Xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xc=new Jt,Ii=new $l,Dr=new Wi,qc=new D,Ur=new D,Nr=new D,Fr=new D,fa=new D,zr=new D,Yc=new D,Or=new D;class Se extends De{constructor(t=new we,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(fa.fromBufferAttribute(u,t),o?zr.addScaledVector(fa,h):zr.addScaledVector(fa.sub(e),h))}e.add(zr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Ii.copy(t.ray).recast(t.near),!(Dr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Dr,qc)===null||Ii.origin.distanceToSquared(qc)>(t.far-t.near)**2))&&(Xc.copy(r).invert(),Ii.copy(t.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ii)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,y=E;v<y;v+=3){const b=a.getX(v),L=a.getX(v+1),_=a.getX(v+2);s=kr(this,p,t,n,c,h,u,b,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=a.getX(g),E=a.getX(g+1),v=a.getX(g+2);s=kr(this,o,t,n,c,h,u,M,E,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,y=E;v<y;v+=3){const b=v,L=v+1,_=v+2;s=kr(this,p,t,n,c,h,u,b,L,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,E=g+1,v=g+2;s=kr(this,o,t,n,c,h,u,M,E,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function pp(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Oi,a),l===null)return null;Or.copy(a),Or.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Or);return c<e.near||c>e.far?null:{distance:c,point:Or.clone(),object:i}}function kr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ur),i.getVertexPosition(l,Nr),i.getVertexPosition(c,Fr);const h=pp(i,t,e,n,Ur,Nr,Fr,Yc);if(h){const u=new D;vn.getBarycoord(Yc,Ur,Nr,Fr,u),s&&(h.uv=vn.getInterpolatedAttribute(s,a,l,c,u,new Bt)),r&&(h.uv1=vn.getInterpolatedAttribute(r,a,l,c,u,new Bt)),o&&(h.normal=vn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};vn.getNormal(Ur,Nr,Fr,f.normal),h.face=f,h.barycoord=u}return h}class ws extends Ve{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Be,h=Be,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $c extends yn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ls=new Jt,Kc=new Jt,Br=[],Zc=new Vi,mp=new Jt,Us=new Se,Ns=new Wi;class oo extends Se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Zc.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Zc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Ns.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ns)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ns.copy(this.boundingSphere),Ns.applyMatrix4(n),t.ray.intersectsSphere(Ns)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),Kc.multiplyMatrices(n,ls),Us.matrixWorld=Kc,Us.raycast(t,Br);for(let o=0,a=Br.length;o<a;o++){const l=Br[o];l.instanceId=r,l.object=this,e.push(l)}Br.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ws(new Float32Array(s*this.count),s,this.count,No,In));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Di=new Wi,gp=new Bt(.5,.5),Hr=new D;class Kl{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],E=r[13],v=r[14],y=r[15];if(s[0].setComponents(c-o,d-h,p-m,y-M).normalize(),s[1].setComponents(c+o,d+h,p+m,y+M).normalize(),s[2].setComponents(c+a,d+u,p+x,y+E).normalize(),s[3].setComponents(c-a,d-u,p-x,y-E).normalize(),n)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,d-f,p-g,y-v).normalize();else if(s[4].setComponents(c-l,d-f,p-g,y-v).normalize(),e===Hn)s[5].setComponents(c+l,d+f,p+g,y+v).normalize();else if(e===lr)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);const e=gp.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xu extends Xi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xo=new D,_o=new D,Jc=new Jt,Fs=new $l,Gr=new Wi,da=new D,Qc=new D;class xp extends De{constructor(t=new we,e=new Xu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xo.fromBufferAttribute(e,s-1),_o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xo.distanceTo(_o);t.setAttribute("lineDistance",new Vt(n,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(s),Gr.radius+=r,t.ray.intersectsSphere(Gr)===!1)return;Jc.copy(s).invert(),Fs.copy(t.ray).applyMatrix4(Jc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=h.getX(x),M=h.getX(x+1),E=Vr(this,t,Fs,l,p,M,x);E&&e.push(E)}if(this.isLineLoop){const x=h.getX(m-1),g=h.getX(d),p=Vr(this,t,Fs,l,x,g,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){const p=Vr(this,t,Fs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){const x=Vr(this,t,Fs,l,m-1,d,m-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(xo.fromBufferAttribute(a,s),_o.fromBufferAttribute(a,r),e.distanceSqToSegment(xo,_o,da,Qc)>n)return;da.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(da);if(!(c<t.near||c>t.far))return{distance:c,point:Qc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const jc=new D,th=new D;class _p extends xp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)jc.fromBufferAttribute(e,s),th.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+jc.distanceTo(th);t.setAttribute("lineDistance",new Vt(n,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qu extends Ve{constructor(t=[],e=ki,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zl extends Ve{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends Ve{constructor(t,e,n=Vn,s,r,o,a=Be,l=Be,c,h=hi,u=1){if(h!==hi&&h!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class vp extends ur{constructor(t,e=Vn,n=ki,s,r,o=Be,a=Be,l,c=hi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Yu extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sn extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function m(x,g,p,M,E,v,y,b,L,_,S){const C=v/L,A=y/_,U=v/2,N=y/2,O=b/2,G=L+1,J=_+1;let W=0,tt=0;const H=new D;for(let $=0;$<J;$++){const st=$*A-N;for(let ft=0;ft<G;ft++){const z=ft*C-U;H[x]=z*M,H[g]=st*E,H[p]=O,c.push(H.x,H.y,H.z),H[x]=0,H[g]=0,H[p]=b>0?1:-1,h.push(H.x,H.y,H.z),u.push(ft/L),u.push(1-$/_),W+=1}}for(let $=0;$<_;$++)for(let st=0;st<L;st++){const ft=f+st+G*$,z=f+st+G*($+1),X=f+(st+1)+G*($+1),k=f+(st+1)+G*$;l.push(ft,z,k),l.push(z,X,k),tt+=6}a.addGroup(d,tt,S),d+=tt,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class er extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new Bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wn extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){const M=p*f-o;for(let E=0;E<c;E++){const v=E*u-r;m.push(v,-M,0),x.push(0,0,1),g.push(E/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const E=M+c*p,v=M+c*(p+1),y=M+1+c*(p+1),b=M+1+c*p;d.push(E,v,b),d.push(v,y,b)}this.setIndex(d),this.setAttribute("position",new Vt(m,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wn(t.width,t.height,t.widthSegments,t.heightSegments)}}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(eh(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(eh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function eh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $u(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const yp={clone:Es,merge:Je};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends Xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Mp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new de().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class wp extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vo extends Xi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ul,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ep extends Xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tp extends Xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(nh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!nh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nh(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Ap{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Rp=new Ap;class Jl{constructor(t){this.manager=t!==void 0?t:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Jl.DEFAULT_MATERIAL_NAME="__DEFAULT";const cs=new WeakMap;class Cp extends Jl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=pa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=cs.get(o);u===void 0&&(u=[],cs.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=cr("img");function l(){h(),e&&e(this);const u=cs.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}cs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),pa.remove(`image:${t}`);const f=cs.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}cs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pa.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class bl extends Jl{constructor(t){super(t)}load(t,e,n,s){const r=new Ve,o=new Cp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Ku extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Lp extends Ku{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ma=new Jt,ih=new D,sh=new D;class Pp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===lr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wr=new D,Xr=new me,Nn=new D;class Zu extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wr,Xr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wr,Xr,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _i=new D,rh=new Bt,oh=new Bt;class sn extends Zu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,rh,oh),e.subVectors(oh,rh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fo extends Zu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ip extends Pp{constructor(){super(new Fo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dp extends Ku{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Ip}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const hs=-90,us=1;class Up extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new sn(hs,us,t,e);r.layers=this.layers,this.add(r);const o=new sn(hs,us,t,e);o.layers=this.layers,this.add(o);const a=new sn(hs,us,t,e);a.layers=this.layers,this.add(a);const l=new sn(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new sn(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Np extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ah=new Jt;class wl{constructor(t,e,n=0,s=1/0){this.ray=new $l(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(t,e=!0,n=[]){return El(t,this,n,e),n.sort(lh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)El(t[s],this,n,e);return n.sort(lh),n}}function lh(i,t){return i.distance-t.distance}function El(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)El(r[o],t,e,!0)}}const mc=class mc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};mc.prototype.isMatrix2=!0;let ch=mc;function hh(i,t,e,n){const s=Fp(n);switch(e){case Nu:return i*t;case No:return i*t/s.components*s.byteLength;case kl:return i*t/s.components*s.byteLength;case Bi:return i*t*2/s.components*s.byteLength;case Bl:return i*t*2/s.components*s.byteLength;case Fu:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case Hl:return i*t*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case Ka:return Math.max(i,16)*Math.max(t,8)/4;case qa:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ja:case ja:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:case ho:case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gl:case xl:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vl:case Ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uo:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fp(i){switch(i){case rn:case Pu:return{byteLength:1,components:1};case or:case Iu:case bn:return{byteLength:2,components:1};case zl:case Ol:return{byteLength:2,components:4};case Vn:case Fl:case In:return{byteLength:4,components:1};case Du:case Uu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ju(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zp(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
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
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
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
#endif`,Qp=`#ifdef USE_BUMPMAP
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,am=`#define PI 3.141592653589793
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
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Fm=`uniform sampler2D dfgLUT;
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
}`,zm=`
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$m=`#if defined( USE_POINTS_UV )
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
#endif`,Km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
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
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
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
}`,X0=`#if DEPTH_PACKING == 3200
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
}`,q0=`#define DISTANCE
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
}`,Y0=`#define DISTANCE
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
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`uniform float scale;
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
}`,J0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,j0=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,fg=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Op,alphahash_pars_fragment:kp,alphamap_fragment:Bp,alphamap_pars_fragment:Hp,alphatest_fragment:Gp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:$p,beginnormal_vertex:Kp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:jp,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:em,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:rm,color_vertex:om,common:am,cube_uv_reflection_fragment:lm,defaultnormal_vertex:cm,displacementmap_pars_vertex:hm,displacementmap_vertex:um,emissivemap_fragment:fm,emissivemap_pars_fragment:dm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:xm,envmap_pars_fragment:_m,envmap_pars_vertex:vm,envmap_physical_pars_fragment:Lm,envmap_vertex:Mm,fog_vertex:ym,fog_pars_vertex:Sm,fog_fragment:bm,fog_pars_fragment:wm,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Tm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Rm,lights_pars_begin:Cm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Im,lights_phong_fragment:Dm,lights_phong_pars_fragment:Um,lights_physical_fragment:Nm,lights_physical_pars_fragment:Fm,lights_fragment_begin:zm,lights_fragment_maps:Om,lights_fragment_end:km,lightprobes_pars_fragment:Bm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:$m,metalnessmap_fragment:Km,metalnessmap_pars_fragment:Zm,morphinstance_vertex:Jm,morphcolor_vertex:Qm,morphnormal_vertex:jm,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:f0,packing:d0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:x0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:y0,shadowmap_vertex:S0,shadowmask_pars_fragment:b0,skinbase_vertex:w0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:A0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:L0,tonemapping_pars_fragment:P0,transmission_fragment:I0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:N0,uv_vertex:F0,worldpos_vertex:z0,background_vert:O0,background_frag:k0,backgroundCube_vert:B0,backgroundCube_frag:H0,cube_vert:G0,cube_frag:V0,depth_vert:W0,depth_frag:X0,distance_vert:q0,distance_frag:Y0,equirect_vert:$0,equirect_frag:K0,linedashed_vert:Z0,linedashed_frag:J0,meshbasic_vert:Q0,meshbasic_frag:j0,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:fg,points_frag:dg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:xg},St={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},kn={basic:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Je([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Je([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Je([St.points,St.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Je([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Je([St.common,St.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Je([St.sprite,St.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:Je([St.common,St.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:Je([St.lights,St.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};kn.physical={uniforms:Je([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const qr={r:0,b:0,g:0},_g=new Jt,Qu=new qt;Qu.set(-1,0,0,0,1,0,0,0,1);function vg(i,t,e,n,s,r){const o=new Ut(0);let a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const v=M.backgroundBlurriness>0;E=t.get(E,v)}return E}function m(M){let E=!1;const v=d(M);v===null?g(o,a):v&&v.isColor&&(g(v,1),E=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,E){const v=d(E);v&&(v.isCubeTexture||v.mapping===Uo)?(c===void 0&&(c=new Se(new Sn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:Es(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qu),c.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Se(new Wn(2,2),new We({name:"BackgroundMaterial",uniforms:Es(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(qr,$u(i)),e.buffers.color.setClear(qr.r,qr.g,qr.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,E=1){o.set(M),a=E,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Mg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(A,U,N,O,G){let J=!1;const W=u(A,O,N,U);r!==W&&(r=W,c(r.object)),J=d(A,O,N,G),J&&m(A,O,N,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,v(A,U,N,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function u(A,U,N,O){const G=O.wireframe===!0;let J=n[U.id];J===void 0&&(J={},n[U.id]=J);const W=A.isInstancedMesh===!0?A.id:0;let tt=J[W];tt===void 0&&(tt={},J[W]=tt);let H=tt[N.id];H===void 0&&(H={},tt[N.id]=H);let $=H[G];return $===void 0&&($=f(l()),H[G]=$),$}function f(A){const U=[],N=[],O=[];for(let G=0;G<e;G++)U[G]=0,N[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:N,attributeDivisors:O,object:A,attributes:{},index:null}}function d(A,U,N,O){const G=r.attributes,J=U.attributes;let W=0;const tt=N.getAttributes();for(const H in tt)if(tt[H].location>=0){const st=G[H];let ft=J[H];if(ft===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(ft=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(ft=A.instanceColor)),st===void 0||st.attribute!==ft||ft&&st.data!==ft.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function m(A,U,N,O){const G={},J=U.attributes;let W=0;const tt=N.getAttributes();for(const H in tt)if(tt[H].location>=0){let st=J[H];st===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(st=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(st=A.instanceColor));const ft={};ft.attribute=st,st&&st.data&&(ft.data=st.data),G[H]=ft,W++}r.attributes=G,r.attributesNum=W,r.index=O}function x(){const A=r.newAttributes;for(let U=0,N=A.length;U<N;U++)A[U]=0}function g(A){p(A,0)}function p(A,U){const N=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;N[A]=1,O[A]===0&&(i.enableVertexAttribArray(A),O[A]=1),G[A]!==U&&(i.vertexAttribDivisor(A,U),G[A]=U)}function M(){const A=r.newAttributes,U=r.enabledAttributes;for(let N=0,O=U.length;N<O;N++)U[N]!==A[N]&&(i.disableVertexAttribArray(N),U[N]=0)}function E(A,U,N,O,G,J,W){W===!0?i.vertexAttribIPointer(A,U,N,G,J):i.vertexAttribPointer(A,U,N,O,G,J)}function v(A,U,N,O){x();const G=O.attributes,J=N.getAttributes(),W=U.defaultAttributeValues;for(const tt in J){const H=J[tt];if(H.location>=0){let $=G[tt];if($===void 0&&(tt==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),tt==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),$!==void 0){const st=$.normalized,ft=$.itemSize,z=t.get($);if(z===void 0)continue;const X=z.buffer,k=z.type,B=z.bytesPerElement,R=k===i.INT||k===i.UNSIGNED_INT||$.gpuType===Fl;if($.isInterleavedBufferAttribute){const P=$.data,V=P.stride,j=$.offset;if(P.isInstancedInterleavedBuffer){for(let it=0;it<H.locationSize;it++)p(H.location+it,P.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let it=0;it<H.locationSize;it++)g(H.location+it);i.bindBuffer(i.ARRAY_BUFFER,X);for(let it=0;it<H.locationSize;it++)E(H.location+it,ft/H.locationSize,k,st,V*B,(j+ft/H.locationSize*it)*B,R)}else{if($.isInstancedBufferAttribute){for(let P=0;P<H.locationSize;P++)p(H.location+P,$.meshPerAttribute);A.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let P=0;P<H.locationSize;P++)g(H.location+P);i.bindBuffer(i.ARRAY_BUFFER,X);for(let P=0;P<H.locationSize;P++)E(H.location+P,ft/H.locationSize,k,st,ft*B,ft/H.locationSize*P*B,R)}}else if(W!==void 0){const st=W[tt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(H.location,st);break;case 3:i.vertexAttrib3fv(H.location,st);break;case 4:i.vertexAttrib4fv(H.location,st);break;default:i.vertexAttrib1fv(H.location,st)}}}}M()}function y(){S();for(const A in n){const U=n[A];for(const N in U){const O=U[N];for(const G in O){const J=O[G];for(const W in J)h(J[W].object),delete J[W];delete O[G]}}delete n[A]}}function b(A){if(n[A.id]===void 0)return;const U=n[A.id];for(const N in U){const O=U[N];for(const G in O){const J=O[G];for(const W in J)h(J[W].object),delete J[W];delete O[G]}}delete n[A.id]}function L(A){for(const U in n){const N=n[U];for(const O in N){const G=N[O];if(G[A.id]===void 0)continue;const J=G[A.id];for(const W in J)h(J[W].object),delete J[W];delete G[A.id]}}}function _(A){for(const U in n){const N=n[U],O=A.isInstancedMesh===!0?A.id:0,G=N[O];if(G!==void 0){for(const J in G){const W=G[J];for(const tt in W)h(W[tt].object),delete W[tt];delete G[J]}delete N[O],Object.keys(N).length===0&&delete n[U]}}}function S(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function yg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==pn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const _=L===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==rn&&L!==In&&!_&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:v,maxSamples:y,samples:b}}function bg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new jn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const M=r?0:n,E=M*4;let v=p.clippingState||null;l.value=v,v=h(m,f,E,d);for(let y=0;y!==E;++y)v[y]=e[y];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,v=d;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}const xs=4,wg=6,Eg=20,Tg=256,zs=new Fo,uh=new Ut;let ga=null,xa=0,_a=0,va=!1;const Ag=new D,Ui=new D;class fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Ag}=r;ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,xa,_a),this._renderer.xr.enabled=va,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:bn,format:pn,colorSpace:fo,depthBuffer:!1},s=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Rg(r)),this._blurMaterial=Lg(r,t,e),this._ggxMaterial=Cg(r,t,e)}return s}_compileMaterial(t){const e=new Se(new we,t);this._renderer.compile(e,zs)}_sceneToCubeUV(t,e,n,s,r){const l=new sn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(uh),u.toneMapping=Gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Se(new Sn,new oi({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let p=!1;const M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(uh),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const y=this._cubeSize;fs(s,v*y,E>2?y:0,y,y),u.setRenderTarget(s),p&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ki||t.mapping===bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ph());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-xs?n-m+xs:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,fs(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,zs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,fs(t,g,p,3*x,2*x),s.setRenderTarget(t),s.render(a,zs)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-xs?s-this._lodMax+xs:0),f=4*(this._cubeSize-h);fs(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,zs)}}function Rg(i){const t=[],e=[];let n=i;const s=i-xs+1+wg;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let p=0;p<u;p++){const M=p%3*2/3-1,E=p>2?0:-1,v=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];m.set(v,d*f*p);for(let y=0;y<f;y++){const b=h[y*2]*2-1,L=h[y*2+1]*2-1;p===0?Ui.set(1,L,b):p===1?Ui.set(-b,1,-L):p===2?Ui.set(-b,L,1):p===3?Ui.set(-1,L,-b):p===4?Ui.set(-b,-1,L):Ui.set(b,L,-1),Ui.toArray(x,(p*f+y)*d)}}const g=new we;g.setAttribute("position",new yn(m,d)),g.setAttribute("outputDirection",new yn(x,d)),e.push(new Se(g,null)),n>xs&&n--}return{lodMeshes:e,sizeLods:t}}function dh(i,t,e){const n=new Mn(i,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Cg(i,t,e){return new We({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Lg(i,t,e){return new We({name:"SphericalGaussianBlur",defines:{SAMPLES:Eg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ph(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function mh(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function zo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ju extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Sn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ai});r.uniforms.tEquirect.value=e;const o=new Se(s,r),a=e.minFilter;return e.minFilter===Ai&&(e.minFilter=He),new Up(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Pg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Go||d===Vo)if(t.has(f)){const m=t.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const x=new ju(m.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const d=f.mapping,m=d===Go||d===Vo,x=d===ki||d===bs;if(m||x){let g=e.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new fh(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const M=f.image;return m&&M&&M.height>0||x&&M&&l(M)?(n===null&&(n=new fh(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,d){return d===Go?f.mapping=ki:d===Vo&&(f.mapping=bs),f}function l(f){let d=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){const d=f.target;d.removeEventListener("dispose",c);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(f){const d=f.target;d.removeEventListener("dispose",h);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Ig(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ys("WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(m===void 0)return;if(d!==null){const M=d.array;x=d.version;for(let E=0,v=M.length;E<v;E+=3){const y=M[E+0],b=M[E+1],L=M[E+2];f.push(y,b,b,L,L,y)}}else{const M=m.array;x=m.version;for(let E=0,v=M.length/3-1;E<v;E+=3){const y=E+0,b=E+1,L=E+2;f.push(y,b,b,L,L,y)}}const g=new(m.count>=65535?Gu:Hu)(f,1);g.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Ug(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ng(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Fg(i,t,e){const n=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var d=C;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const L=new Float32Array(y*b*4*u),_=new ku(L,y,b,u);_.type=In,_.needsUpdate=!0;const S=v*4;for(let A=0;A<u;A++){const U=p[A],N=M[A],O=E[A],G=y*b*4*A;for(let J=0;J<U.count;J++){const W=J*S;m===!0&&(s.fromBufferAttribute(U,J),L[G+W+0]=s.x,L[G+W+1]=s.y,L[G+W+2]=s.z,L[G+W+3]=0),x===!0&&(s.fromBufferAttribute(N,J),L[G+W+4]=s.x,L[G+W+5]=s.y,L[G+W+6]=s.z,L[G+W+7]=0),g===!0&&(s.fromBufferAttribute(O,J),L[G+W+8]=s.x,L[G+W+9]=s.y,L[G+W+10]=s.z,L[G+W+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new Bt(y,b)},n.set(a,f),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zg(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Og={[wu]:"LINEAR_TONE_MAPPING",[Eu]:"REINHARD_TONE_MAPPING",[Tu]:"CINEON_TONE_MAPPING",[Au]:"ACES_FILMIC_TONE_MAPPING",[Cu]:"AGX_TONE_MAPPING",[Nl]:"NEUTRAL_TONE_MAPPING",[Ru]:"CUSTOM_TONE_MAPPING"};function kg(i,t,e,n,s,r){const o=new Mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new we;c.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const h=new wp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Se(c,h),f=new Fo(-1,1,1,-1,0,1);let d=null,m=null,x=!1,g,p=null,M=[],E=!1;this.setSize=function(v,y){o.setSize(v,y),a!==null&&a.setSize(v,y),l!==null&&l.setSize(v,y);for(let b=0;b<M.length;b++){const L=M[b];L.setSize&&L.setSize(v,y)}},this.setEffects=function(v){M=v,E=M.length>0&&M[0].isRenderPass===!0;const y=o.width,b=o.height;M.length>0&&a===null&&(a=new Mn(y,b,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new Mn(y,b,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<M.length;L++){const _=M[L];_.setSize&&_.setSize(y,b)}},this.begin=function(v,y){if(x||v.toneMapping===Gn&&M.length===0)return!1;if(p=y,y!==null){const b=y.width,L=y.height;(o.width!==b||o.height!==L)&&this.setSize(b,L)}return E===!1&&v.setRenderTarget(o),g=v.toneMapping,v.toneMapping=Gn,!0},this.hasRenderPass=function(){return E},this.end=function(v,y){v.toneMapping=g,x=!0;let b=o,L=a;for(let _=0;_<M.length;_++){const S=M[_];S.enabled!==!1&&(S.render(v,L,b,y),S.needsSwap!==!1&&(b=L,L=L===a?l:a))}if(d!==v.outputColorSpace||m!==v.toneMapping){d=v.outputColorSpace,m=v.toneMapping,h.defines={},ie.getTransfer(d)===he&&(h.defines.SRGB_TRANSFER="");const _=Og[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(u,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const tf=new Ve,Tl=new ur(1,1),ef=new ku,nf=new $d,sf=new qu,gh=[],xh=[],_h=new Float32Array(16),vh=new Float32Array(9),Mh=new Float32Array(4);function Ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gh[s];if(r===void 0&&(r=new Float32Array(s),gh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Oo(i,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function Wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;Mh.set(n),i.uniformMatrix2fv(this.addr,!1,Mh),Ne(e,n)}}function Xg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;vh.set(n),i.uniformMatrix3fv(this.addr,!1,vh),Ne(e,n)}}function qg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,n))return;_h.set(n),i.uniformMatrix4fv(this.addr,!1,_h),Ne(e,n)}}function Yg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function Jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function tx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function ex(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=e.isReversedDepthBuffer()?Vl:Gl,r=Tl):r=tf,e.setTexture2D(t||r,s)}function nx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||nf,s)}function ix(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sf,s)}function sx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ef,s)}function rx(i){switch(i){case 5126:return Bg;case 35664:return Hg;case 35665:return Gg;case 35666:return Vg;case 35674:return Wg;case 35675:return Xg;case 35676:return qg;case 5124:case 35670:return Yg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return Qg;case 36295:return jg;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ox(i,t){i.uniform1fv(this.addr,t)}function ax(i,t){const e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function lx(i,t){const e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function cx(i,t){const e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function hx(i,t){const e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ux(i,t){const e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fx(i,t){const e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function px(i,t){i.uniform2iv(this.addr,t)}function mx(i,t){i.uniform3iv(this.addr,t)}function gx(i,t){i.uniform4iv(this.addr,t)}function xx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function vx(i,t){i.uniform3uiv(this.addr,t)}function Mx(i,t){i.uniform4uiv(this.addr,t)}function yx(i,t,e){const n=this.cache,s=t.length,r=Oo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Tl:o=tf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Sx(i,t,e){const n=this.cache,s=t.length,r=Oo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||nf,r[o])}function bx(i,t,e){const n=this.cache,s=t.length,r=Oo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sf,r[o])}function wx(i,t,e){const n=this.cache,s=t.length,r=Oo(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ef,r[o])}function Ex(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return lx;case 35666:return cx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return px;case 35668:case 35672:return mx;case 35669:case 35673:return gx;case 5125:return xx;case 36294:return _x;case 36295:return vx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return wx}}class Tx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}}class Ax{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ex(e.type)}}class Rx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function yh(i,t){i.seq.push(t),i.map[t.id]=t}function Cx(i,t,e){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const r=Ma.exec(n),o=Ma.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yh(e,c===void 0?new Tx(a,i,t):new Ax(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Rx(a),yh(e,u)),e=u}}}class ao{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Cx(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Sh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lx=37297;let Px=0;function Ix(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bh=new qt;function Dx(i){ie._getMatrix(bh,ie.workingColorSpace,i);const t=`mat3( ${bh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case po:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ix(i.getShaderSource(t),a)}else return r}function Ux(i,t){const e=Dx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Nx={[wu]:"Linear",[Eu]:"Reinhard",[Tu]:"Cineon",[Au]:"ACESFilmic",[Cu]:"AgX",[Nl]:"Neutral",[Ru]:"Custom"};function Fx(i,t){const e=Nx[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new D;function zx(){ie.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ox(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function kx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Zs(i){return i!==""}function Eh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Th(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Al(i){return i.replace(Hx,Vx)}const Gx=new Map;function Vx(i,t){let e=Zt[t];if(e===void 0){const n=Gx.get(t);if(n!==void 0)e=Zt[n],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Al(e)}const Wx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(i){return i.replace(Wx,Xx)}function Xx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const qx={[eo]:"SHADOWMAP_TYPE_PCF",[Ks]:"SHADOWMAP_TYPE_VSM"};function Yx(i){return qx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $x={[ki]:"ENVMAP_TYPE_CUBE",[bs]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE_UV"};function Kx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":$x[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zx={[bs]:"ENVMAP_MODE_REFRACTION"};function Jx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qx={[Ul]:"ENVMAP_BLENDING_MULTIPLY",[ud]:"ENVMAP_BLENDING_MIX",[fd]:"ENVMAP_BLENDING_ADD"};function jx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qx[i.combine]||"ENVMAP_BLENDING_NONE"}function t_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function e_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Yx(e),c=Kx(e),h=Jx(e),u=jx(e),f=t_(e),d=Ox(e),m=kx(r),x=s.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Zs).join(`
`),p.length>0&&(p+=`
`)):(g=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),p=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?Fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Ux("linearToOutputTexel",e.outputColorSpace),zx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=Al(o),o=Eh(o,e),o=Th(o,e),a=Al(a),a=Eh(a,e),a=Th(a,e),o=Ah(o),a=Ah(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+g+o,v=M+p+a,y=Sh(s,s.VERTEX_SHADER,E),b=Sh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,y),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(A){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(y)||"",O=s.getShaderInfoLog(b)||"",G=U.trim(),J=N.trim(),W=O.trim();let tt=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,b);else{const $=wh(s,y,"vertex"),st=wh(s,b,"fragment");se("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+G+`
`+$+`
`+st)}else G!==""?Gt("WebGLProgram: Program Info Log:",G):(J===""||W==="")&&(H=!1);H&&(A.diagnostics={runnable:tt,programLog:G,vertexShader:{log:J,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(y),s.deleteShader(b),_=new ao(s,x),S=Bx(s,x)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,Lx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}let n_=0;class i_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new s_(t),e.set(t,n)),n}}class s_{constructor(t){this.id=n_++,this.code=t,this.usedTimes=0}}function r_(i){return i===Bi||i===ho||i===uo}function o_(i,t,e,n,s,r){const o=new ql,a=new i_,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,S,C,A,U,N){const O=A.fog,G=U.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,tt=t.get(_.envMap||J,W),H=tt&&tt.mapping===Uo?tt.image.height:null,$=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=st!==void 0?st.length:0;let z=0;G.morphAttributes.position!==void 0&&(z=1),G.morphAttributes.normal!==void 0&&(z=2),G.morphAttributes.color!==void 0&&(z=3);let X,k,B,R;if($){const ge=kn[$];X=ge.vertexShader,k=ge.fragmentShader}else{X=_.vertexShader,k=_.fragmentShader;const ge=a.getVertexShaderStage(_),ae=a.getFragmentShaderStage(_);a.update(_,ge,ae),B=ge.id,R=ae.id}const P=i.getRenderTarget(),V=i.state.buffers.depth.getReversed(),j=U.isInstancedMesh===!0,it=U.isBatchedMesh===!0,Z=!!_.map,at=!!_.matcap,pt=!!tt,Rt=!!_.aoMap,kt=!!_.lightMap,Xt=!!_.bumpMap&&_.wireframe===!1,oe=!!_.normalMap,Ae=!!_.displacementMap,Fe=!!_.emissiveMap,Me=!!_.metalnessMap,Re=!!_.roughnessMap,K=_.anisotropy>0,Xe=_.clearcoat>0,ce=_.dispersion>0,F=_.retroreflectivity>0,w=_.iridescence>0,Q=_.sheen>0,rt=_.transmission>0,lt=K&&!!_.anisotropyMap,mt=Xe&&!!_.clearcoatMap,gt=Xe&&!!_.clearcoatNormalMap,ct=Xe&&!!_.clearcoatRoughnessMap,ut=w&&!!_.iridescenceMap,xt=w&&!!_.iridescenceThicknessMap,Nt=Q&&!!_.sheenColorMap,yt=Q&&!!_.sheenRoughnessMap,_t=!!_.specularMap,Ft=!!_.specularColorMap,Ht=!!_.specularIntensityMap,$t=rt&&!!_.transmissionMap,Y=rt&&!!_.thicknessMap,vt=!!_.gradientMap,ht=!!_.alphaMap,Mt=_.alphaTest>0,Et=!!_.alphaHash,dt=!!_.extensions;let Ot=Gn;_.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const It={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:k,defines:_.defines,customVertexShaderID:B,customFragmentShaderID:R,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:it,batchingColor:it&&U._colorsTexture!==null,instancing:j,instancingColor:j&&U.instanceColor!==null,instancingMorph:j&&U.morphTexture!==null,outputColorSpace:P===null?i.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Z,matcap:at,envMap:pt,envMapMode:pt&&tt.mapping,envMapCubeUVHeight:H,aoMap:Rt,lightMap:kt,bumpMap:Xt,normalMap:oe,displacementMap:Ae,emissiveMap:Fe,normalMapObjectSpace:oe&&_.normalMapType===md,normalMapTangentSpace:oe&&_.normalMapType===Sl,packedNormalMap:oe&&_.normalMapType===Sl&&r_(_.normalMap.format),metalnessMap:Me,roughnessMap:Re,anisotropy:K,anisotropyMap:lt,clearcoat:Xe,clearcoatMap:mt,clearcoatNormalMap:gt,clearcoatRoughnessMap:ct,dispersion:ce,retroreflection:F,iridescence:w,iridescenceMap:ut,iridescenceThicknessMap:xt,sheen:Q,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:_t,specularColorMap:Ft,specularIntensityMap:Ht,transmission:rt,transmissionMap:$t,thicknessMap:Y,gradientMap:vt,opaque:_.transparent===!1&&_.blending===Qs&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:Mt,alphaHash:Et,combine:_.combine,mapUv:Z&&m(_.map.channel),aoMapUv:Rt&&m(_.aoMap.channel),lightMapUv:kt&&m(_.lightMap.channel),bumpMapUv:Xt&&m(_.bumpMap.channel),normalMapUv:oe&&m(_.normalMap.channel),displacementMapUv:Ae&&m(_.displacementMap.channel),emissiveMapUv:Fe&&m(_.emissiveMap.channel),metalnessMapUv:Me&&m(_.metalnessMap.channel),roughnessMapUv:Re&&m(_.roughnessMap.channel),anisotropyMapUv:lt&&m(_.anisotropyMap.channel),clearcoatMapUv:mt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:gt&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&m(_.sheenRoughnessMap.channel),specularMapUv:_t&&m(_.specularMap.channel),specularColorMapUv:Ft&&m(_.specularColorMap.channel),specularIntensityMapUv:Ht&&m(_.specularIntensityMap.channel),transmissionMapUv:$t&&m(_.transmissionMap.channel),thicknessMapUv:Y&&m(_.thicknessMap.channel),alphaMapUv:ht&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(oe||K),vertexNormals:!!G.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Z||ht),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:V,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:z,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Z&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ni,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:dt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&_.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(S,_),M(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const S=d[_.type];let C;if(S){const A=kn[S];C=yp.clone(A.uniforms)}else C=_.uniforms;return C}function v(_,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new e_(i,S,_,s),c.push(C),h.set(S,C)),C}function y(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:v,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:L}}function a_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function l_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ch(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Lh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let M=i[t];return M===void 0?(M={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[t]=M):(M.id=f.id,M.object=f,M.geometry=d,M.material=m,M.materialVariant=o(f),M.groupOrder=x,M.renderOrder=f.renderOrder,M.z=g,M.group=p),t++,M}function l(f,d,m,x,g,p,M){M.reversedDepth===!0&&(g=-g);const E=a(f,d,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(f,d,m,x,g,p){const M=a(f,d,m,x,g,p);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(f,d){e.length>1&&e.sort(f||l_),n.length>1&&n.sort(d||Ch),s.length>1&&s.sort(d||Ch)}function u(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function c_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Lh,i.set(n,[o])):s>=r.length?(o=new Lh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function h_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Ut};break;case"SpotLight":e={position:new D,direction:new D,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function u_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let f_=0;function d_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function p_(i){const t=new h_,e=u_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new Jt,o=new Jt;function a(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,E=0,v=0,y=0,b=0,L=0,_=0,S=0,C=0;c.sort(d_);for(let U=0,N=c.length;U<N;U++){const O=c[U],G=O.color,J=O.intensity,W=O.distance;let tt=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Bi?tt=O.shadow.map.texture:tt=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=G.r*J,u+=G.g*J,f+=G.b*J;else if(O.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(O.sh.coefficients[H],J);C++}else if(O.isSunLight){const H=t.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const $=O.shadow,st=e.get(O);st.shadowIntensity=$.intensity,st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[m]=st,n.sunShadowMap[m]=tt;const ft=$.getViewportCount();for(let z=0;z<ft;z++)n.sunShadowMatrix[x+z]=$.getMatrix(z),n.sunShadowCascade[x+z]=$._cascadeData[z];x+=ft,m++}n.sun[d]=H,d++}else if(O.isDirectionalLight){const H=t.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const $=O.shadow,st=e.get(O);st.shadowIntensity=$.intensity,st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,n.directionalShadow[g]=st,n.directionalShadowMap[g]=tt,n.directionalShadowMatrix[g]=O.shadow.matrix,y++}n.directional[g]=H,g++}else if(O.isSpotLight){const H=t.get(O);H.position.setFromMatrixPosition(O.matrixWorld),H.color.copy(G).multiplyScalar(J),H.distance=W,H.coneCos=Math.cos(O.angle),H.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),H.decay=O.decay,n.spot[M]=H;const $=O.shadow;if(O.map&&(n.spotLightMap[_]=O.map,_++,$.updateMatrices(O),O.castShadow&&S++),n.spotLightMatrix[M]=$.matrix,O.castShadow){const st=e.get(O);st.shadowIntensity=$.intensity,st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,n.spotShadow[M]=st,n.spotShadowMap[M]=tt,L++}M++}else if(O.isRectAreaLight){const H=t.get(O);H.color.copy(G).multiplyScalar(J),H.halfWidth.set(O.width*.5,0,0),H.halfHeight.set(0,O.height*.5,0),n.rectArea[E]=H,E++}else if(O.isPointLight){const H=t.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity),H.distance=O.distance,H.decay=O.decay,O.castShadow){const $=O.shadow,st=e.get(O);st.shadowIntensity=$.intensity,st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,st.shadowCameraNear=$.camera.near,st.shadowCameraFar=$.camera.far,n.pointShadow[p]=st,n.pointShadowMap[p]=tt,n.pointShadowMatrix[p]=O.shadow.matrix,b++}n.point[p]=H,p++}else if(O.isHemisphereLight){const H=t.get(O);H.skyColor.copy(O.color).multiplyScalar(J),H.groundColor.copy(O.groundColor).multiplyScalar(J),n.hemi[v]=H,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.sunLength!==d||A.directionalLength!==g||A.pointLength!==p||A.spotLength!==M||A.rectAreaLength!==E||A.hemiLength!==v||A.numSunShadows!==m||A.numDirectionalShadows!==y||A.numPointShadows!==b||A.numSpotShadows!==L||A.numSpotMaps!==_||A.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,A.sunLength=d,A.directionalLength=g,A.pointLength=p,A.spotLength=M,A.rectAreaLength=E,A.hemiLength=v,A.numSunShadows=m,A.numDirectionalShadows=y,A.numPointShadows=b,A.numSpotShadows=L,A.numSpotMaps=_,A.numLightProbes=C,n.version=f_++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=0;const p=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const v=c[M];if(v.isSunLight){const y=n.sun[u];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),u++}else if(v.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(v.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const y=n.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Ph(i){const t=new p_(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function m_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ph(i),t.set(s,[a])):r>=o.length?(a=new Ph(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`,__=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],v_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Ih=new Jt,Os=new D,ya=new D;function M_(i,t,e){let n=new Kl;const s=new Bt,r=new Bt,o=new de,a=new Ep,l=new Tp,c={},h=e.maxTextureSize,u={[Oi]:on,[on]:Oi,[ni]:ni},f=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:g_,fragmentShader:x_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new we;m.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Se(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let p=this.type;this.render=function(b,L,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===qf&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eo);const S=i.getRenderTarget(),C=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==this.type;N&&L.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(G=>G.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,G=b.length;O<G;O++){const J=b[O],W=J.shadow;if(W===void 0){Gt("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const tt=W.getFrameExtents();s.multiply(tt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,W.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ks){if(J.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Mn(s.x,s.y,{format:Bi,type:bn,minFilter:He,magFilter:He,generateMipmaps:!1}),W.map.texture.name=J.name+".shadowMap",W.map.depthTexture=new ur(s.x,s.y,In),W.map.depthTexture.name=J.name+".shadowMapDepth",W.map.depthTexture.format=hi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Be,W.map.depthTexture.magFilter=Be}else J.isPointLight?(W.map=new ju(s.x),W.map.depthTexture=new vp(s.x,Vn)):(W.map=new Mn(s.x,s.y),W.map.depthTexture=new ur(s.x,s.y,Vn)),W.map.depthTexture.name=J.name+".shadowMap",W.map.depthTexture.format=hi,this.type===eo?(W.map.depthTexture.compareFunction=H?Vl:Gl,W.map.depthTexture.minFilter=He,W.map.depthTexture.magFilter=He):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Be,W.map.depthTexture.magFilter=Be);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const $=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,_);for(let st=0;st<$;st++){const ft=W.getCamera(st);if(J.isPointLight){const z=W.camera,X=W.matrix,k=J.distance||z.far;k!==z.far&&(z.far=k,z.updateProjectionMatrix()),Os.setFromMatrixPosition(J.matrixWorld),z.position.copy(Os),ya.copy(z.position),ya.add(__[st]),z.up.copy(v_[st]),z.lookAt(ya),z.updateMatrixWorld(),X.makeTranslation(-Os.x,-Os.y,-Os.z),Ih.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Ih,z.coordinateSystem,z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,st),i.clear();else{st===0&&(i.setRenderTarget(W.map),i.clear());const z=W.getViewport(st);o.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),U.viewport(o)}n=W.getFrustum(st),v(L,_,ft,J,this.type)}W.isPointLightShadow!==!0&&this.type===Ks&&M(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,C,A)};function M(b,L){const _=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Mn(s.x,s.y,{format:Bi,type:bn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(L,null,_,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(L,null,_,d,x,null)}function E(b,L,_,S){let C=null;const A=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)C=A;else if(C=_.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=C.uuid,N=L.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let G=O[N];G===void 0&&(G=C.clone(),O[N]=G,L.addEventListener("dispose",y)),C=G}if(C.visible=L.visible,C.wireframe=L.wireframe,S===Ks?C.side=L.shadowSide!==null?L.shadowSide:L.side:C.side=L.shadowSide!==null?L.shadowSide:u[L.side],C.alphaMap=L.alphaMap,C.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,C.map=L.map,C.clipShadows=L.clipShadows,C.clippingPlanes=L.clippingPlanes,C.clipIntersection=L.clipIntersection,C.displacementMap=L.displacementMap,C.displacementScale=L.displacementScale,C.displacementBias=L.displacementBias,C.wireframeLinewidth=L.wireframeLinewidth,C.linewidth=L.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=i.properties.get(C);U.light=_}return C}function v(b,L,_,S,C){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Ks)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const N=t.update(b),O=b.material;if(Array.isArray(O)){const G=N.groups;for(let J=0,W=G.length;J<W;J++){const tt=G[J],H=O[tt.materialIndex];if(H&&H.visible){const $=E(b,H,S,C);b.onBeforeShadow(i,b,L,_,N,$,tt),i.renderBufferDirect(_,null,N,$,b,tt),b.onAfterShadow(i,b,L,_,N,$,tt)}}}else if(O.visible){const G=E(b,O,S,C);b.onBeforeShadow(i,b,L,_,N,G,null),i.renderBufferDirect(_,null,N,G,b,null),b.onAfterShadow(i,b,L,_,N,G,null)}}const U=b.children;for(let N=0,O=U.length;N<O;N++)v(U[N],L,_,S,C)}function y(b){b.target.removeEventListener("dispose",y);for(const _ in c){const S=c[_],C=b.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function y_(i,t){function e(){let Y=!1;const vt=new de;let ht=null;const Mt=new de(0,0,0,0);return{setMask:function(Et){ht!==Et&&!Y&&(i.colorMask(Et,Et,Et,Et),ht=Et)},setLocked:function(Et){Y=Et},setClear:function(Et,dt,Ot,It,ge){ge===!0&&(Et*=It,dt*=It,Ot*=It),vt.set(Et,dt,Ot,It),Mt.equals(vt)===!1&&(i.clearColor(Et,dt,Ot,It),Mt.copy(vt))},reset:function(){Y=!1,ht=null,Mt.set(-1,0,0,0)}}}function n(){let Y=!1,vt=!1,ht=null,Mt=null,Et=null;return{setReversed:function(dt){if(vt!==dt){const Ot=t.get("EXT_clip_control");dt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),vt=dt;const It=Et;Et=null,this.setClear(It)}},getReversed:function(){return vt},setTest:function(dt){dt?P(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(dt){ht!==dt&&!Y&&(i.depthMask(dt),ht=dt)},setFunc:function(dt){if(vt&&(dt=Td[dt]),Mt!==dt){switch(dt){case za:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case rr:i.depthFunc(i.LEQUAL);break;case Ba:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=dt}},setLocked:function(dt){Y=dt},setClear:function(dt){Et!==dt&&(Et=dt,vt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){Y=!1,ht=null,Mt=null,Et=null,vt=!1}}}function s(){let Y=!1,vt=null,ht=null,Mt=null,Et=null,dt=null,Ot=null,It=null,ge=null;return{setTest:function(ae){Y||(ae?P(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function(ae){vt!==ae&&!Y&&(i.stencilMask(ae),vt=ae)},setFunc:function(ae,En,Dn){(ht!==ae||Mt!==En||Et!==Dn)&&(i.stencilFunc(ae,En,Dn),ht=ae,Mt=En,Et=Dn)},setOp:function(ae,En,Dn){(dt!==ae||Ot!==En||It!==Dn)&&(i.stencilOp(ae,En,Dn),dt=ae,Ot=En,It=Dn)},setLocked:function(ae){Y=ae},setClear:function(ae){ge!==ae&&(i.clearStencil(ae),ge=ae)},reset:function(){Y=!1,vt=null,ht=null,Mt=null,Et=null,dt=null,Ot=null,It=null,ge=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,v=null,y=null,b=null,L=null,_=new Ut(0,0,0),S=0,C=!1,A=null,U=null,N=null,O=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,tt=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=tt>=2);let $=null,st={};const ft=i.getParameter(i.SCISSOR_BOX),z=i.getParameter(i.VIEWPORT),X=new de().fromArray(ft),k=new de().fromArray(z);function B(Y,vt,ht,Mt){const Et=new Uint8Array(4),dt=i.createTexture();i.bindTexture(Y,dt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<ht;Ot++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,Mt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(vt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return dt}const R={};R[i.TEXTURE_2D]=B(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=B(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[i.TEXTURE_2D_ARRAY]=B(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=B(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),P(i.DEPTH_TEST),o.setFunc(rr),Xt(!1),oe(Tc),P(i.CULL_FACE),Rt(ai);function P(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function V(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function j(Y,vt){return f[Y]!==vt?(i.bindFramebuffer(Y,vt),f[Y]=vt,Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function it(Y,vt){let ht=m,Mt=!1;if(Y){ht=d.get(vt),ht===void 0&&(ht=[],d.set(vt,ht));const Et=Y.textures;if(ht.length!==Et.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ot=Et.length;dt<Ot;dt++)ht[dt]=i.COLOR_ATTACHMENT0+dt;ht.length=Et.length,Mt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,Mt=!0);Mt&&i.drawBuffers(ht)}function Z(Y){return x!==Y?(i.useProgram(Y),x=Y,!0):!1}const at={[ms]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Kf]:i.FUNC_REVERSE_SUBTRACT};at[Zf]=i.MIN,at[Jf]=i.MAX;const pt={[Qf]:i.ZERO,[jf]:i.ONE,[td]:i.SRC_COLOR,[Su]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[nd]:i.DST_ALPHA,[ed]:i.ONE_MINUS_SRC_COLOR,[bu]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[id]:i.ONE_MINUS_DST_ALPHA,[ad]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[cd]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(Y,vt,ht,Mt,Et,dt,Ot,It,ge,ae){if(Y===ai){g===!0&&(V(i.BLEND),g=!1);return}if(g===!1&&(P(i.BLEND),g=!0),Y!==Yf){if(Y!==p||ae!==C){if((M!==ms||y!==ms)&&(i.blendEquation(i.FUNC_ADD),M=ms,y=ms),ae)switch(Y){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ac:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rc:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",Y);break}E=null,v=null,b=null,L=null,_.set(0,0,0),S=0,p=Y,C=ae}return}Et=Et||vt,dt=dt||ht,Ot=Ot||Mt,(vt!==M||Et!==y)&&(i.blendEquationSeparate(at[vt],at[Et]),M=vt,y=Et),(ht!==E||Mt!==v||dt!==b||Ot!==L)&&(i.blendFuncSeparate(pt[ht],pt[Mt],pt[dt],pt[Ot]),E=ht,v=Mt,b=dt,L=Ot),(It.equals(_)===!1||ge!==S)&&(i.blendColor(It.r,It.g,It.b,ge),_.copy(It),S=ge),p=Y,C=!1}function kt(Y,vt){Y.side===ni?V(i.CULL_FACE):P(i.CULL_FACE);let ht=Y.side===on;vt&&(ht=!ht),Xt(ht),Y.blending===Qs&&Y.transparent===!1?Rt(ai):Rt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const Mt=Y.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Fe(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?P(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(Y){A!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),A=Y)}function oe(Y){Y!==Wf?(P(i.CULL_FACE),Y!==U&&(Y===Tc?i.cullFace(i.BACK):Y===Xf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),U=Y}function Ae(Y){Y!==N&&(W&&i.lineWidth(Y),N=Y)}function Fe(Y,vt,ht){Y?(P(i.POLYGON_OFFSET_FILL),(O!==vt||G!==ht)&&(O=vt,G=ht,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,ht))):V(i.POLYGON_OFFSET_FILL)}function Me(Y){Y?P(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function Re(Y){Y===void 0&&(Y=i.TEXTURE0+J-1),$!==Y&&(i.activeTexture(Y),$=Y)}function K(Y,vt,ht){ht===void 0&&($===null?ht=i.TEXTURE0+J-1:ht=$);let Mt=st[ht];Mt===void 0&&(Mt={type:void 0,texture:void 0},st[ht]=Mt),(Mt.type!==Y||Mt.texture!==vt)&&($!==ht&&(i.activeTexture(ht),$=ht),i.bindTexture(Y,vt||R[Y]),Mt.type=Y,Mt.texture=vt)}function Xe(){const Y=st[$];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function w(){try{i.texSubImage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function Q(){try{i.texSubImage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function mt(){try{i.texStorage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function gt(){try{i.texStorage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function ct(){try{i.texImage2D(...arguments)}catch(Y){se("WebGLState:",Y)}}function ut(){try{i.texImage3D(...arguments)}catch(Y){se("WebGLState:",Y)}}function xt(Y){return u[Y]!==void 0?u[Y]:i.getParameter(Y)}function Nt(Y,vt){u[Y]!==vt&&(i.pixelStorei(Y,vt),u[Y]=vt)}function yt(Y){X.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),X.copy(Y))}function _t(Y){k.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),k.copy(Y))}function Ft(Y,vt){let ht=c.get(vt);ht===void 0&&(ht=new WeakMap,c.set(vt,ht));let Mt=ht.get(Y);Mt===void 0&&(Mt=i.getUniformBlockIndex(vt,Y.name),ht.set(Y,Mt))}function Ht(Y,vt){const Mt=c.get(vt).get(Y);l.get(vt)!==Mt&&(i.uniformBlockBinding(vt,Mt,Y.__bindingPointIndex),l.set(vt,Mt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},$=null,st={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,M=null,E=null,v=null,y=null,b=null,L=null,_=new Ut(0,0,0),S=0,C=!1,A=null,U=null,N=null,O=null,G=null,X.set(0,0,i.canvas.width,i.canvas.height),k.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:P,disable:V,bindFramebuffer:j,drawBuffers:it,useProgram:Z,setBlending:Rt,setMaterial:kt,setFlipSided:Xt,setCullFace:oe,setLineWidth:Ae,setPolygonOffset:Fe,setScissorTest:Me,activeTexture:Re,bindTexture:K,unbindTexture:Xe,compressedTexImage2D:ce,compressedTexImage3D:F,texImage2D:ct,texImage3D:ut,pixelStorei:Nt,getParameter:xt,updateUBOMapping:Ft,uniformBlockBinding:Ht,texStorage2D:mt,texStorage3D:gt,texSubImage2D:w,texSubImage3D:Q,compressedTexSubImage2D:rt,compressedTexSubImage3D:lt,scissor:yt,viewport:_t,reset:$t}}function S_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,u=new Set;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(F,w){return m?new OffscreenCanvas(F,w):cr("canvas")}function g(F,w,Q){let rt=1;const lt=ce(F);if((lt.width>Q||lt.height>Q)&&(rt=Q/Math.max(lt.width,lt.height)),rt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const mt=Math.floor(rt*lt.width),gt=Math.floor(rt*lt.height);f===void 0&&(f=x(mt,gt));const ct=w?x(mt,gt):f;return ct.width=mt,ct.height=gt,ct.getContext("2d").drawImage(F,0,0,mt,gt),Gt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+mt+"x"+gt+")."),ct}else return"data"in F&&Gt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),F;return F}function p(F){return F.generateMipmaps}function M(F){i.generateMipmap(F)}function E(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(F,w,Q,rt,lt,mt=!1){if(F!==null){if(i[F]!==void 0)return i[F];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let gt;rt&&(gt=t.get("EXT_texture_norm16"),gt||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ct=w;if(w===i.RED&&(Q===i.FLOAT&&(ct=i.R32F),Q===i.HALF_FLOAT&&(ct=i.R16F),Q===i.UNSIGNED_BYTE&&(ct=i.R8),Q===i.UNSIGNED_SHORT&&gt&&(ct=gt.R16_EXT),Q===i.SHORT&&gt&&(ct=gt.R16_SNORM_EXT)),w===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ct=i.R8UI),Q===i.UNSIGNED_SHORT&&(ct=i.R16UI),Q===i.UNSIGNED_INT&&(ct=i.R32UI),Q===i.BYTE&&(ct=i.R8I),Q===i.SHORT&&(ct=i.R16I),Q===i.INT&&(ct=i.R32I)),w===i.RG&&(Q===i.FLOAT&&(ct=i.RG32F),Q===i.HALF_FLOAT&&(ct=i.RG16F),Q===i.UNSIGNED_BYTE&&(ct=i.RG8),Q===i.UNSIGNED_SHORT&&gt&&(ct=gt.RG16_EXT),Q===i.SHORT&&gt&&(ct=gt.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ct=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ct=i.RG16UI),Q===i.UNSIGNED_INT&&(ct=i.RG32UI),Q===i.BYTE&&(ct=i.RG8I),Q===i.SHORT&&(ct=i.RG16I),Q===i.INT&&(ct=i.RG32I)),w===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ct=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ct=i.RGB16UI),Q===i.UNSIGNED_INT&&(ct=i.RGB32UI),Q===i.BYTE&&(ct=i.RGB8I),Q===i.SHORT&&(ct=i.RGB16I),Q===i.INT&&(ct=i.RGB32I)),w===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ct=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ct=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ct=i.RGBA32UI),Q===i.BYTE&&(ct=i.RGBA8I),Q===i.SHORT&&(ct=i.RGBA16I),Q===i.INT&&(ct=i.RGBA32I)),w===i.RGB&&(Q===i.UNSIGNED_SHORT&&gt&&(ct=gt.RGB16_EXT),Q===i.SHORT&&gt&&(ct=gt.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ct=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ct=i.R11F_G11F_B10F)),w===i.RGBA){const ut=mt?po:ie.getTransfer(lt);Q===i.FLOAT&&(ct=i.RGBA32F),Q===i.HALF_FLOAT&&(ct=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ct=ut===he?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&gt&&(ct=gt.RGBA16_EXT),Q===i.SHORT&&gt&&(ct=gt.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)}return(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function y(F,w){let Q;return F?w===null||w===Vn||w===ar?Q=i.DEPTH24_STENCIL8:w===In?Q=i.DEPTH32F_STENCIL8:w===or&&(Q=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vn||w===ar?Q=i.DEPTH_COMPONENT24:w===In?Q=i.DEPTH_COMPONENT32F:w===or&&(Q=i.DEPTH_COMPONENT16),Q}function b(F,w){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Be&&F.minFilter!==He?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function L(F){const w=F.target;w.removeEventListener("dispose",L),S(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function _(F){const w=F.target;w.removeEventListener("dispose",_),A(w)}function S(F){const w=n.get(F);if(w.__webglInit===void 0)return;const Q=F.source,rt=d.get(Q);if(rt){const lt=rt[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&C(F),Object.keys(rt).length===0&&d.delete(Q)}n.remove(F)}function C(F){const w=n.get(F);i.deleteTexture(w.__webglTexture);const Q=F.source,rt=d.get(Q);delete rt[w.__cacheKey],o.memory.textures--}function A(F){const w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(w.__webglFramebuffer[rt]))for(let lt=0;lt<w.__webglFramebuffer[rt].length;lt++)i.deleteFramebuffer(w.__webglFramebuffer[rt][lt]);else i.deleteFramebuffer(w.__webglFramebuffer[rt]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[rt])}else{if(Array.isArray(w.__webglFramebuffer))for(let rt=0;rt<w.__webglFramebuffer.length;rt++)i.deleteFramebuffer(w.__webglFramebuffer[rt]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let rt=0;rt<w.__webglColorRenderbuffer.length;rt++)w.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[rt]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=F.textures;for(let rt=0,lt=Q.length;rt<lt;rt++){const mt=n.get(Q[rt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(Q[rt])}n.remove(F)}let U=0;function N(){U=0}function O(){return U}function G(F){U=F}function J(){const F=U;return F>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,F}function W(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function tt(F,w){const Q=n.get(F);if(F.isVideoTexture&&K(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Q.__version!==F.version){const rt=F.image;if(rt===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(Q,F,w);return}}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+w)}function H(F,w){const Q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){V(Q,F,w);return}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+w)}function $(F,w){const Q=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){V(Q,F,w);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+w)}function st(F,w){const Q=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Q.__version!==F.version){j(Q,F,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+w)}const ft={[Wa]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},z={[Be]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[Mr]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},X={[xd]:i.NEVER,[Sd]:i.ALWAYS,[_d]:i.LESS,[Gl]:i.LEQUAL,[vd]:i.EQUAL,[Vl]:i.GEQUAL,[Md]:i.GREATER,[yd]:i.NOTEQUAL};function k(F,w){if(w.type===In&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===He||w.magFilter===Wo||w.magFilter===Mr||w.magFilter===Ai||w.minFilter===He||w.minFilter===Wo||w.minFilter===Mr||w.minFilter===Ai)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,ft[w.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,ft[w.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,ft[w.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,z[w.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,z[w.minFilter]),w.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,X[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Be||w.minFilter!==Mr&&w.minFilter!==Ai||w.type===In&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function B(F,w){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",L));const rt=w.source;let lt=d.get(rt);lt===void 0&&(lt={},d.set(rt,lt));const mt=W(w);if(mt!==F.__cacheKey){lt[mt]===void 0&&(lt[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),lt[mt].usedTimes++;const gt=lt[F.__cacheKey];gt!==void 0&&(lt[F.__cacheKey].usedTimes--,gt.usedTimes===0&&C(w)),F.__cacheKey=mt,F.__webglTexture=lt[mt].texture}return Q}function R(F,w,Q){return Math.floor(Math.floor(F/Q)/w)}function P(F,w,Q,rt){const mt=F.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Q,rt,w.data);else{mt.sort((Nt,yt)=>Nt.start-yt.start);let gt=0;for(let Nt=1;Nt<mt.length;Nt++){const yt=mt[gt],_t=mt[Nt],Ft=yt.start+yt.count,Ht=R(_t.start,w.width,4),$t=R(yt.start,w.width,4);_t.start<=Ft+1&&Ht===$t&&R(_t.start+_t.count-1,w.width,4)===Ht?yt.count=Math.max(yt.count,_t.start+_t.count-yt.start):(++gt,mt[gt]=_t)}mt.length=gt+1;const ct=e.getParameter(i.UNPACK_ROW_LENGTH),ut=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Nt=0,yt=mt.length;Nt<yt;Nt++){const _t=mt[Nt],Ft=Math.floor(_t.start/4),Ht=Math.ceil(_t.count/4),$t=Ft%w.width,Y=Math.floor(Ft/w.width),vt=Ht,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,$t,Y,vt,ht,Q,rt,w.data)}F.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ct),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function V(F,w,Q){let rt=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(rt=i.TEXTURE_3D);const lt=B(F,w),mt=w.source;e.bindTexture(rt,F.__webglTexture,i.TEXTURE0+Q);const gt=n.get(mt);if(mt.version!==gt.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ht=ie.getPrimaries(ie.workingColorSpace),Mt=w.colorSpace===Ei?null:ie.getPrimaries(w.colorSpace),Et=w.colorSpace===Ei||ht===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ut=g(w.image,!1,s.maxTextureSize);ut=Xe(w,ut);const xt=r.convert(w.format,w.colorSpace),Nt=r.convert(w.type);let yt=v(w.internalFormat,xt,Nt,w.normalized,w.colorSpace,w.isVideoTexture);k(rt,w);let _t;const Ft=w.mipmaps,Ht=w.isVideoTexture!==!0,$t=gt.__version===void 0||lt===!0,Y=mt.dataReady,vt=b(w,ut);if(w.isDepthTexture)yt=y(w.format===zi,w.type),$t&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,yt,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,yt,ut.width,ut.height,0,xt,Nt,null));else if(w.isDataTexture)if(Ft.length>0){Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,vt,yt,Ft[0].width,Ft[0].height);for(let ht=0,Mt=Ft.length;ht<Mt;ht++)_t=Ft[ht],Ht?Y&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,_t.width,_t.height,xt,Nt,_t.data):e.texImage2D(i.TEXTURE_2D,ht,yt,_t.width,_t.height,0,xt,Nt,_t.data);w.generateMipmaps=!1}else Ht?($t&&e.texStorage2D(i.TEXTURE_2D,vt,yt,ut.width,ut.height),Y&&P(w,ut,xt,Nt)):e.texImage2D(i.TEXTURE_2D,0,yt,ut.width,ut.height,0,xt,Nt,ut.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ht&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,yt,Ft[0].width,Ft[0].height,ut.depth);for(let ht=0,Mt=Ft.length;ht<Mt;ht++)if(_t=Ft[ht],w.format!==pn)if(xt!==null)if(Ht){if(Y)if(w.layerUpdates.size>0){const Et=hh(_t.width,_t.height,w.format,w.type);for(const dt of w.layerUpdates){const Ot=_t.data.subarray(dt*Et/_t.data.BYTES_PER_ELEMENT,(dt+1)*Et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,dt,_t.width,_t.height,1,xt,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,_t.width,_t.height,ut.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,yt,_t.width,_t.height,ut.depth,0,_t.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,_t.width,_t.height,ut.depth,xt,Nt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,yt,_t.width,_t.height,ut.depth,0,xt,Nt,_t.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ht&&$t&&e.texStorage2D(i.TEXTURE_2D,vt,yt,Ft[0].width,Ft[0].height);for(let ht=0,Mt=Ft.length;ht<Mt;ht++)_t=Ft[ht],w.format!==pn?xt!==null?Ht?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,yt,_t.width,_t.height,0,_t.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?Y&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,_t.width,_t.height,xt,Nt,_t.data):e.texImage2D(i.TEXTURE_2D,ht,yt,_t.width,_t.height,0,xt,Nt,_t.data)}else if(w.isDataArrayTexture)if(Ht){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,yt,ut.width,ut.height,ut.depth),Y)if(w.layerUpdates.size>0){const ht=hh(ut.width,ut.height,w.format,w.type);for(const Mt of w.layerUpdates){const Et=ut.data.subarray(Mt*ht/ut.data.BYTES_PER_ELEMENT,(Mt+1)*ht/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Mt,ut.width,ut.height,1,xt,Nt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,xt,Nt,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,ut.width,ut.height,ut.depth,0,xt,Nt,ut.data);else if(w.isData3DTexture)Ht?($t&&e.texStorage3D(i.TEXTURE_3D,vt,yt,ut.width,ut.height,ut.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,xt,Nt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,yt,ut.width,ut.height,ut.depth,0,xt,Nt,ut.data);else if(w.isFramebufferTexture){if($t)if(Ht)e.texStorage2D(i.TEXTURE_2D,vt,yt,ut.width,ut.height);else{let ht=ut.width,Mt=ut.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,yt,ht,Mt,0,xt,Nt,null),ht>>=1,Mt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ut.parentNode!==ht){ht.appendChild(ut),u.add(w),ht.onpaint=Mt=>{const Et=Mt.changedElements;for(const dt of u)Et.includes(dt.image)&&(dt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ut);else{const Et=i.RGBA,dt=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,dt,Ot,ut)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Ht&&$t){const ht=ce(Ft[0]);e.texStorage2D(i.TEXTURE_2D,vt,yt,ht.width,ht.height)}for(let ht=0,Mt=Ft.length;ht<Mt;ht++)_t=Ft[ht],Ht?Y&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,xt,Nt,_t):e.texImage2D(i.TEXTURE_2D,ht,yt,xt,Nt,_t);w.generateMipmaps=!1}else if(Ht){if($t){const ht=ce(ut);e.texStorage2D(i.TEXTURE_2D,vt,yt,ht.width,ht.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Nt,ut)}else e.texImage2D(i.TEXTURE_2D,0,yt,xt,Nt,ut);p(w)&&M(rt),gt.__version=mt.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function j(F,w,Q){if(w.image.length!==6)return;const rt=B(F,w),lt=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Q);const mt=n.get(lt);if(lt.version!==mt.__version||rt===!0){e.activeTexture(i.TEXTURE0+Q);const gt=ie.getPrimaries(ie.workingColorSpace),ct=w.colorSpace===Ei?null:ie.getPrimaries(w.colorSpace),ut=w.colorSpace===Ei||gt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const xt=w.isCompressedTexture||w.image[0].isCompressedTexture,Nt=w.image[0]&&w.image[0].isDataTexture,yt=[];for(let dt=0;dt<6;dt++)!xt&&!Nt?yt[dt]=g(w.image[dt],!0,s.maxCubemapSize):yt[dt]=Nt?w.image[dt].image:w.image[dt],yt[dt]=Xe(w,yt[dt]);const _t=yt[0],Ft=r.convert(w.format,w.colorSpace),Ht=r.convert(w.type),$t=v(w.internalFormat,Ft,Ht,w.normalized,w.colorSpace),Y=w.isVideoTexture!==!0,vt=mt.__version===void 0||rt===!0,ht=lt.dataReady;let Mt=b(w,_t);k(i.TEXTURE_CUBE_MAP,w);let Et;if(xt){Y&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,$t,_t.width,_t.height);for(let dt=0;dt<6;dt++){Et=yt[dt].mipmaps;for(let Ot=0;Ot<Et.length;Ot++){const It=Et[Ot];w.format!==pn?Ft!==null?Y?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ot,0,0,It.width,It.height,Ft,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ot,$t,It.width,It.height,0,It.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ot,0,0,It.width,It.height,Ft,Ht,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ot,$t,It.width,It.height,0,Ft,Ht,It.data)}}}else{if(Et=w.mipmaps,Y&&vt){Et.length>0&&Mt++;const dt=ce(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,$t,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Nt){Y?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,yt[dt].width,yt[dt].height,Ft,Ht,yt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,$t,yt[dt].width,yt[dt].height,0,Ft,Ht,yt[dt].data);for(let Ot=0;Ot<Et.length;Ot++){const ge=Et[Ot].image[dt].image;Y?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ot+1,0,0,ge.width,ge.height,Ft,Ht,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ot+1,$t,ge.width,ge.height,0,Ft,Ht,ge.data)}}else{Y?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ft,Ht,yt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,$t,Ft,Ht,yt[dt]);for(let Ot=0;Ot<Et.length;Ot++){const It=Et[Ot];Y?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ot+1,0,0,Ft,Ht,It.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ot+1,$t,Ft,Ht,It.image[dt])}}}p(w)&&M(i.TEXTURE_CUBE_MAP),mt.__version=lt.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function it(F,w,Q,rt,lt,mt){const gt=r.convert(Q.format,Q.colorSpace),ct=r.convert(Q.type),ut=v(Q.internalFormat,gt,ct,Q.normalized,Q.colorSpace),xt=n.get(w),Nt=n.get(Q);if(Nt.__renderTarget=w,!xt.__hasExternalTextures){const yt=Math.max(1,w.width>>mt),_t=Math.max(1,w.height>>mt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,mt,ut,yt,_t,w.depth,0,gt,ct,null):e.texImage2D(lt,mt,ut,yt,_t,0,gt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Re(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,lt,Nt.__webglTexture,0,Me(w)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,lt,Nt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(F,w,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),w.depthBuffer){const rt=w.depthTexture,lt=rt&&rt.isDepthTexture?rt.type:null,mt=y(w.stencilBuffer,lt),gt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(w),mt,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(w),mt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,mt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,F)}else{const rt=w.textures;for(let lt=0;lt<rt.length;lt++){const mt=rt[lt],gt=r.convert(mt.format,mt.colorSpace),ct=r.convert(mt.type),ut=v(mt.internalFormat,gt,ct,mt.normalized,mt.colorSpace);Re(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(w),ut,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(w),ut,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ut,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(F,w,Q){const rt=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const lt=n.get(w.depthTexture);if(lt.__renderTarget=w,(!lt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),rt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,w.depthTexture.addEventListener("dispose",L)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),k(i.TEXTURE_CUBE_MAP,w.depthTexture);const xt=r.convert(w.depthTexture.format),Nt=r.convert(w.depthTexture.type);let yt;w.depthTexture.format===hi?yt=i.DEPTH_COMPONENT24:w.depthTexture.format===zi&&(yt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,yt,w.width,w.height,0,xt,Nt,null)}}else tt(w.depthTexture,0);const mt=lt.__webglTexture,gt=Me(w),ct=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,ut=w.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===hi)Re(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ct,mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ct,mt,0);else if(w.depthTexture.format===zi)Re(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ct,mt,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,ut,ct,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(F){const w=n.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const rt=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),rt){const lt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,rt.removeEventListener("dispose",lt)};rt.addEventListener("dispose",lt),w.__depthDisposeCallback=lt}w.__boundDepthTexture=rt}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let rt=0;rt<6;rt++)at(w.__webglFramebuffer[rt],F,rt);else{const rt=F.texture.mipmaps;rt&&rt.length>0?at(w.__webglFramebuffer[0],F,0):at(w.__webglFramebuffer,F,0)}else if(Q){w.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[rt]),w.__webglDepthbuffer[rt]===void 0)w.__webglDepthbuffer[rt]=i.createRenderbuffer(),Z(w.__webglDepthbuffer[rt],F,!1);else{const lt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,mt)}}else{const rt=F.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Z(w.__webglDepthbuffer,F,!1);else{const lt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(F,w,Q){const rt=n.get(F);w!==void 0&&it(rt.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&pt(F)}function kt(F){const w=F.texture,Q=n.get(F),rt=n.get(w);F.addEventListener("dispose",_);const lt=F.textures,mt=F.isWebGLCubeRenderTarget===!0,gt=lt.length>1;if(gt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=w.version,o.memory.textures++),mt){Q.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[ct]=[];for(let ut=0;ut<w.mipmaps.length;ut++)Q.__webglFramebuffer[ct][ut]=i.createFramebuffer()}else Q.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ct=0;ct<w.mipmaps.length;ct++)Q.__webglFramebuffer[ct]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(gt)for(let ct=0,ut=lt.length;ct<ut;ct++){const xt=n.get(lt[ct]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Re(F)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ct=0;ct<lt.length;ct++){const ut=lt[ct];Q.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ct]);const xt=r.convert(ut.format,ut.colorSpace),Nt=r.convert(ut.type),yt=v(ut.internalFormat,xt,Nt,ut.normalized,ut.colorSpace,F.isXRRenderTarget===!0),_t=Me(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,yt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(Q.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),k(i.TEXTURE_CUBE_MAP,w);for(let ct=0;ct<6;ct++)if(w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)it(Q.__webglFramebuffer[ct][ut],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ut);else it(Q.__webglFramebuffer[ct],F,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);p(w)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ct=0,ut=lt.length;ct<ut;ct++){const xt=lt[ct],Nt=n.get(xt);let yt=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(yt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Nt.__webglTexture),k(yt,xt),it(Q.__webglFramebuffer,F,xt,i.COLOR_ATTACHMENT0+ct,yt,0),p(xt)&&M(yt)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ct=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,rt.__webglTexture),k(ct,w),w.mipmaps&&w.mipmaps.length>0)for(let ut=0;ut<w.mipmaps.length;ut++)it(Q.__webglFramebuffer[ut],F,w,i.COLOR_ATTACHMENT0,ct,ut);else it(Q.__webglFramebuffer,F,w,i.COLOR_ATTACHMENT0,ct,0);p(w)&&M(ct),e.unbindTexture()}F.depthBuffer&&pt(F)}function Xt(F){const w=F.textures;for(let Q=0,rt=w.length;Q<rt;Q++){const lt=w[Q];if(p(lt)){const mt=E(F),gt=n.get(lt).__webglTexture;e.bindTexture(mt,gt),M(mt),e.unbindTexture()}}}const oe=[],Ae=[];function Fe(F){if(F.samples>0){if(Re(F)===!1){const w=F.textures,Q=F.width,rt=F.height;let lt=i.COLOR_BUFFER_BIT;const mt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(F),ct=w.length>1;if(ct)for(let xt=0;xt<w.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const ut=F.texture.mipmaps;ut&&ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let xt=0;xt<w.length;xt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);const Nt=n.get(w[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,Q,rt,0,0,Q,rt,lt,i.NEAREST),l===!0&&(oe.length=0,Ae.length=0,oe.push(i.COLOR_ATTACHMENT0+xt),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(oe.push(mt),Ae.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let xt=0;xt<w.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[xt]);const Nt=n.get(w[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&l){const w=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Me(F){return Math.min(s.maxSamples,F.samples)}function Re(F){const w=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function K(F){const w=o.render.frame;h.get(F)!==w&&(h.set(F,w),F.update())}function Xe(F,w){const Q=F.colorSpace,rt=F.format,lt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==fo&&Q!==Ei&&(ie.getTransfer(Q)===he?(rt!==pn||lt!==rn)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",Q)),w}function ce(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=N,this.getTextureUnits=O,this.setTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=st,this.rebindTextures=Rt,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function b_(i,t){function e(n,s=Ei){let r;const o=ie.getTransfer(s);if(n===rn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Du)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Pu)return i.BYTE;if(n===Iu)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===Fl)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===pn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===No)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Bl)return i.RG_INTEGER;if(n===Hl)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===$a||n===Ka)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===Qa||n===ja||n===tl||n===ho||n===el)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return r.COMPRESSED_R11_EAC;if(n===tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ho)return r.COMPRESSED_RG11_EAC;if(n===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gl||n===xl||n===_l)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gl)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vl||n===Ml||n===uo||n===yl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`;class T_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Yu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new We({vertexShader:w_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new Wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A_ extends Gi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const x=typeof XRWebGLBinding<"u",g=new T_,p={},M=e.getContextAttributes();let E=null,v=null;const y=[],b=[],L=new Bt;let _=null,S=null;const C=new sn;C.viewport=new de;const A=new sn;A.viewport=new de;const U=[C,A],N=new Np;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let P=y[R];return P===void 0&&(P=new Jo,y[R]=P),P.getTargetRaySpace()},this.getControllerGrip=function(R){let P=y[R];return P===void 0&&(P=new Jo,y[R]=P),P.getGripSpace()},this.getHand=function(R){let P=y[R];return P===void 0&&(P=new Jo,y[R]=P),P.getHandSpace()};function J(R){const P=b.indexOf(R.inputSource);if(P===-1)return;const V=y[P];V!==void 0&&(V.update(R.inputSource,R.frame,c||o),V.dispatchEvent({type:R.type,data:R.inputSource}))}function W(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",tt);for(let R=0;R<y.length;R++){const P=b[R];P!==null&&(b[R]=null,y[R].disconnect(P))}O=null,G=null,g.reset();for(const R in p)delete p[R];if(t.setRenderTarget(E),d=null,f=null,u=null,s=null,v=null,B.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(L.width,L.height,!1),S!==null){const R=S.camera;R.fov=S.fov,R.zoom=S.zoom,R.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){r=R,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(R){c=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(R){if(s=R,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",W),s.addEventListener("inputsourceschange",tt),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,j=null,it=null;M.depth&&(it=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=M.stencil?zi:hi,j=M.stencil?ar:Vn);const Z={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Z),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Mn(f.textureWidth,f.textureHeight,{format:pn,type:rn,depthTexture:new ur(f.textureWidth,f.textureHeight,j,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const V={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,V),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Mn(d.framebufferWidth,d.framebufferHeight,{format:pn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),B.setContext(s),B.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(R){for(let P=0;P<R.removed.length;P++){const V=R.removed[P],j=b.indexOf(V);j>=0&&(b[j]=null,y[j].disconnect(V))}for(let P=0;P<R.added.length;P++){const V=R.added[P];let j=b.indexOf(V);if(j===-1){for(let Z=0;Z<y.length;Z++)if(Z>=b.length){b.push(V),j=Z;break}else if(b[Z]===null){b[Z]=V,j=Z;break}if(j===-1)break}const it=y[j];it&&it.connect(V)}}const H=new D,$=new D;function st(R,P,V){H.setFromMatrixPosition(P.matrixWorld),$.setFromMatrixPosition(V.matrixWorld);const j=H.distanceTo($),it=P.projectionMatrix.elements,Z=V.projectionMatrix.elements,at=it[14]/(it[10]-1),pt=it[14]/(it[10]+1),Rt=(it[9]+1)/it[5],kt=(it[9]-1)/it[5],Xt=(it[8]-1)/it[0],oe=(Z[8]+1)/Z[0],Ae=at*Xt,Fe=at*oe,Me=j/(-Xt+oe),Re=Me*-Xt;if(P.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Re),R.translateZ(Me),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),it[10]===-1)R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{const K=at+Me,Xe=pt+Me,ce=Ae-Re,F=Fe+(j-Re),w=Rt*pt/Xe*K,Q=kt*pt/Xe*K;R.projectionMatrix.makePerspective(ce,F,w,Q,K,Xe),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function ft(R,P){P===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(P.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(s===null)return;let P=R.near,V=R.far;g.texture!==null&&(g.depthNear>0&&(P=g.depthNear),g.depthFar>0&&(V=g.depthFar)),N.near=A.near=C.near=P,N.far=A.far=C.far=V,(O!==N.near||G!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,G=N.far),N.layers.mask=R.layers.mask|6,C.layers.mask=N.layers.mask&-5,A.layers.mask=N.layers.mask&-3;const j=R.parent,it=N.cameras;ft(N,j);for(let Z=0;Z<it.length;Z++)ft(it[Z],j);it.length===2?st(N,C,A):N.projectionMatrix.copy(C.projectionMatrix),S===null&&R.isPerspectiveCamera&&(S={camera:R,fov:R.fov,zoom:R.zoom}),z(R,N,j)};function z(R,P,V){V===null?R.matrix.copy(P.matrixWorld):(R.matrix.copy(V.matrixWorld),R.matrix.invert(),R.matrix.multiply(P.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(P.projectionMatrix),R.projectionMatrixInverse.copy(P.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=hr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(R){l=R,f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(R){return p[R]};let X=null;function k(R,P){if(h=P.getViewerPose(c||o),m=P,h!==null){const V=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let j=!1;V.length!==N.cameras.length&&(N.cameras.length=0,j=!0);for(let pt=0;pt<V.length;pt++){const Rt=V[pt];let kt=null;if(d!==null)kt=d.getViewport(Rt);else{const oe=u.getViewSubImage(f,Rt);kt=oe.viewport,pt===0&&(t.setRenderTargetTextures(v,oe.colorTexture,oe.depthStencilTexture),t.setRenderTarget(v))}let Xt=U[pt];Xt===void 0&&(Xt=new sn,Xt.layers.enable(pt),Xt.viewport=new de,U[pt]=Xt),Xt.matrix.fromArray(Rt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Rt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(kt.x,kt.y,kt.width,kt.height),pt===0&&(N.matrix.copy(Xt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),j===!0&&N.cameras.push(Xt)}const it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const pt=u.getDepthInformation(V[0]);pt&&pt.isValid&&pt.texture&&g.init(pt,s.renderState)}if(it&&it.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let pt=0;pt<V.length;pt++){const Rt=V[pt].camera;if(Rt){let kt=p[Rt];kt||(kt=new Yu,p[Rt]=kt);const Xt=u.getCameraImage(Rt);kt.sourceTexture=Xt}}}}for(let V=0;V<y.length;V++){const j=b[V],it=y[V];j!==null&&it!==void 0&&it.update(j,P,c||o)}X&&X(R,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),m=null}const B=new Ju;B.setAnimationLoop(k),this.setAnimationLoop=function(R){X=R},this.dispose=function(){}}}const R_=new Jt,rf=new qt;rf.set(-1,0,0,0,1,0,0,0,1);function C_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$u(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,E,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===on&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===on&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),E=M.envMap,v=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(rf),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=E*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const b=y.program;n.uniformBlockBinding(v,b)}function c(v,y){let b=s[v.id];b===void 0&&(g(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",M));const L=y.program;n.updateUBOMapping(v,L);const _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){const y=u();v.__bindingPointIndex=y;const b=i.createBuffer(),L=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],b=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let _=0,S=b.length;_<S;_++){const C=b[_];if(Array.isArray(C))for(let A=0,U=C.length;A<U;A++)d(C[A],_,A,L);else d(C,_,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,b,L){if(x(v,y,b,L)===!0){const _=v.__offset,S=v.value;if(Array.isArray(S)){let C=0;for(let A=0;A<S.length;A++){const U=S[A],N=p(U);m(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function m(v,y,b){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,b)}function x(v,y,b,L){const _=v.value,S=y+"_"+b;if(L[S]===void 0)return typeof _=="number"||typeof _=="boolean"?L[S]=_:ArrayBuffer.isView(_)?L[S]=_.slice():L[S]=_.clone(),!0;{const C=L[S];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return L[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(v){const y=v.uniforms;let b=0;const L=16;for(let S=0,C=y.length;S<C;S++){const A=Array.isArray(y[S])?y[S]:[y[S]];for(let U=0,N=A.length;U<N;U++){const O=A[U],G=Array.isArray(O.value)?O.value:[O.value];for(let J=0,W=G.length;J<W;J++){const tt=G[J],H=p(tt),$=b%L,st=$%H.boundary,ft=$+st;b+=st,ft!==0&&L-ft<H.storage&&(b+=L-ft),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=H.storage}}}const _=b%L;return _>0&&(b+=L-_),v.__size=b,v.__cache={},this}function p(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){const y=v.target;y.removeEventListener("dispose",M);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function E(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}const P_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fn=null;function I_(){return Fn===null&&(Fn=new ws(P_,16,16,Bi,bn),Fn.name="DFG_LUT",Fn.minFilter=He,Fn.magFilter=He,Fn.wrapS=ri,Fn.wrapT=ri,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}class D_{constructor(t={}){const{canvas:e=wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=rn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const x=d,g=new Set([Hl,Bl,kl]),p=new Set([rn,Vn,or,ar,zl,Ol]),M=new Uint32Array(4),E=new Int32Array(4),v=new D;let y=null,b=null;const L=[],_=[];let S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let A=!1,U=null,N=null,O=null,G=null;this._outputColorSpace=Ie;let J=0,W=0,tt=null,H=-1,$=null;const st=new de,ft=new de;let z=null;const X=new Ut(0);let k=0,B=e.width,R=e.height,P=1,V=null,j=null;const it=new de(0,0,B,R),Z=new de(0,0,B,R);let at=!1;const pt=new Kl;let Rt=!1,kt=!1;const Xt=new Jt,oe=new D,Ae=new de,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Re(){return tt===null?P:1}let K=n;function Xe(T,q){return e.getContext(T,q)}let ce,F,w,Q,rt,lt,mt,gt,ct,ut,xt,Nt,yt,_t,Ft,Ht,$t,Y,vt,ht,Mt,Et,dt;try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",En,!1),K===null){const q="webgl2";if(K=Xe(q,T),K===null)throw Xe(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(T){throw e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",En,!1),se("WebGLRenderer: "+T.message),T}function Ot(){ce=new Ig(K),ce.init(),Mt=new b_(K,ce),F=new Sg(K,ce,t,Mt),w=new y_(K,ce),F.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),N=K.createFramebuffer(),O=K.createFramebuffer(),G=K.createFramebuffer(),Q=new Ng(K),rt=new a_,lt=new S_(K,ce,w,rt,F,Mt,Q),mt=new Pg(C),gt=new zp(K),Et=new Mg(K,gt),ct=new Dg(K,gt,Q,Et),ut=new zg(K,ct,gt,Et,Q),Y=new Fg(K,F,lt),Ft=new bg(rt),xt=new o_(C,mt,ce,F,Et,Ft),Nt=new C_(C,rt),yt=new c_,_t=new m_(ce),$t=new vg(C,mt,w,ut,m,l),Ht=new M_(C,ut,F),dt=new L_(K,Q,F,w),vt=new yg(K,ce,Q),ht=new Ug(K,ce,Q),Q.programs=xt.programs,C.capabilities=F,C.extensions=ce,C.properties=rt,C.renderLists=yt,C.shadowMap=Ht,C.state=w,C.info=Q}x!==rn&&(S=new kg(x,e.width,e.height,a,s,r));const It=new A_(C,K);this.xr=It,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(B,R,!1))},this.getSize=function(T){return T.set(B,R)},this.setSize=function(T,q,ot=!0){if(It.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,R=q,e.width=Math.floor(T*P),e.height=Math.floor(q*P),ot===!0&&(e.style.width=T+"px",e.style.height=q+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,T,q)},this.getDrawingBufferSize=function(T){return T.set(B*P,R*P).floor()},this.setDrawingBufferSize=function(T,q,ot){B=T,R=q,P=ot,e.width=Math.floor(T*ot),e.height=Math.floor(q*ot),this.setViewport(0,0,T,q)},this.setEffects=function(T){if(x===rn){se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let q=0;q<T.length;q++)if(T[q].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(st)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,q,ot,et){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,q,ot,et),w.viewport(st.copy(it).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(Z)},this.setScissor=function(T,q,ot,et){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,q,ot,et),w.scissor(ft.copy(Z).multiplyScalar(P).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(T){w.setScissorTest(at=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(T=!0,q=!0,ot=!0){let et=0;if(T){let nt=!1;if(tt!==null){const wt=tt.texture.format;nt=g.has(wt)}if(nt){const wt=tt.texture.type,Ct=p.has(wt),bt=$t.getClearColor(),Lt=$t.getClearAlpha(),Dt=bt.r,Kt=bt.g,jt=bt.b;Ct?(M[0]=Dt,M[1]=Kt,M[2]=jt,M[3]=Lt,K.clearBufferuiv(K.COLOR,0,M)):(E[0]=Dt,E[1]=Kt,E[2]=jt,E[3]=Lt,K.clearBufferiv(K.COLOR,0,E))}else et|=K.COLOR_BUFFER_BIT}q&&(et|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(et|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&K.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),U=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",En,!1),$t.dispose(),yt.dispose(),_t.dispose(),rt.dispose(),mt.dispose(),ut.dispose(),Et.dispose(),dt.dispose(),xt.dispose(),It.dispose(),It.removeEventListener("sessionstart",xc),It.removeEventListener("sessionend",_c),Ci.stop()};function ge(T){T.preventDefault(),mo("WebGLRenderer: Context Lost."),A=!0}function ae(){mo("WebGLRenderer: Context Restored."),A=!1;const T=Q.autoReset,q=Ht.enabled,ot=Ht.autoUpdate,et=Ht.needsUpdate,nt=Ht.type;Ot(),Q.autoReset=T,Ht.enabled=q,Ht.autoUpdate=ot,Ht.needsUpdate=et,Ht.type=nt}function En(T){se("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Dn(T){const q=T.target;q.removeEventListener("dispose",Dn),Nf(q)}function Nf(T){Ff(T),rt.remove(T)}function Ff(T){const q=rt.get(T).programs;q!==void 0&&(q.forEach(function(ot){xt.releaseProgram(ot)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,q,ot,et,nt,wt){q===null&&(q=Fe);const Ct=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,bt=kf(T,q,ot,et,nt);w.setMaterial(et,Ct);let Lt=ot.index,Dt=1;if(et.wireframe===!0){if(Lt=ct.getWireframeAttribute(ot),Lt===void 0)return;Dt=2}const Kt=ot.drawRange,jt=ot.attributes.position;let Pt=Kt.start*Dt,le=(Kt.start+Kt.count)*Dt;wt!==null&&(Pt=Math.max(Pt,wt.start*Dt),le=Math.min(le,(wt.start+wt.count)*Dt)),Lt!==null?(Pt=Math.max(Pt,0),le=Math.min(le,Lt.count)):jt!=null&&(Pt=Math.max(Pt,0),le=Math.min(le,jt.count));const Ce=le-Pt;if(Ce<0||Ce===1/0)return;Et.setup(nt,et,bt,ot,Lt);let _e,pe=vt;if(Lt!==null&&(_e=gt.get(Lt),pe=ht,pe.setIndex(_e)),nt.isMesh)et.wireframe===!0?(w.setLineWidth(et.wireframeLinewidth*Re()),pe.setMode(K.LINES)):pe.setMode(K.TRIANGLES);else if(nt.isLine){let qe=et.linewidth;qe===void 0&&(qe=1),w.setLineWidth(qe*Re()),nt.isLineSegments?pe.setMode(K.LINES):nt.isLineLoop?pe.setMode(K.LINE_LOOP):pe.setMode(K.LINE_STRIP)}else nt.isPoints?pe.setMode(K.POINTS):nt.isSprite&&pe.setMode(K.TRIANGLES);if(nt.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))pe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const qe=nt._multiDrawStarts,At=nt._multiDrawCounts,Ke=nt._multiDrawCount,re=Lt?gt.get(Lt).bytesPerElement:1,mn=rt.get(et).currentProgram.getUniforms();for(let Un=0;Un<Ke;Un++)mn.setValue(K,"_gl_DrawID",Un),pe.render(qe[Un]/re,At[Un])}else if(nt.isInstancedMesh)pe.renderInstances(Pt,Ce,nt.count);else if(ot.isInstancedBufferGeometry){const qe=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,At=Math.min(ot.instanceCount,qe);pe.renderInstances(Pt,Ce,At)}else pe.render(Pt,Ce)};function gc(T,q,ot,et){U!==null&&T.isNodeMaterial&&U.setObject(et,T),Rt===!0&&Ft.setState(T,ot,!1),T.transparent===!0&&T.side===ni&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,vr(T,q,et),T.side=Oi,T.needsUpdate=!0,vr(T,q,et),T.side=ni):vr(T,q,et)}this.compile=function(T,q,ot=null){ot===null&&(ot=T),U!==null&&U.renderStart(T,q,ot),b=_t.get(ot),b.init(q),_.push(b),ot.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),T!==ot&&T.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(b.pushLight(nt),nt.castShadow&&b.pushShadow(nt))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),kt=this.localClippingEnabled,Rt=Ft.init(this.clippingPlanes,kt),Rt===!0&&Ft.setGlobalState(this.clippingPlanes,q),U!==null&&Ht.render(b.state.shadowsArray,ot,q);const et=new Set;return T.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const wt=nt.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){const bt=wt[Ct];gc(bt,ot,q,nt),et.add(bt)}else gc(wt,ot,q,nt),et.add(wt)}),b=_.pop(),U!==null&&U.renderEnd(),et},this.compileAsync=function(T,q,ot=null){const et=this.compile(T,q,ot);return new Promise(nt=>{function wt(){if(et.forEach(function(Ct){const Lt=rt.get(Ct).currentProgram;(Lt===void 0||Lt.isReady())&&et.delete(Ct)}),et.size===0){nt(T);return}setTimeout(wt,10)}ce.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Bo=null;function zf(T){Bo&&Bo(T)}function xc(){Ci.stop()}function _c(){Ci.start()}const Ci=new Ju;Ci.setAnimationLoop(zf),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(T){Bo=T,It.setAnimationLoop(T),T===null?Ci.stop():Ci.start()},It.addEventListener("sessionstart",xc),It.addEventListener("sessionend",_c),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;U!==null&&U.renderStart(T,q);const ot=It.enabled===!0&&It.isPresenting===!0,et=S!==null&&(tt===null||ot)&&S.begin(C,tt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(q),q=It.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,q,tt),b=_t.get(T,_.length),b.init(q),b.state.textureUnits=lt.getTextureUnits(),_.push(b),Xt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),pt.setFromProjectionMatrix(Xt,Hn,q.reversedDepth),kt=this.localClippingEnabled,Rt=Ft.init(this.clippingPlanes,kt),y=yt.get(T,L.length),y.init(),L.push(y),It.enabled===!0&&It.isPresenting===!0){const Ct=C.xr.getDepthSensingMesh();Ct!==null&&Ho(Ct,q,-1/0,C.sortObjects)}Ho(T,q,0,C.sortObjects),y.finish(),U!==null&&U.updateLights(b.state.lightsArray),C.sortObjects===!0&&y.sort(V,j),Me=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Me&&$t.addToRenderList(y,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Ft.beginShadows();const nt=b.state.shadowsArray;if(Ht.render(nt,T,q),Rt===!0&&Ft.endShadows(),(et&&S.hasRenderPass())===!1){const Ct=y.opaque,bt=y.transmissive;if(b.setupLights(),q.isArrayCamera){const Lt=q.cameras;if(bt.length>0)for(let Dt=0,Kt=Lt.length;Dt<Kt;Dt++){const jt=Lt[Dt];Mc(Ct,bt,T,jt)}Me&&$t.render(T);for(let Dt=0,Kt=Lt.length;Dt<Kt;Dt++){const jt=Lt[Dt];vc(y,T,jt,jt.viewport)}}else bt.length>0&&Mc(Ct,bt,T,q),Me&&$t.render(T),vc(y,T,q)}tt!==null&&W===0&&(lt.updateMultisampleRenderTarget(tt),lt.updateRenderTargetMipmap(tt)),et&&S.end(C),T.isScene===!0&&T.onAfterRender(C,T,q),Et.resetDefaultState(),H=-1,$=null,_.pop(),_.length>0?(b=_[_.length-1],lt.setTextureUnits(b.state.textureUnits),Rt===!0&&Ft.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?y=L[L.length-1]:y=null,U!==null&&U.renderEnd()};function Ho(T,q,ot,et){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)ot=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(pt)){et&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Xt);const Ct=ut.update(T),bt=T.material;bt.visible&&y.push(T,Ct,bt,ot,Ae.z,null,q)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(pt))){const Ct=ut.update(T),bt=T.material;if(et&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ae.copy(Ct.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(Xt)),Array.isArray(bt)){const Lt=Ct.groups;for(let Dt=0,Kt=Lt.length;Dt<Kt;Dt++){const jt=Lt[Dt],Pt=bt[jt.materialIndex];Pt&&Pt.visible&&y.push(T,Ct,Pt,ot,Ae.z,jt,q)}}else bt.visible&&y.push(T,Ct,bt,ot,Ae.z,null,q)}}const wt=T.children;for(let Ct=0,bt=wt.length;Ct<bt;Ct++)Ho(wt[Ct],q,ot,et)}function vc(T,q,ot,et){const{opaque:nt,transmissive:wt,transparent:Ct}=T;b.setupLightsView(ot),Rt===!0&&Ft.setGlobalState(C.clippingPlanes,ot),et&&w.viewport(st.copy(et)),nt.length>0&&_r(nt,q,ot),wt.length>0&&_r(wt,q,ot),Ct.length>0&&_r(Ct,q,ot),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Mc(T,q,ot,et){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[et.id]===void 0){const Pt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[et.id]=new Mn(1,1,{generateMipmaps:!0,type:Pt?bn:rn,minFilter:Ai,samples:Math.max(4,F.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const wt=b.state.transmissionRenderTarget[et.id],Ct=et.viewport||st;wt.setSize(Ct.z*C.transmissionResolutionScale,Ct.w*C.transmissionResolutionScale);const bt=C.getRenderTarget(),Lt=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(X),k=C.getClearAlpha(),k<1&&C.setClearColor(16777215,.5),C.clear(),Me&&$t.render(ot);const Kt=C.toneMapping;C.toneMapping=Gn;const jt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),b.setupLightsView(et),Rt===!0&&Ft.setGlobalState(C.clippingPlanes,et),_r(T,ot,et),lt.updateMultisampleRenderTarget(wt),lt.updateRenderTargetMipmap(wt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let le=0,Ce=q.length;le<Ce;le++){const _e=q[le],{object:pe,geometry:qe,material:At,group:Ke}=_e;if(At.side===ni&&pe.layers.test(et.layers)){const re=At.side;At.side=on,At.needsUpdate=!0,yc(pe,ot,et,qe,At,Ke),At.side=re,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(lt.updateMultisampleRenderTarget(wt),lt.updateRenderTargetMipmap(wt))}C.setRenderTarget(bt,Lt,Dt),C.setClearColor(X,k),jt!==void 0&&(et.viewport=jt),C.toneMapping=Kt}function _r(T,q,ot){const et=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,wt=T.length;nt<wt;nt++){const Ct=T[nt],{object:bt,geometry:Lt,group:Dt}=Ct;let Kt=Ct.material;Kt.allowOverride===!0&&et!==null&&(Kt=et),bt.layers.test(ot.layers)&&yc(bt,q,ot,Lt,Kt,Dt)}}function yc(T,q,ot,et,nt,wt){U!==null&&nt.isNodeMaterial&&U.setObject(T,nt),T.onBeforeRender(C,q,ot,et,nt,wt),T.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),nt.onBeforeRender(C,q,ot,et,T,wt),nt.transparent===!0&&nt.side===ni&&nt.forceSinglePass===!1?(nt.side=on,nt.needsUpdate=!0,C.renderBufferDirect(ot,q,et,nt,T,wt),nt.side=Oi,nt.needsUpdate=!0,C.renderBufferDirect(ot,q,et,nt,T,wt),nt.side=ni):C.renderBufferDirect(ot,q,et,nt,T,wt),T.onAfterRender(C,q,ot,et,nt,wt)}function vr(T,q,ot){q.isScene!==!0&&(q=Fe);const et=rt.get(T),nt=b.state.lights,wt=b.state.shadowsArray,Ct=nt.state.version,bt=xt.getParameters(T,nt.state,wt,q,ot,b.state.lightProbeGridArray),Lt=xt.getProgramCacheKey(bt);let Dt=et.programs;et.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?q.environment:null,et.fog=q.fog;const Kt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;et.envMap=mt.get(T.envMap||et.environment,Kt),et.envMapRotation=et.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Dn),Dt=new Map,et.programs=Dt);let jt=Dt.get(Lt);if(jt!==void 0){if(et.currentProgram===jt&&et.lightsStateVersion===Ct)return bc(T,bt),jt}else bt.uniforms=xt.getUniforms(T),U!==null&&T.isNodeMaterial&&U.build(T,ot,bt),T.onBeforeCompile(bt,C),jt=xt.acquireProgram(bt,Lt),Dt.set(Lt,jt),et.uniforms=bt.uniforms;const Pt=et.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=Ft.uniform),bc(T,bt),et.needsLights=Hf(T),et.lightsStateVersion=Ct,et.needsLights&&(Pt.ambientLightColor.value=nt.state.ambient,Pt.lightProbe.value=nt.state.probe,Pt.sunLights.value=nt.state.sun,Pt.sunLightShadows.value=nt.state.sunShadow,Pt.directionalLights.value=nt.state.directional,Pt.directionalLightShadows.value=nt.state.directionalShadow,Pt.spotLights.value=nt.state.spot,Pt.spotLightShadows.value=nt.state.spotShadow,Pt.rectAreaLights.value=nt.state.rectArea,Pt.ltc_1.value=nt.state.rectAreaLTC1,Pt.ltc_2.value=nt.state.rectAreaLTC2,Pt.pointLights.value=nt.state.point,Pt.pointLightShadows.value=nt.state.pointShadow,Pt.hemisphereLights.value=nt.state.hemi,Pt.sunShadowMatrix.value=nt.state.sunShadowMatrix,Pt.sunShadowCascade.value=nt.state.sunShadowCascade,Pt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Pt.spotLightMatrix.value=nt.state.spotLightMatrix,Pt.spotLightMap.value=nt.state.spotLightMap,Pt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=b.state.lightProbeGridArray.length>0,et.currentProgram=jt,et.uniformsList=null,jt}function Sc(T){if(T.uniformsList===null){const q=T.currentProgram.getUniforms();T.uniformsList=ao.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function bc(T,q){const ot=rt.get(T);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function Of(T,q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(q.matrixWorld);for(let ot=0,et=T.length;ot<et;ot++){const nt=T[ot];if(nt.texture!==null&&nt.boundingBox.containsPoint(v))return nt}return null}function kf(T,q,ot,et,nt){q.isScene!==!0&&(q=Fe),lt.resetTextureUnits();const wt=q.fog,Ct=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?q.environment:null,bt=tt===null?C.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ie.workingColorSpace,Lt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Dt=mt.get(et.envMap||Ct,Lt),Kt=et.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,jt=!!ot.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Pt=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Ce=!!ot.morphAttributes.color;let _e=Gn;et.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(_e=C.toneMapping);const pe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,qe=pe!==void 0?pe.length:0,At=rt.get(et),Ke=b.state.lights;if(Rt===!0&&(kt===!0||T!==$)){const xe=T===$&&et.id===H;Ft.setState(et,T,xe)}let re=!1;et.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ke.state.version||At.outputColorSpace!==bt||nt.isBatchedMesh&&At.batching===!1||!nt.isBatchedMesh&&At.batching===!0||nt.isBatchedMesh&&At.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&At.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&At.instancing===!1||!nt.isInstancedMesh&&At.instancing===!0||nt.isSkinnedMesh&&At.skinning===!1||!nt.isSkinnedMesh&&At.skinning===!0||nt.isInstancedMesh&&At.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&At.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&At.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&At.instancingMorph===!1&&nt.morphTexture!==null||At.envMap!==Dt||et.fog===!0&&At.fog!==wt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ft.numPlanes||At.numIntersection!==Ft.numIntersection)||At.vertexAlphas!==Kt||At.vertexTangents!==jt||At.morphTargets!==Pt||At.morphNormals!==le||At.morphColors!==Ce||At.toneMapping!==_e||At.morphTargetsCount!==qe||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,At.__version=et.version);let mn=At.currentProgram;re===!0&&(mn=vr(et,q,nt),U&&et.isNodeMaterial&&U.onUpdateProgram(et,mn,At));let Un=!1,ui=!1,qi=!1;const fe=mn.getUniforms(),Ee=At.uniforms;if(w.useProgram(mn.program)&&(Un=!0,ui=!0,qi=!0),et.id!==H&&(H=et.id,ui=!0),At.needsLights){const xe=Of(b.state.lightProbeGridArray,nt);At.lightProbeGrid!==xe&&(At.lightProbeGrid=xe,ui=!0)}if(Un||$!==T){w.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),fe.setValue(K,"projectionMatrix",T.projectionMatrix),fe.setValue(K,"viewMatrix",T.matrixWorldInverse);const di=fe.map.cameraPosition;di!==void 0&&di.setValue(K,oe.setFromMatrixPosition(T.matrixWorld)),F.logarithmicDepthBuffer&&fe.setValue(K,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&fe.setValue(K,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,ui=!0,qi=!0)}if(At.needsLights&&(Ke.state.sunShadowMap.length>0&&fe.setValue(K,"sunShadowMap",Ke.state.sunShadowMap,lt),Ke.state.directionalShadowMap.length>0&&fe.setValue(K,"directionalShadowMap",Ke.state.directionalShadowMap,lt),Ke.state.spotShadowMap.length>0&&fe.setValue(K,"spotShadowMap",Ke.state.spotShadowMap,lt),Ke.state.pointShadowMap.length>0&&fe.setValue(K,"pointShadowMap",Ke.state.pointShadowMap,lt)),nt.isSkinnedMesh){fe.setOptional(K,nt,"bindMatrix"),fe.setOptional(K,nt,"bindMatrixInverse");const xe=nt.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),fe.setValue(K,"boneTexture",xe.boneTexture,lt))}nt.isBatchedMesh&&(fe.setOptional(K,nt,"batchingTexture"),fe.setValue(K,"batchingTexture",nt._matricesTexture,lt),fe.setOptional(K,nt,"batchingIdTexture"),fe.setValue(K,"batchingIdTexture",nt._indirectTexture,lt),fe.setOptional(K,nt,"batchingColorTexture"),nt._colorsTexture!==null&&fe.setValue(K,"batchingColorTexture",nt._colorsTexture,lt));const fi=ot.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Y.update(nt,ot,mn),(ui||At.receiveShadow!==nt.receiveShadow)&&(At.receiveShadow=nt.receiveShadow,fe.setValue(K,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&q.environment!==null&&(Ee.envMapIntensity.value=q.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=I_()),ui){if(fe.setValue(K,"toneMappingExposure",C.toneMappingExposure),At.needsLights&&Bf(Ee,qi),wt&&et.fog===!0&&Nt.refreshFogUniforms(Ee,wt),Nt.refreshMaterialUniforms(Ee,et,P,R,b.state.transmissionRenderTarget[T.id]),At.needsLights&&At.lightProbeGrid){const xe=At.lightProbeGrid;Ee.probesSH.value=xe.texture,Ee.probesMin.value.copy(xe.boundingBox.min),Ee.probesMax.value.copy(xe.boundingBox.max),Ee.probesResolution.value.copy(xe.resolution)}ao.upload(K,Sc(At),Ee,lt)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ao.upload(K,Sc(At),Ee,lt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&fe.setValue(K,"center",nt.center),fe.setValue(K,"modelViewMatrix",nt.modelViewMatrix),fe.setValue(K,"normalMatrix",nt.normalMatrix),fe.setValue(K,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const xe=et.uniformsGroups;for(let di=0,Yi=xe.length;di<Yi;di++){const Ec=xe[di];dt.update(Ec,mn),dt.bind(Ec,mn)}}return mn}function Bf(T,q){T.ambientLightColor.needsUpdate=q,T.lightProbe.needsUpdate=q,T.sunLights.needsUpdate=q,T.sunLightShadows.needsUpdate=q,T.directionalLights.needsUpdate=q,T.directionalLightShadows.needsUpdate=q,T.pointLights.needsUpdate=q,T.pointLightShadows.needsUpdate=q,T.spotLights.needsUpdate=q,T.spotLightShadows.needsUpdate=q,T.rectAreaLights.needsUpdate=q,T.hemisphereLights.needsUpdate=q}function Hf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(T,q,ot){const et=rt.get(T);et.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),rt.get(T.texture).__webglTexture=q,rt.get(T.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:ot,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,q){const ot=rt.get(T);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,ot=0){tt=T,J=q,W=ot;let et=null,nt=!1,wt=!1;if(T){const bt=rt.get(T);if(bt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(K.FRAMEBUFFER,bt.__webglFramebuffer),st.copy(T.viewport),ft.copy(T.scissor),z=T.scissorTest,w.viewport(st),w.scissor(ft),w.setScissorTest(z),H=-1;return}else if(bt.__webglFramebuffer===void 0)lt.setupRenderTarget(T);else if(bt.__hasExternalTextures)lt.rebindTextures(T,rt.get(T.texture).__webglTexture,rt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Kt=T.depthTexture;if(bt.__boundDepthTexture!==Kt){if(Kt!==null&&rt.has(Kt)&&(T.width!==Kt.image.width||T.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(T)}}const Lt=T.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(wt=!0);const Dt=rt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[q])?et=Dt[q][ot]:et=Dt[q],nt=!0):T.samples>0&&lt.useMultisampledRTT(T)===!1?et=rt.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?et=Dt[ot]:et=Dt,st.copy(T.viewport),ft.copy(T.scissor),z=T.scissorTest}else st.copy(it).multiplyScalar(P).floor(),ft.copy(Z).multiplyScalar(P).floor(),z=at;if(ot!==0&&(et=N),w.bindFramebuffer(K.FRAMEBUFFER,et)&&w.drawBuffers(T,et),w.viewport(st),w.scissor(ft),w.setScissorTest(z),nt){const bt=rt.get(T.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+q,bt.__webglTexture,ot)}else if(wt){const bt=q;for(let Lt=0;Lt<T.textures.length;Lt++){const Dt=rt.get(T.textures[Lt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+Lt,Dt.__webglTexture,ot,bt)}}else if(T!==null&&ot!==0){const bt=rt.get(T.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,bt.__webglTexture,ot)}H=-1};function wc(T){const q=rt.get(T);return(q.__readFormat!==T.format||q.__readType!==T.type)&&(q.__readFormat=T.format,q.__readType=T.type,q.__formatReadable=F.textureFormatReadable(T.format),q.__typeReadable=F.textureTypeReadable(T.type)),q}this.readRenderTargetPixels=function(T,q,ot,et,nt,wt,Ct,bt=0){if(!(T&&T.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){w.bindFramebuffer(K.FRAMEBUFFER,Lt);try{const Dt=T.textures[bt],Kt=Dt.format,jt=Dt.type;T.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+bt);const Pt=wc(Dt);if(Pt.__formatReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=T.width-et&&ot>=0&&ot<=T.height-nt&&K.readPixels(q,ot,et,nt,Mt.convert(Kt),Mt.convert(jt),wt)}finally{const Dt=tt!==null?rt.get(tt).__webglFramebuffer:null;w.bindFramebuffer(K.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,q,ot,et,nt,wt,Ct,bt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=rt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt)if(q>=0&&q<=T.width-et&&ot>=0&&ot<=T.height-nt){w.bindFramebuffer(K.FRAMEBUFFER,Lt);const Dt=T.textures[bt],Kt=Dt.format,jt=Dt.type;T.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+bt);const Pt=wc(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,le),K.bufferData(K.PIXEL_PACK_BUFFER,wt.byteLength,K.STREAM_READ),K.readPixels(q,ot,et,nt,Mt.convert(Kt),Mt.convert(jt),0),K.bindBuffer(K.PIXEL_PACK_BUFFER,null);const Ce=tt!==null?rt.get(tt).__webglFramebuffer:null;w.bindFramebuffer(K.FRAMEBUFFER,Ce);const _e=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Ed(K,_e,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,le),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,wt),K.bindBuffer(K.PIXEL_PACK_BUFFER,null),K.deleteBuffer(le),K.deleteSync(_e),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,q=null,ot=0){const et=Math.pow(2,-ot),nt=Math.floor(T.image.width*et),wt=Math.floor(T.image.height*et),Ct=q!==null?q.x:0,bt=q!==null?q.y:0;lt.setTexture2D(T,0),K.copyTexSubImage2D(K.TEXTURE_2D,ot,0,0,Ct,bt,nt,wt),w.unbindTexture()},this.copyTextureToTexture=function(T,q,ot=null,et=null,nt=0,wt=0){let Ct,bt,Lt,Dt,Kt,jt,Pt,le,Ce;const _e=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(ot!==null)Ct=ot.max.x-ot.min.x,bt=ot.max.y-ot.min.y,Lt=ot.isBox3?ot.max.z-ot.min.z:1,Dt=ot.min.x,Kt=ot.min.y,jt=ot.isBox3?ot.min.z:0;else{const Ee=Math.pow(2,-nt);Ct=Math.floor(_e.width*Ee),bt=Math.floor(_e.height*Ee),T.isDataArrayTexture?Lt=_e.depth:T.isData3DTexture?Lt=Math.floor(_e.depth*Ee):Lt=1,Dt=0,Kt=0,jt=0}et!==null?(Pt=et.x,le=et.y,Ce=et.z):(Pt=0,le=0,Ce=0);const pe=Mt.convert(q.format),qe=Mt.convert(q.type);let At;q.isData3DTexture?(lt.setTexture3D(q,0),At=K.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(lt.setTexture2DArray(q,0),At=K.TEXTURE_2D_ARRAY):(lt.setTexture2D(q,0),At=K.TEXTURE_2D),w.activeTexture(K.TEXTURE0),w.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei(K.UNPACK_ALIGNMENT,q.unpackAlignment);const Ke=w.getParameter(K.UNPACK_ROW_LENGTH),re=w.getParameter(K.UNPACK_IMAGE_HEIGHT),mn=w.getParameter(K.UNPACK_SKIP_PIXELS),Un=w.getParameter(K.UNPACK_SKIP_ROWS),ui=w.getParameter(K.UNPACK_SKIP_IMAGES);w.pixelStorei(K.UNPACK_ROW_LENGTH,_e.width),w.pixelStorei(K.UNPACK_IMAGE_HEIGHT,_e.height),w.pixelStorei(K.UNPACK_SKIP_PIXELS,Dt),w.pixelStorei(K.UNPACK_SKIP_ROWS,Kt),w.pixelStorei(K.UNPACK_SKIP_IMAGES,jt);const qi=T.isDataArrayTexture||T.isData3DTexture,fe=q.isDataArrayTexture||q.isData3DTexture;if(T.isDepthTexture){const Ee=rt.get(T),fi=rt.get(q),xe=rt.get(Ee.__renderTarget),di=rt.get(fi.__renderTarget);w.bindFramebuffer(K.READ_FRAMEBUFFER,xe.__webglFramebuffer),w.bindFramebuffer(K.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let Yi=0;Yi<Lt;Yi++)qi&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,rt.get(T).__webglTexture,nt,jt+Yi),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,wt,Ce+Yi)),K.blitFramebuffer(Dt,Kt,Ct,bt,Pt,le,Ct,bt,K.DEPTH_BUFFER_BIT,K.NEAREST);w.bindFramebuffer(K.READ_FRAMEBUFFER,null),w.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(nt!==0||T.isRenderTargetTexture||rt.has(T)){const Ee=rt.get(T),fi=rt.get(q);w.bindFramebuffer(K.READ_FRAMEBUFFER,O),w.bindFramebuffer(K.DRAW_FRAMEBUFFER,G);for(let xe=0;xe<Lt;xe++)qi?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ee.__webglTexture,nt,jt+xe):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Ee.__webglTexture,nt),fe?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,fi.__webglTexture,wt,Ce+xe):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,fi.__webglTexture,wt),nt!==0?K.blitFramebuffer(Dt,Kt,Ct,bt,Pt,le,Ct,bt,K.COLOR_BUFFER_BIT,K.NEAREST):fe?K.copyTexSubImage3D(At,wt,Pt,le,Ce+xe,Dt,Kt,Ct,bt):K.copyTexSubImage2D(At,wt,Pt,le,Dt,Kt,Ct,bt);w.bindFramebuffer(K.READ_FRAMEBUFFER,null),w.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else fe?T.isDataTexture||T.isData3DTexture?K.texSubImage3D(At,wt,Pt,le,Ce,Ct,bt,Lt,pe,qe,_e.data):q.isCompressedArrayTexture?K.compressedTexSubImage3D(At,wt,Pt,le,Ce,Ct,bt,Lt,pe,_e.data):K.texSubImage3D(At,wt,Pt,le,Ce,Ct,bt,Lt,pe,qe,_e):T.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,wt,Pt,le,Ct,bt,pe,qe,_e.data):T.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,wt,Pt,le,_e.width,_e.height,pe,_e.data):K.texSubImage2D(K.TEXTURE_2D,wt,Pt,le,Ct,bt,pe,qe,_e);w.pixelStorei(K.UNPACK_ROW_LENGTH,Ke),w.pixelStorei(K.UNPACK_IMAGE_HEIGHT,re),w.pixelStorei(K.UNPACK_SKIP_PIXELS,mn),w.pixelStorei(K.UNPACK_SKIP_ROWS,Un),w.pixelStorei(K.UNPACK_SKIP_IMAGES,ui),wt===0&&q.generateMipmaps&&K.generateMipmap(At),w.unbindTexture()},this.initRenderTarget=function(T){rt.get(T).__webglFramebuffer===void 0&&lt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?lt.setTextureCube(T,0):T.isData3DTexture?lt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?lt.setTexture2DArray(T,0):lt.setTexture2D(T,0),w.unbindTexture()},this.resetState=function(){J=0,W=0,tt=null,w.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const of="#f7f7f7",je=.0254,Ql={canvas:.038,panel:.022,paper:.012,digital:.012},Mo={face:.75*je,depth:1.5*je,mat:3*je,lip:.25*je,bevel:.125*je},U_={black:"#161616",white:"#efeee9"},N_={white:"#f4f2ec",black:"#1c1c1c"},F_="#faf9f4",yo={strip:.25*je,depth:2*je,gap:.25*je,below:.25*je},z_="#e3cba2",O_="#111111";function jl(i){const t=i.frame??{on:i.kind==="paper",color:"black",mat:"white"};return t.on?t:null}const tc=i=>!!i&&i.style==="float";function k_(i){const t=jl(i),e=t?tc(t)?2*(yo.gap+yo.strip):2*(Mo.mat+Mo.face):0;return[i.w*je+e,i.h*je+e]}const B_=i=>{const t=jl(i);return t?tc(t)?yo.depth:Mo.depth:Ql[i.kind]};async function H_(){const i={},t=async o=>{const a=await fetch(`data/${o}.json?${Date.now()}`,{cache:"no-store"});if(!a.ok)throw new Error(`data/${o}.json: ${a.status}`);return i[o]=a.headers.get("x-rev")??"",a.json()},[e,n,s,r]=await Promise.all([t("catalogue"),t("layout"),t("images"),t("machines")]);return n.machines??(n.machines=[]),{catalogue:e,layout:n,images:s,machines:r,revs:i}}const G_=(i,t)=>`${i}:${t}`,Sa=(i,t,e)=>i.paint[G_(t,e)]??i.defaultPaint;function So(i){if(i.guess)return"";const t=e=>{const n=Math.floor(e+1e-6),s=e-n,r=Math.round(s*8);return r===0?`${n}`:r===8?`${n+1}`:`${n||""}${{1:"⅛",2:"¼",3:"⅜",4:"½",5:"⅝",6:"¾",7:"⅞"}[r]}`};return`${t(i.w)}″ × ${t(i.h)}″`}const bo=i=>i.title.trim()||"Untitled",Dh=.004;function V_(i){const t=i.outline,e=t.t,n=[{id:"N",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z0-e,z1:t.z0},a0:t.x0,a1:t.x1,sides:[1]},{id:"S",outer:!0,axis:"x",t:e,rect:{x0:t.x0-e,x1:t.x1+e,z0:t.z1,z1:t.z1+e},a0:t.x0,a1:t.x1,sides:[-1]},{id:"W",outer:!0,axis:"z",t:e,rect:{x0:t.x0-e,x1:t.x0,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[1]},{id:"E",outer:!0,axis:"z",t:e,rect:{x0:t.x1,x1:t.x1+e,z0:t.z0,z1:t.z1},a0:t.z0,a1:t.z1,sides:[-1]}];for(const s of i.walls)if(Math.abs(s.z1-s.z0)<1e-6){const o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1);n.push({id:s.id,outer:!1,axis:"x",t:s.t,rect:{x0:o,x1:a,z0:s.z0-s.t/2,z1:s.z0+s.t/2},a0:o,a1:a,sides:[1,-1]})}else{const o=Math.min(s.z0,s.z1),a=Math.max(s.z0,s.z1);n.push({id:s.id,outer:!1,axis:"z",t:s.t,rect:{x0:s.x0-s.t/2,x1:s.x0+s.t/2,z0:o,z1:a},a0:o,a1:a,sides:[1,-1]})}return n}const W_=(i,t,e)=>t>i.x0+1e-6&&t<i.x1-1e-6&&e>i.z0+1e-6&&e<i.z1-1e-6,Uh=(i,t,e,n)=>i.some(s=>s.id!==n&&W_(s.rect,t,e));function Nh(i,t,e){let n=[[i,t]];for(const[s,r]of e){const o=[];for(const[a,l]of n){if(r<=a||s>=l){o.push([a,l]);continue}s>a&&o.push([a,s]),r<l&&o.push([r,l])}n=o}return n.filter(([s,r])=>r-s>.05)}function X_(i){var d;const t=V_(i),e=i.outline,n={x0:e.x0,x1:e.x1,z0:e.z0,z1:e.z1},s=i.ceiling,r=i.doorHeight,o={a:i.entrance.x-i.entrance.w/2,b:i.entrance.x+i.entrance.w/2,z:e.z1},a=m=>{const x=i.doors.filter(g=>g.wall===m).map(g=>[Math.min(g.a,g.b),Math.max(g.a,g.b)]);return m==="S"&&x.push([o.a,o.b]),x},l=[],c=[];for(const m of t){for(const g of m.sides){const p=m.rect,M=m.axis==="x"?g>0?p.z1:p.z0:g>0?p.x1:p.x0,E=m.axis==="x"?[0,g]:[g,0],v=[E[1],-E[0]],y=[];for(const S of t){if(S===m)continue;const C=S.rect,A=m.axis==="x"?C.z0:C.x0,U=m.axis==="x"?C.z1:C.x1;if(!(g>0?A<=M+Dh&&U>=M+.01:U>=M-Dh&&A<=M-.01))continue;const O=m.axis==="x"?C.x0:C.z0,G=m.axis==="x"?C.x1:C.z1;y.push([O,G])}const b=m.outer?m.a0:Math.max(m.a0,m.axis==="x"?n.x0:n.z0),L=m.outer?m.a1:Math.min(m.a1,m.axis==="x"?n.x1:n.z1),_=a(m.id);for(const[S,C]of Nh(b,L,y)){const A=U=>{const N=m.axis==="x"?U:M+E[0]*.02,O=m.axis==="x"?M+E[1]*.02:U;return Uh(t,N,O,m.id)};l.push({key:`${m.id}:${g}:${S.toFixed(3)}`,wall:m.id,side:g,axis:m.axis,plane:M,u0:S,u1:C,n:E,right:v,cornerA:A(S-.02),cornerB:A(C+.02),freeA:!m.outer&&!A(S-.02)&&Math.abs(S-m.a0)<1e-6,freeB:!m.outer&&!A(C+.02)&&Math.abs(C-m.a1)<1e-6,outer:m.outer,t:m.t,doors:_.map(([U,N])=>[Math.max(U,S),Math.min(N,C)]).filter(([U,N])=>N-U>.01),color:((d=(i.paintAt??[]).find(U=>U.wall===m.id&&U.side===g&&U.u>=S-1e-6&&U.u<=C+1e-6))==null?void 0:d.color)??Sa(i,m.id,g)})}}if(m.outer)continue;const x=Sa(i,m.id,1);for(const g of[m.a0,m.a1]){const p=g===m.a0?-1:1,M=m.axis==="x"?g+p*.02:(m.rect.x0+m.rect.x1)/2,E=m.axis==="x"?(m.rect.z0+m.rect.z1)/2:g+p*.02;Uh(t,M,E,m.id)||(m.axis==="x"?c.push(vi(g,m.rect.z0,g,m.rect.z1,[p,0,0],s,x)):c.push(vi(m.rect.x0,g,m.rect.x1,g,[0,0,p],s,x)))}for(const[g,p]of a(m.id)){const M=m.rect;m.axis==="x"?(c.push(vi(g,M.z0,g,M.z1,[1,0,0],r,x)),c.push(vi(p,M.z0,p,M.z1,[-1,0,0],r,x)),c.push(ba(g,p,M.z0,M.z1,"x",r,x))):(c.push(vi(M.x0,g,M.x1,g,[0,0,1],r,x)),c.push(vi(M.x0,p,M.x1,p,[0,0,-1],r,x)),c.push(ba(g,p,M.x0,M.x1,"z",r,x)))}}const h=.04,u=Sa(i,"S",-1);c.push(vi(o.a,e.z1,o.a,e.z1+h,[1,0,0],r,u)),c.push(vi(o.b,e.z1,o.b,e.z1+h,[-1,0,0],r,u)),c.push(ba(o.a,o.b,e.z1,e.z1+h,"x",r,u));const f=[];for(const m of t){const x=m.rect,g=m.axis==="x"?[x.x0,x.x1]:[x.z0,x.z1];for(const[p,M]of Nh(g[0],g[1],a(m.id)))f.push(m.axis==="x"?{x0:p,x1:M,z0:x.z0,z1:x.z1}:{x0:x.x0,x1:x.x1,z0:p,z1:M})}return{inner:n,H:s,doorH:r,walls:t,faces:l,extra:c,solids:f,entrance:o,ceilColor:i.ceilingPaint??of,ceilAt:i.ceilingAt??[]}}function vi(i,t,e,n,s,r,o){const a=e-i,l=n-t,c=a*s[2]-l*s[0],[h,u]=c>0?[[i,t],[e,n]]:[[e,n],[i,t]];return{p:[[h[0],0,h[1]],[u[0],0,u[1]],[u[0],r,u[1]],[h[0],r,h[1]]],n:s,color:o}}function ba(i,t,e,n,s,r,o){const a=(c,h)=>s==="x"?[c,r,h]:[h,r,c];return{p:s==="x"?[a(i,e),a(t,e),a(t,n),a(i,n)]:[a(i,e),a(i,n),a(t,n),a(t,e)],n:[0,-1,0],color:o}}const Ri=(i,t,e)=>i.axis==="x"?[t,e,i.plane]:[i.plane,e,t],ec=i=>i.axis==="x"?i.right[0]:i.right[1];function Hi(i,t,e,n,s,r=0){const o=n-t,a=s-e;for(const l of i){let c=0,h=1;const u=(f,d)=>{if(Math.abs(f)<1e-12)return d>=0;const m=d/f;if(f<0){if(m>h)return!1;m>c&&(c=m)}else{if(m<c)return!1;m<h&&(h=m)}return!0};if(u(-o,t-l.x0)&&u(o,l.x1-t)&&u(-a,e-l.z0)&&u(a,l.z1-e)&&h-c>1e-4&&h>r&&c<1-r)return!0}return!1}function q_(i,t=.1){const e=i.inner,n=Math.ceil((e.x1-e.x0)/t),s=Math.ceil((e.z1-e.z0)/t),r=t/2,o=new Int32Array(n*s).fill(-2);for(const c of i.walls){const h=c.rect,u=Math.max(0,Math.floor((h.x0-r-e.x0)/t)),f=Math.min(n-1,Math.floor((h.x1+r-e.x0)/t)),d=Math.max(0,Math.floor((h.z0-r-e.z0)/t)),m=Math.min(s-1,Math.floor((h.z1+r-e.z0)/t));for(let x=d;x<=m;x++)for(let g=u;g<=f;g++)o[x*n+g]=-1}let a=0;const l=[];for(let c=0;c<n*s;c++)if(o[c]===-2){for(o[c]=a,l.push(c);l.length;){const h=l.pop(),u=h%n,f=(h-u)/n;u>0&&o[h-1]===-2&&(o[h-1]=a,l.push(h-1)),u<n-1&&o[h+1]===-2&&(o[h+1]=a,l.push(h+1)),f>0&&o[h-n]===-2&&(o[h-n]=a,l.push(h-n)),f<s-1&&o[h+n]===-2&&(o[h+n]=a,l.push(h+n))}a++}return{x0:e.x0,z0:e.z0,c:t,nx:n,nz:s,id:o,rooms:a}}function Y_(i,t,e){const n=Math.floor((t-i.x0)/i.c),s=Math.floor((e-i.z0)/i.c);return n<0||s<0||n>=i.nx||s>=i.nz?-1:i.id[s*i.nx+n]}function $_(i,t){const e=new Array(t.rooms).fill(i.ceilColor);for(const n of i.ceilAt){const s=Y_(t,n.x,n.z);s>=0&&(e[s]=n.color)}return e}const _s=.125,nr=.086,Fh=.12,wo=1e3,Eo='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',ir=140,To=62,af=46;let ks=null;function K_(i){ks??(ks=document.createElement("canvas").getContext("2d")),ks.font=`300 ${ir}px ${Eo}`;const t=ks.measureText(i.title).width;ks.font=`400 ${To}px ${Eo}`;const e=i.sub?ks.measureText(i.sub).width:0;return{w:(Math.max(t,e)+24)/wo,h:(ir+(i.sub?af+To:0)+30)/wo}}const Rl=.03,Z_=.35,zh=1.1;function J_(i,t){if(i.text){const n=K_(i.text);return[n.w,n.h]}const e=t.get(i.id);return e?k_(e):[.3,.3]}function Q_(i,t){let e=null,n=1/0;for(const s of i.faces){if(s.wall!==t.wall||s.side!==t.side)continue;const r=t.u<s.u0?s.u0-t.u:t.u>s.u1?t.u-s.u1:0;r<n&&(n=r,e=s)}return e}function j_(i,t,e,n,s,r){const o=i.u0+s/2+Rl,a=i.u1-s/2-Rl,l=o>a?(i.u0+i.u1)/2:Math.max(o,Math.min(a,e)),c=r/2+.05,h=t-.12-r/2,u=c>h?t/2:Math.max(c,Math.min(h,n));return{u:l,y:u}}function tv(i,t,e,n,s){const r=ec(i),o=t*r,a=r>0?i.u1:-i.u0;let l=o+n/2+Fh+_s/2;l+_s/2>a-Rl&&(l=o-n/2-Fh-_s/2);const c=Math.max(.2+nr/2,e-s/2+nr/2);return{pos:Ri(i,l*r,c),w:_s,h:nr}}function ev(i,t,e){const n=[],s=[];for(const l of i.hang){if(!l.text&&(!e.has(l.id)||e.get(l.id).off))continue;const c=Q_(t,l);if(!c){n.push(l);continue}const[h,u]=J_(l,e),f=j_(c,t.H,l.u,l.y,h,u);l.u=+f.u.toFixed(4),l.y=+f.y.toFixed(4);const d=l.text?void 0:e.get(l.id);s.push({id:l.id,work:d,text:l.text,place:l,face:c,pos:Ri(c,f.u,f.y),w:h,h:u,depth:d?B_(d):.001,label:d?tv(c,f.u,f.y,h,u):null,over:!1})}const r=l=>l.face.axis==="x"?l.pos[0]:l.pos[2];for(let l=0;l<s.length;l++){const c=s[l];for(const[h,u]of c.face.doors)r(c)+c.w/2>h&&r(c)-c.w/2<u&&c.pos[1]-c.h/2<t.doorH&&(c.over=!0);for(let h=l+1;h<s.length;h++){const u=s[h];if(u.face!==c.face)continue;const f=Math.abs(r(c)-r(u))<(c.w+u.w)/2-.005,d=Math.abs(c.pos[1]-u.pos[1])<(c.h+u.h)/2-.005;f&&d&&(c.over=!0,u.over=!0)}}const o=[],a=new Map;for(const l of s)a.has(l.face)||a.set(l.face,[]),a.get(l.face).push(l);for(const[l,c]of a){const h=c.map((x,g)=>g),u=x=>h[x]===x?x:h[x]=u(h[x]);for(let x=0;x<c.length;x++)for(let g=x+1;g<c.length;g++){const p=c[x],M=c[g];if(p.text||M.text)continue;const E=Math.abs(r(p)-r(M))-(p.w+M.w)/2,v=Math.abs(p.pos[1]-M.pos[1])-(p.h+M.h)/2;Math.max(E,v)<Z_&&(h[u(x)]=u(g))}const f=new Map;c.forEach((x,g)=>{const p=u(g);f.has(p)||f.set(p,[]),f.get(p).push(x)});const d=[l.n[0],0,l.n[1]],m=[l.right[0],0,l.right[1]];for(const x of f.values()){const g=Math.min(...x.map(b=>r(b)-b.w/2)),p=Math.max(...x.map(b=>r(b)+b.w/2)),M=Math.min(...x.map(b=>b.pos[1]-b.h/2)),E=Math.max(...x.map(b=>b.pos[1]+b.h/2)),v=Ri(l,(g+p)/2,(M+E)/2),y={w:p-g,h:E-M};o.push({face:l,centre:v,normal:d,right:m,w:y.w,h:y.h,items:x,lamp:nv(v,d,m,y,x,t)})}}return{placed:o,items:s,homeless:n}}function nv(i,t,e,n,s,r){const o=r.H-.03;let a=zh;for(let M=.2;M<=zh+.25;M+=.05)if(Hi(r.solids,i[0]+t[0]*.02,i[2]+t[2]*.02,i[0]+t[0]*M,i[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[i[0]+t[0]*a,o,i[2]+t[2]*a],c=s.reduce((M,E)=>M+E.depth,0)/Math.max(1,s.length),h=[i[0]+t[0]*c,i[1],i[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let m=0;for(const[M,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[i[0]+e[0]*M*n.w/2-l[0],i[1]+E*n.h/2-l[1],i[2]+e[2]*M*n.w/2-l[2]],y=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,g=[-u[0]/f,-u[1]/f,-u[2]/f],p=g[0]*t[0]+g[2]*t[2];return{p:l,d,cOuter:Math.cos(x),cInner:Math.cos(m),i:f*f/Math.max(.2,p)}}const iv=1.45,lf=.07,cf=.07,hf=.125,sv=.086,uf=.12,rv=1.3,ff=.16,Oh=1e3,kh='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',Bh=140,Hh=62,ov=46,av=1.6;let Bs=null;function df(i){Bs??(Bs=document.createElement("canvas").getContext("2d")),Bs.font=`300 ${Bh}px ${kh}`;const t=Bs.measureText(i.title).width;Bs.font=`400 ${Hh}px ${kh}`;const e=i.sub?Bs.measureText(i.sub).width:0;return{w:(Math.max(t,e)+24)/Oh,h:(Bh+(i.sub?ov+Hh:0)+30)/Oh,colW:[],colH:[]}}const lv=6400;function cv(i){return i.map(t=>({title:bo(t),detail:[t.medium,So(t),t.year].filter(Boolean).join(", ")}))}const hv=i=>(150+cv(i).reduce((t,e)=>t+92+(e.detail?58:0),0))/lv,Gh=.45,Vh=.25,wa=.4,Wh=.12,Xh=1.1,Cl=i=>[i.w*je,i.h*je];function pf(i,t){const e=[],n=[];for(const o of i){const a=o.map(l=>t.get(l)).filter(Boolean);e.push(Math.max(0,...a.map(l=>Cl(l)[0]))),n.push(a.reduce((l,c)=>l+Cl(c)[1],0)+cf*Math.max(0,a.length-1))}const s=e.reduce((o,a)=>o+a,0)+lf*Math.max(0,i.length-1),r=Math.max(0,...n);return{w:s,h:r,colW:e,colH:n}}const uv=i=>i.cols.reduce((t,e)=>t+e.length,0),fv=i=>uv(i)>1?ff:hf,dv=(i,t)=>i.text?df(i.text).w:pf(i.cols,t).w+uf+fv(i);function pv(i){const t=[];let e=i.u0+(i.cornerA?Gh:Vh);const n=i.u1-(i.cornerB?Gh:Vh);for(const[s,r]of[...i.doors].sort((o,a)=>o[0]-a[0]))s-wa-e>.3&&t.push([e,s-wa]),e=Math.max(e,r+wa);return n-e>.3&&t.push([e,n]),t}function mv(i,t){let e=null,n=1/0;for(const s of i.faces){if(s.wall!==t.wall||s.side!==t.side)continue;const r=t.u<s.u0?s.u0-t.u:t.u>s.u1?t.u-s.u1:0;r<n&&(n=r,e=s)}return e}function gv(i,t,e){const n=new Map,s=[];for(const o of i.hang){if(!o.text&&(o.cols=o.cols.map(l=>l.filter(c=>e.has(c))).filter(l=>l.length),!o.cols.length))continue;const a=mv(t,o);if(!a){s.push(o);continue}n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const l=pv(o);if(!l.length){s.push(...a);continue}const c=l.map(()=>[]);for(const u of a){let f=0,d=1/0;l.forEach(([m,x],g)=>{const p=u.u<m?m-u.u:u.u>x?u.u-x:0;p<d&&(d=p,f=g)}),c[f].push(u)}const h=ec(o);l.forEach(([u,f],d)=>{const m=c[d].sort((b,L)=>(b.u-L.u)*h);if(!m.length)return;const x=m.map(b=>dv(b,e)),g=f-u,p=x.reduce((b,L)=>b+L,0);let M=(g-p)/(m.length+1);const E=M<Wh;E&&(M=Wh);const v=p+M*(m.length+1);let y=(h>0?u:-f)+(g-v)/2+M;m.forEach((b,L)=>{const _=b.text?df(b.text):pf(b.cols,e),C=(y+_.w/2)*h;b.u=+C.toFixed(4),r.push(xv(b,o,C,_,e,t,E)),y+=x[L]+M})})}return{placed:r,homeless:s}}function xv(i,t,e,n,s,r,o){const a=ec(t),l=[t.n[0],0,t.n[1]],c=[t.right[0],0,t.right[1]];let h=i.text?av:iv;h-n.h/2<.35&&(h=.35+n.h/2),h+n.h/2>r.H-.3&&(h=Math.max(n.h/2+.1,r.H-.3-n.h/2));const u=[];let f=-n.w/2;i.cols.forEach((E,v)=>{const y=n.colW[v],b=n.colH[v];let L=h+b/2;for(const _ of E){const S=s.get(_),[C,A]=Cl(S),U=f+y/2;u.push({work:S,pos:Ri(t,e+U*a,L-A/2),w:C,h:A,depth:Ql[S.kind]}),L-=A+cf}f+=y+lf});const d=i.cols.flat().map(E=>s.get(E)),m=d.length>1?ff:hf,x=d.length>1?hv(d):sv,g=e+(n.w/2+uf+m/2)*a,p=Math.min(rv,h+n.h/2-x/2),M=Ri(t,e,h);return{def:i,face:t,centre:M,normal:l,right:c,w:n.w,h:n.h,items:u,label:{pos:Ri(t,g,Math.max(p,.3+x/2)),w:m,h:x,works:d},lamp:_v(M,l,c,n,u,r),over:o,text:i.text}}function _v(i,t,e,n,s,r){const o=r.H-.03;let a=Xh;for(let M=.2;M<=Xh+.25;M+=.05)if(Hi(r.solids,i[0]+t[0]*.02,i[2]+t[2]*.02,i[0]+t[0]*M,i[2]+t[2]*M)){a=Math.max(.35,(M-.25)*.8);break}const l=[i[0]+t[0]*a,o,i[2]+t[2]*a],c=s.reduce((M,E)=>M+E.depth,0)/Math.max(1,s.length),h=[i[0]+t[0]*c,i[1],i[2]+t[2]*c],u=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=Math.hypot(u[0],u[1],u[2]),d=[u[0]/f,u[1]/f,u[2]/f];let m=0;for(const[M,E]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const v=[i[0]+e[0]*M*n.w/2-l[0],i[1]+E*n.h/2-l[1],i[2]+e[2]*M*n.w/2-l[2]],y=Math.hypot(v[0],v[1],v[2]);m=Math.max(m,Math.acos(Math.min(1,(v[0]*d[0]+v[1]*d[1]+v[2]*d[2])/y)))}m+=1.5*Math.PI/180;const x=m+6*Math.PI/180,g=[-u[0]/f,-u[1]/f,-u[2]/f],p=g[0]*t[0]+g[2]*t[2];return{p:l,d,cOuter:Math.cos(x),cInner:Math.cos(m),i:f*f/Math.max(.2,p)}}function vv(i,t,e){if(i.version===2||!i.hang.some(o=>"cols"in o))return!1;const{placed:n}=gv(i,t,e),s=[],r=(o,a)=>+(o.axis==="x"?a[0]:a[2]).toFixed(4);for(const o of n){const a=o.face;o.text&&s.push({id:o.def.id,wall:a.wall,side:a.side,u:r(a,o.centre),y:+o.centre[1].toFixed(4),text:o.text});for(const l of o.items)s.push({id:l.work.id,wall:a.wall,side:a.side,u:r(a,l.pos),y:+l.pos[1].toFixed(4)})}return i.hang=s,i.version=2,!0}const Mv=["b","c","s","t","sh","hl"],mf=i=>!i||Mv.every(t=>!i[t]);function gf(i){const t=e=>(i==null?void 0:i[e])??0;return{warm:[1+.1*t("t"),1,1-.1*t("t")],gamma:2**(-.8*t("b")),contrast:2**(.8*t("c")),sh:t("sh"),hl:t("hl"),sat:1+t("s")}}const qh=i=>Math.min(1,Math.max(0,i));function yv(i,t){let e=Math.pow(i,t.gamma);e=qh(.5+(e-.5)*t.contrast);const n=e*(1-e)*(1-e)*6.75,s=e*e*(1-e)*6.75;return qh(e+t.sh*.25*n+t.hl*.25*s)}const Sv=`
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
  }`;function bv(i){const t=gf(i);return{uAdj:{value:mf(i)?0:1},uWarm:{value:new D(...t.warm)},uGamma:{value:t.gamma},uContrast:{value:t.contrast},uShadows:{value:t.sh},uHigh:{value:t.hl},uSat:{value:t.sat}}}let Mi=null;const Yh="http://www.w3.org/2000/svg";function wv(i,t){if(mf(t))return"";Mi||(Mi=document.createElementNS(Yh,"svg"),Mi.setAttribute("width","0"),Mi.setAttribute("height","0"),Mi.style.position="absolute",document.body.append(Mi));const e=`adj-${i}`;let n=Mi.querySelector(`#${CSS.escape(e)}`);n||(n=document.createElementNS(Yh,"filter"),n.id=e,n.setAttribute("color-interpolation-filters","sRGB"),Mi.append(n));const s=gf(t),[r,,o]=s.warm,a=[.2126,.7152,.0722],l=s.sat,c=Array.from({length:65},(u,f)=>yv(f/64,s).toFixed(4)).join(" "),h=[0,1,2].map(u=>[0,1,2].map(f=>((1-l)*a[f]+(u===f?l:0)).toFixed(4)).join(" ")+" 0 0").join("  ")+"  0 0 0 1 0";return n.innerHTML=`<feColorMatrix type="matrix" values="${r} 0 0 0 0  0 1 0 0 0  0 0 ${o} 0 0  0 0 0 1 0"/><feComponentTransfer><feFuncR type="table" tableValues="${c}"/><feFuncG type="table" tableValues="${c}"/><feFuncB type="table" tableValues="${c}"/></feComponentTransfer><feColorMatrix type="matrix" values="${h}"/>`,`url(#${e})`}const Ao=1.62,Ev=12,Tv=6.5,Av=2,Rv=1.7,ds=1.15,$h=.0022,Cv=2.6,Lv=4.6,cn=.3;class Pv{constructor(t){I(this,"pos",new D(6.6,Ao,10.2));I(this,"vel",new D);I(this,"yaw",Math.atan2(6.6-4.2,10.2-.4));I(this,"pitch",.05);I(this,"yawVel",0);I(this,"pitchVel",0);I(this,"keys",new Set);I(this,"taps",new Map);I(this,"frozen",!1);I(this,"moved",!1);I(this,"solids",[]);I(this,"obstacles",[]);I(this,"world",{x0:-22,x1:39,z0:-38,z1:30});this.canvas=t,addEventListener("keydown",e=>{var n,s;e.metaKey||e.ctrlKey||e.altKey||(s=(n=e.target).closest)!=null&&s.call(n,"input, textarea, select")||(this.keys.add(e.code),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)&&e.preventDefault())}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",e=>{document.pointerLockElement!==this.canvas||this.frozen||(this.yaw-=e.movementX*$h,this.pitch=Math.max(-ds,Math.min(ds,this.pitch-e.movementY*$h)),this.moved=!0)})}get locked(){return document.pointerLockElement===this.canvas}tap(t,e){this.taps.set(t,e)}update(t){const e=this.frozen?new Set:this.taps.size?new Set([...this.keys,...this.taps.keys()]):this.keys;for(const[h,u]of this.taps)u-t<=0?this.taps.delete(h):this.taps.set(h,u-t);let n=0;e.has("ArrowLeft")&&(n+=1),e.has("ArrowRight")&&(n-=1),this.yawVel+=(n*Av-this.yawVel)*(1-Math.exp(-9*t)),this.yaw+=this.yawVel*t;let s=0;e.has("ArrowUp")&&(s+=1),e.has("ArrowDown")&&(s-=1),this.pitchVel+=(s*Rv-this.pitchVel)*(1-Math.exp(-9*t)),this.pitch+=this.pitchVel*t,(this.pitch>ds||this.pitch<-ds)&&(this.pitch=Math.max(-ds,Math.min(ds,this.pitch)),this.pitchVel=0);let r=0,o=0;e.has("KeyW")&&(r+=1),e.has("KeyS")&&(r-=1),e.has("KeyD")&&(o+=1),e.has("KeyA")&&(o-=1),(r||o||n||s)&&(this.moved=!0);let a=0,l=0;if(r||o){const h=e.has("ShiftLeft")||e.has("ShiftRight")?Lv:Cv,u=Math.hypot(r,o),f=Math.sin(this.yaw),d=Math.cos(this.yaw);a=(-f*r+d*o)/u*h,l=(-d*r-f*o)/u*h}const c=1-Math.exp(-(r||o?Ev:Tv)*t);if(this.vel.x+=(a-this.vel.x)*c,this.vel.z+=(l-this.vel.z)*c,this.vel.lengthSq()>1e-8){const h=this.pos.x,u=this.pos.z;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.collide();const f=this.pos.x-(h+this.vel.x*t),d=this.pos.z-(u+this.vel.z*t),m=Math.hypot(f,d);if(m>1e-9){const x=f/m,g=d/m,p=this.vel.x*x+this.vel.z*g;p<0&&(this.vel.x-=x*p,this.vel.z-=g*p)}}}collide(){const t=this.pos;for(let e=0;e<2;e++)for(const n of this.solids){const s=Math.max(n.x0,Math.min(t.x,n.x1)),r=Math.max(n.z0,Math.min(t.z,n.z1)),o=t.x-s,a=t.z-r,l=o*o+a*a;if(!(l>=cn*cn))if(l>1e-12){const c=Math.sqrt(l);t.x+=o/c*(cn-c),t.z+=a/c*(cn-c)}else{const c=[t.x-n.x0+cn,n.x1-t.x+cn,t.z-n.z0+cn,n.z1-t.z+cn],h=Math.min(...c);h===c[0]?t.x=n.x0-cn:h===c[1]?t.x=n.x1+cn:h===c[2]?t.z=n.z0-cn:t.z=n.z1+cn}}for(const e of this.obstacles){const n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s),o=cn*.7+e.r;r<o&&r>1e-6&&(t.x=e.x+n/r*o,t.z=e.z+s/r*o)}t.x=Math.max(this.world.x0,Math.min(this.world.x1,t.x)),t.z=Math.max(this.world.z0,Math.min(this.world.z1,t.z))}apply(t){t.position.copy(this.pos),t.rotation.set(this.pitch,this.yaw,0,"YXZ")}}const xf=.0254,Ll=.72,nc=.7,tn=2*xf,Iv=6*xf,Dv=.15,Oe=Ao,Cn=-nc/2,Ln=nc/2,bi=Cn+Iv,ic=Oe+bi,Js=i=>ic-i,_n=i=>ic-i-Dv*Math.SQRT2,Ea=Js(Ln),fr=.46,dr=.3,Ro=.018,Co=-.06,Kh={w:fr-.07,h:dr-.08},Uv=.47,Nv=.5,Zh=.7,pr=new D(0,1,1).normalize(),_f=new D(0,1,-1).normalize(),vf={value:0};function Fv(i,t,e){const n=new Map(t.map(r=>[r.id,r])),s=[];for(const r of i.machines??[]){const o=n.get(r.id);if(!o||o.off)continue;const a=dn.degToRad(r.rot),l=new Jt().makeRotationY(a).setPosition(r.x,0,r.z),c=[Math.sin(a),0,Math.cos(a)],h=new qt().setFromMatrix4(l),u=new D(0,_n(Co),Co).addScaledVector(pr,.004).applyMatrix4(l),f=pr.clone().applyMatrix3(h),d=_f.clone().applyMatrix3(h),m=new D(1,0,0).applyMatrix3(h);s.push({machine:o,spot:r,matrix:l,front:c,screen:{c:u,n:f,up:d,right:m,w:fr,h:dr},lamp:zv(r,c,u,e)})}return s}function zv(i,t,e,n){const s=[i.x+t[0]*Zh,n-.03,i.z+t[2]*Zh],r=new D(e.x-s[0],e.y-s[1],e.z-s[2]),o=r.length();r.divideScalar(o);const a=Math.atan2(.62,o),l=a+dn.degToRad(11);return{p:s,d:[r.x,r.y,r.z],cOuter:Math.cos(l),cInner:Math.cos(a),i:Nv*o*o}}const yi=new Ut("#efeee9"),Hs=new Ut("#3a3a3a");function Ov(){const i=[],t=[],e=[],n=[],s=[],r=g=>new D(g[0],g[1],g[2]),o=(g,p,M,E)=>{const v=new D().crossVectors(r(g[1]).sub(r(g[0])),r(g[2]).sub(r(g[0]))).normalize();v.dot(r(p))<0&&(g=[...g].reverse(),v.negate());const y=i.length/3;for(const b of g)i.push(b[0],b[1],b[2]),t.push(v.x,v.y,v.z),e.push(M.r,M.g,M.b),n.push(E);for(let b=1;b<g.length-1;b++)s.push(y,y+b,y+b+1)},a=-Ll/2,l=Ll/2,c=a+tn,h=l-tn,u=(g,p)=>[g,Js(p),p];o([[a,0,Cn],[l,0,Cn],[l,Oe,Cn],[a,Oe,Cn]],[0,0,-1],yi,0),o([[a,0,Ln],[l,0,Ln],[l,Ea,Ln],[a,Ea,Ln]],[0,0,1],yi,0),o([[a,Oe,Cn],[l,Oe,Cn],[l,Oe,bi],[a,Oe,bi]],[0,1,0],yi,0);for(const[g,p]of[[a,-1],[l,1]])o([[g,0,Cn],[g,0,Ln],[g,Ea,Ln],[g,Oe,bi],[g,Oe,Cn]],[p,0,0],yi,0);const f=bi+tn,d=Ln-tn;o([u(a,d),u(l,d),u(l,Ln),u(a,Ln)],[0,1,1],yi,0),o([u(a,bi),u(l,bi),u(l,f),u(a,f)],[0,1,1],yi,0),o([u(a,f),u(c,f),u(c,d),u(a,d)],[0,1,1],yi,0),o([u(h,f),u(l,f),u(l,d),u(h,d)],[0,1,1],yi,0);const m=Cn+tn;o([[c,_n(d),d],[h,_n(d),d],[h,Js(d),d],[c,Js(d),d]],[0,0,-1],Hs,1),o([[c,_n(m),m],[h,_n(m),m],[h,Oe-tn,m],[c,Oe-tn,m]],[0,0,1],Hs,1),o([[c,Oe-tn,m],[h,Oe-tn,m],[h,Oe-tn,f],[c,Oe-tn,f]],[0,-1,0],Hs,1);for(const[g,p]of[[c,1],[h,-1]])o([[g,_n(m),m],[g,_n(d),d],[g,Js(d),d],[g,Oe-tn,f],[g,Oe-tn,m]],[p,0,0],Hs,1);o([[c,_n(m),m],[h,_n(m),m],[h,_n(d),d],[c,_n(d),d]],[0,1,1],Hs,1);const x=new we;return x.setAttribute("position",new Vt(i,3)),x.setAttribute("normal",new Vt(t,3)),x.setAttribute("aCol",new Vt(e,3)),x.setAttribute("aInner",new Vt(n,1)),x.setIndex(s),x}let Jh=null;const Mf=`
  #define KW ${(Ll/2).toFixed(5)}
  #define KD ${(nc/2).toFixed(5)}
  #define KH ${Oe.toFixed(5)}
  #define KT ${tn.toFixed(5)}
  #define KZB ${Cn.toFixed(5)}
  #define KZF ${Ln.toFixed(5)}
  #define KZC ${bi.toFixed(5)}
  #define KK ${ic.toFixed(5)}
`;function kv(i,t,e,n){return new We({uniforms:{uLP:{value:i},uLD:{value:t},uLC:{value:new Bt(e.cOuter,e.cInner)},uLI:{value:e.i},uAmb:{value:sc},uLCol:{value:xr},uSC:{value:n},uSN:{value:pr.clone()}},vertexShader:`
      attribute vec3 aCol; attribute float aInner;
      varying vec3 vP; varying vec3 vN; varying vec3 vWN; varying vec3 vCol; varying float vInner;
      void main() {
        vP = position; vN = normal; vWN = normalize(mat3(modelMatrix) * normal); vCol = aCol; vInner = aInner;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      ${Mf}
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
      }`})}function Bv(i){return new We({uniforms:{uLP:{value:new D(...i)},uGW:{value:fr/(fr+2*Ro)},uGH:{value:dr/(dr+2*Ro)}},vertexShader:`
      varying vec2 vUv; varying vec3 vW; varying vec3 vN;
      void main() {
        vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,fragmentShader:`
      uniform vec3 uLP; uniform float uGW; uniform float uGH;
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
        float haze = 0.006 * (1.0 - smoothstep(0.0, 1.2, length(g)));
        vec3 col = vec3(0.0035, 0.0042, 0.005) + vec3(0.8, 0.9, 1.0) * haze;
        // (the lens is small: a small, sharp highlight)
        float hl = max(dot(R, l), 0.0);
        col += vec3(1.0, 0.96, 0.9) * (pow(hl, 12000.0) * 0.5 + pow(hl, 1500.0) * 0.04) + vec3(F * 0.02);
        // the bezel: matte black plastic
        vec3 bez = vec3(0.007) * (0.6 + 0.4 * max(dot(n, l), 0.0));
        gl_FragColor = vec4(mix(bez, col, glass), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}const Hv={A:[[[0,0],[0,4],[2,6],[4,4],[4,0]],[[0,2],[4,2]]],B:[[[0,0],[0,6],[3,6],[4,5],[4,4],[3,3],[0,3]],[[3,3],[4,2],[4,1],[3,0],[0,0]]],C:[[[4,0],[0,0],[0,6],[4,6]]],D:[[[0,0],[0,6],[2,6],[4,4],[4,2],[2,0],[0,0]]],E:[[[4,0],[0,0],[0,6],[4,6]],[[0,3],[3,3]]],F:[[[0,0],[0,6],[4,6]],[[0,3],[3,3]]],G:[[[2,2],[4,2],[4,0],[0,0],[0,6],[4,6],[4,4]]],H:[[[0,0],[0,6]],[[4,0],[4,6]],[[0,3],[4,3]]],I:[[[0,0],[4,0]],[[2,0],[2,6]],[[0,6],[4,6]]],J:[[[0,2],[2,0],[4,0],[4,6]]],K:[[[0,0],[0,6]],[[4,6],[0,3],[4,0]]],L:[[[0,6],[0,0],[4,0]]],M:[[[0,0],[0,6],[2,4],[4,6],[4,0]]],N:[[[0,0],[0,6],[4,0],[4,6]]],O:[[[0,0],[0,6],[4,6],[4,0],[0,0]]],P:[[[0,0],[0,6],[4,6],[4,3],[0,3]]],Q:[[[0,0],[0,6],[4,6],[4,2],[2,0],[0,0]],[[2,2],[4,0]]],R:[[[0,0],[0,6],[4,6],[4,3],[0,3]],[[1,3],[4,0]]],S:[[[4,6],[0,6],[0,3],[4,3],[4,0],[0,0]]],T:[[[0,6],[4,6]],[[2,6],[2,0]]],U:[[[0,6],[0,0],[4,0],[4,6]]],V:[[[0,6],[2,0],[4,6]]],W:[[[0,6],[0,0],[2,2],[4,0],[4,6]]],X:[[[0,0],[4,6]],[[0,6],[4,0]]],Y:[[[0,6],[2,4],[4,6]],[[2,4],[2,0]]],Z:[[[0,6],[4,6],[0,0],[4,0]]],0:[[[0,0],[0,6],[4,6],[4,0],[0,0]]],1:[[[1,5],[2,6],[2,0]],[[1,0],[3,0]]],2:[[[0,6],[4,6],[4,3],[0,3],[0,0],[4,0]]],3:[[[0,0],[4,0],[4,6],[0,6]],[[0,3],[4,3]]],4:[[[0,6],[0,3],[4,3]],[[4,6],[4,0]]],5:[[[4,6],[0,6],[0,3],[4,3],[4,0],[0,0]]],6:[[[4,6],[0,6],[0,0],[4,0],[4,3],[0,3]]],7:[[[0,6],[4,6],[4,0]]],8:[[[0,0],[4,0],[4,6],[0,6],[0,0]],[[0,3],[4,3]]],9:[[[4,3],[0,3],[0,6],[4,6],[4,0],[0,0]]],"-":[[[1,3],[3,3]]],".":[[[2,0],[2,.35]]],",":[[[2,.5],[1.4,-1]]],"'":[[[2,6],[2,4.6]]],":":[[[2,1],[2,1.35]],[[2,4],[2,4.35]]],"/":[[[0,0],[4,6]]],"!":[[[2,6],[2,1.6]],[[2,0],[2,.35]]],"?":[[[0,4],[0,6],[4,6],[4,3],[2,3],[2,1.6]],[[2,0],[2,.35]]],"&":[[[4,0],[1,4],[1,6],[3,6],[3,5],[0,2],[0,0],[2,0],[4,2]]],"~":[[[0,3],[1,4],[3,2],[4,3]]],"→":[[[0,3],[4,3]],[[2.6,4.4],[4,3],[2.6,1.6]]],"–":[[[1,3],[3,3]]],"—":[[[0,3],[4,3]]]},Ta=6,Qh=10;function Gv(i){const t=i.toUpperCase().trim();if(/[|\n]/.test(t))return t.split(/\s*[|\n]\s*/).filter(Boolean);if(t.length<=11||!t.includes(" "))return[t];let e=[t],n=1/0;const s=t.split(/\s+/);for(let r=1;r<s.length;r++){const o=s.slice(0,r).join(" "),a=s.slice(r).join(" "),l=Math.max(o.length,a.length);l<n&&(n=l,e=[o,a])}return e}function Vv(i,t,e){const n=Gv(i),s=Math.max(...n.map(l=>l.length*Ta-2),1),r=n.length*6+(n.length-1)*(Qh-6),o=Math.min(t/s,e/r,.07/6),a=[];return n.forEach((l,c)=>{const h=(l.length*Ta-2)*o,u=r*o/2-c*Qh*o;[...l].forEach((f,d)=>{const m=Hv[f];if(!m)return;const x=-h/2+d*Ta*o,g=u-6*o;for(const p of m)for(let M=0;M<p.length-1;M++){const E=p[M],v=p[M+1];a.push([x+E[0]*o,g+E[1]*o,x+v[0]*o,g+v[1]*o])}})}),{segs:a,u:o}}function Wv(i){const t=[],e=[],n=[],s=[],r=[];i.forEach((l,c)=>{const h=t.length/2;for(const[u,f]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(l[0],l[1]),e.push(l[2],l[3]),n.push(u,f),s.push(c*7.31+.5);r.push(h,h+1,h+2,h,h+2,h+3)});const o=new we,a=[];for(let l=0;l<t.length/2;l++)a.push((t[2*l]+e[2*l])/2,(t[2*l+1]+e[2*l+1])/2,0);return o.setAttribute("position",new Vt(a,3)),o.setAttribute("aA",new Vt(t,2)),o.setAttribute("aB",new Vt(e,2)),o.setAttribute("aCorner",new Vt(n,2)),o.setAttribute("aSeed",new Vt(s,1)),o.setIndex(r),o.boundingSphere=new Wi(new D,.4),o}function Xv(i,t){return new We({uniforms:{uTime:vf,uSeed:{value:t},uBeam:{value:Math.max(7e-4,i*.085)},uHalo:{value:Math.max(.0022,i*.3)},uExt:{value:Math.max(.009,i*1.3)},uJit:{value:i*.07},uMis:{value:i*.12},uWob:{value:i*.06}},transparent:!0,depthWrite:!1,blending:Fa,toneMapped:!1,vertexShader:`
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
      uniform float uBeam; uniform float uHalo; uniform float uExt;
      varying vec2 vP; varying vec2 vA; varying vec2 vB; varying float vBright;
      void main() {
        vec2 ab = vB - vA, ap = vP - vA;
        float h = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-9), 0.0, 1.0);
        float d = length(ap - ab * h);
        float core = exp(-(d * d) / (uBeam * uBeam));
        // the glow round the line dies away before the edge of its quad
        float halo = (0.20 * exp(-d / uHalo) + 0.035 * exp(-d / (uHalo * 2.5))) * (1.0 - smoothstep(0.45 * uExt, uExt, d));
        float dwell = 0.45 * (exp(-dot(vP - vA, vP - vA) / (uBeam * uBeam * 1.8)) + exp(-dot(vP - vB, vP - vB) / (uBeam * uBeam * 1.8)));
        float I = (core * 1.25 + halo + dwell) * vBright;
        gl_FragColor = vec4(vec3(0.90, 0.95, 1.0) * I, 1.0);
        #include <colorspace_fragment>
      }`})}function qv(i){Jh??(Jh=Ov());const t=new Pe;t.matrixAutoUpdate=!1,t.matrix.copy(i.matrix);const e=i.matrix.clone().invert(),n=new qt().setFromMatrix4(e),s=new D(...i.lamp.p).applyMatrix4(e),r=new D(...i.lamp.d).applyMatrix3(n),o=new D(0,_n(Co),Co),a=kv(s,r,i.lamp,o),l=new Se(Jh,a),c=new Jt().makeBasis(new D(1,0,0),_f,pr).setPosition(o.clone().addScaledVector(pr,.004)),h=Bv(i.lamp.p),u=new Wn(fr+2*Ro,dr+2*Ro),f=new Se(u,h);f.matrixAutoUpdate=!1,f.matrix.copy(c);const{segs:d,u:m}=Vv(i.machine.name,Kh.w,Kh.h),x=Wv(d);let g=0;for(const E of i.machine.id)g=(g*31+E.charCodeAt(0))%997;const p=Xv(m,g/997),M=new Se(x,p);M.matrixAutoUpdate=!1,M.matrix.copy(c).multiply(new Jt().makeTranslation(0,0,8e-4)),M.renderOrder=2,t.add(l,f,M),t.updateMatrixWorld(!0);for(const E of[l,f,M])E.userData.machine=i.machine.id;return{placed:i,group:t,meshes:[l,f,M],dispose(){a.dispose(),h.dispose(),u.dispose(),x.dispose(),p.dispose()}}}const lo=16;function Yv(i){const t=(e,n)=>{const s=e.slice(0,lo);for(;s.length<lo;)s.push(n());return s};return{n:Math.min(lo,i.length),lp:t(i.map(e=>new D(...e.lamp.p)),()=>new D),ld:t(i.map(e=>new D(...e.lamp.d)),()=>new D(0,-1,0)),lc:t(i.map(e=>new Bt(e.lamp.cOuter,e.lamp.cInner)),()=>new Bt(1,1)),li:t(i.map(e=>e.lamp.i),()=>0),box:t(i.map(e=>{const n=dn.degToRad(e.spot.rot);return new de(e.spot.x,e.spot.z,Math.cos(n),Math.sin(n))}),()=>new de(0,0,1,0))}}const $v=i=>({uMN:{value:i.n},uMLP:{value:i.lp},uMLD:{value:i.ld},uMLC:{value:i.lc},uMLI:{value:i.li},uMB:{value:i.box}}),Kv=`
  #define MAXM ${lo}
  #define LENS 0.06
  ${Mf}
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
`,ti=16,gs=48,xr=new Ut(1,.965,.915),sc=.06,Zv=.3,yf=.05,rc=4,Jv=.6,Sf=`
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) { float s = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { s += a * vnoise(p); p = p * 2.03 + 17.1; a *= 0.5; } return s; }
`,oc=`
uniform sampler2D uAO;
uniform sampler2D uLT;
uniform vec2 uBO;
uniform vec4 uAoXf;
uniform vec4 uLtXf;
vec2 bakeUv(vec2 xz, vec4 xf) { return (xz - uBO) * xf.xy + xf.zw; }
float bakedAO(vec2 xz) { return texture2D(uAO, bakeUv(xz, uAoXf)).r; }
vec3 bakedLight(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).rgb; }
float bakedSpill(vec2 xz) { return texture2D(uLT, bakeUv(xz, uLtXf)).a; }
`,bf=`
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
`,ac=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,lc=i=>({uAO:{value:i.ao},uLT:{value:i.light},uBO:{value:i.origin},uAoXf:{value:i.aoXf},uLtXf:{value:i.lightXf}}),wf=i=>({uCeilTex:{value:i.tex},uCeilO:{value:i.origin},uCeilS:{value:i.scale}}),Ef=`
  uniform sampler2D uCeilTex; uniform vec2 uCeilO; uniform vec2 uCeilS;
  vec3 ceilingAt(vec2 xz) { return texture2D(uCeilTex, (xz - uCeilO) * uCeilS).rgb; }
`;function jh(i,t,e,n,s){const r=(o,a,l)=>{const c=o.slice(0,a);for(;c.length<a;)c.push(l());return c};return new We({uniforms:{uN:{value:Math.min(i.lamps.length,ti)},uLP:{value:r(i.lamps.map(o=>o.p),ti,()=>new D)},uLD:{value:r(i.lamps.map(o=>o.d),ti,()=>new D(0,-1,0))},uLC:{value:r(i.lamps.map(o=>o.c),ti,()=>new Bt(1,1))},uLI:{value:r(i.lamps.map(o=>o.i),ti,()=>0)},uB:{value:Math.min(i.boxes.length,gs)},uBC:{value:r(i.boxes.map(o=>o.c),gs,()=>new D(0,-99,0))},uBS:{value:r(i.boxes.map(o=>o.s),gs,()=>new D)},uBL:{value:r(i.boxes.map(o=>o.lamp),gs,()=>0)},uFN:{value:i.normal},uFR:{value:i.right},uAxisX:{value:i.axisX?1:0},uU0:{value:i.u0},uU1:{value:i.u1},uCA:{value:i.cornerA?1:0},uCB:{value:i.cornerB?1:0},uH:{value:e},uAlb:{value:t},uAmb:{value:sc},uBounceK:{value:rc},uLampK:{value:Zv},uCeilK:{value:yf},...wf(s),uLCol:{value:xr},...lc(n)},vertexShader:bf,fragmentShader:`
      #define MAXL ${ti}
      #define MAXB ${gs}
      uniform int uN;
      uniform vec3 uLP[MAXL]; uniform vec3 uLD[MAXL]; uniform vec2 uLC[MAXL]; uniform float uLI[MAXL];
      uniform int uB;
      uniform vec3 uBC[MAXB]; uniform vec3 uBS[MAXB]; uniform float uBL[MAXB];
      uniform vec3 uFN; uniform vec3 uFR;
      uniform float uAxisX, uU0, uU1, uCA, uCB, uH;
      uniform vec3 uAlb; uniform float uAmb; uniform float uBounceK; uniform float uLampK; uniform float uCeilK; uniform vec3 uLCol;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${Ef}
      ${oc}
      ${Sf}
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
        ${ac}
      }`})}function Qv(i,t){return new We({uniforms:{uAmb:{value:yf},uBounceK:{value:rc},...wf(t),...lc(i)},vertexShader:bf,fragmentShader:`
      uniform float uAmb; uniform float uBounceK;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv;
      ${oc}
      ${Ef}
      void main() {
        float ao = mix(1.0, bakedAO(vW.xz), 0.3);
        vec3 l = vec3(uAmb) * ao + uBounceK * 0.5 * bakedLight(vW.xz) * ao;
        gl_FragColor = vec4(ceilingAt(vW.xz) * l, 1.0);
        ${ac}
      }`})}function jv(i,t,e,n){return new We({uniforms:{uRefl:{value:i},uTexMat:{value:t},uAmb:{value:sc},uBounceK:{value:rc},uSpillK:{value:Jv},uLCol:{value:xr},...lc(e),...$v(n)},vertexShader:`
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
      ${oc}
      ${Sf}
      ${Kv}
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
        ${ac}
      }`})}function tu(i,t,e,n){return new We({uniforms:{uMap:{value:i},...bv(n),uLP:{value:t.p},uLD:{value:t.d},uLC:{value:t.c},uLI:{value:t.i},uSide:{value:e??new Ut(1,1,1)},uSideMode:{value:e?1:0},uLCol:{value:xr}},toneMapped:!1,vertexShader:`
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
      ${Sv}
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
      }`})}const Gs=.05,Vs=.2;function tM(i,t,e){const n=i.inner,s=n.x1-n.x0,r=n.z1-n.z0,o=Math.ceil(s/Gs)+1,a=Math.ceil(r/Gs)+1,l=new Uint8Array(o*a),c=i.solids;for(let E=0;E<a;E++){const v=n.z0+E*Gs;for(let y=0;y<o;y++){const b=n.x0+y*Gs;let L=1;for(const _ of c){const S=Math.max(_.x0-b,0,b-_.x1),C=Math.max(_.z0-v,0,v-_.z1),A=S*S+C*C;A>1.44||(L*=1-.42*Math.exp(-Math.sqrt(A)/.28))}l[E*o+y]=Math.round(Math.max(0,Math.min(1,L))*255)}}const h=Math.ceil(s/Vs)+1,u=Math.ceil(r/Vs)+1,f=new Float32Array(h*u*4),d=xr,m=t.map(E=>{const v=new Ut(E.face.color),b=(E.w+.5)*(E.h+1)*.7*.55;return{c:[E.centre[0]+E.normal[0]*.05,1.2,E.centre[2]+E.normal[2]*.05],n:E.normal,rgb:[v.r*d.r*b,v.g*d.g*b,v.b*d.b*b],lamp:E.lamp}});for(let E=0;E<u;E++){const v=n.z0+E*Vs;for(let y=0;y<h;y++){const b=n.x0+y*Vs;let L=0,_=0,S=0,C=0;for(const U of m){const N=b-U.c[0],O=v-U.c[2],G=N*N+O*O;if(G>64)continue;const J=N*U.n[0]+O*U.n[2];if(J>.02){const X=Math.max(G+U.c[1]*U.c[1],.3),k=Math.sqrt(X),B=J/k*(U.c[1]/k)/(Math.PI*X);B>5e-4&&!Hi(i.solids,U.c[0],U.c[2],b,v)&&(L+=U.rgb[0]*B,_+=U.rgb[1]*B,S+=U.rgb[2]*B)}const W=U.lamp,tt=b-W.p[0],H=-W.p[1],$=v-W.p[2],st=tt*tt+H*H+$*$,ft=Math.sqrt(st),z=(tt*W.d[0]+H*W.d[1]+$*W.d[2])/ft;if(z>W.cOuter){const X=Math.min(1,(z-W.cOuter)/(W.cInner-W.cOuter)),k=X*X*(3-2*X),B=W.i*k*(W.p[1]/ft)/st;B>.002&&!Hi(i.solids,W.p[0],W.p[2],b,v)&&(C+=B)}}const A=(E*h+y)*4;f[A]=L,f[A+1]=_,f[A+2]=S,f[A+3]=C}}e==null||e.ao.dispose(),e==null||e.light.dispose();const x=new ws(l,o,a,No,rn);x.magFilter=x.minFilter=He,x.needsUpdate=!0;const g=new Uint16Array(f.length);for(let E=0;E<f.length;E++)g[E]=rp.toHalfFloat(f[E]);const p=new ws(g,h,u,pn,bn);p.magFilter=p.minFilter=He,p.needsUpdate=!0;const M=(E,v,y)=>new de(1/(E*v),1/(E*y),.5/v,.5/y);return{ao:x,light:p,origin:new Bt(n.x0,n.z0),aoXf:M(Gs,o,a),lightXf:M(Vs,h,u)}}const ke=.15,Ge=8,ei=(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],Zn=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],$r=(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]],eu=(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],nu=(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],eM=[0,1,0];class Tf{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"idx",[])}v(t,e){return this.pos.push(t[0],t[1],t[2]),this.nor.push(e[0],e[1],e[2]),this.pos.length/3-1}quad(t,e){const n=t.map((o,a)=>this.v(o,e[a])),s=eu($r(t[2],t[0]),$r(t[3],t[1])),r=ei(ei(e[0],e[1]),ei(e[2],e[3]));nu(s,r)>=0?this.idx.push(n[0],n[1],n[2],n[0],n[2],n[3]):this.idx.push(n[0],n[2],n[1],n[0],n[3],n[2])}tri(t,e){const n=t.map(s=>this.v(s,e));nu(eu($r(t[1],t[0]),$r(t[2],t[0])),e)>=0?this.idx.push(n[0],n[1],n[2]):this.idx.push(n[0],n[2],n[1])}get empty(){return this.idx.length===0}geometry(){const t=new we;return t.setAttribute("position",new Vt(this.pos,3)),t.setAttribute("normal",new Vt(this.nor,3)),t.setAttribute("uv",new Vt(new Array(this.pos.length/3*2).fill(0),2)),t.setIndex(this.idx),t}}const Af=(i,t)=>i?ke:Math.max(0,Math.min(ke,t/2-.002));function nM(i,t,e){const n=new Tf,s=[i.n[0],0,i.n[1]],r=i.axis==="x"?[1,0,0]:[0,0,1],o=(_,S,C)=>{const A=Ri(i,_,C);return[A[0]+s[0]*S,C,A[2]+s[2]*S]},a=Af(i.outer,i.t),l=t-ke,c=Math.min(e,l),h=i.cornerA?"in":i.freeA?"free":"flat",u=i.cornerB?"in":i.freeB?"free":"flat",f=i.u0+(h==="in"?ke:h==="free"?a:0),d=i.u1-(u==="in"?ke:u==="free"?a:0);if(d-f<.01)return n;const m=(_,S,C,A)=>{S-_<1e-4||A-C<1e-4||n.quad([o(_,0,C),o(S,0,C),o(S,0,A),o(_,0,A)],[s,s,s,s])},x=[...i.doors].sort((_,S)=>_[0]-S[0]);if(!x.length)m(f,d,0,l);else{let _=f;for(const[S,C]of x)m(_,Math.min(d,S-a),0,c),_=Math.max(_,C+a);m(_,d,0,c),m(f,d,c,l)}const g=(_,S,C,A)=>{if(a<.01)return;const U=N=>ei(Zn(s,Math.cos(N)),Zn(S,Math.sin(N)));for(let N=0;N<Ge;N++){const O=N/Ge*Math.PI/2,G=(N+1)/Ge*Math.PI/2,J=(W,tt)=>ei(o(_,-a,tt),Zn(U(W),a));n.quad([J(O,C),J(G,C),J(G,A),J(O,A)],[U(O),U(G),U(G),U(O)])}},p=_=>[-_[0],-_[1],-_[2]];for(const[_,S]of x)_-i.u0>a+.01&&g(_-a,r,0,c),i.u1-S>a+.01&&g(S+a,p(r),0,c);h==="free"&&g(i.u0+a,p(r),0,t),u==="free"&&g(i.u1-a,r,0,t);const M=(_,S)=>{const C=ei(ei(o(_,0,0),Zn(s,ke)),Zn(S,ke)),A=N=>ei(Zn(s,Math.cos(N)),Zn(S,Math.sin(N))),U=Math.PI/4;for(let N=0;N<Ge/2;N++){const O=N/(Ge/2)*U,G=(N+1)/(Ge/2)*U,J=(W,tt)=>[C[0]-ke*A(W)[0],tt,C[2]-ke*A(W)[2]];n.quad([J(O,0),J(G,0),J(G,l),J(O,l)],[A(O),A(G),A(G),A(O)]);for(let W=0;W<Ge;W++){const tt=W/Ge*Math.PI/2,H=(W+1)/Ge*Math.PI/2,$=(ft,z)=>{const X=A(ft);return[C[0]-ke*Math.cos(z)*X[0],l+ke*Math.sin(z),C[2]-ke*Math.cos(z)*X[2]]},st=(ft,z)=>{const X=A(ft);return[Math.cos(z)*X[0],-Math.sin(z),Math.cos(z)*X[2]]};n.quad([$(O,tt),$(G,tt),$(G,H),$(O,H)],[st(O,tt),st(G,tt),st(G,H),st(O,H)])}}};h==="in"&&M(i.u0,r),u==="in"&&M(i.u1,p(r));const E=h==="in"?i.u0+ke:f,v=u==="in"?i.u1-ke:d,y=(_,S)=>o(_,ke-ke*Math.cos(S),l+ke*Math.sin(S)),b=_=>ei(Zn(s,Math.cos(_)),Zn(eM,-Math.sin(_)));for(let _=0;_<Ge;_++){const S=_/Ge*Math.PI/2,C=(_+1)/Ge*Math.PI/2;n.quad([y(E,S),y(v,S),y(v,C),y(E,C)],[b(S),b(S),b(C),b(C)])}const L=(_,S)=>{const C=o(_,0,t);for(let A=0;A<Ge;A++){const U=A/Ge*Math.PI/2,N=(A+1)/Ge*Math.PI/2;n.tri([C,y(_,U),y(_,N)],S)}};return h!=="in"&&L(E,p(r)),u!=="in"&&L(v,r),n}function iM(i,t){const e=new Map,n=a=>(e.has(a)||e.set(a,new Tf),e.get(a)),s=i.H,r=Math.min(i.doorH,s-ke),o=a=>{var l,c;return((l=i.faces.find(h=>h.wall===a&&h.side===1))==null?void 0:l.color)??((c=i.faces.find(h=>h.wall===a))==null?void 0:c.color)??"#f2f1ee"};for(const a of i.walls){const l=a.id==="S";if(a.outer&&!l)continue;const c=n(o(a.id)),h=(E,v,y)=>a.axis==="x"?[E,y,v]:[v,y,E],u=a.axis==="x"?[1,0,0]:[0,0,1];a.axis;const[f,d]=a.axis==="x"?[a.rect.z0,a.rect.z1]:[a.rect.x0,a.rect.x1],m=Af(a.outer,a.t),x=l?[{c:f,s:-1}]:[{c:f,s:-1},{c:d,s:1}],g=f+m,p=l?f+t:d-m,M=l?[[i.entrance.a,i.entrance.b]]:i.faces.filter(E=>E.wall===a.id).flatMap(E=>E.doors).filter((E,v,y)=>y.findIndex(b=>Math.abs(b[0]-E[0])<1e-6)===v);for(const[E,v]of M){const y=(_,S)=>{p-g>.001&&c.quad([h(_,g,0),h(_,p,0),h(_,p,r),h(_,g,r)],[S,S,S,S])};y(E,u),y(v,[-u[0],0,-u[2]]);const b=[0,-1,0],L=l?f+t:d;c.quad([h(E,f,r),h(v,f,r),h(v,L,r),h(E,L,r)],[b,b,b,b]);for(const{c:_,s:S}of x)for(const[C,A]of[[E,1],[v,-1]]){if(m<.01)continue;const U=C-A*m,N=_-S*m,O=h(C,_,r);for(let G=0;G<Ge;G++){const J=W=>{const tt=W/Ge*Math.PI/2;return h(U+A*m*Math.sin(tt),N+S*m*Math.cos(tt),r)};c.tri([O,J(G),J(G+1)],b)}}}if(!a.outer)for(const E of i.faces.filter(v=>v.wall===a.id&&v.side===1)){const v=(y,b)=>{d-m-(f+m)>.001&&c.quad([h(y,f+m,0),h(y,d-m,0),h(y,d-m,s),h(y,f+m,s)],[b,b,b,b])};E.freeA&&v(E.u0,[-u[0],0,-u[2]]),E.freeB&&v(E.u1,u)}}return e}const iu=new Ut(1,1,1),Rf=.2,Pl=2;function sM(i,t,e,n){const s=new Pe;i.background=iu,i.fog=null;const r=n.outline,o=r.t-Rf,a=r.x0-r.t,l=r.x1+r.t,c=r.z0-r.t,h=r.z1+r.t,u=n.ceiling,f=n.doorHeight,d=u+1.4,m=n.entrance.x-n.entrance.w/2,x=n.entrance.x+n.entrance.w/2,g=n.entrance.x,p=new oi({color:iu,toneMapped:!1}),M=(_,S,C,A,U,N)=>{const O=new Se(new Sn(A,U,N),p);return O.position.set(_,S,C),O.userData.outside=!0,O.layers.set(Pl),s.add(O),O},E=-.5,v=d,y=(E+v)/2,b=v-E;M((a+m)/2,y,h-o/2,m-a,b,o),M((x+l)/2,y,h-o/2,l-x,b,o),M(g,(f+v)/2,h-o/2,x-m,v-f,o),M((a+l)/2,y,c+o/2,l-a,b,o),M(a+o/2,y,(c+h)/2,o,b,h-c-2*o),M(l-o/2,y,(c+h)/2,o,b,h-c-2*o),M((a+l)/2,(u+v)/2+.05,(c+h)/2,l-a-.02,v-u-.1,h-c-.02);const L=new Se(new Wn(400,400).rotateX(-Math.PI/2),p);return L.position.y=-.002,L.layers.set(Pl),s.add(L),i.add(s),{group:s,dispose(){i.remove(s),s.traverse(_=>{var A;const S=_;S.geometry&&S.geometry.dispose();const C=Array.isArray(S.material)?S.material:S.material?[S.material]:[];for(const U of C)(A=U.map)==null||A.dispose(),U.dispose()})}}}class su{constructor(){I(this,"pos",[]);I(this,"nor",[]);I(this,"uv",[]);I(this,"idx",[])}add(t,e){const n=this.pos.length/3;for(const s of t)this.pos.push(s[0],s[1],s[2]),this.nor.push(e[0],e[1],e[2]);this.uv.push(0,0,1,0,1,1,0,1),this.idx.push(n,n+1,n+2,n,n+2,n+3)}geometry(){const t=new we;return t.setAttribute("position",new Vt(this.pos,3)),t.setAttribute("normal",new Vt(this.nor,3)),t.setAttribute("uv",new Vt(this.uv,2)),t.setIndex(this.idx),t}}const mr=i=>new D(i[0],i[1],i[2]),Cf=i=>({p:mr(i.p),d:mr(i.d),c:new Bt(i.cOuter,i.cInner),i:i.i});function rM(i,t,e,n=[]){const s=t.filter(h=>h.face===i),r=s.map(h=>h.lamp),o=[],a=[],l=Math.min(40,Math.max(2,Math.ceil((i.u1-i.u0)/.5)));for(let h=0;h<=l;h++){const u=i.u0+(i.u1-i.u0)*h/l;for(const f of[.4,1.4,2.4])a.push(Ri(i,u,f))}for(const h of[...t.filter(u=>u.face!==i).map(u=>u.lamp),...n]){const u=a[0];if((h.p[0]-u[0])*i.n[0]+(h.p[2]-u[2])*i.n[1]<.1)continue;let d=1/0;for(const m of a){const x=m[0]-h.p[0],g=m[1]-h.p[1],p=m[2]-h.p[2],M=Math.hypot(x,g,p);M>7||(x*h.d[0]+g*h.d[1]+p*h.d[2])/M<=h.cOuter||Hi(e.solids,h.p[0],h.p[2],m[0]+i.n[0]*.03,m[2]+i.n[1]*.03)||(d=Math.min(d,M))}d<1/0&&o.push({L:h,d})}o.sort((h,u)=>h.d-u.d);for(const h of o){if(r.length>=ti)break;r.push(h.L)}const c=[];return s.forEach((h,u)=>{if(!(u>=ti))for(const f of h.items)c.length>=gs||f.text||c.push({c:mr(f.pos),s:new D(f.w/2,f.h/2,f.depth),lamp:u})}),{lamps:r.slice(0,ti).map(Cf),boxes:c,normal:new D(i.n[0],0,i.n[1]),right:new D(i.right[0],0,i.right[1]),axisX:i.axis==="x",u0:i.u0,u1:i.u1,cornerA:i.cornerA,cornerB:i.cornerB}}const oM={lamps:[],boxes:[],normal:new D(0,0,1),right:new D(1,0,0),axisX:!0,u0:0,u1:0,cornerA:!1,cornerB:!1};function ru(i,t,e,n=[0,1,0,1]){const[s,r,o,a]=n,l=[],c=[],h=[],u=[],f=[],d=(b,L,_,S)=>{const C=l.length/3;b.forEach((A,U)=>{l.push(...A),c.push(...L),h.push(..._[U]),u.push(S)}),f.push(C,C+1,C+2,C,C+2,C+3)},m=i/2,x=t/2,g=.004,p=s+g,M=r-g,E=o+g,v=a-g;d([[-m,-x,e],[m,-x,e],[m,x,e],[-m,x,e]],[0,0,1],[[s,o],[r,o],[r,a],[s,a]],0),d([[-m,x,e],[m,x,e],[m,x,0],[-m,x,0]],[0,1,0],[[s,v],[r,v],[r,v],[s,v]],1),d([[-m,-x,0],[m,-x,0],[m,-x,e],[-m,-x,e]],[0,-1,0],[[s,E],[r,E],[r,E],[s,E]],1),d([[-m,-x,0],[-m,-x,e],[-m,x,e],[-m,x,0]],[-1,0,0],[[p,o],[p,o],[p,a],[p,a]],1),d([[m,-x,e],[m,-x,0],[m,x,0],[m,x,e]],[1,0,0],[[M,o],[M,o],[M,a],[M,a]],1);const y=new we;return y.setAttribute("position",new Vt(l,3)),y.setAttribute("normal",new Vt(c,3)),y.setAttribute("uv",new Vt(h,2)),y.setAttribute("aSide",new Vt(u,1)),y.setIndex(f),y}function aM(i,t,e,n=[0,1,0,1]){const{face:s,depth:r,mat:o,lip:a,bevel:l}=Mo,c=i/2,h=t/2,u=c+o+s,f=h+o+s,d=c+o,m=h+o,x=c+l,g=h+l,p=r-a,M=p-l,E=new Ut(U_[e.color]),v=new Ut(N_[e.mat]),y=new Ut(F_),b=[],L=[],_=[],S=[],C=[],A=[],U=H=>new D(H[0],H[1],H[2]),N=(H,$,st,ft=[[0,0],[0,0],[0,0],[0,0]])=>{const z=new D().crossVectors(U(H[1]).sub(U(H[0])),U(H[3]).sub(U(H[0]))).normalize();z.dot(U($))<0&&(H=[H[0],H[3],H[2],H[1]],ft=[ft[0],ft[3],ft[2],ft[1]],z.negate());const X=b.length/3;H.forEach((k,B)=>{b.push(...k),L.push(z.x,z.y,z.z),_.push(...ft[B]),S.push(st?2:0),C.push(...st?[st.r,st.g,st.b]:[0,0,0])}),A.push(X,X+1,X+2,X,X+2,X+3)};N([[-u,m,r],[u,m,r],[u,f,r],[-u,f,r]],[0,0,1],E),N([[-u,-f,r],[u,-f,r],[u,-m,r],[-u,-m,r]],[0,0,1],E),N([[-u,-m,r],[-d,-m,r],[-d,m,r],[-u,m,r]],[0,0,1],E),N([[d,-m,r],[u,-m,r],[u,m,r],[d,m,r]],[0,0,1],E),N([[-u,f,0],[u,f,0],[u,f,r],[-u,f,r]],[0,1,0],E),N([[-u,-f,0],[u,-f,0],[u,-f,r],[-u,-f,r]],[0,-1,0],E),N([[-u,-f,0],[-u,f,0],[-u,f,r],[-u,-f,r]],[-1,0,0],E),N([[u,-f,0],[u,f,0],[u,f,r],[u,-f,r]],[1,0,0],E),N([[-d,m,p],[d,m,p],[d,m,r],[-d,m,r]],[0,-1,0],E),N([[-d,-m,p],[d,-m,p],[d,-m,r],[-d,-m,r]],[0,1,0],E),N([[-d,-m,p],[-d,m,p],[-d,m,r],[-d,-m,r]],[1,0,0],E),N([[d,-m,p],[d,m,p],[d,m,r],[d,-m,r]],[-1,0,0],E),N([[-d,g,p],[d,g,p],[d,m,p],[-d,m,p]],[0,0,1],v),N([[-d,-m,p],[d,-m,p],[d,-g,p],[-d,-g,p]],[0,0,1],v),N([[-d,-g,p],[-x,-g,p],[-x,g,p],[-d,g,p]],[0,0,1],v),N([[x,-g,p],[d,-g,p],[d,g,p],[x,g,p]],[0,0,1],v),N([[-x,g,p],[x,g,p],[c,h,M],[-c,h,M]],[0,-1,1],y),N([[-x,-g,p],[x,-g,p],[c,-h,M],[-c,-h,M]],[0,1,1],y),N([[-x,-g,p],[-x,g,p],[-c,h,M],[-c,-h,M]],[1,0,1],y),N([[x,-g,p],[x,g,p],[c,h,M],[c,-h,M]],[-1,0,1],y);const[O,G,J,W]=n;N([[-c,-h,M],[c,-h,M],[c,h,M],[-c,h,M]],[0,0,1],null,[[O,J],[G,J],[G,W],[O,W]]);const tt=new we;return tt.setAttribute("position",new Vt(b,3)),tt.setAttribute("normal",new Vt(L,3)),tt.setAttribute("uv",new Vt(_,2)),tt.setAttribute("aSide",new Vt(S,1)),tt.setAttribute("aCol",new Vt(C,3)),tt.setIndex(A),tt}function lM(i,t,e,n=[0,1,0,1]){const{strip:s,depth:r,gap:o,below:a}=yo,l=i/2,c=t/2,h=l+o,u=c+o,f=h+s,d=u+s,m=r-a,x=Math.max(.004,m-e),g=new Ut(z_),p=new Ut(O_),M=[],E=[],v=[],y=[],b=[],L=[],_=$=>new D($[0],$[1],$[2]),S=($,st,ft,z,X=[[0,0],[0,0],[0,0],[0,0]])=>{const k=new D().crossVectors(_($[1]).sub(_($[0])),_($[3]).sub(_($[0]))).normalize();k.dot(_(st))<0&&($=[$[0],$[3],$[2],$[1]],X=[X[0],X[3],X[2],X[1]],k.negate());const B=M.length/3;$.forEach((R,P)=>{M.push(...R),E.push(k.x,k.y,k.z),v.push(...X[P]),y.push(ft),b.push(...z?[z.r,z.g,z.b]:[0,0,0])}),L.push(B,B+1,B+2,B,B+2,B+3)};S([[-f,u,r],[f,u,r],[f,d,r],[-f,d,r]],[0,0,1],2,g),S([[-f,-d,r],[f,-d,r],[f,-u,r],[-f,-u,r]],[0,0,1],2,g),S([[-f,-u,r],[-h,-u,r],[-h,u,r],[-f,u,r]],[0,0,1],2,g),S([[h,-u,r],[f,-u,r],[f,u,r],[h,u,r]],[0,0,1],2,g),S([[-f,d,0],[f,d,0],[f,d,r],[-f,d,r]],[0,1,0],2,g),S([[-f,-d,0],[f,-d,0],[f,-d,r],[-f,-d,r]],[0,-1,0],2,g),S([[-f,-d,0],[-f,d,0],[-f,d,r],[-f,-d,r]],[-1,0,0],2,g),S([[f,-d,0],[f,d,0],[f,d,r],[f,-d,r]],[1,0,0],2,g),S([[-h,u,0],[h,u,0],[h,u,r],[-h,u,r]],[0,-1,0],2,p),S([[-h,-u,0],[h,-u,0],[h,-u,r],[-h,-u,r]],[0,1,0],2,p),S([[-h,-u,0],[-h,u,0],[-h,u,r],[-h,-u,r]],[1,0,0],2,p),S([[h,-u,0],[h,u,0],[h,u,r],[h,-u,r]],[-1,0,0],2,p),S([[-h,c,x],[h,c,x],[h,u,x],[-h,u,x]],[0,0,1],2,p),S([[-h,-u,x],[h,-u,x],[h,-c,x],[-h,-c,x]],[0,0,1],2,p),S([[-h,-c,x],[-l,-c,x],[-l,c,x],[-h,c,x]],[0,0,1],2,p),S([[l,-c,x],[h,-c,x],[h,c,x],[l,c,x]],[0,0,1],2,p);const[C,A,U,N]=n,O=.004,G=C+O,J=A-O,W=U+O,tt=N-O;S([[-l,-c,m],[l,-c,m],[l,c,m],[-l,c,m]],[0,0,1],0,null,[[C,U],[A,U],[A,N],[C,N]]),S([[-l,c,m],[l,c,m],[l,c,x],[-l,c,x]],[0,1,0],1,null,[[C,tt],[A,tt],[A,tt],[C,tt]]),S([[-l,-c,x],[l,-c,x],[l,-c,m],[-l,-c,m]],[0,-1,0],1,null,[[C,W],[A,W],[A,W],[C,W]]),S([[-l,-c,x],[-l,-c,m],[-l,c,m],[-l,c,x]],[-1,0,0],1,null,[[G,U],[G,U],[G,N],[G,N]]),S([[l,-c,m],[l,-c,x],[l,c,x],[l,c,m]],[1,0,0],1,null,[[J,U],[J,U],[J,N],[J,N]]);const H=new we;return H.setAttribute("position",new Vt(M,3)),H.setAttribute("normal",new Vt(E,3)),H.setAttribute("uv",new Vt(v,2)),H.setAttribute("aSide",new Vt(y,1)),H.setAttribute("aCol",new Vt(b,3)),H.setIndex(L),H}function cM(i,t,e,n){const[s,r,o,a]=n??[0,0,1,1];let l=s,c=o,h=1-a,u=1-r;if(!e)return[l,c,h,u];const f=i/t,d=e[0]*(o-s)/(e[1]*(a-r));if(d>f){const m=f/d,x=(l+c)/2,g=(c-l)*m/2;l=x-g,c=x+g}else{const m=d/f,x=(h+u)/2,g=(u-h)*m/2;h=x-g,u=x+g}return[l,c,h,u]}const Aa=(i,t,e,n)=>{const s=new Jt().makeBasis(mr(e),new D(0,1,0),mr(t));i.quaternion.setFromRotationMatrix(s),i.position.set(n[0],n[1],n[2])};class hM{constructor(t,e){I(this,"map",new Map);I(this,"used",new Set);this.font=t,this.aniso=e}begin(){this.used.clear()}end(){for(const[t,e]of this.map)this.used.has(t)||(e.dispose(),this.map.delete(t))}single(t){const e=`1|${bo(t)}|${t.medium}|${So(t)}|${t.year}`;return this.get(e,()=>{const s=Math.round(1024*nr/_s),r=Lf(1024,s),o=r.getContext("2d");o.fillStyle="#f6f5f1",o.fillRect(0,0,1024,s),o.fillStyle="#121212";const a=70;let l=160;const c=[[`italic 500 84px ${this.font}`,bo(t)]];for(const h of[t.medium,So(t),t.year])h&&c.push([`400 62px ${this.font}`,h]);for(const[h,u]of c)o.font=h,l=uM(o,u,a,l,1024-2*a,h.startsWith("italic")?92:74),l+=h.startsWith("italic")?20:8;return r})}get(t,e){this.used.add(t);let n=this.map.get(t);return n||(n=new Zl(e()),n.colorSpace=Ie,n.anisotropy=this.aniso,this.map.set(t,n)),n}}const Lf=(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e};function uM(i,t,e,n,s,r){let o="";for(const a of t.split(" ")){const l=o?o+" "+a:a;i.measureText(l).width>s&&o?(i.fillText(o,e,n),n+=r,o=a):o=l}return i.fillText(o,e,n),n+r}const fM=i=>{const t=new Ut(i);return .2126*t.r+.7152*t.g+.0722*t.b<.12};function dM(i,t,e,n){const s=Lf(Math.ceil(t*wo),Math.ceil(e*wo)),r=s.getContext("2d");r.fillStyle=fM(n)?"#eeede8":"#262625",r.textBaseline="alphabetic",r.font=`300 ${ir}px ${Eo}`,r.fillText(i.title,8,ir*.8),i.sub&&(r.font=`400 ${To}px ${Eo}`,r.fillText(i.sub,10,ir+af+To*.8));const o=new Zl(s);return o.colorSpace=Ie,o.anisotropy=8,o}function pM(i){const t=q_(i),e=$_(i,t).map(c=>new Ut(c)),n=Int32Array.from(t.id),s=t.nx*t.nz;let r=[];for(let c=0;c<s;c++)n[c]>=0&&r.push(c);for(;r.length;){const c=[];for(const h of r){const u=h%t.nx;for(const f of[u>0?h-1:-1,u<t.nx-1?h+1:-1,h-t.nx,h+t.nx])f>=0&&f<s&&n[f]<0&&(n[f]=n[h],c.push(f))}r=c}const o=new Uint8Array(s*4),a=new Ut(of);for(let c=0;c<s;c++){const h=e[n[c]]??a;o[c*4]=Math.round(h.r*255),o[c*4+1]=Math.round(h.g*255),o[c*4+2]=Math.round(h.b*255),o[c*4+3]=255}const l=new ws(o,t.nx,t.nz,pn);return l.magFilter=l.minFilter=Be,l.needsUpdate=!0,{tex:l,origin:new Bt(t.x0,t.z0),scale:new Bt(1/(t.nx*t.c),1/(t.nz*t.c))}}function mM(i,t,e,n,s,r,o,a,l=[]){const c=new Pe,h=i.H,u=pM(i),f=[],d=[],m=[u.tex],x=(A,U)=>{d.push(A),f.push(U);const N=new Se(A,U);return c.add(N),N},g=[];for(const A of i.faces){const U=nM(A,h,i.doorH);if(U.empty)continue;const N=x(U.geometry(),jh(rM(A,t,i,l.map(O=>O.lamp)),new Ut(A.color),h,e,u));N.userData.face=A,g.push(N)}for(const[A,U]of iM(i,Rf))U.empty||x(U.geometry(),jh(oM,new Ut(A),h,e,u));const p=i.inner,M=i.entrance,E=new su;E.add([[p.x0,0,p.z1],[p.x1,0,p.z1],[p.x1,0,p.z0],[p.x0,0,p.z0]],[0,1,0]),E.add([[M.a,0,M.z+.4],[M.b,0,M.z+.4],[M.b,0,M.z],[M.a,0,M.z]],[0,1,0]),x(E.geometry(),jv(o,a,e,Yv(l))).layers.set(1);const y=new su;y.add([[p.x0,h,p.z0],[p.x1,h,p.z0],[p.x1,h,p.z1],[p.x0,h,p.z1]],[0,-1,0]),x(y.geometry(),Qv(e,u));const b=[...t.map(A=>A.lamp.p),...l.map(A=>A.lamp.p)],L=b.length;if(L){const A=new er(.068,28).rotateX(Math.PI/2).translate(0,h-.0015,0),U=new er(.05,24).rotateX(Math.PI/2).translate(0,h-.0025,0),N=new er(.026,20).rotateX(Math.PI/2).translate(0,h-.0035,0),O=new oi({color:14276820,toneMapped:!1}),G=new oi({color:11842479,toneMapped:!1}),J=new oi({color:16777215,toneMapped:!1});d.push(A,U,N),f.push(O,G,J);const W=new oo(A,O,L),tt=new oo(U,G,L),H=new oo(N,J,L),$=new Jt;b.forEach((st,ft)=>{$.makeTranslation(st[0],0,st[2]),W.setMatrixAt(ft,$),tt.setMatrixAt(ft,$),H.setMatrixAt(ft,$)}),c.add(W,tt,H)}const _=[],S=[];r.begin();for(const A of t){const U=Cf(A.lamp);for(const N of A.items){if(N.text){const X=dM(N.text,N.w,N.h,N.face.color);m.push(X);const k=x(new Wn(N.w,N.h),new oi({map:X,transparent:!0,depthWrite:!1,toneMapped:!1}));Aa(k,A.normal,A.right,[N.pos[0]+A.normal[0]*.002,N.pos[1],N.pos[2]+A.normal[2]*.002]),k.userData.title=N.id;continue}const O=N.work,G=O.kind==="paper"||O.kind==="digital"?new Ut().setRGB(.92,.91,.88):null,J=tu(n(O.id),U,G,O.adjust),W=jl(O),tt=O.w*je,H=O.h*je,$=cM(tt,H,s(O.id),O.crop),st=W?tc(W)?lM(tt,H,Ql[O.kind],$):aM(tt,H,W,$):ru(N.w,N.h,N.depth,$),ft=x(st,J);Aa(ft,A.normal,A.right,N.pos),ft.userData.work=O.id;const z={work:O,placed:A,mesh:ft,mat:J,w:N.w,h:N.h,label:null};if(_.push(z),N.label){const X=x(ru(_s,nr,.003),tu(r.single(O),U,new Ut(.95,.95,.93)));Aa(X,A.normal,A.right,N.label.pos),X.userData.work=O.id,X.userData.label=!0,S.push(X),z.label=X}}}r.end();const C=l.map(A=>qv(A));for(const A of C)c.add(A.group);return{group:c,pictures:_,labels:S,faceMeshes:g,machines:C,dispose(){for(const A of C)A.dispose();for(const A of d)A.dispose();for(const A of f)A.dispose();for(const A of m)A.dispose();c.traverse(A=>{const U=A;U.isInstancedMesh&&U.dispose()})}}}const sr=class sr{constructor(t,e,n,s,r,o){I(this,"cat",new Map);I(this,"arch");I(this,"placed",[]);I(this,"items",[]);I(this,"machines",[]);I(this,"migrated",!1);I(this,"interior",null);I(this,"outside",null);I(this,"sharp",new Map);I(this,"small",new Map);I(this,"baked");I(this,"labels");I(this,"outsideKey","");I(this,"blank",new ws(new Uint8Array([128,128,128,255]),1,1));I(this,"onRebuilt",()=>{});I(this,"prepTex",t=>(t.colorSpace=Ie,t.anisotropy=this.aniso,t.minFilter=Ai,t));I(this,"texture",t=>this.sharp.get(t)??this.small.get(t)??this.blank);I(this,"px",t=>this.data.images[t]);this.data=t,this.scene=e,this.renderer=n,this.mirror=s,this.font=r,this.aniso=o,this.labels=new hM(r,o),this.blank.needsUpdate=!0}async loadSmall(){const t=new bl;await Promise.all(this.data.catalogue.map(e=>t.loadAsync(sr.url(e.id,"s")).then(n=>{this.small.set(e.id,this.prepTex(n))}).catch(()=>{})))}async loadOne(t){const e=await new bl().loadAsync(`${sr.url(t,"s")}?${Date.now()}`);this.small.set(t,this.prepTex(e))}rebuild(){var a;const t=this.data.layout;this.cat=new Map(this.data.catalogue.map(l=>[l.id,l])),this.arch=X_(t),vv(t,this.arch,this.cat)&&(this.migrated=!0);const{placed:e,items:n,homeless:s}=ev(t,this.arch,this.cat);s.length&&(t.hang=t.hang.filter(l=>!s.includes(l))),this.placed=e,this.items=n,this.machines=Fv(t,this.data.machines,this.arch.H),this.baked=tM(this.arch,e,this.baked);const r=this.interior;this.interior=mM(this.arch,e,this.baked,this.texture,this.px,this.labels,this.mirror.target.texture,this.mirror.texMat,this.machines),this.scene.add(this.interior.group),r&&(this.scene.remove(r.group),r.dispose());const o=JSON.stringify([t.outline,t.entrance,t.ceiling,t.doorHeight]);o!==this.outsideKey&&((a=this.outside)==null||a.dispose(),this.outside=sM(this.scene,this.font,this.aniso,t),this.outsideKey=o),this.onRebuilt(s)}hung(){return new Set(this.data.layout.hang.filter(t=>!t.text).map(t=>t.id))}storage(){const t=this.hung();return this.data.catalogue.filter(e=>!t.has(e.id)&&!e.off)}placementOf(t){return this.data.layout.hang.find(e=>e.id===t)}};I(sr,"url",(t,e)=>`art/${t}-${e}.jpg`);let vs=sr;class gM{constructor(t,e){I(this,"target");I(this,"texMat",new Jt);I(this,"cam",new sn);I(this,"plane",new jn);I(this,"clip",new de);I(this,"q",new de);I(this,"n",new D(0,1,0));I(this,"p0",new D(0,0,0));I(this,"camPos",new D);I(this,"rot",new Jt);I(this,"look",new D);I(this,"view",new D);I(this,"tgt",new D);this.target=new Mn(t,e,{type:bn,depthBuffer:!0}),this.target.texture.generateMipmaps=!1,this.cam.layers.set(0)}setSize(t,e){this.target.setSize(Math.max(2,t),Math.max(2,e))}render(t,e,n){if(this.camPos.setFromMatrixPosition(n.matrixWorld),this.view.subVectors(this.p0,this.camPos),this.view.dot(this.n)>0)return;this.view.reflect(this.n).negate().add(this.p0),this.rot.extractRotation(n.matrixWorld),this.look.set(0,0,-1).applyMatrix4(this.rot).add(this.camPos),this.tgt.subVectors(this.p0,this.look).reflect(this.n).negate().add(this.p0);const s=this.cam;s.position.copy(this.view),s.up.set(0,1,0).applyMatrix4(this.rot).reflect(this.n),s.lookAt(this.tgt),s.far=n.far,s.near=n.near,s.updateMatrixWorld(),s.projectionMatrix.copy(n.projectionMatrix),this.texMat.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.texMat.multiply(s.projectionMatrix).multiply(s.matrixWorldInverse),this.plane.setFromNormalAndCoplanarPoint(this.n,this.p0).applyMatrix4(s.matrixWorldInverse),this.clip.set(this.plane.normal.x,this.plane.normal.y,this.plane.normal.z,this.plane.constant);const r=s.projectionMatrix.elements;this.q.x=(Math.sign(this.clip.x)+r[8])/r[0],this.q.y=(Math.sign(this.clip.y)+r[9])/r[5],this.q.z=-1,this.q.w=(1+r[10])/r[14],this.clip.multiplyScalar(2/this.clip.dot(this.q)),r[2]=this.clip.x,r[6]=this.clip.y,r[10]=this.clip.z+1,r[14]=this.clip.w;const o=t.getRenderTarget(),a=e.background,l=t.getClearColor(new Ut),c=t.getClearAlpha();e.background=null,t.setClearColor(0,0),t.setRenderTarget(this.target),t.clear(),t.render(e,s),t.setRenderTarget(o),t.setClearColor(l,c),e.background=a}}class xM{constructor(){I(this,"el");I(this,"tools");I(this,"low");I(this,"high");I(this,"cap");I(this,"frame");I(this,"open",!1);I(this,"busy",!1);I(this,"work",null);I(this,"px",[1,1]);I(this,"crop",[0,0,1,1]);I(this,"onClose",()=>{});I(this,"onShow",()=>{});I(this,"reserveRight",0);I(this,"relock",()=>!0);this.el=document.getElementById("view"),this.frame=this.el.querySelector(".frame"),this.low=this.el.querySelector("img.low"),this.high=this.el.querySelector("img.high"),this.cap=this.el.querySelector(".cap"),this.tools=document.createElement("div"),this.tools.className="view-tools",this.el.prepend(this.tools),this.high.addEventListener("load",()=>{this.open&&this.high.classList.add("in")}),addEventListener("resize",()=>{this.work&&this.fit()})}show(t,e,n,s){this.work=t,this.px=e??[1200,1200],this.crop=t.crop??[0,0,1,1],this.open=!0,this.busy=!1,this.high.classList.remove("in"),this.low.src=n,this.high.src=s,this.caption(),this.setFilter(wv(t.id,t.adjust)),this.fit(),this.el.classList.add("on"),this.onShow(t)}caption(){const t=this.work;if(!t)return;const e=[`<i>${ou(bo(t))}</i>`],n=[t.medium,So(t),t.year].filter(Boolean).map(s=>ou(s));n.length&&e.push(n.join(" &nbsp;·&nbsp; ")),this.cap.innerHTML=e.join("<br>")}hide(){!this.open||this.busy||(this.open=!1,this.work=null,this.el.classList.remove("on"),this.onClose())}setFilter(t){this.low.style.filter=t,this.high.style.filter=t}refit(){this.el.style.paddingRight=this.reserveRight?`${this.reserveRight}px`:"",this.fit()}setCrop(t){this.crop=t,this.fit()}get frameEl(){return this.frame}fit(){const n=this.tools.childElementCount?56:0,[s,r,o,a]=this.crop,l=this.px[0]*(o-s),c=this.px[1]*(a-r),h=innerWidth-2*28-this.reserveRight,u=innerHeight-2*28-64-n,f=Math.min(1,h/l,u/c),d=Math.round(l*f),m=Math.round(c*f);this.frame.style.width=`${d}px`,this.frame.style.height=`${m}px`;const x=d/(o-s),g=m/(a-r);for(const p of[this.low,this.high])Object.assign(p.style,{width:`${x}px`,height:`${g}px`,left:`${-s*x}px`,top:`${-r*g}px`})}}const ou=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),_M=i=>({kind:"work",id:i.work.id,centre:i.mesh.position,normal:i.placed.normal,size:Math.max(i.w,i.h),reach:Math.min(6,Math.max(2.6,1.8+2.4*Math.max(i.w,i.h))),meshes:i.label?[i.mesh,i.label]:[i.mesh]}),vM=i=>({kind:"machine",id:i.placed.machine.id,centre:i.placed.screen.c,normal:i.placed.front,size:.9,reach:3.4,meshes:i.meshes}),MM=.62,Ra=5,yM=.18;class SM{constructor(t=!0){I(this,"pic",null);I(this,"lit",null);I(this,"dark",0);I(this,"veil");I(this,"vScene",new Yl);I(this,"vCam",new Fo(-1,1,1,-1,0,1));I(this,"hintEl");I(this,"hinted",null);I(this,"hintDone",!1);I(this,"v",new D);I(this,"f",new D);this.veil=new Se(new Wn(2,2),new oi({color:0,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,toneMapped:!1})),this.vScene.add(this.veil),this.hintEl=document.createElement("div"),this.hintEl.id="focus-hint",this.hintEl.textContent="CLICK FOR FULL SCREEN",t||(this.hintEl.style.display="none"),document.body.append(this.hintEl)}update(t,e,n,s,r){let o=null,a=1/0,l=1/0;if(r){const u=e.getWorldPosition(this.v),f=e.getWorldDirection(this.f);for(const d of n){const m=d.centre,x=d.normal,g=m.x-u.x,p=m.y-u.y,M=m.z-u.z,E=Math.hypot(g,p,M);if(E>d.reach||x[0]*-g+x[2]*-M<=0)continue;const v=Math.acos(Math.min(1,(g*f.x+p*f.y+M*f.z)/E)),y=Math.atan2(d.size*.5,E)+.17;if(v>y||Hi(s,u.x,u.z,m.x+x[0]*.05,m.z+x[2]*.05))continue;const b=v/y;b<a&&(a=b,o=d),this.pic&&d.id===this.pic.id&&d.kind===this.pic.kind&&(l=b)}this.pic&&l<a+.15&&(o=n.find(d=>d.id===this.pic.id&&d.kind===this.pic.kind)??o)}this.pic=o,o&&(this.lit=o);let c=0;if(o){const u=o.centre.distanceTo(e.getWorldPosition(this.v)),f=o.reach,d=f*.4,m=Math.min(1,Math.max(0,(f-u)/(f-d)));c=MM*m*m*(3-2*m)}this.dark+=(c-this.dark)*(1-Math.exp(-t/yM)),this.dark<.003&&!o&&(this.lit=null),!this.hintDone&&o&&o.kind==="work"&&this.dark>.12&&!this.hinted&&(this.hinted=o);const h=!!this.hinted&&o===this.hinted&&this.dark>.08;this.hinted&&!h&&this.hintEl.classList.contains("on")&&(this.hintDone=!0,this.hinted=null),this.hintEl.classList.toggle("on",h)}opened(){this.hintDone=!0,this.hinted=null,this.hintEl.classList.remove("on")}clear(){this.pic=null,this.lit=null,this.dark=0,this.hintEl.classList.remove("on")}render(t,e,n){const s=this.lit;if(!s||this.dark<.003)return;this.veil.material.opacity=this.dark,t.autoClear=!1,t.render(this.vScene,this.vCam);const r=s.meshes;for(const l of r)l.layers.enable(Ra);const o=n.layers.mask,a=e.background;n.layers.set(Ra),e.background=null,t.render(e,n),e.background=a,n.layers.mask=o;for(const l of r)l.layers.disable(Ra);t.autoClear=!0}}const bM=1.5,wM=1.1,au=650,lu=i=>(i=Math.min(1,Math.max(0,i)),i*i*i*(i*(i*6-15)+10));class EM{constructor(){I(this,"state","idle");I(this,"machine",null);I(this,"covering",!1);I(this,"onBack",()=>{});I(this,"el");I(this,"name");I(this,"frame",null);I(this,"loaded",!1);I(this,"t",0);I(this,"from",{pos:new D,quat:new me});I(this,"to",{pos:new D,quat:new me});I(this,"relock",!1);I(this,"fadeTimer",0);this.el=document.createElement("div"),this.el.id="travel";const t=document.createElement("div");t.className="tr-bar";const e=document.createElement("button");e.className="tr-back",e.textContent="←  Back to the Time Machines",e.addEventListener("click",n=>{n.preventDefault(),e.blur(),this.back()}),this.name=document.createElement("span"),this.name.className="tr-name",t.append(e,this.name),this.el.append(t),document.body.append(this.el),addEventListener("keydown",n=>{n.code==="Escape"&&this.state==="there"&&(n.preventDefault(),this.back())})}get active(){return this.state!=="idle"}go(t,e,n){if(this.state!=="idle")return;this.machine=t,this.relock=n,this.from.pos.copy(e.position),this.from.quat.copy(e.quaternion);const s=t.placed.screen,r=Math.tan(dn.degToRad(e.fov/2)),o=.92*Math.min(s.h/2/r,s.w/2/(r*e.aspect));this.to.pos.copy(s.c).addScaledVector(s.n,o),this.to.quat.setFromRotationMatrix(new Jt().makeBasis(s.right,s.up,s.n)),this.t=0,this.state="in",this.loaded=!1;const a=document.createElement("iframe");a.className="tr-app",a.title=t.placed.machine.name,a.allow="fullscreen; autoplay",a.addEventListener("load",()=>{this.loaded=!0,this.maybeShow()}),a.src=t.placed.machine.url,this.frame=a,this.el.append(a),this.name.textContent=t.placed.machine.name.replace(/\s*[|\n]\s*/g," "),document.pointerLockElement&&document.exitPointerLock(),document.body.classList.add("traveling")}back(){this.state==="there"&&(this.state="out",this.covering=!1,this.t=0,this.el.classList.remove("on"),clearTimeout(this.fadeTimer),this.fadeTimer=window.setTimeout(()=>{var t;(t=this.frame)==null||t.remove(),this.frame=null},au),this.onBack(this.relock))}maybeShow(){this.state!=="there"||!this.loaded||this.el.classList.contains("on")||(this.el.classList.add("on"),clearTimeout(this.fadeTimer),this.fadeTimer=window.setTimeout(()=>{var t;this.state==="there"&&(this.covering=!0),(t=this.frame)==null||t.focus()},au))}update(t,e){if(this.state==="idle")return;if(this.state==="in")this.t+=t/bM,this.t>=1&&(this.t=1,this.state="there",this.maybeShow());else if(this.state==="out"&&(this.t+=t/wM,this.t>=1)){this.state="idle",this.machine=null,document.body.classList.remove("traveling");return}const n=this.state==="out"?1-lu(this.t):this.state==="there"?1:lu(this.t);this.state==="out"&&(this.from.pos.copy(e.position),this.from.quat.copy(e.quaternion)),e.position.lerpVectors(this.from.pos,this.to.pos,n),e.quaternion.slerpQuaternions(this.from.quat,this.to.quat,n),e.updateMatrixWorld()}}const TM=[[233,196,106],[237,214,197],[247,74,158],[124,196,124],[56,134,232],[150,106,76]],AM=[[18,20,26],[198,44,48],[240,241,246],[72,178,96]],Pf=[[255,196,160],[255,132,112],[236,92,124],[255,110,178]],gr=.12,cc=[58,44,40],Ca=i=>{const t=i/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4},RM=i=>{const t=i<=.0031308?i*12.92:1.055*i**.4166666666666667-.055;return Math.round(Math.max(0,Math.min(1,t))*255)};function ko(i,t){const e=Math.max(0,Math.min(1,t))*(i.length-1),n=Math.min(i.length-2,Math.floor(e)),s=e-n,r=i[n],o=i[n+1];return[0,1,2].map(a=>RM(Ca(r[a])+(Ca(o[a])-Ca(r[a]))*s))}function Lo([i,t,e]){const n=i/255,s=t/255,r=e/255,o=Math.max(n,s,r),a=Math.min(n,s,r),l=(o+a)/2,c=o-a;if(!c)return[0,0,l];const h=l>.5?c/(2-o-a):c/(o+a);let u;return o===n?u=(s-r)/c+(s<r?6:0):o===s?u=(r-n)/c+2:u=(n-s)/c+4,[u*60,h,l]}function CM(i,t,e){if(i=(i%360+360)%360,t<=0){const c=Math.round(e*255);return[c,c,c]}const n=(1-Math.abs(2*e-1))*t,s=n*(1-Math.abs(i/60%2-1)),r=e-n/2;let o=0,a=0,l=0;return i<60?(o=n,a=s):i<120?(o=s,a=n):i<180?(a=n,l=s):i<240?(a=s,l=n):i<300?(o=s,l=n):(o=n,l=s),[Math.round((o+r)*255),Math.round((a+r)*255),Math.round((l+r)*255)]}function LM(i,t){const[e,n,s]=Lo(i);return n<.02?i:CM(e+t,n,s)}(()=>{const i=[];for(let t=0;t<=24;t++)i.push(`hsl(${t/24*360}, 72%, 56%) ${(t/24*100).toFixed(1)}%`);return`linear-gradient(90deg, ${i.join(", ")})`})();const hc=i=>ko(TM,i.skin),PM=i=>ko(AM,i.mouthColor),IM=i=>ko(Pf,(i.cheeks-gr)/(1-gr)),DM=i=>{const t=Math.max(0,Math.min(1,i.cheeks/gr));return t*t*(3-2*t)};(()=>{const i=["rgb(255,255,255) 0%"];for(let t=0;t<=16;t++){const[e,n,s]=ko(Pf,t/16);i.push(`rgb(${e},${n},${s}) ${((gr+t/16*(1-gr))*100).toFixed(1)}%`)}return`linear-gradient(90deg, ${i.join(", ")})`})();const UM={shape:.35,eyeSize:.6,eyeSpacing:.5,eyeHeight:.5,browWeight:.5,browHeight:.5,noseLength:.5,noseHeight:.5,mouthWidth:.5,mouthColor:0,cheeks:0,skin:0,hairColor:Lo(cc)[0]/360,hat:"none"},Wt=16,Yt=16,Qt=16,Ws=[26,32,42],cu=[236,240,246],hn=(i,t)=>[Math.max(0,Math.min(255,Math.round(i[0]*t))),Math.max(0,Math.min(255,Math.round(i[1]*t))),Math.max(0,Math.min(255,Math.round(i[2]*t)))],Tt={felt:[44,52,66],leather:[122,84,56],band:[188,76,76],party:[226,120,92],partyAlt:[240,214,120],hair:cc,glass:[120,176,208],brass:[186,156,96],steel:[124,134,150],red:[190,58,54],gold:[216,178,82],leaf:[94,158,82],cream:[234,228,208],plum:[124,70,132]},Jn=(i,t)=>Math.round(Math.max(0,Math.min(1,i))*t),hu=2.2,NM=18,FM=6,uu=.55;function zM(i){const t=hu*Math.pow(NM/hu,Math.max(0,Math.min(1,i))),e=Wt/2,n=Yt/2,s=Qt/2;return(r,o,a)=>{const l=Math.abs(r+.5-e)/e,c=Math.abs(o+.5-n)/n,h=l**t+c**t;if(h>1)return!1;const u=Math.abs(a+.5-s)/s;if(a>=Qt-FM){const f=h<=uu?1:((1-h)/(1-uu))**(1/t);return u<=f}return h+u**t<=1}}function OM(i){const t=hc(i),e=zM(i.shape),n=new Map,s=(z,X,k)=>`${z},${X},${k}`;let r=null;const o=new Set,a=new Set;let l;const c=(z,X,k,B)=>{const R=s(z,X,k);n.set(R,l?{x:z,y:X,z:k,c:B,part:l}:{x:z,y:X,z:k,c:B}),r&&r.add(R)},h=(z,X,k,B)=>{const R=s(z,X,k);n.set(R,{x:z,y:X,z:k,c:B}),o.delete(R),a.delete(R)},u=(z,X,k)=>n.has(s(z,X,k));for(let z=0;z<Wt;z++)for(let X=0;X<Yt;X++)for(let k=0;k<Qt;k++)e(z,X,k)&&c(z,X,k,t);const f=(z,X)=>{for(let k=Yt-1;k>=0;k--)if(u(z,k,X))return k;return-1},d=(z,X)=>{for(let k=Qt-1;k>=0;k--)if(u(z,X,k))return k;return-1},m=(z,X,k)=>{if(z<0||z>=Wt||X<0||X>=Yt)return;const B=d(z,X);B>=0&&c(z,X,B,k)},x=Wt/2,g=1+Jn(i.eyeSize,3),p=1+Jn(i.eyeSize,3),M=Math.max(1,6-g),E=1+Jn(i.eyeSpacing,M-1),v=8+Jn(i.eyeHeight,4)-2-Math.floor((p-1)/2),y=v+p-1,b=[[x-E-g,x-E-1],[x+E,x+E+g-1]],L=g>=3&&p>=3;for(const[z,X]of b)for(let k=z;k<=X;k++)for(let B=v;B<=y;B++){const R=!!(L&&k>z&&k<X&&B>v&&B<y);l=L&&!R?"eye":"pupil",m(k,B,L?R?Ws:cu:Ws)}l=void 0,r=o;const _=Jn(i.browWeight,3),S=y+2+(Jn(i.browHeight,4)-2);if(_>0){l="brow";for(const[z,X]of b)for(let k=z-1;k<=X+1;k++)for(let B=0;B<_;B++)m(k,S+B,Tt.hair);l=void 0}r=null;const C=Jn(i.noseLength,8),A=5+(Jn(i.noseHeight,6)-3);if(C>0){const z=hn(t,.9);l="nose";for(let X=x-1;X<=x;X++)for(let k=A;k<=A+1;k++){const B=d(X,k);if(!(B<0))for(let R=1;R<=C;R++)c(X,k,B+R,z)}l=void 0}const U=2*Jn(i.mouthWidth,4),N=3;if(U>0){const z=PM(i),X=U>=6?2:1;l="mouth";for(let k=x-U/2;k<=x+U/2-1;k++)for(let B=N;B<N+X;B++)m(k,B,z);l=void 0}const O=DM(i);if(O>0){const z=IM(i),X=(P,V)=>P[0]===V[0]&&P[1]===V[1]&&P[2]===V[2],k=v-1,B=N+(U>=6?2:1),R=Math.max(B+.5,k-.5);for(const[P,V]of b){const j=V<x,it=(P+V)/2,Z=it+.35*((j?x-1.5:x+.5)-it);for(let at=Math.floor(Z-2);at<=Math.ceil(Z+2);at++)if(!(j?at>x-2:at<x+1))for(let pt=B;pt<=k;pt++){const Rt=1-((at-Z)/1.9)**2-((pt-R)/1.3)**2;if(Rt<=0)continue;const kt=d(at,pt),Xt=kt>=0?n.get(s(at,pt,kt)):void 0;if(!Xt||Xt.part||!X(Xt.c,t))continue;const oe=O*.72*Math.pow(Rt,.8),Ae=[0,1,2].map(Fe=>Math.round(t[Fe]+(z[Fe]-t[Fe])*oe));n.set(s(at,pt,kt),{x:at,y:pt,z:kt,c:Ae,blend:t})}}}const G=(z,X=1)=>{for(let k=0;k<Wt;k++)for(let B=0;B<Qt;B++){const R=f(k,B);if(!(R<0))for(let P=1;P<=X;P++)c(k,R+P,B,z)}},J=(z,X,k)=>{const B=Math.ceil(X)+1;for(let R=x-B;R<x+B;R++)for(let P=x-B;P<x+B;P++)Math.hypot(R+.5-x,P+.5-x)<=X&&c(R,z,P,k)},W=(z,X,k,B)=>{for(let R=z;R<=X;R++)for(let P=0;P<Wt;P++)for(let V=0;V<Qt;V++)Math.hypot(P+.5-x,V+.5-x)<=k&&c(P,R,V,B)},tt=(z,X,k,B,R)=>{const P=Math.ceil(B)+1;for(let V=Math.floor(z-P);V<=z+P;V++)for(let j=Math.floor(X-P);j<=X+P;j++)for(let it=Math.floor(k-P);it<=k+P;it++)Math.hypot(V+.5-z,j+.5-X,it+.5-k)<=B&&c(V,j,it,R)},H=(z,X,k,B=1)=>{for(let R=z;R<=X;R++)for(let P=0;P<Wt;P++){const V=d(P,R);V>=0&&c(P,R,V+B,k)}};switch(r=a,i.hat){case"birthday":{for(let z=0;z<9;z++)W(Yt+z,Yt+z,5.4-z*.62,z%2?Tt.partyAlt:Tt.party);tt(x,Yt+9.5,x,1.6,cu);break}case"mickey":{const z=f(x,x)+2;for(const X of[-.5,Wt+.5])tt(X,z,x,4.2,Ws);break}case"tophat":{J(Yt,8.6,Tt.felt),W(Yt+1,Yt+10,5,Tt.felt),W(Yt+3,Yt+4,5.05,Tt.band);break}case"gangster":{J(Yt,9.6,Tt.felt),W(Yt+1,Yt+5,5,Tt.felt),W(Yt+1,Yt+2,5.05,Tt.band);break}case"goggles":{H(v,y,Tt.brass);for(const[z,X]of b)for(let k=z;k<=X;k++)for(let B=v;B<=y;B++){const R=d(k,B);R>=0&&c(k,B,R+1,Tt.glass)}break}case"pilot":{G(Tt.leather,2),H(Yt-4,Yt-3,Tt.brass);for(let z=Yt-4;z>=4;z--)for(const X of[0,1,Wt-2,Wt-1])for(let k=0;k<Qt;k++)u(X,z,k)&&c(X,z,k,Tt.leather);break}case"model":{J(Yt,12.5,Tt.partyAlt),W(Yt+1,Yt+2,4.4,Tt.partyAlt);break}case"curls":{let z=7;const X=()=>(z=(z*1103515245+12345)%2147483648)/2147483648;for(let k=-2;k<Wt+2;k++)for(let B=-2;B<Qt+2;B++){const R=f(Math.max(0,Math.min(Wt-1,k)),Math.max(0,Math.min(Qt-1,B)));R<0||(X()<.6&&c(k,R+1,B,Tt.hair),X()<.34&&c(k,R+2,B,Tt.hair),X()<.14&&c(k,R+3,B,Tt.hair))}break}case"bob":{G(Tt.hair,2);for(let z=y+1;z<Yt;z++)for(let X=0;X<Wt;X++)for(let k=0;k<Qt;k++)(X<=1||X>=Wt-2||k<=1)&&u(X,z,k)&&c(X,z,k,Tt.hair);break}case"pigtails":{G(Tt.hair,2);for(const z of[-1.5,Wt+1.5])tt(z,Yt-5,x,3.4,Tt.hair);break}case"crown":{const z=Tt.gold,X=hn(z,1.15),k=Tt.band,B=(V,j)=>{const it=Math.hypot(V+.5-x,j+.5-x);return it>=5.1&&it<=6.9};let R=0;for(let V=0;V<Wt;V++)for(let j=0;j<Qt;j++)B(V,j)&&(R=Math.max(R,f(V,j)+3));for(let V=0;V<Wt;V++)for(let j=0;j<Qt;j++){if(!B(V,j))continue;const it=f(V,j);if(!(it<0))for(let Z=it+1;Z<=R;Z++)c(V,Z,j,Z===R?X:z)}const P=[[7,13],[12,10],[2,10],[12,4],[2,4]];for(const[V,j]of P){const it=Math.hypot(V+1-x,j+1-x);for(let Z=V;Z<=V+1;Z++)for(let at=j;at<=j+1;at++){const pt=Math.hypot(Z+.5-x,at+.5-x)>it;for(let Rt=1;Rt<=(pt?5:3);Rt++)c(Z,R+Rt,at,pt&&Rt===5?X:z)}}for(let V=x-1;V<=x;V++)for(let j=R+2;j<=R+3;j++)for(let it=14;it<=15;it++)c(V,j,it,k);break}case"beanie":{const z=Tt.red,X=Tt.cream,k=Math.max(y+1,Yt-6),B=Math.min(k+2,Yt-1),R=[];for(let P=k;P<=B;P++)for(let V=-1;V<=Wt;V++)for(let j=-1;j<=Qt;j++)u(V,P,j)?c(V,P,j,X):(u(V-1,P,j)||u(V+1,P,j)||u(V,P,j-1)||u(V,P,j+1))&&R.push([V,P,j]);for(const[P,V,j]of R)c(P,V,j,X);for(let P=B+1;P<Yt;P++)for(let V=0;V<Wt;V++)for(let j=0;j<Qt;j++)u(V,P,j)&&c(V,P,j,P===B+1?hn(z,.82):z);for(let P=0;P<Wt;P++)for(let V=0;V<Qt;V++){const j=f(P,V);j<=B||(c(P,j+1,V,z),c(P,j+2,V,z))}tt(x,f(x,x)+4.5,x,1.9,X);break}case"cowboy":{let z=0;for(let X=0;X<Wt;X++)for(let k=0;k<Qt;k++)z=Math.max(z,f(X,k)+1);for(let X=0;X<Wt;X++)for(let k=0;k<Qt;k++){const B=f(X,k);if(!(B<0||Math.hypot(X+.5-x,k+.5-x)>5))for(let R=B+1;R<z;R++)c(X,R,k,Tt.leather)}for(let X=x-11;X<x+11;X++)for(let k=x-11;k<x+11;k++){const B=Math.abs(X+.5-x);if(Math.hypot(B,k+.5-x)>10.7)continue;const R=B>7.5?2:B>5.5?1:0;for(let P=0;P<=R;P++)c(X,z+P,k,Tt.leather)}for(let X=0;X<Wt;X++)for(let k=0;k<Qt;k++){const B=Math.abs(X+.5-x);if(Math.hypot(B,k+.5-x)>5)continue;const R=B<1?2:B<2?1:0;for(let P=z+1;P<=z+7-R;P++)c(X,P,k,Tt.leather);R>0&&c(X,z+7-R,k,hn(Tt.leather,.8))}W(z+1,z+2,5.05,Tt.felt);break}case"wizard":{const z=Tt.plum,X=hn(z,.82),k=f(x,x)+1;for(let V=x-6;V<x+6;V++)for(let j=x-6;j<x+6;j++){if(Math.hypot(V+.5-x,j+.5-x)>5.2)continue;const it=f(V,j);if(!(it<0))for(let Z=it+1;Z<=k;Z++)c(V,Z,j,z)}const B=11;for(let V=x-12;V<x+12;V++)for(let j=x-12;j<x+12;j++){const it=Math.hypot(V+.5-x,j+.5-x);if(it<=5.2||it>B)continue;const Z=V>=0&&V<Wt&&j>=0&&j<Qt?f(V,j):-1;c(V,Math.max(k-Math.max(0,Math.round(it)-8),Z+1,y+2),j,X)}const R=13;for(let V=0;V<=R;V++){const j=V/R,it=5-4.1*j,Z=x-6.5*j*j;for(let at=x-6;at<x+6;at++)for(let pt=-2;pt<Qt;pt++)Math.hypot(at+.5-x,pt+.5-Z)<=it&&c(at,k+V,pt,z)}const P=(V,j)=>{for(let it=x-j;it<x+j;it++){const Z=d(it,V);Z>=0&&c(it,V,Z,Tt.gold)}};P(k+3,1),P(k+4,2),P(k+5,1),P(k+8,1),P(k+11,1);break}case"halo":{let z=-1;for(let V=0;V<Wt;V++)for(let j=0;j<Qt;j++)z=Math.max(z,f(V,j));const X=z+3,k=hn(Tt.gold,1.15),B=4.9,R=6.7,P=Math.ceil(R)+1;for(let V=x-P;V<x+P;V++)for(let j=x-P;j<x+P;j++){const it=Math.hypot(V+.5-x,j+.5-x);it<B||it>R||c(V,X,j,j>=x?k:Tt.gold)}break}case"headphones":{const z=Math.min(y+1,10),X=x-2,k=x+1;for(let B=0;B<Wt;B++)for(let R=X;R<=k;R++){const P=f(B,R);P<0||(c(B,P+1,R,Tt.steel),c(B,P+2,R,Tt.steel))}for(let B=z+3;B<Yt;B++)for(const R of[0,Wt-1])for(let P=X;P<=k;P++)u(R,B,P)&&c(R,B,P,Tt.steel);for(let B=0;B<3;B++)for(let R=z-4;R<=z+3;R++)for(let P=x-4;P<=x+3;P++)Math.hypot(R+.5-z,P+.5-x)>3.6||(c(-B,R,P,Ws),c(Wt-1+B,R,P,Ws));for(let B=z-2;B<=z+1;B++)for(let R=x-2;R<=x+1;R++)Math.hypot(B+.5-z,R+.5-x)<=1.6&&(c(-2,B,R,Tt.steel),c(Wt+1,B,R,Tt.steel));break}case"viking":{const z=hn(Tt.steel,.78),X=Math.max(y+2,Yt-5);for(let R=X;R<Yt;R++)for(let P=0;P<Wt;P++)for(let V=0;V<Qt;V++)u(P,R,V)&&c(P,R,V,R===X?z:Tt.steel);for(let R=0;R<Wt;R++)for(let P=0;P<Qt;P++){const V=f(R,P);V<X||(c(R,V+1,P,Tt.steel),c(R,V+2,P,Tt.steel))}const k=Math.max(y+1,X-1);for(let R=k;R<=Yt;R++)for(let P=x-1;P<=x;P++){const V=d(P,R);V>=0&&c(P,R,V+1,z)}const B=Math.max(f(5,x)-4,y+4);for(const R of[-1,1])for(let P=0;P<=18;P++){const V=P/18,j=V*2.05,it=x+R*(6.2+6*Math.sin(j));tt(it,B+8.4-8.4*Math.cos(j),x,2.6-1.6*V,Tt.cream)}break}case"flowers":{const z=Math.max(y+1,Math.min(y+3,Yt-4)),X=Tt.leaf,k=hn(Tt.leaf,.82),B=(it,Z)=>Math.floor(x+it*Z),R=[[0,1],[.87,.5],[.87,-.5],[0,-1]],P=[];for(const[it,Z]of R){let at=2;for(;at<12&&u(B(it,at),z,B(Z,at));)at+=.5;P.push(at)}const V=[];for(let it=z;it<=z+1;it++)for(let Z=0;Z<Wt;Z++)for(let at=0;at<Qt;at++){if(!u(Z,it,at))continue;let pt=!1;for(let Rt=-1;Rt<=1;Rt++)for(let kt=-1;kt<=1;kt++)u(Z+Rt,it,at+kt)||(pt=!0,V.push([Z+Rt,it,at+kt]));pt&&V.push([Z,it,at])}for(const[it,Z,at]of V)c(it,Z,at,Z===z?k:X);const j=[Tt.red,Tt.gold,Tt.cream];for(let it=0;it<R.length;it++){const[Z,at]=R[it],pt=Math.round(x+Z*(P[it]+1)),Rt=Math.round(x+at*(P[it]+1)),kt=j[it%j.length];tt(pt,z+1.5,Rt,1.5,kt),Z>0&&tt(2*x-pt,z+1.5,Rt,1.5,kt)}break}case"afro":{const k=f(x,x),B=Math.max(y+2,Yt-3);for(let R=x-10;R<x+10;R++)for(let P=x-10;P<x+10;P++){const V=Math.abs(R+.5-x),j=Math.abs(P+.5-x),it=(V*V+j*j)/(10*10),Z=f(R,P);if(it>1&&Z<0)continue;const at=it>1?0:7.5*Math.sqrt(1-it),Rt=P>=Qt-6?Math.max(y+1,B-Math.max(0,V-4.5)):y+1,kt=Z>=0?Rt:Math.max(Rt,Math.ceil(k+.5-at)),Xt=it>1?Z:Math.max(Z,Math.floor(k-.5+at));for(let oe=kt;oe<=Xt;oe++)c(R,oe,P,oe<Rt+2?hn(Tt.hair,.8):Tt.hair)}break}case"mohawk":{const z=Tt.hair,X=hn(t,.74);for(let B=0;B<Wt;B++)for(let R=0;R<Qt;R++){const P=f(B,R);if(!(P<0))for(let V=y+2;V<=P;V++)u(B,V,R)&&h(B,V,R,X)}const k=f(x,x);for(let B=1;B<Qt-1;B++){if(f(x,B)<k-4)continue;const P=(B-1)/(Qt-3),V=2+Math.round(4*Math.sin(Math.PI*P));for(const j of[x-1,x])for(let it=f(j,B)+1;it<=f(j,B)+V;it++)c(j,it,B,z)}break}case"ponytail":{const z=Tt.hair,X=Math.max(f(x-1,2),f(x,2))-2;for(let k=0;k<Wt;k++)for(let B=0;B<Qt;B++){const R=f(k,B);R>y&&c(k,R,B,z)}G(z,2);for(let k=y+1;k<Yt;k++)for(let B=0;B<Wt;B++)for(let R=0;R<Qt;R++)(B<=1||B>=Wt-2||R<=3)&&u(B,k,R)&&c(B,k,R,z);for(let k=3;k<=y;k++){const B=6-Math.max(0,Math.min(3,y-k));for(let R=x-B;R<x+B;R++)for(let P=0;P<=2;P++)u(R,k,P)&&c(R,k,P,z)}for(let k=0;k<=14;k++){const B=k/14;tt(x,X-10*B*B,1.5-4.4*Math.sqrt(B),2.7-1.3*B,z)}tt(x,X-.5,-.6,2.1,Tt.band);break}case"longhair":{const z=Tt.hair,X=Qt-5,k=2;G(z,2);for(let B=0;B<Yt;B++)for(let R=0;R<Wt;R++)for(let P=0;P<Qt;P++){if(!u(R,B,P))continue;const V=P>=X,j=R<k||R>=Wt-k;V&&!j||V&&j&&B>=v&&B<=y||c(R,B,P,z)}for(let B=Math.max(Yt-3,y+2);B<Yt;B++)for(let R=0;R<Wt;R++)for(let P=X;P<Qt;P++)u(R,B,P)&&c(R,B,P,z);for(let B=0;B<Wt;B++)for(let R=0;R<Qt;R++){if(!(B<k||B>=Wt-k||R<k)||f(B,R)<0)continue;let V=0;for(;!u(B,V,R);)V++;for(let j=V-1;j>=V-3;j--)c(B,j,R,z)}break}case"buzz":{const z=Tt.hair,X=hn(Tt.hair,1.75),k=Math.min(Yt-2,Math.max(y+3,Yt-3));for(let B=0;B<Wt;B++)for(let R=0;R<Qt;R++){const P=f(B,R);if(P<0)continue;const V=Math.abs(B+.5-x),it=R>=Qt-6?V<5.5?0:V<6.5?1:2:3,Z=Math.max(y+1,Math.min(k-it,P-1));for(let at=Z;at<=P;at++)u(B,at,R)&&c(B,at,R,at<k?X:z)}break}case"bun":{const z=hn(Tt.hair,.74),X=y+2;for(let R=0;R<Wt;R++)for(let P=0;P<Qt;P++){const V=f(R,P);if(V<X)continue;const j=P<=5?5:P<=9?3:2;for(let it=V;it>V-j&&it>=X;it--)u(R,it,P)&&c(R,it,P,Tt.hair);c(R,V+1,P,Tt.hair)}const k=4.5,B=f(x,4);tt(x,B+3,k,3.1,Tt.hair);for(let R=x-4;R<x+4;R++)for(let P=1;P<=8;P++)if(Math.hypot(R+.5-x,P+.5-k)<=2.6)for(let V=B+1;V<=B+2;V++)c(R,V,P,z);break}case"braids":{G(Tt.hair,2);for(let k=y+1;k<Yt;k++)for(let B=0;B<Wt;B++)for(let R=0;R<Qt;R++)(B<=1||B>=Wt-2||R<=1)&&u(B,k,R)&&c(B,k,R,Tt.hair);const z=hn(Tt.hair,1.3),X=-5;for(const k of[-1,Wt]){const B=Math.max(0,Math.min(Wt-1,k)),R=Math.min(f(B,6),Yt-4);if(!(R<0)){for(let P=X;P<=R;P++){const V=P<=X+3,j=P<=X+1;let it=(P%4+4)%4<2?Tt.hair:z;j&&(it=Tt.band);for(let Z=-1;Z<=1;Z++)for(let at=-1;at<=1;at++)(!V||Math.abs(Z)+Math.abs(at)<2)&&c(k+Z,P,6+at,it)}tt(k+.5,X-2,6.5,1.9,Tt.band)}}break}}r=null;const $=.18,st=.25;let ft=-1;if(a.size){const z=new Map;let X=0,k=0;for(const P of a){const V=n.get(P);if(!V)continue;k++;const j=`${V.c[0]},${V.c[1]},${V.c[2]}`,it=z.get(j);it?it.n++:z.set(j,{n:1,c:V.c,chroma:(Math.max(...V.c)-Math.min(...V.c))/255}),z.get(j).chroma>=$&&X++}const B=k>0&&X/k<st;let R=null;for(const P of z.values())!B&&P.chroma<$||(!R||P.n>R.n)&&(R=P);R&&(ft=Lo(R.c)[0])}else o.size&&(ft=Lo(cc)[0]);if(ft>=0){const z=i.hairColor*360-ft;if(Math.abs(z)>.5)for(const X of[...a,...o]){const k=n.get(X);k&&(k.c=LM(k.c,z))}}return{voxels:[...n.values()],anchor:ft}}function kM(i){return OM(i).voxels}const BM=[{n:[1,0,0],t1:[0,1,0],t2:[0,0,1]},{n:[-1,0,0],t1:[0,0,1],t2:[0,1,0]},{n:[0,1,0],t1:[0,0,1],t2:[1,0,0]},{n:[0,-1,0],t1:[1,0,0],t2:[0,0,1]},{n:[0,0,1],t1:[1,0,0],t2:[0,1,0]},{n:[0,0,-1],t1:[0,1,0],t2:[1,0,0]}],La=.42,Kr=new Ut,fu=(i,t,e)=>(Kr.setRGB(i/255,t/255,e/255,Ie),[Kr.r,Kr.g,Kr.b]);function HM(i,t){const e=new Map;for(const S of i)e.set(`${S.x},${S.y},${S.z}`,S);const n=(S,C,A)=>e.get(`${S},${C},${A}`),s=(S,C)=>S[0]===C[0]&&S[1]===C[1]&&S[2]===C[2],r=(S,C)=>s(S.c,C.c)||!!S.blend&&(!!C.blend||s(S.blend,C.c))||!!C.blend&&s(C.blend,S.c);let o=1/0,a=1/0,l=1/0,c=-1/0,h=-1/0,u=-1/0;for(const S of i)S.x<o&&(o=S.x),S.y<a&&(a=S.y),S.z<l&&(l=S.z),S.x>c&&(c=S.x),S.y>h&&(h=S.y),S.z>u&&(u=S.z);const f=t?t[0]:(o+c)/2,d=t?t[1]:(a+h)/2,m=t?t[2]:(l+u)/2,x=[],g=[],p=[],M=[],E=[],v=new Set;for(const S of i){const C=S.x-f,A=S.y-d,U=S.z-m,N=fu(S.c[0],S.c[1],S.c[2]),O=fu(S.c[0]*La,S.c[1]*La,S.c[2]*La);for(const{n:G,t1:J,t2:W}of BM){if(n(S.x+G[0],S.y+G[1],S.z+G[2]))continue;const tt=(z,X)=>[C+G[0]/2+J[0]*z+W[0]*X,A+G[1]/2+J[1]*z+W[1]*X,U+G[2]/2+J[2]*z+W[2]*X],H=tt(-.5,-.5),$=tt(.5,-.5),st=tt(.5,.5),ft=tt(-.5,.5);for(const z of[H,$,st,H,st,ft])x.push(z[0],z[1],z[2]),g.push(G[0],G[1],G[2]),p.push(N[0],N[1],N[2]);for(const[z,X,k]of[[J,W,1],[J,W,-1],[W,J,1],[W,J,-1]]){const B=n(S.x+z[0]*k,S.y+z[1]*k,S.z+z[2]*k);if(B&&r(B,S)&&!n(S.x+z[0]*k+G[0],S.y+z[1]*k+G[1],S.z+z[2]*k+G[2]))continue;const R=pt=>[C+G[0]/2+z[0]*k/2+X[0]*pt/2,A+G[1]/2+z[1]*k/2+X[1]*pt/2,U+G[2]/2+z[2]*k/2+X[2]*pt/2],P=R(1),V=R(-1),j=P.map(pt=>pt.toFixed(2)).join(),it=V.map(pt=>pt.toFixed(2)).join(),Z=j<it?`${j}|${it}`:`${it}|${j}`;if(v.has(Z))continue;v.add(Z);const at=.006;M.push(P[0]+G[0]*at,P[1]+G[1]*at,P[2]+G[2]*at,V[0]+G[0]*at,V[1]+G[1]*at,V[2]+G[2]*at),E.push(O[0],O[1],O[2],O[0],O[1],O[2])}}}const y=new we;y.setAttribute("position",new Vt(x,3)),y.setAttribute("normal",new Vt(g,3)),y.setAttribute("color",new Vt(p,3));const b=new we;b.setAttribute("position",new Vt(M,3)),b.setAttribute("color",new Vt(E,3));const L=[(c-o)/2+.5,(h-a)/2+.5,(u-l)/2+.5],_=Math.max(L[0],L[1],L[2])*1.15;return{faces:y,edges:b,radius:_}}const If=["raise0","raise1","inner0","inner1","arch0","arch1","lid0","lid1","tilt0","tilt1","low0","low1","pupil","smile","open","skew","round","roll","nod"],ee=(i,t)=>({[i+"0"]:t,[i+"1"]:t}),GM={calm:{...ee("lid",.1),smile:.08},pleased:{...ee("lid",.2),...ee("low",.3),...ee("raise",.1),smile:.65},happy:{...ee("raise",.35),...ee("arch",.25),...ee("low",.42),smile:.9,open:.16},joy:{...ee("raise",.85),...ee("arch",.4),...ee("low",.55),smile:1,open:.6,roll:.06},surprised:{...ee("raise",1.5),...ee("arch",.45),...ee("lid",-.14),pupil:.7,open:.8,round:1},curious:{raise0:.2,raise1:1.05,arch0:.2,arch1:.75,lid0:.16,lid1:-.04,roll:.17,round:.4,open:.12,smile:.1},doubt:{raise0:-.55,raise1:1,inner0:-.38,lid0:.42,tilt0:.3,lid1:.04,skew:.65,smile:-.08,roll:-.07},thinking:{raise0:.55,inner1:.35,raise1:-.1,...ee("lid",.2),skew:.42},sad:{...ee("inner",.95),...ee("raise",-.1),...ee("lid",.36),...ee("tilt",-.5),smile:-.75,nod:.08},bored:{...ee("lid",.5),...ee("raise",-.28),smile:-.15,skew:.25,nod:.05},sleepy:{...ee("lid",.72),...ee("tilt",-.25),...ee("raise",-.2),...ee("inner",.2),smile:-.05,nod:.18},yawn:{...ee("lid",1),...ee("raise",.75),...ee("inner",.3),open:1,round:.55,nod:-.14},asleep:{...ee("lid",1.05),...ee("raise",-.12),...ee("inner",.12),smile:.05,open:.06},excited:{...ee("raise",.9),...ee("inner",-.1),...ee("lid",-.06),smile:.95,open:.38,pupil:1.12},asking:{...ee("raise",.85),...ee("arch",.3),...ee("lid",.04),roll:.12,smile:.25}},VM={surprised:24,excited:14,joy:12,doubt:10,curious:9,sad:4,sleepy:3,bored:4,yawn:5,asleep:2.5},du=()=>Object.fromEntries(If.map(i=>[i,i==="pupil"?1:0])),WM=i=>new Ut().setRGB(i[0]/255,i[1]/255,i[2]/255,Ie);class XM{constructor(t){I(this,"head",new Pe);I(this,"solid",[]);I(this,"drop");I(this,"roll",0);I(this,"nod",0);I(this,"own",[]);I(this,"brows",[]);I(this,"eyes",[]);I(this,"mouth",[]);I(this,"seam",0);I(this,"lipH",.5);I(this,"browLo",0);I(this,"browHi",0);I(this,"d",du());I(this,"mood","calm");I(this,"feeling",null);I(this,"feelFor",0);I(this,"blinkIn",1.5);I(this,"blinkT",-1);I(this,"blinkLen",.13);I(this,"glance",new Bt);I(this,"glanceIn",1);I(this,"micro",new Bt);I(this,"microIn",.5);I(this,"talkT",0);I(this,"syl",0);I(this,"sylLen",.16);I(this,"sylAmp",0);I(this,"sylRound",0);I(this,"pause",0);I(this,"beat",0);I(this,"wasTalking",!1);I(this,"lookX",0);I(this,"lookY",0);const e=kM(t);let n=1/0,s=1/0,r=1/0,o=-1/0,a=-1/0,l=-1/0;for(const H of e)n=Math.min(n,H.x),o=Math.max(o,H.x),s=Math.min(s,H.y),a=Math.max(a,H.y),r=Math.min(r,H.z),l=Math.max(l,H.z);const c=(n+o)/2,h=(s+a)/2,u=(r+l)/2;this.drop=(h-(Yt-1)/2)/16;const f=hc(t),d=8,m=H=>H<d?0:1,x=[!1,!1];for(const H of e)H.part==="eye"&&(x[m(H.x)]=!0);const g=[236,240,246],p=e.map(H=>H.part==="brow"||H.part==="mouth"?{...H,c:f,part:void 0}:H.part==="pupil"&&x[m(H.x)]?{...H,c:g}:H),{faces:M,edges:E}=HM(p,[c,h,u]),v=new vo({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),y=new Xu({vertexColors:!0});this.own.push(M,E,v,y);const b=new Se(M,v);this.head.add(b,new _p(E,y)),this.solid.push(b);const L=new Sn(1,1,1);this.own.push(L);const _=new Map,S=H=>{const $=H.join();let st=_.get($);return st||(st=new vo({color:WM(H)}),_.set($,st),this.own.push(st)),st},C=H=>{const $=new Se(L,S(H));return this.head.add($),this.solid.push($),$},A=H=>H.z-u+.5,U=e.filter(H=>H.part==="brow");for(const H of[0,1]){const $=U.filter(B=>m(B.x)===H);if(!$.length)continue;const st=$.map(B=>B.x),ft=Math.min(...st),z=Math.max(...st),X=(ft+z)/2,k=Math.max(.5,(z-ft)/2);for(const B of $){const R=H===0?(X-B.x)/k:(B.x-X)/k;this.brows.push({m:C(B.c),x:B.x-c,y:B.y-h,z:A(B),xn:R,side:H})}}const N=e.filter(H=>H.part==="eye"||H.part==="pupil"),O=f.map(H=>Math.round(H*.88));let G=-1/0;for(const H of[0,1]){const $=N.filter(kt=>m(kt.x)===H);if(!$.length)continue;const st=$.map(kt=>kt.x),ft=$.map(kt=>kt.y),z=Math.min(...st),X=Math.max(...st),k=Math.min(...ft),B=Math.max(...ft);G=Math.max(G,B);const R=Math.max(...$.map(A)),P=(z+X)/2-c,V=(k+B)/2-h,j=X-z+1,it=B-k+1;let Z=null;const at=Math.max(1,j-2),pt=Math.max(1,it-2);if(x[H]){const kt=$.find(Xt=>Xt.part==="pupil").c;Z=C(kt),Z.scale.set(at,pt,.05)}const Rt=[];for(let kt=z;kt<=X;kt++){const Xt=j>1?H===0?(kt-z)/(j-1):(X-kt)/(j-1):.5;Rt.push({x:kt-c,k:Xt,up:C(O),low:C(O)})}this.eyes.push({side:H,y0:k-h-.5,y1:B-h+.5,z:R,cx:P,cy:V,pupil:Z,pw:at,ph:pt,reach:(j-at)/2,cols:Rt})}const J=e.filter(H=>H.part==="mouth");if(J.length){const H=[...new Set(J.map(R=>R.x))].sort((R,P)=>R-P),$=J.map(R=>R.y),st=Math.min(...$),ft=Math.max(...$),z=ft-st+1;this.seam=z>=2?(st+ft)/2-h:st-h,this.lipH=z>=2?1:.5;const X=(H[0]+H[H.length-1])/2,k=Math.max(.5,(H[H.length-1]-H[0])/2),B=J[0].c;for(const R of H){const P=Math.max(...J.filter(V=>V.x===R).map(A));this.mouth.push({x:R-c,z:P,xn:(R-X)/k,top:C(B),bot:C(B),inside:C([46,22,28])})}}const W=this.brows.map(H=>H.y),tt=Math.max(...e.filter(H=>H.c[0]===f[0]&&H.c[1]===f[1]&&H.c[2]===f[2]).map(H=>H.y));this.browLo=G===-1/0?-2:G-h+.85-(W.length?Math.min(...W):0),this.browHi=tt-h-.8-(W.length?Math.max(...W):0),this.apply()}setMood(t){this.mood=t}feel(t,e=2.4){this.feeling=t,this.feelFor=e}blink(t=!1){this.blinkT<0&&(this.blinkT=0,this.blinkLen=t?.38:.13)}get current(){return this.feeling??this.mood}update(t,e,n,s=null){this.feeling&&(this.feelFor-=t,this.feelFor<=0&&(this.feeling=null));const r=this.current,o={...du(),...GM[r]};if(s!==null&&(o.open=.05+.2*Math.max(0,Math.sin(Math.PI*2*(s-.5))),o.round=.6),n!==null){if(this.talkT+=t,this.syl-=t,this.pause>0&&(this.pause-=t),this.syl<=0){this.sylLen=.13+Math.random()*.08,this.syl=this.sylLen;const d=n.toLowerCase();".!?".includes(d)?(this.pause=.22,this.sylAmp=0):",;:".includes(d)?(this.pause=.1,this.sylAmp=.1):d===" "?this.sylAmp=.15:"aeiouy".includes(d)?this.sylAmp=.6+Math.random()*.35:this.sylAmp=.28+Math.random()*.2,this.sylRound="ou".includes(d)?.8:0,Math.random()<.16&&(this.beat=1),Math.random()<.05&&this.blink()}const u=1-this.syl/this.sylLen,f=this.pause>0?0:this.sylAmp*Math.pow(Math.sin(Math.PI*u),.65);o.open=Math.max(o.open*.6,f),o.round=Math.max(o.round,this.sylRound*f),o.lid0-=.05,o.lid1-=.05,this.wasTalking=!0}else this.wasTalking&&(this.wasTalking=!1,this.blink());this.beat=Math.max(0,this.beat-t*4),o.raise0+=.42*this.beat,o.raise1+=.42*this.beat,o.nod+=.05*this.beat;const a=VM[r]??8;for(const u of If){const f=u==="open"||u==="round"?30:u.startsWith("raise")?Math.max(a,12):a;this.d[u]+=(o[u]-this.d[u])*Math.min(1,t*f)}this.blinkIn-=r==="asleep"?0:t,this.blinkIn<=0&&(this.blink(r==="sleepy"),this.blinkIn=(r==="sleepy"?3:1.8)+Math.random()*3.6,Math.random()<.18&&(this.blinkIn=.28));let l=0;if(this.blinkT>=0){this.blinkT+=t;const u=this.blinkT/this.blinkLen;l=u<.4?u/.4:u<.55?1:1-(u-.55)/.45,u>=1&&(this.blinkT=-1)}this.glanceIn-=t,this.glanceIn<=0&&(this.glance.set((Math.random()-.5)*1.2,(Math.random()-.5)*.7),this.glanceIn=1.4+Math.random()*2.4),this.microIn-=t,this.microIn<=0&&(this.micro.set((Math.random()-.5)*.24,(Math.random()-.5)*.16),this.microIn=.35+Math.random()*.9);let c=this.glance.x,h=this.glance.y;if(e){const u=Math.max(.4,Math.abs(e.z));c=e.x/u*1.6,h=e.y/u*1.6}r==="thinking"&&(c=.7,h=.6),this.lookX+=(dn.clamp(c+this.micro.x,-1,1)-this.lookX)*Math.min(1,t*16),this.lookY+=(dn.clamp(h+this.micro.y,-1,1)-this.lookY)*Math.min(1,t*16),this.roll=this.d.roll,this.nod=this.d.nod,this.apply(l)}apply(t=0){const e=this.d,n=r=>e[r],s=.1;for(const r of this.brows){const o=r.side;let a=n("raise"+o)+n("inner"+o)*-r.xn*.65+n("arch"+o)*(1-r.xn*r.xn)*.9;a=dn.clamp(a,this.browLo,this.browHi),r.m.position.set(r.x,r.y+a,r.z+.14+s/2),r.m.scale.set(1.001,1,s)}for(const r of this.eyes){const o=r.side,a=r.y1-r.y0;for(const l of r.cols){const c=dn.clamp(Math.max(t*1.05,n("lid"+o)+n("tilt"+o)*(l.k-.5)*1.2),0,1.05)*a,h=.75+.5*(1-Math.abs(2*l.k-1)),u=t>.5?0:dn.clamp(n("low"+o)*h,0,1)*a*.6;this.lid(l.up,l.x,r.y1+.08,-(c+(c>.01?.08:0)),r.z),this.lid(l.low,l.x,r.y0-.08,u+(u>.01?.08:0),r.z)}if(r.pupil){const l=dn.clamp(e.pupil,.6,1.25);r.pupil.scale.set(r.pw*l,r.ph*l,.05),r.pupil.position.set(r.cx+this.lookX*r.reach*.95,r.cy+this.lookY*r.reach*.7,r.z+.02)}}for(const r of this.mouth){const o=r.xn,a=e.smile*(1.25*o*o-.25)+e.skew*o*.7,l=dn.clamp(e.round,0,1),c=Math.max(0,e.open)*(1-.55*o*o)*(1-l*.75*o*o)*2.4,h=1-l*.35*Math.max(0,Math.abs(o)-.5)*2,u=this.seam+a;r.top.position.set(r.x,u+this.lipH/2,r.z+.01+s/2),r.top.scale.set(h,this.lipH,s),r.bot.position.set(r.x,u-c-this.lipH/2,r.z+.01+s/2),r.bot.scale.set(h,this.lipH,s),r.inside.visible=c>.02,r.inside.position.set(r.x,u-c/2,r.z+.005+s/4),r.inside.scale.set(h*.98,Math.max(.001,c),s/2)}}lid(t,e,n,s,r){const o=Math.abs(s);t.visible=o>.01,t.visible&&(t.position.set(e,n+s/2,r+.07+.03),t.scale.set(1.001,o,.06))}dispose(){for(const t of this.own)t.dispose()}}function qM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=pu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const m=pu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function pu(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new yn(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const ye=22,Df=.6,un=Math.PI*2,Te=(i,t,e)=>i<t?t:i>e?e:i,On=i=>i<0?0:i>1?1:i,zt=(i,t,e)=>i+(t-i)*e,ne=i=>{const t=On(i);return t*t*(3-2*t)},YM=i=>{const t=On(i);return t*t*t*(t*(t*6-15)+10)},Xs=i=>i-Math.floor(i),xn=i=>Math.atan2(Math.sin(i),Math.cos(i)),Uf=(i,t)=>.05+.4*Math.max(0,1-i/(.55*t)),si=-.06,nn=.11,Qe=.19;class $M{constructor(t){I(this,"xs",[]);I(this,"zs",[]);I(this,"cum",[]);I(this,"total",0);const e=[];for(const s of t)(!e.length||Math.hypot(s.x-e[e.length-1].x,s.z-e[e.length-1].z)>1e-4)&&e.push(s);const n=(s,r)=>{const o=this.xs.length;if(o){const a=Math.hypot(s-this.xs[o-1],r-this.zs[o-1]);if(a<1e-5)return;this.total+=a}this.xs.push(s),this.zs.push(r),this.cum.push(this.total)};n(e[0].x,e[0].z);for(let s=1;s<e.length-1;s++){const r=e[s-1],o=e[s],a=e[s+1],l=Math.hypot(o.x-r.x,o.z-r.z),c=Math.hypot(a.x-o.x,a.z-o.z),h=(o.x-r.x)/l,u=(o.z-r.z)/l,f=(a.x-o.x)/c,d=(a.z-o.z)/c;if(h*f+u*d>.999){n(o.x,o.z);continue}const m=Math.min(.42,l*.5,c*.5),x=o.x-h*m,g=o.z-u*m,p=o.x+f*m,M=o.z+d*m;for(let E=0;E<=8;E++){const v=E/8,y=1-v;n(y*y*x+2*y*v*o.x+v*v*p,y*y*g+2*y*v*o.z+v*v*M)}}e.length>1&&n(e[e.length-1].x,e[e.length-1].z)}seg(t){const e=this.cum;if(t<=0||e.length<2)return 0;if(t>=this.total)return e.length-2;let n=0,s=e.length-1;for(;s-n>1;){const r=n+s>>1;e[r]<=t?n=r:s=r}return n}at(t,e){if(this.xs.length<2)return e.x=this.xs[0],e.z=this.zs[0],e;const n=this.seg(t),s=this.cum[n+1]-this.cum[n],r=s>0?On((t-this.cum[n])/s):0;return e.x=zt(this.xs[n],this.xs[n+1],r),e.z=zt(this.zs[n],this.zs[n+1],r),e}yawAt(t){if(this.xs.length<2)return 0;const e=this.seg(Te(t,0,this.total-1e-4));return Math.atan2(this.xs[e+1]-this.xs[e],this.zs[e+1]-this.zs[e])}}const Zr=.05,Jr=.12;class KM{constructor(t,e){I(this,"L");I(this,"thigh");I(this,"shin");I(this,"footH",.06);I(this,"hipX",.17);I(this,"armLen");I(this,"legless");I(this,"pos",new D);I(this,"yaw",0);I(this,"lean",0);I(this,"roll",0);I(this,"squash",0);I(this,"stretch",0);I(this,"feet");I(this,"arms");I(this,"onPuff",null);I(this,"onPrint",null);I(this,"airborne",!1);I(this,"rest","stand");I(this,"breath",0);I(this,"asleep",!1);I(this,"headDrop",0);I(this,"hipDrop",0);I(this,"scratch",null);I(this,"scratchIn",5);I(this,"world");I(this,"base",new D);I(this,"vy",0);I(this,"qv",0);I(this,"qRest",0);I(this,"leanV",0);I(this,"leanRest",0);I(this,"sv",0);I(this,"stretchRest",0);I(this,"speed",0);I(this,"lastSpeed",0);I(this,"wantYaw",null);I(this,"trip",null);I(this,"pending",null);I(this,"act",null);I(this,"phase",0);I(this,"running",0);I(this,"clockOn",!1);I(this,"gRef",0);I(this,"held",!1);I(this,"wallSide",0);I(this,"sway",0);I(this,"swayV",0);I(this,"shift",0);I(this,"shiftIn",3);I(this,"clock",0);I(this,"tapT",-1);I(this,"seq",null);I(this,"queued",[]);I(this,"restYaw",null);I(this,"anchor",{x:0,z:0,g:0,yaw:0});I(this,"t1",new D);I(this,"t2",new D);I(this,"t3",new D);I(this,"e1",new wn);this.world=e,this.L=Math.max(0,t-1),this.legless=this.L<.3;const n=Math.max(.3,this.L)-this.footH;this.thigh=n/2,this.shin=n/2,this.armLen=this.legless?.34:Math.min(3,Math.max(.6,this.L))*.85;const s=o=>({side:o,mode:"ground",sole:new D,yaw:0,pitch:0,from:new D,to:new D,fromYaw:0,toYaw:0,s:0,dur:.3,clocked:!1,apex:0,rel:new D,kneeOut:0,sy:0,ankle:new D,q:new me,toe:0});this.feet=[s(-1),s(1)];const r=o=>({side:o,pitch:0,out:.08,elbow:.2,vp:0,vo:0,ve:0,tp:0,to:.08,te:.2,reach:null,reachW:0,flat:!1});this.arms=[r(-1),r(1)]}get legW(){return Math.max(.5,this.L)}gaitSpeed(t){const e=this.legW;return this.legless?t==="bound"?4.5:t==="run"?3.2:1.6:t==="walk"?Math.sqrt(.09*ye*e):t==="run"?Math.sqrt(.45*ye*e):Math.min(9,Math.sqrt(1.15*ye*e))}get boundFreq(){return Math.max(.85,1/(2*.43*Math.sqrt(this.legW/2)))}strideAt(t){const e=this.legW,n=Math.max(.02,t*t/(ye*e)),s=Te(2*n**.3*e,.35*e,2.6*e),r=Math.max(s,t/this.boundFreq);return zt(s,r,this.running)}get duty(){return zt(.6,.2,this.running)}standY(t){return this.legless?t+.5:t+this.footH+(this.thigh+this.shin)*.975+.5}stepUpMax(){return .42*this.L+.02}stepDownMax(){return .7*this.L+.02}jumpUpMax(){return .82*this.L}place(t,e,n){this.trip=null,this.act=null,this.pending=null,this.seq=null,this.queued=[],this.rest="stand",this.asleep=!1,this.clockOn=!1,this.speed=0,this.yaw=n,this.wantYaw=null,this.base.set(t,0,e),this.pos.set(t,this.standY(this.world.groundAt(t,e)),e),this.gRef=this.world.groundAt(t,e),this.vy=0,this.lean=0,this.roll=0;for(const s of this.feet)this.neutral(s,this.base,n,s.sole),s.mode="ground",s.yaw=n,s.pitch=0;this.resolveFeet()}busy(){return!!this.trip||!!this.act||!!this.pending||!!this.seq||this.rest!=="stand"}travel(t,e,n){if(this.act&&this.act.kind==="leap"||this.rest!=="stand"||this.seq){this.trip=null,this.pending={cells:t,gait:e,onArrive:n},(this.rest!=="stand"||this.seq)&&this.setRest("stand");return}if(this.act=null,this.feetDown(),!t.length){this.trip=null,n==null||n();return}const s={x:this.base.x,z:this.base.z},r=this.legless?[{kind:"path",pts:[s,...t]}]:this.split(s,t);this.trip={gait:e,legs:r,path:null,s:0,ground:null,settle:0,onArrive:n},this.nextLeg()}stop(){this.trip=null,this.pending=null}turnTo(t){this.wantYaw=t}perform(t,e){if(this.act||this.rest!=="stand"||this.seq)return!1;const n={wave:1.3,cheer:1,spin:1.15,jump:1,sigh:1.4,tap:1.6}[t];return this.act={kind:t,t:0,dur:n,then:e,yaw0:this.yaw},(t==="jump"||t==="cheer")&&(this.act.jump=this.makeJump(!1,this.pos.clone(),t==="jump"?.5+.12*this.L:.28+.06*this.L,this.yaw)),t==="tap"&&(this.tapT=0),!0}setRest(t,e){if(this.legless&&t!=="stand")return!1;const n=this.queued.length?this.queued[this.queued.length-1]:this.seq?this.seq.to:this.rest;if(n===t)return!0;if(n==="stand"&&t!=="stand"){const r=this.restWay(this.base.x,this.base.z,e??this.yaw);if(!r)return!1;t==="lie"&&!r.lie&&(t="kneel"),this.restYaw=r.yaw}else if(t==="lie"&&!this.roomToRest(this.seq||this.rest!=="stand"?this.anchor.yaw:this.restYaw??this.yaw,!0))return!1;const s=[];return t==="lie"&&n==="stand"?s.push("kneel","lie"):t==="kneel"&&n==="lie"?s.push("stand","kneel"):s.push(t),this.queued.push(...s),t!=="stand"&&(this.trip=null,this.act=null),!0}restWay(t,e,n){const s=[0,.4,-.4,.8,-.8,1.2,-1.2,1.6,-1.6,2.1,-2.1,Math.PI].map(a=>n+a),r=s.find(a=>this.roomToRest(a,!0,t,e));if(r!==void 0)return{yaw:r,lie:!0};const o=s.find(a=>this.roomToRest(a,!1,t,e));return o===void 0?null:{yaw:o,lie:!1}}roomAt(t,e,n){return this.legless?null:this.restWay(t,e,n)}roomToRest(t,e,n=this.base.x,s=this.base.z){const r=this.world.groundAt(n,s),o=this.thigh+this.shin,a=Math.cos(t),l=Math.sin(t),c=(u,f)=>Math.abs(this.world.groundAt(n+a*u+l*f,s-l*u+a*f)-r)<.25,h=this.thigh+.4;for(let u=.3;u<h;u+=.3)if(!c(-.45,u)||!c(.45,u))return!1;if(!c(-.45,h)||!c(.45,h)||!c(0,-.45))return!1;if(!e)return!0;for(let u=.3;u<=o*.95+.35;u+=.3)if(!c(-.3,u)||!c(.3,u))return!1;if(!c(-.7,-.5)||!c(.7,-.5)||!c(0,-.6))return!1;for(let u=.1;u<=1.05;u+=.16)for(let f=.5;f<=o*.92+.35;f+=.3)if(!c(.25+Math.sin(u)*f,Math.cos(u)*f))return!1;for(const[u,f]of[[-.8,-.5],[-.8,0],[-.8,.5],[-.6,1.1],[-.3,.9]])if(!c(u,f))return!1;return!0}get lyingStill(){return this.rest==="lie"&&!this.seq}get idle(){return!this.trip&&!this.act&&!this.pending&&!this.seq&&this.rest==="stand"}split(t,e){const n=[];let s=[t],r={x:Math.round(t.x),z:Math.round(t.z)},o=this.world.groundAt(r.x,r.z);for(const a of e){const l=this.world.groundAt(a.x,a.z),c=l-o,h=c>this.stepUpMax()?c>this.jumpUpMax()?"climb":"jump":-c>this.stepDownMax()?"drop":null;if(h){const u={x:Math.sign(a.x-r.x),z:Math.sign(a.z-r.z)},f=h==="climb"?c>this.L?0:.12:h==="jump"?.14:.12;s.push({x:r.x+u.x*f,z:r.z+u.z*f}),n.push({kind:"path",pts:s}),n.push({kind:"edge",type:h,a:r,b:a,ha:o,hb:l}),s=[{x:a.x,z:a.z}]}else s.push(a);r=a,o=l}return s.length>1&&n.push({kind:"path",pts:s}),n}nextLeg(){var n;const t=this.trip,e=t.legs.shift();if(t.settle=0,!e){this.trip=null,(n=t.onArrive)==null||n.call(t);return}if(e.kind==="path"){const s=new $M(e.pts);if(t.path=s,t.s=0,this.legless){t.ground=[];for(let r=0;r<=s.total+Zr;r+=Zr)s.at(r,this.t1),t.ground.push(this.world.groundAt(this.t1.x,this.t1.z))}else this.clockOn||this.startClock(s.yawAt(.05))}else{t.path=null,this.clockOn=!1;const s={x:Math.sign(e.b.x-e.a.x),z:Math.sign(e.b.z-e.a.z)},r=new D(e.b.x-s.x*.05,this.standY(e.hb),e.b.z-s.z*.05),o=e.type==="climb",a=o?.3+.05*this.L:e.hb>e.ha?.22+.04*this.L:.06+.03*this.L;if(this.act={kind:"leap",t:0,dur:9,yaw0:this.yaw},this.act.jump=this.makeJump(e.type==="drop",r,a,Math.atan2(s.x,s.z)),o){const l={x:(e.a.x+e.b.x)/2,z:(e.a.z+e.b.z)/2},c={x:s.z,z:-s.x};this.act.jump.grip=[-1,1].map(h=>new D(l.x+c.x*h*.3+s.x*.14,e.hb+.01,l.z+c.z*h*.3+s.z*.14))}}}startClock(t){const e=Math.sin(t),n=Math.cos(t),s=o=>(o.sole.x-this.base.x)*e+(o.sole.z-this.base.z)*n;for(const o of this.feet)o.mode==="swing"&&!o.clocked&&(o.mode="ground",o.sole.copy(o.to),o.yaw=o.toYaw);const r=s(this.feet[0])<=s(this.feet[1])?0:1;this.phase=r*.5+this.duty+.001,this.clockOn=!0}update(t){const e=Math.min(t,.05),n=Math.max(1,Math.ceil(e/(1/120)));for(let s=0;s<n;s++)this.step(e/n)}step(t){this.clock+=t,this.airborne=!1;for(const n of this.arms)n.reach=null,n.flat=!1;const e=this.trip;!this.seq&&this.queued.length&&!this.act&&!e&&this.readyToRest()&&this.beginRest(),this.seq||this.rest!=="stand"?this.stepRest(t):this.asleep?this.breath=Xs(this.breath+t/3.6):this.act?this.stepAct(t):e&&e.path?this.legless?this.stepHopper(t,e):this.stepWalk(t,e):this.stepStand(t),this.stepSprings(t),this.resolveFeet(t)}stepWalk(t,e){const n=e.path,s=this.gaitSpeed(e.gait),r=e.gait==="bound",o=r?6.5:e.gait==="run"?7:5,a=r?5:e.gait==="run"?7:6,l=n.total-e.s;let c=Math.min(s,Math.sqrt(2*a*Math.max(0,l-.01))),h=1/0;this.held=!1;for(const y of this.feet)y.mode==="ground"&&(h=Math.min(h,y.sole.y));if(h<1/0){const y=Math.sin(this.yaw),b=Math.cos(this.yaw),L=this.world.groundAt(this.base.x,this.base.z);for(let _=0;_<=.8;_+=.05){const S=this.world.groundAt(this.base.x+y*_,this.base.z+b*_);if(S>Math.max(h,L)+.2){S<=h+this.stepUpMax()+.05&&(c=Math.min(c,Math.sqrt(2*a*2*Math.max(0,_-.18))),this.held=_<.45);break}}}const u=Math.abs(xn(n.yawAt(Math.min(n.total,e.s+.25))-this.yaw));c*=On((1.6-u)/1.1),this.speed+=Te(c-this.speed,-a*2*t,o*t),l<=.01&&(this.speed=0);const f=this.gaitSpeed("walk"),d=this.gaitSpeed("bound"),m=On((this.speed-f*1.05)/(d*.85-f*1.05));this.running+=(m-this.running)*Math.min(1,t*6),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base);const x=n.yawAt(Math.min(n.total,e.s+.25+.3*this.running)),g=zt(4.5,8,this.running)*t;this.yaw+=Te(xn(x-this.yaw),-g,g);const p=f/this.strideAt(f),M=Math.max(p*zt(.75,1.5,ne((u-.3)/.6)),this.speed/this.strideAt(Math.max(this.speed,.15))),E=this.duty,v=this.running>.45;if(this.clockOn){this.phase+=M*t;for(let y=0;y<2;y++){const b=this.feet[y],L=Xs(this.phase-y*.5);L<E?b.mode==="swing"&&b.clocked&&this.touchDown(b,v?1:.55):(b.mode!=="swing"&&(this.liftOff(b,!0,0),this.feet.every(_=>_.mode!=="ground")&&(this.qv+=1.6*this.running)),b.s=(L-E)/(1-E),b.s<.7&&this.aimSwing(b,e,(1-L)/M,E/2/M)),this.footPitch(b,L,E,v)}}if(this.airborne=this.clockOn&&this.feet.every(y=>y.mode==="swing"),this.stretchRest=this.airborne?.09*this.running:0,l<=.01){if(this.clockOn){for(const b of this.feet)b.mode!=="swing"||!b.clocked||(b.clocked=!1,b.dur=Math.max(.08,(1-b.s)*((1-E)/M)),b.s=0,b.from.set(b.ankle.x,b.ankle.y-this.footH,b.ankle.z),b.fromYaw=b.yaw,b.apex=Math.max(b.from.y,b.to.y)+.02);this.clockOn=!1}this.stepStand(t,!0),e.settle+=t,(this.feet.every(b=>b.mode==="ground")&&e.settle>.12||e.settle>.9)&&this.nextLeg();return}this.bodyOver(t,v?"run":"walk",M,E)}liftOff(t,e,n){t.from.copy(t.sole),t.fromYaw=t.yaw,t.to.copy(t.sole),t.toYaw=t.yaw,t.mode="swing",t.clocked=e,t.s=0,t.dur=n,t.apex=t.sole.y+.1,t.sy=t.sole.y}touchDown(t,e){var n;t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,(n=this.onPrint)==null||n.call(this,t.sole,t.yaw),this.qv-=(.9+2.1*this.running)*e,this.vy-=(.3+.8*this.running)*e*Math.sqrt(this.legW/2)}aimSwing(t,e,n,s){const r=e.path,o=this.held?Math.max(this.speed,this.gaitSpeed("walk")*.8):this.speed,a=Math.min(r.total,e.s+Math.max(o*(n+s),this.held?.55:0)),l=r.at(a,this.t1),c=r.yawAt(a>=r.total-.01?r.total:a),h=Math.abs(xn(c-this.yaw))>1.2?this.yaw:c;this.neutral(t,l,h,t.to),t.toYaw=h,this.safeFoot(t.to,h),this.planApex(t,zt(.06+.1*this.legW,.12+.2*this.legW,this.running))}neutral(t,e,n,s){const r=(this.hipX+.015)*t.side;return s.x=e.x+Math.cos(n)*r,s.z=e.z-Math.sin(n)*r,s.y=this.world.groundAt(s.x,s.z),s}safeFoot(t,e){const n=Math.sin(e),s=Math.cos(e),r=Te(.3+.08*this.legW,.35,.55);for(let o=0;o<10;o++){const a=this.world.groundAt(t.x,t.z),l=this.world.groundAt(t.x+n*(Qe+.01),t.z+s*(Qe+.01)),c=this.world.groundAt(t.x+n*r,t.z+s*r),h=this.world.groundAt(t.x+n*(si-.02),t.z+s*(si-.02));if(l>a+.05||c>a+.25)t.x-=n*.06,t.z-=s*.06;else if(h<a-.05)t.x+=n*.05,t.z+=s*.05;else break}t.y=this.world.groundAt(t.x,t.z)}planApex(t,e){const n=e*Te(Math.hypot(t.to.x-t.from.x,t.to.z-t.from.z)/(.45*this.legW),.3,1);let s=Math.max(t.from.y,t.to.y);for(let r=1;r<6;r++){const o=r/6;s=Math.max(s,this.world.groundAt(zt(t.from.x,t.to.x,o),zt(t.from.z,t.to.z,o)))}t.apex=s+n}footPitch(t,e,n,s){if(t.mode==="ground"){const r=e/n;s?t.pitch=r<.5?0:-.85*ne((r-.5)/.5):t.pitch=r<.12?.22*(1-ne(r/.12)):r<.6?0:-.7*ne((r-.6)/.4)}else if(t.mode==="swing"){const r=t.s;t.pitch=r<.3?zt(-.7,-.8,r/.3):r<.82?zt(-.8,0,ne((r-.3)/.52)):(s?-.05:.22)*ne((r-.82)/.18)}}bodyOver(t,e,n,s){let r=this.shift;if(e!=="stand"&&this.clockOn)r=-(zt(.03,.01,this.running)*this.legW*Math.min(1,this.speed/Math.max(.5,this.gaitSpeed("walk"))))*Math.cos(un*(this.phase-s/2));else{const m=this.feet.filter(x=>x.mode==="ground");m.length===1&&(r=m[0].side*this.hipX*.85)}r+=this.wallNudge();const o=e==="stand"?40:150;this.swayV+=(o*(r-this.sway)-2*Math.sqrt(o)*.9*this.swayV)*t,this.sway+=this.swayV*t,this.pos.x=this.base.x+Math.cos(this.yaw)*this.sway,this.pos.z=this.base.z-Math.sin(this.yaw)*this.sway;const a=this.world.groundAt(this.pos.x,this.pos.z);if(this.legless){this.pos.y+=(a+.5+.006*Math.sin(this.clock*1.7)-this.pos.y)*Math.min(1,t*12);return}const l=this.reachTop();let c=l.soft-.012*this.legW;if(e!=="stand"){let m=-1/0,x=!1;for(const g of this.feet)g.mode==="ground"&&(m=Math.max(m,g.sole.y));for(const g of this.feet)g.mode==="swing"&&g.to.y>m+.2&&(x=!0);m>-1/0&&!x&&(c=Math.min(c,m+this.footH+(this.thigh+this.shin)*.955+.5))}let h=c;if(this.gRef+=(this.world.groundAt(this.base.x,this.base.z)-this.gRef)*Math.min(1,t*12),e==="run"&&this.clockOn){const m=.5/n,x=s/n,g=Math.max(0,m-x),p=ye*g*x/un,M=this.speed*x/2,E=(this.thigh+this.shin)*.985,v=this.gRef+this.footH+Math.sqrt(Math.max(.25*E*E,E*E-M*M))+.5,y=Xs(this.phase*2),b=x/m;let L;if(y<b)L=v-p*Math.sin(Math.PI*(y/b));else{const _=(y-b)*m;L=v+ye*g/2*_-ye/2*_*_}h=zt(c,L,ne((this.running-.45)/.25))}e==="stand"&&(h-=.006*this.legW*(1+Math.sin(this.clock*1.7)));for(const m of this.feet){if(m.mode!=="ground")continue;const x=this.kneeAt(m,this.t2),g=Math.sin(m.yaw)*.06,p=Math.cos(m.yaw)*.06;(this.world.solidAt(x.x,x.y,x.z)||this.world.solidAt(x.x+g,x.y-.06,x.z+p))&&(h=Math.max(h,l.hard))}const u=e==="run"?un*7:un*4.2,f=e==="run"?.9:.72;this.vy+=(u*u*(h-this.pos.y)-2*f*u*this.vy)*t,this.pos.y+=this.vy*t,this.pos.y>l.hard&&(this.pos.y=l.hard,this.vy>0&&(this.vy=0));const d=a+this.footH+.45*this.legW+.5;this.pos.y<d&&(this.pos.y=d,this.vy<0&&(this.vy=0))}plantedAnkle(t,e){const n=Math.sin(t.yaw),s=Math.cos(t.yaw),r=t.pitch,o=r>0?si:r<0?nn:0,a=-o,l=this.footH,c=Math.cos(r),h=Math.sin(r),u=o+a*c-l*h;return e.set(t.sole.x+n*u,t.sole.y+a*h+l*c,t.sole.z+s*u)}kneeAt(t,e){const n=Math.cos(this.yaw),s=Math.sin(this.yaw),r=this.pos.x+n*t.side*this.hipX,o=this.pos.y-.5,a=this.pos.z-s*t.side*this.hipX,l=t.ankle.x-r,c=t.ankle.y-o,h=t.ankle.z-a,u=Math.hypot(l,c,h)||1e-6,f=this.thigh,d=this.shin,m=Te(u,Math.abs(f-d)+.001,f+d-1e-4),x=l/u,g=c/u,p=h/u,M=Te((f*f+m*m-d*d)/(2*f*m),-1,1),E=Math.sqrt(1-M*M),v=t.kneeOut,y=n*t.side,b=-s*t.side;let L=Math.sin(t.yaw)*(1-v*1.3)+y*(.12+1.2*v),_=Uf(-c,this.legW),S=Math.cos(t.yaw)*(1-v*1.3)+b*(.12+1.2*v);const C=L*x+_*g+S*p;L-=x*C,_-=g*C,S-=p*C;const A=Math.hypot(L,_,S)||1;return e.set(r+f*(M*x+E*L/A),o+f*(M*g+E*_/A),a+f*(M*p+E*S/A))}kneeClear(t,e){const n=Math.sin(t.yaw)*.07,s=Math.cos(t.yaw)*.07,r=a=>{t.kneeOut=a;const l=this.kneeAt(t,this.t2);return this.world.solidAt(l.x,l.y,l.z)||this.world.solidAt(l.x+n,l.y-.07,l.z+s)},o=t.kneeOut;if(!r(o)){t.kneeOut=Math.max(0,o-e*2),r(t.kneeOut)&&(t.kneeOut=o);return}for(let a=.2;a<=1.001;a+=.2)if(o+a<=1.001&&!r(Math.min(1,o+a))||o-a>=-.001&&!r(Math.max(0,o-a)))return;t.kneeOut=o}wallNudge(){const t=-Math.cos(this.yaw),e=Math.sin(this.yaw),n=this.pos.y-.1,s=this.pos.y-.1-this.armLen*.5,r=.5+.14,o=.45+.45*this.running,a=Math.sin(this.yaw)*o,l=Math.cos(this.yaw)*o,c=(g,p)=>this.world.solidAt(g,n,p)||this.world.solidAt(g,s,p),h=g=>c(this.base.x+t*r*g,this.base.z+e*r*g),u=g=>c(this.base.x+t*r*g+a,this.base.z+e*r*g+l),f=h(1),d=h(-1),m=f||u(1)&&!d,x=d||u(-1)&&!f;return this.wallSide=m&&!x?-1:x&&!m?1:0,m&&!x?.22:x&&!m?-.22:0}reachTop(){const t=(this.thigh+this.shin)*.995,e=Math.cos(this.yaw),n=Math.sin(this.yaw),s=(l,c)=>{const h=this.pos.x+e*l.side*this.hipX,u=this.pos.z-n*l.side*this.hipX,f=c.x-h,d=c.z-u,m=t*t-f*f-d*d;return c.y+this.footH+(m>0?Math.sqrt(m):0)+.5};let r=1/0;for(const l of this.feet)l.mode==="ground"&&(r=Math.min(r,s(l,this.plantedAnkle(l,this.t1).setY(this.t1.y-this.footH))));let o=r;for(const l of this.feet){if(l.mode!=="swing")continue;const c=s(l,l.to),h=ne((l.s-.55)/.4);h>0&&(o=Math.min(o,o===1/0?c+.3*(1-h):zt(o,c,h))),l.s>.88&&(r=Math.min(r,c+.02))}const a=this.standY(this.world.groundAt(this.pos.x,this.pos.z));return r===1/0&&(r=a+2),o===1/0&&(o=a),{hard:r,soft:Math.min(o,r)}}stepStand(t,e=!1){if(!e){this.speed=0,this.running+=(0-this.running)*Math.min(1,t*4);const s=this.queued.length&&this.restYaw!==null?this.restYaw:this.wantYaw;s!==null&&(this.yaw+=Te(xn(s-this.yaw),-3*t,3*t)),this.shiftIn-=t,this.shiftIn<=0&&(this.shiftIn=3.5+Math.random()*5,this.shift=(Math.random()*2-1)*this.hipX*.55)}let n=!1;for(const s of this.feet)s.mode!=="swing"||s.clocked||(n=!0,s.s=Math.min(1,s.s+t/s.dur),s.pitch=Math.sin(Math.PI*s.s)*-.45,s.s>=1&&this.touchDown(s,.35));if(!n&&!this.legless&&this.feet.every(s=>s.mode==="ground")){let s=null,r=0;for(const o of this.feet){const a=this.neutral(o,this.base,this.yaw,this.t2),l=Math.hypot(a.x-o.sole.x,a.z-o.sole.z)+Math.abs(xn(this.yaw-o.yaw))*.35;l>r&&(r=l,s=o)}if(s&&r>.09+.03*this.legW){const o=s;this.liftOff(o,!1,.2+.06*Math.sqrt(this.legW)),this.neutral(o,this.base,this.yaw,o.to),o.toYaw=this.yaw,this.safeFoot(o.to,this.yaw),this.planApex(o,.05+.04*this.legW)}}if(!e){for(const s of this.feet)s.mode==="ground"&&(s.pitch*=1-Math.min(1,t*8));this.footTap(t)}this.bodyOver(t,"stand",1,.5)}footTap(t){if(this.tapT<0)return;this.tapT+=t;const e=this.feet[0];e.mode==="ground"&&(e.pitch=Math.max(0,Math.sin(this.tapT*un*2.6))*.42),this.tapT>1.5&&(this.tapT=-1,e.pitch=0)}oneLegPose(t){const e=this.feet[1];if(t>.02&&!this.legless){const n=this.legW;e.mode="body",e.rel.set(-.05*t,zt(-n*.97,-n*.55,ne(t)),zt(0,.1*n,ne(t))),e.pitch=-.75*t}else e.mode==="body"&&this.footDown(e)}footDown(t){t.mode="ground",this.neutral(t,this.base,this.yaw,t.sole),t.yaw=this.yaw,t.pitch=0}feetDown(){for(const t of this.feet)(t.mode==="body"||t.mode==="free")&&this.footDown(t)}pose(t){const e=(o,a,l)=>new D(o,a,l),n=this.thigh+this.shin,s=this.footH,r=this.hipX+.015;switch(t){case"stand":return{head:e(0,s+n*.975+.5,0),lean:0,roll:0,ankles:[e(-r,s,0),e(r,s,0)],feet:[0,0],hands:[null,null],hips:0};case"kneel":{const o=Jr/2,a=Qe-.02,l=a+.07,c=Math.asin(Te((a-o)/this.shin,-1,1)),h=Math.max(o+this.thigh*Math.sin(c+.19),l),u=Math.asin(Te((h-o)/this.thigh,-1,1)),f=this.thigh*Math.cos(u),d=f-this.shin*Math.cos(c),m=this.hipX+.03,x=-.08,g=e(0,h,0).add(e(0,this.headDrop,0).applyEuler(this.e1.set(x,0,0))),p=this.fromPivot(g,x,0,[e(-m,a,d),e(m,a,d)],[-Math.PI/2,-Math.PI/2],[null,null],1),M=2*Math.max(.12,this.armLen/2-.05)*.92,E=p.head.y-.08-.04;return M*M-E*E>.35*.35&&(p.hands=[this.palm(p.head,x,0,0,-.12,.92),this.palm(p.head,x,0,1,.12,.92)]),p}case"lie":{const a=Math.PI/2,l=e(-.25,.5+Jr,0),c=this.onGround(l,0,a,1,.62,.84,s+.2),h=new me().setFromEuler(this.e1.set(0,0,a)),f=this.hipOf(l,h,1,1).lerp(c,Math.min(.45,.55/n));return f.y+=Jr/2+.03,{head:l,lean:0,roll:a,ankles:[this.onGround(l,0,a,0,.85,.84,s+.04),c],feet:[-.35,-.35],hands:[this.palm(l,0,a,0,-.3,.8,.05),f],hips:1}}}}restOn(t,e){const n=new me().setFromEuler(this.e1.set(t,0,e));let s=1/0;for(const r of[-.5,.5])for(const o of[-.5-this.headDrop,.5-this.headDrop])for(const a of[-.5,.5])s=Math.min(s,this.t1.set(r,o,a).applyQuaternion(n).y);return .005-s}onGround(t,e,n,s,r,o,a){const l=new me().setFromEuler(this.e1.set(e,0,n)),c=this.hipOf(t,l,s,1),h=o*(this.thigh+this.shin),u=c.y-a,f=Math.sqrt(Math.max(0,h*h-u*u));return new D(c.x+Math.sin(r)*f,Math.max(a,c.y-h),c.z+Math.cos(r)*f)}palm(t,e,n,s,r,o,a=.04){const l=new me().setFromEuler(this.e1.set(e,0,n)),c=this.arms[s].side,h=t.clone().add(new D(c*(.5+Jr/2),-.08,0).applyQuaternion(l)),u=2*Math.max(.12,this.armLen/2-.05)*o,f=h.y-a,d=Math.sqrt(Math.max(0,u*u-f*f));return new D(h.x+Math.sin(r)*d,a,h.z+Math.cos(r)*d)}readyToRest(){return this.rest!=="stand"?!0:(this.restYaw===null||Math.abs(xn(this.restYaw-this.yaw))<.12)&&this.feet.every(e=>e.mode==="ground")}beginRest(){const t=this.queued.shift(),e=this.rest;if(e===t)return;e==="stand"&&(this.landSwings(),this.feetDown(),this.anchor={x:this.base.x,z:this.base.z,g:this.world.groundAt(this.base.x,this.base.z),yaw:this.yaw},this.clockOn=!1);let n;e==="stand"&&t==="kneel"?n=this.kneelDown():e==="kneel"&&t==="lie"?n=this.flopDown():n=this.springUp(e==="lie"?"lie":"kneel"),this.seq=n,this.asleep=!1,this.scratch=null,t==="kneel"&&(this.scratchIn=4+Math.random()*5)}pivotOf(t){return t.head.clone().sub(new D(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll)))}fromPivot(t,e,n,s,r,o,a=0){return{head:t.clone().add(new D(0,.5,0).applyEuler(this.e1.set(e,0,n))),lean:e,roll:n,ankles:s,feet:r,hands:o,hips:a}}kneelDown(){var x,g;const t=Math.sqrt(this.legW/2),e=this.thigh+this.shin,n=this.pose("stand"),s=this.pose("kneel"),r=this.pivotOf(n),o=this.pivotOf(s),a=.14*e,l=r.y+.03*e,c=.12*t,h=Math.sqrt(2*ye*(l-(r.y-a))),u=c+h/ye+Math.sqrt(2*(l-o.y)/ye),f=u+.12*t,d=[],m=[];for(let p=0;;p=Math.min(f,p+1/40)){if(p<=c){const M=ne(p/c);d.push(this.fromPivot(new D(0,r.y-a*M,0),.08*M,0,[n.ankles[0].clone(),n.ankles[1].clone()],[0,0],[null,null]))}else if(p<u){const M=p-c,E=M/(u-c),v=ne(E),y=new D(0,r.y-a+h*M-.5*ye*M*M,o.z*v),b=[0,1].map(S=>n.ankles[S].clone().lerp(s.ankles[S],v)),L=zt(0,s.feet[0],v),_=E>.5?[((x=s.hands[0])==null?void 0:x.clone())??null,((g=s.hands[1])==null?void 0:g.clone())??null]:[null,null];d.push(this.fromPivot(y,zt(.08,s.lean,v),0,b,[L,L],_,v))}else d.push(s);if(m.push(p/f),p>=f)break}return{keys:d,at:m,dur:f,t:0,to:"kneel",thud:u/f,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:c/f,pushDone:!1}}flopDown(){var E,v;const t=Math.sqrt(this.legW/2),e=this.pose("kneel"),n=this.pose("lie"),s=this.pivotOf(e),r=this.pivotOf(n),o=(y,b)=>new me().setFromEuler(this.e1.set(y,0,b)),a=o(e.lean,e.roll),l=o(n.lean,n.roll),c=[0,1].map(y=>e.ankles[y].clone().sub(this.hipOf(e.head,a,y,1)).applyQuaternion(a.clone().invert())),h=[0,1].map(y=>n.ankles[y].clone().sub(this.hipOf(n.head,l,y,1)).applyQuaternion(l.clone().invert())),u=e.lean+.14,f=Math.max(s.y,r.y)+.2,d=.14*t,m=Math.sqrt(2*ye*(f-s.y)),x=d+m/ye+Math.sqrt(2*(f-r.y)/ye),g=x+.2*t,p=[],M=[];for(let y=0;;y=Math.min(g,y+1/40)){if(y<=d){const b=ne(y/d);p.push(this.fromPivot(s.clone(),zt(e.lean,u,b),0,[e.ankles[0].clone(),e.ankles[1].clone()],[e.feet[0],e.feet[1]],[((E=e.hands[0])==null?void 0:E.clone())??null,((v=e.hands[1])==null?void 0:v.clone())??null],1))}else if(y<x){const b=y-d,L=b/(x-d),_=ne(L),S=new D(zt(s.x,r.x,_),s.y+m*b-.5*ye*b*b,zt(s.z,r.z,_)),C=zt(u,n.lean,_),A=zt(0,n.roll,_),U=o(C,A),N=S.clone().add(new D(0,.5,0).applyQuaternion(U)),O=[0,1].map(W=>{const tt=zt(c[W].length(),h[W].length(),_),H=c[W].clone().normalize().lerp(h[W].clone().normalize(),_).normalize().multiplyScalar(tt).applyQuaternion(U),$=this.hipOf(N,U,W,1).add(H);return $.y=Math.max($.y,this.footH+.02),$}),G=[0,1].map(W=>zt(e.feet[W],n.feet[W],_)),J=[0,1].map(W=>{const tt=e.hands[W],H=n.hands[W];return tt&&H?tt.clone().lerp(H,_):H&&L>.5?H.clone():null});p.push(this.fromPivot(S,C,A,O,G,J,1))}else p.push(n);if(M.push(y/g),y>=g)break}return{keys:p,at:M,dur:g,t:0,to:"lie",thud:x/g,thudDone:!1,linear:!0,hit:1.6,dust:!0,push:d/g,pushDone:!1}}springUp(t){var b,L;const e=Math.sqrt(this.legW/2),n=this.thigh+this.shin,s=this.pose(t),r=this.pose("stand"),o=this.pivotOf(s),a=this.pivotOf(r),l=.12*n,c=a.y+.05*n,h=(t==="lie"?.16:.1)*e,u=Math.sqrt(2*ye*(c-o.y)),f=h+u/ye+Math.sqrt(2*(c-(a.y-l))/ye),d=f+.16*e,m=t==="kneel"?s.lean+.15:s.lean,x=t==="lie"?s.roll-.35:s.roll,g=new me().setFromEuler(this.e1.set(s.lean,0,s.roll)),p=[0,1].map(_=>s.ankles[_].clone().sub(this.hipOf(s.head,g,_,s.hips))),M=new D(a.x,a.y-l,a.z),E=[0,1].map(_=>r.ankles[_].clone().sub(M.clone().add(new D(this.feet[_].side*this.hipX,0,0)))),v=[],y=[];for(let _=0;;_=Math.min(d,_+1/40)){if(_<=h){const S=ne(_/h);v.push(this.fromPivot(o.clone(),zt(s.lean,m,S),zt(s.roll,x,S),[s.ankles[0].clone(),s.ankles[1].clone()],[s.feet[0],s.feet[1]],[((b=s.hands[0])==null?void 0:b.clone())??null,((L=s.hands[1])==null?void 0:L.clone())??null],s.hips))}else if(_<f){const S=_-h,C=S/(f-h),A=new D(zt(o.x,a.x,ne(C)),o.y+u*S-.5*ye*S*S,zt(o.z,a.z,ne(C))),U=zt(m,0,ne(C)),N=zt(x,0,ne(Math.min(1,C*1.4))),O=new me().setFromEuler(this.e1.set(U,0,N)),G=A.clone().add(new D(0,.5,0).applyQuaternion(O)),J=ne(Math.min(1,C*1.3)),W=zt(s.hips,0,J),tt=[0,1].map(ft=>{const z=zt(p[ft].length(),E[ft].length(),C)-.08*n*Math.sin(Math.PI*C),X=p[ft].clone().normalize().lerp(E[ft].clone().normalize(),J).normalize(),k=this.hipOf(G,O,ft,W).addScaledVector(X,z);return k.y=Math.max(k.y,this.footH+.02),k}),H=[0,1].map(ft=>zt(s.feet[ft],0,ne(C))),$=G.y-.08<this.armLen*.92,st=[0,1].map(ft=>$&&s.hands[ft]&&s.hands[ft].y<.15?s.hands[ft].clone():null);v.push(this.fromPivot(A,U,N,tt,H,st,W))}else{const S=ne((_-f)/(d-f));v.push(this.fromPivot(new D(a.x,zt(a.y-l,a.y,S),a.z),0,0,[r.ankles[0].clone(),r.ankles[1].clone()],[0,0],[null,null]))}if(y.push(_/d),_>=d)break}return{keys:v,at:y,dur:d,t:0,to:"stand",thud:f/d,thudDone:!1,linear:!0,hit:2.4,dust:!0,push:h/d,pushDone:!1}}stepRest(t){var o;const e=this.seq;let n;if(e){e.t+=t;const a=On(e.t/e.dur),l=e.linear?a:ne(a);let c=0;for(;c<e.at.length-2&&l>e.at[c+1];)c++;const h=On((l-e.at[c])/(e.at[c+1]-e.at[c]));if(n=this.mix(e.keys[c],e.keys[c+1],h),e.push!==void 0&&!e.pushDone&&a>=e.push&&(e.pushDone=!0,this.qv+=1.8),!e.thudDone&&a>=e.thud){if(e.thudDone=!0,this.qv-=e.hit??(e.to==="lie"?1.5:2),e.dust)for(let u=0;u<3;u++)this.puffAt(this.pos.x,this.anchor.g,this.pos.z,.08+.04*Math.random());if(e.to==="stand")for(const u of this.feet)(o=this.onPrint)==null||o.call(this,this.t1.set(u.ankle.x,this.anchor.g,u.ankle.z),this.anchor.yaw)}a>=1&&(this.seq=null,this.rest=e.to,e.to==="stand"&&this.standUp())}else n=this.pose(this.rest==="lie"?"lie":"kneel");if(this.rest==="stand"&&!this.seq)return;const s=!e&&this.rest!=="stand";s&&this.rest==="kneel"&&!this.asleep&&n.hands[0]?this.stepScratch(t):this.scratch=null,this.breath=Xs(this.breath+t/(this.rest==="lie"?3.6:4));const r=Math.sin(un*this.breath);if(this.qRest=s?(this.rest==="lie"?.035:.045)*r:0,s&&this.rest==="lie"&&(n.head.y+=.012*r),s&&this.rest==="kneel"){const a=.5+.5*r;n.head.y+=.05*a,n.lean-=.035*a}this.applyPose(n)}stepScratch(t){const e=this.scratch;if(!e){(this.scratchIn-=t)<=0&&(this.scratch={side:Math.random()<.5?0:1,kind:Math.random()<.5?"chin":"head",t:0,dur:2+.5*this.armLen+Math.random()*.8,w:0,wiggle:0});return}e.t+=t;const n=.5+.25*this.armLen,s=n,r=e.dur-n-s;e.w=e.t<n?ne(e.t/n):e.t>e.dur-s?ne((e.dur-e.t)/s):1;const o=e.t-n;e.wiggle=o>0&&o<r?Math.sin(un*(e.kind==="chin"?4.5:5.5)*o)*ne(o/.15)*ne((r-o)/.15):0,e.t>=e.dur&&(this.scratch=null,this.scratchIn=6+Math.random()*9)}mix(t,e,n){const s=(g,p)=>g&&p?g.clone().lerp(p,n):n<.5?g?g.clone():null:p?p.clone():null,r=zt(t.lean,e.lean,n),o=zt(t.roll,e.roll,n),a=(g,p)=>new me().setFromEuler(this.e1.set(g,0,p)),l=a(t.lean,t.roll),c=a(e.lean,e.roll),h=a(r,o),u=t.head.clone().lerp(e.head,n);u.y=Math.max(u.y,this.restOn(r,o));const f=zt(t.hips,e.hips,n),d=[0,1].map(g=>{const p=t.ankles[g].clone().sub(this.hipOf(t.head,l,g,t.hips)),M=e.ankles[g].clone().sub(this.hipOf(e.head,c,g,e.hips)),E=zt(p.length(),M.length(),n),v=zt(t.ankles[g].y,e.ankles[g].y,n),y=this.hipOf(u,h,g,f),b=zt(p.x,M.x,n),L=zt(p.z,M.z,n),_=Math.hypot(b,L),S=y.y-v,C=Math.sqrt(Math.max(0,E*E-S*S)),A=new D(y.x,Math.max(v,y.y-E),y.z);return _>1e-4&&(A.x+=b/_*C,A.z+=L/_*C),A.y=Math.max(A.y,this.footH+.02),A}),m=g=>{const p=t.hands[g],M=e.hands[g];if(!p||!M)return s(p,M);const E=Math.atan2(p.x-t.head.x,p.z-t.head.z),v=Math.atan2(M.x-e.head.x,M.z-e.head.z),y=E+xn(v-E)*n,b=zt(Math.hypot(p.x-t.head.x,p.z-t.head.z),Math.hypot(M.x-e.head.x,M.z-e.head.z),n);return new D(u.x+Math.sin(y)*b,zt(p.y,M.y,n),u.z+Math.cos(y)*b)},x=[m(0),m(1)];return x.forEach((g,p)=>{g&&(this.outsideBody(g,u,h,this.arms[p].side),g.y=Math.max(g.y,.03))}),{head:u,lean:r,roll:o,ankles:d,feet:[zt(t.feet[0],e.feet[0],n),zt(t.feet[1],e.feet[1],n)],hands:x,hips:f}}outsideBody(t,e,n,s){const r=t.clone().sub(e).applyQuaternion(n.clone().invert()),o=.5+.12;if(Math.abs(r.x)>=o||Math.abs(r.y)>=o||Math.abs(r.z)>=o)return;let a=1/0,l=-1,c=0;for(let h=0;h<3;h++)for(const u of[-1,1]){if(this.t1.set(0,0,0).setComponent(h,u).applyQuaternion(n).y<-.6)continue;const f=o-u*r.getComponent(h)-(h===0&&u===s?.25:0);f<a&&(a=f,l=h,c=u)}l<0||(r.setComponent(l,c*o),t.copy(r.applyQuaternion(n).add(e)))}hipOf(t,e,n,s=0){const r=this.feet[n].side;return t.clone().add(new D(r*this.hipX,-.5-s*this.headDrop,0).applyQuaternion(e))}applyPose(t){const e=this.anchor,n=Math.cos(e.yaw),s=Math.sin(e.yaw),r=(a,l)=>l.set(e.x+n*a.x+s*a.z,e.g+a.y,e.z-s*a.x+n*a.z);this.yaw=e.yaw,this.lean=t.lean,this.leanV=0,this.roll=t.roll,this.hipDrop=t.hips*this.headDrop;const o=this.t2.set(0,.5,0).applyEuler(this.e1.set(t.lean,0,t.roll));r(this.t1.copy(t.head).sub(o).add(this.t2.set(0,.5,0)),this.pos),this.base.set(e.x,0,e.z),this.feet.forEach((a,l)=>{a.mode="free",r(t.ankles[l],a.ankle),a.q.setFromAxisAngle(this.t2.set(0,1,0),e.yaw).multiply(new me().setFromAxisAngle(this.t2.set(0,0,1),t.roll)).multiply(new me().setFromAxisAngle(this.t2.set(1,0,0),-t.feet[l])),a.toe=t.feet[l]<-.9?-1.1*ne((-t.feet[l]-.9)/.5):t.feet[l]<-.2?.2:0,a.yaw=e.yaw}),this.arms.forEach((a,l)=>{const c=t.hands[l];c&&(a.reach=r(c,new D),a.reachW=1,a.flat=!0)})}standUp(){this.asleep=!1,this.hipDrop=0;for(const t of this.feet)t.mode="ground",t.sole.set(t.ankle.x,this.world.groundAt(t.ankle.x,t.ankle.z),t.ankle.z),t.pitch=0;if(this.lean=0,this.roll=0,this.vy=0,this.pending){const t=this.pending;this.pending=null,this.travel(t.cells,t.gait,t.onArrive)}}envAt(t,e,n=.25,s=.55){const r=t.ground;let o=-1/0;for(let a=Math.max(0,Math.floor((e-n)/Zr));a<=Math.min(r.length-1,Math.ceil((e+s)/Zr));a++)o=Math.max(o,r[a]);return o===-1/0?this.world.groundAt(this.base.x,this.base.z):o}stepHopper(t,e){var c;const n=e.path,s=this.gaitSpeed(e.gait),r=n.total-e.s;this.speed+=Te(Math.min(s,Math.sqrt(2*6*Math.max(0,r)))-this.speed,-8*t,6*t),e.s=Math.min(n.total,e.s+this.speed*t),n.at(e.s,this.base),this.yaw+=Te(xn(n.yawAt(e.s+.2)-this.yaw),-8*t,8*t);const o=this.phase;this.phase+=t/(e.gait==="bound"?.22:.3),Math.floor(this.phase)!==Math.floor(o)&&(this.qv-=2.6);const a=Xs(this.phase),l=this.envAt(e,e.s,.1,.3);this.pos.set(this.base.x,l+.5+Math.sin(Math.PI*a)*(e.gait==="bound"?.3:.16),this.base.z),this.qRest=.12*Math.sin(Math.PI*a),r<=.01&&(this.trip=null,this.speed=0,this.qRest=0,(c=e.onArrive)==null||c.call(e))}landSwings(){for(const t of this.feet)t.mode==="swing"&&(t.mode="ground",t.sole.copy(t.to),t.yaw=t.toYaw,t.pitch=0)}makeJump(t,e,n,s){this.landSwings();const r=this.feet.map(o=>{const a=this.neutral(o,e,s,new D);return this.safeFoot(a,s),a});return{phase:"gather",t:0,drop:t,to:e.clone(),apex:n,vx:0,vz:0,feet:r,y0:this.pos.y,air:1,yawTo:s,grip:null}}stepAct(t){const e=this.act;e.t+=t;for(const s of this.arms)s.tp=.02,s.to=.07,s.te=.16;if(e.jump){const s=this.stepJump(t,e.jump);e.kind==="cheer"&&this.armsTo(-2.75,.45,.3),s&&this.endAct();return}const n=e.t/e.dur;if(e.kind==="wave"){const s=this.arms[0];s.tp=-2.55,s.to=.42,s.te=.55+.42*Math.sin(e.t*un*2.6),this.shift=this.hipX*.5}else if(e.kind==="spin"){const s=ne(n/.15)*(1-ne((n-.86)/.14));this.oneLegPose(s),this.yaw=e.yaw0+YM((n-.12)/.74)*un,this.feet[0].mode==="ground"&&(this.feet[0].yaw=this.yaw),this.armsTo(-.35,1.25*s+.08,.25)}else if(e.kind==="sigh"){const s=n<.45?Math.sin(Math.PI*On(n/.45)):0,r=n>.4?Math.sin(Math.PI*On((n-.4)/.6)):0;this.qRest=.08*s-.12*r,this.armsTo(.12*r,.06,.15)}else e.kind==="tap"&&this.tapT<0&&(this.tapT=0);this.stepStand(t),e.t>=e.dur&&(e.kind==="spin"&&(this.yaw=xn(this.yaw),this.feet[0].yaw=this.yaw),this.endAct())}endAct(){var e;const t=this.act;if(this.act=null,this.qRest=0,this.leanRest=0,(e=t.then)==null||e.call(t),t.kind==="leap")if(this.pending){const n=this.pending;this.pending=null,this.travel(n.cells,n.gait,n.onArrive)}else this.trip&&this.nextLeg()}stepJump(t,e){e.t+=t;const n=this.legW,s=e.drop?.1:.14+.05*Math.sqrt(n),r=.08+.02*Math.sqrt(n);if(e.phase==="gather"){const o=ne(e.t/s);this.vy=0,this.pos.y=zt(e.y0,this.reachTop().hard-(e.drop?.08:.22)*n,o),this.leanRest=.16*o,this.qRest=-.24*o,this.armsTo(.95*o,.12,.3),this.yaw+=Te(xn(e.yawTo-this.yaw),-9*t,9*t);for(const a of this.feet)a.mode==="ground"&&(a.pitch*=.8);return e.t>=s&&(e.phase="push",e.t=0,e.y0=this.pos.y),!1}if(e.phase==="push"){const o=ne(e.t/r);for(const a of this.feet)a.mode==="ground"&&(a.pitch=-.6*o);if(this.pos.y=zt(e.y0,this.reachTop().hard,o),this.qRest=.22*o,this.armsTo(-1.5*o,.15,.25),e.t>=r){e.phase="air",e.t=0;const a=Math.max(.05,Math.max(this.pos.y,e.to.y)+e.apex+(e.grip?.2*this.L:0)-this.pos.y),l=Math.sqrt(2*a/ye),c=Math.sqrt(2*Math.max(.01,this.pos.y+a-e.to.y)/ye);this.vy=ye*l,e.air=l+c,e.vx=(e.to.x-this.pos.x)/e.air,e.vz=(e.to.z-this.pos.z)/e.air,this.qv+=3.2;for(const h of this.feet)h.mode="body"}return!1}if(e.phase==="air"){this.airborne=!0,this.vy-=ye*t,this.pos.x+=e.vx*t,this.pos.z+=e.vz*t,this.pos.y+=this.vy*t,this.base.x=this.pos.x,this.base.z=this.pos.z,this.sway=0,this.yaw+=Te(xn(e.yawTo-this.yaw),-6*t,6*t);const o=e.t/e.air,a=Math.sin(Math.PI*On(o*1.15));for(const h of this.feet)h.mode="body",h.rel.set(0,-n*zt(.97,e.grip?.68:.62,a),n*(e.grip?-.04:.16)*a),h.kneeOut=e.grip?.7*a:0,h.pitch=-.65*a;this.armsTo(-.55,.85,.35),e.grip&&o>.12&&o<.92&&this.arms.forEach((h,u)=>{h.reach=e.grip[u],h.flat=!0,h.reachW=Math.min(1,h.reachW+t*9)}),this.leanRest=e.grip?.18:.05,this.qRest=Te(this.vy*.022,-.14,.18);const l=this.world.groundAt(e.to.x,e.to.z),c=this.standY(l);if(e.t>=e.air||this.vy<0&&this.pos.y<=c&&Math.hypot(this.pos.x-e.to.x,this.pos.z-e.to.z)<.3){this.pos.set(e.to.x,c,e.to.z),e.phase="land",e.t=0,this.feet.forEach((u,f)=>{var d;u.mode="ground",u.sole.copy(e.feet[f]).setY(this.world.groundAt(e.feet[f].x,e.feet[f].z)),u.yaw=e.yawTo,(d=this.onPrint)==null||d.call(this,u.sole,u.yaw),u.pitch=0,u.kneeOut=0});const h=Math.abs(this.vy);this.qv-=2.2+.8*h,this.qRest=0,this.leanV+=.6+.15*h;for(let u=0;u<(h>4?5:2);u++)this.puffAt(this.pos.x,l,this.pos.z,.08+.04*Math.random())}return!1}return this.leanRest=0,this.armsTo(-.45,.35,.4),this.base.x+=(e.to.x-this.base.x)*Math.min(1,t*10),this.base.z+=(e.to.z-this.base.z)*Math.min(1,t*10),this.bodyOver(t,"stand",1,.5),e.t>.32}puffAt(t,e,n,s){if(!this.onPuff)return;const r=new D((Math.random()-.5)*1.2,.5+Math.random()*.6,(Math.random()-.5)*1.2);this.onPuff(new D(t+(Math.random()-.5)*.2,e+.06,n+(Math.random()-.5)*.2),r,s)}armsTo(t,e,n){for(const s of this.arms)s.tp=t,s.to=e,s.te=n}stepSprings(t){const e=un*3.1,n=.34;this.qv+=(e*e*(this.qRest-this.squash)-2*n*e*this.qv)*t,this.squash=Te(this.squash+this.qv*t,-.45,.45);const s=220;if(this.sv+=(s*(this.stretchRest-this.stretch)-2*Math.sqrt(s)*.8*this.sv)*t,this.stretch+=this.sv*t,this.seq||this.rest!=="stand")return;const o=!!this.trip&&!this.act,a=(this.speed-this.lastSpeed)/Math.max(t,1e-4);this.lastSpeed=this.speed;const l=o?zt(.035,.2,this.running)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk"))):0,c=un*2.4,h=.5;if(this.leanV+=(c*c*(l+this.leanRest-this.lean)-2*h*c*this.leanV-(o?3.5*Te(a,-12,12):0))*t,this.lean=Te(this.lean+this.leanV*t,-.6,.7),this.roll=Te(-(this.sway/this.hipX)*.045,-.08,.08),o&&this.clockOn){const d=this.running,m=zt(.3,1,d)*Math.min(1,this.speed/Math.max(.3,this.gaitSpeed("walk")));for(const x of this.arms)x.tp=(x.side===-1?1:-1)*m*Math.cos(un*(this.phase-.04)),x.to=x.side===this.wallSide?.03:zt(.07,.2,d),x.te=zt(.24,1.55,d)+Math.max(0,-x.tp)*.35}else if(!this.act)for(const d of this.arms)d.tp=.02,d.to=.07,d.te=.16;const u=un*2.3,f=.42;for(const d of this.arms)d.vp+=(u*u*(d.tp-d.pitch)-2*f*u*d.vp)*t,d.vo+=(u*u*(d.to-d.out)-2*f*u*d.vo)*t,d.ve+=(u*u*(d.te-d.elbow)-2*f*u*d.ve)*t,d.pitch+=d.vp*t,d.out+=d.vo*t,d.elbow=Math.max(0,d.elbow+d.ve*t),d.reach||(d.reachW=Math.max(0,d.reachW-t*3))}resolveFeet(t=0){const e=Math.cos(this.yaw),n=Math.sin(this.yaw);for(const s of this.feet){if(s.mode==="swing"){const r=s.s,o=ne(r),a=zt(s.from.x,s.to.x,o),l=zt(s.from.z,s.to.z,o),c=Math.max(.04,s.apex-Math.max(s.from.y,s.to.y)),h=zt(s.from.y,s.to.y,ne((r-.15)/.75))+c*Math.pow(Math.sin(Math.PI*r),1.3),u=s.to.x-s.from.x,f=s.to.z-s.from.z,d=Math.hypot(u,f)||1,m=u/d,x=f/d,g=Math.min(Qe+.08+.35*(1-r),(1-o)*d+Qe+.04);let p=-1/0;for(let L=0;L<=4;L++){const _=si-.04+(g-si+.04)*(L/4);p=Math.max(p,this.world.groundAt(a+m*_,l+x*_))}const M=p+.07*(1-ne((r-.82)/.18)),E=Math.max(h,r>.97?s.to.y:M);s.sy=E>s.sy?E:s.sy+(E-s.sy)*Math.min(1,t*30),r<.02&&(s.sy=Math.max(E,s.from.y)),s.ankle.set(a,s.sy+this.footH,l),s.yaw=s.fromYaw+xn(s.toYaw-s.fromYaw)*o,this.kneeClear(s,t);const v=Math.sin(s.yaw),y=Math.cos(s.yaw),b=s.ankle.y;for(let L=0;L<8;L++){const _=s.ankle.y-this.footH*.5,S=this.kneeAt(s,this.t2),C=S.x+v*.07,A=S.z+y*.07,U=(this.world.solidAt(S.x,S.y,S.z)||this.world.solidAt(C,S.y-.07,A))&&this.world.groundAt(C,A)<S.y+.4;if(!this.world.solidAt(s.ankle.x,_,s.ankle.z)&&!this.world.solidAt(s.ankle.x+v*Qe,_,s.ankle.z+y*Qe)&&!U||s.ankle.y-b>.45)break;s.ankle.y+=.06}s.toe=zt(s.pitch<0?s.pitch:0,.28*Math.sin(Math.PI*r),ne(r/.35))}else if(s.mode==="ground"){this.plantedAnkle(s,s.ankle),this.kneeClear(s,t);for(let r=0;r<2;r++){const o=this.kneeAt(s,this.t3),a=(o.x-s.ankle.x)*Math.sin(s.yaw)+(o.z-s.ankle.z)*Math.cos(s.yaw),l=Math.atan2(a,o.y-s.ankle.y),c=Df-.05-l;if(s.pitch<=c)break;s.pitch=c,this.plantedAnkle(s,s.ankle)}s.toe=s.pitch<0?s.pitch:0}else if(s.mode==="body"){const r=s.side*(this.hipX+s.rel.x),o=s.rel.z;s.ankle.set(this.pos.x+e*r+n*o,this.pos.y-.5+s.rel.y,this.pos.z-n*r+e*o),s.ankle.y=Math.max(s.ankle.y,this.world.groundAt(s.ankle.x,s.ankle.z)+this.footH+.01),s.yaw=this.yaw,s.toe=.2;const a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=Math.cos(s.pitch),h=Math.sin(s.pitch);for(let u=0;u<8;u++){const f=s.ankle.x+a*c*Qe,d=s.ankle.y-this.footH+h*Qe,m=s.ankle.z+l*c*Qe;if(!this.world.solidAt(f,d,m)&&!this.world.solidAt(s.ankle.x,s.ankle.y-this.footH,s.ankle.z))break;s.ankle.x-=a*.05,s.ankle.z-=l*.05}}if(s.mode!=="free"){s.q.setFromEuler(this.e1.set(-s.pitch,s.yaw,0,"YXZ"));const r=s.pitch,o=Math.cos(r),a=Math.sin(r),l=Math.sin(s.yaw),c=Math.cos(s.yaw),h=s.ankle.x+l*o*nn,u=s.ankle.z+c*o*nn,f=s.ankle.y-this.footH*o+nn*a,d=(this.world.groundAt(h+l*(Qe-nn),u+c*(Qe-nn))+.005-f)/(Qe-nn);d>-1&&(s.toe=Math.min(s.toe,r-Math.asin(Te(d,-1,1))))}}}}const Pa=5,ZM=4935768,mu=.3,JM=14;function QM(){const i=new Wn(.11,nn-si-.01).rotateX(-Math.PI/2).translate(0,0,(nn+si)/2-.005),t=new Wn(.11,Qe-nn-.02).rotateX(-Math.PI/2).translate(0,0,(Qe+nn)/2+.01),e=qM([i,t]);return i.dispose(),t.dispose(),e}const gu=72,jM=2.6;let qs=null;function ty(){if(qs)return qs;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");return t.fillStyle="#111",t.font='700 54px "Space Mono", "Courier New", monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("Z",32,34),qs=new Zl(i),qs.colorSpace=Ie,qs}class ey{constructor(){I(this,"group",new Pe);I(this,"puffs",[]);I(this,"dust");I(this,"zeds",[]);I(this,"prints",[]);I(this,"printGeo",QM());I(this,"own",[]);I(this,"m",new Jt);I(this,"q",new me);I(this,"s",new D);const t=new Sn(1,1,1),e=new vo({color:15987958});this.dust=new oo(t,e,gu),this.dust.count=0,this.dust.frustumCulled=!1,this.group.add(this.dust),this.own.push(t,e,this.printGeo)}print(t,e){const n=new oi({color:ZM,transparent:!0,opacity:mu,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),s=new Se(this.printGeo,n);if(s.position.set(t.x,t.y+.004,t.z),s.rotation.y=e,s.renderOrder=1,this.group.add(s),this.prints.push({m:s,mat:n,age:0}),this.prints.length>Pa+6){const r=this.prints.shift();r.m.removeFromParent(),r.mat.dispose()}}puff(t,e,n){this.puffs.length>=gu&&this.puffs.shift(),this.puffs.push({p:t.clone(),v:e.clone(),age:0,life:.45+Math.random()*.3,size:n,spin:new wn(Math.random(),Math.random(),Math.random())})}z(t){const e=new Vu({map:ty(),transparent:!0,depthWrite:!1,opacity:0}),n=new dp(e);this.group.add(n),this.zeds.push({s:n,age:0,life:jM,x0:t.x,y0:t.y,z0:t.z,drift:Math.random()<.5?-1:1})}update(t){let e=0;this.puffs=this.puffs.filter(s=>(s.age+=t)<s.life);for(const s of this.puffs){s.v.multiplyScalar(Math.exp(-3.2*t)),s.v.y-=.6*t,s.p.addScaledVector(s.v,t);const r=s.age/s.life,o=r<.18?r/.18:1-(r-.18)/.82;this.s.setScalar(Math.max(.001,s.size*Math.pow(o,.8))),s.spin.x+=t*1.5,this.q.setFromEuler(s.spin),this.m.compose(s.p,this.q,this.s),this.dust.setMatrixAt(e++,this.m)}this.dust.count=e,this.dust.instanceMatrix.needsUpdate=!0;const n=this.prints.length;this.prints=this.prints.filter((s,r)=>{s.age+=t;const o=n-1-r,a=o<Pa?1:Math.max(0,1-(o-Pa+1)/3),l=1-Math.min(1,Math.max(0,(s.age-JM)/3)),c=mu*a*l;return s.mat.opacity+=(c-s.mat.opacity)*Math.min(1,t*5),c<=0&&s.mat.opacity<.005?(s.m.removeFromParent(),s.mat.dispose(),!1):!0}),this.zeds=this.zeds.filter(s=>{s.age+=t;const r=s.age/s.life;return r>=1?(s.s.removeFromParent(),s.s.material.dispose(),!1):(s.s.position.set(s.x0+s.drift*(.25*r+.06*Math.sin(r*7)),s.y0+.75*r,s.z0),s.s.scale.setScalar(.14+.2*r),s.s.material.opacity=Math.min(1,r*5)*(1-Math.max(0,(r-.6)/.4)),!0)})}dispose(){for(const t of this.zeds)t.s.material.dispose();for(const t of this.prints)t.mat.dispose();this.group.removeFromParent();for(const t of this.own)t.dispose()}}const wi=.12,Ys={thick:.07,long:.15,wide:.135},xu=2.6,ny=2.9,$s=2.5,Qr={back:-.55,fwd:2.1,inward:-.22,out:1},ps={up:-Df,down:.95,side:.3,twist:.35},Ia={flex:1.55,side:.45,turn:1.6},be=(i,t,e)=>i<t?t:i>e?e:i,Da=(i,t,e)=>i+(t-i)*e;function jr(i,t,e,n){const s=new Sn(wi,i-t,wi).translate(0,(i+t)/2,0);return n.push(s),new Se(s,e)}function Ua(i,t,e){return e.push(i),new Se(i,t)}const fn=new D,en=new D,Bn=new D,Po=new Jt;function Io(i,t,e){return en.copy(i).negate().normalize(),Bn.copy(t).addScaledVector(en,-t.dot(en)),Bn.lengthSq()<1e-8&&Bn.set(1,0,0).cross(en),Bn.normalize(),fn.crossVectors(en,Bn),Po.makeBasis(fn,en,Bn),e.setFromRotationMatrix(Po)}const Ms=new D,zn=new D,Ti=new D,co=new D,Il=new D,_u=new me;function Ni(i,t,e,n,s,r,o,a=Math.PI){Ms.subVectors(t,i);const l=Ms.length(),c=Math.sqrt(Math.max(0,e*e+n*n-2*e*n*Math.cos(Math.PI-a))),h=be(l,Math.max(Math.abs(e-n)+.001,c),e+n-1e-4);l<1e-6?zn.set(0,-1,0):zn.copy(Ms).divideScalar(l);const u=be((e*e+h*h-n*n)/(2*e*h),-1,1),f=Math.sqrt(1-u*u);Ti.copy(s).addScaledVector(zn,-s.dot(zn)),Ti.lengthSq()<1e-8&&Ti.set(0,0,1).addScaledVector(zn,-zn.z),Ti.normalize(),co.copy(i).addScaledVector(zn,e*u).addScaledVector(Ti,e*f),Il.copy(i).addScaledVector(zn,h),Io(Ms.subVectors(co,i),s,r),Io(Il.sub(co),s,_u),o.copy(r).invert().multiply(_u)}const Si=new wn,iy=new D;function vu(i,t,e,n,s="XYZ"){Si.setFromQuaternion(i,s);const r=be(Si.x,t[0],t[1]),o=be(Si.y,e[0],e[1]),a=be(Si.z,n[0],n[1]);(r!==Si.x||o!==Si.y||a!==Si.z)&&i.setFromEuler(Si.set(r,o,a,s))}class sy{constructor(t,e,n){I(this,"root",new Pe);I(this,"fx",new ey);I(this,"motion");I(this,"placed",!1);I(this,"face");I(this,"world");I(this,"pelvis",new Pe);I(this,"turn",new Pe);I(this,"squash",new Pe);I(this,"legs",[]);I(this,"arms",[]);I(this,"solid",[]);I(this,"own",[]);I(this,"look",null);I(this,"targets",[null,null]);I(this,"talkCh",null);I(this,"clock",0);I(this,"lastBreath",0);I(this,"showing",null);I(this,"yawLook",0);I(this,"pitchLook",0);I(this,"a2");I(this,"v1",new D);I(this,"v2",new D);I(this,"v3",new D);I(this,"v4",new D);I(this,"v5",new D);I(this,"qa",new me);I(this,"qb",new me);I(this,"qc",new me);I(this,"qd",new me);I(this,"qm",new Jt);I(this,"headCap",0);I(this,"scratchSeen",null);I(this,"sc1",new D);I(this,"sc2",new D);I(this,"sc3",new D);I(this,"qf",new me);I(this,"pts",[0,1,2,3,4].map(()=>new D));I(this,"kg",[0,1,2,3,4,5].map(()=>new D));this.world=n,this.motion=new KM(e,n),this.motion.onPuff=(l,c,h)=>this.fx.puff(l,c,h),this.motion.onPrint=(l,c)=>this.fx.print(l,c),this.a2=Math.max(.12,this.motion.armLen/2-.05),this.face=new XM(t),this.motion.headDrop=this.face.drop,this.root.add(this.pelvis),this.pelvis.add(this.turn),this.turn.add(this.squash),this.face.head.scale.setScalar(1/16),this.face.head.position.y=.5,this.squash.add(this.face.head),this.solid.push(...this.face.solid);const[s,r,o]=hc(t),a=new Ut().setRGB(s/255,r/255,o/255,Ie);this.buildLimbs(a)}buildLimbs(t){const e=this.motion,n=new vo({color:t});this.own.push(n);const s=wi/2;if(!e.legless)for(const o of[-1,1]){const a=new Pe,l=new Pe,c=new Pe,h=new Pe;a.position.set(o*e.hipX,0,0);const u=jr(0,-e.thigh,n,this.own);a.add(u),l.position.y=-e.thigh;const f=jr(s,-e.shin-s,n,this.own);l.add(f),c.position.y=-e.shin;const d=Ua(new Sn(wi,e.footH,nn-si).translate(0,-e.footH/2,(nn+si)/2),n,this.own);h.position.set(0,-e.footH,nn);const m=Ua(new Sn(wi,e.footH*.75,.08).translate(0,e.footH*.375,.04),n,this.own);h.add(m),c.add(d,h),l.add(c),a.add(l),this.pelvis.add(a),this.legs.push({hip:a,knee:l,ankle:c,toes:h,side:o}),this.solid.push(u,f,d,m)}const r=this.a2;for(const o of[-1,1]){const a=new Pe,l=new Pe,c=new Pe,h=jr(s,-r,n,this.own);a.add(h),l.position.y=-r;const u=jr(s,-r-s,n,this.own);l.add(u),c.position.y=-r;const f=Ua(new Sn(Ys.thick,Ys.long,Ys.wide).translate(0,-.15/2-.02,0),n,this.own);c.add(f),l.add(c),a.add(l),this.turn.add(a);const d=()=>new me;this.arms.push({shoulder:a,elbow:l,wrist:c,side:o,aimW:0,fk:[d(),d()],ik:[d(),d()],push:0,pushTo:new D,pushE:0,pushETo:new D,pushN:new D,flatW:0,palm:new D,palmDir:new D(0,0,1)}),this.solid.push(h,u,f)}}get pos(){return this.motion.pos}get yaw(){return this.motion.yaw}headCentre(t=new D){return this.squash.localToWorld(t.set(0,.5,0))}headTop(t=new D){return this.headCentre(t).add(this.v4.set(0,.85,0))}hit(t){return t.intersectObjects(this.solid,!1).some(e=>{for(let n=e.object;n;n=n.parent)if(!n.visible)return!1;return!0})}place(t,e,n){this.motion.place(t,e,n),this.placed=!0}travel(t,e,n){this.motion.travel(t,e,n)}stop(){this.motion.stop()}busy(){return this.motion.busy()}turnTo(t){this.motion.turnTo(t)}perform(t,e){return this.motion.perform(t,e)}rest(t,e){return this.motion.setRest(t,e)}roomAt(t,e,n){return this.motion.roomAt(t,e,n)}get resting(){return this.motion.rest}sleep(t){this.motion.asleep=t}lookAt(t){this.look=t?(this.look??new D).copy(t):null}point(t,e){this.targets=[t,e]}talk(t){this.talkCh=t}feel(t,e){this.face.feel(t,e)}mood(t){this.face.setMood(t)}blink(){this.face.blink()}get feeling(){return this.face.current}update(t){const e=this.motion;this.clock+=t,e.update(t);const n=this.root.parent??this.root;n.position.copy(e.pos),n.rotation.set(0,e.yaw,0),this.pelvis.position.set(0,-.5,0),this.pelvis.rotation.set(e.lean,0,e.roll);for(const d of this.legs)d.hip.position.y=-e.hipDrop;n.updateMatrixWorld(!0);let s=null;this.look?(s=this.pelvis.worldToLocal(this.v1.copy(this.look)).sub(this.v2.set(0,.5,0)),this.yawLook+=(be(Math.atan2(s.x,s.z),-.55,.55)-this.yawLook)*Math.min(1,t*6),this.pitchLook+=(be(-Math.atan2(s.y,Math.hypot(s.x,s.z)),-.35,.3)-this.pitchLook)*Math.min(1,t*6)):(this.yawLook*=1-Math.min(1,t*3),this.pitchLook*=1-Math.min(1,t*3)),e.airborne&&(this.yawLook*=.9,this.pitchLook*=.9),e.scratch&&e.scratch!==this.scratchSeen&&this.feel(e.scratch.kind==="chin"?"thinking":"doubt",e.scratch.dur),this.scratchSeen=e.scratch,this.face.update(t,s?s.applyAxisAngle(this.v2.set(0,1,0),-this.yawLook):null,this.talkCh,e.asleep?e.breath:null),this.headCap+=((e.feet.some(d=>d.mode==="free")&&!e.lyingStill?1:0)-this.headCap)*Math.min(1,t*5);const r=Da(this.pitchLook+this.face.nod,Math.min(this.pitchLook+this.face.nod,.03),this.headCap),o=Da(this.face.roll,be(this.face.roll,-.03,.03),this.headCap),a=1-be(Math.abs(e.roll)/.6,0,1);this.turn.rotation.set(r*a,this.yawLook*a,o*a,"YXZ");const l=1+e.squash,c=1+e.stretch,h=l/Math.sqrt(c),u=c/Math.sqrt(l),f=1/(Math.sqrt(l)*Math.sqrt(c));this.squash.scale.set(f,h,u);for(const d of this.arms)d.shoulder.position.set(d.side*(.5*f+wi/2),.42*h,0);this.pelvis.updateMatrixWorld(!0),this.solveLegs(),this.solveArms(t),e.asleep&&(this.lastBreath<.55&&e.breath>=.55&&this.fx.z(this.headCentre(this.v1).add(this.v2.set(0,.62,0))),this.lastBreath=e.breath),this.fx.update(t)}inHead(t,e,n=!1){const s=this.squash.worldToLocal(this.v4.copy(t)),r=n?this.motion.headDrop:this.motion.hipDrop;return Math.abs(s.x)<.5+e&&s.y>.02-r&&s.y<1+e-r&&Math.abs(s.z)<.5+e}outOfBody(t,e,n,s){const r=t.parent,o=s?this.motion.hipDrop:this.motion.headDrop;for(let a=0;a<24;a++){let l=-1,c=0;const h=e(),u=this.v3;for(let x=0;x<h.length;x++){const g=this.squash.worldToLocal(this.v4.copy(h[x]));if(!(Math.abs(g.x)<.5+n&&g.y>.02-o&&g.y<1+n-o&&Math.abs(g.z)<.5+n))continue;const p=[[.5+n-g.x,1,0,0],[g.x+.5+n,-1,0,0],[.5+n-g.z,0,0,1],[g.z+.5+n,0,0,-1],[1+n-o-g.y,0,1,0]];s&&p.push([g.y+o,0,-1,0]);let M=null;for(const E of p)!s&&this.v2.set(E[1],E[2],E[3]).transformDirection(this.squash.matrixWorld).y<-.6||(!M||E[0]<M[0])&&(M=E);M&&M[0]>c&&(c=M[0],l=x,u.set(M[1],M[2],M[3]))}if(l<0)return;u.transformDirection(this.squash.matrixWorld);const f=r.worldToLocal(this.v1.copy(h[l])),d=this.v2.copy(u).transformDirection(this.qm.copy(r.matrixWorld).invert()),m=Ti.subVectors(f,t.position).cross(d);if(m.lengthSq()<1e-8)return;t.quaternion.premultiply(this.qb.setFromAxisAngle(m.normalize(),.07))}}legPoints(t,e){const n=this.motion;return t.hip.updateMatrixWorld(!0),t.hip.localToWorld(e[0].set(0,-.4*n.thigh,0)),t.hip.localToWorld(e[1].set(0,-.75*n.thigh,0)),t.knee.getWorldPosition(e[2]),t.knee.localToWorld(e[3].set(0,-.5*n.shin,0)),t.ankle.getWorldPosition(e[4]),e}solveLegs(){const t=this.motion,e=this.pelvis.getWorldQuaternion(this.qa),n=this.qc.copy(e).invert();this.legs.forEach((s,r)=>{const o=t.feet[r],a=this.pelvis.worldToLocal(this.v1.copy(o.ankle)),l=this.v3.set(0,0,1).applyQuaternion(o.q).applyQuaternion(n),c=Math.atan2(l.x,l.z),h=s.side>0?be(c,-.2,.7):be(c,-.7,.2);if(h!==c){const b=Math.hypot(l.x,l.z);l.x=Math.sin(h)*b,l.z=Math.cos(h)*b}let u=o.q;if(o.mode!=="free"&&Math.abs(c-h)>ps.twist*.85){const b=c-h-Math.sign(c-h)*ps.twist*.85;u=this.qf.setFromAxisAngle(Bn.set(0,1,0),-b).multiply(o.q)}const f=o.kneeOut,d=this.v2.copy(l).multiplyScalar(1-f*1.3).add(fn.set(s.side*(.12+1.2*f),Uf(-a.y,t.L),0)),m=iy.set(0,1,0).applyQuaternion(n);if(o.mode==="free"){const b=be(Math.abs(t.roll)/(Math.PI/2),0,1);d.set(0,0,Da(.6,1,b)).addScaledVector(m,1-.85*b);const L=be(-a.z/.25,0,1);d.z+=1.6*L,d.addScaledVector(m,-.9*L)}const x=o.mode==="free"?ny:xu;Ni(s.hip.position,a,t.thigh,t.shin,d,s.hip.quaternion,s.knee.quaternion,x),o.mode!=="free"?this.kneeBelowHip(s,a,s.hip.position.y-.1,m.set(s.side,0,0)):this.kneeBelowHip(s,a,s.hip.position.y+.02,m.add(fn.set(s.side*.3,0,0)),x);const g=this.v3.set(0,-1,0).applyQuaternion(s.hip.quaternion),p=Math.atan2(g.z,-g.y),M=Math.asin(be(g.x*s.side,-1,1)),E=be(p,Qr.back,Qr.fwd),v=be(M,o.mode==="free"?-.45:Qr.inward,Qr.out);if(E!==p||v!==M){const b=en.set(s.side*Math.sin(v),-Math.cos(v)*Math.cos(E),Math.cos(v)*Math.sin(E));s.hip.quaternion.premultiply(this.qb.setFromUnitVectors(g,b))}o.mode==="free"&&this.kneeOverGround(s,a,x),this.outOfBody(s.hip,()=>this.legPoints(s,this.pts),.075,!0);const y=this.qb.copy(e).multiply(s.hip.quaternion).multiply(s.knee.quaternion);s.ankle.quaternion.copy(y.invert()).multiply(u),vu(s.ankle.quaternion,[ps.up,ps.down],[-.35,ps.twist],[-.3,ps.side]),s.toes.rotation.set(be(o.toe,-1.2,.5),0,0)})}kneeBelowHip(t,e,n,s,r=xu){const o=this.motion,a=t.hip.position,l=this.v5.copy(e),c=this.v4.set(0,-o.thigh,0).applyQuaternion(t.hip.quaternion).add(a);if(c.y<=n)return;const h=this.v3.subVectors(l,a),u=h.length();if(u<1e-4)return;h.divideScalar(u);const f=this.v2.copy(a).addScaledVector(h,h.dot(this.v1.subVectors(c,a))),d=this.v1.subVectors(c,f),m=d.length();if(m<1e-4)return;d.divideScalar(m);const x=this.v4.crossVectors(h,d).normalize();x.dot(s)<0&&x.negate();let g=Math.PI/2;for(let M=1;M<=18;M++){const E=M/18*(Math.PI/2);if(f.y+m*(Math.cos(E)*d.y+Math.sin(E)*x.y)<=n){g=E;break}}const p=d.multiplyScalar(Math.cos(g)).addScaledVector(x,Math.sin(g));Ni(a,l,o.thigh,o.shin,p,t.hip.quaternion,t.knee.quaternion,r)}kneeOverGround(t,e,n){const s=this.motion,[r,o,a,l,c,h]=this.kg;if(t.hip.updateMatrixWorld(!0),t.knee.getWorldPosition(r),r.y>=this.world.groundAt(r.x,r.z)+wi/2)return;const u=t.hip.position,f=h.set(0,-s.thigh,0).applyQuaternion(t.hip.quaternion).add(u);c.subVectors(e,u);const d=c.length();if(d<1e-4)return;c.divideScalar(d),o.copy(u).addScaledVector(c,c.dot(a.subVectors(f,u))),a.subVectors(f,o);const m=a.length();if(m<1e-4)return;a.divideScalar(m),l.crossVectors(c,a).normalize(),l.dot(r.set(0,1,0).applyQuaternion(this.pelvis.getWorldQuaternion(this.qd).invert()))<0&&l.negate();let x=-1;for(let p=1;p<=24&&x<0;p++){const M=p/24*Math.PI;this.pelvis.localToWorld(h.copy(o).addScaledVector(a,m*Math.cos(M)).addScaledVector(l,m*Math.sin(M))),h.y>=this.world.groundAt(h.x,h.z)+wi/2&&(x=M)}if(x<0)return;const g=h.copy(a).multiplyScalar(Math.cos(x)).addScaledVector(l,Math.sin(x));Ni(u,e,s.thigh,s.shin,g,t.hip.quaternion,t.knee.quaternion,n)}armPoints(t,e){const n=this.a2;return t.shoulder.updateMatrixWorld(!0),t.shoulder.localToWorld(e[0].set(0,-.6*n,0)),t.elbow.getWorldPosition(e[1]),t.elbow.localToWorld(e[2].set(0,-.5*n,0)),t.wrist.getWorldPosition(e[3]),t.wrist.localToWorld(e[4].set(0,-.15/2-.02,0)),e}solveArms(t){const e=this.motion,n=this.a2,s=this.a2,r=n+s,o=d=>this.turn.worldToLocal(this.v1.copy(d)).x<0?0:1,a=[null,null],[l,c]=this.targets;if(l&&(a[o(l)]=l),c){const d=o(c);a[d]?Math.abs(this.turn.worldToLocal(this.v1.copy(c)).x)<.8?a[1-d]=c:Math.floor(this.clock/2.6)%2===1&&(a[d]=c):a[d]=c}this.showing=l&&a.includes(l)?a.includes(c)&&Math.floor(this.clock/2.6)%2===1?c:l:c;const h=e.idle,f=e.feet.some(d=>d.mode==="free")?this.turn.getWorldQuaternion(this.qd).invert():null;this.arms.forEach((d,m)=>{const x=e.arms[m],g=this.v2.set(d.side*.5,-.35,-1);if(f){g.set(0,1,0).applyQuaternion(f);const S=this.v3.set(0,.5,0).sub(d.shoulder.position).normalize();g.dot(S)>.3&&g.set(0,1,0),g.multiplyScalar(.45).add(en.set(0,0,-1))}d.fk[0].setFromEuler(new wn(x.pitch,0,d.side*Math.max(.04,x.out))),d.fk[1].setFromAxisAngle(fn.set(1,0,0),-be(x.elbow,0,$s));let p=0,M=!1;const E=x.reach??(h?a[m]:null);if(E){const S=d.shoulder.position;if(x.reach&&x.flat){M=!0;const C=d.shoulder.getWorldPosition(this.v3),A=d.elbow.getWorldPosition(co);d.palm.copy(E);const U=Ms.set(E.x-C.x,0,E.z-C.z);U.lengthSq()>1e-6&&U.normalize();const N=zn.set(E.x-A.x,0,E.z-A.z).addScaledVector(U,.25);N.lengthSq()<1e-4&&N.set(Math.sin(e.yaw),0,Math.cos(e.yaw)),N.normalize(),d.palmDir.lerp(N,d.flatW<.05?1:Math.min(1,t*10)).normalize();const O=this.v1.copy(E).add(en.set(0,Ys.thick/2+.01,0)).addScaledVector(d.palmDir,-.095),G=this.turn.worldToLocal(O);Ni(S,G,n,s,g,d.ik[0],d.ik[1],$s)}else{const C=this.turn.worldToLocal(this.v1.copy(E));if(x.reach||E===c){if(E===c){const A=d.shoulder.getWorldPosition(Il),U=Ms.set(be(A.x,c.x-.5,c.x+.5),be(A.y,c.y-.5,c.y+.5),be(A.z,c.z-.5,c.z+.5));U.addScaledVector(zn.subVectors(A,U).normalize(),.06),this.turn.worldToLocal(C.copy(U))}C.distanceTo(S)<=r*.98||x.reach?Ni(S,C,n,s,g,d.ik[0],d.ik[1],$s):this.pointAlong(d,C)}else this.pointAlong(d,C)}p=x.reach?x.reachW:1}const v=e.scratch;if(v&&v.side===m&&v.w>0&&x.reach){const S=d.shoulder.position,C=e.headDrop,A=this.turn.worldToLocal(this.sc1.copy(x.reach).add(en.set(0,Ys.thick/2+.01,0)).addScaledVector(d.palmDir,-.095)),U=v.kind==="chin"?this.sc2.set(d.side*(.14+.03*v.wiggle),-C-.15,.62):this.sc2.set(d.side*.4,1.14-C,-.04+.05*v.wiggle);let N=A;if(v.kind==="chin")N=A.lerp(U,v.w);else{const O=this.sc3.set(d.side*.9,1.25-C,.1),G=v.w,J=1-G;N=A.multiplyScalar(J*J).addScaledVector(O,2*G*J).addScaledVector(U,G*G)}g.lerp(v.kind==="chin"?fn.set(d.side,-.3,.1):fn.set(d.side,.35,-.15),v.w),Ni(S,N,n,s,g,d.ik[0],d.ik[1],$s),M=v.w<.05,p=1}d.aimW+=((E?p:0)-d.aimW)*Math.min(1,t*(x.reach?30:7)),d.flatW+=((M?1:0)-d.flatW)*Math.min(1,t*12),d.shoulder.quaternion.slerpQuaternions(d.fk[0],d.ik[0],d.aimW),d.elbow.quaternion.slerpQuaternions(d.fk[1],d.ik[1],d.aimW),d.shoulder.updateMatrixWorld(!0);const y=this.pushOut(d.elbow.getWorldPosition(this.v1),.09,d.shoulder.getWorldPosition(this.v3));if(d.pushE=y?1:0,y&&d.pushETo.copy(y),d.pushE>0){const S=this.turn.worldToLocal(this.v1.copy(d.pushETo)).sub(d.shoulder.position);Io(S,g,this.qa),d.shoulder.quaternion.slerp(this.qa,d.pushE)}d.shoulder.updateMatrixWorld(!0);const b=d.wrist.localToWorld(this.v1.set(0,-.15/2-.02,0)),L=M?null:this.pushOut(b,.13,d.shoulder.getWorldPosition(this.v3));if(L?(d.pushTo.copy(L),d.pushN.subVectors(L,b).normalize(),d.push=1):d.push=0,d.push>0){const S=this.turn.worldToLocal(this.v3.copy(d.pushTo).add(d.pushN)).sub(this.turn.worldToLocal(this.v1.copy(d.pushTo)));S.multiplyScalar(2).add(this.v1.set(0,-.3,-.6));const C=this.turn.worldToLocal(this.v1.copy(d.pushTo));Ni(d.shoulder.position,C,n,s,S,this.qa,this.qb,$s),d.shoulder.quaternion.slerp(this.qa,d.push),d.elbow.quaternion.slerp(this.qb,d.push)}d.aimW>.5&&this.elbowClear(d),this.outOfBody(d.shoulder,()=>this.armPoints(d,this.pts),.045,!1);const _=this.qa.setFromAxisAngle(fn.set(1,0,0),be(-.1-.05*x.vp,-.35,.35));if(d.flatW>.01){d.elbow.updateMatrixWorld(!0);const S=d.elbow.getWorldQuaternion(this.qb);fn.set(0,this.v3.set(1,0,0).applyQuaternion(S).y<0?-1:1,0),en.copy(d.palmDir).negate(),Bn.crossVectors(fn,en).normalize(),en.crossVectors(Bn,fn).normalize(),Po.makeBasis(fn,en,Bn);const C=this.qc.setFromRotationMatrix(Po),A=S.invert().multiply(C);vu(A,[-.45,Ia.side],[-1.6,Ia.turn],[-1.55,Ia.flex],"YZX"),d.wrist.quaternion.slerpQuaternions(_,A,d.flatW)}else d.wrist.quaternion.copy(d.aimW>.5?d.wrist.quaternion.identity():_)})}elbowClear(t){const e=()=>this.armPoints(t,this.pts).some(l=>this.inHead(l,.01,!0));if(!e())return;const n=t.shoulder.position,s=this.turn.worldToLocal(t.wrist.getWorldPosition(this.v4)),r=this.v5.subVectors(s,n);if(r.lengthSq()<1e-6)return;r.normalize();const o=this.turn.worldToLocal(t.elbow.getWorldPosition(this.v3)).sub(n),a=Ti.crossVectors(r,o).x*t.side>=0?1:-1;for(let l=0;l<12;l++){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,a*.13));const c=t.elbow.getWorldPosition(this.v3);if(c.y<this.world.groundAt(c.x,c.z)+.08){t.shoulder.quaternion.premultiply(this.qb.setFromAxisAngle(r,-a*.13));return}if(!e())return}}pointAlong(t,e){const n=Ti.subVectors(e,t.shoulder.position);Io(n,this.v2.set(t.side*.5,-.35,-1),t.ik[0]),t.ik[1].setFromAxisAngle(fn.set(1,0,0),-.08)}pushOut(t,e=.07,n){if(!this.world.solidAt(t.x,t.y,t.z))return null;const s=Math.round(t.x),r=Math.round(t.y),o=Math.round(t.z);let a=null,l=1/0;for(const[c,h,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,0,1],[0,0,-1]]){if(this.world.solidAt(s+c,r+h,o+u))continue;const f=c?(s+c*.5-t.x)*c:h?r+.5-t.y:(o+u*.5-t.z)*u,d=n?c*(n.x-t.x)+h*(n.y-t.y)+u*(n.z-t.z):0,m=f-Math.max(0,d)*.8;m<l&&(l=m,a=new D(t.x+c*(f+e),t.y+h*(f+e),t.z+u*(f+e)))}return a}debug(){const t=this.motion,e=this.legs.map((a,l)=>a.ankle.getWorldPosition(new D).distanceTo(t.feet[l].ankle));let n=0,s=0;const r=a=>{this.world.solidAt(a.x,a.y,a.z)&&n++},o=[0,1,2,3,4].map(()=>new D);for(const a of this.legs)this.legPoints(a,o),[o[2],o[3],o[4]].forEach(r),s+=o.filter(l=>this.inHead(l,0)).length;for(const a of this.arms)this.armPoints(a,o),[o[1],o[4]].forEach(r),s+=o.filter(l=>this.inHead(l,0)).length;return{footErr:e,inside:n,self:s,modes:t.feet.map(a=>a.mode)}}dispose(){this.face.dispose(),this.fx.dispose();for(const t of this.own)t.dispose()}}const ry="Welcome to Robyn Miller's Exhibit of Time Machines! I'm your host. Getting around is easy—just use the {W} key to move forward. To look around, use your mouse! Or the {LEFT} and {RIGHT} keys.",oy="Click anywhere to look around.",ay="Just click anywhere. Nothing will break. Probably.",ly="Press {W} to walk. The door is right behind me.",cy="Click anywhere to carry on.",hy="That's it! In you go. I'll wait out here.",uy=["Welcome back to the present!","You're back! What year was it in there?","Back already? Time flies. Especially in there.","Oh good, you're back. I kept the present warm for you."],fy="You are currently one of {x} people in the gallery.",dy="Things are quiet. You are the only person in the gallery.",py=["You may think that I'm not an appropriate host for an art gallery? Hm. Well maybe you're not an appropriate guest for our gallery!","My hat? I'm celebrating life!","Music? I'll see what I can find.","Take your time. The paintings aren't going anywhere. Neither am I.","Robyn painted every one of these. I just stand near them looking important.","Click on a painting to see it up close. I recommend it. I've seen them all up close. Very close.","Some people walk through a gallery in five minutes. Some take five hours. I've timed them.","Do you see the faces? I see faces everywhere. Even in the floor.","Between you and me, that one over there looked at me funny this morning.","Shh. The paintings are thinking.","I polished this floor myself. With my feet.","Every gallery needs a host. This one got me. Lucky gallery.","Art is long and I am short.","Stand back a little. Some paintings like their space.","I'm not allowed to touch the paintings. I'm barely allowed to touch the walls.","That one's my favourite. They're all my favourite.","Is it just me, or did that painting blink?","The lights in here are very flattering. To the paintings. And to me.","I've been told I have an excellent eye for art. I have two, actually.","Feel free to linger. Lingering is encouraged here.","If anyone asks, I'm security.","You can tell a lot from a face. Mine says 'party'.","There's no gift shop. I asked.","If you get lost, follow the walls. That's what I do.","Look closer. Then look from farther away. Then closer again. That's the trick.","Quiet in here, isn't it? I like it that way. Mostly.","Paintings get lonely if nobody looks at them. I made that up. But still.","Mind the doorways. They're bigger than they look. Or I'm smaller.","All the walls in here are white. I campaigned for polka dots. I lost.","Hm. You have good taste. I can tell by the way you stand.","This is the part where I say something profound. ... I'll get back to you.","I've counted the paintings twice. I got two different answers.","If you need me, I'll be right behind you. Always. Right behind you.","Sometimes I sit and stare at one for an hour. It doesn't mind.","Do you think they can see us? I think they can see us.","Not to brag, but I've been in every room of this gallery. Several times. Today.","Art is best enjoyed slowly. Like soup.","I'm told I add a certain something to the place. Nobody has said what.","Go ahead and stare. That's what they're for.","What do you think that one is about? I have a theory, but it's mostly about sandwiches.","I used to be just a block. Now I'm a block with legs. That's progress.","Every time someone visits, I feel taller. I'm not, though.","Close your eyes. Now open them. See? Still art.","Please don't lick the paintings. I'm not saying you would. I'm just saying.","I like this room. I like the other rooms too. I'm very agreeable.","That's a nice one. I'd hang it in my house, if I had a house. Or walls.","Some galleries have audio guides. You have me. You're welcome.","Ah, I was hoping you'd come this way.","Hmm-hmm-hmmm. Sorry. I hum when I'm happy.","Do you paint? You have a painter's way of squinting.","If these walls could talk... well, they'd probably just say 'white'.","Look at that brushwork! I think. I'm not entirely sure what brushwork is.","Did you see the little card next to each one? I read them all. Twice.","No hurry. I'm on gallery time.","The floor reflects the paintings. So technically you're seeing everything twice. You're welcome again.","I can't decide if that one is smiling or frowning. Maybe both. Like me before breakfast.","If you like one, stand in front of it a little longer. It'll like you back.","Some visitors talk to the paintings. I don't judge. I talk to them too.","I'm a professional. I've hosted at least one visitor before. Possibly two.","The best spot in the house is wherever you happen to be standing.","Squint a little. Go on. See how the colours move? That's free. No extra charge.","I tried painting once. It painted me back.","Don't mind me. I'm just here for the ambience. I am the ambience.",'Did you know the word "gallery" means a long room? I looked it up. I had time.',"If you hear snoring later, that wasn't me.","I'd tell you which one is the most famous, but they'd all get jealous.","This one was hung at exactly the right height. I checked with my hat.","You walk very gracefully. For a visitor.","Every painting here is somebody. Even the ones that look like nobody.","I like to think the paintings look forward to visitors. I know I do."],my=["Yes? Can I help you?","Hey! The machines are inside, not out here.","That tickles.","I'm working, you know.","Hello again!","Personal space! I'm very small. I need a lot of it.","Ooh. A fan.","Careful. I'm delicate. Like a vacuum tube.","Me? I'm not part of the exhibition. Or am I?","You found me! I wasn't hiding. Much.","Hmm? Oh, sorry. I was thinking about 1906.","My hat? I'm celebrating life!","Please do not poke the host.","Is this about the hat? It's about the hat, isn't it.","I'm flattered. Truly.","Music? I'll see what I can find."],gy=["Hm? Oh! I wasn't asleep. I was resting my eyes.","I'm up! I'm up!","Was I snoring? I don't snore. That was the ventilation.","Huh? Who? Oh. You. Welcome back."],xy=["Lovely, isn't it?","Up close they get even stranger. In the best way.","Good choice.","That's one of my favourites. Don't tell the others.","I always see something new in that one."],_y=["Oh! Someone else just came in. There are {x} of you now.","Another visitor! That makes {x} of you."],vy=["Somebody just left. Now there are {x} of you."],My=["Somebody just left. It's just you and me now."];function Fi(i,t){let e=i.filter(s=>!t.has(s));if(!e.length){for(const s of i)t.delete(s);e=i}const n=e[Math.floor(Math.random()*e.length)];return t.add(n),n}const ve=.2,yy=Math.sqrt(9.81/(22*ve)),Sy={...UM,shape:1,eyeSize:0,eyeSpacing:1,eyeHeight:.23,browWeight:0,browHeight:1,noseLength:0,noseHeight:.49,mouthWidth:.28,mouthColor:.22,cheeks:.46,skin:0,hairColor:.03482587064676617,hat:"birthday"},to=(i,t,e,n=new D)=>n.set(i/ve,t/ve-.5,e/ve),Mu=(i,t=new D)=>t.set(i.x*ve,(i.y+.5)*ve,i.z*ve);class by{constructor(t,e,n){I(this,"scene",new Yl);I(this,"cam",new sn);I(this,"rig");I(this,"count",null);I(this,"onEnter",()=>{});I(this,"onLeave",()=>{});I(this,"el");I(this,"textEl");I(this,"bubble",null);I(this,"onKey",()=>{});I(this,"hidden",!1);I(this,"wasLocked",!1);I(this,"queue",[]);I(this,"used",new Set);I(this,"grid",null);I(this,"stage","waiting");I(this,"inv",{hello:!1,lookSaid:!1,lookAt:0,lockedAt:0,nudgedClick:!1,nudgedWalk:!1,leading:!1,startD:-1});I(this,"inside",!1);I(this,"been",!1);I(this,"wasInside",!1);I(this,"wasOut",!0);I(this,"quiet",0);I(this,"resting","no");I(this,"soughtRest",!1);I(this,"idleIn",6);I(this,"remarkIn",45);I(this,"followIn",0);I(this,"glanceIn",2);I(this,"glanceAt",null);I(this,"dest",null);I(this,"last",{x:0,z:0,yaw:0,pitch:0});I(this,"countSaid",0);I(this,"lastCrowd",-999);I(this,"clock",0);I(this,"v1",new D);I(this,"v2",new D);this.gallery=t,this.player=e,this.main=n;const s={groundAt:(o,a)=>this.wallAt(o*ve,a*ve)?this.gallery.arch.H/ve:-.5,solidAt:(o,a,l)=>{const c=(a+.5)*ve;return c<0?!0:c<this.gallery.arch.H&&this.wallAt(o*ve,l*ve)}};this.rig=new sy(Sy,3,s),this.scene.add(this.rig.root,this.rig.fx.group),this.scene.add(new Lp(16777215,13815492,1.9));const r=new Dp(16777215,1.5);r.position.set(.4,1,.7),this.scene.add(r),this.placeOutside(),this.el=document.createElement("div"),this.el.className="host-bubble",this.textEl=document.createElement("span"),this.el.append(this.textEl),this.textEl.addEventListener("click",o=>{var l;const a=(l=o.target.closest(".hk"))==null?void 0:l.dataset.k;a&&(o.preventDefault(),o.stopPropagation(),this.onKey(a),this.endBubble())}),document.body.append(this.el),this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch}}get arch(){return this.gallery.arch}wallAt(t,e){return this.arch.solids.some(n=>t>n.x0-.01&&t<n.x1+.01&&e>n.z0-.01&&e<n.z1+.01)}get at(){return{x:this.rig.pos.x*ve,z:this.rig.pos.z*ve}}doorSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.6,z:t.z-1.4}}outsideSpot(){const t=this.arch.entrance;return{x:(t.a+t.b)/2+.7,z:t.z+this.gallery.data.layout.outline.t+3.2}}placeOutside(){const t=this.outsideSpot();this.rig.place(t.x/ve,t.z/ve,0),this.dest=null}gridFor(){if(this.grid&&this.grid.arch===this.arch)return this.grid;const t=this.arch,e=t.inner,n=.25,s=.32,r=this.gallery.data.layout.outline.t,o=7,a=e.x0-r-2.5,l=e.z0,c=Math.ceil((e.x1-e.x0+2*(r+2.5))/n),h=Math.ceil((e.z1-e.z0+r+o)/n),u=new Uint8Array(c*h);for(let f=0;f<h;f++)for(let d=0;d<c;d++){const m=a+(d+.5)*n,x=l+(f+.5)*n,g=m>e.x0+s&&m<e.x1-s&&x>e.z0+s&&x<e.z1-s,p=x>e.z1+r+s,M=m>t.entrance.a+s&&m<t.entrance.b-s&&x>e.z1-s-.01&&x<e.z1+r+s+.01;!g&&!p&&!M||t.solids.some(E=>m>E.x0-s&&m<E.x1+s&&x>E.z0-s&&x<E.z1+s)||(u[f*c+d]=1)}return this.grid={arch:t,x0:a,z0:l,nx:c,nz:h,c:n,free:u},this.grid}freeAt(t,e){const n=this.gridFor(),s=Math.floor((t-n.x0)/n.c),r=Math.floor((e-n.z0)/n.c);return s>=0&&r>=0&&s<n.nx&&r<n.nz&&n.free[r*n.nx+s]===1}clear(t,e,n,s){const r=Math.hypot(n-t,s-e),o=Math.max(1,Math.ceil(r/.1));for(let a=0;a<=o;a++)if(!this.freeAt(t+(n-t)*a/o,e+(s-e)*a/o))return!1;return!0}route(t,e){const n=this.gridFor(),s=this.at,r=(v,y)=>[Math.floor((v-n.x0)/n.c),Math.floor((y-n.z0)/n.c)];let[o,a]=r(s.x,s.z);const[l,c]=r(t,e),h=(v,y)=>v>=0&&y>=0&&v<n.nx&&y<n.nz&&n.free[y*n.nx+v]===1;if(!h(l,c))return null;if(!h(o,a)){let v=null,y=1/0;for(let b=-4;b<=4;b++)for(let L=-4;L<=4;L++)h(o+L,a+b)&&L*L+b*b<y&&(y=L*L+b*b,v=[o+L,a+b]);if(!v)return null;[o,a]=v}const u=n.nx*n.nz,f=new Float32Array(u).fill(1/0),d=new Int32Array(u).fill(-1),m=(v,y)=>{const b=Math.abs(v-l),L=Math.abs(y-c);return Math.max(b,L)+.414*Math.min(b,L)},x=[[m(o,a),a*n.nx+o]];f[a*n.nx+o]=0;const g=c*n.nx+l;for(;x.length;){let v=0;for(let _=1;_<x.length;_++)x[_][0]<x[v][0]&&(v=_);const[,y]=x.splice(v,1)[0];if(y===g)break;const b=y%n.nx,L=Math.floor(y/n.nx);for(const[_,S]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const C=b+_,A=L+S;if(!h(C,A)||_&&S&&(!h(b+_,L)||!h(b,L+S)))continue;const U=A*n.nx+C,N=f[y]+(_&&S?1.414:1);N<f[U]&&(f[U]=N,d[U]=y,x.push([N+m(C,A),U]))}}if(!isFinite(f[g]))return null;const p=[];for(let v=g;v!==-1;v=d[v])p.unshift({x:n.x0+(v%n.nx+.5)*n.c,z:n.z0+(Math.floor(v/n.nx)+.5)*n.c});p[p.length-1]={x:t,z:e};const M=[s];let E=0;for(;E<p.length-1;){let v=p.length-1;const y=M[M.length-1];for(;v>E+1&&!this.clear(y.x,y.z,p[v].x,p[v].z);)v--;M.push(p[v]),E=v}return M}goTo(t,e){const n=this.route(t,e);if(!n||n.length<2)return!1;let s=0;for(let o=1;o<n.length;o++)s+=Math.hypot(n[o].x-n[o-1].x,n[o].z-n[o-1].z);if(s<.25)return!1;const r=s>3.2?"bound":s>1.6?"run":"walk";return this.rig.travel(n.slice(1).map(o=>({x:o.x/ve,z:o.z/ve})),r,()=>{this.dest=null}),this.dest={x:t,z:e},!0}seen(t,e){const n=this.player.pos;return!Hi(this.arch.solids,n.x,n.z,t,e)}goodSpot(t,e){const n=this.player.pos,s=Math.hypot(t-n.x,e-n.z),r=-Math.sin(this.player.yaw),o=-Math.cos(this.player.yaw),a=((t-n.x)*r+(e-n.z)*o)/Math.max(s,1e-6);return s>.75&&s<3.4&&a>-.2&&this.seen(t,e)}follow(){const t=this.player.pos,e=this.at;if(this.goodSpot(e.x,e.z)&&!this.dest)return;const n=-Math.sin(this.player.yaw),s=-Math.cos(this.player.yaw),r=Math.cos(this.player.yaw),o=-Math.sin(this.player.yaw),a=[[1.5,.9],[1.5,-.9],[1,1.4],[1,-1.4],[.3,1.3],[.3,-1.3],[2.2,0],[2.4,1.2],[2.4,-1.2],[-.6,1],[-.6,-1]];let l=null,c=1/0;if(a.forEach(([u,f],d)=>{const m=t.x+n*u+r*f,x=t.z+s*u+o*f;if(!this.freeAt(m,x)||!this.seen(m,x))return;const g=Math.hypot(m-e.x,x-e.z)+d*.15;g<c&&(c=g,l={x:m,z:x})}),!l)return;const h=l;this.dest&&Math.hypot(this.dest.x-h.x,this.dest.z-h.z)<.8||this.goTo(h.x,h.z)}say(t,e){this.bubble||this.queue.length?this.queue.push({text:t,feel:e}):this.start(t,e)}start(t,e){if(t==="{count}"&&(t=this.count===null?"{x}":this.count<=1?dy:fy),t.includes("{x}")&&this.count===null){const r=this.queue.shift();r&&this.start(r.text,r.feel);return}const n=t.replace("{x}",String(this.count)).split(/\{(W|LEFT|RIGHT)\}/).map((r,o)=>(o%2,r)).filter(r=>r!==""),s=n.map(r=>Na(r)?"o":r).join("");this.bubble={text:s,segs:n,shown:0,drawn:0,until:1/0},this.textEl.textContent="",this.el.classList.add("on"),e&&this.rig.feel(e,2.5)}endBubble(){this.bubble=null,this.el.classList.remove("on");const t=this.queue.shift();t&&this.start(t.text,t.feel)}grow(t,e){let n=0;for(const s of t.segs){const r=Na(s)?1:s.length,o=Math.max(t.drawn,n),a=Math.min(e,n+r);if(a>o)if(Na(s)){const l=document.createElement("button");l.className="hk",l.dataset.k=s,l.tabIndex=-1,l.title=Ey[s],l.textContent=wy[s],this.textEl.append(l)}else{const l=s.slice(o-n,a-n),c=this.textEl.lastChild;c&&c.nodeType===Node.TEXT_NODE?c.appendData(l):this.textEl.append(l)}n+=r}t.drawn=e}countLine(){return"{count}"}poke(){this.quiet=0,this.wake(),!this.bubble&&(this.say(Fi(my,this.used),Math.random()<.5?"pleased":"surprised"),this.rig.busy()||this.rig.perform(Math.random()<.5?"wave":"spin"))}looked(){this.stage!=="company"||this.bubble||Math.random()>.35||!this.visible(6)||this.say(Fi(xy,this.used),"pleased")}setCount(t){const e=this.count;this.count=t,!(e===null||t===e||this.stage!=="company"||this.clock-this.lastCrowd<60||this.resting!=="no")&&(this.lastCrowd=this.clock,t>e?this.say(Fi(_y,this.used),"excited"):this.say(t<=1?My[0]:Fi(vy,this.used),"curious"))}hit(t){const e=new wl(to(t.ray.origin.x,t.ray.origin.y,t.ray.origin.z),t.ray.direction.clone(),0,t.far/ve);return this.rig.hit(e)}visible(t){const e=this.player.pos,n=this.at;if(Math.hypot(n.x-e.x,n.z-e.z)>t||!this.seen(n.x,n.z))return!1;const s=Mu(this.rig.headCentre(this.v1),this.v2).project(this.main);return s.z<1&&Math.abs(s.x)<.95&&Math.abs(s.y)<.95}wake(){this.resting==="no"&&this.rig.resting==="stand"||(this.resting==="asleep"&&(this.rig.feel("surprised",1.2),this.rig.blink(),Math.random()<.6&&this.say(Fi(gy,this.used))),this.resting="no",this.soughtRest=!1,this.rig.sleep(!1),this.rig.rest("stand"),this.rig.mood("calm"))}update(t){this.clock+=t;const e=this.player,n=this.rig,s=this.arch,r=Math.hypot(e.pos.x-this.last.x,e.pos.z-this.last.z)>.004||Math.abs(e.yaw-this.last.yaw)+Math.abs(e.pitch-this.last.pitch)>.003;this.last={x:e.pos.x,z:e.pos.z,yaw:e.yaw,pitch:e.pitch},this.quiet=r?0:this.quiet+t;const o=s.inner;this.inside=e.pos.x>o.x0&&e.pos.x<o.x1&&e.pos.z>o.z0&&e.pos.z<o.z1-.1,this.inside&&!this.wasInside&&(this.onEnter(),this.been=!0,this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.4)));const a=e.pos.z>o.z1+.3;a&&!this.wasOut&&this.been&&(this.onLeave(),this.queue=[],this.wake(),this.say(Fi(uy,this.used),"happy"),this.rig.perform("wave")),this.wasInside=this.inside,this.wasOut=a,!this.been&&!this.inside&&this.invite();const l=e.locked;this.wasLocked&&!l&&!this.hidden&&!this.bubble&&!this.inside&&this.say(cy,"pleased"),this.wasLocked=l,this.stage==="greeting"&&!this.bubble&&!this.queue.length&&(this.stage="company",this.remarkIn=35+Math.random()*30);const c=this.bubble;if(c){c.shown=Math.min(c.text.length,c.shown+t*34);const f=Math.ceil(c.shown);f>c.drawn&&this.grow(c,f),c.until===1/0&&c.shown>=c.text.length&&(c.until=this.clock+Math.max(3.2,c.text.length*.06)),this.clock>c.until&&this.endBubble()}const h=!!c&&c.shown<c.text.length;n.talk(h?c.text[Math.max(0,Math.ceil(c.shown)-1)]:null),r&&(this.resting!=="no"||n.resting!=="stand")&&this.wake();const u=to(this.main.position.x,this.main.position.y,this.main.position.z,new D);if(this.stage==="company"&&this.resting==="no"&&((this.followIn-=t)<=0&&(this.followIn=.45,n.resting==="stand"&&this.follow()),!this.bubble&&(this.remarkIn-=t)<=0&&(this.remarkIn=45+Math.random()*45,this.visible(5.5)&&this.quiet<50&&this.say(Fi(py,this.used),Math.random()<.5?"pleased":"curious"))),this.resting!=="no"||n.resting!=="stand")(this.glanceIn-=t)<=0&&(this.glanceIn=3+Math.random()*4,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(this.resting==="asleep"?null:h?u:this.glanceAt),this.resting==="kneeling"&&(this.quiet>=180?(this.resting="asleep",n.resting==="kneel"&&n.rest("lie",Math.atan2(u.x-n.pos.x,u.z-n.pos.z))?n.mood("sleepy"):(n.mood("asleep"),n.sleep(!0))):this.quiet>120&&(this.idleIn-=t)<=0&&(this.idleIn=9+Math.random()*6,n.feel("yawn",1.8))),this.resting==="asleep"&&n.resting==="lie"&&n.feeling!=="asleep"&&(n.mood("asleep"),n.sleep(!0));else if(n.busy())n.lookAt(h?u:null);else if(n.turnTo(Math.atan2(u.x-n.pos.x,u.z-n.pos.z)),(this.glanceIn-=t)<=0&&(this.glanceIn=2.2+Math.random()*3.5,this.glanceAt=this.somethingToLookAt(u)),n.lookAt(h?u:this.glanceAt),this.stage==="company"||this.stage==="waiting"){if(this.quiet>9&&this.quiet<25&&(this.idleIn-=t)<=0)this.idleIn=7+Math.random()*4,Math.random()<.35&&n.perform(Math.random()<.5?"spin":"jump");else if(this.quiet>=25&&this.quiet<60)n.mood("bored"),(this.idleIn-=t)<=0&&(this.idleIn=6+Math.random()*5,n.perform(Math.random()<.5?"sigh":"tap"));else if(this.quiet>=60&&!this.bubble){const f=Math.atan2(u.x-n.pos.x,u.z-n.pos.z),d=n.roomAt(n.pos.x,n.pos.z,f);if(!(d!=null&&d.lie)&&!this.soughtRest){this.soughtRest=!0;const m=this.restSpot(f);if(m&&this.goTo(m.x,m.z))return this.after(t)}this.resting="kneeling",n.mood("calm"),n.rest("kneel",f)}}this.after(t)}invite(){const t=this.player,e=this.inv,n=t.locked;if(this.countSaid||e.leading||(!e.hello&&this.clock>1.2&&(e.hello=!0,this.rig.perform("wave"),this.say(ry,"happy")),!e.hello))return;const s=!this.bubble&&!this.queue.length;n&&!e.lockedAt&&(e.lockedAt=this.clock),!n&&!e.lockedAt&&!e.lookSaid&&s&&(e.lookSaid=!0,e.lookAt=this.clock,this.say(oy,"pleased")),!n&&!e.lockedAt&&e.lookSaid&&!e.nudgedClick&&this.clock-e.lookAt>20&&s&&(e.nudgedClick=!0,this.say(ay,"curious"));const r=this.arch.entrance,o=Math.hypot(t.pos.x-(r.a+r.b)/2,t.pos.z-r.z);if(e.startD<0&&(e.startD=o),o<e.startD-1.2){e.leading=!0,this.wake(),this.queue=[],this.bubble&&(this.bubble.until=Math.min(this.bubble.until,this.clock+.5)),this.say(hy,"excited"),this.rig.perform("wave");return}e.lockedAt&&!e.nudgedWalk&&this.clock-e.lockedAt>16&&o>e.startD-.3&&s&&(e.nudgedWalk=!0,this.say(ly,"curious"))}after(t){this.rig.update(t*yy),this.place()}restSpot(t){var n;const e=this.at;for(let s=.4;s<=2.4;s+=.4)for(let r=0;r<12;r++){const o=r/12*Math.PI*2,a=e.x+Math.cos(o)*s,l=e.z+Math.sin(o)*s;if(!(!this.freeAt(a,l)||!this.seen(a,l))&&(n=this.rig.roomAt(a/ve,l/ve,t))!=null&&n.lie)return{x:a,z:l}}return null}somethingToLookAt(t){const e=Math.random();if(e<.45)return t.clone();const n=this.at;let s=null,r=e<.75?2.5:6;for(const o of this.gallery.placed){const a=Math.hypot(o.centre[0]-n.x,o.centre[2]-n.z);a<r&&this.seen(o.centre[0],o.centre[2])&&(r=a,s=to(o.centre[0],o.centre[1],o.centre[2]))}return s??t.clone()}place(){const t=this.main;if(to(t.position.x,t.position.y,t.position.z,this.cam.position),this.cam.quaternion.copy(t.quaternion),(this.cam.fov!==t.fov||this.cam.aspect!==t.aspect||this.cam.near!==t.near/ve)&&(this.cam.fov=t.fov,this.cam.aspect=t.aspect,this.cam.near=t.near/ve,this.cam.far=t.far/ve,this.cam.updateProjectionMatrix()),this.cam.updateMatrixWorld(),this.bubble){const e=Mu(this.rig.headTop(this.v1),this.v2).project(t),n=innerWidth,s=innerHeight;let r=(e.x*.5+.5)*n,o=(-e.y*.5+.5)*s;const a=e.z>1;a&&(r=n/2,o=s-120),r=Math.max(170,Math.min(n-170,r)),o=Math.max(90,Math.min(s-30,o)),this.el.style.left=`${r}px`,this.el.style.top=`${o}px`,this.el.classList.toggle("free",a||!this.visible(30))}}render(t){t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=!0}hide(t){this.hidden=t,this.el.style.visibility=t?"hidden":""}get obstacle(){const t=this.at;return{x:t.x,z:t.z,r:.22}}}const Na=i=>i==="W"||i==="LEFT"||i==="RIGHT",wy={W:"W",LEFT:"←",RIGHT:"→"},Ey={W:"Step forward",LEFT:"Turn left",RIGHT:"Turn right"};var yu;class Ty{constructor(t){I(this,"count",null);I(this,"onCount",()=>{});I(this,"id",(((yu=crypto.randomUUID)==null?void 0:yu.call(crypto))??String(Math.random()).slice(2)).slice(0,36));I(this,"inside",!1);I(this,"timer",0);I(this,"room","");this.url=t,t&&addEventListener("pagehide",()=>{this.inside&&this.beacon()})}enter(){!this.url||this.inside||(this.inside=!0,this.ping(),this.timer=window.setInterval(()=>this.ping(),2e4))}exit(){!this.url||!this.inside||(this.inside=!1,clearInterval(this.timer),this.beacon())}async ping(){try{const t=await fetch(`${this.url}/ping${this.room}`,{method:"POST",headers:{"content-type":"text/plain"},body:this.id});if(!t.ok||!this.inside)return;const e=await t.json();typeof e.count=="number"&&e.count!==this.count&&(this.count=e.count,this.onCount(e.count))}catch{}}beacon(){var e;const t=`${this.url}/leave${this.room}`;(e=navigator.sendBeacon)!=null&&e.call(navigator,t,this.id)||fetch(t,{method:"POST",body:this.id,keepalive:!0}).catch(()=>{})}}const Qn=new URLSearchParams(location.search),Ay=matchMedia("(hover: none) and (pointer: coarse)").matches&&!Qn.has("desk");Ay?(document.getElementById("mobile").classList.add("on"),document.getElementById("cover").classList.add("gone"),fetch(`data/machines.json?${Date.now()}`).then(i=>i.json()).then(i=>{const t=document.getElementById("mobile-list");for(const e of i){if(e.off)continue;const n=document.createElement("li"),s=document.createElement("a");s.href=e.url,s.target="_top",s.textContent=e.name.replace(/\s*[|\n]\s*/g," "),n.append(s),t.append(n)}}).catch(()=>{})):Ry().catch(i=>{console.error(i),document.getElementById("cover").textContent="This browser could not open the gallery."});async function Ry(){const i='"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif',[t]=await Promise.all([H_(),Promise.race([Promise.all(['300 40px "Inter Tight"','400 40px "Inter Tight"','italic 500 40px "Inter Tight"'].map(Z=>document.fonts.load(Z))),new Promise(Z=>setTimeout(Z,2500))])]),e=new D_({antialias:!0,powerPreference:"high-performance"});let s=Math.min(devicePixelRatio||1,2);e.setPixelRatio(s),e.setSize(innerWidth,innerHeight),e.toneMapping=Nl,e.toneMappingExposure=1;const r=e.domElement;document.getElementById("stage").appendChild(r);const o=e.capabilities.getMaxAnisotropy(),a=new Yl,l=new sn(62,innerWidth/innerHeight,.05,900);l.layers.enable(1),l.layers.enable(Pl);const c=new gM(1,1),h=()=>{e.setPixelRatio(s),e.setSize(innerWidth,innerHeight),l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix();const Z=e.getDrawingBufferSize(new Bt);c.setSize(Math.round(Z.x/2),Math.round(Z.y/2))};h(),addEventListener("resize",h);const u=new vs(t,a,e,c,i,o);await u.loadSmall();const f=new Pv(r),d=t.layout,m=d.entrance;f.pos.set(m.x+2.4,Ao,d.outline.z1+d.outline.t+9.8),f.yaw=Math.atan2(2.4,9.8),f.pitch=.05;const x=Qn.get("at");if(x){const[Z,at,pt,Rt]=x.split(",").map(Number);f.pos.set(Z,Ao,at),f.yaw=dn.degToRad(pt||0),f.pitch=dn.degToRad(Rt||0)}Qn.get("hud");const g=document.getElementById("dot");g.style.display="none";const p=new SM(!1),M=new wl;M.far=14,M.layers.enableAll();let E=[];const v=()=>{E=[],u.interior.group.traverse(Z=>{Z.isMesh&&!Z.isInstancedMesh&&E.push(Z)}),u.outside.group.traverse(Z=>{Z.isMesh&&Z.userData.outside&&E.push(Z)})},y=()=>{M.setFromCamera(new Bt(0,0),l);const Z=M.intersectObjects(E,!1)[0];if(!Z)return{kind:"none"};const at=Z.object.userData;return at.machine?{kind:"machine",machine:at.machine,point:Z.point,dist:Z.distance}:at.label?{kind:"label",work:at.work,point:Z.point,dist:Z.distance}:at.work?{kind:"work",work:at.work,point:Z.point,dist:Z.distance}:at.face?{kind:"face",face:at.face,point:Z.point,dist:Z.distance}:{kind:"none",point:Z.point,dist:Z.distance}},b=new bl,L=new Set;let _=1;const S=Z=>{let at=99;for(const pt of u.interior.pictures)pt.work.id===Z&&(at=Math.min(at,Math.hypot(pt.mesh.position.x-f.pos.x,pt.mesh.position.z-f.pos.z)));return at};function C(){_=0;for(const[Z,at]of u.sharp)if(!(S(Z)<=14)){u.sharp.delete(Z);for(const pt of u.interior.pictures)pt.work.id===Z&&(pt.mat.uniforms.uMap.value=u.texture(Z));at.dispose()}for(const Z of u.interior.pictures){const at=Z.work.id;u.sharp.has(at)||S(at)>7.5||(_++,!(L.has(at)||L.size>=4)&&(L.add(at),b.loadAsync(vs.url(at,"m")).then(pt=>{L.delete(at),u.sharp.set(at,u.prepTex(pt));for(const Rt of u.interior.pictures)Rt.work.id===at&&(Rt.mat.uniforms.uMap.value=pt)}).catch(()=>L.delete(at))))}}const A=new xM;let U=!0;const N=Z=>{const at=u.cat.get(Z);at&&(U=f.locked,f.frozen=!0,A.show(at,t.images[Z],vs.url(Z,u.sharp.has(Z)?"m":"s"),vs.url(Z,"l")),p.opened())};A.onClose=()=>{f.frozen=!1,$.looked()};const O=new EM,G=Z=>{const at=u.interior.machines.find(pt=>pt.placed.machine.id===Z);!at||O.active||(f.frozen=!0,p.clear(),O.go(at,l,f.locked))};O.onBack=Z=>{f.frozen=!1,Z&&!document.body.classList.contains("ed-page")&&r.requestPointerLock()};let J=[];const W=Z=>{Z.kind==="machine"?G(Z.id):N(Z.id)};let tt=0;const H={gallery:u,player:f,camera:l,renderer:e,canvas:r,viewer:A,scene:a,travel:O,aim:y,openWork:N,dot:g};u.onRebuilt=()=>{f.solids=u.arch.solids;const Z=t.layout.outline;f.world={x0:Z.x0-30,x1:Z.x1+30,z0:Z.z0-30,z1:Z.z1+30},f.collide(),v(),J=[...u.interior.pictures.map(_M),...u.interior.machines.map(vM)],tt=0},u.rebuild();const $=new by(u,f,l),st=new Ty((Qn.get("count"),void 0));st.onCount=Z=>$.setCount(Z),Qn.get("count")&&($.count=+Qn.get("count")),$.onEnter=()=>st.enter(),$.onKey=Z=>{f.tap(Z==="W"?"KeyW":Z==="LEFT"?"ArrowLeft":"ArrowRight",Z==="W"?.3:.4),f.locked||r.requestPointerLock()},$.onLeave=()=>st.exit();const ft=new wl;ft.far=12;let z=null;const X=Z=>{if(Z.button!==0&&Z.button!==2||O.active)return;if(A.open){A.hide();return}if(!f.locked){if(p.pic){W(p.pic);return}r.requestPointerLock();return}if(ft.setFromCamera(new Bt(0,0),l),$.hit(ft)){$.poke();return}if(p.pic){W(p.pic);return}const at=y();at.kind==="machine"&&at.dist<4?G(at.machine):(at.kind==="work"||at.kind==="label")&&N(at.work)};r.addEventListener("mousedown",X),addEventListener("mouseup",Z=>z==null?void 0:z.release(Z)),A.relock=()=>U&&!document.body.classList.contains("ed-page"),A.el.addEventListener("mousedown",Z=>{A.busy||Z.target.closest(".view-tools")||(Z.preventDefault(),A.hide(),!A.open&&!f.locked&&A.relock()&&r.requestPointerLock())}),document.addEventListener("contextmenu",Z=>{Z.target.closest("input, textarea, select")||Z.preventDefault()}),addEventListener("keydown",Z=>{var pt,Rt;if((Rt=(pt=Z.target).closest)!=null&&Rt.call(pt,"input, textarea, select, button"))return;const at=Z.code==="Enter"||Z.code==="Space";if(A.open){(at||Z.code==="Escape")&&!A.busy&&(Z.preventDefault(),A.hide());return}O.active||at&&p.pic&&!document.body.classList.contains("ed-page")&&(Z.preventDefault(),W(p.pic))}),document.addEventListener("pointerlockchange",()=>{!f.locked&&A.open&&A.hide()});const k=Qn.get("open");k!==null&&N(k.padStart(2,"0"));const B=Qn.get("travel");B&&setTimeout(()=>G(B),300);let R=performance.now(),P=0,V=0;const j=Qn.get("near")==="1";function it(){const Z=performance.now(),at=Math.min((Z-R)/1e3,.05);R=Z,f.update(at),f.apply(l),l.updateMatrixWorld(),O.update(at,l),vf.value+=at;const pt=document.body.classList.contains("ed-page");$.hide(pt||A.open||O.active),$.update(at),f.obstacles=[$.obstacle,...u.machines.map(Rt=>({x:Rt.spot.x,z:Rt.spot.z,r:Uv}))],(tt-=at)<=0&&(tt=.3,C()),pt||A.open||O.active?p.clear():p.update(at,l,J,u.arch.solids,!0),O.covering||(c.render(e,a,l),e.render(a,l),pt||$.render(e),pt||p.render(e,a,l)),P++,at>.024?V+=at:V=Math.max(0,V-at*.5),V>1.5&&s>1&&(s=Math.max(1,s-.25),V=0,h()),!window.__gReady&&P>3&&(!j||_===0)&&(window.__gReady=!0,document.getElementById("cover").classList.add("gone")),requestAnimationFrame(it)}requestAnimationFrame(it),window.__g={...H,data:t,editor:z,host:$,presence:st,focus:p,travelTo:G}}
