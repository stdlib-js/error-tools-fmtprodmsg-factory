"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=s(function(j,g){
var h=require('@stdlib/assert-is-plain-object/dist'),l=require('@stdlib/assert-has-own-property/dist'),m=require('@stdlib/assert-is-string/dist').isPrimitive,u=require('@stdlib/error-tools-fmtprodmsg/dist');function w(e,r){return h(r)?l(r,"url")&&(e.url=r.url,!m(e.url))?new TypeError(u('0Np2W',"url",e.url)):l(r,"message")&&(e.message=r.message,!m(e.message))?new TypeError(u('0Np2W',"message",e.message)):null:new TypeError(u('0Np2V',r));}g.exports=w
});var f=s(function(M,c){
function O(){return{url:"https://stdlib.io/docs/api/latest/error-decoder.html",message:"Minified stdlib error code: {{code}}. Visit {{url}} for the full message."}}c.exports=O
});var q=s(function(V,p){
var v=require('@stdlib/string-replace/dist'),x=d(),y=f();function E(e){var r,a;if(r=y(),arguments.length>0&&(a=x(r,e)),a)throw a;return b;function b(){var n=arguments[0],o=r.url+"?code="+n,t,i;for(i=1;i<arguments.length;i++)o+="&arg[]="+encodeURIComponent(arguments[i]);return t=v(r.message,"{{url}}",o),t=v(t,"{{code}}",n),t}}p.exports=E
});var P=q();module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
