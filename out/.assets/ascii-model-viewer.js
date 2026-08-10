var lZ="179";var dZ=0,DQ=1,mZ=2;var LQ=1,uZ=2,K8=3,x8=0,pJ=1,iJ=2,b8=0,Y6=1,VQ=2,zQ=3,BQ=4,cZ=5,S9=100,nZ=101,sZ=102,oZ=103,iZ=104,aZ=200,rZ=201,tZ=202,eZ=203,JW=204,QW=205,$W=206,ZW=207,WW=208,HW=209,YW=210,XW=211,KW=212,UW=213,GW=214,r6=0,t6=1,e6=2,X6=3,J7=4,Q7=5,$7=6,Z7=7,EW=0,qW=1,NW=2,C8=0,OW=1,FW=2,RW=3,MW=4,kW=5,DW=6,LW=7;var j9=301,Z9=302,W7=303,H7=304,K6=306,v9=1000,Y7=1001,X7=1002,w8=1003,K7=1004;var W9=1005;var Z8=1006,y9=1007;var I8=1008;var g8=1009,VW=1010,zW=1011,U6=1012,_Q=1013,h9=1014,p8=1015,G6=1016,CQ=1017,wQ=1018,f9=1020,BW=35902,_W=1021,CW=1022,U8=1023,U7=1026,E6=1027,wW=1028,IQ=1029,IW=1030,PQ=1031;var TQ=1033,G7=33776,E7=33777,q7=33778,N7=33779,AQ=35840,SQ=35841,jQ=35842,vQ=35843,yQ=36196,hQ=37492,fQ=37496,xQ=37808,bQ=37809,gQ=37810,pQ=37811,lQ=37812,dQ=37813,mQ=37814,uQ=37815,cQ=37816,nQ=37817,sQ=37818,oQ=37819,iQ=37820,aQ=37821,O7=36492,rQ=36494,tQ=36495,PW=36283,eQ=36284,J$=36285,Q$=36286;var $$=2300,F7=2301;var Z$=0,q6=1,x9=2;var TW=3201;var AW=0,SW=1,H9="",yJ="srgb",_J="srgb-linear",W$="linear",$J="srgb";var jW=512,vW=513,yW=514,H$=515,hW=516,fW=517,xW=518,bW=519;var Y$="300 es",X$=2000;class l8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,H=Z.length;W<H;W++)Z[W].call(this,J);J.target=null}}}var CJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],HZ=1234567,W6=Math.PI/180,J9=180/Math.PI;function $8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(CJ[J&255]+CJ[J>>8&255]+CJ[J>>16&255]+CJ[J>>24&255]+"-"+CJ[Q&255]+CJ[Q>>8&255]+"-"+CJ[Q>>16&15|64]+CJ[Q>>24&255]+"-"+CJ[$&63|128]+CJ[$>>8&255]+"-"+CJ[$>>16&255]+CJ[$>>24&255]+CJ[Z&255]+CJ[Z>>8&255]+CJ[Z>>16&255]+CJ[Z>>24&255]).toLowerCase()}function g0(J,Q,$){return Math.max(Q,Math.min($,J))}function K$(J,Q){return(J%Q+Q)%Q}function DY(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function LY(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function H6(J,Q,$){return(1-$)*J+$*Q}function VY(J,Q,$,Z){return H6(J,Q,1-Math.exp(-$*Z))}function zY(J,Q=1){return Q-Math.abs(K$(J,Q*2)-Q)}function BY(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function _Y(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function CY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function wY(J,Q){return J+Math.random()*(Q-J)}function IY(J){return J*(0.5-Math.random())}function PY(J){if(J!==void 0)HZ=J;let Q=HZ+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function TY(J){return J*W6}function AY(J){return J*J9}function SY(J){return(J&J-1)===0&&J!==0}function jY(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function vY(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function yY(J,Q,$,Z,W){let{cos:H,sin:Y}=Math,X=H($/2),K=Y($/2),U=H((Q+Z)/2),G=Y((Q+Z)/2),E=H((Q-Z)/2),q=Y((Q-Z)/2),O=H((Z-Q)/2),R=Y((Z-Q)/2);switch(W){case"XYX":J.set(X*G,K*E,K*q,X*U);break;case"YZY":J.set(K*q,X*G,K*E,X*U);break;case"ZXZ":J.set(K*E,K*q,X*G,X*U);break;case"XZX":J.set(X*G,K*R,K*O,X*U);break;case"YXY":J.set(K*O,X*G,K*R,X*U);break;case"ZYZ":J.set(K*R,K*O,X*G,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function Q8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function a0(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var U$={DEG2RAD:W6,RAD2DEG:J9,generateUUID:$8,clamp:g0,euclideanModulo:K$,mapLinear:DY,inverseLerp:LY,lerp:H6,damp:VY,pingpong:zY,smoothstep:BY,smootherstep:_Y,randInt:CY,randFloat:wY,randFloatSpread:IY,seededRandom:PY,degToRad:TY,radToDeg:AY,isPowerOfTwo:SY,ceilPowerOfTwo:jY,floorPowerOfTwo:vY,setQuaternionFromProperEuler:yY,normalize:a0,denormalize:Q8};class x0{constructor(J=0,Q=0){x0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(g0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*$-H*Z+J.x,this.y=W*Z+H*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class PJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,H,Y){let X=$[Z+0],K=$[Z+1],U=$[Z+2],G=$[Z+3],E=W[H+0],q=W[H+1],O=W[H+2],R=W[H+3];if(Y===0){J[Q+0]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G;return}if(Y===1){J[Q+0]=E,J[Q+1]=q,J[Q+2]=O,J[Q+3]=R;return}if(G!==R||X!==E||K!==q||U!==O){let M=1-Y,N=X*E+K*q+U*O+G*R,F=N>=0?1:-1,_=1-N*N;if(_>Number.EPSILON){let w=Math.sqrt(_),S=Math.atan2(w,N*F);M=Math.sin(M*S)/w,Y=Math.sin(Y*S)/w}let L=Y*F;if(X=X*M+E*L,K=K*M+q*L,U=U*M+O*L,G=G*M+R*L,M===1-Y){let w=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=w,K*=w,U*=w,G*=w}}J[Q]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,H){let Y=$[Z],X=$[Z+1],K=$[Z+2],U=$[Z+3],G=W[H],E=W[H+1],q=W[H+2],O=W[H+3];return J[Q]=Y*O+U*G+X*q-K*E,J[Q+1]=X*O+U*E+K*G-Y*q,J[Q+2]=K*O+U*q+Y*E-X*G,J[Q+3]=U*O-Y*G-X*E-K*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:H}=J,Y=Math.cos,X=Math.sin,K=Y($/2),U=Y(Z/2),G=Y(W/2),E=X($/2),q=X(Z/2),O=X(W/2);switch(H){case"XYZ":this._x=E*U*G+K*q*O,this._y=K*q*G-E*U*O,this._z=K*U*O+E*q*G,this._w=K*U*G-E*q*O;break;case"YXZ":this._x=E*U*G+K*q*O,this._y=K*q*G-E*U*O,this._z=K*U*O-E*q*G,this._w=K*U*G+E*q*O;break;case"ZXY":this._x=E*U*G-K*q*O,this._y=K*q*G+E*U*O,this._z=K*U*O+E*q*G,this._w=K*U*G-E*q*O;break;case"ZYX":this._x=E*U*G-K*q*O,this._y=K*q*G+E*U*O,this._z=K*U*O-E*q*G,this._w=K*U*G+E*q*O;break;case"YZX":this._x=E*U*G+K*q*O,this._y=K*q*G+E*U*O,this._z=K*U*O-E*q*G,this._w=K*U*G-E*q*O;break;case"XZY":this._x=E*U*G-K*q*O,this._y=K*q*G-E*U*O,this._z=K*U*O+E*q*G,this._w=K*U*G+E*q*O;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],H=Q[1],Y=Q[5],X=Q[9],K=Q[2],U=Q[6],G=Q[10],E=$+Y+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-X)*q,this._y=(W-K)*q,this._z=(H-Z)*q}else if($>Y&&$>G){let q=2*Math.sqrt(1+$-Y-G);this._w=(U-X)/q,this._x=0.25*q,this._y=(Z+H)/q,this._z=(W+K)/q}else if(Y>G){let q=2*Math.sqrt(1+Y-$-G);this._w=(W-K)/q,this._x=(Z+H)/q,this._y=0.25*q,this._z=(X+U)/q}else{let q=2*Math.sqrt(1+G-$-Y);this._w=(H-Z)/q,this._x=(W+K)/q,this._y=(X+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(g0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:H}=J,Y=Q._x,X=Q._y,K=Q._z,U=Q._w;return this._x=$*U+H*Y+Z*K-W*X,this._y=Z*U+H*X+W*Y-$*K,this._z=W*U+H*K+$*X-Z*Y,this._w=H*U-$*Y-Z*X-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,W=this._z,H=this._w,Y=H*J._w+$*J._x+Z*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=H,this._x=$,this._y=Z,this._z=W,this;let X=1-Y*Y;if(X<=Number.EPSILON){let q=1-Q;return this._w=q*H+Q*this._w,this._x=q*$+Q*this._x,this._y=q*Z+Q*this._y,this._z=q*W+Q*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),G=Math.sin((1-Q)*U)/K,E=Math.sin(Q*U)/K;return this._w=H*G+this._w*E,this._x=$*G+this._x*E,this._y=Z*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(J=0,Q=0,$=0){A.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(YZ.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(YZ.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*H,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*H,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*H,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,H=J.y,Y=J.z,X=J.w,K=2*(H*Z-Y*$),U=2*(Y*Q-W*Z),G=2*(W*$-H*Q);return this.x=Q+X*K+H*G-Y*U,this.y=$+X*U+Y*K-W*G,this.z=Z+X*G+W*U-H*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,H=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-W*Y,this.y=W*H-$*X,this.z=$*Y-Z*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return c7.copy(this).projectOnVector(J),this.sub(c7)}reflect(J){return this.sub(c7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(g0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var c7=new A,YZ=new PJ;class y0{constructor(J,Q,$,Z,W,H,Y,X,K){if(y0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K)}set(J,Q,$,Z,W,H,Y,X,K){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=W,U[5]=X,U[6]=$,U[7]=H,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[3],X=$[6],K=$[1],U=$[4],G=$[7],E=$[2],q=$[5],O=$[8],R=Z[0],M=Z[3],N=Z[6],F=Z[1],_=Z[4],L=Z[7],w=Z[2],S=Z[5],C=Z[8];return W[0]=H*R+Y*F+X*w,W[3]=H*M+Y*_+X*S,W[6]=H*N+Y*L+X*C,W[1]=K*R+U*F+G*w,W[4]=K*M+U*_+G*S,W[7]=K*N+U*L+G*C,W[2]=E*R+q*F+O*w,W[5]=E*M+q*_+O*S,W[8]=E*N+q*L+O*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return Q*H*U-Q*Y*K-$*W*U+$*Y*X+Z*W*K-Z*H*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=U*H-Y*K,E=Y*X-U*W,q=K*W-H*X,O=Q*G+$*E+Z*q;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/O;return J[0]=G*R,J[1]=(Z*K-U*$)*R,J[2]=(Y*$-Z*H)*R,J[3]=E*R,J[4]=(U*Q-Z*X)*R,J[5]=(Z*W-Y*Q)*R,J[6]=q*R,J[7]=($*X-K*Q)*R,J[8]=(H*Q-$*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,H,Y){let X=Math.cos(W),K=Math.sin(W);return this.set($*X,$*K,-$*(X*H+K*Y)+H+J,-Z*K,Z*X,-Z*(-K*H+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(n7.makeScale(J,Q)),this}rotate(J){return this.premultiply(n7.makeRotation(-J)),this}translate(J,Q){return this.premultiply(n7.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var n7=new y0;function G$(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function A9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function gW(){let J=A9("canvas");return J.style.display="block",J}var XZ={};function Q9(J){if(J in XZ)return;XZ[J]=!0,console.warn(J)}function pW(J,Q,$){return new Promise(function(Z,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,$);break;default:Z()}}setTimeout(H,$)})}var KZ=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),UZ=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function hY(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return W;if(this.spaces[H].transfer==="srgb")W.r=z8(W.r),W.g=z8(W.g),W.b=z8(W.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=T9(W.r),W.g=T9(W.g),W.b=T9(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,Y){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,H){return Q9("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,H)},toWorkingColorSpace:function(W,H){return Q9("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:KZ,fromXYZ:UZ,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:KZ,fromXYZ:UZ,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var b0=hY();function z8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function T9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var F9;class E${static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(F9===void 0)F9=A9("canvas");F9.width=J.width,F9.height=J.height;let Z=F9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=F9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=A9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let H=0;H<W.length;H++)W[H]=z8(W[H]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(z8(Q[$]/255)*255);else Q[$]=z8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var fY=0;class N6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fY++}),this.uuid=$8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let H=0,Y=Z.length;H<Y;H++)if(Z[H].isDataTexture)W.push(s7(Z[H].image));else W.push(s7(Z[H]))}else W=s7(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function s7(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return E$.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var xY=0,o7=new A;class qJ extends l8{constructor(J=qJ.DEFAULT_IMAGE,Q=qJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,H=1008,Y=1023,X=1009,K=qJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:xY++}),this.uuid=$8(),this.name="",this.source=new N6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=H,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new x0(0,0),this.repeat=new x0(1,1),this.center=new x0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(o7).x}get height(){return this.source.getSize(o7).y}get depth(){return this.source.getSize(o7).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}qJ.DEFAULT_IMAGE=null;qJ.DEFAULT_MAPPING=300;qJ.DEFAULT_ANISOTROPY=1;class s0{constructor(J=0,Q=0,$=0,Z=1){s0.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*$+H[8]*Z+H[12]*W,this.y=H[1]*Q+H[5]*$+H[9]*Z+H[13]*W,this.z=H[2]*Q+H[6]*$+H[10]*Z+H[14]*W,this.w=H[3]*Q+H[7]*$+H[11]*Z+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,H=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],G=X[8],E=X[1],q=X[5],O=X[9],R=X[2],M=X[6],N=X[10];if(Math.abs(U-E)<0.01&&Math.abs(G-R)<0.01&&Math.abs(O-M)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+R)<0.1&&Math.abs(O+M)<0.1&&Math.abs(K+q+N-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let _=(K+1)/2,L=(q+1)/2,w=(N+1)/2,S=(U+E)/4,C=(G+R)/4,T=(O+M)/4;if(_>L&&_>w)if(_<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(_),Z=S/$,W=C/$;else if(L>w)if(L<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),$=S/Z,W=T/Z;else if(w<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(w),$=C/W,Z=T/W;return this.set($,Z,W,Q),this}let F=Math.sqrt((M-O)*(M-O)+(G-R)*(G-R)+(E-U)*(E-U));if(Math.abs(F)<0.001)F=1;return this.x=(M-O)/F,this.y=(G-R)/F,this.z=(E-U)/F,this.w=Math.acos((K+q+N-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this.w=g0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this.w=g0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q$ extends l8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new s0(0,0,J,Q),this.scissorTest=!1,this.viewport=new s0(0,0,J,Q);let Z={width:J,height:Q,depth:$.depth},W=new qJ(Z);this.textures=[];let H=$.count;for(let Y=0;Y<H;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new N6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class W8 extends q${constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class R7 extends qJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class N$ extends qJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hJ{constructor(J=new A(1/0,1/0,1/0),Q=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(tJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(tJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=tJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=W.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,tJ);else tJ.fromBufferAttribute(W,H);tJ.applyMatrix4(J.matrixWorld),this.expandByPoint(tJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();C6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();C6.copy($.boundingBox)}C6.applyMatrix4(J.matrixWorld),this.union(C6)}}let Z=J.children;for(let W=0,H=Z.length;W<H;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,tJ),tJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(a9),w6.subVectors(this.max,a9),R9.subVectors(J.a,a9),M9.subVectors(J.b,a9),k9.subVectors(J.c,a9),S8.subVectors(M9,R9),j8.subVectors(k9,M9),a8.subVectors(R9,k9);let Q=[0,-S8.z,S8.y,0,-j8.z,j8.y,0,-a8.z,a8.y,S8.z,0,-S8.x,j8.z,0,-j8.x,a8.z,0,-a8.x,-S8.y,S8.x,0,-j8.y,j8.x,0,-a8.y,a8.x,0];if(!i7(Q,R9,M9,k9,w6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!i7(Q,R9,M9,k9,w6))return!1;return I6.crossVectors(S8,j8),Q=[I6.x,I6.y,I6.z],i7(Q,R9,M9,k9,w6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,tJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(tJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return F8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),F8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),F8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),F8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),F8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),F8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),F8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),F8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(F8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var F8=[new A,new A,new A,new A,new A,new A,new A,new A],tJ=new A,C6=new hJ,R9=new A,M9=new A,k9=new A,S8=new A,j8=new A,a8=new A,a9=new A,w6=new A,I6=new A,r8=new A;function i7(J,Q,$,Z,W){for(let H=0,Y=J.length-3;H<=Y;H+=3){r8.fromArray(J,H);let X=W.x*Math.abs(r8.x)+W.y*Math.abs(r8.y)+W.z*Math.abs(r8.z),K=Q.dot(r8),U=$.dot(r8),G=Z.dot(r8);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var bY=new hJ,r9=new A,a7=new A;class lJ{constructor(J=new A,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else bY.setFromPoints(J).getCenter($);let Z=0;for(let W=0,H=J.length;W<H;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;r9.subVectors(J,this.center);let Q=r9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(r9,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else a7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(r9.copy(J.center).add(a7)),this.expandByPoint(r9.copy(J.center).sub(a7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var R8=new A,r7=new A,P6=new A,v8=new A,t7=new A,T6=new A,e7=new A;class b9{constructor(J=new A,Q=new A(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,R8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=R8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return R8.copy(this.origin).addScaledVector(this.direction,Q),R8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){r7.copy(J).add(Q).multiplyScalar(0.5),P6.copy(Q).sub(J).normalize(),v8.copy(this.origin).sub(r7);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot(P6),Y=v8.dot(this.direction),X=-v8.dot(P6),K=v8.lengthSq(),U=Math.abs(1-H*H),G,E,q,O;if(U>0)if(G=H*X-Y,E=H*Y-X,O=W*U,G>=0)if(E>=-O)if(E<=O){let R=1/U;G*=R,E*=R,q=G*(G+H*E+2*Y)+E*(H*G+E+2*X)+K}else E=W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else E=-W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else if(E<=-O)G=Math.max(0,-(-H*W+Y)),E=G>0?-W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else if(E<=O)G=0,E=Math.min(Math.max(-W,-X),W),q=E*(E+2*X)+K;else G=Math.max(0,-(H*W+Y)),E=G>0?W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else E=H>0?-W:W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(r7).addScaledVector(P6,E);return q}intersectSphere(J,Q){R8.subVectors(J.center,this.origin);let $=R8.dot(this.direction),Z=R8.dot(R8)-$*$,W=J.radius*J.radius;if(Z>W)return null;let H=Math.sqrt(W-Z),Y=$-H,X=$+H;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,H,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(K>=0)$=(J.min.x-E.x)*K,Z=(J.max.x-E.x)*K;else $=(J.max.x-E.x)*K,Z=(J.min.x-E.x)*K;if(U>=0)W=(J.min.y-E.y)*U,H=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,H=(J.min.y-E.y)*U;if($>H||W>Z)return null;if(W>$||isNaN($))$=W;if(H<Z||isNaN(Z))Z=H;if(G>=0)Y=(J.min.z-E.z)*G,X=(J.max.z-E.z)*G;else Y=(J.max.z-E.z)*G,X=(J.min.z-E.z)*G;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,R8)!==null}intersectTriangle(J,Q,$,Z,W){t7.subVectors(Q,J),T6.subVectors($,J),e7.crossVectors(t7,T6);let H=this.direction.dot(e7),Y;if(H>0){if(Z)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;v8.subVectors(this.origin,J);let X=Y*this.direction.dot(T6.crossVectors(v8,T6));if(X<0)return null;let K=Y*this.direction.dot(t7.cross(v8));if(K<0)return null;if(X+K>H)return null;let U=-Y*v8.dot(e7);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class v0{constructor(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,O,R,M){if(v0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,O,R,M)}set(J,Q,$,Z,W,H,Y,X,K,U,G,E,q,O,R,M){let N=this.elements;return N[0]=J,N[4]=Q,N[8]=$,N[12]=Z,N[1]=W,N[5]=H,N[9]=Y,N[13]=X,N[2]=K,N[6]=U,N[10]=G,N[14]=E,N[3]=q,N[7]=O,N[11]=R,N[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new v0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/D9.setFromMatrixColumn(J,0).length(),W=1/D9.setFromMatrixColumn(J,1).length(),H=1/D9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*H,Q[9]=$[9]*H,Q[10]=$[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,H=Math.cos($),Y=Math.sin($),X=Math.cos(Z),K=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=H*U,q=H*G,O=Y*U,R=Y*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=K,Q[1]=q+O*K,Q[5]=E-R*K,Q[9]=-Y*X,Q[2]=R-E*K,Q[6]=O+q*K,Q[10]=H*X}else if(J.order==="YXZ"){let E=X*U,q=X*G,O=K*U,R=K*G;Q[0]=E+R*Y,Q[4]=O*Y-q,Q[8]=H*K,Q[1]=H*G,Q[5]=H*U,Q[9]=-Y,Q[2]=q*Y-O,Q[6]=R+E*Y,Q[10]=H*X}else if(J.order==="ZXY"){let E=X*U,q=X*G,O=K*U,R=K*G;Q[0]=E-R*Y,Q[4]=-H*G,Q[8]=O+q*Y,Q[1]=q+O*Y,Q[5]=H*U,Q[9]=R-E*Y,Q[2]=-H*K,Q[6]=Y,Q[10]=H*X}else if(J.order==="ZYX"){let E=H*U,q=H*G,O=Y*U,R=Y*G;Q[0]=X*U,Q[4]=O*K-q,Q[8]=E*K+R,Q[1]=X*G,Q[5]=R*K+E,Q[9]=q*K-O,Q[2]=-K,Q[6]=Y*X,Q[10]=H*X}else if(J.order==="YZX"){let E=H*X,q=H*K,O=Y*X,R=Y*K;Q[0]=X*U,Q[4]=R-E*G,Q[8]=O*G+q,Q[1]=G,Q[5]=H*U,Q[9]=-Y*U,Q[2]=-K*U,Q[6]=q*G+O,Q[10]=E-R*G}else if(J.order==="XZY"){let E=H*X,q=H*K,O=Y*X,R=Y*K;Q[0]=X*U,Q[4]=-G,Q[8]=K*U,Q[1]=E*G+R,Q[5]=H*U,Q[9]=q*G-O,Q[2]=O*G-q,Q[6]=Y*U,Q[10]=R*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(gY,J,pY)}lookAt(J,Q,$){let Z=this.elements;if(bJ.subVectors(J,Q),bJ.lengthSq()===0)bJ.z=1;if(bJ.normalize(),y8.crossVectors($,bJ),y8.lengthSq()===0){if(Math.abs($.z)===1)bJ.x+=0.0001;else bJ.z+=0.0001;bJ.normalize(),y8.crossVectors($,bJ)}return y8.normalize(),A6.crossVectors(bJ,y8),Z[0]=y8.x,Z[4]=A6.x,Z[8]=bJ.x,Z[1]=y8.y,Z[5]=A6.y,Z[9]=bJ.y,Z[2]=y8.z,Z[6]=A6.z,Z[10]=bJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,H=$[0],Y=$[4],X=$[8],K=$[12],U=$[1],G=$[5],E=$[9],q=$[13],O=$[2],R=$[6],M=$[10],N=$[14],F=$[3],_=$[7],L=$[11],w=$[15],S=Z[0],C=Z[4],T=Z[8],b=Z[12],z=Z[1],V=Z[5],v=Z[9],m=Z[13],l=Z[2],c=Z[6],i=Z[10],u=Z[14],r=Z[3],g=Z[7],Z0=Z[11],U0=Z[15];return W[0]=H*S+Y*z+X*l+K*r,W[4]=H*C+Y*V+X*c+K*g,W[8]=H*T+Y*v+X*i+K*Z0,W[12]=H*b+Y*m+X*u+K*U0,W[1]=U*S+G*z+E*l+q*r,W[5]=U*C+G*V+E*c+q*g,W[9]=U*T+G*v+E*i+q*Z0,W[13]=U*b+G*m+E*u+q*U0,W[2]=O*S+R*z+M*l+N*r,W[6]=O*C+R*V+M*c+N*g,W[10]=O*T+R*v+M*i+N*Z0,W[14]=O*b+R*m+M*u+N*U0,W[3]=F*S+_*z+L*l+w*r,W[7]=F*C+_*V+L*c+w*g,W[11]=F*T+_*v+L*i+w*Z0,W[15]=F*b+_*m+L*u+w*U0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],H=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],G=J[6],E=J[10],q=J[14],O=J[3],R=J[7],M=J[11],N=J[15];return O*(+W*X*G-Z*K*G-W*Y*E+$*K*E+Z*Y*q-$*X*q)+R*(+Q*X*q-Q*K*E+W*H*E-Z*H*q+Z*K*U-W*X*U)+M*(+Q*K*G-Q*Y*q-W*H*G+$*H*q+W*Y*U-$*K*U)+N*(-Z*Y*U-Q*X*G+Q*Y*E+Z*H*G-$*H*E+$*X*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=J[9],E=J[10],q=J[11],O=J[12],R=J[13],M=J[14],N=J[15],F=G*M*K-R*E*K+R*X*q-Y*M*q-G*X*N+Y*E*N,_=O*E*K-U*M*K-O*X*q+H*M*q+U*X*N-H*E*N,L=U*R*K-O*G*K+O*Y*q-H*R*q-U*Y*N+H*G*N,w=O*G*X-U*R*X-O*Y*E+H*R*E+U*Y*M-H*G*M,S=Q*F+$*_+Z*L+W*w;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/S;return J[0]=F*C,J[1]=(R*E*W-G*M*W-R*Z*q+$*M*q+G*Z*N-$*E*N)*C,J[2]=(Y*M*W-R*X*W+R*Z*K-$*M*K-Y*Z*N+$*X*N)*C,J[3]=(G*X*W-Y*E*W-G*Z*K+$*E*K+Y*Z*q-$*X*q)*C,J[4]=_*C,J[5]=(U*M*W-O*E*W+O*Z*q-Q*M*q-U*Z*N+Q*E*N)*C,J[6]=(O*X*W-H*M*W-O*Z*K+Q*M*K+H*Z*N-Q*X*N)*C,J[7]=(H*E*W-U*X*W+U*Z*K-Q*E*K-H*Z*q+Q*X*q)*C,J[8]=L*C,J[9]=(O*G*W-U*R*W-O*$*q+Q*R*q+U*$*N-Q*G*N)*C,J[10]=(H*R*W-O*Y*W+O*$*K-Q*R*K-H*$*N+Q*Y*N)*C,J[11]=(U*Y*W-H*G*W-U*$*K+Q*G*K+H*$*q-Q*Y*q)*C,J[12]=w*C,J[13]=(U*R*Z-O*G*Z+O*$*E-Q*R*E-U*$*M+Q*G*M)*C,J[14]=(O*Y*Z-H*R*Z-O*$*X+Q*R*X+H*$*M-Q*Y*M)*C,J[15]=(H*G*Z-U*Y*Z+U*$*X-Q*G*X-H*$*E+Q*Y*E)*C,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,H=J.x,Y=J.y,X=J.z,K=W*H,U=W*Y;return this.set(K*H+$,K*Y-Z*X,K*X+Z*Y,0,K*Y+Z*X,U*Y+$,U*X-Z*H,0,K*X-Z*Y,U*X+Z*H,W*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,H){return this.set(1,$,W,0,J,1,H,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,H=Q._y,Y=Q._z,X=Q._w,K=W+W,U=H+H,G=Y+Y,E=W*K,q=W*U,O=W*G,R=H*U,M=H*G,N=Y*G,F=X*K,_=X*U,L=X*G,w=$.x,S=$.y,C=$.z;return Z[0]=(1-(R+N))*w,Z[1]=(q+L)*w,Z[2]=(O-_)*w,Z[3]=0,Z[4]=(q-L)*S,Z[5]=(1-(E+N))*S,Z[6]=(M+F)*S,Z[7]=0,Z[8]=(O+_)*C,Z[9]=(M-F)*C,Z[10]=(1-(E+R))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=D9.set(Z[0],Z[1],Z[2]).length(),H=D9.set(Z[4],Z[5],Z[6]).length(),Y=D9.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],eJ.copy(this);let K=1/W,U=1/H,G=1/Y;return eJ.elements[0]*=K,eJ.elements[1]*=K,eJ.elements[2]*=K,eJ.elements[4]*=U,eJ.elements[5]*=U,eJ.elements[6]*=U,eJ.elements[8]*=G,eJ.elements[9]*=G,eJ.elements[10]*=G,Q.setFromRotationMatrix(eJ),$.x=W,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2*W/(Q-J),G=2*W/($-Z),E=(Q+J)/(Q-J),q=($+Z)/($-Z),O,R;if(X)O=W/(H-W),R=H*W/(H-W);else if(Y===2000)O=-(H+W)/(H-W),R=-2*H*W/(H-W);else if(Y===2001)O=-H/(H-W),R=-H*W/(H-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=E,K[12]=0,K[1]=0,K[5]=G,K[9]=q,K[13]=0,K[2]=0,K[6]=0,K[10]=O,K[14]=R,K[3]=0,K[7]=0,K[11]=-1,K[15]=0,this}makeOrthographic(J,Q,$,Z,W,H,Y=2000,X=!1){let K=this.elements,U=2/(Q-J),G=2/($-Z),E=-(Q+J)/(Q-J),q=-($+Z)/($-Z),O,R;if(X)O=1/(H-W),R=H/(H-W);else if(Y===2000)O=-2/(H-W),R=-(H+W)/(H-W);else if(Y===2001)O=-1/(H-W),R=-W/(H-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=0,K[12]=E,K[1]=0,K[5]=G,K[9]=0,K[13]=q,K[2]=0,K[6]=0,K[10]=O,K[14]=R,K[3]=0,K[7]=0,K[11]=0,K[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var D9=new A,eJ=new v0,gY=new A(0,0,0),pY=new A(1,1,1),y8=new A,A6=new A,bJ=new A,GZ=new v0,EZ=new PJ;class IJ{constructor(J=0,Q=0,$=0,Z=IJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],H=Z[4],Y=Z[8],X=Z[1],K=Z[5],U=Z[9],G=Z[2],E=Z[6],q=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(g0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-g0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,q),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(g0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-H,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-g0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-H,K);break;case"YZX":if(this._z=Math.asin(g0(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,q);break;case"XZY":if(this._z=Math.asin(-g0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return GZ.makeRotationFromQuaternion(J),this.setFromRotationMatrix(GZ,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return EZ.setFromEuler(this),this.setFromQuaternion(EZ,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}IJ.DEFAULT_ORDER="XYZ";class M7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var lY=0,qZ=new A,L9=new PJ,M8=new v0,S6=new A,t9=new A,dY=new A,mY=new PJ,NZ=new A(1,0,0),OZ=new A(0,1,0),FZ=new A(0,0,1),RZ={type:"added"},uY={type:"removed"},V9={type:"childadded",child:null},JQ={type:"childremoved",child:null};class WJ extends l8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:lY++}),this.uuid=$8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=WJ.DEFAULT_UP.clone();let J=new A,Q=new IJ,$=new PJ,Z=new A(1,1,1);function W(){$.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new v0},normalMatrix:{value:new y0}}),this.matrix=new v0,this.matrixWorld=new v0,this.matrixAutoUpdate=WJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=WJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return L9.setFromAxisAngle(J,Q),this.quaternion.multiply(L9),this}rotateOnWorldAxis(J,Q){return L9.setFromAxisAngle(J,Q),this.quaternion.premultiply(L9),this}rotateX(J){return this.rotateOnAxis(NZ,J)}rotateY(J){return this.rotateOnAxis(OZ,J)}rotateZ(J){return this.rotateOnAxis(FZ,J)}translateOnAxis(J,Q){return qZ.copy(J).applyQuaternion(this.quaternion),this.position.add(qZ.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(NZ,J)}translateY(J){return this.translateOnAxis(OZ,J)}translateZ(J){return this.translateOnAxis(FZ,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(M8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)S6.copy(J);else S6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),t9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)M8.lookAt(t9,S6,this.up);else M8.lookAt(S6,t9,this.up);if(this.quaternion.setFromRotationMatrix(M8),Z)M8.extractRotation(Z.matrixWorld),L9.setFromRotationMatrix(M8),this.quaternion.premultiply(L9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(RZ),V9.child=J,this.dispatchEvent(V9),V9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(uY),JQ.child=J,this.dispatchEvent(JQ),JQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),M8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),M8.multiply(J.parent.matrixWorld);return J.applyMatrix4(M8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(RZ),V9.child=J,this.dispatchEvent(V9),V9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let H=this.children[$].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(t9,J,dY),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(t9,mY,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,H=Z.length;W<H;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];W(J.shapes,G)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(J.materials,this.material[X]));Z.material=Y}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(W(J.animations,X))}}if(Q){let Y=H(J.geometries),X=H(J.materials),K=H(J.textures),U=H(J.images),G=H(J.shapes),E=H(J.skeletons),q=H(J.animations),O=H(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(K.length>0)$.textures=K;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(q.length>0)$.animations=q;if(O.length>0)$.nodes=O}return $.object=Z,$;function H(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}WJ.DEFAULT_UP=new A(0,1,0);WJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;WJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var J8=new A,k8=new A,QQ=new A,D8=new A,z9=new A,B9=new A,MZ=new A,$Q=new A,ZQ=new A,WQ=new A,HQ=new s0,YQ=new s0,XQ=new s0;class oJ{constructor(J=new A,Q=new A,$=new A){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),J8.subVectors(J,Q),Z.cross(J8);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){J8.subVectors(Z,Q),k8.subVectors($,Q),QQ.subVectors(J,Q);let H=J8.dot(J8),Y=J8.dot(k8),X=J8.dot(QQ),K=k8.dot(k8),U=k8.dot(QQ),G=H*K-Y*Y;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(K*X-Y*U)*E,O=(H*U-Y*X)*E;return W.set(1-q-O,O,q)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,D8)===null)return!1;return D8.x>=0&&D8.y>=0&&D8.x+D8.y<=1}static getInterpolation(J,Q,$,Z,W,H,Y,X){if(this.getBarycoord(J,Q,$,Z,D8)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,D8.x),X.addScaledVector(H,D8.y),X.addScaledVector(Y,D8.z),X}static getInterpolatedAttribute(J,Q,$,Z,W,H){return HQ.setScalar(0),YQ.setScalar(0),XQ.setScalar(0),HQ.fromBufferAttribute(J,Q),YQ.fromBufferAttribute(J,$),XQ.fromBufferAttribute(J,Z),H.setScalar(0),H.addScaledVector(HQ,W.x),H.addScaledVector(YQ,W.y),H.addScaledVector(XQ,W.z),H}static isFrontFacing(J,Q,$,Z){return J8.subVectors($,Q),k8.subVectors(J,Q),J8.cross(k8).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return J8.subVectors(this.c,this.b),k8.subVectors(this.a,this.b),J8.cross(k8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return oJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return oJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return oJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return oJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return oJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,H,Y;z9.subVectors(Z,$),B9.subVectors(W,$),$Q.subVectors(J,$);let X=z9.dot($Q),K=B9.dot($Q);if(X<=0&&K<=0)return Q.copy($);ZQ.subVectors(J,Z);let U=z9.dot(ZQ),G=B9.dot(ZQ);if(U>=0&&G<=U)return Q.copy(Z);let E=X*G-U*K;if(E<=0&&X>=0&&U<=0)return H=X/(X-U),Q.copy($).addScaledVector(z9,H);WQ.subVectors(J,W);let q=z9.dot(WQ),O=B9.dot(WQ);if(O>=0&&q<=O)return Q.copy(W);let R=q*K-X*O;if(R<=0&&K>=0&&O<=0)return Y=K/(K-O),Q.copy($).addScaledVector(B9,Y);let M=U*O-q*G;if(M<=0&&G-U>=0&&q-O>=0)return MZ.subVectors(W,Z),Y=(G-U)/(G-U+(q-O)),Q.copy(Z).addScaledVector(MZ,Y);let N=1/(M+R+E);return H=R*N,Y=E*N,Q.copy($).addScaledVector(z9,H).addScaledVector(B9,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var lW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},h8={h:0,s:0,l:0},j6={h:0,s:0,l:0};function KQ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class D0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,b0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=b0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,b0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=b0.workingColorSpace){if(J=K$(J,1),Q=g0(Q,0,1),$=g0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,H=2*$-W;this.r=KQ(H,W,J+0.3333333333333333),this.g=KQ(H,W,J),this.b=KQ(H,W,J-0.3333333333333333)}return b0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=Z[1],Y=Z[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=lW[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=z8(J.r),this.g=z8(J.g),this.b=z8(J.b),this}copyLinearToSRGB(J){return this.r=T9(J.r),this.g=T9(J.g),this.b=T9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return b0.workingToColorSpace(wJ.copy(this),J),Math.round(g0(wJ.r*255,0,255))*65536+Math.round(g0(wJ.g*255,0,255))*256+Math.round(g0(wJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=b0.workingColorSpace){b0.workingToColorSpace(wJ.copy(this),Q);let{r:$,g:Z,b:W}=wJ,H=Math.max($,Z,W),Y=Math.min($,Z,W),X,K,U=(Y+H)/2;if(Y===H)X=0,K=0;else{let G=H-Y;switch(K=U<=0.5?G/(H+Y):G/(2-H-Y),H){case $:X=(Z-W)/G+(Z<W?6:0);break;case Z:X=(W-$)/G+2;break;case W:X=($-Z)/G+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,Q=b0.workingColorSpace){return b0.workingToColorSpace(wJ.copy(this),Q),J.r=wJ.r,J.g=wJ.g,J.b=wJ.b,J}getStyle(J="srgb"){b0.workingToColorSpace(wJ.copy(this),J);let{r:Q,g:$,b:Z}=wJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(h8),this.setHSL(h8.h+J,h8.s+Q,h8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(h8),J.getHSL(j6);let $=H6(h8.h,j6.h,Q),Z=H6(h8.s,j6.s,Q),W=H6(h8.l,j6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var wJ=new D0;D0.NAMES=lW;var cY=0;class VJ extends l8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:cY++}),this.uuid=$8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new D0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let H=[];for(let Y in W){let X=W[Y];delete X.metadata,H.push(X)}return H}if(Q){let W=Z(J.textures),H=Z(J.images);if(W.length>0)$.textures=W;if(H.length>0)$.images=H}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class G8 extends VJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new D0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new IJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var EJ=new A,v6=new x0,nY=0;class GJ{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nY++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)v6.fromBufferAttribute(this,Q),v6.applyMatrix3(J),this.setXY(Q,v6.x,v6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix3(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyMatrix4(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.applyNormalMatrix(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)EJ.fromBufferAttribute(this,Q),EJ.transformDirection(J),this.setXYZ(Q,EJ.x,EJ.y,EJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=Q8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=a0($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=Q8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=Q8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=Q8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=Q8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array),W=a0(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class k7 extends GJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class D7 extends GJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class FJ extends GJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var sY=0,sJ=new v0,UQ=new WJ,_9=new A,gJ=new hJ,e9=new hJ,LJ=new A;class zJ extends l8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sY++}),this.uuid=$8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((G$(J))?D7:k7)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new y0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return sJ.makeRotationFromQuaternion(J),this.applyMatrix4(sJ),this}rotateX(J){return sJ.makeRotationX(J),this.applyMatrix4(sJ),this}rotateY(J){return sJ.makeRotationY(J),this.applyMatrix4(sJ),this}rotateZ(J){return sJ.makeRotationZ(J),this.applyMatrix4(sJ),this}translate(J,Q,$){return sJ.makeTranslation(J,Q,$),this.applyMatrix4(sJ),this}scale(J,Q,$){return sJ.makeScale(J,Q,$),this.applyMatrix4(sJ),this}lookAt(J){return UQ.lookAt(J),UQ.updateMatrix(),this.applyMatrix4(UQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_9).negate(),this.translate(_9.x,_9.y,_9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];$.push(H.x,H.y,H.z||0)}this.setAttribute("position",new FJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new hJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(gJ.setFromBufferAttribute(W),this.morphTargetsRelative)LJ.addVectors(this.boundingBox.min,gJ.min),this.boundingBox.expandByPoint(LJ),LJ.addVectors(this.boundingBox.max,gJ.max),this.boundingBox.expandByPoint(LJ);else this.boundingBox.expandByPoint(gJ.min),this.boundingBox.expandByPoint(gJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new lJ;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(J){let $=this.boundingSphere.center;if(gJ.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W];if(e9.setFromBufferAttribute(Y),this.morphTargetsRelative)LJ.addVectors(gJ.min,e9.min),gJ.expandByPoint(LJ),LJ.addVectors(gJ.max,e9.max),gJ.expandByPoint(LJ);else gJ.expandByPoint(e9.min),gJ.expandByPoint(e9.max)}gJ.getCenter($);let Z=0;for(let W=0,H=J.count;W<H;W++)LJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(LJ));if(Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(LJ.fromBufferAttribute(Y,K),X)_9.fromBufferAttribute(J,K),LJ.add(_9);Z=Math.max(Z,$.distanceToSquared(LJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new GJ(new Float32Array(4*$.count),4));let H=this.getAttribute("tangent"),Y=[],X=[];for(let T=0;T<$.count;T++)Y[T]=new A,X[T]=new A;let K=new A,U=new A,G=new A,E=new x0,q=new x0,O=new x0,R=new A,M=new A;function N(T,b,z){K.fromBufferAttribute($,T),U.fromBufferAttribute($,b),G.fromBufferAttribute($,z),E.fromBufferAttribute(W,T),q.fromBufferAttribute(W,b),O.fromBufferAttribute(W,z),U.sub(K),G.sub(K),q.sub(E),O.sub(E);let V=1/(q.x*O.y-O.x*q.y);if(!isFinite(V))return;R.copy(U).multiplyScalar(O.y).addScaledVector(G,-q.y).multiplyScalar(V),M.copy(G).multiplyScalar(q.x).addScaledVector(U,-O.x).multiplyScalar(V),Y[T].add(R),Y[b].add(R),Y[z].add(R),X[T].add(M),X[b].add(M),X[z].add(M)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let T=0,b=F.length;T<b;++T){let z=F[T],V=z.start,v=z.count;for(let m=V,l=V+v;m<l;m+=3)N(J.getX(m+0),J.getX(m+1),J.getX(m+2))}let _=new A,L=new A,w=new A,S=new A;function C(T){w.fromBufferAttribute(Z,T),S.copy(w);let b=Y[T];_.copy(b),_.sub(w.multiplyScalar(w.dot(b))).normalize(),L.crossVectors(S,b);let V=L.dot(X[T])<0?-1:1;H.setXYZW(T,_.x,_.y,_.z,V)}for(let T=0,b=F.length;T<b;++T){let z=F[T],V=z.start,v=z.count;for(let m=V,l=V+v;m<l;m+=3)C(J.getX(m+0)),C(J.getX(m+1)),C(J.getX(m+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new GJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,q=$.count;E<q;E++)$.setXYZ(E,0,0,0);let Z=new A,W=new A,H=new A,Y=new A,X=new A,K=new A,U=new A,G=new A;if(J)for(let E=0,q=J.count;E<q;E+=3){let O=J.getX(E+0),R=J.getX(E+1),M=J.getX(E+2);Z.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,R),H.fromBufferAttribute(Q,M),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),Y.fromBufferAttribute($,O),X.fromBufferAttribute($,R),K.fromBufferAttribute($,M),Y.add(U),X.add(U),K.add(U),$.setXYZ(O,Y.x,Y.y,Y.z),$.setXYZ(R,X.x,X.y,X.z),$.setXYZ(M,K.x,K.y,K.z)}else for(let E=0,q=Q.count;E<q;E+=3)Z.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),U.subVectors(H,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)LJ.fromBufferAttribute(J,Q),LJ.normalize(),J.setXYZ(Q,LJ.x,LJ.y,LJ.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:G}=Y,E=new K.constructor(X.length*U),q=0,O=0;for(let R=0,M=X.length;R<M;R++){if(Y.isInterleavedBufferAttribute)q=X[R]*Y.data.stride+Y.offset;else q=X[R]*U;for(let N=0;N<U;N++)E[O++]=K[q++]}return new GJ(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new zJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],K=J(X,$);Q.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,G=K.length;U<G;U++){let E=K[U],q=J(E,$);X.push(q)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,X=H.length;Y<X;Y++){let K=H[Y];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let K=$[X];J.data.attributes[X]=K.toJSON(J.data)}let Z={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,E=K.length;G<E;G++){let q=K[G];U.push(q.toJSON(J.data))}if(U.length>0)Z[X]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let K in Z){let U=Z[K];this.setAttribute(K,U.clone(Q))}let W=J.morphAttributes;for(let K in W){let U=[],G=W[K];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(Q));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let K=0,U=H.length;K<U;K++){let G=H[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var kZ=new v0,t8=new b9,y6=new lJ,DZ=new A,h6=new A,f6=new A,x6=new A,GQ=new A,b6=new A,LZ=new A,g6=new A;class RJ extends WJ{constructor(J=new zJ,Q=new G8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,H=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(W&&Y){b6.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],G=W[X];if(U===0)continue;if(GQ.fromBufferAttribute(G,J),H)b6.addScaledVector(GQ,U);else b6.addScaledVector(GQ.sub(Q),U)}Q.add(b6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(y6.copy($.boundingSphere),y6.applyMatrix4(W),t8.copy(J.ray).recast(J.near),y6.containsPoint(t8.origin)===!1){if(t8.intersectSphere(y6,DZ)===null)return;if(t8.origin.distanceToSquared(DZ)>(J.far-J.near)**2)return}if(kZ.copy(W).invert(),t8.copy(J.ray).applyMatrix4(kZ),$.boundingBox!==null){if(t8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,t8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,H=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(Y!==null)if(Array.isArray(H))for(let O=0,R=E.length;O<R;O++){let M=E[O],N=H[M.materialIndex],F=Math.max(M.start,q.start),_=Math.min(Y.count,Math.min(M.start+M.count,q.start+q.count));for(let L=F,w=_;L<w;L+=3){let S=Y.getX(L),C=Y.getX(L+1),T=Y.getX(L+2);if(Z=p6(this,N,J,$,K,U,G,S,C,T),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=M.materialIndex,Q.push(Z)}}else{let O=Math.max(0,q.start),R=Math.min(Y.count,q.start+q.count);for(let M=O,N=R;M<N;M+=3){let F=Y.getX(M),_=Y.getX(M+1),L=Y.getX(M+2);if(Z=p6(this,H,J,$,K,U,G,F,_,L),Z)Z.faceIndex=Math.floor(M/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(H))for(let O=0,R=E.length;O<R;O++){let M=E[O],N=H[M.materialIndex],F=Math.max(M.start,q.start),_=Math.min(X.count,Math.min(M.start+M.count,q.start+q.count));for(let L=F,w=_;L<w;L+=3){let S=L,C=L+1,T=L+2;if(Z=p6(this,N,J,$,K,U,G,S,C,T),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=M.materialIndex,Q.push(Z)}}else{let O=Math.max(0,q.start),R=Math.min(X.count,q.start+q.count);for(let M=O,N=R;M<N;M+=3){let F=M,_=M+1,L=M+2;if(Z=p6(this,H,J,$,K,U,G,F,_,L),Z)Z.faceIndex=Math.floor(M/3),Q.push(Z)}}}}function oY(J,Q,$,Z,W,H,Y,X){let K;if(Q.side===1)K=Z.intersectTriangle(Y,H,W,!0,X);else K=Z.intersectTriangle(W,H,Y,Q.side===0,X);if(K===null)return null;g6.copy(X),g6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(g6);if(U<$.near||U>$.far)return null;return{distance:U,point:g6.clone(),object:J}}function p6(J,Q,$,Z,W,H,Y,X,K,U){J.getVertexPosition(X,h6),J.getVertexPosition(K,f6),J.getVertexPosition(U,x6);let G=oY(J,Q,$,Z,h6,f6,x6,LZ);if(G){let E=new A;if(oJ.getBarycoord(LZ,h6,f6,x6,E),W)G.uv=oJ.getInterpolatedAttribute(W,X,K,U,E,new x0);if(H)G.uv1=oJ.getInterpolatedAttribute(H,X,K,U,E,new x0);if(Y){if(G.normal=oJ.getInterpolatedAttribute(Y,X,K,U,E,new A),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let q={a:X,b:K,c:U,normal:new A,materialIndex:0};oJ.getNormal(h6,f6,x6,q.normal),G.face=q,G.barycoord=E}return G}class g9 extends zJ{constructor(J=1,Q=1,$=1,Z=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:H};let Y=this;Z=Math.floor(Z),W=Math.floor(W),H=Math.floor(H);let X=[],K=[],U=[],G=[],E=0,q=0;O("z","y","x",-1,-1,$,Q,J,H,W,0),O("z","y","x",1,-1,$,Q,-J,H,W,1),O("x","z","y",1,1,J,$,Q,Z,H,2),O("x","z","y",1,-1,J,$,-Q,Z,H,3),O("x","y","z",1,-1,J,Q,$,Z,W,4),O("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(X),this.setAttribute("position",new FJ(K,3)),this.setAttribute("normal",new FJ(U,3)),this.setAttribute("uv",new FJ(G,2));function O(R,M,N,F,_,L,w,S,C,T,b){let z=L/C,V=w/T,v=L/2,m=w/2,l=S/2,c=C+1,i=T+1,u=0,r=0,g=new A;for(let Z0=0;Z0<i;Z0++){let U0=Z0*V-m;for(let T0=0;T0<c;T0++){let m0=T0*z-v;g[R]=m0*F,g[M]=U0*_,g[N]=l,K.push(g.x,g.y,g.z),g[R]=0,g[M]=0,g[N]=S>0?1:-1,U.push(g.x,g.y,g.z),G.push(T0/C),G.push(1-Z0/T),u+=1}}for(let Z0=0;Z0<T;Z0++)for(let U0=0;U0<C;U0++){let T0=E+U0+c*Z0,m0=E+U0+c*(Z0+1),HJ=E+(U0+1)+c*(Z0+1),d=E+(U0+1)+c*Z0;X.push(T0,m0,d),X.push(m0,HJ,d),r+=6}Y.addGroup(q,r,b),q+=r,E+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new g9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function Y9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function TJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=Y9(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function iY(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function O$(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return b0.workingColorSpace}var dW={clone:Y9,merge:TJ},aY=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rY=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class E8 extends VJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aY,this.fragmentShader=rY,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=Y9(J.uniforms),this.uniformsGroups=iY(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let H=this.uniforms[Z].value;if(H&&H.isTexture)Q.uniforms[Z]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[Z]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[Z]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[Z]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[Z]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[Z]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[Z]={type:"m4",value:H.toArray()};else Q.uniforms[Z]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class L7 extends WJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new v0,this.projectionMatrix=new v0,this.projectionMatrixInverse=new v0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var f8=new A,VZ=new x0,zZ=new x0;class OJ extends L7{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=J9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(W6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return J9*2*Math.atan(Math.tan(W6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){f8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(f8.x,f8.y).multiplyScalar(-J/f8.z),f8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(f8.x,f8.y).multiplyScalar(-J/f8.z)}getViewSize(J,Q){return this.getViewBounds(J,VZ,zZ),Q.subVectors(zZ,VZ)}setViewOffset(J,Q,$,Z,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(W6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=H;W+=H.offsetX*Z/X,Q-=H.offsetY*$/K,Z*=H.width/X,$*=H.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var C9=-90,w9=1;class F$ extends WJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new OJ(C9,w9,J,Q);Z.layers=this.layers,this.add(Z);let W=new OJ(C9,w9,J,Q);W.layers=this.layers,this.add(W);let H=new OJ(C9,w9,J,Q);H.layers=this.layers,this.add(H);let Y=new OJ(C9,w9,J,Q);Y.layers=this.layers,this.add(Y);let X=new OJ(C9,w9,J,Q);X.layers=this.layers,this.add(X);let K=new OJ(C9,w9,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,H,Y,X]=Q;for(let K of Q)this.remove(K);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,Y,X,K,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,H),J.setRenderTarget($,2,Z),J.render(Q,Y),J.setRenderTarget($,3,Z),J.render(Q,X),J.setRenderTarget($,4,Z),J.render(Q,K),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),J.render(Q,U),J.setRenderTarget(G,E,q),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class V7 extends qJ{constructor(J=[],Q=301,$,Z,W,H,Y,X,K,U){super(J,Q,$,Z,W,H,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class R$ extends W8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new V7(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new g9(5,5,5),W=new E8({name:"CubemapFromEquirect",uniforms:Y9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new RJ(Z,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new F$(1,10,this).update(J,H),Q.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,$,Z);J.setRenderTarget(W)}}class vJ extends WJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var tY={type:"move"};class O6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new vJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new vJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new vJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,H=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){H=!0;for(let R of J.hand.values()){let M=Q.getJointPose(R,$),N=this._getHandJoint(K,R);if(M!==null)N.matrix.fromArray(M.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=M.radius;N.visible=M!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,O=0.005;if(K.inputState.pinching&&E>q+O)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&E<=q-O)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(tY)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new vJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}class z7 extends WJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new IJ,this.environmentIntensity=1,this.environmentRotation=new IJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class F6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=$8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=$8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=$8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var SJ=new A;class p9{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)SJ.fromBufferAttribute(this,Q),SJ.applyMatrix4(J),this.setXYZ(Q,SJ.x,SJ.y,SJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)SJ.fromBufferAttribute(this,Q),SJ.applyNormalMatrix(J),this.setXYZ(Q,SJ.x,SJ.y,SJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)SJ.fromBufferAttribute(this,Q),SJ.transformDirection(J),this.setXYZ(Q,SJ.x,SJ.y,SJ.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=Q8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=a0($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=a0(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=Q8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=Q8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=Q8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=Q8(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=a0(Q,this.array),$=a0($,this.array),Z=a0(Z,this.array),W=a0(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new GJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new p9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var BZ=new A,_Z=new s0,CZ=new s0,eY=new A,wZ=new v0,l6=new A,EQ=new lJ,IZ=new v0,qQ=new b9;class B7 extends RJ{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new v0,this.bindMatrixInverse=new v0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new hJ;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,l6),this.boundingBox.expandByPoint(l6)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new lJ;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,l6),this.boundingSphere.expandByPoint(l6)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(EQ.copy(this.boundingSphere),EQ.applyMatrix4(Z),J.ray.intersectsSphere(EQ)===!1)return;if(IZ.copy(Z).invert(),qQ.copy(J.ray).applyMatrix4(IZ),this.boundingBox!==null){if(qQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,qQ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new s0,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;_Z.fromBufferAttribute(Z.attributes.skinIndex,J),CZ.fromBufferAttribute(Z.attributes.skinWeight,J),BZ.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let H=CZ.getComponent(W);if(H!==0){let Y=_Z.getComponent(W);wZ.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(eY.copy(BZ).applyMatrix4(wZ),H)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class R6 extends WJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class _7 extends qJ{constructor(J=null,Q=1,$=1,Z,W,H,Y,X,K=1003,U=1003,G,E){super(null,H,Y,X,K,U,Z,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var PZ=new v0,JX=new v0;class M6{constructor(J=[],Q=[]){this.uuid=$8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new v0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new v0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,H=J.length;W<H;W++){let Y=J[W]?J[W].matrixWorld:JX;PZ.multiplyMatrices(Y,Q[W]),PZ.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new M6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new _7(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],H=Q[W];if(H===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),H=new R6;this.bones.push(H),this.boneInverses.push(new v0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z];J.bones.push(H.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class $9 extends GJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var I9=new v0,TZ=new v0,d6=[],AZ=new hJ,QX=new v0,J6=new RJ,Q6=new lJ;class C7 extends RJ{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new $9(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,QX)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new hJ;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,I9),AZ.copy(J.boundingBox).applyMatrix4(I9),this.boundingBox.union(AZ)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new lJ;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,I9),Q6.copy(J.boundingSphere).applyMatrix4(I9),this.boundingSphere.union(Q6)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,H=J*W+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[H+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(J6.geometry=this.geometry,J6.material=this.material,J6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(Q6.copy(this.boundingSphere),Q6.applyMatrix4($),J.ray.intersectsSphere(Q6)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,I9),TZ.multiplyMatrices($,I9),J6.matrixWorld=TZ,J6.raycast(J,d6);for(let H=0,Y=d6.length;H<Y;H++){let X=d6[H];X.instanceId=W,X.object=this,Q.push(X)}d6.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new $9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new _7(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let K=0;K<$.length;K++)H+=$[K];let Y=this.geometry.morphTargetsRelative?1:1-H,X=Z*J;W[X]=Y,W.set($,X+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var NQ=new A,$X=new A,ZX=new y0;class V8{constructor(J=new A(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=NQ.subVectors($,Q).cross($X.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(NQ),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||ZX.getNormalMatrix(J),Z=this.coplanarPoint(NQ).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var e8=new lJ,WX=new x0(0.5,0.5),m6=new A;class k6{constructor(J=new V8,Q=new V8,$=new V8,Z=new V8,W=new V8,H=new V8){this.planes=[J,Q,$,Z,W,H]}set(J,Q,$,Z,W,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(W),Y[5].copy(H),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,H=W[0],Y=W[1],X=W[2],K=W[3],U=W[4],G=W[5],E=W[6],q=W[7],O=W[8],R=W[9],M=W[10],N=W[11],F=W[12],_=W[13],L=W[14],w=W[15];if(Z[0].setComponents(K-H,q-U,N-O,w-F).normalize(),Z[1].setComponents(K+H,q+U,N+O,w+F).normalize(),Z[2].setComponents(K+Y,q+G,N+R,w+_).normalize(),Z[3].setComponents(K-Y,q-G,N-R,w-_).normalize(),$)Z[4].setComponents(X,E,M,L).normalize(),Z[5].setComponents(K-X,q-E,N-M,w-L).normalize();else if(Z[4].setComponents(K-X,q-E,N-M,w-L).normalize(),Q===2000)Z[5].setComponents(K+X,q+E,N+M,w+L).normalize();else if(Q===2001)Z[5].setComponents(X,E,M,L).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();e8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();e8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(e8)}intersectsSprite(J){e8.center.set(0,0,0);let Q=WX.distanceTo(J.center);return e8.radius=0.7071067811865476+Q,e8.applyMatrix4(J.matrixWorld),this.intersectsSphere(e8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(m6.x=Z.normal.x>0?J.max.x:J.min.x,m6.y=Z.normal.y>0?J.max.y:J.min.y,m6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(m6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class P8 extends VJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new D0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var i6=new A,a6=new A,SZ=new v0,$6=new b9,u6=new lJ,OQ=new A,jZ=new A;class l9 extends WJ{constructor(J=new zJ,Q=new P8){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)i6.fromBufferAttribute(Q,Z-1),a6.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=i6.distanceTo(a6);J.setAttribute("lineDistance",new FJ($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(u6.copy($.boundingSphere),u6.applyMatrix4(Z),u6.radius+=W,J.ray.intersectsSphere(u6)===!1)return;SZ.copy(Z).invert(),$6.copy(J.ray).applyMatrix4(SZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let q=Math.max(0,H.start),O=Math.min(U.count,H.start+H.count);for(let R=q,M=O-1;R<M;R+=K){let N=U.getX(R),F=U.getX(R+1),_=c6(this,J,$6,X,N,F,R);if(_)Q.push(_)}if(this.isLineLoop){let R=U.getX(O-1),M=U.getX(q),N=c6(this,J,$6,X,R,M,O-1);if(N)Q.push(N)}}else{let q=Math.max(0,H.start),O=Math.min(E.count,H.start+H.count);for(let R=q,M=O-1;R<M;R+=K){let N=c6(this,J,$6,X,R,R+1,R);if(N)Q.push(N)}if(this.isLineLoop){let R=c6(this,J,$6,X,O-1,q,O-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function c6(J,Q,$,Z,W,H,Y){let X=J.geometry.attributes.position;if(i6.fromBufferAttribute(X,W),a6.fromBufferAttribute(X,H),$.distanceSqToSegment(i6,a6,OQ,jZ)>Z)return;OQ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(OQ);if(U<Q.near||U>Q.far)return;return{distance:U,point:jZ.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var vZ=new A,yZ=new A;class X9 extends l9{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)vZ.fromBufferAttribute(Q,Z),yZ.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+vZ.distanceTo(yZ);J.setAttribute("lineDistance",new FJ($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class w7 extends l9{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class q8 extends VJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new D0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var hZ=new v0,kQ=new b9,n6=new lJ,s6=new A;class d8 extends WJ{constructor(J=new zJ,Q=new q8){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,H=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(n6.copy($.boundingSphere),n6.applyMatrix4(Z),n6.radius+=W,J.ray.intersectsSphere(n6)===!1)return;hZ.copy(Z).invert(),kQ.copy(J.ray).applyMatrix4(hZ);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=$.index,G=$.attributes.position;if(K!==null){let E=Math.max(0,H.start),q=Math.min(K.count,H.start+H.count);for(let O=E,R=q;O<R;O++){let M=K.getX(O);s6.fromBufferAttribute(G,M),fZ(s6,M,X,Z,J,Q,this)}}else{let E=Math.max(0,H.start),q=Math.min(G.count,H.start+H.count);for(let O=E,R=q;O<R;O++)s6.fromBufferAttribute(G,O),fZ(s6,O,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=Z.length;W<H;W++){let Y=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function fZ(J,Q,$,Z,W,H,Y){let X=kQ.distanceSqToPoint(J);if(X<$){let K=new A;kQ.closestPointToPoint(J,K),K.applyMatrix4(Z);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;H.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class I7 extends qJ{constructor(J,Q,$=1014,Z,W,H,Y=1003,X=1003,K,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,Z,W,H,Y,X,U,$,K);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new N6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class D6 extends zJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,H=Q/2,Y=Math.floor($),X=Math.floor(Z),K=Y+1,U=X+1,G=J/Y,E=Q/X,q=[],O=[],R=[],M=[];for(let N=0;N<U;N++){let F=N*E-H;for(let _=0;_<K;_++){let L=_*G-W;O.push(L,-F,0),R.push(0,0,1),M.push(_/Y),M.push(1-N/X)}}for(let N=0;N<X;N++)for(let F=0;F<Y;F++){let _=F+K*N,L=F+K*(N+1),w=F+1+K*(N+1),S=F+1+K*N;q.push(_,L,S),q.push(L,w,S)}this.setIndex(q),this.setAttribute("position",new FJ(O,3)),this.setAttribute("normal",new FJ(R,3)),this.setAttribute("uv",new FJ(M,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new D6(J.width,J.height,J.widthSegments,J.heightSegments)}}class d9 extends VJ{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new D0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new x0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new IJ,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class dJ extends d9{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new x0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return g0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new D0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new D0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new D0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class P7 extends VJ{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new D0(16777215),this.specular=new D0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new x0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new IJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class T7 extends VJ{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new D0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new D0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new x0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new IJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class M$ extends VJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class k$ extends VJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function o6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function HX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function YX(J){function Q(W,H){return J[W]-J[H]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function xZ(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let H=0,Y=0;Y!==Z;++H){let X=$[H]*Q;for(let K=0;K!==Q;++K)W[Y++]=J[X+K]}return W}function mW(J,Q,$,Z){let W=1,H=J[0];while(H!==void 0&&H[Z]===void 0)H=J[W++];if(H===void 0)return;let Y=H[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(...Y);H=J[W++]}while(H!==void 0);else if(Y.toArray!==void 0)do{if(Y=H[Z],Y!==void 0)Q.push(H.time),Y.toArray($,$.length);H=J[W++]}while(H!==void 0);else do{if(Y=H[Z],Y!==void 0)Q.push(H.time),$.push(Y);H=J[W++]}while(H!==void 0)}class m8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let H;Q:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(W=Z,Z=Q[++$],J<Z)break J}H=Q.length;break Q}if(!(J>=W)){let Y=Q[1];if(J<Y)$=2,W=Y;for(let X=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=W,W=Q[--$-1],J>=W)break J}H=$,$=0;break Q}break $}while($<H){let Y=$+H>>>1;if(J<Q[Y])H=Y;else $=Y+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let H=0;H!==Z;++H)Q[H]=$[W+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class D$ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,H=J+1,Y=Z[W],X=Z[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-$;break;case 2402:W=Z.length-2,Y=Q+Z[W]-Z[W+1];break;default:W=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*$-Q;break;case 2402:H=1,X=$+Z[1]-Z[0];break;default:H=J-1,X=Q}let K=($-Q)*0.5,U=this.valueSize;this._weightPrev=K/(Q-Y),this._weightNext=K/(X-$),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,O=($-Q)/(Z-Q),R=O*O,M=R*O,N=-E*M+2*E*R-E*O,F=(1+E)*M+(-1.5-2*E)*R+(-0.5+E)*O+1,_=(-1-q)*M+(1.5+q)*R+0.5*O,L=q*M-q*R;for(let w=0;w!==Y;++w)W[w]=N*H[U+w]+F*H[K+w]+_*H[X+w]+L*H[G+w];return W}}class L$ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=($-Q)/(Z-Q),G=1-U;for(let E=0;E!==Y;++E)W[E]=H[K+E]*G+H[X+E]*U;return W}}class V$ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class mJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=o6(Q,this.TimeBufferType),this.values=o6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:o6(J.times,Array),values:o6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new V$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new L$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new D$(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,H=Z-1;while(W!==Z&&$[W]<J)++W;while(H!==-1&&$[H]>Q)--H;if(++H,W!==0||H!==Z){if(W>=H)H=Math.max(H,1),W=H-1;let Y=this.getValueSize();this.times=$.slice(W,H),this.values=this.values.slice(W*Y,H*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==W;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,H),J=!1;break}H=X}if(Z!==void 0){if(HX(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let K=Z[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,H=1;for(let Y=1;Y<W;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!Z){let G=Y*$,E=G-$,q=G+$;for(let O=0;O!==$;++O){let R=Q[G+O];if(R!==Q[E+O]||R!==Q[q+O]){X=!0;break}}}else X=!0;if(X){if(Y!==H){J[H]=J[Y];let G=Y*$,E=H*$;for(let q=0;q!==$;++q)Q[E+q]=Q[G+q]}++H}}if(W>0){J[H]=J[W];for(let Y=W*$,X=H*$,K=0;K!==$;++K)Q[X+K]=Q[Y+K];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}mJ.prototype.ValueTypeName="";mJ.prototype.TimeBufferType=Float32Array;mJ.prototype.ValueBufferType=Float32Array;mJ.prototype.DefaultInterpolation=2301;class u8 extends mJ{constructor(J,Q,$){super(J,Q,$)}}u8.prototype.ValueTypeName="bool";u8.prototype.ValueBufferType=Array;u8.prototype.DefaultInterpolation=2300;u8.prototype.InterpolantFactoryMethodLinear=void 0;u8.prototype.InterpolantFactoryMethodSmooth=void 0;class A7 extends mJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}A7.prototype.ValueTypeName="color";class B8 extends mJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}B8.prototype.ValueTypeName="number";class z$ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),K=J*Y;for(let U=K+Y;K!==U;K+=4)PJ.slerpFlat(W,0,H,K-Y,H,K,X);return W}}class T8 extends mJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new z$(this.times,this.values,this.getValueSize(),J)}}T8.prototype.ValueTypeName="quaternion";T8.prototype.InterpolantFactoryMethodSmooth=void 0;class c8 extends mJ{constructor(J,Q,$){super(J,Q,$)}}c8.prototype.ValueTypeName="string";c8.prototype.ValueBufferType=Array;c8.prototype.DefaultInterpolation=2300;c8.prototype.InterpolantFactoryMethodLinear=void 0;c8.prototype.InterpolantFactoryMethodSmooth=void 0;class _8 extends mJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}_8.prototype.ValueTypeName="vector";class S7{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=$8(),this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let H=0,Y=$.length;H!==Y;++H)Q.push(KX($[H]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode};for(let W=0,H=$.length;W!==H;++W)Q.push(mJ.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,H=[];for(let Y=0;Y<W;Y++){let X=[],K=[];X.push((Y+W-1)%W,Y,(Y+1)%W),K.push(0,1,0);let U=YX(X);if(X=xZ(X,1,U),K=xZ(K,1,U),!Z&&X[0]===0)X.push(W),K.push(K[0]);H.push(new B8(".morphTargetInfluences["+Q[Y].name+"]",X,K).scale(1/$))}return new this(J,-1,H)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=K.name.match(W);if(U&&U.length>1){let G=U[1],E=Z[G];if(!E)Z[G]=E=[];E.push(K)}}let H=[];for(let Y in Z)H.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return H}static parseAnimation(J,Q){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let $=function(G,E,q,O,R){if(q.length!==0){let M=[],N=[];if(mW(q,M,N,O),M.length!==0)R.push(new G(E,M,N))}},Z=[],W=J.name||"default",H=J.fps||30,Y=J.blendMode,X=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let E=K[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},O;for(O=0;O<E.length;O++)if(E[O].morphTargets)for(let R=0;R<E[O].morphTargets.length;R++)q[E[O].morphTargets[R]]=-1;for(let R in q){let M=[],N=[];for(let F=0;F!==E[O].morphTargets.length;++F){let _=E[O];M.push(_.time),N.push(_.morphTarget===R?1:0)}Z.push(new B8(".morphTargetInfluence["+R+"]",M,N))}X=q.length*H}else{let q=".bones["+Q[G].name+"]";$(_8,q+".position",E,"pos",Z),$(T8,q+".quaternion",E,"rot",Z),$(_8,q+".scale",E,"scl",Z)}}if(Z.length===0)return null;return new this(W,X,Z,Y)}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Q=0;Q<this.tracks.length;Q++)J.push(this.tracks[Q].clone());return new this.constructor(this.name,this.duration,J,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function XX(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return B8;case"vector":case"vector2":case"vector3":case"vector4":return _8;case"color":return A7;case"quaternion":return T8;case"bool":case"boolean":return u8;case"string":return c8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function KX(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=XX(J.type);if(J.times===void 0){let $=[],Z=[];mW(J.keys,$,Z,"value"),J.times=$,J.values=Z}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var X8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class B${constructor(J,Q,$){let Z=this,W=!1,H=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.abortController=new AbortController,this.itemStart=function(U){if(Y++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,H,Y)}W=!0},this.itemEnd=function(U){if(H++,Z.onProgress!==void 0)Z.onProgress(U,H,Y);if(H===Y){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=K.length;G<E;G+=2){let q=K[G],O=K[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return O}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var uW=new B$;class uJ{constructor(J){this.manager=J!==void 0?J:uW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}uJ.DEFAULT_MATERIAL_NAME="__DEFAULT";var L8={};class cW extends Error{constructor(J,Q){super(J);this.response=Q}}class N8 extends uJ{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=X8.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(L8[J]!==void 0){L8[J].push({onLoad:Q,onProgress:$,onError:Z});return}L8[J]=[],L8[J].push({onLoad:Q,onProgress:$,onError:Z});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(H).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let U=L8[J],G=K.body.getReader(),E=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),q=E?parseInt(E):0,O=q!==0,R=0,M=new ReadableStream({start(N){F();function F(){G.read().then(({done:_,value:L})=>{if(_)N.close();else{R+=L.byteLength;let w=new ProgressEvent("progress",{lengthComputable:O,loaded:R,total:q});for(let S=0,C=U.length;S<C;S++){let T=U[S];if(T.onProgress)T.onProgress(w)}N.enqueue(L),F()}},(_)=>{N.error(_)})}}});return new Response(M)}else throw new cW(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(X){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return K.json();default:if(Y==="")return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(Y),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return K.arrayBuffer().then((O)=>q.decode(O))}}}).then((K)=>{X8.add(`file:${J}`,K);let U=L8[J];delete L8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(K)}}).catch((K)=>{let U=L8[J];if(U===void 0)throw this.manager.itemError(J),K;delete L8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var P9=new WeakMap;class _$ extends uJ{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=X8.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0);else{let G=P9.get(H);if(G===void 0)G=[],P9.set(H,G);G.push({onLoad:Q,onError:Z})}return H}let Y=A9("img");function X(){if(U(),Q)Q(this);let G=P9.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}P9.delete(this),W.manager.itemEnd(J)}function K(G){if(U(),Z)Z(G);X8.remove(`image:${J}`);let E=P9.get(this)||[];for(let q=0;q<E.length;q++){let O=E[q];if(O.onError)O.onError(G)}P9.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return X8.add(`image:${J}`,Y),W.manager.itemStart(J),Y.src=J,Y}}class j7 extends uJ{constructor(J){super(J)}load(J,Q,$,Z){let W=new qJ,H=new _$(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class m9 extends WJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new D0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}var FQ=new v0,bZ=new A,gZ=new A;class v7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new x0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new v0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new k6,this._frameExtents=new x0(1,1),this._viewportCount=1,this._viewports=[new s0(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(bZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(bZ),gZ.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(gZ),Q.updateMatrixWorld(),FQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(FQ,Q.coordinateSystem,Q.reversedDepth),Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(FQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class nW extends v7{constructor(){super(new OJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=J9*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class y7 extends m9{constructor(J,Q,$=0,Z=Math.PI/3,W=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(WJ.DEFAULT_UP),this.updateMatrix(),this.target=new WJ,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=H,this.map=null,this.shadow=new nW}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var pZ=new v0,Z6=new A,RQ=new A;class sW extends v7{constructor(){super(new OJ(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new x0(4,2),this._viewportCount=6,this._viewports=[new s0(2,1,1,1),new s0(0,1,1,1),new s0(3,1,1,1),new s0(1,1,1,1),new s0(3,0,1,1),new s0(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(J,Q=0){let $=this.camera,Z=this.matrix,W=J.distance||$.far;if(W!==$.far)$.far=W,$.updateProjectionMatrix();Z6.setFromMatrixPosition(J.matrixWorld),$.position.copy(Z6),RQ.copy($.position),RQ.add(this._cubeDirections[Q]),$.up.copy(this._cubeUps[Q]),$.lookAt(RQ),$.updateMatrixWorld(),Z.makeTranslation(-Z6.x,-Z6.y,-Z6.z),pZ.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pZ,$.coordinateSystem,$.reversedDepth)}}class h7 extends m9{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new sW}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class u9 extends L7{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,H=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,H=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class oW extends v7{constructor(){super(new u9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class K9 extends m9{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(WJ.DEFAULT_UP),this.updateMatrix(),this.target=new WJ,this.shadow=new oW}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class f7 extends m9{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class n8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var MQ=new WeakMap;class x7 extends uJ{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=X8.get(`image-bitmap:${J}`);if(H!==void 0){if(W.manager.itemStart(J),H.then){H.then((K)=>{if(MQ.has(H)===!0){if(Z)Z(MQ.get(H));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(K);return W.manager.itemEnd(J),K}});return}return setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(X8.add(`image-bitmap:${J}`,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if(Z)Z(K);MQ.set(X,K),X8.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});X8.add(`image-bitmap:${J}`,X),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class C$ extends OJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var w$="\\[\\]\\.:\\/",UX=new RegExp("["+w$+"]","g"),I$="[^"+w$+"]",GX="[^"+w$.replace("\\.","")+"]",EX=/((?:WC+[\/:])*)/.source.replace("WC",I$),qX=/(WCOD+)?/.source.replace("WCOD",GX),NX=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",I$),OX=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",I$),FX=new RegExp("^"+EX+qX+NX+OX+"$"),RX=["material","materials","bones","map"];class iW{constructor(J,Q,$){let Z=$||o0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class o0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||o0.parseTrackName(Q),this.node=o0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new o0(J,Q,$);else return new o0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(UX,"")}static parseTrackName(J){let Q=FX.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(RX.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let H=0;H<W.length;H++){let Y=W[H];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=o0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let K=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let H=J[Z];if(H===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}o0.Composite=iW;o0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};o0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};o0.prototype.GetterByBindingType=[o0.prototype._getValue_direct,o0.prototype._getValue_array,o0.prototype._getValue_arrayElement,o0.prototype._getValue_toArray];o0.prototype.SetterByBindingTypeAndVersioning=[[o0.prototype._setValue_direct,o0.prototype._setValue_direct_setNeedsUpdate,o0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_array,o0.prototype._setValue_array_setNeedsUpdate,o0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_arrayElement,o0.prototype._setValue_arrayElement_setNeedsUpdate,o0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[o0.prototype._setValue_fromArray,o0.prototype._setValue_fromArray_setNeedsUpdate,o0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var O1=new Float32Array(1);function P$(J,Q,$,Z){let W=MX(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function MX(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="179";function DH(){let J=null,Q=!1,$=null,Z=null;function W(H,Y){$(H,Y),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(H){$=H},setContext:function(H){J=H}}}function kX(J){let Q=new WeakMap;function $(X,K){let{array:U,usage:G}=X,E=U.byteLength,q=J.createBuffer();J.bindBuffer(K,q),J.bufferData(K,U,G),X.onUploadCallback();let O;if(U instanceof Float32Array)O=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)O=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)O=J.SHORT;else if(U instanceof Uint32Array)O=J.UNSIGNED_INT;else if(U instanceof Int32Array)O=J.INT;else if(U instanceof Int8Array)O=J.BYTE;else if(U instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:O,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:E}}function Z(X,K,U){let{array:G,updateRanges:E}=K;if(J.bindBuffer(U,X),E.length===0)J.bufferSubData(U,0,G);else{E.sort((O,R)=>O.start-R.start);let q=0;for(let O=1;O<E.length;O++){let R=E[q],M=E[O];if(M.start<=R.start+R.count+1)R.count=Math.max(R.count,M.start+M.count-R.start);else++q,E[q]=M}E.length=q+1;for(let O=0,R=E.length;O<R;O++){let M=E[O];J.bufferSubData(U,M.start*G.BYTES_PER_ELEMENT,G,M.start,M.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function H(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=Q.get(X);if(K)J.deleteBuffer(K.buffer),Q.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,K),U.version=X.version}}return{get:W,remove:H,update:Y}}var DX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LX=`#ifdef USE_ALPHAHASH
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
#endif`,VX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_X=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CX=`#ifdef USE_AOMAP
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
#endif`,wX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IX=`#ifdef USE_BATCHING
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
#endif`,PX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SX=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jX=`#ifdef USE_IRIDESCENCE
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
#endif`,vX=`#ifdef USE_BUMPMAP
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
#endif`,yX=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fX=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xX=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bX=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pX=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lX=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dX=`#define PI 3.141592653589793
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
} // validated`,mX=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uX=`vec3 transformedNormal = objectNormal;
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
#endif`,cX=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nX=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sX=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oX=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iX="gl_FragColor = linearToOutputTexel( gl_FragColor );",aX=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rX=`#ifdef USE_ENVMAP
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
#endif`,tX=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eX=`#ifdef USE_ENVMAP
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
#endif`,JK=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QK=`#ifdef USE_ENVMAP
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
#endif`,$K=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZK=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WK=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HK=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YK=`#ifdef USE_GRADIENTMAP
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
}`,XK=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KK=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GK=`uniform bool receiveShadow;
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
#endif`,EK=`#ifdef USE_ENVMAP
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
#endif`,qK=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OK=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FK=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RK=`PhysicalMaterial material;
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
#endif`,MK=`struct PhysicalMaterial {
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
}`,kK=`
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
#endif`,DK=`#if defined( RE_IndirectDiffuse )
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
#endif`,LK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VK=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zK=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BK=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_K=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CK=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PK=`#if defined( USE_POINTS_UV )
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
#endif`,TK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AK=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SK=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jK=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vK=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yK=`#ifdef USE_MORPHTARGETS
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
#endif`,hK=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fK=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xK=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gK=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pK=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lK=`#ifdef USE_NORMALMAP
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
#endif`,dK=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mK=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uK=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cK=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nK=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sK=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oK=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iK=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aK=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rK=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tK=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eK=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$U=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZU=`float getShadowMask() {
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
}`,WU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HU=`#ifdef USE_SKINNING
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
#endif`,YU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XU=`#ifdef USE_SKINNING
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
#endif`,KU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qU=`#ifdef USE_TRANSMISSION
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
#endif`,NU=`#ifdef USE_TRANSMISSION
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
#endif`,OU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DU=`uniform sampler2D t2D;
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
}`,LU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VU=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_U=`#include <common>
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
}`,CU=`#if DEPTH_PACKING == 3200
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
}`,wU=`#define DISTANCE
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
}`,IU=`#define DISTANCE
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
}`,PU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AU=`uniform float scale;
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
}`,SU=`uniform vec3 diffuse;
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
}`,jU=`#include <common>
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
}`,vU=`uniform vec3 diffuse;
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
}`,yU=`#define LAMBERT
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
}`,hU=`#define LAMBERT
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
}`,fU=`#define MATCAP
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
}`,xU=`#define MATCAP
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
}`,bU=`#define NORMAL
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
}`,gU=`#define NORMAL
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
}`,pU=`#define PHONG
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
}`,lU=`#define PHONG
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
}`,dU=`#define STANDARD
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
}`,mU=`#define STANDARD
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
}`,uU=`#define TOON
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
}`,cU=`#define TOON
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
}`,nU=`uniform float size;
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
}`,sU=`uniform vec3 diffuse;
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
}`,oU=`#include <common>
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
}`,iU=`uniform vec3 color;
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
}`,aU=`uniform float rotation;
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
}`,rU=`uniform vec3 diffuse;
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
}`,h0={alphahash_fragment:DX,alphahash_pars_fragment:LX,alphamap_fragment:VX,alphamap_pars_fragment:zX,alphatest_fragment:BX,alphatest_pars_fragment:_X,aomap_fragment:CX,aomap_pars_fragment:wX,batching_pars_vertex:IX,batching_vertex:PX,begin_vertex:TX,beginnormal_vertex:AX,bsdfs:SX,iridescence_fragment:jX,bumpmap_pars_fragment:vX,clipping_planes_fragment:yX,clipping_planes_pars_fragment:hX,clipping_planes_pars_vertex:fX,clipping_planes_vertex:xX,color_fragment:bX,color_pars_fragment:gX,color_pars_vertex:pX,color_vertex:lX,common:dX,cube_uv_reflection_fragment:mX,defaultnormal_vertex:uX,displacementmap_pars_vertex:cX,displacementmap_vertex:nX,emissivemap_fragment:sX,emissivemap_pars_fragment:oX,colorspace_fragment:iX,colorspace_pars_fragment:aX,envmap_fragment:rX,envmap_common_pars_fragment:tX,envmap_pars_fragment:eX,envmap_pars_vertex:JK,envmap_physical_pars_fragment:EK,envmap_vertex:QK,fog_vertex:$K,fog_pars_vertex:ZK,fog_fragment:WK,fog_pars_fragment:HK,gradientmap_pars_fragment:YK,lightmap_pars_fragment:XK,lights_lambert_fragment:KK,lights_lambert_pars_fragment:UK,lights_pars_begin:GK,lights_toon_fragment:qK,lights_toon_pars_fragment:NK,lights_phong_fragment:OK,lights_phong_pars_fragment:FK,lights_physical_fragment:RK,lights_physical_pars_fragment:MK,lights_fragment_begin:kK,lights_fragment_maps:DK,lights_fragment_end:LK,logdepthbuf_fragment:VK,logdepthbuf_pars_fragment:zK,logdepthbuf_pars_vertex:BK,logdepthbuf_vertex:_K,map_fragment:CK,map_pars_fragment:wK,map_particle_fragment:IK,map_particle_pars_fragment:PK,metalnessmap_fragment:TK,metalnessmap_pars_fragment:AK,morphinstance_vertex:SK,morphcolor_vertex:jK,morphnormal_vertex:vK,morphtarget_pars_vertex:yK,morphtarget_vertex:hK,normal_fragment_begin:fK,normal_fragment_maps:xK,normal_pars_fragment:bK,normal_pars_vertex:gK,normal_vertex:pK,normalmap_pars_fragment:lK,clearcoat_normal_fragment_begin:dK,clearcoat_normal_fragment_maps:mK,clearcoat_pars_fragment:uK,iridescence_pars_fragment:cK,opaque_fragment:nK,packing:sK,premultiplied_alpha_fragment:oK,project_vertex:iK,dithering_fragment:aK,dithering_pars_fragment:rK,roughnessmap_fragment:tK,roughnessmap_pars_fragment:eK,shadowmap_pars_fragment:JU,shadowmap_pars_vertex:QU,shadowmap_vertex:$U,shadowmask_pars_fragment:ZU,skinbase_vertex:WU,skinning_pars_vertex:HU,skinning_vertex:YU,skinnormal_vertex:XU,specularmap_fragment:KU,specularmap_pars_fragment:UU,tonemapping_fragment:GU,tonemapping_pars_fragment:EU,transmission_fragment:qU,transmission_pars_fragment:NU,uv_pars_fragment:OU,uv_pars_vertex:FU,uv_vertex:RU,worldpos_vertex:MU,background_vert:kU,background_frag:DU,backgroundCube_vert:LU,backgroundCube_frag:VU,cube_vert:zU,cube_frag:BU,depth_vert:_U,depth_frag:CU,distanceRGBA_vert:wU,distanceRGBA_frag:IU,equirect_vert:PU,equirect_frag:TU,linedashed_vert:AU,linedashed_frag:SU,meshbasic_vert:jU,meshbasic_frag:vU,meshlambert_vert:yU,meshlambert_frag:hU,meshmatcap_vert:fU,meshmatcap_frag:xU,meshnormal_vert:bU,meshnormal_frag:gU,meshphong_vert:pU,meshphong_frag:lU,meshphysical_vert:dU,meshphysical_frag:mU,meshtoon_vert:uU,meshtoon_frag:cU,points_vert:nU,points_frag:sU,shadow_vert:oU,shadow_frag:iU,sprite_vert:aU,sprite_frag:rU},$0={common:{diffuse:{value:new D0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new x0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new D0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new D0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new D0(16777215)},opacity:{value:1},center:{value:new x0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},O8={basic:{uniforms:TJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.fog]),vertexShader:h0.meshbasic_vert,fragmentShader:h0.meshbasic_frag},lambert:{uniforms:TJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,$0.lights,{emissive:{value:new D0(0)}}]),vertexShader:h0.meshlambert_vert,fragmentShader:h0.meshlambert_frag},phong:{uniforms:TJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,$0.lights,{emissive:{value:new D0(0)},specular:{value:new D0(1118481)},shininess:{value:30}}]),vertexShader:h0.meshphong_vert,fragmentShader:h0.meshphong_frag},standard:{uniforms:TJ([$0.common,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.roughnessmap,$0.metalnessmap,$0.fog,$0.lights,{emissive:{value:new D0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:h0.meshphysical_vert,fragmentShader:h0.meshphysical_frag},toon:{uniforms:TJ([$0.common,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.gradientmap,$0.fog,$0.lights,{emissive:{value:new D0(0)}}]),vertexShader:h0.meshtoon_vert,fragmentShader:h0.meshtoon_frag},matcap:{uniforms:TJ([$0.common,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,{matcap:{value:null}}]),vertexShader:h0.meshmatcap_vert,fragmentShader:h0.meshmatcap_frag},points:{uniforms:TJ([$0.points,$0.fog]),vertexShader:h0.points_vert,fragmentShader:h0.points_frag},dashed:{uniforms:TJ([$0.common,$0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:h0.linedashed_vert,fragmentShader:h0.linedashed_frag},depth:{uniforms:TJ([$0.common,$0.displacementmap]),vertexShader:h0.depth_vert,fragmentShader:h0.depth_frag},normal:{uniforms:TJ([$0.common,$0.bumpmap,$0.normalmap,$0.displacementmap,{opacity:{value:1}}]),vertexShader:h0.meshnormal_vert,fragmentShader:h0.meshnormal_frag},sprite:{uniforms:TJ([$0.sprite,$0.fog]),vertexShader:h0.sprite_vert,fragmentShader:h0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:h0.background_vert,fragmentShader:h0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:h0.backgroundCube_vert,fragmentShader:h0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:h0.cube_vert,fragmentShader:h0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:h0.equirect_vert,fragmentShader:h0.equirect_frag},distanceRGBA:{uniforms:TJ([$0.common,$0.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:h0.distanceRGBA_vert,fragmentShader:h0.distanceRGBA_frag},shadow:{uniforms:TJ([$0.lights,$0.fog,{color:{value:new D0(0)},opacity:{value:1}}]),vertexShader:h0.shadow_vert,fragmentShader:h0.shadow_frag}};O8.physical={uniforms:TJ([O8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new x0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new D0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new x0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new D0(0)},specularColor:{value:new D0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new x0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:h0.meshphysical_vert,fragmentShader:h0.meshphysical_frag};var b7={r:0,b:0,g:0},U9=new IJ,tU=new v0;function eU(J,Q,$,Z,W,H,Y){let X=new D0(0),K=H===!0?0:1,U,G,E=null,q=0,O=null;function R(L){let w=L.isScene===!0?L.background:null;if(w&&w.isTexture)w=(L.backgroundBlurriness>0?$:Q).get(w);return w}function M(L){let w=!1,S=R(L);if(S===null)F(X,K);else if(S&&S.isColor)F(S,1),w=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")Z.buffers.color.setClear(0,0,0,1,Y);else if(C==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||w)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function N(L,w){let S=R(w);if(S&&(S.isCubeTexture||S.mapping===K6)){if(G===void 0)G=new RJ(new g9(1,1,1),new E8({name:"BackgroundCubeMaterial",uniforms:Y9(O8.backgroundCube.uniforms),vertexShader:O8.backgroundCube.vertexShader,fragmentShader:O8.backgroundCube.fragmentShader,side:pJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(C,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(U9.copy(w.backgroundRotation),U9.x*=-1,U9.y*=-1,U9.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1)U9.y*=-1,U9.z*=-1;if(G.material.uniforms.envMap.value=S,G.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(tU.makeRotationFromEuler(U9)),G.material.toneMapped=b0.getTransfer(S.colorSpace)!==$J,E!==S||q!==S.version||O!==J.toneMapping)G.material.needsUpdate=!0,E=S,q=S.version,O=J.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(S&&S.isTexture){if(U===void 0)U=new RJ(new D6(2,2),new E8({name:"BackgroundMaterial",uniforms:Y9(O8.background.uniforms),vertexShader:O8.background.vertexShader,fragmentShader:O8.background.fragmentShader,side:x8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=S,U.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,U.material.toneMapped=b0.getTransfer(S.colorSpace)!==$J,S.matrixAutoUpdate===!0)S.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(S.matrix),E!==S||q!==S.version||O!==J.toneMapping)U.material.needsUpdate=!0,E=S,q=S.version,O=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function F(L,w){L.getRGB(b7,O$(J)),Z.buffers.color.setClear(b7.r,b7.g,b7.b,w,Y)}function _(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(L,w=1){X.set(L),K=w,F(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(L){K=L,F(X,K)},render:M,addToRenderList:N,dispose:_}}function JG(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=q(null),H=W,Y=!1;function X(V,v,m,l,c){let i=!1,u=E(l,m,v);if(H!==u)H=u,U(H.object);if(i=O(V,l,m,c),i)R(V,l,m,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(i||Y){if(Y=!1,w(V,v,m,l),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function K(){return J.createVertexArray()}function U(V){return J.bindVertexArray(V)}function G(V){return J.deleteVertexArray(V)}function E(V,v,m){let l=m.wireframe===!0,c=Z[V.id];if(c===void 0)c={},Z[V.id]=c;let i=c[v.id];if(i===void 0)i={},c[v.id]=i;let u=i[l];if(u===void 0)u=q(K()),i[l]=u;return u}function q(V){let v=[],m=[],l=[];for(let c=0;c<$;c++)v[c]=0,m[c]=0,l[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:m,attributeDivisors:l,object:V,attributes:{},index:null}}function O(V,v,m,l){let c=H.attributes,i=v.attributes,u=0,r=m.getAttributes();for(let g in r)if(r[g].location>=0){let U0=c[g],T0=i[g];if(T0===void 0){if(g==="instanceMatrix"&&V.instanceMatrix)T0=V.instanceMatrix;if(g==="instanceColor"&&V.instanceColor)T0=V.instanceColor}if(U0===void 0)return!0;if(U0.attribute!==T0)return!0;if(T0&&U0.data!==T0.data)return!0;u++}if(H.attributesNum!==u)return!0;if(H.index!==l)return!0;return!1}function R(V,v,m,l){let c={},i=v.attributes,u=0,r=m.getAttributes();for(let g in r)if(r[g].location>=0){let U0=i[g];if(U0===void 0){if(g==="instanceMatrix"&&V.instanceMatrix)U0=V.instanceMatrix;if(g==="instanceColor"&&V.instanceColor)U0=V.instanceColor}let T0={};if(T0.attribute=U0,U0&&U0.data)T0.data=U0.data;c[g]=T0,u++}H.attributes=c,H.attributesNum=u,H.index=l}function M(){let V=H.newAttributes;for(let v=0,m=V.length;v<m;v++)V[v]=0}function N(V){F(V,0)}function F(V,v){let{newAttributes:m,enabledAttributes:l,attributeDivisors:c}=H;if(m[V]=1,l[V]===0)J.enableVertexAttribArray(V),l[V]=1;if(c[V]!==v)J.vertexAttribDivisor(V,v),c[V]=v}function _(){let{newAttributes:V,enabledAttributes:v}=H;for(let m=0,l=v.length;m<l;m++)if(v[m]!==V[m])J.disableVertexAttribArray(m),v[m]=0}function L(V,v,m,l,c,i,u){if(u===!0)J.vertexAttribIPointer(V,v,m,c,i);else J.vertexAttribPointer(V,v,m,l,c,i)}function w(V,v,m,l){M();let c=l.attributes,i=m.getAttributes(),u=v.defaultAttributeValues;for(let r in i){let g=i[r];if(g.location>=0){let Z0=c[r];if(Z0===void 0){if(r==="instanceMatrix"&&V.instanceMatrix)Z0=V.instanceMatrix;if(r==="instanceColor"&&V.instanceColor)Z0=V.instanceColor}if(Z0!==void 0){let{normalized:U0,itemSize:T0}=Z0,m0=Q.get(Z0);if(m0===void 0)continue;let{buffer:HJ,type:d,bytesPerElement:W0}=m0,k0=d===J.INT||d===J.UNSIGNED_INT||Z0.gpuType===_Q;if(Z0.isInterleavedBufferAttribute){let G0=Z0.data,R0=G0.stride,u0=Z0.offset;if(G0.isInstancedInterleavedBuffer){for(let c0=0;c0<g.locationSize;c0++)F(g.location+c0,G0.meshPerAttribute);if(V.isInstancedMesh!==!0&&l._maxInstanceCount===void 0)l._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let c0=0;c0<g.locationSize;c0++)N(g.location+c0);J.bindBuffer(J.ARRAY_BUFFER,HJ);for(let c0=0;c0<g.locationSize;c0++)L(g.location+c0,T0/g.locationSize,d,U0,R0*W0,(u0+T0/g.locationSize*c0)*W0,k0)}else{if(Z0.isInstancedBufferAttribute){for(let G0=0;G0<g.locationSize;G0++)F(g.location+G0,Z0.meshPerAttribute);if(V.isInstancedMesh!==!0&&l._maxInstanceCount===void 0)l._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let G0=0;G0<g.locationSize;G0++)N(g.location+G0);J.bindBuffer(J.ARRAY_BUFFER,HJ);for(let G0=0;G0<g.locationSize;G0++)L(g.location+G0,T0/g.locationSize,d,U0,T0*W0,T0/g.locationSize*G0*W0,k0)}}else if(u!==void 0){let U0=u[r];if(U0!==void 0)switch(U0.length){case 2:J.vertexAttrib2fv(g.location,U0);break;case 3:J.vertexAttrib3fv(g.location,U0);break;case 4:J.vertexAttrib4fv(g.location,U0);break;default:J.vertexAttrib1fv(g.location,U0)}}}}_()}function S(){b();for(let V in Z){let v=Z[V];for(let m in v){let l=v[m];for(let c in l)G(l[c].object),delete l[c];delete v[m]}delete Z[V]}}function C(V){if(Z[V.id]===void 0)return;let v=Z[V.id];for(let m in v){let l=v[m];for(let c in l)G(l[c].object),delete l[c];delete v[m]}delete Z[V.id]}function T(V){for(let v in Z){let m=Z[v];if(m[V.id]===void 0)continue;let l=m[V.id];for(let c in l)G(l[c].object),delete l[c];delete m[V.id]}}function b(){if(z(),Y=!0,H===W)return;H=W,U(H.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:b,resetDefaultState:z,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:N,disableUnusedAttributes:_}}function QG(J,Q,$){let Z;function W(U){Z=U}function H(U,G){J.drawArrays(Z,U,G),$.update(G,Z,1)}function Y(U,G,E){if(E===0)return;J.drawArraysInstanced(Z,U,G,E),$.update(G,Z,E)}function X(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,E);let O=0;for(let R=0;R<E;R++)O+=G[R];$.update(O,Z,1)}function K(U,G,E,q){if(E===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let R=0;R<U.length;R++)Y(U[R],G[R],q[R]);else{O.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,q,0,E);let R=0;for(let M=0;M<E;M++)R+=G[M]*q[M];$.update(R,Z,1)}}this.setMode=W,this.render=H,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function $G(J,Q,$,Z){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let T=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(T){if(T!==U8&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(T){let b=T===G6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(T!==g8&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==p8&&!b)return!1;return!0}function K(T){if(T==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=K(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=$.logarithmicDepthBuffer===!0,q=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_TEXTURE_SIZE),N=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),_=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),w=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),S=R>0,C=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:q,maxTextures:O,maxVertexTextures:R,maxTextureSize:M,maxCubemapSize:N,maxAttributes:F,maxVertexUniforms:_,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:S,maxSamples:C}}function ZG(J){let Q=this,$=null,Z=0,W=!1,H=!1,Y=new V8,X=new y0,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let O=E.length!==0||q||Z!==0||W;return W=q,Z=E.length,O},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,q){$=G(E,q,0)},this.setState=function(E,q,O){let{clippingPlanes:R,clipIntersection:M,clipShadows:N}=E,F=J.get(E);if(!W||R===null||R.length===0||H&&!N)if(H)G(null);else U();else{let _=H?0:Z,L=_*4,w=F.clippingState||null;K.value=w,w=G(R,q,L,O);for(let S=0;S!==L;++S)w[S]=$[S];F.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function U(){if(K.value!==$)K.value=$,K.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(E,q,O,R){let M=E!==null?E.length:0,N=null;if(M!==0){if(N=K.value,R!==!0||N===null){let F=O+M*4,_=q.matrixWorldInverse;if(X.getNormalMatrix(_),N===null||N.length<F)N=new Float32Array(F);for(let L=0,w=O;L!==M;++L,w+=4)Y.copy(E[L]).applyMatrix4(_,X),Y.normal.toArray(N,w),N[w+3]=Y.constant}K.value=N,K.needsUpdate=!0}return Q.numPlanes=M,Q.numIntersection=0,N}}function WG(J){let Q=new WeakMap;function $(Y,X){if(X===W7)Y.mapping=j9;else if(X===H7)Y.mapping=Z9;return Y}function Z(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===W7||X===H7)if(Q.has(Y)){let K=Q.get(Y).texture;return $(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new R$(K.height);return U.fromEquirectangularTexture(J,Y),Q.set(Y,U),Y.addEventListener("dispose",W),$(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=Q.get(X);if(K!==void 0)Q.delete(X),K.dispose()}function H(){Q=new WeakMap}return{get:Z,dispose:H}}var n9=4,aW=[0.125,0.215,0.35,0.446,0.526,0.582],q9=20,T$=new u9,rW=new D0,A$=null,S$=0,j$=0,v$=!1,E9=(1+Math.sqrt(5))/2,c9=1/E9,tW=[new A(-E9,c9,0),new A(E9,c9,0),new A(-c9,0,E9),new A(c9,0,E9),new A(0,E9,-c9),new A(0,E9,c9),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],HG=new A;class h${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:H=256,position:Y=HG}=W;A$=this._renderer.getRenderTarget(),S$=this._renderer.getActiveCubeFace(),j$=this._renderer.getActiveMipmapLevel(),v$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=QH(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=JH(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(A$,S$,j$),this._renderer.xr.enabled=v$,J.scissorTest=!1,g7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===j9||J.mapping===Z9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);A$=this._renderer.getRenderTarget(),S$=this._renderer.getActiveCubeFace(),j$=this._renderer.getActiveMipmapLevel(),v$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:Z8,minFilter:Z8,generateMipmaps:!1,type:G6,format:U8,colorSpace:_J,depthBuffer:!1},Z=eW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=eW(J,Q,$);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YG(W)),this._blurMaterial=XG(W,J,Q)}return Z}_compileMaterial(J){let Q=new RJ(this._lodPlanes[0],J);this._renderer.compile(Q,T$)}_sceneToCubeUV(J,Q,$,Z,W){let X=new OJ(90,1,Q,$),K=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;if(G.getClearColor(rW),G.toneMapping=C8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let R=new G8({name:"PMREM.Background",side:pJ,depthWrite:!1,depthTest:!1}),M=new RJ(new g9,R),N=!1,F=J.background;if(F){if(F.isColor)R.color.copy(F),J.background=null,N=!0}else R.color.copy(rW),N=!0;for(let _=0;_<6;_++){let L=_%3;if(L===0)X.up.set(0,K[_],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x+U[_],W.y,W.z);else if(L===1)X.up.set(0,0,K[_]),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y+U[_],W.z);else X.up.set(0,K[_],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y,W.z+U[_]);let w=this._cubeSize;if(g7(Z,L*w,_>2?w:0,w,w),G.setRenderTarget(Z),N)G.render(M,X);G.render(J,X)}M.geometry.dispose(),M.material.dispose(),G.toneMapping=q,G.autoClear=E,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===j9||J.mapping===Z9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=QH();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=JH();let W=Z?this._cubemapMaterial:this._equirectMaterial,H=new RJ(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let X=this._cubeSize;g7(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(H,T$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let H=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=tW[(Z-W-1)%tW.length];this._blur(J,W-1,W,H,Y)}Q.autoClear=$}_blur(J,Q,$,Z,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,$,Z,"latitudinal",W),this._halfBlur(H,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,H,Y){let X=this._renderer,K=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new RJ(this._lodPlanes[Z],K),E=K.uniforms,q=this._sizeLods[$]-1,O=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*q9-1),R=W/O,M=isFinite(W)?1+Math.floor(U*R):q9;if(M>q9)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${q9}`);let N=[],F=0;for(let C=0;C<q9;++C){let T=C/R,b=Math.exp(-T*T/2);if(N.push(b),C===0)F+=b;else if(C<M)F+=2*b}for(let C=0;C<N.length;C++)N[C]=N[C]/F;if(E.envMap.value=J.texture,E.samples.value=M,E.weights.value=N,E.latitudinal.value=H==="latitudinal",Y)E.poleAxis.value=Y;let{_lodMax:_}=this;E.dTheta.value=O,E.mipInt.value=_-$;let L=this._sizeLods[Z],w=3*L*(Z>_-n9?Z-_+n9:0),S=4*(this._cubeSize-L);g7(Q,w,S,3*L,2*L),X.setRenderTarget(Q),X.render(G,T$)}}function YG(J){let Q=[],$=[],Z=[],W=J,H=J-n9+1+aW.length;for(let Y=0;Y<H;Y++){let X=Math.pow(2,W);$.push(X);let K=1/X;if(Y>J-n9)K=aW[Y-J+n9-1];else if(Y===0)K=0;Z.push(K);let U=1/(X-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],O=6,R=6,M=3,N=2,F=1,_=new Float32Array(M*R*O),L=new Float32Array(N*R*O),w=new Float32Array(F*R*O);for(let C=0;C<O;C++){let T=C%3*2/3-1,b=C>2?0:-1,z=[T,b,0,T+0.6666666666666666,b,0,T+0.6666666666666666,b+1,0,T,b,0,T+0.6666666666666666,b+1,0,T,b+1,0];_.set(z,M*R*C),L.set(q,N*R*C);let V=[C,C,C,C,C,C];w.set(V,F*R*C)}let S=new zJ;if(S.setAttribute("position",new GJ(_,M)),S.setAttribute("uv",new GJ(L,N)),S.setAttribute("faceIndex",new GJ(w,F)),Q.push(S),W>n9)W--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function eW(J,Q,$){let Z=new W8(J,Q,$);return Z.texture.mapping=K6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function g7(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function XG(J,Q,$){let Z=new Float32Array(q9),W=new A(0,1,0);return new E8({name:"SphericalGaussianBlur",defines:{n:q9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:x$(),fragmentShader:`

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
		`,blending:b8,depthTest:!1,depthWrite:!1})}function JH(){return new E8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:x$(),fragmentShader:`

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
		`,blending:b8,depthTest:!1,depthWrite:!1})}function QH(){return new E8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:x$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:b8,depthTest:!1,depthWrite:!1})}function x$(){return`

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
	`}function KG(J){let Q=new WeakMap,$=null;function Z(X){if(X&&X.isTexture){let K=X.mapping,U=K===W7||K===H7,G=K===j9||K===Z9;if(U||G){let E=Q.get(X),q=E!==void 0?E.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==q){if($===null)$=new h$(J);return E=U?$.fromEquirectangular(X,E):$.fromCubemap(X,E),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),E.texture}else if(E!==void 0)return E.texture;else{let O=X.image;if(U&&O&&O.height>0||G&&O&&W(O)){if($===null)$=new h$(J);return E=U?$.fromEquirectangular(X):$.fromCubemap(X),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),X.addEventListener("dispose",H),E.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function H(X){let K=X.target;K.removeEventListener("dispose",H);let U=Q.get(K);if(U!==void 0)Q.delete(K),U.dispose()}function Y(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:Y}}function UG(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)Q9("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function GG(J,Q,$,Z){let W={},H=new WeakMap;function Y(E){let q=E.target;if(q.index!==null)Q.remove(q.index);for(let R in q.attributes)Q.remove(q.attributes[R]);q.removeEventListener("dispose",Y),delete W[q.id];let O=H.get(q);if(O)Q.remove(O),H.delete(q);if(Z.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;$.memory.geometries--}function X(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",Y),W[q.id]=!0,$.memory.geometries++,q}function K(E){let q=E.attributes;for(let O in q)Q.update(q[O],J.ARRAY_BUFFER)}function U(E){let q=[],O=E.index,R=E.attributes.position,M=0;if(O!==null){let _=O.array;M=O.version;for(let L=0,w=_.length;L<w;L+=3){let S=_[L+0],C=_[L+1],T=_[L+2];q.push(S,C,C,T,T,S)}}else if(R!==void 0){let _=R.array;M=R.version;for(let L=0,w=_.length/3-1;L<w;L+=3){let S=L+0,C=L+1,T=L+2;q.push(S,C,C,T,T,S)}}else return;let N=new((G$(q))?D7:k7)(q,1);N.version=M;let F=H.get(E);if(F)Q.remove(F);H.set(E,N)}function G(E){let q=H.get(E);if(q){let O=E.index;if(O!==null){if(q.version<O.version)U(E)}}else U(E);return H.get(E)}return{get:X,update:K,getWireframeAttribute:G}}function EG(J,Q,$){let Z;function W(q){Z=q}let H,Y;function X(q){H=q.type,Y=q.bytesPerElement}function K(q,O){J.drawElements(Z,O,H,q*Y),$.update(O,Z,1)}function U(q,O,R){if(R===0)return;J.drawElementsInstanced(Z,O,H,q*Y,R),$.update(O,Z,R)}function G(q,O,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,O,0,H,q,0,R);let N=0;for(let F=0;F<R;F++)N+=O[F];$.update(N,Z,1)}function E(q,O,R,M){if(R===0)return;let N=Q.get("WEBGL_multi_draw");if(N===null)for(let F=0;F<q.length;F++)U(q[F]/Y,O[F],M[F]);else{N.multiDrawElementsInstancedWEBGL(Z,O,0,H,q,0,M,0,R);let F=0;for(let _=0;_<R;_++)F+=O[_]*M[_];$.update(F,Z,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function qG(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(H,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(H/3);break;case J.LINES:$.lines+=X*(H/2);break;case J.LINE_STRIP:$.lines+=X*(H-1);break;case J.LINE_LOOP:$.lines+=X*H;break;case J.POINTS:$.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function NG(J,Q,$){let Z=new WeakMap,W=new s0;function H(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=G!==void 0?G.length:0,q=Z.get(X);if(q===void 0||q.count!==E){let z=function(){T.dispose(),Z.delete(X),X.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let O=X.morphAttributes.position!==void 0,R=X.morphAttributes.normal!==void 0,M=X.morphAttributes.color!==void 0,N=X.morphAttributes.position||[],F=X.morphAttributes.normal||[],_=X.morphAttributes.color||[],L=0;if(O===!0)L=1;if(R===!0)L=2;if(M===!0)L=3;let w=X.attributes.position.count*L,S=1;if(w>Q.maxTextureSize)S=Math.ceil(w/Q.maxTextureSize),w=Q.maxTextureSize;let C=new Float32Array(w*S*4*E),T=new R7(C,w,S,E);T.type=p8,T.needsUpdate=!0;let b=L*4;for(let V=0;V<E;V++){let v=N[V],m=F[V],l=_[V],c=w*S*4*V;for(let i=0;i<v.count;i++){let u=i*b;if(O===!0)W.fromBufferAttribute(v,i),C[c+u+0]=W.x,C[c+u+1]=W.y,C[c+u+2]=W.z,C[c+u+3]=0;if(R===!0)W.fromBufferAttribute(m,i),C[c+u+4]=W.x,C[c+u+5]=W.y,C[c+u+6]=W.z,C[c+u+7]=0;if(M===!0)W.fromBufferAttribute(l,i),C[c+u+8]=W.x,C[c+u+9]=W.y,C[c+u+10]=W.z,C[c+u+11]=l.itemSize===4?W.w:1}}q={count:E,texture:T,size:new x0(w,S)},Z.set(X,q),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let O=0;for(let M=0;M<U.length;M++)O+=U[M];let R=X.morphTargetsRelative?1:1-O;K.getUniforms().setValue(J,"morphTargetBaseInfluence",R),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",q.texture,$),K.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:H}}function OG(J,Q,$,Z){let W=new WeakMap;function H(K){let U=Z.render.frame,G=K.geometry,E=Q.get(K,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if($.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)$.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let q=K.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),$.remove(U.instanceMatrix),U.instanceColor!==null)$.remove(U.instanceColor)}return{update:H,dispose:Y}}var LH=new qJ,$H=new I7(1,1),VH=new R7,zH=new N$,BH=new V7,ZH=[],WH=[],HH=new Float32Array(16),YH=new Float32Array(9),XH=new Float32Array(4);function s9(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,H=ZH[W];if(H===void 0)H=new Float32Array(W),ZH[W]=H;if(Q!==0){Z.toArray(H,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(H,X)}return H}function MJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function kJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function l7(J,Q){let $=WH[Q];if($===void 0)$=new Int32Array(Q),WH[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function FG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function RG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(MJ($,Q))return;J.uniform2fv(this.addr,Q),kJ($,Q)}}function MG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(MJ($,Q))return;J.uniform3fv(this.addr,Q),kJ($,Q)}}function kG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(MJ($,Q))return;J.uniform4fv(this.addr,Q),kJ($,Q)}}function DG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(MJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),kJ($,Q)}else{if(MJ($,Z))return;XH.set(Z),J.uniformMatrix2fv(this.addr,!1,XH),kJ($,Z)}}function LG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(MJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),kJ($,Q)}else{if(MJ($,Z))return;YH.set(Z),J.uniformMatrix3fv(this.addr,!1,YH),kJ($,Z)}}function VG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(MJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),kJ($,Q)}else{if(MJ($,Z))return;HH.set(Z),J.uniformMatrix4fv(this.addr,!1,HH),kJ($,Z)}}function zG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function BG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(MJ($,Q))return;J.uniform2iv(this.addr,Q),kJ($,Q)}}function _G(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(MJ($,Q))return;J.uniform3iv(this.addr,Q),kJ($,Q)}}function CG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(MJ($,Q))return;J.uniform4iv(this.addr,Q),kJ($,Q)}}function wG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function IG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(MJ($,Q))return;J.uniform2uiv(this.addr,Q),kJ($,Q)}}function PG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(MJ($,Q))return;J.uniform3uiv(this.addr,Q),kJ($,Q)}}function TG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(MJ($,Q))return;J.uniform4uiv(this.addr,Q),kJ($,Q)}}function AG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)$H.compareFunction=H$,H=$H;else H=LH;$.setTexture2D(Q||H,W)}function SG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||zH,W)}function jG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||BH,W)}function vG(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||VH,W)}function yG(J){switch(J){case 5126:return FG;case 35664:return RG;case 35665:return MG;case 35666:return kG;case 35674:return DG;case 35675:return LG;case 35676:return VG;case 5124:case 35670:return zG;case 35667:case 35671:return BG;case 35668:case 35672:return _G;case 35669:case 35673:return CG;case 5125:return wG;case 36294:return IG;case 36295:return PG;case 36296:return TG;case 35678:case 36198:case 36298:case 36306:case 35682:return AG;case 35679:case 36299:case 36307:return SG;case 35680:case 36300:case 36308:case 36293:return jG;case 36289:case 36303:case 36311:case 36292:return vG}}function hG(J,Q){J.uniform1fv(this.addr,Q)}function fG(J,Q){let $=s9(Q,this.size,2);J.uniform2fv(this.addr,$)}function xG(J,Q){let $=s9(Q,this.size,3);J.uniform3fv(this.addr,$)}function bG(J,Q){let $=s9(Q,this.size,4);J.uniform4fv(this.addr,$)}function gG(J,Q){let $=s9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function pG(J,Q){let $=s9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function lG(J,Q){let $=s9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function dG(J,Q){J.uniform1iv(this.addr,Q)}function mG(J,Q){J.uniform2iv(this.addr,Q)}function uG(J,Q){J.uniform3iv(this.addr,Q)}function cG(J,Q){J.uniform4iv(this.addr,Q)}function nG(J,Q){J.uniform1uiv(this.addr,Q)}function sG(J,Q){J.uniform2uiv(this.addr,Q)}function oG(J,Q){J.uniform3uiv(this.addr,Q)}function iG(J,Q){J.uniform4uiv(this.addr,Q)}function aG(J,Q,$){let Z=this.cache,W=Q.length,H=l7($,W);if(!MJ(Z,H))J.uniform1iv(this.addr,H),kJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||LH,H[Y])}function rG(J,Q,$){let Z=this.cache,W=Q.length,H=l7($,W);if(!MJ(Z,H))J.uniform1iv(this.addr,H),kJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture3D(Q[Y]||zH,H[Y])}function tG(J,Q,$){let Z=this.cache,W=Q.length,H=l7($,W);if(!MJ(Z,H))J.uniform1iv(this.addr,H),kJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTextureCube(Q[Y]||BH,H[Y])}function eG(J,Q,$){let Z=this.cache,W=Q.length,H=l7($,W);if(!MJ(Z,H))J.uniform1iv(this.addr,H),kJ(Z,H);for(let Y=0;Y!==W;++Y)$.setTexture2DArray(Q[Y]||VH,H[Y])}function JE(J){switch(J){case 5126:return hG;case 35664:return fG;case 35665:return xG;case 35666:return bG;case 35674:return gG;case 35675:return pG;case 35676:return lG;case 5124:case 35670:return dG;case 35667:case 35671:return mG;case 35668:case 35672:return uG;case 35669:case 35673:return cG;case 5125:return nG;case 36294:return sG;case 36295:return oG;case 36296:return iG;case 35678:case 36198:case 36298:case 36306:case 35682:return aG;case 35679:case 36299:case 36307:return rG;case 35680:case 36300:case 36308:case 36293:return tG;case 36289:case 36303:case 36311:case 36292:return eG}}class _H{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=yG(Q.type)}}class CH{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=JE(Q.type)}}class wH{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,H=Z.length;W!==H;++W){let Y=Z[W];Y.setValue(J,Q[Y.id],$)}}}var y$=/(\w+)(\])?(\[|\.)?/g;function KH(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function QE(J,Q,$){let Z=J.name,W=Z.length;y$.lastIndex=0;while(!0){let H=y$.exec(Z),Y=y$.lastIndex,X=H[1],K=H[2]==="]",U=H[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){KH($,U===void 0?new _H(X,J,Q):new CH(X,J,Q));break}else{let E=$.map[X];if(E===void 0)E=new wH(X),KH($,E);$=E}}}class V6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),H=J.getUniformLocation(Q,W.name);QE(W,H,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,H=Q.length;W!==H;++W){let Y=Q[W],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let H=J[Z];if(H.id in Q)$.push(H)}return $}}function UH(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var $E=37297,ZE=0;function WE(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),H=Math.min(Q+6,$.length);for(let Y=W;Y<H;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var GH=new y0;function HE(J){b0._getMatrix(GH,b0.workingColorSpace,J);let Q=`mat3( ${GH.elements.map(($)=>$.toFixed(4))} )`;switch(b0.getTransfer(J)){case W$:return[Q,"LinearTransferOETF"];case $J:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function EH(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if(Z&&H==="")return"";let Y=/ERROR: 0:(\d+)/.exec(H);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+H+`

`+WE(J.getShaderSource(Q),X)}else return H}function YE(J,Q){let $=HE(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}function XE(J,Q){let $;switch(Q){case OW:$="Linear";break;case FW:$="Reinhard";break;case RW:$="Cineon";break;case MW:$="ACESFilmic";break;case DW:$="AgX";break;case LW:$="Neutral";break;case kW:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var p7=new A;function KE(){b0.getLuminanceCoefficients(p7);let J=p7.x.toFixed(4),Q=p7.y.toFixed(4),$=p7.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function UE(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(L6).join(`
`)}function GE(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function EE(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let H=J.getActiveAttrib(Q,W),Y=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;$[Y]={type:H.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function L6(J){return J!==""}function qH(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function NH(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var qE=/^[ \t]*#include +<([\w\d./]+)>/gm;function f$(J){return J.replace(qE,OE)}var NE=new Map;function OE(J,Q){let $=h0[Q];if($===void 0){let Z=NE.get(Q);if(Z!==void 0)$=h0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return f$($)}var FE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function OH(J){return J.replace(FE,RE)}function RE(J,Q,$,Z){let W="";for(let H=parseInt(Q);H<parseInt($);H++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function FH(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}function ME(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===LQ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===uZ)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===K8)Q="SHADOWMAP_TYPE_VSM";return Q}function kE(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case j9:case Z9:Q="ENVMAP_TYPE_CUBE";break;case K6:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function DE(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case Z9:Q="ENVMAP_MODE_REFRACTION";break}return Q}function LE(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case EW:Q="ENVMAP_BLENDING_MULTIPLY";break;case qW:Q="ENVMAP_BLENDING_MIX";break;case NW:Q="ENVMAP_BLENDING_ADD";break}return Q}function VE(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function zE(J,Q,$,Z){let W=J.getContext(),H=$.defines,Y=$.vertexShader,X=$.fragmentShader,K=ME($),U=kE($),G=DE($),E=LE($),q=VE($),O=UE($),R=GE(H),M=W.createProgram(),N,F,_=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(L6).join(`
`),N.length>0)N+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(L6).join(`
`),F.length>0)F+=`
`}else N=[FH($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",$.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(L6).join(`
`),F=[FH($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+K:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",$.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==C8?"#define TONE_MAPPING":"",$.toneMapping!==C8?h0.tonemapping_pars_fragment:"",$.toneMapping!==C8?XE("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",h0.colorspace_pars_fragment,YE("linearToOutputTexel",$.outputColorSpace),KE(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(L6).join(`
`);if(Y=f$(Y),Y=qH(Y,$),Y=NH(Y,$),X=f$(X),X=qH(X,$),X=NH(X,$),Y=OH(Y),X=OH(X),$.isRawShaderMaterial!==!0)_=`#version 300 es
`,N=[O,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,F=["#define varying in",$.glslVersion===Y$?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===Y$?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let L=_+N+Y,w=_+F+X,S=UH(W,W.VERTEX_SHADER,L),C=UH(W,W.FRAGMENT_SHADER,w);if(W.attachShader(M,S),W.attachShader(M,C),$.index0AttributeName!==void 0)W.bindAttribLocation(M,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(M,0,"position");W.linkProgram(M);function T(v){if(J.debug.checkShaderErrors){let m=W.getProgramInfoLog(M)||"",l=W.getShaderInfoLog(S)||"",c=W.getShaderInfoLog(C)||"",i=m.trim(),u=l.trim(),r=c.trim(),g=!0,Z0=!0;if(W.getProgramParameter(M,W.LINK_STATUS)===!1)if(g=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,M,S,C);else{let U0=EH(W,S,"vertex"),T0=EH(W,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(M,W.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+i+`
`+U0+`
`+T0)}else if(i!=="")console.warn("THREE.WebGLProgram: Program Info Log:",i);else if(u===""||r==="")Z0=!1;if(Z0)v.diagnostics={runnable:g,programLog:i,vertexShader:{log:u,prefix:N},fragmentShader:{log:r,prefix:F}}}W.deleteShader(S),W.deleteShader(C),b=new V6(W,M),z=EE(W,M)}let b;this.getUniforms=function(){if(b===void 0)T(this);return b};let z;this.getAttributes=function(){if(z===void 0)T(this);return z};let V=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(V===!1)V=W.getProgramParameter(M,$E);return V},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(M),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=ZE++,this.cacheKey=Q,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=C,this}var BE=0;class IH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),H=this._getShaderCacheForMaterial(J);if(H.has(Z)===!1)H.add(Z),Z.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new PH(J),Q.set(J,$);return $}}class PH{constructor(J){this.id=BE++,this.code=J,this.usedTimes=0}}function _E(J,Q,$,Z,W,H,Y){let X=new M7,K=new IH,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,O=W.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function N(z,V,v,m,l){let c=m.fog,i=l.geometry,u=z.isMeshStandardMaterial?m.environment:null,r=(z.isMeshStandardMaterial?$:Q).get(z.envMap||u),g=!!r&&r.mapping===K6?r.image.height:null,Z0=R[z.type];if(z.precision!==null){if(O=W.getMaxPrecision(z.precision),O!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",O,"instead.")}let U0=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,T0=U0!==void 0?U0.length:0,m0=0;if(i.morphAttributes.position!==void 0)m0=1;if(i.morphAttributes.normal!==void 0)m0=2;if(i.morphAttributes.color!==void 0)m0=3;let HJ,d,W0,k0;if(Z0){let r0=O8[Z0];HJ=r0.vertexShader,d=r0.fragmentShader}else HJ=z.vertexShader,d=z.fragmentShader,K.update(z),W0=K.getVertexShaderID(z),k0=K.getFragmentShaderID(z);let G0=J.getRenderTarget(),R0=J.state.buffers.depth.getReversed(),u0=l.isInstancedMesh===!0,c0=l.isBatchedMesh===!0,d0=!!z.map,I=!!z.matcap,QJ=!!r,C0=!!z.aoMap,i0=!!z.lightMap,B0=!!z.bumpMap,YJ=!!z.normalMap,L0=!!z.displacementMap,I0=!!z.emissiveMap,BJ=!!z.metalnessMap,DJ=!!z.roughnessMap,NJ=z.anisotropy>0,B=z.clearcoat>0,k=z.dispersion>0,h=z.iridescence>0,n=z.sheen>0,o=z.transmission>0,p=NJ&&!!z.anisotropyMap,q0=B&&!!z.clearcoatMap,J0=B&&!!z.clearcoatNormalMap,M0=B&&!!z.clearcoatRoughnessMap,A0=h&&!!z.iridescenceMap,e=h&&!!z.iridescenceThicknessMap,X0=n&&!!z.sheenColorMap,V0=n&&!!z.sheenRoughnessMap,z0=!!z.specularMap,K0=!!z.specularColorMap,f0=!!z.specularIntensityMap,P=o&&!!z.transmissionMap,H0=o&&!!z.thicknessMap,Q0=!!z.gradientMap,N0=!!z.alphaMap,a=z.alphaTest>0,s=!!z.alphaHash,F0=!!z.extensions,j0=C8;if(z.toneMapped){if(G0===null||G0.isXRRenderTarget===!0)j0=J.toneMapping}let e0={shaderID:Z0,shaderType:z.type,shaderName:z.name,vertexShader:HJ,fragmentShader:d,defines:z.defines,customVertexShaderID:W0,customFragmentShaderID:k0,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:O,batching:c0,batchingColor:c0&&l._colorsTexture!==null,instancing:u0,instancingColor:u0&&l.instanceColor!==null,instancingMorph:u0&&l.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:G0===null?J.outputColorSpace:G0.isXRRenderTarget===!0?G0.texture.colorSpace:_J,alphaToCoverage:!!z.alphaToCoverage,map:d0,matcap:I,envMap:QJ,envMapMode:QJ&&r.mapping,envMapCubeUVHeight:g,aoMap:C0,lightMap:i0,bumpMap:B0,normalMap:YJ,displacementMap:q&&L0,emissiveMap:I0,normalMapObjectSpace:YJ&&z.normalMapType===SW,normalMapTangentSpace:YJ&&z.normalMapType===AW,metalnessMap:BJ,roughnessMap:DJ,anisotropy:NJ,anisotropyMap:p,clearcoat:B,clearcoatMap:q0,clearcoatNormalMap:J0,clearcoatRoughnessMap:M0,dispersion:k,iridescence:h,iridescenceMap:A0,iridescenceThicknessMap:e,sheen:n,sheenColorMap:X0,sheenRoughnessMap:V0,specularMap:z0,specularColorMap:K0,specularIntensityMap:f0,transmission:o,transmissionMap:P,thicknessMap:H0,gradientMap:Q0,opaque:z.transparent===!1&&z.blending===Y6&&z.alphaToCoverage===!1,alphaMap:N0,alphaTest:a,alphaHash:s,combine:z.combine,mapUv:d0&&M(z.map.channel),aoMapUv:C0&&M(z.aoMap.channel),lightMapUv:i0&&M(z.lightMap.channel),bumpMapUv:B0&&M(z.bumpMap.channel),normalMapUv:YJ&&M(z.normalMap.channel),displacementMapUv:L0&&M(z.displacementMap.channel),emissiveMapUv:I0&&M(z.emissiveMap.channel),metalnessMapUv:BJ&&M(z.metalnessMap.channel),roughnessMapUv:DJ&&M(z.roughnessMap.channel),anisotropyMapUv:p&&M(z.anisotropyMap.channel),clearcoatMapUv:q0&&M(z.clearcoatMap.channel),clearcoatNormalMapUv:J0&&M(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:M0&&M(z.clearcoatRoughnessMap.channel),iridescenceMapUv:A0&&M(z.iridescenceMap.channel),iridescenceThicknessMapUv:e&&M(z.iridescenceThicknessMap.channel),sheenColorMapUv:X0&&M(z.sheenColorMap.channel),sheenRoughnessMapUv:V0&&M(z.sheenRoughnessMap.channel),specularMapUv:z0&&M(z.specularMap.channel),specularColorMapUv:K0&&M(z.specularColorMap.channel),specularIntensityMapUv:f0&&M(z.specularIntensityMap.channel),transmissionMapUv:P&&M(z.transmissionMap.channel),thicknessMapUv:H0&&M(z.thicknessMap.channel),alphaMapUv:N0&&M(z.alphaMap.channel),vertexTangents:!!i.attributes.tangent&&(YJ||NJ),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!i.attributes.color&&i.attributes.color.itemSize===4,pointsUvs:l.isPoints===!0&&!!i.attributes.uv&&(d0||N0),fog:!!c,useFog:z.fog===!0,fogExp2:!!c&&c.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:R0,skinning:l.isSkinnedMesh===!0,morphTargets:i.morphAttributes.position!==void 0,morphNormals:i.morphAttributes.normal!==void 0,morphColors:i.morphAttributes.color!==void 0,morphTargetsCount:T0,morphTextureStride:m0,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&v.length>0,shadowMapType:J.shadowMap.type,toneMapping:j0,decodeVideoTexture:d0&&z.map.isVideoTexture===!0&&b0.getTransfer(z.map.colorSpace)===$J,decodeVideoTextureEmissive:I0&&z.emissiveMap.isVideoTexture===!0&&b0.getTransfer(z.emissiveMap.colorSpace)===$J,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===iJ,flipSided:z.side===pJ,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:F0&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(F0&&z.extensions.multiDraw===!0||c0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return e0.vertexUv1s=U.has(1),e0.vertexUv2s=U.has(2),e0.vertexUv3s=U.has(3),U.clear(),e0}function F(z){let V=[];if(z.shaderID)V.push(z.shaderID);else V.push(z.customVertexShaderID),V.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let v in z.defines)V.push(v),V.push(z.defines[v]);if(z.isRawShaderMaterial===!1)_(V,z),L(V,z),V.push(J.outputColorSpace);return V.push(z.customProgramCacheKey),V.join()}function _(z,V){z.push(V.precision),z.push(V.outputColorSpace),z.push(V.envMapMode),z.push(V.envMapCubeUVHeight),z.push(V.mapUv),z.push(V.alphaMapUv),z.push(V.lightMapUv),z.push(V.aoMapUv),z.push(V.bumpMapUv),z.push(V.normalMapUv),z.push(V.displacementMapUv),z.push(V.emissiveMapUv),z.push(V.metalnessMapUv),z.push(V.roughnessMapUv),z.push(V.anisotropyMapUv),z.push(V.clearcoatMapUv),z.push(V.clearcoatNormalMapUv),z.push(V.clearcoatRoughnessMapUv),z.push(V.iridescenceMapUv),z.push(V.iridescenceThicknessMapUv),z.push(V.sheenColorMapUv),z.push(V.sheenRoughnessMapUv),z.push(V.specularMapUv),z.push(V.specularColorMapUv),z.push(V.specularIntensityMapUv),z.push(V.transmissionMapUv),z.push(V.thicknessMapUv),z.push(V.combine),z.push(V.fogExp2),z.push(V.sizeAttenuation),z.push(V.morphTargetsCount),z.push(V.morphAttributeCount),z.push(V.numDirLights),z.push(V.numPointLights),z.push(V.numSpotLights),z.push(V.numSpotLightMaps),z.push(V.numHemiLights),z.push(V.numRectAreaLights),z.push(V.numDirLightShadows),z.push(V.numPointLightShadows),z.push(V.numSpotLightShadows),z.push(V.numSpotLightShadowsWithMaps),z.push(V.numLightProbes),z.push(V.shadowMapType),z.push(V.toneMapping),z.push(V.numClippingPlanes),z.push(V.numClipIntersection),z.push(V.depthPacking)}function L(z,V){if(X.disableAll(),V.supportsVertexTextures)X.enable(0);if(V.instancing)X.enable(1);if(V.instancingColor)X.enable(2);if(V.instancingMorph)X.enable(3);if(V.matcap)X.enable(4);if(V.envMap)X.enable(5);if(V.normalMapObjectSpace)X.enable(6);if(V.normalMapTangentSpace)X.enable(7);if(V.clearcoat)X.enable(8);if(V.iridescence)X.enable(9);if(V.alphaTest)X.enable(10);if(V.vertexColors)X.enable(11);if(V.vertexAlphas)X.enable(12);if(V.vertexUv1s)X.enable(13);if(V.vertexUv2s)X.enable(14);if(V.vertexUv3s)X.enable(15);if(V.vertexTangents)X.enable(16);if(V.anisotropy)X.enable(17);if(V.alphaHash)X.enable(18);if(V.batching)X.enable(19);if(V.dispersion)X.enable(20);if(V.batchingColor)X.enable(21);if(V.gradientMap)X.enable(22);if(z.push(X.mask),X.disableAll(),V.fog)X.enable(0);if(V.useFog)X.enable(1);if(V.flatShading)X.enable(2);if(V.logarithmicDepthBuffer)X.enable(3);if(V.reversedDepthBuffer)X.enable(4);if(V.skinning)X.enable(5);if(V.morphTargets)X.enable(6);if(V.morphNormals)X.enable(7);if(V.morphColors)X.enable(8);if(V.premultipliedAlpha)X.enable(9);if(V.shadowMapEnabled)X.enable(10);if(V.doubleSided)X.enable(11);if(V.flipSided)X.enable(12);if(V.useDepthPacking)X.enable(13);if(V.dithering)X.enable(14);if(V.transmission)X.enable(15);if(V.sheen)X.enable(16);if(V.opaque)X.enable(17);if(V.pointsUvs)X.enable(18);if(V.decodeVideoTexture)X.enable(19);if(V.decodeVideoTextureEmissive)X.enable(20);if(V.alphaToCoverage)X.enable(21);z.push(X.mask)}function w(z){let V=R[z.type],v;if(V){let m=O8[V];v=dW.clone(m.uniforms)}else v=z.uniforms;return v}function S(z,V){let v;for(let m=0,l=G.length;m<l;m++){let c=G[m];if(c.cacheKey===V){v=c,++v.usedTimes;break}}if(v===void 0)v=new zE(J,V,z,H),G.push(v);return v}function C(z){if(--z.usedTimes===0){let V=G.indexOf(z);G[V]=G[G.length-1],G.pop(),z.destroy()}}function T(z){K.remove(z)}function b(){K.dispose()}return{getParameters:N,getProgramCacheKey:F,getUniforms:w,acquireProgram:S,releaseProgram:C,releaseShaderCache:T,programs:G,dispose:b}}function CE(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function W(Y,X,K){J.get(Y)[X]=K}function H(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:H}}function wE(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function RH(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function MH(){let J=[],Q=0,$=[],Z=[],W=[];function H(){Q=0,$.length=0,Z.length=0,W.length=0}function Y(E,q,O,R,M,N){let F=J[Q];if(F===void 0)F={id:E.id,object:E,geometry:q,material:O,groupOrder:R,renderOrder:E.renderOrder,z:M,group:N},J[Q]=F;else F.id=E.id,F.object=E,F.geometry=q,F.material=O,F.groupOrder=R,F.renderOrder=E.renderOrder,F.z=M,F.group=N;return Q++,F}function X(E,q,O,R,M,N){let F=Y(E,q,O,R,M,N);if(O.transmission>0)Z.push(F);else if(O.transparent===!0)W.push(F);else $.push(F)}function K(E,q,O,R,M,N){let F=Y(E,q,O,R,M,N);if(O.transmission>0)Z.unshift(F);else if(O.transparent===!0)W.unshift(F);else $.unshift(F)}function U(E,q){if($.length>1)$.sort(E||wE);if(Z.length>1)Z.sort(q||RH);if(W.length>1)W.sort(q||RH)}function G(){for(let E=Q,q=J.length;E<q;E++){let O=J[E];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:H,push:X,unshift:K,finish:G,sort:U}}function IE(){let J=new WeakMap;function Q(Z,W){let H=J.get(Z),Y;if(H===void 0)Y=new MH,J.set(Z,[Y]);else if(W>=H.length)Y=new MH,H.push(Y);else Y=H[W];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function PE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new A,color:new D0};break;case"SpotLight":$={position:new A,direction:new A,color:new D0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new A,color:new D0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new A,skyColor:new D0,groundColor:new D0};break;case"RectAreaLight":$={color:new D0,position:new A,halfWidth:new A,halfHeight:new A};break}return J[Q.id]=$,$}}}function TE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new x0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var AE=0;function SE(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function jE(J){let Q=new PE,$=TE(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new A);let W=new A,H=new v0,Y=new v0;function X(U){let G=0,E=0,q=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let O=0,R=0,M=0,N=0,F=0,_=0,L=0,w=0,S=0,C=0,T=0;U.sort(SE);for(let z=0,V=U.length;z<V;z++){let v=U[z],m=v.color,l=v.intensity,c=v.distance,i=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)G+=m.r*l,E+=m.g*l,q+=m.b*l;else if(v.isLightProbe){for(let u=0;u<9;u++)Z.probe[u].addScaledVector(v.sh.coefficients[u],l);T++}else if(v.isDirectionalLight){let u=Q.get(v);if(u.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let r=v.shadow,g=$.get(v);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,Z.directionalShadow[O]=g,Z.directionalShadowMap[O]=i,Z.directionalShadowMatrix[O]=v.shadow.matrix,_++}Z.directional[O]=u,O++}else if(v.isSpotLight){let u=Q.get(v);u.position.setFromMatrixPosition(v.matrixWorld),u.color.copy(m).multiplyScalar(l),u.distance=c,u.coneCos=Math.cos(v.angle),u.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),u.decay=v.decay,Z.spot[M]=u;let r=v.shadow;if(v.map){if(Z.spotLightMap[S]=v.map,S++,r.updateMatrices(v),v.castShadow)C++}if(Z.spotLightMatrix[M]=r.matrix,v.castShadow){let g=$.get(v);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,Z.spotShadow[M]=g,Z.spotShadowMap[M]=i,w++}M++}else if(v.isRectAreaLight){let u=Q.get(v);u.color.copy(m).multiplyScalar(l),u.halfWidth.set(v.width*0.5,0,0),u.halfHeight.set(0,v.height*0.5,0),Z.rectArea[N]=u,N++}else if(v.isPointLight){let u=Q.get(v);if(u.color.copy(v.color).multiplyScalar(v.intensity),u.distance=v.distance,u.decay=v.decay,v.castShadow){let r=v.shadow,g=$.get(v);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,g.shadowCameraNear=r.camera.near,g.shadowCameraFar=r.camera.far,Z.pointShadow[R]=g,Z.pointShadowMap[R]=i,Z.pointShadowMatrix[R]=v.shadow.matrix,L++}Z.point[R]=u,R++}else if(v.isHemisphereLight){let u=Q.get(v);u.skyColor.copy(v.color).multiplyScalar(l),u.groundColor.copy(v.groundColor).multiplyScalar(l),Z.hemi[F]=u,F++}}if(N>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=$0.LTC_FLOAT_1,Z.rectAreaLTC2=$0.LTC_FLOAT_2;else Z.rectAreaLTC1=$0.LTC_HALF_1,Z.rectAreaLTC2=$0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=E,Z.ambient[2]=q;let b=Z.hash;if(b.directionalLength!==O||b.pointLength!==R||b.spotLength!==M||b.rectAreaLength!==N||b.hemiLength!==F||b.numDirectionalShadows!==_||b.numPointShadows!==L||b.numSpotShadows!==w||b.numSpotMaps!==S||b.numLightProbes!==T)Z.directional.length=O,Z.spot.length=M,Z.rectArea.length=N,Z.point.length=R,Z.hemi.length=F,Z.directionalShadow.length=_,Z.directionalShadowMap.length=_,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=w,Z.spotShadowMap.length=w,Z.directionalShadowMatrix.length=_,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=w+S-C,Z.spotLightMap.length=S,Z.numSpotLightShadowsWithMaps=C,Z.numLightProbes=T,b.directionalLength=O,b.pointLength=R,b.spotLength=M,b.rectAreaLength=N,b.hemiLength=F,b.numDirectionalShadows=_,b.numPointShadows=L,b.numSpotShadows=w,b.numSpotMaps=S,b.numLightProbes=T,Z.version=AE++}function K(U,G){let E=0,q=0,O=0,R=0,M=0,N=G.matrixWorldInverse;for(let F=0,_=U.length;F<_;F++){let L=U[F];if(L.isDirectionalLight){let w=Z.directional[E];w.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(W),w.direction.transformDirection(N),E++}else if(L.isSpotLight){let w=Z.spot[O];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(N),w.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(W),w.direction.transformDirection(N),O++}else if(L.isRectAreaLight){let w=Z.rectArea[R];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(N),Y.identity(),H.copy(L.matrixWorld),H.premultiply(N),Y.extractRotation(H),w.halfWidth.set(L.width*0.5,0,0),w.halfHeight.set(0,L.height*0.5,0),w.halfWidth.applyMatrix4(Y),w.halfHeight.applyMatrix4(Y),R++}else if(L.isPointLight){let w=Z.point[q];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(N),q++}else if(L.isHemisphereLight){let w=Z.hemi[M];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(N),M++}}}return{setup:X,setupView:K,state:Z}}function kH(J){let Q=new jE(J),$=[],Z=[];function W(G){U.camera=G,$.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(){Q.setup($)}function K(G){Q.setupView($,G)}let U={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:H,pushShadow:Y}}function vE(J){let Q=new WeakMap;function $(W,H=0){let Y=Q.get(W),X;if(Y===void 0)X=new kH(J),Q.set(W,[X]);else if(H>=Y.length)X=new kH(J),Y.push(X);else X=Y[H];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var yE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
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
}`;function fE(J,Q,$){let Z=new k6,W=new x0,H=new x0,Y=new s0,X=new M$({depthPacking:TW}),K=new k$,U={},G=$.maxTextureSize,E={[x8]:pJ,[pJ]:x8,[iJ]:iJ},q=new E8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new x0},radius:{value:4}},vertexShader:yE,fragmentShader:hE}),O=q.clone();O.defines.HORIZONTAL_PASS=1;let R=new zJ;R.setAttribute("position",new GJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new RJ(R,q),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=LQ;let F=this.type;this.render=function(C,T,b){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(C.length===0)return;let z=J.getRenderTarget(),V=J.getActiveCubeFace(),v=J.getActiveMipmapLevel(),m=J.state;if(m.setBlending(b8),m.buffers.depth.getReversed())m.buffers.color.setClear(0,0,0,0);else m.buffers.color.setClear(1,1,1,1);m.buffers.depth.setTest(!0),m.setScissorTest(!1);let l=F!==K8&&this.type===K8,c=F===K8&&this.type!==K8;for(let i=0,u=C.length;i<u;i++){let r=C[i],g=r.shadow;if(g===void 0){console.warn("THREE.WebGLShadowMap:",r,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;W.copy(g.mapSize);let Z0=g.getFrameExtents();if(W.multiply(Z0),H.copy(g.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/Z0.x),W.x=H.x*Z0.x,g.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/Z0.y),W.y=H.y*Z0.y,g.mapSize.y=H.y}if(g.map===null||l===!0||c===!0){let T0=this.type!==K8?{minFilter:w8,magFilter:w8}:{};if(g.map!==null)g.map.dispose();g.map=new W8(W.x,W.y,T0),g.map.texture.name=r.name+".shadowMap",g.camera.updateProjectionMatrix()}J.setRenderTarget(g.map),J.clear();let U0=g.getViewportCount();for(let T0=0;T0<U0;T0++){let m0=g.getViewport(T0);Y.set(H.x*m0.x,H.y*m0.y,H.x*m0.z,H.y*m0.w),m.viewport(Y),g.updateMatrices(r,T0),Z=g.getFrustum(),w(T,b,g.camera,r,this.type)}if(g.isPointLightShadow!==!0&&this.type===K8)_(g,b);g.needsUpdate=!1}F=this.type,N.needsUpdate=!1,J.setRenderTarget(z,V,v)};function _(C,T){let b=Q.update(M);if(q.defines.VSM_SAMPLES!==C.blurSamples)q.defines.VSM_SAMPLES=C.blurSamples,O.defines.VSM_SAMPLES=C.blurSamples,q.needsUpdate=!0,O.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new W8(W.x,W.y);q.uniforms.shadow_pass.value=C.map.texture,q.uniforms.resolution.value=C.mapSize,q.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(T,null,b,q,M,null),O.uniforms.shadow_pass.value=C.mapPass.texture,O.uniforms.resolution.value=C.mapSize,O.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(T,null,b,O,M,null)}function L(C,T,b,z){let V=null,v=b.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(v!==void 0)V=v;else if(V=b.isPointLight===!0?K:X,J.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let m=V.uuid,l=T.uuid,c=U[m];if(c===void 0)c={},U[m]=c;let i=c[l];if(i===void 0)i=V.clone(),c[l]=i,T.addEventListener("dispose",S);V=i}if(V.visible=T.visible,V.wireframe=T.wireframe,z===K8)V.side=T.shadowSide!==null?T.shadowSide:T.side;else V.side=T.shadowSide!==null?T.shadowSide:E[T.side];if(V.alphaMap=T.alphaMap,V.alphaTest=T.alphaToCoverage===!0?0.5:T.alphaTest,V.map=T.map,V.clipShadows=T.clipShadows,V.clippingPlanes=T.clippingPlanes,V.clipIntersection=T.clipIntersection,V.displacementMap=T.displacementMap,V.displacementScale=T.displacementScale,V.displacementBias=T.displacementBias,V.wireframeLinewidth=T.wireframeLinewidth,V.linewidth=T.linewidth,b.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let m=J.properties.get(V);m.light=b}return V}function w(C,T,b,z,V){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&V===K8)&&(!C.frustumCulled||Z.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,C.matrixWorld);let l=Q.update(C),c=C.material;if(Array.isArray(c)){let i=l.groups;for(let u=0,r=i.length;u<r;u++){let g=i[u],Z0=c[g.materialIndex];if(Z0&&Z0.visible){let U0=L(C,Z0,z,V);C.onBeforeShadow(J,C,T,b,l,U0,g),J.renderBufferDirect(b,null,l,U0,C,g),C.onAfterShadow(J,C,T,b,l,U0,g)}}}else if(c.visible){let i=L(C,c,z,V);C.onBeforeShadow(J,C,T,b,l,i,null),J.renderBufferDirect(b,null,l,i,C,null),C.onAfterShadow(J,C,T,b,l,i,null)}}}let m=C.children;for(let l=0,c=m.length;l<c;l++)w(m[l],T,b,z,V)}function S(C){C.target.removeEventListener("dispose",S);for(let b in U){let z=U[b],V=C.target.uuid;if(V in z)z[V].dispose(),delete z[V]}}}var xE={[r6]:t6,[e6]:$7,[J7]:Z7,[X6]:Q7,[t6]:r6,[$7]:e6,[Z7]:J7,[Q7]:X6};function bE(J,Q){function $(){let P=!1,H0=new s0,Q0=null,N0=new s0(0,0,0,0);return{setMask:function(a){if(Q0!==a&&!P)J.colorMask(a,a,a,a),Q0=a},setLocked:function(a){P=a},setClear:function(a,s,F0,j0,e0){if(e0===!0)a*=j0,s*=j0,F0*=j0;if(H0.set(a,s,F0,j0),N0.equals(H0)===!1)J.clearColor(a,s,F0,j0),N0.copy(H0)},reset:function(){P=!1,Q0=null,N0.set(-1,0,0,0)}}}function Z(){let P=!1,H0=!1,Q0=null,N0=null,a=null;return{setReversed:function(s){if(H0!==s){let F0=Q.get("EXT_clip_control");if(s)F0.clipControlEXT(F0.LOWER_LEFT_EXT,F0.ZERO_TO_ONE_EXT);else F0.clipControlEXT(F0.LOWER_LEFT_EXT,F0.NEGATIVE_ONE_TO_ONE_EXT);H0=s;let j0=a;a=null,this.setClear(j0)}},getReversed:function(){return H0},setTest:function(s){if(s)G0(J.DEPTH_TEST);else R0(J.DEPTH_TEST)},setMask:function(s){if(Q0!==s&&!P)J.depthMask(s),Q0=s},setFunc:function(s){if(H0)s=xE[s];if(N0!==s){switch(s){case r6:J.depthFunc(J.NEVER);break;case t6:J.depthFunc(J.ALWAYS);break;case e6:J.depthFunc(J.LESS);break;case X6:J.depthFunc(J.LEQUAL);break;case J7:J.depthFunc(J.EQUAL);break;case Q7:J.depthFunc(J.GEQUAL);break;case $7:J.depthFunc(J.GREATER);break;case Z7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}N0=s}},setLocked:function(s){P=s},setClear:function(s){if(a!==s){if(H0)s=1-s;J.clearDepth(s),a=s}},reset:function(){P=!1,Q0=null,N0=null,a=null,H0=!1}}}function W(){let P=!1,H0=null,Q0=null,N0=null,a=null,s=null,F0=null,j0=null,e0=null;return{setTest:function(r0){if(!P)if(r0)G0(J.STENCIL_TEST);else R0(J.STENCIL_TEST)},setMask:function(r0){if(H0!==r0&&!P)J.stencilMask(r0),H0=r0},setFunc:function(r0,H8,Y8){if(Q0!==r0||N0!==H8||a!==Y8)J.stencilFunc(r0,H8,Y8),Q0=r0,N0=H8,a=Y8},setOp:function(r0,H8,Y8){if(s!==r0||F0!==H8||j0!==Y8)J.stencilOp(r0,H8,Y8),s=r0,F0=H8,j0=Y8},setLocked:function(r0){P=r0},setClear:function(r0){if(e0!==r0)J.clearStencil(r0),e0=r0},reset:function(){P=!1,H0=null,Q0=null,N0=null,a=null,s=null,F0=null,j0=null,e0=null}}}let H=new $,Y=new Z,X=new W,K=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,O=[],R=null,M=!1,N=null,F=null,_=null,L=null,w=null,S=null,C=null,T=new D0(0,0,0),b=0,z=!1,V=null,v=null,m=null,l=null,c=null,i=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,r=0,g=J.getParameter(J.VERSION);if(g.indexOf("WebGL")!==-1)r=parseFloat(/^WebGL (\d)/.exec(g)[1]),u=r>=1;else if(g.indexOf("OpenGL ES")!==-1)r=parseFloat(/^OpenGL ES (\d)/.exec(g)[1]),u=r>=2;let Z0=null,U0={},T0=J.getParameter(J.SCISSOR_BOX),m0=J.getParameter(J.VIEWPORT),HJ=new s0().fromArray(T0),d=new s0().fromArray(m0);function W0(P,H0,Q0,N0){let a=new Uint8Array(4),s=J.createTexture();J.bindTexture(P,s),J.texParameteri(P,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(P,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let F0=0;F0<Q0;F0++)if(P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texImage3D(H0,0,J.RGBA,1,1,N0,0,J.RGBA,J.UNSIGNED_BYTE,a);else J.texImage2D(H0+F0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,a);return s}let k0={};k0[J.TEXTURE_2D]=W0(J.TEXTURE_2D,J.TEXTURE_2D,1),k0[J.TEXTURE_CUBE_MAP]=W0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),k0[J.TEXTURE_2D_ARRAY]=W0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),k0[J.TEXTURE_3D]=W0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),G0(J.DEPTH_TEST),Y.setFunc(X6),B0(!1),YJ(DQ),G0(J.CULL_FACE),C0(b8);function G0(P){if(G[P]!==!0)J.enable(P),G[P]=!0}function R0(P){if(G[P]!==!1)J.disable(P),G[P]=!1}function u0(P,H0){if(E[P]!==H0){if(J.bindFramebuffer(P,H0),E[P]=H0,P===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=H0;if(P===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=H0;return!0}return!1}function c0(P,H0){let Q0=O,N0=!1;if(P){if(Q0=q.get(H0),Q0===void 0)Q0=[],q.set(H0,Q0);let a=P.textures;if(Q0.length!==a.length||Q0[0]!==J.COLOR_ATTACHMENT0){for(let s=0,F0=a.length;s<F0;s++)Q0[s]=J.COLOR_ATTACHMENT0+s;Q0.length=a.length,N0=!0}}else if(Q0[0]!==J.BACK)Q0[0]=J.BACK,N0=!0;if(N0)J.drawBuffers(Q0)}function d0(P){if(R!==P)return J.useProgram(P),R=P,!0;return!1}let I={[S9]:J.FUNC_ADD,[nZ]:J.FUNC_SUBTRACT,[sZ]:J.FUNC_REVERSE_SUBTRACT};I[oZ]=J.MIN,I[iZ]=J.MAX;let QJ={[aZ]:J.ZERO,[rZ]:J.ONE,[tZ]:J.SRC_COLOR,[JW]:J.SRC_ALPHA,[YW]:J.SRC_ALPHA_SATURATE,[WW]:J.DST_COLOR,[$W]:J.DST_ALPHA,[eZ]:J.ONE_MINUS_SRC_COLOR,[QW]:J.ONE_MINUS_SRC_ALPHA,[HW]:J.ONE_MINUS_DST_COLOR,[ZW]:J.ONE_MINUS_DST_ALPHA,[XW]:J.CONSTANT_COLOR,[KW]:J.ONE_MINUS_CONSTANT_COLOR,[UW]:J.CONSTANT_ALPHA,[GW]:J.ONE_MINUS_CONSTANT_ALPHA};function C0(P,H0,Q0,N0,a,s,F0,j0,e0,r0){if(P===b8){if(M===!0)R0(J.BLEND),M=!1;return}if(M===!1)G0(J.BLEND),M=!0;if(P!==cZ){if(P!==N||r0!==z){if(F!==S9||w!==S9)J.blendEquation(J.FUNC_ADD),F=S9,w=S9;if(r0)switch(P){case Y6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case VQ:J.blendFunc(J.ONE,J.ONE);break;case zQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case BQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Y6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case VQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case zQ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case BQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,L=null,S=null,C=null,T.set(0,0,0),b=0,N=P,z=r0}return}if(a=a||H0,s=s||Q0,F0=F0||N0,H0!==F||a!==w)J.blendEquationSeparate(I[H0],I[a]),F=H0,w=a;if(Q0!==_||N0!==L||s!==S||F0!==C)J.blendFuncSeparate(QJ[Q0],QJ[N0],QJ[s],QJ[F0]),_=Q0,L=N0,S=s,C=F0;if(j0.equals(T)===!1||e0!==b)J.blendColor(j0.r,j0.g,j0.b,e0),T.copy(j0),b=e0;N=P,z=!1}function i0(P,H0){P.side===iJ?R0(J.CULL_FACE):G0(J.CULL_FACE);let Q0=P.side===pJ;if(H0)Q0=!Q0;B0(Q0),P.blending===Y6&&P.transparent===!1?C0(b8):C0(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),Y.setFunc(P.depthFunc),Y.setTest(P.depthTest),Y.setMask(P.depthWrite),H.setMask(P.colorWrite);let N0=P.stencilWrite;if(X.setTest(N0),N0)X.setMask(P.stencilWriteMask),X.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),X.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);I0(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?G0(J.SAMPLE_ALPHA_TO_COVERAGE):R0(J.SAMPLE_ALPHA_TO_COVERAGE)}function B0(P){if(V!==P){if(P)J.frontFace(J.CW);else J.frontFace(J.CCW);V=P}}function YJ(P){if(P!==dZ){if(G0(J.CULL_FACE),P!==v)if(P===DQ)J.cullFace(J.BACK);else if(P===mZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else R0(J.CULL_FACE);v=P}function L0(P){if(P!==m){if(u)J.lineWidth(P);m=P}}function I0(P,H0,Q0){if(P){if(G0(J.POLYGON_OFFSET_FILL),l!==H0||c!==Q0)J.polygonOffset(H0,Q0),l=H0,c=Q0}else R0(J.POLYGON_OFFSET_FILL)}function BJ(P){if(P)G0(J.SCISSOR_TEST);else R0(J.SCISSOR_TEST)}function DJ(P){if(P===void 0)P=J.TEXTURE0+i-1;if(Z0!==P)J.activeTexture(P),Z0=P}function NJ(P,H0,Q0){if(Q0===void 0)if(Z0===null)Q0=J.TEXTURE0+i-1;else Q0=Z0;let N0=U0[Q0];if(N0===void 0)N0={type:void 0,texture:void 0},U0[Q0]=N0;if(N0.type!==P||N0.texture!==H0){if(Z0!==Q0)J.activeTexture(Q0),Z0=Q0;J.bindTexture(P,H0||k0[P]),N0.type=P,N0.texture=H0}}function B(){let P=U0[Z0];if(P!==void 0&&P.type!==void 0)J.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function k(){try{J.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function h(){try{J.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function n(){try{J.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function o(){try{J.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function p(){try{J.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q0(){try{J.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J0(){try{J.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function M0(){try{J.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A0(){try{J.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function e(){try{J.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X0(P){if(HJ.equals(P)===!1)J.scissor(P.x,P.y,P.z,P.w),HJ.copy(P)}function V0(P){if(d.equals(P)===!1)J.viewport(P.x,P.y,P.z,P.w),d.copy(P)}function z0(P,H0){let Q0=U.get(H0);if(Q0===void 0)Q0=new WeakMap,U.set(H0,Q0);let N0=Q0.get(P);if(N0===void 0)N0=J.getUniformBlockIndex(H0,P.name),Q0.set(P,N0)}function K0(P,H0){let N0=U.get(H0).get(P);if(K.get(H0)!==N0)J.uniformBlockBinding(H0,N0,P.__bindingPointIndex),K.set(H0,N0)}function f0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},Z0=null,U0={},E={},q=new WeakMap,O=[],R=null,M=!1,N=null,F=null,_=null,L=null,w=null,S=null,C=null,T=new D0(0,0,0),b=0,z=!1,V=null,v=null,m=null,l=null,c=null,HJ.set(0,0,J.canvas.width,J.canvas.height),d.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),X.reset()}return{buffers:{color:H,depth:Y,stencil:X},enable:G0,disable:R0,bindFramebuffer:u0,drawBuffers:c0,useProgram:d0,setBlending:C0,setMaterial:i0,setFlipSided:B0,setCullFace:YJ,setLineWidth:L0,setPolygonOffset:I0,setScissorTest:BJ,activeTexture:DJ,bindTexture:NJ,unbindTexture:B,compressedTexImage2D:k,compressedTexImage3D:h,texImage2D:A0,texImage3D:e,updateUBOMapping:z0,uniformBlockBinding:K0,texStorage2D:J0,texStorage3D:M0,texSubImage2D:n,texSubImage3D:o,compressedTexSubImage2D:p,compressedTexSubImage3D:q0,scissor:X0,viewport:V0,reset:f0}}function gE(J,Q,$,Z,W,H,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new x0,G=new WeakMap,E,q=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function R(B,k){return O?new OffscreenCanvas(B,k):A9("canvas")}function M(B,k,h){let n=1,o=NJ(B);if(o.width>h||o.height>h)n=h/Math.max(o.width,o.height);if(n<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let p=Math.floor(n*o.width),q0=Math.floor(n*o.height);if(E===void 0)E=R(p,q0);let J0=k?R(p,q0):E;return J0.width=p,J0.height=q0,J0.getContext("2d").drawImage(B,0,0,p,q0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+o.width+"x"+o.height+") to ("+p+"x"+q0+")."),J0}else{if("data"in B)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+o.width+"x"+o.height+").");return B}return B}function N(B){return B.generateMipmaps}function F(B){J.generateMipmap(B)}function _(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,k,h,n,o=!1){if(B!==null){if(J[B]!==void 0)return J[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let p=k;if(k===J.RED){if(h===J.FLOAT)p=J.R32F;if(h===J.HALF_FLOAT)p=J.R16F;if(h===J.UNSIGNED_BYTE)p=J.R8}if(k===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.R8UI;if(h===J.UNSIGNED_SHORT)p=J.R16UI;if(h===J.UNSIGNED_INT)p=J.R32UI;if(h===J.BYTE)p=J.R8I;if(h===J.SHORT)p=J.R16I;if(h===J.INT)p=J.R32I}if(k===J.RG){if(h===J.FLOAT)p=J.RG32F;if(h===J.HALF_FLOAT)p=J.RG16F;if(h===J.UNSIGNED_BYTE)p=J.RG8}if(k===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RG8UI;if(h===J.UNSIGNED_SHORT)p=J.RG16UI;if(h===J.UNSIGNED_INT)p=J.RG32UI;if(h===J.BYTE)p=J.RG8I;if(h===J.SHORT)p=J.RG16I;if(h===J.INT)p=J.RG32I}if(k===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RGB8UI;if(h===J.UNSIGNED_SHORT)p=J.RGB16UI;if(h===J.UNSIGNED_INT)p=J.RGB32UI;if(h===J.BYTE)p=J.RGB8I;if(h===J.SHORT)p=J.RGB16I;if(h===J.INT)p=J.RGB32I}if(k===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)p=J.RGBA16UI;if(h===J.UNSIGNED_INT)p=J.RGBA32UI;if(h===J.BYTE)p=J.RGBA8I;if(h===J.SHORT)p=J.RGBA16I;if(h===J.INT)p=J.RGBA32I}if(k===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)p=J.RGB9_E5}if(k===J.RGBA){let q0=o?W$:b0.getTransfer(n);if(h===J.FLOAT)p=J.RGBA32F;if(h===J.HALF_FLOAT)p=J.RGBA16F;if(h===J.UNSIGNED_BYTE)p=q0===$J?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)p=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)p=J.RGB5_A1}if(p===J.R16F||p===J.R32F||p===J.RG16F||p===J.RG32F||p===J.RGBA16F||p===J.RGBA32F)Q.get("EXT_color_buffer_float");return p}function w(B,k){let h;if(B){if(k===null||k===h9||k===f9)h=J.DEPTH24_STENCIL8;else if(k===p8)h=J.DEPTH32F_STENCIL8;else if(k===U6)h=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===h9||k===f9)h=J.DEPTH_COMPONENT24;else if(k===p8)h=J.DEPTH_COMPONENT32F;else if(k===U6)h=J.DEPTH_COMPONENT16;return h}function S(B,k){if(N(B)===!0||B.isFramebufferTexture&&B.minFilter!==w8&&B.minFilter!==Z8)return Math.log2(Math.max(k.width,k.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return k.mipmaps.length;else return 1}function C(B){let k=B.target;if(k.removeEventListener("dispose",C),b(k),k.isVideoTexture)G.delete(k)}function T(B){let k=B.target;k.removeEventListener("dispose",T),V(k)}function b(B){let k=Z.get(B);if(k.__webglInit===void 0)return;let h=B.source,n=q.get(h);if(n){let o=n[k.__cacheKey];if(o.usedTimes--,o.usedTimes===0)z(B);if(Object.keys(n).length===0)q.delete(h)}Z.remove(B)}function z(B){let k=Z.get(B);J.deleteTexture(k.__webglTexture);let h=B.source,n=q.get(h);delete n[k.__cacheKey],Y.memory.textures--}function V(B){let k=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let n=0;n<6;n++){if(Array.isArray(k.__webglFramebuffer[n]))for(let o=0;o<k.__webglFramebuffer[n].length;o++)J.deleteFramebuffer(k.__webglFramebuffer[n][o]);else J.deleteFramebuffer(k.__webglFramebuffer[n]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[n])}else{if(Array.isArray(k.__webglFramebuffer))for(let n=0;n<k.__webglFramebuffer.length;n++)J.deleteFramebuffer(k.__webglFramebuffer[n]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let n=0;n<k.__webglColorRenderbuffer.length;n++)if(k.__webglColorRenderbuffer[n])J.deleteRenderbuffer(k.__webglColorRenderbuffer[n])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let h=B.textures;for(let n=0,o=h.length;n<o;n++){let p=Z.get(h[n]);if(p.__webglTexture)J.deleteTexture(p.__webglTexture),Y.memory.textures--;Z.remove(h[n])}Z.remove(B)}let v=0;function m(){v=0}function l(){let B=v;if(B>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+W.maxTextures);return v+=1,B}function c(B){let k=[];return k.push(B.wrapS),k.push(B.wrapT),k.push(B.wrapR||0),k.push(B.magFilter),k.push(B.minFilter),k.push(B.anisotropy),k.push(B.internalFormat),k.push(B.format),k.push(B.type),k.push(B.generateMipmaps),k.push(B.premultiplyAlpha),k.push(B.flipY),k.push(B.unpackAlignment),k.push(B.colorSpace),k.join()}function i(B,k){let h=Z.get(B);if(B.isVideoTexture)BJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&h.__version!==B.version){let n=B.image;if(n===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(n.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k0(h,B,k);return}}else if(B.isExternalTexture)h.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+k)}function u(B,k){let h=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&h.__version!==B.version){k0(h,B,k);return}$.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+k)}function r(B,k){let h=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&h.__version!==B.version){k0(h,B,k);return}$.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+k)}function g(B,k){let h=Z.get(B);if(B.version>0&&h.__version!==B.version){G0(h,B,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+k)}let Z0={[v9]:J.REPEAT,[Y7]:J.CLAMP_TO_EDGE,[X7]:J.MIRRORED_REPEAT},U0={[w8]:J.NEAREST,[K7]:J.NEAREST_MIPMAP_NEAREST,[W9]:J.NEAREST_MIPMAP_LINEAR,[Z8]:J.LINEAR,[y9]:J.LINEAR_MIPMAP_NEAREST,[I8]:J.LINEAR_MIPMAP_LINEAR},T0={[jW]:J.NEVER,[bW]:J.ALWAYS,[vW]:J.LESS,[H$]:J.LEQUAL,[yW]:J.EQUAL,[xW]:J.GEQUAL,[hW]:J.GREATER,[fW]:J.NOTEQUAL};function m0(B,k){if(k.type===p8&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===Z8||k.magFilter===y9||k.magFilter===W9||k.magFilter===I8||k.minFilter===Z8||k.minFilter===y9||k.minFilter===W9||k.minFilter===I8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,Z0[k.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,Z0[k.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,Z0[k.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,U0[k.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,U0[k.minFilter]),k.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,T0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===w8)return;if(k.minFilter!==W9&&k.minFilter!==I8)return;if(k.type===p8&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,W.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function HJ(B,k){let h=!1;if(B.__webglInit===void 0)B.__webglInit=!0,k.addEventListener("dispose",C);let n=k.source,o=q.get(n);if(o===void 0)o={},q.set(n,o);let p=c(k);if(p!==B.__cacheKey){if(o[p]===void 0)o[p]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,h=!0;o[p].usedTimes++;let q0=o[B.__cacheKey];if(q0!==void 0){if(o[B.__cacheKey].usedTimes--,q0.usedTimes===0)z(k)}B.__cacheKey=p,B.__webglTexture=o[p].texture}return h}function d(B,k,h){return Math.floor(Math.floor(B/h)/k)}function W0(B,k,h,n){let p=B.updateRanges;if(p.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,h,n,k.data);else{p.sort((e,X0)=>e.start-X0.start);let q0=0;for(let e=1;e<p.length;e++){let X0=p[q0],V0=p[e],z0=X0.start+X0.count,K0=d(V0.start,k.width,4),f0=d(X0.start,k.width,4);if(V0.start<=z0+1&&K0===f0&&d(V0.start+V0.count-1,k.width,4)===K0)X0.count=Math.max(X0.count,V0.start+V0.count-X0.start);else++q0,p[q0]=V0}p.length=q0+1;let J0=J.getParameter(J.UNPACK_ROW_LENGTH),M0=J.getParameter(J.UNPACK_SKIP_PIXELS),A0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let e=0,X0=p.length;e<X0;e++){let V0=p[e],z0=Math.floor(V0.start/4),K0=Math.ceil(V0.count/4),f0=z0%k.width,P=Math.floor(z0/k.width),H0=K0,Q0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,f0),J.pixelStorei(J.UNPACK_SKIP_ROWS,P),$.texSubImage2D(J.TEXTURE_2D,0,f0,P,H0,1,h,n,k.data)}B.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,J0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,M0),J.pixelStorei(J.UNPACK_SKIP_ROWS,A0)}}function k0(B,k,h){let n=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)n=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)n=J.TEXTURE_3D;let o=HJ(B,k),p=k.source;$.bindTexture(n,B.__webglTexture,J.TEXTURE0+h);let q0=Z.get(p);if(p.version!==q0.__version||o===!0){$.activeTexture(J.TEXTURE0+h);let J0=b0.getPrimaries(b0.workingColorSpace),M0=k.colorSpace===H9?null:b0.getPrimaries(k.colorSpace),A0=k.colorSpace===H9||J0===M0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,A0);let e=M(k.image,!1,W.maxTextureSize);e=DJ(k,e);let X0=H.convert(k.format,k.colorSpace),V0=H.convert(k.type),z0=L(k.internalFormat,X0,V0,k.colorSpace,k.isVideoTexture);m0(n,k);let K0,f0=k.mipmaps,P=k.isVideoTexture!==!0,H0=q0.__version===void 0||o===!0,Q0=p.dataReady,N0=S(k,e);if(k.isDepthTexture){if(z0=w(k.format===E6,k.type),H0)if(P)$.texStorage2D(J.TEXTURE_2D,1,z0,e.width,e.height);else $.texImage2D(J.TEXTURE_2D,0,z0,e.width,e.height,0,X0,V0,null)}else if(k.isDataTexture)if(f0.length>0){if(P&&H0)$.texStorage2D(J.TEXTURE_2D,N0,z0,f0[0].width,f0[0].height);for(let a=0,s=f0.length;a<s;a++)if(K0=f0[a],P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,K0.width,K0.height,X0,V0,K0.data)}else $.texImage2D(J.TEXTURE_2D,a,z0,K0.width,K0.height,0,X0,V0,K0.data);k.generateMipmaps=!1}else if(P){if(H0)$.texStorage2D(J.TEXTURE_2D,N0,z0,e.width,e.height);if(Q0)W0(k,e,X0,V0)}else $.texImage2D(J.TEXTURE_2D,0,z0,e.width,e.height,0,X0,V0,e.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(P&&H0)$.texStorage3D(J.TEXTURE_2D_ARRAY,N0,z0,f0[0].width,f0[0].height,e.depth);for(let a=0,s=f0.length;a<s;a++)if(K0=f0[a],k.format!==U8)if(X0!==null)if(P){if(Q0)if(k.layerUpdates.size>0){let F0=P$(K0.width,K0.height,k.format,k.type);for(let j0 of k.layerUpdates){let e0=K0.data.subarray(j0*F0/K0.data.BYTES_PER_ELEMENT,(j0+1)*F0/K0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,j0,K0.width,K0.height,1,X0,e0)}k.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,K0.width,K0.height,e.depth,X0,K0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,a,z0,K0.width,K0.height,e.depth,0,K0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P){if(Q0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,K0.width,K0.height,e.depth,X0,V0,K0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,a,z0,K0.width,K0.height,e.depth,0,X0,V0,K0.data)}else{if(P&&H0)$.texStorage2D(J.TEXTURE_2D,N0,z0,f0[0].width,f0[0].height);for(let a=0,s=f0.length;a<s;a++)if(K0=f0[a],k.format!==U8)if(X0!==null)if(P){if(Q0)$.compressedTexSubImage2D(J.TEXTURE_2D,a,0,0,K0.width,K0.height,X0,K0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,a,z0,K0.width,K0.height,0,K0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,K0.width,K0.height,X0,V0,K0.data)}else $.texImage2D(J.TEXTURE_2D,a,z0,K0.width,K0.height,0,X0,V0,K0.data)}else if(k.isDataArrayTexture)if(P){if(H0)$.texStorage3D(J.TEXTURE_2D_ARRAY,N0,z0,e.width,e.height,e.depth);if(Q0)if(k.layerUpdates.size>0){let a=P$(e.width,e.height,k.format,k.type);for(let s of k.layerUpdates){let F0=e.data.subarray(s*a/e.data.BYTES_PER_ELEMENT,(s+1)*a/e.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,s,e.width,e.height,1,X0,V0,F0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,X0,V0,e.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,z0,e.width,e.height,e.depth,0,X0,V0,e.data);else if(k.isData3DTexture)if(P){if(H0)$.texStorage3D(J.TEXTURE_3D,N0,z0,e.width,e.height,e.depth);if(Q0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,X0,V0,e.data)}else $.texImage3D(J.TEXTURE_3D,0,z0,e.width,e.height,e.depth,0,X0,V0,e.data);else if(k.isFramebufferTexture){if(H0)if(P)$.texStorage2D(J.TEXTURE_2D,N0,z0,e.width,e.height);else{let{width:a,height:s}=e;for(let F0=0;F0<N0;F0++)$.texImage2D(J.TEXTURE_2D,F0,z0,a,s,0,X0,V0,null),a>>=1,s>>=1}}else if(f0.length>0){if(P&&H0){let a=NJ(f0[0]);$.texStorage2D(J.TEXTURE_2D,N0,z0,a.width,a.height)}for(let a=0,s=f0.length;a<s;a++)if(K0=f0[a],P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,X0,V0,K0)}else $.texImage2D(J.TEXTURE_2D,a,z0,X0,V0,K0);k.generateMipmaps=!1}else if(P){if(H0){let a=NJ(e);$.texStorage2D(J.TEXTURE_2D,N0,z0,a.width,a.height)}if(Q0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,X0,V0,e)}else $.texImage2D(J.TEXTURE_2D,0,z0,X0,V0,e);if(N(k))F(n);if(q0.__version=p.version,k.onUpdate)k.onUpdate(k)}B.__version=k.version}function G0(B,k,h){if(k.image.length!==6)return;let n=HJ(B,k),o=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+h);let p=Z.get(o);if(o.version!==p.__version||n===!0){$.activeTexture(J.TEXTURE0+h);let q0=b0.getPrimaries(b0.workingColorSpace),J0=k.colorSpace===H9?null:b0.getPrimaries(k.colorSpace),M0=k.colorSpace===H9||q0===J0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,M0);let A0=k.isCompressedTexture||k.image[0].isCompressedTexture,e=k.image[0]&&k.image[0].isDataTexture,X0=[];for(let s=0;s<6;s++){if(!A0&&!e)X0[s]=M(k.image[s],!0,W.maxCubemapSize);else X0[s]=e?k.image[s].image:k.image[s];X0[s]=DJ(k,X0[s])}let V0=X0[0],z0=H.convert(k.format,k.colorSpace),K0=H.convert(k.type),f0=L(k.internalFormat,z0,K0,k.colorSpace),P=k.isVideoTexture!==!0,H0=p.__version===void 0||n===!0,Q0=o.dataReady,N0=S(k,V0);m0(J.TEXTURE_CUBE_MAP,k);let a;if(A0){if(P&&H0)$.texStorage2D(J.TEXTURE_CUBE_MAP,N0,f0,V0.width,V0.height);for(let s=0;s<6;s++){a=X0[s].mipmaps;for(let F0=0;F0<a.length;F0++){let j0=a[F0];if(k.format!==U8)if(z0!==null)if(P){if(Q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0,0,0,j0.width,j0.height,z0,j0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0,f0,j0.width,j0.height,0,j0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0,0,0,j0.width,j0.height,z0,K0,j0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0,f0,j0.width,j0.height,0,z0,K0,j0.data)}}}else{if(a=k.mipmaps,P&&H0){if(a.length>0)N0++;let s=NJ(X0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,N0,f0,s.width,s.height)}for(let s=0;s<6;s++)if(e){if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,X0[s].width,X0[s].height,z0,K0,X0[s].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,f0,X0[s].width,X0[s].height,0,z0,K0,X0[s].data);for(let F0=0;F0<a.length;F0++){let e0=a[F0].image[s].image;if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0+1,0,0,e0.width,e0.height,z0,K0,e0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0+1,f0,e0.width,e0.height,0,z0,K0,e0.data)}}else{if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,z0,K0,X0[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,f0,z0,K0,X0[s]);for(let F0=0;F0<a.length;F0++){let j0=a[F0];if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0+1,0,0,z0,K0,j0.image[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,F0+1,f0,z0,K0,j0.image[s])}}}if(N(k))F(J.TEXTURE_CUBE_MAP);if(p.__version=o.version,k.onUpdate)k.onUpdate(k)}B.__version=k.version}function R0(B,k,h,n,o,p){let q0=H.convert(h.format,h.colorSpace),J0=H.convert(h.type),M0=L(h.internalFormat,q0,J0,h.colorSpace),A0=Z.get(k),e=Z.get(h);if(e.__renderTarget=k,!A0.__hasExternalTextures){let X0=Math.max(1,k.width>>p),V0=Math.max(1,k.height>>p);if(o===J.TEXTURE_3D||o===J.TEXTURE_2D_ARRAY)$.texImage3D(o,p,M0,X0,V0,k.depth,0,q0,J0,null);else $.texImage2D(o,p,M0,X0,V0,0,q0,J0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),I0(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,n,o,e.__webglTexture,0,L0(k));else if(o===J.TEXTURE_2D||o>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,n,o,e.__webglTexture,p);$.bindFramebuffer(J.FRAMEBUFFER,null)}function u0(B,k,h){if(J.bindRenderbuffer(J.RENDERBUFFER,B),k.depthBuffer){let n=k.depthTexture,o=n&&n.isDepthTexture?n.type:null,p=w(k.stencilBuffer,o),q0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,J0=L0(k);if(I0(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,J0,p,k.width,k.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,J0,p,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,p,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,B)}else{let n=k.textures;for(let o=0;o<n.length;o++){let p=n[o],q0=H.convert(p.format,p.colorSpace),J0=H.convert(p.type),M0=L(p.internalFormat,q0,J0,p.colorSpace),A0=L0(k);if(h&&I0(k)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,A0,M0,k.width,k.height);else if(I0(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,A0,M0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,M0,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function c0(B,k){if(k&&k.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,B),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let n=Z.get(k.depthTexture);if(n.__renderTarget=k,!n.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;i(k.depthTexture,0);let o=n.__webglTexture,p=L0(k);if(k.depthTexture.format===U7)if(I0(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,o,0,p);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,o,0);else if(k.depthTexture.format===E6)if(I0(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,o,0,p);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,o,0);else throw Error("Unknown depthTexture format")}function d0(B){let k=Z.get(B),h=B.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==B.depthTexture){let n=B.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(n){let o=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,n.removeEventListener("dispose",o)};n.addEventListener("dispose",o),k.__depthDisposeCallback=o}k.__boundDepthTexture=n}if(B.depthTexture&&!k.__autoAllocateDepthBuffer){if(h)throw Error("target.depthTexture not supported in Cube render targets");let n=B.texture.mipmaps;if(n&&n.length>0)c0(k.__webglFramebuffer[0],B);else c0(k.__webglFramebuffer,B)}else if(h){k.__webglDepthbuffer=[];for(let n=0;n<6;n++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[n]),k.__webglDepthbuffer[n]===void 0)k.__webglDepthbuffer[n]=J.createRenderbuffer(),u0(k.__webglDepthbuffer[n],B,!1);else{let o=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,p=k.__webglDepthbuffer[n];J.bindRenderbuffer(J.RENDERBUFFER,p),J.framebufferRenderbuffer(J.FRAMEBUFFER,o,J.RENDERBUFFER,p)}}else{let n=B.texture.mipmaps;if(n&&n.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),u0(k.__webglDepthbuffer,B,!1);else{let o=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,p=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,p),J.framebufferRenderbuffer(J.FRAMEBUFFER,o,J.RENDERBUFFER,p)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function I(B,k,h){let n=Z.get(B);if(k!==void 0)R0(n.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)d0(B)}function QJ(B){let k=B.texture,h=Z.get(B),n=Z.get(k);B.addEventListener("dispose",T);let o=B.textures,p=B.isWebGLCubeRenderTarget===!0,q0=o.length>1;if(!q0){if(n.__webglTexture===void 0)n.__webglTexture=J.createTexture();n.__version=k.version,Y.memory.textures++}if(p){h.__webglFramebuffer=[];for(let J0=0;J0<6;J0++)if(k.mipmaps&&k.mipmaps.length>0){h.__webglFramebuffer[J0]=[];for(let M0=0;M0<k.mipmaps.length;M0++)h.__webglFramebuffer[J0][M0]=J.createFramebuffer()}else h.__webglFramebuffer[J0]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){h.__webglFramebuffer=[];for(let J0=0;J0<k.mipmaps.length;J0++)h.__webglFramebuffer[J0]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(q0)for(let J0=0,M0=o.length;J0<M0;J0++){let A0=Z.get(o[J0]);if(A0.__webglTexture===void 0)A0.__webglTexture=J.createTexture(),Y.memory.textures++}if(B.samples>0&&I0(B)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let J0=0;J0<o.length;J0++){let M0=o[J0];h.__webglColorRenderbuffer[J0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[J0]);let A0=H.convert(M0.format,M0.colorSpace),e=H.convert(M0.type),X0=L(M0.internalFormat,A0,e,M0.colorSpace,B.isXRRenderTarget===!0),V0=L0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,V0,X0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+J0,J.RENDERBUFFER,h.__webglColorRenderbuffer[J0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),u0(h.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(p){$.bindTexture(J.TEXTURE_CUBE_MAP,n.__webglTexture),m0(J.TEXTURE_CUBE_MAP,k);for(let J0=0;J0<6;J0++)if(k.mipmaps&&k.mipmaps.length>0)for(let M0=0;M0<k.mipmaps.length;M0++)R0(h.__webglFramebuffer[J0][M0],B,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,M0);else R0(h.__webglFramebuffer[J0],B,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0);if(N(k))F(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(q0){for(let J0=0,M0=o.length;J0<M0;J0++){let A0=o[J0],e=Z.get(A0),X0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)X0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(X0,e.__webglTexture),m0(X0,A0),R0(h.__webglFramebuffer,B,A0,J.COLOR_ATTACHMENT0+J0,X0,0),N(A0))F(X0)}$.unbindTexture()}else{let J0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)J0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(J0,n.__webglTexture),m0(J0,k),k.mipmaps&&k.mipmaps.length>0)for(let M0=0;M0<k.mipmaps.length;M0++)R0(h.__webglFramebuffer[M0],B,k,J.COLOR_ATTACHMENT0,J0,M0);else R0(h.__webglFramebuffer,B,k,J.COLOR_ATTACHMENT0,J0,0);if(N(k))F(J0);$.unbindTexture()}if(B.depthBuffer)d0(B)}function C0(B){let k=B.textures;for(let h=0,n=k.length;h<n;h++){let o=k[h];if(N(o)){let p=_(B),q0=Z.get(o).__webglTexture;$.bindTexture(p,q0),F(p),$.unbindTexture()}}}let i0=[],B0=[];function YJ(B){if(B.samples>0){if(I0(B)===!1){let{textures:k,width:h,height:n}=B,o=J.COLOR_BUFFER_BIT,p=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,q0=Z.get(B),J0=k.length>1;if(J0)for(let A0=0;A0<k.length;A0++)$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,q0.__webglMultisampledFramebuffer);let M0=B.texture.mipmaps;if(M0&&M0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer);for(let A0=0;A0<k.length;A0++){if(B.resolveDepthBuffer){if(B.depthBuffer)o|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)o|=J.STENCIL_BUFFER_BIT}if(J0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[A0]);let e=Z.get(k[A0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,e,0)}if(J.blitFramebuffer(0,0,h,n,0,0,h,n,o,J.NEAREST),K===!0){if(i0.length=0,B0.length=0,i0.push(J.COLOR_ATTACHMENT0+A0),B.depthBuffer&&B.resolveDepthBuffer===!1)i0.push(p),B0.push(p),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,B0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,i0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J0)for(let A0=0;A0<k.length;A0++){$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[A0]);let e=Z.get(k[A0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.TEXTURE_2D,e,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&K){let k=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function L0(B){return Math.min(W.maxSamples,B.samples)}function I0(B){let k=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function BJ(B){let k=Y.render.frame;if(G.get(B)!==k)G.set(B,k),B.update()}function DJ(B,k){let{colorSpace:h,format:n,type:o}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return k;if(h!==_J&&h!==H9)if(b0.getTransfer(h)===$J){if(n!==U8||o!==g8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",h);return k}function NJ(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=l,this.resetTextureUnits=m,this.setTexture2D=i,this.setTexture2DArray=u,this.setTexture3D=r,this.setTextureCube=g,this.rebindTextures=I,this.setupRenderTarget=QJ,this.updateRenderTargetMipmap=C0,this.updateMultisampleRenderTarget=YJ,this.setupDepthRenderbuffer=d0,this.setupFrameBufferTexture=R0,this.useMultisampledRTT=I0}function pE(J,Q){function $(Z,W=H9){let H,Y=b0.getTransfer(W);if(Z===g8)return J.UNSIGNED_BYTE;if(Z===CQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===wQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===BW)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===VW)return J.BYTE;if(Z===zW)return J.SHORT;if(Z===U6)return J.UNSIGNED_SHORT;if(Z===_Q)return J.INT;if(Z===h9)return J.UNSIGNED_INT;if(Z===p8)return J.FLOAT;if(Z===G6)return J.HALF_FLOAT;if(Z===_W)return J.ALPHA;if(Z===CW)return J.RGB;if(Z===U8)return J.RGBA;if(Z===U7)return J.DEPTH_COMPONENT;if(Z===E6)return J.DEPTH_STENCIL;if(Z===wW)return J.RED;if(Z===IQ)return J.RED_INTEGER;if(Z===IW)return J.RG;if(Z===PQ)return J.RG_INTEGER;if(Z===TQ)return J.RGBA_INTEGER;if(Z===G7||Z===E7||Z===q7||Z===N7)if(Y===$J)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if(Z===G7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===E7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===q7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===N7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if(Z===G7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===E7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===q7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===N7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===AQ||Z===SQ||Z===jQ||Z===vQ)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if(Z===AQ)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===SQ)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===jQ)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===vQ)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===yQ||Z===hQ||Z===fQ)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if(Z===yQ||Z===hQ)return Y===$J?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if(Z===fQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===xQ||Z===bQ||Z===gQ||Z===pQ||Z===lQ||Z===dQ||Z===mQ||Z===uQ||Z===cQ||Z===nQ||Z===sQ||Z===oQ||Z===iQ||Z===aQ)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if(Z===xQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===bQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===gQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===pQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===lQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===dQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===mQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===uQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===cQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===nQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===sQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===oQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===iQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===aQ)return Y===$J?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===O7||Z===rQ||Z===tQ)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if(Z===O7)return Y===$J?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===rQ)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===tQ)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===PW||Z===eQ||Z===J$||Z===Q$)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if(Z===O7)return H.COMPRESSED_RED_RGTC1_EXT;if(Z===eQ)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===J$)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===Q$)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===f9)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}class b$ extends qJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}}var lE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dE=`
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

}`;class TH{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new b$(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new E8({vertexShader:lE,fragmentShader:dE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new RJ(new D6(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AH extends l8{constructor(J,Q){super();let $=this,Z=null,W=1,H=null,Y="local-floor",X=1,K=null,U=null,G=null,E=null,q=null,O=null,R=new TH,M={},N=Q.getContextAttributes(),F=null,_=null,L=[],w=[],S=new x0,C=null,T=new OJ;T.viewport=new s0;let b=new OJ;b.viewport=new s0;let z=[T,b],V=new C$,v=null,m=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(d){let W0=L[d];if(W0===void 0)W0=new O6,L[d]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(d){let W0=L[d];if(W0===void 0)W0=new O6,L[d]=W0;return W0.getGripSpace()},this.getHand=function(d){let W0=L[d];if(W0===void 0)W0=new O6,L[d]=W0;return W0.getHandSpace()};function l(d){let W0=w.indexOf(d.inputSource);if(W0===-1)return;let k0=L[W0];if(k0!==void 0)k0.update(d.inputSource,d.frame,K||H),k0.dispatchEvent({type:d.type,data:d.inputSource})}function c(){Z.removeEventListener("select",l),Z.removeEventListener("selectstart",l),Z.removeEventListener("selectend",l),Z.removeEventListener("squeeze",l),Z.removeEventListener("squeezestart",l),Z.removeEventListener("squeezeend",l),Z.removeEventListener("end",c),Z.removeEventListener("inputsourceschange",i);for(let d=0;d<L.length;d++){let W0=w[d];if(W0===null)continue;w[d]=null,L[d].disconnect(W0)}v=null,m=null,R.reset();for(let d in M)delete M[d];J.setRenderTarget(F),q=null,E=null,G=null,Z=null,_=null,HJ.stop(),$.isPresenting=!1,J.setPixelRatio(C),J.setSize(S.width,S.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(d){if(W=d,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(d){if(Y=d,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||H},this.setReferenceSpace=function(d){K=d},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){return G},this.getFrame=function(){return O},this.getSession=function(){return Z},this.setSession=async function(d){if(Z=d,Z!==null){if(F=J.getRenderTarget(),Z.addEventListener("select",l),Z.addEventListener("selectstart",l),Z.addEventListener("selectend",l),Z.addEventListener("squeeze",l),Z.addEventListener("squeezestart",l),Z.addEventListener("squeezeend",l),Z.addEventListener("end",c),Z.addEventListener("inputsourceschange",i),N.xrCompatible!==!0)await Q.makeXRCompatible();if(C=J.getPixelRatio(),J.getSize(S),typeof XRWebGLBinding<"u")G=new XRWebGLBinding(Z,Q);if(!(G!==null&&("createProjectionLayer"in XRWebGLBinding.prototype))){let k0={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer(Z,Q,k0),Z.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),_=new W8(q.framebufferWidth,q.framebufferHeight,{format:U8,type:g8,colorSpace:J.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let k0=null,G0=null,R0=null;if(N.depth)R0=N.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,k0=N.stencil?E6:U7,G0=N.stencil?f9:h9;let u0={colorFormat:Q.RGBA8,depthFormat:R0,scaleFactor:W};E=G.createProjectionLayer(u0),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),_=new W8(E.textureWidth,E.textureHeight,{format:U8,type:g8,depthTexture:new I7(E.textureWidth,E.textureHeight,G0,void 0,void 0,void 0,void 0,void 0,void 0,k0),stencilBuffer:N.stencil,colorSpace:J.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(X),K=null,H=await Z.requestReferenceSpace(Y),HJ.setContext(Z),HJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function i(d){for(let W0=0;W0<d.removed.length;W0++){let k0=d.removed[W0],G0=w.indexOf(k0);if(G0>=0)w[G0]=null,L[G0].disconnect(k0)}for(let W0=0;W0<d.added.length;W0++){let k0=d.added[W0],G0=w.indexOf(k0);if(G0===-1){for(let u0=0;u0<L.length;u0++)if(u0>=w.length){w.push(k0),G0=u0;break}else if(w[u0]===null){w[u0]=k0,G0=u0;break}if(G0===-1)break}let R0=L[G0];if(R0)R0.connect(k0)}}let u=new A,r=new A;function g(d,W0,k0){u.setFromMatrixPosition(W0.matrixWorld),r.setFromMatrixPosition(k0.matrixWorld);let G0=u.distanceTo(r),R0=W0.projectionMatrix.elements,u0=k0.projectionMatrix.elements,c0=R0[14]/(R0[10]-1),d0=R0[14]/(R0[10]+1),I=(R0[9]+1)/R0[5],QJ=(R0[9]-1)/R0[5],C0=(R0[8]-1)/R0[0],i0=(u0[8]+1)/u0[0],B0=c0*C0,YJ=c0*i0,L0=G0/(-C0+i0),I0=L0*-C0;if(W0.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.translateX(I0),d.translateZ(L0),d.matrixWorld.compose(d.position,d.quaternion,d.scale),d.matrixWorldInverse.copy(d.matrixWorld).invert(),R0[10]===-1)d.projectionMatrix.copy(W0.projectionMatrix),d.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let BJ=c0+L0,DJ=d0+L0,NJ=B0-I0,B=YJ+(G0-I0),k=I*d0/DJ*BJ,h=QJ*d0/DJ*BJ;d.projectionMatrix.makePerspective(NJ,B,k,h,BJ,DJ),d.projectionMatrixInverse.copy(d.projectionMatrix).invert()}}function Z0(d,W0){if(W0===null)d.matrixWorld.copy(d.matrix);else d.matrixWorld.multiplyMatrices(W0.matrixWorld,d.matrix);d.matrixWorldInverse.copy(d.matrixWorld).invert()}this.updateCamera=function(d){if(Z===null)return;let{near:W0,far:k0}=d;if(R.texture!==null){if(R.depthNear>0)W0=R.depthNear;if(R.depthFar>0)k0=R.depthFar}if(V.near=b.near=T.near=W0,V.far=b.far=T.far=k0,v!==V.near||m!==V.far)Z.updateRenderState({depthNear:V.near,depthFar:V.far}),v=V.near,m=V.far;V.layers.mask=d.layers.mask|6,T.layers.mask=V.layers.mask&3,b.layers.mask=V.layers.mask&5;let G0=d.parent,R0=V.cameras;Z0(V,G0);for(let u0=0;u0<R0.length;u0++)Z0(R0[u0],G0);if(R0.length===2)g(V,T,b);else V.projectionMatrix.copy(T.projectionMatrix);U0(d,V,G0)};function U0(d,W0,k0){if(k0===null)d.matrix.copy(W0.matrixWorld);else d.matrix.copy(k0.matrixWorld),d.matrix.invert(),d.matrix.multiply(W0.matrixWorld);if(d.matrix.decompose(d.position,d.quaternion,d.scale),d.updateMatrixWorld(!0),d.projectionMatrix.copy(W0.projectionMatrix),d.projectionMatrixInverse.copy(W0.projectionMatrixInverse),d.isPerspectiveCamera)d.fov=J9*2*Math.atan(1/d.projectionMatrix.elements[5]),d.zoom=1}this.getCamera=function(){return V},this.getFoveation=function(){if(E===null&&q===null)return;return X},this.setFoveation=function(d){if(X=d,E!==null)E.fixedFoveation=d;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=d},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(V)},this.getCameraTexture=function(d){return M[d]};let T0=null;function m0(d,W0){if(U=W0.getViewerPose(K||H),O=W0,U!==null){let k0=U.views;if(q!==null)J.setRenderTargetFramebuffer(_,q.framebuffer),J.setRenderTarget(_);let G0=!1;if(k0.length!==V.cameras.length)V.cameras.length=0,G0=!0;for(let d0=0;d0<k0.length;d0++){let I=k0[d0],QJ=null;if(q!==null)QJ=q.getViewport(I);else{let i0=G.getViewSubImage(E,I);if(QJ=i0.viewport,d0===0)J.setRenderTargetTextures(_,i0.colorTexture,i0.depthStencilTexture),J.setRenderTarget(_)}let C0=z[d0];if(C0===void 0)C0=new OJ,C0.layers.enable(d0),C0.viewport=new s0,z[d0]=C0;if(C0.matrix.fromArray(I.transform.matrix),C0.matrix.decompose(C0.position,C0.quaternion,C0.scale),C0.projectionMatrix.fromArray(I.projectionMatrix),C0.projectionMatrixInverse.copy(C0.projectionMatrix).invert(),C0.viewport.set(QJ.x,QJ.y,QJ.width,QJ.height),d0===0)V.matrix.copy(C0.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);if(G0===!0)V.cameras.push(C0)}let R0=Z.enabledFeatures;if(R0&&R0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&G){let d0=G.getDepthInformation(k0[0]);if(d0&&d0.isValid&&d0.texture)R.init(d0,Z.renderState)}if(R0&&R0.includes("camera-access")){if(J.state.unbindTexture(),G)for(let d0=0;d0<k0.length;d0++){let I=k0[d0].camera;if(I){let QJ=M[I];if(!QJ)QJ=new b$,M[I]=QJ;let C0=G.getCameraImage(I);QJ.sourceTexture=C0}}}}for(let k0=0;k0<L.length;k0++){let G0=w[k0],R0=L[k0];if(G0!==null&&R0!==void 0)R0.update(G0,W0,K||H)}if(T0)T0(d,W0);if(W0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:W0});O=null}let HJ=new DH;HJ.setAnimationLoop(m0),this.setAnimationLoop=function(d){T0=d},this.dispose=function(){}}}var G9=new IJ,mE=new v0;function uE(J,Q){function $(N,F){if(N.matrixAutoUpdate===!0)N.updateMatrix();F.value.copy(N.matrix)}function Z(N,F){if(F.color.getRGB(N.fogColor.value,O$(J)),F.isFog)N.fogNear.value=F.near,N.fogFar.value=F.far;else if(F.isFogExp2)N.fogDensity.value=F.density}function W(N,F,_,L,w){if(F.isMeshBasicMaterial)H(N,F);else if(F.isMeshLambertMaterial)H(N,F);else if(F.isMeshToonMaterial)H(N,F),E(N,F);else if(F.isMeshPhongMaterial)H(N,F),G(N,F);else if(F.isMeshStandardMaterial){if(H(N,F),q(N,F),F.isMeshPhysicalMaterial)O(N,F,w)}else if(F.isMeshMatcapMaterial)H(N,F),R(N,F);else if(F.isMeshDepthMaterial)H(N,F);else if(F.isMeshDistanceMaterial)H(N,F),M(N,F);else if(F.isMeshNormalMaterial)H(N,F);else if(F.isLineBasicMaterial){if(Y(N,F),F.isLineDashedMaterial)X(N,F)}else if(F.isPointsMaterial)K(N,F,_,L);else if(F.isSpriteMaterial)U(N,F);else if(F.isShadowMaterial)N.color.value.copy(F.color),N.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function H(N,F){if(N.opacity.value=F.opacity,F.color)N.diffuse.value.copy(F.color);if(F.emissive)N.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)N.map.value=F.map,$(F.map,N.mapTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,$(F.alphaMap,N.alphaMapTransform);if(F.bumpMap){if(N.bumpMap.value=F.bumpMap,$(F.bumpMap,N.bumpMapTransform),N.bumpScale.value=F.bumpScale,F.side===pJ)N.bumpScale.value*=-1}if(F.normalMap){if(N.normalMap.value=F.normalMap,$(F.normalMap,N.normalMapTransform),N.normalScale.value.copy(F.normalScale),F.side===pJ)N.normalScale.value.negate()}if(F.displacementMap)N.displacementMap.value=F.displacementMap,$(F.displacementMap,N.displacementMapTransform),N.displacementScale.value=F.displacementScale,N.displacementBias.value=F.displacementBias;if(F.emissiveMap)N.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,N.emissiveMapTransform);if(F.specularMap)N.specularMap.value=F.specularMap,$(F.specularMap,N.specularMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest;let _=Q.get(F),L=_.envMap,w=_.envMapRotation;if(L){if(N.envMap.value=L,G9.copy(w),G9.x*=-1,G9.y*=-1,G9.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)G9.y*=-1,G9.z*=-1;N.envMapRotation.value.setFromMatrix4(mE.makeRotationFromEuler(G9)),N.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=F.reflectivity,N.ior.value=F.ior,N.refractionRatio.value=F.refractionRatio}if(F.lightMap)N.lightMap.value=F.lightMap,N.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,N.lightMapTransform);if(F.aoMap)N.aoMap.value=F.aoMap,N.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,N.aoMapTransform)}function Y(N,F){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,F.map)N.map.value=F.map,$(F.map,N.mapTransform)}function X(N,F){N.dashSize.value=F.dashSize,N.totalSize.value=F.dashSize+F.gapSize,N.scale.value=F.scale}function K(N,F,_,L){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,N.size.value=F.size*_,N.scale.value=L*0.5,F.map)N.map.value=F.map,$(F.map,N.uvTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,$(F.alphaMap,N.alphaMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest}function U(N,F){if(N.diffuse.value.copy(F.color),N.opacity.value=F.opacity,N.rotation.value=F.rotation,F.map)N.map.value=F.map,$(F.map,N.mapTransform);if(F.alphaMap)N.alphaMap.value=F.alphaMap,$(F.alphaMap,N.alphaMapTransform);if(F.alphaTest>0)N.alphaTest.value=F.alphaTest}function G(N,F){N.specular.value.copy(F.specular),N.shininess.value=Math.max(F.shininess,0.0001)}function E(N,F){if(F.gradientMap)N.gradientMap.value=F.gradientMap}function q(N,F){if(N.metalness.value=F.metalness,F.metalnessMap)N.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=F.roughness,F.roughnessMap)N.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,N.roughnessMapTransform);if(F.envMap)N.envMapIntensity.value=F.envMapIntensity}function O(N,F,_){if(N.ior.value=F.ior,F.sheen>0){if(N.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),N.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)N.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,N.sheenColorMapTransform);if(F.sheenRoughnessMap)N.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(N.clearcoat.value=F.clearcoat,N.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)N.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,N.clearcoatMapTransform);if(F.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(N.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===pJ)N.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)N.dispersion.value=F.dispersion;if(F.iridescence>0){if(N.iridescence.value=F.iridescence,N.iridescenceIOR.value=F.iridescenceIOR,N.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)N.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,N.iridescenceMapTransform);if(F.iridescenceThicknessMap)N.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(F.transmission>0){if(N.transmission.value=F.transmission,N.transmissionSamplerMap.value=_.texture,N.transmissionSamplerSize.value.set(_.width,_.height),F.transmissionMap)N.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=F.thickness,F.thicknessMap)N.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=F.attenuationDistance,N.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(N.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)N.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=F.specularIntensity,N.specularColor.value.copy(F.specularColor),F.specularColorMap)N.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,N.specularColorMapTransform);if(F.specularIntensityMap)N.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,N.specularIntensityMapTransform)}function R(N,F){if(F.matcap)N.matcap.value=F.matcap}function M(N,F){let _=Q.get(F).light;N.referencePosition.value.setFromMatrixPosition(_.matrixWorld),N.nearDistance.value=_.shadow.camera.near,N.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function cE(J,Q,$,Z){let W={},H={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(_,L){let w=L.program;Z.uniformBlockBinding(_,w)}function U(_,L){let w=W[_.id];if(w===void 0)R(_),w=G(_),W[_.id]=w,_.addEventListener("dispose",N);let S=L.program;Z.updateUBOMapping(_,S);let C=Q.render.frame;if(H[_.id]!==C)q(_),H[_.id]=C}function G(_){let L=E();_.__bindingPointIndex=L;let w=J.createBuffer(),S=_.__size,C=_.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,S,C),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,w),w}function E(){for(let _=0;_<X;_++)if(Y.indexOf(_)===-1)return Y.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(_){let L=W[_.id],w=_.uniforms,S=_.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let C=0,T=w.length;C<T;C++){let b=Array.isArray(w[C])?w[C]:[w[C]];for(let z=0,V=b.length;z<V;z++){let v=b[z];if(O(v,C,z,S)===!0){let m=v.__offset,l=Array.isArray(v.value)?v.value:[v.value],c=0;for(let i=0;i<l.length;i++){let u=l[i],r=M(u);if(typeof u==="number"||typeof u==="boolean")v.__data[0]=u,J.bufferSubData(J.UNIFORM_BUFFER,m+c,v.__data);else if(u.isMatrix3)v.__data[0]=u.elements[0],v.__data[1]=u.elements[1],v.__data[2]=u.elements[2],v.__data[3]=0,v.__data[4]=u.elements[3],v.__data[5]=u.elements[4],v.__data[6]=u.elements[5],v.__data[7]=0,v.__data[8]=u.elements[6],v.__data[9]=u.elements[7],v.__data[10]=u.elements[8],v.__data[11]=0;else u.toArray(v.__data,c),c+=r.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,m,v.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function O(_,L,w,S){let C=_.value,T=L+"_"+w;if(S[T]===void 0){if(typeof C==="number"||typeof C==="boolean")S[T]=C;else S[T]=C.clone();return!0}else{let b=S[T];if(typeof C==="number"||typeof C==="boolean"){if(b!==C)return S[T]=C,!0}else if(b.equals(C)===!1)return b.copy(C),!0}return!1}function R(_){let L=_.uniforms,w=0,S=16;for(let T=0,b=L.length;T<b;T++){let z=Array.isArray(L[T])?L[T]:[L[T]];for(let V=0,v=z.length;V<v;V++){let m=z[V],l=Array.isArray(m.value)?m.value:[m.value];for(let c=0,i=l.length;c<i;c++){let u=l[c],r=M(u),g=w%S,Z0=g%r.boundary,U0=g+Z0;if(w+=Z0,U0!==0&&S-U0<r.storage)w+=S-U0;m.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),m.__offset=w,w+=r.storage}}}let C=w%S;if(C>0)w+=S-C;return _.__size=w,_.__cache={},this}function M(_){let L={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")L.boundary=4,L.storage=4;else if(_.isVector2)L.boundary=8,L.storage=8;else if(_.isVector3||_.isColor)L.boundary=16,L.storage=12;else if(_.isVector4)L.boundary=16,L.storage=16;else if(_.isMatrix3)L.boundary=48,L.storage=48;else if(_.isMatrix4)L.boundary=64,L.storage=64;else if(_.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_);return L}function N(_){let L=_.target;L.removeEventListener("dispose",N);let w=Y.indexOf(L.__bindingPointIndex);Y.splice(w,1),J.deleteBuffer(W[L.id]),delete W[L.id],delete H[L.id]}function F(){for(let _ in W)J.deleteBuffer(W[_]);Y=[],W={},H={}}return{bind:K,update:U,dispose:F}}class g${constructor(J={}){let{canvas:Q=gW(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=H;let O=new Uint32Array(4),R=new Int32Array(4),M=null,N=null,F=[],_=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=C8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,w=!1;this._outputColorSpace=yJ;let S=0,C=0,T=null,b=-1,z=null,V=new s0,v=new s0,m=null,l=new D0(0),c=0,i=Q.width,u=Q.height,r=1,g=null,Z0=null,U0=new s0(0,0,i,u),T0=new s0(0,0,i,u),m0=!1,HJ=new k6,d=!1,W0=!1,k0=new v0,G0=new A,R0=new s0,u0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},c0=!1;function d0(){return T===null?r:1}let I=$;function QJ(D,j){return Q.getContext(D,j)}try{let D={alpha:!0,depth:Z,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${lZ}`);if(Q.addEventListener("webglcontextlost",H0,!1),Q.addEventListener("webglcontextrestored",Q0,!1),Q.addEventListener("webglcontextcreationerror",N0,!1),I===null){if(I=QJ("webgl2",D),I===null)if(QJ("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let C0,i0,B0,YJ,L0,I0,BJ,DJ,NJ,B,k,h,n,o,p,q0,J0,M0,A0,e,X0,V0,z0,K0;function f0(){if(C0=new UG(I),C0.init(),V0=new pE(I,C0),i0=new $G(I,C0,J,V0),B0=new bE(I,C0),i0.reversedDepthBuffer&&E)B0.buffers.depth.setReversed(!0);YJ=new qG(I),L0=new CE,I0=new gE(I,C0,B0,L0,i0,V0,YJ),BJ=new WG(L),DJ=new KG(L),NJ=new kX(I),z0=new JG(I,NJ),B=new GG(I,NJ,YJ,z0),k=new OG(I,B,NJ,YJ),A0=new NG(I,i0,I0),q0=new ZG(L0),h=new _E(L,BJ,DJ,C0,i0,z0,q0),n=new uE(L,L0),o=new IE,p=new vE(C0),M0=new eU(L,BJ,DJ,B0,k,q,X),J0=new fE(L,k,i0),K0=new cE(I,YJ,i0,B0),e=new QG(I,C0,YJ),X0=new EG(I,C0,YJ),YJ.programs=h.programs,L.capabilities=i0,L.extensions=C0,L.properties=L0,L.renderLists=o,L.shadowMap=J0,L.state=B0,L.info=YJ}f0();let P=new AH(L,I);this.xr=P,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let D=C0.get("WEBGL_lose_context");if(D)D.loseContext()},this.forceContextRestore=function(){let D=C0.get("WEBGL_lose_context");if(D)D.restoreContext()},this.getPixelRatio=function(){return r},this.setPixelRatio=function(D){if(D===void 0)return;r=D,this.setSize(i,u,!1)},this.getSize=function(D){return D.set(i,u)},this.setSize=function(D,j,f=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(i=D,u=j,Q.width=Math.floor(D*r),Q.height=Math.floor(j*r),f===!0)Q.style.width=D+"px",Q.style.height=j+"px";this.setViewport(0,0,D,j)},this.getDrawingBufferSize=function(D){return D.set(i*r,u*r).floor()},this.setDrawingBufferSize=function(D,j,f){i=D,u=j,r=f,Q.width=Math.floor(D*f),Q.height=Math.floor(j*f),this.setViewport(0,0,D,j)},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(U0)},this.setViewport=function(D,j,f,x){if(D.isVector4)U0.set(D.x,D.y,D.z,D.w);else U0.set(D,j,f,x);B0.viewport(V.copy(U0).multiplyScalar(r).round())},this.getScissor=function(D){return D.copy(T0)},this.setScissor=function(D,j,f,x){if(D.isVector4)T0.set(D.x,D.y,D.z,D.w);else T0.set(D,j,f,x);B0.scissor(v.copy(T0).multiplyScalar(r).round())},this.getScissorTest=function(){return m0},this.setScissorTest=function(D){B0.setScissorTest(m0=D)},this.setOpaqueSort=function(D){g=D},this.setTransparentSort=function(D){Z0=D},this.getClearColor=function(D){return D.copy(M0.getClearColor())},this.setClearColor=function(){M0.setClearColor(...arguments)},this.getClearAlpha=function(){return M0.getClearAlpha()},this.setClearAlpha=function(){M0.setClearAlpha(...arguments)},this.clear=function(D=!0,j=!0,f=!0){let x=0;if(D){let y=!1;if(T!==null){let t=T.texture.format;y=t===TQ||t===PQ||t===IQ}if(y){let t=T.texture.type,Y0=t===g8||t===h9||t===U6||t===f9||t===CQ||t===wQ,O0=M0.getClearColor(),E0=M0.getClearAlpha(),P0=O0.r,S0=O0.g,_0=O0.b;if(Y0)O[0]=P0,O[1]=S0,O[2]=_0,O[3]=E0,I.clearBufferuiv(I.COLOR,0,O);else R[0]=P0,R[1]=S0,R[2]=_0,R[3]=E0,I.clearBufferiv(I.COLOR,0,R)}else x|=I.COLOR_BUFFER_BIT}if(j)x|=I.DEPTH_BUFFER_BIT;if(f)x|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);I.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",H0,!1),Q.removeEventListener("webglcontextrestored",Q0,!1),Q.removeEventListener("webglcontextcreationerror",N0,!1),M0.dispose(),o.dispose(),p.dispose(),L0.dispose(),BJ.dispose(),DJ.dispose(),k.dispose(),z0.dispose(),K0.dispose(),h.dispose(),P.dispose(),P.removeEventListener("sessionstart",H8),P.removeEventListener("sessionend",Y8),o8.stop()};function H0(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q0(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let D=YJ.autoReset,j=J0.enabled,f=J0.autoUpdate,x=J0.needsUpdate,y=J0.type;f0(),YJ.autoReset=D,J0.enabled=j,J0.autoUpdate=f,J0.needsUpdate=x,J0.type=y}function N0(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function a(D){let j=D.target;j.removeEventListener("dispose",a),s(j)}function s(D){F0(D),L0.remove(D)}function F0(D){let j=L0.get(D).programs;if(j!==void 0){if(j.forEach(function(f){h.releaseProgram(f)}),D.isShaderMaterial)h.releaseShaderCache(D)}}this.renderBufferDirect=function(D,j,f,x,y,t){if(j===null)j=u0;let Y0=y.isMesh&&y.matrixWorld.determinant()<0,O0=NY(D,j,f,x,y);B0.setMaterial(x,Y0);let E0=f.index,P0=1;if(x.wireframe===!0){if(E0=B.getWireframeAttribute(f),E0===void 0)return;P0=2}let S0=f.drawRange,_0=f.attributes.position,l0=S0.start*P0,t0=(S0.start+S0.count)*P0;if(t!==null)l0=Math.max(l0,t.start*P0),t0=Math.min(t0,(t.start+t.count)*P0);if(E0!==null)l0=Math.max(l0,0),t0=Math.min(t0,E0.count);else if(_0!==void 0&&_0!==null)l0=Math.max(l0,0),t0=Math.min(t0,_0.count);let UJ=t0-l0;if(UJ<0||UJ===1/0)return;z0.setup(y,x,O0,f,E0);let ZJ,JJ=e;if(E0!==null)ZJ=NJ.get(E0),JJ=X0,JJ.setIndex(ZJ);if(y.isMesh)if(x.wireframe===!0)B0.setLineWidth(x.wireframeLinewidth*d0()),JJ.setMode(I.LINES);else JJ.setMode(I.TRIANGLES);else if(y.isLine){let w0=x.linewidth;if(w0===void 0)w0=1;if(B0.setLineWidth(w0*d0()),y.isLineSegments)JJ.setMode(I.LINES);else if(y.isLineLoop)JJ.setMode(I.LINE_LOOP);else JJ.setMode(I.LINE_STRIP)}else if(y.isPoints)JJ.setMode(I.POINTS);else if(y.isSprite)JJ.setMode(I.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)Q9("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),JJ.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(!C0.get("WEBGL_multi_draw")){let{_multiDrawStarts:w0,_multiDrawCounts:XJ,_multiDrawCount:n0}=y,fJ=E0?NJ.get(E0).bytesPerElement:1,O9=L0.get(x).currentProgram.getUniforms();for(let xJ=0;xJ<n0;xJ++)O9.setValue(I,"_gl_DrawID",xJ),JJ.render(w0[xJ]/fJ,XJ[xJ])}else JJ.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)JJ.renderInstances(l0,UJ,y.count);else if(f.isInstancedBufferGeometry){let w0=f._maxInstanceCount!==void 0?f._maxInstanceCount:1/0,XJ=Math.min(f.instanceCount,w0);JJ.renderInstances(l0,UJ,XJ)}else JJ.render(l0,UJ)};function j0(D,j,f){if(D.transparent===!0&&D.side===iJ&&D.forceSinglePass===!1)D.side=pJ,D.needsUpdate=!0,_6(D,j,f),D.side=x8,D.needsUpdate=!0,_6(D,j,f),D.side=iJ;else _6(D,j,f)}this.compile=function(D,j,f=null){if(f===null)f=D;if(N=p.get(f),N.init(j),_.push(N),f.traverseVisible(function(y){if(y.isLight&&y.layers.test(j.layers)){if(N.pushLight(y),y.castShadow)N.pushShadow(y)}}),D!==f)D.traverseVisible(function(y){if(y.isLight&&y.layers.test(j.layers)){if(N.pushLight(y),y.castShadow)N.pushShadow(y)}});N.setupLights();let x=new Set;return D.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let t=y.material;if(t)if(Array.isArray(t))for(let Y0=0;Y0<t.length;Y0++){let O0=t[Y0];j0(O0,f,y),x.add(O0)}else j0(t,f,y),x.add(t)}),N=_.pop(),x},this.compileAsync=function(D,j,f=null){let x=this.compile(D,j,f);return new Promise((y)=>{function t(){if(x.forEach(function(Y0){if(L0.get(Y0).currentProgram.isReady())x.delete(Y0)}),x.size===0){y(D);return}setTimeout(t,10)}if(C0.get("KHR_parallel_shader_compile")!==null)t();else setTimeout(t,10)})};let e0=null;function r0(D){if(e0)e0(D)}function H8(){o8.stop()}function Y8(){o8.start()}let o8=new DH;if(o8.setAnimationLoop(r0),typeof self<"u")o8.setContext(self);this.setAnimationLoop=function(D){e0=D,P.setAnimationLoop(D),D===null?o8.stop():o8.start()},P.addEventListener("sessionstart",H8),P.addEventListener("sessionend",Y8),this.render=function(D,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(D.matrixWorldAutoUpdate===!0)D.updateMatrixWorld();if(j.parent===null&&j.matrixWorldAutoUpdate===!0)j.updateMatrixWorld();if(P.enabled===!0&&P.isPresenting===!0){if(P.cameraAutoUpdate===!0)P.updateCamera(j);j=P.getCamera()}if(D.isScene===!0)D.onBeforeRender(L,D,j,T);if(N=p.get(D,_.length),N.init(j),_.push(N),k0.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),HJ.setFromProjectionMatrix(k0,X$,j.reversedDepth),W0=this.localClippingEnabled,d=q0.init(this.clippingPlanes,W0),M=o.get(D,F.length),M.init(),F.push(M),P.enabled===!0&&P.isPresenting===!0){let t=L.xr.getDepthSensingMesh();if(t!==null)m7(t,j,-1/0,L.sortObjects)}if(m7(D,j,0,L.sortObjects),M.finish(),L.sortObjects===!0)M.sort(g,Z0);if(c0=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,c0)M0.addToRenderList(M,D);if(this.info.render.frame++,d===!0)q0.beginShadows();let f=N.state.shadowsArray;if(J0.render(f,D,j),d===!0)q0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:x,transmissive:y}=M;if(N.setupLights(),j.isArrayCamera){let t=j.cameras;if(y.length>0)for(let Y0=0,O0=t.length;Y0<O0;Y0++){let E0=t[Y0];QZ(x,y,D,E0)}if(c0)M0.render(D);for(let Y0=0,O0=t.length;Y0<O0;Y0++){let E0=t[Y0];JZ(M,D,E0,E0.viewport)}}else{if(y.length>0)QZ(x,y,D,j);if(c0)M0.render(D);JZ(M,D,j)}if(T!==null&&C===0)I0.updateMultisampleRenderTarget(T),I0.updateRenderTargetMipmap(T);if(D.isScene===!0)D.onAfterRender(L,D,j);if(z0.resetDefaultState(),b=-1,z=null,_.pop(),_.length>0){if(N=_[_.length-1],d===!0)q0.setGlobalState(L.clippingPlanes,N.state.camera)}else N=null;if(F.pop(),F.length>0)M=F[F.length-1];else M=null};function m7(D,j,f,x){if(D.visible===!1)return;if(D.layers.test(j.layers)){if(D.isGroup)f=D.renderOrder;else if(D.isLOD){if(D.autoUpdate===!0)D.update(j)}else if(D.isLight){if(N.pushLight(D),D.castShadow)N.pushShadow(D)}else if(D.isSprite){if(!D.frustumCulled||HJ.intersectsSprite(D)){if(x)R0.setFromMatrixPosition(D.matrixWorld).applyMatrix4(k0);let Y0=k.update(D),O0=D.material;if(O0.visible)M.push(D,Y0,O0,f,R0.z,null)}}else if(D.isMesh||D.isLine||D.isPoints){if(!D.frustumCulled||HJ.intersectsObject(D)){let Y0=k.update(D),O0=D.material;if(x){if(D.boundingSphere!==void 0){if(D.boundingSphere===null)D.computeBoundingSphere();R0.copy(D.boundingSphere.center)}else{if(Y0.boundingSphere===null)Y0.computeBoundingSphere();R0.copy(Y0.boundingSphere.center)}R0.applyMatrix4(D.matrixWorld).applyMatrix4(k0)}if(Array.isArray(O0)){let E0=Y0.groups;for(let P0=0,S0=E0.length;P0<S0;P0++){let _0=E0[P0],l0=O0[_0.materialIndex];if(l0&&l0.visible)M.push(D,Y0,l0,f,R0.z,_0)}}else if(O0.visible)M.push(D,Y0,O0,f,R0.z,null)}}}let t=D.children;for(let Y0=0,O0=t.length;Y0<O0;Y0++)m7(t[Y0],j,f,x)}function JZ(D,j,f,x){let{opaque:y,transmissive:t,transparent:Y0}=D;if(N.setupLightsView(f),d===!0)q0.setGlobalState(L.clippingPlanes,f);if(x)B0.viewport(V.copy(x));if(y.length>0)B6(y,j,f);if(t.length>0)B6(t,j,f);if(Y0.length>0)B6(Y0,j,f);B0.buffers.depth.setTest(!0),B0.buffers.depth.setMask(!0),B0.buffers.color.setMask(!0),B0.setPolygonOffset(!1)}function QZ(D,j,f,x){if((f.isScene===!0?f.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[x.id]===void 0)N.state.transmissionRenderTarget[x.id]=new W8(1,1,{generateMipmaps:!0,type:C0.has("EXT_color_buffer_half_float")||C0.has("EXT_color_buffer_float")?G6:g8,minFilter:I8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:b0.workingColorSpace});let t=N.state.transmissionRenderTarget[x.id],Y0=x.viewport||V;t.setSize(Y0.z*L.transmissionResolutionScale,Y0.w*L.transmissionResolutionScale);let O0=L.getRenderTarget(),E0=L.getActiveCubeFace(),P0=L.getActiveMipmapLevel();if(L.setRenderTarget(t),L.getClearColor(l),c=L.getClearAlpha(),c<1)L.setClearColor(16777215,0.5);if(L.clear(),c0)M0.render(f);let S0=L.toneMapping;L.toneMapping=C8;let _0=x.viewport;if(x.viewport!==void 0)x.viewport=void 0;if(N.setupLightsView(x),d===!0)q0.setGlobalState(L.clippingPlanes,x);if(B6(D,f,x),I0.updateMultisampleRenderTarget(t),I0.updateRenderTargetMipmap(t),C0.has("WEBGL_multisampled_render_to_texture")===!1){let l0=!1;for(let t0=0,UJ=j.length;t0<UJ;t0++){let ZJ=j[t0],JJ=ZJ.object,w0=ZJ.geometry,XJ=ZJ.material,n0=ZJ.group;if(XJ.side===iJ&&JJ.layers.test(x.layers)){let fJ=XJ.side;XJ.side=pJ,XJ.needsUpdate=!0,$Z(JJ,f,x,w0,XJ,n0),XJ.side=fJ,XJ.needsUpdate=!0,l0=!0}}if(l0===!0)I0.updateMultisampleRenderTarget(t),I0.updateRenderTargetMipmap(t)}if(L.setRenderTarget(O0,E0,P0),L.setClearColor(l,c),_0!==void 0)x.viewport=_0;L.toneMapping=S0}function B6(D,j,f){let x=j.isScene===!0?j.overrideMaterial:null;for(let y=0,t=D.length;y<t;y++){let Y0=D[y],O0=Y0.object,E0=Y0.geometry,P0=Y0.group,S0=Y0.material;if(S0.allowOverride===!0&&x!==null)S0=x;if(O0.layers.test(f.layers))$Z(O0,j,f,E0,S0,P0)}}function $Z(D,j,f,x,y,t){if(D.onBeforeRender(L,j,f,x,y,t),D.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),y.onBeforeRender(L,j,f,x,D,t),y.transparent===!0&&y.side===iJ&&y.forceSinglePass===!1)y.side=pJ,y.needsUpdate=!0,L.renderBufferDirect(f,j,x,y,D,t),y.side=x8,y.needsUpdate=!0,L.renderBufferDirect(f,j,x,y,D,t),y.side=iJ;else L.renderBufferDirect(f,j,x,y,D,t);D.onAfterRender(L,j,f,x,y,t)}function _6(D,j,f){if(j.isScene!==!0)j=u0;let x=L0.get(D),y=N.state.lights,t=N.state.shadowsArray,Y0=y.state.version,O0=h.getParameters(D,y.state,t,j,f),E0=h.getProgramCacheKey(O0),P0=x.programs;if(x.environment=D.isMeshStandardMaterial?j.environment:null,x.fog=j.fog,x.envMap=(D.isMeshStandardMaterial?DJ:BJ).get(D.envMap||x.environment),x.envMapRotation=x.environment!==null&&D.envMap===null?j.environmentRotation:D.envMapRotation,P0===void 0)D.addEventListener("dispose",a),P0=new Map,x.programs=P0;let S0=P0.get(E0);if(S0!==void 0){if(x.currentProgram===S0&&x.lightsStateVersion===Y0)return WZ(D,O0),S0}else O0.uniforms=h.getUniforms(D),D.onBeforeCompile(O0,L),S0=h.acquireProgram(O0,E0),P0.set(E0,S0),x.uniforms=O0.uniforms;let _0=x.uniforms;if(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)_0.clippingPlanes=q0.uniform;if(WZ(D,O0),x.needsLights=FY(D),x.lightsStateVersion=Y0,x.needsLights)_0.ambientLightColor.value=y.state.ambient,_0.lightProbe.value=y.state.probe,_0.directionalLights.value=y.state.directional,_0.directionalLightShadows.value=y.state.directionalShadow,_0.spotLights.value=y.state.spot,_0.spotLightShadows.value=y.state.spotShadow,_0.rectAreaLights.value=y.state.rectArea,_0.ltc_1.value=y.state.rectAreaLTC1,_0.ltc_2.value=y.state.rectAreaLTC2,_0.pointLights.value=y.state.point,_0.pointLightShadows.value=y.state.pointShadow,_0.hemisphereLights.value=y.state.hemi,_0.directionalShadowMap.value=y.state.directionalShadowMap,_0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,_0.spotShadowMap.value=y.state.spotShadowMap,_0.spotLightMatrix.value=y.state.spotLightMatrix,_0.spotLightMap.value=y.state.spotLightMap,_0.pointShadowMap.value=y.state.pointShadowMap,_0.pointShadowMatrix.value=y.state.pointShadowMatrix;return x.currentProgram=S0,x.uniformsList=null,S0}function ZZ(D){if(D.uniformsList===null){let j=D.currentProgram.getUniforms();D.uniformsList=V6.seqWithValue(j.seq,D.uniforms)}return D.uniformsList}function WZ(D,j){let f=L0.get(D);f.outputColorSpace=j.outputColorSpace,f.batching=j.batching,f.batchingColor=j.batchingColor,f.instancing=j.instancing,f.instancingColor=j.instancingColor,f.instancingMorph=j.instancingMorph,f.skinning=j.skinning,f.morphTargets=j.morphTargets,f.morphNormals=j.morphNormals,f.morphColors=j.morphColors,f.morphTargetsCount=j.morphTargetsCount,f.numClippingPlanes=j.numClippingPlanes,f.numIntersection=j.numClipIntersection,f.vertexAlphas=j.vertexAlphas,f.vertexTangents=j.vertexTangents,f.toneMapping=j.toneMapping}function NY(D,j,f,x,y){if(j.isScene!==!0)j=u0;I0.resetTextureUnits();let t=j.fog,Y0=x.isMeshStandardMaterial?j.environment:null,O0=T===null?L.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:_J,E0=(x.isMeshStandardMaterial?DJ:BJ).get(x.envMap||Y0),P0=x.vertexColors===!0&&!!f.attributes.color&&f.attributes.color.itemSize===4,S0=!!f.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),_0=!!f.morphAttributes.position,l0=!!f.morphAttributes.normal,t0=!!f.morphAttributes.color,UJ=C8;if(x.toneMapped){if(T===null||T.isXRRenderTarget===!0)UJ=L.toneMapping}let ZJ=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,JJ=ZJ!==void 0?ZJ.length:0,w0=L0.get(x),XJ=N.state.lights;if(d===!0){if(W0===!0||D!==z){let AJ=D===z&&x.id===b;q0.setState(x,D,AJ)}}let n0=!1;if(x.version===w0.__version){if(w0.needsLights&&w0.lightsStateVersion!==XJ.state.version)n0=!0;else if(w0.outputColorSpace!==O0)n0=!0;else if(y.isBatchedMesh&&w0.batching===!1)n0=!0;else if(!y.isBatchedMesh&&w0.batching===!0)n0=!0;else if(y.isBatchedMesh&&w0.batchingColor===!0&&y.colorTexture===null)n0=!0;else if(y.isBatchedMesh&&w0.batchingColor===!1&&y.colorTexture!==null)n0=!0;else if(y.isInstancedMesh&&w0.instancing===!1)n0=!0;else if(!y.isInstancedMesh&&w0.instancing===!0)n0=!0;else if(y.isSkinnedMesh&&w0.skinning===!1)n0=!0;else if(!y.isSkinnedMesh&&w0.skinning===!0)n0=!0;else if(y.isInstancedMesh&&w0.instancingColor===!0&&y.instanceColor===null)n0=!0;else if(y.isInstancedMesh&&w0.instancingColor===!1&&y.instanceColor!==null)n0=!0;else if(y.isInstancedMesh&&w0.instancingMorph===!0&&y.morphTexture===null)n0=!0;else if(y.isInstancedMesh&&w0.instancingMorph===!1&&y.morphTexture!==null)n0=!0;else if(w0.envMap!==E0)n0=!0;else if(x.fog===!0&&w0.fog!==t)n0=!0;else if(w0.numClippingPlanes!==void 0&&(w0.numClippingPlanes!==q0.numPlanes||w0.numIntersection!==q0.numIntersection))n0=!0;else if(w0.vertexAlphas!==P0)n0=!0;else if(w0.vertexTangents!==S0)n0=!0;else if(w0.morphTargets!==_0)n0=!0;else if(w0.morphNormals!==l0)n0=!0;else if(w0.morphColors!==t0)n0=!0;else if(w0.toneMapping!==UJ)n0=!0;else if(w0.morphTargetsCount!==JJ)n0=!0}else n0=!0,w0.__version=x.version;let fJ=w0.currentProgram;if(n0===!0)fJ=_6(x,j,y);let O9=!1,xJ=!1,i9=!1,KJ=fJ.getUniforms(),cJ=w0.uniforms;if(B0.useProgram(fJ.program))O9=!0,xJ=!0,i9=!0;if(x.id!==b)b=x.id,xJ=!0;if(O9||z!==D){if(B0.buffers.depth.getReversed()&&D.reversedDepth!==!0)D._reversedDepth=!0,D.updateProjectionMatrix();KJ.setValue(I,"projectionMatrix",D.projectionMatrix),KJ.setValue(I,"viewMatrix",D.matrixWorldInverse);let jJ=KJ.map.cameraPosition;if(jJ!==void 0)jJ.setValue(I,G0.setFromMatrixPosition(D.matrixWorld));if(i0.logarithmicDepthBuffer)KJ.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2));if(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)KJ.setValue(I,"isOrthographic",D.isOrthographicCamera===!0);if(z!==D)z=D,xJ=!0,i9=!0}if(y.isSkinnedMesh){KJ.setOptional(I,y,"bindMatrix"),KJ.setOptional(I,y,"bindMatrixInverse");let AJ=y.skeleton;if(AJ){if(AJ.boneTexture===null)AJ.computeBoneTexture();KJ.setValue(I,"boneTexture",AJ.boneTexture,I0)}}if(y.isBatchedMesh){if(KJ.setOptional(I,y,"batchingTexture"),KJ.setValue(I,"batchingTexture",y._matricesTexture,I0),KJ.setOptional(I,y,"batchingIdTexture"),KJ.setValue(I,"batchingIdTexture",y._indirectTexture,I0),KJ.setOptional(I,y,"batchingColorTexture"),y._colorsTexture!==null)KJ.setValue(I,"batchingColorTexture",y._colorsTexture,I0)}let nJ=f.morphAttributes;if(nJ.position!==void 0||nJ.normal!==void 0||nJ.color!==void 0)A0.update(y,f,fJ);if(xJ||w0.receiveShadow!==y.receiveShadow)w0.receiveShadow=y.receiveShadow,KJ.setValue(I,"receiveShadow",y.receiveShadow);if(x.isMeshGouraudMaterial&&x.envMap!==null)cJ.envMap.value=E0,cJ.flipEnvMap.value=E0.isCubeTexture&&E0.isRenderTargetTexture===!1?-1:1;if(x.isMeshStandardMaterial&&x.envMap===null&&j.environment!==null)cJ.envMapIntensity.value=j.environmentIntensity;if(xJ){if(KJ.setValue(I,"toneMappingExposure",L.toneMappingExposure),w0.needsLights)OY(cJ,i9);if(t&&x.fog===!0)n.refreshFogUniforms(cJ,t);n.refreshMaterialUniforms(cJ,x,r,u,N.state.transmissionRenderTarget[D.id]),V6.upload(I,ZZ(w0),cJ,I0)}if(x.isShaderMaterial&&x.uniformsNeedUpdate===!0)V6.upload(I,ZZ(w0),cJ,I0),x.uniformsNeedUpdate=!1;if(x.isSpriteMaterial)KJ.setValue(I,"center",y.center);if(KJ.setValue(I,"modelViewMatrix",y.modelViewMatrix),KJ.setValue(I,"normalMatrix",y.normalMatrix),KJ.setValue(I,"modelMatrix",y.matrixWorld),x.isShaderMaterial||x.isRawShaderMaterial){let AJ=x.uniformsGroups;for(let jJ=0,u7=AJ.length;jJ<u7;jJ++){let i8=AJ[jJ];K0.update(i8,fJ),K0.bind(i8,fJ)}}return fJ}function OY(D,j){D.ambientLightColor.needsUpdate=j,D.lightProbe.needsUpdate=j,D.directionalLights.needsUpdate=j,D.directionalLightShadows.needsUpdate=j,D.pointLights.needsUpdate=j,D.pointLightShadows.needsUpdate=j,D.spotLights.needsUpdate=j,D.spotLightShadows.needsUpdate=j,D.rectAreaLights.needsUpdate=j,D.hemisphereLights.needsUpdate=j}function FY(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,j,f){let x=L0.get(D);if(x.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,x.__autoAllocateDepthBuffer===!1)x.__useRenderToTexture=!1;L0.get(D.texture).__webglTexture=j,L0.get(D.depthTexture).__webglTexture=x.__autoAllocateDepthBuffer?void 0:f,x.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,j){let f=L0.get(D);f.__webglFramebuffer=j,f.__useDefaultFramebuffer=j===void 0};let RY=I.createFramebuffer();this.setRenderTarget=function(D,j=0,f=0){T=D,S=j,C=f;let x=!0,y=null,t=!1,Y0=!1;if(D){let E0=L0.get(D);if(E0.__useDefaultFramebuffer!==void 0)B0.bindFramebuffer(I.FRAMEBUFFER,null),x=!1;else if(E0.__webglFramebuffer===void 0)I0.setupRenderTarget(D);else if(E0.__hasExternalTextures)I0.rebindTextures(D,L0.get(D.texture).__webglTexture,L0.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let _0=D.depthTexture;if(E0.__boundDepthTexture!==_0){if(_0!==null&&L0.has(_0)&&(D.width!==_0.image.width||D.height!==_0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I0.setupDepthRenderbuffer(D)}}let P0=D.texture;if(P0.isData3DTexture||P0.isDataArrayTexture||P0.isCompressedArrayTexture)Y0=!0;let S0=L0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget){if(Array.isArray(S0[j]))y=S0[j][f];else y=S0[j];t=!0}else if(D.samples>0&&I0.useMultisampledRTT(D)===!1)y=L0.get(D).__webglMultisampledFramebuffer;else if(Array.isArray(S0))y=S0[f];else y=S0;V.copy(D.viewport),v.copy(D.scissor),m=D.scissorTest}else V.copy(U0).multiplyScalar(r).floor(),v.copy(T0).multiplyScalar(r).floor(),m=m0;if(f!==0)y=RY;if(B0.bindFramebuffer(I.FRAMEBUFFER,y)&&x)B0.drawBuffers(D,y);if(B0.viewport(V),B0.scissor(v),B0.setScissorTest(m),t){let E0=L0.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+j,E0.__webglTexture,f)}else if(Y0){let E0=j;for(let P0=0;P0<D.textures.length;P0++){let S0=L0.get(D.textures[P0]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+P0,S0.__webglTexture,f,E0)}}else if(D!==null&&f!==0){let E0=L0.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,E0.__webglTexture,f)}b=-1},this.readRenderTargetPixels=function(D,j,f,x,y,t,Y0,O0=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let E0=L0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Y0!==void 0)E0=E0[Y0];if(E0){B0.bindFramebuffer(I.FRAMEBUFFER,E0);try{let P0=D.textures[O0],S0=P0.format,_0=P0.type;if(!i0.textureFormatReadable(S0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!i0.textureTypeReadable(_0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(j>=0&&j<=D.width-x&&(f>=0&&f<=D.height-y)){if(D.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+O0);I.readPixels(j,f,x,y,V0.convert(S0),V0.convert(_0),t)}}finally{let P0=T!==null?L0.get(T).__webglFramebuffer:null;B0.bindFramebuffer(I.FRAMEBUFFER,P0)}}},this.readRenderTargetPixelsAsync=async function(D,j,f,x,y,t,Y0,O0=0){if(!(D&&D.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let E0=L0.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Y0!==void 0)E0=E0[Y0];if(E0)if(j>=0&&j<=D.width-x&&(f>=0&&f<=D.height-y)){B0.bindFramebuffer(I.FRAMEBUFFER,E0);let P0=D.textures[O0],S0=P0.format,_0=P0.type;if(!i0.textureFormatReadable(S0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!i0.textureTypeReadable(_0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let l0=I.createBuffer();if(I.bindBuffer(I.PIXEL_PACK_BUFFER,l0),I.bufferData(I.PIXEL_PACK_BUFFER,t.byteLength,I.STREAM_READ),D.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+O0);I.readPixels(j,f,x,y,V0.convert(S0),V0.convert(_0),0);let t0=T!==null?L0.get(T).__webglFramebuffer:null;B0.bindFramebuffer(I.FRAMEBUFFER,t0);let UJ=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await pW(I,UJ,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,l0),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,t),I.deleteBuffer(l0),I.deleteSync(UJ),t}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,j=null,f=0){let x=Math.pow(2,-f),y=Math.floor(D.image.width*x),t=Math.floor(D.image.height*x),Y0=j!==null?j.x:0,O0=j!==null?j.y:0;I0.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,f,0,0,Y0,O0,y,t),B0.unbindTexture()};let MY=I.createFramebuffer(),kY=I.createFramebuffer();if(this.copyTextureToTexture=function(D,j,f=null,x=null,y=0,t=null){if(t===null)if(y!==0)Q9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),t=y,y=0;else t=0;let Y0,O0,E0,P0,S0,_0,l0,t0,UJ,ZJ=D.isCompressedTexture?D.mipmaps[t]:D.image;if(f!==null)Y0=f.max.x-f.min.x,O0=f.max.y-f.min.y,E0=f.isBox3?f.max.z-f.min.z:1,P0=f.min.x,S0=f.min.y,_0=f.isBox3?f.min.z:0;else{let nJ=Math.pow(2,-y);if(Y0=Math.floor(ZJ.width*nJ),O0=Math.floor(ZJ.height*nJ),D.isDataArrayTexture)E0=ZJ.depth;else if(D.isData3DTexture)E0=Math.floor(ZJ.depth*nJ);else E0=1;P0=0,S0=0,_0=0}if(x!==null)l0=x.x,t0=x.y,UJ=x.z;else l0=0,t0=0,UJ=0;let JJ=V0.convert(j.format),w0=V0.convert(j.type),XJ;if(j.isData3DTexture)I0.setTexture3D(j,0),XJ=I.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)I0.setTexture2DArray(j,0),XJ=I.TEXTURE_2D_ARRAY;else I0.setTexture2D(j,0),XJ=I.TEXTURE_2D;I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,j.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,j.unpackAlignment);let n0=I.getParameter(I.UNPACK_ROW_LENGTH),fJ=I.getParameter(I.UNPACK_IMAGE_HEIGHT),O9=I.getParameter(I.UNPACK_SKIP_PIXELS),xJ=I.getParameter(I.UNPACK_SKIP_ROWS),i9=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ZJ.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ZJ.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,P0),I.pixelStorei(I.UNPACK_SKIP_ROWS,S0),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_0);let KJ=D.isDataArrayTexture||D.isData3DTexture,cJ=j.isDataArrayTexture||j.isData3DTexture;if(D.isDepthTexture){let nJ=L0.get(D),AJ=L0.get(j),jJ=L0.get(nJ.__renderTarget),u7=L0.get(AJ.__renderTarget);B0.bindFramebuffer(I.READ_FRAMEBUFFER,jJ.__webglFramebuffer),B0.bindFramebuffer(I.DRAW_FRAMEBUFFER,u7.__webglFramebuffer);for(let i8=0;i8<E0;i8++){if(KJ)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L0.get(D).__webglTexture,y,_0+i8),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L0.get(j).__webglTexture,t,UJ+i8);I.blitFramebuffer(P0,S0,Y0,O0,l0,t0,Y0,O0,I.DEPTH_BUFFER_BIT,I.NEAREST)}B0.bindFramebuffer(I.READ_FRAMEBUFFER,null),B0.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(y!==0||D.isRenderTargetTexture||L0.has(D)){let nJ=L0.get(D),AJ=L0.get(j);B0.bindFramebuffer(I.READ_FRAMEBUFFER,MY),B0.bindFramebuffer(I.DRAW_FRAMEBUFFER,kY);for(let jJ=0;jJ<E0;jJ++){if(KJ)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nJ.__webglTexture,y,_0+jJ);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nJ.__webglTexture,y);if(cJ)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,AJ.__webglTexture,t,UJ+jJ);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,AJ.__webglTexture,t);if(y!==0)I.blitFramebuffer(P0,S0,Y0,O0,l0,t0,Y0,O0,I.COLOR_BUFFER_BIT,I.NEAREST);else if(cJ)I.copyTexSubImage3D(XJ,t,l0,t0,UJ+jJ,P0,S0,Y0,O0);else I.copyTexSubImage2D(XJ,t,l0,t0,P0,S0,Y0,O0)}B0.bindFramebuffer(I.READ_FRAMEBUFFER,null),B0.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(cJ)if(D.isDataTexture||D.isData3DTexture)I.texSubImage3D(XJ,t,l0,t0,UJ,Y0,O0,E0,JJ,w0,ZJ.data);else if(j.isCompressedArrayTexture)I.compressedTexSubImage3D(XJ,t,l0,t0,UJ,Y0,O0,E0,JJ,ZJ.data);else I.texSubImage3D(XJ,t,l0,t0,UJ,Y0,O0,E0,JJ,w0,ZJ);else if(D.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,t,l0,t0,Y0,O0,JJ,w0,ZJ.data);else if(D.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,t,l0,t0,ZJ.width,ZJ.height,JJ,ZJ.data);else I.texSubImage2D(I.TEXTURE_2D,t,l0,t0,Y0,O0,JJ,w0,ZJ);if(I.pixelStorei(I.UNPACK_ROW_LENGTH,n0),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fJ),I.pixelStorei(I.UNPACK_SKIP_PIXELS,O9),I.pixelStorei(I.UNPACK_SKIP_ROWS,xJ),I.pixelStorei(I.UNPACK_SKIP_IMAGES,i9),t===0&&j.generateMipmaps)I.generateMipmap(XJ);B0.unbindTexture()},this.copyTextureToTexture3D=function(D,j,f=null,x=null,y=0){return Q9('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,j,f,x,y)},this.initRenderTarget=function(D){if(L0.get(D).__webglFramebuffer===void 0)I0.setupRenderTarget(D)},this.initTexture=function(D){if(D.isCubeTexture)I0.setTextureCube(D,0);else if(D.isData3DTexture)I0.setTexture3D(D,0);else if(D.isDataArrayTexture||D.isCompressedArrayTexture)I0.setTexture2DArray(D,0);else I0.setTexture2D(D,0);B0.unbindTexture()},this.resetState=function(){S=0,C=0,T=null,B0.reset(),z0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return X$}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=b0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=b0._getUnpackColorSpace()}}function p$(J,Q){if(Q===Z$)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===x9||Q===q6){let $=J.getIndex();if($===null){let Y=[],X=J.getAttribute("position");if(X!==void 0){for(let K=0;K<X.count;K++)Y.push(K);J.setIndex(Y),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===x9)for(let Y=1;Y<=Z;Y++)W.push($.getX(0)),W.push($.getX(Y)),W.push($.getX(Y+1));else for(let Y=0;Y<Z;Y++)if(Y%2===0)W.push($.getX(Y)),W.push($.getX(Y+1)),W.push($.getX(Y+2));else W.push($.getX(Y+2)),W.push($.getX(Y+1)),W.push($.getX(Y));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let H=J.clone();return H.setIndex(W),H.clearGroups(),H}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class n$ extends uJ{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new bH(Q)}),this.register(function(Q){return new gH(Q)}),this.register(function(Q){return new oH(Q)}),this.register(function(Q){return new iH(Q)}),this.register(function(Q){return new aH(Q)}),this.register(function(Q){return new lH(Q)}),this.register(function(Q){return new dH(Q)}),this.register(function(Q){return new mH(Q)}),this.register(function(Q){return new uH(Q)}),this.register(function(Q){return new xH(Q)}),this.register(function(Q){return new cH(Q)}),this.register(function(Q){return new pH(Q)}),this.register(function(Q){return new sH(Q)}),this.register(function(Q){return new nH(Q)}),this.register(function(Q){return new hH(Q)}),this.register(function(Q){return new rH(Q)}),this.register(function(Q){return new tH(Q)})}load(J,Q,$,Z){let W=this,H;if(this.resourcePath!=="")H=this.resourcePath;else if(this.path!==""){let K=n8.extractUrlBase(J);H=n8.resolveURL(K,this.path)}else H=n8.extractUrlBase(J);this.manager.itemStart(J);let Y=function(K){if(Z)Z(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},X=new N8(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(K){try{W.parse(K,H,function(U){Q(U),W.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,H={},Y={},X=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===eH){try{H[p0.KHR_BINARY_GLTF]=new JY(J)}catch(G){if(Z)Z(G);return}W=JSON.parse(H[p0.KHR_BINARY_GLTF].content)}else W=JSON.parse(X.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new HY(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[G.name]=G,H[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case p0.KHR_MATERIALS_UNLIT:H[G]=new fH;break;case p0.KHR_DRACO_MESH_COMPRESSION:H[G]=new QY(W,this.dracoLoader);break;case p0.KHR_TEXTURE_TRANSFORM:H[G]=new $Y;break;case p0.KHR_MESH_QUANTIZATION:H[G]=new ZY;break;default:if(E.indexOf(G)>=0&&Y[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(H),K.setPlugins(Y),K.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function sE(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var p0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hH{constructor(J){this.parser=J,this.name=p0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,X=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,U=new D0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],_J);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":K=new K9(U),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new h7(U),K.distance=G;break;case"spot":K=new y7(U),K.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,K.angle=X.spot.outerConeAngle,K.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(K.position.set(0,0,0),A8(K,X),X.intensity!==void 0)K.intensity=X.intensity;return K.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(K),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],Y=(W.extensions&&W.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class fH{constructor(){this.name=p0.KHR_MATERIALS_UNLIT}getMaterialType(){return G8}extendParams(J,Q,$){let Z=[];J.color=new D0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let H=W.baseColorFactor;J.color.setRGB(H[0],H[1],H[2],_J),J.opacity=H[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,yJ))}return Promise.all(Z)}}class xH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class bH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.clearcoatFactor!==void 0)Q.clearcoat=H.clearcoatFactor;if(H.clearcoatTexture!==void 0)W.push($.assignTexture(Q,"clearcoatMap",H.clearcoatTexture));if(H.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=H.clearcoatRoughnessFactor;if(H.clearcoatRoughnessTexture!==void 0)W.push($.assignTexture(Q,"clearcoatRoughnessMap",H.clearcoatRoughnessTexture));if(H.clearcoatNormalTexture!==void 0){if(W.push($.assignTexture(Q,"clearcoatNormalMap",H.clearcoatNormalTexture)),H.clearcoatNormalTexture.scale!==void 0){let Y=H.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new x0(Y,Y)}}return Promise.all(W)}}class gH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_DISPERSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class pH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.iridescenceFactor!==void 0)Q.iridescence=H.iridescenceFactor;if(H.iridescenceTexture!==void 0)W.push($.assignTexture(Q,"iridescenceMap",H.iridescenceTexture));if(H.iridescenceIor!==void 0)Q.iridescenceIOR=H.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(H.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=H.iridescenceThicknessMinimum;if(H.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=H.iridescenceThicknessMaximum;if(H.iridescenceThicknessTexture!==void 0)W.push($.assignTexture(Q,"iridescenceThicknessMap",H.iridescenceThicknessTexture));return Promise.all(W)}}class lH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SHEEN}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new D0(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let H=Z.extensions[this.name];if(H.sheenColorFactor!==void 0){let Y=H.sheenColorFactor;Q.sheenColor.setRGB(Y[0],Y[1],Y[2],_J)}if(H.sheenRoughnessFactor!==void 0)Q.sheenRoughness=H.sheenRoughnessFactor;if(H.sheenColorTexture!==void 0)W.push($.assignTexture(Q,"sheenColorMap",H.sheenColorTexture,yJ));if(H.sheenRoughnessTexture!==void 0)W.push($.assignTexture(Q,"sheenRoughnessMap",H.sheenRoughnessTexture));return Promise.all(W)}}class dH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.transmissionFactor!==void 0)Q.transmission=H.transmissionFactor;if(H.transmissionTexture!==void 0)W.push($.assignTexture(Q,"transmissionMap",H.transmissionTexture));return Promise.all(W)}}class mH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_VOLUME}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.thickness=H.thicknessFactor!==void 0?H.thicknessFactor:0,H.thicknessTexture!==void 0)W.push($.assignTexture(Q,"thicknessMap",H.thicknessTexture));Q.attenuationDistance=H.attenuationDistance||1/0;let Y=H.attenuationColor||[1,1,1];return Q.attenuationColor=new D0().setRGB(Y[0],Y[1],Y[2],_J),Promise.all(W)}}class uH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_IOR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=Z.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class cH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_SPECULAR}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.specularIntensity=H.specularFactor!==void 0?H.specularFactor:1,H.specularTexture!==void 0)W.push($.assignTexture(Q,"specularIntensityMap",H.specularTexture));let Y=H.specularColorFactor||[1,1,1];if(Q.specularColor=new D0().setRGB(Y[0],Y[1],Y[2],_J),H.specularColorTexture!==void 0)W.push($.assignTexture(Q,"specularColorMap",H.specularColorTexture,yJ));return Promise.all(W)}}class nH{constructor(J){this.parser=J,this.name=p0.EXT_MATERIALS_BUMP}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(Q.bumpScale=H.bumpFactor!==void 0?H.bumpFactor:1,H.bumpTexture!==void 0)W.push($.assignTexture(Q,"bumpMap",H.bumpTexture));return Promise.all(W)}}class sH{constructor(J){this.parser=J,this.name=p0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return null;return dJ}extendMaterialParams(J,Q){let $=this.parser,Z=$.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return Promise.resolve();let W=[],H=Z.extensions[this.name];if(H.anisotropyStrength!==void 0)Q.anisotropy=H.anisotropyStrength;if(H.anisotropyRotation!==void 0)Q.anisotropyRotation=H.anisotropyRotation;if(H.anisotropyTexture!==void 0)W.push($.assignTexture(Q,"anisotropyMap",H.anisotropyTexture));return Promise.all(W)}}class oH{constructor(J){this.parser=J,this.name=p0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],H=Q.options.ktx2Loader;if(!H)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,H)}}class iH{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class aH{constructor(J){this.parser=J,this.name=p0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=Z.images[H.source],X=$.textureLoader;if(Y.uri){let K=$.options.manager.getHandler(Y.uri);if(K!==null)X=K}return $.loadTextureImage(J,H.source,X)}}class rH{constructor(J){this.name=p0.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),H=this.parser.options.meshoptDecoder;if(!H||!H.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(Y){let X=Z.byteOffset||0,K=Z.byteLength||0,U=Z.count,G=Z.byteStride,E=new Uint8Array(Y,X,K);if(H.decodeGltfBufferAsync)return H.decodeGltfBufferAsync(U,G,E,Z.mode,Z.filter).then(function(q){return q.buffer});else return H.ready.then(function(){let q=new ArrayBuffer(U*G);return H.decodeGltfBuffer(new Uint8Array(q),U,G,E,Z.mode,Z.filter),q})})}else return null}}class tH{constructor(J){this.name=p0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let K of Z.primitives)if(K.mode!==aJ.TRIANGLES&&K.mode!==aJ.TRIANGLE_STRIP&&K.mode!==aJ.TRIANGLE_FAN&&K.mode!==void 0)return null;let H=$.extensions[this.name].attributes,Y=[],X={};for(let K in H)Y.push(this.parser.getDependency("accessor",H[K]).then((U)=>{return X[K]=U,X[K]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((K)=>{let U=K.pop(),G=U.isGroup?U.children:[U],E=K[0].count,q=[];for(let O of G){let R=new v0,M=new A,N=new PJ,F=new A(1,1,1),_=new C7(O.geometry,O.material,E);for(let L=0;L<E;L++){if(X.TRANSLATION)M.fromBufferAttribute(X.TRANSLATION,L);if(X.ROTATION)N.fromBufferAttribute(X.ROTATION,L);if(X.SCALE)F.fromBufferAttribute(X.SCALE,L);_.setMatrixAt(L,R.compose(M,N,F))}for(let L in X)if(L==="_COLOR_0"){let w=X[L];_.instanceColor=new $9(w.array,w.itemSize,w.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE")O.geometry.setAttribute(L,X[L]);WJ.prototype.copy.call(_,O),this.parser.assignFinalMaterial(_),q.push(_)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var eH="glTF",z6=12,SH={JSON:1313821514,BIN:5130562};class JY{constructor(J){this.name=p0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,z6),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==eH)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-z6,W=new DataView(J,z6),H=0;while(H<Z){let Y=W.getUint32(H,!0);H+=4;let X=W.getUint32(H,!0);if(H+=4,X===SH.JSON){let K=new Uint8Array(J,z6+H,Y);this.content=$.decode(K)}else if(X===SH.BIN){let K=z6+H;this.body=J.slice(K,K+Y)}H+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class QY{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=p0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,H=J.extensions[this.name].attributes,Y={},X={},K={};for(let U in H){let G=u$[U]||U.toLowerCase();Y[G]=H[U]}for(let U in J.attributes){let G=u$[U]||U.toLowerCase();if(H[U]!==void 0){let E=$.accessors[J.attributes[U]],q=o9[E.componentType];K[G]=q.name,X[G]=E.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){Z.decodeDracoFile(U,function(q){for(let O in q.attributes){let R=q.attributes[O],M=X[O];if(M!==void 0)R.normalized=M}G(q)},Y,K,_J,E)})})}}class $Y{constructor(){this.name=p0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class ZY{constructor(){this.name=p0.KHR_MESH_QUANTIZATION}}class s$ extends m8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let H=0;H!==Z;H++)Q[H]=$[W+H];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=Y*2,K=Y*3,U=Z-Q,G=($-Q)/U,E=G*G,q=E*G,O=J*K,R=O-K,M=-2*q+3*E,N=q-E,F=1-M,_=N-E+G;for(let L=0;L!==Y;L++){let w=H[R+L+Y],S=H[R+L+X]*U,C=H[O+L+Y],T=H[O+L]*U;W[L]=F*w+_*S+M*C+N*T}return W}}var oE=new PJ;class WY extends s${interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return oE.fromArray(W).normalize().toArray(W),W}}var aJ={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},o9={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jH={9728:w8,9729:Z8,9984:K7,9985:y9,9986:W9,9987:I8},vH={33071:Y7,33648:X7,10497:v9},l$={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},u$={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},s8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iE={CUBICSPLINE:void 0,LINEAR:F7,STEP:$$},d$={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aE(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new d9({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:x8});return J.DefaultMaterial}function N9(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function A8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function rE(J,Q,$){let Z=!1,W=!1,H=!1;for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)H=!0;if(Z&&W&&H)break}if(!Z&&!W&&!H)return Promise.resolve(J);let Y=[],X=[],K=[];for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(Z){let q=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;Y.push(q)}if(W){let q=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;X.push(q)}if(H){let q=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;K.push(q)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(K)]).then(function(U){let G=U[0],E=U[1],q=U[2];if(Z)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=E;if(H)J.morphAttributes.color=q;return J.morphTargetsRelative=!0,J})}function tE(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eE(J){let Q,$=J.extensions&&J.extensions[p0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+m$($.attributes);else Q=J.indices+":"+m$(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+m$(J.targets[Z]);return Q}function m$(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function c$(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function J1(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var Q1=new v0;class HY{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new sE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,H=-1;if(typeof navigator<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,W=Y.indexOf("Firefox")>-1,H=W?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&H<98)this.textureLoader=new j7(this.options.manager);else this.textureLoader=new x7(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new N8(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(H){return H._markDefs&&H._markDefs()}),Promise.all(this._invokeAll(function(H){return H.beforeRoot&&H.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(H){let Y={scene:H[0][Z.scene||0],scenes:H[0],animations:H[1],cameras:H[2],asset:Z.asset,parser:$,userData:{}};return N9(W,Y,Z),A8(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let H=Q[Z].joints;for(let Y=0,X=H.length;Y<X;Y++)J[H[Y]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let H=J[Z];if(H.mesh!==void 0){if(this._addNodeRef(this.meshCache,H.mesh),H.skin!==void 0)$[H.mesh].isSkinnedMesh=!0}if(H.camera!==void 0)this._addNodeRef(this.cameraCache,H.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(H,Y)=>{let X=this.associations.get(H);if(X!=null)this.associations.set(Y,X);for(let[K,U]of H.children.entries())W(U,Y.children[K])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,H){return $.getDependency(J,H)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[p0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,H){$.load(n8.resolveURL(Q.uri,Z.path),W,void 0,function(){H(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let H=l$[Z.type],Y=o9[Z.componentType],X=Z.normalized===!0,K=new Y(Z.count*H);return Promise.resolve(new GJ(K,H,X))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(H){let Y=H[0],X=l$[Z.type],K=o9[Z.componentType],U=K.BYTES_PER_ELEMENT,G=U*X,E=Z.byteOffset||0,q=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,O=Z.normalized===!0,R,M;if(q&&q!==G){let N=Math.floor(E/q),F="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+N+":"+Z.count,_=Q.cache.get(F);if(!_)R=new K(Y,N*q,Z.count*q/U),_=new F6(R,q/U),Q.cache.add(F,_);M=new p9(_,X,E%q/U,O)}else{if(Y===null)R=new K(Z.count*X);else R=new K(Y,E,Z.count*X);M=new GJ(R,X,O)}if(Z.sparse!==void 0){let N=l$.SCALAR,F=o9[Z.sparse.indices.componentType],_=Z.sparse.indices.byteOffset||0,L=Z.sparse.values.byteOffset||0,w=new F(H[1],_,Z.sparse.count*N),S=new K(H[2],L,Z.sparse.count*X);if(Y!==null)M=new GJ(M.array.slice(),M.itemSize,M.normalized);M.normalized=!1;for(let C=0,T=w.length;C<T;C++){let b=w[C];if(M.setX(b,S[C*X]),X>=2)M.setY(b,S[C*X+1]);if(X>=3)M.setZ(b,S[C*X+2]);if(X>=4)M.setW(b,S[C*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}M.normalized=O}return M})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,H=Q.images[W],Y=this.textureLoader;if(H.uri){let X=$.manager.getHandler(H.uri);if(X!==null)Y=X}return this.loadTextureImage(J,W,Y)}loadTextureImage(J,Q,$){let Z=this,W=this.json,H=W.textures[J],Y=W.images[Q],X=(Y.uri||Y.bufferView)+":"+H.sampler;if(this.textureCache[X])return this.textureCache[X];let K=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=H.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let E=(W.samplers||{})[H.sampler]||{};return U.magFilter=jH[E.magFilter]||Z8,U.minFilter=jH[E.minFilter]||I8,U.wrapS=vH[E.wrapS]||v9,U.wrapT=vH[E.wrapT]||v9,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==w8&&U.minFilter!==Z8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=K,K}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let H=Z.images[J],Y=self.URL||self.webkitURL,X=H.uri||"",K=!1;if(H.bufferView!==void 0)X=$.getDependency("bufferView",H.bufferView).then(function(G){K=!0;let E=new Blob([G],{type:H.mimeType});return X=Y.createObjectURL(E),X});else if(H.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(G){return new Promise(function(E,q){let O=E;if(Q.isImageBitmapLoader===!0)O=function(R){let M=new qJ(R);M.needsUpdate=!0,E(M)};Q.load(n8.resolveURL(G,W.path),O,void 0,q)})}).then(function(G){if(K===!0)Y.revokeObjectURL(X);return A8(G,H),G.userData.mimeType=H.mimeType||J1(H.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(H){if(!H)return null;if($.texCoord!==void 0&&$.texCoord>0)H=H.clone(),H.channel=$.texCoord;if(W.extensions[p0.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[p0.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=W.associations.get(H);H=W.extensions[p0.KHR_TEXTURE_TRANSFORM].extendTexture(H,Y),W.associations.set(H,X)}}if(Z!==void 0)H.colorSpace=Z;return J[Q]=H,H})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,H=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new q8,VJ.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new P8,VJ.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||W||H){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(W)Y+="vertex-colors:";if(H)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),W)X.vertexColors=!0;if(H)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return d9}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],H,Y={},X=W.extensions||{},K=[];if(X[p0.KHR_MATERIALS_UNLIT]){let G=Z[p0.KHR_MATERIALS_UNLIT];H=G.getMaterialType(),K.push(G.extendParams(Y,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(Y.color=new D0(1,1,1),Y.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;Y.color.setRGB(E[0],E[1],E[2],_J),Y.opacity=E[3]}if(G.baseColorTexture!==void 0)K.push(Q.assignTexture(Y,"map",G.baseColorTexture,yJ));if(Y.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,Y.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(Y,"metalnessMap",G.metallicRoughnessTexture)),K.push(Q.assignTexture(Y,"roughnessMap",G.metallicRoughnessTexture));H=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,Y)})))}if(W.doubleSided===!0)Y.side=iJ;let U=W.alphaMode||d$.OPAQUE;if(U===d$.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===d$.MASK)Y.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&H!==G8){if(K.push(Q.assignTexture(Y,"normalMap",W.normalTexture)),Y.normalScale=new x0(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;Y.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&H!==G8){if(K.push(Q.assignTexture(Y,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)Y.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&H!==G8){let G=W.emissiveFactor;Y.emissive=new D0().setRGB(G[0],G[1],G[2],_J)}if(W.emissiveTexture!==void 0&&H!==G8)K.push(Q.assignTexture(Y,"emissiveMap",W.emissiveTexture,yJ));return Promise.all(K).then(function(){let G=new H(Y);if(W.name)G.name=W.name;if(A8(G,W),Q.associations.set(G,{materials:J}),W.extensions)N9(Z,G,W);return G})}createUniqueName(J){let Q=o0.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(Y){return $[p0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return yH(X,Y,Q)})}let H=[];for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=eE(K),G=Z[U];if(G)H.push(G.promise);else{let E;if(K.extensions&&K.extensions[p0.KHR_DRACO_MESH_COMPRESSION])E=W(K);else E=yH(new zJ,K,Q);Z[U]={primitive:K,promise:E},H.push(E)}}return Promise.all(H)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],H=W.primitives,Y=[];for(let X=0,K=H.length;X<K;X++){let U=H[X].material===void 0?aE(this.cache):this.getDependency("material",H[X].material);Y.push(U)}return Y.push(Q.loadGeometries(H)),Promise.all(Y).then(function(X){let K=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let q=0,O=U.length;q<O;q++){let R=U[q],M=H[q],N,F=K[q];if(M.mode===aJ.TRIANGLES||M.mode===aJ.TRIANGLE_STRIP||M.mode===aJ.TRIANGLE_FAN||M.mode===void 0){if(N=W.isSkinnedMesh===!0?new B7(R,F):new RJ(R,F),N.isSkinnedMesh===!0)N.normalizeSkinWeights();if(M.mode===aJ.TRIANGLE_STRIP)N.geometry=p$(N.geometry,q6);else if(M.mode===aJ.TRIANGLE_FAN)N.geometry=p$(N.geometry,x9)}else if(M.mode===aJ.LINES)N=new X9(R,F);else if(M.mode===aJ.LINE_STRIP)N=new l9(R,F);else if(M.mode===aJ.LINE_LOOP)N=new w7(R,F);else if(M.mode===aJ.POINTS)N=new d8(R,F);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+M.mode);if(Object.keys(N.geometry.morphAttributes).length>0)tE(N,W);if(N.name=Q.createUniqueName(W.name||"mesh_"+J),A8(N,W),M.extensions)N9(Z,N,M);Q.assignFinalMaterial(N),G.push(N)}for(let q=0,O=G.length;q<O;q++)Q.associations.set(G[q],{meshes:J,primitives:q});if(G.length===1){if(W.extensions)N9(Z,G[0],W);return G[0]}let E=new vJ;if(W.extensions)N9(Z,E,W);Q.associations.set(E,{meshes:J});for(let q=0,O=G.length;q<O;q++)E.add(G[q]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new OJ(U$.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new u9(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return A8(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),H=Z,Y=[],X=[];for(let K=0,U=H.length;K<U;K++){let G=H[K];if(G){Y.push(G);let E=new v0;if(W!==null)E.fromArray(W.array,K*16);X.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new M6(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,H=[],Y=[],X=[],K=[],U=[];for(let G=0,E=Z.channels.length;G<E;G++){let q=Z.channels[G],O=Z.samplers[q.sampler],R=q.target,M=R.node,N=Z.parameters!==void 0?Z.parameters[O.input]:O.input,F=Z.parameters!==void 0?Z.parameters[O.output]:O.output;if(R.node===void 0)continue;H.push(this.getDependency("node",M)),Y.push(this.getDependency("accessor",N)),X.push(this.getDependency("accessor",F)),K.push(O),U.push(R)}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(K),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],O=G[2],R=G[3],M=G[4],N=[];for(let F=0,_=E.length;F<_;F++){let L=E[F],w=q[F],S=O[F],C=R[F],T=M[F];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let b=$._createAnimationTracks(L,w,S,C,T);if(b)for(let z=0;z<b.length;z++)N.push(b[z])}return new S7(W,void 0,N)})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let H=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)H.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,K=Z.weights.length;X<K;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return H})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),H=[],Y=Z.children||[];for(let K=0,U=Y.length;K<U;K++)H.push($.getDependency("node",Y[K]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(H),X]).then(function(K){let U=K[0],G=K[1],E=K[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,Q1)});for(let q=0,O=G.length;q<O;q++)U.add(G[q]);return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],H=W.name?Z.createUniqueName(W.name):"",Y=[],X=Z._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(X)Y.push(X);if(W.camera!==void 0)Y.push(Z.getDependency("camera",W.camera).then(function(K){return Z._getNodeRef(Z.cameraCache,W.camera,K)}));return Z._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){Y.push(K)}),this.nodeCache[J]=Promise.all(Y).then(function(K){let U;if(W.isBone===!0)U=new R6;else if(K.length>1)U=new vJ;else if(K.length===1)U=K[0];else U=new WJ;if(U!==K[0])for(let G=0,E=K.length;G<E;G++)U.add(K[G]);if(W.name)U.userData.name=W.name,U.name=H;if(A8(U,W),W.extensions)N9($,U,W);if(W.matrix!==void 0){let G=new v0;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new vJ;if($.name)W.name=Z.createUniqueName($.name);if(A8(W,$),$.extensions)N9(Q,W,$);let H=$.nodes||[],Y=[];for(let X=0,K=H.length;X<K;X++)Y.push(Z.getDependency("node",H[X]));return Promise.all(Y).then(function(X){for(let U=0,G=X.length;U<G;U++)W.add(X[U]);let K=(U)=>{let G=new Map;for(let[E,q]of Z.associations)if(E instanceof VJ||E instanceof qJ)G.set(E,q);return U.traverse((E)=>{let q=Z.associations.get(E);if(q!=null)G.set(E,q)}),G};return Z.associations=K(W),W})}_createAnimationTracks(J,Q,$,Z,W){let H=[],Y=J.name?J.name:J.uuid,X=[];if(s8[W.path]===s8.weights)J.traverse(function(E){if(E.morphTargetInfluences)X.push(E.name?E.name:E.uuid)});else X.push(Y);let K;switch(s8[W.path]){case s8.weights:K=B8;break;case s8.rotation:K=T8;break;case s8.translation:case s8.scale:K=_8;break;default:switch($.itemSize){case 1:K=B8;break;case 2:case 3:default:K=_8;break}break}let U=Z.interpolation!==void 0?iE[Z.interpolation]:F7,G=this._getArrayFromAccessor($);for(let E=0,q=X.length;E<q;E++){let O=new K(X[E]+"."+s8[W.path],Q.array,G,U);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);H.push(O)}return H}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=c$(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,H=Q.length;W<H;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof T8?WY:s$)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $1(J,Q,$){let Z=Q.attributes,W=new hJ;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],K=X.min,U=X.max;if(K!==void 0&&U!==void 0){if(W.set(new A(K[0],K[1],K[2]),new A(U[0],U[1],U[2])),X.normalized){let G=c$(o9[X.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let H=Q.targets;if(H!==void 0){let X=new A,K=new A;for(let U=0,G=H.length;U<G;U++){let E=H[U];if(E.POSITION!==void 0){let q=$.json.accessors[E.POSITION],O=q.min,R=q.max;if(O!==void 0&&R!==void 0){if(K.setX(Math.max(Math.abs(O[0]),Math.abs(R[0]))),K.setY(Math.max(Math.abs(O[1]),Math.abs(R[1]))),K.setZ(Math.max(Math.abs(O[2]),Math.abs(R[2]))),q.normalized){let M=c$(o9[q.componentType]);K.multiplyScalar(M)}X.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(X)}J.boundingBox=W;let Y=new lJ;W.getCenter(Y.center),Y.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=Y}function yH(J,Q,$){let Z=Q.attributes,W=[];function H(Y,X){return $.getDependency("accessor",Y).then(function(K){J.setAttribute(X,K)})}for(let Y in Z){let X=u$[Y]||Y.toLowerCase();if(X in J.attributes)continue;W.push(H(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});W.push(Y)}if(b0.workingColorSpace!==_J&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${b0.workingColorSpace}" not supported.`);return A8(J,Q),$1(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?rE(J,Q.targets,$):J})}var o$=new WeakMap;class i$ extends uJ{constructor(J){super(J);this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(J){return this.decoderPath=J,this}setDecoderConfig(J){return this.decoderConfig=J,this}setWorkerLimit(J){return this.workerLimit=J,this}load(J,Q,$,Z){let W=new N8(this.manager);W.setPath(this.path),W.setResponseType("arraybuffer"),W.setRequestHeader(this.requestHeader),W.setWithCredentials(this.withCredentials),W.load(J,(H)=>{this.parse(H,Q,Z)},$,Z)}parse(J,Q,$=()=>{}){this.decodeDracoFile(J,Q,null,null,yJ,$).catch($)}decodeDracoFile(J,Q,$,Z,W=_J,H=()=>{}){let Y={attributeIDs:$||this.defaultAttributeIDs,attributeTypes:Z||this.defaultAttributeTypes,useUniqueIDs:!!$,vertexColorSpace:W};return this.decodeGeometry(J,Y).then(Q).catch(H)}decodeGeometry(J,Q){let $=JSON.stringify(Q);if(o$.has(J)){let X=o$.get(J);if(X.key===$)return X.promise;else if(J.byteLength===0)throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let Z,W=this.workerNextTaskID++,H=J.byteLength,Y=this._getWorker(W,H).then((X)=>{return Z=X,new Promise((K,U)=>{Z._callbacks[W]={resolve:K,reject:U},Z.postMessage({type:"decode",id:W,taskConfig:Q,buffer:J},[J])})}).then((X)=>this._createGeometry(X.geometry));return Y.catch(()=>!0).then(()=>{if(Z&&W)this._releaseTask(Z,W)}),o$.set(J,{key:$,promise:Y}),Y}_createGeometry(J){let Q=new zJ;if(J.index)Q.setIndex(new GJ(J.index.array,1));for(let $=0;$<J.attributes.length;$++){let Z=J.attributes[$],W=Z.name,H=Z.array,Y=Z.itemSize,X=new GJ(H,Y);if(W==="color")this._assignVertexColorSpace(X,Z.vertexColorSpace),X.normalized=H instanceof Float32Array===!1;Q.setAttribute(W,X)}return Q}_assignVertexColorSpace(J,Q){if(Q!==yJ)return;let $=new D0;for(let Z=0,W=J.count;Z<W;Z++)$.fromBufferAttribute(J,Z),b0.colorSpaceToWorking($,yJ),J.setXYZ(Z,$.r,$.g,$.b)}_loadLibrary(J,Q){let $=new N8(this.manager);return $.setPath(this.decoderPath),$.setResponseType(Q),$.setWithCredentials(this.withCredentials),new Promise((Z,W)=>{$.load(J,Z,void 0,W)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let J=typeof WebAssembly!=="object"||this.decoderConfig.type==="js",Q=[];if(J)Q.push(this._loadLibrary("draco_decoder.js","text"));else Q.push(this._loadLibrary("draco_wasm_wrapper.js","text")),Q.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"));return this.decoderPending=Promise.all(Q).then(($)=>{let Z=$[0];if(!J)this.decoderConfig.wasmBinary=$[1];let W=Z1.toString(),H=["/* draco decoder */",Z,"","/* worker */",W.substring(W.indexOf("{")+1,W.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([H]))}),this.decoderPending}_getWorker(J,Q){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let Z=new Worker(this.workerSourceURL);Z._callbacks={},Z._taskCosts={},Z._taskLoad=0,Z.postMessage({type:"init",decoderConfig:this.decoderConfig}),Z.onmessage=function(W){let H=W.data;switch(H.type){case"decode":Z._callbacks[H.id].resolve(H);break;case"error":Z._callbacks[H.id].reject(H);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+H.type+'"')}},this.workerPool.push(Z)}else this.workerPool.sort(function(Z,W){return Z._taskLoad>W._taskLoad?-1:1});let $=this.workerPool[this.workerPool.length-1];return $._taskCosts[J]=Q,$._taskLoad+=Q,$})}_releaseTask(J,Q){J._taskLoad-=J._taskCosts[Q],delete J._callbacks[Q],delete J._taskCosts[Q]}debug(){console.log("Task load: ",this.workerPool.map((J)=>J._taskLoad))}dispose(){for(let J=0;J<this.workerPool.length;++J)this.workerPool[J].terminate();if(this.workerPool.length=0,this.workerSourceURL!=="")URL.revokeObjectURL(this.workerSourceURL);return this}}function Z1(){let J,Q;onmessage=function(Y){let X=Y.data;switch(X.type){case"init":J=X.decoderConfig,Q=new Promise(function(G){J.onModuleLoaded=function(E){G({draco:E})},DracoDecoderModule(J)});break;case"decode":let{buffer:K,taskConfig:U}=X;Q.then((G)=>{let E=G.draco,q=new E.Decoder;try{let O=$(E,q,new Int8Array(K),U),R=O.attributes.map((M)=>M.array.buffer);if(O.index)R.push(O.index.array.buffer);self.postMessage({type:"decode",id:X.id,geometry:O},R)}catch(O){console.error(O),self.postMessage({type:"error",id:X.id,error:O.message})}finally{E.destroy(q)}});break}};function $(Y,X,K,U){let{attributeIDs:G,attributeTypes:E}=U,q,O,R=X.GetEncodedGeometryType(K);if(R===Y.TRIANGULAR_MESH)q=new Y.Mesh,O=X.DecodeArrayToMesh(K,K.byteLength,q);else if(R===Y.POINT_CLOUD)q=new Y.PointCloud,O=X.DecodeArrayToPointCloud(K,K.byteLength,q);else throw Error("THREE.DRACOLoader: Unexpected geometry type.");if(!O.ok()||q.ptr===0)throw Error("THREE.DRACOLoader: Decoding failed: "+O.error_msg());let M={index:null,attributes:[]};for(let N in G){let F=self[E[N]],_,L;if(U.useUniqueIDs)L=G[N],_=X.GetAttributeByUniqueId(q,L);else{if(L=X.GetAttributeId(q,Y[G[N]]),L===-1)continue;_=X.GetAttribute(q,L)}let w=W(Y,X,q,N,F,_);if(N==="color")w.vertexColorSpace=U.vertexColorSpace;M.attributes.push(w)}if(R===Y.TRIANGULAR_MESH)M.index=Z(Y,X,q);return Y.destroy(q),M}function Z(Y,X,K){let G=K.num_faces()*3,E=G*4,q=Y._malloc(E);X.GetTrianglesUInt32Array(K,E,q);let O=new Uint32Array(Y.HEAPF32.buffer,q,G).slice();return Y._free(q),{array:O,itemSize:1}}function W(Y,X,K,U,G,E){let q=E.num_components(),R=K.num_points()*q,M=R*G.BYTES_PER_ELEMENT,N=H(Y,G),F=Y._malloc(M);X.GetAttributeDataArrayForAllPoints(K,E,N,M,F);let _=new G(Y.HEAPF32.buffer,F,R).slice();return Y._free(F),{name:U,array:_,itemSize:q}}function H(Y,X){switch(X){case Float32Array:return Y.DT_FLOAT32;case Int8Array:return Y.DT_INT8;case Int16Array:return Y.DT_INT16;case Int32Array:return Y.DT_INT32;case Uint8Array:return Y.DT_UINT8;case Uint16Array:return Y.DT_UINT16;case Uint32Array:return Y.DT_UINT32}}}var W1=/^[og]\s*(.+)?/,H1=/^mtllib /,Y1=/^usemtl /,X1=/^usemap /,YY=/\s+/,XY=new A,a$=new A,KY=new A,UY=new A,rJ=new A,d7=new D0;function K1(){let J={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(Q,$){if(this.object&&this.object.fromDeclaration===!1){this.object.name=Q,this.object.fromDeclaration=$!==!1;return}let Z=this.object&&typeof this.object.currentMaterial==="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0);if(this.object={name:Q||"",fromDeclaration:$!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(W,H){let Y=this._finalize(!1);if(Y&&(Y.inherited||Y.groupCount<=0))this.materials.splice(Y.index,1);let X={index:this.materials.length,name:W||"",mtllib:Array.isArray(H)&&H.length>0?H[H.length-1]:"",smooth:Y!==void 0?Y.smooth:this.smooth,groupStart:Y!==void 0?Y.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(K){let U={index:typeof K==="number"?K:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return U.clone=this.clone.bind(U),U}};return this.materials.push(X),X},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1];return},_finalize:function(W){let H=this.currentMaterial();if(H&&H.groupEnd===-1)H.groupEnd=this.geometry.vertices.length/3,H.groupCount=H.groupEnd-H.groupStart,H.inherited=!1;if(W&&this.materials.length>1){for(let Y=this.materials.length-1;Y>=0;Y--)if(this.materials[Y].groupCount<=0)this.materials.splice(Y,1)}if(W&&this.materials.length===0)this.materials.push({name:"",smooth:this.smooth});return H}},Z&&Z.name&&typeof Z.clone==="function"){let W=Z.clone(0);W.inherited=!0,this.object.materials.push(W)}this.objects.push(this.object)},finalize:function(){if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0)},parseVertexIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/3)*3},parseNormalIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/3)*3},parseUVIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/2)*2},addVertex:function(Q,$,Z){let W=this.vertices,H=this.object.geometry.vertices;H.push(W[Q+0],W[Q+1],W[Q+2]),H.push(W[$+0],W[$+1],W[$+2]),H.push(W[Z+0],W[Z+1],W[Z+2])},addVertexPoint:function(Q){let $=this.vertices;this.object.geometry.vertices.push($[Q+0],$[Q+1],$[Q+2])},addVertexLine:function(Q){let $=this.vertices;this.object.geometry.vertices.push($[Q+0],$[Q+1],$[Q+2])},addNormal:function(Q,$,Z){let W=this.normals,H=this.object.geometry.normals;H.push(W[Q+0],W[Q+1],W[Q+2]),H.push(W[$+0],W[$+1],W[$+2]),H.push(W[Z+0],W[Z+1],W[Z+2])},addFaceNormal:function(Q,$,Z){let W=this.vertices,H=this.object.geometry.normals;XY.fromArray(W,Q),a$.fromArray(W,$),KY.fromArray(W,Z),rJ.subVectors(KY,a$),UY.subVectors(XY,a$),rJ.cross(UY),rJ.normalize(),H.push(rJ.x,rJ.y,rJ.z),H.push(rJ.x,rJ.y,rJ.z),H.push(rJ.x,rJ.y,rJ.z)},addColor:function(Q,$,Z){let W=this.colors,H=this.object.geometry.colors;if(W[Q]!==void 0)H.push(W[Q+0],W[Q+1],W[Q+2]);if(W[$]!==void 0)H.push(W[$+0],W[$+1],W[$+2]);if(W[Z]!==void 0)H.push(W[Z+0],W[Z+1],W[Z+2])},addUV:function(Q,$,Z){let W=this.uvs,H=this.object.geometry.uvs;H.push(W[Q+0],W[Q+1]),H.push(W[$+0],W[$+1]),H.push(W[Z+0],W[Z+1])},addDefaultUV:function(){let Q=this.object.geometry.uvs;Q.push(0,0),Q.push(0,0),Q.push(0,0)},addUVLine:function(Q){let $=this.uvs;this.object.geometry.uvs.push($[Q+0],$[Q+1])},addFace:function(Q,$,Z,W,H,Y,X,K,U){let G=this.vertices.length,E=this.parseVertexIndex(Q,G),q=this.parseVertexIndex($,G),O=this.parseVertexIndex(Z,G);if(this.addVertex(E,q,O),this.addColor(E,q,O),X!==void 0&&X!==""){let R=this.normals.length;E=this.parseNormalIndex(X,R),q=this.parseNormalIndex(K,R),O=this.parseNormalIndex(U,R),this.addNormal(E,q,O)}else this.addFaceNormal(E,q,O);if(W!==void 0&&W!==""){let R=this.uvs.length;E=this.parseUVIndex(W,R),q=this.parseUVIndex(H,R),O=this.parseUVIndex(Y,R),this.addUV(E,q,O),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(Q){this.object.geometry.type="Points";let $=this.vertices.length;for(let Z=0,W=Q.length;Z<W;Z++){let H=this.parseVertexIndex(Q[Z],$);this.addVertexPoint(H),this.addColor(H)}},addLineGeometry:function(Q,$){this.object.geometry.type="Line";let Z=this.vertices.length,W=this.uvs.length;for(let H=0,Y=Q.length;H<Y;H++)this.addVertexLine(this.parseVertexIndex(Q[H],Z));for(let H=0,Y=$.length;H<Y;H++)this.addUVLine(this.parseUVIndex($[H],W))}};return J.startObject("",!1),J}class r$ extends uJ{constructor(J){super(J);this.materials=null}load(J,Q,$,Z){let W=this,H=new N8(this.manager);H.setPath(this.path),H.setRequestHeader(this.requestHeader),H.setWithCredentials(this.withCredentials),H.load(J,function(Y){try{Q(W.parse(Y))}catch(X){if(Z)Z(X);else console.error(X);W.manager.itemError(J)}},$,Z)}setMaterials(J){return this.materials=J,this}parse(J){let Q=new K1;if(J.indexOf(`\r
`)!==-1)J=J.replace(/\r\n/g,`
`);if(J.indexOf("\\\n")!==-1)J=J.replace(/\\\n/g,"");let $=J.split(`
`),Z=[];for(let Y=0,X=$.length;Y<X;Y++){let K=$[Y].trimStart();if(K.length===0)continue;let U=K.charAt(0);if(U==="#")continue;if(U==="v"){let G=K.split(YY);switch(G[0]){case"v":if(Q.vertices.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3])),G.length>=7)d7.setRGB(parseFloat(G[4]),parseFloat(G[5]),parseFloat(G[6]),yJ),Q.colors.push(d7.r,d7.g,d7.b);else Q.colors.push(void 0,void 0,void 0);break;case"vn":Q.normals.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3]));break;case"vt":Q.uvs.push(parseFloat(G[1]),parseFloat(G[2]));break}}else if(U==="f"){let E=K.slice(1).trim().split(YY),q=[];for(let R=0,M=E.length;R<M;R++){let N=E[R];if(N.length>0){let F=N.split("/");q.push(F)}}let O=q[0];for(let R=1,M=q.length-1;R<M;R++){let N=q[R],F=q[R+1];Q.addFace(O[0],N[0],F[0],O[1],N[1],F[1],O[2],N[2],F[2])}}else if(U==="l"){let G=K.substring(1).trim().split(" "),E=[],q=[];if(K.indexOf("/")===-1)E=G;else for(let O=0,R=G.length;O<R;O++){let M=G[O].split("/");if(M[0]!=="")E.push(M[0]);if(M[1]!=="")q.push(M[1])}Q.addLineGeometry(E,q)}else if(U==="p"){let E=K.slice(1).trim().split(" ");Q.addPointGeometry(E)}else if((Z=W1.exec(K))!==null){let G=(" "+Z[0].slice(1).trim()).slice(1);Q.startObject(G)}else if(Y1.test(K))Q.object.startMaterial(K.substring(7).trim(),Q.materialLibraries);else if(H1.test(K))Q.materialLibraries.push(K.substring(7).trim());else if(X1.test(K))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(U==="s"){if(Z=K.split(" "),Z.length>1){let E=Z[1].trim().toLowerCase();Q.object.smooth=E!=="0"&&E!=="off"}else Q.object.smooth=!0;let G=Q.object.currentMaterial();if(G)G.smooth=Q.object.smooth}else{if(K==="\x00")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+K+'"')}}Q.finalize();let W=new vJ;if(W.materialLibraries=[].concat(Q.materialLibraries),!(Q.objects.length===1&&Q.objects[0].geometry.vertices.length===0)===!0)for(let Y=0,X=Q.objects.length;Y<X;Y++){let K=Q.objects[Y],U=K.geometry,G=K.materials,E=U.type==="Line",q=U.type==="Points",O=!1;if(U.vertices.length===0)continue;let R=new zJ;if(R.setAttribute("position",new FJ(U.vertices,3)),U.normals.length>0)R.setAttribute("normal",new FJ(U.normals,3));if(U.colors.length>0)O=!0,R.setAttribute("color",new FJ(U.colors,3));if(U.hasUVIndices===!0)R.setAttribute("uv",new FJ(U.uvs,2));let M=[];for(let F=0,_=G.length;F<_;F++){let L=G[F],w=L.name+"_"+L.smooth+"_"+O,S=Q.materials[w];if(this.materials!==null){if(S=this.materials.create(L.name),E&&S&&!(S instanceof P8)){let C=new P8;VJ.prototype.copy.call(C,S),C.color.copy(S.color),S=C}else if(q&&S&&!(S instanceof q8)){let C=new q8({size:10,sizeAttenuation:!1});VJ.prototype.copy.call(C,S),C.color.copy(S.color),C.map=S.map,S=C}}if(S===void 0){if(E)S=new P8;else if(q)S=new q8({size:1,sizeAttenuation:!1});else S=new P7;S.name=L.name,S.flatShading=L.smooth?!1:!0,S.vertexColors=O,Q.materials[w]=S}M.push(S)}let N;if(M.length>1){for(let F=0,_=G.length;F<_;F++){let L=G[F];R.addGroup(L.groupStart,L.groupCount,F)}if(E)N=new X9(R,M);else if(q)N=new d8(R,M);else N=new RJ(R,M)}else if(E)N=new X9(R,M[0]);else if(q)N=new d8(R,M[0]);else N=new RJ(R,M[0]);N.name=K.name,W.add(N)}else if(Q.vertices.length>0){let Y=new q8({size:1,sizeAttenuation:!1}),X=new zJ;if(X.setAttribute("position",new FJ(Q.vertices,3)),Q.colors.length>0&&Q.colors[0]!==void 0)X.setAttribute("color",new FJ(Q.colors,3)),Y.vertexColors=!0;let K=new d8(X,Y);W.add(K)}return W}}var GY={simple:" .:-=+*#%@",detailed:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",blocks:" ░▒▓█"},U1=[[0,3],[1,4],[2,5],[6,7]],EY=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]].map((J)=>J.map((Q)=>(Q+0.5)/16)),G1=[[0,1],[2,3],[4,5],[6,7]],E1=[32,32,32,129922,118016,9624,118017,118018,118019,118020,9629,118021,118022,118023,118024,9600,118025,118026,118027,118028,118029,118030,118031,118032,118033,118034,118035,118036,118037,118038,118039,118040,118041,118042,118043,118044,118045,118046,118047,130023,118048,118049,118050,118051,118052,118053,118054,118055,118056,118057,118058,118059,118060,118061,118062,118063,118064,118065,118066,118067,118068,118069,118070,9608,32,118071,118072,118073,118074,118075,118076,118077,118078,118079,118080,118081,118082,118083,118084,118085,9622,118086,118087,118088,118089,9612,118090,118091,118092,118093,9630,118094,118095,118096,118097,9627,118098,118099,118100,118101,118102,118103,118104,118105,118106,118107,118108,118109,118110,118111,118112,118113,118114,118115,118116,118117,118118,118119,118120,118121,118122,118123,118124,118125,118126,118127,118128,32,118129,118130,118131,118132,118133,118134,118135,118136,118137,118138,118139,118140,118141,118142,118143,118144,118145,118146,118147,118148,118149,118150,118151,118152,118153,118154,118155,118156,118157,118158,118159,118160,9623,118161,118162,118163,118164,9626,118165,118166,118167,118168,9616,118169,118170,118171,9628,118172,118173,118174,118175,118176,118177,118178,118179,118180,118181,118182,118183,118184,118185,118186,118187,118188,9602,118189,118190,118191,118192,118193,118194,118195,118196,118197,118198,118199,118200,118201,118202,118203,118204,118205,118206,118207,118208,118209,118210,118211,118212,118213,118214,118215,118216,118217,118218,118219,118220,118221,118222,118223,118224,118225,118226,118227,118228,118229,118230,118231,118232,118233,118234,118235,9604,118236,118237,118238,9625,118239,118240,118241,118242,9631,118243,9608,118244,118245,9608],q1=E1.map((J)=>String.fromCodePoint(J)),t$='"FairfaxOctant", "SF Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',qY='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',N1='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>';class e$ extends HTMLElement{static IDLE_RESUME_MS=2500;container;asciiEl;canvasEl;canvasCtx;measureCtx;expandBtn;renderer;scene;camera;pivot;model;material;renderTarget;pixelBuffer;termCols=0;termRows=0;ptCols=0;ptRows=0;fontSize=16;charWidth=9;cssW=0;cssH=0;dpr=1;rowStrings=[];cols=110;baseCharWidth=0;renderStyle="octant";ramp="detailed";invert=!1;fg="#d8d8d8";bg="#0b0b0b";autoRotate=!0;disableZoom=!1;disablePan=!1;disableRotate=!1;isDragging=!1;prevX=0;prevY=0;rotation=new PJ;targetRotation=new PJ;initialDistance=6;distance=6;targetDistance=6;panX=0;panY=0;animationId;resizeObserver;onPointerMove=(J)=>this.handlePointerMove(J);onPointerUp=(J)=>this.handlePointerUp(J);activePointers=new Map;pinchStartDist=0;pinchStartDistanceValue=0;pinchStartMidX=0;pinchStartMidY=0;pinchStartPanX=0;pinchStartPanY=0;interacting=!1;idleTimer;onFullscreenChange=()=>this.syncFullscreenUi();constructor(){super();this.attachShadow({mode:"open"});let J=document.createElement("style");J.textContent=`
      :host { display: block; position: relative; }
      #stage {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: grab;
        overflow: hidden;
        user-select: none;
        touch-action: none;
      }
      #stage.dragging { cursor: grabbing; }
      #ascii {
        font-family: ${t$};
        white-space: pre;
        line-height: 1;
        letter-spacing: 0;
        margin: 0;
        user-select: none;
        text-align: left;
      }
      #ascii-canvas { user-select: none; }
      #expand-btn {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        z-index: 1;
        width: 1.8em;
        height: 1.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: none;
        padding: 0;
        color: #fff;
        cursor: pointer;
        opacity: 0.6;
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.8));
        transition: opacity 0.15s ease;
      }
      #expand-btn svg { width: 60%; height: 60%; }
      #expand-btn:hover { opacity: 1; }
      :host(:fullscreen) {
        width: 100vw;
        height: 100vh;
        background: #000;
      }
    `,this.shadowRoot.appendChild(J),this.container=document.createElement("div"),this.container.id="stage",this.shadowRoot.appendChild(this.container),this.asciiEl=document.createElement("pre"),this.asciiEl.id="ascii",this.container.appendChild(this.asciiEl),this.canvasEl=document.createElement("canvas"),this.canvasEl.id="ascii-canvas",this.container.appendChild(this.canvasEl),this.expandBtn=document.createElement("button"),this.expandBtn.id="expand-btn",this.expandBtn.type="button",this.expandBtn.innerHTML=qY,this.expandBtn.setAttribute("aria-label","Expand viewer"),this.expandBtn.addEventListener("pointerdown",(Q)=>Q.stopPropagation()),this.expandBtn.addEventListener("click",()=>this.toggleFullscreen()),this.shadowRoot.appendChild(this.expandBtn),this.canvasCtx=this.canvasEl.getContext("2d"),this.measureCtx=document.createElement("canvas").getContext("2d")}static get observedAttributes(){return["src","mode","ramp","cols","invert","auto-rotate","disable-zoom","disable-pan","disable-rotate","fg","bg","distance"]}attributeChangedCallback(J,Q,$){if(J==="src"){this.loadModel();return}if(this.parseAttributes(),J==="mode"||J==="cols")this.computeGrid(),this.syncUi();else if(J==="fg"||J==="bg")this.syncUi()}parseAttributes(){if(this.renderStyle=this.getAttribute("mode")||"octant",!["octant","braille","text"].includes(this.renderStyle))this.renderStyle="octant";if(this.ramp=this.getAttribute("ramp")||"detailed",!(this.ramp in GY))this.ramp="detailed";this.cols=parseInt(this.getAttribute("cols")??"110",10)||110,this.invert=this.hasAttribute("invert"),this.autoRotate=this.getAttribute("auto-rotate")!=="false",this.disableZoom=this.hasAttribute("disable-zoom"),this.disablePan=this.hasAttribute("disable-pan"),this.disableRotate=this.hasAttribute("disable-rotate"),this.fg=this.getAttribute("fg")||"#d8d8d8",this.bg=this.getAttribute("bg")||"#0b0b0b",this.initialDistance=parseFloat(this.getAttribute("distance")??"6")||6}connectedCallback(){if(this.parseAttributes(),!this.renderer)this.initRenderer(),this.addInteractions();if(this.computeGrid(),this.syncUi(),this.getAttribute("src")&&!this.model)this.loadModel();if(!this.animationId)this.tick();document.fonts.load('16px "FairfaxOctant"').catch(()=>{}),document.addEventListener("fullscreenchange",this.onFullscreenChange)}disconnectedCallback(){if(this.animationId)cancelAnimationFrame(this.animationId);if(this.animationId=void 0,window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),document.removeEventListener("fullscreenchange",this.onFullscreenChange),this.idleTimer!==void 0)window.clearTimeout(this.idleTimer);if(this.resizeObserver)this.resizeObserver.disconnect()}toggleFullscreen(){if(document.fullscreenElement===this)document.exitFullscreen().catch(()=>{});else this.requestFullscreen().catch(()=>{})}syncFullscreenUi(){let J=document.fullscreenElement===this;this.expandBtn.innerHTML=J?N1:qY,this.expandBtn.setAttribute("aria-label",J?"Exit fullscreen":"Expand viewer"),this.computeGrid(),this.syncUi()}initRenderer(){let J=this.clientWidth||600,Q=this.clientHeight||400;this.dpr=Math.min(window.devicePixelRatio||1,2),this.scene=new z7,this.scene.background=new D0(0),this.camera=new OJ(35,J/Q,0.1,100),this.camera.position.set(0,0,6),this.scene.add(new f7(16777215,0.35));let $=new K9(16777215,1.1);$.position.set(4,6,5),this.scene.add($);let Z=new K9(16777215,0.4);Z.position.set(-5,-3,-4),this.scene.add(Z),this.material=new T7({color:16777215}),this.pivot=new vJ,this.scene.add(this.pivot),this.renderer=new g$({antialias:!1,alpha:!1,preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(1),this.renderer.domElement.style.display="none",this.shadowRoot.appendChild(this.renderer.domElement),this.resizeObserver=new ResizeObserver(()=>{this.computeGrid(),this.syncUi()}),this.resizeObserver.observe(this)}loadModel(){let J=this.getAttribute("src");if(!J||!this.pivot)return;if(this.model)this.pivot.remove(this.model),this.model=void 0;let Q=J.split("?")[0].split("#")[0].toLowerCase();if(Q.endsWith(".glb")||Q.endsWith(".gltf")){let $=new n$,Z=new i$;Z.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),$.setDRACOLoader(Z),$.load(J,(W)=>this.setModelObject(W.scene),void 0,(W)=>console.error("ascii-model-viewer: error loading GLB:",W))}else new r$().load(J,(Z)=>this.setModelObject(Z),void 0,(Z)=>console.error("ascii-model-viewer: error loading OBJ:",Z))}setModelObject(J){J.traverse((H)=>{let Y=H;if(Y.isMesh&&this.material)Y.material=this.material});let Q=new hJ().setFromObject(J),$=Q.getCenter(new A);J.position.sub($);let Z=Q.getSize(new A),W=Math.max(Z.x,Z.y,Z.z)||1;J.scale.setScalar(2/W),this.model=J,this.pivot.add(J),this.pivot.rotation.set(0,0,0),this.rotation.identity(),this.targetRotation.identity(),this.distance=this.initialDistance,this.targetDistance=this.initialDistance}addInteractions(){this.container.addEventListener("pointerdown",(J)=>{if(this.activePointers.set(J.pointerId,{x:J.clientX,y:J.clientY}),this.activePointers.size===1)this.isDragging=!0,this.prevX=J.clientX,this.prevY=J.clientY,this.container.classList.add("dragging");else if(this.activePointers.size===2)this.isDragging=!1,this.beginPinch();this.markInteracting()}),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),this.container.addEventListener("wheel",(J)=>{if(this.disableZoom)return;J.preventDefault(),this.targetDistance=Math.max(2,Math.min(20,this.targetDistance*(1+(J.deltaY>0?0.1:-0.1)))),this.markInteracting(),this.scheduleIdleResume()},{passive:!1})}beginPinch(){let J=Array.from(this.activePointers.values()),[Q,$]=J;this.pinchStartDist=Math.hypot(Q.x-$.x,Q.y-$.y)||1,this.pinchStartDistanceValue=this.targetDistance,this.pinchStartMidX=(Q.x+$.x)/2,this.pinchStartMidY=(Q.y+$.y)/2,this.pinchStartPanX=this.panX,this.pinchStartPanY=this.panY}updatePinch(){let J=Array.from(this.activePointers.values()),[Q,$]=J;if(!this.disableZoom){let W=(Math.hypot(Q.x-$.x,Q.y-$.y)||1)/this.pinchStartDist;this.targetDistance=Math.max(2,Math.min(20,this.pinchStartDistanceValue/W))}if(!this.disablePan){let Z=(Q.x+$.x)/2,W=(Q.y+$.y)/2,H=0.003;this.panX=this.pinchStartPanX+(Z-this.pinchStartMidX)*0.003,this.panY=this.pinchStartPanY-(W-this.pinchStartMidY)*0.003}}markInteracting(){if(this.interacting=!0,this.idleTimer!==void 0)window.clearTimeout(this.idleTimer),this.idleTimer=void 0}scheduleIdleResume(){if(this.idleTimer!==void 0)window.clearTimeout(this.idleTimer);this.idleTimer=window.setTimeout(()=>{this.interacting=!1,this.idleTimer=void 0},e$.IDLE_RESUME_MS)}handlePointerMove(J){if(!this.activePointers.has(J.pointerId))return;if(this.activePointers.set(J.pointerId,{x:J.clientX,y:J.clientY}),this.activePointers.size>=2){this.updatePinch(),this.markInteracting();return}if(!this.isDragging)return;let Q=J.clientX-this.prevX,$=J.clientY-this.prevY;if(this.prevX=J.clientX,this.prevY=J.clientY,!this.disablePan&&J.shiftKey)this.panX+=Q*0.003,this.panY-=$*0.003;else if(!this.disableRotate){let W=new PJ().setFromEuler(new IJ($*0.008,Q*0.008,0,"XYZ"));this.targetRotation.multiplyQuaternions(W,this.targetRotation)}}handlePointerUp(J){if(!this.activePointers.has(J.pointerId))return;if(this.activePointers.delete(J.pointerId),this.activePointers.size===0)this.isDragging=!1,this.container.classList.remove("dragging"),this.scheduleIdleResume();else if(this.activePointers.size===1){let[Q]=this.activePointers.values();this.isDragging=!0,this.prevX=Q.x,this.prevY=Q.y}}computeGrid(){if(!this.renderer||!this.camera)return;let J=this.renderStyle,Q=document.fullscreenElement===this,$=100;this.measureCtx.font=`${$}px ${t$}`;let Z=this.measureCtx.measureText("M").width/$||0.5,W=this.clientWidth||600,H=this.clientHeight||400,Y=Q&&this.baseCharWidth?Math.max(this.cols,Math.floor(W/this.baseCharWidth)):this.cols;if(this.fontSize=W/(Y*Z),this.charWidth=this.fontSize*Z,!Q)this.baseCharWidth=this.charWidth;let X=Math.max(1,Math.floor(H/this.fontSize));this.asciiEl.style.fontSize=`${this.fontSize}px`,this.asciiEl.style.lineHeight="1",this.cssW=Y*this.charWidth,this.cssH=X*this.fontSize,this.canvasEl.style.width=`${this.cssW}px`,this.canvasEl.style.height=`${this.cssH}px`,this.canvasEl.width=Math.round(this.cssW*this.dpr),this.canvasEl.height=Math.round(this.cssH*this.dpr),this.canvasCtx.setTransform(this.dpr,0,0,this.dpr,0,0),this.canvasCtx.font=`${this.fontSize}px ${t$}`,this.canvasCtx.textBaseline="top";let K=J==="braille"||J==="octant",U=K?Y*2:Y,G=K?X*4:X;if(this.termCols=Y,this.termRows=X,U!==this.ptCols||G!==this.ptRows){if(this.ptCols=U,this.ptRows=G,this.renderTarget)this.renderTarget.dispose();this.renderTarget=new W8(U,G,{depthBuffer:!0,stencilBuffer:!1}),this.pixelBuffer=new Uint8Array(U*G*4),this.camera.aspect=U/G,this.camera.updateProjectionMatrix()}}syncUi(){let J=this.renderStyle==="octant";this.asciiEl.style.display=J?"none":"block",this.canvasEl.style.display=J?"block":"none";let Q=this.invert?this.fg:this.bg,$=this.invert?this.bg:this.fg;this.container.style.background=Q,this.asciiEl.style.color=$}tick=()=>{if(this.animationId=requestAnimationFrame(this.tick),!this.model||!this.renderer||!this.camera||!this.pivot||!this.renderTarget||!this.pixelBuffer)return;if(this.autoRotate&&!this.interacting){let J=new PJ().setFromEuler(new IJ(0,0.012,0));this.targetRotation.multiplyQuaternions(J,this.targetRotation)}this.rotation.slerp(this.targetRotation,0.15),this.pivot.setRotationFromQuaternion(this.rotation),this.distance+=(this.targetDistance-this.distance)*0.15,this.camera.position.set(this.panX,this.panY,this.distance),this.camera.lookAt(this.panX,this.panY,0),this.renderer.setRenderTarget(this.renderTarget),this.renderer.render(this.scene,this.camera),this.renderer.readRenderTargetPixels(this.renderTarget,0,0,this.ptCols,this.ptRows,this.pixelBuffer),this.renderer.setRenderTarget(null),this.drawFrame()};luminanceAt(J,Q){let Z=((this.ptRows-1-Q)*this.ptCols+J)*4,W=this.pixelBuffer;return(W[Z]*0.299+W[Z+1]*0.587+W[Z+2]*0.114)/255}drawFrame(){if(this.rowStrings.length!==this.termRows)this.rowStrings=Array(this.termRows);if(this.renderStyle==="octant"){this.canvasCtx.clearRect(0,0,this.cssW,this.cssH);let J=4;for(let Q=0;Q<this.termRows;Q++){let $=Q*this.fontSize,Z=0,W=-1,H="";for(let Y=0;Y<this.termCols;Y++){let X=0,K=0;for(let q=0;q<4;q++){let O=Q*4+q,R=EY[q];for(let M=0;M<2;M++){let N=Y*2+M,F=this.luminanceAt(N,O);if(K+=F,F>R[M])X|=1<<G1[q][M]}}let U=this.invert?1-K/8:K/8,G=Math.round(U*255/J)*J,E=q1[X];if(G!==W){if(H)this.canvasCtx.fillStyle=`rgb(${W},${W},${W})`,this.canvasCtx.fillText(H,Z*this.charWidth,$);Z=Y,W=G,H=E}else H+=E}if(H)this.canvasCtx.fillStyle=`rgb(${W},${W},${W})`,this.canvasCtx.fillText(H,Z*this.charWidth,$)}}else if(this.renderStyle==="braille"){for(let J=0;J<this.termRows;J++){let Q="";for(let $=0;$<this.termCols;$++){let Z=0;for(let W=0;W<4;W++){let H=J*4+W,Y=EY[W];for(let X=0;X<2;X++){let K=$*2+X;if(this.luminanceAt(K,H)>Y[X])Z|=1<<U1[W][X]}}Q+=String.fromCharCode(10240+Z)}this.rowStrings[J]=Q}this.asciiEl.textContent=this.rowStrings.join(`
`)}else{let J=GY[this.ramp],Q=J.length-1;for(let $=0;$<this.termRows;$++){let Z="";for(let W=0;W<this.termCols;W++){let H=this.luminanceAt(W,$);Z+=J[Math.round(H*Q)]}this.rowStrings[$]=Z}this.asciiEl.textContent=this.rowStrings.join(`
`)}}resetView(){this.rotation.identity(),this.targetRotation.identity(),this.distance=this.initialDistance,this.targetDistance=this.initialDistance,this.panX=0,this.panY=0}}customElements.define("ascii-model-viewer",e$);export{e$ as AsciiModelViewer};
