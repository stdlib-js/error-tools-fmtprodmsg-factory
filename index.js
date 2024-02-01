// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).fmtprodmsgFactory=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(r){return"string"==typeof r}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":s(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),r.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var _=String.fromCharCode,x=isNaN,O=Array.isArray;function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,i,a,s,l,f,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",l=1,f=0;f<r.length;f++)if(u(n=r[f]))s+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,x(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=k.exec(r);n;)(e=r.slice(o,k.lastIndex-n[0].length)).length&&t.push(e),t.push(V(n)),o=k.lastIndex,n=k.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function F(r){return"string"==typeof r}function P(r){var e,t,n;if(!F(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var $,R=Object.prototype,C=R.toString,I=R.__defineGetter__,B=R.__defineSetter__,L=R.__lookupGetter__,G=R.__lookupSetter__;$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(L.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&I&&I.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var M=$;function Z(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(r){return"string"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&z.call(r,e)}var D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"";var J=N()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[H],e=q(r,H);try{r[H]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[H]=t:delete r[H],n}:function(r){return X.call(r)},K=String.prototype.valueOf;var Q=N();function Y(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function rr(r){return U(r)||Y(r)}Z(rr,"isPrimitive",U),Z(rr,"isObject",Y);var er=/[-\/\\^$*+?.()|[\]{}]/g;var tr=/./;function nr(r){return"boolean"==typeof r}var or=Boolean,ir=Boolean.prototype.toString;var ar=N();function cr(r){return"object"==typeof r&&(r instanceof or||(ar?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function ur(r){return nr(r)||cr(r)}function sr(){return new Function("return this;")()}Z(ur,"isPrimitive",nr),Z(ur,"isObject",cr);var lr="object"==typeof self?self:null,fr="object"==typeof window?window:null,pr="object"==typeof global?global:null,gr="object"==typeof globalThis?globalThis:null;var dr=function(r){if(arguments.length){if(!nr(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return sr()}if(gr)return gr;if(lr)return lr;if(fr)return fr;if(pr)return pr;throw new Error("unexpected error. Unable to resolve global object.")}(),br=dr.document&&dr.document.childNodes,yr=Int8Array;function hr(){return/^\s*function\s*([^(]*)/i}var vr=/^\s*function\s*([^(]*)/i;Z(hr,"REGEXP",vr);var mr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};function wr(r){return null!==r&&"object"==typeof r}function jr(r){var e,t,n,o;if(("Object"===(t=J(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vr.exec(n.toString()))return e[1]}return wr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Z(wr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!mr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(wr));var Er="function"==typeof tr||"object"==typeof yr||"function"==typeof br?function(r){return jr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?jr(r).toLowerCase():e};function _r(r){return"function"===Er(r)}var xr=RegExp.prototype.exec;var Or=N();function Sr(r){return"object"==typeof r&&(r instanceof RegExp||(Or?function(r){try{return xr.call(r),!0}catch(r){return!1}}(r):"[object RegExp]"===J(r)))}function Tr(r,e,t){if(!U(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));if(U(e))e=new RegExp(function(r){var e,t;if(!U(r))throw new TypeError(P("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(er,"\\$&"):(e=(e=r.substring(1,t)).replace(er,"\\$&"),r=r[0]+e+r.substring(t))}(e),"g");else if(!Sr(e))throw new TypeError(P("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!U(t)&&!_r(t))throw new TypeError(P("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return function(r,e,t){return r.replace(e,t)}(r,e,t)}var kr,Vr=Object,Ar=Object.getPrototypeOf;kr=_r(Object.getPrototypeOf)?Ar:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Fr=kr;var Pr=Object.prototype;function $r(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!mr(r)}(r)&&(e=function(r){return null==r?null:(r=Vr(r),Fr(r))}(r),!e||!q(r,"constructor")&&q(e,"constructor")&&_r(e.constructor)&&"[object Function]"===J(e.constructor)&&q(e,"isPrototypeOf")&&_r(e.isPrototypeOf)&&(e===Pr||function(r){var e;for(e in r)if(!q(r,e))return!1;return!0}(r)))}function Rr(r,e){return $r(e)?q(e,"url")&&(r.url=e.url,!U(r.url))?new TypeError(P("invalid option. `%s` option must be a string. Option: `%s`.","url",r.url)):q(e,"message")&&(r.message=e.message,!U(r.message))?new TypeError(P("invalid option. `%s` option must be a string. Option: `%s`.","message",r.message)):null:new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",e))}return function(r){var e,t;if(e={url:"https://stdlib.io/docs/api/latest/error-decoder.html",message:"Minified stdlib error code: {{code}}. Visit {{url}} for the full message."},arguments.length>0&&(t=Rr(e,r)),t)throw t;return n;function n(){var r,t,n=arguments[0],o=e.url+"?code="+n;for(t=1;t<arguments.length;t++)o+="&arg[]="+encodeURIComponent(arguments[t]);return r=Tr(e.message,"{{url}}",o),r=Tr(r,"{{code}}",n)}}}));
//# sourceMappingURL=index.js.map
