var ZZ="179";var WZ=0,e7=1,KZ=2;var JQ=1,HZ=2,oJ=3,Y9=0,SJ=1,aJ=2,F8=0,f9=1,QQ=2,$Q=3,ZQ=4,YZ=5,X9=100,XZ=101,UZ=102,GZ=103,NZ=104,EZ=200,qZ=201,DZ=202,OZ=203,FZ=204,RZ=205,kZ=206,MZ=207,VZ=208,LZ=209,zZ=210,BZ=211,IZ=212,_Z=213,wZ=214,y6=0,v6=1,f6=2,b9=3,b6=4,h6=5,x6=6,g6=7,CZ=0,PZ=1,AZ=2,X8=0,TZ=1,SZ=2,jZ=3,yZ=4,vZ=5,fZ=6,bZ=7;var U9=301,S8=302,p6=303,m6=304,h9=306,hZ=1000,xZ=1001,gZ=1002,G9=1003,pZ=1004;var x9=1005;var j8=1006,d6=1007;var N9=1008;var R8=1009,mZ=1010,dZ=1011,g9=1012,WQ=1013,E9=1014,k8=1015,p9=1016,KQ=1017,HQ=1018,q9=1020,lZ=35902,uZ=1021,cZ=1022,rJ=1023,l6=1026,m9=1027,nZ=1028,YQ=1029,sZ=1030,XQ=1031;var UQ=1033,u6=33776,c6=33777,n6=33778,s6=33779,GQ=35840,NQ=35841,EQ=35842,qQ=35843,DQ=36196,OQ=37492,FQ=37496,RQ=37808,kQ=37809,MQ=37810,VQ=37811,LQ=37812,zQ=37813,BQ=37814,IQ=37815,_Q=37816,wQ=37817,CQ=37818,PQ=37819,AQ=37820,TQ=37821,i6=36492,SQ=36494,jQ=36495,iZ=36283,yQ=36284,vQ=36285,fQ=36286;var oZ=3201;var aZ=0,rZ=1,y8="",o6="srgb",d9="srgb-linear",bQ="linear",t0="srgb";var tZ=512,eZ=513,JW=514,hQ=515,QW=516,$W=517,ZW=518,WW=519;var xQ="300 es",gQ=2000;class M8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var RJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var w7=Math.PI/180,T6=180/Math.PI;function l9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(RJ[J&255]+RJ[J>>8&255]+RJ[J>>16&255]+RJ[J>>24&255]+"-"+RJ[Q&255]+RJ[Q>>8&255]+"-"+RJ[Q>>16&15|64]+RJ[Q>>24&255]+"-"+RJ[$&63|128]+RJ[$>>8&255]+"-"+RJ[$>>16&255]+RJ[$>>24&255]+RJ[Z&255]+RJ[Z>>8&255]+RJ[Z>>16&255]+RJ[Z>>24&255]).toLowerCase()}function x0(J,Q,$){return Math.max(Q,Math.min($,J))}function RK(J,Q){return(J%Q+Q)%Q}function C7(J,Q,$){return(1-$)*J+$*Q}function P9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function wJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class d0{constructor(J=0,Q=0){d0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(x0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(x0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],G=$[Z+3],N=W[K+0],E=W[K+1],O=W[K+2],R=W[K+3];if(H===0){J[Q+0]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G;return}if(H===1){J[Q+0]=N,J[Q+1]=E,J[Q+2]=O,J[Q+3]=R;return}if(G!==R||Y!==N||X!==E||U!==O){let M=1-H,q=Y*N+X*E+U*O+G*R,D=q>=0?1:-1,I=1-q*q;if(I>Number.EPSILON){let w=Math.sqrt(I),T=Math.atan2(w,q*D);M=Math.sin(M*T)/w,H=Math.sin(H*T)/w}let L=H*D;if(Y=Y*M+N*L,X=X*M+E*L,U=U*M+O*L,G=G*M+R*L,M===1-H){let w=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=w,X*=w,U*=w,G*=w}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],G=W[K],N=W[K+1],E=W[K+2],O=W[K+3];return J[Q]=H*O+U*G+Y*E-X*N,J[Q+1]=Y*O+U*N+X*G-H*E,J[Q+2]=X*O+U*E+H*N-Y*G,J[Q+3]=U*O-H*G-Y*N-X*E,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),G=H(W/2),N=Y($/2),E=Y(Z/2),O=Y(W/2);switch(K){case"XYZ":this._x=N*U*G+X*E*O,this._y=X*E*G-N*U*O,this._z=X*U*O+N*E*G,this._w=X*U*G-N*E*O;break;case"YXZ":this._x=N*U*G+X*E*O,this._y=X*E*G-N*U*O,this._z=X*U*O-N*E*G,this._w=X*U*G+N*E*O;break;case"ZXY":this._x=N*U*G-X*E*O,this._y=X*E*G+N*U*O,this._z=X*U*O+N*E*G,this._w=X*U*G-N*E*O;break;case"ZYX":this._x=N*U*G-X*E*O,this._y=X*E*G+N*U*O,this._z=X*U*O-N*E*G,this._w=X*U*G+N*E*O;break;case"YZX":this._x=N*U*G+X*E*O,this._y=X*E*G+N*U*O,this._z=X*U*O-N*E*G,this._w=X*U*G-N*E*O;break;case"XZY":this._x=N*U*G-X*E*O,this._y=X*E*G-N*U*O,this._z=X*U*O+N*E*G,this._w=X*U*G+N*E*O;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],N=$+H+G;if(N>0){let E=0.5/Math.sqrt(N+1);this._w=0.25/E,this._x=(U-Y)*E,this._y=(W-X)*E,this._z=(K-Z)*E}else if($>H&&$>G){let E=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/E,this._x=0.25*E,this._y=(Z+K)/E,this._z=(W+X)/E}else if(H>G){let E=2*Math.sqrt(1+H-$-G);this._w=(W-X)/E,this._x=(Z+K)/E,this._y=0.25*E,this._z=(Y+U)/E}else{let E=2*Math.sqrt(1+G-$-H);this._w=(K-Z)/E,this._x=(W+X)/E,this._y=(Y+U)/E,this._z=0.25*E}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(x0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+Z*X-W*Y,this._y=Z*U+K*Y+W*H-$*X,this._z=W*U+K*X+$*Y-Z*H,this._w=K*U-$*H-Z*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let $=this._x,Z=this._y,W=this._z,K=this._w,H=K*J._w+$*J._x+Z*J._y+W*J._z;if(H<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,H=-H;else this.copy(J);if(H>=1)return this._w=K,this._x=$,this._y=Z,this._z=W,this;let Y=1-H*H;if(Y<=Number.EPSILON){let E=1-Q;return this._w=E*K+Q*this._w,this._x=E*$+Q*this._x,this._y=E*Z+Q*this._y,this._z=E*W+Q*this._z,this.normalize(),this}let X=Math.sqrt(Y),U=Math.atan2(X,H),G=Math.sin((1-Q)*U)/X,N=Math.sin(Q*U)/X;return this._w=K*G+this._w*N,this._x=$*G+this._x*N,this._y=Z*G+this._y*N,this._z=W*G+this._z*N,this._onChangeCallback(),this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class v{constructor(J=0,Q=0,$=0){v.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(j$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(j$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*Z-H*$),U=2*(H*Q-W*Z),G=2*(W*$-K*Q);return this.x=Q+Y*X+K*G-H*U,this.y=$+Y*U+H*X-W*G,this.z=Z+Y*G+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this.z=x0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this.z=x0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(x0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-W*H,this.y=W*K-$*Y,this.z=$*H-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return P7.copy(this).projectOnVector(J),this.sub(P7)}reflect(J){return this.sub(P7.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(x0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var P7=new v,j$=new jJ;class y0{constructor(J,Q,$,Z,W,K,H,Y,X){if(y0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X)}set(J,Q,$,Z,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],N=$[2],E=$[5],O=$[8],R=Z[0],M=Z[3],q=Z[6],D=Z[1],I=Z[4],L=Z[7],w=Z[2],T=Z[5],_=Z[8];return W[0]=K*R+H*D+Y*w,W[3]=K*M+H*I+Y*T,W[6]=K*q+H*L+Y*_,W[1]=X*R+U*D+G*w,W[4]=X*M+U*I+G*T,W[7]=X*q+U*L+G*_,W[2]=N*R+E*D+O*w,W[5]=N*M+E*I+O*T,W[8]=N*q+E*L+O*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*W*U+$*H*Y+Z*W*X-Z*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,N=H*Y-U*W,E=X*W-K*Y,O=Q*G+$*N+Z*E;if(O===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/O;return J[0]=G*R,J[1]=(Z*X-U*$)*R,J[2]=(H*$-Z*K)*R,J[3]=N*R,J[4]=(U*Q-Z*Y)*R,J[5]=(Z*W-H*Q)*R,J[6]=E*R,J[7]=($*Y-X*Q)*R,J[8]=(K*Q-$*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return this.premultiply(A7.makeScale(J,Q)),this}rotate(J){return this.premultiply(A7.makeRotation(-J)),this}translate(J,Q){return this.premultiply(A7.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var A7=new y0;function pQ(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function v9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function KW(){let J=v9("canvas");return J.style.display="block",J}var y$={};function T8(J){if(J in y$)return;y$[J]=!0,console.warn(J)}function HW(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var v$=new y0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),f$=new y0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function kK(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=Y8(W.r),W.g=Y8(W.g),W.b=Y8(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=H9(W.r),W.g=H9(W.g),W.b=H9(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return T8("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return T8("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:v$,fromXYZ:f$,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:v$,fromXYZ:f$,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var m0=kK();function Y8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function H9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var i8;class mQ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(i8===void 0)i8=v9("canvas");i8.width=J.width,i8.height=J.height;let Z=i8.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=i8}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=v9("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=Y8(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(Y8(Q[$]/255)*255);else Q[$]=Y8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var MK=0;class u9{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MK++}),this.uuid=l9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(T7(Z[K].image));else W.push(T7(Z[K]))}else W=T7(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function T7(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return mQ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var VK=0,S7=new v;class BJ extends M8{constructor(J=BJ.DEFAULT_IMAGE,Q=BJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,H=1023,Y=1009,X=BJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:VK++}),this.uuid=l9(),this.name="",this.source=new u9(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new d0(0,0),this.repeat=new d0(1,1),this.center=new d0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new y0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(S7).x}get height(){return this.source.getSize(S7).y}get depth(){return this.source.getSize(S7).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}BJ.DEFAULT_IMAGE=null;BJ.DEFAULT_MAPPING=300;BJ.DEFAULT_ANISOTROPY=1;class KJ{constructor(J=0,Q=0,$=0,Z=1){KJ.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],N=Y[1],E=Y[5],O=Y[9],R=Y[2],M=Y[6],q=Y[10];if(Math.abs(U-N)<0.01&&Math.abs(G-R)<0.01&&Math.abs(O-M)<0.01){if(Math.abs(U+N)<0.1&&Math.abs(G+R)<0.1&&Math.abs(O+M)<0.1&&Math.abs(X+E+q-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let I=(X+1)/2,L=(E+1)/2,w=(q+1)/2,T=(U+N)/4,_=(G+R)/4,A=(O+M)/4;if(I>L&&I>w)if(I<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(I),Z=T/$,W=_/$;else if(L>w)if(L<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(L),$=T/Z,W=A/Z;else if(w<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(w),$=_/W,Z=A/W;return this.set($,Z,W,Q),this}let D=Math.sqrt((M-O)*(M-O)+(G-R)*(G-R)+(N-U)*(N-U));if(Math.abs(D)<0.001)D=1;return this.x=(M-O)/D,this.y=(G-R)/D,this.z=(N-U)/D,this.w=Math.acos((X+E+q-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=x0(this.x,J.x,Q.x),this.y=x0(this.y,J.y,Q.y),this.z=x0(this.z,J.z,Q.z),this.w=x0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=x0(this.x,J,Q),this.y=x0(this.y,J,Q),this.z=x0(this.z,J,Q),this.w=x0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(x0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dQ extends M8{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new KJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new KJ(0,0,J,Q);let Z={width:J,height:Q,depth:$.depth},W=new BJ(Z);this.textures=[];let K=$.count;for(let H=0;H<K;H++)this.textures[H]=W.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new u9(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cJ extends dQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class a6 extends BJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class lQ extends BJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U8{constructor(J=new v(1/0,1/0,1/0),Q=new v(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(dJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(dJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=dJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,dJ);else dJ.fromBufferAttribute(W,K);dJ.applyMatrix4(J.matrixWorld),this.expandByPoint(dJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();X6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();X6.copy($.boundingBox)}X6.applyMatrix4(J.matrixWorld),this.union(X6)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,dJ),dJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(A9),U6.subVectors(this.max,A9),o8.subVectors(J.a,A9),a8.subVectors(J.b,A9),r8.subVectors(J.c,A9),G8.subVectors(a8,o8),N8.subVectors(r8,a8),w8.subVectors(o8,r8);let Q=[0,-G8.z,G8.y,0,-N8.z,N8.y,0,-w8.z,w8.y,G8.z,0,-G8.x,N8.z,0,-N8.x,w8.z,0,-w8.x,-G8.y,G8.x,0,-N8.y,N8.x,0,-w8.y,w8.x,0];if(!j7(Q,o8,a8,r8,U6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!j7(Q,o8,a8,r8,U6))return!1;return G6.crossVectors(G8,N8),Q=[G6.x,G6.y,G6.z],j7(Q,o8,a8,r8,U6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,dJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(dJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return J8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),J8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),J8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),J8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),J8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),J8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),J8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),J8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(J8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var J8=[new v,new v,new v,new v,new v,new v,new v,new v],dJ=new v,X6=new U8,o8=new v,a8=new v,r8=new v,G8=new v,N8=new v,w8=new v,A9=new v,U6=new v,G6=new v,C8=new v;function j7(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){C8.fromArray(J,K);let Y=W.x*Math.abs(C8.x)+W.y*Math.abs(C8.y)+W.z*Math.abs(C8.z),X=Q.dot(C8),U=$.dot(C8),G=Z.dot(C8);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var LK=new U8,T9=new v,y7=new v;class v8{constructor(J=new v,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else LK.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;T9.subVectors(J,this.center);let Q=T9.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(T9,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else y7.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(T9.copy(J.center).add(y7)),this.expandByPoint(T9.copy(J.center).sub(y7));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var Q8=new v,v7=new v,N6=new v,E8=new v,f7=new v,E6=new v,b7=new v;class c9{constructor(J=new v,Q=new v(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Q8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=Q8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return Q8.copy(this.origin).addScaledVector(this.direction,Q),Q8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){v7.copy(J).add(Q).multiplyScalar(0.5),N6.copy(Q).sub(J).normalize(),E8.copy(this.origin).sub(v7);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(N6),H=E8.dot(this.direction),Y=-E8.dot(N6),X=E8.lengthSq(),U=Math.abs(1-K*K),G,N,E,O;if(U>0)if(G=K*Y-H,N=K*H-Y,O=W*U,G>=0)if(N>=-O)if(N<=O){let R=1/U;G*=R,N*=R,E=G*(G+K*N+2*H)+N*(K*G+N+2*Y)+X}else N=W,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;else N=-W,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;else if(N<=-O)G=Math.max(0,-(-K*W+H)),N=G>0?-W:Math.min(Math.max(-W,-Y),W),E=-G*G+N*(N+2*Y)+X;else if(N<=O)G=0,N=Math.min(Math.max(-W,-Y),W),E=N*(N+2*Y)+X;else G=Math.max(0,-(K*W+H)),N=G>0?W:Math.min(Math.max(-W,-Y),W),E=-G*G+N*(N+2*Y)+X;else N=K>0?-W:W,G=Math.max(0,-(K*N+H)),E=-G*G+N*(N+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy(v7).addScaledVector(N6,N);return E}intersectSphere(J,Q){Q8.subVectors(J.center,this.origin);let $=Q8.dot(this.direction),Z=Q8.dot(Q8)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,N=this.origin;if(X>=0)$=(J.min.x-N.x)*X,Z=(J.max.x-N.x)*X;else $=(J.max.x-N.x)*X,Z=(J.min.x-N.x)*X;if(U>=0)W=(J.min.y-N.y)*U,K=(J.max.y-N.y)*U;else W=(J.max.y-N.y)*U,K=(J.min.y-N.y)*U;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(G>=0)H=(J.min.z-N.z)*G,Y=(J.max.z-N.z)*G;else H=(J.max.z-N.z)*G,Y=(J.min.z-N.z)*G;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,Q8)!==null}intersectTriangle(J,Q,$,Z,W){f7.subVectors(Q,J),E6.subVectors($,J),b7.crossVectors(f7,E6);let K=this.direction.dot(b7),H;if(K>0){if(Z)return null;H=1}else if(K<0)H=-1,K=-K;else return null;E8.subVectors(this.origin,J);let Y=H*this.direction.dot(E6.crossVectors(E8,E6));if(Y<0)return null;let X=H*this.direction.dot(f7.cross(E8));if(X<0)return null;if(Y+X>K)return null;let U=-H*E8.dot(b7);if(U<0)return null;return this.at(U/K,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $J{constructor(J,Q,$,Z,W,K,H,Y,X,U,G,N,E,O,R,M){if($J.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X,U,G,N,E,O,R,M)}set(J,Q,$,Z,W,K,H,Y,X,U,G,N,E,O,R,M){let q=this.elements;return q[0]=J,q[4]=Q,q[8]=$,q[12]=Z,q[1]=W,q[5]=K,q[9]=H,q[13]=Y,q[2]=X,q[6]=U,q[10]=G,q[14]=N,q[3]=E,q[7]=O,q[11]=R,q[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $J().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,$=J.elements,Z=1/t8.setFromMatrixColumn(J,0).length(),W=1/t8.setFromMatrixColumn(J,1).length(),K=1/t8.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let N=K*U,E=K*G,O=H*U,R=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=E+O*X,Q[5]=N-R*X,Q[9]=-H*Y,Q[2]=R-N*X,Q[6]=O+E*X,Q[10]=K*Y}else if(J.order==="YXZ"){let N=Y*U,E=Y*G,O=X*U,R=X*G;Q[0]=N+R*H,Q[4]=O*H-E,Q[8]=K*X,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=E*H-O,Q[6]=R+N*H,Q[10]=K*Y}else if(J.order==="ZXY"){let N=Y*U,E=Y*G,O=X*U,R=X*G;Q[0]=N-R*H,Q[4]=-K*G,Q[8]=O+E*H,Q[1]=E+O*H,Q[5]=K*U,Q[9]=R-N*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let N=K*U,E=K*G,O=H*U,R=H*G;Q[0]=Y*U,Q[4]=O*X-E,Q[8]=N*X+R,Q[1]=Y*G,Q[5]=R*X+N,Q[9]=E*X-O,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let N=K*Y,E=K*X,O=H*Y,R=H*X;Q[0]=Y*U,Q[4]=R-N*G,Q[8]=O*G+E,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=E*G+O,Q[10]=N-R*G}else if(J.order==="XZY"){let N=K*Y,E=K*X,O=H*Y,R=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=N*G+R,Q[5]=K*U,Q[9]=E*G-O,Q[2]=O*G-E,Q[6]=H*U,Q[10]=R*G+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(zK,J,BK)}lookAt(J,Q,$){let Z=this.elements;if(AJ.subVectors(J,Q),AJ.lengthSq()===0)AJ.z=1;if(AJ.normalize(),q8.crossVectors($,AJ),q8.lengthSq()===0){if(Math.abs($.z)===1)AJ.x+=0.0001;else AJ.z+=0.0001;AJ.normalize(),q8.crossVectors($,AJ)}return q8.normalize(),q6.crossVectors(AJ,q8),Z[0]=q8.x,Z[4]=q6.x,Z[8]=AJ.x,Z[1]=q8.y,Z[5]=q6.y,Z[9]=AJ.y,Z[2]=q8.z,Z[6]=q6.z,Z[10]=AJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],N=$[9],E=$[13],O=$[2],R=$[6],M=$[10],q=$[14],D=$[3],I=$[7],L=$[11],w=$[15],T=Z[0],_=Z[4],A=Z[8],m=Z[12],z=Z[1],V=Z[5],j=Z[9],l=Z[13],p=Z[2],c=Z[6],o=Z[10],u=Z[14],r=Z[3],x=Z[7],Z0=Z[11],U0=Z[15];return W[0]=K*T+H*z+Y*p+X*r,W[4]=K*_+H*V+Y*c+X*x,W[8]=K*A+H*j+Y*o+X*Z0,W[12]=K*m+H*l+Y*u+X*U0,W[1]=U*T+G*z+N*p+E*r,W[5]=U*_+G*V+N*c+E*x,W[9]=U*A+G*j+N*o+E*Z0,W[13]=U*m+G*l+N*u+E*U0,W[2]=O*T+R*z+M*p+q*r,W[6]=O*_+R*V+M*c+q*x,W[10]=O*A+R*j+M*o+q*Z0,W[14]=O*m+R*l+M*u+q*U0,W[3]=D*T+I*z+L*p+w*r,W[7]=D*_+I*V+L*c+w*x,W[11]=D*A+I*j+L*o+w*Z0,W[15]=D*m+I*l+L*u+w*U0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],N=J[10],E=J[14],O=J[3],R=J[7],M=J[11],q=J[15];return O*(+W*Y*G-Z*X*G-W*H*N+$*X*N+Z*H*E-$*Y*E)+R*(+Q*Y*E-Q*X*N+W*K*N-Z*K*E+Z*X*U-W*Y*U)+M*(+Q*X*G-Q*H*E-W*K*G+$*K*E+W*H*U-$*X*U)+q*(-Z*H*U-Q*Y*G+Q*H*N+Z*K*G-$*K*N+$*Y*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],N=J[10],E=J[11],O=J[12],R=J[13],M=J[14],q=J[15],D=G*M*X-R*N*X+R*Y*E-H*M*E-G*Y*q+H*N*q,I=O*N*X-U*M*X-O*Y*E+K*M*E+U*Y*q-K*N*q,L=U*R*X-O*G*X+O*H*E-K*R*E-U*H*q+K*G*q,w=O*G*Y-U*R*Y-O*H*N+K*R*N+U*H*M-K*G*M,T=Q*D+$*I+Z*L+W*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/T;return J[0]=D*_,J[1]=(R*N*W-G*M*W-R*Z*E+$*M*E+G*Z*q-$*N*q)*_,J[2]=(H*M*W-R*Y*W+R*Z*X-$*M*X-H*Z*q+$*Y*q)*_,J[3]=(G*Y*W-H*N*W-G*Z*X+$*N*X+H*Z*E-$*Y*E)*_,J[4]=I*_,J[5]=(U*M*W-O*N*W+O*Z*E-Q*M*E-U*Z*q+Q*N*q)*_,J[6]=(O*Y*W-K*M*W-O*Z*X+Q*M*X+K*Z*q-Q*Y*q)*_,J[7]=(K*N*W-U*Y*W+U*Z*X-Q*N*X-K*Z*E+Q*Y*E)*_,J[8]=L*_,J[9]=(O*G*W-U*R*W-O*$*E+Q*R*E+U*$*q-Q*G*q)*_,J[10]=(K*R*W-O*H*W+O*$*X-Q*R*X-K*$*q+Q*H*q)*_,J[11]=(U*H*W-K*G*W-U*$*X+Q*G*X+K*$*E-Q*H*E)*_,J[12]=w*_,J[13]=(U*R*Z-O*G*Z+O*$*N-Q*R*N-U*$*M+Q*G*M)*_,J[14]=(O*H*Z-K*R*Z-O*$*Y+Q*R*Y+K*$*M-Q*H*M)*_,J[15]=(K*G*Z-U*H*Z+U*$*Y-Q*G*Y-K*$*N+Q*H*N)*_,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=W+W,U=K+K,G=H+H,N=W*X,E=W*U,O=W*G,R=K*U,M=K*G,q=H*G,D=Y*X,I=Y*U,L=Y*G,w=$.x,T=$.y,_=$.z;return Z[0]=(1-(R+q))*w,Z[1]=(E+L)*w,Z[2]=(O-I)*w,Z[3]=0,Z[4]=(E-L)*T,Z[5]=(1-(N+q))*T,Z[6]=(M+D)*T,Z[7]=0,Z[8]=(O+I)*_,Z[9]=(M-D)*_,Z[10]=(1-(N+R))*_,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements,W=t8.set(Z[0],Z[1],Z[2]).length(),K=t8.set(Z[4],Z[5],Z[6]).length(),H=t8.set(Z[8],Z[9],Z[10]).length();if(this.determinant()<0)W=-W;J.x=Z[12],J.y=Z[13],J.z=Z[14],lJ.copy(this);let X=1/W,U=1/K,G=1/H;return lJ.elements[0]*=X,lJ.elements[1]*=X,lJ.elements[2]*=X,lJ.elements[4]*=U,lJ.elements[5]*=U,lJ.elements[6]*=U,lJ.elements[8]*=G,lJ.elements[9]*=G,lJ.elements[10]*=G,Q.setFromRotationMatrix(lJ),$.x=W,$.y=K,$.z=H,this}makePerspective(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2*W/(Q-J),G=2*W/($-Z),N=(Q+J)/(Q-J),E=($+Z)/($-Z),O,R;if(Y)O=W/(K-W),R=K*W/(K-W);else if(H===2000)O=-(K+W)/(K-W),R=-2*K*W/(K-W);else if(H===2001)O=-K/(K-W),R=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=N,X[12]=0,X[1]=0,X[5]=G,X[9]=E,X[13]=0,X[2]=0,X[6]=0,X[10]=O,X[14]=R,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-Z),N=-(Q+J)/(Q-J),E=-($+Z)/($-Z),O,R;if(Y)O=1/(K-W),R=K/(K-W);else if(H===2000)O=-2/(K-W),R=-(K+W)/(K-W);else if(H===2001)O=-1/(K-W),R=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=N,X[1]=0,X[5]=G,X[9]=0,X[13]=E,X[2]=0,X[6]=0,X[10]=O,X[14]=R,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var t8=new v,lJ=new $J,zK=new v(0,0,0),BK=new v(1,1,1),q8=new v,q6=new v,AJ=new v,b$=new $J,h$=new jJ;class IJ{constructor(J=0,Q=0,$=0,Z=IJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],G=Z[2],N=Z[6],E=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(x0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,E),this._z=Math.atan2(-K,W);else this._x=Math.atan2(N,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-x0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,E),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(x0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-G,E),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-x0(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(N,E),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(x0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(H,E);break;case"XZY":if(this._z=Math.asin(-x0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(N,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,E),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return b$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(b$,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return h$.setFromEuler(this),this.setFromQuaternion(h$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}IJ.DEFAULT_ORDER="XYZ";class r6{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var IK=0,x$=new v,e8=new jJ,$8=new $J,D6=new v,S9=new v,_K=new v,wK=new jJ,g$=new v(1,0,0),p$=new v(0,1,0),m$=new v(0,0,1),d$={type:"added"},CK={type:"removed"},J9={type:"childadded",child:null},h7={type:"childremoved",child:null};class GJ extends M8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:IK++}),this.uuid=l9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=GJ.DEFAULT_UP.clone();let J=new v,Q=new IJ,$=new jJ,Z=new v(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new $J},normalMatrix:{value:new y0}}),this.matrix=new $J,this.matrixWorld=new $J,this.matrixAutoUpdate=GJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=GJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r6,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return e8.setFromAxisAngle(J,Q),this.quaternion.multiply(e8),this}rotateOnWorldAxis(J,Q){return e8.setFromAxisAngle(J,Q),this.quaternion.premultiply(e8),this}rotateX(J){return this.rotateOnAxis(g$,J)}rotateY(J){return this.rotateOnAxis(p$,J)}rotateZ(J){return this.rotateOnAxis(m$,J)}translateOnAxis(J,Q){return x$.copy(J).applyQuaternion(this.quaternion),this.position.add(x$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(g$,J)}translateY(J){return this.translateOnAxis(p$,J)}translateZ(J){return this.translateOnAxis(m$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4($8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)D6.copy(J);else D6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),S9.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)$8.lookAt(S9,D6,this.up);else $8.lookAt(D6,S9,this.up);if(this.quaternion.setFromRotationMatrix($8),Z)$8.extractRotation(Z.matrixWorld),e8.setFromRotationMatrix($8),this.quaternion.premultiply(e8.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(d$),J9.child=J,this.dispatchEvent(J9),J9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(CK),h7.child=J,this.dispatchEvent(h7),h7.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),$8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),$8.multiply(J.parent.matrixWorld);return J.applyMatrix4($8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(d$),J9.child=J,this.dispatchEvent(J9),J9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(S9,J,_K),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(S9,wK,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];W(J.shapes,G)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),G=K(J.shapes),N=K(J.skeletons),E=K(J.animations),O=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(N.length>0)$.skeletons=N;if(E.length>0)$.animations=E;if(O.length>0)$.nodes=O}return $.object=Z,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}GJ.DEFAULT_UP=new v(0,1,0);GJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;GJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var uJ=new v,Z8=new v,x7=new v,W8=new v,Q9=new v,$9=new v,l$=new v,g7=new v,p7=new v,m7=new v,d7=new KJ,l7=new KJ,u7=new KJ;class xJ{constructor(J=new v,Q=new v,$=new v){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),uJ.subVectors(J,Q),Z.cross(uJ);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){uJ.subVectors(Z,Q),Z8.subVectors($,Q),x7.subVectors(J,Q);let K=uJ.dot(uJ),H=uJ.dot(Z8),Y=uJ.dot(x7),X=Z8.dot(Z8),U=Z8.dot(x7),G=K*X-H*H;if(G===0)return W.set(0,0,0),null;let N=1/G,E=(X*Y-H*U)*N,O=(K*U-H*Y)*N;return W.set(1-E-O,O,E)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,W8)===null)return!1;return W8.x>=0&&W8.y>=0&&W8.x+W8.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,Y){if(this.getBarycoord(J,Q,$,Z,W8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,W8.x),Y.addScaledVector(K,W8.y),Y.addScaledVector(H,W8.z),Y}static getInterpolatedAttribute(J,Q,$,Z,W,K){return d7.setScalar(0),l7.setScalar(0),u7.setScalar(0),d7.fromBufferAttribute(J,Q),l7.fromBufferAttribute(J,$),u7.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(d7,W.x),K.addScaledVector(l7,W.y),K.addScaledVector(u7,W.z),K}static isFrontFacing(J,Q,$,Z){return uJ.subVectors($,Q),Z8.subVectors(J,Q),uJ.cross(Z8).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return uJ.subVectors(this.c,this.b),Z8.subVectors(this.a,this.b),uJ.cross(Z8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return xJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return xJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return xJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return xJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return xJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,H;Q9.subVectors(Z,$),$9.subVectors(W,$),g7.subVectors(J,$);let Y=Q9.dot(g7),X=$9.dot(g7);if(Y<=0&&X<=0)return Q.copy($);p7.subVectors(J,Z);let U=Q9.dot(p7),G=$9.dot(p7);if(U>=0&&G<=U)return Q.copy(Z);let N=Y*G-U*X;if(N<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(Q9,K);m7.subVectors(J,W);let E=Q9.dot(m7),O=$9.dot(m7);if(O>=0&&E<=O)return Q.copy(W);let R=E*X-Y*O;if(R<=0&&X>=0&&O<=0)return H=X/(X-O),Q.copy($).addScaledVector($9,H);let M=U*O-E*G;if(M<=0&&G-U>=0&&E-O>=0)return l$.subVectors(W,Z),H=(G-U)/(G-U+(E-O)),Q.copy(Z).addScaledVector(l$,H);let q=1/(M+R+N);return K=R*q,H=N*q,Q.copy($).addScaledVector(Q9,K).addScaledVector($9,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var YW={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},D8={h:0,s:0,l:0},O6={h:0,s:0,l:0};function c7(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class j0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,m0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=m0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,m0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=m0.workingColorSpace){if(J=RK(J,1),Q=x0(Q,0,1),$=x0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=c7(K,W,J+0.3333333333333333),this.g=c7(K,W,J),this.b=c7(K,W,J-0.3333333333333333)}return m0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=YW[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=Y8(J.r),this.g=Y8(J.g),this.b=Y8(J.b),this}copyLinearToSRGB(J){return this.r=H9(J.r),this.g=H9(J.g),this.b=H9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return m0.workingToColorSpace(kJ.copy(this),J),Math.round(x0(kJ.r*255,0,255))*65536+Math.round(x0(kJ.g*255,0,255))*256+Math.round(x0(kJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=m0.workingColorSpace){m0.workingToColorSpace(kJ.copy(this),Q);let{r:$,g:Z,b:W}=kJ,K=Math.max($,Z,W),H=Math.min($,Z,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let G=K-H;switch(X=U<=0.5?G/(K+H):G/(2-K-H),K){case $:Y=(Z-W)/G+(Z<W?6:0);break;case Z:Y=(W-$)/G+2;break;case W:Y=($-Z)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=m0.workingColorSpace){return m0.workingToColorSpace(kJ.copy(this),Q),J.r=kJ.r,J.g=kJ.g,J.b=kJ.b,J}getStyle(J="srgb"){m0.workingToColorSpace(kJ.copy(this),J);let{r:Q,g:$,b:Z}=kJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(D8),this.setHSL(D8.h+J,D8.s+Q,D8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(D8),J.getHSL(O6);let $=C7(D8.h,O6.h,Q),Z=C7(D8.s,O6.s,Q),W=C7(D8.l,O6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var kJ=new j0;j0.NAMES=YW;var PK=0;class yJ extends M8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:PK++}),this.uuid=l9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class t6 extends yJ{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new IJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var XJ=new v,F6=new d0,AK=0;class gJ{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AK++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)F6.fromBufferAttribute(this,Q),F6.applyMatrix3(J),this.setXY(Q,F6.x,F6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyMatrix3(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyMatrix4(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyNormalMatrix(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)XJ.fromBufferAttribute(this,Q),XJ.transformDirection(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=P9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=wJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=P9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=P9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=P9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=P9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array),Z=wJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array),Z=wJ(Z,this.array),W=wJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class e6 extends gJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class J7 extends gJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class YJ extends gJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var TK=0,hJ=new $J,n7=new GJ,Z9=new v,TJ=new U8,j9=new U8,DJ=new v;class MJ extends M8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TK++}),this.uuid=l9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((pQ(J))?J7:e6)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new y0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return hJ.makeRotationFromQuaternion(J),this.applyMatrix4(hJ),this}rotateX(J){return hJ.makeRotationX(J),this.applyMatrix4(hJ),this}rotateY(J){return hJ.makeRotationY(J),this.applyMatrix4(hJ),this}rotateZ(J){return hJ.makeRotationZ(J),this.applyMatrix4(hJ),this}translate(J,Q,$){return hJ.makeTranslation(J,Q,$),this.applyMatrix4(hJ),this}scale(J,Q,$){return hJ.makeScale(J,Q,$),this.applyMatrix4(hJ),this}lookAt(J){return n7.lookAt(J),n7.updateMatrix(),this.applyMatrix4(n7.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Z9).negate(),this.translate(Z9.x,Z9.y,Z9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new YJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new U8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new v(-1/0,-1/0,-1/0),new v(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(TJ.setFromBufferAttribute(W),this.morphTargetsRelative)DJ.addVectors(this.boundingBox.min,TJ.min),this.boundingBox.expandByPoint(DJ),DJ.addVectors(this.boundingBox.max,TJ.max),this.boundingBox.expandByPoint(DJ);else this.boundingBox.expandByPoint(TJ.min),this.boundingBox.expandByPoint(TJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new v8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new v,1/0);return}if(J){let $=this.boundingSphere.center;if(TJ.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(j9.setFromBufferAttribute(H),this.morphTargetsRelative)DJ.addVectors(TJ.min,j9.min),TJ.expandByPoint(DJ),DJ.addVectors(TJ.max,j9.max),TJ.expandByPoint(DJ);else TJ.expandByPoint(j9.min),TJ.expandByPoint(j9.max)}TJ.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)DJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(DJ));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(DJ.fromBufferAttribute(H,X),Y)Z9.fromBufferAttribute(J,X),DJ.add(Z9);Z=Math.max(Z,$.distanceToSquared(DJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new gJ(new Float32Array(4*$.count),4));let K=this.getAttribute("tangent"),H=[],Y=[];for(let A=0;A<$.count;A++)H[A]=new v,Y[A]=new v;let X=new v,U=new v,G=new v,N=new d0,E=new d0,O=new d0,R=new v,M=new v;function q(A,m,z){X.fromBufferAttribute($,A),U.fromBufferAttribute($,m),G.fromBufferAttribute($,z),N.fromBufferAttribute(W,A),E.fromBufferAttribute(W,m),O.fromBufferAttribute(W,z),U.sub(X),G.sub(X),E.sub(N),O.sub(N);let V=1/(E.x*O.y-O.x*E.y);if(!isFinite(V))return;R.copy(U).multiplyScalar(O.y).addScaledVector(G,-E.y).multiplyScalar(V),M.copy(G).multiplyScalar(E.x).addScaledVector(U,-O.x).multiplyScalar(V),H[A].add(R),H[m].add(R),H[z].add(R),Y[A].add(M),Y[m].add(M),Y[z].add(M)}let D=this.groups;if(D.length===0)D=[{start:0,count:J.count}];for(let A=0,m=D.length;A<m;++A){let z=D[A],V=z.start,j=z.count;for(let l=V,p=V+j;l<p;l+=3)q(J.getX(l+0),J.getX(l+1),J.getX(l+2))}let I=new v,L=new v,w=new v,T=new v;function _(A){w.fromBufferAttribute(Z,A),T.copy(w);let m=H[A];I.copy(m),I.sub(w.multiplyScalar(w.dot(m))).normalize(),L.crossVectors(T,m);let V=L.dot(Y[A])<0?-1:1;K.setXYZW(A,I.x,I.y,I.z,V)}for(let A=0,m=D.length;A<m;++A){let z=D[A],V=z.start,j=z.count;for(let l=V,p=V+j;l<p;l+=3)_(J.getX(l+0)),_(J.getX(l+1)),_(J.getX(l+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new gJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,E=$.count;N<E;N++)$.setXYZ(N,0,0,0);let Z=new v,W=new v,K=new v,H=new v,Y=new v,X=new v,U=new v,G=new v;if(J)for(let N=0,E=J.count;N<E;N+=3){let O=J.getX(N+0),R=J.getX(N+1),M=J.getX(N+2);Z.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,M),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),H.fromBufferAttribute($,O),Y.fromBufferAttribute($,R),X.fromBufferAttribute($,M),H.add(U),Y.add(U),X.add(U),$.setXYZ(O,H.x,H.y,H.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(M,X.x,X.y,X.z)}else for(let N=0,E=Q.count;N<E;N+=3)Z.fromBufferAttribute(Q,N+0),W.fromBufferAttribute(Q,N+1),K.fromBufferAttribute(Q,N+2),U.subVectors(K,W),G.subVectors(Z,W),U.cross(G),$.setXYZ(N+0,U.x,U.y,U.z),$.setXYZ(N+1,U.x,U.y,U.z),$.setXYZ(N+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)DJ.fromBufferAttribute(J,Q),DJ.normalize(),J.setXYZ(Q,DJ.x,DJ.y,DJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,N=new X.constructor(Y.length*U),E=0,O=0;for(let R=0,M=Y.length;R<M;R++){if(H.isInterleavedBufferAttribute)E=Y[R]*H.data.stride+H.offset;else E=Y[R]*U;for(let q=0;q<U;q++)N[O++]=X[E++]}return new gJ(N,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new MJ,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,G=X.length;U<G;U++){let N=X[U],E=J(N,$);Y.push(E)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,N=X.length;G<N;G++){let E=X[G];U.push(E.toJSON(J.data))}if(U.length>0)Z[Y]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],G=W[X];for(let N=0,E=G.length;N<E;N++)U.push(G[N].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var u$=new $J,P8=new c9,R6=new v8,c$=new v,k6=new v,M6=new v,V6=new v,s7=new v,L6=new v,n$=new v,z6=new v;class FJ extends GJ{constructor(J=new MJ,Q=new t6){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){L6.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],G=W[Y];if(U===0)continue;if(s7.fromBufferAttribute(G,J),K)L6.addScaledVector(s7,U);else L6.addScaledVector(s7.sub(Q),U)}Q.add(L6)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(R6.copy($.boundingSphere),R6.applyMatrix4(W),P8.copy(J.ray).recast(J.near),R6.containsPoint(P8.origin)===!1){if(P8.intersectSphere(R6,c$)===null)return;if(P8.origin.distanceToSquared(c$)>(J.far-J.near)**2)return}if(u$.copy(W).invert(),P8.copy(J.ray).applyMatrix4(u$),$.boundingBox!==null){if(P8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,P8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,N=W.groups,E=W.drawRange;if(H!==null)if(Array.isArray(K))for(let O=0,R=N.length;O<R;O++){let M=N[O],q=K[M.materialIndex],D=Math.max(M.start,E.start),I=Math.min(H.count,Math.min(M.start+M.count,E.start+E.count));for(let L=D,w=I;L<w;L+=3){let T=H.getX(L),_=H.getX(L+1),A=H.getX(L+2);if(Z=B6(this,q,J,$,X,U,G,T,_,A),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=M.materialIndex,Q.push(Z)}}else{let O=Math.max(0,E.start),R=Math.min(H.count,E.start+E.count);for(let M=O,q=R;M<q;M+=3){let D=H.getX(M),I=H.getX(M+1),L=H.getX(M+2);if(Z=B6(this,K,J,$,X,U,G,D,I,L),Z)Z.faceIndex=Math.floor(M/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(K))for(let O=0,R=N.length;O<R;O++){let M=N[O],q=K[M.materialIndex],D=Math.max(M.start,E.start),I=Math.min(Y.count,Math.min(M.start+M.count,E.start+E.count));for(let L=D,w=I;L<w;L+=3){let T=L,_=L+1,A=L+2;if(Z=B6(this,q,J,$,X,U,G,T,_,A),Z)Z.faceIndex=Math.floor(L/3),Z.face.materialIndex=M.materialIndex,Q.push(Z)}}else{let O=Math.max(0,E.start),R=Math.min(Y.count,E.start+E.count);for(let M=O,q=R;M<q;M+=3){let D=M,I=M+1,L=M+2;if(Z=B6(this,K,J,$,X,U,G,D,I,L),Z)Z.faceIndex=Math.floor(M/3),Q.push(Z)}}}}function SK(J,Q,$,Z,W,K,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,K,W,!0,Y);else X=Z.intersectTriangle(W,K,H,Q.side===0,Y);if(X===null)return null;z6.copy(Y),z6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(z6);if(U<$.near||U>$.far)return null;return{distance:U,point:z6.clone(),object:J}}function B6(J,Q,$,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,k6),J.getVertexPosition(X,M6),J.getVertexPosition(U,V6);let G=SK(J,Q,$,Z,k6,M6,V6,n$);if(G){let N=new v;if(xJ.getBarycoord(n$,k6,M6,V6,N),W)G.uv=xJ.getInterpolatedAttribute(W,Y,X,U,N,new d0);if(K)G.uv1=xJ.getInterpolatedAttribute(K,Y,X,U,N,new d0);if(H){if(G.normal=xJ.getInterpolatedAttribute(H,Y,X,U,N,new v),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let E={a:Y,b:X,c:U,normal:new v,materialIndex:0};xJ.getNormal(k6,M6,V6,E.normal),G.face=E,G.barycoord=N}return G}class D9 extends MJ{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],G=[],N=0,E=0;O("z","y","x",-1,-1,$,Q,J,K,W,0),O("z","y","x",1,-1,$,Q,-J,K,W,1),O("x","z","y",1,1,J,$,Q,Z,K,2),O("x","z","y",1,-1,J,$,-Q,Z,K,3),O("x","y","z",1,-1,J,Q,$,Z,W,4),O("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(Y),this.setAttribute("position",new YJ(X,3)),this.setAttribute("normal",new YJ(U,3)),this.setAttribute("uv",new YJ(G,2));function O(R,M,q,D,I,L,w,T,_,A,m){let z=L/_,V=w/A,j=L/2,l=w/2,p=T/2,c=_+1,o=A+1,u=0,r=0,x=new v;for(let Z0=0;Z0<o;Z0++){let U0=Z0*V-l;for(let P0=0;P0<c;P0++){let g0=P0*z-j;x[R]=g0*D,x[M]=U0*I,x[q]=p,X.push(x.x,x.y,x.z),x[R]=0,x[M]=0,x[q]=T>0?1:-1,U.push(x.x,x.y,x.z),G.push(P0/_),G.push(1-Z0/A),u+=1}}for(let Z0=0;Z0<A;Z0++)for(let U0=0;U0<_;U0++){let P0=N+U0+c*Z0,g0=N+U0+c*(Z0+1),JJ=N+(U0+1)+c*(Z0+1),d=N+(U0+1)+c*Z0;Y.push(P0,g0,d),Y.push(g0,JJ,d),r+=6}H.addGroup(E,r,m),E+=r,N+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new D9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function f8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function VJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=f8(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function jK(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function uQ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return m0.workingColorSpace}var XW={clone:f8,merge:VJ},yK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tJ extends yJ{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yK,this.fragmentShader=vK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=f8(J.uniforms),this.uniformsGroups=jK(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class Q7 extends GJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $J,this.projectionMatrix=new $J,this.projectionMatrixInverse=new $J,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var O8=new v,s$=new d0,i$=new d0;class zJ extends Q7{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=T6*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(w7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return T6*2*Math.atan(Math.tan(w7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){O8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(O8.x,O8.y).multiplyScalar(-J/O8.z),O8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(O8.x,O8.y).multiplyScalar(-J/O8.z)}getViewSize(J,Q){return this.getViewBounds(J,s$,i$),Q.subVectors(i$,s$)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(w7*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y,Q-=K.offsetY*$/X,Z*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var W9=-90,K9=1;class cQ extends GJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new zJ(W9,K9,J,Q);Z.layers=this.layers,this.add(Z);let W=new zJ(W9,K9,J,Q);W.layers=this.layers,this.add(W);let K=new zJ(W9,K9,J,Q);K.layers=this.layers,this.add(K);let H=new zJ(W9,K9,J,Q);H.layers=this.layers,this.add(H);let Y=new zJ(W9,K9,J,Q);Y.layers=this.layers,this.add(Y);let X=new zJ(W9,K9,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,G=J.getRenderTarget(),N=J.getActiveCubeFace(),E=J.getActiveMipmapLevel(),O=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1,J.setRenderTarget($,0,Z),J.render(Q,W),J.setRenderTarget($,1,Z),J.render(Q,K),J.setRenderTarget($,2,Z),J.render(Q,H),J.setRenderTarget($,3,Z),J.render(Q,Y),J.setRenderTarget($,4,Z),J.render(Q,X),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),J.render(Q,U),J.setRenderTarget(G,N,E),J.xr.enabled=O,$.texture.needsPMREMUpdate=!0}}class $7 extends BJ{constructor(J=[],Q=301,$,Z,W,K,H,Y,X,U){super(J,Q,$,Z,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class nQ extends cJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new $7(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new D9(5,5,5),W=new tJ({name:"CubemapFromEquirect",uniforms:f8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let K=new FJ(Z,W),H=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new cQ(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}class iJ extends GJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var fK={type:"move"};class n9{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new iJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new iJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new v,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new v;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new iJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new v,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new v;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let R of J.hand.values()){let M=Q.getJointPose(R,$),q=this._getHandJoint(X,R);if(M!==null)q.matrix.fromArray(M.transform.matrix),q.matrix.decompose(q.position,q.rotation,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=M.radius;q.visible=M!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],N=U.position.distanceTo(G.position),E=0.02,O=0.005;if(X.inputState.pinching&&N>E+O)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&N<=E-O)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(fK)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new iJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}class Z7 extends GJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new IJ,this.environmentIntensity=1,this.environmentRotation=new IJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var i7=new v,bK=new v,hK=new y0;class H8{constructor(J=new v(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=i7.subVectors($,Q).cross(bK.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(i7),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/Z;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector($,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||hK.getNormalMatrix(J),Z=this.coplanarPoint(i7).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var A8=new v8,xK=new d0(0.5,0.5),I6=new v;class s9{constructor(J=new H8,Q=new H8,$=new H8,Z=new H8,W=new H8,K=new H8){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],Y=W[2],X=W[3],U=W[4],G=W[5],N=W[6],E=W[7],O=W[8],R=W[9],M=W[10],q=W[11],D=W[12],I=W[13],L=W[14],w=W[15];if(Z[0].setComponents(X-K,E-U,q-O,w-D).normalize(),Z[1].setComponents(X+K,E+U,q+O,w+D).normalize(),Z[2].setComponents(X+H,E+G,q+R,w+I).normalize(),Z[3].setComponents(X-H,E-G,q-R,w-I).normalize(),$)Z[4].setComponents(Y,N,M,L).normalize(),Z[5].setComponents(X-Y,E-N,q-M,w-L).normalize();else if(Z[4].setComponents(X-Y,E-N,q-M,w-L).normalize(),Q===2000)Z[5].setComponents(X+Y,E+N,q+M,w+L).normalize();else if(Q===2001)Z[5].setComponents(Y,N,M,L).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();A8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();A8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(A8)}intersectsSprite(J){A8.center.set(0,0,0);let Q=xK.distanceTo(J.center);return A8.radius=0.7071067811865476+Q,A8.applyMatrix4(J.matrixWorld),this.intersectsSphere(A8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(I6.x=Z.normal.x>0?J.max.x:J.min.x,I6.y=Z.normal.y>0?J.max.y:J.min.y,I6.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(I6)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b8 extends yJ{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var S6=new v,j6=new v,o$=new $J,y9=new c9,_6=new v8,o7=new v,a$=new v;class sQ extends GJ{constructor(J=new MJ,Q=new b8){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)S6.fromBufferAttribute(Q,Z-1),j6.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=S6.distanceTo(j6);J.setAttribute("lineDistance",new YJ($,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(_6.copy($.boundingSphere),_6.applyMatrix4(Z),_6.radius+=W,J.ray.intersectsSphere(_6)===!1)return;o$.copy(Z).invert(),y9.copy(J.ray).applyMatrix4(o$);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,N=$.attributes.position;if(U!==null){let E=Math.max(0,K.start),O=Math.min(U.count,K.start+K.count);for(let R=E,M=O-1;R<M;R+=X){let q=U.getX(R),D=U.getX(R+1),I=w6(this,J,y9,Y,q,D,R);if(I)Q.push(I)}if(this.isLineLoop){let R=U.getX(O-1),M=U.getX(E),q=w6(this,J,y9,Y,R,M,O-1);if(q)Q.push(q)}}else{let E=Math.max(0,K.start),O=Math.min(N.count,K.start+K.count);for(let R=E,M=O-1;R<M;R+=X){let q=w6(this,J,y9,Y,R,R+1,R);if(q)Q.push(q)}if(this.isLineLoop){let R=w6(this,J,y9,Y,O-1,E,O-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function w6(J,Q,$,Z,W,K,H){let Y=J.geometry.attributes.position;if(S6.fromBufferAttribute(Y,W),j6.fromBufferAttribute(Y,K),$.distanceSqToSegment(S6,j6,o7,a$)>Z)return;o7.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(o7);if(U<Q.near||U>Q.far)return;return{distance:U,point:a$.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var r$=new v,t$=new v;class i9 extends sQ{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)r$.fromBufferAttribute(Q,Z),t$.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+r$.distanceTo(t$);J.setAttribute("lineDistance",new YJ($,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class V8 extends yJ{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var e$=new $J,r7=new c9,C6=new v8,P6=new v;class O9 extends GJ{constructor(J=new MJ,Q=new V8){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(C6.copy($.boundingSphere),C6.applyMatrix4(Z),C6.radius+=W,J.ray.intersectsSphere(C6)===!1)return;e$.copy(Z).invert(),r7.copy(J.ray).applyMatrix4(e$);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,G=$.attributes.position;if(X!==null){let N=Math.max(0,K.start),E=Math.min(X.count,K.start+K.count);for(let O=N,R=E;O<R;O++){let M=X.getX(O);P6.fromBufferAttribute(G,M),JZ(P6,M,Y,Z,J,Q,this)}}else{let N=Math.max(0,K.start),E=Math.min(G.count,K.start+K.count);for(let O=N,R=E;O<R;O++)P6.fromBufferAttribute(G,O),JZ(P6,O,Y,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function JZ(J,Q,$,Z,W,K,H){let Y=r7.distanceSqToPoint(J);if(Y<$){let X=new v;r7.closestPointToPoint(J,X),X.applyMatrix4(Z);let U=W.ray.origin.distanceTo(X);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class W7 extends BJ{constructor(J,Q,$=1014,Z,W,K,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:G};super(N,Z,W,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new u9(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class o9 extends MJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,G=J/H,N=Q/Y,E=[],O=[],R=[],M=[];for(let q=0;q<U;q++){let D=q*N-K;for(let I=0;I<X;I++){let L=I*G-W;O.push(L,-D,0),R.push(0,0,1),M.push(I/H),M.push(1-q/Y)}}for(let q=0;q<Y;q++)for(let D=0;D<H;D++){let I=D+X*q,L=D+X*(q+1),w=D+1+X*(q+1),T=D+1+X*q;E.push(I,L,T),E.push(L,w,T)}this.setIndex(E),this.setAttribute("position",new YJ(O,3)),this.setAttribute("normal",new YJ(R,3)),this.setAttribute("uv",new YJ(M,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o9(J.width,J.height,J.widthSegments,J.heightSegments)}}class a9 extends MJ{constructor(J=1,Q=0.4,$=64,Z=8,W=2,K=3){super();this.type="TorusKnotGeometry",this.parameters={radius:J,tube:Q,tubularSegments:$,radialSegments:Z,p:W,q:K},$=Math.floor($),Z=Math.floor(Z);let H=[],Y=[],X=[],U=[],G=new v,N=new v,E=new v,O=new v,R=new v,M=new v,q=new v;for(let I=0;I<=$;++I){let L=I/$*W*Math.PI*2;D(L,W,K,J,E),D(L+0.01,W,K,J,O),M.subVectors(O,E),q.addVectors(O,E),R.crossVectors(M,q),q.crossVectors(R,M),R.normalize(),q.normalize();for(let w=0;w<=Z;++w){let T=w/Z*Math.PI*2,_=-Q*Math.cos(T),A=Q*Math.sin(T);G.x=E.x+(_*q.x+A*R.x),G.y=E.y+(_*q.y+A*R.y),G.z=E.z+(_*q.z+A*R.z),Y.push(G.x,G.y,G.z),N.subVectors(G,E).normalize(),X.push(N.x,N.y,N.z),U.push(I/$),U.push(w/Z)}}for(let I=1;I<=$;I++)for(let L=1;L<=Z;L++){let w=(Z+1)*(I-1)+(L-1),T=(Z+1)*I+(L-1),_=(Z+1)*I+L,A=(Z+1)*(I-1)+L;H.push(w,T,A),H.push(T,_,A)}this.setIndex(H),this.setAttribute("position",new YJ(Y,3)),this.setAttribute("normal",new YJ(X,3)),this.setAttribute("uv",new YJ(U,2));function D(I,L,w,T,_){let A=Math.cos(I),m=Math.sin(I),z=w/L*I,V=Math.cos(z);_.x=T*(2+V)*0.5*A,_.y=T*(2+V)*m*0.5,_.z=T*Math.sin(z)*0.5}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new a9(J.radius,J.tube,J.tubularSegments,J.radialSegments,J.p,J.q)}}class K7 extends yJ{constructor(J){super();this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new j0(16777215),this.specular=new j0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new d0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new IJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.specular.copy(J.specular),this.shininess=J.shininess,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class H7 extends yJ{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new j0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new d0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new IJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class iQ extends yJ{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class oQ extends yJ{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function A6(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function gK(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}class F9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];$:{J:{let K;Q:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(W=Z,Z=Q[++$],J<Z)break J}K=Q.length;break Q}if(!(J>=W)){let H=Q[1];if(J<H)$=2,W=H;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=W,W=Q[--$-1],J>=W)break J}K=$,$=0;break Q}break $}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class aQ extends F9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-$;break;case 2402:W=Z.length-2,H=Q+Z[W]-Z[W+1];break;default:W=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+Z[1]-Z[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,N=this._weightPrev,E=this._weightNext,O=($-Q)/(Z-Q),R=O*O,M=R*O,q=-N*M+2*N*R-N*O,D=(1+N)*M+(-1.5-2*N)*R+(-0.5+N)*O+1,I=(-1-E)*M+(1.5+E)*R+0.5*O,L=E*M-E*R;for(let w=0;w!==H;++w)W[w]=q*K[U+w]+D*K[X+w]+I*K[Y+w]+L*K[G+w];return W}}class rQ extends F9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),G=1-U;for(let N=0;N!==H;++N)W[N]=K[X+N]*G+K[Y+N]*U;return W}}class tQ extends F9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class pJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=A6(Q,this.TimeBufferType),this.values=A6($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:A6(J.times,Array),values:A6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new tQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new rQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new aQ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return console.warn("THREE.KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){console.error("THREE.KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(Z!==void 0){if(gK(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let G=H*$,N=G-$,E=G+$;for(let O=0;O!==$;++O){let R=Q[G+O];if(R!==Q[N+O]||R!==Q[E+O]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let G=H*$,N=K*$;for(let E=0;E!==$;++E)Q[N+E]=Q[G+E]}++K}}if(W>0){J[K]=J[W];for(let H=W*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}pJ.prototype.ValueTypeName="";pJ.prototype.TimeBufferType=Float32Array;pJ.prototype.ValueBufferType=Float32Array;pJ.prototype.DefaultInterpolation=2301;class h8 extends pJ{constructor(J,Q,$){super(J,Q,$)}}h8.prototype.ValueTypeName="bool";h8.prototype.ValueBufferType=Array;h8.prototype.DefaultInterpolation=2300;h8.prototype.InterpolantFactoryMethodLinear=void 0;h8.prototype.InterpolantFactoryMethodSmooth=void 0;class eQ extends pJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}eQ.prototype.ValueTypeName="color";class J$ extends pJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}J$.prototype.ValueTypeName="number";class Q$ extends F9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)jJ.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class Y7 extends pJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new Q$(this.times,this.values,this.getValueSize(),J)}}Y7.prototype.ValueTypeName="quaternion";Y7.prototype.InterpolantFactoryMethodSmooth=void 0;class x8 extends pJ{constructor(J,Q,$){super(J,Q,$)}}x8.prototype.ValueTypeName="string";x8.prototype.ValueBufferType=Array;x8.prototype.DefaultInterpolation=2300;x8.prototype.InterpolantFactoryMethodLinear=void 0;x8.prototype.InterpolantFactoryMethodSmooth=void 0;class $$ extends pJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}$$.prototype.ValueTypeName="vector";var t7={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class Z${constructor(J,Q,$){let Z=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this.abortController=new AbortController,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,N=X.length;G<N;G+=2){let E=X[G],O=X[G+1];if(E.global)E.lastIndex=0;if(E.test(U))return O}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var UW=new Z$;class R9{constructor(J){this.manager=J!==void 0?J:UW,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}R9.DEFAULT_MATERIAL_NAME="__DEFAULT";var K8={};class GW extends Error{constructor(J,Q){super(J);this.response=Q}}class X7 extends R9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=t7.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(K8[J]!==void 0){K8[J].push({onLoad:Q,onProgress:$,onError:Z});return}K8[J]=[],K8[J].push({onLoad:Q,onProgress:$,onError:Z});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=K8[J],G=X.body.getReader(),N=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),E=N?parseInt(N):0,O=E!==0,R=0,M=new ReadableStream({start(q){D();function D(){G.read().then(({done:I,value:L})=>{if(I)q.close();else{R+=L.byteLength;let w=new ProgressEvent("progress",{lengthComputable:O,loaded:R,total:E});for(let T=0,_=U.length;T<_;T++){let A=U[T];if(A.onProgress)A.onProgress(w)}q.enqueue(L),D()}},(I)=>{q.error(I)})}}});return new Response(M)}else throw new GW(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(H),N=G&&G[1]?G[1].toLowerCase():void 0,E=new TextDecoder(N);return X.arrayBuffer().then((O)=>E.decode(O))}}}).then((X)=>{t7.add(`file:${J}`,X);let U=K8[J];delete K8[J];for(let G=0,N=U.length;G<N;G++){let E=U[G];if(E.onLoad)E.onLoad(X)}}).catch((X)=>{let U=K8[J];if(U===void 0)throw this.manager.itemError(J),X;delete K8[J];for(let G=0,N=U.length;G<N;G++){let E=U[G];if(E.onError)E.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class U7 extends GJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new j0(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}var a7=new $J,QZ=new v,$Z=new v;class NW{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new d0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new $J,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new s9,this._frameExtents=new d0(1,1),this._viewportCount=1,this._viewports=[new KJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,$=this.matrix;if(QZ.setFromMatrixPosition(J.matrixWorld),Q.position.copy(QZ),$Z.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt($Z),Q.updateMatrixWorld(),a7.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(a7,Q.coordinateSystem,Q.reversedDepth),Q.reversedDepth)$.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else $.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);$.multiply(a7)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class G7 extends Q7{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class EW extends NW{constructor(){super(new G7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class r9 extends U7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(GJ.DEFAULT_UP),this.updateMatrix(),this.target=new GJ,this.shadow=new EW}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class N7 extends U7{constructor(J,Q){super(J,Q);this.isAmbientLight=!0,this.type="AmbientLight"}}class W$ extends zJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var K$="\\[\\]\\.:\\/",pK=new RegExp("["+K$+"]","g"),H$="[^"+K$+"]",mK="[^"+K$.replace("\\.","")+"]",dK=/((?:WC+[\/:])*)/.source.replace("WC",H$),lK=/(WCOD+)?/.source.replace("WCOD",mK),uK=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",H$),cK=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",H$),nK=new RegExp("^"+dK+lK+uK+cK+"$"),sK=["material","materials","bones","map"];class qW{constructor(J,Q,$){let Z=$||n0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class n0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||n0.parseTrackName(Q),this.node=n0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new n0(J,Q,$);else return new n0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(pK,"")}static parseTrackName(J){let Q=nK.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(sK.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=n0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[Z];if(K===void 0){let X=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}n0.Composite=qW;n0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};n0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};n0.prototype.GetterByBindingType=[n0.prototype._getValue_direct,n0.prototype._getValue_array,n0.prototype._getValue_arrayElement,n0.prototype._getValue_toArray];n0.prototype.SetterByBindingTypeAndVersioning=[[n0.prototype._setValue_direct,n0.prototype._setValue_direct_setNeedsUpdate,n0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[n0.prototype._setValue_array,n0.prototype._setValue_array_setNeedsUpdate,n0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[n0.prototype._setValue_arrayElement,n0.prototype._setValue_arrayElement_setNeedsUpdate,n0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[n0.prototype._setValue_fromArray,n0.prototype._setValue_fromArray_setNeedsUpdate,n0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cG=new Float32Array(1);function Y$(J,Q,$,Z){let W=iK(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function iK(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="179";function hW(){let J=null,Q=!1,$=null,Z=null;function W(K,H){$(K,H),Z=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function oK(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,N=U.byteLength,E=J.createBuffer();J.bindBuffer(X,E),J.bufferData(X,U,G),Y.onUploadCallback();let O;if(U instanceof Float32Array)O=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)O=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)O=J.HALF_FLOAT;else O=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)O=J.SHORT;else if(U instanceof Uint32Array)O=J.UNSIGNED_INT;else if(U instanceof Int32Array)O=J.INT;else if(U instanceof Int8Array)O=J.BYTE;else if(U instanceof Uint8Array)O=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)O=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:E,type:O,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:N}}function Z(Y,X,U){let{array:G,updateRanges:N}=X;if(J.bindBuffer(U,Y),N.length===0)J.bufferSubData(U,0,G);else{N.sort((O,R)=>O.start-R.start);let E=0;for(let O=1;O<N.length;O++){let R=N[E],M=N[O];if(M.start<=R.start+R.count+1)R.count=Math.max(R.count,M.start+M.count-R.start);else++E,N[E]=M}N.length=E+1;for(let O=0,R=N.length;O<R;O++){let M=N[O];J.bufferSubData(U,M.start*G.BYTES_PER_ELEMENT,G,M.start,M.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var aK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rK=`#ifdef USE_ALPHAHASH
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
#endif`,tK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$H=`#ifdef USE_AOMAP
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
#endif`,ZH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WH=`#ifdef USE_BATCHING
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
#endif`,KH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XH=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,UH=`#ifdef USE_IRIDESCENCE
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
#endif`,GH=`#ifdef USE_BUMPMAP
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
#endif`,NH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OH=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RH=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kH=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MH=`#define PI 3.141592653589793
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
} // validated`,VH=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LH=`vec3 transformedNormal = objectNormal;
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
#endif`,zH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_H=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wH="gl_FragColor = linearToOutputTexel( gl_FragColor );",CH=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PH=`#ifdef USE_ENVMAP
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
#endif`,AH=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,TH=`#ifdef USE_ENVMAP
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
#endif`,SH=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jH=`#ifdef USE_ENVMAP
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
#endif`,yH=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vH=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fH=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bH=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hH=`#ifdef USE_GRADIENTMAP
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
}`,xH=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gH=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mH=`uniform bool receiveShadow;
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
#endif`,dH=`#ifdef USE_ENVMAP
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
#endif`,lH=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cH=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nH=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sH=`PhysicalMaterial material;
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
#endif`,iH=`struct PhysicalMaterial {
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
}`,oH=`
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
#endif`,aH=`#if defined( RE_IndirectDiffuse )
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
#endif`,rH=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tH=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eH=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JY=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QY=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$Y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZY=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WY=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KY=`#if defined( USE_POINTS_UV )
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
#endif`,HY=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YY=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XY=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UY=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GY=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NY=`#ifdef USE_MORPHTARGETS
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
#endif`,EY=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qY=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DY=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FY=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RY=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kY=`#ifdef USE_NORMALMAP
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
#endif`,MY=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VY=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LY=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zY=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BY=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IY=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_Y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wY=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CY=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PY=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AY=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TY=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jY=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yY=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vY=`float getShadowMask() {
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
}`,fY=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bY=`#ifdef USE_SKINNING
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
#endif`,hY=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xY=`#ifdef USE_SKINNING
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
#endif`,gY=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pY=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mY=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dY=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lY=`#ifdef USE_TRANSMISSION
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
#endif`,uY=`#ifdef USE_TRANSMISSION
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
#endif`,cY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sY=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iY=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oY=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aY=`uniform sampler2D t2D;
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
}`,rY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tY=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eY=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JX=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QX=`#include <common>
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
}`,$X=`#if DEPTH_PACKING == 3200
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
}`,ZX=`#define DISTANCE
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
}`,WX=`#define DISTANCE
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
}`,KX=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HX=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YX=`uniform float scale;
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
}`,XX=`uniform vec3 diffuse;
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
}`,UX=`#include <common>
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
}`,GX=`uniform vec3 diffuse;
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
}`,NX=`#define LAMBERT
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
}`,EX=`#define LAMBERT
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
}`,qX=`#define MATCAP
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
}`,DX=`#define MATCAP
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
}`,OX=`#define NORMAL
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
}`,FX=`#define NORMAL
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
}`,RX=`#define PHONG
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
}`,kX=`#define PHONG
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
}`,MX=`#define STANDARD
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
}`,VX=`#define STANDARD
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
}`,LX=`#define TOON
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
}`,zX=`#define TOON
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
}`,BX=`uniform float size;
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
}`,IX=`uniform vec3 diffuse;
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
}`,_X=`#include <common>
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
}`,wX=`uniform vec3 color;
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
}`,CX=`uniform float rotation;
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
}`,PX=`uniform vec3 diffuse;
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
}`,v0={alphahash_fragment:aK,alphahash_pars_fragment:rK,alphamap_fragment:tK,alphamap_pars_fragment:eK,alphatest_fragment:JH,alphatest_pars_fragment:QH,aomap_fragment:$H,aomap_pars_fragment:ZH,batching_pars_vertex:WH,batching_vertex:KH,begin_vertex:HH,beginnormal_vertex:YH,bsdfs:XH,iridescence_fragment:UH,bumpmap_pars_fragment:GH,clipping_planes_fragment:NH,clipping_planes_pars_fragment:EH,clipping_planes_pars_vertex:qH,clipping_planes_vertex:DH,color_fragment:OH,color_pars_fragment:FH,color_pars_vertex:RH,color_vertex:kH,common:MH,cube_uv_reflection_fragment:VH,defaultnormal_vertex:LH,displacementmap_pars_vertex:zH,displacementmap_vertex:BH,emissivemap_fragment:IH,emissivemap_pars_fragment:_H,colorspace_fragment:wH,colorspace_pars_fragment:CH,envmap_fragment:PH,envmap_common_pars_fragment:AH,envmap_pars_fragment:TH,envmap_pars_vertex:SH,envmap_physical_pars_fragment:dH,envmap_vertex:jH,fog_vertex:yH,fog_pars_vertex:vH,fog_fragment:fH,fog_pars_fragment:bH,gradientmap_pars_fragment:hH,lightmap_pars_fragment:xH,lights_lambert_fragment:gH,lights_lambert_pars_fragment:pH,lights_pars_begin:mH,lights_toon_fragment:lH,lights_toon_pars_fragment:uH,lights_phong_fragment:cH,lights_phong_pars_fragment:nH,lights_physical_fragment:sH,lights_physical_pars_fragment:iH,lights_fragment_begin:oH,lights_fragment_maps:aH,lights_fragment_end:rH,logdepthbuf_fragment:tH,logdepthbuf_pars_fragment:eH,logdepthbuf_pars_vertex:JY,logdepthbuf_vertex:QY,map_fragment:$Y,map_pars_fragment:ZY,map_particle_fragment:WY,map_particle_pars_fragment:KY,metalnessmap_fragment:HY,metalnessmap_pars_fragment:YY,morphinstance_vertex:XY,morphcolor_vertex:UY,morphnormal_vertex:GY,morphtarget_pars_vertex:NY,morphtarget_vertex:EY,normal_fragment_begin:qY,normal_fragment_maps:DY,normal_pars_fragment:OY,normal_pars_vertex:FY,normal_vertex:RY,normalmap_pars_fragment:kY,clearcoat_normal_fragment_begin:MY,clearcoat_normal_fragment_maps:VY,clearcoat_pars_fragment:LY,iridescence_pars_fragment:zY,opaque_fragment:BY,packing:IY,premultiplied_alpha_fragment:_Y,project_vertex:wY,dithering_fragment:CY,dithering_pars_fragment:PY,roughnessmap_fragment:AY,roughnessmap_pars_fragment:TY,shadowmap_pars_fragment:SY,shadowmap_pars_vertex:jY,shadowmap_vertex:yY,shadowmask_pars_fragment:vY,skinbase_vertex:fY,skinning_pars_vertex:bY,skinning_vertex:hY,skinnormal_vertex:xY,specularmap_fragment:gY,specularmap_pars_fragment:pY,tonemapping_fragment:mY,tonemapping_pars_fragment:dY,transmission_fragment:lY,transmission_pars_fragment:uY,uv_pars_fragment:cY,uv_pars_vertex:nY,uv_vertex:sY,worldpos_vertex:iY,background_vert:oY,background_frag:aY,backgroundCube_vert:rY,backgroundCube_frag:tY,cube_vert:eY,cube_frag:JX,depth_vert:QX,depth_frag:$X,distanceRGBA_vert:ZX,distanceRGBA_frag:WX,equirect_vert:KX,equirect_frag:HX,linedashed_vert:YX,linedashed_frag:XX,meshbasic_vert:UX,meshbasic_frag:GX,meshlambert_vert:NX,meshlambert_frag:EX,meshmatcap_vert:qX,meshmatcap_frag:DX,meshnormal_vert:OX,meshnormal_frag:FX,meshphong_vert:RX,meshphong_frag:kX,meshphysical_vert:MX,meshphysical_frag:VX,meshtoon_vert:LX,meshtoon_frag:zX,points_vert:BX,points_frag:IX,shadow_vert:_X,shadow_frag:wX,sprite_vert:CX,sprite_frag:PX},$0={common:{diffuse:{value:new j0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new y0}},envmap:{envMap:{value:null},envMapRotation:{value:new y0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new y0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new y0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new y0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new y0},normalScale:{value:new d0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new y0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new y0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new y0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new y0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new j0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0},uvTransform:{value:new y0}},sprite:{diffuse:{value:new j0(16777215)},opacity:{value:1},center:{value:new d0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new y0},alphaMap:{value:null},alphaMapTransform:{value:new y0},alphaTest:{value:0}}},eJ={basic:{uniforms:VJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.fog]),vertexShader:v0.meshbasic_vert,fragmentShader:v0.meshbasic_frag},lambert:{uniforms:VJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,$0.lights,{emissive:{value:new j0(0)}}]),vertexShader:v0.meshlambert_vert,fragmentShader:v0.meshlambert_frag},phong:{uniforms:VJ([$0.common,$0.specularmap,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,$0.lights,{emissive:{value:new j0(0)},specular:{value:new j0(1118481)},shininess:{value:30}}]),vertexShader:v0.meshphong_vert,fragmentShader:v0.meshphong_frag},standard:{uniforms:VJ([$0.common,$0.envmap,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.roughnessmap,$0.metalnessmap,$0.fog,$0.lights,{emissive:{value:new j0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag},toon:{uniforms:VJ([$0.common,$0.aomap,$0.lightmap,$0.emissivemap,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.gradientmap,$0.fog,$0.lights,{emissive:{value:new j0(0)}}]),vertexShader:v0.meshtoon_vert,fragmentShader:v0.meshtoon_frag},matcap:{uniforms:VJ([$0.common,$0.bumpmap,$0.normalmap,$0.displacementmap,$0.fog,{matcap:{value:null}}]),vertexShader:v0.meshmatcap_vert,fragmentShader:v0.meshmatcap_frag},points:{uniforms:VJ([$0.points,$0.fog]),vertexShader:v0.points_vert,fragmentShader:v0.points_frag},dashed:{uniforms:VJ([$0.common,$0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:v0.linedashed_vert,fragmentShader:v0.linedashed_frag},depth:{uniforms:VJ([$0.common,$0.displacementmap]),vertexShader:v0.depth_vert,fragmentShader:v0.depth_frag},normal:{uniforms:VJ([$0.common,$0.bumpmap,$0.normalmap,$0.displacementmap,{opacity:{value:1}}]),vertexShader:v0.meshnormal_vert,fragmentShader:v0.meshnormal_frag},sprite:{uniforms:VJ([$0.sprite,$0.fog]),vertexShader:v0.sprite_vert,fragmentShader:v0.sprite_frag},background:{uniforms:{uvTransform:{value:new y0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:v0.background_vert,fragmentShader:v0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new y0}},vertexShader:v0.backgroundCube_vert,fragmentShader:v0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:v0.cube_vert,fragmentShader:v0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:v0.equirect_vert,fragmentShader:v0.equirect_frag},distanceRGBA:{uniforms:VJ([$0.common,$0.displacementmap,{referencePosition:{value:new v},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:v0.distanceRGBA_vert,fragmentShader:v0.distanceRGBA_frag},shadow:{uniforms:VJ([$0.lights,$0.fog,{color:{value:new j0(0)},opacity:{value:1}}]),vertexShader:v0.shadow_vert,fragmentShader:v0.shadow_frag}};eJ.physical={uniforms:VJ([eJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new y0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new y0},clearcoatNormalScale:{value:new d0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new y0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new y0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new y0},sheen:{value:0},sheenColor:{value:new j0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new y0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new y0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new y0},transmissionSamplerSize:{value:new d0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new y0},attenuationDistance:{value:0},attenuationColor:{value:new j0(0)},specularColor:{value:new j0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new y0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new y0},anisotropyVector:{value:new d0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new y0}}]),vertexShader:v0.meshphysical_vert,fragmentShader:v0.meshphysical_frag};var E7={r:0,b:0,g:0},g8=new IJ,AX=new $J;function TX(J,Q,$,Z,W,K,H){let Y=new j0(0),X=K===!0?0:1,U,G,N=null,E=0,O=null;function R(L){let w=L.isScene===!0?L.background:null;if(w&&w.isTexture)w=(L.backgroundBlurriness>0?$:Q).get(w);return w}function M(L){let w=!1,T=R(L);if(T===null)D(Y,X);else if(T&&T.isColor)D(T,1),w=!0;let _=J.xr.getEnvironmentBlendMode();if(_==="additive")Z.buffers.color.setClear(0,0,0,1,H);else if(_==="alpha-blend")Z.buffers.color.setClear(0,0,0,0,H);if(J.autoClear||w)Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function q(L,w){let T=R(w);if(T&&(T.isCubeTexture||T.mapping===h9)){if(G===void 0)G=new FJ(new D9(1,1,1),new tJ({name:"BackgroundCubeMaterial",uniforms:f8(eJ.backgroundCube.uniforms),vertexShader:eJ.backgroundCube.vertexShader,fragmentShader:eJ.backgroundCube.fragmentShader,side:SJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(_,A,m){this.matrixWorld.copyPosition(m.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(g8.copy(w.backgroundRotation),g8.x*=-1,g8.y*=-1,g8.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1)g8.y*=-1,g8.z*=-1;if(G.material.uniforms.envMap.value=T,G.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(AX.makeRotationFromEuler(g8)),G.material.toneMapped=m0.getTransfer(T.colorSpace)!==t0,N!==T||E!==T.version||O!==J.toneMapping)G.material.needsUpdate=!0,N=T,E=T.version,O=J.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(T&&T.isTexture){if(U===void 0)U=new FJ(new o9(2,2),new tJ({name:"BackgroundMaterial",uniforms:f8(eJ.background.uniforms),vertexShader:eJ.background.vertexShader,fragmentShader:eJ.background.fragmentShader,side:Y9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=T,U.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,U.material.toneMapped=m0.getTransfer(T.colorSpace)!==t0,T.matrixAutoUpdate===!0)T.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(T.matrix),N!==T||E!==T.version||O!==J.toneMapping)U.material.needsUpdate=!0,N=T,E=T.version,O=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function D(L,w){L.getRGB(E7,uQ(J)),Z.buffers.color.setClear(E7.r,E7.g,E7.b,w,H)}function I(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return Y},setClearColor:function(L,w=1){Y.set(L),X=w,D(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(L){X=L,D(Y,X)},render:M,addToRenderList:q,dispose:I}}function SX(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=E(null),K=W,H=!1;function Y(V,j,l,p,c){let o=!1,u=N(p,l,j);if(K!==u)K=u,U(K.object);if(o=O(V,p,l,c),o)R(V,p,l,c);if(c!==null)Q.update(c,J.ELEMENT_ARRAY_BUFFER);if(o||H){if(H=!1,w(V,j,l,p),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(c).buffer)}}function X(){return J.createVertexArray()}function U(V){return J.bindVertexArray(V)}function G(V){return J.deleteVertexArray(V)}function N(V,j,l){let p=l.wireframe===!0,c=Z[V.id];if(c===void 0)c={},Z[V.id]=c;let o=c[j.id];if(o===void 0)o={},c[j.id]=o;let u=o[p];if(u===void 0)u=E(X()),o[p]=u;return u}function E(V){let j=[],l=[],p=[];for(let c=0;c<$;c++)j[c]=0,l[c]=0,p[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:l,attributeDivisors:p,object:V,attributes:{},index:null}}function O(V,j,l,p){let c=K.attributes,o=j.attributes,u=0,r=l.getAttributes();for(let x in r)if(r[x].location>=0){let U0=c[x],P0=o[x];if(P0===void 0){if(x==="instanceMatrix"&&V.instanceMatrix)P0=V.instanceMatrix;if(x==="instanceColor"&&V.instanceColor)P0=V.instanceColor}if(U0===void 0)return!0;if(U0.attribute!==P0)return!0;if(P0&&U0.data!==P0.data)return!0;u++}if(K.attributesNum!==u)return!0;if(K.index!==p)return!0;return!1}function R(V,j,l,p){let c={},o=j.attributes,u=0,r=l.getAttributes();for(let x in r)if(r[x].location>=0){let U0=o[x];if(U0===void 0){if(x==="instanceMatrix"&&V.instanceMatrix)U0=V.instanceMatrix;if(x==="instanceColor"&&V.instanceColor)U0=V.instanceColor}let P0={};if(P0.attribute=U0,U0&&U0.data)P0.data=U0.data;c[x]=P0,u++}K.attributes=c,K.attributesNum=u,K.index=p}function M(){let V=K.newAttributes;for(let j=0,l=V.length;j<l;j++)V[j]=0}function q(V){D(V,0)}function D(V,j){let{newAttributes:l,enabledAttributes:p,attributeDivisors:c}=K;if(l[V]=1,p[V]===0)J.enableVertexAttribArray(V),p[V]=1;if(c[V]!==j)J.vertexAttribDivisor(V,j),c[V]=j}function I(){let{newAttributes:V,enabledAttributes:j}=K;for(let l=0,p=j.length;l<p;l++)if(j[l]!==V[l])J.disableVertexAttribArray(l),j[l]=0}function L(V,j,l,p,c,o,u){if(u===!0)J.vertexAttribIPointer(V,j,l,c,o);else J.vertexAttribPointer(V,j,l,p,c,o)}function w(V,j,l,p){M();let c=p.attributes,o=l.getAttributes(),u=j.defaultAttributeValues;for(let r in o){let x=o[r];if(x.location>=0){let Z0=c[r];if(Z0===void 0){if(r==="instanceMatrix"&&V.instanceMatrix)Z0=V.instanceMatrix;if(r==="instanceColor"&&V.instanceColor)Z0=V.instanceColor}if(Z0!==void 0){let{normalized:U0,itemSize:P0}=Z0,g0=Q.get(Z0);if(g0===void 0)continue;let{buffer:JJ,type:d,bytesPerElement:W0}=g0,k0=d===J.INT||d===J.UNSIGNED_INT||Z0.gpuType===WQ;if(Z0.isInterleavedBufferAttribute){let G0=Z0.data,F0=G0.stride,p0=Z0.offset;if(G0.isInstancedInterleavedBuffer){for(let l0=0;l0<x.locationSize;l0++)D(x.location+l0,G0.meshPerAttribute);if(V.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let l0=0;l0<x.locationSize;l0++)q(x.location+l0);J.bindBuffer(J.ARRAY_BUFFER,JJ);for(let l0=0;l0<x.locationSize;l0++)L(x.location+l0,P0/x.locationSize,d,U0,F0*W0,(p0+P0/x.locationSize*l0)*W0,k0)}else{if(Z0.isInstancedBufferAttribute){for(let G0=0;G0<x.locationSize;G0++)D(x.location+G0,Z0.meshPerAttribute);if(V.isInstancedMesh!==!0&&p._maxInstanceCount===void 0)p._maxInstanceCount=Z0.meshPerAttribute*Z0.count}else for(let G0=0;G0<x.locationSize;G0++)q(x.location+G0);J.bindBuffer(J.ARRAY_BUFFER,JJ);for(let G0=0;G0<x.locationSize;G0++)L(x.location+G0,P0/x.locationSize,d,U0,P0*W0,P0/x.locationSize*G0*W0,k0)}}else if(u!==void 0){let U0=u[r];if(U0!==void 0)switch(U0.length){case 2:J.vertexAttrib2fv(x.location,U0);break;case 3:J.vertexAttrib3fv(x.location,U0);break;case 4:J.vertexAttrib4fv(x.location,U0);break;default:J.vertexAttrib1fv(x.location,U0)}}}}I()}function T(){m();for(let V in Z){let j=Z[V];for(let l in j){let p=j[l];for(let c in p)G(p[c].object),delete p[c];delete j[l]}delete Z[V]}}function _(V){if(Z[V.id]===void 0)return;let j=Z[V.id];for(let l in j){let p=j[l];for(let c in p)G(p[c].object),delete p[c];delete j[l]}delete Z[V.id]}function A(V){for(let j in Z){let l=Z[j];if(l[V.id]===void 0)continue;let p=l[V.id];for(let c in p)G(p[c].object),delete p[c];delete l[V.id]}}function m(){if(z(),H=!0,K===W)return;K=W,U(K.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:m,resetDefaultState:z,dispose:T,releaseStatesOfGeometry:_,releaseStatesOfProgram:A,initAttributes:M,enableAttribute:q,disableUnusedAttributes:I}}function jX(J,Q,$){let Z;function W(U){Z=U}function K(U,G){J.drawArrays(Z,U,G),$.update(G,Z,1)}function H(U,G,N){if(N===0)return;J.drawArraysInstanced(Z,U,G,N),$.update(G,Z,N)}function Y(U,G,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,G,0,N);let O=0;for(let R=0;R<N;R++)O+=G[R];$.update(O,Z,1)}function X(U,G,N,E){if(N===0)return;let O=Q.get("WEBGL_multi_draw");if(O===null)for(let R=0;R<U.length;R++)H(U[R],G[R],E[R]);else{O.multiDrawArraysInstancedWEBGL(Z,U,0,G,0,E,0,N);let R=0;for(let M=0;M<N;M++)R+=G[M]*E[M];$.update(R,Z,1)}}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y,this.renderMultiDrawInstances=X}function yX(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let A=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(A){if(A!==rJ&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(A){let m=A===p9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(A!==R8&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==k8&&!m)return!1;return!0}function X(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let N=$.logarithmicDepthBuffer===!0,E=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),O=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),D=J.getParameter(J.MAX_VERTEX_ATTRIBS),I=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),w=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),T=R>0,_=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:N,reversedDepthBuffer:E,maxTextures:O,maxVertexTextures:R,maxTextureSize:M,maxCubemapSize:q,maxAttributes:D,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:T,maxSamples:_}}function vX(J){let Q=this,$=null,Z=0,W=!1,K=!1,H=new H8,Y=new y0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(N,E){let O=N.length!==0||E||Z!==0||W;return W=E,Z=N.length,O},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(N,E){$=G(N,E,0)},this.setState=function(N,E,O){let{clippingPlanes:R,clipIntersection:M,clipShadows:q}=N,D=J.get(N);if(!W||R===null||R.length===0||K&&!q)if(K)G(null);else U();else{let I=K?0:Z,L=I*4,w=D.clippingState||null;X.value=w,w=G(R,E,L,O);for(let T=0;T!==L;++T)w[T]=$[T];D.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=I}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(N,E,O,R){let M=N!==null?N.length:0,q=null;if(M!==0){if(q=X.value,R!==!0||q===null){let D=O+M*4,I=E.matrixWorldInverse;if(Y.getNormalMatrix(I),q===null||q.length<D)q=new Float32Array(D);for(let L=0,w=O;L!==M;++L,w+=4)H.copy(N[L]).applyMatrix4(I,Y),H.normal.toArray(q,w),q[w+3]=H.constant}X.value=q,X.needsUpdate=!0}return Q.numPlanes=M,Q.numIntersection=0,q}}function fX(J){let Q=new WeakMap;function $(H,Y){if(Y===p6)H.mapping=U9;else if(Y===m6)H.mapping=S8;return H}function Z(H){if(H&&H.isTexture){let Y=H.mapping;if(Y===p6||Y===m6)if(Q.has(H)){let X=Q.get(H).texture;return $(X,H.mapping)}else{let X=H.image;if(X&&X.height>0){let U=new nQ(X.height);return U.fromEquirectangularTexture(J,H),Q.set(H,U),H.addEventListener("dispose",W),$(U.texture,H.mapping)}else return null}}return H}function W(H){let Y=H.target;Y.removeEventListener("dispose",W);let X=Q.get(Y);if(X!==void 0)Q.delete(Y),X.dispose()}function K(){Q=new WeakMap}return{get:Z,dispose:K}}var M9=4,DW=[0.125,0.215,0.35,0.446,0.526,0.582],d8=20,X$=new G7,OW=new j0,U$=null,G$=0,N$=0,E$=!1,m8=(1+Math.sqrt(5))/2,k9=1/m8,FW=[new v(-m8,k9,0),new v(m8,k9,0),new v(-k9,0,m8),new v(k9,0,m8),new v(0,m8,-k9),new v(0,m8,k9),new v(-1,1,-1),new v(1,1,-1),new v(-1,1,1),new v(1,1,1)],bX=new v;class D${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:H=bX}=W;U$=this._renderer.getRenderTarget(),G$=this._renderer.getActiveCubeFace(),N$=this._renderer.getActiveMipmapLevel(),E$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=MW(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=kW(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(U$,G$,N$),this._renderer.xr.enabled=E$,J.scissorTest=!1,q7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===U9||J.mapping===S8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);U$=this._renderer.getRenderTarget(),G$=this._renderer.getActiveCubeFace(),N$=this._renderer.getActiveMipmapLevel(),E$=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:j8,minFilter:j8,generateMipmaps:!1,type:p9,format:rJ,colorSpace:d9,depthBuffer:!1},Z=RW(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=RW(J,Q,$);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hX(W)),this._blurMaterial=xX(W,J,Q)}return Z}_compileMaterial(J){let Q=new FJ(this._lodPlanes[0],J);this._renderer.compile(Q,X$)}_sceneToCubeUV(J,Q,$,Z,W){let Y=new zJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,N=G.autoClear,E=G.toneMapping;if(G.getClearColor(OW),G.toneMapping=X8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);let R=new t6({name:"PMREM.Background",side:SJ,depthWrite:!1,depthTest:!1}),M=new FJ(new D9,R),q=!1,D=J.background;if(D){if(D.isColor)R.color.copy(D),J.background=null,q=!0}else R.color.copy(OW),q=!0;for(let I=0;I<6;I++){let L=I%3;if(L===0)Y.up.set(0,X[I],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[I],W.y,W.z);else if(L===1)Y.up.set(0,0,X[I]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[I],W.z);else Y.up.set(0,X[I],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[I]);let w=this._cubeSize;if(q7(Z,L*w,I>2?w:0,w,w),G.setRenderTarget(Z),q)G.render(M,Y);G.render(J,Y)}M.geometry.dispose(),M.material.dispose(),G.toneMapping=E,G.autoClear=N,J.background=D}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===U9||J.mapping===S8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=MW();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=kW();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=new FJ(this._lodPlanes[0],W),H=W.uniforms;H.envMap.value=J;let Y=this._cubeSize;q7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,X$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodPlanes.length;for(let W=1;W<Z;W++){let K=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),H=FW[(Z-W-1)%FW.length];this._blur(J,W-1,W,K,H)}Q.autoClear=$}_blur(J,Q,$,Z,W){let K=this._pingPongRenderTarget;this._halfBlur(J,K,Q,$,Z,"latitudinal",W),this._halfBlur(K,J,$,$,Z,"longitudinal",W)}_halfBlur(J,Q,$,Z,W,K,H){let Y=this._renderer,X=this._blurMaterial;if(K!=="latitudinal"&&K!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new FJ(this._lodPlanes[Z],X),N=X.uniforms,E=this._sizeLods[$]-1,O=isFinite(W)?Math.PI/(2*E):2*Math.PI/(2*d8-1),R=W/O,M=isFinite(W)?1+Math.floor(U*R):d8;if(M>d8)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${d8}`);let q=[],D=0;for(let _=0;_<d8;++_){let A=_/R,m=Math.exp(-A*A/2);if(q.push(m),_===0)D+=m;else if(_<M)D+=2*m}for(let _=0;_<q.length;_++)q[_]=q[_]/D;if(N.envMap.value=J.texture,N.samples.value=M,N.weights.value=q,N.latitudinal.value=K==="latitudinal",H)N.poleAxis.value=H;let{_lodMax:I}=this;N.dTheta.value=O,N.mipInt.value=I-$;let L=this._sizeLods[Z],w=3*L*(Z>I-M9?Z-I+M9:0),T=4*(this._cubeSize-L);q7(Q,w,T,3*L,2*L),Y.setRenderTarget(Q),Y.render(G,X$)}}function hX(J){let Q=[],$=[],Z=[],W=J,K=J-M9+1+DW.length;for(let H=0;H<K;H++){let Y=Math.pow(2,W);$.push(Y);let X=1/Y;if(H>J-M9)X=DW[H-J+M9-1];else if(H===0)X=0;Z.push(X);let U=1/(Y-2),G=-U,N=1+U,E=[G,G,N,G,N,N,G,G,N,N,G,N],O=6,R=6,M=3,q=2,D=1,I=new Float32Array(M*R*O),L=new Float32Array(q*R*O),w=new Float32Array(D*R*O);for(let _=0;_<O;_++){let A=_%3*2/3-1,m=_>2?0:-1,z=[A,m,0,A+0.6666666666666666,m,0,A+0.6666666666666666,m+1,0,A,m,0,A+0.6666666666666666,m+1,0,A,m+1,0];I.set(z,M*R*_),L.set(E,q*R*_);let V=[_,_,_,_,_,_];w.set(V,D*R*_)}let T=new MJ;if(T.setAttribute("position",new gJ(I,M)),T.setAttribute("uv",new gJ(L,q)),T.setAttribute("faceIndex",new gJ(w,D)),Q.push(T),W>M9)W--}return{lodPlanes:Q,sizeLods:$,sigmas:Z}}function RW(J,Q,$){let Z=new cJ(J,Q,$);return Z.texture.mapping=h9,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function q7(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function xX(J,Q,$){let Z=new Float32Array(d8),W=new v(0,1,0);return new tJ({name:"SphericalGaussianBlur",defines:{n:d8,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:F$(),fragmentShader:`

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
		`,blending:F8,depthTest:!1,depthWrite:!1})}function kW(){return new tJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:F$(),fragmentShader:`

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
		`,blending:F8,depthTest:!1,depthWrite:!1})}function MW(){return new tJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:F$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:F8,depthTest:!1,depthWrite:!1})}function F$(){return`

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
	`}function gX(J){let Q=new WeakMap,$=null;function Z(Y){if(Y&&Y.isTexture){let X=Y.mapping,U=X===p6||X===m6,G=X===U9||X===S8;if(U||G){let N=Q.get(Y),E=N!==void 0?N.texture.pmremVersion:0;if(Y.isRenderTargetTexture&&Y.pmremVersion!==E){if($===null)$=new D$(J);return N=U?$.fromEquirectangular(Y,N):$.fromCubemap(Y,N),N.texture.pmremVersion=Y.pmremVersion,Q.set(Y,N),N.texture}else if(N!==void 0)return N.texture;else{let O=Y.image;if(U&&O&&O.height>0||G&&O&&W(O)){if($===null)$=new D$(J);return N=U?$.fromEquirectangular(Y):$.fromCubemap(Y),N.texture.pmremVersion=Y.pmremVersion,Q.set(Y,N),Y.addEventListener("dispose",K),N.texture}else return null}}}return Y}function W(Y){let X=0,U=6;for(let G=0;G<U;G++)if(Y[G]!==void 0)X++;return X===U}function K(Y){let X=Y.target;X.removeEventListener("dispose",K);let U=Q.get(X);if(U!==void 0)Q.delete(X),U.dispose()}function H(){if(Q=new WeakMap,$!==null)$.dispose(),$=null}return{get:Z,dispose:H}}function pX(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W;switch(Z){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension(Z)}return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)T8("THREE.WebGLRenderer: "+Z+" extension not supported.");return W}}}function mX(J,Q,$,Z){let W={},K=new WeakMap;function H(N){let E=N.target;if(E.index!==null)Q.remove(E.index);for(let R in E.attributes)Q.remove(E.attributes[R]);E.removeEventListener("dispose",H),delete W[E.id];let O=K.get(E);if(O)Q.remove(O),K.delete(E);if(Z.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0)delete E._maxInstanceCount;$.memory.geometries--}function Y(N,E){if(W[E.id]===!0)return E;return E.addEventListener("dispose",H),W[E.id]=!0,$.memory.geometries++,E}function X(N){let E=N.attributes;for(let O in E)Q.update(E[O],J.ARRAY_BUFFER)}function U(N){let E=[],O=N.index,R=N.attributes.position,M=0;if(O!==null){let I=O.array;M=O.version;for(let L=0,w=I.length;L<w;L+=3){let T=I[L+0],_=I[L+1],A=I[L+2];E.push(T,_,_,A,A,T)}}else if(R!==void 0){let I=R.array;M=R.version;for(let L=0,w=I.length/3-1;L<w;L+=3){let T=L+0,_=L+1,A=L+2;E.push(T,_,_,A,A,T)}}else return;let q=new((pQ(E))?J7:e6)(E,1);q.version=M;let D=K.get(N);if(D)Q.remove(D);K.set(N,q)}function G(N){let E=K.get(N);if(E){let O=N.index;if(O!==null){if(E.version<O.version)U(N)}}else U(N);return K.get(N)}return{get:Y,update:X,getWireframeAttribute:G}}function dX(J,Q,$){let Z;function W(E){Z=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,O){J.drawElements(Z,O,K,E*H),$.update(O,Z,1)}function U(E,O,R){if(R===0)return;J.drawElementsInstanced(Z,O,K,E*H,R),$.update(O,Z,R)}function G(E,O,R){if(R===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,O,0,K,E,0,R);let q=0;for(let D=0;D<R;D++)q+=O[D];$.update(q,Z,1)}function N(E,O,R,M){if(R===0)return;let q=Q.get("WEBGL_multi_draw");if(q===null)for(let D=0;D<E.length;D++)U(E[D]/H,O[D],M[D]);else{q.multiDrawElementsInstancedWEBGL(Z,O,0,K,E,0,M,0,R);let D=0;for(let I=0;I<R;I++)D+=O[I]*M[I];$.update(D,Z,1)}}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=N}function lX(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function uX(J,Q,$){let Z=new WeakMap,W=new KJ;function K(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,N=G!==void 0?G.length:0,E=Z.get(Y);if(E===void 0||E.count!==N){let z=function(){A.dispose(),Z.delete(Y),Y.removeEventListener("dispose",z)};if(E!==void 0)E.texture.dispose();let O=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,M=Y.morphAttributes.color!==void 0,q=Y.morphAttributes.position||[],D=Y.morphAttributes.normal||[],I=Y.morphAttributes.color||[],L=0;if(O===!0)L=1;if(R===!0)L=2;if(M===!0)L=3;let w=Y.attributes.position.count*L,T=1;if(w>Q.maxTextureSize)T=Math.ceil(w/Q.maxTextureSize),w=Q.maxTextureSize;let _=new Float32Array(w*T*4*N),A=new a6(_,w,T,N);A.type=k8,A.needsUpdate=!0;let m=L*4;for(let V=0;V<N;V++){let j=q[V],l=D[V],p=I[V],c=w*T*4*V;for(let o=0;o<j.count;o++){let u=o*m;if(O===!0)W.fromBufferAttribute(j,o),_[c+u+0]=W.x,_[c+u+1]=W.y,_[c+u+2]=W.z,_[c+u+3]=0;if(R===!0)W.fromBufferAttribute(l,o),_[c+u+4]=W.x,_[c+u+5]=W.y,_[c+u+6]=W.z,_[c+u+7]=0;if(M===!0)W.fromBufferAttribute(p,o),_[c+u+8]=W.x,_[c+u+9]=W.y,_[c+u+10]=W.z,_[c+u+11]=p.itemSize===4?W.w:1}}E={count:N,texture:A,size:new d0(w,T)},Z.set(Y,E),Y.addEventListener("dispose",z)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let O=0;for(let M=0;M<U.length;M++)O+=U[M];let R=Y.morphTargetsRelative?1:1-O;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",E.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",E.size)}return{update:K}}function cX(J,Q,$,Z){let W=new WeakMap;function K(X){let U=Z.render.frame,G=X.geometry,N=Q.get(X,G);if(W.get(N)!==U)Q.update(N),W.set(N,U);if(X.isInstancedMesh){if(X.hasEventListener("dispose",Y)===!1)X.addEventListener("dispose",Y);if(W.get(X)!==U){if($.update(X.instanceMatrix,J.ARRAY_BUFFER),X.instanceColor!==null)$.update(X.instanceColor,J.ARRAY_BUFFER);W.set(X,U)}}if(X.isSkinnedMesh){let E=X.skeleton;if(W.get(E)!==U)E.update(),W.set(E,U)}return N}function H(){W=new WeakMap}function Y(X){let U=X.target;if(U.removeEventListener("dispose",Y),$.remove(U.instanceMatrix),U.instanceColor!==null)$.remove(U.instanceColor)}return{update:K,dispose:H}}var xW=new BJ,VW=new W7(1,1),gW=new a6,pW=new lQ,mW=new $7,LW=[],zW=[],BW=new Float32Array(16),IW=new Float32Array(9),_W=new Float32Array(4);function V9(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=LW[W];if(K===void 0)K=new Float32Array(W),LW[W]=K;if(Q!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function NJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function EJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function O7(J,Q){let $=zW[Q];if($===void 0)$=new Int32Array(Q),zW[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function nX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function sX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(NJ($,Q))return;J.uniform2fv(this.addr,Q),EJ($,Q)}}function iX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(NJ($,Q))return;J.uniform3fv(this.addr,Q),EJ($,Q)}}function oX(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(NJ($,Q))return;J.uniform4fv(this.addr,Q),EJ($,Q)}}function aX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(NJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),EJ($,Q)}else{if(NJ($,Z))return;_W.set(Z),J.uniformMatrix2fv(this.addr,!1,_W),EJ($,Z)}}function rX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(NJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),EJ($,Q)}else{if(NJ($,Z))return;IW.set(Z),J.uniformMatrix3fv(this.addr,!1,IW),EJ($,Z)}}function tX(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(NJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),EJ($,Q)}else{if(NJ($,Z))return;BW.set(Z),J.uniformMatrix4fv(this.addr,!1,BW),EJ($,Z)}}function eX(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function JU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(NJ($,Q))return;J.uniform2iv(this.addr,Q),EJ($,Q)}}function QU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(NJ($,Q))return;J.uniform3iv(this.addr,Q),EJ($,Q)}}function $U(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(NJ($,Q))return;J.uniform4iv(this.addr,Q),EJ($,Q)}}function ZU(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function WU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(NJ($,Q))return;J.uniform2uiv(this.addr,Q),EJ($,Q)}}function KU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(NJ($,Q))return;J.uniform3uiv(this.addr,Q),EJ($,Q)}}function HU(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(NJ($,Q))return;J.uniform4uiv(this.addr,Q),EJ($,Q)}}function YU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)VW.compareFunction=hQ,K=VW;else K=xW;$.setTexture2D(Q||K,W)}function XU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||pW,W)}function UU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||mW,W)}function GU(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||gW,W)}function NU(J){switch(J){case 5126:return nX;case 35664:return sX;case 35665:return iX;case 35666:return oX;case 35674:return aX;case 35675:return rX;case 35676:return tX;case 5124:case 35670:return eX;case 35667:case 35671:return JU;case 35668:case 35672:return QU;case 35669:case 35673:return $U;case 5125:return ZU;case 36294:return WU;case 36295:return KU;case 36296:return HU;case 35678:case 36198:case 36298:case 36306:case 35682:return YU;case 35679:case 36299:case 36307:return XU;case 35680:case 36300:case 36308:case 36293:return UU;case 36289:case 36303:case 36311:case 36292:return GU}}function EU(J,Q){J.uniform1fv(this.addr,Q)}function qU(J,Q){let $=V9(Q,this.size,2);J.uniform2fv(this.addr,$)}function DU(J,Q){let $=V9(Q,this.size,3);J.uniform3fv(this.addr,$)}function OU(J,Q){let $=V9(Q,this.size,4);J.uniform4fv(this.addr,$)}function FU(J,Q){let $=V9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function RU(J,Q){let $=V9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function kU(J,Q){let $=V9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function MU(J,Q){J.uniform1iv(this.addr,Q)}function VU(J,Q){J.uniform2iv(this.addr,Q)}function LU(J,Q){J.uniform3iv(this.addr,Q)}function zU(J,Q){J.uniform4iv(this.addr,Q)}function BU(J,Q){J.uniform1uiv(this.addr,Q)}function IU(J,Q){J.uniform2uiv(this.addr,Q)}function _U(J,Q){J.uniform3uiv(this.addr,Q)}function wU(J,Q){J.uniform4uiv(this.addr,Q)}function CU(J,Q,$){let Z=this.cache,W=Q.length,K=O7($,W);if(!NJ(Z,K))J.uniform1iv(this.addr,K),EJ(Z,K);for(let H=0;H!==W;++H)$.setTexture2D(Q[H]||xW,K[H])}function PU(J,Q,$){let Z=this.cache,W=Q.length,K=O7($,W);if(!NJ(Z,K))J.uniform1iv(this.addr,K),EJ(Z,K);for(let H=0;H!==W;++H)$.setTexture3D(Q[H]||pW,K[H])}function AU(J,Q,$){let Z=this.cache,W=Q.length,K=O7($,W);if(!NJ(Z,K))J.uniform1iv(this.addr,K),EJ(Z,K);for(let H=0;H!==W;++H)$.setTextureCube(Q[H]||mW,K[H])}function TU(J,Q,$){let Z=this.cache,W=Q.length,K=O7($,W);if(!NJ(Z,K))J.uniform1iv(this.addr,K),EJ(Z,K);for(let H=0;H!==W;++H)$.setTexture2DArray(Q[H]||gW,K[H])}function SU(J){switch(J){case 5126:return EU;case 35664:return qU;case 35665:return DU;case 35666:return OU;case 35674:return FU;case 35675:return RU;case 35676:return kU;case 5124:case 35670:return MU;case 35667:case 35671:return VU;case 35668:case 35672:return LU;case 35669:case 35673:return zU;case 5125:return BU;case 36294:return IU;case 36295:return _U;case 36296:return wU;case 35678:case 36198:case 36298:case 36306:case 35682:return CU;case 35679:case 36299:case 36307:return PU;case 35680:case 36300:case 36308:case 36293:return AU;case 36289:case 36303:case 36311:case 36292:return TU}}class dW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=NU(Q.type)}}class lW{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=SU(Q.type)}}class uW{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,Q[H.id],$)}}}var q$=/(\w+)(\])?(\[|\.)?/g;function wW(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function jU(J,Q,$){let Z=J.name,W=Z.length;q$.lastIndex=0;while(!0){let K=q$.exec(Z),H=q$.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){wW($,U===void 0?new dW(Y,J,Q):new lW(Y,J,Q));break}else{let N=$.map[Y];if(N===void 0)N=new uW(Y),wW($,N);$=N}}}class e9{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let Z=0;Z<$;++Z){let W=J.getActiveUniform(Q,Z),K=J.getUniformLocation(Q,W.name);jU(W,K,this)}}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function CW(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var yU=37297,vU=0;function fU(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var PW=new y0;function bU(J){m0._getMatrix(PW,m0.workingColorSpace,J);let Q=`mat3( ${PW.elements.map(($)=>$.toFixed(4))} )`;switch(m0.getTransfer(J)){case bQ:return[Q,"LinearTransferOETF"];case t0:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function AW(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+fU(J.getShaderSource(Q),Y)}else return K}function hU(J,Q){let $=bU(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}function xU(J,Q){let $;switch(Q){case TZ:$="Linear";break;case SZ:$="Reinhard";break;case jZ:$="Cineon";break;case yZ:$="ACESFilmic";break;case fZ:$="AgX";break;case bZ:$="Neutral";break;case vZ:$="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),$="Linear"}return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var D7=new v;function gU(){m0.getLuminanceCoefficients(D7);let J=D7.x.toFixed(4),Q=D7.y.toFixed(4),$=D7.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function pU(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(t9).join(`
`)}function mU(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function dU(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function t9(J){return J!==""}function TW(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function SW(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var lU=/^[ \t]*#include +<([\w\d./]+)>/gm;function O$(J){return J.replace(lU,cU)}var uU=new Map;function cU(J,Q){let $=v0[Q];if($===void 0){let Z=uU.get(Q);if(Z!==void 0)$=v0[Z],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return O$($)}var nU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jW(J){return J.replace(nU,sU)}function sU(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function yW(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}function iU(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===JQ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===HZ)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===oJ)Q="SHADOWMAP_TYPE_VSM";return Q}function oU(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case U9:case S8:Q="ENVMAP_TYPE_CUBE";break;case h9:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function aU(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case S8:Q="ENVMAP_MODE_REFRACTION";break}return Q}function rU(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case CZ:Q="ENVMAP_BLENDING_MULTIPLY";break;case PZ:Q="ENVMAP_BLENDING_MIX";break;case AZ:Q="ENVMAP_BLENDING_ADD";break}return Q}function tU(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function eU(J,Q,$,Z){let W=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=iU($),U=oU($),G=aU($),N=rU($),E=tU($),O=pU($),R=mU(K),M=W.createProgram(),q,D,I=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(t9).join(`
`),q.length>0)q+=`
`;if(D=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(t9).join(`
`),D.length>0)D+=`
`}else q=[yW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",$.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(t9).join(`
`),D=[yW($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+N:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor||$.batchingColor?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",$.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==X8?"#define TONE_MAPPING":"",$.toneMapping!==X8?v0.tonemapping_pars_fragment:"",$.toneMapping!==X8?xU("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",v0.colorspace_pars_fragment,hU("linearToOutputTexel",$.outputColorSpace),gU(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(t9).join(`
`);if(H=O$(H),H=TW(H,$),H=SW(H,$),Y=O$(Y),Y=TW(Y,$),Y=SW(Y,$),H=jW(H),Y=jW(Y),$.isRawShaderMaterial!==!0)I=`#version 300 es
`,q=[O,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+q,D=["#define varying in",$.glslVersion===xQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===xQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D;let L=I+q+H,w=I+D+Y,T=CW(W,W.VERTEX_SHADER,L),_=CW(W,W.FRAGMENT_SHADER,w);if(W.attachShader(M,T),W.attachShader(M,_),$.index0AttributeName!==void 0)W.bindAttribLocation(M,0,$.index0AttributeName);else if($.morphTargets===!0)W.bindAttribLocation(M,0,"position");W.linkProgram(M);function A(j){if(J.debug.checkShaderErrors){let l=W.getProgramInfoLog(M)||"",p=W.getShaderInfoLog(T)||"",c=W.getShaderInfoLog(_)||"",o=l.trim(),u=p.trim(),r=c.trim(),x=!0,Z0=!0;if(W.getProgramParameter(M,W.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,M,T,_);else{let U0=AW(W,T,"vertex"),P0=AW(W,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(M,W.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+o+`
`+U0+`
`+P0)}else if(o!=="")console.warn("THREE.WebGLProgram: Program Info Log:",o);else if(u===""||r==="")Z0=!1;if(Z0)j.diagnostics={runnable:x,programLog:o,vertexShader:{log:u,prefix:q},fragmentShader:{log:r,prefix:D}}}W.deleteShader(T),W.deleteShader(_),m=new e9(W,M),z=dU(W,M)}let m;this.getUniforms=function(){if(m===void 0)A(this);return m};let z;this.getAttributes=function(){if(z===void 0)A(this);return z};let V=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(V===!1)V=W.getProgramParameter(M,yU);return V},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(M),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=vU++,this.cacheKey=Q,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=_,this}var JG=0;class cW{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),W=this._getShaderStage($),K=this._getShaderCacheForMaterial(J);if(K.has(Z)===!1)K.add(Z),Z.usedTimes++;if(K.has(W)===!1)K.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new nW(J),Q.set(J,$);return $}}class nW{constructor(J){this.id=JG++,this.code=J,this.usedTimes=0}}function QG(J,Q,$,Z,W,K,H){let Y=new r6,X=new cW,U=new Set,G=[],N=W.logarithmicDepthBuffer,E=W.vertexTextures,O=W.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function q(z,V,j,l,p){let c=l.fog,o=p.geometry,u=z.isMeshStandardMaterial?l.environment:null,r=(z.isMeshStandardMaterial?$:Q).get(z.envMap||u),x=!!r&&r.mapping===h9?r.image.height:null,Z0=R[z.type];if(z.precision!==null){if(O=W.getMaxPrecision(z.precision),O!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",O,"instead.")}let U0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,P0=U0!==void 0?U0.length:0,g0=0;if(o.morphAttributes.position!==void 0)g0=1;if(o.morphAttributes.normal!==void 0)g0=2;if(o.morphAttributes.color!==void 0)g0=3;let JJ,d,W0,k0;if(Z0){let s0=eJ[Z0];JJ=s0.vertexShader,d=s0.fragmentShader}else JJ=z.vertexShader,d=z.fragmentShader,X.update(z),W0=X.getVertexShaderID(z),k0=X.getFragmentShaderID(z);let G0=J.getRenderTarget(),F0=J.state.buffers.depth.getReversed(),p0=p.isInstancedMesh===!0,l0=p.isBatchedMesh===!0,h0=!!z.map,C=!!z.matcap,r0=!!r,I0=!!z.aoMap,c0=!!z.lightMap,z0=!!z.bumpMap,QJ=!!z.normalMap,M0=!!z.displacementMap,w0=!!z.emissiveMap,OJ=!!z.metalnessMap,qJ=!!z.roughnessMap,UJ=z.anisotropy>0,B=z.clearcoat>0,F=z.dispersion>0,f=z.iridescence>0,n=z.sheen>0,i=z.transmission>0,g=UJ&&!!z.anisotropyMap,E0=B&&!!z.clearcoatMap,J0=B&&!!z.clearcoatNormalMap,R0=B&&!!z.clearcoatRoughnessMap,A0=f&&!!z.iridescenceMap,e=f&&!!z.iridescenceThicknessMap,Y0=n&&!!z.sheenColorMap,V0=n&&!!z.sheenRoughnessMap,L0=!!z.specularMap,X0=!!z.specularColorMap,f0=!!z.specularIntensityMap,P=i&&!!z.transmissionMap,K0=i&&!!z.thicknessMap,Q0=!!z.gradientMap,q0=!!z.alphaMap,a=z.alphaTest>0,s=!!z.alphaHash,O0=!!z.extensions,S0=X8;if(z.toneMapped){if(G0===null||G0.isXRRenderTarget===!0)S0=J.toneMapping}let o0={shaderID:Z0,shaderType:z.type,shaderName:z.name,vertexShader:JJ,fragmentShader:d,defines:z.defines,customVertexShaderID:W0,customFragmentShaderID:k0,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:O,batching:l0,batchingColor:l0&&p._colorsTexture!==null,instancing:p0,instancingColor:p0&&p.instanceColor!==null,instancingMorph:p0&&p.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:G0===null?J.outputColorSpace:G0.isXRRenderTarget===!0?G0.texture.colorSpace:d9,alphaToCoverage:!!z.alphaToCoverage,map:h0,matcap:C,envMap:r0,envMapMode:r0&&r.mapping,envMapCubeUVHeight:x,aoMap:I0,lightMap:c0,bumpMap:z0,normalMap:QJ,displacementMap:E&&M0,emissiveMap:w0,normalMapObjectSpace:QJ&&z.normalMapType===rZ,normalMapTangentSpace:QJ&&z.normalMapType===aZ,metalnessMap:OJ,roughnessMap:qJ,anisotropy:UJ,anisotropyMap:g,clearcoat:B,clearcoatMap:E0,clearcoatNormalMap:J0,clearcoatRoughnessMap:R0,dispersion:F,iridescence:f,iridescenceMap:A0,iridescenceThicknessMap:e,sheen:n,sheenColorMap:Y0,sheenRoughnessMap:V0,specularMap:L0,specularColorMap:X0,specularIntensityMap:f0,transmission:i,transmissionMap:P,thicknessMap:K0,gradientMap:Q0,opaque:z.transparent===!1&&z.blending===f9&&z.alphaToCoverage===!1,alphaMap:q0,alphaTest:a,alphaHash:s,combine:z.combine,mapUv:h0&&M(z.map.channel),aoMapUv:I0&&M(z.aoMap.channel),lightMapUv:c0&&M(z.lightMap.channel),bumpMapUv:z0&&M(z.bumpMap.channel),normalMapUv:QJ&&M(z.normalMap.channel),displacementMapUv:M0&&M(z.displacementMap.channel),emissiveMapUv:w0&&M(z.emissiveMap.channel),metalnessMapUv:OJ&&M(z.metalnessMap.channel),roughnessMapUv:qJ&&M(z.roughnessMap.channel),anisotropyMapUv:g&&M(z.anisotropyMap.channel),clearcoatMapUv:E0&&M(z.clearcoatMap.channel),clearcoatNormalMapUv:J0&&M(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R0&&M(z.clearcoatRoughnessMap.channel),iridescenceMapUv:A0&&M(z.iridescenceMap.channel),iridescenceThicknessMapUv:e&&M(z.iridescenceThicknessMap.channel),sheenColorMapUv:Y0&&M(z.sheenColorMap.channel),sheenRoughnessMapUv:V0&&M(z.sheenRoughnessMap.channel),specularMapUv:L0&&M(z.specularMap.channel),specularColorMapUv:X0&&M(z.specularColorMap.channel),specularIntensityMapUv:f0&&M(z.specularIntensityMap.channel),transmissionMapUv:P&&M(z.transmissionMap.channel),thicknessMapUv:K0&&M(z.thicknessMap.channel),alphaMapUv:q0&&M(z.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(QJ||UJ),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:p.isPoints===!0&&!!o.attributes.uv&&(h0||q0),fog:!!c,useFog:z.fog===!0,fogExp2:!!c&&c.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:F0,skinning:p.isSkinnedMesh===!0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:P0,morphTextureStride:g0,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numClippingPlanes:H.numPlanes,numClipIntersection:H.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&j.length>0,shadowMapType:J.shadowMap.type,toneMapping:S0,decodeVideoTexture:h0&&z.map.isVideoTexture===!0&&m0.getTransfer(z.map.colorSpace)===t0,decodeVideoTextureEmissive:w0&&z.emissiveMap.isVideoTexture===!0&&m0.getTransfer(z.emissiveMap.colorSpace)===t0,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===aJ,flipSided:z.side===SJ,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:O0&&z.extensions.clipCullDistance===!0&&Z.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&z.extensions.multiDraw===!0||l0)&&Z.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Z.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return o0.vertexUv1s=U.has(1),o0.vertexUv2s=U.has(2),o0.vertexUv3s=U.has(3),U.clear(),o0}function D(z){let V=[];if(z.shaderID)V.push(z.shaderID);else V.push(z.customVertexShaderID),V.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let j in z.defines)V.push(j),V.push(z.defines[j]);if(z.isRawShaderMaterial===!1)I(V,z),L(V,z),V.push(J.outputColorSpace);return V.push(z.customProgramCacheKey),V.join()}function I(z,V){z.push(V.precision),z.push(V.outputColorSpace),z.push(V.envMapMode),z.push(V.envMapCubeUVHeight),z.push(V.mapUv),z.push(V.alphaMapUv),z.push(V.lightMapUv),z.push(V.aoMapUv),z.push(V.bumpMapUv),z.push(V.normalMapUv),z.push(V.displacementMapUv),z.push(V.emissiveMapUv),z.push(V.metalnessMapUv),z.push(V.roughnessMapUv),z.push(V.anisotropyMapUv),z.push(V.clearcoatMapUv),z.push(V.clearcoatNormalMapUv),z.push(V.clearcoatRoughnessMapUv),z.push(V.iridescenceMapUv),z.push(V.iridescenceThicknessMapUv),z.push(V.sheenColorMapUv),z.push(V.sheenRoughnessMapUv),z.push(V.specularMapUv),z.push(V.specularColorMapUv),z.push(V.specularIntensityMapUv),z.push(V.transmissionMapUv),z.push(V.thicknessMapUv),z.push(V.combine),z.push(V.fogExp2),z.push(V.sizeAttenuation),z.push(V.morphTargetsCount),z.push(V.morphAttributeCount),z.push(V.numDirLights),z.push(V.numPointLights),z.push(V.numSpotLights),z.push(V.numSpotLightMaps),z.push(V.numHemiLights),z.push(V.numRectAreaLights),z.push(V.numDirLightShadows),z.push(V.numPointLightShadows),z.push(V.numSpotLightShadows),z.push(V.numSpotLightShadowsWithMaps),z.push(V.numLightProbes),z.push(V.shadowMapType),z.push(V.toneMapping),z.push(V.numClippingPlanes),z.push(V.numClipIntersection),z.push(V.depthPacking)}function L(z,V){if(Y.disableAll(),V.supportsVertexTextures)Y.enable(0);if(V.instancing)Y.enable(1);if(V.instancingColor)Y.enable(2);if(V.instancingMorph)Y.enable(3);if(V.matcap)Y.enable(4);if(V.envMap)Y.enable(5);if(V.normalMapObjectSpace)Y.enable(6);if(V.normalMapTangentSpace)Y.enable(7);if(V.clearcoat)Y.enable(8);if(V.iridescence)Y.enable(9);if(V.alphaTest)Y.enable(10);if(V.vertexColors)Y.enable(11);if(V.vertexAlphas)Y.enable(12);if(V.vertexUv1s)Y.enable(13);if(V.vertexUv2s)Y.enable(14);if(V.vertexUv3s)Y.enable(15);if(V.vertexTangents)Y.enable(16);if(V.anisotropy)Y.enable(17);if(V.alphaHash)Y.enable(18);if(V.batching)Y.enable(19);if(V.dispersion)Y.enable(20);if(V.batchingColor)Y.enable(21);if(V.gradientMap)Y.enable(22);if(z.push(Y.mask),Y.disableAll(),V.fog)Y.enable(0);if(V.useFog)Y.enable(1);if(V.flatShading)Y.enable(2);if(V.logarithmicDepthBuffer)Y.enable(3);if(V.reversedDepthBuffer)Y.enable(4);if(V.skinning)Y.enable(5);if(V.morphTargets)Y.enable(6);if(V.morphNormals)Y.enable(7);if(V.morphColors)Y.enable(8);if(V.premultipliedAlpha)Y.enable(9);if(V.shadowMapEnabled)Y.enable(10);if(V.doubleSided)Y.enable(11);if(V.flipSided)Y.enable(12);if(V.useDepthPacking)Y.enable(13);if(V.dithering)Y.enable(14);if(V.transmission)Y.enable(15);if(V.sheen)Y.enable(16);if(V.opaque)Y.enable(17);if(V.pointsUvs)Y.enable(18);if(V.decodeVideoTexture)Y.enable(19);if(V.decodeVideoTextureEmissive)Y.enable(20);if(V.alphaToCoverage)Y.enable(21);z.push(Y.mask)}function w(z){let V=R[z.type],j;if(V){let l=eJ[V];j=XW.clone(l.uniforms)}else j=z.uniforms;return j}function T(z,V){let j;for(let l=0,p=G.length;l<p;l++){let c=G[l];if(c.cacheKey===V){j=c,++j.usedTimes;break}}if(j===void 0)j=new eU(J,V,z,K),G.push(j);return j}function _(z){if(--z.usedTimes===0){let V=G.indexOf(z);G[V]=G[G.length-1],G.pop(),z.destroy()}}function A(z){X.remove(z)}function m(){X.dispose()}return{getParameters:q,getProgramCacheKey:D,getUniforms:w,acquireProgram:T,releaseProgram:_,releaseShaderCache:A,programs:G,dispose:m}}function $G(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function ZG(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function vW(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function fW(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function H(N,E,O,R,M,q){let D=J[Q];if(D===void 0)D={id:N.id,object:N,geometry:E,material:O,groupOrder:R,renderOrder:N.renderOrder,z:M,group:q},J[Q]=D;else D.id=N.id,D.object=N,D.geometry=E,D.material=O,D.groupOrder=R,D.renderOrder=N.renderOrder,D.z=M,D.group=q;return Q++,D}function Y(N,E,O,R,M,q){let D=H(N,E,O,R,M,q);if(O.transmission>0)Z.push(D);else if(O.transparent===!0)W.push(D);else $.push(D)}function X(N,E,O,R,M,q){let D=H(N,E,O,R,M,q);if(O.transmission>0)Z.unshift(D);else if(O.transparent===!0)W.unshift(D);else $.unshift(D)}function U(N,E){if($.length>1)$.sort(N||ZG);if(Z.length>1)Z.sort(E||vW);if(W.length>1)W.sort(E||vW)}function G(){for(let N=Q,E=J.length;N<E;N++){let O=J[N];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:Y,unshift:X,finish:G,sort:U}}function WG(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),H;if(K===void 0)H=new fW,J.set(Z,[H]);else if(W>=K.length)H=new fW,K.push(H);else H=K[W];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function KG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new v,color:new j0};break;case"SpotLight":$={position:new v,direction:new v,color:new j0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new v,color:new j0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new v,skyColor:new j0,groundColor:new j0};break;case"RectAreaLight":$={color:new j0,position:new v,halfWidth:new v,halfHeight:new v};break}return J[Q.id]=$,$}}}function HG(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new d0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var YG=0;function XG(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function UG(J){let Q=new KG,$=HG(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new v);let W=new v,K=new $J,H=new $J;function Y(U){let G=0,N=0,E=0;for(let z=0;z<9;z++)Z.probe[z].set(0,0,0);let O=0,R=0,M=0,q=0,D=0,I=0,L=0,w=0,T=0,_=0,A=0;U.sort(XG);for(let z=0,V=U.length;z<V;z++){let j=U[z],l=j.color,p=j.intensity,c=j.distance,o=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)G+=l.r*p,N+=l.g*p,E+=l.b*p;else if(j.isLightProbe){for(let u=0;u<9;u++)Z.probe[u].addScaledVector(j.sh.coefficients[u],p);A++}else if(j.isDirectionalLight){let u=Q.get(j);if(u.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){let r=j.shadow,x=$.get(j);x.shadowIntensity=r.intensity,x.shadowBias=r.bias,x.shadowNormalBias=r.normalBias,x.shadowRadius=r.radius,x.shadowMapSize=r.mapSize,Z.directionalShadow[O]=x,Z.directionalShadowMap[O]=o,Z.directionalShadowMatrix[O]=j.shadow.matrix,I++}Z.directional[O]=u,O++}else if(j.isSpotLight){let u=Q.get(j);u.position.setFromMatrixPosition(j.matrixWorld),u.color.copy(l).multiplyScalar(p),u.distance=c,u.coneCos=Math.cos(j.angle),u.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),u.decay=j.decay,Z.spot[M]=u;let r=j.shadow;if(j.map){if(Z.spotLightMap[T]=j.map,T++,r.updateMatrices(j),j.castShadow)_++}if(Z.spotLightMatrix[M]=r.matrix,j.castShadow){let x=$.get(j);x.shadowIntensity=r.intensity,x.shadowBias=r.bias,x.shadowNormalBias=r.normalBias,x.shadowRadius=r.radius,x.shadowMapSize=r.mapSize,Z.spotShadow[M]=x,Z.spotShadowMap[M]=o,w++}M++}else if(j.isRectAreaLight){let u=Q.get(j);u.color.copy(l).multiplyScalar(p),u.halfWidth.set(j.width*0.5,0,0),u.halfHeight.set(0,j.height*0.5,0),Z.rectArea[q]=u,q++}else if(j.isPointLight){let u=Q.get(j);if(u.color.copy(j.color).multiplyScalar(j.intensity),u.distance=j.distance,u.decay=j.decay,j.castShadow){let r=j.shadow,x=$.get(j);x.shadowIntensity=r.intensity,x.shadowBias=r.bias,x.shadowNormalBias=r.normalBias,x.shadowRadius=r.radius,x.shadowMapSize=r.mapSize,x.shadowCameraNear=r.camera.near,x.shadowCameraFar=r.camera.far,Z.pointShadow[R]=x,Z.pointShadowMap[R]=o,Z.pointShadowMatrix[R]=j.shadow.matrix,L++}Z.point[R]=u,R++}else if(j.isHemisphereLight){let u=Q.get(j);u.skyColor.copy(j.color).multiplyScalar(p),u.groundColor.copy(j.groundColor).multiplyScalar(p),Z.hemi[D]=u,D++}}if(q>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=$0.LTC_FLOAT_1,Z.rectAreaLTC2=$0.LTC_FLOAT_2;else Z.rectAreaLTC1=$0.LTC_HALF_1,Z.rectAreaLTC2=$0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=N,Z.ambient[2]=E;let m=Z.hash;if(m.directionalLength!==O||m.pointLength!==R||m.spotLength!==M||m.rectAreaLength!==q||m.hemiLength!==D||m.numDirectionalShadows!==I||m.numPointShadows!==L||m.numSpotShadows!==w||m.numSpotMaps!==T||m.numLightProbes!==A)Z.directional.length=O,Z.spot.length=M,Z.rectArea.length=q,Z.point.length=R,Z.hemi.length=D,Z.directionalShadow.length=I,Z.directionalShadowMap.length=I,Z.pointShadow.length=L,Z.pointShadowMap.length=L,Z.spotShadow.length=w,Z.spotShadowMap.length=w,Z.directionalShadowMatrix.length=I,Z.pointShadowMatrix.length=L,Z.spotLightMatrix.length=w+T-_,Z.spotLightMap.length=T,Z.numSpotLightShadowsWithMaps=_,Z.numLightProbes=A,m.directionalLength=O,m.pointLength=R,m.spotLength=M,m.rectAreaLength=q,m.hemiLength=D,m.numDirectionalShadows=I,m.numPointShadows=L,m.numSpotShadows=w,m.numSpotMaps=T,m.numLightProbes=A,Z.version=YG++}function X(U,G){let N=0,E=0,O=0,R=0,M=0,q=G.matrixWorldInverse;for(let D=0,I=U.length;D<I;D++){let L=U[D];if(L.isDirectionalLight){let w=Z.directional[N];w.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(W),w.direction.transformDirection(q),N++}else if(L.isSpotLight){let w=Z.spot[O];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(q),w.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(W),w.direction.transformDirection(q),O++}else if(L.isRectAreaLight){let w=Z.rectArea[R];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(q),H.identity(),K.copy(L.matrixWorld),K.premultiply(q),H.extractRotation(K),w.halfWidth.set(L.width*0.5,0,0),w.halfHeight.set(0,L.height*0.5,0),w.halfWidth.applyMatrix4(H),w.halfHeight.applyMatrix4(H),R++}else if(L.isPointLight){let w=Z.point[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(q),E++}else if(L.isHemisphereLight){let w=Z.hemi[M];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(q),M++}}}return{setup:Y,setupView:X,state:Z}}function bW(J){let Q=new UG(J),$=[],Z=[];function W(G){U.camera=G,$.length=0,Z.length=0}function K(G){$.push(G)}function H(G){Z.push(G)}function Y(){Q.setup($)}function X(G){Q.setupView($,G)}let U={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:Y,setupLightsView:X,pushLight:K,pushShadow:H}}function GG(J){let Q=new WeakMap;function $(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new bW(J),Q.set(W,[Y]);else if(K>=H.length)Y=new bW(J),H.push(Y);else Y=H[K];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var NG=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EG=`uniform sampler2D shadow_pass;
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
}`;function qG(J,Q,$){let Z=new s9,W=new d0,K=new d0,H=new KJ,Y=new iQ({depthPacking:oZ}),X=new oQ,U={},G=$.maxTextureSize,N={[Y9]:SJ,[SJ]:Y9,[aJ]:aJ},E=new tJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new d0},radius:{value:4}},vertexShader:NG,fragmentShader:EG}),O=E.clone();O.defines.HORIZONTAL_PASS=1;let R=new MJ;R.setAttribute("position",new gJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let M=new FJ(R,E),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=JQ;let D=this.type;this.render=function(_,A,m){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(_.length===0)return;let z=J.getRenderTarget(),V=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),l=J.state;if(l.setBlending(F8),l.buffers.depth.getReversed())l.buffers.color.setClear(0,0,0,0);else l.buffers.color.setClear(1,1,1,1);l.buffers.depth.setTest(!0),l.setScissorTest(!1);let p=D!==oJ&&this.type===oJ,c=D===oJ&&this.type!==oJ;for(let o=0,u=_.length;o<u;o++){let r=_[o],x=r.shadow;if(x===void 0){console.warn("THREE.WebGLShadowMap:",r,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;W.copy(x.mapSize);let Z0=x.getFrameExtents();if(W.multiply(Z0),K.copy(x.mapSize),W.x>G||W.y>G){if(W.x>G)K.x=Math.floor(G/Z0.x),W.x=K.x*Z0.x,x.mapSize.x=K.x;if(W.y>G)K.y=Math.floor(G/Z0.y),W.y=K.y*Z0.y,x.mapSize.y=K.y}if(x.map===null||p===!0||c===!0){let P0=this.type!==oJ?{minFilter:G9,magFilter:G9}:{};if(x.map!==null)x.map.dispose();x.map=new cJ(W.x,W.y,P0),x.map.texture.name=r.name+".shadowMap",x.camera.updateProjectionMatrix()}J.setRenderTarget(x.map),J.clear();let U0=x.getViewportCount();for(let P0=0;P0<U0;P0++){let g0=x.getViewport(P0);H.set(K.x*g0.x,K.y*g0.y,K.x*g0.z,K.y*g0.w),l.viewport(H),x.updateMatrices(r,P0),Z=x.getFrustum(),w(A,m,x.camera,r,this.type)}if(x.isPointLightShadow!==!0&&this.type===oJ)I(x,m);x.needsUpdate=!1}D=this.type,q.needsUpdate=!1,J.setRenderTarget(z,V,j)};function I(_,A){let m=Q.update(M);if(E.defines.VSM_SAMPLES!==_.blurSamples)E.defines.VSM_SAMPLES=_.blurSamples,O.defines.VSM_SAMPLES=_.blurSamples,E.needsUpdate=!0,O.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new cJ(W.x,W.y);E.uniforms.shadow_pass.value=_.map.texture,E.uniforms.resolution.value=_.mapSize,E.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(A,null,m,E,M,null),O.uniforms.shadow_pass.value=_.mapPass.texture,O.uniforms.resolution.value=_.mapSize,O.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(A,null,m,O,M,null)}function L(_,A,m,z){let V=null,j=m.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(j!==void 0)V=j;else if(V=m.isPointLight===!0?X:Y,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let l=V.uuid,p=A.uuid,c=U[l];if(c===void 0)c={},U[l]=c;let o=c[p];if(o===void 0)o=V.clone(),c[p]=o,A.addEventListener("dispose",T);V=o}if(V.visible=A.visible,V.wireframe=A.wireframe,z===oJ)V.side=A.shadowSide!==null?A.shadowSide:A.side;else V.side=A.shadowSide!==null?A.shadowSide:N[A.side];if(V.alphaMap=A.alphaMap,V.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,V.map=A.map,V.clipShadows=A.clipShadows,V.clippingPlanes=A.clippingPlanes,V.clipIntersection=A.clipIntersection,V.displacementMap=A.displacementMap,V.displacementScale=A.displacementScale,V.displacementBias=A.displacementBias,V.wireframeLinewidth=A.wireframeLinewidth,V.linewidth=A.linewidth,m.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let l=J.properties.get(V);l.light=m}return V}function w(_,A,m,z,V){if(_.visible===!1)return;if(_.layers.test(A.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&V===oJ)&&(!_.frustumCulled||Z.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,_.matrixWorld);let p=Q.update(_),c=_.material;if(Array.isArray(c)){let o=p.groups;for(let u=0,r=o.length;u<r;u++){let x=o[u],Z0=c[x.materialIndex];if(Z0&&Z0.visible){let U0=L(_,Z0,z,V);_.onBeforeShadow(J,_,A,m,p,U0,x),J.renderBufferDirect(m,null,p,U0,_,x),_.onAfterShadow(J,_,A,m,p,U0,x)}}}else if(c.visible){let o=L(_,c,z,V);_.onBeforeShadow(J,_,A,m,p,o,null),J.renderBufferDirect(m,null,p,o,_,null),_.onAfterShadow(J,_,A,m,p,o,null)}}}let l=_.children;for(let p=0,c=l.length;p<c;p++)w(l[p],A,m,z,V)}function T(_){_.target.removeEventListener("dispose",T);for(let m in U){let z=U[m],V=_.target.uuid;if(V in z)z[V].dispose(),delete z[V]}}}var DG={[y6]:v6,[f6]:x6,[b6]:g6,[b9]:h6,[v6]:y6,[x6]:f6,[g6]:b6,[h6]:b9};function OG(J,Q){function $(){let P=!1,K0=new KJ,Q0=null,q0=new KJ(0,0,0,0);return{setMask:function(a){if(Q0!==a&&!P)J.colorMask(a,a,a,a),Q0=a},setLocked:function(a){P=a},setClear:function(a,s,O0,S0,o0){if(o0===!0)a*=S0,s*=S0,O0*=S0;if(K0.set(a,s,O0,S0),q0.equals(K0)===!1)J.clearColor(a,s,O0,S0),q0.copy(K0)},reset:function(){P=!1,Q0=null,q0.set(-1,0,0,0)}}}function Z(){let P=!1,K0=!1,Q0=null,q0=null,a=null;return{setReversed:function(s){if(K0!==s){let O0=Q.get("EXT_clip_control");if(s)O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.ZERO_TO_ONE_EXT);else O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.NEGATIVE_ONE_TO_ONE_EXT);K0=s;let S0=a;a=null,this.setClear(S0)}},getReversed:function(){return K0},setTest:function(s){if(s)G0(J.DEPTH_TEST);else F0(J.DEPTH_TEST)},setMask:function(s){if(Q0!==s&&!P)J.depthMask(s),Q0=s},setFunc:function(s){if(K0)s=DG[s];if(q0!==s){switch(s){case y6:J.depthFunc(J.NEVER);break;case v6:J.depthFunc(J.ALWAYS);break;case f6:J.depthFunc(J.LESS);break;case b9:J.depthFunc(J.LEQUAL);break;case b6:J.depthFunc(J.EQUAL);break;case h6:J.depthFunc(J.GEQUAL);break;case x6:J.depthFunc(J.GREATER);break;case g6:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}q0=s}},setLocked:function(s){P=s},setClear:function(s){if(a!==s){if(K0)s=1-s;J.clearDepth(s),a=s}},reset:function(){P=!1,Q0=null,q0=null,a=null,K0=!1}}}function W(){let P=!1,K0=null,Q0=null,q0=null,a=null,s=null,O0=null,S0=null,o0=null;return{setTest:function(s0){if(!P)if(s0)G0(J.STENCIL_TEST);else F0(J.STENCIL_TEST)},setMask:function(s0){if(K0!==s0&&!P)J.stencilMask(s0),K0=s0},setFunc:function(s0,nJ,sJ){if(Q0!==s0||q0!==nJ||a!==sJ)J.stencilFunc(s0,nJ,sJ),Q0=s0,q0=nJ,a=sJ},setOp:function(s0,nJ,sJ){if(s!==s0||O0!==nJ||S0!==sJ)J.stencilOp(s0,nJ,sJ),s=s0,O0=nJ,S0=sJ},setLocked:function(s0){P=s0},setClear:function(s0){if(o0!==s0)J.clearStencil(s0),o0=s0},reset:function(){P=!1,K0=null,Q0=null,q0=null,a=null,s=null,O0=null,S0=null,o0=null}}}let K=new $,H=new Z,Y=new W,X=new WeakMap,U=new WeakMap,G={},N={},E=new WeakMap,O=[],R=null,M=!1,q=null,D=null,I=null,L=null,w=null,T=null,_=null,A=new j0(0,0,0),m=0,z=!1,V=null,j=null,l=null,p=null,c=null,o=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),u=!1,r=0,x=J.getParameter(J.VERSION);if(x.indexOf("WebGL")!==-1)r=parseFloat(/^WebGL (\d)/.exec(x)[1]),u=r>=1;else if(x.indexOf("OpenGL ES")!==-1)r=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),u=r>=2;let Z0=null,U0={},P0=J.getParameter(J.SCISSOR_BOX),g0=J.getParameter(J.VIEWPORT),JJ=new KJ().fromArray(P0),d=new KJ().fromArray(g0);function W0(P,K0,Q0,q0){let a=new Uint8Array(4),s=J.createTexture();J.bindTexture(P,s),J.texParameteri(P,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(P,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let O0=0;O0<Q0;O0++)if(P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texImage3D(K0,0,J.RGBA,1,1,q0,0,J.RGBA,J.UNSIGNED_BYTE,a);else J.texImage2D(K0+O0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,a);return s}let k0={};k0[J.TEXTURE_2D]=W0(J.TEXTURE_2D,J.TEXTURE_2D,1),k0[J.TEXTURE_CUBE_MAP]=W0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),k0[J.TEXTURE_2D_ARRAY]=W0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),k0[J.TEXTURE_3D]=W0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),G0(J.DEPTH_TEST),H.setFunc(b9),z0(!1),QJ(e7),G0(J.CULL_FACE),I0(F8);function G0(P){if(G[P]!==!0)J.enable(P),G[P]=!0}function F0(P){if(G[P]!==!1)J.disable(P),G[P]=!1}function p0(P,K0){if(N[P]!==K0){if(J.bindFramebuffer(P,K0),N[P]=K0,P===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=K0;if(P===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=K0;return!0}return!1}function l0(P,K0){let Q0=O,q0=!1;if(P){if(Q0=E.get(K0),Q0===void 0)Q0=[],E.set(K0,Q0);let a=P.textures;if(Q0.length!==a.length||Q0[0]!==J.COLOR_ATTACHMENT0){for(let s=0,O0=a.length;s<O0;s++)Q0[s]=J.COLOR_ATTACHMENT0+s;Q0.length=a.length,q0=!0}}else if(Q0[0]!==J.BACK)Q0[0]=J.BACK,q0=!0;if(q0)J.drawBuffers(Q0)}function h0(P){if(R!==P)return J.useProgram(P),R=P,!0;return!1}let C={[X9]:J.FUNC_ADD,[XZ]:J.FUNC_SUBTRACT,[UZ]:J.FUNC_REVERSE_SUBTRACT};C[GZ]=J.MIN,C[NZ]=J.MAX;let r0={[EZ]:J.ZERO,[qZ]:J.ONE,[DZ]:J.SRC_COLOR,[FZ]:J.SRC_ALPHA,[zZ]:J.SRC_ALPHA_SATURATE,[VZ]:J.DST_COLOR,[kZ]:J.DST_ALPHA,[OZ]:J.ONE_MINUS_SRC_COLOR,[RZ]:J.ONE_MINUS_SRC_ALPHA,[LZ]:J.ONE_MINUS_DST_COLOR,[MZ]:J.ONE_MINUS_DST_ALPHA,[BZ]:J.CONSTANT_COLOR,[IZ]:J.ONE_MINUS_CONSTANT_COLOR,[_Z]:J.CONSTANT_ALPHA,[wZ]:J.ONE_MINUS_CONSTANT_ALPHA};function I0(P,K0,Q0,q0,a,s,O0,S0,o0,s0){if(P===F8){if(M===!0)F0(J.BLEND),M=!1;return}if(M===!1)G0(J.BLEND),M=!0;if(P!==YZ){if(P!==q||s0!==z){if(D!==X9||w!==X9)J.blendEquation(J.FUNC_ADD),D=X9,w=X9;if(s0)switch(P){case f9:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case QQ:J.blendFunc(J.ONE,J.ONE);break;case $Q:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case ZQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case f9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case QQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case $Q:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ZQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}I=null,L=null,T=null,_=null,A.set(0,0,0),m=0,q=P,z=s0}return}if(a=a||K0,s=s||Q0,O0=O0||q0,K0!==D||a!==w)J.blendEquationSeparate(C[K0],C[a]),D=K0,w=a;if(Q0!==I||q0!==L||s!==T||O0!==_)J.blendFuncSeparate(r0[Q0],r0[q0],r0[s],r0[O0]),I=Q0,L=q0,T=s,_=O0;if(S0.equals(A)===!1||o0!==m)J.blendColor(S0.r,S0.g,S0.b,o0),A.copy(S0),m=o0;q=P,z=!1}function c0(P,K0){P.side===aJ?F0(J.CULL_FACE):G0(J.CULL_FACE);let Q0=P.side===SJ;if(K0)Q0=!Q0;z0(Q0),P.blending===f9&&P.transparent===!1?I0(F8):I0(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),H.setFunc(P.depthFunc),H.setTest(P.depthTest),H.setMask(P.depthWrite),K.setMask(P.colorWrite);let q0=P.stencilWrite;if(Y.setTest(q0),q0)Y.setMask(P.stencilWriteMask),Y.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),Y.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);w0(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?G0(J.SAMPLE_ALPHA_TO_COVERAGE):F0(J.SAMPLE_ALPHA_TO_COVERAGE)}function z0(P){if(V!==P){if(P)J.frontFace(J.CW);else J.frontFace(J.CCW);V=P}}function QJ(P){if(P!==WZ){if(G0(J.CULL_FACE),P!==j)if(P===e7)J.cullFace(J.BACK);else if(P===KZ)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else F0(J.CULL_FACE);j=P}function M0(P){if(P!==l){if(u)J.lineWidth(P);l=P}}function w0(P,K0,Q0){if(P){if(G0(J.POLYGON_OFFSET_FILL),p!==K0||c!==Q0)J.polygonOffset(K0,Q0),p=K0,c=Q0}else F0(J.POLYGON_OFFSET_FILL)}function OJ(P){if(P)G0(J.SCISSOR_TEST);else F0(J.SCISSOR_TEST)}function qJ(P){if(P===void 0)P=J.TEXTURE0+o-1;if(Z0!==P)J.activeTexture(P),Z0=P}function UJ(P,K0,Q0){if(Q0===void 0)if(Z0===null)Q0=J.TEXTURE0+o-1;else Q0=Z0;let q0=U0[Q0];if(q0===void 0)q0={type:void 0,texture:void 0},U0[Q0]=q0;if(q0.type!==P||q0.texture!==K0){if(Z0!==Q0)J.activeTexture(Q0),Z0=Q0;J.bindTexture(P,K0||k0[P]),q0.type=P,q0.texture=K0}}function B(){let P=U0[Z0];if(P!==void 0&&P.type!==void 0)J.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function F(){try{J.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function f(){try{J.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function n(){try{J.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function i(){try{J.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function g(){try{J.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E0(){try{J.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J0(){try{J.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function R0(){try{J.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A0(){try{J.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function e(){try{J.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Y0(P){if(JJ.equals(P)===!1)J.scissor(P.x,P.y,P.z,P.w),JJ.copy(P)}function V0(P){if(d.equals(P)===!1)J.viewport(P.x,P.y,P.z,P.w),d.copy(P)}function L0(P,K0){let Q0=U.get(K0);if(Q0===void 0)Q0=new WeakMap,U.set(K0,Q0);let q0=Q0.get(P);if(q0===void 0)q0=J.getUniformBlockIndex(K0,P.name),Q0.set(P,q0)}function X0(P,K0){let q0=U.get(K0).get(P);if(X.get(K0)!==q0)J.uniformBlockBinding(K0,q0,P.__bindingPointIndex),X.set(K0,q0)}function f0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},Z0=null,U0={},N={},E=new WeakMap,O=[],R=null,M=!1,q=null,D=null,I=null,L=null,w=null,T=null,_=null,A=new j0(0,0,0),m=0,z=!1,V=null,j=null,l=null,p=null,c=null,JJ.set(0,0,J.canvas.width,J.canvas.height),d.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:G0,disable:F0,bindFramebuffer:p0,drawBuffers:l0,useProgram:h0,setBlending:I0,setMaterial:c0,setFlipSided:z0,setCullFace:QJ,setLineWidth:M0,setPolygonOffset:w0,setScissorTest:OJ,activeTexture:qJ,bindTexture:UJ,unbindTexture:B,compressedTexImage2D:F,compressedTexImage3D:f,texImage2D:A0,texImage3D:e,updateUBOMapping:L0,uniformBlockBinding:X0,texStorage2D:J0,texStorage3D:R0,texSubImage2D:n,texSubImage3D:i,compressedTexSubImage2D:g,compressedTexSubImage3D:E0,scissor:Y0,viewport:V0,reset:f0}}function FG(J,Q,$,Z,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new d0,G=new WeakMap,N,E=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function R(B,F){return O?new OffscreenCanvas(B,F):v9("canvas")}function M(B,F,f){let n=1,i=UJ(B);if(i.width>f||i.height>f)n=f/Math.max(i.width,i.height);if(n<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let g=Math.floor(n*i.width),E0=Math.floor(n*i.height);if(N===void 0)N=R(g,E0);let J0=F?R(g,E0):N;return J0.width=g,J0.height=E0,J0.getContext("2d").drawImage(B,0,0,g,E0),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+i.width+"x"+i.height+") to ("+g+"x"+E0+")."),J0}else{if("data"in B)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+i.width+"x"+i.height+").");return B}return B}function q(B){return B.generateMipmaps}function D(B){J.generateMipmap(B)}function I(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,F,f,n,i=!1){if(B!==null){if(J[B]!==void 0)return J[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let g=F;if(F===J.RED){if(f===J.FLOAT)g=J.R32F;if(f===J.HALF_FLOAT)g=J.R16F;if(f===J.UNSIGNED_BYTE)g=J.R8}if(F===J.RED_INTEGER){if(f===J.UNSIGNED_BYTE)g=J.R8UI;if(f===J.UNSIGNED_SHORT)g=J.R16UI;if(f===J.UNSIGNED_INT)g=J.R32UI;if(f===J.BYTE)g=J.R8I;if(f===J.SHORT)g=J.R16I;if(f===J.INT)g=J.R32I}if(F===J.RG){if(f===J.FLOAT)g=J.RG32F;if(f===J.HALF_FLOAT)g=J.RG16F;if(f===J.UNSIGNED_BYTE)g=J.RG8}if(F===J.RG_INTEGER){if(f===J.UNSIGNED_BYTE)g=J.RG8UI;if(f===J.UNSIGNED_SHORT)g=J.RG16UI;if(f===J.UNSIGNED_INT)g=J.RG32UI;if(f===J.BYTE)g=J.RG8I;if(f===J.SHORT)g=J.RG16I;if(f===J.INT)g=J.RG32I}if(F===J.RGB_INTEGER){if(f===J.UNSIGNED_BYTE)g=J.RGB8UI;if(f===J.UNSIGNED_SHORT)g=J.RGB16UI;if(f===J.UNSIGNED_INT)g=J.RGB32UI;if(f===J.BYTE)g=J.RGB8I;if(f===J.SHORT)g=J.RGB16I;if(f===J.INT)g=J.RGB32I}if(F===J.RGBA_INTEGER){if(f===J.UNSIGNED_BYTE)g=J.RGBA8UI;if(f===J.UNSIGNED_SHORT)g=J.RGBA16UI;if(f===J.UNSIGNED_INT)g=J.RGBA32UI;if(f===J.BYTE)g=J.RGBA8I;if(f===J.SHORT)g=J.RGBA16I;if(f===J.INT)g=J.RGBA32I}if(F===J.RGB){if(f===J.UNSIGNED_INT_5_9_9_9_REV)g=J.RGB9_E5}if(F===J.RGBA){let E0=i?bQ:m0.getTransfer(n);if(f===J.FLOAT)g=J.RGBA32F;if(f===J.HALF_FLOAT)g=J.RGBA16F;if(f===J.UNSIGNED_BYTE)g=E0===t0?J.SRGB8_ALPHA8:J.RGBA8;if(f===J.UNSIGNED_SHORT_4_4_4_4)g=J.RGBA4;if(f===J.UNSIGNED_SHORT_5_5_5_1)g=J.RGB5_A1}if(g===J.R16F||g===J.R32F||g===J.RG16F||g===J.RG32F||g===J.RGBA16F||g===J.RGBA32F)Q.get("EXT_color_buffer_float");return g}function w(B,F){let f;if(B){if(F===null||F===E9||F===q9)f=J.DEPTH24_STENCIL8;else if(F===k8)f=J.DEPTH32F_STENCIL8;else if(F===g9)f=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(F===null||F===E9||F===q9)f=J.DEPTH_COMPONENT24;else if(F===k8)f=J.DEPTH_COMPONENT32F;else if(F===g9)f=J.DEPTH_COMPONENT16;return f}function T(B,F){if(q(B)===!0||B.isFramebufferTexture&&B.minFilter!==G9&&B.minFilter!==j8)return Math.log2(Math.max(F.width,F.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return F.mipmaps.length;else return 1}function _(B){let F=B.target;if(F.removeEventListener("dispose",_),m(F),F.isVideoTexture)G.delete(F)}function A(B){let F=B.target;F.removeEventListener("dispose",A),V(F)}function m(B){let F=Z.get(B);if(F.__webglInit===void 0)return;let f=B.source,n=E.get(f);if(n){let i=n[F.__cacheKey];if(i.usedTimes--,i.usedTimes===0)z(B);if(Object.keys(n).length===0)E.delete(f)}Z.remove(B)}function z(B){let F=Z.get(B);J.deleteTexture(F.__webglTexture);let f=B.source,n=E.get(f);delete n[F.__cacheKey],H.memory.textures--}function V(B){let F=Z.get(B);if(B.depthTexture)B.depthTexture.dispose(),Z.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let n=0;n<6;n++){if(Array.isArray(F.__webglFramebuffer[n]))for(let i=0;i<F.__webglFramebuffer[n].length;i++)J.deleteFramebuffer(F.__webglFramebuffer[n][i]);else J.deleteFramebuffer(F.__webglFramebuffer[n]);if(F.__webglDepthbuffer)J.deleteRenderbuffer(F.__webglDepthbuffer[n])}else{if(Array.isArray(F.__webglFramebuffer))for(let n=0;n<F.__webglFramebuffer.length;n++)J.deleteFramebuffer(F.__webglFramebuffer[n]);else J.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer)J.deleteRenderbuffer(F.__webglDepthbuffer);if(F.__webglMultisampledFramebuffer)J.deleteFramebuffer(F.__webglMultisampledFramebuffer);if(F.__webglColorRenderbuffer){for(let n=0;n<F.__webglColorRenderbuffer.length;n++)if(F.__webglColorRenderbuffer[n])J.deleteRenderbuffer(F.__webglColorRenderbuffer[n])}if(F.__webglDepthRenderbuffer)J.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let f=B.textures;for(let n=0,i=f.length;n<i;n++){let g=Z.get(f[n]);if(g.__webglTexture)J.deleteTexture(g.__webglTexture),H.memory.textures--;Z.remove(f[n])}Z.remove(B)}let j=0;function l(){j=0}function p(){let B=j;if(B>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+W.maxTextures);return j+=1,B}function c(B){let F=[];return F.push(B.wrapS),F.push(B.wrapT),F.push(B.wrapR||0),F.push(B.magFilter),F.push(B.minFilter),F.push(B.anisotropy),F.push(B.internalFormat),F.push(B.format),F.push(B.type),F.push(B.generateMipmaps),F.push(B.premultiplyAlpha),F.push(B.flipY),F.push(B.unpackAlignment),F.push(B.colorSpace),F.join()}function o(B,F){let f=Z.get(B);if(B.isVideoTexture)OJ(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&f.__version!==B.version){let n=B.image;if(n===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(n.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k0(f,B,F);return}}else if(B.isExternalTexture)f.__webglTexture=B.sourceTexture?B.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,f.__webglTexture,J.TEXTURE0+F)}function u(B,F){let f=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&f.__version!==B.version){k0(f,B,F);return}$.bindTexture(J.TEXTURE_2D_ARRAY,f.__webglTexture,J.TEXTURE0+F)}function r(B,F){let f=Z.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&f.__version!==B.version){k0(f,B,F);return}$.bindTexture(J.TEXTURE_3D,f.__webglTexture,J.TEXTURE0+F)}function x(B,F){let f=Z.get(B);if(B.version>0&&f.__version!==B.version){G0(f,B,F);return}$.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture,J.TEXTURE0+F)}let Z0={[hZ]:J.REPEAT,[xZ]:J.CLAMP_TO_EDGE,[gZ]:J.MIRRORED_REPEAT},U0={[G9]:J.NEAREST,[pZ]:J.NEAREST_MIPMAP_NEAREST,[x9]:J.NEAREST_MIPMAP_LINEAR,[j8]:J.LINEAR,[d6]:J.LINEAR_MIPMAP_NEAREST,[N9]:J.LINEAR_MIPMAP_LINEAR},P0={[tZ]:J.NEVER,[WW]:J.ALWAYS,[eZ]:J.LESS,[hQ]:J.LEQUAL,[JW]:J.EQUAL,[ZW]:J.GEQUAL,[QW]:J.GREATER,[$W]:J.NOTEQUAL};function g0(B,F){if(F.type===k8&&Q.has("OES_texture_float_linear")===!1&&(F.magFilter===j8||F.magFilter===d6||F.magFilter===x9||F.magFilter===N9||F.minFilter===j8||F.minFilter===d6||F.minFilter===x9||F.minFilter===N9))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,Z0[F.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,Z0[F.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,Z0[F.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,U0[F.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,U0[F.minFilter]),F.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,P0[F.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===G9)return;if(F.minFilter!==x9&&F.minFilter!==N9)return;if(F.type===k8&&Q.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||Z.get(F).__currentAnisotropy){let f=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,W.getMaxAnisotropy())),Z.get(F).__currentAnisotropy=F.anisotropy}}}function JJ(B,F){let f=!1;if(B.__webglInit===void 0)B.__webglInit=!0,F.addEventListener("dispose",_);let n=F.source,i=E.get(n);if(i===void 0)i={},E.set(n,i);let g=c(F);if(g!==B.__cacheKey){if(i[g]===void 0)i[g]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,f=!0;i[g].usedTimes++;let E0=i[B.__cacheKey];if(E0!==void 0){if(i[B.__cacheKey].usedTimes--,E0.usedTimes===0)z(F)}B.__cacheKey=g,B.__webglTexture=i[g].texture}return f}function d(B,F,f){return Math.floor(Math.floor(B/f)/F)}function W0(B,F,f,n){let g=B.updateRanges;if(g.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,F.width,F.height,f,n,F.data);else{g.sort((e,Y0)=>e.start-Y0.start);let E0=0;for(let e=1;e<g.length;e++){let Y0=g[E0],V0=g[e],L0=Y0.start+Y0.count,X0=d(V0.start,F.width,4),f0=d(Y0.start,F.width,4);if(V0.start<=L0+1&&X0===f0&&d(V0.start+V0.count-1,F.width,4)===X0)Y0.count=Math.max(Y0.count,V0.start+V0.count-Y0.start);else++E0,g[E0]=V0}g.length=E0+1;let J0=J.getParameter(J.UNPACK_ROW_LENGTH),R0=J.getParameter(J.UNPACK_SKIP_PIXELS),A0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,F.width);for(let e=0,Y0=g.length;e<Y0;e++){let V0=g[e],L0=Math.floor(V0.start/4),X0=Math.ceil(V0.count/4),f0=L0%F.width,P=Math.floor(L0/F.width),K0=X0,Q0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,f0),J.pixelStorei(J.UNPACK_SKIP_ROWS,P),$.texSubImage2D(J.TEXTURE_2D,0,f0,P,K0,1,f,n,F.data)}B.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,J0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,R0),J.pixelStorei(J.UNPACK_SKIP_ROWS,A0)}}function k0(B,F,f){let n=J.TEXTURE_2D;if(F.isDataArrayTexture||F.isCompressedArrayTexture)n=J.TEXTURE_2D_ARRAY;if(F.isData3DTexture)n=J.TEXTURE_3D;let i=JJ(B,F),g=F.source;$.bindTexture(n,B.__webglTexture,J.TEXTURE0+f);let E0=Z.get(g);if(g.version!==E0.__version||i===!0){$.activeTexture(J.TEXTURE0+f);let J0=m0.getPrimaries(m0.workingColorSpace),R0=F.colorSpace===y8?null:m0.getPrimaries(F.colorSpace),A0=F.colorSpace===y8||J0===R0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,F.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,F.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,A0);let e=M(F.image,!1,W.maxTextureSize);e=qJ(F,e);let Y0=K.convert(F.format,F.colorSpace),V0=K.convert(F.type),L0=L(F.internalFormat,Y0,V0,F.colorSpace,F.isVideoTexture);g0(n,F);let X0,f0=F.mipmaps,P=F.isVideoTexture!==!0,K0=E0.__version===void 0||i===!0,Q0=g.dataReady,q0=T(F,e);if(F.isDepthTexture){if(L0=w(F.format===m9,F.type),K0)if(P)$.texStorage2D(J.TEXTURE_2D,1,L0,e.width,e.height);else $.texImage2D(J.TEXTURE_2D,0,L0,e.width,e.height,0,Y0,V0,null)}else if(F.isDataTexture)if(f0.length>0){if(P&&K0)$.texStorage2D(J.TEXTURE_2D,q0,L0,f0[0].width,f0[0].height);for(let a=0,s=f0.length;a<s;a++)if(X0=f0[a],P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,X0.width,X0.height,Y0,V0,X0.data)}else $.texImage2D(J.TEXTURE_2D,a,L0,X0.width,X0.height,0,Y0,V0,X0.data);F.generateMipmaps=!1}else if(P){if(K0)$.texStorage2D(J.TEXTURE_2D,q0,L0,e.width,e.height);if(Q0)W0(F,e,Y0,V0)}else $.texImage2D(J.TEXTURE_2D,0,L0,e.width,e.height,0,Y0,V0,e.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){if(P&&K0)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,L0,f0[0].width,f0[0].height,e.depth);for(let a=0,s=f0.length;a<s;a++)if(X0=f0[a],F.format!==rJ)if(Y0!==null)if(P){if(Q0)if(F.layerUpdates.size>0){let O0=Y$(X0.width,X0.height,F.format,F.type);for(let S0 of F.layerUpdates){let o0=X0.data.subarray(S0*O0/X0.data.BYTES_PER_ELEMENT,(S0+1)*O0/X0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,S0,X0.width,X0.height,1,Y0,o0)}F.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,X0.width,X0.height,e.depth,Y0,X0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,a,L0,X0.width,X0.height,e.depth,0,X0.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P){if(Q0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,X0.width,X0.height,e.depth,Y0,V0,X0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,a,L0,X0.width,X0.height,e.depth,0,Y0,V0,X0.data)}else{if(P&&K0)$.texStorage2D(J.TEXTURE_2D,q0,L0,f0[0].width,f0[0].height);for(let a=0,s=f0.length;a<s;a++)if(X0=f0[a],F.format!==rJ)if(Y0!==null)if(P){if(Q0)$.compressedTexSubImage2D(J.TEXTURE_2D,a,0,0,X0.width,X0.height,Y0,X0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,a,L0,X0.width,X0.height,0,X0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,X0.width,X0.height,Y0,V0,X0.data)}else $.texImage2D(J.TEXTURE_2D,a,L0,X0.width,X0.height,0,Y0,V0,X0.data)}else if(F.isDataArrayTexture)if(P){if(K0)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,L0,e.width,e.height,e.depth);if(Q0)if(F.layerUpdates.size>0){let a=Y$(e.width,e.height,F.format,F.type);for(let s of F.layerUpdates){let O0=e.data.subarray(s*a/e.data.BYTES_PER_ELEMENT,(s+1)*a/e.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,s,e.width,e.height,1,Y0,V0,O0)}F.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,Y0,V0,e.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,L0,e.width,e.height,e.depth,0,Y0,V0,e.data);else if(F.isData3DTexture)if(P){if(K0)$.texStorage3D(J.TEXTURE_3D,q0,L0,e.width,e.height,e.depth);if(Q0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,Y0,V0,e.data)}else $.texImage3D(J.TEXTURE_3D,0,L0,e.width,e.height,e.depth,0,Y0,V0,e.data);else if(F.isFramebufferTexture){if(K0)if(P)$.texStorage2D(J.TEXTURE_2D,q0,L0,e.width,e.height);else{let{width:a,height:s}=e;for(let O0=0;O0<q0;O0++)$.texImage2D(J.TEXTURE_2D,O0,L0,a,s,0,Y0,V0,null),a>>=1,s>>=1}}else if(f0.length>0){if(P&&K0){let a=UJ(f0[0]);$.texStorage2D(J.TEXTURE_2D,q0,L0,a.width,a.height)}for(let a=0,s=f0.length;a<s;a++)if(X0=f0[a],P){if(Q0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,Y0,V0,X0)}else $.texImage2D(J.TEXTURE_2D,a,L0,Y0,V0,X0);F.generateMipmaps=!1}else if(P){if(K0){let a=UJ(e);$.texStorage2D(J.TEXTURE_2D,q0,L0,a.width,a.height)}if(Q0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,Y0,V0,e)}else $.texImage2D(J.TEXTURE_2D,0,L0,Y0,V0,e);if(q(F))D(n);if(E0.__version=g.version,F.onUpdate)F.onUpdate(F)}B.__version=F.version}function G0(B,F,f){if(F.image.length!==6)return;let n=JJ(B,F),i=F.source;$.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+f);let g=Z.get(i);if(i.version!==g.__version||n===!0){$.activeTexture(J.TEXTURE0+f);let E0=m0.getPrimaries(m0.workingColorSpace),J0=F.colorSpace===y8?null:m0.getPrimaries(F.colorSpace),R0=F.colorSpace===y8||E0===J0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,F.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,F.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,R0);let A0=F.isCompressedTexture||F.image[0].isCompressedTexture,e=F.image[0]&&F.image[0].isDataTexture,Y0=[];for(let s=0;s<6;s++){if(!A0&&!e)Y0[s]=M(F.image[s],!0,W.maxCubemapSize);else Y0[s]=e?F.image[s].image:F.image[s];Y0[s]=qJ(F,Y0[s])}let V0=Y0[0],L0=K.convert(F.format,F.colorSpace),X0=K.convert(F.type),f0=L(F.internalFormat,L0,X0,F.colorSpace),P=F.isVideoTexture!==!0,K0=g.__version===void 0||n===!0,Q0=i.dataReady,q0=T(F,V0);g0(J.TEXTURE_CUBE_MAP,F);let a;if(A0){if(P&&K0)$.texStorage2D(J.TEXTURE_CUBE_MAP,q0,f0,V0.width,V0.height);for(let s=0;s<6;s++){a=Y0[s].mipmaps;for(let O0=0;O0<a.length;O0++){let S0=a[O0];if(F.format!==rJ)if(L0!==null)if(P){if(Q0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0,0,0,S0.width,S0.height,L0,S0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0,f0,S0.width,S0.height,0,S0.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0,0,0,S0.width,S0.height,L0,X0,S0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0,f0,S0.width,S0.height,0,L0,X0,S0.data)}}}else{if(a=F.mipmaps,P&&K0){if(a.length>0)q0++;let s=UJ(Y0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,q0,f0,s.width,s.height)}for(let s=0;s<6;s++)if(e){if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,Y0[s].width,Y0[s].height,L0,X0,Y0[s].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,f0,Y0[s].width,Y0[s].height,0,L0,X0,Y0[s].data);for(let O0=0;O0<a.length;O0++){let o0=a[O0].image[s].image;if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0+1,0,0,o0.width,o0.height,L0,X0,o0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0+1,f0,o0.width,o0.height,0,L0,X0,o0.data)}}else{if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,L0,X0,Y0[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,f0,L0,X0,Y0[s]);for(let O0=0;O0<a.length;O0++){let S0=a[O0];if(P){if(Q0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0+1,0,0,L0,X0,S0.image[s])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,O0+1,f0,L0,X0,S0.image[s])}}}if(q(F))D(J.TEXTURE_CUBE_MAP);if(g.__version=i.version,F.onUpdate)F.onUpdate(F)}B.__version=F.version}function F0(B,F,f,n,i,g){let E0=K.convert(f.format,f.colorSpace),J0=K.convert(f.type),R0=L(f.internalFormat,E0,J0,f.colorSpace),A0=Z.get(F),e=Z.get(f);if(e.__renderTarget=F,!A0.__hasExternalTextures){let Y0=Math.max(1,F.width>>g),V0=Math.max(1,F.height>>g);if(i===J.TEXTURE_3D||i===J.TEXTURE_2D_ARRAY)$.texImage3D(i,g,R0,Y0,V0,F.depth,0,E0,J0,null);else $.texImage2D(i,g,R0,Y0,V0,0,E0,J0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,B),w0(F))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,n,i,e.__webglTexture,0,M0(F));else if(i===J.TEXTURE_2D||i>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,n,i,e.__webglTexture,g);$.bindFramebuffer(J.FRAMEBUFFER,null)}function p0(B,F,f){if(J.bindRenderbuffer(J.RENDERBUFFER,B),F.depthBuffer){let n=F.depthTexture,i=n&&n.isDepthTexture?n.type:null,g=w(F.stencilBuffer,i),E0=F.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,J0=M0(F);if(w0(F))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,J0,g,F.width,F.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,J0,g,F.width,F.height);else J.renderbufferStorage(J.RENDERBUFFER,g,F.width,F.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,E0,J.RENDERBUFFER,B)}else{let n=F.textures;for(let i=0;i<n.length;i++){let g=n[i],E0=K.convert(g.format,g.colorSpace),J0=K.convert(g.type),R0=L(g.internalFormat,E0,J0,g.colorSpace),A0=M0(F);if(f&&w0(F)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,A0,R0,F.width,F.height);else if(w0(F))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,A0,R0,F.width,F.height);else J.renderbufferStorage(J.RENDERBUFFER,R0,F.width,F.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function l0(B,F){if(F&&F.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if($.bindFramebuffer(J.FRAMEBUFFER,B),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let n=Z.get(F.depthTexture);if(n.__renderTarget=F,!n.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0;o(F.depthTexture,0);let i=n.__webglTexture,g=M0(F);if(F.depthTexture.format===l6)if(w0(F))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,i,0,g);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,i,0);else if(F.depthTexture.format===m9)if(w0(F))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,i,0,g);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,i,0);else throw Error("Unknown depthTexture format")}function h0(B){let F=Z.get(B),f=B.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==B.depthTexture){let n=B.depthTexture;if(F.__depthDisposeCallback)F.__depthDisposeCallback();if(n){let i=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,n.removeEventListener("dispose",i)};n.addEventListener("dispose",i),F.__depthDisposeCallback=i}F.__boundDepthTexture=n}if(B.depthTexture&&!F.__autoAllocateDepthBuffer){if(f)throw Error("target.depthTexture not supported in Cube render targets");let n=B.texture.mipmaps;if(n&&n.length>0)l0(F.__webglFramebuffer[0],B);else l0(F.__webglFramebuffer,B)}else if(f){F.__webglDepthbuffer=[];for(let n=0;n<6;n++)if($.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer[n]),F.__webglDepthbuffer[n]===void 0)F.__webglDepthbuffer[n]=J.createRenderbuffer(),p0(F.__webglDepthbuffer[n],B,!1);else{let i=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,g=F.__webglDepthbuffer[n];J.bindRenderbuffer(J.RENDERBUFFER,g),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,g)}}else{let n=B.texture.mipmaps;if(n&&n.length>0)$.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,F.__webglFramebuffer);if(F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=J.createRenderbuffer(),p0(F.__webglDepthbuffer,B,!1);else{let i=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,g=F.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,g),J.framebufferRenderbuffer(J.FRAMEBUFFER,i,J.RENDERBUFFER,g)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function C(B,F,f){let n=Z.get(B);if(F!==void 0)F0(n.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(f!==void 0)h0(B)}function r0(B){let F=B.texture,f=Z.get(B),n=Z.get(F);B.addEventListener("dispose",A);let i=B.textures,g=B.isWebGLCubeRenderTarget===!0,E0=i.length>1;if(!E0){if(n.__webglTexture===void 0)n.__webglTexture=J.createTexture();n.__version=F.version,H.memory.textures++}if(g){f.__webglFramebuffer=[];for(let J0=0;J0<6;J0++)if(F.mipmaps&&F.mipmaps.length>0){f.__webglFramebuffer[J0]=[];for(let R0=0;R0<F.mipmaps.length;R0++)f.__webglFramebuffer[J0][R0]=J.createFramebuffer()}else f.__webglFramebuffer[J0]=J.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){f.__webglFramebuffer=[];for(let J0=0;J0<F.mipmaps.length;J0++)f.__webglFramebuffer[J0]=J.createFramebuffer()}else f.__webglFramebuffer=J.createFramebuffer();if(E0)for(let J0=0,R0=i.length;J0<R0;J0++){let A0=Z.get(i[J0]);if(A0.__webglTexture===void 0)A0.__webglTexture=J.createTexture(),H.memory.textures++}if(B.samples>0&&w0(B)===!1){f.__webglMultisampledFramebuffer=J.createFramebuffer(),f.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let J0=0;J0<i.length;J0++){let R0=i[J0];f.__webglColorRenderbuffer[J0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,f.__webglColorRenderbuffer[J0]);let A0=K.convert(R0.format,R0.colorSpace),e=K.convert(R0.type),Y0=L(R0.internalFormat,A0,e,R0.colorSpace,B.isXRRenderTarget===!0),V0=M0(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,V0,Y0,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+J0,J.RENDERBUFFER,f.__webglColorRenderbuffer[J0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)f.__webglDepthRenderbuffer=J.createRenderbuffer(),p0(f.__webglDepthRenderbuffer,B,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(g){$.bindTexture(J.TEXTURE_CUBE_MAP,n.__webglTexture),g0(J.TEXTURE_CUBE_MAP,F);for(let J0=0;J0<6;J0++)if(F.mipmaps&&F.mipmaps.length>0)for(let R0=0;R0<F.mipmaps.length;R0++)F0(f.__webglFramebuffer[J0][R0],B,F,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,R0);else F0(f.__webglFramebuffer[J0],B,F,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0);if(q(F))D(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(E0){for(let J0=0,R0=i.length;J0<R0;J0++){let A0=i[J0],e=Z.get(A0),Y0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)Y0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Y0,e.__webglTexture),g0(Y0,A0),F0(f.__webglFramebuffer,B,A0,J.COLOR_ATTACHMENT0+J0,Y0,0),q(A0))D(Y0)}$.unbindTexture()}else{let J0=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)J0=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(J0,n.__webglTexture),g0(J0,F),F.mipmaps&&F.mipmaps.length>0)for(let R0=0;R0<F.mipmaps.length;R0++)F0(f.__webglFramebuffer[R0],B,F,J.COLOR_ATTACHMENT0,J0,R0);else F0(f.__webglFramebuffer,B,F,J.COLOR_ATTACHMENT0,J0,0);if(q(F))D(J0);$.unbindTexture()}if(B.depthBuffer)h0(B)}function I0(B){let F=B.textures;for(let f=0,n=F.length;f<n;f++){let i=F[f];if(q(i)){let g=I(B),E0=Z.get(i).__webglTexture;$.bindTexture(g,E0),D(g),$.unbindTexture()}}}let c0=[],z0=[];function QJ(B){if(B.samples>0){if(w0(B)===!1){let{textures:F,width:f,height:n}=B,i=J.COLOR_BUFFER_BIT,g=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,E0=Z.get(B),J0=F.length>1;if(J0)for(let A0=0;A0<F.length;A0++)$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,E0.__webglMultisampledFramebuffer);let R0=B.texture.mipmaps;if(R0&&R0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglFramebuffer);for(let A0=0;A0<F.length;A0++){if(B.resolveDepthBuffer){if(B.depthBuffer)i|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)i|=J.STENCIL_BUFFER_BIT}if(J0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[A0]);let e=Z.get(F[A0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,e,0)}if(J.blitFramebuffer(0,0,f,n,0,0,f,n,i,J.NEAREST),X===!0){if(c0.length=0,z0.length=0,c0.push(J.COLOR_ATTACHMENT0+A0),B.depthBuffer&&B.resolveDepthBuffer===!1)c0.push(g),z0.push(g),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,z0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,c0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J0)for(let A0=0;A0<F.length;A0++){$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.RENDERBUFFER,E0.__webglColorRenderbuffer[A0]);let e=Z.get(F[A0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,E0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+A0,J.TEXTURE_2D,e,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,E0.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&X){let F=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[F])}}}function M0(B){return Math.min(W.maxSamples,B.samples)}function w0(B){let F=Z.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function OJ(B){let F=H.render.frame;if(G.get(B)!==F)G.set(B,F),B.update()}function qJ(B,F){let{colorSpace:f,format:n,type:i}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return F;if(f!==d9&&f!==y8)if(m0.getTransfer(f)===t0){if(n!==rJ||i!==R8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",f);return F}function UJ(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=p,this.resetTextureUnits=l,this.setTexture2D=o,this.setTexture2DArray=u,this.setTexture3D=r,this.setTextureCube=x,this.rebindTextures=C,this.setupRenderTarget=r0,this.updateRenderTargetMipmap=I0,this.updateMultisampleRenderTarget=QJ,this.setupDepthRenderbuffer=h0,this.setupFrameBufferTexture=F0,this.useMultisampledRTT=w0}function RG(J,Q){function $(Z,W=y8){let K,H=m0.getTransfer(W);if(Z===R8)return J.UNSIGNED_BYTE;if(Z===KQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===HQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===lZ)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===mZ)return J.BYTE;if(Z===dZ)return J.SHORT;if(Z===g9)return J.UNSIGNED_SHORT;if(Z===WQ)return J.INT;if(Z===E9)return J.UNSIGNED_INT;if(Z===k8)return J.FLOAT;if(Z===p9)return J.HALF_FLOAT;if(Z===uZ)return J.ALPHA;if(Z===cZ)return J.RGB;if(Z===rJ)return J.RGBA;if(Z===l6)return J.DEPTH_COMPONENT;if(Z===m9)return J.DEPTH_STENCIL;if(Z===nZ)return J.RED;if(Z===YQ)return J.RED_INTEGER;if(Z===sZ)return J.RG;if(Z===XQ)return J.RG_INTEGER;if(Z===UQ)return J.RGBA_INTEGER;if(Z===u6||Z===c6||Z===n6||Z===s6)if(H===t0)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===u6)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===c6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===n6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===s6)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===u6)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===c6)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===n6)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===s6)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===GQ||Z===NQ||Z===EQ||Z===qQ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===GQ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===NQ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===EQ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===qQ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===DQ||Z===OQ||Z===FQ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===DQ||Z===OQ)return H===t0?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===FQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(Z===RQ||Z===kQ||Z===MQ||Z===VQ||Z===LQ||Z===zQ||Z===BQ||Z===IQ||Z===_Q||Z===wQ||Z===CQ||Z===PQ||Z===AQ||Z===TQ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===RQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===kQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===MQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===VQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===LQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===zQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===BQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===IQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===_Q)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===wQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===CQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===PQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===AQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===TQ)return H===t0?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===i6||Z===SQ||Z===jQ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===i6)return H===t0?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===SQ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===jQ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===iZ||Z===yQ||Z===vQ||Z===fQ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===i6)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===yQ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===vQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===fQ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===q9)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}class R$ extends BJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}}var kG=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MG=`
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

}`;class sW{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new R$(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new tJ({vertexShader:kG,fragmentShader:MG,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new FJ(new o9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iW extends M8{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,G=null,N=null,E=null,O=null,R=new sW,M={},q=Q.getContextAttributes(),D=null,I=null,L=[],w=[],T=new d0,_=null,A=new zJ;A.viewport=new KJ;let m=new zJ;m.viewport=new KJ;let z=[A,m],V=new W$,j=null,l=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(d){let W0=L[d];if(W0===void 0)W0=new n9,L[d]=W0;return W0.getTargetRaySpace()},this.getControllerGrip=function(d){let W0=L[d];if(W0===void 0)W0=new n9,L[d]=W0;return W0.getGripSpace()},this.getHand=function(d){let W0=L[d];if(W0===void 0)W0=new n9,L[d]=W0;return W0.getHandSpace()};function p(d){let W0=w.indexOf(d.inputSource);if(W0===-1)return;let k0=L[W0];if(k0!==void 0)k0.update(d.inputSource,d.frame,X||K),k0.dispatchEvent({type:d.type,data:d.inputSource})}function c(){Z.removeEventListener("select",p),Z.removeEventListener("selectstart",p),Z.removeEventListener("selectend",p),Z.removeEventListener("squeeze",p),Z.removeEventListener("squeezestart",p),Z.removeEventListener("squeezeend",p),Z.removeEventListener("end",c),Z.removeEventListener("inputsourceschange",o);for(let d=0;d<L.length;d++){let W0=w[d];if(W0===null)continue;w[d]=null,L[d].disconnect(W0)}j=null,l=null,R.reset();for(let d in M)delete M[d];J.setRenderTarget(D),E=null,N=null,G=null,Z=null,I=null,JJ.stop(),$.isPresenting=!1,J.setPixelRatio(_),J.setSize(T.width,T.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(d){if(W=d,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(d){if(H=d,$.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(d){X=d},this.getBaseLayer=function(){return N!==null?N:E},this.getBinding=function(){return G},this.getFrame=function(){return O},this.getSession=function(){return Z},this.setSession=async function(d){if(Z=d,Z!==null){if(D=J.getRenderTarget(),Z.addEventListener("select",p),Z.addEventListener("selectstart",p),Z.addEventListener("selectend",p),Z.addEventListener("squeeze",p),Z.addEventListener("squeezestart",p),Z.addEventListener("squeezeend",p),Z.addEventListener("end",c),Z.addEventListener("inputsourceschange",o),q.xrCompatible!==!0)await Q.makeXRCompatible();if(_=J.getPixelRatio(),J.getSize(T),typeof XRWebGLBinding<"u")G=new XRWebGLBinding(Z,Q);if(!(G!==null&&("createProjectionLayer"in XRWebGLBinding.prototype))){let k0={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:W};E=new XRWebGLLayer(Z,Q,k0),Z.updateRenderState({baseLayer:E}),J.setPixelRatio(1),J.setSize(E.framebufferWidth,E.framebufferHeight,!1),I=new cJ(E.framebufferWidth,E.framebufferHeight,{format:rJ,type:R8,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{let k0=null,G0=null,F0=null;if(q.depth)F0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,k0=q.stencil?m9:l6,G0=q.stencil?q9:E9;let p0={colorFormat:Q.RGBA8,depthFormat:F0,scaleFactor:W};N=G.createProjectionLayer(p0),Z.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),I=new cJ(N.textureWidth,N.textureHeight,{format:rJ,type:R8,depthTexture:new W7(N.textureWidth,N.textureHeight,G0,void 0,void 0,void 0,void 0,void 0,void 0,k0),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await Z.requestReferenceSpace(H),JJ.setContext(Z),JJ.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function o(d){for(let W0=0;W0<d.removed.length;W0++){let k0=d.removed[W0],G0=w.indexOf(k0);if(G0>=0)w[G0]=null,L[G0].disconnect(k0)}for(let W0=0;W0<d.added.length;W0++){let k0=d.added[W0],G0=w.indexOf(k0);if(G0===-1){for(let p0=0;p0<L.length;p0++)if(p0>=w.length){w.push(k0),G0=p0;break}else if(w[p0]===null){w[p0]=k0,G0=p0;break}if(G0===-1)break}let F0=L[G0];if(F0)F0.connect(k0)}}let u=new v,r=new v;function x(d,W0,k0){u.setFromMatrixPosition(W0.matrixWorld),r.setFromMatrixPosition(k0.matrixWorld);let G0=u.distanceTo(r),F0=W0.projectionMatrix.elements,p0=k0.projectionMatrix.elements,l0=F0[14]/(F0[10]-1),h0=F0[14]/(F0[10]+1),C=(F0[9]+1)/F0[5],r0=(F0[9]-1)/F0[5],I0=(F0[8]-1)/F0[0],c0=(p0[8]+1)/p0[0],z0=l0*I0,QJ=l0*c0,M0=G0/(-I0+c0),w0=M0*-I0;if(W0.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.translateX(w0),d.translateZ(M0),d.matrixWorld.compose(d.position,d.quaternion,d.scale),d.matrixWorldInverse.copy(d.matrixWorld).invert(),F0[10]===-1)d.projectionMatrix.copy(W0.projectionMatrix),d.projectionMatrixInverse.copy(W0.projectionMatrixInverse);else{let OJ=l0+M0,qJ=h0+M0,UJ=z0-w0,B=QJ+(G0-w0),F=C*h0/qJ*OJ,f=r0*h0/qJ*OJ;d.projectionMatrix.makePerspective(UJ,B,F,f,OJ,qJ),d.projectionMatrixInverse.copy(d.projectionMatrix).invert()}}function Z0(d,W0){if(W0===null)d.matrixWorld.copy(d.matrix);else d.matrixWorld.multiplyMatrices(W0.matrixWorld,d.matrix);d.matrixWorldInverse.copy(d.matrixWorld).invert()}this.updateCamera=function(d){if(Z===null)return;let{near:W0,far:k0}=d;if(R.texture!==null){if(R.depthNear>0)W0=R.depthNear;if(R.depthFar>0)k0=R.depthFar}if(V.near=m.near=A.near=W0,V.far=m.far=A.far=k0,j!==V.near||l!==V.far)Z.updateRenderState({depthNear:V.near,depthFar:V.far}),j=V.near,l=V.far;V.layers.mask=d.layers.mask|6,A.layers.mask=V.layers.mask&3,m.layers.mask=V.layers.mask&5;let G0=d.parent,F0=V.cameras;Z0(V,G0);for(let p0=0;p0<F0.length;p0++)Z0(F0[p0],G0);if(F0.length===2)x(V,A,m);else V.projectionMatrix.copy(A.projectionMatrix);U0(d,V,G0)};function U0(d,W0,k0){if(k0===null)d.matrix.copy(W0.matrixWorld);else d.matrix.copy(k0.matrixWorld),d.matrix.invert(),d.matrix.multiply(W0.matrixWorld);if(d.matrix.decompose(d.position,d.quaternion,d.scale),d.updateMatrixWorld(!0),d.projectionMatrix.copy(W0.projectionMatrix),d.projectionMatrixInverse.copy(W0.projectionMatrixInverse),d.isPerspectiveCamera)d.fov=T6*2*Math.atan(1/d.projectionMatrix.elements[5]),d.zoom=1}this.getCamera=function(){return V},this.getFoveation=function(){if(N===null&&E===null)return;return Y},this.setFoveation=function(d){if(Y=d,N!==null)N.fixedFoveation=d;if(E!==null&&E.fixedFoveation!==void 0)E.fixedFoveation=d},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(V)},this.getCameraTexture=function(d){return M[d]};let P0=null;function g0(d,W0){if(U=W0.getViewerPose(X||K),O=W0,U!==null){let k0=U.views;if(E!==null)J.setRenderTargetFramebuffer(I,E.framebuffer),J.setRenderTarget(I);let G0=!1;if(k0.length!==V.cameras.length)V.cameras.length=0,G0=!0;for(let h0=0;h0<k0.length;h0++){let C=k0[h0],r0=null;if(E!==null)r0=E.getViewport(C);else{let c0=G.getViewSubImage(N,C);if(r0=c0.viewport,h0===0)J.setRenderTargetTextures(I,c0.colorTexture,c0.depthStencilTexture),J.setRenderTarget(I)}let I0=z[h0];if(I0===void 0)I0=new zJ,I0.layers.enable(h0),I0.viewport=new KJ,z[h0]=I0;if(I0.matrix.fromArray(C.transform.matrix),I0.matrix.decompose(I0.position,I0.quaternion,I0.scale),I0.projectionMatrix.fromArray(C.projectionMatrix),I0.projectionMatrixInverse.copy(I0.projectionMatrix).invert(),I0.viewport.set(r0.x,r0.y,r0.width,r0.height),h0===0)V.matrix.copy(I0.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);if(G0===!0)V.cameras.push(I0)}let F0=Z.enabledFeatures;if(F0&&F0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&G){let h0=G.getDepthInformation(k0[0]);if(h0&&h0.isValid&&h0.texture)R.init(h0,Z.renderState)}if(F0&&F0.includes("camera-access")){if(J.state.unbindTexture(),G)for(let h0=0;h0<k0.length;h0++){let C=k0[h0].camera;if(C){let r0=M[C];if(!r0)r0=new R$,M[C]=r0;let I0=G.getCameraImage(C);r0.sourceTexture=I0}}}}for(let k0=0;k0<L.length;k0++){let G0=w[k0],F0=L[k0];if(G0!==null&&F0!==void 0)F0.update(G0,W0,X||K)}if(P0)P0(d,W0);if(W0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:W0});O=null}let JJ=new hW;JJ.setAnimationLoop(g0),this.setAnimationLoop=function(d){P0=d},this.dispose=function(){}}}var p8=new IJ,VG=new $J;function LG(J,Q){function $(q,D){if(q.matrixAutoUpdate===!0)q.updateMatrix();D.value.copy(q.matrix)}function Z(q,D){if(D.color.getRGB(q.fogColor.value,uQ(J)),D.isFog)q.fogNear.value=D.near,q.fogFar.value=D.far;else if(D.isFogExp2)q.fogDensity.value=D.density}function W(q,D,I,L,w){if(D.isMeshBasicMaterial)K(q,D);else if(D.isMeshLambertMaterial)K(q,D);else if(D.isMeshToonMaterial)K(q,D),N(q,D);else if(D.isMeshPhongMaterial)K(q,D),G(q,D);else if(D.isMeshStandardMaterial){if(K(q,D),E(q,D),D.isMeshPhysicalMaterial)O(q,D,w)}else if(D.isMeshMatcapMaterial)K(q,D),R(q,D);else if(D.isMeshDepthMaterial)K(q,D);else if(D.isMeshDistanceMaterial)K(q,D),M(q,D);else if(D.isMeshNormalMaterial)K(q,D);else if(D.isLineBasicMaterial){if(H(q,D),D.isLineDashedMaterial)Y(q,D)}else if(D.isPointsMaterial)X(q,D,I,L);else if(D.isSpriteMaterial)U(q,D);else if(D.isShadowMaterial)q.color.value.copy(D.color),q.opacity.value=D.opacity;else if(D.isShaderMaterial)D.uniformsNeedUpdate=!1}function K(q,D){if(q.opacity.value=D.opacity,D.color)q.diffuse.value.copy(D.color);if(D.emissive)q.emissive.value.copy(D.emissive).multiplyScalar(D.emissiveIntensity);if(D.map)q.map.value=D.map,$(D.map,q.mapTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.bumpMap){if(q.bumpMap.value=D.bumpMap,$(D.bumpMap,q.bumpMapTransform),q.bumpScale.value=D.bumpScale,D.side===SJ)q.bumpScale.value*=-1}if(D.normalMap){if(q.normalMap.value=D.normalMap,$(D.normalMap,q.normalMapTransform),q.normalScale.value.copy(D.normalScale),D.side===SJ)q.normalScale.value.negate()}if(D.displacementMap)q.displacementMap.value=D.displacementMap,$(D.displacementMap,q.displacementMapTransform),q.displacementScale.value=D.displacementScale,q.displacementBias.value=D.displacementBias;if(D.emissiveMap)q.emissiveMap.value=D.emissiveMap,$(D.emissiveMap,q.emissiveMapTransform);if(D.specularMap)q.specularMap.value=D.specularMap,$(D.specularMap,q.specularMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest;let I=Q.get(D),L=I.envMap,w=I.envMapRotation;if(L){if(q.envMap.value=L,p8.copy(w),p8.x*=-1,p8.y*=-1,p8.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)p8.y*=-1,p8.z*=-1;q.envMapRotation.value.setFromMatrix4(VG.makeRotationFromEuler(p8)),q.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,q.reflectivity.value=D.reflectivity,q.ior.value=D.ior,q.refractionRatio.value=D.refractionRatio}if(D.lightMap)q.lightMap.value=D.lightMap,q.lightMapIntensity.value=D.lightMapIntensity,$(D.lightMap,q.lightMapTransform);if(D.aoMap)q.aoMap.value=D.aoMap,q.aoMapIntensity.value=D.aoMapIntensity,$(D.aoMap,q.aoMapTransform)}function H(q,D){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,D.map)q.map.value=D.map,$(D.map,q.mapTransform)}function Y(q,D){q.dashSize.value=D.dashSize,q.totalSize.value=D.dashSize+D.gapSize,q.scale.value=D.scale}function X(q,D,I,L){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,q.size.value=D.size*I,q.scale.value=L*0.5,D.map)q.map.value=D.map,$(D.map,q.uvTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest}function U(q,D){if(q.diffuse.value.copy(D.color),q.opacity.value=D.opacity,q.rotation.value=D.rotation,D.map)q.map.value=D.map,$(D.map,q.mapTransform);if(D.alphaMap)q.alphaMap.value=D.alphaMap,$(D.alphaMap,q.alphaMapTransform);if(D.alphaTest>0)q.alphaTest.value=D.alphaTest}function G(q,D){q.specular.value.copy(D.specular),q.shininess.value=Math.max(D.shininess,0.0001)}function N(q,D){if(D.gradientMap)q.gradientMap.value=D.gradientMap}function E(q,D){if(q.metalness.value=D.metalness,D.metalnessMap)q.metalnessMap.value=D.metalnessMap,$(D.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=D.roughness,D.roughnessMap)q.roughnessMap.value=D.roughnessMap,$(D.roughnessMap,q.roughnessMapTransform);if(D.envMap)q.envMapIntensity.value=D.envMapIntensity}function O(q,D,I){if(q.ior.value=D.ior,D.sheen>0){if(q.sheenColor.value.copy(D.sheenColor).multiplyScalar(D.sheen),q.sheenRoughness.value=D.sheenRoughness,D.sheenColorMap)q.sheenColorMap.value=D.sheenColorMap,$(D.sheenColorMap,q.sheenColorMapTransform);if(D.sheenRoughnessMap)q.sheenRoughnessMap.value=D.sheenRoughnessMap,$(D.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(D.clearcoat>0){if(q.clearcoat.value=D.clearcoat,q.clearcoatRoughness.value=D.clearcoatRoughness,D.clearcoatMap)q.clearcoatMap.value=D.clearcoatMap,$(D.clearcoatMap,q.clearcoatMapTransform);if(D.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=D.clearcoatRoughnessMap,$(D.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(D.clearcoatNormalMap){if(q.clearcoatNormalMap.value=D.clearcoatNormalMap,$(D.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(D.clearcoatNormalScale),D.side===SJ)q.clearcoatNormalScale.value.negate()}}if(D.dispersion>0)q.dispersion.value=D.dispersion;if(D.iridescence>0){if(q.iridescence.value=D.iridescence,q.iridescenceIOR.value=D.iridescenceIOR,q.iridescenceThicknessMinimum.value=D.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=D.iridescenceThicknessRange[1],D.iridescenceMap)q.iridescenceMap.value=D.iridescenceMap,$(D.iridescenceMap,q.iridescenceMapTransform);if(D.iridescenceThicknessMap)q.iridescenceThicknessMap.value=D.iridescenceThicknessMap,$(D.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(D.transmission>0){if(q.transmission.value=D.transmission,q.transmissionSamplerMap.value=I.texture,q.transmissionSamplerSize.value.set(I.width,I.height),D.transmissionMap)q.transmissionMap.value=D.transmissionMap,$(D.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=D.thickness,D.thicknessMap)q.thicknessMap.value=D.thicknessMap,$(D.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=D.attenuationDistance,q.attenuationColor.value.copy(D.attenuationColor)}if(D.anisotropy>0){if(q.anisotropyVector.value.set(D.anisotropy*Math.cos(D.anisotropyRotation),D.anisotropy*Math.sin(D.anisotropyRotation)),D.anisotropyMap)q.anisotropyMap.value=D.anisotropyMap,$(D.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=D.specularIntensity,q.specularColor.value.copy(D.specularColor),D.specularColorMap)q.specularColorMap.value=D.specularColorMap,$(D.specularColorMap,q.specularColorMapTransform);if(D.specularIntensityMap)q.specularIntensityMap.value=D.specularIntensityMap,$(D.specularIntensityMap,q.specularIntensityMapTransform)}function R(q,D){if(D.matcap)q.matcap.value=D.matcap}function M(q,D){let I=Q.get(D).light;q.referencePosition.value.setFromMatrixPosition(I.matrixWorld),q.nearDistance.value=I.shadow.camera.near,q.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function zG(J,Q,$,Z){let W={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(I,L){let w=L.program;Z.uniformBlockBinding(I,w)}function U(I,L){let w=W[I.id];if(w===void 0)R(I),w=G(I),W[I.id]=w,I.addEventListener("dispose",q);let T=L.program;Z.updateUBOMapping(I,T);let _=Q.render.frame;if(K[I.id]!==_)E(I),K[I.id]=_}function G(I){let L=N();I.__bindingPointIndex=L;let w=J.createBuffer(),T=I.__size,_=I.usage;return J.bindBuffer(J.UNIFORM_BUFFER,w),J.bufferData(J.UNIFORM_BUFFER,T,_),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,w),w}function N(){for(let I=0;I<Y;I++)if(H.indexOf(I)===-1)return H.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(I){let L=W[I.id],w=I.uniforms,T=I.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let _=0,A=w.length;_<A;_++){let m=Array.isArray(w[_])?w[_]:[w[_]];for(let z=0,V=m.length;z<V;z++){let j=m[z];if(O(j,_,z,T)===!0){let l=j.__offset,p=Array.isArray(j.value)?j.value:[j.value],c=0;for(let o=0;o<p.length;o++){let u=p[o],r=M(u);if(typeof u==="number"||typeof u==="boolean")j.__data[0]=u,J.bufferSubData(J.UNIFORM_BUFFER,l+c,j.__data);else if(u.isMatrix3)j.__data[0]=u.elements[0],j.__data[1]=u.elements[1],j.__data[2]=u.elements[2],j.__data[3]=0,j.__data[4]=u.elements[3],j.__data[5]=u.elements[4],j.__data[6]=u.elements[5],j.__data[7]=0,j.__data[8]=u.elements[6],j.__data[9]=u.elements[7],j.__data[10]=u.elements[8],j.__data[11]=0;else u.toArray(j.__data,c),c+=r.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,l,j.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function O(I,L,w,T){let _=I.value,A=L+"_"+w;if(T[A]===void 0){if(typeof _==="number"||typeof _==="boolean")T[A]=_;else T[A]=_.clone();return!0}else{let m=T[A];if(typeof _==="number"||typeof _==="boolean"){if(m!==_)return T[A]=_,!0}else if(m.equals(_)===!1)return m.copy(_),!0}return!1}function R(I){let L=I.uniforms,w=0,T=16;for(let A=0,m=L.length;A<m;A++){let z=Array.isArray(L[A])?L[A]:[L[A]];for(let V=0,j=z.length;V<j;V++){let l=z[V],p=Array.isArray(l.value)?l.value:[l.value];for(let c=0,o=p.length;c<o;c++){let u=p[c],r=M(u),x=w%T,Z0=x%r.boundary,U0=x+Z0;if(w+=Z0,U0!==0&&T-U0<r.storage)w+=T-U0;l.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),l.__offset=w,w+=r.storage}}}let _=w%T;if(_>0)w+=T-_;return I.__size=w,I.__cache={},this}function M(I){let L={boundary:0,storage:0};if(typeof I==="number"||typeof I==="boolean")L.boundary=4,L.storage=4;else if(I.isVector2)L.boundary=8,L.storage=8;else if(I.isVector3||I.isColor)L.boundary=16,L.storage=12;else if(I.isVector4)L.boundary=16,L.storage=16;else if(I.isMatrix3)L.boundary=48,L.storage=48;else if(I.isMatrix4)L.boundary=64,L.storage=64;else if(I.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I);return L}function q(I){let L=I.target;L.removeEventListener("dispose",q);let w=H.indexOf(L.__bindingPointIndex);H.splice(w,1),J.deleteBuffer(W[L.id]),delete W[L.id],delete K[L.id]}function D(){for(let I in W)J.deleteBuffer(W[I]);H=[],W={},K={}}return{bind:X,update:U,dispose:D}}class k${constructor(J={}){let{canvas:Q=KW(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:N=!1}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=K;let O=new Uint32Array(4),R=new Int32Array(4),M=null,q=null,D=[],I=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=X8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,w=!1;this._outputColorSpace=o6;let T=0,_=0,A=null,m=-1,z=null,V=new KJ,j=new KJ,l=null,p=new j0(0),c=0,o=Q.width,u=Q.height,r=1,x=null,Z0=null,U0=new KJ(0,0,o,u),P0=new KJ(0,0,o,u),g0=!1,JJ=new s9,d=!1,W0=!1,k0=new $J,G0=new v,F0=new KJ,p0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},l0=!1;function h0(){return A===null?r:1}let C=$;function r0(k,S){return Q.getContext(k,S)}try{let k={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${ZZ}`);if(Q.addEventListener("webglcontextlost",K0,!1),Q.addEventListener("webglcontextrestored",Q0,!1),Q.addEventListener("webglcontextcreationerror",q0,!1),C===null){if(C=r0("webgl2",k),C===null)if(r0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(k){throw console.error("THREE.WebGLRenderer: "+k.message),k}let I0,c0,z0,QJ,M0,w0,OJ,qJ,UJ,B,F,f,n,i,g,E0,J0,R0,A0,e,Y0,V0,L0,X0;function f0(){if(I0=new pX(C),I0.init(),V0=new RG(C,I0),c0=new yX(C,I0,J,V0),z0=new OG(C,I0),c0.reversedDepthBuffer&&N)z0.buffers.depth.setReversed(!0);QJ=new lX(C),M0=new $G,w0=new FG(C,I0,z0,M0,c0,V0,QJ),OJ=new fX(L),qJ=new gX(L),UJ=new oK(C),L0=new SX(C,UJ),B=new mX(C,UJ,QJ,L0),F=new cX(C,B,UJ,QJ),A0=new uX(C,c0,w0),E0=new vX(M0),f=new QG(L,OJ,qJ,I0,c0,L0,E0),n=new LG(L,M0),i=new WG,g=new GG(I0),R0=new TX(L,OJ,qJ,z0,F,E,Y),J0=new qG(L,F,c0),X0=new zG(C,QJ,c0,z0),e=new jX(C,I0,QJ),Y0=new dX(C,I0,QJ),QJ.programs=f.programs,L.capabilities=c0,L.extensions=I0,L.properties=M0,L.renderLists=i,L.shadowMap=J0,L.state=z0,L.info=QJ}f0();let P=new iW(L,C);this.xr=P,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let k=I0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=I0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return r},this.setPixelRatio=function(k){if(k===void 0)return;r=k,this.setSize(o,u,!1)},this.getSize=function(k){return k.set(o,u)},this.setSize=function(k,S,b=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(o=k,u=S,Q.width=Math.floor(k*r),Q.height=Math.floor(S*r),b===!0)Q.style.width=k+"px",Q.style.height=S+"px";this.setViewport(0,0,k,S)},this.getDrawingBufferSize=function(k){return k.set(o*r,u*r).floor()},this.setDrawingBufferSize=function(k,S,b){o=k,u=S,r=b,Q.width=Math.floor(k*b),Q.height=Math.floor(S*b),this.setViewport(0,0,k,S)},this.getCurrentViewport=function(k){return k.copy(V)},this.getViewport=function(k){return k.copy(U0)},this.setViewport=function(k,S,b,h){if(k.isVector4)U0.set(k.x,k.y,k.z,k.w);else U0.set(k,S,b,h);z0.viewport(V.copy(U0).multiplyScalar(r).round())},this.getScissor=function(k){return k.copy(P0)},this.setScissor=function(k,S,b,h){if(k.isVector4)P0.set(k.x,k.y,k.z,k.w);else P0.set(k,S,b,h);z0.scissor(j.copy(P0).multiplyScalar(r).round())},this.getScissorTest=function(){return g0},this.setScissorTest=function(k){z0.setScissorTest(g0=k)},this.setOpaqueSort=function(k){x=k},this.setTransparentSort=function(k){Z0=k},this.getClearColor=function(k){return k.copy(R0.getClearColor())},this.setClearColor=function(){R0.setClearColor(...arguments)},this.getClearAlpha=function(){return R0.getClearAlpha()},this.setClearAlpha=function(){R0.setClearAlpha(...arguments)},this.clear=function(k=!0,S=!0,b=!0){let h=0;if(k){let y=!1;if(A!==null){let t=A.texture.format;y=t===UQ||t===XQ||t===YQ}if(y){let t=A.texture.type,H0=t===R8||t===E9||t===g9||t===q9||t===KQ||t===HQ,D0=R0.getClearColor(),N0=R0.getClearAlpha(),C0=D0.r,T0=D0.g,B0=D0.b;if(H0)O[0]=C0,O[1]=T0,O[2]=B0,O[3]=N0,C.clearBufferuiv(C.COLOR,0,O);else R[0]=C0,R[1]=T0,R[2]=B0,R[3]=N0,C.clearBufferiv(C.COLOR,0,R)}else h|=C.COLOR_BUFFER_BIT}if(S)h|=C.DEPTH_BUFFER_BIT;if(b)h|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);C.clear(h)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",K0,!1),Q.removeEventListener("webglcontextrestored",Q0,!1),Q.removeEventListener("webglcontextcreationerror",q0,!1),R0.dispose(),i.dispose(),g.dispose(),M0.dispose(),OJ.dispose(),qJ.dispose(),F.dispose(),L0.dispose(),X0.dispose(),f.dispose(),P.dispose(),P.removeEventListener("sessionstart",nJ),P.removeEventListener("sessionend",sJ),I8.stop()};function K0(k){k.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Q0(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let k=QJ.autoReset,S=J0.enabled,b=J0.autoUpdate,h=J0.needsUpdate,y=J0.type;f0(),QJ.autoReset=k,J0.enabled=S,J0.autoUpdate=b,J0.needsUpdate=h,J0.type=y}function q0(k){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function a(k){let S=k.target;S.removeEventListener("dispose",a),s(S)}function s(k){O0(k),M0.remove(k)}function O0(k){let S=M0.get(k).programs;if(S!==void 0){if(S.forEach(function(b){f.releaseProgram(b)}),k.isShaderMaterial)f.releaseShaderCache(k)}}this.renderBufferDirect=function(k,S,b,h,y,t){if(S===null)S=p0;let H0=y.isMesh&&y.matrixWorld.determinant()<0,D0=NK(k,S,b,h,y);z0.setMaterial(h,H0);let N0=b.index,C0=1;if(h.wireframe===!0){if(N0=B.getWireframeAttribute(b),N0===void 0)return;C0=2}let T0=b.drawRange,B0=b.attributes.position,b0=T0.start*C0,i0=(T0.start+T0.count)*C0;if(t!==null)b0=Math.max(b0,t.start*C0),i0=Math.min(i0,(t.start+t.count)*C0);if(N0!==null)b0=Math.max(b0,0),i0=Math.min(i0,N0.count);else if(B0!==void 0&&B0!==null)b0=Math.max(b0,0),i0=Math.min(i0,B0.count);let HJ=i0-b0;if(HJ<0||HJ===1/0)return;L0.setup(y,h,D0,b,N0);let e0,a0=e;if(N0!==null)e0=UJ.get(N0),a0=Y0,a0.setIndex(e0);if(y.isMesh)if(h.wireframe===!0)z0.setLineWidth(h.wireframeLinewidth*h0()),a0.setMode(C.LINES);else a0.setMode(C.TRIANGLES);else if(y.isLine){let _0=h.linewidth;if(_0===void 0)_0=1;if(z0.setLineWidth(_0*h0()),y.isLineSegments)a0.setMode(C.LINES);else if(y.isLineLoop)a0.setMode(C.LINE_LOOP);else a0.setMode(C.LINE_STRIP)}else if(y.isPoints)a0.setMode(C.POINTS);else if(y.isSprite)a0.setMode(C.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)T8("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),a0.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(!I0.get("WEBGL_multi_draw")){let{_multiDrawStarts:_0,_multiDrawCounts:ZJ,_multiDrawCount:u0}=y,CJ=N0?UJ.get(N0).bytesPerElement:1,s8=M0.get(h).currentProgram.getUniforms();for(let PJ=0;PJ<u0;PJ++)s8.setValue(C,"_gl_DrawID",PJ),a0.render(_0[PJ]/CJ,ZJ[PJ])}else a0.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)a0.renderInstances(b0,HJ,y.count);else if(b.isInstancedBufferGeometry){let _0=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,ZJ=Math.min(b.instanceCount,_0);a0.renderInstances(b0,HJ,ZJ)}else a0.render(b0,HJ)};function S0(k,S,b){if(k.transparent===!0&&k.side===aJ&&k.forceSinglePass===!1)k.side=SJ,k.needsUpdate=!0,Y6(k,S,b),k.side=Y9,k.needsUpdate=!0,Y6(k,S,b),k.side=aJ;else Y6(k,S,b)}this.compile=function(k,S,b=null){if(b===null)b=k;if(q=g.get(b),q.init(S),I.push(q),b.traverseVisible(function(y){if(y.isLight&&y.layers.test(S.layers)){if(q.pushLight(y),y.castShadow)q.pushShadow(y)}}),k!==b)k.traverseVisible(function(y){if(y.isLight&&y.layers.test(S.layers)){if(q.pushLight(y),y.castShadow)q.pushShadow(y)}});q.setupLights();let h=new Set;return k.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let t=y.material;if(t)if(Array.isArray(t))for(let H0=0;H0<t.length;H0++){let D0=t[H0];S0(D0,b,y),h.add(D0)}else S0(t,b,y),h.add(t)}),q=I.pop(),h},this.compileAsync=function(k,S,b=null){let h=this.compile(k,S,b);return new Promise((y)=>{function t(){if(h.forEach(function(H0){if(M0.get(H0).currentProgram.isReady())h.delete(H0)}),h.size===0){y(k);return}setTimeout(t,10)}if(I0.get("KHR_parallel_shader_compile")!==null)t();else setTimeout(t,10)})};let o0=null;function s0(k){if(o0)o0(k)}function nJ(){I8.stop()}function sJ(){I8.start()}let I8=new hW;if(I8.setAnimationLoop(s0),typeof self<"u")I8.setContext(self);this.setAnimationLoop=function(k){o0=k,P.setAnimationLoop(k),k===null?I8.stop():I8.start()},P.addEventListener("sessionstart",nJ),P.addEventListener("sessionend",sJ),this.render=function(k,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(S.parent===null&&S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(P.enabled===!0&&P.isPresenting===!0){if(P.cameraAutoUpdate===!0)P.updateCamera(S);S=P.getCamera()}if(k.isScene===!0)k.onBeforeRender(L,k,S,A);if(q=g.get(k,I.length),q.init(S),I.push(q),k0.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),JJ.setFromProjectionMatrix(k0,gQ,S.reversedDepth),W0=this.localClippingEnabled,d=E0.init(this.clippingPlanes,W0),M=i.get(k,D.length),M.init(),D.push(M),P.enabled===!0&&P.isPresenting===!0){let t=L.xr.getDepthSensingMesh();if(t!==null)I7(t,S,-1/0,L.sortObjects)}if(I7(k,S,0,L.sortObjects),M.finish(),L.sortObjects===!0)M.sort(x,Z0);if(l0=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,l0)R0.addToRenderList(M,k);if(this.info.render.frame++,d===!0)E0.beginShadows();let b=q.state.shadowsArray;if(J0.render(b,k,S),d===!0)E0.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:h,transmissive:y}=M;if(q.setupLights(),S.isArrayCamera){let t=S.cameras;if(y.length>0)for(let H0=0,D0=t.length;H0<D0;H0++){let N0=t[H0];P$(h,y,k,N0)}if(l0)R0.render(k);for(let H0=0,D0=t.length;H0<D0;H0++){let N0=t[H0];C$(M,k,N0,N0.viewport)}}else{if(y.length>0)P$(h,y,k,S);if(l0)R0.render(k);C$(M,k,S)}if(A!==null&&_===0)w0.updateMultisampleRenderTarget(A),w0.updateRenderTargetMipmap(A);if(k.isScene===!0)k.onAfterRender(L,k,S);if(L0.resetDefaultState(),m=-1,z=null,I.pop(),I.length>0){if(q=I[I.length-1],d===!0)E0.setGlobalState(L.clippingPlanes,q.state.camera)}else q=null;if(D.pop(),D.length>0)M=D[D.length-1];else M=null};function I7(k,S,b,h){if(k.visible===!1)return;if(k.layers.test(S.layers)){if(k.isGroup)b=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(S)}else if(k.isLight){if(q.pushLight(k),k.castShadow)q.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||JJ.intersectsSprite(k)){if(h)F0.setFromMatrixPosition(k.matrixWorld).applyMatrix4(k0);let H0=F.update(k),D0=k.material;if(D0.visible)M.push(k,H0,D0,b,F0.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||JJ.intersectsObject(k)){let H0=F.update(k),D0=k.material;if(h){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();F0.copy(k.boundingSphere.center)}else{if(H0.boundingSphere===null)H0.computeBoundingSphere();F0.copy(H0.boundingSphere.center)}F0.applyMatrix4(k.matrixWorld).applyMatrix4(k0)}if(Array.isArray(D0)){let N0=H0.groups;for(let C0=0,T0=N0.length;C0<T0;C0++){let B0=N0[C0],b0=D0[B0.materialIndex];if(b0&&b0.visible)M.push(k,H0,b0,b,F0.z,B0)}}else if(D0.visible)M.push(k,H0,D0,b,F0.z,null)}}}let t=k.children;for(let H0=0,D0=t.length;H0<D0;H0++)I7(t[H0],S,b,h)}function C$(k,S,b,h){let{opaque:y,transmissive:t,transparent:H0}=k;if(q.setupLightsView(b),d===!0)E0.setGlobalState(L.clippingPlanes,b);if(h)z0.viewport(V.copy(h));if(y.length>0)H6(y,S,b);if(t.length>0)H6(t,S,b);if(H0.length>0)H6(H0,S,b);z0.buffers.depth.setTest(!0),z0.buffers.depth.setMask(!0),z0.buffers.color.setMask(!0),z0.setPolygonOffset(!1)}function P$(k,S,b,h){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(q.state.transmissionRenderTarget[h.id]===void 0)q.state.transmissionRenderTarget[h.id]=new cJ(1,1,{generateMipmaps:!0,type:I0.has("EXT_color_buffer_half_float")||I0.has("EXT_color_buffer_float")?p9:R8,minFilter:N9,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:m0.workingColorSpace});let t=q.state.transmissionRenderTarget[h.id],H0=h.viewport||V;t.setSize(H0.z*L.transmissionResolutionScale,H0.w*L.transmissionResolutionScale);let D0=L.getRenderTarget(),N0=L.getActiveCubeFace(),C0=L.getActiveMipmapLevel();if(L.setRenderTarget(t),L.getClearColor(p),c=L.getClearAlpha(),c<1)L.setClearColor(16777215,0.5);if(L.clear(),l0)R0.render(b);let T0=L.toneMapping;L.toneMapping=X8;let B0=h.viewport;if(h.viewport!==void 0)h.viewport=void 0;if(q.setupLightsView(h),d===!0)E0.setGlobalState(L.clippingPlanes,h);if(H6(k,b,h),w0.updateMultisampleRenderTarget(t),w0.updateRenderTargetMipmap(t),I0.has("WEBGL_multisampled_render_to_texture")===!1){let b0=!1;for(let i0=0,HJ=S.length;i0<HJ;i0++){let e0=S[i0],a0=e0.object,_0=e0.geometry,ZJ=e0.material,u0=e0.group;if(ZJ.side===aJ&&a0.layers.test(h.layers)){let CJ=ZJ.side;ZJ.side=SJ,ZJ.needsUpdate=!0,A$(a0,b,h,_0,ZJ,u0),ZJ.side=CJ,ZJ.needsUpdate=!0,b0=!0}}if(b0===!0)w0.updateMultisampleRenderTarget(t),w0.updateRenderTargetMipmap(t)}if(L.setRenderTarget(D0,N0,C0),L.setClearColor(p,c),B0!==void 0)h.viewport=B0;L.toneMapping=T0}function H6(k,S,b){let h=S.isScene===!0?S.overrideMaterial:null;for(let y=0,t=k.length;y<t;y++){let H0=k[y],D0=H0.object,N0=H0.geometry,C0=H0.group,T0=H0.material;if(T0.allowOverride===!0&&h!==null)T0=h;if(D0.layers.test(b.layers))A$(D0,S,b,N0,T0,C0)}}function A$(k,S,b,h,y,t){if(k.onBeforeRender(L,S,b,h,y,t),k.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),y.onBeforeRender(L,S,b,h,k,t),y.transparent===!0&&y.side===aJ&&y.forceSinglePass===!1)y.side=SJ,y.needsUpdate=!0,L.renderBufferDirect(b,S,h,y,k,t),y.side=Y9,y.needsUpdate=!0,L.renderBufferDirect(b,S,h,y,k,t),y.side=aJ;else L.renderBufferDirect(b,S,h,y,k,t);k.onAfterRender(L,S,b,h,y,t)}function Y6(k,S,b){if(S.isScene!==!0)S=p0;let h=M0.get(k),y=q.state.lights,t=q.state.shadowsArray,H0=y.state.version,D0=f.getParameters(k,y.state,t,S,b),N0=f.getProgramCacheKey(D0),C0=h.programs;if(h.environment=k.isMeshStandardMaterial?S.environment:null,h.fog=S.fog,h.envMap=(k.isMeshStandardMaterial?qJ:OJ).get(k.envMap||h.environment),h.envMapRotation=h.environment!==null&&k.envMap===null?S.environmentRotation:k.envMapRotation,C0===void 0)k.addEventListener("dispose",a),C0=new Map,h.programs=C0;let T0=C0.get(N0);if(T0!==void 0){if(h.currentProgram===T0&&h.lightsStateVersion===H0)return S$(k,D0),T0}else D0.uniforms=f.getUniforms(k),k.onBeforeCompile(D0,L),T0=f.acquireProgram(D0,N0),C0.set(N0,T0),h.uniforms=D0.uniforms;let B0=h.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)B0.clippingPlanes=E0.uniform;if(S$(k,D0),h.needsLights=qK(k),h.lightsStateVersion=H0,h.needsLights)B0.ambientLightColor.value=y.state.ambient,B0.lightProbe.value=y.state.probe,B0.directionalLights.value=y.state.directional,B0.directionalLightShadows.value=y.state.directionalShadow,B0.spotLights.value=y.state.spot,B0.spotLightShadows.value=y.state.spotShadow,B0.rectAreaLights.value=y.state.rectArea,B0.ltc_1.value=y.state.rectAreaLTC1,B0.ltc_2.value=y.state.rectAreaLTC2,B0.pointLights.value=y.state.point,B0.pointLightShadows.value=y.state.pointShadow,B0.hemisphereLights.value=y.state.hemi,B0.directionalShadowMap.value=y.state.directionalShadowMap,B0.directionalShadowMatrix.value=y.state.directionalShadowMatrix,B0.spotShadowMap.value=y.state.spotShadowMap,B0.spotLightMatrix.value=y.state.spotLightMatrix,B0.spotLightMap.value=y.state.spotLightMap,B0.pointShadowMap.value=y.state.pointShadowMap,B0.pointShadowMatrix.value=y.state.pointShadowMatrix;return h.currentProgram=T0,h.uniformsList=null,T0}function T$(k){if(k.uniformsList===null){let S=k.currentProgram.getUniforms();k.uniformsList=e9.seqWithValue(S.seq,k.uniforms)}return k.uniformsList}function S$(k,S){let b=M0.get(k);b.outputColorSpace=S.outputColorSpace,b.batching=S.batching,b.batchingColor=S.batchingColor,b.instancing=S.instancing,b.instancingColor=S.instancingColor,b.instancingMorph=S.instancingMorph,b.skinning=S.skinning,b.morphTargets=S.morphTargets,b.morphNormals=S.morphNormals,b.morphColors=S.morphColors,b.morphTargetsCount=S.morphTargetsCount,b.numClippingPlanes=S.numClippingPlanes,b.numIntersection=S.numClipIntersection,b.vertexAlphas=S.vertexAlphas,b.vertexTangents=S.vertexTangents,b.toneMapping=S.toneMapping}function NK(k,S,b,h,y){if(S.isScene!==!0)S=p0;w0.resetTextureUnits();let t=S.fog,H0=h.isMeshStandardMaterial?S.environment:null,D0=A===null?L.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:d9,N0=(h.isMeshStandardMaterial?qJ:OJ).get(h.envMap||H0),C0=h.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,T0=!!b.attributes.tangent&&(!!h.normalMap||h.anisotropy>0),B0=!!b.morphAttributes.position,b0=!!b.morphAttributes.normal,i0=!!b.morphAttributes.color,HJ=X8;if(h.toneMapped){if(A===null||A.isXRRenderTarget===!0)HJ=L.toneMapping}let e0=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,a0=e0!==void 0?e0.length:0,_0=M0.get(h),ZJ=q.state.lights;if(d===!0){if(W0===!0||k!==z){let LJ=k===z&&h.id===m;E0.setState(h,k,LJ)}}let u0=!1;if(h.version===_0.__version){if(_0.needsLights&&_0.lightsStateVersion!==ZJ.state.version)u0=!0;else if(_0.outputColorSpace!==D0)u0=!0;else if(y.isBatchedMesh&&_0.batching===!1)u0=!0;else if(!y.isBatchedMesh&&_0.batching===!0)u0=!0;else if(y.isBatchedMesh&&_0.batchingColor===!0&&y.colorTexture===null)u0=!0;else if(y.isBatchedMesh&&_0.batchingColor===!1&&y.colorTexture!==null)u0=!0;else if(y.isInstancedMesh&&_0.instancing===!1)u0=!0;else if(!y.isInstancedMesh&&_0.instancing===!0)u0=!0;else if(y.isSkinnedMesh&&_0.skinning===!1)u0=!0;else if(!y.isSkinnedMesh&&_0.skinning===!0)u0=!0;else if(y.isInstancedMesh&&_0.instancingColor===!0&&y.instanceColor===null)u0=!0;else if(y.isInstancedMesh&&_0.instancingColor===!1&&y.instanceColor!==null)u0=!0;else if(y.isInstancedMesh&&_0.instancingMorph===!0&&y.morphTexture===null)u0=!0;else if(y.isInstancedMesh&&_0.instancingMorph===!1&&y.morphTexture!==null)u0=!0;else if(_0.envMap!==N0)u0=!0;else if(h.fog===!0&&_0.fog!==t)u0=!0;else if(_0.numClippingPlanes!==void 0&&(_0.numClippingPlanes!==E0.numPlanes||_0.numIntersection!==E0.numIntersection))u0=!0;else if(_0.vertexAlphas!==C0)u0=!0;else if(_0.vertexTangents!==T0)u0=!0;else if(_0.morphTargets!==B0)u0=!0;else if(_0.morphNormals!==b0)u0=!0;else if(_0.morphColors!==i0)u0=!0;else if(_0.toneMapping!==HJ)u0=!0;else if(_0.morphTargetsCount!==a0)u0=!0}else u0=!0,_0.__version=h.version;let CJ=_0.currentProgram;if(u0===!0)CJ=Y6(h,S,y);let s8=!1,PJ=!1,C9=!1,WJ=CJ.getUniforms(),fJ=_0.uniforms;if(z0.useProgram(CJ.program))s8=!0,PJ=!0,C9=!0;if(h.id!==m)m=h.id,PJ=!0;if(s8||z!==k){if(z0.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();WJ.setValue(C,"projectionMatrix",k.projectionMatrix),WJ.setValue(C,"viewMatrix",k.matrixWorldInverse);let _J=WJ.map.cameraPosition;if(_J!==void 0)_J.setValue(C,G0.setFromMatrixPosition(k.matrixWorld));if(c0.logarithmicDepthBuffer)WJ.setValue(C,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(h.isMeshPhongMaterial||h.isMeshToonMaterial||h.isMeshLambertMaterial||h.isMeshBasicMaterial||h.isMeshStandardMaterial||h.isShaderMaterial)WJ.setValue(C,"isOrthographic",k.isOrthographicCamera===!0);if(z!==k)z=k,PJ=!0,C9=!0}if(y.isSkinnedMesh){WJ.setOptional(C,y,"bindMatrix"),WJ.setOptional(C,y,"bindMatrixInverse");let LJ=y.skeleton;if(LJ){if(LJ.boneTexture===null)LJ.computeBoneTexture();WJ.setValue(C,"boneTexture",LJ.boneTexture,w0)}}if(y.isBatchedMesh){if(WJ.setOptional(C,y,"batchingTexture"),WJ.setValue(C,"batchingTexture",y._matricesTexture,w0),WJ.setOptional(C,y,"batchingIdTexture"),WJ.setValue(C,"batchingIdTexture",y._indirectTexture,w0),WJ.setOptional(C,y,"batchingColorTexture"),y._colorsTexture!==null)WJ.setValue(C,"batchingColorTexture",y._colorsTexture,w0)}let bJ=b.morphAttributes;if(bJ.position!==void 0||bJ.normal!==void 0||bJ.color!==void 0)A0.update(y,b,CJ);if(PJ||_0.receiveShadow!==y.receiveShadow)_0.receiveShadow=y.receiveShadow,WJ.setValue(C,"receiveShadow",y.receiveShadow);if(h.isMeshGouraudMaterial&&h.envMap!==null)fJ.envMap.value=N0,fJ.flipEnvMap.value=N0.isCubeTexture&&N0.isRenderTargetTexture===!1?-1:1;if(h.isMeshStandardMaterial&&h.envMap===null&&S.environment!==null)fJ.envMapIntensity.value=S.environmentIntensity;if(PJ){if(WJ.setValue(C,"toneMappingExposure",L.toneMappingExposure),_0.needsLights)EK(fJ,C9);if(t&&h.fog===!0)n.refreshFogUniforms(fJ,t);n.refreshMaterialUniforms(fJ,h,r,u,q.state.transmissionRenderTarget[k.id]),e9.upload(C,T$(_0),fJ,w0)}if(h.isShaderMaterial&&h.uniformsNeedUpdate===!0)e9.upload(C,T$(_0),fJ,w0),h.uniformsNeedUpdate=!1;if(h.isSpriteMaterial)WJ.setValue(C,"center",y.center);if(WJ.setValue(C,"modelViewMatrix",y.modelViewMatrix),WJ.setValue(C,"normalMatrix",y.normalMatrix),WJ.setValue(C,"modelMatrix",y.matrixWorld),h.isShaderMaterial||h.isRawShaderMaterial){let LJ=h.uniformsGroups;for(let _J=0,_7=LJ.length;_J<_7;_J++){let _8=LJ[_J];X0.update(_8,CJ),X0.bind(_8,CJ)}}return CJ}function EK(k,S){k.ambientLightColor.needsUpdate=S,k.lightProbe.needsUpdate=S,k.directionalLights.needsUpdate=S,k.directionalLightShadows.needsUpdate=S,k.pointLights.needsUpdate=S,k.pointLightShadows.needsUpdate=S,k.spotLights.needsUpdate=S,k.spotLightShadows.needsUpdate=S,k.rectAreaLights.needsUpdate=S,k.hemisphereLights.needsUpdate=S}function qK(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(k,S,b){let h=M0.get(k);if(h.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,h.__autoAllocateDepthBuffer===!1)h.__useRenderToTexture=!1;M0.get(k.texture).__webglTexture=S,M0.get(k.depthTexture).__webglTexture=h.__autoAllocateDepthBuffer?void 0:b,h.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,S){let b=M0.get(k);b.__webglFramebuffer=S,b.__useDefaultFramebuffer=S===void 0};let DK=C.createFramebuffer();this.setRenderTarget=function(k,S=0,b=0){A=k,T=S,_=b;let h=!0,y=null,t=!1,H0=!1;if(k){let N0=M0.get(k);if(N0.__useDefaultFramebuffer!==void 0)z0.bindFramebuffer(C.FRAMEBUFFER,null),h=!1;else if(N0.__webglFramebuffer===void 0)w0.setupRenderTarget(k);else if(N0.__hasExternalTextures)w0.rebindTextures(k,M0.get(k.texture).__webglTexture,M0.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let B0=k.depthTexture;if(N0.__boundDepthTexture!==B0){if(B0!==null&&M0.has(B0)&&(k.width!==B0.image.width||k.height!==B0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w0.setupDepthRenderbuffer(k)}}let C0=k.texture;if(C0.isData3DTexture||C0.isDataArrayTexture||C0.isCompressedArrayTexture)H0=!0;let T0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(T0[S]))y=T0[S][b];else y=T0[S];t=!0}else if(k.samples>0&&w0.useMultisampledRTT(k)===!1)y=M0.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(T0))y=T0[b];else y=T0;V.copy(k.viewport),j.copy(k.scissor),l=k.scissorTest}else V.copy(U0).multiplyScalar(r).floor(),j.copy(P0).multiplyScalar(r).floor(),l=g0;if(b!==0)y=DK;if(z0.bindFramebuffer(C.FRAMEBUFFER,y)&&h)z0.drawBuffers(k,y);if(z0.viewport(V),z0.scissor(j),z0.setScissorTest(l),t){let N0=M0.get(k.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+S,N0.__webglTexture,b)}else if(H0){let N0=S;for(let C0=0;C0<k.textures.length;C0++){let T0=M0.get(k.textures[C0]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+C0,T0.__webglTexture,b,N0)}}else if(k!==null&&b!==0){let N0=M0.get(k.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,N0.__webglTexture,b)}m=-1},this.readRenderTargetPixels=function(k,S,b,h,y,t,H0,D0=0){if(!(k&&k.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let N0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&H0!==void 0)N0=N0[H0];if(N0){z0.bindFramebuffer(C.FRAMEBUFFER,N0);try{let C0=k.textures[D0],T0=C0.format,B0=C0.type;if(!c0.textureFormatReadable(T0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!c0.textureTypeReadable(B0)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(S>=0&&S<=k.width-h&&(b>=0&&b<=k.height-y)){if(k.textures.length>1)C.readBuffer(C.COLOR_ATTACHMENT0+D0);C.readPixels(S,b,h,y,V0.convert(T0),V0.convert(B0),t)}}finally{let C0=A!==null?M0.get(A).__webglFramebuffer:null;z0.bindFramebuffer(C.FRAMEBUFFER,C0)}}},this.readRenderTargetPixelsAsync=async function(k,S,b,h,y,t,H0,D0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let N0=M0.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&H0!==void 0)N0=N0[H0];if(N0)if(S>=0&&S<=k.width-h&&(b>=0&&b<=k.height-y)){z0.bindFramebuffer(C.FRAMEBUFFER,N0);let C0=k.textures[D0],T0=C0.format,B0=C0.type;if(!c0.textureFormatReadable(T0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!c0.textureTypeReadable(B0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let b0=C.createBuffer();if(C.bindBuffer(C.PIXEL_PACK_BUFFER,b0),C.bufferData(C.PIXEL_PACK_BUFFER,t.byteLength,C.STREAM_READ),k.textures.length>1)C.readBuffer(C.COLOR_ATTACHMENT0+D0);C.readPixels(S,b,h,y,V0.convert(T0),V0.convert(B0),0);let i0=A!==null?M0.get(A).__webglFramebuffer:null;z0.bindFramebuffer(C.FRAMEBUFFER,i0);let HJ=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await HW(C,HJ,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,b0),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,t),C.deleteBuffer(b0),C.deleteSync(HJ),t}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,S=null,b=0){let h=Math.pow(2,-b),y=Math.floor(k.image.width*h),t=Math.floor(k.image.height*h),H0=S!==null?S.x:0,D0=S!==null?S.y:0;w0.setTexture2D(k,0),C.copyTexSubImage2D(C.TEXTURE_2D,b,0,0,H0,D0,y,t),z0.unbindTexture()};let OK=C.createFramebuffer(),FK=C.createFramebuffer();if(this.copyTextureToTexture=function(k,S,b=null,h=null,y=0,t=null){if(t===null)if(y!==0)T8("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),t=y,y=0;else t=0;let H0,D0,N0,C0,T0,B0,b0,i0,HJ,e0=k.isCompressedTexture?k.mipmaps[t]:k.image;if(b!==null)H0=b.max.x-b.min.x,D0=b.max.y-b.min.y,N0=b.isBox3?b.max.z-b.min.z:1,C0=b.min.x,T0=b.min.y,B0=b.isBox3?b.min.z:0;else{let bJ=Math.pow(2,-y);if(H0=Math.floor(e0.width*bJ),D0=Math.floor(e0.height*bJ),k.isDataArrayTexture)N0=e0.depth;else if(k.isData3DTexture)N0=Math.floor(e0.depth*bJ);else N0=1;C0=0,T0=0,B0=0}if(h!==null)b0=h.x,i0=h.y,HJ=h.z;else b0=0,i0=0,HJ=0;let a0=V0.convert(S.format),_0=V0.convert(S.type),ZJ;if(S.isData3DTexture)w0.setTexture3D(S,0),ZJ=C.TEXTURE_3D;else if(S.isDataArrayTexture||S.isCompressedArrayTexture)w0.setTexture2DArray(S,0),ZJ=C.TEXTURE_2D_ARRAY;else w0.setTexture2D(S,0),ZJ=C.TEXTURE_2D;C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,S.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,S.unpackAlignment);let u0=C.getParameter(C.UNPACK_ROW_LENGTH),CJ=C.getParameter(C.UNPACK_IMAGE_HEIGHT),s8=C.getParameter(C.UNPACK_SKIP_PIXELS),PJ=C.getParameter(C.UNPACK_SKIP_ROWS),C9=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,e0.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,e0.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,C0),C.pixelStorei(C.UNPACK_SKIP_ROWS,T0),C.pixelStorei(C.UNPACK_SKIP_IMAGES,B0);let WJ=k.isDataArrayTexture||k.isData3DTexture,fJ=S.isDataArrayTexture||S.isData3DTexture;if(k.isDepthTexture){let bJ=M0.get(k),LJ=M0.get(S),_J=M0.get(bJ.__renderTarget),_7=M0.get(LJ.__renderTarget);z0.bindFramebuffer(C.READ_FRAMEBUFFER,_J.__webglFramebuffer),z0.bindFramebuffer(C.DRAW_FRAMEBUFFER,_7.__webglFramebuffer);for(let _8=0;_8<N0;_8++){if(WJ)C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,M0.get(k).__webglTexture,y,B0+_8),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,M0.get(S).__webglTexture,t,HJ+_8);C.blitFramebuffer(C0,T0,H0,D0,b0,i0,H0,D0,C.DEPTH_BUFFER_BIT,C.NEAREST)}z0.bindFramebuffer(C.READ_FRAMEBUFFER,null),z0.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(y!==0||k.isRenderTargetTexture||M0.has(k)){let bJ=M0.get(k),LJ=M0.get(S);z0.bindFramebuffer(C.READ_FRAMEBUFFER,OK),z0.bindFramebuffer(C.DRAW_FRAMEBUFFER,FK);for(let _J=0;_J<N0;_J++){if(WJ)C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,bJ.__webglTexture,y,B0+_J);else C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,bJ.__webglTexture,y);if(fJ)C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,LJ.__webglTexture,t,HJ+_J);else C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,LJ.__webglTexture,t);if(y!==0)C.blitFramebuffer(C0,T0,H0,D0,b0,i0,H0,D0,C.COLOR_BUFFER_BIT,C.NEAREST);else if(fJ)C.copyTexSubImage3D(ZJ,t,b0,i0,HJ+_J,C0,T0,H0,D0);else C.copyTexSubImage2D(ZJ,t,b0,i0,C0,T0,H0,D0)}z0.bindFramebuffer(C.READ_FRAMEBUFFER,null),z0.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(fJ)if(k.isDataTexture||k.isData3DTexture)C.texSubImage3D(ZJ,t,b0,i0,HJ,H0,D0,N0,a0,_0,e0.data);else if(S.isCompressedArrayTexture)C.compressedTexSubImage3D(ZJ,t,b0,i0,HJ,H0,D0,N0,a0,e0.data);else C.texSubImage3D(ZJ,t,b0,i0,HJ,H0,D0,N0,a0,_0,e0);else if(k.isDataTexture)C.texSubImage2D(C.TEXTURE_2D,t,b0,i0,H0,D0,a0,_0,e0.data);else if(k.isCompressedTexture)C.compressedTexSubImage2D(C.TEXTURE_2D,t,b0,i0,e0.width,e0.height,a0,e0.data);else C.texSubImage2D(C.TEXTURE_2D,t,b0,i0,H0,D0,a0,_0,e0);if(C.pixelStorei(C.UNPACK_ROW_LENGTH,u0),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,CJ),C.pixelStorei(C.UNPACK_SKIP_PIXELS,s8),C.pixelStorei(C.UNPACK_SKIP_ROWS,PJ),C.pixelStorei(C.UNPACK_SKIP_IMAGES,C9),t===0&&S.generateMipmaps)C.generateMipmap(ZJ);z0.unbindTexture()},this.copyTextureToTexture3D=function(k,S,b=null,h=null,y=0){return T8('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(k,S,b,h,y)},this.initRenderTarget=function(k){if(M0.get(k).__webglFramebuffer===void 0)w0.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)w0.setTextureCube(k,0);else if(k.isData3DTexture)w0.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)w0.setTexture2DArray(k,0);else w0.setTexture2D(k,0);z0.unbindTexture()},this.resetState=function(){T=0,_=0,A=null,z0.reset(),L0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=m0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=m0._getUnpackColorSpace()}}var IG=/^[og]\s*(.+)?/,_G=/^mtllib /,wG=/^usemtl /,CG=/^usemap /,oW=/\s+/,aW=new v,M$=new v,rW=new v,tW=new v,mJ=new v,F7=new j0;function PG(){let J={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(Q,$){if(this.object&&this.object.fromDeclaration===!1){this.object.name=Q,this.object.fromDeclaration=$!==!1;return}let Z=this.object&&typeof this.object.currentMaterial==="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0);if(this.object={name:Q||"",fromDeclaration:$!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(W,K){let H=this._finalize(!1);if(H&&(H.inherited||H.groupCount<=0))this.materials.splice(H.index,1);let Y={index:this.materials.length,name:W||"",mtllib:Array.isArray(K)&&K.length>0?K[K.length-1]:"",smooth:H!==void 0?H.smooth:this.smooth,groupStart:H!==void 0?H.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(X){let U={index:typeof X==="number"?X:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return U.clone=this.clone.bind(U),U}};return this.materials.push(Y),Y},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1];return},_finalize:function(W){let K=this.currentMaterial();if(K&&K.groupEnd===-1)K.groupEnd=this.geometry.vertices.length/3,K.groupCount=K.groupEnd-K.groupStart,K.inherited=!1;if(W&&this.materials.length>1){for(let H=this.materials.length-1;H>=0;H--)if(this.materials[H].groupCount<=0)this.materials.splice(H,1)}if(W&&this.materials.length===0)this.materials.push({name:"",smooth:this.smooth});return K}},Z&&Z.name&&typeof Z.clone==="function"){let W=Z.clone(0);W.inherited=!0,this.object.materials.push(W)}this.objects.push(this.object)},finalize:function(){if(this.object&&typeof this.object._finalize==="function")this.object._finalize(!0)},parseVertexIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/3)*3},parseNormalIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/3)*3},parseUVIndex:function(Q,$){let Z=parseInt(Q,10);return(Z>=0?Z-1:Z+$/2)*2},addVertex:function(Q,$,Z){let W=this.vertices,K=this.object.geometry.vertices;K.push(W[Q+0],W[Q+1],W[Q+2]),K.push(W[$+0],W[$+1],W[$+2]),K.push(W[Z+0],W[Z+1],W[Z+2])},addVertexPoint:function(Q){let $=this.vertices;this.object.geometry.vertices.push($[Q+0],$[Q+1],$[Q+2])},addVertexLine:function(Q){let $=this.vertices;this.object.geometry.vertices.push($[Q+0],$[Q+1],$[Q+2])},addNormal:function(Q,$,Z){let W=this.normals,K=this.object.geometry.normals;K.push(W[Q+0],W[Q+1],W[Q+2]),K.push(W[$+0],W[$+1],W[$+2]),K.push(W[Z+0],W[Z+1],W[Z+2])},addFaceNormal:function(Q,$,Z){let W=this.vertices,K=this.object.geometry.normals;aW.fromArray(W,Q),M$.fromArray(W,$),rW.fromArray(W,Z),mJ.subVectors(rW,M$),tW.subVectors(aW,M$),mJ.cross(tW),mJ.normalize(),K.push(mJ.x,mJ.y,mJ.z),K.push(mJ.x,mJ.y,mJ.z),K.push(mJ.x,mJ.y,mJ.z)},addColor:function(Q,$,Z){let W=this.colors,K=this.object.geometry.colors;if(W[Q]!==void 0)K.push(W[Q+0],W[Q+1],W[Q+2]);if(W[$]!==void 0)K.push(W[$+0],W[$+1],W[$+2]);if(W[Z]!==void 0)K.push(W[Z+0],W[Z+1],W[Z+2])},addUV:function(Q,$,Z){let W=this.uvs,K=this.object.geometry.uvs;K.push(W[Q+0],W[Q+1]),K.push(W[$+0],W[$+1]),K.push(W[Z+0],W[Z+1])},addDefaultUV:function(){let Q=this.object.geometry.uvs;Q.push(0,0),Q.push(0,0),Q.push(0,0)},addUVLine:function(Q){let $=this.uvs;this.object.geometry.uvs.push($[Q+0],$[Q+1])},addFace:function(Q,$,Z,W,K,H,Y,X,U){let G=this.vertices.length,N=this.parseVertexIndex(Q,G),E=this.parseVertexIndex($,G),O=this.parseVertexIndex(Z,G);if(this.addVertex(N,E,O),this.addColor(N,E,O),Y!==void 0&&Y!==""){let R=this.normals.length;N=this.parseNormalIndex(Y,R),E=this.parseNormalIndex(X,R),O=this.parseNormalIndex(U,R),this.addNormal(N,E,O)}else this.addFaceNormal(N,E,O);if(W!==void 0&&W!==""){let R=this.uvs.length;N=this.parseUVIndex(W,R),E=this.parseUVIndex(K,R),O=this.parseUVIndex(H,R),this.addUV(N,E,O),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(Q){this.object.geometry.type="Points";let $=this.vertices.length;for(let Z=0,W=Q.length;Z<W;Z++){let K=this.parseVertexIndex(Q[Z],$);this.addVertexPoint(K),this.addColor(K)}},addLineGeometry:function(Q,$){this.object.geometry.type="Line";let Z=this.vertices.length,W=this.uvs.length;for(let K=0,H=Q.length;K<H;K++)this.addVertexLine(this.parseVertexIndex(Q[K],Z));for(let K=0,H=$.length;K<H;K++)this.addUVLine(this.parseUVIndex($[K],W))}};return J.startObject("",!1),J}class R7 extends R9{constructor(J){super(J);this.materials=null}load(J,Q,$,Z){let W=this,K=new X7(this.manager);K.setPath(this.path),K.setRequestHeader(this.requestHeader),K.setWithCredentials(this.withCredentials),K.load(J,function(H){try{Q(W.parse(H))}catch(Y){if(Z)Z(Y);else console.error(Y);W.manager.itemError(J)}},$,Z)}setMaterials(J){return this.materials=J,this}parse(J){let Q=new PG;if(J.indexOf(`\r
`)!==-1)J=J.replace(/\r\n/g,`
`);if(J.indexOf("\\\n")!==-1)J=J.replace(/\\\n/g,"");let $=J.split(`
`),Z=[];for(let H=0,Y=$.length;H<Y;H++){let X=$[H].trimStart();if(X.length===0)continue;let U=X.charAt(0);if(U==="#")continue;if(U==="v"){let G=X.split(oW);switch(G[0]){case"v":if(Q.vertices.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3])),G.length>=7)F7.setRGB(parseFloat(G[4]),parseFloat(G[5]),parseFloat(G[6]),o6),Q.colors.push(F7.r,F7.g,F7.b);else Q.colors.push(void 0,void 0,void 0);break;case"vn":Q.normals.push(parseFloat(G[1]),parseFloat(G[2]),parseFloat(G[3]));break;case"vt":Q.uvs.push(parseFloat(G[1]),parseFloat(G[2]));break}}else if(U==="f"){let N=X.slice(1).trim().split(oW),E=[];for(let R=0,M=N.length;R<M;R++){let q=N[R];if(q.length>0){let D=q.split("/");E.push(D)}}let O=E[0];for(let R=1,M=E.length-1;R<M;R++){let q=E[R],D=E[R+1];Q.addFace(O[0],q[0],D[0],O[1],q[1],D[1],O[2],q[2],D[2])}}else if(U==="l"){let G=X.substring(1).trim().split(" "),N=[],E=[];if(X.indexOf("/")===-1)N=G;else for(let O=0,R=G.length;O<R;O++){let M=G[O].split("/");if(M[0]!=="")N.push(M[0]);if(M[1]!=="")E.push(M[1])}Q.addLineGeometry(N,E)}else if(U==="p"){let N=X.slice(1).trim().split(" ");Q.addPointGeometry(N)}else if((Z=IG.exec(X))!==null){let G=(" "+Z[0].slice(1).trim()).slice(1);Q.startObject(G)}else if(wG.test(X))Q.object.startMaterial(X.substring(7).trim(),Q.materialLibraries);else if(_G.test(X))Q.materialLibraries.push(X.substring(7).trim());else if(CG.test(X))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(U==="s"){if(Z=X.split(" "),Z.length>1){let N=Z[1].trim().toLowerCase();Q.object.smooth=N!=="0"&&N!=="off"}else Q.object.smooth=!0;let G=Q.object.currentMaterial();if(G)G.smooth=Q.object.smooth}else{if(X==="\x00")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+X+'"')}}Q.finalize();let W=new iJ;if(W.materialLibraries=[].concat(Q.materialLibraries),!(Q.objects.length===1&&Q.objects[0].geometry.vertices.length===0)===!0)for(let H=0,Y=Q.objects.length;H<Y;H++){let X=Q.objects[H],U=X.geometry,G=X.materials,N=U.type==="Line",E=U.type==="Points",O=!1;if(U.vertices.length===0)continue;let R=new MJ;if(R.setAttribute("position",new YJ(U.vertices,3)),U.normals.length>0)R.setAttribute("normal",new YJ(U.normals,3));if(U.colors.length>0)O=!0,R.setAttribute("color",new YJ(U.colors,3));if(U.hasUVIndices===!0)R.setAttribute("uv",new YJ(U.uvs,2));let M=[];for(let D=0,I=G.length;D<I;D++){let L=G[D],w=L.name+"_"+L.smooth+"_"+O,T=Q.materials[w];if(this.materials!==null){if(T=this.materials.create(L.name),N&&T&&!(T instanceof b8)){let _=new b8;yJ.prototype.copy.call(_,T),_.color.copy(T.color),T=_}else if(E&&T&&!(T instanceof V8)){let _=new V8({size:10,sizeAttenuation:!1});yJ.prototype.copy.call(_,T),_.color.copy(T.color),_.map=T.map,T=_}}if(T===void 0){if(N)T=new b8;else if(E)T=new V8({size:1,sizeAttenuation:!1});else T=new K7;T.name=L.name,T.flatShading=L.smooth?!1:!0,T.vertexColors=O,Q.materials[w]=T}M.push(T)}let q;if(M.length>1){for(let D=0,I=G.length;D<I;D++){let L=G[D];R.addGroup(L.groupStart,L.groupCount,D)}if(N)q=new i9(R,M);else if(E)q=new O9(R,M);else q=new FJ(R,M)}else if(N)q=new i9(R,M[0]);else if(E)q=new O9(R,M[0]);else q=new FJ(R,M[0]);q.name=X.name,W.add(q)}else if(Q.vertices.length>0){let H=new V8({size:1,sizeAttenuation:!1}),Y=new MJ;if(Y.setAttribute("position",new YJ(Q.vertices,3)),Q.colors.length>0&&Q.colors[0]!==void 0)Y.setAttribute("color",new YJ(Q.colors,3)),H.vertexColors=!0;let X=new O9(Y,H);W.add(X)}return W}}var AG={simple:" .:-=+*#%@",detailed:" .'`^\",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",blocks:" ░▒▓█"},TG=[[0,3],[1,4],[2,5],[6,7]],eW=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]].map((J)=>J.map((Q)=>(Q+0.5)/16)),SG=[[0,1],[2,3],[4,5],[6,7]],jG=[32,32,32,129922,118016,9624,118017,118018,118019,118020,9629,118021,118022,118023,118024,9600,118025,118026,118027,118028,130022,118029,118030,118031,118032,118033,118034,118035,118036,118037,118038,118039,118040,118041,118042,118043,118044,118045,118046,118047,130023,118048,118049,118050,118051,118052,118053,118054,118055,118056,118057,118058,118059,118060,118061,118062,118063,118064,118065,118066,118067,118068,118069,9608,32,118070,118071,118072,118073,118074,118075,118076,118077,118078,118079,118080,118081,118082,118083,118084,9622,118085,118086,118087,118088,9612,118089,118090,118091,118092,9630,118093,118094,118095,118096,9627,118097,118098,118099,118100,118101,118102,118103,118104,118105,118106,118107,118108,118109,118110,118111,118112,118113,118114,118115,118116,118117,118118,118119,118120,118121,118122,118123,118124,118125,118126,118127,118128,32,118129,118130,118131,118132,118133,118134,118135,118136,118137,118138,118139,118140,118141,118142,118143,118144,118145,118146,118147,118148,118149,118150,118151,118152,118153,118154,118155,118156,118157,118158,118159,9623,118160,118161,118162,118163,9626,118164,118165,118166,118167,9616,118168,118169,118170,118171,9628,118172,118173,118174,118175,118176,118177,118178,118179,118180,118181,118182,118183,118184,118185,118186,118187,118188,9602,118188,118189,118190,118191,118192,118193,118194,118195,118196,118197,118198,118199,118200,118201,118202,118203,118204,118205,118206,118207,118208,118209,118210,118211,118212,118213,118214,118215,118216,118217,118218,118219,118220,118221,118222,118223,118224,118225,118226,118227,118228,118229,118230,118231,118232,118233,118234,9604,118235,118236,118237,118238,9625,118239,118240,118241,118242,9631,118243,9608,118244,118245,9608],yG=jG.map((J)=>String.fromCodePoint(J));function vJ(J){let Q=document.getElementById(J);if(!Q)throw Error(`#${J} not found`);return Q}var n8=vJ("ascii"),z9=vJ("ascii-canvas"),B8=z9.getContext("2d"),W6=vJ("stage"),vG=vJ("fps"),fG=vJ("grid-size"),ZK=vJ("cols"),K6=vJ("style"),bG=vJ("ramp-label"),hG=vJ("ramp"),WK=vJ("auto-rotate"),xG=vJ("invert"),gG=vJ("reset"),JK=vJ("file-input");function KK(){let J=K6.value==="octant";bG.style.display=K6.value==="text"?"flex":"none",n8.style.display=J?"none":"block",z9.style.display=J?"block":"none"}KK();var Q6=new k$({antialias:!1,alpha:!1,preserveDrawingBuffer:!1});Q6.setPixelRatio(1);var w9=new Z7;w9.background=new j0(0);var B9=new zJ(35,1,0.1,100);B9.position.set(0,0,6);w9.add(new N7(16777215,0.35));var HK=new r9(16777215,1.1);HK.position.set(4,6,5);w9.add(HK);var YK=new r9(16777215,0.4);YK.position.set(-5,-3,-4);w9.add(YK);var pG=new H7({color:16777215}),$6=new iJ;w9.add($6);var J6=null,I9=null,c8=null,Z6=0,u8=0,L8=0,z8=0;function XK(J){if(J6)$6.remove(J6),J6.geometry.dispose();J.computeVertexNormals(),J.center();let $=new U8().setFromObject(new FJ(J)).getSize(new v),Z=Math.max($.x,$.y,$.z)||1;J.scale(2/Z,2/Z,2/Z),J6=new FJ(J,pG),$6.add(J6),$6.rotation.set(0,0,0)}function mG(J){let Q=J.attributes.position,$=J.index,Z=[];for(let H=0;H<Q.count;H++)Z.push(`v ${Q.getX(H).toFixed(5)} ${Q.getY(H).toFixed(5)} ${Q.getZ(H).toFixed(5)}`);let W=$?$.array:null,K=W?W.length:Q.count;for(let H=0;H<K;H+=3){let Y=(W?W[H]:H)+1,X=(W?W[H+1]:H+1)+1,U=(W?W[H+2]:H+2)+1;Z.push(`f ${Y} ${X} ${U}`)}return Z.join(`
`)}function dG(){let J=new a9(0.7,0.25,140,24),Q=mG(J),Z=new R7().parse(Q).children.find((W)=>W.isMesh);if(Z)XK(Z.geometry)}function lG(J){let $=new R7().parse(J).children.find((K)=>K.isMesh);if(!$)return;let Z=new MJ,W=$.geometry;if(Z.setAttribute("position",W.attributes.position),W.index)Z.setIndex(W.index);XK(Z)}dG();document.fonts.load('16px "Legacy Symbols"').catch(()=>{});var w$=!1,I$=0,_$=0,QK=new jJ,_9=new jJ,V$=6,L7=6;W6.addEventListener("pointerdown",(J)=>{w$=!0,I$=J.clientX,_$=J.clientY,W6.classList.add("dragging"),WK.checked=!1});window.addEventListener("pointerup",()=>{w$=!1,W6.classList.remove("dragging")});window.addEventListener("pointermove",(J)=>{if(!w$)return;let Q=J.clientX-I$,$=J.clientY-_$;I$=J.clientX,_$=J.clientY;let Z=0.008,W=new jJ().setFromEuler(new IJ($*Z,Q*Z,0,"XYZ"));_9.multiplyQuaternions(W,_9)});W6.addEventListener("wheel",(J)=>{J.preventDefault(),L7=Math.max(2,Math.min(20,L7*(1+(J.deltaY>0?0.1:-0.1))))},{passive:!1});gG.addEventListener("click",()=>{_9.identity(),L7=6});function UK(J){if(!J||!J.name.toLowerCase().endsWith(".obj"))return;let Q=new FileReader;Q.onload=()=>lG(Q.result),Q.readAsText(J)}JK.addEventListener("change",()=>UK(JK.files?.[0]));["dragover","dragenter"].forEach((J)=>window.addEventListener(J,(Q)=>{Q.preventDefault(),document.body.classList.add("dragover")}));["dragleave","drop"].forEach((J)=>window.addEventListener(J,(Q)=>{Q.preventDefault(),document.body.classList.remove("dragover")}));window.addEventListener("drop",(J)=>{J.preventDefault();let Q=J.dataTransfer?.files?.[0];UK(Q)});var uG=document.createElement("canvas"),$K=uG.getContext("2d"),k7=Math.min(window.devicePixelRatio||1,2),l8=16,z7=9,M7=0,V7=0;function B7(){let J=parseInt(ZK.value,10),Q=K6.value,$=getComputedStyle(n8).fontFamily,Z=100;$K.font=`100px ${$}`;let W=$K.measureText("M").width/100,K=window.innerWidth*0.94,H=window.innerHeight*0.8;l8=K/(J*W),z7=l8*W;let Y=Math.max(1,Math.floor(H/l8));n8.style.fontSize=`${l8}px`,n8.style.lineHeight="1",M7=J*z7,V7=Y*l8,z9.style.width=`${M7}px`,z9.style.height=`${V7}px`,z9.width=Math.round(M7*k7),z9.height=Math.round(V7*k7),B8.setTransform(k7,0,0,k7,0,0),B8.font=`${l8}px ${$}`,B8.textBaseline="top";let X=Q==="braille"||Q==="octant",U=X?J*2:J,G=X?Y*4:Y;if(Z6=J,u8=Y,U!==L8||G!==z8){if(L8=U,z8=G,I9)I9.dispose();I9=new cJ(L8,z8,{depthBuffer:!0,stencilBuffer:!1}),c8=new Uint8Array(L8*z8*4),B9.aspect=L8/z8,B9.updateProjectionMatrix(),fG.textContent=`${Z6} x ${u8}${X?` (${L8}x${z8} dots)`:""}`}}B7();window.addEventListener("resize",B7);ZK.addEventListener("input",B7);K6.addEventListener("change",()=>{KK(),B7()});var L9=[],L$=performance.now(),z$=0;function B$(J,Q){if(!c8)return 0;let Z=((z8-1-Q)*L8+J)*4;return(c8[Z]*0.299+c8[Z+1]*0.587+c8[Z+2]*0.114)/255}function GK(){if(requestAnimationFrame(GK),WK.checked){let Z=new jJ().setFromEuler(new IJ(0,0.012,0));_9.multiplyQuaternions(Z,_9)}if(QK.slerp(_9,0.15),$6.setRotationFromQuaternion(QK),V$+=(L7-V$)*0.15,B9.position.set(0,0,V$),B9.lookAt(0,0,0),!I9||!c8)return;Q6.setRenderTarget(I9),Q6.render(w9,B9),Q6.readRenderTargetPixels(I9,0,0,L8,z8,c8),Q6.setRenderTarget(null);let J=xG.checked,Q=K6.value;if(L9.length!==u8)L9=Array(u8);if(Q==="octant"){B8.clearRect(0,0,M7,V7);let Z=4;for(let W=0;W<u8;W++){let K=W*l8,H=0,Y=-1,X="";for(let U=0;U<Z6;U++){let G=0,N=0;for(let M=0;M<4;M++){let q=W*4+M,D=eW[M];for(let I=0;I<2;I++){let L=U*2+I,w=B$(L,q);if(N+=w,w>D[I])G|=1<<SG[M][I]}}let E=J?1-N/8:N/8,O=Math.round(E*255/Z)*Z,R=yG[G];if(O!==Y){if(X)B8.fillStyle=`rgb(${Y},${Y},${Y})`,B8.fillText(X,H*z7,K);H=U,Y=O,X=R}else X+=R}if(X)B8.fillStyle=`rgb(${Y},${Y},${Y})`,B8.fillText(X,H*z7,K)}}else if(Q==="braille"){for(let Z=0;Z<u8;Z++){let W="";for(let K=0;K<Z6;K++){let H=0;for(let Y=0;Y<4;Y++){let X=Z*4+Y,U=eW[Y];for(let G=0;G<2;G++){let N=K*2+G;if(B$(N,X)>U[G])H|=1<<TG[Y][G]}}W+=String.fromCharCode(10240+H)}L9[Z]=W}n8.textContent=L9.join(`
`)}else{let Z=AG[hG.value],W=Z.length-1;for(let K=0;K<u8;K++){let H="";for(let Y=0;Y<Z6;Y++){let X=B$(Y,K);H+=Z[Math.round(X*W)]}L9[K]=H}n8.textContent=L9.join(`
`)}W6.style.background=J?"#f0f0f0":"",n8.style.color=J?"#111":"",z$++;let $=performance.now();if($-L$>=500)vG.textContent=`${Math.round(z$*1000/($-L$))} fps`,z$=0,L$=$}requestAnimationFrame(GK);
