// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,E=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(F(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function N(r){return"string"==typeof r}function T(r){var e,t,n;if(!N(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return U.apply(null,t)}var k,V=Object.prototype,P=V.toString,G=V.__defineGetter__,L=V.__defineSetter__,$=V.__lookupGetter__,C=V.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===P.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,e,t.get),a&&L&&L.call(r,e,t.set),r};var H=k;function W(r,e,t){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function R(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&Y.call(r,e)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"";var J=Z()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[D],e=z(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function tr(r){return R(r)||er(r)}function nr(){return new Function("return this;")()}W(tr,"isPrimitive",R),W(tr,"isObject",er);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ur="object"==typeof ar?ar:null,cr="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!R(r))throw new TypeError(T("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(cr)return cr;if(or)return or;if(ir)return ir;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,sr=Int8Array;function pr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;W(pr,"REGEXP",yr);var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function dr(r){return null!==r&&"object"==typeof r}function gr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return dr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}W(dr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(T("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!vr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(dr));var br="function"==typeof B||"object"==typeof sr||"function"==typeof lr?function(r){return gr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e};function wr(r){return"function"===br(r)}function hr(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&wr(r.next)}function mr(r){return"number"==typeof r}var jr=Number,Ar=jr.prototype.toString;var _r=Z();function Er(r){return"object"==typeof r&&(r instanceof jr||(_r?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Or(r){return mr(r)||Er(r)}W(Or,"isPrimitive",mr),W(Or,"isObject",Er);var Sr="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null;var Ur,xr=Object,Fr=Object.getPrototypeOf;Ur=wr(Object.getPrototypeOf)?Fr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ir=Ur;var Nr=Object.prototype;function Tr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!vr(r)}(r)&&(e=function(r){return null==r?null:(r=xr(r),Ir(r))}(r),!e||!z(r,"constructor")&&z(e,"constructor")&&wr(e.constructor)&&"[object Function]"===J(e.constructor)&&z(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===Nr||function(r){var e;for(e in r)if(!z(r,e))return!1;return!0}(r)))}function kr(r,e){return Tr(e)?(z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(T("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Vr(r,e,t){var n,o,i,a;if(!hr(r))throw new TypeError(T("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!wr(e))throw new TypeError(T("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=kr(n,t)))throw i;return W(o={},"next",u),W(o,"return",c),Sr&&wr(r[Sr])&&W(o,Sr,f),o;function u(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:mr(t.value)?e(t.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Vr(r[Sr](),e,n)}}var Pr="function"==typeof Uint32Array;var Gr="function"==typeof Uint32Array?Uint32Array:null;var Lr,$r="function"==typeof Uint32Array?Uint32Array:void 0;Lr=function(){var r,e,t;if("function"!=typeof Gr)return!1;try{e=new Gr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Pr&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};var Cr=Lr,Hr="function"==typeof Float64Array;var Wr="function"==typeof Float64Array?Float64Array:null;var Br,Rr="function"==typeof Float64Array?Float64Array:void 0;Br=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr([1,3.14,-3.14,NaN]),t=e,r=(Hr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")};var Mr=Br,Zr="function"==typeof Uint8Array;var Xr="function"==typeof Uint8Array?Uint8Array:null;var Yr,zr="function"==typeof Uint8Array?Uint8Array:void 0;Yr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr(e=[1,3.14,-3.14,256,257]),t=e,r=(Zr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")};var qr=Yr,Dr="function"==typeof Uint16Array;var Jr="function"==typeof Uint16Array?Uint16Array:null;var Kr,Qr="function"==typeof Uint16Array?Uint16Array:void 0;Kr=function(){var r,e,t;if("function"!=typeof Jr)return!1;try{e=new Jr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Dr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var re,ee={uint16:Kr,uint8:qr};(re=new ee.uint16(1))[0]=4660;var te=52===new ee.uint8(re.buffer)[0],ne=!0===te?1:0,oe=new Mr(1),ie=new Cr(oe.buffer);function ae(r){return oe[0]=r,ie[ne]}function ue(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var ce=-.16666666666666632;function fe(r,e){var t,n,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===e?r+n*(ce+o*t):r-(o*(.5*e-n*t)-e-n*ce)}var le,se,pe=!0===te?0:1,ye=new Mr(1),ve=new Cr(ye.buffer);!0===te?(le=1,se=0):(le=0,se=1);var de={HIGH:le,LOW:se},ge=new Mr(1),be=new Cr(ge.buffer),we=de.HIGH,he=de.LOW;function me(r,e){return be[we]=r,be[he]=e,ge[0]}var je=Math.floor,Ae=Number.POSITIVE_INFINITY,_e=jr.NEGATIVE_INFINITY;function Ee(r){return r!=r}function Oe(r){return r===Ae||r===_e}var Se,Ue;!0===te?(Se=1,Ue=0):(Se=0,Ue=1);var xe={HIGH:Se,LOW:Ue},Fe=new Mr(1),Ie=new Cr(Fe.buffer),Ne=xe.HIGH,Te=xe.LOW;function ke(r,e,t,n){return Fe[0]=r,e[n]=Ie[Ne],e[n+t]=Ie[Te],e}function Ve(r){return ke(r,[0,0],1,0)}W(Ve,"assign",ke);var Pe=[0,0];function Ge(r,e,t,n){return Ee(r)||Oe(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return Ge(r,[0,0],1,0)}),"assign",Ge);var Le=[0,0],$e=[0,0];function Ce(r,e){var t,n,o,i,a,u;return 0===e||0===r||Ee(r)||Oe(r)?r:(Ge(r,Le,1,0),e+=Le[1],e+=function(r){var e=ae(r);return(e=(2146435072&e)>>>20)-1023|0}(r=Le[0]),e<-1074?(o=0,i=r,Ve.assign(o,Pe,1,0),a=Pe[0],a&=2147483647,u=ae(i),me(a|=u&=2147483648,Pe[1])):e>1023?r<0?_e:Ae:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Ve.assign(r,$e,1,0),t=$e[0],t&=2148532223,n*me(t|=e+1023<<20,$e[1])))}function He(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var We=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Be=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Re=5.960464477539063e-8,Me=He(20),Ze=He(20),Xe=He(20),Ye=He(20);function ze(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=Re*b|0,Ye[y]=b-16777216*l|0,b=n[g-1]+l,g-=1;if(b=Ce(b,o),b-=8*je(.125*b),b-=d=0|b,s=0,o>0?(d+=y=Ye[t-1]>>24-o,Ye[t-1]-=y<<24-o,s=Ye[t-1]>>23-o):0===o?s=Ye[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=Ye[y],0===f?0!==g&&(f=1,Ye[y]=16777216-g):Ye[y]=16777215-g;if(o>0)switch(o){case 1:Ye[t-1]&=8388607;break;case 2:Ye[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Ce(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=Ye[y];if(0===g){for(v=1;0===Ye[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=We[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return ze(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===Ye[t];)t-=1,o-=24;else(b=Ce(b,-o))>=16777216?(l=Re*b|0,Ye[t]=b-16777216*l|0,o+=24,Ye[t+=1]=l):Ye[t]=0|b;for(l=Ce(1,o),y=t;y>=0;y--)n[y]=l*Ye[y],l*=Re;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=Be[v]*n[y+v];Xe[t-y]=l}for(l=0,y=t;y>=0;y--)l+=Xe[y];for(e[0]=0===s?l:-l,l=Xe[0]-l,y=1;y<=t;y++)l+=Xe[y];return e[1]=0===s?l:-l,7&d}function qe(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)Me[c]=f<0?0:We[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*Me[a+(c-f)];Ze[c]=o}return 4,ze(r,e,4,Ze,u,4,i,a,Me)}var De=Math.round;function Je(r,e,t){var n,o,i,a,u;return i=r-1.5707963267341256*(n=De(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=i-a,u-(ae(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),t[0]=i-a,u-(ae(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var Ke=1.5707963267341256,Qe=6077100506506192e-26,rt=2*Qe,et=4*Qe,tt=[0,0,0],nt=[0,0];function ot(r,e){var t,n,o,i,a,u,c;if((o=2147483647&ae(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Je(r,o,e):o<=1073928572?r>0?(c=r-Ke,e[0]=c-Qe,e[1]=c-e[0]-Qe,1):(c=r+Ke,e[0]=c+Qe,e[1]=c-e[0]+Qe,-1):r>0?(c=r-2*Ke,e[0]=c-rt,e[1]=c-e[0]-rt,2):(c=r+2*Ke,e[0]=c+rt,e[1]=c-e[0]+rt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Je(r,o,e):r>0?(c=r-3*Ke,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*Ke,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===o?Je(r,o,e):r>0?(c=r-4*Ke,e[0]=c-et,e[1]=c-e[0]-et,4):(c=r+4*Ke,e[0]=c+et,e[1]=c-e[0]+et,-4);if(o<1094263291)return Je(r,o,e);if(o>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return ye[0]=r,ve[pe]}(r),c=me(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)tt[a]=0|c,c=16777216*(c-tt[a]);for(tt[2]=c,i=3;0===tt[i-1];)i-=1;return u=qe(tt,nt,n,i),r<0?(e[0]=-nt[0],e[1]=-nt[1],-u):(e[0]=nt[0],e[1]=nt[1],u)}var it=[0,0];function at(r){return 1+function(r){var e;if(e=ae(r),(e&=2147483647)<=1072243195)return e<1044381696?1:ue(r,0);if(e>=2146435072)return NaN;switch(3&ot(r,it)){case 0:return ue(it[0],it[1]);case 1:return-fe(it[0],it[1]);case 2:return-ue(it[0],it[1]);default:return fe(it[0],it[1])}}(r)}function ut(r){return Vr(r,at)}export{ut as default};
//# sourceMappingURL=mod.js.map
