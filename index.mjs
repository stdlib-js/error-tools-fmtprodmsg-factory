// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(e,n){return s(n)?t(n,"url")&&(e.url=n.url,!r(e.url))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","url",e.url)):t(n,"message")&&(e.message=n.message,!r(e.message))?new TypeError(i("invalid option. `%s` option must be a string. Option: `%s`.","message",e.message)):null:new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",n))}function o(s){var t,r;if(t={url:"https://stdlib.io/docs/api/latest/error-decoder.html",message:"Minified stdlib error code: {{code}}. Visit {{url}} for the full message."},arguments.length>0&&(r=n(t,s)),r)throw r;return i;function i(){var s,r,i=arguments[0],n=t.url+"?code="+i;for(r=1;r<arguments.length;r++)n+="&arg[]="+encodeURIComponent(arguments[r]);return s=e(t.message,"{{url}}",n),s=e(s,"{{code}}",i)}}export{o as default};
//# sourceMappingURL=index.mjs.map
