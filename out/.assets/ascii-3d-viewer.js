(function(AZ){class VW{addEventListener(q,H){if(this._listeners===void 0)this._listeners={};let W=this._listeners;if(W[q]===void 0)W[q]=[];if(W[q].indexOf(H)===-1)W[q].push(H)}hasEventListener(q,H){let W=this._listeners;if(W===void 0)return!1;return W[q]!==void 0&&W[q].indexOf(H)!==-1}removeEventListener(q,H){let W=this._listeners;if(W===void 0)return;let X=W[q];if(X!==void 0){let Y=X.indexOf(H);if(Y!==-1)X.splice(Y,1)}}dispatchEvent(q){let H=this._listeners;if(H===void 0)return;let W=H[q.type];if(W!==void 0){q.target=this;let X=W.slice(0);for(let Y=0,Z=X.length;Y<Z;Y++)X[Y].call(this,q);q.target=null}}}let KH=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jZ=1234567,QX=Math.PI/180,gW=180/Math.PI;function xH(){let q=Math.random()*4294967295|0,H=Math.random()*4294967295|0,W=Math.random()*4294967295|0,X=Math.random()*4294967295|0;return(KH[q&255]+KH[q>>8&255]+KH[q>>16&255]+KH[q>>24&255]+"-"+KH[H&255]+KH[H>>8&255]+"-"+KH[H>>16&15|64]+KH[H>>24&255]+"-"+KH[W&63|128]+KH[W>>8&255]+"-"+KH[W>>16&255]+KH[W>>24&255]+KH[X&255]+KH[X>>8&255]+KH[X>>16&255]+KH[X>>24&255]).toLowerCase()}function gq(q,H,W){return Math.max(H,Math.min(W,q))}function LY(q,H){return(q%H+H)%H}function E4(q,H,W,X,Y){return X+(q-H)*(Y-X)/(W-H)}function G4(q,H,W){if(q!==H)return(W-q)/(H-q);else return 0}function _X(q,H,W){return(1-W)*q+W*H}function L4(q,H,W,X){return _X(q,H,1-Math.exp(-W*X))}function R4(q,H=1){return H-Math.abs(LY(q,H*2)-H)}function K4(q,H,W){if(q<=H)return 0;if(q>=W)return 1;return q=(q-H)/(W-H),q*q*(3-2*q)}function z4(q,H,W){if(q<=H)return 0;if(q>=W)return 1;return q=(q-H)/(W-H),q*q*q*(q*(q*6-15)+10)}function V4(q,H){return q+Math.floor(Math.random()*(H-q+1))}function C4(q,H){return q+Math.random()*(H-q)}function N4(q){return q*(0.5-Math.random())}function M4(q){if(q!==void 0)jZ=q;let H=jZ+=1831565813;return H=Math.imul(H^H>>>15,H|1),H^=H+Math.imul(H^H>>>7,H|61),((H^H>>>14)>>>0)/4294967296}function S4(q){return q*QX}function P4(q){return q*gW}function T4(q){return(q&q-1)===0&&q!==0}function w4(q){return Math.pow(2,Math.ceil(Math.log(q)/Math.LN2))}function A4(q){return Math.pow(2,Math.floor(Math.log(q)/Math.LN2))}function j4(q,H,W,X,Y){let{cos:Z,sin:$}=Math,J=Z(W/2),Q=$(W/2),_=Z((H+X)/2),F=$((H+X)/2),O=Z((H-X)/2),U=$((H-X)/2),E=Z((X-H)/2),R=$((X-H)/2);switch(Y){case"XYX":q.set(J*F,Q*O,Q*U,J*_);break;case"YZY":q.set(Q*U,J*F,Q*O,J*_);break;case"ZXZ":q.set(Q*O,Q*U,J*F,J*_);break;case"XZX":q.set(J*F,Q*R,Q*E,J*_);break;case"YXY":q.set(Q*E,J*F,Q*R,J*_);break;case"ZYZ":q.set(Q*R,Q*E,J*F,J*_);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Y)}}function lH(q,H){switch(H.constructor){case Float32Array:return q;case Uint32Array:return q/4294967295;case Uint16Array:return q/65535;case Uint8Array:return q/255;case Int32Array:return Math.max(q/2147483647,-1);case Int16Array:return Math.max(q/32767,-1);case Int8Array:return Math.max(q/127,-1);default:throw new Error("Invalid component type.")}}function iq(q,H){switch(H.constructor){case Float32Array:return q;case Uint32Array:return Math.round(q*4294967295);case Uint16Array:return Math.round(q*65535);case Uint8Array:return Math.round(q*255);case Int32Array:return Math.round(q*2147483647);case Int16Array:return Math.round(q*32767);case Int8Array:return Math.round(q*127);default:throw new Error("Invalid component type.")}}let FX={DEG2RAD:QX,RAD2DEG:gW,generateUUID:xH,clamp:gq,euclideanModulo:LY,mapLinear:E4,inverseLerp:G4,lerp:_X,damp:L4,pingpong:R4,smoothstep:K4,smootherstep:z4,randInt:V4,randFloat:C4,randFloatSpread:N4,seededRandom:M4,degToRad:S4,radToDeg:P4,isPowerOfTwo:T4,ceilPowerOfTwo:w4,floorPowerOfTwo:A4,setQuaternionFromProperEuler:j4,normalize:iq,denormalize:lH};class uq{constructor(q=0,H=0){uq.prototype.isVector2=!0,this.x=q,this.y=H}get width(){return this.x}set width(q){this.x=q}get height(){return this.y}set height(q){this.y=q}set(q,H){return this.x=q,this.y=H,this}setScalar(q){return this.x=q,this.y=q,this}setX(q){return this.x=q,this}setY(q){return this.y=q,this}setComponent(q,H){switch(q){case 0:this.x=H;break;case 1:this.y=H;break;default:throw new Error("index is out of range: "+q)}return this}getComponent(q){switch(q){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+q)}}clone(){return new this.constructor(this.x,this.y)}copy(q){return this.x=q.x,this.y=q.y,this}add(q){return this.x+=q.x,this.y+=q.y,this}addScalar(q){return this.x+=q,this.y+=q,this}addVectors(q,H){return this.x=q.x+H.x,this.y=q.y+H.y,this}addScaledVector(q,H){return this.x+=q.x*H,this.y+=q.y*H,this}sub(q){return this.x-=q.x,this.y-=q.y,this}subScalar(q){return this.x-=q,this.y-=q,this}subVectors(q,H){return this.x=q.x-H.x,this.y=q.y-H.y,this}multiply(q){return this.x*=q.x,this.y*=q.y,this}multiplyScalar(q){return this.x*=q,this.y*=q,this}divide(q){return this.x/=q.x,this.y/=q.y,this}divideScalar(q){return this.multiplyScalar(1/q)}applyMatrix3(q){let H=this.x,W=this.y,X=q.elements;return this.x=X[0]*H+X[3]*W+X[6],this.y=X[1]*H+X[4]*W+X[7],this}min(q){return this.x=Math.min(this.x,q.x),this.y=Math.min(this.y,q.y),this}max(q){return this.x=Math.max(this.x,q.x),this.y=Math.max(this.y,q.y),this}clamp(q,H){return this.x=gq(this.x,q.x,H.x),this.y=gq(this.y,q.y,H.y),this}clampScalar(q,H){return this.x=gq(this.x,q,H),this.y=gq(this.y,q,H),this}clampLength(q,H){let W=this.length();return this.divideScalar(W||1).multiplyScalar(gq(W,q,H))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(q){return this.x*q.x+this.y*q.y}cross(q){return this.x*q.y-this.y*q.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(q){let H=Math.sqrt(this.lengthSq()*q.lengthSq());if(H===0)return Math.PI/2;let W=this.dot(q)/H;return Math.acos(gq(W,-1,1))}distanceTo(q){return Math.sqrt(this.distanceToSquared(q))}distanceToSquared(q){let H=this.x-q.x,W=this.y-q.y;return H*H+W*W}manhattanDistanceTo(q){return Math.abs(this.x-q.x)+Math.abs(this.y-q.y)}setLength(q){return this.normalize().multiplyScalar(q)}lerp(q,H){return this.x+=(q.x-this.x)*H,this.y+=(q.y-this.y)*H,this}lerpVectors(q,H,W){return this.x=q.x+(H.x-q.x)*W,this.y=q.y+(H.y-q.y)*W,this}equals(q){return q.x===this.x&&q.y===this.y}fromArray(q,H=0){return this.x=q[H],this.y=q[H+1],this}toArray(q=[],H=0){return q[H]=this.x,q[H+1]=this.y,q}fromBufferAttribute(q,H){return this.x=q.getX(H),this.y=q.getY(H),this}rotateAround(q,H){let W=Math.cos(H),X=Math.sin(H),Y=this.x-q.x,Z=this.y-q.y;return this.x=Y*W-Z*X+q.x,this.y=Y*X+Z*W+q.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kH{constructor(q=0,H=0,W=0,X=1){this.isQuaternion=!0,this._x=q,this._y=H,this._z=W,this._w=X}static slerpFlat(q,H,W,X,Y,Z,$){let J=W[X+0],Q=W[X+1],_=W[X+2],F=W[X+3],O=Y[Z+0],U=Y[Z+1],E=Y[Z+2],R=Y[Z+3];if($===0){q[H+0]=J,q[H+1]=Q,q[H+2]=_,q[H+3]=F;return}if($===1){q[H+0]=O,q[H+1]=U,q[H+2]=E,q[H+3]=R;return}if(F!==R||J!==O||Q!==U||_!==E){let K=1-$,B=J*O+Q*U+_*E+F*R,G=B>=0?1:-1,S=1-B*B;if(S>Number.EPSILON){let P=Math.sqrt(S),b=Math.atan2(P,B*G);K=Math.sin(K*b)/P,$=Math.sin($*b)/P}let V=$*G;if(J=J*K+O*V,Q=Q*K+U*V,_=_*K+E*V,F=F*K+R*V,K===1-$){let P=1/Math.sqrt(J*J+Q*Q+_*_+F*F);J*=P,Q*=P,_*=P,F*=P}}q[H]=J,q[H+1]=Q,q[H+2]=_,q[H+3]=F}static multiplyQuaternionsFlat(q,H,W,X,Y,Z){let $=W[X],J=W[X+1],Q=W[X+2],_=W[X+3],F=Y[Z],O=Y[Z+1],U=Y[Z+2],E=Y[Z+3];return q[H]=$*E+_*F+J*U-Q*O,q[H+1]=J*E+_*O+Q*F-$*U,q[H+2]=Q*E+_*U+$*O-J*F,q[H+3]=_*E-$*F-J*O-Q*U,q}get x(){return this._x}set x(q){this._x=q,this._onChangeCallback()}get y(){return this._y}set y(q){this._y=q,this._onChangeCallback()}get z(){return this._z}set z(q){this._z=q,this._onChangeCallback()}get w(){return this._w}set w(q){this._w=q,this._onChangeCallback()}set(q,H,W,X){return this._x=q,this._y=H,this._z=W,this._w=X,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(q){return this._x=q.x,this._y=q.y,this._z=q.z,this._w=q.w,this._onChangeCallback(),this}setFromEuler(q,H=!0){let{_x:W,_y:X,_z:Y,_order:Z}=q,$=Math.cos,J=Math.sin,Q=$(W/2),_=$(X/2),F=$(Y/2),O=J(W/2),U=J(X/2),E=J(Y/2);switch(Z){case"XYZ":this._x=O*_*F+Q*U*E,this._y=Q*U*F-O*_*E,this._z=Q*_*E+O*U*F,this._w=Q*_*F-O*U*E;break;case"YXZ":this._x=O*_*F+Q*U*E,this._y=Q*U*F-O*_*E,this._z=Q*_*E-O*U*F,this._w=Q*_*F+O*U*E;break;case"ZXY":this._x=O*_*F-Q*U*E,this._y=Q*U*F+O*_*E,this._z=Q*_*E+O*U*F,this._w=Q*_*F-O*U*E;break;case"ZYX":this._x=O*_*F-Q*U*E,this._y=Q*U*F+O*_*E,this._z=Q*_*E-O*U*F,this._w=Q*_*F+O*U*E;break;case"YZX":this._x=O*_*F+Q*U*E,this._y=Q*U*F+O*_*E,this._z=Q*_*E-O*U*F,this._w=Q*_*F-O*U*E;break;case"XZY":this._x=O*_*F-Q*U*E,this._y=Q*U*F-O*_*E,this._z=Q*_*E+O*U*F,this._w=Q*_*F+O*U*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Z)}if(H===!0)this._onChangeCallback();return this}setFromAxisAngle(q,H){let W=H/2,X=Math.sin(W);return this._x=q.x*X,this._y=q.y*X,this._z=q.z*X,this._w=Math.cos(W),this._onChangeCallback(),this}setFromRotationMatrix(q){let H=q.elements,W=H[0],X=H[4],Y=H[8],Z=H[1],$=H[5],J=H[9],Q=H[2],_=H[6],F=H[10],O=W+$+F;if(O>0){let U=0.5/Math.sqrt(O+1);this._w=0.25/U,this._x=(_-J)*U,this._y=(Y-Q)*U,this._z=(Z-X)*U}else if(W>$&&W>F){let U=2*Math.sqrt(1+W-$-F);this._w=(_-J)/U,this._x=0.25*U,this._y=(X+Z)/U,this._z=(Y+Q)/U}else if($>F){let U=2*Math.sqrt(1+$-W-F);this._w=(Y-Q)/U,this._x=(X+Z)/U,this._y=0.25*U,this._z=(J+_)/U}else{let U=2*Math.sqrt(1+F-W-$);this._w=(Z-X)/U,this._x=(Y+Q)/U,this._y=(J+_)/U,this._z=0.25*U}return this._onChangeCallback(),this}setFromUnitVectors(q,H){let W=q.dot(H)+1;if(W<0.00000001)if(W=0,Math.abs(q.x)>Math.abs(q.z))this._x=-q.y,this._y=q.x,this._z=0,this._w=W;else this._x=0,this._y=-q.z,this._z=q.y,this._w=W;else this._x=q.y*H.z-q.z*H.y,this._y=q.z*H.x-q.x*H.z,this._z=q.x*H.y-q.y*H.x,this._w=W;return this.normalize()}angleTo(q){return 2*Math.acos(Math.abs(gq(this.dot(q),-1,1)))}rotateTowards(q,H){let W=this.angleTo(q);if(W===0)return this;let X=Math.min(1,H/W);return this.slerp(q,X),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(q){return this._x*q._x+this._y*q._y+this._z*q._z+this._w*q._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let q=this.length();if(q===0)this._x=0,this._y=0,this._z=0,this._w=1;else q=1/q,this._x=this._x*q,this._y=this._y*q,this._z=this._z*q,this._w=this._w*q;return this._onChangeCallback(),this}multiply(q){return this.multiplyQuaternions(this,q)}premultiply(q){return this.multiplyQuaternions(q,this)}multiplyQuaternions(q,H){let{_x:W,_y:X,_z:Y,_w:Z}=q,$=H._x,J=H._y,Q=H._z,_=H._w;return this._x=W*_+Z*$+X*Q-Y*J,this._y=X*_+Z*J+Y*$-W*Q,this._z=Y*_+Z*Q+W*J-X*$,this._w=Z*_-W*$-X*J-Y*Q,this._onChangeCallback(),this}slerp(q,H){if(H===0)return this;if(H===1)return this.copy(q);let W=this._x,X=this._y,Y=this._z,Z=this._w,$=Z*q._w+W*q._x+X*q._y+Y*q._z;if($<0)this._w=-q._w,this._x=-q._x,this._y=-q._y,this._z=-q._z,$=-$;else this.copy(q);if($>=1)return this._w=Z,this._x=W,this._y=X,this._z=Y,this;let J=1-$*$;if(J<=Number.EPSILON){let U=1-H;return this._w=U*Z+H*this._w,this._x=U*W+H*this._x,this._y=U*X+H*this._y,this._z=U*Y+H*this._z,this.normalize(),this}let Q=Math.sqrt(J),_=Math.atan2(Q,$),F=Math.sin((1-H)*_)/Q,O=Math.sin(H*_)/Q;return this._w=Z*F+this._w*O,this._x=W*F+this._x*O,this._y=X*F+this._y*O,this._z=Y*F+this._z*O,this._onChangeCallback(),this}slerpQuaternions(q,H,W){return this.copy(q).slerp(H,W)}random(){let q=2*Math.PI*Math.random(),H=2*Math.PI*Math.random(),W=Math.random(),X=Math.sqrt(1-W),Y=Math.sqrt(W);return this.set(X*Math.sin(q),X*Math.cos(q),Y*Math.sin(H),Y*Math.cos(H))}equals(q){return q._x===this._x&&q._y===this._y&&q._z===this._z&&q._w===this._w}fromArray(q,H=0){return this._x=q[H],this._y=q[H+1],this._z=q[H+2],this._w=q[H+3],this._onChangeCallback(),this}toArray(q=[],H=0){return q[H]=this._x,q[H+1]=this._y,q[H+2]=this._z,q[H+3]=this._w,q}fromBufferAttribute(q,H){return this._x=q.getX(H),this._y=q.getY(H),this._z=q.getZ(H),this._w=q.getW(H),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(q){return this._onChangeCallback=q,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(q=0,H=0,W=0){k.prototype.isVector3=!0,this.x=q,this.y=H,this.z=W}set(q,H,W){if(W===void 0)W=this.z;return this.x=q,this.y=H,this.z=W,this}setScalar(q){return this.x=q,this.y=q,this.z=q,this}setX(q){return this.x=q,this}setY(q){return this.y=q,this}setZ(q){return this.z=q,this}setComponent(q,H){switch(q){case 0:this.x=H;break;case 1:this.y=H;break;case 2:this.z=H;break;default:throw new Error("index is out of range: "+q)}return this}getComponent(q){switch(q){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+q)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(q){return this.x=q.x,this.y=q.y,this.z=q.z,this}add(q){return this.x+=q.x,this.y+=q.y,this.z+=q.z,this}addScalar(q){return this.x+=q,this.y+=q,this.z+=q,this}addVectors(q,H){return this.x=q.x+H.x,this.y=q.y+H.y,this.z=q.z+H.z,this}addScaledVector(q,H){return this.x+=q.x*H,this.y+=q.y*H,this.z+=q.z*H,this}sub(q){return this.x-=q.x,this.y-=q.y,this.z-=q.z,this}subScalar(q){return this.x-=q,this.y-=q,this.z-=q,this}subVectors(q,H){return this.x=q.x-H.x,this.y=q.y-H.y,this.z=q.z-H.z,this}multiply(q){return this.x*=q.x,this.y*=q.y,this.z*=q.z,this}multiplyScalar(q){return this.x*=q,this.y*=q,this.z*=q,this}multiplyVectors(q,H){return this.x=q.x*H.x,this.y=q.y*H.y,this.z=q.z*H.z,this}applyEuler(q){return this.applyQuaternion(kZ.setFromEuler(q))}applyAxisAngle(q,H){return this.applyQuaternion(kZ.setFromAxisAngle(q,H))}applyMatrix3(q){let H=this.x,W=this.y,X=this.z,Y=q.elements;return this.x=Y[0]*H+Y[3]*W+Y[6]*X,this.y=Y[1]*H+Y[4]*W+Y[7]*X,this.z=Y[2]*H+Y[5]*W+Y[8]*X,this}applyNormalMatrix(q){return this.applyMatrix3(q).normalize()}applyMatrix4(q){let H=this.x,W=this.y,X=this.z,Y=q.elements,Z=1/(Y[3]*H+Y[7]*W+Y[11]*X+Y[15]);return this.x=(Y[0]*H+Y[4]*W+Y[8]*X+Y[12])*Z,this.y=(Y[1]*H+Y[5]*W+Y[9]*X+Y[13])*Z,this.z=(Y[2]*H+Y[6]*W+Y[10]*X+Y[14])*Z,this}applyQuaternion(q){let H=this.x,W=this.y,X=this.z,Y=q.x,Z=q.y,$=q.z,J=q.w,Q=2*(Z*X-$*W),_=2*($*H-Y*X),F=2*(Y*W-Z*H);return this.x=H+J*Q+Z*F-$*_,this.y=W+J*_+$*Q-Y*F,this.z=X+J*F+Y*_-Z*Q,this}project(q){return this.applyMatrix4(q.matrixWorldInverse).applyMatrix4(q.projectionMatrix)}unproject(q){return this.applyMatrix4(q.projectionMatrixInverse).applyMatrix4(q.matrixWorld)}transformDirection(q){let H=this.x,W=this.y,X=this.z,Y=q.elements;return this.x=Y[0]*H+Y[4]*W+Y[8]*X,this.y=Y[1]*H+Y[5]*W+Y[9]*X,this.z=Y[2]*H+Y[6]*W+Y[10]*X,this.normalize()}divide(q){return this.x/=q.x,this.y/=q.y,this.z/=q.z,this}divideScalar(q){return this.multiplyScalar(1/q)}min(q){return this.x=Math.min(this.x,q.x),this.y=Math.min(this.y,q.y),this.z=Math.min(this.z,q.z),this}max(q){return this.x=Math.max(this.x,q.x),this.y=Math.max(this.y,q.y),this.z=Math.max(this.z,q.z),this}clamp(q,H){return this.x=gq(this.x,q.x,H.x),this.y=gq(this.y,q.y,H.y),this.z=gq(this.z,q.z,H.z),this}clampScalar(q,H){return this.x=gq(this.x,q,H),this.y=gq(this.y,q,H),this.z=gq(this.z,q,H),this}clampLength(q,H){let W=this.length();return this.divideScalar(W||1).multiplyScalar(gq(W,q,H))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(q){return this.x*q.x+this.y*q.y+this.z*q.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(q){return this.normalize().multiplyScalar(q)}lerp(q,H){return this.x+=(q.x-this.x)*H,this.y+=(q.y-this.y)*H,this.z+=(q.z-this.z)*H,this}lerpVectors(q,H,W){return this.x=q.x+(H.x-q.x)*W,this.y=q.y+(H.y-q.y)*W,this.z=q.z+(H.z-q.z)*W,this}cross(q){return this.crossVectors(this,q)}crossVectors(q,H){let{x:W,y:X,z:Y}=q,Z=H.x,$=H.y,J=H.z;return this.x=X*J-Y*$,this.y=Y*Z-W*J,this.z=W*$-X*Z,this}projectOnVector(q){let H=q.lengthSq();if(H===0)return this.set(0,0,0);let W=q.dot(this)/H;return this.copy(q).multiplyScalar(W)}projectOnPlane(q){return RY.copy(this).projectOnVector(q),this.sub(RY)}reflect(q){return this.sub(RY.copy(q).multiplyScalar(2*this.dot(q)))}angleTo(q){let H=Math.sqrt(this.lengthSq()*q.lengthSq());if(H===0)return Math.PI/2;let W=this.dot(q)/H;return Math.acos(gq(W,-1,1))}distanceTo(q){return Math.sqrt(this.distanceToSquared(q))}distanceToSquared(q){let H=this.x-q.x,W=this.y-q.y,X=this.z-q.z;return H*H+W*W+X*X}manhattanDistanceTo(q){return Math.abs(this.x-q.x)+Math.abs(this.y-q.y)+Math.abs(this.z-q.z)}setFromSpherical(q){return this.setFromSphericalCoords(q.radius,q.phi,q.theta)}setFromSphericalCoords(q,H,W){let X=Math.sin(H)*q;return this.x=X*Math.sin(W),this.y=Math.cos(H)*q,this.z=X*Math.cos(W),this}setFromCylindrical(q){return this.setFromCylindricalCoords(q.radius,q.theta,q.y)}setFromCylindricalCoords(q,H,W){return this.x=q*Math.sin(H),this.y=W,this.z=q*Math.cos(H),this}setFromMatrixPosition(q){let H=q.elements;return this.x=H[12],this.y=H[13],this.z=H[14],this}setFromMatrixScale(q){let H=this.setFromMatrixColumn(q,0).length(),W=this.setFromMatrixColumn(q,1).length(),X=this.setFromMatrixColumn(q,2).length();return this.x=H,this.y=W,this.z=X,this}setFromMatrixColumn(q,H){return this.fromArray(q.elements,H*4)}setFromMatrix3Column(q,H){return this.fromArray(q.elements,H*3)}setFromEuler(q){return this.x=q._x,this.y=q._y,this.z=q._z,this}setFromColor(q){return this.x=q.r,this.y=q.g,this.z=q.b,this}equals(q){return q.x===this.x&&q.y===this.y&&q.z===this.z}fromArray(q,H=0){return this.x=q[H],this.y=q[H+1],this.z=q[H+2],this}toArray(q=[],H=0){return q[H]=this.x,q[H+1]=this.y,q[H+2]=this.z,q}fromBufferAttribute(q,H){return this.x=q.getX(H),this.y=q.getY(H),this.z=q.getZ(H),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let q=Math.random()*Math.PI*2,H=Math.random()*2-1,W=Math.sqrt(1-H*H);return this.x=W*Math.cos(q),this.y=H,this.z=W*Math.sin(q),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}let RY=new k,kZ=new kH;class hq{constructor(q,H,W,X,Y,Z,$,J,Q){if(hq.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],q!==void 0)this.set(q,H,W,X,Y,Z,$,J,Q)}set(q,H,W,X,Y,Z,$,J,Q){let _=this.elements;return _[0]=q,_[1]=X,_[2]=$,_[3]=H,_[4]=Y,_[5]=J,_[6]=W,_[7]=Z,_[8]=Q,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(q){let H=this.elements,W=q.elements;return H[0]=W[0],H[1]=W[1],H[2]=W[2],H[3]=W[3],H[4]=W[4],H[5]=W[5],H[6]=W[6],H[7]=W[7],H[8]=W[8],this}extractBasis(q,H,W){return q.setFromMatrix3Column(this,0),H.setFromMatrix3Column(this,1),W.setFromMatrix3Column(this,2),this}setFromMatrix4(q){let H=q.elements;return this.set(H[0],H[4],H[8],H[1],H[5],H[9],H[2],H[6],H[10]),this}multiply(q){return this.multiplyMatrices(this,q)}premultiply(q){return this.multiplyMatrices(q,this)}multiplyMatrices(q,H){let W=q.elements,X=H.elements,Y=this.elements,Z=W[0],$=W[3],J=W[6],Q=W[1],_=W[4],F=W[7],O=W[2],U=W[5],E=W[8],R=X[0],K=X[3],B=X[6],G=X[1],S=X[4],V=X[7],P=X[2],b=X[5],T=X[8];return Y[0]=Z*R+$*G+J*P,Y[3]=Z*K+$*S+J*b,Y[6]=Z*B+$*V+J*T,Y[1]=Q*R+_*G+F*P,Y[4]=Q*K+_*S+F*b,Y[7]=Q*B+_*V+F*T,Y[2]=O*R+U*G+E*P,Y[5]=O*K+U*S+E*b,Y[8]=O*B+U*V+E*T,this}multiplyScalar(q){let H=this.elements;return H[0]*=q,H[3]*=q,H[6]*=q,H[1]*=q,H[4]*=q,H[7]*=q,H[2]*=q,H[5]*=q,H[8]*=q,this}determinant(){let q=this.elements,H=q[0],W=q[1],X=q[2],Y=q[3],Z=q[4],$=q[5],J=q[6],Q=q[7],_=q[8];return H*Z*_-H*$*Q-W*Y*_+W*$*J+X*Y*Q-X*Z*J}invert(){let q=this.elements,H=q[0],W=q[1],X=q[2],Y=q[3],Z=q[4],$=q[5],J=q[6],Q=q[7],_=q[8],F=_*Z-$*Q,O=$*J-_*Y,U=Q*Y-Z*J,E=H*F+W*O+X*U;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/E;return q[0]=F*R,q[1]=(X*Q-_*W)*R,q[2]=($*W-X*Z)*R,q[3]=O*R,q[4]=(_*H-X*J)*R,q[5]=(X*Y-$*H)*R,q[6]=U*R,q[7]=(W*J-Q*H)*R,q[8]=(Z*H-W*Y)*R,this}transpose(){let q,H=this.elements;return q=H[1],H[1]=H[3],H[3]=q,q=H[2],H[2]=H[6],H[6]=q,q=H[5],H[5]=H[7],H[7]=q,this}getNormalMatrix(q){return this.setFromMatrix4(q).invert().transpose()}transposeIntoArray(q){let H=this.elements;return q[0]=H[0],q[1]=H[3],q[2]=H[6],q[3]=H[1],q[4]=H[4],q[5]=H[7],q[6]=H[2],q[7]=H[5],q[8]=H[8],this}setUvTransform(q,H,W,X,Y,Z,$){let J=Math.cos(Y),Q=Math.sin(Y);return this.set(W*J,W*Q,-W*(J*Z+Q*$)+Z+q,-X*Q,X*J,-X*(-Q*Z+J*$)+$+H,0,0,1),this}scale(q,H){return this.premultiply(KY.makeScale(q,H)),this}rotate(q){return this.premultiply(KY.makeRotation(-q)),this}translate(q,H){return this.premultiply(KY.makeTranslation(q,H)),this}makeTranslation(q,H){if(q.isVector2)this.set(1,0,q.x,0,1,q.y,0,0,1);else this.set(1,0,q,0,1,H,0,0,1);return this}makeRotation(q){let H=Math.cos(q),W=Math.sin(q);return this.set(H,-W,0,W,H,0,0,0,1),this}makeScale(q,H){return this.set(q,0,0,0,H,0,0,0,1),this}equals(q){let H=this.elements,W=q.elements;for(let X=0;X<9;X++)if(H[X]!==W[X])return!1;return!0}fromArray(q,H=0){for(let W=0;W<9;W++)this.elements[W]=q[W+H];return this}toArray(q=[],H=0){let W=this.elements;return q[H]=W[0],q[H+1]=W[1],q[H+2]=W[2],q[H+3]=W[3],q[H+4]=W[4],q[H+5]=W[5],q[H+6]=W[6],q[H+7]=W[7],q[H+8]=W[8],q}clone(){return new this.constructor().fromArray(this.elements)}}let KY=new hq;function vZ(q){for(let H=q.length-1;H>=0;--H)if(q[H]>=65535)return!0;return!1}function OX(q){return document.createElementNS("http://www.w3.org/1999/xhtml",q)}function k4(){let q=OX("canvas");return q.style.display="block",q}let IZ={};function xW(q){if(q in IZ)return;IZ[q]=!0,console.warn(q)}function v4(q,H,W){return new Promise(function(X,Y){function Z(){switch(q.clientWaitSync(H,q.SYNC_FLUSH_COMMANDS_BIT,0)){case q.WAIT_FAILED:Y();break;case q.TIMEOUT_EXPIRED:setTimeout(Z,W);break;default:X()}}setTimeout(Z,W)})}let hZ=new hq().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),bZ=new hq().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function I4(){let q={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Y,Z,$){if(this.enabled===!1||Z===$||!Z||!$)return Y;if(this.spaces[Z].transfer==="srgb")Y.r=rH(Y.r),Y.g=rH(Y.g),Y.b=rH(Y.b);if(this.spaces[Z].primaries!==this.spaces[$].primaries)Y.applyMatrix3(this.spaces[Z].toXYZ),Y.applyMatrix3(this.spaces[$].fromXYZ);if(this.spaces[$].transfer==="srgb")Y.r=lW(Y.r),Y.g=lW(Y.g),Y.b=lW(Y.b);return Y},workingToColorSpace:function(Y,Z){return this.convert(Y,this.workingColorSpace,Z)},colorSpaceToWorking:function(Y,Z){return this.convert(Y,Z,this.workingColorSpace)},getPrimaries:function(Y){return this.spaces[Y].primaries},getTransfer:function(Y){if(Y==="")return"linear";return this.spaces[Y].transfer},getLuminanceCoefficients:function(Y,Z=this.workingColorSpace){return Y.fromArray(this.spaces[Z].luminanceCoefficients)},define:function(Y){Object.assign(this.spaces,Y)},_getMatrix:function(Y,Z,$){return Y.copy(this.spaces[Z].toXYZ).multiply(this.spaces[$].fromXYZ)},_getDrawingBufferColorSpace:function(Y){return this.spaces[Y].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Y=this.workingColorSpace){return this.spaces[Y].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Y,Z){return xW("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),q.workingToColorSpace(Y,Z)},toWorkingColorSpace:function(Y,Z){return xW("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),q.colorSpaceToWorking(Y,Z)}},H=[0.64,0.33,0.3,0.6,0.15,0.06],W=[0.2126,0.7152,0.0722],X=[0.3127,0.329];return q.define({["srgb-linear"]:{primaries:H,whitePoint:X,transfer:"linear",toXYZ:hZ,fromXYZ:bZ,luminanceCoefficients:W,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:H,whitePoint:X,transfer:"srgb",toXYZ:hZ,fromXYZ:bZ,luminanceCoefficients:W,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),q}let fq=I4();function rH(q){return q<0.04045?q*0.0773993808:Math.pow(q*0.9478672986+0.0521327014,2.4)}function lW(q){return q<0.0031308?q*12.92:1.055*Math.pow(q,0.41666)-0.055}let uW;class DZ{static getDataURL(q,H="image/png"){if(/^data:/i.test(q.src))return q.src;if(typeof HTMLCanvasElement==="undefined")return q.src;let W;if(q instanceof HTMLCanvasElement)W=q;else{if(uW===void 0)uW=OX("canvas");uW.width=q.width,uW.height=q.height;let X=uW.getContext("2d");if(q instanceof ImageData)X.putImageData(q,0,0);else X.drawImage(q,0,0,q.width,q.height);W=uW}return W.toDataURL(H)}static sRGBToLinear(q){if(typeof HTMLImageElement!=="undefined"&&q instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&q instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&q instanceof ImageBitmap){let H=OX("canvas");H.width=q.width,H.height=q.height;let W=H.getContext("2d");W.drawImage(q,0,0,q.width,q.height);let X=W.getImageData(0,0,q.width,q.height),Y=X.data;for(let Z=0;Z<Y.length;Z++)Y[Z]=rH(Y[Z]/255)*255;return W.putImageData(X,0,0),H}else if(q.data){let H=q.data.slice(0);for(let W=0;W<H.length;W++)if(H instanceof Uint8Array||H instanceof Uint8ClampedArray)H[W]=Math.floor(rH(H[W]/255)*255);else H[W]=rH(H[W]);return{data:H,width:q.width,height:q.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),q}}let h4=0;class jX{constructor(q=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h4++}),this.uuid=xH(),this.data=q,this.dataReady=!0,this.version=0}getSize(q){let H=this.data;if(H instanceof HTMLVideoElement)q.set(H.videoWidth,H.videoHeight,0);else if(H instanceof VideoFrame)q.set(H.displayHeight,H.displayWidth,0);else if(H!==null)q.set(H.width,H.height,H.depth||0);else q.set(0,0,0);return q}set needsUpdate(q){if(q===!0)this.version++}toJSON(q){let H=q===void 0||typeof q==="string";if(!H&&q.images[this.uuid]!==void 0)return q.images[this.uuid];let W={uuid:this.uuid,url:""},X=this.data;if(X!==null){let Y;if(Array.isArray(X)){Y=[];for(let Z=0,$=X.length;Z<$;Z++)if(X[Z].isDataTexture)Y.push(zY(X[Z].image));else Y.push(zY(X[Z]))}else Y=zY(X);W.url=Y}if(!H)q.images[this.uuid]=W;return W}}function zY(q){if(typeof HTMLImageElement!=="undefined"&&q instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&q instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&q instanceof ImageBitmap)return DZ.getDataURL(q);else if(q.data)return{data:Array.from(q.data),width:q.width,height:q.height,type:q.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}let b4=0,VY=new k;class BH extends VW{constructor(q=BH.DEFAULT_IMAGE,H=BH.DEFAULT_MAPPING,W=1001,X=1001,Y=1006,Z=1008,$=1023,J=1009,Q=BH.DEFAULT_ANISOTROPY,_=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:b4++}),this.uuid=xH(),this.name="",this.source=new jX(q),this.mipmaps=[],this.mapping=H,this.channel=0,this.wrapS=W,this.wrapT=X,this.magFilter=Y,this.minFilter=Z,this.anisotropy=Q,this.format=$,this.internalFormat=null,this.type=J,this.offset=new uq(0,0),this.repeat=new uq(1,1),this.center=new uq(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hq,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=q&&q.depth&&q.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(VY).x}get height(){return this.source.getSize(VY).y}get depth(){return this.source.getSize(VY).z}get image(){return this.source.data}set image(q=null){this.source.data=q}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(q,H){this.updateRanges.push({start:q,count:H})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(q){return this.name=q.name,this.source=q.source,this.mipmaps=q.mipmaps.slice(0),this.mapping=q.mapping,this.channel=q.channel,this.wrapS=q.wrapS,this.wrapT=q.wrapT,this.magFilter=q.magFilter,this.minFilter=q.minFilter,this.anisotropy=q.anisotropy,this.format=q.format,this.internalFormat=q.internalFormat,this.type=q.type,this.offset.copy(q.offset),this.repeat.copy(q.repeat),this.center.copy(q.center),this.rotation=q.rotation,this.matrixAutoUpdate=q.matrixAutoUpdate,this.matrix.copy(q.matrix),this.generateMipmaps=q.generateMipmaps,this.premultiplyAlpha=q.premultiplyAlpha,this.flipY=q.flipY,this.unpackAlignment=q.unpackAlignment,this.colorSpace=q.colorSpace,this.renderTarget=q.renderTarget,this.isRenderTargetTexture=q.isRenderTargetTexture,this.isArrayTexture=q.isArrayTexture,this.userData=JSON.parse(JSON.stringify(q.userData)),this.needsUpdate=!0,this}setValues(q){for(let H in q){let W=q[H];if(W===void 0){console.warn(`THREE.Texture.setValues(): parameter '${H}' has value of undefined.`);continue}let X=this[H];if(X===void 0){console.warn(`THREE.Texture.setValues(): property '${H}' does not exist.`);continue}if(X&&W&&(X.isVector2&&W.isVector2))X.copy(W);else if(X&&W&&(X.isVector3&&W.isVector3))X.copy(W);else if(X&&W&&(X.isMatrix3&&W.isMatrix3))X.copy(W);else this[H]=W}}toJSON(q){let H=q===void 0||typeof q==="string";if(!H&&q.textures[this.uuid]!==void 0)return q.textures[this.uuid];let W={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(q).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)W.userData=this.userData;if(!H)q.textures[this.uuid]=W;return W}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(q){if(this.mapping!==300)return q;if(q.applyMatrix3(this.matrix),q.x<0||q.x>1)switch(this.wrapS){case 1000:q.x=q.x-Math.floor(q.x);break;case 1001:q.x=q.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(q.x)%2)===1)q.x=Math.ceil(q.x)-q.x;else q.x=q.x-Math.floor(q.x);break}if(q.y<0||q.y>1)switch(this.wrapT){case 1000:q.y=q.y-Math.floor(q.y);break;case 1001:q.y=q.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(q.y)%2)===1)q.y=Math.ceil(q.y)-q.y;else q.y=q.y-Math.floor(q.y);break}if(this.flipY)q.y=1-q.y;return q}set needsUpdate(q){if(q===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(q){if(q===!0)this.pmremVersion++}}BH.DEFAULT_IMAGE=null,BH.DEFAULT_MAPPING=300,BH.DEFAULT_ANISOTROPY=1;class oq{constructor(q=0,H=0,W=0,X=1){oq.prototype.isVector4=!0,this.x=q,this.y=H,this.z=W,this.w=X}get width(){return this.z}set width(q){this.z=q}get height(){return this.w}set height(q){this.w=q}set(q,H,W,X){return this.x=q,this.y=H,this.z=W,this.w=X,this}setScalar(q){return this.x=q,this.y=q,this.z=q,this.w=q,this}setX(q){return this.x=q,this}setY(q){return this.y=q,this}setZ(q){return this.z=q,this}setW(q){return this.w=q,this}setComponent(q,H){switch(q){case 0:this.x=H;break;case 1:this.y=H;break;case 2:this.z=H;break;case 3:this.w=H;break;default:throw new Error("index is out of range: "+q)}return this}getComponent(q){switch(q){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+q)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(q){return this.x=q.x,this.y=q.y,this.z=q.z,this.w=q.w!==void 0?q.w:1,this}add(q){return this.x+=q.x,this.y+=q.y,this.z+=q.z,this.w+=q.w,this}addScalar(q){return this.x+=q,this.y+=q,this.z+=q,this.w+=q,this}addVectors(q,H){return this.x=q.x+H.x,this.y=q.y+H.y,this.z=q.z+H.z,this.w=q.w+H.w,this}addScaledVector(q,H){return this.x+=q.x*H,this.y+=q.y*H,this.z+=q.z*H,this.w+=q.w*H,this}sub(q){return this.x-=q.x,this.y-=q.y,this.z-=q.z,this.w-=q.w,this}subScalar(q){return this.x-=q,this.y-=q,this.z-=q,this.w-=q,this}subVectors(q,H){return this.x=q.x-H.x,this.y=q.y-H.y,this.z=q.z-H.z,this.w=q.w-H.w,this}multiply(q){return this.x*=q.x,this.y*=q.y,this.z*=q.z,this.w*=q.w,this}multiplyScalar(q){return this.x*=q,this.y*=q,this.z*=q,this.w*=q,this}applyMatrix4(q){let H=this.x,W=this.y,X=this.z,Y=this.w,Z=q.elements;return this.x=Z[0]*H+Z[4]*W+Z[8]*X+Z[12]*Y,this.y=Z[1]*H+Z[5]*W+Z[9]*X+Z[13]*Y,this.z=Z[2]*H+Z[6]*W+Z[10]*X+Z[14]*Y,this.w=Z[3]*H+Z[7]*W+Z[11]*X+Z[15]*Y,this}divide(q){return this.x/=q.x,this.y/=q.y,this.z/=q.z,this.w/=q.w,this}divideScalar(q){return this.multiplyScalar(1/q)}setAxisAngleFromQuaternion(q){this.w=2*Math.acos(q.w);let H=Math.sqrt(1-q.w*q.w);if(H<0.0001)this.x=1,this.y=0,this.z=0;else this.x=q.x/H,this.y=q.y/H,this.z=q.z/H;return this}setAxisAngleFromRotationMatrix(q){let H,W,X,Y,Z=0.01,$=0.1,J=q.elements,Q=J[0],_=J[4],F=J[8],O=J[1],U=J[5],E=J[9],R=J[2],K=J[6],B=J[10];if(Math.abs(_-O)<0.01&&Math.abs(F-R)<0.01&&Math.abs(E-K)<0.01){if(Math.abs(_+O)<0.1&&Math.abs(F+R)<0.1&&Math.abs(E+K)<0.1&&Math.abs(Q+U+B-3)<0.1)return this.set(1,0,0,0),this;H=Math.PI;let S=(Q+1)/2,V=(U+1)/2,P=(B+1)/2,b=(_+O)/4,T=(F+R)/4,j=(E+K)/4;if(S>V&&S>P)if(S<0.01)W=0,X=0.707106781,Y=0.707106781;else W=Math.sqrt(S),X=b/W,Y=T/W;else if(V>P)if(V<0.01)W=0.707106781,X=0,Y=0.707106781;else X=Math.sqrt(V),W=b/X,Y=j/X;else if(P<0.01)W=0.707106781,X=0.707106781,Y=0;else Y=Math.sqrt(P),W=T/Y,X=j/Y;return this.set(W,X,Y,H),this}let G=Math.sqrt((K-E)*(K-E)+(F-R)*(F-R)+(O-_)*(O-_));if(Math.abs(G)<0.001)G=1;return this.x=(K-E)/G,this.y=(F-R)/G,this.z=(O-_)/G,this.w=Math.acos((Q+U+B-1)/2),this}setFromMatrixPosition(q){let H=q.elements;return this.x=H[12],this.y=H[13],this.z=H[14],this.w=H[15],this}min(q){return this.x=Math.min(this.x,q.x),this.y=Math.min(this.y,q.y),this.z=Math.min(this.z,q.z),this.w=Math.min(this.w,q.w),this}max(q){return this.x=Math.max(this.x,q.x),this.y=Math.max(this.y,q.y),this.z=Math.max(this.z,q.z),this.w=Math.max(this.w,q.w),this}clamp(q,H){return this.x=gq(this.x,q.x,H.x),this.y=gq(this.y,q.y,H.y),this.z=gq(this.z,q.z,H.z),this.w=gq(this.w,q.w,H.w),this}clampScalar(q,H){return this.x=gq(this.x,q,H),this.y=gq(this.y,q,H),this.z=gq(this.z,q,H),this.w=gq(this.w,q,H),this}clampLength(q,H){let W=this.length();return this.divideScalar(W||1).multiplyScalar(gq(W,q,H))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(q){return this.x*q.x+this.y*q.y+this.z*q.z+this.w*q.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(q){return this.normalize().multiplyScalar(q)}lerp(q,H){return this.x+=(q.x-this.x)*H,this.y+=(q.y-this.y)*H,this.z+=(q.z-this.z)*H,this.w+=(q.w-this.w)*H,this}lerpVectors(q,H,W){return this.x=q.x+(H.x-q.x)*W,this.y=q.y+(H.y-q.y)*W,this.z=q.z+(H.z-q.z)*W,this.w=q.w+(H.w-q.w)*W,this}equals(q){return q.x===this.x&&q.y===this.y&&q.z===this.z&&q.w===this.w}fromArray(q,H=0){return this.x=q[H],this.y=q[H+1],this.z=q[H+2],this.w=q[H+3],this}toArray(q=[],H=0){return q[H]=this.x,q[H+1]=this.y,q[H+2]=this.z,q[H+3]=this.w,q}fromBufferAttribute(q,H){return this.x=q.getX(H),this.y=q.getY(H),this.z=q.getZ(H),this.w=q.getW(H),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yZ extends VW{constructor(q=1,H=1,W={}){super();W=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},W),this.isRenderTarget=!0,this.width=q,this.height=H,this.depth=W.depth,this.scissor=new oq(0,0,q,H),this.scissorTest=!1,this.viewport=new oq(0,0,q,H);let X={width:q,height:H,depth:W.depth},Y=new BH(X);this.textures=[];let Z=W.count;for(let $=0;$<Z;$++)this.textures[$]=Y.clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;this._setTextureOptions(W),this.depthBuffer=W.depthBuffer,this.stencilBuffer=W.stencilBuffer,this.resolveDepthBuffer=W.resolveDepthBuffer,this.resolveStencilBuffer=W.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=W.depthTexture,this.samples=W.samples,this.multiview=W.multiview}_setTextureOptions(q={}){let H={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(q.mapping!==void 0)H.mapping=q.mapping;if(q.wrapS!==void 0)H.wrapS=q.wrapS;if(q.wrapT!==void 0)H.wrapT=q.wrapT;if(q.wrapR!==void 0)H.wrapR=q.wrapR;if(q.magFilter!==void 0)H.magFilter=q.magFilter;if(q.minFilter!==void 0)H.minFilter=q.minFilter;if(q.format!==void 0)H.format=q.format;if(q.type!==void 0)H.type=q.type;if(q.anisotropy!==void 0)H.anisotropy=q.anisotropy;if(q.colorSpace!==void 0)H.colorSpace=q.colorSpace;if(q.flipY!==void 0)H.flipY=q.flipY;if(q.generateMipmaps!==void 0)H.generateMipmaps=q.generateMipmaps;if(q.internalFormat!==void 0)H.internalFormat=q.internalFormat;for(let W=0;W<this.textures.length;W++)this.textures[W].setValues(H)}get texture(){return this.textures[0]}set texture(q){this.textures[0]=q}set depthTexture(q){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(q!==null)q.renderTarget=this;this._depthTexture=q}get depthTexture(){return this._depthTexture}setSize(q,H,W=1){if(this.width!==q||this.height!==H||this.depth!==W){this.width=q,this.height=H,this.depth=W;for(let X=0,Y=this.textures.length;X<Y;X++)this.textures[X].image.width=q,this.textures[X].image.height=H,this.textures[X].image.depth=W,this.textures[X].isArrayTexture=this.textures[X].image.depth>1;this.dispose()}this.viewport.set(0,0,q,H),this.scissor.set(0,0,q,H)}clone(){return new this.constructor().copy(this)}copy(q){this.width=q.width,this.height=q.height,this.depth=q.depth,this.scissor.copy(q.scissor),this.scissorTest=q.scissorTest,this.viewport.copy(q.viewport),this.textures.length=0;for(let H=0,W=q.textures.length;H<W;H++){this.textures[H]=q.textures[H].clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;let X=Object.assign({},q.textures[H].image);this.textures[H].source=new jX(X)}if(this.depthBuffer=q.depthBuffer,this.stencilBuffer=q.stencilBuffer,this.resolveDepthBuffer=q.resolveDepthBuffer,this.resolveStencilBuffer=q.resolveStencilBuffer,q.depthTexture!==null)this.depthTexture=q.depthTexture.clone();return this.samples=q.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _W extends yZ{constructor(q=1,H=1,W={}){super(q,H,W);this.isWebGLRenderTarget=!0}}class CY extends BH{constructor(q=null,H=1,W=1,X=1){super(null);this.isDataArrayTexture=!0,this.image={data:q,width:H,height:W,depth:X},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(q){this.layerUpdates.add(q)}clearLayerUpdates(){this.layerUpdates.clear()}}class gZ extends BH{constructor(q=null,H=1,W=1,X=1){super(null);this.isData3DTexture=!0,this.image={data:q,width:H,height:W,depth:X},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uH{constructor(q=new k(1/0,1/0,1/0),H=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=q,this.max=H}set(q,H){return this.min.copy(q),this.max.copy(H),this}setFromArray(q){this.makeEmpty();for(let H=0,W=q.length;H<W;H+=3)this.expandByPoint(fH.fromArray(q,H));return this}setFromBufferAttribute(q){this.makeEmpty();for(let H=0,W=q.count;H<W;H++)this.expandByPoint(fH.fromBufferAttribute(q,H));return this}setFromPoints(q){this.makeEmpty();for(let H=0,W=q.length;H<W;H++)this.expandByPoint(q[H]);return this}setFromCenterAndSize(q,H){let W=fH.copy(H).multiplyScalar(0.5);return this.min.copy(q).sub(W),this.max.copy(q).add(W),this}setFromObject(q,H=!1){return this.makeEmpty(),this.expandByObject(q,H)}clone(){return new this.constructor().copy(this)}copy(q){return this.min.copy(q.min),this.max.copy(q.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(q){return this.isEmpty()?q.set(0,0,0):q.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(q){return this.isEmpty()?q.set(0,0,0):q.subVectors(this.max,this.min)}expandByPoint(q){return this.min.min(q),this.max.max(q),this}expandByVector(q){return this.min.sub(q),this.max.add(q),this}expandByScalar(q){return this.min.addScalar(-q),this.max.addScalar(q),this}expandByObject(q,H=!1){q.updateWorldMatrix(!1,!1);let W=q.geometry;if(W!==void 0){let Y=W.getAttribute("position");if(H===!0&&Y!==void 0&&q.isInstancedMesh!==!0)for(let Z=0,$=Y.count;Z<$;Z++){if(q.isMesh===!0)q.getVertexPosition(Z,fH);else fH.fromBufferAttribute(Y,Z);fH.applyMatrix4(q.matrixWorld),this.expandByPoint(fH)}else{if(q.boundingBox!==void 0){if(q.boundingBox===null)q.computeBoundingBox();kX.copy(q.boundingBox)}else{if(W.boundingBox===null)W.computeBoundingBox();kX.copy(W.boundingBox)}kX.applyMatrix4(q.matrixWorld),this.union(kX)}}let X=q.children;for(let Y=0,Z=X.length;Y<Z;Y++)this.expandByObject(X[Y],H);return this}containsPoint(q){return q.x>=this.min.x&&q.x<=this.max.x&&q.y>=this.min.y&&q.y<=this.max.y&&q.z>=this.min.z&&q.z<=this.max.z}containsBox(q){return this.min.x<=q.min.x&&q.max.x<=this.max.x&&this.min.y<=q.min.y&&q.max.y<=this.max.y&&this.min.z<=q.min.z&&q.max.z<=this.max.z}getParameter(q,H){return H.set((q.x-this.min.x)/(this.max.x-this.min.x),(q.y-this.min.y)/(this.max.y-this.min.y),(q.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(q){return q.max.x>=this.min.x&&q.min.x<=this.max.x&&q.max.y>=this.min.y&&q.min.y<=this.max.y&&q.max.z>=this.min.z&&q.min.z<=this.max.z}intersectsSphere(q){return this.clampPoint(q.center,fH),fH.distanceToSquared(q.center)<=q.radius*q.radius}intersectsPlane(q){let H,W;if(q.normal.x>0)H=q.normal.x*this.min.x,W=q.normal.x*this.max.x;else H=q.normal.x*this.max.x,W=q.normal.x*this.min.x;if(q.normal.y>0)H+=q.normal.y*this.min.y,W+=q.normal.y*this.max.y;else H+=q.normal.y*this.max.y,W+=q.normal.y*this.min.y;if(q.normal.z>0)H+=q.normal.z*this.min.z,W+=q.normal.z*this.max.z;else H+=q.normal.z*this.max.z,W+=q.normal.z*this.min.z;return H<=-q.constant&&W>=-q.constant}intersectsTriangle(q){if(this.isEmpty())return!1;this.getCenter(UX),vX.subVectors(this.max,UX),fW.subVectors(q.a,UX),pW.subVectors(q.b,UX),mW.subVectors(q.c,UX),FW.subVectors(pW,fW),OW.subVectors(mW,pW),CW.subVectors(fW,mW);let H=[0,-FW.z,FW.y,0,-OW.z,OW.y,0,-CW.z,CW.y,FW.z,0,-FW.x,OW.z,0,-OW.x,CW.z,0,-CW.x,-FW.y,FW.x,0,-OW.y,OW.x,0,-CW.y,CW.x,0];if(!NY(H,fW,pW,mW,vX))return!1;if(H=[1,0,0,0,1,0,0,0,1],!NY(H,fW,pW,mW,vX))return!1;return IX.crossVectors(FW,OW),H=[IX.x,IX.y,IX.z],NY(H,fW,pW,mW,vX)}clampPoint(q,H){return H.copy(q).clamp(this.min,this.max)}distanceToPoint(q){return this.clampPoint(q,fH).distanceTo(q)}getBoundingSphere(q){if(this.isEmpty())q.makeEmpty();else this.getCenter(q.center),q.radius=this.getSize(fH).length()*0.5;return q}intersect(q){if(this.min.max(q.min),this.max.min(q.max),this.isEmpty())this.makeEmpty();return this}union(q){return this.min.min(q.min),this.max.max(q.max),this}applyMatrix4(q){if(this.isEmpty())return this;return eH[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(q),eH[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(q),eH[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(q),eH[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(q),eH[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(q),eH[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(q),eH[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(q),eH[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(q),this.setFromPoints(eH),this}translate(q){return this.min.add(q),this.max.add(q),this}equals(q){return q.min.equals(this.min)&&q.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(q){return this.min.fromArray(q.min),this.max.fromArray(q.max),this}}let eH=[new k,new k,new k,new k,new k,new k,new k,new k],fH=new k,kX=new uH,fW=new k,pW=new k,mW=new k,FW=new k,OW=new k,CW=new k,UX=new k,vX=new k,IX=new k,NW=new k;function NY(q,H,W,X,Y){for(let Z=0,$=q.length-3;Z<=$;Z+=3){NW.fromArray(q,Z);let J=Y.x*Math.abs(NW.x)+Y.y*Math.abs(NW.y)+Y.z*Math.abs(NW.z),Q=H.dot(NW),_=W.dot(NW),F=X.dot(NW);if(Math.max(-Math.max(Q,_,F),Math.min(Q,_,F))>J)return!1}return!0}let D4=new uH,BX=new k,MY=new k;class pH{constructor(q=new k,H=-1){this.isSphere=!0,this.center=q,this.radius=H}set(q,H){return this.center.copy(q),this.radius=H,this}setFromPoints(q,H){let W=this.center;if(H!==void 0)W.copy(H);else D4.setFromPoints(q).getCenter(W);let X=0;for(let Y=0,Z=q.length;Y<Z;Y++)X=Math.max(X,W.distanceToSquared(q[Y]));return this.radius=Math.sqrt(X),this}copy(q){return this.center.copy(q.center),this.radius=q.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(q){return q.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(q){return q.distanceTo(this.center)-this.radius}intersectsSphere(q){let H=this.radius+q.radius;return q.center.distanceToSquared(this.center)<=H*H}intersectsBox(q){return q.intersectsSphere(this)}intersectsPlane(q){return Math.abs(q.distanceToPoint(this.center))<=this.radius}clampPoint(q,H){let W=this.center.distanceToSquared(q);if(H.copy(q),W>this.radius*this.radius)H.sub(this.center).normalize(),H.multiplyScalar(this.radius).add(this.center);return H}getBoundingBox(q){if(this.isEmpty())return q.makeEmpty(),q;return q.set(this.center,this.center),q.expandByScalar(this.radius),q}applyMatrix4(q){return this.center.applyMatrix4(q),this.radius=this.radius*q.getMaxScaleOnAxis(),this}translate(q){return this.center.add(q),this}expandByPoint(q){if(this.isEmpty())return this.center.copy(q),this.radius=0,this;BX.subVectors(q,this.center);let H=BX.lengthSq();if(H>this.radius*this.radius){let W=Math.sqrt(H),X=(W-this.radius)*0.5;this.center.addScaledVector(BX,X/W),this.radius+=X}return this}union(q){if(q.isEmpty())return this;if(this.isEmpty())return this.copy(q),this;if(this.center.equals(q.center)===!0)this.radius=Math.max(this.radius,q.radius);else MY.subVectors(q.center,this.center).setLength(q.radius),this.expandByPoint(BX.copy(q.center).add(MY)),this.expandByPoint(BX.copy(q.center).sub(MY));return this}equals(q){return q.center.equals(this.center)&&q.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(q){return this.radius=q.radius,this.center.fromArray(q.center),this}}let qW=new k,SY=new k,hX=new k,UW=new k,PY=new k,bX=new k,TY=new k;class EX{constructor(q=new k,H=new k(0,0,-1)){this.origin=q,this.direction=H}set(q,H){return this.origin.copy(q),this.direction.copy(H),this}copy(q){return this.origin.copy(q.origin),this.direction.copy(q.direction),this}at(q,H){return H.copy(this.origin).addScaledVector(this.direction,q)}lookAt(q){return this.direction.copy(q).sub(this.origin).normalize(),this}recast(q){return this.origin.copy(this.at(q,qW)),this}closestPointToPoint(q,H){H.subVectors(q,this.origin);let W=H.dot(this.direction);if(W<0)return H.copy(this.origin);return H.copy(this.origin).addScaledVector(this.direction,W)}distanceToPoint(q){return Math.sqrt(this.distanceSqToPoint(q))}distanceSqToPoint(q){let H=qW.subVectors(q,this.origin).dot(this.direction);if(H<0)return this.origin.distanceToSquared(q);return qW.copy(this.origin).addScaledVector(this.direction,H),qW.distanceToSquared(q)}distanceSqToSegment(q,H,W,X){SY.copy(q).add(H).multiplyScalar(0.5),hX.copy(H).sub(q).normalize(),UW.copy(this.origin).sub(SY);let Y=q.distanceTo(H)*0.5,Z=-this.direction.dot(hX),$=UW.dot(this.direction),J=-UW.dot(hX),Q=UW.lengthSq(),_=Math.abs(1-Z*Z),F,O,U,E;if(_>0)if(F=Z*J-$,O=Z*$-J,E=Y*_,F>=0)if(O>=-E)if(O<=E){let R=1/_;F*=R,O*=R,U=F*(F+Z*O+2*$)+O*(Z*F+O+2*J)+Q}else O=Y,F=Math.max(0,-(Z*O+$)),U=-F*F+O*(O+2*J)+Q;else O=-Y,F=Math.max(0,-(Z*O+$)),U=-F*F+O*(O+2*J)+Q;else if(O<=-E)F=Math.max(0,-(-Z*Y+$)),O=F>0?-Y:Math.min(Math.max(-Y,-J),Y),U=-F*F+O*(O+2*J)+Q;else if(O<=E)F=0,O=Math.min(Math.max(-Y,-J),Y),U=O*(O+2*J)+Q;else F=Math.max(0,-(Z*Y+$)),O=F>0?Y:Math.min(Math.max(-Y,-J),Y),U=-F*F+O*(O+2*J)+Q;else O=Z>0?-Y:Y,F=Math.max(0,-(Z*O+$)),U=-F*F+O*(O+2*J)+Q;if(W)W.copy(this.origin).addScaledVector(this.direction,F);if(X)X.copy(SY).addScaledVector(hX,O);return U}intersectSphere(q,H){qW.subVectors(q.center,this.origin);let W=qW.dot(this.direction),X=qW.dot(qW)-W*W,Y=q.radius*q.radius;if(X>Y)return null;let Z=Math.sqrt(Y-X),$=W-Z,J=W+Z;if(J<0)return null;if($<0)return this.at(J,H);return this.at($,H)}intersectsSphere(q){if(q.radius<0)return!1;return this.distanceSqToPoint(q.center)<=q.radius*q.radius}distanceToPlane(q){let H=q.normal.dot(this.direction);if(H===0){if(q.distanceToPoint(this.origin)===0)return 0;return null}let W=-(this.origin.dot(q.normal)+q.constant)/H;return W>=0?W:null}intersectPlane(q,H){let W=this.distanceToPlane(q);if(W===null)return null;return this.at(W,H)}intersectsPlane(q){let H=q.distanceToPoint(this.origin);if(H===0)return!0;if(q.normal.dot(this.direction)*H<0)return!0;return!1}intersectBox(q,H){let W,X,Y,Z,$,J,Q=1/this.direction.x,_=1/this.direction.y,F=1/this.direction.z,O=this.origin;if(Q>=0)W=(q.min.x-O.x)*Q,X=(q.max.x-O.x)*Q;else W=(q.max.x-O.x)*Q,X=(q.min.x-O.x)*Q;if(_>=0)Y=(q.min.y-O.y)*_,Z=(q.max.y-O.y)*_;else Y=(q.max.y-O.y)*_,Z=(q.min.y-O.y)*_;if(W>Z||Y>X)return null;if(Y>W||isNaN(W))W=Y;if(Z<X||isNaN(X))X=Z;if(F>=0)$=(q.min.z-O.z)*F,J=(q.max.z-O.z)*F;else $=(q.max.z-O.z)*F,J=(q.min.z-O.z)*F;if(W>J||$>X)return null;if($>W||W!==W)W=$;if(J<X||X!==X)X=J;if(X<0)return null;return this.at(W>=0?W:X,H)}intersectsBox(q){return this.intersectBox(q,qW)!==null}intersectTriangle(q,H,W,X,Y){PY.subVectors(H,q),bX.subVectors(W,q),TY.crossVectors(PY,bX);let Z=this.direction.dot(TY),$;if(Z>0){if(X)return null;$=1}else if(Z<0)$=-1,Z=-Z;else return null;UW.subVectors(this.origin,q);let J=$*this.direction.dot(bX.crossVectors(UW,bX));if(J<0)return null;let Q=$*this.direction.dot(PY.cross(UW));if(Q<0)return null;if(J+Q>Z)return null;let _=-$*UW.dot(TY);if(_<0)return null;return this.at(_/Z,Y)}applyMatrix4(q){return this.origin.applyMatrix4(q),this.direction.transformDirection(q),this}equals(q){return q.origin.equals(this.origin)&&q.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bq{constructor(q,H,W,X,Y,Z,$,J,Q,_,F,O,U,E,R,K){if(bq.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],q!==void 0)this.set(q,H,W,X,Y,Z,$,J,Q,_,F,O,U,E,R,K)}set(q,H,W,X,Y,Z,$,J,Q,_,F,O,U,E,R,K){let B=this.elements;return B[0]=q,B[4]=H,B[8]=W,B[12]=X,B[1]=Y,B[5]=Z,B[9]=$,B[13]=J,B[2]=Q,B[6]=_,B[10]=F,B[14]=O,B[3]=U,B[7]=E,B[11]=R,B[15]=K,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bq().fromArray(this.elements)}copy(q){let H=this.elements,W=q.elements;return H[0]=W[0],H[1]=W[1],H[2]=W[2],H[3]=W[3],H[4]=W[4],H[5]=W[5],H[6]=W[6],H[7]=W[7],H[8]=W[8],H[9]=W[9],H[10]=W[10],H[11]=W[11],H[12]=W[12],H[13]=W[13],H[14]=W[14],H[15]=W[15],this}copyPosition(q){let H=this.elements,W=q.elements;return H[12]=W[12],H[13]=W[13],H[14]=W[14],this}setFromMatrix3(q){let H=q.elements;return this.set(H[0],H[3],H[6],0,H[1],H[4],H[7],0,H[2],H[5],H[8],0,0,0,0,1),this}extractBasis(q,H,W){return q.setFromMatrixColumn(this,0),H.setFromMatrixColumn(this,1),W.setFromMatrixColumn(this,2),this}makeBasis(q,H,W){return this.set(q.x,H.x,W.x,0,q.y,H.y,W.y,0,q.z,H.z,W.z,0,0,0,0,1),this}extractRotation(q){let H=this.elements,W=q.elements,X=1/cW.setFromMatrixColumn(q,0).length(),Y=1/cW.setFromMatrixColumn(q,1).length(),Z=1/cW.setFromMatrixColumn(q,2).length();return H[0]=W[0]*X,H[1]=W[1]*X,H[2]=W[2]*X,H[3]=0,H[4]=W[4]*Y,H[5]=W[5]*Y,H[6]=W[6]*Y,H[7]=0,H[8]=W[8]*Z,H[9]=W[9]*Z,H[10]=W[10]*Z,H[11]=0,H[12]=0,H[13]=0,H[14]=0,H[15]=1,this}makeRotationFromEuler(q){let H=this.elements,W=q.x,X=q.y,Y=q.z,Z=Math.cos(W),$=Math.sin(W),J=Math.cos(X),Q=Math.sin(X),_=Math.cos(Y),F=Math.sin(Y);if(q.order==="XYZ"){let O=Z*_,U=Z*F,E=$*_,R=$*F;H[0]=J*_,H[4]=-J*F,H[8]=Q,H[1]=U+E*Q,H[5]=O-R*Q,H[9]=-$*J,H[2]=R-O*Q,H[6]=E+U*Q,H[10]=Z*J}else if(q.order==="YXZ"){let O=J*_,U=J*F,E=Q*_,R=Q*F;H[0]=O+R*$,H[4]=E*$-U,H[8]=Z*Q,H[1]=Z*F,H[5]=Z*_,H[9]=-$,H[2]=U*$-E,H[6]=R+O*$,H[10]=Z*J}else if(q.order==="ZXY"){let O=J*_,U=J*F,E=Q*_,R=Q*F;H[0]=O-R*$,H[4]=-Z*F,H[8]=E+U*$,H[1]=U+E*$,H[5]=Z*_,H[9]=R-O*$,H[2]=-Z*Q,H[6]=$,H[10]=Z*J}else if(q.order==="ZYX"){let O=Z*_,U=Z*F,E=$*_,R=$*F;H[0]=J*_,H[4]=E*Q-U,H[8]=O*Q+R,H[1]=J*F,H[5]=R*Q+O,H[9]=U*Q-E,H[2]=-Q,H[6]=$*J,H[10]=Z*J}else if(q.order==="YZX"){let O=Z*J,U=Z*Q,E=$*J,R=$*Q;H[0]=J*_,H[4]=R-O*F,H[8]=E*F+U,H[1]=F,H[5]=Z*_,H[9]=-$*_,H[2]=-Q*_,H[6]=U*F+E,H[10]=O-R*F}else if(q.order==="XZY"){let O=Z*J,U=Z*Q,E=$*J,R=$*Q;H[0]=J*_,H[4]=-F,H[8]=Q*_,H[1]=O*F+R,H[5]=Z*_,H[9]=U*F-E,H[2]=E*F-U,H[6]=$*_,H[10]=R*F+O}return H[3]=0,H[7]=0,H[11]=0,H[12]=0,H[13]=0,H[14]=0,H[15]=1,this}makeRotationFromQuaternion(q){return this.compose(y4,q,g4)}lookAt(q,H,W){let X=this.elements;if(TH.subVectors(q,H),TH.lengthSq()===0)TH.z=1;if(TH.normalize(),BW.crossVectors(W,TH),BW.lengthSq()===0){if(Math.abs(W.z)===1)TH.x+=0.0001;else TH.z+=0.0001;TH.normalize(),BW.crossVectors(W,TH)}return BW.normalize(),DX.crossVectors(TH,BW),X[0]=BW.x,X[4]=DX.x,X[8]=TH.x,X[1]=BW.y,X[5]=DX.y,X[9]=TH.y,X[2]=BW.z,X[6]=DX.z,X[10]=TH.z,this}multiply(q){return this.multiplyMatrices(this,q)}premultiply(q){return this.multiplyMatrices(q,this)}multiplyMatrices(q,H){let W=q.elements,X=H.elements,Y=this.elements,Z=W[0],$=W[4],J=W[8],Q=W[12],_=W[1],F=W[5],O=W[9],U=W[13],E=W[2],R=W[6],K=W[10],B=W[14],G=W[3],S=W[7],V=W[11],P=W[15],b=X[0],T=X[4],j=X[8],x=X[12],N=X[1],C=X[5],I=X[9],m=X[13],f=X[2],d=X[6],i=X[10],c=X[14],t=X[3],l=X[7],Xq=X[11],_q=X[15];return Y[0]=Z*b+$*N+J*f+Q*t,Y[4]=Z*T+$*C+J*d+Q*l,Y[8]=Z*j+$*I+J*i+Q*Xq,Y[12]=Z*x+$*m+J*c+Q*_q,Y[1]=_*b+F*N+O*f+U*t,Y[5]=_*T+F*C+O*d+U*l,Y[9]=_*j+F*I+O*i+U*Xq,Y[13]=_*x+F*m+O*c+U*_q,Y[2]=E*b+R*N+K*f+B*t,Y[6]=E*T+R*C+K*d+B*l,Y[10]=E*j+R*I+K*i+B*Xq,Y[14]=E*x+R*m+K*c+B*_q,Y[3]=G*b+S*N+V*f+P*t,Y[7]=G*T+S*C+V*d+P*l,Y[11]=G*j+S*I+V*i+P*Xq,Y[15]=G*x+S*m+V*c+P*_q,this}multiplyScalar(q){let H=this.elements;return H[0]*=q,H[4]*=q,H[8]*=q,H[12]*=q,H[1]*=q,H[5]*=q,H[9]*=q,H[13]*=q,H[2]*=q,H[6]*=q,H[10]*=q,H[14]*=q,H[3]*=q,H[7]*=q,H[11]*=q,H[15]*=q,this}determinant(){let q=this.elements,H=q[0],W=q[4],X=q[8],Y=q[12],Z=q[1],$=q[5],J=q[9],Q=q[13],_=q[2],F=q[6],O=q[10],U=q[14],E=q[3],R=q[7],K=q[11],B=q[15];return E*(+Y*J*F-X*Q*F-Y*$*O+W*Q*O+X*$*U-W*J*U)+R*(+H*J*U-H*Q*O+Y*Z*O-X*Z*U+X*Q*_-Y*J*_)+K*(+H*Q*F-H*$*U-Y*Z*F+W*Z*U+Y*$*_-W*Q*_)+B*(-X*$*_-H*J*F+H*$*O+X*Z*F-W*Z*O+W*J*_)}transpose(){let q=this.elements,H;return H=q[1],q[1]=q[4],q[4]=H,H=q[2],q[2]=q[8],q[8]=H,H=q[6],q[6]=q[9],q[9]=H,H=q[3],q[3]=q[12],q[12]=H,H=q[7],q[7]=q[13],q[13]=H,H=q[11],q[11]=q[14],q[14]=H,this}setPosition(q,H,W){let X=this.elements;if(q.isVector3)X[12]=q.x,X[13]=q.y,X[14]=q.z;else X[12]=q,X[13]=H,X[14]=W;return this}invert(){let q=this.elements,H=q[0],W=q[1],X=q[2],Y=q[3],Z=q[4],$=q[5],J=q[6],Q=q[7],_=q[8],F=q[9],O=q[10],U=q[11],E=q[12],R=q[13],K=q[14],B=q[15],G=F*K*Q-R*O*Q+R*J*U-$*K*U-F*J*B+$*O*B,S=E*O*Q-_*K*Q-E*J*U+Z*K*U+_*J*B-Z*O*B,V=_*R*Q-E*F*Q+E*$*U-Z*R*U-_*$*B+Z*F*B,P=E*F*J-_*R*J-E*$*O+Z*R*O+_*$*K-Z*F*K,b=H*G+W*S+X*V+Y*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return q[0]=G*T,q[1]=(R*O*Y-F*K*Y-R*X*U+W*K*U+F*X*B-W*O*B)*T,q[2]=($*K*Y-R*J*Y+R*X*Q-W*K*Q-$*X*B+W*J*B)*T,q[3]=(F*J*Y-$*O*Y-F*X*Q+W*O*Q+$*X*U-W*J*U)*T,q[4]=S*T,q[5]=(_*K*Y-E*O*Y+E*X*U-H*K*U-_*X*B+H*O*B)*T,q[6]=(E*J*Y-Z*K*Y-E*X*Q+H*K*Q+Z*X*B-H*J*B)*T,q[7]=(Z*O*Y-_*J*Y+_*X*Q-H*O*Q-Z*X*U+H*J*U)*T,q[8]=V*T,q[9]=(E*F*Y-_*R*Y-E*W*U+H*R*U+_*W*B-H*F*B)*T,q[10]=(Z*R*Y-E*$*Y+E*W*Q-H*R*Q-Z*W*B+H*$*B)*T,q[11]=(_*$*Y-Z*F*Y-_*W*Q+H*F*Q+Z*W*U-H*$*U)*T,q[12]=P*T,q[13]=(_*R*X-E*F*X+E*W*O-H*R*O-_*W*K+H*F*K)*T,q[14]=(E*$*X-Z*R*X-E*W*J+H*R*J+Z*W*K-H*$*K)*T,q[15]=(Z*F*X-_*$*X+_*W*J-H*F*J-Z*W*O+H*$*O)*T,this}scale(q){let H=this.elements,W=q.x,X=q.y,Y=q.z;return H[0]*=W,H[4]*=X,H[8]*=Y,H[1]*=W,H[5]*=X,H[9]*=Y,H[2]*=W,H[6]*=X,H[10]*=Y,H[3]*=W,H[7]*=X,H[11]*=Y,this}getMaxScaleOnAxis(){let q=this.elements,H=q[0]*q[0]+q[1]*q[1]+q[2]*q[2],W=q[4]*q[4]+q[5]*q[5]+q[6]*q[6],X=q[8]*q[8]+q[9]*q[9]+q[10]*q[10];return Math.sqrt(Math.max(H,W,X))}makeTranslation(q,H,W){if(q.isVector3)this.set(1,0,0,q.x,0,1,0,q.y,0,0,1,q.z,0,0,0,1);else this.set(1,0,0,q,0,1,0,H,0,0,1,W,0,0,0,1);return this}makeRotationX(q){let H=Math.cos(q),W=Math.sin(q);return this.set(1,0,0,0,0,H,-W,0,0,W,H,0,0,0,0,1),this}makeRotationY(q){let H=Math.cos(q),W=Math.sin(q);return this.set(H,0,W,0,0,1,0,0,-W,0,H,0,0,0,0,1),this}makeRotationZ(q){let H=Math.cos(q),W=Math.sin(q);return this.set(H,-W,0,0,W,H,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(q,H){let W=Math.cos(H),X=Math.sin(H),Y=1-W,Z=q.x,$=q.y,J=q.z,Q=Y*Z,_=Y*$;return this.set(Q*Z+W,Q*$-X*J,Q*J+X*$,0,Q*$+X*J,_*$+W,_*J-X*Z,0,Q*J-X*$,_*J+X*Z,Y*J*J+W,0,0,0,0,1),this}makeScale(q,H,W){return this.set(q,0,0,0,0,H,0,0,0,0,W,0,0,0,0,1),this}makeShear(q,H,W,X,Y,Z){return this.set(1,W,Y,0,q,1,Z,0,H,X,1,0,0,0,0,1),this}compose(q,H,W){let X=this.elements,Y=H._x,Z=H._y,$=H._z,J=H._w,Q=Y+Y,_=Z+Z,F=$+$,O=Y*Q,U=Y*_,E=Y*F,R=Z*_,K=Z*F,B=$*F,G=J*Q,S=J*_,V=J*F,P=W.x,b=W.y,T=W.z;return X[0]=(1-(R+B))*P,X[1]=(U+V)*P,X[2]=(E-S)*P,X[3]=0,X[4]=(U-V)*b,X[5]=(1-(O+B))*b,X[6]=(K+G)*b,X[7]=0,X[8]=(E+S)*T,X[9]=(K-G)*T,X[10]=(1-(O+R))*T,X[11]=0,X[12]=q.x,X[13]=q.y,X[14]=q.z,X[15]=1,this}decompose(q,H,W){let X=this.elements,Y=cW.set(X[0],X[1],X[2]).length(),Z=cW.set(X[4],X[5],X[6]).length(),$=cW.set(X[8],X[9],X[10]).length();if(this.determinant()<0)Y=-Y;q.x=X[12],q.y=X[13],q.z=X[14],mH.copy(this);let Q=1/Y,_=1/Z,F=1/$;return mH.elements[0]*=Q,mH.elements[1]*=Q,mH.elements[2]*=Q,mH.elements[4]*=_,mH.elements[5]*=_,mH.elements[6]*=_,mH.elements[8]*=F,mH.elements[9]*=F,mH.elements[10]*=F,H.setFromRotationMatrix(mH),W.x=Y,W.y=Z,W.z=$,this}makePerspective(q,H,W,X,Y,Z,$=2000,J=!1){let Q=this.elements,_=2*Y/(H-q),F=2*Y/(W-X),O=(H+q)/(H-q),U=(W+X)/(W-X),E,R;if(J)E=Y/(Z-Y),R=Z*Y/(Z-Y);else if($===2000)E=-(Z+Y)/(Z-Y),R=-2*Z*Y/(Z-Y);else if($===2001)E=-Z/(Z-Y),R=-Z*Y/(Z-Y);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+$);return Q[0]=_,Q[4]=0,Q[8]=O,Q[12]=0,Q[1]=0,Q[5]=F,Q[9]=U,Q[13]=0,Q[2]=0,Q[6]=0,Q[10]=E,Q[14]=R,Q[3]=0,Q[7]=0,Q[11]=-1,Q[15]=0,this}makeOrthographic(q,H,W,X,Y,Z,$=2000,J=!1){let Q=this.elements,_=2/(H-q),F=2/(W-X),O=-(H+q)/(H-q),U=-(W+X)/(W-X),E,R;if(J)E=1/(Z-Y),R=Z/(Z-Y);else if($===2000)E=-2/(Z-Y),R=-(Z+Y)/(Z-Y);else if($===2001)E=-1/(Z-Y),R=-Y/(Z-Y);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+$);return Q[0]=_,Q[4]=0,Q[8]=0,Q[12]=O,Q[1]=0,Q[5]=F,Q[9]=0,Q[13]=U,Q[2]=0,Q[6]=0,Q[10]=E,Q[14]=R,Q[3]=0,Q[7]=0,Q[11]=0,Q[15]=1,this}equals(q){let H=this.elements,W=q.elements;for(let X=0;X<16;X++)if(H[X]!==W[X])return!1;return!0}fromArray(q,H=0){for(let W=0;W<16;W++)this.elements[W]=q[W+H];return this}toArray(q=[],H=0){let W=this.elements;return q[H]=W[0],q[H+1]=W[1],q[H+2]=W[2],q[H+3]=W[3],q[H+4]=W[4],q[H+5]=W[5],q[H+6]=W[6],q[H+7]=W[7],q[H+8]=W[8],q[H+9]=W[9],q[H+10]=W[10],q[H+11]=W[11],q[H+12]=W[12],q[H+13]=W[13],q[H+14]=W[14],q[H+15]=W[15],q}}let cW=new k,mH=new bq,y4=new k(0,0,0),g4=new k(1,1,1),BW=new k,DX=new k,TH=new k,xZ=new bq,lZ=new kH;class vH{constructor(q=0,H=0,W=0,X=vH.DEFAULT_ORDER){this.isEuler=!0,this._x=q,this._y=H,this._z=W,this._order=X}get x(){return this._x}set x(q){this._x=q,this._onChangeCallback()}get y(){return this._y}set y(q){this._y=q,this._onChangeCallback()}get z(){return this._z}set z(q){this._z=q,this._onChangeCallback()}get order(){return this._order}set order(q){this._order=q,this._onChangeCallback()}set(q,H,W,X=this._order){return this._x=q,this._y=H,this._z=W,this._order=X,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(q){return this._x=q._x,this._y=q._y,this._z=q._z,this._order=q._order,this._onChangeCallback(),this}setFromRotationMatrix(q,H=this._order,W=!0){let X=q.elements,Y=X[0],Z=X[4],$=X[8],J=X[1],Q=X[5],_=X[9],F=X[2],O=X[6],U=X[10];switch(H){case"XYZ":if(this._y=Math.asin(gq($,-1,1)),Math.abs($)<0.9999999)this._x=Math.atan2(-_,U),this._z=Math.atan2(-Z,Y);else this._x=Math.atan2(O,Q),this._z=0;break;case"YXZ":if(this._x=Math.asin(-gq(_,-1,1)),Math.abs(_)<0.9999999)this._y=Math.atan2($,U),this._z=Math.atan2(J,Q);else this._y=Math.atan2(-F,Y),this._z=0;break;case"ZXY":if(this._x=Math.asin(gq(O,-1,1)),Math.abs(O)<0.9999999)this._y=Math.atan2(-F,U),this._z=Math.atan2(-Z,Q);else this._y=0,this._z=Math.atan2(J,Y);break;case"ZYX":if(this._y=Math.asin(-gq(F,-1,1)),Math.abs(F)<0.9999999)this._x=Math.atan2(O,U),this._z=Math.atan2(J,Y);else this._x=0,this._z=Math.atan2(-Z,Q);break;case"YZX":if(this._z=Math.asin(gq(J,-1,1)),Math.abs(J)<0.9999999)this._x=Math.atan2(-_,Q),this._y=Math.atan2(-F,Y);else this._x=0,this._y=Math.atan2($,U);break;case"XZY":if(this._z=Math.asin(-gq(Z,-1,1)),Math.abs(Z)<0.9999999)this._x=Math.atan2(O,Q),this._y=Math.atan2($,Y);else this._x=Math.atan2(-_,U),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+H)}if(this._order=H,W===!0)this._onChangeCallback();return this}setFromQuaternion(q,H,W){return xZ.makeRotationFromQuaternion(q),this.setFromRotationMatrix(xZ,H,W)}setFromVector3(q,H=this._order){return this.set(q.x,q.y,q.z,H)}reorder(q){return lZ.setFromEuler(this),this.setFromQuaternion(lZ,q)}equals(q){return q._x===this._x&&q._y===this._y&&q._z===this._z&&q._order===this._order}fromArray(q){if(this._x=q[0],this._y=q[1],this._z=q[2],q[3]!==void 0)this._order=q[3];return this._onChangeCallback(),this}toArray(q=[],H=0){return q[H]=this._x,q[H+1]=this._y,q[H+2]=this._z,q[H+3]=this._order,q}_onChange(q){return this._onChangeCallback=q,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vH.DEFAULT_ORDER="XYZ";class wY{constructor(){this.mask=1}set(q){this.mask=(1<<q|0)>>>0}enable(q){this.mask|=1<<q|0}enableAll(){this.mask=-1}toggle(q){this.mask^=1<<q|0}disable(q){this.mask&=~(1<<q|0)}disableAll(){this.mask=0}test(q){return(this.mask&q.mask)!==0}isEnabled(q){return(this.mask&(1<<q|0))!==0}}let x4=0,uZ=new k,dW=new kH,HW=new bq,yX=new k,GX=new k,l4=new k,u4=new kH,fZ=new k(1,0,0),pZ=new k(0,1,0),mZ=new k(0,0,1),cZ={type:"added"},f4={type:"removed"},nW={type:"childadded",child:null},AY={type:"childremoved",child:null};class ZH extends VW{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:x4++}),this.uuid=xH(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ZH.DEFAULT_UP.clone();let q=new k,H=new vH,W=new kH,X=new k(1,1,1);function Y(){W.setFromEuler(H,!1)}function Z(){H.setFromQuaternion(W,void 0,!1)}H._onChange(Y),W._onChange(Z),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:q},rotation:{configurable:!0,enumerable:!0,value:H},quaternion:{configurable:!0,enumerable:!0,value:W},scale:{configurable:!0,enumerable:!0,value:X},modelViewMatrix:{value:new bq},normalMatrix:{value:new hq}}),this.matrix=new bq,this.matrixWorld=new bq,this.matrixAutoUpdate=ZH.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ZH.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wY,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(q){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(q),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(q){return this.quaternion.premultiply(q),this}setRotationFromAxisAngle(q,H){this.quaternion.setFromAxisAngle(q,H)}setRotationFromEuler(q){this.quaternion.setFromEuler(q,!0)}setRotationFromMatrix(q){this.quaternion.setFromRotationMatrix(q)}setRotationFromQuaternion(q){this.quaternion.copy(q)}rotateOnAxis(q,H){return dW.setFromAxisAngle(q,H),this.quaternion.multiply(dW),this}rotateOnWorldAxis(q,H){return dW.setFromAxisAngle(q,H),this.quaternion.premultiply(dW),this}rotateX(q){return this.rotateOnAxis(fZ,q)}rotateY(q){return this.rotateOnAxis(pZ,q)}rotateZ(q){return this.rotateOnAxis(mZ,q)}translateOnAxis(q,H){return uZ.copy(q).applyQuaternion(this.quaternion),this.position.add(uZ.multiplyScalar(H)),this}translateX(q){return this.translateOnAxis(fZ,q)}translateY(q){return this.translateOnAxis(pZ,q)}translateZ(q){return this.translateOnAxis(mZ,q)}localToWorld(q){return this.updateWorldMatrix(!0,!1),q.applyMatrix4(this.matrixWorld)}worldToLocal(q){return this.updateWorldMatrix(!0,!1),q.applyMatrix4(HW.copy(this.matrixWorld).invert())}lookAt(q,H,W){if(q.isVector3)yX.copy(q);else yX.set(q,H,W);let X=this.parent;if(this.updateWorldMatrix(!0,!1),GX.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)HW.lookAt(GX,yX,this.up);else HW.lookAt(yX,GX,this.up);if(this.quaternion.setFromRotationMatrix(HW),X)HW.extractRotation(X.matrixWorld),dW.setFromRotationMatrix(HW),this.quaternion.premultiply(dW.invert())}add(q){if(arguments.length>1){for(let H=0;H<arguments.length;H++)this.add(arguments[H]);return this}if(q===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",q),this;if(q&&q.isObject3D)q.removeFromParent(),q.parent=this,this.children.push(q),q.dispatchEvent(cZ),nW.child=q,this.dispatchEvent(nW),nW.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",q);return this}remove(q){if(arguments.length>1){for(let W=0;W<arguments.length;W++)this.remove(arguments[W]);return this}let H=this.children.indexOf(q);if(H!==-1)q.parent=null,this.children.splice(H,1),q.dispatchEvent(f4),AY.child=q,this.dispatchEvent(AY),AY.child=null;return this}removeFromParent(){let q=this.parent;if(q!==null)q.remove(this);return this}clear(){return this.remove(...this.children)}attach(q){if(this.updateWorldMatrix(!0,!1),HW.copy(this.matrixWorld).invert(),q.parent!==null)q.parent.updateWorldMatrix(!0,!1),HW.multiply(q.parent.matrixWorld);return q.applyMatrix4(HW),q.removeFromParent(),q.parent=this,this.children.push(q),q.updateWorldMatrix(!1,!0),q.dispatchEvent(cZ),nW.child=q,this.dispatchEvent(nW),nW.child=null,this}getObjectById(q){return this.getObjectByProperty("id",q)}getObjectByName(q){return this.getObjectByProperty("name",q)}getObjectByProperty(q,H){if(this[q]===H)return this;for(let W=0,X=this.children.length;W<X;W++){let Z=this.children[W].getObjectByProperty(q,H);if(Z!==void 0)return Z}return}getObjectsByProperty(q,H,W=[]){if(this[q]===H)W.push(this);let X=this.children;for(let Y=0,Z=X.length;Y<Z;Y++)X[Y].getObjectsByProperty(q,H,W);return W}getWorldPosition(q){return this.updateWorldMatrix(!0,!1),q.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(q){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(GX,q,l4),q}getWorldScale(q){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(GX,u4,q),q}getWorldDirection(q){this.updateWorldMatrix(!0,!1);let H=this.matrixWorld.elements;return q.set(H[8],H[9],H[10]).normalize()}raycast(){}traverse(q){q(this);let H=this.children;for(let W=0,X=H.length;W<X;W++)H[W].traverse(q)}traverseVisible(q){if(this.visible===!1)return;q(this);let H=this.children;for(let W=0,X=H.length;W<X;W++)H[W].traverseVisible(q)}traverseAncestors(q){let H=this.parent;if(H!==null)q(H),H.traverseAncestors(q)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(q){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||q){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,q=!0}let H=this.children;for(let W=0,X=H.length;W<X;W++)H[W].updateMatrixWorld(q)}updateWorldMatrix(q,H){let W=this.parent;if(q===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(H===!0){let X=this.children;for(let Y=0,Z=X.length;Y<Z;Y++)X[Y].updateWorldMatrix(!1,!0)}}toJSON(q){let H=q===void 0||typeof q==="string",W={};if(H)q={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},W.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let X={};if(X.uuid=this.uuid,X.type=this.type,this.name!=="")X.name=this.name;if(this.castShadow===!0)X.castShadow=!0;if(this.receiveShadow===!0)X.receiveShadow=!0;if(this.visible===!1)X.visible=!1;if(this.frustumCulled===!1)X.frustumCulled=!1;if(this.renderOrder!==0)X.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)X.userData=this.userData;if(X.layers=this.layers.mask,X.matrix=this.matrix.toArray(),X.up=this.up.toArray(),this.matrixAutoUpdate===!1)X.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(X.type="InstancedMesh",X.count=this.count,X.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)X.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(X.type="BatchedMesh",X.perObjectFrustumCulled=this.perObjectFrustumCulled,X.sortObjects=this.sortObjects,X.drawRanges=this._drawRanges,X.reservedRanges=this._reservedRanges,X.geometryInfo=this._geometryInfo.map(($)=>({...$,boundingBox:$.boundingBox?$.boundingBox.toJSON():void 0,boundingSphere:$.boundingSphere?$.boundingSphere.toJSON():void 0})),X.instanceInfo=this._instanceInfo.map(($)=>({...$})),X.availableInstanceIds=this._availableInstanceIds.slice(),X.availableGeometryIds=this._availableGeometryIds.slice(),X.nextIndexStart=this._nextIndexStart,X.nextVertexStart=this._nextVertexStart,X.geometryCount=this._geometryCount,X.maxInstanceCount=this._maxInstanceCount,X.maxVertexCount=this._maxVertexCount,X.maxIndexCount=this._maxIndexCount,X.geometryInitialized=this._geometryInitialized,X.matricesTexture=this._matricesTexture.toJSON(q),X.indirectTexture=this._indirectTexture.toJSON(q),this._colorsTexture!==null)X.colorsTexture=this._colorsTexture.toJSON(q);if(this.boundingSphere!==null)X.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)X.boundingBox=this.boundingBox.toJSON()}function Y($,J){if($[J.uuid]===void 0)$[J.uuid]=J.toJSON(q);return J.uuid}if(this.isScene){if(this.background){if(this.background.isColor)X.background=this.background.toJSON();else if(this.background.isTexture)X.background=this.background.toJSON(q).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)X.environment=this.environment.toJSON(q).uuid}else if(this.isMesh||this.isLine||this.isPoints){X.geometry=Y(q.geometries,this.geometry);let $=this.geometry.parameters;if($!==void 0&&$.shapes!==void 0){let J=$.shapes;if(Array.isArray(J))for(let Q=0,_=J.length;Q<_;Q++){let F=J[Q];Y(q.shapes,F)}else Y(q.shapes,J)}}if(this.isSkinnedMesh){if(X.bindMode=this.bindMode,X.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Y(q.skeletons,this.skeleton),X.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let $=[];for(let J=0,Q=this.material.length;J<Q;J++)$.push(Y(q.materials,this.material[J]));X.material=$}else X.material=Y(q.materials,this.material);if(this.children.length>0){X.children=[];for(let $=0;$<this.children.length;$++)X.children.push(this.children[$].toJSON(q).object)}if(this.animations.length>0){X.animations=[];for(let $=0;$<this.animations.length;$++){let J=this.animations[$];X.animations.push(Y(q.animations,J))}}if(H){let $=Z(q.geometries),J=Z(q.materials),Q=Z(q.textures),_=Z(q.images),F=Z(q.shapes),O=Z(q.skeletons),U=Z(q.animations),E=Z(q.nodes);if($.length>0)W.geometries=$;if(J.length>0)W.materials=J;if(Q.length>0)W.textures=Q;if(_.length>0)W.images=_;if(F.length>0)W.shapes=F;if(O.length>0)W.skeletons=O;if(U.length>0)W.animations=U;if(E.length>0)W.nodes=E}return W.object=X,W;function Z($){let J=[];for(let Q in $){let _=$[Q];delete _.metadata,J.push(_)}return J}}clone(q){return new this.constructor().copy(this,q)}copy(q,H=!0){if(this.name=q.name,this.up.copy(q.up),this.position.copy(q.position),this.rotation.order=q.rotation.order,this.quaternion.copy(q.quaternion),this.scale.copy(q.scale),this.matrix.copy(q.matrix),this.matrixWorld.copy(q.matrixWorld),this.matrixAutoUpdate=q.matrixAutoUpdate,this.matrixWorldAutoUpdate=q.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=q.matrixWorldNeedsUpdate,this.layers.mask=q.layers.mask,this.visible=q.visible,this.castShadow=q.castShadow,this.receiveShadow=q.receiveShadow,this.frustumCulled=q.frustumCulled,this.renderOrder=q.renderOrder,this.animations=q.animations.slice(),this.userData=JSON.parse(JSON.stringify(q.userData)),H===!0)for(let W=0;W<q.children.length;W++){let X=q.children[W];this.add(X.clone())}return this}}ZH.DEFAULT_UP=new k(0,1,0),ZH.DEFAULT_MATRIX_AUTO_UPDATE=!0,ZH.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let cH=new k,WW=new k,jY=new k,XW=new k,oW=new k,sW=new k,dZ=new k,kY=new k,vY=new k,IY=new k,hY=new oq,bY=new oq,DY=new oq;class dH{constructor(q=new k,H=new k,W=new k){this.a=q,this.b=H,this.c=W}static getNormal(q,H,W,X){X.subVectors(W,H),cH.subVectors(q,H),X.cross(cH);let Y=X.lengthSq();if(Y>0)return X.multiplyScalar(1/Math.sqrt(Y));return X.set(0,0,0)}static getBarycoord(q,H,W,X,Y){cH.subVectors(X,H),WW.subVectors(W,H),jY.subVectors(q,H);let Z=cH.dot(cH),$=cH.dot(WW),J=cH.dot(jY),Q=WW.dot(WW),_=WW.dot(jY),F=Z*Q-$*$;if(F===0)return Y.set(0,0,0),null;let O=1/F,U=(Q*J-$*_)*O,E=(Z*_-$*J)*O;return Y.set(1-U-E,E,U)}static containsPoint(q,H,W,X){if(this.getBarycoord(q,H,W,X,XW)===null)return!1;return XW.x>=0&&XW.y>=0&&XW.x+XW.y<=1}static getInterpolation(q,H,W,X,Y,Z,$,J){if(this.getBarycoord(q,H,W,X,XW)===null){if(J.x=0,J.y=0,"z"in J)J.z=0;if("w"in J)J.w=0;return null}return J.setScalar(0),J.addScaledVector(Y,XW.x),J.addScaledVector(Z,XW.y),J.addScaledVector($,XW.z),J}static getInterpolatedAttribute(q,H,W,X,Y,Z){return hY.setScalar(0),bY.setScalar(0),DY.setScalar(0),hY.fromBufferAttribute(q,H),bY.fromBufferAttribute(q,W),DY.fromBufferAttribute(q,X),Z.setScalar(0),Z.addScaledVector(hY,Y.x),Z.addScaledVector(bY,Y.y),Z.addScaledVector(DY,Y.z),Z}static isFrontFacing(q,H,W,X){return cH.subVectors(W,H),WW.subVectors(q,H),cH.cross(WW).dot(X)<0?!0:!1}set(q,H,W){return this.a.copy(q),this.b.copy(H),this.c.copy(W),this}setFromPointsAndIndices(q,H,W,X){return this.a.copy(q[H]),this.b.copy(q[W]),this.c.copy(q[X]),this}setFromAttributeAndIndices(q,H,W,X){return this.a.fromBufferAttribute(q,H),this.b.fromBufferAttribute(q,W),this.c.fromBufferAttribute(q,X),this}clone(){return new this.constructor().copy(this)}copy(q){return this.a.copy(q.a),this.b.copy(q.b),this.c.copy(q.c),this}getArea(){return cH.subVectors(this.c,this.b),WW.subVectors(this.a,this.b),cH.cross(WW).length()*0.5}getMidpoint(q){return q.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(q){return dH.getNormal(this.a,this.b,this.c,q)}getPlane(q){return q.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(q,H){return dH.getBarycoord(q,this.a,this.b,this.c,H)}getInterpolation(q,H,W,X,Y){return dH.getInterpolation(q,this.a,this.b,this.c,H,W,X,Y)}containsPoint(q){return dH.containsPoint(q,this.a,this.b,this.c)}isFrontFacing(q){return dH.isFrontFacing(this.a,this.b,this.c,q)}intersectsBox(q){return q.intersectsTriangle(this)}closestPointToPoint(q,H){let W=this.a,X=this.b,Y=this.c,Z,$;oW.subVectors(X,W),sW.subVectors(Y,W),kY.subVectors(q,W);let J=oW.dot(kY),Q=sW.dot(kY);if(J<=0&&Q<=0)return H.copy(W);vY.subVectors(q,X);let _=oW.dot(vY),F=sW.dot(vY);if(_>=0&&F<=_)return H.copy(X);let O=J*F-_*Q;if(O<=0&&J>=0&&_<=0)return Z=J/(J-_),H.copy(W).addScaledVector(oW,Z);IY.subVectors(q,Y);let U=oW.dot(IY),E=sW.dot(IY);if(E>=0&&U<=E)return H.copy(Y);let R=U*Q-J*E;if(R<=0&&Q>=0&&E<=0)return $=Q/(Q-E),H.copy(W).addScaledVector(sW,$);let K=_*E-U*F;if(K<=0&&F-_>=0&&U-E>=0)return dZ.subVectors(Y,X),$=(F-_)/(F-_+(U-E)),H.copy(X).addScaledVector(dZ,$);let B=1/(K+R+O);return Z=R*B,$=O*B,H.copy(W).addScaledVector(oW,Z).addScaledVector(sW,$)}equals(q){return q.a.equals(this.a)&&q.b.equals(this.b)&&q.c.equals(this.c)}}let nZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},EW={h:0,s:0,l:0},gX={h:0,s:0,l:0};function yY(q,H,W){if(W<0)W+=1;if(W>1)W-=1;if(W<0.16666666666666666)return q+(H-q)*6*W;if(W<0.5)return H;if(W<0.6666666666666666)return q+(H-q)*6*(0.6666666666666666-W);return q}class jq{constructor(q,H,W){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(q,H,W)}set(q,H,W){if(H===void 0&&W===void 0){let X=q;if(X&&X.isColor)this.copy(X);else if(typeof X==="number")this.setHex(X);else if(typeof X==="string")this.setStyle(X)}else this.setRGB(q,H,W);return this}setScalar(q){return this.r=q,this.g=q,this.b=q,this}setHex(q,H="srgb"){return q=Math.floor(q),this.r=(q>>16&255)/255,this.g=(q>>8&255)/255,this.b=(q&255)/255,fq.colorSpaceToWorking(this,H),this}setRGB(q,H,W,X=fq.workingColorSpace){return this.r=q,this.g=H,this.b=W,fq.colorSpaceToWorking(this,X),this}setHSL(q,H,W,X=fq.workingColorSpace){if(q=LY(q,1),H=gq(H,0,1),W=gq(W,0,1),H===0)this.r=this.g=this.b=W;else{let Y=W<=0.5?W*(1+H):W+H-W*H,Z=2*W-Y;this.r=yY(Z,Y,q+0.3333333333333333),this.g=yY(Z,Y,q),this.b=yY(Z,Y,q-0.3333333333333333)}return fq.colorSpaceToWorking(this,X),this}setStyle(q,H="srgb"){function W(Y){if(Y===void 0)return;if(parseFloat(Y)<1)console.warn("THREE.Color: Alpha component of "+q+" will be ignored.")}let X;if(X=/^(\w+)\(([^\)]*)\)/.exec(q)){let Y,Z=X[1],$=X[2];switch(Z){case"rgb":case"rgba":if(Y=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec($))return W(Y[4]),this.setRGB(Math.min(255,parseInt(Y[1],10))/255,Math.min(255,parseInt(Y[2],10))/255,Math.min(255,parseInt(Y[3],10))/255,H);if(Y=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec($))return W(Y[4]),this.setRGB(Math.min(100,parseInt(Y[1],10))/100,Math.min(100,parseInt(Y[2],10))/100,Math.min(100,parseInt(Y[3],10))/100,H);break;case"hsl":case"hsla":if(Y=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec($))return W(Y[4]),this.setHSL(parseFloat(Y[1])/360,parseFloat(Y[2])/100,parseFloat(Y[3])/100,H);break;default:console.warn("THREE.Color: Unknown color model "+q)}}else if(X=/^\#([A-Fa-f\d]+)$/.exec(q)){let Y=X[1],Z=Y.length;if(Z===3)return this.setRGB(parseInt(Y.charAt(0),16)/15,parseInt(Y.charAt(1),16)/15,parseInt(Y.charAt(2),16)/15,H);else if(Z===6)return this.setHex(parseInt(Y,16),H);else console.warn("THREE.Color: Invalid hex color "+q)}else if(q&&q.length>0)return this.setColorName(q,H);return this}setColorName(q,H="srgb"){let W=nZ[q.toLowerCase()];if(W!==void 0)this.setHex(W,H);else console.warn("THREE.Color: Unknown color "+q);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(q){return this.r=q.r,this.g=q.g,this.b=q.b,this}copySRGBToLinear(q){return this.r=rH(q.r),this.g=rH(q.g),this.b=rH(q.b),this}copyLinearToSRGB(q){return this.r=lW(q.r),this.g=lW(q.g),this.b=lW(q.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(q="srgb"){return fq.workingToColorSpace(zH.copy(this),q),Math.round(gq(zH.r*255,0,255))*65536+Math.round(gq(zH.g*255,0,255))*256+Math.round(gq(zH.b*255,0,255))}getHexString(q="srgb"){return("000000"+this.getHex(q).toString(16)).slice(-6)}getHSL(q,H=fq.workingColorSpace){fq.workingToColorSpace(zH.copy(this),H);let{r:W,g:X,b:Y}=zH,Z=Math.max(W,X,Y),$=Math.min(W,X,Y),J,Q,_=($+Z)/2;if($===Z)J=0,Q=0;else{let F=Z-$;switch(Q=_<=0.5?F/(Z+$):F/(2-Z-$),Z){case W:J=(X-Y)/F+(X<Y?6:0);break;case X:J=(Y-W)/F+2;break;case Y:J=(W-X)/F+4;break}J/=6}return q.h=J,q.s=Q,q.l=_,q}getRGB(q,H=fq.workingColorSpace){return fq.workingToColorSpace(zH.copy(this),H),q.r=zH.r,q.g=zH.g,q.b=zH.b,q}getStyle(q="srgb"){fq.workingToColorSpace(zH.copy(this),q);let{r:H,g:W,b:X}=zH;if(q!=="srgb")return`color(${q} ${H.toFixed(3)} ${W.toFixed(3)} ${X.toFixed(3)})`;return`rgb(${Math.round(H*255)},${Math.round(W*255)},${Math.round(X*255)})`}offsetHSL(q,H,W){return this.getHSL(EW),this.setHSL(EW.h+q,EW.s+H,EW.l+W)}add(q){return this.r+=q.r,this.g+=q.g,this.b+=q.b,this}addColors(q,H){return this.r=q.r+H.r,this.g=q.g+H.g,this.b=q.b+H.b,this}addScalar(q){return this.r+=q,this.g+=q,this.b+=q,this}sub(q){return this.r=Math.max(0,this.r-q.r),this.g=Math.max(0,this.g-q.g),this.b=Math.max(0,this.b-q.b),this}multiply(q){return this.r*=q.r,this.g*=q.g,this.b*=q.b,this}multiplyScalar(q){return this.r*=q,this.g*=q,this.b*=q,this}lerp(q,H){return this.r+=(q.r-this.r)*H,this.g+=(q.g-this.g)*H,this.b+=(q.b-this.b)*H,this}lerpColors(q,H,W){return this.r=q.r+(H.r-q.r)*W,this.g=q.g+(H.g-q.g)*W,this.b=q.b+(H.b-q.b)*W,this}lerpHSL(q,H){this.getHSL(EW),q.getHSL(gX);let W=_X(EW.h,gX.h,H),X=_X(EW.s,gX.s,H),Y=_X(EW.l,gX.l,H);return this.setHSL(W,X,Y),this}setFromVector3(q){return this.r=q.x,this.g=q.y,this.b=q.z,this}applyMatrix3(q){let H=this.r,W=this.g,X=this.b,Y=q.elements;return this.r=Y[0]*H+Y[3]*W+Y[6]*X,this.g=Y[1]*H+Y[4]*W+Y[7]*X,this.b=Y[2]*H+Y[5]*W+Y[8]*X,this}equals(q){return q.r===this.r&&q.g===this.g&&q.b===this.b}fromArray(q,H=0){return this.r=q[H],this.g=q[H+1],this.b=q[H+2],this}toArray(q=[],H=0){return q[H]=this.r,q[H+1]=this.g,q[H+2]=this.b,q}fromBufferAttribute(q,H){return this.r=q.getX(H),this.g=q.getY(H),this.b=q.getZ(H),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}let zH=new jq;jq.NAMES=nZ;let p4=0;class nH extends VW{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:p4++}),this.uuid=xH(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jq(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(q){if(this._alphaTest>0!==q>0)this.version++;this._alphaTest=q}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(q){if(q===void 0)return;for(let H in q){let W=q[H];if(W===void 0){console.warn(`THREE.Material: parameter '${H}' has value of undefined.`);continue}let X=this[H];if(X===void 0){console.warn(`THREE.Material: '${H}' is not a property of THREE.${this.type}.`);continue}if(X&&X.isColor)X.set(W);else if(X&&X.isVector3&&(W&&W.isVector3))X.copy(W);else this[H]=W}}toJSON(q){let H=q===void 0||typeof q==="string";if(H)q={textures:{},images:{}};let W={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(W.uuid=this.uuid,W.type=this.type,this.name!=="")W.name=this.name;if(this.color&&this.color.isColor)W.color=this.color.getHex();if(this.roughness!==void 0)W.roughness=this.roughness;if(this.metalness!==void 0)W.metalness=this.metalness;if(this.sheen!==void 0)W.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)W.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)W.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)W.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)W.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)W.specular=this.specular.getHex();if(this.specularIntensity!==void 0)W.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)W.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)W.shininess=this.shininess;if(this.clearcoat!==void 0)W.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)W.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)W.clearcoatMap=this.clearcoatMap.toJSON(q).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)W.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(q).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)W.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(q).uuid,W.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)W.dispersion=this.dispersion;if(this.iridescence!==void 0)W.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)W.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)W.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)W.iridescenceMap=this.iridescenceMap.toJSON(q).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)W.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(q).uuid;if(this.anisotropy!==void 0)W.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)W.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)W.anisotropyMap=this.anisotropyMap.toJSON(q).uuid;if(this.map&&this.map.isTexture)W.map=this.map.toJSON(q).uuid;if(this.matcap&&this.matcap.isTexture)W.matcap=this.matcap.toJSON(q).uuid;if(this.alphaMap&&this.alphaMap.isTexture)W.alphaMap=this.alphaMap.toJSON(q).uuid;if(this.lightMap&&this.lightMap.isTexture)W.lightMap=this.lightMap.toJSON(q).uuid,W.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)W.aoMap=this.aoMap.toJSON(q).uuid,W.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)W.bumpMap=this.bumpMap.toJSON(q).uuid,W.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)W.normalMap=this.normalMap.toJSON(q).uuid,W.normalMapType=this.normalMapType,W.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)W.displacementMap=this.displacementMap.toJSON(q).uuid,W.displacementScale=this.displacementScale,W.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)W.roughnessMap=this.roughnessMap.toJSON(q).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)W.metalnessMap=this.metalnessMap.toJSON(q).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)W.emissiveMap=this.emissiveMap.toJSON(q).uuid;if(this.specularMap&&this.specularMap.isTexture)W.specularMap=this.specularMap.toJSON(q).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)W.specularIntensityMap=this.specularIntensityMap.toJSON(q).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)W.specularColorMap=this.specularColorMap.toJSON(q).uuid;if(this.envMap&&this.envMap.isTexture){if(W.envMap=this.envMap.toJSON(q).uuid,this.combine!==void 0)W.combine=this.combine}if(this.envMapRotation!==void 0)W.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)W.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)W.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)W.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)W.gradientMap=this.gradientMap.toJSON(q).uuid;if(this.transmission!==void 0)W.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)W.transmissionMap=this.transmissionMap.toJSON(q).uuid;if(this.thickness!==void 0)W.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)W.thicknessMap=this.thicknessMap.toJSON(q).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)W.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)W.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)W.size=this.size;if(this.shadowSide!==null)W.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)W.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)W.blending=this.blending;if(this.side!==0)W.side=this.side;if(this.vertexColors===!0)W.vertexColors=!0;if(this.opacity<1)W.opacity=this.opacity;if(this.transparent===!0)W.transparent=!0;if(this.blendSrc!==204)W.blendSrc=this.blendSrc;if(this.blendDst!==205)W.blendDst=this.blendDst;if(this.blendEquation!==100)W.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)W.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)W.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)W.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)W.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)W.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)W.depthFunc=this.depthFunc;if(this.depthTest===!1)W.depthTest=this.depthTest;if(this.depthWrite===!1)W.depthWrite=this.depthWrite;if(this.colorWrite===!1)W.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)W.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)W.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)W.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)W.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)W.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)W.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)W.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)W.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)W.rotation=this.rotation;if(this.polygonOffset===!0)W.polygonOffset=!0;if(this.polygonOffsetFactor!==0)W.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)W.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)W.linewidth=this.linewidth;if(this.dashSize!==void 0)W.dashSize=this.dashSize;if(this.gapSize!==void 0)W.gapSize=this.gapSize;if(this.scale!==void 0)W.scale=this.scale;if(this.dithering===!0)W.dithering=!0;if(this.alphaTest>0)W.alphaTest=this.alphaTest;if(this.alphaHash===!0)W.alphaHash=!0;if(this.alphaToCoverage===!0)W.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)W.premultipliedAlpha=!0;if(this.forceSinglePass===!0)W.forceSinglePass=!0;if(this.wireframe===!0)W.wireframe=!0;if(this.wireframeLinewidth>1)W.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")W.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")W.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)W.flatShading=!0;if(this.visible===!1)W.visible=!1;if(this.toneMapped===!1)W.toneMapped=!1;if(this.fog===!1)W.fog=!1;if(Object.keys(this.userData).length>0)W.userData=this.userData;function X(Y){let Z=[];for(let $ in Y){let J=Y[$];delete J.metadata,Z.push(J)}return Z}if(H){let Y=X(q.textures),Z=X(q.images);if(Y.length>0)W.textures=Y;if(Z.length>0)W.images=Z}return W}clone(){return new this.constructor().copy(this)}copy(q){this.name=q.name,this.blending=q.blending,this.side=q.side,this.vertexColors=q.vertexColors,this.opacity=q.opacity,this.transparent=q.transparent,this.blendSrc=q.blendSrc,this.blendDst=q.blendDst,this.blendEquation=q.blendEquation,this.blendSrcAlpha=q.blendSrcAlpha,this.blendDstAlpha=q.blendDstAlpha,this.blendEquationAlpha=q.blendEquationAlpha,this.blendColor.copy(q.blendColor),this.blendAlpha=q.blendAlpha,this.depthFunc=q.depthFunc,this.depthTest=q.depthTest,this.depthWrite=q.depthWrite,this.stencilWriteMask=q.stencilWriteMask,this.stencilFunc=q.stencilFunc,this.stencilRef=q.stencilRef,this.stencilFuncMask=q.stencilFuncMask,this.stencilFail=q.stencilFail,this.stencilZFail=q.stencilZFail,this.stencilZPass=q.stencilZPass,this.stencilWrite=q.stencilWrite;let H=q.clippingPlanes,W=null;if(H!==null){let X=H.length;W=new Array(X);for(let Y=0;Y!==X;++Y)W[Y]=H[Y].clone()}return this.clippingPlanes=W,this.clipIntersection=q.clipIntersection,this.clipShadows=q.clipShadows,this.shadowSide=q.shadowSide,this.colorWrite=q.colorWrite,this.precision=q.precision,this.polygonOffset=q.polygonOffset,this.polygonOffsetFactor=q.polygonOffsetFactor,this.polygonOffsetUnits=q.polygonOffsetUnits,this.dithering=q.dithering,this.alphaTest=q.alphaTest,this.alphaHash=q.alphaHash,this.alphaToCoverage=q.alphaToCoverage,this.premultipliedAlpha=q.premultipliedAlpha,this.forceSinglePass=q.forceSinglePass,this.visible=q.visible,this.toneMapped=q.toneMapped,this.userData=JSON.parse(JSON.stringify(q.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(q){if(q===!0)this.version++}}class GW extends nH{constructor(q){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jq(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vH,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(q)}copy(q){return super.copy(q),this.color.copy(q.color),this.map=q.map,this.lightMap=q.lightMap,this.lightMapIntensity=q.lightMapIntensity,this.aoMap=q.aoMap,this.aoMapIntensity=q.aoMapIntensity,this.specularMap=q.specularMap,this.alphaMap=q.alphaMap,this.envMap=q.envMap,this.envMapRotation.copy(q.envMapRotation),this.combine=q.combine,this.reflectivity=q.reflectivity,this.refractionRatio=q.refractionRatio,this.wireframe=q.wireframe,this.wireframeLinewidth=q.wireframeLinewidth,this.wireframeLinecap=q.wireframeLinecap,this.wireframeLinejoin=q.wireframeLinejoin,this.fog=q.fog,this}}let _H=new k,xX=new uq,m4=0;class EH{constructor(q,H,W=!1){if(Array.isArray(q))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:m4++}),this.name="",this.array=q,this.itemSize=H,this.count=q!==void 0?q.length/H:0,this.normalized=W,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(q){if(q===!0)this.version++}setUsage(q){return this.usage=q,this}addUpdateRange(q,H){this.updateRanges.push({start:q,count:H})}clearUpdateRanges(){this.updateRanges.length=0}copy(q){return this.name=q.name,this.array=new q.array.constructor(q.array),this.itemSize=q.itemSize,this.count=q.count,this.normalized=q.normalized,this.usage=q.usage,this.gpuType=q.gpuType,this}copyAt(q,H,W){q*=this.itemSize,W*=H.itemSize;for(let X=0,Y=this.itemSize;X<Y;X++)this.array[q+X]=H.array[W+X];return this}copyArray(q){return this.array.set(q),this}applyMatrix3(q){if(this.itemSize===2)for(let H=0,W=this.count;H<W;H++)xX.fromBufferAttribute(this,H),xX.applyMatrix3(q),this.setXY(H,xX.x,xX.y);else if(this.itemSize===3)for(let H=0,W=this.count;H<W;H++)_H.fromBufferAttribute(this,H),_H.applyMatrix3(q),this.setXYZ(H,_H.x,_H.y,_H.z);return this}applyMatrix4(q){for(let H=0,W=this.count;H<W;H++)_H.fromBufferAttribute(this,H),_H.applyMatrix4(q),this.setXYZ(H,_H.x,_H.y,_H.z);return this}applyNormalMatrix(q){for(let H=0,W=this.count;H<W;H++)_H.fromBufferAttribute(this,H),_H.applyNormalMatrix(q),this.setXYZ(H,_H.x,_H.y,_H.z);return this}transformDirection(q){for(let H=0,W=this.count;H<W;H++)_H.fromBufferAttribute(this,H),_H.transformDirection(q),this.setXYZ(H,_H.x,_H.y,_H.z);return this}set(q,H=0){return this.array.set(q,H),this}getComponent(q,H){let W=this.array[q*this.itemSize+H];if(this.normalized)W=lH(W,this.array);return W}setComponent(q,H,W){if(this.normalized)W=iq(W,this.array);return this.array[q*this.itemSize+H]=W,this}getX(q){let H=this.array[q*this.itemSize];if(this.normalized)H=lH(H,this.array);return H}setX(q,H){if(this.normalized)H=iq(H,this.array);return this.array[q*this.itemSize]=H,this}getY(q){let H=this.array[q*this.itemSize+1];if(this.normalized)H=lH(H,this.array);return H}setY(q,H){if(this.normalized)H=iq(H,this.array);return this.array[q*this.itemSize+1]=H,this}getZ(q){let H=this.array[q*this.itemSize+2];if(this.normalized)H=lH(H,this.array);return H}setZ(q,H){if(this.normalized)H=iq(H,this.array);return this.array[q*this.itemSize+2]=H,this}getW(q){let H=this.array[q*this.itemSize+3];if(this.normalized)H=lH(H,this.array);return H}setW(q,H){if(this.normalized)H=iq(H,this.array);return this.array[q*this.itemSize+3]=H,this}setXY(q,H,W){if(q*=this.itemSize,this.normalized)H=iq(H,this.array),W=iq(W,this.array);return this.array[q+0]=H,this.array[q+1]=W,this}setXYZ(q,H,W,X){if(q*=this.itemSize,this.normalized)H=iq(H,this.array),W=iq(W,this.array),X=iq(X,this.array);return this.array[q+0]=H,this.array[q+1]=W,this.array[q+2]=X,this}setXYZW(q,H,W,X,Y){if(q*=this.itemSize,this.normalized)H=iq(H,this.array),W=iq(W,this.array),X=iq(X,this.array),Y=iq(Y,this.array);return this.array[q+0]=H,this.array[q+1]=W,this.array[q+2]=X,this.array[q+3]=Y,this}onUpload(q){return this.onUploadCallback=q,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let q={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")q.name=this.name;if(this.usage!==35044)q.usage=this.usage;return q}}class gY extends EH{constructor(q,H,W){super(new Uint16Array(q),H,W)}}class xY extends EH{constructor(q,H,W){super(new Uint32Array(q),H,W)}}class oH extends EH{constructor(q,H,W){super(new Float32Array(q),H,W)}}let c4=0,IH=new bq,lY=new ZH,iW=new k,wH=new uH,LX=new uH,GH=new k;class hH extends VW{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c4++}),this.uuid=xH(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(q){if(Array.isArray(q))this.index=new((vZ(q))?xY:gY)(q,1);else this.index=q;return this}setIndirect(q){return this.indirect=q,this}getIndirect(){return this.indirect}getAttribute(q){return this.attributes[q]}setAttribute(q,H){return this.attributes[q]=H,this}deleteAttribute(q){return delete this.attributes[q],this}hasAttribute(q){return this.attributes[q]!==void 0}addGroup(q,H,W=0){this.groups.push({start:q,count:H,materialIndex:W})}clearGroups(){this.groups=[]}setDrawRange(q,H){this.drawRange.start=q,this.drawRange.count=H}applyMatrix4(q){let H=this.attributes.position;if(H!==void 0)H.applyMatrix4(q),H.needsUpdate=!0;let W=this.attributes.normal;if(W!==void 0){let Y=new hq().getNormalMatrix(q);W.applyNormalMatrix(Y),W.needsUpdate=!0}let X=this.attributes.tangent;if(X!==void 0)X.transformDirection(q),X.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(q){return IH.makeRotationFromQuaternion(q),this.applyMatrix4(IH),this}rotateX(q){return IH.makeRotationX(q),this.applyMatrix4(IH),this}rotateY(q){return IH.makeRotationY(q),this.applyMatrix4(IH),this}rotateZ(q){return IH.makeRotationZ(q),this.applyMatrix4(IH),this}translate(q,H,W){return IH.makeTranslation(q,H,W),this.applyMatrix4(IH),this}scale(q,H,W){return IH.makeScale(q,H,W),this.applyMatrix4(IH),this}lookAt(q){return lY.lookAt(q),lY.updateMatrix(),this.applyMatrix4(lY.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(iW).negate(),this.translate(iW.x,iW.y,iW.z),this}setFromPoints(q){let H=this.getAttribute("position");if(H===void 0){let W=[];for(let X=0,Y=q.length;X<Y;X++){let Z=q[X];W.push(Z.x,Z.y,Z.z||0)}this.setAttribute("position",new oH(W,3))}else{let W=Math.min(q.length,H.count);for(let X=0;X<W;X++){let Y=q[X];H.setXYZ(X,Y.x,Y.y,Y.z||0)}if(q.length>H.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");H.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new uH;let q=this.attributes.position,H=this.morphAttributes.position;if(q&&q.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(q!==void 0){if(this.boundingBox.setFromBufferAttribute(q),H)for(let W=0,X=H.length;W<X;W++){let Y=H[W];if(wH.setFromBufferAttribute(Y),this.morphTargetsRelative)GH.addVectors(this.boundingBox.min,wH.min),this.boundingBox.expandByPoint(GH),GH.addVectors(this.boundingBox.max,wH.max),this.boundingBox.expandByPoint(GH);else this.boundingBox.expandByPoint(wH.min),this.boundingBox.expandByPoint(wH.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new pH;let q=this.attributes.position,H=this.morphAttributes.position;if(q&&q.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(q){let W=this.boundingSphere.center;if(wH.setFromBufferAttribute(q),H)for(let Y=0,Z=H.length;Y<Z;Y++){let $=H[Y];if(LX.setFromBufferAttribute($),this.morphTargetsRelative)GH.addVectors(wH.min,LX.min),wH.expandByPoint(GH),GH.addVectors(wH.max,LX.max),wH.expandByPoint(GH);else wH.expandByPoint(LX.min),wH.expandByPoint(LX.max)}wH.getCenter(W);let X=0;for(let Y=0,Z=q.count;Y<Z;Y++)GH.fromBufferAttribute(q,Y),X=Math.max(X,W.distanceToSquared(GH));if(H)for(let Y=0,Z=H.length;Y<Z;Y++){let $=H[Y],J=this.morphTargetsRelative;for(let Q=0,_=$.count;Q<_;Q++){if(GH.fromBufferAttribute($,Q),J)iW.fromBufferAttribute(q,Q),GH.add(iW);X=Math.max(X,W.distanceToSquared(GH))}}if(this.boundingSphere.radius=Math.sqrt(X),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let q=this.index,H=this.attributes;if(q===null||H.position===void 0||H.normal===void 0||H.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:W,normal:X,uv:Y}=H;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new EH(new Float32Array(4*W.count),4));let Z=this.getAttribute("tangent"),$=[],J=[];for(let j=0;j<W.count;j++)$[j]=new k,J[j]=new k;let Q=new k,_=new k,F=new k,O=new uq,U=new uq,E=new uq,R=new k,K=new k;function B(j,x,N){Q.fromBufferAttribute(W,j),_.fromBufferAttribute(W,x),F.fromBufferAttribute(W,N),O.fromBufferAttribute(Y,j),U.fromBufferAttribute(Y,x),E.fromBufferAttribute(Y,N),_.sub(Q),F.sub(Q),U.sub(O),E.sub(O);let C=1/(U.x*E.y-E.x*U.y);if(!isFinite(C))return;R.copy(_).multiplyScalar(E.y).addScaledVector(F,-U.y).multiplyScalar(C),K.copy(F).multiplyScalar(U.x).addScaledVector(_,-E.x).multiplyScalar(C),$[j].add(R),$[x].add(R),$[N].add(R),J[j].add(K),J[x].add(K),J[N].add(K)}let G=this.groups;if(G.length===0)G=[{start:0,count:q.count}];for(let j=0,x=G.length;j<x;++j){let N=G[j],C=N.start,I=N.count;for(let m=C,f=C+I;m<f;m+=3)B(q.getX(m+0),q.getX(m+1),q.getX(m+2))}let S=new k,V=new k,P=new k,b=new k;function T(j){P.fromBufferAttribute(X,j),b.copy(P);let x=$[j];S.copy(x),S.sub(P.multiplyScalar(P.dot(x))).normalize(),V.crossVectors(b,x);let C=V.dot(J[j])<0?-1:1;Z.setXYZW(j,S.x,S.y,S.z,C)}for(let j=0,x=G.length;j<x;++j){let N=G[j],C=N.start,I=N.count;for(let m=C,f=C+I;m<f;m+=3)T(q.getX(m+0)),T(q.getX(m+1)),T(q.getX(m+2))}}computeVertexNormals(){let q=this.index,H=this.getAttribute("position");if(H!==void 0){let W=this.getAttribute("normal");if(W===void 0)W=new EH(new Float32Array(H.count*3),3),this.setAttribute("normal",W);else for(let O=0,U=W.count;O<U;O++)W.setXYZ(O,0,0,0);let X=new k,Y=new k,Z=new k,$=new k,J=new k,Q=new k,_=new k,F=new k;if(q)for(let O=0,U=q.count;O<U;O+=3){let E=q.getX(O+0),R=q.getX(O+1),K=q.getX(O+2);X.fromBufferAttribute(H,E),Y.fromBufferAttribute(H,R),Z.fromBufferAttribute(H,K),_.subVectors(Z,Y),F.subVectors(X,Y),_.cross(F),$.fromBufferAttribute(W,E),J.fromBufferAttribute(W,R),Q.fromBufferAttribute(W,K),$.add(_),J.add(_),Q.add(_),W.setXYZ(E,$.x,$.y,$.z),W.setXYZ(R,J.x,J.y,J.z),W.setXYZ(K,Q.x,Q.y,Q.z)}else for(let O=0,U=H.count;O<U;O+=3)X.fromBufferAttribute(H,O+0),Y.fromBufferAttribute(H,O+1),Z.fromBufferAttribute(H,O+2),_.subVectors(Z,Y),F.subVectors(X,Y),_.cross(F),W.setXYZ(O+0,_.x,_.y,_.z),W.setXYZ(O+1,_.x,_.y,_.z),W.setXYZ(O+2,_.x,_.y,_.z);this.normalizeNormals(),W.needsUpdate=!0}}normalizeNormals(){let q=this.attributes.normal;for(let H=0,W=q.count;H<W;H++)GH.fromBufferAttribute(q,H),GH.normalize(),q.setXYZ(H,GH.x,GH.y,GH.z)}toNonIndexed(){function q($,J){let{array:Q,itemSize:_,normalized:F}=$,O=new Q.constructor(J.length*_),U=0,E=0;for(let R=0,K=J.length;R<K;R++){if($.isInterleavedBufferAttribute)U=J[R]*$.data.stride+$.offset;else U=J[R]*_;for(let B=0;B<_;B++)O[E++]=Q[U++]}return new EH(O,_,F)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let H=new hH,W=this.index.array,X=this.attributes;for(let $ in X){let J=X[$],Q=q(J,W);H.setAttribute($,Q)}let Y=this.morphAttributes;for(let $ in Y){let J=[],Q=Y[$];for(let _=0,F=Q.length;_<F;_++){let O=Q[_],U=q(O,W);J.push(U)}H.morphAttributes[$]=J}H.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;for(let $=0,J=Z.length;$<J;$++){let Q=Z[$];H.addGroup(Q.start,Q.count,Q.materialIndex)}return H}toJSON(){let q={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(q.uuid=this.uuid,q.type=this.type,this.name!=="")q.name=this.name;if(Object.keys(this.userData).length>0)q.userData=this.userData;if(this.parameters!==void 0){let J=this.parameters;for(let Q in J)if(J[Q]!==void 0)q[Q]=J[Q];return q}q.data={attributes:{}};let H=this.index;if(H!==null)q.data.index={type:H.array.constructor.name,array:Array.prototype.slice.call(H.array)};let W=this.attributes;for(let J in W){let Q=W[J];q.data.attributes[J]=Q.toJSON(q.data)}let X={},Y=!1;for(let J in this.morphAttributes){let Q=this.morphAttributes[J],_=[];for(let F=0,O=Q.length;F<O;F++){let U=Q[F];_.push(U.toJSON(q.data))}if(_.length>0)X[J]=_,Y=!0}if(Y)q.data.morphAttributes=X,q.data.morphTargetsRelative=this.morphTargetsRelative;let Z=this.groups;if(Z.length>0)q.data.groups=JSON.parse(JSON.stringify(Z));let $=this.boundingSphere;if($!==null)q.data.boundingSphere=$.toJSON();return q}clone(){return new this.constructor().copy(this)}copy(q){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let H={};this.name=q.name;let W=q.index;if(W!==null)this.setIndex(W.clone());let X=q.attributes;for(let Q in X){let _=X[Q];this.setAttribute(Q,_.clone(H))}let Y=q.morphAttributes;for(let Q in Y){let _=[],F=Y[Q];for(let O=0,U=F.length;O<U;O++)_.push(F[O].clone(H));this.morphAttributes[Q]=_}this.morphTargetsRelative=q.morphTargetsRelative;let Z=q.groups;for(let Q=0,_=Z.length;Q<_;Q++){let F=Z[Q];this.addGroup(F.start,F.count,F.materialIndex)}let $=q.boundingBox;if($!==null)this.boundingBox=$.clone();let J=q.boundingSphere;if(J!==null)this.boundingSphere=J.clone();return this.drawRange.start=q.drawRange.start,this.drawRange.count=q.drawRange.count,this.userData=q.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oZ=new bq,MW=new EX,lX=new pH,sZ=new k,uX=new k,fX=new k,pX=new k,uY=new k,mX=new k,iZ=new k,cX=new k;class SH extends ZH{constructor(q=new hH,H=new GW){super();this.isMesh=!0,this.type="Mesh",this.geometry=q,this.material=H,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(q,H){if(super.copy(q,H),q.morphTargetInfluences!==void 0)this.morphTargetInfluences=q.morphTargetInfluences.slice();if(q.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},q.morphTargetDictionary);return this.material=Array.isArray(q.material)?q.material.slice():q.material,this.geometry=q.geometry,this}updateMorphTargets(){let H=this.geometry.morphAttributes,W=Object.keys(H);if(W.length>0){let X=H[W[0]];if(X!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Y=0,Z=X.length;Y<Z;Y++){let $=X[Y].name||String(Y);this.morphTargetInfluences.push(0),this.morphTargetDictionary[$]=Y}}}}getVertexPosition(q,H){let W=this.geometry,X=W.attributes.position,Y=W.morphAttributes.position,Z=W.morphTargetsRelative;H.fromBufferAttribute(X,q);let $=this.morphTargetInfluences;if(Y&&$){mX.set(0,0,0);for(let J=0,Q=Y.length;J<Q;J++){let _=$[J],F=Y[J];if(_===0)continue;if(uY.fromBufferAttribute(F,q),Z)mX.addScaledVector(uY,_);else mX.addScaledVector(uY.sub(H),_)}H.add(mX)}return H}raycast(q,H){let W=this.geometry,X=this.material,Y=this.matrixWorld;if(X===void 0)return;if(W.boundingSphere===null)W.computeBoundingSphere();if(lX.copy(W.boundingSphere),lX.applyMatrix4(Y),MW.copy(q.ray).recast(q.near),lX.containsPoint(MW.origin)===!1){if(MW.intersectSphere(lX,sZ)===null)return;if(MW.origin.distanceToSquared(sZ)>(q.far-q.near)**2)return}if(oZ.copy(Y).invert(),MW.copy(q.ray).applyMatrix4(oZ),W.boundingBox!==null){if(MW.intersectsBox(W.boundingBox)===!1)return}this._computeIntersections(q,H,MW)}_computeIntersections(q,H,W){let X,Y=this.geometry,Z=this.material,$=Y.index,J=Y.attributes.position,Q=Y.attributes.uv,_=Y.attributes.uv1,F=Y.attributes.normal,O=Y.groups,U=Y.drawRange;if($!==null)if(Array.isArray(Z))for(let E=0,R=O.length;E<R;E++){let K=O[E],B=Z[K.materialIndex],G=Math.max(K.start,U.start),S=Math.min($.count,Math.min(K.start+K.count,U.start+U.count));for(let V=G,P=S;V<P;V+=3){let b=$.getX(V),T=$.getX(V+1),j=$.getX(V+2);if(X=dX(this,B,q,W,Q,_,F,b,T,j),X)X.faceIndex=Math.floor(V/3),X.face.materialIndex=K.materialIndex,H.push(X)}}else{let E=Math.max(0,U.start),R=Math.min($.count,U.start+U.count);for(let K=E,B=R;K<B;K+=3){let G=$.getX(K),S=$.getX(K+1),V=$.getX(K+2);if(X=dX(this,Z,q,W,Q,_,F,G,S,V),X)X.faceIndex=Math.floor(K/3),H.push(X)}}else if(J!==void 0)if(Array.isArray(Z))for(let E=0,R=O.length;E<R;E++){let K=O[E],B=Z[K.materialIndex],G=Math.max(K.start,U.start),S=Math.min(J.count,Math.min(K.start+K.count,U.start+U.count));for(let V=G,P=S;V<P;V+=3){let b=V,T=V+1,j=V+2;if(X=dX(this,B,q,W,Q,_,F,b,T,j),X)X.faceIndex=Math.floor(V/3),X.face.materialIndex=K.materialIndex,H.push(X)}}else{let E=Math.max(0,U.start),R=Math.min(J.count,U.start+U.count);for(let K=E,B=R;K<B;K+=3){let G=K,S=K+1,V=K+2;if(X=dX(this,Z,q,W,Q,_,F,G,S,V),X)X.faceIndex=Math.floor(K/3),H.push(X)}}}}function d4(q,H,W,X,Y,Z,$,J){let Q;if(H.side===1)Q=X.intersectTriangle($,Z,Y,!0,J);else Q=X.intersectTriangle(Y,Z,$,H.side===0,J);if(Q===null)return null;cX.copy(J),cX.applyMatrix4(q.matrixWorld);let _=W.ray.origin.distanceTo(cX);if(_<W.near||_>W.far)return null;return{distance:_,point:cX.clone(),object:q}}function dX(q,H,W,X,Y,Z,$,J,Q,_){q.getVertexPosition(J,uX),q.getVertexPosition(Q,fX),q.getVertexPosition(_,pX);let F=d4(q,H,W,X,uX,fX,pX,iZ);if(F){let O=new k;if(dH.getBarycoord(iZ,uX,fX,pX,O),Y)F.uv=dH.getInterpolatedAttribute(Y,J,Q,_,O,new uq);if(Z)F.uv1=dH.getInterpolatedAttribute(Z,J,Q,_,O,new uq);if($){if(F.normal=dH.getInterpolatedAttribute($,J,Q,_,O,new k),F.normal.dot(X.direction)>0)F.normal.multiplyScalar(-1)}let U={a:J,b:Q,c:_,normal:new k,materialIndex:0};dH.getNormal(uX,fX,pX,U.normal),F.face=U,F.barycoord=O}return F}class RX extends hH{constructor(q=1,H=1,W=1,X=1,Y=1,Z=1){super();this.type="BoxGeometry",this.parameters={width:q,height:H,depth:W,widthSegments:X,heightSegments:Y,depthSegments:Z};let $=this;X=Math.floor(X),Y=Math.floor(Y),Z=Math.floor(Z);let J=[],Q=[],_=[],F=[],O=0,U=0;E("z","y","x",-1,-1,W,H,q,Z,Y,0),E("z","y","x",1,-1,W,H,-q,Z,Y,1),E("x","z","y",1,1,q,W,H,X,Z,2),E("x","z","y",1,-1,q,W,-H,X,Z,3),E("x","y","z",1,-1,q,H,W,X,Y,4),E("x","y","z",-1,-1,q,H,-W,X,Y,5),this.setIndex(J),this.setAttribute("position",new oH(Q,3)),this.setAttribute("normal",new oH(_,3)),this.setAttribute("uv",new oH(F,2));function E(R,K,B,G,S,V,P,b,T,j,x){let N=V/T,C=P/j,I=V/2,m=P/2,f=b/2,d=T+1,i=j+1,c=0,t=0,l=new k;for(let Xq=0;Xq<i;Xq++){let _q=Xq*C-m;for(let Aq=0;Aq<d;Aq++){let mq=Aq*N-I;l[R]=mq*G,l[K]=_q*S,l[B]=f,Q.push(l.x,l.y,l.z),l[R]=0,l[K]=0,l[B]=b>0?1:-1,_.push(l.x,l.y,l.z),F.push(Aq/T),F.push(1-Xq/j),c+=1}}for(let Xq=0;Xq<j;Xq++)for(let _q=0;_q<T;_q++){let Aq=O+_q+d*Xq,mq=O+_q+d*(Xq+1),XH=O+(_q+1)+d*(Xq+1),p=O+(_q+1)+d*Xq;J.push(Aq,mq,p),J.push(mq,XH,p),t+=6}$.addGroup(U,t,x),U+=t,O+=c}}copy(q){return super.copy(q),this.parameters=Object.assign({},q.parameters),this}static fromJSON(q){return new RX(q.width,q.height,q.depth,q.widthSegments,q.heightSegments,q.depthSegments)}}function aW(q){let H={};for(let W in q){H[W]={};for(let X in q[W]){let Y=q[W][X];if(Y&&(Y.isColor||Y.isMatrix3||Y.isMatrix4||Y.isVector2||Y.isVector3||Y.isVector4||Y.isTexture||Y.isQuaternion))if(Y.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),H[W][X]=null;else H[W][X]=Y.clone();else if(Array.isArray(Y))H[W][X]=Y.slice();else H[W][X]=Y}}return H}function VH(q){let H={};for(let W=0;W<q.length;W++){let X=aW(q[W]);for(let Y in X)H[Y]=X[Y]}return H}function n4(q){let H=[];for(let W=0;W<q.length;W++)H.push(q[W].clone());return H}function aZ(q){let H=q.getRenderTarget();if(H===null)return q.outputColorSpace;if(H.isXRRenderTarget===!0)return H.texture.colorSpace;return fq.workingColorSpace}let o4={clone:aW,merge:VH};var s4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class YW extends nH{constructor(q){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s4,this.fragmentShader=i4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,q!==void 0)this.setValues(q)}copy(q){return super.copy(q),this.fragmentShader=q.fragmentShader,this.vertexShader=q.vertexShader,this.uniforms=aW(q.uniforms),this.uniformsGroups=n4(q.uniformsGroups),this.defines=Object.assign({},q.defines),this.wireframe=q.wireframe,this.wireframeLinewidth=q.wireframeLinewidth,this.fog=q.fog,this.lights=q.lights,this.clipping=q.clipping,this.extensions=Object.assign({},q.extensions),this.glslVersion=q.glslVersion,this}toJSON(q){let H=super.toJSON(q);H.glslVersion=this.glslVersion,H.uniforms={};for(let X in this.uniforms){let Z=this.uniforms[X].value;if(Z&&Z.isTexture)H.uniforms[X]={type:"t",value:Z.toJSON(q).uuid};else if(Z&&Z.isColor)H.uniforms[X]={type:"c",value:Z.getHex()};else if(Z&&Z.isVector2)H.uniforms[X]={type:"v2",value:Z.toArray()};else if(Z&&Z.isVector3)H.uniforms[X]={type:"v3",value:Z.toArray()};else if(Z&&Z.isVector4)H.uniforms[X]={type:"v4",value:Z.toArray()};else if(Z&&Z.isMatrix3)H.uniforms[X]={type:"m3",value:Z.toArray()};else if(Z&&Z.isMatrix4)H.uniforms[X]={type:"m4",value:Z.toArray()};else H.uniforms[X]={value:Z}}if(Object.keys(this.defines).length>0)H.defines=this.defines;H.vertexShader=this.vertexShader,H.fragmentShader=this.fragmentShader,H.lights=this.lights,H.clipping=this.clipping;let W={};for(let X in this.extensions)if(this.extensions[X]===!0)W[X]=!0;if(Object.keys(W).length>0)H.extensions=W;return H}}class fY extends ZH{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bq,this.projectionMatrix=new bq,this.projectionMatrixInverse=new bq,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(q,H){return super.copy(q,H),this.matrixWorldInverse.copy(q.matrixWorldInverse),this.projectionMatrix.copy(q.projectionMatrix),this.projectionMatrixInverse.copy(q.projectionMatrixInverse),this.coordinateSystem=q.coordinateSystem,this}getWorldDirection(q){return super.getWorldDirection(q).negate()}updateMatrixWorld(q){super.updateMatrixWorld(q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(q,H){super.updateWorldMatrix(q,H),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}let LW=new k,tZ=new uq,rZ=new uq;class CH extends fY{constructor(q=50,H=1,W=0.1,X=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=q,this.zoom=1,this.near=W,this.far=X,this.focus=10,this.aspect=H,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(q,H){return super.copy(q,H),this.fov=q.fov,this.zoom=q.zoom,this.near=q.near,this.far=q.far,this.focus=q.focus,this.aspect=q.aspect,this.view=q.view===null?null:Object.assign({},q.view),this.filmGauge=q.filmGauge,this.filmOffset=q.filmOffset,this}setFocalLength(q){let H=0.5*this.getFilmHeight()/q;this.fov=gW*2*Math.atan(H),this.updateProjectionMatrix()}getFocalLength(){let q=Math.tan(QX*0.5*this.fov);return 0.5*this.getFilmHeight()/q}getEffectiveFOV(){return gW*2*Math.atan(Math.tan(QX*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(q,H,W){LW.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),H.set(LW.x,LW.y).multiplyScalar(-q/LW.z),LW.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),W.set(LW.x,LW.y).multiplyScalar(-q/LW.z)}getViewSize(q,H){return this.getViewBounds(q,tZ,rZ),H.subVectors(rZ,tZ)}setViewOffset(q,H,W,X,Y,Z){if(this.aspect=q/H,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=q,this.view.fullHeight=H,this.view.offsetX=W,this.view.offsetY=X,this.view.width=Y,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let q=this.near,H=q*Math.tan(QX*0.5*this.fov)/this.zoom,W=2*H,X=this.aspect*W,Y=-0.5*X,Z=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:J,fullHeight:Q}=Z;Y+=Z.offsetX*X/J,H-=Z.offsetY*W/Q,X*=Z.width/J,W*=Z.height/Q}let $=this.filmOffset;if($!==0)Y+=q*$/this.getFilmWidth();this.projectionMatrix.makePerspective(Y,Y+X,H,H-W,q,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(q){let H=super.toJSON(q);if(H.object.fov=this.fov,H.object.zoom=this.zoom,H.object.near=this.near,H.object.far=this.far,H.object.focus=this.focus,H.object.aspect=this.aspect,this.view!==null)H.object.view=Object.assign({},this.view);return H.object.filmGauge=this.filmGauge,H.object.filmOffset=this.filmOffset,H}}let tW=-90,rW=1;class eZ extends ZH{constructor(q,H,W){super();this.type="CubeCamera",this.renderTarget=W,this.coordinateSystem=null,this.activeMipmapLevel=0;let X=new CH(tW,rW,q,H);X.layers=this.layers,this.add(X);let Y=new CH(tW,rW,q,H);Y.layers=this.layers,this.add(Y);let Z=new CH(tW,rW,q,H);Z.layers=this.layers,this.add(Z);let $=new CH(tW,rW,q,H);$.layers=this.layers,this.add($);let J=new CH(tW,rW,q,H);J.layers=this.layers,this.add(J);let Q=new CH(tW,rW,q,H);Q.layers=this.layers,this.add(Q)}updateCoordinateSystem(){let q=this.coordinateSystem,H=this.children.concat(),[W,X,Y,Z,$,J]=H;for(let Q of H)this.remove(Q);if(q===2000)W.up.set(0,1,0),W.lookAt(1,0,0),X.up.set(0,1,0),X.lookAt(-1,0,0),Y.up.set(0,0,-1),Y.lookAt(0,1,0),Z.up.set(0,0,1),Z.lookAt(0,-1,0),$.up.set(0,1,0),$.lookAt(0,0,1),J.up.set(0,1,0),J.lookAt(0,0,-1);else if(q===2001)W.up.set(0,-1,0),W.lookAt(-1,0,0),X.up.set(0,-1,0),X.lookAt(1,0,0),Y.up.set(0,0,1),Y.lookAt(0,1,0),Z.up.set(0,0,-1),Z.lookAt(0,-1,0),$.up.set(0,-1,0),$.lookAt(0,0,1),J.up.set(0,-1,0),J.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+q);for(let Q of H)this.add(Q),Q.updateMatrixWorld()}update(q,H){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:W,activeMipmapLevel:X}=this;if(this.coordinateSystem!==q.coordinateSystem)this.coordinateSystem=q.coordinateSystem,this.updateCoordinateSystem();let[Y,Z,$,J,Q,_]=this.children,F=q.getRenderTarget(),O=q.getActiveCubeFace(),U=q.getActiveMipmapLevel(),E=q.xr.enabled;q.xr.enabled=!1;let R=W.texture.generateMipmaps;W.texture.generateMipmaps=!1,q.setRenderTarget(W,0,X),q.render(H,Y),q.setRenderTarget(W,1,X),q.render(H,Z),q.setRenderTarget(W,2,X),q.render(H,$),q.setRenderTarget(W,3,X),q.render(H,J),q.setRenderTarget(W,4,X),q.render(H,Q),W.texture.generateMipmaps=R,q.setRenderTarget(W,5,X),q.render(H,_),q.setRenderTarget(F,O,U),q.xr.enabled=E,W.texture.needsPMREMUpdate=!0}}class pY extends BH{constructor(q=[],H=301,W,X,Y,Z,$,J,Q,_){super(q,H,W,X,Y,Z,$,J,Q,_);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(q){this.image=q}}class q0 extends _W{constructor(q=1,H={}){super(q,q,H);this.isWebGLCubeRenderTarget=!0;let W={width:q,height:q,depth:1},X=[W,W,W,W,W,W];this.texture=new pY(X),this._setTextureOptions(H),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(q,H){this.texture.type=H.type,this.texture.colorSpace=H.colorSpace,this.texture.generateMipmaps=H.generateMipmaps,this.texture.minFilter=H.minFilter,this.texture.magFilter=H.magFilter;let W={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},X=new RX(5,5,5),Y=new YW({name:"CubemapFromEquirect",uniforms:aW(W.uniforms),vertexShader:W.vertexShader,fragmentShader:W.fragmentShader,side:1,blending:0});Y.uniforms.tEquirect.value=H;let Z=new SH(X,Y),$=H.minFilter;if(H.minFilter===1008)H.minFilter=1006;return new eZ(1,10,this).update(q,Z),H.minFilter=$,Z.geometry.dispose(),Z.material.dispose(),this}clear(q,H=!0,W=!0,X=!0){let Y=q.getRenderTarget();for(let Z=0;Z<6;Z++)q.setRenderTarget(this,Z),q.clear(H,W,X);q.setRenderTarget(Y)}}class ZW extends ZH{constructor(){super();this.isGroup=!0,this.type="Group"}}let a4={type:"move"};class nX{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new ZW,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new ZW,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new ZW,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k;return this._grip}dispatchEvent(q){if(this._targetRay!==null)this._targetRay.dispatchEvent(q);if(this._grip!==null)this._grip.dispatchEvent(q);if(this._hand!==null)this._hand.dispatchEvent(q);return this}connect(q){if(q&&q.hand){let H=this._hand;if(H)for(let W of q.hand.values())this._getHandJoint(H,W)}return this.dispatchEvent({type:"connected",data:q}),this}disconnect(q){if(this.dispatchEvent({type:"disconnected",data:q}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(q,H,W){let X=null,Y=null,Z=null,$=this._targetRay,J=this._grip,Q=this._hand;if(q&&H.session.visibilityState!=="visible-blurred"){if(Q&&q.hand){Z=!0;for(let R of q.hand.values()){let K=H.getJointPose(R,W),B=this._getHandJoint(Q,R);if(K!==null)B.matrix.fromArray(K.transform.matrix),B.matrix.decompose(B.position,B.rotation,B.scale),B.matrixWorldNeedsUpdate=!0,B.jointRadius=K.radius;B.visible=K!==null}let _=Q.joints["index-finger-tip"],F=Q.joints["thumb-tip"],O=_.position.distanceTo(F.position),U=0.02,E=0.005;if(Q.inputState.pinching&&O>U+E)Q.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:q.handedness,target:this});else if(!Q.inputState.pinching&&O<=U-E)Q.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:q.handedness,target:this})}else if(J!==null&&q.gripSpace){if(Y=H.getPose(q.gripSpace,W),Y!==null){if(J.matrix.fromArray(Y.transform.matrix),J.matrix.decompose(J.position,J.rotation,J.scale),J.matrixWorldNeedsUpdate=!0,Y.linearVelocity)J.hasLinearVelocity=!0,J.linearVelocity.copy(Y.linearVelocity);else J.hasLinearVelocity=!1;if(Y.angularVelocity)J.hasAngularVelocity=!0,J.angularVelocity.copy(Y.angularVelocity);else J.hasAngularVelocity=!1}}if($!==null){if(X=H.getPose(q.targetRaySpace,W),X===null&&Y!==null)X=Y;if(X!==null){if($.matrix.fromArray(X.transform.matrix),$.matrix.decompose($.position,$.rotation,$.scale),$.matrixWorldNeedsUpdate=!0,X.linearVelocity)$.hasLinearVelocity=!0,$.linearVelocity.copy(X.linearVelocity);else $.hasLinearVelocity=!1;if(X.angularVelocity)$.hasAngularVelocity=!0,$.angularVelocity.copy(X.angularVelocity);else $.hasAngularVelocity=!1;this.dispatchEvent(a4)}}}if($!==null)$.visible=X!==null;if(J!==null)J.visible=Y!==null;if(Q!==null)Q.visible=Z!==null;return this}_getHandJoint(q,H){if(q.joints[H.jointName]===void 0){let W=new ZW;W.matrixAutoUpdate=!1,W.visible=!1,q.joints[H.jointName]=W,q.add(W)}return q.joints[H.jointName]}}class H0 extends ZH{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vH,this.environmentIntensity=1,this.environmentRotation=new vH,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(q,H){if(super.copy(q,H),q.background!==null)this.background=q.background.clone();if(q.environment!==null)this.environment=q.environment.clone();if(q.fog!==null)this.fog=q.fog.clone();if(this.backgroundBlurriness=q.backgroundBlurriness,this.backgroundIntensity=q.backgroundIntensity,this.backgroundRotation.copy(q.backgroundRotation),this.environmentIntensity=q.environmentIntensity,this.environmentRotation.copy(q.environmentRotation),q.overrideMaterial!==null)this.overrideMaterial=q.overrideMaterial.clone();return this.matrixAutoUpdate=q.matrixAutoUpdate,this}toJSON(q){let H=super.toJSON(q);if(this.fog!==null)H.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)H.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)H.object.backgroundIntensity=this.backgroundIntensity;if(H.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)H.object.environmentIntensity=this.environmentIntensity;return H.object.environmentRotation=this.environmentRotation.toArray(),H}}class W0{constructor(q,H){this.isInterleavedBuffer=!0,this.array=q,this.stride=H,this.count=q!==void 0?q.length/H:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=xH()}onUploadCallback(){}set needsUpdate(q){if(q===!0)this.version++}setUsage(q){return this.usage=q,this}addUpdateRange(q,H){this.updateRanges.push({start:q,count:H})}clearUpdateRanges(){this.updateRanges.length=0}copy(q){return this.array=new q.array.constructor(q.array),this.count=q.count,this.stride=q.stride,this.usage=q.usage,this}copyAt(q,H,W){q*=this.stride,W*=H.stride;for(let X=0,Y=this.stride;X<Y;X++)this.array[q+X]=H.array[W+X];return this}set(q,H=0){return this.array.set(q,H),this}clone(q){if(q.arrayBuffers===void 0)q.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=xH();if(q.arrayBuffers[this.array.buffer._uuid]===void 0)q.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let H=new this.array.constructor(q.arrayBuffers[this.array.buffer._uuid]),W=new this.constructor(H,this.stride);return W.setUsage(this.usage),W}onUpload(q){return this.onUploadCallback=q,this}toJSON(q){if(q.arrayBuffers===void 0)q.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=xH();if(q.arrayBuffers[this.array.buffer._uuid]===void 0)q.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}let NH=new k;class mY{constructor(q,H,W,X=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=q,this.itemSize=H,this.offset=W,this.normalized=X}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(q){this.data.needsUpdate=q}applyMatrix4(q){for(let H=0,W=this.data.count;H<W;H++)NH.fromBufferAttribute(this,H),NH.applyMatrix4(q),this.setXYZ(H,NH.x,NH.y,NH.z);return this}applyNormalMatrix(q){for(let H=0,W=this.count;H<W;H++)NH.fromBufferAttribute(this,H),NH.applyNormalMatrix(q),this.setXYZ(H,NH.x,NH.y,NH.z);return this}transformDirection(q){for(let H=0,W=this.count;H<W;H++)NH.fromBufferAttribute(this,H),NH.transformDirection(q),this.setXYZ(H,NH.x,NH.y,NH.z);return this}getComponent(q,H){let W=this.array[q*this.data.stride+this.offset+H];if(this.normalized)W=lH(W,this.array);return W}setComponent(q,H,W){if(this.normalized)W=iq(W,this.array);return this.data.array[q*this.data.stride+this.offset+H]=W,this}setX(q,H){if(this.normalized)H=iq(H,this.array);return this.data.array[q*this.data.stride+this.offset]=H,this}setY(q,H){if(this.normalized)H=iq(H,this.array);return this.data.array[q*this.data.stride+this.offset+1]=H,this}setZ(q,H){if(this.normalized)H=iq(H,this.array);return this.data.array[q*this.data.stride+this.offset+2]=H,this}setW(q,H){if(this.normalized)H=iq(H,this.array);return this.data.array[q*this.data.stride+this.offset+3]=H,this}getX(q){let H=this.data.array[q*this.data.stride+this.offset];if(this.normalized)H=lH(H,this.array);return H}getY(q){let H=this.data.array[q*this.data.stride+this.offset+1];if(this.normalized)H=lH(H,this.array);return H}getZ(q){let H=this.data.array[q*this.data.stride+this.offset+2];if(this.normalized)H=lH(H,this.array);return H}getW(q){let H=this.data.array[q*this.data.stride+this.offset+3];if(this.normalized)H=lH(H,this.array);return H}setXY(q,H,W){if(q=q*this.data.stride+this.offset,this.normalized)H=iq(H,this.array),W=iq(W,this.array);return this.data.array[q+0]=H,this.data.array[q+1]=W,this}setXYZ(q,H,W,X){if(q=q*this.data.stride+this.offset,this.normalized)H=iq(H,this.array),W=iq(W,this.array),X=iq(X,this.array);return this.data.array[q+0]=H,this.data.array[q+1]=W,this.data.array[q+2]=X,this}setXYZW(q,H,W,X,Y){if(q=q*this.data.stride+this.offset,this.normalized)H=iq(H,this.array),W=iq(W,this.array),X=iq(X,this.array),Y=iq(Y,this.array);return this.data.array[q+0]=H,this.data.array[q+1]=W,this.data.array[q+2]=X,this.data.array[q+3]=Y,this}clone(q){if(q===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let H=[];for(let W=0;W<this.count;W++){let X=W*this.data.stride+this.offset;for(let Y=0;Y<this.itemSize;Y++)H.push(this.data.array[X+Y])}return new EH(new this.array.constructor(H),this.itemSize,this.normalized)}else{if(q.interleavedBuffers===void 0)q.interleavedBuffers={};if(q.interleavedBuffers[this.data.uuid]===void 0)q.interleavedBuffers[this.data.uuid]=this.data.clone(q);return new mY(q.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(q){if(q===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let H=[];for(let W=0;W<this.count;W++){let X=W*this.data.stride+this.offset;for(let Y=0;Y<this.itemSize;Y++)H.push(this.data.array[X+Y])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:H,normalized:this.normalized}}else{if(q.interleavedBuffers===void 0)q.interleavedBuffers={};if(q.interleavedBuffers[this.data.uuid]===void 0)q.interleavedBuffers[this.data.uuid]=this.data.toJSON(q);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}let X0=new k,Y0=new oq,Z0=new oq,t4=new k,$0=new bq,oX=new k,cY=new pH,J0=new bq,dY=new EX;class Q0 extends SH{constructor(q,H){super(q,H);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new bq,this.bindMatrixInverse=new bq,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let q=this.geometry;if(this.boundingBox===null)this.boundingBox=new uH;this.boundingBox.makeEmpty();let H=q.getAttribute("position");for(let W=0;W<H.count;W++)this.getVertexPosition(W,oX),this.boundingBox.expandByPoint(oX)}computeBoundingSphere(){let q=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new pH;this.boundingSphere.makeEmpty();let H=q.getAttribute("position");for(let W=0;W<H.count;W++)this.getVertexPosition(W,oX),this.boundingSphere.expandByPoint(oX)}copy(q,H){if(super.copy(q,H),this.bindMode=q.bindMode,this.bindMatrix.copy(q.bindMatrix),this.bindMatrixInverse.copy(q.bindMatrixInverse),this.skeleton=q.skeleton,q.boundingBox!==null)this.boundingBox=q.boundingBox.clone();if(q.boundingSphere!==null)this.boundingSphere=q.boundingSphere.clone();return this}raycast(q,H){let W=this.material,X=this.matrixWorld;if(W===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(cY.copy(this.boundingSphere),cY.applyMatrix4(X),q.ray.intersectsSphere(cY)===!1)return;if(J0.copy(X).invert(),dY.copy(q.ray).applyMatrix4(J0),this.boundingBox!==null){if(dY.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(q,H,dY)}getVertexPosition(q,H){return super.getVertexPosition(q,H),this.applyBoneTransform(q,H),H}bind(q,H){if(this.skeleton=q,H===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),H=this.matrixWorld;this.bindMatrix.copy(H),this.bindMatrixInverse.copy(H).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let q=new oq,H=this.geometry.attributes.skinWeight;for(let W=0,X=H.count;W<X;W++){q.fromBufferAttribute(H,W);let Y=1/q.manhattanLength();if(Y!==1/0)q.multiplyScalar(Y);else q.set(1,0,0,0);H.setXYZW(W,q.x,q.y,q.z,q.w)}}updateMatrixWorld(q){if(super.updateMatrixWorld(q),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(q,H){let W=this.skeleton,X=this.geometry;Y0.fromBufferAttribute(X.attributes.skinIndex,q),Z0.fromBufferAttribute(X.attributes.skinWeight,q),X0.copy(H).applyMatrix4(this.bindMatrix),H.set(0,0,0);for(let Y=0;Y<4;Y++){let Z=Z0.getComponent(Y);if(Z!==0){let $=Y0.getComponent(Y);$0.multiplyMatrices(W.bones[$].matrixWorld,W.boneInverses[$]),H.addScaledVector(t4.copy(X0).applyMatrix4($0),Z)}}return H.applyMatrix4(this.bindMatrixInverse)}}class nY extends ZH{constructor(){super();this.isBone=!0,this.type="Bone"}}class oY extends BH{constructor(q=null,H=1,W=1,X,Y,Z,$,J,Q=1003,_=1003,F,O){super(null,Z,$,J,Q,_,X,Y,F,O);this.isDataTexture=!0,this.image={data:q,width:H,height:W},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let _0=new bq,r4=new bq;class sY{constructor(q=[],H=[]){this.uuid=xH(),this.bones=q.slice(0),this.boneInverses=H,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let q=this.bones,H=this.boneInverses;if(this.boneMatrices=new Float32Array(q.length*16),H.length===0)this.calculateInverses();else if(q.length!==H.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let W=0,X=this.bones.length;W<X;W++)this.boneInverses.push(new bq)}}calculateInverses(){this.boneInverses.length=0;for(let q=0,H=this.bones.length;q<H;q++){let W=new bq;if(this.bones[q])W.copy(this.bones[q].matrixWorld).invert();this.boneInverses.push(W)}}pose(){for(let q=0,H=this.bones.length;q<H;q++){let W=this.bones[q];if(W)W.matrixWorld.copy(this.boneInverses[q]).invert()}for(let q=0,H=this.bones.length;q<H;q++){let W=this.bones[q];if(W){if(W.parent&&W.parent.isBone)W.matrix.copy(W.parent.matrixWorld).invert(),W.matrix.multiply(W.matrixWorld);else W.matrix.copy(W.matrixWorld);W.matrix.decompose(W.position,W.quaternion,W.scale)}}}update(){let q=this.bones,H=this.boneInverses,W=this.boneMatrices,X=this.boneTexture;for(let Y=0,Z=q.length;Y<Z;Y++){let $=q[Y]?q[Y].matrixWorld:r4;_0.multiplyMatrices($,H[Y]),_0.toArray(W,Y*16)}if(X!==null)X.needsUpdate=!0}clone(){return new sY(this.bones,this.boneInverses)}computeBoneTexture(){let q=Math.sqrt(this.bones.length*4);q=Math.ceil(q/4)*4,q=Math.max(q,4);let H=new Float32Array(q*q*4);H.set(this.boneMatrices);let W=new oY(H,q,q,1023,1015);return W.needsUpdate=!0,this.boneMatrices=H,this.boneTexture=W,this}getBoneByName(q){for(let H=0,W=this.bones.length;H<W;H++){let X=this.bones[H];if(X.name===q)return X}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(q,H){this.uuid=q.uuid;for(let W=0,X=q.bones.length;W<X;W++){let Y=q.bones[W],Z=H[Y];if(Z===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",Y),Z=new nY;this.bones.push(Z),this.boneInverses.push(new bq().fromArray(q.boneInverses[W]))}return this.init(),this}toJSON(){let q={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};q.uuid=this.uuid;let H=this.bones,W=this.boneInverses;for(let X=0,Y=H.length;X<Y;X++){let Z=H[X];q.bones.push(Z.uuid);let $=W[X];q.boneInverses.push($.toArray())}return q}}class sX extends EH{constructor(q,H,W,X=1){super(q,H,W);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=X}copy(q){return super.copy(q),this.meshPerAttribute=q.meshPerAttribute,this}toJSON(){let q=super.toJSON();return q.meshPerAttribute=this.meshPerAttribute,q.isInstancedBufferAttribute=!0,q}}let eW=new bq,F0=new bq,iX=[],O0=new uH,e4=new bq,KX=new SH,zX=new pH;class U0 extends SH{constructor(q,H,W){super(q,H);this.isInstancedMesh=!0,this.instanceMatrix=new sX(new Float32Array(W*16),16),this.instanceColor=null,this.morphTexture=null,this.count=W,this.boundingBox=null,this.boundingSphere=null;for(let X=0;X<W;X++)this.setMatrixAt(X,e4)}computeBoundingBox(){let q=this.geometry,H=this.count;if(this.boundingBox===null)this.boundingBox=new uH;if(q.boundingBox===null)q.computeBoundingBox();this.boundingBox.makeEmpty();for(let W=0;W<H;W++)this.getMatrixAt(W,eW),O0.copy(q.boundingBox).applyMatrix4(eW),this.boundingBox.union(O0)}computeBoundingSphere(){let q=this.geometry,H=this.count;if(this.boundingSphere===null)this.boundingSphere=new pH;if(q.boundingSphere===null)q.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let W=0;W<H;W++)this.getMatrixAt(W,eW),zX.copy(q.boundingSphere).applyMatrix4(eW),this.boundingSphere.union(zX)}copy(q,H){if(super.copy(q,H),this.instanceMatrix.copy(q.instanceMatrix),q.morphTexture!==null)this.morphTexture=q.morphTexture.clone();if(q.instanceColor!==null)this.instanceColor=q.instanceColor.clone();if(this.count=q.count,q.boundingBox!==null)this.boundingBox=q.boundingBox.clone();if(q.boundingSphere!==null)this.boundingSphere=q.boundingSphere.clone();return this}getColorAt(q,H){H.fromArray(this.instanceColor.array,q*3)}getMatrixAt(q,H){H.fromArray(this.instanceMatrix.array,q*16)}getMorphAt(q,H){let W=H.morphTargetInfluences,X=this.morphTexture.source.data.data,Y=W.length+1,Z=q*Y+1;for(let $=0;$<W.length;$++)W[$]=X[Z+$]}raycast(q,H){let W=this.matrixWorld,X=this.count;if(KX.geometry=this.geometry,KX.material=this.material,KX.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(zX.copy(this.boundingSphere),zX.applyMatrix4(W),q.ray.intersectsSphere(zX)===!1)return;for(let Y=0;Y<X;Y++){this.getMatrixAt(Y,eW),F0.multiplyMatrices(W,eW),KX.matrixWorld=F0,KX.raycast(q,iX);for(let Z=0,$=iX.length;Z<$;Z++){let J=iX[Z];J.instanceId=Y,J.object=this,H.push(J)}iX.length=0}}setColorAt(q,H){if(this.instanceColor===null)this.instanceColor=new sX(new Float32Array(this.instanceMatrix.count*3).fill(1),3);H.toArray(this.instanceColor.array,q*3)}setMatrixAt(q,H){H.toArray(this.instanceMatrix.array,q*16)}setMorphAt(q,H){let W=H.morphTargetInfluences,X=W.length+1;if(this.morphTexture===null)this.morphTexture=new oY(new Float32Array(X*this.count),X,this.count,1028,1015);let Y=this.morphTexture.source.data.data,Z=0;for(let Q=0;Q<W.length;Q++)Z+=W[Q];let $=this.geometry.morphTargetsRelative?1:1-Z,J=X*q;Y[J]=$,Y.set(W,J+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}let iY=new k,q5=new k,H5=new hq;class RW{constructor(q=new k(1,0,0),H=0){this.isPlane=!0,this.normal=q,this.constant=H}set(q,H){return this.normal.copy(q),this.constant=H,this}setComponents(q,H,W,X){return this.normal.set(q,H,W),this.constant=X,this}setFromNormalAndCoplanarPoint(q,H){return this.normal.copy(q),this.constant=-H.dot(this.normal),this}setFromCoplanarPoints(q,H,W){let X=iY.subVectors(W,H).cross(q5.subVectors(q,H)).normalize();return this.setFromNormalAndCoplanarPoint(X,q),this}copy(q){return this.normal.copy(q.normal),this.constant=q.constant,this}normalize(){let q=1/this.normal.length();return this.normal.multiplyScalar(q),this.constant*=q,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(q){return this.normal.dot(q)+this.constant}distanceToSphere(q){return this.distanceToPoint(q.center)-q.radius}projectPoint(q,H){return H.copy(q).addScaledVector(this.normal,-this.distanceToPoint(q))}intersectLine(q,H){let W=q.delta(iY),X=this.normal.dot(W);if(X===0){if(this.distanceToPoint(q.start)===0)return H.copy(q.start);return null}let Y=-(q.start.dot(this.normal)+this.constant)/X;if(Y<0||Y>1)return null;return H.copy(q.start).addScaledVector(W,Y)}intersectsLine(q){let H=this.distanceToPoint(q.start),W=this.distanceToPoint(q.end);return H<0&&W>0||W<0&&H>0}intersectsBox(q){return q.intersectsPlane(this)}intersectsSphere(q){return q.intersectsPlane(this)}coplanarPoint(q){return q.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(q,H){let W=H||H5.getNormalMatrix(q),X=this.coplanarPoint(iY).applyMatrix4(q),Y=this.normal.applyMatrix3(W).normalize();return this.constant=-X.dot(Y),this}translate(q){return this.constant-=q.dot(this.normal),this}equals(q){return q.normal.equals(this.normal)&&q.constant===this.constant}clone(){return new this.constructor().copy(this)}}let SW=new pH,W5=new uq(0.5,0.5),aX=new k;class tX{constructor(q=new RW,H=new RW,W=new RW,X=new RW,Y=new RW,Z=new RW){this.planes=[q,H,W,X,Y,Z]}set(q,H,W,X,Y,Z){let $=this.planes;return $[0].copy(q),$[1].copy(H),$[2].copy(W),$[3].copy(X),$[4].copy(Y),$[5].copy(Z),this}copy(q){let H=this.planes;for(let W=0;W<6;W++)H[W].copy(q.planes[W]);return this}setFromProjectionMatrix(q,H=2000,W=!1){let X=this.planes,Y=q.elements,Z=Y[0],$=Y[1],J=Y[2],Q=Y[3],_=Y[4],F=Y[5],O=Y[6],U=Y[7],E=Y[8],R=Y[9],K=Y[10],B=Y[11],G=Y[12],S=Y[13],V=Y[14],P=Y[15];if(X[0].setComponents(Q-Z,U-_,B-E,P-G).normalize(),X[1].setComponents(Q+Z,U+_,B+E,P+G).normalize(),X[2].setComponents(Q+$,U+F,B+R,P+S).normalize(),X[3].setComponents(Q-$,U-F,B-R,P-S).normalize(),W)X[4].setComponents(J,O,K,V).normalize(),X[5].setComponents(Q-J,U-O,B-K,P-V).normalize();else if(X[4].setComponents(Q-J,U-O,B-K,P-V).normalize(),H===2000)X[5].setComponents(Q+J,U+O,B+K,P+V).normalize();else if(H===2001)X[5].setComponents(J,O,K,V).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+H);return this}intersectsObject(q){if(q.boundingSphere!==void 0){if(q.boundingSphere===null)q.computeBoundingSphere();SW.copy(q.boundingSphere).applyMatrix4(q.matrixWorld)}else{let H=q.geometry;if(H.boundingSphere===null)H.computeBoundingSphere();SW.copy(H.boundingSphere).applyMatrix4(q.matrixWorld)}return this.intersectsSphere(SW)}intersectsSprite(q){SW.center.set(0,0,0);let H=W5.distanceTo(q.center);return SW.radius=0.7071067811865476+H,SW.applyMatrix4(q.matrixWorld),this.intersectsSphere(SW)}intersectsSphere(q){let H=this.planes,W=q.center,X=-q.radius;for(let Y=0;Y<6;Y++)if(H[Y].distanceToPoint(W)<X)return!1;return!0}intersectsBox(q){let H=this.planes;for(let W=0;W<6;W++){let X=H[W];if(aX.x=X.normal.x>0?q.max.x:q.min.x,aX.y=X.normal.y>0?q.max.y:q.min.y,aX.z=X.normal.z>0?q.max.z:q.min.z,X.distanceToPoint(aX)<0)return!1}return!0}containsPoint(q){let H=this.planes;for(let W=0;W<6;W++)if(H[W].distanceToPoint(q)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rX extends nH{constructor(q){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jq(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(q)}copy(q){return super.copy(q),this.color.copy(q.color),this.map=q.map,this.linewidth=q.linewidth,this.linecap=q.linecap,this.linejoin=q.linejoin,this.fog=q.fog,this}}let eX=new k,qY=new k,B0=new bq,VX=new EX,HY=new pH,aY=new k,E0=new k;class WY extends ZH{constructor(q=new hH,H=new rX){super();this.isLine=!0,this.type="Line",this.geometry=q,this.material=H,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(q,H){return super.copy(q,H),this.material=Array.isArray(q.material)?q.material.slice():q.material,this.geometry=q.geometry,this}computeLineDistances(){let q=this.geometry;if(q.index===null){let H=q.attributes.position,W=[0];for(let X=1,Y=H.count;X<Y;X++)eX.fromBufferAttribute(H,X-1),qY.fromBufferAttribute(H,X),W[X]=W[X-1],W[X]+=eX.distanceTo(qY);q.setAttribute("lineDistance",new oH(W,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(q,H){let W=this.geometry,X=this.matrixWorld,Y=q.params.Line.threshold,Z=W.drawRange;if(W.boundingSphere===null)W.computeBoundingSphere();if(HY.copy(W.boundingSphere),HY.applyMatrix4(X),HY.radius+=Y,q.ray.intersectsSphere(HY)===!1)return;B0.copy(X).invert(),VX.copy(q.ray).applyMatrix4(B0);let $=Y/((this.scale.x+this.scale.y+this.scale.z)/3),J=$*$,Q=this.isLineSegments?2:1,_=W.index,O=W.attributes.position;if(_!==null){let U=Math.max(0,Z.start),E=Math.min(_.count,Z.start+Z.count);for(let R=U,K=E-1;R<K;R+=Q){let B=_.getX(R),G=_.getX(R+1),S=XY(this,q,VX,J,B,G,R);if(S)H.push(S)}if(this.isLineLoop){let R=_.getX(E-1),K=_.getX(U),B=XY(this,q,VX,J,R,K,E-1);if(B)H.push(B)}}else{let U=Math.max(0,Z.start),E=Math.min(O.count,Z.start+Z.count);for(let R=U,K=E-1;R<K;R+=Q){let B=XY(this,q,VX,J,R,R+1,R);if(B)H.push(B)}if(this.isLineLoop){let R=XY(this,q,VX,J,E-1,U,E-1);if(R)H.push(R)}}}updateMorphTargets(){let H=this.geometry.morphAttributes,W=Object.keys(H);if(W.length>0){let X=H[W[0]];if(X!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Y=0,Z=X.length;Y<Z;Y++){let $=X[Y].name||String(Y);this.morphTargetInfluences.push(0),this.morphTargetDictionary[$]=Y}}}}}function XY(q,H,W,X,Y,Z,$){let J=q.geometry.attributes.position;if(eX.fromBufferAttribute(J,Y),qY.fromBufferAttribute(J,Z),W.distanceSqToSegment(eX,qY,aY,E0)>X)return;aY.applyMatrix4(q.matrixWorld);let _=H.ray.origin.distanceTo(aY);if(_<H.near||_>H.far)return;return{distance:_,point:E0.clone().applyMatrix4(q.matrixWorld),index:$,face:null,faceIndex:null,barycoord:null,object:q}}let G0=new k,L0=new k;class tY extends WY{constructor(q,H){super(q,H);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let q=this.geometry;if(q.index===null){let H=q.attributes.position,W=[];for(let X=0,Y=H.count;X<Y;X+=2)G0.fromBufferAttribute(H,X),L0.fromBufferAttribute(H,X+1),W[X]=X===0?0:W[X-1],W[X+1]=W[X]+G0.distanceTo(L0);q.setAttribute("lineDistance",new oH(W,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R0 extends WY{constructor(q,H){super(q,H);this.isLineLoop=!0,this.type="LineLoop"}}class rY extends nH{constructor(q){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jq(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(q)}copy(q){return super.copy(q),this.color.copy(q.color),this.map=q.map,this.alphaMap=q.alphaMap,this.size=q.size,this.sizeAttenuation=q.sizeAttenuation,this.fog=q.fog,this}}let K0=new bq,eY=new EX,YY=new pH,ZY=new k;class z0 extends ZH{constructor(q=new hH,H=new rY){super();this.isPoints=!0,this.type="Points",this.geometry=q,this.material=H,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(q,H){return super.copy(q,H),this.material=Array.isArray(q.material)?q.material.slice():q.material,this.geometry=q.geometry,this}raycast(q,H){let W=this.geometry,X=this.matrixWorld,Y=q.params.Points.threshold,Z=W.drawRange;if(W.boundingSphere===null)W.computeBoundingSphere();if(YY.copy(W.boundingSphere),YY.applyMatrix4(X),YY.radius+=Y,q.ray.intersectsSphere(YY)===!1)return;K0.copy(X).invert(),eY.copy(q.ray).applyMatrix4(K0);let $=Y/((this.scale.x+this.scale.y+this.scale.z)/3),J=$*$,Q=W.index,F=W.attributes.position;if(Q!==null){let O=Math.max(0,Z.start),U=Math.min(Q.count,Z.start+Z.count);for(let E=O,R=U;E<R;E++){let K=Q.getX(E);ZY.fromBufferAttribute(F,K),V0(ZY,K,J,X,q,H,this)}}else{let O=Math.max(0,Z.start),U=Math.min(F.count,Z.start+Z.count);for(let E=O,R=U;E<R;E++)ZY.fromBufferAttribute(F,E),V0(ZY,E,J,X,q,H,this)}}updateMorphTargets(){let H=this.geometry.morphAttributes,W=Object.keys(H);if(W.length>0){let X=H[W[0]];if(X!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Y=0,Z=X.length;Y<Z;Y++){let $=X[Y].name||String(Y);this.morphTargetInfluences.push(0),this.morphTargetDictionary[$]=Y}}}}}function V0(q,H,W,X,Y,Z,$){let J=eY.distanceSqToPoint(q);if(J<W){let Q=new k;eY.closestPointToPoint(q,Q),Q.applyMatrix4(X);let _=Y.ray.origin.distanceTo(Q);if(_<Y.near||_>Y.far)return;Z.push({distance:_,distanceToRay:Math.sqrt(J),point:Q,index:H,face:null,faceIndex:null,barycoord:null,object:$})}}class qZ extends BH{constructor(q,H,W=1014,X,Y,Z,$=1003,J=1003,Q,_=1026,F=1){if(_!==1026&&_!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let O={width:q,height:H,depth:F};super(O,X,Y,Z,$,J,_,W,Q);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(q){return super.copy(q),this.source=new jX(Object.assign({},q.image)),this.compareFunction=q.compareFunction,this}toJSON(q){let H=super.toJSON(q);if(this.compareFunction!==null)H.compareFunction=this.compareFunction;return H}}class $Y extends hH{constructor(q=1,H=1,W=1,X=1){super();this.type="PlaneGeometry",this.parameters={width:q,height:H,widthSegments:W,heightSegments:X};let Y=q/2,Z=H/2,$=Math.floor(W),J=Math.floor(X),Q=$+1,_=J+1,F=q/$,O=H/J,U=[],E=[],R=[],K=[];for(let B=0;B<_;B++){let G=B*O-Z;for(let S=0;S<Q;S++){let V=S*F-Y;E.push(V,-G,0),R.push(0,0,1),K.push(S/$),K.push(1-B/J)}}for(let B=0;B<J;B++)for(let G=0;G<$;G++){let S=G+Q*B,V=G+Q*(B+1),P=G+1+Q*(B+1),b=G+1+Q*B;U.push(S,V,b),U.push(V,P,b)}this.setIndex(U),this.setAttribute("position",new oH(E,3)),this.setAttribute("normal",new oH(R,3)),this.setAttribute("uv",new oH(K,2))}copy(q){return super.copy(q),this.parameters=Object.assign({},q.parameters),this}static fromJSON(q){return new $Y(q.width,q.height,q.widthSegments,q.heightSegments)}}class C0 extends hH{constructor(q=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:q},q!==null){let H=[],W=new Set,X=new k,Y=new k;if(q.index!==null){let Z=q.attributes.position,$=q.index,J=q.groups;if(J.length===0)J=[{start:0,count:$.count,materialIndex:0}];for(let Q=0,_=J.length;Q<_;++Q){let F=J[Q],O=F.start,U=F.count;for(let E=O,R=O+U;E<R;E+=3)for(let K=0;K<3;K++){let B=$.getX(E+K),G=$.getX(E+(K+1)%3);if(X.fromBufferAttribute(Z,B),Y.fromBufferAttribute(Z,G),N0(X,Y,W)===!0)H.push(X.x,X.y,X.z),H.push(Y.x,Y.y,Y.z)}}}else{let Z=q.attributes.position;for(let $=0,J=Z.count/3;$<J;$++)for(let Q=0;Q<3;Q++){let _=3*$+Q,F=3*$+(Q+1)%3;if(X.fromBufferAttribute(Z,_),Y.fromBufferAttribute(Z,F),N0(X,Y,W)===!0)H.push(X.x,X.y,X.z),H.push(Y.x,Y.y,Y.z)}}this.setAttribute("position",new oH(H,3))}}copy(q){return super.copy(q),this.parameters=Object.assign({},q.parameters),this}}function N0(q,H,W){let X=`${q.x},${q.y},${q.z}-${H.x},${H.y},${H.z}`,Y=`${H.x},${H.y},${H.z}-${q.x},${q.y},${q.z}`;if(W.has(X)===!0||W.has(Y)===!0)return!1;else return W.add(X),W.add(Y),!0}class JY extends nH{constructor(q){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jq(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jq(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new uq(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vH,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(q)}copy(q){return super.copy(q),this.defines={STANDARD:""},this.color.copy(q.color),this.roughness=q.roughness,this.metalness=q.metalness,this.map=q.map,this.lightMap=q.lightMap,this.lightMapIntensity=q.lightMapIntensity,this.aoMap=q.aoMap,this.aoMapIntensity=q.aoMapIntensity,this.emissive.copy(q.emissive),this.emissiveMap=q.emissiveMap,this.emissiveIntensity=q.emissiveIntensity,this.bumpMap=q.bumpMap,this.bumpScale=q.bumpScale,this.normalMap=q.normalMap,this.normalMapType=q.normalMapType,this.normalScale.copy(q.normalScale),this.displacementMap=q.displacementMap,this.displacementScale=q.displacementScale,this.displacementBias=q.displacementBias,this.roughnessMap=q.roughnessMap,this.metalnessMap=q.metalnessMap,this.alphaMap=q.alphaMap,this.envMap=q.envMap,this.envMapRotation.copy(q.envMapRotation),this.envMapIntensity=q.envMapIntensity,this.wireframe=q.wireframe,this.wireframeLinewidth=q.wireframeLinewidth,this.wireframeLinecap=q.wireframeLinecap,this.wireframeLinejoin=q.wireframeLinejoin,this.flatShading=q.flatShading,this.fog=q.fog,this}}class sH extends JY{constructor(q){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new uq(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gq(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(H){this.ior=(1+0.4*H)/(1-0.4*H)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jq(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jq(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jq(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(q)}get anisotropy(){return this._anisotropy}set anisotropy(q){if(this._anisotropy>0!==q>0)this.version++;this._anisotropy=q}get clearcoat(){return this._clearcoat}set clearcoat(q){if(this._clearcoat>0!==q>0)this.version++;this._clearcoat=q}get iridescence(){return this._iridescence}set iridescence(q){if(this._iridescence>0!==q>0)this.version++;this._iridescence=q}get dispersion(){return this._dispersion}set dispersion(q){if(this._dispersion>0!==q>0)this.version++;this._dispersion=q}get sheen(){return this._sheen}set sheen(q){if(this._sheen>0!==q>0)this.version++;this._sheen=q}get transmission(){return this._transmission}set transmission(q){if(this._transmission>0!==q>0)this.version++;this._transmission=q}copy(q){return super.copy(q),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=q.anisotropy,this.anisotropyRotation=q.anisotropyRotation,this.anisotropyMap=q.anisotropyMap,this.clearcoat=q.clearcoat,this.clearcoatMap=q.clearcoatMap,this.clearcoatRoughness=q.clearcoatRoughness,this.clearcoatRoughnessMap=q.clearcoatRoughnessMap,this.clearcoatNormalMap=q.clearcoatNormalMap,this.clearcoatNormalScale.copy(q.clearcoatNormalScale),this.dispersion=q.dispersion,this.ior=q.ior,this.iridescence=q.iridescence,this.iridescenceMap=q.iridescenceMap,this.iridescenceIOR=q.iridescenceIOR,this.iridescenceThicknessRange=[...q.iridescenceThicknessRange],this.iridescenceThicknessMap=q.iridescenceThicknessMap,this.sheen=q.sheen,this.sheenColor.copy(q.sheenColor),this.sheenColorMap=q.sheenColorMap,this.sheenRoughness=q.sheenRoughness,this.sheenRoughnessMap=q.sheenRoughnessMap,this.transmission=q.transmission,this.transmissionMap=q.transmissionMap,this.thickness=q.thickness,this.thicknessMap=q.thicknessMap,this.attenuationDistance=q.attenuationDistance,this.attenuationColor.copy(q.attenuationColor),this.specularIntensity=q.specularIntensity,this.specularIntensityMap=q.specularIntensityMap,this.specularColor.copy(q.specularColor),this.specularColorMap=q.specularColorMap,this}}class M0 extends nH{constructor(q){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(q)}copy(q){return super.copy(q),this.depthPacking=q.depthPacking,this.map=q.map,this.alphaMap=q.alphaMap,this.displacementMap=q.displacementMap,this.displacementScale=q.displacementScale,this.displacementBias=q.displacementBias,this.wireframe=q.wireframe,this.wireframeLinewidth=q.wireframeLinewidth,this}}class S0 extends nH{constructor(q){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(q)}copy(q){return super.copy(q),this.map=q.map,this.alphaMap=q.alphaMap,this.displacementMap=q.displacementMap,this.displacementScale=q.displacementScale,this.displacementBias=q.displacementBias,this}}function QY(q,H){if(!q||q.constructor===H)return q;if(typeof H.BYTES_PER_ELEMENT==="number")return new H(q);return Array.prototype.slice.call(q)}function X5(q){return ArrayBuffer.isView(q)&&!(q instanceof DataView)}function Y5(q){function H(Y,Z){return q[Y]-q[Z]}let W=q.length,X=new Array(W);for(let Y=0;Y!==W;++Y)X[Y]=Y;return X.sort(H),X}function P0(q,H,W){let X=q.length,Y=new q.constructor(X);for(let Z=0,$=0;$!==X;++Z){let J=W[Z]*H;for(let Q=0;Q!==H;++Q)Y[$++]=q[J+Q]}return Y}function T0(q,H,W,X){let Y=1,Z=q[0];while(Z!==void 0&&Z[X]===void 0)Z=q[Y++];if(Z===void 0)return;let $=Z[X];if($===void 0)return;if(Array.isArray($))do{if($=Z[X],$!==void 0)H.push(Z.time),W.push(...$);Z=q[Y++]}while(Z!==void 0);else if($.toArray!==void 0)do{if($=Z[X],$!==void 0)H.push(Z.time),$.toArray(W,W.length);Z=q[Y++]}while(Z!==void 0);else do{if($=Z[X],$!==void 0)H.push(Z.time),W.push($);Z=q[Y++]}while(Z!==void 0)}class qX{constructor(q,H,W,X){this.parameterPositions=q,this._cachedIndex=0,this.resultBuffer=X!==void 0?X:new H.constructor(W),this.sampleValues=H,this.valueSize=W,this.settings=null,this.DefaultSettings_={}}evaluate(q){let H=this.parameterPositions,W=this._cachedIndex,X=H[W],Y=H[W-1];W:{q:{let Z;H:{X:if(!(q<X)){for(let $=W+2;;){if(X===void 0){if(q<Y)break X;return W=H.length,this._cachedIndex=W,this.copySampleValue_(W-1)}if(W===$)break;if(Y=X,X=H[++W],q<X)break q}Z=H.length;break H}if(!(q>=Y)){let $=H[1];if(q<$)W=2,Y=$;for(let J=W-2;;){if(Y===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===J)break;if(X=Y,Y=H[--W-1],q>=Y)break q}Z=W,W=0;break H}break W}while(W<Z){let $=W+Z>>>1;if(q<H[$])Z=$;else W=$+1}if(X=H[W],Y=H[W-1],Y===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(X===void 0)return W=H.length,this._cachedIndex=W,this.copySampleValue_(W-1)}this._cachedIndex=W,this.intervalChanged_(W,Y,X)}return this.interpolate_(W,Y,q,X)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(q){let H=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=q*X;for(let Z=0;Z!==X;++Z)H[Z]=W[Y+Z];return H}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w0 extends qX{constructor(q,H,W,X){super(q,H,W,X);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(q,H,W){let X=this.parameterPositions,Y=q-2,Z=q+1,$=X[Y],J=X[Z];if($===void 0)switch(this.getSettings_().endingStart){case 2401:Y=q,$=2*H-W;break;case 2402:Y=X.length-2,$=H+X[Y]-X[Y+1];break;default:Y=q,$=W}if(J===void 0)switch(this.getSettings_().endingEnd){case 2401:Z=q,J=2*W-H;break;case 2402:Z=1,J=W+X[1]-X[0];break;default:Z=q-1,J=H}let Q=(W-H)*0.5,_=this.valueSize;this._weightPrev=Q/(H-$),this._weightNext=Q/(J-W),this._offsetPrev=Y*_,this._offsetNext=Z*_}interpolate_(q,H,W,X){let Y=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,J=q*$,Q=J-$,_=this._offsetPrev,F=this._offsetNext,O=this._weightPrev,U=this._weightNext,E=(W-H)/(X-H),R=E*E,K=R*E,B=-O*K+2*O*R-O*E,G=(1+O)*K+(-1.5-2*O)*R+(-0.5+O)*E+1,S=(-1-U)*K+(1.5+U)*R+0.5*E,V=U*K-U*R;for(let P=0;P!==$;++P)Y[P]=B*Z[_+P]+G*Z[Q+P]+S*Z[J+P]+V*Z[F+P];return Y}}class A0 extends qX{constructor(q,H,W,X){super(q,H,W,X)}interpolate_(q,H,W,X){let Y=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,J=q*$,Q=J-$,_=(W-H)/(X-H),F=1-_;for(let O=0;O!==$;++O)Y[O]=Z[Q+O]*F+Z[J+O]*_;return Y}}class j0 extends qX{constructor(q,H,W,X){super(q,H,W,X)}interpolate_(q){return this.copySampleValue_(q-1)}}class bH{constructor(q,H,W,X){if(q===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(H===void 0||H.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+q);this.name=q,this.times=QY(H,this.TimeBufferType),this.values=QY(W,this.ValueBufferType),this.setInterpolation(X||this.DefaultInterpolation)}static toJSON(q){let H=q.constructor,W;if(H.toJSON!==this.toJSON)W=H.toJSON(q);else{W={name:q.name,times:QY(q.times,Array),values:QY(q.values,Array)};let X=q.getInterpolation();if(X!==q.DefaultInterpolation)W.interpolation=X}return W.type=q.ValueTypeName,W}InterpolantFactoryMethodDiscrete(q){return new j0(this.times,this.values,this.getValueSize(),q)}InterpolantFactoryMethodLinear(q){return new A0(this.times,this.values,this.getValueSize(),q)}InterpolantFactoryMethodSmooth(q){return new w0(this.times,this.values,this.getValueSize(),q)}setInterpolation(q){let H;switch(q){case 2300:H=this.InterpolantFactoryMethodDiscrete;break;case 2301:H=this.InterpolantFactoryMethodLinear;break;case 2302:H=this.InterpolantFactoryMethodSmooth;break}if(H===void 0){let W="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(q!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(W);return console.warn("THREE.KeyframeTrack:",W),this}return this.createInterpolant=H,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(q){if(q!==0){let H=this.times;for(let W=0,X=H.length;W!==X;++W)H[W]+=q}return this}scale(q){if(q!==1){let H=this.times;for(let W=0,X=H.length;W!==X;++W)H[W]*=q}return this}trim(q,H){let W=this.times,X=W.length,Y=0,Z=X-1;while(Y!==X&&W[Y]<q)++Y;while(Z!==-1&&W[Z]>H)--Z;if(++Z,Y!==0||Z!==X){if(Y>=Z)Z=Math.max(Z,1),Y=Z-1;let $=this.getValueSize();this.times=W.slice(Y,Z),this.values=this.values.slice(Y*$,Z*$)}return this}validate(){let q=!0,H=this.getValueSize();if(H-Math.floor(H)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),q=!1;let W=this.times,X=this.values,Y=W.length;if(Y===0)console.error("THREE.KeyframeTrack: Track is empty.",this),q=!1;let Z=null;for(let $=0;$!==Y;$++){let J=W[$];if(typeof J==="number"&&isNaN(J)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,$,J),q=!1;break}if(Z!==null&&Z>J){console.error("THREE.KeyframeTrack: Out of order keys.",this,$,J,Z),q=!1;break}Z=J}if(X!==void 0){if(X5(X))for(let $=0,J=X.length;$!==J;++$){let Q=X[$];if(isNaN(Q)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,$,Q),q=!1;break}}}return q}optimize(){let q=this.times.slice(),H=this.values.slice(),W=this.getValueSize(),X=this.getInterpolation()===2302,Y=q.length-1,Z=1;for(let $=1;$<Y;++$){let J=!1,Q=q[$],_=q[$+1];if(Q!==_&&($!==1||Q!==q[0]))if(!X){let F=$*W,O=F-W,U=F+W;for(let E=0;E!==W;++E){let R=H[F+E];if(R!==H[O+E]||R!==H[U+E]){J=!0;break}}}else J=!0;if(J){if($!==Z){q[Z]=q[$];let F=$*W,O=Z*W;for(let U=0;U!==W;++U)H[O+U]=H[F+U]}++Z}}if(Y>0){q[Z]=q[Y];for(let $=Y*W,J=Z*W,Q=0;Q!==W;++Q)H[J+Q]=H[$+Q];++Z}if(Z!==q.length)this.times=q.slice(0,Z),this.values=H.slice(0,Z*W);else this.times=q,this.values=H;return this}clone(){let q=this.times.slice(),H=this.values.slice(),X=new this.constructor(this.name,q,H);return X.createInterpolant=this.createInterpolant,X}}bH.prototype.ValueTypeName="",bH.prototype.TimeBufferType=Float32Array,bH.prototype.ValueBufferType=Float32Array,bH.prototype.DefaultInterpolation=2301;class PW extends bH{constructor(q,H,W){super(q,H,W)}}PW.prototype.ValueTypeName="bool",PW.prototype.ValueBufferType=Array,PW.prototype.DefaultInterpolation=2300,PW.prototype.InterpolantFactoryMethodLinear=void 0,PW.prototype.InterpolantFactoryMethodSmooth=void 0;class HZ extends bH{constructor(q,H,W,X){super(q,H,W,X)}}HZ.prototype.ValueTypeName="color";class TW extends bH{constructor(q,H,W,X){super(q,H,W,X)}}TW.prototype.ValueTypeName="number";class k0 extends qX{constructor(q,H,W,X){super(q,H,W,X)}interpolate_(q,H,W,X){let Y=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,J=(W-H)/(X-H),Q=q*$;for(let _=Q+$;Q!==_;Q+=4)kH.slerpFlat(Y,0,Z,Q-$,Z,Q,J);return Y}}class wW extends bH{constructor(q,H,W,X){super(q,H,W,X)}InterpolantFactoryMethodLinear(q){return new k0(this.times,this.values,this.getValueSize(),q)}}wW.prototype.ValueTypeName="quaternion",wW.prototype.InterpolantFactoryMethodSmooth=void 0;class AW extends bH{constructor(q,H,W){super(q,H,W)}}AW.prototype.ValueTypeName="string",AW.prototype.ValueBufferType=Array,AW.prototype.DefaultInterpolation=2300,AW.prototype.InterpolantFactoryMethodLinear=void 0,AW.prototype.InterpolantFactoryMethodSmooth=void 0;class jW extends bH{constructor(q,H,W,X){super(q,H,W,X)}}jW.prototype.ValueTypeName="vector";class v0{constructor(q="",H=-1,W=[],X=2500){if(this.name=q,this.tracks=W,this.duration=H,this.blendMode=X,this.uuid=xH(),this.duration<0)this.resetDuration()}static parse(q){let H=[],W=q.tracks,X=1/(q.fps||1);for(let Z=0,$=W.length;Z!==$;++Z)H.push($5(W[Z]).scale(X));let Y=new this(q.name,q.duration,H,q.blendMode);return Y.uuid=q.uuid,Y}static toJSON(q){let H=[],W=q.tracks,X={name:q.name,duration:q.duration,tracks:H,uuid:q.uuid,blendMode:q.blendMode};for(let Y=0,Z=W.length;Y!==Z;++Y)H.push(bH.toJSON(W[Y]));return X}static CreateFromMorphTargetSequence(q,H,W,X){let Y=H.length,Z=[];for(let $=0;$<Y;$++){let J=[],Q=[];J.push(($+Y-1)%Y,$,($+1)%Y),Q.push(0,1,0);let _=Y5(J);if(J=P0(J,1,_),Q=P0(Q,1,_),!X&&J[0]===0)J.push(Y),Q.push(Q[0]);Z.push(new TW(".morphTargetInfluences["+H[$].name+"]",J,Q).scale(1/W))}return new this(q,-1,Z)}static findByName(q,H){let W=q;if(!Array.isArray(q)){let X=q;W=X.geometry&&X.geometry.animations||X.animations}for(let X=0;X<W.length;X++)if(W[X].name===H)return W[X];return null}static CreateClipsFromMorphTargetSequences(q,H,W){let X={},Y=/^([\w-]*?)([\d]+)$/;for(let $=0,J=q.length;$<J;$++){let Q=q[$],_=Q.name.match(Y);if(_&&_.length>1){let F=_[1],O=X[F];if(!O)X[F]=O=[];O.push(Q)}}let Z=[];for(let $ in X)Z.push(this.CreateFromMorphTargetSequence($,X[$],H,W));return Z}static parseAnimation(q,H){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!q)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let W=function(F,O,U,E,R){if(U.length!==0){let K=[],B=[];if(T0(U,K,B,E),K.length!==0)R.push(new F(O,K,B))}},X=[],Y=q.name||"default",Z=q.fps||30,$=q.blendMode,J=q.length||-1,Q=q.hierarchy||[];for(let F=0;F<Q.length;F++){let O=Q[F].keys;if(!O||O.length===0)continue;if(O[0].morphTargets){let U={},E;for(E=0;E<O.length;E++)if(O[E].morphTargets)for(let R=0;R<O[E].morphTargets.length;R++)U[O[E].morphTargets[R]]=-1;for(let R in U){let K=[],B=[];for(let G=0;G!==O[E].morphTargets.length;++G){let S=O[E];K.push(S.time),B.push(S.morphTarget===R?1:0)}X.push(new TW(".morphTargetInfluence["+R+"]",K,B))}J=U.length*Z}else{let U=".bones["+H[F].name+"]";W(jW,U+".position",O,"pos",X),W(wW,U+".quaternion",O,"rot",X),W(jW,U+".scale",O,"scl",X)}}if(X.length===0)return null;return new this(Y,J,X,$)}resetDuration(){let q=this.tracks,H=0;for(let W=0,X=q.length;W!==X;++W){let Y=this.tracks[W];H=Math.max(H,Y.times[Y.times.length-1])}return this.duration=H,this}trim(){for(let q=0;q<this.tracks.length;q++)this.tracks[q].trim(0,this.duration);return this}validate(){let q=!0;for(let H=0;H<this.tracks.length;H++)q=q&&this.tracks[H].validate();return q}optimize(){for(let q=0;q<this.tracks.length;q++)this.tracks[q].optimize();return this}clone(){let q=[];for(let H=0;H<this.tracks.length;H++)q.push(this.tracks[H].clone());return new this.constructor(this.name,this.duration,q,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Z5(q){switch(q.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return TW;case"vector":case"vector2":case"vector3":case"vector4":return jW;case"color":return HZ;case"quaternion":return wW;case"bool":case"boolean":return PW;case"string":return AW}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+q)}function $5(q){if(q.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let H=Z5(q.type);if(q.times===void 0){let W=[],X=[];T0(q.keys,W,X,"value"),q.times=W,q.values=X}if(H.parse!==void 0)return H.parse(q);else return new H(q.name,q.times,q.values,q.interpolation)}let $W={enabled:!1,files:{},add:function(q,H){if(this.enabled===!1)return;this.files[q]=H},get:function(q){if(this.enabled===!1)return;return this.files[q]},remove:function(q){delete this.files[q]},clear:function(){this.files={}}};class I0{constructor(q,H,W){let X=this,Y=!1,Z=0,$=0,J=void 0,Q=[];this.onStart=void 0,this.onLoad=q,this.onProgress=H,this.onError=W,this.abortController=new AbortController,this.itemStart=function(_){if($++,Y===!1){if(X.onStart!==void 0)X.onStart(_,Z,$)}Y=!0},this.itemEnd=function(_){if(Z++,X.onProgress!==void 0)X.onProgress(_,Z,$);if(Z===$){if(Y=!1,X.onLoad!==void 0)X.onLoad()}},this.itemError=function(_){if(X.onError!==void 0)X.onError(_)},this.resolveURL=function(_){if(J)return J(_);return _},this.setURLModifier=function(_){return J=_,this},this.addHandler=function(_,F){return Q.push(_,F),this},this.removeHandler=function(_){let F=Q.indexOf(_);if(F!==-1)Q.splice(F,2);return this},this.getHandler=function(_){for(let F=0,O=Q.length;F<O;F+=2){let U=Q[F],E=Q[F+1];if(U.global)U.lastIndex=0;if(U.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}let J5=new I0;class KW{constructor(q){this.manager=q!==void 0?q:J5,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(q,H){let W=this;return new Promise(function(X,Y){W.load(q,X,H,Y)})}parse(){}setCrossOrigin(q){return this.crossOrigin=q,this}setWithCredentials(q){return this.withCredentials=q,this}setPath(q){return this.path=q,this}setResourcePath(q){return this.resourcePath=q,this}setRequestHeader(q){return this.requestHeader=q,this}abort(){return this}}KW.DEFAULT_MATERIAL_NAME="__DEFAULT";let JW={};class h0 extends Error{constructor(q,H){super(q);this.response=H}}class CX extends KW{constructor(q){super(q);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(q,H,W,X){if(q===void 0)q="";if(this.path!==void 0)q=this.path+q;q=this.manager.resolveURL(q);let Y=$W.get(`file:${q}`);if(Y!==void 0)return this.manager.itemStart(q),setTimeout(()=>{if(H)H(Y);this.manager.itemEnd(q)},0),Y;if(JW[q]!==void 0){JW[q].push({onLoad:H,onProgress:W,onError:X});return}JW[q]=[],JW[q].push({onLoad:H,onProgress:W,onError:X});let Z=new Request(q,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),$=this.mimeType,J=this.responseType;fetch(Z).then((Q)=>{if(Q.status===200||Q.status===0){if(Q.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream==="undefined"||Q.body===void 0||Q.body.getReader===void 0)return Q;let _=JW[q],F=Q.body.getReader(),O=Q.headers.get("X-File-Size")||Q.headers.get("Content-Length"),U=O?parseInt(O):0,E=U!==0,R=0,K=new ReadableStream({start(B){G();function G(){F.read().then(({done:S,value:V})=>{if(S)B.close();else{R+=V.byteLength;let P=new ProgressEvent("progress",{lengthComputable:E,loaded:R,total:U});for(let b=0,T=_.length;b<T;b++){let j=_[b];if(j.onProgress)j.onProgress(P)}B.enqueue(V),G()}},(S)=>{B.error(S)})}}});return new Response(K)}else throw new h0(`fetch for "${Q.url}" responded with ${Q.status}: ${Q.statusText}`,Q)}).then((Q)=>{switch(J){case"arraybuffer":return Q.arrayBuffer();case"blob":return Q.blob();case"document":return Q.text().then((_)=>{return new DOMParser().parseFromString(_,$)});case"json":return Q.json();default:if($==="")return Q.text();else{let F=/charset="?([^;"\s]*)"?/i.exec($),O=F&&F[1]?F[1].toLowerCase():void 0,U=new TextDecoder(O);return Q.arrayBuffer().then((E)=>U.decode(E))}}}).then((Q)=>{$W.add(`file:${q}`,Q);let _=JW[q];delete JW[q];for(let F=0,O=_.length;F<O;F++){let U=_[F];if(U.onLoad)U.onLoad(Q)}}).catch((Q)=>{let _=JW[q];if(_===void 0)throw this.manager.itemError(q),Q;delete JW[q];for(let F=0,O=_.length;F<O;F++){let U=_[F];if(U.onError)U.onError(Q)}this.manager.itemError(q)}).finally(()=>{this.manager.itemEnd(q)}),this.manager.itemStart(q)}setResponseType(q){return this.responseType=q,this}setMimeType(q){return this.mimeType=q,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let HX=new WeakMap;class b0 extends KW{constructor(q){super(q)}load(q,H,W,X){if(this.path!==void 0)q=this.path+q;q=this.manager.resolveURL(q);let Y=this,Z=$W.get(`image:${q}`);if(Z!==void 0){if(Z.complete===!0)Y.manager.itemStart(q),setTimeout(function(){if(H)H(Z);Y.manager.itemEnd(q)},0);else{let F=HX.get(Z);if(F===void 0)F=[],HX.set(Z,F);F.push({onLoad:H,onError:X})}return Z}let $=OX("img");function J(){if(_(),H)H(this);let F=HX.get(this)||[];for(let O=0;O<F.length;O++){let U=F[O];if(U.onLoad)U.onLoad(this)}HX.delete(this),Y.manager.itemEnd(q)}function Q(F){if(_(),X)X(F);$W.remove(`image:${q}`);let O=HX.get(this)||[];for(let U=0;U<O.length;U++){let E=O[U];if(E.onError)E.onError(F)}HX.delete(this),Y.manager.itemError(q),Y.manager.itemEnd(q)}function _(){$.removeEventListener("load",J,!1),$.removeEventListener("error",Q,!1)}if($.addEventListener("load",J,!1),$.addEventListener("error",Q,!1),q.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)$.crossOrigin=this.crossOrigin}return $W.add(`image:${q}`,$),Y.manager.itemStart(q),$.src=q,$}}class D0 extends KW{constructor(q){super(q)}load(q,H,W,X){let Y=new BH,Z=new b0(this.manager);return Z.setCrossOrigin(this.crossOrigin),Z.setPath(this.path),Z.load(q,function($){if(Y.image=$,Y.needsUpdate=!0,H!==void 0)H(Y)},W,X),Y}}class NX extends ZH{constructor(q,H=1){super();this.isLight=!0,this.type="Light",this.color=new jq(q),this.intensity=H}dispose(){}copy(q,H){return super.copy(q,H),this.color.copy(q.color),this.intensity=q.intensity,this}toJSON(q){let H=super.toJSON(q);if(H.object.color=this.color.getHex(),H.object.intensity=this.intensity,this.groundColor!==void 0)H.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)H.object.distance=this.distance;if(this.angle!==void 0)H.object.angle=this.angle;if(this.decay!==void 0)H.object.decay=this.decay;if(this.penumbra!==void 0)H.object.penumbra=this.penumbra;if(this.shadow!==void 0)H.object.shadow=this.shadow.toJSON();if(this.target!==void 0)H.object.target=this.target.uuid;return H}}let WZ=new bq,y0=new k,g0=new k;class _Y{constructor(q){this.camera=q,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new uq(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new bq,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tX,this._frameExtents=new uq(1,1),this._viewportCount=1,this._viewports=[new oq(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(q){let H=this.camera,W=this.matrix;if(y0.setFromMatrixPosition(q.matrixWorld),H.position.copy(y0),g0.setFromMatrixPosition(q.target.matrixWorld),H.lookAt(g0),H.updateMatrixWorld(),WZ.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),this._frustum.setFromProjectionMatrix(WZ,H.coordinateSystem,H.reversedDepth),H.reversedDepth)W.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else W.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);W.multiply(WZ)}getViewport(q){return this._viewports[q]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(q){return this.camera=q.camera.clone(),this.intensity=q.intensity,this.bias=q.bias,this.radius=q.radius,this.autoUpdate=q.autoUpdate,this.needsUpdate=q.needsUpdate,this.normalBias=q.normalBias,this.blurSamples=q.blurSamples,this.mapSize.copy(q.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let q={};if(this.intensity!==1)q.intensity=this.intensity;if(this.bias!==0)q.bias=this.bias;if(this.normalBias!==0)q.normalBias=this.normalBias;if(this.radius!==1)q.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)q.mapSize=this.mapSize.toArray();return q.camera=this.camera.toJSON(!1).object,delete q.camera.matrix,q}}class x0 extends _Y{constructor(){super(new CH(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(q){let H=this.camera,W=gW*2*q.angle*this.focus,X=this.mapSize.width/this.mapSize.height*this.aspect,Y=q.distance||H.far;if(W!==H.fov||X!==H.aspect||Y!==H.far)H.fov=W,H.aspect=X,H.far=Y,H.updateProjectionMatrix();super.updateMatrices(q)}copy(q){return super.copy(q),this.focus=q.focus,this}}class l0 extends NX{constructor(q,H,W=0,X=Math.PI/3,Y=0,Z=2){super(q,H);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ZH.DEFAULT_UP),this.updateMatrix(),this.target=new ZH,this.distance=W,this.angle=X,this.penumbra=Y,this.decay=Z,this.map=null,this.shadow=new x0}get power(){return this.intensity*Math.PI}set power(q){this.intensity=q/Math.PI}dispose(){this.shadow.dispose()}copy(q,H){return super.copy(q,H),this.distance=q.distance,this.angle=q.angle,this.penumbra=q.penumbra,this.decay=q.decay,this.target=q.target.clone(),this.shadow=q.shadow.clone(),this}}let u0=new bq,MX=new k,XZ=new k;class f0 extends _Y{constructor(){super(new CH(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new uq(4,2),this._viewportCount=6,this._viewports=[new oq(2,1,1,1),new oq(0,1,1,1),new oq(3,1,1,1),new oq(1,1,1,1),new oq(3,0,1,1),new oq(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(q,H=0){let W=this.camera,X=this.matrix,Y=q.distance||W.far;if(Y!==W.far)W.far=Y,W.updateProjectionMatrix();MX.setFromMatrixPosition(q.matrixWorld),W.position.copy(MX),XZ.copy(W.position),XZ.add(this._cubeDirections[H]),W.up.copy(this._cubeUps[H]),W.lookAt(XZ),W.updateMatrixWorld(),X.makeTranslation(-MX.x,-MX.y,-MX.z),u0.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),this._frustum.setFromProjectionMatrix(u0,W.coordinateSystem,W.reversedDepth)}}class p0 extends NX{constructor(q,H,W=0,X=2){super(q,H);this.isPointLight=!0,this.type="PointLight",this.distance=W,this.decay=X,this.shadow=new f0}get power(){return this.intensity*4*Math.PI}set power(q){this.intensity=q/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(q,H){return super.copy(q,H),this.distance=q.distance,this.decay=q.decay,this.shadow=q.shadow.clone(),this}}class SX extends fY{constructor(q=-1,H=1,W=1,X=-1,Y=0.1,Z=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=q,this.right=H,this.top=W,this.bottom=X,this.near=Y,this.far=Z,this.updateProjectionMatrix()}copy(q,H){return super.copy(q,H),this.left=q.left,this.right=q.right,this.top=q.top,this.bottom=q.bottom,this.near=q.near,this.far=q.far,this.zoom=q.zoom,this.view=q.view===null?null:Object.assign({},q.view),this}setViewOffset(q,H,W,X,Y,Z){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=q,this.view.fullHeight=H,this.view.offsetX=W,this.view.offsetY=X,this.view.width=Y,this.view.height=Z,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let q=(this.right-this.left)/(2*this.zoom),H=(this.top-this.bottom)/(2*this.zoom),W=(this.right+this.left)/2,X=(this.top+this.bottom)/2,Y=W-q,Z=W+q,$=X+H,J=X-H;if(this.view!==null&&this.view.enabled){let Q=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Y+=Q*this.view.offsetX,Z=Y+Q*this.view.width,$-=_*this.view.offsetY,J=$-_*this.view.height}this.projectionMatrix.makeOrthographic(Y,Z,$,J,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(q){let H=super.toJSON(q);if(H.object.zoom=this.zoom,H.object.left=this.left,H.object.right=this.right,H.object.top=this.top,H.object.bottom=this.bottom,H.object.near=this.near,H.object.far=this.far,this.view!==null)H.object.view=Object.assign({},this.view);return H}}class m0 extends _Y{constructor(){super(new SX(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class YZ extends NX{constructor(q,H){super(q,H);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ZH.DEFAULT_UP),this.updateMatrix(),this.target=new ZH,this.shadow=new m0}dispose(){this.shadow.dispose()}copy(q){return super.copy(q),this.target=q.target.clone(),this.shadow=q.shadow.clone(),this}}class c0 extends NX{constructor(q,H){super(q,H);this.isAmbientLight=!0,this.type="AmbientLight"}}class WX{static extractUrlBase(q){let H=q.lastIndexOf("/");if(H===-1)return"./";return q.slice(0,H+1)}static resolveURL(q,H){if(typeof q!=="string"||q==="")return"";if(/^https?:\/\//i.test(H)&&/^\//.test(q))H=H.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(q))return q;if(/^data:.*,.*$/i.test(q))return q;if(/^blob:.*$/i.test(q))return q;return H+q}}let ZZ=new WeakMap;class d0 extends KW{constructor(q){super(q);if(this.isImageBitmapLoader=!0,typeof createImageBitmap==="undefined")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch==="undefined")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(q){return this.options=q,this}load(q,H,W,X){if(q===void 0)q="";if(this.path!==void 0)q=this.path+q;q=this.manager.resolveURL(q);let Y=this,Z=$W.get(`image-bitmap:${q}`);if(Z!==void 0){if(Y.manager.itemStart(q),Z.then){Z.then((Q)=>{if(ZZ.has(Z)===!0){if(X)X(ZZ.get(Z));Y.manager.itemError(q),Y.manager.itemEnd(q)}else{if(H)H(Q);return Y.manager.itemEnd(q),Q}});return}return setTimeout(function(){if(H)H(Z);Y.manager.itemEnd(q)},0),Z}let $={};$.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",$.headers=this.requestHeader,$.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let J=fetch(q,$).then(function(Q){return Q.blob()}).then(function(Q){return createImageBitmap(Q,Object.assign(Y.options,{colorSpaceConversion:"none"}))}).then(function(Q){if($W.add(`image-bitmap:${q}`,Q),H)H(Q);return Y.manager.itemEnd(q),Q}).catch(function(Q){if(X)X(Q);ZZ.set(J,Q),$W.remove(`image-bitmap:${q}`),Y.manager.itemError(q),Y.manager.itemEnd(q)});$W.add(`image-bitmap:${q}`,J),Y.manager.itemStart(q)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class n0 extends CH{constructor(q=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=q}}let $Z="\\[\\]\\.:\\/",Q5=new RegExp("["+$Z+"]","g"),JZ="[^"+$Z+"]",_5="[^"+$Z.replace("\\.","")+"]",F5=/((?:WC+[\/:])*)/.source.replace("WC",JZ),O5=/(WCOD+)?/.source.replace("WCOD",_5),U5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",JZ),B5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",JZ),E5=new RegExp("^"+F5+O5+U5+B5+"$"),G5=["material","materials","bones","map"];class o0{constructor(q,H,W){let X=W||aq.parseTrackName(H);this._targetGroup=q,this._bindings=q.subscribe_(H,X)}getValue(q,H){this.bind();let W=this._targetGroup.nCachedObjects_,X=this._bindings[W];if(X!==void 0)X.getValue(q,H)}setValue(q,H){let W=this._bindings;for(let X=this._targetGroup.nCachedObjects_,Y=W.length;X!==Y;++X)W[X].setValue(q,H)}bind(){let q=this._bindings;for(let H=this._targetGroup.nCachedObjects_,W=q.length;H!==W;++H)q[H].bind()}unbind(){let q=this._bindings;for(let H=this._targetGroup.nCachedObjects_,W=q.length;H!==W;++H)q[H].unbind()}}class aq{constructor(q,H,W){this.path=H,this.parsedPath=W||aq.parseTrackName(H),this.node=aq.findNode(q,this.parsedPath.nodeName),this.rootNode=q,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(q,H,W){if(!(q&&q.isAnimationObjectGroup))return new aq(q,H,W);else return new aq.Composite(q,H,W)}static sanitizeNodeName(q){return q.replace(/\s/g,"_").replace(Q5,"")}static parseTrackName(q){let H=E5.exec(q);if(H===null)throw new Error("PropertyBinding: Cannot parse trackName: "+q);let W={nodeName:H[2],objectName:H[3],objectIndex:H[4],propertyName:H[5],propertyIndex:H[6]},X=W.nodeName&&W.nodeName.lastIndexOf(".");if(X!==void 0&&X!==-1){let Y=W.nodeName.substring(X+1);if(G5.indexOf(Y)!==-1)W.nodeName=W.nodeName.substring(0,X),W.objectName=Y}if(W.propertyName===null||W.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+q);return W}static findNode(q,H){if(H===void 0||H===""||H==="."||H===-1||H===q.name||H===q.uuid)return q;if(q.skeleton){let W=q.skeleton.getBoneByName(H);if(W!==void 0)return W}if(q.children){let W=function(Y){for(let Z=0;Z<Y.length;Z++){let $=Y[Z];if($.name===H||$.uuid===H)return $;let J=W($.children);if(J)return J}return null},X=W(q.children);if(X)return X}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(q,H){q[H]=this.targetObject[this.propertyName]}_getValue_array(q,H){let W=this.resolvedProperty;for(let X=0,Y=W.length;X!==Y;++X)q[H++]=W[X]}_getValue_arrayElement(q,H){q[H]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(q,H){this.resolvedProperty.toArray(q,H)}_setValue_direct(q,H){this.targetObject[this.propertyName]=q[H]}_setValue_direct_setNeedsUpdate(q,H){this.targetObject[this.propertyName]=q[H],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(q,H){this.targetObject[this.propertyName]=q[H],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(q,H){let W=this.resolvedProperty;for(let X=0,Y=W.length;X!==Y;++X)W[X]=q[H++]}_setValue_array_setNeedsUpdate(q,H){let W=this.resolvedProperty;for(let X=0,Y=W.length;X!==Y;++X)W[X]=q[H++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(q,H){let W=this.resolvedProperty;for(let X=0,Y=W.length;X!==Y;++X)W[X]=q[H++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(q,H){this.resolvedProperty[this.propertyIndex]=q[H]}_setValue_arrayElement_setNeedsUpdate(q,H){this.resolvedProperty[this.propertyIndex]=q[H],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(q,H){this.resolvedProperty[this.propertyIndex]=q[H],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(q,H){this.resolvedProperty.fromArray(q,H)}_setValue_fromArray_setNeedsUpdate(q,H){this.resolvedProperty.fromArray(q,H),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(q,H){this.resolvedProperty.fromArray(q,H),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(q,H){this.bind(),this.getValue(q,H)}_setValue_unbound(q,H){this.bind(),this.setValue(q,H)}bind(){let q=this.node,H=this.parsedPath,W=H.objectName,X=H.propertyName,Y=H.propertyIndex;if(!q)q=aq.findNode(this.rootNode,H.nodeName),this.node=q;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!q){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(W){let Q=H.objectIndex;switch(W){case"materials":if(!q.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!q.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}q=q.material.materials;break;case"bones":if(!q.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}q=q.skeleton.bones;for(let _=0;_<q.length;_++)if(q[_].name===Q){Q=_;break}break;case"map":if("map"in q){q=q.map;break}if(!q.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!q.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}q=q.material.map;break;default:if(q[W]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}q=q[W]}if(Q!==void 0){if(q[Q]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,q);return}q=q[Q]}}let Z=q[X];if(Z===void 0){let Q=H.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+Q+"."+X+" but it wasn't found.",q);return}let $=this.Versioning.None;if(this.targetObject=q,q.isMaterial===!0)$=this.Versioning.NeedsUpdate;else if(q.isObject3D===!0)$=this.Versioning.MatrixWorldNeedsUpdate;let J=this.BindingType.Direct;if(Y!==void 0){if(X==="morphTargetInfluences"){if(!q.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!q.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(q.morphTargetDictionary[Y]!==void 0)Y=q.morphTargetDictionary[Y]}J=this.BindingType.ArrayElement,this.resolvedProperty=Z,this.propertyIndex=Y}else if(Z.fromArray!==void 0&&Z.toArray!==void 0)J=this.BindingType.HasFromToArray,this.resolvedProperty=Z;else if(Array.isArray(Z))J=this.BindingType.EntireArray,this.resolvedProperty=Z;else this.propertyName=X;this.getValue=this.GetterByBindingType[J],this.setValue=this.SetterByBindingTypeAndVersioning[J][$]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}aq.Composite=o0,aq.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},aq.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},aq.prototype.GetterByBindingType=[aq.prototype._getValue_direct,aq.prototype._getValue_array,aq.prototype._getValue_arrayElement,aq.prototype._getValue_toArray],aq.prototype.SetterByBindingTypeAndVersioning=[[aq.prototype._setValue_direct,aq.prototype._setValue_direct_setNeedsUpdate,aq.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[aq.prototype._setValue_array,aq.prototype._setValue_array_setNeedsUpdate,aq.prototype._setValue_array_setMatrixWorldNeedsUpdate],[aq.prototype._setValue_arrayElement,aq.prototype._setValue_arrayElement_setNeedsUpdate,aq.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[aq.prototype._setValue_fromArray,aq.prototype._setValue_fromArray_setNeedsUpdate,aq.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function s0(q,H,W,X){let Y=L5(X);switch(W){case 1021:return q*H;case 1028:return q*H/Y.components*Y.byteLength;case 1029:return q*H/Y.components*Y.byteLength;case 1030:return q*H*2/Y.components*Y.byteLength;case 1031:return q*H*2/Y.components*Y.byteLength;case 1022:return q*H*3/Y.components*Y.byteLength;case 1023:return q*H*4/Y.components*Y.byteLength;case 1033:return q*H*4/Y.components*Y.byteLength;case 33776:case 33777:return Math.floor((q+3)/4)*Math.floor((H+3)/4)*8;case 33778:case 33779:return Math.floor((q+3)/4)*Math.floor((H+3)/4)*16;case 35841:case 35843:return Math.max(q,16)*Math.max(H,8)/4;case 35840:case 35842:return Math.max(q,8)*Math.max(H,8)/2;case 36196:case 37492:return Math.floor((q+3)/4)*Math.floor((H+3)/4)*8;case 37496:return Math.floor((q+3)/4)*Math.floor((H+3)/4)*16;case 37808:return Math.floor((q+3)/4)*Math.floor((H+3)/4)*16;case 37809:return Math.floor((q+4)/5)*Math.floor((H+3)/4)*16;case 37810:return Math.floor((q+4)/5)*Math.floor((H+4)/5)*16;case 37811:return Math.floor((q+5)/6)*Math.floor((H+4)/5)*16;case 37812:return Math.floor((q+5)/6)*Math.floor((H+5)/6)*16;case 37813:return Math.floor((q+7)/8)*Math.floor((H+4)/5)*16;case 37814:return Math.floor((q+7)/8)*Math.floor((H+5)/6)*16;case 37815:return Math.floor((q+7)/8)*Math.floor((H+7)/8)*16;case 37816:return Math.floor((q+9)/10)*Math.floor((H+4)/5)*16;case 37817:return Math.floor((q+9)/10)*Math.floor((H+5)/6)*16;case 37818:return Math.floor((q+9)/10)*Math.floor((H+7)/8)*16;case 37819:return Math.floor((q+9)/10)*Math.floor((H+9)/10)*16;case 37820:return Math.floor((q+11)/12)*Math.floor((H+9)/10)*16;case 37821:return Math.floor((q+11)/12)*Math.floor((H+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(q/4)*Math.ceil(H/4)*16;case 36283:case 36284:return Math.ceil(q/4)*Math.ceil(H/4)*8;case 36285:case 36286:return Math.ceil(q/4)*Math.ceil(H/4)*16}throw new Error(`Unable to determine texture byte length for ${W} format.`)}function L5(q){switch(q){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${q}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}}));if(typeof window!=="undefined")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="179";function i0(){let q=null,H=!1,W=null,X=null;function Y(Z,$){W(Z,$),X=q.requestAnimationFrame(Y)}return{start:function(){if(H===!0)return;if(W===null)return;X=q.requestAnimationFrame(Y),H=!0},stop:function(){q.cancelAnimationFrame(X),H=!1},setAnimationLoop:function(Z){W=Z},setContext:function(Z){q=Z}}}function R5(q){let H=new WeakMap;function W(J,Q){let{array:_,usage:F}=J,O=_.byteLength,U=q.createBuffer();q.bindBuffer(Q,U),q.bufferData(Q,_,F),J.onUploadCallback();let E;if(_ instanceof Float32Array)E=q.FLOAT;else if(typeof Float16Array!=="undefined"&&_ instanceof Float16Array)E=q.HALF_FLOAT;else if(_ instanceof Uint16Array)if(J.isFloat16BufferAttribute)E=q.HALF_FLOAT;else E=q.UNSIGNED_SHORT;else if(_ instanceof Int16Array)E=q.SHORT;else if(_ instanceof Uint32Array)E=q.UNSIGNED_INT;else if(_ instanceof Int32Array)E=q.INT;else if(_ instanceof Int8Array)E=q.BYTE;else if(_ instanceof Uint8Array)E=q.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)E=q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:U,type:E,bytesPerElement:_.BYTES_PER_ELEMENT,version:J.version,size:O}}function X(J,Q,_){let{array:F,updateRanges:O}=Q;if(q.bindBuffer(_,J),O.length===0)q.bufferSubData(_,0,F);else{O.sort((E,R)=>E.start-R.start);let U=0;for(let E=1;E<O.length;E++){let R=O[U],K=O[E];if(K.start<=R.start+R.count+1)R.count=Math.max(R.count,K.start+K.count-R.start);else++U,O[U]=K}O.length=U+1;for(let E=0,R=O.length;E<R;E++){let K=O[E];q.bufferSubData(_,K.start*F.BYTES_PER_ELEMENT,F,K.start,K.count)}Q.clearUpdateRanges()}Q.onUploadCallback()}function Y(J){if(J.isInterleavedBufferAttribute)J=J.data;return H.get(J)}function Z(J){if(J.isInterleavedBufferAttribute)J=J.data;let Q=H.get(J);if(Q)q.deleteBuffer(Q.buffer),H.delete(J)}function $(J,Q){if(J.isInterleavedBufferAttribute)J=J.data;if(J.isGLBufferAttribute){let F=H.get(J);if(!F||F.version<J.version)H.set(J,{buffer:J.buffer,type:J.type,bytesPerElement:J.elementSize,version:J.version});return}let _=H.get(J);if(_===void 0)H.set(J,W(J,Q));else if(_.version<J.version){if(_.size!==J.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");X(_.buffer,J,Q),_.version=J.version}}return{get:Y,remove:Z,update:$}}var K5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z5=`#ifdef USE_ALPHAHASH
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
#endif`,V5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S5=`#ifdef USE_AOMAP
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
#endif`,P5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T5=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k5=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v5=`#ifdef USE_IRIDESCENCE
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
#endif`,I5=`#ifdef USE_BUMPMAP
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
#endif`,h5=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g5=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l5=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u5=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f5=`#define PI 3.141592653589793
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
} // validated`,p5=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,m5=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s5="gl_FragColor = linearToOutputTexel( gl_FragColor );",i5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a5=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,t5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r5=`#ifdef USE_ENVMAP
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
#endif`,e5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q6=`#ifdef USE_ENVMAP
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
#endif`,H6=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W6=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X6=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y6=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z6=`#ifdef USE_GRADIENTMAP
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
}`,$6=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J6=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q6=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_6=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,F6=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,O6=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U6=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B6=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E6=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G6=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,L6=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,R6=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K6=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z6=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V6=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C6=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N6=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M6=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S6=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P6=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T6=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,w6=`#if defined( USE_POINTS_UV )
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
#endif`,A6=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j6=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k6=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v6=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I6=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h6=`#ifdef USE_MORPHTARGETS
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
#endif`,b6=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D6=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y6=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g6=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x6=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l6=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u6=`#ifdef USE_NORMALMAP
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
#endif`,f6=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p6=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m6=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c6=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d6=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n6=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,o6=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s6=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i6=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a6=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,t6=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r6=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e6=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q7=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,H7=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,W7=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,X7=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y7=`#ifdef USE_SKINNING
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
#endif`,Z7=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$7=`#ifdef USE_SKINNING
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
#endif`,J7=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q7=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_7=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F7=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,O7=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U7=`#ifdef USE_TRANSMISSION
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
#endif`,B7=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E7=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G7=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L7=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;let Dq={alphahash_fragment:K5,alphahash_pars_fragment:z5,alphamap_fragment:V5,alphamap_pars_fragment:C5,alphatest_fragment:N5,alphatest_pars_fragment:M5,aomap_fragment:S5,aomap_pars_fragment:P5,batching_pars_vertex:T5,batching_vertex:w5,begin_vertex:A5,beginnormal_vertex:j5,bsdfs:k5,iridescence_fragment:v5,bumpmap_pars_fragment:I5,clipping_planes_fragment:h5,clipping_planes_pars_fragment:b5,clipping_planes_pars_vertex:D5,clipping_planes_vertex:y5,color_fragment:g5,color_pars_fragment:x5,color_pars_vertex:l5,color_vertex:u5,common:f5,cube_uv_reflection_fragment:p5,defaultnormal_vertex:m5,displacementmap_pars_vertex:c5,displacementmap_vertex:d5,emissivemap_fragment:n5,emissivemap_pars_fragment:o5,colorspace_fragment:s5,colorspace_pars_fragment:i5,envmap_fragment:a5,envmap_common_pars_fragment:t5,envmap_pars_fragment:r5,envmap_pars_vertex:e5,envmap_physical_pars_fragment:F6,envmap_vertex:q6,fog_vertex:H6,fog_pars_vertex:W6,fog_fragment:X6,fog_pars_fragment:Y6,gradientmap_pars_fragment:Z6,lightmap_pars_fragment:$6,lights_lambert_fragment:J6,lights_lambert_pars_fragment:Q6,lights_pars_begin:_6,lights_toon_fragment:O6,lights_toon_pars_fragment:U6,lights_phong_fragment:B6,lights_phong_pars_fragment:E6,lights_physical_fragment:G6,lights_physical_pars_fragment:L6,lights_fragment_begin:R6,lights_fragment_maps:K6,lights_fragment_end:z6,logdepthbuf_fragment:V6,logdepthbuf_pars_fragment:C6,logdepthbuf_pars_vertex:N6,logdepthbuf_vertex:M6,map_fragment:S6,map_pars_fragment:P6,map_particle_fragment:T6,map_particle_pars_fragment:w6,metalnessmap_fragment:A6,metalnessmap_pars_fragment:j6,morphinstance_vertex:k6,morphcolor_vertex:v6,morphnormal_vertex:I6,morphtarget_pars_vertex:h6,morphtarget_vertex:b6,normal_fragment_begin:D6,normal_fragment_maps:y6,normal_pars_fragment:g6,normal_pars_vertex:x6,normal_vertex:l6,normalmap_pars_fragment:u6,clearcoat_normal_fragment_begin:f6,clearcoat_normal_fragment_maps:p6,clearcoat_pars_fragment:m6,iridescence_pars_fragment:c6,opaque_fragment:d6,packing:n6,premultiplied_alpha_fragment:o6,project_vertex:s6,dithering_fragment:i6,dithering_pars_fragment:a6,roughnessmap_fragment:t6,roughnessmap_pars_fragment:r6,shadowmap_pars_fragment:e6,shadowmap_pars_vertex:q7,shadowmap_vertex:H7,shadowmask_pars_fragment:W7,skinbase_vertex:X7,skinning_pars_vertex:Y7,skinning_vertex:Z7,skinnormal_vertex:$7,specularmap_fragment:J7,specularmap_pars_fragment:Q7,tonemapping_fragment:_7,tonemapping_pars_fragment:F7,transmission_fragment:O7,transmission_pars_fragment:U7,uv_pars_fragment:B7,uv_pars_vertex:E7,uv_vertex:G7,worldpos_vertex:L7,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Wq={common:{diffuse:{value:new jq(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new hq},alphaMap:{value:null},alphaMapTransform:{value:new hq},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new hq}},envmap:{envMap:{value:null},envMapRotation:{value:new hq},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new hq}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new hq}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new hq},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new hq},normalScale:{value:new uq(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new hq},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new hq}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new hq}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new hq}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new jq(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jq(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new hq},alphaTest:{value:0},uvTransform:{value:new hq}},sprite:{diffuse:{value:new jq(16777215)},opacity:{value:1},center:{value:new uq(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new hq},alphaMap:{value:null},alphaMapTransform:{value:new hq},alphaTest:{value:0}}},iH={basic:{uniforms:VH([Wq.common,Wq.specularmap,Wq.envmap,Wq.aomap,Wq.lightmap,Wq.fog]),vertexShader:Dq.meshbasic_vert,fragmentShader:Dq.meshbasic_frag},lambert:{uniforms:VH([Wq.common,Wq.specularmap,Wq.envmap,Wq.aomap,Wq.lightmap,Wq.emissivemap,Wq.bumpmap,Wq.normalmap,Wq.displacementmap,Wq.fog,Wq.lights,{emissive:{value:new jq(0)}}]),vertexShader:Dq.meshlambert_vert,fragmentShader:Dq.meshlambert_frag},phong:{uniforms:VH([Wq.common,Wq.specularmap,Wq.envmap,Wq.aomap,Wq.lightmap,Wq.emissivemap,Wq.bumpmap,Wq.normalmap,Wq.displacementmap,Wq.fog,Wq.lights,{emissive:{value:new jq(0)},specular:{value:new jq(1118481)},shininess:{value:30}}]),vertexShader:Dq.meshphong_vert,fragmentShader:Dq.meshphong_frag},standard:{uniforms:VH([Wq.common,Wq.envmap,Wq.aomap,Wq.lightmap,Wq.emissivemap,Wq.bumpmap,Wq.normalmap,Wq.displacementmap,Wq.roughnessmap,Wq.metalnessmap,Wq.fog,Wq.lights,{emissive:{value:new jq(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dq.meshphysical_vert,fragmentShader:Dq.meshphysical_frag},toon:{uniforms:VH([Wq.common,Wq.aomap,Wq.lightmap,Wq.emissivemap,Wq.bumpmap,Wq.normalmap,Wq.displacementmap,Wq.gradientmap,Wq.fog,Wq.lights,{emissive:{value:new jq(0)}}]),vertexShader:Dq.meshtoon_vert,fragmentShader:Dq.meshtoon_frag},matcap:{uniforms:VH([Wq.common,Wq.bumpmap,Wq.normalmap,Wq.displacementmap,Wq.fog,{matcap:{value:null}}]),vertexShader:Dq.meshmatcap_vert,fragmentShader:Dq.meshmatcap_frag},points:{uniforms:VH([Wq.points,Wq.fog]),vertexShader:Dq.points_vert,fragmentShader:Dq.points_frag},dashed:{uniforms:VH([Wq.common,Wq.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dq.linedashed_vert,fragmentShader:Dq.linedashed_frag},depth:{uniforms:VH([Wq.common,Wq.displacementmap]),vertexShader:Dq.depth_vert,fragmentShader:Dq.depth_frag},normal:{uniforms:VH([Wq.common,Wq.bumpmap,Wq.normalmap,Wq.displacementmap,{opacity:{value:1}}]),vertexShader:Dq.meshnormal_vert,fragmentShader:Dq.meshnormal_frag},sprite:{uniforms:VH([Wq.sprite,Wq.fog]),vertexShader:Dq.sprite_vert,fragmentShader:Dq.sprite_frag},background:{uniforms:{uvTransform:{value:new hq},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dq.background_vert,fragmentShader:Dq.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new hq}},vertexShader:Dq.backgroundCube_vert,fragmentShader:Dq.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dq.cube_vert,fragmentShader:Dq.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dq.equirect_vert,fragmentShader:Dq.equirect_frag},distanceRGBA:{uniforms:VH([Wq.common,Wq.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Dq.distanceRGBA_vert,fragmentShader:Dq.distanceRGBA_frag},shadow:{uniforms:VH([Wq.lights,Wq.fog,{color:{value:new jq(0)},opacity:{value:1}}]),vertexShader:Dq.shadow_vert,fragmentShader:Dq.shadow_frag}};iH.physical={uniforms:VH([iH.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new hq},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new hq},clearcoatNormalScale:{value:new uq(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new hq},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new hq},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new hq},sheen:{value:0},sheenColor:{value:new jq(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new hq},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new hq},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new hq},transmissionSamplerSize:{value:new uq},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new hq},attenuationDistance:{value:0},attenuationColor:{value:new jq(0)},specularColor:{value:new jq(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new hq},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new hq},anisotropyVector:{value:new uq},anisotropyMap:{value:null},anisotropyMapTransform:{value:new hq}}]),vertexShader:Dq.meshphysical_vert,fragmentShader:Dq.meshphysical_frag};let FY={r:0,b:0,g:0},kW=new vH,R7=new bq;function K7(q,H,W,X,Y,Z,$){let J=new jq(0),Q=Z===!0?0:1,_,F,O=null,U=0,E=null;function R(V){let P=V.isScene===!0?V.background:null;if(P&&P.isTexture)P=(V.backgroundBlurriness>0?W:H).get(P);return P}function K(V){let P=!1,b=R(V);if(b===null)G(J,Q);else if(b&&b.isColor)G(b,1),P=!0;let T=q.xr.getEnvironmentBlendMode();if(T==="additive")X.buffers.color.setClear(0,0,0,1,$);else if(T==="alpha-blend")X.buffers.color.setClear(0,0,0,0,$);if(q.autoClear||P)X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),q.clear(q.autoClearColor,q.autoClearDepth,q.autoClearStencil)}function B(V,P){let b=R(P);if(b&&(b.isCubeTexture||b.mapping===306)){if(F===void 0)F=new SH(new RX(1,1,1),new YW({name:"BackgroundCubeMaterial",uniforms:aW(iH.backgroundCube.uniforms),vertexShader:iH.backgroundCube.vertexShader,fragmentShader:iH.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),F.geometry.deleteAttribute("normal"),F.geometry.deleteAttribute("uv"),F.onBeforeRender=function(T,j,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(F.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Y.update(F);if(kW.copy(P.backgroundRotation),kW.x*=-1,kW.y*=-1,kW.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1)kW.y*=-1,kW.z*=-1;if(F.material.uniforms.envMap.value=b,F.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,F.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,F.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,F.material.uniforms.backgroundRotation.value.setFromMatrix4(R7.makeRotationFromEuler(kW)),F.material.toneMapped=fq.getTransfer(b.colorSpace)!=="srgb",O!==b||U!==b.version||E!==q.toneMapping)F.material.needsUpdate=!0,O=b,U=b.version,E=q.toneMapping;F.layers.enableAll(),V.unshift(F,F.geometry,F.material,0,0,null)}else if(b&&b.isTexture){if(_===void 0)_=new SH(new $Y(2,2),new YW({name:"BackgroundMaterial",uniforms:aW(iH.background.uniforms),vertexShader:iH.background.vertexShader,fragmentShader:iH.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),Y.update(_);if(_.material.uniforms.t2D.value=b,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.toneMapped=fq.getTransfer(b.colorSpace)!=="srgb",b.matrixAutoUpdate===!0)b.updateMatrix();if(_.material.uniforms.uvTransform.value.copy(b.matrix),O!==b||U!==b.version||E!==q.toneMapping)_.material.needsUpdate=!0,O=b,U=b.version,E=q.toneMapping;_.layers.enableAll(),V.unshift(_,_.geometry,_.material,0,0,null)}}function G(V,P){V.getRGB(FY,aZ(q)),X.buffers.color.setClear(FY.r,FY.g,FY.b,P,$)}function S(){if(F!==void 0)F.geometry.dispose(),F.material.dispose(),F=void 0;if(_!==void 0)_.geometry.dispose(),_.material.dispose(),_=void 0}return{getClearColor:function(){return J},setClearColor:function(V,P=1){J.set(V),Q=P,G(J,Q)},getClearAlpha:function(){return Q},setClearAlpha:function(V){Q=V,G(J,Q)},render:K,addToRenderList:B,dispose:S}}function z7(q,H){let W=q.getParameter(q.MAX_VERTEX_ATTRIBS),X={},Y=U(null),Z=Y,$=!1;function J(C,I,m,f,d){let i=!1,c=O(f,m,I);if(Z!==c)Z=c,_(Z.object);if(i=E(C,f,m,d),i)R(C,f,m,d);if(d!==null)H.update(d,q.ELEMENT_ARRAY_BUFFER);if(i||$){if($=!1,P(C,I,m,f),d!==null)q.bindBuffer(q.ELEMENT_ARRAY_BUFFER,H.get(d).buffer)}}function Q(){return q.createVertexArray()}function _(C){return q.bindVertexArray(C)}function F(C){return q.deleteVertexArray(C)}function O(C,I,m){let f=m.wireframe===!0,d=X[C.id];if(d===void 0)d={},X[C.id]=d;let i=d[I.id];if(i===void 0)i={},d[I.id]=i;let c=i[f];if(c===void 0)c=U(Q()),i[f]=c;return c}function U(C){let I=[],m=[],f=[];for(let d=0;d<W;d++)I[d]=0,m[d]=0,f[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:m,attributeDivisors:f,object:C,attributes:{},index:null}}function E(C,I,m,f){let d=Z.attributes,i=I.attributes,c=0,t=m.getAttributes();for(let l in t)if(t[l].location>=0){let _q=d[l],Aq=i[l];if(Aq===void 0){if(l==="instanceMatrix"&&C.instanceMatrix)Aq=C.instanceMatrix;if(l==="instanceColor"&&C.instanceColor)Aq=C.instanceColor}if(_q===void 0)return!0;if(_q.attribute!==Aq)return!0;if(Aq&&_q.data!==Aq.data)return!0;c++}if(Z.attributesNum!==c)return!0;if(Z.index!==f)return!0;return!1}function R(C,I,m,f){let d={},i=I.attributes,c=0,t=m.getAttributes();for(let l in t)if(t[l].location>=0){let _q=i[l];if(_q===void 0){if(l==="instanceMatrix"&&C.instanceMatrix)_q=C.instanceMatrix;if(l==="instanceColor"&&C.instanceColor)_q=C.instanceColor}let Aq={};if(Aq.attribute=_q,_q&&_q.data)Aq.data=_q.data;d[l]=Aq,c++}Z.attributes=d,Z.attributesNum=c,Z.index=f}function K(){let C=Z.newAttributes;for(let I=0,m=C.length;I<m;I++)C[I]=0}function B(C){G(C,0)}function G(C,I){let{newAttributes:m,enabledAttributes:f,attributeDivisors:d}=Z;if(m[C]=1,f[C]===0)q.enableVertexAttribArray(C),f[C]=1;if(d[C]!==I)q.vertexAttribDivisor(C,I),d[C]=I}function S(){let{newAttributes:C,enabledAttributes:I}=Z;for(let m=0,f=I.length;m<f;m++)if(I[m]!==C[m])q.disableVertexAttribArray(m),I[m]=0}function V(C,I,m,f,d,i,c){if(c===!0)q.vertexAttribIPointer(C,I,m,d,i);else q.vertexAttribPointer(C,I,m,f,d,i)}function P(C,I,m,f){K();let d=f.attributes,i=m.getAttributes(),c=I.defaultAttributeValues;for(let t in i){let l=i[t];if(l.location>=0){let Xq=d[t];if(Xq===void 0){if(t==="instanceMatrix"&&C.instanceMatrix)Xq=C.instanceMatrix;if(t==="instanceColor"&&C.instanceColor)Xq=C.instanceColor}if(Xq!==void 0){let{normalized:_q,itemSize:Aq}=Xq,mq=H.get(Xq);if(mq===void 0)continue;let{buffer:XH,type:p,bytesPerElement:Yq}=mq,Kq=p===q.INT||p===q.UNSIGNED_INT||Xq.gpuType===1013;if(Xq.isInterleavedBufferAttribute){let Fq=Xq.data,Lq=Fq.stride,cq=Xq.offset;if(Fq.isInstancedInterleavedBuffer){for(let dq=0;dq<l.locationSize;dq++)G(l.location+dq,Fq.meshPerAttribute);if(C.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=Fq.meshPerAttribute*Fq.count}else for(let dq=0;dq<l.locationSize;dq++)B(l.location+dq);q.bindBuffer(q.ARRAY_BUFFER,XH);for(let dq=0;dq<l.locationSize;dq++)V(l.location+dq,Aq/l.locationSize,p,_q,Lq*Yq,(cq+Aq/l.locationSize*dq)*Yq,Kq)}else{if(Xq.isInstancedBufferAttribute){for(let Fq=0;Fq<l.locationSize;Fq++)G(l.location+Fq,Xq.meshPerAttribute);if(C.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=Xq.meshPerAttribute*Xq.count}else for(let Fq=0;Fq<l.locationSize;Fq++)B(l.location+Fq);q.bindBuffer(q.ARRAY_BUFFER,XH);for(let Fq=0;Fq<l.locationSize;Fq++)V(l.location+Fq,Aq/l.locationSize,p,_q,Aq*Yq,Aq/l.locationSize*Fq*Yq,Kq)}}else if(c!==void 0){let _q=c[t];if(_q!==void 0)switch(_q.length){case 2:q.vertexAttrib2fv(l.location,_q);break;case 3:q.vertexAttrib3fv(l.location,_q);break;case 4:q.vertexAttrib4fv(l.location,_q);break;default:q.vertexAttrib1fv(l.location,_q)}}}}S()}function b(){x();for(let C in X){let I=X[C];for(let m in I){let f=I[m];for(let d in f)F(f[d].object),delete f[d];delete I[m]}delete X[C]}}function T(C){if(X[C.id]===void 0)return;let I=X[C.id];for(let m in I){let f=I[m];for(let d in f)F(f[d].object),delete f[d];delete I[m]}delete X[C.id]}function j(C){for(let I in X){let m=X[I];if(m[C.id]===void 0)continue;let f=m[C.id];for(let d in f)F(f[d].object),delete f[d];delete m[C.id]}}function x(){if(N(),$=!0,Z===Y)return;Z=Y,_(Z.object)}function N(){Y.geometry=null,Y.program=null,Y.wireframe=!1}return{setup:J,reset:x,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:j,initAttributes:K,enableAttribute:B,disableUnusedAttributes:S}}function V7(q,H,W){let X;function Y(_){X=_}function Z(_,F){q.drawArrays(X,_,F),W.update(F,X,1)}function $(_,F,O){if(O===0)return;q.drawArraysInstanced(X,_,F,O),W.update(F,X,O)}function J(_,F,O){if(O===0)return;H.get("WEBGL_multi_draw").multiDrawArraysWEBGL(X,_,0,F,0,O);let E=0;for(let R=0;R<O;R++)E+=F[R];W.update(E,X,1)}function Q(_,F,O,U){if(O===0)return;let E=H.get("WEBGL_multi_draw");if(E===null)for(let R=0;R<_.length;R++)$(_[R],F[R],U[R]);else{E.multiDrawArraysInstancedWEBGL(X,_,0,F,0,U,0,O);let R=0;for(let K=0;K<O;K++)R+=F[K]*U[K];W.update(R,X,1)}}this.setMode=Y,this.render=Z,this.renderInstances=$,this.renderMultiDraw=J,this.renderMultiDrawInstances=Q}function C7(q,H,W,X){let Y;function Z(){if(Y!==void 0)return Y;if(H.has("EXT_texture_filter_anisotropic")===!0){let j=H.get("EXT_texture_filter_anisotropic");Y=q.getParameter(j.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Y=0;return Y}function $(j){if(j!==1023&&X.convert(j)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function J(j){let x=j===1016&&(H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float"));if(j!==1009&&X.convert(j)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&j!==1015&&!x)return!1;return!0}function Q(j){if(j==="highp"){if(q.getShaderPrecisionFormat(q.VERTEX_SHADER,q.HIGH_FLOAT).precision>0&&q.getShaderPrecisionFormat(q.FRAGMENT_SHADER,q.HIGH_FLOAT).precision>0)return"highp";j="mediump"}if(j==="mediump"){if(q.getShaderPrecisionFormat(q.VERTEX_SHADER,q.MEDIUM_FLOAT).precision>0&&q.getShaderPrecisionFormat(q.FRAGMENT_SHADER,q.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let _=W.precision!==void 0?W.precision:"highp",F=Q(_);if(F!==_)console.warn("THREE.WebGLRenderer:",_,"not supported, using",F,"instead."),_=F;let O=W.logarithmicDepthBuffer===!0,U=W.reversedDepthBuffer===!0&&H.has("EXT_clip_control"),E=q.getParameter(q.MAX_TEXTURE_IMAGE_UNITS),R=q.getParameter(q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),K=q.getParameter(q.MAX_TEXTURE_SIZE),B=q.getParameter(q.MAX_CUBE_MAP_TEXTURE_SIZE),G=q.getParameter(q.MAX_VERTEX_ATTRIBS),S=q.getParameter(q.MAX_VERTEX_UNIFORM_VECTORS),V=q.getParameter(q.MAX_VARYING_VECTORS),P=q.getParameter(q.MAX_FRAGMENT_UNIFORM_VECTORS),b=R>0,T=q.getParameter(q.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Z,getMaxPrecision:Q,textureFormatReadable:$,textureTypeReadable:J,precision:_,logarithmicDepthBuffer:O,reversedDepthBuffer:U,maxTextures:E,maxVertexTextures:R,maxTextureSize:K,maxCubemapSize:B,maxAttributes:G,maxVertexUniforms:S,maxVaryings:V,maxFragmentUniforms:P,vertexTextures:b,maxSamples:T}}function N7(q){let H=this,W=null,X=0,Y=!1,Z=!1,$=new RW,J=new hq,Q={value:null,needsUpdate:!1};this.uniform=Q,this.numPlanes=0,this.numIntersection=0,this.init=function(O,U){let E=O.length!==0||U||X!==0||Y;return Y=U,X=O.length,E},this.beginShadows=function(){Z=!0,F(null)},this.endShadows=function(){Z=!1},this.setGlobalState=function(O,U){W=F(O,U,0)},this.setState=function(O,U,E){let{clippingPlanes:R,clipIntersection:K,clipShadows:B}=O,G=q.get(O);if(!Y||R===null||R.length===0||Z&&!B)if(Z)F(null);else _();else{let S=Z?0:X,V=S*4,P=G.clippingState||null;Q.value=P,P=F(R,U,V,E);for(let b=0;b!==V;++b)P[b]=W[b];G.clippingState=P,this.numIntersection=K?this.numPlanes:0,this.numPlanes+=S}};function _(){if(Q.value!==W)Q.value=W,Q.needsUpdate=X>0;H.numPlanes=X,H.numIntersection=0}function F(O,U,E,R){let K=O!==null?O.length:0,B=null;if(K!==0){if(B=Q.value,R!==!0||B===null){let G=E+K*4,S=U.matrixWorldInverse;if(J.getNormalMatrix(S),B===null||B.length<G)B=new Float32Array(G);for(let V=0,P=E;V!==K;++V,P+=4)$.copy(O[V]).applyMatrix4(S,J),$.normal.toArray(B,P),B[P+3]=$.constant}Q.value=B,Q.needsUpdate=!0}return H.numPlanes=K,H.numIntersection=0,B}}function M7(q){let H=new WeakMap;function W($,J){if(J===303)$.mapping=301;else if(J===304)$.mapping=302;return $}function X($){if($&&$.isTexture){let J=$.mapping;if(J===303||J===304)if(H.has($)){let Q=H.get($).texture;return W(Q,$.mapping)}else{let Q=$.image;if(Q&&Q.height>0){let _=new q0(Q.height);return _.fromEquirectangularTexture(q,$),H.set($,_),$.addEventListener("dispose",Y),W(_.texture,$.mapping)}else return null}}return $}function Y($){let J=$.target;J.removeEventListener("dispose",Y);let Q=H.get(J);if(Q!==void 0)H.delete(J),Q.dispose()}function Z(){H=new WeakMap}return{get:X,dispose:Z}}let XX=4,a0=[0.125,0.215,0.35,0.446,0.526,0.582],vW=20,QZ=new SX,t0=new jq,_Z=null,FZ=0,OZ=0,UZ=!1,IW=(1+Math.sqrt(5))/2,YX=1/IW,r0=[new k(-IW,YX,0),new k(IW,YX,0),new k(-YX,0,IW),new k(YX,0,IW),new k(0,IW,-YX),new k(0,IW,YX),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],S7=new k;class BZ{constructor(q){this._renderer=q,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(q,H=0,W=0.1,X=100,Y={}){let{size:Z=256,position:$=S7}=Y;_Z=this._renderer.getRenderTarget(),FZ=this._renderer.getActiveCubeFace(),OZ=this._renderer.getActiveMipmapLevel(),UZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(Z);let J=this._allocateTargets();if(J.depthBuffer=!0,this._sceneToCubeUV(q,W,X,J,$),H>0)this._blur(J,0,0,H);return this._applyPMREM(J),this._cleanup(J),J}fromEquirectangular(q,H=null){return this._fromTexture(q,H)}fromCubemap(q,H=null){return this._fromTexture(q,H)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=H3(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=q3(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(q){this._lodMax=Math.floor(Math.log2(q)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let q=0;q<this._lodPlanes.length;q++)this._lodPlanes[q].dispose()}_cleanup(q){this._renderer.setRenderTarget(_Z,FZ,OZ),this._renderer.xr.enabled=UZ,q.scissorTest=!1,OY(q,0,0,q.width,q.height)}_fromTexture(q,H){if(q.mapping===301||q.mapping===302)this._setSize(q.image.length===0?16:q.image[0].width||q.image[0].image.width);else this._setSize(q.image.width/4);_Z=this._renderer.getRenderTarget(),FZ=this._renderer.getActiveCubeFace(),OZ=this._renderer.getActiveMipmapLevel(),UZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let W=H||this._allocateTargets();return this._textureToCubeUV(q,W),this._applyPMREM(W),this._cleanup(W),W}_allocateTargets(){let q=3*Math.max(this._cubeSize,112),H=4*this._cubeSize,W={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},X=e0(q,H,W);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==q||this._pingPongRenderTarget.height!==H){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=e0(q,H,W);let{_lodMax:Y}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P7(Y)),this._blurMaterial=T7(Y,q,H)}return X}_compileMaterial(q){let H=new SH(this._lodPlanes[0],q);this._renderer.compile(H,QZ)}_sceneToCubeUV(q,H,W,X,Y){let J=new CH(90,1,H,W),Q=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],F=this._renderer,O=F.autoClear,U=F.toneMapping;if(F.getClearColor(t0),F.toneMapping=0,F.autoClear=!1,F.state.buffers.depth.getReversed())F.setRenderTarget(X),F.clearDepth(),F.setRenderTarget(null);let R=new GW({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),K=new SH(new RX,R),B=!1,G=q.background;if(G){if(G.isColor)R.color.copy(G),q.background=null,B=!0}else R.color.copy(t0),B=!0;for(let S=0;S<6;S++){let V=S%3;if(V===0)J.up.set(0,Q[S],0),J.position.set(Y.x,Y.y,Y.z),J.lookAt(Y.x+_[S],Y.y,Y.z);else if(V===1)J.up.set(0,0,Q[S]),J.position.set(Y.x,Y.y,Y.z),J.lookAt(Y.x,Y.y+_[S],Y.z);else J.up.set(0,Q[S],0),J.position.set(Y.x,Y.y,Y.z),J.lookAt(Y.x,Y.y,Y.z+_[S]);let P=this._cubeSize;if(OY(X,V*P,S>2?P:0,P,P),F.setRenderTarget(X),B)F.render(K,J);F.render(q,J)}K.geometry.dispose(),K.material.dispose(),F.toneMapping=U,F.autoClear=O,q.background=G}_textureToCubeUV(q,H){let W=this._renderer,X=q.mapping===301||q.mapping===302;if(X){if(this._cubemapMaterial===null)this._cubemapMaterial=H3();this._cubemapMaterial.uniforms.flipEnvMap.value=q.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=q3();let Y=X?this._cubemapMaterial:this._equirectMaterial,Z=new SH(this._lodPlanes[0],Y),$=Y.uniforms;$.envMap.value=q;let J=this._cubeSize;OY(H,0,0,3*J,2*J),W.setRenderTarget(H),W.render(Z,QZ)}_applyPMREM(q){let H=this._renderer,W=H.autoClear;H.autoClear=!1;let X=this._lodPlanes.length;for(let Y=1;Y<X;Y++){let Z=Math.sqrt(this._sigmas[Y]*this._sigmas[Y]-this._sigmas[Y-1]*this._sigmas[Y-1]),$=r0[(X-Y-1)%r0.length];this._blur(q,Y-1,Y,Z,$)}H.autoClear=W}_blur(q,H,W,X,Y){let Z=this._pingPongRenderTarget;this._halfBlur(q,Z,H,W,X,"latitudinal",Y),this._halfBlur(Z,q,W,W,X,"longitudinal",Y)}_halfBlur(q,H,W,X,Y,Z,$){let J=this._renderer,Q=this._blurMaterial;if(Z!=="latitudinal"&&Z!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let _=3,F=new SH(this._lodPlanes[X],Q),O=Q.uniforms,U=this._sizeLods[W]-1,E=isFinite(Y)?Math.PI/(2*U):2*Math.PI/(2*vW-1),R=Y/E,K=isFinite(Y)?1+Math.floor(_*R):vW;if(K>vW)console.warn(`sigmaRadians, ${Y}, is too large and will clip, as it requested ${K} samples when the maximum is set to ${vW}`);let B=[],G=0;for(let T=0;T<vW;++T){let j=T/R,x=Math.exp(-j*j/2);if(B.push(x),T===0)G+=x;else if(T<K)G+=2*x}for(let T=0;T<B.length;T++)B[T]=B[T]/G;if(O.envMap.value=q.texture,O.samples.value=K,O.weights.value=B,O.latitudinal.value=Z==="latitudinal",$)O.poleAxis.value=$;let{_lodMax:S}=this;O.dTheta.value=E,O.mipInt.value=S-W;let V=this._sizeLods[X],P=3*V*(X>S-XX?X-S+XX:0),b=4*(this._cubeSize-V);OY(H,P,b,3*V,2*V),J.setRenderTarget(H),J.render(F,QZ)}}function P7(q){let H=[],W=[],X=[],Y=q,Z=q-XX+1+a0.length;for(let $=0;$<Z;$++){let J=Math.pow(2,Y);W.push(J);let Q=1/J;if($>q-XX)Q=a0[$-q+XX-1];else if($===0)Q=0;X.push(Q);let _=1/(J-2),F=-_,O=1+_,U=[F,F,O,F,O,O,F,F,O,O,F,O],E=6,R=6,K=3,B=2,G=1,S=new Float32Array(K*R*E),V=new Float32Array(B*R*E),P=new Float32Array(G*R*E);for(let T=0;T<E;T++){let j=T%3*2/3-1,x=T>2?0:-1,N=[j,x,0,j+0.6666666666666666,x,0,j+0.6666666666666666,x+1,0,j,x,0,j+0.6666666666666666,x+1,0,j,x+1,0];S.set(N,K*R*T),V.set(U,B*R*T);let C=[T,T,T,T,T,T];P.set(C,G*R*T)}let b=new hH;if(b.setAttribute("position",new EH(S,K)),b.setAttribute("uv",new EH(V,B)),b.setAttribute("faceIndex",new EH(P,G)),H.push(b),Y>XX)Y--}return{lodPlanes:H,sizeLods:W,sigmas:X}}function e0(q,H,W){let X=new _W(q,H,W);return X.texture.mapping=306,X.texture.name="PMREM.cubeUv",X.scissorTest=!0,X}function OY(q,H,W,X,Y){q.viewport.set(H,W,X,Y),q.scissor.set(H,W,X,Y)}function T7(q,H,W){let X=new Float32Array(vW),Y=new k(0,1,0);return new YW({name:"SphericalGaussianBlur",defines:{n:vW,CUBEUV_TEXEL_WIDTH:1/H,CUBEUV_TEXEL_HEIGHT:1/W,CUBEUV_MAX_MIP:`${q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:X},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:Y}},vertexShader:EZ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function q3(){return new YW({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:EZ(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function H3(){return new YW({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:EZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function EZ(){return`

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
	`}function w7(q){let H=new WeakMap,W=null;function X(J){if(J&&J.isTexture){let Q=J.mapping,_=Q===303||Q===304,F=Q===301||Q===302;if(_||F){let O=H.get(J),U=O!==void 0?O.texture.pmremVersion:0;if(J.isRenderTargetTexture&&J.pmremVersion!==U){if(W===null)W=new BZ(q);return O=_?W.fromEquirectangular(J,O):W.fromCubemap(J,O),O.texture.pmremVersion=J.pmremVersion,H.set(J,O),O.texture}else if(O!==void 0)return O.texture;else{let E=J.image;if(_&&E&&E.height>0||F&&E&&Y(E)){if(W===null)W=new BZ(q);return O=_?W.fromEquirectangular(J):W.fromCubemap(J),O.texture.pmremVersion=J.pmremVersion,H.set(J,O),J.addEventListener("dispose",Z),O.texture}else return null}}}return J}function Y(J){let Q=0,_=6;for(let F=0;F<_;F++)if(J[F]!==void 0)Q++;return Q===_}function Z(J){let Q=J.target;Q.removeEventListener("dispose",Z);let _=H.get(Q);if(_!==void 0)H.delete(Q),_.dispose()}function $(){if(H=new WeakMap,W!==null)W.dispose(),W=null}return{get:X,dispose:$}}function A7(q){let H={};function W(X){if(H[X]!==void 0)return H[X];let Y;switch(X){case"WEBGL_depth_texture":Y=q.getExtension("WEBGL_depth_texture")||q.getExtension("MOZ_WEBGL_depth_texture")||q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":Y=q.getExtension("EXT_texture_filter_anisotropic")||q.getExtension("MOZ_EXT_texture_filter_anisotropic")||q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":Y=q.getExtension("WEBGL_compressed_texture_s3tc")||q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":Y=q.getExtension("WEBGL_compressed_texture_pvrtc")||q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:Y=q.getExtension(X)}return H[X]=Y,Y}return{has:function(X){return W(X)!==null},init:function(){W("EXT_color_buffer_float"),W("WEBGL_clip_cull_distance"),W("OES_texture_float_linear"),W("EXT_color_buffer_half_float"),W("WEBGL_multisampled_render_to_texture"),W("WEBGL_render_shared_exponent")},get:function(X){let Y=W(X);if(Y===null)xW("THREE.WebGLRenderer: "+X+" extension not supported.");return Y}}}function j7(q,H,W,X){let Y={},Z=new WeakMap;function $(O){let U=O.target;if(U.index!==null)H.remove(U.index);for(let R in U.attributes)H.remove(U.attributes[R]);U.removeEventListener("dispose",$),delete Y[U.id];let E=Z.get(U);if(E)H.remove(E),Z.delete(U);if(X.releaseStatesOfGeometry(U),U.isInstancedBufferGeometry===!0)delete U._maxInstanceCount;W.memory.geometries--}function J(O,U){if(Y[U.id]===!0)return U;return U.addEventListener("dispose",$),Y[U.id]=!0,W.memory.geometries++,U}function Q(O){let U=O.attributes;for(let E in U)H.update(U[E],q.ARRAY_BUFFER)}function _(O){let U=[],E=O.index,R=O.attributes.position,K=0;if(E!==null){let S=E.array;K=E.version;for(let V=0,P=S.length;V<P;V+=3){let b=S[V+0],T=S[V+1],j=S[V+2];U.push(b,T,T,j,j,b)}}else if(R!==void 0){let S=R.array;K=R.version;for(let V=0,P=S.length/3-1;V<P;V+=3){let b=V+0,T=V+1,j=V+2;U.push(b,T,T,j,j,b)}}else return;let B=new((vZ(U))?xY:gY)(U,1);B.version=K;let G=Z.get(O);if(G)H.remove(G);Z.set(O,B)}function F(O){let U=Z.get(O);if(U){let E=O.index;if(E!==null){if(U.version<E.version)_(O)}}else _(O);return Z.get(O)}return{get:J,update:Q,getWireframeAttribute:F}}function k7(q,H,W){let X;function Y(U){X=U}let Z,$;function J(U){Z=U.type,$=U.bytesPerElement}function Q(U,E){q.drawElements(X,E,Z,U*$),W.update(E,X,1)}function _(U,E,R){if(R===0)return;q.drawElementsInstanced(X,E,Z,U*$,R),W.update(E,X,R)}function F(U,E,R){if(R===0)return;H.get("WEBGL_multi_draw").multiDrawElementsWEBGL(X,E,0,Z,U,0,R);let B=0;for(let G=0;G<R;G++)B+=E[G];W.update(B,X,1)}function O(U,E,R,K){if(R===0)return;let B=H.get("WEBGL_multi_draw");if(B===null)for(let G=0;G<U.length;G++)_(U[G]/$,E[G],K[G]);else{B.multiDrawElementsInstancedWEBGL(X,E,0,Z,U,0,K,0,R);let G=0;for(let S=0;S<R;S++)G+=E[S]*K[S];W.update(G,X,1)}}this.setMode=Y,this.setIndex=J,this.render=Q,this.renderInstances=_,this.renderMultiDraw=F,this.renderMultiDrawInstances=O}function v7(q){let H={geometries:0,textures:0},W={frame:0,calls:0,triangles:0,points:0,lines:0};function X(Z,$,J){switch(W.calls++,$){case q.TRIANGLES:W.triangles+=J*(Z/3);break;case q.LINES:W.lines+=J*(Z/2);break;case q.LINE_STRIP:W.lines+=J*(Z-1);break;case q.LINE_LOOP:W.lines+=J*Z;break;case q.POINTS:W.points+=J*Z;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",$);break}}function Y(){W.calls=0,W.triangles=0,W.points=0,W.lines=0}return{memory:H,render:W,programs:null,autoReset:!0,reset:Y,update:X}}function I7(q,H,W){let X=new WeakMap,Y=new oq;function Z($,J,Q){let _=$.morphTargetInfluences,F=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,O=F!==void 0?F.length:0,U=X.get(J);if(U===void 0||U.count!==O){let N=function(){j.dispose(),X.delete(J),J.removeEventListener("dispose",N)};if(U!==void 0)U.texture.dispose();let E=J.morphAttributes.position!==void 0,R=J.morphAttributes.normal!==void 0,K=J.morphAttributes.color!==void 0,B=J.morphAttributes.position||[],G=J.morphAttributes.normal||[],S=J.morphAttributes.color||[],V=0;if(E===!0)V=1;if(R===!0)V=2;if(K===!0)V=3;let P=J.attributes.position.count*V,b=1;if(P>H.maxTextureSize)b=Math.ceil(P/H.maxTextureSize),P=H.maxTextureSize;let T=new Float32Array(P*b*4*O),j=new CY(T,P,b,O);j.type=1015,j.needsUpdate=!0;let x=V*4;for(let C=0;C<O;C++){let I=B[C],m=G[C],f=S[C],d=P*b*4*C;for(let i=0;i<I.count;i++){let c=i*x;if(E===!0)Y.fromBufferAttribute(I,i),T[d+c+0]=Y.x,T[d+c+1]=Y.y,T[d+c+2]=Y.z,T[d+c+3]=0;if(R===!0)Y.fromBufferAttribute(m,i),T[d+c+4]=Y.x,T[d+c+5]=Y.y,T[d+c+6]=Y.z,T[d+c+7]=0;if(K===!0)Y.fromBufferAttribute(f,i),T[d+c+8]=Y.x,T[d+c+9]=Y.y,T[d+c+10]=Y.z,T[d+c+11]=f.itemSize===4?Y.w:1}}U={count:O,texture:j,size:new uq(P,b)},X.set(J,U),J.addEventListener("dispose",N)}if($.isInstancedMesh===!0&&$.morphTexture!==null)Q.getUniforms().setValue(q,"morphTexture",$.morphTexture,W);else{let E=0;for(let K=0;K<_.length;K++)E+=_[K];let R=J.morphTargetsRelative?1:1-E;Q.getUniforms().setValue(q,"morphTargetBaseInfluence",R),Q.getUniforms().setValue(q,"morphTargetInfluences",_)}Q.getUniforms().setValue(q,"morphTargetsTexture",U.texture,W),Q.getUniforms().setValue(q,"morphTargetsTextureSize",U.size)}return{update:Z}}function h7(q,H,W,X){let Y=new WeakMap;function Z(Q){let _=X.render.frame,F=Q.geometry,O=H.get(Q,F);if(Y.get(O)!==_)H.update(O),Y.set(O,_);if(Q.isInstancedMesh){if(Q.hasEventListener("dispose",J)===!1)Q.addEventListener("dispose",J);if(Y.get(Q)!==_){if(W.update(Q.instanceMatrix,q.ARRAY_BUFFER),Q.instanceColor!==null)W.update(Q.instanceColor,q.ARRAY_BUFFER);Y.set(Q,_)}}if(Q.isSkinnedMesh){let U=Q.skeleton;if(Y.get(U)!==_)U.update(),Y.set(U,_)}return O}function $(){Y=new WeakMap}function J(Q){let _=Q.target;if(_.removeEventListener("dispose",J),W.remove(_.instanceMatrix),_.instanceColor!==null)W.remove(_.instanceColor)}return{update:Z,dispose:$}}let W3=new BH,X3=new qZ(1,1),Y3=new CY,Z3=new gZ,$3=new pY,J3=[],Q3=[],_3=new Float32Array(16),F3=new Float32Array(9),O3=new Float32Array(4);function ZX(q,H,W){let X=q[0];if(X<=0||X>0)return q;let Y=H*W,Z=J3[Y];if(Z===void 0)Z=new Float32Array(Y),J3[Y]=Z;if(H!==0){X.toArray(Z,0);for(let $=1,J=0;$!==H;++$)J+=W,q[$].toArray(Z,J)}return Z}function FH(q,H){if(q.length!==H.length)return!1;for(let W=0,X=q.length;W<X;W++)if(q[W]!==H[W])return!1;return!0}function OH(q,H){for(let W=0,X=H.length;W<X;W++)q[W]=H[W]}function UY(q,H){let W=Q3[H];if(W===void 0)W=new Int32Array(H),Q3[H]=W;for(let X=0;X!==H;++X)W[X]=q.allocateTextureUnit();return W}function b7(q,H){let W=this.cache;if(W[0]===H)return;q.uniform1f(this.addr,H),W[0]=H}function D7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y)q.uniform2f(this.addr,H.x,H.y),W[0]=H.x,W[1]=H.y}else{if(FH(W,H))return;q.uniform2fv(this.addr,H),OH(W,H)}}function y7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y||W[2]!==H.z)q.uniform3f(this.addr,H.x,H.y,H.z),W[0]=H.x,W[1]=H.y,W[2]=H.z}else if(H.r!==void 0){if(W[0]!==H.r||W[1]!==H.g||W[2]!==H.b)q.uniform3f(this.addr,H.r,H.g,H.b),W[0]=H.r,W[1]=H.g,W[2]=H.b}else{if(FH(W,H))return;q.uniform3fv(this.addr,H),OH(W,H)}}function g7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y||W[2]!==H.z||W[3]!==H.w)q.uniform4f(this.addr,H.x,H.y,H.z,H.w),W[0]=H.x,W[1]=H.y,W[2]=H.z,W[3]=H.w}else{if(FH(W,H))return;q.uniform4fv(this.addr,H),OH(W,H)}}function x7(q,H){let W=this.cache,X=H.elements;if(X===void 0){if(FH(W,H))return;q.uniformMatrix2fv(this.addr,!1,H),OH(W,H)}else{if(FH(W,X))return;O3.set(X),q.uniformMatrix2fv(this.addr,!1,O3),OH(W,X)}}function l7(q,H){let W=this.cache,X=H.elements;if(X===void 0){if(FH(W,H))return;q.uniformMatrix3fv(this.addr,!1,H),OH(W,H)}else{if(FH(W,X))return;F3.set(X),q.uniformMatrix3fv(this.addr,!1,F3),OH(W,X)}}function u7(q,H){let W=this.cache,X=H.elements;if(X===void 0){if(FH(W,H))return;q.uniformMatrix4fv(this.addr,!1,H),OH(W,H)}else{if(FH(W,X))return;_3.set(X),q.uniformMatrix4fv(this.addr,!1,_3),OH(W,X)}}function f7(q,H){let W=this.cache;if(W[0]===H)return;q.uniform1i(this.addr,H),W[0]=H}function p7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y)q.uniform2i(this.addr,H.x,H.y),W[0]=H.x,W[1]=H.y}else{if(FH(W,H))return;q.uniform2iv(this.addr,H),OH(W,H)}}function m7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y||W[2]!==H.z)q.uniform3i(this.addr,H.x,H.y,H.z),W[0]=H.x,W[1]=H.y,W[2]=H.z}else{if(FH(W,H))return;q.uniform3iv(this.addr,H),OH(W,H)}}function c7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y||W[2]!==H.z||W[3]!==H.w)q.uniform4i(this.addr,H.x,H.y,H.z,H.w),W[0]=H.x,W[1]=H.y,W[2]=H.z,W[3]=H.w}else{if(FH(W,H))return;q.uniform4iv(this.addr,H),OH(W,H)}}function d7(q,H){let W=this.cache;if(W[0]===H)return;q.uniform1ui(this.addr,H),W[0]=H}function n7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y)q.uniform2ui(this.addr,H.x,H.y),W[0]=H.x,W[1]=H.y}else{if(FH(W,H))return;q.uniform2uiv(this.addr,H),OH(W,H)}}function o7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y||W[2]!==H.z)q.uniform3ui(this.addr,H.x,H.y,H.z),W[0]=H.x,W[1]=H.y,W[2]=H.z}else{if(FH(W,H))return;q.uniform3uiv(this.addr,H),OH(W,H)}}function s7(q,H){let W=this.cache;if(H.x!==void 0){if(W[0]!==H.x||W[1]!==H.y||W[2]!==H.z||W[3]!==H.w)q.uniform4ui(this.addr,H.x,H.y,H.z,H.w),W[0]=H.x,W[1]=H.y,W[2]=H.z,W[3]=H.w}else{if(FH(W,H))return;q.uniform4uiv(this.addr,H),OH(W,H)}}function i7(q,H,W){let X=this.cache,Y=W.allocateTextureUnit();if(X[0]!==Y)q.uniform1i(this.addr,Y),X[0]=Y;let Z;if(this.type===q.SAMPLER_2D_SHADOW)X3.compareFunction=515,Z=X3;else Z=W3;W.setTexture2D(H||Z,Y)}function a7(q,H,W){let X=this.cache,Y=W.allocateTextureUnit();if(X[0]!==Y)q.uniform1i(this.addr,Y),X[0]=Y;W.setTexture3D(H||Z3,Y)}function t7(q,H,W){let X=this.cache,Y=W.allocateTextureUnit();if(X[0]!==Y)q.uniform1i(this.addr,Y),X[0]=Y;W.setTextureCube(H||$3,Y)}function r7(q,H,W){let X=this.cache,Y=W.allocateTextureUnit();if(X[0]!==Y)q.uniform1i(this.addr,Y),X[0]=Y;W.setTexture2DArray(H||Y3,Y)}function e7(q){switch(q){case 5126:return b7;case 35664:return D7;case 35665:return y7;case 35666:return g7;case 35674:return x7;case 35675:return l7;case 35676:return u7;case 5124:case 35670:return f7;case 35667:case 35671:return p7;case 35668:case 35672:return m7;case 35669:case 35673:return c7;case 5125:return d7;case 36294:return n7;case 36295:return o7;case 36296:return s7;case 35678:case 36198:case 36298:case 36306:case 35682:return i7;case 35679:case 36299:case 36307:return a7;case 35680:case 36300:case 36308:case 36293:return t7;case 36289:case 36303:case 36311:case 36292:return r7}}function q8(q,H){q.uniform1fv(this.addr,H)}function H8(q,H){let W=ZX(H,this.size,2);q.uniform2fv(this.addr,W)}function W8(q,H){let W=ZX(H,this.size,3);q.uniform3fv(this.addr,W)}function X8(q,H){let W=ZX(H,this.size,4);q.uniform4fv(this.addr,W)}function Y8(q,H){let W=ZX(H,this.size,4);q.uniformMatrix2fv(this.addr,!1,W)}function Z8(q,H){let W=ZX(H,this.size,9);q.uniformMatrix3fv(this.addr,!1,W)}function $8(q,H){let W=ZX(H,this.size,16);q.uniformMatrix4fv(this.addr,!1,W)}function J8(q,H){q.uniform1iv(this.addr,H)}function Q8(q,H){q.uniform2iv(this.addr,H)}function _8(q,H){q.uniform3iv(this.addr,H)}function F8(q,H){q.uniform4iv(this.addr,H)}function O8(q,H){q.uniform1uiv(this.addr,H)}function U8(q,H){q.uniform2uiv(this.addr,H)}function B8(q,H){q.uniform3uiv(this.addr,H)}function E8(q,H){q.uniform4uiv(this.addr,H)}function G8(q,H,W){let X=this.cache,Y=H.length,Z=UY(W,Y);if(!FH(X,Z))q.uniform1iv(this.addr,Z),OH(X,Z);for(let $=0;$!==Y;++$)W.setTexture2D(H[$]||W3,Z[$])}function L8(q,H,W){let X=this.cache,Y=H.length,Z=UY(W,Y);if(!FH(X,Z))q.uniform1iv(this.addr,Z),OH(X,Z);for(let $=0;$!==Y;++$)W.setTexture3D(H[$]||Z3,Z[$])}function R8(q,H,W){let X=this.cache,Y=H.length,Z=UY(W,Y);if(!FH(X,Z))q.uniform1iv(this.addr,Z),OH(X,Z);for(let $=0;$!==Y;++$)W.setTextureCube(H[$]||$3,Z[$])}function K8(q,H,W){let X=this.cache,Y=H.length,Z=UY(W,Y);if(!FH(X,Z))q.uniform1iv(this.addr,Z),OH(X,Z);for(let $=0;$!==Y;++$)W.setTexture2DArray(H[$]||Y3,Z[$])}function z8(q){switch(q){case 5126:return q8;case 35664:return H8;case 35665:return W8;case 35666:return X8;case 35674:return Y8;case 35675:return Z8;case 35676:return $8;case 5124:case 35670:return J8;case 35667:case 35671:return Q8;case 35668:case 35672:return _8;case 35669:case 35673:return F8;case 5125:return O8;case 36294:return U8;case 36295:return B8;case 36296:return E8;case 35678:case 36198:case 36298:case 36306:case 35682:return G8;case 35679:case 36299:case 36307:return L8;case 35680:case 36300:case 36308:case 36293:return R8;case 36289:case 36303:case 36311:case 36292:return K8}}class U3{constructor(q,H,W){this.id=q,this.addr=W,this.cache=[],this.type=H.type,this.setValue=e7(H.type)}}class B3{constructor(q,H,W){this.id=q,this.addr=W,this.cache=[],this.type=H.type,this.size=H.size,this.setValue=z8(H.type)}}class E3{constructor(q){this.id=q,this.seq=[],this.map={}}setValue(q,H,W){let X=this.seq;for(let Y=0,Z=X.length;Y!==Z;++Y){let $=X[Y];$.setValue(q,H[$.id],W)}}}let GZ=/(\w+)(\])?(\[|\.)?/g;function G3(q,H){q.seq.push(H),q.map[H.id]=H}function V8(q,H,W){let X=q.name,Y=X.length;GZ.lastIndex=0;while(!0){let Z=GZ.exec(X),$=GZ.lastIndex,J=Z[1],Q=Z[2]==="]",_=Z[3];if(Q)J=J|0;if(_===void 0||_==="["&&$+2===Y){G3(W,_===void 0?new U3(J,q,H):new B3(J,q,H));break}else{let O=W.map[J];if(O===void 0)O=new E3(J),G3(W,O);W=O}}}class PX{constructor(q,H){this.seq=[],this.map={};let W=q.getProgramParameter(H,q.ACTIVE_UNIFORMS);for(let X=0;X<W;++X){let Y=q.getActiveUniform(H,X),Z=q.getUniformLocation(H,Y.name);V8(Y,Z,this)}}setValue(q,H,W,X){let Y=this.map[H];if(Y!==void 0)Y.setValue(q,W,X)}setOptional(q,H,W){let X=H[W];if(X!==void 0)this.setValue(q,W,X)}static upload(q,H,W,X){for(let Y=0,Z=H.length;Y!==Z;++Y){let $=H[Y],J=W[$.id];if(J.needsUpdate!==!1)$.setValue(q,J.value,X)}}static seqWithValue(q,H){let W=[];for(let X=0,Y=q.length;X!==Y;++X){let Z=q[X];if(Z.id in H)W.push(Z)}return W}}function L3(q,H,W){let X=q.createShader(H);return q.shaderSource(X,W),q.compileShader(X),X}let C8=37297,N8=0;function M8(q,H){let W=q.split(`
`),X=[],Y=Math.max(H-6,0),Z=Math.min(H+6,W.length);for(let $=Y;$<Z;$++){let J=$+1;X.push(`${J===H?">":" "} ${J}: ${W[$]}`)}return X.join(`
`)}let R3=new hq;function S8(q){fq._getMatrix(R3,fq.workingColorSpace,q);let H=`mat3( ${R3.elements.map((W)=>W.toFixed(4))} )`;switch(fq.getTransfer(q)){case"linear":return[H,"LinearTransferOETF"];case"srgb":return[H,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",q),[H,"LinearTransferOETF"]}}function K3(q,H,W){let X=q.getShaderParameter(H,q.COMPILE_STATUS),Z=(q.getShaderInfoLog(H)||"").trim();if(X&&Z==="")return"";let $=/ERROR: 0:(\d+)/.exec(Z);if($){let J=parseInt($[1]);return W.toUpperCase()+`

`+Z+`

`+M8(q.getShaderSource(H),J)}else return Z}function P8(q,H){let W=S8(H);return[`vec4 ${q}( vec4 value ) {`,`	return ${W[1]}( vec4( value.rgb * ${W[0]}, value.a ) );`,"}"].join(`
`)}function T8(q,H){let W;switch(H){case 1:W="Linear";break;case 2:W="Reinhard";break;case 3:W="Cineon";break;case 4:W="ACESFilmic";break;case 6:W="AgX";break;case 7:W="Neutral";break;case 5:W="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",H),W="Linear"}return"vec3 "+q+"( vec3 color ) { return "+W+"ToneMapping( color ); }"}let BY=new k;function w8(){fq.getLuminanceCoefficients(BY);let q=BY.x.toFixed(4),H=BY.y.toFixed(4),W=BY.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${q}, ${H}, ${W} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function A8(q){return[q.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",q.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(TX).join(`
`)}function j8(q){let H=[];for(let W in q){let X=q[W];if(X===!1)continue;H.push("#define "+W+" "+X)}return H.join(`
`)}function k8(q,H){let W={},X=q.getProgramParameter(H,q.ACTIVE_ATTRIBUTES);for(let Y=0;Y<X;Y++){let Z=q.getActiveAttrib(H,Y),$=Z.name,J=1;if(Z.type===q.FLOAT_MAT2)J=2;if(Z.type===q.FLOAT_MAT3)J=3;if(Z.type===q.FLOAT_MAT4)J=4;W[$]={type:Z.type,location:q.getAttribLocation(H,$),locationSize:J}}return W}function TX(q){return q!==""}function z3(q,H){let W=H.numSpotLightShadows+H.numSpotLightMaps-H.numSpotLightShadowsWithMaps;return q.replace(/NUM_DIR_LIGHTS/g,H.numDirLights).replace(/NUM_SPOT_LIGHTS/g,H.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,H.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,W).replace(/NUM_RECT_AREA_LIGHTS/g,H.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,H.numPointLights).replace(/NUM_HEMI_LIGHTS/g,H.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,H.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,H.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,H.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,H.numPointLightShadows)}function V3(q,H){return q.replace(/NUM_CLIPPING_PLANES/g,H.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,H.numClippingPlanes-H.numClipIntersection)}let v8=/^[ \t]*#include +<([\w\d./]+)>/gm;function LZ(q){return q.replace(v8,h8)}let I8=new Map;function h8(q,H){let W=Dq[H];if(W===void 0){let X=I8.get(H);if(X!==void 0)W=Dq[X],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',H,X);else throw new Error("Can not resolve #include <"+H+">")}return LZ(W)}let b8=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C3(q){return q.replace(b8,D8)}function D8(q,H,W,X){let Y="";for(let Z=parseInt(H);Z<parseInt(W);Z++)Y+=X.replace(/\[\s*i\s*\]/g,"[ "+Z+" ]").replace(/UNROLLED_LOOP_INDEX/g,Z);return Y}function N3(q){let H=`precision ${q.precision} float;
	precision ${q.precision} int;
	precision ${q.precision} sampler2D;
	precision ${q.precision} samplerCube;
	precision ${q.precision} sampler3D;
	precision ${q.precision} sampler2DArray;
	precision ${q.precision} sampler2DShadow;
	precision ${q.precision} samplerCubeShadow;
	precision ${q.precision} sampler2DArrayShadow;
	precision ${q.precision} isampler2D;
	precision ${q.precision} isampler3D;
	precision ${q.precision} isamplerCube;
	precision ${q.precision} isampler2DArray;
	precision ${q.precision} usampler2D;
	precision ${q.precision} usampler3D;
	precision ${q.precision} usamplerCube;
	precision ${q.precision} usampler2DArray;
	`;if(q.precision==="highp")H+=`
#define HIGH_PRECISION`;else if(q.precision==="mediump")H+=`
#define MEDIUM_PRECISION`;else if(q.precision==="lowp")H+=`
#define LOW_PRECISION`;return H}function y8(q){let H="SHADOWMAP_TYPE_BASIC";if(q.shadowMapType===1)H="SHADOWMAP_TYPE_PCF";else if(q.shadowMapType===2)H="SHADOWMAP_TYPE_PCF_SOFT";else if(q.shadowMapType===3)H="SHADOWMAP_TYPE_VSM";return H}function g8(q){let H="ENVMAP_TYPE_CUBE";if(q.envMap)switch(q.envMapMode){case 301:case 302:H="ENVMAP_TYPE_CUBE";break;case 306:H="ENVMAP_TYPE_CUBE_UV";break}return H}function x8(q){let H="ENVMAP_MODE_REFLECTION";if(q.envMap)switch(q.envMapMode){case 302:H="ENVMAP_MODE_REFRACTION";break}return H}function l8(q){let H="ENVMAP_BLENDING_NONE";if(q.envMap)switch(q.combine){case 0:H="ENVMAP_BLENDING_MULTIPLY";break;case 1:H="ENVMAP_BLENDING_MIX";break;case 2:H="ENVMAP_BLENDING_ADD";break}return H}function u8(q){let H=q.envMapCubeUVHeight;if(H===null)return null;let W=Math.log2(H)-2,X=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,W),112)),texelHeight:X,maxMip:W}}function f8(q,H,W,X){let Y=q.getContext(),Z=W.defines,$=W.vertexShader,J=W.fragmentShader,Q=y8(W),_=g8(W),F=x8(W),O=l8(W),U=u8(W),E=A8(W),R=j8(Z),K=Y.createProgram(),B,G,S=W.glslVersion?"#version "+W.glslVersion+`
`:"";if(W.isRawShaderMaterial){if(B=["#define SHADER_TYPE "+W.shaderType,"#define SHADER_NAME "+W.shaderName,R].filter(TX).join(`
`),B.length>0)B+=`
`;if(G=["#define SHADER_TYPE "+W.shaderType,"#define SHADER_NAME "+W.shaderName,R].filter(TX).join(`
`),G.length>0)G+=`
`}else B=[N3(W),"#define SHADER_TYPE "+W.shaderType,"#define SHADER_NAME "+W.shaderName,R,W.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",W.batching?"#define USE_BATCHING":"",W.batchingColor?"#define USE_BATCHING_COLOR":"",W.instancing?"#define USE_INSTANCING":"",W.instancingColor?"#define USE_INSTANCING_COLOR":"",W.instancingMorph?"#define USE_INSTANCING_MORPH":"",W.useFog&&W.fog?"#define USE_FOG":"",W.useFog&&W.fogExp2?"#define FOG_EXP2":"",W.map?"#define USE_MAP":"",W.envMap?"#define USE_ENVMAP":"",W.envMap?"#define "+F:"",W.lightMap?"#define USE_LIGHTMAP":"",W.aoMap?"#define USE_AOMAP":"",W.bumpMap?"#define USE_BUMPMAP":"",W.normalMap?"#define USE_NORMALMAP":"",W.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",W.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",W.displacementMap?"#define USE_DISPLACEMENTMAP":"",W.emissiveMap?"#define USE_EMISSIVEMAP":"",W.anisotropy?"#define USE_ANISOTROPY":"",W.anisotropyMap?"#define USE_ANISOTROPYMAP":"",W.clearcoatMap?"#define USE_CLEARCOATMAP":"",W.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",W.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",W.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",W.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",W.specularMap?"#define USE_SPECULARMAP":"",W.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",W.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",W.roughnessMap?"#define USE_ROUGHNESSMAP":"",W.metalnessMap?"#define USE_METALNESSMAP":"",W.alphaMap?"#define USE_ALPHAMAP":"",W.alphaHash?"#define USE_ALPHAHASH":"",W.transmission?"#define USE_TRANSMISSION":"",W.transmissionMap?"#define USE_TRANSMISSIONMAP":"",W.thicknessMap?"#define USE_THICKNESSMAP":"",W.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",W.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",W.mapUv?"#define MAP_UV "+W.mapUv:"",W.alphaMapUv?"#define ALPHAMAP_UV "+W.alphaMapUv:"",W.lightMapUv?"#define LIGHTMAP_UV "+W.lightMapUv:"",W.aoMapUv?"#define AOMAP_UV "+W.aoMapUv:"",W.emissiveMapUv?"#define EMISSIVEMAP_UV "+W.emissiveMapUv:"",W.bumpMapUv?"#define BUMPMAP_UV "+W.bumpMapUv:"",W.normalMapUv?"#define NORMALMAP_UV "+W.normalMapUv:"",W.displacementMapUv?"#define DISPLACEMENTMAP_UV "+W.displacementMapUv:"",W.metalnessMapUv?"#define METALNESSMAP_UV "+W.metalnessMapUv:"",W.roughnessMapUv?"#define ROUGHNESSMAP_UV "+W.roughnessMapUv:"",W.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+W.anisotropyMapUv:"",W.clearcoatMapUv?"#define CLEARCOATMAP_UV "+W.clearcoatMapUv:"",W.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+W.clearcoatNormalMapUv:"",W.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+W.clearcoatRoughnessMapUv:"",W.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+W.iridescenceMapUv:"",W.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+W.iridescenceThicknessMapUv:"",W.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+W.sheenColorMapUv:"",W.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+W.sheenRoughnessMapUv:"",W.specularMapUv?"#define SPECULARMAP_UV "+W.specularMapUv:"",W.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+W.specularColorMapUv:"",W.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+W.specularIntensityMapUv:"",W.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+W.transmissionMapUv:"",W.thicknessMapUv?"#define THICKNESSMAP_UV "+W.thicknessMapUv:"",W.vertexTangents&&W.flatShading===!1?"#define USE_TANGENT":"",W.vertexColors?"#define USE_COLOR":"",W.vertexAlphas?"#define USE_COLOR_ALPHA":"",W.vertexUv1s?"#define USE_UV1":"",W.vertexUv2s?"#define USE_UV2":"",W.vertexUv3s?"#define USE_UV3":"",W.pointsUvs?"#define USE_POINTS_UV":"",W.flatShading?"#define FLAT_SHADED":"",W.skinning?"#define USE_SKINNING":"",W.morphTargets?"#define USE_MORPHTARGETS":"",W.morphNormals&&W.flatShading===!1?"#define USE_MORPHNORMALS":"",W.morphColors?"#define USE_MORPHCOLORS":"",W.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+W.morphTextureStride:"",W.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+W.morphTargetsCount:"",W.doubleSided?"#define DOUBLE_SIDED":"",W.flipSided?"#define FLIP_SIDED":"",W.shadowMapEnabled?"#define USE_SHADOWMAP":"",W.shadowMapEnabled?"#define "+Q:"",W.sizeAttenuation?"#define USE_SIZEATTENUATION":"",W.numLightProbes>0?"#define USE_LIGHT_PROBES":"",W.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",W.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(TX).join(`
`),G=[N3(W),"#define SHADER_TYPE "+W.shaderType,"#define SHADER_NAME "+W.shaderName,R,W.useFog&&W.fog?"#define USE_FOG":"",W.useFog&&W.fogExp2?"#define FOG_EXP2":"",W.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",W.map?"#define USE_MAP":"",W.matcap?"#define USE_MATCAP":"",W.envMap?"#define USE_ENVMAP":"",W.envMap?"#define "+_:"",W.envMap?"#define "+F:"",W.envMap?"#define "+O:"",U?"#define CUBEUV_TEXEL_WIDTH "+U.texelWidth:"",U?"#define CUBEUV_TEXEL_HEIGHT "+U.texelHeight:"",U?"#define CUBEUV_MAX_MIP "+U.maxMip+".0":"",W.lightMap?"#define USE_LIGHTMAP":"",W.aoMap?"#define USE_AOMAP":"",W.bumpMap?"#define USE_BUMPMAP":"",W.normalMap?"#define USE_NORMALMAP":"",W.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",W.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",W.emissiveMap?"#define USE_EMISSIVEMAP":"",W.anisotropy?"#define USE_ANISOTROPY":"",W.anisotropyMap?"#define USE_ANISOTROPYMAP":"",W.clearcoat?"#define USE_CLEARCOAT":"",W.clearcoatMap?"#define USE_CLEARCOATMAP":"",W.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",W.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",W.dispersion?"#define USE_DISPERSION":"",W.iridescence?"#define USE_IRIDESCENCE":"",W.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",W.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",W.specularMap?"#define USE_SPECULARMAP":"",W.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",W.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",W.roughnessMap?"#define USE_ROUGHNESSMAP":"",W.metalnessMap?"#define USE_METALNESSMAP":"",W.alphaMap?"#define USE_ALPHAMAP":"",W.alphaTest?"#define USE_ALPHATEST":"",W.alphaHash?"#define USE_ALPHAHASH":"",W.sheen?"#define USE_SHEEN":"",W.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",W.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",W.transmission?"#define USE_TRANSMISSION":"",W.transmissionMap?"#define USE_TRANSMISSIONMAP":"",W.thicknessMap?"#define USE_THICKNESSMAP":"",W.vertexTangents&&W.flatShading===!1?"#define USE_TANGENT":"",W.vertexColors||W.instancingColor||W.batchingColor?"#define USE_COLOR":"",W.vertexAlphas?"#define USE_COLOR_ALPHA":"",W.vertexUv1s?"#define USE_UV1":"",W.vertexUv2s?"#define USE_UV2":"",W.vertexUv3s?"#define USE_UV3":"",W.pointsUvs?"#define USE_POINTS_UV":"",W.gradientMap?"#define USE_GRADIENTMAP":"",W.flatShading?"#define FLAT_SHADED":"",W.doubleSided?"#define DOUBLE_SIDED":"",W.flipSided?"#define FLIP_SIDED":"",W.shadowMapEnabled?"#define USE_SHADOWMAP":"",W.shadowMapEnabled?"#define "+Q:"",W.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",W.numLightProbes>0?"#define USE_LIGHT_PROBES":"",W.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",W.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",W.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",W.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",W.toneMapping!==0?"#define TONE_MAPPING":"",W.toneMapping!==0?Dq.tonemapping_pars_fragment:"",W.toneMapping!==0?T8("toneMapping",W.toneMapping):"",W.dithering?"#define DITHERING":"",W.opaque?"#define OPAQUE":"",Dq.colorspace_pars_fragment,P8("linearToOutputTexel",W.outputColorSpace),w8(),W.useDepthPacking?"#define DEPTH_PACKING "+W.depthPacking:"",`
`].filter(TX).join(`
`);if($=LZ($),$=z3($,W),$=V3($,W),J=LZ(J),J=z3(J,W),J=V3(J,W),$=C3($),J=C3(J),W.isRawShaderMaterial!==!0)S=`#version 300 es
`,B=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+B,G=["#define varying in",W.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",W.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+G;let V=S+B+$,P=S+G+J,b=L3(Y,Y.VERTEX_SHADER,V),T=L3(Y,Y.FRAGMENT_SHADER,P);if(Y.attachShader(K,b),Y.attachShader(K,T),W.index0AttributeName!==void 0)Y.bindAttribLocation(K,0,W.index0AttributeName);else if(W.morphTargets===!0)Y.bindAttribLocation(K,0,"position");Y.linkProgram(K);function j(I){if(q.debug.checkShaderErrors){let m=Y.getProgramInfoLog(K)||"",f=Y.getShaderInfoLog(b)||"",d=Y.getShaderInfoLog(T)||"",i=m.trim(),c=f.trim(),t=d.trim(),l=!0,Xq=!0;if(Y.getProgramParameter(K,Y.LINK_STATUS)===!1)if(l=!1,typeof q.debug.onShaderError==="function")q.debug.onShaderError(Y,K,b,T);else{let _q=K3(Y,b,"vertex"),Aq=K3(Y,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+Y.getError()+" - VALIDATE_STATUS "+Y.getProgramParameter(K,Y.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+i+`
`+_q+`
`+Aq)}else if(i!=="")console.warn("THREE.WebGLProgram: Program Info Log:",i);else if(c===""||t==="")Xq=!1;if(Xq)I.diagnostics={runnable:l,programLog:i,vertexShader:{log:c,prefix:B},fragmentShader:{log:t,prefix:G}}}Y.deleteShader(b),Y.deleteShader(T),x=new PX(Y,K),N=k8(Y,K)}let x;this.getUniforms=function(){if(x===void 0)j(this);return x};let N;this.getAttributes=function(){if(N===void 0)j(this);return N};let C=W.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(C===!1)C=Y.getProgramParameter(K,C8);return C},this.destroy=function(){X.releaseStatesOfProgram(this),Y.deleteProgram(K),this.program=void 0},this.type=W.shaderType,this.name=W.shaderName,this.id=N8++,this.cacheKey=H,this.usedTimes=1,this.program=K,this.vertexShader=b,this.fragmentShader=T,this}let p8=0;class M3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(q){let{vertexShader:H,fragmentShader:W}=q,X=this._getShaderStage(H),Y=this._getShaderStage(W),Z=this._getShaderCacheForMaterial(q);if(Z.has(X)===!1)Z.add(X),X.usedTimes++;if(Z.has(Y)===!1)Z.add(Y),Y.usedTimes++;return this}remove(q){let H=this.materialCache.get(q);for(let W of H)if(W.usedTimes--,W.usedTimes===0)this.shaderCache.delete(W.code);return this.materialCache.delete(q),this}getVertexShaderID(q){return this._getShaderStage(q.vertexShader).id}getFragmentShaderID(q){return this._getShaderStage(q.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(q){let H=this.materialCache,W=H.get(q);if(W===void 0)W=new Set,H.set(q,W);return W}_getShaderStage(q){let H=this.shaderCache,W=H.get(q);if(W===void 0)W=new S3(q),H.set(q,W);return W}}class S3{constructor(q){this.id=p8++,this.code=q,this.usedTimes=0}}function m8(q,H,W,X,Y,Z,$){let J=new wY,Q=new M3,_=new Set,F=[],O=Y.logarithmicDepthBuffer,U=Y.vertexTextures,E=Y.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function K(N){if(_.add(N),N===0)return"uv";return`uv${N}`}function B(N,C,I,m,f){let d=m.fog,i=f.geometry,c=N.isMeshStandardMaterial?m.environment:null,t=(N.isMeshStandardMaterial?W:H).get(N.envMap||c),l=!!t&&t.mapping===306?t.image.height:null,Xq=R[N.type];if(N.precision!==null){if(E=Y.getMaxPrecision(N.precision),E!==N.precision)console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead.")}let _q=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,Aq=_q!==void 0?_q.length:0,mq=0;if(i.morphAttributes.position!==void 0)mq=1;if(i.morphAttributes.normal!==void 0)mq=2;if(i.morphAttributes.color!==void 0)mq=3;let XH,p,Yq,Kq;if(Xq){let tq=iH[Xq];XH=tq.vertexShader,p=tq.fragmentShader}else XH=N.vertexShader,p=N.fragmentShader,Q.update(N),Yq=Q.getVertexShaderID(N),Kq=Q.getFragmentShaderID(N);let Fq=q.getRenderTarget(),Lq=q.state.buffers.depth.getReversed(),cq=f.isInstancedMesh===!0,dq=f.isBatchedMesh===!0,pq=!!N.map,w=!!N.matcap,HH=!!t,Sq=!!N.aoMap,sq=!!N.lightMap,Nq=!!N.bumpMap,YH=!!N.normalMap,zq=!!N.displacementMap,Tq=!!N.emissiveMap,RH=!!N.metalnessMap,LH=!!N.roughnessMap,UH=N.anisotropy>0,M=N.clearcoat>0,L=N.dispersion>0,D=N.iridescence>0,n=N.sheen>0,s=N.transmission>0,u=UH&&!!N.anisotropyMap,Uq=M&&!!N.clearcoatMap,qq=M&&!!N.clearcoatNormalMap,Rq=M&&!!N.clearcoatRoughnessMap,kq=D&&!!N.iridescenceMap,e=D&&!!N.iridescenceThicknessMap,Jq=n&&!!N.sheenColorMap,Vq=n&&!!N.sheenRoughnessMap,Cq=!!N.specularMap,Qq=!!N.specularColorMap,yq=!!N.specularIntensityMap,A=s&&!!N.transmissionMap,Zq=s&&!!N.thicknessMap,Hq=!!N.gradientMap,Bq=!!N.alphaMap,a=N.alphaTest>0,o=!!N.alphaHash,Gq=!!N.extensions,Iq=0;if(N.toneMapped){if(Fq===null||Fq.isXRRenderTarget===!0)Iq=q.toneMapping}let eq={shaderID:Xq,shaderType:N.type,shaderName:N.name,vertexShader:XH,fragmentShader:p,defines:N.defines,customVertexShaderID:Yq,customFragmentShaderID:Kq,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:dq,batchingColor:dq&&f._colorsTexture!==null,instancing:cq,instancingColor:cq&&f.instanceColor!==null,instancingMorph:cq&&f.morphTexture!==null,supportsVertexTextures:U,outputColorSpace:Fq===null?q.outputColorSpace:Fq.isXRRenderTarget===!0?Fq.texture.colorSpace:"srgb-linear",alphaToCoverage:!!N.alphaToCoverage,map:pq,matcap:w,envMap:HH,envMapMode:HH&&t.mapping,envMapCubeUVHeight:l,aoMap:Sq,lightMap:sq,bumpMap:Nq,normalMap:YH,displacementMap:U&&zq,emissiveMap:Tq,normalMapObjectSpace:YH&&N.normalMapType===1,normalMapTangentSpace:YH&&N.normalMapType===0,metalnessMap:RH,roughnessMap:LH,anisotropy:UH,anisotropyMap:u,clearcoat:M,clearcoatMap:Uq,clearcoatNormalMap:qq,clearcoatRoughnessMap:Rq,dispersion:L,iridescence:D,iridescenceMap:kq,iridescenceThicknessMap:e,sheen:n,sheenColorMap:Jq,sheenRoughnessMap:Vq,specularMap:Cq,specularColorMap:Qq,specularIntensityMap:yq,transmission:s,transmissionMap:A,thicknessMap:Zq,gradientMap:Hq,opaque:N.transparent===!1&&N.blending===1&&N.alphaToCoverage===!1,alphaMap:Bq,alphaTest:a,alphaHash:o,combine:N.combine,mapUv:pq&&K(N.map.channel),aoMapUv:Sq&&K(N.aoMap.channel),lightMapUv:sq&&K(N.lightMap.channel),bumpMapUv:Nq&&K(N.bumpMap.channel),normalMapUv:YH&&K(N.normalMap.channel),displacementMapUv:zq&&K(N.displacementMap.channel),emissiveMapUv:Tq&&K(N.emissiveMap.channel),metalnessMapUv:RH&&K(N.metalnessMap.channel),roughnessMapUv:LH&&K(N.roughnessMap.channel),anisotropyMapUv:u&&K(N.anisotropyMap.channel),clearcoatMapUv:Uq&&K(N.clearcoatMap.channel),clearcoatNormalMapUv:qq&&K(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rq&&K(N.clearcoatRoughnessMap.channel),iridescenceMapUv:kq&&K(N.iridescenceMap.channel),iridescenceThicknessMapUv:e&&K(N.iridescenceThicknessMap.channel),sheenColorMapUv:Jq&&K(N.sheenColorMap.channel),sheenRoughnessMapUv:Vq&&K(N.sheenRoughnessMap.channel),specularMapUv:Cq&&K(N.specularMap.channel),specularColorMapUv:Qq&&K(N.specularColorMap.channel),specularIntensityMapUv:yq&&K(N.specularIntensityMap.channel),transmissionMapUv:A&&K(N.transmissionMap.channel),thicknessMapUv:Zq&&K(N.thicknessMap.channel),alphaMapUv:Bq&&K(N.alphaMap.channel),vertexTangents:!!i.attributes.tangent&&(YH||UH),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!i.attributes.color&&i.attributes.color.itemSize===4,pointsUvs:f.isPoints===!0&&!!i.attributes.uv&&(pq||Bq),fog:!!d,useFog:N.fog===!0,fogExp2:!!d&&d.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:O,reversedDepthBuffer:Lq,skinning:f.isSkinnedMesh===!0,morphTargets:i.morphAttributes.position!==void 0,morphNormals:i.morphAttributes.normal!==void 0,morphColors:i.morphAttributes.color!==void 0,morphTargetsCount:Aq,morphTextureStride:mq,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:$.numPlanes,numClipIntersection:$.numIntersection,dithering:N.dithering,shadowMapEnabled:q.shadowMap.enabled&&I.length>0,shadowMapType:q.shadowMap.type,toneMapping:Iq,decodeVideoTexture:pq&&N.map.isVideoTexture===!0&&fq.getTransfer(N.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Tq&&N.emissiveMap.isVideoTexture===!0&&fq.getTransfer(N.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===2,flipSided:N.side===1,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:Gq&&N.extensions.clipCullDistance===!0&&X.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gq&&N.extensions.multiDraw===!0||dq)&&X.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:X.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return eq.vertexUv1s=_.has(1),eq.vertexUv2s=_.has(2),eq.vertexUv3s=_.has(3),_.clear(),eq}function G(N){let C=[];if(N.shaderID)C.push(N.shaderID);else C.push(N.customVertexShaderID),C.push(N.customFragmentShaderID);if(N.defines!==void 0)for(let I in N.defines)C.push(I),C.push(N.defines[I]);if(N.isRawShaderMaterial===!1)S(C,N),V(C,N),C.push(q.outputColorSpace);return C.push(N.customProgramCacheKey),C.join()}function S(N,C){N.push(C.precision),N.push(C.outputColorSpace),N.push(C.envMapMode),N.push(C.envMapCubeUVHeight),N.push(C.mapUv),N.push(C.alphaMapUv),N.push(C.lightMapUv),N.push(C.aoMapUv),N.push(C.bumpMapUv),N.push(C.normalMapUv),N.push(C.displacementMapUv),N.push(C.emissiveMapUv),N.push(C.metalnessMapUv),N.push(C.roughnessMapUv),N.push(C.anisotropyMapUv),N.push(C.clearcoatMapUv),N.push(C.clearcoatNormalMapUv),N.push(C.clearcoatRoughnessMapUv),N.push(C.iridescenceMapUv),N.push(C.iridescenceThicknessMapUv),N.push(C.sheenColorMapUv),N.push(C.sheenRoughnessMapUv),N.push(C.specularMapUv),N.push(C.specularColorMapUv),N.push(C.specularIntensityMapUv),N.push(C.transmissionMapUv),N.push(C.thicknessMapUv),N.push(C.combine),N.push(C.fogExp2),N.push(C.sizeAttenuation),N.push(C.morphTargetsCount),N.push(C.morphAttributeCount),N.push(C.numDirLights),N.push(C.numPointLights),N.push(C.numSpotLights),N.push(C.numSpotLightMaps),N.push(C.numHemiLights),N.push(C.numRectAreaLights),N.push(C.numDirLightShadows),N.push(C.numPointLightShadows),N.push(C.numSpotLightShadows),N.push(C.numSpotLightShadowsWithMaps),N.push(C.numLightProbes),N.push(C.shadowMapType),N.push(C.toneMapping),N.push(C.numClippingPlanes),N.push(C.numClipIntersection),N.push(C.depthPacking)}function V(N,C){if(J.disableAll(),C.supportsVertexTextures)J.enable(0);if(C.instancing)J.enable(1);if(C.instancingColor)J.enable(2);if(C.instancingMorph)J.enable(3);if(C.matcap)J.enable(4);if(C.envMap)J.enable(5);if(C.normalMapObjectSpace)J.enable(6);if(C.normalMapTangentSpace)J.enable(7);if(C.clearcoat)J.enable(8);if(C.iridescence)J.enable(9);if(C.alphaTest)J.enable(10);if(C.vertexColors)J.enable(11);if(C.vertexAlphas)J.enable(12);if(C.vertexUv1s)J.enable(13);if(C.vertexUv2s)J.enable(14);if(C.vertexUv3s)J.enable(15);if(C.vertexTangents)J.enable(16);if(C.anisotropy)J.enable(17);if(C.alphaHash)J.enable(18);if(C.batching)J.enable(19);if(C.dispersion)J.enable(20);if(C.batchingColor)J.enable(21);if(C.gradientMap)J.enable(22);if(N.push(J.mask),J.disableAll(),C.fog)J.enable(0);if(C.useFog)J.enable(1);if(C.flatShading)J.enable(2);if(C.logarithmicDepthBuffer)J.enable(3);if(C.reversedDepthBuffer)J.enable(4);if(C.skinning)J.enable(5);if(C.morphTargets)J.enable(6);if(C.morphNormals)J.enable(7);if(C.morphColors)J.enable(8);if(C.premultipliedAlpha)J.enable(9);if(C.shadowMapEnabled)J.enable(10);if(C.doubleSided)J.enable(11);if(C.flipSided)J.enable(12);if(C.useDepthPacking)J.enable(13);if(C.dithering)J.enable(14);if(C.transmission)J.enable(15);if(C.sheen)J.enable(16);if(C.opaque)J.enable(17);if(C.pointsUvs)J.enable(18);if(C.decodeVideoTexture)J.enable(19);if(C.decodeVideoTextureEmissive)J.enable(20);if(C.alphaToCoverage)J.enable(21);N.push(J.mask)}function P(N){let C=R[N.type],I;if(C){let m=iH[C];I=o4.clone(m.uniforms)}else I=N.uniforms;return I}function b(N,C){let I;for(let m=0,f=F.length;m<f;m++){let d=F[m];if(d.cacheKey===C){I=d,++I.usedTimes;break}}if(I===void 0)I=new f8(q,C,N,Z),F.push(I);return I}function T(N){if(--N.usedTimes===0){let C=F.indexOf(N);F[C]=F[F.length-1],F.pop(),N.destroy()}}function j(N){Q.remove(N)}function x(){Q.dispose()}return{getParameters:B,getProgramCacheKey:G,getUniforms:P,acquireProgram:b,releaseProgram:T,releaseShaderCache:j,programs:F,dispose:x}}function c8(){let q=new WeakMap;function H($){return q.has($)}function W($){let J=q.get($);if(J===void 0)J={},q.set($,J);return J}function X($){q.delete($)}function Y($,J,Q){q.get($)[J]=Q}function Z(){q=new WeakMap}return{has:H,get:W,remove:X,update:Y,dispose:Z}}function d8(q,H){if(q.groupOrder!==H.groupOrder)return q.groupOrder-H.groupOrder;else if(q.renderOrder!==H.renderOrder)return q.renderOrder-H.renderOrder;else if(q.material.id!==H.material.id)return q.material.id-H.material.id;else if(q.z!==H.z)return q.z-H.z;else return q.id-H.id}function P3(q,H){if(q.groupOrder!==H.groupOrder)return q.groupOrder-H.groupOrder;else if(q.renderOrder!==H.renderOrder)return q.renderOrder-H.renderOrder;else if(q.z!==H.z)return H.z-q.z;else return q.id-H.id}function T3(){let q=[],H=0,W=[],X=[],Y=[];function Z(){H=0,W.length=0,X.length=0,Y.length=0}function $(O,U,E,R,K,B){let G=q[H];if(G===void 0)G={id:O.id,object:O,geometry:U,material:E,groupOrder:R,renderOrder:O.renderOrder,z:K,group:B},q[H]=G;else G.id=O.id,G.object=O,G.geometry=U,G.material=E,G.groupOrder=R,G.renderOrder=O.renderOrder,G.z=K,G.group=B;return H++,G}function J(O,U,E,R,K,B){let G=$(O,U,E,R,K,B);if(E.transmission>0)X.push(G);else if(E.transparent===!0)Y.push(G);else W.push(G)}function Q(O,U,E,R,K,B){let G=$(O,U,E,R,K,B);if(E.transmission>0)X.unshift(G);else if(E.transparent===!0)Y.unshift(G);else W.unshift(G)}function _(O,U){if(W.length>1)W.sort(O||d8);if(X.length>1)X.sort(U||P3);if(Y.length>1)Y.sort(U||P3)}function F(){for(let O=H,U=q.length;O<U;O++){let E=q[O];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:W,transmissive:X,transparent:Y,init:Z,push:J,unshift:Q,finish:F,sort:_}}function n8(){let q=new WeakMap;function H(X,Y){let Z=q.get(X),$;if(Z===void 0)$=new T3,q.set(X,[$]);else if(Y>=Z.length)$=new T3,Z.push($);else $=Z[Y];return $}function W(){q=new WeakMap}return{get:H,dispose:W}}function o8(){let q={};return{get:function(H){if(q[H.id]!==void 0)return q[H.id];let W;switch(H.type){case"DirectionalLight":W={direction:new k,color:new jq};break;case"SpotLight":W={position:new k,direction:new k,color:new jq,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":W={position:new k,color:new jq,distance:0,decay:0};break;case"HemisphereLight":W={direction:new k,skyColor:new jq,groundColor:new jq};break;case"RectAreaLight":W={color:new jq,position:new k,halfWidth:new k,halfHeight:new k};break}return q[H.id]=W,W}}}function s8(){let q={};return{get:function(H){if(q[H.id]!==void 0)return q[H.id];let W;switch(H.type){case"DirectionalLight":W={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new uq};break;case"SpotLight":W={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new uq};break;case"PointLight":W={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new uq,shadowCameraNear:1,shadowCameraFar:1000};break}return q[H.id]=W,W}}}let i8=0;function a8(q,H){return(H.castShadow?2:0)-(q.castShadow?2:0)+(H.map?1:0)-(q.map?1:0)}function t8(q){let H=new o8,W=s8(),X={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)X.probe.push(new k);let Y=new k,Z=new bq,$=new bq;function J(_){let F=0,O=0,U=0;for(let N=0;N<9;N++)X.probe[N].set(0,0,0);let E=0,R=0,K=0,B=0,G=0,S=0,V=0,P=0,b=0,T=0,j=0;_.sort(a8);for(let N=0,C=_.length;N<C;N++){let I=_[N],m=I.color,f=I.intensity,d=I.distance,i=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)F+=m.r*f,O+=m.g*f,U+=m.b*f;else if(I.isLightProbe){for(let c=0;c<9;c++)X.probe[c].addScaledVector(I.sh.coefficients[c],f);j++}else if(I.isDirectionalLight){let c=H.get(I);if(c.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let t=I.shadow,l=W.get(I);l.shadowIntensity=t.intensity,l.shadowBias=t.bias,l.shadowNormalBias=t.normalBias,l.shadowRadius=t.radius,l.shadowMapSize=t.mapSize,X.directionalShadow[E]=l,X.directionalShadowMap[E]=i,X.directionalShadowMatrix[E]=I.shadow.matrix,S++}X.directional[E]=c,E++}else if(I.isSpotLight){let c=H.get(I);c.position.setFromMatrixPosition(I.matrixWorld),c.color.copy(m).multiplyScalar(f),c.distance=d,c.coneCos=Math.cos(I.angle),c.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),c.decay=I.decay,X.spot[K]=c;let t=I.shadow;if(I.map){if(X.spotLightMap[b]=I.map,b++,t.updateMatrices(I),I.castShadow)T++}if(X.spotLightMatrix[K]=t.matrix,I.castShadow){let l=W.get(I);l.shadowIntensity=t.intensity,l.shadowBias=t.bias,l.shadowNormalBias=t.normalBias,l.shadowRadius=t.radius,l.shadowMapSize=t.mapSize,X.spotShadow[K]=l,X.spotShadowMap[K]=i,P++}K++}else if(I.isRectAreaLight){let c=H.get(I);c.color.copy(m).multiplyScalar(f),c.halfWidth.set(I.width*0.5,0,0),c.halfHeight.set(0,I.height*0.5,0),X.rectArea[B]=c,B++}else if(I.isPointLight){let c=H.get(I);if(c.color.copy(I.color).multiplyScalar(I.intensity),c.distance=I.distance,c.decay=I.decay,I.castShadow){let t=I.shadow,l=W.get(I);l.shadowIntensity=t.intensity,l.shadowBias=t.bias,l.shadowNormalBias=t.normalBias,l.shadowRadius=t.radius,l.shadowMapSize=t.mapSize,l.shadowCameraNear=t.camera.near,l.shadowCameraFar=t.camera.far,X.pointShadow[R]=l,X.pointShadowMap[R]=i,X.pointShadowMatrix[R]=I.shadow.matrix,V++}X.point[R]=c,R++}else if(I.isHemisphereLight){let c=H.get(I);c.skyColor.copy(I.color).multiplyScalar(f),c.groundColor.copy(I.groundColor).multiplyScalar(f),X.hemi[G]=c,G++}}if(B>0)if(q.has("OES_texture_float_linear")===!0)X.rectAreaLTC1=Wq.LTC_FLOAT_1,X.rectAreaLTC2=Wq.LTC_FLOAT_2;else X.rectAreaLTC1=Wq.LTC_HALF_1,X.rectAreaLTC2=Wq.LTC_HALF_2;X.ambient[0]=F,X.ambient[1]=O,X.ambient[2]=U;let x=X.hash;if(x.directionalLength!==E||x.pointLength!==R||x.spotLength!==K||x.rectAreaLength!==B||x.hemiLength!==G||x.numDirectionalShadows!==S||x.numPointShadows!==V||x.numSpotShadows!==P||x.numSpotMaps!==b||x.numLightProbes!==j)X.directional.length=E,X.spot.length=K,X.rectArea.length=B,X.point.length=R,X.hemi.length=G,X.directionalShadow.length=S,X.directionalShadowMap.length=S,X.pointShadow.length=V,X.pointShadowMap.length=V,X.spotShadow.length=P,X.spotShadowMap.length=P,X.directionalShadowMatrix.length=S,X.pointShadowMatrix.length=V,X.spotLightMatrix.length=P+b-T,X.spotLightMap.length=b,X.numSpotLightShadowsWithMaps=T,X.numLightProbes=j,x.directionalLength=E,x.pointLength=R,x.spotLength=K,x.rectAreaLength=B,x.hemiLength=G,x.numDirectionalShadows=S,x.numPointShadows=V,x.numSpotShadows=P,x.numSpotMaps=b,x.numLightProbes=j,X.version=i8++}function Q(_,F){let O=0,U=0,E=0,R=0,K=0,B=F.matrixWorldInverse;for(let G=0,S=_.length;G<S;G++){let V=_[G];if(V.isDirectionalLight){let P=X.directional[O];P.direction.setFromMatrixPosition(V.matrixWorld),Y.setFromMatrixPosition(V.target.matrixWorld),P.direction.sub(Y),P.direction.transformDirection(B),O++}else if(V.isSpotLight){let P=X.spot[E];P.position.setFromMatrixPosition(V.matrixWorld),P.position.applyMatrix4(B),P.direction.setFromMatrixPosition(V.matrixWorld),Y.setFromMatrixPosition(V.target.matrixWorld),P.direction.sub(Y),P.direction.transformDirection(B),E++}else if(V.isRectAreaLight){let P=X.rectArea[R];P.position.setFromMatrixPosition(V.matrixWorld),P.position.applyMatrix4(B),$.identity(),Z.copy(V.matrixWorld),Z.premultiply(B),$.extractRotation(Z),P.halfWidth.set(V.width*0.5,0,0),P.halfHeight.set(0,V.height*0.5,0),P.halfWidth.applyMatrix4($),P.halfHeight.applyMatrix4($),R++}else if(V.isPointLight){let P=X.point[U];P.position.setFromMatrixPosition(V.matrixWorld),P.position.applyMatrix4(B),U++}else if(V.isHemisphereLight){let P=X.hemi[K];P.direction.setFromMatrixPosition(V.matrixWorld),P.direction.transformDirection(B),K++}}}return{setup:J,setupView:Q,state:X}}function w3(q){let H=new t8(q),W=[],X=[];function Y(F){_.camera=F,W.length=0,X.length=0}function Z(F){W.push(F)}function $(F){X.push(F)}function J(){H.setup(W)}function Q(F){H.setupView(W,F)}let _={lightsArray:W,shadowsArray:X,camera:null,lights:H,transmissionRenderTarget:{}};return{init:Y,state:_,setupLights:J,setupLightsView:Q,pushLight:Z,pushShadow:$}}function r8(q){let H=new WeakMap;function W(Y,Z=0){let $=H.get(Y),J;if($===void 0)J=new w3(q),H.set(Y,[J]);else if(Z>=$.length)J=new w3(q),$.push(J);else J=$[Z];return J}function X(){H=new WeakMap}return{get:W,dispose:X}}let e8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q9=`uniform sampler2D shadow_pass;
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
}`;function H9(q,H,W){let X=new tX,Y=new uq,Z=new uq,$=new oq,J=new M0({depthPacking:3201}),Q=new S0,_={},F=W.maxTextureSize,O={[0]:1,[1]:0,[2]:2},U=new YW({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new uq},radius:{value:4}},vertexShader:e8,fragmentShader:q9}),E=U.clone();E.defines.HORIZONTAL_PASS=1;let R=new hH;R.setAttribute("position",new EH(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let K=new SH(R,U),B=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let G=this.type;this.render=function(T,j,x){if(B.enabled===!1)return;if(B.autoUpdate===!1&&B.needsUpdate===!1)return;if(T.length===0)return;let N=q.getRenderTarget(),C=q.getActiveCubeFace(),I=q.getActiveMipmapLevel(),m=q.state;if(m.setBlending(0),m.buffers.depth.getReversed())m.buffers.color.setClear(0,0,0,0);else m.buffers.color.setClear(1,1,1,1);m.buffers.depth.setTest(!0),m.setScissorTest(!1);let f=G!==3&&this.type===3,d=G===3&&this.type!==3;for(let i=0,c=T.length;i<c;i++){let t=T[i],l=t.shadow;if(l===void 0){console.warn("THREE.WebGLShadowMap:",t,"has no shadow.");continue}if(l.autoUpdate===!1&&l.needsUpdate===!1)continue;Y.copy(l.mapSize);let Xq=l.getFrameExtents();if(Y.multiply(Xq),Z.copy(l.mapSize),Y.x>F||Y.y>F){if(Y.x>F)Z.x=Math.floor(F/Xq.x),Y.x=Z.x*Xq.x,l.mapSize.x=Z.x;if(Y.y>F)Z.y=Math.floor(F/Xq.y),Y.y=Z.y*Xq.y,l.mapSize.y=Z.y}if(l.map===null||f===!0||d===!0){let Aq=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(l.map!==null)l.map.dispose();l.map=new _W(Y.x,Y.y,Aq),l.map.texture.name=t.name+".shadowMap",l.camera.updateProjectionMatrix()}q.setRenderTarget(l.map),q.clear();let _q=l.getViewportCount();for(let Aq=0;Aq<_q;Aq++){let mq=l.getViewport(Aq);$.set(Z.x*mq.x,Z.y*mq.y,Z.x*mq.z,Z.y*mq.w),m.viewport($),l.updateMatrices(t,Aq),X=l.getFrustum(),P(j,x,l.camera,t,this.type)}if(l.isPointLightShadow!==!0&&this.type===3)S(l,x);l.needsUpdate=!1}G=this.type,B.needsUpdate=!1,q.setRenderTarget(N,C,I)};function S(T,j){let x=H.update(K);if(U.defines.VSM_SAMPLES!==T.blurSamples)U.defines.VSM_SAMPLES=T.blurSamples,E.defines.VSM_SAMPLES=T.blurSamples,U.needsUpdate=!0,E.needsUpdate=!0;if(T.mapPass===null)T.mapPass=new _W(Y.x,Y.y);U.uniforms.shadow_pass.value=T.map.texture,U.uniforms.resolution.value=T.mapSize,U.uniforms.radius.value=T.radius,q.setRenderTarget(T.mapPass),q.clear(),q.renderBufferDirect(j,null,x,U,K,null),E.uniforms.shadow_pass.value=T.mapPass.texture,E.uniforms.resolution.value=T.mapSize,E.uniforms.radius.value=T.radius,q.setRenderTarget(T.map),q.clear(),q.renderBufferDirect(j,null,x,E,K,null)}function V(T,j,x,N){let C=null,I=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=x.isPointLight===!0?Q:J,q.localClippingEnabled&&j.clipShadows===!0&&Array.isArray(j.clippingPlanes)&&j.clippingPlanes.length!==0||j.displacementMap&&j.displacementScale!==0||j.alphaMap&&j.alphaTest>0||j.map&&j.alphaTest>0||j.alphaToCoverage===!0){let m=C.uuid,f=j.uuid,d=_[m];if(d===void 0)d={},_[m]=d;let i=d[f];if(i===void 0)i=C.clone(),d[f]=i,j.addEventListener("dispose",b);C=i}if(C.visible=j.visible,C.wireframe=j.wireframe,N===3)C.side=j.shadowSide!==null?j.shadowSide:j.side;else C.side=j.shadowSide!==null?j.shadowSide:O[j.side];if(C.alphaMap=j.alphaMap,C.alphaTest=j.alphaToCoverage===!0?0.5:j.alphaTest,C.map=j.map,C.clipShadows=j.clipShadows,C.clippingPlanes=j.clippingPlanes,C.clipIntersection=j.clipIntersection,C.displacementMap=j.displacementMap,C.displacementScale=j.displacementScale,C.displacementBias=j.displacementBias,C.wireframeLinewidth=j.wireframeLinewidth,C.linewidth=j.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let m=q.properties.get(C);m.light=x}return C}function P(T,j,x,N,C){if(T.visible===!1)return;if(T.layers.test(j.layers)&&(T.isMesh||T.isLine||T.isPoints)){if((T.castShadow||T.receiveShadow&&C===3)&&(!T.frustumCulled||X.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let f=H.update(T),d=T.material;if(Array.isArray(d)){let i=f.groups;for(let c=0,t=i.length;c<t;c++){let l=i[c],Xq=d[l.materialIndex];if(Xq&&Xq.visible){let _q=V(T,Xq,N,C);T.onBeforeShadow(q,T,j,x,f,_q,l),q.renderBufferDirect(x,null,f,_q,T,l),T.onAfterShadow(q,T,j,x,f,_q,l)}}}else if(d.visible){let i=V(T,d,N,C);T.onBeforeShadow(q,T,j,x,f,i,null),q.renderBufferDirect(x,null,f,i,T,null),T.onAfterShadow(q,T,j,x,f,i,null)}}}let m=T.children;for(let f=0,d=m.length;f<d;f++)P(m[f],j,x,N,C)}function b(T){T.target.removeEventListener("dispose",b);for(let x in _){let N=_[x],C=T.target.uuid;if(C in N)N[C].dispose(),delete N[C]}}}let W9={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function X9(q,H){function W(){let A=!1,Zq=new oq,Hq=null,Bq=new oq(0,0,0,0);return{setMask:function(a){if(Hq!==a&&!A)q.colorMask(a,a,a,a),Hq=a},setLocked:function(a){A=a},setClear:function(a,o,Gq,Iq,eq){if(eq===!0)a*=Iq,o*=Iq,Gq*=Iq;if(Zq.set(a,o,Gq,Iq),Bq.equals(Zq)===!1)q.clearColor(a,o,Gq,Iq),Bq.copy(Zq)},reset:function(){A=!1,Hq=null,Bq.set(-1,0,0,0)}}}function X(){let A=!1,Zq=!1,Hq=null,Bq=null,a=null;return{setReversed:function(o){if(Zq!==o){let Gq=H.get("EXT_clip_control");if(o)Gq.clipControlEXT(Gq.LOWER_LEFT_EXT,Gq.ZERO_TO_ONE_EXT);else Gq.clipControlEXT(Gq.LOWER_LEFT_EXT,Gq.NEGATIVE_ONE_TO_ONE_EXT);Zq=o;let Iq=a;a=null,this.setClear(Iq)}},getReversed:function(){return Zq},setTest:function(o){if(o)Fq(q.DEPTH_TEST);else Lq(q.DEPTH_TEST)},setMask:function(o){if(Hq!==o&&!A)q.depthMask(o),Hq=o},setFunc:function(o){if(Zq)o=W9[o];if(Bq!==o){switch(o){case 0:q.depthFunc(q.NEVER);break;case 1:q.depthFunc(q.ALWAYS);break;case 2:q.depthFunc(q.LESS);break;case 3:q.depthFunc(q.LEQUAL);break;case 4:q.depthFunc(q.EQUAL);break;case 5:q.depthFunc(q.GEQUAL);break;case 6:q.depthFunc(q.GREATER);break;case 7:q.depthFunc(q.NOTEQUAL);break;default:q.depthFunc(q.LEQUAL)}Bq=o}},setLocked:function(o){A=o},setClear:function(o){if(a!==o){if(Zq)o=1-o;q.clearDepth(o),a=o}},reset:function(){A=!1,Hq=null,Bq=null,a=null,Zq=!1}}}function Y(){let A=!1,Zq=null,Hq=null,Bq=null,a=null,o=null,Gq=null,Iq=null,eq=null;return{setTest:function(tq){if(!A)if(tq)Fq(q.STENCIL_TEST);else Lq(q.STENCIL_TEST)},setMask:function(tq){if(Zq!==tq&&!A)q.stencilMask(tq),Zq=tq},setFunc:function(tq,aH,tH){if(Hq!==tq||Bq!==aH||a!==tH)q.stencilFunc(tq,aH,tH),Hq=tq,Bq=aH,a=tH},setOp:function(tq,aH,tH){if(o!==tq||Gq!==aH||Iq!==tH)q.stencilOp(tq,aH,tH),o=tq,Gq=aH,Iq=tH},setLocked:function(tq){A=tq},setClear:function(tq){if(eq!==tq)q.clearStencil(tq),eq=tq},reset:function(){A=!1,Zq=null,Hq=null,Bq=null,a=null,o=null,Gq=null,Iq=null,eq=null}}}let Z=new W,$=new X,J=new Y,Q=new WeakMap,_=new WeakMap,F={},O={},U=new WeakMap,E=[],R=null,K=!1,B=null,G=null,S=null,V=null,P=null,b=null,T=null,j=new jq(0,0,0),x=0,N=!1,C=null,I=null,m=null,f=null,d=null,i=q.getParameter(q.MAX_COMBINED_TEXTURE_IMAGE_UNITS),c=!1,t=0,l=q.getParameter(q.VERSION);if(l.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(l)[1]),c=t>=1;else if(l.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(l)[1]),c=t>=2;let Xq=null,_q={},Aq=q.getParameter(q.SCISSOR_BOX),mq=q.getParameter(q.VIEWPORT),XH=new oq().fromArray(Aq),p=new oq().fromArray(mq);function Yq(A,Zq,Hq,Bq){let a=new Uint8Array(4),o=q.createTexture();q.bindTexture(A,o),q.texParameteri(A,q.TEXTURE_MIN_FILTER,q.NEAREST),q.texParameteri(A,q.TEXTURE_MAG_FILTER,q.NEAREST);for(let Gq=0;Gq<Hq;Gq++)if(A===q.TEXTURE_3D||A===q.TEXTURE_2D_ARRAY)q.texImage3D(Zq,0,q.RGBA,1,1,Bq,0,q.RGBA,q.UNSIGNED_BYTE,a);else q.texImage2D(Zq+Gq,0,q.RGBA,1,1,0,q.RGBA,q.UNSIGNED_BYTE,a);return o}let Kq={};Kq[q.TEXTURE_2D]=Yq(q.TEXTURE_2D,q.TEXTURE_2D,1),Kq[q.TEXTURE_CUBE_MAP]=Yq(q.TEXTURE_CUBE_MAP,q.TEXTURE_CUBE_MAP_POSITIVE_X,6),Kq[q.TEXTURE_2D_ARRAY]=Yq(q.TEXTURE_2D_ARRAY,q.TEXTURE_2D_ARRAY,1,1),Kq[q.TEXTURE_3D]=Yq(q.TEXTURE_3D,q.TEXTURE_3D,1,1),Z.setClear(0,0,0,1),$.setClear(1),J.setClear(0),Fq(q.DEPTH_TEST),$.setFunc(3),Nq(!1),YH(1),Fq(q.CULL_FACE),Sq(0);function Fq(A){if(F[A]!==!0)q.enable(A),F[A]=!0}function Lq(A){if(F[A]!==!1)q.disable(A),F[A]=!1}function cq(A,Zq){if(O[A]!==Zq){if(q.bindFramebuffer(A,Zq),O[A]=Zq,A===q.DRAW_FRAMEBUFFER)O[q.FRAMEBUFFER]=Zq;if(A===q.FRAMEBUFFER)O[q.DRAW_FRAMEBUFFER]=Zq;return!0}return!1}function dq(A,Zq){let Hq=E,Bq=!1;if(A){if(Hq=U.get(Zq),Hq===void 0)Hq=[],U.set(Zq,Hq);let a=A.textures;if(Hq.length!==a.length||Hq[0]!==q.COLOR_ATTACHMENT0){for(let o=0,Gq=a.length;o<Gq;o++)Hq[o]=q.COLOR_ATTACHMENT0+o;Hq.length=a.length,Bq=!0}}else if(Hq[0]!==q.BACK)Hq[0]=q.BACK,Bq=!0;if(Bq)q.drawBuffers(Hq)}function pq(A){if(R!==A)return q.useProgram(A),R=A,!0;return!1}let w={[100]:q.FUNC_ADD,[101]:q.FUNC_SUBTRACT,[102]:q.FUNC_REVERSE_SUBTRACT};w[103]=q.MIN,w[104]=q.MAX;let HH={[200]:q.ZERO,[201]:q.ONE,[202]:q.SRC_COLOR,[204]:q.SRC_ALPHA,[210]:q.SRC_ALPHA_SATURATE,[208]:q.DST_COLOR,[206]:q.DST_ALPHA,[203]:q.ONE_MINUS_SRC_COLOR,[205]:q.ONE_MINUS_SRC_ALPHA,[209]:q.ONE_MINUS_DST_COLOR,[207]:q.ONE_MINUS_DST_ALPHA,[211]:q.CONSTANT_COLOR,[212]:q.ONE_MINUS_CONSTANT_COLOR,[213]:q.CONSTANT_ALPHA,[214]:q.ONE_MINUS_CONSTANT_ALPHA};function Sq(A,Zq,Hq,Bq,a,o,Gq,Iq,eq,tq){if(A===0){if(K===!0)Lq(q.BLEND),K=!1;return}if(K===!1)Fq(q.BLEND),K=!0;if(A!==5){if(A!==B||tq!==N){if(G!==100||P!==100)q.blendEquation(q.FUNC_ADD),G=100,P=100;if(tq)switch(A){case 1:q.blendFuncSeparate(q.ONE,q.ONE_MINUS_SRC_ALPHA,q.ONE,q.ONE_MINUS_SRC_ALPHA);break;case 2:q.blendFunc(q.ONE,q.ONE);break;case 3:q.blendFuncSeparate(q.ZERO,q.ONE_MINUS_SRC_COLOR,q.ZERO,q.ONE);break;case 4:q.blendFuncSeparate(q.DST_COLOR,q.ONE_MINUS_SRC_ALPHA,q.ZERO,q.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case 1:q.blendFuncSeparate(q.SRC_ALPHA,q.ONE_MINUS_SRC_ALPHA,q.ONE,q.ONE_MINUS_SRC_ALPHA);break;case 2:q.blendFuncSeparate(q.SRC_ALPHA,q.ONE,q.ONE,q.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}S=null,V=null,b=null,T=null,j.set(0,0,0),x=0,B=A,N=tq}return}if(a=a||Zq,o=o||Hq,Gq=Gq||Bq,Zq!==G||a!==P)q.blendEquationSeparate(w[Zq],w[a]),G=Zq,P=a;if(Hq!==S||Bq!==V||o!==b||Gq!==T)q.blendFuncSeparate(HH[Hq],HH[Bq],HH[o],HH[Gq]),S=Hq,V=Bq,b=o,T=Gq;if(Iq.equals(j)===!1||eq!==x)q.blendColor(Iq.r,Iq.g,Iq.b,eq),j.copy(Iq),x=eq;B=A,N=!1}function sq(A,Zq){A.side===2?Lq(q.CULL_FACE):Fq(q.CULL_FACE);let Hq=A.side===1;if(Zq)Hq=!Hq;Nq(Hq),A.blending===1&&A.transparent===!1?Sq(0):Sq(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),$.setFunc(A.depthFunc),$.setTest(A.depthTest),$.setMask(A.depthWrite),Z.setMask(A.colorWrite);let Bq=A.stencilWrite;if(J.setTest(Bq),Bq)J.setMask(A.stencilWriteMask),J.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),J.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass);Tq(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Fq(q.SAMPLE_ALPHA_TO_COVERAGE):Lq(q.SAMPLE_ALPHA_TO_COVERAGE)}function Nq(A){if(C!==A){if(A)q.frontFace(q.CW);else q.frontFace(q.CCW);C=A}}function YH(A){if(A!==0){if(Fq(q.CULL_FACE),A!==I)if(A===1)q.cullFace(q.BACK);else if(A===2)q.cullFace(q.FRONT);else q.cullFace(q.FRONT_AND_BACK)}else Lq(q.CULL_FACE);I=A}function zq(A){if(A!==m){if(c)q.lineWidth(A);m=A}}function Tq(A,Zq,Hq){if(A){if(Fq(q.POLYGON_OFFSET_FILL),f!==Zq||d!==Hq)q.polygonOffset(Zq,Hq),f=Zq,d=Hq}else Lq(q.POLYGON_OFFSET_FILL)}function RH(A){if(A)Fq(q.SCISSOR_TEST);else Lq(q.SCISSOR_TEST)}function LH(A){if(A===void 0)A=q.TEXTURE0+i-1;if(Xq!==A)q.activeTexture(A),Xq=A}function UH(A,Zq,Hq){if(Hq===void 0)if(Xq===null)Hq=q.TEXTURE0+i-1;else Hq=Xq;let Bq=_q[Hq];if(Bq===void 0)Bq={type:void 0,texture:void 0},_q[Hq]=Bq;if(Bq.type!==A||Bq.texture!==Zq){if(Xq!==Hq)q.activeTexture(Hq),Xq=Hq;q.bindTexture(A,Zq||Kq[A]),Bq.type=A,Bq.texture=Zq}}function M(){let A=_q[Xq];if(A!==void 0&&A.type!==void 0)q.bindTexture(A.type,null),A.type=void 0,A.texture=void 0}function L(){try{q.compressedTexImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function D(){try{q.compressedTexImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function n(){try{q.texSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function s(){try{q.texSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function u(){try{q.compressedTexSubImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Uq(){try{q.compressedTexSubImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function qq(){try{q.texStorage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Rq(){try{q.texStorage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function kq(){try{q.texImage2D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function e(){try{q.texImage3D(...arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Jq(A){if(XH.equals(A)===!1)q.scissor(A.x,A.y,A.z,A.w),XH.copy(A)}function Vq(A){if(p.equals(A)===!1)q.viewport(A.x,A.y,A.z,A.w),p.copy(A)}function Cq(A,Zq){let Hq=_.get(Zq);if(Hq===void 0)Hq=new WeakMap,_.set(Zq,Hq);let Bq=Hq.get(A);if(Bq===void 0)Bq=q.getUniformBlockIndex(Zq,A.name),Hq.set(A,Bq)}function Qq(A,Zq){let Bq=_.get(Zq).get(A);if(Q.get(Zq)!==Bq)q.uniformBlockBinding(Zq,Bq,A.__bindingPointIndex),Q.set(Zq,Bq)}function yq(){q.disable(q.BLEND),q.disable(q.CULL_FACE),q.disable(q.DEPTH_TEST),q.disable(q.POLYGON_OFFSET_FILL),q.disable(q.SCISSOR_TEST),q.disable(q.STENCIL_TEST),q.disable(q.SAMPLE_ALPHA_TO_COVERAGE),q.blendEquation(q.FUNC_ADD),q.blendFunc(q.ONE,q.ZERO),q.blendFuncSeparate(q.ONE,q.ZERO,q.ONE,q.ZERO),q.blendColor(0,0,0,0),q.colorMask(!0,!0,!0,!0),q.clearColor(0,0,0,0),q.depthMask(!0),q.depthFunc(q.LESS),$.setReversed(!1),q.clearDepth(1),q.stencilMask(4294967295),q.stencilFunc(q.ALWAYS,0,4294967295),q.stencilOp(q.KEEP,q.KEEP,q.KEEP),q.clearStencil(0),q.cullFace(q.BACK),q.frontFace(q.CCW),q.polygonOffset(0,0),q.activeTexture(q.TEXTURE0),q.bindFramebuffer(q.FRAMEBUFFER,null),q.bindFramebuffer(q.DRAW_FRAMEBUFFER,null),q.bindFramebuffer(q.READ_FRAMEBUFFER,null),q.useProgram(null),q.lineWidth(1),q.scissor(0,0,q.canvas.width,q.canvas.height),q.viewport(0,0,q.canvas.width,q.canvas.height),F={},Xq=null,_q={},O={},U=new WeakMap,E=[],R=null,K=!1,B=null,G=null,S=null,V=null,P=null,b=null,T=null,j=new jq(0,0,0),x=0,N=!1,C=null,I=null,m=null,f=null,d=null,XH.set(0,0,q.canvas.width,q.canvas.height),p.set(0,0,q.canvas.width,q.canvas.height),Z.reset(),$.reset(),J.reset()}return{buffers:{color:Z,depth:$,stencil:J},enable:Fq,disable:Lq,bindFramebuffer:cq,drawBuffers:dq,useProgram:pq,setBlending:Sq,setMaterial:sq,setFlipSided:Nq,setCullFace:YH,setLineWidth:zq,setPolygonOffset:Tq,setScissorTest:RH,activeTexture:LH,bindTexture:UH,unbindTexture:M,compressedTexImage2D:L,compressedTexImage3D:D,texImage2D:kq,texImage3D:e,updateUBOMapping:Cq,uniformBlockBinding:Qq,texStorage2D:qq,texStorage3D:Rq,texSubImage2D:n,texSubImage3D:s,compressedTexSubImage2D:u,compressedTexSubImage3D:Uq,scissor:Jq,viewport:Vq,reset:yq}}function Y9(q,H,W,X,Y,Z,$){let J=H.has("WEBGL_multisampled_render_to_texture")?H.get("WEBGL_multisampled_render_to_texture"):null,Q=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new uq,F=new WeakMap,O,U=new WeakMap,E=!1;try{E=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function R(M,L){return E?new OffscreenCanvas(M,L):OX("canvas")}function K(M,L,D){let n=1,s=UH(M);if(s.width>D||s.height>D)n=D/Math.max(s.width,s.height);if(n<1)if(typeof HTMLImageElement!=="undefined"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&M instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&M instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&M instanceof VideoFrame){let u=Math.floor(n*s.width),Uq=Math.floor(n*s.height);if(O===void 0)O=R(u,Uq);let qq=L?R(u,Uq):O;return qq.width=u,qq.height=Uq,qq.getContext("2d").drawImage(M,0,0,u,Uq),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+s.width+"x"+s.height+") to ("+u+"x"+Uq+")."),qq}else{if("data"in M)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+s.width+"x"+s.height+").");return M}return M}function B(M){return M.generateMipmaps}function G(M){q.generateMipmap(M)}function S(M){if(M.isWebGLCubeRenderTarget)return q.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return q.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return q.TEXTURE_2D_ARRAY;return q.TEXTURE_2D}function V(M,L,D,n,s=!1){if(M!==null){if(q[M]!==void 0)return q[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let u=L;if(L===q.RED){if(D===q.FLOAT)u=q.R32F;if(D===q.HALF_FLOAT)u=q.R16F;if(D===q.UNSIGNED_BYTE)u=q.R8}if(L===q.RED_INTEGER){if(D===q.UNSIGNED_BYTE)u=q.R8UI;if(D===q.UNSIGNED_SHORT)u=q.R16UI;if(D===q.UNSIGNED_INT)u=q.R32UI;if(D===q.BYTE)u=q.R8I;if(D===q.SHORT)u=q.R16I;if(D===q.INT)u=q.R32I}if(L===q.RG){if(D===q.FLOAT)u=q.RG32F;if(D===q.HALF_FLOAT)u=q.RG16F;if(D===q.UNSIGNED_BYTE)u=q.RG8}if(L===q.RG_INTEGER){if(D===q.UNSIGNED_BYTE)u=q.RG8UI;if(D===q.UNSIGNED_SHORT)u=q.RG16UI;if(D===q.UNSIGNED_INT)u=q.RG32UI;if(D===q.BYTE)u=q.RG8I;if(D===q.SHORT)u=q.RG16I;if(D===q.INT)u=q.RG32I}if(L===q.RGB_INTEGER){if(D===q.UNSIGNED_BYTE)u=q.RGB8UI;if(D===q.UNSIGNED_SHORT)u=q.RGB16UI;if(D===q.UNSIGNED_INT)u=q.RGB32UI;if(D===q.BYTE)u=q.RGB8I;if(D===q.SHORT)u=q.RGB16I;if(D===q.INT)u=q.RGB32I}if(L===q.RGBA_INTEGER){if(D===q.UNSIGNED_BYTE)u=q.RGBA8UI;if(D===q.UNSIGNED_SHORT)u=q.RGBA16UI;if(D===q.UNSIGNED_INT)u=q.RGBA32UI;if(D===q.BYTE)u=q.RGBA8I;if(D===q.SHORT)u=q.RGBA16I;if(D===q.INT)u=q.RGBA32I}if(L===q.RGB){if(D===q.UNSIGNED_INT_5_9_9_9_REV)u=q.RGB9_E5}if(L===q.RGBA){let Uq=s?"linear":fq.getTransfer(n);if(D===q.FLOAT)u=q.RGBA32F;if(D===q.HALF_FLOAT)u=q.RGBA16F;if(D===q.UNSIGNED_BYTE)u=Uq==="srgb"?q.SRGB8_ALPHA8:q.RGBA8;if(D===q.UNSIGNED_SHORT_4_4_4_4)u=q.RGBA4;if(D===q.UNSIGNED_SHORT_5_5_5_1)u=q.RGB5_A1}if(u===q.R16F||u===q.R32F||u===q.RG16F||u===q.RG32F||u===q.RGBA16F||u===q.RGBA32F)H.get("EXT_color_buffer_float");return u}function P(M,L){let D;if(M){if(L===null||L===1014||L===1020)D=q.DEPTH24_STENCIL8;else if(L===1015)D=q.DEPTH32F_STENCIL8;else if(L===1012)D=q.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===1014||L===1020)D=q.DEPTH_COMPONENT24;else if(L===1015)D=q.DEPTH_COMPONENT32F;else if(L===1012)D=q.DEPTH_COMPONENT16;return D}function b(M,L){if(B(M)===!0||M.isFramebufferTexture&&M.minFilter!==1003&&M.minFilter!==1006)return Math.log2(Math.max(L.width,L.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return L.mipmaps.length;else return 1}function T(M){let L=M.target;if(L.removeEventListener("dispose",T),x(L),L.isVideoTexture)F.delete(L)}function j(M){let L=M.target;L.removeEventListener("dispose",j),C(L)}function x(M){let L=X.get(M);if(L.__webglInit===void 0)return;let D=M.source,n=U.get(D);if(n){let s=n[L.__cacheKey];if(s.usedTimes--,s.usedTimes===0)N(M);if(Object.keys(n).length===0)U.delete(D)}X.remove(M)}function N(M){let L=X.get(M);q.deleteTexture(L.__webglTexture);let D=M.source,n=U.get(D);delete n[L.__cacheKey],$.memory.textures--}function C(M){let L=X.get(M);if(M.depthTexture)M.depthTexture.dispose(),X.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let n=0;n<6;n++){if(Array.isArray(L.__webglFramebuffer[n]))for(let s=0;s<L.__webglFramebuffer[n].length;s++)q.deleteFramebuffer(L.__webglFramebuffer[n][s]);else q.deleteFramebuffer(L.__webglFramebuffer[n]);if(L.__webglDepthbuffer)q.deleteRenderbuffer(L.__webglDepthbuffer[n])}else{if(Array.isArray(L.__webglFramebuffer))for(let n=0;n<L.__webglFramebuffer.length;n++)q.deleteFramebuffer(L.__webglFramebuffer[n]);else q.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)q.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)q.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let n=0;n<L.__webglColorRenderbuffer.length;n++)if(L.__webglColorRenderbuffer[n])q.deleteRenderbuffer(L.__webglColorRenderbuffer[n])}if(L.__webglDepthRenderbuffer)q.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let D=M.textures;for(let n=0,s=D.length;n<s;n++){let u=X.get(D[n]);if(u.__webglTexture)q.deleteTexture(u.__webglTexture),$.memory.textures--;X.remove(D[n])}X.remove(M)}let I=0;function m(){I=0}function f(){let M=I;if(M>=Y.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+Y.maxTextures);return I+=1,M}function d(M){let L=[];return L.push(M.wrapS),L.push(M.wrapT),L.push(M.wrapR||0),L.push(M.magFilter),L.push(M.minFilter),L.push(M.anisotropy),L.push(M.internalFormat),L.push(M.format),L.push(M.type),L.push(M.generateMipmaps),L.push(M.premultiplyAlpha),L.push(M.flipY),L.push(M.unpackAlignment),L.push(M.colorSpace),L.join()}function i(M,L){let D=X.get(M);if(M.isVideoTexture)RH(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&D.__version!==M.version){let n=M.image;if(n===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(n.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kq(D,M,L);return}}else if(M.isExternalTexture)D.__webglTexture=M.sourceTexture?M.sourceTexture:null;W.bindTexture(q.TEXTURE_2D,D.__webglTexture,q.TEXTURE0+L)}function c(M,L){let D=X.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){Kq(D,M,L);return}W.bindTexture(q.TEXTURE_2D_ARRAY,D.__webglTexture,q.TEXTURE0+L)}function t(M,L){let D=X.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){Kq(D,M,L);return}W.bindTexture(q.TEXTURE_3D,D.__webglTexture,q.TEXTURE0+L)}function l(M,L){let D=X.get(M);if(M.version>0&&D.__version!==M.version){Fq(D,M,L);return}W.bindTexture(q.TEXTURE_CUBE_MAP,D.__webglTexture,q.TEXTURE0+L)}let Xq={[1000]:q.REPEAT,[1001]:q.CLAMP_TO_EDGE,[1002]:q.MIRRORED_REPEAT},_q={[1003]:q.NEAREST,[1004]:q.NEAREST_MIPMAP_NEAREST,[1005]:q.NEAREST_MIPMAP_LINEAR,[1006]:q.LINEAR,[1007]:q.LINEAR_MIPMAP_NEAREST,[1008]:q.LINEAR_MIPMAP_LINEAR},Aq={[512]:q.NEVER,[519]:q.ALWAYS,[513]:q.LESS,[515]:q.LEQUAL,[514]:q.EQUAL,[518]:q.GEQUAL,[516]:q.GREATER,[517]:q.NOTEQUAL};function mq(M,L){if(L.type===1015&&H.has("OES_texture_float_linear")===!1&&(L.magFilter===1006||L.magFilter===1007||L.magFilter===1005||L.magFilter===1008||L.minFilter===1006||L.minFilter===1007||L.minFilter===1005||L.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(q.texParameteri(M,q.TEXTURE_WRAP_S,Xq[L.wrapS]),q.texParameteri(M,q.TEXTURE_WRAP_T,Xq[L.wrapT]),M===q.TEXTURE_3D||M===q.TEXTURE_2D_ARRAY)q.texParameteri(M,q.TEXTURE_WRAP_R,Xq[L.wrapR]);if(q.texParameteri(M,q.TEXTURE_MAG_FILTER,_q[L.magFilter]),q.texParameteri(M,q.TEXTURE_MIN_FILTER,_q[L.minFilter]),L.compareFunction)q.texParameteri(M,q.TEXTURE_COMPARE_MODE,q.COMPARE_REF_TO_TEXTURE),q.texParameteri(M,q.TEXTURE_COMPARE_FUNC,Aq[L.compareFunction]);if(H.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===1003)return;if(L.minFilter!==1005&&L.minFilter!==1008)return;if(L.type===1015&&H.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||X.get(L).__currentAnisotropy){let D=H.get("EXT_texture_filter_anisotropic");q.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,Y.getMaxAnisotropy())),X.get(L).__currentAnisotropy=L.anisotropy}}}function XH(M,L){let D=!1;if(M.__webglInit===void 0)M.__webglInit=!0,L.addEventListener("dispose",T);let n=L.source,s=U.get(n);if(s===void 0)s={},U.set(n,s);let u=d(L);if(u!==M.__cacheKey){if(s[u]===void 0)s[u]={texture:q.createTexture(),usedTimes:0},$.memory.textures++,D=!0;s[u].usedTimes++;let Uq=s[M.__cacheKey];if(Uq!==void 0){if(s[M.__cacheKey].usedTimes--,Uq.usedTimes===0)N(L)}M.__cacheKey=u,M.__webglTexture=s[u].texture}return D}function p(M,L,D){return Math.floor(Math.floor(M/D)/L)}function Yq(M,L,D,n){let u=M.updateRanges;if(u.length===0)W.texSubImage2D(q.TEXTURE_2D,0,0,0,L.width,L.height,D,n,L.data);else{u.sort((e,Jq)=>e.start-Jq.start);let Uq=0;for(let e=1;e<u.length;e++){let Jq=u[Uq],Vq=u[e],Cq=Jq.start+Jq.count,Qq=p(Vq.start,L.width,4),yq=p(Jq.start,L.width,4);if(Vq.start<=Cq+1&&Qq===yq&&p(Vq.start+Vq.count-1,L.width,4)===Qq)Jq.count=Math.max(Jq.count,Vq.start+Vq.count-Jq.start);else++Uq,u[Uq]=Vq}u.length=Uq+1;let qq=q.getParameter(q.UNPACK_ROW_LENGTH),Rq=q.getParameter(q.UNPACK_SKIP_PIXELS),kq=q.getParameter(q.UNPACK_SKIP_ROWS);q.pixelStorei(q.UNPACK_ROW_LENGTH,L.width);for(let e=0,Jq=u.length;e<Jq;e++){let Vq=u[e],Cq=Math.floor(Vq.start/4),Qq=Math.ceil(Vq.count/4),yq=Cq%L.width,A=Math.floor(Cq/L.width),Zq=Qq,Hq=1;q.pixelStorei(q.UNPACK_SKIP_PIXELS,yq),q.pixelStorei(q.UNPACK_SKIP_ROWS,A),W.texSubImage2D(q.TEXTURE_2D,0,yq,A,Zq,1,D,n,L.data)}M.clearUpdateRanges(),q.pixelStorei(q.UNPACK_ROW_LENGTH,qq),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Rq),q.pixelStorei(q.UNPACK_SKIP_ROWS,kq)}}function Kq(M,L,D){let n=q.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)n=q.TEXTURE_2D_ARRAY;if(L.isData3DTexture)n=q.TEXTURE_3D;let s=XH(M,L),u=L.source;W.bindTexture(n,M.__webglTexture,q.TEXTURE0+D);let Uq=X.get(u);if(u.version!==Uq.__version||s===!0){W.activeTexture(q.TEXTURE0+D);let qq=fq.getPrimaries(fq.workingColorSpace),Rq=L.colorSpace===""?null:fq.getPrimaries(L.colorSpace),kq=L.colorSpace===""||qq===Rq?q.NONE:q.BROWSER_DEFAULT_WEBGL;q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,L.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,L.unpackAlignment),q.pixelStorei(q.UNPACK_COLORSPACE_CONVERSION_WEBGL,kq);let e=K(L.image,!1,Y.maxTextureSize);e=LH(L,e);let Jq=Z.convert(L.format,L.colorSpace),Vq=Z.convert(L.type),Cq=V(L.internalFormat,Jq,Vq,L.colorSpace,L.isVideoTexture);mq(n,L);let Qq,yq=L.mipmaps,A=L.isVideoTexture!==!0,Zq=Uq.__version===void 0||s===!0,Hq=u.dataReady,Bq=b(L,e);if(L.isDepthTexture){if(Cq=P(L.format===1027,L.type),Zq)if(A)W.texStorage2D(q.TEXTURE_2D,1,Cq,e.width,e.height);else W.texImage2D(q.TEXTURE_2D,0,Cq,e.width,e.height,0,Jq,Vq,null)}else if(L.isDataTexture)if(yq.length>0){if(A&&Zq)W.texStorage2D(q.TEXTURE_2D,Bq,Cq,yq[0].width,yq[0].height);for(let a=0,o=yq.length;a<o;a++)if(Qq=yq[a],A){if(Hq)W.texSubImage2D(q.TEXTURE_2D,a,0,0,Qq.width,Qq.height,Jq,Vq,Qq.data)}else W.texImage2D(q.TEXTURE_2D,a,Cq,Qq.width,Qq.height,0,Jq,Vq,Qq.data);L.generateMipmaps=!1}else if(A){if(Zq)W.texStorage2D(q.TEXTURE_2D,Bq,Cq,e.width,e.height);if(Hq)Yq(L,e,Jq,Vq)}else W.texImage2D(q.TEXTURE_2D,0,Cq,e.width,e.height,0,Jq,Vq,e.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(A&&Zq)W.texStorage3D(q.TEXTURE_2D_ARRAY,Bq,Cq,yq[0].width,yq[0].height,e.depth);for(let a=0,o=yq.length;a<o;a++)if(Qq=yq[a],L.format!==1023)if(Jq!==null)if(A){if(Hq)if(L.layerUpdates.size>0){let Gq=s0(Qq.width,Qq.height,L.format,L.type);for(let Iq of L.layerUpdates){let eq=Qq.data.subarray(Iq*Gq/Qq.data.BYTES_PER_ELEMENT,(Iq+1)*Gq/Qq.data.BYTES_PER_ELEMENT);W.compressedTexSubImage3D(q.TEXTURE_2D_ARRAY,a,0,0,Iq,Qq.width,Qq.height,1,Jq,eq)}L.clearLayerUpdates()}else W.compressedTexSubImage3D(q.TEXTURE_2D_ARRAY,a,0,0,0,Qq.width,Qq.height,e.depth,Jq,Qq.data)}else W.compressedTexImage3D(q.TEXTURE_2D_ARRAY,a,Cq,Qq.width,Qq.height,e.depth,0,Qq.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A){if(Hq)W.texSubImage3D(q.TEXTURE_2D_ARRAY,a,0,0,0,Qq.width,Qq.height,e.depth,Jq,Vq,Qq.data)}else W.texImage3D(q.TEXTURE_2D_ARRAY,a,Cq,Qq.width,Qq.height,e.depth,0,Jq,Vq,Qq.data)}else{if(A&&Zq)W.texStorage2D(q.TEXTURE_2D,Bq,Cq,yq[0].width,yq[0].height);for(let a=0,o=yq.length;a<o;a++)if(Qq=yq[a],L.format!==1023)if(Jq!==null)if(A){if(Hq)W.compressedTexSubImage2D(q.TEXTURE_2D,a,0,0,Qq.width,Qq.height,Jq,Qq.data)}else W.compressedTexImage2D(q.TEXTURE_2D,a,Cq,Qq.width,Qq.height,0,Qq.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(A){if(Hq)W.texSubImage2D(q.TEXTURE_2D,a,0,0,Qq.width,Qq.height,Jq,Vq,Qq.data)}else W.texImage2D(q.TEXTURE_2D,a,Cq,Qq.width,Qq.height,0,Jq,Vq,Qq.data)}else if(L.isDataArrayTexture)if(A){if(Zq)W.texStorage3D(q.TEXTURE_2D_ARRAY,Bq,Cq,e.width,e.height,e.depth);if(Hq)if(L.layerUpdates.size>0){let a=s0(e.width,e.height,L.format,L.type);for(let o of L.layerUpdates){let Gq=e.data.subarray(o*a/e.data.BYTES_PER_ELEMENT,(o+1)*a/e.data.BYTES_PER_ELEMENT);W.texSubImage3D(q.TEXTURE_2D_ARRAY,0,0,0,o,e.width,e.height,1,Jq,Vq,Gq)}L.clearLayerUpdates()}else W.texSubImage3D(q.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,Jq,Vq,e.data)}else W.texImage3D(q.TEXTURE_2D_ARRAY,0,Cq,e.width,e.height,e.depth,0,Jq,Vq,e.data);else if(L.isData3DTexture)if(A){if(Zq)W.texStorage3D(q.TEXTURE_3D,Bq,Cq,e.width,e.height,e.depth);if(Hq)W.texSubImage3D(q.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,Jq,Vq,e.data)}else W.texImage3D(q.TEXTURE_3D,0,Cq,e.width,e.height,e.depth,0,Jq,Vq,e.data);else if(L.isFramebufferTexture){if(Zq)if(A)W.texStorage2D(q.TEXTURE_2D,Bq,Cq,e.width,e.height);else{let{width:a,height:o}=e;for(let Gq=0;Gq<Bq;Gq++)W.texImage2D(q.TEXTURE_2D,Gq,Cq,a,o,0,Jq,Vq,null),a>>=1,o>>=1}}else if(yq.length>0){if(A&&Zq){let a=UH(yq[0]);W.texStorage2D(q.TEXTURE_2D,Bq,Cq,a.width,a.height)}for(let a=0,o=yq.length;a<o;a++)if(Qq=yq[a],A){if(Hq)W.texSubImage2D(q.TEXTURE_2D,a,0,0,Jq,Vq,Qq)}else W.texImage2D(q.TEXTURE_2D,a,Cq,Jq,Vq,Qq);L.generateMipmaps=!1}else if(A){if(Zq){let a=UH(e);W.texStorage2D(q.TEXTURE_2D,Bq,Cq,a.width,a.height)}if(Hq)W.texSubImage2D(q.TEXTURE_2D,0,0,0,Jq,Vq,e)}else W.texImage2D(q.TEXTURE_2D,0,Cq,Jq,Vq,e);if(B(L))G(n);if(Uq.__version=u.version,L.onUpdate)L.onUpdate(L)}M.__version=L.version}function Fq(M,L,D){if(L.image.length!==6)return;let n=XH(M,L),s=L.source;W.bindTexture(q.TEXTURE_CUBE_MAP,M.__webglTexture,q.TEXTURE0+D);let u=X.get(s);if(s.version!==u.__version||n===!0){W.activeTexture(q.TEXTURE0+D);let Uq=fq.getPrimaries(fq.workingColorSpace),qq=L.colorSpace===""?null:fq.getPrimaries(L.colorSpace),Rq=L.colorSpace===""||Uq===qq?q.NONE:q.BROWSER_DEFAULT_WEBGL;q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,L.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,L.unpackAlignment),q.pixelStorei(q.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rq);let kq=L.isCompressedTexture||L.image[0].isCompressedTexture,e=L.image[0]&&L.image[0].isDataTexture,Jq=[];for(let o=0;o<6;o++){if(!kq&&!e)Jq[o]=K(L.image[o],!0,Y.maxCubemapSize);else Jq[o]=e?L.image[o].image:L.image[o];Jq[o]=LH(L,Jq[o])}let Vq=Jq[0],Cq=Z.convert(L.format,L.colorSpace),Qq=Z.convert(L.type),yq=V(L.internalFormat,Cq,Qq,L.colorSpace),A=L.isVideoTexture!==!0,Zq=u.__version===void 0||n===!0,Hq=s.dataReady,Bq=b(L,Vq);mq(q.TEXTURE_CUBE_MAP,L);let a;if(kq){if(A&&Zq)W.texStorage2D(q.TEXTURE_CUBE_MAP,Bq,yq,Vq.width,Vq.height);for(let o=0;o<6;o++){a=Jq[o].mipmaps;for(let Gq=0;Gq<a.length;Gq++){let Iq=a[Gq];if(L.format!==1023)if(Cq!==null)if(A){if(Hq)W.compressedTexSubImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,Gq,0,0,Iq.width,Iq.height,Cq,Iq.data)}else W.compressedTexImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,Gq,yq,Iq.width,Iq.height,0,Iq.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(A){if(Hq)W.texSubImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,Gq,0,0,Iq.width,Iq.height,Cq,Qq,Iq.data)}else W.texImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,Gq,yq,Iq.width,Iq.height,0,Cq,Qq,Iq.data)}}}else{if(a=L.mipmaps,A&&Zq){if(a.length>0)Bq++;let o=UH(Jq[0]);W.texStorage2D(q.TEXTURE_CUBE_MAP,Bq,yq,o.width,o.height)}for(let o=0;o<6;o++)if(e){if(A){if(Hq)W.texSubImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,Jq[o].width,Jq[o].height,Cq,Qq,Jq[o].data)}else W.texImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,yq,Jq[o].width,Jq[o].height,0,Cq,Qq,Jq[o].data);for(let Gq=0;Gq<a.length;Gq++){let eq=a[Gq].image[o].image;if(A){if(Hq)W.texSubImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,Gq+1,0,0,eq.width,eq.height,Cq,Qq,eq.data)}else W.texImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,Gq+1,yq,eq.width,eq.height,0,Cq,Qq,eq.data)}}else{if(A){if(Hq)W.texSubImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,Cq,Qq,Jq[o])}else W.texImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,yq,Cq,Qq,Jq[o]);for(let Gq=0;Gq<a.length;Gq++){let Iq=a[Gq];if(A){if(Hq)W.texSubImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,Gq+1,0,0,Cq,Qq,Iq.image[o])}else W.texImage2D(q.TEXTURE_CUBE_MAP_POSITIVE_X+o,Gq+1,yq,Cq,Qq,Iq.image[o])}}}if(B(L))G(q.TEXTURE_CUBE_MAP);if(u.__version=s.version,L.onUpdate)L.onUpdate(L)}M.__version=L.version}function Lq(M,L,D,n,s,u){let Uq=Z.convert(D.format,D.colorSpace),qq=Z.convert(D.type),Rq=V(D.internalFormat,Uq,qq,D.colorSpace),kq=X.get(L),e=X.get(D);if(e.__renderTarget=L,!kq.__hasExternalTextures){let Jq=Math.max(1,L.width>>u),Vq=Math.max(1,L.height>>u);if(s===q.TEXTURE_3D||s===q.TEXTURE_2D_ARRAY)W.texImage3D(s,u,Rq,Jq,Vq,L.depth,0,Uq,qq,null);else W.texImage2D(s,u,Rq,Jq,Vq,0,Uq,qq,null)}if(W.bindFramebuffer(q.FRAMEBUFFER,M),Tq(L))J.framebufferTexture2DMultisampleEXT(q.FRAMEBUFFER,n,s,e.__webglTexture,0,zq(L));else if(s===q.TEXTURE_2D||s>=q.TEXTURE_CUBE_MAP_POSITIVE_X&&s<=q.TEXTURE_CUBE_MAP_NEGATIVE_Z)q.framebufferTexture2D(q.FRAMEBUFFER,n,s,e.__webglTexture,u);W.bindFramebuffer(q.FRAMEBUFFER,null)}function cq(M,L,D){if(q.bindRenderbuffer(q.RENDERBUFFER,M),L.depthBuffer){let n=L.depthTexture,s=n&&n.isDepthTexture?n.type:null,u=P(L.stencilBuffer,s),Uq=L.stencilBuffer?q.DEPTH_STENCIL_ATTACHMENT:q.DEPTH_ATTACHMENT,qq=zq(L);if(Tq(L))J.renderbufferStorageMultisampleEXT(q.RENDERBUFFER,qq,u,L.width,L.height);else if(D)q.renderbufferStorageMultisample(q.RENDERBUFFER,qq,u,L.width,L.height);else q.renderbufferStorage(q.RENDERBUFFER,u,L.width,L.height);q.framebufferRenderbuffer(q.FRAMEBUFFER,Uq,q.RENDERBUFFER,M)}else{let n=L.textures;for(let s=0;s<n.length;s++){let u=n[s],Uq=Z.convert(u.format,u.colorSpace),qq=Z.convert(u.type),Rq=V(u.internalFormat,Uq,qq,u.colorSpace),kq=zq(L);if(D&&Tq(L)===!1)q.renderbufferStorageMultisample(q.RENDERBUFFER,kq,Rq,L.width,L.height);else if(Tq(L))J.renderbufferStorageMultisampleEXT(q.RENDERBUFFER,kq,Rq,L.width,L.height);else q.renderbufferStorage(q.RENDERBUFFER,Rq,L.width,L.height)}}q.bindRenderbuffer(q.RENDERBUFFER,null)}function dq(M,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(W.bindFramebuffer(q.FRAMEBUFFER,M),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let n=X.get(L.depthTexture);if(n.__renderTarget=L,!n.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0;i(L.depthTexture,0);let s=n.__webglTexture,u=zq(L);if(L.depthTexture.format===1026)if(Tq(L))J.framebufferTexture2DMultisampleEXT(q.FRAMEBUFFER,q.DEPTH_ATTACHMENT,q.TEXTURE_2D,s,0,u);else q.framebufferTexture2D(q.FRAMEBUFFER,q.DEPTH_ATTACHMENT,q.TEXTURE_2D,s,0);else if(L.depthTexture.format===1027)if(Tq(L))J.framebufferTexture2DMultisampleEXT(q.FRAMEBUFFER,q.DEPTH_STENCIL_ATTACHMENT,q.TEXTURE_2D,s,0,u);else q.framebufferTexture2D(q.FRAMEBUFFER,q.DEPTH_STENCIL_ATTACHMENT,q.TEXTURE_2D,s,0);else throw new Error("Unknown depthTexture format")}function pq(M){let L=X.get(M),D=M.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==M.depthTexture){let n=M.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(n){let s=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,n.removeEventListener("dispose",s)};n.addEventListener("dispose",s),L.__depthDisposeCallback=s}L.__boundDepthTexture=n}if(M.depthTexture&&!L.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");let n=M.texture.mipmaps;if(n&&n.length>0)dq(L.__webglFramebuffer[0],M);else dq(L.__webglFramebuffer,M)}else if(D){L.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(W.bindFramebuffer(q.FRAMEBUFFER,L.__webglFramebuffer[n]),L.__webglDepthbuffer[n]===void 0)L.__webglDepthbuffer[n]=q.createRenderbuffer(),cq(L.__webglDepthbuffer[n],M,!1);else{let s=M.stencilBuffer?q.DEPTH_STENCIL_ATTACHMENT:q.DEPTH_ATTACHMENT,u=L.__webglDepthbuffer[n];q.bindRenderbuffer(q.RENDERBUFFER,u),q.framebufferRenderbuffer(q.FRAMEBUFFER,s,q.RENDERBUFFER,u)}}else{let n=M.texture.mipmaps;if(n&&n.length>0)W.bindFramebuffer(q.FRAMEBUFFER,L.__webglFramebuffer[0]);else W.bindFramebuffer(q.FRAMEBUFFER,L.__webglFramebuffer);if(L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=q.createRenderbuffer(),cq(L.__webglDepthbuffer,M,!1);else{let s=M.stencilBuffer?q.DEPTH_STENCIL_ATTACHMENT:q.DEPTH_ATTACHMENT,u=L.__webglDepthbuffer;q.bindRenderbuffer(q.RENDERBUFFER,u),q.framebufferRenderbuffer(q.FRAMEBUFFER,s,q.RENDERBUFFER,u)}}W.bindFramebuffer(q.FRAMEBUFFER,null)}function w(M,L,D){let n=X.get(M);if(L!==void 0)Lq(n.__webglFramebuffer,M,M.texture,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,0);if(D!==void 0)pq(M)}function HH(M){let L=M.texture,D=X.get(M),n=X.get(L);M.addEventListener("dispose",j);let s=M.textures,u=M.isWebGLCubeRenderTarget===!0,Uq=s.length>1;if(!Uq){if(n.__webglTexture===void 0)n.__webglTexture=q.createTexture();n.__version=L.version,$.memory.textures++}if(u){D.__webglFramebuffer=[];for(let qq=0;qq<6;qq++)if(L.mipmaps&&L.mipmaps.length>0){D.__webglFramebuffer[qq]=[];for(let Rq=0;Rq<L.mipmaps.length;Rq++)D.__webglFramebuffer[qq][Rq]=q.createFramebuffer()}else D.__webglFramebuffer[qq]=q.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){D.__webglFramebuffer=[];for(let qq=0;qq<L.mipmaps.length;qq++)D.__webglFramebuffer[qq]=q.createFramebuffer()}else D.__webglFramebuffer=q.createFramebuffer();if(Uq)for(let qq=0,Rq=s.length;qq<Rq;qq++){let kq=X.get(s[qq]);if(kq.__webglTexture===void 0)kq.__webglTexture=q.createTexture(),$.memory.textures++}if(M.samples>0&&Tq(M)===!1){D.__webglMultisampledFramebuffer=q.createFramebuffer(),D.__webglColorRenderbuffer=[],W.bindFramebuffer(q.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let qq=0;qq<s.length;qq++){let Rq=s[qq];D.__webglColorRenderbuffer[qq]=q.createRenderbuffer(),q.bindRenderbuffer(q.RENDERBUFFER,D.__webglColorRenderbuffer[qq]);let kq=Z.convert(Rq.format,Rq.colorSpace),e=Z.convert(Rq.type),Jq=V(Rq.internalFormat,kq,e,Rq.colorSpace,M.isXRRenderTarget===!0),Vq=zq(M);q.renderbufferStorageMultisample(q.RENDERBUFFER,Vq,Jq,M.width,M.height),q.framebufferRenderbuffer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+qq,q.RENDERBUFFER,D.__webglColorRenderbuffer[qq])}if(q.bindRenderbuffer(q.RENDERBUFFER,null),M.depthBuffer)D.__webglDepthRenderbuffer=q.createRenderbuffer(),cq(D.__webglDepthRenderbuffer,M,!0);W.bindFramebuffer(q.FRAMEBUFFER,null)}}if(u){W.bindTexture(q.TEXTURE_CUBE_MAP,n.__webglTexture),mq(q.TEXTURE_CUBE_MAP,L);for(let qq=0;qq<6;qq++)if(L.mipmaps&&L.mipmaps.length>0)for(let Rq=0;Rq<L.mipmaps.length;Rq++)Lq(D.__webglFramebuffer[qq][Rq],M,L,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+qq,Rq);else Lq(D.__webglFramebuffer[qq],M,L,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+qq,0);if(B(L))G(q.TEXTURE_CUBE_MAP);W.unbindTexture()}else if(Uq){for(let qq=0,Rq=s.length;qq<Rq;qq++){let kq=s[qq],e=X.get(kq),Jq=q.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)Jq=M.isWebGL3DRenderTarget?q.TEXTURE_3D:q.TEXTURE_2D_ARRAY;if(W.bindTexture(Jq,e.__webglTexture),mq(Jq,kq),Lq(D.__webglFramebuffer,M,kq,q.COLOR_ATTACHMENT0+qq,Jq,0),B(kq))G(Jq)}W.unbindTexture()}else{let qq=q.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)qq=M.isWebGL3DRenderTarget?q.TEXTURE_3D:q.TEXTURE_2D_ARRAY;if(W.bindTexture(qq,n.__webglTexture),mq(qq,L),L.mipmaps&&L.mipmaps.length>0)for(let Rq=0;Rq<L.mipmaps.length;Rq++)Lq(D.__webglFramebuffer[Rq],M,L,q.COLOR_ATTACHMENT0,qq,Rq);else Lq(D.__webglFramebuffer,M,L,q.COLOR_ATTACHMENT0,qq,0);if(B(L))G(qq);W.unbindTexture()}if(M.depthBuffer)pq(M)}function Sq(M){let L=M.textures;for(let D=0,n=L.length;D<n;D++){let s=L[D];if(B(s)){let u=S(M),Uq=X.get(s).__webglTexture;W.bindTexture(u,Uq),G(u),W.unbindTexture()}}}let sq=[],Nq=[];function YH(M){if(M.samples>0){if(Tq(M)===!1){let{textures:L,width:D,height:n}=M,s=q.COLOR_BUFFER_BIT,u=M.stencilBuffer?q.DEPTH_STENCIL_ATTACHMENT:q.DEPTH_ATTACHMENT,Uq=X.get(M),qq=L.length>1;if(qq)for(let kq=0;kq<L.length;kq++)W.bindFramebuffer(q.FRAMEBUFFER,Uq.__webglMultisampledFramebuffer),q.framebufferRenderbuffer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+kq,q.RENDERBUFFER,null),W.bindFramebuffer(q.FRAMEBUFFER,Uq.__webglFramebuffer),q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0+kq,q.TEXTURE_2D,null,0);W.bindFramebuffer(q.READ_FRAMEBUFFER,Uq.__webglMultisampledFramebuffer);let Rq=M.texture.mipmaps;if(Rq&&Rq.length>0)W.bindFramebuffer(q.DRAW_FRAMEBUFFER,Uq.__webglFramebuffer[0]);else W.bindFramebuffer(q.DRAW_FRAMEBUFFER,Uq.__webglFramebuffer);for(let kq=0;kq<L.length;kq++){if(M.resolveDepthBuffer){if(M.depthBuffer)s|=q.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)s|=q.STENCIL_BUFFER_BIT}if(qq){q.framebufferRenderbuffer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.RENDERBUFFER,Uq.__webglColorRenderbuffer[kq]);let e=X.get(L[kq]).__webglTexture;q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,e,0)}if(q.blitFramebuffer(0,0,D,n,0,0,D,n,s,q.NEAREST),Q===!0){if(sq.length=0,Nq.length=0,sq.push(q.COLOR_ATTACHMENT0+kq),M.depthBuffer&&M.resolveDepthBuffer===!1)sq.push(u),Nq.push(u),q.invalidateFramebuffer(q.DRAW_FRAMEBUFFER,Nq);q.invalidateFramebuffer(q.READ_FRAMEBUFFER,sq)}}if(W.bindFramebuffer(q.READ_FRAMEBUFFER,null),W.bindFramebuffer(q.DRAW_FRAMEBUFFER,null),qq)for(let kq=0;kq<L.length;kq++){W.bindFramebuffer(q.FRAMEBUFFER,Uq.__webglMultisampledFramebuffer),q.framebufferRenderbuffer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+kq,q.RENDERBUFFER,Uq.__webglColorRenderbuffer[kq]);let e=X.get(L[kq]).__webglTexture;W.bindFramebuffer(q.FRAMEBUFFER,Uq.__webglFramebuffer),q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0+kq,q.TEXTURE_2D,e,0)}W.bindFramebuffer(q.DRAW_FRAMEBUFFER,Uq.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&Q){let L=M.stencilBuffer?q.DEPTH_STENCIL_ATTACHMENT:q.DEPTH_ATTACHMENT;q.invalidateFramebuffer(q.DRAW_FRAMEBUFFER,[L])}}}function zq(M){return Math.min(Y.maxSamples,M.samples)}function Tq(M){let L=X.get(M);return M.samples>0&&H.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function RH(M){let L=$.render.frame;if(F.get(M)!==L)F.set(M,L),M.update()}function LH(M,L){let{colorSpace:D,format:n,type:s}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return L;if(D!=="srgb-linear"&&D!=="")if(fq.getTransfer(D)==="srgb"){if(n!==1023||s!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",D);return L}function UH(M){if(typeof HTMLImageElement!=="undefined"&&M instanceof HTMLImageElement)_.width=M.naturalWidth||M.width,_.height=M.naturalHeight||M.height;else if(typeof VideoFrame!=="undefined"&&M instanceof VideoFrame)_.width=M.displayWidth,_.height=M.displayHeight;else _.width=M.width,_.height=M.height;return _}this.allocateTextureUnit=f,this.resetTextureUnits=m,this.setTexture2D=i,this.setTexture2DArray=c,this.setTexture3D=t,this.setTextureCube=l,this.rebindTextures=w,this.setupRenderTarget=HH,this.updateRenderTargetMipmap=Sq,this.updateMultisampleRenderTarget=YH,this.setupDepthRenderbuffer=pq,this.setupFrameBufferTexture=Lq,this.useMultisampledRTT=Tq}function Z9(q,H){function W(X,Y=""){let Z,$=fq.getTransfer(Y);if(X===1009)return q.UNSIGNED_BYTE;if(X===1017)return q.UNSIGNED_SHORT_4_4_4_4;if(X===1018)return q.UNSIGNED_SHORT_5_5_5_1;if(X===35902)return q.UNSIGNED_INT_5_9_9_9_REV;if(X===1010)return q.BYTE;if(X===1011)return q.SHORT;if(X===1012)return q.UNSIGNED_SHORT;if(X===1013)return q.INT;if(X===1014)return q.UNSIGNED_INT;if(X===1015)return q.FLOAT;if(X===1016)return q.HALF_FLOAT;if(X===1021)return q.ALPHA;if(X===1022)return q.RGB;if(X===1023)return q.RGBA;if(X===1026)return q.DEPTH_COMPONENT;if(X===1027)return q.DEPTH_STENCIL;if(X===1028)return q.RED;if(X===1029)return q.RED_INTEGER;if(X===1030)return q.RG;if(X===1031)return q.RG_INTEGER;if(X===1033)return q.RGBA_INTEGER;if(X===33776||X===33777||X===33778||X===33779)if($==="srgb")if(Z=H.get("WEBGL_compressed_texture_s3tc_srgb"),Z!==null){if(X===33776)return Z.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(X===33777)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(X===33778)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(X===33779)return Z.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Z=H.get("WEBGL_compressed_texture_s3tc"),Z!==null){if(X===33776)return Z.COMPRESSED_RGB_S3TC_DXT1_EXT;if(X===33777)return Z.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(X===33778)return Z.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(X===33779)return Z.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(X===35840||X===35841||X===35842||X===35843)if(Z=H.get("WEBGL_compressed_texture_pvrtc"),Z!==null){if(X===35840)return Z.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(X===35841)return Z.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(X===35842)return Z.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(X===35843)return Z.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(X===36196||X===37492||X===37496)if(Z=H.get("WEBGL_compressed_texture_etc"),Z!==null){if(X===36196||X===37492)return $==="srgb"?Z.COMPRESSED_SRGB8_ETC2:Z.COMPRESSED_RGB8_ETC2;if(X===37496)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Z.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(X===37808||X===37809||X===37810||X===37811||X===37812||X===37813||X===37814||X===37815||X===37816||X===37817||X===37818||X===37819||X===37820||X===37821)if(Z=H.get("WEBGL_compressed_texture_astc"),Z!==null){if(X===37808)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Z.COMPRESSED_RGBA_ASTC_4x4_KHR;if(X===37809)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Z.COMPRESSED_RGBA_ASTC_5x4_KHR;if(X===37810)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Z.COMPRESSED_RGBA_ASTC_5x5_KHR;if(X===37811)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Z.COMPRESSED_RGBA_ASTC_6x5_KHR;if(X===37812)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Z.COMPRESSED_RGBA_ASTC_6x6_KHR;if(X===37813)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Z.COMPRESSED_RGBA_ASTC_8x5_KHR;if(X===37814)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Z.COMPRESSED_RGBA_ASTC_8x6_KHR;if(X===37815)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Z.COMPRESSED_RGBA_ASTC_8x8_KHR;if(X===37816)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Z.COMPRESSED_RGBA_ASTC_10x5_KHR;if(X===37817)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Z.COMPRESSED_RGBA_ASTC_10x6_KHR;if(X===37818)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Z.COMPRESSED_RGBA_ASTC_10x8_KHR;if(X===37819)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Z.COMPRESSED_RGBA_ASTC_10x10_KHR;if(X===37820)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Z.COMPRESSED_RGBA_ASTC_12x10_KHR;if(X===37821)return $==="srgb"?Z.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Z.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(X===36492||X===36494||X===36495)if(Z=H.get("EXT_texture_compression_bptc"),Z!==null){if(X===36492)return $==="srgb"?Z.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Z.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(X===36494)return Z.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(X===36495)return Z.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(X===36283||X===36284||X===36285||X===36286)if(Z=H.get("EXT_texture_compression_rgtc"),Z!==null){if(X===36492)return Z.COMPRESSED_RED_RGTC1_EXT;if(X===36284)return Z.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(X===36285)return Z.COMPRESSED_RED_GREEN_RGTC2_EXT;if(X===36286)return Z.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(X===1020)return q.UNSIGNED_INT_24_8;return q[X]!==void 0?q[X]:null}return{convert:W}}class RZ extends BH{constructor(q=null){super();this.sourceTexture=q,this.isExternalTexture=!0}}let $9=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J9=`
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

}`;class A3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(q,H){if(this.texture===null){let W=new RZ(q.texture);if(q.depthNear!==H.depthNear||q.depthFar!==H.depthFar)this.depthNear=q.depthNear,this.depthFar=q.depthFar;this.texture=W}}getMesh(q){if(this.texture!==null){if(this.mesh===null){let H=q.cameras[0].viewport,W=new YW({vertexShader:$9,fragmentShader:J9,uniforms:{depthColor:{value:this.texture},depthWidth:{value:H.z},depthHeight:{value:H.w}}});this.mesh=new SH(new $Y(20,20),W)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j3 extends VW{constructor(q,H){super();let W=this,X=null,Y=1,Z=null,$="local-floor",J=1,Q=null,_=null,F=null,O=null,U=null,E=null,R=new A3,K={},B=H.getContextAttributes(),G=null,S=null,V=[],P=[],b=new uq,T=null,j=new CH;j.viewport=new oq;let x=new CH;x.viewport=new oq;let N=[j,x],C=new n0,I=null,m=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(p){let Yq=V[p];if(Yq===void 0)Yq=new nX,V[p]=Yq;return Yq.getTargetRaySpace()},this.getControllerGrip=function(p){let Yq=V[p];if(Yq===void 0)Yq=new nX,V[p]=Yq;return Yq.getGripSpace()},this.getHand=function(p){let Yq=V[p];if(Yq===void 0)Yq=new nX,V[p]=Yq;return Yq.getHandSpace()};function f(p){let Yq=P.indexOf(p.inputSource);if(Yq===-1)return;let Kq=V[Yq];if(Kq!==void 0)Kq.update(p.inputSource,p.frame,Q||Z),Kq.dispatchEvent({type:p.type,data:p.inputSource})}function d(){X.removeEventListener("select",f),X.removeEventListener("selectstart",f),X.removeEventListener("selectend",f),X.removeEventListener("squeeze",f),X.removeEventListener("squeezestart",f),X.removeEventListener("squeezeend",f),X.removeEventListener("end",d),X.removeEventListener("inputsourceschange",i);for(let p=0;p<V.length;p++){let Yq=P[p];if(Yq===null)continue;P[p]=null,V[p].disconnect(Yq)}I=null,m=null,R.reset();for(let p in K)delete K[p];q.setRenderTarget(G),U=null,O=null,F=null,X=null,S=null,XH.stop(),W.isPresenting=!1,q.setPixelRatio(T),q.setSize(b.width,b.height,!1),W.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(p){if(Y=p,W.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(p){if($=p,W.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return Q||Z},this.setReferenceSpace=function(p){Q=p},this.getBaseLayer=function(){return O!==null?O:U},this.getBinding=function(){return F},this.getFrame=function(){return E},this.getSession=function(){return X},this.setSession=async function(p){if(X=p,X!==null){if(G=q.getRenderTarget(),X.addEventListener("select",f),X.addEventListener("selectstart",f),X.addEventListener("selectend",f),X.addEventListener("squeeze",f),X.addEventListener("squeezestart",f),X.addEventListener("squeezeend",f),X.addEventListener("end",d),X.addEventListener("inputsourceschange",i),B.xrCompatible!==!0)await H.makeXRCompatible();if(T=q.getPixelRatio(),q.getSize(b),typeof XRWebGLBinding!=="undefined")F=new XRWebGLBinding(X,H);if(!(F!==null&&("createProjectionLayer"in XRWebGLBinding.prototype))){let Kq={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:Y};U=new XRWebGLLayer(X,H,Kq),X.updateRenderState({baseLayer:U}),q.setPixelRatio(1),q.setSize(U.framebufferWidth,U.framebufferHeight,!1),S=new _W(U.framebufferWidth,U.framebufferHeight,{format:1023,type:1009,colorSpace:q.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:U.ignoreDepthValues===!1,resolveStencilBuffer:U.ignoreDepthValues===!1})}else{let Kq=null,Fq=null,Lq=null;if(B.depth)Lq=B.stencil?H.DEPTH24_STENCIL8:H.DEPTH_COMPONENT24,Kq=B.stencil?1027:1026,Fq=B.stencil?1020:1014;let cq={colorFormat:H.RGBA8,depthFormat:Lq,scaleFactor:Y};O=F.createProjectionLayer(cq),X.updateRenderState({layers:[O]}),q.setPixelRatio(1),q.setSize(O.textureWidth,O.textureHeight,!1),S=new _W(O.textureWidth,O.textureHeight,{format:1023,type:1009,depthTexture:new qZ(O.textureWidth,O.textureHeight,Fq,void 0,void 0,void 0,void 0,void 0,void 0,Kq),stencilBuffer:B.stencil,colorSpace:q.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:O.ignoreDepthValues===!1,resolveStencilBuffer:O.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(J),Q=null,Z=await X.requestReferenceSpace($),XH.setContext(X),XH.start(),W.isPresenting=!0,W.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(X!==null)return X.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function i(p){for(let Yq=0;Yq<p.removed.length;Yq++){let Kq=p.removed[Yq],Fq=P.indexOf(Kq);if(Fq>=0)P[Fq]=null,V[Fq].disconnect(Kq)}for(let Yq=0;Yq<p.added.length;Yq++){let Kq=p.added[Yq],Fq=P.indexOf(Kq);if(Fq===-1){for(let cq=0;cq<V.length;cq++)if(cq>=P.length){P.push(Kq),Fq=cq;break}else if(P[cq]===null){P[cq]=Kq,Fq=cq;break}if(Fq===-1)break}let Lq=V[Fq];if(Lq)Lq.connect(Kq)}}let c=new k,t=new k;function l(p,Yq,Kq){c.setFromMatrixPosition(Yq.matrixWorld),t.setFromMatrixPosition(Kq.matrixWorld);let Fq=c.distanceTo(t),Lq=Yq.projectionMatrix.elements,cq=Kq.projectionMatrix.elements,dq=Lq[14]/(Lq[10]-1),pq=Lq[14]/(Lq[10]+1),w=(Lq[9]+1)/Lq[5],HH=(Lq[9]-1)/Lq[5],Sq=(Lq[8]-1)/Lq[0],sq=(cq[8]+1)/cq[0],Nq=dq*Sq,YH=dq*sq,zq=Fq/(-Sq+sq),Tq=zq*-Sq;if(Yq.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.translateX(Tq),p.translateZ(zq),p.matrixWorld.compose(p.position,p.quaternion,p.scale),p.matrixWorldInverse.copy(p.matrixWorld).invert(),Lq[10]===-1)p.projectionMatrix.copy(Yq.projectionMatrix),p.projectionMatrixInverse.copy(Yq.projectionMatrixInverse);else{let RH=dq+zq,LH=pq+zq,UH=Nq-Tq,M=YH+(Fq-Tq),L=w*pq/LH*RH,D=HH*pq/LH*RH;p.projectionMatrix.makePerspective(UH,M,L,D,RH,LH),p.projectionMatrixInverse.copy(p.projectionMatrix).invert()}}function Xq(p,Yq){if(Yq===null)p.matrixWorld.copy(p.matrix);else p.matrixWorld.multiplyMatrices(Yq.matrixWorld,p.matrix);p.matrixWorldInverse.copy(p.matrixWorld).invert()}this.updateCamera=function(p){if(X===null)return;let{near:Yq,far:Kq}=p;if(R.texture!==null){if(R.depthNear>0)Yq=R.depthNear;if(R.depthFar>0)Kq=R.depthFar}if(C.near=x.near=j.near=Yq,C.far=x.far=j.far=Kq,I!==C.near||m!==C.far)X.updateRenderState({depthNear:C.near,depthFar:C.far}),I=C.near,m=C.far;C.layers.mask=p.layers.mask|6,j.layers.mask=C.layers.mask&3,x.layers.mask=C.layers.mask&5;let Fq=p.parent,Lq=C.cameras;Xq(C,Fq);for(let cq=0;cq<Lq.length;cq++)Xq(Lq[cq],Fq);if(Lq.length===2)l(C,j,x);else C.projectionMatrix.copy(j.projectionMatrix);_q(p,C,Fq)};function _q(p,Yq,Kq){if(Kq===null)p.matrix.copy(Yq.matrixWorld);else p.matrix.copy(Kq.matrixWorld),p.matrix.invert(),p.matrix.multiply(Yq.matrixWorld);if(p.matrix.decompose(p.position,p.quaternion,p.scale),p.updateMatrixWorld(!0),p.projectionMatrix.copy(Yq.projectionMatrix),p.projectionMatrixInverse.copy(Yq.projectionMatrixInverse),p.isPerspectiveCamera)p.fov=gW*2*Math.atan(1/p.projectionMatrix.elements[5]),p.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(O===null&&U===null)return;return J},this.setFoveation=function(p){if(J=p,O!==null)O.fixedFoveation=p;if(U!==null&&U.fixedFoveation!==void 0)U.fixedFoveation=p},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)},this.getCameraTexture=function(p){return K[p]};let Aq=null;function mq(p,Yq){if(_=Yq.getViewerPose(Q||Z),E=Yq,_!==null){let Kq=_.views;if(U!==null)q.setRenderTargetFramebuffer(S,U.framebuffer),q.setRenderTarget(S);let Fq=!1;if(Kq.length!==C.cameras.length)C.cameras.length=0,Fq=!0;for(let pq=0;pq<Kq.length;pq++){let w=Kq[pq],HH=null;if(U!==null)HH=U.getViewport(w);else{let sq=F.getViewSubImage(O,w);if(HH=sq.viewport,pq===0)q.setRenderTargetTextures(S,sq.colorTexture,sq.depthStencilTexture),q.setRenderTarget(S)}let Sq=N[pq];if(Sq===void 0)Sq=new CH,Sq.layers.enable(pq),Sq.viewport=new oq,N[pq]=Sq;if(Sq.matrix.fromArray(w.transform.matrix),Sq.matrix.decompose(Sq.position,Sq.quaternion,Sq.scale),Sq.projectionMatrix.fromArray(w.projectionMatrix),Sq.projectionMatrixInverse.copy(Sq.projectionMatrix).invert(),Sq.viewport.set(HH.x,HH.y,HH.width,HH.height),pq===0)C.matrix.copy(Sq.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(Fq===!0)C.cameras.push(Sq)}let Lq=X.enabledFeatures;if(Lq&&Lq.includes("depth-sensing")&&X.depthUsage=="gpu-optimized"&&F){let pq=F.getDepthInformation(Kq[0]);if(pq&&pq.isValid&&pq.texture)R.init(pq,X.renderState)}if(Lq&&Lq.includes("camera-access")){if(q.state.unbindTexture(),F)for(let pq=0;pq<Kq.length;pq++){let w=Kq[pq].camera;if(w){let HH=K[w];if(!HH)HH=new RZ,K[w]=HH;let Sq=F.getCameraImage(w);HH.sourceTexture=Sq}}}}for(let Kq=0;Kq<V.length;Kq++){let Fq=P[Kq],Lq=V[Kq];if(Fq!==null&&Lq!==void 0)Lq.update(Fq,Yq,Q||Z)}if(Aq)Aq(p,Yq);if(Yq.detectedPlanes)W.dispatchEvent({type:"planesdetected",data:Yq});E=null}let XH=new i0;XH.setAnimationLoop(mq),this.setAnimationLoop=function(p){Aq=p},this.dispose=function(){}}}let hW=new vH,Q9=new bq;function _9(q,H){function W(B,G){if(B.matrixAutoUpdate===!0)B.updateMatrix();G.value.copy(B.matrix)}function X(B,G){if(G.color.getRGB(B.fogColor.value,aZ(q)),G.isFog)B.fogNear.value=G.near,B.fogFar.value=G.far;else if(G.isFogExp2)B.fogDensity.value=G.density}function Y(B,G,S,V,P){if(G.isMeshBasicMaterial)Z(B,G);else if(G.isMeshLambertMaterial)Z(B,G);else if(G.isMeshToonMaterial)Z(B,G),O(B,G);else if(G.isMeshPhongMaterial)Z(B,G),F(B,G);else if(G.isMeshStandardMaterial){if(Z(B,G),U(B,G),G.isMeshPhysicalMaterial)E(B,G,P)}else if(G.isMeshMatcapMaterial)Z(B,G),R(B,G);else if(G.isMeshDepthMaterial)Z(B,G);else if(G.isMeshDistanceMaterial)Z(B,G),K(B,G);else if(G.isMeshNormalMaterial)Z(B,G);else if(G.isLineBasicMaterial){if($(B,G),G.isLineDashedMaterial)J(B,G)}else if(G.isPointsMaterial)Q(B,G,S,V);else if(G.isSpriteMaterial)_(B,G);else if(G.isShadowMaterial)B.color.value.copy(G.color),B.opacity.value=G.opacity;else if(G.isShaderMaterial)G.uniformsNeedUpdate=!1}function Z(B,G){if(B.opacity.value=G.opacity,G.color)B.diffuse.value.copy(G.color);if(G.emissive)B.emissive.value.copy(G.emissive).multiplyScalar(G.emissiveIntensity);if(G.map)B.map.value=G.map,W(G.map,B.mapTransform);if(G.alphaMap)B.alphaMap.value=G.alphaMap,W(G.alphaMap,B.alphaMapTransform);if(G.bumpMap){if(B.bumpMap.value=G.bumpMap,W(G.bumpMap,B.bumpMapTransform),B.bumpScale.value=G.bumpScale,G.side===1)B.bumpScale.value*=-1}if(G.normalMap){if(B.normalMap.value=G.normalMap,W(G.normalMap,B.normalMapTransform),B.normalScale.value.copy(G.normalScale),G.side===1)B.normalScale.value.negate()}if(G.displacementMap)B.displacementMap.value=G.displacementMap,W(G.displacementMap,B.displacementMapTransform),B.displacementScale.value=G.displacementScale,B.displacementBias.value=G.displacementBias;if(G.emissiveMap)B.emissiveMap.value=G.emissiveMap,W(G.emissiveMap,B.emissiveMapTransform);if(G.specularMap)B.specularMap.value=G.specularMap,W(G.specularMap,B.specularMapTransform);if(G.alphaTest>0)B.alphaTest.value=G.alphaTest;let S=H.get(G),V=S.envMap,P=S.envMapRotation;if(V){if(B.envMap.value=V,hW.copy(P),hW.x*=-1,hW.y*=-1,hW.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1)hW.y*=-1,hW.z*=-1;B.envMapRotation.value.setFromMatrix4(Q9.makeRotationFromEuler(hW)),B.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,B.reflectivity.value=G.reflectivity,B.ior.value=G.ior,B.refractionRatio.value=G.refractionRatio}if(G.lightMap)B.lightMap.value=G.lightMap,B.lightMapIntensity.value=G.lightMapIntensity,W(G.lightMap,B.lightMapTransform);if(G.aoMap)B.aoMap.value=G.aoMap,B.aoMapIntensity.value=G.aoMapIntensity,W(G.aoMap,B.aoMapTransform)}function $(B,G){if(B.diffuse.value.copy(G.color),B.opacity.value=G.opacity,G.map)B.map.value=G.map,W(G.map,B.mapTransform)}function J(B,G){B.dashSize.value=G.dashSize,B.totalSize.value=G.dashSize+G.gapSize,B.scale.value=G.scale}function Q(B,G,S,V){if(B.diffuse.value.copy(G.color),B.opacity.value=G.opacity,B.size.value=G.size*S,B.scale.value=V*0.5,G.map)B.map.value=G.map,W(G.map,B.uvTransform);if(G.alphaMap)B.alphaMap.value=G.alphaMap,W(G.alphaMap,B.alphaMapTransform);if(G.alphaTest>0)B.alphaTest.value=G.alphaTest}function _(B,G){if(B.diffuse.value.copy(G.color),B.opacity.value=G.opacity,B.rotation.value=G.rotation,G.map)B.map.value=G.map,W(G.map,B.mapTransform);if(G.alphaMap)B.alphaMap.value=G.alphaMap,W(G.alphaMap,B.alphaMapTransform);if(G.alphaTest>0)B.alphaTest.value=G.alphaTest}function F(B,G){B.specular.value.copy(G.specular),B.shininess.value=Math.max(G.shininess,0.0001)}function O(B,G){if(G.gradientMap)B.gradientMap.value=G.gradientMap}function U(B,G){if(B.metalness.value=G.metalness,G.metalnessMap)B.metalnessMap.value=G.metalnessMap,W(G.metalnessMap,B.metalnessMapTransform);if(B.roughness.value=G.roughness,G.roughnessMap)B.roughnessMap.value=G.roughnessMap,W(G.roughnessMap,B.roughnessMapTransform);if(G.envMap)B.envMapIntensity.value=G.envMapIntensity}function E(B,G,S){if(B.ior.value=G.ior,G.sheen>0){if(B.sheenColor.value.copy(G.sheenColor).multiplyScalar(G.sheen),B.sheenRoughness.value=G.sheenRoughness,G.sheenColorMap)B.sheenColorMap.value=G.sheenColorMap,W(G.sheenColorMap,B.sheenColorMapTransform);if(G.sheenRoughnessMap)B.sheenRoughnessMap.value=G.sheenRoughnessMap,W(G.sheenRoughnessMap,B.sheenRoughnessMapTransform)}if(G.clearcoat>0){if(B.clearcoat.value=G.clearcoat,B.clearcoatRoughness.value=G.clearcoatRoughness,G.clearcoatMap)B.clearcoatMap.value=G.clearcoatMap,W(G.clearcoatMap,B.clearcoatMapTransform);if(G.clearcoatRoughnessMap)B.clearcoatRoughnessMap.value=G.clearcoatRoughnessMap,W(G.clearcoatRoughnessMap,B.clearcoatRoughnessMapTransform);if(G.clearcoatNormalMap){if(B.clearcoatNormalMap.value=G.clearcoatNormalMap,W(G.clearcoatNormalMap,B.clearcoatNormalMapTransform),B.clearcoatNormalScale.value.copy(G.clearcoatNormalScale),G.side===1)B.clearcoatNormalScale.value.negate()}}if(G.dispersion>0)B.dispersion.value=G.dispersion;if(G.iridescence>0){if(B.iridescence.value=G.iridescence,B.iridescenceIOR.value=G.iridescenceIOR,B.iridescenceThicknessMinimum.value=G.iridescenceThicknessRange[0],B.iridescenceThicknessMaximum.value=G.iridescenceThicknessRange[1],G.iridescenceMap)B.iridescenceMap.value=G.iridescenceMap,W(G.iridescenceMap,B.iridescenceMapTransform);if(G.iridescenceThicknessMap)B.iridescenceThicknessMap.value=G.iridescenceThicknessMap,W(G.iridescenceThicknessMap,B.iridescenceThicknessMapTransform)}if(G.transmission>0){if(B.transmission.value=G.transmission,B.transmissionSamplerMap.value=S.texture,B.transmissionSamplerSize.value.set(S.width,S.height),G.transmissionMap)B.transmissionMap.value=G.transmissionMap,W(G.transmissionMap,B.transmissionMapTransform);if(B.thickness.value=G.thickness,G.thicknessMap)B.thicknessMap.value=G.thicknessMap,W(G.thicknessMap,B.thicknessMapTransform);B.attenuationDistance.value=G.attenuationDistance,B.attenuationColor.value.copy(G.attenuationColor)}if(G.anisotropy>0){if(B.anisotropyVector.value.set(G.anisotropy*Math.cos(G.anisotropyRotation),G.anisotropy*Math.sin(G.anisotropyRotation)),G.anisotropyMap)B.anisotropyMap.value=G.anisotropyMap,W(G.anisotropyMap,B.anisotropyMapTransform)}if(B.specularIntensity.value=G.specularIntensity,B.specularColor.value.copy(G.specularColor),G.specularColorMap)B.specularColorMap.value=G.specularColorMap,W(G.specularColorMap,B.specularColorMapTransform);if(G.specularIntensityMap)B.specularIntensityMap.value=G.specularIntensityMap,W(G.specularIntensityMap,B.specularIntensityMapTransform)}function R(B,G){if(G.matcap)B.matcap.value=G.matcap}function K(B,G){let S=H.get(G).light;B.referencePosition.value.setFromMatrixPosition(S.matrixWorld),B.nearDistance.value=S.shadow.camera.near,B.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:X,refreshMaterialUniforms:Y}}function F9(q,H,W,X){let Y={},Z={},$=[],J=q.getParameter(q.MAX_UNIFORM_BUFFER_BINDINGS);function Q(S,V){let P=V.program;X.uniformBlockBinding(S,P)}function _(S,V){let P=Y[S.id];if(P===void 0)R(S),P=F(S),Y[S.id]=P,S.addEventListener("dispose",B);let b=V.program;X.updateUBOMapping(S,b);let T=H.render.frame;if(Z[S.id]!==T)U(S),Z[S.id]=T}function F(S){let V=O();S.__bindingPointIndex=V;let P=q.createBuffer(),b=S.__size,T=S.usage;return q.bindBuffer(q.UNIFORM_BUFFER,P),q.bufferData(q.UNIFORM_BUFFER,b,T),q.bindBuffer(q.UNIFORM_BUFFER,null),q.bindBufferBase(q.UNIFORM_BUFFER,V,P),P}function O(){for(let S=0;S<J;S++)if($.indexOf(S)===-1)return $.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function U(S){let V=Y[S.id],P=S.uniforms,b=S.__cache;q.bindBuffer(q.UNIFORM_BUFFER,V);for(let T=0,j=P.length;T<j;T++){let x=Array.isArray(P[T])?P[T]:[P[T]];for(let N=0,C=x.length;N<C;N++){let I=x[N];if(E(I,T,N,b)===!0){let m=I.__offset,f=Array.isArray(I.value)?I.value:[I.value],d=0;for(let i=0;i<f.length;i++){let c=f[i],t=K(c);if(typeof c==="number"||typeof c==="boolean")I.__data[0]=c,q.bufferSubData(q.UNIFORM_BUFFER,m+d,I.__data);else if(c.isMatrix3)I.__data[0]=c.elements[0],I.__data[1]=c.elements[1],I.__data[2]=c.elements[2],I.__data[3]=0,I.__data[4]=c.elements[3],I.__data[5]=c.elements[4],I.__data[6]=c.elements[5],I.__data[7]=0,I.__data[8]=c.elements[6],I.__data[9]=c.elements[7],I.__data[10]=c.elements[8],I.__data[11]=0;else c.toArray(I.__data,d),d+=t.storage/Float32Array.BYTES_PER_ELEMENT}q.bufferSubData(q.UNIFORM_BUFFER,m,I.__data)}}}q.bindBuffer(q.UNIFORM_BUFFER,null)}function E(S,V,P,b){let T=S.value,j=V+"_"+P;if(b[j]===void 0){if(typeof T==="number"||typeof T==="boolean")b[j]=T;else b[j]=T.clone();return!0}else{let x=b[j];if(typeof T==="number"||typeof T==="boolean"){if(x!==T)return b[j]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function R(S){let V=S.uniforms,P=0,b=16;for(let j=0,x=V.length;j<x;j++){let N=Array.isArray(V[j])?V[j]:[V[j]];for(let C=0,I=N.length;C<I;C++){let m=N[C],f=Array.isArray(m.value)?m.value:[m.value];for(let d=0,i=f.length;d<i;d++){let c=f[d],t=K(c),l=P%b,Xq=l%t.boundary,_q=l+Xq;if(P+=Xq,_q!==0&&b-_q<t.storage)P+=b-_q;m.__data=new Float32Array(t.storage/Float32Array.BYTES_PER_ELEMENT),m.__offset=P,P+=t.storage}}}let T=P%b;if(T>0)P+=b-T;return S.__size=P,S.__cache={},this}function K(S){let V={boundary:0,storage:0};if(typeof S==="number"||typeof S==="boolean")V.boundary=4,V.storage=4;else if(S.isVector2)V.boundary=8,V.storage=8;else if(S.isVector3||S.isColor)V.boundary=16,V.storage=12;else if(S.isVector4)V.boundary=16,V.storage=16;else if(S.isMatrix3)V.boundary=48,V.storage=48;else if(S.isMatrix4)V.boundary=64,V.storage=64;else if(S.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S);return V}function B(S){let V=S.target;V.removeEventListener("dispose",B);let P=$.indexOf(V.__bindingPointIndex);$.splice(P,1),q.deleteBuffer(Y[V.id]),delete Y[V.id],delete Z[V.id]}function G(){for(let S in Y)q.deleteBuffer(Y[S]);$=[],Y={},Z={}}return{bind:Q,update:_,dispose:G}}class k3{constructor(q={}){let{canvas:H=k4(),context:W=null,depth:X=!0,stencil:Y=!1,alpha:Z=!1,antialias:$=!1,premultipliedAlpha:J=!0,preserveDrawingBuffer:Q=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:F=!1,reversedDepthBuffer:O=!1}=q;this.isWebGLRenderer=!0;let U;if(W!==null){if(typeof WebGLRenderingContext!=="undefined"&&W instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");U=W.getContextAttributes().alpha}else U=Z;let E=new Uint32Array(4),R=new Int32Array(4),K=null,B=null,G=[],S=[];this.domElement=H,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,P=!1;this._outputColorSpace="srgb";let b=0,T=0,j=null,x=-1,N=null,C=new oq,I=new oq,m=null,f=new jq(0),d=0,i=H.width,c=H.height,t=1,l=null,Xq=null,_q=new oq(0,0,i,c),Aq=new oq(0,0,i,c),mq=!1,XH=new tX,p=!1,Yq=!1,Kq=new bq,Fq=new k,Lq=new oq,cq={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dq=!1;function pq(){return j===null?t:1}let w=W;function HH(z,v){return H.getContext(z,v)}try{let z={alpha:!0,depth:X,stencil:Y,antialias:$,premultipliedAlpha:J,preserveDrawingBuffer:Q,powerPreference:_,failIfMajorPerformanceCaveat:F};if("setAttribute"in H)H.setAttribute("data-engine","three.js r179");if(H.addEventListener("webglcontextlost",Zq,!1),H.addEventListener("webglcontextrestored",Hq,!1),H.addEventListener("webglcontextcreationerror",Bq,!1),w===null){if(w=HH("webgl2",z),w===null)if(HH("webgl2"))throw new Error("Error creating WebGL context with your selected attributes.");else throw new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let Sq,sq,Nq,YH,zq,Tq,RH,LH,UH,M,L,D,n,s,u,Uq,qq,Rq,kq,e,Jq,Vq,Cq,Qq;function yq(){if(Sq=new A7(w),Sq.init(),Vq=new Z9(w,Sq),sq=new C7(w,Sq,q,Vq),Nq=new X9(w,Sq),sq.reversedDepthBuffer&&O)Nq.buffers.depth.setReversed(!0);YH=new v7(w),zq=new c8,Tq=new Y9(w,Sq,Nq,zq,sq,Vq,YH),RH=new M7(V),LH=new w7(V),UH=new R5(w),Cq=new z7(w,UH),M=new j7(w,UH,YH,Cq),L=new h7(w,M,UH,YH),kq=new I7(w,sq,Tq),Uq=new N7(zq),D=new m8(V,RH,LH,Sq,sq,Cq,Uq),n=new _9(V,zq),s=new n8,u=new r8(Sq),Rq=new K7(V,RH,LH,Nq,L,U,J),qq=new H9(V,L,sq),Qq=new F9(w,YH,sq,Nq),e=new V7(w,Sq,YH),Jq=new k7(w,Sq,YH),YH.programs=D.programs,V.capabilities=sq,V.extensions=Sq,V.properties=zq,V.renderLists=s,V.shadowMap=qq,V.state=Nq,V.info=YH}yq();let A=new j3(V,w);this.xr=A,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let z=Sq.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=Sq.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return t},this.setPixelRatio=function(z){if(z===void 0)return;t=z,this.setSize(i,c,!1)},this.getSize=function(z){return z.set(i,c)},this.setSize=function(z,v,y=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(i=z,c=v,H.width=Math.floor(z*t),H.height=Math.floor(v*t),y===!0)H.style.width=z+"px",H.style.height=v+"px";this.setViewport(0,0,z,v)},this.getDrawingBufferSize=function(z){return z.set(i*t,c*t).floor()},this.setDrawingBufferSize=function(z,v,y){i=z,c=v,t=y,H.width=Math.floor(z*y),H.height=Math.floor(v*y),this.setViewport(0,0,z,v)},this.getCurrentViewport=function(z){return z.copy(C)},this.getViewport=function(z){return z.copy(_q)},this.setViewport=function(z,v,y,g){if(z.isVector4)_q.set(z.x,z.y,z.z,z.w);else _q.set(z,v,y,g);Nq.viewport(C.copy(_q).multiplyScalar(t).round())},this.getScissor=function(z){return z.copy(Aq)},this.setScissor=function(z,v,y,g){if(z.isVector4)Aq.set(z.x,z.y,z.z,z.w);else Aq.set(z,v,y,g);Nq.scissor(I.copy(Aq).multiplyScalar(t).round())},this.getScissorTest=function(){return mq},this.setScissorTest=function(z){Nq.setScissorTest(mq=z)},this.setOpaqueSort=function(z){l=z},this.setTransparentSort=function(z){Xq=z},this.getClearColor=function(z){return z.copy(Rq.getClearColor())},this.setClearColor=function(){Rq.setClearColor(...arguments)},this.getClearAlpha=function(){return Rq.getClearAlpha()},this.setClearAlpha=function(){Rq.setClearAlpha(...arguments)},this.clear=function(z=!0,v=!0,y=!0){let g=0;if(z){let h=!1;if(j!==null){let r=j.texture.format;h=r===1033||r===1031||r===1029}if(h){let r=j.texture.type,$q=r===1009||r===1014||r===1012||r===1020||r===1017||r===1018,Eq=Rq.getClearColor(),Oq=Rq.getClearAlpha(),wq=Eq.r,vq=Eq.g,Mq=Eq.b;if($q)E[0]=wq,E[1]=vq,E[2]=Mq,E[3]=Oq,w.clearBufferuiv(w.COLOR,0,E);else R[0]=wq,R[1]=vq,R[2]=Mq,R[3]=Oq,w.clearBufferiv(w.COLOR,0,R)}else g|=w.COLOR_BUFFER_BIT}if(v)g|=w.DEPTH_BUFFER_BIT;if(y)g|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);w.clear(g)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){H.removeEventListener("webglcontextlost",Zq,!1),H.removeEventListener("webglcontextrestored",Hq,!1),H.removeEventListener("webglcontextcreationerror",Bq,!1),Rq.dispose(),s.dispose(),u.dispose(),zq.dispose(),RH.dispose(),LH.dispose(),L.dispose(),Cq.dispose(),Qq.dispose(),D.dispose(),A.dispose(),A.removeEventListener("sessionstart",aH),A.removeEventListener("sessionend",tH),DW.stop()};function Zq(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Hq(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let z=YH.autoReset,v=qq.enabled,y=qq.autoUpdate,g=qq.needsUpdate,h=qq.type;yq(),YH.autoReset=z,qq.enabled=v,qq.autoUpdate=y,qq.needsUpdate=g,qq.type=h}function Bq(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function a(z){let v=z.target;v.removeEventListener("dispose",a),o(v)}function o(z){Gq(z),zq.remove(z)}function Gq(z){let v=zq.get(z).programs;if(v!==void 0){if(v.forEach(function(y){D.releaseProgram(y)}),z.isShaderMaterial)D.releaseShaderCache(z)}}this.renderBufferDirect=function(z,v,y,g,h,r){if(v===null)v=cq;let $q=h.isMesh&&h.matrixWorld.determinant()<0,Eq=N9(z,v,y,g,h);Nq.setMaterial(g,$q);let Oq=y.index,wq=1;if(g.wireframe===!0){if(Oq=M.getWireframeAttribute(y),Oq===void 0)return;wq=2}let vq=y.drawRange,Mq=y.attributes.position,lq=vq.start*wq,rq=(vq.start+vq.count)*wq;if(r!==null)lq=Math.max(lq,r.start*wq),rq=Math.min(rq,(r.start+r.count)*wq);if(Oq!==null)lq=Math.max(lq,0),rq=Math.min(rq,Oq.count);else if(Mq!==void 0&&Mq!==null)lq=Math.max(lq,0),rq=Math.min(rq,Mq.count);let QH=rq-lq;if(QH<0||QH===1/0)return;Cq.setup(h,g,Eq,y,Oq);let WH,qH=e;if(Oq!==null)WH=UH.get(Oq),qH=Jq,qH.setIndex(WH);if(h.isMesh)if(g.wireframe===!0)Nq.setLineWidth(g.wireframeLinewidth*pq()),qH.setMode(w.LINES);else qH.setMode(w.TRIANGLES);else if(h.isLine){let Pq=g.linewidth;if(Pq===void 0)Pq=1;if(Nq.setLineWidth(Pq*pq()),h.isLineSegments)qH.setMode(w.LINES);else if(h.isLineLoop)qH.setMode(w.LINE_LOOP);else qH.setMode(w.LINE_STRIP)}else if(h.isPoints)qH.setMode(w.POINTS);else if(h.isSprite)qH.setMode(w.TRIANGLES);if(h.isBatchedMesh)if(h._multiDrawInstances!==null)xW("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qH.renderMultiDrawInstances(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount,h._multiDrawInstances);else if(!Sq.get("WEBGL_multi_draw")){let{_multiDrawStarts:Pq,_multiDrawCounts:$H,_multiDrawCount:nq}=h,AH=Oq?UH.get(Oq).bytesPerElement:1,JX=zq.get(g).currentProgram.getUniforms();for(let jH=0;jH<nq;jH++)JX.setValue(w,"_gl_DrawID",jH),qH.render(Pq[jH]/AH,$H[jH])}else qH.renderMultiDraw(h._multiDrawStarts,h._multiDrawCounts,h._multiDrawCount);else if(h.isInstancedMesh)qH.renderInstances(lq,QH,h.count);else if(y.isInstancedBufferGeometry){let Pq=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,$H=Math.min(y.instanceCount,Pq);qH.renderInstances(lq,QH,$H)}else qH.render(lq,QH)};function Iq(z,v,y){if(z.transparent===!0&&z.side===2&&z.forceSinglePass===!1)z.side=1,z.needsUpdate=!0,GY(z,v,y),z.side=0,z.needsUpdate=!0,GY(z,v,y),z.side=2;else GY(z,v,y)}this.compile=function(z,v,y=null){if(y===null)y=z;if(B=u.get(y),B.init(v),S.push(B),y.traverseVisible(function(h){if(h.isLight&&h.layers.test(v.layers)){if(B.pushLight(h),h.castShadow)B.pushShadow(h)}}),z!==y)z.traverseVisible(function(h){if(h.isLight&&h.layers.test(v.layers)){if(B.pushLight(h),h.castShadow)B.pushShadow(h)}});B.setupLights();let g=new Set;return z.traverse(function(h){if(!(h.isMesh||h.isPoints||h.isLine||h.isSprite))return;let r=h.material;if(r)if(Array.isArray(r))for(let $q=0;$q<r.length;$q++){let Eq=r[$q];Iq(Eq,y,h),g.add(Eq)}else Iq(r,y,h),g.add(r)}),B=S.pop(),g},this.compileAsync=function(z,v,y=null){let g=this.compile(z,v,y);return new Promise((h)=>{function r(){if(g.forEach(function($q){if(zq.get($q).currentProgram.isReady())g.delete($q)}),g.size===0){h(z);return}setTimeout(r,10)}if(Sq.get("KHR_parallel_shader_compile")!==null)r();else setTimeout(r,10)})};let eq=null;function tq(z){if(eq)eq(z)}function aH(){DW.stop()}function tH(){DW.start()}let DW=new i0;if(DW.setAnimationLoop(tq),typeof self!=="undefined")DW.setContext(self);this.setAnimationLoop=function(z){eq=z,A.setAnimationLoop(z),z===null?DW.stop():DW.start()},A.addEventListener("sessionstart",aH),A.addEventListener("sessionend",tH),this.render=function(z,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(A.enabled===!0&&A.isPresenting===!0){if(A.cameraAutoUpdate===!0)A.updateCamera(v);v=A.getCamera()}if(z.isScene===!0)z.onBeforeRender(V,z,v,j);if(B=u.get(z,S.length),B.init(v),S.push(B),Kq.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),XH.setFromProjectionMatrix(Kq,2000,v.reversedDepth),Yq=this.localClippingEnabled,p=Uq.init(this.clippingPlanes,Yq),K=s.get(z,G.length),K.init(),G.push(K),A.enabled===!0&&A.isPresenting===!0){let r=V.xr.getDepthSensingMesh();if(r!==null)TZ(r,v,-1/0,V.sortObjects)}if(TZ(z,v,0,V.sortObjects),K.finish(),V.sortObjects===!0)K.sort(l,Xq);if(dq=A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1,dq)Rq.addToRenderList(K,z);if(this.info.render.frame++,p===!0)Uq.beginShadows();let y=B.state.shadowsArray;if(qq.render(y,z,v),p===!0)Uq.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:g,transmissive:h}=K;if(B.setupLights(),v.isArrayCamera){let r=v.cameras;if(h.length>0)for(let $q=0,Eq=r.length;$q<Eq;$q++){let Oq=r[$q];F4(g,h,z,Oq)}if(dq)Rq.render(z);for(let $q=0,Eq=r.length;$q<Eq;$q++){let Oq=r[$q];_4(K,z,Oq,Oq.viewport)}}else{if(h.length>0)F4(g,h,z,v);if(dq)Rq.render(z);_4(K,z,v)}if(j!==null&&T===0)Tq.updateMultisampleRenderTarget(j),Tq.updateRenderTargetMipmap(j);if(z.isScene===!0)z.onAfterRender(V,z,v);if(Cq.resetDefaultState(),x=-1,N=null,S.pop(),S.length>0){if(B=S[S.length-1],p===!0)Uq.setGlobalState(V.clippingPlanes,B.state.camera)}else B=null;if(G.pop(),G.length>0)K=G[G.length-1];else K=null};function TZ(z,v,y,g){if(z.visible===!1)return;if(z.layers.test(v.layers)){if(z.isGroup)y=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(v)}else if(z.isLight){if(B.pushLight(z),z.castShadow)B.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||XH.intersectsSprite(z)){if(g)Lq.setFromMatrixPosition(z.matrixWorld).applyMatrix4(Kq);let $q=L.update(z),Eq=z.material;if(Eq.visible)K.push(z,$q,Eq,y,Lq.z,null)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||XH.intersectsObject(z)){let $q=L.update(z),Eq=z.material;if(g){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();Lq.copy(z.boundingSphere.center)}else{if($q.boundingSphere===null)$q.computeBoundingSphere();Lq.copy($q.boundingSphere.center)}Lq.applyMatrix4(z.matrixWorld).applyMatrix4(Kq)}if(Array.isArray(Eq)){let Oq=$q.groups;for(let wq=0,vq=Oq.length;wq<vq;wq++){let Mq=Oq[wq],lq=Eq[Mq.materialIndex];if(lq&&lq.visible)K.push(z,$q,lq,y,Lq.z,Mq)}}else if(Eq.visible)K.push(z,$q,Eq,y,Lq.z,null)}}}let r=z.children;for(let $q=0,Eq=r.length;$q<Eq;$q++)TZ(r[$q],v,y,g)}function _4(z,v,y,g){let{opaque:h,transmissive:r,transparent:$q}=z;if(B.setupLightsView(y),p===!0)Uq.setGlobalState(V.clippingPlanes,y);if(g)Nq.viewport(C.copy(g));if(h.length>0)EY(h,v,y);if(r.length>0)EY(r,v,y);if($q.length>0)EY($q,v,y);Nq.buffers.depth.setTest(!0),Nq.buffers.depth.setMask(!0),Nq.buffers.color.setMask(!0),Nq.setPolygonOffset(!1)}function F4(z,v,y,g){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[g.id]===void 0)B.state.transmissionRenderTarget[g.id]=new _W(1,1,{generateMipmaps:!0,type:Sq.has("EXT_color_buffer_half_float")||Sq.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:Y,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fq.workingColorSpace});let r=B.state.transmissionRenderTarget[g.id],$q=g.viewport||C;r.setSize($q.z*V.transmissionResolutionScale,$q.w*V.transmissionResolutionScale);let Eq=V.getRenderTarget(),Oq=V.getActiveCubeFace(),wq=V.getActiveMipmapLevel();if(V.setRenderTarget(r),V.getClearColor(f),d=V.getClearAlpha(),d<1)V.setClearColor(16777215,0.5);if(V.clear(),dq)Rq.render(y);let vq=V.toneMapping;V.toneMapping=0;let Mq=g.viewport;if(g.viewport!==void 0)g.viewport=void 0;if(B.setupLightsView(g),p===!0)Uq.setGlobalState(V.clippingPlanes,g);if(EY(z,y,g),Tq.updateMultisampleRenderTarget(r),Tq.updateRenderTargetMipmap(r),Sq.has("WEBGL_multisampled_render_to_texture")===!1){let lq=!1;for(let rq=0,QH=v.length;rq<QH;rq++){let WH=v[rq],qH=WH.object,Pq=WH.geometry,$H=WH.material,nq=WH.group;if($H.side===2&&qH.layers.test(g.layers)){let AH=$H.side;$H.side=1,$H.needsUpdate=!0,O4(qH,y,g,Pq,$H,nq),$H.side=AH,$H.needsUpdate=!0,lq=!0}}if(lq===!0)Tq.updateMultisampleRenderTarget(r),Tq.updateRenderTargetMipmap(r)}if(V.setRenderTarget(Eq,Oq,wq),V.setClearColor(f,d),Mq!==void 0)g.viewport=Mq;V.toneMapping=vq}function EY(z,v,y){let g=v.isScene===!0?v.overrideMaterial:null;for(let h=0,r=z.length;h<r;h++){let $q=z[h],Eq=$q.object,Oq=$q.geometry,wq=$q.group,vq=$q.material;if(vq.allowOverride===!0&&g!==null)vq=g;if(Eq.layers.test(y.layers))O4(Eq,v,y,Oq,vq,wq)}}function O4(z,v,y,g,h,r){if(z.onBeforeRender(V,v,y,g,h,r),z.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),h.onBeforeRender(V,v,y,g,z,r),h.transparent===!0&&h.side===2&&h.forceSinglePass===!1)h.side=1,h.needsUpdate=!0,V.renderBufferDirect(y,v,g,h,z,r),h.side=0,h.needsUpdate=!0,V.renderBufferDirect(y,v,g,h,z,r),h.side=2;else V.renderBufferDirect(y,v,g,h,z,r);z.onAfterRender(V,v,y,g,h,r)}function GY(z,v,y){if(v.isScene!==!0)v=cq;let g=zq.get(z),h=B.state.lights,r=B.state.shadowsArray,$q=h.state.version,Eq=D.getParameters(z,h.state,r,v,y),Oq=D.getProgramCacheKey(Eq),wq=g.programs;if(g.environment=z.isMeshStandardMaterial?v.environment:null,g.fog=v.fog,g.envMap=(z.isMeshStandardMaterial?LH:RH).get(z.envMap||g.environment),g.envMapRotation=g.environment!==null&&z.envMap===null?v.environmentRotation:z.envMapRotation,wq===void 0)z.addEventListener("dispose",a),wq=new Map,g.programs=wq;let vq=wq.get(Oq);if(vq!==void 0){if(g.currentProgram===vq&&g.lightsStateVersion===$q)return B4(z,Eq),vq}else Eq.uniforms=D.getUniforms(z),z.onBeforeCompile(Eq,V),vq=D.acquireProgram(Eq,Oq),wq.set(Oq,vq),g.uniforms=Eq.uniforms;let Mq=g.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)Mq.clippingPlanes=Uq.uniform;if(B4(z,Eq),g.needsLights=S9(z),g.lightsStateVersion=$q,g.needsLights)Mq.ambientLightColor.value=h.state.ambient,Mq.lightProbe.value=h.state.probe,Mq.directionalLights.value=h.state.directional,Mq.directionalLightShadows.value=h.state.directionalShadow,Mq.spotLights.value=h.state.spot,Mq.spotLightShadows.value=h.state.spotShadow,Mq.rectAreaLights.value=h.state.rectArea,Mq.ltc_1.value=h.state.rectAreaLTC1,Mq.ltc_2.value=h.state.rectAreaLTC2,Mq.pointLights.value=h.state.point,Mq.pointLightShadows.value=h.state.pointShadow,Mq.hemisphereLights.value=h.state.hemi,Mq.directionalShadowMap.value=h.state.directionalShadowMap,Mq.directionalShadowMatrix.value=h.state.directionalShadowMatrix,Mq.spotShadowMap.value=h.state.spotShadowMap,Mq.spotLightMatrix.value=h.state.spotLightMatrix,Mq.spotLightMap.value=h.state.spotLightMap,Mq.pointShadowMap.value=h.state.pointShadowMap,Mq.pointShadowMatrix.value=h.state.pointShadowMatrix;return g.currentProgram=vq,g.uniformsList=null,vq}function U4(z){if(z.uniformsList===null){let v=z.currentProgram.getUniforms();z.uniformsList=PX.seqWithValue(v.seq,z.uniforms)}return z.uniformsList}function B4(z,v){let y=zq.get(z);y.outputColorSpace=v.outputColorSpace,y.batching=v.batching,y.batchingColor=v.batchingColor,y.instancing=v.instancing,y.instancingColor=v.instancingColor,y.instancingMorph=v.instancingMorph,y.skinning=v.skinning,y.morphTargets=v.morphTargets,y.morphNormals=v.morphNormals,y.morphColors=v.morphColors,y.morphTargetsCount=v.morphTargetsCount,y.numClippingPlanes=v.numClippingPlanes,y.numIntersection=v.numClipIntersection,y.vertexAlphas=v.vertexAlphas,y.vertexTangents=v.vertexTangents,y.toneMapping=v.toneMapping}function N9(z,v,y,g,h){if(v.isScene!==!0)v=cq;Tq.resetTextureUnits();let r=v.fog,$q=g.isMeshStandardMaterial?v.environment:null,Eq=j===null?V.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:"srgb-linear",Oq=(g.isMeshStandardMaterial?LH:RH).get(g.envMap||$q),wq=g.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vq=!!y.attributes.tangent&&(!!g.normalMap||g.anisotropy>0),Mq=!!y.morphAttributes.position,lq=!!y.morphAttributes.normal,rq=!!y.morphAttributes.color,QH=0;if(g.toneMapped){if(j===null||j.isXRRenderTarget===!0)QH=V.toneMapping}let WH=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,qH=WH!==void 0?WH.length:0,Pq=zq.get(g),$H=B.state.lights;if(p===!0){if(Yq===!0||z!==N){let MH=z===N&&g.id===x;Uq.setState(g,z,MH)}}let nq=!1;if(g.version===Pq.__version){if(Pq.needsLights&&Pq.lightsStateVersion!==$H.state.version)nq=!0;else if(Pq.outputColorSpace!==Eq)nq=!0;else if(h.isBatchedMesh&&Pq.batching===!1)nq=!0;else if(!h.isBatchedMesh&&Pq.batching===!0)nq=!0;else if(h.isBatchedMesh&&Pq.batchingColor===!0&&h.colorTexture===null)nq=!0;else if(h.isBatchedMesh&&Pq.batchingColor===!1&&h.colorTexture!==null)nq=!0;else if(h.isInstancedMesh&&Pq.instancing===!1)nq=!0;else if(!h.isInstancedMesh&&Pq.instancing===!0)nq=!0;else if(h.isSkinnedMesh&&Pq.skinning===!1)nq=!0;else if(!h.isSkinnedMesh&&Pq.skinning===!0)nq=!0;else if(h.isInstancedMesh&&Pq.instancingColor===!0&&h.instanceColor===null)nq=!0;else if(h.isInstancedMesh&&Pq.instancingColor===!1&&h.instanceColor!==null)nq=!0;else if(h.isInstancedMesh&&Pq.instancingMorph===!0&&h.morphTexture===null)nq=!0;else if(h.isInstancedMesh&&Pq.instancingMorph===!1&&h.morphTexture!==null)nq=!0;else if(Pq.envMap!==Oq)nq=!0;else if(g.fog===!0&&Pq.fog!==r)nq=!0;else if(Pq.numClippingPlanes!==void 0&&(Pq.numClippingPlanes!==Uq.numPlanes||Pq.numIntersection!==Uq.numIntersection))nq=!0;else if(Pq.vertexAlphas!==wq)nq=!0;else if(Pq.vertexTangents!==vq)nq=!0;else if(Pq.morphTargets!==Mq)nq=!0;else if(Pq.morphNormals!==lq)nq=!0;else if(Pq.morphColors!==rq)nq=!0;else if(Pq.toneMapping!==QH)nq=!0;else if(Pq.morphTargetsCount!==qH)nq=!0}else nq=!0,Pq.__version=g.version;let AH=Pq.currentProgram;if(nq===!0)AH=GY(g,v,h);let JX=!1,jH=!1,AX=!1,JH=AH.getUniforms(),yH=Pq.uniforms;if(Nq.useProgram(AH.program))JX=!0,jH=!0,AX=!0;if(g.id!==x)x=g.id,jH=!0;if(JX||N!==z){if(Nq.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();JH.setValue(w,"projectionMatrix",z.projectionMatrix),JH.setValue(w,"viewMatrix",z.matrixWorldInverse);let PH=JH.map.cameraPosition;if(PH!==void 0)PH.setValue(w,Fq.setFromMatrixPosition(z.matrixWorld));if(sq.logarithmicDepthBuffer)JH.setValue(w,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(g.isMeshPhongMaterial||g.isMeshToonMaterial||g.isMeshLambertMaterial||g.isMeshBasicMaterial||g.isMeshStandardMaterial||g.isShaderMaterial)JH.setValue(w,"isOrthographic",z.isOrthographicCamera===!0);if(N!==z)N=z,jH=!0,AX=!0}if(h.isSkinnedMesh){JH.setOptional(w,h,"bindMatrix"),JH.setOptional(w,h,"bindMatrixInverse");let MH=h.skeleton;if(MH){if(MH.boneTexture===null)MH.computeBoneTexture();JH.setValue(w,"boneTexture",MH.boneTexture,Tq)}}if(h.isBatchedMesh){if(JH.setOptional(w,h,"batchingTexture"),JH.setValue(w,"batchingTexture",h._matricesTexture,Tq),JH.setOptional(w,h,"batchingIdTexture"),JH.setValue(w,"batchingIdTexture",h._indirectTexture,Tq),JH.setOptional(w,h,"batchingColorTexture"),h._colorsTexture!==null)JH.setValue(w,"batchingColorTexture",h._colorsTexture,Tq)}let gH=y.morphAttributes;if(gH.position!==void 0||gH.normal!==void 0||gH.color!==void 0)kq.update(h,y,AH);if(jH||Pq.receiveShadow!==h.receiveShadow)Pq.receiveShadow=h.receiveShadow,JH.setValue(w,"receiveShadow",h.receiveShadow);if(g.isMeshGouraudMaterial&&g.envMap!==null)yH.envMap.value=Oq,yH.flipEnvMap.value=Oq.isCubeTexture&&Oq.isRenderTargetTexture===!1?-1:1;if(g.isMeshStandardMaterial&&g.envMap===null&&v.environment!==null)yH.envMapIntensity.value=v.environmentIntensity;if(jH){if(JH.setValue(w,"toneMappingExposure",V.toneMappingExposure),Pq.needsLights)M9(yH,AX);if(r&&g.fog===!0)n.refreshFogUniforms(yH,r);n.refreshMaterialUniforms(yH,g,t,c,B.state.transmissionRenderTarget[z.id]),PX.upload(w,U4(Pq),yH,Tq)}if(g.isShaderMaterial&&g.uniformsNeedUpdate===!0)PX.upload(w,U4(Pq),yH,Tq),g.uniformsNeedUpdate=!1;if(g.isSpriteMaterial)JH.setValue(w,"center",h.center);if(JH.setValue(w,"modelViewMatrix",h.modelViewMatrix),JH.setValue(w,"normalMatrix",h.normalMatrix),JH.setValue(w,"modelMatrix",h.matrixWorld),g.isShaderMaterial||g.isRawShaderMaterial){let MH=g.uniformsGroups;for(let PH=0,wZ=MH.length;PH<wZ;PH++){let yW=MH[PH];Qq.update(yW,AH),Qq.bind(yW,AH)}}return AH}function M9(z,v){z.ambientLightColor.needsUpdate=v,z.lightProbe.needsUpdate=v,z.directionalLights.needsUpdate=v,z.directionalLightShadows.needsUpdate=v,z.pointLights.needsUpdate=v,z.pointLightShadows.needsUpdate=v,z.spotLights.needsUpdate=v,z.spotLightShadows.needsUpdate=v,z.rectAreaLights.needsUpdate=v,z.hemisphereLights.needsUpdate=v}function S9(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(z,v,y){let g=zq.get(z);if(g.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,g.__autoAllocateDepthBuffer===!1)g.__useRenderToTexture=!1;zq.get(z.texture).__webglTexture=v,zq.get(z.depthTexture).__webglTexture=g.__autoAllocateDepthBuffer?void 0:y,g.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,v){let y=zq.get(z);y.__webglFramebuffer=v,y.__useDefaultFramebuffer=v===void 0};let P9=w.createFramebuffer();this.setRenderTarget=function(z,v=0,y=0){j=z,b=v,T=y;let g=!0,h=null,r=!1,$q=!1;if(z){let Oq=zq.get(z);if(Oq.__useDefaultFramebuffer!==void 0)Nq.bindFramebuffer(w.FRAMEBUFFER,null),g=!1;else if(Oq.__webglFramebuffer===void 0)Tq.setupRenderTarget(z);else if(Oq.__hasExternalTextures)Tq.rebindTextures(z,zq.get(z.texture).__webglTexture,zq.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let Mq=z.depthTexture;if(Oq.__boundDepthTexture!==Mq){if(Mq!==null&&zq.has(Mq)&&(z.width!==Mq.image.width||z.height!==Mq.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Tq.setupDepthRenderbuffer(z)}}let wq=z.texture;if(wq.isData3DTexture||wq.isDataArrayTexture||wq.isCompressedArrayTexture)$q=!0;let vq=zq.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(vq[v]))h=vq[v][y];else h=vq[v];r=!0}else if(z.samples>0&&Tq.useMultisampledRTT(z)===!1)h=zq.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(vq))h=vq[y];else h=vq;C.copy(z.viewport),I.copy(z.scissor),m=z.scissorTest}else C.copy(_q).multiplyScalar(t).floor(),I.copy(Aq).multiplyScalar(t).floor(),m=mq;if(y!==0)h=P9;if(Nq.bindFramebuffer(w.FRAMEBUFFER,h)&&g)Nq.drawBuffers(z,h);if(Nq.viewport(C),Nq.scissor(I),Nq.setScissorTest(m),r){let Oq=zq.get(z.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+v,Oq.__webglTexture,y)}else if($q){let Oq=v;for(let wq=0;wq<z.textures.length;wq++){let vq=zq.get(z.textures[wq]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+wq,vq.__webglTexture,y,Oq)}}else if(z!==null&&y!==0){let Oq=zq.get(z.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Oq.__webglTexture,y)}x=-1},this.readRenderTargetPixels=function(z,v,y,g,h,r,$q,Eq=0){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oq=zq.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&$q!==void 0)Oq=Oq[$q];if(Oq){Nq.bindFramebuffer(w.FRAMEBUFFER,Oq);try{let wq=z.textures[Eq],vq=wq.format,Mq=wq.type;if(!sq.textureFormatReadable(vq)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!sq.textureTypeReadable(Mq)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=z.width-g&&(y>=0&&y<=z.height-h)){if(z.textures.length>1)w.readBuffer(w.COLOR_ATTACHMENT0+Eq);w.readPixels(v,y,g,h,Vq.convert(vq),Vq.convert(Mq),r)}}finally{let wq=j!==null?zq.get(j).__webglFramebuffer:null;Nq.bindFramebuffer(w.FRAMEBUFFER,wq)}}},this.readRenderTargetPixelsAsync=async function(z,v,y,g,h,r,$q,Eq=0){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oq=zq.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&$q!==void 0)Oq=Oq[$q];if(Oq)if(v>=0&&v<=z.width-g&&(y>=0&&y<=z.height-h)){Nq.bindFramebuffer(w.FRAMEBUFFER,Oq);let wq=z.textures[Eq],vq=wq.format,Mq=wq.type;if(!sq.textureFormatReadable(vq))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!sq.textureTypeReadable(Mq))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lq=w.createBuffer();if(w.bindBuffer(w.PIXEL_PACK_BUFFER,lq),w.bufferData(w.PIXEL_PACK_BUFFER,r.byteLength,w.STREAM_READ),z.textures.length>1)w.readBuffer(w.COLOR_ATTACHMENT0+Eq);w.readPixels(v,y,g,h,Vq.convert(vq),Vq.convert(Mq),0);let rq=j!==null?zq.get(j).__webglFramebuffer:null;Nq.bindFramebuffer(w.FRAMEBUFFER,rq);let QH=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await v4(w,QH,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,lq),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,r),w.deleteBuffer(lq),w.deleteSync(QH),r}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,v=null,y=0){let g=Math.pow(2,-y),h=Math.floor(z.image.width*g),r=Math.floor(z.image.height*g),$q=v!==null?v.x:0,Eq=v!==null?v.y:0;Tq.setTexture2D(z,0),w.copyTexSubImage2D(w.TEXTURE_2D,y,0,0,$q,Eq,h,r),Nq.unbindTexture()};let T9=w.createFramebuffer(),w9=w.createFramebuffer();if(this.copyTextureToTexture=function(z,v,y=null,g=null,h=0,r=null){if(r===null)if(h!==0)xW("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),r=h,h=0;else r=0;let $q,Eq,Oq,wq,vq,Mq,lq,rq,QH,WH=z.isCompressedTexture?z.mipmaps[r]:z.image;if(y!==null)$q=y.max.x-y.min.x,Eq=y.max.y-y.min.y,Oq=y.isBox3?y.max.z-y.min.z:1,wq=y.min.x,vq=y.min.y,Mq=y.isBox3?y.min.z:0;else{let gH=Math.pow(2,-h);if($q=Math.floor(WH.width*gH),Eq=Math.floor(WH.height*gH),z.isDataArrayTexture)Oq=WH.depth;else if(z.isData3DTexture)Oq=Math.floor(WH.depth*gH);else Oq=1;wq=0,vq=0,Mq=0}if(g!==null)lq=g.x,rq=g.y,QH=g.z;else lq=0,rq=0,QH=0;let qH=Vq.convert(v.format),Pq=Vq.convert(v.type),$H;if(v.isData3DTexture)Tq.setTexture3D(v,0),$H=w.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)Tq.setTexture2DArray(v,0),$H=w.TEXTURE_2D_ARRAY;else Tq.setTexture2D(v,0),$H=w.TEXTURE_2D;w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,v.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,v.unpackAlignment);let nq=w.getParameter(w.UNPACK_ROW_LENGTH),AH=w.getParameter(w.UNPACK_IMAGE_HEIGHT),JX=w.getParameter(w.UNPACK_SKIP_PIXELS),jH=w.getParameter(w.UNPACK_SKIP_ROWS),AX=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,WH.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,WH.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,wq),w.pixelStorei(w.UNPACK_SKIP_ROWS,vq),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Mq);let JH=z.isDataArrayTexture||z.isData3DTexture,yH=v.isDataArrayTexture||v.isData3DTexture;if(z.isDepthTexture){let gH=zq.get(z),MH=zq.get(v),PH=zq.get(gH.__renderTarget),wZ=zq.get(MH.__renderTarget);Nq.bindFramebuffer(w.READ_FRAMEBUFFER,PH.__webglFramebuffer),Nq.bindFramebuffer(w.DRAW_FRAMEBUFFER,wZ.__webglFramebuffer);for(let yW=0;yW<Oq;yW++){if(JH)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zq.get(z).__webglTexture,h,Mq+yW),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,zq.get(v).__webglTexture,r,QH+yW);w.blitFramebuffer(wq,vq,$q,Eq,lq,rq,$q,Eq,w.DEPTH_BUFFER_BIT,w.NEAREST)}Nq.bindFramebuffer(w.READ_FRAMEBUFFER,null),Nq.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(h!==0||z.isRenderTargetTexture||zq.has(z)){let gH=zq.get(z),MH=zq.get(v);Nq.bindFramebuffer(w.READ_FRAMEBUFFER,T9),Nq.bindFramebuffer(w.DRAW_FRAMEBUFFER,w9);for(let PH=0;PH<Oq;PH++){if(JH)w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,gH.__webglTexture,h,Mq+PH);else w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,gH.__webglTexture,h);if(yH)w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,MH.__webglTexture,r,QH+PH);else w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,MH.__webglTexture,r);if(h!==0)w.blitFramebuffer(wq,vq,$q,Eq,lq,rq,$q,Eq,w.COLOR_BUFFER_BIT,w.NEAREST);else if(yH)w.copyTexSubImage3D($H,r,lq,rq,QH+PH,wq,vq,$q,Eq);else w.copyTexSubImage2D($H,r,lq,rq,wq,vq,$q,Eq)}Nq.bindFramebuffer(w.READ_FRAMEBUFFER,null),Nq.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(yH)if(z.isDataTexture||z.isData3DTexture)w.texSubImage3D($H,r,lq,rq,QH,$q,Eq,Oq,qH,Pq,WH.data);else if(v.isCompressedArrayTexture)w.compressedTexSubImage3D($H,r,lq,rq,QH,$q,Eq,Oq,qH,WH.data);else w.texSubImage3D($H,r,lq,rq,QH,$q,Eq,Oq,qH,Pq,WH);else if(z.isDataTexture)w.texSubImage2D(w.TEXTURE_2D,r,lq,rq,$q,Eq,qH,Pq,WH.data);else if(z.isCompressedTexture)w.compressedTexSubImage2D(w.TEXTURE_2D,r,lq,rq,WH.width,WH.height,qH,WH.data);else w.texSubImage2D(w.TEXTURE_2D,r,lq,rq,$q,Eq,qH,Pq,WH);if(w.pixelStorei(w.UNPACK_ROW_LENGTH,nq),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,AH),w.pixelStorei(w.UNPACK_SKIP_PIXELS,JX),w.pixelStorei(w.UNPACK_SKIP_ROWS,jH),w.pixelStorei(w.UNPACK_SKIP_IMAGES,AX),r===0&&v.generateMipmaps)w.generateMipmap($H);Nq.unbindTexture()},this.copyTextureToTexture3D=function(z,v,y=null,g=null,h=0){return xW('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,v,y,g,h)},this.initRenderTarget=function(z){if(zq.get(z).__webglFramebuffer===void 0)Tq.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)Tq.setTextureCube(z,0);else if(z.isData3DTexture)Tq.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Tq.setTexture2DArray(z,0);else Tq.setTexture2D(z,0);Nq.unbindTexture()},this.resetState=function(){b=0,T=0,j=null,Nq.reset(),Cq.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(q){this._outputColorSpace=q;let H=this.getContext();H.drawingBufferColorSpace=fq._getDrawingBufferColorSpace(q),H.unpackColorSpace=fq._getUnpackColorSpace()}}function v3(q,H){if(H===0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),q;if(H===2||H===1){let W=q.getIndex();if(W===null){let $=[],J=q.getAttribute("position");if(J!==void 0){for(let Q=0;Q<J.count;Q++)$.push(Q);q.setIndex($),W=q.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),q}let X=W.count-2,Y=[];if(H===2)for(let $=1;$<=X;$++)Y.push(W.getX(0)),Y.push(W.getX($)),Y.push(W.getX($+1));else for(let $=0;$<X;$++)if($%2===0)Y.push(W.getX($)),Y.push(W.getX($+1)),Y.push(W.getX($+2));else Y.push(W.getX($+2)),Y.push(W.getX($+1)),Y.push(W.getX($));if(Y.length/3!==X)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let Z=q.clone();return Z.setIndex(Y),Z.clearGroups(),Z}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",H),q}class I3 extends KW{constructor(q){super(q);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(H){return new y3(H)}),this.register(function(H){return new g3(H)}),this.register(function(H){return new n3(H)}),this.register(function(H){return new o3(H)}),this.register(function(H){return new s3(H)}),this.register(function(H){return new l3(H)}),this.register(function(H){return new u3(H)}),this.register(function(H){return new f3(H)}),this.register(function(H){return new p3(H)}),this.register(function(H){return new D3(H)}),this.register(function(H){return new m3(H)}),this.register(function(H){return new x3(H)}),this.register(function(H){return new d3(H)}),this.register(function(H){return new c3(H)}),this.register(function(H){return new h3(H)}),this.register(function(H){return new i3(H)}),this.register(function(H){return new a3(H)})}load(q,H,W,X){let Y=this,Z;if(this.resourcePath!=="")Z=this.resourcePath;else if(this.path!==""){let Q=WX.extractUrlBase(q);Z=WX.resolveURL(Q,this.path)}else Z=WX.extractUrlBase(q);this.manager.itemStart(q);let $=function(Q){if(X)X(Q);else console.error(Q);Y.manager.itemError(q),Y.manager.itemEnd(q)},J=new CX(this.manager);J.setPath(this.path),J.setResponseType("arraybuffer"),J.setRequestHeader(this.requestHeader),J.setWithCredentials(this.withCredentials),J.load(q,function(Q){try{Y.parse(Q,Z,function(_){H(_),Y.manager.itemEnd(q)},$)}catch(_){$(_)}},W,$)}setDRACOLoader(q){return this.dracoLoader=q,this}setKTX2Loader(q){return this.ktx2Loader=q,this}setMeshoptDecoder(q){return this.meshoptDecoder=q,this}register(q){if(this.pluginCallbacks.indexOf(q)===-1)this.pluginCallbacks.push(q);return this}unregister(q){if(this.pluginCallbacks.indexOf(q)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(q),1);return this}parse(q,H,W,X){let Y,Z={},$={},J=new TextDecoder;if(typeof q==="string")Y=JSON.parse(q);else if(q instanceof ArrayBuffer)if(J.decode(new Uint8Array(q,0,4))===t3){try{Z[xq.KHR_BINARY_GLTF]=new e3(q)}catch(F){if(X)X(F);return}Y=JSON.parse(Z[xq.KHR_BINARY_GLTF].content)}else Y=JSON.parse(J.decode(q));else Y=q;if(Y.asset===void 0||Y.asset.version[0]<2){if(X)X(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let Q=new $4(Y,{path:H||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});Q.fileLoader.setRequestHeader(this.requestHeader);for(let _=0;_<this.pluginCallbacks.length;_++){let F=this.pluginCallbacks[_](Q);if(!F.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");$[F.name]=F,Z[F.name]=!0}if(Y.extensionsUsed)for(let _=0;_<Y.extensionsUsed.length;++_){let F=Y.extensionsUsed[_],O=Y.extensionsRequired||[];switch(F){case xq.KHR_MATERIALS_UNLIT:Z[F]=new b3;break;case xq.KHR_DRACO_MESH_COMPRESSION:Z[F]=new q4(Y,this.dracoLoader);break;case xq.KHR_TEXTURE_TRANSFORM:Z[F]=new H4;break;case xq.KHR_MESH_QUANTIZATION:Z[F]=new W4;break;default:if(O.indexOf(F)>=0&&$[F]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+F+'".')}}Q.setExtensions(Z),Q.setPlugins($),Q.parse(W,X)}parseAsync(q,H){let W=this;return new Promise(function(X,Y){W.parse(q,H,X,Y)})}}function O9(){let q={};return{get:function(H){return q[H]},add:function(H,W){q[H]=W},remove:function(H){delete q[H]},removeAll:function(){q={}}}}let xq={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class h3{constructor(q){this.parser=q,this.name=xq.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let q=this.parser,H=this.parser.json.nodes||[];for(let W=0,X=H.length;W<X;W++){let Y=H[W];if(Y.extensions&&Y.extensions[this.name]&&Y.extensions[this.name].light!==void 0)q._addNodeRef(this.cache,Y.extensions[this.name].light)}}_loadLight(q){let H=this.parser,W="light:"+q,X=H.cache.get(W);if(X)return X;let Y=H.json,J=((Y.extensions&&Y.extensions[this.name]||{}).lights||[])[q],Q,_=new jq(16777215);if(J.color!==void 0)_.setRGB(J.color[0],J.color[1],J.color[2],"srgb-linear");let F=J.range!==void 0?J.range:0;switch(J.type){case"directional":Q=new YZ(_),Q.target.position.set(0,0,-1),Q.add(Q.target);break;case"point":Q=new p0(_),Q.distance=F;break;case"spot":Q=new l0(_),Q.distance=F,J.spot=J.spot||{},J.spot.innerConeAngle=J.spot.innerConeAngle!==void 0?J.spot.innerConeAngle:0,J.spot.outerConeAngle=J.spot.outerConeAngle!==void 0?J.spot.outerConeAngle:Math.PI/4,Q.angle=J.spot.outerConeAngle,Q.penumbra=1-J.spot.innerConeAngle/J.spot.outerConeAngle,Q.target.position.set(0,0,-1),Q.add(Q.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+J.type)}if(Q.position.set(0,0,0),QW(Q,J),J.intensity!==void 0)Q.intensity=J.intensity;return Q.name=H.createUniqueName(J.name||"light_"+q),X=Promise.resolve(Q),H.cache.add(W,X),X}getDependency(q,H){if(q!=="light")return;return this._loadLight(H)}createNodeAttachment(q){let H=this,W=this.parser,Y=W.json.nodes[q],$=(Y.extensions&&Y.extensions[this.name]||{}).light;if($===void 0)return null;return this._loadLight($).then(function(J){return W._getNodeRef(H.cache,$,J)})}}class b3{constructor(){this.name=xq.KHR_MATERIALS_UNLIT}getMaterialType(){return GW}extendParams(q,H,W){let X=[];q.color=new jq(1,1,1),q.opacity=1;let Y=H.pbrMetallicRoughness;if(Y){if(Array.isArray(Y.baseColorFactor)){let Z=Y.baseColorFactor;q.color.setRGB(Z[0],Z[1],Z[2],"srgb-linear"),q.opacity=Z[3]}if(Y.baseColorTexture!==void 0)X.push(W.assignTexture(q,"map",Y.baseColorTexture,"srgb"))}return Promise.all(X)}}class D3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(q,H){let X=this.parser.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=X.extensions[this.name].emissiveStrength;if(Y!==void 0)H.emissiveIntensity=Y;return Promise.resolve()}}class y3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_CLEARCOAT}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let W=this.parser,X=W.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=[],Z=X.extensions[this.name];if(Z.clearcoatFactor!==void 0)H.clearcoat=Z.clearcoatFactor;if(Z.clearcoatTexture!==void 0)Y.push(W.assignTexture(H,"clearcoatMap",Z.clearcoatTexture));if(Z.clearcoatRoughnessFactor!==void 0)H.clearcoatRoughness=Z.clearcoatRoughnessFactor;if(Z.clearcoatRoughnessTexture!==void 0)Y.push(W.assignTexture(H,"clearcoatRoughnessMap",Z.clearcoatRoughnessTexture));if(Z.clearcoatNormalTexture!==void 0){if(Y.push(W.assignTexture(H,"clearcoatNormalMap",Z.clearcoatNormalTexture)),Z.clearcoatNormalTexture.scale!==void 0){let $=Z.clearcoatNormalTexture.scale;H.clearcoatNormalScale=new uq($,$)}}return Promise.all(Y)}}class g3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_DISPERSION}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let X=this.parser.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=X.extensions[this.name];return H.dispersion=Y.dispersion!==void 0?Y.dispersion:0,Promise.resolve()}}class x3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_IRIDESCENCE}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let W=this.parser,X=W.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=[],Z=X.extensions[this.name];if(Z.iridescenceFactor!==void 0)H.iridescence=Z.iridescenceFactor;if(Z.iridescenceTexture!==void 0)Y.push(W.assignTexture(H,"iridescenceMap",Z.iridescenceTexture));if(Z.iridescenceIor!==void 0)H.iridescenceIOR=Z.iridescenceIor;if(H.iridescenceThicknessRange===void 0)H.iridescenceThicknessRange=[100,400];if(Z.iridescenceThicknessMinimum!==void 0)H.iridescenceThicknessRange[0]=Z.iridescenceThicknessMinimum;if(Z.iridescenceThicknessMaximum!==void 0)H.iridescenceThicknessRange[1]=Z.iridescenceThicknessMaximum;if(Z.iridescenceThicknessTexture!==void 0)Y.push(W.assignTexture(H,"iridescenceThicknessMap",Z.iridescenceThicknessTexture));return Promise.all(Y)}}class l3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_SHEEN}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let W=this.parser,X=W.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=[];H.sheenColor=new jq(0,0,0),H.sheenRoughness=0,H.sheen=1;let Z=X.extensions[this.name];if(Z.sheenColorFactor!==void 0){let $=Z.sheenColorFactor;H.sheenColor.setRGB($[0],$[1],$[2],"srgb-linear")}if(Z.sheenRoughnessFactor!==void 0)H.sheenRoughness=Z.sheenRoughnessFactor;if(Z.sheenColorTexture!==void 0)Y.push(W.assignTexture(H,"sheenColorMap",Z.sheenColorTexture,"srgb"));if(Z.sheenRoughnessTexture!==void 0)Y.push(W.assignTexture(H,"sheenRoughnessMap",Z.sheenRoughnessTexture));return Promise.all(Y)}}class u3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_TRANSMISSION}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let W=this.parser,X=W.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=[],Z=X.extensions[this.name];if(Z.transmissionFactor!==void 0)H.transmission=Z.transmissionFactor;if(Z.transmissionTexture!==void 0)Y.push(W.assignTexture(H,"transmissionMap",Z.transmissionTexture));return Promise.all(Y)}}class f3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_VOLUME}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let W=this.parser,X=W.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=[],Z=X.extensions[this.name];if(H.thickness=Z.thicknessFactor!==void 0?Z.thicknessFactor:0,Z.thicknessTexture!==void 0)Y.push(W.assignTexture(H,"thicknessMap",Z.thicknessTexture));H.attenuationDistance=Z.attenuationDistance||1/0;let $=Z.attenuationColor||[1,1,1];return H.attenuationColor=new jq().setRGB($[0],$[1],$[2],"srgb-linear"),Promise.all(Y)}}class p3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_IOR}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let X=this.parser.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=X.extensions[this.name];return H.ior=Y.ior!==void 0?Y.ior:1.5,Promise.resolve()}}class m3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_SPECULAR}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let W=this.parser,X=W.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=[],Z=X.extensions[this.name];if(H.specularIntensity=Z.specularFactor!==void 0?Z.specularFactor:1,Z.specularTexture!==void 0)Y.push(W.assignTexture(H,"specularIntensityMap",Z.specularTexture));let $=Z.specularColorFactor||[1,1,1];if(H.specularColor=new jq().setRGB($[0],$[1],$[2],"srgb-linear"),Z.specularColorTexture!==void 0)Y.push(W.assignTexture(H,"specularColorMap",Z.specularColorTexture,"srgb"));return Promise.all(Y)}}class c3{constructor(q){this.parser=q,this.name=xq.EXT_MATERIALS_BUMP}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let W=this.parser,X=W.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=[],Z=X.extensions[this.name];if(H.bumpScale=Z.bumpFactor!==void 0?Z.bumpFactor:1,Z.bumpTexture!==void 0)Y.push(W.assignTexture(H,"bumpMap",Z.bumpTexture));return Promise.all(Y)}}class d3{constructor(q){this.parser=q,this.name=xq.KHR_MATERIALS_ANISOTROPY}getMaterialType(q){let W=this.parser.json.materials[q];if(!W.extensions||!W.extensions[this.name])return null;return sH}extendMaterialParams(q,H){let W=this.parser,X=W.json.materials[q];if(!X.extensions||!X.extensions[this.name])return Promise.resolve();let Y=[],Z=X.extensions[this.name];if(Z.anisotropyStrength!==void 0)H.anisotropy=Z.anisotropyStrength;if(Z.anisotropyRotation!==void 0)H.anisotropyRotation=Z.anisotropyRotation;if(Z.anisotropyTexture!==void 0)Y.push(W.assignTexture(H,"anisotropyMap",Z.anisotropyTexture));return Promise.all(Y)}}class n3{constructor(q){this.parser=q,this.name=xq.KHR_TEXTURE_BASISU}loadTexture(q){let H=this.parser,W=H.json,X=W.textures[q];if(!X.extensions||!X.extensions[this.name])return null;let Y=X.extensions[this.name],Z=H.options.ktx2Loader;if(!Z)if(W.extensionsRequired&&W.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return H.loadTextureImage(q,Y.source,Z)}}class o3{constructor(q){this.parser=q,this.name=xq.EXT_TEXTURE_WEBP}loadTexture(q){let H=this.name,W=this.parser,X=W.json,Y=X.textures[q];if(!Y.extensions||!Y.extensions[H])return null;let Z=Y.extensions[H],$=X.images[Z.source],J=W.textureLoader;if($.uri){let Q=W.options.manager.getHandler($.uri);if(Q!==null)J=Q}return W.loadTextureImage(q,Z.source,J)}}class s3{constructor(q){this.parser=q,this.name=xq.EXT_TEXTURE_AVIF}loadTexture(q){let H=this.name,W=this.parser,X=W.json,Y=X.textures[q];if(!Y.extensions||!Y.extensions[H])return null;let Z=Y.extensions[H],$=X.images[Z.source],J=W.textureLoader;if($.uri){let Q=W.options.manager.getHandler($.uri);if(Q!==null)J=Q}return W.loadTextureImage(q,Z.source,J)}}class i3{constructor(q){this.name=xq.EXT_MESHOPT_COMPRESSION,this.parser=q}loadBufferView(q){let H=this.parser.json,W=H.bufferViews[q];if(W.extensions&&W.extensions[this.name]){let X=W.extensions[this.name],Y=this.parser.getDependency("buffer",X.buffer),Z=this.parser.options.meshoptDecoder;if(!Z||!Z.supported)if(H.extensionsRequired&&H.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Y.then(function($){let J=X.byteOffset||0,Q=X.byteLength||0,_=X.count,F=X.byteStride,O=new Uint8Array($,J,Q);if(Z.decodeGltfBufferAsync)return Z.decodeGltfBufferAsync(_,F,O,X.mode,X.filter).then(function(U){return U.buffer});else return Z.ready.then(function(){let U=new ArrayBuffer(_*F);return Z.decodeGltfBuffer(new Uint8Array(U),_,F,O,X.mode,X.filter),U})})}else return null}}class a3{constructor(q){this.name=xq.EXT_MESH_GPU_INSTANCING,this.parser=q}createNodeMesh(q){let H=this.parser.json,W=H.nodes[q];if(!W.extensions||!W.extensions[this.name]||W.mesh===void 0)return null;let X=H.meshes[W.mesh];for(let Q of X.primitives)if(Q.mode!==DH.TRIANGLES&&Q.mode!==DH.TRIANGLE_STRIP&&Q.mode!==DH.TRIANGLE_FAN&&Q.mode!==void 0)return null;let Z=W.extensions[this.name].attributes,$=[],J={};for(let Q in Z)$.push(this.parser.getDependency("accessor",Z[Q]).then((_)=>{return J[Q]=_,J[Q]}));if($.length<1)return null;return $.push(this.parser.createNodeMesh(q)),Promise.all($).then((Q)=>{let _=Q.pop(),F=_.isGroup?_.children:[_],O=Q[0].count,U=[];for(let E of F){let R=new bq,K=new k,B=new kH,G=new k(1,1,1),S=new U0(E.geometry,E.material,O);for(let V=0;V<O;V++){if(J.TRANSLATION)K.fromBufferAttribute(J.TRANSLATION,V);if(J.ROTATION)B.fromBufferAttribute(J.ROTATION,V);if(J.SCALE)G.fromBufferAttribute(J.SCALE,V);S.setMatrixAt(V,R.compose(K,B,G))}for(let V in J)if(V==="_COLOR_0"){let P=J[V];S.instanceColor=new sX(P.array,P.itemSize,P.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE")E.geometry.setAttribute(V,J[V]);ZH.prototype.copy.call(S,E),this.parser.assignFinalMaterial(S),U.push(S)}if(_.isGroup)return _.clear(),_.add(...U),_;return U[0]})}}let t3="glTF",wX=12,r3={JSON:1313821514,BIN:5130562};class e3{constructor(q){this.name=xq.KHR_BINARY_GLTF,this.content=null,this.body=null;let H=new DataView(q,0,wX),W=new TextDecoder;if(this.header={magic:W.decode(new Uint8Array(q.slice(0,4))),version:H.getUint32(4,!0),length:H.getUint32(8,!0)},this.header.magic!==t3)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let X=this.header.length-wX,Y=new DataView(q,wX),Z=0;while(Z<X){let $=Y.getUint32(Z,!0);Z+=4;let J=Y.getUint32(Z,!0);if(Z+=4,J===r3.JSON){let Q=new Uint8Array(q,wX+Z,$);this.content=W.decode(Q)}else if(J===r3.BIN){let Q=wX+Z;this.body=q.slice(Q,Q+$)}Z+=$}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q4{constructor(q,H){if(!H)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xq.KHR_DRACO_MESH_COMPRESSION,this.json=q,this.dracoLoader=H,this.dracoLoader.preload()}decodePrimitive(q,H){let W=this.json,X=this.dracoLoader,Y=q.extensions[this.name].bufferView,Z=q.extensions[this.name].attributes,$={},J={},Q={};for(let _ in Z){let F=VZ[_]||_.toLowerCase();$[F]=Z[_]}for(let _ in q.attributes){let F=VZ[_]||_.toLowerCase();if(Z[_]!==void 0){let O=W.accessors[q.attributes[_]],U=$X[O.componentType];Q[F]=U.name,J[F]=O.normalized===!0}}return H.getDependency("bufferView",Y).then(function(_){return new Promise(function(F,O){X.decodeDracoFile(_,function(U){for(let E in U.attributes){let R=U.attributes[E],K=J[E];if(K!==void 0)R.normalized=K}F(U)},$,Q,"srgb-linear",O)})})}}class H4{constructor(){this.name=xq.KHR_TEXTURE_TRANSFORM}extendTexture(q,H){if((H.texCoord===void 0||H.texCoord===q.channel)&&H.offset===void 0&&H.rotation===void 0&&H.scale===void 0)return q;if(q=q.clone(),H.texCoord!==void 0)q.channel=H.texCoord;if(H.offset!==void 0)q.offset.fromArray(H.offset);if(H.rotation!==void 0)q.rotation=H.rotation;if(H.scale!==void 0)q.repeat.fromArray(H.scale);return q.needsUpdate=!0,q}}class W4{constructor(){this.name=xq.KHR_MESH_QUANTIZATION}}class KZ extends qX{constructor(q,H,W,X){super(q,H,W,X)}copySampleValue_(q){let H=this.resultBuffer,W=this.sampleValues,X=this.valueSize,Y=q*X*3+X;for(let Z=0;Z!==X;Z++)H[Z]=W[Y+Z];return H}interpolate_(q,H,W,X){let Y=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,J=$*2,Q=$*3,_=X-H,F=(W-H)/_,O=F*F,U=O*F,E=q*Q,R=E-Q,K=-2*U+3*O,B=U-O,G=1-K,S=B-O+F;for(let V=0;V!==$;V++){let P=Z[R+V+$],b=Z[R+V+J]*_,T=Z[E+V+$],j=Z[E+V]*_;Y[V]=G*P+S*b+K*T+B*j}return Y}}let U9=new kH;class X4 extends KZ{interpolate_(q,H,W,X){let Y=super.interpolate_(q,H,W,X);return U9.fromArray(Y).normalize().toArray(Y),Y}}let DH={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},$X={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Y4={9728:1003,9729:1006,9984:1004,9985:1007,9986:1005,9987:1008},Z4={33071:1001,33648:1002,10497:1000},zZ={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},VZ={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zW={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},B9={CUBICSPLINE:void 0,LINEAR:2301,STEP:2300},CZ={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E9(q){if(q.DefaultMaterial===void 0)q.DefaultMaterial=new JY({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0});return q.DefaultMaterial}function bW(q,H,W){for(let X in W.extensions)if(q[X]===void 0)H.userData.gltfExtensions=H.userData.gltfExtensions||{},H.userData.gltfExtensions[X]=W.extensions[X]}function QW(q,H){if(H.extras!==void 0)if(typeof H.extras==="object")Object.assign(q.userData,H.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+H.extras)}function G9(q,H,W){let X=!1,Y=!1,Z=!1;for(let _=0,F=H.length;_<F;_++){let O=H[_];if(O.POSITION!==void 0)X=!0;if(O.NORMAL!==void 0)Y=!0;if(O.COLOR_0!==void 0)Z=!0;if(X&&Y&&Z)break}if(!X&&!Y&&!Z)return Promise.resolve(q);let $=[],J=[],Q=[];for(let _=0,F=H.length;_<F;_++){let O=H[_];if(X){let U=O.POSITION!==void 0?W.getDependency("accessor",O.POSITION):q.attributes.position;$.push(U)}if(Y){let U=O.NORMAL!==void 0?W.getDependency("accessor",O.NORMAL):q.attributes.normal;J.push(U)}if(Z){let U=O.COLOR_0!==void 0?W.getDependency("accessor",O.COLOR_0):q.attributes.color;Q.push(U)}}return Promise.all([Promise.all($),Promise.all(J),Promise.all(Q)]).then(function(_){let F=_[0],O=_[1],U=_[2];if(X)q.morphAttributes.position=F;if(Y)q.morphAttributes.normal=O;if(Z)q.morphAttributes.color=U;return q.morphTargetsRelative=!0,q})}function L9(q,H){if(q.updateMorphTargets(),H.weights!==void 0)for(let W=0,X=H.weights.length;W<X;W++)q.morphTargetInfluences[W]=H.weights[W];if(H.extras&&Array.isArray(H.extras.targetNames)){let W=H.extras.targetNames;if(q.morphTargetInfluences.length===W.length){q.morphTargetDictionary={};for(let X=0,Y=W.length;X<Y;X++)q.morphTargetDictionary[W[X]]=X}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R9(q){let H,W=q.extensions&&q.extensions[xq.KHR_DRACO_MESH_COMPRESSION];if(W)H="draco:"+W.bufferView+":"+W.indices+":"+NZ(W.attributes);else H=q.indices+":"+NZ(q.attributes)+":"+q.mode;if(q.targets!==void 0)for(let X=0,Y=q.targets.length;X<Y;X++)H+=":"+NZ(q.targets[X]);return H}function NZ(q){let H="",W=Object.keys(q).sort();for(let X=0,Y=W.length;X<Y;X++)H+=W[X]+":"+q[W[X]]+";";return H}function MZ(q){switch(q){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function K9(q){if(q.search(/\.jpe?g($|\?)/i)>0||q.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(q.search(/\.webp($|\?)/i)>0||q.search(/^data\:image\/webp/)===0)return"image/webp";if(q.search(/\.ktx2($|\?)/i)>0||q.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}let z9=new bq;class $4{constructor(q={},H={}){this.json=q,this.extensions={},this.plugins={},this.options=H,this.cache=new O9,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let W=!1,X=-1,Y=!1,Z=-1;if(typeof navigator!=="undefined"){let $=navigator.userAgent;W=/^((?!chrome|android).)*safari/i.test($)===!0;let J=$.match(/Version\/(\d+)/);X=W&&J?parseInt(J[1],10):-1,Y=$.indexOf("Firefox")>-1,Z=Y?$.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap==="undefined"||W&&X<17||Y&&Z<98)this.textureLoader=new D0(this.options.manager);else this.textureLoader=new d0(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new CX(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(q){this.extensions=q}setPlugins(q){this.plugins=q}parse(q,H){let W=this,X=this.json,Y=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(Z){return Z._markDefs&&Z._markDefs()}),Promise.all(this._invokeAll(function(Z){return Z.beforeRoot&&Z.beforeRoot()})).then(function(){return Promise.all([W.getDependencies("scene"),W.getDependencies("animation"),W.getDependencies("camera")])}).then(function(Z){let $={scene:Z[0][X.scene||0],scenes:Z[0],animations:Z[1],cameras:Z[2],asset:X.asset,parser:W,userData:{}};return bW(Y,$,X),QW($,X),Promise.all(W._invokeAll(function(J){return J.afterRoot&&J.afterRoot($)})).then(function(){for(let J of $.scenes)J.updateMatrixWorld();q($)})}).catch(H)}_markDefs(){let q=this.json.nodes||[],H=this.json.skins||[],W=this.json.meshes||[];for(let X=0,Y=H.length;X<Y;X++){let Z=H[X].joints;for(let $=0,J=Z.length;$<J;$++)q[Z[$]].isBone=!0}for(let X=0,Y=q.length;X<Y;X++){let Z=q[X];if(Z.mesh!==void 0){if(this._addNodeRef(this.meshCache,Z.mesh),Z.skin!==void 0)W[Z.mesh].isSkinnedMesh=!0}if(Z.camera!==void 0)this._addNodeRef(this.cameraCache,Z.camera)}}_addNodeRef(q,H){if(H===void 0)return;if(q.refs[H]===void 0)q.refs[H]=q.uses[H]=0;q.refs[H]++}_getNodeRef(q,H,W){if(q.refs[H]<=1)return W;let X=W.clone(),Y=(Z,$)=>{let J=this.associations.get(Z);if(J!=null)this.associations.set($,J);for(let[Q,_]of Z.children.entries())Y(_,$.children[Q])};return Y(W,X),X.name+="_instance_"+q.uses[H]++,X}_invokeOne(q){let H=Object.values(this.plugins);H.push(this);for(let W=0;W<H.length;W++){let X=q(H[W]);if(X)return X}return null}_invokeAll(q){let H=Object.values(this.plugins);H.unshift(this);let W=[];for(let X=0;X<H.length;X++){let Y=q(H[X]);if(Y)W.push(Y)}return W}getDependency(q,H){let W=q+":"+H,X=this.cache.get(W);if(!X){switch(q){case"scene":X=this.loadScene(H);break;case"node":X=this._invokeOne(function(Y){return Y.loadNode&&Y.loadNode(H)});break;case"mesh":X=this._invokeOne(function(Y){return Y.loadMesh&&Y.loadMesh(H)});break;case"accessor":X=this.loadAccessor(H);break;case"bufferView":X=this._invokeOne(function(Y){return Y.loadBufferView&&Y.loadBufferView(H)});break;case"buffer":X=this.loadBuffer(H);break;case"material":X=this._invokeOne(function(Y){return Y.loadMaterial&&Y.loadMaterial(H)});break;case"texture":X=this._invokeOne(function(Y){return Y.loadTexture&&Y.loadTexture(H)});break;case"skin":X=this.loadSkin(H);break;case"animation":X=this._invokeOne(function(Y){return Y.loadAnimation&&Y.loadAnimation(H)});break;case"camera":X=this.loadCamera(H);break;default:if(X=this._invokeOne(function(Y){return Y!=this&&Y.getDependency&&Y.getDependency(q,H)}),!X)throw new Error("Unknown type: "+q);break}this.cache.add(W,X)}return X}getDependencies(q){let H=this.cache.get(q);if(!H){let W=this,X=this.json[q+(q==="mesh"?"es":"s")]||[];H=Promise.all(X.map(function(Y,Z){return W.getDependency(q,Z)})),this.cache.add(q,H)}return H}loadBuffer(q){let H=this.json.buffers[q],W=this.fileLoader;if(H.type&&H.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+H.type+" buffer type is not supported.");if(H.uri===void 0&&q===0)return Promise.resolve(this.extensions[xq.KHR_BINARY_GLTF].body);let X=this.options;return new Promise(function(Y,Z){W.load(WX.resolveURL(H.uri,X.path),Y,void 0,function(){Z(new Error('THREE.GLTFLoader: Failed to load buffer "'+H.uri+'".'))})})}loadBufferView(q){let H=this.json.bufferViews[q];return this.getDependency("buffer",H.buffer).then(function(W){let X=H.byteLength||0,Y=H.byteOffset||0;return W.slice(Y,Y+X)})}loadAccessor(q){let H=this,W=this.json,X=this.json.accessors[q];if(X.bufferView===void 0&&X.sparse===void 0){let Z=zZ[X.type],$=$X[X.componentType],J=X.normalized===!0,Q=new $(X.count*Z);return Promise.resolve(new EH(Q,Z,J))}let Y=[];if(X.bufferView!==void 0)Y.push(this.getDependency("bufferView",X.bufferView));else Y.push(null);if(X.sparse!==void 0)Y.push(this.getDependency("bufferView",X.sparse.indices.bufferView)),Y.push(this.getDependency("bufferView",X.sparse.values.bufferView));return Promise.all(Y).then(function(Z){let $=Z[0],J=zZ[X.type],Q=$X[X.componentType],_=Q.BYTES_PER_ELEMENT,F=_*J,O=X.byteOffset||0,U=X.bufferView!==void 0?W.bufferViews[X.bufferView].byteStride:void 0,E=X.normalized===!0,R,K;if(U&&U!==F){let B=Math.floor(O/U),G="InterleavedBuffer:"+X.bufferView+":"+X.componentType+":"+B+":"+X.count,S=H.cache.get(G);if(!S)R=new Q($,B*U,X.count*U/_),S=new W0(R,U/_),H.cache.add(G,S);K=new mY(S,J,O%U/_,E)}else{if($===null)R=new Q(X.count*J);else R=new Q($,O,X.count*J);K=new EH(R,J,E)}if(X.sparse!==void 0){let B=zZ.SCALAR,G=$X[X.sparse.indices.componentType],S=X.sparse.indices.byteOffset||0,V=X.sparse.values.byteOffset||0,P=new G(Z[1],S,X.sparse.count*B),b=new Q(Z[2],V,X.sparse.count*J);if($!==null)K=new EH(K.array.slice(),K.itemSize,K.normalized);K.normalized=!1;for(let T=0,j=P.length;T<j;T++){let x=P[T];if(K.setX(x,b[T*J]),J>=2)K.setY(x,b[T*J+1]);if(J>=3)K.setZ(x,b[T*J+2]);if(J>=4)K.setW(x,b[T*J+3]);if(J>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}K.normalized=E}return K})}loadTexture(q){let H=this.json,W=this.options,Y=H.textures[q].source,Z=H.images[Y],$=this.textureLoader;if(Z.uri){let J=W.manager.getHandler(Z.uri);if(J!==null)$=J}return this.loadTextureImage(q,Y,$)}loadTextureImage(q,H,W){let X=this,Y=this.json,Z=Y.textures[q],$=Y.images[H],J=($.uri||$.bufferView)+":"+Z.sampler;if(this.textureCache[J])return this.textureCache[J];let Q=this.loadImageSource(H,W).then(function(_){if(_.flipY=!1,_.name=Z.name||$.name||"",_.name===""&&typeof $.uri==="string"&&$.uri.startsWith("data:image/")===!1)_.name=$.uri;let O=(Y.samplers||{})[Z.sampler]||{};return _.magFilter=Y4[O.magFilter]||1006,_.minFilter=Y4[O.minFilter]||1008,_.wrapS=Z4[O.wrapS]||1000,_.wrapT=Z4[O.wrapT]||1000,_.generateMipmaps=!_.isCompressedTexture&&_.minFilter!==1003&&_.minFilter!==1006,X.associations.set(_,{textures:q}),_}).catch(function(){return null});return this.textureCache[J]=Q,Q}loadImageSource(q,H){let W=this,X=this.json,Y=this.options;if(this.sourceCache[q]!==void 0)return this.sourceCache[q].then((F)=>F.clone());let Z=X.images[q],$=self.URL||self.webkitURL,J=Z.uri||"",Q=!1;if(Z.bufferView!==void 0)J=W.getDependency("bufferView",Z.bufferView).then(function(F){Q=!0;let O=new Blob([F],{type:Z.mimeType});return J=$.createObjectURL(O),J});else if(Z.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+q+" is missing URI and bufferView");let _=Promise.resolve(J).then(function(F){return new Promise(function(O,U){let E=O;if(H.isImageBitmapLoader===!0)E=function(R){let K=new BH(R);K.needsUpdate=!0,O(K)};H.load(WX.resolveURL(F,Y.path),E,void 0,U)})}).then(function(F){if(Q===!0)$.revokeObjectURL(J);return QW(F,Z),F.userData.mimeType=Z.mimeType||K9(Z.uri),F}).catch(function(F){throw console.error("THREE.GLTFLoader: Couldn't load texture",J),F});return this.sourceCache[q]=_,_}assignTexture(q,H,W,X){let Y=this;return this.getDependency("texture",W.index).then(function(Z){if(!Z)return null;if(W.texCoord!==void 0&&W.texCoord>0)Z=Z.clone(),Z.channel=W.texCoord;if(Y.extensions[xq.KHR_TEXTURE_TRANSFORM]){let $=W.extensions!==void 0?W.extensions[xq.KHR_TEXTURE_TRANSFORM]:void 0;if($){let J=Y.associations.get(Z);Z=Y.extensions[xq.KHR_TEXTURE_TRANSFORM].extendTexture(Z,$),Y.associations.set(Z,J)}}if(X!==void 0)Z.colorSpace=X;return q[H]=Z,Z})}assignFinalMaterial(q){let{geometry:H,material:W}=q,X=H.attributes.tangent===void 0,Y=H.attributes.color!==void 0,Z=H.attributes.normal===void 0;if(q.isPoints){let $="PointsMaterial:"+W.uuid,J=this.cache.get($);if(!J)J=new rY,nH.prototype.copy.call(J,W),J.color.copy(W.color),J.map=W.map,J.sizeAttenuation=!1,this.cache.add($,J);W=J}else if(q.isLine){let $="LineBasicMaterial:"+W.uuid,J=this.cache.get($);if(!J)J=new rX,nH.prototype.copy.call(J,W),J.color.copy(W.color),J.map=W.map,this.cache.add($,J);W=J}if(X||Y||Z){let $="ClonedMaterial:"+W.uuid+":";if(X)$+="derivative-tangents:";if(Y)$+="vertex-colors:";if(Z)$+="flat-shading:";let J=this.cache.get($);if(!J){if(J=W.clone(),Y)J.vertexColors=!0;if(Z)J.flatShading=!0;if(X){if(J.normalScale)J.normalScale.y*=-1;if(J.clearcoatNormalScale)J.clearcoatNormalScale.y*=-1}this.cache.add($,J),this.associations.set(J,this.associations.get(W))}W=J}q.material=W}getMaterialType(){return JY}loadMaterial(q){let H=this,W=this.json,X=this.extensions,Y=W.materials[q],Z,$={},J=Y.extensions||{},Q=[];if(J[xq.KHR_MATERIALS_UNLIT]){let F=X[xq.KHR_MATERIALS_UNLIT];Z=F.getMaterialType(),Q.push(F.extendParams($,Y,H))}else{let F=Y.pbrMetallicRoughness||{};if($.color=new jq(1,1,1),$.opacity=1,Array.isArray(F.baseColorFactor)){let O=F.baseColorFactor;$.color.setRGB(O[0],O[1],O[2],"srgb-linear"),$.opacity=O[3]}if(F.baseColorTexture!==void 0)Q.push(H.assignTexture($,"map",F.baseColorTexture,"srgb"));if($.metalness=F.metallicFactor!==void 0?F.metallicFactor:1,$.roughness=F.roughnessFactor!==void 0?F.roughnessFactor:1,F.metallicRoughnessTexture!==void 0)Q.push(H.assignTexture($,"metalnessMap",F.metallicRoughnessTexture)),Q.push(H.assignTexture($,"roughnessMap",F.metallicRoughnessTexture));Z=this._invokeOne(function(O){return O.getMaterialType&&O.getMaterialType(q)}),Q.push(Promise.all(this._invokeAll(function(O){return O.extendMaterialParams&&O.extendMaterialParams(q,$)})))}if(Y.doubleSided===!0)$.side=2;let _=Y.alphaMode||CZ.OPAQUE;if(_===CZ.BLEND)$.transparent=!0,$.depthWrite=!1;else if($.transparent=!1,_===CZ.MASK)$.alphaTest=Y.alphaCutoff!==void 0?Y.alphaCutoff:0.5;if(Y.normalTexture!==void 0&&Z!==GW){if(Q.push(H.assignTexture($,"normalMap",Y.normalTexture)),$.normalScale=new uq(1,1),Y.normalTexture.scale!==void 0){let F=Y.normalTexture.scale;$.normalScale.set(F,F)}}if(Y.occlusionTexture!==void 0&&Z!==GW){if(Q.push(H.assignTexture($,"aoMap",Y.occlusionTexture)),Y.occlusionTexture.strength!==void 0)$.aoMapIntensity=Y.occlusionTexture.strength}if(Y.emissiveFactor!==void 0&&Z!==GW){let F=Y.emissiveFactor;$.emissive=new jq().setRGB(F[0],F[1],F[2],"srgb-linear")}if(Y.emissiveTexture!==void 0&&Z!==GW)Q.push(H.assignTexture($,"emissiveMap",Y.emissiveTexture,"srgb"));return Promise.all(Q).then(function(){let F=new Z($);if(Y.name)F.name=Y.name;if(QW(F,Y),H.associations.set(F,{materials:q}),Y.extensions)bW(X,F,Y);return F})}createUniqueName(q){let H=aq.sanitizeNodeName(q||"");if(H in this.nodeNamesUsed)return H+"_"+ ++this.nodeNamesUsed[H];else return this.nodeNamesUsed[H]=0,H}loadGeometries(q){let H=this,W=this.extensions,X=this.primitiveCache;function Y($){return W[xq.KHR_DRACO_MESH_COMPRESSION].decodePrimitive($,H).then(function(J){return J4(J,$,H)})}let Z=[];for(let $=0,J=q.length;$<J;$++){let Q=q[$],_=R9(Q),F=X[_];if(F)Z.push(F.promise);else{let O;if(Q.extensions&&Q.extensions[xq.KHR_DRACO_MESH_COMPRESSION])O=Y(Q);else O=J4(new hH,Q,H);X[_]={primitive:Q,promise:O},Z.push(O)}}return Promise.all(Z)}loadMesh(q){let H=this,W=this.json,X=this.extensions,Y=W.meshes[q],Z=Y.primitives,$=[];for(let J=0,Q=Z.length;J<Q;J++){let _=Z[J].material===void 0?E9(this.cache):this.getDependency("material",Z[J].material);$.push(_)}return $.push(H.loadGeometries(Z)),Promise.all($).then(function(J){let Q=J.slice(0,J.length-1),_=J[J.length-1],F=[];for(let U=0,E=_.length;U<E;U++){let R=_[U],K=Z[U],B,G=Q[U];if(K.mode===DH.TRIANGLES||K.mode===DH.TRIANGLE_STRIP||K.mode===DH.TRIANGLE_FAN||K.mode===void 0){if(B=Y.isSkinnedMesh===!0?new Q0(R,G):new SH(R,G),B.isSkinnedMesh===!0)B.normalizeSkinWeights();if(K.mode===DH.TRIANGLE_STRIP)B.geometry=v3(B.geometry,1);else if(K.mode===DH.TRIANGLE_FAN)B.geometry=v3(B.geometry,2)}else if(K.mode===DH.LINES)B=new tY(R,G);else if(K.mode===DH.LINE_STRIP)B=new WY(R,G);else if(K.mode===DH.LINE_LOOP)B=new R0(R,G);else if(K.mode===DH.POINTS)B=new z0(R,G);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+K.mode);if(Object.keys(B.geometry.morphAttributes).length>0)L9(B,Y);if(B.name=H.createUniqueName(Y.name||"mesh_"+q),QW(B,Y),K.extensions)bW(X,B,K);H.assignFinalMaterial(B),F.push(B)}for(let U=0,E=F.length;U<E;U++)H.associations.set(F[U],{meshes:q,primitives:U});if(F.length===1){if(Y.extensions)bW(X,F[0],Y);return F[0]}let O=new ZW;if(Y.extensions)bW(X,O,Y);H.associations.set(O,{meshes:q});for(let U=0,E=F.length;U<E;U++)O.add(F[U]);return O})}loadCamera(q){let H,W=this.json.cameras[q],X=W[W.type];if(!X){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(W.type==="perspective")H=new CH(FX.radToDeg(X.yfov),X.aspectRatio||1,X.znear||1,X.zfar||2000000);else if(W.type==="orthographic")H=new SX(-X.xmag,X.xmag,X.ymag,-X.ymag,X.znear,X.zfar);if(W.name)H.name=this.createUniqueName(W.name);return QW(H,W),Promise.resolve(H)}loadSkin(q){let H=this.json.skins[q],W=[];for(let X=0,Y=H.joints.length;X<Y;X++)W.push(this._loadNodeShallow(H.joints[X]));if(H.inverseBindMatrices!==void 0)W.push(this.getDependency("accessor",H.inverseBindMatrices));else W.push(null);return Promise.all(W).then(function(X){let Y=X.pop(),Z=X,$=[],J=[];for(let Q=0,_=Z.length;Q<_;Q++){let F=Z[Q];if(F){$.push(F);let O=new bq;if(Y!==null)O.fromArray(Y.array,Q*16);J.push(O)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',H.joints[Q])}return new sY($,J)})}loadAnimation(q){let H=this.json,W=this,X=H.animations[q],Y=X.name?X.name:"animation_"+q,Z=[],$=[],J=[],Q=[],_=[];for(let F=0,O=X.channels.length;F<O;F++){let U=X.channels[F],E=X.samplers[U.sampler],R=U.target,K=R.node,B=X.parameters!==void 0?X.parameters[E.input]:E.input,G=X.parameters!==void 0?X.parameters[E.output]:E.output;if(R.node===void 0)continue;Z.push(this.getDependency("node",K)),$.push(this.getDependency("accessor",B)),J.push(this.getDependency("accessor",G)),Q.push(E),_.push(R)}return Promise.all([Promise.all(Z),Promise.all($),Promise.all(J),Promise.all(Q),Promise.all(_)]).then(function(F){let O=F[0],U=F[1],E=F[2],R=F[3],K=F[4],B=[];for(let G=0,S=O.length;G<S;G++){let V=O[G],P=U[G],b=E[G],T=R[G],j=K[G];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let x=W._createAnimationTracks(V,P,b,T,j);if(x)for(let N=0;N<x.length;N++)B.push(x[N])}return new v0(Y,void 0,B)})}createNodeMesh(q){let H=this.json,W=this,X=H.nodes[q];if(X.mesh===void 0)return null;return W.getDependency("mesh",X.mesh).then(function(Y){let Z=W._getNodeRef(W.meshCache,X.mesh,Y);if(X.weights!==void 0)Z.traverse(function($){if(!$.isMesh)return;for(let J=0,Q=X.weights.length;J<Q;J++)$.morphTargetInfluences[J]=X.weights[J]});return Z})}loadNode(q){let H=this.json,W=this,X=H.nodes[q],Y=W._loadNodeShallow(q),Z=[],$=X.children||[];for(let Q=0,_=$.length;Q<_;Q++)Z.push(W.getDependency("node",$[Q]));let J=X.skin===void 0?Promise.resolve(null):W.getDependency("skin",X.skin);return Promise.all([Y,Promise.all(Z),J]).then(function(Q){let _=Q[0],F=Q[1],O=Q[2];if(O!==null)_.traverse(function(U){if(!U.isSkinnedMesh)return;U.bind(O,z9)});for(let U=0,E=F.length;U<E;U++)_.add(F[U]);return _})}_loadNodeShallow(q){let H=this.json,W=this.extensions,X=this;if(this.nodeCache[q]!==void 0)return this.nodeCache[q];let Y=H.nodes[q],Z=Y.name?X.createUniqueName(Y.name):"",$=[],J=X._invokeOne(function(Q){return Q.createNodeMesh&&Q.createNodeMesh(q)});if(J)$.push(J);if(Y.camera!==void 0)$.push(X.getDependency("camera",Y.camera).then(function(Q){return X._getNodeRef(X.cameraCache,Y.camera,Q)}));return X._invokeAll(function(Q){return Q.createNodeAttachment&&Q.createNodeAttachment(q)}).forEach(function(Q){$.push(Q)}),this.nodeCache[q]=Promise.all($).then(function(Q){let _;if(Y.isBone===!0)_=new nY;else if(Q.length>1)_=new ZW;else if(Q.length===1)_=Q[0];else _=new ZH;if(_!==Q[0])for(let F=0,O=Q.length;F<O;F++)_.add(Q[F]);if(Y.name)_.userData.name=Y.name,_.name=Z;if(QW(_,Y),Y.extensions)bW(W,_,Y);if(Y.matrix!==void 0){let F=new bq;F.fromArray(Y.matrix),_.applyMatrix4(F)}else{if(Y.translation!==void 0)_.position.fromArray(Y.translation);if(Y.rotation!==void 0)_.quaternion.fromArray(Y.rotation);if(Y.scale!==void 0)_.scale.fromArray(Y.scale)}if(!X.associations.has(_))X.associations.set(_,{});else if(Y.mesh!==void 0&&X.meshCache.refs[Y.mesh]>1){let F=X.associations.get(_);X.associations.set(_,{...F})}return X.associations.get(_).nodes=q,_}),this.nodeCache[q]}loadScene(q){let H=this.extensions,W=this.json.scenes[q],X=this,Y=new ZW;if(W.name)Y.name=X.createUniqueName(W.name);if(QW(Y,W),W.extensions)bW(H,Y,W);let Z=W.nodes||[],$=[];for(let J=0,Q=Z.length;J<Q;J++)$.push(X.getDependency("node",Z[J]));return Promise.all($).then(function(J){for(let _=0,F=J.length;_<F;_++)Y.add(J[_]);let Q=(_)=>{let F=new Map;for(let[O,U]of X.associations)if(O instanceof nH||O instanceof BH)F.set(O,U);return _.traverse((O)=>{let U=X.associations.get(O);if(U!=null)F.set(O,U)}),F};return X.associations=Q(Y),Y})}_createAnimationTracks(q,H,W,X,Y){let Z=[],$=q.name?q.name:q.uuid,J=[];if(zW[Y.path]===zW.weights)q.traverse(function(O){if(O.morphTargetInfluences)J.push(O.name?O.name:O.uuid)});else J.push($);let Q;switch(zW[Y.path]){case zW.weights:Q=TW;break;case zW.rotation:Q=wW;break;case zW.translation:case zW.scale:Q=jW;break;default:switch(W.itemSize){case 1:Q=TW;break;case 2:case 3:default:Q=jW;break}break}let _=X.interpolation!==void 0?B9[X.interpolation]:2301,F=this._getArrayFromAccessor(W);for(let O=0,U=J.length;O<U;O++){let E=new Q(J[O]+"."+zW[Y.path],H.array,F,_);if(X.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(E);Z.push(E)}return Z}_getArrayFromAccessor(q){let H=q.array;if(q.normalized){let W=MZ(H.constructor),X=new Float32Array(H.length);for(let Y=0,Z=H.length;Y<Z;Y++)X[Y]=H[Y]*W;H=X}return H}_createCubicSplineTrackInterpolant(q){q.createInterpolant=function H(W){return new(this instanceof wW?X4:KZ)(this.times,this.values,this.getValueSize()/3,W)},q.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function V9(q,H,W){let X=H.attributes,Y=new uH;if(X.POSITION!==void 0){let J=W.json.accessors[X.POSITION],Q=J.min,_=J.max;if(Q!==void 0&&_!==void 0){if(Y.set(new k(Q[0],Q[1],Q[2]),new k(_[0],_[1],_[2])),J.normalized){let F=MZ($X[J.componentType]);Y.min.multiplyScalar(F),Y.max.multiplyScalar(F)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let Z=H.targets;if(Z!==void 0){let J=new k,Q=new k;for(let _=0,F=Z.length;_<F;_++){let O=Z[_];if(O.POSITION!==void 0){let U=W.json.accessors[O.POSITION],E=U.min,R=U.max;if(E!==void 0&&R!==void 0){if(Q.setX(Math.max(Math.abs(E[0]),Math.abs(R[0]))),Q.setY(Math.max(Math.abs(E[1]),Math.abs(R[1]))),Q.setZ(Math.max(Math.abs(E[2]),Math.abs(R[2]))),U.normalized){let K=MZ($X[U.componentType]);Q.multiplyScalar(K)}J.max(Q)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Y.expandByVector(J)}q.boundingBox=Y;let $=new pH;Y.getCenter($.center),$.radius=Y.min.distanceTo(Y.max)/2,q.boundingSphere=$}function J4(q,H,W){let X=H.attributes,Y=[];function Z($,J){return W.getDependency("accessor",$).then(function(Q){q.setAttribute(J,Q)})}for(let $ in X){let J=VZ[$]||$.toLowerCase();if(J in q.attributes)continue;Y.push(Z(X[$],J))}if(H.indices!==void 0&&!q.index){let $=W.getDependency("accessor",H.indices).then(function(J){q.setIndex(J)});Y.push($)}if(fq.workingColorSpace!=="srgb-linear"&&"COLOR_0"in X)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${fq.workingColorSpace}" not supported.`);return QW(q,H),V9(q,H,W),Promise.all(Y).then(function(){return H.targets!==void 0?G9(q,H.targets,W):q})}let SZ=new WeakMap;class Q4 extends KW{constructor(q){super(q);this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(q){return this.decoderPath=q,this}setDecoderConfig(q){return this.decoderConfig=q,this}setWorkerLimit(q){return this.workerLimit=q,this}load(q,H,W,X){let Y=new CX(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(q,(Z)=>{this.parse(Z,H,X)},W,X)}parse(q,H,W=()=>{}){this.decodeDracoFile(q,H,null,null,"srgb",W).catch(W)}decodeDracoFile(q,H,W,X,Y="srgb-linear",Z=()=>{}){let $={attributeIDs:W||this.defaultAttributeIDs,attributeTypes:X||this.defaultAttributeTypes,useUniqueIDs:!!W,vertexColorSpace:Y};return this.decodeGeometry(q,$).then(H).catch(Z)}decodeGeometry(q,H){let W=JSON.stringify(H);if(SZ.has(q)){let J=SZ.get(q);if(J.key===W)return J.promise;else if(q.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let X,Y=this.workerNextTaskID++,Z=q.byteLength,$=this._getWorker(Y,Z).then((J)=>{return X=J,new Promise((Q,_)=>{X._callbacks[Y]={resolve:Q,reject:_},X.postMessage({type:"decode",id:Y,taskConfig:H,buffer:q},[q])})}).then((J)=>this._createGeometry(J.geometry));return $.catch(()=>!0).then(()=>{if(X&&Y)this._releaseTask(X,Y)}),SZ.set(q,{key:W,promise:$}),$}_createGeometry(q){let H=new hH;if(q.index)H.setIndex(new EH(q.index.array,1));for(let W=0;W<q.attributes.length;W++){let X=q.attributes[W],Y=X.name,Z=X.array,$=X.itemSize,J=new EH(Z,$);if(Y==="color")this._assignVertexColorSpace(J,X.vertexColorSpace),J.normalized=Z instanceof Float32Array===!1;H.setAttribute(Y,J)}return H}_assignVertexColorSpace(q,H){if(H!=="srgb")return;let W=new jq;for(let X=0,Y=q.count;X<Y;X++)W.fromBufferAttribute(q,X),fq.colorSpaceToWorking(W,"srgb"),q.setXYZ(X,W.r,W.g,W.b)}_loadLibrary(q,H){let W=new CX(this.manager);return W.setPath(this.decoderPath),W.setResponseType(H),W.setWithCredentials(this.withCredentials),new Promise((X,Y)=>{W.load(q,X,void 0,Y)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let q=typeof WebAssembly!=="object"||this.decoderConfig.type==="js",H=[];if(q)H.push(this._loadLibrary("draco_decoder.js","text"));else H.push(this._loadLibrary("draco_wasm_wrapper.js","text")),H.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"));return this.decoderPending=Promise.all(H).then((W)=>{let X=W[0];if(!q)this.decoderConfig.wasmBinary=W[1];let Y=C9.toString(),Z=["/* draco decoder */",X,"","/* worker */",Y.substring(Y.indexOf("{")+1,Y.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([Z]))}),this.decoderPending}_getWorker(q,H){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let X=new Worker(this.workerSourceURL);X._callbacks={},X._taskCosts={},X._taskLoad=0,X.postMessage({type:"init",decoderConfig:this.decoderConfig}),X.onmessage=function(Y){let Z=Y.data;switch(Z.type){case"decode":X._callbacks[Z.id].resolve(Z);break;case"error":X._callbacks[Z.id].reject(Z);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+Z.type+'"')}},this.workerPool.push(X)}else this.workerPool.sort(function(X,Y){return X._taskLoad>Y._taskLoad?-1:1});let W=this.workerPool[this.workerPool.length-1];return W._taskCosts[q]=H,W._taskLoad+=H,W})}_releaseTask(q,H){q._taskLoad-=q._taskCosts[H],delete q._callbacks[H],delete q._taskCosts[H]}debug(){console.log("Task load: ",this.workerPool.map((q)=>q._taskLoad))}dispose(){for(let q=0;q<this.workerPool.length;++q)this.workerPool[q].terminate();if(this.workerPool.length=0,this.workerSourceURL!=="")URL.revokeObjectURL(this.workerSourceURL);return this}}function C9(){let q,H;onmessage=function($){let J=$.data;switch(J.type){case"init":q=J.decoderConfig,H=new Promise(function(F){q.onModuleLoaded=function(O){F({draco:O})},DracoDecoderModule(q)});break;case"decode":let{buffer:Q,taskConfig:_}=J;H.then((F)=>{let O=F.draco,U=new O.Decoder;try{let E=W(O,U,new Int8Array(Q),_),R=E.attributes.map((K)=>K.array.buffer);if(E.index)R.push(E.index.array.buffer);self.postMessage({type:"decode",id:J.id,geometry:E},R)}catch(E){console.error(E),self.postMessage({type:"error",id:J.id,error:E.message})}finally{O.destroy(U)}});break}};function W($,J,Q,_){let{attributeIDs:F,attributeTypes:O}=_,U,E,R=J.GetEncodedGeometryType(Q);if(R===$.TRIANGULAR_MESH)U=new $.Mesh,E=J.DecodeArrayToMesh(Q,Q.byteLength,U);else if(R===$.POINT_CLOUD)U=new $.PointCloud,E=J.DecodeArrayToPointCloud(Q,Q.byteLength,U);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!E.ok()||U.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+E.error_msg());let K={index:null,attributes:[]};for(let B in F){let G=self[O[B]],S,V;if(_.useUniqueIDs)V=F[B],S=J.GetAttributeByUniqueId(U,V);else{if(V=J.GetAttributeId(U,$[F[B]]),V===-1)continue;S=J.GetAttribute(U,V)}let P=Y($,J,U,B,G,S);if(B==="color")P.vertexColorSpace=_.vertexColorSpace;K.attributes.push(P)}if(R===$.TRIANGULAR_MESH)K.index=X($,J,U);return $.destroy(U),K}function X($,J,Q){let F=Q.num_faces()*3,O=F*4,U=$._malloc(O);J.GetTrianglesUInt32Array(Q,O,U);let E=new Uint32Array($.HEAPF32.buffer,U,F).slice();return $._free(U),{array:E,itemSize:1}}function Y($,J,Q,_,F,O){let U=O.num_components(),R=Q.num_points()*U,K=R*F.BYTES_PER_ELEMENT,B=Z($,F),G=$._malloc(K);J.GetAttributeDataArrayForAllPoints(Q,O,B,K,G);let S=new F($.HEAPF32.buffer,G,R).slice();return $._free(G),{name:_,array:S,itemSize:U}}function Z($,J){switch(J){case Float32Array:return $.DT_FLOAT32;case Int8Array:return $.DT_INT8;case Int16Array:return $.DT_INT16;case Int32Array:return $.DT_INT32;case Uint8Array:return $.DT_UINT8;case Uint16Array:return $.DT_UINT16;case Uint32Array:return $.DT_UINT32}}}class PZ extends HTMLElement{container;hud;scene;camera;renderer;model;pivotGroup;animationId;isDragging=!1;prevX=0;prevY=0;rotation;targetRotation;scaleFactor;targetScale;position;targetPosition;_wireframeOverlays;wireframeColor;wireframe=!1;disableZoom=!1;disablePan=!1;disableRotate=!1;constructor(){super();this.attachShadow({mode:"open"}),this.container=document.createElement("div"),this.container.style.position="relative",this.shadowRoot.appendChild(this.container),this.hud=document.createElement("div"),this.hud.style.position="absolute",this.hud.style.top="5px",this.hud.style.left="5px",this.hud.style.padding="4px 8px",this.hud.style.background="rgba(0,0,0,0.6)",this.hud.style.color="white",this.hud.style.font="12px monospace",this.hud.style.borderRadius="4px",this.container.appendChild(this.hud),this.rotation=new kH,this.targetRotation=new kH,this.scaleFactor=1,this.targetScale=1,this.position=new k(0,0,0),this.targetPosition=new k(0,0,0),this._wireframeOverlays=new Map,this.wireframeColor=new jq(16777215)}static get observedAttributes(){return["scale","pos","rot","disable-zoom","disable-pan","disable-rotate","wireframe","wireframe-color"]}parseAttributes(){this.scaleFactor=parseFloat(this.getAttribute("scale")??"1")||1,this.targetScale=this.scaleFactor;let q=this.getAttribute("pos");if(q){let[X,Y,Z]=q.split(",").map(Number);this.position.set(X||0,Y||0,Z||0),this.targetPosition.copy(this.position)}else this.position.set(0,0,0),this.targetPosition.set(0,0,0);let H=this.getAttribute("rot");if(H){let[X,Y,Z]=H.split(",").map(Number);this.rotation.setFromEuler(new vH(FX.degToRad(X||0),FX.degToRad(Y||0),FX.degToRad(Z||0),"XYZ")),this.targetRotation.copy(this.rotation)}else this.rotation.identity(),this.targetRotation.identity();this.disableZoom=this.hasAttribute("disable-zoom"),this.disablePan=this.hasAttribute("disable-pan"),this.disableRotate=this.hasAttribute("disable-rotate"),this.wireframe=this.hasAttribute("wireframe");let W=this.getAttribute("wireframe-color");if(W)try{this.wireframeColor.set(W)}catch{}}attributeChangedCallback(q,H,W){if((q==="wireframe"||q==="wireframe-color")&&this.pivotGroup){if(this.wireframe=this.hasAttribute("wireframe"),q==="wireframe-color"&&W)try{this.wireframeColor.set(W||16777215)}catch{}this.updateWireframe()}}updateWireframe(){if(!this.pivotGroup)return;let q=this.wireframeColor;this.pivotGroup.traverse((H)=>{let W=H;if(!W.isMesh)return;let X=this._wireframeOverlays.get(W);if(this.wireframe)if(!X){let Y=new C0(W.geometry),Z=new rX({color:q.getHex(),depthTest:!1}),$=new tY(Y,Z);$.renderOrder=(W.renderOrder||0)+1,$.frustumCulled=!1,W.add($),this._wireframeOverlays.set(W,{wire:$,geo:Y,mat:Z})}else X.mat.color.copy(q),X.wire.visible=!0;else if(X){if(X.wire.parent)X.wire.parent.remove(X.wire);X.geo.dispose(),X.mat.dispose(),this._wireframeOverlays.delete(W)}})}_disposeAllWireframes(){this._wireframeOverlays.forEach((q)=>{if(q.wire.parent)q.wire.parent.remove(q.wire);q.geo.dispose(),q.mat.dispose()}),this._wireframeOverlays.clear()}connectedCallback(){this.parseAttributes(),this.initScene(),this.loadModel(),this.addInteractions(),this._animate()}disconnectedCallback(){if(this.animationId)cancelAnimationFrame(this.animationId);this._disposeAllWireframes(),this.renderer.dispose()}initScene(){let q=this.clientWidth||600,H=this.clientHeight||400;this.scene=new H0,this.scene.background=new jq(1118481);let W=q/H,X=2;this.camera=new SX(-W*X,W*X,X,-X,0.1,100),this.camera.position.set(0,0,10),this.renderer=new k3({antialias:!0}),this.renderer.setSize(q,H),this.renderer.setClearColor(1118481,1),this.container.appendChild(this.renderer.domElement),this.scene.add(new c0(16777215,0.8));let Y=new YZ(16777215,0.6);Y.position.set(5,10,7.5),this.scene.add(Y)}loadModel(){let q=this.getAttribute("src");if(!q)return;let H=new I3,W=new Q4;W.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),H.setDRACOLoader(W),H.load(q,(X)=>{this.model=X.scene;let Z=new uH().setFromObject(this.model).getCenter(new k);this.model.position.sub(Z),this.pivotGroup=new ZW,this.pivotGroup.add(this.model),this.scene.add(this.pivotGroup),this.pivotGroup.setRotationFromQuaternion(this.rotation),this.pivotGroup.scale.setScalar(this.scaleFactor),this.pivotGroup.position.copy(this.position),this.updateWireframe()},void 0,(X)=>{console.error("Error loading GLB model:",X)})}addInteractions(){let q=this.renderer.domElement;q.addEventListener("mousedown",(H)=>{this.isDragging=!0,this.prevX=H.clientX,this.prevY=H.clientY,q.style.cursor="grabbing"}),window.addEventListener("mouseup",()=>{this.isDragging=!1,q.style.cursor="grab"}),q.addEventListener("mouseenter",()=>{q.style.cursor="grab"}),q.addEventListener("mouseleave",()=>{q.style.cursor="default"}),window.addEventListener("mousemove",(H)=>{if(!this.isDragging||!this.pivotGroup)return;let W=H.clientX-this.prevX,X=H.clientY-this.prevY;if(this.prevX=H.clientX,this.prevY=H.clientY,!this.disablePan&&H.shiftKey)this.targetPosition.x+=W*0.003,this.targetPosition.y-=X*0.003;else if(!this.disableRotate){let Z=new kH().setFromEuler(new vH(X*0.008,W*0.008,0,"XYZ"));this.targetRotation.multiplyQuaternions(Z,this.targetRotation)}}),q.addEventListener("wheel",(H)=>{if(this.disableZoom)return;H.preventDefault();let W=0.1,X=H.deltaY>0?-W:W;this.targetScale=Math.max(0.1,Math.min(5,this.targetScale*(1+X)))})}_animate(){if(this.animationId=requestAnimationFrame(()=>this._animate()),this.pivotGroup)this.rotation.slerp(this.targetRotation,0.1),this.pivotGroup.setRotationFromQuaternion(this.rotation),this.scaleFactor=FX.lerp(this.scaleFactor,this.targetScale,0.1),this.pivotGroup.scale.setScalar(this.scaleFactor),this.position.lerp(this.targetPosition,0.1),this.pivotGroup.position.copy(this.position);this.renderer.render(this.scene,this.camera)}resetView(){if(this.parseAttributes(),this.pivotGroup)this.pivotGroup.setRotationFromQuaternion(this.rotation),this.pivotGroup.scale.setScalar(this.scaleFactor),this.pivotGroup.position.copy(this.position)}}return customElements.define("glb-model-viewer",PZ),AZ.GlbModelViewer=PZ,AZ})({});
