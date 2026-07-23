var hZ="179";var fZ=0,MQ=1,xZ=2;var kQ=1,bZ=2,Y8=3,v8=0,xJ=1,sJ=2,y8=0,W6=1,DQ=2,LQ=3,VQ=4,gZ=5,P9=100,pZ=101,lZ=102,dZ=103,mZ=104,uZ=200,cZ=201,nZ=202,sZ=203,iZ=204,oZ=205,aZ=206,rZ=207,tZ=208,eZ=209,JW=210,QW=211,$W=212,ZW=213,WW=214,a6=0,r6=1,t6=2,H6=3,e6=4,J7=5,Q7=6,$7=7,HW=0,YW=1,XW=2,V8=0,KW=1,UW=2,GW=3,EW=4,qW=5,NW=6,OW=7;var T9=301,Q9=302,Z7=303,W7=304,Y6=306,A9=1000,H7=1001,Y7=1002,z8=1003,X7=1004;var $9=1005;var Q8=1006,S9=1007;var B8=1008;var h8=1009,FW=1010,RW=1011,X6=1012,zQ=1013,j9=1014,f8=1015,K6=1016,BQ=1017,_Q=1018,v9=1020,MW=35902,kW=1021,DW=1022,X8=1023,K7=1026,U6=1027,LW=1028,CQ=1029,VW=1030,wQ=1031;var IQ=1033,U7=33776,G7=33777,E7=33778,q7=33779,PQ=35840,TQ=35841,AQ=35842,SQ=35843,jQ=36196,vQ=37492,yQ=37496,hQ=37808,fQ=37809,xQ=37810,bQ=37811,gQ=37812,pQ=37813,lQ=37814,dQ=37815,mQ=37816,uQ=37817,cQ=37818,nQ=37819,sQ=37820,iQ=37821,N7=36492,oQ=36494,aQ=36495,zW=36283,rQ=36284,tQ=36285,eQ=36286;var J$=2300,O7=2301;var Q$=0,G6=1,y9=2;var BW=3201;var _W=0,CW=1,Z9="",iJ="srgb",LJ="srgb-linear",$$="linear",$J="srgb";var wW=512,IW=513,PW=514,Z$=515,TW=516,AW=517,SW=518,jW=519;var W$="300 es",H$=2000;class x8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,H=Z.length;W<H;W++)Z[W].call(this,J);J.target=null}}}var VJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],t$=1234567,$6=Math.PI/180,t8=180/Math.PI;function J8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(VJ[J&255]+VJ[J>>8&255]+VJ[J>>16&255]+VJ[J>>24&255]+"-"+VJ[Q&255]+VJ[Q>>8&255]+"-"+VJ[Q>>16&15|64]+VJ[Q>>24&255]+"-"+VJ[$&63|128]+VJ[$>>8&255]+"-"+VJ[$>>16&255]+VJ[$>>24&255]+VJ[Z&255]+VJ[Z>>8&255]+VJ[Z>>16&255]+VJ[Z>>24&255]).toLowerCase()}function b0(J,Q,$){return Math.max(Q,Math.min($,J))}function Y$(J,Q){return(J%Q+Q)%Q}function XY(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function KY(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function Z6(J,Q,$){return(1-$)*J+$*Q}function UY(J,Q,$,Z){return Z6(J,Q,1-Math.exp(-$*Z))}function GY(J,Q=1){return Q-Math.abs(Y$(J,Q*2)-Q)}function EY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function qY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function NY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function OY(J,Q){return J+Math.random()*(Q-J)}function FY(J){return J*(0.5-Math.random())}function RY(J){if(J!==void 0)t$=J;let Q=t$+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function MY(J){return J*$6}function kY(J){return J*t8}function DY(J){return(J&J-1)===0&&J!==0}function LY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function VY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function zY(J,Q,$,Z,W){let{cos:H,sin:Y}=Math,X=H($/2),K=Y($/2),U=H((Q+Z)/2),G=Y((Q+Z)/2),E=H((Q-Z)/2),q=Y((Q-Z)/2),O=H((Z-Q)/2),M=Y((Z-Q)/2);switch(W){case"XYX":J.set(X*G,K*E,K*q,X*U);break;case"YZY":J.set(K*q,X*G,K*E,X*U);break;case"ZXZ":J.set(K*E,K*q,X*G,X*U);break;case"XZX":J.set(X*G,K*M,K*O,X*U);break;case"YXY":J.set(K*O,X*G,K*M,X*U);break;case"ZYZ":J.set(K*M,K*O,X*G,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function eJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw new Error("Invalid component type.")}}function a0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw new Error("Invalid component type.")}}var b8={DEG2RAD:$6,RAD2DEG:t8,generateUUID:J8,clamp:b0,euclideanModulo:Y$,mapLinear:XY,inverseLerp:KY,lerp:Z6,damp:UY,pingpong:GY,smoothstep:EY,smootherstep:qY,randInt:NY,randFloat:OY,randFloatSpread:FY,seededRandom:RY,degToRad:MY,radToDeg:kY,isPowerOfTwo:DY,ceilPowerOfTwo:LY,floorPowerOfTwo:VY,setQuaternionFromProperEuler:zY,normalize:a0,denormalize:eJ};class g0{constructor(J=0,Q=0){g0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=b0(this.x,J.x,Q.x),this.y=b0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=b0(this.x,J,Q),this.y=b0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(b0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(b0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*$-H*Z+J.x,this.y=W*Z+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class PJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,H,Y){let X=$[Z+0],K=$[Z+1],U=$[Z+2],G=$[Z+3],E=W[H+0],q=W[H+1],O=W[H+2],M=W[H+3];if(Y===0){J[Q+0]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G;return}if(Y===1){J[Q+0]=E,J[Q+1]=q,J[Q+2]=O,J[Q+3]=M;return}if(G!==M||X!==E||K!==q||U!==O){let k=1-Y,N=X*E+K*q+U*O+G*M,F=N>=0?1:-1,_=1-N*N;if(_>Number.EPSILON){let C=Math.sqrt(_),y=Math.atan2(C,N*F);k=Math.sin(k*y)/C,Y=Math.sin(Y*y)/C}let L=Y*F;if(X=X*k+E*L,K=K*k+q*L,U=U*k+O*L,G=G*k+M*L,k===1-Y){let C=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=C,K*=C,U*=C,G*=C}}J[Q]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,H){let Y=$[Z],X=$[Z+1],K=$[Z+2],U=$[Z+3],G=W[H],E=W[H+1],q=W[H+2],O=W[H+3];return J[Q]=Y*O+U*G+X*q-K*E,J[Q+1]=X*O+U*E+K*G-Y*q,J[Q+2]=K*O+U*q+Y*E-X*G,J[Q+3]=U*O-Y*G-X*E-K*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:H}=J,Y=Math.cos,X=Math.sin,K=Y($/2),U=Y(Z/2),G=Y(W/2),E=X($/2),q=X(Z/2),O=X(W/2);switch(H){case"XYZ":this._x=E*U*G+K*q*O,this._y=K*q*G-E*U*O,this._z=K*U*O+E*q*G,this._w=K*U*G-E*q*O;break;case"YXZ":this._x=E*U*G+K*q*O,this._y=K*q*G-E*U*O,this._z=K*U*O-E*q*G,this._w=K*U*G+E*q*O;break;case"ZXY":this._x=E*U*G-K*q*O,this._y=K*q*G+E*U*O,this._z=K*U*O+E*q*G,this._w=K*U*G-E*q*O;break;case"ZYX":this._x=E*U*G-K*q*O,this._y=K*q*G+E*U*O,this._z=K*U*O-E*q*G,this._w=K*U*G+E*q*O;break;case"YZX":this._x=E*U*G+K*q*O,this._y=K*q*G+E*U*O,this._z=K*U*O-E*q*G,this._w=K*U*G-E*q*O;break;case"XZY":this._x=E*U*G-K*q*O,this._y=K*q*G-E*U*O,this._z=K*U*O+E*q*G,this._w=K*U*G+E*q*O;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],H=Q[1],Y=Q[5],X=Q[9],K=Q[2],U=Q[6],G=Q[10],E=$+Y+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-X)*q,this._y=(W-K)*q,this._z=(H-Z)*q}else if($>Y&&$>G){let q=2*Math.sqrt(1+$-Y-G);this._w=(U-X)/q,this._x=0.25*q,this._y=(Z+H)/q,this._z=(W+K)/q}else if(Y>G){let q=2*Math.sqrt(1+Y-$-G);this._w=(W-K)/q,this._x=(Z+H)/q,this._y=0.25*q,this._z=(X+U)/q}else{let q=2*Math.sqrt(1+G-$-Y);this._w=(H-Z)/q,this._x=(W+K)/q,this._y=(X+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(b0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:H}=J,Y=Q._x,X=Q._y,K=Q._z,U=Q._w;return this._x=$*U+H*Y+Z*K-W*X,this._y=Z*U+H*X+W*Y-$*K,this._z=W*U+H*K+$*X-Z*Y,this._w=H*U-$*Y-Z*X-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,W=this._z,H=this._w,Y=H*J._w+$*J._x+Z*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=H,this._x=$,this._y=Z,this._z=W,this;let X=1-Y*Y;if(X<=Number.EPSILON){let q=1-Q;return this._w=q*H+Q*this._w,this._x=q*$+Q*this._x,this._y=q*Z+Q*this._y,this._z=q*W+Q*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),G=Math.sin((1-Q)*U)/K,E=Math.sin(Q*U)/K;return this._w=H*G+this._w*E,this._x=$*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(J=0,Q=0,$=0){A.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(e$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(e$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*H,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*H,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,H=J.y,Y=J.z,X=J.w,K=2*(H*Z-Y*$),U=2*(Y*Q-W*Z),G=2*(W*$-H*Q);return this.x=Q+X*K+H*G-Y*U,this.y=$+X*U+Y*K-W*G,this.z=Z+X*G+W*U-H*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=b0(this.x,J.x,Q.x),this.y=b0(this.y,J.y,Q.y),this.z=b0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=b0(this.x,J,Q),this.y=b0(this.y,J,Q),this.z=b0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(b0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,H=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-W*Y,this.y=W*H-$*X,this.z=$*Y-Z*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return m7.copy(this).projectOnVector(J),this.sub(m7)}reflect(J){return this.sub(m7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(b0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var m7=new A,e$=new PJ;class y0{constructor(J,Q,$,Z,W,H,Y,X,K){if(y0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K)}set(J,Q,$,Z,W,H,Y,X,K){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=W,U[5]=X,U[6]=$,U[7]=H,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[3],X=$[6],K=$[1],U=$[4],G=$[7],E=$[2],q=$[5],O=$[8],M=Z[0],k=Z[3],N=Z[6],F=Z[1],_=Z[4],L=Z[7],C=Z[2],y=Z[5],w=Z[8];return W[0]=H*M+Y*F+X*C,W[3]=H*k+Y*_+X*y,W[6]=H*N+Y*L+X*w,W[1]=K*M+U*F+G*C,W[4]=K*k+U*_+G*y,W[7]=K*N+U*L+G*w,W[2]=E*M+q*F+O*C,W[5]=E*k+q*_+O*y,W[8]=E*N+q*L+O*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return Q*H*U-Q*Y*K-$*W*U+$*Y*X+Z*W*K-Z*H*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=U*H-Y*K,E=Y*X-U*W,q=K*W-H*X,O=Q*G+$*E+Z*q;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/O;return J[0]=G*M,J[1]=(Z*K-U*$)*M,J[2]=(Y*$-Z*H)*M,J[3]=E*M,J[4]=(U*Q-Z*X)*M,J[5]=(Z*W-Y*Q)*M,J[6]=q*M,J[7]=($*X-K*Q)*M,J[8]=(H*Q-$*W)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,H,Y){let X=Math.cos(W),K=Math.sin(W);return this.set($*X,$*K,-$*(X*H+K*Y)+H+J,-Z*K,Z*X,-Z*(-K*H+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(u7.makeScale(J,Q)),this}rotate(J){return this.premultiply(u7.makeRotation(-J)),this}translate(J,Q){return this.premultiply(u7.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var u7=new y0;function X$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function I9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function vW(){let J=I9("canvas");return J.style.display="block",J}var JZ={};function e8(J){if(J in JZ)return;JZ[J]=!0,console.warn(J)}function yW(J,Q,$){return new Promise(function(Z,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:Z()}}setTimeout(H,$)})}var QZ=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),$Z=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function BY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return W;if(this.spaces[H].transfer==="srgb")W.r=k8(W.r),W.g=k8(W.g),W.b=k8(W.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=w9(W.r),W.g=w9(W.g),W.b=w9(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,Y){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,H){return e8("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,H)},toWorkingColorSpace:function(W,H){return e8("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:QZ,fromXYZ:$Z,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:QZ,fromXYZ:$Z,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var x0=BY();function k8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function w9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var q9;class K${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement==="undefined")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(q9===void 0)q9=I9("canvas");q9.width=J.width,q9.height=J.height;let Z=q9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=q9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap){let Q=I9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let H=0;H<W.length;H++)W[H]=k8(W[H]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(k8(Q[$]/255)*255);else Q[$]=k8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var _Y=0;class E6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_Y++}),this.uuid=J8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let H=0,Y=Z.length;H<Y;H++)if(Z[H].isDataTexture)W.push(c7(Z[H].image));else W.push(c7(Z[H]))}else W=c7(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function c7(J){if(typeof HTMLImageElement!=="undefined"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&J instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&J instanceof ImageBitmap)return K$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var CY=0,n7=new A;class qJ extends x8{constructor(J=qJ.DEFAULT_IMAGE,Q=qJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,H=1008,Y=1023,X=1009,K=qJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:CY++}),this.uuid=J8(),this.name="",this.source=new E6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=H,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new g0(0,0),this.repeat=new g0(1,1),this.center=new g0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(n7).x}get height(){return this.source.getSize(n7).y}get depth(){return this.source.getSize(n7).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}qJ.DEFAULT_IMAGE=null;qJ.DEFAULT_MAPPING=300;qJ.DEFAULT_ANISOTROPY=1;class s0{constructor(J=0,Q=0,$=0,Z=1){s0.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw new Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*Z+H[12]*W,this.y=H[1]*Q+H[5]*$+H[9]*Z+H[13]*W,this.z=H[2]*Q+H[6]*$+H[10]*Z+H[14]*W,this.w=H[3]*Q+H[7]*$+H[11]*Z+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,H=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],G=X[8],E=X[1],q=X[5],O=X[9],M=X[2],k=X[6],N=X[10];if(Math.abs(U-E)<0.01&&Math.abs(G-M)<0.01&&Math.abs(O-k)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+M)<0.1&&Math.abs(O+k)<0.1&&Math.abs(K+q+N-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let _=(K+1)/2,L=(q+1)/2,C=(N+1)/2,y=(U+E)/4,w=(G+M)/4,T=(O+k)/4;if(_>L&&_>C)if(_<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(_),Z=y/$,W=w/$;else if(L>C)if(L<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),$=y/Z,W=T/Z;else if(C<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(C),$=w/W,Z=T/W;return this.set($,Z,W,Q),this}let F=Math.sqrt((k-O)*(k-O)+(G-M)*(G-M)+(E-U)*(E-U));if(Math.abs(F)<0.001)F=1;return this.x=(k-O)/F,this.y=(G-M)/F,this.z=(E-U)/F,this.w=Math.acos((K+q+N-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=b0(this.x,J.x,Q.x),this.y=b0(this.y,J.y,Q.y),this.z=b0(this.z,J.z,Q.z),this.w=b0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=b0(this.x,J,Q),this.y=b0(this.y,J,Q),this.z=b0(this.z,J,Q),this.w=b0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(b0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U$ extends x8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new s0(0,0,J,Q),this.scissorTest=!1,this.viewport=new s0(0,0,J,Q);let Z={width:J,height:Q,depth:$.depth},W=new qJ(Z);this.textures=[];let H=$.count;for(let Y=0;Y<H;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new E6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _8 extends U${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class F7 extends qJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class G$ extends qJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SJ{constructor(J=new A(1/0,1/0,1/0),Q=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(aJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(aJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=aJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=W.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,aJ);else aJ.fromBufferAttribute(W,H);aJ.applyMatrix4(J.matrixWorld),this.expandByPoint(aJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();_6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();_6.copy($.boundingBox)}_6.applyMatrix4(J.matrixWorld),this.union(_6)}}let Z=J.children;for(let W=0,H=Z.length;W<H;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,aJ),aJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(i9),C6.subVectors(this.max,i9),N9.subVectors(J.a,i9),O9.subVectors(J.b,i9),F9.subVectors(J.c,i9),I8.subVectors(O9,N9),P8.subVectors(F9,O9),i8.subVectors(N9,F9);let Q=[0,-I8.z,I8.y,0,-P8.z,P8.y,0,-i8.z,i8.y,I8.z,0,-I8.x,P8.z,0,-P8.x,i8.z,0,-i8.x,-I8.y,I8.x,0,-P8.y,P8.x,0,-i8.y,i8.x,0];if(!s7(Q,N9,O9,F9,C6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!s7(Q,N9,O9,F9,C6))return!1;return w6.crossVectors(I8,P8),Q=[w6.x,w6.y,w6.z],s7(Q,N9,O9,F9,C6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,aJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(aJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return E8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),E8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),E8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),E8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),E8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),E8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),E8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),E8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(E8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var E8=[new A,new A,new A,new A,new A,new A,new A,new A],aJ=new A,_6=new SJ,N9=new A,O9=new A,F9=new A,I8=new A,P8=new A,i8=new A,i9=new A,C6=new A,w6=new A,o8=new A;function s7(J,Q,$,Z,W){for(let H=0,Y=J.length-3;H<=Y;H+=3){o8.fromArray(J,H);let X=W.x*Math.abs(o8.x)+W.y*Math.abs(o8.y)+W.z*Math.abs(o8.z),K=Q.dot(o8),U=$.dot(o8),G=Z.dot(o8);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var wY=new SJ,o9=new A,i7=new A;class bJ{constructor(J=new A,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else wY.setFromPoints(J).getCenter($);let Z=0;for(let W=0,H=J.length;W<H;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;o9.subVectors(J,this.center);let Q=o9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(o9,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else i7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(o9.copy(J.center).add(i7)),this.expandByPoint(o9.copy(J.center).sub(i7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var q8=new A,o7=new A,I6=new A,T8=new A,a7=new A,P6=new A,r7=new A;class h9{constructor(J=new A,Q=new A(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,q8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=q8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return q8.copy(this.origin).addScaledVector(this.direction,Q),q8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){o7.copy(J).add(Q).multiplyScalar(0.5),I6.copy(Q).sub(J).normalize(),T8.copy(this.origin).sub(o7);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot(I6),Y=T8.dot(this.direction),X=-T8.dot(I6),K=T8.lengthSq(),U=Math.abs(1-H*H),G,E,q,O;if(U>0)if(G=H*X-Y,E=H*Y-X,O=W*U,G>=0)if(E>=-O)if(E<=O){let M=1/U;G*=M,E*=M,q=G*(G+H*E+2*Y)+E*(H*G+E+2*X)+K}else E=W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else E=-W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else if(E<=-O)G=Math.max(0,-(-H*W+Y)),E=G>0?-W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else if(E<=O)G=0,E=Math.min(Math.max(-W,-X),W),q=E*(E+2*X)+K;else G=Math.max(0,-(H*W+Y)),E=G>0?W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else E=H>0?-W:W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(o7).addScaledVector(I6,E);return q}intersectSphere(J,Q){q8.subVectors(J.center,this.origin);let $=q8.dot(this.direction),Z=q8.dot(q8)-$*$,W=J.radius*J.radius;if(Z>W)return null;let H=Math.sqrt(W-Z),Y=$-H,X=$+H;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,H,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(K>=0)$=(J.min.x-E.x)*K,Z=(J.max.x-E.x)*K;else $=(J.max.x-E.x)*K,Z=(J.min.x-E.x)*K;if(U>=0)W=(J.min.y-E.y)*U,H=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,H=(J.min.y-E.y)*U;if($>H||W>Z)return null;if(W>$||isNaN($))$=W;if(H<Z||isNaN(Z))Z=H;if(G>=0)Y=(J.min.z-E.z)*G,X=(J.max.z-E.z)*G;else Y=(J.max.z-E.z)*G,X=(J.min.z-E.z)*G;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,q8)!==null}intersectTriangle(J,Q,$,Z,W){a7.subVectors(Q,J),P6.subVectors($,J),r7.crossVectors(a7,P6);let H=this.direction.dot(r7),Y;if(H>0){if(Z)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;T8.subVectors(this.origin,J);let X=Y*this.direction.dot(P6.crossVectors(T8,P6));if(X<0)return null;let K=Y*this.direction.dot(a7.cross(T8));if(K<0)return null;if(X+K>H)return null;let U=-Y*T8.dot(r7);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class v0{constructor(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,O,M,k){if(v0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,O,M,k)}set(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,O,M,k){let N=this.elements;return N[0]=J,N[4]=Q,N[8]=$,N[12]=Z,N[1]=W,N[5]=H,N[9]=Y,N[13]=X,N[2]=K,N[6]=U,N[10]=G,N[14]=E,N[3]=q,N[7]=O,N[11]=M,N[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new v0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/R9.setFromMatrixColumn(J,0).length(),W=1/R9.setFromMatrixColumn(J,1).length(),H=1/R9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,H=Math.cos($),Y=Math.sin($),X=Math.cos(Z),K=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=H*U,q=H*G,O=Y*U,M=Y*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=K,Q[1]=q+O*K,Q[5]=E-M*K,Q[9]=-Y*X,Q[2]=M-E*K,Q[6]=O+q*K,Q[10]=H*X}else if(J.order==="YXZ"){let E=X*U,q=X*G,O=K*U,M=K*G;Q[0]=E+M*Y,Q[4]=O*Y-q,Q[8]=H*K,Q[1]=H*G,Q[5]=H*U,Q[9]=-Y,Q[2]=q*Y-O,Q[6]=M+E*Y,Q[10]=H*X}else if(J.order==="ZXY"){let E=X*U,q=X*G,O=K*U,M=K*G;Q[0]=E-M*Y,Q[4]=-H*G,Q[8]=O+q*Y,Q[1]=q+O*Y,Q[5]=H*U,Q[9]=M-E*Y,Q[2]=-H*K,Q[6]=Y,Q[10]=H*X}else if(J.order==="ZYX"){let E=H*U,q=H*G,O=Y*U,M=Y*G;Q[0]=X*U,Q[4]=O*K-q,Q[8]=E*K+M,Q[1]=X*G,Q[5]=M*K+E,Q[9]=q*K-O,Q[2]=-K,Q[6]=Y*X,Q[10]=H*X}else if(J.order==="YZX"){let E=H*X,q=H*K,O=Y*X,M=Y*K;Q[0]=X*U,Q[4]=M-E*G,Q[8]=O*G+q,Q[1]=G,Q[5]=H*U,Q[9]=-Y*U,Q[2]=-K*U,Q[6]=q*G+O,Q[10]=E-M*G}else if(J.order==="XZY"){let E=H*X,q=H*K,O=Y*X,M=Y*K;Q[0]=X*U,Q[4]=-G,Q[8]=K*U,Q[1]=E*G+M,Q[5]=H*U,Q[9]=q*G-O,Q[2]=O*G-q,Q[6]=Y*U,Q[10]=M*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(IY,J,PY)}lookAt(J,Q,$){let Z=this.elements;if(yJ.subVectors(J,Q),yJ.lengthSq()===0)yJ.z=1;if(yJ.normalize(),A8.crossVectors($,yJ),A8.lengthSq()===0){if(Math.abs($.z)===1)yJ.x+=0.0001;else yJ.z+=0.0001;yJ.normalize(),A8.crossVectors($,yJ)}return A8.normalize(),T6.crossVectors(yJ,A8),Z[0]=A8.x,Z[4]=T6.x,Z[8]=yJ.x,Z[1]=A8.y,Z[5]=T6.y,Z[9]=yJ.y,Z[2]=A8.z,Z[6]=T6.z,Z[10]=yJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[4],X=$[8],K=$[12],U=$[1],G=$[5],E=$[9],q=$[13],O=$[2],M=$[6],k=$[10],N=$[14],F=$[3],_=$[7],L=$[11],C=$[15],y=Z[0],w=Z[4],T=Z[8],b=Z[12],z=Z[1],V=Z[5],j=Z[9],m=Z[13],l=Z[2],c=Z[6],o=Z[10],u=Z[14],r=Z[3],g=Z[7],Z0=Z[11],U0=Z[15];return W[0]=H*y+Y*z+X*l+K*r,W[4]=H*w+Y*V+X*c+K*g,W[8]=H*T+Y*j+X*o+K*Z0,W[12]=H*b+Y*m+X*u+K*U0,W[1]=U*y+G*z+E*l+q*r,W[5]=U*w+G*V+E*c+q*g,W[9]=U*T+G*j+E*o+q*Z0,W[13]=U*b+G*m+E*u+q*U0,W[2]=O*y+M*z+k*l+N*r,W[6]=O*w+M*V+k*c+N*g,W[10]=O*T+M*j+k*o+N*Z0,W[14]=O*b+M*m+k*u+N*U0,W[3]=F*y+_*z+L*l+C*r,W[7]=F*w+_*V+L*c+C*g,W[11]=F*T+_*j+L*o+C*Z0,W[15]=F*b+_*m+L*u+C*U0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],H=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],G=J[6],E=J[10],q=J[14],O=J[3],M=J[7],k=J[11],N=J[15];return O*(+W*X*G-Z*K*G-W*Y*E+$*K*E+Z*Y*q-$*X*q)+M*(+Q*X*q-Q*K*E+W*H*E-Z*H*q+Z*K*U-W*X*U)+k*(+Q*K*G-Q*Y*q-W*H*G+$*H*q+W*Y*U-$*K*U)+N*(-Z*Y*U-Q*X*G+Q*Y*E+Z*H*G-$*H*E+$*X*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=J[9],E=J[10],q=J[11],O=J[12],M=J[13],k=J[14],N=J[15],F=G*k*K-M*E*K+M*X*q-Y*k*q-G*X*N+Y*E*N,_=O*E*K-U*k*K-O*X*q+H*k*q+U*X*N-H*E*N,L=U*M*K-O*G*K+O*Y*q-H*M*q-U*Y*N+H*G*N,C=O*G*X-U*M*X-O*Y*E+H*M*E+U*Y*k-H*G*k,y=Q*F+$*_+Z*L+W*C;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/y;return J[0]=F*w,J[1]=(M*E*W-G*k*W-M*Z*q+$*k*q+G*Z*N-$*E*N)*w,J[2]=(Y*k*W-M*X*W+M*Z*K-$*k*K-Y*Z*N+$*X*N)*w,J[3]=(G*X*W-Y*E*W-G*Z*K+$*E*K+Y*Z*q-$*X*q)*w,J[4]=_*w,J[5]=(U*k*W-O*E*W+O*Z*q-Q*k*q-U*Z*N+Q*E*N)*w,J[6]=(O*X*W-H*k*W-O*Z*K+Q*k*K+H*Z*N-Q*X*N)*w,J[7]=(H*E*W-U*X*W+U*Z*K-Q*E*K-H*Z*q+Q*X*q)*w,J[8]=L*w,J[9]=(O*G*W-U*M*W-O*$*q+Q*M*q+U*$*N-Q*G*N)*w,J[10]=(H*M*W-O*Y*W+O*$*K-Q*M*K-H*$*N+Q*Y*N)*w,J[11]=(U*Y*W-H*G*W-U*$*K+Q*G*K+H*$*q-Q*Y*q)*w,J[12]=C*w,J[13]=(U*M*Z-O*G*Z+O*$*E-Q*M*E-U*$*k+Q*G*k)*w,J[14]=(O*Y*Z-H*M*Z-O*$*X+Q*M*X+H*$*k-Q*Y*k)*w,J[15]=(H*G*Z-U*Y*Z+U*$*X-Q*G*X-H*$*E+Q*Y*E)*w,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,H=J.x,Y=J.y,X=J.z,K=W*H,U=W*Y;return this.set(K*H+$,K*Y-Z*X,K*X+Z*Y,0,K*Y+Z*X,U*Y+$,U*X-Z*H,0,K*X-Z*Y,U*X+Z*H,W*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,H){return this.set(1,$,W,0,J,1,H,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,H=Q._y,Y=Q._z,X=Q._w,K=W+W,U=H+H,G=Y+Y,E=W*K,q=W*U,O=W*G,M=H*U,k=H*G,N=Y*G,F=X*K,_=X*U,L=X*G,C=$.x,y=$.y,w=$.z;return Z[0]=(1-(M+N))*C,Z[1]=(q+L)*C,Z[2]=(O-_)*C,Z[3]=0,Z[4]=(q-L)*y,Z[5]=(1-(E+N))*y,Z[6]=(k+F)*y,Z[7]=0,Z[8]=(O+_)*w,Z[9]=(k-F)*w,Z[10]=(1-(E+M))*w,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=R9.set(Z[0],Z[1],Z[2]).length(),H=R9.set(Z[4],Z[5],Z[6]).length(),Y=R9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],rJ.copy(this);let K=1/W,U=1/H,G=1/Y;return rJ.elements[0]*=K,rJ.elements[1]*=K,rJ.elements[2]*=K,rJ.elements[4]*=U,rJ.elements[5]*=U,rJ.elements[6]*=U,rJ.elements[8]*=G,rJ.elements[9]*=G,rJ.elements[10]*=G,Q.setFromRotationMatrix(rJ),$.x=W,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2*W/(Q-J),G=2*W/($-Z),E=(Q+J)/(Q-J),q=($+Z)/($-Z),O,M;if(X)O=W/(H-W),M=H*W/(H-W);else if(Y===2000)O=-(H+W)/(H-W),M=-2*H*W/(H-W);else if(Y===2001)O=-H/(H-W),M=-H*W/(H-W);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=E,K[12]=0,K[1]=0,K[5]=G,K[9]=q,K[13]=0,K[2]=0,K[6]=0,K[10]=O,K[14]=M,K[3]=0,K[7]=0,K[11]=-1,K[15]=0,this}makeOrthographic(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2/(Q-J),G=2/($-Z),E=-(Q+J)/(Q-J),q=-($+Z)/($-Z),O,M;if(X)O=1/(H-W),M=H/(H-W);else if(Y===2000)O=-2/(H-W),M=-(H+W)/(H-W);else if(Y===2001)O=-1/(H-W),M=-W/(H-W);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=0,K[12]=E,K[1]=0,K[5]=G,K[9]=0,K[13]=q,K[2]=0,K[6]=0,K[10]=O,K[14]=M,K[3]=0,K[7]=0,K[11]=0,K[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var R9=new A,rJ=new v0,IY=new A(0,0,0),PY=new A(1,1,1),A8=new A,T6=new A,yJ=new A,ZZ=new v0,WZ=new PJ;class AJ{constructor(J=0,Q=0,$=0,Z=AJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],H=Z[4],Y=Z[8],X=Z[1],K=Z[5],U=Z[9],G=Z[2],E=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(b0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-b0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,q),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(b0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-H,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-b0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-H,K);break;case"YZX":if(this._z=Math.asin(b0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,q);break;case"XZY":if(this._z=Math.asin(-b0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return ZZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(ZZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return WZ.setFromEuler(this),this.setFromQuaternion(WZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}AJ.DEFAULT_ORDER="XYZ";class R7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var TY=0,HZ=new A,M9=new PJ,N8=new v0,A6=new A,a9=new A,AY=new A,SY=new PJ,YZ=new A(1,0,0),XZ=new A(0,1,0),KZ=new A(0,0,1),UZ={type:"added"},jY={type:"removed"},k9={type:"childadded",child:null},t7={type:"childremoved",child:null};class WJ extends x8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:TY++}),this.uuid=J8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=WJ.DEFAULT_UP.clone();let J=new A,Q=new AJ,$=new PJ,Z=new A(1,1,1);function W(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new v0},normalMatrix:{value:new y0}}),this.matrix=new v0,this.matrixWorld=new v0,this.matrixAutoUpdate=WJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=WJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return M9.setFromAxisAngle(J,Q),this.quaternion.multiply(M9),this}rotateOnWorldAxis(J,Q){return M9.setFromAxisAngle(J,Q),this.quaternion.premultiply(M9),this}rotateX(J){return this.rotateOnAxis(YZ,J)}rotateY(J){return this.rotateOnAxis(XZ,J)}rotateZ(J){return this.rotateOnAxis(KZ,J)}translateOnAxis(J,Q){return HZ.copy(J).applyQuaternion(this.quaternion),this.position.add(HZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(YZ,J)}translateY(J){return this.translateOnAxis(XZ,J)}translateZ(J){return this.translateOnAxis(KZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(N8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)A6.copy(J);else A6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),a9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)N8.lookAt(a9,A6,this.up);else N8.lookAt(A6,a9,this.up);if(this.quaternion.setFromRotationMatrix(N8),Z)N8.extractRotation(Z.matrixWorld),M9.setFromRotationMatrix(N8),this.quaternion.premultiply(M9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(UZ),k9.child=J,this.dispatchEvent(k9),k9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(jY),t7.child=J,this.dispatchEvent(t7),t7.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),N8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),N8.multiply(J.parent.matrixWorld);return J.applyMatrix4(N8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(UZ),k9.child=J,this.dispatchEvent(k9),k9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(a9,J,AY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(a9,SY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];W(J.shapes,G)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(J.materials,this.material[X]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(W(J.animations,X))}}if(Q){let Y=H(J.geometries),X=H(J.materials),K=H(J.textures),U=H(J.images),G=H(J.shapes),E=H(J.skeletons),q=H(J.animations),O=H(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(K.length>0)$.textures=K;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(q.length>0)$.animations=q;if(O.length>0)$.nodes=O}return $.object=Z,$;function H(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}WJ.DEFAULT_UP=new A(0,1,0);WJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;WJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tJ=new A,O8=new A,e7=new A,F8=new A,D9=new A,L9=new A,GZ=new A,JQ=new A,QQ=new A,$Q=new A,ZQ=new s0,WQ=new s0,HQ=new s0;class cJ{constructor(J=new A,Q=new A,$=new A){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),tJ.subVectors(J,Q),Z.cross(tJ);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){tJ.subVectors(Z,Q),O8.subVectors($,Q),e7.subVectors(J,Q);let H=tJ.dot(tJ),Y=tJ.dot(O8),X=tJ.dot(e7),K=O8.dot(O8),U=O8.dot(e7),G=H*K-Y*Y;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(K*X-Y*U)*E,O=(H*U-Y*X)*E;return W.set(1-q-O,O,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,F8)===null)return!1;return F8.x>=0&&F8.y>=0&&F8.x+F8.y<=1}static getInterpolation(J,Q,$,Z,W,H,Y,X){if(this.getBarycoord(J,Q,$,Z,F8)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,F8.x),X.addScaledVector(H,F8.y),X.addScaledVector(Y,F8.z),X}static getInterpolatedAttribute(J,Q,$,Z,W,H){return ZQ.setScalar(0),WQ.setScalar(0),HQ.setScalar(0),ZQ.fromBufferAttribute(J,Q),WQ.fromBufferAttribute(J,$),HQ.fromBufferAttribute(J,Z),H.setScalar(0),H.addScaledVector(ZQ,W.x),H.addScaledVector(WQ,W.y),H.addScaledVector(HQ,W.z),H}static isFrontFacing(J,Q,$,Z){return tJ.subVectors($,Q),O8.subVectors(J,Q),tJ.cross(O8).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return tJ.subVectors(this.c,this.b),O8.subVectors(this.a,this.b),tJ.cross(O8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return cJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return cJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return cJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return cJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return cJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,H,Y;D9.subVectors(Z,$),L9.subVectors(W,$),JQ.subVectors(J,$);let X=D9.dot(JQ),K=L9.dot(JQ);if(X<=0&&K<=0)return Q.copy($);QQ.subVectors(J,Z);let U=D9.dot(QQ),G=L9.dot(QQ);if(U>=0&&G<=U)return Q.copy(Z);let E=X*G-U*K;if(E<=0&&X>=0&&U<=0)return H=X/(X-U),Q.copy($).addScaledVector(D9,H);$Q.subVectors(J,W);let q=D9.dot($Q),O=L9.dot($Q);if(O>=0&&q<=O)return Q.copy(W);let M=q*K-X*O;if(M<=0&&K>=0&&O<=0)return Y=K/(K-O),Q.copy($).addScaledVector(L9,Y);let k=U*O-q*G;if(k<=0&&G-U>=0&&q-O>=0)return GZ.subVectors(W,Z),Y=(G-U)/(G-U+(q-O)),Q.copy(Z).addScaledVector(GZ,Y);let N=1/(k+M+E);return H=M*N,Y=E*N,Q.copy($).addScaledVector(D9,H).addScaledVector(L9,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var hW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},S8={h:0,s:0,l:0},S6={h:0,s:0,l:0};function YQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class w0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,x0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=x0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,x0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=x0.workingColorSpace){if(J=Y$(J,1),Q=b0(Q,0,1),$=b0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-W;this.r=YQ(H,W,J+0.3333333333333333),this.g=YQ(H,W,J),this.b=YQ(H,W,J-0.3333333333333333)}return x0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=Z[1],Y=Z[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=hW[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=k8(J.r),this.g=k8(J.g),this.b=k8(J.b),this}copyLinearToSRGB(J){return this.r=w9(J.r),this.g=w9(J.g),this.b=w9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return x0.workingToColorSpace(zJ.copy(this),J),Math.round(b0(zJ.r*255,0,255))*65536+Math.round(b0(zJ.g*255,0,255))*256+Math.round(b0(zJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=x0.workingColorSpace){x0.workingToColorSpace(zJ.copy(this),Q);let{r:$,g:Z,b:W}=zJ,H=Math.max($,Z,W),Y=Math.min($,Z,W),X,K,U=(Y+H)/2;if(Y===H)X=0,K=0;else{let G=H-Y;switch(K=U<=0.5?G/(H+Y):G/(2-H-Y),H){case $:X=(Z-W)/G+(Z<W?6:0);break;case Z:X=(W-$)/G+2;break;case W:X=($-Z)/G+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,Q=x0.workingColorSpace){return x0.workingToColorSpace(zJ.copy(this),Q),J.r=zJ.r,J.g=zJ.g,J.b=zJ.b,J}getStyle(J="srgb"){x0.workingToColorSpace(zJ.copy(this),J);let{r:Q,g:$,b:Z}=zJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(S8),this.setHSL(S8.h+J,S8.s+Q,S8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(S8),J.getHSL(S6);let $=Z6(S8.h,S6.h,Q),Z=Z6(S8.s,S6.s,Q),W=Z6(S8.l,S6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var zJ=new w0;w0.NAMES=hW;var vY=0;class gJ extends x8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:vY++}),this.uuid=J8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new w0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let H=[];for(let Y in W){let X=W[Y];delete X.metadata,H.push(X)}return H}if(Q){let W=Z(J.textures),H=Z(J.images);if(W.length>0)$.textures=W;if(H.length>0)$.images=H}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=new Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class K8 extends gJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new w0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new AJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var EJ=new A,j6=new g0,yY=0;class GJ{constructor(J,Q,$=!1){if(Array.isArray(J))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)j6.fromBufferAttribute(this,Q),j6.applyMatrix3(J),this.setXY(Q,j6.x,j6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix3(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix4(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyNormalMatrix(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.transformDirection(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=eJ($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=a0($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=eJ(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=eJ(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=eJ(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=eJ(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array),W=a0(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class M7 extends GJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class k7 extends GJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class fJ extends GJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var hY=0,uJ=new v0,XQ=new WJ,V9=new A,hJ=new SJ,r9=new SJ,MJ=new A;class BJ extends x8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hY++}),this.uuid=J8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((X$(J))?k7:M7)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new y0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return uJ.makeRotationFromQuaternion(J),this.applyMatrix4(uJ),this}rotateX(J){return uJ.makeRotationX(J),this.applyMatrix4(uJ),this}rotateY(J){return uJ.makeRotationY(J),this.applyMatrix4(uJ),this}rotateZ(J){return uJ.makeRotationZ(J),this.applyMatrix4(uJ),this}translate(J,Q,$){return uJ.makeTranslation(J,Q,$),this.applyMatrix4(uJ),this}scale(J,Q,$){return uJ.makeScale(J,Q,$),this.applyMatrix4(uJ),this}lookAt(J){return XQ.lookAt(J),XQ.updateMatrix(),this.applyMatrix4(XQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(V9).negate(),this.translate(V9.x,V9.y,V9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new fJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new SJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(hJ.setFromBufferAttribute(W),this.morphTargetsRelative)MJ.addVectors(this.boundingBox.min,hJ.min),this.boundingBox.expandByPoint(MJ),MJ.addVectors(this.boundingBox.max,hJ.max),this.boundingBox.expandByPoint(MJ);else this.boundingBox.expandByPoint(hJ.min),this.boundingBox.expandByPoint(hJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new bJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(J){let $=this.boundingSphere.center;if(hJ.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W];if(r9.setFromBufferAttribute(Y),this.morphTargetsRelative)MJ.addVectors(hJ.min,r9.min),hJ.expandByPoint(MJ),MJ.addVectors(hJ.max,r9.max),hJ.expandByPoint(MJ);else hJ.expandByPoint(r9.min),hJ.expandByPoint(r9.max)}hJ.getCenter($);let Z=0;for(let W=0,H=J.count;W<H;W++)MJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(MJ));if(Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(MJ.fromBufferAttribute(Y,K),X)V9.fromBufferAttribute(J,K),MJ.add(V9);Z=Math.max(Z,$.distanceToSquared(MJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new GJ(new Float32Array(4*$.count),4));let H=this.getAttribute("tangent"),Y=[],X=[];for(let T=0;T<$.count;T++)Y[T]=new A,X[T]=new A;let K=new A,U=new A,G=new A,E=new g0,q=new g0,O=new g0,M=new A,k=new A;function N(T,b,z){K.fromBufferAttribute($,T),U.fromBufferAttribute($,b),G.fromBufferAttribute($,z),E.fromBufferAttribute(W,T),q.fromBufferAttribute(W,b),O.fromBufferAttribute(W,z),U.sub(K),G.sub(K),q.sub(E),O.sub(E);let V=1/(q.x*O.y-O.x*q.y);if(!isFinite(V))return;M.copy(U).multiplyScalar(O.y).addScaledVector(G,-q.y).multiplyScalar(V),k.copy(G).multiplyScalar(q.x).addScaledVector(U,-O.x).multiplyScalar(V),Y[T].add(M),Y[b].add(M),Y[z].add(M),X[T].add(k),X[b].add(k),X[z].add(k)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let T=0,b=F.length;T<b;++T){let z=F[T],V=z.start,j=z.count;for(let m=V,l=V+j;m<l;m+=3)N(J.getX(m+0),J.getX(m+1),J.getX(m+2))}let _=new A,L=new A,C=new A,y=new A;function w(T){C.fromBufferAttribute(Z,T),y.copy(C);let b=Y[T];_.copy(b),_.sub(C.multiplyScalar(C.dot(b))).normalize(),L.crossVectors(y,b);let V=L.dot(X[T])<0?-1:1;H.setXYZW(T,_.x,_.y,_.z,V)}for(let T=0,b=F.length;T<b;++T){let z=F[T],V=z.start,j=z.count;for(let m=V,l=V+j;m<l;m+=3)w(J.getX(m+0)),w(J.getX(m+1)),w(J.getX(m+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new GJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,q=$.count;E<q;E++)$.setXYZ(E,0,0,0);let Z=new A,W=new A,H=new A,Y=new A,X=new A,K=new A,U=new A,G=new A;if(J)for(let E=0,q=J.count;E<q;E+=3){let O=J.getX(E+0),M=J.getX(E+1),k=J.getX(E+2);Z.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,M),H.fromBufferAttribute(Q,k),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),Y.fromBufferAttribute($,O),X.fromBufferAttribute($,M),K.fromBufferAttribute($,k),Y.add(U),X.add(U),K.add(U),$.setXYZ(O,Y.x,Y.y,Y.z),$.setXYZ(M,X.x,X.y,X.z),$.setXYZ(k,K.x,K.y,K.z)}else for(let E=0,q=Q.count;E<q;E+=3)Z.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)MJ.fromBufferAttribute(J,Q),MJ.normalize(),J.setXYZ(Q,MJ.x,MJ.y,MJ.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:G}=Y,E=new K.constructor(X.length*U),q=0,O=0;for(let M=0,k=X.length;M<k;M++){if(Y.isInterleavedBufferAttribute)q=X[M]*Y.data.stride+Y.offset;else q=X[M]*U;for(let N=0;N<U;N++)E[O++]=K[q++]}return new GJ(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new BJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],K=J(X,$);Q.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,G=K.length;U<G;U++){let E=K[U],q=J(E,$);X.push(q)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,X=H.length;Y<X;Y++){let K=H[Y];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let K=$[X];J.data.attributes[X]=K.toJSON(J.data)}let Z={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,E=K.length;G<E;G++){let q=K[G];U.push(q.toJSON(J.data))}if(U.length>0)Z[X]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let K in Z){let U=Z[K];this.setAttribute(K,U.clone(Q))}let W=J.morphAttributes;for(let K in W){let U=[],G=W[K];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(Q));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let K=0,U=H.length;K<U;K++){let G=H[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var EZ=new v0,a8=new h9,v6=new bJ,qZ=new A,y6=new A,h6=new A,f6=new A,KQ=new A,x6=new A,NZ=new A,b6=new A;class _J extends WJ{constructor(J=new BJ,Q=new K8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){x6.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],G=W[X];if(U===0)continue;if(KQ.fromBufferAttribute(G,J),H)x6.addScaledVector(KQ,U);else x6.addScaledVector(KQ.sub(Q),U)}Q.add(x6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(v6.copy($.boundingSphere),v6.applyMatrix4(W),a8.copy(J.ray).recast(J.near),v6.containsPoint(a8.origin)===!1){if(a8.intersectSphere(v6,qZ)===null)return;if(a8.origin.distanceToSquared(qZ)>(J.far-J.near)**2)return}if(EZ.copy(W).invert(),a8.copy(J.ray).applyMatrix4(EZ),$.boundingBox!==null){if(a8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,a8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,H=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(Y!==null)if(Array.isArray(H))for(let O=0,M=E.length;O<M;O++){let k=E[O],N=H[k.materialIndex],F=Math.max(k.start,q.start),_=Math.min(Y.count,Math.min(k.start+k.count,q.start+q.count));for(let L=F,C=_;L<C;L+=3){let y=Y.getX(L),w=Y.getX(L+1),T=Y.getX(L+2);if(Z=g6(this,N,J,$,K,U,G,y,w,T),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let O=Math.max(0,q.start),M=Math.min(Y.count,q.start+q.count);for(let k=O,N=M;k<N;k+=3){let F=Y.getX(k),_=Y.getX(k+1),L=Y.getX(k+2);if(Z=g6(this,H,J,$,K,U,G,F,_,L),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(H))for(let O=0,M=E.length;O<M;O++){let k=E[O],N=H[k.materialIndex],F=Math.max(k.start,q.start),_=Math.min(X.count,Math.min(k.start+k.count,q.start+q.count));for(let L=F,C=_;L<C;L+=3){let y=L,w=L+1,T=L+2;if(Z=g6(this,N,J,$,K,U,G,y,w,T),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let O=Math.max(0,q.start),M=Math.min(X.count,q.start+q.count);for(let k=O,N=M;k<N;k+=3){let F=k,_=k+1,L=k+2;if(Z=g6(this,H,J,$,K,U,G,F,_,L),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}}}function fY(J,Q,$,Z,W,H,Y,X){let K;if(Q.side===1)K=Z.intersectTriangle(Y,H,W,!0,X);else K=Z.intersectTriangle(W,H,Y,Q.side===0,X);if(K===null)return null;b6.copy(X),b6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(b6);if(U<$.near||U>$.far)return null;return{distance:U,point:b6.clone(),object:J}}function g6(J,Q,$,Z,W,H,Y,X,K,U){J.getVertexPosition(X,y6),J.getVertexPosition(K,h6),J.getVertexPosition(U,f6);let G=fY(J,Q,$,Z,y6,h6,f6,NZ);if(G){let E=new A;if(cJ.getBarycoord(NZ,y6,h6,f6,E),W)G.uv=cJ.getInterpolatedAttribute(W,X,K,U,E,new g0);if(H)G.uv1=cJ.getInterpolatedAttribute(H,X,K,U,E,new g0);if(Y){if(G.normal=cJ.getInterpolatedAttribute(Y,X,K,U,E,new A),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:X,b:K,c:U,normal:new A,materialIndex:0};cJ.getNormal(y6,h6,f6,q.normal),G.face=q,G.barycoord=E}return G}class f9 extends BJ{constructor(J=1,Q=1,$=1,Z=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:H};let Y=this;Z=Math.floor(Z),W=Math.floor(W),H=Math.floor(H);let X=[],K=[],U=[],G=[],E=0,q=0;O("z","y","x",-1,-1,$,Q,J,H,W,0),O("z","y","x",1,-1,$,Q,-J,H,W,1),O("x","z","y",1,1,J,$,Q,Z,H,2),O("x","z","y",1,-1,J,$,-Q,Z,H,3),O("x","y","z",1,-1,J,Q,$,Z,W,4),O("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(X),this.setAttribute("position",new fJ(K,3)),this.setAttribute("normal",new fJ(U,3)),this.setAttribute("uv",new fJ(G,2));function O(M,k,N,F,_,L,C,y,w,T,b){let z=L/w,V=C/T,j=L/2,m=C/2,l=y/2,c=w+1,o=T+1,u=0,r=0,g=new A;for(let Z0=0;Z0<o;Z0++){let U0=Z0*V-m;for(let T0=0;T0<c;T0++){let m0=T0*z-j;g[M]=m0*F,g[k]=U0*_,g[N]=l,K.push(g.x,g.y,g.z),g[M]=0,g[k]=0,g[N]=y>0?1:-1,U.push(g.x,g.y,g.z),G.push(T0/w),G.push(1-Z0/T),u+=1}}for(let Z0=0;Z0<T;Z0++)for(let U0=0;U0<w;U0++){let T0=E+U0+c*Z0,m0=E+U0+c*(Z0+1),HJ=E+(U0+1)+c*(Z0+1),d=E+(U0+1)+c*Z0;X.push(T0,m0,d),X.push(m0,HJ,d),r+=6}Y.addGroup(q,r,b),q+=r,E+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new f9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function W9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function CJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=W9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function xY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function E$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return x0.workingColorSpace}var fW={clone:W9,merge:CJ},bY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class U8 extends gJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bY,this.fragmentShader=gY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=W9(J.uniforms),this.uniformsGroups=xY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let H=this.uniforms[Z].value;if(H&&H.isTexture)Q.uniforms[Z]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[Z]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[Z]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[Z]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[Z]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[Z]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[Z]={type:"m4",value:H.toArray()};else Q.uniforms[Z]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class D7 extends WJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new v0,this.projectionMatrix=new v0,this.projectionMatrixInverse=new v0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var j8=new A,OZ=new g0,FZ=new g0;class DJ extends D7{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=t8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan($6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return t8*2*Math.atan(Math.tan($6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){j8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(j8.x,j8.y).multiplyScalar(-J/j8.z),j8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(j8.x,j8.y).multiplyScalar(-J/j8.z)}getViewSize(J,Q){return this.getViewBounds(J,OZ,FZ),Q.subVectors(FZ,OZ)}setViewOffset(J,Q,$,Z,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan($6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=H;W+=H.offsetX*Z/X,Q-=H.offsetY*$/K,Z*=H.width/X,$*=H.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var z9=-90,B9=1;class q$ extends WJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new DJ(z9,B9,J,Q);Z.layers=this.layers,this.add(Z);let W=new DJ(z9,B9,J,Q);W.layers=this.layers,this.add(W);let H=new DJ(z9,B9,J,Q);H.layers=this.layers,this.add(H);let Y=new DJ(z9,B9,J,Q);Y.layers=this.layers,this.add(Y);let X=new DJ(z9,B9,J,Q);X.layers=this.layers,this.add(X);let K=new DJ(z9,B9,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,H,Y,X]=Q;for(let K of Q)this.remove(K);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,Y,X,K,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let M=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,H),J.setRenderTarget($,2,Z),J.render(Q,Y),J.setRenderTarget($,3,Z),J.render(Q,X),J.setRenderTarget($,4,Z),J.render(Q,K),$.texture.generateMipmaps=M,J.setRenderTarget($,5,Z),J.render(Q,U),J.setRenderTarget(G,E,q),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class L7 extends qJ{constructor(J=[],Q=301,$,Z,W,H,Y,X,K,U){super(J,Q,$,Z,W,H,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class N$ extends _8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new L7(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new f9(5,5,5),W=new U8({name:"CubemapFromEquirect",uniforms:W9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new _J(Z,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new q$(1,10,this).update(J,H),Q.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,Z);J.setRenderTarget(W)}}class nJ extends WJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var pY={type:"move"};class q6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new nJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new nJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new nJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,H=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){H=!0;for(let M of J.hand.values()){let k=Q.getJointPose(M,$),N=this._getHandJoint(K,M);if(k!==null)N.matrix.fromArray(k.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=k.radius;N.visible=k!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,O=0.005;if(K.inputState.pinching&&E>q+O)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&E<=q-O)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(pY)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new nJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}class V7 extends WJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new AJ,this.environmentIntensity=1,this.environmentRotation=new AJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class N6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=J8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var IJ=new A;class x9{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)IJ.fromBufferAttribute(this,Q),IJ.applyMatrix4(J),this.setXYZ(Q,IJ.x,IJ.y,IJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)IJ.fromBufferAttribute(this,Q),IJ.applyNormalMatrix(J),this.setXYZ(Q,IJ.x,IJ.y,IJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)IJ.fromBufferAttribute(this,Q),IJ.transformDirection(J),this.setXYZ(Q,IJ.x,IJ.y,IJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=eJ($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=a0($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=eJ(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=eJ(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=eJ(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=eJ(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array),W=a0(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new GJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new x9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var RZ=new A,MZ=new s0,kZ=new s0,lY=new A,DZ=new v0,p6=new A,UQ=new bJ,LZ=new v0,GQ=new h9;class z7 extends _J{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new v0,this.bindMatrixInverse=new v0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new SJ;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,p6),this.boundingBox.expandByPoint(p6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new bJ;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,p6),this.boundingSphere.expandByPoint(p6)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(UQ.copy(this.boundingSphere),UQ.applyMatrix4(Z),J.ray.intersectsSphere(UQ)===!1)return;if(LZ.copy(Z).invert(),GQ.copy(J.ray).applyMatrix4(LZ),this.boundingBox!==null){if(GQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,GQ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new s0,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;MZ.fromBufferAttribute(Z.attributes.skinIndex,J),kZ.fromBufferAttribute(Z.attributes.skinWeight,J),RZ.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let H=kZ.getComponent(W);if(H!==0){let Y=MZ.getComponent(W);DZ.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(lY.copy(RZ).applyMatrix4(DZ),H)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class O6 extends WJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class B7 extends qJ{constructor(J=null,Q=1,$=1,Z,W,H,Y,X,K=1003,U=1003,G,E){super(null,H,Y,X,K,U,Z,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var VZ=new v0,dY=new v0;class F6{constructor(J=[],Q=[]){this.uuid=J8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new v0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new v0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,H=J.length;W<H;W++){let Y=J[W]?J[W].matrixWorld:dY;VZ.multiplyMatrices(Y,Q[W]),VZ.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new F6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new B7(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],H=Q[W];if(H===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),H=new O6;this.bones.push(H),this.boneInverses.push(new v0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z];J.bones.push(H.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class J9 extends GJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var _9=new v0,zZ=new v0,l6=[],BZ=new SJ,mY=new v0,t9=new _J,e9=new bJ;class _7 extends _J{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new J9(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,mY)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new SJ;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,_9),BZ.copy(J.boundingBox).applyMatrix4(_9),this.boundingBox.union(BZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new bJ;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,_9),e9.copy(J.boundingSphere).applyMatrix4(_9),this.boundingSphere.union(e9)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,H=J*W+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[H+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(t9.geometry=this.geometry,t9.material=this.material,t9.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(e9.copy(this.boundingSphere),e9.applyMatrix4($),J.ray.intersectsSphere(e9)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,_9),zZ.multiplyMatrices($,_9),t9.matrixWorld=zZ,t9.raycast(J,l6);for(let H=0,Y=l6.length;H<Y;H++){let X=l6[H];X.instanceId=W,X.object=this,Q.push(X)}l6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new J9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new B7(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let K=0;K<$.length;K++)H+=$[K];let Y=this.geometry.morphTargetsRelative?1:1-H,X=Z*J;W[X]=Y,W.set($,X+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var EQ=new A,uY=new A,cY=new y0;class M8{constructor(J=new A(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=EQ.subVectors($,Q).cross(uY.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(EQ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||cY.getNormalMatrix(J),Z=this.coplanarPoint(EQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var r8=new bJ,nY=new g0(0.5,0.5),d6=new A;class R6{constructor(J=new M8,Q=new M8,$=new M8,Z=new M8,W=new M8,H=new M8){this.planes=[J,Q,$,Z,W,H]}set(J,Q,$,Z,W,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,H=W[0],Y=W[1],X=W[2],K=W[3],U=W[4],G=W[5],E=W[6],q=W[7],O=W[8],M=W[9],k=W[10],N=W[11],F=W[12],_=W[13],L=W[14],C=W[15];if(Z[0].setComponents(K-H,q-U,N-O,C-F).normalize(),Z[1].setComponents(K+H,q+U,N+O,C+F).normalize(),Z[2].setComponents(K+Y,q+G,N+M,C+_).normalize(),Z[3].setComponents(K-Y,q-G,N-M,C-_).normalize(),$)Z[4].setComponents(X,E,k,L).normalize(),Z[5].setComponents(K-X,q-E,N-k,C-L).normalize();else if(Z[4].setComponents(K-X,q-E,N-k,C-L).normalize(),Q===2000)Z[5].setComponents(K+X,q+E,N+k,C+L).normalize();else if(Q===2001)Z[5].setComponents(X,E,k,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();r8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();r8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(r8)}intersectsSprite(J){r8.center.set(0,0,0);let Q=nY.distanceTo(J.center);return r8.radius=0.7071067811865476+Q,r8.applyMatrix4(J.matrixWorld),this.intersectsSphere(r8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(d6.x=Z.normal.x>0?J.max.x:J.min.x,d6.y=Z.normal.y>0?J.max.y:J.min.y,d6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(d6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H9 extends gJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new w0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var i6=new A,o6=new A,_Z=new v0,J6=new h9,m6=new bJ,qQ=new A,CZ=new A;class b9 extends WJ{constructor(J=new BJ,Q=new H9){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)i6.fromBufferAttribute(Q,Z-1),o6.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=i6.distanceTo(o6);J.setAttribute("lineDistance",new fJ($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(m6.copy($.boundingSphere),m6.applyMatrix4(Z),m6.radius+=W,J.ray.intersectsSphere(m6)===!1)return;_Z.copy(Z).invert(),J6.copy(J.ray).applyMatrix4(_Z);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let q=Math.max(0,H.start),O=Math.min(U.count,H.start+H.count);for(let M=q,k=O-1;M<k;M+=K){let N=U.getX(M),F=U.getX(M+1),_=u6(this,J,J6,X,N,F,M);if(_)Q.push(_)}if(this.isLineLoop){let M=U.getX(O-1),k=U.getX(q),N=u6(this,J,J6,X,M,k,O-1);if(N)Q.push(N)}}else{let q=Math.max(0,H.start),O=Math.min(E.count,H.start+H.count);for(let M=q,k=O-1;M<k;M+=K){let N=u6(this,J,J6,X,M,M+1,M);if(N)Q.push(N)}if(this.isLineLoop){let M=u6(this,J,J6,X,O-1,q,O-1);if(M)Q.push(M)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function u6(J,Q,$,Z,W,H,Y){let X=J.geometry.attributes.position;if(i6.fromBufferAttribute(X,W),o6.fromBufferAttribute(X,H),$.distanceSqToSegment(i6,o6,qQ,CZ)>Z)return;qQ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(qQ);if(U<Q.near||U>Q.far)return;return{distance:U,point:CZ.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var wZ=new A,IZ=new A;class g9 extends b9{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)wZ.fromBufferAttribute(Q,Z),IZ.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+wZ.distanceTo(IZ);J.setAttribute("lineDistance",new fJ($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class C7 extends b9{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class M6 extends gJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new w0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var PZ=new v0,RQ=new h9,c6=new bJ,n6=new A;class w7 extends WJ{constructor(J=new BJ,Q=new M6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(c6.copy($.boundingSphere),c6.applyMatrix4(Z),c6.radius+=W,J.ray.intersectsSphere(c6)===!1)return;PZ.copy(Z).invert(),RQ.copy(J.ray).applyMatrix4(PZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=$.index,G=$.attributes.position;if(K!==null){let E=Math.max(0,H.start),q=Math.min(K.count,H.start+H.count);for(let O=E,M=q;O<M;O++){let k=K.getX(O);n6.fromBufferAttribute(G,k),TZ(n6,k,X,Z,J,Q,this)}}else{let E=Math.max(0,H.start),q=Math.min(G.count,H.start+H.count);for(let O=E,M=q;O<M;O++)n6.fromBufferAttribute(G,O),TZ(n6,O,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function TZ(J,Q,$,Z,W,H,Y){let X=RQ.distanceSqToPoint(J);if(X<$){let K=new A;RQ.closestPointToPoint(J,K),K.applyMatrix4(Z);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;H.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class I7 extends qJ{constructor(J,Q,$=1014,Z,W,H,Y=1003,X=1003,K,U=1026,G=1){if(U!==1026&&U!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,Z,W,H,Y,X,U,$,K);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new E6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class k6 extends BJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,H=Q/2,Y=Math.floor($),X=Math.floor(Z),K=Y+1,U=X+1,G=J/Y,E=Q/X,q=[],O=[],M=[],k=[];for(let N=0;N<U;N++){let F=N*E-H;for(let _=0;_<K;_++){let L=_*G-W;O.push(L,-F,0),M.push(0,0,1),k.push(_/Y),k.push(1-N/X)}}for(let N=0;N<X;N++)for(let F=0;F<Y;F++){let _=F+K*N,L=F+K*(N+1),C=F+1+K*(N+1),y=F+1+K*N;q.push(_,L,y),q.push(L,C,y)}this.setIndex(q),this.setAttribute("position",new fJ(O,3)),this.setAttribute("normal",new fJ(M,3)),this.setAttribute("uv",new fJ(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new k6(J.width,J.height,J.widthSegments,J.heightSegments)}}class P7 extends BJ{constructor(J=null){super();if(this.type="WireframeGeometry",this.parameters={geometry:J},J!==null){let Q=[],$=new Set,Z=new A,W=new A;if(J.index!==null){let H=J.attributes.position,Y=J.index,X=J.groups;if(X.length===0)X=[{start:0,count:Y.count,materialIndex:0}];for(let K=0,U=X.length;K<U;++K){let G=X[K],E=G.start,q=G.count;for(let O=E,M=E+q;O<M;O+=3)for(let k=0;k<3;k++){let N=Y.getX(O+k),F=Y.getX(O+(k+1)%3);if(Z.fromBufferAttribute(H,N),W.fromBufferAttribute(H,F),AZ(Z,W,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(W.x,W.y,W.z)}}}else{let H=J.attributes.position;for(let Y=0,X=H.count/3;Y<X;Y++)for(let K=0;K<3;K++){let U=3*Y+K,G=3*Y+(K+1)%3;if(Z.fromBufferAttribute(H,U),W.fromBufferAttribute(H,G),AZ(Z,W,$)===!0)Q.push(Z.x,Z.y,Z.z),Q.push(W.x,W.y,W.z)}}this.setAttribute("position",new fJ(Q,3))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}}function AZ(J,Q,$){let Z=`${J.x},${J.y},${J.z}-${Q.x},${Q.y},${Q.z}`,W=`${Q.x},${Q.y},${Q.z}-${J.x},${J.y},${J.z}`;if($.has(Z)===!0||$.has(W)===!0)return!1;else return $.add(Z),$.add(W),!0}class p9 extends gJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new w0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new w0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new g0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new AJ,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class pJ extends p9{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new g0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return b0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new w0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new w0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new w0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class O$ extends gJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class F$ extends gJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function s6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function sY(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function iY(J){function Q(W,H){return J[W]-J[H]}let $=J.length,Z=new Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function SZ(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let H=0,Y=0;Y!==Z;++H){let X=$[H]*Q;for(let K=0;K!==Q;++K)W[Y++]=J[X+K]}return W}function xW(J,Q,$,Z){let W=1,H=J[0];while(H!==void 0&&H[Z]===void 0)H=J[W++];if(H===void 0)return;let Y=H[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(...Y);H=J[W++]}while(H!==void 0);else if(Y.toArray!==void 0)do{if(Y=H[Z],Y!==void 0)Q.push(H.time),Y.toArray($,$.length);H=J[W++]}while(H!==void 0);else do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(Y);H=J[W++]}while(H!==void 0)}class g8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let H;Q:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(W=Z,Z=Q[++$],J<Z)break J}H=Q.length;break Q}if(!(J>=W)){let Y=Q[1];if(J<Y)$=2,W=Y;for(let X=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=W,W=Q[--$-1],J>=W)break J}H=$,$=0;break Q}break $}while($<H){let Y=$+H>>>1;if(J<Q[Y])H=Y;else $=Y+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let H=0;H!==Z;++H)Q[H]=$[W+H];return Q}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class R$ extends g8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,H=J+1,Y=Z[W],X=Z[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-$;break;case 2402:W=Z.length-2,Y=Q+Z[W]-Z[W+1];break;default:W=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*$-Q;break;case 2402:H=1,X=$+Z[1]-Z[0];break;default:H=J-1,X=Q}let K=($-Q)*0.5,U=this.valueSize;this._weightPrev=K/(Q-Y),this._weightNext=K/(X-$),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,O=($-Q)/(Z-Q),M=O*O,k=M*O,N=-E*k+2*E*M-E*O,F=(1+E)*k+(-1.5-2*E)*M+(-0.5+E)*O+1,_=(-1-q)*k+(1.5+q)*M+0.5*O,L=q*k-q*M;for(let C=0;C!==Y;++C)W[C]=N*H[U+C]+F*H[K+C]+_*H[X+C]+L*H[G+C];return W}}class M$ extends g8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=($-Q)/(Z-Q),G=1-U;for(let E=0;E!==Y;++E)W[E]=H[K+E]*G+H[X+E]*U;return W}}class k$ extends g8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class lJ{constructor(J,Q,$,Z){if(J===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=s6(Q,this.TimeBufferType),this.values=s6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:s6(J.times,Array),values:s6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new k$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new M$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new R$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,H=Z-1;while(W!==Z&&$[W]<J)++W;while(H!==-1&&$[H]>Q)--H;if(++H,W!==0||H!==Z){if(W>=H)H=Math.max(H,1),W=H-1;let Y=this.getValueSize();this.times=$.slice(W,H),this.values=this.values.slice(W*Y,H*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==W;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,H),J=!1;break}H=X}if(Z!==void 0){if(sY(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let K=Z[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,H=1;for(let Y=1;Y<W;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!Z){let G=Y*$,E=G-$,q=G+$;for(let O=0;O!==$;++O){let M=Q[G+O];if(M!==Q[E+O]||M!==Q[q+O]){X=!0;break}}}else X=!0;if(X){if(Y!==H){J[H]=J[Y];let G=Y*$,E=H*$;for(let q=0;q!==$;++q)Q[E+q]=Q[G+q]}++H}}if(W>0){J[H]=J[W];for(let Y=W*$,X=H*$,K=0;K!==$;++K)Q[X+K]=Q[Y+K];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}lJ.prototype.ValueTypeName="";lJ.prototype.TimeBufferType=Float32Array;lJ.prototype.ValueBufferType=Float32Array;lJ.prototype.DefaultInterpolation=2301;class p8 extends lJ{constructor(J,Q,$){super(J,Q,$)}}p8.prototype.ValueTypeName="bool";p8.prototype.ValueBufferType=Array;p8.prototype.DefaultInterpolation=2300;p8.prototype.InterpolantFactoryMethodLinear=void 0;p8.prototype.InterpolantFactoryMethodSmooth=void 0;class T7 extends lJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}T7.prototype.ValueTypeName="color";class D8 extends lJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}D8.prototype.ValueTypeName="number";class D$ extends g8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),K=J*Y;for(let U=K+Y;K!==U;K+=4)PJ.slerpFlat(W,0,H,K-Y,H,K,X);return W}}class C8 extends lJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new D$(this.times,this.values,this.getValueSize(),J)}}C8.prototype.ValueTypeName="quaternion";C8.prototype.InterpolantFactoryMethodSmooth=void 0;class l8 extends lJ{constructor(J,Q,$){super(J,Q,$)}}l8.prototype.ValueTypeName="string";l8.prototype.ValueBufferType=Array;l8.prototype.DefaultInterpolation=2300;l8.prototype.InterpolantFactoryMethodLinear=void 0;l8.prototype.InterpolantFactoryMethodSmooth=void 0;class L8 extends lJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}L8.prototype.ValueTypeName="vector";class A7{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=J8(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let H=0,Y=$.length;H!==Y;++H)Q.push(aY($[H]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,H=$.length;W!==H;++W)Q.push(lJ.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,H=[];for(let Y=0;Y<W;Y++){let X=[],K=[];X.push((Y+W-1)%W,Y,(Y+1)%W),K.push(0,1,0);let U=iY(X);if(X=SZ(X,1,U),K=SZ(K,1,U),!Z&&X[0]===0)X.push(W),K.push(K[0]);H.push(new D8(".morphTargetInfluences["+Q[Y].name+"]",X,K).scale(1/$))}return new this(J,-1,H)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=K.name.match(W);if(U&&U.length>1){let G=U[1],E=Z[G];if(!E)Z[G]=E=[];E.push(K)}}let H=[];for(let Y in Z)H.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return H}static parseAnimation(J,Q){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let $=function(G,E,q,O,M){if(q.length!==0){let k=[],N=[];if(xW(q,k,N,O),k.length!==0)M.push(new G(E,k,N))}},Z=[],W=J.name||"default",H=J.fps||30,Y=J.blendMode,X=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let E=K[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},O;for(O=0;O<E.length;O++)if(E[O].morphTargets)for(let M=0;M<E[O].morphTargets.length;M++)q[E[O].morphTargets[M]]=-1;for(let M in q){let k=[],N=[];for(let F=0;F!==E[O].morphTargets.length;++F){let _=E[O];k.push(_.time),N.push(_.morphTarget===M?1:0)}Z.push(new D8(".morphTargetInfluence["+M+"]",k,N))}X=q.length*H}else{let q=".bones["+Q[G].name+"]";$(L8,q+".position",E,"pos",Z),$(C8,q+".quaternion",E,"rot",Z),$(L8,q+".scale",E,"scl",Z)}}if(Z.length===0)return null;return new this(W,X,Z,Y)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function oY(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return D8;case"vector":case"vector2":case"vector3":case"vector4":return L8;case"color":return T7;case"quaternion":return C8;case"bool":case"boolean":return p8;case"string":return l8}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function aY(J){if(J.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=oY(J.type);if(J.times===void 0){let $=[],Z=[];xW(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var H8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class L${constructor(J,Q,$){let Z=this,W=!1,H=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.abortController=new AbortController,this.itemStart=function(U){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,H,Y)}W=!0},this.itemEnd=function(U){if(H++,Z.onProgress!==void 0)Z.onProgress(U,H,Y);if(H===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=K.length;G<E;G+=2){let q=K[G],O=K[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return O}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var bW=new L$;class $8{constructor(J){this.manager=J!==void 0?J:bW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}$8.DEFAULT_MATERIAL_NAME="__DEFAULT";var R8={};class gW extends Error{constructor(J,Q){super(J);this.response=Q}}class d8 extends $8{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=H8.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(R8[J]!==void 0){R8[J].push({onLoad:Q,onProgress:$,onError:Z});return}R8[J]=[],R8[J].push({onLoad:Q,onProgress:$,onError:Z});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(H).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream==="undefined"||K.body===void 0||K.body.getReader===void 0)return K;let U=R8[J],G=K.body.getReader(),E=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),q=E?parseInt(E):0,O=q!==0,M=0,k=new ReadableStream({start(N){F();function F(){G.read().then(({done:_,value:L})=>{if(_)N.close();else{M+=L.byteLength;let C=new ProgressEvent("progress",{lengthComputable:O,loaded:M,total:q});for(let y=0,w=U.length;y<w;y++){let T=U[y];if(T.onProgress)T.onProgress(C)}N.enqueue(L),F()}},(_)=>{N.error(_)})}}});return new Response(k)}else throw new gW(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(X){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return K.json();default:if(Y==="")return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(Y),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return K.arrayBuffer().then((O)=>q.decode(O))}}}).then((K)=>{H8.add(`file:${J}`,K);let U=R8[J];delete R8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(K)}}).catch((K)=>{let U=R8[J];if(U===void 0)throw this.manager.itemError(J),K;delete R8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var C9=new WeakMap;class V$ extends $8{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=H8.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0);else{let G=C9.get(H);if(G===void 0)G=[],C9.set(H,G);G.push({onLoad:Q,onError:Z})}return H}let Y=I9("img");function X(){if(U(),Q)Q(this);let G=C9.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}C9.delete(this),W.manager.itemEnd(J)}function K(G){if(U(),Z)Z(G);H8.remove(`image:${J}`);let E=C9.get(this)||[];for(let q=0;q<E.length;q++){let O=E[q];if(O.onError)O.onError(G)}C9.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return H8.add(`image:${J}`,Y),W.manager.itemStart(J),Y.src=J,Y}}class S7 extends $8{constructor(J){super(J)}load(J,Q,$,Z){let W=new qJ,H=new V$(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class l9 extends WJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new w0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}var NQ=new v0,jZ=new A,vZ=new A;class j7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new g0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new v0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new R6,this._frameExtents=new g0(1,1),this._viewportCount=1,this._viewports=[new s0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(jZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(jZ),vZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(vZ),Q.updateMatrixWorld(),NQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(NQ,Q.coordinateSystem,Q.reversedDepth),Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(NQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class pW extends j7{constructor(){super(new DJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=t8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class v7 extends l9{constructor(J,Q,$=0,Z=Math.PI/3,W=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(WJ.DEFAULT_UP),this.updateMatrix(),this.target=new WJ,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=H,this.map=null,this.shadow=new pW}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var yZ=new v0,Q6=new A,OQ=new A;class lW extends j7{constructor(){super(new DJ(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new g0(4,2),this._viewportCount=6,this._viewports=[new s0(2,1,1,1),new s0(0,1,1,1),new s0(3,1,1,1),new s0(1,1,1,1),new s0(3,0,1,1),new s0(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(J,Q=0){let $=this.camera,Z=this.matrix,W=J.distance||$.far;if(W!==$.far)$.far=W,$.updateProjectionMatrix();Q6.setFromMatrixPosition(J.matrixWorld),$.position.copy(Q6),OQ.copy($.position),OQ.add(this._cubeDirections[Q]),$.up.copy(this._cubeUps[Q]),$.lookAt(OQ),$.updateMatrixWorld(),Z.makeTranslation(-Q6.x,-Q6.y,-Q6.z),yZ.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yZ,$.coordinateSystem,$.reversedDepth)}}class y7 extends l9{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new lW}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class m8 extends D7{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,H=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,H=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class dW extends j7{constructor(){super(new m8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class d9 extends l9{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(WJ.DEFAULT_UP),this.updateMatrix(),this.target=new WJ,this.shadow=new dW}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class h7 extends l9{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class u8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var FQ=new WeakMap;class f7 extends $8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap==="undefined")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch==="undefined")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=H8.get(`image-bitmap:${J}`);if(H!==void 0){if(W.manager.itemStart(J),H.then){H.then((K)=>{if(FQ.has(H)===!0){if(Z)Z(FQ.get(H));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(K);return W.manager.itemEnd(J),K}});return}return setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(H8.add(`image-bitmap:${J}`,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);FQ.set(X,K),H8.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});H8.add(`image-bitmap:${J}`,X),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class z$ extends DJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var B$="\\[\\]\\.:\\/",rY=new RegExp("["+B$+"]","g"),_$="[^"+B$+"]",tY="[^"+B$.replace("\\.","")+"]",eY=/((?:WC+[\/:])*)/.source.replace("WC",_$),JX=/(WCOD+)?/.source.replace("WCOD",tY),QX=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_$),$X=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_$),ZX=new RegExp("^"+eY+JX+QX+$X+"$"),WX=["material","materials","bones","map"];class mW{constructor(J,Q,$){let Z=$||i0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class i0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||i0.parseTrackName(Q),this.node=i0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new i0(J,Q,$);else return new i0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(rY,"")}static parseTrackName(J){let Q=ZX.exec(J);if(Q===null)throw new Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(WX.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let H=0;H<W.length;H++){let Y=W[H];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=i0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let K=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let H=J[Z];if(H===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}i0.Composite=mW;i0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};i0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};i0.prototype.GetterByBindingType=[i0.prototype._getValue_direct,i0.prototype._getValue_array,i0.prototype._getValue_arrayElement,i0.prototype._getValue_toArray];i0.prototype.SetterByBindingTypeAndVersioning=[[i0.prototype._setValue_direct,i0.prototype._setValue_direct_setNeedsUpdate,i0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[i0.prototype._setValue_array,i0.prototype._setValue_array_setNeedsUpdate,i0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[i0.prototype._setValue_arrayElement,i0.prototype._setValue_arrayElement_setNeedsUpdate,i0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[i0.prototype._setValue_fromArray,i0.prototype._setValue_fromArray_setNeedsUpdate,i0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nE=new Float32Array(1);function C$(J,Q,$,Z){let W=HX(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw new Error(`Unable to determine texture byte length for ${$} format.`)}function HX(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}}));if(typeof window!=="undefined")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="179";function NH(){let J=null,Q=!1,$=null,Z=null;function W(H,Y){$(H,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function YX(J){let Q=new WeakMap;function $(X,K){let{array:U,usage:G}=X,E=U.byteLength,q=J.createBuffer();J.bindBuffer(K,q),J.bufferData(K,U,G),X.onUploadCallback();let O;if(U instanceof Float32Array)O=J.FLOAT;else if(typeof Float16Array!=="undefined"&&U instanceof Float16Array)O=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)O=J.SHORT;else if(U instanceof Uint32Array)O=J.UNSIGNED_INT;else if(U instanceof Int32Array)O=J.INT;else if(U instanceof Int8Array)O=J.BYTE;else if(U instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:O,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:E}}function Z(X,K,U){let{array:G,updateRanges:E}=K;if(J.bindBuffer(U,X),E.length===0)J.bufferSubData(U,0,G);else{E.sort((O,M)=>O.start-M.start);let q=0;for(let O=1;O<E.length;O++){let M=E[q],k=E[O];if(k.start<=M.start+M.count+1)M.count=Math.max(M.count,k.start+k.count-M.start);else++q,E[q]=k}E.length=q+1;for(let O=0,M=E.length;O<M;O++){let k=E[O];J.bufferSubData(U,k.start*G.BYTES_PER_ELEMENT,G,k.start,k.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function H(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=Q.get(X);if(K)J.deleteBuffer(K.buffer),Q.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,K),U.version=X.version}}return{get:W,remove:H,update:Y}}var XX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KX=`#ifdef USE_ALPHAHASH
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
#endif`,UX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NX=`#ifdef USE_AOMAP
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
#endif`,OX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FX=`#ifdef USE_BATCHING
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
#endif`,RX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LX=`#ifdef USE_IRIDESCENCE
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
#endif`,VX=`#ifdef USE_BUMPMAP
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
#endif`,zX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,BX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_X=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wX=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,PX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TX=`#if defined( USE_COLOR_ALPHA )
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
#endif`,AX=`#define PI 3.141592653589793
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
} // validated`,SX=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jX=`vec3 transformedNormal = objectNormal;
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
#endif`,vX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xX="gl_FragColor = linearToOutputTexel( gl_FragColor );",bX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gX=`#ifdef USE_ENVMAP
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
#endif`,pX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lX=`#ifdef USE_ENVMAP
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
#endif`,dX=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mX=`#ifdef USE_ENVMAP
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
#endif`,uX=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cX=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nX=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sX=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iX=`#ifdef USE_GRADIENTMAP
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
}`,oX=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aX=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rX=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tX=`uniform bool receiveShadow;
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
#endif`,eX=`#ifdef USE_ENVMAP
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
#endif`,JK=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$K=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WK=`PhysicalMaterial material;
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
#endif`,HK=`struct PhysicalMaterial {
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
}`,YK=`
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
#endif`,XK=`#if defined( RE_IndirectDiffuse )
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
#endif`,KK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,UK=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GK=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EK=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qK=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NK=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RK=`#if defined( USE_POINTS_UV )
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
#endif`,MK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kK=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DK=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LK=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VK=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zK=`#ifdef USE_MORPHTARGETS
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
#endif`,BK=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_K=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CK=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TK=`#ifdef USE_NORMALMAP
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
#endif`,AK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hK=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dK=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mK=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uK=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cK=`float getShadowMask() {
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
}`,nK=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sK=`#ifdef USE_SKINNING
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
#endif`,iK=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oK=`#ifdef USE_SKINNING
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
#endif`,aK=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rK=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tK=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eK=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JU=`#ifdef USE_TRANSMISSION
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
#endif`,QU=`#ifdef USE_TRANSMISSION
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
#endif`,$U=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,YU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XU=`uniform sampler2D t2D;
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
}`,KU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qU=`#include <common>
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
}`,NU=`#if DEPTH_PACKING == 3200
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
}`,OU=`#define DISTANCE
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
}`,FU=`#define DISTANCE
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
}`,RU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kU=`uniform float scale;
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
}`,DU=`uniform vec3 diffuse;
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
}`,LU=`#include <common>
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
}`,VU=`uniform vec3 diffuse;
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
}`,zU=`#define LAMBERT
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
}`,BU=`#define LAMBERT
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
}`,_U=`#define MATCAP
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
}`,CU=`#define MATCAP
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
}`,wU=`#define NORMAL
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
}`,IU=`#define NORMAL
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
}`,PU=`#define PHONG
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
}`,TU=`#define PHONG
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
}`,AU=`#define STANDARD
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
}`,SU=`#define STANDARD
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
}`,jU=`#define TOON
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
}`,vU=`#define TOON
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
}`,yU=`uniform float size;
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
}`,hU=`uniform vec3 diffuse;
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
}`,fU=`#include <common>
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
}`,xU=`uniform vec3 color;
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
}`,bU=`uniform float rotation;
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
}`,gU=`uniform vec3 diffuse;
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
}`,h0={alphahash_fragment:XX,alphahash_pars_fragment:KX,alphamap_fragment:UX,alphamap_pars_fragment:GX,alphatest_fragment:EX,alphatest_pars_fragment:qX,aomap_fragment:NX,aomap_pars_fragment:OX,batching_pars_vertex:FX,batching_vertex:RX,begin_vertex:MX,beginnormal_vertex:kX,bsdfs:DX,iridescence_fragment:LX,bumpmap_pars_fragment:VX,clipping_planes_fragment:zX,clipping_planes_pars_fragment:BX,clipping_planes_pars_vertex:_X,clipping_planes_vertex:CX,color_fragment:wX,color_pars_fragment:IX,color_pars_vertex:PX,color_vertex:TX,common:AX,cube_uv_reflection_fragment:SX,defaultnormal_vertex:jX,displacementmap_pars_vertex:vX,displacementmap_vertex:yX,emissivemap_fragment:hX,emissivemap_pars_fragment:fX,colorspace_fragment:xX,colorspace_pars_fragment:bX,envmap_fragment:gX,envmap_common_pars_fragment:pX,envmap_pars_fragment:lX,envmap_pars_vertex:dX,envmap_physical_pars_fragment:eX,envmap_vertex:mX,fog_vertex:uX,fog_pars_vertex:cX,fog_fragment:nX,fog_pars_fragment:sX,gradientmap_pars_fragment:iX,lightmap_pars_fragment:oX,lights_lambert_fragment:aX,lights_lambert_pars_fragment:rX,lights_pars_begin:tX,lights_toon_fragment:JK,lights_toon_pars_fragment:QK,lights_phong_fragment:$K,lights_phong_pars_fragment:ZK,lights_physical_fragment:WK,lights_physical_pars_fragment:HK,lights_fragment_begin:YK,lights_fragment_maps:XK,lights_fragment_end:KK,logdepthbuf_fragment:UK,logdepthbuf_pars_fragment:GK,logdepthbuf_pars_vertex:EK,logdepthbuf_vertex:qK,map_fragment:NK,map_pars_fragment:OK,map_particle_fragment:FK,map_particle_pars_fragment:RK,metalnessmap_fragment:MK,metalnessmap_pars_fragment:kK,morphinstance_vertex:DK,morphcolor_vertex:LK,morphnormal_vertex:VK,morphtarget_pars_vertex:zK,morphtarget_vertex:BK,normal_fragment_begin:_K,normal_fragment_maps:CK,normal_pars_fragment:wK,normal_pars_vertex:IK,normal_vertex:PK,normalmap_pars_fragment:TK,clearcoat_normal_fragment_begin:AK,clearcoat_normal_fragment_maps:SK,clearcoat_pars_fragment:jK,iridescence_pars_fragment:vK,opaque_fragment:yK,packing:hK,premultiplied_alpha_fragment:fK,project_vertex:xK,dithering_fragment:bK,dithering_pars_fragment:gK,roughnessmap_fragment:pK,roughnessmap_pars_fragment:lK,shadowmap_pars_fragment:dK,shadowmap_pars_vertex:mK,shadowmap_vertex:uK,shadowmask_pars_fragment:cK,skinbase_vertex:nK,skinning_pars_vertex:sK,skinning_vertex:iK,skinnormal_vertex:oK,specularmap_fragment:aK,specularmap_pars_fragment:rK,tonemapping_fragment:tK,tonemapping_pars_fragment:eK,transmission_fragment:JU,transmission_pars_fragment:QU,uv_pars_fragment:$U,uv_pars_vertex:ZU,uv_vertex:WU,worldpos_vertex:HU,background_vert:YU,background_frag:XU,backgroundCube_vert:KU,backgroundCube_frag:UU,cube_vert:GU,cube_frag:EU,depth_vert:qU,depth_frag:NU,distanceRGBA_vert:OU,distanceRGBA_frag:FU,equirect_vert:RU,equirect_frag:MU,linedashed_vert:kU,linedashed_frag:DU,meshbasic_vert:LU,meshbasic_frag:VU,meshlambert_vert:zU,meshlambert_frag:BU,meshmatcap_vert:_U,meshmatcap_frag:CU,meshnormal_vert:wU,meshnormal_frag:IU,meshphong_vert:PU,meshphong_frag:TU,meshphysical_vert:AU,meshphysical_frag:SU,meshtoon_vert:jU,meshtoon_frag:vU,points_vert:yU,points_frag:hU,shadow_vert:fU,shadow_frag:xU,sprite_vert:bU,sprite_frag:gU},$0={common:{diffuse:{value:new w0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new g0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new w0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new w0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new w0(16777215)},opacity:{value:1},center:{value:new g0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},G8={basic:{uniforms:CJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.fog]),vertexShader:h0.meshbasic_vert,fragmentShader:h0.meshbasic_frag},lambert:{uniforms:CJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,$0.lights,{emissive:{value:new w0(0)}}]),vertexShader:h0.meshlambert_vert,fragmentShader:h0.meshlambert_frag},phong:{uniforms:CJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,$0.lights,{emissive:{value:new w0(0)},specular:{value:new w0(1118481)},shininess:{value:30}}]),vertexShader:h0.meshphong_vert,fragmentShader:h0.meshphong_frag},standard:{uniforms:CJ([$0.common,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.roughnessmap,$0.metalnessmap,$0.fog,$0.lights,{emissive:{value:new w0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:h0.meshphysical_vert,fragmentShader:h0.meshphysical_frag},toon:{uniforms:CJ([$0.common,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.gradientmap,$0.fog,$0.lights,{emissive:{value:new w0(0)}}]),vertexShader:h0.meshtoon_vert,fragmentShader:h0.meshtoon_frag},matcap:{uniforms:CJ([$0.common,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,{matcap:{value:null}}]),vertexShader:h0.meshmatcap_vert,fragmentShader:h0.meshmatcap_frag},points:{uniforms:CJ([$0.points,$0.fog]),vertexShader:h0.points_vert,fragmentShader:h0.points_frag},dashed:{uniforms:CJ([$0.common,$0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:h0.linedashed_vert,fragmentShader:h0.linedashed_frag},depth:{uniforms:CJ([$0.common,$0.displacementmap]),vertexShader:h0.depth_vert,fragmentShader:h0.depth_frag},normal:{uniforms:CJ([$0.common,$0.bumpmap,$0.normalmap,$0.displacementmap,{opacity:{value:1}}]),vertexShader:h0.meshnormal_vert,fragmentShader:h0.meshnormal_frag},sprite:{uniforms:CJ([$0.sprite,$0.fog]),vertexShader:h0.sprite_vert,fragmentShader:h0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:h0.background_vert,fragmentShader:h0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:h0.backgroundCube_vert,fragmentShader:h0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:h0.cube_vert,fragmentShader:h0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:h0.equirect_vert,fragmentShader:h0.equirect_frag},distanceRGBA:{uniforms:CJ([$0.common,$0.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:h0.distanceRGBA_vert,fragmentShader:h0.distanceRGBA_frag},shadow:{uniforms:CJ([$0.lights,$0.fog,{color:{value:new w0(0)},opacity:{value:1}}]),vertexShader:h0.shadow_vert,fragmentShader:h0.shadow_frag}};G8.physical={uniforms:CJ([G8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new g0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new w0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new g0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new w0(0)},specularColor:{value:new w0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new g0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:h0.meshphysical_vert,fragmentShader:h0.meshphysical_frag};var x7={r:0,b:0,g:0},Y9=new AJ,pU=new v0;function lU(J,Q,$,Z,W,H,Y){let X=new w0(0),K=H===!0?0:1,U,G,E=null,q=0,O=null;function M(L){let C=L.isScene===!0?L.background:null;if(C&&C.isTexture)C=(L.backgroundBlurriness>0?$:Q).get(C);return C}function k(L){let C=!1,y=M(L);if(y===null)F(X,K);else if(y&&y.isColor)F(y,1),C=!0;let w=J.xr.getEnvironmentBlendMode();if(w==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(w==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||C)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function N(L,C){let y=M(C);if(y&&(y.isCubeTexture||y.mapping===Y6)){if(G===void 0)G=new _J(new f9(1,1,1),new U8({name:"BackgroundCubeMaterial",uniforms:W9(G8.backgroundCube.uniforms),vertexShader:G8.backgroundCube.vertexShader,fragmentShader:G8.backgroundCube.fragmentShader,side:xJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(Y9.copy(C.backgroundRotation),Y9.x*=-1,Y9.y*=-1,Y9.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1)Y9.y*=-1,Y9.z*=-1;if(G.material.uniforms.envMap.value=y,G.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(pU.makeRotationFromEuler(Y9)),G.material.toneMapped=x0.getTransfer(y.colorSpace)!==$J,E!==y||q!==y.version||O!==J.toneMapping)G.material.needsUpdate=!0,E=y,q=y.version,O=J.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(y&&y.isTexture){if(U===void 0)U=new _J(new k6(2,2),new U8({name:"BackgroundMaterial",uniforms:W9(G8.background.uniforms),vertexShader:G8.background.vertexShader,fragmentShader:G8.background.fragmentShader,side:v8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=y,U.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,U.material.toneMapped=x0.getTransfer(y.colorSpace)!==$J,y.matrixAutoUpdate===!0)y.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(y.matrix),E!==y||q!==y.version||O!==J.toneMapping)U.material.needsUpdate=!0,E=y,q=y.version,O=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function F(L,C){L.getRGB(x7,E$(J)),Z.buffers.color.setClear(x7.r,x7.g,x7.b,C,Y)}function _(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(L,C=1){X.set(L),K=C,F(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(L){K=L,F(X,K)},render:k,addToRenderList:N,dispose:_}}function dU(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=q(null),H=W,Y=!1;function X(V,j,m,l,c){let o=!1,u=E(l,m,j);if(H!==u)H=u,U(H.object);if(o=O(V,l,m,c),o)M(V,l,m,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(o||Y){if(Y=!1,C(V,j,m,l),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function K(){return J.createVertexArray()}function U(V){return J.bindVertexArray(V)}function G(V){return J.deleteVertexArray(V)}function E(V,j,m){let l=m.wireframe===!0,c=Z[V.id];if(c===void 0)c={},Z[V.id]=c;let o=c[j.id];if(o===void 0)o={},c[j.id]=o;let u=o[l];if(u===void 0)u=q(K()),o[l]=u;return u}function q(V){let j=[],m=[],l=[];for(let c=0;c<$;c++)j[c]=0,m[c]=0,l[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:m,attributeDivisors:l,object:V,attributes:{},index:null}}function O(V,j,m,l){let c=H.attributes,o=j.attributes,u=0,r=m.getAttributes();for(let g in r)if(r[g].location>=0){let U0=c[g],T0=o[g];if(T0===void 0){if(g==="instanceMatrix"&&V.instanceMatrix)T0=V.instanceMatrix;if(g==="instanceColor"&&V.instanceColor)T0=V.instanceColor}if(U0===void 0)return!0;if(U0.attribute!==T0)return!0;if(T0&&U0.data!==T0.data)return!0;u++}if(H.attributesNum!==u)return!0;if(H.index!==l)return!0;return!1}function M(V,j,m,l){let c={},o=j.attributes,u=0,r=m.getAttributes();for(let g in r)if(r[g].location>=0){let U0=o[g];if(U0===void 0){if(g==="instanceMatrix"&&V.instanceMatrix)U0=V.instanceMatrix;if(g==="instanceColor"&&V.instanceColor)U0=V.instanceColor}let T0={};if(T0.attribute=U0,U0&&U0.data)T0.data=U0.data;c[g]=T0,u++}H.attributes=c,H.attributesNum=u,H.index=l}function k(){let V=H.newAttributes;for(let j=0,m=V.length;j<m;j++)V[j]=0}function N(V){F(V,0)}function F(V,j){let{newAttributes:m,enabledAttributes:l,attributeDivisors:c}=H;if(m[V]=1,l[V]===0)J.enableVertexAttribArray(V),l[V]=1;if(c[V]!==j)J.vertexAttribDivisor(V,j),c[V]=j}function _(){let{newAttributes:V,enabledAttributes:j}=H;for(let m=0,l=j.length;m<l;m++)if(j[m]!==V[m])J.disableVertexAttribArray(m),j[m]=0}function L(V,j,m,l,c,o,u){if(u===!0)J.vertexAttribIPointer(V,j,m,c,o);else J.vertexAttribPointer(V,j,m,l,c,o)}function C(V,j,m,l){k();let c=l.attributes,o=m.getAttributes(),u=j.defaultAttributeValues;for(let r in o){let g=o[r];if(g.location>=0){let Z0=c[r];if(Z0===void 0){if(r==="instanceMatrix"&&V.instanceMatrix)Z0=V.instanceMatrix;if(r==="instanceColor"&&V.instanceColor)Z0=V.instanceColor}if(Z0!==void 0){let{normalized:U0,itemSize:T0}=Z0,m0=Q.get(Z0);if(m0===void 0)continue;let{buffer:HJ,type:d,bytesPerElement:W0}=m0,k0=d===J.INT||d===J.UNSIGNED_INT||Z0.gpuType===zQ;if(Z0.isInterleavedBufferAttribute){let G0=Z0.data,R0=G0.stride,u0=Z0.offset;if(G0.isInstancedInterleavedBuffer){for(let c0=0;c0<g.locationSize;c0++)F(g.location+c0,G0.meshPerAttribute);if(V.isInstancedMesh!==!0&&l._maxInstanceCount===void 0)l._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let c0=0;c0<g.locationSize;c0++)N(g.location+c0);J.bindBuffer(J.ARRAY_BUFFER,HJ);for(let c0=0;c0<g.locationSize;c0++)L(g.location+c0,T0/g.locationSize,d,U0,R0*W0,(u0+T0/g.locationSize*c0)*W0,k0)}else{if(Z0.isInstancedBufferAttribute){for(let G0=0;G0<g.locationSize;G0++)F(g.location+G0,Z0.meshPerAttribute);if(V.isInstancedMesh!==!0&&l._maxInstanceCount===void 0)l._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let G0=0;G0<g.locationSize;G0++)N(g.location+G0);J.bindBuffer(J.ARRAY_BUFFER,HJ);for(let G0=0;G0<g.locationSize;G0++)L(g.location+G0,T0/g.locationSize,d,U0,T0*W0,T0/g.locationSize*G0*W0,k0)}}else if(u!==void 0){let U0=u[r];if(U0!==void 0)switch(U0.length){case 2:J.vertexAttrib2fv(g.location,U0);break;case 3:J.vertexAttrib3fv(g.location,U0);break;case 4:J.vertexAttrib4fv(g.location,U0);break;default:J.vertexAttrib1fv(g.location,U0)}}}}_()}function y(){b();for(let V in Z){let j=Z[V];for(let m in j){let l=j[m];for(let c in l)G(l[c].object),delete l[c];delete j[m]}delete Z[V]}}function w(V){if(Z[V.id]===void 0)return;let j=Z[V.id];for(let m in j){let l=j[m];for(let c in l)G(l[c].object),delete l[c];delete j[m]}delete Z[V.id]}function T(V){for(let j in Z){let m=Z[j];if(m[V.id]===void 0)continue;let l=m[V.id];for(let c in l)G(l[c].object),delete l[c];delete m[V.id]}}function b(){if(z(),Y=!0,H===W)return;H=W,U(H.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:b,resetDefaultState:z,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:k,enableAttribute:N,disableUnusedAttributes:_}}function mU(J,Q,$){let Z;function W(U){Z=U}function H(U,G){J.drawArrays(Z,U,G),$.update(G,Z,1)}function Y(U,G,E){if(E===0)return;J.drawArraysInstanced(Z,U,G,E),$.update(G,Z,E)}function X(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let O=0;for(let M=0;M<E;M++)O+=G[M];$.update(O,Z,1)}function K(U,G,E,q){if(E===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let M=0;M<U.length;M++)Y(U[M],G[M],q[M]);else{O.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,q,0,E);let M=0;for(let k=0;k<E;k++)M+=G[k]*q[k];$.update(M,Z,1)}}this.setMode=W,this.render=H,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function uU(J,Q,$,Z){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let T=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(T){if(T!==X8&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(T){let b=T===K6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(T!==h8&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==f8&&!b)return!1;return!0}function K(T){if(T==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=K(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),N=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),_=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),C=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),y=M>0,w=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:q,maxTextures:O,maxVertexTextures:M,maxTextureSize:k,maxCubemapSize:N,maxAttributes:F,maxVertexUniforms:_,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:y,maxSamples:w}}function cU(J){let Q=this,$=null,Z=0,W=!1,H=!1,Y=new M8,X=new y0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let O=E.length!==0||q||Z!==0||W;return W=q,Z=E.length,O},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,q){$=G(E,q,0)},this.setState=function(E,q,O){let{clippingPlanes:M,clipIntersection:k,clipShadows:N}=E,F=J.get(E);if(!W||M===null||M.length===0||H&&!N)if(H)G(null);else U();else{let _=H?0:Z,L=_*4,C=F.clippingState||null;K.value=C,C=G(M,q,L,O);for(let y=0;y!==L;++y)C[y]=$[y];F.clippingState=C,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=_}};function U(){if(K.value!==$)K.value=$,K.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(E,q,O,M){let k=E!==null?E.length:0,N=null;if(k!==0){if(N=K.value,M!==!0||N===null){let F=O+k*4,_=q.matrixWorldInverse;if(X.getNormalMatrix(_),N===null||N.length<F)N=new Float32Array(F);for(let L=0,C=O;L!==k;++L,C+=4)Y.copy(E[L]).applyMatrix4(_,X),Y.normal.toArray(N,C),N[C+3]=Y.constant}K.value=N,K.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,N}}function nU(J){let Q=new WeakMap;function $(Y,X){if(X===Z7)Y.mapping=T9;else if(X===W7)Y.mapping=Q9;return Y}function Z(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===Z7||X===W7)if(Q.has(Y)){let K=Q.get(Y).texture;return $(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new N$(K.height);return U.fromEquirectangularTexture(J,Y),Q.set(Y,U),Y.addEventListener("dispose",W),$(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=Q.get(X);if(K!==void 0)Q.delete(X),K.dispose()}function H(){Q=new WeakMap}return{get:Z,dispose:H}}var u9=4,uW=[0.125,0.215,0.35,0.446,0.526,0.582],U9=20,w$=new m8,cW=new w0,I$=null,P$=0,T$=0,A$=!1,K9=(1+Math.sqrt(5))/2,m9=1/K9,nW=[new A(-K9,m9,0),new A(K9,m9,0),new A(-m9,0,K9),new A(m9,0,K9),new A(0,K9,-m9),new A(0,K9,m9),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],sU=new A;class j${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:H=256,position:Y=sU}=W;I$=this._renderer.getRenderTarget(),P$=this._renderer.getActiveCubeFace(),T$=this._renderer.getActiveMipmapLevel(),A$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=oW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=iW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(I$,P$,T$),this._renderer.xr.enabled=A$,J.scissorTest=!1,b7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===T9||J.mapping===Q9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);I$=this._renderer.getRenderTarget(),P$=this._renderer.getActiveCubeFace(),T$=this._renderer.getActiveMipmapLevel(),A$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:Q8,minFilter:Q8,generateMipmaps:!1,type:K6,format:X8,colorSpace:LJ,depthBuffer:!1},Z=sW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=sW(J,Q,$);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iU(W)),this._blurMaterial=oU(W,J,Q)}return Z}_compileMaterial(J){let Q=new _J(this._lodPlanes[0],J);this._renderer.compile(Q,w$)}_sceneToCubeUV(J,Q,$,Z,W){let X=new DJ(90,1,Q,$),K=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;if(G.getClearColor(cW),G.toneMapping=V8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let M=new K8({name:"PMREM.Background",side:xJ,depthWrite:!1,depthTest:!1}),k=new _J(new f9,M),N=!1,F=J.background;if(F){if(F.isColor)M.color.copy(F),J.background=null,N=!0}else M.color.copy(cW),N=!0;for(let _=0;_<6;_++){let L=_%3;if(L===0)X.up.set(0,K[_],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x+U[_],W.y,W.z);else if(L===1)X.up.set(0,0,K[_]),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y+U[_],W.z);else X.up.set(0,K[_],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y,W.z+U[_]);let C=this._cubeSize;if(b7(Z,L*C,_>2?C:0,C,C),G.setRenderTarget(Z),N)G.render(k,X);G.render(J,X)}k.geometry.dispose(),k.material.dispose(),G.toneMapping=q,G.autoClear=E,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===T9||J.mapping===Q9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=oW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=iW();let W=Z?this._cubemapMaterial:this._equirectMaterial,H=new _J(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let X=this._cubeSize;b7(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(H,w$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let H=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=nW[(Z-W-1)%nW.length];this._blur(J,W-1,W,H,Y)}Q.autoClear=$}_blur(J,Q,$,Z,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,$,Z,"latitudinal",W),this._halfBlur(H,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,H,Y){let X=this._renderer,K=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new _J(this._lodPlanes[Z],K),E=K.uniforms,q=this._sizeLods[$]-1,O=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*U9-1),M=W/O,k=isFinite(W)?1+Math.floor(U*M):U9;if(k>U9)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${k} samples when the maximum is set to ${U9}`);let N=[],F=0;for(let w=0;w<U9;++w){let T=w/M,b=Math.exp(-T*T/2);if(N.push(b),w===0)F+=b;else if(w<k)F+=2*b}for(let w=0;w<N.length;w++)N[w]=N[w]/F;if(E.envMap.value=J.texture,E.samples.value=k,E.weights.value=N,E.latitudinal.value=H==="latitudinal",Y)E.poleAxis.value=Y;let{_lodMax:_}=this;E.dTheta.value=O,E.mipInt.value=_-$;let L=this._sizeLods[Z],C=3*L*(Z>_-u9?Z-_+u9:0),y=4*(this._cubeSize-L);b7(Q,C,y,3*L,2*L),X.setRenderTarget(Q),X.render(G,w$)}}function iU(J){let Q=[],$=[],Z=[],W=J,H=J-u9+1+uW.length;for(let Y=0;Y<H;Y++){let X=Math.pow(2,W);$.push(X);let K=1/X;if(Y>J-u9)K=uW[Y-J+u9-1];else if(Y===0)K=0;Z.push(K);let U=1/(X-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],O=6,M=6,k=3,N=2,F=1,_=new Float32Array(k*M*O),L=new Float32Array(N*M*O),C=new Float32Array(F*M*O);for(let w=0;w<O;w++){let T=w%3*2/3-1,b=w>2?0:-1,z=[T,b,0,T+0.6666666666666666,b,0,T+0.6666666666666666,b+1,0,T,b,0,T+0.6666666666666666,b+1,0,T,b+1,0];_.set(z,k*M*w),L.set(q,N*M*w);let V=[w,w,w,w,w,w];C.set(V,F*M*w)}let y=new BJ;if(y.setAttribute("position",new GJ(_,k)),y.setAttribute("uv",new GJ(L,N)),y.setAttribute("faceIndex",new GJ(C,F)),Q.push(y),W>u9)W--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function sW(J,Q,$){let Z=new _8(J,Q,$);return Z.texture.mapping=Y6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function b7(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function oU(J,Q,$){let Z=new Float32Array(U9),W=new A(0,1,0);return new U8({name:"SphericalGaussianBlur",defines:{n:U9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:y$(),fragmentShader:`

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
		`,blending:y8,depthTest:!1,depthWrite:!1})}function iW(){return new U8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:y$(),fragmentShader:`

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
		`,blending:y8,depthTest:!1,depthWrite:!1})}function oW(){return new U8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:y$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:y8,depthTest:!1,depthWrite:!1})}function y$(){return`

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
	`}function aU(J){let Q=new WeakMap,$=null;function Z(X){if(X&&X.isTexture){let K=X.mapping,U=K===Z7||K===W7,G=K===T9||K===Q9;if(U||G){let E=Q.get(X),q=E!==void 0?E.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==q){if($===null)$=new j$(J);return E=U?$.fromEquirectangular(X,E):$.fromCubemap(X,E),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),E.texture}else if(E!==void 0)return E.texture;else{let O=X.image;if(U&&O&&O.height>0||G&&O&&W(O)){if($===null)$=new j$(J);return E=U?$.fromEquirectangular(X):$.fromCubemap(X),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),X.addEventListener("dispose",H),E.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function H(X){let K=X.target;K.removeEventListener("dispose",H);let U=Q.get(K);if(U!==void 0)Q.delete(K),U.dispose()}function Y(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:Y}}function rU(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)e8("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function tU(J,Q,$,Z){let W={},H=new WeakMap;function Y(E){let q=E.target;if(q.index!==null)Q.remove(q.index);for(let M in q.attributes)Q.remove(q.attributes[M]);q.removeEventListener("dispose",Y),delete W[q.id];let O=H.get(q);if(O)Q.remove(O),H.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function X(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",Y),W[q.id]=!0,$.memory.geometries++,q}function K(E){let q=E.attributes;for(let O in q)Q.update(q[O],J.ARRAY_BUFFER)}function U(E){let q=[],O=E.index,M=E.attributes.position,k=0;if(O!==null){let _=O.array;k=O.version;for(let L=0,C=_.length;L<C;L+=3){let y=_[L+0],w=_[L+1],T=_[L+2];q.push(y,w,w,T,T,y)}}else if(M!==void 0){let _=M.array;k=M.version;for(let L=0,C=_.length/3-1;L<C;L+=3){let y=L+0,w=L+1,T=L+2;q.push(y,w,w,T,T,y)}}else return;let N=new((X$(q))?k7:M7)(q,1);N.version=k;let F=H.get(E);if(F)Q.remove(F);H.set(E,N)}function G(E){let q=H.get(E);if(q){let O=E.index;if(O!==null){if(q.version<O.version)U(E)}}else U(E);return H.get(E)}return{get:X,update:K,getWireframeAttribute:G}}function eU(J,Q,$){let Z;function W(q){Z=q}let H,Y;function X(q){H=q.type,Y=q.bytesPerElement}function K(q,O){J.drawElements(Z,O,H,q*Y),$.update(O,Z,1)}function U(q,O,M){if(M===0)return;J.drawElementsInstanced(Z,O,H,q*Y,M),$.update(O,Z,M)}function G(q,O,M){if(M===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,O,0,H,q,0,M);let N=0;for(let F=0;F<M;F++)N+=O[F];$.update(N,Z,1)}function E(q,O,M,k){if(M===0)return;let N=Q.get("WEBGL_multi_draw");if(N===null)for(let F=0;F<q.length;F++)U(q[F]/Y,O[F],k[F]);else{N.multiDrawElementsInstancedWEBGL(Z,O,0,H,q,0,k,0,M);let F=0;for(let _=0;_<M;_++)F+=O[_]*k[_];$.update(F,Z,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function JG(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(H,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(H/3);break;case J.LINES:$.lines+=X*(H/2);break;case J.LINE_STRIP:$.lines+=X*(H-1);break;case J.LINE_LOOP:$.lines+=X*H;break;case J.POINTS:$.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function QG(J,Q,$){let Z=new WeakMap,W=new s0;function H(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=G!==void 0?G.length:0,q=Z.get(X);if(q===void 0||q.count!==E){let z=function(){T.dispose(),Z.delete(X),X.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let O=X.morphAttributes.position!==void 0,M=X.morphAttributes.normal!==void 0,k=X.morphAttributes.color!==void 0,N=X.morphAttributes.position||[],F=X.morphAttributes.normal||[],_=X.morphAttributes.color||[],L=0;if(O===!0)L=1;if(M===!0)L=2;if(k===!0)L=3;let C=X.attributes.position.count*L,y=1;if(C>Q.maxTextureSize)y=Math.ceil(C/Q.maxTextureSize),C=Q.maxTextureSize;let w=new Float32Array(C*y*4*E),T=new F7(w,C,y,E);T.type=f8,T.needsUpdate=!0;let b=L*4;for(let V=0;V<E;V++){let j=N[V],m=F[V],l=_[V],c=C*y*4*V;for(let o=0;o<j.count;o++){let u=o*b;if(O===!0)W.fromBufferAttribute(j,o),w[c+u+0]=W.x,w[c+u+1]=W.y,w[c+u+2]=W.z,w[c+u+3]=0;if(M===!0)W.fromBufferAttribute(m,o),w[c+u+4]=W.x,w[c+u+5]=W.y,w[c+u+6]=W.z,w[c+u+7]=0;if(k===!0)W.fromBufferAttribute(l,o),w[c+u+8]=W.x,w[c+u+9]=W.y,w[c+u+10]=W.z,w[c+u+11]=l.itemSize===4?W.w:1}}q={count:E,texture:T,size:new g0(C,y)},Z.set(X,q),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let O=0;for(let k=0;k<U.length;k++)O+=U[k];let M=X.morphTargetsRelative?1:1-O;K.getUniforms().setValue(J,"morphTargetBaseInfluence",M),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),K.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:H}}function $G(J,Q,$,Z){let W=new WeakMap;function H(K){let U=Z.render.frame,G=K.geometry,E=Q.get(K,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if($.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)$.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let q=K.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),$.remove(U.instanceMatrix),U.instanceColor!==null)$.remove(U.instanceColor)}return{update:H,dispose:Y}}var OH=new qJ,aW=new I7(1,1),FH=new F7,RH=new G$,MH=new L7,rW=[],tW=[],eW=new Float32Array(16),JH=new Float32Array(9),QH=new Float32Array(4);function c9(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,H=rW[W];if(H===void 0)H=new Float32Array(W),rW[W]=H;if(Q!==0){Z.toArray(H,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(H,X)}return H}function OJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function FJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function p7(J,Q){let $=tW[Q];if($===void 0)$=new Int32Array(Q),tW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function ZG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function WG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2fv(this.addr,Q),FJ($,Q)}}function HG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(OJ($,Q))return;J.uniform3fv(this.addr,Q),FJ($,Q)}}function YG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4fv(this.addr,Q),FJ($,Q)}}function XG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(OJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),FJ($,Q)}else{if(OJ($,Z))return;QH.set(Z),J.uniformMatrix2fv(this.addr,!1,QH),FJ($,Z)}}function KG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(OJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),FJ($,Q)}else{if(OJ($,Z))return;JH.set(Z),J.uniformMatrix3fv(this.addr,!1,JH),FJ($,Z)}}function UG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(OJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),FJ($,Q)}else{if(OJ($,Z))return;eW.set(Z),J.uniformMatrix4fv(this.addr,!1,eW),FJ($,Z)}}function GG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function EG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2iv(this.addr,Q),FJ($,Q)}}function qG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(OJ($,Q))return;J.uniform3iv(this.addr,Q),FJ($,Q)}}function NG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4iv(this.addr,Q),FJ($,Q)}}function OG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function FG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(OJ($,Q))return;J.uniform2uiv(this.addr,Q),FJ($,Q)}}function RG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(OJ($,Q))return;J.uniform3uiv(this.addr,Q),FJ($,Q)}}function MG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(OJ($,Q))return;J.uniform4uiv(this.addr,Q),FJ($,Q)}}function kG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)aW.compareFunction=Z$,H=aW;else H=OH;$.setTexture2D(Q||H,W)}function DG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||RH,W)}function LG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||MH,W)}function VG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||FH,W)}function zG(J){switch(J){case 5126:return ZG;case 35664:return WG;case 35665:return HG;case 35666:return YG;case 35674:return XG;case 35675:return KG;case 35676:return UG;case 5124:case 35670:return GG;case 35667:case 35671:return EG;case 35668:case 35672:return qG;case 35669:case 35673:return NG;case 5125:return OG;case 36294:return FG;case 36295:return RG;case 36296:return MG;case 35678:case 36198:case 36298:case 36306:case 35682:return kG;case 35679:case 36299:case 36307:return DG;case 35680:case 36300:case 36308:case 36293:return LG;case 36289:case 36303:case 36311:case 36292:return VG}}function BG(J,Q){J.uniform1fv(this.addr,Q)}function _G(J,Q){let $=c9(Q,this.size,2);J.uniform2fv(this.addr,$)}function CG(J,Q){let $=c9(Q,this.size,3);J.uniform3fv(this.addr,$)}function wG(J,Q){let $=c9(Q,this.size,4);J.uniform4fv(this.addr,$)}function IG(J,Q){let $=c9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function PG(J,Q){let $=c9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function TG(J,Q){let $=c9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function AG(J,Q){J.uniform1iv(this.addr,Q)}function SG(J,Q){J.uniform2iv(this.addr,Q)}function jG(J,Q){J.uniform3iv(this.addr,Q)}function vG(J,Q){J.uniform4iv(this.addr,Q)}function yG(J,Q){J.uniform1uiv(this.addr,Q)}function hG(J,Q){J.uniform2uiv(this.addr,Q)}function fG(J,Q){J.uniform3uiv(this.addr,Q)}function xG(J,Q){J.uniform4uiv(this.addr,Q)}function bG(J,Q,$){let Z=this.cache,W=Q.length,H=p7($,W);if(!OJ(Z,H))J.uniform1iv(this.addr,H),FJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||OH,H[Y])}function gG(J,Q,$){let Z=this.cache,W=Q.length,H=p7($,W);if(!OJ(Z,H))J.uniform1iv(this.addr,H),FJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture3D(Q[Y]||RH,H[Y])}function pG(J,Q,$){let Z=this.cache,W=Q.length,H=p7($,W);if(!OJ(Z,H))J.uniform1iv(this.addr,H),FJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||MH,H[Y])}function lG(J,Q,$){let Z=this.cache,W=Q.length,H=p7($,W);if(!OJ(Z,H))J.uniform1iv(this.addr,H),FJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2DArray(Q[Y]||FH,H[Y])}function dG(J){switch(J){case 5126:return BG;case 35664:return _G;case 35665:return CG;case 35666:return wG;case 35674:return IG;case 35675:return PG;case 35676:return TG;case 5124:case 35670:return AG;case 35667:case 35671:return SG;case 35668:case 35672:return jG;case 35669:case 35673:return vG;case 5125:return yG;case 36294:return hG;case 36295:return fG;case 36296:return xG;case 35678:case 36198:case 36298:case 36306:case 35682:return bG;case 35679:case 36299:case 36307:return gG;case 35680:case 36300:case 36308:case 36293:return pG;case 36289:case 36303:case 36311:case 36292:return lG}}class kH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=zG(Q.type)}}class DH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=dG(Q.type)}}class LH{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,H=Z.length;W!==H;++W){let Y=Z[W];Y.setValue(J,Q[Y.id],$)}}}var S$=/(\w+)(\])?(\[|\.)?/g;function $H(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function mG(J,Q,$){let Z=J.name,W=Z.length;S$.lastIndex=0;while(!0){let H=S$.exec(Z),Y=S$.lastIndex,X=H[1],K=H[2]==="]",U=H[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){$H($,U===void 0?new kH(X,J,Q):new DH(X,J,Q));break}else{let E=$.map[X];if(E===void 0)E=new LH(X),$H($,E);$=E}}}class L6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),H=J.getUniformLocation(Q,W.name);mG(W,H,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,H=Q.length;W!==H;++W){let Y=Q[W],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let H=J[Z];if(H.id in Q)$.push(H)}return $}}function ZH(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var uG=37297,cG=0;function nG(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let Y=W;Y<H;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var WH=new y0;function sG(J){x0._getMatrix(WH,x0.workingColorSpace,J);let Q=`mat3( ${WH.elements.map(($)=>$.toFixed(4))} )`;switch(x0.getTransfer(J)){case $$:return[Q,"LinearTransferOETF"];case $J:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function HH(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(Z&&H==="")return"";let Y=/ERROR: 0:(\d+)/.exec(H);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+H+`

`+nG(J.getShaderSource(Q),X)}else return H}function iG(J,Q){let $=sG(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}function oG(J,Q){let $;switch(Q){case KW:$="Linear";break;case UW:$="Reinhard";break;case GW:$="Cineon";break;case EW:$="ACESFilmic";break;case NW:$="AgX";break;case OW:$="Neutral";break;case qW:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var g7=new A;function aG(){x0.getLuminanceCoefficients(g7);let J=g7.x.toFixed(4),Q=g7.y.toFixed(4),$=g7.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function rG(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(D6).join(`
`)}function tG(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function eG(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let H=J.getActiveAttrib(Q,W),Y=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;$[Y]={type:H.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function D6(J){return J!==""}function YH(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function XH(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var JE=/^[ \t]*#include +<([\w\d./]+)>/gm;function v$(J){return J.replace(JE,$E)}var QE=new Map;function $E(J,Q){let $=h0[Q];if($===void 0){let Z=QE.get(Q);if(Z!==void 0)$=h0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw new Error("Can not resolve #include <"+Q+">")}return v$($)}var ZE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function KH(J){return J.replace(ZE,WE)}function WE(J,Q,$,Z){let W="";for(let H=parseInt(Q);H<parseInt($);H++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function UH(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function HE(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===kQ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===bZ)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===Y8)Q="SHADOWMAP_TYPE_VSM";return Q}function YE(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case T9:case Q9:Q="ENVMAP_TYPE_CUBE";break;case Y6:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function XE(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case Q9:Q="ENVMAP_MODE_REFRACTION";break}return Q}function KE(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case HW:Q="ENVMAP_BLENDING_MULTIPLY";break;case YW:Q="ENVMAP_BLENDING_MIX";break;case XW:Q="ENVMAP_BLENDING_ADD";break}return Q}function UE(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function GE(J,Q,$,Z){let W=J.getContext(),H=$.defines,Y=$.vertexShader,X=$.fragmentShader,K=HE($),U=YE($),G=XE($),E=KE($),q=UE($),O=rG($),M=tG(H),k=W.createProgram(),N,F,_=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(D6).join(`
`),N.length>0)N+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M].filter(D6).join(`
`),F.length>0)F+=`
`}else N=[UH($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",$.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(D6).join(`
`),F=[UH($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,M,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",$.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==V8?"#define TONE_MAPPING":"",$.toneMapping!==V8?h0.tonemapping_pars_fragment:"",$.toneMapping!==V8?oG("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",h0.colorspace_pars_fragment,iG("linearToOutputTexel",$.outputColorSpace),aG(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(D6).join(`
`);if(Y=v$(Y),Y=YH(Y,$),Y=XH(Y,$),X=v$(X),X=YH(X,$),X=XH(X,$),Y=KH(Y),X=KH(X),$.isRawShaderMaterial!==!0)_=`#version 300 es
`,N=[O,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,F=["#define varying in",$.glslVersion===W$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===W$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let L=_+N+Y,C=_+F+X,y=ZH(W,W.VERTEX_SHADER,L),w=ZH(W,W.FRAGMENT_SHADER,C);if(W.attachShader(k,y),W.attachShader(k,w),$.index0AttributeName!==void 0)W.bindAttribLocation(k,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(k,0,"position");W.linkProgram(k);function T(j){if(J.debug.checkShaderErrors){let m=W.getProgramInfoLog(k)||"",l=W.getShaderInfoLog(y)||"",c=W.getShaderInfoLog(w)||"",o=m.trim(),u=l.trim(),r=c.trim(),g=!0,Z0=!0;if(W.getProgramParameter(k,W.LINK_STATUS)===!1)if(g=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,k,y,w);else{let U0=HH(W,y,"vertex"),T0=HH(W,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(k,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+o+`
`+U0+`
`+T0)}else if(o!=="")console.warn("THREE.WebGLProgram: Program Info Log:",o);else if(u===""||r==="")Z0=!1;if(Z0)j.diagnostics={runnable:g,programLog:o,vertexShader:{log:u,prefix:N},fragmentShader:{log:r,prefix:F}}}W.deleteShader(y),W.deleteShader(w),b=new L6(W,k),z=eG(W,k)}let b;this.getUniforms=function(){if(b===void 0)T(this);return b};let z;this.getAttributes=function(){if(z===void 0)T(this);return z};let V=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(V===!1)V=W.getProgramParameter(k,uG);return V},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(k),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=cG++,this.cacheKey=Q,this.usedTimes=1,this.program=k,this.vertexShader=y,this.fragmentShader=w,this}var EE=0;class VH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),H=this._getShaderCacheForMaterial(J);if(H.has(Z)===!1)H.add(Z),Z.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new zH(J),Q.set(J,$);return $}}class zH{constructor(J){this.id=EE++,this.code=J,this.usedTimes=0}}function qE(J,Q,$,Z,W,H,Y){let X=new R7,K=new VH,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,O=W.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function N(z,V,j,m,l){let c=m.fog,o=l.geometry,u=z.isMeshStandardMaterial?m.environment:null,r=(z.isMeshStandardMaterial?$:Q).get(z.envMap||u),g=!!r&&r.mapping===Y6?r.image.height:null,Z0=M[z.type];if(z.precision!==null){if(O=W.getMaxPrecision(z.precision),O!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",O,"instead.")}let U0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,T0=U0!==void 0?U0.length:0,m0=0;if(o.morphAttributes.position!==void 0)m0=1;if(o.morphAttributes.normal!==void 0)m0=2;if(o.morphAttributes.color!==void 0)m0=3;let HJ,d,W0,k0;if(Z0){let r0=G8[Z0];HJ=r0.vertexShader,d=r0.fragmentShader}else HJ=z.vertexShader,d=z.fragmentShader,K.update(z),W0=K.getVertexShaderID(z),k0=K.getFragmentShaderID(z);let G0=J.getRenderTarget(),R0=J.state.buffers.depth.getReversed(),u0=l.isInstancedMesh===!0,c0=l.isBatchedMesh===!0,d0=!!z.map,I=!!z.matcap,QJ=!!r,_0=!!z.aoMap,o0=!!z.lightMap,z0=!!z.bumpMap,YJ=!!z.normalMap,D0=!!z.displacementMap,I0=!!z.emissiveMap,kJ=!!z.metalnessMap,RJ=!!z.roughnessMap,NJ=z.anisotropy>0,B=z.clearcoat>0,R=z.dispersion>0,h=z.iridescence>0,n=z.sheen>0,i=z.transmission>0,p=NJ&&!!z.anisotropyMap,q0=B&&!!z.clearcoatMap,J0=B&&!!z.clearcoatNormalMap,M0=B&&!!z.clearcoatRoughnessMap,A0=h&&!!z.iridescenceMap,e=h&&!!z.iridescenceThicknessMap,X0=n&&!!z.sheenColorMap,L0=n&&!!z.sheenRoughnessMap,V0=!!z.specularMap,K0=!!z.specularColorMap,f0=!!z.specularIntensityMap,P=i&&!!z.transmissionMap,H0=i&&!!z.thicknessMap,Q0=!!z.gradientMap,N0=!!z.alphaMap,a=z.alphaTest>0,s=!!z.alphaHash,F0=!!z.extensions,j0=V8;if(z.toneMapped){if(G0===null||G0.isXRRenderTarget===!0)j0=J.toneMapping}let e0={shaderID:Z0,shaderType:z.type,shaderName:z.name,vertexShader:HJ,fragmentShader:d,defines:z.defines,customVertexShaderID:W0,customFragmentShaderID:k0,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:O,batching:c0,batchingColor:c0&&l._colorsTexture!==null,instancing:u0,instancingColor:u0&&l.instanceColor!==null,instancingMorph:u0&&l.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:G0===null?J.outputColorSpace:G0.isXRRenderTarget===!0?G0.texture.colorSpace:LJ,alphaToCoverage:!!z.alphaToCoverage,map:d0,matcap:I,envMap:QJ,envMapMode:QJ&&r.mapping,envMapCubeUVHeight:g,aoMap:_0,lightMap:o0,bumpMap:z0,normalMap:YJ,displacementMap:q&&D0,emissiveMap:I0,normalMapObjectSpace:YJ&&z.normalMapType===CW,normalMapTangentSpace:YJ&&z.normalMapType===_W,metalnessMap:kJ,roughnessMap:RJ,anisotropy:NJ,anisotropyMap:p,clearcoat:B,clearcoatMap:q0,clearcoatNormalMap:J0,clearcoatRoughnessMap:M0,dispersion:R,iridescence:h,iridescenceMap:A0,iridescenceThicknessMap:e,sheen:n,sheenColorMap:X0,sheenRoughnessMap:L0,specularMap:V0,specularColorMap:K0,specularIntensityMap:f0,transmission:i,transmissionMap:P,thicknessMap:H0,gradientMap:Q0,opaque:z.transparent===!1&&z.blending===W6&&z.alphaToCoverage===!1,alphaMap:N0,alphaTest:a,alphaHash:s,combine:z.combine,mapUv:d0&&k(z.map.channel),aoMapUv:_0&&k(z.aoMap.channel),lightMapUv:o0&&k(z.lightMap.channel),bumpMapUv:z0&&k(z.bumpMap.channel),normalMapUv:YJ&&k(z.normalMap.channel),displacementMapUv:D0&&k(z.displacementMap.channel),emissiveMapUv:I0&&k(z.emissiveMap.channel),metalnessMapUv:kJ&&k(z.metalnessMap.channel),roughnessMapUv:RJ&&k(z.roughnessMap.channel),anisotropyMapUv:p&&k(z.anisotropyMap.channel),clearcoatMapUv:q0&&k(z.clearcoatMap.channel),clearcoatNormalMapUv:J0&&k(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:M0&&k(z.clearcoatRoughnessMap.channel),iridescenceMapUv:A0&&k(z.iridescenceMap.channel),iridescenceThicknessMapUv:e&&k(z.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&k(z.sheenColorMap.channel),sheenRoughnessMapUv:L0&&k(z.sheenRoughnessMap.channel),specularMapUv:V0&&k(z.specularMap.channel),specularColorMapUv:K0&&k(z.specularColorMap.channel),specularIntensityMapUv:f0&&k(z.specularIntensityMap.channel),transmissionMapUv:P&&k(z.transmissionMap.channel),thicknessMapUv:H0&&k(z.thicknessMap.channel),alphaMapUv:N0&&k(z.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(YJ||NJ),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!o.attributes.uv&&(d0||N0),fog:!!c,useFog:z.fog===!0,fogExp2:!!c&&c.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:R0,skinning:l.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:T0,morphTextureStride:m0,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:j0,decodeVideoTexture:d0&&z.map.isVideoTexture===!0&&x0.getTransfer(z.map.colorSpace)===$J,decodeVideoTextureEmissive:I0&&z.emissiveMap.isVideoTexture===!0&&x0.getTransfer(z.emissiveMap.colorSpace)===$J,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===sJ,flipSided:z.side===xJ,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:F0&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(F0&&z.extensions.multiDraw===!0||c0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return e0.vertexUv1s=U.has(1),e0.vertexUv2s=U.has(2),e0.vertexUv3s=U.has(3),U.clear(),e0}function F(z){let V=[];if(z.shaderID)V.push(z.shaderID);else V.push(z.customVertexShaderID),V.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let j in z.defines)V.push(j),V.push(z.defines[j]);if(z.isRawShaderMaterial===!1)_(V,z),L(V,z),V.push(J.outputColorSpace);return V.push(z.customProgramCacheKey),V.join()}function _(z,V){z.push(V.precision),z.push(V.outputColorSpace),z.push(V.envMapMode),z.push(V.envMapCubeUVHeight),z.push(V.mapUv),z.push(V.alphaMapUv),z.push(V.lightMapUv),z.push(V.aoMapUv),z.push(V.bumpMapUv),z.push(V.normalMapUv),z.push(V.displacementMapUv),z.push(V.emissiveMapUv),z.push(V.metalnessMapUv),z.push(V.roughnessMapUv),z.push(V.anisotropyMapUv),z.push(V.clearcoatMapUv),z.push(V.clearcoatNormalMapUv),z.push(V.clearcoatRoughnessMapUv),z.push(V.iridescenceMapUv),z.push(V.iridescenceThicknessMapUv),z.push(V.sheenColorMapUv),z.push(V.sheenRoughnessMapUv),z.push(V.specularMapUv),z.push(V.specularColorMapUv),z.push(V.specularIntensityMapUv),z.push(V.transmissionMapUv),z.push(V.thicknessMapUv),z.push(V.combine),z.push(V.fogExp2),z.push(V.sizeAttenuation),z.push(V.morphTargetsCount),z.push(V.morphAttributeCount),z.push(V.numDirLights),z.push(V.numPointLights),z.push(V.numSpotLights),z.push(V.numSpotLightMaps),z.push(V.numHemiLights),z.push(V.numRectAreaLights),z.push(V.numDirLightShadows),z.push(V.numPointLightShadows),z.push(V.numSpotLightShadows),z.push(V.numSpotLightShadowsWithMaps),z.push(V.numLightProbes),z.push(V.shadowMapType),z.push(V.toneMapping),z.push(V.numClippingPlanes),z.push(V.numClipIntersection),z.push(V.depthPacking)}function L(z,V){if(X.disableAll(),V.supportsVertexTextures)X.enable(0);if(V.instancing)X.enable(1);if(V.instancingColor)X.enable(2);if(V.instancingMorph)X.enable(3);if(V.matcap)X.enable(4);if(V.envMap)X.enable(5);if(V.normalMapObjectSpace)X.enable(6);if(V.normalMapTangentSpace)X.enable(7);if(V.clearcoat)X.enable(8);if(V.iridescence)X.enable(9);if(V.alphaTest)X.enable(10);if(V.vertexColors)X.enable(11);if(V.vertexAlphas)X.enable(12);if(V.vertexUv1s)X.enable(13);if(V.vertexUv2s)X.enable(14);if(V.vertexUv3s)X.enable(15);if(V.vertexTangents)X.enable(16);if(V.anisotropy)X.enable(17);if(V.alphaHash)X.enable(18);if(V.batching)X.enable(19);if(V.dispersion)X.enable(20);if(V.batchingColor)X.enable(21);if(V.gradientMap)X.enable(22);if(z.push(X.mask),X.disableAll(),V.fog)X.enable(0);if(V.useFog)X.enable(1);if(V.flatShading)X.enable(2);if(V.logarithmicDepthBuffer)X.enable(3);if(V.reversedDepthBuffer)X.enable(4);if(V.skinning)X.enable(5);if(V.morphTargets)X.enable(6);if(V.morphNormals)X.enable(7);if(V.morphColors)X.enable(8);if(V.premultipliedAlpha)X.enable(9);if(V.shadowMapEnabled)X.enable(10);if(V.doubleSided)X.enable(11);if(V.flipSided)X.enable(12);if(V.useDepthPacking)X.enable(13);if(V.dithering)X.enable(14);if(V.transmission)X.enable(15);if(V.sheen)X.enable(16);if(V.opaque)X.enable(17);if(V.pointsUvs)X.enable(18);if(V.decodeVideoTexture)X.enable(19);if(V.decodeVideoTextureEmissive)X.enable(20);if(V.alphaToCoverage)X.enable(21);z.push(X.mask)}function C(z){let V=M[z.type],j;if(V){let m=G8[V];j=fW.clone(m.uniforms)}else j=z.uniforms;return j}function y(z,V){let j;for(let m=0,l=G.length;m<l;m++){let c=G[m];if(c.cacheKey===V){j=c,++j.usedTimes;break}}if(j===void 0)j=new GE(J,V,z,H),G.push(j);return j}function w(z){if(--z.usedTimes===0){let V=G.indexOf(z);G[V]=G[G.length-1],G.pop(),z.destroy()}}function T(z){K.remove(z)}function b(){K.dispose()}return{getParameters:N,getProgramCacheKey:F,getUniforms:C,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:G,dispose:b}}function NE(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function W(Y,X,K){J.get(Y)[X]=K}function H(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:H}}function OE(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function GH(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function EH(){let J=[],Q=0,$=[],Z=[],W=[];function H(){Q=0,$.length=0,Z.length=0,W.length=0}function Y(E,q,O,M,k,N){let F=J[Q];if(F===void 0)F={id:E.id,object:E,geometry:q,material:O,groupOrder:M,renderOrder:E.renderOrder,z:k,group:N},J[Q]=F;else F.id=E.id,F.object=E,F.geometry=q,F.material=O,F.groupOrder=M,F.renderOrder=E.renderOrder,F.z=k,F.group=N;return Q++,F}function X(E,q,O,M,k,N){let F=Y(E,q,O,M,k,N);if(O.transmission>0)Z.push(F);else if(O.transparent===!0)W.push(F);else $.push(F)}function K(E,q,O,M,k,N){let F=Y(E,q,O,M,k,N);if(O.transmission>0)Z.unshift(F);else if(O.transparent===!0)W.unshift(F);else $.unshift(F)}function U(E,q){if($.length>1)$.sort(E||OE);if(Z.length>1)Z.sort(q||GH);if(W.length>1)W.sort(q||GH)}function G(){for(let E=Q,q=J.length;E<q;E++){let O=J[E];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:H,push:X,unshift:K,finish:G,sort:U}}function FE(){let J=new WeakMap;function Q(Z,W){let H=J.get(Z),Y;if(H===void 0)Y=new EH,J.set(Z,[Y]);else if(W>=H.length)Y=new EH,H.push(Y);else Y=H[W];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function RE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new A,color:new w0};break;case"SpotLight":$={position:new A,direction:new A,color:new w0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new A,color:new w0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new A,skyColor:new w0,groundColor:new w0};break;case"RectAreaLight":$={color:new w0,position:new A,halfWidth:new A,halfHeight:new A};break}return J[Q.id]=$,$}}}function ME(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new g0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var kE=0;function DE(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function LE(J){let Q=new RE,$=ME(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new A);let W=new A,H=new v0,Y=new v0;function X(U){let G=0,E=0,q=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let O=0,M=0,k=0,N=0,F=0,_=0,L=0,C=0,y=0,w=0,T=0;U.sort(DE);for(let z=0,V=U.length;z<V;z++){let j=U[z],m=j.color,l=j.intensity,c=j.distance,o=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)G+=m.r*l,E+=m.g*l,q+=m.b*l;else if(j.isLightProbe){for(let u=0;u<9;u++)Z.probe[u].addScaledVector(j.sh.coefficients[u],l);T++}else if(j.isDirectionalLight){let u=Q.get(j);if(u.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let r=j.shadow,g=$.get(j);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,Z.directionalShadow[O]=g,Z.directionalShadowMap[O]=o,Z.directionalShadowMatrix[O]=j.shadow.matrix,_++}Z.directional[O]=u,O++}else if(j.isSpotLight){let u=Q.get(j);u.position.setFromMatrixPosition(j.matrixWorld),u.color.copy(m).multiplyScalar(l),u.distance=c,u.coneCos=Math.cos(j.angle),u.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),u.decay=j.decay,Z.spot[k]=u;let r=j.shadow;if(j.map){if(Z.spotLightMap[y]=j.map,y++,r.updateMatrices(j),j.castShadow)w++}if(Z.spotLightMatrix[k]=r.matrix,j.castShadow){let g=$.get(j);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,Z.spotShadow[k]=g,Z.spotShadowMap[k]=o,C++}k++}else if(j.isRectAreaLight){let u=Q.get(j);u.color.copy(m).multiplyScalar(l),u.halfWidth.set(j.width*0.5,0,0),u.halfHeight.set(0,j.height*0.5,0),Z.rectArea[N]=u,N++}else if(j.isPointLight){let u=Q.get(j);if(u.color.copy(j.color).multiplyScalar(j.intensity),u.distance=j.distance,u.decay=j.decay,j.castShadow){let r=j.shadow,g=$.get(j);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,g.shadowCameraNear=r.camera.near,g.shadowCameraFar=r.camera.far,Z.pointShadow[M]=g,Z.pointShadowMap[M]=o,Z.pointShadowMatrix[M]=j.shadow.matrix,L++}Z.point[M]=u,M++}else if(j.isHemisphereLight){let u=Q.get(j);u.skyColor.copy(j.color).multiplyScalar(l),u.groundColor.copy(j.groundColor).multiplyScalar(l),Z.hemi[F]=u,F++}}if(N>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=$0.LTC_FLOAT_1,Z.rectAreaLTC2=$0.LTC_FLOAT_2;else Z.rectAreaLTC1=$0.LTC_HALF_1,Z.rectAreaLTC2=$0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=q;let b=Z.hash;if(b.directionalLength!==O||b.pointLength!==M||b.spotLength!==k||b.rectAreaLength!==N||b.hemiLength!==F||b.numDirectionalShadows!==_||b.numPointShadows!==L||b.numSpotShadows!==C||b.numSpotMaps!==y||b.numLightProbes!==T)Z.directional.length=O,Z.spot.length=k,Z.rectArea.length=N,Z.point.length=M,Z.hemi.length=F,Z.directionalShadow.length=_,Z.directionalShadowMap.length=_,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=C,Z.spotShadowMap.length=C,Z.directionalShadowMatrix.length=_,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=C+y-w,Z.spotLightMap.length=y,Z.numSpotLightShadowsWithMaps=w,Z.numLightProbes=T,b.directionalLength=O,b.pointLength=M,b.spotLength=k,b.rectAreaLength=N,b.hemiLength=F,b.numDirectionalShadows=_,b.numPointShadows=L,b.numSpotShadows=C,b.numSpotMaps=y,b.numLightProbes=T,Z.version=kE++}function K(U,G){let E=0,q=0,O=0,M=0,k=0,N=G.matrixWorldInverse;for(let F=0,_=U.length;F<_;F++){let L=U[F];if(L.isDirectionalLight){let C=Z.directional[E];C.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(N),E++}else if(L.isSpotLight){let C=Z.spot[O];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(N),C.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(N),O++}else if(L.isRectAreaLight){let C=Z.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(N),Y.identity(),H.copy(L.matrixWorld),H.premultiply(N),Y.extractRotation(H),C.halfWidth.set(L.width*0.5,0,0),C.halfHeight.set(0,L.height*0.5,0),C.halfWidth.applyMatrix4(Y),C.halfHeight.applyMatrix4(Y),M++}else if(L.isPointLight){let C=Z.point[q];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(N),q++}else if(L.isHemisphereLight){let C=Z.hemi[k];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(N),k++}}}return{setup:X,setupView:K,state:Z}}function qH(J){let Q=new LE(J),$=[],Z=[];function W(G){U.camera=G,$.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(){Q.setup($)}function K(G){Q.setupView($,G)}let U={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:H,pushShadow:Y}}function VE(J){let Q=new WeakMap;function $(W,H=0){let Y=Q.get(W),X;if(Y===void 0)X=new qH(J),Q.set(W,[X]);else if(H>=Y.length)X=new qH(J),Y.push(X);else X=Y[H];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var zE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BE=`uniform sampler2D shadow_pass;
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
}`;function _E(J,Q,$){let Z=new R6,W=new g0,H=new g0,Y=new s0,X=new O$({depthPacking:BW}),K=new F$,U={},G=$.maxTextureSize,E={[v8]:xJ,[xJ]:v8,[sJ]:sJ},q=new U8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new g0},radius:{value:4}},vertexShader:zE,fragmentShader:BE}),O=q.clone();O.defines.HORIZONTAL_PASS=1;let M=new BJ;M.setAttribute("position",new GJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new _J(M,q),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kQ;let F=this.type;this.render=function(w,T,b){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(w.length===0)return;let z=J.getRenderTarget(),V=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),m=J.state;if(m.setBlending(y8),m.buffers.depth.getReversed())m.buffers.color.setClear(0,0,0,0);else m.buffers.color.setClear(1,1,1,1);m.buffers.depth.setTest(!0),m.setScissorTest(!1);let l=F!==Y8&&this.type===Y8,c=F===Y8&&this.type!==Y8;for(let o=0,u=w.length;o<u;o++){let r=w[o],g=r.shadow;if(g===void 0){console.warn("THREE.WebGLShadowMap:",r,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;W.copy(g.mapSize);let Z0=g.getFrameExtents();if(W.multiply(Z0),H.copy(g.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/Z0.x),W.x=H.x*Z0.x,g.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/Z0.y),W.y=H.y*Z0.y,g.mapSize.y=H.y}if(g.map===null||l===!0||c===!0){let T0=this.type!==Y8?{minFilter:z8,magFilter:z8}:{};if(g.map!==null)g.map.dispose();g.map=new _8(W.x,W.y,T0),g.map.texture.name=r.name+".shadowMap",g.camera.updateProjectionMatrix()}J.setRenderTarget(g.map),J.clear();let U0=g.getViewportCount();for(let T0=0;T0<U0;T0++){let m0=g.getViewport(T0);Y.set(H.x*m0.x,H.y*m0.y,H.x*m0.z,H.y*m0.w),m.viewport(Y),g.updateMatrices(r,T0),Z=g.getFrustum(),C(T,b,g.camera,r,this.type)}if(g.isPointLightShadow!==!0&&this.type===Y8)_(g,b);g.needsUpdate=!1}F=this.type,N.needsUpdate=!1,J.setRenderTarget(z,V,j)};function _(w,T){let b=Q.update(k);if(q.defines.VSM_SAMPLES!==w.blurSamples)q.defines.VSM_SAMPLES=w.blurSamples,O.defines.VSM_SAMPLES=w.blurSamples,q.needsUpdate=!0,O.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new _8(W.x,W.y);q.uniforms.shadow_pass.value=w.map.texture,q.uniforms.resolution.value=w.mapSize,q.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(T,null,b,q,k,null),O.uniforms.shadow_pass.value=w.mapPass.texture,O.uniforms.resolution.value=w.mapSize,O.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(T,null,b,O,k,null)}function L(w,T,b,z){let V=null,j=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(j!==void 0)V=j;else if(V=b.isPointLight===!0?K:X,J.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let m=V.uuid,l=T.uuid,c=U[m];if(c===void 0)c={},U[m]=c;let o=c[l];if(o===void 0)o=V.clone(),c[l]=o,T.addEventListener("dispose",y);V=o}if(V.visible=T.visible,V.wireframe=T.wireframe,z===Y8)V.side=T.shadowSide!==null?T.shadowSide:T.side;else V.side=T.shadowSide!==null?T.shadowSide:E[T.side];if(V.alphaMap=T.alphaMap,V.alphaTest=T.alphaToCoverage===!0?0.5:T.alphaTest,V.map=T.map,V.clipShadows=T.clipShadows,V.clippingPlanes=T.clippingPlanes,V.clipIntersection=T.clipIntersection,V.displacementMap=T.displacementMap,V.displacementScale=T.displacementScale,V.displacementBias=T.displacementBias,V.wireframeLinewidth=T.wireframeLinewidth,V.linewidth=T.linewidth,b.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let m=J.properties.get(V);m.light=b}return V}function C(w,T,b,z,V){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&V===Y8)&&(!w.frustumCulled||Z.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let l=Q.update(w),c=w.material;if(Array.isArray(c)){let o=l.groups;for(let u=0,r=o.length;u<r;u++){let g=o[u],Z0=c[g.materialIndex];if(Z0&&Z0.visible){let U0=L(w,Z0,z,V);w.onBeforeShadow(J,w,T,b,l,U0,g),J.renderBufferDirect(b,null,l,U0,w,g),w.onAfterShadow(J,w,T,b,l,U0,g)}}}else if(c.visible){let o=L(w,c,z,V);w.onBeforeShadow(J,w,T,b,l,o,null),J.renderBufferDirect(b,null,l,o,w,null),w.onAfterShadow(J,w,T,b,l,o,null)}}}let m=w.children;for(let l=0,c=m.length;l<c;l++)C(m[l],T,b,z,V)}function y(w){w.target.removeEventListener("dispose",y);for(let b in U){let z=U[b],V=w.target.uuid;if(V in z)z[V].dispose(),delete z[V]}}}var CE={[a6]:r6,[t6]:Q7,[e6]:$7,[H6]:J7,[r6]:a6,[Q7]:t6,[$7]:e6,[J7]:H6};function wE(J,Q){function $(){let P=!1,H0=new s0,Q0=null,N0=new s0(0,0,0,0);return{setMask:function(a){if(Q0!==a&&!P)J.colorMask(a,a,a,a),Q0=a},setLocked:function(a){P=a},setClear:function(a,s,F0,j0,e0){if(e0===!0)a*=j0,s*=j0,F0*=j0;if(H0.set(a,s,F0,j0),N0.equals(H0)===!1)J.clearColor(a,s,F0,j0),N0.copy(H0)},reset:function(){P=!1,Q0=null,N0.set(-1,0,0,0)}}}function Z(){let P=!1,H0=!1,Q0=null,N0=null,a=null;return{setReversed:function(s){if(H0!==s){let F0=Q.get("EXT_clip_control");if(s)F0.clipControlEXT(F0.LOWER_LEFT_EXT,F0.ZERO_TO_ONE_EXT);else F0.clipControlEXT(F0.LOWER_LEFT_EXT,F0.NEGATIVE_ONE_TO_ONE_EXT);H0=s;let j0=a;a=null,this.setClear(j0)}},getReversed:function(){return H0},setTest:function(s){if(s)G0(J.DEPTH_TEST);else R0(J.DEPTH_TEST)},setMask:function(s){if(Q0!==s&&!P)J.depthMask(s),Q0=s},setFunc:function(s){if(H0)s=CE[s];if(N0!==s){switch(s){case a6:J.depthFunc(J.NEVER);break;case r6:J.depthFunc(J.ALWAYS);break;case t6:J.depthFunc(J.LESS);break;case H6:J.depthFunc(J.LEQUAL);break;case e6:J.depthFunc(J.EQUAL);break;case J7:J.depthFunc(J.GEQUAL);break;case Q7:J.depthFunc(J.GREATER);break;case $7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}N0=s}},setLocked:function(s){P=s},setClear:function(s){if(a!==s){if(H0)s=1-s;J.clearDepth(s),a=s}},reset:function(){P=!1,Q0=null,N0=null,a=null,H0=!1}}}function W(){let P=!1,H0=null,Q0=null,N0=null,a=null,s=null,F0=null,j0=null,e0=null;return{setTest:function(r0){if(!P)if(r0)G0(J.STENCIL_TEST);else R0(J.STENCIL_TEST)},setMask:function(r0){if(H0!==r0&&!P)J.stencilMask(r0),H0=r0},setFunc:function(r0,Z8,W8){if(Q0!==r0||N0!==Z8||a!==W8)J.stencilFunc(r0,Z8,W8),Q0=r0,N0=Z8,a=W8},setOp:function(r0,Z8,W8){if(s!==r0||F0!==Z8||j0!==W8)J.stencilOp(r0,Z8,W8),s=r0,F0=Z8,j0=W8},setLocked:function(r0){P=r0},setClear:function(r0){if(e0!==r0)J.clearStencil(r0),e0=r0},reset:function(){P=!1,H0=null,Q0=null,N0=null,a=null,s=null,F0=null,j0=null,e0=null}}}let H=new $,Y=new Z,X=new W,K=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,O=[],M=null,k=!1,N=null,F=null,_=null,L=null,C=null,y=null,w=null,T=new w0(0,0,0),b=0,z=!1,V=null,j=null,m=null,l=null,c=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,r=0,g=J.getParameter(J.VERSION);if(g.indexOf("WebGL")!==-1)r=parseFloat(/^WebGL (\d)/.exec(g)[1]),u=r>=1;else if(g.indexOf("OpenGL ES")!==-1)r=parseFloat(/^OpenGL ES (\d)/.exec(g)[1]),u=r>=2;let Z0=null,U0={},T0=J.getParameter(J.SCISSOR_BOX),m0=J.getParameter(J.VIEWPORT),HJ=new s0().fromArray(T0),d=new s0().fromArray(m0);function W0(P,H0,Q0,N0){let a=new Uint8Array(4),s=J.createTexture();J.bindTexture(P,s),J.texParameteri(P,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(P,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let F0=0;F0<Q0;F0++)if(P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texImage3D(H0,0,J.RGBA,1,1,N0,0,J.RGBA,J.UNSIGNED_BYTE,a);else J.texImage2D(H0+F0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,a);return s}let k0={};k0[J.TEXTURE_2D]=W0(J.TEXTURE_2D,J.TEXTURE_2D,1),k0[J.TEXTURE_CUBE_MAP]=W0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),k0[J.TEXTURE_2D_ARRAY]=W0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),k0[J.TEXTURE_3D]=W0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),G0(J.DEPTH_TEST),Y.setFunc(H6),z0(!1),YJ(MQ),G0(J.CULL_FACE),_0(y8);function G0(P){if(G[P]!==!0)J.enable(P),G[P]=!0}function R0(P){if(G[P]!==!1)J.disable(P),G[P]=!1}function u0(P,H0){if(E[P]!==H0){if(J.bindFramebuffer(P,H0),E[P]=H0,P===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=H0;if(P===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=H0;return!0}return!1}function c0(P,H0){let Q0=O,N0=!1;if(P){if(Q0=q.get(H0),Q0===void 0)Q0=[],q.set(H0,Q0);let a=P.textures;if(Q0.length!==a.length||Q0[0]!==J.COLOR_ATTACHMENT0){for(let s=0,F0=a.length;s<F0;s++)Q0[s]=J.COLOR_ATTACHMENT0+s;Q0.length=a.length,N0=!0}}else if(Q0[0]!==J.BACK)Q0[0]=J.BACK,N0=!0;if(N0)J.drawBuffers(Q0)}function d0(P){if(M!==P)return J.useProgram(P),M=P,!0;return!1}let I={[P9]:J.FUNC_ADD,[pZ]:J.FUNC_SUBTRACT,[lZ]:J.FUNC_REVERSE_SUBTRACT};I[dZ]=J.MIN,I[mZ]=J.MAX;let QJ={[uZ]:J.ZERO,[cZ]:J.ONE,[nZ]:J.SRC_COLOR,[iZ]:J.SRC_ALPHA,[JW]:J.SRC_ALPHA_SATURATE,[tZ]:J.DST_COLOR,[aZ]:J.DST_ALPHA,[sZ]:J.ONE_MINUS_SRC_COLOR,[oZ]:J.ONE_MINUS_SRC_ALPHA,[eZ]:J.ONE_MINUS_DST_COLOR,[rZ]:J.ONE_MINUS_DST_ALPHA,[QW]:J.CONSTANT_COLOR,[$W]:J.ONE_MINUS_CONSTANT_COLOR,[ZW]:J.CONSTANT_ALPHA,[WW]:J.ONE_MINUS_CONSTANT_ALPHA};function _0(P,H0,Q0,N0,a,s,F0,j0,e0,r0){if(P===y8){if(k===!0)R0(J.BLEND),k=!1;return}if(k===!1)G0(J.BLEND),k=!0;if(P!==gZ){if(P!==N||r0!==z){if(F!==P9||C!==P9)J.blendEquation(J.FUNC_ADD),F=P9,C=P9;if(r0)switch(P){case W6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case DQ:J.blendFunc(J.ONE,J.ONE);break;case LQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case VQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case W6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case DQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case LQ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case VQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,L=null,y=null,w=null,T.set(0,0,0),b=0,N=P,z=r0}return}if(a=a||H0,s=s||Q0,F0=F0||N0,H0!==F||a!==C)J.blendEquationSeparate(I[H0],I[a]),F=H0,C=a;if(Q0!==_||N0!==L||s!==y||F0!==w)J.blendFuncSeparate(QJ[Q0],QJ[N0],QJ[s],QJ[F0]),_=Q0,L=N0,y=s,w=F0;if(j0.equals(T)===!1||e0!==b)J.blendColor(j0.r,j0.g,j0.b,e0),T.copy(j0),b=e0;N=P,z=!1}function o0(P,H0){P.side===sJ?R0(J.CULL_FACE):G0(J.CULL_FACE);let Q0=P.side===xJ;if(H0)Q0=!Q0;z0(Q0),P.blending===W6&&P.transparent===!1?_0(y8):_0(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),Y.setFunc(P.depthFunc),Y.setTest(P.depthTest),Y.setMask(P.depthWrite),H.setMask(P.colorWrite);let N0=P.stencilWrite;if(X.setTest(N0),N0)X.setMask(P.stencilWriteMask),X.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),X.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);I0(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?G0(J.SAMPLE_ALPHA_TO_COVERAGE):R0(J.SAMPLE_ALPHA_TO_COVERAGE)}function z0(P){if(V!==P){if(P)J.frontFace(J.CW);else J.frontFace(J.CCW);V=P}}function YJ(P){if(P!==fZ){if(G0(J.CULL_FACE),P!==j)if(P===MQ)J.cullFace(J.BACK);else if(P===xZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else R0(J.CULL_FACE);j=P}function D0(P){if(P!==m){if(u)J.lineWidth(P);m=P}}function I0(P,H0,Q0){if(P){if(G0(J.POLYGON_OFFSET_FILL),l!==H0||c!==Q0)J.polygonOffset(H0,Q0),l=H0,c=Q0}else R0(J.POLYGON_OFFSET_FILL)}function kJ(P){if(P)G0(J.SCISSOR_TEST);else R0(J.SCISSOR_TEST)}function RJ(P){if(P===void 0)P=J.TEXTURE0+o-1;if(Z0!==P)J.activeTexture(P),Z0=P}function NJ(P,H0,Q0){if(Q0===void 0)if(Z0===null)Q0=J.TEXTURE0+o-1;else Q0=Z0;let N0=U0[Q0];if(N0===void 0)N0={type:void 0,texture:void 0},U0[Q0]=N0;if(N0.type!==P||N0.texture!==H0){if(Z0!==Q0)J.activeTexture(Q0),Z0=Q0;J.bindTexture(P,H0||k0[P]),N0.type=P,N0.texture=H0}}function B(){let P=U0[Z0];if(P!==void 0&&P.type!==void 0)J.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function R(){try{J.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function h(){try{J.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function n(){try{J.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function i(){try{J.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function p(){try{J.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q0(){try{J.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J0(){try{J.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M0(){try{J.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A0(){try{J.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function e(){try{J.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X0(P){if(HJ.equals(P)===!1)J.scissor(P.x,P.y,P.z,P.w),HJ.copy(P)}function L0(P){if(d.equals(P)===!1)J.viewport(P.x,P.y,P.z,P.w),d.copy(P)}function V0(P,H0){let Q0=U.get(H0);if(Q0===void 0)Q0=new WeakMap,U.set(H0,Q0);let N0=Q0.get(P);if(N0===void 0)N0=J.getUniformBlockIndex(H0,P.name),Q0.set(P,N0)}function K0(P,H0){let N0=U.get(H0).get(P);if(K.get(H0)!==N0)J.uniformBlockBinding(H0,N0,P.__bindingPointIndex),K.set(H0,N0)}function f0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},Z0=null,U0={},E={},q=new WeakMap,O=[],M=null,k=!1,N=null,F=null,_=null,L=null,C=null,y=null,w=null,T=new w0(0,0,0),b=0,z=!1,V=null,j=null,m=null,l=null,c=null,HJ.set(0,0,J.canvas.width,J.canvas.height),d.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),X.reset()}return{buffers:{color:H,depth:Y,stencil:X},enable:G0,disable:R0,bindFramebuffer:u0,drawBuffers:c0,useProgram:d0,setBlending:_0,setMaterial:o0,setFlipSided:z0,setCullFace:YJ,setLineWidth:D0,setPolygonOffset:I0,setScissorTest:kJ,activeTexture:RJ,bindTexture:NJ,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:h,texImage2D:A0,texImage3D:e,updateUBOMapping:V0,uniformBlockBinding:K0,texStorage2D:J0,texStorage3D:M0,texSubImage2D:n,texSubImage3D:i,compressedTexSubImage2D:p,compressedTexSubImage3D:q0,scissor:X0,viewport:L0,reset:f0}}function IE(J,Q,$,Z,W,H,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator==="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new g0,G=new WeakMap,E,q=new WeakMap,O=!1;try{O=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function M(B,R){return O?new OffscreenCanvas(B,R):I9("canvas")}function k(B,R,h){let n=1,i=NJ(B);if(i.width>h||i.height>h)n=h/Math.max(i.width,i.height);if(n<1)if(typeof HTMLImageElement!=="undefined"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&B instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&B instanceof ImageBitmap||typeof VideoFrame!=="undefined"&&B instanceof VideoFrame){let p=Math.floor(n*i.width),q0=Math.floor(n*i.height);if(E===void 0)E=M(p,q0);let J0=R?M(p,q0):E;return J0.width=p,J0.height=q0,J0.getContext("2d").drawImage(B,0,0,p,q0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+i.width+"x"+i.height+") to ("+p+"x"+q0+")."),J0}else{if("data"in B)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+i.width+"x"+i.height+").");return B}return B}function N(B){return B.generateMipmaps}function F(B){J.generateMipmap(B)}function _(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,R,h,n,i=!1){if(B!==null){if(J[B]!==void 0)return J[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let p=R;if(R===J.RED){if(h===J.FLOAT)p=J.R32F;if(h===J.HALF_FLOAT)p=J.R16F;if(h===J.UNSIGNED_BYTE)p=J.R8}if(R===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.R8UI;if(h===J.UNSIGNED_SHORT)p=J.R16UI;if(h===J.UNSIGNED_INT)p=J.R32UI;if(h===J.BYTE)p=J.R8I;if(h===J.SHORT)p=J.R16I;if(h===J.INT)p=J.R32I}if(R===J.RG){if(h===J.FLOAT)p=J.RG32F;if(h===J.HALF_FLOAT)p=J.RG16F;if(h===J.UNSIGNED_BYTE)p=J.RG8}if(R===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RG8UI;if(h===J.UNSIGNED_SHORT)p=J.RG16UI;if(h===J.UNSIGNED_INT)p=J.RG32UI;if(h===J.BYTE)p=J.RG8I;if(h===J.SHORT)p=J.RG16I;if(h===J.INT)p=J.RG32I}if(R===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RGB8UI;if(h===J.UNSIGNED_SHORT)p=J.RGB16UI;if(h===J.UNSIGNED_INT)p=J.RGB32UI;if(h===J.BYTE)p=J.RGB8I;if(h===J.SHORT)p=J.RGB16I;if(h===J.INT)p=J.RGB32I}if(R===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)p=J.RGBA16UI;if(h===J.UNSIGNED_INT)p=J.RGBA32UI;if(h===J.BYTE)p=J.RGBA8I;if(h===J.SHORT)p=J.RGBA16I;if(h===J.INT)p=J.RGBA32I}if(R===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)p=J.RGB9_E5}if(R===J.RGBA){let q0=i?$$:x0.getTransfer(n);if(h===J.FLOAT)p=J.RGBA32F;if(h===J.HALF_FLOAT)p=J.RGBA16F;if(h===J.UNSIGNED_BYTE)p=q0===$J?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)p=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)p=J.RGB5_A1}if(p===J.R16F||p===J.R32F||p===J.RG16F||p===J.RG32F||p===J.RGBA16F||p===J.RGBA32F)Q.get("EXT_color_buffer_float");return p}function C(B,R){let h;if(B){if(R===null||R===j9||R===v9)h=J.DEPTH24_STENCIL8;else if(R===f8)h=J.DEPTH32F_STENCIL8;else if(R===X6)h=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===j9||R===v9)h=J.DEPTH_COMPONENT24;else if(R===f8)h=J.DEPTH_COMPONENT32F;else if(R===X6)h=J.DEPTH_COMPONENT16;return h}function y(B,R){if(N(B)===!0||B.isFramebufferTexture&&B.minFilter!==z8&&B.minFilter!==Q8)return Math.log2(Math.max(R.width,R.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return R.mipmaps.length;else return 1}function w(B){let R=B.target;if(R.removeEventListener("dispose",w),b(R),R.isVideoTexture)G.delete(R)}function T(B){let R=B.target;R.removeEventListener("dispose",T),V(R)}function b(B){let R=Z.get(B);if(R.__webglInit===void 0)return;let h=B.source,n=q.get(h);if(n){let i=n[R.__cacheKey];if(i.usedTimes--,i.usedTimes===0)z(B);if(Object.keys(n).length===0)q.delete(h)}Z.remove(B)}function z(B){let R=Z.get(B);J.deleteTexture(R.__webglTexture);let h=B.source,n=q.get(h);delete n[R.__cacheKey],Y.memory.textures--}function V(B){let R=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let n=0;n<6;n++){if(Array.isArray(R.__webglFramebuffer[n]))for(let i=0;i<R.__webglFramebuffer[n].length;i++)J.deleteFramebuffer(R.__webglFramebuffer[n][i]);else J.deleteFramebuffer(R.__webglFramebuffer[n]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[n])}else{if(Array.isArray(R.__webglFramebuffer))for(let n=0;n<R.__webglFramebuffer.length;n++)J.deleteFramebuffer(R.__webglFramebuffer[n]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let n=0;n<R.__webglColorRenderbuffer.length;n++)if(R.__webglColorRenderbuffer[n])J.deleteRenderbuffer(R.__webglColorRenderbuffer[n])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let h=B.textures;for(let n=0,i=h.length;n<i;n++){let p=Z.get(h[n]);if(p.__webglTexture)J.deleteTexture(p.__webglTexture),Y.memory.textures--;Z.remove(h[n])}Z.remove(B)}let j=0;function m(){j=0}function l(){let B=j;if(B>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+W.maxTextures);return j+=1,B}function c(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function o(B,R){let h=Z.get(B);if(B.isVideoTexture)kJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&h.__version!==B.version){let n=B.image;if(n===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(n.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k0(h,B,R);return}}else if(B.isExternalTexture)h.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+R)}function u(B,R){let h=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&h.__version!==B.version){k0(h,B,R);return}$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+R)}function r(B,R){let h=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&h.__version!==B.version){k0(h,B,R);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+R)}function g(B,R){let h=Z.get(B);if(B.version>0&&h.__version!==B.version){G0(h,B,R);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+R)}let Z0={[A9]:J.REPEAT,[H7]:J.CLAMP_TO_EDGE,[Y7]:J.MIRRORED_REPEAT},U0={[z8]:J.NEAREST,[X7]:J.NEAREST_MIPMAP_NEAREST,[$9]:J.NEAREST_MIPMAP_LINEAR,[Q8]:J.LINEAR,[S9]:J.LINEAR_MIPMAP_NEAREST,[B8]:J.LINEAR_MIPMAP_LINEAR},T0={[wW]:J.NEVER,[jW]:J.ALWAYS,[IW]:J.LESS,[Z$]:J.LEQUAL,[PW]:J.EQUAL,[SW]:J.GEQUAL,[TW]:J.GREATER,[AW]:J.NOTEQUAL};function m0(B,R){if(R.type===f8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===Q8||R.magFilter===S9||R.magFilter===$9||R.magFilter===B8||R.minFilter===Q8||R.minFilter===S9||R.minFilter===$9||R.minFilter===B8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,Z0[R.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,Z0[R.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,Z0[R.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,U0[R.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,U0[R.minFilter]),R.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,T0[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===z8)return;if(R.minFilter!==$9&&R.minFilter!==B8)return;if(R.type===f8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||Z.get(R).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),Z.get(R).__currentAnisotropy=R.anisotropy}}}function HJ(B,R){let h=!1;if(B.__webglInit===void 0)B.__webglInit=!0,R.addEventListener("dispose",w);let n=R.source,i=q.get(n);if(i===void 0)i={},q.set(n,i);let p=c(R);if(p!==B.__cacheKey){if(i[p]===void 0)i[p]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,h=!0;i[p].usedTimes++;let q0=i[B.__cacheKey];if(q0!==void 0){if(i[B.__cacheKey].usedTimes--,q0.usedTimes===0)z(R)}B.__cacheKey=p,B.__webglTexture=i[p].texture}return h}function d(B,R,h){return Math.floor(Math.floor(B/h)/R)}function W0(B,R,h,n){let p=B.updateRanges;if(p.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,h,n,R.data);else{p.sort((e,X0)=>e.start-X0.start);let q0=0;for(let e=1;e<p.length;e++){let X0=p[q0],L0=p[e],V0=X0.start+X0.count,K0=d(L0.start,R.width,4),f0=d(X0.start,R.width,4);if(L0.start<=V0+1&&K0===f0&&d(L0.start+L0.count-1,R.width,4)===K0)X0.count=Math.max(X0.count,L0.start+L0.count-X0.start);else++q0,p[q0]=L0}p.length=q0+1;let J0=J.getParameter(J.UNPACK_ROW_LENGTH),M0=J.getParameter(J.UNPACK_SKIP_PIXELS),A0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let e=0,X0=p.length;e<X0;e++){let L0=p[e],V0=Math.floor(L0.start/4),K0=Math.ceil(L0.count/4),f0=V0%R.width,P=Math.floor(V0/R.width),H0=K0,Q0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,f0),J.pixelStorei(J.UNPACK_SKIP_ROWS,P),$.texSubImage2D(J.TEXTURE_2D,0,f0,P,H0,1,h,n,R.data)}B.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,J0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,M0),J.pixelStorei(J.UNPACK_SKIP_ROWS,A0)}}function k0(B,R,h){let n=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)n=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)n=J.TEXTURE_3D;let i=HJ(B,R),p=R.source;$.bindTexture(n,B.__webglTexture,J.TEXTURE0+h);let q0=Z.get(p);if(p.version!==q0.__version||i===!0){$.activeTexture(J.TEXTURE0+h);let J0=x0.getPrimaries(x0.workingColorSpace),M0=R.colorSpace===Z9?null:x0.getPrimaries(R.colorSpace),A0=R.colorSpace===Z9||J0===M0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,A0);let e=k(R.image,!1,W.maxTextureSize);e=RJ(R,e);let X0=H.convert(R.format,R.colorSpace),L0=H.convert(R.type),V0=L(R.internalFormat,X0,L0,R.colorSpace,R.isVideoTexture);m0(n,R);let K0,f0=R.mipmaps,P=R.isVideoTexture!==!0,H0=q0.__version===void 0||i===!0,Q0=p.dataReady,N0=y(R,e);if(R.isDepthTexture){if(V0=C(R.format===U6,R.type),H0)if(P)$.texStorage2D(J.TEXTURE_2D,1,V0,e.width,e.height);else $.texImage2D(J.TEXTURE_2D,0,V0,e.width,e.height,0,X0,L0,null)}else if(R.isDataTexture)if(f0.length>0){if(P&&H0)$.texStorage2D(J.TEXTURE_2D,N0,V0,f0[0].width,f0[0].height);for(let a=0,s=f0.length;a<s;a++)if(K0=f0[a],P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,K0.width,K0.height,X0,L0,K0.data)}else $.texImage2D(J.TEXTURE_2D,a,V0,K0.width,K0.height,0,X0,L0,K0.data);R.generateMipmaps=!1}else if(P){if(H0)$.texStorage2D(J.TEXTURE_2D,N0,V0,e.width,e.height);if(Q0)W0(R,e,X0,L0)}else $.texImage2D(J.TEXTURE_2D,0,V0,e.width,e.height,0,X0,L0,e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(P&&H0)$.texStorage3D(J.TEXTURE_2D_ARRAY,N0,V0,f0[0].width,f0[0].height,e.depth);for(let a=0,s=f0.length;a<s;a++)if(K0=f0[a],R.format!==X8)if(X0!==null)if(P){if(Q0)if(R.layerUpdates.size>0){let F0=C$(K0.width,K0.height,R.format,R.type);for(let j0 of R.layerUpdates){let e0=K0.data.subarray(j0*F0/K0.data.BYTES_PER_ELEMENT,(j0+1)*F0/K0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,j0,K0.width,K0.height,1,X0,e0)}R.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,K0.width,K0.height,e.depth,X0,K0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,a,V0,K0.width,K0.height,e.depth,0,K0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P){if(Q0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,K0.width,K0.height,e.depth,X0,L0,K0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,a,V0,K0.width,K0.height,e.depth,0,X0,L0,K0.data)}else{if(P&&H0)$.texStorage2D(J.TEXTURE_2D,N0,V0,f0[0].width,f0[0].height);for(let a=0,s=f0.length;a<s;a++)if(K0=f0[a],R.format!==X8)if(X0!==null)if(P){if(Q0)$.compressedTexSubImage2D(J.TEXTURE_2D,a,0,0,K0.width,K0.height,X0,K0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,a,V0,K0.width,K0.height,0,K0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,K0.width,K0.height,X0,L0,K0.data)}else $.texImage2D(J.TEXTURE_2D,a,V0,K0.width,K0.height,0,X0,L0,K0.data)}else if(R.isDataArrayTexture)if(P){if(H0)$.texStorage3D(J.TEXTURE_2D_ARRAY,N0,V0,e.width,e.height,e.depth);if(Q0)if(R.layerUpdates.size>0){let a=C$(e.width,e.height,R.format,R.type);for(let s of R.layerUpdates){let F0=e.data.subarray(s*a/e.data.BYTES_PER_ELEMENT,(s+1)*a/e.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,s,e.width,e.height,1,X0,L0,F0)}R.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,X0,L0,e.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,V0,e.width,e.height,e.depth,0,X0,L0,e.data);else if(R.isData3DTexture)if(P){if(H0)$.texStorage3D(J.TEXTURE_3D,N0,V0,e.width,e.height,e.depth);if(Q0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,X0,L0,e.data)}else $.texImage3D(J.TEXTURE_3D,0,V0,e.width,e.height,e.depth,0,X0,L0,e.data);else if(R.isFramebufferTexture){if(H0)if(P)$.texStorage2D(J.TEXTURE_2D,N0,V0,e.width,e.height);else{let{width:a,height:s}=e;for(let F0=0;F0<N0;F0++)$.texImage2D(J.TEXTURE_2D,F0,V0,a,s,0,X0,L0,null),a>>=1,s>>=1}}else if(f0.length>0){if(P&&H0){let a=NJ(f0[0]);$.texStorage2D(J.TEXTURE_2D,N0,V0,a.width,a.height)}for(let a=0,s=f0.length;a<s;a++)if(K0=f0[a],P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,X0,L0,K0)}else $.texImage2D(J.TEXTURE_2D,a,V0,X0,L0,K0);R.generateMipmaps=!1}else if(P){if(H0){let a=NJ(e);$.texStorage2D(J.TEXTURE_2D,N0,V0,a.width,a.height)}if(Q0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,X0,L0,e)}else $.texImage2D(J.TEXTURE_2D,0,V0,X0,L0,e);if(N(R))F(n);if(q0.__version=p.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function G0(B,R,h){if(R.image.length!==6)return;let n=HJ(B,R),i=R.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+h);let p=Z.get(i);if(i.version!==p.__version||n===!0){$.activeTexture(J.TEXTURE0+h);let q0=x0.getPrimaries(x0.workingColorSpace),J0=R.colorSpace===Z9?null:x0.getPrimaries(R.colorSpace),M0=R.colorSpace===Z9||q0===J0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,M0);let A0=R.isCompressedTexture||R.image[0].isCompressedTexture,e=R.image[0]&&R.image[0].isDataTexture,X0=[];for(let s=0;s<6;s++){if(!A0&&!e)X0[s]=k(R.image[s],!0,W.maxCubemapSize);else X0[s]=e?R.image[s].image:R.image[s];X0[s]=RJ(R,X0[s])}let L0=X0[0],V0=H.convert(R.format,R.colorSpace),K0=H.convert(R.type),f0=L(R.internalFormat,V0,K0,R.colorSpace),P=R.isVideoTexture!==!0,H0=p.__version===void 0||n===!0,Q0=i.dataReady,N0=y(R,L0);m0(J.TEXTURE_CUBE_MAP,R);let a;if(A0){if(P&&H0)$.texStorage2D(J.TEXTURE_CUBE_MAP,N0,f0,L0.width,L0.height);for(let s=0;s<6;s++){a=X0[s].mipmaps;for(let F0=0;F0<a.length;F0++){let j0=a[F0];if(R.format!==X8)if(V0!==null)if(P){if(Q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0,0,0,j0.width,j0.height,V0,j0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0,f0,j0.width,j0.height,0,j0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0,0,0,j0.width,j0.height,V0,K0,j0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0,f0,j0.width,j0.height,0,V0,K0,j0.data)}}}else{if(a=R.mipmaps,P&&H0){if(a.length>0)N0++;let s=NJ(X0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,N0,f0,s.width,s.height)}for(let s=0;s<6;s++)if(e){if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,X0[s].width,X0[s].height,V0,K0,X0[s].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,f0,X0[s].width,X0[s].height,0,V0,K0,X0[s].data);for(let F0=0;F0<a.length;F0++){let e0=a[F0].image[s].image;if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0+1,0,0,e0.width,e0.height,V0,K0,e0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0+1,f0,e0.width,e0.height,0,V0,K0,e0.data)}}else{if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,V0,K0,X0[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,f0,V0,K0,X0[s]);for(let F0=0;F0<a.length;F0++){let j0=a[F0];if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0+1,0,0,V0,K0,j0.image[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0+1,f0,V0,K0,j0.image[s])}}}if(N(R))F(J.TEXTURE_CUBE_MAP);if(p.__version=i.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function R0(B,R,h,n,i,p){let q0=H.convert(h.format,h.colorSpace),J0=H.convert(h.type),M0=L(h.internalFormat,q0,J0,h.colorSpace),A0=Z.get(R),e=Z.get(h);if(e.__renderTarget=R,!A0.__hasExternalTextures){let X0=Math.max(1,R.width>>p),L0=Math.max(1,R.height>>p);if(i===J.TEXTURE_3D||i===J.TEXTURE_2D_ARRAY)$.texImage3D(i,p,M0,X0,L0,R.depth,0,q0,J0,null);else $.texImage2D(i,p,M0,X0,L0,0,q0,J0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),I0(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,n,i,e.__webglTexture,0,D0(R));else if(i===J.TEXTURE_2D||i>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,n,i,e.__webglTexture,p);$.bindFramebuffer(J.FRAMEBUFFER,null)}function u0(B,R,h){if(J.bindRenderbuffer(J.RENDERBUFFER,B),R.depthBuffer){let n=R.depthTexture,i=n&&n.isDepthTexture?n.type:null,p=C(R.stencilBuffer,i),q0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,J0=D0(R);if(I0(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,J0,p,R.width,R.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,J0,p,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,p,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,B)}else{let n=R.textures;for(let i=0;i<n.length;i++){let p=n[i],q0=H.convert(p.format,p.colorSpace),J0=H.convert(p.type),M0=L(p.internalFormat,q0,J0,p.colorSpace),A0=D0(R);if(h&&I0(R)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,A0,M0,R.width,R.height);else if(I0(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,A0,M0,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,M0,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function c0(B,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let n=Z.get(R.depthTexture);if(n.__renderTarget=R,!n.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;o(R.depthTexture,0);let i=n.__webglTexture,p=D0(R);if(R.depthTexture.format===K7)if(I0(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,i,0,p);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,i,0);else if(R.depthTexture.format===U6)if(I0(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,i,0,p);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,i,0);else throw new Error("Unknown depthTexture format")}function d0(B){let R=Z.get(B),h=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let n=B.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(n){let i=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,n.removeEventListener("dispose",i)};n.addEventListener("dispose",i),R.__depthDisposeCallback=i}R.__boundDepthTexture=n}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(h)throw new Error("target.depthTexture not supported in Cube render targets");let n=B.texture.mipmaps;if(n&&n.length>0)c0(R.__webglFramebuffer[0],B);else c0(R.__webglFramebuffer,B)}else if(h){R.__webglDepthbuffer=[];for(let n=0;n<6;n++)if($.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[n]),R.__webglDepthbuffer[n]===void 0)R.__webglDepthbuffer[n]=J.createRenderbuffer(),u0(R.__webglDepthbuffer[n],B,!1);else{let i=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,p=R.__webglDepthbuffer[n];J.bindRenderbuffer(J.RENDERBUFFER,p),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,p)}}else{let n=B.texture.mipmaps;if(n&&n.length>0)$.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),u0(R.__webglDepthbuffer,B,!1);else{let i=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,p=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,p),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,p)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function I(B,R,h){let n=Z.get(B);if(R!==void 0)R0(n.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)d0(B)}function QJ(B){let R=B.texture,h=Z.get(B),n=Z.get(R);B.addEventListener("dispose",T);let i=B.textures,p=B.isWebGLCubeRenderTarget===!0,q0=i.length>1;if(!q0){if(n.__webglTexture===void 0)n.__webglTexture=J.createTexture();n.__version=R.version,Y.memory.textures++}if(p){h.__webglFramebuffer=[];for(let J0=0;J0<6;J0++)if(R.mipmaps&&R.mipmaps.length>0){h.__webglFramebuffer[J0]=[];for(let M0=0;M0<R.mipmaps.length;M0++)h.__webglFramebuffer[J0][M0]=J.createFramebuffer()}else h.__webglFramebuffer[J0]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){h.__webglFramebuffer=[];for(let J0=0;J0<R.mipmaps.length;J0++)h.__webglFramebuffer[J0]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(q0)for(let J0=0,M0=i.length;J0<M0;J0++){let A0=Z.get(i[J0]);if(A0.__webglTexture===void 0)A0.__webglTexture=J.createTexture(),Y.memory.textures++}if(B.samples>0&&I0(B)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let J0=0;J0<i.length;J0++){let M0=i[J0];h.__webglColorRenderbuffer[J0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[J0]);let A0=H.convert(M0.format,M0.colorSpace),e=H.convert(M0.type),X0=L(M0.internalFormat,A0,e,M0.colorSpace,B.isXRRenderTarget===!0),L0=D0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,L0,X0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+J0,J.RENDERBUFFER,h.__webglColorRenderbuffer[J0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),u0(h.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(p){$.bindTexture(J.TEXTURE_CUBE_MAP,n.__webglTexture),m0(J.TEXTURE_CUBE_MAP,R);for(let J0=0;J0<6;J0++)if(R.mipmaps&&R.mipmaps.length>0)for(let M0=0;M0<R.mipmaps.length;M0++)R0(h.__webglFramebuffer[J0][M0],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,M0);else R0(h.__webglFramebuffer[J0],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0);if(N(R))F(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(q0){for(let J0=0,M0=i.length;J0<M0;J0++){let A0=i[J0],e=Z.get(A0),X0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)X0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(X0,e.__webglTexture),m0(X0,A0),R0(h.__webglFramebuffer,B,A0,J.COLOR_ATTACHMENT0+J0,X0,0),N(A0))F(X0)}$.unbindTexture()}else{let J0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)J0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(J0,n.__webglTexture),m0(J0,R),R.mipmaps&&R.mipmaps.length>0)for(let M0=0;M0<R.mipmaps.length;M0++)R0(h.__webglFramebuffer[M0],B,R,J.COLOR_ATTACHMENT0,J0,M0);else R0(h.__webglFramebuffer,B,R,J.COLOR_ATTACHMENT0,J0,0);if(N(R))F(J0);$.unbindTexture()}if(B.depthBuffer)d0(B)}function _0(B){let R=B.textures;for(let h=0,n=R.length;h<n;h++){let i=R[h];if(N(i)){let p=_(B),q0=Z.get(i).__webglTexture;$.bindTexture(p,q0),F(p),$.unbindTexture()}}}let o0=[],z0=[];function YJ(B){if(B.samples>0){if(I0(B)===!1){let{textures:R,width:h,height:n}=B,i=J.COLOR_BUFFER_BIT,p=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,q0=Z.get(B),J0=R.length>1;if(J0)for(let A0=0;A0<R.length;A0++)$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,q0.__webglMultisampledFramebuffer);let M0=B.texture.mipmaps;if(M0&&M0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer);for(let A0=0;A0<R.length;A0++){if(B.resolveDepthBuffer){if(B.depthBuffer)i|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)i|=J.STENCIL_BUFFER_BIT}if(J0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[A0]);let e=Z.get(R[A0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,e,0)}if(J.blitFramebuffer(0,0,h,n,0,0,h,n,i,J.NEAREST),K===!0){if(o0.length=0,z0.length=0,o0.push(J.COLOR_ATTACHMENT0+A0),B.depthBuffer&&B.resolveDepthBuffer===!1)o0.push(p),z0.push(p),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,z0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,o0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J0)for(let A0=0;A0<R.length;A0++){$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[A0]);let e=Z.get(R[A0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.TEXTURE_2D,e,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&K){let R=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function D0(B){return Math.min(W.maxSamples,B.samples)}function I0(B){let R=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function kJ(B){let R=Y.render.frame;if(G.get(B)!==R)G.set(B,R),B.update()}function RJ(B,R){let{colorSpace:h,format:n,type:i}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return R;if(h!==LJ&&h!==Z9)if(x0.getTransfer(h)===$J){if(n!==X8||i!==h8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",h);return R}function NJ(B){if(typeof HTMLImageElement!=="undefined"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame!=="undefined"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=l,this.resetTextureUnits=m,this.setTexture2D=o,this.setTexture2DArray=u,this.setTexture3D=r,this.setTextureCube=g,this.rebindTextures=I,this.setupRenderTarget=QJ,this.updateRenderTargetMipmap=_0,this.updateMultisampleRenderTarget=YJ,this.setupDepthRenderbuffer=d0,this.setupFrameBufferTexture=R0,this.useMultisampledRTT=I0}function PE(J,Q){function $(Z,W=Z9){let H,Y=x0.getTransfer(W);if(Z===h8)return J.UNSIGNED_BYTE;if(Z===BQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===_Q)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===MW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===FW)return J.BYTE;if(Z===RW)return J.SHORT;if(Z===X6)return J.UNSIGNED_SHORT;if(Z===zQ)return J.INT;if(Z===j9)return J.UNSIGNED_INT;if(Z===f8)return J.FLOAT;if(Z===K6)return J.HALF_FLOAT;if(Z===kW)return J.ALPHA;if(Z===DW)return J.RGB;if(Z===X8)return J.RGBA;if(Z===K7)return J.DEPTH_COMPONENT;if(Z===U6)return J.DEPTH_STENCIL;if(Z===LW)return J.RED;if(Z===CQ)return J.RED_INTEGER;if(Z===VW)return J.RG;if(Z===wQ)return J.RG_INTEGER;if(Z===IQ)return J.RGBA_INTEGER;if(Z===U7||Z===G7||Z===E7||Z===q7)if(Y===$J)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(Z===U7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===G7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===E7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===q7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(Z===U7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===G7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===E7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===q7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===PQ||Z===TQ||Z===AQ||Z===SQ)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(Z===PQ)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===TQ)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===AQ)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===SQ)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===jQ||Z===vQ||Z===yQ)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(Z===jQ||Z===vQ)return Y===$J?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(Z===yQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===hQ||Z===fQ||Z===xQ||Z===bQ||Z===gQ||Z===pQ||Z===lQ||Z===dQ||Z===mQ||Z===uQ||Z===cQ||Z===nQ||Z===sQ||Z===iQ)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(Z===hQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===fQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===xQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===bQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===gQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===pQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===lQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===dQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===mQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===uQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===cQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===nQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===sQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===iQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===N7||Z===oQ||Z===aQ)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(Z===N7)return Y===$J?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===oQ)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===aQ)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===zW||Z===rQ||Z===tQ||Z===eQ)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(Z===N7)return H.COMPRESSED_RED_RGTC1_EXT;if(Z===rQ)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===tQ)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===eQ)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===v9)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}class h$ extends qJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}}var TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
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

}`;class BH{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new h$(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new U8({vertexShader:TE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new _J(new k6(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _H extends x8{constructor(J,Q){super();let $=this,Z=null,W=1,H=null,Y="local-floor",X=1,K=null,U=null,G=null,E=null,q=null,O=null,M=new BH,k={},N=Q.getContextAttributes(),F=null,_=null,L=[],C=[],y=new g0,w=null,T=new DJ;T.viewport=new s0;let b=new DJ;b.viewport=new s0;let z=[T,b],V=new z$,j=null,m=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(d){let W0=L[d];if(W0===void 0)W0=new q6,L[d]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(d){let W0=L[d];if(W0===void 0)W0=new q6,L[d]=W0;return W0.getGripSpace()},this.getHand=function(d){let W0=L[d];if(W0===void 0)W0=new q6,L[d]=W0;return W0.getHandSpace()};function l(d){let W0=C.indexOf(d.inputSource);if(W0===-1)return;let k0=L[W0];if(k0!==void 0)k0.update(d.inputSource,d.frame,K||H),k0.dispatchEvent({type:d.type,data:d.inputSource})}function c(){Z.removeEventListener("select",l),Z.removeEventListener("selectstart",l),Z.removeEventListener("selectend",l),Z.removeEventListener("squeeze",l),Z.removeEventListener("squeezestart",l),Z.removeEventListener("squeezeend",l),Z.removeEventListener("end",c),Z.removeEventListener("inputsourceschange",o);for(let d=0;d<L.length;d++){let W0=C[d];if(W0===null)continue;C[d]=null,L[d].disconnect(W0)}j=null,m=null,M.reset();for(let d in k)delete k[d];J.setRenderTarget(F),q=null,E=null,G=null,Z=null,_=null,HJ.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(y.width,y.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(d){if(W=d,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(d){if(Y=d,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||H},this.setReferenceSpace=function(d){K=d},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){return G},this.getFrame=function(){return O},this.getSession=function(){return Z},this.setSession=async function(d){if(Z=d,Z!==null){if(F=J.getRenderTarget(),Z.addEventListener("select",l),Z.addEventListener("selectstart",l),Z.addEventListener("selectend",l),Z.addEventListener("squeeze",l),Z.addEventListener("squeezestart",l),Z.addEventListener("squeezeend",l),Z.addEventListener("end",c),Z.addEventListener("inputsourceschange",o),N.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(y),typeof XRWebGLBinding!=="undefined")G=new XRWebGLBinding(Z,Q);if(!(G!==null&&("createProjectionLayer"in XRWebGLBinding.prototype))){let k0={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(Z,Q,k0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),_=new _8(q.framebufferWidth,q.framebufferHeight,{format:X8,type:h8,colorSpace:J.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let k0=null,G0=null,R0=null;if(N.depth)R0=N.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,k0=N.stencil?U6:K7,G0=N.stencil?v9:j9;let u0={colorFormat:Q.RGBA8,depthFormat:R0,scaleFactor:W};E=G.createProjectionLayer(u0),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),_=new _8(E.textureWidth,E.textureHeight,{format:X8,type:h8,depthTexture:new I7(E.textureWidth,E.textureHeight,G0,void 0,void 0,void 0,void 0,void 0,void 0,k0),stencilBuffer:N.stencil,colorSpace:J.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(X),K=null,H=await Z.requestReferenceSpace(Y),HJ.setContext(Z),HJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function o(d){for(let W0=0;W0<d.removed.length;W0++){let k0=d.removed[W0],G0=C.indexOf(k0);if(G0>=0)C[G0]=null,L[G0].disconnect(k0)}for(let W0=0;W0<d.added.length;W0++){let k0=d.added[W0],G0=C.indexOf(k0);if(G0===-1){for(let u0=0;u0<L.length;u0++)if(u0>=C.length){C.push(k0),G0=u0;break}else if(C[u0]===null){C[u0]=k0,G0=u0;break}if(G0===-1)break}let R0=L[G0];if(R0)R0.connect(k0)}}let u=new A,r=new A;function g(d,W0,k0){u.setFromMatrixPosition(W0.matrixWorld),r.setFromMatrixPosition(k0.matrixWorld);let G0=u.distanceTo(r),R0=W0.projectionMatrix.elements,u0=k0.projectionMatrix.elements,c0=R0[14]/(R0[10]-1),d0=R0[14]/(R0[10]+1),I=(R0[9]+1)/R0[5],QJ=(R0[9]-1)/R0[5],_0=(R0[8]-1)/R0[0],o0=(u0[8]+1)/u0[0],z0=c0*_0,YJ=c0*o0,D0=G0/(-_0+o0),I0=D0*-_0;if(W0.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.translateX(I0),d.translateZ(D0),d.matrixWorld.compose(d.position,d.quaternion,d.scale),d.matrixWorldInverse.copy(d.matrixWorld).invert(),R0[10]===-1)d.projectionMatrix.copy(W0.projectionMatrix),d.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let kJ=c0+D0,RJ=d0+D0,NJ=z0-I0,B=YJ+(G0-I0),R=I*d0/RJ*kJ,h=QJ*d0/RJ*kJ;d.projectionMatrix.makePerspective(NJ,B,R,h,kJ,RJ),d.projectionMatrixInverse.copy(d.projectionMatrix).invert()}}function Z0(d,W0){if(W0===null)d.matrixWorld.copy(d.matrix);else d.matrixWorld.multiplyMatrices(W0.matrixWorld,d.matrix);d.matrixWorldInverse.copy(d.matrixWorld).invert()}this.updateCamera=function(d){if(Z===null)return;let{near:W0,far:k0}=d;if(M.texture!==null){if(M.depthNear>0)W0=M.depthNear;if(M.depthFar>0)k0=M.depthFar}if(V.near=b.near=T.near=W0,V.far=b.far=T.far=k0,j!==V.near||m!==V.far)Z.updateRenderState({depthNear:V.near,depthFar:V.far}),j=V.near,m=V.far;V.layers.mask=d.layers.mask|6,T.layers.mask=V.layers.mask&3,b.layers.mask=V.layers.mask&5;let G0=d.parent,R0=V.cameras;Z0(V,G0);for(let u0=0;u0<R0.length;u0++)Z0(R0[u0],G0);if(R0.length===2)g(V,T,b);else V.projectionMatrix.copy(T.projectionMatrix);U0(d,V,G0)};function U0(d,W0,k0){if(k0===null)d.matrix.copy(W0.matrixWorld);else d.matrix.copy(k0.matrixWorld),d.matrix.invert(),d.matrix.multiply(W0.matrixWorld);if(d.matrix.decompose(d.position,d.quaternion,d.scale),d.updateMatrixWorld(!0),d.projectionMatrix.copy(W0.projectionMatrix),d.projectionMatrixInverse.copy(W0.projectionMatrixInverse),d.isPerspectiveCamera)d.fov=t8*2*Math.atan(1/d.projectionMatrix.elements[5]),d.zoom=1}this.getCamera=function(){return V},this.getFoveation=function(){if(E===null&&q===null)return;return X},this.setFoveation=function(d){if(X=d,E!==null)E.fixedFoveation=d;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=d},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(V)},this.getCameraTexture=function(d){return k[d]};let T0=null;function m0(d,W0){if(U=W0.getViewerPose(K||H),O=W0,U!==null){let k0=U.views;if(q!==null)J.setRenderTargetFramebuffer(_,q.framebuffer),J.setRenderTarget(_);let G0=!1;if(k0.length!==V.cameras.length)V.cameras.length=0,G0=!0;for(let d0=0;d0<k0.length;d0++){let I=k0[d0],QJ=null;if(q!==null)QJ=q.getViewport(I);else{let o0=G.getViewSubImage(E,I);if(QJ=o0.viewport,d0===0)J.setRenderTargetTextures(_,o0.colorTexture,o0.depthStencilTexture),J.setRenderTarget(_)}let _0=z[d0];if(_0===void 0)_0=new DJ,_0.layers.enable(d0),_0.viewport=new s0,z[d0]=_0;if(_0.matrix.fromArray(I.transform.matrix),_0.matrix.decompose(_0.position,_0.quaternion,_0.scale),_0.projectionMatrix.fromArray(I.projectionMatrix),_0.projectionMatrixInverse.copy(_0.projectionMatrix).invert(),_0.viewport.set(QJ.x,QJ.y,QJ.width,QJ.height),d0===0)V.matrix.copy(_0.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);if(G0===!0)V.cameras.push(_0)}let R0=Z.enabledFeatures;if(R0&&R0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&G){let d0=G.getDepthInformation(k0[0]);if(d0&&d0.isValid&&d0.texture)M.init(d0,Z.renderState)}if(R0&&R0.includes("camera-access")){if(J.state.unbindTexture(),G)for(let d0=0;d0<k0.length;d0++){let I=k0[d0].camera;if(I){let QJ=k[I];if(!QJ)QJ=new h$,k[I]=QJ;let _0=G.getCameraImage(I);QJ.sourceTexture=_0}}}}for(let k0=0;k0<L.length;k0++){let G0=C[k0],R0=L[k0];if(G0!==null&&R0!==void 0)R0.update(G0,W0,K||H)}if(T0)T0(d,W0);if(W0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:W0});O=null}let HJ=new NH;HJ.setAnimationLoop(m0),this.setAnimationLoop=function(d){T0=d},this.dispose=function(){}}}var X9=new AJ,SE=new v0;function jE(J,Q){function $(N,F){if(N.matrixAutoUpdate===!0)N.updateMatrix();F.value.copy(N.matrix)}function Z(N,F){if(F.color.getRGB(N.fogColor.value,E$(J)),F.isFog)N.fogNear.value=F.near,N.fogFar.value=F.far;else if(F.isFogExp2)N.fogDensity.value=F.density}function W(N,F,_,L,C){if(F.isMeshBasicMaterial)H(N,F);else if(F.isMeshLambertMaterial)H(N,F);else if(F.isMeshToonMaterial)H(N,F),E(N,F);else if(F.isMeshPhongMaterial)H(N,F),G(N,F);else if(F.isMeshStandardMaterial){if(H(N,F),q(N,F),F.isMeshPhysicalMaterial)O(N,F,C)}else if(F.isMeshMatcapMaterial)H(N,F),M(N,F);else if(F.isMeshDepthMaterial)H(N,F);else if(F.isMeshDistanceMaterial)H(N,F),k(N,F);else if(F.isMeshNormalMaterial)H(N,F);else if(F.isLineBasicMaterial){if(Y(N,F),F.isLineDashedMaterial)X(N,F)}else if(F.isPointsMaterial)K(N,F,_,L);else if(F.isSpriteMaterial)U(N,F);else if(F.isShadowMaterial)N.color.value.copy(F.color),N.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function H(N,F){if(N.opacity.value=F.opacity,F.color)N.diffuse.value.copy(F.color);if(F.emissive)N.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)N.map.value=F.map,$(F.map,N.mapTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,$(F.alphaMap,N.alphaMapTransform);if(F.bumpMap){if(N.bumpMap.value=F.bumpMap,$(F.bumpMap,N.bumpMapTransform),N.bumpScale.value=F.bumpScale,F.side===xJ)N.bumpScale.value*=-1}if(F.normalMap){if(N.normalMap.value=F.normalMap,$(F.normalMap,N.normalMapTransform),N.normalScale.value.copy(F.normalScale),F.side===xJ)N.normalScale.value.negate()}if(F.displacementMap)N.displacementMap.value=F.displacementMap,$(F.displacementMap,N.displacementMapTransform),N.displacementScale.value=F.displacementScale,N.displacementBias.value=F.displacementBias;if(F.emissiveMap)N.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,N.emissiveMapTransform);if(F.specularMap)N.specularMap.value=F.specularMap,$(F.specularMap,N.specularMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest;let _=Q.get(F),L=_.envMap,C=_.envMapRotation;if(L){if(N.envMap.value=L,X9.copy(C),X9.x*=-1,X9.y*=-1,X9.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)X9.y*=-1,X9.z*=-1;N.envMapRotation.value.setFromMatrix4(SE.makeRotationFromEuler(X9)),N.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=F.reflectivity,N.ior.value=F.ior,N.refractionRatio.value=F.refractionRatio}if(F.lightMap)N.lightMap.value=F.lightMap,N.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,N.lightMapTransform);if(F.aoMap)N.aoMap.value=F.aoMap,N.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,N.aoMapTransform)}function Y(N,F){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,F.map)N.map.value=F.map,$(F.map,N.mapTransform)}function X(N,F){N.dashSize.value=F.dashSize,N.totalSize.value=F.dashSize+F.gapSize,N.scale.value=F.scale}function K(N,F,_,L){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,N.size.value=F.size*_,N.scale.value=L*0.5,F.map)N.map.value=F.map,$(F.map,N.uvTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,$(F.alphaMap,N.alphaMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest}function U(N,F){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,N.rotation.value=F.rotation,F.map)N.map.value=F.map,$(F.map,N.mapTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,$(F.alphaMap,N.alphaMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest}function G(N,F){N.specular.value.copy(F.specular),N.shininess.value=Math.max(F.shininess,0.0001)}function E(N,F){if(F.gradientMap)N.gradientMap.value=F.gradientMap}function q(N,F){if(N.metalness.value=F.metalness,F.metalnessMap)N.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=F.roughness,F.roughnessMap)N.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,N.roughnessMapTransform);if(F.envMap)N.envMapIntensity.value=F.envMapIntensity}function O(N,F,_){if(N.ior.value=F.ior,F.sheen>0){if(N.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),N.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)N.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,N.sheenColorMapTransform);if(F.sheenRoughnessMap)N.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(N.clearcoat.value=F.clearcoat,N.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)N.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,N.clearcoatMapTransform);if(F.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(N.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===xJ)N.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)N.dispersion.value=F.dispersion;if(F.iridescence>0){if(N.iridescence.value=F.iridescence,N.iridescenceIOR.value=F.iridescenceIOR,N.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)N.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,N.iridescenceMapTransform);if(F.iridescenceThicknessMap)N.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(F.transmission>0){if(N.transmission.value=F.transmission,N.transmissionSamplerMap.value=_.texture,N.transmissionSamplerSize.value.set(_.width,_.height),F.transmissionMap)N.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=F.thickness,F.thicknessMap)N.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=F.attenuationDistance,N.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(N.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)N.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=F.specularIntensity,N.specularColor.value.copy(F.specularColor),F.specularColorMap)N.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,N.specularColorMapTransform);if(F.specularIntensityMap)N.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,N.specularIntensityMapTransform)}function M(N,F){if(F.matcap)N.matcap.value=F.matcap}function k(N,F){let _=Q.get(F).light;N.referencePosition.value.setFromMatrixPosition(_.matrixWorld),N.nearDistance.value=_.shadow.camera.near,N.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function vE(J,Q,$,Z){let W={},H={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(_,L){let C=L.program;Z.uniformBlockBinding(_,C)}function U(_,L){let C=W[_.id];if(C===void 0)M(_),C=G(_),W[_.id]=C,_.addEventListener("dispose",N);let y=L.program;Z.updateUBOMapping(_,y);let w=Q.render.frame;if(H[_.id]!==w)q(_),H[_.id]=w}function G(_){let L=E();_.__bindingPointIndex=L;let C=J.createBuffer(),y=_.__size,w=_.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,y,w),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,C),C}function E(){for(let _=0;_<X;_++)if(Y.indexOf(_)===-1)return Y.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(_){let L=W[_.id],C=_.uniforms,y=_.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let w=0,T=C.length;w<T;w++){let b=Array.isArray(C[w])?C[w]:[C[w]];for(let z=0,V=b.length;z<V;z++){let j=b[z];if(O(j,w,z,y)===!0){let m=j.__offset,l=Array.isArray(j.value)?j.value:[j.value],c=0;for(let o=0;o<l.length;o++){let u=l[o],r=k(u);if(typeof u==="number"||typeof u==="boolean")j.__data[0]=u,J.bufferSubData(J.UNIFORM_BUFFER,m+c,j.__data);else if(u.isMatrix3)j.__data[0]=u.elements[0],j.__data[1]=u.elements[1],j.__data[2]=u.elements[2],j.__data[3]=0,j.__data[4]=u.elements[3],j.__data[5]=u.elements[4],j.__data[6]=u.elements[5],j.__data[7]=0,j.__data[8]=u.elements[6],j.__data[9]=u.elements[7],j.__data[10]=u.elements[8],j.__data[11]=0;else u.toArray(j.__data,c),c+=r.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,m,j.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function O(_,L,C,y){let w=_.value,T=L+"_"+C;if(y[T]===void 0){if(typeof w==="number"||typeof w==="boolean")y[T]=w;else y[T]=w.clone();return!0}else{let b=y[T];if(typeof w==="number"||typeof w==="boolean"){if(b!==w)return y[T]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function M(_){let L=_.uniforms,C=0,y=16;for(let T=0,b=L.length;T<b;T++){let z=Array.isArray(L[T])?L[T]:[L[T]];for(let V=0,j=z.length;V<j;V++){let m=z[V],l=Array.isArray(m.value)?m.value:[m.value];for(let c=0,o=l.length;c<o;c++){let u=l[c],r=k(u),g=C%y,Z0=g%r.boundary,U0=g+Z0;if(C+=Z0,U0!==0&&y-U0<r.storage)C+=y-U0;m.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),m.__offset=C,C+=r.storage}}}let w=C%y;if(w>0)C+=y-w;return _.__size=C,_.__cache={},this}function k(_){let L={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")L.boundary=4,L.storage=4;else if(_.isVector2)L.boundary=8,L.storage=8;else if(_.isVector3||_.isColor)L.boundary=16,L.storage=12;else if(_.isVector4)L.boundary=16,L.storage=16;else if(_.isMatrix3)L.boundary=48,L.storage=48;else if(_.isMatrix4)L.boundary=64,L.storage=64;else if(_.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_);return L}function N(_){let L=_.target;L.removeEventListener("dispose",N);let C=Y.indexOf(L.__bindingPointIndex);Y.splice(C,1),J.deleteBuffer(W[L.id]),delete W[L.id],delete H[L.id]}function F(){for(let _ in W)J.deleteBuffer(W[_]);Y=[],W={},H={}}return{bind:K,update:U,dispose:F}}class f${constructor(J={}){let{canvas:Q=vW(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext!=="undefined"&&$ instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=H;let O=new Uint32Array(4),M=new Int32Array(4),k=null,N=null,F=[],_=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=V8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,C=!1;this._outputColorSpace=iJ;let y=0,w=0,T=null,b=-1,z=null,V=new s0,j=new s0,m=null,l=new w0(0),c=0,o=Q.width,u=Q.height,r=1,g=null,Z0=null,U0=new s0(0,0,o,u),T0=new s0(0,0,o,u),m0=!1,HJ=new R6,d=!1,W0=!1,k0=new v0,G0=new A,R0=new s0,u0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},c0=!1;function d0(){return T===null?r:1}let I=$;function QJ(D,S){return Q.getContext(D,S)}try{let D={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${hZ}`);if(Q.addEventListener("webglcontextlost",H0,!1),Q.addEventListener("webglcontextrestored",Q0,!1),Q.addEventListener("webglcontextcreationerror",N0,!1),I===null){if(I=QJ("webgl2",D),I===null)if(QJ("webgl2"))throw new Error("Error creating WebGL context with your selected attributes.");else throw new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let _0,o0,z0,YJ,D0,I0,kJ,RJ,NJ,B,R,h,n,i,p,q0,J0,M0,A0,e,X0,L0,V0,K0;function f0(){if(_0=new rU(I),_0.init(),L0=new PE(I,_0),o0=new uU(I,_0,J,L0),z0=new wE(I,_0),o0.reversedDepthBuffer&&E)z0.buffers.depth.setReversed(!0);YJ=new JG(I),D0=new NE,I0=new IE(I,_0,z0,D0,o0,L0,YJ),kJ=new nU(L),RJ=new aU(L),NJ=new YX(I),V0=new dU(I,NJ),B=new tU(I,NJ,YJ,V0),R=new $G(I,B,NJ,YJ),A0=new QG(I,o0,I0),q0=new cU(D0),h=new qE(L,kJ,RJ,_0,o0,V0,q0),n=new jE(L,D0),i=new FE,p=new VE(_0),M0=new lU(L,kJ,RJ,z0,R,q,X),J0=new _E(L,R,o0),K0=new vE(I,YJ,o0,z0),e=new mU(I,_0,YJ),X0=new eU(I,_0,YJ),YJ.programs=h.programs,L.capabilities=o0,L.extensions=_0,L.properties=D0,L.renderLists=i,L.shadowMap=J0,L.state=z0,L.info=YJ}f0();let P=new _H(L,I);this.xr=P,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let D=_0.get("WEBGL_lose_context");if(D)D.loseContext()},this.forceContextRestore=function(){let D=_0.get("WEBGL_lose_context");if(D)D.restoreContext()},this.getPixelRatio=function(){return r},this.setPixelRatio=function(D){if(D===void 0)return;r=D,this.setSize(o,u,!1)},this.getSize=function(D){return D.set(o,u)},this.setSize=function(D,S,f=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=D,u=S,Q.width=Math.floor(D*r),Q.height=Math.floor(S*r),f===!0)Q.style.width=D+"px",Q.style.height=S+"px";this.setViewport(0,0,D,S)},this.getDrawingBufferSize=function(D){return D.set(o*r,u*r).floor()},this.setDrawingBufferSize=function(D,S,f){o=D,u=S,r=f,Q.width=Math.floor(D*f),Q.height=Math.floor(S*f),this.setViewport(0,0,D,S)},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(U0)},this.setViewport=function(D,S,f,x){if(D.isVector4)U0.set(D.x,D.y,D.z,D.w);else U0.set(D,S,f,x);z0.viewport(V.copy(U0).multiplyScalar(r).round())},this.getScissor=function(D){return D.copy(T0)},this.setScissor=function(D,S,f,x){if(D.isVector4)T0.set(D.x,D.y,D.z,D.w);else T0.set(D,S,f,x);z0.scissor(j.copy(T0).multiplyScalar(r).round())},this.getScissorTest=function(){return m0},this.setScissorTest=function(D){z0.setScissorTest(m0=D)},this.setOpaqueSort=function(D){g=D},this.setTransparentSort=function(D){Z0=D},this.getClearColor=function(D){return D.copy(M0.getClearColor())},this.setClearColor=function(){M0.setClearColor(...arguments)},this.getClearAlpha=function(){return M0.getClearAlpha()},this.setClearAlpha=function(){M0.setClearAlpha(...arguments)},this.clear=function(D=!0,S=!0,f=!0){let x=0;if(D){let v=!1;if(T!==null){let t=T.texture.format;v=t===IQ||t===wQ||t===CQ}if(v){let t=T.texture.type,Y0=t===h8||t===j9||t===X6||t===v9||t===BQ||t===_Q,O0=M0.getClearColor(),E0=M0.getClearAlpha(),P0=O0.r,S0=O0.g,B0=O0.b;if(Y0)O[0]=P0,O[1]=S0,O[2]=B0,O[3]=E0,I.clearBufferuiv(I.COLOR,0,O);else M[0]=P0,M[1]=S0,M[2]=B0,M[3]=E0,I.clearBufferiv(I.COLOR,0,M)}else x|=I.COLOR_BUFFER_BIT}if(S)x|=I.DEPTH_BUFFER_BIT;if(f)x|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);I.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",H0,!1),Q.removeEventListener("webglcontextrestored",Q0,!1),Q.removeEventListener("webglcontextcreationerror",N0,!1),M0.dispose(),i.dispose(),p.dispose(),D0.dispose(),kJ.dispose(),RJ.dispose(),R.dispose(),V0.dispose(),K0.dispose(),h.dispose(),P.dispose(),P.removeEventListener("sessionstart",Z8),P.removeEventListener("sessionend",W8),n8.stop()};function H0(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Q0(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let D=YJ.autoReset,S=J0.enabled,f=J0.autoUpdate,x=J0.needsUpdate,v=J0.type;f0(),YJ.autoReset=D,J0.enabled=S,J0.autoUpdate=f,J0.needsUpdate=x,J0.type=v}function N0(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function a(D){let S=D.target;S.removeEventListener("dispose",a),s(S)}function s(D){F0(D),D0.remove(D)}function F0(D){let S=D0.get(D).programs;if(S!==void 0){if(S.forEach(function(f){h.releaseProgram(f)}),D.isShaderMaterial)h.releaseShaderCache(D)}}this.renderBufferDirect=function(D,S,f,x,v,t){if(S===null)S=u0;let Y0=v.isMesh&&v.matrixWorld.determinant()<0,O0=QY(D,S,f,x,v);z0.setMaterial(x,Y0);let E0=f.index,P0=1;if(x.wireframe===!0){if(E0=B.getWireframeAttribute(f),E0===void 0)return;P0=2}let S0=f.drawRange,B0=f.attributes.position,l0=S0.start*P0,t0=(S0.start+S0.count)*P0;if(t!==null)l0=Math.max(l0,t.start*P0),t0=Math.min(t0,(t.start+t.count)*P0);if(E0!==null)l0=Math.max(l0,0),t0=Math.min(t0,E0.count);else if(B0!==void 0&&B0!==null)l0=Math.max(l0,0),t0=Math.min(t0,B0.count);let UJ=t0-l0;if(UJ<0||UJ===1/0)return;V0.setup(v,x,O0,f,E0);let ZJ,JJ=e;if(E0!==null)ZJ=NJ.get(E0),JJ=X0,JJ.setIndex(ZJ);if(v.isMesh)if(x.wireframe===!0)z0.setLineWidth(x.wireframeLinewidth*d0()),JJ.setMode(I.LINES);else JJ.setMode(I.TRIANGLES);else if(v.isLine){let C0=x.linewidth;if(C0===void 0)C0=1;if(z0.setLineWidth(C0*d0()),v.isLineSegments)JJ.setMode(I.LINES);else if(v.isLineLoop)JJ.setMode(I.LINE_LOOP);else JJ.setMode(I.LINE_STRIP)}else if(v.isPoints)JJ.setMode(I.POINTS);else if(v.isSprite)JJ.setMode(I.TRIANGLES);if(v.isBatchedMesh)if(v._multiDrawInstances!==null)e8("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),JJ.renderMultiDrawInstances(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount,v._multiDrawInstances);else if(!_0.get("WEBGL_multi_draw")){let{_multiDrawStarts:C0,_multiDrawCounts:XJ,_multiDrawCount:n0}=v,jJ=E0?NJ.get(E0).bytesPerElement:1,E9=D0.get(x).currentProgram.getUniforms();for(let vJ=0;vJ<n0;vJ++)E9.setValue(I,"_gl_DrawID",vJ),JJ.render(C0[vJ]/jJ,XJ[vJ])}else JJ.renderMultiDraw(v._multiDrawStarts,v._multiDrawCounts,v._multiDrawCount);else if(v.isInstancedMesh)JJ.renderInstances(l0,UJ,v.count);else if(f.isInstancedBufferGeometry){let C0=f._maxInstanceCount!==void 0?f._maxInstanceCount:1/0,XJ=Math.min(f.instanceCount,C0);JJ.renderInstances(l0,UJ,XJ)}else JJ.render(l0,UJ)};function j0(D,S,f){if(D.transparent===!0&&D.side===sJ&&D.forceSinglePass===!1)D.side=xJ,D.needsUpdate=!0,B6(D,S,f),D.side=v8,D.needsUpdate=!0,B6(D,S,f),D.side=sJ;else B6(D,S,f)}this.compile=function(D,S,f=null){if(f===null)f=D;if(N=p.get(f),N.init(S),_.push(N),f.traverseVisible(function(v){if(v.isLight&&v.layers.test(S.layers)){if(N.pushLight(v),v.castShadow)N.pushShadow(v)}}),D!==f)D.traverseVisible(function(v){if(v.isLight&&v.layers.test(S.layers)){if(N.pushLight(v),v.castShadow)N.pushShadow(v)}});N.setupLights();let x=new Set;return D.traverse(function(v){if(!(v.isMesh||v.isPoints||v.isLine||v.isSprite))return;let t=v.material;if(t)if(Array.isArray(t))for(let Y0=0;Y0<t.length;Y0++){let O0=t[Y0];j0(O0,f,v),x.add(O0)}else j0(t,f,v),x.add(t)}),N=_.pop(),x},this.compileAsync=function(D,S,f=null){let x=this.compile(D,S,f);return new Promise((v)=>{function t(){if(x.forEach(function(Y0){if(D0.get(Y0).currentProgram.isReady())x.delete(Y0)}),x.size===0){v(D);return}setTimeout(t,10)}if(_0.get("KHR_parallel_shader_compile")!==null)t();else setTimeout(t,10)})};let e0=null;function r0(D){if(e0)e0(D)}function Z8(){n8.stop()}function W8(){n8.start()}let n8=new NH;if(n8.setAnimationLoop(r0),typeof self!=="undefined")n8.setContext(self);this.setAnimationLoop=function(D){e0=D,P.setAnimationLoop(D),D===null?n8.stop():n8.start()},P.addEventListener("sessionstart",Z8),P.addEventListener("sessionend",W8),this.render=function(D,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(D.matrixWorldAutoUpdate===!0)D.updateMatrixWorld();if(S.parent===null&&S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(P.enabled===!0&&P.isPresenting===!0){if(P.cameraAutoUpdate===!0)P.updateCamera(S);S=P.getCamera()}if(D.isScene===!0)D.onBeforeRender(L,D,S,T);if(N=p.get(D,_.length),N.init(S),_.push(N),k0.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),HJ.setFromProjectionMatrix(k0,H$,S.reversedDepth),W0=this.localClippingEnabled,d=q0.init(this.clippingPlanes,W0),k=i.get(D,F.length),k.init(),F.push(k),P.enabled===!0&&P.isPresenting===!0){let t=L.xr.getDepthSensingMesh();if(t!==null)l7(t,S,-1/0,L.sortObjects)}if(l7(D,S,0,L.sortObjects),k.finish(),L.sortObjects===!0)k.sort(g,Z0);if(c0=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,c0)M0.addToRenderList(k,D);if(this.info.render.frame++,d===!0)q0.beginShadows();let f=N.state.shadowsArray;if(J0.render(f,D,S),d===!0)q0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:x,transmissive:v}=k;if(N.setupLights(),S.isArrayCamera){let t=S.cameras;if(v.length>0)for(let Y0=0,O0=t.length;Y0<O0;Y0++){let E0=t[Y0];i$(x,v,D,E0)}if(c0)M0.render(D);for(let Y0=0,O0=t.length;Y0<O0;Y0++){let E0=t[Y0];s$(k,D,E0,E0.viewport)}}else{if(v.length>0)i$(x,v,D,S);if(c0)M0.render(D);s$(k,D,S)}if(T!==null&&w===0)I0.updateMultisampleRenderTarget(T),I0.updateRenderTargetMipmap(T);if(D.isScene===!0)D.onAfterRender(L,D,S);if(V0.resetDefaultState(),b=-1,z=null,_.pop(),_.length>0){if(N=_[_.length-1],d===!0)q0.setGlobalState(L.clippingPlanes,N.state.camera)}else N=null;if(F.pop(),F.length>0)k=F[F.length-1];else k=null};function l7(D,S,f,x){if(D.visible===!1)return;if(D.layers.test(S.layers)){if(D.isGroup)f=D.renderOrder;else if(D.isLOD){if(D.autoUpdate===!0)D.update(S)}else if(D.isLight){if(N.pushLight(D),D.castShadow)N.pushShadow(D)}else if(D.isSprite){if(!D.frustumCulled||HJ.intersectsSprite(D)){if(x)R0.setFromMatrixPosition(D.matrixWorld).applyMatrix4(k0);let Y0=R.update(D),O0=D.material;if(O0.visible)k.push(D,Y0,O0,f,R0.z,null)}}else if(D.isMesh||D.isLine||D.isPoints){if(!D.frustumCulled||HJ.intersectsObject(D)){let Y0=R.update(D),O0=D.material;if(x){if(D.boundingSphere!==void 0){if(D.boundingSphere===null)D.computeBoundingSphere();R0.copy(D.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();R0.copy(Y0.boundingSphere.center)}R0.applyMatrix4(D.matrixWorld).applyMatrix4(k0)}if(Array.isArray(O0)){let E0=Y0.groups;for(let P0=0,S0=E0.length;P0<S0;P0++){let B0=E0[P0],l0=O0[B0.materialIndex];if(l0&&l0.visible)k.push(D,Y0,l0,f,R0.z,B0)}}else if(O0.visible)k.push(D,Y0,O0,f,R0.z,null)}}}let t=D.children;for(let Y0=0,O0=t.length;Y0<O0;Y0++)l7(t[Y0],S,f,x)}function s$(D,S,f,x){let{opaque:v,transmissive:t,transparent:Y0}=D;if(N.setupLightsView(f),d===!0)q0.setGlobalState(L.clippingPlanes,f);if(x)z0.viewport(V.copy(x));if(v.length>0)z6(v,S,f);if(t.length>0)z6(t,S,f);if(Y0.length>0)z6(Y0,S,f);z0.buffers.depth.setTest(!0),z0.buffers.depth.setMask(!0),z0.buffers.color.setMask(!0),z0.setPolygonOffset(!1)}function i$(D,S,f,x){if((f.isScene===!0?f.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[x.id]===void 0)N.state.transmissionRenderTarget[x.id]=new _8(1,1,{generateMipmaps:!0,type:_0.has("EXT_color_buffer_half_float")||_0.has("EXT_color_buffer_float")?K6:h8,minFilter:B8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:x0.workingColorSpace});let t=N.state.transmissionRenderTarget[x.id],Y0=x.viewport||V;t.setSize(Y0.z*L.transmissionResolutionScale,Y0.w*L.transmissionResolutionScale);let O0=L.getRenderTarget(),E0=L.getActiveCubeFace(),P0=L.getActiveMipmapLevel();if(L.setRenderTarget(t),L.getClearColor(l),c=L.getClearAlpha(),c<1)L.setClearColor(16777215,0.5);if(L.clear(),c0)M0.render(f);let S0=L.toneMapping;L.toneMapping=V8;let B0=x.viewport;if(x.viewport!==void 0)x.viewport=void 0;if(N.setupLightsView(x),d===!0)q0.setGlobalState(L.clippingPlanes,x);if(z6(D,f,x),I0.updateMultisampleRenderTarget(t),I0.updateRenderTargetMipmap(t),_0.has("WEBGL_multisampled_render_to_texture")===!1){let l0=!1;for(let t0=0,UJ=S.length;t0<UJ;t0++){let ZJ=S[t0],JJ=ZJ.object,C0=ZJ.geometry,XJ=ZJ.material,n0=ZJ.group;if(XJ.side===sJ&&JJ.layers.test(x.layers)){let jJ=XJ.side;XJ.side=xJ,XJ.needsUpdate=!0,o$(JJ,f,x,C0,XJ,n0),XJ.side=jJ,XJ.needsUpdate=!0,l0=!0}}if(l0===!0)I0.updateMultisampleRenderTarget(t),I0.updateRenderTargetMipmap(t)}if(L.setRenderTarget(O0,E0,P0),L.setClearColor(l,c),B0!==void 0)x.viewport=B0;L.toneMapping=S0}function z6(D,S,f){let x=S.isScene===!0?S.overrideMaterial:null;for(let v=0,t=D.length;v<t;v++){let Y0=D[v],O0=Y0.object,E0=Y0.geometry,P0=Y0.group,S0=Y0.material;if(S0.allowOverride===!0&&x!==null)S0=x;if(O0.layers.test(f.layers))o$(O0,S,f,E0,S0,P0)}}function o$(D,S,f,x,v,t){if(D.onBeforeRender(L,S,f,x,v,t),D.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),v.onBeforeRender(L,S,f,x,D,t),v.transparent===!0&&v.side===sJ&&v.forceSinglePass===!1)v.side=xJ,v.needsUpdate=!0,L.renderBufferDirect(f,S,x,v,D,t),v.side=v8,v.needsUpdate=!0,L.renderBufferDirect(f,S,x,v,D,t),v.side=sJ;else L.renderBufferDirect(f,S,x,v,D,t);D.onAfterRender(L,S,f,x,v,t)}function B6(D,S,f){if(S.isScene!==!0)S=u0;let x=D0.get(D),v=N.state.lights,t=N.state.shadowsArray,Y0=v.state.version,O0=h.getParameters(D,v.state,t,S,f),E0=h.getProgramCacheKey(O0),P0=x.programs;if(x.environment=D.isMeshStandardMaterial?S.environment:null,x.fog=S.fog,x.envMap=(D.isMeshStandardMaterial?RJ:kJ).get(D.envMap||x.environment),x.envMapRotation=x.environment!==null&&D.envMap===null?S.environmentRotation:D.envMapRotation,P0===void 0)D.addEventListener("dispose",a),P0=new Map,x.programs=P0;let S0=P0.get(E0);if(S0!==void 0){if(x.currentProgram===S0&&x.lightsStateVersion===Y0)return r$(D,O0),S0}else O0.uniforms=h.getUniforms(D),D.onBeforeCompile(O0,L),S0=h.acquireProgram(O0,E0),P0.set(E0,S0),x.uniforms=O0.uniforms;let B0=x.uniforms;if(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)B0.clippingPlanes=q0.uniform;if(r$(D,O0),x.needsLights=ZY(D),x.lightsStateVersion=Y0,x.needsLights)B0.ambientLightColor.value=v.state.ambient,B0.lightProbe.value=v.state.probe,B0.directionalLights.value=v.state.directional,B0.directionalLightShadows.value=v.state.directionalShadow,B0.spotLights.value=v.state.spot,B0.spotLightShadows.value=v.state.spotShadow,B0.rectAreaLights.value=v.state.rectArea,B0.ltc_1.value=v.state.rectAreaLTC1,B0.ltc_2.value=v.state.rectAreaLTC2,B0.pointLights.value=v.state.point,B0.pointLightShadows.value=v.state.pointShadow,B0.hemisphereLights.value=v.state.hemi,B0.directionalShadowMap.value=v.state.directionalShadowMap,B0.directionalShadowMatrix.value=v.state.directionalShadowMatrix,B0.spotShadowMap.value=v.state.spotShadowMap,B0.spotLightMatrix.value=v.state.spotLightMatrix,B0.spotLightMap.value=v.state.spotLightMap,B0.pointShadowMap.value=v.state.pointShadowMap,B0.pointShadowMatrix.value=v.state.pointShadowMatrix;return x.currentProgram=S0,x.uniformsList=null,S0}function a$(D){if(D.uniformsList===null){let S=D.currentProgram.getUniforms();D.uniformsList=L6.seqWithValue(S.seq,D.uniforms)}return D.uniformsList}function r$(D,S){let f=D0.get(D);f.outputColorSpace=S.outputColorSpace,f.batching=S.batching,f.batchingColor=S.batchingColor,f.instancing=S.instancing,f.instancingColor=S.instancingColor,f.instancingMorph=S.instancingMorph,f.skinning=S.skinning,f.morphTargets=S.morphTargets,f.morphNormals=S.morphNormals,f.morphColors=S.morphColors,f.morphTargetsCount=S.morphTargetsCount,f.numClippingPlanes=S.numClippingPlanes,f.numIntersection=S.numClipIntersection,f.vertexAlphas=S.vertexAlphas,f.vertexTangents=S.vertexTangents,f.toneMapping=S.toneMapping}function QY(D,S,f,x,v){if(S.isScene!==!0)S=u0;I0.resetTextureUnits();let t=S.fog,Y0=x.isMeshStandardMaterial?S.environment:null,O0=T===null?L.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:LJ,E0=(x.isMeshStandardMaterial?RJ:kJ).get(x.envMap||Y0),P0=x.vertexColors===!0&&!!f.attributes.color&&f.attributes.color.itemSize===4,S0=!!f.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),B0=!!f.morphAttributes.position,l0=!!f.morphAttributes.normal,t0=!!f.morphAttributes.color,UJ=V8;if(x.toneMapped){if(T===null||T.isXRRenderTarget===!0)UJ=L.toneMapping}let ZJ=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,JJ=ZJ!==void 0?ZJ.length:0,C0=D0.get(x),XJ=N.state.lights;if(d===!0){if(W0===!0||D!==z){let wJ=D===z&&x.id===b;q0.setState(x,D,wJ)}}let n0=!1;if(x.version===C0.__version){if(C0.needsLights&&C0.lightsStateVersion!==XJ.state.version)n0=!0;else if(C0.outputColorSpace!==O0)n0=!0;else if(v.isBatchedMesh&&C0.batching===!1)n0=!0;else if(!v.isBatchedMesh&&C0.batching===!0)n0=!0;else if(v.isBatchedMesh&&C0.batchingColor===!0&&v.colorTexture===null)n0=!0;else if(v.isBatchedMesh&&C0.batchingColor===!1&&v.colorTexture!==null)n0=!0;else if(v.isInstancedMesh&&C0.instancing===!1)n0=!0;else if(!v.isInstancedMesh&&C0.instancing===!0)n0=!0;else if(v.isSkinnedMesh&&C0.skinning===!1)n0=!0;else if(!v.isSkinnedMesh&&C0.skinning===!0)n0=!0;else if(v.isInstancedMesh&&C0.instancingColor===!0&&v.instanceColor===null)n0=!0;else if(v.isInstancedMesh&&C0.instancingColor===!1&&v.instanceColor!==null)n0=!0;else if(v.isInstancedMesh&&C0.instancingMorph===!0&&v.morphTexture===null)n0=!0;else if(v.isInstancedMesh&&C0.instancingMorph===!1&&v.morphTexture!==null)n0=!0;else if(C0.envMap!==E0)n0=!0;else if(x.fog===!0&&C0.fog!==t)n0=!0;else if(C0.numClippingPlanes!==void 0&&(C0.numClippingPlanes!==q0.numPlanes||C0.numIntersection!==q0.numIntersection))n0=!0;else if(C0.vertexAlphas!==P0)n0=!0;else if(C0.vertexTangents!==S0)n0=!0;else if(C0.morphTargets!==B0)n0=!0;else if(C0.morphNormals!==l0)n0=!0;else if(C0.morphColors!==t0)n0=!0;else if(C0.toneMapping!==UJ)n0=!0;else if(C0.morphTargetsCount!==JJ)n0=!0}else n0=!0,C0.__version=x.version;let jJ=C0.currentProgram;if(n0===!0)jJ=B6(x,S,v);let E9=!1,vJ=!1,s9=!1,KJ=jJ.getUniforms(),dJ=C0.uniforms;if(z0.useProgram(jJ.program))E9=!0,vJ=!0,s9=!0;if(x.id!==b)b=x.id,vJ=!0;if(E9||z!==D){if(z0.buffers.depth.getReversed()&&D.reversedDepth!==!0)D._reversedDepth=!0,D.updateProjectionMatrix();KJ.setValue(I,"projectionMatrix",D.projectionMatrix),KJ.setValue(I,"viewMatrix",D.matrixWorldInverse);let TJ=KJ.map.cameraPosition;if(TJ!==void 0)TJ.setValue(I,G0.setFromMatrixPosition(D.matrixWorld));if(o0.logarithmicDepthBuffer)KJ.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2));if(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)KJ.setValue(I,"isOrthographic",D.isOrthographicCamera===!0);if(z!==D)z=D,vJ=!0,s9=!0}if(v.isSkinnedMesh){KJ.setOptional(I,v,"bindMatrix"),KJ.setOptional(I,v,"bindMatrixInverse");let wJ=v.skeleton;if(wJ){if(wJ.boneTexture===null)wJ.computeBoneTexture();KJ.setValue(I,"boneTexture",wJ.boneTexture,I0)}}if(v.isBatchedMesh){if(KJ.setOptional(I,v,"batchingTexture"),KJ.setValue(I,"batchingTexture",v._matricesTexture,I0),KJ.setOptional(I,v,"batchingIdTexture"),KJ.setValue(I,"batchingIdTexture",v._indirectTexture,I0),KJ.setOptional(I,v,"batchingColorTexture"),v._colorsTexture!==null)KJ.setValue(I,"batchingColorTexture",v._colorsTexture,I0)}let mJ=f.morphAttributes;if(mJ.position!==void 0||mJ.normal!==void 0||mJ.color!==void 0)A0.update(v,f,jJ);if(vJ||C0.receiveShadow!==v.receiveShadow)C0.receiveShadow=v.receiveShadow,KJ.setValue(I,"receiveShadow",v.receiveShadow);if(x.isMeshGouraudMaterial&&x.envMap!==null)dJ.envMap.value=E0,dJ.flipEnvMap.value=E0.isCubeTexture&&E0.isRenderTargetTexture===!1?-1:1;if(x.isMeshStandardMaterial&&x.envMap===null&&S.environment!==null)dJ.envMapIntensity.value=S.environmentIntensity;if(vJ){if(KJ.setValue(I,"toneMappingExposure",L.toneMappingExposure),C0.needsLights)$Y(dJ,s9);if(t&&x.fog===!0)n.refreshFogUniforms(dJ,t);n.refreshMaterialUniforms(dJ,x,r,u,N.state.transmissionRenderTarget[D.id]),L6.upload(I,a$(C0),dJ,I0)}if(x.isShaderMaterial&&x.uniformsNeedUpdate===!0)L6.upload(I,a$(C0),dJ,I0),x.uniformsNeedUpdate=!1;if(x.isSpriteMaterial)KJ.setValue(I,"center",v.center);if(KJ.setValue(I,"modelViewMatrix",v.modelViewMatrix),KJ.setValue(I,"normalMatrix",v.normalMatrix),KJ.setValue(I,"modelMatrix",v.matrixWorld),x.isShaderMaterial||x.isRawShaderMaterial){let wJ=x.uniformsGroups;for(let TJ=0,d7=wJ.length;TJ<d7;TJ++){let s8=wJ[TJ];K0.update(s8,jJ),K0.bind(s8,jJ)}}return jJ}function $Y(D,S){D.ambientLightColor.needsUpdate=S,D.lightProbe.needsUpdate=S,D.directionalLights.needsUpdate=S,D.directionalLightShadows.needsUpdate=S,D.pointLights.needsUpdate=S,D.pointLightShadows.needsUpdate=S,D.spotLights.needsUpdate=S,D.spotLightShadows.needsUpdate=S,D.rectAreaLights.needsUpdate=S,D.hemisphereLights.needsUpdate=S}function ZY(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,S,f){let x=D0.get(D);if(x.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,x.__autoAllocateDepthBuffer===!1)x.__useRenderToTexture=!1;D0.get(D.texture).__webglTexture=S,D0.get(D.depthTexture).__webglTexture=x.__autoAllocateDepthBuffer?void 0:f,x.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,S){let f=D0.get(D);f.__webglFramebuffer=S,f.__useDefaultFramebuffer=S===void 0};let WY=I.createFramebuffer();this.setRenderTarget=function(D,S=0,f=0){T=D,y=S,w=f;let x=!0,v=null,t=!1,Y0=!1;if(D){let E0=D0.get(D);if(E0.__useDefaultFramebuffer!==void 0)z0.bindFramebuffer(I.FRAMEBUFFER,null),x=!1;else if(E0.__webglFramebuffer===void 0)I0.setupRenderTarget(D);else if(E0.__hasExternalTextures)I0.rebindTextures(D,D0.get(D.texture).__webglTexture,D0.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let B0=D.depthTexture;if(E0.__boundDepthTexture!==B0){if(B0!==null&&D0.has(B0)&&(D.width!==B0.image.width||D.height!==B0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I0.setupDepthRenderbuffer(D)}}let P0=D.texture;if(P0.isData3DTexture||P0.isDataArrayTexture||P0.isCompressedArrayTexture)Y0=!0;let S0=D0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget){if(Array.isArray(S0[S]))v=S0[S][f];else v=S0[S];t=!0}else if(D.samples>0&&I0.useMultisampledRTT(D)===!1)v=D0.get(D).__webglMultisampledFramebuffer;else if(Array.isArray(S0))v=S0[f];else v=S0;V.copy(D.viewport),j.copy(D.scissor),m=D.scissorTest}else V.copy(U0).multiplyScalar(r).floor(),j.copy(T0).multiplyScalar(r).floor(),m=m0;if(f!==0)v=WY;if(z0.bindFramebuffer(I.FRAMEBUFFER,v)&&x)z0.drawBuffers(D,v);if(z0.viewport(V),z0.scissor(j),z0.setScissorTest(m),t){let E0=D0.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+S,E0.__webglTexture,f)}else if(Y0){let E0=S;for(let P0=0;P0<D.textures.length;P0++){let S0=D0.get(D.textures[P0]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+P0,S0.__webglTexture,f,E0)}}else if(D!==null&&f!==0){let E0=D0.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,E0.__webglTexture,f)}b=-1},this.readRenderTargetPixels=function(D,S,f,x,v,t,Y0,O0=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E0=D0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Y0!==void 0)E0=E0[Y0];if(E0){z0.bindFramebuffer(I.FRAMEBUFFER,E0);try{let P0=D.textures[O0],S0=P0.format,B0=P0.type;if(!o0.textureFormatReadable(S0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!o0.textureTypeReadable(B0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(S>=0&&S<=D.width-x&&(f>=0&&f<=D.height-v)){if(D.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+O0);I.readPixels(S,f,x,v,L0.convert(S0),L0.convert(B0),t)}}finally{let P0=T!==null?D0.get(T).__webglFramebuffer:null;z0.bindFramebuffer(I.FRAMEBUFFER,P0)}}},this.readRenderTargetPixelsAsync=async function(D,S,f,x,v,t,Y0,O0=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let E0=D0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Y0!==void 0)E0=E0[Y0];if(E0)if(S>=0&&S<=D.width-x&&(f>=0&&f<=D.height-v)){z0.bindFramebuffer(I.FRAMEBUFFER,E0);let P0=D.textures[O0],S0=P0.format,B0=P0.type;if(!o0.textureFormatReadable(S0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!o0.textureTypeReadable(B0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let l0=I.createBuffer();if(I.bindBuffer(I.PIXEL_PACK_BUFFER,l0),I.bufferData(I.PIXEL_PACK_BUFFER,t.byteLength,I.STREAM_READ),D.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+O0);I.readPixels(S,f,x,v,L0.convert(S0),L0.convert(B0),0);let t0=T!==null?D0.get(T).__webglFramebuffer:null;z0.bindFramebuffer(I.FRAMEBUFFER,t0);let UJ=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yW(I,UJ,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,l0),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,t),I.deleteBuffer(l0),I.deleteSync(UJ),t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,S=null,f=0){let x=Math.pow(2,-f),v=Math.floor(D.image.width*x),t=Math.floor(D.image.height*x),Y0=S!==null?S.x:0,O0=S!==null?S.y:0;I0.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,f,0,0,Y0,O0,v,t),z0.unbindTexture()};let HY=I.createFramebuffer(),YY=I.createFramebuffer();if(this.copyTextureToTexture=function(D,S,f=null,x=null,v=0,t=null){if(t===null)if(v!==0)e8("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),t=v,v=0;else t=0;let Y0,O0,E0,P0,S0,B0,l0,t0,UJ,ZJ=D.isCompressedTexture?D.mipmaps[t]:D.image;if(f!==null)Y0=f.max.x-f.min.x,O0=f.max.y-f.min.y,E0=f.isBox3?f.max.z-f.min.z:1,P0=f.min.x,S0=f.min.y,B0=f.isBox3?f.min.z:0;else{let mJ=Math.pow(2,-v);if(Y0=Math.floor(ZJ.width*mJ),O0=Math.floor(ZJ.height*mJ),D.isDataArrayTexture)E0=ZJ.depth;else if(D.isData3DTexture)E0=Math.floor(ZJ.depth*mJ);else E0=1;P0=0,S0=0,B0=0}if(x!==null)l0=x.x,t0=x.y,UJ=x.z;else l0=0,t0=0,UJ=0;let JJ=L0.convert(S.format),C0=L0.convert(S.type),XJ;if(S.isData3DTexture)I0.setTexture3D(S,0),XJ=I.TEXTURE_3D;else if(S.isDataArrayTexture||S.isCompressedArrayTexture)I0.setTexture2DArray(S,0),XJ=I.TEXTURE_2D_ARRAY;else I0.setTexture2D(S,0),XJ=I.TEXTURE_2D;I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,S.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,S.unpackAlignment);let n0=I.getParameter(I.UNPACK_ROW_LENGTH),jJ=I.getParameter(I.UNPACK_IMAGE_HEIGHT),E9=I.getParameter(I.UNPACK_SKIP_PIXELS),vJ=I.getParameter(I.UNPACK_SKIP_ROWS),s9=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ZJ.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ZJ.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,P0),I.pixelStorei(I.UNPACK_SKIP_ROWS,S0),I.pixelStorei(I.UNPACK_SKIP_IMAGES,B0);let KJ=D.isDataArrayTexture||D.isData3DTexture,dJ=S.isDataArrayTexture||S.isData3DTexture;if(D.isDepthTexture){let mJ=D0.get(D),wJ=D0.get(S),TJ=D0.get(mJ.__renderTarget),d7=D0.get(wJ.__renderTarget);z0.bindFramebuffer(I.READ_FRAMEBUFFER,TJ.__webglFramebuffer),z0.bindFramebuffer(I.DRAW_FRAMEBUFFER,d7.__webglFramebuffer);for(let s8=0;s8<E0;s8++){if(KJ)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,D0.get(D).__webglTexture,v,B0+s8),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,D0.get(S).__webglTexture,t,UJ+s8);I.blitFramebuffer(P0,S0,Y0,O0,l0,t0,Y0,O0,I.DEPTH_BUFFER_BIT,I.NEAREST)}z0.bindFramebuffer(I.READ_FRAMEBUFFER,null),z0.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(v!==0||D.isRenderTargetTexture||D0.has(D)){let mJ=D0.get(D),wJ=D0.get(S);z0.bindFramebuffer(I.READ_FRAMEBUFFER,HY),z0.bindFramebuffer(I.DRAW_FRAMEBUFFER,YY);for(let TJ=0;TJ<E0;TJ++){if(KJ)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mJ.__webglTexture,v,B0+TJ);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mJ.__webglTexture,v);if(dJ)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wJ.__webglTexture,t,UJ+TJ);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wJ.__webglTexture,t);if(v!==0)I.blitFramebuffer(P0,S0,Y0,O0,l0,t0,Y0,O0,I.COLOR_BUFFER_BIT,I.NEAREST);else if(dJ)I.copyTexSubImage3D(XJ,t,l0,t0,UJ+TJ,P0,S0,Y0,O0);else I.copyTexSubImage2D(XJ,t,l0,t0,P0,S0,Y0,O0)}z0.bindFramebuffer(I.READ_FRAMEBUFFER,null),z0.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(dJ)if(D.isDataTexture||D.isData3DTexture)I.texSubImage3D(XJ,t,l0,t0,UJ,Y0,O0,E0,JJ,C0,ZJ.data);else if(S.isCompressedArrayTexture)I.compressedTexSubImage3D(XJ,t,l0,t0,UJ,Y0,O0,E0,JJ,ZJ.data);else I.texSubImage3D(XJ,t,l0,t0,UJ,Y0,O0,E0,JJ,C0,ZJ);else if(D.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,t,l0,t0,Y0,O0,JJ,C0,ZJ.data);else if(D.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,t,l0,t0,ZJ.width,ZJ.height,JJ,ZJ.data);else I.texSubImage2D(I.TEXTURE_2D,t,l0,t0,Y0,O0,JJ,C0,ZJ);if(I.pixelStorei(I.UNPACK_ROW_LENGTH,n0),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jJ),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E9),I.pixelStorei(I.UNPACK_SKIP_ROWS,vJ),I.pixelStorei(I.UNPACK_SKIP_IMAGES,s9),t===0&&S.generateMipmaps)I.generateMipmap(XJ);z0.unbindTexture()},this.copyTextureToTexture3D=function(D,S,f=null,x=null,v=0){return e8('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,S,f,x,v)},this.initRenderTarget=function(D){if(D0.get(D).__webglFramebuffer===void 0)I0.setupRenderTarget(D)},this.initTexture=function(D){if(D.isCubeTexture)I0.setTextureCube(D,0);else if(D.isData3DTexture)I0.setTexture3D(D,0);else if(D.isDataArrayTexture||D.isCompressedArrayTexture)I0.setTexture2DArray(D,0);else I0.setTexture2D(D,0);z0.unbindTexture()},this.resetState=function(){y=0,w=0,T=null,z0.reset(),V0.reset()},typeof __THREE_DEVTOOLS__!=="undefined")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return H$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=x0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=x0._getUnpackColorSpace()}}function x$(J,Q){if(Q===Q$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===y9||Q===G6){let $=J.getIndex();if($===null){let Y=[],X=J.getAttribute("position");if(X!==void 0){for(let K=0;K<X.count;K++)Y.push(K);J.setIndex(Y),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===y9)for(let Y=1;Y<=Z;Y++)W.push($.getX(0)),W.push($.getX(Y)),W.push($.getX(Y+1));else for(let Y=0;Y<Z;Y++)if(Y%2===0)W.push($.getX(Y)),W.push($.getX(Y+1)),W.push($.getX(Y+2));else W.push($.getX(Y+2)),W.push($.getX(Y+1)),W.push($.getX(Y));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let H=J.clone();return H.setIndex(W),H.clearGroups(),H}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class m$ extends $8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new jH(Q)}),this.register(function(Q){return new vH(Q)}),this.register(function(Q){return new dH(Q)}),this.register(function(Q){return new mH(Q)}),this.register(function(Q){return new uH(Q)}),this.register(function(Q){return new hH(Q)}),this.register(function(Q){return new fH(Q)}),this.register(function(Q){return new xH(Q)}),this.register(function(Q){return new bH(Q)}),this.register(function(Q){return new SH(Q)}),this.register(function(Q){return new gH(Q)}),this.register(function(Q){return new yH(Q)}),this.register(function(Q){return new lH(Q)}),this.register(function(Q){return new pH(Q)}),this.register(function(Q){return new TH(Q)}),this.register(function(Q){return new cH(Q)}),this.register(function(Q){return new nH(Q)})}load(J,Q,$,Z){let W=this,H;if(this.resourcePath!=="")H=this.resourcePath;else if(this.path!==""){let K=u8.extractUrlBase(J);H=u8.resolveURL(K,this.path)}else H=u8.extractUrlBase(J);this.manager.itemStart(J);let Y=function(K){if(Z)Z(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},X=new d8(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(K){try{W.parse(K,H,function(U){Q(U),W.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,H={},Y={},X=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===sH){try{H[p0.KHR_BINARY_GLTF]=new iH(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(H[p0.KHR_BINARY_GLTF].content)}else W=JSON.parse(X.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new eH(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[G.name]=G,H[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case p0.KHR_MATERIALS_UNLIT:H[G]=new AH;break;case p0.KHR_DRACO_MESH_COMPRESSION:H[G]=new oH(W,this.dracoLoader);break;case p0.KHR_TEXTURE_TRANSFORM:H[G]=new aH;break;case p0.KHR_MESH_QUANTIZATION:H[G]=new rH;break;default:if(E.indexOf(G)>=0&&Y[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(H),K.setPlugins(Y),K.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function hE(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var p0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TH{constructor(J){this.parser=J,this.name=p0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,X=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,U=new w0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],LJ);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":K=new d9(U),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new y7(U),K.distance=G;break;case"spot":K=new v7(U),K.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,K.angle=X.spot.outerConeAngle,K.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(K.position.set(0,0,0),w8(K,X),X.intensity!==void 0)K.intensity=X.intensity;return K.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(K),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],Y=(W.extensions&&W.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class AH{constructor(){this.name=p0.KHR_MATERIALS_UNLIT}getMaterialType(){return K8}extendParams(J,Q,$){let Z=[];J.color=new w0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let H=W.baseColorFactor;J.color.setRGB(H[0],H[1],H[2],LJ),J.opacity=H[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,iJ))}return Promise.all(Z)}}class SH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class jH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.clearcoatFactor!==void 0)Q.clearcoat=H.clearcoatFactor;if(H.clearcoatTexture!==void 0)W.push($.assignTexture(Q,"clearcoatMap",H.clearcoatTexture));if(H.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=H.clearcoatRoughnessFactor;if(H.clearcoatRoughnessTexture!==void 0)W.push($.assignTexture(Q,"clearcoatRoughnessMap",H.clearcoatRoughnessTexture));if(H.clearcoatNormalTexture!==void 0){if(W.push($.assignTexture(Q,"clearcoatNormalMap",H.clearcoatNormalTexture)),H.clearcoatNormalTexture.scale!==void 0){let Y=H.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new g0(Y,Y)}}return Promise.all(W)}}class vH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_DISPERSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class yH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.iridescenceFactor!==void 0)Q.iridescence=H.iridescenceFactor;if(H.iridescenceTexture!==void 0)W.push($.assignTexture(Q,"iridescenceMap",H.iridescenceTexture));if(H.iridescenceIor!==void 0)Q.iridescenceIOR=H.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(H.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=H.iridescenceThicknessMinimum;if(H.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=H.iridescenceThicknessMaximum;if(H.iridescenceThicknessTexture!==void 0)W.push($.assignTexture(Q,"iridescenceThicknessMap",H.iridescenceThicknessTexture));return Promise.all(W)}}class hH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SHEEN}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new w0(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let H=Z.extensions[this.name];if(H.sheenColorFactor!==void 0){let Y=H.sheenColorFactor;Q.sheenColor.setRGB(Y[0],Y[1],Y[2],LJ)}if(H.sheenRoughnessFactor!==void 0)Q.sheenRoughness=H.sheenRoughnessFactor;if(H.sheenColorTexture!==void 0)W.push($.assignTexture(Q,"sheenColorMap",H.sheenColorTexture,iJ));if(H.sheenRoughnessTexture!==void 0)W.push($.assignTexture(Q,"sheenRoughnessMap",H.sheenRoughnessTexture));return Promise.all(W)}}class fH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.transmissionFactor!==void 0)Q.transmission=H.transmissionFactor;if(H.transmissionTexture!==void 0)W.push($.assignTexture(Q,"transmissionMap",H.transmissionTexture));return Promise.all(W)}}class xH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_VOLUME}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.thickness=H.thicknessFactor!==void 0?H.thicknessFactor:0,H.thicknessTexture!==void 0)W.push($.assignTexture(Q,"thicknessMap",H.thicknessTexture));Q.attenuationDistance=H.attenuationDistance||1/0;let Y=H.attenuationColor||[1,1,1];return Q.attenuationColor=new w0().setRGB(Y[0],Y[1],Y[2],LJ),Promise.all(W)}}class bH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IOR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class gH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SPECULAR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.specularIntensity=H.specularFactor!==void 0?H.specularFactor:1,H.specularTexture!==void 0)W.push($.assignTexture(Q,"specularIntensityMap",H.specularTexture));let Y=H.specularColorFactor||[1,1,1];if(Q.specularColor=new w0().setRGB(Y[0],Y[1],Y[2],LJ),H.specularColorTexture!==void 0)W.push($.assignTexture(Q,"specularColorMap",H.specularColorTexture,iJ));return Promise.all(W)}}class pH{constructor(J){this.parser=J,this.name=p0.EXT_MATERIALS_BUMP}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.bumpScale=H.bumpFactor!==void 0?H.bumpFactor:1,H.bumpTexture!==void 0)W.push($.assignTexture(Q,"bumpMap",H.bumpTexture));return Promise.all(W)}}class lH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return pJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.anisotropyStrength!==void 0)Q.anisotropy=H.anisotropyStrength;if(H.anisotropyRotation!==void 0)Q.anisotropyRotation=H.anisotropyRotation;if(H.anisotropyTexture!==void 0)W.push($.assignTexture(Q,"anisotropyMap",H.anisotropyTexture));return Promise.all(W)}}class dH{constructor(J){this.parser=J,this.name=p0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],H=Q.options.ktx2Loader;if(!H)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,H)}}class mH{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class uH{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class cH{constructor(J){this.name=p0.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),H=this.parser.options.meshoptDecoder;if(!H||!H.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(Y){let X=Z.byteOffset||0,K=Z.byteLength||0,U=Z.count,G=Z.byteStride,E=new Uint8Array(Y,X,K);if(H.decodeGltfBufferAsync)return H.decodeGltfBufferAsync(U,G,E,Z.mode,Z.filter).then(function(q){return q.buffer});else return H.ready.then(function(){let q=new ArrayBuffer(U*G);return H.decodeGltfBuffer(new Uint8Array(q),U,G,E,Z.mode,Z.filter),q})})}else return null}}class nH{constructor(J){this.name=p0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let K of Z.primitives)if(K.mode!==oJ.TRIANGLES&&K.mode!==oJ.TRIANGLE_STRIP&&K.mode!==oJ.TRIANGLE_FAN&&K.mode!==void 0)return null;let H=$.extensions[this.name].attributes,Y=[],X={};for(let K in H)Y.push(this.parser.getDependency("accessor",H[K]).then((U)=>{return X[K]=U,X[K]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((K)=>{let U=K.pop(),G=U.isGroup?U.children:[U],E=K[0].count,q=[];for(let O of G){let M=new v0,k=new A,N=new PJ,F=new A(1,1,1),_=new _7(O.geometry,O.material,E);for(let L=0;L<E;L++){if(X.TRANSLATION)k.fromBufferAttribute(X.TRANSLATION,L);if(X.ROTATION)N.fromBufferAttribute(X.ROTATION,L);if(X.SCALE)F.fromBufferAttribute(X.SCALE,L);_.setMatrixAt(L,M.compose(k,N,F))}for(let L in X)if(L==="_COLOR_0"){let C=X[L];_.instanceColor=new J9(C.array,C.itemSize,C.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE")O.geometry.setAttribute(L,X[L]);WJ.prototype.copy.call(_,O),this.parser.assignFinalMaterial(_),q.push(_)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var sH="glTF",V6=12,CH={JSON:1313821514,BIN:5130562};class iH{constructor(J){this.name=p0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,V6),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==sH)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-V6,W=new DataView(J,V6),H=0;while(H<Z){let Y=W.getUint32(H,!0);H+=4;let X=W.getUint32(H,!0);if(H+=4,X===CH.JSON){let K=new Uint8Array(J,V6+H,Y);this.content=$.decode(K)}else if(X===CH.BIN){let K=V6+H;this.body=J.slice(K,K+Y)}H+=Y}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oH{constructor(J,Q){if(!Q)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=p0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,H=J.extensions[this.name].attributes,Y={},X={},K={};for(let U in H){let G=l$[U]||U.toLowerCase();Y[G]=H[U]}for(let U in J.attributes){let G=l$[U]||U.toLowerCase();if(H[U]!==void 0){let E=$.accessors[J.attributes[U]],q=n9[E.componentType];K[G]=q.name,X[G]=E.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){Z.decodeDracoFile(U,function(q){for(let O in q.attributes){let M=q.attributes[O],k=X[O];if(k!==void 0)M.normalized=k}G(q)},Y,K,LJ,E)})})}}class aH{constructor(){this.name=p0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class rH{constructor(){this.name=p0.KHR_MESH_QUANTIZATION}}class u$ extends g8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let H=0;H!==Z;H++)Q[H]=$[W+H];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=Y*2,K=Y*3,U=Z-Q,G=($-Q)/U,E=G*G,q=E*G,O=J*K,M=O-K,k=-2*q+3*E,N=q-E,F=1-k,_=N-E+G;for(let L=0;L!==Y;L++){let C=H[M+L+Y],y=H[M+L+X]*U,w=H[O+L+Y],T=H[O+L]*U;W[L]=F*C+_*y+k*w+N*T}return W}}var fE=new PJ;class tH extends u${interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return fE.fromArray(W).normalize().toArray(W),W}}var oJ={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},n9={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wH={9728:z8,9729:Q8,9984:X7,9985:S9,9986:$9,9987:B8},IH={33071:H7,33648:Y7,10497:A9},b$={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},l$={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},c8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xE={CUBICSPLINE:void 0,LINEAR:O7,STEP:J$},g$={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bE(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new p9({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:v8});return J.DefaultMaterial}function G9(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function w8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function gE(J,Q,$){let Z=!1,W=!1,H=!1;for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)H=!0;if(Z&&W&&H)break}if(!Z&&!W&&!H)return Promise.resolve(J);let Y=[],X=[],K=[];for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(Z){let q=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;Y.push(q)}if(W){let q=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;X.push(q)}if(H){let q=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;K.push(q)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(K)]).then(function(U){let G=U[0],E=U[1],q=U[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=E;if(H)J.morphAttributes.color=q;return J.morphTargetsRelative=!0,J})}function pE(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lE(J){let Q,$=J.extensions&&J.extensions[p0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+p$($.attributes);else Q=J.indices+":"+p$(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+p$(J.targets[Z]);return Q}function p$(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function d$(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dE(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var mE=new v0;class eH{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new hE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,H=-1;if(typeof navigator!=="undefined"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,W=Y.indexOf("Firefox")>-1,H=W?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap==="undefined"||$&&Z<17||W&&H<98)this.textureLoader=new S7(this.options.manager);else this.textureLoader=new f7(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new d8(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(H){return H._markDefs&&H._markDefs()}),Promise.all(this._invokeAll(function(H){return H.beforeRoot&&H.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(H){let Y={scene:H[0][Z.scene||0],scenes:H[0],animations:H[1],cameras:H[2],asset:Z.asset,parser:$,userData:{}};return G9(W,Y,Z),w8(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z].joints;for(let Y=0,X=H.length;Y<X;Y++)J[H[Y]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];if(H.mesh!==void 0){if(this._addNodeRef(this.meshCache,H.mesh),H.skin!==void 0)$[H.mesh].isSkinnedMesh=!0}if(H.camera!==void 0)this._addNodeRef(this.cameraCache,H.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(H,Y)=>{let X=this.associations.get(H);if(X!=null)this.associations.set(Y,X);for(let[K,U]of H.children.entries())W(U,Y.children[K])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw new Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,H){return $.getDependency(J,H)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[p0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,H){$.load(u8.resolveURL(Q.uri,Z.path),W,void 0,function(){H(new Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let H=b$[Z.type],Y=n9[Z.componentType],X=Z.normalized===!0,K=new Y(Z.count*H);return Promise.resolve(new GJ(K,H,X))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(H){let Y=H[0],X=b$[Z.type],K=n9[Z.componentType],U=K.BYTES_PER_ELEMENT,G=U*X,E=Z.byteOffset||0,q=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,O=Z.normalized===!0,M,k;if(q&&q!==G){let N=Math.floor(E/q),F="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+N+":"+Z.count,_=Q.cache.get(F);if(!_)M=new K(Y,N*q,Z.count*q/U),_=new N6(M,q/U),Q.cache.add(F,_);k=new x9(_,X,E%q/U,O)}else{if(Y===null)M=new K(Z.count*X);else M=new K(Y,E,Z.count*X);k=new GJ(M,X,O)}if(Z.sparse!==void 0){let N=b$.SCALAR,F=n9[Z.sparse.indices.componentType],_=Z.sparse.indices.byteOffset||0,L=Z.sparse.values.byteOffset||0,C=new F(H[1],_,Z.sparse.count*N),y=new K(H[2],L,Z.sparse.count*X);if(Y!==null)k=new GJ(k.array.slice(),k.itemSize,k.normalized);k.normalized=!1;for(let w=0,T=C.length;w<T;w++){let b=C[w];if(k.setX(b,y[w*X]),X>=2)k.setY(b,y[w*X+1]);if(X>=3)k.setZ(b,y[w*X+2]);if(X>=4)k.setW(b,y[w*X+3]);if(X>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}k.normalized=O}return k})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,H=Q.images[W],Y=this.textureLoader;if(H.uri){let X=$.manager.getHandler(H.uri);if(X!==null)Y=X}return this.loadTextureImage(J,W,Y)}loadTextureImage(J,Q,$){let Z=this,W=this.json,H=W.textures[J],Y=W.images[Q],X=(Y.uri||Y.bufferView)+":"+H.sampler;if(this.textureCache[X])return this.textureCache[X];let K=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=H.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let E=(W.samplers||{})[H.sampler]||{};return U.magFilter=wH[E.magFilter]||Q8,U.minFilter=wH[E.minFilter]||B8,U.wrapS=IH[E.wrapS]||A9,U.wrapT=IH[E.wrapT]||A9,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==z8&&U.minFilter!==Q8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=K,K}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let H=Z.images[J],Y=self.URL||self.webkitURL,X=H.uri||"",K=!1;if(H.bufferView!==void 0)X=$.getDependency("bufferView",H.bufferView).then(function(G){K=!0;let E=new Blob([G],{type:H.mimeType});return X=Y.createObjectURL(E),X});else if(H.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(G){return new Promise(function(E,q){let O=E;if(Q.isImageBitmapLoader===!0)O=function(M){let k=new qJ(M);k.needsUpdate=!0,E(k)};Q.load(u8.resolveURL(G,W.path),O,void 0,q)})}).then(function(G){if(K===!0)Y.revokeObjectURL(X);return w8(G,H),G.userData.mimeType=H.mimeType||dE(H.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(H){if(!H)return null;if($.texCoord!==void 0&&$.texCoord>0)H=H.clone(),H.channel=$.texCoord;if(W.extensions[p0.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[p0.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=W.associations.get(H);H=W.extensions[p0.KHR_TEXTURE_TRANSFORM].extendTexture(H,Y),W.associations.set(H,X)}}if(Z!==void 0)H.colorSpace=Z;return J[Q]=H,H})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,H=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new M6,gJ.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new H9,gJ.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||W||H){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(W)Y+="vertex-colors:";if(H)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),W)X.vertexColors=!0;if(H)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return p9}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],H,Y={},X=W.extensions||{},K=[];if(X[p0.KHR_MATERIALS_UNLIT]){let G=Z[p0.KHR_MATERIALS_UNLIT];H=G.getMaterialType(),K.push(G.extendParams(Y,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(Y.color=new w0(1,1,1),Y.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;Y.color.setRGB(E[0],E[1],E[2],LJ),Y.opacity=E[3]}if(G.baseColorTexture!==void 0)K.push(Q.assignTexture(Y,"map",G.baseColorTexture,iJ));if(Y.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,Y.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(Y,"metalnessMap",G.metallicRoughnessTexture)),K.push(Q.assignTexture(Y,"roughnessMap",G.metallicRoughnessTexture));H=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,Y)})))}if(W.doubleSided===!0)Y.side=sJ;let U=W.alphaMode||g$.OPAQUE;if(U===g$.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===g$.MASK)Y.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&H!==K8){if(K.push(Q.assignTexture(Y,"normalMap",W.normalTexture)),Y.normalScale=new g0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;Y.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&H!==K8){if(K.push(Q.assignTexture(Y,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)Y.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&H!==K8){let G=W.emissiveFactor;Y.emissive=new w0().setRGB(G[0],G[1],G[2],LJ)}if(W.emissiveTexture!==void 0&&H!==K8)K.push(Q.assignTexture(Y,"emissiveMap",W.emissiveTexture,iJ));return Promise.all(K).then(function(){let G=new H(Y);if(W.name)G.name=W.name;if(w8(G,W),Q.associations.set(G,{materials:J}),W.extensions)G9(Z,G,W);return G})}createUniqueName(J){let Q=i0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(Y){return $[p0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return PH(X,Y,Q)})}let H=[];for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=lE(K),G=Z[U];if(G)H.push(G.promise);else{let E;if(K.extensions&&K.extensions[p0.KHR_DRACO_MESH_COMPRESSION])E=W(K);else E=PH(new BJ,K,Q);Z[U]={primitive:K,promise:E},H.push(E)}}return Promise.all(H)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],H=W.primitives,Y=[];for(let X=0,K=H.length;X<K;X++){let U=H[X].material===void 0?bE(this.cache):this.getDependency("material",H[X].material);Y.push(U)}return Y.push(Q.loadGeometries(H)),Promise.all(Y).then(function(X){let K=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let q=0,O=U.length;q<O;q++){let M=U[q],k=H[q],N,F=K[q];if(k.mode===oJ.TRIANGLES||k.mode===oJ.TRIANGLE_STRIP||k.mode===oJ.TRIANGLE_FAN||k.mode===void 0){if(N=W.isSkinnedMesh===!0?new z7(M,F):new _J(M,F),N.isSkinnedMesh===!0)N.normalizeSkinWeights();if(k.mode===oJ.TRIANGLE_STRIP)N.geometry=x$(N.geometry,G6);else if(k.mode===oJ.TRIANGLE_FAN)N.geometry=x$(N.geometry,y9)}else if(k.mode===oJ.LINES)N=new g9(M,F);else if(k.mode===oJ.LINE_STRIP)N=new b9(M,F);else if(k.mode===oJ.LINE_LOOP)N=new C7(M,F);else if(k.mode===oJ.POINTS)N=new w7(M,F);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+k.mode);if(Object.keys(N.geometry.morphAttributes).length>0)pE(N,W);if(N.name=Q.createUniqueName(W.name||"mesh_"+J),w8(N,W),k.extensions)G9(Z,N,k);Q.assignFinalMaterial(N),G.push(N)}for(let q=0,O=G.length;q<O;q++)Q.associations.set(G[q],{meshes:J,primitives:q});if(G.length===1){if(W.extensions)G9(Z,G[0],W);return G[0]}let E=new nJ;if(W.extensions)G9(Z,E,W);Q.associations.set(E,{meshes:J});for(let q=0,O=G.length;q<O;q++)E.add(G[q]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new DJ(b8.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new m8(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return w8(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),H=Z,Y=[],X=[];for(let K=0,U=H.length;K<U;K++){let G=H[K];if(G){Y.push(G);let E=new v0;if(W!==null)E.fromArray(W.array,K*16);X.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new F6(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,H=[],Y=[],X=[],K=[],U=[];for(let G=0,E=Z.channels.length;G<E;G++){let q=Z.channels[G],O=Z.samplers[q.sampler],M=q.target,k=M.node,N=Z.parameters!==void 0?Z.parameters[O.input]:O.input,F=Z.parameters!==void 0?Z.parameters[O.output]:O.output;if(M.node===void 0)continue;H.push(this.getDependency("node",k)),Y.push(this.getDependency("accessor",N)),X.push(this.getDependency("accessor",F)),K.push(O),U.push(M)}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(K),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],O=G[2],M=G[3],k=G[4],N=[];for(let F=0,_=E.length;F<_;F++){let L=E[F],C=q[F],y=O[F],w=M[F],T=k[F];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let b=$._createAnimationTracks(L,C,y,w,T);if(b)for(let z=0;z<b.length;z++)N.push(b[z])}return new A7(W,void 0,N)})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let H=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)H.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,K=Z.weights.length;X<K;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return H})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),H=[],Y=Z.children||[];for(let K=0,U=Y.length;K<U;K++)H.push($.getDependency("node",Y[K]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(H),X]).then(function(K){let U=K[0],G=K[1],E=K[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,mE)});for(let q=0,O=G.length;q<O;q++)U.add(G[q]);return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],H=W.name?Z.createUniqueName(W.name):"",Y=[],X=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(X)Y.push(X);if(W.camera!==void 0)Y.push(Z.getDependency("camera",W.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,W.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){Y.push(K)}),this.nodeCache[J]=Promise.all(Y).then(function(K){let U;if(W.isBone===!0)U=new O6;else if(K.length>1)U=new nJ;else if(K.length===1)U=K[0];else U=new WJ;if(U!==K[0])for(let G=0,E=K.length;G<E;G++)U.add(K[G]);if(W.name)U.userData.name=W.name,U.name=H;if(w8(U,W),W.extensions)G9($,U,W);if(W.matrix!==void 0){let G=new v0;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new nJ;if($.name)W.name=Z.createUniqueName($.name);if(w8(W,$),$.extensions)G9(Q,W,$);let H=$.nodes||[],Y=[];for(let X=0,K=H.length;X<K;X++)Y.push(Z.getDependency("node",H[X]));return Promise.all(Y).then(function(X){for(let U=0,G=X.length;U<G;U++)W.add(X[U]);let K=(U)=>{let G=new Map;for(let[E,q]of Z.associations)if(E instanceof gJ||E instanceof qJ)G.set(E,q);return U.traverse((E)=>{let q=Z.associations.get(E);if(q!=null)G.set(E,q)}),G};return Z.associations=K(W),W})}_createAnimationTracks(J,Q,$,Z,W){let H=[],Y=J.name?J.name:J.uuid,X=[];if(c8[W.path]===c8.weights)J.traverse(function(E){if(E.morphTargetInfluences)X.push(E.name?E.name:E.uuid)});else X.push(Y);let K;switch(c8[W.path]){case c8.weights:K=D8;break;case c8.rotation:K=C8;break;case c8.translation:case c8.scale:K=L8;break;default:switch($.itemSize){case 1:K=D8;break;case 2:case 3:default:K=L8;break}break}let U=Z.interpolation!==void 0?xE[Z.interpolation]:O7,G=this._getArrayFromAccessor($);for(let E=0,q=X.length;E<q;E++){let O=new K(X[E]+"."+c8[W.path],Q.array,G,U);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);H.push(O)}return H}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=d$(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,H=Q.length;W<H;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function Q($){return new(this instanceof C8?tH:u$)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uE(J,Q,$){let Z=Q.attributes,W=new SJ;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],K=X.min,U=X.max;if(K!==void 0&&U!==void 0){if(W.set(new A(K[0],K[1],K[2]),new A(U[0],U[1],U[2])),X.normalized){let G=d$(n9[X.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let H=Q.targets;if(H!==void 0){let X=new A,K=new A;for(let U=0,G=H.length;U<G;U++){let E=H[U];if(E.POSITION!==void 0){let q=$.json.accessors[E.POSITION],O=q.min,M=q.max;if(O!==void 0&&M!==void 0){if(K.setX(Math.max(Math.abs(O[0]),Math.abs(M[0]))),K.setY(Math.max(Math.abs(O[1]),Math.abs(M[1]))),K.setZ(Math.max(Math.abs(O[2]),Math.abs(M[2]))),q.normalized){let k=d$(n9[q.componentType]);K.multiplyScalar(k)}X.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(X)}J.boundingBox=W;let Y=new bJ;W.getCenter(Y.center),Y.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=Y}function PH(J,Q,$){let Z=Q.attributes,W=[];function H(Y,X){return $.getDependency("accessor",Y).then(function(K){J.setAttribute(X,K)})}for(let Y in Z){let X=l$[Y]||Y.toLowerCase();if(X in J.attributes)continue;W.push(H(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});W.push(Y)}if(x0.workingColorSpace!==LJ&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${x0.workingColorSpace}" not supported.`);return w8(J,Q),uE(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?gE(J,Q.targets,$):J})}var c$=new WeakMap;class n$ extends $8{constructor(J){super(J);this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(J){return this.decoderPath=J,this}setDecoderConfig(J){return this.decoderConfig=J,this}setWorkerLimit(J){return this.workerLimit=J,this}load(J,Q,$,Z){let W=new d8(this.manager);W.setPath(this.path),W.setResponseType("arraybuffer"),W.setRequestHeader(this.requestHeader),W.setWithCredentials(this.withCredentials),W.load(J,(H)=>{this.parse(H,Q,Z)},$,Z)}parse(J,Q,$=()=>{}){this.decodeDracoFile(J,Q,null,null,iJ,$).catch($)}decodeDracoFile(J,Q,$,Z,W=LJ,H=()=>{}){let Y={attributeIDs:$||this.defaultAttributeIDs,attributeTypes:Z||this.defaultAttributeTypes,useUniqueIDs:!!$,vertexColorSpace:W};return this.decodeGeometry(J,Y).then(Q).catch(H)}decodeGeometry(J,Q){let $=JSON.stringify(Q);if(c$.has(J)){let X=c$.get(J);if(X.key===$)return X.promise;else if(J.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let Z,W=this.workerNextTaskID++,H=J.byteLength,Y=this._getWorker(W,H).then((X)=>{return Z=X,new Promise((K,U)=>{Z._callbacks[W]={resolve:K,reject:U},Z.postMessage({type:"decode",id:W,taskConfig:Q,buffer:J},[J])})}).then((X)=>this._createGeometry(X.geometry));return Y.catch(()=>!0).then(()=>{if(Z&&W)this._releaseTask(Z,W)}),c$.set(J,{key:$,promise:Y}),Y}_createGeometry(J){let Q=new BJ;if(J.index)Q.setIndex(new GJ(J.index.array,1));for(let $=0;$<J.attributes.length;$++){let Z=J.attributes[$],W=Z.name,H=Z.array,Y=Z.itemSize,X=new GJ(H,Y);if(W==="color")this._assignVertexColorSpace(X,Z.vertexColorSpace),X.normalized=H instanceof Float32Array===!1;Q.setAttribute(W,X)}return Q}_assignVertexColorSpace(J,Q){if(Q!==iJ)return;let $=new w0;for(let Z=0,W=J.count;Z<W;Z++)$.fromBufferAttribute(J,Z),x0.colorSpaceToWorking($,iJ),J.setXYZ(Z,$.r,$.g,$.b)}_loadLibrary(J,Q){let $=new d8(this.manager);return $.setPath(this.decoderPath),$.setResponseType(Q),$.setWithCredentials(this.withCredentials),new Promise((Z,W)=>{$.load(J,Z,void 0,W)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let J=typeof WebAssembly!=="object"||this.decoderConfig.type==="js",Q=[];if(J)Q.push(this._loadLibrary("draco_decoder.js","text"));else Q.push(this._loadLibrary("draco_wasm_wrapper.js","text")),Q.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"));return this.decoderPending=Promise.all(Q).then(($)=>{let Z=$[0];if(!J)this.decoderConfig.wasmBinary=$[1];let W=cE.toString(),H=["/* draco decoder */",Z,"","/* worker */",W.substring(W.indexOf("{")+1,W.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([H]))}),this.decoderPending}_getWorker(J,Q){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let Z=new Worker(this.workerSourceURL);Z._callbacks={},Z._taskCosts={},Z._taskLoad=0,Z.postMessage({type:"init",decoderConfig:this.decoderConfig}),Z.onmessage=function(W){let H=W.data;switch(H.type){case"decode":Z._callbacks[H.id].resolve(H);break;case"error":Z._callbacks[H.id].reject(H);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+H.type+'"')}},this.workerPool.push(Z)}else this.workerPool.sort(function(Z,W){return Z._taskLoad>W._taskLoad?-1:1});let $=this.workerPool[this.workerPool.length-1];return $._taskCosts[J]=Q,$._taskLoad+=Q,$})}_releaseTask(J,Q){J._taskLoad-=J._taskCosts[Q],delete J._callbacks[Q],delete J._taskCosts[Q]}debug(){console.log("Task load: ",this.workerPool.map((J)=>J._taskLoad))}dispose(){for(let J=0;J<this.workerPool.length;++J)this.workerPool[J].terminate();if(this.workerPool.length=0,this.workerSourceURL!=="")URL.revokeObjectURL(this.workerSourceURL);return this}}function cE(){let J,Q;onmessage=function(Y){let X=Y.data;switch(X.type){case"init":J=X.decoderConfig,Q=new Promise(function(G){J.onModuleLoaded=function(E){G({draco:E})},DracoDecoderModule(J)});break;case"decode":let{buffer:K,taskConfig:U}=X;Q.then((G)=>{let E=G.draco,q=new E.Decoder;try{let O=$(E,q,new Int8Array(K),U),M=O.attributes.map((k)=>k.array.buffer);if(O.index)M.push(O.index.array.buffer);self.postMessage({type:"decode",id:X.id,geometry:O},M)}catch(O){console.error(O),self.postMessage({type:"error",id:X.id,error:O.message})}finally{E.destroy(q)}});break}};function $(Y,X,K,U){let{attributeIDs:G,attributeTypes:E}=U,q,O,M=X.GetEncodedGeometryType(K);if(M===Y.TRIANGULAR_MESH)q=new Y.Mesh,O=X.DecodeArrayToMesh(K,K.byteLength,q);else if(M===Y.POINT_CLOUD)q=new Y.PointCloud,O=X.DecodeArrayToPointCloud(K,K.byteLength,q);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!O.ok()||q.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+O.error_msg());let k={index:null,attributes:[]};for(let N in G){let F=self[E[N]],_,L;if(U.useUniqueIDs)L=G[N],_=X.GetAttributeByUniqueId(q,L);else{if(L=X.GetAttributeId(q,Y[G[N]]),L===-1)continue;_=X.GetAttribute(q,L)}let C=W(Y,X,q,N,F,_);if(N==="color")C.vertexColorSpace=U.vertexColorSpace;k.attributes.push(C)}if(M===Y.TRIANGULAR_MESH)k.index=Z(Y,X,q);return Y.destroy(q),k}function Z(Y,X,K){let G=K.num_faces()*3,E=G*4,q=Y._malloc(E);X.GetTrianglesUInt32Array(K,E,q);let O=new Uint32Array(Y.HEAPF32.buffer,q,G).slice();return Y._free(q),{array:O,itemSize:1}}function W(Y,X,K,U,G,E){let q=E.num_components(),M=K.num_points()*q,k=M*G.BYTES_PER_ELEMENT,N=H(Y,G),F=Y._malloc(k);X.GetAttributeDataArrayForAllPoints(K,E,N,k,F);let _=new G(Y.HEAPF32.buffer,F,M).slice();return Y._free(F),{name:U,array:_,itemSize:q}}function H(Y,X){switch(X){case Float32Array:return Y.DT_FLOAT32;case Int8Array:return Y.DT_INT8;case Int16Array:return Y.DT_INT16;case Int32Array:return Y.DT_INT32;case Uint8Array:return Y.DT_UINT8;case Uint16Array:return Y.DT_UINT16;case Uint32Array:return Y.DT_UINT32}}}class JY extends HTMLElement{container;hud;scene;camera;renderer;model;pivotGroup;animationId;isDragging=!1;prevX=0;prevY=0;rotation;targetRotation;scaleFactor;targetScale;position;targetPosition;_wireframeOverlays;wireframeColor;wireframe=!1;disableZoom=!1;disablePan=!1;disableRotate=!1;constructor(){super();this.attachShadow({mode:"open"}),this.container=document.createElement("div"),this.container.style.position="relative",this.shadowRoot.appendChild(this.container),this.hud=document.createElement("div"),this.hud.style.position="absolute",this.hud.style.top="5px",this.hud.style.left="5px",this.hud.style.padding="4px 8px",this.hud.style.background="rgba(0,0,0,0.6)",this.hud.style.color="white",this.hud.style.font="12px monospace",this.hud.style.borderRadius="4px",this.container.appendChild(this.hud),this.rotation=new PJ,this.targetRotation=new PJ,this.scaleFactor=1,this.targetScale=1,this.position=new A(0,0,0),this.targetPosition=new A(0,0,0),this._wireframeOverlays=new Map,this.wireframeColor=new w0(16777215)}static get observedAttributes(){return["scale","pos","rot","disable-zoom","disable-pan","disable-rotate","wireframe","wireframe-color"]}parseAttributes(){this.scaleFactor=parseFloat(this.getAttribute("scale")??"1")||1,this.targetScale=this.scaleFactor;let J=this.getAttribute("pos");if(J){let[Z,W,H]=J.split(",").map(Number);this.position.set(Z||0,W||0,H||0),this.targetPosition.copy(this.position)}else this.position.set(0,0,0),this.targetPosition.set(0,0,0);let Q=this.getAttribute("rot");if(Q){let[Z,W,H]=Q.split(",").map(Number);this.rotation.setFromEuler(new AJ(b8.degToRad(Z||0),b8.degToRad(W||0),b8.degToRad(H||0),"XYZ")),this.targetRotation.copy(this.rotation)}else this.rotation.identity(),this.targetRotation.identity();this.disableZoom=this.hasAttribute("disable-zoom"),this.disablePan=this.hasAttribute("disable-pan"),this.disableRotate=this.hasAttribute("disable-rotate"),this.wireframe=this.hasAttribute("wireframe");let $=this.getAttribute("wireframe-color");if($)try{this.wireframeColor.set($)}catch{}}attributeChangedCallback(J,Q,$){if((J==="wireframe"||J==="wireframe-color")&&this.pivotGroup){if(this.wireframe=this.hasAttribute("wireframe"),J==="wireframe-color"&&$)try{this.wireframeColor.set($||16777215)}catch{}this.updateWireframe()}}updateWireframe(){if(!this.pivotGroup)return;let J=this.wireframeColor;this.pivotGroup.traverse((Q)=>{let $=Q;if(!$.isMesh)return;let Z=this._wireframeOverlays.get($);if(this.wireframe)if(!Z){let W=new P7($.geometry),H=new H9({color:J.getHex(),depthTest:!1}),Y=new g9(W,H);Y.renderOrder=($.renderOrder||0)+1,Y.frustumCulled=!1,$.add(Y),this._wireframeOverlays.set($,{wire:Y,geo:W,mat:H})}else Z.mat.color.copy(J),Z.wire.visible=!0;else if(Z){if(Z.wire.parent)Z.wire.parent.remove(Z.wire);Z.geo.dispose(),Z.mat.dispose(),this._wireframeOverlays.delete($)}})}_disposeAllWireframes(){this._wireframeOverlays.forEach((J)=>{if(J.wire.parent)J.wire.parent.remove(J.wire);J.geo.dispose(),J.mat.dispose()}),this._wireframeOverlays.clear()}connectedCallback(){this.parseAttributes(),this.initScene(),this.loadModel(),this.addInteractions(),this._animate()}disconnectedCallback(){if(this.animationId)cancelAnimationFrame(this.animationId);this._disposeAllWireframes(),this.renderer.dispose()}initScene(){let J=this.clientWidth||600,Q=this.clientHeight||400;this.scene=new V7,this.scene.background=new w0(1118481);let $=J/Q,Z=2;this.camera=new m8(-$*Z,$*Z,Z,-Z,0.1,100),this.camera.position.set(0,0,10),this.renderer=new f$({antialias:!0}),this.renderer.setSize(J,Q),this.renderer.setClearColor(1118481,1),this.container.appendChild(this.renderer.domElement),this.scene.add(new h7(16777215,0.8));let W=new d9(16777215,0.6);W.position.set(5,10,7.5),this.scene.add(W)}loadModel(){let J=this.getAttribute("src");if(!J)return;let Q=new m$,$=new n$;$.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),Q.setDRACOLoader($),Q.load(J,(Z)=>{this.model=Z.scene;let H=new SJ().setFromObject(this.model).getCenter(new A);this.model.position.sub(H),this.pivotGroup=new nJ,this.pivotGroup.add(this.model),this.scene.add(this.pivotGroup),this.pivotGroup.setRotationFromQuaternion(this.rotation),this.pivotGroup.scale.setScalar(this.scaleFactor),this.pivotGroup.position.copy(this.position),this.updateWireframe()},void 0,(Z)=>{console.error("Error loading GLB model:",Z)})}addInteractions(){let J=this.renderer.domElement;J.addEventListener("mousedown",(Q)=>{this.isDragging=!0,this.prevX=Q.clientX,this.prevY=Q.clientY,J.style.cursor="grabbing"}),window.addEventListener("mouseup",()=>{this.isDragging=!1,J.style.cursor="grab"}),J.addEventListener("mouseenter",()=>{J.style.cursor="grab"}),J.addEventListener("mouseleave",()=>{J.style.cursor="default"}),window.addEventListener("mousemove",(Q)=>{if(!this.isDragging||!this.pivotGroup)return;let $=Q.clientX-this.prevX,Z=Q.clientY-this.prevY;if(this.prevX=Q.clientX,this.prevY=Q.clientY,!this.disablePan&&Q.shiftKey)this.targetPosition.x+=$*0.003,this.targetPosition.y-=Z*0.003;else if(!this.disableRotate){let H=new PJ().setFromEuler(new AJ(Z*0.008,$*0.008,0,"XYZ"));this.targetRotation.multiplyQuaternions(H,this.targetRotation)}}),J.addEventListener("wheel",(Q)=>{if(this.disableZoom)return;Q.preventDefault();let $=0.1,Z=Q.deltaY>0?-$:$;this.targetScale=Math.max(0.1,Math.min(5,this.targetScale*(1+Z)))})}_animate(){if(this.animationId=requestAnimationFrame(()=>this._animate()),this.pivotGroup)this.rotation.slerp(this.targetRotation,0.1),this.pivotGroup.setRotationFromQuaternion(this.rotation),this.scaleFactor=b8.lerp(this.scaleFactor,this.targetScale,0.1),this.pivotGroup.scale.setScalar(this.scaleFactor),this.position.lerp(this.targetPosition,0.1),this.pivotGroup.position.copy(this.position);this.renderer.render(this.scene,this.camera)}resetView(){if(this.parseAttributes(),this.pivotGroup)this.pivotGroup.setRotationFromQuaternion(this.rotation),this.pivotGroup.scale.setScalar(this.scaleFactor),this.pivotGroup.position.copy(this.position)}}customElements.define("glb-model-viewer",JY);export{JY as GlbModelViewer};
